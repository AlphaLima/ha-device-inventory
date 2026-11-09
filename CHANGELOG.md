# Changelog

Versions follow [Semantic Versioning](https://semver.org/). Each version is a git tag `vX.Y.Z` and a GitHub release; HACS shows that number.

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
