# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [0.3.2] - 2026-04-14

### Fixed

- **Sparkline now appears immediately after enabling** — previously you had to refresh the page after toggling sparkline on in the editor. The card now fetches history data as soon as the config changes
- **Stale data cleared on config change** — switching entities no longer leaves old sparkline or indicator data lingering in memory

### Improved

- **Numeric config values are now coerced** — animation speed, columns, and sparkline line width are guaranteed to be numbers even if your YAML has them as strings, preventing potential rendering issues

## [0.3.1] - 2026-04-09

### Fixed

- **HACS download now works correctly** ([#21](https://github.com/hiall-fyi/pulse-card/issues/21) - @ChrisMarriott38) — the v0.3.0 release was missing the built JS files as release assets, so HACS downloaded the raw source instead of the bundled card. This caused 404 errors and the card not loading. The release process is now fixed

## [0.3.0] - 2026-04-08

### Added

- **Color Picker** ([#8](https://github.com/hiall-fyi/pulse-card/issues/8), [Discussion #20](https://github.com/hiall-fyi/pulse-card/discussions/20) - @ChrisMarriott38) — pick bar colors visually instead of typing hex codes. A color swatch sits next to every color field — click it to open your browser's color picker, or keep typing values directly
- **Sparkline in the Editor** — the visual editor now has all the most common sparkline settings: on/off, hours to show, line width, points per hour, smoothing, aggregation function, refresh interval, and color. Toggle Sparkline on and the fields appear right below
- **More Settings in the Editor** — indicator inverted mode, clamp value, and invert fill are now in the visual editor. Previously these were YAML-only
- **State Data Attribute** — each bar row now carries a `data-state` attribute with the current numeric value (or `"unavailable"`), so you can target specific states with card-mod

### Improved

- **Sparkline fills to bar width** ([#21](https://github.com/hiall-fyi/pulse-card/issues/21) - @ChrisMarriott38) — the sparkline trend line now stretches to your `bar_width` setting instead of shrinking with the current value. A sensor at 10% still shows the full trend across the bar track area
- **Editor redesigned** — settings are now organized with expandable panels for Bar Limits, Indicator, and Animation. Common settings (title, layout, color, height, positions, sparkline) stay visible at the top, advanced options are tucked away until you need them
- **Fewer redundant calculations** — bar width scaling and bar state are now computed once per entity instead of multiple times per update cycle
- **New brand identity** — refreshed icon and logo with a richer, layered design. Dark mode variants included

## [0.2.1] - 2026-04-06

### Fixed

- **Sparkline no longer spills past the bar** ([#18](https://github.com/hiall-fyi/pulse-card/issues/18) - @ChrisMarriott38) — the trend line now stays inside the colored portion of the bar instead of stretching across the empty track area

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

- Your config values are now validated before rendering — the card won't break from unexpected characters in color, height, or gap settings

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
- Cards with multiple entities and indicators load faster — history data is now fetched in one go instead of one call per entity
- External URLs opened via tap actions are now handled more securely
- Loading the card resource twice no longer causes an error
- If the editor's helper components fail to load, the editor still works instead of breaking
- Icons no longer show a broken placeholder when the value is empty

### Fixed

- Visual editor no longer writes `animation: { effect: "none" }` to your config when the effect is set to the default — keeps your YAML clean
- Visual editor now preserves `target.show_label` when you edit the target value — previously switching between YAML and the visual editor would lose the label setting
- Entity names with special characters now display correctly

## [0.1.2] - 2026-03-19

### Fixed

- Gap setting now works when you type a plain number like `8` — it's automatically treated as `8px` ([#2](https://github.com/hiall-fyi/pulse-card/issues/2))
- Card now takes up the full width in Sections view instead of only half

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
