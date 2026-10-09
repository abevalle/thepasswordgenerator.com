#!/usr/bin/env bash
# Push the extracted blog posts (scripts/strapi/posts/*.json) into Strapi 5 via curl.
#
#   STRAPI_TOKEN=xxx ./scripts/strapi/migrate.sh            # create missing posts
#   STRAPI_TOKEN=xxx UPDATE=1 ./scripts/strapi/migrate.sh   # also overwrite existing ones
#   DRY_RUN=1 ./scripts/strapi/migrate.sh                   # print the curl calls only
#
# Env:
#   STRAPI_URL     default https://strapi.sacramento.valle.us
#   STRAPI_TOKEN   API token (Settings -> API Tokens) with find/create[/update] on the type
#   CONTENT_TYPE   plural API id of the collection, default "password-generator-posts"
#   UPDATE=1       PUT over an existing entry with the same slug instead of skipping it
#   DRY_RUN=1      print commands, make no requests
set -euo pipefail

STRAPI_URL="${STRAPI_URL:-https://strapi.sacramento.valle.us}"
CONTENT_TYPE="${CONTENT_TYPE:-password-generator-posts}"
POSTS_DIR="$(cd "$(dirname "$0")" && pwd)/posts"
API="$STRAPI_URL/api/$CONTENT_TYPE"

if [[ -z "${DRY_RUN:-}" && -z "${STRAPI_TOKEN:-}" ]]; then
  echo "STRAPI_TOKEN is required (or set DRY_RUN=1)" >&2; exit 1
fi
if ! ls "$POSTS_DIR"/*.json >/dev/null 2>&1; then
  echo "no posts in $POSTS_DIR; run: node scripts/strapi/extract-posts.mjs" >&2; exit 1
fi

auth=(-H "Authorization: Bearer ${STRAPI_TOKEN:-DRY}")
created=0 updated=0 skipped=0 failed=0

for file in "$POSTS_DIR"/*.json; do
  slug="$(basename "$file" .json)"

  if [[ -n "${DRY_RUN:-}" ]]; then
    echo "curl -sS -X POST \"$API?status=published\" -H 'Authorization: Bearer \$STRAPI_TOKEN' -H 'Content-Type: application/json' --data-binary @$file"
    continue
  fi

  # Look for an existing entry with this slug (checks drafts too).
  lookup="$(curl -sSg "${auth[@]}" "$API?filters[slug][\$eq]=$slug&status=draft&fields[0]=slug")"
  doc_id="$(printf '%s' "$lookup" | grep -oE '"documentId":"[^"]+"' | head -1 | cut -d'"' -f4 || true)"

  if [[ -n "$doc_id" && -z "${UPDATE:-}" ]]; then
    echo "skip    $slug (exists as $doc_id)"; skipped=$((skipped+1)); continue
  fi

  if [[ -n "$doc_id" ]]; then
    method=PUT; url="$API/$doc_id?status=published"
  else
    method=POST; url="$API?status=published"
  fi

  resp="$(curl -sS -w '\n%{http_code}' -X "$method" "$url" "${auth[@]}" \
    -H 'Content-Type: application/json' --data-binary "@$file")"
  code="${resp##*$'\n'}"; body="${resp%$'\n'*}"

  if [[ "$code" =~ ^2 ]]; then
    if [[ "$method" == PUT ]]; then echo "updated $slug"; updated=$((updated+1));
    else echo "created $slug"; created=$((created+1)); fi
  else
    echo "FAILED  $slug ($method $code): $(printf '%s' "$body" | head -c 300)"; failed=$((failed+1))
  fi
done

echo "done: created=$created updated=$updated skipped=$skipped failed=$failed"
[[ $failed -eq 0 ]]
