# Roadmap

Ideas and feature requests under consideration. No timelines — this is a "what's on the radar" list.

## Pulse Card

### Editor

- **Severity in the editor** — set up color ranges visually instead of writing YAML arrays by hand

### Features

- **Slider mode** ([#2](https://github.com/hiall-fyi/pulse-card/issues/2), [Discussion #19](https://github.com/hiall-fyi/pulse-card/discussions/19) - @ChrisMarriott38) — tap or drag the bar to set a value. Works with input numbers, lights, thermostats, covers, and fans. First version will support input numbers, with other types coming later
- **Collapsible groups** ([#2](https://github.com/hiall-fyi/pulse-card/issues/2) - @ChrisMarriott38) — fold and expand groups of bars to keep dense dashboards tidy
- **Secondary info** — show a second line below the bar with last changed time, an attribute, or custom text
- **Entity picture** — use an entity's picture instead of an icon (handy for person entities)
- **Responsive columns** — automatically use fewer columns on narrow screens so bars don't get squished on phones

### For card-mod users

- **Severity data attribute** — the bar row will carry the current severity level so you can target it with card-mod styles

## Pulse Family

Separate cards that share the same compact look and visual editor. Install only what you need.

- **Pulse Climate** ([#2](https://github.com/hiall-fyi/pulse-card/issues/2) - @ChrisMarriott38) — a compact thermostat card showing current temperature, target, and HVAC mode
- **Pulse Energy** ([#2](https://github.com/hiall-fyi/pulse-card/issues/2)) — a compact view of solar, grid, and battery energy flow
- **Pulse Chart** ([#2](https://github.com/hiall-fyi/pulse-card/issues/2) - @ChrisMarriott38) — a simple history chart for when ApexCharts is overkill
