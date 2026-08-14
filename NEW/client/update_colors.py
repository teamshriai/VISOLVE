#!/usr/bin/env python3
"""
Global color replacement script for ViSolve React pages.
Replaces old legacy blue/orange hex values with the new dark-navy design system.
"""
import os
import re

# old_color -> new_color mappings (lower & upper case variants)
REPLACEMENTS = {
    "#215B87": "#0B2A4A",
    "#1e5a8a": "#0B2A4A",
    "#1E5A8A": "#0B2A4A",
    "#154570": "#0B2A4A",
    "#496c96": "#123F67",
    "#496C96": "#123F67",
    "#2d7abf": "#1A5490",
    "#2D7ABF": "#1A5490",
    "#e46c0a": "#F28C28",
    "#E46C0A": "#F28C28",
}

PAGES_DIR = "/home/shri-ai/PROJECTS/VISOLVE/NEW/client/src"

changed_files = []

for root, dirs, files in os.walk(PAGES_DIR):
    for fname in files:
        if not fname.endswith(".jsx") and not fname.endswith(".css"):
            continue
        fpath = os.path.join(root, fname)
        with open(fpath, "r", encoding="utf-8") as fh:
            original = fh.read()
        updated = original
        for old, new in REPLACEMENTS.items():
            updated = updated.replace(old, new)
        if updated != original:
            with open(fpath, "w", encoding="utf-8") as fh:
                fh.write(updated)
            changed_files.append(fpath)

print(f"Updated {len(changed_files)} files:")
for f in sorted(changed_files):
    print("  ", f)
