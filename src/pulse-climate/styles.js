/**
 * @module pulse-climate/styles
 * @description CSS styles for Pulse Climate Card. All colors use HA CSS custom
 * properties as primary source with hardcoded fallbacks. Exposes --pulse-*
 * custom properties for user override.
 */

import { SHARED_STYLES } from '../shared/styles.js';

export const STYLES = `${SHARED_STYLES}
:host { display: block; }

ha-card {
  overflow: hidden;
  padding: 16px;
  background: var(--pulse-card-background, var(--ha-card-background, var(--card-background-color)));
  container-type: inline-size;
  color: var(--primary-text-color);
}

/* Title */
.pulse-title {
  font-size: 16px;
  font-weight: 500;
  color: var(--pulse-text-primary);
  margin-bottom: 12px;
}

/* Section container */
.section { margin-top: 12px; }
.section:first-child { margin-top: 0; }
.section-label {
  font-size: var(--pulse-font-label);
  font-weight: var(--pulse-weight-semibold);
  text-transform: uppercase;
  color: var(--pulse-text-secondary);
  opacity: 0.7;
  margin-bottom: 6px;
  letter-spacing: 0.5px;
}

/* Zone row */
.zone-row {
  display: flex;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
}
.zone-row:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
  border-radius: 4px;
}
.zone-row.unavailable { opacity: 0.5; }
.zone-row.unavailable .power-bar-fill {
  background: var(--pulse-disabled) !important;
  width: 100% !important;
  opacity: 0.2;
}

/* Zone header: name + current temp */
.zone-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 2px;
  gap: 4px;
  min-width: 0;
}
.zone-name {
  font-size: var(--pulse-font-size, 14px);
  color: var(--pulse-name-color, var(--primary-text-color));
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
}
.zone-temp {
  font-size: var(--pulse-font-size, 14px);
  font-weight: 600;
  color: var(--pulse-value-color, var(--primary-text-color));
  white-space: nowrap;
  flex-shrink: 0;
}
.zone-target {
  font-size: 0.8em;
  color: var(--pulse-text-secondary);
  margin-left: 4px;
}
.zone-humidity {
  font-size: 0.8em;
  font-weight: 400;
  color: var(--pulse-text-secondary);
  opacity: 0.7;
  display: inline-flex;
  align-items: center;
  gap: 1px;
  margin-left: 4px;
}
.zone-humidity ha-icon {
  --mdc-icon-size: 12px;
}

/* Temperature gauge bar */
.temp-gauge {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: var(--pulse-gauge-height, 6px);
  border-radius: var(--pulse-gauge-radius, 3px);
}
.temp-gauge-bg {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0.25;
}
.temp-gauge-current {
  position: absolute;
  top: -1px;
  bottom: -1px;
  width: 3px;
  background: var(--primary-text-color);
  border-radius: 1.5px;
  z-index: 2;
  box-shadow: 0 0 0 1px var(--card-background-color, rgba(255,255,255,0.8));
}
.temp-gauge-target {
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
.power-bar-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: var(--pulse-bar-height, 8px);
  border-radius: var(--pulse-bar-radius, 4px);
}
.power-bar-track {
  position: absolute;
  inset: 0;
  background: var(--pulse-accent);
  opacity: 0.12;
  border-radius: inherit;
}
.power-bar-fill {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  border-radius: inherit;
  transition: width 0.8s ease, background-color 0.3s ease;
}
.power-bar-fill.bar-active {
  box-shadow: 0 0 8px 1px var(--bar-glow-color, rgba(255, 152, 0, 0.4));
  animation: barPulse 2.5s ease-in-out infinite;
}
@keyframes barPulse {
  0%, 100% { box-shadow: 0 0 6px 0 var(--bar-glow-color, rgba(255, 152, 0, 0.3)); }
  50% { box-shadow: 0 0 10px 2px var(--bar-glow-color, rgba(255, 152, 0, 0.5)); }
}

/* Status chips */
.zone-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 2px 0;
}
.chip {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-size: 11px;
  color: var(--pulse-chip-color, var(--pulse-text-secondary));
  white-space: nowrap;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
}
.chip ha-icon { --mdc-icon-size: 14px; }
.chip.severity-high { color: var(--pulse-status-red); }
.chip.severity-medium { color: var(--pulse-status-yellow); }
.chip.severity-critical { color: var(--label-badge-red, #B71C1C); font-weight: 600; }

/* Multi-column zone grid */
.section-zones.columns {
  display: grid;
  gap: var(--pulse-gap, 16px);
}

@container (max-width: 300px) {
  .section-zones.columns { grid-template-columns: 1fr; }
}

/* Compact mode */
.compact .zone-row { gap: 2px; }
.compact .zone-name { font-size: 12px; }
.compact .zone-chips { gap: 4px; }
.compact .chip { font-size: 10px; }

/* System section rows */
.system-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 2px;
}
.system-label {
  font-size: 12px;
  color: var(--pulse-text-secondary);
  min-width: 80px;
}
/* ── Chart Styles ──────────────────────────────────────────────────── */

/* Graph container */
.chart-container {
  position: relative;
  width: 100%;
  height: var(--pulse-graph-height, 80px);
  overflow: hidden;
  border-radius: 4px;
}
.chart-svg {
  width: 100%;
  height: 100%;
  display: block;
}
.chart-svg path {
  stroke-width: var(--pulse-chart-line-width, 1.5);
  vector-effect: non-scaling-stroke;
}
.chart-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 12px;
  color: var(--secondary-text-color);
  opacity: 0.6;
}

/* Legend chips */
.chart-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 4px 0;
}
.legend-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: var(--secondary-text-color);
  white-space: nowrap;
}
.legend-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

/* Donut container */
.donut-container {
  position: relative;
  margin: 8px auto;
}
.donut-container svg {
  width: 100%;
  height: 100%;
}
.donut-center {
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
  .chart-legend { display: none; }
  .chart-container { height: 50px; }
}

/* ── Visual Identity Styles ────────────────────────────────────────── */

/* Filled sparkline (shared by pulse mode, graph, bridge, api) */
.sparkline-filled {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
  touch-action: pan-y;
}
.sparkline-filled svg {
  width: 100%;
  height: 100%;
  display: block;
}

/* Zone Pulse mode — waveform as row background */
.zone-row-pulse {
  position: relative;
  height: 56px;
  margin-bottom: 4px;
  border-radius: 10px;
  overflow: hidden;
  background: var(--pulse-row-bg, var(--secondary-background-color, rgba(58, 58, 60, 0.6)));
  display: flex;
  align-items: center;
  padding: 0 14px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: pan-y;
}
.zone-row-pulse:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
}
.zone-row-pulse .pulse-bg {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  display: block;
  z-index: 1;
}
.zone-row-pulse .pulse-info {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.pulse-info-left { display: flex; flex-direction: column; gap: 2px; }
.pulse-info-right { display: flex; align-items: baseline; gap: 6px; }
.pulse-current {
  font-size: 20px;
  font-weight: 300;
  color: var(--primary-text-color);
  font-variant-numeric: tabular-nums;
}
.pulse-status {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  color: var(--secondary-text-color);
}
.status-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  flex-shrink: 0;
}
@keyframes glowPulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}
.heating-glow { animation: glowPulse 3s ease-in-out infinite; }

/* Heating row glow — warm border shadow */
.zone-row-pulse.heating {
  animation: rowGlow 3s ease-in-out infinite;
}
@keyframes rowGlow {
  0%, 100% { box-shadow: 0 0 10px 1px rgba(255, 152, 0, 0.25), inset 0 0 10px 1px rgba(255, 152, 0, 0.06); }
  50% { box-shadow: 0 0 16px 2px rgba(255, 152, 0, 0.4), inset 0 0 14px 2px rgba(255, 152, 0, 0.1); }
}

/* Thermal Timeline layout */
.section-thermal-strip .timeline-row {
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
.section-thermal-strip .timeline-row:hover {
  background: color-mix(in srgb, var(--primary-color, #03A9F4) 6%, transparent);
}
.section-thermal-strip .timeline-row.selected { background: color-mix(in srgb, var(--primary-color, #03A9F4) 12%, transparent); }
.section-thermal-strip .timeline-row.selected .strip-container,
.section-comfort-strip .heatmap-row.selected .strip-container { height: 18px; }
.section-thermal-strip .timeline-row.selected .zone-label { color: var(--primary-text-color, #e5e5e7); font-weight: 500; }
.section-thermal-strip .zone-label {
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
.section-thermal-strip .strip-container,
.section-comfort-strip .strip-container {
  flex: 1;
  height: 14px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  touch-action: pan-y;
}
.section-thermal-strip .now-marker,
.section-comfort-strip .now-marker {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1.5px;
  background: var(--primary-text-color, #333);
  opacity: 0.4;
  z-index: 2;
}
.section-thermal-strip .time-axis {
  display: flex;
  justify-content: space-between;
  padding: 4px 0 8px;
}
.section-thermal-strip .time-label {
  font-size: 9px;
  color: var(--secondary-text-color, #636366);
  opacity: 0.7;
}

/* Strip tooltip — shared by timeline and heatmap */
.strip-tooltip {
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
.strip-tooltip-fixed {
  position: fixed;
  top: auto;
  z-index: 9999;
}

/* Strip crosshair — vertical line across all zone rows */
.strip-crosshair {
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
.strip-drag-highlight {
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
.section-comfort-strip .heatmap-body { padding: 4px 0; }
.section-comfort-strip .heatmap-row {
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
.section-comfort-strip .heatmap-row:hover { background: color-mix(in srgb, var(--primary-color, #03A9F4) 6%, transparent); }
.section-comfort-strip .heatmap-row.selected { background: color-mix(in srgb, var(--primary-color, #03A9F4) 12%, transparent); }
.section-comfort-strip .zone-label {
  width: 66px;
  font-size: 10px;
  color: var(--secondary-text-color, #a1a1a6);
  text-align: right;
  padding-right: 8px;
  flex-shrink: 0;
  transition: color 0.2s;
}
.section-comfort-strip .heatmap-row.selected .zone-label {
  color: var(--primary-text-color);
  font-weight: 500;
}

/* Heatmap cells — shared by comfort strip and thermal strip (heatmap mode) */
.section-comfort-strip .cells,
.section-thermal-strip .cells {
  display: flex;
  gap: 1px;
  flex: 1;
  touch-action: pan-y;
}
.section-comfort-strip .cell,
.section-thermal-strip .cell {
  flex: 1;
  height: 16px;
  border-radius: 2px;
  transition: transform 0.15s, height 0.2s;
}
.section-comfort-strip .heatmap-row.selected .cell,
.section-thermal-strip .timeline-row.selected .cell { height: 20px; }
.section-comfort-strip .cell:hover,
.section-thermal-strip .cell:hover { transform: scaleY(1.2); z-index: 1; }
.section-comfort-strip .cell-empty,
.section-thermal-strip .cell-empty {
  background: repeating-linear-gradient(
    45deg,
    var(--divider-color, rgba(255,255,255,0.06)) 0px,
    var(--divider-color, rgba(255,255,255,0.06)) 2px,
    transparent 2px,
    transparent 4px
  );
}
.heatmap-legend {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 0;
  justify-content: center;
}
.heatmap-legend .legend-item {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 9px;
  color: var(--secondary-text-color, #8e8e93);
}
.heatmap-legend .legend-swatch {
  width: 8px;
  height: 8px;
  border-radius: 2px;
}
.heatmap-time-axis {
  display: flex;
  justify-content: space-between;
  margin-left: 66px;
  padding: 4px 0 14px;
  font-size: 9px;
  color: var(--secondary-text-color, #636366);
}

/* Energy Flow */
.ribbon-active { /* animation handled by SVG <animate> on gradient */ }
.ribbon { cursor: pointer; transition: opacity 0.2s; }
.ribbon:hover { opacity: 1 !important; }
.ribbon.dimmed { opacity: 0.2; }

/* Radial */
.section-radial { text-align: center; }
.radial-container {
  display: flex;
  justify-content: center;
  position: relative;
}
.center-info {
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
.center-sheen {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  pointer-events: none;
  background: radial-gradient(circle farthest-side at 0 0, rgba(255,255,255,0) 88%, rgba(255,255,255,0.5) 96%, rgba(255,255,255,0) 100%) no-repeat;
  background-size: 200% 200%;
  background-position: -100% 50%;
}
.center-sheen.light-theme {
  background: radial-gradient(circle farthest-side at 0 0, rgba(0,0,0,0) 88%, rgba(0,0,0,0.12) 96%, rgba(0,0,0,0) 100%) no-repeat;
  background-size: 200% 200%;
  background-position: -100% 50%;
}
.center-value {
  font-size: 28px;
  font-weight: 300;
  color: var(--primary-text-color);
  transition: font-size 0.25s;
}
.center-label {
  font-size: 10px;
  color: var(--secondary-text-color, #8e8e93);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 2px;
}
.center-sub {
  font-size: 10px;
  color: var(--secondary-text-color, #636366);
  margin-top: 2px;
}
.arc-group {
  cursor: pointer;
  transition: opacity 0.2s;
  opacity: 0.6;
}
.arc-group.arc-active { opacity: 1; }
.arc-group:hover { opacity: 1 !important; }
.arc-group.dimmed { opacity: 0.2 !important; }
.arc-group.selected { opacity: 1 !important; }
.arc-path {
  cursor: pointer;
}
.arc-path:hover { opacity: 1 !important; }

/* Radial legend */
.radial-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 12px;
  margin-top: 16px;
  justify-content: center;
}
.radial-legend .legend-item {
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
.radial-legend .legend-item:hover { background: color-mix(in srgb, var(--primary-color, #03A9F4) 8%, transparent); }
.radial-legend .legend-item.selected { background: color-mix(in srgb, var(--primary-color, #03A9F4) 16%, transparent); color: var(--primary-text-color); }
.radial-legend .legend-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}
.legend-temp {
  font-variant-numeric: tabular-nums;
  color: var(--primary-text-color);
  font-weight: 500;
}

/* Zone detail panel (shared by radial, thermal strip, comfort strip, energy flow) */
.zone-detail {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: max-height 0.35s ease, opacity 0.25s ease, padding 0.35s ease;
  padding: 0;
}
.zone-detail.active {
  max-height: 240px;
  opacity: 1;
  padding: 14px 0 16px;
  background: var(--pulse-glass-bg);
  backdrop-filter: blur(var(--pulse-glass-blur));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur));
  border: 1px solid var(--pulse-glass-border);
  border-radius: 8px;
}
.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
}
.detail-name { font-size: 15px; font-weight: 500; }
.detail-close {
  font-size: 11px;
  color: var(--secondary-text-color, #636366);
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: background 0.15s;
}
.detail-close:hover { background: color-mix(in srgb, var(--primary-color, #03A9F4) 10%, transparent); }
.detail-stats { display: flex; gap: 16px; }
.stat { flex: 1; }
.stat-value {
  font-size: 22px;
  font-weight: 300;
  font-variant-numeric: tabular-nums;
}
.stat-label {
  font-size: 10px;
  color: var(--secondary-text-color, #8e8e93);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  margin-top: 2px;
}
.stat-sub {
  font-size: 10px;
  color: var(--secondary-text-color, #636366);
  margin-top: 1px;
}
.detail-bar {
  margin-top: 10px;
  height: 6px;
  border-radius: 3px;
  background: var(--pulse-row-bg, var(--secondary-background-color, #3a3a3c));
  overflow: hidden;
}
.detail-bar-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.4s ease;
}
.detail-sparkline {
  border-radius: 6px;
  overflow: hidden;
}

/* API Dashboard */
.api-dashboard {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.api-row {
  display: flex;
  align-items: center;
  gap: 8px;
}
.usage-gauge {
  position: relative;
  flex-shrink: 0;
}
.gauge-center {
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
.pulse-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 4px;
  vertical-align: middle;
}
.pulse-dot.connected {
  background: var(--pulse-status-green);
  animation: pulse-glow 2s ease-in-out infinite;
}
.pulse-dot.disconnected {
  background: var(--pulse-status-red);
}
@keyframes pulse-glow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Bridge flow temp */
.flow-temp-value {
  font-size: 18px;
  font-weight: 600;
}
.flow-sparkline {
  display: inline-block;
  vertical-align: middle;
}

/* Home Status section */
.section-home-status { }
.home-status-hero {
  text-align: center;
  padding: 16px 0 20px;
}
.home-status-icon {
  --mdc-icon-size: 36px;
  display: block;
  margin: 0 auto 6px;
}
.home-status-label {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 4px;
}
.home-status-detail {
  font-size: 12px;
  color: var(--secondary-text-color, #9E9E9E);
}
.home-status-zones {
  display: flex;
  flex-direction: column;
}
.home-status-row {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid color-mix(in srgb, var(--primary-text-color) 4%, transparent);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.home-status-row:last-child { border-bottom: none; }
.home-status-row:hover {
  background: color-mix(in srgb, var(--primary-color, #03A9F4) 6%, transparent);
}
.home-status-row:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
  border-radius: 4px;
}
.home-status-zone-name {
  width: 70px;
  flex-shrink: 0;
  font-size: 12px;
  color: var(--secondary-text-color, #9E9E9E);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.home-status-temps {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 6px;
}
.home-status-actual {
  font-size: 16px;
  font-variant-numeric: tabular-nums;
  color: var(--primary-text-color);
  min-width: 52px;
}
.home-status-actual.off {
  color: var(--secondary-text-color, #9E9E9E);
}
.home-status-arrow {
  font-size: 11px;
  color: var(--secondary-text-color, #9E9E9E);
}
.home-status-target {
  font-size: 13px;
  color: var(--secondary-text-color, #9E9E9E);
  font-variant-numeric: tabular-nums;
  min-width: 40px;
}
.home-status-delta {
  display: flex;
  align-items: center;
  gap: 4px;
}
.home-status-bar-track {
  position: relative;
  width: 60px;
  height: 6px;
  border-radius: 3px;
  background: color-mix(in srgb, var(--primary-text-color) 10%, transparent);
  overflow: hidden;
}
.home-status-bar-center {
  position: absolute;
  left: 50%;
  top: 0;
  width: 1px;
  height: 100%;
  background: color-mix(in srgb, white 15%, transparent);
}
.home-status-bar-fill {
  position: absolute;
  top: 0;
  height: 100%;
  border-radius: 3px;
}
.home-status-delta-text {
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  width: 40px;
  text-align: right;
}
.home-status-summary {
  display: flex;
  justify-content: space-around;
  border-top: 1px solid color-mix(in srgb, var(--primary-text-color) 10%, transparent);
  padding-top: 14px;
  margin-top: 16px;
}
.home-status-summary .stat { text-align: center; }
.home-status-summary .stat-value {
  font-size: 18px;
  font-weight: 300;
}
.home-status-summary .stat-label {
  font-size: 9px;
}

/* Zone Ranking section */
.section-zone-ranking { }
.ranking-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.ranking-tabs {
  display: flex;
  gap: 4px;
}
.ranking-tab {
  font-size: 10px;
  color: var(--secondary-text-color, #9E9E9E);
  padding: 4px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid transparent;
}
.ranking-tab:hover {
  background: color-mix(in srgb, var(--primary-text-color) 4%, transparent);
}
.ranking-tab.active {
  background: color-mix(in srgb, var(--primary-text-color) 8%, transparent);
  color: var(--primary-text-color);
  border-color: color-mix(in srgb, var(--primary-text-color) 10%, transparent);
}
.ranking-list { }
.rank-row {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 8px;
  margin-bottom: 4px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.rank-row:hover {
  background: color-mix(in srgb, var(--primary-text-color) 4%, transparent);
}
.rank-row:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
}
.rank-num {
  width: 24px;
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--secondary-text-color, #9E9E9E);
  flex-shrink: 0;
}
.rank-num.top { color: #FFD60A; }
.rank-name {
  flex: 1;
  font-size: 13px;
  font-weight: 500;
  margin-left: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.rank-bar-track {
  flex: 2;
  height: 8px;
  background: color-mix(in srgb, var(--primary-text-color) 10%, transparent);
  border-radius: 4px;
  margin: 0 12px;
  overflow: hidden;
}
.rank-bar-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 0.6s ease, background 0.4s ease;
}
.rank-value {
  font-size: 13px;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  width: 50px;
  text-align: right;
  flex-shrink: 0;
}
.ranking-summary {
  display: flex;
  justify-content: space-around;
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid color-mix(in srgb, var(--primary-text-color) 10%, transparent);
}
.ranking-summary .stat { text-align: center; }
.ranking-summary .stat-value {
  font-size: 18px;
  font-weight: 300;
}
.ranking-summary .stat-label {
  font-size: 9px;
}

/* Responsive degradation for new sections */
@container (max-width: 200px) {
  .section-thermal-strip .time-axis { display: none; }
  .section-comfort-strip svg text { display: none; }
  .api-row { flex-direction: column; }
}

/* Temperature transition glow — brief brightness flash on temp change */
.temp-transitioning {
  filter: brightness(1.4);
  transition: filter 0.3s ease-in, filter 0.8s ease-out 0.3s;
}

/* Reduced motion — respect prefers-reduced-motion for users sensitive to animation */
@media (prefers-reduced-motion: reduce) {
  .power-bar-fill.bar-active { animation: none; }
  .heating-glow { animation: none; }
  .zone-row-pulse.heating { animation: none; }
  .pulse-dot.connected { animation: none; }
  .temp-transitioning { filter: none; transition: none; }
}
`;
