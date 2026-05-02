/**
 * @module styles
 * @description CSS styles for Pulse Switch Card — exported as a template
 * literal string for Shadow DOM encapsulation.
 */

import { SHARED_STYLES } from '../shared/styles.js';

export const STYLES = `${SHARED_STYLES}
  /* ================================================================
   * Host & Card Shell
   * ================================================================ */
  :host {
    display: block;
  }

  ha-card {
    overflow: hidden;
    padding: 16px;
    background: var(--ha-card-background, var(--card-background-color));
    container-type: inline-size;
  }

  .panel-title {
    font-size: 16px;
    font-weight: 500;
    color: var(--primary-text-color);
    padding-bottom: 8px;
  }

  /* ================================================================
   * Port Grid — responsive CSS grid
   * ================================================================ */
  .port-grid {
    display: grid;
    grid-template-columns: repeat(var(--panel-columns, 4), 1fr);
    gap: 12px 8px;
    justify-items: center;
  }

  @container (max-width: 300px) {
    .port-grid {
      grid-template-columns: repeat(var(--panel-columns-narrow, 2), 1fr);
    }
  }

  /* ================================================================
   * Port Tile — wrapper for body + label + speed
   * ================================================================ */
  .port-tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  .port-tile:not(.has-ripple):active {
    opacity: 0.8;
  }

  @media (hover: hover) {
    .port-tile:hover .port-body {
      filter: brightness(1.15);
    }
  }

  .port-tile:focus-visible {
    outline: 2px solid var(--pulse-accent);
    outline-offset: 2px;
    border-radius: 4px;
  }

  /* State-dependent tile opacity */
  .port-tile.disconnected {
    opacity: 0.4;
  }

  .port-tile.disabled {
    opacity: 0.25;
  }

  .port-tile.unavailable {
    opacity: 0.3;
  }

  /* ================================================================
   * Port Body — 3D metallic shell (shared by all port types)
   * ================================================================ */
  .port-body {
    width: 50px;
    height: 40px;
    background: linear-gradient(180deg, #404040 0%, #2c2c2c 30%, #1a1a1a 100%);
    border: 1px solid rgba(160, 160, 160, 0.35);
    border-radius: 3px;
    position: relative;
    box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(0, 0, 0, 0.3);
  }

  .port-body.disconnected,
  .port-body.disabled,
  .port-body.unavailable {
    border-color: rgba(70, 70, 70, 0.25);
  }

  /* ================================================================
   * RJ45 Port Internals — socket, pins, tab
   * ================================================================ */
  .port-socket {
    position: absolute;
    top: 8px;
    left: 4px;
    right: 4px;
    bottom: 7px;
    background: #0e0e0e;
    border-radius: 2px;
    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.95);
  }

  .port-pins {
    display: flex;
    justify-content: center;
    gap: 2px;
    padding-top: 3px;
  }

  .port-pin {
    width: 2px;
    height: 10px;
    border-radius: 0.5px;
    opacity: 0.65;
    background: #c8a84e;
  }

  .port-pin.off {
    background: #444;
  }

  .port-tab {
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 3px;
    background: rgba(90, 90, 90, 0.3);
    border-radius: 1px;
  }

  /* ================================================================
   * SFP Port — wider body, cage slot instead of pins
   * ================================================================ */
  .port-body.sfp {
    width: 56px;
  }

  .port-cage {
    position: absolute;
    top: 12px;
    left: 4px;
    right: 4px;
    bottom: 5px;
    background: #0a0a0a;
    border: 1px solid rgba(80, 80, 80, 0.3);
    border-radius: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .port-cage-edge {
    width: 70%;
    height: 1px;
    background: rgba(120, 120, 120, 0.4);
  }

  /* ================================================================
   * Virtual Port — dashed border, icon, no physical elements
   * ================================================================ */
  .port-body.virtual {
    border-style: dashed;
    border-color: rgba(160, 160, 160, 0.25);
    background: linear-gradient(180deg, rgba(64, 64, 64, 0.6) 0%, rgba(44, 44, 44, 0.6) 30%, rgba(26, 26, 26, 0.6) 100%);
  }

  .port-virtual-icon {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--secondary-text-color);
    --mdc-icon-size: 18px;
  }

  /* ================================================================
   * LEDs — link (left) and activity (right)
   * ================================================================ */
  .port-led {
    position: absolute;
    top: 3px;
    width: 7px;
    height: 3px;
    border-radius: 1px;
    z-index: 5;
    transition: opacity 0.05s;
  }

  .port-led.link {
    left: 4px;
  }

  .port-led.activity {
    right: 4px;
  }

  /* Link LED states */
  .port-led.link.connected {
    background: #00E676;
    box-shadow: 0 0 4px #00E676, 0 0 8px rgba(0, 230, 118, 0.3);
  }

  .port-led.link.disconnected {
    background: #222;
    border: 1px solid #333;
    box-sizing: border-box;
  }

  .port-led.link.disabled {
    background: #8B0000;
    box-shadow: 0 0 3px rgba(139, 0, 0, 0.5);
  }

  .port-led.link.unavailable {
    background: #222;
    border: 1px solid #333;
    box-sizing: border-box;
  }

  /* Activity LED states */
  .port-led.activity.active {
    background: #FFB300;
    box-shadow: 0 0 4px #FFB300, 0 0 8px rgba(255, 179, 0, 0.3);
  }

  .port-led.activity.idle {
    background: #222;
    border: 1px solid #333;
    box-sizing: border-box;
    opacity: 1;
  }

  /* ================================================================
   * Port Label & Speed Text
   * ================================================================ */
  .port-label {
    font-size: 10px;
    font-weight: 600;
    color: var(--secondary-text-color);
    text-align: center;
    letter-spacing: 0.3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  .port-speed {
    font-size: 9px;
    font-family: monospace;
    color: var(--secondary-text-color);
    opacity: 0.7;
    text-align: center;
    white-space: nowrap;
  }

  /* ================================================================
   * Compact Mode
   * ================================================================ */
  ha-card:has(.compact) {
    padding: 10px;
  }

  .port-grid.compact {
    gap: 8px 4px;
  }

  .compact .port-body {
    width: 42px;
    height: 34px;
  }

  .compact .port-body.sfp {
    width: 48px;
  }

  .compact .port-socket {
    top: 7px;
    bottom: 6px;
    left: 3px;
    right: 3px;
  }

  .compact .port-pin {
    height: 8px;
  }

  .compact .port-label {
    font-size: 9px;
  }

  .compact .port-speed {
    font-size: 8px;
  }

  /* ================================================================
   * Entity Row Mode (no ha-card wrapper)
   * ================================================================ */
  .port-grid.entity-row {
    padding: 8px 0;
  }
`;
