/**
 * @module pulse-climate/styles
 * @description CSS styles for Pulse Climate Card. Card-local design tokens
 * use the --pc-* prefix; family-shared tokens (text, accent, status, glass,
 * spacing, radius, type scale) inherit from src/shared/styles.js.
 */

import { SHARED_STYLES } from '../shared/styles.js';

export const STYLES = `${SHARED_STYLES}
:host {
  display: block;

  /* Card-local design tokens — override via card-mod or HA theme.
     Family-shared concerns (text colour, body type size, card chrome
     background, surface tint) live on --pulse-* and are inherited via
     SHARED_STYLES; only Climate-specific knobs declare locally. */
  --pc-bar-height: 8px;
  --pc-bar-radius: 4px;
  --pc-chart-line-width: 1.5;
  --pc-gap: 16px;
  --pc-gauge-height: 6px;
  --pc-gauge-radius: 3px;
  --pc-graph-height: 80px;
}

ha-card {
  overflow: hidden;
  padding: 16px;
  background: var(--pulse-bg-card);
  container-type: inline-size;
  color: var(--primary-text-color);
}

/* Title — adds layout margin on top of shared typography. */
.pulse-title { margin-bottom: 12px; }

/* Section container */
.pc-section { margin-top: 12px; }
.pc-section:first-child { margin-top: 0; }
.pulse-section-label { margin-bottom: 6px; }

/* Zone row */
.pc-zone-row {
  display: flex;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
}
.pc-zone-row:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
  border-radius: 4px;
}
.pc-zone-row.pc-unavailable { opacity: 0.5; }
.pc-zone-row.pc-unavailable .pc-power-bar-fill {
  background: var(--pulse-disabled) !important;
  width: 100% !important;
  opacity: 0.2;
}

/* Zone header: name + current temp */
.pc-zone-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 2px;
  gap: 4px;
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
.pc-zone-temp {
  font-size: var(--pulse-font-body);
  font-weight: 600;
  color: var(--pulse-text-primary);
  white-space: nowrap;
  flex-shrink: 0;
}
.pc-zone-target {
  font-size: 0.8em;
  color: var(--pulse-text-secondary);
  margin-left: 4px;
}
.pc-zone-humidity {
  font-size: 0.8em;
  font-weight: 400;
  color: var(--pulse-text-secondary);
  opacity: 0.7;
  display: inline-flex;
  align-items: center;
  gap: 1px;
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
  background: var(--primary-text-color);
  border-radius: 1.5px;
  z-index: 2;
  box-shadow: 0 0 0 1px var(--card-background-color, rgba(255,255,255,0.8));
}
.pc-temp-gauge-target {
  position: absolute;
  top: -1px;
  bottom: -1px;
  width: 2px;
  background: var(--primary-text-color);
  opacity: 0.5;
  border-radius: 1px;
  z-index: 1;
  box-shadow: 0 0 0 1px var(--card-background-color, rgba(255,255,255,0.8));
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
  transition: width 0.8s ease, background-color 0.3s ease;
}
.pc-power-bar-fill.pc-bar-active {
  box-shadow: 0 0 8px 1px var(--pc-bar-glow, rgba(255, 152, 0, 0.4));
  animation: barPulse 2.5s ease-in-out infinite;
}
@keyframes barPulse {
  0%, 100% { box-shadow: 0 0 6px 0 var(--pc-bar-glow, rgba(255, 152, 0, 0.3)); }
  50% { box-shadow: 0 0 10px 2px var(--pc-bar-glow, rgba(255, 152, 0, 0.5)); }
}

/* Status chips */
.pc-zone-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 2px 0;
}
.pc-chip {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-size: 11px;
  color: var(--pulse-text-secondary);
  white-space: nowrap;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
}
.pc-chip ha-icon { --mdc-icon-size: 14px; }
.pc-chip.pc-severity-high { color: var(--pulse-status-red); }
.pc-chip.pc-severity-medium { color: var(--pulse-status-yellow); }
.pc-chip.pc-severity-critical { color: var(--label-badge-red, #B71C1C); font-weight: 600; }

/* Multi-column zone grid */
.pc-section-zones.pc-columns {
  display: grid;
  gap: var(--pc-gap, 16px);
}

@container (max-width: 300px) {
  .pc-section-zones.pc-columns { grid-template-columns: 1fr; }
}

/* Compact mode */
.pc-compact .pc-zone-row { gap: 2px; }
.pc-compact .pc-zone-name { font-size: 12px; }
.pc-compact .pc-zone-chips { gap: 4px; }
.pc-compact .pc-chip { font-size: 10px; }

/* System section rows */
.pc-system-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 2px;
}
.pc-system-label {
  font-size: 12px;
  color: var(--pulse-text-secondary);
  min-width: 80px;
}
/* ── Chart Styles ──────────────────────────────────────────────────── */

/* Graph container */
.pc-chart-container {
  position: relative;
  width: 100%;
  height: var(--pc-graph-height, 80px);
  overflow: hidden;
  border-radius: 4px;
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
  font-size: 12px;
  color: var(--secondary-text-color);
  opacity: 0.6;
}

/* Legend chips */
.pc-chart-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 4px 0;
}
.pc-legend-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: var(--secondary-text-color);
  white-space: nowrap;
}
.pc-legend-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

/* Donut container */
.pc-donut-container {
  position: relative;
  margin: 8px auto;
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
  font-size: 18px;
  font-weight: 600;
  color: var(--secondary-text-color);
  text-align: center;
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
  border-radius: 4px;
  touch-action: pan-y;
}
.pc-sparkline-filled svg {
  width: 100%;
  height: 100%;
  display: block;
}

/* Zone Pulse mode — waveform as row background */
.pc-zone-row-pulse {
  position: relative;
  height: 56px;
  margin-bottom: 4px;
  border-radius: 10px;
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
.pc-pulse-info-left { display: flex; flex-direction: column; gap: 2px; }
.pc-pulse-info-right { display: flex; align-items: baseline; gap: 6px; }
.pc-pulse-current {
  font-size: 20px;
  font-weight: 300;
  color: var(--primary-text-color);
  font-variant-numeric: tabular-nums;
}
.pc-pulse-status {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  color: var(--secondary-text-color);
}
.pc-status-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  flex-shrink: 0;
}
@keyframes glowPulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}
.pc-heating-glow { animation: glowPulse 3s ease-in-out infinite; }

/* Heating row glow — warm border shadow */
.pc-zone-row-pulse.pc-heating {
  animation: rowGlow 3s ease-in-out infinite;
}
@keyframes rowGlow {
  0%, 100% { box-shadow: 0 0 10px 1px rgba(255, 152, 0, 0.25), inset 0 0 10px 1px rgba(255, 152, 0, 0.06); }
  50% { box-shadow: 0 0 16px 2px rgba(255, 152, 0, 0.4), inset 0 0 14px 2px rgba(255, 152, 0, 0.1); }
}

/* Thermal Timeline layout */
.pc-section-thermal-strip .pc-timeline-row {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  cursor: pointer;
  border-radius: 6px;
  padding: 2px 0;
  position: relative;
  overflow: hidden;
  transition: background 0.15s;
}
.pc-section-thermal-strip .pc-timeline-row:hover {
  background: color-mix(in srgb, var(--primary-color, #03A9F4) 6%, transparent);
}
.pc-section-thermal-strip .pc-timeline-row.pc-selected { background: color-mix(in srgb, var(--primary-color, #03A9F4) 12%, transparent); }
.pc-section-thermal-strip .pc-timeline-row.pc-selected .pc-strip-container,
.pc-section-comfort-strip .pc-heatmap-row.pc-selected .pc-strip-container { height: 18px; }
.pc-section-thermal-strip .pc-timeline-row.pc-selected .pc-zone-label { color: var(--primary-text-color, #e5e5e7); font-weight: 500; }
.pc-section-thermal-strip .pc-zone-label {
  width: 76px;
  font-size: 11px;
  color: var(--secondary-text-color, #a1a1a6);
  text-align: right;
  padding-right: 10px;
  flex-shrink: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* Strip container — shared by thermal strip and comfort strip (timeline mode) */
.pc-section-thermal-strip .pc-strip-container,
.pc-section-comfort-strip .pc-strip-container {
  flex: 1;
  height: 14px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  touch-action: pan-y;
}
.pc-section-thermal-strip .pc-now-marker,
.pc-section-comfort-strip .pc-now-marker {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1.5px;
  background: var(--primary-text-color, #333);
  opacity: 0.4;
  z-index: 2;
}
.pc-section-thermal-strip .pc-time-axis {
  display: flex;
  justify-content: space-between;
  padding: 4px 0 8px;
}
.pc-section-thermal-strip .pc-time-label {
  font-size: 9px;
  color: var(--secondary-text-color, #636366);
  opacity: 0.7;
}

/* Strip tooltip — shared by timeline and heatmap */
.pc-strip-tooltip {
  position: absolute;
  top: -26px;
  font-size: 10px;
  color: var(--pulse-text-primary, #e5e5e7);
  background: var(--pulse-glass-bg);
  backdrop-filter: blur(var(--pulse-glass-blur));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur));
  border: 1px solid var(--pulse-glass-border);
  padding: 2px 8px;
  border-radius: 4px;
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

/* Strip crosshair — vertical line across all zone rows */
.pc-strip-crosshair {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--primary-text-color, #333);
  opacity: 0.25;
  pointer-events: none;
  z-index: 5;
}

/* Drag selection highlight */
.pc-strip-drag-highlight {
  position: absolute;
  top: 0;
  bottom: 0;
  background: var(--primary-color, #03A9F4);
  opacity: 0.12;
  border-radius: 2px;
  pointer-events: none;
  z-index: 4;
}

/* Comfort Heatmap — HTML div cells for hover/click */
.pc-section-comfort-strip .pc-heatmap-body { padding: 4px 0; }
.pc-section-comfort-strip .pc-heatmap-row {
  display: flex;
  align-items: center;
  margin-bottom: 3px;
  cursor: pointer;
  border-radius: 6px;
  padding: 2px 0;
  position: relative;
  overflow: hidden;
  transition: background 0.15s;
}
.pc-section-comfort-strip .pc-heatmap-row:hover { background: color-mix(in srgb, var(--primary-color, #03A9F4) 6%, transparent); }
.pc-section-comfort-strip .pc-heatmap-row.pc-selected { background: color-mix(in srgb, var(--primary-color, #03A9F4) 12%, transparent); }
.pc-section-comfort-strip .pc-zone-label {
  width: 66px;
  font-size: 10px;
  color: var(--secondary-text-color, #a1a1a6);
  text-align: right;
  padding-right: 8px;
  flex-shrink: 0;
  transition: color 0.2s;
}
.pc-section-comfort-strip .pc-heatmap-row.pc-selected .pc-zone-label {
  color: var(--primary-text-color);
  font-weight: 500;
}

/* Heatmap cells — shared by comfort strip and thermal strip (heatmap mode) */
.pc-section-comfort-strip .pc-cells,
.pc-section-thermal-strip .pc-cells {
  display: flex;
  gap: 1px;
  flex: 1;
  touch-action: pan-y;
}
.pc-section-comfort-strip .pc-cell,
.pc-section-thermal-strip .pc-cell {
  flex: 1;
  height: 16px;
  border-radius: 2px;
  transition: transform 0.15s, height 0.2s;
}
.pc-section-comfort-strip .pc-heatmap-row.pc-selected .pc-cell,
.pc-section-thermal-strip .pc-timeline-row.pc-selected .pc-cell { height: 20px; }
.pc-section-comfort-strip .pc-cell:hover,
.pc-section-thermal-strip .pc-cell:hover { transform: scaleY(1.2); z-index: 1; }
.pc-section-comfort-strip .pc-cell-empty,
.pc-section-thermal-strip .pc-cell-empty {
  background: repeating-linear-gradient(
    45deg,
    var(--divider-color, rgba(255,255,255,0.06)) 0px,
    var(--divider-color, rgba(255,255,255,0.06)) 2px,
    transparent 2px,
    transparent 4px
  );
}
.pc-heatmap-legend {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 0;
  justify-content: center;
}
.pc-heatmap-legend .pc-legend-item {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 9px;
  color: var(--secondary-text-color, #8e8e93);
}
.pc-heatmap-legend .pc-legend-swatch {
  width: 8px;
  height: 8px;
  border-radius: 2px;
}
.pc-heatmap-time-axis {
  display: flex;
  justify-content: space-between;
  margin-left: 66px;
  padding: 4px 0 14px;
  font-size: 9px;
  color: var(--secondary-text-color, #636366);
}

/* Energy Flow */
.pc-ribbon-active { /* animation handled by SVG <animate> on gradient */ }
.pc-ribbon { cursor: pointer; transition: opacity 0.2s; }
.pc-ribbon:hover { opacity: 1 !important; }
.pc-ribbon.pc-dimmed { opacity: 0.2; }

/* Radial */
.pc-section-radial { text-align: center; }
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
  transition: opacity 0.25s;
  background: var(--pulse-glass-bg);
  backdrop-filter: blur(var(--pulse-glass-blur));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur));
  border: 1px solid var(--pulse-glass-border);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.pc-center-sheen {
  position: absolute;
  inset: 0;
  border-radius: 50%;
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
  font-size: 28px;
  font-weight: 300;
  color: var(--primary-text-color);
  transition: font-size 0.25s;
}
.pc-center-label {
  font-size: 10px;
  color: var(--secondary-text-color, #8e8e93);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 2px;
}
.pc-center-sub {
  font-size: 10px;
  color: var(--secondary-text-color, #636366);
  margin-top: 2px;
}
.pc-arc-group {
  cursor: pointer;
  transition: opacity 0.2s;
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
  gap: 5px;
  font-size: 11px;
  color: var(--secondary-text-color, #a1a1a6);
  cursor: pointer;
  padding: 2px 4px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  transition: background 0.15s, color 0.15s;
}
.pc-radial-legend .pc-legend-item:hover { background: color-mix(in srgb, var(--primary-color, #03A9F4) 8%, transparent); }
.pc-radial-legend .pc-legend-item.pc-selected { background: color-mix(in srgb, var(--primary-color, #03A9F4) 16%, transparent); color: var(--primary-text-color); }
.pc-radial-legend .pc-legend-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}
.pc-legend-temp {
  font-variant-numeric: tabular-nums;
  color: var(--primary-text-color);
  font-weight: 500;
}

/* Zone detail panel (shared by radial, thermal strip, comfort strip, energy flow) */
.pc-zone-detail {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: max-height 0.35s ease, opacity 0.25s ease, padding 0.35s ease;
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
  border-radius: 8px;
}
.pc-detail-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
}
.pc-detail-name { font-size: 15px; font-weight: 500; }
.pc-detail-close {
  font-size: 11px;
  color: var(--secondary-text-color, #636366);
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: background 0.15s;
}
.pc-detail-close:hover { background: color-mix(in srgb, var(--primary-color, #03A9F4) 10%, transparent); }
.pc-detail-stats { display: flex; gap: 16px; }
.pc-stat { flex: 1; }
.pc-stat-value {
  font-size: 22px;
  font-weight: 300;
  font-variant-numeric: tabular-nums;
}
.pc-stat-label {
  font-size: 10px;
  color: var(--secondary-text-color, #8e8e93);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  margin-top: 2px;
}
.pc-stat-sub {
  font-size: 10px;
  color: var(--secondary-text-color, #636366);
  margin-top: 1px;
}
.pc-detail-bar {
  margin-top: 10px;
  height: 6px;
  border-radius: 3px;
  background: var(--pulse-bg-secondary);
  overflow: hidden;
}
.pc-detail-bar-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.4s ease;
}
.pc-detail-sparkline {
  border-radius: 6px;
  overflow: hidden;
}

/* API Dashboard */
.pc-api-dashboard {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.pc-api-row {
  display: flex;
  align-items: center;
  gap: 8px;
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
  font-size: 14px;
  font-weight: 600;
  color: var(--secondary-text-color);
  text-align: center;
  line-height: 1.2;
}

/* HomeKit pulse dot */
.pc-pulse-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 4px;
  vertical-align: middle;
}
.pc-pulse-dot.pc-connected {
  background: var(--pulse-status-green);
  animation: pulse-glow 2s ease-in-out infinite;
}
.pc-pulse-dot.pc-disconnected {
  background: var(--pulse-status-red);
}
@keyframes pulse-glow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Bridge flow temp */
.pc-flow-temp-value {
  font-size: 18px;
  font-weight: 600;
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
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 4px;
}
.pc-home-status-detail {
  font-size: 12px;
  color: var(--secondary-text-color, #9E9E9E);
}
.pc-home-status-zones {
  display: flex;
  flex-direction: column;
}
.pc-home-status-row {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid color-mix(in srgb, var(--primary-text-color) 4%, transparent);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.pc-home-status-row:last-child { border-bottom: none; }
.pc-home-status-row:hover {
  background: color-mix(in srgb, var(--primary-color, #03A9F4) 6%, transparent);
}
.pc-home-status-row:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
  border-radius: 4px;
}
.pc-home-status-zone-name {
  width: 70px;
  flex-shrink: 0;
  font-size: 12px;
  color: var(--secondary-text-color, #9E9E9E);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.pc-home-status-temps {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 6px;
}
.pc-home-status-actual {
  font-size: 16px;
  font-variant-numeric: tabular-nums;
  color: var(--primary-text-color);
  min-width: 52px;
}
.pc-home-status-actual.pc-off {
  color: var(--secondary-text-color, #9E9E9E);
}
.pc-home-status-arrow {
  font-size: 11px;
  color: var(--secondary-text-color, #9E9E9E);
}
.pc-home-status-target {
  font-size: 13px;
  color: var(--secondary-text-color, #9E9E9E);
  font-variant-numeric: tabular-nums;
  min-width: 40px;
}
.pc-home-status-delta {
  display: flex;
  align-items: center;
  gap: 4px;
}
.pc-home-status-bar-track {
  position: relative;
  width: 60px;
  height: 6px;
  border-radius: 3px;
  background: color-mix(in srgb, var(--primary-text-color) 10%, transparent);
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
  border-radius: 3px;
}
.pc-home-status-delta-text {
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  width: 40px;
  text-align: right;
}
.pc-home-status-summary {
  display: flex;
  justify-content: space-around;
  border-top: 1px solid color-mix(in srgb, var(--primary-text-color) 10%, transparent);
  padding-top: 14px;
  margin-top: 16px;
}
.pc-home-status-summary .pc-stat { text-align: center; }
.pc-home-status-summary .pc-stat-value {
  font-size: 18px;
  font-weight: 300;
}
.pc-home-status-summary .pc-stat-label {
  font-size: 9px;
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
  gap: 4px;
}
.pc-ranking-tab {
  font-size: 10px;
  color: var(--secondary-text-color, #9E9E9E);
  padding: 4px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid transparent;
}
.pc-ranking-tab:hover {
  background: color-mix(in srgb, var(--primary-text-color) 4%, transparent);
}
.pc-ranking-tab.pc-active {
  background: color-mix(in srgb, var(--primary-text-color) 8%, transparent);
  color: var(--primary-text-color);
  border-color: color-mix(in srgb, var(--primary-text-color) 10%, transparent);
}
.pc-ranking-list { }
.pc-rank-row {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 8px;
  margin-bottom: 4px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.pc-rank-row:hover {
  background: color-mix(in srgb, var(--primary-text-color) 4%, transparent);
}
.pc-rank-row:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
}
.pc-rank-num {
  width: 24px;
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--secondary-text-color, #9E9E9E);
  flex-shrink: 0;
}
.pc-rank-num.pc-top { color: var(--label-badge-yellow, #FFD60A); }
.pc-rank-name {
  flex: 1;
  font-size: 13px;
  font-weight: 500;
  margin-left: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.pc-rank-bar-track {
  flex: 2;
  height: 8px;
  background: color-mix(in srgb, var(--primary-text-color) 10%, transparent);
  border-radius: 4px;
  margin: 0 12px;
  overflow: hidden;
}
.pc-rank-bar-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 0.6s ease, background 0.4s ease;
}
.pc-rank-value {
  font-size: 13px;
  font-weight: 500;
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
  border-top: 1px solid color-mix(in srgb, var(--primary-text-color) 10%, transparent);
}
.pc-ranking-summary .pc-stat { text-align: center; }
.pc-ranking-summary .pc-stat-value {
  font-size: 18px;
  font-weight: 300;
}
.pc-ranking-summary .pc-stat-label {
  font-size: 9px;
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
  transition: filter 0.3s ease-in, filter 0.8s ease-out 0.3s;
}

/* Reduced motion — respect prefers-reduced-motion for users sensitive to animation */
@media (prefers-reduced-motion: reduce) {
  .pc-power-bar-fill.pc-bar-active { animation: none; }
  .pc-heating-glow { animation: none; }
  .pc-zone-row-pulse.pc-heating { animation: none; }
  .pc-pulse-dot.pc-connected { animation: none; }
  .pc-temp-transitioning { filter: none; transition: none; }
}
`;
