/**
 * @module pulse-climate/styles
 * @description CSS styles for Pulse Climate Card. Card-local design tokens
 * use the --pc-* prefix; family-shared tokens (text, accent, status, glass,
 * spacing, radius, type scale) inherit from src/shared/styles.js.
 */

import { SHARED_STYLES } from '../shared/styles.js';

export const STYLES = `${SHARED_STYLES}
/* Master pulse phase — typed CSS variable interpolated by :host animation.
   Sub-elements that breathe read calc(... * var(--pc-pulse-phase)) so all
   motion stays in lockstep without any JS timer. Reduced-motion locks the
   variable at its initial value (0.5, mid-state) and suspends the host
   animation so identity is preserved but motion ceases. */
@property --pc-pulse-phase {
  syntax: "<number>";
  inherits: true;
  initial-value: 0.5;
}

@keyframes pc-master-pulse {
  0%, 100% { --pc-pulse-phase: 0; }
  50%      { --pc-pulse-phase: 1; }
}

:host {
  animation: pc-master-pulse 4s ease-in-out infinite;
}

:host {
  display: block;

  /* Card-local design tokens — override via card-mod or HA theme.
     Family-shared concerns (text colour, body type size, card chrome
     background, surface tint) live on --pulse-* and are inherited via
     SHARED_STYLES; only Climate-specific knobs declare locally. */
  --pc-bar-height: 8px;
  --pc-bar-radius: 4px;
  --pc-chart-line-width: 1.5;
  --pc-gap: var(--pulse-space-card);
  --pc-gauge-height: 6px;
  --pc-gauge-radius: 3px;
  --pc-graph-height: 80px;

  /* Hearth wash — static bottom-edge ember glow over --pulse-bg-card.
     Atmosphere module (state-driven conic gradient) animates over the top. */
  --pc-hearth-glow-inner: rgba(255, 138, 70, 0.10);
  --pc-hearth-glow-mid:   rgba(180, 70, 50, 0.04);

  /* Section-local typography — values used by only one section, kept card-local
     so they don't pollute the shared token surface. */
  --pc-detail-name: 15px;   /* zone detail panel — clicked-zone heading */
  --pc-detail-stat: 22px;   /* zone detail panel — primary stat value */
}

ha-card {
  overflow: hidden;
  padding: var(--pulse-space-card);
  background:
    radial-gradient(ellipse 80% 60% at 50% 100%,
      var(--pc-hearth-glow-inner) 0%,
      var(--pc-hearth-glow-mid) 35%,
      transparent 70%),
    var(--pulse-bg-card);
  container-type: inline-size;
  color: var(--pulse-text-primary);
}

/* Title — adds layout margin on top of shared typography. */
.pulse-title { margin-bottom: 12px; }

/* Section container */
.pc-section { margin-top: 12px; }
.pc-section:first-child { margin-top: 0; }
.pulse-section-label { margin-bottom: 6px; }

.pc-section-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--pulse-space-element);
}
.pc-section-header .pulse-section-label { margin-bottom: 0; }
.pc-section-header.pc-section-header-center { align-items: center; }

.pc-section-subtitle {
  font-size: var(--pulse-font-label);
  color: var(--pulse-text-secondary);
}

.pc-energy-flow-header-value {
  font-size: var(--pulse-font-label);
  font-weight: var(--pulse-weight-medium);
}

.pc-comparison-legend {
  display: flex;
  gap: var(--pulse-space-element);
  margin-top: 4px;
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
}

/* Zone row */
.pc-zone-row {
  display: flex;
  flex-direction: column;
  gap: var(--pulse-space-tight);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  padding-left: 12px;     /* leaves room for the leading state ribbon */
  -webkit-tap-highlight-color: transparent;
}

/* Leading state ribbon — colour set by .pc-row-{state} below */
.pc-row-ribbon {
  position: absolute;
  left: 0; top: 6px; bottom: 6px;
  width: 3px;
  border-radius: 2px;
  background: var(--pc-row-ribbon, transparent);
  transition: background var(--pulse-anim-base) ease-out;
}

.pc-zone-row.pc-row-heat   { --pc-row-ribbon: var(--pulse-tier-strong); }
.pc-zone-row.pc-row-cool   { --pc-row-ribbon: var(--pulse-tier-calm); }
.pc-zone-row.pc-row-idle,
.pc-zone-row.pc-row-at-target { --pc-row-ribbon: rgba(255, 255, 255, 0.15); }
.pc-zone-row.pc-row-off,
.pc-zone-row.pc-row-unavail   { --pc-row-ribbon: rgba(255, 255, 255, 0.06); }
.pc-zone-row:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
  border-radius: var(--pulse-radius-small);
}
.pc-zone-row.pc-unavailable { opacity: 0.5; }
.pc-zone-row.pc-unavailable .pc-power-bar-fill {
  background: var(--pulse-disabled) !important;
  width: 100% !important;
  opacity: 0.2;
}


.pc-zone-row.pc-row-off { opacity: 0.55; }
.pc-zone-row.pc-row-unavail { opacity: 0.4; }

.pc-state-tag {
  display: inline-block;
  font-size: var(--pulse-font-micro);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 2px 6px;
  margin-left: 8px;
  border-radius: var(--pulse-radius-tight);
  font-weight: var(--pulse-weight-medium);
  vertical-align: middle;
}
.pc-tag-heat { background: color-mix(in srgb, var(--pulse-tier-strong) 18%, transparent); color: var(--pulse-tier-strong); }
.pc-tag-cool { background: color-mix(in srgb, var(--pulse-tier-calm) 18%, transparent); color: var(--pulse-tier-calm); }
.pc-tag-idle { color: var(--pulse-text-secondary); opacity: 0.7; }
.pc-tag-at-target { color: var(--pulse-tier-moderate); opacity: 0.9; }
.pc-tag-off { color: var(--pulse-text-secondary); opacity: 0.6; }
.pc-tag-unavail { background: color-mix(in srgb, var(--pulse-tier-gale) 12%, transparent); color: color-mix(in srgb, var(--pulse-tier-gale) 80%, white); }

/* State-tinted current temperature on rows */
.pc-zone-row.pc-row-heat .pc-zone-temp { color: var(--pulse-tier-strong); }
.pc-zone-row.pc-row-cool .pc-zone-temp { color: var(--pulse-tier-calm); }
.pc-zone-row.pc-row-off .pc-zone-temp,
.pc-zone-row.pc-row-unavail .pc-zone-temp { color: var(--pulse-text-secondary); }

/* Zone header: name + current temp */
.pc-zone-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 2px;
  gap: var(--pulse-space-tight);
  min-width: 0;
}
.pc-zone-name {
  font-size: var(--pulse-font-body);
  color: var(--pulse-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
}

/* State hierarchy aggregator — driven by rowStateClass() in utils.js.
   Granular pc-row-heat / -cool / -off etc. stay for ribbon colour and
   per-state visual cues; aggregators (active / mid / quiet) drive the
   unified text + dim treatment across every section. */
.pc-row-active .pc-zone-name,
.pc-row-active .pc-rank-name,
.pc-row-active .pc-home-status-zone-name,
.pc-row-active .pc-timeline-group-name,
.pc-row-active .pc-zone-label,
.pc-row-active.pc-legend-item .pc-legend-name {
  color: var(--pulse-text-primary);
  font-weight: var(--pulse-weight-medium);
}

.pc-row-mid .pc-zone-name,
.pc-row-mid .pc-rank-name,
.pc-row-mid .pc-home-status-zone-name,
.pc-row-mid .pc-timeline-group-name,
.pc-row-mid .pc-zone-label,
.pc-row-mid.pc-legend-item .pc-legend-name {
  color: var(--pulse-text-primary);
  font-weight: var(--pulse-weight-regular);
}

.pc-row-quiet .pc-zone-name,
.pc-row-quiet .pc-rank-name,
.pc-row-quiet .pc-home-status-zone-name,
.pc-row-quiet .pc-timeline-group-name,
.pc-row-quiet .pc-zone-label,
.pc-row-quiet.pc-legend-item .pc-legend-name {
  color: var(--pulse-text-secondary);
  font-weight: var(--pulse-weight-regular);
}

/* Quiet rows dim the whole row so right-side stats (value, slider, delta
   text) follow the name's brightness. .pc-zone-row keeps its own opacity
   from the legacy ribbon path. */
.pc-rank-row.pc-row-quiet,
.pc-home-status-row.pc-row-quiet,
.pc-timeline-row.pc-row-quiet,
.pc-state-row.pc-row-quiet,
.pc-heatmap-row.pc-row-quiet {
  opacity: 0.6;
}
.pc-zone-temp {
  font-size: var(--pulse-font-body);
  font-weight: var(--pulse-weight-semibold);
  color: var(--pulse-text-primary);
  white-space: nowrap;
  flex-shrink: 0;
}
.pc-zone-target {
  font-size: var(--pulse-font-label);
  color: var(--pulse-text-secondary);
  margin-left: 4px;
}
.pc-zone-humidity {
  font-size: var(--pulse-font-label);
  font-weight: var(--pulse-weight-regular);
  color: var(--pulse-text-secondary);
  opacity: 0.7;
  display: inline-flex;
  align-items: center;
  gap: var(--pulse-space-pin);
  margin-left: 4px;
}
.pc-zone-humidity ha-icon {
  --mdc-icon-size: 12px;
}

/* Temperature gauge bar */
.pc-temp-gauge {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: var(--pc-gauge-height, 6px);
  border-radius: var(--pc-gauge-radius, 3px);
}
.pc-temp-gauge-bg {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0.25;
}
.pc-temp-gauge-current {
  position: absolute;
  top: -1px;
  bottom: -1px;
  width: 3px;
  background: var(--pulse-text-primary);
  border-radius: 1.5px;
  z-index: 2;
  box-shadow: 0 0 0 1px var(--pulse-bg-card);
}
.pc-temp-gauge-target {
  position: absolute;
  top: -1px;
  bottom: -1px;
  width: 2px;
  background: var(--pulse-text-primary);
  opacity: 0.5;
  border-radius: var(--pulse-radius-hairline);
  z-index: 1;
  box-shadow: 0 0 0 1px var(--pulse-bg-card);
}

/* Heating/cooling power bar */
.pc-power-bar-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: var(--pc-bar-height, 8px);
  border-radius: var(--pc-bar-radius, 4px);
}
.pc-power-bar-track {
  position: absolute;
  inset: 0;
  background: var(--pulse-accent);
  opacity: 0.12;
  border-radius: inherit;
}
.pc-power-bar-fill {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  border-radius: inherit;
  transition: width var(--pulse-anim-fill) ease, background-color var(--pulse-anim-mode) ease;
}
.pc-power-bar-fill.pc-bar-active {
  box-shadow: 0 0 8px 1px var(--pc-bar-glow, rgba(255, 152, 0, 0.4));
  animation: pc-bar-pulse 2.5s ease-in-out infinite;
}
@keyframes pc-bar-pulse {
  0%, 100% { box-shadow: 0 0 6px 0 var(--pc-bar-glow, rgba(255, 152, 0, 0.3)); }
  50% { box-shadow: 0 0 10px 2px var(--pc-bar-glow, rgba(255, 152, 0, 0.5)); }
}

/* Status chips */
.pc-zone-chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--pulse-space-chip);
  padding: 2px 0;
}
.pc-chip {
  display: inline-flex;
  align-items: center;
  gap: var(--pulse-space-tight);
  font-size: var(--pulse-font-label);
  color: var(--pulse-text-secondary);
  white-space: nowrap;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
}
.pc-chip ha-icon { --mdc-icon-size: 14px; }
.pc-chip.pc-severity-high { color: var(--pulse-tier-gale); }
.pc-chip.pc-severity-medium { color: var(--pulse-tier-strong); }
.pc-chip.pc-severity-critical { color: var(--pulse-tier-gale); font-weight: var(--pulse-weight-semibold); }

.pc-chip-aside {
  font-size: var(--pulse-font-caption);
  opacity: 0.6;
}

/* Multi-column zone grid */
.pc-section-zones.pc-columns {
  display: grid;
  gap: var(--pc-gap, 16px);
}

@container (max-width: 300px) {
  .pc-section-zones.pc-columns { grid-template-columns: 1fr; }
}

/* Compact mode */
.pc-compact .pc-zone-row { gap: var(--pulse-space-hairline); }
.pc-compact .pc-zone-name { font-size: var(--pulse-font-kicker); }
.pc-compact .pc-zone-chips { gap: var(--pulse-space-tight); }
.pc-compact .pc-chip { font-size: var(--pulse-font-caption); }

/* System section rows */
.pc-system-row {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-element);
  padding: 4px 2px;
}
.pc-system-label {
  font-size: var(--pulse-font-body);
  color: var(--pulse-text-primary);
  min-width: 72px;
  font-weight: var(--pulse-weight-regular);
}
/* ── Chart Styles ──────────────────────────────────────────────────── */

/* Graph container */
.pc-chart-container {
  position: relative;
  width: 100%;
  height: var(--pc-graph-height, 80px);
  overflow: hidden;
  border-radius: var(--pulse-radius-small);
}
.pc-chart-svg {
  width: 100%;
  height: 100%;
  display: block;
}
.pc-chart-svg path {
  stroke-width: var(--pc-chart-line-width, 1.5);
  vector-effect: non-scaling-stroke;
}
.pc-chart-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: var(--pulse-font-kicker);
  color: var(--pulse-text-secondary);
  opacity: 0.6;
}

/* Legend chips */
.pc-chart-legend {
  display: flex;
  flex-wrap: wrap;
  gap: var(--pulse-space-element);
  padding: 4px 0;
}
.pc-legend-chip {
  display: inline-flex;
  align-items: center;
  gap: var(--pulse-space-tight);
  font-size: var(--pulse-font-label);
  color: var(--pulse-text-secondary);
  white-space: nowrap;
}
.pc-legend-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: var(--pulse-radius-circle);
  flex-shrink: 0;
}

/* Donut container */
.pc-donut-container {
  position: relative;
  margin: 8px auto;
}
.pc-donut-container.pc-api-breakdown-donut {
  flex-shrink: 0;
  margin: 0;
}

/* API breakdown row inside the API tab — donut + legend chips side by side */
.pc-api-breakdown-row {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-card);
}
.pc-donut-container svg {
  width: 100%;
  height: 100%;
}
.pc-donut-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  pointer-events: none;
}
.pc-donut-center-num {
  font-size: var(--pulse-font-hero);
  font-weight: var(--pulse-weight-thin);
  letter-spacing: var(--pulse-ls-hero);
  font-variant-numeric: tabular-nums;
  color: var(--pulse-text-primary);
  line-height: 1;
}
.pc-donut-center-label {
  font-size: var(--pulse-font-micro);
  text-transform: uppercase;
  letter-spacing: var(--pulse-ls-kicker);
  color: var(--pulse-text-secondary);
  margin-top: 4px;
}

/* Donut arcs — largest auto-blooms via inline filter attr (per-instance unique
   id from renderDonut), idle dim 0.6. CSS does not set filter so inline attr
   wins. Hover lifts opacity only — bloom stays anchored to active. */
.pc-donut-arc {
  opacity: 0.6;
  transition: opacity var(--pulse-anim-medium);
  cursor: pointer;
}
.pc-donut-arc.pc-donut-arc-active {
  opacity: 1;
}
.pc-donut-arc:hover {
  opacity: 1;
}

/* Responsive: hide legend at narrow widths */
@container (max-width: 200px) {
  .pc-chart-legend { display: none; }
  .pc-chart-container { height: 50px; }
}

/* ── Visual Identity Styles ────────────────────────────────────────── */

/* Filled sparkline (shared by pulse mode, graph, bridge, api) */
.pc-sparkline-filled {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: var(--pulse-radius-small);
  touch-action: pan-y;
}
.pc-sparkline-filled svg {
  width: 100%;
  height: 100%;
  display: block;
}
.pc-sparkline-filled.pc-sparkline-prominent { height: 40px; }

/* Zone Pulse mode — waveform as row background */
.pc-zone-row-pulse {
  position: relative;
  height: 56px;
  margin-bottom: 4px;
  border-radius: var(--pulse-radius-row);
  overflow: hidden;
  background: var(--pulse-bg-secondary);
  display: flex;
  align-items: center;
  padding: 0 14px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: pan-y;
}
.pc-zone-row-pulse:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
}
.pc-zone-row-pulse .pc-pulse-bg {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  display: block;
  z-index: 1;
}
.pc-zone-row-pulse .pc-pulse-info {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.pc-pulse-info-left { display: flex; flex-direction: column; gap: var(--pulse-space-hairline); }
.pc-pulse-info-right { display: flex; align-items: baseline; gap: var(--pulse-space-chip); }
.pc-pulse-current {
  font-size: var(--pulse-font-large);
  font-weight: var(--pulse-weight-light);
  color: var(--pulse-text-primary);
  font-variant-numeric: tabular-nums;
}
.pc-pulse-status {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-tight);
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
}
.pc-status-dot {
  width: 5px;
  height: 5px;
  border-radius: var(--pulse-radius-circle);
  flex-shrink: 0;
}
@keyframes pc-glow-pulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}
.pc-heating-glow { animation: pc-glow-pulse 3s ease-in-out infinite; }

/* Heating row glow — warm border shadow */
.pc-zone-row-pulse.pc-heating {
  animation: pc-row-glow 3s ease-in-out infinite;
}
@keyframes pc-row-glow {
  0%, 100% { box-shadow: 0 0 10px 1px rgba(255, 152, 0, 0.25), inset 0 0 10px 1px rgba(255, 152, 0, 0.06); }
  50% { box-shadow: 0 0 16px 2px rgba(255, 152, 0, 0.4), inset 0 0 14px 2px rgba(255, 152, 0, 0.1); }
}

/* Strip rows — shared by thermal-strip's .pc-timeline-row and
   comfort-strip's .pc-heatmap-row. */
.pc-section-thermal-strip .pc-timeline-row,
.pc-section-comfort-strip .pc-heatmap-row {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  cursor: pointer;
  border-radius: var(--pulse-radius-pill);
  padding: 2px 0;
  position: relative;
  overflow: visible;
  transition: background var(--pulse-anim-fast);
}
.pc-section-thermal-strip .pc-timeline-row:hover,
.pc-section-comfort-strip .pc-heatmap-row:hover { background: var(--pulse-bg-hover); }
.pc-section-thermal-strip .pc-timeline-row.pc-selected,
.pc-section-comfort-strip .pc-heatmap-row.pc-selected {
  background: linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--pulse-tier-strong) 14%, transparent) 50%, transparent 100%);
}
.pc-section-thermal-strip .pc-timeline-row.pc-selected .pc-strip-container,
.pc-section-comfort-strip .pc-heatmap-row.pc-selected .pc-strip-container { height: 18px; }
.pc-section-thermal-strip .pc-timeline-row.pc-selected .pc-zone-label,
.pc-section-comfort-strip .pc-heatmap-row.pc-selected .pc-zone-label {
  color: var(--pulse-text-primary);
  font-weight: var(--pulse-weight-medium);
}

.pc-section-thermal-strip .pc-zone-label,
.pc-section-comfort-strip .pc-zone-label {
  width: 72px;
  font-size: var(--pulse-font-body);
  color: var(--pulse-text-primary);
  text-align: right;
  padding-right: 8px;
  flex-shrink: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color var(--pulse-anim-base);
}
/* Strip container — shared by thermal strip and comfort strip (timeline mode) */
.pc-section-thermal-strip .pc-strip-container,
.pc-section-comfort-strip .pc-strip-container {
  flex: 1;
  height: 14px;
  border-radius: var(--pulse-radius-small);
  overflow: visible;
  position: relative;
  touch-action: pan-y;
}
.pc-section-thermal-strip .pc-now-marker,
.pc-section-comfort-strip .pc-now-marker {
  position: absolute;
  top: -3px;
  bottom: -3px;
  width: 1.5px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.7);
  z-index: 3;
}
.pc-section-thermal-strip .pc-time-axis {
  display: flex;
  justify-content: space-between;
  padding: 4px 0 8px;
  margin-left: 72px;
}
.pc-section-thermal-strip .pc-time-label {
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
}

/* Strip tooltip — shared by timeline and heatmap */
.pc-strip-tooltip {
  position: absolute;
  top: -26px;
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-primary);
  background: var(--pulse-glass-bg);
  backdrop-filter: blur(var(--pulse-glass-blur));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur));
  border: 1px solid var(--pulse-glass-border);
  padding: 2px 8px;
  border-radius: var(--pulse-radius-small);
  white-space: nowrap;
  pointer-events: none;
  z-index: 10;
  transform: translateX(-50%);
}
.pc-strip-tooltip-fixed {
  position: fixed;
  top: auto;
  z-index: 9999;
}

.pc-strip-crosshair {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--pulse-text-primary);
  opacity: 0.25;
  pointer-events: none;
  z-index: 5;
  display: none;
}

/* Drag selection highlight */
.pc-strip-drag-highlight {
  position: absolute;
  top: 0;
  bottom: 0;
  background: var(--pulse-accent);
  opacity: 0.12;
  border-radius: var(--pulse-radius-bar);
  pointer-events: none;
  z-index: 4;
}

/* Comfort Heatmap — HTML div cells for hover/click */
.pc-section-comfort-strip .pc-heatmap-body { padding: 4px 0; position: relative; }

/* Heatmap cells — shared by comfort strip, thermal strip (heatmap mode),
   and timeline-group's Thermal tab. */
.pc-section-comfort-strip .pc-cells,
.pc-section-thermal-strip .pc-cells,
.pc-section-timeline-group .pc-cells {
  display: flex;
  gap: var(--pulse-space-pin);
  flex: 1;
  touch-action: pan-y;
}
.pc-section-comfort-strip .pc-cell,
.pc-section-thermal-strip .pc-cell,
.pc-section-timeline-group .pc-cell {
  flex: 1;
  height: 16px;
  border-radius: var(--pulse-radius-bar);
  transition: transform var(--pulse-anim-fast), height var(--pulse-anim-base), box-shadow var(--pulse-anim-base);
}
.pc-section-comfort-strip .pc-heatmap-row.pc-selected .pc-cell,
.pc-section-thermal-strip .pc-timeline-row.pc-selected .pc-cell { height: 20px; }
.pc-section-comfort-strip .pc-cell:hover,
.pc-section-thermal-strip .pc-cell:hover {
  transform: scaleY(1.4);
  box-shadow: 0 0 8px currentColor;
  z-index: 2;
}
.pc-section-comfort-strip .pc-cell-empty,
.pc-section-thermal-strip .pc-cell-empty {
  background: repeating-linear-gradient(
    45deg,
    var(--pulse-border-subtle) 0px,
    var(--pulse-border-subtle) 2px,
    transparent 2px,
    transparent 4px
  );
}
.pc-heatmap-legend {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-row);
  padding: 4px 0;
  justify-content: center;
}
.pc-heatmap-legend .pc-legend-item {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-tight);
  font-size: var(--pulse-font-micro);
  color: var(--pulse-text-secondary);
}
.pc-heatmap-legend .pc-legend-swatch {
  width: 8px;
  height: 8px;
  border-radius: var(--pulse-radius-bar);
}
.pc-legend-swatch-good { background: color-mix(in srgb, var(--pulse-tier-moderate) 70%, transparent); }
.pc-legend-swatch-fair { background: color-mix(in srgb, var(--pulse-tier-strong) 65%, transparent); }
.pc-legend-swatch-poor { background: color-mix(in srgb, var(--pulse-tier-gale) 60%, transparent); }
.pc-heatmap-time-axis {
  display: flex;
  justify-content: space-between;
  margin-left: 72px;
  padding: 4px 0 14px;
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
}

/* Energy Flow */
.pc-ribbon-active { /* animation handled by SVG <animate> on gradient */ }
.pc-ribbon { cursor: pointer; transition: opacity var(--pulse-anim-base); }
.pc-ribbon:hover { opacity: 1 !important; }
.pc-ribbon.pc-dimmed { opacity: 0.2; }

/* Radial */
.pc-section-radial { text-align: center; }
.pc-radial-svg { display: block; margin: 0 auto; }
.pc-radial-container {
  display: flex;
  justify-content: center;
  position: relative;
}
.pc-center-info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  transition: opacity var(--pulse-anim-medium);
  background: var(--pulse-glass-bg);
  backdrop-filter: blur(var(--pulse-glass-blur));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur));
  border: 1px solid var(--pulse-glass-border);
  border-radius: var(--pulse-radius-circle);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.pc-center-sheen {
  position: absolute;
  inset: 0;
  border-radius: var(--pulse-radius-circle);
  pointer-events: none;
  background: radial-gradient(circle farthest-side at 0 0, rgba(255,255,255,0) 88%, rgba(255,255,255,0.5) 96%, rgba(255,255,255,0) 100%) no-repeat;
  background-size: 200% 200%;
  background-position: -100% 50%;
}
.pc-center-sheen.light-theme {
  background: radial-gradient(circle farthest-side at 0 0, rgba(0,0,0,0) 88%, rgba(0,0,0,0.12) 96%, rgba(0,0,0,0) 100%) no-repeat;
  background-size: 200% 200%;
  background-position: -100% 50%;
}
.pc-center-value {
  font-size: var(--pulse-font-hero);
  font-weight: var(--pulse-weight-thin);
  letter-spacing: var(--pulse-ls-hero);
  font-variant-numeric: tabular-nums;
  color: var(--pulse-text-primary);
  transition: font-size var(--pulse-anim-medium);
}
.pc-center-label {
  font-size: var(--pulse-font-micro);
  color: var(--pulse-text-secondary);
  letter-spacing: var(--pulse-ls-kicker);
  text-transform: uppercase;
  margin-top: 6px;
}
.pc-center-sub {
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
  margin-top: 4px;
  font-variant-numeric: tabular-nums;
}
.pc-arc-group {
  cursor: pointer;
  transition: opacity var(--pulse-anim-base);
  opacity: 0.6;
}
.pc-arc-group.pc-arc-active { opacity: 1; }
.pc-arc-group:hover { opacity: 1 !important; }
.pc-arc-group.pc-dimmed { opacity: 0.2 !important; }
.pc-arc-group.pc-selected { opacity: 1 !important; }
.pc-arc-path {
  cursor: pointer;
}
.pc-arc-path:hover { opacity: 1 !important; }

/* Radial legend */
.pc-radial-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 12px;
  margin-top: 16px;
  justify-content: center;
}
.pc-radial-legend .pc-legend-item {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-tight);
  font-size: var(--pulse-font-label);
  color: var(--pulse-text-secondary);
  cursor: pointer;
  padding: 2px 4px;
  border-radius: var(--pulse-radius-small);
  position: relative;
  overflow: hidden;
  transition: background var(--pulse-anim-fast), color var(--pulse-anim-fast);
}
.pc-radial-legend .pc-legend-item:hover { background: color-mix(in srgb, var(--pulse-accent) 8%, transparent); }
.pc-radial-legend .pc-legend-item.pc-selected { background: color-mix(in srgb, var(--pulse-accent) 16%, transparent); color: var(--pulse-text-primary); }
.pc-radial-legend .pc-legend-dot {
  width: 6px;
  height: 6px;
  border-radius: var(--pulse-radius-circle);
  flex-shrink: 0;
}
.pc-legend-temp {
  font-variant-numeric: tabular-nums;
  color: var(--pulse-text-primary);
  font-weight: var(--pulse-weight-medium);
}

/* Zone detail panel (shared by radial, thermal strip, comfort strip, energy flow) */
.pc-zone-detail {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: max-height var(--pulse-anim-slow) ease, opacity var(--pulse-anim-medium) ease, padding var(--pulse-anim-slow) ease;
  padding: 0;
}
.pc-zone-detail.pc-active {
  max-height: 240px;
  opacity: 1;
  padding: 14px 0 16px;
  background: var(--pulse-glass-bg);
  backdrop-filter: blur(var(--pulse-glass-blur));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur));
  border: 1px solid var(--pulse-glass-border);
  border-radius: var(--pulse-radius-element);
}
.pc-detail-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
}
.pc-detail-name { font-size: var(--pc-detail-name); font-weight: var(--pulse-weight-medium); }
.pc-detail-close {
  font-size: var(--pulse-font-label);
  color: var(--pulse-text-secondary);
  cursor: pointer;
  padding: 4px 8px;
  border-radius: var(--pulse-radius-pill);
  transition: background var(--pulse-anim-fast);
}
.pc-detail-close:hover { background: color-mix(in srgb, var(--pulse-accent) 10%, transparent); }
.pc-detail-stats { display: flex; gap: var(--pulse-space-card); }
.pc-stat { flex: 1; }
.pc-stat-value {
  font-size: var(--pc-detail-stat);
  font-weight: var(--pulse-weight-light);
  font-variant-numeric: tabular-nums;
}
.pc-stat-label {
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  margin-top: 2px;
}
.pc-stat-sub {
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
  margin-top: 1px;
}
.pc-detail-bar {
  margin-top: 10px;
  height: 6px;
  border-radius: var(--pulse-radius-tight);
  background: var(--pulse-bg-secondary);
  overflow: hidden;
}
.pc-detail-bar-fill {
  height: 100%;
  border-radius: var(--pulse-radius-tight);
  transition: width var(--pulse-anim-color) ease;
}
.pc-detail-sparkline {
  border-radius: var(--pulse-radius-pill);
  overflow: hidden;
}

/* API Dashboard */
.pc-api-dashboard {
  display: flex;
  flex-direction: column;
  gap: var(--pulse-space-element);
}
.pc-api-row {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-element);
}
.pc-usage-gauge {
  position: relative;
  flex-shrink: 0;
}
.pc-gauge-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: var(--pulse-font-body);
  font-weight: var(--pulse-weight-semibold);
  color: var(--pulse-text-secondary);
  text-align: center;
  line-height: 1.2;
}
.pc-gauge-center-limit {
  font-size: var(--pulse-font-caption);
  opacity: 0.6;
}

/* HomeKit pulse dot */
.pc-pulse-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: var(--pulse-radius-circle);
  margin-right: 4px;
  vertical-align: middle;
}
.pc-pulse-dot.pc-connected {
  background: var(--pulse-tier-moderate);
  animation: pc-pulse-dot-glow 2s ease-in-out infinite;
}
.pc-pulse-dot.pc-disconnected {
  background: var(--pulse-tier-gale);
}
@keyframes pc-pulse-dot-glow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Bridge flow temp */
.pc-flow-temp-row {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-tight);
  margin-top: 4px;
}
.pc-homekit-bar-stack { margin-top: 4px; }

.pc-strip-rows { position: relative; }
.pc-flow-temp-value {
  font-size: var(--pulse-font-stat);
  font-weight: var(--pulse-weight-semibold);
}
.pc-flow-sparkline {
  display: inline-block;
  vertical-align: middle;
}

/* Home Status section */
.pc-section-home-status { }
.pc-home-status-hero {
  text-align: center;
  padding: 16px 0 20px;
}
.pc-home-status-icon {
  --mdc-icon-size: 36px;
  display: block;
  margin: 0 auto 6px;
}
.pc-home-status-label {
  font-size: var(--pulse-font-large);
  font-weight: var(--pulse-weight-medium);
  margin-bottom: 4px;
}
.pc-home-status-detail {
  font-size: var(--pulse-font-kicker);
  color: var(--pulse-text-secondary);
}
.pc-home-status-zones {
  display: flex;
  flex-direction: column;
}
.pc-home-status-row {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid var(--pulse-border-subtle);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.pc-home-status-row:last-child { border-bottom: none; }
.pc-home-status-row:hover {
  background: var(--pulse-bg-hover);
}
.pc-home-status-row:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
  border-radius: var(--pulse-radius-small);
}
.pc-home-status-zone-name {
  width: 72px;
  flex-shrink: 0;
  font-size: var(--pulse-font-body);
  color: var(--pulse-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.pc-home-status-temps {
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--pulse-space-chip);
}
.pc-home-status-actual {
  font-size: var(--pulse-font-stat);
  font-weight: var(--pulse-weight-thin);
  letter-spacing: -0.3px;
  font-variant-numeric: tabular-nums;
  color: var(--pulse-text-primary);
  min-width: 56px;
}
.pc-home-status-actual.pc-off {
  color: var(--pulse-text-secondary);
}
.pc-home-status-arrow {
  font-size: var(--pulse-font-label);
  color: var(--pulse-text-secondary);
  opacity: 0.7;
}
.pc-home-status-target {
  font-size: var(--pulse-font-kicker);
  color: var(--pulse-text-secondary);
  font-variant-numeric: tabular-nums;
  min-width: 40px;
}
.pc-home-status-delta {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-tight);
}
.pc-home-status-bar-track {
  position: relative;
  width: 60px;
  height: 6px;
  border-radius: var(--pulse-radius-tight);
  background: var(--pulse-border-medium);
  overflow: hidden;
}
.pc-home-status-bar-center {
  position: absolute;
  left: 50%;
  top: 0;
  width: 1px;
  height: 100%;
  background: color-mix(in srgb, white 15%, transparent);
}
.pc-home-status-bar-fill {
  position: absolute;
  top: 0;
  height: 100%;
  border-radius: var(--pulse-radius-tight);
}
.pc-home-status-delta-text {
  font-size: var(--pulse-font-label);
  font-variant-numeric: tabular-nums;
  width: 40px;
  text-align: right;
  color: var(--pulse-text-secondary);
}
.pc-home-status-summary {
  display: flex;
  justify-content: space-around;
  border-top: 1px solid var(--pulse-border-medium);
  padding-top: 14px;
  margin-top: 16px;
}
.pc-home-status-summary .pc-stat { text-align: center; }
.pc-home-status-summary .pc-stat-value {
  font-size: var(--pulse-font-summary);
  font-weight: var(--pulse-weight-thin);
  letter-spacing: -0.5px;
  font-variant-numeric: tabular-nums;
  line-height: 1;
}
.pc-home-status-summary .pc-stat-label {
  font-size: var(--pulse-font-micro);
  letter-spacing: var(--pulse-ls-kicker);
  margin-top: 6px;
}

/* Zone Ranking section */
.pc-section-zone-ranking { }
.pc-ranking-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.pc-ranking-tabs {
  display: flex;
  gap: var(--pulse-space-panel);
}
.pc-ranking-tab {
  font-size: var(--pulse-font-caption);
  text-transform: uppercase;
  letter-spacing: 0.6px;
  font-weight: var(--pulse-weight-semibold);
  color: var(--pulse-text-secondary);
  padding: 6px 8px;
  border: none;
  border-bottom: 1px solid transparent;
  background: none;
  border-radius: 0;
  cursor: pointer;
  transition: color var(--pulse-anim-fast), border-bottom-color var(--pulse-anim-fast);
  user-select: none;
}
.pc-ranking-tab:hover { color: var(--pulse-text-primary); }
.pc-ranking-tab.pc-active {
  color: var(--pulse-tier-strong);
  border-bottom-color: var(--pulse-tier-strong);
}
.pc-ranking-list { }
.pc-rank-row {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: var(--pulse-radius-element);
  margin-bottom: 4px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.pc-rank-row:hover {
  background: var(--pulse-border-subtle);
}
.pc-rank-row:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
}
.pc-rank-num {
  width: 24px;
  font-size: var(--pulse-font-body);
  font-weight: var(--pulse-weight-medium);
  font-variant-numeric: tabular-nums;
  color: var(--pulse-text-secondary);
  flex-shrink: 0;
}
.pc-rank-num.pc-top { color: var(--pulse-tier-strong); }
.pc-rank-name {
  flex: 1;
  font-size: var(--pulse-font-body);
  margin-left: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.pc-rank-bar-track {
  flex: 2;
  height: 8px;
  background: var(--pulse-border-medium);
  border-radius: var(--pulse-radius-small);
  margin: 0 12px;
  overflow: hidden;
}
.pc-rank-bar-fill {
  height: 100%;
  border-radius: var(--pulse-radius-small);
  transition: width var(--pulse-anim-reveal) ease, background var(--pulse-anim-color) ease;
}
.pc-rank-value {
  font-size: var(--pulse-font-body);
  font-weight: var(--pulse-weight-medium);
  font-variant-numeric: tabular-nums;
  width: 50px;
  text-align: right;
  flex-shrink: 0;
}
.pc-ranking-summary {
  display: flex;
  justify-content: space-around;
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid var(--pulse-border-medium);
}
.pc-ranking-summary .pc-stat { text-align: center; }
.pc-ranking-summary .pc-stat-value {
  font-size: var(--pulse-font-summary);
  font-weight: var(--pulse-weight-thin);
  letter-spacing: -0.5px;
  font-variant-numeric: tabular-nums;
  line-height: 1;
}
.pc-ranking-summary .pc-stat-label {
  font-size: var(--pulse-font-micro);
  letter-spacing: var(--pulse-ls-kicker);
  margin-top: 6px;
}

/* Responsive degradation for new sections */
@container (max-width: 200px) {
  .pc-section-thermal-strip .pc-time-axis { display: none; }
  .pc-section-comfort-strip svg text { display: none; }
  .pc-api-row { flex-direction: column; }
}

/* Temperature transition glow — brief brightness flash on temp change */
.pc-temp-transitioning {
  filter: brightness(1.4);
  transition: filter var(--pulse-anim-mode) ease-in, filter var(--pulse-anim-fill) ease-out var(--pulse-anim-mode);
}

/* ── Hero ─────────────────────────────────────────────────────────── */

.pc-hero {
  display: flex; flex-direction: column;
  padding: 4px 0 16px;
  gap: var(--pulse-space-section);
}

.pc-hero-top-row {
  display: flex; align-items: center; justify-content: space-between;
  gap: var(--pulse-space-section);
  flex-wrap: wrap;
}

.pc-hero-temp-block {
  display: flex; flex-direction: column;
  gap: var(--pulse-space-tight);
  min-width: 0;
}

.pc-hero-label {
  font-size: var(--pulse-font-micro); text-transform: uppercase; letter-spacing: 0.6px;
  color: var(--pulse-text-secondary);
}

.pc-hero-temp {
  font-size: 44px; font-weight: var(--pulse-weight-thin); letter-spacing: var(--pulse-ls-display);
  line-height: 1; color: var(--pulse-text-primary);
  font-variant-numeric: tabular-nums;
}

.pc-hero.pc-state-off .pc-hero-temp,
.pc-hero.pc-state-idle .pc-hero-temp { color: var(--pulse-text-secondary); }

.pc-hero-right {
  display: flex; flex-direction: column; align-items: flex-end;
  gap: var(--pulse-space-tight);
  font-size: var(--pulse-font-caption); color: var(--pulse-text-secondary);
  text-align: right; line-height: 1.5;
  flex-shrink: 0;
}

.pc-hero-status {
  display: flex; align-items: center; gap: var(--pulse-space-tight);
  color: var(--pulse-text-primary);
  font-weight: var(--pulse-weight-medium);
}

.pc-hero-outside {
  font-size: var(--pulse-font-micro);
  color: var(--pulse-text-secondary);
  font-variant-numeric: tabular-nums;
}

/* Per-zone dot cluster — breathes via master pulse phase */
.pc-hero-dots {
  display: flex; align-items: center;
  gap: 10px; flex: 0 1 auto;
  flex-wrap: wrap;
  max-width: 280px;
}

.pc-hero-zone-dot {
  width: 10px; height: 10px;
  border-radius: var(--pulse-radius-circle);
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.5);
  transition: opacity var(--pulse-anim-base) ease;
}

.pc-hero-zone-dot.pc-hero-dot-heating {
  background: var(--pulse-tier-strong);
  box-shadow: 0 0 12px var(--pulse-tier-strong);
  opacity: calc(0.7 + 0.3 * var(--pc-pulse-phase));
}

.pc-hero-zone-dot.pc-hero-dot-cooling {
  background: var(--pulse-tier-calm);
  box-shadow: 0 0 12px var(--pulse-tier-calm);
  opacity: calc(0.7 + 0.3 * var(--pc-pulse-phase));
}

.pc-hero-zone-dot.pc-hero-dot-idle    { background: rgba(255,255,255,0.5); opacity: 0.5; }
.pc-hero-zone-dot.pc-hero-dot-off,
.pc-hero-zone-dot.pc-hero-dot-unavail { background: rgba(255,255,255,0.15); opacity: 0.3; }

/* Per-zone strip block — N rows of 24 cells, left-edge state ribbon */
.pc-hero-strips {
  display: flex; flex-direction: column;
  gap: 3px;
  margin-top: 6px;
}

.pc-hero-zone-strip {
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 10px;
  align-items: center;
}

.pc-hero-zone-strip-label {
  font-size: var(--pulse-font-caption); font-weight: var(--pulse-weight-medium);
  text-transform: uppercase; letter-spacing: 0.6px;
  color: var(--pulse-text-primary);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}

.pc-hero-zone-strip-cells {
  display: flex; gap: var(--pulse-space-pin);
  height: 7px;
  flex: 1;
  border-radius: var(--pulse-radius-small);
  overflow: hidden;
  position: relative;
}

.pc-hero-zone-strip-cells::before {
  content: ''; position: absolute; left: 0; top: 0; bottom: 0;
  width: 2px;
  background: var(--pc-strip-edge, transparent);
  z-index: 2;
}

.pc-hero-zone-strip-cells span { flex: 1; }
.pc-hero-zone-strip-cell-ghost { background: var(--pulse-bg-card-strong, rgba(255, 255, 255, 0.04)); }

.pc-hero-zone-strip.pc-row-heat   { --pc-strip-edge: var(--pulse-tier-strong); }
.pc-hero-zone-strip.pc-row-cool   { --pc-strip-edge: var(--pulse-tier-calm); }
.pc-hero-zone-strip.pc-row-idle   { --pc-strip-edge: rgba(255,255,255,0.15); }
.pc-hero-zone-strip.pc-row-off,
.pc-hero-zone-strip.pc-row-unavail { --pc-strip-edge: rgba(255,255,255,0.06); }
.pc-hero-zone-strip.pc-row-off .pc-hero-zone-strip-cells { opacity: 0.3; }

.pc-hero-zone-strip-overflow .pc-hero-zone-strip-label {
  color: var(--pulse-text-secondary);
  font-style: italic;
}

@container (max-width: 280px) {
  .pc-hero-top-row { flex-direction: column; align-items: flex-start; }
  .pc-hero-right { align-items: flex-start; text-align: left; }
}

/* ── Atmosphere wash ───────────────────────────────────────────────────
 * Single radial wash that flips with home state: heating sweeps down
 * from the top, cooling sweeps up from the bottom, mixed shows both
 * with reduced intensity. Idle/off render no markup at all (handled
 * in atmosphere.js); the wash element only exists for active states. */

.pc-atmosphere-wash {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  border-radius: inherit;
  overflow: hidden;
  opacity: var(--pc-atmosphere-opacity, 0.4);
  transition: opacity var(--pulse-anim-reveal) ease,
              background var(--pulse-anim-reveal) ease;
}

.pc-atmosphere-wash.pc-state-heating {
  background: radial-gradient(ellipse 80% 50% at 50% -30%,
    rgba(255, 159, 10, 0.5), transparent 60%);
}

.pc-atmosphere-wash.pc-state-cooling {
  background: radial-gradient(ellipse 80% 50% at 50% 130%,
    rgba(90, 200, 250, 0.5), transparent 60%);
}

.pc-atmosphere-wash.pc-state-mixed {
  background:
    radial-gradient(ellipse 80% 50% at 50% -30%, rgba(255, 159, 10, 0.35), transparent 60%),
    radial-gradient(ellipse 80% 50% at 50% 130%, rgba(90, 200, 250, 0.25), transparent 60%);
}

.pc-atmosphere-wash.pc-intensity-subtle { --pc-atmosphere-opacity: 0.25; }
.pc-atmosphere-wash.pc-intensity-medium { --pc-atmosphere-opacity: 0.4; }
.pc-atmosphere-wash.pc-intensity-bold   { --pc-atmosphere-opacity: 0.6; }

/* Card content sits above backdrop */
.pc-card-content {
  position: relative;
  z-index: 1;
}

/* Reduced motion — respect prefers-reduced-motion for users sensitive to animation */
@media (prefers-reduced-motion: reduce) {
  :host { animation: none; }
  .pc-power-bar-fill.pc-bar-active { animation: none; }
  .pc-heating-glow { animation: none; }
  .pc-zone-row-pulse.pc-heating { animation: none; }
  .pc-pulse-dot.pc-connected { animation: none; }
  .pc-temp-transitioning { filter: none; transition: none; }
  .pc-atmosphere-wash { --pc-atmosphere-opacity: 0.3; }
}

/* ── Timeline group ────────────────────────────────────────────────────
 * Shared row grid for both Thermal and State tabs inside timeline_group.
 * Layout: 70px name · 1fr cells · 60px stat. State and thermal views render
 * row-by-row using this grid so zones stay vertically aligned across tab
 * switches. Body renderers also drive system_health_group rows; the host
 * owns the section header + tab strip. */

.pc-section-timeline-group {
  display: flex; flex-direction: column;
  gap: var(--pulse-space-tight);
}


.pc-timeline-group-tabs,
.pc-system-health-group-tabs {
  display: flex; gap: 0;
  font-size: var(--pulse-font-caption);
  margin-bottom: 6px;
  border-bottom: 1px solid color-mix(in srgb, var(--pulse-text-primary) 6%, transparent);
}

.pc-timeline-group-tab,
.pc-system-health-group-tab {
  padding: 8px 14px; cursor: pointer;
  color: var(--pulse-text-secondary);
  border-bottom: 1px solid transparent;
  text-transform: uppercase; letter-spacing: 0.6px;
  font-weight: var(--pulse-weight-semibold);
  transition: color var(--pulse-anim-fast), border-bottom-color var(--pulse-anim-fast);
  user-select: none;
}

.pc-timeline-group-tab:hover,
.pc-system-health-group-tab:hover { color: var(--pulse-text-primary); }

.pc-timeline-group-tab.pc-active,
.pc-system-health-group-tab.pc-active {
  color: var(--pulse-tier-strong);
  border-bottom-color: var(--pulse-tier-strong);
}

.pc-timeline-group-row {
  display: grid;
  grid-template-columns: 72px 1fr 56px;
  gap: 6px;
  align-items: center;
  font-size: var(--pulse-font-body);
  margin-bottom: 4px;
}

.pc-timeline-group-name {
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}

.pc-timeline-group-stat {
  text-align: right;
  font-size: var(--pulse-font-label);
  font-variant-numeric: tabular-nums;
  color: var(--pulse-text-secondary);
}

.pc-timeline-group-stat.pc-state-active-heat { color: var(--pulse-tier-strong); }
.pc-timeline-group-stat.pc-state-active-cool { color: var(--pulse-tier-calm); }

.pc-timeline-group-axis {
  margin-top: 6px;
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
  display: grid;
  grid-template-columns: 72px 1fr 56px;
  gap: 6px;
}

.pc-timeline-group-axis .ticks {
  display: flex; justify-content: space-between;
}

.pc-timeline-group-footer {
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid color-mix(in srgb, var(--pulse-text-primary) 4%, transparent);
  display: flex; justify-content: space-between;
  font-size: var(--pulse-font-micro);
  color: var(--pulse-text-secondary);
  flex-wrap: wrap;
  gap: var(--pulse-space-element);
}

.pc-timeline-group-footer strong {
  color: var(--pulse-text-primary);
  font-weight: var(--pulse-weight-medium);
}

.pc-state-legend {
  display: flex; gap: var(--pulse-space-element);
  flex-wrap: wrap;
}

.pc-state-legend-pill {
  display: inline-flex; align-items: center;
  gap: var(--pulse-space-tight);
}

.pc-state-legend-pip {
  display: inline-block;
  width: 10px; height: 10px;
  border-radius: 2px;
}

.pc-state-legend-pip-heat { background: var(--pulse-tier-strong); }
.pc-state-legend-pip-cool { background: var(--pulse-tier-calm); }
.pc-state-legend-pip-idle { background: rgba(255, 255, 255, 0.08); }
.pc-state-legend-pip-off  { background: rgba(255, 255, 255, 0.025); }

/* State row tap-for-details — single-zone drill-down. Compare overlay is
   intentionally not offered (categorical state timelines don't read
   stacked; the multi-row layout itself is the compare view). */
.pc-state-row { cursor: pointer; border-radius: var(--pulse-radius-pill); transition: background var(--pulse-anim-fast); }
.pc-state-row:hover { background: var(--pulse-bg-hover); }
.pc-state-row.pc-selected {
  background: linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--pulse-tier-strong) 14%, transparent) 50%, transparent 100%);
}

.pc-state-detail-footer {
  margin-top: var(--pulse-space-element);
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
  text-align: right;
}

/* Thermal tab temperature legend — colour pips paired with anchor temps */
.pc-temp-legend {
  display: flex; gap: var(--pulse-space-element);
  flex-wrap: wrap;
}

.pc-temp-legend-pill {
  display: inline-flex; align-items: center;
  gap: var(--pulse-space-tight);
  font-variant-numeric: tabular-nums;
}

.pc-temp-legend-pip {
  display: inline-block;
  width: 10px; height: 10px;
  border-radius: 2px;
}

/* State timeline cells (consumed by state-timeline-view) */
.pc-state-timeline-cells {
  display: grid;
  grid-template-columns: repeat(48, 1fr);
  gap: 1px;
  height: 16px;
  border-radius: 2px;
  overflow: hidden;
}

.pc-state-cell { display: block; }
.pc-state-cell.pc-state-cell-heat     { background: var(--pulse-tier-strong); }
.pc-state-cell.pc-state-cell-heat-mid { background: rgba(255, 159, 10, 0.55); }
.pc-state-cell.pc-state-cell-heat-low { background: rgba(255, 159, 10, 0.30); }
.pc-state-cell.pc-state-cell-cool     { background: var(--pulse-tier-calm); }
.pc-state-cell.pc-state-cell-cool-mid { background: rgba(90, 200, 250, 0.55); }
.pc-state-cell.pc-state-cell-cool-low { background: rgba(90, 200, 250, 0.30); }
.pc-state-cell.pc-state-cell-idle     { background: rgba(255, 255, 255, 0.08); }
.pc-state-cell.pc-state-cell-off      { background: rgba(255, 255, 255, 0.025); }

`;
