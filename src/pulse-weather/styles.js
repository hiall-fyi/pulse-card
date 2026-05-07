/**
 * @module pulse-weather/styles
 * @description CSS design system for Pulse Weather Card — design tokens,
 * glass panels, typography, tier colors, transitions, and FX keyframes.
 */

import { SHARED_STYLES } from '../shared/styles.js';

export const STYLES = `${SHARED_STYLES}
/* ── Design Tokens ─────────────────────────────────────────────── */
:host {
  display: block;

  /* Weather-specific glass intensity */
  --pulse-glass-blur: 20px;

  /* Typography */
  --pw-hero-size: 72px;
  --pw-hero-weight: 100;
  --pw-label-size: 11px;
  --pw-stat-size: 16px;
  --pw-section-label-size: 11px;

  /* Tier colors */
  --pw-tier-calm: #5ac8fa;
  --pw-tier-moderate: #30d158;
  --pw-tier-strong: #ff9f0a;
  --pw-tier-gale: #ff453a;

  /* Semantic colors */
  --pw-color-freeze: #5ac8fa;
  --pw-color-lcl: #d0d0d0;
  --pw-color-stable: #30d158;
  --pw-text-overlay: #d0d0d0;
  --pw-shadow-overlay: 0 1px 3px rgba(0,0,0,0.6);

  /* Transitions */
  --pw-bg-transition: 0.8s;
  --pw-color-transition: 0.4s;
}

/* ── Card Shell ────────────────────────────────────────────────── */
.pw-card {
  overflow: hidden;
  min-width: 0;
  border-radius: var(--ha-card-border-radius, 12px);
  background: var(--pulse-bg-card);
  color: var(--pulse-text-primary);
  font-family: var(--ha-card-font-family, -apple-system, BlinkMacSystemFont, 'SF Pro', system-ui, sans-serif);
  container-type: inline-size;
}

/* ── Section Shared ────────────────────────────────────────────── */
.pw-section { position: relative; min-width: 0; }
.pw-section + .pw-section { border-top: 1px solid var(--pulse-border-subtle); }

.pw-section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px 0;
  position: relative;
  z-index: 2;
  margin-bottom: 10px;
}

.pw-section-title {
  font-size: var(--pw-section-label-size);
  font-weight: 600;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: var(--pulse-text-secondary);
  opacity: 0.7;
}

/* ── Shared Status Label ───────────────────────────────────────── */
.pw-status-label {
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  padding: 0 20px;
  transition: color 0.4s;
  position: relative;
  z-index: 2;
}

.pw-status-desc {
  font-size: 12px;
  color: var(--pulse-text-secondary);
  text-align: center;
  margin-top: 2px;
  padding: 0 20px;
}

/* ── Mode Tabs ─────────────────────────────────────────────────── */
.pw-tabs {
  display: flex;
  gap: 2px;
  background: var(--pulse-bg-elevated);
  border-radius: 6px;
  padding: 2px;
}

.pw-tab {
  padding: 3px 8px;
  border-radius: 4px;
  border: none;
  background: transparent;
  color: var(--pulse-text-secondary);
  font-size: 10px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

.pw-tab:hover { color: var(--pulse-text-primary); opacity: 0.7; }
.pw-tab:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 1px;
}
.pw-tab[aria-selected="true"] {
  background: var(--pulse-bg-selected);
  color: var(--pulse-text-primary);
}

/* ── Glass Panel ───────────────────────────────────────────────── */
.pw-glass {
  background: var(--pulse-glass-bg);
  backdrop-filter: blur(var(--pulse-glass-blur));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur));
  border: 1px solid var(--pulse-glass-border);
  border-radius: 14px;
  padding: 14px 16px;
}

/* ── Stats Grid ────────────────────────────────────────────────── */
.pw-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
}

.pw-stat { text-align: center; padding: 6px 0; }
.pw-stat-value {
  font-size: var(--pw-stat-size);
  font-weight: 400;
  font-variant-numeric: tabular-nums;
}
.pw-stat-label {
  font-size: 9px;
  color: var(--pulse-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-top: 2px;
}

/* ── Atmosphere Layer ──────────────────────────────────────────── */
.pw-atmosphere {
  position: relative;
  overflow: hidden;
  transition: background var(--pw-bg-transition);
}

.pw-fx {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

/* ── Hero Display ──────────────────────────────────────────────── */
.pw-hero {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 24px 20px 20px;
}

.pw-hero-temp {
  font-size: var(--pw-hero-size);
  font-weight: var(--pw-hero-weight);
  line-height: 1;
  font-variant-numeric: tabular-nums;
  text-shadow: 0 2px 20px rgba(0,0,0,0.3);
}

.pw-hero-condition {
  font-size: 17px;
  font-weight: 500;
  color: var(--pulse-text-primary);
  margin-top: 4px;
}

.pw-hero-feels {
  font-size: 12px;
  color: var(--pulse-text-secondary);
  margin-top: 2px;
}

/* ── Temperature Arc ───────────────────────────────────────────── */
.pw-temp-arc {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 8px 20px 16px;
}

.pw-arc-label {
  font-size: 14px;
  font-variant-numeric: tabular-nums;
  opacity: 0.6;
}

.pw-arc-bar {
  width: 120px;
  height: 4px;
  border-radius: 2px;
  position: relative;
  background: linear-gradient(to right, var(--pw-tier-calm), var(--pw-tier-moderate), var(--pw-tier-strong), var(--pw-tier-gale));
  opacity: 0.8;
}

.pw-arc-marker {
  position: absolute;
  top: -4px;
  width: 12px;
  height: 12px;
  background: #fff;
  border-radius: 50%;
  border: 2px solid rgba(0,0,0,0.3);
  transform: translateX(-50%);
  box-shadow: 0 1px 6px rgba(0,0,0,0.4);
}

.pw-arc-ghost {
  position: absolute;
  top: -4px;
  width: 10px;
  height: 10px;
  background: rgba(255,255,255,0.3);
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.2);
  transform: translateX(-50%);
  opacity: 0.5;
}

/* ── Bottom Cards ──────────────────────────────────────────────── */

/* Precipitation bar label */
.pw-precip-label {
  font-size: 12px;
  color: var(--pulse-text-secondary);
  margin-bottom: 6px;
}

/* Snow badge */
.pw-snow-badge {
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  margin-top: 4px;
  position: relative;
  z-index: 2;
  text-shadow: var(--pw-shadow-overlay);
}

/* Feels like context */
.pw-feels-context {
  font-size: 10px;
  color: var(--pulse-text-secondary);
  text-align: center;
  position: relative;
  z-index: 2;
}

/* Snow precip fill — white gradient (bottom opaque → top transparent) */
.pw-precip-snow {
  background: linear-gradient(to top, var(--pw-text-overlay, #d0d0d0), transparent) !important;
}

/* Rain precip fill — gradient (bottom opaque → top fade) */
.pulse-precip-fill {
  background: linear-gradient(to top, #5ac8fa, rgba(90,200,250,0.15));
}

/* CAPE storm risk bar */
.pw-cape-bar {
  display: flex;
  gap: 2px;
  height: 4px;
  border-radius: 2px;
  overflow: hidden;
}
.pw-cape-slot {
  flex: 1;
  border-radius: 1px;
}

.pw-bottom-row { display: flex; gap: 8px; }

.pw-bottom-card {
  flex: 1;
  background: var(--pulse-bg-elevated);
  border-radius: 10px;
  padding: 10px 12px;
}

.pw-bottom-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.pw-bottom-label { font-size: 10px; color: var(--pulse-text-secondary); }
.pw-bottom-value { font-size: 13px; font-weight: 500; }

.pw-mini-bar {
  height: 3px;
  background: var(--pulse-bg-elevated);
  border-radius: 2px;
  overflow: hidden;
}

.pw-mini-fill { height: 100%; border-radius: 2px; }

/* ── Forecast ──────────────────────────────────────────────────── */
.pw-forecast { padding: 0 0 16px; }

.pw-hourly-strip {
  display: flex;
  gap: 2px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 8px 0 12px;
  margin: 0 20px;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  cursor: grab;
}
.pw-hourly-strip::-webkit-scrollbar { display: none; }

.pw-hour-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 48px;
  padding: 8px 4px;
  border-radius: 10px;
  transition: background 0.2s;
}

.pw-hour-col:hover { background: var(--pulse-bg-elevated); }

.pw-hour-col.pw-current {
  background: rgba(90,200,250,0.08);
  border: 1px solid rgba(90,200,250,0.15);
}

.pw-hour-time { font-size: 10px; color: var(--pulse-text-secondary); margin-bottom: 6px; }
.pw-hour-icon { font-size: 20px; margin-bottom: 6px; }
.pw-hour-temp { font-size: 14px; font-weight: 300; font-variant-numeric: tabular-nums; }
.pw-hour-precip { font-size: 9px; color: var(--pw-color-freeze); margin-top: 4px; min-height: 12px; }

.pw-sparkline-wrap {
  padding: 0 20px;
  margin: 0 0 12px;
  height: 40px;
}

.pw-daily-rows { display: flex; flex-direction: column; gap: 4px; padding: 0 20px; }

.pw-daily-row {
  display: grid;
  grid-template-columns: 48px 24px 32px 1fr 32px 32px;
  align-items: center;
  gap: 6px;
  padding: 6px 0;
  font-size: 13px;
}

.pw-daily-day { font-weight: 400; }
.pw-daily-icon { font-size: 16px; text-align: center; }
.pw-daily-precip { font-size: 10px; color: var(--pw-color-freeze); text-align: right; }

.pw-daily-bar-wrap {
  height: 4px;
  background: var(--pulse-bg-elevated);
  border-radius: 2px;
  position: relative;
}

.pw-daily-bar {
  position: absolute;
  height: 100%;
  border-radius: 2px;
}

.pw-daily-low, .pw-daily-high {
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  text-align: right;
}
.pw-daily-low { color: var(--pulse-text-secondary); }

/* ── Wind Rose ─────────────────────────────────────────────────── */
.pw-wind {
  position: relative;
  overflow: hidden;
}

.pw-wind-streaks {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

.pw-streak {
  position: absolute;
  height: 1px;
  border-radius: 1px;
  background: linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent);
  animation: pw-streakTravel linear infinite;
  animation-fill-mode: backwards;
}

.pw-rose-wrap {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
}

.pw-gust-sweep {
  animation: pw-gustPulse var(--gust-dur, 2s) ease-in-out infinite;
}

.pw-wind-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 3;
  pointer-events: none;
}

.pw-wind-speed {
  font-size: 28px;
  font-weight: 300;
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

.pw-wind-unit {
  font-size: 12px;
  color: var(--pulse-text-secondary);
  margin-top: 2px;
}

.pw-wind-beaufort {
  font-size: 17px;
  font-weight: 500;
  margin-top: 4px;
}

.pw-wind-beaufort-desc {
  font-size: 12px;
  color: var(--pulse-text-secondary);
}

/* ── AQI Gauge ─────────────────────────────────────────────────── */
.pw-aqi { padding: 0 0 16px; position: relative; overflow: hidden; }

.pw-aqi-gauge-unit {
  position: relative;
  z-index: 2;
  width: 220px;
  height: 140px;
  margin: 0 auto 12px;
}

.pw-aqi-gauge-center {
  position: absolute;
  bottom: 8px;
  left: 0;
  right: 0;
  text-align: center;
}

.pw-aqi-value {
  font-size: 52px;
  font-weight: 100;
  font-variant-numeric: tabular-nums;
  line-height: 1;
  transition: color 0.4s;
}

.pw-aqi-scale-label {
  font-size: 10px;
  color: var(--pulse-text-secondary);
  opacity: 0.85;
  margin-top: 1px;
}

.pw-aqi-category {
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  margin-top: 4px;
  padding: 0 20px;
  transition: color 0.4s;
}

.pw-aqi-desc {
  font-size: 12px;
  color: var(--pulse-text-secondary);
  text-align: center;
  margin-top: 2px;
  padding: 0 20px;
}

.pw-pollutant-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  margin-top: 12px;
  padding: 0 20px;
}

.pw-pollutant-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 6px 4px;
  background: var(--pulse-bg-elevated);
  border-radius: 8px;
}

.pw-pollutant-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}

.pw-pollutant-header {
  display: flex;
  align-items: center;
  gap: 4px;
}

.pw-pollutant-label { color: var(--pulse-text-secondary); font-size: 10px; }
.pw-pollutant-value { font-size: 13px; font-weight: 500; font-variant-numeric: tabular-nums; }

/* ── Astro ─────────────────────────────────────────────────────── */
.pw-astro {
  position: relative;
  overflow: hidden;
  padding: 0 0 16px;
}

.pw-sky-wash {
  position: absolute;
  inset: 0;
  transition: background var(--pw-bg-transition);
  z-index: 0;
}

.pw-astro-content { position: relative; z-index: 2; }

/* Stars layer above content in astro section */
.pw-astro > .pw-fx { z-index: 3; }

.pw-arc-wrap {
  width: 100%;
  overflow: visible;
}

/* ── Astro Layout (three-column redesign) ─────────────────────── */
.pw-astro-layout {
  display: flex;
  align-items: stretch;
}

.pw-twilight-arc {
  position: absolute;
  width: 18px;
  height: 89px;
  top: 55px;
}

.pw-twilight-arc-am { left: 4px; }
.pw-twilight-arc-pm { right: 4px; }

.pw-twilight-col {
  position: relative;
  width: 110px;
  flex-shrink: 0;
  padding-top: 42px;
}

.pw-twilight-am .pw-twilight-time-golden { margin-left: 16px; }
.pw-twilight-am .pw-twilight-label-golden { margin-top: 1px; margin-left: 14px; }
.pw-twilight-am .pw-twilight-time-blue { margin-top: 2px; margin-left: 18px; }
.pw-twilight-am .pw-twilight-label-blue { margin-top: 1px; margin-left: 24px; }
.pw-twilight-am .pw-twilight-time-end { margin-top: 2px; margin-left: 29px; }

.pw-twilight-pm { text-align: right; }
.pw-twilight-pm .pw-twilight-time-golden { margin-right: 16px; }
.pw-twilight-pm .pw-twilight-label-golden { margin-top: 1px; margin-right: 14px; }
.pw-twilight-pm .pw-twilight-time-blue { margin-top: 2px; margin-right: 18px; }
.pw-twilight-pm .pw-twilight-label-blue { margin-top: 1px; margin-right: 24px; }
.pw-twilight-pm .pw-twilight-time-end { margin-top: 2px; margin-right: 29px; }

.pw-twilight-time {
  font-size: 17px;
  font-weight: 300;
  font-variant-numeric: tabular-nums;
  line-height: 1.2;
  color: var(--primary-text-color);
}

.pw-twilight-label {
  font-size: 13px;
  color: var(--pulse-text-secondary);
  font-weight: 400;
  line-height: 1.4;
  text-transform: uppercase;
}

.pw-arc-center {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0;
}

.pw-sunrise-sunset {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: -8px;
}

.pw-sun-time {
  width: 84px;
  text-align: center;
}

.pw-sun-time-value {
  font-size: 17px;
  font-weight: 300;
  color: var(--primary-text-color);
  font-variant-numeric: tabular-nums;
}

.pw-sun-time-label {
  font-size: 14px;
  color: var(--pulse-text-secondary);
  text-transform: uppercase;
}

.pw-moon-stats {
  display: flex;
  justify-content: space-around;
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px solid var(--pulse-border-subtle, rgba(255,255,255,0.06));
}

/* ── Alerts ────────────────────────────────────────────────────── */
.pw-alerts {
  position: relative;
  overflow: hidden;
  padding: 0 0 16px;
}

.pw-severity-wash {
  position: absolute;
  inset: 0;
  z-index: 0;
  animation: pw-breathe 4s ease-in-out infinite;
}

.pw-alerts-content { position: relative; z-index: 2; }

.pw-radar-wrap {
  display: flex;
  justify-content: center;
  padding: 16px 20px;
}

.pw-alert-list { display: flex; flex-direction: column; gap: 8px; padding: 0 20px; }

.pw-alert-row {
  display: flex;
  gap: 10px;
  padding: 10px;
  background: var(--pulse-bg-elevated);
  border-radius: 10px;
  border-left: 3px solid;
}

.pw-alert-icon { font-size: 20px; flex-shrink: 0; }

.pw-alert-body { flex: 1; min-width: 0; }

.pw-alert-headline {
  font-size: 13px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
}

.pw-alert-badge {
  font-size: 9px;
  font-weight: 600;
  padding: 1px 5px;
  border-radius: 3px;
  text-transform: uppercase;
}

.pw-alert-desc {
  font-size: 11px;
  color: var(--pulse-text-secondary);
  margin-top: 3px;
  line-height: 1.4;
}

.pw-alert-locations {
  font-size: 10px;
  color: var(--pulse-text-secondary);
  opacity: 0.85;
  margin-top: 3px;
}

.pw-alert-time {
  font-size: 11px;
  color: var(--pulse-text-secondary);
  text-align: right;
  flex-shrink: 0;
  white-space: nowrap;
}

.pw-alert-progress {
  height: 2px;
  background: var(--pulse-bg-elevated);
  border-radius: 1px;
  margin-top: 6px;
  overflow: hidden;
}

.pw-alert-progress-fill { height: 100%; border-radius: 1px; }

.pw-all-clear {
  text-align: center;
  padding: 20px 0;
  font-size: 17px;
  font-weight: 500;
  color: var(--pw-color-stable);
}

/* ── Atmosphere Column ──────────────────────────────────────────── */
.pw-atmos { padding: 0 0 16px; position: relative; overflow: hidden; }

.pw-atmos-tier-desc {
  font-size: 12px;
  font-weight: 400;
  color: var(--pulse-text-secondary);
  text-align: center;
  padding: 0 20px;
  position: relative;
  z-index: 2;
}

.pw-atmos-column-wrap {
  display: flex;
  align-items: stretch;
  padding: 8px 20px 0;
  gap: 12px;
  height: var(--pw-atmos-column-height, 200px);
  position: relative;
  z-index: 2;
}

.pw-atmos-scale {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  text-align: right;
  padding: 4px 0;
}

.pw-atmos-scale-label {
  font-size: 9px;
  color: var(--pulse-text-secondary);
  opacity: 0.7;
  font-variant-numeric: tabular-nums;
}

.pw-atmos-column {
  flex: 1;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  background: linear-gradient(to top, var(--pulse-bg-elevated) 0%, transparent 100%);
  border: 1px solid var(--pulse-border-subtle);
}

/* CAPE energy fill */
.pw-atmos-cape-fill {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 0 0 9px 9px;
  transition: height 0.8s ease;
}

/* FX container inside CAPE fill (for thermal particles) */
.pw-atmos-fx {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

/* Thermal particles */
.pw-thermal-particle {
  position: absolute;
  border-radius: 50%;
  opacity: 0;
  animation: pw-thermalRise var(--rise-dur, 4s) ease-out infinite;
}

@keyframes pw-thermalRise {
  0% { transform: translateY(0) scale(1); opacity: 0; }
  10% { opacity: var(--peak-op, 0.4); }
  80% { opacity: var(--peak-op, 0.4); transform: translateY(var(--rise-dist, -80px)) scale(0.5); }
  100% { opacity: 0; transform: translateY(var(--rise-dist, -100px)) scale(0.3); }
}

/* Column inner glow */
.pw-atmos-column-glow {
  position: absolute;
  inset: 0;
  border-radius: 9px;
  pointer-events: none;
  box-shadow: inset 0 0 20px var(--glow-color, transparent);
}

.pw-atmos-column-glow.pulsing {
  animation: pw-columnPulse var(--pulse-dur, 3s) ease-in-out infinite;
}

@keyframes pw-columnPulse {
  0%, 100% { box-shadow: inset 0 0 20px var(--glow-color, transparent); }
  50% { box-shadow: inset 0 0 40px var(--glow-color, transparent); }
}

/* Freezing level marker */
.pw-atmos-freeze-marker {
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  z-index: 2;
}

.pw-atmos-freeze-line {
  flex: 1;
  height: 1px;
  background: var(--pw-color-freeze);
  opacity: 0.4;
}

.pw-atmos-freeze-label {
  font-size: 10px;
  color: var(--pw-color-freeze);
  opacity: 0.6;
  padding: 0 6px;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}

/* LCL height marker (dashed line, grey — distinct from freeze marker) */
.pw-atmos-lcl-marker {
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  z-index: 2;
}

.pw-atmos-lcl-line {
  flex: 1;
  height: 0;
  border-top: 1px dashed rgba(160,160,160,0.4);
}

.pw-atmos-lcl-label {
  font-size: 10px;
  color: var(--pw-text-overlay);
  padding: 0 6px;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
  text-shadow: var(--pw-shadow-overlay);
}

.pw-atmos-ground-label {
  position: absolute;
  bottom: 4px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 10px;
  color: var(--pw-text-overlay);
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: var(--pw-shadow-overlay);
}

.pw-atmos-shear-arrow {
  position: absolute;
  right: 6px;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}

.pw-atmos-lapse-overlay {
  position: absolute;
  left: 0;
  right: 0;
  border-radius: 10px;
  z-index: 1;
}

.pw-atmos-lapse-label {
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 10px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  text-shadow: var(--pw-shadow-overlay);
}

/* Cloud layer bands */
.pw-atmos-cloud-band {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
  pointer-events: none;
  border-radius: 4px;
}

/* High cloud top-edge indicator */
.pw-atmos-cloud-high {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  z-index: 1;
  pointer-events: none;
  border-radius: 9px 9px 0 0;
}

/* Shear arrow value label */
.pw-atmos-shear-label {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 10px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  text-shadow: var(--pw-shadow-overlay);
}

/* Tap-to-expand detail panel */
.pw-atmos-tappable {
  cursor: pointer;
}
.pw-atmos-tappable:active {
  opacity: 0.85;
}

.pw-atmos-detail {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease;
  margin: 0 20px;
}

.pw-atmos-detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 16px;
  padding: 12px 0;
  border-top: 1px solid var(--pulse-border-subtle);
}

.pw-atmos-detail-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.pw-atmos-detail-indicator {
  width: 4px;
  height: 24px;
  border-radius: 2px;
  flex-shrink: 0;
}

.pw-atmos-detail-label {
  font-size: 10px;
  color: var(--pulse-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.pw-atmos-detail-value {
  font-size: 14px;
  font-weight: 300;
  font-variant-numeric: tabular-nums;
}

.pw-atmos-detail-desc {
  font-size: 9px;
  color: var(--pulse-text-secondary);
  opacity: 0.6;
}

/* ── Severity Dot ──────────────────────────────────────────────── */
.pw-severity-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  animation: pw-dotPulse 2s ease-in-out infinite;
}

/* ── FX Keyframes ──────────────────────────────────────────────── */
@keyframes pw-rainFall {
  0% { transform: translateY(-20px); opacity: 0; }
  5% { opacity: 1; }
  95% { opacity: 0.8; }
  100% { transform: translateY(300px); opacity: 0; }
}

@keyframes pw-snowFall {
  0% { transform: translateY(-10px) translateX(0) rotate(0); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 0.6; }
  100% { transform: translateY(300px) translateX(30px) rotate(360deg); opacity: 0; }
}

@keyframes pw-flash {
  0%,100% { opacity: 0; }
  4% { opacity: 0.8; }
  6% { opacity: 0; }
  8% { opacity: 0.5; }
  10% { opacity: 0; }
}

@keyframes pw-boltStrike {
  0% { opacity: 0; filter: none; }
  3% { opacity: 0; }
  4% { opacity: 1; filter: drop-shadow(0 0 12px rgba(200,220,255,0.9)) drop-shadow(0 0 4px #fff); }
  6% { opacity: 0; filter: none; }
  8% { opacity: 0.7; filter: drop-shadow(0 0 6px rgba(200,220,255,0.5)); }
  10% { opacity: 0; filter: none; }
  100% { opacity: 0; }
}

@keyframes pw-fogDrift {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

@keyframes pw-rayPulse {
  0%,100% { opacity: 0.3; }
  50% { opacity: 0.7; }
}

@keyframes pw-cloudDrift {
  0% { transform: translateX(-120%); }
  100% { transform: translateX(500px); }
}

@keyframes pw-twinkle {
  0%,100% { opacity: 0.2; }
  50% { opacity: 0.9; }
}

@keyframes pw-shimmer {
  0% { background-position: 0% 0%; opacity: 0.4; }
  50% { background-position: 0% 100%; opacity: 0.8; }
  100% { background-position: 0% 0%; opacity: 0.4; }
}

@keyframes pw-rippleWave {
  0%, 100% { transform: scaleY(1) translateY(0); }
  50% { transform: scaleY(1.1) translateY(-3px); }
}

@keyframes pw-streakTravel {
  0% { translate: var(--sx) var(--sy); opacity: 0; }
  10% { opacity: var(--peak, 0.4); }
  90% { opacity: var(--peak, 0.4); }
  100% { translate: var(--ex) var(--ey); opacity: 0; }
}

@keyframes pw-arrowSway {
  0%   { transform: rotate(var(--sway-back)); }
  35%  { transform: rotate(var(--sway-fwd)); }
  65%  { transform: rotate(var(--sway-fwd)); }
  100% { transform: rotate(var(--sway-back)); }
}

@keyframes pw-roseShake {
  0%, 100% { translate: 0px 0px; }
  20%  { translate: var(--dx) var(--dy); }
  40%  { translate: calc(-0.6 * var(--dx)) calc(-0.6 * var(--dy)); }
  60%  { translate: calc(0.8 * var(--dx)) calc(0.8 * var(--dy)); }
  80%  { translate: calc(-0.3 * var(--dx)) calc(-0.3 * var(--dy)); }
}

@keyframes pw-gustPulse {
  0%   { opacity: 0.04; transform: scale(0.85); }
  40%  { opacity: var(--gust-peak, 0.2); transform: scale(1.05); }
  70%  { opacity: var(--gust-peak, 0.2); transform: scale(1.0); }
  100% { opacity: 0.04; transform: scale(0.85); }
}

@keyframes pw-breathe {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

@keyframes pw-dotPulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.3); }
}

@keyframes pw-sweepRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes pw-blipRing {
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(2.5); opacity: 0; }
}

@keyframes pw-blipPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.4); }
}

@keyframes pw-sunGlow {
  0%, 100% { filter: drop-shadow(0 0 8px rgba(255,200,50,0.4)); }
  50% { filter: drop-shadow(0 0 16px rgba(255,200,50,0.7)); }
}

@keyframes pw-moonGlow {
  0%, 100% { filter: drop-shadow(0 0 6px rgba(200,210,255,0.3)); }
  50% { filter: drop-shadow(0 0 12px rgba(200,210,255,0.5)); }
}

@keyframes pw-gaugeGlow {
  0%, 100% { filter: drop-shadow(0 0 4px var(--glow-color, rgba(255,255,255,0.2))); }
  50% { filter: drop-shadow(0 0 10px var(--glow-color, rgba(255,255,255,0.4))); }
}

/* ── Air Haze FX ───────────────────────────────────────────────── */
.pw-smog-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.pw-haze-vignette {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.pw-dust-particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(180,160,120,0.3);
  animation: pw-dustFloat 8s ease-in-out infinite;
}

@keyframes pw-dustFloat {
  0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
  50% { transform: translateY(-20px) translateX(10px); opacity: 0.5; }
}

.pw-haze-blob {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(ellipse, rgba(160,140,100,0.08), transparent 70%);
  animation: pw-hazeFloat 12s ease-in-out infinite;
}

@keyframes pw-hazeFloat {
  0%, 100% { transform: translateX(0); opacity: 0.3; }
  50% { transform: translateX(30px); opacity: 0.6; }
}

/* ── Radar (CRT green phosphor style) ──────────────────────────── */
.pw-radar {
  position: relative;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  overflow: hidden;
  background:
    repeating-radial-gradient(
      transparent, transparent 15%,
      var(--pw-radar-color, rgba(80,255,0,0.15)) 15.5%, transparent 16%
    ),
    linear-gradient(
      transparent 49.5%, var(--pw-radar-line, rgba(80,255,0,0.08)) 49.5%,
      var(--pw-radar-line, rgba(80,255,0,0.08)) 50.5%, transparent 50.5%
    ),
    linear-gradient(
      to right, transparent 49.5%, var(--pw-radar-line, rgba(80,255,0,0.08)) 49.5%,
      var(--pw-radar-line, rgba(80,255,0,0.08)) 50.5%, transparent 50.5%
    ),
    radial-gradient(var(--pw-radar-bg-inner, #001a00), var(--pw-radar-bg-outer, #000800));
}

.pw-radar::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-image: conic-gradient(transparent 85%, var(--pw-radar-sweep, rgba(80,255,0,0.35)));
  animation: pw-sweepRotate var(--pw-radar-dur, 2.5s) linear infinite;
  will-change: transform;
}

.pw-radar::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background:
    radial-gradient(ellipse at 35% 25%, rgba(255,255,255,0.08) 0%, transparent 50%),
    radial-gradient(circle, transparent 55%, rgba(0,0,0,0.6) 100%);
  z-index: 3;
  pointer-events: none;
}

@keyframes pw-radarBlink {
  2%, 20% { background-color: var(--pw-blip-color, rgba(80,255,0,0.85)); box-shadow: 0 0 4px var(--pw-blip-color, rgba(80,255,0,0.6)); }
  90% { background-color: transparent; box-shadow: none; }
}

.pw-radar-blip {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  animation: pw-radarBlink var(--pw-radar-dur, 2.5s) ease-out infinite;
}

/* ── Alert rows — Pulse DNA ────────────────────────────────────── */
.pw-alert-list { display: flex; flex-direction: column; padding: 0 20px; }

.pw-alert-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid var(--pulse-border-subtle);
}
.pw-alert-row:last-child { border-bottom: none; }
.pw-alert-row.upcoming { opacity: 0.5; }
.pw-alert-row.active .pw-alert-headline { color: var(--pw-alert-color); }
.pw-alert-row.active .pw-alert-time { color: var(--pw-alert-color); }

.pw-alert-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 5px;
}

.pw-alert-body { flex: 1; min-width: 0; }

.pw-alert-headline {
  font-size: 13px;
  font-weight: 500;
  line-height: 1.3;
}

.pw-alert-type {
  font-size: 9px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  opacity: 0.3;
  margin-top: 1px;
}

.pw-alert-desc {
  font-size: 11px;
  font-weight: 300;
  color: var(--pulse-text-secondary);
  opacity: 0.7;
  margin-top: 3px;
  line-height: 1.4;
}

.pw-alert-locations {
  font-size: 10px;
  color: var(--pulse-text-secondary);
  opacity: 0.5;
  margin-top: 3px;
}

.pw-alert-time {
  font-size: 10px;
  font-weight: 400;
  color: var(--pulse-text-secondary);
  opacity: 0.6;
  text-align: right;
  flex-shrink: 0;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}

.pw-all-clear {
  text-align: center;
  padding: 4px 0;
  font-size: 17px;
  font-weight: 500;
  color: var(--pw-color-stable);
}

/* ── Weather Summary ────────────────────────────────────────────── */
.pw-weather-summary { font-size: 13px; font-weight: 400; text-align: center; padding: 4px 20px 8px; color: var(--pulse-text-primary); position: relative; z-index: 2; opacity: 0.85; }

/* ── Day Progress Arc ──────────────────────────────────────────── */
.pw-day-arc { display: flex; align-items: center; gap: 8px; padding: 4px 20px 8px; position: relative; z-index: 2; }
.pw-day-arc-label { font-size: 10px; color: var(--pulse-text-secondary); font-variant-numeric: tabular-nums; opacity: 0.6; }
.pw-day-arc-bar { flex: 1; height: 2px; border-radius: 1px; background: var(--pulse-bg-elevated); position: relative; }
.pw-day-arc-fill { height: 100%; border-radius: 1px; background: linear-gradient(to right, #ff9f0a, #ffd60a); }
.pw-day-arc-marker { position: absolute; top: -3px; width: 8px; height: 8px; background: #ffd60a; border-radius: 50%; border: 1px solid rgba(0,0,0,0.2); transform: translateX(-50%); box-shadow: 0 0 6px rgba(255,214,10,0.4); }

/* ── Stability Badge ───────────────────────────────────────────── */
.pw-stability-badge { display: inline-block; font-size: 10px; font-weight: 600; padding: 2px 8px; border-radius: 8px; margin-left: 6px; vertical-align: middle; }

/* ── Precip Time Markers ───────────────────────────────────────── */
.pw-precip-times { display: flex; justify-content: space-between; font-size: 9px; color: var(--pulse-text-secondary); opacity: 0.6; margin-top: 2px; }

/* ── Rain Start Indicator ──────────────────────────────────────── */
.pw-rain-start { position: absolute; top: -14px; transform: translateX(-50%); text-align: center; }
.pw-rain-start-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--pw-color-freeze); margin: 0 auto 2px; }
.pw-rain-start-label { font-size: 8px; color: var(--pw-color-freeze); white-space: nowrap; }

/* ── Freezing Level Marker (Temp Arc) ──────────────────────────── */
.pw-arc-freeze { position: absolute; top: -6px; bottom: -6px; width: 1px; transform: translateX(-50%); }
.pw-arc-freeze-line { width: 1px; height: 100%; background: var(--pw-color-freeze); opacity: 0.5; }
.pw-arc-freeze-label { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); font-size: 8px; color: var(--pw-color-freeze); white-space: nowrap; }

/* ── CAPE Sparkline ────────────────────────────────────────────── */
.pw-cape-sparkline { display: block; border-radius: 2px; overflow: hidden; }
.pw-cape-peak { position: absolute; top: -12px; transform: translateX(-50%); font-size: 8px; color: var(--pw-tier-strong); white-space: nowrap; font-variant-numeric: tabular-nums; }

/* ── Comfort Bar (Dew Point) ───────────────────────────────────── */
.pw-comfort-bar { display: flex; gap: 2px; height: 4px; border-radius: 2px; overflow: hidden; }
.pw-comfort-slot { flex: 1; border-radius: 1px; }

@media (prefers-reduced-motion: reduce) {
  .pw-streak,
  .pw-wind-arrow,
  .pw-gust-cone,
  .pw-rose-container.pw-shaking,
  .pw-severity-wash,
  .pw-severity-dot,
  .pw-dust-particle,
  .pw-haze-blob,
  .pw-tension-wash.breathing,
  .pw-tension-vignette,
  .pw-radar::after,
  .pw-radar-blip,
  .pw-thermal-particle,
  .pw-atmos-column-glow.pulsing {
    animation: none !important;
  }
  .pw-atmos-column-glow.pulsing {
    box-shadow: inset 0 0 30px var(--glow-color, transparent) !important;
  }
  .pw-atmos-detail {
    transition: none !important;
  }
}

/* ── Tension Overlays ──────────────────────────────────────────── */
.pw-tension-vignette {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.pw-tension-wash {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.pw-tension-wash.breathing {
  animation: pw-breathe var(--breathe-dur, 4s) ease-in-out infinite;
}

@keyframes pw-vignettePulse {
  0%, 100% { opacity: var(--vignette-min, 0.5); }
  50% { opacity: var(--vignette-max, 1); }
}

/* ── Meteogram ─────────────────────────────────────────────────── */
.pw-meteogram { padding: 0 0 16px; position: relative; }
.pw-meteogram-chart { display: block; width: 100%; height: auto; margin: 8px 0 0; }
.pw-meteogram-footer { padding: 4px 20px 0; }
.pw-meteogram-legend { display: flex; gap: 12px; justify-content: center; font-size: 8px; opacity: 0.5; padding: 4px 0; color: var(--pulse-text-secondary); }
.pw-meteogram-strip { display: flex; gap: 0; height: 4px; border-radius: 2px; overflow: hidden; margin-top: 6px; position: relative; }
.pw-meteogram-strip::before { content: attr(data-label); position: absolute; left: -20px; top: -2px; font-size: 8px; opacity: 0.4; color: var(--pulse-text-secondary); }
.pw-meteogram-strip > span { flex: 1; }
`;
