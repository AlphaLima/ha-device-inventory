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

    "knx": "knx",

    "sonos": "sonos",

    "tradfri": "ikea",

    "ikea_dirigera": "ikea",

    "home_connect": "homeconnect",

    "loxone": "loxone",

    "somfy": "somfy",

    "somfy_mylink": "somfy",

    "tahoma": "somfy",

    "tplink": "tplink",

    "tplink_omada": "tplink",

    "tapo": "tplink",

    "xiaomi_miio": "xiaomi",

    "xiaomi_ble": "xiaomi",

    "xiaomi_aqara": "xiaomi",

    "xiaomi_home": "xiaomi",

    "tado": "tado",

    "netatmo": "netatmo",

    "nest": "nest",

    "smartthings": "smartthings",

    "blink": "blink",

    "alexa_media": "alexa",

    "alexa_devices": "alexa",

    "private_ble_device": "bluetooth",

    "bermuda": "bluetooth",

    "bluetooth": "bluetooth",

}

OTHER = "other"

# makers whose devices also appear in a brand tab, whatever integration they use (Zigbee, Matter, ...): class -> words in the manufacturer
BRAND_HINTS = {
    "ikea": ("ikea",),
    "aqara": ("lumi", "aqara"),
    "xiaomi": ("xiaomi",),
    "somfy": ("somfy",),
    "tplink": ("tp-link", "tplink", "tapo"),
    "loxone": ("loxone",),
    "tado": ("tado",),
    "sonos": ("sonos",),
    "netatmo": ("netatmo",),
    "nest": ("nest",),
    "kasa": ("kasa",),
    "smartthings": ("smartthings",),
}

# every integration with at least this many devices (and no tab of its own) gets a tab "int:<integration>" automatically
AUTO_TAB_MIN_DEVICES = 3
AUTO_TAB_EXCLUDED = {"homeassistant", "hassio", "mobile_app", "tailscale", "fritzbox", "fritz_callmonitor", "mesh", "apple"}


# function tabs that cut across the makers: class -> integrations, words in manufacturer / model, words in the device name
FUNCTION_TABS = {
    "vehicles": {
        "integrations": {
            "bmw_connected_drive", "audiconnect", "audi_connect", "vag_connect", "volkswagen_we_connect_id", "tesla_fleet", "teslemetry", "tesla_custom",
            "mercedesme", "hyundai_kia_connect", "kia_uvo", "renault", "volvo", "polestar", "myskoda", "toyota", "nissan_leaf", "ford_pass", "carconnectivity",
            "cupra", "seat", "porsche_connect", "opel", "psa_car_controller", "tronity",
        },
        "maker": r"\b(bmw|audi|volkswagen|vw|mercedes|tesla|skoda|\u0161koda|seat|cupra|volvo|polestar|porsche|hyundai|kia|renault|dacia|toyota|ford|opel|nissan|peugeot|citroen|fiat|mazda)\b",
        "text": r"\b(xdrive|sdrive|elektroauto|e-?auto|pkw|fahrzeug|vehicle)\b",
    },
    "media": {
        "integrations": {
            "sonos", "cast", "philips_js", "samsungtv", "webostv", "lg_netcast", "androidtv", "androidtv_remote", "apple_tv", "roku", "yamaha_musiccast",
            "denonavr", "heos", "bluesound", "spotify", "plex", "kodi", "squeezebox", "onkyo", "braviatv", "dlna_dmr", "dlna_dms", "vizio", "hdmi_cec",
            "kaleidescape", "harmony", "mediaroom", "samsung_soundbar",
        },
        "maker": r"\b(sonos|denon|marantz|yamaha|onkyo|pioneer|bose|bluesound|heos|teufel|roku|chromecast|bang ?& ?olufsen|harman|sony bravia|philips tv)\b",
        "text": r"\b(fernseher|smart ?tv|soundbar|receiver|lautsprecher|chromecast|beamer|projektor)\b",
    },
    "appliances": {
        "integrations": {
            "home_connect", "miele", "roborock", "dreame_vacuum", "ecovacs", "roomba", "irobot", "neato", "eufy_robovac", "lg_thinq", "whirlpool",
            "electrolux_ocp", "hon", "smartthings_appliance", "liebherr", "quooker", "dyson", "dyson_local", "tefal", "smarter",
        },
        "maker": r"\b(bsh|bosch|siemens|miele|neff|gaggenau|constructa|aeg|electrolux|liebherr|whirlpool|roborock|dreame|ecovacs|irobot|roomba|quooker|dyson|krups|delonghi|de'?longhi|jura|thermomix|vorwerk)\b",
        "text": r"(geschirrsp|dishwasher|waschmaschine|washing|trockner|dryer|k\u00fchlschrank|fridge|backofen|oven|herd|cooker|kaffeemaschine|coffee|staubsauger|vacuum|saugroboter|quooker|dunstabzug)",
    },
    "cameras": {
        "integrations": {
            "onvif", "reolink", "ring", "eufy_security", "unifiprotect", "frigate", "amcrest", "tapo_control", "hikvision", "doorbird", "ezviz", "arlo",
            "wyze", "blink", "nest", "axis", "generic", "mjpeg", "rtsp_to_webrtc", "go2rtc", "agent_dvr", "synology_dsm_surveillance", "yi", "foscam", "dahua",
        },
        "maker": r"\b(reolink|hikvision|dahua|amcrest|doorbird|ring|eufy|ezviz|arlo|wyze|axis|foscam|blink|tapo camera|kamera)\b",
        "text": r"(kamera|camera|doorbell|t\u00fcrklingel|webcam|cctv|\bcam\b)",
    },
    "network": {
        "integrations": {
            "unifi", "upnp", "synology_dsm", "qnap", "brother", "ipp", "cups", "epson", "canon", "hp_ilo", "pi_hole", "adguard",
            "nmap_tracker", "asuswrt", "mikrotik", "tplink_omada", "netgear", "devolo_home_network", "opnsense", "openwrt", "snmp", "wake_on_lan",
            "keenetic_ndms2", "vodafone_station", "ubus", "unifiled", "ping",
        },
        "maker": r"\b(ubiquiti|unifi|synology|qnap|brother|hp|hewlett|epson|canon|lexmark|netgear|mikrotik|devolo|d-link|zyxel|aruba|cisco|raspberry)\b",
        "text": r"(drucker|printer|\bnas\b|router|repeater|access ?point|\bswitch\b|laptop|notebook|desktop|macbook|\bpc\b|server|scanner)",
    },
}

# energy: solar, storage, wallboxes, meters, heat pumps
ENERGY_INTEGRATIONS = {
    "solcast_solar", "kostal_plenticore", "sma", "fronius", "solaredge", "enphase_envoy", "goodwe", "huawei_solar", "growatt_server",
    "sunspec", "victron_remote_monitoring", "wemportal", "easee", "wallbox", "keba", "ocpp", "zaptec", "myenergi", "tesla_wall_connector",
    "evcc", "iotawatt", "efergy", "dsmr", "homewizard", "nibe", "stiebel_eltron", "vicare", "go_e", "goecharger",
}
ENERGY_HINT = (
    r"kostal|plenticore|weishaupt|weisshaupt|\bwwp\b|fronius|solaredge|\bsma\b|sunny|growatt|goodwe|sungrow|victron|enphase|\bbyd\b|wallbox|go-?e\b|easee|keba|"
    r"zaptec|webasto|vestel|evcc|ksem|smart energy meter|inverter|wechselrichter|w\u00e4rmepumpe|heat ?pump|ev ?charger|ladestation|stromz\u00e4hler|smart ?meter|"
    r"energy ?meter|\b3em\b|\bpro ?3em\b|\bpro ?em\b|\bshelly ?em\b|homewizard|p1 ?meter"
)



# Integrations that only mirror devices seen on the network or via Bluetooth.

# Such an entry is hidden when the same MAC also belongs to a "real" device.

WEAK_INTEGRATIONS = {"fritz", "bluetooth", "ping", "nmap_tracker", "unifi", "upnp", "dhcp"}



# devices of these makers/models also appear in the Sonoff tab, whatever integration they use

SONOFF_HINTS = ("sonoff", "itead")



# makers / models of AVM FRITZ! hardware (own tab)

FRITZ_HINTS = ("fritz", "avm")



# Apple devices (own tab): matched on maker / model / name, e.g. "Apple iPhone15,4", "iPad Ilka", "Ulli iPhone (BLE)"

APPLE_RE = re.compile(r"\b(apple|iphone|ipad|macbook|imac|ipod|homepod|airpods|mac ?mini|mac ?studio)", re.IGNORECASE)

