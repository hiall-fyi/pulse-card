var N=`
/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
 * Pulse Card Family \u2014 Shared Design Tokens
 * \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

:host {
  /* \u2500\u2500 Text \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-text-primary: var(--primary-text-color);
  --pulse-text-secondary: var(--secondary-text-color);
  --pulse-text-disabled: var(--disabled-text-color, var(--secondary-text-color));

  /* \u2500\u2500 Backgrounds \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-bg-card: var(--ha-card-background, var(--card-background-color));
  --pulse-bg-secondary: var(--secondary-background-color);
  --pulse-bg-elevated: color-mix(in srgb, var(--primary-text-color) 4%, transparent);
  --pulse-bg-hover: color-mix(in srgb, var(--primary-color, #03A9F4) 6%, transparent);
  --pulse-bg-selected: color-mix(in srgb, var(--primary-color, #03A9F4) 12%, transparent);

  /* \u2500\u2500 Borders \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-border-divider: var(--divider-color);
  --pulse-border-subtle: color-mix(in srgb, var(--primary-text-color) 4%, transparent);
  --pulse-border-medium: color-mix(in srgb, var(--primary-text-color) 10%, transparent);

  /* \u2500\u2500 Accent \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-accent: var(--primary-color, #03A9F4);

  /* \u2500\u2500 Status \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-status-green: var(--label-badge-green, #4CAF50);
  --pulse-status-red: var(--label-badge-red, #F44336);
  --pulse-status-yellow: var(--label-badge-yellow, #FF9800);

  /* \u2500\u2500 Disabled \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-disabled: var(--disabled-color, #bdbdbd);

  /* \u2500\u2500 Glass Panel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-glass-bg: var(--ha-card-background, var(--card-background-color, rgba(255, 255, 255, 0.75)));
  --pulse-glass-blur: 8px;
  --pulse-glass-border: transparent;

  /* \u2500\u2500 Typography Scale \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-font-title: 16px;
  --pulse-font-body: 14px;
  --pulse-font-label: 11px;
  --pulse-font-caption: 10px;
  --pulse-font-micro: 9px;

  /* \u2500\u2500 Font Weights \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-weight-hero: 100;
  --pulse-weight-light: 300;
  --pulse-weight-regular: 400;
  --pulse-weight-medium: 500;
  --pulse-weight-semibold: 600;

  /* \u2500\u2500 Border Radius \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-radius-card: var(--ha-card-border-radius, 12px);
  --pulse-radius-panel: 14px;
  --pulse-radius-row: 10px;
  --pulse-radius-element: 8px;
  --pulse-radius-small: 4px;
  --pulse-radius-pill: 6px;
  --pulse-radius-bar: 2px;

  /* \u2500\u2500 Spacing \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-space-card: 16px;
  --pulse-space-section: 12px;
  --pulse-space-element: 8px;
  --pulse-space-tight: 4px;
}

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
 * Utility Classes
 * \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

/* Card title \u2014 16px medium weight */
.pulse-title {
  font-size: var(--pulse-font-title);
  font-weight: var(--pulse-weight-medium);
  color: var(--pulse-text-primary);
}

/* Section label \u2014 uppercase, small, secondary */
.pulse-section-label {
  font-size: var(--pulse-font-label);
  font-weight: var(--pulse-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--pulse-text-secondary);
  opacity: 0.7;
}

/* Glass panel \u2014 frosted overlay */
.pulse-glass {
  background: var(--pulse-glass-bg);
  backdrop-filter: blur(var(--pulse-glass-blur));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur));
  border: 1px solid var(--pulse-glass-border);
}

/* Stat value \u2014 light weight, tabular numbers */
.pulse-stat-value {
  font-weight: var(--pulse-weight-light);
  font-variant-numeric: tabular-nums;
}

/* Stat label \u2014 caption size, uppercase */
.pulse-stat-label {
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

/* Interactive base \u2014 pointer, tap-highlight, focus ring */
.pulse-interactive {
  cursor: pointer;
  position: relative;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
}

.pulse-interactive:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
  border-radius: var(--pulse-radius-small);
}

/* Unavailable / disabled state */
.pulse-unavailable {
  opacity: 0.5;
}

/* Hero value \u2014 ultra-thin weight for large numbers (Dark Sky DNA) */
.pulse-hero-value {
  font-weight: var(--pulse-weight-hero, 100);
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

/* Flat stats row \u2014 Dark Sky style, border-top separator */
.pulse-stats-row {
  display: flex;
  justify-content: space-between;
  padding-top: var(--pulse-space-section);
  border-top: 1px solid var(--pulse-border-subtle);
}

.pulse-stats-row .stat {
  flex: 1;
  text-align: center;
}

/* Ultra-muted label */
.pulse-muted-label {
  color: var(--pulse-text-secondary);
  opacity: 0.25;
}

/* Precipitation bar \u2014 Dark Sky signature element */
.pulse-precip-bar {
  height: 32px;
  background: var(--pulse-bg-elevated);
  border-radius: var(--pulse-radius-pill);
  display: flex;
  overflow: hidden;
}

.pulse-precip-slot {
  flex: 1;
  position: relative;
}

.pulse-precip-fill {
  position: absolute;
  bottom: 0;
  left: 1px;
  right: 1px;
  border-radius: 2px 2px 0 0;
  background: #5ac8fa;
}
`;var M=`${N}
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
   * Port Grid \u2014 responsive CSS grid
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
   * Port Tile \u2014 wrapper for body + label + speed
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
   * Port Body \u2014 3D metallic shell (shared by all port types)
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
   * RJ45 Port Internals \u2014 socket, pins, tab
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
   * SFP Port \u2014 wider body, cage slot instead of pins
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
   * Virtual Port \u2014 dashed border, icon, no physical elements
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
   * LEDs \u2014 link (left) and activity (right)
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
`;var D="1.1.0",x="pulse-switch-card",F="pulse-switch-card-editor",I="Pulse Switch Card:";var f={columns:4,show_speed:!1,speed_format:"rx/tx",led_mode:"realistic",avg_packet_size:500,tap_action:{action:"more-info"},hold_action:{action:"none"}};var v=class{constructor(t){this._el=t,this._timer=null,this._on=!1,this._currentOnMs=0,this._currentOffMs=0}update(t){if(t<=0){this._stopBlink(),this._setOff();return}let e=1-Math.pow(1-50/1e3,t);if(e>=.95){this._stopBlink(),this._setOn();return}let i=50/e-50;this._ensureBlink(50,i)}updateScaled(t){if(t<=0){this._stopBlink(),this._setOff();return}if(t>=.8){this._stopBlink(),this._setOn();return}let s=1e3/(1+t*11.25),i=Math.min(50,s/2),p=s-i;this._ensureBlink(i,p)}_ensureBlink(t,e){let s=Math.round(t),i=Math.round(e);if(this._timer&&this._currentOnMs===s&&this._currentOffMs===i)return;this._currentOnMs=s,this._currentOffMs=i,this._stopBlink();let p=()=>{let a=s*(.8+Math.random()*.4),o=i*(.8+Math.random()*.4);this._setOn(),this._timer=setTimeout(()=>{this._setOff(),this._timer=setTimeout(p,o)},a)};p()}_stopBlink(){this._timer&&(clearTimeout(this._timer),this._timer=null),this._currentOnMs=0,this._currentOffMs=0}_setOn(){this._on||(this._el.style.opacity="1",this._on=!0)}_setOff(){this._el.style.opacity="0",this._on=!1}pause(){this._stopBlink()}destroy(){this._stopBlink(),this._setOff()}};function _(r){return String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function y(r){return r==null||r===""?"":String(r).replace(/[;{}]/g,"").replace(/url\s*\(/gi,"").replace(/expression\s*\(/gi,"").replace(/-moz-binding\s*:/gi,"")}function k(r){return!isFinite(r)||r<.01?"0":r>=1e3?`${(r/1e3).toFixed(1)}G`:r>=100?Math.round(r).toString():r>=1?r.toFixed(1):r.toFixed(2)}function R(r,t,e){switch(e){case"rx":return`\u2193${k(r)}`;case"total":return k(r+t);default:return`\u2193${k(r)} \u2191${k(t)}`}}function w(r){return r.replace(/_rx_speed$/,"_tx_speed")}function C(r,t=500){return r<=0||t<=0?0:r*1e6/(t*8)}function z(r,t,e){if(e<=0)return 0;let s=r-t;return s<0?0:s/e}function E(r,t){if(r.label)return r.label;let e=t?.attributes?.comment;if(e&&e!=="null"&&e!=="")return String(e);let s=t?.attributes?.friendly_name;if(s){let i=String(s).match(/Interfaces?\s+(.+?)\s+(?:RX|TX)\s/i);if(i)return i[1].replace(/[_-]/g," ");let p=String(s).split(" ");return p[p.length-1]}return r.entity}var G=/bridge|pppoe|vlan|loopback|ovpn|wireguard/i;function L(r){if(r.port_type==="sfp"||r.port_type==="rj45"||r.port_type==="virtual")return r.port_type;let t=r.entity;return/sfp/i.test(t)?"sfp":G.test(t)?"virtual":"rj45"}function A(r){if(r.icon)return r.icon;let t=r.entity.toLowerCase();return/bridge/.test(t)?"mdi:bridge":/pppoe/.test(t)?"mdi:wan":/vlan/.test(t)?"mdi:lan":/ovpn|wireguard|vpn/.test(t)?"mdi:vpn":/loopback/.test(t)?"mdi:loop":"mdi:network"}function B(r,...t){console.warn(`${I} ${r}`,...t)}function H(r,t,e){r.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:e}))}function j(r,t,e,s,i){if(!(!e||e.action==="none"))switch(e.action){case"more-info":H(r,"hass-more-info",{entityId:e.entity||s});break;case"navigate":e.navigation_path&&(history.pushState(null,"",e.navigation_path),H(r,"location-changed",{replace:!1}));break;case"call-service":case"perform-action":{let p=e.service||e.perform_action;if(!p)break;let[a,o]=p.split(".");t.callService(a,o,e.service_data||e.data).catch(n=>i("Service call %s failed: %O",p,n));break}case"url":e.url_path&&window.open(e.url_path,"_blank","noopener,noreferrer");break;case"toggle":t.callService("homeassistant","toggle",{entity_id:e.entity||s}).catch(p=>i("Toggle %s failed: %O",e.entity||s,p));break}}function U(r){if(!customElements.get("ha-ripple")||r.querySelector("ha-ripple"))return;let t=document.createElement("ha-ripple");r.appendChild(t),r.classList.add("has-ripple")}var T=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_portElements={};_activityLeds={};_prevPackets={};_visibilityObserver=null;_visible=!0;_shadow;constructor(){super(),this._shadow=this.attachShadow({mode:"open"});let t=document.createElement("style");t.textContent=M,this._shadow.appendChild(t)}setConfig(t){if(!t||!t.ports||!Array.isArray(t.ports)||t.ports.length===0)throw new Error('Please define at least one port in the "ports" array');for(let e=0;e<t.ports.length;e++)if(!t.ports[e]?.entity)throw new Error(`Port ${e+1} is missing required "entity" field`);this._destroyAllLeds(),this._config={...f,...t,ports:t.ports},this._prevStates={},this._portElements={},this._prevPackets={},this._hass&&this._fullRender()}set hass(t){if(this._hass=t,!this._config)return;let e=!1;for(let s of this._config.ports){let i=t.states[s.entity],p=w(s.entity),a=t.states[p],o=this._prevStates[s.entity];if(!o||o.state!==i?.state||o.last_updated!==i?.last_updated||o.txState!==a?.state){e=!0;break}}e&&(Object.keys(this._portElements).length===0?this._fullRender():this._updateAllPorts(),this._cacheStates())}_fullRender(){let t=this._config,e=t.columns??f.columns,s=Math.min(e,2),i=t.layout==="compact"?" compact":"",p=t.entity_row?" entity-row":"",a="";t.title&&(a+=`<div class="panel-title">${_(t.title)}</div>`),a+=`<div class="port-grid${i}${p}" style="--panel-columns:${y(e)};--panel-columns-narrow:${y(s)}">`;for(let l=0;l<t.ports.length;l++)a+=this._renderPortTile(t.ports[l],l);a+="</div>";let o=t.entity_row?a:`<ha-card>${a}</ha-card>`;for(let l of[...this._shadow.children])l.tagName!=="STYLE"&&l.remove();let n=document.createElement("template");n.innerHTML=o,this._shadow.appendChild(n.content.cloneNode(!0)),this._destroyAllLeds(),this._portElements={};let c=this._shadow.querySelectorAll(".port-tile");for(let l of c){let u=l.dataset.entity;if(!u)continue;let h=l.querySelector(".port-led.link"),d=l.querySelector(".port-led.activity"),b=l.querySelector(".port-label"),m=l.querySelector(".port-speed"),S=[...l.querySelectorAll(".port-pin")];this._portElements[u]={tile:l,linkLed:h,actLed:d,label:b,speed:m,pins:S},d&&(this._activityLeds[u]=new v(d)),this._bindActions(l,u),U(l)}this._updateAllPorts(),this._cacheStates()}_renderPortTile(t,e){let s=this._config,i=L(t),p=this._hass?.states[t.entity],a=E(t,p),o=s.show_speed===!0,n;if(i==="rj45")n=`
        <div class="port-socket"><div class="port-pins">${Array.from({length:8},()=>'<div class="port-pin"></div>').join("")}</div></div>
        <div class="port-tab"></div>`;else if(i==="sfp")n=`
        <div class="port-cage"><div class="port-cage-edge"></div></div>`;else{let l=A(t);n=`
        <div class="port-virtual-icon"><ha-icon icon="${_(l)}"></ha-icon></div>`}let c=`${_(a)}: loading`;return`
      <div class="port-tile" data-entity="${_(t.entity)}" data-index="${e}"
           tabindex="0" role="status" aria-label="${c}">
        <div class="port-body ${i}">
          <div class="port-led link disconnected"></div>
          <div class="port-led activity idle"></div>
          ${n}
        </div>
        <div class="port-label">${_(a)}</div>
        ${o?'<div class="port-speed"></div>':""}
      </div>`}_updateAllPorts(){if(!(!this._config||!this._hass||!this._visible))for(let t of this._config.ports)this._updatePort(t)}_updatePort(t){let e=this._portElements[t.entity];if(!e)return;let s=this._resolvePortState(t);e.tile.className=`port-tile ${s.linkState}`;let i=e.tile.querySelector(".port-body");i&&(i.className=`port-body ${s.portType} ${s.linkState}`),e.linkLed.className=`port-led link ${s.linkState}`;let p=s.totalSpeed>0?"active":"idle";e.actLed.className=`port-led activity ${p}`;let a=this._activityLeds[t.entity];if(a){let c=this._config;s.totalSpeed<=0||s.linkState!=="connected"?a.update(0):c.led_mode==="scaled"?a.updateScaled(s.utilization):a.update(s.pps)}let o=s.linkState==="connected"?"port-pin":"port-pin off";for(let c of e.pins)c.className=o;e.speed&&(e.speed.textContent=s.speedText);let n=s.totalSpeed>0?`, ${s.speedText}`:"";e.tile.setAttribute("aria-label",`${s.label}: ${s.linkState}${n}`)}_resolvePortState(t){let e=this._config,s=this._hass,i=s.states[t.entity],p=w(t.entity),a=s.states[p],o="connected";if(!i||i.state==="unavailable"||i.state==="unknown")o="unavailable";else{let O=i.attributes?.disabled,$=i.attributes?.running;O===!0||O==="true"?o="disabled":($===!1||$==="false")&&(o="disconnected")}let n=o==="unavailable"?0:parseFloat(i?.state)||0,c=o==="unavailable"?0:parseFloat(a?.state)||0,l=n+c,u=L(t),h=u==="virtual"?A(t):"",d=E(t,i),b=e.speed_format??f.speed_format,m=l>0?R(n,c,b):"",S=this._computePps(t,l),P=t.link_speed??1e3,V=P>0?Math.min(l/P,1):0;return{entityId:t.entity,linkState:o,portType:u,virtualIcon:h,rxSpeed:n,txSpeed:c,totalSpeed:l,label:d,speedText:m,pps:S,utilization:V}}_computePps(t,e){let s=this._config,i=this._hass;if(t.rx_packets||t.tx_packets){let a=t.rx_packets?i.states[t.rx_packets]:null,o=t.tx_packets?i.states[t.tx_packets]:null,n=a&&a.state!=="unavailable"?parseFloat(a.state):NaN,c=o&&o.state!=="unavailable"?parseFloat(o.state):NaN;if(!isNaN(n)||!isNaN(c)){let l=(isNaN(n)?0:n)+(isNaN(c)?0:c),u=this._prevPackets[t.entity],h=Date.now()/1e3;if(u){let d=h-u.timestamp,b=u.rx+u.tx,m=z(l,b,d);return this._prevPackets[t.entity]={rx:isNaN(n)?0:n,tx:isNaN(c)?0:c,timestamp:h},m}this._prevPackets[t.entity]={rx:isNaN(n)?0:n,tx:isNaN(c)?0:c,timestamp:h}}}let p=s.avg_packet_size??f.avg_packet_size;return C(e,p)}_bindActions(t,e){let s=this._config,i=s.ports.find(d=>d.entity===e);if(!i)return;let p=t.__pulseCleanup;typeof p=="function"&&p();let a=new AbortController,{signal:o}=a,n=null,c=!1;t.__pulseCleanup=()=>{a.abort(),n&&clearTimeout(n),delete t.__pulseCleanup};let l=d=>d==="tap_action"?i.tap_action??s.tap_action??f.tap_action:i.hold_action??s.hold_action??f.hold_action,u=d=>{if(!this._hass)return;let b=l(d);j(t,this._hass,b,e,B)};t.addEventListener("click",d=>{if(d.preventDefault(),c){c=!1;return}u("tap_action")},{signal:o}),t.addEventListener("pointerdown",()=>{c=!1,n=setTimeout(()=>{c=!0,u("hold_action")},500)},{signal:o});let h=()=>{n&&clearTimeout(n)};t.addEventListener("pointerup",h,{signal:o}),t.addEventListener("pointercancel",h,{signal:o}),t.addEventListener("contextmenu",d=>d.preventDefault(),{signal:o}),t.addEventListener("keydown",d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),u("tap_action"))},{signal:o})}_cacheStates(){if(!(!this._config||!this._hass)){this._prevStates={};for(let t of this._config.ports){let e=this._hass.states[t.entity],s=w(t.entity),i=this._hass.states[s];e&&(this._prevStates[t.entity]={state:e.state,last_updated:e.last_updated,txState:i?.state})}}}_pauseAllLeds(){for(let t of Object.values(this._activityLeds))t.pause()}_resumeAllLeds(){if(!(!this._config||!this._hass))for(let t of this._config.ports)this._updatePort(t)}_destroyAllLeds(){for(let t of Object.values(this._activityLeds))t.destroy();this._activityLeds={}}connectedCallback(){this._config&&this._hass&&Object.keys(this._portElements).length===0&&(this._fullRender(),this._cacheStates()),!(typeof IntersectionObserver>"u")&&(this._visibilityObserver=new IntersectionObserver(([t])=>{let e=this._visible;this._visible=t.isIntersecting,!e&&this._visible?this._resumeAllLeds():e&&!this._visible&&this._pauseAllLeds()},{threshold:0}),this._visibilityObserver.observe(this))}disconnectedCallback(){this._destroyAllLeds();for(let t of Object.keys(this._portElements)){let s=this._portElements[t]?.tile?.__pulseCleanup;typeof s=="function"&&s()}this._portElements={},this._visibilityObserver&&(this._visibilityObserver.disconnect(),this._visibilityObserver=null)}getCardSize(){let t=this._config?.ports?.length||1,e=this._config?.columns||f.columns;return Math.ceil(t/e)+(this._config?.title?1:0)}getGridOptions(){let t=this._config?.ports?.length||1,e=this._config?.columns||f.columns,s=Math.ceil(t/e);return{columns:12,min_columns:3,rows:Math.max(1,s),min_rows:1}}static async getConfigElement(){return await import("./pulse-switch-editor.js"),document.createElement(F)}static getStubConfig(t){let s=Object.keys(t.states).filter(i=>i.startsWith("sensor.")&&i.endsWith("_rx_speed")).slice(0,4).map(i=>({entity:i}));return s.length===0&&s.push({entity:"sensor.example_rx_speed"}),{type:`custom:${x}`,ports:s}}};customElements.get(x)||(customElements.define(x,T),console.info(`%c ${x.toUpperCase()} %c v${D} `,"background:#FFB300;color:#000;font-weight:bold","background:#333;color:#fff"));window.customCards=window.customCards||[];window.customCards.push({type:x,name:"Pulse Switch Card",description:"Network switch front panel with LED indicators",preview:!0});
