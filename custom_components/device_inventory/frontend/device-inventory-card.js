/* Device Inventory card - table of devices of one class with photos, notes, print. */
/* sidebar icon: list + bluetooth, registered as custom icon set "deviceinventory" */
window.customIcons = window.customIcons || {};
window.customIcons.deviceinventory = {
  getIcon: async (name) => (name === "logo" ? { path: "M16.12 3.55L15.30 4.02L15.65 4.33L16.02 4.57L16.42 4.76L16.84 4.90L17.27 4.98L17.70 5.01L18.13 4.98L18.56 4.90L18.98 4.76L19.38 4.57L19.75 4.33L20.10 4.02L19.28 3.55L18.75 3.88L18.15 4.07L18.15 1.86L17.70 1.60L17.25 1.86L17.25 4.07L16.65 3.88ZM3.75 7.27L3.73 7.44L3.75 7.61L3.82 7.77L3.92 7.90L4.05 8.00L4.21 8.07L4.38 8.09L4.55 8.07L4.71 8.00L4.84 7.90L5.65 7.09L5.65 9.24L5.67 9.41L5.74 9.57L5.85 9.70L5.98 9.81L6.14 9.87L6.31 9.89L6.48 9.86L6.64 9.79L6.77 9.69L8.69 7.65L8.79 7.51L8.85 7.36L8.87 7.19L8.85 7.03L8.78 6.87L7.34 5.40L8.68 4.06L8.78 3.93L8.85 3.77L8.87 3.61L8.85 3.44L8.79 3.29L8.69 3.15L6.77 1.11L6.64 1.01L6.48 0.94L6.31 0.91L6.14 0.93L5.98 0.99L5.85 1.10L5.74 1.23L5.67 1.39L5.65 1.56L5.65 3.71L4.84 2.90L4.71 2.80L4.55 2.73L4.38 2.71L4.21 2.73L4.05 2.80L3.92 2.90L3.82 3.04L3.75 3.19L3.73 3.36L3.75 3.53L3.82 3.69L3.92 3.82L5.50 5.40L3.92 6.98L3.82 7.12ZM6.95 3.95L6.95 3.20L7.31 3.59ZM6.95 6.85L7.31 7.21L6.95 7.60ZM19.49 5.65L19.16 5.94L18.88 6.27L18.64 6.63L18.44 7.02L18.30 7.43L18.21 7.86L18.18 8.30L18.20 8.75L18.29 9.20L19.11 8.73L19.09 8.10L19.23 7.49L21.14 8.59L21.59 8.33L21.59 7.81L19.67 6.71L20.14 6.28L20.69 5.99L20.69 5.04L20.26 5.19L19.85 5.40ZM17.10 7.43L16.96 7.02L16.77 6.63L16.53 6.27L16.24 5.94L15.91 5.65L15.55 5.40L15.15 5.19L14.71 5.04L14.71 5.99L15.26 6.29L15.73 6.71L13.81 7.81L13.81 8.33L14.26 8.59L16.18 7.49L16.31 8.10L16.29 8.72L17.11 9.20L17.20 8.75L17.23 8.30L17.19 7.86ZM4.55 11.85L4.35 11.68L4.12 11.55L3.86 11.48L3.60 11.45L3.34 11.48L3.08 11.55L2.85 11.68L2.65 11.85L2.48 12.05L2.35 12.28L2.28 12.54L2.25 12.80L2.28 13.06L2.35 13.32L2.48 13.55L2.65 13.75L2.85 13.92L3.08 14.05L3.34 14.12L3.60 14.15L3.86 14.12L4.12 14.05L4.35 13.92L4.55 13.75L4.72 13.55L4.85 13.32L4.92 13.06L4.95 12.80L4.92 12.54L4.85 12.28L4.72 12.05ZM21.50 13.90L21.50 11.70L6.60 11.70L6.60 13.90ZM4.72 16.05L4.55 15.85L4.35 15.68L4.12 15.55L3.86 15.48L3.60 15.45L3.34 15.48L3.08 15.55L2.85 15.68L2.65 15.85L2.48 16.05L2.35 16.28L2.28 16.54L2.25 16.80L2.28 17.06L2.35 17.32L2.48 17.55L2.65 17.75L2.85 17.92L3.08 18.05L3.34 18.12L3.60 18.15L3.86 18.12L4.12 18.05L4.35 17.92L4.55 17.75L4.72 17.55L4.85 17.32L4.92 17.06L4.95 16.80L4.92 16.54L4.85 16.28ZM21.50 17.90L21.50 15.70L6.60 15.70L6.60 17.90ZM4.55 19.85L4.35 19.68L4.12 19.55L3.86 19.48L3.60 19.45L3.34 19.48L3.08 19.55L2.85 19.68L2.65 19.85L2.48 20.05L2.35 20.28L2.28 20.54L2.25 20.80L2.28 21.06L2.35 21.32L2.48 21.55L2.65 21.75L2.85 21.92L3.08 22.05L3.34 22.12L3.60 22.15L3.86 22.12L4.12 22.05L4.35 21.92L4.55 21.75L4.72 21.55L4.85 21.32L4.92 21.06L4.95 20.80L4.92 20.54L4.85 20.28L4.72 20.05ZM21.50 19.70L6.60 19.70L6.60 21.90L21.50 21.90Z", viewBox: "0 0 24 24" } : undefined),
};
// ha-icon needs a nudge when a custom icon set is registered after the sidebar rendered.
// Only a few one-shot passes (no MutationObserver, which would scan the whole UI on every change).
(function () {
  const fix = (root) => {
    if (!root || !root.querySelectorAll) return;
    root.querySelectorAll("ha-icon").forEach((el) => {
      if (el.icon && el.icon.startsWith("deviceinventory:") && typeof el._loadIcon === "function") { el._legacy = false; el._loadIcon(); }
    });
    root.querySelectorAll("*").forEach((el) => { if (el.shadowRoot) fix(el.shadowRoot); });
  };
  [500, 2000, 6000, 15000].forEach((ms) => setTimeout(() => fix(document), ms));
})();

const T = {
  en: { all: "All devices", other: "Other", status: "Status", name: "Device", model: "Model", area: "Area", ip: "IP", mac: "MAC",
    maker: "Manufacturer", fw: "Firmware", seen: "Seen", battery: "Batt.", photos: "Photos", note: "Note",
    print: "Print / PDF", land: "Landscape", port: "Portrait", count: "devices", online: "Online", offline: "Offline",
    addPhoto: "Add photo(s)", close: "Close", del: "Delete", save: "Save", cancel: "Cancel", hint: "Ctrl+Enter = save, Esc = cancel",
    delPhoto: "Delete this photo?", delNote: "Delete note?", noPhotos: "No photos yet.", noteOf: "Note", photosOf: "Photos",
    uploadFail: "Upload failed", saveFail: "Saving failed", printFail: "Printing failed", stand: "As of", printCols: "Edit columns (display and print)", exportCsv: "Export as CSV", resetAsk: "Reset the table configuration? All settings of this side (columns shown, order, widths, column names) will be lost.", parent: "Main device", yes: "yes",  rename: "Column name (empty = default)", tgtView: "Display", tgtPrint: "Printout", done: "Done", reset: "Reset",  expand: "Show channels", collapse: "Hide channels", channels: "channels", distance: "Distance", home: "Home", bleaddr: "BLE MAC", scanner: "Scanner", scannerip: "Scanner IP", irk: "IRK", signal: "Signal", temp: "Temp", ble: "Bluetooth", importDone: "Imported from the old network dashboard", importNotes: "notes", importPhotos: "photos",  internet: "Internet", allowed: "Allowed", blocked: "Blocked", blockAsk: "Block internet access for this device?", allowAsk: "Allow internet access for this device?",  search: "Search", copy: "Copy", refresh: "Refresh", low: "Low", ok: "OK", batteries: "Batteries", adminOnly: "Admin required" },
  de: { all: "Alle Geräte", other: "Sonstige", status: "Status", name: "Gerät", model: "Modell", area: "Raum", ip: "IP", mac: "MAC",
    maker: "Hersteller", fw: "Firmware", seen: "Zuletzt", battery: "Batt.", photos: "Fotos", note: "Bemerkung",
    print: "Drucken / PDF", land: "Querformat", port: "Hochformat", count: "Geräte", online: "Online", offline: "Offline",
    addPhoto: "Foto(s) hinzufügen", close: "Schließen", del: "Löschen", save: "Speichern", cancel: "Abbrechen", hint: "Strg+Enter = Speichern, Esc = Abbrechen",
    delPhoto: "Dieses Foto löschen?", delNote: "Bemerkung löschen?", noPhotos: "Noch keine Fotos.", noteOf: "Bemerkung", photosOf: "Fotos",
    uploadFail: "Foto-Upload fehlgeschlagen", saveFail: "Speichern fehlgeschlagen", printFail: "Drucken fehlgeschlagen", stand: "Stand", printCols: "Spalten bearbeiten (Anzeige und Druck)", exportCsv: "Als CSV exportieren", resetAsk: "Tabellenkonfiguration zurücksetzen? Alle Einstellungen dieser Seite (sichtbare Spalten, Reihenfolge, Breiten, Spaltennamen) gehen verloren.", parent: "Hauptgerät", yes: "ja",  rename: "Spaltenname (leer = Standard)", tgtView: "Anzeige", tgtPrint: "Druck", done: "Fertig", reset: "Zurücksetzen",  expand: "Unterkanäle ausklappen", collapse: "Unterkanäle einklappen", channels: "Kanäle", distance: "Entfernung", home: "Zuhause", bleaddr: "BLE-MAC", scanner: "Scanner", scannerip: "Scanner-IP", irk: "IRK", signal: "Signal", temp: "Temp", ble: "Bluetooth", importDone: "Aus dem alten Netzwerk-Dashboard übernommen", importNotes: "Bemerkungen", importPhotos: "Fotos",  internet: "Internet", allowed: "Erlaubt", blocked: "Gesperrt", blockAsk: "Internetzugang für dieses Gerät sperren?", allowAsk: "Internetzugang für dieses Gerät erlauben?",  search: "Suchen", copy: "Kopieren", refresh: "Aktualisieren", low: "Niedrig", ok: "OK", batteries: "Batterien", adminOnly: "Admin-Rechte nötig" },
};
const NAMES = { shelly: "Shelly", esphome: "ESPHome", zigbee: "ZigBee", homematic: "Homematic", mqtt: "MQTT", matter: "Matter",
  wled: "WLED", sonoff: "Sonoff", zwave: "Z-Wave", tasmota: "Tasmota", hue: "Hue", tuya: "Tuya", bluetooth: "Bluetooth" };
const COLS = ["#", "status", "internet", "kids", "name", "model", "area", "distance", "home", "ip", "mac", "bleaddr", "scanner", "scannerip", "irk", "maker", "fw", "signal", "temp", "ble", "battery", "seen", "photos", "note"];
const TREE_SVG = (on) => `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" style="${on ? "color:var(--primary-color)" : ""}"><rect x="3" y="2" width="9" height="5" rx="1.5"/><g ${on ? "" : 'stroke-dasharray="2 2.2" opacity=".55"'}><path d="M7.5 7v10a2.5 2.5 0 0 0 2.5 2.5H13M7.5 12H13"/><rect x="13" y="9.5" width="8" height="5" rx="1.5"/><rect x="13" y="17" width="8" height="5" rx="1.5"/></g></svg>`;
const OPTIONAL = ["kids", "internet", "distance", "home", "bleaddr", "scanner", "scannerip", "irk", "ip", "mac", "signal", "temp", "ble", "battery"]; // hidden when no device has a value

function el(tag, css, txt) {
  const x = document.createElement(tag);
  if (css) x.style.cssText = css;
  if (txt !== undefined) x.textContent = txt;
  return x;
}

class DeviceInventoryCard extends HTMLElement {
  setConfig(config) {
    this._config = Object.assign({ class: "all", title: "", hide: [] }, config);
    this._state = { devices: [], notes: {}, photos: {}, sortCol: null, sortDir: 1, loaded: false };
    const cached = this._raw;
    if (this._tgt === undefined) { try { this._tgt = localStorage.getItem("diTgt") === "print" ? "print" : "view"; } catch (e) { this._tgt = "view"; } }
    if (this._exp === undefined) { this._exp = new Set(); try { this._expAll = localStorage.getItem("diExpand") === "1"; } catch (e) { this._expAll = false; } }
    let ori = "portrait";
    try { if (localStorage.getItem("diOri") === "landscape") ori = "landscape"; } catch (e) { /* ignore */ }
    this._ori = ori;
    if (!this._root) {
      this._root = this.attachShadow({ mode: "open" });
    }
    if (cached) this._apply(cached); else this._render();
    if (this._hass) this._load();
  }

  set hass(hass) {
    const first = !this._hass;
    this._hass = hass;
    if (first) {
      this._load().then(() => this._migrate());
      this._timer = setInterval(() => (this.isConnected ? this._load() : clearInterval(this._timer)), 30000);
      // quick polls right after opening / after a Home Assistant start, while entities are still coming up
      let n = 0;
      this._warm = setInterval(() => { if (!this.isConnected || ++n > 12) clearInterval(this._warm); else this._load(); }, 5000);
    }
  }

  getCardSize() { return 6; }
  static getStubConfig() { return { class: "esphome" }; }

  get _t() { return T[(this._hass && this._hass.language || "en").slice(0, 2)] || T.en; }

  async _migrate() {
    // one-off: take over notes and photos of the old template-based network dashboard
    try {
      const h = this._hass;
      if (!h || !h.user || !h.user.is_admin) return;
      try { if (localStorage.getItem("diLegacy") === "1") return; } catch (e) { /* ignore */ }
      let notes = {}, images = [];
      try { const r = await h.callWS({ type: "frontend/get_system_data", key: "netzwerk_bemerkungen" }); notes = (r && r.value && typeof r.value === "object") ? r.value : {}; } catch (e) { /* none */ }
      try { images = (await h.callWS({ type: "image/list" })).filter((i) => (i.name || "").indexOf("netzfoto_") === 0).map((i) => ({ id: i.id, name: i.name })); } catch (e) { /* none */ }
      if (Object.keys(notes).length || images.length) {
        const res = await h.callWS({ type: "device_inventory/import_legacy", notes, images });
        const t = this._t;
        if (res.notes || res.photos) alert(`${t.importDone}: ${res.notes} ${t.importNotes}, ${res.photos} ${t.importPhotos}`);
        await this._load();
      }
      try { localStorage.setItem("diLegacy", "1"); } catch (e) { /* ignore */ }
    } catch (e) { console.warn("device_inventory import", e); }
  }

  async _load() {
    try {
      const r = await this._hass.callWS({ type: "device_inventory/list" });
      this._apply(r);
    } catch (e) { console.warn("device_inventory", e); }
  }

  _apply(r) {
    this._raw = r;
    const cls = this._config.class;
    const s = this._state;
    const hideOff = !!this._config.hide_offline;
    s.devices = (r.devices || []).filter((d) => (!hideOff || d.online) && (cls === "all" || (cls === "battery" ? this._hasBattery(d) : d.classes.includes(cls))));
    s.notes = r.notes || {};
    s.photos = r.photos || {};
    s.loaded = true;
    this._render();
  }

  _label() {
    const c = this._config.class;
    return this._config.title || (c === "all" ? this._t.all : c === "other" ? this._t.other : c === "battery" ? this._t.batteries : NAMES[c] || c);
  }

  _sw(entity) {
    if (!entity || !this._hass) return null;
    const st = this._hass.states[entity];
    return st ? st.state : "unavailable";
  }

  _has(d, col) {
    switch (col) {
      case "kids": return !!d.parent && !!this._presentIds && this._presentIds.has(d.parent);
      case "internet": return !!d.internet_switch;
      case "ip": return !!d.ip;
      case "mac": return !!d.mac;
      case "distance": return !!d.ble && d.ble.distance != null;
      case "home": return !!d.ble && d.ble.home != null;
      case "bleaddr": return !!d.ble && !!d.ble.address;
      case "scanner": return !!d.ble && !!d.ble.scanner;
      case "scannerip": return !!d.ble && !!d.ble.scanner_ip;
      case "irk": return !!d.ble && !!d.ble.irk;
      case "signal": return d.rssi != null;
      case "temp": return d.temp != null;
      case "ble": return !!d.ble_switch;
      case "battery": return this._hasBattery(d);
      default: return true;
    }
  }

  _inet(d) {
    if (!d.internet_switch || !this._hass) return null;
    const st = this._hass.states[d.internet_switch];
    return st ? st.state : "unavailable";
  }

  _hasBattery(d) { return d.battery !== null && d.battery !== undefined || d.battery_low !== null && d.battery_low !== undefined; }

  _val(d, col) {
    const s = this._state;
    switch (col) {
      case "status": return d.online ? 1 : 0;
      case "internet": { const x = this._inet(d); return x === "on" ? 2 : x === "off" ? 1 : 0; }
      case "name": return (d.name || "").toLowerCase();
      case "model": return (d.model || "").toLowerCase();
      case "area": return (d.area || "zzz").toLowerCase();
      case "ip": return (d.ip || "").split(".").map((x) => x.padStart(3, "0")).join(".");
      case "mac": return d.mac || "";
      case "distance": return d.ble && d.ble.distance != null ? d.ble.distance : 9999;
      case "home": return d.ble && d.ble.home != null ? (d.ble.home ? 1 : 0) : -1;
      case "bleaddr": return (d.ble && d.ble.address) || "";
      case "scanner": return (d.ble && d.ble.scanner) || "";
      case "scannerip": return (d.ble && d.ble.scanner_ip) || "";
      case "irk": return (d.ble && d.ble.irk) || "";
      case "signal": return d.rssi == null ? -999 : d.rssi;
      case "temp": return d.temp == null ? -999 : d.temp;
      case "ble": { const x = this._sw(d.ble_switch); return x === "on" ? 2 : x === "off" ? 1 : 0; }
      case "maker": return (d.manufacturer || "").toLowerCase();
      case "fw": return d.sw_version || "";
      case "battery": return d.battery !== null && d.battery !== undefined ? d.battery : d.battery_low === true ? 0 : d.battery_low === false ? 100 : -1;
      case "seen": return d.last_seen || "";
      case "photos": return (s.photos[d.id] || []).length;
      case "note": return ((s.notes[d.id] || {}).t || "").toLowerCase();
      default: return 0;
    }
  }

  _toggleKids(id) {
    if (this._exp.has(id)) this._exp.delete(id); else this._exp.add(id);
    this._render();
  }

  _hay(d) {
    return [d.name, d.model, d.area, d.ip, d.mac, d.manufacturer, d.sw_version, (this._state.notes[d.id] || {}).t, d.online ? "online" : "offline"]
      .filter(Boolean).join(" ").toLowerCase();
  }

  _sorted(forceOpen) {
    const s = this._state;
    const q = (this._q || "").trim().toLowerCase();
    const all = s.devices.slice();
    const match = new Set(all.filter((d) => !q || this._hay(d).includes(q)).map((d) => d.id));
    this._matchCount = match.size;
    const col = s.sortCol || (this._config.class === "battery" ? "battery" : "area");
    all.sort((a, b) => {
      const x = this._val(a, col), y = this._val(b, col);
      const c = typeof x === "number" ? x - y : String(x).localeCompare(String(y));
      return (c || String(a.name).localeCompare(String(b.name))) * (s.sortCol ? s.sortDir : 1);
    });
    // group sub-channels under their parent; a parent stays visible when one of its channels matches
    this._lvl = {}; this._kids = {};
    const present = new Set(all.map((d) => d.id));
    const kids = {};
    all.forEach((d) => { if (d.parent && present.has(d.parent)) (kids[d.parent] = kids[d.parent] || []).push(d); });
    const out = [];
    all.forEach((d) => {
      if (d.parent && present.has(d.parent)) return;
      const k = kids[d.id] || [];
      const shownKids = q ? k.filter((c) => match.has(c.id)) : k;
      if (q && !match.has(d.id) && !shownKids.length) return;
      out.push(d);
      if (k.length) {
        this._kids[d.id] = shownKids.length;
        const auto = q && !match.has(d.id) && shownKids.length > 0;
        if (shownKids.length && (forceOpen || this._expAll || this._exp.has(d.id) || auto)) shownKids.forEach((c) => { this._lvl[c.id] = 1; out.push(c); });
      }
    });
    return out;
  }

  _ago(iso) {
    if (!iso) return "–";
    const sec = Math.max(0, (Date.now() - new Date(iso).getTime()) / 1000);
    const rtf = new Intl.RelativeTimeFormat(this._hass.language || "en", { numeric: "auto" });
    if (sec < 90) return rtf.format(-Math.round(sec), "second");
    if (sec < 5400) return rtf.format(-Math.round(sec / 60), "minute");
    if (sec < 129600) return rtf.format(-Math.round(sec / 3600), "hour");
    return rtf.format(-Math.round(sec / 86400), "day");
  }

  _render() {
    if (!this._root || !this._state) return;
    const activeEl = this._root.activeElement;
    const keep = activeEl && activeEl.classList && activeEl.classList.contains("q") ? [activeEl.selectionStart, activeEl.selectionEnd] : null;
    const t = this._t, s = this._state, cfg = this._config;
    const hide = new Set(cfg.hide || []);
    this._presentIds = new Set(s.devices.map((x) => x.id));
    OPTIONAL.forEach((c) => { if (!s.devices.some((d) => this._has(d, c))) hide.add(c); });
    // column layout: display configuration, or - in edit mode - the configuration of the selected target (display / printout)
    const edit = !!this._edit, tgt = this._tgt || "view";
    const vcfg = this._viewCfg(), act = tgt === "print" ? this._printCfg() : vcfg;
    if (!edit) vcfg.off.forEach((c) => hide.add(c));
    const shown = (edit ? act : vcfg).order.filter((c) => !hide.has(c));
    if (!hide.has("kids")) shown.splice(Math.max(0, shown.indexOf("name")), 0, "kids");
    this._colOrder = shown;
    const names = (edit ? act : vcfg).n || {};
    this._dimCols = edit ? act.off : new Set();
    const mm = 3.7795;
    this._widths = {};
    const wsrc = (edit ? act : vcfg).w;
    Object.keys(wsrc).forEach((c) => { if (wsrc[c] > 0) this._widths[c] = (edit && tgt === "print") ? wsrc[c] * mm : wsrc[c]; });
    const root = this._root;
    root.innerHTML = "";
    const st = document.createElement("style");
    st.textContent = `ha-card{padding:4px 8px 6px}
      .wrap{overflow:auto;max-height:${cfg.max_height || "calc(100vh - 170px)"}}
      table{width:auto;border-collapse:collapse;font-size:12px}
      th{position:sticky;top:0;z-index:1;background:var(--card-background-color,#fff);text-align:left;padding:3px 4px;border-bottom:2px solid var(--divider-color,#888);cursor:pointer;user-select:none;white-space:nowrap}
      th:hover{color:var(--primary-color)}
      td{padding:7px 4px;line-height:1.3;border-bottom:1px solid var(--divider-color,#444);white-space:nowrap;max-width:${cfg.max_cell || 170}px;overflow:hidden;text-overflow:ellipsis}
      tr:hover td{background:rgba(127,127,127,.08)}.ic{cursor:pointer;margin-right:3px;font-size:14px}
      button,select{cursor:pointer;padding:4px 10px;border-radius:8px;border:1px solid var(--divider-color,#888);background:transparent;color:var(--primary-text-color);font-size:13px}
      th .cfgc{display:flex;gap:2px;align-items:center;margin-bottom:2px}th .cfgc button{padding:0 4px;font-size:11px;line-height:16px;border-radius:4px}th .cfgc input{margin:0}
      .bar{display:flex;gap:6px;align-items:center;margin:0 0 4px}.dim{opacity:.65;font-size:12px}`;
    root.appendChild(st);
    const card = document.createElement("ha-card");
    card.appendChild(el("div", "font-size:16px;font-weight:600;margin:2px 2px 4px", this._label()));
    root.appendChild(card);

    const bar = el("div"); bar.className = "bar";
    const pb = el("button", "font-size:16px;padding:4px 12px", "🖨️"); pb.title = t.print; pb.onclick = () => this._print();
    const PAGE = {
      portrait: '<path d="M7 3h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M14 3v5h5"/>',
      landscape: '<path d="M3 7a2 2 0 0 1 2-2h11l5 5v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M16 5v5h5"/>',
    };
    const ob = el("button", "padding:4px 9px;display:inline-flex;align-items:center");
    ob.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${PAGE[this._ori]}</svg>`;
    ob.title = this._ori === "portrait" ? t.port : t.land;
    ob.onclick = () => { this._ori = this._ori === "portrait" ? "landscape" : "portrait"; try { localStorage.setItem("diOri", this._ori); } catch (e) { /* ignore */ } this._render(); };
    const seg = ob;
    const rb = el("button", "padding:4px 9px;display:inline-flex;align-items:center");
    rb.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 18A6 6 0 0 1 6 12C6 11 6.25 10.03 6.7 9.2L5.24 7.74C4.46 8.97 4 10.43 4 12A8 8 0 0 0 12 20V23L16 19L12 15M12 4V1L8 5L12 9V6A6 6 0 0 1 18 12C18 13 17.75 13.97 17.3 14.8L18.76 16.26C19.54 15.03 20 13.57 20 12A8 8 0 0 0 12 4Z"/></svg>';
    rb.title = t.refresh;
    rb.onclick = async () => { rb.style.opacity = ".4"; await this._load(); rb.style.opacity = ""; };
    const cnt = el("span", null, ""); cnt.className = "dim"; cnt.title = t.count;
    const upd = () => { cnt.textContent = !s.loaded ? "⏳" : this._q ? (() => { this._sorted(); return `Σ ${this._matchCount}/${s.devices.length}`; })() : `Σ ${s.devices.length}`; };
    upd();
    const qi = document.createElement("input");
    qi.className = "q"; qi.type = "search"; qi.placeholder = "🔍"; qi.title = t.search; qi.value = this._q || "";
    qi.style.cssText = "padding:4px 8px;width:150px;border-radius:8px;border:1px solid var(--divider-color,#888);background:transparent;color:var(--primary-text-color);font-size:13px";
    qi.oninput = () => {
      this._q = qi.value; upd();
      const body = this._tbody; body.innerHTML = "";
      this._sorted().forEach((d, i) => body.appendChild(this._row(d, i + 1, hide)));
    };
    qi.onkeydown = (ev) => { ev.stopPropagation(); if (ev.key === "Escape" && qi.value) { qi.value = ""; qi.oninput(); } };
    const withKids = s.devices.some((d) => d.parent && s.devices.some((p) => p.id === d.parent));
    this._allKidParents = [...new Set(s.devices.filter((d) => d.parent).map((d) => d.parent))];
    const pcb = el("button", "padding:4px 9px;display:inline-flex;align-items:center");
    pcb.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16M15 4v16"/></svg>';
    pcb.title = t.printCols;
    if (edit) { pcb.style.background = "var(--primary-color)"; pcb.style.color = "#fff"; pcb.style.borderColor = "transparent"; }
    pcb.onclick = () => { this._edit = !this._edit; this._render(); };
    const xcb = el("button", "padding:4px 9px;display:inline-flex;align-items:center");
    xcb.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/><path d="M12 12v5M9.5 15l2.5 2.5 2.5-2.5"/></svg>';
    xcb.title = t.exportCsv; xcb.onclick = () => this._exportCsv();
    // refresh + export on the left, a gap, then print and page format directly next to each other as one segmented pair
    const printPair = el("span", "display:inline-flex;margin-left:14px");
    pb.style.borderRadius = "8px 0 0 8px"; seg.style.borderRadius = "0 8px 8px 0"; seg.style.marginLeft = "-1px";
    printPair.append(pb, seg);
    bar.append(rb, xcb, printPair);
    const editGroup = el("span", "display:inline-flex;gap:6px;align-items:center;margin-left:auto");
    editGroup.appendChild(pcb);
    if (edit) {
      const mk = (id, lbl, ttl) => { const b = el("button", "padding:4px 9px", lbl); b.title = ttl; if (tgt === id) { b.style.background = "var(--primary-color)"; b.style.color = "#fff"; b.style.borderColor = "transparent"; } b.onclick = () => { this._tgt = id; try { localStorage.setItem("diTgt", id); } catch (e) { /* ignore */ } this._render(); }; return b; };
      const rs = el("button", null, "↺"); rs.title = t.reset; rs.onclick = () => { if (!confirm(`${tgt === "print" ? t.tgtPrint : t.tgtView}: ${t.resetAsk}`)) return; try { localStorage.removeItem(tgt === "print" ? "diPrint" : "diView"); } catch (e) { /* ignore */ } this._render(); };
      const dn = el("button", null, "✓"); dn.title = t.done; dn.onclick = () => { this._edit = false; this._render(); };
      editGroup.append(mk("view", "🖥️", t.tgtView), mk("print", "🖨️", t.tgtPrint), rs, dn);
    }
    if (withKids) {
      const xb = el("button", "padding:4px 9px;display:inline-flex;align-items:center");
      xb.innerHTML = TREE_SVG(this._expAll);
      xb.title = this._expAll ? t.collapse : t.expand;
      xb.onclick = () => { this._expAll = !this._expAll; this._exp.clear(); try { localStorage.setItem("diExpand", this._expAll ? "1" : "0"); } catch (e) { /* ignore */ } this._render(); };
      bar.append(xb);
    }
    bar.append(qi, cnt, editGroup);
    card.appendChild(bar);

    const tbl = document.createElement("table");
    const hr = document.createElement("tr");
    this._colOrder.forEach((c) => {
      const th = document.createElement("th");
      th.dataset.col = c;
      const dflt = (c === "#" ? "#" : c === "photos" ? "🖼️" : c === "note" ? "📝" : c === "battery" ? "🔋" : c === "internet" ? "🌐" : c === "distance" ? "📏" : c === "home" ? "🏠" : c === "signal" ? "📶" : c === "temp" ? "🌡️" : c === "ble" ? "ᛒ" : t[c]);
      const label = (names[c] || dflt) + (s.sortCol === c ? (s.sortDir > 0 ? "▲" : "▼") : "");
      th.textContent = label;
      if (["photos", "note", "battery", "internet", "signal", "temp", "ble", "distance", "home"].includes(c)) th.title = c === "battery" ? t.batteries : t[c];
      if (this._widths[c]) th.style.cssText += `;width:${this._widths[c]}px;max-width:${this._widths[c]}px;min-width:${this._widths[c]}px`;
      if (c === "kids") {
        th.innerHTML = TREE_SVG(this._expAll); th.title = this._expAll ? t.collapse : t.expand; th.style.textAlign = "center";
        th.onclick = () => { this._expAll = !this._expAll; this._exp.clear(); try { localStorage.setItem("diExpand", this._expAll ? "1" : "0"); } catch (e) { /* ignore */ } this._render(); };
        hr.appendChild(th); return;
      }
      if (edit) {
        // controls directly in the table heading: show/print checkbox, move left / right, drag the right edge to resize
        th.style.cursor = "default";
        const ctl = el("div"); ctl.className = "cfgc";
        const cb = document.createElement("input"); cb.type = "checkbox"; cb.checked = !act.off.has(c);
        cb.onchange = () => { if (cb.checked) act.off.delete(c); else act.off.add(c); this._saveCfg(tgt, act); this._render(); };
        const move = (dir) => () => { const i = act.order.indexOf(c); let j = i + dir; while (j >= 0 && j < act.order.length && !shown.includes(act.order[j])) j += dir; if (j < 0 || j >= act.order.length) return; [act.order[i], act.order[j]] = [act.order[j], act.order[i]]; this._saveCfg(tgt, act); this._render(); };
        const l = el("button", null, "◀"), r = el("button", null, "▶"); l.onclick = move(-1); r.onclick = move(1);
        ctl.append(cb, l, r);
        const title = document.createElement("input");
        title.type = "text"; title.value = names[c] || ""; title.placeholder = c === "#" ? "#" : (t[c] || c); title.title = t.rename;
        title.style.cssText = "width:100%;min-width:48px;box-sizing:border-box;font:inherit;font-weight:700;padding:1px 3px;border:1px dashed var(--divider-color,#888);border-radius:4px;background:transparent;color:inherit";
        title.onkeydown = (ev) => { ev.stopPropagation(); if (ev.key === "Enter") title.blur(); };
        title.onchange = () => { const v = title.value.trim(); if (v) { act.n = act.n || {}; act.n[c] = v; } else if (act.n) delete act.n[c]; this._saveCfg(tgt, act); this._render(); };
        th.textContent = ""; th.append(ctl, title);
        const grip = el("span", "position:absolute;right:0;top:0;bottom:0;width:7px;cursor:col-resize;background:rgba(127,127,127,.25)");
        grip.title = "↔";
        grip.ondblclick = () => { delete act.w[c]; this._saveCfg(tgt, act); this._render(); };
        grip.onmousedown = (ev) => {
          ev.preventDefault(); ev.stopPropagation();
          const x0 = ev.clientX, w0 = th.getBoundingClientRect().width; let cur = w0;
          const mv = (e) => { cur = Math.max(24, w0 + e.clientX - x0); [th, ...tbl.querySelectorAll(`td[data-col="${c}"]`)].forEach((x) => { x.style.width = x.style.maxWidth = x.style.minWidth = cur + "px"; }); };
          const up = () => { document.removeEventListener("mousemove", mv); document.removeEventListener("mouseup", up); act.w[c] = tgt === "print" ? Math.round(cur / mm) : Math.round(cur); this._saveCfg(tgt, act); };
          document.addEventListener("mousemove", mv); document.addEventListener("mouseup", up);
        };
        th.appendChild(grip);
        if (this._dimCols.has(c)) th.style.opacity = ".45";
        hr.appendChild(th); return;
      }
      if (c !== "#") th.onclick = () => { if (s.sortCol === c) s.sortDir = -s.sortDir; else { s.sortCol = c; s.sortDir = 1; } this._render(); };
      hr.appendChild(th);
    });
    const thead = document.createElement("thead"); thead.appendChild(hr); tbl.appendChild(thead);
    const tb = document.createElement("tbody");
    this._tbody = tb;
    this._sorted().forEach((d, i) => tb.appendChild(this._row(d, i + 1, hide)));
    tbl.appendChild(tb);
    const wrap = el("div"); wrap.className = "wrap"; wrap.appendChild(tbl);
    card.appendChild(wrap);
    if (keep) { qi.focus(); try { qi.setSelectionRange(keep[0], keep[1]); } catch (e) { /* ignore */ } }
  }

  _row(d, n, hide) {
    const t = this._t, s = this._state;
    const tr = document.createElement("tr");
    const add = (col, node) => { if (hide.has(col)) return; const td = document.createElement("td"); td.dataset.col = col; if (typeof node === "string") { td.textContent = node; if (node.length > 24) td.title = node; } else if (node) td.appendChild(node); if (this._dimCols && this._dimCols.has(col)) td.style.opacity = ".35"; const w = this._widths && this._widths[col]; if (w) td.style.cssText += `;width:${w}px;max-width:${w}px;min-width:${w}px`; tr.appendChild(td); return td; };
    add("#", String(n));
    const led = el("span", null, d.online ? "🟢" : "🔴"); led.title = d.online ? t.online : t.offline;
    add("status", led);
    const inet = this._inet(d);
    if (inet === null) add("internet", "–");
    else {
      const on = inet === "on", off = inet === "off";
      const sw = el("span", "cursor:pointer;font-size:14px", on ? "✅" : off ? "🚫" : "❔");
      sw.title = on ? t.allowed : off ? t.blocked : inet;
      sw.onclick = async () => {
        if (!on && !off) return;
        if (!confirm(`${d.name}: ${on ? t.blockAsk : t.allowAsk}`)) return;
        sw.style.opacity = ".4";
        try { await this._hass.callService("switch", on ? "turn_off" : "turn_on", { entity_id: d.internet_switch }); } catch (e) { alert(`${t.saveFail}: ${e.message || e}`); }
        setTimeout(() => this._render(), 1200);
      };
      add("internet", sw);
    }
    const nm = el("span", "cursor:pointer", d.name || ""); nm.title = d.name || "";
    nm.onclick = () => { if (d.entity) this.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId: d.entity }, bubbles: true, composed: true })); };
    const depth = (this._lvl || {})[d.id], kidCount = (this._kids || {})[d.id];
    const kcell = add("kids", null);
    if (kcell && kidCount) {
      const open = this._expAll || this._exp.has(d.id);
      const tg = el("span", "cursor:pointer;opacity:.85;white-space:nowrap", `${open ? "▾" : "▸"}${kidCount}`);
      tg.title = `${kidCount} ${t.channels}`;
      tg.onclick = (ev) => { ev.stopPropagation(); if (this._expAll) { this._expAll = false; (this._allKidParents || []).forEach((i) => this._exp.add(i)); } this._toggleKids(d.id); };
      kcell.appendChild(tg);
    }
    const nameBox = el("span", depth ? "padding-left:16px" : "");
    if (depth) nameBox.appendChild(el("span", "opacity:.5;margin-right:3px", "└"));
    nameBox.appendChild(nm);
    add("name", nameBox);
    add("model", d.model || "–");
    add("area", d.area || "–");
    const b = d.ble || {};
    add("distance", b.distance == null ? "–" : b.distance.toFixed(1) + " m");
    add("home", b.home == null ? "–" : el("span", null, b.home ? "✅" : "🚫"));
    if (d.ip) {
      const a = el("a", "color:var(--primary-color)", d.ip); a.href = `http://${d.ip.includes(":") ? "[" + d.ip + "]" : d.ip}`; a.target = "_blank"; a.rel = "noopener";
      add("ip", a);
    } else add("ip", "–");
    if (d.mac) {
      const m = el("span", "cursor:pointer", d.mac); m.title = this._t.copy; m.onclick = () => { try { navigator.clipboard.writeText(d.mac); m.textContent = "✓ " + d.mac; setTimeout(() => (m.textContent = d.mac), 1200); } catch (e) { /* ignore */ } };
      add("mac", m);
    } else add("mac", "–");
    const copyable = (txt, _short, full) => { const x = el("span", "cursor:pointer", txt); x.title = full || txt; x.onclick = () => { try { navigator.clipboard.writeText(full || txt); } catch (e) { /* ignore */ } }; return x; };
    add("bleaddr", b.address ? copyable(String(b.address).toUpperCase()) : "–");
    add("scanner", b.scanner ? (() => { const sc = el("span", null, String(b.scanner).split(" (")[0]); sc.title = b.scanner; return sc; })() : "–");
    if (b.scanner_ip) { const a2 = el("a", "color:var(--primary-color)", b.scanner_ip); a2.href = `http://${b.scanner_ip}`; a2.target = "_blank"; a2.rel = "noopener"; add("scannerip", a2); } else add("scannerip", "–");
    add("irk", b.irk ? copyable(String(b.irk).slice(0, 8) + "…", false, String(b.irk)) : "–");
    add("maker", d.manufacturer || "–");
    add("fw", (d.sw_version || "–").split(" ")[0]);
    const sev = (v, good, warn, hi) => (hi ? (v >= good ? "var(--success-color)" : v >= warn ? "var(--warning-color)" : "var(--error-color)") : (v <= good ? "var(--success-color)" : v <= warn ? "var(--warning-color)" : "var(--error-color)"));
    add("signal", d.rssi == null ? "–" : el("span", `color:${sev(d.rssi, -60, -75, true)}`, d.rssi + " dBm"));
    add("temp", d.temp == null ? "–" : el("span", `color:${sev(d.temp, 55, 65, false)}`, d.temp.toFixed(1) + "°C"));
    const bleState = this._sw(d.ble_switch);
    if (bleState === null) add("ble", "–");
    else {
      const bon = bleState === "on";
      const bs = el("span", "cursor:pointer;display:inline-flex");
      bs.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" style="fill:${bon ? "#2196f3" : "#9e9e9e"}"><path d="M14.88 16.29L13 18.17V14.41M13 5.83L14.88 7.71L13 9.58M17.71 7.71L12 2H11V9.58L6.41 5L5 6.41L10.59 12L5 17.58L6.41 19L11 14.41V22H12L17.71 16.29L13.41 12L17.71 7.71Z"/></svg>`;
      bs.title = `${t.ble}: ${bon ? "on" : bleState === "off" ? "off" : bleState}`;
      bs.onclick = async () => {
        if (bleState !== "on" && bleState !== "off") return;
        bs.style.opacity = ".4";
        try { await this._hass.callService("switch", bon ? "turn_off" : "turn_on", { entity_id: d.ble_switch }); } catch (e) { alert(`${t.saveFail}: ${e.message || e}`); }
        setTimeout(() => this._render(), 1200);
      };
      add("ble", bs);
    }
    const num = d.battery !== null && d.battery !== undefined;
    const lowFlag = !num && d.battery_low !== null && d.battery_low !== undefined;
    const bt = num ? d.battery + " %" : lowFlag ? (d.battery_low ? t.low : t.ok) : "–";
    const lvl = num ? d.battery : lowFlag ? (d.battery_low ? 0 : 100) : null;
    const btn = el("span", lvl !== null ? `font-weight:600;color:${lvl <= 20 ? "var(--error-color)" : lvl <= 40 ? "var(--warning-color)" : "var(--success-color)"}` : "", bt);
    add("battery", btn);
    add("seen", this._ago(d.last_seen));

    const ps = s.photos[d.id] || [];
    const tp = document.createElement("span");
    if (ps.length) {
      const b = el("span", null, "🖼️" + (ps.length > 1 ? ps.length : "")); b.className = "ic";
      b.onclick = () => this._gallery(d);
      this._pop(b, (p) => {
        const g = el("div", `display:grid;grid-template-columns:repeat(${ps.length > 1 ? 2 : 1},auto);gap:6px`);
        ps.slice(0, 6).forEach((q) => { const im = el("img", ps.length > 1 ? "width:150px;height:150px;object-fit:cover;border-radius:4px" : "max-width:260px;max-height:260px;object-fit:contain"); im.src = `/api/device_inventory/photo/${q.id}`; g.appendChild(im); });
        p.appendChild(g);
        if (ps.length > 6) p.appendChild(el("div", "margin-top:4px;opacity:.7", `+ ${ps.length - 6}`));
      });
      tp.appendChild(b);
    }
    const ad = el("span", null, "📷"); ad.className = "ic"; ad.title = t.addPhoto;
    ad.onclick = async () => { ad.textContent = "⏳"; await this._pick(d, (x) => (ad.textContent = x)); await this._load(); };
    tp.appendChild(ad);
    add("photos", tp);

    const note = (s.notes[d.id] || {}).t || "";
    const nb = el("span", null, note ? "📝" : "✏️"); nb.className = "ic";
    if (note) this._pop(nb, (p) => { p.textContent = note; });
    nb.onclick = () => this._editNote(d);
    add("note", nb);
    // order the cells like the heading
    const byCol = {};
    [...tr.children].forEach((td) => { byCol[td.dataset.col] = td; });
    (this._colOrder || []).forEach((c) => { if (byCol[c]) tr.appendChild(byCol[c]); });
    return tr;
  }

  // ---------- popup / overlay helpers
  _pop(anchor, fill) {
    anchor.onmouseenter = () => {
      let p = document.getElementById("di-pop");
      if (!p) {
        p = el("div", "position:fixed;z-index:9998;pointer-events:none;background:var(--card-background-color,#fff);color:var(--primary-text-color,#000);border:1px solid var(--divider-color,#888);border-radius:8px;box-shadow:0 4px 16px rgba(0,0,0,.35);padding:6px 8px;max-width:420px;white-space:pre-wrap;font-size:13px;line-height:1.4");
        p.id = "di-pop"; document.body.appendChild(p);
      }
      p.innerHTML = ""; fill(p); p.style.display = "block";
      const r = anchor.getBoundingClientRect(); let x = r.left - p.offsetWidth - 8; if (x < 4) x = r.right + 8;
      p.style.left = x + "px"; p.style.top = Math.max(4, Math.min(r.top, innerHeight - p.offsetHeight - 4)) + "px";
    };
    anchor.onmouseleave = () => { const p = document.getElementById("di-pop"); if (p) p.style.display = "none"; };
  }

  _overlay() {
    const ov = el("div", "position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:9999;display:flex;align-items:center;justify-content:center");
    const bx = el("div", "background:var(--card-background-color,#fff);color:var(--primary-text-color,#000);border-radius:12px;padding:16px;width:min(760px,94vw);max-height:90vh;overflow:auto;box-shadow:0 8px 32px rgba(0,0,0,.4);font-family:var(--ha-font-family-body,Roboto,sans-serif)");
    ov.appendChild(bx);
    const kd = (ev) => { if (ev.key === "Escape") { ev.stopPropagation(); close(); } };
    const close = () => { ov.remove(); document.removeEventListener("keydown", kd, true); };
    document.addEventListener("keydown", kd, true);
    ov.addEventListener("mousedown", (ev) => { if (ev.target === ov) close(); });
    document.body.appendChild(ov);
    const pp = document.getElementById("di-pop"); if (pp) pp.style.display = "none";
    return { bx, close };
  }

  _btn(label, primary) {
    return el("button", primary ? "background:var(--primary-color);color:#fff;border-color:transparent" : "", label);
  }

  _gallery(d) {
    const t = this._t, o = this._overlay();
    const draw = () => {
      o.bx.innerHTML = "";
      o.bx.appendChild(el("div", "font-weight:600;font-size:16px;margin-bottom:10px", `${t.photosOf}: ${d.name}`));
      const g = el("div", "display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px");
      const ps = this._state.photos[d.id] || [];
      if (!ps.length) g.appendChild(el("div", "opacity:.6", t.noPhotos));
      ps.forEach((p) => {
        const w = el("div", "position:relative"), a = document.createElement("a");
        a.href = `/api/device_inventory/photo/${p.id}`; a.target = "_blank";
        const im = el("img", "width:100%;height:200px;object-fit:cover;border-radius:8px;display:block"); im.src = a.href; a.appendChild(im); w.appendChild(a);
        const x = el("span", "position:absolute;top:6px;right:6px;cursor:pointer;background:rgba(0,0,0,.6);color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center", "✖");
        x.title = t.del;
        x.onclick = async () => {
          if (!confirm(t.delPhoto)) return;
          try { this._apply(await this._hass.callWS({ type: "device_inventory/delete_photo", device_id: d.id, photo_id: p.id })); draw(); } catch (e) { alert(`${t.saveFail}: ${e.message || e.code}`); }
        };
        w.appendChild(x); g.appendChild(w);
      });
      o.bx.appendChild(g);
      const ft = el("div", "display:flex;gap:8px;justify-content:flex-end;align-items:center;margin-top:12px");
      const stt = el("span", "margin-right:auto;font-size:12px;opacity:.8");
      const add = this._btn("📷 " + t.addPhoto, true), cl = this._btn(t.close);
      add.onclick = async () => { add.disabled = true; await this._pick(d, (x) => (stt.textContent = x)); await this._load(); draw(); };
      cl.onclick = o.close;
      ft.append(stt, add, cl); o.bx.appendChild(ft);
    };
    draw();
  }

  _editNote(d) {
    const t = this._t, o = this._overlay(), old = (this._state.notes[d.id] || {}).t || "";
    o.bx.appendChild(el("div", "font-weight:600;font-size:16px;margin-bottom:10px", `${t.noteOf}: ${d.name}`));
    const ta = el("textarea", "width:100%;box-sizing:border-box;font-family:inherit;font-size:14px;padding:8px;border-radius:8px;border:1px solid var(--divider-color,#888);background:var(--secondary-background-color);color:inherit;resize:vertical");
    ta.rows = 8; ta.value = old;
    const ft = el("div", "display:flex;gap:8px;justify-content:flex-end;align-items:center;margin-top:10px;flex-wrap:wrap");
    ft.appendChild(el("span", "margin-right:auto;font-size:12px;opacity:.6", t.hint));
    const bD = this._btn(t.del), bC = this._btn(t.cancel), bS = this._btn(t.save, true);
    const save = async (text) => {
      bS.disabled = true;
      try { this._apply(await this._hass.callWS({ type: "device_inventory/set_note", device_id: d.id, text })); o.close(); } catch (e) { bS.disabled = false; alert(`${t.saveFail}: ${e.message || e.code}`); }
    };
    ta.onkeydown = (ev) => { if (ev.key === "Enter" && (ev.ctrlKey || ev.metaKey)) { ev.preventDefault(); save(ta.value); } };
    bD.onclick = () => { if (confirm(t.delNote)) save(""); };
    bC.onclick = o.close; bS.onclick = () => save(ta.value);
    if (old) ft.appendChild(bD);
    ft.append(bC, bS); o.bx.append(ta, ft); ta.focus();
  }

  // ---------- upload
  _resize(f) {
    return new Promise((res, rej) => {
      const u = window.URL.createObjectURL(f), im = new Image();
      im.onload = () => {
        try {
          const sc = Math.min(1, 1600 / Math.max(im.width, im.height)), cv = document.createElement("canvas");
          cv.width = Math.round(im.width * sc); cv.height = Math.round(im.height * sc);
          cv.getContext("2d").drawImage(im, 0, 0, cv.width, cv.height);
          window.URL.revokeObjectURL(u);
          cv.toBlob((b) => res(b || f), "image/jpeg", 0.85);
        } catch (e) { res(f); }
      };
      im.onerror = () => { window.URL.revokeObjectURL(u); rej(new Error(f.type || f.name)); };
      im.src = u;
    });
  }

  _pick(d, status) {
    return new Promise((resolve) => {
      const inp = document.createElement("input");
      inp.type = "file"; inp.accept = "image/*"; inp.multiple = true; inp.style.display = "none";
      document.body.appendChild(inp);
      inp.onchange = async () => {
        const files = [...(inp.files || [])]; inp.remove();
        try {
          for (let i = 0; i < files.length; i++) {
            status(`⏳ ${i + 1}/${files.length}`);
            const blob = await this._resize(files[i]);
            const fd = new FormData(); fd.append("file", blob, "photo.jpg");
            const r = await this._hass.fetchWithAuth(`/api/device_inventory/upload/${d.id}`, { method: "POST", body: fd });
            if (!r.ok) throw new Error(`HTTP ${r.status} ${await r.text()}`);
          }
        } catch (e) { alert(`${this._t.uploadFail}: ${e.message || e}`); }
        resolve();
      };
      inp.click();
    });
  }

  // ---------- print
  _cfg(tgt) {
    const key = tgt === "print" ? "diPrint" : "diView";
    let c = null;
    try { c = JSON.parse(localStorage.getItem(key) || "null"); } catch (e) { c = null; }
    if (!c) c = { order: [], off: tgt === "print" ? ["seen", "status"] : [], w: {}, n: {} }; // printout default: no "Zuletzt" and "Online"
    const base = COLS.filter((k) => k !== "kids");
    const known = (c.order || []).filter((k) => base.includes(k));
    return { order: [...known, ...base.filter((k) => !known.includes(k))], off: new Set(c.off || []), w: c.w || {}, n: c.n || {} };
  }

  _saveCfg(tgt, cfg) {
    try { localStorage.setItem(tgt === "print" ? "diPrint" : "diView", JSON.stringify({ order: cfg.order, off: [...cfg.off], w: cfg.w, n: cfg.n || {} })); } catch (e) { /* ignore */ }
  }

  _printCfg() { return this._cfg("print"); }
  _viewCfg() { return this._cfg("view"); }

  _textCells(d, i) {
    const t = this._t, s = this._state;
    const inet = this._inet(d), ble = this._sw(d.ble_switch);
    const b = d.ble || {};
    return {
      "#": i + 1, status: d.online ? t.online : t.offline, internet: inet === "on" ? t.allowed : inet === "off" ? t.blocked : "",
      name: d.name || "", model: d.model || "", area: d.area || "", ip: d.ip || "", mac: d.mac || "", maker: d.manufacturer || "", fw: (d.sw_version || "").split(" ")[0],
      battery: d.battery != null ? d.battery + " %" : d.battery_low != null ? (d.battery_low ? t.low : t.ok) : "", seen: d.last_seen || "",
      distance: b.distance != null ? String(b.distance) : "", home: b.home != null ? (b.home ? t.yes : "") : "", bleaddr: b.address || "", scanner: b.scanner || "", scannerip: b.scanner_ip || "", irk: b.irk || "",
      signal: d.rssi == null ? "" : String(d.rssi), temp: d.temp == null ? "" : String(d.temp), ble: ble === "on" ? "on" : ble === "off" ? "off" : "",
      photos: String((s.photos[d.id] || []).length || ""), note: (s.notes[d.id] || {}).t || "",
    };
  }

  _exportCsv() {
    const t = this._t, s = this._state;
    const hide = new Set(this._config.hide || []);
    OPTIONAL.forEach((c) => { if (!s.devices.some((d) => this._has(d, c))) hide.add(c); });
    const vcfg = this._viewCfg();
    const cols = vcfg.order.filter((c) => !vcfg.off.has(c) && !hide.has(c));
    const rows = this._sorted(true);
    const names = new Map(s.devices.map((d) => [d.id, d.name]));
    const withParent = rows.some((d) => d.parent && names.has(d.parent));
    const sep = (this._hass.language || "en").startsWith("de") ? ";" : ",";
    const q = (v) => { v = String(v == null ? "" : v); return /[";,\n\r]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };
    const head = cols.map((c) => q(vcfg.n[c] || (c === "#" ? "#" : t[c] || c)));
    if (withParent) head.push(q(t.parent));
    const lines = [head.join(sep)];
    rows.forEach((d, i) => {
      const cells = this._textCells(d, i);
      const line = cols.map((c) => q(cells[c]));
      if (withParent) line.push(q(d.parent && names.has(d.parent) ? names.get(d.parent) : ""));
      lines.push(line.join(sep));
    });
    const blob = new Blob(["\uFEFF" + lines.join("\r\n") + "\r\n"], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    const day = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    a.href = window.URL.createObjectURL(blob);
    a.download = `device-inventory-${this._config.class || "all"}-${day}.csv`;
    document.body.appendChild(a); a.click();
    setTimeout(() => { window.URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  }

  _print() {
    const t = this._t, s = this._state, E = (x) => String(x == null ? "" : x).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const hide = new Set(this._config.hide || []);
    OPTIONAL.forEach((c) => { if (!s.devices.some((d) => this._has(d, c))) hide.add(c); });
    hide.add("kids");
    const pcfg = this._printCfg();
    const cols = pcfg.order.filter((c) => !pcfg.off.has(c) && !hide.has(c));
    const wst = (c) => (pcfg.w[c] ? ` style="width:${pcfg.w[c]}mm;max-width:${pcfg.w[c]}mm;word-break:break-word"` : "");
    const title = this._label();
    const small = this._ori === "portrait" || cols.length > 11;
    let html = `<!doctype html><html><head><meta charset="utf-8"><title>${E(title)}</title><style>@page{size:A4 ${this._ori};margin:8mm 8mm 12mm;@bottom-right{content:counter(page) "/" counter(pages);font:8pt Arial,sans-serif;color:#444}}
      body{font-family:Arial,sans-serif;font-size:${small ? 7.5 : 9}pt;color:#000;margin:0}th.ttl{background:#fff;border:none;border-bottom:.5pt solid #999;padding:0 0 2mm;font-size:13pt}th.ttl small{font-size:8pt;font-weight:normal;color:#444;margin-left:3mm}
      table{border-collapse:collapse;width:100%}th,td{border:.5pt solid #999;padding:1mm 1.4mm;text-align:left;vertical-align:top}th{background:#e8e8e8}
      thead{display:table-header-group}tr{page-break-inside:avoid}img{width:${small ? 48 : 64}px;height:${small ? 48 : 64}px;object-fit:cover;margin:1px}</style></head><body>
      <table><thead><tr><th class="ttl" colspan="${cols.length}">${E(title)}<small>${E(t.stand)}: ${E(new Date().toLocaleString(this._hass.language || "en"))} | ${s.devices.length} ${E(t.count)}</small></th></tr><tr>${cols.map((c) => `<th${wst(c)}>${E(pcfg.n[c] || (c === "#" ? "#" : t[c]))}</th>`).join("")}</tr></thead><tbody>`;
    this._sorted().forEach((d, i) => {
      const cells = {
        "#": i + 1, status: d.online ? "🟢 " + t.online : "🔴 " + t.offline, internet: (() => { const x = this._inet(d); return x === "on" ? t.allowed : x === "off" ? t.blocked : "–"; })(), name: d.name, model: d.model || "–", area: d.area || "–", ip: d.ip || "–", mac: d.mac || "–",
        maker: d.manufacturer || "–", fw: (d.sw_version || "–").split(" ")[0], battery: d.battery != null ? d.battery + " %" : d.battery_low != null ? (d.battery_low ? t.low : t.ok) : "–",
        seen: this._ago(d.last_seen), distance: d.ble && d.ble.distance != null ? d.ble.distance.toFixed(1) + " m" : "–", home: d.ble && d.ble.home != null ? (d.ble.home ? "✔" : "✘") : "–", bleaddr: (d.ble && d.ble.address) || "–", scanner: (d.ble && d.ble.scanner) || "–", scannerip: (d.ble && d.ble.scanner_ip) || "–", irk: (d.ble && d.ble.irk) || "–", signal: d.rssi == null ? "–" : d.rssi + " dBm", temp: d.temp == null ? "–" : d.temp.toFixed(1) + "°C", ble: (() => { const x = this._sw(d.ble_switch); return x === "on" ? "on" : x === "off" ? "off" : "–"; })(), note: (s.notes[d.id] || {}).t || "",
      };
      html += "<tr>" + cols.map((c) => c === "photos"
        ? `<td${wst(c)}>${(s.photos[d.id] || []).slice(0, 8).map((p) => `<img src="${location.origin}/api/device_inventory/photo/${p.id}">`).join("")}</td>`
        : `<td${wst(c)}>${E(cells[c]).replace(/\n/g, "<br>")}</td>`).join("") + "</tr>";
    });
    html += "</tbody></table></body></html>";
    const f = document.createElement("iframe");
    f.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0";
    document.body.appendChild(f);
    const doc = f.contentDocument; doc.open(); doc.write(html); doc.close();
    let done = false;
    const go = () => { if (done) return; done = true; try { f.contentWindow.focus(); f.contentWindow.print(); } catch (e) { alert(`${t.printFail}: ${e}`); } setTimeout(() => f.remove(), 60000); };
    const imgs = [...doc.images]; let left = imgs.length;
    if (!left) { go(); return; }
    imgs.forEach((im) => { const fin = () => { if (--left <= 0) go(); }; if (im.complete) fin(); else im.onload = im.onerror = fin; });
    setTimeout(go, 20000);
  }
}

if (!customElements.get("device-inventory-card")) {
  customElements.define("device-inventory-card", DeviceInventoryCard);
}
window.customCards = window.customCards || [];
window.customCards.push({
  type: "device-inventory-card",
  name: "Device Inventory",
  description: "Table of devices of one integration class with photos, notes and print support.",
});
