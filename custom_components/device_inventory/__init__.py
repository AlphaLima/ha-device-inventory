"""Device Inventory: classified device lists with photos and notes."""

from __future__ import annotations

from datetime import timedelta
import asyncio
import ipaddress
import logging
import re
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
from homeassistant.exceptions import HomeAssistantError
from homeassistant.helpers import device_registry as dr
from homeassistant.helpers import entity_registry as er
from homeassistant.helpers.aiohttp_client import async_get_clientsession
from homeassistant.helpers.storage import Store
from homeassistant.loader import async_get_integration
from homeassistant.helpers.update_coordinator import DataUpdateCoordinator
from homeassistant.util import dt as dt_util

from .const import (
    CARD_URL,
    CONF_AI_COPY,
    CONF_AI_IMAGES,
    CONF_AI_TASK,
    DOMAIN,
    PANEL_PATH,
    PANEL_URL,
    MAX_DOCS_PER_DEVICE,
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
        self.data: dict[str, Any] = {"notes": {}, "photos": {}, "manuals": {}, "ai_cache": {}, "manual_files": {}}
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
            self.data["ai_cache"] = stored.get("ai_cache", {})
            self.data["manual_files"] = stored.get("manual_files", {})
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
                "ai": bool(entry.get("ai")),
                "pdf": entry.get("pdf"),
                "name": entry.get("name"),
                "archived": entry.get("archived"),
                "docs": [
                    {"id": doc["id"], "name": doc.get("name"), "ts": doc.get("ts"), "url": self._signed_url(f"/api/{DOMAIN}/manual/{doc['id']}", refresh_token_id, now)}
                    for doc in entry.get("docs", [])
                ],
                "file": self._signed_url(f"/api/{DOMAIN}/manual/{entry['file']}", refresh_token_id, now) if entry.get("file") else None,
            }
        return {
            "devices": self.coordinator.data or [],
            "notes": self.data["notes"],
            "photos": photos,
            "manuals": manuals,
            "ai": _ai_entity(self.hass) is not None,
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
    websocket_api.async_register_command(hass, ws_delete_manual_doc)
    websocket_api.async_register_command(hass, ws_find_manuals)
    websocket_api.async_register_command(hass, ws_copy_manuals)
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
    entry.pop("ai", None)
    entry.pop("pdf", None)
    if link:
        entry["link"] = link
    else:
        entry.pop("link", None)
    if not entry:
        manager.data["manuals"].pop(msg["device_id"], None)
    manager.save()
    connection.send_result(msg["id"], manager.payload(connection.refresh_token_id))


def _options(hass: HomeAssistant) -> dict[str, Any]:
    entries = hass.config_entries.async_entries(DOMAIN)
    return dict(entries[0].options) if entries else {}


def _file_in_use(manager: InventoryManager, file_id: str, except_device: str) -> bool:
    return any(entry.get("file") == file_id for device_id, entry in manager.data["manuals"].items() if device_id != except_device)


async def _remove_manual_file(hass: HomeAssistant, manager: InventoryManager, device_id: str, file_id: str | None) -> None:
    """Delete a stored PDF unless another device still uses the same file."""
    if not file_id or _file_in_use(manager, file_id, device_id):
        return
    path = manager.manual_dir / f"{file_id}.pdf"
    await hass.async_add_executor_job(lambda: path.unlink(missing_ok=True))
    for url, stored_id in list(manager.data["manual_files"].items()):
        if stored_id == file_id:
            manager.data["manual_files"].pop(url, None)


async def _store_manual(hass: HomeAssistant, manager: InventoryManager, device_id: str, data: bytes, name: str, url: str | None = None) -> None:
    """Store a PDF for a device; a PDF that is already stored for the same address is shared instead of copied again."""
    files = manager.data["manual_files"]
    manual_id = files.get(url) if url else None
    if manual_id is None:
        manual_id = secrets.token_urlsafe(16)
        path = manager.manual_dir / f"{manual_id}.pdf"
        await hass.async_add_executor_job(path.write_bytes, data)
        if url:
            files[url] = manual_id
    entry = manager.data["manuals"].setdefault(device_id, {})
    old = entry.get("file")
    entry["file"] = manual_id
    entry["archived"] = dt_util.utcnow().isoformat()  # state of the manual on this day, kept even if the address disappears
    entry["name"] = "".join(ch for ch in name if ch.isalnum() or ch in "._- ")[:80] or "manual.pdf"
    if old and old != manual_id:
        await _remove_manual_file(hass, manager, device_id, old)
    manager.save()


async def _try_copy(hass: HomeAssistant, manager: InventoryManager, device_id: str, link: str) -> bool:
    """Copy the PDF behind a link into Home Assistant; False when it cannot be fetched."""
    stored = manager.data["manual_files"].get(link)
    try:
        data = b"" if stored else await _download_pdf(hass, link)
    except (ValueError, OSError, asyncio.TimeoutError):
        return False
    await _store_manual(hass, manager, device_id, data, urlparse(link).path.rsplit("/", 1)[-1] or "manual.pdf", link)
    return True


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
    link = manager.data["manuals"].get(msg["device_id"], {}).get("link")
    if not link:
        connection.send_error(msg["id"], "no_link", "Set a manual link first")
        return
    try:
        data = await _download_pdf(hass, link)
    except (ValueError, OSError, asyncio.TimeoutError) as err:
        connection.send_error(msg["id"], "download_failed", str(err))
        return
    await _store_manual(hass, manager, msg["device_id"], data, urlparse(link).path.rsplit("/", 1)[-1] or "manual.pdf", link)
    connection.send_result(msg["id"], manager.payload(connection.refresh_token_id))


@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{DOMAIN}/copy_manuals",
        vol.Required("device_ids"): vol.All([str], vol.Length(max=10)),
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_copy_manuals(hass: HomeAssistant, connection, msg: dict[str, Any]) -> None:
    """Copy the PDFs behind the manual links of several devices into Home Assistant."""
    manager: InventoryManager = hass.data[DOMAIN]
    copied = failed = 0
    for device_id in msg["device_ids"]:
        entry = manager.data["manuals"].get(device_id, {})
        if not entry.get("link") or entry.get("file"):
            continue
        if await _try_copy(hass, manager, device_id, entry["link"]):
            copied += 1
        else:
            failed += 1
    result = manager.payload(connection.refresh_token_id)
    result["stats"] = {"copied": copied, "failed": failed}
    connection.send_result(msg["id"], result)


@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{DOMAIN}/delete_manual",
        vol.Required("device_id"): str,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_delete_manual(hass: HomeAssistant, connection, msg: dict[str, Any]) -> None:
    """Remove the found / linked manual (link and archived copy) of a device; own uploaded documents stay."""
    manager: InventoryManager = hass.data[DOMAIN]
    entry = manager.data["manuals"].get(msg["device_id"])
    if entry:
        file_id = entry.get("file")
        for key in ("link", "ai", "pdf", "file", "name", "archived"):
            entry.pop(key, None)
        if not entry.get("docs"):
            manager.data["manuals"].pop(msg["device_id"], None)
        await _remove_manual_file(hass, manager, msg["device_id"], file_id)
    manager.save()
    connection.send_result(msg["id"], manager.payload(connection.refresh_token_id))


@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{DOMAIN}/delete_manual_doc",
        vol.Required("device_id"): str,
        vol.Required("doc_id"): str,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_delete_manual_doc(hass: HomeAssistant, connection, msg: dict[str, Any]) -> None:
    """Delete one own uploaded document of a device."""
    manager: InventoryManager = hass.data[DOMAIN]
    entry = manager.data["manuals"].get(msg["device_id"], {})
    docs = entry.get("docs", [])
    keep = [doc for doc in docs if doc["id"] != msg["doc_id"]]
    if len(keep) != len(docs):
        path = manager.manual_dir / f"{msg['doc_id']}.pdf"
        await hass.async_add_executor_job(lambda: path.unlink(missing_ok=True))
        if keep:
            entry["docs"] = keep
        else:
            entry.pop("docs", None)
            if not entry:
                manager.data["manuals"].pop(msg["device_id"], None)
        manager.save()
    connection.send_result(msg["id"], manager.payload(connection.refresh_token_id))


def _ai_entity(hass: HomeAssistant) -> str | None:
    """The AI task entity chosen in the options (None = no AI set up, nothing is ever sent)."""
    entity = _options(hass).get(CONF_AI_TASK)
    if entity and hass.states.get(entity) is not None and hass.services.has_service("ai_task", "generate_data"):
        return entity
    return None


QUOTA_HINTS = ("quota", "429", "resource_exhausted", "resource exhausted", "rate limit", "rate_limit", "too many requests", "billing", "insufficient")


def _is_quota_error(text: str) -> bool:
    lower = text.lower()
    return any(hint in lower for hint in QUOTA_HINTS)


async def _verify_manual_url(hass: HomeAssistant, url: str) -> str | None:
    """"pdf" / "page" when the address really answers with a PDF or a web page, otherwise None."""
    session = async_get_clientsession(hass)
    for _ in range(5):
        if not _http_url_ok(url) or not await _is_public_host(hass, urlparse(url).hostname or ""):
            return None
        try:
            async with session.get(url, allow_redirects=False, timeout=ClientTimeout(total=25), headers={"User-Agent": "HomeAssistant-DeviceInventory"}) as resp:
                if resp.status in (301, 302, 303, 307, 308) and resp.headers.get("Location"):
                    url = urljoin(url, resp.headers["Location"])
                    continue
                if resp.status != 200:
                    return None
                head = await resp.content.read(1024)
                if head.startswith(b"%PDF"):
                    return "pdf"
                return "page" if "html" in resp.headers.get("Content-Type", "").lower() else None
        except (OSError, asyncio.TimeoutError):
            return None
    return None


AI_MIN_GAP = 4.5  # seconds between two AI requests
AI_LAST_KEY = "device_inventory_ai_last"
SHOP_HOSTS = ("amazon", "ebay", "aliexpress", "alibaba", "idealo", "pinterest", "wikipedia", "wikimedia", "google", "bing", "shutterstock", "getty", "alamy", "etsy", "facebook", "instagram", "geizhals", "otto.", "conrad", "reichelt", "mediamarkt", "saturn.", "bol.com", "walmart")


def _manufacturer_image_ok(image_url: str, domain: str, maker: str, manual_url: str | None) -> bool:
    """Only original images of the manufacturer: the picture must come from the manufacturer's own domain (no shops, marketplaces or search engines)."""
    host = (urlparse(image_url).hostname or "").lower()
    dom = domain.lower().replace("https://", "").replace("http://", "").split("/")[0].removeprefix("www.").strip()
    if not host or not dom or "." not in dom or any(shop in host for shop in SHOP_HOSTS):
        return False
    if not (host == dom or host.endswith("." + dom)):
        return False
    tokens = [tok for tok in re.split(r"[^a-z0-9]+", maker.lower()) if len(tok) >= 2]
    manual_host = (urlparse(manual_url).hostname or "").lower() if manual_url else ""
    return any(tok in dom for tok in tokens) or (bool(manual_host) and (manual_host == dom or manual_host.endswith("." + dom)))


async def _download_image(hass: HomeAssistant, url: str) -> bytes | None:
    """Download a JPEG or PNG from a public address (redirects checked by hand, size limited); None when it is no such picture."""
    session = async_get_clientsession(hass)
    for _ in range(5):
        if not _http_url_ok(url) or not await _is_public_host(hass, urlparse(url).hostname or ""):
            return None
        try:
            async with session.get(url, allow_redirects=False, timeout=ClientTimeout(total=40), headers={"User-Agent": "HomeAssistant-DeviceInventory"}) as resp:
                if resp.status in (301, 302, 303, 307, 308) and resp.headers.get("Location"):
                    url = urljoin(url, resp.headers["Location"])
                    continue
                if resp.status != 200:
                    return None
                data = bytearray()
                async for chunk in resp.content.iter_chunked(65536):
                    data.extend(chunk)
                    if len(data) > MAX_UPLOAD_BYTES:
                        return None
                return bytes(data) if _is_image(bytes(data)) else None
        except (OSError, asyncio.TimeoutError):
            return None
    return None


async def _fetch_html(hass: HomeAssistant, url: str) -> tuple[str, str] | None:
    """Fetch a public web page (redirects checked by hand, size limited): (final address, text)."""
    session = async_get_clientsession(hass)
    for _ in range(5):
        if not _http_url_ok(url) or not await _is_public_host(hass, urlparse(url).hostname or ""):
            return None
        try:
            async with session.get(url, allow_redirects=False, timeout=ClientTimeout(total=25), headers={"User-Agent": "HomeAssistant-DeviceInventory"}) as resp:
                if resp.status in (301, 302, 303, 307, 308) and resp.headers.get("Location"):
                    url = urljoin(url, resp.headers["Location"])
                    continue
                if resp.status != 200 or "html" not in resp.headers.get("Content-Type", "").lower():
                    return None
                return url, (await resp.content.read(1024 * 1024)).decode("utf-8", errors="ignore")
        except (OSError, asyncio.TimeoutError):
            return None
    return None


async def _page_image(hass: HomeAssistant, page_url: str, maker: str) -> str | None:
    """The product photo the manufacturer itself names on its product page (og:image): real, not guessed by the AI."""
    got = await _fetch_html(hass, page_url)
    if not got:
        return None
    url, text = got
    page_host = (urlparse(url).hostname or "").lower()
    base = ".".join(page_host.split(".")[-2:])
    tokens = [tok for tok in re.split(r"[^a-z0-9]+", maker.lower()) if len(tok) >= 3]
    found: list[str] = []
    for tag in re.findall(r"<meta[^>]+>|<link[^>]+>", text, re.IGNORECASE):
        low = tag.lower()
        if not any(key in low for key in ('property="og:image"', "property='og:image'", 'name="twitter:image"', "name='twitter:image'", 'rel="image_src"', "rel='image_src'")):
            continue
        match = re.search(r"(?:content|href)=[\"']([^\"']+)[\"']", tag, re.IGNORECASE)
        if match:
            found.append(urljoin(url, match.group(1).replace("&amp;", "&")))
    for link in found:
        host = (urlparse(link).hostname or "").lower()
        if not host or any(shop in host for shop in SHOP_HOSTS) or "logo" in link.lower():
            continue
        if host.endswith(base) or any(tok in host for tok in tokens):
            return link
    return None


async def _find_pdf_on_page(hass: HomeAssistant, page_url: str, model: str) -> str | None:
    """The AI sometimes returns the product page: look on that page for a PDF link that really is a PDF (no AI needed)."""
    session = async_get_clientsession(hass)
    url = page_url
    html = b""
    for _ in range(5):
        if not _http_url_ok(url) or not await _is_public_host(hass, urlparse(url).hostname or ""):
            return None
        try:
            async with session.get(url, allow_redirects=False, timeout=ClientTimeout(total=25), headers={"User-Agent": "HomeAssistant-DeviceInventory"}) as resp:
                if resp.status in (301, 302, 303, 307, 308) and resp.headers.get("Location"):
                    url = urljoin(url, resp.headers["Location"])
                    continue
                if resp.status != 200:
                    return None
                html = await resp.content.read(1024 * 1024)
                break
        except (OSError, asyncio.TimeoutError):
            return None
    text = html.decode("utf-8", errors="ignore")
    seen: list[str] = []
    for match in re.finditer(r"href=[\"']([^\"'#]+?\.pdf[^\"']*)[\"']", text, re.IGNORECASE):
        link = urljoin(url, match.group(1))
        if link not in seen:
            seen.append(link)
    key = _norm(model)
    words = ("manual", "anleitung", "handbuch", "guide", "instruction", "bedien", "user", "_um", "bda")
    bad = ("_ce_", "/ce/", "datenblatt", "datasheet", "/pdb/", "produktdatenblatt", "quick", "declaration", "konformit")

    def name_of(link: str) -> str:
        return urlparse(link).path.rsplit("/", 1)[-1]

    def score(link: str) -> int:
        low = link.lower()
        return sum(word in low for word in words) * 2 - sum(word in low for word in bad) * 3

    exact = sorted((link for link in seen if key and len(key) >= 3 and key in _norm(name_of(link))), key=lambda link: -score(link))
    for link in exact[:6]:
        if await _verify_manual_url(hass, link) == "pdf":
            return link
    # many manufacturers name every file after the model: a sibling link (other model, same pattern) shows the address scheme
    guesses: list[str] = []
    for link in sorted(seen, key=lambda link: -score(link)):
        name = name_of(link)
        match = re.match(r"([A-Za-z0-9\-]{3,}?)(_[^/]*\.pdf)$", name, re.IGNORECASE)
        if not match or _norm(match.group(1)) == key or score(link) < 2 or not (model[:3].lower() == match.group(1)[:3].lower()):
            continue
        guess = link[: len(link) - len(name)] + model + match.group(2)
        if guess not in guesses:
            guesses.append(guess)
    for guess in guesses[:8]:
        if await _verify_manual_url(hass, guess) == "pdf":
            return guess
    return None


async def _ai_find(hass: HomeAssistant, entity: str, maker: str, model: str, want_image: bool, avoid: list[str] | None = None) -> tuple[list[str], str | None, str | None, str | None]:
    """Ask the AI task for candidate addresses of the official manual (and a product photo) of one device model; only manufacturer and model are sent: (candidates, photo, manufacturer domain, error text)."""
    instructions = (
        "You are a research assistant for smart-home device documentation. "
        f"Device: manufacturer '{maker}', model / type designation '{model}'. "
        "Use your web search or browsing ability if you have one. Many smart-home brands are sold under a system or parent brand: "
        "eQ-3 / ELV makes Homematic and Homematic IP (type names HmIP-..., HM-..., CCU), AVM makes FRITZ!, Signify makes Philips Hue, "
        "Shelly is Allterco, Sonoff is ITEAD, Aqara is Lumi, Tuya devices are rebranded, and a model name starting with a known prefix identifies the brand. "
        "Work out which company really makes the device and use its official website. "
        "Task: list up to 5 addresses (URLs), best first, where the official user manual / operating instructions / installation guide of exactly this device can be found. "
        "Order: 1. direct links to a PDF file of the manual (usually ending in .pdf) from the manufacturer's own site; "
        "2. the official product page; 3. the manufacturer's official download or documentation overview page (a program reads the PDF links from it). "
        "Do not use shops, forums, video sites, manual-aggregator sites or search result pages. "
        f"Prefer the language '{hass.config.language}' if the manufacturer offers it, otherwise English. "
    )
    if avoid:
        instructions += "These addresses were already tried and did not work, so do not repeat them, give different ones (for example the download area of the product family): " + ", ".join(avoid[:8]) + ". "
    structure: dict[str, Any] = {"urls": {"description": "Up to 5 candidate addresses, one per line, best first, empty if unknown", "required": True, "selector": {"text": {"multiline": True}}}}
    if want_image:
        instructions += (
            "Also give the direct address of one clean product photo of exactly this device (a JPG or PNG file, not a logo or an icon) in image_url, "
            "taken from the manufacturer's own website (original manufacturer image only, never a shop, marketplace, search engine or stock photo). "
            "Also give the official internet domain of the manufacturer (for example shelly.com) in manufacturer_domain. "
        )
        structure["image_url"] = {"description": "Direct address of an original manufacturer product photo (JPG or PNG), empty if unknown", "required": False, "selector": {"text": {}}}
        structure["manufacturer_domain"] = {"description": "Official internet domain of the manufacturer, empty if unknown", "required": False, "selector": {"text": {}}}
    instructions += "Only give addresses you know or found; never invent a path. A real page of the right site is better than a guessed PDF name."
    resp = None
    for attempt in (0, 1):
        wait = AI_MIN_GAP - (time.monotonic() - hass.data.get(AI_LAST_KEY, 0.0))  # stay below the free per-minute limit (15 requests)
        if wait > 0:
            await asyncio.sleep(wait)
        hass.data[AI_LAST_KEY] = time.monotonic()
        try:
            resp = await hass.services.async_call(
                "ai_task",
                "generate_data",
                {"entity_id": entity, "task_name": "device manual", "instructions": instructions, "structure": structure},
                blocking=True,
                return_response=True,
            )
            break
        except (HomeAssistantError, asyncio.TimeoutError, OSError) as err:
            text = str(err) or err.__class__.__name__
            retry = re.search(r"retry in (\d+(?:\.\d+)?)s", text, re.IGNORECASE)
            if attempt == 0 and retry and "perday" not in text.lower().replace(" ", ""):  # per-minute limit: wait as told and try once more
                await asyncio.sleep(min(float(retry.group(1)) + 1, 30))
                continue
            _LOGGER.warning("AI task failed for %s %s: %s", maker, model, err)
            return [], None, None, text
    data = (resp or {}).get("data") or {}
    urls: list[str] = []
    for token in re.split(r"[\s,;]+", str(data.get("urls") or data.get("url") or "")):
        token = token.strip("<>()[]\"'")
        if token and _http_url_ok(token) and token not in urls:
            urls.append(token)
    image = str(data.get("image_url") or "").strip()
    domain = str(data.get("manufacturer_domain") or "").strip()
    return urls[:5], (image if _http_url_ok(image) else None), domain, None


def _norm(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "", text.lower())


async def _page_is_about(hass: HomeAssistant, url: str, model: str) -> bool:
    """A page only counts as a manual link when its title or headline names the model: general download / search pages that merely echo the address or list many products do not."""
    got = await _fetch_html(hass, url)
    key = _norm(model)
    if not got or len(key) < 3:
        return False
    heads = re.findall(r"<title[^>]*>(.*?)</title>|<h1[^>]*>(.*?)</h1>|property=[\"']og:title[\"'][^>]*content=[\"']([^\"']*)", got[1], re.IGNORECASE | re.DOTALL)
    return any(key in _norm(re.sub(r"<[^>]+>", "", part)) for group in heads for part in group if part)


async def _resolve_manual(hass: HomeAssistant, urls: list[str], model: str) -> tuple[str | None, str | None]:
    """Check the candidates one by one: a real PDF wins; a page is searched for a PDF link; otherwise the first page that names the model is kept."""
    fallback: str | None = None
    for url in urls:
        kind = await _verify_manual_url(hass, url)
        if kind == "pdf":
            return url, "pdf"
        if kind == "page":
            pdf = await _find_pdf_on_page(hass, url, model)
            if pdf:
                return pdf, "pdf"
            if not fallback and await _page_is_about(hass, url, model):
                fallback = url
    return (fallback, "page") if fallback else (None, None)


@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{DOMAIN}/find_manuals",
        vol.Required("device_ids"): vol.All([str], vol.Length(max=25)),
        vol.Optional("overwrite", default=False): bool,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_find_manuals(hass: HomeAssistant, connection, msg: dict[str, Any]) -> None:
    """Let the AI find manual links for devices (admin only; only manufacturer and model are sent; every address is checked before it is saved)."""
    manager: InventoryManager = hass.data[DOMAIN]
    entity = _ai_entity(hass)
    if entity is None:
        connection.send_error(msg["id"], "no_ai", "No AI task entity is set up")
        return
    copy_local = bool(_options(hass).get(CONF_AI_COPY, True))  # archive found PDFs unless switched off
    use_images = bool(_options(hass).get(CONF_AI_IMAGES, True))  # also a product photo for devices without any photo
    devices = {dev["id"]: dev for dev in (manager.coordinator.data or [])}
    found = missing = copied = images = 0
    quota = False
    error: str | None = None
    image_data: dict[str, bytes | None] = {}
    for device_id in msg["device_ids"]:
        dev = devices.get(device_id)
        if dev is None:
            continue
        entry = manager.data["manuals"].get(device_id, {})
        need_manual = msg["overwrite"] or not (entry.get("link") or entry.get("file") or entry.get("docs"))
        need_image = use_images and not manager.data["photos"].get(device_id)
        maker, model = str(dev.get("manufacturer") or ""), str(dev.get("model") or "")
        if not (need_manual or need_image) or not model or "~" in device_id or "tracked device" in model.lower() or model == "Mesh":
            continue
        key = f"{maker.lower()}|{model.lower()}"
        cache: dict[str, Any] = manager.data["ai_cache"]
        if key not in cache or msg["overwrite"]:
            urls, image, domain, err = await _ai_find(hass, entity, maker, model, use_images)
            if err:
                if _is_quota_error(err):
                    quota = True
                    error = err
                    break
                error = error or err
                missing += 1
                continue  # not cached: a later run asks again
            url, kind = await _resolve_manual(hass, urls, model)
            if kind != "pdf":  # second try: ask again for different pages, only counts when it brings a real PDF or any working page
                urls2, image2, domain2, err2 = await _ai_find(hass, entity, maker, model, use_images and not image, urls)
                if err2 and _is_quota_error(err2):
                    quota = True
                    error = err2
                if not err2:
                    url2, kind2 = await _resolve_manual(hass, [u for u in urls2 if u not in urls], model)
                    if kind2 and (kind != "page" or kind2 == "pdf"):
                        url, kind = url2, kind2
                    if not image and image2:
                        image, domain = image2, domain2
            image = image if image and _manufacturer_image_ok(image, domain or "", maker, url) else ""  # original manufacturer images only
            pages = [u for u in ([url] if kind == "page" else []) + urls if not u.lower().split("?")[0].endswith(".pdf")]
            cache[key] = {"url": url or "", "pdf": kind == "pdf", "image": image, "pages": list(dict.fromkeys(pages))[:3]}
        hit = cache[key]
        if need_image and not hit.get("image") and not hit.get("img_tried"):  # the manufacturer's own product page names its photo
            hit["img_tried"] = True
            for page in hit.get("pages") or ([hit["url"]] if hit.get("url") and not hit.get("pdf") else []):
                hit["image"] = await _page_image(hass, page, maker) or ""
                if hit["image"]:
                    break
        if need_manual:
            if hit["url"]:
                manager.data["manuals"].setdefault(device_id, {}).update({"link": hit["url"], "ai": True, "pdf": hit["pdf"]})
                found += 1
                if copy_local and hit["pdf"] and await _try_copy(hass, manager, device_id, hit["url"]):
                    copied += 1
            else:
                missing += 1
        if need_image and hit.get("image"):
            if hit["image"] not in image_data:
                image_data[hit["image"]] = await _download_image(hass, hit["image"])
            picture = image_data[hit["image"]]
            if not picture and not hit.get("img_tried"):  # the AI's guess failed: take the photo of the product page instead
                hit["img_tried"] = True
                hit["image"] = ""
                for page in hit.get("pages") or ([hit["url"]] if hit.get("url") and not hit.get("pdf") else []):
                    hit["image"] = await _page_image(hass, page, maker) or ""
                    if hit["image"]:
                        image_data.setdefault(hit["image"], await _download_image(hass, hit["image"]))
                        picture = image_data[hit["image"]]
                        break
            if picture:
                photo_id = secrets.token_urlsafe(16)
                await hass.async_add_executor_job((manager.photo_dir / f"{photo_id}.jpg").write_bytes, picture)
                manager.data["photos"].setdefault(device_id, []).append({"id": photo_id, "ts": dt_util.utcnow().isoformat(), "ai": True, "src": hit["image"]})
                images += 1
    manager.save()
    result = manager.payload(connection.refresh_token_id)
    result["stats"] = {"found": found, "missing": missing, "copied": copied, "images": images, "quota": quota, "error": error}
    connection.send_result(msg["id"], result)


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
    return data[:3] == b"\xff\xd8\xff" or data[:8] == b"\x89PNG\r\n\x1a\n" or (data[:4] == b"RIFF" and data[8:12] == b"WEBP")


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
        entry = manager.data["manuals"].setdefault(device_id, {})
        docs = entry.setdefault("docs", [])
        if len(docs) >= MAX_DOCS_PER_DEVICE:
            return self.json_message("Too many documents for this device", 409)
        doc_id = secrets.token_urlsafe(16)
        await hass.async_add_executor_job((manager.manual_dir / f"{doc_id}.pdf").write_bytes, bytes(data))
        name = "".join(ch for ch in (field.filename or "document.pdf") if ch.isalnum() or ch in "._- ")[:80] or "document.pdf"
        docs.append({"id": doc_id, "name": name, "ts": dt_util.utcnow().isoformat()})
        manager.save()
        return self.json({"id": doc_id})


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
