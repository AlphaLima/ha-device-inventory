#!/usr/bin/env python3
"""Bump the version, update the changelog, commit and tag.

Usage:  python scripts/release.py patch|minor|major|beta|final ["changelog line", ...]
  beta  = test version 1.2.3b1 (GitHub pre-release, only for testers)
  final = turns the current beta 1.2.3bN into the stable 1.2.3
Then:   git push origin main --follow-tags   (the GitHub workflow creates the release)
"""

import datetime
import json
import pathlib
import re
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
MANIFEST = ROOT / "custom_components" / "device_inventory" / "manifest.json"
CHANGELOG = ROOT / "CHANGELOG.md"


def main() -> None:
    if len(sys.argv) < 2 or sys.argv[1] not in ("patch", "minor", "major", "beta", "final"):
        sys.exit(__doc__)
    kind, notes = sys.argv[1], sys.argv[2:]
    data = json.loads(MANIFEST.read_text(encoding="utf-8"))
    m = re.fullmatch(r"(\d+)\.(\d+)\.(\d+)(?:b(\d+))?", data["version"])
    major, minor, patch = int(m.group(1)), int(m.group(2)), int(m.group(3))
    beta = int(m.group(4)) if m.group(4) else None
    if kind == "final":
        if beta is None:
            sys.exit("current version is not a beta")
        new = f"{major}.{minor}.{patch}"
    elif kind == "beta":
        new = f"{major}.{minor}.{patch}b{beta + 1}" if beta is not None else f"{major}.{minor}.{patch + 1}b1"
    else:
        if kind == "major":
            major, minor, patch = major + 1, 0, 0
        elif kind == "minor":
            minor, patch = minor + 1, 0
        elif beta is None:
            patch += 1
        new = f"{major}.{minor}.{patch}"

    text = MANIFEST.read_text(encoding="utf-8")
    MANIFEST.write_text(re.sub(r'"version": "[^"]+"', f'"version": "{new}"', text), encoding="utf-8")

    entry = f"## {new} – {datetime.date.today().isoformat()}\n" + "".join(f"- {n}\n" for n in notes or ["Changes"]) + "\n"
    log = CHANGELOG.read_text(encoding="utf-8")
    head, sep, rest = log.partition("\n## ")
    CHANGELOG.write_text(head + "\n" + entry + ("## " + rest if sep else ""), encoding="utf-8")

    subprocess.run(["git", "add", str(MANIFEST), str(CHANGELOG)], cwd=ROOT, check=True)
    subprocess.run(["git", "commit", "-m", f"Release {new}"], cwd=ROOT, check=True)
    subprocess.run(["git", "tag", "-a", f"v{new}", "-m", f"v{new}"], cwd=ROOT, check=True)
    print(f"Version {new} committed and tagged v{new}. Now: git push origin main --follow-tags")


if __name__ == "__main__":
    main()
