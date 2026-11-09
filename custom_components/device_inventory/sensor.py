"""Offline counters per device class (usable in automations)."""

from __future__ import annotations

from typing import Any

from homeassistant.components.sensor import SensorEntity, SensorStateClass
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers.device_registry import DeviceEntryType, DeviceInfo
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.update_coordinator import CoordinatorEntity

from .const import DOMAIN

ALL = "all"


async def async_setup_entry(
    hass: HomeAssistant, entry: ConfigEntry, async_add_entities: AddEntitiesCallback
) -> None:
    manager = hass.data[DOMAIN]
    classes = {ALL}
    for dev in manager.coordinator.data or []:
        classes.update(dev["classes"])
    async_add_entities(
        OfflineSensor(manager.coordinator, entry, cls) for cls in sorted(classes)
    )


class OfflineSensor(CoordinatorEntity, SensorEntity):
    """Number of devices of one class without any live entity."""

    _attr_has_entity_name = True
    _attr_icon = "mdi:lan-disconnect"
    _attr_state_class = SensorStateClass.MEASUREMENT
    _attr_native_unit_of_measurement = "devices"

    def __init__(self, coordinator, entry: ConfigEntry, cls: str) -> None:
        super().__init__(coordinator)
        self._cls = cls
        self._attr_unique_id = f"{entry.entry_id}_{cls}_offline"
        self._attr_name = "All devices offline" if cls == ALL else f"{cls} devices offline"
        self._attr_device_info = DeviceInfo(
            identifiers={(DOMAIN, entry.entry_id)},
            name="Device Inventory",
            entry_type=DeviceEntryType.SERVICE,
        )

    def _devices(self) -> list[dict[str, Any]]:
        data = self.coordinator.data or []
        return data if self._cls == ALL else [d for d in data if self._cls in d["classes"]]

    @property
    def native_value(self) -> int:
        return sum(1 for d in self._devices() if not d["online"])

    @property
    def extra_state_attributes(self) -> dict[str, Any]:
        devs = self._devices()
        return {
            "total": len(devs),
            "offline_devices": sorted(d["name"] for d in devs if not d["online"]),
        }
