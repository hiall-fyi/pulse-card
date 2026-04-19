# Roadmap

Ideas and feature requests under consideration. No timelines — this is a "what's on the radar" list.

## Pulse Card

### Path to 1.0.0

v0.5.0 ships slider mode and step buttons. Once community feedback is incorporated and any rough edges are smoothed out, the next release will be **v1.0.0** — marking Pulse Card as feature-complete.

After 1.0.0, Pulse Card enters maintenance mode: bug fixes, Home Assistant compatibility updates, and improvements that fit the card's core (compact bar visualization). New entity-type-specific features will be handled by Pulse Family cards.

## Pulse Family

Separate cards that share the same compact look and visual editor. Install only what you need.

- **Pulse Panel** — a network switch front panel replica showing port status with link/activity LEDs. Each port tile shows link state, traffic speed, and device name at a glance
- **Pulse Climate** ([#2](https://github.com/hiall-fyi/pulse-card/issues/2) - @ChrisMarriott38) — a compact thermostat card showing current temperature, target, and HVAC mode
- **Pulse Energy** ([#2](https://github.com/hiall-fyi/pulse-card/issues/2)) — a compact view of solar, grid, and battery energy flow
- **Pulse Chart** ([#2](https://github.com/hiall-fyi/pulse-card/issues/2) - @ChrisMarriott38) — a simple history chart for when ApexCharts is overkill
