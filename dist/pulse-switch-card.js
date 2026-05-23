var R=`
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
  --pulse-status-blue: var(--label-badge-blue, #2196F3);

  /* \u2500\u2500 Info / Disabled \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-info-color: var(--info-color, #5AC8FA);
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
  --pulse-weight-thin: 200;
  --pulse-weight-light: 300;
  --pulse-weight-regular: 400;
  --pulse-weight-medium: 500;
  --pulse-weight-semibold: 600;

  /* \u2500\u2500 Extended typography scale \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-font-display: 64px;        /* Weather hero temp; future Climate display numbers */
  --pulse-font-hero: 32px;           /* Climate radial centre; secondary hero */
  --pulse-font-summary: 24px;        /* summary stat numbers (home-status, ranking) */
  --pulse-font-large: 20px;          /* large hero-adjacent numbers (zone pulse, home-status label) */
  --pulse-font-stat: 18px;           /* mid-emphasis stat values (flow temp, home-status zone actual) */
  --pulse-font-section-title: 17px;  /* Weather pw-status-label equivalent */
  --pulse-font-kicker: 12px;         /* uppercase top-of-section labels */

  /* \u2500\u2500 Letter-spacing scale \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-ls-display: -1.5px;
  --pulse-ls-hero: -1px;
  --pulse-ls-title: -0.8px;
  --pulse-ls-kicker: 0.32em;
  --pulse-ls-micro: 0.14em;

  /* \u2500\u2500 Tier colours (Apple system, promoted from Weather) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-tier-calm: #5ac8fa;
  --pulse-tier-moderate: #30d158;
  --pulse-tier-strong: #ff9f0a;
  --pulse-tier-gale: #ff453a;

  /* \u2500\u2500 Border Radius \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-radius-card: var(--ha-card-border-radius, 12px);
  --pulse-radius-cartouche: 24px;            /* outer frame on Climate hearth + Weather cartouche */
  --pulse-radius-panel: 14px;
  --pulse-radius-row: 10px;
  --pulse-radius-element: 8px;
  --pulse-radius-pill: 6px;
  --pulse-radius-small: 4px;
  --pulse-radius-tight: 3px;                 /* state tags, slim chips */
  --pulse-radius-bar: 2px;
  --pulse-radius-hairline: 1px;              /* sub-pixel cells, day arc, slot bars */
  --pulse-radius-circle: 50%;                /* dots, donut centres, circular markers */

  /* \u2500\u2500 Spacing \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-space-card-wide: 20px;     /* weather chrome \u2014 wider inset for hero/cartouche layouts */
  --pulse-space-card: 16px;          /* card-edge padding, section margins */
  --pulse-space-panel: 14px;         /* glass-panel inner pad, cartouche inset */
  --pulse-space-section: 12px;       /* between section blocks */
  --pulse-space-row: 10px;           /* between row items */
  --pulse-space-element: 8px;        /* between elements within a row */
  --pulse-space-chip: 6px;           /* chip gap, dense flex gap */
  --pulse-space-tight: 4px;          /* labels, status tags */
  --pulse-space-hairline: 2px;       /* sub-pixel cell gaps, micro padding */
  --pulse-space-pin: 1px;            /* one-pixel anchor offsets */

  /* \u2500\u2500 Animation timing \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-anim-instant: 0.05s;     /* flash, sub-frame feedback */
  --pulse-anim-fast: 0.15s;        /* hover backgrounds, ripple onset */
  --pulse-anim-base: 0.2s;         /* default colour / opacity transitions */
  --pulse-anim-medium: 0.25s;      /* transform / font-size easing */
  --pulse-anim-mode: 0.3s;         /* mode swap, max-height reveal */
  --pulse-anim-slow: 0.35s;        /* expand panels, large transitions */
  --pulse-anim-color: 0.4s;        /* slow colour cross-fade */
  --pulse-anim-reveal: 0.6s;       /* bar-width fills, sparkline grow */
  --pulse-anim-fill: 0.8s;         /* heating bar width grow */
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

/* Section label \u2014 uppercase, small, secondary tone.
   No opacity multiplier: --pulse-text-secondary is already the dimmed token,
   stacking 0.7 on top dropped light-theme contrast below WCAG-large threshold. */
.pulse-section-label {
  font-size: var(--pulse-font-label);
  font-weight: var(--pulse-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--pulse-text-secondary);
}

/* Glass panel \u2014 frosted overlay */
.pulse-glass {
  background: var(--pulse-glass-bg);
  backdrop-filter: blur(var(--pulse-glass-blur));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur));
  border: 1px solid var(--pulse-glass-border);
}

/* Stats row \u2014 grid layout primitive shared across the Pulse card
   family. Children are stat tiles emitted by each card's own type
   builder (e.g. pulse-weather's pt.stat). The row controls only
   layout: column count, divider, gap, margin.
   - data-cols: "3" | "4" \u2014 column count (default 4)
   - data-divided: "true" \u2014 adds a 1px hairline at the top so the row
     reads as a footer rather than a flush block. */
.pulse-stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--pulse-space-tight) var(--pulse-space-element);
  margin-top: var(--pulse-space-section);
}
.pulse-stats-row[data-cols="3"] { grid-template-columns: repeat(3, 1fr); }
.pulse-stats-row[data-divided="true"] {
  padding-top: var(--pulse-space-section);
  border-top: 1px solid var(--pulse-border-subtle);
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
  border-radius: var(--pulse-radius-bar) var(--pulse-radius-bar) 0 0;
  background: var(--pulse-info-color);
}
`;var z=`${R}
  /* ================================================================
   * Host & Card Shell
   * ================================================================ */
  :host {
    display: block;

    /* Card-local design tokens \u2014 override via card-mod or HA theme.
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
   * Port Grid \u2014 responsive CSS grid
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
   * Port Tile \u2014 wrapper for body + label + speed
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
   * Port Body \u2014 3D metallic shell (shared by all port types)
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
   * RJ45 Port Internals \u2014 socket, pins, tab
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
   * SFP Port \u2014 wider body, cage slot instead of pins
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
   * Virtual Port \u2014 dashed border, icon, no physical elements
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
   * LEDs \u2014 link (left) and activity (right)
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
`;var I="0.1.1",g="pulse-switch-card",C="pulse-switch-card-editor",j="Pulse Switch Card:";var f={columns:4,show_speed:!1,speed_format:"rx/tx",led_mode:"realistic",avg_packet_size:500,hide_unavailable:!1,tap_action:{action:"more-info"},hold_action:{action:"none"}},w=["scaled","realistic"],k=["rx/tx","rx","total"];var S=class{constructor(e){this._el=e,this._timer=null,this._on=!1,this._currentOnMs=0,this._currentOffMs=0}update(e){if(e<=0){this._stopBlink(),this._setOff();return}let t=1-Math.pow(1-50/1e3,e);if(t>=.95){this._stopBlink(),this._setOn();return}let i=50/t-50;this._ensureBlink(50,i)}updateScaled(e){if(e<=0){this._stopBlink(),this._setOff();return}if(e>=.8){this._stopBlink(),this._setOn();return}let r=1e3/(1+e*11.25),i=Math.min(50,r/2),o=r-i;this._ensureBlink(i,o)}_ensureBlink(e,t){if(!Number.isFinite(e)||!Number.isFinite(t)||e<=0||t<0){this._stopBlink(),this._setOff();return}let r=Math.round(e),i=Math.round(t);if(this._timer&&this._currentOnMs===r&&this._currentOffMs===i)return;this._stopBlink(),this._currentOnMs=r,this._currentOffMs=i;let o=()=>{let l=r*(.8+Math.random()*.4),n=i*(.8+Math.random()*.4);this._setOn(),this._timer=setTimeout(()=>{this._setOff(),this._timer=setTimeout(o,n)},l)};o()}_stopBlink(){this._timer&&(clearTimeout(this._timer),this._timer=null),this._currentOnMs=0,this._currentOffMs=0}_setOn(){this._on||(this._el.style.opacity="1",this._on=!0)}_setOff(){this._el.style.opacity="0",this._on=!1}pause(){this._stopBlink()}destroy(){this._stopBlink(),this._setOff()}};function _(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function E(s){return s==null||s===""?"":String(s).replace(/[;{}]/g,"").replace(/url\s*\(/gi,"").replace(/expression\s*\(/gi,"").replace(/-moz-binding\s*:/gi,"")}function T(s){return!isFinite(s)||s<.01?"0":s>=1e3?`${(s/1e3).toFixed(1)}G`:s>=100?Math.round(s).toString():s>=1?s.toFixed(1):s.toFixed(2)}function H(s,e,t){switch(t){case"rx":return`\u2193${T(s)}`;case"total":return T(s+e);default:return`\u2193${T(s)} \u2191${T(e)}`}}function L(s){return/_rx_speed$/.test(s)?s.replace(/_rx_speed$/,"_tx_speed"):null}function B(s,e=500){return s<=0||e<=0?0:s*1e6/(e*8)}function V(s,e,t){if(t<=0)return 0;let r=s-e;return r<0?0:r/t}function P(s,e){if(s.label)return s.label;let t=e?.attributes?.comment;if(t&&t!=="null"&&t!=="")return String(t);let r=e?.attributes?.friendly_name;if(r){let i=String(r).match(/Interfaces?\s+(.+?)\s+(?:RX|TX)\s/i);if(i)return i[1].replace(/[_-]/g," ");let o=String(r).split(" ");return o[o.length-1]}return s.entity}var Y=/bridge|pppoe|vlan|loopback|ovpn|wireguard/i;function F(s){if(s.port_type==="sfp"||s.port_type==="rj45"||s.port_type==="virtual")return s.port_type;let e=s.entity;return/sfp/i.test(e)?"sfp":Y.test(e)?"virtual":"rj45"}function $(s){if(s.icon)return s.icon;let e=s.entity.toLowerCase();return/bridge/.test(e)?"mdi:bridge":/pppoe/.test(e)?"mdi:wan":/vlan/.test(e)?"mdi:lan":/ovpn|wireguard|vpn/.test(e)?"mdi:vpn":/loopback/.test(e)?"mdi:loop":"mdi:network"}function A(s,e){let t=Number(s);return Number.isFinite(t)&&t>0?t:e}function x(s,...e){console.warn(`${j} ${s}`,...e)}function U(s,e,t){s.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:t}))}function Z(s){if(typeof s!="string"||s.length===0)return!1;let e=s.trim();if(e.startsWith("/")&&!e.startsWith("//")||e.startsWith("./")||e.startsWith("../")||e.startsWith("#"))return!0;try{let t=new URL(e,window.location.href);return["http:","https:","mailto:","tel:"].includes(t.protocol)}catch{return!1}}function J(s){if(typeof s!="string"||s.length===0)return!1;let e=s.trim();return!(e.startsWith("//")||/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(e))}function W(s,e,t,r,i){if(!(!t||t.action==="none"))switch(t.action){case"more-info":U(s,"hass-more-info",{entityId:t.entity||r});break;case"navigate":t.navigation_path&&J(t.navigation_path)?(history.pushState(null,"",t.navigation_path),U(s,"location-changed",{replace:!1})):t.navigation_path&&i("navigation_path rejected \u2014 must be a same-origin relative path: %s",t.navigation_path);break;case"call-service":case"perform-action":{let o=t.service||t.perform_action;if(!o||typeof o!="string")break;let l=o.indexOf(".");if(l<=0||l===o.length-1){i('Service rejected \u2014 expected "domain.service" format, got: %s',o);break}let n=o.slice(0,l),p=o.slice(l+1);e.callService(n,p,t.service_data||t.data).catch(c=>i("Service call %s failed: %O",o,c));break}case"url":t.url_path&&Z(t.url_path)?window.open(t.url_path,"_blank","noopener,noreferrer"):t.url_path&&i("url_path rejected \u2014 only http/https/mailto/tel schemes or relative paths are allowed: %s",t.url_path);break;case"toggle":e.callService("homeassistant","toggle",{entity_id:t.entity||r}).catch(o=>i("Toggle %s failed: %O",t.entity||r,o));break}}function G(s){if(!customElements.get("ha-ripple")||s.querySelector("ha-ripple"))return;let e=document.createElement("ha-ripple");s.appendChild(e),s.classList.add("has-ripple")}var N=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_warnedTxInference=new Set;_portElements={};_activityLeds={};_prevPackets={};_visibilityObserver=null;_visible=!0;_shadow;constructor(){super(),this._shadow=this.attachShadow({mode:"open"});let e=document.createElement("style");e.textContent=z,this._shadow.appendChild(e)}setConfig(e){if(!e||!e.ports||!Array.isArray(e.ports)||e.ports.length===0)throw new Error('Please define at least one port in the "ports" array');for(let t=0;t<e.ports.length;t++)if(!e.ports[t]?.entity)throw new Error(`Port ${t+1} is missing required "entity" field`);e.led_mode!==void 0&&!w.includes(e.led_mode)&&x(`led_mode "${e.led_mode}" is not one of ${w.join(" / ")}. Falling back to "${f.led_mode}".`),e.speed_format!==void 0&&!k.includes(e.speed_format)&&x(`speed_format "${e.speed_format}" is not one of ${k.join(" / ")}. Falling back to "${f.speed_format}".`),this._destroyAllLeds(),this._config={...f,...e,columns:A(e.columns,f.columns),avg_packet_size:A(e.avg_packet_size,f.avg_packet_size),led_mode:w.includes(e.led_mode)?e.led_mode:f.led_mode,speed_format:k.includes(e.speed_format)?e.speed_format:f.speed_format,ports:e.ports.map(t=>({...t,link_speed:A(t.link_speed,1e3)}))},this._prevStates={},this._portElements={},this._prevPackets={},this._hass&&this._fullRender()}set hass(e){if(this._hass=e,!this._config)return;let t=!1;for(let r of this._config.ports){let i=e.states[r.entity],o=r.tx_entity??L(r.entity),l=o?e.states[o]:null,n=this._prevStates[r.entity];if(!n||n.state!==i?.state||n.last_updated!==i?.last_updated||n.txState!==l?.state){t=!0;break}}t&&(Object.keys(this._portElements).length===0?this._fullRender():this._updateAllPorts(),this._cacheStates())}_fullRender(){let e=this._config,t=e.columns??f.columns,r=Math.min(t,2),i=e.layout==="compact"?" ps-compact":"",o=e.entity_row?" entity-row":"",l="";e.title&&(l+=`<div class="ps-panel-title">${_(e.title)}</div>`),l+=`<div class="ps-port-grid${i}${o}" style="--ps-columns:${E(t)};--ps-columns-narrow:${E(r)}">`;let n=e.hide_unavailable===!0;for(let a=0;a<e.ports.length;a++){let h=e.ports[a];if(n&&this._hass){let d=this._hass.states[h.entity];if(!d||d.state==="unavailable"||d.state==="unknown")continue}l+=this._renderPortTile(h,a)}l+="</div>";let p=e.entity_row?l:`<ha-card>${l}</ha-card>`;for(let a of[...this._shadow.children])a.tagName!=="STYLE"&&a.remove();let c=document.createElement("template");c.innerHTML=p,this._shadow.appendChild(c.content.cloneNode(!0)),this._destroyAllLeds(),this._portElements={};let u=this._shadow.querySelectorAll(".ps-port-tile");for(let a of u){let h=a.dataset.entity;if(!h)continue;let d=a.querySelector(".ps-port-led.ps-link"),m=a.querySelector(".ps-port-led.ps-activity"),b=a.querySelector(".ps-port-label"),O=a.querySelector(".ps-port-speed"),y=[...a.querySelectorAll(".ps-port-pin")];this._portElements[h]={tile:a,linkLed:d,actLed:m,label:b,speed:O,pins:y},m&&(this._activityLeds[h]=new S(m)),this._bindActions(a,h),G(a)}this._updateAllPorts(),this._cacheStates()}_renderPortTile(e,t){let r=this._config,i=F(e),o=this._hass?.states[e.entity],l=P(e,o),n=r.show_speed===!0,p;if(i==="rj45")p=`
        <div class="ps-port-socket"><div class="ps-port-pins">${Array.from({length:8},()=>'<div class="ps-port-pin"></div>').join("")}</div></div>
        <div class="ps-port-tab"></div>`;else if(i==="sfp")p=`
        <div class="ps-port-cage"><div class="ps-port-cage-edge"></div></div>`;else{let a=$(e);p=`
        <div class="ps-port-virtual-icon"><ha-icon icon="${_(a)}"></ha-icon></div>`}let c=`${_(l)}: loading`,u=`ps-${i}`;return`
      <div class="ps-port-tile" data-entity="${_(e.entity)}" data-index="${t}"
           tabindex="0" role="status" aria-label="${c}">
        <div class="ps-port-body ${u}">
          <div class="ps-port-led ps-link ps-disconnected"></div>
          <div class="ps-port-led ps-activity ps-idle"></div>
          ${p}
        </div>
        <div class="ps-port-label">${_(l)}</div>
        ${n?'<div class="ps-port-speed"></div>':""}
      </div>`}_updateAllPorts(){if(!(!this._config||!this._hass||!this._visible))for(let e of this._config.ports)this._updatePort(e)}_updatePort(e){let t=this._portElements[e.entity];if(!t)return;let r=this._resolvePortState(e),i={connected:"ps-connected",disconnected:"ps-disconnected",disabled:"ps-disabled",unavailable:"ps-unavailable"};for(let[u,a]of Object.entries(i))t.tile.classList.toggle(a,u===r.linkState);let o=t.tile.querySelector(".ps-port-body");if(o){let u={rj45:"ps-rj45",sfp:"ps-sfp",virtual:"ps-virtual"};for(let[a,h]of Object.entries(u))o.classList.toggle(h,a===r.portType);for(let[a,h]of Object.entries(i))o.classList.toggle(h,a===r.linkState)}for(let[u,a]of Object.entries(i))t.linkLed.classList.toggle(a,u===r.linkState);let l=r.totalSpeed>0;t.actLed.classList.toggle("ps-active",l),t.actLed.classList.toggle("ps-idle",!l);let n=this._activityLeds[e.entity];if(n){let u=this._config;r.totalSpeed<=0||r.linkState!=="connected"?n.update(0):u.led_mode==="scaled"?n.updateScaled(r.utilization):n.update(r.pps)}let p=r.linkState==="connected"?"ps-port-pin":"ps-port-pin ps-off";for(let u of t.pins)u.className=p;t.speed&&(t.speed.textContent=r.speedText);let c=r.totalSpeed>0?`, ${r.speedText}`:"";t.tile.setAttribute("aria-label",`${r.label}: ${r.linkState}${c}`)}_resolvePortState(e){let t=this._config,r=this._hass,i=r.states[e.entity],o=e.tx_entity??L(e.entity);t.show_speed&&!o&&!this._warnedTxInference.has(e.entity)&&(x(`show_speed: cannot infer TX entity from "${e.entity}" (expected suffix "_rx_speed"). Set "tx_entity" explicitly on this port, or speed will display rx-only.`),this._warnedTxInference.add(e.entity));let l=o?r.states[o]:null;t.show_speed&&o&&!l&&!this._warnedTxInference.has(o)&&(x(`show_speed: TX entity "${o}" not found in hass.states. Speed will display rx-only.`),this._warnedTxInference.add(o));let n="connected";if(!i||i.state==="unavailable"||i.state==="unknown")n="unavailable";else{let D=i.attributes?.disabled,M=i.attributes?.running;D===!0||D==="true"?n="disabled":(M===!1||M==="false")&&(n="disconnected")}let p=n==="unavailable"?0:parseFloat(i?.state)||0,c=n==="unavailable"?0:parseFloat(l?.state??"")||0,u=p+c,a=F(e),h=a==="virtual"?$(e):"",d=P(e,i),m=t.speed_format??f.speed_format,b=u>0?H(p,c,m):"",O=this._computePps(e,u),y=e.link_speed??1e3,X=y>0?Math.min(u/y,1):0;return{entityId:e.entity,linkState:n,portType:a,virtualIcon:h,rxSpeed:p,txSpeed:c,totalSpeed:u,label:d,speedText:b,pps:O,utilization:X}}_computePps(e,t){let r=this._config,i=this._hass;if(e.rx_packets||e.tx_packets){let l=e.rx_packets?i.states[e.rx_packets]:null,n=e.tx_packets?i.states[e.tx_packets]:null,p=l&&l.state!=="unavailable"?parseFloat(l.state):NaN,c=n&&n.state!=="unavailable"?parseFloat(n.state):NaN;if(!isNaN(p)||!isNaN(c)){let u=(isNaN(p)?0:p)+(isNaN(c)?0:c),a=this._prevPackets[e.entity],h=Date.now()/1e3;if(a){let d=h-a.timestamp,m=a.rx+a.tx,b=V(u,m,d);return this._prevPackets[e.entity]={rx:isNaN(p)?0:p,tx:isNaN(c)?0:c,timestamp:h},b}this._prevPackets[e.entity]={rx:isNaN(p)?0:p,tx:isNaN(c)?0:c,timestamp:h}}}let o=r.avg_packet_size??f.avg_packet_size;return B(t,o)}_bindActions(e,t){let r=this._config,i=r.ports.find(d=>d.entity===t);if(!i)return;let o=e.__pulseCleanup;typeof o=="function"&&o();let l=new AbortController,{signal:n}=l,p=null,c=!1;e.__pulseCleanup=()=>{l.abort(),p&&clearTimeout(p),delete e.__pulseCleanup};let u=d=>d==="tap_action"?i.tap_action??r.tap_action??f.tap_action:i.hold_action??r.hold_action??f.hold_action,a=d=>{if(!this._hass)return;let m=u(d);W(e,this._hass,m,t,x)};e.addEventListener("click",d=>{if(d.preventDefault(),c){c=!1;return}a("tap_action")},{signal:n}),e.addEventListener("pointerdown",()=>{c=!1,p=setTimeout(()=>{c=!0,a("hold_action")},500)},{signal:n});let h=()=>{p&&clearTimeout(p)};e.addEventListener("pointerup",h,{signal:n}),e.addEventListener("pointercancel",h,{signal:n}),e.addEventListener("contextmenu",d=>d.preventDefault(),{signal:n}),e.addEventListener("keydown",d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),a("tap_action"))},{signal:n})}_cacheStates(){if(!(!this._config||!this._hass)){this._prevStates={};for(let e of this._config.ports){let t=this._hass.states[e.entity],r=e.tx_entity??L(e.entity),i=r?this._hass.states[r]:null;t&&(this._prevStates[e.entity]={state:t.state,last_updated:t.last_updated,txState:i?.state})}}}_pauseAllLeds(){for(let e of Object.values(this._activityLeds))e.pause()}_resumeAllLeds(){if(!(!this._config||!this._hass))for(let e of this._config.ports)this._updatePort(e)}_destroyAllLeds(){for(let e of Object.values(this._activityLeds))e.destroy();this._activityLeds={}}connectedCallback(){this._config&&this._hass&&Object.keys(this._portElements).length===0&&(this._fullRender(),this._cacheStates()),!(typeof IntersectionObserver>"u")&&(this._visibilityObserver=new IntersectionObserver(([e])=>{let t=this._visible;this._visible=e.isIntersecting,!t&&this._visible?this._resumeAllLeds():t&&!this._visible&&this._pauseAllLeds()},{threshold:0}),this._visibilityObserver.observe(this))}disconnectedCallback(){this._destroyAllLeds();for(let e of Object.keys(this._portElements)){let r=this._portElements[e]?.tile?.__pulseCleanup;typeof r=="function"&&r()}this._portElements={},this._visibilityObserver&&(this._visibilityObserver.disconnect(),this._visibilityObserver=null)}getCardSize(){let e=this._config?.ports?.length||1,t=this._config?.columns||f.columns;return Math.ceil(e/t)+(this._config?.title?1:0)}getGridOptions(){let e=this._config?.ports?.length||1,t=this._config?.columns||f.columns,r=Math.ceil(e/t);return{columns:12,min_columns:3,rows:Math.max(1,r),min_rows:1}}static async getConfigElement(){return await import("./pulse-switch-editor.js"),document.createElement(C)}static getStubConfig(e){let r=Object.keys(e.states).filter(i=>i.startsWith("sensor.")&&i.endsWith("_rx_speed")).slice(0,4).map(i=>({entity:i}));return r.length===0&&r.push({entity:"sensor.example_rx_speed"}),{type:`custom:${g}`,ports:r}}};customElements.get(g)||(customElements.define(g,N),console.info(`%c ${g.toUpperCase()} %c v${I} `,"background:#FFB300;color:#000;font-weight:bold","background:#333;color:#fff"));window.customCards=window.customCards||[];window.customCards.push({type:g,name:"Pulse Switch Card",description:"Network switch front panel with LED indicators",preview:!0});
