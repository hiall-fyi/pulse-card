# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [0.2.0] - 2026-04-05

### Added

- **Sparkline Trend Line** — see recent history right behind the bar, no extra card needed. Turn it on with `sparkline: true` and customize how far back to look (`hours_to_show`), how smooth the line is (`points_per_hour`), how values are combined (`aggregate_func`: avg, min, max, median), line thickness (`line_width`), and color. Per-entity overrides let you show 6 hours for CPU but 7 days for battery — all in one card
- **Conditional Visibility** — show bars only when they meet a condition. Set `visibility: { state_above: 80 }` on an entity and it only appears when the value crosses that threshold. Combine multiple conditions (AND logic) and pair with severity colors for an "alerts only" dashboard that stays clean when everything is healthy
- **Compact Mode** — `layout: compact` tightens padding, gaps, and font sizes so you can fit more bars into less space. Works well in sections view at narrow column widths
- **Font Size Control** — `font_size` sets the base text size for name, value, and icon. Or leave it unset and inside-bar text auto-scales to fit the bar height
- **Sparkline Color Variable** — new `--pulse-sparkline-color` CSS custom property for theme-level sparkline color control

### Improved

- Visual editor redesigned with a compact 3-column layout — all settings now fit on screen without scrolling, even in Sections view. Font Size, Invert Fill, and Clamp Value are no longer YAML-only
- Icons inside bars now match the text color instead of grey — much easier to read on colored fills
- Icon size scales with text size instead of staying fixed — stays proportional whether you're using default, compact, or custom font sizes
- Inside-bar text and icons now auto-scale to the bar height — a 30px bar gets smaller text, a 60px bar gets larger text, no manual tuning needed
- Tap action errors (e.g. calling a service that doesn't exist) are now caught and logged instead of silently failing

## [0.1.8] - 2026-04-02

### Added

- **Inverted Indicator Colors** — new `indicator.inverted` option flips the trend arrow colors so "up" shows red and "down" shows green. Ideal for CPU, memory, and disk usage where rising values are bad. Works at card level or per-entity
- **CSS Custom Properties** — you can now fine-tune colors and opacity without `card-mod` hacks. Available variables: `--pulse-card-background`, `--pulse-icon-color`, `--pulse-name-color`, `--pulse-value-color`, `--pulse-indicator-color`, `--pulse-track-opacity`

### Improved

- Change indicator now shows the unit of measurement (e.g. `▲ +0.3%` instead of `▲ +0.3`) and respects the decimal precision setting
- Change indicator no longer shows nonsense values when a sensor's unit was changed in HA (e.g. bytes → GB) — the card detects the mismatch and shows neutral instead

## [0.1.7] - 2026-03-26

### Improved

- Sensor values now respect Home Assistant's display precision setting — if you've configured decimal places for a sensor in HA (or the integration provides a default), the card uses that automatically instead of showing raw floats like "10.0992555831266%". You can still override with the `decimal` config option
- The card now loads faster on your dashboard — the visual editor and its dependencies are only loaded when you actually open the editor, not on every page view
- Entities in an `error` state are now handled the same as `unavailable` and `unknown` — showing "Unavailable" instead of a broken bar
- Duplicate bar width calculations consolidated into a single shared helper — reduces the chance of future bugs when the scaling logic changes

## [0.1.6] - 2026-03-23

### Added

- **Bar Width Limit** ([#12](https://github.com/hiall-fyi/pulse-card/issues/12) - @ChrisMarriott38) — new `bar_width` setting (1–100) controls how much of the bar track the fill can use. Keeps the colored bar from overlapping your value text and change indicators at high percentages. Available in the visual editor next to Target, or per-entity in YAML
- **Entity Reorder** ([#8](https://github.com/hiall-fyi/pulse-card/issues/8) - @ChrisMarriott38) — you can now move entities up and down in the visual editor using ▲/▼ buttons. No more cutting and pasting in the code editor to rearrange bars

### Improved

- Name and Color fields in the visual editor now update the preview as you type, matching the behavior of other Card Settings fields ([#8](https://github.com/hiall-fyi/pulse-card/issues/8) - @ChrisMarriott38)

## [0.1.5] - 2026-03-22

### Added

- Visual editor now shows Name and Color fields for each entity — you can set per-entity display names and colors without switching to YAML

### Improved

- Color values, bar heights, border radius, and gap settings in your config are now sanitized before rendering — prevents potential style injection from malicious config values
- Internal code is cleaner — duplicate indicator formatting logic consolidated into a single helper, two near-identical label rendering functions merged into one, and unused legacy function removed
- Editor default values now reference a single source of truth instead of hardcoded strings — less chance of defaults drifting out of sync
- Internal utility functions are now explicitly marked as internal in the documentation

## [0.1.4] - 2026-03-20

### Fixed

- Inside mode layout now matches outside mode — name, value, icon, and indicator are properly grouped left/right instead of spreading into equal columns ([#9](https://github.com/hiall-fyi/pulse-card/issues/9))

## [0.1.3] - 2026-03-20

### Added

- Visual editor now supports more settings — Decimals, Target value, Indicator on/off, Indicator position, Lookback period, Show Change Amount, and Animation speed can all be configured without YAML
- Version number now shows in the browser console (e.g. `PULSE-CARD v0.1.3`) for easier troubleshooting

### Improved

- Visual editor is now organized into three clear sections: Card Settings, Layout, and Display — no more scrolling through one long list
- Visual editor labels are simpler — "Name", "Value", "Icon" instead of "Name Position", "Value Position", etc.
- Cards with multiple entities and indicators load faster — history data is now fetched in a single batch call instead of one call per entity
- Opening external URLs via tap actions is now more secure (`noopener,noreferrer`)
- If the card resource is accidentally loaded twice, it no longer throws a duplicate registration error
- If the editor's helper components fail to load, the editor still works instead of breaking
- Action listener timers are now properly cleaned up when a card is removed from the dashboard (prevents stale callbacks in the background)
- Icon updates now skip empty values to avoid rendering broken icons

### Fixed

- Visual editor no longer writes `animation: { effect: "none" }` to your config when the effect is set to the default — keeps your YAML clean
- Visual editor now preserves `target.show_label` when you edit the target value — previously switching between YAML and the visual editor would lose the label setting
- Entity IDs containing special characters are now properly escaped in the HTML output

## [0.1.2] - 2026-03-19

### Fixed

- Gap setting now works when you type a plain number like `8` — it's automatically treated as `8px` ([#2](https://github.com/hiall-fyi/pulse-card/issues/2))
- Card now takes up the full width in Sections view instead of only half — grid columns changed from 6 to 12

## [0.1.1] - 2026-03-19

### Added

- New `gap` setting to control the space between bars — configurable via the visual editor or YAML (e.g. `gap: 8` or `gap: 16px`) ([#2](https://github.com/hiall-fyi/pulse-card/issues/2))

### Removed

- Vertical bar direction (`direction: up`) has been removed — the feature was experimental and not well suited for a bar card. Use a dedicated charting card for vertical layouts ([#2](https://github.com/hiall-fyi/pulse-card/issues/2))

## [0.1.0] - 2026-03-18

### Added

- Horizontal bar display for any numeric sensor
- Multiple entities in a single card with per-entity overrides
- Severity-based color ranges with gradient mode
- Visual editor for card settings and entity management
- Target marker overlay (static value or entity ID)
- Change indicator (▲/▼) comparing current value to history
- Tap, hold, and double-tap actions
- Charge animation effect
- Entity row mode (for use inside entities card)
- Multi-column grid layout
- Sections view and masonry view support
- Auto-detect min/max from entity attributes
- Display entity attributes instead of state
- Configurable bar height, border radius, and animation speed
- Dark and light theme support
- Keyboard and screen reader accessibility
- HACS installation support
