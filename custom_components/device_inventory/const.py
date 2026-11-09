"""Constants for Device Inventory."""

DOMAIN = "device_inventory"
STORAGE_VERSION = 1
SCAN_INTERVAL_SECONDS = 60
MAX_UPLOAD_BYTES = 12 * 1024 * 1024
CARD_URL = f"/{DOMAIN}_static/device-inventory-card.js"
PANEL_URL = f"/{DOMAIN}_static/device-inventory-panel.js"
PANEL_PATH = "device-inventory"

# config-entry domain -> device class shown as one table / one set of sensors
CLASS_MAP: dict[str, str] = {
    "shelly": "shelly",
    "esphome": "esphome",
    "mqtt": "mqtt",
    "matter": "matter",
    "wled": "wled",
    "zha": "zigbee",
    "deconz": "zigbee",
    "zwave_js": "zwave",
    "homematicip_local": "homematic",
    "homematicip_cloud": "homematic",
    "homematic": "homematic",
    "tasmota": "tasmota",
    "hue": "hue",
    "tuya": "tuya",
    "private_ble_device": "bluetooth",
    "bluetooth": "bluetooth",
}
OTHER = "other"
