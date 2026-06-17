# Roadmap

Ideas and feature requests under consideration. No timelines — this is a "what's on the radar" list.

---

## Pulse Bar Card

Pulse Bar Card is stable at 1.x. Focus is on compatibility and polish — bug fixes, HA version support, and refinements based on community feedback.

---

## Pulse Climate Card

### Up Next

- **Manual entity overrides — Phase 2** ([#28](https://github.com/hiall-fyi/pulse-card/issues/28) - @dragorex71) — Phase 1 shipped in v1.3.1 (`open_window_entity`, `battery_entity`, `mold_risk_entity`) for YAML config. v1.7.0 added `heating_power_entity` and surfaced every zone override in the visual editor's per-zone Sensor overrides panel. Still to come: entity overrides for the environment / thermal / schedule sections.

### Exploring

- More chart types — humidity overlay, heating schedule timeline
- Accessibility — full keyboard navigation for all interactive sections
- Community feedback — section ideas, layout options, and integration support

---

## Pulse Weather Card

Shipped in v1.8.0. See [WEATHER_CARD_GUIDE.md](WEATHER_CARD_GUIDE.md) for the full configuration reference.

### Exploring

- Hourly precipitation type breakdown in the meteogram (freezing rain, sleet)
- Tide data section for coastal setups
- Community feedback — section ideas and Atmos CE feature requests

---

## Pulse Family — Future Cards

Separate cards that share the same compact look and visual editor. Install only what you need.

- **Pulse Energy** ([#2](https://github.com/hiall-fyi/pulse-card/issues/2)) — a compact view of solar, grid, and battery energy flow
- **Pulse Chart** ([#2](https://github.com/hiall-fyi/pulse-card/issues/2) - @ChrisMarriott38) — a simple history chart for when ApexCharts is overkill
