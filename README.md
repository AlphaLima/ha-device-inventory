<p align="center"><img src="docs/icon.png" width="128" alt="Device Inventory icon"></p>

# Device Inventory for Home Assistant

Classified device tables for your whole smart home – one tab/card per device class
(Shelly, ESPHome, ZigBee, MQTT, Matter, WLED, Homematic, Z-Wave, Bluetooth, …) with

- 🟢/🔴 status LED (online = at least one live entity),
- sortable columns (name, model, area, **IP address as link to the device's web page**, **MAC address** (click = copy), manufacturer, firmware, battery, last seen),
- **several photos per device** (hover = thumbnail preview, click = gallery, upload/delete),
- **notes per device** (hover = text, click = editor),
- **print / PDF** (A4 portrait or landscape, with heading, photos and notes),
- `sensor.*_devices_offline` per class (+ one for all) with the names of the offline devices as attribute – ready for notifications and automations.

Photos and notes are stored server-side (`.storage/device_inventory`, `config/device_inventory/photos/`), so they are shared by all users and part of your backups.

> Status: **v1.0** – in daily use on the author's system (460+ devices). Requires Home Assistant 2024.7 or newer. Bug reports and pull requests are welcome.

## Screenshots

The tables come from the author's dashboard that this integration grew out of (IP/MAC columns blacked out). The card in this repo renders the same kind of table.

![Internet tab with status LEDs, photo and note icons, print button](docs/internet-tab.png)

![Shelly tab with signal, temperature, firmware and BLE columns](docs/shelly-tab.png)

![ESPHome tab with status LED, model, area and firmware](docs/esphome-tab.png)

Hovering the 🖼️ icon shows a thumbnail of the device's photo; a click opens the gallery.

![Hover preview of a device photo](docs/hover-photo.png)

## Install

**HACS** → ⋮ → *Custom repositories* → add this repository as type *Integration* → install → restart Home Assistant.
Manual: copy `custom_components/device_inventory` to your `config/custom_components/`.

Then *Settings → Devices & services → Add integration → Device Inventory* (one click, nothing to configure).
The card JavaScript is loaded automatically.

## Use

### Sidebar panel (ready to go)

After setup a **Device Inventory** entry appears in the sidebar. It is a complete dashboard with one tab per device class that exists in your system
(All, Shelly, ESPHome, ZigBee, Homematic, MQTT, Matter, WLED, Z-Wave, …), brand icons on the tabs and a red badge with the number of offline devices.
No Lovelace configuration is needed.

### Single card (optional)


Or put one table into any of your own dashboards (manual card, or a panel view with one card):

```yaml
type: custom:device-inventory-card
class: esphome        # all | shelly | esphome | mqtt | matter | wled | zigbee | zwave | homematic | tasmota | hue | tuya | bluetooth | other
title: ESPHome devices   # optional
hide: [battery, maker]   # optional: status, name, model, area, maker, fw, battery, seen, photos, note
```

Example automation: notify when `sensor.all_devices_offline` stays above 0 for 30 minutes.

## Notes

- All texts are English by default and follow the Home Assistant language (English and German included; add a language by copying one block of the `T` table at the top of `device-inventory-card.js`). The toolbar uses symbols (🖨️ print, ▯ portrait, ▭ landscape).
- The IP address is taken from the config entry (host) of single-device integrations such as Shelly, ESPHome or WLED, otherwise from an `…_ip` sensor, an `ip_address` attribute or the device's configuration URL. It stays empty when none of these exist.
- Photo and note changes need an **admin** user. Everyone who can open the dashboard can view them.
- Photos are served without login (`/api/device_inventory/photo/<random 128 bit id>`) so `<img>` tags work; the id is unguessable but anyone who knows a URL can open it. Do not photograph passwords.
- The device class comes from the integration of the device (see `const.py`, `CLASS_MAP`). A device bridged by two integrations appears in both tables. Add your own domains there (pull requests welcome).
- "Online" is a heuristic: a device is offline when *all* its entities are `unavailable`/`unknown`. Sleeping battery devices can look online for a long time.

## Deutsch (Kurzfassung)

Gerätetabellen je Klasse (Shelly, ESPHome, ZigBee, MQTT, Matter, WLED …) mit Status-LED, mehreren Fotos pro Gerät (Hover-Vorschau, Galerie), Bemerkungen, Druck/PDF (Hoch- oder Querformat) und Offline-Zählern als Sensoren. Installation über HACS (benutzerdefiniertes Repository) oder Ordner `custom_components/device_inventory` kopieren, neu starten, Integration hinzufügen, Karte `custom:device-inventory-card` mit `class: esphome` o. ä. einbinden.

## License

MIT

## Releasing (maintainers)

`python scripts/release.py patch|minor|major "change 1" "change 2"` bumps the version in `manifest.json`, adds the changelog entry, commits and tags.
`git push origin main --follow-tags` then triggers the GitHub workflow, which creates the release automatically – HACS and the Marketplace show that version number.
