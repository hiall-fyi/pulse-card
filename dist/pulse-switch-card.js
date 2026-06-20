var I=`
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
`;var R=`${I}
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
`;var z="0.1.1",g="pulse-switch-card",j="pulse-switch-card-editor",H="Pulse Switch Card:";var f={columns:4,show_speed:!1,speed_format:"rx/tx",led_mode:"realistic",avg_packet_size:500,hide_unavailable:!1,tap_action:{action:"more-info"},hold_action:{action:"none"}},S=["scaled","realistic"],k=["rx/tx","rx","total"];var E=class{constructor(t){this._el=t,this._timer=null,this._on=!1,this._currentOnMs=0,this._currentOffMs=0}update(t){if(t<=0){this._stopBlink(),this._setOff();return}let e=1-Math.pow(1-50/1e3,t);if(e>=.95){this._stopBlink(),this._setOn();return}let i=50/e-50;this._ensureBlink(50,i)}updateScaled(t){if(t<=0){this._stopBlink(),this._setOff();return}if(t>=.8){this._stopBlink(),this._setOn();return}let r=1e3/(1+t*11.25),i=Math.min(50,r/2),o=r-i;this._ensureBlink(i,o)}_ensureBlink(t,e){if(!Number.isFinite(t)||!Number.isFinite(e)||t<=0||e<0){this._stopBlink(),this._setOff();return}let r=Math.round(t),i=Math.round(e);if(this._timer&&this._currentOnMs===r&&this._currentOffMs===i)return;this._stopBlink(),this._currentOnMs=r,this._currentOffMs=i;let o=()=>{let l=r*(.8+Math.random()*.4),a=i*(.8+Math.random()*.4);this._setOn(),this._timer=setTimeout(()=>{this._setOff(),this._timer=setTimeout(o,a)},l)};o()}_stopBlink(){this._timer&&(clearTimeout(this._timer),this._timer=null),this._currentOnMs=0,this._currentOffMs=0}_setOn(){this._on||(this._el.style.opacity="1",this._on=!0)}_setOff(){this._el.style.opacity="0",this._on=!1}pause(){this._stopBlink()}destroy(){this._stopBlink(),this._setOff()}};function _(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function T(s){return s==null||s===""?"":String(s).replace(/[;{}]/g,"").replace(/url\s*\(/gi,"").replace(/expression\s*\(/gi,"").replace(/-moz-binding\s*:/gi,"")}function U(s){return(t,...e)=>console.warn(`${s} ${t}`,...e)}var Z=new Set(["unavailable","unknown","error"]);function x(s){return s?Z.has(s.state??""):!0}function L(s){return!isFinite(s)||s<.01?"0":s>=1e3?`${(s/1e3).toFixed(1)}G`:s>=100?Math.round(s).toString():s>=1?s.toFixed(1):s.toFixed(2)}function W(s,t,e){switch(e){case"rx":return`\u2193${L(s)}`;case"total":return L(s+t);default:return`\u2193${L(s)} \u2191${L(t)}`}}function A(s){return/_rx_speed$/.test(s)?s.replace(/_rx_speed$/,"_tx_speed"):null}function B(s,t=500){return s<=0||t<=0?0:s*1e6/(t*8)}function V(s,t,e){if(e<=0)return 0;let r=s-t;return r<0?0:r/e}function $(s,t){if(s.label)return s.label;let e=t?.attributes?.comment;if(e&&e!=="null"&&e!=="")return String(e);let r=t?.attributes?.friendly_name;if(r){let i=String(r).match(/Interfaces?\s+(.+?)\s+(?:RX|TX)\s/i);if(i)return i[1].replace(/[_-]/g," ");let o=String(r).split(" ");return o[o.length-1]}return s.entity}var Q=/bridge|pppoe|vlan|loopback|ovpn|wireguard/i;function F(s){if(s.port_type==="sfp"||s.port_type==="rj45"||s.port_type==="virtual")return s.port_type;let t=s.entity;return/sfp/i.test(t)?"sfp":Q.test(t)?"virtual":"rj45"}function D(s){if(s.icon)return s.icon;let t=s.entity.toLowerCase();return/bridge/.test(t)?"mdi:bridge":/pppoe/.test(t)?"mdi:wan":/vlan/.test(t)?"mdi:lan":/ovpn|wireguard|vpn/.test(t)?"mdi:vpn":/loopback/.test(t)?"mdi:loop":"mdi:network"}function O(s,t){let e=Number(s);return Number.isFinite(e)&&e>0?e:t}var b=U(H);function G(s,t,e){s.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:e}))}function tt(s){if(typeof s!="string"||s.length===0)return!1;let t=s.trim();if(t.startsWith("/")&&!t.startsWith("//")||t.startsWith("./")||t.startsWith("../")||t.startsWith("#"))return!0;try{let e=new URL(t,window.location.href);return["http:","https:","mailto:","tel:"].includes(e.protocol)}catch{return!1}}function et(s){if(typeof s!="string"||s.length===0)return!1;let t=s.trim();return!(t.startsWith("//")||/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(t))}function q(s,t,e,r,i){if(!(!e||e.action==="none"))switch(e.action){case"more-info":G(s,"hass-more-info",{entityId:e.entity||r});break;case"navigate":e.navigation_path&&et(e.navigation_path)?(history.pushState(null,"",e.navigation_path),G(s,"location-changed",{replace:!1})):e.navigation_path&&i("navigation_path rejected \u2014 must be a same-origin relative path: %s",e.navigation_path);break;case"call-service":case"perform-action":{let o=e.service||e.perform_action;if(!o||typeof o!="string")break;let l=o.indexOf(".");if(l<=0||l===o.length-1){i('Service rejected \u2014 expected "domain.service" format, got: %s',o);break}let a=o.slice(0,l),p=o.slice(l+1);t.callService(a,p,e.service_data||e.data).catch(c=>i("Service call %s failed: %O",o,c));break}case"url":e.url_path&&tt(e.url_path)?window.open(e.url_path,"_blank","noopener,noreferrer"):e.url_path&&i("url_path rejected \u2014 only http/https/mailto/tel schemes or relative paths are allowed: %s",e.url_path);break;case"toggle":t.callService("homeassistant","toggle",{entity_id:e.entity||r}).catch(o=>i("Toggle %s failed: %O",e.entity||r,o));break}}function X(s){if(!customElements.get("ha-ripple")||s.querySelector("ha-ripple"))return;let t=document.createElement("ha-ripple");s.appendChild(t),s.classList.add("has-ripple")}var M=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_warnedTxInference=new Set;_portElements={};_activityLeds={};_prevPackets={};_visibilityObserver=null;_visible=!0;_shadow;constructor(){super(),this._shadow=this.attachShadow({mode:"open"});let t=document.createElement("style");t.textContent=R,this._shadow.appendChild(t)}setConfig(t){if(!t||!t.ports||!Array.isArray(t.ports)||t.ports.length===0)throw new Error('Please define at least one port in the "ports" array');for(let e=0;e<t.ports.length;e++)if(!t.ports[e]?.entity)throw new Error(`Port ${e+1} is missing required "entity" field`);t.led_mode!==void 0&&!S.includes(t.led_mode)&&b(`led_mode "${t.led_mode}" is not one of ${S.join(" / ")}. Falling back to "${f.led_mode}".`),t.speed_format!==void 0&&!k.includes(t.speed_format)&&b(`speed_format "${t.speed_format}" is not one of ${k.join(" / ")}. Falling back to "${f.speed_format}".`),this._destroyAllLeds(),this._config={...f,...t,columns:O(t.columns,f.columns),avg_packet_size:O(t.avg_packet_size,f.avg_packet_size),led_mode:S.includes(t.led_mode)?t.led_mode:f.led_mode,speed_format:k.includes(t.speed_format)?t.speed_format:f.speed_format,ports:t.ports.map(e=>({...e,link_speed:O(e.link_speed,1e3)}))},this._prevStates={},this._portElements={},this._prevPackets={},this._hass&&this._fullRender()}set hass(t){if(this._hass=t,!this._config)return;let e=!1;for(let r of this._config.ports){let i=t.states[r.entity],o=r.tx_entity??A(r.entity),l=o?t.states[o]:null,a=this._prevStates[r.entity];if(!a||a.state!==i?.state||a.last_updated!==i?.last_updated||a.txState!==l?.state){e=!0;break}}e&&(Object.keys(this._portElements).length===0?this._fullRender():this._updateAllPorts(),this._cacheStates())}_fullRender(){let t=this._config,e=t.columns??f.columns,r=Math.min(e,2),i=t.layout==="compact"?" ps-compact":"",o=t.entity_row?" entity-row":"",l="";t.title&&(l+=`<div class="ps-panel-title">${_(t.title)}</div>`),l+=`<div class="ps-port-grid${i}${o}" style="--ps-columns:${T(e)};--ps-columns-narrow:${T(r)}">`;let a=t.hide_unavailable===!0;for(let n=0;n<t.ports.length;n++){let h=t.ports[n];if(a&&this._hass){let u=this._hass.states[h.entity];if(x(u))continue}l+=this._renderPortTile(h,n)}l+="</div>";let p=t.entity_row?l:`<ha-card>${l}</ha-card>`;for(let n of[...this._shadow.children])n.tagName!=="STYLE"&&n.remove();let c=document.createElement("template");c.innerHTML=p,this._shadow.appendChild(c.content.cloneNode(!0)),this._destroyAllLeds(),this._portElements={};let d=this._shadow.querySelectorAll(".ps-port-tile");for(let n of d){let h=n.dataset.entity;if(!h)continue;let u=n.querySelector(".ps-port-led.ps-link"),m=n.querySelector(".ps-port-led.ps-activity"),v=n.querySelector(".ps-port-label"),P=n.querySelector(".ps-port-speed"),w=[...n.querySelectorAll(".ps-port-pin")];this._portElements[h]={tile:n,linkLed:u,actLed:m,label:v,speed:P,pins:w},m&&(this._activityLeds[h]=new E(m)),this._bindActions(n,h),X(n)}this._updateAllPorts(),this._cacheStates()}_renderPortTile(t,e){let r=this._config,i=F(t),o=this._hass?.states[t.entity],l=$(t,o),a=r.show_speed===!0,p;if(i==="rj45")p=`
        <div class="ps-port-socket"><div class="ps-port-pins">${Array.from({length:8},()=>'<div class="ps-port-pin"></div>').join("")}</div></div>
        <div class="ps-port-tab"></div>`;else if(i==="sfp")p=`
        <div class="ps-port-cage"><div class="ps-port-cage-edge"></div></div>`;else{let n=D(t);p=`
        <div class="ps-port-virtual-icon"><ha-icon icon="${_(n)}"></ha-icon></div>`}let c=`${_(l)}: loading`,d=`ps-${i}`;return`
      <div class="ps-port-tile" data-entity="${_(t.entity)}" data-index="${e}"
           tabindex="0" role="status" aria-label="${c}">
        <div class="ps-port-body ${d}">
          <div class="ps-port-led ps-link ps-disconnected"></div>
          <div class="ps-port-led ps-activity ps-idle"></div>
          ${p}
        </div>
        <div class="ps-port-label">${_(l)}</div>
        ${a?'<div class="ps-port-speed"></div>':""}
      </div>`}_updateAllPorts(){if(!(!this._config||!this._hass||!this._visible))for(let t of this._config.ports)this._updatePort(t)}_updatePort(t){let e=this._portElements[t.entity];if(!e)return;let r=this._resolvePortState(t),i={connected:"ps-connected",disconnected:"ps-disconnected",disabled:"ps-disabled",unavailable:"ps-unavailable"};for(let[d,n]of Object.entries(i))e.tile.classList.toggle(n,d===r.linkState);let o=e.tile.querySelector(".ps-port-body");if(o){let d={rj45:"ps-rj45",sfp:"ps-sfp",virtual:"ps-virtual"};for(let[n,h]of Object.entries(d))o.classList.toggle(h,n===r.portType);for(let[n,h]of Object.entries(i))o.classList.toggle(h,n===r.linkState)}for(let[d,n]of Object.entries(i))e.linkLed.classList.toggle(n,d===r.linkState);let l=r.totalSpeed>0;e.actLed.classList.toggle("ps-active",l),e.actLed.classList.toggle("ps-idle",!l);let a=this._activityLeds[t.entity];if(a){let d=this._config;r.totalSpeed<=0||r.linkState!=="connected"?a.update(0):d.led_mode==="scaled"?a.updateScaled(r.utilization):a.update(r.pps)}let p=r.linkState==="connected"?"ps-port-pin":"ps-port-pin ps-off";for(let d of e.pins)d.className=p;e.speed&&(e.speed.textContent=r.speedText);let c=r.totalSpeed>0?`, ${r.speedText}`:"";e.tile.setAttribute("aria-label",`${r.label}: ${r.linkState}${c}`)}_resolvePortState(t){let e=this._config,r=this._hass,i=r.states[t.entity],o=t.tx_entity??A(t.entity);e.show_speed&&!o&&!this._warnedTxInference.has(t.entity)&&(b(`show_speed: cannot infer TX entity from "${t.entity}" (expected suffix "_rx_speed"). Set "tx_entity" explicitly on this port, or speed will display rx-only.`),this._warnedTxInference.add(t.entity));let l=o?r.states[o]:null;e.show_speed&&o&&!l&&!this._warnedTxInference.has(o)&&(b(`show_speed: TX entity "${o}" not found in hass.states. Speed will display rx-only.`),this._warnedTxInference.add(o));let a="connected";if(x(i))a="unavailable";else{let N=i.attributes?.disabled,C=i.attributes?.running;N===!0||N==="true"?a="disabled":(C===!1||C==="false")&&(a="disconnected")}let p=a==="unavailable"?0:parseFloat(i?.state)||0,c=a==="unavailable"?0:parseFloat(l?.state??"")||0,d=p+c,n=F(t),h=n==="virtual"?D(t):"",u=$(t,i),m=e.speed_format??f.speed_format,v=d>0?W(p,c,m):"",P=this._computePps(t,d),w=t.link_speed??1e3,Y=w>0?Math.min(d/w,1):0;return{entityId:t.entity,linkState:a,portType:n,virtualIcon:h,rxSpeed:p,txSpeed:c,totalSpeed:d,label:u,speedText:v,pps:P,utilization:Y}}_computePps(t,e){let r=this._config,i=this._hass;if(t.rx_packets||t.tx_packets){let l=t.rx_packets?i.states[t.rx_packets]:null,a=t.tx_packets?i.states[t.tx_packets]:null,p=x(l)?NaN:parseFloat(l?.state??""),c=x(a)?NaN:parseFloat(a?.state??"");if(!isNaN(p)||!isNaN(c)){let d=(isNaN(p)?0:p)+(isNaN(c)?0:c),n=this._prevPackets[t.entity],h=Date.now()/1e3;if(n){let u=h-n.timestamp,m=n.rx+n.tx,v=V(d,m,u);return this._prevPackets[t.entity]={rx:isNaN(p)?0:p,tx:isNaN(c)?0:c,timestamp:h},v}this._prevPackets[t.entity]={rx:isNaN(p)?0:p,tx:isNaN(c)?0:c,timestamp:h}}}let o=r.avg_packet_size??f.avg_packet_size;return B(e,o)}_bindActions(t,e){let r=this._config,i=r.ports.find(u=>u.entity===e);if(!i)return;let o=t.__pulseCleanup;typeof o=="function"&&o();let l=new AbortController,{signal:a}=l,p=null,c=!1;t.__pulseCleanup=()=>{l.abort(),p&&clearTimeout(p),delete t.__pulseCleanup};let d=u=>u==="tap_action"?i.tap_action??r.tap_action??f.tap_action:i.hold_action??r.hold_action??f.hold_action,n=u=>{if(!this._hass)return;let m=d(u);q(t,this._hass,m,e,b)};t.addEventListener("click",u=>{if(u.preventDefault(),c){c=!1;return}n("tap_action")},{signal:a}),t.addEventListener("pointerdown",()=>{c=!1,p=setTimeout(()=>{c=!0,n("hold_action")},500)},{signal:a});let h=()=>{p&&clearTimeout(p)};t.addEventListener("pointerup",h,{signal:a}),t.addEventListener("pointercancel",h,{signal:a}),t.addEventListener("contextmenu",u=>u.preventDefault(),{signal:a}),t.addEventListener("keydown",u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),n("tap_action"))},{signal:a})}_cacheStates(){if(!(!this._config||!this._hass)){this._prevStates={};for(let t of this._config.ports){let e=this._hass.states[t.entity],r=t.tx_entity??A(t.entity),i=r?this._hass.states[r]:null;e&&(this._prevStates[t.entity]={state:e.state,last_updated:e.last_updated,txState:i?.state})}}}_pauseAllLeds(){for(let t of Object.values(this._activityLeds))t.pause()}_resumeAllLeds(){if(!(!this._config||!this._hass))for(let t of this._config.ports)this._updatePort(t)}_destroyAllLeds(){for(let t of Object.values(this._activityLeds))t.destroy();this._activityLeds={}}connectedCallback(){this._config&&this._hass&&Object.keys(this._portElements).length===0&&(this._fullRender(),this._cacheStates()),!(typeof IntersectionObserver>"u")&&(this._visibilityObserver=new IntersectionObserver(([t])=>{let e=this._visible;this._visible=t.isIntersecting,!e&&this._visible?this._resumeAllLeds():e&&!this._visible&&this._pauseAllLeds()},{threshold:0}),this._visibilityObserver.observe(this))}disconnectedCallback(){this._destroyAllLeds();for(let t of Object.keys(this._portElements)){let r=this._portElements[t]?.tile?.__pulseCleanup;typeof r=="function"&&r()}this._portElements={},this._visibilityObserver&&(this._visibilityObserver.disconnect(),this._visibilityObserver=null)}getCardSize(){let t=this._config?.ports?.length||1,e=this._config?.columns||f.columns;return Math.ceil(t/e)+(this._config?.title?1:0)}getGridOptions(){let t=this._config?.ports?.length||1,e=this._config?.columns||f.columns,r=Math.ceil(t/e);return{columns:12,min_columns:3,rows:Math.max(1,r),min_rows:1}}static async getConfigElement(){return await import("./pulse-switch-editor.js"),document.createElement(j)}static getStubConfig(t){let r=Object.keys(t.states).filter(i=>i.startsWith("sensor.")&&i.endsWith("_rx_speed")).slice(0,4).map(i=>({entity:i}));return r.length===0&&r.push({entity:"sensor.example_rx_speed"}),{type:`custom:${g}`,ports:r}}};customElements.get(g)||(customElements.define(g,M),console.info(`%c ${g.toUpperCase()} %c v${z} `,"background:#FFB300;color:#000;font-weight:bold","background:#333;color:#fff"));window.customCards=window.customCards||[];window.customCards.push({type:g,name:"Pulse Switch Card",description:"Network switch front panel with LED indicators",preview:!0});
