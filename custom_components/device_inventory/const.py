"""Constants for Device Inventory."""



import re



DOMAIN = "device_inventory"

STORAGE_VERSION = 1

SCAN_INTERVAL_SECONDS = 120

MAX_UPLOAD_BYTES = 12 * 1024 * 1024
MAX_MANUAL_BYTES = 25 * 1024 * 1024
MAX_DOCS_PER_DEVICE = 20
CONF_AI_TASK = "ai_task_entity"  # option: AI task entity that finds manuals
CONF_AI_IMAGES = "ai_images"  # option: also store a product photo found by the AI
CONF_AI_COPY = "ai_copy_local"  # option: copy the PDFs found by the AI into Home Assistant

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



# makers / models of AVM FRITZ! hardware (own tab)

FRITZ_HINTS = ("fritz", "avm")



# Apple devices (own tab): matched on maker / model / name, e.g. "Apple iPhone15,4", "iPad Ilka", "Ulli iPhone (BLE)"

APPLE_RE = re.compile(r"\b(apple|iphone|ipad|macbook|imac|ipod|homepod|airpods|mac ?mini|mac ?studio)", re.IGNORECASE)

