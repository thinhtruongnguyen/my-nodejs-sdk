#!/bin/bash
set -e

# === Config ===
API_DOCS_DIR="/home/aioz-thinh/Work-space-test/fix-nodejs-client-sdk/docs/Apis"

# === Loop through all .md files in the directory ===
for FILE in "$API_DOCS_DIR"/*.md; do
    if [[ -f "$FILE" ]]; then
        TEMP_FILE="$(mktemp)"

        # 1️⃣ Xóa block "### Authorization" + các dòng kế tiếp cho tới khi gặp dòng trống hoặc tiêu đề mới (### ...)
        # Sử dụng awk để linh hoạt hơn sed
        awk '
        /^### Authorization/ {skip=1; next}
        skip && /^### / {skip=0}
        skip && NF==0 {next}
        skip {next}
        {
            print
        }' "$FILE" > "$TEMP_FILE"

        # 2️⃣ Xóa các dòng chứa:
        #     - > response.
        #     - | **x-api-key** |
        #     - **Content-Type**
        #     - **Accept**
        grep -v "> response\." "$TEMP_FILE" \
        | grep -v "| \*\*x-api-key\*\* |" \
        | grep -v "\*\*Content-Type\*\*" \
        | grep -v "\*\*Accept\*\*" > "$FILE"

        # 3️⃣ Xóa file tạm
        rm "$TEMP_FILE"

        echo "✅ Cleaned: $FILE"
    fi
done

echo "🎉 All Markdown files in $API_DOCS_DIR cleaned successfully!"
