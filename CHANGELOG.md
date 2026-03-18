# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [0.1.0] - 2026-03-18

### Added

- Basic horizontal bar display for any numeric sensor
- Multiple entities in a single card with per-entity config overrides
- Severity-based conditional colors with gradient mode
- Visual editor via `getConfigForm()` ha-form schema
- Target marker overlay (static value or entity ID)
- Change indicator (▲/▼/▶) with configurable history period
- Tap, hold, and double-tap action support
- Charge animation effect
- Vertical bar direction (`direction: up`)
- Entity row mode for use inside entities card
- Sections view grid support (`getGridOptions`)
- Masonry view support (`getCardSize`)
- Min/Max auto-detection from entity attributes
- Attribute display mode
- Configurable bar height, border radius, and animation speed
- Dark/light theme integration via HA CSS variables
- ARIA progressbar attributes for accessibility
- HACS plugin compliance (hacs.json, GitHub Actions, dist build)
- Keyboard accessibility — `tabindex`, Enter/Space triggers tap action, `:focus-visible` outline
- `disconnectedCallback()` for proper timer cleanup on element removal
- CI workflow for automated lint + test on push/PR
- Known Limitations section in README
