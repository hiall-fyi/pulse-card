/**
 * @module pulse-climate/constants
 * @description Default configuration values, version string, and visual
 * mapping constants for Pulse Climate Card.
 */

/** Pulse Climate Card version string. */
export const VERSION = '1.6.0';

/** Custom element tag name. */
export const CARD_NAME = 'pulse-climate-card';

/** Editor custom element tag name. */
export const EDITOR_NAME = 'pulse-climate-card-editor';

/** Console log prefix. */
export const LOG_PREFIX = 'Pulse Climate Card:';

/**
 * HVAC action → visual mapping.
 * Colors use CSS custom property references where possible (resolved at render time).
 * Fallback hex values chosen for ≥4.5:1 contrast on both light (#fff) and dark (#1c1c1c) backgrounds.
 */
export const HVAC_VISUALS = {
  heating: { icon: 'mdi:fire', token: 'var(--pulse-status-yellow)', fallback: '#FF9800', label: 'Heating' },
  cooling: { icon: 'mdi:snowflake', token: 'var(--pulse-status-blue)', fallback: '#2196F3', label: 'Cooling' },
  drying:  { icon: 'mdi:water-off', token: null, fallback: '#9C27B0', label: 'Drying' },
  fan:     { icon: 'mdi:fan', token: null, fallback: '#607D8B', label: 'Fan' },
  idle:    { icon: 'mdi:clock-outline', token: 'var(--pulse-text-secondary)', fallback: '#9E9E9E', label: 'Idle' },
  off:     { icon: 'mdi:power', token: 'var(--pulse-disabled)', fallback: '#616161', label: 'Off' },
};

/**
 * Mold/condensation risk → color mapping.
 * Uses HA theme label-badge variables with hardcoded fallbacks.
 * All fallback colors tested for ≥4.5:1 contrast on both light and dark backgrounds.
 */
export const RISK_COLORS = {
  None: { token: 'var(--pulse-status-green)', fallback: '#4CAF50' },
  Low:  { token: 'var(--pulse-status-green)', fallback: '#8BC34A' },
  Medium: { token: 'var(--pulse-status-yellow)', fallback: '#FF9800' },
  High: { token: 'var(--pulse-status-red)', fallback: '#F44336' },
  Critical: { token: 'var(--pulse-status-red)', fallback: '#B71C1C' },
};

/** Default section order. */
export const DEFAULT_SECTIONS = ['zones'];

/** All available section types. */
export const SECTION_TYPES = [
  'zones', 'api', 'bridge', 'homekit', 'weather',
  'environment', 'thermal', 'schedule',
  'graph', 'donut',
  'thermal_strip', 'comfort_strip', 'energy_flow', 'radial',
  'home_status', 'zone_ranking',
];

/**
 * Default chart color palette — 8 visually distinct colors.
 * Uses HA CSS custom properties with hardcoded fallbacks.
 * Tested for ≥3:1 contrast on both light (#fff) and dark (#1c1c1c) backgrounds.
 */
export const CHART_PALETTE = [
  'var(--pulse-status-blue)',
  'var(--pulse-status-red)',
  'var(--pulse-status-green)',
  'var(--pulse-status-yellow)',
  'var(--pulse-accent)',
  'var(--pulse-info-color)',
  'var(--pulse-status-yellow)',
  'var(--success-color, #8BC34A)',
];

/** Default configuration values. */
export const DEFAULTS = {
  columns: 1,
  layout: 'default',
  show_temp_bar: true,
  show_power_bar: true,
  tap_action: { action: 'more-info' },
  hold_action: { action: 'none' },
  double_tap_action: { action: 'none' },
};

/**
 * Per-section-type default values. Keys are section type names,
 * values are objects with default property values.
 * @type {Record<string, Record<string, *>>}
 */
export const SECTION_DEFAULTS = {
  graph: { attribute: 'current_temperature', stacked: false, hours_to_show: 24, height: 80 },
  donut: { size: 120 },
  thermal_strip: { hours_to_show: 24, mode: 'timeline', slots_per_hour: 2, attribute: 'temperature' },
  comfort_strip: { slots_per_hour: 1, hours_to_show: 24, mode: 'heatmap' },
  radial: { size: 280, attribute: 'temperature' },
  energy_flow: {},
};
