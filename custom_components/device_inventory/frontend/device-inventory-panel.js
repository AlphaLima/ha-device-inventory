/* Device Inventory sidebar panel: one tab per device class, each showing the table card. */
import "/device_inventory_static/device-inventory-card.js";

const PREFERRED = ["all", "shelly", "esphome", "zigbee", "homematic", "mqtt", "matter", "wled", "zwave", "tasmota", "hue", "tuya", "bluetooth", "other"];
const MDI = {
  all: "mdi:view-dashboard-outline", zigbee: "mdi:zigbee", homematic: "mdi:home-automation", zwave: "mdi:z-wave",
  tasmota: "mdi:led-strip-variant", hue: "mdi:lightbulb-group-outline", tuya: "mdi:cloud-outline",
  bluetooth: "mdi:bluetooth", other: "mdi:devices",
};
const SVG = {
  shelly: { vb: "-1.5 -1.5 27 27", d: "M12 0C5.373 0 0 5.373 0 12a12 12 0 0 0 .033.88c1.07-.443 2.495-.679 4.322-.679h5.762c-.167.61-.548 1.087-1.142 1.436-.532.308-1.14.463-1.823.463h-.927c-.89 0-1.663.154-2.32.463-.859.403-1.286 1-1.286 1.789 0 .893.59 1.594 1.774 2.1a7.423 7.423 0 0 0 2.927.581c1.318 0 2.416-.29 3.297-.867 1.024-.664 1.535-1.616 1.535-2.857 0-.854-.325-2.08-.976-3.676-.65-1.597-.975-2.837-.975-3.723 0-2.79 2.305-4.233 6.916-4.324.641-.01 1.337-.005 1.916-.004.593 0 1.144.05 1.66.147A12 12 0 0 0 12 0zm4.758 5.691c-1.206 0-1.809.502-1.809 1.506 0 .514.356 1.665 1.067 3.451.71 1.787 1.064 3.186 1.064 4.198 0 2.166-1.202 3.791-3.607 4.875-1.794.797-3.892 1.197-6.297 1.197-1.268 0-2.442-.114-3.543-.316A12 12 0 0 0 12 24c6.627 0 12-5.373 12-12a12 12 0 0 0-.781-4.256a3.404 3.404 0 0 1-.832.77h-4.371l1.425-2.828a299.94 299.94 0 0 0-2.683.005Z" },
  esphome: { vb: "-24 -19 288 288", d: "m 240,224.78 c 0,8.25 -6.75,15 -15,15 H 15 c -8.25,0 -15,-6.75 -15,-15 v -90 c 0,-8.25 4.7812,-19.782 10.6125,-25.613 L 109.387,10.3734 c 5.832,-5.8312 15.376,-5.8312 21.207,0 l 98.793,98.7936 C 235.219,114.998 240,126.53 240,134.78 Z m -80.006,-140.344 h -80.007 c -3.318,0 -6,2.681 -6,6 V 239.78 h 12 V 96.436 h 68.007 v 12 h -50.007 c -3.318,0 -6,2.681 -6,6 v 24 c 0,3.319 2.682,6 6,6 h 50.007 v 12 h -50.007 c -3.318,0 -6,2.681 -6,6 v 24 c 0,3.319 2.682,6 6,6 h 50.007 v 12 h -50.007 c -3.318,0 -6,2.681 -6,6 0,3.319 2.682,6 6,6 h 56.007 c 3.318,0 6,-2.681 6,-6 v -24 c 0,-3.319 -2.682,-6 -6,-6 h -50.007 v -12 h 50.007 c 3.318,0 6,-2.681 6,-6 v -24 c 0,-3.319 -2.682,-6 -6,-6 h -50.007 v -12 h 50.007 c 3.318,0 6,-2.681 6,-6 v -24 c 0,-3.319 -2.682,-6 -6,-6 z" },
  mqtt: { vb: "-38 -38 588 588", d: "M1.5 290.2H0V486c0 14.1 11.6 25.7 25.7 25.7h201.6C225.6 389.4 125.2 290.2 1.5 290.2m0-161.5H0V212c166.3.8 301.5 134.5 303.3 299.8h86.3C388.1 300.3 214.7 128.7 1.5 128.7M512 486.3V309.4C453.5 166 335.6 52.7 189 0H25.7C11.6 0 0 11.6 0 25.7v25c255.9.8 464.1 206.9 465.6 461.3h20.7c14.3-.3 25.7-11.6 25.7-25.7M444.6 71.4c23.7 23.7 47.9 53.7 67.4 80.2V25.5c0-14-11.3-25.4-25.3-25.5H356.5c30.3 20.9 61.6 44.9 88.1 71.4" },
  matter: { vb: "-8 -14 528 528", d: "M152 128.5c21.5 17.5 47.1 29.2 74.4 34.2V17.1L256.1 0l29.6 17.1v145.5c27.3-4.9 52.9-16.7 74.5-34.2l53.8 31.1c-87.6 86.5-228.5 86.5-316.1 0zM217.5 500c31.2-119.1-39.4-241.1-158.2-273.5v62.3c25.9 9.9 48.9 26.2 66.8 47.4L0 408.8V443l29.7 17 126.1-72.7c9.4 26.1 12 54.2 7.6 81.4l54.1 31.4Zm235.3-273.5C334 259 263.6 381 294.8 500l54-31.2c-4.4-27.4-1.7-55.4 7.6-81.4l126 72.6 29.6-17.1v-34.2L385.9 336c17.9-21.2 40.9-37.5 66.8-47.4v-62.2Z" },
  wled: { vb: "-3 -5 38 38", d: "M14 0h4v1h-4zM12 1h8v1h-8zM11 2h10v1h-10zM10 3h12v1h-12zM10 4h12v1h-12zM9 5h3v1h-3zM14 5h4v1h-4zM20 5h3v1h-3zM9 6h2v1h-2zM15 6h2v1h-2zM21 6h2v1h-2zM9 7h2v1h-2zM15 7h2v1h-2zM21 7h2v1h-2zM9 8h2v1h-2zM15 8h2v1h-2zM21 8h2v1h-2zM9 9h2v1h-2zM12 9h2v1h-2zM15 9h2v1h-2zM18 9h2v1h-2zM21 9h2v1h-2zM9 10h14v1h-14zM9 11h6v1h-6zM17 11h6v1h-6zM9 12h14v1h-14zM0 13h1v1h-1zM9 13h14v1h-14zM31 13h1v1h-1zM1 14h3v1h-3zM9 14h14v1h-14zM28 14h3v1h-3zM3 15h2v1h-2zM8 15h16v1h-16zM27 15h2v1h-2zM3 16h2v1h-2zM8 16h16v1h-16zM27 16h2v1h-2zM4 17h2v1h-2zM10 17h2v1h-2zM13 17h2v1h-2zM17 17h2v1h-2zM20 17h2v1h-2zM26 17h2v1h-2zM4 18h2v1h-2zM10 18h2v1h-2zM13 18h2v1h-2zM17 18h2v1h-2zM20 18h2v1h-2zM26 18h2v1h-2zM5 19h2v1h-2zM9 19h2v1h-2zM13 19h2v1h-2zM17 19h2v1h-2zM21 19h2v1h-2zM25 19h2v1h-2zM5 20h5v1h-5zM13 20h2v1h-2zM17 20h2v1h-2zM22 20h5v1h-5zM6 21h3v1h-3zM13 21h2v1h-2zM17 21h2v1h-2zM23 21h3v1h-3zM13 22h2v1h-2zM17 22h2v1h-2zM13 23h2v1h-2zM17 23h2v1h-2zM13 24h2v1h-2zM17 24h2v1h-2zM13 25h2v1h-2zM17 25h2v1h-2zM13 26h2v1h-2zM13 27h2v1h-2z" },
};
const LABEL = {
  en: { all: "All", other: "Other", title: "Device Inventory" },
  de: { all: "Alle", other: "Sonstige", title: "Geräte-Inventar" },
};

class DeviceInventoryPanel extends HTMLElement {
  set hass(hass) {
    this._hass = hass;
    if (!this._built) {
      this._built = true;
      this._build();
      this._loadTabs();
      this._timer = setInterval(() => (this.isConnected ? this._loadTabs() : clearInterval(this._timer)), 60000);
    }
    if (this._menu) this._menu.hass = hass;
    if (this._card) this._card.hass = hass;
  }

  set narrow(narrow) {
    this._narrow = narrow;
    if (this._menu) this._menu.narrow = narrow;
  }

  set panel(_panel) { /* unused */ }
  set route(_route) { /* unused */ }

  get _lbl() { return LABEL[(this._hass.language || "en").slice(0, 2)] || LABEL.en; }

  _build() {
    const root = this.attachShadow({ mode: "open" });
    const st = document.createElement("style");
    st.textContent = `:host{display:block;height:100%;background:var(--primary-background-color);color:var(--primary-text-color)}
      .top{position:sticky;top:0;z-index:5;display:flex;align-items:center;gap:4px;height:56px;padding:0 8px;box-sizing:border-box;
        background:var(--app-header-background-color,var(--secondary-background-color));color:var(--app-header-text-color,var(--primary-text-color));
        border-bottom:1px solid var(--divider-color)}
      .tabs{display:flex;overflow-x:auto;scrollbar-width:none;flex:1}
      .tab{position:relative;display:flex;align-items:center;justify-content:center;min-width:56px;height:56px;padding:0 10px;box-sizing:border-box;
        cursor:pointer;border:none;background:transparent;color:inherit;opacity:.75;border-bottom:2px solid transparent;font:inherit}
      .tab:hover{opacity:1}.tab.on{opacity:1;color:var(--primary-color);border-bottom-color:var(--primary-color)}
      .tab svg{width:24px;height:24px;fill:currentColor}.tab ha-icon{--mdc-icon-size:24px}
      .badge{position:absolute;top:8px;right:2px;min-width:16px;height:16px;border-radius:8px;background:var(--error-color,#db4437);color:#fff;font-size:10px;line-height:16px;text-align:center;padding:0 3px}
      .body{padding:12px}`;
    const top = document.createElement("div"); top.className = "top";
    this._menu = document.createElement("ha-menu-button");
    this._menu.hass = this._hass; this._menu.narrow = this._narrow;
    this._tabs = document.createElement("div"); this._tabs.className = "tabs";
    top.append(this._menu, this._tabs);
    this._body = document.createElement("div"); this._body.className = "body";
    root.append(st, top, this._body);
    let active = "all";
    try { active = localStorage.getItem("diTab") || "all"; } catch (e) { /* ignore */ }
    this._active = active;
    this._card = document.createElement("device-inventory-card");
    this._body.appendChild(this._card);
    this._card.setConfig({ class: this._active });
    this._card.hass = this._hass;
  }

  async _loadTabs() {
    let r;
    try { r = await this._hass.callWS({ type: "device_inventory/list" }); } catch (e) { return; }
    const stats = { all: { n: 0, off: 0 } };
    (r.devices || []).forEach((d) => {
      stats.all.n++; if (!d.online) stats.all.off++;
      d.classes.forEach((c) => { const s = (stats[c] = stats[c] || { n: 0, off: 0 }); s.n++; if (!d.online) s.off++; });
    });
    const keys = [...PREFERRED.filter((k) => stats[k]), ...Object.keys(stats).filter((k) => !PREFERRED.includes(k)).sort()];
    if (!keys.includes(this._active)) this._select("all");
    this._tabs.innerHTML = "";
    keys.forEach((k) => {
      const b = document.createElement("button"); b.className = "tab" + (k === this._active ? " on" : "");
      b.title = `${k === "all" ? this._lbl.all : k === "other" ? this._lbl.other : k} (${stats[k].n})`;
      if (SVG[k]) {
        const ns = "http://www.w3.org/2000/svg", s = document.createElementNS(ns, "svg"), p = document.createElementNS(ns, "path");
        s.setAttribute("viewBox", SVG[k].vb); p.setAttribute("d", SVG[k].d); s.appendChild(p); b.appendChild(s);
      } else {
        const i = document.createElement("ha-icon"); i.setAttribute("icon", MDI[k] || "mdi:chip"); b.appendChild(i);
      }
      if (stats[k].off) { const bd = document.createElement("span"); bd.className = "badge"; bd.textContent = stats[k].off; b.appendChild(bd); }
      b.onclick = () => this._select(k);
      this._tabs.appendChild(b);
    });
  }

  _select(k) {
    this._active = k;
    try { localStorage.setItem("diTab", k); } catch (e) { /* ignore */ }
    this._card.setConfig({ class: k });
    this._tabs.querySelectorAll(".tab").forEach((t) => t.classList.remove("on"));
    this._loadTabs();
  }
}

if (!customElements.get("device-inventory-panel")) {
  customElements.define("device-inventory-panel", DeviceInventoryPanel);
}
