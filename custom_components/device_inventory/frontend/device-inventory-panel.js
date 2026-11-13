/* Device Inventory sidebar panel: one tab per device class, each showing the table card. */

const PREFERRED = ["all", "shelly", "esphome", "zigbee", "homematic", "mqtt", "matter", "wled", "sonoff", "zwave", "tasmota", "hue", "tuya", "blink", "alexa", "modbus", "bluetooth", "battery", "other"];
const MDI = {
  all: "mdi:view-dashboard-outline", zigbee: "mdi:zigbee", homematic: "mdi:home-automation", zwave: "mdi:z-wave",
hue: "mdi:lightbulb-group-outline", tuya: "mdi:cloud-outline",
  bluetooth: "mdi:bluetooth", battery: "mdi:battery-alert", other: "mdi:devices",
};
const SVG = {
  modbus: { vb: "0 0 100 78", w: 21, d: "M36 0h7v1h-7zM33 1h13v1h-13zM32 2h16v1h-16zM31 3h18v1h-18zM30 4h20v1h-20zM29 5h21v1h-21zM28 6h23v2h-23zM27 8h25v2h-25zM73 10h3v1h-3zM27 10h26v1h-26zM70 11h9v1h-9zM27 11h25v2h-25zM68 12h14v1h-14zM67 13h16v1h-16zM40 13h12v1h-12zM27 13h12v1h-12zM65 14h19v1h-19zM42 14h10v1h-10zM27 14h11v1h-11zM65 15h20v1h-20zM44 15h10v1h-10zM27 15h10v2h-10zM64 16h22v1h-22zM45 16h14v1h-14zM27 17h9v1h-9zM45 17h17v1h-17zM63 17h23v1h-23zM28 18h8v1h-8zM42 18h2v1h-2zM45 18h42v1h-42zM39 19h1v1h-1zM42 19h45v1h-45zM29 19h7v1h-7zM38 20h2v1h-2zM43 20h44v1h-44zM29 20h8v1h-8zM28 21h12v1h-12zM43 21h45v1h-45zM27 22h13v1h-13zM26 23h15v1h-15zM44 22h44v3h-44zM25 24h16v1h-16zM44 25h24v1h-24zM24 25h17v1h-17zM74 25h14v1h-14zM9 25h8v1h-8zM45 26h22v1h-22zM7 26h12v1h-12zM23 26h19v1h-19zM75 26h13v1h-13zM22 27h20v1h-20zM5 27h16v1h-16zM75 27h12v2h-12zM45 27h24v2h-24zM4 28h38v1h-38zM45 29h22v1h-22zM75 29h11v1h-11zM3 29h39v1h-39zM3 30h40v1h-40zM71 30h1v1h-1zM74 30h12v1h-12zM46 30h20v1h-20zM74 31h11v1h-11zM46 31h19v1h-19zM69 31h3v1h-3zM2 31h41v2h-41zM46 32h18v1h-18zM68 32h4v1h-4zM73 32h11v1h-11zM67 33h16v1h-16zM1 33h42v1h-42zM46 33h17v1h-17zM66 34h16v1h-16zM47 34h15v1h-15zM1 34h43v1h-43zM65 35h16v1h-16zM47 35h14v1h-14zM22 35h22v1h-22zM1 35h16v1h-16zM64 36h17v1h-17zM48 36h12v1h-12zM0 36h16v1h-16zM22 36h23v1h-23zM51 37h8v1h-8zM63 37h18v1h-18zM20 37h25v1h-25zM48 37h2v1h-2zM0 37h14v2h-14zM62 38h20v1h-20zM48 38h1v1h-1zM51 38h2v1h-2zM22 38h23v1h-23zM54 38h4v1h-4zM44 39h1v1h-1zM54 39h3v1h-3zM51 39h1v1h-1zM61 39h21v1h-21zM25 39h17v1h-17zM0 39h15v2h-15zM54 40h2v1h-2zM28 40h15v1h-15zM60 40h22v1h-22zM32 41h8v1h-8zM51 41h1v1h-1zM19 41h2v1h-2zM41 41h2v1h-2zM59 41h23v1h-23zM1 41h15v2h-15zM34 42h6v1h-6zM19 42h6v1h-6zM58 42h25v1h-25zM50 42h2v2h-2zM20 43h8v1h-8zM2 43h17v1h-17zM57 43h26v1h-26zM38 43h3v1h-3zM60 44h31v1h-31zM44 44h2v1h-2zM2 44h29v1h-29zM49 44h3v1h-3zM3 45h31v1h-31zM59 45h34v1h-34zM45 45h7v1h-7zM60 46h35v1h-35zM4 46h34v1h-34zM46 46h9v1h-9zM46 47h8v1h-8zM59 47h37v1h-37zM5 47h35v1h-35zM58 48h39v1h-39zM6 48h32v1h-32zM44 48h9v1h-9zM43 49h10v1h-10zM60 49h38v1h-38zM7 49h31v1h-31zM47 50h6v1h-6zM64 50h34v1h-34zM10 50h30v1h-30zM52 51h2v1h-2zM67 51h32v1h-32zM15 51h25v1h-25zM47 51h2v2h-2zM71 52h6v1h-6zM57 52h3v1h-3zM80 52h19v1h-19zM15 52h26v2h-26zM47 53h1v1h-1zM74 53h4v1h-4zM58 53h6v1h-6zM81 53h19v1h-19zM81 54h18v1h-18zM56 54h12v1h-12zM15 54h25v1h-25zM16 55h23v1h-23zM56 55h15v1h-15zM53 55h2v1h-2zM43 55h2v2h-2zM50 56h1v1h-1zM46 56h1v1h-1zM16 56h22v1h-22zM53 56h22v1h-22zM82 55h18v3h-18zM42 57h3v1h-3zM49 57h2v1h-2zM16 57h21v1h-21zM46 57h2v1h-2zM54 57h23v1h-23zM16 58h20v1h-20zM54 58h21v1h-21zM40 58h11v1h-11zM81 58h18v1h-18zM39 59h12v1h-12zM17 59h18v1h-18zM55 59h20v1h-20zM79 59h21v1h-21zM17 60h17v1h-17zM39 60h13v1h-13zM55 60h44v2h-44zM16 61h17v1h-17zM37 61h15v2h-15zM15 62h17v1h-17zM55 62h43v1h-43zM56 63h42v1h-42zM14 63h17v1h-17zM35 63h18v2h-18zM56 64h41v1h-41zM13 64h17v1h-17zM27 65h2v1h-2zM57 65h39v1h-39zM12 65h13v1h-13zM33 65h20v1h-20zM57 66h20v1h-20zM78 66h17v1h-17zM27 66h1v1h-1zM12 66h12v1h-12zM33 66h21v1h-21zM57 67h19v1h-19zM31 67h23v1h-23zM80 67h14v1h-14zM30 68h24v1h-24zM81 68h11v1h-11zM57 68h18v1h-18zM58 69h16v1h-16zM85 69h3v1h-3zM29 69h26v1h-26zM32 70h23v1h-23zM58 70h15v1h-15zM11 67h13v5h-13zM31 71h24v1h-24zM59 71h13v1h-13zM11 72h18v1h-18zM59 72h2v1h-2zM30 72h26v1h-26zM59 73h1v1h-1zM62 72h9v3h-9zM11 73h45v2h-45zM62 75h10v2h-10zM11 75h43v2h-43zM17 77h36v1h-36zM67 77h6v1h-6z" }, // Modbus symbol (circles; the arrows are cut out)
  blink: { vb: "0 0 70 96", w: 20, d: "M1 0h14v1h-14zM0 1h16v18h-16zM0 19h17v2h-17zM0 21h19v1h-19zM0 22h42v1h-42zM0 23h46v1h-46zM0 24h49v1h-49zM0 25h51v1h-51zM0 26h53v1h-53zM0 27h55v1h-55zM0 28h56v1h-56zM0 29h57v1h-57zM0 30h58v1h-58zM0 31h59v1h-59zM0 32h60v1h-60zM0 33h61v1h-61zM0 34h62v1h-62zM0 35h63v1h-63zM0 36h64v1h-64zM0 37h20v1h-20zM38 37h26v1h-26zM0 38h18v1h-18zM41 38h24v1h-24zM43 39h22v1h-22zM44 40h22v1h-22zM0 39h17v3h-17zM45 41h21v1h-21zM46 42h21v1h-21zM47 43h20v1h-20zM48 44h20v1h-20zM49 45h19v2h-19zM50 47h19v2h-19zM51 49h18v3h-18zM52 52h17v1h-17zM52 53h18v11h-18zM52 64h17v1h-17zM51 65h18v4h-18zM50 69h19v1h-19zM50 70h18v1h-18zM49 71h19v1h-19zM48 72h20v1h-20zM48 73h19v1h-19zM47 74h20v1h-20zM0 42h16v34h-16zM46 75h20v1h-20zM45 76h21v1h-21zM0 76h17v2h-17zM43 77h22v1h-22zM0 78h18v1h-18zM42 78h23v1h-23zM0 79h19v1h-19zM39 79h25v1h-25zM35 80h29v1h-29zM0 80h22v1h-22zM0 81h63v1h-63zM0 82h62v1h-62zM0 83h61v2h-61zM0 85h60v1h-60zM0 86h59v1h-59zM0 87h57v1h-57zM0 88h56v1h-56zM1 89h54v1h-54zM1 90h52v1h-52zM2 91h49v1h-49zM2 92h47v1h-47zM3 93h43v1h-43zM5 94h38v1h-38zM7 95h31v1h-31z" }, // Blink "b" mark
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
  wled: "WLED", sonoff: "Sonoff", zwave: "Z-Wave", tasmota: "Tasmota", hue: "Hue", tuya: "Tuya", blink: "Blink", alexa: "Amazon Echo", modbus: "Modbus", bluetooth: "Bluetooth" };
// same wording as the card headings
const LABEL = {
  en: { all: "All devices", other: "Other", battery: "Batteries", showBadges: "Show missing (offline) devices and red counters", hideBadges: "Hide missing devices and red counters" },
  de: { all: "Alle Geräte", other: "Sonstige", battery: "Batterien", showBadges: "Fehlende Geräte und rote Zähler anzeigen", hideBadges: "Fehlende Geräte und rote Zähler ausblenden" },
};

class DeviceInventoryPanel extends HTMLElement {
  set hass(hass) {
    this._hass = hass;
    if (!this._built) {
      this._built = true;
      // the card is loaded globally (extra JS url); wait until it is defined
      customElements.whenDefined("device-inventory-card").then(() => {
        this._build();
        this._loadTabs();
        [5000, 12000, 25000].forEach((ms) => setTimeout(() => this._loadTabs(), ms)); // warm-up after start
        if (this._card) this._card.hass = this._hass;
      });
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
      const b = document.createElement("button"); b.className = "tab" + (k === this._active ? " on" : "");
      b.title = `${this._lbl[k] || NAMES[k] || k} (${this._badges ? stats[k].n : stats[k].on})`;
      if (SVG[k]) {
        const ns = "http://www.w3.org/2000/svg", s = document.createElementNS(ns, "svg"), p = document.createElementNS(ns, "path");
        s.setAttribute("viewBox", SVG[k].vb); p.setAttribute("d", SVG[k].d); if (SVG[k].w) { const q = SVG[k].vb.split(" "); s.style.width = SVG[k].w + "px"; s.style.height = (SVG[k].w * q[3] / q[2]) + "px"; } if (SVG[k].eo) p.setAttribute("fill-rule", "evenodd"); s.appendChild(p); b.appendChild(s);
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
    this._card.setConfig({ class: k, hide_offline: !this._badges });
    this._tabs.querySelectorAll(".tab").forEach((t) => t.classList.remove("on"));
    this._loadTabs();
  }
}

if (!customElements.get("device-inventory-panel")) {
  customElements.define("device-inventory-panel", DeviceInventoryPanel);
}
