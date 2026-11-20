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
  en: { manualSecWarn: "No place for credentials: do not store passwords, access data, tokens or keys here. Every logged-in Home Assistant user can open these files, and they lie unencrypted in the config folder.", all: "All devices", other: "Other", status: "Status", name: "Device", model: "Model", area: "Area", ip: "IP", mac: "MAC",
    maker: "Manufacturer", fw: "Firmware", added: "Added", seen: "Seen", battery: "Batt.", photos: "Photos", note: "Note",
    printColorOn: "Printout in colour (click for black and white)", printColorOff: "Printout in black and white (click for colour)", denseOn: "Wider row spacing", denseOff: "Tighter row spacing", commentsOff: "Hide the comment text in the list", commentsOn: "Show the comment text in the list",
    thumbsOff: "Hide the thumbnails in the list", thumbsOn: "Show thumbnails in the list",
    kidFilterOn: "Unfold only sub-rows with a comment or photo", kidFilterOff: "Unfold all sub-rows",
    blurOn: "Blur IP / MAC addresses (e.g. for screenshots)", blurOff: "Show IP / MAC addresses",
    print: "Print / PDF", land: "Landscape", port: "Portrait", count: "devices", online: "Online", offline: "Offline",
    addPhoto: "Add photo(s)", close: "Close", del: "Delete", save: "Save", cancel: "Cancel", hint: "Ctrl+Enter = save, Esc = cancel",
    delPhoto: "Delete this photo?", delNote: "Delete note?", noPhotos: "No photos yet.", noteOf: "Note", photosOf: "Photos",
    addedTip: "Registered in Home Assistant on", addedUnknown: "Older than the registry date field (before Oct 2024) – unknown",
    manual: "Manual", manualOf: "Documents", manualLink: "Open the manual", manualLocal: "Open the local copy (PDF)", manualUrlHint: "Link to the manual (empty = automatic search)", manualSave: "Save link", manualFetch: "Copy the PDF to Home Assistant", manualUpload: "Upload document", manualRemove: "Remove manual", manualNone: "No local copy", manualLocalCopy: "Local copy", manualFail: "Manual failed",
    manualAiBtn: "Find manuals and product photos with AI (for this tab)", manualAiFind: "Find with AI", manualAiLink: "Manual (found by AI) – please check it", manualAiAsk: "Ask the AI for the manuals of {n} devices of this tab? Only manufacturer and model are sent to your configured AI service; every address is checked before it is saved. Devices without a photo also get an original product photo of the manufacturer. For network devices without a model the device name is sent instead.", manualAiNone: "No AI is set up. Add an AI provider in Home Assistant (Settings → Devices & services, e.g. Google Generative AI, OpenAI or Anthropic), then choose its AI task entity in the options of Device Inventory.", manualAiNothing: "Nothing to do: every device of this tab with a model already has a manual.", manualAiDone: "{found} manuals found, {none} not found",
    manualAiQuota: "The AI quota or rate limit is used up. {found} manuals were found before it stopped. Please try again later (free quotas renew daily or per minute).", manualAiError: "The AI service reported an error: {error}", manualAiNoneFound: "No manuals were found for these devices. Many devices have no public manual – you can enter your own link or upload a PDF in the editor of the device.", manualCopyBtn: "Copy the manual PDFs of this tab to Home Assistant", manualCopyAsk: "Copy the PDFs of {n} manuals to Home Assistant (stored locally, work without internet)?", manualCopyNothing: "Nothing to copy: every manual link of this tab is already stored locally or is not a PDF.", manualCopyDone: "{copied} PDFs copied, {failed} failed (not a PDF or not reachable)",
    manualArchived: "archived on",
    manualDocs: "documents", manualAdd: "Add a manual (link or own PDF)", manualOwn: "Own document", manualUploaded: "uploaded", manualDocDel: "Delete this document?", manualUploadHint: "Upload your own files (any type: PDF, Excel, Word, CSV, images …; several at once, also old manuals that no longer exist on the internet). They are stored on your Home Assistant and are never replaced by the AI. PDFs open in the browser, other files are downloaded.",
    manualAiImages: "{n} product photos added (original images from the manufacturer only)",
    aiProgress: "Searching manuals with AI …", aiCancel: "Cancel", aiFoundN: "{n} found", aiStopped: "Search cancelled.",
    autoPause: "Pause the automatic refresh (all tabs)", autoPaused: "Automatic refresh is paused – click to resume",
    manualLinkWeb: "Web page", manualLinkDel: "Remove this link?", manualMoreLink: "Paste a link (web page or PDF – PDFs are stored locally)", manualLinkTitle: "Title (optional)", manualLinkAdd: "Add link",
    manualLinkSec: "Link to the manual", manualMoreSec: "More links",
    sSave: "Save", sUpload: "Upload", sAi: "AI search", sArchive: "Archive", sRemove: "Remove", sAdd: "Add",
    manualHintSec: "AI hint (optional)", manualHintPh: "Extra information to identify the product: exact type designation, article number, year …", manualHintTip: "Tip: enter the exact type designation or article number in the AI hint field and search again.",
    manualAiNoneTitle: "Nothing found", manualHintAsk: "The AI found no manual for this device. Enter more information (exact type designation, article number, year …) and search again:",
    manualLocalRead: "Read from the local web page of the device",
    ipOf: "IP address", ipSuggest: "Suggestions from the router (click to use)", ipSuggestTip: "The device reports no address: suggestion available", ipEditTip: "Enter an IP address", ipManualTip: "Address entered by hand", ipStale: "Last known address (the device reports none right now)", files: "Files", energy: "Energy", vehicles: "Vehicles", media: "Media", appliances: "Home appliances", cameras: "Cameras / doorbells", network: "Network & office",
    mesh: "Connected to", conn: "Connection", lanc: "LAN clients", wific: "WiFi clients",
    uploadFail: "Upload failed", saveFail: "Saving failed", printFail: "Printing failed", stand: "As of", printCols: "Edit columns (display and print)", exportCsv: "Export as CSV", copyLayout: "Copy the column layout (JSON)", layoutCopied: "Column layout copied to the clipboard.", importLayout: "Import a column layout: paste the JSON here", resetAsk: "Reset the table configuration? All settings of this side (columns shown, order, widths, column names) will be lost.", parent: "Main device", yes: "yes",  rename: "Column name (empty = default)", tgtView: "Display", tgtPrint: "Printout", done: "Done", reset: "Reset",  expand: "Show channels", collapse: "Hide channels", channels: "channels", distance: "Distance", home: "Home", bleaddr: "BLE MAC", scanner: "Scanner", scannerip: "Scanner IP", signal: "Signal", temp: "Temp", ble: "Bluetooth", importDone: "Imported from the old network dashboard", importNotes: "notes", importPhotos: "photos",  internet: "Internet", allowed: "Allowed", blocked: "Blocked", blockAsk: "Block internet access for this device?", allowAsk: "Allow internet access for this device?",  search: "Search", copy: "Copy", refresh: "Refresh", low: "Low", ok: "OK", batteries: "Batteries", adminOnly: "Admin required" },
  de: { manualSecWarn: "Keine Ablage für Zugangsdaten: Hier bitte keine Passwörter, Zugangsdaten, Tokens oder Schlüssel speichern. Jeder angemeldete Home-Assistant-Nutzer kann diese Dateien öffnen, und sie liegen unverschlüsselt im Config-Ordner.", all: "Alle Geräte", other: "Sonstige", status: "Status", name: "Gerät", model: "Modell", area: "Raum", ip: "IP", mac: "MAC",
    maker: "Hersteller", fw: "Firmware", added: "Hinzugefügt", seen: "Zuletzt", battery: "Batt.", photos: "Fotos", note: "Bemerkung",
    printColorOn: "Ausdruck in Farbe (Klick: schwarz-weiß)", printColorOff: "Ausdruck schwarz-weiß (Klick: Farbe)", denseOn: "Weiterer Zeilenabstand", denseOff: "Engerer Zeilenabstand", commentsOff: "Kommentartext in der Liste ausblenden", commentsOn: "Kommentartext in der Liste anzeigen",
    thumbsOff: "Miniaturbilder in der Liste ausblenden", thumbsOn: "Miniaturbilder in der Liste anzeigen",
    kidFilterOn: "Beim Ausklappen nur Unterelemente mit Kommentar oder Bild", kidFilterOff: "Alle Unterelemente ausklappen",
    blurOn: "IP- / MAC-Adressen verwischen (z. B. für Screenshots)", blurOff: "IP- / MAC-Adressen anzeigen",
    print: "Drucken / PDF", land: "Querformat", port: "Hochformat", count: "Geräte", online: "Online", offline: "Offline",
    addPhoto: "Foto(s) hinzufügen", close: "Schließen", del: "Löschen", save: "Speichern", cancel: "Abbrechen", hint: "Strg+Enter = Speichern, Esc = Abbrechen",
    delPhoto: "Dieses Foto löschen?", delNote: "Bemerkung löschen?", noPhotos: "Noch keine Fotos.", noteOf: "Bemerkung", photosOf: "Fotos",
    addedTip: "In Home Assistant eingetragen am", addedUnknown: "Älter als das Datumsfeld der Registry (vor Okt. 2024) – unbekannt",
    manual: "Anleitung", manualOf: "Dokumente", manualLink: "Anleitung öffnen", manualLocal: "Lokale Kopie (PDF) öffnen", manualUrlHint: "Link zur Anleitung (leer = automatische Suche)", manualSave: "Link speichern", manualFetch: "PDF nach Home Assistant kopieren", manualUpload: "Dokument hochladen", manualRemove: "Anleitung entfernen", manualNone: "Keine lokale Kopie", manualLocalCopy: "Lokale Kopie", manualFail: "Anleitung fehlgeschlagen",
    manualAiBtn: "Anleitungen und Produktfotos per KI finden (für diesen Tab)", manualAiFind: "Per KI finden", manualAiLink: "Anleitung (von der KI gefunden) – bitte prüfen", manualAiAsk: "Die KI nach den Anleitungen von {n} Geräten dieses Tabs fragen? An deinen eingerichteten KI-Dienst gehen nur Hersteller und Modell; jede Adresse wird vor dem Speichern geprüft. Geräte ohne Foto bekommen auch ein Original-Produktfoto des Herstellers. Bei Netzwerkgeräten ohne Modell wird stattdessen der Gerätename gesendet.", manualAiNone: "Es ist keine KI eingerichtet. Richte in Home Assistant einen KI-Anbieter ein (Einstellungen → Geräte & Dienste, z. B. Google Generative AI, OpenAI oder Anthropic) und wähle dann dessen KI-Task-Entität in den Optionen von Device Inventory.", manualAiNothing: "Nichts zu tun: Jedes Gerät dieses Tabs mit Modell hat schon eine Anleitung.", manualAiDone: "{found} Anleitungen gefunden, {none} nicht gefunden",
    manualAiQuota: "Das Kontingent oder die Anfragegrenze der KI ist aufgebraucht. Bis dahin wurden {found} Anleitungen gefunden. Bitte später noch einmal versuchen (kostenlose Kontingente erneuern sich täglich oder pro Minute).", manualAiError: "Der KI-Dienst meldet einen Fehler: {error}", manualAiNoneFound: "Für diese Geräte wurden keine Anleitungen gefunden. Viele Geräte haben keine öffentliche Anleitung – im Editor des Geräts kannst du einen eigenen Link eintragen oder ein PDF hochladen.", manualCopyBtn: "Die Anleitungs-PDFs dieses Tabs nach Home Assistant kopieren", manualCopyAsk: "Die PDFs von {n} Anleitungen nach Home Assistant kopieren (lokal gespeichert, funktionieren ohne Internet)?", manualCopyNothing: "Nichts zu kopieren: Jeder Anleitungs-Link dieses Tabs ist schon lokal gespeichert oder kein PDF.", manualCopyDone: "{copied} PDFs kopiert, {failed} fehlgeschlagen (kein PDF oder nicht erreichbar)",
    manualArchived: "archiviert am",
    manualDocs: "Dokumente", manualAdd: "Anleitung hinzufügen (Link oder eigenes PDF)", manualOwn: "Eigenes Dokument", manualUploaded: "hochgeladen", manualDocDel: "Dieses Dokument löschen?", manualUploadHint: "Eigene Dateien hochladen (beliebiger Typ: PDF, Excel, Word, CSV, Bilder …; auch mehrere auf einmal, auch alte Anleitungen, die es im Internet nicht mehr gibt). Sie liegen auf deinem Home Assistant und werden nie von der KI ersetzt. PDFs öffnen sich im Browser, andere Dateien werden heruntergeladen.",
    manualAiImages: "{n} Produktfotos hinzugefügt (nur Originalbilder des Herstellers)",
    aiProgress: "Anleitungen werden per KI gesucht …", aiCancel: "Abbrechen", aiFoundN: "{n} gefunden", aiStopped: "Suche abgebrochen.",
    autoPause: "Automatische Aktualisierung pausieren (alle Tabs)", autoPaused: "Automatische Aktualisierung pausiert – klicken zum Fortsetzen",
    manualLinkWeb: "Webseite", manualLinkDel: "Diesen Link entfernen?", manualMoreLink: "Link einfügen (Webseite oder PDF – PDFs werden lokal gespeichert)", manualLinkTitle: "Titel (optional)", manualLinkAdd: "Link hinzufügen",
    manualLinkSec: "Link zur Anleitung", manualMoreSec: "Weitere Links",
    sSave: "Speichern", sUpload: "Hochladen", sAi: "KI-Suche", sArchive: "Archivieren", sRemove: "Entfernen", sAdd: "Hinzufügen",
    manualHintSec: "Hinweis für die KI (optional)", manualHintPh: "Zusatzinfos zur Identifizierung: genaue Typenbezeichnung, Artikelnummer, Baujahr …", manualHintTip: "Tipp: Trage im Feld „Hinweis für die KI“ die genaue Typenbezeichnung oder Artikelnummer ein und suche erneut.",
    manualAiNoneTitle: "Nichts gefunden", manualHintAsk: "Die KI hat für dieses Gerät keine Anleitung gefunden. Gib weitere Infos ein (genaue Typenbezeichnung, Artikelnummer, Baujahr …) und suche erneut:",
    manualLocalRead: "Von der lokalen Webseite des Geräts gelesen",
    ipOf: "IP-Adresse", ipSuggest: "Vorschläge vom Router (zum Übernehmen anklicken)", ipSuggestTip: "Das Gerät meldet keine Adresse: Vorschlag vorhanden", ipEditTip: "IP-Adresse eintragen", ipManualTip: "Von Hand eingetragene Adresse", ipStale: "Zuletzt bekannte Adresse (das Gerät meldet gerade keine)", files: "Dateien", energy: "Energie", vehicles: "Fahrzeuge", media: "Medien", appliances: "Haushaltsgeräte", cameras: "Kameras / Türklingeln", network: "Netzwerk & Büro",
    mesh: "Verbunden mit", conn: "Verbindung", lanc: "LAN-Geräte", wific: "WiFi-Geräte",
    uploadFail: "Foto-Upload fehlgeschlagen", saveFail: "Speichern fehlgeschlagen", printFail: "Drucken fehlgeschlagen", stand: "Stand", printCols: "Spalten bearbeiten (Anzeige und Druck)", exportCsv: "Als CSV exportieren", copyLayout: "Spaltenlayout kopieren (JSON)", layoutCopied: "Spaltenlayout in die Zwischenablage kopiert.", importLayout: "Spaltenlayout importieren: JSON hier einfügen", resetAsk: "Tabellenkonfiguration zurücksetzen? Alle Einstellungen dieser Seite (sichtbare Spalten, Reihenfolge, Breiten, Spaltennamen) gehen verloren.", parent: "Hauptgerät", yes: "ja",  rename: "Spaltenname (leer = Standard)", tgtView: "Anzeige", tgtPrint: "Druck", done: "Fertig", reset: "Zurücksetzen",  expand: "Unterkanäle ausklappen", collapse: "Unterkanäle einklappen", channels: "Kanäle", distance: "Entfernung", home: "Zuhause", bleaddr: "BLE-MAC", scanner: "Scanner", scannerip: "Scanner-IP", signal: "Signal", temp: "Temp", ble: "Bluetooth", importDone: "Aus dem alten Netzwerk-Dashboard übernommen", importNotes: "Bemerkungen", importPhotos: "Fotos",  internet: "Internet", allowed: "Erlaubt", blocked: "Gesperrt", blockAsk: "Internetzugang für dieses Gerät sperren?", allowAsk: "Internetzugang für dieses Gerät erlauben?",  search: "Suchen", copy: "Kopieren", refresh: "Aktualisieren", low: "Niedrig", ok: "OK", batteries: "Batterien", adminOnly: "Admin-Rechte nötig" },
  fr: { ipOf: "Adresse IP", ipSuggest: "Suggestions du routeur (cliquer pour utiliser)", ipSuggestTip: "L'appareil ne signale aucune adresse : suggestion disponible", ipEditTip: "Saisir une adresse IP", ipManualTip: "Adresse saisie à la main", ipStale: "Dernière adresse connue (l'appareil n'en signale aucune pour le moment)", vehicles: "Véhicules", media: "Médias", appliances: "Électroménager", cameras: "Caméras / sonnettes", network: "Réseau et bureau", energy: "Énergie", files: "Fichiers", manualSecWarn: "Pas d'espace pour les identifiants : n'enregistrez ici ni mots de passe, ni données d'accès, ni jetons ou clés. Tout utilisateur connecté de Home Assistant peut ouvrir ces fichiers, et ils sont stockés non chiffrés dans le dossier config.", manualLocalRead: "Lu sur la page web locale de l'appareil", manualAiNoneTitle: "Rien trouvé", manualHintAsk: "L'IA n'a trouvé aucun manuel pour cet appareil. Saisissez plus d'informations (désignation exacte du type, référence, année …) et relancez la recherche :", manualHintSec: "Indice pour l'IA (facultatif)", manualHintPh: "Informations pour identifier le produit : désignation exacte du type, référence, année …", manualHintTip: "Astuce : saisissez la désignation exacte du type ou la référence dans le champ d'indice pour l'IA, puis relancez la recherche.", manual: "Manuel", manualOf: "Documents", manualLink: "Ouvrir le manuel", manualLocal: "Ouvrir la copie locale (PDF)", manualUrlHint: "Lien vers le manuel (vide = recherche automatique)", manualSave: "Enregistrer le lien", manualFetch: "Copier le PDF dans Home Assistant", manualUpload: "Téléverser un document", manualRemove: "Supprimer le manuel", manualNone: "Aucune copie locale", manualLocalCopy: "Copie locale", manualFail: "Échec pour le manuel", manualAiBtn: "Trouver manuels et photos de produit avec l'IA (pour cet onglet)", manualAiFind: "Trouver avec l'IA", manualAiLink: "Manuel (trouvé par l'IA) – veuillez le vérifier", manualAiAsk: "Demander à l'IA les manuels de {n} appareils de cet onglet ? Seuls le fabricant et le modèle sont envoyés à votre service d'IA ; chaque adresse est vérifiée avant d'être enregistrée. Les appareils sans photo reçoivent aussi une photo de produit originale du fabricant. Pour les appareils réseau sans modèle, le nom de l'appareil est envoyé à la place.", manualAiNone: "Aucune IA n'est configurée. Ajoutez un fournisseur d'IA dans Home Assistant (Paramètres → Appareils et services, p. ex. Google Generative AI, OpenAI ou Anthropic), puis choisissez son entité Tâche IA dans les options de Device Inventory.", manualAiNothing: "Rien à faire : chaque appareil de cet onglet ayant un modèle a déjà un manuel.", manualAiDone: "{found} manuels trouvés, {none} introuvables", manualAiQuota: "Le quota ou la limite de requêtes de l'IA est épuisé. {found} manuels ont été trouvés avant l'arrêt. Réessayez plus tard (les quotas gratuits se renouvellent chaque jour ou chaque minute).", manualAiError: "Le service d'IA signale une erreur : {error}", manualAiNoneFound: "Aucun manuel n'a été trouvé pour ces appareils. Beaucoup d'appareils n'ont pas de manuel public – vous pouvez saisir votre propre lien ou téléverser un PDF dans l'éditeur de l'appareil.", manualCopyBtn: "Copier les PDF des manuels de cet onglet dans Home Assistant", manualCopyAsk: "Copier les PDF de {n} manuels dans Home Assistant (stockés localement, fonctionnent sans Internet) ?", manualCopyNothing: "Rien à copier : chaque lien de manuel de cet onglet est déjà stocké localement ou n'est pas un PDF.", manualCopyDone: "{copied} PDF copiés, {failed} échecs (pas un PDF ou inaccessible)", manualArchived: "archivé le", manualDocs: "documents", manualAdd: "Ajouter un manuel (lien ou PDF personnel)", manualOwn: "Document personnel", manualUploaded: "téléversé", manualDocDel: "Supprimer ce document ?", manualUploadHint: "Téléversez vos propres fichiers (tout type : PDF, Excel, Word, CSV, images …, plusieurs à la fois, y compris d'anciens manuels qui n'existent plus sur Internet). Ils sont stockés sur votre Home Assistant et ne sont jamais remplacés par l'IA. Les PDF s'ouvrent dans le navigateur, les autres fichiers sont téléchargés.", manualAiImages: "{n} photos de produit ajoutées (uniquement des images originales du fabricant)", aiProgress: "Recherche des manuels avec l'IA …", aiCancel: "Annuler", aiFoundN: "{n} trouvés", aiStopped: "Recherche annulée.", autoPause: "Mettre en pause l'actualisation automatique (tous les onglets)", autoPaused: "L'actualisation automatique est en pause – cliquer pour reprendre", manualLinkWeb: "Page web", manualLinkDel: "Supprimer ce lien ?", manualMoreLink: "Ajouter un autre lien (base de connaissances, fiche technique …)", manualLinkTitle: "Titre (facultatif)", manualLinkAdd: "Ajouter un lien", manualLinkSec: "Lien vers le manuel", manualMoreSec: "Autres liens", sSave: "Enregistrer", sUpload: "Téléverser", sAi: "Recherche IA", sArchive: "Archiver", sRemove: "Supprimer", sAdd: "Ajouter", all: "Tous les appareils", other: "Autres", status: "État", name: "Appareil", model: "Modèle", area: "Pièce", ip: "IP", mac: "MAC", maker: "Fabricant", fw: "Firmware", added: "Ajouté", seen: "Vu", battery: "Batt.", photos: "Photos", note: "Note", printColorOn: "Impression en couleur (cliquer pour noir et blanc)", printColorOff: "Impression en noir et blanc (cliquer pour la couleur)", denseOn: "Espacement des lignes plus large", denseOff: "Espacement des lignes plus serré", commentsOff: "Masquer le texte des commentaires dans la liste", commentsOn: "Afficher le texte des commentaires dans la liste", thumbsOff: "Masquer les miniatures dans la liste", thumbsOn: "Afficher les miniatures dans la liste", kidFilterOn: "Déplier uniquement les sous-lignes avec commentaire ou photo", kidFilterOff: "Déplier toutes les sous-lignes", blurOn: "Flouter les adresses IP / MAC (p. ex. pour des captures d'écran)", blurOff: "Afficher les adresses IP / MAC", print: "Imprimer / PDF", land: "Paysage", port: "Portrait", count: "appareils", online: "En ligne", offline: "Hors ligne", addPhoto: "Ajouter des photos", close: "Fermer", del: "Supprimer", save: "Enregistrer", cancel: "Annuler", hint: "Ctrl+Entrée = enregistrer, Échap = annuler", delPhoto: "Supprimer cette photo ?", delNote: "Supprimer la note ?", noPhotos: "Aucune photo pour l'instant.", noteOf: "Note", photosOf: "Photos", addedTip: "Enregistré dans Home Assistant le", addedUnknown: "Plus ancien que le champ de date du registre (avant oct. 2024) – inconnu", mesh: "Connecté à", conn: "Connexion", lanc: "Clients LAN", wific: "Clients WiFi", uploadFail: "Échec du téléversement", saveFail: "Échec de l'enregistrement", printFail: "Échec de l'impression", stand: "État au", printCols: "Modifier les colonnes (affichage et impression)", exportCsv: "Exporter en CSV", copyLayout: "Copier la disposition des colonnes (JSON)", layoutCopied: "Disposition des colonnes copiée dans le presse-papiers.", importLayout: "Importer une disposition de colonnes : collez le JSON ici", resetAsk: "Réinitialiser la configuration du tableau ? Tous les réglages de ce côté (colonnes affichées, ordre, largeurs, noms de colonnes) seront perdus.", parent: "Appareil principal", yes: "oui", rename: "Nom de la colonne (vide = par défaut)", tgtView: "Affichage", tgtPrint: "Impression", done: "Terminé", reset: "Réinitialiser", expand: "Afficher les canaux", collapse: "Masquer les canaux", channels: "canaux", distance: "Distance", home: "Présent", bleaddr: "MAC BLE", scanner: "Scanner", scannerip: "IP du scanner", signal: "Signal", temp: "Temp.", ble: "Bluetooth", importDone: "Importé depuis l'ancien tableau de bord réseau", importNotes: "notes", importPhotos: "photos", internet: "Internet", allowed: "Autorisé", blocked: "Bloqué", blockAsk: "Bloquer l'accès à Internet pour cet appareil ?", allowAsk: "Autoriser l'accès à Internet pour cet appareil ?", search: "Rechercher", copy: "Copier", refresh: "Actualiser", low: "Faible", ok: "OK", batteries: "Piles", adminOnly: "Droits d'administrateur requis" },
  es: { ipOf: "Dirección IP", ipSuggest: "Sugerencias del router (clic para usar)", ipSuggestTip: "El dispositivo no informa ninguna dirección: hay una sugerencia", ipEditTip: "Introducir una dirección IP", ipManualTip: "Dirección introducida a mano", ipStale: "Última dirección conocida (el dispositivo no informa ninguna ahora)", vehicles: "Vehículos", media: "Multimedia", appliances: "Electrodomésticos", cameras: "Cámaras / timbres", network: "Red y oficina", energy: "Energía", files: "Archivos", manualSecWarn: "No es un lugar para credenciales: no guardes aquí contraseñas, datos de acceso, tokens ni claves. Cualquier usuario conectado de Home Assistant puede abrir estos archivos, y están sin cifrar en la carpeta config.", manualLocalRead: "Leído de la página web local del dispositivo", manualAiNoneTitle: "No se encontró nada", manualHintAsk: "La IA no ha encontrado ningún manual para este dispositivo. Introduce más información (designación exacta del tipo, número de artículo, año …) y vuelve a buscar:", manualHintSec: "Pista para la IA (opcional)", manualHintPh: "Información para identificar el producto: designación exacta del tipo, número de artículo, año …", manualHintTip: "Consejo: introduce la designación exacta del tipo o el número de artículo en el campo de pista para la IA y vuelve a buscar.", manual: "Manual", manualOf: "Documentos", manualLink: "Abrir el manual", manualLocal: "Abrir la copia local (PDF)", manualUrlHint: "Enlace al manual (vacío = búsqueda automática)", manualSave: "Guardar enlace", manualFetch: "Copiar el PDF a Home Assistant", manualUpload: "Subir documento", manualRemove: "Quitar manual", manualNone: "Sin copia local", manualLocalCopy: "Copia local", manualFail: "Error con el manual", manualAiBtn: "Buscar manuales y fotos de producto con IA (de esta pestaña)", manualAiFind: "Buscar con IA", manualAiLink: "Manual (encontrado por la IA) – compruébalo", manualAiAsk: "¿Pedir a la IA los manuales de {n} dispositivos de esta pestaña? Solo se envían el fabricante y el modelo a tu servicio de IA; cada dirección se comprueba antes de guardarse. Los dispositivos sin foto reciben además una foto de producto original del fabricante. En los dispositivos de red sin modelo se envía en su lugar el nombre del dispositivo.", manualAiNone: "No hay ninguna IA configurada. Añade un proveedor de IA en Home Assistant (Ajustes → Dispositivos y servicios, p. ej. Google Generative AI, OpenAI o Anthropic) y elige su entidad de tarea de IA en las opciones de Device Inventory.", manualAiNothing: "Nada que hacer: todos los dispositivos de esta pestaña con modelo ya tienen manual.", manualAiDone: "{found} manuales encontrados, {none} no encontrados", manualAiQuota: "Se ha agotado la cuota o el límite de solicitudes de la IA. Se encontraron {found} manuales antes de detenerse. Inténtalo de nuevo más tarde (las cuotas gratuitas se renuevan cada día o cada minuto).", manualAiError: "El servicio de IA ha notificado un error: {error}", manualAiNoneFound: "No se encontraron manuales para estos dispositivos. Muchos dispositivos no tienen manual público: puedes introducir tu propio enlace o subir un PDF en el editor del dispositivo.", manualCopyBtn: "Copiar los PDF de los manuales de esta pestaña a Home Assistant", manualCopyAsk: "¿Copiar los PDF de {n} manuales a Home Assistant (guardados localmente, funcionan sin internet)?", manualCopyNothing: "Nada que copiar: todos los enlaces de manual de esta pestaña ya están guardados localmente o no son PDF.", manualCopyDone: "{copied} PDF copiados, {failed} fallidos (no es un PDF o no accesible)", manualArchived: "archivado el", manualDocs: "documentos", manualAdd: "Añadir un manual (enlace o PDF propio)", manualOwn: "Documento propio", manualUploaded: "subido", manualDocDel: "¿Eliminar este documento?", manualUploadHint: "Sube tus propios archivos (cualquier tipo: PDF, Excel, Word, CSV, imágenes …; varios a la vez, también manuales antiguos que ya no existen en internet). Se guardan en tu Home Assistant y la IA nunca los sustituye. Los PDF se abren en el navegador, los demás archivos se descargan.", manualAiImages: "{n} fotos de producto añadidas (solo imágenes originales del fabricante)", aiProgress: "Buscando manuales con IA …", aiCancel: "Cancelar", aiFoundN: "{n} encontrados", aiStopped: "Búsqueda cancelada.", autoPause: "Pausar la actualización automática (todas las pestañas)", autoPaused: "La actualización automática está en pausa – clic para reanudar", manualLinkWeb: "Página web", manualLinkDel: "¿Quitar este enlace?", manualMoreLink: "Añadir otro enlace (base de conocimiento, ficha técnica …)", manualLinkTitle: "Título (opcional)", manualLinkAdd: "Añadir enlace", manualLinkSec: "Enlace al manual", manualMoreSec: "Más enlaces", sSave: "Guardar", sUpload: "Subir", sAi: "Búsqueda IA", sArchive: "Archivar", sRemove: "Quitar", sAdd: "Añadir", all: "Todos los dispositivos", other: "Otros", status: "Estado", name: "Dispositivo", model: "Modelo", area: "Zona", ip: "IP", mac: "MAC", maker: "Fabricante", fw: "Firmware", added: "Añadido", seen: "Visto", battery: "Bat.", photos: "Fotos", note: "Nota", printColorOn: "Impresión en color (clic para blanco y negro)", printColorOff: "Impresión en blanco y negro (clic para color)", denseOn: "Mayor espacio entre filas", denseOff: "Menor espacio entre filas", commentsOff: "Ocultar el texto de los comentarios en la lista", commentsOn: "Mostrar el texto de los comentarios en la lista", thumbsOff: "Ocultar las miniaturas en la lista", thumbsOn: "Mostrar las miniaturas en la lista", kidFilterOn: "Desplegar solo las subfilas con comentario o foto", kidFilterOff: "Desplegar todas las subfilas", blurOn: "Difuminar las direcciones IP / MAC (p. ej. para capturas de pantalla)", blurOff: "Mostrar las direcciones IP / MAC", print: "Imprimir / PDF", land: "Horizontal", port: "Vertical", count: "dispositivos", online: "En línea", offline: "Sin conexión", addPhoto: "Añadir fotos", close: "Cerrar", del: "Eliminar", save: "Guardar", cancel: "Cancelar", hint: "Ctrl+Intro = guardar, Esc = cancelar", delPhoto: "¿Eliminar esta foto?", delNote: "¿Eliminar la nota?", noPhotos: "Aún no hay fotos.", noteOf: "Nota", photosOf: "Fotos", addedTip: "Registrado en Home Assistant el", addedUnknown: "Anterior al campo de fecha del registro (antes de oct. 2024) – desconocido", mesh: "Conectado a", conn: "Conexión", lanc: "Clientes LAN", wific: "Clientes WiFi", uploadFail: "Error al subir", saveFail: "Error al guardar", printFail: "Error al imprimir", stand: "Estado a", printCols: "Editar columnas (pantalla e impresión)", exportCsv: "Exportar como CSV", copyLayout: "Copiar la disposición de columnas (JSON)", layoutCopied: "Disposición de columnas copiada al portapapeles.", importLayout: "Importar una disposición de columnas: pega aquí el JSON", resetAsk: "¿Restablecer la configuración de la tabla? Se perderán todos los ajustes de este lado (columnas mostradas, orden, anchos, nombres de columna).", parent: "Dispositivo principal", yes: "sí", rename: "Nombre de la columna (vacío = por defecto)", tgtView: "Pantalla", tgtPrint: "Impresión", done: "Listo", reset: "Restablecer", expand: "Mostrar canales", collapse: "Ocultar canales", channels: "canales", distance: "Distancia", home: "En casa", bleaddr: "MAC BLE", scanner: "Escáner", scannerip: "IP del escáner", signal: "Señal", temp: "Temp.", ble: "Bluetooth", importDone: "Importado del antiguo panel de red", importNotes: "notas", importPhotos: "fotos", internet: "Internet", allowed: "Permitido", blocked: "Bloqueado", blockAsk: "¿Bloquear el acceso a Internet de este dispositivo?", allowAsk: "¿Permitir el acceso a Internet de este dispositivo?", search: "Buscar", copy: "Copiar", refresh: "Actualizar", low: "Baja", ok: "OK", batteries: "Baterías", adminOnly: "Se requiere administrador" },
  nl: { ipOf: "IP-adres", ipSuggest: "Suggesties van de router (klik om te gebruiken)", ipSuggestTip: "Het apparaat meldt geen adres: suggestie beschikbaar", ipEditTip: "IP-adres invoeren", ipManualTip: "Handmatig ingevoerd adres", ipStale: "Laatst bekende adres (het apparaat meldt nu geen adres)", vehicles: "Voertuigen", media: "Media", appliances: "Huishoudapparaten", cameras: "Camera's / deurbellen", network: "Netwerk & kantoor", energy: "Energie", files: "Bestanden", manualSecWarn: "Geen plek voor inloggegevens: sla hier geen wachtwoorden, toegangsgegevens, tokens of sleutels op. Elke ingelogde Home Assistant-gebruiker kan deze bestanden openen en ze staan onversleuteld in de config-map.", manualLocalRead: "Gelezen van de lokale webpagina van het apparaat", manualAiNoneTitle: "Niets gevonden", manualHintAsk: "De AI heeft voor dit apparaat geen handleiding gevonden. Voer meer informatie in (exacte typeaanduiding, artikelnummer, jaar …) en zoek opnieuw:", manualHintSec: "Hint voor de AI (optioneel)", manualHintPh: "Extra informatie om het product te herkennen: exacte typeaanduiding, artikelnummer, jaar …", manualHintTip: "Tip: vul de exacte typeaanduiding of het artikelnummer in bij het hintveld voor de AI en zoek opnieuw.", manual: "Handleiding", manualOf: "Documenten", manualLink: "Handleiding openen", manualLocal: "Lokale kopie (PDF) openen", manualUrlHint: "Link naar de handleiding (leeg = automatisch zoeken)", manualSave: "Link opslaan", manualFetch: "PDF naar Home Assistant kopiëren", manualUpload: "Document uploaden", manualRemove: "Handleiding verwijderen", manualNone: "Geen lokale kopie", manualLocalCopy: "Lokale kopie", manualFail: "Handleiding mislukt", manualAiBtn: "Handleidingen en productfoto's zoeken met AI (voor dit tabblad)", manualAiFind: "Zoeken met AI", manualAiLink: "Handleiding (gevonden door AI) – controleer deze", manualAiAsk: "De AI om de handleidingen van {n} apparaten van dit tabblad vragen? Alleen fabrikant en model worden naar je AI-dienst gestuurd; elk adres wordt gecontroleerd voordat het wordt opgeslagen. Apparaten zonder foto krijgen ook een originele productfoto van de fabrikant. Bij netwerkapparaten zonder model wordt in plaats daarvan de apparaatnaam verstuurd.", manualAiNone: "Er is geen AI ingesteld. Voeg in Home Assistant een AI-aanbieder toe (Instellingen → Apparaten en diensten, bijv. Google Generative AI, OpenAI of Anthropic) en kies daarna de AI-taak-entiteit in de opties van Device Inventory.", manualAiNothing: "Niets te doen: elk apparaat van dit tabblad met een model heeft al een handleiding.", manualAiDone: "{found} handleidingen gevonden, {none} niet gevonden", manualAiQuota: "Het AI-quotum of de aanvraaglimiet is opgebruikt. Er zijn {found} handleidingen gevonden voordat het stopte. Probeer het later opnieuw (gratis quota worden dagelijks of per minuut vernieuwd).", manualAiError: "De AI-dienst meldt een fout: {error}", manualAiNoneFound: "Voor deze apparaten zijn geen handleidingen gevonden. Veel apparaten hebben geen openbare handleiding – je kunt in de editor van het apparaat een eigen link invoeren of een PDF uploaden.", manualCopyBtn: "De handleiding-PDF's van dit tabblad naar Home Assistant kopiëren", manualCopyAsk: "De PDF's van {n} handleidingen naar Home Assistant kopiëren (lokaal opgeslagen, werken zonder internet)?", manualCopyNothing: "Niets te kopiëren: elke handleidinglink van dit tabblad is al lokaal opgeslagen of geen PDF.", manualCopyDone: "{copied} PDF's gekopieerd, {failed} mislukt (geen PDF of niet bereikbaar)", manualArchived: "gearchiveerd op", manualDocs: "documenten", manualAdd: "Handleiding toevoegen (link of eigen PDF)", manualOwn: "Eigen document", manualUploaded: "geüpload", manualDocDel: "Dit document verwijderen?", manualUploadHint: "Upload je eigen bestanden (elk type: PDF, Excel, Word, CSV, afbeeldingen …; meerdere tegelijk, ook oude handleidingen die niet meer op internet staan). Ze staan op je Home Assistant en worden nooit door de AI vervangen. PDF's openen in de browser, andere bestanden worden gedownload.", manualAiImages: "{n} productfoto's toegevoegd (alleen originele afbeeldingen van de fabrikant)", aiProgress: "Handleidingen zoeken met AI …", aiCancel: "Annuleren", aiFoundN: "{n} gevonden", aiStopped: "Zoeken geannuleerd.", autoPause: "Automatisch vernieuwen pauzeren (alle tabbladen)", autoPaused: "Automatisch vernieuwen is gepauzeerd – klik om te hervatten", manualLinkWeb: "Webpagina", manualLinkDel: "Deze link verwijderen?", manualMoreLink: "Nog een link toevoegen (kennisbank, datasheet …)", manualLinkTitle: "Titel (optioneel)", manualLinkAdd: "Link toevoegen", manualLinkSec: "Link naar de handleiding", manualMoreSec: "Meer links", sSave: "Opslaan", sUpload: "Uploaden", sAi: "AI-zoeken", sArchive: "Archiveren", sRemove: "Verwijderen", sAdd: "Toevoegen", all: "Alle apparaten", other: "Overig", status: "Status", name: "Apparaat", model: "Model", area: "Ruimte", ip: "IP", mac: "MAC", maker: "Fabrikant", fw: "Firmware", added: "Toegevoegd", seen: "Gezien", battery: "Bat.", photos: "Foto's", note: "Notitie", printColorOn: "Afdrukken in kleur (klik voor zwart-wit)", printColorOff: "Afdrukken in zwart-wit (klik voor kleur)", denseOn: "Ruimere regelafstand", denseOff: "Smallere regelafstand", commentsOff: "Verberg de opmerkingstekst in de lijst", commentsOn: "Toon de opmerkingstekst in de lijst", thumbsOff: "Verberg de miniaturen in de lijst", thumbsOn: "Toon de miniaturen in de lijst", kidFilterOn: "Alleen subregels met opmerking of foto uitklappen", kidFilterOff: "Alle subregels uitklappen", blurOn: "IP- / MAC-adressen vervagen (bijv. voor schermafbeeldingen)", blurOff: "IP- / MAC-adressen tonen", print: "Afdrukken / PDF", land: "Liggend", port: "Staand", count: "apparaten", online: "Online", offline: "Offline", addPhoto: "Foto's toevoegen", close: "Sluiten", del: "Verwijderen", save: "Opslaan", cancel: "Annuleren", hint: "Ctrl+Enter = opslaan, Esc = annuleren", delPhoto: "Deze foto verwijderen?", delNote: "Notitie verwijderen?", noPhotos: "Nog geen foto's.", noteOf: "Notitie", photosOf: "Foto's", addedTip: "Geregistreerd in Home Assistant op", addedUnknown: "Ouder dan het datumveld van het register (vóór okt. 2024) – onbekend", mesh: "Verbonden met", conn: "Verbinding", lanc: "LAN-clients", wific: "WiFi-clients", uploadFail: "Uploaden mislukt", saveFail: "Opslaan mislukt", printFail: "Afdrukken mislukt", stand: "Stand", printCols: "Kolommen bewerken (weergave en afdruk)", exportCsv: "Exporteren als CSV", copyLayout: "Kolomindeling kopiëren (JSON)", layoutCopied: "Kolomindeling naar het klembord gekopieerd.", importLayout: "Kolomindeling importeren: plak hier de JSON", resetAsk: "De tabelconfiguratie terugzetten? Alle instellingen van deze kant (getoonde kolommen, volgorde, breedtes, kolomnamen) gaan verloren.", parent: "Hoofdapparaat", yes: "ja", rename: "Kolomnaam (leeg = standaard)", tgtView: "Weergave", tgtPrint: "Afdruk", done: "Klaar", reset: "Terugzetten", expand: "Kanalen tonen", collapse: "Kanalen verbergen", channels: "kanalen", distance: "Afstand", home: "Thuis", bleaddr: "BLE-MAC", scanner: "Scanner", scannerip: "Scanner-IP", signal: "Signaal", temp: "Temp.", ble: "Bluetooth", importDone: "Geïmporteerd uit het oude netwerkdashboard", importNotes: "notities", importPhotos: "foto's", internet: "Internet", allowed: "Toegestaan", blocked: "Geblokkeerd", blockAsk: "Internettoegang voor dit apparaat blokkeren?", allowAsk: "Internettoegang voor dit apparaat toestaan?", search: "Zoeken", copy: "Kopiëren", refresh: "Vernieuwen", low: "Laag", ok: "OK", batteries: "Batterijen", adminOnly: "Beheerder vereist" },
  it: { ipOf: "Indirizzo IP", ipSuggest: "Suggerimenti dal router (clic per usare)", ipSuggestTip: "Il dispositivo non comunica alcun indirizzo: suggerimento disponibile", ipEditTip: "Inserisci un indirizzo IP", ipManualTip: "Indirizzo inserito a mano", ipStale: "Ultimo indirizzo noto (il dispositivo al momento non ne comunica alcuno)", vehicles: "Veicoli", media: "Multimedia", appliances: "Elettrodomestici", cameras: "Telecamere / campanelli", network: "Rete e ufficio", energy: "Energia", files: "File", manualSecWarn: "Non è un posto per le credenziali: non salvare qui password, dati di accesso, token o chiavi. Ogni utente collegato di Home Assistant può aprire questi file e sono salvati non cifrati nella cartella config.", manualLocalRead: "Letto dalla pagina web locale del dispositivo", manualAiNoneTitle: "Nessun risultato", manualHintAsk: "L'IA non ha trovato alcun manuale per questo dispositivo. Inserisci altre informazioni (denominazione esatta del tipo, numero articolo, anno …) e cerca di nuovo:", manualHintSec: "Suggerimento per l'IA (facoltativo)", manualHintPh: "Informazioni per identificare il prodotto: denominazione esatta del tipo, numero articolo, anno …", manualHintTip: "Suggerimento: inserisci la denominazione esatta del tipo o il numero articolo nel campo suggerimento per l'IA e cerca di nuovo.", manual: "Manuale", manualOf: "Documenti", manualLink: "Apri il manuale", manualLocal: "Apri la copia locale (PDF)", manualUrlHint: "Link al manuale (vuoto = ricerca automatica)", manualSave: "Salva link", manualFetch: "Copia il PDF in Home Assistant", manualUpload: "Carica documento", manualRemove: "Rimuovi manuale", manualNone: "Nessuna copia locale", manualLocalCopy: "Copia locale", manualFail: "Manuale non riuscito", manualAiBtn: "Trova manuali e foto dei prodotti con l'IA (per questa scheda)", manualAiFind: "Trova con l'IA", manualAiLink: "Manuale (trovato dall'IA) – controllalo", manualAiAsk: "Chiedere all'IA i manuali di {n} dispositivi di questa scheda? Al tuo servizio di IA vengono inviati solo produttore e modello; ogni indirizzo viene verificato prima del salvataggio. I dispositivi senza foto ricevono anche una foto originale del prodotto dal produttore. Per i dispositivi di rete senza modello viene inviato invece il nome del dispositivo.", manualAiNone: "Nessuna IA configurata. Aggiungi un provider di IA in Home Assistant (Impostazioni → Dispositivi e servizi, ad es. Google Generative AI, OpenAI o Anthropic), quindi scegli la sua entità Attività IA nelle opzioni di Device Inventory.", manualAiNothing: "Niente da fare: ogni dispositivo di questa scheda con un modello ha già un manuale.", manualAiDone: "{found} manuali trovati, {none} non trovati", manualAiQuota: "La quota o il limite di richieste dell'IA è esaurito. Prima dell'arresto sono stati trovati {found} manuali. Riprova più tardi (le quote gratuite si rinnovano ogni giorno o ogni minuto).", manualAiError: "Il servizio di IA ha segnalato un errore: {error}", manualAiNoneFound: "Per questi dispositivi non sono stati trovati manuali. Molti dispositivi non hanno un manuale pubblico – puoi inserire un tuo link o caricare un PDF nell'editor del dispositivo.", manualCopyBtn: "Copia i PDF dei manuali di questa scheda in Home Assistant", manualCopyAsk: "Copiare i PDF di {n} manuali in Home Assistant (salvati localmente, funzionano senza internet)?", manualCopyNothing: "Niente da copiare: ogni link a un manuale di questa scheda è già salvato localmente o non è un PDF.", manualCopyDone: "{copied} PDF copiati, {failed} non riusciti (non è un PDF o non raggiungibile)", manualArchived: "archiviato il", manualDocs: "documenti", manualAdd: "Aggiungi un manuale (link o PDF personale)", manualOwn: "Documento personale", manualUploaded: "caricato", manualDocDel: "Eliminare questo documento?", manualUploadHint: "Carica i tuoi file (qualsiasi tipo: PDF, Excel, Word, CSV, immagini …; anche più di uno, anche vecchi manuali che non esistono più su internet). Sono salvati sul tuo Home Assistant e non vengono mai sostituiti dall'IA. I PDF si aprono nel browser, gli altri file vengono scaricati.", manualAiImages: "{n} foto di prodotto aggiunte (solo immagini originali del produttore)", aiProgress: "Ricerca dei manuali con l'IA …", aiCancel: "Annulla", aiFoundN: "{n} trovati", aiStopped: "Ricerca annullata.", autoPause: "Metti in pausa l'aggiornamento automatico (tutte le schede)", autoPaused: "L'aggiornamento automatico è in pausa – clicca per riprendere", manualLinkWeb: "Pagina web", manualLinkDel: "Rimuovere questo link?", manualMoreLink: "Aggiungi un altro link (knowledge base, scheda tecnica …)", manualLinkTitle: "Titolo (facoltativo)", manualLinkAdd: "Aggiungi link", manualLinkSec: "Link al manuale", manualMoreSec: "Altri link", sSave: "Salva", sUpload: "Carica", sAi: "Ricerca IA", sArchive: "Archivia", sRemove: "Rimuovi", sAdd: "Aggiungi", all: "Tutti i dispositivi", other: "Altro", status: "Stato", name: "Dispositivo", model: "Modello", area: "Area", ip: "IP", mac: "MAC", maker: "Produttore", fw: "Firmware", added: "Aggiunto", seen: "Visto", battery: "Batt.", photos: "Foto", note: "Nota", printColorOn: "Stampa a colori (clic per bianco e nero)", printColorOff: "Stampa in bianco e nero (clic per i colori)", denseOn: "Spaziatura righe più ampia", denseOff: "Spaziatura righe più stretta", commentsOff: "Nascondi il testo dei commenti nell'elenco", commentsOn: "Mostra il testo dei commenti nell'elenco", thumbsOff: "Nascondi le miniature nell'elenco", thumbsOn: "Mostra le miniature nell'elenco", kidFilterOn: "Espandi solo le sottorighe con commento o foto", kidFilterOff: "Espandi tutte le sottorighe", blurOn: "Sfoca gli indirizzi IP / MAC (ad es. per gli screenshot)", blurOff: "Mostra gli indirizzi IP / MAC", print: "Stampa / PDF", land: "Orizzontale", port: "Verticale", count: "dispositivi", online: "Online", offline: "Offline", addPhoto: "Aggiungi foto", close: "Chiudi", del: "Elimina", save: "Salva", cancel: "Annulla", hint: "Ctrl+Invio = salva, Esc = annulla", delPhoto: "Eliminare questa foto?", delNote: "Eliminare la nota?", noPhotos: "Ancora nessuna foto.", noteOf: "Nota", photosOf: "Foto", addedTip: "Registrato in Home Assistant il", addedUnknown: "Precedente al campo data del registro (prima di ott. 2024) – sconosciuto", mesh: "Connesso a", conn: "Connessione", lanc: "Client LAN", wific: "Client WiFi", uploadFail: "Caricamento non riuscito", saveFail: "Salvataggio non riuscito", printFail: "Stampa non riuscita", stand: "Stato al", printCols: "Modifica colonne (schermo e stampa)", exportCsv: "Esporta come CSV", copyLayout: "Copia la disposizione delle colonne (JSON)", layoutCopied: "Disposizione delle colonne copiata negli appunti.", importLayout: "Importa una disposizione delle colonne: incolla qui il JSON", resetAsk: "Reimpostare la configurazione della tabella? Tutte le impostazioni di questo lato (colonne mostrate, ordine, larghezze, nomi delle colonne) andranno perse.", parent: "Dispositivo principale", yes: "sì", rename: "Nome colonna (vuoto = predefinito)", tgtView: "Schermo", tgtPrint: "Stampa", done: "Fatto", reset: "Reimposta", expand: "Mostra canali", collapse: "Nascondi canali", channels: "canali", distance: "Distanza", home: "A casa", bleaddr: "MAC BLE", scanner: "Scanner", scannerip: "IP scanner", signal: "Segnale", temp: "Temp.", ble: "Bluetooth", importDone: "Importato dal vecchio dashboard di rete", importNotes: "note", importPhotos: "foto", internet: "Internet", allowed: "Consentito", blocked: "Bloccato", blockAsk: "Bloccare l'accesso a Internet per questo dispositivo?", allowAsk: "Consentire l'accesso a Internet per questo dispositivo?", search: "Cerca", copy: "Copia", refresh: "Aggiorna", low: "Bassa", ok: "OK", batteries: "Batterie", adminOnly: "Richiesti diritti di amministratore" },
  pl: { ipOf: "Adres IP", ipSuggest: "Propozycje z routera (kliknij, aby użyć)", ipSuggestTip: "Urządzenie nie zgłasza adresu: dostępna propozycja", ipEditTip: "Wpisz adres IP", ipManualTip: "Adres wpisany ręcznie", ipStale: "Ostatni znany adres (urządzenie obecnie nie zgłasza adresu)", vehicles: "Pojazdy", media: "Multimedia", appliances: "AGD", cameras: "Kamery / dzwonki", network: "Sieć i biuro", energy: "Energia", files: "Pliki", manualSecWarn: "To nie miejsce na dane dostępowe: nie zapisuj tu haseł, danych logowania, tokenów ani kluczy. Każdy zalogowany użytkownik Home Assistant może otworzyć te pliki, a leżą one niezaszyfrowane w folderze config.", manualLocalRead: "Odczytano z lokalnej strony internetowej urządzenia", manualAiNoneTitle: "Nic nie znaleziono", manualHintAsk: "AI nie znalazła instrukcji dla tego urządzenia. Wpisz więcej informacji (dokładne oznaczenie typu, numer artykułu, rok …) i wyszukaj ponownie:", manualHintSec: "Wskazówka dla AI (opcjonalnie)", manualHintPh: "Informacje do rozpoznania produktu: dokładne oznaczenie typu, numer artykułu, rok …", manualHintTip: "Wskazówka: wpisz dokładne oznaczenie typu lub numer artykułu w polu wskazówki dla AI i wyszukaj ponownie.", manual: "Instrukcja", manualOf: "Dokumenty", manualLink: "Otwórz instrukcję", manualLocal: "Otwórz kopię lokalną (PDF)", manualUrlHint: "Link do instrukcji (puste = wyszukiwanie automatyczne)", manualSave: "Zapisz link", manualFetch: "Skopiuj PDF do Home Assistant", manualUpload: "Wgraj dokument", manualRemove: "Usuń instrukcję", manualNone: "Brak kopii lokalnej", manualLocalCopy: "Kopia lokalna", manualFail: "Błąd instrukcji", manualAiBtn: "Znajdź instrukcje i zdjęcia produktów za pomocą AI (dla tej karty)", manualAiFind: "Znajdź przez AI", manualAiLink: "Instrukcja (znaleziona przez AI) – sprawdź ją", manualAiAsk: "Zapytać AI o instrukcje {n} urządzeń z tej karty? Do usługi AI wysyłani są tylko producent i model; każdy adres jest sprawdzany przed zapisem. Urządzenia bez zdjęcia dostają też oryginalne zdjęcie produktu od producenta. W przypadku urządzeń sieciowych bez modelu wysyłana jest zamiast tego nazwa urządzenia.", manualAiNone: "Nie skonfigurowano AI. Dodaj dostawcę AI w Home Assistant (Ustawienia → Urządzenia i usługi, np. Google Generative AI, OpenAI lub Anthropic), a następnie wybierz jego encję zadania AI w opcjach Device Inventory.", manualAiNothing: "Nic do zrobienia: każde urządzenie z tej karty z modelem ma już instrukcję.", manualAiDone: "Znaleziono instrukcji: {found}, nie znaleziono: {none}", manualAiQuota: "Limit lub kwota zapytań AI zostały wyczerpane. Przed zatrzymaniem znaleziono {found} instrukcji. Spróbuj później (darmowe limity odnawiają się codziennie lub co minutę).", manualAiError: "Usługa AI zgłosiła błąd: {error}", manualAiNoneFound: "Dla tych urządzeń nie znaleziono instrukcji. Wiele urządzeń nie ma publicznej instrukcji – w edytorze urządzenia możesz wpisać własny link lub wgrać PDF.", manualCopyBtn: "Skopiuj pliki PDF instrukcji z tej karty do Home Assistant", manualCopyAsk: "Skopiować pliki PDF {n} instrukcji do Home Assistant (zapisane lokalnie, działają bez internetu)?", manualCopyNothing: "Nic do skopiowania: każdy link do instrukcji na tej karcie jest już zapisany lokalnie lub nie jest plikiem PDF.", manualCopyDone: "Skopiowano PDF: {copied}, nieudane: {failed} (nie PDF lub niedostępny)", manualArchived: "zarchiwizowano", manualDocs: "dokumenty", manualAdd: "Dodaj instrukcję (link lub własny PDF)", manualOwn: "Własny dokument", manualUploaded: "wgrano", manualDocDel: "Usunąć ten dokument?", manualUploadHint: "Wgraj własne pliki (dowolny typ: PDF, Excel, Word, CSV, obrazy …; kilka naraz, także stare instrukcje, których nie ma już w internecie). Są przechowywane w Twoim Home Assistant i nigdy nie są zastępowane przez AI. Pliki PDF otwierają się w przeglądarce, pozostałe są pobierane.", manualAiImages: "Dodano zdjęć produktów: {n} (tylko oryginalne obrazy producenta)", aiProgress: "Wyszukiwanie instrukcji przez AI …", aiCancel: "Anuluj", aiFoundN: "znaleziono: {n}", aiStopped: "Wyszukiwanie przerwane.", autoPause: "Wstrzymaj automatyczne odświeżanie (wszystkie karty)", autoPaused: "Automatyczne odświeżanie wstrzymane – kliknij, aby wznowić", manualLinkWeb: "Strona internetowa", manualLinkDel: "Usunąć ten link?", manualMoreLink: "Dodaj kolejny link (baza wiedzy, karta katalogowa …)", manualLinkTitle: "Tytuł (opcjonalnie)", manualLinkAdd: "Dodaj link", manualLinkSec: "Link do instrukcji", manualMoreSec: "Więcej linków", sSave: "Zapisz", sUpload: "Wgraj", sAi: "Szukaj AI", sArchive: "Archiwizuj", sRemove: "Usuń", sAdd: "Dodaj", all: "Wszystkie urządzenia", other: "Inne", status: "Stan", name: "Urządzenie", model: "Model", area: "Pomieszczenie", ip: "IP", mac: "MAC", maker: "Producent", fw: "Oprogramowanie", added: "Dodano", seen: "Widziano", battery: "Bat.", photos: "Zdjęcia", note: "Notatka", printColorOn: "Wydruk w kolorze (kliknij, aby uzyskać czarno-biały)", printColorOff: "Wydruk czarno-biały (kliknij, aby uzyskać kolor)", denseOn: "Większy odstęp między wierszami", denseOff: "Mniejszy odstęp między wierszami", commentsOff: "Ukryj tekst komentarzy na liście", commentsOn: "Pokaż tekst komentarzy na liście", thumbsOff: "Ukryj miniatury na liście", thumbsOn: "Pokaż miniatury na liście", kidFilterOn: "Rozwijaj tylko podwiersze z komentarzem lub zdjęciem", kidFilterOff: "Rozwiń wszystkie podwiersze", blurOn: "Zamaż adresy IP / MAC (np. do zrzutów ekranu)", blurOff: "Pokaż adresy IP / MAC", print: "Drukuj / PDF", land: "Poziomo", port: "Pionowo", count: "urządzeń", online: "Online", offline: "Offline", addPhoto: "Dodaj zdjęcia", close: "Zamknij", del: "Usuń", save: "Zapisz", cancel: "Anuluj", hint: "Ctrl+Enter = zapisz, Esc = anuluj", delPhoto: "Usunąć to zdjęcie?", delNote: "Usunąć notatkę?", noPhotos: "Brak zdjęć.", noteOf: "Notatka", photosOf: "Zdjęcia", addedTip: "Zarejestrowano w Home Assistant dnia", addedUnknown: "Starsze niż pole daty w rejestrze (przed paź. 2024) – nieznane", mesh: "Połączono z", conn: "Połączenie", lanc: "Klienci LAN", wific: "Klienci WiFi", uploadFail: "Przesyłanie nie powiodło się", saveFail: "Zapis nie powiódł się", printFail: "Drukowanie nie powiodło się", stand: "Stan na", printCols: "Edytuj kolumny (ekran i wydruk)", exportCsv: "Eksportuj jako CSV", copyLayout: "Skopiuj układ kolumn (JSON)", layoutCopied: "Układ kolumn skopiowano do schowka.", importLayout: "Importuj układ kolumn: wklej tutaj JSON", resetAsk: "Zresetować konfigurację tabeli? Wszystkie ustawienia tej strony (widoczne kolumny, kolejność, szerokości, nazwy kolumn) zostaną utracone.", parent: "Urządzenie główne", yes: "tak", rename: "Nazwa kolumny (puste = domyślna)", tgtView: "Ekran", tgtPrint: "Wydruk", done: "Gotowe", reset: "Resetuj", expand: "Pokaż kanały", collapse: "Ukryj kanały", channels: "kanałów", distance: "Odległość", home: "W domu", bleaddr: "MAC BLE", scanner: "Skaner", scannerip: "IP skanera", signal: "Sygnał", temp: "Temp.", ble: "Bluetooth", importDone: "Zaimportowano ze starego pulpitu sieciowego", importNotes: "notatek", importPhotos: "zdjęć", internet: "Internet", allowed: "Dozwolony", blocked: "Zablokowany", blockAsk: "Zablokować dostęp do internetu dla tego urządzenia?", allowAsk: "Zezwolić na dostęp do internetu dla tego urządzenia?", search: "Szukaj", copy: "Kopiuj", refresh: "Odśwież", low: "Niski", ok: "OK", batteries: "Baterie", adminOnly: "Wymagany administrator" },
  pt: { ipOf: "Endereço IP", ipSuggest: "Sugestões do router (clique para usar)", ipSuggestTip: "O dispositivo não indica endereço: há uma sugestão", ipEditTip: "Introduzir um endereço IP", ipManualTip: "Endereço introduzido manualmente", ipStale: "Último endereço conhecido (o dispositivo não indica nenhum neste momento)", vehicles: "Veículos", media: "Multimédia", appliances: "Eletrodomésticos", cameras: "Câmaras / campainhas", network: "Rede e escritório", energy: "Energia", files: "Ficheiros", manualSecWarn: "Não é um local para credenciais: não guarde aqui palavras-passe, dados de acesso, tokens nem chaves. Qualquer utilizador com sessão iniciada no Home Assistant pode abrir estes ficheiros, e estão sem encriptação na pasta config.", manualLocalRead: "Lido da página web local do dispositivo", manualAiNoneTitle: "Nada encontrado", manualHintAsk: "A IA não encontrou nenhum manual para este dispositivo. Introduza mais informações (designação exata do tipo, número de artigo, ano …) e pesquise novamente:", manualHintSec: "Dica para a IA (opcional)", manualHintPh: "Informações para identificar o produto: designação exata do tipo, número de artigo, ano …", manualHintTip: "Dica: introduza a designação exata do tipo ou o número de artigo no campo de dica para a IA e pesquise novamente.", manual: "Manual", manualOf: "Documentos", manualLink: "Abrir o manual", manualLocal: "Abrir a cópia local (PDF)", manualUrlHint: "Link para o manual (vazio = pesquisa automática)", manualSave: "Guardar link", manualFetch: "Copiar o PDF para o Home Assistant", manualUpload: "Enviar documento", manualRemove: "Remover manual", manualNone: "Sem cópia local", manualLocalCopy: "Cópia local", manualFail: "Falha no manual", manualAiBtn: "Encontrar manuais e fotos de produto com IA (neste separador)", manualAiFind: "Encontrar com IA", manualAiLink: "Manual (encontrado pela IA) – verifique-o", manualAiAsk: "Pedir à IA os manuais de {n} dispositivos deste separador? Só o fabricante e o modelo são enviados ao seu serviço de IA; cada endereço é verificado antes de ser guardado. Os dispositivos sem foto recebem também uma foto original do produto do fabricante. Nos dispositivos de rede sem modelo, é enviado o nome do dispositivo.", manualAiNone: "Não há nenhuma IA configurada. Adicione um fornecedor de IA no Home Assistant (Definições → Dispositivos e serviços, p. ex. Google Generative AI, OpenAI ou Anthropic) e escolha depois a sua entidade de tarefa de IA nas opções do Device Inventory.", manualAiNothing: "Nada a fazer: todos os dispositivos deste separador com modelo já têm manual.", manualAiDone: "{found} manuais encontrados, {none} não encontrados", manualAiQuota: "A quota ou o limite de pedidos da IA foi esgotado. Foram encontrados {found} manuais antes de parar. Tente mais tarde (as quotas gratuitas renovam-se diariamente ou por minuto).", manualAiError: "O serviço de IA comunicou um erro: {error}", manualAiNoneFound: "Não foram encontrados manuais para estes dispositivos. Muitos dispositivos não têm manual público – pode introduzir o seu próprio link ou enviar um PDF no editor do dispositivo.", manualCopyBtn: "Copiar os PDF dos manuais deste separador para o Home Assistant", manualCopyAsk: "Copiar os PDF de {n} manuais para o Home Assistant (guardados localmente, funcionam sem internet)?", manualCopyNothing: "Nada a copiar: todos os links de manuais deste separador já estão guardados localmente ou não são PDF.", manualCopyDone: "{copied} PDF copiados, {failed} falharam (não é PDF ou inacessível)", manualArchived: "arquivado em", manualDocs: "documentos", manualAdd: "Adicionar um manual (link ou PDF próprio)", manualOwn: "Documento próprio", manualUploaded: "enviado", manualDocDel: "Eliminar este documento?", manualUploadHint: "Envie os seus próprios ficheiros (qualquer tipo: PDF, Excel, Word, CSV, imagens …; vários de uma vez, também manuais antigos que já não existem na internet). Ficam no seu Home Assistant e nunca são substituídos pela IA. Os PDF abrem no navegador, os outros ficheiros são descarregados.", manualAiImages: "{n} fotos de produto adicionadas (apenas imagens originais do fabricante)", aiProgress: "A procurar manuais com IA …", aiCancel: "Cancelar", aiFoundN: "{n} encontrados", aiStopped: "Pesquisa cancelada.", autoPause: "Pausar a atualização automática (todos os separadores)", autoPaused: "A atualização automática está em pausa – clique para retomar", manualLinkWeb: "Página web", manualLinkDel: "Remover este link?", manualMoreLink: "Adicionar outro link (base de conhecimento, ficha técnica …)", manualLinkTitle: "Título (opcional)", manualLinkAdd: "Adicionar link", manualLinkSec: "Link para o manual", manualMoreSec: "Mais links", sSave: "Guardar", sUpload: "Enviar", sAi: "Pesquisa IA", sArchive: "Arquivar", sRemove: "Remover", sAdd: "Adicionar", all: "Todos os dispositivos", other: "Outros", status: "Estado", name: "Dispositivo", model: "Modelo", area: "Divisão", ip: "IP", mac: "MAC", maker: "Fabricante", fw: "Firmware", added: "Adicionado", seen: "Visto", battery: "Bat.", photos: "Fotos", note: "Nota", printColorOn: "Impressão a cores (clique para preto e branco)", printColorOff: "Impressão a preto e branco (clique para cores)", denseOn: "Maior espaçamento entre linhas", denseOff: "Menor espaçamento entre linhas", commentsOff: "Ocultar o texto dos comentários na lista", commentsOn: "Mostrar o texto dos comentários na lista", thumbsOff: "Ocultar as miniaturas na lista", thumbsOn: "Mostrar as miniaturas na lista", kidFilterOn: "Expandir apenas as sublinhas com comentário ou foto", kidFilterOff: "Expandir todas as sublinhas", blurOn: "Desfocar os endereços IP / MAC (p. ex. para capturas de ecrã)", blurOff: "Mostrar os endereços IP / MAC", print: "Imprimir / PDF", land: "Horizontal", port: "Vertical", count: "dispositivos", online: "Online", offline: "Offline", addPhoto: "Adicionar fotos", close: "Fechar", del: "Eliminar", save: "Guardar", cancel: "Cancelar", hint: "Ctrl+Enter = guardar, Esc = cancelar", delPhoto: "Eliminar esta foto?", delNote: "Eliminar a nota?", noPhotos: "Ainda sem fotos.", noteOf: "Nota", photosOf: "Fotos", addedTip: "Registado no Home Assistant em", addedUnknown: "Anterior ao campo de data do registo (antes de out. 2024) – desconhecido", mesh: "Ligado a", conn: "Ligação", lanc: "Clientes LAN", wific: "Clientes WiFi", uploadFail: "Falha no envio", saveFail: "Falha ao guardar", printFail: "Falha ao imprimir", stand: "Estado em", printCols: "Editar colunas (ecrã e impressão)", exportCsv: "Exportar como CSV", copyLayout: "Copiar a disposição das colunas (JSON)", layoutCopied: "Disposição das colunas copiada para a área de transferência.", importLayout: "Importar uma disposição de colunas: cole aqui o JSON", resetAsk: "Repor a configuração da tabela? Todas as definições deste lado (colunas mostradas, ordem, larguras, nomes das colunas) serão perdidas.", parent: "Dispositivo principal", yes: "sim", rename: "Nome da coluna (vazio = predefinido)", tgtView: "Ecrã", tgtPrint: "Impressão", done: "Concluído", reset: "Repor", expand: "Mostrar canais", collapse: "Ocultar canais", channels: "canais", distance: "Distância", home: "Em casa", bleaddr: "MAC BLE", scanner: "Scanner", scannerip: "IP do scanner", signal: "Sinal", temp: "Temp.", ble: "Bluetooth", importDone: "Importado do antigo painel de rede", importNotes: "notas", importPhotos: "fotos", internet: "Internet", allowed: "Permitido", blocked: "Bloqueado", blockAsk: "Bloquear o acesso à Internet deste dispositivo?", allowAsk: "Permitir o acesso à Internet deste dispositivo?", search: "Pesquisar", copy: "Copiar", refresh: "Atualizar", low: "Baixa", ok: "OK", batteries: "Baterias", adminOnly: "É necessário ser administrador" },
  cs: { ipOf: "IP adresa", ipSuggest: "Návrhy z routeru (kliknutím použijete)", ipSuggestTip: "Zařízení nehlásí adresu: je k dispozici návrh", ipEditTip: "Zadat IP adresu", ipManualTip: "Ručně zadaná adresa", ipStale: "Poslední známá adresa (zařízení teď žádnou nehlásí)", vehicles: "Vozidla", media: "Média", appliances: "Spotřebiče", cameras: "Kamery / zvonky", network: "Síť a kancelář", energy: "Energie", files: "Soubory", manualSecWarn: "Není to místo pro přístupové údaje: neukládejte sem hesla, přihlašovací údaje, tokeny ani klíče. Tyto soubory může otevřít každý přihlášený uživatel Home Assistantu a leží nešifrovaně ve složce config.", manualLocalRead: "Přečteno z místní webové stránky zařízení", manualAiNoneTitle: "Nic nenalezeno", manualHintAsk: "AI pro toto zařízení nenašla žádný návod. Zadejte další informace (přesné typové označení, číslo artiklu, rok …) a hledejte znovu:", manualHintSec: "Nápověda pro AI (volitelné)", manualHintPh: "Informace k určení produktu: přesné typové označení, číslo artiklu, rok …", manualHintTip: "Tip: zadejte do pole nápovědy pro AI přesné typové označení nebo číslo artiklu a hledejte znovu.", manual: "Návod", manualOf: "Dokumenty", manualLink: "Otevřít návod", manualLocal: "Otevřít místní kopii (PDF)", manualUrlHint: "Odkaz na návod (prázdné = automatické vyhledání)", manualSave: "Uložit odkaz", manualFetch: "Zkopírovat PDF do Home Assistantu", manualUpload: "Nahrát dokument", manualRemove: "Odebrat návod", manualNone: "Žádná místní kopie", manualLocalCopy: "Místní kopie", manualFail: "Návod se nezdařil", manualAiBtn: "Najít návody a fotografie produktů pomocí AI (pro tuto záložku)", manualAiFind: "Najít pomocí AI", manualAiLink: "Návod (nalezený AI) – zkontrolujte ho", manualAiAsk: "Zeptat se AI na návody pro {n} zařízení z této záložky? Vaší službě AI se posílá jen výrobce a model; každá adresa se před uložením ověří. Zařízení bez fotografie dostanou také originální fotografii produktu od výrobce. U síťových zařízení bez modelu se místo toho posílá název zařízení.", manualAiNone: "Není nastavena žádná AI. Přidejte v Home Assistantu poskytovatele AI (Nastavení → Zařízení a služby, např. Google Generative AI, OpenAI nebo Anthropic) a poté vyberte jeho entitu úlohy AI v možnostech Device Inventory.", manualAiNothing: "Není co dělat: každé zařízení této záložky s modelem už má návod.", manualAiDone: "Nalezeno návodů: {found}, nenalezeno: {none}", manualAiQuota: "Kvóta nebo limit požadavků AI je vyčerpán. Před zastavením bylo nalezeno {found} návodů. Zkuste to později (bezplatné kvóty se obnovují denně nebo každou minutu).", manualAiError: "Služba AI hlásí chybu: {error}", manualAiNoneFound: "Pro tato zařízení nebyly nalezeny žádné návody. Mnoho zařízení nemá veřejný návod – v editoru zařízení můžete zadat vlastní odkaz nebo nahrát PDF.", manualCopyBtn: "Zkopírovat PDF návodů z této záložky do Home Assistantu", manualCopyAsk: "Zkopírovat PDF {n} návodů do Home Assistantu (uložené lokálně, fungují bez internetu)?", manualCopyNothing: "Není co kopírovat: každý odkaz na návod v této záložce je už uložen lokálně nebo to není PDF.", manualCopyDone: "Zkopírováno PDF: {copied}, selhalo: {failed} (není PDF nebo nedostupné)", manualArchived: "archivováno", manualDocs: "dokumenty", manualAdd: "Přidat návod (odkaz nebo vlastní PDF)", manualOwn: "Vlastní dokument", manualUploaded: "nahráno", manualDocDel: "Smazat tento dokument?", manualUploadHint: "Nahrajte vlastní soubory (libovolný typ: PDF, Excel, Word, CSV, obrázky …; i více najednou, také staré návody, které už na internetu nejsou). Jsou uloženy ve vašem Home Assistantu a AI je nikdy nenahradí. PDF se otevřou v prohlížeči, ostatní soubory se stáhnou.", manualAiImages: "Přidáno fotografií produktů: {n} (pouze originální obrázky výrobce)", aiProgress: "Hledání návodů pomocí AI …", aiCancel: "Zrušit", aiFoundN: "nalezeno: {n}", aiStopped: "Hledání zrušeno.", autoPause: "Pozastavit automatickou aktualizaci (všechny záložky)", autoPaused: "Automatická aktualizace je pozastavena – kliknutím pokračujte", manualLinkWeb: "Webová stránka", manualLinkDel: "Odebrat tento odkaz?", manualMoreLink: "Přidat další odkaz (znalostní báze, datasheet …)", manualLinkTitle: "Název (volitelné)", manualLinkAdd: "Přidat odkaz", manualLinkSec: "Odkaz na návod", manualMoreSec: "Další odkazy", sSave: "Uložit", sUpload: "Nahrát", sAi: "Hledat AI", sArchive: "Archivovat", sRemove: "Odebrat", sAdd: "Přidat", all: "Všechna zařízení", other: "Ostatní", status: "Stav", name: "Zařízení", model: "Model", area: "Místnost", ip: "IP", mac: "MAC", maker: "Výrobce", fw: "Firmware", added: "Přidáno", seen: "Viděno", battery: "Bat.", photos: "Fotky", note: "Poznámka", printColorOn: "Tisk barevně (kliknutím černobíle)", printColorOff: "Tisk černobíle (kliknutím barevně)", denseOn: "Větší řádkování", denseOff: "Menší řádkování", commentsOff: "Skrýt text komentářů v seznamu", commentsOn: "Zobrazit text komentářů v seznamu", thumbsOff: "Skrýt náhledy v seznamu", thumbsOn: "Zobrazit náhledy v seznamu", kidFilterOn: "Rozbalit jen podřádky s komentářem nebo fotkou", kidFilterOff: "Rozbalit všechny podřádky", blurOn: "Rozmazat adresy IP / MAC (např. pro snímky obrazovky)", blurOff: "Zobrazit adresy IP / MAC", print: "Tisk / PDF", land: "Na šířku", port: "Na výšku", count: "zařízení", online: "Online", offline: "Offline", addPhoto: "Přidat fotky", close: "Zavřít", del: "Smazat", save: "Uložit", cancel: "Zrušit", hint: "Ctrl+Enter = uložit, Esc = zrušit", delPhoto: "Smazat tuto fotku?", delNote: "Smazat poznámku?", noPhotos: "Zatím žádné fotky.", noteOf: "Poznámka", photosOf: "Fotky", addedTip: "Zaregistrováno v Home Assistant dne", addedUnknown: "Starší než pole data v registru (před říj. 2024) – neznámé", mesh: "Připojeno k", conn: "Připojení", lanc: "Klienti LAN", wific: "Klienti WiFi", uploadFail: "Nahrávání se nezdařilo", saveFail: "Uložení se nezdařilo", printFail: "Tisk se nezdařil", stand: "Stav k", printCols: "Upravit sloupce (zobrazení a tisk)", exportCsv: "Exportovat jako CSV", copyLayout: "Zkopírovat rozložení sloupců (JSON)", layoutCopied: "Rozložení sloupců bylo zkopírováno do schránky.", importLayout: "Importovat rozložení sloupců: vložte sem JSON", resetAsk: "Obnovit konfiguraci tabulky? Všechna nastavení této strany (zobrazené sloupce, pořadí, šířky, názvy sloupců) budou ztracena.", parent: "Hlavní zařízení", yes: "ano", rename: "Název sloupce (prázdné = výchozí)", tgtView: "Zobrazení", tgtPrint: "Tisk", done: "Hotovo", reset: "Obnovit", expand: "Zobrazit kanály", collapse: "Skrýt kanály", channels: "kanálů", distance: "Vzdálenost", home: "Doma", bleaddr: "BLE MAC", scanner: "Skener", scannerip: "IP skeneru", signal: "Signál", temp: "Teplota", ble: "Bluetooth", importDone: "Importováno ze starého síťového panelu", importNotes: "poznámek", importPhotos: "fotek", internet: "Internet", allowed: "Povoleno", blocked: "Blokováno", blockAsk: "Zablokovat přístup k internetu pro toto zařízení?", allowAsk: "Povolit přístup k internetu pro toto zařízení?", search: "Hledat", copy: "Kopírovat", refresh: "Obnovit", low: "Nízká", ok: "OK", batteries: "Baterie", adminOnly: "Vyžadován správce" },
  ru: { ipOf: "IP-адрес", ipSuggest: "Предложения от роутера (нажмите, чтобы использовать)", ipSuggestTip: "Устройство не сообщает адрес: есть предложение", ipEditTip: "Ввести IP-адрес", ipManualTip: "Адрес введён вручную", ipStale: "Последний известный адрес (сейчас устройство его не сообщает)", vehicles: "Транспорт", media: "Медиа", appliances: "Бытовая техника", cameras: "Камеры / дверные звонки", network: "Сеть и офис", energy: "Энергия", files: "Файлы", manualSecWarn: "Здесь не место для учётных данных: не храните тут пароли, данные доступа, токены и ключи. Любой вошедший пользователь Home Assistant может открыть эти файлы, а лежат они в папке config в незашифрованном виде.", manualLocalRead: "Считано с локальной веб-страницы устройства", manualAiNoneTitle: "Ничего не найдено", manualHintAsk: "ИИ не нашёл инструкцию для этого устройства. Введите дополнительные сведения (точное обозначение типа, артикул, год …) и повторите поиск:", manualHintSec: "Подсказка для ИИ (необязательно)", manualHintPh: "Сведения для определения изделия: точное обозначение типа, артикул, год …", manualHintTip: "Совет: введите в поле подсказки для ИИ точное обозначение типа или артикул и повторите поиск.", manual: "Инструкция", manualOf: "Документы", manualLink: "Открыть инструкцию", manualLocal: "Открыть локальную копию (PDF)", manualUrlHint: "Ссылка на инструкцию (пусто = автоматический поиск)", manualSave: "Сохранить ссылку", manualFetch: "Скопировать PDF в Home Assistant", manualUpload: "Загрузить документ", manualRemove: "Удалить инструкцию", manualNone: "Нет локальной копии", manualLocalCopy: "Локальная копия", manualFail: "Ошибка с инструкцией", manualAiBtn: "Найти инструкции и фото изделий с помощью ИИ (для этой вкладки)", manualAiFind: "Найти с помощью ИИ", manualAiLink: "Инструкция (найдена ИИ) – проверьте её", manualAiAsk: "Запросить у ИИ инструкции для {n} устройств этой вкладки? В вашу службу ИИ отправляются только производитель и модель; каждый адрес проверяется перед сохранением. Устройства без фото получают также оригинальное фото изделия от производителя. Для сетевых устройств без модели вместо этого отправляется имя устройства.", manualAiNone: "ИИ не настроен. Добавьте поставщика ИИ в Home Assistant (Настройки → Устройства и службы, например Google Generative AI, OpenAI или Anthropic), затем выберите его сущность задачи ИИ в параметрах Device Inventory.", manualAiNothing: "Делать нечего: у каждого устройства этой вкладки с моделью уже есть инструкция.", manualAiDone: "Найдено инструкций: {found}, не найдено: {none}", manualAiQuota: "Квота или лимит запросов ИИ исчерпаны. До остановки найдено инструкций: {found}. Повторите позже (бесплатные квоты обновляются ежедневно или поминутно).", manualAiError: "Служба ИИ сообщила об ошибке: {error}", manualAiNoneFound: "Для этих устройств инструкции не найдены. У многих устройств нет общедоступной инструкции – в редакторе устройства можно ввести свою ссылку или загрузить PDF.", manualCopyBtn: "Скопировать PDF инструкций этой вкладки в Home Assistant", manualCopyAsk: "Скопировать PDF для {n} инструкций в Home Assistant (хранятся локально, работают без интернета)?", manualCopyNothing: "Копировать нечего: каждая ссылка на инструкцию этой вкладки уже сохранена локально или не является PDF.", manualCopyDone: "Скопировано PDF: {copied}, ошибок: {failed} (не PDF или недоступно)", manualArchived: "архивировано", manualDocs: "документы", manualAdd: "Добавить инструкцию (ссылка или свой PDF)", manualOwn: "Собственный документ", manualUploaded: "загружено", manualDocDel: "Удалить этот документ?", manualUploadHint: "Загружайте свои файлы (любого типа: PDF, Excel, Word, CSV, изображения …; сразу несколько, в том числе старые инструкции, которых больше нет в интернете). Они хранятся в вашем Home Assistant и никогда не заменяются ИИ. PDF открываются в браузере, остальные файлы скачиваются.", manualAiImages: "Добавлено фото изделий: {n} (только оригинальные изображения производителя)", aiProgress: "Поиск инструкций с помощью ИИ …", aiCancel: "Отмена", aiFoundN: "найдено: {n}", aiStopped: "Поиск отменён.", autoPause: "Приостановить автоматическое обновление (все вкладки)", autoPaused: "Автоматическое обновление приостановлено – нажмите, чтобы продолжить", manualLinkWeb: "Веб-страница", manualLinkDel: "Удалить эту ссылку?", manualMoreLink: "Добавить ещё ссылку (база знаний, даташит …)", manualLinkTitle: "Название (необязательно)", manualLinkAdd: "Добавить ссылку", manualLinkSec: "Ссылка на инструкцию", manualMoreSec: "Другие ссылки", sSave: "Сохранить", sUpload: "Загрузить", sAi: "Поиск ИИ", sArchive: "Архивировать", sRemove: "Удалить", sAdd: "Добавить", all: "Все устройства", other: "Прочее", status: "Статус", name: "Устройство", model: "Модель", area: "Помещение", ip: "IP", mac: "MAC", maker: "Производитель", fw: "Прошивка", added: "Добавлено", seen: "Замечено", battery: "Бат.", photos: "Фото", note: "Заметка", printColorOn: "Цветная печать (щёлкните для чёрно-белой)", printColorOff: "Чёрно-белая печать (щёлкните для цветной)", denseOn: "Больший межстрочный интервал", denseOff: "Меньший межстрочный интервал", commentsOff: "Скрыть текст комментариев в списке", commentsOn: "Показать текст комментариев в списке", thumbsOff: "Скрыть миниатюры в списке", thumbsOn: "Показать миниатюры в списке", kidFilterOn: "Раскрывать только подстроки с комментарием или фото", kidFilterOff: "Раскрыть все подстроки", blurOn: "Размыть адреса IP / MAC (например, для скриншотов)", blurOff: "Показать адреса IP / MAC", print: "Печать / PDF", land: "Альбомная", port: "Книжная", count: "устройств", online: "В сети", offline: "Не в сети", addPhoto: "Добавить фото", close: "Закрыть", del: "Удалить", save: "Сохранить", cancel: "Отмена", hint: "Ctrl+Enter = сохранить, Esc = отмена", delPhoto: "Удалить это фото?", delNote: "Удалить заметку?", noPhotos: "Пока нет фото.", noteOf: "Заметка", photosOf: "Фото", addedTip: "Зарегистрировано в Home Assistant", addedUnknown: "Старше поля даты в реестре (до окт. 2024) – неизвестно", mesh: "Подключено к", conn: "Подключение", lanc: "Клиенты LAN", wific: "Клиенты WiFi", uploadFail: "Не удалось загрузить", saveFail: "Не удалось сохранить", printFail: "Не удалось напечатать", stand: "Состояние на", printCols: "Изменить столбцы (экран и печать)", exportCsv: "Экспорт в CSV", copyLayout: "Скопировать раскладку столбцов (JSON)", layoutCopied: "Раскладка столбцов скопирована в буфер обмена.", importLayout: "Импорт раскладки столбцов: вставьте сюда JSON", resetAsk: "Сбросить настройки таблицы? Все настройки этой стороны (показанные столбцы, порядок, ширина, названия столбцов) будут потеряны.", parent: "Основное устройство", yes: "да", rename: "Название столбца (пусто = по умолчанию)", tgtView: "Экран", tgtPrint: "Печать", done: "Готово", reset: "Сбросить", expand: "Показать каналы", collapse: "Скрыть каналы", channels: "каналов", distance: "Расстояние", home: "Дома", bleaddr: "BLE MAC", scanner: "Сканер", scannerip: "IP сканера", signal: "Сигнал", temp: "Темп.", ble: "Bluetooth", importDone: "Импортировано из старой сетевой панели", importNotes: "заметок", importPhotos: "фото", internet: "Интернет", allowed: "Разрешён", blocked: "Заблокирован", blockAsk: "Заблокировать доступ в интернет для этого устройства?", allowAsk: "Разрешить доступ в интернет для этого устройства?", search: "Поиск", copy: "Копировать", refresh: "Обновить", low: "Низкий", ok: "OK", batteries: "Батареи", adminOnly: "Требуется администратор" },
  sv: { ipOf: "IP-adress", ipSuggest: "Förslag från routern (klicka för att använda)", ipSuggestTip: "Enheten rapporterar ingen adress: förslag finns", ipEditTip: "Ange en IP-adress", ipManualTip: "Manuellt angiven adress", ipStale: "Senast kända adress (enheten rapporterar ingen just nu)", vehicles: "Fordon", media: "Media", appliances: "Hushållsapparater", cameras: "Kameror / dörrklockor", network: "Nätverk & kontor", energy: "Energi", files: "Filer", manualSecWarn: "Ingen plats för inloggningsuppgifter: spara inga lösenord, åtkomstuppgifter, token eller nycklar här. Varje inloggad Home Assistant-användare kan öppna filerna, och de ligger okrypterade i config-mappen.", manualLocalRead: "Läst från enhetens lokala webbsida", manualAiNoneTitle: "Hittade inget", manualHintAsk: "AI hittade ingen manual för den här enheten. Ange mer information (exakt typbeteckning, artikelnummer, årtal …) och sök igen:", manualHintSec: "Tips till AI (valfritt)", manualHintPh: "Information för att identifiera produkten: exakt typbeteckning, artikelnummer, årtal …", manualHintTip: "Tips: ange exakt typbeteckning eller artikelnummer i tipsfältet för AI och sök igen.", manual: "Manual", manualOf: "Dokument", manualLink: "Öppna manualen", manualLocal: "Öppna den lokala kopian (PDF)", manualUrlHint: "Länk till manualen (tomt = automatisk sökning)", manualSave: "Spara länk", manualFetch: "Kopiera PDF:en till Home Assistant", manualUpload: "Ladda upp dokument", manualRemove: "Ta bort manual", manualNone: "Ingen lokal kopia", manualLocalCopy: "Lokal kopia", manualFail: "Manualen misslyckades", manualAiBtn: "Hitta manualer och produktfoton med AI (för den här fliken)", manualAiFind: "Hitta med AI", manualAiLink: "Manual (hittad av AI) – kontrollera den", manualAiAsk: "Fråga AI efter manualerna för {n} enheter på den här fliken? Endast tillverkare och modell skickas till din AI-tjänst; varje adress kontrolleras innan den sparas. Enheter utan foto får också ett originalfoto av produkten från tillverkaren. För nätverksenheter utan modell skickas enhetens namn i stället.", manualAiNone: "Ingen AI är konfigurerad. Lägg till en AI-leverantör i Home Assistant (Inställningar → Enheter och tjänster, t.ex. Google Generative AI, OpenAI eller Anthropic) och välj sedan dess AI-uppgiftsentitet i alternativen för Device Inventory.", manualAiNothing: "Inget att göra: varje enhet på den här fliken med modell har redan en manual.", manualAiDone: "{found} manualer hittades, {none} hittades inte", manualAiQuota: "AI:ns kvot eller anropsgräns är slut. {found} manualer hittades innan det stoppade. Försök igen senare (gratiskvoter förnyas dagligen eller per minut).", manualAiError: "AI-tjänsten rapporterade ett fel: {error}", manualAiNoneFound: "Inga manualer hittades för de här enheterna. Många enheter saknar offentlig manual – du kan ange en egen länk eller ladda upp en PDF i enhetens redigerare.", manualCopyBtn: "Kopiera manual-PDF:erna på den här fliken till Home Assistant", manualCopyAsk: "Kopiera PDF:erna för {n} manualer till Home Assistant (lagras lokalt, fungerar utan internet)?", manualCopyNothing: "Inget att kopiera: varje manuallänk på den här fliken är redan lagrad lokalt eller är ingen PDF.", manualCopyDone: "{copied} PDF:er kopierade, {failed} misslyckades (ingen PDF eller inte nåbar)", manualArchived: "arkiverad", manualDocs: "dokument", manualAdd: "Lägg till en manual (länk eller egen PDF)", manualOwn: "Eget dokument", manualUploaded: "uppladdat", manualDocDel: "Ta bort det här dokumentet?", manualUploadHint: "Ladda upp dina egna filer (valfri typ: PDF, Excel, Word, CSV, bilder …; flera samtidigt, även gamla manualer som inte längre finns på internet). De lagras i din Home Assistant och ersätts aldrig av AI. PDF-filer öppnas i webbläsaren, andra filer laddas ned.", manualAiImages: "{n} produktfoton tillagda (endast originalbilder från tillverkaren)", aiProgress: "Söker manualer med AI …", aiCancel: "Avbryt", aiFoundN: "{n} hittade", aiStopped: "Sökningen avbröts.", autoPause: "Pausa den automatiska uppdateringen (alla flikar)", autoPaused: "Automatisk uppdatering är pausad – klicka för att återuppta", manualLinkWeb: "Webbsida", manualLinkDel: "Ta bort den här länken?", manualMoreLink: "Lägg till en länk till (kunskapsbas, datablad …)", manualLinkTitle: "Titel (valfritt)", manualLinkAdd: "Lägg till länk", manualLinkSec: "Länk till manualen", manualMoreSec: "Fler länkar", sSave: "Spara", sUpload: "Ladda upp", sAi: "AI-sökning", sArchive: "Arkivera", sRemove: "Ta bort", sAdd: "Lägg till", all: "Alla enheter", other: "Övrigt", status: "Status", name: "Enhet", model: "Modell", area: "Rum", ip: "IP", mac: "MAC", maker: "Tillverkare", fw: "Firmware", added: "Tillagd", seen: "Senast sedd", battery: "Batt.", photos: "Foton", note: "Anteckning", printColorOn: "Utskrift i färg (klicka för svartvitt)", printColorOff: "Utskrift i svartvitt (klicka för färg)", denseOn: "Större radavstånd", denseOff: "Mindre radavstånd", commentsOff: "Dölj kommentartexten i listan", commentsOn: "Visa kommentartexten i listan", thumbsOff: "Dölj miniatyrerna i listan", thumbsOn: "Visa miniatyrerna i listan", kidFilterOn: "Fäll bara ut underrader med kommentar eller foto", kidFilterOff: "Fäll ut alla underrader", blurOn: "Sudda ut IP- / MAC-adresser (t.ex. för skärmdumpar)", blurOff: "Visa IP- / MAC-adresser", print: "Skriv ut / PDF", land: "Liggande", port: "Stående", count: "enheter", online: "Online", offline: "Offline", addPhoto: "Lägg till foton", close: "Stäng", del: "Ta bort", save: "Spara", cancel: "Avbryt", hint: "Ctrl+Enter = spara, Esc = avbryt", delPhoto: "Ta bort det här fotot?", delNote: "Ta bort anteckningen?", noPhotos: "Inga foton ännu.", noteOf: "Anteckning", photosOf: "Foton", addedTip: "Registrerad i Home Assistant den", addedUnknown: "Äldre än registrets datumfält (före okt. 2024) – okänt", mesh: "Ansluten till", conn: "Anslutning", lanc: "LAN-klienter", wific: "WiFi-klienter", uploadFail: "Uppladdningen misslyckades", saveFail: "Det gick inte att spara", printFail: "Utskriften misslyckades", stand: "Per", printCols: "Redigera kolumner (skärm och utskrift)", exportCsv: "Exportera som CSV", copyLayout: "Kopiera kolumnlayouten (JSON)", layoutCopied: "Kolumnlayouten kopierades till urklipp.", importLayout: "Importera en kolumnlayout: klistra in JSON här", resetAsk: "Återställa tabellkonfigurationen? Alla inställningar för den här sidan (visade kolumner, ordning, bredder, kolumnnamn) går förlorade.", parent: "Huvudenhet", yes: "ja", rename: "Kolumnnamn (tomt = standard)", tgtView: "Skärm", tgtPrint: "Utskrift", done: "Klart", reset: "Återställ", expand: "Visa kanaler", collapse: "Dölj kanaler", channels: "kanaler", distance: "Avstånd", home: "Hemma", bleaddr: "BLE-MAC", scanner: "Skanner", scannerip: "Skannerns IP", signal: "Signal", temp: "Temp.", ble: "Bluetooth", importDone: "Importerat från den gamla nätverksöversikten", importNotes: "anteckningar", importPhotos: "foton", internet: "Internet", allowed: "Tillåten", blocked: "Blockerad", blockAsk: "Blockera internetåtkomsten för den här enheten?", allowAsk: "Tillåta internetåtkomst för den här enheten?", search: "Sök", copy: "Kopiera", refresh: "Uppdatera", low: "Låg", ok: "OK", batteries: "Batterier", adminOnly: "Administratör krävs" },
  nb: { ipOf: "IP-adresse", ipSuggest: "Forslag fra ruteren (klikk for å bruke)", ipSuggestTip: "Enheten melder ingen adresse: forslag finnes", ipEditTip: "Skriv inn en IP-adresse", ipManualTip: "Manuelt oppgitt adresse", ipStale: "Sist kjente adresse (enheten melder ingen akkurat nå)", vehicles: "Kjøretøy", media: "Media", appliances: "Husholdningsapparater", cameras: "Kameraer / dørklokker", network: "Nettverk og kontor", energy: "Energi", files: "Filer", manualSecWarn: "Ingen plass for påloggingsdata: ikke lagre passord, tilgangsdata, tokener eller nøkler her. Alle innloggede Home Assistant-brukere kan åpne disse filene, og de ligger ukryptert i config-mappen.", manualLocalRead: "Lest fra enhetens lokale nettside", manualAiNoneTitle: "Fant ingenting", manualHintAsk: "KI fant ingen manual for denne enheten. Skriv inn mer informasjon (nøyaktig typebetegnelse, artikkelnummer, årstall …) og søk på nytt:", manualHintSec: "Hint til KI (valgfritt)", manualHintPh: "Informasjon for å identifisere produktet: nøyaktig typebetegnelse, artikkelnummer, årstall …", manualHintTip: "Tips: skriv inn nøyaktig typebetegnelse eller artikkelnummer i hintfeltet for KI og søk på nytt.", manual: "Manual", manualOf: "Dokumenter", manualLink: "Åpne manualen", manualLocal: "Åpne den lokale kopien (PDF)", manualUrlHint: "Lenke til manualen (tom = automatisk søk)", manualSave: "Lagre lenke", manualFetch: "Kopier PDF-en til Home Assistant", manualUpload: "Last opp dokument", manualRemove: "Fjern manual", manualNone: "Ingen lokal kopi", manualLocalCopy: "Lokal kopi", manualFail: "Manualen mislyktes", manualAiBtn: "Finn manualer og produktbilder med KI (for denne fanen)", manualAiFind: "Finn med KI", manualAiLink: "Manual (funnet av KI) – kontroller den", manualAiAsk: "Spørre KI om manualene til {n} enheter i denne fanen? Bare produsent og modell sendes til KI-tjenesten din; hver adresse kontrolleres før den lagres. Enheter uten bilde får også et originalt produktbilde fra produsenten. For nettverksenheter uten modell sendes enhetsnavnet i stedet.", manualAiNone: "Ingen KI er satt opp. Legg til en KI-leverandør i Home Assistant (Innstillinger → Enheter og tjenester, f.eks. Google Generative AI, OpenAI eller Anthropic) og velg deretter KI-oppgaveentiteten i alternativene for Device Inventory.", manualAiNothing: "Ingenting å gjøre: alle enheter i denne fanen med modell har allerede en manual.", manualAiDone: "{found} manualer funnet, {none} ikke funnet", manualAiQuota: "KI-kvoten eller forespørselsgrensen er brukt opp. {found} manualer ble funnet før det stoppet. Prøv igjen senere (gratiskvoter fornyes daglig eller per minutt).", manualAiError: "KI-tjenesten meldte en feil: {error}", manualAiNoneFound: "Ingen manualer ble funnet for disse enhetene. Mange enheter har ingen offentlig manual – du kan skrive inn din egen lenke eller laste opp en PDF i enhetens redigering.", manualCopyBtn: "Kopier manual-PDF-ene i denne fanen til Home Assistant", manualCopyAsk: "Kopiere PDF-ene til {n} manualer til Home Assistant (lagres lokalt, fungerer uten internett)?", manualCopyNothing: "Ingenting å kopiere: hver manuallenke i denne fanen er allerede lagret lokalt eller er ingen PDF.", manualCopyDone: "{copied} PDF-er kopiert, {failed} mislyktes (ingen PDF eller ikke tilgjengelig)", manualArchived: "arkivert", manualDocs: "dokumenter", manualAdd: "Legg til en manual (lenke eller egen PDF)", manualOwn: "Eget dokument", manualUploaded: "lastet opp", manualDocDel: "Slette dette dokumentet?", manualUploadHint: "Last opp dine egne filer (hvilken som helst type: PDF, Excel, Word, CSV, bilder …; flere samtidig, også gamle manualer som ikke lenger finnes på nettet). De lagres i din Home Assistant og erstattes aldri av KI. PDF-er åpnes i nettleseren, andre filer lastes ned.", manualAiImages: "{n} produktbilder lagt til (bare originalbilder fra produsenten)", aiProgress: "Søker etter manualer med KI …", aiCancel: "Avbryt", aiFoundN: "{n} funnet", aiStopped: "Søket ble avbrutt.", autoPause: "Sett den automatiske oppdateringen på pause (alle faner)", autoPaused: "Automatisk oppdatering er satt på pause – klikk for å fortsette", manualLinkWeb: "Nettside", manualLinkDel: "Fjerne denne lenken?", manualMoreLink: "Legg til en lenke til (kunnskapsbase, datablad …)", manualLinkTitle: "Tittel (valgfritt)", manualLinkAdd: "Legg til lenke", manualLinkSec: "Lenke til manualen", manualMoreSec: "Flere lenker", sSave: "Lagre", sUpload: "Last opp", sAi: "KI-søk", sArchive: "Arkiver", sRemove: "Fjern", sAdd: "Legg til", all: "Alle enheter", other: "Annet", status: "Status", name: "Enhet", model: "Modell", area: "Rom", ip: "IP", mac: "MAC", maker: "Produsent", fw: "Firmware", added: "Lagt til", seen: "Sist sett", battery: "Batt.", photos: "Bilder", note: "Notat", printColorOn: "Utskrift i farger (klikk for svart-hvitt)", printColorOff: "Utskrift i svart-hvitt (klikk for farger)", denseOn: "Større linjeavstand", denseOff: "Mindre linjeavstand", commentsOff: "Skjul kommentarteksten i listen", commentsOn: "Vis kommentarteksten i listen", thumbsOff: "Skjul miniatyrbildene i listen", thumbsOn: "Vis miniatyrbildene i listen", kidFilterOn: "Fold bare ut underlinjer med kommentar eller bilde", kidFilterOff: "Fold ut alle underlinjer", blurOn: "Gjør IP- / MAC-adresser uskarpe (f.eks. for skjermbilder)", blurOff: "Vis IP- / MAC-adresser", print: "Skriv ut / PDF", land: "Liggende", port: "Stående", count: "enheter", online: "Online", offline: "Offline", addPhoto: "Legg til bilder", close: "Lukk", del: "Slett", save: "Lagre", cancel: "Avbryt", hint: "Ctrl+Enter = lagre, Esc = avbryt", delPhoto: "Slette dette bildet?", delNote: "Slette notatet?", noPhotos: "Ingen bilder ennå.", noteOf: "Notat", photosOf: "Bilder", addedTip: "Registrert i Home Assistant den", addedUnknown: "Eldre enn registerets datofelt (før okt. 2024) – ukjent", mesh: "Koblet til", conn: "Tilkobling", lanc: "LAN-klienter", wific: "WiFi-klienter", uploadFail: "Opplastingen mislyktes", saveFail: "Lagringen mislyktes", printFail: "Utskriften mislyktes", stand: "Per", printCols: "Rediger kolonner (skjerm og utskrift)", exportCsv: "Eksporter som CSV", copyLayout: "Kopier kolonneoppsettet (JSON)", layoutCopied: "Kolonneoppsettet er kopiert til utklippstavlen.", importLayout: "Importer et kolonneoppsett: lim inn JSON her", resetAsk: "Tilbakestille tabellkonfigurasjonen? Alle innstillinger for denne siden (viste kolonner, rekkefølge, bredder, kolonnenavn) går tapt.", parent: "Hovedenhet", yes: "ja", rename: "Kolonnenavn (tomt = standard)", tgtView: "Skjerm", tgtPrint: "Utskrift", done: "Ferdig", reset: "Tilbakestill", expand: "Vis kanaler", collapse: "Skjul kanaler", channels: "kanaler", distance: "Avstand", home: "Hjemme", bleaddr: "BLE-MAC", scanner: "Skanner", scannerip: "Skannerens IP", signal: "Signal", temp: "Temp.", ble: "Bluetooth", importDone: "Importert fra det gamle nettverksdashbordet", importNotes: "notater", importPhotos: "bilder", internet: "Internett", allowed: "Tillatt", blocked: "Blokkert", blockAsk: "Blokkere internettilgangen for denne enheten?", allowAsk: "Tillate internettilgang for denne enheten?", search: "Søk", copy: "Kopier", refresh: "Oppdater", low: "Lav", ok: "OK", batteries: "Batterier", adminOnly: "Administrator kreves" },
  da: { ipOf: "IP-adresse", ipSuggest: "Forslag fra routeren (klik for at bruge)", ipSuggestTip: "Enheden melder ingen adresse: forslag findes", ipEditTip: "Indtast en IP-adresse", ipManualTip: "Manuelt indtastet adresse", ipStale: "Sidst kendte adresse (enheden melder ingen lige nu)", vehicles: "Køretøjer", media: "Medier", appliances: "Husholdningsapparater", cameras: "Kameraer / dørklokker", network: "Netværk og kontor", energy: "Energi", files: "Filer", manualSecWarn: "Ingen plads til loginoplysninger: gem ikke adgangskoder, adgangsdata, tokens eller nøgler her. Alle loggede Home Assistant-brugere kan åbne disse filer, og de ligger ukrypteret i config-mappen.", manualLocalRead: "Læst fra enhedens lokale webside", manualAiNoneTitle: "Intet fundet", manualHintAsk: "AI fandt ingen manual til denne enhed. Indtast flere oplysninger (nøjagtig typebetegnelse, varenummer, årstal …), og søg igen:", manualHintSec: "Hint til AI (valgfrit)", manualHintPh: "Oplysninger til at identificere produktet: nøjagtig typebetegnelse, varenummer, årstal …", manualHintTip: "Tip: indtast den nøjagtige typebetegnelse eller varenummeret i hintfeltet til AI, og søg igen.", manual: "Manual", manualOf: "Dokumenter", manualLink: "Åbn manualen", manualLocal: "Åbn den lokale kopi (PDF)", manualUrlHint: "Link til manualen (tom = automatisk søgning)", manualSave: "Gem link", manualFetch: "Kopier PDF'en til Home Assistant", manualUpload: "Upload dokument", manualRemove: "Fjern manual", manualNone: "Ingen lokal kopi", manualLocalCopy: "Lokal kopi", manualFail: "Manualen mislykkedes", manualAiBtn: "Find manualer og produktbilleder med AI (for denne fane)", manualAiFind: "Find med AI", manualAiLink: "Manual (fundet af AI) – kontroller den", manualAiAsk: "Spørge AI om manualerne til {n} enheder på denne fane? Kun producent og model sendes til din AI-tjeneste; hver adresse kontrolleres, før den gemmes. Enheder uden billede får også et originalt produktbillede fra producenten. For netværksenheder uden model sendes enhedens navn i stedet.", manualAiNone: "Der er ikke konfigureret nogen AI. Tilføj en AI-udbyder i Home Assistant (Indstillinger → Enheder og tjenester, f.eks. Google Generative AI, OpenAI eller Anthropic), og vælg derefter dens AI-opgaveentitet i indstillingerne for Device Inventory.", manualAiNothing: "Intet at gøre: alle enheder på denne fane med en model har allerede en manual.", manualAiDone: "{found} manualer fundet, {none} ikke fundet", manualAiQuota: "AI'ens kvote eller anmodningsgrænse er brugt op. {found} manualer blev fundet, før det stoppede. Prøv igen senere (gratis kvoter fornyes dagligt eller pr. minut).", manualAiError: "AI-tjenesten meldte en fejl: {error}", manualAiNoneFound: "Der blev ikke fundet nogen manualer til disse enheder. Mange enheder har ingen offentlig manual – du kan indtaste dit eget link eller uploade en PDF i enhedens editor.", manualCopyBtn: "Kopier manual-PDF'erne på denne fane til Home Assistant", manualCopyAsk: "Kopiere PDF'erne til {n} manualer til Home Assistant (gemmes lokalt, virker uden internet)?", manualCopyNothing: "Intet at kopiere: hvert manuallink på denne fane er allerede gemt lokalt eller er ikke en PDF.", manualCopyDone: "{copied} PDF'er kopieret, {failed} mislykkedes (ikke en PDF eller ikke tilgængelig)", manualArchived: "arkiveret", manualDocs: "dokumenter", manualAdd: "Tilføj en manual (link eller egen PDF)", manualOwn: "Eget dokument", manualUploaded: "uploadet", manualDocDel: "Slette dette dokument?", manualUploadHint: "Upload dine egne filer (enhver type: PDF, Excel, Word, CSV, billeder …; flere ad gangen, også gamle manualer, der ikke længere findes på nettet). De gemmes i din Home Assistant og erstattes aldrig af AI. PDF'er åbnes i browseren, andre filer downloades.", manualAiImages: "{n} produktbilleder tilføjet (kun originale billeder fra producenten)", aiProgress: "Søger efter manualer med AI …", aiCancel: "Annuller", aiFoundN: "{n} fundet", aiStopped: "Søgningen blev annulleret.", autoPause: "Sæt den automatiske opdatering på pause (alle faner)", autoPaused: "Automatisk opdatering er sat på pause – klik for at fortsætte", manualLinkWeb: "Webside", manualLinkDel: "Fjerne dette link?", manualMoreLink: "Tilføj endnu et link (vidensbase, datablad …)", manualLinkTitle: "Titel (valgfri)", manualLinkAdd: "Tilføj link", manualLinkSec: "Link til manualen", manualMoreSec: "Flere links", sSave: "Gem", sUpload: "Upload", sAi: "AI-søgning", sArchive: "Arkivér", sRemove: "Fjern", sAdd: "Tilføj", all: "Alle enheder", other: "Andet", status: "Status", name: "Enhed", model: "Model", area: "Rum", ip: "IP", mac: "MAC", maker: "Producent", fw: "Firmware", added: "Tilføjet", seen: "Senest set", battery: "Batt.", photos: "Billeder", note: "Note", printColorOn: "Udskrift i farver (klik for sort-hvid)", printColorOff: "Udskrift i sort-hvid (klik for farver)", denseOn: "Større linjeafstand", denseOff: "Mindre linjeafstand", commentsOff: "Skjul kommentarteksten i listen", commentsOn: "Vis kommentarteksten i listen", thumbsOff: "Skjul miniaturerne i listen", thumbsOn: "Vis miniaturerne i listen", kidFilterOn: "Fold kun underlinjer med kommentar eller billede ud", kidFilterOff: "Fold alle underlinjer ud", blurOn: "Slør IP- / MAC-adresser (f.eks. til skærmbilleder)", blurOff: "Vis IP- / MAC-adresser", print: "Udskriv / PDF", land: "Liggende", port: "Stående", count: "enheder", online: "Online", offline: "Offline", addPhoto: "Tilføj billeder", close: "Luk", del: "Slet", save: "Gem", cancel: "Annuller", hint: "Ctrl+Enter = gem, Esc = annuller", delPhoto: "Slette dette billede?", delNote: "Slette noten?", noPhotos: "Ingen billeder endnu.", noteOf: "Note", photosOf: "Billeder", addedTip: "Registreret i Home Assistant den", addedUnknown: "Ældre end registrets datofelt (før okt. 2024) – ukendt", mesh: "Forbundet til", conn: "Forbindelse", lanc: "LAN-klienter", wific: "WiFi-klienter", uploadFail: "Upload mislykkedes", saveFail: "Gemning mislykkedes", printFail: "Udskrivning mislykkedes", stand: "Pr.", printCols: "Rediger kolonner (skærm og udskrift)", exportCsv: "Eksporter som CSV", copyLayout: "Kopiér kolonneopsætningen (JSON)", layoutCopied: "Kolonneopsætningen er kopieret til udklipsholderen.", importLayout: "Importér en kolonneopsætning: indsæt JSON her", resetAsk: "Nulstille tabelkonfigurationen? Alle indstillinger for denne side (viste kolonner, rækkefølge, bredder, kolonnenavne) går tabt.", parent: "Hovedenhed", yes: "ja", rename: "Kolonnenavn (tomt = standard)", tgtView: "Skærm", tgtPrint: "Udskrift", done: "Færdig", reset: "Nulstil", expand: "Vis kanaler", collapse: "Skjul kanaler", channels: "kanaler", distance: "Afstand", home: "Hjemme", bleaddr: "BLE-MAC", scanner: "Scanner", scannerip: "Scannerens IP", signal: "Signal", temp: "Temp.", ble: "Bluetooth", importDone: "Importeret fra det gamle netværksdashboard", importNotes: "noter", importPhotos: "billeder", internet: "Internet", allowed: "Tilladt", blocked: "Blokeret", blockAsk: "Blokere internetadgangen for denne enhed?", allowAsk: "Tillade internetadgang for denne enhed?", search: "Søg", copy: "Kopiér", refresh: "Opdater", low: "Lav", ok: "OK", batteries: "Batterier", adminOnly: "Administrator påkrævet" },
  af: { ipOf: "IP-adres", ipSuggest: "Voorstelle van die router (klik om te gebruik)", ipSuggestTip: "Die toestel meld geen adres nie: voorstel beskikbaar", ipEditTip: "Voer 'n IP-adres in", ipManualTip: "Met die hand ingevoerde adres", ipStale: "Laaste bekende adres (die toestel meld nou geen nie)", vehicles: "Voertuie", media: "Media", appliances: "Huistoestelle", cameras: "Kameras / deurklokke", network: "Netwerk & kantoor", energy: "Energie", files: "Lêers", manualSecWarn: "Nie 'n plek vir toegangsbewyse nie: moenie wagwoorde, toegangsdata, tokens of sleutels hier stoor nie. Elke ingetekende Home Assistant-gebruiker kan hierdie lêers oopmaak, en hulle lê ongeënkripteer in die config-gids.", manualLocalRead: "Gelees van die toestel se plaaslike webblad", manualAiNoneTitle: "Niks gevind nie", manualHintAsk: "Die KI het geen handleiding vir hierdie toestel gevind nie. Voer meer inligting in (presiese tipebenaming, artikelnommer, jaar …) en soek weer:", manualHintSec: "Wenk vir die KI (opsioneel)", manualHintPh: "Inligting om die produk te identifiseer: presiese tipebenaming, artikelnommer, jaar …", manualHintTip: "Wenk: voer die presiese tipebenaming of artikelnommer in die wenkveld vir die KI in en soek weer.", manual: "Handleiding", manualOf: "Dokumente", manualLink: "Maak die handleiding oop", manualLocal: "Maak die plaaslike kopie (PDF) oop", manualUrlHint: "Skakel na die handleiding (leeg = outomatiese soektog)", manualSave: "Stoor skakel", manualFetch: "Kopieer die PDF na Home Assistant", manualUpload: "Laai dokument op", manualRemove: "Verwyder handleiding", manualNone: "Geen plaaslike kopie", manualLocalCopy: "Plaaslike kopie", manualFail: "Handleiding het misluk", manualAiBtn: "Vind handleidings en produkfoto's met KI (vir hierdie oortjie)", manualAiFind: "Vind met KI", manualAiLink: "Handleiding (deur KI gevind) – kontroleer dit asseblief", manualAiAsk: "Vra die KI na die handleidings van {n} toestelle op hierdie oortjie? Slegs vervaardiger en model word na jou KI-diens gestuur; elke adres word gekontroleer voordat dit gestoor word. Toestelle sonder foto kry ook 'n oorspronklike produkfoto van die vervaardiger. Vir netwerktoestelle sonder model word die toestelnaam in plaas daarvan gestuur.", manualAiNone: "Geen KI is opgestel nie. Voeg 'n KI-verskaffer by in Home Assistant (Instellings → Toestelle en dienste, bv. Google Generative AI, OpenAI of Anthropic) en kies dan sy KI-taak-entiteit in die opsies van Device Inventory.", manualAiNothing: "Niks om te doen nie: elke toestel op hierdie oortjie met 'n model het reeds 'n handleiding.", manualAiDone: "{found} handleidings gevind, {none} nie gevind nie", manualAiQuota: "Die KI se kwota of versoekperk is opgebruik. {found} handleidings is gevind voordat dit gestop het. Probeer later weer (gratis kwotas hernu daagliks of per minuut).", manualAiError: "Die KI-diens het 'n fout gerapporteer: {error}", manualAiNoneFound: "Geen handleidings is vir hierdie toestelle gevind nie. Baie toestelle het geen openbare handleiding nie – jy kan jou eie skakel invoer of 'n PDF in die toestel se redigeerder oplaai.", manualCopyBtn: "Kopieer die handleiding-PDF's van hierdie oortjie na Home Assistant", manualCopyAsk: "Die PDF's van {n} handleidings na Home Assistant kopieer (plaaslik gestoor, werk sonder internet)?", manualCopyNothing: "Niks om te kopieer nie: elke handleidingskakel op hierdie oortjie is reeds plaaslik gestoor of is nie 'n PDF nie.", manualCopyDone: "{copied} PDF's gekopieer, {failed} het misluk (nie 'n PDF nie of nie bereikbaar nie)", manualArchived: "geargiveer op", manualDocs: "dokumente", manualAdd: "Voeg 'n handleiding by (skakel of eie PDF)", manualOwn: "Eie dokument", manualUploaded: "opgelaai", manualDocDel: "Hierdie dokument uitvee?", manualUploadHint: "Laai jou eie lêers op (enige tipe: PDF, Excel, Word, CSV, beelde …; meer as een op 'n slag, ook ou handleidings wat nie meer op die internet bestaan nie). Hulle word op jou Home Assistant gestoor en nooit deur die KI vervang nie. PDF's maak in die blaaier oop, ander lêers word afgelaai.", manualAiImages: "{n} produkfoto's bygevoeg (slegs oorspronklike beelde van die vervaardiger)", aiProgress: "Soek handleidings met KI …", aiCancel: "Kanselleer", aiFoundN: "{n} gevind", aiStopped: "Soektog gekanselleer.", autoPause: "Onderbreek die outomatiese verfrissing (alle oortjies)", autoPaused: "Outomatiese verfrissing is onderbreek – klik om te hervat", manualLinkWeb: "Webbladsy", manualLinkDel: "Hierdie skakel verwyder?", manualMoreLink: "Voeg nog 'n skakel by (kennisbasis, datablad …)", manualLinkTitle: "Titel (opsioneel)", manualLinkAdd: "Voeg skakel by", manualLinkSec: "Skakel na die handleiding", manualMoreSec: "Meer skakels", sSave: "Stoor", sUpload: "Laai op", sAi: "KI-soektog", sArchive: "Argiveer", sRemove: "Verwyder", sAdd: "Voeg by", all: "Alle toestelle", other: "Ander", status: "Status", name: "Toestel", model: "Model", area: "Vertrek", ip: "IP", mac: "MAC", maker: "Vervaardiger", fw: "Firmware", added: "Bygevoeg", seen: "Laas gesien", battery: "Bat.", photos: "Foto's", note: "Nota", printColorOn: "Druk in kleur (klik vir swart-en-wit)", printColorOff: "Druk in swart-en-wit (klik vir kleur)", denseOn: "Groter reëlspasiëring", denseOff: "Kleiner reëlspasiëring", commentsOff: "Versteek die kommentaarteks in die lys", commentsOn: "Wys die kommentaarteks in die lys", thumbsOff: "Versteek die kleinbeelde in die lys", thumbsOn: "Wys die kleinbeelde in die lys", kidFilterOn: "Vou slegs subreëls met kommentaar of foto oop", kidFilterOff: "Vou alle subreëls oop", blurOn: "Vervaag IP- / MAC-adresse (bv. vir skermkiekies)", blurOff: "Wys IP- / MAC-adresse", print: "Druk / PDF", land: "Landskap", port: "Portret", count: "toestelle", online: "Aanlyn", offline: "Aflyn", addPhoto: "Voeg foto's by", close: "Maak toe", del: "Skrap", save: "Stoor", cancel: "Kanselleer", hint: "Ctrl+Enter = stoor, Esc = kanselleer", delPhoto: "Hierdie foto skrap?", delNote: "Die nota skrap?", noPhotos: "Nog geen foto's nie.", noteOf: "Nota", photosOf: "Foto's", addedTip: "Geregistreer in Home Assistant op", addedUnknown: "Ouer as die datumveld van die register (voor Okt. 2024) – onbekend", mesh: "Gekoppel aan", conn: "Verbinding", lanc: "LAN-kliënte", wific: "WiFi-kliënte", uploadFail: "Oplaai het misluk", saveFail: "Stoor het misluk", printFail: "Druk het misluk", stand: "Per", printCols: "Wysig kolomme (skerm en druk)", exportCsv: "Voer uit as CSV", copyLayout: "Kopieer die kolomuitleg (JSON)", layoutCopied: "Kolomuitleg na die knipbord gekopieer.", importLayout: "Voer 'n kolomuitleg in: plak die JSON hier", resetAsk: "Die tabelopstelling terugstel? Alle instellings van hierdie kant (getoonde kolomme, volgorde, breedtes, kolomname) gaan verlore.", parent: "Hooftoestel", yes: "ja", rename: "Kolomnaam (leeg = verstek)", tgtView: "Skerm", tgtPrint: "Druk", done: "Klaar", reset: "Stel terug", expand: "Wys kanale", collapse: "Versteek kanale", channels: "kanale", distance: "Afstand", home: "Tuis", bleaddr: "BLE-MAC", scanner: "Skandeerder", scannerip: "Skandeerder se IP", signal: "Sein", temp: "Temp.", ble: "Bluetooth", importDone: "Ingevoer vanaf die ou netwerkpaneelbord", importNotes: "notas", importPhotos: "foto's", internet: "Internet", allowed: "Toegelaat", blocked: "Geblokkeer", blockAsk: "Internettoegang vir hierdie toestel blokkeer?", allowAsk: "Internettoegang vir hierdie toestel toelaat?", search: "Soek", copy: "Kopieer", refresh: "Verfris", low: "Laag", ok: "OK", batteries: "Batterye", adminOnly: "Administrateur benodig" },
};
T.no = T.nb; T.nn = T.nb; // Norwegian codes used by Home Assistant
const NAMES = { shelly: "Shelly", esphome: "ESPHome", zigbee: "ZigBee", homematic: "Homematic", mqtt: "MQTT", matter: "Matter",
  wled: "WLED", sonoff: "Sonoff", zwave: "Z-Wave", tasmota: "Tasmota", hue: "Philips Hue", tuya: "Tuya", blink: "Blink", alexa: "Amazon Echo", modbus: "Modbus", knx: "KNX", energy: "Energy", vehicles: "Vehicles", media: "Media", appliances: "Home appliances", cameras: "Cameras / doorbells", network: "Network & office", sonos: "Sonos", ikea: "IKEA", homeconnect: "Home Connect", tado: "tado°", somfy: "Somfy", loxone: "Loxone", aqara: "Aqara", xiaomi: "Xiaomi", tplink: "TP-Link", netatmo: "Netatmo", kasa: "Kasa", nest: "Google Nest", smartthings: "Samsung SmartThings", rainbird: "Rain Bird", mesh: "Router Mesh", fritz: "FRITZ!", apple: "Apple", bluetooth: "Bluetooth" };
const COLS = ["#", "status", "internet", "conn", "kids", "name", "model", "lanc", "wific", "area", "distance", "home", "ip", "mesh", "mac", "bleaddr", "scanner", "scannerip", "maker", "fw", "signal", "temp", "ble", "battery", "added", "seen", "manual", "files", "photos", "note"];
const TREE_SVG = (on) => `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" style="${on ? "color:var(--primary-color)" : ""}"><rect x="3" y="2" width="9" height="5" rx="1.5"/><g ${on ? "" : 'stroke-dasharray="2 2.2" opacity=".55"'}><path d="M7.5 7v10a2.5 2.5 0 0 0 2.5 2.5H13M7.5 12H13"/><rect x="13" y="9.5" width="8" height="5" rx="1.5"/><rect x="13" y="17" width="8" height="5" rx="1.5"/></g></svg>`;
// Default column layouts (used until a user saves his own): order = [] keeps the built-in order, w = widths (display: px, printout: mm), n = column names
const DEFAULT_LAYOUT = { // author's own configuration (display: widths in px, printout: widths in mm); new columns of later versions are added behind their predecessor
  view: {"order": ["#", "status", "internet", "conn", "name", "model", "lanc", "wific", "area", "distance", "home", "ip", "mesh", "mac", "bleaddr", "scanner", "scannerip", "maker", "fw", "signal", "temp", "ble", "battery", "added", "seen", "manual", "files", "photos", "note"], "off": ["mesh", "files"], "w": {"note": 576, "name": 144, "conn": 31, "internet": 31, "status": 31, "#": 32, "model": 70, "area": 97, "ip": 101, "mesh": 145, "mac": 112, "maker": 78, "fw": 75, "signal": 55, "temp": 46, "ble": 31, "battery": 31, "seen": 99, "photos": 31}, "n": {}},
  print: {"order": ["#", "status", "internet", "conn", "name", "model", "lanc", "wific", "area", "distance", "home", "ip", "mesh", "mac", "bleaddr", "scanner", "scannerip", "maker", "fw", "signal", "temp", "ble", "battery", "added", "seen", "manual", "files", "photos", "note"], "off": ["seen", "status", "mesh", "added", "manual"], "w": {"#": 6, "status": 9, "internet": 12, "name": 29, "model": 19, "area": 16, "ip": 24, "mac": 29, "maker": 16, "fw": 19, "signal": 14, "temp": 10, "battery": 14, "seen": 22, "files": 40, "photos": 18, "note": 63}, "n": {}},
};
// own default layout of the FRITZ! tab (used until the layout of that tab is changed; saved separately from the other tabs)
const FRITZ_LAYOUT = {"view":{"order":["#","status","internet","name","model","area","distance","home","ip","mesh","mac","bleaddr","scanner","scannerip","maker","fw","signal","temp","ble","battery","seen","photos","note"],"off":["mesh","files"],"w":{},"n":{}},"print":{"order":["#","status","internet","conn","name","model","area","distance","home","ip","mesh","mac","bleaddr","scanner","scannerip","maker","fw","signal","temp","ble","battery","seen","photos","note"],"off":["seen","status","mesh","added","manual"],"w":{"#":6,"status":6,"mac":29,"name":36,"ip":24,"maker":16,"temp":10,"signal":14,"battery":14,"seen":22,"photos":18,"area":16,"model":19,"internet":12,"note":63,"fw":11},"n":{}}};
const HEAD_ICONS = { manual: "manual", status: "dot", photos: "image", note: "note", battery: "battery", internet: "globe", conn: "link", distance: "ruler", home: "home", signal: "signal", temp: "thermo", ble: "bluetooth", lanc: "lan", wific: "wifi" }; // columns whose heading is a symbol (narrow)
const BLURCOLS = ["ip", "mac", "bleaddr", "scannerip"]; // columns blurred by the "hide addresses" option
const OPTIONAL =["kids", "added", "files", "mesh", "conn", "lanc", "wific", "internet", "distance", "home", "bleaddr", "scanner", "scannerip", "ip", "mac", "signal", "temp", "ble", "battery"]; // hidden when no device has a value

const ICONS = {
  search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l5 5"/>',
  printer: '<path d="M6 9V3h12v6"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="7"/>',
  monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
  image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.8"/><path d="M21 16l-5-5-9 9"/>',
  camera: '<path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.5"/>',
  note: '<path d="M6 3h9l4 4v14H6z"/><path d="M9 12h7M9 16h7"/>',
  pencil: '<path d="M4 20l1-4L16 5l3 3L8 19z"/>',
  battery: '<rect x="2" y="7" width="17" height="10" rx="2"/><path d="M22 11v2M6 11v2M10 11v2"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  signal: '<path d="M5 19v-3M10 19v-6M15 19V9M20 19V4"/>',
  thermo: '<path d="M10 14V5a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0z"/>',
  ruler: '<path d="M3 17L17 3l4 4L7 21z"/><path d="M8 12l2 2M11 9l2 2M14 6l2 2"/>',
  home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>',
  bluetooth: '<path d="M7 7l10 10-5 4V3l5 4L7 17"/>',
  check: '<path d="M5 12l5 5 9-11"/>',
  checkc: '<circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/>',
  block: '<circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17h.01"/>',
  reset: '<path d="M4 12a8 8 0 1 0 2.5-5.8"/><path d="M4 4v5h5"/>',
  clipboard: '<rect x="8" y="3" width="8" height="4" rx="1"/><path d="M16 5h2a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"/>',
  import: '<path d="M12 3v12M7 10l5 5 5-5M4 20h16"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  lan: '<rect x="6" y="3" width="12" height="10" rx="1.5"/><path d="M9 13v3M12 13v3M15 13v3M12 16v5"/>',
  wifi: '<path d="M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.6 16a5 5 0 0 1 6.8 0"/><circle cx="12" cy="19.3" r="1.1" fill="currentColor"/>',
  dot: '<circle cx="12" cy="12" r="6"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  manual: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H19v-5"/><path d="M9 8h6M9 12h6"/>',
  pdfdown: '<path d="M6 3h8l5 5v13H6z"/><path d="M14 3v5h5"/><path d="M12 11v6M9.5 14.5L12 17l2.5-2.5"/>',
  pdfup: '<path d="M6 3h8l5 5v13H6z"/><path d="M14 3v5h5"/><path d="M12 18v-6M9.5 14.5L12 12l2.5 2.5"/>',
  trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
  sparkles: '<path d="M11 3l1.9 5.1L18 10l-5.1 1.9L11 17l-1.9-5.1L4 10l5.1-1.9z"/><path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z"/>',
  filter: '<path d="M3 5h18l-7 8v6l-4 2v-8z"/>',
  imageoff: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.8"/><path d="M21 16l-5-5-9 9M4 4l16 16"/>',
  palette: '<path d="M12 3a9 9 0 1 0 0 18c1.2 0 1.8-.8 1.8-1.7 0-1-.9-1.4-.9-2.5 0-1 .8-1.8 1.9-1.8H17a4 4 0 0 0 4-4C21 6.6 17 3 12 3z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/>',
  dense: '<path d="M4 5h16M4 9.5h16M4 14h16M4 18.5h16"/>',
  noteoff: '<path d="M6 3h9l4 4v14H6z"/><path d="M9 12h7M9 16h7M3 3l18 18"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  eyeoff: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/><path d="M4 4l16 16"/>',
};
const ico = (n, size) => `<svg viewBox="0 0 24 24" width="${size || 18}" height="${size || 18}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle">${ICONS[n]}</svg>`;
const escH = (x) => String(x == null ? "" : x).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

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
    if (this._exp === undefined) { this._exp = new Set(); try { this._expG = localStorage.getItem("diExpand") === "1"; } catch (e) { this._expG = false; } try { this._expM = localStorage.getItem("diExpandMesh") === "1"; } catch (e) { this._expM = false; } }
    let ori = "portrait";
    try { if (localStorage.getItem("diOri") === "landscape") ori = "landscape"; } catch (e) { /* ignore */ }
    this._ori = ori;
    try { this._blur = localStorage.getItem("diBlur") === "1"; } catch (e) { this._blur = false; }
    try { this._kidFilter = localStorage.getItem("diKidFilter") === "1"; } catch (e) { this._kidFilter = false; }
    try { this._thumbs = localStorage.getItem("diThumbs") !== "0"; } catch (e) { this._thumbs = true; }
    try { this._dense = localStorage.getItem("diWide") === "1"; } catch (e) { this._dense = false; }
    try { this._pcolor = localStorage.getItem("diPrintColor") !== "0"; } catch (e) { this._pcolor = true; }
    try { this._comments = localStorage.getItem("diComments") !== "0"; } catch (e) { this._comments = true; }
    if (!this._root) {
      this._root = this.attachShadow({ mode: "open" });
      const guard = (ev) => { const o = ev.composedPath()[0]; if (o && o.matches && o.matches("input,textarea,select")) ev.stopPropagation(); };
      ["keydown", "keyup", "keypress"].forEach((n) => this.addEventListener(n, guard)); // fields in the table, the toolbar and the editors
    }
    if (cached) this._apply(cached); else this._render();
    if (this._hass) this._load();
  }

  set hass(hass) {
    const first = !this._hass;
    this._hass = hass;
    if (first) {
      this._load().then(() => this._migrate());
      this._timer = setInterval(() => (this.isConnected ? (!window.__diPaused && this._load()) : clearInterval(this._timer)), 30000);
      // quick polls right after opening / after a Home Assistant start, while entities are still coming up
      let n = 0;
      this._warm = setInterval(() => { if (!this.isConnected || ++n > 12) clearInterval(this._warm); else if (!window.__diPaused) this._load(); }, 5000);
    }
  }

  getCardSize() { return 6; }
  static getStubConfig() { return { class: "esphome" }; }

  get _t() {
    const l = (this._hass && this._hass.language || "en").slice(0, 2);
    if (!this._tc || this._tc.l !== l) this._tc = { l, o: T[l] ? Object.assign({}, T.en, T[l]) : T.en };
    return this._tc.o;
  }

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
    if (cls === "mesh") this._meshTree(s);
    if (cls === "fritz") { // mesh nodes of the FRITZ! tab get their clients as expandable sub-rows
      const have = new Set(s.devices.map((d) => d.id)), nodeId = {};
      s.devices.forEach((d) => { if (d.mesh_node) nodeId[d.mesh_node] = d.id; }); // a node that is a device of its own (box / repeater) carries its clients
      (r.devices || []).forEach((d) => { if (d.mesh && d.mesh.to && !have.has(d.id)) s.devices.push(Object.assign({}, d, { parent: nodeId[d.mesh.to] || `fritznode~${d.mesh.to}` })); });
    }
    s.notes = r.notes || {};
    s.photos = r.photos || {};
    s.manuals = r.manuals || {};
    s.ai = !!r.ai;
    s.loaded = true;
    this._render();
  }

  // Router Mesh: one expandable row per mesh node (router / repeater) with the connected clients below it
  _meshTree(s) {
    const nodes = {};
    s.devices = s.devices.map((d) => {
      const n = d.mesh && d.mesh.to ? String(d.mesh.to).replace(/^fritz\./i, "") : null;
      if (!n) return d;
      (nodes[n] = nodes[n] || []).push(d);
      return Object.assign({}, d, { parent: `meshnode~${n}` });
    });
    // the box / repeater behind a node is a device of its own (FRITZ! tab): its address, firmware, temperature ... belong in the node row as well
    const boxes = {};
    ((this._raw && this._raw.devices) || []).forEach((d) => { if (d.mesh_node) boxes[String(d.mesh_node).replace(/^fritz\./i, "")] = d; });
    Object.keys(nodes).forEach((n) => {
      const cl = nodes[n], lan = cl.filter((d) => d.mesh.type && /lan/i.test(d.mesh.type) && !/wlan|wifi/i.test(d.mesh.type)).length, bx = boxes[n] || {};
      s.devices.push({
        id: `meshnode~${n}`, parent: null, name: n, manufacturer: "FRITZ!", model: "Mesh", mesh_stats: { total: cl.length, lan, wlan: cl.length - lan }, sw_version: bx.sw_version || null, area: bx.area || null, mac: bx.mac || null, ip: bx.ip || null,
        classes: ["mesh"], integrations: ["fritz"], online: cl.some((d) => d.online) || !!bx.online, battery: null, battery_low: null, last_seen: bx.last_seen || null, entity: null,
        internet_switch: null, ble_switch: null, temp: bx.temp == null ? null : bx.temp, rssi: bx.rssi == null ? null : bx.rssi, ble: { home: null, distance: null, address: null, scanner: null }, mesh: null,
      });
    });
  }

  _label() {
    const c = this._config.class;
    return this._config.title || (c === "all" ? this._t.all : c === "other" ? this._t.other : c === "battery" ? this._t.batteries : c === "energy" || ["vehicles", "media", "appliances", "cameras", "network"].includes(c) ? this._t[c] : NAMES[c] || c);
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
      case "mesh": return !!d.mesh && !!d.mesh.to;
      case "conn": return !!d.mesh && !!d.mesh.type;
      case "added": return !!d.added;
      case "manual": return !!this._manualInfo(d);
      case "files": return this._fileNames(d).length > 0;
      case "lanc": case "wific": return !!d.mesh_stats;
      case "scanner": return !!d.ble && !!d.ble.scanner;
      case "scannerip": return !!d.ble && !!d.ble.scanner_ip;
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
      case "mesh": return ((d.mesh && d.mesh.to) || "").toLowerCase();
      case "conn": return ((d.mesh && d.mesh.type) || "") + ((d.mesh && d.mesh.ssid) || "");
      case "lanc": return d.mesh_stats ? d.mesh_stats.lan : -1;
      case "wific": return d.mesh_stats ? d.mesh_stats.wlan : -1;
      case "scanner": return (d.ble && d.ble.scanner) || "";
      case "scannerip": return (d.ble && d.ble.scanner_ip) || "";
      case "signal": return d.rssi == null ? -999 : d.rssi;
      case "temp": return d.temp == null ? -999 : d.temp;
      case "ble": { const x = this._sw(d.ble_switch); return x === "on" ? 2 : x === "off" ? 1 : 0; }
      case "maker": return (d.manufacturer || "").toLowerCase();
      case "fw": return d.sw_version || "";
      case "battery": return d.battery !== null && d.battery !== undefined ? d.battery : d.battery_low === true ? 0 : d.battery_low === false ? 100 : -1;
      case "seen": return d.last_seen || "";
      case "added": return d.added || "";
      case "files": return this._fileNames(d).join(", ");
      case "manual": { const k = this._manualInfo(d); return k ? { local: 0, link: 1, search: 2 }[k.kind] : 3; }
      case "photos": return (s.photos[d.id] || []).length;
      case "note": return ((s.notes[d.id] || {}).t || "").toLowerCase();
      default: return 0;
    }
  }

  _toggleKids(id) {
    if (this._exp.has(id)) this._exp.delete(id); else this._exp.add(id);
    this._render();
  }

  // the devices that match the search field (all devices of the tab when it is empty): AI search and PDF copy only work on these
  _filtered() {
    const q = (this._q || "").trim().toLowerCase();
    return q ? this._state.devices.filter((d) => this._hay(d).includes(q)) : this._state.devices;
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
      const NAT = { numeric: true, sensitivity: "base" }; // natural order: ch2 before ch10
      const c = typeof x === "number" ? x - y : String(x).localeCompare(String(y), undefined, NAT);
      return (c || String(a.name).localeCompare(String(b.name), undefined, NAT)) * (s.sortCol ? s.sortDir : 1);
    });
    // after adding a photo / note the rows keep their positions (until the sorting is changed)
    if (this._freeze && this._lastOrder) {
      const pos = new Map(this._lastOrder.map((id, i) => [id, i]));
      const old = all.filter((d) => pos.has(d.id)).sort((a, b) => pos.get(a.id) - pos.get(b.id));
      const fresh = all.filter((d) => !pos.has(d.id));
      all.length = 0; all.push(...old, ...fresh);
    }
    this._lastOrder = all.map((d) => d.id);
    // group sub-channels under their parent; a parent stays visible when one of its channels matches
    this._lvl = {}; this._kids = {};
    const present = new Set(all.map((d) => d.id));
    const kids = {};
    all.forEach((d) => { if (d.parent && present.has(d.parent)) (kids[d.parent] = kids[d.parent] || []).push(d); });
    const out = [];
    all.forEach((d) => {
      if (d.parent && present.has(d.parent)) return;
      const k = kids[d.id] || [];
      const noted = this._kidFilter ? k.filter((c) => ((s.notes[c.id] || {}).t || "").trim() || (s.photos[c.id] || []).length) : k; // option: only sub-rows with comment / photo
      const shownKids = q ? noted.filter((c) => match.has(c.id)) : noted;
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

  _date(iso, long) {
    const dt = new Date(iso);
    return dt.toLocaleDateString(this._hass.language || "en", long ? { year: "numeric", month: "long", day: "numeric" } : { year: "numeric", month: "2-digit", day: "2-digit" });
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
    this._sorted(); // sets this._kids for the rows that are listed right now (search filter included)
    const treeNeeded = Object.keys(this._kids || {}).some((k) => this._kids[k] > 0);
    this._treeShown = treeNeeded;
    if (!treeNeeded) hide.add("kids");
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
    // keep scroll positions (table area and the surrounding page / panel) over the rebuild
    const oldWrap = root.querySelector(".wrap");
    const scrolls = [];
    for (let n = this; n; n = n.parentNode || n.host) if (n.scrollTop > 0 || n.scrollLeft > 0) scrolls.push([n, n.scrollTop, n.scrollLeft]);
    const wrapPos = oldWrap ? [oldWrap.scrollTop, oldWrap.scrollLeft] : null;
    root.innerHTML = "";
    const st = document.createElement("style");
    st.textContent = `ha-card{padding:4px 8px 6px}
      .wrap{overflow:auto;max-height:${cfg.max_height || "var(--di-wrap-max,calc(100vh - 170px))"}}
      table{width:auto;border-collapse:collapse;font-size:12px}
      th{position:sticky;top:0;z-index:1;background:var(--card-background-color,#fff);text-align:left;padding:3px 4px;border-bottom:2px solid var(--divider-color,#888);cursor:pointer;user-select:none;white-space:nowrap}
      th:hover{color:var(--primary-color)}
      td{padding:${this._dense ? 7 : 2}px 4px;line-height:1.3;border-bottom:1px solid var(--divider-color,#444);white-space:nowrap;max-width:${cfg.max_cell ? cfg.max_cell + "px" : "none"};overflow:hidden;text-overflow:ellipsis}
      td[data-col=note]{max-width:${cfg.max_cell ? cfg.max_cell + "px" : "420px"}}
      tr:hover td{background:rgba(127,127,127,.08)}.ic{cursor:pointer;margin-right:3px;font-size:14px}
      .hv{visibility:hidden}tr:hover .hv{visibility:visible}@media (hover:none){.hv{display:none!important}}
      button,select{cursor:pointer;padding:4px 10px;border-radius:8px;border:1px solid var(--divider-color,#888);background:transparent;color:var(--primary-text-color);font-size:13px}
      th .cfgc{display:flex;gap:2px;align-items:center;margin-bottom:2px}th .cfgc button{padding:0 4px;font-size:11px;line-height:16px;border-radius:4px}th .cfgc input{margin:0}
      .bar{display:flex;gap:6px;align-items:center;margin:0 0 4px}.dim{opacity:.65;font-size:12px}`;
    root.appendChild(st);
    const card = document.createElement("ha-card");
    const head = el("div", "font-size:16px;font-weight:600;margin:2px 2px 4px;display:flex;align-items:center;gap:8px");
    const hico = el("span", "display:inline-flex;min-width:22px;height:22px;flex:none;align-items:center"); hico.className = "hico";
    head.append(hico, document.createTextNode(this._label()));
    card.appendChild(head);
    this._hico = hico;
    this._headIcon();
    root.appendChild(card);

    const bar = el("div"); bar.className = "bar";
    const pb = el("button", "padding:4px 10px;display:inline-flex;align-items:center"); pb.innerHTML = ico("printer", 20); pb.title = t.print; pb.onclick = () => this._print();
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
    // pause / resume the automatic refresh (all cards / tabs together)
    const pausB = el("button", "padding:4px 9px;display:inline-flex;align-items:center");
    const pdraw = () => {
      const on = !!window.__diPaused;
      pausB.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="${on ? "M8 5v14l11-7z" : "M6 19h4V5H6v14zm8-14v14h4V5h-4z"}"/></svg>`;
      pausB.title = on ? t.autoPaused : t.autoPause;
      pausB.style.background = on ? "var(--warning-color,#ffa000)" : ""; pausB.style.color = on ? "#fff" : "";
    };
    pdraw();
    pausB.onclick = () => { window.__diPaused = !window.__diPaused; window.dispatchEvent(new Event("di-pause")); if (!window.__diPaused) this._load(); };
    if (this._pauseH) window.removeEventListener("di-pause", this._pauseH);
    this._pauseH = () => { if (pausB.isConnected) pdraw(); }; window.addEventListener("di-pause", this._pauseH);
    const cnt = el("span", null, ""); cnt.className = "dim"; cnt.title = t.count;
    const upd = () => { cnt.textContent = !s.loaded ? "…" : this._q ? `Σ ${this._filtered().length}/${s.devices.length}` : `Σ ${s.devices.length}`; };
    upd();
    const qi = document.createElement("input");
    qi.className = "q"; qi.type = "search"; qi.placeholder = ""; qi.title = t.search; qi.value = this._q || "";
    qi.style.cssText = "padding:4px 8px 4px 28px;width:150px;border-radius:8px;border:1px solid var(--divider-color,#888);background:transparent;color:var(--primary-text-color);font-size:13px";
    qi.oninput = () => {
      this._q = qi.value; upd(); // the count follows every key, the table a moment later (large lists stay responsive)
      clearTimeout(this._qt);
      this._qt = setTimeout(() => {
        const rows = this._sorted();
        if (Object.keys(this._kids || {}).some((k) => this._kids[k] > 0) !== this._treeShown) { this._render(); return; } // the tree column appears / disappears
        const body = this._tbody, frag = document.createDocumentFragment();
        rows.forEach((d, i) => frag.appendChild(this._row(d, i + 1, hide)));
        body.innerHTML = ""; body.appendChild(frag);
      }, 160);
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
    const pcl = el("button", "padding:4px 9px;display:inline-flex;align-items:center");
    pcl.innerHTML = ico("palette", 20); pcl.title = this._pcolor ? t.printColorOn : t.printColorOff;
    if (!this._pcolor) pcl.style.background = "var(--primary-color)", pcl.style.color = "var(--text-primary-color,#fff)";
    pcl.onclick = () => { this._pcolor = !this._pcolor; try { localStorage.setItem("diPrintColor", this._pcolor ? "1" : "0"); } catch (e) { /* ignore */ } this._render(); };
    xcb.style.borderRadius = "8px 0 0 8px"; pb.style.borderRadius = "0"; pb.style.marginLeft = "-1px"; pcl.style.borderRadius = "0"; pcl.style.marginLeft = "-1px";
    seg.style.borderRadius = "0 8px 8px 0"; seg.style.marginLeft = "-1px";
    printPair.append(xcb, pb, pcl, seg);
    const refPair = el("span", "display:inline-flex");
    rb.style.borderRadius = "8px 0 0 8px"; pausB.style.borderRadius = "0 8px 8px 0"; pausB.style.marginLeft = "-1px";
    refPair.append(rb, pausB);
    const bl = el("button", "padding:4px 9px;display:inline-flex;align-items:center");
    bl.innerHTML = ico(this._blur ? "eyeoff" : "eye", 20); bl.title = this._blur ? t.blurOff : t.blurOn;
    if (this._blur) bl.style.background = "var(--primary-color)", bl.style.color = "var(--text-primary-color,#fff)";
    bl.onclick = () => { this._blur = !this._blur; try { localStorage.setItem("diBlur", this._blur ? "1" : "0"); } catch (e) { /* ignore */ } this._render(); };
    const thb = el("button", "padding:4px 9px;display:inline-flex;align-items:center");
    thb.innerHTML = ico(this._thumbs ? "image" : "imageoff", 20); thb.title = this._thumbs ? t.thumbsOff : t.thumbsOn;
    if (!this._thumbs) thb.style.background = "var(--primary-color)", thb.style.color = "var(--text-primary-color,#fff)";
    thb.onclick = () => { this._thumbs = !this._thumbs; try { localStorage.setItem("diThumbs", this._thumbs ? "1" : "0"); } catch (e) { /* ignore */ } this._render(); };
    const cmb = el("button", "padding:4px 9px;display:inline-flex;align-items:center");
    cmb.innerHTML = ico(this._comments ? "note" : "noteoff", 20); cmb.title = this._comments ? t.commentsOff : t.commentsOn;
    if (!this._comments) cmb.style.background = "var(--primary-color)", cmb.style.color = "var(--text-primary-color,#fff)";
    cmb.onclick = () => { this._comments = !this._comments; try { localStorage.setItem("diComments", this._comments ? "1" : "0"); } catch (e) { /* ignore */ } this._render(); };
    const dnb = el("button", "padding:4px 9px;display:inline-flex;align-items:center");
    dnb.innerHTML = ico("dense", 20); dnb.title = this._dense ? t.denseOff : t.denseOn;
    if (this._dense) dnb.style.background = "var(--primary-color)", dnb.style.color = "var(--text-primary-color,#fff)";
    dnb.onclick = () => { this._dense = !this._dense; try { localStorage.setItem("diWide", this._dense ? "1" : "0"); } catch (e) { /* ignore */ } this._render(); };
        const aib = el("button", "padding:4px 9px;display:inline-flex;align-items:center");
        aib.innerHTML = ico("sparkles", 20); aib.title = t.manualAiBtn; aib.onclick = () => this._aiAll(aib);
        bar.append(refPair, printPair, bl, thb, cmb, dnb, aib);
    const editGroup = el("span", "display:inline-flex;gap:6px;align-items:center;margin-left:auto");
    editGroup.appendChild(pcb);
    if (edit) {
      const mk = (id, lbl, ttl) => { const b = el("button", "padding:4px 9px;display:inline-flex;align-items:center"); b.innerHTML = lbl; b.title = ttl; if (tgt === id) { b.style.background = "var(--primary-color)"; b.style.color = "#fff"; b.style.borderColor = "transparent"; } b.onclick = () => { this._tgt = id; try { localStorage.setItem("diTgt", id); } catch (e) { /* ignore */ } this._render(); }; return b; };
      const rs = el("button", "padding:4px 9px;display:inline-flex;align-items:center"); rs.innerHTML = ico("reset"); rs.title = t.reset; rs.onclick = () => { if (!confirm(`${tgt === "print" ? t.tgtPrint : t.tgtView}: ${t.resetAsk}`)) return; try { localStorage.removeItem(this._layoutKey(tgt)); } catch (e) { /* ignore */ } this._render(); };
      const dn = el("button", "padding:4px 9px;display:inline-flex;align-items:center"); dn.innerHTML = ico("check"); dn.title = t.done; dn.onclick = () => { this._edit = false; this._render(); };
      const cp = el("button", "padding:4px 9px;display:inline-flex;align-items:center"); cp.innerHTML = ico("clipboard"); cp.title = t.copyLayout;
      cp.onclick = async () => {
        const ser = (c) => ({ order: c.order, off: [...c.off], w: c.w, n: c.n || {} });
        const text = JSON.stringify({ view: ser(this._viewCfg()), print: ser(this._printCfg()) });
        try { await navigator.clipboard.writeText(text); alert(t.layoutCopied); } catch (e) { window.prompt(t.copyLayout, text); }
      };
      const im = el("button", "padding:4px 9px;display:inline-flex;align-items:center"); im.innerHTML = ico("import"); im.title = t.importLayout;
      im.onclick = () => {
        const text = window.prompt(t.importLayout, ""); if (!text) return;
        try { const j = JSON.parse(text); ["view", "print"].forEach((k) => { if (j[k]) { const c = this._cfg(k); c.order = j[k].order || c.order; c.off = new Set(j[k].off || []); c.w = j[k].w || {}; c.n = j[k].n || {}; this._saveCfg(k, c); } }); this._render(); } catch (e) { alert(`${t.saveFail}: ${e.message || e}`); }
      };
      const au = el("button", "padding:4px 9px;display:inline-flex;align-items:center;font-weight:600"); au.textContent = "Auto";
      au.title = (this._hass.language || "en").startsWith("de") ? "Spaltenbreiten automatisch an die längsten Texte/Symbole anpassen" : "Fit column widths automatically to the widest content";
      au.onclick = () => {
        const tb = this._root.querySelector("table"); if (!tb) return;
        const natural = (n) => { const rg = document.createRange(); rg.selectNodeContents(n); const cs = getComputedStyle(n); return Math.ceil(rg.getBoundingClientRect().width + parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight)) + 2; };
        const w = {};
        tb.querySelectorAll("tbody tr").forEach((r) => [...r.children].forEach((td) => { const c = td.dataset.col; if (!c) return; const x = natural(td); if (!(w[c] >= x)) w[c] = x; }));
        tb.querySelectorAll("thead th, tr:first-child th").forEach((th) => { const c = th.dataset.col; if (!c) return; let x; const inp = th.querySelector("input[type=text]"); if (HEAD_ICONS[c] && !(this._cfg(tgt).n || {})[c]) x = 17 + 14; else if (inp) { const pr = document.createElement("span"); pr.style.cssText = "position:absolute;visibility:hidden;white-space:nowrap;font-weight:700"; pr.textContent = (inp.value || inp.placeholder || "") + "▲"; th.appendChild(pr); x = Math.ceil(pr.getBoundingClientRect().width) + 12; pr.remove(); } else x = natural(th); if (!(w[c] >= x)) w[c] = x; });
        const act = this._cfg(tgt);
        act.w = act.w || {};
        Object.keys(w).forEach((c) => { if (c !== "kids") act.w[c] = tgt === "print" ? Math.round(w[c] / mm) : w[c]; });
        this._saveCfg(tgt, act); this._render();
      };
      editGroup.append(mk("view", ico("monitor"), t.tgtView), mk("print", ico("printer"), t.tgtPrint), au, cp, im, rs, dn);
    }
    if (withKids) {
      const xb = el("button", "padding:4px 9px;display:inline-flex;align-items:center");
      xb.innerHTML = TREE_SVG(this._expAll);
      xb.title = this._expAll ? t.collapse : t.expand;
      xb.onclick = () => { this._expAll = !this._expAll; this._exp.clear(); try { localStorage.setItem(this._config.class === "mesh" || this._config.class === "fritz" ? "diExpandMesh" : "diExpand", this._expAll ? "1" : "0"); } catch (e) { /* ignore */ } this._render(); };
      const fb = el("button", "padding:4px 9px;display:inline-flex;align-items:center");
      fb.innerHTML = ico("filter", 20); fb.title = this._kidFilter ? t.kidFilterOff : t.kidFilterOn;
      if (this._kidFilter) fb.style.background = "var(--primary-color)", fb.style.color = "var(--text-primary-color,#fff)";
      fb.onclick = () => { this._kidFilter = !this._kidFilter; try { localStorage.setItem("diKidFilter", this._kidFilter ? "1" : "0"); } catch (e) { /* ignore */ } this._render(); };
      bar.append(xb, fb);
    }
    const qwrap = el("span", "position:relative;display:inline-flex;align-items:center");
    const qico = el("span", "position:absolute;left:8px;pointer-events:none;opacity:.6;display:inline-flex");
    qico.innerHTML = ico("search", 16);
    qwrap.append(qico, qi);
    bar.append(qwrap, cnt, editGroup);
    card.appendChild(bar);

    const tbl = document.createElement("table");
    const hr = document.createElement("tr");
    this._colOrder.forEach((c) => {
      const th = document.createElement("th");
      th.dataset.col = c;
      const IC = HEAD_ICONS;
      const dfltHtml = c === "#" ? "#" : IC[c] ? ico(IC[c], c === "manual" ? 24 : 17) : escH(t[c]);
      const label = (names[c] ? escH(names[c]) : dfltHtml) + (s.sortCol === c ? (s.sortDir > 0 ? "▲" : "▼") : "");
      th.innerHTML = label;
      if (["photos", "note", "battery", "internet", "signal", "temp", "ble", "distance", "home"].includes(c)) th.title = c === "battery" ? t.batteries : t[c];
      else if (!edit) th.title = names[c] || t[c] || "";
      if (this._widths[c]) th.style.cssText += `;width:${this._widths[c]}px;max-width:${this._widths[c]}px;min-width:${this._widths[c]}px`;
      if (c === "kids") {
        th.innerHTML = TREE_SVG(this._expAll); th.title = this._expAll ? t.collapse : t.expand; th.style.textAlign = "center";
        th.onclick = () => { this._expAll = !this._expAll; this._exp.clear(); try { localStorage.setItem(this._config.class === "mesh" || this._config.class === "fritz" ? "diExpandMesh" : "diExpand", this._expAll ? "1" : "0"); } catch (e) { /* ignore */ } this._render(); };
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
      if (c !== "#") th.onclick = () => { if (s.sortCol === c) s.sortDir = -s.sortDir; else { s.sortCol = c; s.sortDir = 1; } this._freeze = false; this._render(); };
      hr.appendChild(th);
    });
    const thead = document.createElement("thead"); thead.appendChild(hr); tbl.appendChild(thead);
    const tb = document.createElement("tbody");
    this._tbody = tb;
    this._sorted().forEach((d, i) => tb.appendChild(this._row(d, i + 1, hide)));
    tbl.appendChild(tb);
    const wrap = el("div"); wrap.className = "wrap"; wrap.appendChild(tbl);
    { // tell the panel which way the table is scrolled (it hides its tab bar on small screens while you scroll down)
      let last = wrap.scrollTop; const born = Date.now();
      wrap.addEventListener("scroll", () => { const top = wrap.scrollTop, dy = top - last; last = top; if (Date.now() - born < 500) return; this.dispatchEvent(new CustomEvent("di-scroll", { detail: { top, dy }, bubbles: true, composed: true })); }, { passive: true });
    }
    if (edit) {
      // make the edited side unmistakable: watermark + coloured frame (blue = display, orange = printout)
      const rgb = tgt === "print" ? "251,140,0" : "30,136,229";
      const icon = tgt === "print"
        ? "<path d='M6 9V3h12v6'/><path d='M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2'/><rect x='6' y='14' width='12' height='7'/>"
        : "<rect x='2' y='3' width='20' height='14' rx='2'/><path d='M8 21h8M12 17v4'/>";
      const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='-0.5 -0.5 25 25' width='500' height='500'><g fill='none' stroke='rgba(${rgb},0.13)' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'>${icon}</g></svg>`;
      wrap.style.backgroundImage = `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`;
      wrap.style.backgroundRepeat = "no-repeat"; wrap.style.backgroundPosition = "center"; wrap.style.backgroundSize = "contain"; wrap.style.minHeight = "460px";
      wrap.style.outline = `3px solid rgb(${rgb})`; wrap.style.outlineOffset = "-3px";
    }
    card.appendChild(wrap);
    // the new table is laid out a moment later: set the scroll positions again in the next frame (otherwise the list jumps back to the left)
    const restoreScroll = () => {
      if (wrapPos) { if (wrap.scrollTop !== wrapPos[0]) wrap.scrollTop = wrapPos[0]; if (wrap.scrollLeft !== wrapPos[1]) wrap.scrollLeft = wrapPos[1]; }
      scrolls.forEach(([n, y, x]) => { if (n.scrollTop !== y) n.scrollTop = y; if (n.scrollLeft !== x) n.scrollLeft = x; });
    };
    restoreScroll(); requestAnimationFrame(restoreScroll); setTimeout(restoreScroll, 60);
    if (keep) { // keep typing in the search field: in Home Assistant the focus only sticks once the new table is on screen, so ask again in the next frame
      const refocus = () => { const n = this._root.querySelector("input.q"); if (!n || this._root.activeElement === n) return; n.focus(); try { n.setSelectionRange(keep[0], keep[1]); } catch (e) { /* ignore */ } };
      refocus(); requestAnimationFrame(refocus); setTimeout(refocus, 60);
    }
  }

  _row(d, n, hide) {
    const t = this._t, s = this._state;
    const tr = document.createElement("tr");
    const add = (col, node) => { if (hide.has(col)) return; const td = document.createElement("td"); td.dataset.col = col; if (typeof node === "string") { td.textContent = node; if (node.length > 24) td.title = node; } else if (node) td.appendChild(node); if (this._dimCols && this._dimCols.has(col)) td.style.opacity = ".35"; if (this._blur && BLURCOLS.includes(col)) { td.style.filter = "blur(5px)"; td.style.userSelect = "none"; td.style.pointerEvents = "none"; } const w = this._widths && this._widths[col]; if (w) td.style.cssText += `;width:${w}px;max-width:${w}px;min-width:${w}px`; td.addEventListener("mouseenter", () => { // cut-off text: every element under the pointer shows the complete text (children with a title of their own, e.g. "copy", keep it as a second line)
        const full = (td.dataset.full || td.textContent).trim(), cut = td.scrollWidth > td.clientWidth + 1;
        [td, ...td.querySelectorAll("[title]")].forEach((e) => {
          if (e.dataset.t0 === undefined) e.dataset.t0 = e.getAttribute("title") || "";
          const t0 = e.dataset.t0;
          if (cut && full) e.title = !t0 ? full : t0.includes(full) ? t0 : `${full}
(${t0})`;
          else if (t0) e.title = t0; else e.removeAttribute("title");
        });
      }); tr.appendChild(td); return td; };
    add("#", String(n));
    const led = el("span", null, d.online ? "🟢" : "🔴"); led.title = d.online ? t.online : t.offline;
    add("status", led);
    const inet = this._inet(d);
    if (inet === null) add("internet", "–");
    else {
      const on = inet === "on", off = inet === "off";
      const sw = el("span", `cursor:pointer;display:inline-flex;color:${on ? "var(--success-color,#43a047)" : off ? "var(--error-color,#e53935)" : "var(--secondary-text-color,#888)"}`); sw.innerHTML = ico(on ? "checkc" : off ? "block" : "help", 17);
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
    // mesh node: model + number of clients; the split into cable and radio has columns of its own
    add("model", d.mesh_stats ? (d.model && d.model !== "Mesh" ? d.model + " · " : "") + `${d.mesh_stats.total} Clients` : d.model || "–");
    const cnt = (n, icon, col) => { const x = el("span", `display:inline-flex;align-items:center;gap:3px;color:${col}`); x.innerHTML = ico(icon, 16) + `<b style="color:var(--primary-text-color)">${n}</b>`; return x; };
    add("lanc", d.mesh_stats ? cnt(d.mesh_stats.lan, "lan", "#4a8cf0") : "–");
    add("wific", d.mesh_stats ? cnt(d.mesh_stats.wlan, "wifi", "#a07cf0") : "–");
    add("area", d.area || "–");
    const b = d.ble || {};
    add("distance", b.distance == null ? "–" : b.distance.toFixed(1) + " m");
    let homeEl = "–"; if (b.home != null) { homeEl = el("span", `display:inline-flex;color:${b.home ? "var(--success-color,#43a047)" : "var(--error-color,#e53935)"}`); homeEl.innerHTML = ico(b.home ? "checkc" : "block", 17); }
    add("home", homeEl);
    {
      const wrap = el("span", "display:inline-flex;align-items:center;gap:4px");
      if (d.ip) {
        const web = /^https?:\/\//i.test(d.ip);  // a web address entered by hand
        const a = el("a", "color:var(--primary-color)", web ? d.ip.replace(/^https?:\/\//i, "").replace(/\/$/, "") : d.ip); a.href = web ? d.ip : `http://${d.ip.includes(":") ? "[" + d.ip + "]" : d.ip}`; a.target = "_blank"; a.rel = "noopener";
        if (d.ip_stale) { a.style.opacity = ".5"; a.style.fontStyle = "italic"; a.title = this._t.ipStale; } // the device reports no address right now: the last known one
        wrap.appendChild(a);
      } else wrap.appendChild(document.createTextNode("–"));
      // address by hand / confirmed suggestion, only where the device reports none (the user can always change a manual one)
      if (!String(d.id).includes("~") && (!d.ip || d.ip_stale || d.ip_manual)) {
        const sug = !d.ip && d.ip_suggest && d.ip_suggest.length;
        const eb = el("span", `cursor:pointer;font-size:12px;opacity:${sug ? 1 : .45};color:${sug ? "var(--warning-color,#f5a623)" : "inherit"}`, sug ? "💡" : "✎");
        if (!sug) eb.className = "hv"; // the pencil only shows while the mouse is over the row; long press / right-click works everywhere
        eb.title = (sug ? this._t.ipSuggestTip : (d.ip_manual ? this._t.ipManualTip : this._t.ipEditTip));
        this._hold(wrap, () => this._editIp(d));
        eb.onclick = (ev) => { ev.stopPropagation(); this._editIp(d); };
        wrap.appendChild(eb);
      }
      add("ip", wrap);
    }
    if (d.mac) {
      const m = el("span", "cursor:pointer", d.mac); m.title = this._t.copy; m.onclick = () => { try { navigator.clipboard.writeText(d.mac); m.textContent = "✓ " + d.mac; setTimeout(() => (m.textContent = d.mac), 1200); } catch (e) { /* ignore */ } };
      add("mac", m);
    } else add("mac", "–");
    const copyable = (txt, _short, full) => { const x = el("span", "cursor:pointer", txt); x.title = full || txt; x.onclick = () => { try { navigator.clipboard.writeText(full || txt); } catch (e) { /* ignore */ } }; return x; };
    add("bleaddr", b.address ? copyable(String(b.address).toUpperCase()) : "–");
    const ms = d.mesh || {};
    add("mesh", ms.to ? String(ms.to).replace(/^fritz\./i, "") : "–");
    if (ms.type) { // symbol: cable (LAN) or radio waves (WLAN); the text is the tooltip
      const isLan = /lan/i.test(ms.type) && !/wlan|wifi/i.test(ms.type);
      const cn = el("span", `display:inline-flex;color:${isLan ? "#4a8cf0" : "#a07cf0"}`); cn.innerHTML = ico(isLan ? "lan" : "wifi", 19);
      cn.title = String(ms.type).replace(/WLAN/gi, "WiFi") + (ms.ssid ? ` · ${ms.ssid}` : ""); add("conn", cn);
    } else add("conn", "–");
    add("scanner", b.scanner ? (() => { const sc = el("span", null, String(b.scanner).split(" (")[0]); sc.title = b.scanner; return sc; })() : "–");
    if (b.scanner_ip) { const a2 = el("a", "color:var(--primary-color)", b.scanner_ip); a2.href = `http://${b.scanner_ip}`; a2.target = "_blank"; a2.rel = "noopener"; add("scannerip", a2); } else add("scannerip", "–");
    add("maker", d.manufacturer || "–");
    add("fw", (d.sw_version || "–").split(" ")[0]);
    const sev = (v, good, warn, hi) => (hi ? (v >= good ? "var(--success-color)" : v >= warn ? "var(--warning-color)" : "var(--error-color)") : (v <= good ? "var(--success-color)" : v <= warn ? "var(--warning-color)" : "var(--error-color)"));
    add("signal", d.rssi == null ? "–" : el("span", `color:${sev(d.rssi, -60, -75, true)}`, d.rssi + " dBm"));
    const lim = d.classes && d.classes.includes("fritz") ? [85, 95] : [55, 65]; // FRITZ! boxes report the CPU temperature, which is normally 60-85 °C
    add("temp", d.temp == null ? "–" : el("span", `color:${sev(d.temp, lim[0], lim[1], false)}`, this._tempText(d.temp)));
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
    const adTd = add("added", d.added ? this._date(d.added) : "–");
    if (adTd) adTd.title = d.added ? `${t.addedTip}: ${this._date(d.added, true)}` : t.addedUnknown;
    add("seen", this._ago(d.last_seen));

    const ps = s.photos[d.id] || [];
    const tp = document.createElement("span");
    if (ps.length) {
      const b = el("span", "display:inline-flex;align-items:center;gap:2px"); b.innerHTML = ico("image", 18) + (ps.length > 1 ? `<small>${ps.length}</small>` : ""); b.className = "ic";
      b.onclick = () => this._gallery(d);
      if (this._thumbs) { // thumbnails right in the list (the hover preview works in both cases)
        b.innerHTML = ps.slice(0, 3).map((q) => `<img src="${q.url}" style="width:34px;height:34px;object-fit:cover;border-radius:4px;vertical-align:middle;margin-right:2px">`).join("") + (ps.length > 3 ? `<small>+${ps.length - 3}</small>` : "");
      }
      this._pop(b, (p) => {
        const g = el("div", `display:grid;grid-template-columns:repeat(${ps.length > 1 ? 2 : 1},auto);gap:6px`);
        ps.slice(0, 6).forEach((q) => { const im = el("img", ps.length > 1 ? "width:150px;height:150px;object-fit:cover;border-radius:4px" : "max-width:260px;max-height:260px;object-fit:contain"); im.src = q.url; g.appendChild(im); });
        p.appendChild(g);
        if (ps.length > 6) p.appendChild(el("div", "margin-top:4px;opacity:.7", `+ ${ps.length - 6}`));
      });
      tp.appendChild(b);
    }
    const ad = el("span", "display:inline-flex"); ad.innerHTML = ico("camera", 18); ad.className = "ic hv"; ad.title = t.addPhoto;
    ad.onclick = async () => { ad.textContent = "…"; await this._pick(d, (x) => (ad.textContent = x)); this._freeze = true; await this._load(); };
    tp.appendChild(ad);
    this._hold(tp, async () => { ad.textContent = "…"; await this._pick(d, (x) => (ad.textContent = x)); this._freeze = true; await this._load(); });
    const mdocs = String(d.id).includes("~") ? null : this._manualDocs(d); // found / linked manual + own PDFs
    if (mdocs) {
      const kind = mdocs.length ? mdocs[0].kind : "none";
      const color = kind === "local" ? "var(--success-color,#43a047)" : kind === "ai" ? "#a07cf0" : kind === "none" ? "var(--secondary-text-color,#888)" : "var(--primary-color)";
      const wrap = el("span", "display:inline-flex;align-items:center;gap:4px");
      const ma = el("span", `display:inline-flex;align-items:center;gap:2px;cursor:pointer;color:${color};opacity:${mdocs.length ? 1 : .4}`);
      ma.innerHTML = ico("manual", 22);
      ma.title = !mdocs.length ? this._t.manualAdd : mdocs.length === 1 ? mdocs[0].title : `${mdocs.length} ${this._t.manualDocs}`;
      ma.onclick = (ev) => { if (!mdocs.length) this._manualDialog(d); else if (mdocs.length === 1) window.open(mdocs[0].href, "_blank", "noopener"); else this._manualMenu(ma, mdocs, ev); };
      const me = el("span", "display:inline-flex;cursor:pointer;opacity:.7"); me.className = "hv"; me.innerHTML = ico("pencil", 14); me.title = this._t.manualOf;
      this._hold(wrap, () => this._manualDialog(d));
      me.onclick = () => this._manualDialog(d);
      wrap.append(ma, me);
      add("manual", wrap);
    } else add("manual", "–");
    const fnames = this._fileNames(d);
    if (fnames.length) {
      const fw = el("div", "line-height:1.35");
      fnames.forEach((n) => fw.appendChild(el("div", "", n)));
      const ftd = add("files", fw); if (ftd) ftd.style.whiteSpace = "normal";
    } else add("files", "–");
    add("photos", tp);

    const note = (s.notes[d.id] || {}).t || "";
    const nb = el("span", "display:inline-flex"); nb.innerHTML = ico(note ? "note" : "pencil", 18); nb.className = note ? "ic" : "ic hv";
    if (note) this._pop(nb, (p) => { p.textContent = note; });
    nb.onclick = () => this._editNote(d);
    // the note text is shown right in the table (cut with "..." when too long; hover = whole text, click = editor)
    const noteCell = el("span");
    noteCell.appendChild(nb);
    this._hold(noteCell, () => this._editNote(d));
    if (note && this._comments) {
      const nt = el("span", "cursor:pointer", note.replace(/\s+/g, " "));
      nt.title = note; nt.onclick = nb.onclick;
      noteCell.appendChild(nt);
    }
    add("note", noteCell);
    // order the cells like the heading
    const byCol = {};
    [...tr.children].forEach((td) => { byCol[td.dataset.col] = td; });
    (this._colOrder || []).forEach((c) => { if (byCol[c]) tr.appendChild(byCol[c]); });
    // rows with visible thumbnails are tall anyway: text may use several lines, broken at whole words
    if (this._thumbs && ps.length) {
      ["name", "model", "area", "mesh", "conn", "maker", "fw", "scanner", "seen", "note"].forEach((c) => {
        const td = byCol[c]; if (!td) return;
        td.style.whiteSpace = "normal"; td.style.textOverflow = "clip"; td.style.overflowWrap = "normal"; td.style.wordBreak = "normal"; td.style.hyphens = "manual";
      });
    }
    return tr;
  }

  // ---------- popup / overlay helpers
  // long press (touch or mouse) or right-click opens the editor of a cell; the click that follows a long press is swallowed
  _hold(node, fn) {
    let tm = null, fired = false, sx = 0, sy = 0;
    const stop = () => { clearTimeout(tm); tm = null; };
    node.style.webkitTouchCallout = "none";
    node.addEventListener("pointerdown", (e) => { if (e.button) return; fired = false; sx = e.clientX; sy = e.clientY; stop(); tm = setTimeout(() => { tm = null; fired = true; fn(); }, 600); });
    node.addEventListener("pointermove", (e) => { if (tm && Math.hypot(e.clientX - sx, e.clientY - sy) > 8) stop(); });
    ["pointerup", "pointercancel", "pointerleave"].forEach((ev) => node.addEventListener(ev, stop));
    node.addEventListener("click", (e) => { if (fired) { fired = false; e.preventDefault(); e.stopPropagation(); } }, true);
    node.addEventListener("contextmenu", (e) => { e.preventDefault(); stop(); if (!fired) { fired = true; fn(); } });
  }

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
    ["keydown", "keyup", "keypress"].forEach((n) => ov.addEventListener(n, (ev) => { const o = ev.composedPath()[0]; if (o && o.matches && o.matches("input,textarea,select")) ev.stopPropagation(); })); // dialogs are outside of the card
    const kd = (ev) => { if (ev.key === "Escape") { ev.stopPropagation(); close(); } };
    const close = () => { ov.remove(); document.removeEventListener("keydown", kd, true); };
    document.addEventListener("keydown", kd, true);
    ov.addEventListener("mousedown", (ev) => { if (ev.target === ov) close(); });
    document.body.appendChild(ov);
    const pp = document.getElementById("di-pop"); if (pp) pp.style.display = "none";
    return { bx, close };
  }

  // button with symbol and text
  _ibtn(icon, label, primary, tip) {
    const b = el("button", `display:inline-flex;align-items:center;gap:8px;padding:9px 16px;font-size:14px;border-radius:8px;cursor:pointer;${primary ? "background:var(--primary-color,#03a9f4);color:#fff;border-color:transparent" : ""}`);
    b.innerHTML = `${ico(icon, 20)}<span></span>`; b.lbl = b.querySelector("span"); b.lbl.textContent = label; if (tip) b.title = tip; return b;
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
        a.href = p.url; a.target = "_blank";
        const im = el("img", "width:100%;height:200px;object-fit:cover;border-radius:8px;display:block"); im.src = a.href; a.appendChild(im); w.appendChild(a);
        const x = el("span", "position:absolute;top:6px;right:6px;cursor:pointer;background:rgba(0,0,0,.6);color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center", "");
        x.innerHTML = ico("close", 14); x.title = t.del;
        x.onclick = async () => {
          if (!confirm(t.delPhoto)) return;
          try { this._freeze = true; this._apply(await this._hass.callWS({ type: "device_inventory/delete_photo", device_id: d.id, photo_id: p.id })); draw(); } catch (e) { alert(`${t.saveFail}: ${e.message || e.code}`); }
        };
        w.appendChild(x); g.appendChild(w);
      });
      o.bx.appendChild(g);
      const ft = el("div", "display:flex;gap:8px;justify-content:flex-end;align-items:center;margin-top:12px");
      const stt = el("span", "margin-right:auto;font-size:12px;opacity:.8");
      const add = this._btn("", true), cl = this._btn(t.close); add.innerHTML = ico("camera", 16) + " " + escH(t.addPhoto);
      add.onclick = async () => { add.disabled = true; await this._pick(d, (x) => (stt.textContent = x)); this._freeze = true; await this._load(); draw(); };
      cl.onclick = o.close;
      ft.append(stt, add, cl); o.bx.appendChild(ft);
    };
    draw();
  }

  _manualInfo(d) {
    const t = this._t, m = (this._state.manuals || {})[d.id] || {};
    if (m.file) return { href: m.file, kind: "local", title: `${t.manualLocal}: ${m.name || "PDF"}${m.archived ? ` (${t.manualArchived} ${this._date(m.archived)})` : ""}` };
    if (m.link) {
      let h = m.link; try { h = new URL(m.link).hostname; } catch (e) { /* keep the link */ }
      return { href: m.link, kind: m.ai ? "ai" : "link", title: `${m.ai ? t.manualAiLink : t.manualLink}: ${h}${m.pdf ? " (PDF)" : ""}` };
    }
    return null;
  }

  // ask the AI (the AI task entity chosen in the options) for the manuals of the given devices, in chunks; only manufacturer and model leave Home Assistant
  async _aiFind(ids, overwrite, onProgress, hint) {
    const scan = Date.now().toString(36); // one id per scan: a second scan asks again for what was not found
    const t = this._t, tot = { found: 0, missing: 0, copied: 0, images: 0, quota: false, error: null, cancelled: false, local: "" }; let last = null;
    // progress window: bar, current device, running counts, cancel
    const ov = el("div", "position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:10000;display:flex;align-items:center;justify-content:center");
    const bx = el("div", "background:var(--card-background-color,#fff);color:var(--primary-text-color,#000);border-radius:12px;padding:16px;width:min(420px,92vw);box-shadow:0 8px 32px rgba(0,0,0,.4);font-family:var(--ha-font-family-body,Roboto,sans-serif)");
    const title = el("div", "font-weight:600;font-size:15px;margin-bottom:10px", t.aiProgress);
    const track = el("div", "height:8px;border-radius:4px;background:var(--divider-color,#888);overflow:hidden"), fill = el("div", "height:100%;width:0;background:var(--primary-color);transition:width .3s");
    track.appendChild(fill);
    const cur = el("div", "margin-top:10px;font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"), cnt = el("div", "margin-top:4px;font-size:12px;opacity:.75");
    const bc = this._btn(t.aiCancel); bc.onclick = () => { tot.cancelled = true; bc.disabled = true; };
    const ft = el("div", "display:flex;justify-content:flex-end;margin-top:12px"); ft.appendChild(bc);
    bx.append(title, track, cur, cnt, ft); ov.appendChild(bx); document.body.appendChild(ov);
    const names = new Map((this._state.devices || []).map((d) => [d.id, d.name]));
    let t0 = Date.now(), cur_i = 0;
    const tick = setInterval(() => { cnt.textContent = `${Math.min(cur_i + 1, ids.length)} / ${ids.length} – ${t.aiFoundN.replace("{n}", tot.found)} – ${Math.round((Date.now() - t0) / 1000)} s`; fill.style.opacity = Date.now() % 1200 < 600 ? "1" : ".6"; }, 500);
    const show = (i) => {
      cur_i = i; t0 = Date.now();
      fill.style.width = `${Math.round(i / ids.length * 100)}%`;
      cur.textContent = i < ids.length ? names.get(ids[i]) || "" : "";
      cnt.textContent = `${Math.min(i + 1, ids.length)} / ${ids.length} – ${t.aiFoundN.replace("{n}", tot.found)}`;
      if (onProgress) onProgress(i, ids.length);
    };
    try {
      for (let i = 0; i < ids.length && !tot.quota && !tot.cancelled; i++) {
        show(i);
        last = await this._hass.callWS(Object.assign({ type: "device_inventory/find_manuals", device_ids: [ids[i]], overwrite: !!overwrite, scan }, hint === undefined ? {} : { hint }));
        const st = last.stats;
        tot.found += st.found; tot.missing += st.missing; tot.copied += st.copied || 0; tot.images += st.images || 0;
        tot.quota = tot.quota || !!st.quota; tot.error = tot.error || st.error; tot.local = st.local || tot.local;
        if (last) { this._freeze = true; this._apply(last); }
      }
    } finally { clearInterval(tick); ov.remove(); }
    const lines = [];
    if (tot.cancelled) lines.push(t.aiStopped);
    if (tot.quota) lines.push(t.manualAiQuota.replace("{found}", tot.found));
    else if (tot.error && !tot.found) lines.push(t.manualAiError.replace("{error}", String(tot.error).slice(0, 300)));
    if (!tot.quota) lines.push(tot.found ? t.manualAiDone.replace("{found}", tot.found).replace("{none}", tot.missing) : t.manualAiNoneFound);
    if (tot.copied) lines.push(t.manualCopyDone.replace("{copied}", tot.copied).replace("{failed}", 0));
    if (tot.images) lines.push(t.manualAiImages.replace("{n}", tot.images));
    return Object.assign(tot, { text: lines.join("\n\n") });
  }

  async _aiAll(btn) {
    const t = this._t, s = this._state;
    if (!s.ai) { alert(t.manualAiNone); return; }
    const ids = this._filtered().filter((d) => { const m = (s.manuals || {})[d.id] || {}; const noPhoto = !((s.photos || {})[d.id] || []).length; return (!this._manualDocs(d).length || noPhoto || (m.ai && m.link && !m.pdf && !m.file && !(m.docs || []).length)) && !String(d.id).includes("~") && !/^mesh$/i.test(String(d.model)); }).map((d) => d.id); // no manual yet, or no photo yet, or only a web page as manual
    if (!ids.length) { alert(t.manualAiNothing); return; }
    if (!confirm(t.manualAiAsk.replace("{n}", ids.length))) return;
    btn.disabled = true;
    try { const r = await this._aiFind(ids, false, (n, m) => { btn.textContent = `${n}/${m}`; }); alert(r.text); }
    catch (e) { alert(`${t.manualFail}: ${e.message || e.code || e}`); }
    this._render();
  }

  // copy the PDFs behind the manual links of this tab into Home Assistant
  async _copyAll(btn) {
    const t = this._t, s = this._state;
    const ids = this._filtered().filter((d) => { const m = (s.manuals || {})[d.id] || {}; return m.link && !m.file && m.pdf !== false; }).map((d) => d.id);
    if (!ids.length) { alert(t.manualCopyNothing); return; }
    if (!confirm(t.manualCopyAsk.replace("{n}", ids.length))) return;
    btn.disabled = true; let copied = 0, failed = 0, last = null;
    try {
      for (let i = 0; i < ids.length; i += 5) {
        btn.textContent = `${Math.min(i + 5, ids.length)}/${ids.length}`;
        last = await this._hass.callWS({ type: "device_inventory/copy_manuals", device_ids: ids.slice(i, i + 5) });
        copied += last.stats.copied; failed += last.stats.failed;
      }
      if (last) { this._freeze = true; this._apply(last); }
      alert(t.manualCopyDone.replace("{copied}", copied).replace("{failed}", failed));
    } catch (e) { alert(`${t.manualFail}: ${e.message || e.code || e}`); }
    this._render();
  }

  // all documents of a device: the found / linked manual first, then the own uploaded PDFs
  // names of all files and links of a device (local copy, own documents, links): for the "Files" column, printout and CSV
  // temperature (the backend delivers °C) in the unit system of Home Assistant
  _tempText(c) {
    const f = ((this._hass && this._hass.config && this._hass.config.unit_system) || {}).temperature === "°F";
    return f ? `${(c * 9 / 5 + 32).toFixed(1)}°F` : `${c.toFixed(1)}°C`;
  }

  _fileNames(d) {
    if (String(d.id).includes("~")) return [];
    const m = (this._state.manuals || {})[d.id] || {}, out = [];
    const host = (u) => { try { return new URL(u).hostname.replace(/^www\./, ""); } catch (e) { return u; } };
    if (m.file) out.push(m.name || "PDF");
    else if (m.link) out.push(host(m.link));
    (m.docs || []).forEach((x) => out.push(x.name || "document"));
    (m.links || []).forEach((x) => out.push(x.title || host(x.url)));
    return [...new Set(out)];
  }

  _manualDocs(d) {
    const t = this._t, m = (this._state.manuals || {})[d.id] || {}, out = [];
    const sh = (n, l = 26) => { n = String(n || "").replace(/\.[A-Za-z0-9]{1,8}$/, "").replace(/^www\./, ""); return n.length > l ? `${n.slice(0, 13)}…${n.slice(-10)}` : n; };
    const main = this._manualInfo(d);
    if (main) {
      let name = m.name || "PDF";
      if (main.kind !== "local" && m.link) { try { name = new URL(m.link).hostname; } catch (e) { name = m.link; } }
      out.push({ href: main.href, kind: main.kind, name, short: main.kind === "local" ? `PDF · ${sh(name, 22)}` : sh(name), title: main.title });
    }
    (m.links || []).forEach((x) => { let h = x.url; try { h = new URL(x.url).hostname; } catch (e) { /* keep */ } out.push({ href: x.url, kind: "link", name: x.title || h, short: sh(x.title || h), linkId: x.id, title: `${t.manualLinkWeb}: ${x.title || h}` }); });
    (m.docs || []).forEach((x) => out.push({ href: x.url, kind: "own", name: x.name || "PDF", short: `${(x.ext && x.ext !== "bin" ? x.ext : x.ext === "bin" ? "FILE" : "pdf").toUpperCase()} · ${sh(x.name || "PDF", 22)}`, id: x.id, title: `${t.manualOwn}: ${x.name || "PDF"}${x.ts ? ` (${t.manualUploaded} ${this._date(x.ts)})` : ""}` }));
    return out;
  }

  // small selection box next to the book icon: click an entry to open that document (the pencil opens the editor)
  _manualMenu(anchor, docs, ev) {
    if (ev) ev.stopPropagation();
    document.querySelectorAll(".di-mmenu").forEach((n) => n.remove());
    const r = anchor.getBoundingClientRect();
    const box = el("div", `position:fixed;z-index:10000;min-width:170px;max-width:min(320px,92vw);background:var(--card-background-color,#fff);color:var(--primary-text-color,#000);border-radius:10px;box-shadow:0 6px 24px rgba(0,0,0,.4);padding:6px;font-family:var(--ha-font-family-body,Roboto,sans-serif);font-size:13px`);
    box.className = "di-mmenu";
    docs.forEach((x) => {
      const a = el("a", "display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:8px;color:inherit;text-decoration:none;cursor:pointer");
      a.href = x.href; a.target = "_blank"; a.rel = "noopener";
      const ic = el("span", `display:inline-flex;flex:none;color:${x.kind === "local" ? "var(--success-color,#43a047)" : x.kind === "ai" ? "#a07cf0" : "var(--primary-color)"}`); ic.innerHTML = ico(x.kind === "link" ? "globe" : "manual", 20);
      a.title = x.title;
      a.append(ic, el("span", "overflow:hidden;text-overflow:ellipsis;white-space:nowrap", x.short || x.title));
      a.onmouseenter = () => { a.style.background = "var(--secondary-background-color,#eee)"; }; a.onmouseleave = () => { a.style.background = ""; };
      a.onclick = () => close();
      box.appendChild(a);
    });
    const close = () => { box.remove(); document.removeEventListener("mousedown", off, true); document.removeEventListener("keydown", key, true); };
    const off = (e) => { if (!e.composedPath().includes(box)) close(); };
    const key = (e) => { if (e.key === "Escape") close(); };
    document.body.appendChild(box);
    const w = box.offsetWidth, h = box.offsetHeight;
    box.style.left = `${Math.max(8, Math.min(r.left, window.innerWidth - w - 8))}px`;
    box.style.top = `${r.bottom + h + 8 > window.innerHeight ? Math.max(8, r.top - h - 4) : r.bottom + 4}px`;
    setTimeout(() => { document.addEventListener("mousedown", off, true); document.addEventListener("keydown", key, true); }, 0);
  }

  // after a failed search of ONE device: ask the user for more information (null = cancelled)
  _hintPrompt(value, local) {
    const t = this._t;
    return new Promise((resolve) => {
      const ov = el("div", "position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:10001;display:flex;align-items:center;justify-content:center");
      const bx = el("div", "background:var(--card-background-color,#fff);color:var(--primary-text-color,#000);border-radius:12px;padding:18px;width:min(520px,92vw);box-shadow:0 8px 32px rgba(0,0,0,.4);font-family:var(--ha-font-family-body,Roboto,sans-serif)");
      const done = (v) => { ov.remove(); resolve(v); };
      bx.appendChild(el("div", "font-weight:600;font-size:16px;margin-bottom:6px", t.manualAiNoneTitle));
      bx.appendChild(el("div", "font-size:14px;line-height:1.4;margin-bottom:12px", t.manualHintAsk));
      if (local) bx.appendChild(el("div", "font-size:12px;opacity:.75;margin:-4px 0 10px;word-break:break-word", `${t.manualLocalRead}: ${local}`));
      const inp = el("input", "width:100%;box-sizing:border-box;padding:9px 12px;border-radius:8px;font-size:14px;border:1px solid var(--divider-color,#888);background:var(--secondary-background-color);color:inherit;font-family:inherit");
      inp.type = "text"; inp.maxLength = 300; inp.value = value || ""; inp.placeholder = t.manualHintPh;
      const go = this._ibtn("sparkles", t.sAi, true), no = this._ibtn("close", t.cancel);
      const submit = () => { if (inp.value.trim()) done(inp.value.trim()); else inp.focus(); };
      inp.onkeydown = (ev) => { ev.stopPropagation(); if (ev.key === "Enter") submit(); if (ev.key === "Escape") done(null); };
      go.onclick = submit; no.onclick = () => done(null);
      const ft = el("div", "display:flex;gap:8px;justify-content:flex-end;margin-top:14px"); ft.append(no, go);
      bx.append(inp, ft); ov.appendChild(bx);
      ov.addEventListener("mousedown", (ev) => { if (ev.target === ov) done(null); });
      document.body.appendChild(ov); inp.focus();
    });
  }

  _manualDialog(d) {
    const t = this._t, o = this._overlay(), m = (this._state.manuals || {})[d.id] || {};
    const again = () => { o.close(); this._manualDialog(d); };
    const fail = (e) => alert(`${t.manualFail}: ${e.message || e.code || e}`);
    const hd = el("div", "display:flex;align-items:center;gap:10px;font-weight:600;font-size:18px;margin-bottom:14px");
    const hi = el("span", "display:inline-flex;color:var(--primary-color)"); hi.innerHTML = ico("manual", 26);
    hd.append(hi, el("span", "", `${t.manualOf}: ${d.name}`)); o.bx.appendChild(hd);
    const ib = (icon, label, primary, tip) => this._ibtn(icon, label, primary, tip);
    // list of the documents
    const docs = this._manualDocs(d), list = el("div", "display:flex;flex-direction:column;gap:8px;margin-bottom:16px");
    if (!docs.length) list.appendChild(el("div", "opacity:.7;font-size:13px", t.manualNone));
    docs.forEach((x) => {
      const row = el("div", "display:flex;align-items:center;gap:10px;padding:10px 12px;border:1px solid var(--divider-color,#888);border-radius:10px;font-size:14px");
      const a = el("a", "display:inline-flex;align-items:center;gap:10px;color:inherit;text-decoration:none;flex:1;min-width:0");
      a.href = x.href; a.target = "_blank"; a.rel = "noopener";
      const ic = el("span", `display:inline-flex;color:${x.kind === "local" ? "var(--success-color,#43a047)" : x.kind === "ai" ? "#a07cf0" : "var(--primary-color)"}`); ic.innerHTML = ico(x.kind === "link" ? "globe" : "manual", 26);
      a.append(ic, el("span", "overflow:hidden;text-overflow:ellipsis;white-space:nowrap", x.title));
      row.appendChild(a);
      if (x.id || x.linkId) {
        const del = el("button", "padding:6px 10px;border-radius:8px"); del.innerHTML = ico("trash", 18); del.title = t.del;
        del.onclick = async () => {
          if (!confirm(x.linkId ? t.manualLinkDel : t.manualDocDel)) return;
          try { this._freeze = true; this._apply(await this._hass.callWS(x.linkId ? { type: "device_inventory/delete_manual_link", device_id: d.id, link_id: x.linkId } : { type: "device_inventory/delete_manual_doc", device_id: d.id, doc_id: x.id })); again(); } catch (e) { fail(e); }
        };
        row.appendChild(del);
      }
      list.appendChild(row);
    });
    o.bx.appendChild(list);
    // link, AI, local copy, own PDFs
    const fld = "flex:1;min-width:200px;padding:9px 12px;border-radius:8px;font-size:14px;border:1px solid var(--divider-color,#888);background:var(--secondary-background-color);color:inherit;font-family:inherit";
    const sec = (txt) => el("div", "font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.04em;opacity:.65;margin:0 0 8px", txt);
    const box = el("div", "padding-top:14px;border-top:1px solid var(--divider-color,#888)");
    const row2 = el("div", "display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-start");
    const bUp = ib("pdfup", t.sUpload, true, t.manualUpload), bAi = ib("sparkles", t.sAi, false, t.manualAiFind), bFetch = ib("pdfdown", t.sArchive, false, t.manualFetch), bDel = ib("trash", t.sRemove, false, t.manualRemove);
    row2.append(bAi, bUp); if (m.link && !m.file) row2.appendChild(bFetch); if (m.file || m.link) row2.appendChild(bDel);
    const hbox = el("div", "margin:0 0 12px");
    hbox.appendChild(sec(t.manualHintSec));
    const hintIn = el("input", fld); hintIn.type = "text"; hintIn.maxLength = 300; hintIn.value = m.hint || ""; hintIn.placeholder = t.manualHintPh; hintIn.style.width = "100%"; hintIn.style.boxSizing = "border-box"; hintIn.onkeydown = (ev) => ev.stopPropagation();
    hbox.appendChild(hintIn); box.appendChild(hbox);
    box.appendChild(row2);
    box.appendChild(el("div", "margin-top:10px;font-size:12px;opacity:.65;line-height:1.4", t.manualUploadHint));
    const warn = el("div", "margin-top:8px;padding:8px 10px;border-radius:8px;font-size:12px;line-height:1.4;border:1px solid var(--warning-color,#ffa000);background:rgba(255,160,0,.10)");
    warn.innerHTML = ico("block", 14) + " ";
    warn.appendChild(document.createTextNode(t.manualSecWarn));
    box.appendChild(warn);
    const more = el("div", "margin-top:16px;padding-top:14px;border-top:1px solid var(--divider-color,#888)");
    more.appendChild(sec(t.manualLinkAdd));
    const row3 = el("div", "display:flex;gap:8px;flex-wrap:wrap;align-items:center");
    const lu = el("input", fld + ";flex:2");
    lu.type = "url"; lu.placeholder = t.manualMoreLink; lu.onkeydown = (ev) => ev.stopPropagation();
    const lt = el("input", fld + ";min-width:120px");
    lt.type = "text"; lt.placeholder = t.manualLinkTitle; lt.maxLength = 80; lt.onkeydown = (ev) => ev.stopPropagation();
    const bLink = ib("link", t.sAdd, false, t.manualLinkAdd); row3.append(lu, lt, bLink); more.appendChild(row3); box.appendChild(more);
    bLink.onclick = () => { if (lu.value.trim()) call(bLink, "add_manual_link", { url: lu.value.trim(), title: lt.value.trim() }); };
    o.bx.appendChild(box);
    const call = async (btn, type, extra) => {
      btn.disabled = true;
      try { this._freeze = true; this._apply(await this._hass.callWS(Object.assign({ type: `device_inventory/${type}`, device_id: d.id }, extra || {}))); again(); }
      catch (e) { btn.disabled = false; fail(e); }
    };
    bFetch.onclick = () => call(bFetch, "fetch_manual");
    bDel.onclick = () => call(bDel, "delete_manual");
    bAi.onclick = async () => {
      if (!this._state.ai) { alert(t.manualAiNone); return; }
      bAi.disabled = true;
      try {
        let hv = hintIn.value.trim(), r;
        for (;;) { // nothing found: ask for more information and search again, until something is found or the user gives up
          r = await this._aiFind([d.id], true, null, hv);
          if (r.found || r.quota || r.error || r.cancelled) { alert(r.text); break; }
          const more = await this._hintPrompt(hv, r.local);
          if (more === null) break;
          hv = more;
        }
        again();
      } catch (e) { bAi.disabled = false; fail(e); }
    };
    bUp.onclick = () => { // own PDFs, also old ones that exist nowhere on the internet; several at once
      const f = document.createElement("input"); f.type = "file"; f.multiple = true; f.style.display = "none"; document.body.appendChild(f);
      f.onchange = async () => {
        const files = [...(f.files || [])]; f.remove(); if (!files.length) return;
        bUp.disabled = true;
        try {
          for (let i = 0; i < files.length; i++) {
            bUp.lbl.textContent = `… ${i + 1}/${files.length}`;
            const fd = new FormData(); fd.append("file", files[i], files[i].name);
            const r = await this._hass.fetchWithAuth(`/api/device_inventory/manual_upload/${d.id}`, { method: "POST", body: fd });
            if (!r.ok) throw new Error(`${files[i].name}: HTTP ${r.status} ${await r.text()}`);
          }
          this._freeze = true; await this._load(); again();
        } catch (e) { bUp.disabled = false; bUp.lbl.textContent = t.sUpload; fail(e); this._freeze = true; await this._load(); }
      };
      f.click();
    };
    const ft = el("div", "display:flex;justify-content:flex-end;margin-top:16px");
    const bClose = ib("close", t.close); bClose.onclick = o.close; ft.appendChild(bClose); o.bx.appendChild(ft);
  }

  _editIp(d) {
    const t = this._t, o = this._overlay();
    o.bx.appendChild(el("div", "font-weight:600;font-size:16px;margin-bottom:10px", `${t.ipOf}: ${d.name}`));
    const inp = el("input", "width:100%;box-sizing:border-box;font-family:inherit;font-size:14px;padding:8px;border-radius:8px;border:1px solid var(--divider-color,#888);background:var(--secondary-background-color);color:inherit");
    inp.type = "text"; inp.placeholder = "192.168.1.20 / name.example.org"; inp.value = d.ip_manual || d.ip_stale ? d.ip : "";
    let mac = null;
    o.bx.appendChild(inp);
    const sg = d.ip_suggest || [];
    if (sg.length) o.bx.appendChild(el("div", "margin:12px 0 4px;font-size:12px;opacity:.7", t.ipSuggest));
    const list = el("div", ""); o.bx.appendChild(list);
    const showSug = (arr) => {
      list.replaceChildren();
      arr.forEach((x) => {
        const r = el("div", "display:flex;gap:10px;align-items:center;padding:6px 8px;border-radius:8px;cursor:pointer;border:1px solid var(--divider-color,#888);margin-bottom:4px");
        r.append(el("b", "", x.ip), el("span", "flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap", x.name), el("span", "font-size:12px;opacity:.6", x.mac || ""));
        r.onclick = () => { inp.value = x.ip; mac = x.mac || null; };
        list.appendChild(r);
      });
    };
    showSug(sg);
    const ft = el("div", "display:flex;gap:8px;justify-content:flex-end;align-items:center;margin-top:12px;flex-wrap:wrap");
    const bD = this._ibtn("trash", t.del), bC = this._ibtn("close", t.cancel), bS = this._ibtn("check", t.save, true);
    const save = async (ip) => {
      bS.disabled = true;
      try { this._freeze = true; this._apply(await this._hass.callWS({ type: "device_inventory/set_ip", device_id: d.id, ip, mac })); o.close(); } catch (e) { bS.disabled = false; alert(`${t.saveFail}: ${e.message || e.code}`); }
    };
    inp.onkeydown = (ev) => { if (ev.key === "Enter") { ev.preventDefault(); save(inp.value); } };
    bD.onclick = () => save(""); bC.onclick = o.close; bS.onclick = () => save(inp.value);
    if (d.ip_manual) ft.appendChild(bD);
    ft.append(bC, bS); o.bx.appendChild(ft); inp.focus();
  }

  _editNote(d) {
    const t = this._t, o = this._overlay(), old = (this._state.notes[d.id] || {}).t || "";
    o.bx.appendChild(el("div", "font-weight:600;font-size:16px;margin-bottom:10px", `${t.noteOf}: ${d.name}`));
    const ta = el("textarea", "width:100%;box-sizing:border-box;font-family:inherit;font-size:14px;padding:8px;border-radius:8px;border:1px solid var(--divider-color,#888);background:var(--secondary-background-color);color:inherit;resize:vertical");
    ta.rows = 8; ta.value = old;
    const ft = el("div", "display:flex;gap:8px;justify-content:flex-end;align-items:center;margin-top:10px;flex-wrap:wrap");
    ft.appendChild(el("span", "margin-right:auto;font-size:12px;opacity:.6", t.hint));
    const bD = this._ibtn("trash", t.del), bC = this._ibtn("close", t.cancel), bS = this._ibtn("check", t.save, true);
    const save = async (text) => {
      bS.disabled = true;
      try { this._freeze = true; this._apply(await this._hass.callWS({ type: "device_inventory/set_note", device_id: d.id, text })); o.close(); } catch (e) { bS.disabled = false; alert(`${t.saveFail}: ${e.message || e.code}`); }
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
            status(`… ${i + 1}/${files.length}`);
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
    const key = this._layoutKey(tgt);
    let c = null;
    try { c = JSON.parse(localStorage.getItem(key) || "null"); } catch (e) { c = null; }
    if (!c && this._config.class === "fritz") c = JSON.parse(JSON.stringify(FRITZ_LAYOUT[tgt === "print" ? "print" : "view"]));
    if (!c) c = JSON.parse(JSON.stringify(DEFAULT_LAYOUT[tgt === "print" ? "print" : "view"]));
    const base = COLS.filter((k) => k !== "kids");
    const known = (c.order || []).filter((k) => base.includes(k));
    const order = [...known]; // columns added in later versions go right behind their predecessor, not to the far end
    const off = new Set(c.off || []);
    const dflt = (DEFAULT_LAYOUT[tgt === "print" ? "print" : "view"].off) || [];
    base.forEach((k, i) => { if (order.includes(k)) return; let j = i - 1; while (j >= 0 && !order.includes(base[j])) j--; order.splice(j >= 0 ? order.indexOf(base[j]) + 1 : 0, 0, k); if (dflt.includes(k)) off.add(k); }); // a column added by a later version starts hidden when the defaults hide it
    return { order, off, w: c.w || {}, n: c.n || {} };
  }

  _layoutKey(tgt) { return (tgt === "print" ? "diPrint" : "diView") + (this._config.class === "fritz" ? "_fritz" : ""); }

  _saveCfg(tgt, cfg) {
    try { localStorage.setItem(this._layoutKey(tgt), JSON.stringify({ order: cfg.order, off: [...cfg.off], w: cfg.w, n: cfg.n || {} })); } catch (e) { /* ignore */ }
  }

  _printCfg() { return this._cfg("print"); }
  _viewCfg() { return this._cfg("view"); }

  _textCells(d, i) {
    const t = this._t, s = this._state;
    const inet = this._inet(d), ble = this._sw(d.ble_switch);
    const b = d.ble || {};
    return {
      "#": i + 1, status: d.online ? t.online : t.offline, internet: inet === "on" ? t.allowed : inet === "off" ? t.blocked : "",
      name: d.name || "", model: (d.mesh_stats ? ((d.model && d.model !== "Mesh" ? d.model + " · " : "") + d.mesh_stats.total + " Clients (LAN " + d.mesh_stats.lan + " · WiFi " + d.mesh_stats.wlan + ")") : d.model || ""), area: d.area || "", ip: d.ip || "", mac: d.mac || "", maker: d.manufacturer || "", fw: (d.sw_version || "").split(" ")[0],
      battery: d.battery != null ? d.battery + " %" : d.battery_low != null ? (d.battery_low ? t.low : t.ok) : "", seen: d.last_seen || "", manual: ((this._state.manuals || {})[d.id] || {}).link || "", files: this._fileNames(d).join("; "), added: d.added ? this._date(d.added) : "",
      distance: b.distance != null ? String(b.distance) : "", home: b.home != null ? (b.home ? t.yes : "") : "", bleaddr: b.address || "", scanner: b.scanner || "", mesh: (d.mesh && d.mesh.to) || "", lanc: d.mesh_stats ? String(d.mesh_stats.lan) : "", wific: d.mesh_stats ? String(d.mesh_stats.wlan) : "", conn: d.mesh && d.mesh.type ? String(d.mesh.type).replace(/WLAN/gi, "WiFi") + (d.mesh.ssid ? " " + d.mesh.ssid : "") : "", scannerip: b.scanner_ip || "",
      signal: d.rssi == null ? "" : String(d.rssi), temp: d.temp == null ? "" : this._tempText(d.temp), ble: ble === "on" ? "on" : ble === "off" ? "off" : "",
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

  // symbol of the active tab in front of the heading (the panel calls this again once the tab bar is built)
  _headIcon() {
    const h = this._hico; if (!h) return;
    this._iconCache = this._iconCache || {};
    const key = this._config.class;
    let svg = this._tabIconSvg();
    if (svg) this._iconCache[key] = svg; else svg = this._iconCache[key] || ""; // the tab bar is rebuilt now and then: keep the last symbol
    if (!svg && (this._iconTry = (this._iconTry || 0) + 1) <= 6) setTimeout(() => { if (this._hico === h) this._headIcon(); }, 700);
    else if (svg) this._iconTry = 0;
    h.innerHTML = svg;
    h.style.display = svg ? "inline-flex" : "none";
    const sv = h.querySelector("svg");
    if (sv) {
      // logos that are drawn smaller in the tab bar (explicit width there) are shown proportionally smaller here too
      const tw = parseFloat(sv.style.width) || 24, th = parseFloat(sv.style.height) || tw, k = tw < 24 ? tw / 24 : 1;
      const pic = !!sv.querySelector("image") || tw > th * 1.8; // a wide logo (picture or wordmark) keeps its own size
      const W = pic ? Math.round(tw) : Math.round(22 * k), H = pic ? Math.round(th) : Math.round(22 * k * (th / tw));
      sv.setAttribute("width", W); sv.setAttribute("height", H); sv.style.cssText = `width:${W}px;height:${H}px;display:block;flex:none;fill:currentColor`; sv.querySelectorAll("path").forEach((q) => { if (!q.getAttribute("fill")) q.setAttribute("fill", "currentColor"); }); }
  }

  _tabIconSvg() {
    // the symbol of the active tab of the sidebar panel (brand logo or Material icon), copied from the page
    try {
      // the card sits in the shadow root of the panel (document.querySelector does not reach into shadow roots)
      const root = this.getRootNode();
      // the tab of THIS card's class (the "on" marker is set a moment later than the class change and would give the previous tab's symbol)
      const sel = `.tab[data-k="${this._config.class}"]`;
      let tab = root && root.querySelector ? root.querySelector(sel) : null;
      if (!tab) { const panel = document.querySelector("device-inventory-panel"); tab = panel && panel.shadowRoot && panel.shadowRoot.querySelector(sel); }
      if (!tab) return "";
      let svg = tab.querySelector("svg");
      if (!svg) {
        const hi = tab.querySelector("ha-icon");
        const hs = hi && hi.shadowRoot && hi.shadowRoot.querySelector("ha-svg-icon");
        svg = hs && hs.shadowRoot && hs.shadowRoot.querySelector("svg");
      }
      return svg ? svg.outerHTML : "";
    } catch (e) { return ""; }
  }

  // "expand all" is remembered separately for the Router Mesh tab (default: only the mesh nodes visible)
  get _expAll() { return this._config.class === "mesh" || this._config.class === "fritz" ? !!this._expM : !!this._expG; }
  set _expAll(v) { if (this._config.class === "mesh" || this._config.class === "fritz") this._expM = v; else this._expG = v; }

  _print() {
    const t = this._t, s = this._state, E = (x) => String(x == null ? "" : x).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
    const hide = new Set(this._config.hide || []);
    OPTIONAL.forEach((c) => { if (!s.devices.some((d) => this._has(d, c))) hide.add(c); });
    hide.add("kids");
    const pcfg = this._printCfg();
    const cols = pcfg.order.filter((c) => !pcfg.off.has(c) && !hide.has(c));
    const wst = (c) => (pcfg.w[c] ? ` style="width:${pcfg.w[c]}mm;max-width:${pcfg.w[c]}mm;word-break:break-word"` : "");
    const title = this._label();
    const C = this._pcolor;
    const tabIcon = this._tabIconSvg();
    const PIC = HEAD_ICONS;
    const G = "#2e7d32", O = "#e65100", R = "#c62828";
    const sev = (v, good, warn, hi) => (hi ? (v >= good ? G : v >= warn ? O : R) : (v <= good ? G : v <= warn ? O : R));
    const small = this._ori === "portrait" || cols.length > 11;
    let html = `<!doctype html><html><head><meta charset="utf-8"><title>${E(title)}</title><style>@page{size:A4 ${this._ori};margin:8mm 8mm 12mm;@bottom-right{content:counter(page) "/" counter(pages);font:8pt Arial,sans-serif;color:#444}}
      body{font-family:Arial,sans-serif;font-size:${small ? 7.5 : 9}pt;color:#000;margin:0}th.ttl{background:#fff;border:none;border-bottom:.5pt solid #999;padding:0 0 2mm;font-size:13pt}th.ttl .ico{display:inline-block;vertical-align:middle;margin-right:2.5mm}th.ttl .ico svg{width:8mm;height:8mm;display:block}th.ttl .ico svg,th.ttl .ico svg path{fill:#000}th.ttl small{font-size:8pt;font-weight:normal;color:#444;margin-left:3mm}
      table{border-collapse:collapse;width:100%}th,td{border:.5pt solid #999;padding:1mm 1.4mm;text-align:left;vertical-align:top}td.bl{color:transparent;text-shadow:0 0 5px #000;-webkit-print-color-adjust:exact;print-color-adjust:exact}th{background:${C ? "#dce8f6" : "#e8e8e8"}}th svg{display:block;stroke:${C ? "#1b4f8a" : "#000"}}${C ? "body{-webkit-print-color-adjust:exact;print-color-adjust:exact}tbody tr:nth-child(even) td{background:#f5f7fa}th.ttl{background:#fff;color:#1b4f8a}th.ttl .ico svg,th.ttl .ico svg path{fill:#1b4f8a;stroke:none}" : ""}
      thead{display:table-header-group}tr{page-break-inside:avoid}img{width:${small ? 48 : 64}px;height:${small ? 48 : 64}px;object-fit:cover;margin:1px}</style></head><body>
      <table><thead><tr><th class="ttl" colspan="${cols.length}">${tabIcon ? `<span class="ico">${tabIcon}</span>` : ""}${E(title)}<small>${E(t.stand)}: ${E(new Date().toLocaleString(this._hass.language || "en"))} | ${s.devices.length} ${E(t.count)}</small></th></tr><tr>${cols.map((c) => `<th${wst(c)}>${pcfg.n[c] ? E(pcfg.n[c]) : c === "#" ? "#" : PIC[c] ? ico(PIC[c], 15) : E(t[c])}</th>`).join("")}</tr></thead><tbody>`;
    this._sorted().forEach((d, i) => {
      const cells = {
        "#": i + 1, status: d.online ? "🟢 " + t.online : "🔴 " + t.offline, internet: (() => { const x = this._inet(d); return x === "on" ? ico("checkc", 15) : x === "off" ? ico("block", 15) : "–"; })(), name: d.name, model: (d.mesh_stats ? ((d.model && d.model !== "Mesh" ? d.model + " · " : "") + d.mesh_stats.total + " Clients (LAN " + d.mesh_stats.lan + " · WiFi " + d.mesh_stats.wlan + ")") : d.model || "–"), area: d.area || "–", ip: d.ip || "–", mac: d.mac || "–",
        maker: d.manufacturer || "–", fw: (d.sw_version || "–").split(" ")[0], battery: d.battery != null ? d.battery + " %" : d.battery_low != null ? (d.battery_low ? t.low : t.ok) : "–",
        seen: this._ago(d.last_seen), manual: "–", files: this._fileNames(d).join("\n") || "–", added: d.added ? this._date(d.added) : "–", distance: d.ble && d.ble.distance != null ? d.ble.distance.toFixed(1) + " m" : "–", home: d.ble && d.ble.home != null ? (d.ble.home ? "✔" : "✘") : "–", bleaddr: (d.ble && d.ble.address) || "–", scanner: (d.ble && d.ble.scanner) || "–", mesh: d.mesh && d.mesh.to ? String(d.mesh.to).replace(/^fritz\./i, "") : "–", lanc: d.mesh_stats ? String(d.mesh_stats.lan) : "–", wific: d.mesh_stats ? String(d.mesh_stats.wlan) : "–", conn: d.mesh && d.mesh.type ? String(d.mesh.type).replace(/WLAN/gi, "WiFi") + (d.mesh.ssid ? " · " + d.mesh.ssid : "") : "–", scannerip: (d.ble && d.ble.scanner_ip) || "–", signal: d.rssi == null ? "–" : d.rssi + " dBm", temp: d.temp == null ? "–" : this._tempText(d.temp), ble: (() => { const x = this._sw(d.ble_switch); return x === "on" ? "on" : x === "off" ? "off" : "–"; })(), note: (s.notes[d.id] || {}).t || "",
      };
      const lvl = d.battery != null ? d.battery : d.battery_low != null ? (d.battery_low ? 0 : 100) : null;
      const tint = { battery: lvl == null ? null : lvl <= 20 ? R : lvl <= 40 ? O : G, signal: d.rssi == null ? null : sev(d.rssi, -60, -75, true), temp: d.temp == null ? null : sev(d.temp, ...(d.classes && d.classes.includes("fritz") ? [85, 95] : [55, 65]), false), home: d.ble && d.ble.home != null ? (d.ble.home ? G : R) : null };
      html += "<tr>" + cols.map((c) => c === "photos"
        ? `<td${wst(c)}>${(s.photos[d.id] || []).slice(0, 8).map((p) => `<img src="${p.url.startsWith("http") ? p.url : location.origin + p.url}">`).join("")}</td>`
        : c === "conn" && d.mesh && d.mesh.type ? `<td${wst(c)}><span${C ? ` style="color:${/lan/i.test(d.mesh.type) && !/wlan|wifi/i.test(d.mesh.type) ? "#1b66d1" : "#7a4fd1"}"` : ""} title="${E(cells[c])}">${ico(/lan/i.test(d.mesh.type) && !/wlan|wifi/i.test(d.mesh.type) ? "lan" : "wifi", 15)}</span></td>`
        : c === "internet" && cells[c].startsWith("<svg") ? `<td${wst(c)}>${C ? `<span style="color:${this._inet(d) === "on" ? G : R}">${cells[c]}</span>` : cells[c]}</td>`
        : `<td${wst(c)}${this._blur && BLURCOLS.includes(c) ? ' class="bl"' : ""}>${E(this._blur && BLURCOLS.includes(c) ? String(cells[c]).replace(/[0-9a-fA-F]/g, () => "0123456789abcdef"[Math.floor(Math.random() * 16)]) : cells[c]).replace(/\n/g, "<br>")}</td>`).map((h, k) => { const col = C && tint[cols[k]]; return col ? h.replace(/>([^<]*)<\/td>$/, `><b style="color:${col}">$1</b></td>`) : h; }).join("") + "</tr>";
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
