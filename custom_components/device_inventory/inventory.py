"""Build the device inventory from the Home Assistant registries."""

from __future__ import annotations

import ipaddress
import re
import socket
from typing import Any
from urllib.parse import urlparse

from homeassistant.core import HomeAssistant
from homeassistant.helpers import (
    area_registry as ar,
    device_registry as dr,
    entity_registry as er,
)

CHANNEL_DOMAINS = {"switch", "light", "cover", "lock", "valve", "fan"}
# integrations whose multi-channel devices (several switches / lights / covers on ONE device) get sub-rows; Shelly already has real
# sub-devices, WLED / FRITZ!Box entities are settings and not channels
CHANNEL_INTEGRATIONS = {"homematicip_local", "homematic", "homematicip_cloud", "mqtt", "esphome", "tasmota", "zha", "deconz", "matter", "zwave_js", "hue", "tuya", "sonoff"}

from .const import CLASS_MAP, OTHER, SONOFF_HINTS, WEAK_INTEGRATIONS

UNAVAILABLE = ("unavailable", "unknown")
IP_ENTITY = re.compile(r"(^|_)ip(_address)?$")
BLE_SWITCH = re.compile(r"aioshelly_ble_integration")
INTERNET_SWITCH = re.compile(r"internet_?access|internetzugang")


def _valid_ip(value: Any) -> str | None:
    """Return the value if it is a plain IPv4/IPv6 address."""
    if not isinstance(value, str):
        return None
    try:
        return str(ipaddress.ip_address(value.strip()))
    except ValueError:
        return None


BLE_TRACKER_PLATFORMS = ("private_ble_device", "bermuda")


def _scanner_name(hass: HomeAssistant, source: Any) -> str | None:
    """Name of the Bluetooth scanner (e.g. a Shelly or ESPHome proxy) behind a source address."""
    if not isinstance(source, str) or not source:
        return None
    try:
        from homeassistant.components import bluetooth as ha_bluetooth  # noqa: PLC0415

        scanner = ha_bluetooth.async_scanner_by_source(hass, source)
        return scanner.name if scanner else None
    except Exception:  # noqa: BLE001 - optional detail, never break the inventory
        return None


def _all_devices(dev_reg: dr.DeviceRegistry) -> list[dr.DeviceEntry]:
    """All device entries without touching deprecated registry accessors.

    Home Assistant 2026.11 deprecates ``dev_reg.devices.values()`` and iterating it yields the
    entries directly; older versions yield the ids. Every deprecated access makes Home Assistant
    inspect the call stack, which is very slow when done thousands of times.
    """
    devices = dev_reg.devices
    first = next(iter(devices), None)
    if first is None:
        return []
    if isinstance(first, str):  # older Home Assistant: mapping id -> entry
        return list(devices.values())
    return list(devices)


def _lan_ip(value: Any) -> str | None:
    """Like _valid_ip, but only addresses of the own network (an 'external IP' sensor, e.g. the FRITZ!Box WAN address, is no device IP)."""
    ip = _valid_ip(value)
    if ip and ipaddress.ip_address(ip).is_private:
        return ip
    return None


def _server_ip(hass: HomeAssistant) -> str | None:
    """IP address of the machine Home Assistant runs on (the server itself is no device in the registry)."""
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as sock:
            sock.connect(("10.255.255.255", 1))  # no packet is sent, the OS only picks the outgoing interface
            ip = _valid_ip(sock.getsockname()[0])
            if ip and not ip.startswith("127."):
                return ip
    except OSError:
        pass
    for url in (hass.config.internal_url, hass.config.external_url):
        host = urlparse(url).hostname if url else None
        if _valid_ip(host):
            return _valid_ip(host)
    return None


def _entry_ids(dev: dr.DeviceEntry) -> tuple[str, ...]:
    """Config entry ids of a device (``config_entry_id`` on 2026.11+, ``config_entries`` before)."""
    single = getattr(dev, "config_entry_id", None)
    if single:
        return (single,)
    return tuple(dev.config_entries)


def _merge_same_phone(result: list[dict[str, Any]], prefer: set[str]) -> list[dict[str, Any]]:
    """One row per Bluetooth device: Private BLE Device and Bermuda each create a device with the same name."""
    groups: dict[str, list[dict[str, Any]]] = {}
    for d in result:
        if "bluetooth" in d["classes"] and d.get("ble"):
            groups.setdefault(d["name"].strip().lower(), []).append(d)
    drop: set[str] = set()
    for members in groups.values():
        if len(members) < 2:
            continue
        # the device that already carries notes / photos stays, otherwise the one with a scanner (Bermuda)
        members.sort(key=lambda m: (m["id"] not in prefer, not (m["ble"] or {}).get("scanner")))
        primary, others = members[0], members[1:]
        for other in others:
            ble = primary["ble"] or {}
            for key, value in (other["ble"] or {}).items():
                if ble.get(key) in (None, "") and value not in (None, ""):
                    ble[key] = value
            primary["ble"] = ble
            for key in ("area", "ip", "mac", "rssi", "temp", "manufacturer", "model", "sw_version", "battery", "battery_low"):
                if primary.get(key) in (None, "") and other.get(key) not in (None, ""):
                    primary[key] = other[key]
            primary["online"] = primary["online"] or other["online"]
            if other.get("last_seen") and (not primary.get("last_seen") or other["last_seen"] > primary["last_seen"]):
                primary["last_seen"] = other["last_seen"]
            primary["classes"] = sorted(set(primary["classes"]) | set(other["classes"]))
            primary["integrations"] = sorted(set(primary["integrations"]) | set(other["integrations"]))
            drop.add(other["id"])
    return [d for d in result if d["id"] not in drop]


def build_inventory(hass: HomeAssistant, prefer: set[str] | None = None) -> list[dict[str, Any]]:
    """Return one dict per physical device (service entries are skipped)."""
    dev_reg = dr.async_get(hass)
    ent_reg = er.async_get(hass)
    area_reg = ar.async_get(hass)
    all_devices = _all_devices(dev_reg)
    entry_ids = {dev.id: _entry_ids(dev) for dev in all_devices}
    devices_per_entry: dict[str, int] = {}
    for ids in entry_ids.values():
        for entry_id in ids:
            devices_per_entry[entry_id] = devices_per_entry.get(entry_id, 0) + 1
    entries = {eid: hass.config_entries.async_get_entry(eid) for eid in devices_per_entry}
    result: list[dict[str, Any]] = []

    for dev in all_devices:
        if dev.entry_type is dr.DeviceEntryType.SERVICE or dev.disabled_by:
            continue

        domains: set[str] = set()
        for entry_id in entry_ids[dev.id]:
            entry = entries.get(entry_id)
            if entry:
                domains.add(entry.domain)
        class_set = {CLASS_MAP[d] for d in domains if d in CLASS_MAP}
        maker_model = f"{dev.manufacturer or ''} {dev.model or ''}".lower()
        if any(h in maker_model for h in SONOFF_HINTS):
            class_set.add("sonoff")
        classes = sorted(class_set) or [OTHER]

        ip = None
        # entries that belong to exactly one device (Shelly, ESPHome, WLED, ...) know the host
        for entry_id in entry_ids[dev.id]:
            entry = entries.get(entry_id)
            if entry and devices_per_entry.get(entry_id) == 1:
                host = entry.data.get("host") or entry.data.get("ip_address")
                if isinstance(host, str) and host:
                    ip = host
                    break
        entities = er.async_entries_for_device(ent_reg, dev.id)
        if not entities:
            continue  # registry shell without any entity (e.g. Bluetooth scanner placeholder)
        alive = 0
        last_seen = None
        battery = None
        battery_low = None
        primary_entity = None
        internet_switch = None
        ble_switch = None
        temp = None
        temp_prio = -1
        rssi = None
        distance = None
        tracker = None
        sonoff_hint = False
        chan: list[tuple[Any, Any]] = []
        for ent in entities:
            state = hass.states.get(ent.entity_id)
            if state is None:
                continue
            primary_entity = primary_entity or ent.entity_id
            if ent.domain in CHANNEL_DOMAINS and not ent.entity_category and not ent.hidden_by and not ent.disabled_by:
                chan.append((ent, state))
            if not sonoff_hint and "sonoff" in ent.entity_id:
                sonoff_hint = True
            if internet_switch is None and ent.domain == "switch" and INTERNET_SWITCH.search(ent.entity_id):
                internet_switch = ent.entity_id
            if tracker is None and ent.domain == "device_tracker" and ent.platform in BLE_TRACKER_PLATFORMS:
                tracker = ent
            if ble_switch is None and ent.domain == "switch" and BLE_SWITCH.search(ent.entity_id):
                ble_switch = ent.entity_id
            if ent.domain == "sensor" and state.state not in UNAVAILABLE:
                dclass = ent.device_class or ent.original_device_class
                if dclass == "temperature":
                    prio = 2 if ("device_temp" in ent.entity_id or "internal_temp" in ent.entity_id) else (1 if ent.entity_category else 0)
                    if prio > temp_prio:
                        try:
                            temp = round(float(state.state), 1)
                            temp_prio = prio
                        except ValueError:
                            pass
                elif dclass == "distance" and distance is None:
                    try:
                        distance = round(float(state.state), 1)
                    except ValueError:
                        pass
                elif dclass == "signal_strength" and rssi is None:
                    try:
                        rssi = round(float(state.state))
                    except ValueError:
                        pass
            if ip is None:
                if IP_ENTITY.search(ent.entity_id.split(".", 1)[1]):
                    ip = _lan_ip(state.state)
                if ip is None:
                    ip = _lan_ip(state.attributes.get("ip_address") or state.attributes.get("ip"))
            if state.state not in UNAVAILABLE:
                alive += 1
            if last_seen is None or state.last_updated > last_seen:
                last_seen = state.last_updated
            device_class = ent.device_class or ent.original_device_class
            if device_class == "battery":
                if ent.domain == "binary_sensor":
                    if state.state in ("on", "off") and battery_low is None:
                        battery_low = state.state == "on"
                elif battery is None:
                    try:
                        battery = round(float(state.state))
                    except ValueError:
                        pass

        if ip is None and dev.configuration_url:
            host = urlparse(str(dev.configuration_url)).hostname
            ip = _valid_ip(host)
        mac = next((v for k, v in dev.connections if k == "mac"), None) or next(
            (v for k, v in dev.connections if k == "bluetooth"), None
        )
        if sonoff_hint and "sonoff" not in classes:
            classes = [c for c in classes if c != OTHER] + ["sonoff"]
        ble = None
        ble_area = None
        if tracker is not None:
            tstate = hass.states.get(tracker.entity_id)
            attrs = tstate.attributes if tstate else {}
            if rssi is None:
                try:
                    rssi = round(float(attrs.get("rssi"))) if attrs.get("rssi") is not None else None
                except (TypeError, ValueError):
                    pass
            if distance is None:
                for key in ("distance", "area_distance"):
                    try:
                        if attrs.get(key) is not None:
                            distance = round(float(attrs[key]), 1)
                            break
                    except (TypeError, ValueError):
                        pass
            ble_area = attrs.get("area")
            entry = entries.get(tracker.config_entry_id) if tracker.config_entry_id else None
            ble = {
                "home": (tstate.state == "home") if tstate and tstate.state in ("home", "not_home") else None,
                "distance": distance,
                "address": attrs.get("current_address") or attrs.get("address") or (mac if mac else None),
                "scanner": attrs.get("scanner") or _scanner_name(hass, attrs.get("source")),
                "irk": entry.data.get("irk") if entry is not None else None,
            }
        area = area_reg.async_get_area(dev.area_id) if dev.area_id else None
        result.append(
            {
                "id": dev.id,
                "parent": dev.via_device_id,
                "name": dev.name_by_user or dev.name or dev.id,
                "manufacturer": dev.manufacturer,
                "model": dev.model,
                "sw_version": dev.sw_version,
                "area": area.name if area else (ble_area if isinstance(ble_area, str) else None),
                "mac": mac.upper() if mac else None,
                "ip": ip,
                "classes": classes,
                "integrations": sorted(domains),
                "_weak": bool(domains) and domains <= WEAK_INTEGRATIONS,
                "online": alive > 0,
                "battery": battery,
                "battery_low": battery_low,
                "last_seen": last_seen.isoformat() if last_seen else None,
                "entity": primary_entity,
                "internet_switch": internet_switch,
                "ble_switch": ble_switch,
                "temp": temp,
                "rssi": rssi,
                "ble": ble,
                "_chan": chan if (domains & CHANNEL_INTEGRATIONS and len(chan) > 1) else [],
            }
        )

    # drop network/Bluetooth mirror devices when a real device has the same MAC
    real_by_mac = {d["mac"]: d for d in result if d["mac"] and not d["_weak"]}
    for d in result:
        # the FRITZ!Box "internet access" switch lives on the mirror device: hand it to the real device
        if d["_weak"] and d["internet_switch"] and d["mac"] in real_by_mac:
            real = real_by_mac[d["mac"]]
            if not real["internet_switch"]:
                real["internet_switch"] = d["internet_switch"]
    result = [d for d in result if not (d["_weak"] and d["mac"] in real_by_mac)]
    # sub-channels: a device whose via_device is another listed device of the same config entry
    ids = {d["id"] for d in result}
    for d in result:
        pid = d.get("parent")
        if not pid or pid == d["id"] or pid not in ids or not (set(entry_ids.get(d["id"], ())) & set(entry_ids.get(pid, ()))):
            d["parent"] = None
    result = _merge_same_phone(result, prefer or set())
    # the channels of a multi-channel device (switch actuators, relays ...) become sub-rows like the Shelly channels
    kids: list[dict[str, Any]] = []
    for d in result:
        chan = d.pop("_chan", [])
        prefix = d["name"].strip().lower()
        for ent, state in chan:
            label = str(state.attributes.get("friendly_name") or ent.name or ent.original_name or ent.entity_id)
            if label.lower().startswith(prefix) and len(label) > len(prefix):
                label = label[len(prefix):].strip(" -_:") or label
            kids.append(
                {
                    "id": f"{d['id']}~{ent.entity_id}",
                    "parent": d["id"],
                    "name": label,
                    "manufacturer": d["manufacturer"],
                    "model": ent.domain,
                    "sw_version": None,
                    "area": d["area"],
                    "mac": None,
                    "ip": None,
                    "classes": d["classes"],
                    "integrations": d["integrations"],
                    "online": state.state != "unavailable",
                    "battery": None,
                    "battery_low": None,
                    "last_seen": state.last_updated.isoformat(),
                    "entity": ent.entity_id,
                    "internet_switch": None,
                    "ble_switch": None,
                    "temp": None,
                    "rssi": None,
                    "ble": {"home": None, "distance": None, "address": None, "scanner": None, "irk": None},
                }
            )
    result.extend(kids)
    # Modbus (YAML) creates entities but no devices: every Modbus entity gets one row of its own in the Modbus tab
    for ent in list(ent_reg.entities.values()):
        if ent.platform != "modbus" or ent.device_id or ent.disabled_by or ent.hidden_by:
            continue
        state = hass.states.get(ent.entity_id)
        if state is None:
            continue
        area = area_reg.async_get_area(ent.area_id) if ent.area_id else None
        result.append(
            {
                "id": f"modbus~{ent.entity_id}",
                "parent": None,
                "name": str(state.attributes.get("friendly_name") or ent.original_name or ent.entity_id),
                "manufacturer": None,
                "model": ent.domain,
                "sw_version": None,
                "area": area.name if area else None,
                "mac": None,
                "ip": None,
                "classes": ["modbus"],
                "integrations": ["modbus"],
                "online": state.state != "unavailable",
                "battery": None,
                "battery_low": None,
                "last_seen": state.last_updated.isoformat(),
                "entity": ent.entity_id,
                "internet_switch": None,
                "ble_switch": None,
                "temp": None,
                "rssi": None,
                "ble": {"home": None, "distance": None, "address": None, "scanner": None, "irk": None},
            }
        )
    # the Home Assistant server itself is no device in the registry: add a row so its IP can be found
    server_ip = _server_ip(hass)
    if server_ip and not any(d["ip"] == server_ip for d in result):
        result.append(
            {
                "id": "ha~server",
                "parent": None,
                "name": f"{hass.config.location_name} (Home Assistant)",
                "manufacturer": "Home Assistant",
                "model": "Server",
                "sw_version": None,
                "area": None,
                "mac": None,
                "ip": server_ip,
                "classes": [OTHER],
                "integrations": ["homeassistant"],
                "online": True,
                "battery": None,
                "battery_low": None,
                "last_seen": None,
                "entity": None,
                "internet_switch": None,
                "ble_switch": None,
                "temp": None,
                "rssi": None,
                "ble": {"home": None, "distance": None, "address": None, "scanner": None, "irk": None},
            }
        )
    # network clients known only as device trackers (FRITZ!Box, router, nmap ...), e.g. a Proxmox host or a PC: one row per IP not yet listed
    known_ips = {d["ip"] for d in result if d["ip"]}
    known_macs = {d["mac"] for d in result if d["mac"]}
    for state in hass.states.async_all("device_tracker"):
        attrs = state.attributes
        ip = _valid_ip(attrs.get("ip") or attrs.get("ip_address"))
        if not ip or ip in known_ips:
            continue
        mac = str(attrs.get("mac") or "").upper() or None
        if mac and mac in known_macs:
            continue
        known_ips.add(ip)
        result.append(
            {
                "id": f"net~{state.entity_id}",
                "parent": None,
                "name": str(attrs.get("friendly_name") or attrs.get("host_name") or state.entity_id),
                "manufacturer": None,
                "model": "Network",
                "sw_version": None,
                "area": None,
                "mac": mac,
                "ip": ip,
                "classes": [OTHER],
                "integrations": ["device_tracker"],
                "online": state.state in ("home", "on"),
                "battery": None,
                "battery_low": None,
                "last_seen": state.last_updated.isoformat(),
                "entity": state.entity_id,
                "internet_switch": None,
                "ble_switch": None,
                "temp": None,
                "rssi": None,
                "ble": {"home": None, "distance": None, "address": None, "scanner": None, "irk": None},
            }
        )
    by_name = {d["name"].lower(): d for d in result}
    for d in result:
        d.pop("_weak", None)
        scanner = d["ble"]["scanner"] if d.get("ble") else None
        if scanner:
            match = by_name.get(scanner.split(" (")[0].strip().lower())
            d["ble"]["scanner_ip"] = match["ip"] if match else None
    return result
