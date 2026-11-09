/* Device Inventory card - table of devices of one class with photos, notes, print. */
/* sidebar icon: list + bluetooth, registered as custom icon set "deviceinventory" */
window.customIcons = window.customIcons || {};
window.customIcons.deviceinventory = {
  getIcon: async (name) => (name === "logo" ? { path: "M2.44 6.75L2.44 7.05L2.59 7.31L2.71 7.40L3.00 7.48L3.29 7.40L3.41 7.31L4.02 6.69L4.05 8.55L4.10 8.69L4.20 8.81L4.32 8.90L4.46 8.96L4.61 8.97L4.76 8.95L4.90 8.89L5.02 8.79L6.71 6.97L6.77 6.69L6.70 6.41L5.51 5.20L6.70 3.99L6.77 3.71L6.76 3.56L6.62 3.31L4.90 1.51L4.76 1.45L4.61 1.43L4.46 1.44L4.32 1.50L4.20 1.59L4.10 1.71L4.05 1.85L4.02 3.71L3.41 3.09L3.15 2.94L3.00 2.92L2.71 3.00L2.50 3.21L2.42 3.50L2.50 3.79L3.89 5.20L2.59 6.49ZM5.17 3.91L5.17 3.45L5.40 3.69ZM5.17 6.49L5.40 6.71L5.17 6.95ZM11.55 7.40L11.47 7.01L11.34 6.65L11.17 6.30L10.95 5.97L10.70 5.68L10.40 5.42L10.07 5.20L9.71 5.02L9.32 4.88L9.32 5.73L9.82 5.99L10.23 6.37L8.52 7.36L8.52 7.82L8.92 8.06L10.64 7.07L10.76 7.62L10.74 8.17L11.48 8.60L11.55 8.19L11.58 7.79ZM4.72 11.85L4.55 11.65L4.35 11.48L4.12 11.35L3.86 11.28L3.60 11.25L3.34 11.28L3.08 11.35L2.85 11.48L2.65 11.65L2.48 11.85L2.35 12.08L2.28 12.34L2.25 12.60L2.28 12.86L2.35 13.12L2.48 13.35L2.65 13.55L2.85 13.72L3.08 13.85L3.34 13.92L3.60 13.95L3.86 13.92L4.12 13.85L4.35 13.72L4.55 13.55L4.72 13.35L4.85 13.12L4.92 12.86L4.95 12.60L4.92 12.34L4.85 12.08ZM4.55 15.65L4.35 15.48L4.12 15.35L3.86 15.28L3.60 15.25L3.34 15.28L3.08 15.35L2.85 15.48L2.65 15.65L2.48 15.85L2.35 16.08L2.28 16.34L2.25 16.60L2.28 16.86L2.35 17.12L2.48 17.35L2.65 17.55L2.85 17.72L3.08 17.85L3.34 17.92L3.60 17.95L3.86 17.92L4.12 17.85L4.35 17.72L4.55 17.55L4.72 17.35L4.85 17.12L4.92 16.86L4.95 16.60L4.92 16.34L4.85 16.08L4.72 15.85ZM4.55 19.65L4.35 19.48L4.12 19.35L3.86 19.28L3.60 19.25L3.34 19.28L3.08 19.35L2.85 19.48L2.65 19.65L2.48 19.85L2.35 20.08L2.28 20.34L2.25 20.60L2.28 20.86L2.35 21.12L2.48 21.35L2.65 21.55L2.85 21.72L3.08 21.85L3.34 21.92L3.60 21.95L3.86 21.92L4.12 21.85L4.35 21.72L4.55 21.55L4.72 21.35L4.85 21.12L4.92 20.86L4.95 20.60L4.92 20.34L4.85 20.08L4.72 19.85ZM15.50 21.70L15.50 19.50L6.60 19.50L6.60 21.70ZM10.59 3.55L9.85 3.97L10.16 4.24L10.50 4.46L10.86 4.63L11.23 4.75L11.61 4.83L12.00 4.85L12.39 4.83L12.77 4.75L13.14 4.63L13.50 4.46L13.84 4.24L14.15 3.97L13.42 3.55L12.94 3.84L12.40 4.01L12.40 2.03L12.00 1.80L11.60 2.03L11.60 4.01L11.06 3.84ZM16.73 7.52L16.75 7.66L16.90 7.91L17.15 8.06L17.30 8.07L21.50 8.07L21.79 8.00L21.91 7.91L22.06 7.65L22.06 7.35L21.91 7.09L21.65 6.94L18.60 6.92L21.92 3.29L22.01 3.17L22.07 2.88L22.05 2.74L21.90 2.49L21.78 2.40L21.50 2.33L17.30 2.33L17.01 2.40L16.89 2.49L16.74 2.75L16.74 3.05L16.89 3.31L17.15 3.46L20.20 3.48L16.88 7.11L16.79 7.23ZM12.53 8.60L13.26 8.18L13.24 7.62L13.37 7.07L15.08 8.06L15.48 7.82L15.48 7.36L13.77 6.37L14.18 5.99L14.68 5.72L14.68 4.88L14.29 5.02L13.93 5.20L13.60 5.42L13.31 5.68L13.05 5.98L12.84 6.30L12.66 6.65L12.54 7.01L12.46 7.40L12.43 7.79L12.45 8.20ZM21.50 11.50L6.60 11.50L6.60 13.70L21.50 13.70ZM21.50 15.50L6.60 15.50L6.60 17.70L21.50 17.70Z", viewBox: "0 0 24 24" } : undefined),
};
(function fixIcons(root) {
  if (!root.querySelectorAll) return;
  root.querySelectorAll("ha-icon").forEach((el) => {
    if (el.icon && el.icon.startsWith("deviceinventory:") && typeof el._loadIcon === "function") { el._legacy = false; el._loadIcon(); }
  });
  root.querySelectorAll("*").forEach((el) => { if (el.shadowRoot) fixIcons(el.shadowRoot); });
  if (!window.__diIconObs && document.body) {
    window.__diIconObs = new MutationObserver(() => fixIcons(document));
    window.__diIconObs.observe(document.body, { childList: true, subtree: true });
  }
})(document);

const T = {
  en: { all: "All devices", other: "Other", status: "Status", name: "Device", model: "Model", area: "Area", ip: "IP", mac: "MAC",
    maker: "Manufacturer", fw: "Firmware", seen: "Seen", battery: "Batt.", photos: "Photos", note: "Note",
    print: "Print / PDF", land: "Landscape", port: "Portrait", count: "devices", online: "Online", offline: "Offline",
    addPhoto: "Add photo(s)", close: "Close", del: "Delete", save: "Save", cancel: "Cancel", hint: "Ctrl+Enter = save, Esc = cancel",
    delPhoto: "Delete this photo?", delNote: "Delete note?", noPhotos: "No photos yet.", noteOf: "Note", photosOf: "Photos",
    uploadFail: "Upload failed", saveFail: "Saving failed", printFail: "Printing failed", stand: "As of", search: "Search", copy: "Copy", refresh: "Refresh", low: "Low", ok: "OK", batteries: "Batteries", adminOnly: "Admin required" },
  de: { all: "Alle Geräte", other: "Sonstige", status: "Status", name: "Gerät", model: "Modell", area: "Raum", ip: "IP", mac: "MAC",
    maker: "Hersteller", fw: "Firmware", seen: "Zuletzt", battery: "Batt.", photos: "Fotos", note: "Bemerkung",
    print: "Drucken / PDF", land: "Querformat", port: "Hochformat", count: "Geräte", online: "Online", offline: "Offline",
    addPhoto: "Foto(s) hinzufügen", close: "Schließen", del: "Löschen", save: "Speichern", cancel: "Abbrechen", hint: "Strg+Enter = Speichern, Esc = Abbrechen",
    delPhoto: "Dieses Foto löschen?", delNote: "Bemerkung löschen?", noPhotos: "Noch keine Fotos.", noteOf: "Bemerkung", photosOf: "Fotos",
    uploadFail: "Foto-Upload fehlgeschlagen", saveFail: "Speichern fehlgeschlagen", printFail: "Drucken fehlgeschlagen", stand: "Stand", search: "Suchen", copy: "Kopieren", refresh: "Aktualisieren", low: "Niedrig", ok: "OK", batteries: "Batterien", adminOnly: "Admin-Rechte nötig" },
};
const NAMES = { shelly: "Shelly", esphome: "ESPHome", zigbee: "ZigBee", homematic: "Homematic", mqtt: "MQTT", matter: "Matter",
  wled: "WLED", sonoff: "Sonoff", zwave: "Z-Wave", tasmota: "Tasmota", hue: "Hue", tuya: "Tuya", bluetooth: "Bluetooth" };
const COLS = ["#", "status", "name", "model", "area", "ip", "mac", "maker", "fw", "battery", "seen", "photos", "note"];

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
      this._load();
      this._timer = setInterval(() => (this.isConnected ? this._load() : clearInterval(this._timer)), 30000);
      // quick polls right after opening / after a Home Assistant start, while entities are still coming up
      let n = 0;
      this._warm = setInterval(() => { if (!this.isConnected || ++n > 12) clearInterval(this._warm); else this._load(); }, 5000);
    }
  }

  getCardSize() { return 6; }
  static getStubConfig() { return { class: "esphome" }; }

  get _t() { return T[(this._hass && this._hass.language || "en").slice(0, 2)] || T.en; }

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
    s.devices = (r.devices || []).filter((d) => cls === "all" || (cls === "battery" ? this._hasBattery(d) : d.classes.includes(cls)));
    s.notes = r.notes || {};
    s.photos = r.photos || {};
    s.loaded = true;
    this._render();
  }

  _label() {
    const c = this._config.class;
    return this._config.title || (c === "all" ? this._t.all : c === "other" ? this._t.other : c === "battery" ? this._t.batteries : NAMES[c] || c);
  }

  _hasBattery(d) { return d.battery !== null && d.battery !== undefined || d.battery_low !== null && d.battery_low !== undefined; }

  _val(d, col) {
    const s = this._state;
    switch (col) {
      case "status": return d.online ? 1 : 0;
      case "name": return (d.name || "").toLowerCase();
      case "model": return (d.model || "").toLowerCase();
      case "area": return (d.area || "zzz").toLowerCase();
      case "ip": return (d.ip || "").split(".").map((x) => x.padStart(3, "0")).join(".");
      case "mac": return d.mac || "";
      case "maker": return (d.manufacturer || "").toLowerCase();
      case "fw": return d.sw_version || "";
      case "battery": return d.battery !== null && d.battery !== undefined ? d.battery : d.battery_low === true ? 0 : d.battery_low === false ? 100 : -1;
      case "seen": return d.last_seen || "";
      case "photos": return (s.photos[d.id] || []).length;
      case "note": return ((s.notes[d.id] || {}).t || "").toLowerCase();
      default: return 0;
    }
  }

  _hay(d) {
    return [d.name, d.model, d.area, d.ip, d.mac, d.manufacturer, d.sw_version, (this._state.notes[d.id] || {}).t, d.online ? "online" : "offline"]
      .filter(Boolean).join(" ").toLowerCase();
  }

  _sorted() {
    const s = this._state;
    const q = (this._q || "").trim().toLowerCase();
    const rows = s.devices.filter((d) => !q || this._hay(d).includes(q));
    const col = s.sortCol || (this._config.class === "battery" ? "battery" : "area");
    rows.sort((a, b) => {
      const x = this._val(a, col), y = this._val(b, col);
      const c = typeof x === "number" ? x - y : String(x).localeCompare(String(y));
      return (c || String(a.name).localeCompare(String(b.name))) * (s.sortCol ? s.sortDir : 1);
    });
    return rows;
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
    const act = this._root.activeElement;
    const keep = act && act.classList && act.classList.contains("q") ? [act.selectionStart, act.selectionEnd] : null;
    const t = this._t, s = this._state, cfg = this._config;
    const hide = new Set(cfg.hide || []);
    const root = this._root;
    root.innerHTML = "";
    const st = document.createElement("style");
    st.textContent = `ha-card{padding:4px 8px 6px}
      .wrap{overflow:auto;max-height:${cfg.max_height || "calc(100vh - 170px)"}}
      table{width:auto;border-collapse:collapse;font-size:12px}
      th{position:sticky;top:0;z-index:1;background:var(--card-background-color,#fff);text-align:left;padding:2px 5px;border-bottom:2px solid var(--divider-color,#888);cursor:pointer;user-select:none;white-space:nowrap}
      th:hover{color:var(--primary-color)}
      td{padding:1px 5px;line-height:1.25;border-bottom:1px solid var(--divider-color,#444);white-space:nowrap;max-width:${cfg.max_cell || 200}px;overflow:hidden;text-overflow:ellipsis}
      tr:hover td{background:rgba(127,127,127,.08)}.ic{cursor:pointer;margin-right:3px;font-size:14px}
      button,select{cursor:pointer;padding:4px 10px;border-radius:8px;border:1px solid var(--divider-color,#888);background:transparent;color:var(--primary-text-color);font-size:13px}
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
    const upd = () => { cnt.textContent = !s.loaded ? "⏳" : this._q ? `Σ ${this._sorted().length}/${s.devices.length}` : `Σ ${s.devices.length}`; };
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
    bar.append(rb, pb, seg, qi, cnt);
    card.appendChild(bar);

    const tbl = document.createElement("table");
    const hr = document.createElement("tr");
    COLS.filter((c) => !hide.has(c)).forEach((c) => {
      const th = document.createElement("th");
      th.textContent = (c === "#" ? "#" : c === "photos" ? "🖼️" : c === "note" ? "📝" : c === "battery" ? "🔋" : t[c]) + (s.sortCol === c ? (s.sortDir > 0 ? "▲" : "▼") : "");
      if (c === "photos" || c === "note" || c === "battery") th.title = c === "battery" ? t.batteries : t[c];
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
    const add = (col, node) => { if (hide.has(col)) return; const td = document.createElement("td"); if (typeof node === "string") { td.textContent = node; if (node.length > 24) td.title = node; } else if (node) td.appendChild(node); tr.appendChild(td); return td; };
    add("#", String(n));
    const led = el("span", null, d.online ? "🟢" : "🔴"); led.title = d.online ? t.online : t.offline;
    add("status", led);
    const nm = el("span", "cursor:pointer", d.name || ""); nm.title = d.name || "";
    nm.onclick = () => { if (d.entity) this.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId: d.entity }, bubbles: true, composed: true })); };
    add("name", nm);
    add("model", d.model || "–");
    add("area", d.area || "–");
    if (d.ip) {
      const a = el("a", "color:var(--primary-color)", d.ip); a.href = `http://${d.ip.includes(":") ? "[" + d.ip + "]" : d.ip}`; a.target = "_blank"; a.rel = "noopener";
      add("ip", a);
    } else add("ip", "–");
    if (d.mac) {
      const m = el("span", "cursor:pointer", d.mac); m.title = this._t.copy; m.onclick = () => { try { navigator.clipboard.writeText(d.mac); m.textContent = "✓ " + d.mac; setTimeout(() => (m.textContent = d.mac), 1200); } catch (e) { /* ignore */ } };
      add("mac", m);
    } else add("mac", "–");
    add("maker", d.manufacturer || "–");
    add("fw", (d.sw_version || "–").split(" ")[0]);
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
  _print() {
    const t = this._t, s = this._state, E = (x) => String(x == null ? "" : x).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const hide = new Set(this._config.hide || []);
    const cols = COLS.filter((c) => !hide.has(c));
    const title = this._label();
    const small = this._ori === "portrait" || cols.length > 11;
    let html = `<!doctype html><html><head><meta charset="utf-8"><title>${E(title)}</title><style>@page{size:A4 ${this._ori};margin:8mm 8mm 12mm;@bottom-right{content:counter(page) "/" counter(pages);font:8pt Arial,sans-serif;color:#444}}
      body{font-family:Arial,sans-serif;font-size:${small ? 7.5 : 9}pt;color:#000;margin:0}th.ttl{background:#fff;border:none;border-bottom:.5pt solid #999;padding:0 0 2mm;font-size:13pt}th.ttl small{font-size:8pt;font-weight:normal;color:#444;margin-left:3mm}
      table{border-collapse:collapse;width:100%}th,td{border:.5pt solid #999;padding:1mm 1.4mm;text-align:left;vertical-align:top}th{background:#e8e8e8}
      thead{display:table-header-group}tr{page-break-inside:avoid}img{width:${small ? 48 : 64}px;height:${small ? 48 : 64}px;object-fit:cover;margin:1px}</style></head><body>
      <table><thead><tr><th class="ttl" colspan="${cols.length}">${E(title)}<small>${E(t.stand)}: ${E(new Date().toLocaleString(this._hass.language || "en"))} | ${s.devices.length} ${E(t.count)}</small></th></tr><tr>${cols.map((c) => `<th>${E(c === "#" ? "#" : t[c])}</th>`).join("")}</tr></thead><tbody>`;
    this._sorted().forEach((d, i) => {
      const cells = {
        "#": i + 1, status: d.online ? "🟢 " + t.online : "🔴 " + t.offline, name: d.name, model: d.model || "–", area: d.area || "–", ip: d.ip || "–", mac: d.mac || "–",
        maker: d.manufacturer || "–", fw: (d.sw_version || "–").split(" ")[0], battery: d.battery != null ? d.battery + " %" : d.battery_low != null ? (d.battery_low ? t.low : t.ok) : "–",
        seen: this._ago(d.last_seen), note: (s.notes[d.id] || {}).t || "",
      };
      html += "<tr>" + cols.map((c) => c === "photos"
        ? `<td>${(s.photos[d.id] || []).slice(0, 8).map((p) => `<img src="${location.origin}/api/device_inventory/photo/${p.id}">`).join("")}</td>`
        : `<td>${E(cells[c]).replace(/\n/g, "<br>")}</td>`).join("") + "</tr>";
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
