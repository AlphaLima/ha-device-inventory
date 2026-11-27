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

from .const import (
    APPLE_RE,
    AUTO_TAB_EXCLUDED,
    AUTO_TAB_MIN_DEVICES,
    BRAND_HINTS,
    CLASS_MAP,
    ENERGY_HINT,
    ENERGY_INTEGRATIONS,
    FRITZ_HINTS,
    FUNCTION_TABS,
    OTHER,
    SONOFF_HINTS,
    WEAK_INTEGRATIONS,
)

UNAVAILABLE = ("unavailable", "unknown")
ENERGY_RE = re.compile(ENERGY_HINT, re.IGNORECASE)
FUNCTION_RE = {
    key: (re.compile(spec["maker"], re.IGNORECASE), re.compile(spec["text"], re.IGNORECASE) if spec.get("text") else None)
    for key, spec in FUNCTION_TABS.items()
}
IP_ENTITY = re.compile(r"(^|_)ip(_address)?$")
BLE_SWITCH = re.compile(r"aioshelly_ble_integration")
INTERNET_SWITCH = re.compile(r"internet_?access|internetzugang")
STATUS_ENTITY = re.compile(r"(^|_)status$")  # binary_sensor.<device>_status: the connection status of the device itself


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


def _apple_model(word: str) -> str:
    """Product family from a device name that mentions it ("Ulli iPhone (BLE)" -> "iPhone")."""
    w = word.lower().replace(" ", "")
    return {"iphone": "iPhone", "ipad": "iPad", "ipod": "iPod", "macbook": "MacBook", "imac": "iMac", "homepod": "HomePod", "airpods": "AirPods", "macmini": "Mac mini", "macstudio": "Mac Studio", "apple": "Apple"}.get(w, word)


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


MAC_NAME_RE = re.compile(r"^([0-9a-f]{2}[:_ -]?){5}[0-9a-f]{2}$", re.IGNORECASE)  # AA:BB:.., AA-BB-.., AA_BB_.. (Synology / UPnP names)


def _to_celsius(value: float, unit: Any) -> float:
    """Temperature in °C, whatever unit the sensor reports (°F, K); the card shows it in the unit system of Home Assistant."""
    text = str(unit or "").strip().upper().replace("°", "")
    if text == "F":
        value = (value - 32) * 5 / 9
    elif text == "K":
        value = value - 273.15
    return round(value, 1)


def _norm_mac(value: Any) -> str | None:
    """Normalised MAC address (AA:BB:CC:DD:EE:FF) or None."""
    text = str(value or "").strip()
    if not MAC_NAME_RE.match(text):
        return None
    raw = re.sub(r"[:_ -]", "", text).upper()
    return ":".join(raw[i : i + 2] for i in range(0, 12, 2))


def _mac_from_identifiers(dev: dr.DeviceEntry) -> str | None:
    """Some integrations (TP-Link, Tuya, ...) keep the MAC address only in the identifiers of the device."""
    for _domain, ident in dev.identifiers:
        mac = _norm_mac(ident)
        if mac:
            return mac
    return None


def _near_mac(a: str | None, b: str | None, span: int = 4) -> bool:
    """Same hardware, other interface: first five bytes equal and the last byte only a little apart (Wi-Fi / Bluetooth / Ethernet MAC of one board)."""
    if not a or not b or a == b:
        return False
    try:
        return a[:14] == b[:14] and abs(int(a[15:], 16) - int(b[15:], 16)) <= span
    except ValueError:
        return False


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
    tracker_ip_by_mac: dict[str, str] = {}  # MAC -> IP of the device trackers (FRITZ!Box Tools, nmap, ...): the tracker may belong to another registry device than the switch
    tracker_list: list[tuple[str, str, str, str | None]] = []
    for tstate in hass.states.async_all("device_tracker"):
        tmac = _norm_mac(tstate.attributes.get("mac"))
        tip = _lan_ip(tstate.attributes.get("ip") or tstate.attributes.get("ip_address"))
        if tmac and tip:
            tracker_ip_by_mac.setdefault(tmac, tip)
        if tip:  # trackers by name: devices without MAC / IP of their own (MQTT boards) are known to the router under their host name
            shown = str(tstate.attributes.get("friendly_name") or tstate.attributes.get("host_name") or "").strip()
            if shown:
                tracker_list.append((shown.lower(), shown, tip, tmac))

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
        # Philips Hue lamps, remotes and bridges, whatever integration they use (Hue bridge, Zigbee, Matter ...): Signify, or Philips without being a TV
        if "signify" in maker_model or ("philips" in maker_model and "philips_js" not in domains and " tv" not in maker_model) or "hue " in f"{maker_model} ":
            class_set.add("hue")
        maker_low = (dev.manufacturer or "").lower()
        for brand, words in BRAND_HINTS.items():
            if any(word in maker_low for word in words):
                class_set.add(brand)
        if re.match(r"(HS|KP|EP|KL|KS|ES|KD|KE|KH)\d", (dev.model or "").strip(), re.IGNORECASE) and "tp-link" in maker_low:
            class_set.add("kasa")  # Kasa smart plugs, bulbs and switches of TP-Link (Tapo devices stay in the TP-Link tab)
        apple_name = APPLE_RE.search(dev.name_by_user or dev.name or "")
        if apple_name or APPLE_RE.search(f"{dev.manufacturer or ''} {dev.model or ''}"):
            class_set.add("apple")
        # AVM / FRITZ! hardware (box, repeaters, DECT devices) – not the "FRITZ!Box Tracked device" mirrors of every network client
        if "tracked" not in maker_model and (any(h in maker_model for h in FRITZ_HINTS) or domains & {"fritzbox", "fritz_callmonitor"}):
            class_set.add("fritz")
        classes = sorted(class_set) or [OTHER]

        ip = None
        # entries that belong to exactly one device (Shelly, ESPHome, WLED, ...) know the host
        for entry_id in entry_ids[dev.id]:
            entry = entries.get(entry_id)
            if entry and devices_per_entry.get(entry_id) == 1:
                host = entry.data.get("host") or entry.data.get("ip_address") or entry.data.get("ip") or entry.data.get("address")
                if not host and isinstance(entry.data.get("url"), str):
                    host = urlparse(entry.data["url"]).hostname  # DLNA / UPnP entries keep the address of the description file
                if not host and isinstance(entry.data.get("known_hosts"), (list, tuple)) and len(entry.data["known_hosts"]) == 1:
                    host = entry.data["known_hosts"][0]
                if isinstance(host, str) and host:
                    ip = host
                    break
        entities = er.async_entries_for_device(ent_reg, dev.id)
        if not entities:
            continue  # registry shell without any entity (e.g. Bluetooth scanner placeholder)
        alive = 0
        status_off = False  # a status sensor of the device itself says "disconnected" (e.g. the ESPHome status binary sensor)
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
                            temp = _to_celsius(float(state.state), state.attributes.get("unit_of_measurement"))
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
            if ent.domain == "binary_sensor" and (ent.device_class or ent.original_device_class) == "connectivity" and (
                ent.platform == "esphome" or STATUS_ENTITY.search(ent.entity_id.split(".", 1)[1])
            ):
                # the device's own connection status: it stays available while the device is gone and only reports "off" (Disconnected)
                if state.state == "off":
                    status_off = True
                elif state.state not in UNAVAILABLE:
                    alive += 1
                continue
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

        if ip is None and dev.configuration_url and not ("fritzbox" in domains and not (dev.model or "").startswith("FRITZ!Box")):
            host = urlparse(str(dev.configuration_url)).hostname
            ip = _valid_ip(host)
        mac = next((v for k, v in dev.connections if k == "mac"), None) or next(
            (v for k, v in dev.connections if k == "bluetooth"), None
        ) or _mac_from_identifiers(dev) or _norm_mac(dev.name_by_user or dev.name)  # a device that is named by its MAC address
        if ip is None and mac:  # a device that only has a switch (FRITZ!Box internet access): the IP is on the device tracker with the same MAC
            ip = tracker_ip_by_mac.get(_norm_mac(mac) or "")
        suggest: list[dict[str, str | None]] = []
        if ip is None:  # no address known: offer the trackers of the router whose name resembles the device (the user confirms in the card)
            names = {str(n).strip().lower() for n in (dev.name_by_user, dev.name, dev.manufacturer, dev.model) if n and len(str(n).strip()) >= 4}
            scored = []
            for tname, shown, tip2, tmac2 in tracker_list:
                if tname in names:
                    scored.append((0, shown, tip2, tmac2))
                elif len(tname) >= 4 and any(tname in n or n in tname for n in names):
                    scored.append((1, shown, tip2, tmac2))
            scored.sort(key=lambda x: (x[0], x[1].lower()))
            suggest = [{"name": sh, "ip": i2, "mac": m2.upper() if m2 else None} for _r, sh, i2, m2 in scored[:5]]
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
            ble = {
                "home": (tstate.state == "home") if tstate and tstate.state in ("home", "not_home") else None,
                "distance": distance,
                "address": attrs.get("current_address") or attrs.get("address") or (mac if mac else None),
                "scanner": attrs.get("scanner") or _scanner_name(hass, attrs.get("source")),
            }
        area = area_reg.async_get_area(dev.area_id) if dev.area_id else None
        result.append(
            {
                "id": dev.id,
                "parent": dev.via_device_id,
                "name": dev.name_by_user or dev.name or dev.id,
                "manufacturer": "Apple" if apple_name and ("tracked" in maker_model or not dev.manufacturer) else dev.manufacturer,  # mirrors of an iPhone (FRITZ!Box, Bluetooth) are still Apple devices
                "model": _apple_model(apple_name.group(1)) if apple_name and ("tracked" in maker_model or not dev.model) else dev.model,
                "sw_version": dev.sw_version,
                "area": area.name if area else (ble_area if isinstance(ble_area, str) else None),
                "mac": mac.upper() if mac else None,
                "ip": ip,
                "ip_suggest": suggest,
                "classes": classes,
                "integrations": sorted(domains),
                "_weak": bool(domains) and domains <= WEAK_INTEGRATIONS,
                "online": alive > 0 and not status_off,
                "battery": battery,
                "battery_low": battery_low,
                "last_seen": last_seen.isoformat() if last_seen else None,
                "added": dev.created_at.isoformat() if getattr(dev, "created_at", None) and dev.created_at.year > 1970 else None,  # when HA registered the device (1970 = older than this registry field)
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
    def mac_named(d: dict[str, Any]) -> bool:
        return bool(d["mac"]) and bool(MAC_NAME_RE.match(str(d["name"]).strip()))  # a row that is called nothing but its MAC address, whatever integration it comes from

    reals = [d for d in result if not d["_weak"] and not mac_named(d)]
    real_by_mac = {d["mac"]: d for d in reals if d["mac"]}
    real_by_ip = {d["ip"]: d for d in reals if d["ip"]}

    def real_twin(d: dict[str, Any]) -> dict[str, Any] | None:
        """The real device that a mirror (FRITZ!Box / Bluetooth / network scanner entry) belongs to."""
        if not d["_weak"] and not mac_named(d):
            return None
        if d["mac"] and d["mac"] in real_by_mac:
            return real_by_mac[d["mac"]]
        if d["ip"] and d["ip"] in real_by_ip:
            return real_by_ip[d["ip"]]
        if mac_named(d):  # a mirror that is shown with nothing but its MAC address (a NAS has several network ports with neighbouring addresses)
            for real in reals:
                if _near_mac(d["mac"], real["mac"]):
                    return real
        return None

    twins = {d["id"]: real_twin(d) for d in result}
    for d in result:
        real = twins[d["id"]]
        # the FRITZ!Box "internet access" switch lives on the mirror device: hand it to the real device
        if real is not None and d["internet_switch"] and not real["internet_switch"]:
            real["internet_switch"] = d["internet_switch"]
    result = [d for d in result if twins[d["id"]] is None]
    # the same MAC address under several registry devices that are only mirrors (named by the MAC, or by the maker of the MAC): show one
    keep: dict[str, dict[str, Any]] = {}

    def rank(x: dict[str, Any]) -> tuple[Any, ...]:  # notes / photos first, then a real name, the usual MAC spelling, an address, the freshest
        return (x["id"] in (prefer or set()), not mac_named(x), ":" in str(x["name"]), bool(x["ip"]), x["last_seen"] or "")

    for d in result:
        if d["mac"] and (d["_weak"] or mac_named(d)):
            cur = keep.get(d["mac"])
            if cur is None or rank(d) > rank(cur):
                keep[d["mac"]] = d
    for d in result:  # the single row stays in every tab the copies were in (a Bluetooth mirror and a router mirror of one device)
        if d["mac"] and (d["_weak"] or mac_named(d)) and keep[d["mac"]] is not d:
            keep[d["mac"]]["classes"] = sorted(set(keep[d["mac"]]["classes"]) | set(d["classes"]) - {OTHER})
    result = [d for d in result if not (d["mac"] and (d["_weak"] or mac_named(d))) or keep[d["mac"]] is d]
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
                    "ble": {"home": None, "distance": None, "address": None, "scanner": None},
                }
            )
    result.extend(kids)
    # Modbus (YAML) and KNX group addresses create entities but no devices: every such entity gets one row of its own in the Modbus / KNX tab
    for ent in list(ent_reg.entities.values()):
        if ent.platform not in ("modbus", "knx") or ent.device_id or ent.disabled_by or ent.hidden_by:
            continue
        state = hass.states.get(ent.entity_id)
        if state is None:
            continue
        area = area_reg.async_get_area(ent.area_id) if ent.area_id else None
        result.append(
            {
                "id": f"{ent.platform}~{ent.entity_id}",
                "parent": None,
                "name": str(state.attributes.get("friendly_name") or ent.original_name or ent.entity_id),
                "manufacturer": None,
                "model": ent.domain,
                "sw_version": None,
                "area": area.name if area else None,
                "mac": None,
                "ip": None,
                "classes": [ent.platform],
                "integrations": [ent.platform],
                "online": state.state != "unavailable",
                "battery": None,
                "battery_low": None,
                "last_seen": state.last_updated.isoformat(),
                "entity": ent.entity_id,
                "internet_switch": None,
                "ble_switch": None,
                "temp": None,
                "rssi": None,
                "ble": {"home": None, "distance": None, "address": None, "scanner": None},
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
                "ble": {"home": None, "distance": None, "address": None, "scanner": None},
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
                "ble": {"home": None, "distance": None, "address": None, "scanner": None},
            }
        )
    # FRITZ!Box / mesh: which mesh node (router, repeater) and how (LAN, WLAN + SSID) each client is connected to
    mesh_by_mac: dict[str, dict[str, Any]] = {}
    mesh_by_ip: dict[str, dict[str, Any]] = {}
    for state in hass.states.async_all("device_tracker"):
        attrs = state.attributes
        if not (attrs.get("connected_to") or attrs.get("connection_type")):
            continue
        reg = ent_reg.async_get(state.entity_id)
        if reg is not None and reg.platform != "fritz":
            continue
        info = {"to": attrs.get("connected_to") or None, "type": attrs.get("connection_type") or None, "ssid": attrs.get("ssid") or None}
        if attrs.get("mac"):
            mesh_by_mac[str(attrs["mac"]).upper()] = info
        ip = _valid_ip(attrs.get("ip"))
        if ip:
            mesh_by_ip[ip] = info
    # the same FRITZ! box shows up once per integration (fritz, upnp, ...) and as mirror devices: one row each, missing values are filled from the copies
    seen_fritz: dict[tuple[str, ...], str] = {}
    drop_fritz: set[str] = set()
    by_id = {d["id"]: d for d in result}
    for d in sorted(result, key=lambda x: (x["id"] not in (prefer or set()), x.get("sw_version") is None, x.get("ip") is None, x["name"])):
        if "fritz" not in d["classes"] or ":" in d["id"] or "~" in d["id"]:
            continue
        if d.get("mac") and (d.get("model") or "").startswith(("FRITZ!Box", "FRITZ!Repeater")):
            key: tuple[str, ...] = ("box", str(d["mac"]).upper())  # one physical box = one MAC
        else:
            key = ((d["name"] or "").strip().lower(), (d.get("model") or "").lower(), (d.get("mac") or "").upper())
        if key in seen_fritz:
            drop_fritz.add(d["id"])
            kept = by_id[seen_fritz[key]]
            for field in ("sw_version", "ip", "temp", "rssi", "area", "last_seen", "entity", "internet_switch"):
                if kept.get(field) in (None, "") and d.get(field) not in (None, ""):
                    kept[field] = d[field]
            kept["online"] = bool(kept.get("online") or d.get("online"))
        else:
            seen_fritz[key] = d["id"]
    if drop_fritz:
        result = [d for d in result if d["id"] not in drop_fritz]
    # a client is one row: devices with a real class first, sub-devices (same IP) and registry shells ("other") last, so each client is counted once
    mesh_used: set[int] = set()
    for d in result:
        d["mesh"] = None
    for d in sorted(result, key=lambda x: (bool(x.get("parent")), x["classes"] == [OTHER], x.get("ip") is None)):
        info = mesh_by_mac.get(d.get("mac") or "") or mesh_by_ip.get(d.get("ip") or "")
        if info is not None and id(info) not in mesh_used:
            mesh_used.add(id(info))
            d["mesh"] = info
            d["classes"] = sorted(set(d["classes"]) | {"mesh"})
    # the mesh nodes themselves (master, repeaters) are no devices of Home Assistant: one row each in the FRITZ! tab
    node_clients: dict[str, list[dict[str, Any]]] = {}
    for info in {id(v): v for v in list(mesh_by_mac.values()) + list(mesh_by_ip.values())}.values():
        if info.get("to"):
            node_clients.setdefault(str(info["to"]), []).append(info)
    # a node that is a device of its own (FRITZ!Box / Repeater set up in the FRITZ!Box Tools integration): match by the MAC of its tracker
    fritz_devs = [d for d in result if "fritz" in d["classes"] and "~" not in d["id"] and ":" not in d["id"]]
    node_dev: dict[str, dict[str, Any]] = {}

    def _free(dev: dict[str, Any]) -> bool:
        return all(dev is not v for v in node_dev.values())

    # (1) by the tracker that carries the node name (also an unavailable one: its entity id / unique id holds the MAC)
    for state in hass.states.async_all("device_tracker"):
        hn = str(state.attributes.get("host_name") or state.attributes.get("friendly_name") or "")
        if hn not in node_clients or hn in node_dev:
            continue
        reg = ent_reg.async_get(state.entity_id)
        mac_m = re.search(r"(?:[0-9A-Fa-f]{2}:){5}[0-9A-Fa-f]{2}", str(state.attributes.get("mac") or (reg.unique_id if reg else "") or ""))
        mac = mac_m.group(0).upper() if mac_m else ""
        dev_hit = next((d for d in fritz_devs if mac and (d.get("mac") or "").upper() == mac and _free(d)), None)
        if dev_hit is not None:
            node_dev[hn] = dev_hit
    # (2) by the model number in the name ("RepeaterKabuff3000" -> FRITZ!Repeater 3000), when exactly one box fits
    boxes = [d for d in fritz_devs if (d.get("model") or "").startswith(("FRITZ!Box", "FRITZ!Repeater"))]
    for node in node_clients:
        if node in node_dev:
            continue
        nums = re.findall(r"\d{4}", node)
        cands = [d for d in boxes if _free(d) and nums and any(n in (d.get("model") or "") for n in nums)]
        if len(cands) > 1:  # two boxes of the same model: the one at the default gateway address (.1) is the master, not this repeater
            cands = [d for d in cands if not str(d.get("ip") or "").endswith(".1")]
        if len(cands) == 1:
            node_dev[node] = cands[0]
    # (3) the one node and the one box that are left over belong together (the master: it is no client of itself)
    open_nodes = [n for n in node_clients if n not in node_dev]
    open_devs = [d for d in boxes if _free(d)]
    if len(open_nodes) == 1 and len(open_devs) == 1:
        node_dev[open_nodes[0]] = open_devs[0]
    def _stats(infos: list[dict[str, Any]]) -> dict[str, int]:
        wl = sum(1 for i in infos if i.get("type") and "wlan" in str(i["type"]).lower())
        return {"total": len(infos), "wlan": wl, "lan": len(infos) - wl}

    for node, dev_hit in node_dev.items():
        dev_hit["mesh_node"] = node
        dev_hit["name"] = str(node)
        dev_hit["mesh_stats"] = _stats(node_clients[node])
    for node, infos in sorted(node_clients.items()):
        if node in node_dev:
            continue
        wlan = sum(1 for i in infos if i.get("type") and "lan" in str(i["type"]).lower() and "wlan" in str(i["type"]).lower())
        result.append(
            {
                "id": f"fritznode~{node}",
                "parent": None,
                "name": str(node).replace("fritz.", "", 1) if str(node).startswith("fritz.") else str(node),
                "manufacturer": "FRITZ!",
                "model": "Mesh",
                "mesh_stats": _stats(infos),
                "sw_version": None,
                "area": None,
                "mac": None,
                "ip": None,
                "classes": ["fritz"],
                "integrations": ["fritz"],
                "online": True,
                "battery": None,
                "battery_low": None,
                "last_seen": None,
                "entity": None,
                "internet_switch": None,
                "ble_switch": None,
                "temp": None,
                "rssi": None,
                "ble": {"home": None, "distance": None, "address": None, "scanner": None},
                "mesh": None,
            }
        )
    # Energy tab: solar, storage, wallboxes, meters, heat pumps (by integration or by maker / model / name)
    for d in result:
        if "~" in d["id"] or "energy" in d["classes"]:
            continue
        text = f"{d.get('manufacturer') or ''} {d.get('model') or ''} {d.get('name') or ''}"
        if set(d.get("integrations") or []) & ENERGY_INTEGRATIONS or ENERGY_RE.search(text):
            d["classes"] = sorted((set(d["classes"]) - {OTHER}) | {"energy"})
    # function tabs (vehicles, media, appliances, cameras, network): by integration, by maker / model, or by words in the name
    for d in result:
        if "~" in d["id"]:
            continue
        weak = bool(d.get("_weak"))  # mirrors of network clients (FRITZ!Box, Bluetooth ...): only the words in their name count, not "FRITZ!Box" as maker
        integrations = set() if weak else set(d.get("integrations") or [])
        maker_only = "" if weak else str(d.get("manufacturer") or "")  # the brand words are matched against the manufacturer only, never against the model ("Shelly 1PM Mini" is no MINI)
        name = str(d.get("name") or "")
        extra = set()
        name_ok = set(d["classes"]) <= {OTHER, "bluetooth", "apple", "fritz", "mesh"}  # words in the name only count for devices that are no typed hardware (a Shelly called "TV light" is a light)
        for key, spec in FUNCTION_TABS.items():
            maker_re, text_re = FUNCTION_RE[key]
            if integrations & spec["integrations"] or maker_re.search(maker_only) or (text_re and ((not weak and text_re.search(str(d.get("model") or ""))) or (name_ok and text_re.search(name)))):
                extra.add(key)
        if "fritz" in d["classes"]:
            extra.discard("network")  # the AVM hardware has its own tab
        if extra:
            d["classes"] = sorted((set(d["classes"]) - {OTHER}) | extra)
    # automatic tabs: every integration with enough devices and no tab of its own
    skip = set(CLASS_MAP) | WEAK_INTEGRATIONS | AUTO_TAB_EXCLUDED | ENERGY_INTEGRATIONS
    counts: dict[str, int] = {}
    for d in result:
        if "~" in d["id"] or ":" in d["id"]:
            continue
        for domain in d.get("integrations") or []:
            if domain not in skip:
                counts[domain] = counts.get(domain, 0) + 1
    for d in result:
        if "~" in d["id"] or ":" in d["id"]:
            continue
        extra = {f"int:{domain}" for domain in d.get("integrations") or [] if counts.get(domain, 0) >= AUTO_TAB_MIN_DEVICES}
        if extra:
            d["classes"] = sorted((set(d["classes"]) - {OTHER}) | extra)
    by_name = {d["name"].lower(): d for d in result}
    for d in result:
        d.pop("_weak", None)
        scanner = d["ble"]["scanner"] if d.get("ble") else None
        if scanner:
            match = by_name.get(scanner.split(" (")[0].strip().lower())
            d["ble"]["scanner_ip"] = match["ip"] if match else None
    return result
