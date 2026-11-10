# Changelog

Versions follow [Semantic Versioning](https://semver.org/). Each version is a git tag `vX.Y.Z` and a GitHub release; HACS shows that number.

## 1.11.0 – 2026-11-10
- Columns can be edited directly in the table for the display and for the printout (switch Display / Printout): show/hide, move left/right, drag the heading edge for the width; separate settings, reset per side; replaces the print column dialog

## 1.10.0 – 2026-11-10
- Print column settings: dialog (columns symbol next to the print button) to choose the printed columns, their order and width in mm; Status and Last seen are off by default; remembered in the browser, Reset restores defaults

## 1.9.0 – 2026-11-10
- The switch at the right end of the tab bar also hides the missing (offline) devices in the lists (default off = clean view); on = badges and missing devices visible. Card option hide_offline

## 1.8.0 – 2026-11-10
- Round switch at the right end of the tab bar shows / hides the red counters (offline devices) on the tabs; default off, remembered in the browser

## 1.7.5 – 2026-11-10
- Expand/collapse symbol is a directory tree with boxes: collapsed = top box with dashed grey sub-boxes, expanded = full tree in blue

## 1.7.4 – 2026-11-10
- Expand/collapse switches use a directory-tree symbol (trunk with two branches, no boxes); blue while all channels are expanded

## 1.7.3 – 2026-11-10
- Internet access switch asks for confirmation when allowing as well as when blocking

## 1.7.2 – 2026-11-10
- Search keeps the channel grouping: matching sub-channels stay under their parent, a parent that only matches through a channel is shown and expanded, expand/collapse works while filtering

## 1.7.1 – 2026-11-09
- Expand/collapse arrow moved into its own narrow column so all device names stay left-aligned; only sub-channels are indented
- Global expand/collapse toggle also in the header of that column (besides the toolbar button)

## 1.7.0 – 2026-11-09
- Multi-channel devices: sub-channels (devices that belong to another device of the same integration) are grouped under their parent; row arrow and a global expand/collapse button in the toolbar (choice is remembered)
- Roomier row spacing

## 1.6.2 – 2026-11-09
- Sonoff tab also lists devices that only show Sonoff in their entity ids (e.g. ESPHome Sonoff S26 with a generic model)

## 1.6.1 – 2026-11-09
- Narrower columns (smaller horizontal padding, cells cut at 170 px), roomier row spacing; scanner name without the address suffix, IRK shortened to 8 characters (click copies the full value)

## 1.6.0 – 2026-11-09
- Bluetooth tab: distance, home/away, BLE MAC, scanner, scanner IP and IRK (private BLE device and Bermuda trackers), room from Bermuda when the device has none; Bermuda devices are listed under Bluetooth

## 1.5.0 – 2026-11-09
- New columns: signal (RSSI), temperature and Bluetooth (BLE scanner switch of Shelly devices, click toggles); columns without any value are hidden
- One-off import of notes and photos from the old template-based network dashboard (runs automatically when an admin opens the panel; only fills empty notes)

## 1.4.0 – 2026-11-09
- Internet column (globe): shows the FRITZ!Box internet access switch of a device (allowed / blocked) and toggles it with one click (confirmation before blocking); the switch of FRITZ mirror devices is attached to the real device with the same MAC

## 1.3.3 – 2026-11-09
- Fix: Home Assistant became unresponsive. Home Assistant 2026.11 deprecated device_registry.devices.values() and DeviceEntry.config_entries; every access inspects the call stack and with ~460 devices one inventory build blocked the event loop for several seconds. The inventory now uses the new accessors (with fallback for older versions) and reads each value once.
- Inventory refresh every 2 minutes, requests reuse data younger than 15 s, warning in the log when a build takes longer than 0.5 s

## 1.3.2 – 2026-11-09
- Fix: removed a MutationObserver that rescanned the whole Home Assistant UI on every DOM change and made the frontend slow; icon fix now runs only four times after load

## 1.3.1 – 2026-11-09
- Even more compact table: font 12 px, tighter rows and cell padding, smaller heading and toolbar spacing

## 1.3.0 – 2026-11-09
- New Sonoff tab (Sonoff/ITEAD devices from any integration, e.g. ESPHome, Matter, ZigBee) with the Sonoff logo (square S with three waves)
- Tasmota tab uses the Tasmota logo
- Sidebar symbol now matches the integration logo: Bluetooth, Matter and ZigBee symbols above the device list

## 1.2.3 – 2026-11-09
- Battery column heading is a battery symbol (tooltip: Batterien)

## 1.2.2 – 2026-11-09
- Tab tooltips use the same names as the table headings (Alle Geräte, ZigBee, Batterien, Sonstige) in the Home Assistant language

## 1.2.1 – 2026-11-09
- Card and panel JavaScript are loaded with a version in the URL, so browsers no longer show an old cached version (fixes missing search field after an update)
- Quick polling for the first minute after opening, loading indicator, tabs wait for the card
- Concurrent list requests share one inventory rebuild

## 1.2.0 – 2026-11-09
- Search field next to the page-format button: filters by name, model, room, IP, MAC, manufacturer, firmware, note and online/offline; counter shows hits/total; printing uses the filtered list

## 1.1.7 – 2026-11-09
- Icon layout: Bluetooth, Matter and ZigBee symbols on top, device list below (like tabs above a table)

## 1.1.6 – 2026-11-09
- Integration icon now shows the Bluetooth, Matter and ZigBee symbols

## 1.1.5 – 2026-11-09
- Compact columns: widths follow the content, shorter headings (Batt., Zuletzt/Seen), icon headings for photos and notes

## 1.1.4 – 2026-11-09
- Printing includes up to 8 small photo thumbnails per device and waits up to 20 s for the images

## 1.1.3 – 2026-11-09
- Printing: heading repeated on every page and page numbers as 1/3 (page numbers need Chrome/Edge 131 or newer)

## 1.1.2 – 2026-11-09
- Every tab switch and refresh builds the device list fresh (no more up-to-60-second-old data)

## 1.1.1 – 2026-11-09
- Refresh button (two circling arrows) left of the print button
- Switching tabs keeps the last data instead of showing an empty list
- Sidebar entry uses the integration icon (list with Bluetooth symbol)

## 1.1.0 – 2026-11-09
- Heading above every table with the category name
- Battery tab: all devices with a battery (percent or low/ok), lowest first, badge shows batteries at 20 % or below

## 1.0.2 – 2026-11-09
- Single orientation button: the page symbol switches between portrait and landscape

## 1.0.1 – 2026-11-09
- Release workflow can also be started manually for an existing tag

## 1.0.0 – 2026-11-09
- First public release: stable after daily use on a 460-device system
- Duplicate and placeholder devices (FRITZ!Box/Bluetooth mirrors, devices without entities) are hidden
- Automatic GitHub release on version tags (workflow) and scripts/release.py for version bumps

## 0.2.1 – 2026-11-09
- Compact table: smaller font and padding, long names/firmware cut with an ellipsis (full text as tooltip), column width follows content.
- Table scrolls inside the card (sticky header, horizontal scrollbar always visible); options `max_height` and `max_cell` for the card.

## 0.2.0 – 2026-11-09
- Sidebar panel "Device Inventory" with one tab per device class (brand icons, offline badge).
- IP column (link to the device web page) and MAC column (click = copy).
- Toolbar uses symbols (print, portrait, landscape) instead of text; texts follow the Home Assistant language (EN/DE).
- Integration icon.

## 0.1.0 – 2026-11-09
- First release: device classes, offline sensors, notes, several photos per device, print / PDF, `device-inventory-card`.
