/* Device Inventory card - table of devices of one class with photos, notes, print. */
const T = {
  en: { all: "All devices", other: "Other", status: "Status", name: "Device", model: "Model", area: "Area",
    maker: "Manufacturer", fw: "Firmware", seen: "Last seen", battery: "Battery", photos: "Photos", note: "Note",
    print: "Print / PDF", land: "Landscape", port: "Portrait", count: "devices", online: "Online", offline: "Offline",
    addPhoto: "Add photo(s)", close: "Close", del: "Delete", save: "Save", cancel: "Cancel", hint: "Ctrl+Enter = save, Esc = cancel",
    delPhoto: "Delete this photo?", delNote: "Delete note?", noPhotos: "No photos yet.", noteOf: "Note", photosOf: "Photos",
    uploadFail: "Upload failed", saveFail: "Saving failed", printFail: "Printing failed", stand: "As of", adminOnly: "Admin required" },
  de: { all: "Alle Geräte", other: "Sonstige", status: "Status", name: "Gerät", model: "Modell", area: "Raum",
    maker: "Hersteller", fw: "Firmware", seen: "Zuletzt aktualisiert", battery: "Batterie", photos: "Fotos", note: "Bemerkung",
    print: "Drucken / PDF", land: "Querformat", port: "Hochformat", count: "Geräte", online: "Online", offline: "Offline",
    addPhoto: "Foto(s) hinzufügen", close: "Schließen", del: "Löschen", save: "Speichern", cancel: "Abbrechen", hint: "Strg+Enter = Speichern, Esc = Abbrechen",
    delPhoto: "Dieses Foto löschen?", delNote: "Bemerkung löschen?", noPhotos: "Noch keine Fotos.", noteOf: "Bemerkung", photosOf: "Fotos",
    uploadFail: "Foto-Upload fehlgeschlagen", saveFail: "Speichern fehlgeschlagen", printFail: "Drucken fehlgeschlagen", stand: "Stand", adminOnly: "Admin-Rechte nötig" },
};
const COLS = ["#", "status", "name", "model", "area", "maker", "fw", "battery", "seen", "photos", "note"];

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
    let ori = "portrait";
    try { if (localStorage.getItem("diOri") === "landscape") ori = "landscape"; } catch (e) { /* ignore */ }
    this._ori = ori;
    if (!this._root) {
      this._root = this.attachShadow({ mode: "open" });
    }
    this._render();
    if (this._hass) this._load();
  }

  set hass(hass) {
    const first = !this._hass;
    this._hass = hass;
    if (first) {
      this._load();
      this._timer = setInterval(() => (this.isConnected ? this._load() : clearInterval(this._timer)), 30000);
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
    const cls = this._config.class;
    const s = this._state;
    s.devices = (r.devices || []).filter((d) => cls === "all" || d.classes.includes(cls));
    s.notes = r.notes || {};
    s.photos = r.photos || {};
    s.loaded = true;
    this._render();
  }

  _val(d, col) {
    const s = this._state;
    switch (col) {
      case "status": return d.online ? 1 : 0;
      case "name": return (d.name || "").toLowerCase();
      case "model": return (d.model || "").toLowerCase();
      case "area": return (d.area || "zzz").toLowerCase();
      case "maker": return (d.manufacturer || "").toLowerCase();
      case "fw": return d.sw_version || "";
      case "battery": return d.battery === null ? -1 : d.battery;
      case "seen": return d.last_seen || "";
      case "photos": return (s.photos[d.id] || []).length;
      case "note": return ((s.notes[d.id] || {}).t || "").toLowerCase();
      default: return 0;
    }
  }

  _sorted() {
    const s = this._state;
    const rows = s.devices.slice();
    const col = s.sortCol || "area";
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
    const t = this._t, s = this._state, cfg = this._config;
    const hide = new Set(cfg.hide || []);
    const root = this._root;
    root.innerHTML = "";
    const st = document.createElement("style");
    st.textContent = `ha-card{padding:8px 12px 12px;overflow-x:auto}table{width:100%;border-collapse:collapse;font-size:13px}
      th{text-align:left;padding:6px 8px;border-bottom:2px solid var(--divider-color,#888);cursor:pointer;user-select:none;white-space:nowrap}
      th:hover{color:var(--primary-color)}td{padding:5px 8px;border-bottom:1px solid var(--divider-color,#444);white-space:nowrap}
      tr:hover td{background:rgba(127,127,127,.08)}.ic{cursor:pointer;margin-right:6px;font-size:16px}
      button,select{cursor:pointer;padding:5px 12px;border-radius:8px;border:1px solid var(--divider-color,#888);background:transparent;color:var(--primary-text-color);font-size:13px}
      .bar{display:flex;gap:8px;align-items:center;margin:4px 0 8px}.dim{opacity:.65;font-size:12px}`;
    root.appendChild(st);
    const card = document.createElement("ha-card");
    if (cfg.title) card.header = cfg.title;
    root.appendChild(card);

    const bar = el("div"); bar.className = "bar";
    const pb = el("button", null, "🖨️ " + t.print); pb.onclick = () => this._print();
    const sel = document.createElement("select");
    [["portrait", t.port], ["landscape", t.land]].forEach(([v, l]) => {
      const o = document.createElement("option"); o.value = v; o.textContent = l; sel.appendChild(o);
    });
    sel.value = this._ori;
    sel.onchange = () => { this._ori = sel.value; try { localStorage.setItem("diOri", sel.value); } catch (e) { /* ignore */ } };
    const cnt = el("span", null, `${s.devices.length} ${t.count}`); cnt.className = "dim";
    bar.append(pb, sel, cnt);
    card.appendChild(bar);

    const tbl = document.createElement("table");
    const hr = document.createElement("tr");
    COLS.filter((c) => !hide.has(c)).forEach((c) => {
      const th = document.createElement("th");
      th.textContent = (c === "#" ? "#" : t[c]) + (s.sortCol === c ? (s.sortDir > 0 ? " ▲" : " ▼") : "");
      if (c !== "#") th.onclick = () => { if (s.sortCol === c) s.sortDir = -s.sortDir; else { s.sortCol = c; s.sortDir = 1; } this._render(); };
      hr.appendChild(th);
    });
    const thead = document.createElement("thead"); thead.appendChild(hr); tbl.appendChild(thead);
    const tb = document.createElement("tbody");
    this._sorted().forEach((d, i) => tb.appendChild(this._row(d, i + 1, hide)));
    tbl.appendChild(tb);
    card.appendChild(tbl);
  }

  _row(d, n, hide) {
    const t = this._t, s = this._state;
    const tr = document.createElement("tr");
    const add = (col, node) => { if (hide.has(col)) return; const td = document.createElement("td"); if (typeof node === "string") td.textContent = node; else if (node) td.appendChild(node); tr.appendChild(td); return td; };
    add("#", String(n));
    const led = el("span", null, d.online ? "🟢" : "🔴"); led.title = d.online ? t.online : t.offline;
    add("status", led);
    const nm = el("span", "cursor:pointer", d.name || "");
    nm.onclick = () => { if (d.entity) this.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId: d.entity }, bubbles: true, composed: true })); };
    add("name", nm);
    add("model", d.model || "–");
    add("area", d.area || "–");
    add("maker", d.manufacturer || "–");
    add("fw", (d.sw_version || "–").split(" ")[0]);
    const bt = d.battery === null || d.battery === undefined ? "–" : d.battery + " %";
    const btn = el("span", d.battery !== null && d.battery !== undefined ? `font-weight:600;color:${d.battery <= 20 ? "var(--error-color)" : d.battery <= 40 ? "var(--warning-color)" : "var(--success-color)"}` : "", bt);
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
    const label = this._config.class === "all" ? t.all : (t[this._config.class] || this._config.class);
    const title = this._config.title || label;
    const small = this._ori === "portrait" || cols.length > 11;
    let html = `<!doctype html><html><head><meta charset="utf-8"><title>${E(title)}</title><style>@page{size:A4 ${this._ori};margin:8mm}
      body{font-family:Arial,sans-serif;font-size:${small ? 7.5 : 9}pt;color:#000;margin:0}h1{font-size:13pt;margin:0 0 1.5mm}p{margin:0 0 3mm;color:#444}
      table{border-collapse:collapse;width:100%}th,td{border:.5pt solid #999;padding:1mm 1.4mm;text-align:left;vertical-align:top}th{background:#e8e8e8}
      thead{display:table-header-group}tr{page-break-inside:avoid}img{width:${small ? 40 : 56}px;height:${small ? 40 : 56}px;object-fit:cover;margin:1px}</style></head><body>
      <h1>${E(title)}</h1><p>${E(t.stand)}: ${E(new Date().toLocaleString(this._hass.language || "en"))} | ${s.devices.length} ${E(t.count)}</p>
      <table><thead><tr>${cols.map((c) => `<th>${E(c === "#" ? "#" : t[c])}</th>`).join("")}</tr></thead><tbody>`;
    this._sorted().forEach((d, i) => {
      const cells = {
        "#": i + 1, status: d.online ? "🟢 " + t.online : "🔴 " + t.offline, name: d.name, model: d.model || "–", area: d.area || "–",
        maker: d.manufacturer || "–", fw: (d.sw_version || "–").split(" ")[0], battery: d.battery == null ? "–" : d.battery + " %",
        seen: this._ago(d.last_seen), note: (s.notes[d.id] || {}).t || "",
      };
      html += "<tr>" + cols.map((c) => c === "photos"
        ? `<td>${(s.photos[d.id] || []).slice(0, 4).map((p) => `<img src="${location.origin}/api/device_inventory/photo/${p.id}">`).join("")}</td>`
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
    setTimeout(go, 4000);
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
