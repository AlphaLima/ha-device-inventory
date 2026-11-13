"""Constants for Device Inventory."""

DOMAIN = "device_inventory"
STORAGE_VERSION = 1
SCAN_INTERVAL_SECONDS = 120
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
    "sonoff": "sonoff",
    "ewelink": "sonoff",
    "hue": "hue",
    "tuya": "tuya",
    "blink": "blink",
    "alexa_media": "alexa",
    "alexa_devices": "alexa",
    "private_ble_device": "bluetooth",
    "bermuda": "bluetooth",
    "bluetooth": "bluetooth",
}
OTHER = "other"

# Integrations that only mirror devices seen on the network or via Bluetooth.
# Such an entry is hidden when the same MAC also belongs to a "real" device.
WEAK_INTEGRATIONS = {"fritz", "bluetooth", "ping", "nmap_tracker", "unifi", "upnp", "dhcp"}

# devices of these makers/models also appear in the Sonoff tab, whatever integration they use
SONOFF_HINTS = ("sonoff", "itead")
