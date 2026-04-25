/**
 * @module constants
 * @description Default configuration values, version string, and constants
 * for Pulse Switch Card.
 */

/** Pulse Switch Card version string. */
export const VERSION = '1.1.0';

/** Card custom element name. */
export const CARD_NAME = 'pulse-switch-card';

/** Editor custom element name. */
export const EDITOR_NAME = 'pulse-switch-card-editor';

/** Console log prefix. */
export const LOG_PREFIX = 'Pulse Switch Card:';

/**
 * LED pulse duration in milliseconds.
 * Matches Linux kernel NETDEV_LED_DEFAULT_INTERVAL.
 * @see https://www.kernel.org/doc/Documentation/ABI/testing/sysfs-class-led-trigger-netdev
 */
export const LED_PULSE_MS = 50;

/** Default average packet size in bytes for PPS estimation (IMIX). */
export const DEFAULT_AVG_PACKET_SIZE = 500;

/** Default link speed in Mbit/s for scaled mode utilization calculation. */
export const DEFAULT_LINK_SPEED = 1000;

/** Default configuration values. */
export const DEFAULTS = {
  columns: 4,
  show_speed: false,
  speed_format: 'rx/tx',
  led_mode: 'realistic',
  avg_packet_size: DEFAULT_AVG_PACKET_SIZE,
  tap_action: { action: 'more-info' },
  hold_action: { action: 'none' },
};
