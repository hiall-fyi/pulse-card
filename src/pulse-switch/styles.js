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

    /* Card-local design tokens — override via card-mod or HA theme.
       Family-shared concerns live on --pulse-* via SHARED_STYLES. */
    --ps-columns: 4;
    --ps-columns-narrow: 2;
  }

  ha-card {
    overflow: hidden;
    padding: var(--pulse-space-card);
    background: var(--pulse-bg-card);
    container-type: inline-size;
  }

  .ps-panel-title {
    font-size: var(--pulse-font-title);
    font-weight: var(--pulse-weight-medium);
    color: var(--pulse-text-primary);
    padding-bottom: 8px;
  }

  /* ================================================================
   * Port Grid — responsive CSS grid
   * ================================================================ */
  .ps-port-grid {
    display: grid;
    grid-template-columns: repeat(var(--ps-columns), 1fr);
    gap: 12px 8px;
    justify-items: center;
  }

  @container (max-width: 300px) {
    .ps-port-grid {
      grid-template-columns: repeat(var(--ps-columns-narrow), 1fr);
    }
  }

  /* ================================================================
   * Port Tile — wrapper for body + label + speed
   * ================================================================ */
  .ps-port-tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--pulse-space-tight);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  .ps-port-tile:not(.has-ripple):active {
    opacity: 0.8;
  }

  @media (hover: hover) {
    .ps-port-tile:hover .ps-port-body {
      filter: brightness(1.15);
    }
  }

  .ps-port-tile:focus-visible {
    outline: 2px solid var(--pulse-accent);
    outline-offset: 2px;
    border-radius: var(--pulse-radius-small);
  }

  /* State-dependent tile opacity */
  .ps-port-tile.ps-disconnected {
    opacity: 0.4;
  }

  .ps-port-tile.ps-disabled {
    opacity: 0.25;
  }

  .ps-port-tile.ps-unavailable {
    opacity: 0.3;
  }

  /* ================================================================
   * Port Body — 3D metallic shell (shared by all port types)
   * ================================================================ */
  .ps-port-body {
    width: 50px;
    height: 40px;
    background: linear-gradient(180deg, #404040 0%, #2c2c2c 30%, #1a1a1a 100%);
    border: 1px solid rgba(160, 160, 160, 0.35);
    border-radius: var(--pulse-radius-tight);
    position: relative;
    box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(0, 0, 0, 0.3);
  }

  .ps-port-body.ps-disconnected,
  .ps-port-body.ps-disabled,
  .ps-port-body.ps-unavailable {
    border-color: rgba(70, 70, 70, 0.25);
  }

  /* ================================================================
   * RJ45 Port Internals — socket, pins, tab
   * ================================================================ */
  .ps-port-socket {
    position: absolute;
    top: 8px;
    left: 4px;
    right: 4px;
    bottom: 7px;
    background: #0e0e0e;
    border-radius: var(--pulse-radius-bar);
    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.95);
  }

  .ps-port-pins {
    display: flex;
    justify-content: center;
    gap: var(--pulse-space-hairline);
    padding-top: 3px;
  }

  .ps-port-pin {
    width: 2px;
    height: 10px;
    border-radius: 0.5px;
    opacity: 0.65;
    background: #c8a84e;
  }

  .ps-port-pin.ps-off {
    background: #444;
  }

  .ps-port-tab {
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 3px;
    background: rgba(90, 90, 90, 0.3);
    border-radius: var(--pulse-radius-hairline);
  }

  /* ================================================================
   * SFP Port — wider body, cage slot instead of pins
   * ================================================================ */
  .ps-port-body.ps-sfp {
    width: 56px;
  }

  .ps-port-cage {
    position: absolute;
    top: 12px;
    left: 4px;
    right: 4px;
    bottom: 5px;
    background: #0a0a0a;
    border: 1px solid rgba(80, 80, 80, 0.3);
    border-radius: var(--pulse-radius-hairline);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ps-port-cage-edge {
    width: 70%;
    height: 1px;
    background: rgba(120, 120, 120, 0.4);
  }

  /* ================================================================
   * Virtual Port — dashed border, icon, no physical elements
   * ================================================================ */
  .ps-port-body.ps-virtual {
    border-style: dashed;
    border-color: rgba(160, 160, 160, 0.25);
    background: linear-gradient(180deg, rgba(64, 64, 64, 0.6) 0%, rgba(44, 44, 44, 0.6) 30%, rgba(26, 26, 26, 0.6) 100%);
  }

  .ps-port-virtual-icon {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--pulse-text-secondary);
    --mdc-icon-size: 18px;
  }

  /* ================================================================
   * LEDs — link (left) and activity (right)
   * ================================================================ */
  .ps-port-led {
    position: absolute;
    top: 3px;
    width: 7px;
    height: 3px;
    border-radius: var(--pulse-radius-hairline);
    z-index: 5;
    transition: opacity var(--pulse-anim-instant);
  }

  .ps-port-led.ps-link {
    left: 4px;
  }

  .ps-port-led.ps-activity {
    right: 4px;
  }

  /* Link LED states */
  .ps-port-led.ps-link.ps-connected {
    background: #00E676;
    box-shadow: 0 0 4px #00E676, 0 0 8px rgba(0, 230, 118, 0.3);
  }

  .ps-port-led.ps-link.ps-disconnected {
    background: #222;
    border: 1px solid #333;
    box-sizing: border-box;
  }

  .ps-port-led.ps-link.ps-disabled {
    background: #8B0000;
    box-shadow: 0 0 3px rgba(139, 0, 0, 0.5);
  }

  .ps-port-led.ps-link.ps-unavailable {
    background: #222;
    border: 1px solid #333;
    box-sizing: border-box;
  }

  /* Activity LED states */
  .ps-port-led.ps-activity.ps-active {
    background: #FFB300;
    box-shadow: 0 0 4px #FFB300, 0 0 8px rgba(255, 179, 0, 0.3);
  }

  .ps-port-led.ps-activity.ps-idle {
    background: #222;
    border: 1px solid #333;
    box-sizing: border-box;
    opacity: 1;
  }

  /* ================================================================
   * Port Label & Speed Text
   * ================================================================ */
  .ps-port-label {
    font-size: var(--pulse-font-caption);
    font-weight: var(--pulse-weight-semibold);
    color: var(--pulse-text-secondary);
    text-align: center;
    letter-spacing: 0.3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  .ps-port-speed {
    font-size: var(--pulse-font-micro);
    font-family: monospace;
    color: var(--pulse-text-secondary);
    opacity: 0.7;
    text-align: center;
    white-space: nowrap;
  }

  /* ================================================================
   * Compact Mode
   * ================================================================ */
  ha-card:has(.ps-compact) {
    padding: var(--pulse-space-row);
  }

  .ps-port-grid.ps-compact {
    gap: 8px 4px;
  }

  .ps-compact .ps-port-body {
    width: 42px;
    height: 34px;
  }

  .ps-compact .ps-port-body.ps-sfp {
    width: 48px;
  }

  .ps-compact .ps-port-socket {
    top: 7px;
    bottom: 6px;
    left: 3px;
    right: 3px;
  }

  .ps-compact .ps-port-pin {
    height: 8px;
  }

  .ps-compact .ps-port-label {
    font-size: var(--pulse-font-micro);
  }

  .ps-compact .ps-port-speed {
    font-size: 8px;
  }

  /* ================================================================
   * Entity Row Mode (no ha-card wrapper)
   * ================================================================ */
  .ps-port-grid.entity-row {
    padding: 8px 0;
  }
`;
