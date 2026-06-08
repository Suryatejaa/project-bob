#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-4173}"
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

cd "$ROOT_DIR"

if lsof -Pi ":$PORT" -sTCP:LISTEN -t >/dev/null 2>&1; then
  echo "Port $PORT is already in use."
  echo "Try another port: ./start-server.sh 5000"
  exit 1
fi

echo "Starting Mahesh tribute site from:"
echo "  $ROOT_DIR"
echo
echo "Open:"
echo "  http://127.0.0.1:$PORT/index.html"
echo "  http://127.0.0.1:$PORT/hexsphere.html"
echo "  http://127.0.0.1:$PORT/mb_road.html"
echo
echo "Press Ctrl+C to stop."
echo

python3 -m http.server "$PORT"
