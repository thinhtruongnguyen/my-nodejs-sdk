#!/bin/bash
set -e

# 
BASE_DIR="$(cd "$(dirname "$0")/.." && pwd)"
SPEC_DIR="$BASE_DIR/specs"
RAW="$SPEC_DIR/doc.json"

URL="http://143.198.81.10:9000/\$x1y2z3@/docs/doc.json"

mkdir -p "$SPEC_DIR"
echo "🌐 Downloading spec..."
curl -s -o "$RAW" "$URL"

if [ ! -s "$RAW" ]; then
  echo "❌ Failed to download spec!"
  exit 1
fi

echo "✅ Saved spec to $RAW"
