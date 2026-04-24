/**
 * @module utils
 * @description Pure utility functions for Pulse Switch Card — speed formatting,
 * entity derivation, PPS estimation, label resolution, port type detection,
 * and security helpers.
 */

import { LOG_PREFIX, DEFAULT_AVG_PACKET_SIZE } from './constants.js';
// Re-export shared utilities for backward compatibility
export { escapeHtml, sanitizeCssValue } from '../shared/utils.js';

// =====================================================================
// Speed Formatting
// =====================================================================

/**
 * Format a speed value in Mbit/s for display.
 * Rules: <0.01 → "0", <1 → 2dp, <100 → 1dp, ≥100 → int, ≥1000 → "X.XG".
 * @param {number} mbps - Speed in Mbit/s.
 * @returns {string} Formatted string.
 */
export function formatSpeed(mbps) {
  if (!isFinite(mbps) || mbps < 0.01) return '0';
  if (mbps >= 1000) return `${(mbps / 1000).toFixed(1)}G`;
  if (mbps >= 100) return Math.round(mbps).toString();
  if (mbps >= 1) return mbps.toFixed(1);
  return mbps.toFixed(2);
}

/**
 * Build speed display text based on format config.
 * @param {number} rx - RX speed in Mbit/s.
 * @param {number} tx - TX speed in Mbit/s.
 * @param {string} format - 'rx/tx' | 'rx' | 'total'.
 * @returns {string}
 */
export function buildSpeedText(rx, tx, format) {
  switch (format) {
    case 'rx':
      return `\u2193${formatSpeed(rx)}`;
    case 'total':
      return formatSpeed(rx + tx);
    default:
      return `\u2193${formatSpeed(rx)} \u2191${formatSpeed(tx)}`;
  }
}

// =====================================================================
// Entity Derivation
// =====================================================================

/**
 * Derive TX speed entity ID from RX speed entity ID.
 * @param {string} rxEntityId
 * @returns {string}
 */
export function deriveTxEntityId(rxEntityId) {
  return rxEntityId.replace(/_rx_speed$/, '_tx_speed');
}

/**
 * Derive packet count entity ID from RX speed entity ID.
 * @param {string} rxEntityId
 * @param {'rx'|'tx'} direction
 * @returns {string}
 */
export function derivePacketEntityId(rxEntityId, direction) {
  return rxEntityId.replace(/_rx_speed$/, `_${direction}_packets`);
}

// =====================================================================
// PPS Calculation
// =====================================================================

/**
 * Estimate packets per second from bandwidth.
 * @param {number} bandwidthMbps - Total bandwidth in Mbit/s.
 * @param {number} [avgPacketBytes] - Average packet size in bytes.
 * @returns {number} Estimated PPS (always ≥ 0).
 */
export function estimatePps(bandwidthMbps, avgPacketBytes = DEFAULT_AVG_PACKET_SIZE) {
  if (bandwidthMbps <= 0 || avgPacketBytes <= 0) return 0;
  return (bandwidthMbps * 1_000_000) / (avgPacketBytes * 8);
}

/**
 * Compute real PPS from packet count delta.
 * @param {number} currentPackets - Current cumulative packet count.
 * @param {number} previousPackets - Previous cumulative packet count.
 * @param {number} intervalSeconds - Time between samples.
 * @returns {number} Packets per second (always ≥ 0).
 */
export function computeRealPps(currentPackets, previousPackets, intervalSeconds) {
  if (intervalSeconds <= 0) return 0;
  const delta = currentPackets - previousPackets;
  if (delta < 0) return 0; // counter reset
  return delta / intervalSeconds;
}

// =====================================================================
// Label Resolution
// =====================================================================

/**
 * Resolve port label from config and entity attributes.
 * Fallback chain: label config → comment attribute → friendly_name → entity_id.
 * @param {import('./types.js').PortConfig} portConfig
 * @param {Record<string, *>|null|undefined} entityState - hass.states[entityId]
 * @returns {string} Always returns a non-empty string.
 */
export function resolveLabel(portConfig, entityState) {
  // 1. Explicit label config
  if (portConfig.label) return portConfig.label;

  // 2. RouterOS interface comment attribute
  const comment = entityState?.attributes?.comment;
  if (comment && comment !== 'null' && comment !== '') return String(comment);

  // 3. Friendly name — extract interface name segment
  const friendlyName = entityState?.attributes?.friendly_name;
  if (friendlyName) {
    // MikroTik CE pattern: "CRONUS Interfaces ether1_WAN RX Speed"
    // Extract everything between "Interfaces " and " RX/TX Speed"
    const match = String(friendlyName).match(/Interfaces?\s+(.+?)\s+(?:RX|TX)\s/i);
    if (match) return match[1].replace(/[_-]/g, ' ');
    // Generic fallback: last word
    const parts = String(friendlyName).split(' ');
    return parts[parts.length - 1];
  }

  // 4. Entity ID as last resort
  return portConfig.entity;
}

// =====================================================================
// Port Type Detection
// =====================================================================

/** @type {RegExp} */
const VIRTUAL_PATTERN = /bridge|pppoe|vlan|loopback|ovpn|wireguard/i;

/**
 * Detect port type from entity ID or explicit config.
 * @param {import('./types.js').PortConfig} portConfig
 * @returns {'rj45'|'sfp'|'virtual'}
 */
export function resolvePortType(portConfig) {
  if (portConfig.port_type === 'sfp' || portConfig.port_type === 'rj45' || portConfig.port_type === 'virtual') {
    return portConfig.port_type;
  }
  const eid = portConfig.entity;
  if (/sfp/i.test(eid)) return 'sfp';
  if (VIRTUAL_PATTERN.test(eid)) return 'virtual';
  return 'rj45';
}

// =====================================================================
// Virtual Port Icon
// =====================================================================

/**
 * Resolve icon for virtual port tiles.
 * @param {import('./types.js').PortConfig} portConfig
 * @returns {string} MDI icon string.
 */
export function resolveVirtualIcon(portConfig) {
  if (portConfig.icon) return portConfig.icon;
  const eid = portConfig.entity.toLowerCase();
  if (/bridge/.test(eid)) return 'mdi:bridge';
  if (/pppoe/.test(eid)) return 'mdi:wan';
  if (/vlan/.test(eid)) return 'mdi:lan';
  if (/ovpn|wireguard|vpn/.test(eid)) return 'mdi:vpn';
  if (/loopback/.test(eid)) return 'mdi:loop';
  return 'mdi:network';
}

// =====================================================================
// Security & Logging Helpers
// =====================================================================

// escapeHtml() and sanitizeCssValue() are imported from shared/utils.js and re-exported above

/**
 * Log a warning with the Pulse Switch Card prefix.
 * @param {string} msg
 * @param {...*} args
 */
export function warn(msg, ...args) {
  console.warn(`${LOG_PREFIX} ${msg}`, ...args);
}
