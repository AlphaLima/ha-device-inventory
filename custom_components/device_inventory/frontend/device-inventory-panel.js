/* Device Inventory sidebar panel: one tab per device class, each showing the table card. */

const PREFERRED = ["all", "shelly", "esphome", "zigbee", "homematic", "mqtt", "matter", "wled", "sonoff", "zwave", "tasmota", "hue", "tuya", "blink", "alexa", "modbus", "fritz", "mesh", "apple", "bluetooth", "battery", "other"];
const MDI = {
  all: "mdi:home-assistant", zigbee: "mdi:zigbee", homematic: "mdi:home-automation", zwave: "mdi:z-wave",
hue: "mdi:lightbulb-group-outline", tuya: "mdi:cloud-outline",
  mesh: "mdi:router-wireless", bluetooth: "mdi:bluetooth", battery: "mdi:battery-alert", other: "mdi:devices",
};
const SVG = {
  modbus: { vb: "0 0 130 94", w: 26, d: "M51 0h8v1h-8zM49 1h12v1h-12zM47 2h16v1h-16zM46 3h18v1h-18zM45 4h20v2h-20zM44 6h22v1h-22zM86 10h5v1h-5zM84 11h11v1h-11zM43 7h24v6h-24zM82 12h14v1h-14zM80 13h17v1h-17zM56 13h11v1h-11zM43 13h11v1h-11zM79 14h19v1h-19zM58 14h10v1h-10zM43 14h10v2h-10zM79 15h20v1h-20zM59 15h13v1h-13zM78 16h22v1h-22zM60 16h15v1h-15zM43 16h9v2h-9zM57 17h2v1h-2zM60 17h40v1h-40zM44 18h8v1h-8zM57 18h44v1h-44zM54 18h1v1h-1zM45 19h10v1h-10zM45 20h11v1h-11zM58 19h43v3h-43zM43 21h13v1h-13zM42 22h14v1h-14zM59 22h42v2h-42zM41 23h16v1h-16zM87 24h14v1h-14zM40 24h17v1h-17zM28 24h3v1h-3zM59 24h24v1h-24zM39 25h18v1h-18zM24 25h11v1h-11zM59 25h23v1h-23zM88 25h13v2h-13zM60 26h24v1h-24zM38 26h19v1h-19zM22 26h15v1h-15zM21 27h37v1h-37zM60 27h23v1h-23zM60 28h22v1h-22zM20 28h38v1h-38zM88 27h12v3h-12zM85 29h1v1h-1zM19 29h39v1h-39zM61 29h20v1h-20zM84 30h2v1h-2zM88 30h11v1h-11zM61 30h19v1h-19zM19 30h40v1h-40zM83 31h15v1h-15zM61 31h18v1h-18zM18 31h41v2h-41zM62 32h16v1h-16zM82 32h15v1h-15zM80 33h16v1h-16zM62 33h15v1h-15zM17 33h42v1h-42zM17 34h17v1h-17zM62 34h14v1h-14zM79 34h16v1h-16zM37 34h23v2h-23zM62 35h13v1h-13zM78 35h17v1h-17zM17 35h15v1h-15zM35 36h25v1h-25zM77 36h18v1h-18zM17 36h13v1h-13zM63 36h11v1h-11zM66 37h7v1h-7zM76 37h20v1h-20zM37 37h24v1h-24zM63 37h1v2h-1zM17 37h14v2h-14zM41 38h20v1h-20zM75 38h21v1h-21zM69 38h3v1h-3zM66 38h1v2h-1zM69 39h2v1h-2zM60 39h1v1h-1zM34 39h2v1h-2zM74 39h22v1h-22zM44 39h14v1h-14zM17 39h15v2h-15zM57 40h1v1h-1zM35 40h4v1h-4zM73 40h23v1h-23zM47 40h9v1h-9zM65 40h2v2h-2zM36 41h7v1h-7zM51 41h5v1h-5zM18 41h15v1h-15zM72 41h25v1h-25zM71 42h26v1h-26zM98 42h5v1h-5zM54 42h3v1h-3zM59 42h2v1h-2zM18 42h28v1h-28zM64 42h3v2h-3zM19 43h30v1h-30zM60 43h3v1h-3zM74 43h31v1h-31zM60 44h8v1h-8zM73 44h34v1h-34zM20 44h32v1h-32zM61 45h10v1h-10zM74 45h35v1h-35zM21 45h35v1h-35zM73 46h37v1h-37zM60 46h9v1h-9zM22 46h33v1h-33zM73 47h38v1h-38zM23 47h31v1h-31zM58 47h10v2h-10zM76 48h35v1h-35zM25 48h31v1h-31zM62 49h3v1h-3zM31 49h24v1h-24zM66 49h3v1h-3zM80 49h32v1h-32zM68 50h1v1h-1zM31 50h27v1h-27zM84 50h7v1h-7zM72 50h3v1h-3zM93 50h19v1h-19zM62 50h2v2h-2zM94 51h19v1h-19zM31 51h26v1h-26zM87 51h5v1h-5zM72 51h6v1h-6zM70 52h12v1h-12zM31 52h25v1h-25zM90 52h2v1h-2zM62 52h1v1h-1zM95 52h18v2h-18zM68 53h18v1h-18zM32 53h23v1h-23zM59 53h1v1h-1zM58 54h2v1h-2zM32 54h22v1h-22zM68 54h21v1h-21zM62 54h1v1h-1zM96 54h17v2h-17zM64 54h2v2h-2zM32 55h21v1h-21zM68 55h23v1h-23zM57 55h6v1h-6zM95 56h18v1h-18zM32 56h20v1h-20zM56 56h10v1h-10zM69 56h21v1h-21zM55 57h12v1h-12zM33 57h18v1h-18zM93 57h20v1h-20zM69 57h20v1h-20zM33 58h17v1h-17zM54 58h13v1h-13zM69 58h44v1h-44zM53 59h14v1h-14zM33 59h16v1h-16zM70 59h42v2h-42zM31 60h17v1h-17zM52 60h16v1h-16zM51 61h17v1h-17zM30 61h17v1h-17zM70 61h41v1h-41zM50 62h18v1h-18zM29 62h17v1h-17zM71 62h40v1h-40zM71 63h39v1h-39zM49 63h20v1h-20zM29 63h12v1h-12zM43 63h2v1h-2zM48 64h21v1h-21zM71 64h20v1h-20zM42 64h2v1h-2zM92 64h17v1h-17zM28 64h12v2h-12zM72 65h18v1h-18zM94 65h13v1h-13zM47 65h22v1h-22zM72 66h17v1h-17zM96 66h10v1h-10zM45 66h25v2h-25zM100 67h2v1h-2zM72 67h16v1h-16zM27 66h13v3h-13zM47 68h23v1h-23zM73 68h14v1h-14zM73 69h13v1h-13zM27 69h14v1h-14zM46 69h25v1h-25zM73 70h2v1h-2zM77 70h8v2h-8zM27 70h44v2h-44zM74 71h1v1h-1zM27 72h45v1h-45zM77 72h9v2h-9zM27 73h42v1h-42zM76 74h11v1h-11zM72 74h1v1h-1zM25 74h44v1h-44zM4 74h8v1h-8zM70 74h1v1h-1zM24 75h49v1h-49zM3 75h10v1h-10zM75 75h12v2h-12zM4 76h9v1h-9zM55 76h18v1h-18zM23 76h27v1h-27zM58 77h29v1h-29zM22 77h28v1h-28zM3 77h11v2h-11zM22 78h27v1h-27zM62 78h25v2h-25zM3 79h12v1h-12zM21 79h27v1h-27zM107 80h5v1h-5zM20 80h30v1h-30zM58 80h32v1h-32zM117 80h12v1h-12zM95 80h5v1h-5zM2 80h13v2h-13zM34 81h17v1h-17zM56 81h35v1h-35zM115 81h15v1h-15zM94 81h6v2h-6zM106 81h6v2h-6zM19 81h13v2h-13zM2 82h14v1h-14zM55 82h37v1h-37zM35 82h17v2h-17zM114 82h16v2h-16zM18 83h7v1h-7zM54 83h38v1h-38zM26 83h6v2h-6zM9 83h7v2h-7zM63 84h29v1h-29zM17 84h7v1h-7zM34 84h7v1h-7zM54 84h6v1h-6zM46 84h6v1h-6zM114 84h5v1h-5zM125 84h5v1h-5zM2 83h6v3h-6zM106 83h5v3h-5zM64 85h21v1h-21zM10 85h14v1h-14zM114 85h14v1h-14zM54 85h5v1h-5zM94 83h5v4h-5zM87 85h5v2h-5zM34 85h5v2h-5zM47 85h5v2h-5zM65 86h20v1h-20zM10 86h13v1h-13zM53 86h6v1h-6zM114 86h15v1h-15zM105 86h6v2h-6zM66 87h17v1h-17zM114 87h16v1h-16zM10 87h12v1h-12zM53 87h5v2h-5zM86 87h5v2h-5zM33 87h6v2h-6zM93 87h6v2h-6zM46 87h5v2h-5zM11 88h10v1h-10zM104 88h6v1h-6zM65 88h17v1h-17zM124 88h6v1h-6zM116 88h1v1h-1zM11 89h9v1h-9zM125 89h5v1h-5zM53 89h38v1h-38zM112 89h5v1h-5zM25 85h6v6h-6zM1 86h6v5h-6zM33 89h18v2h-18zM12 90h8v1h-8zM53 90h37v1h-37zM93 89h17v3h-17zM112 90h17v2h-17zM33 91h17v1h-17zM0 91h7v1h-7zM12 91h7v1h-7zM73 91h17v1h-17zM53 91h17v1h-17zM105 92h4v1h-4zM54 92h16v1h-16zM94 92h10v1h-10zM72 92h17v1h-17zM113 92h15v1h-15zM12 92h6v1h-6zM34 92h15v1h-15zM24 91h6v3h-6zM0 92h6v2h-6zM55 93h8v1h-8zM65 93h5v1h-5zM95 93h7v1h-7zM114 93h13v1h-13zM79 93h9v1h-9zM35 93h12v1h-12zM104 93h5v1h-5zM72 93h6v1h-6zM13 93h5v1h-5z" }, // Modbus logo with lettering (arrows cut out)
  blink: { vb: "0 0 70 96", w: 15, d: "M1 0h14v1h-14zM0 1h16v18h-16zM0 19h17v2h-17zM0 21h19v1h-19zM0 22h42v1h-42zM0 23h46v1h-46zM0 24h49v1h-49zM0 25h51v1h-51zM0 26h53v1h-53zM0 27h55v1h-55zM0 28h56v1h-56zM0 29h57v1h-57zM0 30h58v1h-58zM0 31h59v1h-59zM0 32h60v1h-60zM0 33h61v1h-61zM0 34h62v1h-62zM0 35h63v1h-63zM0 36h64v1h-64zM0 37h20v1h-20zM38 37h26v1h-26zM0 38h18v1h-18zM41 38h24v1h-24zM43 39h22v1h-22zM44 40h22v1h-22zM0 39h17v3h-17zM45 41h21v1h-21zM46 42h21v1h-21zM47 43h20v1h-20zM48 44h20v1h-20zM49 45h19v2h-19zM50 47h19v2h-19zM51 49h18v3h-18zM52 52h17v1h-17zM52 53h18v11h-18zM52 64h17v1h-17zM51 65h18v4h-18zM50 69h19v1h-19zM50 70h18v1h-18zM49 71h19v1h-19zM48 72h20v1h-20zM48 73h19v1h-19zM47 74h20v1h-20zM0 42h16v34h-16zM46 75h20v1h-20zM45 76h21v1h-21zM0 76h17v2h-17zM43 77h22v1h-22zM0 78h18v1h-18zM42 78h23v1h-23zM0 79h19v1h-19zM39 79h25v1h-25zM35 80h29v1h-29zM0 80h22v1h-22zM0 81h63v1h-63zM0 82h62v1h-62zM0 83h61v2h-61zM0 85h60v1h-60zM0 86h59v1h-59zM0 87h57v1h-57zM0 88h56v1h-56zM1 89h54v1h-54zM1 90h52v1h-52zM2 91h49v1h-49zM2 92h47v1h-47zM3 93h43v1h-43zM5 94h38v1h-38zM7 95h31v1h-31z" }, // Blink "b" mark
  apple: { vb: "0 0 24 24", d: "M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" },
  hue: { vb: "0 0 112 44", w: 40, img: "data:image/png;base64,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" }, // Philips Hue logo (picture instead of a path)
  fritz: { vb: "0 0 24 24", w: 20, d: "M13.495 19.183 17.37 24l4.817-3.903-3.875-4.817zM23.571.692 16.097.111l-.914 15.003 6.118.221zM6.962 5.564v4.097l5.62-.055v5.37H7.016v8.055H.43V.277L13.024 0V5.51z" },
  alexa: { vb: "0 0 24 24", eo: true, d: "M2.5 10C2.5 7.9 6.6 6.3 12 6.3S21.5 7.9 21.5 10V14.2C21.5 16.6 17.3 18.2 12 18.2S2.5 16.6 2.5 14.2ZM7.4 8.3a1.1 .5 0 1 0 2.2 0a1.1 .5 0 1 0 -2.2 0ZM10.9 7.6a1.1 .5 0 1 0 2.2 0a1.1 .5 0 1 0 -2.2 0ZM14.4 8.3a1.1 .5 0 1 0 2.2 0a1.1 .5 0 1 0 -2.2 0ZM10.9 9.3a1.1 .5 0 1 0 2.2 0a1.1 .5 0 1 0 -2.2 0ZM3.3 11.2C5 12.6 8.2 13.3 12 13.3S19 12.6 20.7 11.2L20.7 11.9C19 13.4 15.8 14.1 12 14.1S5 13.4 3.3 11.9Z" }, // Echo Dot (own drawing)
  sonoff: { vb: "-33 129 540 540", d: "M505 390L503 364L498 338L491 313L481 288L469 265L455 243L438 222L420 203L400 186L379 171L356 159L331 148L306 140L281 135L255 132L228 131L202 133L176 138L151 145L126 155L103 167L81 181L60 198L41 216L24 236L9 257L-3 280L-14 305L-22 330L-27 355L-30 381L-31 408L-29 434L-24 460L-17 485L-7 510L5 533L19 555L36 576L54 595L74 612L95 627L118 639L143 650L168 658L193 663L219 666L246 667L272 665L298 660L323 653L348 643L371 631L393 617L414 600L433 582L450 562L465 541L477 518L488 493L496 468L501 443L504 417ZM294 278L289 273L297 262L306 270L311 278L315 286L317 298L316 311L313 320L306 330L297 338L289 327L294 322L299 315L302 307L303 299L302 293L300 286ZM329 259L317 246L328 234L342 249L347 258L352 267L355 277L357 287L358 303L357 313L355 323L350 337L342 351L328 366L317 354L326 345L335 330L340 315L342 302L342 294L340 281L335 270ZM365 238L358 228L349 219L361 207L371 217L379 229L386 241L392 254L397 268L399 282L400 304L399 318L397 332L389 352L379 371L371 383L361 393L349 381L361 367L368 356L374 345L380 328L382 316L383 303L382 284L380 272L374 255ZM82 454L82 278L257 278L257 322L126 322L126 410L257 410L257 585L82 585L82 541L213 541L213 454Z" },
  tasmota: { vb: "-6 -6 216 216", d: "M94.0 146.5C94.0 114.9 93.8 89.0 93.6 89.0C90.4 89.0 79.3 93.9 74.9 97.2C48.7 117.2 48.9 153.9 75.3 173.1L79.2 175.9L79.3 184.5C79.4 189.2 79.1 193.0 78.7 193.0C76.1 193.0 65.1 186.1 59.6 180.9C41.2 163.8 34.7 139.1 42.4 115.6C56.6 72.3 111.4 57.9 144.2 88.8C171.7 114.7 171.7 155.4 144.4 180.9C138.9 186.1 127.9 193.0 125.3 193.0C124.9 193.0 124.6 189.1 124.7 184.3L124.8 175.6L129.2 172.5C155.1 153.6 155.1 117.0 129.1 97.2C124.7 93.9 113.6 89.0 110.4 89.0C110.2 89.0 110.0 114.9 110.0 146.5L110.0 204.0L102.0 204.0L94.0 204.0L94.0 146.5ZM6.0 107.5L0.5 102.0L51.3 51.2L102.0 0.5L152.7 51.2L203.5 102.0L197.7 107.7L192.0 113.5L147.0 68.5L102.0 23.5L57.2 68.3C32.6 92.9 12.3 113.0 12.0 113.0C11.7 113.0 9.0 110.5 6.0 107.5Z" },
  shelly: { vb: "-1.5 -1.5 27 27", d: "M12 0C5.373 0 0 5.373 0 12a12 12 0 0 0 .033.88c1.07-.443 2.495-.679 4.322-.679h5.762c-.167.61-.548 1.087-1.142 1.436-.532.308-1.14.463-1.823.463h-.927c-.89 0-1.663.154-2.32.463-.859.403-1.286 1-1.286 1.789 0 .893.59 1.594 1.774 2.1a7.423 7.423 0 0 0 2.927.581c1.318 0 2.416-.29 3.297-.867 1.024-.664 1.535-1.616 1.535-2.857 0-.854-.325-2.08-.976-3.676-.65-1.597-.975-2.837-.975-3.723 0-2.79 2.305-4.233 6.916-4.324.641-.01 1.337-.005 1.916-.004.593 0 1.144.05 1.66.147A12 12 0 0 0 12 0zm4.758 5.691c-1.206 0-1.809.502-1.809 1.506 0 .514.356 1.665 1.067 3.451.71 1.787 1.064 3.186 1.064 4.198 0 2.166-1.202 3.791-3.607 4.875-1.794.797-3.892 1.197-6.297 1.197-1.268 0-2.442-.114-3.543-.316A12 12 0 0 0 12 24c6.627 0 12-5.373 12-12a12 12 0 0 0-.781-4.256a3.404 3.404 0 0 1-.832.77h-4.371l1.425-2.828a299.94 299.94 0 0 0-2.683.005Z" },
  esphome: { vb: "-24 -19 288 288", d: "m 240,224.78 c 0,8.25 -6.75,15 -15,15 H 15 c -8.25,0 -15,-6.75 -15,-15 v -90 c 0,-8.25 4.7812,-19.782 10.6125,-25.613 L 109.387,10.3734 c 5.832,-5.8312 15.376,-5.8312 21.207,0 l 98.793,98.7936 C 235.219,114.998 240,126.53 240,134.78 Z m -80.006,-140.344 h -80.007 c -3.318,0 -6,2.681 -6,6 V 239.78 h 12 V 96.436 h 68.007 v 12 h -50.007 c -3.318,0 -6,2.681 -6,6 v 24 c 0,3.319 2.682,6 6,6 h 50.007 v 12 h -50.007 c -3.318,0 -6,2.681 -6,6 v 24 c 0,3.319 2.682,6 6,6 h 50.007 v 12 h -50.007 c -3.318,0 -6,2.681 -6,6 0,3.319 2.682,6 6,6 h 56.007 c 3.318,0 6,-2.681 6,-6 v -24 c 0,-3.319 -2.682,-6 -6,-6 h -50.007 v -12 h 50.007 c 3.318,0 6,-2.681 6,-6 v -24 c 0,-3.319 -2.682,-6 -6,-6 h -50.007 v -12 h 50.007 c 3.318,0 6,-2.681 6,-6 v -24 c 0,-3.319 -2.682,-6 -6,-6 z" },
  mqtt: { vb: "-38 -38 588 588", d: "M1.5 290.2H0V486c0 14.1 11.6 25.7 25.7 25.7h201.6C225.6 389.4 125.2 290.2 1.5 290.2m0-161.5H0V212c166.3.8 301.5 134.5 303.3 299.8h86.3C388.1 300.3 214.7 128.7 1.5 128.7M512 486.3V309.4C453.5 166 335.6 52.7 189 0H25.7C11.6 0 0 11.6 0 25.7v25c255.9.8 464.1 206.9 465.6 461.3h20.7c14.3-.3 25.7-11.6 25.7-25.7M444.6 71.4c23.7 23.7 47.9 53.7 67.4 80.2V25.5c0-14-11.3-25.4-25.3-25.5H356.5c30.3 20.9 61.6 44.9 88.1 71.4" },
  matter: { vb: "-8 -14 528 528", d: "M152 128.5c21.5 17.5 47.1 29.2 74.4 34.2V17.1L256.1 0l29.6 17.1v145.5c27.3-4.9 52.9-16.7 74.5-34.2l53.8 31.1c-87.6 86.5-228.5 86.5-316.1 0zM217.5 500c31.2-119.1-39.4-241.1-158.2-273.5v62.3c25.9 9.9 48.9 26.2 66.8 47.4L0 408.8V443l29.7 17 126.1-72.7c9.4 26.1 12 54.2 7.6 81.4l54.1 31.4Zm235.3-273.5C334 259 263.6 381 294.8 500l54-31.2c-4.4-27.4-1.7-55.4 7.6-81.4l126 72.6 29.6-17.1v-34.2L385.9 336c17.9-21.2 40.9-37.5 66.8-47.4v-62.2Z" },
  wled: { vb: "-3 -5 38 38", d: "M14 0h4v1h-4zM12 1h8v1h-8zM11 2h10v1h-10zM10 3h12v1h-12zM10 4h12v1h-12zM9 5h3v1h-3zM14 5h4v1h-4zM20 5h3v1h-3zM9 6h2v1h-2zM15 6h2v1h-2zM21 6h2v1h-2zM9 7h2v1h-2zM15 7h2v1h-2zM21 7h2v1h-2zM9 8h2v1h-2zM15 8h2v1h-2zM21 8h2v1h-2zM9 9h2v1h-2zM12 9h2v1h-2zM15 9h2v1h-2zM18 9h2v1h-2zM21 9h2v1h-2zM9 10h14v1h-14zM9 11h6v1h-6zM17 11h6v1h-6zM9 12h14v1h-14zM0 13h1v1h-1zM9 13h14v1h-14zM31 13h1v1h-1zM1 14h3v1h-3zM9 14h14v1h-14zM28 14h3v1h-3zM3 15h2v1h-2zM8 15h16v1h-16zM27 15h2v1h-2zM3 16h2v1h-2zM8 16h16v1h-16zM27 16h2v1h-2zM4 17h2v1h-2zM10 17h2v1h-2zM13 17h2v1h-2zM17 17h2v1h-2zM20 17h2v1h-2zM26 17h2v1h-2zM4 18h2v1h-2zM10 18h2v1h-2zM13 18h2v1h-2zM17 18h2v1h-2zM20 18h2v1h-2zM26 18h2v1h-2zM5 19h2v1h-2zM9 19h2v1h-2zM13 19h2v1h-2zM17 19h2v1h-2zM21 19h2v1h-2zM25 19h2v1h-2zM5 20h5v1h-5zM13 20h2v1h-2zM17 20h2v1h-2zM22 20h5v1h-5zM6 21h3v1h-3zM13 21h2v1h-2zM17 21h2v1h-2zM23 21h3v1h-3zM13 22h2v1h-2zM17 22h2v1h-2zM13 23h2v1h-2zM17 23h2v1h-2zM13 24h2v1h-2zM17 24h2v1h-2zM13 25h2v1h-2zM17 25h2v1h-2zM13 26h2v1h-2zM13 27h2v1h-2z" },
};
const NAMES = { shelly: "Shelly", esphome: "ESPHome", zigbee: "ZigBee", homematic: "Homematic", mqtt: "MQTT", matter: "Matter",
  wled: "WLED", sonoff: "Sonoff", zwave: "Z-Wave", tasmota: "Tasmota", hue: "Philips Hue", tuya: "Tuya", blink: "Blink", alexa: "Amazon Echo", modbus: "Modbus", mesh: "Router Mesh", fritz: "FRITZ!", apple: "Apple", bluetooth: "Bluetooth" };
// same wording as the card headings
const LABEL = {
  en: { all: "All devices", other: "Other", battery: "Batteries", showBadges: "Show missing (offline) devices and red counters", hideBadges: "Hide missing devices and red counters" },
  de: { all: "Alle Geräte", other: "Sonstige", battery: "Batterien", showBadges: "Fehlende Geräte und rote Zähler anzeigen", hideBadges: "Fehlende Geräte und rote Zähler ausblenden" },
  fr: { all: "Tous les appareils", other: "Autres", battery: "Piles", showBadges: "Afficher les appareils manquants (hors ligne) et les compteurs rouges", hideBadges: "Masquer les appareils manquants et les compteurs rouges" },
  es: { all: "Todos los dispositivos", other: "Otros", battery: "Baterías", showBadges: "Mostrar dispositivos ausentes (sin conexión) y contadores rojos", hideBadges: "Ocultar dispositivos ausentes y contadores rojos" },
  nl: { all: "Alle apparaten", other: "Overig", battery: "Batterijen", showBadges: "Ontbrekende (offline) apparaten en rode tellers tonen", hideBadges: "Ontbrekende apparaten en rode tellers verbergen" },
  it: { all: "Tutti i dispositivi", other: "Altro", battery: "Batterie", showBadges: "Mostra i dispositivi mancanti (offline) e i contatori rossi", hideBadges: "Nascondi i dispositivi mancanti e i contatori rossi" },
  pl: { all: "Wszystkie urządzenia", other: "Inne", battery: "Baterie", showBadges: "Pokaż brakujące (offline) urządzenia i czerwone liczniki", hideBadges: "Ukryj brakujące urządzenia i czerwone liczniki" },
  pt: { all: "Todos os dispositivos", other: "Outros", battery: "Baterias", showBadges: "Mostrar dispositivos em falta (offline) e contadores vermelhos", hideBadges: "Ocultar dispositivos em falta e contadores vermelhos" },
  cs: { all: "Všechna zařízení", other: "Ostatní", battery: "Baterie", showBadges: "Zobrazit chybějící (offline) zařízení a červené počítadla", hideBadges: "Skrýt chybějící zařízení a červené počítadla" },
  ru: { all: "Все устройства", other: "Прочее", battery: "Батареи", showBadges: "Показать отсутствующие (не в сети) устройства и красные счётчики", hideBadges: "Скрыть отсутствующие устройства и красные счётчики" },
  sv: { all: "Alla enheter", other: "Övrigt", battery: "Batterier", showBadges: "Visa saknade (offline) enheter och röda räknare", hideBadges: "Dölj saknade enheter och röda räknare" },
  nb: { all: "Alle enheter", other: "Annet", battery: "Batterier", showBadges: "Vis manglende (offline) enheter og røde tellere", hideBadges: "Skjul manglende enheter og røde tellere" },
  da: { all: "Alle enheder", other: "Andet", battery: "Batterier", showBadges: "Vis manglende (offline) enheder og røde tællere", hideBadges: "Skjul manglende enheder og røde tællere" },
  af: { all: "Alle toestelle", other: "Ander", battery: "Batterye", showBadges: "Wys ontbrekende (aflyn) toestelle en rooi tellers", hideBadges: "Versteek ontbrekende toestelle en rooi tellers" },
};
LABEL.no = LABEL.nb; LABEL.nn = LABEL.nb;

class DeviceInventoryPanel extends HTMLElement {
  set hass(hass) {
    this._hass = hass;
    if (!this._built) {
      this._built = true;
      // the card is loaded globally (extra JS url); wait until it is defined
      this._whenCard().then(() => {
        try {
          this._build();
          this._loadTabs();
          [5000, 12000, 25000].forEach((ms) => setTimeout(() => this._loadTabs(), ms)); // warm-up after start
          if (this._card) this._card.hass = this._hass;
        } catch (e) { this._fail(`Error while building the page: ${e && e.message ? e.message : e}`); }
      }).catch((e) => this._fail(e && e.message ? e.message : String(e)));
      this._timer = setInterval(() => (this.isConnected ? this._loadTabs() : clearInterval(this._timer)), 60000);
    }
    if (this._menu) this._menu.hass = hass;
    if (this._card) this._card.hass = hass;
  }

  // the card file is normally loaded by Home Assistant itself; if it did not arrive, load it from here and show why it failed
  _whenCard() {
    if (customElements.get("device-inventory-card")) return Promise.resolve();
    return new Promise((resolve, reject) => {
      let done = false;
      const ok = () => { if (!done) { done = true; resolve(); } };
      customElements.whenDefined("device-inventory-card").then(ok);
      setTimeout(() => {
        if (done) return;
        const sc = document.createElement("script");
        sc.src = "/device_inventory_static/device-inventory-card.js?r=" + Date.now();
        sc.onerror = () => { if (!done) { done = true; reject(new Error("The file /device_inventory_static/device-inventory-card.js could not be loaded (blocked by proxy, adblocker or network filter, or 404).")); } };
        document.head.appendChild(sc);
        setTimeout(() => { if (!done) { done = true; reject(new Error("The card script loaded but did not start (JavaScript error, probably an outdated browser/app). See the browser console (F12).")); } }, 8000);
      }, 3000);
    });
  }

  _fail(msg) {
    const box = document.createElement("div");
    box.style.cssText = "padding:24px;max-width:640px;font:14px/1.5 sans-serif;color:var(--primary-text-color)";
    box.innerHTML = "<h3 style='margin:0 0 8px'>Device Inventory</h3>";
    const p = document.createElement("p"); p.textContent = msg; box.appendChild(p);
    const q = document.createElement("p"); q.style.opacity = ".7";
    q.textContent = `Home Assistant: ${(this._hass && this._hass.config && this._hass.config.version) || "?"} · ${navigator.userAgent}`;
    box.appendChild(q);
    this.appendChild(box);
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
      .tabs.nobadge .badge{display:none}
      .tgl{flex:none;display:flex;align-items:center;justify-content:center;width:40px;height:40px;border:none;background:transparent;cursor:pointer;border-radius:50%;color:inherit}
      .tgl:hover{background:rgba(127,127,127,.15)}
      .badge{position:absolute;top:8px;right:2px;min-width:16px;height:16px;border-radius:8px;background:var(--error-color,#db4437);color:#fff;font-size:10px;line-height:16px;text-align:center;padding:0 3px}
      .body{padding:12px}`;
    const top = document.createElement("div"); top.className = "top";
    this._menu = document.createElement("ha-menu-button");
    this._menu.hass = this._hass; this._menu.narrow = this._narrow;
    this._tabs = document.createElement("div"); this._tabs.className = "tabs";
    let showBadges = false; // default: off
    try { showBadges = localStorage.getItem("diBadges") === "1"; } catch (e) { /* ignore */ }
    this._badges = showBadges;
    this._tabs.classList.toggle("nobadge", !showBadges);
    const tgl = document.createElement("button"); tgl.className = "tgl";
    const paintTgl = () => {
      tgl.title = this._badges ? this._lbl.hideBadges : this._lbl.showBadges;
      tgl.innerHTML = this._badges
        ? '<svg viewBox="0 0 24 24" width="24" height="24"><circle cx="12" cy="12" r="9" fill="currentColor"/><text x="12" y="16.2" text-anchor="middle" font-size="12" font-weight="700" fill="var(--app-header-background-color,#fff)" font-family="Arial,sans-serif">1</text></svg>'
        : '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" opacity=".7"><circle cx="12" cy="12" r="8.5" stroke-dasharray="3 2.6"/><path d="M6.5 17.5L17.5 6.5"/></svg>';
    };
    paintTgl();
    tgl.onclick = () => {
      this._badges = !this._badges;
      this._tabs.classList.toggle("nobadge", !this._badges);
      try { localStorage.setItem("diBadges", this._badges ? "1" : "0"); } catch (e) { /* ignore */ }
      paintTgl();
      if (this._card) this._card.setConfig({ class: this._active, hide_offline: !this._badges });
      this._loadTabs();
    };
    top.append(this._menu, this._tabs, tgl);
    this._body = document.createElement("div"); this._body.className = "body";
    root.append(st, top, this._body);
    let active = "all";
    try { active = localStorage.getItem("diTab") || "all"; } catch (e) { /* ignore */ }
    this._active = active;
    this._card = document.createElement("device-inventory-card");
    this._body.appendChild(this._card);
    this._card.setConfig({ class: this._active, hide_offline: !this._badges });
    this._card.hass = this._hass;
  }

  async _loadTabs() {
    if (!this._tabs) return;
    let r;
    try { r = await this._hass.callWS({ type: "device_inventory/list" }); } catch (e) { return; }
    const stats = { all: { n: 0, on: 0, off: 0 } };
    (r.devices || []).forEach((d) => {
      stats.all.n++; if (d.online) stats.all.on++; else stats.all.off++;
      d.classes.forEach((c) => { const s = (stats[c] = stats[c] || { n: 0, on: 0, off: 0 }); s.n++; if (d.online) s.on++; else s.off++; });
      const hasBat = (d.battery !== null && d.battery !== undefined) || (d.battery_low !== null && d.battery_low !== undefined);
      if (hasBat) {
        const s = (stats.battery = stats.battery || { n: 0, on: 0, off: 0 }); s.n++; if (d.online) s.on++;
        if ((d.battery !== null && d.battery !== undefined && d.battery <= 20) || d.battery_low === true) s.off++;
      }
    });
    // tabs without any (visible) entry are hidden; "all" always stays
    const count = (k) => (this._badges ? stats[k].n : stats[k].on);
    const keys = [...PREFERRED.filter((k) => stats[k]), ...Object.keys(stats).filter((k) => !PREFERRED.includes(k)).sort()].filter((k) => k === "all" || count(k) > 0);
    if (!keys.includes(this._active)) this._select("all");
    this._tabs.innerHTML = "";
    keys.forEach((k) => {
      const b = document.createElement("button"); b.className = "tab" + (k === this._active ? " on" : ""); b.dataset.k = k;
      b.title = `${this._lbl[k] || NAMES[k] || k} (${this._badges ? stats[k].n : stats[k].on})`;
      if (SVG[k]) {
        const ns = "http://www.w3.org/2000/svg", s = document.createElementNS(ns, "svg"), p = document.createElementNS(ns, "path");
        s.setAttribute("viewBox", SVG[k].vb); if (SVG[k].img) { const im = document.createElementNS(ns, "image"), q0 = SVG[k].vb.split(" "); im.setAttribute("href", SVG[k].img); im.setAttribute("width", q0[2]); im.setAttribute("height", q0[3]); s.appendChild(im); } else p.setAttribute("d", SVG[k].d); if (SVG[k].w) { const q = SVG[k].vb.split(" "); s.style.width = SVG[k].w + "px"; s.style.height = (SVG[k].w * q[3] / q[2]) + "px"; } if (SVG[k].eo) p.setAttribute("fill-rule", "evenodd"); if (!SVG[k].img) s.appendChild(p); b.appendChild(s);
      } else {
        const i = document.createElement("ha-icon"); i.setAttribute("icon", MDI[k] || "mdi:chip"); b.appendChild(i);
      }
      if (stats[k].off) { const bd = document.createElement("span"); bd.className = "badge"; bd.textContent = stats[k].off; b.appendChild(bd); }
      b.onclick = () => this._select(k);
      this._tabs.appendChild(b);
    });
    if (this._card && this._card._headIcon) this._card._headIcon();
  }

  _select(k) {
    this._active = k;
    try { localStorage.setItem("diTab", k); } catch (e) { /* ignore */ }
    this._card.setConfig({ class: k, hide_offline: !this._badges });
    this._tabs.querySelectorAll(".tab").forEach((t) => t.classList.remove("on"));
    this._loadTabs();
  }
}

if (!customElements.get("device-inventory-panel")) {
  customElements.define("device-inventory-panel", DeviceInventoryPanel);
}
