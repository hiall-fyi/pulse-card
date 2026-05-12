#!/usr/bin/env bash
# OSV-Scanner licence allowlist check — pre-ship gate.
#
# Runs OSV-Scanner against package-lock.json with the project's licence
# allowlist. Any dep licensed outside the allowlist surfaces as a violation
# in the output table, and the script exits non-zero.
#
# Allowlist rationale:
#   MIT, Apache-2.0, BSD-*, ISC, 0BSD, CC0-1.0, MIT-0, BlueOak-1.0.0:
#     permissive, no attribution requirements that survive minification.
#   MPL-2.0:
#     file-level copyleft. Only appears in devDependencies today
#     (eslint-plugin-no-unsanitized, lightningcss). Allowed because it
#     never reaches dist/.
#   AGPL-3.0-only:
#     this project's own licence — self-reference.
#
# Usage:
#   scripts/osv-license-check.sh            # allowlist + vuln scan
#   scripts/osv-license-check.sh --vuln-only # skip licence gate
#
# Exit codes:
#   0 — clean, or licence-only violations when used with --vuln-only
#   1 — OSV-Scanner reports a known vulnerability
#   2 — licence violation (dep with licence outside allowlist)

set -euo pipefail

cd "$(dirname "$0")/.."

ALLOWLIST='MIT,Apache-2.0,BSD-2-Clause,BSD-3-Clause,ISC,0BSD,Unlicense,CC0-1.0,CC-BY-4.0,AGPL-3.0-only,Python-2.0,BlueOak-1.0.0,MPL-2.0,MIT-0'

if ! command -v osv-scanner >/dev/null 2>&1; then
  echo "osv-scanner not installed. brew install osv-scanner" >&2
  exit 127
fi

if [[ "${1:-}" == "--vuln-only" ]]; then
  osv-scanner scan source --recursive .
  exit $?
fi

# Run with licence allowlist. OSV-Scanner prints a summary table and exits
# non-zero on any violation OR any vulnerability.
osv-scanner scan source --licenses="$ALLOWLIST" --recursive .
