"""Build the device inventory from the Home Assistant registries."""

from __future__ import annotations

import ipaddress
import re
from typing import Any
from urllib.parse import urlparse

from homeassistant.core import HomeAssistant
from homeassistant.helpers import (
    area_registry as ar,
    device_registry as dr,
    entity_registry as er,
)

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


def _entry_ids(dev: dr.DeviceEntry) -> tuple[str, ...]:
    """Config entry ids of a device (``config_entry_id`` on 2026.11+, ``config_entries`` before)."""
    single = getattr(dev, "config_entry_id", None)
    if single:
        return (single,)
    return tuple(dev.config_entries)


def build_inventory(hass: HomeAssistant) -> list[dict[str, Any]]:
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
        for ent in entities:
            state = hass.states.get(ent.entity_id)
            if state is None:
                continue
            primary_entity = primary_entity or ent.entity_id
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
                    ip = _valid_ip(state.state)
                if ip is None:
                    ip = _valid_ip(state.attributes.get("ip_address") or state.attributes.get("ip"))
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
    by_name = {d["name"].lower(): d for d in result}
    for d in result:
        d.pop("_weak", None)
        scanner = d["ble"]["scanner"] if d.get("ble") else None
        if scanner:
            match = by_name.get(scanner.split(" (")[0].strip().lower())
            d["ble"]["scanner_ip"] = match["ip"] if match else None
    return result
