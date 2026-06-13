var Gt=`
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
`;var uo=`${Gt}
  :host {
    display: block;

    /* Card-local design tokens \u2014 override via card-mod or HA theme.
       Family-shared concerns live on --pulse-* via SHARED_STYLES. */
    --pb-columns: 1;
    --pb-track-opacity: 0.12;
    --pb-animation-speed: var(--pulse-anim-fill);
  }

  ha-card {
    overflow: hidden;
    padding: var(--pulse-space-card);
    background: var(--pulse-bg-card);
    container-type: inline-size;
  }

  .pb-card {
    display: flex;
    flex-direction: column;
    gap: var(--pulse-space-element, 12px);
  }

  /* Multi-column grid \u2014 responsive: auto-collapse on narrow screens */
  .pb-card[class*="columns-"] {
    display: grid;
    grid-template-columns: repeat(var(--pb-columns), 1fr);
    gap: var(--pulse-space-element, 16px);
  }

  @container (max-width: 300px) {
    .pb-card[class*="columns-"] {
      grid-template-columns: 1fr;
    }
  }

  /* Bar row \u2014 each entity */
  .pb-row {
    display: flex;
    flex-direction: column;
    gap: var(--pulse-space-chip);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  /* Labels row (outside mode \u2014 default) */
  .pb-labels {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2px;
  }

  .pb-label-left, .pb-label-right {
    display: flex;
    align-items: center;
    gap: var(--pulse-space-chip);
  }

  .pb-label-left {
    flex: 1;
    min-width: 0;
    overflow: hidden;
  }

  .pb-name {
    font-size: var(--pulse-font-body);
    color: var(--pulse-text-primary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .pb-value {
    font-size: var(--pulse-font-body);
    font-weight: var(--pulse-weight-medium);
    color: var(--pulse-text-primary);
    white-space: nowrap;
  }

  /* Bar container */
  .pb-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    container-type: size;
  }

  /* Track (background) */
  .pb-track {
    position: absolute;
    inset: 0;
    background: var(--pulse-accent);
    opacity: var(--pb-track-opacity);
    border-radius: inherit;
  }

  /* Fill */
  .pb-fill {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: var(--pulse-accent);
    border-radius: inherit;
    transition: width var(--pb-animation-speed) ease,
                background-color var(--pulse-anim-mode) ease;
  }

  /* Content overlay (classic/inside mode) */
  .pb-content {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    height: 100%;
    z-index: 3;
    /* Auto-scale font to bar height: 30% of container, clamped 10px\u201316px */
    font-size: var(--pulse-font-body, clamp(10px, 40cqh, 16px));
  }

  /* Target marker \u2014 visually distinct from fill */
  .pb-target {
    position: absolute;
    top: -1px;
    bottom: -1px;
    width: 2px;
    background: var(--pulse-text-primary);
    opacity: 0.6;
    border-radius: var(--pulse-radius-hairline);
    z-index: 2;
    pointer-events: none;
    box-shadow: 0 0 0 1px var(--pulse-bg-card);
  }

  /* Target label */
  .pb-target-label {
    position: absolute;
    top: -18px;
    left: 50%;
    transform: translateX(-50%);
    font-size: var(--pulse-font-caption);
    font-weight: var(--pulse-weight-medium);
    color: var(--pulse-text-primary);
    white-space: nowrap;
    pointer-events: none;
    opacity: 0.7;
  }

  /* Indicator */
  .pb-indicator {
    font-size: var(--pulse-font-kicker);
    font-weight: var(--pulse-weight-medium);
    color: var(--pb-indicator-color);
  }
  .pb-indicator.up { color: var(--pb-indicator-color, var(--pulse-status-green)); }
  .pb-indicator.down { color: var(--pb-indicator-color, var(--pulse-status-red)); }
  .pb-indicator.neutral { color: var(--pb-indicator-color, var(--pulse-text-secondary)); }

  /* Inverted indicator \u2014 up is bad, down is good (CPU, memory, disk usage) */
  .pb-indicator.inverted.up { color: var(--pb-indicator-color, var(--pulse-status-red)); }
  .pb-indicator.inverted.down { color: var(--pb-indicator-color, var(--pulse-status-green)); }

  /* Icon */
  .pb-icon {
    --mdc-icon-size: 1.3em;
    font-size: var(--pulse-font-body);
    color: var(--pulse-text-secondary);
    flex-shrink: 0;
    display: flex;
    align-items: center;
    line-height: 0;
  }
  .pb-content .pb-icon {
    color: var(--pulse-text-primary);
  }

  /* Unavailable state */
  .pb-row.unavailable .pb-fill {
    background: var(--pulse-disabled) !important;
    width: 100% !important;
    opacity: 0.2;
  }
  .pb-row.unavailable .pb-name,
  .pb-row.unavailable .pb-value {
    opacity: 0.5;
  }

  /* Charge animation */
  @keyframes pb-charge {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.75; }
  }
  .pb-fill.charge {
    animation: pb-charge 2s ease-in-out infinite;
  }

  /* Entity row mode */
  .entity-row {
    padding: 8px 0;
  }

  /* Title \u2014 adds layout padding on top of shared typography. */
  .pulse-title { padding-bottom: 4px; }

  /* Hover feedback */
  .pb-row:not(.has-ripple):active {
    opacity: 0.8;
  }
  @media (hover: hover) {
    .pb-row:hover .pb-fill {
      filter: brightness(1.1);
    }
  }

  /* Keyboard focus indicator */
  .pb-row:focus-visible {
    outline: 2px solid var(--pulse-accent);
    outline-offset: 2px;
    border-radius: var(--pulse-radius-small);
  }

  /* Secondary info group \u2014 wraps name + secondary line */
  .pb-name-group {
    display: flex;
    flex-direction: column;
    min-width: 0;
    gap: var(--pulse-space-pin);
  }

  /* Secondary info text */
  .pb-secondary {
    font-size: 0.75em;
    opacity: 0.85;
    color: var(--pulse-text-secondary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Inside bar \u2014 inherit text color from parent, reduce opacity */
  .pb-content .pb-secondary {
    color: inherit;
    opacity: 0.6;
  }

  /* Sparkline overlay */
  .pb-sparkline {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50%;
    z-index: 1;
    pointer-events: none;
    opacity: 0.45;
    color: var(--pb-sparkline-color, var(--pulse-text-primary));
  }
  .pb-sparkline path {
    vector-effect: non-scaling-stroke;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* Interactive slider bars */
  .pb-row[data-interactive] .pb-container {
    touch-action: none;
    cursor: pointer;
  }
  .pb-row[data-interactive].sliding .pb-container {
    cursor: grabbing;
  }
  .pb-row[data-interactive].sliding .pb-fill {
    transition: none;
  }

  /* Step buttons for interactive bars */
  .pb-step-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    min-width: 28px;
    height: 100%;
    cursor: pointer;
    opacity: 0.6;
    color: var(--pulse-text-primary);
    font-size: var(--pulse-font-stat);
    font-weight: var(--pulse-weight-medium);
    user-select: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
    position: relative;
    overflow: hidden;
    transition: opacity var(--pulse-anim-fast);
  }
  .pb-step-btn:hover {
    opacity: 1;
  }
  .pb-step-btn:not(.has-ripple):active {
    opacity: 0.4;
  }

  /* Interactive bar row layout \u2014 pb-container between step buttons */
  .pb-row[data-interactive] .pb-interactive-row {
    display: flex;
    align-items: stretch;
    gap: var(--pulse-space-hairline);
  }
  .pb-row[data-interactive] .pb-interactive-row .pb-container {
    flex: 1;
    min-width: 0;
  }

  /* Compact mode */
  ha-card:has(.compact) {
    padding: var(--pulse-space-row);
  }
  .pb-card.compact {
    gap: var(--pulse-space-element, 6px);
  }
  .compact .pb-row {
    gap: var(--pulse-space-tight);
  }
  .compact .pb-labels {
    padding: 0;
  }
  .compact .pb-name {
    font-size: var(--pulse-font-body, 12px);
  }
  .compact .pb-value {
    font-size: var(--pulse-font-body, 12px);
  }
  .compact .pb-indicator {
    font-size: var(--pulse-font-caption);
  }

  /* Reduced motion \u2014 respect prefers-reduced-motion */
  @media (prefers-reduced-motion: reduce) {
    .pb-fill.charge { animation: none; }
    .pb-fill, .pb-row { transition: none; }
  }
`;var ho="1.7.0",mo="Pulse Card:",tt={min:0,max:100,height:"8px",border_radius:"4px",decimal:null,entity_row:!1,complementary:!1,limit_value:!1,columns:1,animation:{state:"on",speed:.8,effect:"none"},positions:{icon:"off",name:"outside",value:"outside",indicator:"off"},tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}};function m(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function k(t){return t==null||t===""?"":String(t).replace(/[;{}]/g,"").replace(/url\s*\(/gi,"").replace(/expression\s*\(/gi,"").replace(/-moz-binding\s*:/gi,"")}function et(t,e,i){return Math.min(Math.max(t,e),i)}var kn=32;function xt(t){if(t==null||t==="")return"";let e=String(t);if(e.length>kn)return e;let i=e.split(".");if(i.length>2)return e;for(let n of i){if(n.length===0)return e;for(let o=0;o<n.length;o++){let r=n.charCodeAt(o);if(r<48||r>57)return e}}return`${e}px`}function at(){return typeof window>"u"?!1:window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches??!1}function O(t,e=1){return t==null?"--":typeof t!="number"?String(t):isFinite(t)?String(parseFloat(t.toFixed(e))):"--"}function nt(t){return`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`}function Zt(t){return(e,...i)=>console.warn(`${t} ${e}`,...i)}var Tn=new Set(["unavailable","unknown","error"]);function U(t){return t?Tn.has(t.state??""):!0}var we=0;function Kt(t="pulse-id"){return we=we+1>>>0,`${t}-${we.toString(36)}`}var jt="Pulse sparkline:";async function Ft(t,e,i=24){let n={};if(!t?.callWS||e.length===0)return n;let o=new Date,r=new Date(o.getTime()-i*60*60*1e3);try{let a=await t.callWS({type:"history/history_during_period",start_time:r.toISOString(),end_time:o.toISOString(),entity_ids:e,minimal_response:!0,significant_changes_only:!0});for(let s of e)try{let l=a?.[s];if(!l||l.length<2){n[s]=[];continue}let c=[];for(let d of l){let u=parseFloat(d.s);if(!isNaN(u)){let h=d.lu??d.last_updated,p=typeof h=="number"?h*1e3:new Date(h).getTime();isFinite(p)&&c.push({t:p,v:u})}}n[s]=c}catch(l){console.warn(`${jt} parse failed for %s: %O`,s,l),n[s]=[]}}catch(a){console.warn(`${jt} fetch failed: %O`,a);for(let s of e)n[s]=[]}return n}async function go(t,e,i=24){let n={};if(!t?.callWS||e.length===0)return n;let o=new Date,r=new Date(o.getTime()-i*60*60*1e3);try{let a=await t.callWS({type:"history/history_during_period",start_time:r.toISOString(),end_time:o.toISOString(),entity_ids:e,minimal_response:!0,significant_changes_only:!1});for(let s of e)try{let l=a?.[s];if(!Array.isArray(l)||l.length===0){n[s]=[];continue}let c=[];for(let d of l){let u=d.lu??d.last_updated,h=typeof u=="number"?u*1e3:new Date(u).getTime();if(!isFinite(h))continue;let p=String(d.s??d.state??"").toLowerCase(),f="idle";p==="heat"||p==="heating"?f="heating":p==="cool"||p==="cooling"?f="cooling":p==="off"&&(f="off");let v=f==="heating"||f==="cooling"?50:0;c.push({t:h,state:f,power:v})}n[s]=c}catch(l){console.warn(`${jt} state-history parse failed for %s: %O`,s,l),n[s]=[]}}catch(a){console.warn(`${jt} state-history fetch failed: %O`,a);for(let s of e)n[s]=[]}return n}var fo={avg:t=>t.reduce((e,i)=>e+i,0)/t.length,min:t=>Math.min(...t),max:t=>Math.max(...t),median:t=>{let e=[...t].sort((n,o)=>n-o),i=Math.floor(e.length/2);return e.length%2?e[i]:(e[i-1]+e[i])/2},first:t=>t[0],last:t=>t[t.length-1],sum:t=>t.reduce((e,i)=>e+i,0),delta:t=>Math.max(...t)-Math.min(...t),diff:t=>t[t.length-1]-t[0]};function An(t,e,i="avg"){if(t.length===0||e<1)return[];if(t.length<=e){let u=t[0].t,h=t[t.length-1].t-u||1;return t.map(p=>({x:(p.t-u)/h,v:p.v}))}let n=fo[i]||fo.avg,o=t[0].t,s=(t[t.length-1].t-o||1)/e,l=[],c=0,d=t[0].v;for(let u=0;u<e;u++){let h=o+(u+1)*s,p=[];for(;c<t.length&&t[c].t<h;)p.push(t[c].v),c++;p.length>0&&(d=n(p)),l.push({x:u/(e-1||1),v:d})}return l}function $t(t,e,i,n=24,o="avg",r=!0){if(t.length<2)return"";let a=An(t,n,o);if(a.length<2)return"";let s=a[0].v,l=a[0].v;for(let p=1;p<a.length;p++)a[p].v<s&&(s=a[p].v),a[p].v>l&&(l=a[p].v);let c=l-s||1,d=2,u=i-d*2,h=a.map(p=>({x:p.x*e,y:d+u-(p.v-s)/c*u}));return xe(h,r)}function xe(t,e=!0){if(!t||t.length<2)return"";if(t.length===2||!e){let o=`M${t[0].x.toFixed(1)},${t[0].y.toFixed(1)}`;for(let r=1;r<t.length;r++)o+=`L${t[r].x.toFixed(1)},${t[r].y.toFixed(1)}`;return o}let i=t[0],n=`M${i.x.toFixed(1)},${i.y.toFixed(1)}`;for(let o=1;o<t.length;o++){let r=t[o],a=(i.x+r.x)/2,s=(i.y+r.y)/2;n+=` ${a.toFixed(1)},${s.toFixed(1)}`,n+=` Q${r.x.toFixed(1)},${r.y.toFixed(1)}`,i=r}return n+=` ${i.x.toFixed(1)},${i.y.toFixed(1)}`,n}function Nt(t){if(typeof t!="string")return null;let e=t.trim().replace(/^#/,"");return e.length===3&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),e.length!==6||/[^0-9a-f]/i.test(e)?null:{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16)}}function vo(t,e,i){return{r:Math.round(t.r+(e.r-t.r)*i),g:Math.round(t.g+(e.g-t.g)*i),b:Math.round(t.b+(e.b-t.b)*i)}}function bo(t,e,i){let n=Nt(t),o=Nt(e);if(!n||!o)return"";let{r,g:a,b:s}=vo(n,o,i);return`rgb(${r}, ${a}, ${s})`}function _o(t,e,i){let n=Nt(t),o=Nt(e);if(!n||!o)return t;let{r,g:a,b:s}=vo(n,o,i);return`#${r.toString(16).padStart(2,"0")}${a.toString(16).padStart(2,"0")}${s.toString(16).padStart(2,"0")}`}var Cn=new Set(["on","open","home","locked","playing","active"]),In=new Set(["off","closed","not_home","unlocked","idle","paused","standby"]);function wo(t,e,i){if(typeof t!="string")return null;let n=t.toLowerCase();return Cn.has(n)?i:In.has(n)?e:null}function zn(t,e){let i=String(t),n=i.charAt(0).toUpperCase()+i.slice(1);return e?`${n}${e}`:n}function Mn(t,e,i,n=!1){let o=wo(t,e,i),r=o!==null?o:parseFloat(t);if(isNaN(r))return 0;let a=i-e;if(a<=0)return 0;let s=n?i-r:r;return et((s-e)/a,0,1)*100}function En(t,e){if(!e||e.length===0)return null;let i=parseFloat(t);if(isNaN(i))return null;for(let n of e)if(i>=n.from&&i<=n.to)return n;return null}function Ln(t,e,i){return bo(t,e,i)}function Hn(t,e){if(!e||e.length<2)return null;let i=parseFloat(t);if(isNaN(i))return null;let n=e[0].from<=e[e.length-1].from?e:[...e].sort((o,r)=>o.from-r.from);for(let o=0;o<n.length-1;o++){let r=n[o],a=n[o+1];if(i>=r.from&&i<=a.to){let s=a.from-r.from,l=s>0?(i-r.from)/s:0;return Ln(r.color,a.color,et(l,0,1))}}return i<=n[0].from?n[0].color:n[n.length-1].color}function Fn(t,e,i){let n=t.min??i?.min,o=t.max??i?.max;return n==null&&(n=e?.attributes?.min??e?.attributes?.min_temp??tt.min),o==null&&(o=e?.attributes?.max??e?.attributes?.max_temp??tt.max),{min:parseFloat(String(n)),max:parseFloat(String(o))}}function Xt(t,e,i){return t.decimal??e.decimal??i?.entities?.[t.entity]?.display_precision??null}function St(t,e){return t.unit_of_measurement??e?.attributes?.unit_of_measurement??""}function Nn(t){return!isFinite(t)||t<0?"0":t>=1e9?`${(t/1e9).toFixed(1)}G`:t>=1e6?`${(t/1e6).toFixed(1)}M`:t>=1e3?`${(t/1e3).toFixed(1)}K`:t.toString()}function Dn(t,e,i){let n=parseFloat(t);if(isNaN(n))return String(t);let o=e!=null?n.toFixed(e):n.toString();return i?`${o}${i}`:o}function xo(t,e){if(e==null)return{direction:"neutral",delta:0};let i=parseFloat(t),n=parseFloat(e);if(isNaN(i)||isNaN(n))return{direction:"neutral",delta:0};if(!isFinite(i)||!isFinite(n))return{direction:"neutral",delta:0};let o=Math.abs(i-n),r=Math.max(Math.abs(i),1);if(o>r*1e3)return{direction:"neutral",delta:0};let a=Math.round((i-n)*100)/100;return{direction:a>0?"up":a<0?"down":"neutral",delta:a}}function $e(t,e,i,n,o){let r=t==="up"?"\u25B2":t==="down"?"\u25BC":"\u25B6";if(!i)return{arrow:r,text:r};let a=n!=null?e.toFixed(n):String(Math.round(e*100)/100),s=e>0?"+":"";return{arrow:r,text:`${r} ${s}${a}${o||""}`}}var lt=Zt(mo);async function $o(t,e,i=60){let n={};if(!t?.callWS||e.length===0)return n;let o=new Date,r=new Date(o.getTime()-i*60*1e3);try{let a=await t.callWS({type:"history/history_during_period",start_time:r.toISOString(),end_time:o.toISOString(),entity_ids:e,minimal_response:!0,significant_changes_only:!0});for(let s of e){let l=a?.[s];if(!l||l.length===0){n[s]=null;continue}let c=parseFloat(l[0].s);n[s]=isNaN(c)?null:c}}catch(a){lt("Failed to fetch history for %s: %O",e.join(", "),a);for(let s of e)n[s]=null}return n}function yo(t){return!Array.isArray(t)||t.length<2?t:[...t].sort((e,i)=>e.from-i.from)}function So(t){if(!t)throw new Error("Please define an entity or entities");if(!t.entity&&!t.entities)throw new Error("Please define an entity or entities");let e={...tt,...t,animation:{...tt.animation,...t.animation},positions:{...tt.positions,...t.positions}};e.columns!==null&&e.columns!==void 0&&(e.columns=Number(e.columns)||1),e.animation.speed!==null&&e.animation.speed!==void 0&&(e.animation.speed=Number(e.animation.speed)||tt.animation.speed),e.severity&&(e.severity=yo(e.severity)),e.indicator?.show===!0&&e.positions.indicator==="off"&&(e.positions={...e.positions,indicator:"outside"}),e.entities=t.entities?t.entities.map(n=>{let o=typeof n=="string"?{entity:n}:{...n};return o.severity&&(o.severity=yo(o.severity)),!o.secondary_info&&e.secondary_info&&(o._cardSecondaryInfo=e.secondary_info),o.indicator?.show===!0&&o.positions&&o.positions.indicator==="off"?o.positions={...o.positions,indicator:"outside"}:o.indicator?.show===!0&&!o.positions?.indicator&&(o.positions={...o.positions||{},indicator:"outside"}),o}):[{entity:t.entity}];let i=new Set;for(let n of e.entities)i.has(n.entity)&&lt('Duplicate entity "%s" in config \u2014 only the last bar will update dynamically',n.entity),i.add(n.entity);return e}function Yt(t,e){if(t==null)return{value:null,showLabel:!1};if(typeof t=="number")return{value:isNaN(t)?null:t,showLabel:!1};if(typeof t=="string"){let i=e?.states[t];if(!i)return{value:null,showLabel:!1};let n=parseFloat(i.state);return{value:isNaN(n)?null:n,showLabel:!1}}return typeof t=="object"&&t.value!==void 0?{value:Yt(t.value,e).value,showLabel:t.show_label===!0}:{value:null,showLabel:!1}}function Se(t,e,i){let n=i?.states[t.entity],o=U(n),{min:r,max:a}=Fn(t,n,e),s=t.attribute?n?.attributes?.[t.attribute]:n?.state,l=t.attribute?null:wo(s,r,a),c=l!==null,d=c?l:parseFloat(s),u=t.complementary??e.complementary,h=o?0:Mn(s,r,a,u),p=St(t,n),f=Xt(t,e,i),_=(t.limit_value??e.limit_value)&&!isNaN(d)?et(d,r,a):s,g=o?"Unavailable":t.state_map?.[s]?t.state_map[s]:c?zn(s,p):Dn(_,f,p),b=t.name??n?.attributes?.friendly_name??t.entity,y="",x="";if(!o){let I=t.state_color,z=n?.state;if(I&&z&&I[z])y=I[z];else{let L=t.attribute_color??e.attribute_color;if(L?.attribute&&L?.map){let $=n?.attributes?.[L.attribute];if($!=null){let w=L.map[String($)];w&&(y=w)}}if(!y){let $=t.severity??e.severity;if($&&$.length>0)if($.some(T=>T.mode==="gradient")){let T=Hn(d,$);T&&(y=T)}else{let T=En(d,$);T&&(y=T.color,T.icon&&(x=T.icon))}}}}let S=y||t.color||e.color||"",A=t.icon||n?.attributes?.icon||"";return{isUnavailable:o,min:r,max:a,numValue:d,fill:h,displayValue:g,name:b,color:S,resolvedIcon:x||A}}function kt(t,e){let i=t.bar_width??e.bar_width;return i!=null?Math.max(1,Math.min(100,i))/100:1}function ke(t,e){if(!t.visibility)return!0;let i=e?.states[t.entity];if(!i)return!1;let n=t.visibility,o=t.attribute?i.attributes?.[t.attribute]:i.state;if(!t.attribute&&U(i))return n.state_equal!==void 0&&String(n.state_equal)===i.state;let r=parseFloat(o);return!(n.state_above!==void 0&&(isNaN(r)||r<=n.state_above)||n.state_below!==void 0&&(isNaN(r)||r>=n.state_below)||n.state_equal!==void 0&&String(o)!==String(n.state_equal)||n.state_not_equal!==void 0&&String(o)===String(n.state_not_equal))}var ko={input_number:{service:"set_value",dataKey:"value"},number:{service:"set_value",dataKey:"value"},light:{service:"turn_on",dataKey:"brightness_pct",fixedRange:{min:0,max:100,step:1}},cover:{service:"set_cover_position",dataKey:"position",fixedRange:{min:0,max:100,step:1}},fan:{service:"set_percentage",dataKey:"percentage",fixedRange:{min:0,max:100,step:1}},media_player:{service:"volume_set",dataKey:"volume_level",transform:t=>t/100,fixedRange:{min:0,max:100,step:1}},climate:{service:"set_temperature",dataKey:"temperature"}};function Jt(t,e,i,n){if(n<=0)return et(t,e,i);let o=Math.round((t-e)/n)*n+e,r=(String(n).split(".")[1]||"").length,a=Number(o.toFixed(r));return et(a,e,i)}function To(t,e,i){if(i?.service){let a=i.service.split(".");if(a.length<2||!a[0]||!a[1])return null;let s={entity_id:t};if(i.data)for(let[l,c]of Object.entries(i.data))s[l]=c==="$value"?e:c;return{domain:a[0],service:a[1],data:s}}let n=t.split(".")[0],o=ko[n];if(!o)return null;let r=o.transform?o.transform(e):e;return{domain:n,service:o.service,data:{entity_id:t,[o.dataKey]:r}}}function Dt(t,e,i,n){let o=t.split(".")[0],a=ko[o]?.fixedRange,s=e?.attributes,l=n?.min??s?.min??s?.min_temp??a?.min??0,c=n?.max??s?.max??s?.max_temp??a?.max??100,d=i?.step??s?.step??s?.target_temp_step??s?.percentage_step??a?.step??1;return{min:Number(l),max:Number(c),step:Number(d)||1}}function Rn(t){if(!t)return"";let e=new Date(t).getTime();if(isNaN(e))return"";let i=Date.now()-e;if(i<0)return"just now";let n=Math.floor(i/1e3);if(n<60)return"just now";let o=Math.floor(n/60);if(o<60)return`${o} min ago`;let r=Math.floor(o/60);return r<24?`${r}h ago`:`${Math.floor(r/24)}d ago`}function Te(t,e){let i=t.secondary_info??t._cardSecondaryInfo;if(!i)return"";if(i.text!==void 0&&i.text!==null&&i.text!=="")return String(i.text);let n=e?.states[t.entity];if(!n)return"";if(i.template)return i.template.replace(/\{(\w+)\}/g,(o,r)=>{let a=n.attributes?.[r];return a==null?"":(r==="bytes"||r==="packets")&&typeof a=="number"?Nn(a):String(a)});if(i.attribute){let o=n.attributes?.[i.attribute];return o!=null?String(o):""}return i.type==="last_changed"?Rn(n.last_changed):""}function Qt(t,e,i){t.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:i}))}function Pn(t){if(typeof t!="string"||t.length===0)return!1;let e=t.trim();if(e.startsWith("/")&&!e.startsWith("//")||e.startsWith("./")||e.startsWith("../")||e.startsWith("#"))return!0;try{let i=new URL(e,window.location.href);return["http:","https:","mailto:","tel:"].includes(i.protocol)}catch{return!1}}function qn(t){if(typeof t!="string"||t.length===0)return!1;let e=t.trim();return!(e.startsWith("//")||/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(e))}function Tt(t,e,i,n,o){if(!(!i||i.action==="none"))switch(i.action){case"more-info":Qt(t,"hass-more-info",{entityId:i.entity||n});break;case"navigate":i.navigation_path&&qn(i.navigation_path)?(history.pushState(null,"",i.navigation_path),Qt(t,"location-changed",{replace:!1})):i.navigation_path&&o("navigation_path rejected \u2014 must be a same-origin relative path: %s",i.navigation_path);break;case"call-service":case"perform-action":{let r=i.service||i.perform_action;if(!r||typeof r!="string")break;let a=r.indexOf(".");if(a<=0||a===r.length-1){o('Service rejected \u2014 expected "domain.service" format, got: %s',r);break}let s=r.slice(0,a),l=r.slice(a+1);e.callService(s,l,i.service_data||i.data).catch(c=>o("Service call %s failed: %O",r,c));break}case"url":i.url_path&&Pn(i.url_path)?window.open(i.url_path,"_blank","noopener,noreferrer"):i.url_path&&o("url_path rejected \u2014 only http/https/mailto/tel schemes or relative paths are allowed: %s",i.url_path);break;case"toggle":e.callService("homeassistant","toggle",{entity_id:i.entity||n}).catch(r=>o("Toggle %s failed: %O",i.entity||n,r));break}}function On(t,e,i){let n=e?.[t],o=i?.[t];return n||o||{action:t==="tap_action"?"more-info":"none"}}function te(t,e,i,n,o){let r=On(o,n,i);Tt(t,e,r,n.entity,lt)}function Ce(t){let e=t.__pulseCleanup;typeof e=="function"&&e()}function Ao(t,e,i,n,o){Ce(t);let r=new AbortController,{signal:a}=r,s=0,l=null,c=null,d=!1;t.__pulseCleanup=()=>{r.abort(),l&&clearTimeout(l),c&&clearTimeout(c),delete t.__pulseCleanup},t.setAttribute("tabindex","0"),t.addEventListener("keydown",h=>{(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),e._hass&&te(e,e._hass,n,o,"tap_action"))},{signal:a}),t.addEventListener("click",h=>{if(h.preventDefault(),d){d=!1;return}t.__pulseSliding||(s++,s===1?l=setTimeout(()=>{s=0,e._hass&&te(e,e._hass,n,o,"tap_action")},250):s===2&&(l&&clearTimeout(l),s=0,e._hass&&te(e,e._hass,n,o,"double_tap_action")))},{signal:a}),t.addEventListener("pointerdown",()=>{d=!1,c=setTimeout(()=>{d=!0,e._hass&&te(e,e._hass,n,o,"hold_action")},500)},{signal:a});let u=()=>{c&&clearTimeout(c)};t.addEventListener("pointerup",u,{signal:a}),t.addEventListener("pointercancel",u,{signal:a}),t.addEventListener("contextmenu",h=>h.preventDefault(),{signal:a})}var Bn=50;function Ie(t){let e=t.__pulseSliderCleanup;typeof e=="function"&&e()}function Co(t,e,i,n){Ie(t);let o=t.querySelector(".pb-container");if(!o)return;let r=o,a=new AbortController,{signal:s}=a,l=null;t.__pulseSliderCleanup=()=>{a.abort(),l&&clearTimeout(l),v&&clearInterval(v),delete t.__pulseSliderCleanup};let c=typeof n.interactive=="object"?n.interactive:typeof i.interactive=="object"?i.interactive:void 0,d=null;function u(b){let y=r.getBoundingClientRect(),x=Math.max(0,Math.min(b-y.left,y.width)),S=y.width>0?x/y.width:0,M=e._hass?.states[n.entity],{min:I,max:z,step:L}=Dt(n.entity,M,c,n),$=I+S*(z-I);return Jt($,I,z,L)}function h(b){let x=e._hass?.states[n.entity],{min:S,max:A,step:M}=Dt(n.entity,x,c,n),I=A-S,z=I>0?(b-S)/I*100:0,L=r.querySelector(".pb-fill");L&&(L.style.width=`${z}%`);let $=St(n,x),w=(String(M).split(".")[1]||"").length,T=w>0?b.toFixed(w):String(Math.round(b)),E=$?`${T}${$}`:T,q=t.querySelectorAll(".pb-value");for(let G of q)G.textContent=E}function p(){if(!d)return;let b=r.querySelector(".pb-fill");b&&(b.style.transition="",b.style.width=d.fillWidth);let y=t.querySelectorAll(".pb-value");for(let x of y)x.textContent=d.displayValue}function f(b){let y=To(n.entity,b,c);if(!y){lt("No slider service mapping for %s",n.entity),p();return}let x=e._hass;if(!x){p();return}x.callService(y.domain,y.service,y.data).catch(S=>{lt("Slider service call failed for %s: %O",n.entity,S),p()})}r.addEventListener("pointerdown",b=>{if(!e._hass)return;b.preventDefault();let y=r.querySelector(".pb-fill"),x=t.querySelector(".pb-value");d={fillWidth:y?.style.width||"0%",displayValue:x?.textContent||"",pointerId:b.pointerId,startX:b.clientX},t.__pulseSliding=!0,r.setPointerCapture(b.pointerId),t.classList.add("sliding"),y&&(y.style.transition="none");let S=u(b.clientX);h(S)},{signal:s}),r.addEventListener("pointermove",b=>{if(!d||b.pointerId!==d.pointerId)return;b.preventDefault();let y=u(b.clientX);h(y)},{signal:s}),r.addEventListener("pointerup",b=>{if(!d||b.pointerId!==d.pointerId)return;b.preventDefault();let y=r.querySelector(".pb-fill");y&&(y.style.transition=""),t.classList.remove("sliding"),r.releasePointerCapture(b.pointerId);let x=u(b.clientX);h(x),f(x),d=null,l=setTimeout(()=>{t.__pulseSliding=!1},Bn)},{signal:s}),r.addEventListener("pointercancel",b=>{if(!d||b.pointerId!==d.pointerId)return;let y=r.querySelector(".pb-fill");y&&(y.style.transition=""),t.classList.remove("sliding"),r.releasePointerCapture(b.pointerId),p(),d=null,t.__pulseSliding=!1},{signal:s});let v=null;function _(b){let y=e._hass;if(!y)return;let x=y.states[n.entity],{min:S,max:A,step:M}=Dt(n.entity,x,c,n),I=n.attribute?parseFloat(x?.attributes?.[n.attribute]):parseFloat(x?.state);if(isNaN(I))return;let z=Jt(I+b*M,S,A,M);z!==I&&(h(z),f(z))}let g=t.querySelectorAll(".pb-step-btn");for(let b of g){let y=Number(b.dataset.step);b.addEventListener("click",S=>{S.stopPropagation(),_(y)},{signal:s}),b.addEventListener("pointerdown",S=>{S.stopPropagation(),v&&clearInterval(v),v=setInterval(()=>_(y),200)},{signal:s});let x=()=>{v&&(clearInterval(v),v=null)};b.addEventListener("pointerup",x,{signal:s}),b.addEventListener("pointercancel",x,{signal:s}),b.addEventListener("pointerleave",x,{signal:s})}t.addEventListener("keydown",b=>{let y=e._hass;if(!y||b.key!=="ArrowRight"&&b.key!=="ArrowUp"&&b.key!=="ArrowLeft"&&b.key!=="ArrowDown")return;b.preventDefault();let x=y.states[n.entity],{min:S,max:A,step:M}=Dt(n.entity,x,c,n),I=n.attribute?parseFloat(x?.attributes?.[n.attribute]):parseFloat(x?.state);if(isNaN(I))return;let z=b.key==="ArrowRight"||b.key==="ArrowUp"?1:-1,L=Jt(I+z*M,S,A,M);L!==I&&(h(L),f(L))},{signal:s})}function it(t){if(!customElements.get("ha-ripple")||t.querySelector("ha-ripple"))return;let e=document.createElement("ha-ripple");t.appendChild(e),t.classList.add("has-ripple")}var Io="1.7.0",oe="pulse-climate-card",zo="pulse-climate-card-editor",bt="Pulse Climate Card:",_t={heating:{icon:"mdi:fire",token:"var(--pulse-tier-strong)",fallback:"#ff9f0a",label:"Heating"},cooling:{icon:"mdi:snowflake",token:"var(--pulse-tier-calm)",fallback:"#5ac8fa",label:"Cooling"},drying:{icon:"mdi:water-off",token:null,fallback:"#9C27B0",label:"Drying"},fan:{icon:"mdi:fan",token:null,fallback:"#607D8B",label:"Fan"},idle:{icon:"mdi:clock-outline",token:"var(--pulse-text-secondary)",fallback:"#9E9E9E",label:"Idle"},off:{icon:"mdi:power",token:"var(--pulse-disabled)",fallback:"#616161",label:"Off"}},ze={None:{token:"var(--pulse-tier-moderate)",fallback:"#30d158"},Low:{token:"var(--pulse-tier-moderate)",fallback:"#30d158"},Medium:{token:"var(--pulse-tier-strong)",fallback:"#ff9f0a"},High:{token:"var(--pulse-tier-gale)",fallback:"#ff453a"},Critical:{token:"var(--pulse-tier-gale)",fallback:"#ff453a"}},Mo=["zones"];var ct=["var(--pulse-tier-calm)","var(--pulse-tier-gale)","var(--pulse-tier-moderate)","var(--pulse-tier-strong)","var(--pulse-accent)","var(--pulse-info-color)","var(--pulse-tier-strong)","var(--success-color, #8BC34A)"],ut={columns:1,layout:"default",show_temp_bar:!0,show_power_bar:!0,tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}},Eo={graph:{attribute:"current_temperature",stacked:!1,hours_to_show:24,height:80},donut:{size:120},thermal_strip:{hours_to_show:24,mode:"timeline",slots_per_hour:2,attribute:"temperature"},comfort_strip:{slots_per_hour:1,hours_to_show:24,mode:"heatmap"},radial:{size:280,attribute:"temperature"},energy_flow:{}};var Me=`${Gt}
/* Master pulse phase \u2014 typed CSS variable interpolated by :host animation.
   Sub-elements that breathe read calc(... * var(--pc-pulse-phase)) so all
   motion stays in lockstep without any JS timer. Reduced-motion locks the
   variable at its initial value (0.5, mid-state) and suspends the host
   animation so identity is preserved but motion ceases. */
@property --pc-pulse-phase {
  syntax: "<number>";
  inherits: true;
  initial-value: 0.5;
}

@keyframes pc-master-pulse {
  0%, 100% { --pc-pulse-phase: 0; }
  50%      { --pc-pulse-phase: 1; }
}

:host {
  animation: pc-master-pulse 4s ease-in-out infinite;
}

:host {
  display: block;

  /* Card-local design tokens \u2014 override via card-mod or HA theme.
     Family-shared concerns (text colour, body type size, card chrome
     background, surface tint) live on --pulse-* and are inherited via
     SHARED_STYLES; only Climate-specific knobs declare locally. */
  --pc-bar-height: 8px;
  --pc-bar-radius: 4px;
  --pc-chart-line-width: 1.5;
  --pc-gap: var(--pulse-space-card);
  --pc-gauge-height: 6px;
  --pc-gauge-radius: 3px;
  --pc-graph-height: 80px;

  /* Hearth wash \u2014 static bottom-edge ember glow over --pulse-bg-card.
     Atmosphere module (state-driven conic gradient) animates over the top. */
  --pc-hearth-glow-inner: rgba(255, 138, 70, 0.10);
  --pc-hearth-glow-mid:   rgba(180, 70, 50, 0.04);

  /* Section-local typography \u2014 values used by only one section, kept card-local
     so they don't pollute the shared token surface. */
  --pc-detail-name: 15px;   /* zone detail panel \u2014 clicked-zone heading */
  --pc-detail-stat: 22px;   /* zone detail panel \u2014 primary stat value */
}

ha-card {
  overflow: hidden;
  padding: var(--pulse-space-card);
  background:
    radial-gradient(ellipse 80% 60% at 50% 100%,
      var(--pc-hearth-glow-inner) 0%,
      var(--pc-hearth-glow-mid) 35%,
      transparent 70%),
    var(--pulse-bg-card);
  container-type: inline-size;
  color: var(--pulse-text-primary);
}

/* Title \u2014 adds layout margin on top of shared typography. */
.pulse-title { margin-bottom: 12px; }

/* Section container */
.pc-section { margin-top: 12px; }
.pc-section:first-child { margin-top: 0; }
.pulse-section-label { margin-bottom: 6px; }

.pc-section-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--pulse-space-element);
}
.pc-section-header .pulse-section-label { margin-bottom: 0; }
.pc-section-header.pc-section-header-center { align-items: center; }

.pc-section-subtitle {
  font-size: var(--pulse-font-label);
  color: var(--pulse-text-secondary);
}

.pc-energy-flow-header-value {
  font-size: var(--pulse-font-label);
  font-weight: var(--pulse-weight-medium);
}

.pc-comparison-legend {
  display: flex;
  gap: var(--pulse-space-element);
  margin-top: 4px;
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
}

/* Zone row */
.pc-zone-row {
  display: flex;
  flex-direction: column;
  gap: var(--pulse-space-tight);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  padding-left: 12px;     /* leaves room for the leading state ribbon */
  -webkit-tap-highlight-color: transparent;
}

/* Leading state ribbon \u2014 colour set by .pc-row-{state} below */
.pc-row-ribbon {
  position: absolute;
  left: 0; top: 6px; bottom: 6px;
  width: 3px;
  border-radius: 2px;
  background: var(--pc-row-ribbon, transparent);
  transition: background var(--pulse-anim-base) ease-out;
}

.pc-zone-row.pc-row-heat   { --pc-row-ribbon: var(--pulse-tier-strong); }
.pc-zone-row.pc-row-cool   { --pc-row-ribbon: var(--pulse-tier-calm); }
.pc-zone-row.pc-row-idle,
.pc-zone-row.pc-row-at-target { --pc-row-ribbon: rgba(255, 255, 255, 0.15); }
.pc-zone-row.pc-row-off,
.pc-zone-row.pc-row-unavail   { --pc-row-ribbon: rgba(255, 255, 255, 0.06); }
.pc-zone-row:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
  border-radius: var(--pulse-radius-small);
}
.pc-zone-row.pc-unavailable { opacity: 0.5; }
.pc-zone-row.pc-unavailable .pc-power-bar-fill {
  background: var(--pulse-disabled) !important;
  width: 100% !important;
  opacity: 0.2;
}


.pc-zone-row.pc-row-off { opacity: 0.55; }
.pc-zone-row.pc-row-unavail { opacity: 0.4; }

.pc-state-tag {
  display: inline-block;
  font-size: var(--pulse-font-micro);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 2px 6px;
  margin-left: 8px;
  border-radius: var(--pulse-radius-tight);
  font-weight: var(--pulse-weight-medium);
  vertical-align: middle;
}
.pc-tag-heat { background: color-mix(in srgb, var(--pulse-tier-strong) 18%, transparent); color: var(--pulse-tier-strong); }
.pc-tag-cool { background: color-mix(in srgb, var(--pulse-tier-calm) 18%, transparent); color: var(--pulse-tier-calm); }
.pc-tag-idle { color: var(--pulse-text-secondary); opacity: 0.7; }
.pc-tag-at-target { color: var(--pulse-tier-moderate); opacity: 0.9; }
.pc-tag-off { color: var(--pulse-text-secondary); opacity: 0.6; }
.pc-tag-unavail { background: color-mix(in srgb, var(--pulse-tier-gale) 12%, transparent); color: color-mix(in srgb, var(--pulse-tier-gale) 80%, white); }

/* State-tinted current temperature on rows */
.pc-zone-row.pc-row-heat .pc-zone-temp { color: var(--pulse-tier-strong); }
.pc-zone-row.pc-row-cool .pc-zone-temp { color: var(--pulse-tier-calm); }
.pc-zone-row.pc-row-off .pc-zone-temp,
.pc-zone-row.pc-row-unavail .pc-zone-temp { color: var(--pulse-text-secondary); }

/* Zone header: name + current temp */
.pc-zone-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 2px;
  gap: var(--pulse-space-tight);
  min-width: 0;
}
.pc-zone-name {
  font-size: var(--pulse-font-body);
  color: var(--pulse-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
}

/* State hierarchy aggregator \u2014 driven by rowStateClass() in utils.js.
   Granular pc-row-heat / -cool / -off etc. stay for ribbon colour and
   per-state visual cues; aggregators (active / mid / quiet) drive the
   unified text + dim treatment across every section. */
.pc-row-active .pc-zone-name,
.pc-row-active .pc-rank-name,
.pc-row-active .pc-home-status-zone-name,
.pc-row-active .pc-timeline-group-name,
.pc-row-active .pc-zone-label,
.pc-row-active.pc-legend-item .pc-legend-name {
  color: var(--pulse-text-primary);
  font-weight: var(--pulse-weight-medium);
}

.pc-row-mid .pc-zone-name,
.pc-row-mid .pc-rank-name,
.pc-row-mid .pc-home-status-zone-name,
.pc-row-mid .pc-timeline-group-name,
.pc-row-mid .pc-zone-label,
.pc-row-mid.pc-legend-item .pc-legend-name {
  color: var(--pulse-text-primary);
  font-weight: var(--pulse-weight-regular);
}

.pc-row-quiet .pc-zone-name,
.pc-row-quiet .pc-rank-name,
.pc-row-quiet .pc-home-status-zone-name,
.pc-row-quiet .pc-timeline-group-name,
.pc-row-quiet .pc-zone-label,
.pc-row-quiet.pc-legend-item .pc-legend-name {
  color: var(--pulse-text-secondary);
  font-weight: var(--pulse-weight-regular);
}

/* Quiet rows dim the whole row so right-side stats (value, slider, delta
   text) follow the name's brightness. .pc-zone-row keeps its own opacity
   from the legacy ribbon path. */
.pc-rank-row.pc-row-quiet,
.pc-home-status-row.pc-row-quiet,
.pc-timeline-row.pc-row-quiet,
.pc-state-row.pc-row-quiet,
.pc-heatmap-row.pc-row-quiet {
  opacity: 0.6;
}
.pc-zone-temp {
  font-size: var(--pulse-font-body);
  font-weight: var(--pulse-weight-semibold);
  color: var(--pulse-text-primary);
  white-space: nowrap;
  flex-shrink: 0;
}
.pc-zone-target {
  font-size: var(--pulse-font-label);
  color: var(--pulse-text-secondary);
  margin-left: 4px;
}
.pc-zone-humidity {
  font-size: var(--pulse-font-label);
  font-weight: var(--pulse-weight-regular);
  color: var(--pulse-text-secondary);
  opacity: 0.7;
  display: inline-flex;
  align-items: center;
  gap: var(--pulse-space-pin);
  margin-left: 4px;
}
.pc-zone-humidity ha-icon {
  --mdc-icon-size: 12px;
}

/* Temperature gauge bar */
.pc-temp-gauge {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: var(--pc-gauge-height, 6px);
  border-radius: var(--pc-gauge-radius, 3px);
}
.pc-temp-gauge-bg {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0.25;
}
.pc-temp-gauge-current {
  position: absolute;
  top: -1px;
  bottom: -1px;
  width: 3px;
  background: var(--pulse-text-primary);
  border-radius: 1.5px;
  z-index: 2;
  box-shadow: 0 0 0 1px var(--pulse-bg-card);
}
.pc-temp-gauge-target {
  position: absolute;
  top: -1px;
  bottom: -1px;
  width: 2px;
  background: var(--pulse-text-primary);
  opacity: 0.5;
  border-radius: var(--pulse-radius-hairline);
  z-index: 1;
  box-shadow: 0 0 0 1px var(--pulse-bg-card);
}

/* Heating/cooling power bar */
.pc-power-bar-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: var(--pc-bar-height, 8px);
  border-radius: var(--pc-bar-radius, 4px);
}
.pc-power-bar-track {
  position: absolute;
  inset: 0;
  background: var(--pulse-accent);
  opacity: 0.12;
  border-radius: inherit;
}
.pc-power-bar-fill {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  border-radius: inherit;
  transition: width var(--pulse-anim-fill) ease, background-color var(--pulse-anim-mode) ease;
}
.pc-power-bar-fill.pc-bar-active {
  box-shadow: 0 0 8px 1px var(--pc-bar-glow, rgba(255, 152, 0, 0.4));
  animation: pc-bar-pulse 2.5s ease-in-out infinite;
}
@keyframes pc-bar-pulse {
  0%, 100% { box-shadow: 0 0 6px 0 var(--pc-bar-glow, rgba(255, 152, 0, 0.3)); }
  50% { box-shadow: 0 0 10px 2px var(--pc-bar-glow, rgba(255, 152, 0, 0.5)); }
}

/* Status chips */
.pc-zone-chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--pulse-space-chip);
  padding: 2px 0;
}
.pc-chip {
  display: inline-flex;
  align-items: center;
  gap: var(--pulse-space-tight);
  font-size: var(--pulse-font-label);
  color: var(--pulse-text-secondary);
  white-space: nowrap;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
}
.pc-chip ha-icon { --mdc-icon-size: 14px; }
.pc-chip.pc-severity-high { color: var(--pulse-tier-gale); }
.pc-chip.pc-severity-medium { color: var(--pulse-tier-strong); }
.pc-chip.pc-severity-critical { color: var(--pulse-tier-gale); font-weight: var(--pulse-weight-semibold); }

.pc-chip-aside {
  font-size: var(--pulse-font-caption);
  opacity: 0.6;
}

/* Multi-column zone grid */
.pc-section-zones.pc-columns {
  display: grid;
  gap: var(--pc-gap, 16px);
}

@container (max-width: 300px) {
  .pc-section-zones.pc-columns { grid-template-columns: 1fr; }
}

/* Compact mode */
.pc-compact .pc-zone-row { gap: var(--pulse-space-hairline); }
.pc-compact .pc-zone-name { font-size: var(--pulse-font-kicker); }
.pc-compact .pc-zone-chips { gap: var(--pulse-space-tight); }
.pc-compact .pc-chip { font-size: var(--pulse-font-caption); }

/* System section rows */
.pc-system-row {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-element);
  padding: 4px 2px;
}
.pc-system-label {
  font-size: var(--pulse-font-body);
  color: var(--pulse-text-primary);
  min-width: 72px;
  font-weight: var(--pulse-weight-regular);
}
/* \u2500\u2500 Chart Styles \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Graph container */
.pc-chart-container {
  position: relative;
  width: 100%;
  height: var(--pc-graph-height, 80px);
  overflow: hidden;
  border-radius: var(--pulse-radius-small);
}
.pc-chart-svg {
  width: 100%;
  height: 100%;
  display: block;
}
.pc-chart-svg path {
  stroke-width: var(--pc-chart-line-width, 1.5);
  vector-effect: non-scaling-stroke;
}
.pc-chart-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: var(--pulse-font-kicker);
  color: var(--pulse-text-secondary);
  opacity: 0.6;
}

/* Legend chips */
.pc-chart-legend {
  display: flex;
  flex-wrap: wrap;
  gap: var(--pulse-space-element);
  padding: 4px 0;
}
.pc-legend-chip {
  display: inline-flex;
  align-items: center;
  gap: var(--pulse-space-tight);
  font-size: var(--pulse-font-label);
  color: var(--pulse-text-secondary);
  white-space: nowrap;
}
.pc-legend-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: var(--pulse-radius-circle);
  flex-shrink: 0;
}

/* Donut container */
.pc-donut-container {
  position: relative;
  margin: 8px auto;
}
.pc-donut-container.pc-api-breakdown-donut {
  flex-shrink: 0;
  margin: 0;
}

/* API breakdown row inside the API tab \u2014 donut + legend chips side by side */
.pc-api-breakdown-row {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-card);
}
.pc-donut-container svg {
  width: 100%;
  height: 100%;
}
.pc-donut-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  pointer-events: none;
}
.pc-donut-center-num {
  font-size: var(--pulse-font-hero);
  font-weight: var(--pulse-weight-thin);
  letter-spacing: var(--pulse-ls-hero);
  font-variant-numeric: tabular-nums;
  color: var(--pulse-text-primary);
  line-height: 1;
}
.pc-donut-center-label {
  font-size: var(--pulse-font-micro);
  text-transform: uppercase;
  letter-spacing: var(--pulse-ls-kicker);
  color: var(--pulse-text-secondary);
  margin-top: 4px;
}

/* Donut arcs \u2014 largest auto-blooms via inline filter attr (per-instance unique
   id from renderDonut), idle dim 0.6. CSS does not set filter so inline attr
   wins. Hover lifts opacity only \u2014 bloom stays anchored to active. */
.pc-donut-arc {
  opacity: 0.6;
  transition: opacity var(--pulse-anim-medium);
  cursor: pointer;
}
.pc-donut-arc.pc-donut-arc-active {
  opacity: 1;
}
.pc-donut-arc:hover {
  opacity: 1;
}

/* Responsive: hide legend at narrow widths */
@container (max-width: 200px) {
  .pc-chart-legend { display: none; }
  .pc-chart-container { height: 50px; }
}

/* \u2500\u2500 Visual Identity Styles \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Filled sparkline (shared by pulse mode, graph, bridge, api) */
.pc-sparkline-filled {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: var(--pulse-radius-small);
  touch-action: pan-y;
}
.pc-sparkline-filled svg {
  width: 100%;
  height: 100%;
  display: block;
}
.pc-sparkline-filled.pc-sparkline-prominent { height: 40px; }

/* Zone Pulse mode \u2014 waveform as row background */
.pc-zone-row-pulse {
  position: relative;
  height: 56px;
  margin-bottom: 4px;
  border-radius: var(--pulse-radius-row);
  overflow: hidden;
  background: var(--pulse-bg-secondary);
  display: flex;
  align-items: center;
  padding: 0 14px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: pan-y;
}
.pc-zone-row-pulse:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
}
.pc-zone-row-pulse .pc-pulse-bg {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  display: block;
  z-index: 1;
}
.pc-zone-row-pulse .pc-pulse-info {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.pc-pulse-info-left { display: flex; flex-direction: column; gap: var(--pulse-space-hairline); }
.pc-pulse-info-right { display: flex; align-items: baseline; gap: var(--pulse-space-chip); }
.pc-pulse-current {
  font-size: var(--pulse-font-large);
  font-weight: var(--pulse-weight-light);
  color: var(--pulse-text-primary);
  font-variant-numeric: tabular-nums;
}
.pc-pulse-status {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-tight);
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
}
.pc-status-dot {
  width: 5px;
  height: 5px;
  border-radius: var(--pulse-radius-circle);
  flex-shrink: 0;
}
@keyframes pc-glow-pulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}
.pc-heating-glow { animation: pc-glow-pulse 3s ease-in-out infinite; }

/* Heating row glow \u2014 warm border shadow */
.pc-zone-row-pulse.pc-heating {
  animation: pc-row-glow 3s ease-in-out infinite;
}
@keyframes pc-row-glow {
  0%, 100% { box-shadow: 0 0 10px 1px rgba(255, 152, 0, 0.25), inset 0 0 10px 1px rgba(255, 152, 0, 0.06); }
  50% { box-shadow: 0 0 16px 2px rgba(255, 152, 0, 0.4), inset 0 0 14px 2px rgba(255, 152, 0, 0.1); }
}

/* Strip rows \u2014 shared by thermal-strip's .pc-timeline-row and
   comfort-strip's .pc-heatmap-row. */
.pc-section-thermal-strip .pc-timeline-row,
.pc-section-comfort-strip .pc-heatmap-row {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  cursor: pointer;
  border-radius: var(--pulse-radius-pill);
  padding: 2px 0;
  position: relative;
  overflow: visible;
  transition: background var(--pulse-anim-fast);
}
.pc-section-thermal-strip .pc-timeline-row:hover,
.pc-section-comfort-strip .pc-heatmap-row:hover { background: var(--pulse-bg-hover); }
.pc-section-thermal-strip .pc-timeline-row.pc-selected,
.pc-section-comfort-strip .pc-heatmap-row.pc-selected {
  background: linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--pulse-tier-strong) 14%, transparent) 50%, transparent 100%);
}
.pc-section-thermal-strip .pc-timeline-row.pc-selected .pc-strip-container,
.pc-section-comfort-strip .pc-heatmap-row.pc-selected .pc-strip-container { height: 18px; }
.pc-section-thermal-strip .pc-timeline-row.pc-selected .pc-zone-label,
.pc-section-comfort-strip .pc-heatmap-row.pc-selected .pc-zone-label {
  color: var(--pulse-text-primary);
  font-weight: var(--pulse-weight-medium);
}

.pc-section-thermal-strip .pc-zone-label,
.pc-section-comfort-strip .pc-zone-label {
  width: 72px;
  font-size: var(--pulse-font-body);
  color: var(--pulse-text-primary);
  text-align: right;
  padding-right: 8px;
  flex-shrink: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color var(--pulse-anim-base);
}
/* Strip container \u2014 shared by thermal strip and comfort strip (timeline mode) */
.pc-section-thermal-strip .pc-strip-container,
.pc-section-comfort-strip .pc-strip-container {
  flex: 1;
  height: 14px;
  border-radius: var(--pulse-radius-small);
  overflow: visible;
  position: relative;
  touch-action: pan-y;
}
.pc-section-thermal-strip .pc-now-marker,
.pc-section-comfort-strip .pc-now-marker {
  position: absolute;
  top: -3px;
  bottom: -3px;
  width: 1.5px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.7);
  z-index: 3;
}
.pc-section-thermal-strip .pc-time-axis {
  display: flex;
  justify-content: space-between;
  padding: 4px 0 8px;
  margin-left: 72px;
}
.pc-section-thermal-strip .pc-time-label {
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
}

/* Strip tooltip \u2014 shared by timeline and heatmap */
.pc-strip-tooltip {
  position: absolute;
  top: -26px;
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-primary);
  background: var(--pulse-glass-bg);
  backdrop-filter: blur(var(--pulse-glass-blur));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur));
  border: 1px solid var(--pulse-glass-border);
  padding: 2px 8px;
  border-radius: var(--pulse-radius-small);
  white-space: nowrap;
  pointer-events: none;
  z-index: 10;
  transform: translateX(-50%);
}
.pc-strip-tooltip-fixed {
  position: fixed;
  top: auto;
  z-index: 9999;
}

.pc-strip-crosshair {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--pulse-text-primary);
  opacity: 0.25;
  pointer-events: none;
  z-index: 5;
  display: none;
}

/* Drag selection highlight */
.pc-strip-drag-highlight {
  position: absolute;
  top: 0;
  bottom: 0;
  background: var(--pulse-accent);
  opacity: 0.12;
  border-radius: var(--pulse-radius-bar);
  pointer-events: none;
  z-index: 4;
}

/* Comfort Heatmap \u2014 HTML div cells for hover/click */
.pc-section-comfort-strip .pc-heatmap-body { padding: 4px 0; position: relative; }

/* Heatmap cells \u2014 shared by comfort strip, thermal strip (heatmap mode),
   and timeline-group's Thermal tab. */
.pc-section-comfort-strip .pc-cells,
.pc-section-thermal-strip .pc-cells,
.pc-section-timeline-group .pc-cells {
  display: flex;
  gap: var(--pulse-space-pin);
  flex: 1;
  touch-action: pan-y;
}
.pc-section-comfort-strip .pc-cell,
.pc-section-thermal-strip .pc-cell,
.pc-section-timeline-group .pc-cell {
  flex: 1;
  height: 16px;
  border-radius: var(--pulse-radius-bar);
  transition: transform var(--pulse-anim-fast), height var(--pulse-anim-base), box-shadow var(--pulse-anim-base);
}
.pc-section-comfort-strip .pc-heatmap-row.pc-selected .pc-cell,
.pc-section-thermal-strip .pc-timeline-row.pc-selected .pc-cell { height: 20px; }
.pc-section-comfort-strip .pc-cell:hover,
.pc-section-thermal-strip .pc-cell:hover {
  transform: scaleY(1.4);
  box-shadow: 0 0 8px currentColor;
  z-index: 2;
}
.pc-section-comfort-strip .pc-cell-empty,
.pc-section-thermal-strip .pc-cell-empty {
  background: repeating-linear-gradient(
    45deg,
    var(--pulse-border-subtle) 0px,
    var(--pulse-border-subtle) 2px,
    transparent 2px,
    transparent 4px
  );
}
.pc-heatmap-legend {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-row);
  padding: 4px 0;
  justify-content: center;
}
.pc-heatmap-legend .pc-legend-item {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-tight);
  font-size: var(--pulse-font-micro);
  color: var(--pulse-text-secondary);
}
.pc-heatmap-legend .pc-legend-swatch {
  width: 8px;
  height: 8px;
  border-radius: var(--pulse-radius-bar);
}
.pc-legend-swatch-good { background: color-mix(in srgb, var(--pulse-tier-moderate) 70%, transparent); }
.pc-legend-swatch-fair { background: color-mix(in srgb, var(--pulse-tier-strong) 65%, transparent); }
.pc-legend-swatch-poor { background: color-mix(in srgb, var(--pulse-tier-gale) 60%, transparent); }
.pc-heatmap-time-axis {
  display: flex;
  justify-content: space-between;
  margin-left: 72px;
  padding: 4px 0 14px;
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
}

/* Energy Flow */
.pc-ribbon-active { /* animation handled by SVG <animate> on gradient */ }
.pc-ribbon { cursor: pointer; transition: opacity var(--pulse-anim-base); }
.pc-ribbon:hover { opacity: 1 !important; }
.pc-ribbon.pc-dimmed { opacity: 0.2; }

/* Radial */
.pc-section-radial { text-align: center; }
.pc-radial-svg { display: block; margin: 0 auto; }
.pc-radial-container {
  display: flex;
  justify-content: center;
  position: relative;
}
.pc-center-info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  transition: opacity var(--pulse-anim-medium);
  background: var(--pulse-glass-bg);
  backdrop-filter: blur(var(--pulse-glass-blur));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur));
  border: 1px solid var(--pulse-glass-border);
  border-radius: var(--pulse-radius-circle);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.pc-center-sheen {
  position: absolute;
  inset: 0;
  border-radius: var(--pulse-radius-circle);
  pointer-events: none;
  background: radial-gradient(circle farthest-side at 0 0, rgba(255,255,255,0) 88%, rgba(255,255,255,0.5) 96%, rgba(255,255,255,0) 100%) no-repeat;
  background-size: 200% 200%;
  background-position: -100% 50%;
}
.pc-center-sheen.light-theme {
  background: radial-gradient(circle farthest-side at 0 0, rgba(0,0,0,0) 88%, rgba(0,0,0,0.12) 96%, rgba(0,0,0,0) 100%) no-repeat;
  background-size: 200% 200%;
  background-position: -100% 50%;
}
.pc-center-value {
  font-size: var(--pulse-font-hero);
  font-weight: var(--pulse-weight-thin);
  letter-spacing: var(--pulse-ls-hero);
  font-variant-numeric: tabular-nums;
  color: var(--pulse-text-primary);
  transition: font-size var(--pulse-anim-medium);
}
.pc-center-label {
  font-size: var(--pulse-font-micro);
  color: var(--pulse-text-secondary);
  letter-spacing: var(--pulse-ls-kicker);
  text-transform: uppercase;
  margin-top: 6px;
}
.pc-center-sub {
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
  margin-top: 4px;
  font-variant-numeric: tabular-nums;
}
.pc-arc-group {
  cursor: pointer;
  transition: opacity var(--pulse-anim-base);
  opacity: 0.6;
}
.pc-arc-group.pc-arc-active { opacity: 1; }
.pc-arc-group:hover { opacity: 1 !important; }
.pc-arc-group.pc-dimmed { opacity: 0.2 !important; }
.pc-arc-group.pc-selected { opacity: 1 !important; }
.pc-arc-path {
  cursor: pointer;
}
.pc-arc-path:hover { opacity: 1 !important; }

/* Radial legend */
.pc-radial-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 12px;
  margin-top: 16px;
  justify-content: center;
}
.pc-radial-legend .pc-legend-item {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-tight);
  font-size: var(--pulse-font-label);
  color: var(--pulse-text-secondary);
  cursor: pointer;
  padding: 2px 4px;
  border-radius: var(--pulse-radius-small);
  position: relative;
  overflow: hidden;
  transition: background var(--pulse-anim-fast), color var(--pulse-anim-fast);
}
.pc-radial-legend .pc-legend-item:hover { background: color-mix(in srgb, var(--pulse-accent) 8%, transparent); }
.pc-radial-legend .pc-legend-item.pc-selected { background: color-mix(in srgb, var(--pulse-accent) 16%, transparent); color: var(--pulse-text-primary); }
.pc-radial-legend .pc-legend-dot {
  width: 6px;
  height: 6px;
  border-radius: var(--pulse-radius-circle);
  flex-shrink: 0;
}
.pc-legend-temp {
  font-variant-numeric: tabular-nums;
  color: var(--pulse-text-primary);
  font-weight: var(--pulse-weight-medium);
}

/* Zone detail panel (shared by radial, thermal strip, comfort strip, energy flow) */
.pc-zone-detail {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: max-height var(--pulse-anim-slow) ease, opacity var(--pulse-anim-medium) ease, padding var(--pulse-anim-slow) ease;
  padding: 0;
}
.pc-zone-detail.pc-active {
  max-height: 240px;
  opacity: 1;
  padding: 14px 0 16px;
  background: var(--pulse-glass-bg);
  backdrop-filter: blur(var(--pulse-glass-blur));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur));
  border: 1px solid var(--pulse-glass-border);
  border-radius: var(--pulse-radius-element);
}
.pc-detail-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
}
.pc-detail-name { font-size: var(--pc-detail-name); font-weight: var(--pulse-weight-medium); }
.pc-detail-close {
  font-size: var(--pulse-font-label);
  color: var(--pulse-text-secondary);
  cursor: pointer;
  padding: 4px 8px;
  border-radius: var(--pulse-radius-pill);
  transition: background var(--pulse-anim-fast);
}
.pc-detail-close:hover { background: color-mix(in srgb, var(--pulse-accent) 10%, transparent); }
.pc-detail-stats { display: flex; gap: var(--pulse-space-card); }
.pc-stat { flex: 1; }
.pc-stat-value {
  font-size: var(--pc-detail-stat);
  font-weight: var(--pulse-weight-light);
  font-variant-numeric: tabular-nums;
}
.pc-stat-label {
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  margin-top: 2px;
}
.pc-stat-sub {
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
  margin-top: 1px;
}
.pc-detail-bar {
  margin-top: 10px;
  height: 6px;
  border-radius: var(--pulse-radius-tight);
  background: var(--pulse-bg-secondary);
  overflow: hidden;
}
.pc-detail-bar-fill {
  height: 100%;
  border-radius: var(--pulse-radius-tight);
  transition: width var(--pulse-anim-color) ease;
}
.pc-detail-sparkline {
  border-radius: var(--pulse-radius-pill);
  overflow: hidden;
}

/* API Dashboard */
.pc-api-dashboard {
  display: flex;
  flex-direction: column;
  gap: var(--pulse-space-element);
}
.pc-api-row {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-element);
}
.pc-usage-gauge {
  position: relative;
  flex-shrink: 0;
}
.pc-gauge-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: var(--pulse-font-body);
  font-weight: var(--pulse-weight-semibold);
  color: var(--pulse-text-secondary);
  text-align: center;
  line-height: 1.2;
}
.pc-gauge-center-limit {
  font-size: var(--pulse-font-caption);
  opacity: 0.6;
}

/* HomeKit pulse dot */
.pc-pulse-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: var(--pulse-radius-circle);
  margin-right: 4px;
  vertical-align: middle;
}
.pc-pulse-dot.pc-connected {
  background: var(--pulse-tier-moderate);
  animation: pc-pulse-dot-glow 2s ease-in-out infinite;
}
.pc-pulse-dot.pc-disconnected {
  background: var(--pulse-tier-gale);
}
@keyframes pc-pulse-dot-glow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Bridge flow temp */
.pc-flow-temp-row {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-tight);
  margin-top: 4px;
}
.pc-homekit-bar-stack { margin-top: 4px; }

.pc-strip-rows { position: relative; }
.pc-flow-temp-value {
  font-size: var(--pulse-font-stat);
  font-weight: var(--pulse-weight-semibold);
}
.pc-flow-sparkline {
  display: inline-block;
  vertical-align: middle;
}

/* Home Status section */
.pc-section-home-status { }
.pc-home-status-hero {
  text-align: center;
  padding: 16px 0 20px;
}
.pc-home-status-icon {
  --mdc-icon-size: 36px;
  display: block;
  margin: 0 auto 6px;
}
.pc-home-status-label {
  font-size: var(--pulse-font-large);
  font-weight: var(--pulse-weight-medium);
  margin-bottom: 4px;
}
.pc-home-status-detail {
  font-size: var(--pulse-font-kicker);
  color: var(--pulse-text-secondary);
}
.pc-home-status-zones {
  display: flex;
  flex-direction: column;
}
.pc-home-status-row {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid var(--pulse-border-subtle);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.pc-home-status-row:last-child { border-bottom: none; }
.pc-home-status-row:hover {
  background: var(--pulse-bg-hover);
}
.pc-home-status-row:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
  border-radius: var(--pulse-radius-small);
}
.pc-home-status-zone-name {
  width: 72px;
  flex-shrink: 0;
  font-size: var(--pulse-font-body);
  color: var(--pulse-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.pc-home-status-temps {
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--pulse-space-chip);
}
.pc-home-status-actual {
  font-size: var(--pulse-font-stat);
  font-weight: var(--pulse-weight-thin);
  letter-spacing: -0.3px;
  font-variant-numeric: tabular-nums;
  color: var(--pulse-text-primary);
  min-width: 56px;
}
.pc-home-status-actual.pc-off {
  color: var(--pulse-text-secondary);
}
.pc-home-status-arrow {
  font-size: var(--pulse-font-label);
  color: var(--pulse-text-secondary);
  opacity: 0.7;
}
.pc-home-status-target {
  font-size: var(--pulse-font-kicker);
  color: var(--pulse-text-secondary);
  font-variant-numeric: tabular-nums;
  min-width: 40px;
}
.pc-home-status-delta {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-tight);
}
.pc-home-status-bar-track {
  position: relative;
  width: 60px;
  height: 6px;
  border-radius: var(--pulse-radius-tight);
  background: var(--pulse-border-medium);
  overflow: hidden;
}
.pc-home-status-bar-center {
  position: absolute;
  left: 50%;
  top: 0;
  width: 1px;
  height: 100%;
  background: color-mix(in srgb, white 15%, transparent);
}
.pc-home-status-bar-fill {
  position: absolute;
  top: 0;
  height: 100%;
  border-radius: var(--pulse-radius-tight);
}
.pc-home-status-delta-text {
  font-size: var(--pulse-font-label);
  font-variant-numeric: tabular-nums;
  width: 40px;
  text-align: right;
  color: var(--pulse-text-secondary);
}
.pc-home-status-summary {
  display: flex;
  justify-content: space-around;
  border-top: 1px solid var(--pulse-border-medium);
  padding-top: 14px;
  margin-top: 16px;
}
.pc-home-status-summary .pc-stat { text-align: center; }
.pc-home-status-summary .pc-stat-value {
  font-size: var(--pulse-font-summary);
  font-weight: var(--pulse-weight-thin);
  letter-spacing: -0.5px;
  font-variant-numeric: tabular-nums;
  line-height: 1;
}
.pc-home-status-summary .pc-stat-label {
  font-size: var(--pulse-font-micro);
  letter-spacing: var(--pulse-ls-kicker);
  margin-top: 6px;
}

/* Zone Ranking section */
.pc-section-zone-ranking { }
.pc-ranking-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.pc-ranking-tabs {
  display: flex;
  gap: var(--pulse-space-panel);
}
.pc-ranking-tab {
  font-size: var(--pulse-font-caption);
  text-transform: uppercase;
  letter-spacing: 0.6px;
  font-weight: var(--pulse-weight-semibold);
  color: var(--pulse-text-secondary);
  padding: 6px 8px;
  border: none;
  border-bottom: 1px solid transparent;
  background: none;
  border-radius: 0;
  cursor: pointer;
  transition: color var(--pulse-anim-fast), border-bottom-color var(--pulse-anim-fast);
  user-select: none;
}
.pc-ranking-tab:hover { color: var(--pulse-text-primary); }
.pc-ranking-tab.pc-active {
  color: var(--pulse-tier-strong);
  border-bottom-color: var(--pulse-tier-strong);
}
.pc-ranking-list { }
.pc-rank-row {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: var(--pulse-radius-element);
  margin-bottom: 4px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.pc-rank-row:hover {
  background: var(--pulse-border-subtle);
}
.pc-rank-row:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
}
.pc-rank-num {
  width: 24px;
  font-size: var(--pulse-font-body);
  font-weight: var(--pulse-weight-medium);
  font-variant-numeric: tabular-nums;
  color: var(--pulse-text-secondary);
  flex-shrink: 0;
}
.pc-rank-num.pc-top { color: var(--pulse-tier-strong); }
.pc-rank-name {
  flex: 1;
  font-size: var(--pulse-font-body);
  margin-left: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.pc-rank-bar-track {
  flex: 2;
  height: 8px;
  background: var(--pulse-border-medium);
  border-radius: var(--pulse-radius-small);
  margin: 0 12px;
  overflow: hidden;
}
.pc-rank-bar-fill {
  height: 100%;
  border-radius: var(--pulse-radius-small);
  transition: width var(--pulse-anim-reveal) ease, background var(--pulse-anim-color) ease;
}
.pc-rank-value {
  font-size: var(--pulse-font-body);
  font-weight: var(--pulse-weight-medium);
  font-variant-numeric: tabular-nums;
  width: 50px;
  text-align: right;
  flex-shrink: 0;
}
.pc-ranking-summary {
  display: flex;
  justify-content: space-around;
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid var(--pulse-border-medium);
}
.pc-ranking-summary .pc-stat { text-align: center; }
.pc-ranking-summary .pc-stat-value {
  font-size: var(--pulse-font-summary);
  font-weight: var(--pulse-weight-thin);
  letter-spacing: -0.5px;
  font-variant-numeric: tabular-nums;
  line-height: 1;
}
.pc-ranking-summary .pc-stat-label {
  font-size: var(--pulse-font-micro);
  letter-spacing: var(--pulse-ls-kicker);
  margin-top: 6px;
}

/* Responsive degradation for new sections */
@container (max-width: 200px) {
  .pc-section-thermal-strip .pc-time-axis { display: none; }
  .pc-section-comfort-strip svg text { display: none; }
  .pc-api-row { flex-direction: column; }
}

/* Temperature transition glow \u2014 brief brightness flash on temp change */
.pc-temp-transitioning {
  filter: brightness(1.4);
  transition: filter var(--pulse-anim-mode) ease-in, filter var(--pulse-anim-fill) ease-out var(--pulse-anim-mode);
}

/* \u2500\u2500 Hero \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.pc-hero {
  display: flex; flex-direction: column;
  padding: 4px 0 16px;
  gap: var(--pulse-space-section);
}

.pc-hero-top-row {
  display: flex; align-items: center; justify-content: space-between;
  gap: var(--pulse-space-section);
  flex-wrap: wrap;
}

.pc-hero-temp-block {
  display: flex; flex-direction: column;
  gap: var(--pulse-space-tight);
  min-width: 0;
}

.pc-hero-label {
  font-size: var(--pulse-font-micro); text-transform: uppercase; letter-spacing: 0.6px;
  color: var(--pulse-text-secondary);
}

.pc-hero-temp {
  font-size: 44px; font-weight: var(--pulse-weight-thin); letter-spacing: var(--pulse-ls-display);
  line-height: 1; color: var(--pulse-text-primary);
  font-variant-numeric: tabular-nums;
}

.pc-hero.pc-state-off .pc-hero-temp,
.pc-hero.pc-state-idle .pc-hero-temp { color: var(--pulse-text-secondary); }

.pc-hero-right {
  display: flex; flex-direction: column; align-items: flex-end;
  gap: var(--pulse-space-tight);
  font-size: var(--pulse-font-caption); color: var(--pulse-text-secondary);
  text-align: right; line-height: 1.5;
  flex-shrink: 0;
}

.pc-hero-status {
  display: flex; align-items: center; gap: var(--pulse-space-tight);
  color: var(--pulse-text-primary);
  font-weight: var(--pulse-weight-medium);
}

.pc-hero-outside {
  font-size: var(--pulse-font-micro);
  color: var(--pulse-text-secondary);
  font-variant-numeric: tabular-nums;
}

/* Per-zone dot cluster \u2014 breathes via master pulse phase */
.pc-hero-dots {
  display: flex; align-items: center;
  gap: 10px; flex: 0 1 auto;
  flex-wrap: wrap;
  max-width: 280px;
}

.pc-hero-zone-dot {
  width: 10px; height: 10px;
  border-radius: var(--pulse-radius-circle);
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.5);
  transition: opacity var(--pulse-anim-base) ease;
}

.pc-hero-zone-dot.pc-hero-dot-heating {
  background: var(--pulse-tier-strong);
  box-shadow: 0 0 12px var(--pulse-tier-strong);
  opacity: calc(0.7 + 0.3 * var(--pc-pulse-phase));
}

.pc-hero-zone-dot.pc-hero-dot-cooling {
  background: var(--pulse-tier-calm);
  box-shadow: 0 0 12px var(--pulse-tier-calm);
  opacity: calc(0.7 + 0.3 * var(--pc-pulse-phase));
}

.pc-hero-zone-dot.pc-hero-dot-idle    { background: rgba(255,255,255,0.5); opacity: 0.5; }
.pc-hero-zone-dot.pc-hero-dot-off,
.pc-hero-zone-dot.pc-hero-dot-unavail { background: rgba(255,255,255,0.15); opacity: 0.3; }

/* Per-zone strip block \u2014 N rows of 24 cells, left-edge state ribbon */
.pc-hero-strips {
  display: flex; flex-direction: column;
  gap: 3px;
  margin-top: 6px;
}

.pc-hero-zone-strip {
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 10px;
  align-items: center;
}

.pc-hero-zone-strip-label {
  font-size: var(--pulse-font-caption); font-weight: var(--pulse-weight-medium);
  text-transform: uppercase; letter-spacing: 0.6px;
  color: var(--pulse-text-primary);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}

.pc-hero-zone-strip-cells {
  display: flex; gap: var(--pulse-space-pin);
  height: 7px;
  flex: 1;
  border-radius: var(--pulse-radius-small);
  overflow: hidden;
  position: relative;
}

.pc-hero-zone-strip-cells::before {
  content: ''; position: absolute; left: 0; top: 0; bottom: 0;
  width: 2px;
  background: var(--pc-strip-edge, transparent);
  z-index: 2;
}

.pc-hero-zone-strip-cells span { flex: 1; }
.pc-hero-zone-strip-cell-ghost { background: var(--pulse-bg-card-strong, rgba(255, 255, 255, 0.04)); }

.pc-hero-zone-strip.pc-row-heat   { --pc-strip-edge: var(--pulse-tier-strong); }
.pc-hero-zone-strip.pc-row-cool   { --pc-strip-edge: var(--pulse-tier-calm); }
.pc-hero-zone-strip.pc-row-idle   { --pc-strip-edge: rgba(255,255,255,0.15); }
.pc-hero-zone-strip.pc-row-off,
.pc-hero-zone-strip.pc-row-unavail { --pc-strip-edge: rgba(255,255,255,0.06); }
.pc-hero-zone-strip.pc-row-off .pc-hero-zone-strip-cells { opacity: 0.3; }

.pc-hero-zone-strip-overflow .pc-hero-zone-strip-label {
  color: var(--pulse-text-secondary);
  font-style: italic;
}

@container (max-width: 280px) {
  .pc-hero-top-row { flex-direction: column; align-items: flex-start; }
  .pc-hero-right { align-items: flex-start; text-align: left; }
}

/* \u2500\u2500 Atmosphere wash \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 * Single radial wash that flips with home state: heating sweeps down
 * from the top, cooling sweeps up from the bottom, mixed shows both
 * with reduced intensity. Idle/off render no markup at all (handled
 * in atmosphere.js); the wash element only exists for active states. */

.pc-atmosphere-wash {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  border-radius: inherit;
  overflow: hidden;
  opacity: var(--pc-atmosphere-opacity, 0.4);
  transition: opacity var(--pulse-anim-reveal) ease,
              background var(--pulse-anim-reveal) ease;
}

.pc-atmosphere-wash.pc-state-heating {
  background: radial-gradient(ellipse 80% 50% at 50% -30%,
    rgba(255, 159, 10, 0.5), transparent 60%);
}

.pc-atmosphere-wash.pc-state-cooling {
  background: radial-gradient(ellipse 80% 50% at 50% 130%,
    rgba(90, 200, 250, 0.5), transparent 60%);
}

.pc-atmosphere-wash.pc-state-mixed {
  background:
    radial-gradient(ellipse 80% 50% at 50% -30%, rgba(255, 159, 10, 0.35), transparent 60%),
    radial-gradient(ellipse 80% 50% at 50% 130%, rgba(90, 200, 250, 0.25), transparent 60%);
}

.pc-atmosphere-wash.pc-intensity-subtle { --pc-atmosphere-opacity: 0.25; }
.pc-atmosphere-wash.pc-intensity-medium { --pc-atmosphere-opacity: 0.4; }
.pc-atmosphere-wash.pc-intensity-bold   { --pc-atmosphere-opacity: 0.6; }

/* Card content sits above backdrop */
.pc-card-content {
  position: relative;
  z-index: 1;
}

/* Reduced motion \u2014 respect prefers-reduced-motion for users sensitive to animation */
@media (prefers-reduced-motion: reduce) {
  :host { animation: none; }
  .pc-power-bar-fill.pc-bar-active { animation: none; }
  .pc-heating-glow { animation: none; }
  .pc-zone-row-pulse.pc-heating { animation: none; }
  .pc-pulse-dot.pc-connected { animation: none; }
  .pc-temp-transitioning { filter: none; transition: none; }
  .pc-atmosphere-wash { --pc-atmosphere-opacity: 0.3; }
}

/* \u2500\u2500 Timeline group \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 * Shared row grid for both Thermal and State tabs inside timeline_group.
 * Layout: 70px name \xB7 1fr cells \xB7 60px stat. State and thermal views render
 * row-by-row using this grid so zones stay vertically aligned across tab
 * switches. Body renderers also drive system_health_group rows; the host
 * owns the section header + tab strip. */

.pc-section-timeline-group {
  display: flex; flex-direction: column;
  gap: var(--pulse-space-tight);
}


.pc-timeline-group-tabs,
.pc-system-health-group-tabs {
  display: flex; gap: 0;
  font-size: var(--pulse-font-caption);
  margin-bottom: 6px;
  border-bottom: 1px solid color-mix(in srgb, var(--pulse-text-primary) 6%, transparent);
}

.pc-timeline-group-tab,
.pc-system-health-group-tab {
  padding: 8px 14px; cursor: pointer;
  color: var(--pulse-text-secondary);
  border-bottom: 1px solid transparent;
  text-transform: uppercase; letter-spacing: 0.6px;
  font-weight: var(--pulse-weight-semibold);
  transition: color var(--pulse-anim-fast), border-bottom-color var(--pulse-anim-fast);
  user-select: none;
}

.pc-timeline-group-tab:hover,
.pc-system-health-group-tab:hover { color: var(--pulse-text-primary); }

.pc-timeline-group-tab.pc-active,
.pc-system-health-group-tab.pc-active {
  color: var(--pulse-tier-strong);
  border-bottom-color: var(--pulse-tier-strong);
}

.pc-timeline-group-row {
  display: grid;
  grid-template-columns: 72px 1fr 56px;
  gap: 6px;
  align-items: center;
  font-size: var(--pulse-font-body);
  margin-bottom: 4px;
}

.pc-timeline-group-name {
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}

.pc-timeline-group-stat {
  text-align: right;
  font-size: var(--pulse-font-label);
  font-variant-numeric: tabular-nums;
  color: var(--pulse-text-secondary);
}

.pc-timeline-group-stat.pc-state-active-heat { color: var(--pulse-tier-strong); }
.pc-timeline-group-stat.pc-state-active-cool { color: var(--pulse-tier-calm); }

.pc-timeline-group-axis {
  margin-top: 6px;
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
  display: grid;
  grid-template-columns: 72px 1fr 56px;
  gap: 6px;
}

.pc-timeline-group-axis .ticks {
  display: flex; justify-content: space-between;
}

.pc-timeline-group-footer {
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid color-mix(in srgb, var(--pulse-text-primary) 4%, transparent);
  display: flex; justify-content: space-between;
  font-size: var(--pulse-font-micro);
  color: var(--pulse-text-secondary);
  flex-wrap: wrap;
  gap: var(--pulse-space-element);
}

.pc-timeline-group-footer strong {
  color: var(--pulse-text-primary);
  font-weight: var(--pulse-weight-medium);
}

.pc-state-legend {
  display: flex; gap: var(--pulse-space-element);
  flex-wrap: wrap;
}

.pc-state-legend-pill {
  display: inline-flex; align-items: center;
  gap: var(--pulse-space-tight);
}

.pc-state-legend-pip {
  display: inline-block;
  width: 10px; height: 10px;
  border-radius: 2px;
}

.pc-state-legend-pip-heat { background: var(--pulse-tier-strong); }
.pc-state-legend-pip-cool { background: var(--pulse-tier-calm); }
.pc-state-legend-pip-idle { background: rgba(255, 255, 255, 0.08); }
.pc-state-legend-pip-off  { background: rgba(255, 255, 255, 0.025); }

/* State row tap-for-details \u2014 single-zone drill-down. Compare overlay is
   intentionally not offered (categorical state timelines don't read
   stacked; the multi-row layout itself is the compare view). */
.pc-state-row { cursor: pointer; border-radius: var(--pulse-radius-pill); transition: background var(--pulse-anim-fast); }
.pc-state-row:hover { background: var(--pulse-bg-hover); }
.pc-state-row.pc-selected {
  background: linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--pulse-tier-strong) 14%, transparent) 50%, transparent 100%);
}

.pc-state-detail-footer {
  margin-top: var(--pulse-space-element);
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
  text-align: right;
}

/* Thermal tab temperature legend \u2014 colour pips paired with anchor temps */
.pc-temp-legend {
  display: flex; gap: var(--pulse-space-element);
  flex-wrap: wrap;
}

.pc-temp-legend-pill {
  display: inline-flex; align-items: center;
  gap: var(--pulse-space-tight);
  font-variant-numeric: tabular-nums;
}

.pc-temp-legend-pip {
  display: inline-block;
  width: 10px; height: 10px;
  border-radius: 2px;
}

/* State timeline cells (consumed by state-timeline-view) */
.pc-state-timeline-cells {
  display: grid;
  grid-template-columns: repeat(48, 1fr);
  gap: 1px;
  height: 16px;
  border-radius: 2px;
  overflow: hidden;
}

.pc-state-cell { display: block; }
.pc-state-cell.pc-state-cell-heat     { background: var(--pulse-tier-strong); }
.pc-state-cell.pc-state-cell-heat-mid { background: rgba(255, 159, 10, 0.55); }
.pc-state-cell.pc-state-cell-heat-low { background: rgba(255, 159, 10, 0.30); }
.pc-state-cell.pc-state-cell-cool     { background: var(--pulse-tier-calm); }
.pc-state-cell.pc-state-cell-cool-mid { background: rgba(90, 200, 250, 0.55); }
.pc-state-cell.pc-state-cell-cool-low { background: rgba(90, 200, 250, 0.30); }
.pc-state-cell.pc-state-cell-idle     { background: rgba(255, 255, 255, 0.08); }
.pc-state-cell.pc-state-cell-off      { background: rgba(255, 255, 255, 0.025); }

`;function Lo(t){!t||t.__pcPhaseAttached||(t.__pcPhaseAttached=!0)}var No={api_usage:"api_usage",api_limit:"api_limit",api_status:"api_status",api_reset:"api_reset",token_status:"token_status",polling_interval:"polling_interval",call_history:"call_history",api_breakdown:"api_breakdown",last_sync:"last_sync",next_sync:"next_sync",outside_temp:"outside_temp",solar_intensity:"solar_intensity",weather:"weather",home_state:"home",bridge_connected:"bridge_connected",boiler_flow_temp:"boiler_flow_temp",wc_target_flow:"wc_target_flow_temp",wc_status:"wc_status",boiler_max_output:"boiler_max_output_temp",homekit_connected:"homekit_connected",homekit_reads_saved:"homekit_reads_saved",homekit_writes_saved:"homekit_writes_saved",bridge_capabilities:"bridge_capabilities",bridge_schema_version:"bridge_schema_version",zone_count:"zone_count",home_id:"home_id",home_insights:"home_insights"},Vn={temperature:"temperature",humidity:"humidity",heating_power:"heating_power",ac_power:"ac_power",target_temp:"target",overlay:"overlay",mold_risk:"mold_risk",mold_risk_pct:"mold_risk_pct",condensation:"condensation_risk",surface_temp:"surface_temp",dew_point:"dew_point",comfort_level:"comfort_level",thermal_inertia:"thermal_inertia",heating_rate:"heating_rate",preheat_time:"preheat_time",confidence:"confidence",heat_accel:"heat_accel",approach_factor:"approach_factor",schedule_deviation:"schedule_deviation",next_schedule:"next_schedule",next_sched_temp:"next_sched_temp",preheat_advisor:"preheat_advisor",comfort_target:"comfort_target",open_window:"window",preheat_now:"preheat_now",window_predicted:"window_predicted",battery:"battery",connection:"connection",insights:"insights"},Un={battery:"battery",connection:"connection"},Wn={temperature:{platform:"sensor",suffixes:["_temp","_temperature"]},humidity:{platform:"sensor",suffixes:["_humidity"]},heating_power:{platform:"sensor",suffixes:["_heating","_heating_power"]},ac_power:{platform:"sensor",suffixes:["_ac","_ac_power"]},target_temp:{platform:"sensor",suffixes:["_ce_target","_target"]},overlay:{platform:"sensor",suffixes:["_ce_overlay","_mode"]},mold_risk:{platform:"sensor",suffixes:["_ce_mold_risk","_mold_risk"]},mold_risk_pct:{platform:"sensor",suffixes:["_ce_mold_risk_pct","_mold_risk_percentage"]},condensation:{platform:"sensor",suffixes:["_ce_condensation","_condensation_risk"]},surface_temp:{platform:"sensor",suffixes:["_ce_surface_temp","_surface_temperature"]},dew_point:{platform:"sensor",suffixes:["_ce_dew_point","_dew_point"]},comfort_level:{platform:"sensor",suffixes:["_ce_comfort_level","_comfort_level"]},thermal_inertia:{platform:"sensor",suffixes:["_ce_thermal_inertia","_thermal_inertia"]},heating_rate:{platform:"sensor",suffixes:["_ce_heating_rate","_avg_heating_rate"]},preheat_time:{platform:"sensor",suffixes:["_ce_preheat_time","_preheat_time"]},confidence:{platform:"sensor",suffixes:["_ce_confidence","_analysis_confidence"]},schedule_deviation:{platform:"sensor",suffixes:["_ce_schedule_deviation","_historical_deviation"]},next_schedule:{platform:"sensor",suffixes:["_ce_next_schedule","_next_schedule_time"]},next_sched_temp:{platform:"sensor",suffixes:["_ce_next_sched_temp","_next_schedule_temp"]},preheat_advisor:{platform:"sensor",suffixes:["_ce_preheat_advisor","_preheat_advisor"]},comfort_target:{platform:"sensor",suffixes:["_ce_comfort_target","_smart_comfort_target"]},heat_accel:{platform:"sensor",suffixes:["_ce_heat_accel","_heat_acceleration"]},approach_factor:{platform:"sensor",suffixes:["_ce_approach_factor","_approach_factor"]},open_window:{platform:"binary_sensor",suffixes:["_window","_open_window"]},preheat_now:{platform:"binary_sensor",suffixes:["_ce_preheat_now","_preheat_now"]},window_predicted:{platform:"binary_sensor",suffixes:["_ce_window_predicted","_window_predicted"]},battery:{platform:"sensor",suffixes:["_ce_battery","_battery"]},connection:{platform:"binary_sensor",suffixes:["_ce_connection","_connection"]},insights:{platform:"sensor",suffixes:["_ce_insights","_insights"]}},Gn={api_usage:{platform:"sensor",suffixes:["_api_usage"]},api_limit:{platform:"sensor",suffixes:["_api_limit"]},api_status:{platform:"sensor",suffixes:["_api_status"]},api_reset:{platform:"sensor",suffixes:["_api_reset"]},token_status:{platform:"sensor",suffixes:["_token_status"]},polling_interval:{platform:"sensor",suffixes:["_polling_interval"]},call_history:{platform:"sensor",suffixes:["_call_history"]},api_breakdown:{platform:"sensor",suffixes:["_api_breakdown","_api_call_breakdown"]},last_sync:{platform:"sensor",suffixes:["_last_sync"]},next_sync:{platform:"sensor",suffixes:["_next_sync"]},outside_temp:{platform:"sensor",suffixes:["_outside_temp"]},solar_intensity:{platform:"sensor",suffixes:["_solar_intensity"]},weather:{platform:"sensor",suffixes:["_weather","_weather_state"]},home_state:{platform:"binary_sensor",suffixes:["_home"]},bridge_connected:{platform:"binary_sensor",suffixes:["_bridge_connected","_bridge"]},boiler_flow_temp:{platform:"sensor",suffixes:["_boiler_flow_temp"]},wc_target_flow:{platform:"sensor",suffixes:["_wc_target_flow_temp"]},wc_status:{platform:"sensor",suffixes:["_wc_status"]},boiler_max_output:{platform:"number",suffixes:["_boiler_max_output_temp"]},homekit_connected:{platform:"binary_sensor",suffixes:["_homekit_connected"]},homekit_reads_saved:{platform:"sensor",suffixes:["_homekit_reads_saved"]},homekit_writes_saved:{platform:"sensor",suffixes:["_homekit_writes_saved"]},bridge_capabilities:{platform:"sensor",suffixes:["_bridge_capabilities"]},bridge_schema_version:{platform:"sensor",suffixes:["_bridge_schema_version"]},zone_count:{platform:"sensor",suffixes:["_zone_count","_zones_count"]},home_id:{platform:"sensor",suffixes:["_home_id"]},home_insights:{platform:"sensor",suffixes:["_home_insights"]}};function jn(t){let e=new Map;for(let[i,n]of Object.entries(t))n.platform==="tado_ce"&&n.translation_key&&(e.has(n.translation_key)||e.set(n.translation_key,i));return{byTranslationKey:e}}function Zn(t,e){let i={};for(let[n,o]of Object.entries(No)){let r=e.byTranslationKey.get(o);r&&(i[n]=r)}return i}function Kn(t,e,i){let n={},o={...Vn,...Un};for(let r of e){n[r]={};let a=`climate.${r}`,s=t[a];if(!s?.device_id||s.platform!=="tado_ce")continue;let l=s.device_id;for(let[c,d]of Object.entries(t)){if(d.platform!=="tado_ce"||d.device_id!==l||!d.translation_key||!i[c])continue;let u=d.translation_key;if(u.endsWith("_suffixed")){let h=u.replace("_suffixed",""),p=Object.keys(o).find(f=>o[f]===h);if(!p)continue;if(!n[r][p])n[r][p]=c;else{let f=2;for(;n[r][`${p}_${f}`];)f++;n[r][`${p}_${f}`]=c}}else{let h=Object.keys(o).find(p=>o[p]===u);if(!h)continue;n[r][h]||(n[r][h]=c)}}}return n}function Ho(t){let e={},i=Object.keys(t);for(let[n,{platform:o,suffixes:r}]of Object.entries(Gn))for(let a of r){let s=i.find(l=>l.startsWith(`${o}.tado_ce`)&&l.endsWith(a));if(s){e[n]=s;break}}return e}function Fo(t,e){let i={};for(let n of e){i[n]={};for(let[o,{platform:r,suffixes:a}]of Object.entries(Wn))for(let s of a){let l=`${r}.${n}${s}`;if(t[l]){i[n][o]=l;break}}}return i}var yt={states:null,zoneNames:null,result:null};function Do(t,e,i){if(yt.result&&yt.states===t&&yt.zoneNames!==null&&yt.zoneNames.length===e.length&&yt.zoneNames.every((c,d)=>c===e[d]))return yt.result;let n=!1,o=!1;i&&(n=Object.values(i).some(c=>c.platform==="tado_ce"),o=n),n||(n=Object.keys(t).some(c=>c.startsWith("sensor.tado_ce_")));let r={};if(n)if(o){let c=jn(i);r=Zn(i,c);let d=Ho(t);for(let[u,h]of Object.entries(d))r[u]||(r[u]=h)}else r=Ho(t);let a;if(o){a=Kn(i,e,t);let c=Fo(t,e);for(let d of e){a[d]||(a[d]={});let u=c[d]||{};for(let[h,p]of Object.entries(u))a[d][h]||(a[d][h]=p)}}else a=Fo(t,e);let s=Object.keys(No).filter(c=>!r[c]),l={isTadoCE:n,hubEntities:r,zoneEntities:a,missingHubKeys:s};if(n)for(let[c,d]of Object.entries(a))Object.keys(d).length===0&&console.debug(`${bt} zone "${c}" \u2014 no Tado CE entities discovered. Check entity_id matches sensor.<zone>_temperature pattern, or use temperature_entity / set_point_entity overrides.`);return yt={states:t,zoneNames:[...e],result:l},l}function V(t){return t.replace(/^(climate|sensor|binary_sensor)\./,"")}var pt=Zt(bt);function J(t){return t?.isUnavailable?" pc-row-unavail pc-row-quiet":t?.hvacMode==="sensor"?" pc-row-sensor pc-row-quiet":t?.hvacAction==="heating"?" pc-row-heat pc-row-active":t?.hvacAction==="cooling"?" pc-row-cool pc-row-active":t?.hvacAction==="off"||t?.targetTemp===null||t?.targetTemp===void 0?" pc-row-off pc-row-quiet":t?.currentTemp!==null&&t?.currentTemp!==void 0&&Math.abs(t.currentTemp-t.targetTemp)<=.3?" pc-row-at-target pc-row-mid":" pc-row-idle pc-row-mid"}function K(t,e,i,n){let o=t.entity,r=V(o),a=e?.zoneEntities?.[r]||{},s=Ct(o,a,i,t,n||{});return{entityId:o,zoneName:r,zoneEntities:a,zoneState:s}}var Ro=new Set;function ne(t,e,i,n){if(!i||n[i])return;let o=`${t}|${e}|${i}`;Ro.has(o)||(Ro.add(o),pt(`zone "%s": ${e} override points at missing entity "%s" \u2014 chip will not render`,t,i))}function At(t){let e=_t[t]||_t.idle;return{...e,glow:t==="heating"||t==="cooling"?e.fallback:null}}function ie(t){let e=t.filter(r=>!r.isUnavailable);if(e.length===0)return"off";let i=0,n=0,o=0;for(let r of e)r.hvacAction==="heating"?i+=1:r.hvacAction==="cooling"?n+=1:r.hvacAction==="off"&&(o+=1);return i>0&&n>0?"mixed":i>0?"heating":n>0?"cooling":o===e.length?"off":"idle"}function Rt(t,e,i){let n=Ct(t,{},e,i||{entity:t},{});return{name:n.name,temp:n.currentTemp??void 0,target:n.targetTemp??void 0,humidity:n.humidity??void 0,hvacAction:n.hvacAction,unit:n.unit}}function se(t){let e=t.charAt(0).toUpperCase()+t.slice(1).toLowerCase();return ze[e]||ze.Low}function Pt(t,e,i){return i<=e?50:et((t-e)/(i-e),0,1)*100}function Xn(t,e,i,n){let o=[],r=!n,a=l=>r||n.includes(l);if(n&&a("humidity")&&t.humidity!==null&&o.push({type:"humidity",icon:"mdi:water-percent",label:`${Math.round(t.humidity)}%`}),a("hvac_action")){let l=At(t.hvacAction);o.push({type:"hvac_action",icon:l.icon,label:l.label,color:l.fallback})}if(a("overlay")&&t.overlayType){let l=t.overlayType==="Manual"?"mdi:hand-back-right":"mdi:calendar-clock";o.push({type:"overlay",icon:l,label:t.overlayType,entityId:e.overlay})}if(a("preset")&&t.presetMode){let l=t.presetMode==="away"?"mdi:home-export-outline":"mdi:home";o.push({type:"preset",icon:l,label:t.presetMode==="away"?"Away":"Home"})}let s=(l,c,d)=>{if(!a(l)||!e[d])return;let u=i[e[d]];if(!U(u)&&u.state.toLowerCase()!=="none"){let h=se(u.state);o.push({type:l,icon:c,label:u.state,color:h.token,severity:u.state,entityId:e[d]})}};if(a("open_window")&&e.open_window){let l=i[e.open_window];if(l){let c=l.state==="on";o.push({type:"open_window",icon:c?"mdi:window-open":"mdi:window-closed",label:c?"Open":"Closed",color:c?"var(--pulse-tier-gale)":void 0,entityId:e.open_window})}}if(a("window_predicted")&&e.window_predicted){let l=i[e.window_predicted];l&&l.state==="on"&&o.push({type:"window_predicted",icon:"mdi:window-open-variant",label:"Window predicted",color:"var(--pulse-tier-strong)",entityId:e.window_predicted})}if(s("mold_risk","mdi:mushroom","mold_risk"),s("condensation","mdi:water-alert","condensation"),a("comfort_level")&&e.comfort_level){let l=i[e.comfort_level];U(l)||o.push({type:"comfort_level",icon:"mdi:emoticon-outline",label:l.state,entityId:e.comfort_level})}if(a("preheat_now")&&e.preheat_now){let l=i[e.preheat_now];l&&l.state==="on"&&o.push({type:"preheat_now",icon:"mdi:radiator",label:"Preheating",color:"var(--pulse-tier-strong)",entityId:e.preheat_now})}if(a("battery")||a("battery_all")){let l=n&&n.includes("battery_all"),c=[],d=["battery"],u=2;for(;e[`battery_${u}`];)d.push(`battery_${u}`),u++;for(let h of d){let p=e[h];if(!p)continue;let f=i[p];U(f)||c.push({eid:p,state:f.state,lower:f.state.toLowerCase()})}if(c.length>0)if(l)for(let h=0;h<c.length;h++){let p=c[h],f=p.lower==="low"||p.lower==="critical"?"mdi:battery-alert":"mdi:battery",v=p.lower==="critical"?"var(--pulse-tier-gale)":p.lower==="low"?"var(--pulse-tier-strong)":void 0;o.push({type:`battery${h>0?`_${h+1}`:""}`,icon:f,label:p.state,color:v,entityId:p.eid})}else{let h={critical:3,low:2,normal:1},p=c[0];for(let _ of c)(h[_.lower]||0)>(h[p.lower]||0)&&(p=_);let f=p.lower==="low"||p.lower==="critical"?"mdi:battery-alert":"mdi:battery",v=p.lower==="critical"?"var(--pulse-tier-gale)":p.lower==="low"?"var(--pulse-tier-strong)":void 0;o.push({type:"battery",icon:f,label:p.state,color:v,entityId:p.eid})}}if(a("valve_control")){let c=i[t.entityId]?.attributes||{},d=c.valve_control_active,u=c.valve_target,h=c.valve_control_backed_off,p=c.valve_control_enabled;h===!0?o.push({type:"valve_control",icon:"mdi:valve",label:"Valve: Backed off",color:"var(--pulse-disabled)"}):d===!0&&u!==void 0?o.push({type:"valve_control",icon:"mdi:valve",label:`Valve: ${O(u)}${t.unit}`,color:"var(--pulse-tier-strong)"}):p===!0&&o.push({type:"valve_control",icon:"mdi:valve",label:"Valve: Idle",color:"var(--pulse-disabled)"})}if(n&&a("temp_source")){let c=i[t.entityId]?.attributes?.temperature_source;if(c&&c!=="cloud"){let d=c==="external"?"mdi:thermometer-probe":c==="homekit"?"mdi:apple":"mdi:cloud-outline";o.push({type:"temp_source",icon:d,label:c.charAt(0).toUpperCase()+c.slice(1)})}}return o}function Ct(t,e,i,n,o){let r=i[t],a=U(r),s=r?.attributes||{},l=t.startsWith("sensor."),c=l?a?null:parseFloat(r?.state)||null:s.current_temperature??null,d=a||r?.state==="off"?null:s.temperature??null,u=l?null:s.current_humidity??null,h=l?"idle":s.hvac_action||(r?.state==="off"?"off":"idle"),p=l?"sensor":r?.state||"off",f=s.preset_mode||"",v=Number(s.min_temp??5),_=Number(s.max_temp??35),g=Number(s.target_temp_step??.5),b=s.unit_of_measurement||"\xB0C",y=0,x=n.heating_power_entity||e.heating_power;if(n.heating_power_entity&&ne(n.name||t,"heating_power_entity",n.heating_power_entity,i),x){let T=i[x];U(T)||(y=parseFloat(T.state)||0)}else s.heating_power!==void 0&&(y=parseFloat(s.heating_power)||0);let S=0;if(e.ac_power){let T=i[e.ac_power];U(T)||(S=parseFloat(T.state)||0)}let A="";if(e.overlay){let T=i[e.overlay];U(T)||(A=T.state)}else s.overlay_type&&(A=s.overlay_type);let M=n.name||s.friendly_name||t.replace(/^(climate|sensor)\./,""),I=n.icon||s.icon||"mdi:thermometer",z=n.chips||o.chips||null,L={...e},$=n.name||t;n.open_window_entity&&(L.open_window=n.open_window_entity,ne($,"open_window_entity",n.open_window_entity,i)),n.battery_entity&&(L.battery=n.battery_entity,ne($,"battery_entity",n.battery_entity,i)),n.mold_risk_entity&&(L.mold_risk=n.mold_risk_entity,ne($,"mold_risk_entity",n.mold_risk_entity,i));let w={entityId:t,name:M,icon:I,isUnavailable:a,currentTemp:c,targetTemp:d,humidity:u,heatingPower:y,coolingPower:S,hvacAction:h,hvacMode:p,presetMode:f,overlayType:A,minTemp:v,maxTemp:_,tempStep:g,unit:b,chips:[]};return w.chips=Xn(w,L,i,z),w}var Po=280;function Ee(t,e=Po){return t<=50?0:(2+(t-50)/50*3)*(e/Po)}function qo(t,e=20,i=1){if(i<=0)return 0;let n=Math.min(4,Math.max(2,Math.round(t/30))),o=Math.floor(e/i);return Math.min(n,o)}function Oo(t){return 4-t/100*2.5}function Bo(t,e){return 1.5+t/e*1.5}function It(t,e){return 3*(t/e)}function Vo(t){if(!t)throw new Error("Please define an entity or zones");if(!t.entity&&!t.zones)throw new Error("Please define an entity or zones");if(t.entity&&typeof t.entity=="string"&&!t.entity.startsWith("climate.")&&!t.entity.startsWith("water_heater."))throw new Error("Entity must be a climate.* or water_heater.* entity");let e;t.zones?e=t.zones.map(r=>typeof r=="string"?{entity:r}:{...r}):e=[{entity:t.entity}];for(let r of e)if(!r.entity||typeof r.entity!="string")throw new Error("Each zone must have an entity ID");let i=t.atmosphere_intensity,n=i==="subtle"||i==="bold"?i:"medium",o={...t,columns:Number(t.columns)||ut.columns,layout:t.layout||ut.layout,show_temp_bar:t.show_temp_bar??ut.show_temp_bar,show_power_bar:t.show_power_bar??ut.show_power_bar,show_atmosphere:t.show_atmosphere!==!1,atmosphere_intensity:n,show_hero:t.show_hero===!0,hero_show_thermal_strip:t.hero_show_thermal_strip!==!1,hero_show_outside:t.hero_show_outside!==!1,tap_action:t.tap_action||{...ut.tap_action},hold_action:t.hold_action||{...ut.hold_action},double_tap_action:t.double_tap_action||{...ut.double_tap_action},sections:t.sections||[...Mo],_zones:e};return Array.isArray(o.sections)&&(o.sections=o.sections.map(r=>{let a=typeof r=="string"?{type:r}:{...r},s=Eo[a.type];if(s){for(let[l,c]of Object.entries(s))if(a[l]===void 0||a[l]===null)a[l]=c;else if(typeof c=="number"){let d=Number(a[l]);Number.isFinite(d)?a[l]=d||c:(pt('section "%s": %s=%o is not numeric \u2014 using default %o',a.type,l,a[l],c),a[l]=c)}}return a})),o}function Le(t,e,i){let n=new Map;if(!Array.isArray(t))return n;for(let o of t){if(!o?.entity)continue;let r=i?i(o.entity):o.entity;n.set(o.entity,e?.data?.[r]||[])}return n}function zt(t){return typeof t=="string"&&t.length>0}function Y(t,e,i,n){if(zt(n?.temperature_entity))return{entityId:n.temperature_entity,source:"yaml_override"};let r=e[t]?.attributes?.external_temp_sensor;return zt(r)&&e[r]?{entityId:r,source:"external"}:zt(i?.temperature)?{entityId:i.temperature,source:"discovery"}:{entityId:t,source:"climate_fallback"}}function ht(t,e,i,n){if(zt(n?.humidity_entity))return{entityId:n.humidity_entity,source:"yaml_override"};let r=e[t]?.attributes?.external_humidity_sensor;return zt(r)&&e[r]?{entityId:r,source:"external"}:zt(i?.humidity)?{entityId:i.humidity,source:"discovery"}:null}var qt={timestamp:0,data:{},stateData:{}};function Uo(){return qt}function Wo(t,e){let i={...qt.data};for(let[o,r]of Object.entries(t))r.length>0&&(i[o]=r);let n={...qt.stateData};if(e)for(let[o,r]of Object.entries(e))Array.isArray(r)&&r.length>0&&(n[o]=r);return qt={timestamp:Date.now(),data:i,stateData:n},qt}function Go(){return{timestamp:0,data:{},stateData:{}}}function He(t){return t.timestamp>0&&Date.now()-t.timestamp<3e5}function jo(t,e){let i={...t.data};for(let[n,o]of Object.entries(e))o.length>0&&(i[n]=o);return{timestamp:Date.now(),data:i}}function Fe(t,e){if(t.length===0||e<1)return[];let i=t[0].t,r=(t[t.length-1].t-i||1)/e,a=[],s=0,l=t[0].v;for(let c=0;c<e;c++){let d=i+(c+1)*r,u=0,h=0;for(;s<t.length&&t[s].t<d;)u+=t[s].v,h++,s++;h>0&&(l=u/h),a.push({x:c/(e-1||1),v:l})}return a}function Ko(t,e,i,n,o){let a=i-4,s=o-n||1,l=t.map(c=>({x:c.x*e,y:2+a-(c.v-n)/s*a}));return xe(l)}function Xo(t,e,i,n=48){if(!t||t.length===0)return[];let o=1/0,r=-1/0;for(let a of t)for(let s of a.data)isFinite(s.v)&&(s.v<o&&(o=s.v),s.v>r&&(r=s.v));return isFinite(o)||(o=0),isFinite(r)||(r=100),t.map(a=>{let s=a.data.filter(d=>isFinite(d.v));if(s.length<2)return{entityId:a.entityId,color:a.color,d:""};let l=Fe(s,n),c=Ko(l,e,i,o,r);return{entityId:a.entityId,color:a.color,d:c}})}function Yn(t,e,i,n){if(!t||t.length===0)return[];let o=i??e/2-2,r=n??o*.6,a=e/2,s=e/2,l=t.map(h=>Math.max(0,h.value)),c=l.reduce((h,p)=>h+p,0);if(c===0)return[];let d=[],u=-90;for(let h=0;h<t.length;h++){if(l[h]===0)continue;let p=l[h]/c*360;p>=360&&(p=359.9);let f=u+p,v=ae(a,s,r,o,u,f);d.push({label:t[h].label,color:t[h].color,d:v,angle:p}),u=f}return d}function Ne(t="pc-bloom"){return Kt(t)}function st(t,e=1.5,i){let n=i||"-30%",o=i==="-5%"?"110%":"160%",r=i===void 0?"":` x="${n}" y="${n}" width="${o}" height="${o}"`;return`<filter id="${t}"${r}><feGaussianBlur stdDeviation="${e}" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`}function re(t,e={}){let i=e.size||120,n=e.ariaLabel||t.map(g=>`${g.label} ${g.value}`).join(", "),o=e.centerNumStyle||"",r=e.centerLabel,a=Yn(t,i),s=t.reduce((g,b)=>g+b.value,0);if(t.length===0)return{html:"",total:0};let l=Ne("donut-bloom"),c=0,d=-1;for(let g=0;g<a.length;g++){let b=t[g]?.value||0;b>c&&(c=b,d=g)}let u=i<=80?1.5:3,h=`<svg viewBox="0 0 ${i} ${i}" role="img" aria-label="${m(n)}">`;h+=`<defs>${st(l,u,"-30%")}</defs>`;let p=i/2-2,f=p*.6;h+=`<circle cx="${i/2}" cy="${i/2}" r="${((p+f)/2).toFixed(1)}" fill="none" stroke="var(--pulse-border-divider)" stroke-width="${(p-f).toFixed(1)}" />`;for(let g=0;g<a.length;g++){let b=a[g],y=g===d,x=y?"pc-donut-arc pc-donut-arc-active":"pc-donut-arc",S=y?` filter="url(#${l})"`:"";h+=`<path d="${b.d}" fill="${k(b.color)}" class="${x}"${S} data-segment="${m(b.label)}"><title>${m(b.label)}: ${Math.round(b.angle/360*s)}</title></path>`}h+="</svg>";let v='<div class="pc-donut-center">',_=o?` style="${o}"`:"";return v+=`<div class="pc-donut-center-num"${_}>${m(Math.round(s))}</div>`,r!=null&&(v+=`<div class="pc-donut-center-label">${m(r)}</div>`),v+="</div>",{html:h+v,total:s}}function Mt(t){if(!t||t.length===0)return"";let e='<div class="pc-chart-legend">';for(let i of t){let n=k(i.color),o=m(i.label),r=i.value!==void 0&&i.value!==null?` ${m(i.value)}`:"";e+=`<span class="pc-legend-chip"><span class="pc-legend-dot" style="background:${n}"></span>${o}${r}</span>`}return e+="</div>",e}var De=[{upper:14,color:"#1565C0"},{upper:16,color:"#4FC3F7"},{upper:17,color:"#4DB6AC"},{upper:18,color:"#81C784"},{upper:19,color:"#AED581"},{upper:20,color:"#C5E1A5"},{upper:21,color:"#FFF176"},{upper:22,color:"#FFB74D"},{upper:23,color:"#FF8A65"},{upper:24,color:"#EF5350"},{upper:null,color:"#C62828"}];function X(t){for(let e of De)if(e.upper===null||t<=e.upper)return e.color;return"#C62828"}function Ot(t){return t<=20?"#C62828":t<=30?"#EF5350":t<=35?"#FF8A65":t<=40?"#FFB74D":t<=45?"#AED581":t<=55?"#4CAF50":t<=60?"#AED581":t<=65?"#4DB6AC":t<=70?"#4FC3F7":t<=80?"#1E88E5":"#1565C0"}function ae(t,e,i,n,o,r){let a=o*Math.PI/180,s=r*Math.PI/180,l=r-o,c=Math.abs(l)>180?1:0,d=t+n*Math.cos(a),u=e+n*Math.sin(a),h=t+n*Math.cos(s),p=e+n*Math.sin(s),f=t+i*Math.cos(s),v=e+i*Math.sin(s),_=t+i*Math.cos(a),g=e+i*Math.sin(a);return[`M${d.toFixed(2)},${u.toFixed(2)}`,`A${n.toFixed(2)},${n.toFixed(2)} 0 ${c} 1 ${h.toFixed(2)},${p.toFixed(2)}`,`L${f.toFixed(2)},${v.toFixed(2)}`,`A${i.toFixed(2)},${i.toFixed(2)} 0 ${c} 0 ${_.toFixed(2)},${g.toFixed(2)}`,"Z"].join(" ")}function dt(t,e,i,n=48){if(!t||t.length<2)return null;let o=t.filter(h=>isFinite(h.v));if(o.length<2)return null;let r=Date.now(),a=o[o.length-1];r-a.t>6e5&&o.push({t:r,v:a.v});let s=Fe(o,n);if(s.length<2)return null;let l=1/0,c=-1/0;for(let h of s)h.v<l&&(l=h.v),h.v>c&&(c=h.v);isFinite(l)||(l=0),isFinite(c)||(c=100);let d=Ko(s,e,i,l,c);if(!d)return null;let u=`${d} L${e.toFixed(1)},${i.toFixed(1)} L0,${i.toFixed(1)} Z`;return{linePath:d,areaPath:u}}function Re(t,e=24,i=""){if(!t||t.length<2)return"";let n=t.filter(c=>isFinite(c.v));if(n.length<2)return"";let o=Fe(n,e),r=n[0].t,a=n[n.length-1].t,s=n.every(c=>Number.isInteger(c.v)),l={u:i,d:[]};return l.d=o.map(c=>{let d=r+c.x*(a-r),u=new Date(d),h=`${String(u.getHours()).padStart(2,"0")}:${String(u.getMinutes()).padStart(2,"0")}`,p=s?Math.round(c.v):Math.round(c.v*10)/10;return{l:h,v:p}}),JSON.stringify(l)}function mt(t,e,i,n,o,r=""){if(!t||t.length<2)return"";let a=dt(t,e,i,24);if(!a)return"";let s=k(n),l=`<div class="pc-sparkline-filled" style="height:${i}px">`;return l+=`<svg viewBox="0 0 ${e} ${i}" role="img" aria-label="${m(r)}" preserveAspectRatio="none" style="width:100%;height:${i}px;display:block">`,l+=`<defs><linearGradient id="${m(o)}" x1="0" y1="0" x2="0" y2="1">`,l+=`<stop offset="0%" stop-color="${s}" stop-opacity="0.3"/>`,l+=`<stop offset="100%" stop-color="${s}" stop-opacity="0"/>`,l+="</linearGradient></defs>",l+=`<path d="${a.areaPath}" fill="url(#${m(o)})" />`,l+=`<path d="${a.linePath}" fill="none" stroke="${s}" stroke-width="1.5" />`,l+="</svg></div>",l}var Jn=new Set(["friendly_name","icon","unit_of_measurement","device_class"]);function le(t,e){let i=[],n=0;if(Array.isArray(t.chart_data)&&t.chart_data.length>0){for(let o of t.chart_data)o.type&&typeof o.count=="number"&&(i.push({label:o.type,value:Math.max(0,o.count),color:e[n%e.length]}),n++);return i}if(t.breakdown_24h&&typeof t.breakdown_24h=="object"){for(let[o,r]of Object.entries(t.breakdown_24h)){let a=Number(r);!isNaN(a)&&a>0&&(i.push({label:o,value:a,color:e[n%e.length]}),n++)}return i}for(let[o,r]of Object.entries(t)){if(Jn.has(o))continue;let a=Number(r);isNaN(a)||(i.push({label:o,value:Math.max(0,a),color:e[n%e.length]}),n++)}return i}var Zo={heating:{cold:"#171717",hot:"#ff9f0a"},cooling:{cold:"#171717",hot:"#5ac8fa"},idle:{cold:"#171717",hot:"#525252"},off:{cold:"#171717",hot:"#262626"}};function Yo(t,e,i){let n=i&&Zo[i]||Zo.off,o=(e?.maxTemp??30)-(e?.minTemp??0);if(o<=0)return n.cold;let r=Math.max(0,Math.min(1,(t-(e?.minTemp??0))/o));return _o(n.cold,n.hot,r)}function Qn(t,e,i,n){let o=e.show_temp_bar??i.show_temp_bar??!0,r=e.show_power_bar??i.show_power_bar??!0,a=t.isUnavailable?" pc-unavailable":"",s=!t.isUnavailable&&t.currentTemp!==null&&t.currentTemp!==void 0&&t.targetTemp!==null&&t.targetTemp!==void 0&&Math.abs(t.currentTemp-t.targetTemp)<=.3,l,c;t.isUnavailable?(l=" pc-row-unavail",c='<span class="pc-state-tag pc-tag-unavail">Unavail</span>'):t.hvacAction==="heating"?(l=" pc-row-heat",c='<span class="pc-state-tag pc-tag-heat">Heat</span>'):t.hvacAction==="cooling"?(l=" pc-row-cool",c='<span class="pc-state-tag pc-tag-cool">Cool</span>'):t.hvacAction==="off"?(l=" pc-row-off",c='<span class="pc-state-tag pc-tag-off">Off</span>'):s?(l=" pc-row-at-target",c='<span class="pc-state-tag pc-tag-at-target">At target</span>'):(l=" pc-row-idle",c='<span class="pc-state-tag pc-tag-idle">Idle</span>');let d=t.isUnavailable?"":t.currentTemp!==null?`${O(t.currentTemp)}${m(t.unit)}`:"--",u=!t.isUnavailable&&t.targetTemp!==null?`<span class="pc-zone-target">\u2192 ${O(t.targetTemp)}${m(t.unit)}</span>`:"",h=!t.isUnavailable&&t.humidity!==null?` <span class="pc-zone-humidity"><ha-icon icon="mdi:water-percent"></ha-icon>${Math.round(t.humidity)}%</span>`:"",p=t.isUnavailable?`${m(t.name)}: Unavailable`:`${m(t.name)}: ${d}${t.targetTemp!==null?`, target ${O(t.targetTemp)}${t.unit}`:""}${t.humidity!==null?`, ${Math.round(t.humidity)}% humidity`:""}, ${t.hvacAction}`,f=`<div class="pc-zone-row${a}${l}" tabindex="0" role="button"
    aria-label="${m(p)}" data-entity="${m(t.entityId)}">`;if(f+='<div class="pc-row-ribbon"></div>',f+='<div class="pc-zone-header">',f+=`<span class="pc-zone-name">${t.icon&&t.icon!=="mdi:thermometer"?`<ha-icon icon="${m(t.icon)}"></ha-icon> `:""}${m(t.name)}${h}</span>`,f+=`<span class="pc-zone-temp">${d}${u}${c}</span>`,f+="</div>",o&&!t.isUnavailable){let _=t.currentTemp!==null?Pt(t.currentTemp,t.minTemp,t.maxTemp):50,g=t.targetTemp!==null?Pt(t.targetTemp,t.minTemp,t.maxTemp):null,b=X(t.minTemp),y=X((t.minTemp+t.maxTemp)/2),x=X(t.maxTemp),S=`linear-gradient(to right, ${k(b)}, ${k(y)}, ${k(x)})`;f+='<div class="pc-temp-gauge">',f+=`<div class="pc-temp-gauge-bg" style="background:${S}"></div>`,f+=`<div class="pc-temp-gauge-current" style="left:${k(_.toFixed(1))}%"></div>`,g!==null&&(f+=`<div class="pc-temp-gauge-target" style="left:${k(g.toFixed(1))}%"></div>`),f+="</div>"}if(r&&!t.isUnavailable){let _=t.heatingPower||t.coolingPower||0,g=At(t.hvacAction),b=g.token||g.fallback;if(_>0||t.hvacAction==="heating"||t.hvacAction==="cooling"){let y=Math.min(100,Math.max(0,_)),x=_>0?" pc-bar-active":"";f+='<div class="pc-power-bar-container">',f+='<div class="pc-power-bar-track"></div>',f+=`<div class="pc-power-bar-fill${x}" style="width:${k(y.toFixed(1))}%;background:${k(b)};--pc-bar-glow:${k(g.fallback)}40"></div>`,f+="</div>"}}if(t.chips.length>0){f+='<div class="pc-zone-chips">';for(let _ of t.chips){let g=_.severity?` pc-severity-${_.severity.toLowerCase()}`:"",b=_.color?` style="color:${k(_.color)}"`:"",y=_.entityId?` data-entity="${m(_.entityId)}"`:"";f+=`<span class="pc-chip${g}"${b}${y} data-chip-type="${m(_.type)}">`,f+=`<ha-icon icon="${m(_.icon)}"></ha-icon>`,f+=`${m(_.label)}`,f+="</span>"}f+="</div>"}let v=e.sparkline?.mode||"overlay";if(v==="pulse"&&!t.isUnavailable)return ti(t,e,n);if(!t.isUnavailable&&n&&n.length>=2){let _=At(t.hvacAction),g=e.color||_.fallback;v==="prominent"&&(f+=ei(g,n,t.unit,t.entityId))}return f+="</div>",f}function ti(t,e,i){let n=At(t.hvacAction),o=t.heatingPower>0||t.hvacAction==="heating",r=t.hvacAction==="cooling",a=o||r,s=a?e.color||n.fallback:"var(--pulse-text-secondary)",l=k(s),c=m(t.entityId).replace(/\./g,"-"),d=t.heatingPower||t.coolingPower||0,u=t.hvacAction==="heating"?`Heating ${Math.round(d)}%`:t.hvacAction==="cooling"?`Cooling ${Math.round(d)}%`:"Idle",h=t.currentTemp!==null?`${O(t.currentTemp)}${m(t.unit)}`:"--",p=t.targetTemp!==null?`\u2192 ${O(t.targetTemp)}${m(t.unit)}`:"",f=`${m(t.name)}: ${h}, ${u}`,v=`pc-zone-row pc-zone-row-pulse${o?" pc-heating":""}`,_=Re(i||[],24,t.unit),g=`<div class="${v}" tabindex="0" role="button"
    aria-label="${m(f)}" data-entity="${m(t.entityId)}"${_?` data-sparkline='${m(_)}'`:""}>`;if(i&&i.length>=2){let b=dt(i,360,56,60);if(b){let y=`pulse-grad-${c}`,x=`pulse-glow-${c}`,S=a?" pc-heating-glow":"",A=a?"0.55":"0.2",M=a?"0.05":"0.02",I=a?"2":"1.5",z=a?"1":"0.5";g+='<svg class="pc-pulse-bg" viewBox="0 0 360 56" preserveAspectRatio="none">',g+="<defs>",g+=`<linearGradient id="${y}" x1="0" y1="0" x2="0" y2="1">`,g+=`<stop offset="0%" stop-color="${l}" stop-opacity="${A}"/>`,g+=`<stop offset="100%" stop-color="${l}" stop-opacity="${M}"/>`,g+="</linearGradient>",a&&(g+=st(x,It(360,360).toFixed(1))),g+="</defs>",g+=`<path d="${b.areaPath}" fill="url(#${y})" />`,g+=`<path d="${b.linePath}" fill="none" stroke="${l}" stroke-width="${I}" opacity="${z}"`,a&&(g+=` filter="url(#${x})" class="${S}"`),g+=" />",g+="</svg>"}}return g+='<div class="pc-pulse-info">',g+='<div class="pc-pulse-info-left">',g+=`<div class="pc-zone-name">${t.icon&&t.icon!=="mdi:thermometer"?`<ha-icon icon="${m(t.icon)}"></ha-icon> `:""}${m(t.name)}</div>`,g+='<div class="pc-pulse-status">',g+=`<span class="pc-status-dot" style="background:${l}"></span>`,g+=`${m(u)}`,g+="</div>",g+="</div>",g+='<div class="pc-pulse-info-right">',g+=`<span class="pc-pulse-current">${m(h)}</span>`,p&&(g+=`<span class="pc-zone-target">${p}</span>`),g+="</div>",g+="</div>",g+="</div>",g}function ei(t,e,i,n){let o=dt(e,300,40,48);if(!o){let d=$t(e,300,40,48,"avg",!0);return d?`<div class="pc-sparkline-prominent"><svg viewBox="0 0 300 40" preserveAspectRatio="none"><path d="${d}" fill="none" stroke="${k(t)}" stroke-width="1.5" opacity="0.7" /></svg></div>`:""}let a=`prom-grad-${n?n.replace(/[^a-z0-9]/gi,"-"):String(Math.random()).slice(2,8)}`,s=k(t),l=Re(e,24,i),c=`<div class="pc-sparkline-filled pc-sparkline-prominent"${l?` data-sparkline='${m(l)}'`:""}>`;return c+='<svg viewBox="0 0 300 40" preserveAspectRatio="none">',c+=`<defs><linearGradient id="${m(a)}" x1="0" y1="0" x2="0" y2="1">`,c+=`<stop offset="0%" stop-color="${s}" stop-opacity="0.3"/>`,c+=`<stop offset="100%" stop-color="${s}" stop-opacity="0"/>`,c+="</linearGradient></defs>",c+=`<path d="${o.areaPath}" fill="url(#${m(a)})" />`,c+=`<path d="${o.linePath}" fill="none" stroke="${s}" stroke-width="1.5" opacity="0.7" />`,c+="</svg></div>",c}function Pe(t,e,i,n,o){if(!t||t.length===0)return"";let r=Number(e.columns)||1,a=r>1?" pc-columns":"",s=r>1?` style="grid-template-columns:repeat(${Number(r)}, 1fr)"`:"",l=`<div class="pc-section pc-section-zones${a}"${s}>`,c=n?.hubEntities?.home_state,d=c?i[c]:null;if(U(d))l+='<div class="pulse-section-label">Zones</div>';else{let u=d.state==="on",h=u?"mdi:home":"mdi:home-export-outline",p=u?"Home":"Away",f=u?"var(--pulse-tier-moderate)":"var(--pulse-text-secondary)";l+='<div class="pc-section-header pc-section-header-center">',l+='<div class="pulse-section-label">Zones</div>',l+=`<span class="pc-chip" data-entity="${m(c)}" style="color:${k(f)}">`,l+=`<ha-icon icon="${m(h)}"></ha-icon>${m(p)}</span>`,l+="</div>"}for(let u of t){let{entityId:h,zoneEntities:p,zoneState:f}=K(u,n,i,e),v=Y(h,i,p,u),_=o?.data?.[v.entityId]||o?.data?.[h]||[];l+=Qn(f,u,e,_)}return l+="</div>",l}function Jo(t,e,i,n,o,r){if(!t||!e)return;let a=t.querySelectorAll(".pc-zone-row");for(let s=0;s<e.length;s++){let l=e[s],c=l.entity,d=n[c],u=r[c];if(d===u&&a[s])continue;let{zoneState:h}=K(l,o,n,i),p=a[s];if(!p)continue;let f=p.querySelector(".pc-zone-temp");if(f){let y=h.isUnavailable?"":h.currentTemp!==null?`${O(h.currentTemp)}${h.unit}`:"--",x=!h.isUnavailable&&h.targetTemp!==null?`<span class="pc-zone-target">\u2192 ${O(h.targetTemp)}${m(h.unit)}</span>`:"";f.innerHTML=`${m(y)}${x}`}let v=p.querySelector(".pc-power-bar-fill");if(v){let y=h.heatingPower||h.coolingPower||0,x=At(h.hvacAction),S=x.token||x.fallback;v.style.width=`${Math.min(100,Math.max(0,y)).toFixed(1)}%`,v.style.background=S,v.style.setProperty("--pc-bar-glow",`${x.fallback}40`),v.classList.toggle("pc-bar-active",y>0)}let _=p.querySelector(".pc-temp-gauge-current");if(_&&h.currentTemp!==null){let y=Pt(h.currentTemp,h.minTemp,h.maxTemp);_.style.left=`${y.toFixed(1)}%`}let g=p.querySelector(".pc-temp-gauge-target");if(g&&h.targetTemp!==null){let y=Pt(h.targetTemp,h.minTemp,h.maxTemp);g.style.left=`${y.toFixed(1)}%`}let b=p.querySelector(".pc-temp-gauge-bg");if(b&&!h.isUnavailable){let y=X(h.minTemp),x=X((h.minTemp+h.maxTemp)/2),S=X(h.maxTemp);b.style.background=`linear-gradient(to right, ${y}, ${x}, ${S})`}h.isUnavailable?p.classList.add("pc-unavailable"):p.classList.remove("pc-unavailable")}}function Bt(t){return!!(t?.api_usage&&t?.api_limit)}function Qo(t){return t>95?"var(--pulse-tier-gale)":t>80?"var(--pulse-tier-strong)":"var(--pulse-tier-moderate)"}function oi(t){let e=(t||"").toLowerCase();return e==="ok"||e==="healthy"?"var(--pulse-tier-moderate)":e==="warning"?"var(--pulse-tier-strong)":"var(--pulse-tier-gale)"}function ni(t,e){let i=e>0?Math.min(100,t/e*100):0,n=Qo(i),o=80,r=o/2,a=o/2,s=o/2-4,l=s*.7,c=ae(r,a,l,s,-90,269.9),d=-90+i/100*360,u=i>0?ae(r,a,l,s,-90,Math.min(d,269.9)):"",h=i>95,p=i>80,f=h||p,v='<div class="pc-usage-gauge">';if(v+=`<svg viewBox="0 0 ${o} ${o}" role="img" aria-label="API usage: ${Math.round(t)} of ${Math.round(e)}" style="width:${o}px;height:${o}px">`,f&&(v+=`<defs>${st("gauge-glow",2)}</defs>`),v+=`<path d="${c}" fill="var(--pulse-border-divider)" />`,u){if(v+=`<path d="${u}" fill="${k(n)}"${f?' filter="url(#gauge-glow)"':""}>`,v+=`<title>API usage: ${Math.round(i)}%</title>`,f){let b=h?"1":"2.5";at()||(v+=`<animate attributeName="opacity" values="1;0.5;1" dur="${b}s" repeatCount="indefinite"/>`)}v+="</path>"}v+="</svg>";let _=m(Math.round(t)),g=m(Math.round(e));return v+=`<div class="pc-gauge-center">${_}<br><span class="pc-gauge-center-limit">/ ${g}</span></div>`,v+="</div>",v}function ii(t,e,i){let n=e?.data?.[t]||[];return mt(n,200,40,i,"api-hist-grad","API usage history")}function si(t){let e=le(t,ct);if(e.length===0)return"";let i=60,n='<div class="pc-api-breakdown-row">';n+=`<div class="pc-donut-container pc-api-breakdown-donut" style="width:${i}px;height:${i}px">`;let{html:o}=re(e,{size:i,ariaLabel:"API call breakdown",centerNumStyle:"font-size:var(--pulse-font-body)"});return n+=o,n+="</div>",n+=Mt(e.map(r=>({label:r.label,color:r.color,value:String(Math.round(r.value))}))),n+="</div>",n}function ce(t,e,i,n){if(!Bt(t))return"";let o=parseFloat(e[t.api_usage]?.state)||0,r=parseFloat(e[t.api_limit]?.state)||100,a=r>0?Math.min(100,o/r*100):0,s=Qo(a),l=e[t.api_status]?.state||"unknown",c=oi(l),d='<div class="pc-api-dashboard">';d+='<div class="pc-api-row">',d+=ni(o,r);let u=t.api_usage;if(u&&n&&(d+=ii(u,n,s)),d+="</div>",t.api_breakdown&&e[t.api_breakdown]&&(d+='<div class="pc-api-row">',d+=si(e[t.api_breakdown].attributes||{}),d+="</div>"),d+='<div class="pc-zone-chips">',t.call_history&&e[t.call_history]){let h=e[t.call_history].attributes?.calls_per_hour;h!=null&&Number(h)>0&&(d+=`<span class="pc-chip" data-entity="${m(t.call_history)}">`,d+=`<ha-icon icon="mdi:speedometer"></ha-icon>${m(Math.round(Number(h)))}/hr</span>`)}if(t.polling_interval&&e[t.polling_interval]){let h=e[t.polling_interval],p=h.attributes?.unit_of_measurement||"";d+=`<span class="pc-chip" data-entity="${m(t.polling_interval)}">Poll: ${m(h.state)}${p?m(p):""}</span>`}if(t.next_sync&&e[t.next_sync]){let h=e[t.next_sync].state,p=h,f=0;if(h&&h.includes("T"))try{let v=new Date(h);f=v.getTime();let _=f-Date.now();if(_>0&&_<36e5){let g=Math.floor(_/6e4),b=Math.floor(_%6e4/1e3);p=g>0?`${g}m ${b}s`:`${b}s`}else p=nt(v)}catch{}d+=`<span class="pc-chip chip-next-sync" data-entity="${m(t.next_sync)}" data-target="${f}">Next: ${m(p)}</span>`}if(t.api_reset&&e[t.api_reset]){let h=e[t.api_reset].state,p=h;if(h&&h.includes("T"))try{let f=new Date(h);p=nt(f)}catch{}d+=`<span class="pc-chip" data-entity="${m(t.api_reset)}">Reset: ${m(p)}</span>`}return t.token_status&&e[t.token_status]&&(d+=`<span class="pc-chip" data-entity="${m(t.token_status)}">Token: ${m(e[t.token_status].state)}</span>`),d+=`<span class="pc-chip" data-entity="${t.api_status?m(t.api_status):""}" style="color:${k(c)}">${m(l)}</span>`,d+="</div>",d+="</div>",d}function qe(t,e,i,n){if(!Bt(t))return"";let o='<div class="pc-section pc-section-api">';return o+='<div class="pulse-section-label">API Usage</div>',o+=ce(t,e,i,n),o+="</div>",o}function Vt(t){return!!t?.bridge_connected}function pe(t,e,i){if(!Vt(t))return"";let n=e[t.bridge_connected];if(!n)return"";let o=n.state==="on",r=o?"var(--pulse-tier-moderate)":"var(--pulse-tier-gale)",a=o?"Connected":"Disconnected",s=o?"pc-pulse-dot pc-connected":"pc-pulse-dot pc-disconnected",l=n.attributes||{},c=l.response_time_ms,d=l.consecutive_failures,u=l.last_error,h=t.boiler_flow_temp&&e[t.boiler_flow_temp]?.attributes?.unit_of_measurement||"\xB0C",p="";if(p+='<div class="pc-zone-chips">',p+=`<span class="pc-chip" data-entity="${m(t.bridge_connected)}" style="color:${k(r)}">`,p+=`<span class="${s}"></span>`,p+=`${m(a)}</span>`,c!==void 0&&(p+=`<span class="pc-chip" data-entity="${m(t.bridge_connected)}">${m(Math.round(c))}ms</span>`),d!==void 0&&d>0&&(p+=`<span class="pc-chip" data-entity="${m(t.bridge_connected)}" style="color:var(--pulse-tier-gale)">Failures: ${m(d)}</span>`),p+="</div>",t.boiler_flow_temp&&e[t.boiler_flow_temp]){let _=parseFloat(e[t.boiler_flow_temp].state),g=e[t.boiler_flow_temp].state,b=isNaN(_)?"var(--pulse-text-primary)":X(_);if(p+='<div class="pc-flow-temp-row">',p+=`<span class="pc-flow-temp-value" style="color:${k(b)}">${m(g)}${m(h)}</span>`,i){let y=i.data?.[t.boiler_flow_temp]||[],x=mt(y,120,30,b,"bridge-flow-grad","Boiler flow temperature history");x&&(p+=`<div class="pc-flow-sparkline">${x}</div>`)}p+="</div>"}let f=t.wc_status&&e[t.wc_status],v=t.wc_target_flow&&e[t.wc_target_flow];if((f||v)&&(p+='<div class="pc-zone-chips">',f&&(p+=`<span class="pc-chip" data-entity="${m(t.wc_status)}">${m(e[t.wc_status].state)}</span>`),v&&(p+=`<span class="pc-chip" data-entity="${m(t.wc_target_flow)}">Target: ${m(e[t.wc_target_flow].state)}${m(h)}</span>`),p+="</div>"),t.boiler_max_output&&e[t.boiler_max_output]){let _=e[t.boiler_max_output].state;_!=="unavailable"&&_!=="unknown"&&(p+='<div class="pc-zone-chips">',p+=`<span class="pc-chip" data-entity="${m(t.boiler_max_output)}">`,p+=`<ha-icon icon="mdi:thermometer-high"></ha-icon>Max: ${m(_)}${m(h)}</span>`,p+="</div>")}return u&&u!=="None"&&u!=="null"&&(p+='<div class="pc-zone-chips">',p+=`<span class="pc-chip" style="color:var(--pulse-tier-gale)">Error: ${m(u)}</span>`,p+="</div>"),p}function Oe(t,e,i){if(!Vt(t))return"";let n='<div class="pc-section pc-section-bridge">';return n+='<div class="pulse-section-label">Bridge</div>',n+=pe(t,e,i),n+="</div>",n}var de="var(--pulse-tier-moderate)",tn="var(--pulse-accent)";function Et(t){return!!t?.homekit_connected}function ue(t,e){if(!Et(t))return"";let i=e[t.homekit_connected];if(!i)return"";let n=i.attributes||{},o=t.homekit_reads_saved?e[t.homekit_reads_saved]:null,r=t.homekit_writes_saved?e[t.homekit_writes_saved]:null,a=o?Number(o.state)||0:Number(n.reads_saved_today)||0,s=r?Number(r.state)||0:Number(n.writes_saved_today)||0,l=a+s;return l>0?` \xB7 ${l} saved`:""}function he(t,e,i){if(!Et(t))return"";let n=e[t.homekit_connected];if(!n)return"";let o=n.state==="on",r=o?de:"var(--pulse-tier-gale)",a=o?"Connected":"Disconnected",s=o?"pc-pulse-dot pc-connected":"pc-pulse-dot pc-disconnected",l=n.attributes||{},c=l.uptime||"",d=l.mapped_zones,u=l.reconnect_count,h=t.homekit_reads_saved?e[t.homekit_reads_saved]:null,p=t.homekit_writes_saved?e[t.homekit_writes_saved]:null,f=h?Number(h.state)||0:Number(l.reads_saved_today)||0,v=p?Number(p.state)||0:Number(l.writes_saved_today)||0,_=f+v,g="";if(g+='<div class="pc-zone-chips">',g+=`<span class="pc-chip" data-entity="${m(t.homekit_connected)}" style="color:${k(r)}">`,g+=`<span class="${s}"></span>`,g+=`${m(a)}`,c&&(g+=` <span class="pc-chip-aside">${m(c)}</span>`),g+="</span>",d!==void 0&&(g+=`<span class="pc-chip">${m(d)} zones</span>`),u!==void 0&&u>0&&(g+=`<span class="pc-chip" style="color:var(--pulse-tier-strong)">Reconnects: ${m(u)}</span>`),g+="</div>",f>0||v>0){let A=_>0?f/_*100:100;g+='<div class="pc-homekit-bar-stack">',g+='<div class="pc-power-bar-container">',g+='<div class="pc-power-bar-track"></div>',g+=`<div class="pc-power-bar-fill" style="width:100%;background:${k(tn)}"></div>`,g+=`<div class="pc-power-bar-fill" style="width:${k(A.toFixed(1))}%;background:${k(de)}"></div>`,g+="</div>",g+="</div>";let M=t.homekit_reads_saved;if(M&&i){let L=i.data?.[M]||[];g+=mt(L,200,30,de,"hk-spark-grad","HomeKit saved calls history")}g+='<div class="pc-zone-chips">';let I=t.homekit_reads_saved||"",z=t.homekit_writes_saved||"";g+=`<span class="pc-chip"${I?` data-entity="${m(I)}"`:""} style="color:${k(de)}">Reads: ${m(f)}</span>`,v>0&&(g+=`<span class="pc-chip"${z?` data-entity="${m(z)}"`:""} style="color:${k(tn)}">Writes: ${m(v)}</span>`),g+="</div>"}let b=Number(l.write_attempts)||0,y=Number(l.write_successes)||0,x=Number(l.write_fallbacks)||0,S=Number(l.write_avg_latency_ms)||0;return(b>0||y>0||x>0)&&(g+='<div class="pc-zone-chips">',b>0&&(g+=`<span class="pc-chip">Attempts: ${m(b)}</span>`),y>0&&(g+=`<span class="pc-chip">Successes: ${m(y)}</span>`),x>0&&(g+=`<span class="pc-chip" style="color:var(--pulse-tier-strong)">Fallbacks: ${m(x)}</span>`),S>0&&(g+=`<span class="pc-chip">Latency: ${m(S)}ms</span>`),g+="</div>"),g}function Be(t,e,i){if(!Et(t))return"";let n=ue(t,e),o='<div class="pc-section pc-section-homekit">';return o+=`<div class="pulse-section-label">HomeKit${m(n)}</div>`,o+=he(t,e,i),o+="</div>",o}function ri(t){return{sunny:"mdi:weather-sunny",clear:"mdi:weather-night",cloudy:"mdi:weather-cloudy",partlycloudy:"mdi:weather-partly-cloudy",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy",fog:"mdi:weather-fog",windy:"mdi:weather-windy",lightning:"mdi:weather-lightning"}[(t||"").toLowerCase()]||"mdi:weather-cloudy"}function Ve(t,e,i){if(!t.outside_temp)return"";let n=e[t.outside_temp]?.state,o=e[t.weather]?.state||"",r=t.solar_intensity?e[t.solar_intensity]?.state:null,a='<div class="pc-section pc-section-weather">';a+='<div class="pulse-section-label">Weather</div>',a+='<div class="pc-zone-chips">',o&&(a+=`<span class="pc-chip"${t.weather?` data-entity="${m(t.weather)}"`:""}><ha-icon icon="${m(ri(o))}"></ha-icon>${m(o)}</span>`),n!=null&&(a+=`<span class="pc-chip" data-entity="${m(t.outside_temp)}"><ha-icon icon="mdi:thermometer"></ha-icon>${m(n)}${m(e[t.outside_temp]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),r!=null&&(a+=`<span class="pc-chip"${t.solar_intensity?` data-entity="${m(t.solar_intensity)}"`:""}><ha-icon icon="mdi:white-balance-sunny"></ha-icon>${m(r)}%</span>`),a+="</div>";let s=t.outside_temp;if(s&&i){let l=i.data?.[s]||[],c=parseFloat(n||"0"),d=isNaN(c)?"var(--pulse-text-primary)":X(c);a+=mt(l,200,30,d,"weather-spark-grad","Outdoor temperature history")}return a+="</div>",a}function Ue(t,e,i){let n=!1,o='<div class="pc-section pc-section-environment">';o+='<div class="pulse-section-label">Environment</div>';for(let r of t){let a=V(r.entity),s=i?.zoneEntities?.[a]||{},l=s.mold_risk&&e[s.mold_risk],c=s.condensation&&e[s.condensation],d=s.comfort_level&&e[s.comfort_level],u=s.surface_temp&&e[s.surface_temp],h=s.dew_point&&e[s.dew_point];if(!l&&!c&&!d&&!u&&!h)continue;n=!0;let p=r.name||e[r.entity]?.attributes?.friendly_name||a;if(o+=`<div class="pc-system-row"><span class="pc-system-label">${m(p)}</span>`,o+='<div class="pc-zone-chips">',l){let f=e[s.mold_risk].state,v=se(f);o+=`<span class="pc-chip" data-entity="${m(s.mold_risk)}" style="color:${k(v.fallback)}">`,o+=`<ha-icon icon="mdi:mushroom"></ha-icon>${m(f)}</span>`}if(c){let f=e[s.condensation].state,v=se(f);o+=`<span class="pc-chip" data-entity="${m(s.condensation)}" style="color:${k(v.fallback)}">`,o+=`<ha-icon icon="mdi:water-alert"></ha-icon>${m(f)}</span>`}d&&(o+=`<span class="pc-chip" data-entity="${m(s.comfort_level)}"><ha-icon icon="mdi:emoticon-outline"></ha-icon>${m(e[s.comfort_level].state)}</span>`),u&&(o+=`<span class="pc-chip" data-entity="${m(s.surface_temp)}"><ha-icon icon="mdi:texture-box"></ha-icon>${m(e[s.surface_temp].state)}${m(e[s.surface_temp]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),h&&(o+=`<span class="pc-chip" data-entity="${m(s.dew_point)}"><ha-icon icon="mdi:water-thermometer"></ha-icon>${m(e[s.dew_point].state)}${m(e[s.dew_point]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),o+="</div></div>"}return o+="</div>",n?o:""}function We(t,e,i){let n=!1,o='<div class="pc-section pc-section-thermal">';o+='<div class="pulse-section-label">Thermal Analytics</div>';for(let r of t){let a=V(r.entity),s=i?.zoneEntities?.[a]||{},l=s.heating_rate&&e[s.heating_rate],c=s.thermal_inertia&&e[s.thermal_inertia],d=s.preheat_time&&e[s.preheat_time],u=s.confidence&&e[s.confidence],h=s.heat_accel&&e[s.heat_accel],p=s.approach_factor&&e[s.approach_factor];if(!l&&!c&&!d&&!u&&!h&&!p)continue;n=!0;let f=r.name||e[r.entity]?.attributes?.friendly_name||a;o+=`<div class="pc-system-row"><span class="pc-system-label">${m(f)}</span>`,o+='<div class="pc-zone-chips">',l&&(o+=`<span class="pc-chip" data-entity="${m(s.heating_rate)}"><ha-icon icon="mdi:trending-up"></ha-icon>${m(e[s.heating_rate].state)}${m(e[s.heating_rate]?.attributes?.unit_of_measurement||"\xB0C/hr")}</span>`),c&&(o+=`<span class="pc-chip" data-entity="${m(s.thermal_inertia)}"><ha-icon icon="mdi:speedometer"></ha-icon>${m(e[s.thermal_inertia].state)}</span>`),d&&(o+=`<span class="pc-chip" data-entity="${m(s.preheat_time)}"><ha-icon icon="mdi:timer-outline"></ha-icon>${m(e[s.preheat_time].state)} min</span>`),u&&(o+=`<span class="pc-chip" data-entity="${m(s.confidence)}"><ha-icon icon="mdi:check-circle-outline"></ha-icon>${m(e[s.confidence].state)}%</span>`),h&&(o+=`<span class="pc-chip" data-entity="${m(s.heat_accel)}"><ha-icon icon="mdi:rocket-launch"></ha-icon>${m(e[s.heat_accel].state)}${m(e[s.heat_accel]?.attributes?.unit_of_measurement||"")}</span>`),p&&(o+=`<span class="pc-chip" data-entity="${m(s.approach_factor)}"><ha-icon icon="mdi:target"></ha-icon>${m(e[s.approach_factor].state)}${m(e[s.approach_factor]?.attributes?.unit_of_measurement||"")}</span>`),o+="</div></div>"}return o+="</div>",n?o:""}function Ge(t,e,i){let n=!1,o='<div class="pc-section pc-section-schedule">';o+='<div class="pulse-section-label">Schedule</div>';for(let r of t){let a=V(r.entity),s=i?.zoneEntities?.[a]||{},l=s.next_schedule&&e[s.next_schedule],c=s.schedule_deviation&&e[s.schedule_deviation],d=s.preheat_advisor&&e[s.preheat_advisor],u=s.comfort_target&&e[s.comfort_target];if(!l&&!c&&!d&&!u)continue;n=!0;let h=r.name||e[r.entity]?.attributes?.friendly_name||a;if(o+=`<div class="pc-system-row"><span class="pc-system-label">${m(h)}</span>`,o+='<div class="pc-zone-chips">',l){let p=s.next_sched_temp&&e[s.next_sched_temp]?` \u2192 ${m(e[s.next_sched_temp].state)}${m(e[s.next_sched_temp]?.attributes?.unit_of_measurement||"\xB0C")}`:"";o+=`<span class="pc-chip" data-entity="${m(s.next_schedule)}"><ha-icon icon="mdi:calendar-clock"></ha-icon>${m(e[s.next_schedule].state)}${p}</span>`}c&&(o+=`<span class="pc-chip" data-entity="${m(s.schedule_deviation)}"><ha-icon icon="mdi:swap-vertical"></ha-icon>${m(e[s.schedule_deviation].state)}${m(e[s.schedule_deviation]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),d&&(o+=`<span class="pc-chip" data-entity="${m(s.preheat_advisor)}"><ha-icon icon="mdi:radiator"></ha-icon>${m(e[s.preheat_advisor].state)}</span>`),u&&(o+=`<span class="pc-chip" data-entity="${m(s.comfort_target)}"><ha-icon icon="mdi:target"></ha-icon>${m(e[s.comfort_target].state)}${m(e[s.comfort_target]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),o+="</div></div>"}return o+="</div>",n?o:""}function ai(){return Kt("graph-grad")}function li(t,e){let i=e&&e.length>0?e:ct;return i[t%i.length]}function ci(t,e,i){let o=[];for(let l of t){let c=dt(l.data,300,e,48);c&&o.push({...c,color:l.color,entityId:l.entityId})}if(o.length===0){let l=Xo(t,300,e);if(!l.some(u=>u.d!==""))return'<div class="pc-chart-empty">No data available</div>';let d=`<svg viewBox="0 0 300 ${e}" role="img" aria-label="${m(i)}" class="pc-chart-svg" preserveAspectRatio="none">`;for(let u of l)u.d!==""&&(d+=`<path d="${u.d}" fill="none" stroke="${k(u.color)}" stroke-width="var(--pc-chart-line-width, 1.5)" data-entity="${m(u.entityId)}" />`);return d+="</svg>",d}let r=o.map(()=>ai()),a=Ne("graph-glow"),s=`<svg viewBox="0 0 300 ${e}" role="img" aria-label="${m(i)}" class="pc-chart-svg" preserveAspectRatio="none">`;s+="<defs>";for(let l=0;l<o.length;l++)s+=`<linearGradient id="${r[l]}" x1="0" y1="0" x2="0" y2="1">`,s+=`<stop offset="0%" stop-color="${k(o[l].color)}" stop-opacity="0.25"/>`,s+=`<stop offset="100%" stop-color="${k(o[l].color)}" stop-opacity="0"/>`,s+="</linearGradient>";s+=st(a,.6),s+="</defs>";for(let l=0;l<o.length;l++){let c=o[l];s+=`<path d="${c.areaPath}" fill="url(#${r[l]})" />`,s+=`<path d="${c.linePath}" fill="none" stroke="${k(c.color)}" stroke-width="var(--pc-chart-line-width, 1.5)" filter="url(#${a})" data-entity="${m(c.entityId)}" />`}return s+="</svg>",s}function Ze(t,e,i,n,o){let r=t.attribute||"current_temperature",a=t.stacked===!0,s=Number(t.height)||80,l=t.palette||void 0,c=t.entities||e.map(u=>u.entity);if(c.length===0)return"";let d='<div class="pc-section pc-section-graph">';return a?(d+=je(c,"current_temperature","Temperature",s,l,i,n,o,e),d+=je(c,"current_humidity","Humidity",s,l,i,n,o,e)):d+=je(c,r,r==="current_humidity"?"Humidity":"Temperature",s,l,i,n,o,e),d+="</div>",d}function je(t,e,i,n,o,r,a,s,l){let c=[],d=[],u=e==="current_humidity"||e==="humidity";for(let v=0;v<t.length;v++){let _=t[v],g=li(v,o),b=V(_),y=s?.zoneEntities?.[b]||{},x=l?.find($=>$.entity===_),A=(u?ht(_,a,y,x):Y(_,a,y,x))?.entityId||_,M=r.data[A]||[],I=x?.name||a[_]?.attributes?.friendly_name||b,z=a[_]?.attributes?.[e],L=u?"%":a[_]?.attributes?.unit_of_measurement||"\xB0C";c.push({entityId:A,data:M,color:g}),d.push({label:I,color:g,value:z!=null?`${z}${L}`:"--"})}let h=d.map(v=>v.label).join(", "),p=`${i} history for ${h}`,f=`<div class="pulse-section-label">${m(i)}</div>`;return f+=`<div class="pc-chart-container" style="height:${k(n)}px">`,f+=ci(c,n,p),f+="</div>",f+=Mt(d),f}function Ke(t,e,i){let n=Number(t.size)||120,o=t.source,r=[];if(o==="api_breakdown"?r=pi(e,i):o==="homekit_saved"?r=di(e,i):t.segments&&(r=ui(t.segments,i)),r.length===0)return"";let a='<div class="pc-section pc-section-donut">',s={api_breakdown:"API Breakdown",homekit_saved:"HomeKit Saved"},l={api_breakdown:"Calls",homekit_saved:"Saved"},c=o&&s[o]||"Breakdown",d=o&&l[o]||"Total";a+=`<div class="pulse-section-label">${m(c)}</div>`,a+=`<div class="pc-donut-container" style="width:${k(n)}px;height:${k(n)}px">`;let{html:u}=re(r,{size:n,centerLabel:d});a+=u,a+="</div>";let h=r.map(p=>({label:p.label,color:p.color,value:String(Math.round(p.value))}));return a+=Mt(h),a+="</div>",a}function pi(t,e){let i=t.api_breakdown;if(!i||!e[i])return[];let n=e[i].attributes;return!n||typeof n!="object"?(pt("api_call_breakdown entity has no attributes"),[]):le(n,ct)}function di(t,e){if(!t.homekit_connected)return[];let i=e[t.homekit_connected];if(!i)return[];let n=i.attributes||{},o=t.homekit_reads_saved?e[t.homekit_reads_saved]:null,r=t.homekit_writes_saved?e[t.homekit_writes_saved]:null,a=o?Number(o.state)||0:Number(n.reads_saved_today)||0,s=r?Number(r.state)||0:Number(n.writes_saved_today)||0,l=[];return(a>0||s>0)&&(l.push({label:"Reads Saved",value:a,color:ct[0]}),l.push({label:"Writes Saved",value:s,color:ct[1]})),l}function ui(t,e){return t.map((i,n)=>({label:i.label||i.entity,value:Math.max(0,Number(e[i.entity]?.state)||0),color:i.color||ct[n%ct.length]}))}function me(t,e,i){let o=Date.now()-i,r=i/e,a=[],s=0,l=null;for(;s<t.length&&t[s].t<o;)isFinite(t[s].v)&&(l=Math.round(t[s].v*10)/10),s++;for(let c=0;c<e;c++){let d=o+c*r,u=d+r,h=d+r/2,p=0,f=0;for(;s<t.length&&t[s].t<u;)t[s].t>=d&&isFinite(t[s].v)&&(p+=t[s].v,f++),s++;f>0&&(l=Math.round(p/f*10)/10),a.push({value:l,time:h,label:nt(new Date(h))})}return a}function fe(t,e,i={}){let n=t.length;if(n===0)return'<div class="pc-strip-container"><div class="pc-chart-empty">No data</div></div>';let o=i.emptyColor||"var(--pulse-disabled)",r=i.emptyOpacity??.3,a=i.ariaLabel||"",s=JSON.stringify(t.map(c=>({v:c.value,l:c.label}))),l=`<div class="pc-strip-container" data-slots='${m(s)}'>`;l+=`<svg viewBox="0 0 ${n} 1" preserveAspectRatio="none" role="img" aria-label="${m(a)}" style="width:100%;height:100%;display:block">`;for(let c=0;c<n;c++){let d=t[c].value,u=d!==null?e(d):o,h=d!==null?1:r;l+=`<rect x="${c}" y="0" width="1.05" height="1" fill="${k(u)}" opacity="${h}"/>`}if(l+="</svg>",i.nowPct!==void 0){let c=Math.min(100,Math.max(0,i.nowPct));l+=`<div class="pc-now-marker" style="left:${c.toFixed(1)}%"></div>`}return l+="</div>",l}function Lt(t,e,i={}){let n=t.length;if(n===0)return'<div class="pc-cells"><div class="pc-chart-empty">No data</div></div>';let o=JSON.stringify(t.map(a=>({v:a.value,l:a.label}))),r=`<div class="pc-cells" data-slots='${m(o)}'>`;for(let a=0;a<n;a++){let s=t[a].value,l=t[a].label;if(s!==null){let c=e(s),d=k(c);r+=`<div class="pc-cell" style="background:${d};color:${d}" data-hour="${m(l)}" data-score="${s}"></div>`}else r+=`<div class="pc-cell pc-cell-empty" data-hour="${m(l)}"></div>`}return r+="</div>",r}function ge(){let t=document.createElement("div");t.className="pc-strip-tooltip",t.style.display="none";let e=null;return{element:t,show(i,n,o){e&&(clearTimeout(e),e=null),t.textContent=o,t.style.display="",t.style.left=`${n}px`},hide(){e=setTimeout(()=>{t.style.display="none"},50)}}}function en(){let t=document.createElement("div");t.className="pc-strip-tooltip pc-strip-tooltip-fixed",t.style.display="none";let e=null;return{element:t,show(i,n,o){e&&(clearTimeout(e),e=null),t.textContent=o,t.style.display="",t.style.left=`${n}px`,t.style.top=`${i.top-28}px`},hide(){e=setTimeout(()=>{t.style.display="none"},50)}}}function ve(t,e=5){let i=new Date,n=Date.now()-t,o="";for(let r=0;r<e-1;r++){let a=new Date(n+r/(e-1)*t);o+=`<span class="pc-time-label">${nt(a)}</span>`}return o+=`<span class="pc-time-label">${nt(i)}</span>`,o}function ft(t,e,i){let n=Math.max(0,Math.min(1,(t-e.left)/e.width));return Math.min(i-1,Math.floor(n*i))}var hi=2e3;function Xe(t,e,i,n){let o=null,r=s=>{let l=i.getBoundingClientRect(),c=s-l.left;c>=0&&c<=l.width&&(e.style.left=`${n+c}px`,e.style.display="")},a=()=>{e.style.display="none",o&&(clearTimeout(o),o=null)};t.addEventListener("pointermove",s=>{s.pointerType!=="touch"&&r(s.clientX)}),t.addEventListener("pointerleave",a),t.addEventListener("pointerdown",s=>{s.pointerType==="touch"&&(r(s.clientX),o&&clearTimeout(o),o=setTimeout(a,hi))}),t.addEventListener("pointerup",s=>{s.pointerType})}function Ye(t,e,i,n=""){if(!e||e.length===0)return;let o=e.length,r=null,a=null;t.addEventListener("pointerdown",s=>{if(s.pointerType==="touch"&&s.isPrimary===!1)return;let l=t.getBoundingClientRect();r=ft(s.clientX,l,o),t.setPointerCapture(s.pointerId),a||(a=document.createElement("div"),a.className="pc-strip-drag-highlight",t.style.position="relative",t.appendChild(a)),a.style.display="",a.style.left=`${(r/o*100).toFixed(1)}%`,a.style.width="0%"}),t.addEventListener("pointermove",s=>{if(r===null||!a)return;let l=t.getBoundingClientRect(),c=ft(s.clientX,l,o),d=Math.min(r,c),u=Math.max(r,c);a.style.left=`${(d/o*100).toFixed(1)}%`,a.style.width=`${((u-d+1)/o*100).toFixed(1)}%`}),t.addEventListener("pointerup",s=>{if(r===null){r=null;return}let l=t.getBoundingClientRect(),c=ft(s.clientX,l,o),d=Math.min(r,c),u=Math.max(r,c),h=e.slice(d,u+1).filter(p=>p.v!==null);if(h.length>0){let p=h.map(S=>S.v),f=(p.reduce((S,A)=>S+A,0)/p.length).toFixed(1),v=Math.min(...p),_=Math.max(...p),g=e[d]?.l||"",b=e[u]?.l||"",y=`${g} \u2013 ${b}: avg ${f}${n}, ${v}${n} \u2013 ${_}${n}`,x=t.getBoundingClientRect();i.show(x,(d+u)/2/o*x.width,y),setTimeout(()=>i.hide(),3e3)}r=null})}var Je=24,mi=Je;function fi(t){if(!Array.isArray(t)||t.length===0)return null;let e=Date.now()-Je*3600*1e3,i=t.filter(o=>o&&o.t>=e&&Number.isFinite(o.v));return i.length===0?null:i.reduce((o,r)=>o+r.v,0)/i.length}function be(t,e,i,n){let o='<div class="pc-strip-rows">';o+='<div class="pc-strip-crosshair"></div>';let r=0,a=0,s="\xB0C";for(let l of t){let{entityId:c,zoneName:d,zoneEntities:u,zoneState:h}=K(l,i,e),f=Y(c,e,u,l)?.entityId||c,v=n?.data?.[f]||[];h.unit&&(s=h.unit);let _=me(v,mi,Je*3600*1e3),g=Lt(_,X),b=fi(v);b!==null&&(r+=b,a+=1);let y=b===null?"--":`${O(b)}${m(h.unit||"\xB0C")}`,x=J(h);o+=`<div class="pc-timeline-group-row pc-timeline-row${x}" data-entity="${m(c)}" data-zone="${m(d)}">`,o+=`<span class="pc-timeline-group-name pc-zone-label">${m(h.name)}</span>`,o+=g,o+=`<span class="pc-timeline-group-stat">${m(y)}</span>`,o+="</div>"}return o+="</div>",o+=gi(),o+=vi(r,a,s,t.length),o}function gi(){return'<div class="pc-timeline-group-axis"><span></span><div class="ticks"><span>\u221224h</span><span>\u221218h</span><span>\u221212h</span><span>\u22126h</span><span>now</span></div><span></span></div>'}function vi(t,e,i,n){let o=e>0?t/e:null,r=o===null?"\u2014":`${O(o)}${m(i)}`;return'<div class="pc-timeline-group-footer">'+bi(i)+`<span><strong>Home avg ${m(r)}</strong> \xB7 ${n} zones</span></div>`}function bi(t){let e=t?.includes("F"),i=a=>e?Math.round(a*9/5+32):a,n=e?61:16,o='<span class="pc-temp-legend">',r=null;for(let a of De){let s=a.upper;if(s!==null&&i(s)<n){r=s;continue}let l;s===null?l=`\u2265${r!==null?i(r):n}${t}`:r===null?l=`\u2264${i(s)}${t}`:l=`${i(r)}\u2013${i(s)}${t}`,o+=`<span class="pc-temp-legend-pill"><span class="pc-temp-legend-pip" style="background:${k(a.color)}"></span>${m(l)}</span>`,r=s}return o+="</span>",o}function on(t,e,i,n,o){if(!t||t.length===0)return"";let r=Number(e?.hours_to_show)||24,a=e?.mode||"timeline",s=Number(e?.slots_per_hour)||2,c=(e?.attribute||"temperature")==="humidity",d=c?Ot:X,u=a==="heatmap"?r:r*s,h=r*36e5,p=Date.now()-h,f=(Date.now()-p)/h*100,v=c?"Humidity":"Thermal",_=a==="heatmap"?"Heatmap":"Timeline",g='<div class="pc-section pc-section-thermal-strip">';if(g+='<div class="pc-section-header">',g+=`<div class="pulse-section-label">${m(String(Number(r)))}h ${m(v)} ${m(_)}</div>`,g+='<span class="pc-section-subtitle">Tap a zone for details</span>',g+="</div>",a==="heatmap"&&!c)return g+='<div class="pc-zone-detail" id="timeline-detail"></div>',g+=be(t,i,n,o),g+="</div>",g;g+='<div class="pc-zone-detail" id="timeline-detail"></div>',g+='<div class="pc-strip-rows">',g+='<div class="pc-strip-crosshair"></div>';for(let b of t){let{entityId:y,zoneName:x,zoneEntities:S,zoneState:A}=K(b,n,i),I=(c?ht(y,i,S,b):Y(y,i,S,b))?.entityId||y,z=b.name||i[y]?.attributes?.friendly_name||x,L=o?.data?.[I]||[],$=J(A);if(g+=`<div class="pc-timeline-row${$}" data-zone="${m(x)}" data-entity="${m(y)}">`,g+=`<span class="pc-zone-label">${m(z)}</span>`,L.length<2){let w=!!i[I],T=I in(o?.data||{});g+=`<div class="pc-strip-container"><div class="pc-chart-empty">${m(w&&!T?"Waiting for data":"No data")}</div></div>`}else{let w=me(L,u,h),E=`${z} ${c?"humidity":"temperature"} over ${r}h`;a==="heatmap"?g+=Lt(w,d,{ariaLabel:E}):g+=fe(w,d,{ariaLabel:E,nowPct:f})}g+="</div>"}return g+="</div>",g+='<div class="pc-time-axis">',g+=ve(h),g+="</div>",g+="</div>",g}var _i={Comfortable:100,Warm:70,Cool:70,"Too Warm":40,"Too Cool":40};function nn(t,e,i,n){if(t==null||e===null||e===void 0||isNaN(t)||isNaN(e))return null;let o=100;if(o-=Math.min(50,Math.abs(t-e)*10),i!=null&&(o-=Math.min(25,Math.abs(i-45)*.5)),n!=null){let r=_i[n]??50;o=o*.7+r*.3}return Math.max(0,Math.min(100,Math.round(o)))}function sn(t){if(t>=80)return`rgba(52, 199, 89, ${(.35+t/100*.55).toFixed(2)})`;if(t>=50){let e=(t-50)/30;return`rgba(${Math.round(255-e*50)}, ${Math.round(159+e*40)}, 10, 0.65)`}return`rgba(255, 69, 58, ${(.35+(50-t)/50*.5).toFixed(2)})`}function _e(t,e,i=72e5){if(t.length===0)return null;let n=0,o=t.length-1;for(;n<o;){let s=n+o>>1;t[s].t<e?n=s+1:o=s}let r=null,a=1/0;for(let s=Math.max(0,n-1);s<=Math.min(t.length-1,n);s++){let l=Math.abs(t[s].t-e);l<a&&isFinite(t[s].v)&&(a=l,r=t[s].v)}return a<=i?r:null}function rn(t,e,i,n,o){if(!t||t.length===0)return"";let r=Number(e?.slots_per_hour)||1,a=Number(e?.hours_to_show)||24,s=e?.mode||"heatmap",l=r*a,c=a*36e5,d=Date.now()-c,u=(Date.now()-d)/c*100,h=s==="timeline"?"Comfort Timeline":"Comfort Heatmap",p='<div class="pc-section pc-section-comfort-strip">';p+='<div class="pc-section-header">',p+=`<div class="pulse-section-label">${m(String(Number(a)))}h ${m(h)}</div>`,p+='<span class="pc-section-subtitle">Tap a zone for details</span>',p+="</div>",p+='<div class="pc-zone-detail" id="heatmap-detail"></div>',p+='<div class="pc-heatmap-body">',p+='<div class="pc-strip-crosshair"></div>';for(let f=0;f<t.length;f++){let v=t[f],{entityId:_,zoneName:g,zoneEntities:b,zoneState:y}=K(v,n,i),x=v.name||i[_]?.attributes?.friendly_name||g,A=Y(_,i,b,v).entityId,I=ht(_,i,b,v)?.entityId||null,z=o?.data?.[A]||[],L=I?o?.data?.[I]||[]:[],$=i[_]?.attributes?.temperature??null,w=b.comfort_level,T=w&&i[w]?.state||null,E=[],q=c/l,G=null;if(z.length>0){let C=_e(z,d,1/0),D=L.length>0?_e(L,d,1/0):null;C!==null&&(G=nn(C,$,D,T))}for(let C=0;C<l;C++){let R=d+C*q+q/2,H=_e(z,R),P=_e(L,R),N=nn(H,$,P,T);N!==null&&(G=N);let B=new Date(R),W=nt(B);E.push({value:G,time:R,label:W})}let j=J(y);p+=`<div class="pc-heatmap-row${j}" data-zone="${m(g)}" data-idx="${f}">`,p+=`<span class="pc-zone-label">${m(x)}</span>`;let F=`${x} comfort over ${a}h`;s==="timeline"?p+=fe(E,sn,{ariaLabel:F,nowPct:u}):p+=Lt(E,sn,{ariaLabel:F}),p+="</div>"}return p+="</div>",p+='<div class="pc-heatmap-time-axis">',p+=ve(c),p+="</div>",p+='<div class="pc-heatmap-legend">',p+='<div class="pc-legend-item"><div class="pc-legend-swatch pc-legend-swatch-good"></div>\u226580</div>',p+='<div class="pc-legend-item"><div class="pc-legend-swatch pc-legend-swatch-fair"></div>50\u201379</div>',p+='<div class="pc-legend-item"><div class="pc-legend-swatch pc-legend-swatch-poor"></div>&lt;50</div>',p+="</div>",p+="</div>",p}function an(t,e,i,n,o,r,a){let s=r+(a-r)*.35,l=r+(a-r)*.65,c=t-i,d=e-n,u=t+i,h=e+n,p=`M${r},${c.toFixed(1)}`;return p+=` C${s.toFixed(1)},${c.toFixed(1)} ${l.toFixed(1)},${d.toFixed(1)} ${a},${d.toFixed(1)}`,p+=` L${a},${h.toFixed(1)}`,p+=` C${l.toFixed(1)},${h.toFixed(1)} ${s.toFixed(1)},${u.toFixed(1)} ${r},${u.toFixed(1)}`,p+=" Z",p}function yi(t,e,i,n){let o=i+(n-i)*.35,r=i+(n-i)*.65;return`M${i},${t.toFixed(1)} C${o.toFixed(1)},${t.toFixed(1)} ${r.toFixed(1)},${e.toFixed(1)} ${n},${e.toFixed(1)}`}function Qe(t,e,i){if(!t||t.length===0)return"";let n=at(),o=[],r=!1;for(let $ of t){let{entityId:w,zoneEntities:T,zoneState:E}=K($,i,e);(E.heatingPower>0||T.heating_power||e[w]?.attributes?.heating_power!==void 0)&&(r=!0),o.push({name:E.name,power:E.heatingPower,temp:E.currentTemp,target:E.targetTemp,unit:E.unit,hvacAction:E.hvacAction})}let a=o.length>0?Math.round(o.reduce(($,w)=>$+w.power,0)/o.length):0,s='<div class="pc-section pc-section-energy-flow">';if(s+='<div class="pc-section-header">',s+='<div class="pulse-section-label">Energy Flow</div>',r&&(s+=`<span class="pc-energy-flow-header-value" style="color:${k(_t.heating.fallback)}">${m(a)}% avg</span>`),s+="</div>",!r)return s+='<div class="pc-chart-empty">No heating data</div></div>',s;let l=360,c=o.length<=3?44:o.length<=6?38:34,d=15,u=Math.max(80,o.length*c+30),h=o.length*c,p=Math.max(40,Math.min(h*.7,h-16)),f=Math.max(36,p*.6),v=Math.max(50,f/2+14),_=l-60,g=u/2,b=22,y=2,x=p/Math.max(o.length,1)*.7,S=_t.heating.fallback,A="var(--pulse-disabled)",M=o.some($=>$.power>0||$.hvacAction==="heating"||$.hvacAction==="cooling"),I=o.filter($=>$.power>0).length;s+=`<svg viewBox="0 0 ${l} ${u}" role="img" aria-label="Energy flow from boiler to zones" style="width:100%;height:${k(u)}px;display:block">`,s+="<defs>",s+=st("flow-glow",It(l,360).toFixed(1));for(let $=0;$<o.length;$++){let w=o[$].power>0||o[$].hvacAction==="heating"||o[$].hvacAction==="cooling",T=w?S:A,E=o[$].power;if(w){let q=E>0?(4.5-E/100*3.3).toFixed(1):"5.0";s+=`<linearGradient id="flow-g${$}" x1="-0.5" y1="0" x2="0.5" y2="0" gradientUnits="objectBoundingBox">`,s+=`<stop offset="0%" stop-color="${k(T)}" stop-opacity="0.3"/>`,s+=`<stop offset="50%" stop-color="${k(T)}" stop-opacity="1.0"/>`,s+=`<stop offset="100%" stop-color="${k(T)}" stop-opacity="0.3"/>`,n||(s+=`<animate attributeName="x1" from="-0.5" to="0.5" dur="${q}s" repeatCount="indefinite"/>`,s+=`<animate attributeName="x2" from="0.5" to="1.5" dur="${q}s" repeatCount="indefinite"/>`),s+="</linearGradient>"}else s+=`<linearGradient id="flow-g${$}" x1="0" y1="0" x2="1" y2="0">`,s+=`<stop offset="0%" stop-color="${k(T)}" stop-opacity="0.15"/>`,s+=`<stop offset="50%" stop-color="${k(T)}" stop-opacity="0.25"/>`,s+=`<stop offset="100%" stop-color="${k(T)}" stop-opacity="0.1"/>`,s+="</linearGradient>"}s+="</defs>";let z=M?"rgba(255, 152, 0, 0.15)":"color-mix(in srgb, var(--pulse-text-primary) 8%, transparent)",L=M?"rgba(255, 152, 0, 0.25)":"color-mix(in srgb, var(--pulse-text-primary) 15%, transparent)";s+=`<rect x="${v-f/2}" y="${g-p/2}" width="${f}" height="${p}" rx="8" fill="${k(z)}" stroke="${k(L)}" stroke-width="1"/>`,s+=`<text x="${v}" y="${g-p/2-6}" text-anchor="middle" font-size="10" fill="var(--pulse-text-secondary)">Boiler</text>`;for(let $=0;$<o.length;$++){let w=o[$],T=d+$*c+20,E=w.power>0?y+w.power/100*(b-y):y,q=w.power>0||w.hvacAction==="heating"||w.hvacAction==="cooling",G=q?' class="pc-ribbon-active"':"",j=g+($-(o.length-1)/2)*x,F=an(j,T,E/2,E/2,l,v+f/2,_-12);if(s+=`<path d="${F}" fill="url(#flow-g${$})"${G}${q?' filter="url(#flow-glow)"':""} data-zone="${m(w.name)}" data-zone-idx="${$}">`,s+=`<title>${m(w.name)}: ${Math.round(w.power)}% heating power</title></path>`,w.power>0&&!n){let P=qo(w.power,20,I),N=Oo(w.power),B=Bo(E,b),W=(B*.8).toFixed(1),Z=yi(j,T,v+f/2,_-12);s+=`<g class="pc-flow-particles" data-zone="${m(w.name)}" data-zone-idx="${$}" style="will-change:transform">`;for(let ot=0;ot<P;ot++){let Q=(ot*(N/P)).toFixed(2);s+=`<circle r="${B.toFixed(1)}" fill="${k(S)}" opacity="0.8"`,s+=` filter="drop-shadow(0 0 ${W}px ${k(S)})">`,s+=`<animateMotion dur="${N.toFixed(1)}s" begin="${Q}s" repeatCount="indefinite"`,s+=` path="${Z}"/>`,s+="</circle>"}s+="</g>"}let C=q?"var(--pulse-text-primary)":"var(--pulse-text-secondary)",D=q?' font-weight="500"':"";s+=`<text x="${_}" y="${(T-1).toFixed(1)}" font-size="14" fill="${k(C)}"${D}>${m(w.name)}</text>`;let R=q?k(S):"var(--pulse-text-secondary)",H=q?`${w.hvacAction==="cooling"?"Cooling":"Heating"} ${Math.round(w.power)}%${w.temp!==null?` \xB7 ${O(w.temp)}${w.unit}`:""}`:`Idle${w.temp!==null?` \xB7 ${O(w.temp)}${w.unit}`:""}`;s+=`<text x="${_}" y="${(T+14).toFixed(1)}" font-size="10" fill="${R}">${m(H)}</text>`}return s+="</svg>",s+="</div>",s}function ln(t,e,i,n){if(!t||!e||e.length===0)return!1;let o=t.querySelector("svg");if(!o)return!1;let r=[];for(let $ of e){let{zoneState:w}=K($,n,i);r.push({name:w.name,power:w.heatingPower,temp:w.currentTemp,unit:w.unit,hvacAction:w.hvacAction})}let a=o.querySelectorAll("path[data-zone]");if(a.length!==r.length)return!1;let s=_t.heating.fallback,l="var(--pulse-disabled)",c=r.some($=>$.power>0||$.hvacAction==="heating"||$.hvacAction==="cooling"),d=360,u=r.length<=3?44:r.length<=6?38:34,h=15,p=Math.max(80,r.length*u+30),f=r.length*u,v=Math.max(40,Math.min(f*.7,f-16)),_=Math.max(36,v*.6),g=Math.max(50,_/2+14),b=d-60,y=p/2,x=22,S=2,A=v/Math.max(r.length,1)*.7,M=Math.round(r.reduce(($,w)=>$+w.power,0)/r.length),I=t.querySelector(".pc-energy-flow-header-value");I&&(I.textContent=`${M}% avg`);let z=o.querySelector("rect");z&&(z.setAttribute("fill",c?"rgba(255, 152, 0, 0.15)":"color-mix(in srgb, var(--pulse-text-primary) 8%, transparent)"),z.setAttribute("stroke",c?"rgba(255, 152, 0, 0.25)":"color-mix(in srgb, var(--pulse-text-primary) 15%, transparent)"),z.setAttribute("stroke-width",c?"0.5":"1"));let L=o.querySelectorAll("text");for(let $=0;$<r.length;$++){let w=r[$],T=a[$],E=w.power>0||w.hvacAction==="heating"||w.hvacAction==="cooling",q=h+$*u+20,G=w.power>0?S+w.power/100*(x-S):S,j=y+($-(r.length-1)/2)*A,F=an(j,q,G/2,G/2,d,g+_/2,b-12);T.setAttribute("d",F),E?(T.classList.add("pc-ribbon-active"),T.setAttribute("filter","url(#flow-glow)")):(T.classList.remove("pc-ribbon-active"),T.removeAttribute("filter"));let C=T.querySelector("title");C&&(C.textContent=`${w.name}: ${Math.round(w.power)}% heating power`);let D=o.querySelector(`g.flow-particles[data-zone-idx="${$}"]`);D&&(D.style.display=w.power>0?"":"none");let R=o.querySelector(`#flow-g${$}`);if(R){let W=E?s:l,Z=R.querySelectorAll("stop"),ot=R.querySelectorAll("animate");if(E){let Q=w.power>0?(4.5-w.power/100*3.3).toFixed(1):"5.0";Z.length>=3&&(Z[0].setAttribute("stop-color",W),Z[0].setAttribute("stop-opacity","0.3"),Z[1].setAttribute("stop-color",W),Z[1].setAttribute("stop-opacity","1.0"),Z[2].setAttribute("stop-color",W),Z[2].setAttribute("stop-opacity","0.3"));for(let rt of ot)rt.setAttribute("dur",`${Q}s`);R.setAttribute("gradientUnits","objectBoundingBox")}else{Z.length>=3&&(Z[0].setAttribute("stop-color",W),Z[0].setAttribute("stop-opacity","0.15"),Z[1].setAttribute("stop-color",W),Z[1].setAttribute("stop-opacity","0.25"),Z[2].setAttribute("stop-color",W),Z[2].setAttribute("stop-opacity","0.1"));for(let Q of ot)Q.remove()}}let H=1+$*2,P=2+$*2,N=L[H],B=L[P];if(N&&(N.textContent=w.name,N.setAttribute("fill",E?"var(--pulse-text-primary)":"var(--pulse-text-secondary)"),E?N.setAttribute("font-weight","500"):N.removeAttribute("font-weight")),B){let W=E?`${w.hvacAction==="cooling"?"Cooling":"Heating"} ${Math.round(w.power)}%${w.temp!==null?` \xB7 ${O(w.temp)}${w.unit}`:""}`:`Idle${w.temp!==null?` \xB7 ${O(w.temp)}${w.unit}`:""}`;B.textContent=W,B.setAttribute("fill",E?s:"var(--pulse-text-secondary)")}}return!0}var cn=6,to=2;function eo(t,e,i,n,o,r){let a=o*Math.PI/180,s=r*Math.PI/180,l=r-o>180?1:0;return`M${(t+i*Math.cos(a)).toFixed(2)},${(e+i*Math.sin(a)).toFixed(2)} A${i.toFixed(2)},${i.toFixed(2)} 0 ${l} 1 ${(t+i*Math.cos(s)).toFixed(2)},${(e+i*Math.sin(s)).toFixed(2)} L${(t+n*Math.cos(s)).toFixed(2)},${(e+n*Math.sin(s)).toFixed(2)} A${n.toFixed(2)},${n.toFixed(2)} 0 ${l} 0 ${(t+n*Math.cos(a)).toFixed(2)},${(e+n*Math.sin(a)).toFixed(2)} Z`}function oo(t,e,i,n,o){if(!t||t.length===0)return"";let r=at(),a=Number(e?.size)||280,s=e?.attribute||"temperature",l=s==="temperature"||s==="both",c=s==="humidity"||s==="both",d=a/2,u=a/2,h=a*120/280,p=1.5,_=(360-p*t.length)/t.length,g=[];for(let F of t){let{entityId:C,zoneState:D}=K(F,n,i);g.push({name:D.name,temp:D.currentTemp,target:D.targetTemp,power:D.heatingPower,humidity:D.humidity,hvacAction:D.hvacAction,entityId:C,unit:D.unit,rowClass:J(D)})}let b=e?.outdoor_temp_entity,y=b||n?.hubEntities?.outside_temp,x=null;if(y&&i[y]){let F=i[y];U(F)||(x=F.attributes?.temperature!==void 0?String(F.attributes.temperature):F.state)}let S=y&&i[y]?.attributes?.unit_of_measurement||"\xB0C",A=e?.outdoor_humidity_entity,M=null;if(A&&i[A]){let F=i[A];U(F)||(M=F.attributes?.humidity!==void 0?String(F.attributes.humidity):F.state)}let I="",z=s==="humidity"?M!==null?`${m(M)}%`:"--":x!==null?`${m(x)}${m(S)}`:"--";s!=="humidity"&&c&&M!==null&&(I=`${m(M)}%`);let $={temperature:"Home Thermal View",humidity:"Home Humidity View",both:"Home Climate View"}[s]||"Home Thermal View",w=`<div class="pc-section pc-section-radial" data-attribute="${m(s)}"${b?` data-outdoor-temp-entity="${m(b)}"`:""}${A?` data-outdoor-humidity-entity="${m(A)}"`:""}>`;w+=`<div class="pulse-section-label">${m($)}</div>`,w+='<div class="pc-radial-container">';let T=`r${Math.random().toString(36).slice(2,9)}`,E=`radial-glow-${T}`,q=F=>`heat-shimmer-${T}-${F}`;if(w+=`<svg class="pc-radial-svg" viewBox="0 0 ${a} ${a}" width="${a}" height="${a}" role="img" aria-label="${m($)}">`,w+="<defs>",w+=st(E,It(a,280).toFixed(1)),!r)for(let F=0;F<g.length;F++){let C=g[F],D=Ee(C.power,a);if(D<=0)continue;let R=45/Math.max(_,10),H=(.02*R).toFixed(4),P=(.04*R).toFixed(4);w+=`<filter id="${q(F)}" x="-5%" y="-5%" width="110%" height="110%">`,w+=`<feTurbulence type="turbulence" baseFrequency="${H} ${P}" numOctaves="2" result="turb">`,w+=`<animate attributeName="baseFrequency" values="${H} ${P};${(parseFloat(H)*1.5).toFixed(4)} ${P};${H} ${P}" dur="4s" repeatCount="indefinite"/>`,w+="</feTurbulence>",w+=`<feDisplacementMap in="SourceGraphic" in2="turb" scale="${D.toFixed(1)}" xChannelSelector="R" yChannelSelector="G"/>`,w+="</filter>"}w+="</defs>";for(let F=0;F<g.length;F++){let C=g[F],D=F*(_+p)-90,R=D+_,H=C.power>0||C.hvacAction==="heating"||C.hvacAction==="cooling",P=H?" pc-arc-active":"",N=[m(C.name)];l&&N.push(C.temp!==null?`${O(C.temp)}${C.unit}`:"--"),c&&C.humidity!==null&&N.push(`${Math.round(C.humidity)}%`),N.push(H?`${C.hvacAction==="cooling"?"Cooling":"Heating"} ${C.power}%`:"Idle");let B=N.join(", ");w+=`<g class="pc-arc-group${P}" data-idx="${F}">`;let W=c&&s==="both"?h+to+cn+4:h+4,Z=h-28-4,ot=eo(d,u,W,Z,D-p/2,R+p/2);if(w+=`<path d="${ot}" fill="transparent" class="pc-arc-hit"/>`,l){let Q=C.temp!==null?X(C.temp):"var(--pulse-disabled)",rt=8+C.power/100*20,gt=h-rt,Ht=eo(d,u,h,gt,D,R);if(w+=`<path d="${Ht}" fill="${k(Q)}" class="pc-arc-path"`,Ee(C.power,a)>0&&!r?w+=` filter="url(#${q(F)})"`:H&&(w+=` filter="url(#${E})"`),w+=`><title>${B}</title>`,H&&!r){let Wt=C.power>0?(4.5-C.power/100*3).toFixed(1):"5.0";w+=`<animate attributeName="opacity" values="1;0.82;1" dur="${Wt}s" repeatCount="indefinite"/>`}w+="</path>"}if(c&&C.humidity!==null){let Q=Ot(C.humidity),rt,gt;if(s==="both")rt=h+to+cn,gt=h+to;else{let wt=8+C.power/100*20;rt=h,gt=h-wt}let Ht=eo(d,u,rt,gt,D,R);w+=`<path d="${Ht}" fill="${k(Q)}" class="pc-arc-path" opacity="0.8">`,w+=`<title>${B}</title>`,w+="</path>"}w+="</g>"}w+="</svg>";let G=8;if(l)for(let F of g){let C=8+F.power/100*20;C>G&&(G=C)}let j=Math.round((h-G)*2);w+=`<div class="pc-center-info" id="radial-center" style="width:${j}px;height:${j}px">`,w+='<div class="pc-center-sheen" id="radial-sheen"></div>',w+=`<div class="pc-center-value">${z}</div>`,w+='<div class="pc-center-label">Outdoor</div>',w+=`<div class="pc-center-sub">${I}</div>`,w+="</div>",w+="</div>",w+='<div class="pc-zone-detail" id="radial-detail"></div>',w+='<div class="pc-radial-legend">';for(let F=0;F<g.length;F++){let C=g[F],D=s==="humidity"?C.humidity!==null?Ot(C.humidity):"var(--pulse-disabled)":C.temp!==null?X(C.temp):"var(--pulse-disabled)",R="";l&&(R+=C.temp!==null?`${O(C.temp)}${C.unit}`:"--"),l&&c&&(R+=" \xB7 "),c&&(R+=C.humidity!==null?`${Math.round(C.humidity)}%`:"--"),w+=`<div class="pc-legend-item${C.rowClass}" data-idx="${F}">`,w+=`<span class="pc-legend-dot" style="background:${k(D)}"></span>`,w+=`<span class="pc-legend-name">${m(C.name)}</span> <span class="pc-legend-temp">${m(R)}</span>`,w+="</div>"}return w+="</div>",w+="</div>",w}var wi=5,pn={green:"var(--pulse-tier-moderate)",amber:"var(--pulse-tier-strong)",red:"var(--pulse-tier-gale)"},xi={green:"mdi:check-circle",amber:"mdi:progress-clock",red:"mdi:alert-circle"};function $i(t){if(t.length===0)return{label:"All Good",color:"green",detail:"All zones off"};let e=t.filter(r=>r.currentTemp!==null&&r.currentTemp!==void 0&&r.targetTemp!==null&&r.targetTemp!==void 0&&Math.abs(r.currentTemp-r.targetTemp)<=1).length,i=t.length,n=e/i,o=i-e;return n>=.8?{label:"All Good",color:"green",detail:`${e} of ${i} zones at target`}:n>=.4?{label:"Warming Up",color:"amber",detail:`${o} zone${o!==1?"s":""} still catching up`}:{label:"Cold Start",color:"red",detail:`${o} of ${i} zones below target`}}function Si(t){let e=[],i=[],n=[];for(let o of t)o.isUnavailable?n.push(o):o.hvacAction==="off"||!o.targetTemp?i.push(o):e.push(o);return e.sort((o,r)=>{let a=o.currentTemp!==null&&o.currentTemp!==void 0&&o.targetTemp!==null?Math.abs(o.currentTemp-o.targetTemp):0;return(r.currentTemp!==null&&r.currentTemp!==void 0&&r.targetTemp!==null?Math.abs(r.currentTemp-r.targetTemp):0)-a}),i.sort((o,r)=>o.name.localeCompare(r.name)),n.sort((o,r)=>o.name.localeCompare(r.name)),[...e,...i,...n]}function ki(t){if(t.length===0)return{onTarget:"--",avgActual:"--",avgTarget:"--",avgPower:"--"};let e=t.filter(s=>s.currentTemp!==null&&s.currentTemp!==void 0&&s.targetTemp!==null&&s.targetTemp!==void 0&&Math.abs(s.currentTemp-s.targetTemp)<=1).length,i=t.length,n=(t.reduce((s,l)=>s+(l.currentTemp??0),0)/i).toFixed(1),o=(t.reduce((s,l)=>s+(l.targetTemp??0),0)/i).toFixed(1),r=Math.round(t.reduce((s,l)=>s+l.heatingPower,0)/i),a=t[0].unit||"\xB0C";return{onTarget:`${e}/${i}`,avgActual:`${n}${a}`,avgTarget:`${o}${a}`,avgPower:`${r}%`}}function Ti(t){let e=m(t.entityId),i=m(t.name),n=m(t.unit||"\xB0C"),o=!t.isUnavailable&&t.hvacAction!=="off"&&t.targetTemp,r,a;if(t.isUnavailable)r='<span class="pc-home-status-actual pc-off">--</span><span class="pc-home-status-arrow">\u2192</span><span class="pc-home-status-target">Unavailable</span>',a='<div class="pc-home-status-delta"><div class="pc-home-status-bar-track"><div class="pc-home-status-bar-center"></div></div><span class="pc-home-status-delta-text">--</span></div>';else if(!o)r=`<span class="pc-home-status-actual pc-off">${t.currentTemp!==null&&t.currentTemp!==void 0?`${m(t.currentTemp)}${n}`:"--"}</span><span class="pc-home-status-arrow"></span><span class="pc-home-status-target">Off</span>`,a='<div class="pc-home-status-delta"><div class="pc-home-status-bar-track"><div class="pc-home-status-bar-center"></div></div><span class="pc-home-status-delta-text">Off</span></div>';else if(r=`<span class="pc-home-status-actual">${t.currentTemp!==null&&t.currentTemp!==void 0?`${m(t.currentTemp)}${n}`:"--"}</span><span class="pc-home-status-arrow">\u2192</span><span class="pc-home-status-target">${m(t.targetTemp)}${n}</span>`,t.currentTemp!==null&&t.currentTemp!==void 0){let c=t.currentTemp-t.targetTemp,d=Math.abs(c),u=Math.min(d/wi,1)*50,h=c<0?`${k(50-u)}%`:"50%",p=`${k(u)}%`,f=d<1?"green":d<=2.5?"amber":"red",v=pn[f],g=`${c>=0?"+":"\u2212"}${m(d.toFixed(1))}\xB0`;a=`<div class="pc-home-status-delta"><div class="pc-home-status-bar-track"><div class="pc-home-status-bar-center"></div><div class="pc-home-status-bar-fill" style="left:${h};width:${p};background:${k(v)}"></div></div><span class="pc-home-status-delta-text" style="color:${k(v)}">${g}</span></div>`}else a='<div class="pc-home-status-delta"><div class="pc-home-status-bar-track"><div class="pc-home-status-bar-center"></div></div><span class="pc-home-status-delta-text">--</span></div>';return`<div class="pc-home-status-row${J(t)}" role="button" tabindex="0" data-entity="${e}"><span class="pc-home-status-zone-name">${i}</span><div class="pc-home-status-temps">${r}</div>`+a+"</div>"}function no(t,e,i,n){if(!t||t.length===0)return"";let o=t.map(h=>K(h,i,e).zoneState),r=o.filter(h=>!h.isUnavailable&&h.hvacAction!=="off"&&h.targetTemp),a=$i(r),s=pn[a.color],l=xi[a.color],c=Si(o),d=ki(r),u='<div class="pc-section pc-section-home-status">';u+='<div class="pulse-section-label">Home Status</div>',n?.show_hero===!1&&(u+='<div class="pc-home-status-hero">',u+=`<ha-icon class="pc-home-status-icon" icon="${m(l)}" style="color:${k(s)}"></ha-icon>`,u+=`<div class="pc-home-status-label" style="color:${k(s)}">${m(a.label)}</div>`,u+=`<div class="pc-home-status-detail">${m(a.detail)}</div>`,u+="</div>"),u+='<div class="pc-home-status-zones">';for(let h of c)u+=Ti(h);return u+="</div>",u+='<div class="pc-home-status-summary">',u+=`<div class="pc-stat"><div class="pc-stat-value">${m(d.onTarget)}</div><div class="pc-stat-label">On Target</div></div>`,u+=`<div class="pc-stat"><div class="pc-stat-value">${m(d.avgActual)}</div><div class="pc-stat-label">Avg Actual</div></div>`,u+=`<div class="pc-stat"><div class="pc-stat-value">${m(d.avgTarget)}</div><div class="pc-stat-label">Avg Target</div></div>`,u+=`<div class="pc-stat"><div class="pc-stat-value">${m(d.avgPower)}</div><div class="pc-stat-label">Avg Power</div></div>`,u+="</div>",u+="</div>",u}var io={comfort:"comfort_level"};function Ai(t,e,i,n){if(!(t in io))return!0;let o=io[t];if(!e||e.length===0)return!1;for(let r of e){let a=V(r.entity),l=(i?.zoneEntities?.[a]||{})[o];if(l&&!U(n[l]))return!0}return!1}function dn(t,e,i,n){let o=io[t];if(!o)return null;let a=(i?.zoneEntities?.[e]||{})[o];if(!a)return null;let s=n[a];if(U(s))return null;if(t==="comfort"){let c=s.attributes||{},d=parseFloat(c.temperature),u=parseFloat(c.comfort_target);if(!Number.isFinite(d)||!Number.isFinite(u))return null;let h=Math.abs(d-u);return Math.max(0,Math.min(100,Math.round(100-h*10)))}let l=parseFloat(s.state);return Number.isFinite(l)?l:null}function un(t,e,i){let n=["power","temp","humidity"];return Ai("comfort",t,e,i)&&n.push("comfort"),n}var hn="var(--pulse-tier-calm)";function Ci(t){return t<=40?"var(--pulse-tier-moderate)":t<=70?"var(--pulse-tier-strong)":"var(--pulse-tier-gale)"}function Ii(t){return t>=80?"var(--pulse-tier-moderate)":t>=50?"var(--pulse-tier-strong)":"var(--pulse-tier-gale)"}var mn={power:{label:"Power",unit:"%",max:100,colorFn:Ci},temp:{label:"Temp",unit:null,max:null,colorFn:()=>hn},humidity:{label:"Humidity",unit:"%",max:100,colorFn:()=>hn},comfort:{label:"Comfort",unit:"",max:100,colorFn:Ii}};function zi(t,e,i,n,o){if(e.isUnavailable)return null;switch(t){case"power":return e.heatingPower;case"temp":return e.currentTemp;case"humidity":return e.humidity;case"comfort":return dn("comfort",i,n,o);default:return null}}function Mi(t,e){let i=t.filter(l=>l!=null);if(i.length===0)return{avg:"--",high:"--",low:"--",spread:"--"};let n=i.reduce((l,c)=>l+c,0)/i.length,o=Math.max(...i),r=Math.min(...i),a=o-r,s=e||"";return{avg:`${O(n)}${s}`,high:`${O(o)}${s}`,low:`${O(r)}${s}`,spread:`${O(a)}${s}`}}function ye(t,e,i,n="power"){if(!t||t.length===0)return"";let o=un(t,i,e),r=o.includes(n)?n:"power",a=mn[r];if(!a)return"";let s=[];for(let f of t){let{entityId:v,zoneName:_,zoneState:g}=K(f,i,e),b=zi(r,g,_,i,e);s.push({entityId:v,name:g.name,value:b,unit:g.unit||"\xB0C",rowClass:J(g)})}s.sort((f,v)=>f.value===null&&v.value===null?0:f.value===null?1:v.value===null?-1:v.value-f.value);let l=s.map(f=>f.value).filter(f=>f!==null),c=a.max;c===null&&(c=l.length>0?Math.max(...l,30):30);let d=a.unit!==null?a.unit:s[0]?.unit||"\xB0C",u=`<div class="pc-section pc-section-zone-ranking" data-metric="${m(r)}">`;u+='<div class="pc-ranking-header">',u+='<div class="pulse-section-label">Zone Ranking</div>',u+='<div class="pc-ranking-tabs">';for(let f of o){let v=mn[f];if(!v)continue;u+=`<div class="pc-ranking-tab${f===r?" pc-active":""}" data-metric="${m(f)}">${m(v.label)}</div>`}u+="</div></div>",u+='<div class="pc-ranking-list">';for(let f=0;f<s.length;f++){let v=s[f],_=f+1,g=_===1&&v.value!==null?" pc-top":"",b=v.value!==null&&c>0?Math.round(v.value/c*100):0,y=v.value!==null?a.colorFn(v.value):"",x=v.value!==null?`${b}%`:"0%",S;v.value===null?S="--":r==="temp"?S=`${v.value}${v.unit}`:S=`${v.value}${d}`,u+=`<div class="pc-rank-row${v.rowClass}" role="button" tabindex="0" data-entity="${m(v.entityId)}">`,u+=`<div class="pc-rank-num${g}">${_}</div>`,u+=`<div class="pc-rank-name">${m(v.name)}</div>`,u+=`<div class="pc-rank-bar-track"><div class="pc-rank-bar-fill" style="width:${k(x)};background:${k(y)}"></div></div>`,u+=`<div class="pc-rank-value">${m(S)}</div>`,u+="</div>"}u+="</div>";let h=s.map(f=>f.value),p=Mi(h,d);return u+='<div class="pc-ranking-summary">',u+=`<div class="pc-stat"><div class="pc-stat-value">${m(p.avg)}</div><div class="pc-stat-label">Average</div></div>`,u+=`<div class="pc-stat"><div class="pc-stat-value">${m(p.high)}</div><div class="pc-stat-label">Highest</div></div>`,u+=`<div class="pc-stat"><div class="pc-stat-value">${m(p.low)}</div><div class="pc-stat-label">Lowest</div></div>`,u+=`<div class="pc-stat"><div class="pc-stat-value">${m(p.spread)}</div><div class="pc-stat-label">Spread</div></div>`,u+="</div>",u+="</div>",u}var Ei=48,fn=30,gn=70;function so(t,e){let i=Date.now(),n=24*3600*1e3,o=n/e,r=i-n,a=Array.from({length:e},()=>({state:"idle",power:0}));if(!Array.isArray(t)||t.length===0)return a;for(let s=0;s<e;s++){let l=r+s*o,c=l+o,d=t.filter(_=>_&&_.t>=l&&_.t<c);if(d.length===0)continue;let u={heating:0,cooling:0,idle:0,off:0},h=0,p=0;for(let _ of d)u[_.state]!==void 0&&(u[_.state]+=1),(_.state==="heating"||_.state==="cooling")&&Number.isFinite(_.power)&&(h+=_.power,p+=1);let f=["heating","cooling","idle","off"].reduce((_,g)=>u[g]>u[_]?g:_,"idle"),v=p>0?h/p:0;a[s]={state:f,power:v}}return a}function Li(t){let e="idle";return t.state==="heating"?t.power>=gn?e="heat":t.power>=fn?e="heat-mid":e="heat-low":t.state==="cooling"?t.power>=gn?e="cool":t.power>=fn?e="cool-mid":e="cool-low":t.state==="off"&&(e="off"),`pc-state-cell-${e}`}function Hi(t){let e=0,i=0;for(let n of t)n.state==="heating"?e+=30:n.state==="cooling"&&(i+=30);return{heatMin:e,coolMin:i}}function bn(t){let e=0,i=0,n=0,o=0,r=0,a=0;for(let l of t)l.state==="heating"||l.state==="cooling"?(o+=1,l.state==="heating"?r+=1:a+=1,o>e&&(e=o,i=r,n=a)):(o=0,r=0,a=0);if(e===0)return{minutes:0,mode:"none"};let s="mixed";return i>0&&n===0?s="heat":n>0&&i===0&&(s="cool"),{minutes:e*30,mode:s}}function _n(t){if(t.length===0)return null;let e=t.length/24,i=Array.from({length:24},()=>0);for(let s=0;s<t.length;s++){let l=t[s];if(l.state==="heating"||l.state==="cooling"){let c=Math.floor(s/e);i[c]+=1}}let n=-1,o=0;for(let s=0;s<24;s++)i[s]>o&&(o=i[s],n=s);return n<0?null:{hour:(new Date(Date.now()-24*3600*1e3).getHours()+n)%24,minutes:Math.round(o*30)}}function Fi(t,e){if(t===0&&e===0)return"\u2014";let i=t+e,n=Math.floor(i/60),o=i%60;return o===0?`${n}h`:`${n}h ${o}m`}function Ni(t,e){return t>e&&t>0?"pc-state-active-heat":e>0?"pc-state-active-cool":""}function Di(t){let i=Date.now()-864e5;return nt(new Date(i+t*18e5))}function Ri(t){if(t.state==="heating"||t.state==="cooling"){let e=t.state==="heating"?"heat":"cool";return t.power>0?`${e} ${Math.round(t.power)}%`:e}return t.state==="off"?"off":"idle"}function yn(t,e,i,n){let o='<div class="pc-strip-rows">';o+='<div class="pc-strip-crosshair"></div>';let r=0,a=0;for(let s of t){let{entityId:l,zoneName:c,zoneState:d}=K(s,i,e),u=n?.stateData?.[l]||[],h=so(u,Ei),{heatMin:p,coolMin:f}=Hi(h);r+=p,a+=f;let v=Fi(p,f),_=Ni(p,f),g=J(d);o+=`<div class="pc-timeline-group-row pc-state-row${g}" data-entity="${m(l)}" data-zone="${m(c)}">`,o+=`<span class="pc-timeline-group-name">${m(d.name)}</span>`,o+='<div class="pc-state-timeline-cells pc-cells">';for(let b=0;b<h.length;b++){let y=h[b],x=Di(b),S=Ri(y);o+=`<span class="pc-state-cell pc-cell ${Li(y)}" data-hour="${m(x)}" data-score="${m(S)}"></span>`}o+="</div>",o+=`<span class="pc-timeline-group-stat ${_}">${m(v)}</span>`,o+="</div>"}return o+="</div>",o+=Pi(),o+=qi(r,a,t.length),o}function Pi(){return'<div class="pc-timeline-group-axis"><span></span><div class="ticks"><span>\u221224h</span><span>\u221218h</span><span>\u221212h</span><span>\u22126h</span><span>now</span></div><span></span></div>'}function vn(t){let e=Math.floor(t/60),i=t%60;return i===0?`${e}h`:`${e}h ${i}m`}function qi(t,e,i){let n=t>0?`${vn(t)} heat`:"",o=e>0?`${vn(e)} cool`:"",a=[n,o].filter(Boolean).join(" \xB7 ")||"\u2014";return'<div class="pc-timeline-group-footer">'+Oi()+`<span><strong>${m(a)}</strong> \xB7 ${i} zones</span></div>`}function Oi(){return'<span class="pc-state-legend"><span class="pc-state-legend-pill"><span class="pc-state-legend-pip pc-state-legend-pip-heat"></span>Heat</span><span class="pc-state-legend-pill"><span class="pc-state-legend-pip pc-state-legend-pip-cool"></span>Cool</span><span class="pc-state-legend-pill"><span class="pc-state-legend-pip pc-state-legend-pip-idle"></span>Idle</span><span class="pc-state-legend-pill"><span class="pc-state-legend-pip pc-state-legend-pip-off"></span>Off</span></span>'}var Bi=new Set(["thermal","state"]),wn={thermal:{label:"Thermal",subtitle:"Tap a zone for details"},state:{label:"State",subtitle:"Heat / cool demand by zone"}};function ro(t,e,i,n,o){if(!e||e.length===0)return"";let r=t?.active_tab,a=typeof r=="string"&&Bi.has(r)?r:"thermal",s=`<div class="pc-section pc-section-timeline-group" data-active-tab="${m(a)}">`;s+='<div class="pc-section-header">',s+='<div class="pulse-section-label">24h Timeline</div>';let l=m(wn[a].subtitle);s+=`<span class="pc-section-subtitle">${l}</span>`,s+="</div>",s+='<div class="pc-timeline-group-tabs" role="tablist">';for(let c of["thermal","state"])s+=`<div class="pc-timeline-group-tab${c===a?" pc-active":""}" role="tab" tabindex="0" aria-selected="${c===a}" data-tab="${m(c)}">${m(wn[c].label)}</div>`;return s+="</div>",s+='<div class="pc-zone-detail" id="timeline-detail"></div>',s+='<div class="pc-timeline-group-body">',s+=a==="thermal"?be(e,i,n,o):yn(e,i,n,o),s+="</div>",s+="</div>",s}var Vi=[{key:"bridge",label:"Bridge",soloHeader:(t,e)=>"Bridge",predicate:Vt,render:(t,e,i,n)=>pe(t,e,n)},{key:"homekit",label:"HomeKit",soloHeader:(t,e)=>`HomeKit${ue(t,e)}`,predicate:Et,render:(t,e,i,n)=>he(t,e,n)},{key:"api",label:"API",soloHeader:(t,e)=>"API Usage",predicate:Bt,render:(t,e,i,n)=>ce(t,e,i,n)}];function ao(t,e,i,n){let o=Vi.filter(d=>d.predicate(e));if(o.length===0)return"";if(o.length===1){let d=o[0],u='<div class="pc-section pc-section-system-health-group">';return u+=`<div class="pulse-section-label">${m(d.soloHeader(e,i))}</div>`,u+='<div class="pc-system-health-group-body">',u+=d.render(e,i,t,n),u+="</div>",u+="</div>",u}let r=t?.active_tab,s=o.some(d=>d.key===r)?r:o[0].key,l=o.find(d=>d.key===s)||o[0],c=`<div class="pc-section pc-section-system-health-group" data-active-tab="${m(s)}">`;c+='<div class="pc-section-header">',c+='<div class="pulse-section-label">System Health</div>',c+="</div>",c+='<div class="pc-system-health-group-tabs" role="tablist">';for(let d of o){let u=d.key===s?" pc-active":"";c+=`<div class="pc-system-health-group-tab${u}" role="tab" tabindex="0" aria-selected="${d.key===s}" data-tab="${m(d.key)}">${m(d.label)}</div>`}return c+="</div>",c+='<div class="pc-system-health-group-body">',c+=l.render(e,i,t,n),c+="</div>",c+="</div>",c}var Ui=new Set(["heating","cooling","mixed"]),Wi=new Set(["subtle","medium","bold"]);function xn(t,e){if(!t||!Ui.has(t))return"";let i=e&&Wi.has(e)?e:"medium";return`<div class="pc-atmosphere-wash pc-state-${t} pc-intensity-${i}" aria-hidden="true"></div>`}var Gi={heating:"Heating",cooling:"Cooling",mixed:"Mixed",idle:"Idle",off:"Off"},ji=6;function Zi(t){let e="idle";return t.isUnavailable?e="unavail":t.hvacAction==="heating"?e="heating":t.hvacAction==="cooling"?e="cooling":t.hvacAction==="off"&&(e="off"),`pc-hero-dot-${e}`}function Ki(t){let e="idle";return t.isUnavailable?e="unavail":t.hvacAction==="heating"?e="heat":t.hvacAction==="cooling"?e="cool":t.hvacAction==="off"&&(e="off"),`pc-row-${e}`}function lo(t,e,i,n){if(!Array.isArray(t)||t.length===0)return"";let o=t.filter(b=>!b.isUnavailable),r=ie(t),a=t.filter(b=>!b.isUnavailable&&typeof b.currentTemp=="number"&&Number.isFinite(b.currentTemp)),s=a.length>0?a.reduce((b,y)=>b+y.currentTemp,0)/a.length:null,l=t[0]&&t[0].unit||"\xB0C",c=o.filter(b=>b.hvacAction==="heating").length,d=o.filter(b=>b.hvacAction==="cooling").length,u=Gi[r]||"Idle",h=s===null?"\u2014":`${O(s)}${m(l)}`,p=`<div class="pc-hero pc-state-${r}">`;p+='<div class="pc-hero-top-row">',p+='<div class="pc-hero-temp-block">',p+='<div class="pc-hero-label">Home avg</div>',p+=`<div class="pc-hero-temp">${h}</div>`,p+="</div>",p+='<div class="pc-hero-dots">';for(let b of t){let y=Zi(b),x=[m(b.name)];!b.isUnavailable&&b.hvacAction&&x.push(m(b.hvacAction)),p+=`<span class="pc-hero-zone-dot ${y}" data-entity="${m(b.entityId)}" title="${x.join(" \u2014 ")}"></span>`}p+="</div>",p+='<div class="pc-hero-right">';let f=c+d,v=f>0?`${m(u)} \xB7 ${f} active`:`${m(u)} \xB7 ${o.length} ${o.length===1?"zone":"zones"}`;if(p+=`<div class="pc-hero-status">${v}</div>`,e?.hero_show_outside!==!1&&n&&typeof n.value=="number"&&Number.isFinite(n.value)){let b=n;p+='<div class="pc-hero-outside">',p+=`Outside ${O(b.value)}${m(b.unit)}`,p+="</div>"}if(p+="</div>",p+="</div>",e?.hero_show_thermal_strip!==!1){let b=Xi(t,i);b&&(p+=b)}return p+="</div>",p}function Xi(t,e){let n=t.slice(0,ji),o=t.length-n.length,r=!1;for(let s of n){let l=e?.get?.(s.entityId);if(Array.isArray(l)&&l.length>=2){r=!0;break}}if(!r)return"";let a='<div class="pc-hero-strips">';for(let s of n)a+=Yi(s,e?.get?.(s.entityId)||[],24);return o>0&&(a+='<div class="pc-hero-zone-strip pc-hero-zone-strip-overflow">',a+=`<div class="pc-hero-zone-strip-label">+${o} more</div>`,a+="</div>"),a+="</div>",a}function Yi(t,e,i){let n=Ki(t),o="";if(Array.isArray(e)&&e.length>=2){let r={minTemp:t.minTemp??18,maxTemp:t.maxTemp??26},a=t.isUnavailable?"off":t.hvacAction,s=Math.max(1,Math.floor(e.length/i));for(let l=0;l<i;l++){let c=e[Math.min(e.length-1,l*s)],d=Yo(c.v,r,a);o+=`<span style="background:${k(d)}"></span>`}}else for(let r=0;r<i;r++)o+='<span class="pc-hero-zone-strip-cell-ghost"></span>';return`<div class="pc-hero-zone-strip ${n}" data-entity="${m(t.entityId)}"><div class="pc-hero-zone-strip-label">${m(t.name)}</div><div class="pc-hero-zone-strip-cells">${o}</div></div>`}function co(t,e,i){let n={value:null,unit:"\xB0C",entityId:null};if(!i)return n;let o=t?.outdoor_temp_entity||e?.hubEntities?.outside_temp||null;if(!o){for(let c of Object.keys(i))if(c.startsWith("weather.")&&i[c]?.attributes?.temperature!==void 0){o=c;break}}if(!o||!i[o])return n;let r=i[o];if(U(r))return{value:null,unit:"\xB0C",entityId:o};let a=r.attributes?.temperature!==void 0?r.attributes.temperature:r.state,s=Number.parseFloat(a),l=r.attributes?.unit_of_measurement||"\xB0C";return{value:Number.isFinite(s)?s:null,unit:l,entityId:o}}var $n=!1,Ji=typeof CSSStyleSheet<"u"&&typeof CSSStyleSheet.prototype.replaceSync=="function"&&typeof document<"u"&&"adoptedStyleSheets"in document.createElement("div").attachShadow({mode:"open"}),Sn=Ji?(()=>{let t=new CSSStyleSheet;return t.replaceSync(Me),t})():null,Qi=new Set(["zones","api","graph","bridge","thermal_strip","comfort_strip","homekit","weather","radial","donut","timeline_group","system_health_group"]),ts={zones:".pc-section-zones",api:".pc-section-api",graph:".pc-section-graph",bridge:".pc-section-bridge",thermal_strip:".pc-section-thermal-strip",comfort_strip:".pc-section-comfort-strip",homekit:".pc-section-homekit",weather:".pc-section-weather",radial:".pc-section-radial",donut:".pc-section-donut",environment:".pc-section-environment",thermal:".pc-section-thermal",schedule:".pc-section-schedule",energy_flow:".pc-section-energy-flow",home_status:".pc-section-home-status",zone_ranking:".pc-section-zone-ranking",timeline_group:".pc-section-timeline-group",system_health_group:".pc-section-system-health-group"},po=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_elements={};_discovery=null;_historyCache;_shadow;_countdownTimer=null;_historyFetchInProgress=!1;_rafId=null;_lastUpdateTime=0;_rerenderTargets=null;_chipAbort=null;_sectionChipAbort=null;_radialAbort=null;_timelineAbort=null;_stateTimelineAbort=null;_heatmapAbort=null;_energyFlowAbort=null;_sparklineAbort=null;_zoneRankingTabsAbort=null;_timelineGroupTabsAbort=null;_timelineGroupCellTooltipAbort=null;_systemHealthGroupTabsAbort=null;_sparklinePathCache=new Map;_radialAnimState={shimmer:!1,sheen:!1};_historyGen=0;constructor(){super(),this._shadow=this.attachShadow({mode:"open"}),this._historyCache=Go()}setConfig(e){this._stopRadialAnimations(),this._historyGen++,this._config=Vo(e),this._discovery=null,this._prevStates={},this._elements={},this._hass&&(this._runDiscovery(),this._fullRender()),this._buildRerenderTargets()}set hass(e){if(this._hass=e,!!this._config){if(!this._discovery){this._runDiscovery(),this._fullRender(),this._refreshHistoryIfNeeded();return}this._rafId||(this._rafId=requestAnimationFrame(()=>{if(this._rafId=null,!this._hass||!this._config||!this._discovery)return;let i=Date.now();if(i-this._lastUpdateTime<200)return;this._lastUpdateTime=i;let n=this._hass.states,o=(this._config._zones||[]).some(r=>n[r.entity]!==this._prevStates[r.entity]);o&&this._updateZones(),this._updateSections(),o&&this._updateHero(),this._refreshHistoryIfNeeded(),this._cacheWatchedStates()}))}}_runDiscovery(){if(!this._hass||!this._config)return;this._historyGen++;let i=(this._config._zones||[]).map(n=>V(n.entity));if(this._discovery=Do(this._hass.states,i,this._hass.entities),!$n&&this._discovery.isTadoCE){$n=!0;let n=Object.entries(this._discovery.hubEntities).map(([o,r])=>`${o}=${r}`);console.info(`${bt} Tado CE hub discovery \u2014 found: ${n.join(", ")}`),this._discovery.missingHubKeys.length>0&&console.warn(`${bt} Tado CE hub discovery \u2014 missing: ${this._discovery.missingHubKeys.join(", ")}. Affected sections may render with degraded data.`)}this._buildRerenderTargets()}_rebuildSparklinePathCache(){this._sparklinePathCache.clear();let e=this._historyCache?.data;if(e)for(let[i,n]of Object.entries(e)){if(!n||n.length<2)continue;let o=dt(n,340,36,48);o&&this._sparklinePathCache.set(i,o)}}_buildRerenderTargets(){if(!this._config||!this._discovery)return;let e=this._discovery,i=e.hubEntities,n=this._config._zones||[];this._rerenderTargets=[{selector:".pc-section-zones",watchIds:[i.home_state].filter(Boolean),render:()=>{let o=this._config,r=this._hass?.states||{};return Pe(n,o,r,e,this._historyCache)}},{selector:".pc-section-api",watchIds:[i.api_usage,i.api_limit,i.api_status,i.next_sync,i.token_status].filter(Boolean),render:()=>{let o=this._hass?.states||{},a=(this._config?.sections||[{type:"zones"}]).find(s=>(typeof s=="string"?s:s.type)==="api")||{};return qe(i,o,a,this._historyCache)}},{selector:".pc-section-homekit",watchIds:[i.homekit_connected,i.homekit_reads_saved,i.homekit_writes_saved].filter(Boolean),render:()=>{let o=this._hass?.states||{};return Be(i,o,this._historyCache)}},{selector:".pc-section-bridge",watchIds:[i.bridge_connected,i.boiler_flow_temp,i.wc_status,i.wc_target_flow].filter(Boolean),render:()=>{let o=this._hass?.states||{};return Oe(i,o,this._historyCache)}},{selector:".pc-section-weather",watchIds:[i.outside_temp,i.weather,i.solar_intensity].filter(Boolean),render:()=>{let o=this._hass?.states||{};return Ve(i,o,this._historyCache)}},{selector:".pc-section-environment",watchIds:n.flatMap(o=>{let r=V(o.entity),a=e.zoneEntities?.[r]||{};return[a.mold_risk,a.condensation,a.comfort_level,a.surface_temp,a.dew_point].filter(Boolean)}),render:()=>{let o=this._hass?.states||{};return Ue(n,o,e)}},{selector:".pc-section-thermal",watchIds:n.flatMap(o=>{let r=V(o.entity),a=e.zoneEntities?.[r]||{};return[a.heating_rate,a.thermal_inertia,a.preheat_time,a.confidence].filter(Boolean)}),render:()=>{let o=this._hass?.states||{};return We(n,o,e)}},{selector:".pc-section-schedule",watchIds:n.flatMap(o=>{let r=V(o.entity),a=e.zoneEntities?.[r]||{};return[a.next_schedule,a.next_sched_temp,a.schedule_deviation,a.preheat_advisor,a.comfort_target].filter(Boolean)}),render:()=>{let o=this._hass?.states||{};return Ge(n,o,e)}},{selector:".pc-section-radial",watchIds:n.map(o=>o.entity),render:()=>{let o=this._hass?.states||{},a=(this._config?.sections||[{type:"zones"}]).find(s=>(typeof s=="string"?s:s.type)==="radial")||{};return oo(n,a,o,e,this._historyCache)}},{selector:".pc-section-donut",watchIds:(()=>{let a=(this._config?.sections||[]).find(s=>(typeof s=="string"?s:s.type)==="donut")?.source;return a==="api_breakdown"&&i.api_breakdown?[i.api_breakdown]:a==="homekit_saved"?[i.homekit_reads_saved,i.homekit_writes_saved].filter(Boolean):[]})(),render:()=>{let o=this._hass?.states||{},a=(this._config?.sections||[]).find(s=>(typeof s=="string"?s:s.type)==="donut")||{};return Ke(a,i,o)}},{selector:".pc-section-graph",watchIds:[],render:()=>{let o=this._hass?.states||{},a=(this._config?.sections||[{type:"zones"}]).find(s=>(typeof s=="string"?s:s.type)==="graph")||{};return Ze(a,n,this._historyCache,o,e)}},{selector:".pc-section-home-status",watchIds:n.map(o=>o.entity),render:()=>{let o=this._hass?.states||{};return no(n,o,e,this._config||{})}},{selector:".pc-section-zone-ranking",watchIds:n.map(o=>o.entity),render:()=>{let o=this._hass?.states||{},a=this._shadow.querySelector(".pc-section-zone-ranking")?.getAttribute("data-metric")||"power";return ye(n,o,e,a)}}]}_fullRender(){if(!this._config||!this._hass||!this._discovery)return;let e=this._config,i=this._hass.states,n=this._discovery,o=e._zones||[],r=e.layout==="compact",a=e.entity_row===!0,s="";Sn?this._shadow.adoptedStyleSheets=[Sn]:s+=`<style>${Me}</style>`;let l=o.map(u=>{let h=V(u.entity),p=n.zoneEntities?.[h]||{};return Ct(u.entity,p,i,u,e)}),c=ie(l);if(a||(s+=`<ha-card${r?' class="pc-compact"':""}>`),e.show_atmosphere!==!1&&(s+=xn(c,e.atmosphere_intensity)),s+='<div class="pc-card-content">',e.title&&(s+=`<div class="pulse-title">${m(e.title)}</div>`),e.show_hero!==!1){let u=co(e,n,i),h=f=>{let v=o.findIndex(x=>x.entity===f);if(v<0)return f;let _=o[v],g=V(f),b=n?.zoneEntities?.[g]||{};return Y(f,i,b,_)?.entityId||f},p=Le(o,this._historyCache,h);s+=lo(l,e,p,u)}let d=e.sections||[{type:"zones"}];for(let u=0;u<d.length;u++){let h=d[u],p=this._renderSection(h,o,i,n);s+=p.replace(/^<div class="pc-section([^"]*)"/,`<div class="pc-section$1" data-section-index="${u}"`)}s+="</div>",a||(s+="</ha-card>"),this._shadow.innerHTML=s,this._elements.zonesSection=this._shadow.querySelector(".pc-section-zones"),this._elements.apiSection=this._shadow.querySelector(".pc-section-api"),this._cacheWatchedStates(),this._bindZoneActions(),this._bindChipActions(),this._bindSectionInteractions(),this._bindSectionChipActions(),this._startCountdownTimer()}_bindZoneActions(){if(!this._config||!this._hass)return;let e=this._shadow.querySelectorAll(".pc-zone-row"),i=this._config._zones||[];for(let n=0;n<e.length&&n<i.length;n++){let o=e[n],r=i[n],a=r.entity,s=o.__pulseCleanup;typeof s=="function"&&s();let l=new AbortController,{signal:c}=l,d=0,u=null,h=null,p=!1;o.__pulseCleanup=()=>{l.abort(),u&&clearTimeout(u),h&&clearTimeout(h),delete o.__pulseCleanup},o.addEventListener("keydown",v=>{let _=v;(_.key==="Enter"||_.key===" ")&&(_.preventDefault(),this._fireAction(a,r,"tap_action"))},{signal:c}),o.addEventListener("click",v=>{if(v.preventDefault(),p){p=!1;return}d++,d===1?u=setTimeout(()=>{d=0,this._fireAction(a,r,"tap_action")},250):d===2&&(u&&clearTimeout(u),d=0,this._fireAction(a,r,"double_tap_action"))},{signal:c}),o.addEventListener("pointerdown",()=>{p=!1,h=setTimeout(()=>{p=!0,this._fireAction(a,r,"hold_action")},500)},{signal:c});let f=()=>{h&&clearTimeout(h)};o.addEventListener("pointerup",f,{signal:c}),o.addEventListener("pointercancel",f,{signal:c}),o.addEventListener("contextmenu",v=>v.preventDefault(),{signal:c}),it(o)}}_bindSectionInteractions(){this._bindRadialInteractions(),this._bindTimelineInteractions(),this._bindHeatmapInteractions(),this._bindEnergyFlowInteractions(),this._bindSparklineCrosshairs(),this._bindZoneRankingTabs(),this._bindTimelineGroupTabs(),this._bindTimelineGroupCellTooltip(),this._bindStateTimelineInteractions(),this._bindSystemHealthGroupTabs()}_bindChipActions(){if(!this._config||!this._hass)return;let e=this._resetAbort("_chipAbort"),i=this._config._zones||[],n=this._shadow.querySelectorAll(".pc-zone-row");for(let o=0;o<n.length&&o<i.length;o++){let r=i[o],a=r.entity,s=n[o].querySelectorAll(".pc-chip");for(let l of s){let c=l,d=c.dataset.chipType||"",u=c.dataset.entity||a,h=r.chip_actions,p=this._config.chip_actions,f=h?.[d]||p?.[d]||{},v=f.tap_action||{action:"more-info",entity:u},_=f.hold_action||{action:"none"};c.style.cursor="pointer",it(c),c.addEventListener("click",b=>{b.stopPropagation(),this._hass&&Tt(this,this._hass,v,u,pt)},{signal:e});let g=null;c.addEventListener("pointerdown",b=>{b.stopPropagation(),g=setTimeout(()=>{!this._hass||_.action==="none"||Tt(this,this._hass,_,u,pt)},500)},{signal:e}),c.addEventListener("pointerup",b=>{b.stopPropagation(),g&&clearTimeout(g)},{signal:e}),c.addEventListener("pointercancel",()=>{g&&clearTimeout(g)},{signal:e}),c.addEventListener("contextmenu",b=>b.preventDefault(),{signal:e})}}}_bindSectionChipActions(){let e=this._resetAbort("_sectionChipAbort"),i=this._shadow.querySelectorAll(".pc-section [data-entity]");for(let n of i){let o=n;o.closest(".pc-zone-row")&&o.classList.contains("pc-chip")||o.classList.contains("pc-zone-row")||(o.style.cursor="pointer",it(o),o.addEventListener("click",r=>{r.stopPropagation();let a=o.dataset.entity;a&&Qt(this,"hass-more-info",{entityId:a})},{signal:e}))}}_startCountdownTimer(){this._countdownTimer&&clearInterval(this._countdownTimer);let e=this._shadow.querySelector(".chip-next-sync");if(!e)return;let i=Number(e.getAttribute("data-target"));if(!i||!isFinite(i))return;let n=()=>{let o=i-Date.now();if(o<=0){e.textContent="Next: now",this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null);return}let r=Math.floor(o/6e4),a=Math.floor(o%6e4/1e3);e.textContent=r>0?`Next: ${r}m ${a}s`:`Next: ${a}s`};n(),this._countdownTimer=setInterval(n,1e3)}_bindRadialInteractions(){let e=this._resetAbort("_radialAbort"),i=this._shadow.querySelectorAll(".pc-arc-group"),n=this._shadow.querySelectorAll(".pc-radial-legend .pc-legend-item"),o=this._shadow.querySelector("#radial-center"),r=this._shadow.querySelector("#radial-detail"),a=this._shadow.querySelector(".pc-section-radial svg");if(i.length===0||!o)return;let l=(a&&Number(a.getAttribute("width"))||280)/2,c=this._config?._zones||[],d=null,u=this._shadow.querySelector(".pc-section-radial")?.getAttribute("data-outdoor-temp-entity"),h=this._shadow.querySelector(".pc-section-radial")?.getAttribute("data-attribute")||"temperature",p=this._shadow.querySelector(".pc-section-radial")?.getAttribute("data-outdoor-humidity-entity"),f=()=>{let g=this._hass?.states||{},b=this._discovery,y=u||b?.hubEntities?.outside_temp,x="--",S="";if(h!=="humidity"&&y&&g[y]){let A=g[y];U(A)||(x=`${A.attributes?.temperature!==void 0?A.attributes.temperature:A.state}${A.attributes?.unit_of_measurement||"\xB0C"}`)}if(p&&g[p]){let A=g[p];if(!U(A)){let M=A.attributes?.humidity!==void 0?A.attributes.humidity:A.state;h==="humidity"?x=`${M}%`:S=`${M}%`}}return{center:x,centerSub:S}},v=g=>{let b=this._hass?.states||{},y=this._discovery;if(d===g){_();return}d=g;let x=c[g];if(!x)return;let S=x.entity,A=V(S),M=y?.zoneEntities?.[A]||{},I=Rt(S,b,x),{name:z,temp:L,target:$,humidity:w}=I,T=I.hvacAction,E=0;if(M.heating_power){let R=b[M.heating_power];U(R)||(E=parseFloat(R.state)||0)}else b[S]?.attributes?.heating_power!==void 0&&(E=parseFloat(b[S].attributes.heating_power)||0);let G=E>0||T==="heating"||T==="cooling"?`${T==="cooling"?"Cooling":"Heating"} ${Math.round(E)}%`:"Idle",j=o.querySelector(".pc-center-value"),F=o.querySelector(".pc-center-label"),C=o.querySelector(".pc-center-sub");j&&(j.textContent=L!==void 0?`${O(L)}${I.unit}`:"--"),F&&(F.textContent=z);let D=w!==void 0?` \xB7 ${w}%`:"";C&&(C.textContent=`${G}${D}`),i.forEach((R,H)=>{R.classList.toggle("pc-dimmed",H!==g),R.classList.toggle("pc-selected",H===g),H===g?R.setAttribute("transform",`translate(${l}, ${l}) scale(1.06) translate(${-l}, ${-l})`):R.removeAttribute("transform")}),n.forEach((R,H)=>{R.classList.toggle("pc-selected",H===g)}),r&&(r.innerHTML=`<div class="pc-detail-stats">
          <div class="pc-stat"><div class="pc-stat-value">${$!==void 0?m($)+m(I.unit):"--"}</div><div class="pc-stat-label">Target</div></div>
          <div class="pc-stat"><div class="pc-stat-value">${w!==void 0?m(w)+"%":"--"}</div><div class="pc-stat-label">Humidity</div></div>
          <div class="pc-stat"><div class="pc-stat-value">${m(T)}</div><div class="pc-stat-label">Action</div></div>
        </div>`,r.classList.add("pc-active"))},_=()=>{d=null;let{center:g,centerSub:b}=f(),y=o.querySelector(".pc-center-value"),x=o.querySelector(".pc-center-label"),S=o.querySelector(".pc-center-sub");y&&(y.textContent=g),x&&(x.textContent="Outdoor"),S&&(S.textContent=b),i.forEach(A=>{A.classList.remove("pc-dimmed","pc-selected"),A.removeAttribute("transform")}),n.forEach(A=>{A.classList.remove("pc-selected")}),r&&(r.classList.remove("pc-active"),r.innerHTML="")};if(i.forEach((g,b)=>{g.addEventListener("click",()=>v(b),{signal:e})}),n.forEach((g,b)=>{it(g),g.addEventListener("click",()=>v(b),{signal:e})}),this._stopRadialAnimations(),i.length>1&&!at()){this._radialAnimState.shimmer=!0;let g=0,b=1,y=()=>{if(!this._radialAnimState.shimmer)return;if(d!==null){setTimeout(y,500);return}let x=i[g];if(!x){setTimeout(y,300);return}if(x.style.filter="brightness(1.8)",x.style.transition="filter 0.3s ease-in",setTimeout(()=>{x.style.filter="",x.style.transition="filter 0.5s ease-out"},250),g+=b,g>=i.length||g<0){g=b>0?0:i.length-1;let S=1e3+Math.random()*2e3;Math.random()<.4&&(b*=-1),setTimeout(y,S)}else{let S=80+Math.random()*170;setTimeout(y,S)}};setTimeout(y,1500)}if(!at()){let g=this._shadow.querySelector("#radial-sheen");if(g){let y=getComputedStyle(this).getPropertyValue("--primary-background-color").trim().match(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);(y?(.299*Number(y[1])+.587*Number(y[2])+.114*Number(y[3]))/255>=.5:!1)?g.classList.add("light-theme"):g.classList.remove("light-theme"),this._radialAnimState.sheen=!0;let S=()=>{if(!this._radialAnimState.sheen)return;let A=Math.random()>.5,M=A?"-100% 50%":"200% 50%",I=A?"200% 50%":"-100% 50%",z=1.2+Math.random()*1.5;g.style.transition="none",g.style.backgroundPosition=M,g.offsetWidth,g.style.transition=`background-position ${z}s ease-in-out`,g.style.backgroundPosition=I,setTimeout(()=>{let L=4e3+Math.random()*6e3;setTimeout(S,L)},z*1e3)};setTimeout(S,2e3+Math.random()*3e3)}}}_stopRadialAnimations(){this._radialAnimState.shimmer=!1,this._radialAnimState.sheen=!1}_resetAbort(e){let i=this[e];i&&i.abort();let n=new AbortController;return this[e]=n,n.signal}_bindTimelineInteractions(){let e=this._resetAbort("_timelineAbort"),i=this._shadow.querySelectorAll(".pc-section-thermal-strip, .pc-section-timeline-group");if(i.length===0)return;let n=this._config?._zones||[],o=this._hass?.states?.[n[0]?.entity]?.attributes?.unit_of_measurement||"\xB0C";for(let r of i){let a=r.querySelectorAll(".pc-timeline-row");if(a.length===0)continue;let s=r.querySelector(".pc-section-subtitle"),l="Tap a zone for details",c=null,d=null,u=h=>{d=null;let p=h.querySelector(".pc-comparison-path");p&&p.remove();let f=h.querySelector(".pc-comparison-legend");f&&f.remove()};a.forEach((h,p)=>{it(h),h.addEventListener("click",()=>{let f=this._hass?.states||{},v=this._discovery,_=this._historyCache;if(r.querySelectorAll(".pc-strip-drag-highlight").forEach(H=>{H.style.display="none"}),c!==null&&c!==p){let H=r.querySelector(".pc-zone-detail"),P=H?.querySelector(".pc-detail-sparkline svg");if(H&&P){if(d===p){u(H);return}u(H),d=p;let N=n[p];if(!N)return;let B=N.entity,W=V(B),Z=v?.zoneEntities?.[W]||{},ot=N.temperature_entity||Z.temperature||B,Q=_?.data?.[ot]||[];if(Q.length>=2){let Wt=this._sparklinePathCache.get(ot)||dt(Q,340,36,48);if(Wt){let vt=document.createElementNS("http://www.w3.org/2000/svg","path");vt.setAttribute("d",Wt.linePath),vt.setAttribute("fill","none"),vt.setAttribute("stroke","var(--pulse-info-color)"),vt.setAttribute("stroke-width","1.5"),vt.setAttribute("opacity","0.5"),vt.classList.add("pc-comparison-path"),P.appendChild(vt)}}let rt=n[c],gt=Rt(rt?.entity||"",f,rt).name,Ht=Rt(B,f,N).name,wt=document.createElement("div");wt.className="pc-comparison-legend",wt.innerHTML=`<span><span style="display:inline-block;width:8px;height:8px;border-radius:var(--pulse-radius-circle);background:currentColor;margin-right:4px"></span>${m(gt)}</span><span><span style="display:inline-block;width:8px;height:8px;border-radius:var(--pulse-radius-circle);background:var(--pulse-info-color);margin-right:4px"></span>${m(Ht)}</span>`,H.appendChild(wt);return}}if(c===p){c=null,d=null,a.forEach(P=>P.classList.remove("pc-selected"));let H=r.querySelector(".pc-zone-detail");H&&H.classList.remove("pc-active"),s&&(s.textContent=l);return}c=p,a.forEach((H,P)=>H.classList.toggle("pc-selected",P===p));let g=n[p];if(!g)return;let b=g.entity,y=f[b]?.attributes||{},x=Rt(b,f,g),{name:S,temp:A,target:M,humidity:I,hvacAction:z}=x;s&&(s.textContent=S);let L=V(b),$=v?.zoneEntities?.[L]||{},w=g.temperature_entity||$.temperature||b,T=_?.data?.[w]||[],E="";if(T.length>=2){let H=T[T.length-1],P=T[T.length-2],N=H.v-P.v,B=(H.t-P.t)/36e5;if(B>0&&isFinite(N)&&isFinite(B)){let W=N/B;E=`${W>=0?"+":""}${W.toFixed(1)}${x.unit}/hr`}}let q=0;if($.heating_power){let H=f[$.heating_power];U(H)||(q=parseFloat(H.state)||0)}else y.heating_power!==void 0&&(q=parseFloat(y.heating_power)||0);let j=q>0||z==="heating"||z==="cooling"?`${z==="cooling"?"Cooling":"Heating"} ${Math.round(q)}%`:"Idle",F="";if(T.length>=2){let H=1/0,P=-1/0;for(let N of T)isFinite(N.v)&&(N.v<H&&(H=N.v),N.v>P&&(P=N.v));isFinite(H)&&isFinite(P)&&(F=`${H.toFixed(1)}${x.unit} \u2013 ${P.toFixed(1)}${x.unit} today`)}let C="";if(T.length>=2){let H=z==="heating"?"var(--pulse-tier-strong)":A!==void 0&&isFinite(Number(A))?X(Number(A)):"var(--pulse-text-primary)",P=k(H),N=this._sparklinePathCache.get(w)||dt(T,340,36,48);if(N){let B=`tl-detail-grad-${p}`;C=`<div class="pc-detail-sparkline pc-sparkline-filled" style="height:36px;margin-top:10px"><svg viewBox="0 0 340 36" preserveAspectRatio="none"><defs><linearGradient id="${m(B)}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${P}" stop-opacity="0.3"/><stop offset="100%" stop-color="${P}" stop-opacity="0"/></linearGradient></defs><path d="${N.areaPath}" fill="url(#${m(B)})" /><path d="${N.linePath}" fill="none" stroke="${P}" stroke-width="1.5" opacity="0.7" /></svg></div>`}}let D=r.querySelector(".pc-zone-detail");if(!D)return;D.innerHTML=`<div class="pc-detail-header"><span class="pc-detail-name">${m(S)}</span><span class="pc-detail-close">\u2715 Close</span></div>
          <div class="pc-detail-stats">
            <div class="pc-stat"><div class="pc-stat-value">${A!==void 0?m(A)+m(x.unit):"--"}</div><div class="pc-stat-label">Current</div>${E?`<div class="pc-stat-sub">${m(E)}</div>`:""}</div>
            <div class="pc-stat"><div class="pc-stat-value">${M!==void 0?m(M)+m(x.unit):"--"}</div><div class="pc-stat-label">Target</div>${j?`<div class="pc-stat-sub">${m(j)}</div>`:""}</div>
            <div class="pc-stat"><div class="pc-stat-value">${I!==void 0?m(I)+"%":"--"}</div><div class="pc-stat-label">Humidity</div>${F?`<div class="pc-stat-sub">${m(F)}</div>`:""}</div>
          </div>${C}`,D.classList.add("pc-active");let R=D.querySelector(".pc-detail-close");R&&R.addEventListener("click",H=>{H.stopPropagation(),c=null,d=null,a.forEach(P=>P.classList.remove("pc-selected")),D.classList.remove("pc-active"),s&&(s.textContent=l)},{signal:e})},{signal:e})}),r.classList.contains("pc-section-thermal-strip")&&this._bindThermalStripHandlers(r,e,o)}}_bindThermalStripHandlers(e,i,n){let o=ge(),r=e.querySelector(".pc-strip-rows");r&&(r.style.position="relative",r.appendChild(o.element)),e.querySelectorAll(".pc-strip-container").forEach(c=>{let d=c.getAttribute("data-slots"),u=null;try{d&&(u=JSON.parse(d))}catch{}c.addEventListener("pointermove",h=>{if(h.pointerType==="touch"||!u)return;let p=c.getBoundingClientRect(),f=ft(h.clientX,p,u.length),v=u[f];if(v){let _=v.v!==null?`${v.l}: ${v.v}${n}`:`${v.l}: --`;o.show(p,h.clientX-p.left,_)}},{signal:i}),c.addEventListener("pointerleave",()=>o.hide(),{signal:i}),c.addEventListener("pointerdown",h=>{if(h.pointerType!=="touch"||!u)return;let p=c.getBoundingClientRect(),f=ft(h.clientX,p,u.length),v=u[f];if(v){let _=v.v!==null?`${v.l}: ${v.v}${n}`:`${v.l}: --`;o.show(p,h.clientX-p.left,_),setTimeout(()=>o.hide(),2e3)}},{signal:i})});let s=r?.querySelectorAll(".pc-strip-container");if(r&&s&&s.length>0){let c=r.querySelector(".pc-strip-crosshair"),d=s[0];if(c&&d){let u=d.getBoundingClientRect().left-r.getBoundingClientRect().left;Xe(r,c,d,u)}}e.querySelectorAll(".pc-strip-container, .pc-cells").forEach(c=>{let d=c.getAttribute("data-slots"),u=null;try{d&&(u=JSON.parse(d))}catch{}Ye(c,u,o,n)})}_bindStateTimelineInteractions(){let e=this._resetAbort("_stateTimelineAbort"),i=this._shadow.querySelectorAll(".pc-section-timeline-group");if(i.length!==0)for(let n of i){let o=n.querySelectorAll(".pc-state-row");if(o.length===0)continue;let r=n.querySelector(".pc-zone-detail");if(!r)continue;let a=n.querySelector(".pc-section-subtitle"),s="Heat / cool demand by zone",l=null;o.forEach((c,d)=>{it(c),c.addEventListener("click",()=>{if(l===d){l=null,o.forEach(N=>N.classList.remove("pc-selected")),r.classList.remove("pc-active"),a&&(a.textContent=s);return}l=d,o.forEach((N,B)=>N.classList.toggle("pc-selected",B===d));let u=this._hass?.states||{},h=this._discovery,p=this._historyCache,v=(this._config?._zones||[])[d];if(!v)return;let _=v.entity,g=V(_),b=h?.zoneEntities?.[g]||{},y=Ct(_,b,u,v,{});a&&(a.textContent=y.name);let x=p?.stateData?.[_]||[],S=so(x,48),A=0,M=0,I=0,z=0;for(let N of S)N.state==="heating"?A+=30:N.state==="cooling"?M+=30:N.state==="off"?z+=30:I+=30;let L=A+M,$=bn(S),w=_n(S),T=N=>{if(N===0)return"0m";let B=Math.floor(N/60),W=N%60;return B===0?`${W}m`:W===0?`${B}h`:`${B}h ${W}m`},E=L>0?T(L):"no demand",q=[];A>0&&q.push(`${T(A)} heat`),M>0&&q.push(`${T(M)} cool`);let G=q.join(" \xB7 "),j="";$.minutes>0&&(j=`${$.mode==="heat"?"heating":$.mode==="cool"?"cooling":"active"} run`);let F=$.minutes>0?T($.minutes):"\u2014",C="\u2014",D="";w&&w.minutes>0&&(C=`${String(w.hour).padStart(2,"0")}:00`,D=`${T(w.minutes)} demand`);let R=`${T(I)} idle`,H=z>0?` \xB7 ${T(z)} off`:"";r.innerHTML=`<div class="pc-detail-header"><span class="pc-detail-name">${m(y.name)}</span><span class="pc-detail-close">\u2715 Close</span></div><div class="pc-detail-stats"><div class="pc-stat"><div class="pc-stat-value">${m(E)}</div><div class="pc-stat-label">24h Demand</div>`+(G?`<div class="pc-stat-sub">${m(G)}</div>`:"")+`</div><div class="pc-stat"><div class="pc-stat-value">${m(F)}</div><div class="pc-stat-label">Longest Run</div>`+(j?`<div class="pc-stat-sub">${m(j)}</div>`:"")+`</div><div class="pc-stat"><div class="pc-stat-value">${m(C)}</div><div class="pc-stat-label">Busiest Hour</div>`+(D?`<div class="pc-stat-sub">${m(D)}</div>`:"")+`</div></div><div class="pc-state-detail-footer">${m(R+H)}</div>`,r.classList.add("pc-active");let P=r.querySelector(".pc-detail-close");P&&P.addEventListener("click",N=>{N.stopPropagation(),l=null,o.forEach(B=>B.classList.remove("pc-selected")),r.classList.remove("pc-active"),a&&(a.textContent=s)},{signal:e})},{signal:e})})}}_bindHeatmapInteractions(){let e=this._resetAbort("_heatmapAbort"),i=this._shadow.querySelectorAll(".pc-section-comfort-strip .pc-heatmap-row"),n=this._shadow.querySelector("#heatmap-detail");if(i.length===0||!n)return;let o=null;i.forEach((p,f)=>{it(p),p.addEventListener("click",()=>{let v=this._shadow.querySelector(".pc-section-comfort-strip");if(v&&v.querySelectorAll(".pc-strip-drag-highlight").forEach($=>{$.style.display="none"}),o===f){o=null,i.forEach($=>$.classList.remove("pc-selected")),n.classList.remove("pc-active");return}o=f,i.forEach(($,w)=>$.classList.toggle("pc-selected",w===f));let _=p.querySelectorAll(".pc-cell"),g=[],b=[];if(_.length>0)_.forEach($=>{let w=$.getAttribute("data-score");w&&(g.push(Number(w)),b.push($.getAttribute("data-hour")||"--"))});else{let w=p.querySelector(".pc-strip-container")?.getAttribute("data-slots");if(w)try{let T=JSON.parse(w);for(let E of T)E.v!==null&&E.v!==void 0&&(g.push(E.v),b.push(E.l||"--"))}catch{}}if(g.length===0)return;let y=Math.round(g.reduce(($,w)=>$+w,0)/g.length),x=0,S=0;for(let $=1;$<g.length;$++)g[$]>g[x]&&(x=$),g[$]<g[S]&&(S=$);let A=b[x]||"--",M=b[S]||"--",I=y>=80?"var(--pulse-tier-moderate)":y>=50?"var(--pulse-tier-strong)":"var(--pulse-tier-gale)",z=p.querySelector(".pc-zone-label")?.textContent||"";n.innerHTML=`<div class="pc-detail-header"><span class="pc-detail-name">${m(z)}</span><span class="pc-detail-close">\u2715 Close</span></div>
          <div class="pc-detail-stats">
            <div class="pc-stat"><div class="pc-stat-value">${y}</div><div class="pc-stat-label">Avg Score</div></div>
            <div class="pc-stat"><div class="pc-stat-value">${m(A)}</div><div class="pc-stat-label">Best Hour</div></div>
            <div class="pc-stat"><div class="pc-stat-value">${m(M)}</div><div class="pc-stat-label">Worst Hour</div></div>
          </div>
          <div class="pc-detail-bar"><div class="pc-detail-bar-fill" style="width:${y}%;background:${k(I)}"></div></div>`,n.classList.add("pc-active");let L=n.querySelector(".pc-detail-close");L&&L.addEventListener("click",$=>{$.stopPropagation(),o=null,i.forEach(w=>w.classList.remove("pc-selected")),n.classList.remove("pc-active")},{signal:e})},{signal:e})});let r=this._shadow.querySelector(".pc-section-comfort-strip");if(!r)return;let a=ge(),s=r.querySelector(".pc-heatmap-body");s&&(s.style.position="relative",s.appendChild(a.element));let l=s?.querySelector(".pc-cells")||s?.querySelector(".pc-strip-container");r.querySelectorAll(".pc-cells").forEach(p=>{p.addEventListener("pointermove",f=>{if(f.pointerType==="touch")return;let v=f.target?.closest?.(".pc-cell");if(!v){a.hide();return}let _=v.getAttribute("data-hour")||"",g=v.getAttribute("data-score"),b=g?`${_}: Score ${g}`:`${_}: --`,y=l?.getBoundingClientRect();y&&a.show(y,f.clientX-y.left,b)},{signal:e}),p.addEventListener("pointerleave",()=>a.hide(),{signal:e}),p.addEventListener("pointerdown",f=>{if(f.pointerType!=="touch")return;let v=f.target?.closest?.(".pc-cell");if(!v)return;let _=v.getAttribute("data-hour")||"",g=v.getAttribute("data-score"),b=g?`${_}: Score ${g}`:`${_}: --`,y=l?.getBoundingClientRect();y&&(a.show(y,f.clientX-y.left,b),setTimeout(()=>a.hide(),2e3))},{signal:e})}),r.querySelectorAll(".pc-strip-container").forEach(p=>{let f=p.getAttribute("data-slots"),v=null;try{f&&(v=JSON.parse(f))}catch{}p.addEventListener("pointermove",_=>{if(_.pointerType==="touch"||!v)return;let g=p.getBoundingClientRect(),b=ft(_.clientX,g,v.length),y=v[b];if(y){let x=y.v!==null?`${y.l}: Score ${y.v}`:`${y.l}: --`;a.show(g,_.clientX-g.left,x)}},{signal:e}),p.addEventListener("pointerleave",()=>a.hide(),{signal:e}),p.addEventListener("pointerdown",_=>{if(_.pointerType!=="touch"||!v)return;let g=p.getBoundingClientRect(),b=ft(_.clientX,g,v.length),y=v[b];if(y){let x=y.v!==null?`${y.l}: Score ${y.v}`:`${y.l}: --`;a.show(g,_.clientX-g.left,x),setTimeout(()=>a.hide(),2e3)}},{signal:e})});let u=s?.querySelector(".pc-strip-crosshair");if(s&&u&&l){let p=l.getBoundingClientRect().left-s.getBoundingClientRect().left;Xe(s,u,l,p)}r.querySelectorAll(".pc-cells, .pc-strip-container").forEach(p=>{let f=p.getAttribute("data-slots"),v=null;try{f&&(v=JSON.parse(f))}catch{}Ye(p,v,a)})}_bindEnergyFlowInteractions(){let e=this._resetAbort("_energyFlowAbort"),i=this._shadow.querySelectorAll(".section-energy-flow path[data-zone]"),n=this._shadow.querySelector(".section-energy-flow");if(i.length===0||!n)return;let o=null;i.forEach(r=>{r.classList.add("pc-ribbon"),r.addEventListener("click",()=>{let a=r.getAttribute("data-zone");if(a){if(o===a){o=null,i.forEach(s=>s.classList.remove("pc-dimmed"));return}o=a,i.forEach(s=>{s.classList.toggle("pc-dimmed",s.getAttribute("data-zone")!==a)})}},{signal:e})})}_bindSparklineCrosshairs(){let e=this._resetAbort("_sparklineAbort");this._shadow.querySelectorAll(".pc-strip-tooltip-fixed").forEach(o=>o.remove()),this._shadow.querySelectorAll(".sparkline-crosshair").forEach(o=>o.remove());let i=this._shadow.querySelectorAll(".pc-section-zones .pc-sparkline-filled, .pc-section-zones .pc-zone-row-pulse");if(i.length===0)return;let n=en();this._shadow.appendChild(n.element),i.forEach(o=>{let r=o;r.style.position="relative";let a=document.createElement("div");a.className="pc-strip-crosshair pc-sparkline-crosshair",a.style.display="none",a.style.top="0",a.style.bottom="0",r.appendChild(a);let s=r.getAttribute("data-sparkline"),l=null;try{s&&(l=JSON.parse(s))}catch{}r.addEventListener("pointermove",d=>{if(d.pointerType==="touch")return;let u=r.getBoundingClientRect(),h=d.clientX-u.left;if(!(h<0||h>u.width)&&(a.style.left=`${h}px`,a.style.display="",l)){let p=l.d,f=l.u||"",v=Math.min(p.length-1,Math.floor(h/u.width*p.length)),_=p[v];if(_){let g=_.v!==null?`${_.l}: ${_.v}${f}`:`${_.l}: --`;n.show(u,d.clientX,g)}}},{signal:e}),r.addEventListener("pointerleave",()=>{a.style.display="none",n.hide()},{signal:e});let c=null;r.addEventListener("pointerdown",d=>{if(d.pointerType!=="touch")return;let u=r.getBoundingClientRect(),h=d.clientX-u.left;if(!(h<0||h>u.width)){if(a.style.left=`${h}px`,a.style.display="",l){let p=l.d,f=l.u||"",v=Math.min(p.length-1,Math.floor(h/u.width*p.length)),_=p[v];if(_){let g=_.v!==null?`${_.l}: ${_.v}${f}`:`${_.l}: --`;n.show(u,d.clientX,g)}}c&&clearTimeout(c),c=setTimeout(()=>{a.style.display="none",n.hide(),c=null},2e3)}},{signal:e})})}_bindZoneRankingTabs(){let e=this._resetAbort("_zoneRankingTabsAbort"),i=this._shadow.querySelector(".pc-section-zone-ranking");if(!i)return;let n=i.querySelectorAll(".pc-ranking-tab");if(n.length===0)return;let o=this._config?._zones||[],r=this._discovery;if(r)for(let a of n)a.addEventListener("click",()=>{let s=a.dataset.metric;if(!s)return;let l=this._hass?.states||{},c=ye(o,l,r,s);if(!c)return;let d=document.createElement("template");d.innerHTML=c;let u=d.content.firstElementChild;u&&(i.replaceWith(u),this._bindZoneRankingTabs(),this._bindSectionChipActions())},{signal:e})}_bindTimelineGroupTabs(){let e=this._resetAbort("_timelineGroupTabsAbort"),i=this._shadow.querySelectorAll(".pc-section-timeline-group");if(i.length===0)return;let n=this._config?._zones||[],o=this._discovery;if(o)for(let r of i){let a=Number(r.dataset.sectionIndex);if(Number.isNaN(a))continue;let s=r.querySelectorAll(".pc-timeline-group-tab");for(let l of s)l.addEventListener("click",()=>{let c=l.dataset.tab;if(!c||!["thermal","state"].includes(c))return;let d=[...this._config?.sections||[]],u=d[a];if(!u||typeof u=="string"||u.type!=="timeline_group")return;let h={...u,active_tab:c};d[a]=h,this._config={...this._config,sections:d};let p=this._hass?.states||{},f=this._historyCache,v=ro(h,n,p,o,f);if(!v)return;let _=v.replace(/^<div class="pc-section([^"]*)"/,`<div class="pc-section$1" data-section-index="${a}"`),g=document.createElement("template");g.innerHTML=_;let b=g.content.firstElementChild;b&&(r.replaceWith(b),this._bindTimelineGroupTabs(),this._bindTimelineGroupCellTooltip(),this._bindTimelineInteractions(),this._bindStateTimelineInteractions())},{signal:e})}}_bindTimelineGroupCellTooltip(){let e=this._resetAbort("_timelineGroupCellTooltipAbort");this._shadow.querySelectorAll(".pc-strip-rows .pc-strip-tooltip").forEach(o=>o.remove());let i=this._shadow.querySelectorAll(".pc-strip-rows");if(i.length===0)return;let n=this._hass?.states?.[(this._config?._zones||[])[0]?.entity]?.attributes?.unit_of_measurement||"\xB0C";for(let o of i){let r=o.querySelectorAll(".pc-cells");if(r.length===0)continue;let a=!!o.querySelector(".pc-state-timeline-cells"),s=o.querySelector(".pc-strip-crosshair"),l=ge();o.style.position="relative",o.appendChild(l.element);for(let c of r)c.addEventListener("pointermove",d=>{if(d.pointerType==="touch")return;let u=d.target?.closest?.(".pc-cell");if(!u){l.hide(),s&&(s.style.display="none");return}let h=u.getAttribute("data-hour")||"",p=u.getAttribute("data-score"),f=p?a?`${h}: ${p}`:`${h}: ${p}${n}`:`${h}: --`,v=c.getBoundingClientRect();if(l.show(v,d.clientX-v.left,f),s){let _=o.getBoundingClientRect();s.style.left=`${d.clientX-_.left}px`,s.style.display=""}},{signal:e}),c.addEventListener("pointerleave",()=>{l.hide(),s&&(s.style.display="none")},{signal:e}),c.addEventListener("pointerdown",d=>{if(d.pointerType!=="touch")return;let u=d.target?.closest?.(".pc-cell");if(!u)return;let h=u.getAttribute("data-hour")||"",p=u.getAttribute("data-score"),f=p?a?`${h}: ${p}`:`${h}: ${p}${n}`:`${h}: --`,v=c.getBoundingClientRect();if(l.show(v,d.clientX-v.left,f),s){let _=o.getBoundingClientRect();s.style.left=`${d.clientX-_.left}px`,s.style.display=""}setTimeout(()=>{l.hide(),s&&(s.style.display="none")},2e3)},{signal:e})}}_bindSystemHealthGroupTabs(){let e=this._resetAbort("_systemHealthGroupTabsAbort"),i=this._shadow.querySelectorAll(".pc-section-system-health-group");if(i.length===0)return;let n=this._discovery;if(n)for(let o of i){let r=Number(o.dataset.sectionIndex);if(Number.isNaN(r))continue;let a=o.querySelectorAll(".pc-system-health-group-tab");for(let s of a)s.addEventListener("click",()=>{let l=s.dataset.tab;if(!l||!["bridge","homekit","api"].includes(l))return;let c=[...this._config?.sections||[]],d=c[r];if(!d||typeof d=="string"||d.type!=="system_health_group")return;let u={...d,active_tab:l};c[r]=u,this._config={...this._config,sections:c};let h=this._hass?.states||{},p=this._historyCache,f=ao(u,n?.hubEntities||{},h,p);if(!f)return;let v=f.replace(/^<div class="pc-section([^"]*)"/,`<div class="pc-section$1" data-section-index="${r}"`),_=document.createElement("template");_.innerHTML=v;let g=_.content.firstElementChild;g&&(o.replaceWith(g),this._bindSystemHealthGroupTabs(),this._startCountdownTimer())},{signal:e})}}_renderSection(e,i,n,o){let r=typeof e=="string"?e:e.type,a=this._config,s=o.hubEntities,l=this._historyCache;switch(r){case"zones":return Pe(i,a,n,o,l);case"api":return qe(s,n,e,l);case"graph":return Ze(e,i,l,n,o);case"donut":return Ke(e,s,n);case"bridge":return Oe(s,n,l);case"homekit":return Be(s,n,l);case"weather":return Ve(s,n,l);case"environment":return Ue(i,n,o);case"thermal":return We(i,n,o);case"schedule":return Ge(i,n,o);case"thermal_strip":return on(i,e,n,o,l);case"comfort_strip":return rn(i,e,n,o,l);case"energy_flow":return Qe(i,n,o);case"radial":return oo(i,e,n,o,l);case"home_status":return no(i,n,o,this._config||{});case"zone_ranking":return ye(i,n,o);case"timeline_group":return ro(e,i,n,o,l);case"system_health_group":return ao(e,o?.hubEntities||{},n,l);default:return""}}_fireAction(e,i,n){if(!this._hass)return;let o=i[n]||this._config?.[n]||(n==="tap_action"?{action:"more-info"}:{action:"none"});Tt(this,this._hass,o,e,pt)}_applyTransitionGlow(e){let i=a=>{a&&(a.classList.add("pc-temp-transitioning"),setTimeout(()=>a.classList.remove("pc-temp-transitioning"),1100))},n=this._shadow.querySelectorAll(".pc-zone-row");n[e]&&i(n[e].querySelector(".pc-power-bar-fill"));let o=this._shadow.querySelectorAll(".pc-zone-row-pulse");i(o[e]||null);let r=this._shadow.querySelectorAll(".pc-arc-group");r[e]&&i(r[e].querySelector(".pc-arc-path"))}_updateZones(){if(!(!this._elements.zonesSection||!this._config||!this._hass||!this._discovery)){if(!at()){let e=this._config._zones||[],i=this._hass.states;for(let n=0;n<e.length;n++){let o=e[n].entity,r=this._prevStates[o],a=i[o];if(!r||!a)continue;let s=r.attributes?.current_temperature,l=a.attributes?.current_temperature;s!==void 0&&l!==void 0&&s!==l&&this._applyTransitionGlow(n)}}Jo(this._elements.zonesSection,this._config._zones||[],this._config,this._hass.states,this._discovery,this._prevStates)}}_updateSections(){if(!this._hass||!this._discovery||!this._config)return;let e=this._hass.states,i=this._discovery,n=this._config._zones||[],o=this._rerenderTargets;if(!o)return;let r=new Set;for(let c of o){let d=this._shadow.querySelector(c.selector);if(!d||c.watchIds.length===0||!c.watchIds.some(v=>{let _=e[v],g=this._prevStates[v];return!g||g.state!==_?.state||g.last_updated!==_?.last_updated}))continue;let h=c.render();if(!h)continue;let p=document.createElement("template");p.innerHTML=h;let f=p.content.firstElementChild;f&&(d.replaceWith(f),r.add(c.selector))}let a=new Set([".pc-section-zones",".pc-section-api",".pc-section-bridge",".pc-section-homekit",".pc-section-weather",".pc-section-environment",".pc-section-thermal",".pc-section-schedule",".pc-section-home-status",".pc-section-zone-ranking"]);[...r].some(c=>a.has(c))&&this._bindSectionChipActions(),r.has(".pc-section-zones")&&(this._elements.zonesSection=this._shadow.querySelector(".pc-section-zones"),this._bindZoneActions(),this._bindChipActions()),r.has(".pc-section-api")&&(this._elements.apiSection=this._shadow.querySelector(".pc-section-api"),this._startCountdownTimer()),r.has(".pc-section-radial")&&this._bindRadialInteractions(),r.has(".pc-section-zone-ranking")&&this._bindZoneRankingTabs();let l=this._shadow.querySelector(".section-energy-flow");if(l&&n.some(d=>{let u=V(d.entity),h=i.zoneEntities?.[u]||{};return[d.entity,h.heating_power,h.ac_power].filter(Boolean).some(f=>{let v=e[f],_=this._prevStates[f];return!_||_.state!==v?.state||_.last_updated!==v?.last_updated})})&&!ln(l,n,e,i)){let u=Qe(n,e,i);if(u){let h=document.createElement("template");h.innerHTML=u;let p=h.content.firstElementChild;p&&(l.replaceWith(p),r.add(".section-energy-flow"),this._bindEnergyFlowInteractions())}}}_updateHero(){if(!this._config||!this._hass||!this._discovery||this._config.show_hero===!1)return;let e=this._shadow.querySelector(".pc-hero");if(!e)return;let i=this._config,n=this._hass.states,o=this._discovery,r=i._zones||[],a=r.map(p=>{let f=V(p.entity),v=o.zoneEntities?.[f]||{};return Ct(p.entity,v,n,p,i)}),s=co(i,o,n),l=p=>{let f=r.findIndex(y=>y.entity===p);if(f<0)return p;let v=r[f],_=V(p),g=o?.zoneEntities?.[_]||{};return Y(p,n,g,v)?.entityId||p},c=Le(r,this._historyCache,l),d=lo(a,i,c,s);if(!d)return;let u=document.createElement("template");u.innerHTML=d;let h=u.content.firstElementChild;h&&e.replaceWith(h)}_updateHistorySections(){if(!this._config||!this._hass||!this._discovery)return;let e=this._config,i=this._hass.states,n=this._discovery,o=e._zones||[],r=e.sections||[{type:"zones"}],a=[];for(let l=0;l<r.length;l++){let c=r[l],d=typeof c=="string"?c:c.type;if(!Qi.has(d))continue;let u=ts[d];if(!u)continue;let h=this._shadow.querySelector(u);if(!h)continue;let p=this._renderSection(c,o,i,n);if(!p)continue;let f=p.replace(/^<div class="pc-section([^"]*)"/,`<div class="pc-section$1" data-section-index="${l}"`),v=document.createElement("template");v.innerHTML=f;let _=v.content.firstElementChild;_&&(h.replaceWith(_),a.push(d))}if(a.length===0)return;a.includes("zones")&&(this._elements.zonesSection=this._shadow.querySelector(".pc-section-zones"),this._bindZoneActions(),this._bindChipActions(),this._bindSparklineCrosshairs()),a.includes("api")&&(this._elements.apiSection=this._shadow.querySelector(".pc-section-api"),this._startCountdownTimer()),a.includes("radial")&&this._bindRadialInteractions(),a.includes("thermal_strip")&&(this._bindTimelineInteractions(),this._bindTimelineGroupCellTooltip()),a.includes("comfort_strip")&&this._bindHeatmapInteractions(),a.includes("timeline_group")&&(this._bindTimelineGroupTabs(),this._bindTimelineGroupCellTooltip(),this._bindTimelineInteractions(),this._bindStateTimelineInteractions()),a.includes("system_health_group")&&(this._bindSystemHealthGroupTabs(),this._startCountdownTimer()),a.some(l=>["zones","api","bridge","homekit","weather"].includes(l))&&this._bindSectionChipActions()}async _refreshHistoryIfNeeded(){if(!this._hass||!this._config||He(this._historyCache))return;let i=(this._config?.sections||[]).some(f=>(typeof f=="string"?f:f?.type)==="timeline_group"),n=Uo(),o=!i||n.stateData&&Object.values(n.stateData).some(f=>f.length>0);if(He(n)&&o){this._historyCache=n,this._rebuildSparklinePathCache(),Object.values(n.data).filter(v=>v.length>=2).length>0&&(this._updateHistorySections(),this._updateHero());return}if(this._historyFetchInProgress)return;this._historyFetchInProgress=!0;let r=this._historyGen,a=this._config._zones||[],s=[],l=this._hass.states;for(let f of a){let v=V(f.entity),_=this._discovery?.zoneEntities?.[v]||{},g=Y(f.entity,l,_,f);s.push(g.entityId);let b=ht(f.entity,l,_,f);b&&s.push(b.entityId)}if(this._discovery?.hubEntities?.call_history&&s.push(this._discovery.hubEntities.call_history),this._discovery?.hubEntities?.api_usage&&s.push(this._discovery.hubEntities.api_usage),this._discovery?.hubEntities?.boiler_flow_temp&&s.push(this._discovery.hubEntities.boiler_flow_temp),this._discovery?.hubEntities?.homekit_reads_saved&&s.push(this._discovery.hubEntities.homekit_reads_saved),this._discovery?.hubEntities?.homekit_writes_saved&&s.push(this._discovery.hubEntities.homekit_writes_saved),this._discovery?.hubEntities?.outside_temp&&s.push(this._discovery.hubEntities.outside_temp),s.length===0){this._historyFetchInProgress=!1;return}let c=[...new Set(s.filter(f=>f&&typeof f=="string"&&f.includes(".")))];if(c.length===0){this._historyFetchInProgress=!1;return}let u=(this._config?.sections||[]).some(f=>(typeof f=="string"?f:f?.type)==="timeline_group"),h=[];if(u)for(let f of a)typeof f?.entity=="string"&&f.entity.startsWith("climate.")&&h.push(f.entity);let p=[...new Set(h.filter(f=>f.includes(".")))];try{let[f,v]=await Promise.all([Ft(this._hass,c,24),p.length>0?go(this._hass,p,24):Promise.resolve({})]);if(r!==this._historyGen){pt("History fetch result discarded \u2014 config changed during fetch");return}this._historyCache=jo(this._historyCache,f);let _={...this._historyCache.stateData||{}};for(let[y,x]of Object.entries(v))Array.isArray(x)&&x.length>0&&(_[y]=x);this._historyCache={...this._historyCache,stateData:_},this._rebuildSparklinePathCache(),Wo(f,v);let g=Object.values(f).filter(y=>y.length>=2).length,b=Object.values(v).filter(y=>y.length>=1).length;(g>0||b>0)&&(this._updateHistorySections(),this._updateHero())}catch(f){pt("History fetch failed, using cached data: %O",f)}finally{this._historyFetchInProgress=!1}}_getHomeAvgHistory(e){let i=this._historyCache?.data,n=this._hass?.states,o=this._discovery;if(!i||!n||!o||e.length===0)return[];let r=[],a=this._config?._zones||[];for(let l of e){if(l.isUnavailable)continue;let c=V(l.entityId),d=o.zoneEntities?.[c]||{},u=a.find(f=>f.entity===l.entityId)||{entity:l.entityId},h=Y(l.entityId,n,d,u),p=i[h.entityId];Array.isArray(p)&&p.length>=2&&r.push(p)}return r.length===0?[]:r[0].map((l,c)=>{let d=[];for(let h of r){let p=h[Math.min(c,h.length-1)];p&&typeof p.v=="number"&&Number.isFinite(p.v)&&d.push(p.v)}let u=d.length>0?d.reduce((h,p)=>h+p,0)/d.length:l.v;return{t:l.t,v:u}})}_cacheWatchedStates(){if(!this._hass||!this._config||!this._discovery)return;let e=this._hass.states,i=this._config._zones||[],n=this._discovery.hubEntities,o={};for(let r of i){let a=r.entity;e[a]&&(o[a]=e[a]);let s=V(a),l=this._discovery.zoneEntities?.[s]||{};for(let c of Object.values(l))c&&e[c]&&(o[c]=e[c])}for(let r of Object.values(n))r&&e[r]&&(o[r]=e[r]);this._prevStates=o}disconnectedCallback(){this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null),this._rafId&&(cancelAnimationFrame(this._rafId),this._rafId=null),this._chipAbort?.abort(),this._sectionChipAbort?.abort(),this._radialAbort?.abort(),this._timelineAbort?.abort(),this._stateTimelineAbort?.abort(),this._heatmapAbort?.abort(),this._energyFlowAbort?.abort(),this._sparklineAbort?.abort(),this._zoneRankingTabsAbort?.abort(),this._timelineGroupTabsAbort?.abort(),this._timelineGroupCellTooltipAbort?.abort(),this._systemHealthGroupTabsAbort?.abort(),this._stopRadialAnimations();let e=this._shadow?.querySelectorAll(".pc-zone-row")||[];for(let i of e){let n=i.__pulseCleanup;typeof n=="function"&&n()}}connectedCallback(){Lo(this),this._config&&this._hass&&!this._shadow.querySelector("ha-card")?(this._discovery||this._runDiscovery(),this._fullRender(),this._refreshHistoryIfNeeded()):this._config&&this._hass&&this._shadow.querySelector("ha-card")&&(this._bindSectionInteractions(),this._bindZoneActions(),this._bindChipActions(),this._bindSectionChipActions(),this._startCountdownTimer())}getCardSize(){let e=this._config?._zones?.length||1,i=this._config?.sections?.length||1;return Math.max(1,e+i)}getGridOptions(){return{columns:12,min_columns:3,rows:this.getCardSize(),min_rows:1}}static async getConfigElement(){return await import("./pulse-climate-editor.js"),document.createElement(zo)}static getStubConfig(e){return{entity:Object.keys(e.states).find(n=>n.startsWith("climate."))||"climate.living_room"}}};customElements.get(oe)||customElements.define(oe,po);window.customCards=window.customCards||[];window.customCards.push({type:oe,name:"Pulse Climate Card",description:"Modular climate dashboard card with Tado CE enrichment"});console.info(`%c PULSE-CLIMATE-CARD %c v${Io} `,"background:#4CAF50;color:white;font-weight:bold","background:#333;color:#fff");var Ut=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_elements={};_indicators={};_indicatorTimer=null;_sparklineData={};_sparklineTimer=null;_sparklineLastFetch=0;_shadow;constructor(){super(),this._shadow=this.attachShadow({mode:"open"});let e=document.createElement("style");e.textContent=uo,this._shadow.appendChild(e)}get _cfg(){return this._config}disconnectedCallback(){this._indicatorTimer&&(clearTimeout(this._indicatorTimer),this._indicatorTimer=null),this._sparklineTimer&&(clearTimeout(this._sparklineTimer),this._sparklineTimer=null);let e=this._shadow.querySelectorAll(".pb-row");for(let i of e)Ce(i),Ie(i)}connectedCallback(){this._config&&this._hass&&this._elements.container&&this._cacheBarElements()}setConfig(e){this._config=So(e),this._elements={},this._sparklineData={},this._sparklineLastFetch=0,this._indicators={},this._hass&&(this._fullRender(),this._scheduleIndicatorFetch(),this._scheduleSparklineFetch())}set hass(e){if(this._hass=e,!this._config)return;let i=!1;for(let n of this._cfg.entities){let o=e.states[n.entity],r=this._prevStates[n.entity];if(!r||r.state!==o?.state||r.last_updated!==o?.last_updated){i=!0;break}let a=n.target??this._cfg.target;if(typeof a=="string"){let s=e.states[a],l=this._prevStates[`__target__${a}`];if(!l||l.state!==s?.state||l.last_updated!==s?.last_updated){i=!0;break}}}i&&(this._elements.container?this._updateBars():this._fullRender(),this._cacheStates(),this._scheduleIndicatorFetch(),this._scheduleSparklineFetch())}_fullRender(){let e=this._cfg;if(!e)return;let i=e.columns??1,n=i>1?` columns-${i}`:"",o=e.entity_row?" entity-row":"",r=e.layout==="compact"?" compact":"",a=[];i>1&&a.push(`--pb-columns:${i}`),e.gap!==void 0&&a.push(`--pulse-space-element:${k(xt(e.gap))}`),e.font_size!==void 0&&a.push(`--pulse-font-body:${k(xt(e.font_size))}`);let s=a.length>0?` style="${a.join(";")}"`:"",l="";e.title&&(l+=`<div class="pulse-title">${m(e.title)}</div>`),l+=`<div class="pb-card${n}${o}${r}"${s}>`;for(let h of e.entities)l+=this._renderBarRow(h);l+="</div>";let c=e.entity_row?l:`<ha-card>${l}</ha-card>`,d=this._shadow.querySelector("ha-card, .pb-card");d&&d.remove();let u=document.createElement("template");u.innerHTML=c,this._shadow.appendChild(u.content.cloneNode(!0)),this._elements.container=this._shadow.querySelector(".pb-card"),this._cacheBarElements();for(let h of e.entities){let p=this._elements.rows?.[h.entity];p&&(p.style.display=ke(h,this._hass)?"":"none")}}_renderBarRow(e){let i=this._cfg,n=Se(e,i,this._hass),o=e.positions?.name??i.positions?.name??tt.positions.name,r=e.positions?.value??i.positions?.value??tt.positions.value,a=e.positions?.icon??i.positions?.icon??tt.positions.icon,s=e.positions?.indicator??i.positions?.indicator??tt.positions.indicator,l=e.animation??{},c=l.speed??i.animation.speed,d=l.effect??i.animation.effect,u=l.state??i.animation.state,h=this._buildIndicatorHtml(e,i,s),p=Te(e,this._hass),f=this._buildPositionHtml(n,o,r,a,s,h,"outside",p),v=this._buildPositionHtml(n,o,r,a,s,h,"inside",p),_=k(xt(e.height??i.height)),g=k(xt(e.border_radius??i.border_radius)),b=n.color?`background-color:${k(n.color)};`:"",y=d==="charge"&&!n.isUnavailable?" charge":"",x=u==="off"?"transition:none;":"",S=kt(e,i),M=`width:${n.fill*S}%;${x}${b}`,I=this._buildTargetHtml(e,i,n.min,n.max),z=this._buildSparklineHtml(e,i),L=`
      <div class="pb-container" style="height:${_};border-radius:${g};--pb-animation-speed:${c}s;">
        <div class="pb-track"></div>
        ${z}
        <div class="pb-fill${y}" data-entity="${m(e.entity)}" style="${M}"></div>
        ${I}
        ${v}
      </div>`,$=!!(e.interactive??i.interactive),w=$?`<div class="pb-interactive-row"><div class="pb-step-btn" data-step="-1" role="button" aria-label="Decrease">\u2212</div>${L}<div class="pb-step-btn" data-step="1" role="button" aria-label="Increase">+</div></div>`:L,T=$?"slider":"progressbar",E=n.isUnavailable?`role="${T}" aria-valuenow="0" aria-valuemin="${n.min}" aria-valuemax="${n.max}" aria-label="${m(n.name)}: Unavailable"`:`role="${T}" aria-valuenow="${n.numValue}" aria-valuemin="${n.min}" aria-valuemax="${n.max}" aria-label="${m(n.name)}: ${m(n.displayValue)}"`,q=n.isUnavailable?" unavailable":"",G=$?" data-interactive":"",j=n.isUnavailable?'data-state="unavailable"':`data-state="${m(n.numValue)}"`,F=n.color?` data-severity-color="${m(n.color)}"`:"";return`<div class="pb-row${q}" data-entity="${m(e.entity)}"${G} ${j}${F} ${E}>${f}${w}</div>`}_buildIndicatorHtml(e,i,n){if(n==="off")return"";let o=e.indicator??i.indicator,r=this._indicators[e.entity],a=r?.direction??"neutral",s=o?.show_delta===!0&&!!r,l=this._hass?.states[e.entity],c=St(e,l),d=Xt(e,i,this._hass),{text:u}=$e(a,r?.delta??0,s,d,c),h=o?.inverted===!0?" inverted":"";return`<span class="pb-indicator ${a}${h}">${u}</span>`}_buildPositionHtml(e,i,n,o,r,a,s,l){if(i!==s&&n!==s&&o!==s&&r!==s)return"";let d=`<div class="${s==="outside"?"pb-labels":"pb-content"}"><div class="pb-label-left">`;return o===s&&e.resolvedIcon&&(d+=`<ha-icon class="pb-icon" icon="${m(e.resolvedIcon)}"></ha-icon>`),i===s&&(l?(d+='<div class="pb-name-group">',d+=`<span class="pb-name">${m(e.name)}</span>`,d+=`<span class="pb-secondary">${m(l)}</span>`,d+="</div>"):d+=`<span class="pb-name">${m(e.name)}</span>`),d+='</div><div class="pb-label-right">',n===s&&(d+=`<span class="pb-value">${m(e.displayValue)}</span>`),r===s&&a&&(d+=a),d+="</div></div>",d}_buildTargetHtml(e,i,n,o){let r=e.target??i.target,{value:a,showLabel:s}=Yt(r,this._hass);if(a===null)return"";let l=et((a-n)/(o-n),0,1)*100,c=kt(e,i),d=`left:${l*c}%`,u=s?`<span class="pb-target-label">${m(a)}</span>`:"";return`<div class="pb-target" style="${d}">${u}</div>`}_updateBars(){let e=this._cfg;for(let i of e.entities){let n=Se(i,e,this._hass),o=kt(i,e),r=this._elements.rows?.[i.entity];if(!r||r.__pulseSliding)continue;let a=ke(i,this._hass);if(r.style.display=a?"":"none",!a)continue;r.classList.toggle("unavailable",n.isUnavailable);let s=r.querySelector(".pb-fill");if(s){let f=`${n.fill*o}%`;s.style.width=f,s.style.backgroundColor=n.color||"";let v=r.querySelector(".pb-sparkline");v&&(v.style.width=`${o*100}%`);let _=r.querySelector(".pb-icon");_&&n.resolvedIcon&&_.setAttribute("icon",n.resolvedIcon)}let l=r.querySelectorAll(".pb-name");for(let f of l)f.textContent=n.name;let c=r.querySelectorAll(".pb-value");for(let f of c)f.textContent=n.displayValue;let d=r.querySelectorAll(".pb-secondary");if(d.length>0){let f=Te(i,this._hass);for(let v of d)v.textContent=f}r.setAttribute("aria-valuenow",n.isUnavailable?"0":String(n.numValue)),r.setAttribute("aria-valuemin",String(n.min)),r.setAttribute("aria-valuemax",String(n.max)),r.setAttribute("aria-label",`${m(n.name)}: ${m(n.displayValue)}`),r.setAttribute("data-state",n.isUnavailable?"unavailable":String(n.numValue)),n.color?r.setAttribute("data-severity-color",n.color):r.removeAttribute("data-severity-color");let u=r.querySelector(".pb-target"),h=i.target??e.target,{value:p}=Yt(h,this._hass);if(p!==null){let f=et((p-n.min)/(n.max-n.min),0,1)*100;if(u){u.style.left=`${f*o}%`,u.style.display="";let v=u.querySelector(".pb-target-label");v&&(v.textContent=String(p))}}else u&&(u.style.display="none")}}_scheduleIndicatorFetch(){let e=this._cfg;!e||!e.entities.some(n=>(n.indicator??e.indicator)?.show===!0)||(this._indicatorTimer&&clearTimeout(this._indicatorTimer),this._indicatorTimer=setTimeout(()=>this._fetchIndicators(),500))}async _fetchIndicators(){let e=this._cfg;if(e)try{let i=new Map;for(let o of e.entities)i.set(o.entity,o);let n=new Map;for(let o of e.entities){let r=o.indicator??e.indicator;if(!r?.show)continue;let a=r.period??60;n.has(a)||n.set(a,[]),n.get(a).push({entity:o.entity,icfg:r})}for(let[o,r]of n){let a=r.map(l=>l.entity),s=await $o(this._hass,a,o);for(let{entity:l,icfg:c}of r){let d=i.get(l),u=this._hass?.states[l],h=d?.attribute?u?.attributes?.[d.attribute]:u?.state,p=xo(h,s[l]);this._indicators[l]=p;let f=this._elements.rows?.[l];if(!f)continue;let v=f.querySelector(".pb-indicator");if(v&&d){let _=this._hass?.states[l],g=St(d,_),b=Xt(d,e,this._hass),{text:y}=$e(p.direction,p.delta,c.show_delta===!0,b,g),x=c.inverted===!0?" inverted":"";v.textContent=y,v.className=`pb-indicator ${p.direction}${x}`}}}}catch(i){lt("Indicator fetch failed: %O",i)}}_resolveSparklineConfig(e,i){let n=e.sparkline??i.sparkline;if(!n)return null;let o=n===!0?{}:n.show?n:null;if(!o)return null;let r=o.hours_to_show??24,a=o.points_per_hour??1;return{hours:r,pointsPerHour:a,slots:Math.max(r*a,2),aggregateFunc:o.aggregate_func??"avg",smoothing:o.smoothing!==!1,strokeWidth:Number(o.line_width??o.stroke_width??1.5)||1.5,color:o.color??null,updateInterval:o.update_interval??300}}_buildSparklineMarkup(e,i,n=!1){let o=`${i*100}%`,r=e.color?`color:${k(e.color)};`:"";return`<svg${n?' xmlns="http://www.w3.org/2000/svg"':""} class="pb-sparkline" viewBox="0 0 200 50" preserveAspectRatio="none" height="100%" style="width:${o};${r}"><path d="${e.path}" fill="none" stroke="currentColor" stroke-width="${e.strokeWidth}" /></svg>`}_buildSparklineHtml(e,i){let n=this._resolveSparklineConfig(e,i);if(!n)return"";let o=this._sparklineData[e.entity];if(!o||o.length<2)return"";let r=$t(o,200,50,n.slots,n.aggregateFunc,n.smoothing);if(!r)return"";let a=kt(e,i);return this._buildSparklineMarkup({path:r,strokeWidth:n.strokeWidth,color:n.color},a,!1)}_scheduleSparklineFetch(){let e=this._cfg;if(!e||!e.entities.some(r=>!!this._resolveSparklineConfig(r,e)))return;let n=300;for(let r of e.entities){let a=this._resolveSparklineConfig(r,e);a&&a.updateInterval<n&&(n=a.updateInterval)}(Date.now()-this._sparklineLastFetch)/1e3<n&&this._sparklineLastFetch>0||(this._sparklineTimer&&clearTimeout(this._sparklineTimer),this._sparklineTimer=setTimeout(()=>this._fetchSparklines(),1e3))}async _fetchSparklines(){let e=this._cfg;if(e)try{let i=new Map;for(let n of e.entities){let o=this._resolveSparklineConfig(n,e);if(!o)continue;let r=o.hours;i.has(r)||i.set(r,[]),i.get(r).push(n.entity)}for(let[n,o]of i){let r=await Ft(this._hass,o,n);for(let a of o)this._sparklineData[a]=r[a]||[]}this._sparklineLastFetch=Date.now(),this._updateSparklines()}catch(i){lt("Sparkline fetch failed: %O",i)}}_updateSparklines(){let e=this._cfg;if(e)for(let i of e.entities){let n=this._resolveSparklineConfig(i,e);if(!n)continue;let o=this._elements.rows?.[i.entity];if(!o)continue;let r=this._sparklineData[i.entity];if(!r||r.length<2)continue;let a=$t(r,200,50,n.slots,n.aggregateFunc,n.smoothing);if(!a)continue;let s=o.querySelector(".pb-sparkline"),l=kt(i,e),c=`${l*100}%`;if(s){let d=s.querySelector("path");d&&d.setAttribute("d",a),s.style.width=c}else{let d=o.querySelector(".pb-container");if(!d)continue;let u=this._buildSparklineMarkup({path:a,strokeWidth:n.strokeWidth,color:n.color},l,!0),h=new DOMParser().parseFromString(u,"image/svg+xml"),p=document.importNode(h.documentElement,!0),f=d.querySelector(".pb-track");f&&f.nextSibling?d.insertBefore(p,f.nextSibling):d.appendChild(p)}}}_cacheStates(){let e=this._cfg;this._prevStates={};for(let i of e.entities){let n=this._hass?.states[i.entity];n&&(this._prevStates[i.entity]={state:n.state,last_updated:n.last_updated});let o=i.target??e.target;if(typeof o=="string"){let r=this._hass?.states[o];r&&(this._prevStates[`__target__${o}`]={state:r.state,last_updated:r.last_updated})}}}_cacheBarElements(){let e=this._cfg;this._elements.rows={};let i=new Map;for(let o of e.entities)i.set(o.entity,o);let n=this._shadow.querySelectorAll(".pb-row");for(let o of n){let r=o.dataset.entity;if(r){this._elements.rows[r]=o;let a=i.get(r);a&&(Ao(o,this,this._hass,e,a),(a.interactive??e.interactive)&&Co(o,this,e,a)),it(o);for(let s of o.querySelectorAll(".pb-step-btn"))it(s)}}}getCardSize(){let e=this._config?.entities?.length||1,i=this._config?.columns||1;return Math.ceil(e/i)+(this._config?.title?1:0)}getGridOptions(){let e=this._config?.entities?.length||1,i=this._config?.columns||1,n=Math.ceil(e/i);return{columns:12,min_columns:3,rows:Math.max(1,n),min_rows:1}}static async getConfigElement(){return await import("./pulse-card-editor.js"),document.createElement("pulse-bar-card-editor")}static getStubConfig(e){return{entity:Object.keys(e.states).filter(n=>{let o=e.states[n];return n.startsWith("sensor.")&&!isNaN(parseFloat(o.state))})[0]||"sensor.example"}}};customElements.get("pulse-bar-card")||customElements.define("pulse-bar-card",Ut);customElements.get("pulse-card")||customElements.define("pulse-card",class extends Ut{});window.customCards=window.customCards||[];window.customCards.push({type:"pulse-bar-card",name:"Pulse Bar Card",description:"Compact horizontal bar chart for sensor data visualization",preview:!0,documentationURL:"https://github.com/hiall-fyi/pulse-card"});console.info(`%c PULSE-BAR-CARD %c v${ho} `,"background:#03A9F4;color:white;font-weight:bold","background:#333;color:white");var yl=Ut;export{yl as default};
