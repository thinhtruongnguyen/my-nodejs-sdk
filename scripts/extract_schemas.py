#!/usr/bin/env python3
import json, sys, re

if len(sys.argv) < 3:
    print("Usage: python extract_schemas.py <input_file> <output_file>")
    exit(1)

input_file, output_file = sys.argv[1], sys.argv[2]
prefixes = ["/api-key/", "/users/", "/orders/"]

with open(input_file) as f:
    spec = json.load(f)

# --- 1. 
filtered_paths = {
    path: data
    for path, data in spec.get("paths", {}).items()
    if any(path.startswith(p) for p in prefixes)
}
spec["paths"] = filtered_paths

# --- 2.
ref_pattern = re.compile(r"#/definitions/([^\"']+)")
to_visit = set()

def collect_refs(obj):
    """Đệ quy tìm tất cả $ref trong 1 object"""
    if isinstance(obj, dict):
        for k, v in obj.items():
            if k == "$ref" and isinstance(v, str):
                m = ref_pattern.match(v)
                if m:
                    to_visit.add(m.group(1))
            else:
                collect_refs(v)
    elif isinstance(obj, list):
        for v in obj:
            collect_refs(v)

collect_refs(filtered_paths)

# --- 3.
definitions = spec.get("definitions", {})
used = set()

def visit(name):
    if name in used or name not in definitions:
        return
    used.add(name)
    collect_refs(definitions[name])

while to_visit:
    name = to_visit.pop()
    visit(name)

# --- 4.
filtered_definitions = {k: v for k, v in definitions.items() if k in used}
spec["definitions"] = filtered_definitions

# --- 5.
with open(output_file, "w") as f:
    json.dump(spec, f, indent=2)

print(f"✅ Filtered spec saved to {output_file} "
      f"({len(filtered_paths)} paths, {len(filtered_definitions)} schemas)")
