/**
 * @module types
 * @description JSDoc type definitions for Pulse Switch Card.
 * This file is never imported at runtime — it exists solely for
 * TypeScript's checkJs type-checking via JSDoc annotations.
 */

// Dummy export to make this a module for TypeScript's import('./types.js') syntax
export {};

/**
 * @typedef {object} ActionConfig
 * @property {string} action - 'more-info' | 'navigate' | 'call-service' | 'perform-action' | 'url' | 'toggle' | 'none'
 * @property {string} [entity]
 * @property {string} [navigation_path]
 * @property {string} [service]
 * @property {string} [perform_action]
 * @property {Record<string, *>} [service_data]
 * @property {Record<string, *>} [data]
 * @property {string} [url_path]
 */

/**
 * @typedef {object} PortConfig
 * @property {string} entity - Primary rx_speed sensor entity ID.
 * @property {string} [label] - Explicit port label.
 * @property {string} [port_type] - 'rj45' | 'sfp' | 'virtual'. Auto-detected from entity ID if not set.
 * @property {string} [icon] - Override icon for virtual port tiles (e.g. 'mdi:bridge').
 * @property {string} [rx_packets] - RX packet count entity ID.
 * @property {string} [tx_packets] - TX packet count entity ID.
 * @property {number} [link_speed] - Port link speed in Mbit/s for scaled mode.
 * @property {ActionConfig} [tap_action]
 * @property {ActionConfig} [hold_action]
 */

/**
 * @typedef {object} PulseSwitchConfig
 * @property {string} [title]
 * @property {number} [columns]
 * @property {boolean} [show_speed]
 * @property {string} [speed_format] - 'rx/tx' | 'rx' | 'total'
 * @property {string} [led_mode] - 'scaled' | 'realistic'
 * @property {number} [avg_packet_size]
 * @property {ActionConfig} [tap_action]
 * @property {ActionConfig} [hold_action]
 * @property {boolean} [entity_row] - Remove ha-card wrapper for embedding in other cards.
 * @property {string} [layout] - 'default' | 'compact'
 * @property {PortConfig[]} ports
 */

/**
 * Resolved runtime state for a single port.
 * @typedef {object} PortState
 * @property {string} entityId - Primary entity ID.
 * @property {'connected'|'disconnected'|'disabled'|'unavailable'} linkState
 * @property {'rj45'|'sfp'|'virtual'} portType - Resolved port type for visual rendering.
 * @property {string} virtualIcon - Resolved icon for virtual ports (empty for physical).
 * @property {number} rxSpeed - Mbit/s (0 if unavailable).
 * @property {number} txSpeed - Mbit/s (0 if unavailable).
 * @property {number} totalSpeed - rx + tx.
 * @property {string} label - Resolved display label.
 * @property {string} speedText - Formatted speed string.
 * @property {number} pps - Estimated or real packets per second.
 * @property {number} utilization - 0-1 ratio (totalSpeed / linkSpeed).
 */

/**
 * @typedef {object} HassEntityState
 * @property {string} entity_id
 * @property {string} state
 * @property {Record<string, *>} attributes
 * @property {string} last_updated
 * @property {string} [last_changed]
 */

/**
 * @typedef {object} Hass
 * @property {Record<string, HassEntityState>} states
 * @property {function(string, string, Record<string, *>=): Promise<void>} callService
 */
