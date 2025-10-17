#!/bin/bash
set -e

# === Config ===
INPUT_FILE="/home/aioz-thinh/Work-space-test/fix-nodejs-client-sdk/docs/README.md"
OUTPUT_FILE="/home/aioz-thinh/Work-space-test/fix-nodejs-client-sdk/README_fix.md"
BASE_URL="https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/"

# === Replace links ===
# 1️⃣ Apis/... 
TEMP_FILE="$(mktemp)"
sed -E "s|\(Apis/([^)]+)\)|(${BASE_URL}Apis/\1)|g" "$INPUT_FILE" > "$TEMP_FILE"

# 2️⃣ ./Models/...
sed -E "s|\(\./Models/([^)]+)\)|(${BASE_URL}Models/\1)|g" "$TEMP_FILE" > "$OUTPUT_FILE"

# 3️⃣ 
rm "$TEMP_FILE"

echo "✅ Done! Updated links saved to $OUTPUT_FILE"
