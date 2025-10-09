#!/bin/bash
set -e

# 
BASE_DIR="$(cd "$(dirname "$0")/.." && pwd)"
JAR="openapi-generator-cli.jar"

SPEC_DIR="$BASE_DIR/specs"
RAW="$SPEC_DIR/doc.json"
FILTERED="$SPEC_DIR/doc_filtered.json"

#
NODE_OUT="$BASE_DIR/nodejs-openapi-generator-cli"
DOC_OUT="$BASE_DIR/docs"

echo "📥 1. Downloading OpenAPI spec..."
bash "$BASE_DIR/scripts/download_spec.sh" || exit 1

echo "🔎 2. Filtering schema..."
python3 "$BASE_DIR/scripts/extract_schemas.py" "$RAW" "$FILTERED" || exit 1

echo "🧹 Cleaning old generated NodeJS SDK & docs..."
rm -rf "$NODE_OUT" "$DOC_OUT"

echo "⚙️ 3. Generating NodeJS SDK (typescript-node)..."
java -jar "$JAR" generate \
  -i "$FILTERED" \
  -g typescript-node \
  -o "$NODE_OUT" \
  --additional-properties=supportsES6=true,modelPropertyNaming=camelCase

echo "📄 4. Generating Markdown API Docs..."
java -jar "$JAR" generate \
  -i "$FILTERED" \
  -g markdown \
  -o "$DOC_OUT"




echo "🎉 Done! SDK is in $NODE_OUT, docs are in $DOC_OUT"
