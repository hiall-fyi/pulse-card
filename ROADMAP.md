# Roadmap

Ideas and feature requests under consideration. No timelines — this is a "what's on the radar" list.

---

## Pulse Card

### 1.0.0 — Solid Foundation

Pulse Card has reached 1.0.0. It covers everything you need for compact bar visualization — severity colors, sparklines, slider mode, target markers, secondary info templates, and a full visual editor.

From here, the focus is on stability and polish — bug fixes, Home Assistant compatibility, and refinements that make the card even better at what it already does well.

---

## Pulse Climate Card

### Now shipping

Pulse Climate Card is live and included in the same install as Pulse Card. It provides a full climate dashboard with multi-zone overview, temperature and power bars, sparkline modes, section-based layout, and visual effects like energy flow particles, heat shimmer, frosted glass panels, and a radial thermal compass.

If you use Tado CE, the card auto-discovers your sensors for an enriched display. It also works with any `climate.*` or `water_heater.*` entity.

### What's next

- Visual editor refinements — per-zone settings (name, icon, color, sparkline mode) directly in the GUI
- More chart types — humidity overlay, heating schedule timeline
- Accessibility — full keyboard navigation for all interactive sections
- Community feedback — section ideas, layout options, and integration support

---

## Pulse Family — Future Cards

Separate cards that share the same compact look and visual editor. Install only what you need.

- **Pulse Energy** ([#2](https://github.com/hiall-fyi/pulse-card/issues/2)) — a compact view of solar, grid, and battery energy flow
- **Pulse Chart** ([#2](https://github.com/hiall-fyi/pulse-card/issues/2) - @ChrisMarriott38) — a simple history chart for when ApexCharts is overkill
