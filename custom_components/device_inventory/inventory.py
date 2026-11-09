"""Build the device inventory from the Home Assistant registries."""

from __future__ import annotations

from typing import Any

from homeassistant.core import HomeAssistant
from homeassistant.helpers import (
    area_registry as ar,
    device_registry as dr,
    entity_registry as er,
)

from .const import CLASS_MAP, OTHER

UNAVAILABLE = ("unavailable", "unknown")


def build_inventory(hass: HomeAssistant) -> list[dict[str, Any]]:
    """Return one dict per physical device (service entries are skipped)."""
    dev_reg = dr.async_get(hass)
    ent_reg = er.async_get(hass)
    area_reg = ar.async_get(hass)
    result: list[dict[str, Any]] = []

    for dev in dev_reg.devices.values():
        if dev.entry_type is dr.DeviceEntryType.SERVICE or dev.disabled_by:
            continue

        domains: set[str] = set()
        for entry_id in dev.config_entries:
            entry = hass.config_entries.async_get_entry(entry_id)
            if entry:
                domains.add(entry.domain)
        classes = sorted({CLASS_MAP[d] for d in domains if d in CLASS_MAP}) or [OTHER]

        alive = 0
        last_seen = None
        battery = None
        primary_entity = None
        for ent in er.async_entries_for_device(ent_reg, dev.id):
            state = hass.states.get(ent.entity_id)
            if state is None:
                continue
            primary_entity = primary_entity or ent.entity_id
            if state.state not in UNAVAILABLE:
                alive += 1
            if last_seen is None or state.last_updated > last_seen:
                last_seen = state.last_updated
            device_class = ent.device_class or ent.original_device_class
            if battery is None and device_class == "battery":
                try:
                    battery = round(float(state.state))
                except ValueError:
                    pass

        mac = next((v for k, v in dev.connections if k == "mac"), None)
        area = area_reg.async_get_area(dev.area_id) if dev.area_id else None
        result.append(
            {
                "id": dev.id,
                "name": dev.name_by_user or dev.name or dev.id,
                "manufacturer": dev.manufacturer,
                "model": dev.model,
                "sw_version": dev.sw_version,
                "area": area.name if area else None,
                "mac": mac,
                "classes": classes,
                "integrations": sorted(domains),
                "online": alive > 0,
                "battery": battery,
                "last_seen": last_seen.isoformat() if last_seen else None,
                "entity": primary_entity,
            }
        )
    return result
