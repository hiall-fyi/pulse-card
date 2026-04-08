/**
 * @module constants
 * @description Default configuration values, version string, and logging
 * prefix constants for Pulse Card.
 */

/** Pulse Card version string. */
export const VERSION = '0.3.0';

/** Console log prefix. */
export const LOG_PREFIX = 'Pulse Card:';

/** Default configuration values — opinionated minimal style. */
export const DEFAULTS = {
  min: 0,
  max: 100,
  height: '8px',
  border_radius: '4px',
  decimal: null,
  entity_row: false,
  complementary: false,
  limit_value: false,
  columns: 1,
  animation: {
    state: 'on',
    speed: 0.8,
    effect: 'none',
  },
  positions: {
    icon: 'off',
    name: 'outside',
    value: 'outside',
    indicator: 'off',
  },
  tap_action: { action: 'more-info' },
  hold_action: { action: 'none' },
  double_tap_action: { action: 'none' },
};
