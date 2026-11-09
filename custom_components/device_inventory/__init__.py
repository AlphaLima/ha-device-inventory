"""Device Inventory: classified device lists with photos and notes."""

from __future__ import annotations

from datetime import timedelta
import asyncio
import logging
from pathlib import Path
import secrets
import time
from typing import Any

from aiohttp import web
import voluptuous as vol

from homeassistant.components import frontend, panel_custom, websocket_api
from homeassistant.components.http import HomeAssistantView, StaticPathConfig
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers import device_registry as dr
from homeassistant.helpers import entity_registry as er
from homeassistant.helpers.storage import Store
from homeassistant.loader import async_get_integration
from homeassistant.helpers.update_coordinator import DataUpdateCoordinator
from homeassistant.util import dt as dt_util

from .const import (
    CARD_URL,
    DOMAIN,
    PANEL_PATH,
    PANEL_URL,
    MAX_UPLOAD_BYTES,
    SCAN_INTERVAL_SECONDS,
    STORAGE_VERSION,
)
from .inventory import build_inventory

_LOGGER = logging.getLogger(__name__)
PLATFORMS = ["sensor"]


class InventoryManager:
    """Holds the coordinator and the persistent notes/photos."""

    def __init__(self, hass: HomeAssistant) -> None:
        self.hass = hass
        self.store: Store = Store(hass, STORAGE_VERSION, DOMAIN)
        self.data: dict[str, Any] = {"notes": {}, "photos": {}}
        self.last_refresh = 0.0
        self._lock = asyncio.Lock()
        self.photo_dir = Path(hass.config.path(DOMAIN, "photos"))
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
        result = build_inventory(self.hass)
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
        await self.hass.async_add_executor_job(
            lambda: self.photo_dir.mkdir(parents=True, exist_ok=True)
        )

    @callback
    def save(self) -> None:
        self.store.async_delay_save(lambda: self.data, 1)

    def payload(self) -> dict[str, Any]:
        return {
            "devices": self.coordinator.data or [],
            "notes": self.data["notes"],
            "photos": self.data["photos"],
        }


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    manager = InventoryManager(hass)
    await manager.async_load()
    await manager.coordinator.async_config_entry_first_refresh()
    hass.data[DOMAIN] = manager

    frontend_dir = Path(__file__).parent / "frontend"
    await hass.http.async_register_static_paths(
        [StaticPathConfig(f"/{DOMAIN}_static", str(frontend_dir), False)]
    )
    version = (await async_get_integration(hass, DOMAIN)).version
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
    websocket_api.async_register_command(hass, ws_list)
    websocket_api.async_register_command(hass, ws_set_note)
    websocket_api.async_register_command(hass, ws_delete_photo)
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
    connection.send_result(msg["id"], manager.payload())


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
    connection.send_result(msg["id"], manager.payload())


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
    connection.send_result(msg["id"], manager.payload())


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


class PhotoServeView(HomeAssistantView):
    """GET /api/device_inventory/photo/<photo_id>.

    Unauthenticated on purpose so <img> tags work; the id is a random
    128 bit token and only known to users who can see the inventory.
    """

    url = f"/api/{DOMAIN}/photo/{{photo_id}}"
    name = f"api:{DOMAIN}:photo"
    requires_auth = False

    async def get(self, request: web.Request, photo_id: str) -> web.StreamResponse:
        hass: HomeAssistant = request.app["hass"]
        manager: InventoryManager = hass.data.get(DOMAIN)
        if manager is None or not photo_id.replace("-", "").replace("_", "").isalnum():
            return web.Response(status=404)
        path = manager.photo_dir / f"{photo_id}.jpg"
        if not await hass.async_add_executor_job(path.is_file):
            return web.Response(status=404)
        return web.FileResponse(path, headers={"Cache-Control": "private, max-age=86400"})
