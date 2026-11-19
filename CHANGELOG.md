# Changelog

Versions follow [Semantic Versioning](https://semver.org/). Each version is a git tag `vX.Y.Z` and a GitHub release; HACS shows that number.

## 1.19.0b5 – 2026-11-19
- New tab Rain Bird
- Rows named by the same MAC address (colon and underscore spelling) are shown once; rows called only by their MAC are merged into the real device

## 1.19.0b4 – 2026-11-19
- New tabs: Philips Hue, KNX, Energy, Vehicles, Media, Home appliances, Cameras, Network & office, plus company tabs (Sonos, IKEA, Home Connect, tado, Somfy, Loxone, Aqara, Xiaomi, TP-Link, Kasa, Netatmo, Nest, SmartThings) and automatic tabs for integrations with three or more devices
- Tabs grouped (general first, then companies), wrapped tab bar, show/hide dialog and a short description for every tab
- Router Mesh: node rows show IP, MAC, firmware and temperature of the box or repeater
- IP column: last known address shown dimmed, router suggestions and manual entry for devices without an address
- Fewer duplicates: rows named by a MAC address (also AA_BB_CC form) are merged into the real device; temperatures in the unit system of Home Assistant (°F)
- Fixes: Shelly Mini no longer lands in the Vehicles tab, FRITZ trackers no longer flood the Network tab

## 1.19.0b3 – 2026-11-18
- Documents of any file type per device (Excel, Word, CSV, images ...), stored with their names in config/device_inventory/<tab>/<device>/, photos in the same place; warning: no credentials
- New column Files (names of all documents and links) for printout and CSV
- AI search: hint field and local web page of the device for single devices, asks for more information when nothing is found, device name search for network clients
- Shorter button texts, selection box for several documents, pause button, search field keeps its focus

## 1.19.0b2 – 2026-11-18
- AI search for network clients without a model uses the device name
- AI search and PDF copy only for the devices matching the search filter
- AI requests time out after 90 s and are retried once when the service is busy
- Search field: no more lost focus, debounced table update, keys no longer trigger Home Assistant shortcuts

## 1.19.0b1 – 2026-11-17
- Documents per device: AI search for manuals (PDF first, archived locally), own PDFs, several links, product photos from the manufacturer
- AI setup guide (Google Gemini, free key) in the README
- Pause button, grouped toolbar, translations of all new texts
- Needs an AI provider with an AI task entity; optional, off by default

## 1.18.9 – 2026-11-17
- Security: photos are only served to logged-in users; the list returns signed, expiring photo URLs (async_sign_path)
- Security: the IRK of Private BLE devices is no longer read from other integrations' config entries; the IRK column is gone
- README: installation leads with the HACS / Marketplace catalog
- New Apple tab; Router Mesh without the cards view; FRITZ! mirror devices of iPhones show Apple

## 1.18.8 – 2026-11-15
- Release after the HACS and hassfest validation runs passed (for the HACS default list); no functional change

## 1.18.7 – 2026-11-15
- HACS and hassfest validation workflows, manifest category and after_dependencies (bluetooth), brand icons; groundwork for the Marketplace catalog

## 1.18.6 – 2026-11-15
- New FRITZ! tab (box, repeaters, DECT) with the mesh nodes as expandable tree, own logo and default layout
- Router Mesh tab: connection (LAN / WiFi symbols) and node per client, LAN / WiFi client counts in own columns
- Connected-to column between IP and MAC (off by default)
- Printout in colour (PDF) with a colour / black-and-white switch
- Tooltip with the complete text on every cut-off cell, columns fit their content by default, Auto button
- Row spacing switch, symbol of the tab in front of the heading, panel shows a diagnostic instead of a blank page
- FRITZ! boxes: CPU temperature limits, one row per box

## 1.18.5 – 2026-11-15
- Printout in colour (PDF) with a colour / black-and-white switch in the print button group
- New Router Mesh tab: how each client is connected (LAN / WLAN + SSID) and to which router / repeater, as expandable tree per node (optional cards view)
- Symbol of the tab in front of the heading
- New columns are inserted behind their predecessor in saved column layouts

## 1.18.4 – 2026-11-14
- Panel: no more blank page – loads the card itself if Home Assistant did not and shows a diagnostic message (with HA version and browser) when it cannot be loaded

## 1.18.3 – 2026-11-14
- Network overview: the Home Assistant server and IP-bearing network trackers (e.g. Proxmox) get rows
- Switch for row spacing (tight by default)
- Only LAN addresses from IP sensors, no external/WAN IP

## 1.18.2 – 2026-11-13
- Switches to show/hide thumbnails and comment text in the list (hover always works)
- Full-text tooltip on truncated cells
- Auto button in column settings: fit widths to content
- Rows with thumbnails wrap text at whole words over several lines

## 1.18.1 – 2026-11-13
- Sub-channels as expandable tree rows for Homematic, MQTT, ESPHome, ZigBee, Matter ... (multi-channel devices)
- Option: unfold only sub-rows with comment or photo (funnel button)
- New tabs: Blink, Amazon Echo (Alexa), Modbus (one row per Modbus entity) with logos
- Natural sort order (ch2 before ch10)
- Adding / editing a photo or note keeps scroll position and row order
- README: flat icons, new screenshots and example printout

## 1.18.0 – 2026-11-13
- Option to blur IP / MAC addresses (screen and printout)
- Print: icons as column headings and for the internet column
- Status LED as green / red circle again
- Adding / editing / deleting a photo or note keeps the scroll position and row order

## 1.17.0 – 2026-11-12
- Printer friendly (monochrome icons)
- Hide tabs without entries, hide tree column without sub-channels, no-cache frontend files

## 1.16.1 – 2026-11-11
- Bluetooth: Private BLE Device and Bermuda entries with the same name are merged into one row (IRK, scanner, distance, room, last seen combined)

## 1.16.0 – 2026-11-10
- The note text is shown in the table next to the note symbol (cut with ... when it does not fit, whole text on hover, click opens the editor); applies to every tab; default width 240 px, adjustable in the column editor

## 1.15.3 – 2026-11-10
- Fix: the tab symbol in the printout heading was not found because the panel sits inside shadow roots in Home Assistant; it is now taken from the card's own panel

## 1.15.2 – 2026-11-10
- Edit-mode watermark fills the table (monitor / printer symbol scaled to the table height, minimum 460 px) and is slightly darker

## 1.15.1 – 2026-11-10
- Edit-mode watermark is straight (no tilt)

## 1.15.0 – 2026-11-10
- Printout: the symbol of the tab (Shelly logo, battery, Bluetooth ...) is printed in front of the heading when printing from the sidebar panel
- Edit-mode watermark: one large, much paler symbol in the middle instead of a repeated pattern

## 1.14.3 – 2026-11-10
- Watermark in the column edit mode uses a monitor symbol (blue, display) and a printer symbol (orange, printout) instead of text

## 1.14.2 – 2026-11-10
- Column edit mode shows a watermark (DISPLAY blue / PRINTOUT orange) and a frame in the same colour so the two layouts cannot be mixed up

## 1.14.1 – 2026-11-10
- Default print layout: tuned column widths (mm) taken over from the author's layout; display widths stay automatic

## 1.14.0 – 2026-11-10
- Column layout can be copied (📋, JSON to the clipboard) and imported (📥) in edit mode; built-in DEFAULT_LAYOUT for display and printout

## 1.13.3 – 2026-11-10
- Logo: ZigBee symbol removed, Bluetooth and Matter symbols larger and further apart, all three list rows equally wide; sidebar symbol follows

## 1.13.2 – 2026-11-10
- Toolbar: print and page format sit directly next to each other (one pair), with a gap to refresh and export

## 1.13.1 – 2026-11-10
- Resetting the table configuration asks for confirmation first (all settings of the selected side are lost)

## 1.13.0 – 2026-11-10
- CSV export button: saves the current table (display columns and names, search filter, sorting, all sub-channels with a Main device column) as UTF-8 CSV; semicolon separator in German Home Assistant

## 1.12.1 – 2026-11-10
- The columns symbol and its edit buttons (Display / Printout, reset, done) sit at the right end of the toolbar

## 1.12.0 – 2026-11-10
- Column names can be edited in the table heading (edit mode), separately for the display and the printout; empty = default name

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
