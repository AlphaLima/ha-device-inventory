"""Device Inventory: classified device lists with photos and notes."""

from __future__ import annotations

from datetime import timedelta
import asyncio
import ipaddress
import logging
from pathlib import Path
import secrets
import socket
import time
from typing import Any
from urllib.parse import urljoin, urlparse

from aiohttp import ClientTimeout, web
import voluptuous as vol

from homeassistant.components import frontend, panel_custom, websocket_api
from homeassistant.components.http import HomeAssistantView
from homeassistant.components.http.auth import async_sign_path
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers import device_registry as dr
from homeassistant.helpers import entity_registry as er
from homeassistant.helpers.aiohttp_client import async_get_clientsession
from homeassistant.helpers.storage import Store
from homeassistant.loader import async_get_integration
from homeassistant.helpers.update_coordinator import DataUpdateCoordinator
from homeassistant.util import dt as dt_util

from .const import (
    CARD_URL,
    DOMAIN,
    PANEL_PATH,
    PANEL_URL,
    MAX_MANUAL_BYTES,
    MAX_UPLOAD_BYTES,
    SCAN_INTERVAL_SECONDS,
    STORAGE_VERSION,
)
from .inventory import build_inventory

_LOGGER = logging.getLogger(__name__)
PLATFORMS = ["sensor"]
FRONTEND_DIR = Path(__file__).parent / "frontend"
FRONTEND_FILES = ("device-inventory-card.js", "device-inventory-panel.js")


class InventoryManager:
    """Holds the coordinator and the persistent notes/photos."""

    def __init__(self, hass: HomeAssistant) -> None:
        self._signed: dict[tuple[str, str | None], tuple[float, str]] = {}
        self.hass = hass
        self.store: Store = Store(hass, STORAGE_VERSION, DOMAIN)
        self.data: dict[str, Any] = {"notes": {}, "photos": {}, "manuals": {}}
        self.last_refresh = 0.0
        self._lock = asyncio.Lock()
        self.photo_dir = Path(hass.config.path(DOMAIN, "photos"))
        self.manual_dir = Path(hass.config.path(DOMAIN, "manuals"))
        self.coordinator = DataUpdateCoordinator(
            hass,
            _LOGGER,
            name=DOMAIN,
            update_method=self._async_update,
            update_interval=timedelta(seconds=SCAN_INTERVAL_SECONDS),
        )

    async def _async_update(self) -> list[dict[str, Any]]:
        start = time.monotonic()
        self.last_refresh = start
        result = build_inventory(self.hass, set(self.data["notes"]) | set(self.data["photos"]))
        took = time.monotonic() - start
        if took > 0.5:
            _LOGGER.warning("Building the inventory took %.1f s (%d devices)", took, len(result))
        return result

    async def async_refresh_if_old(self, max_age: float = 15.0) -> None:
        """Rebuild the inventory unless it was built a moment ago."""
        async with self._lock:
            if time.monotonic() - self.last_refresh > max_age:
                await self.coordinator.async_refresh()

    async def async_load(self) -> None:
        stored = await self.store.async_load()
        if stored:
            self.data["notes"] = stored.get("notes", {})
            self.data["photos"] = stored.get("photos", {})
            self.data["manuals"] = stored.get("manuals", {})
        await self.hass.async_add_executor_job(
            lambda: (self.photo_dir.mkdir(parents=True, exist_ok=True), self.manual_dir.mkdir(parents=True, exist_ok=True))
        )

    @callback
    def save(self) -> None:
        self.store.async_delay_save(lambda: self.data, 1)

    def payload(self, refresh_token_id: str | None = None) -> dict[str, Any]:
        """Inventory for the card; photos and manuals carry signed, expiring URLs (the views need authentication)."""
        now = time.monotonic()
        photos: dict[str, list[dict[str, Any]]] = {}
        for device_id, items in self.data["photos"].items():
            photos[device_id] = [{**item, "url": self._signed_url(f"/api/{DOMAIN}/photo/{item['id']}", refresh_token_id, now)} for item in items]
        manuals: dict[str, dict[str, Any]] = {}
        for device_id, entry in self.data["manuals"].items():
            manuals[device_id] = {
                "link": entry.get("link"),
                "name": entry.get("name"),
                "file": self._signed_url(f"/api/{DOMAIN}/manual/{entry['file']}", refresh_token_id, now) if entry.get("file") else None,
            }
        return {
            "devices": self.coordinator.data or [],
            "notes": self.data["notes"],
            "photos": photos,
            "manuals": manuals,
        }

    def _signed_url(self, path: str, refresh_token_id: str | None, now: float) -> str:
        """Signed path valid for one hour; re-signed every ten minutes so the browser can cache the file in between."""
        key = (path, refresh_token_id)
        cached = self._signed.get(key)
        if cached is None or now - cached[0] > 600:
            url = async_sign_path(self.hass, path, timedelta(hours=1), refresh_token_id=refresh_token_id)
            cached = (now, url)
            self._signed[key] = cached
            if len(self._signed) > 5000:
                self._signed.clear()
        return cached[1]


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    manager = InventoryManager(hass)
    await manager.async_load()
    await manager.coordinator.async_config_entry_first_refresh()
    hass.data[DOMAIN] = manager

    hass.http.register_view(FrontendFileView)
    # the URL changes with the version and with every change of the files, so browsers never keep an old copy
    stamp = await hass.async_add_executor_job(lambda: int(sum((FRONTEND_DIR / f).stat().st_mtime for f in FRONTEND_FILES)))
    version = f"{(await async_get_integration(hass, DOMAIN)).version}.{stamp}"
    frontend.add_extra_js_url(hass, f"{CARD_URL}?v={version}")
    try:
        await panel_custom.async_register_panel(
            hass,
            webcomponent_name="device-inventory-panel",
            frontend_url_path=PANEL_PATH,
            sidebar_title="Device Inventory",
            sidebar_icon="deviceinventory:logo",
            module_url=f"{PANEL_URL}?v={version}",
            embed_iframe=False,
            require_admin=False,
        )
    except ValueError:
        _LOGGER.debug("Panel %s already registered", PANEL_PATH)

    hass.http.register_view(PhotoUploadView)
    hass.http.register_view(PhotoServeView)
    hass.http.register_view(ManualUploadView)
    hass.http.register_view(ManualServeView)
    websocket_api.async_register_command(hass, ws_list)
    websocket_api.async_register_command(hass, ws_set_note)
    websocket_api.async_register_command(hass, ws_delete_photo)
    websocket_api.async_register_command(hass, ws_set_manual)
    websocket_api.async_register_command(hass, ws_fetch_manual)
    websocket_api.async_register_command(hass, ws_delete_manual)
    websocket_api.async_register_command(hass, ws_import_legacy)

    await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    ok = await hass.config_entries.async_unload_platforms(entry, PLATFORMS)
    if ok:
        frontend.async_remove_panel(hass, PANEL_PATH)
        manager: InventoryManager = hass.data.pop(DOMAIN)
        await manager.store.async_save(manager.data)
    return ok


# ---------------------------------------------------------------- websocket


@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/list"})
@websocket_api.async_response
async def ws_list(hass: HomeAssistant, connection, msg: dict[str, Any]) -> None:
    """Return devices (freshly built), notes and photo ids."""
    manager: InventoryManager = hass.data[DOMAIN]
    await manager.async_refresh_if_old()
    connection.send_result(msg["id"], manager.payload(connection.refresh_token_id))


@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{DOMAIN}/set_note",
        vol.Required("device_id"): str,
        vol.Required("text"): str,
    }
)
@websocket_api.require_admin
@callback
def ws_set_note(hass: HomeAssistant, connection, msg: dict[str, Any]) -> None:
    manager: InventoryManager = hass.data[DOMAIN]
    text = msg["text"].strip()
    if text:
        manager.data["notes"][msg["device_id"]] = {
            "t": text,
            "ts": dt_util.utcnow().isoformat(),
        }
    else:
        manager.data["notes"].pop(msg["device_id"], None)
    manager.save()
    connection.send_result(msg["id"], manager.payload(connection.refresh_token_id))


@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{DOMAIN}/delete_photo",
        vol.Required("device_id"): str,
        vol.Required("photo_id"): str,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_delete_photo(hass: HomeAssistant, connection, msg: dict[str, Any]) -> None:
    manager: InventoryManager = hass.data[DOMAIN]
    photos = manager.data["photos"].get(msg["device_id"], [])
    keep = [p for p in photos if p["id"] != msg["photo_id"]]
    if len(keep) != len(photos):
        path = manager.photo_dir / f"{msg['photo_id']}.jpg"
        await hass.async_add_executor_job(lambda: path.unlink(missing_ok=True))
        if keep:
            manager.data["photos"][msg["device_id"]] = keep
        else:
            manager.data["photos"].pop(msg["device_id"], None)
        manager.save()
    connection.send_result(msg["id"], manager.payload(connection.refresh_token_id))


def _http_url_ok(url: str) -> bool:
    parts = urlparse(url)
    return parts.scheme in ("http", "https") and bool(parts.hostname) and len(url) <= 2000


async def _is_public_host(hass: HomeAssistant, host: str) -> bool:
    """Only public addresses may be fetched (no localhost, LAN, link-local ...)."""
    try:
        infos = await hass.loop.getaddrinfo(host, None, type=socket.SOCK_STREAM)
    except OSError:
        return False
    for info in infos:
        addr = ipaddress.ip_address(info[4][0])
        if addr.is_private or addr.is_loopback or addr.is_link_local or addr.is_multicast or addr.is_reserved or addr.is_unspecified:
            return False
    return bool(infos)


async def _download_pdf(hass: HomeAssistant, url: str) -> bytes:
    """Download a PDF from a public address (redirects are followed by hand and checked at every step)."""
    session = async_get_clientsession(hass)
    for _ in range(5):
        if not _http_url_ok(url) or not await _is_public_host(hass, urlparse(url).hostname or ""):
            raise ValueError("Address is not allowed (only public http/https addresses)")
        async with session.get(url, allow_redirects=False, timeout=ClientTimeout(total=60), headers={"User-Agent": "HomeAssistant-DeviceInventory"}) as resp:
            if resp.status in (301, 302, 303, 307, 308) and resp.headers.get("Location"):
                url = urljoin(url, resp.headers["Location"])
                continue
            if resp.status != 200:
                raise ValueError(f"HTTP {resp.status}")
            data = bytearray()
            async for chunk in resp.content.iter_chunked(65536):
                data.extend(chunk)
                if len(data) > MAX_MANUAL_BYTES:
                    raise ValueError("File too large")
            if not data.startswith(b"%PDF"):
                raise ValueError("Not a PDF file")
            return bytes(data)
    raise ValueError("Too many redirects")


@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{DOMAIN}/set_manual",
        vol.Required("device_id"): str,
        vol.Required("link"): str,
    }
)
@websocket_api.require_admin
@callback
def ws_set_manual(hass: HomeAssistant, connection, msg: dict[str, Any]) -> None:
    """Own manual link of a device (empty = back to the automatic search link)."""
    manager: InventoryManager = hass.data[DOMAIN]
    link = msg["link"].strip()
    if link and not _http_url_ok(link):
        connection.send_error(msg["id"], "invalid_url", "Only http(s) addresses are allowed")
        return
    entry = manager.data["manuals"].setdefault(msg["device_id"], {})
    if link:
        entry["link"] = link
    else:
        entry.pop("link", None)
    if not entry:
        manager.data["manuals"].pop(msg["device_id"], None)
    manager.save()
    connection.send_result(msg["id"], manager.payload(connection.refresh_token_id))


@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{DOMAIN}/fetch_manual",
        vol.Required("device_id"): str,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_fetch_manual(hass: HomeAssistant, connection, msg: dict[str, Any]) -> None:
    """Copy the PDF behind the manual link of a device into Home Assistant (admin only, public addresses only)."""
    manager: InventoryManager = hass.data[DOMAIN]
    entry = manager.data["manuals"].get(msg["device_id"], {})
    link = entry.get("link")
    if not link:
        connection.send_error(msg["id"], "no_link", "Set a manual link first")
        return
    try:
        data = await _download_pdf(hass, link)
    except (ValueError, OSError, asyncio.TimeoutError) as err:
        connection.send_error(msg["id"], "download_failed", str(err))
        return
    await _store_manual(hass, manager, msg["device_id"], data, urlparse(link).path.rsplit("/", 1)[-1] or "manual.pdf")
    connection.send_result(msg["id"], manager.payload(connection.refresh_token_id))


@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{DOMAIN}/delete_manual",
        vol.Required("device_id"): str,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_delete_manual(hass: HomeAssistant, connection, msg: dict[str, Any]) -> None:
    """Remove the local copy and the own link of a device."""
    manager: InventoryManager = hass.data[DOMAIN]
    entry = manager.data["manuals"].pop(msg["device_id"], None)
    if entry and entry.get("file"):
        path = manager.manual_dir / f"{entry['file']}.pdf"
        await hass.async_add_executor_job(lambda: path.unlink(missing_ok=True))
    manager.save()
    connection.send_result(msg["id"], manager.payload(connection.refresh_token_id))


async def _store_manual(hass: HomeAssistant, manager: InventoryManager, device_id: str, data: bytes, name: str) -> None:
    manual_id = secrets.token_urlsafe(16)
    path = manager.manual_dir / f"{manual_id}.pdf"
    await hass.async_add_executor_job(path.write_bytes, data)
    entry = manager.data["manuals"].setdefault(device_id, {})
    old = entry.get("file")
    entry["file"] = manual_id
    entry["name"] = "".join(ch for ch in name if ch.isalnum() or ch in "._- ")[:80] or "manual.pdf"
    if old:
        old_path = manager.manual_dir / f"{old}.pdf"
        await hass.async_add_executor_job(lambda: old_path.unlink(missing_ok=True))
    manager.save()


@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{DOMAIN}/import_legacy",
        vol.Optional("notes", default={}): dict,
        vol.Optional("images", default=[]): list,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_import_legacy(hass: HomeAssistant, connection, msg: dict[str, Any]) -> None:
    """Import notes and photos of the old template-based network dashboard (one-off, idempotent)."""
    manager: InventoryManager = hass.data[DOMAIN]
    await manager.async_refresh_if_old(0)
    devices = manager.coordinator.data or []
    ids = {d["id"] for d in devices}
    by_mac = {d["mac"]: d["id"] for d in devices if d.get("mac")}
    dev_reg = dr.async_get(hass)
    ent_reg = er.async_get(hass)

    def resolve(key: str) -> str | None:
        if key in ids:
            return key
        device_id = key
        if "." in key:  # an entity id (older dashboard tabs used the switch/tracker entity)
            entry = ent_reg.async_get(key)
            device_id = entry.device_id if entry else None
            if device_id in ids:
                return device_id
        dev = dev_reg.async_get(device_id) if device_id else None
        if dev is not None:
            mac = next((v for k, v in dev.connections if k in ("mac", "bluetooth")), None)
            if mac and mac.upper() in by_mac:
                return by_mac[mac.upper()]
        return None

    out = {"notes": 0, "photos": 0, "unresolved": 0, "kept": 0}
    for key, item in (msg["notes"] or {}).items():
        text = ((item or {}).get("t") or "").strip()
        target = resolve(key)
        if not text:
            continue
        if target is None:
            out["unresolved"] += 1
        elif manager.data["notes"].get(target, {}).get("t"):
            out["kept"] += 1
        else:
            manager.data["notes"][target] = {"t": text, "ts": (item or {}).get("ts") or dt_util.utcnow().isoformat()}
            out["notes"] += 1

    known = {p.get("legacy") for lst in manager.data["photos"].values() for p in lst if p.get("legacy")}

    def copy_image(src: Path, dst: Path) -> bool:
        if not src.is_file():
            return False
        dst.write_bytes(src.read_bytes())
        return True

    for img in msg["images"] or []:
        name = str(img.get("name") or "")
        image_id = str(img.get("id") or "")
        if not name.startswith("netzfoto_") or not image_id or image_id in known or not image_id.isalnum():
            continue
        target = resolve(name[len("netzfoto_") :].rsplit(".", 1)[0])
        if target is None:
            out["unresolved"] += 1
            continue
        photo_id = secrets.token_urlsafe(16)
        ok = await hass.async_add_executor_job(
            copy_image, Path(hass.config.path("image", image_id, "original")), manager.photo_dir / f"{photo_id}.jpg"
        )
        if ok:
            manager.data["photos"].setdefault(target, []).append(
                {"id": photo_id, "ts": dt_util.utcnow().isoformat(), "legacy": image_id}
            )
            out["photos"] += 1
    manager.save()
    connection.send_result(msg["id"], out)


# --------------------------------------------------------------------- HTTP


def _is_image(data: bytes) -> bool:
    return data[:3] == b"\xff\xd8\xff" or data[:8] == b"\x89PNG\r\n\x1a\n"


class FrontendFileView(HomeAssistantView):
    """Serves the card and panel JavaScript with Cache-Control: no-cache (revalidated with the ETag)."""

    url = f"/{DOMAIN}_static/{{filename}}"
    name = f"{DOMAIN}:static"
    requires_auth = False

    async def get(self, request: web.Request, filename: str) -> web.StreamResponse:
        if filename not in FRONTEND_FILES:
            return web.Response(status=404)
        return web.FileResponse(FRONTEND_DIR / filename, headers={"Cache-Control": "no-cache"})


class PhotoUploadView(HomeAssistantView):
    """POST /api/device_inventory/upload/<device_id> (admin only)."""

    url = f"/api/{DOMAIN}/upload/{{device_id}}"
    name = f"api:{DOMAIN}:upload"
    requires_auth = True

    async def post(self, request: web.Request, device_id: str) -> web.Response:
        user = request.get("hass_user")
        if user is None or not user.is_admin:
            return self.json_message("Admin required", 403)
        hass: HomeAssistant = request.app["hass"]
        manager: InventoryManager = hass.data[DOMAIN]

        reader = await request.multipart()
        field = await reader.next()
        if field is None:
            return self.json_message("No file", 400)
        data = bytearray()
        while True:
            chunk = await field.read_chunk(1024 * 1024)
            if not chunk:
                break
            data.extend(chunk)
            if len(data) > MAX_UPLOAD_BYTES:
                return self.json_message("File too large", 413)
        if not _is_image(bytes(data)):
            return self.json_message("Only JPEG or PNG", 415)

        photo_id = secrets.token_urlsafe(16)
        path = manager.photo_dir / f"{photo_id}.jpg"
        await hass.async_add_executor_job(path.write_bytes, bytes(data))
        manager.data["photos"].setdefault(device_id, []).append(
            {"id": photo_id, "ts": dt_util.utcnow().isoformat()}
        )
        manager.save()
        return self.json({"id": photo_id})


class ManualUploadView(HomeAssistantView):
    """POST /api/device_inventory/manual_upload/<device_id> (admin only, PDF)."""

    url = f"/api/{DOMAIN}/manual_upload/{{device_id}}"
    name = f"api:{DOMAIN}:manual_upload"
    requires_auth = True

    async def post(self, request: web.Request, device_id: str) -> web.Response:
        user = request.get("hass_user")
        if user is None or not user.is_admin:
            return self.json_message("Admin required", 403)
        hass: HomeAssistant = request.app["hass"]
        manager: InventoryManager = hass.data[DOMAIN]
        reader = await request.multipart()
        field = await reader.next()
        if field is None:
            return self.json_message("No file", 400)
        data = bytearray()
        while True:
            chunk = await field.read_chunk(1024 * 1024)
            if not chunk:
                break
            data.extend(chunk)
            if len(data) > MAX_MANUAL_BYTES:
                return self.json_message("File too large", 413)
        if not data.startswith(b"%PDF"):
            return self.json_message("Only PDF files", 415)
        await _store_manual(hass, manager, device_id, bytes(data), field.filename or "manual.pdf")
        return self.json({"ok": True})


class ManualServeView(HomeAssistantView):
    """GET /api/device_inventory/manual/<manual_id> (authenticated; the card uses signed URLs)."""

    url = f"/api/{DOMAIN}/manual/{{manual_id}}"
    name = f"api:{DOMAIN}:manual"
    requires_auth = True

    async def get(self, request: web.Request, manual_id: str) -> web.StreamResponse:
        hass: HomeAssistant = request.app["hass"]
        manager: InventoryManager = hass.data.get(DOMAIN)
        if manager is None or not manual_id.replace("-", "").replace("_", "").isalnum():
            return web.Response(status=404)
        path = manager.manual_dir / f"{manual_id}.pdf"
        if not await hass.async_add_executor_job(path.is_file):
            return web.Response(status=404)
        return web.FileResponse(
            path,
            headers={
                "Content-Type": "application/pdf",
                "Content-Disposition": "inline",
                "X-Content-Type-Options": "nosniff",
                "Cache-Control": "private, max-age=86400",
            },
        )


class PhotoServeView(HomeAssistantView):
    """GET /api/device_inventory/photo/<photo_id> (authenticated).

    The card gets signed, expiring URLs from ``device_inventory/list`` (``async_sign_path``), which work in plain <img> tags and in the print view.
    """

    url = f"/api/{DOMAIN}/photo/{{photo_id}}"
    name = f"api:{DOMAIN}:photo"
    requires_auth = True

    async def get(self, request: web.Request, photo_id: str) -> web.StreamResponse:
        hass: HomeAssistant = request.app["hass"]
        manager: InventoryManager = hass.data.get(DOMAIN)
        if manager is None or not photo_id.replace("-", "").replace("_", "").isalnum():
            return web.Response(status=404)
        path = manager.photo_dir / f"{photo_id}.jpg"
        if not await hass.async_add_executor_job(path.is_file):
            return web.Response(status=404)
        return web.FileResponse(path, headers={"Cache-Control": "private, max-age=86400"})
