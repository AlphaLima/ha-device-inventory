#!/usr/bin/env python3
"""Copy the integration to a Home Assistant config folder for a quick test (no release needed).

Usage:  python scripts/deploy.py [target]
  target  default: \\192.168.188.11\config\custom_components   (Samba share of the HA config)
Frontend-only changes (card / panel JavaScript): hard-reload the browser (Ctrl+F5), no restart.
Backend changes (*.py): restart Home Assistant.
"""

import pathlib
import shutil
import sys

SRC = pathlib.Path(__file__).resolve().parent.parent / "custom_components" / "device_inventory"
target = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "\\\\192.168.188.11\\config\\custom_components") / "device_inventory"
if not target.parent.exists():
    sys.exit(f"target {target.parent} not reachable")
shutil.copytree(SRC, target, dirs_exist_ok=True, ignore=shutil.ignore_patterns("__pycache__"))
print(f"copied {SRC} -> {target}")
