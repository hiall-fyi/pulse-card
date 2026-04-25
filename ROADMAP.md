# Roadmap

Ideas and feature requests under consideration. No timelines — this is a "what's on the radar" list.

---

## Pulse Climate Card

### Up Next

- **Manual entity overrides** ([#28](https://github.com/hiall-fyi/pulse-card/issues/28) - @dragorex71) — let non-Tado CE users point the card at their own sensors for chips and sections. Phase 1: `heating_power_entity`, `battery_entity`, `mold_risk_entity`, `open_window_entity`. Phase 2: environment, thermal, and schedule section entities
- **Visual editor refinements** — per-zone settings (name, icon, color, sparkline mode) directly in the GUI

### Exploring

- More chart types — humidity overlay, heating schedule timeline
- Accessibility — full keyboard navigation for all interactive sections
- Community feedback — section ideas, layout options, and integration support

---

## Pulse Card

Pulse Card is stable at 1.x. Focus is on compatibility and polish — bug fixes, HA version support, and refinements based on community feedback.

---

## Pulse Family — Future Cards

Separate cards that share the same compact look and visual editor. Install only what you need.

- **Pulse Weather** — outdoor conditions at a glance with [Atmos CE](https://github.com/hiall-fyi/atmos_ce) auto-discovery. Air quality, pollen, UV index, wind, and forecast — with the same strip charts and visual identity as Pulse Climate
- **Pulse Energy** ([#2](https://github.com/hiall-fyi/pulse-card/issues/2)) — a compact view of solar, grid, and battery energy flow
- **Pulse Chart** ([#2](https://github.com/hiall-fyi/pulse-card/issues/2) - @ChrisMarriott38) — a simple history chart for when ApexCharts is overkill
