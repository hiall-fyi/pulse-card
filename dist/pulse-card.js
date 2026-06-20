var pe=`
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
`;var $i=`${pe}
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
`;var Si="1.8.1",ki="Pulse Card:",Tt={min:0,max:100,height:"8px",border_radius:"4px",decimal:null,entity_row:!1,complementary:!1,limit_value:!1,columns:1,animation:{state:"on",speed:.8,effect:"none"},positions:{icon:"off",name:"outside",value:"outside",indicator:"off"},tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}};function h(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function $(t){return t==null||t===""?"":String(t).replace(/[;{}]/g,"").replace(/url\s*\(/gi,"").replace(/expression\s*\(/gi,"").replace(/-moz-binding\s*:/gi,"")}function At(t,e,o){return Math.min(Math.max(t,e),o)}var Ss=32;function de(t){if(t==null||t==="")return"";let e=String(t);if(e.length>Ss)return e;let o=e.split(".");if(o.length>2)return e;for(let i of o){if(i.length===0)return e;for(let n=0;n<i.length;n++){let a=i.charCodeAt(n);if(a<48||a>57)return e}}return`${e}px`}function Rt(){return typeof window>"u"?!1:window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches??!1}function Z(t,e=1){return t==null?"--":typeof t!="number"?String(t):isFinite(t)?String(parseFloat(t.toFixed(e))):"--"}function dt(t){return`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`}function io(t){return(e,...o)=>console.warn(`${t} ${e}`,...o)}var ks=new Set(["unavailable","unknown","error"]);function Q(t){return t?ks.has(t.state??""):!0}var nn=0;function ue(t="pulse-id"){return nn=nn+1>>>0,`${t}-${nn.toString(36)}`}var no="Pulse sparkline:";async function Re(t,e,o=24){let i={};if(!t?.callWS||e.length===0)return i;let n=new Date,a=new Date(n.getTime()-o*60*60*1e3);try{let s=await t.callWS({type:"history/history_during_period",start_time:a.toISOString(),end_time:n.toISOString(),entity_ids:e,minimal_response:!0,significant_changes_only:!0});for(let r of e)try{let l=s?.[r];if(!l||l.length<2){i[r]=[];continue}let p=[];for(let c of l){let u=parseFloat(c.s);if(!isNaN(u)){let m=c.lu??c.last_updated,d=typeof m=="number"?m*1e3:new Date(m).getTime();isFinite(d)&&p.push({t:d,v:u})}}i[r]=p}catch(l){console.warn(`${no} parse failed for %s: %O`,r,l),i[r]=[]}}catch(s){console.warn(`${no} fetch failed: %O`,s);for(let r of e)i[r]=[]}return i}async function Ai(t,e,o=24){let i={};if(!t?.callWS||e.length===0)return i;let n=new Date,a=new Date(n.getTime()-o*60*60*1e3);try{let s=await t.callWS({type:"history/history_during_period",start_time:a.toISOString(),end_time:n.toISOString(),entity_ids:e,minimal_response:!0,significant_changes_only:!1});for(let r of e)try{let l=s?.[r];if(!Array.isArray(l)||l.length===0){i[r]=[];continue}let p=[];for(let c of l){let u=c.lu??c.last_updated,m=typeof u=="number"?u*1e3:new Date(u).getTime();if(!isFinite(m))continue;let d=String(c.s??c.state??"").toLowerCase(),f="idle";d==="heat"||d==="heating"?f="heating":d==="cool"||d==="cooling"?f="cooling":d==="off"&&(f="off");let g=f==="heating"||f==="cooling"?50:0;p.push({t:m,state:f,power:g})}i[r]=p}catch(l){console.warn(`${no} state-history parse failed for %s: %O`,r,l),i[r]=[]}}catch(s){console.warn(`${no} state-history fetch failed: %O`,s);for(let r of e)i[r]=[]}return i}var Ti={avg:t=>t.reduce((e,o)=>e+o,0)/t.length,min:t=>Math.min(...t),max:t=>Math.max(...t),median:t=>{let e=[...t].sort((i,n)=>i-n),o=Math.floor(e.length/2);return e.length%2?e[o]:(e[o-1]+e[o])/2},first:t=>t[0],last:t=>t[t.length-1],sum:t=>t.reduce((e,o)=>e+o,0),delta:t=>Math.max(...t)-Math.min(...t),diff:t=>t[t.length-1]-t[0]};function Ts(t,e,o="avg"){if(t.length===0||e<1)return[];if(t.length<=e){let u=t[0].t,m=t[t.length-1].t-u||1;return t.map(d=>({x:(d.t-u)/m,v:d.v}))}let i=Ti[o]||Ti.avg,n=t[0].t,r=(t[t.length-1].t-n||1)/e,l=[],p=0,c=t[0].v;for(let u=0;u<e;u++){let m=n+(u+1)*r,d=[];for(;p<t.length&&t[p].t<m;)d.push(t[p].v),p++;d.length>0&&(c=i(d)),l.push({x:u/(e-1||1),v:c})}return l}function me(t,e,o,i=24,n="avg",a=!0){if(t.length<2)return"";let s=Ts(t,i,n);if(s.length<2)return"";let r=s[0].v,l=s[0].v;for(let d=1;d<s.length;d++)s[d].v<r&&(r=s[d].v),s[d].v>l&&(l=s[d].v);let p=l-r||1,c=2,u=o-c*2,m=s.map(d=>({x:d.x*e,y:c+u-(d.v-r)/p*u}));return an(m,a)}function an(t,e=!0){if(!t||t.length<2)return"";if(t.length===2||!e){let n=`M${t[0].x.toFixed(1)},${t[0].y.toFixed(1)}`;for(let a=1;a<t.length;a++)n+=`L${t[a].x.toFixed(1)},${t[a].y.toFixed(1)}`;return n}let o=t[0],i=`M${o.x.toFixed(1)},${o.y.toFixed(1)}`;for(let n=1;n<t.length;n++){let a=t[n],s=(o.x+a.x)/2,r=(o.y+a.y)/2;i+=` ${s.toFixed(1)},${r.toFixed(1)}`,i+=` Q${a.x.toFixed(1)},${a.y.toFixed(1)}`,o=a}return i+=` ${o.x.toFixed(1)},${o.y.toFixed(1)}`,i}function he(t){if(typeof t!="string")return null;let e=t.trim().replace(/^#/,"");return e.length===3&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),e.length!==6||/[^0-9a-f]/i.test(e)?null:{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16)}}function Ci(t,e,o){return{r:Math.round(t.r+(e.r-t.r)*o),g:Math.round(t.g+(e.g-t.g)*o),b:Math.round(t.b+(e.b-t.b)*o)}}function Mi(t,e,o){let i=he(t),n=he(e);if(!i||!n)return"";let{r:a,g:s,b:r}=Ci(i,n,o);return`rgb(${a}, ${s}, ${r})`}function Ei(t,e,o){let i=he(t),n=he(e);if(!i||!n)return t;let{r:a,g:s,b:r}=Ci(i,n,o);return`#${a.toString(16).padStart(2,"0")}${s.toString(16).padStart(2,"0")}${r.toString(16).padStart(2,"0")}`}function Xt(t,e){if(typeof t!="string")return String(t);let o=Math.max(0,Math.min(1,Number(e))),i=he(t);if(i)return`rgba(${i.r},${i.g},${i.b},${o})`;let n=/^rgb\(\s*(\d+)\s*[,\s]\s*(\d+)\s*[,\s]\s*(\d+)\s*\)$/i.exec(t.trim());return n?`rgba(${n[1]},${n[2]},${n[3]},${o})`:t}var As=new Set(["on","open","home","locked","playing","active"]),Cs=new Set(["off","closed","not_home","unlocked","idle","paused","standby"]);function Ii(t,e,o){if(typeof t!="string")return null;let i=t.toLowerCase();return As.has(i)?o:Cs.has(i)?e:null}function Ms(t,e){let o=String(t),i=o.charAt(0).toUpperCase()+o.slice(1);return e?`${i}${e}`:i}function Es(t,e,o,i=!1){let n=Ii(t,e,o),a=n!==null?n:parseFloat(t);if(isNaN(a))return 0;let s=o-e;if(s<=0)return 0;let r=i?o-a:a;return At((r-e)/s,0,1)*100}function Fs(t,e){if(!e||e.length===0)return null;let o=parseFloat(t);if(isNaN(o))return null;for(let i of e)if(o>=i.from&&o<=i.to)return i;return null}function Is(t,e,o){return Mi(t,e,o)}function Ns(t,e){if(!e||e.length<2)return null;let o=parseFloat(t);if(isNaN(o))return null;let i=e[0].from<=e[e.length-1].from?e:[...e].sort((n,a)=>n.from-a.from);for(let n=0;n<i.length-1;n++){let a=i[n],s=i[n+1];if(o>=a.from&&o<=s.to){let r=s.from-a.from,l=r>0?(o-a.from)/r:0;return Is(a.color,s.color,At(l,0,1))}}return o<=i[0].from?i[0].color:i[i.length-1].color}function zs(t,e,o){let i=t.min??o?.min,n=t.max??o?.max;return i==null&&(i=e?.attributes?.min??e?.attributes?.min_temp??Tt.min),n==null&&(n=e?.attributes?.max??e?.attributes?.max_temp??Tt.max),{min:parseFloat(String(i)),max:parseFloat(String(n))}}function ao(t,e,o){return t.decimal??e.decimal??o?.entities?.[t.entity]?.display_precision??null}function fe(t,e){return t.unit_of_measurement??e?.attributes?.unit_of_measurement??""}function Ls(t){return!isFinite(t)||t<0?"0":t>=1e9?`${(t/1e9).toFixed(1)}G`:t>=1e6?`${(t/1e6).toFixed(1)}M`:t>=1e3?`${(t/1e3).toFixed(1)}K`:t.toString()}function Rs(t,e,o){let i=parseFloat(t);if(isNaN(i))return String(t);let n=e!=null?i.toFixed(e):i.toString();return o?`${n}${o}`:n}function Ni(t,e){if(e==null)return{direction:"neutral",delta:0};let o=parseFloat(t),i=parseFloat(e);if(isNaN(o)||isNaN(i))return{direction:"neutral",delta:0};if(!isFinite(o)||!isFinite(i))return{direction:"neutral",delta:0};let n=Math.abs(o-i),a=Math.max(Math.abs(o),1);if(n>a*1e3)return{direction:"neutral",delta:0};let s=Math.round((o-i)*100)/100;return{direction:s>0?"up":s<0?"down":"neutral",delta:s}}function rn(t,e,o,i,n){let a=t==="up"?"\u25B2":t==="down"?"\u25BC":"\u25B6";if(!o)return{arrow:a,text:a};let s=i!=null?e.toFixed(i):String(Math.round(e*100)/100),r=e>0?"+":"";return{arrow:a,text:`${a} ${r}${s}${n||""}`}}var Ht=io(ki);async function zi(t,e,o=60){let i={};if(!t?.callWS||e.length===0)return i;let n=new Date,a=new Date(n.getTime()-o*60*1e3);try{let s=await t.callWS({type:"history/history_during_period",start_time:a.toISOString(),end_time:n.toISOString(),entity_ids:e,minimal_response:!0,significant_changes_only:!0});for(let r of e){let l=s?.[r];if(!l||l.length===0){i[r]=null;continue}let p=parseFloat(l[0].s);i[r]=isNaN(p)?null:p}}catch(s){Ht("Failed to fetch history for %s: %O",e.join(", "),s);for(let r of e)i[r]=null}return i}function Fi(t){return!Array.isArray(t)||t.length<2?t:[...t].sort((e,o)=>e.from-o.from)}function Li(t){if(!t)throw new Error("Please define an entity or entities");if(!t.entity&&!t.entities)throw new Error("Please define an entity or entities");let e={...Tt,...t,animation:{...Tt.animation,...t.animation},positions:{...Tt.positions,...t.positions}};e.columns!==null&&e.columns!==void 0&&(e.columns=Number(e.columns)||1),e.animation.speed!==null&&e.animation.speed!==void 0&&(e.animation.speed=Number(e.animation.speed)||Tt.animation.speed),e.severity&&(e.severity=Fi(e.severity)),e.indicator?.show===!0&&e.positions.indicator==="off"&&(e.positions={...e.positions,indicator:"outside"}),e.entities=t.entities?t.entities.map(i=>{let n=typeof i=="string"?{entity:i}:{...i};return n.severity&&(n.severity=Fi(n.severity)),!n.secondary_info&&e.secondary_info&&(n._cardSecondaryInfo=e.secondary_info),n.indicator?.show===!0&&n.positions&&n.positions.indicator==="off"?n.positions={...n.positions,indicator:"outside"}:n.indicator?.show===!0&&!n.positions?.indicator&&(n.positions={...n.positions||{},indicator:"outside"}),n}):[{entity:t.entity}];let o=new Set;for(let i of e.entities)o.has(i.entity)&&Ht('Duplicate entity "%s" in config \u2014 only the last bar will update dynamically',i.entity),o.add(i.entity);return e}function ro(t,e){if(t==null)return{value:null,showLabel:!1};if(typeof t=="number")return{value:isNaN(t)?null:t,showLabel:!1};if(typeof t=="string"){let o=e?.states[t];if(!o)return{value:null,showLabel:!1};let i=parseFloat(o.state);return{value:isNaN(i)?null:i,showLabel:!1}}return typeof t=="object"&&t.value!==void 0?{value:ro(t.value,e).value,showLabel:t.show_label===!0}:{value:null,showLabel:!1}}function sn(t,e,o){let i=o?.states[t.entity],n=Q(i),{min:a,max:s}=zs(t,i,e),r=t.attribute?i?.attributes?.[t.attribute]:i?.state,l=t.attribute?null:Ii(r,a,s),p=l!==null,c=p?l:parseFloat(r),u=t.complementary??e.complementary,m=n?0:Es(r,a,s,u),d=fe(t,i),f=ao(t,e,o),w=(t.limit_value??e.limit_value)&&!isNaN(c)?At(c,a,s):r,v=n?"Unavailable":t.state_map?.[r]?t.state_map[r]:p?Ms(r,d):Rs(w,f,d),b=t.name??i?.attributes?.friendly_name??t.entity,y="",_="";if(!n){let M=t.state_color,E=i?.state;if(M&&E&&M[E])y=M[E];else{let z=t.attribute_color??e.attribute_color;if(z?.attribute&&z?.map){let k=i?.attributes?.[z.attribute];if(k!=null){let x=z.map[String(k)];x&&(y=x)}}if(!y){let k=t.severity??e.severity;if(k&&k.length>0)if(k.some(T=>T.mode==="gradient")){let T=Ns(c,k);T&&(y=T)}else{let T=Fs(c,k);T&&(y=T.color,T.icon&&(_=T.icon))}}}}let S=y||t.color||e.color||"",A=t.icon||i?.attributes?.icon||"";return{isUnavailable:n,min:a,max:s,numValue:c,fill:m,displayValue:v,name:b,color:S,resolvedIcon:_||A}}function ge(t,e){let o=t.bar_width??e.bar_width;return o!=null?Math.max(1,Math.min(100,o))/100:1}function ln(t,e){if(!t.visibility)return!0;let o=e?.states[t.entity];if(!o)return!1;let i=t.visibility,n=t.attribute?o.attributes?.[t.attribute]:o.state;if(!t.attribute&&Q(o))return i.state_equal!==void 0&&String(i.state_equal)===o.state;let a=parseFloat(n);return!(i.state_above!==void 0&&(isNaN(a)||a<=i.state_above)||i.state_below!==void 0&&(isNaN(a)||a>=i.state_below)||i.state_equal!==void 0&&String(n)!==String(i.state_equal)||i.state_not_equal!==void 0&&String(n)===String(i.state_not_equal))}var Ri={input_number:{service:"set_value",dataKey:"value"},number:{service:"set_value",dataKey:"value"},light:{service:"turn_on",dataKey:"brightness_pct",fixedRange:{min:0,max:100,step:1}},cover:{service:"set_cover_position",dataKey:"position",fixedRange:{min:0,max:100,step:1}},fan:{service:"set_percentage",dataKey:"percentage",fixedRange:{min:0,max:100,step:1}},media_player:{service:"volume_set",dataKey:"volume_level",transform:t=>t/100,fixedRange:{min:0,max:100,step:1}},climate:{service:"set_temperature",dataKey:"temperature"}};function so(t,e,o,i){if(i<=0)return At(t,e,o);let n=Math.round((t-e)/i)*i+e,a=(String(i).split(".")[1]||"").length,s=Number(n.toFixed(a));return At(s,e,o)}function Hi(t,e,o){if(o?.service){let s=o.service.split(".");if(s.length<2||!s[0]||!s[1])return null;let r={entity_id:t};if(o.data)for(let[l,p]of Object.entries(o.data))r[l]=p==="$value"?e:p;return{domain:s[0],service:s[1],data:r}}let i=t.split(".")[0],n=Ri[i];if(!n)return null;let a=n.transform?n.transform(e):e;return{domain:i,service:n.service,data:{entity_id:t,[n.dataKey]:a}}}function He(t,e,o,i){let n=t.split(".")[0],s=Ri[n]?.fixedRange,r=e?.attributes,l=i?.min??r?.min??r?.min_temp??s?.min??0,p=i?.max??r?.max??r?.max_temp??s?.max??100,c=o?.step??r?.step??r?.target_temp_step??r?.percentage_step??s?.step??1;return{min:Number(l),max:Number(p),step:Number(c)||1}}function Hs(t){if(!t)return"";let e=new Date(t).getTime();if(isNaN(e))return"";let o=Date.now()-e;if(o<0)return"just now";let i=Math.floor(o/1e3);if(i<60)return"just now";let n=Math.floor(i/60);if(n<60)return`${n} min ago`;let a=Math.floor(n/60);return a<24?`${a}h ago`:`${Math.floor(a/24)}d ago`}function cn(t,e){let o=t.secondary_info??t._cardSecondaryInfo;if(!o)return"";if(o.text!==void 0&&o.text!==null&&o.text!=="")return String(o.text);let i=e?.states[t.entity];if(!i)return"";if(o.template)return o.template.replace(/\{(\w+)\}/g,(n,a)=>{let s=i.attributes?.[a];return s==null?"":(a==="bytes"||a==="packets")&&typeof s=="number"?Ls(s):String(s)});if(o.attribute){let n=i.attributes?.[o.attribute];return n!=null?String(n):""}return o.type==="last_changed"?Hs(i.last_changed):""}function lo(t,e,o){t.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:o}))}function Ds(t){if(typeof t!="string"||t.length===0)return!1;let e=t.trim();if(e.startsWith("/")&&!e.startsWith("//")||e.startsWith("./")||e.startsWith("../")||e.startsWith("#"))return!0;try{let o=new URL(e,window.location.href);return["http:","https:","mailto:","tel:"].includes(o.protocol)}catch{return!1}}function Os(t){if(typeof t!="string"||t.length===0)return!1;let e=t.trim();return!(e.startsWith("//")||/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(e))}function ve(t,e,o,i,n){if(!(!o||o.action==="none"))switch(o.action){case"more-info":lo(t,"hass-more-info",{entityId:o.entity||i});break;case"navigate":o.navigation_path&&Os(o.navigation_path)?(history.pushState(null,"",o.navigation_path),lo(t,"location-changed",{replace:!1})):o.navigation_path&&n("navigation_path rejected \u2014 must be a same-origin relative path: %s",o.navigation_path);break;case"call-service":case"perform-action":{let a=o.service||o.perform_action;if(!a||typeof a!="string")break;let s=a.indexOf(".");if(s<=0||s===a.length-1){n('Service rejected \u2014 expected "domain.service" format, got: %s',a);break}let r=a.slice(0,s),l=a.slice(s+1);e.callService(r,l,o.service_data||o.data).catch(p=>n("Service call %s failed: %O",a,p));break}case"url":o.url_path&&Ds(o.url_path)?window.open(o.url_path,"_blank","noopener,noreferrer"):o.url_path&&n("url_path rejected \u2014 only http/https/mailto/tel schemes or relative paths are allowed: %s",o.url_path);break;case"toggle":e.callService("homeassistant","toggle",{entity_id:o.entity||i}).catch(a=>n("Toggle %s failed: %O",o.entity||i,a));break}}function Ps(t,e,o){let i=e?.[t],n=o?.[t];return i||n||{action:t==="tap_action"?"more-info":"none"}}function co(t,e,o,i,n){let a=Ps(n,i,o);ve(t,e,a,i.entity,Ht)}function dn(t){let e=t.__pulseCleanup;typeof e=="function"&&e()}function Di(t,e,o,i,n){dn(t);let a=new AbortController,{signal:s}=a,r=0,l=null,p=null,c=!1;t.__pulseCleanup=()=>{a.abort(),l&&clearTimeout(l),p&&clearTimeout(p),delete t.__pulseCleanup},t.setAttribute("tabindex","0"),t.addEventListener("keydown",m=>{(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),e._hass&&co(e,e._hass,i,n,"tap_action"))},{signal:s}),t.addEventListener("click",m=>{if(m.preventDefault(),c){c=!1;return}t.__pulseSliding||(r++,r===1?l=setTimeout(()=>{r=0,e._hass&&co(e,e._hass,i,n,"tap_action")},250):r===2&&(l&&clearTimeout(l),r=0,e._hass&&co(e,e._hass,i,n,"double_tap_action")))},{signal:s}),t.addEventListener("pointerdown",()=>{c=!1,p=setTimeout(()=>{c=!0,e._hass&&co(e,e._hass,i,n,"hold_action")},500)},{signal:s});let u=()=>{p&&clearTimeout(p)};t.addEventListener("pointerup",u,{signal:s}),t.addEventListener("pointercancel",u,{signal:s}),t.addEventListener("contextmenu",m=>m.preventDefault(),{signal:s})}var Bs=50;function un(t){let e=t.__pulseSliderCleanup;typeof e=="function"&&e()}function Oi(t,e,o,i){un(t);let n=t.querySelector(".pb-container");if(!n)return;let a=n,s=new AbortController,{signal:r}=s,l=null;t.__pulseSliderCleanup=()=>{s.abort(),l&&clearTimeout(l),g&&clearInterval(g),delete t.__pulseSliderCleanup};let p=typeof i.interactive=="object"?i.interactive:typeof o.interactive=="object"?o.interactive:void 0,c=null;function u(b){let y=a.getBoundingClientRect(),_=Math.max(0,Math.min(b-y.left,y.width)),S=y.width>0?_/y.width:0,C=e._hass?.states[i.entity],{min:M,max:E,step:z}=He(i.entity,C,p,i),k=M+S*(E-M);return so(k,M,E,z)}function m(b){let _=e._hass?.states[i.entity],{min:S,max:A,step:C}=He(i.entity,_,p,i),M=A-S,E=M>0?(b-S)/M*100:0,z=a.querySelector(".pb-fill");z&&(z.style.width=`${E}%`);let k=fe(i,_),x=(String(C).split(".")[1]||"").length,T=x>0?b.toFixed(x):String(Math.round(b)),F=k?`${T}${k}`:T,B=t.querySelectorAll(".pb-value");for(let I of B)I.textContent=F}function d(){if(!c)return;let b=a.querySelector(".pb-fill");b&&(b.style.transition="",b.style.width=c.fillWidth);let y=t.querySelectorAll(".pb-value");for(let _ of y)_.textContent=c.displayValue}function f(b){let y=Hi(i.entity,b,p);if(!y){Ht("No slider service mapping for %s",i.entity),d();return}let _=e._hass;if(!_){d();return}_.callService(y.domain,y.service,y.data).catch(S=>{Ht("Slider service call failed for %s: %O",i.entity,S),d()})}a.addEventListener("pointerdown",b=>{if(!e._hass)return;b.preventDefault();let y=a.querySelector(".pb-fill"),_=t.querySelector(".pb-value");c={fillWidth:y?.style.width||"0%",displayValue:_?.textContent||"",pointerId:b.pointerId,startX:b.clientX},t.__pulseSliding=!0,a.setPointerCapture(b.pointerId),t.classList.add("sliding"),y&&(y.style.transition="none");let S=u(b.clientX);m(S)},{signal:r}),a.addEventListener("pointermove",b=>{if(!c||b.pointerId!==c.pointerId)return;b.preventDefault();let y=u(b.clientX);m(y)},{signal:r}),a.addEventListener("pointerup",b=>{if(!c||b.pointerId!==c.pointerId)return;b.preventDefault();let y=a.querySelector(".pb-fill");y&&(y.style.transition=""),t.classList.remove("sliding"),a.releasePointerCapture(b.pointerId);let _=u(b.clientX);m(_),f(_),c=null,l=setTimeout(()=>{t.__pulseSliding=!1},Bs)},{signal:r}),a.addEventListener("pointercancel",b=>{if(!c||b.pointerId!==c.pointerId)return;let y=a.querySelector(".pb-fill");y&&(y.style.transition=""),t.classList.remove("sliding"),a.releasePointerCapture(b.pointerId),d(),c=null,t.__pulseSliding=!1},{signal:r});let g=null;function w(b){let y=e._hass;if(!y)return;let _=y.states[i.entity],{min:S,max:A,step:C}=He(i.entity,_,p,i),M=i.attribute?parseFloat(_?.attributes?.[i.attribute]):parseFloat(_?.state);if(isNaN(M))return;let E=so(M+b*C,S,A,C);E!==M&&(m(E),f(E))}let v=t.querySelectorAll(".pb-step-btn");for(let b of v){let y=Number(b.dataset.step);b.addEventListener("click",S=>{S.stopPropagation(),w(y)},{signal:r}),b.addEventListener("pointerdown",S=>{S.stopPropagation(),g&&clearInterval(g),g=setInterval(()=>w(y),200)},{signal:r});let _=()=>{g&&(clearInterval(g),g=null)};b.addEventListener("pointerup",_,{signal:r}),b.addEventListener("pointercancel",_,{signal:r}),b.addEventListener("pointerleave",_,{signal:r})}t.addEventListener("keydown",b=>{let y=e._hass;if(!y||b.key!=="ArrowRight"&&b.key!=="ArrowUp"&&b.key!=="ArrowLeft"&&b.key!=="ArrowDown")return;b.preventDefault();let _=y.states[i.entity],{min:S,max:A,step:C}=He(i.entity,_,p,i),M=i.attribute?parseFloat(_?.attributes?.[i.attribute]):parseFloat(_?.state);if(isNaN(M))return;let E=b.key==="ArrowRight"||b.key==="ArrowUp"?1:-1,z=so(M+E*C,S,A,C);z!==M&&(m(z),f(z))},{signal:r})}function Et(t){if(!customElements.get("ha-ripple")||t.querySelector("ha-ripple"))return;let e=document.createElement("ha-ripple");t.appendChild(e),t.classList.add("has-ripple")}var Pi="1.8.1",uo="pulse-climate-card",Bi="pulse-climate-card-editor",oe="Pulse Climate Card:",ne={heating:{icon:"mdi:fire",token:"var(--pulse-tier-strong)",fallback:"#ff9f0a",label:"Heating"},cooling:{icon:"mdi:snowflake",token:"var(--pulse-tier-calm)",fallback:"#5ac8fa",label:"Cooling"},drying:{icon:"mdi:water-off",token:null,fallback:"#9C27B0",label:"Drying"},fan:{icon:"mdi:fan",token:null,fallback:"#607D8B",label:"Fan"},idle:{icon:"mdi:clock-outline",token:"var(--pulse-text-secondary)",fallback:"#9E9E9E",label:"Idle"},off:{icon:"mdi:power",token:"var(--pulse-disabled)",fallback:"#616161",label:"Off"}},mn={None:{token:"var(--pulse-tier-moderate)",fallback:"#30d158"},Low:{token:"var(--pulse-tier-moderate)",fallback:"#30d158"},Medium:{token:"var(--pulse-tier-strong)",fallback:"#ff9f0a"},High:{token:"var(--pulse-tier-gale)",fallback:"#ff453a"},Critical:{token:"var(--pulse-tier-gale)",fallback:"#ff453a"}},qi=["zones"];var Dt=["var(--pulse-tier-calm)","var(--pulse-tier-gale)","var(--pulse-tier-moderate)","var(--pulse-tier-strong)","var(--pulse-accent)","var(--pulse-info-color)","var(--pulse-tier-strong)","var(--success-color, #8BC34A)"],Zt={columns:1,layout:"default",show_temp_bar:!0,show_power_bar:!0,tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}},Vi={graph:{attribute:"current_temperature",stacked:!1,hours_to_show:24,height:80},donut:{size:120},thermal_strip:{hours_to_show:24,mode:"timeline",slots_per_hour:2,attribute:"temperature"},comfort_strip:{slots_per_hour:1,hours_to_show:24,mode:"heatmap"},radial:{size:280,attribute:"temperature"},energy_flow:{}};var hn=`${pe}
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

`;function Wi(t){!t||t.__pcPhaseAttached||(t.__pcPhaseAttached=!0)}var Gi={api_usage:"api_usage",api_limit:"api_limit",api_status:"api_status",api_reset:"api_reset",token_status:"token_status",polling_interval:"polling_interval",call_history:"call_history",api_breakdown:"api_breakdown",last_sync:"last_sync",next_sync:"next_sync",outside_temp:"outside_temp",solar_intensity:"solar_intensity",weather:"weather",home_state:"home",bridge_connected:"bridge_connected",boiler_flow_temp:"boiler_flow_temp",wc_target_flow:"wc_target_flow_temp",wc_status:"wc_status",boiler_max_output:"boiler_max_output_temp",homekit_connected:"homekit_connected",homekit_reads_saved:"homekit_reads_saved",homekit_writes_saved:"homekit_writes_saved",bridge_capabilities:"bridge_capabilities",bridge_schema_version:"bridge_schema_version",zone_count:"zone_count",home_id:"home_id",home_insights:"home_insights"},qs={temperature:"temperature",humidity:"humidity",heating_power:"heating_power",ac_power:"ac_power",target_temp:"target",overlay:"overlay",mold_risk:"mold_risk",mold_risk_pct:"mold_risk_pct",condensation:"condensation_risk",surface_temp:"surface_temp",dew_point:"dew_point",comfort_level:"comfort_level",thermal_inertia:"thermal_inertia",heating_rate:"heating_rate",preheat_time:"preheat_time",confidence:"confidence",heat_accel:"heat_accel",approach_factor:"approach_factor",schedule_deviation:"schedule_deviation",next_schedule:"next_schedule",next_sched_temp:"next_sched_temp",preheat_advisor:"preheat_advisor",comfort_target:"comfort_target",open_window:"window",preheat_now:"preheat_now",window_predicted:"window_predicted",battery:"battery",connection:"connection",insights:"insights"},Vs={battery:"battery",connection:"connection"},Ws={temperature:{platform:"sensor",suffixes:["_temp","_temperature"]},humidity:{platform:"sensor",suffixes:["_humidity"]},heating_power:{platform:"sensor",suffixes:["_heating","_heating_power"]},ac_power:{platform:"sensor",suffixes:["_ac","_ac_power"]},target_temp:{platform:"sensor",suffixes:["_ce_target","_target"]},overlay:{platform:"sensor",suffixes:["_ce_overlay","_mode"]},mold_risk:{platform:"sensor",suffixes:["_ce_mold_risk","_mold_risk"]},mold_risk_pct:{platform:"sensor",suffixes:["_ce_mold_risk_pct","_mold_risk_percentage"]},condensation:{platform:"sensor",suffixes:["_ce_condensation","_condensation_risk"]},surface_temp:{platform:"sensor",suffixes:["_ce_surface_temp","_surface_temperature"]},dew_point:{platform:"sensor",suffixes:["_ce_dew_point","_dew_point"]},comfort_level:{platform:"sensor",suffixes:["_ce_comfort_level","_comfort_level"]},thermal_inertia:{platform:"sensor",suffixes:["_ce_thermal_inertia","_thermal_inertia"]},heating_rate:{platform:"sensor",suffixes:["_ce_heating_rate","_avg_heating_rate"]},preheat_time:{platform:"sensor",suffixes:["_ce_preheat_time","_preheat_time"]},confidence:{platform:"sensor",suffixes:["_ce_confidence","_analysis_confidence"]},schedule_deviation:{platform:"sensor",suffixes:["_ce_schedule_deviation","_historical_deviation"]},next_schedule:{platform:"sensor",suffixes:["_ce_next_schedule","_next_schedule_time"]},next_sched_temp:{platform:"sensor",suffixes:["_ce_next_sched_temp","_next_schedule_temp"]},preheat_advisor:{platform:"sensor",suffixes:["_ce_preheat_advisor","_preheat_advisor"]},comfort_target:{platform:"sensor",suffixes:["_ce_comfort_target","_smart_comfort_target"]},heat_accel:{platform:"sensor",suffixes:["_ce_heat_accel","_heat_acceleration"]},approach_factor:{platform:"sensor",suffixes:["_ce_approach_factor","_approach_factor"]},open_window:{platform:"binary_sensor",suffixes:["_window","_open_window"]},preheat_now:{platform:"binary_sensor",suffixes:["_ce_preheat_now","_preheat_now"]},window_predicted:{platform:"binary_sensor",suffixes:["_ce_window_predicted","_window_predicted"]},battery:{platform:"sensor",suffixes:["_ce_battery","_battery"]},connection:{platform:"binary_sensor",suffixes:["_ce_connection","_connection"]},insights:{platform:"sensor",suffixes:["_ce_insights","_insights"]}},Us={api_usage:{platform:"sensor",suffixes:["_api_usage"]},api_limit:{platform:"sensor",suffixes:["_api_limit"]},api_status:{platform:"sensor",suffixes:["_api_status"]},api_reset:{platform:"sensor",suffixes:["_api_reset"]},token_status:{platform:"sensor",suffixes:["_token_status"]},polling_interval:{platform:"sensor",suffixes:["_polling_interval"]},call_history:{platform:"sensor",suffixes:["_call_history"]},api_breakdown:{platform:"sensor",suffixes:["_api_breakdown","_api_call_breakdown"]},last_sync:{platform:"sensor",suffixes:["_last_sync"]},next_sync:{platform:"sensor",suffixes:["_next_sync"]},outside_temp:{platform:"sensor",suffixes:["_outside_temp"]},solar_intensity:{platform:"sensor",suffixes:["_solar_intensity"]},weather:{platform:"sensor",suffixes:["_weather","_weather_state"]},home_state:{platform:"binary_sensor",suffixes:["_home"]},bridge_connected:{platform:"binary_sensor",suffixes:["_bridge_connected","_bridge"]},boiler_flow_temp:{platform:"sensor",suffixes:["_boiler_flow_temp"]},wc_target_flow:{platform:"sensor",suffixes:["_wc_target_flow_temp"]},wc_status:{platform:"sensor",suffixes:["_wc_status"]},boiler_max_output:{platform:"number",suffixes:["_boiler_max_output_temp"]},homekit_connected:{platform:"binary_sensor",suffixes:["_homekit_connected"]},homekit_reads_saved:{platform:"sensor",suffixes:["_homekit_reads_saved"]},homekit_writes_saved:{platform:"sensor",suffixes:["_homekit_writes_saved"]},bridge_capabilities:{platform:"sensor",suffixes:["_bridge_capabilities"]},bridge_schema_version:{platform:"sensor",suffixes:["_bridge_schema_version"]},zone_count:{platform:"sensor",suffixes:["_zone_count","_zones_count"]},home_id:{platform:"sensor",suffixes:["_home_id"]},home_insights:{platform:"sensor",suffixes:["_home_insights"]}};function js(t){let e=new Map;for(let[o,i]of Object.entries(t))i.platform==="tado_ce"&&i.translation_key&&(e.has(i.translation_key)||e.set(i.translation_key,o));return{byTranslationKey:e}}function Gs(t,e){let o={};for(let[i,n]of Object.entries(Gi)){let a=e.byTranslationKey.get(n);a&&(o[i]=a)}return o}function Xs(t,e,o){let i={},n={...qs,...Vs};for(let a of e){i[a]={};let s=`climate.${a}`,r=t[s];if(!r?.device_id||r.platform!=="tado_ce")continue;let l=r.device_id;for(let[p,c]of Object.entries(t)){if(c.platform!=="tado_ce"||c.device_id!==l||!c.translation_key||!o[p])continue;let u=c.translation_key;if(u.endsWith("_suffixed")){let m=u.replace("_suffixed",""),d=Object.keys(n).find(f=>n[f]===m);if(!d)continue;if(!i[a][d])i[a][d]=p;else{let f=2;for(;i[a][`${d}_${f}`];)f++;i[a][`${d}_${f}`]=p}}else{let m=Object.keys(n).find(d=>n[d]===u);if(!m)continue;i[a][m]||(i[a][m]=p)}}}return i}function Ui(t){let e={},o=Object.keys(t);for(let[i,{platform:n,suffixes:a}]of Object.entries(Us))for(let s of a){let r=o.find(l=>l.startsWith(`${n}.tado_ce`)&&l.endsWith(s));if(r){e[i]=r;break}}return e}function ji(t,e){let o={};for(let i of e){o[i]={};for(let[n,{platform:a,suffixes:s}]of Object.entries(Ws))for(let r of s){let l=`${a}.${i}${r}`;if(t[l]){o[i][n]=l;break}}}return o}var ie={states:null,zoneNames:null,result:null};function Xi(t,e,o){if(ie.result&&ie.states===t&&ie.zoneNames!==null&&ie.zoneNames.length===e.length&&ie.zoneNames.every((p,c)=>p===e[c]))return ie.result;let i=!1,n=!1;o&&(i=Object.values(o).some(p=>p.platform==="tado_ce"),n=i),i||(i=Object.keys(t).some(p=>p.startsWith("sensor.tado_ce_")));let a={};if(i)if(n){let p=js(o);a=Gs(o,p);let c=Ui(t);for(let[u,m]of Object.entries(c))a[u]||(a[u]=m)}else a=Ui(t);let s;if(n){s=Xs(o,e,t);let p=ji(t,e);for(let c of e){s[c]||(s[c]={});let u=p[c]||{};for(let[m,d]of Object.entries(u))s[c][m]||(s[c][m]=d)}}else s=ji(t,e);let r=Object.keys(Gi).filter(p=>!a[p]),l={isTadoCE:i,hubEntities:a,zoneEntities:s,missingHubKeys:r};if(i)for(let[p,c]of Object.entries(s))Object.keys(c).length===0&&console.debug(`${oe} zone "${p}" \u2014 no Tado CE entities discovered. Check entity_id matches sensor.<zone>_temperature pattern, or use temperature_entity / set_point_entity overrides.`);return ie={states:t,zoneNames:[...e],result:l},l}function Y(t){return t.replace(/^(climate|sensor|binary_sensor)\./,"")}var Ot=io(oe);function wt(t){return t?.isUnavailable?" pc-row-unavail pc-row-quiet":t?.hvacMode==="sensor"?" pc-row-sensor pc-row-quiet":t?.hvacAction==="heating"?" pc-row-heat pc-row-active":t?.hvacAction==="cooling"?" pc-row-cool pc-row-active":t?.hvacAction==="off"||t?.targetTemp===null||t?.targetTemp===void 0?" pc-row-off pc-row-quiet":t?.currentTemp!==null&&t?.currentTemp!==void 0&&Math.abs(t.currentTemp-t.targetTemp)<=.3?" pc-row-at-target pc-row-mid":" pc-row-idle pc-row-mid"}function at(t,e,o,i){let n=t.entity,a=Y(n),s=e?.zoneEntities?.[a]||{},r=we(n,s,o,t,i||{});return{entityId:n,zoneName:a,zoneEntities:s,zoneState:r}}var Zi=new Set;function mo(t,e,o,i){if(!o||i[o])return;let n=`${t}|${e}|${o}`;Zi.has(n)||(Zi.add(n),Ot(`zone "%s": ${e} override points at missing entity "%s" \u2014 chip will not render`,t,o))}function be(t){let e=ne[t]||ne.idle;return{...e,glow:t==="heating"||t==="cooling"?e.fallback:null}}function ho(t){let e=t.filter(a=>!a.isUnavailable);if(e.length===0)return"off";let o=0,i=0,n=0;for(let a of e)a.hvacAction==="heating"?o+=1:a.hvacAction==="cooling"?i+=1:a.hvacAction==="off"&&(n+=1);return o>0&&i>0?"mixed":o>0?"heating":i>0?"cooling":n===e.length?"off":"idle"}function De(t,e,o){let i=we(t,{},e,o||{entity:t},{});return{name:i.name,temp:i.currentTemp??void 0,target:i.targetTemp??void 0,humidity:i.humidity??void 0,hvacAction:i.hvacAction,unit:i.unit}}function fo(t){let e=t.charAt(0).toUpperCase()+t.slice(1).toLowerCase();return mn[e]||mn.Low}function Oe(t,e,o){return o<=e?50:At((t-e)/(o-e),0,1)*100}function Zs(t,e,o,i){let n=[],a=!i,s=l=>a||i.includes(l);if(i&&s("humidity")&&t.humidity!==null&&n.push({type:"humidity",icon:"mdi:water-percent",label:`${Math.round(t.humidity)}%`}),s("hvac_action")){let l=be(t.hvacAction);n.push({type:"hvac_action",icon:l.icon,label:l.label,color:l.fallback})}if(s("overlay")&&t.overlayType){let l=t.overlayType==="Manual"?"mdi:hand-back-right":"mdi:calendar-clock";n.push({type:"overlay",icon:l,label:t.overlayType,entityId:e.overlay})}if(s("preset")&&t.presetMode){let l=t.presetMode==="away"?"mdi:home-export-outline":"mdi:home";n.push({type:"preset",icon:l,label:t.presetMode==="away"?"Away":"Home"})}let r=(l,p,c)=>{if(!s(l)||!e[c])return;let u=o[e[c]];if(!Q(u)&&u.state.toLowerCase()!=="none"){let m=fo(u.state);n.push({type:l,icon:p,label:u.state,color:m.token,severity:u.state,entityId:e[c]})}};if(s("open_window")&&e.open_window){let l=o[e.open_window];if(l){let p=l.state==="on";n.push({type:"open_window",icon:p?"mdi:window-open":"mdi:window-closed",label:p?"Open":"Closed",color:p?"var(--pulse-tier-gale)":void 0,entityId:e.open_window})}}if(s("window_predicted")&&e.window_predicted){let l=o[e.window_predicted];l&&l.state==="on"&&n.push({type:"window_predicted",icon:"mdi:window-open-variant",label:"Window predicted",color:"var(--pulse-tier-strong)",entityId:e.window_predicted})}if(r("mold_risk","mdi:mushroom","mold_risk"),r("condensation","mdi:water-alert","condensation"),s("comfort_level")&&e.comfort_level){let l=o[e.comfort_level];Q(l)||n.push({type:"comfort_level",icon:"mdi:emoticon-outline",label:l.state,entityId:e.comfort_level})}if(s("preheat_now")&&e.preheat_now){let l=o[e.preheat_now];l&&l.state==="on"&&n.push({type:"preheat_now",icon:"mdi:radiator",label:"Preheating",color:"var(--pulse-tier-strong)",entityId:e.preheat_now})}if(s("battery")||s("battery_all")){let l=i&&i.includes("battery_all"),p=[],c=["battery"],u=2;for(;e[`battery_${u}`];)c.push(`battery_${u}`),u++;for(let m of c){let d=e[m];if(!d)continue;let f=o[d];Q(f)||p.push({eid:d,state:f.state,lower:f.state.toLowerCase()})}if(p.length>0)if(l)for(let m=0;m<p.length;m++){let d=p[m],f=d.lower==="low"||d.lower==="critical"?"mdi:battery-alert":"mdi:battery",g=d.lower==="critical"?"var(--pulse-tier-gale)":d.lower==="low"?"var(--pulse-tier-strong)":void 0;n.push({type:`battery${m>0?`_${m+1}`:""}`,icon:f,label:d.state,color:g,entityId:d.eid})}else{let m={critical:3,low:2,normal:1},d=p[0];for(let w of p)(m[w.lower]||0)>(m[d.lower]||0)&&(d=w);let f=d.lower==="low"||d.lower==="critical"?"mdi:battery-alert":"mdi:battery",g=d.lower==="critical"?"var(--pulse-tier-gale)":d.lower==="low"?"var(--pulse-tier-strong)":void 0;n.push({type:"battery",icon:f,label:d.state,color:g,entityId:d.eid})}}if(s("valve_control")){let p=o[t.entityId]?.attributes||{},c=p.valve_control_active,u=p.valve_target,m=p.valve_control_backed_off,d=p.valve_control_enabled;m===!0?n.push({type:"valve_control",icon:"mdi:valve",label:"Valve: Backed off",color:"var(--pulse-disabled)"}):c===!0&&u!==void 0?n.push({type:"valve_control",icon:"mdi:valve",label:`Valve: ${Z(u)}${t.unit}`,color:"var(--pulse-tier-strong)"}):d===!0&&n.push({type:"valve_control",icon:"mdi:valve",label:"Valve: Idle",color:"var(--pulse-disabled)"})}if(i&&s("temp_source")){let p=o[t.entityId]?.attributes?.temperature_source;if(p&&p!=="cloud"){let c=p==="external"?"mdi:thermometer-probe":p==="homekit"?"mdi:apple":"mdi:cloud-outline";n.push({type:"temp_source",icon:c,label:p.charAt(0).toUpperCase()+p.slice(1)})}}return n}function we(t,e,o,i,n){let a=o[t],s=Q(a),r=a?.attributes||{},l=t.startsWith("sensor."),p=l?s?null:parseFloat(a?.state)||null:r.current_temperature??null,c=s||a?.state==="off"?null:r.temperature??null,u=l?null:r.current_humidity??null,m=l?"idle":r.hvac_action||(a?.state==="off"?"off":"idle"),d=l?"sensor":a?.state||"off",f=r.preset_mode||"",g=Number(r.min_temp??5),w=Number(r.max_temp??35),v=Number(r.target_temp_step??.5),b=r.unit_of_measurement||"\xB0C",y=0,_=i.heating_power_entity||e.heating_power;if(i.heating_power_entity&&mo(i.name||t,"heating_power_entity",i.heating_power_entity,o),_){let T=o[_];Q(T)||(y=parseFloat(T.state)||0)}else r.heating_power!==void 0&&(y=parseFloat(r.heating_power)||0);let S=0;if(e.ac_power){let T=o[e.ac_power];Q(T)||(S=parseFloat(T.state)||0)}let A="";if(e.overlay){let T=o[e.overlay];Q(T)||(A=T.state)}else r.overlay_type&&(A=r.overlay_type);let C=i.name||r.friendly_name||t.replace(/^(climate|sensor)\./,""),M=i.icon||r.icon||"mdi:thermometer",E=i.chips||n.chips||null,z={...e},k=i.name||t;i.open_window_entity&&(z.open_window=i.open_window_entity,mo(k,"open_window_entity",i.open_window_entity,o)),i.battery_entity&&(z.battery=i.battery_entity,mo(k,"battery_entity",i.battery_entity,o)),i.mold_risk_entity&&(z.mold_risk=i.mold_risk_entity,mo(k,"mold_risk_entity",i.mold_risk_entity,o));let x={entityId:t,name:C,icon:M,isUnavailable:s,currentTemp:p,targetTemp:c,humidity:u,heatingPower:y,coolingPower:S,hvacAction:m,hvacMode:d,presetMode:f,overlayType:A,minTemp:g,maxTemp:w,tempStep:v,unit:b,chips:[]};return x.chips=Zs(x,z,o,E),x}var Yi=280;function fn(t,e=Yi){return t<=50?0:(2+(t-50)/50*3)*(e/Yi)}function Ki(t,e=20,o=1){if(o<=0)return 0;let i=Math.min(4,Math.max(2,Math.round(t/30))),n=Math.floor(e/o);return Math.min(i,n)}function Ji(t){return 4-t/100*2.5}function Qi(t,e){return 1.5+t/e*1.5}function ye(t,e){return 3*(t/e)}function ta(t){if(!t)throw new Error("Please define an entity or zones");if(!t.entity&&!t.zones)throw new Error("Please define an entity or zones");if(t.entity&&typeof t.entity=="string"&&!t.entity.startsWith("climate.")&&!t.entity.startsWith("water_heater."))throw new Error("Entity must be a climate.* or water_heater.* entity");let e;t.zones?e=t.zones.map(a=>typeof a=="string"?{entity:a}:{...a}):e=[{entity:t.entity}];for(let a of e)if(!a.entity||typeof a.entity!="string")throw new Error("Each zone must have an entity ID");let o=t.atmosphere_intensity,i=o==="subtle"||o==="bold"?o:"medium",n={...t,columns:Number(t.columns)||Zt.columns,layout:t.layout||Zt.layout,show_temp_bar:t.show_temp_bar??Zt.show_temp_bar,show_power_bar:t.show_power_bar??Zt.show_power_bar,show_atmosphere:t.show_atmosphere!==!1,atmosphere_intensity:i,show_hero:t.show_hero===!0,hero_show_thermal_strip:t.hero_show_thermal_strip!==!1,hero_show_outside:t.hero_show_outside!==!1,tap_action:t.tap_action||{...Zt.tap_action},hold_action:t.hold_action||{...Zt.hold_action},double_tap_action:t.double_tap_action||{...Zt.double_tap_action},sections:t.sections||[...qi],_zones:e};return Array.isArray(n.sections)&&(n.sections=n.sections.map(a=>{let s=typeof a=="string"?{type:a}:{...a},r=Vi[s.type];if(r){for(let[l,p]of Object.entries(r))if(s[l]===void 0||s[l]===null)s[l]=p;else if(typeof p=="number"){let c=Number(s[l]);Number.isFinite(c)?s[l]=c||p:(Ot('section "%s": %s=%o is not numeric \u2014 using default %o',s.type,l,s[l],p),s[l]=p)}}return s})),n}function gn(t,e,o){let i=new Map;if(!Array.isArray(t))return i;for(let n of t){if(!n?.entity)continue;let a=o?o(n.entity):n.entity;i.set(n.entity,e?.data?.[a]||[])}return i}function _e(t){return typeof t=="string"&&t.length>0}function ht(t,e,o,i){if(_e(i?.temperature_entity))return{entityId:i.temperature_entity,source:"yaml_override"};let a=e[t]?.attributes?.external_temp_sensor;return _e(a)&&e[a]?{entityId:a,source:"external"}:_e(o?.temperature)?{entityId:o.temperature,source:"discovery"}:{entityId:t,source:"climate_fallback"}}function Yt(t,e,o,i){if(_e(i?.humidity_entity))return{entityId:i.humidity_entity,source:"yaml_override"};let a=e[t]?.attributes?.external_humidity_sensor;return _e(a)&&e[a]?{entityId:a,source:"external"}:_e(o?.humidity)?{entityId:o.humidity,source:"discovery"}:null}var Pe={timestamp:0,data:{},stateData:{}};function ea(){return Pe}function oa(t,e){let o={...Pe.data};for(let[n,a]of Object.entries(t))a.length>0&&(o[n]=a);let i={...Pe.stateData};if(e)for(let[n,a]of Object.entries(e))Array.isArray(a)&&a.length>0&&(i[n]=a);return Pe={timestamp:Date.now(),data:o,stateData:i},Pe}function na(){return{timestamp:0,data:{},stateData:{}}}function vn(t){return t.timestamp>0&&Date.now()-t.timestamp<3e5}function ia(t,e){let o={...t.data};for(let[i,n]of Object.entries(e))n.length>0&&(o[i]=n);return{timestamp:Date.now(),data:o}}function bn(t,e){if(t.length===0||e<1)return[];let o=t[0].t,a=(t[t.length-1].t-o||1)/e,s=[],r=0,l=t[0].v;for(let p=0;p<e;p++){let c=o+(p+1)*a,u=0,m=0;for(;r<t.length&&t[r].t<c;)u+=t[r].v,m++,r++;m>0&&(l=u/m),s.push({x:p/(e-1||1),v:l})}return s}function ra(t,e,o,i,n){let s=o-4,r=n-i||1,l=t.map(p=>({x:p.x*e,y:2+s-(p.v-i)/r*s}));return an(l)}function sa(t,e,o,i=48){if(!t||t.length===0)return[];let n=1/0,a=-1/0;for(let s of t)for(let r of s.data)isFinite(r.v)&&(r.v<n&&(n=r.v),r.v>a&&(a=r.v));return isFinite(n)||(n=0),isFinite(a)||(a=100),t.map(s=>{let r=s.data.filter(c=>isFinite(c.v));if(r.length<2)return{entityId:s.entityId,color:s.color,d:""};let l=bn(r,i),p=ra(l,e,o,n,a);return{entityId:s.entityId,color:s.color,d:p}})}function Ys(t,e,o,i){if(!t||t.length===0)return[];let n=o??e/2-2,a=i??n*.6,s=e/2,r=e/2,l=t.map(m=>Math.max(0,m.value)),p=l.reduce((m,d)=>m+d,0);if(p===0)return[];let c=[],u=-90;for(let m=0;m<t.length;m++){if(l[m]===0)continue;let d=l[m]/p*360;d>=360&&(d=359.9);let f=u+d,g=vo(s,r,a,n,u,f);c.push({label:t[m].label,color:t[m].color,d:g,angle:d}),u=f}return c}function wn(t="pc-bloom"){return ue(t)}function Ft(t,e=1.5,o){let i=o||"-30%",n=o==="-5%"?"110%":"160%",a=o===void 0?"":` x="${i}" y="${i}" width="${n}" height="${n}"`;return`<filter id="${t}"${a}><feGaussianBlur stdDeviation="${e}" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`}function go(t,e={}){let o=e.size||120,i=e.ariaLabel||t.map(v=>`${v.label} ${v.value}`).join(", "),n=e.centerNumStyle||"",a=e.centerLabel,s=Ys(t,o),r=t.reduce((v,b)=>v+b.value,0);if(t.length===0)return{html:"",total:0};let l=wn("donut-bloom"),p=0,c=-1;for(let v=0;v<s.length;v++){let b=t[v]?.value||0;b>p&&(p=b,c=v)}let u=o<=80?1.5:3,m=`<svg viewBox="0 0 ${o} ${o}" role="img" aria-label="${h(i)}">`;m+=`<defs>${Ft(l,u,"-30%")}</defs>`;let d=o/2-2,f=d*.6;m+=`<circle cx="${o/2}" cy="${o/2}" r="${((d+f)/2).toFixed(1)}" fill="none" stroke="var(--pulse-border-divider)" stroke-width="${(d-f).toFixed(1)}" />`;for(let v=0;v<s.length;v++){let b=s[v],y=v===c,_=y?"pc-donut-arc pc-donut-arc-active":"pc-donut-arc",S=y?` filter="url(#${l})"`:"";m+=`<path d="${b.d}" fill="${$(b.color)}" class="${_}"${S} data-segment="${h(b.label)}"><title>${h(b.label)}: ${Math.round(b.angle/360*r)}</title></path>`}m+="</svg>";let g='<div class="pc-donut-center">',w=n?` style="${n}"`:"";return g+=`<div class="pc-donut-center-num"${w}>${h(Math.round(r))}</div>`,a!=null&&(g+=`<div class="pc-donut-center-label">${h(a)}</div>`),g+="</div>",{html:m+g,total:r}}function xe(t){if(!t||t.length===0)return"";let e='<div class="pc-chart-legend">';for(let o of t){let i=$(o.color),n=h(o.label),a=o.value!==void 0&&o.value!==null?` ${h(o.value)}`:"";e+=`<span class="pc-legend-chip"><span class="pc-legend-dot" style="background:${i}"></span>${n}${a}</span>`}return e+="</div>",e}var yn=[{upper:14,color:"#1565C0"},{upper:16,color:"#4FC3F7"},{upper:17,color:"#4DB6AC"},{upper:18,color:"#81C784"},{upper:19,color:"#AED581"},{upper:20,color:"#C5E1A5"},{upper:21,color:"#FFF176"},{upper:22,color:"#FFB74D"},{upper:23,color:"#FF8A65"},{upper:24,color:"#EF5350"},{upper:null,color:"#C62828"}];function rt(t){for(let e of yn)if(e.upper===null||t<=e.upper)return e.color;return"#C62828"}function Be(t){return t<=20?"#C62828":t<=30?"#EF5350":t<=35?"#FF8A65":t<=40?"#FFB74D":t<=45?"#AED581":t<=55?"#4CAF50":t<=60?"#AED581":t<=65?"#4DB6AC":t<=70?"#4FC3F7":t<=80?"#1E88E5":"#1565C0"}function vo(t,e,o,i,n,a){let s=n*Math.PI/180,r=a*Math.PI/180,l=a-n,p=Math.abs(l)>180?1:0,c=t+i*Math.cos(s),u=e+i*Math.sin(s),m=t+i*Math.cos(r),d=e+i*Math.sin(r),f=t+o*Math.cos(r),g=e+o*Math.sin(r),w=t+o*Math.cos(s),v=e+o*Math.sin(s);return[`M${c.toFixed(2)},${u.toFixed(2)}`,`A${i.toFixed(2)},${i.toFixed(2)} 0 ${p} 1 ${m.toFixed(2)},${d.toFixed(2)}`,`L${f.toFixed(2)},${g.toFixed(2)}`,`A${o.toFixed(2)},${o.toFixed(2)} 0 ${p} 0 ${w.toFixed(2)},${v.toFixed(2)}`,"Z"].join(" ")}function Pt(t,e,o,i=48){if(!t||t.length<2)return null;let n=t.filter(m=>isFinite(m.v));if(n.length<2)return null;let a=Date.now(),s=n[n.length-1];a-s.t>6e5&&n.push({t:a,v:s.v});let r=bn(n,i);if(r.length<2)return null;let l=1/0,p=-1/0;for(let m of r)m.v<l&&(l=m.v),m.v>p&&(p=m.v);isFinite(l)||(l=0),isFinite(p)||(p=100);let c=ra(r,e,o,l,p);if(!c)return null;let u=`${c} L${e.toFixed(1)},${o.toFixed(1)} L0,${o.toFixed(1)} Z`;return{linePath:c,areaPath:u}}function _n(t,e=24,o=""){if(!t||t.length<2)return"";let i=t.filter(p=>isFinite(p.v));if(i.length<2)return"";let n=bn(i,e),a=i[0].t,s=i[i.length-1].t,r=i.every(p=>Number.isInteger(p.v)),l={u:o,d:[]};return l.d=n.map(p=>{let c=a+p.x*(s-a),u=new Date(c),m=`${String(u.getHours()).padStart(2,"0")}:${String(u.getMinutes()).padStart(2,"0")}`,d=r?Math.round(p.v):Math.round(p.v*10)/10;return{l:m,v:d}}),JSON.stringify(l)}function Kt(t,e,o,i,n,a=""){if(!t||t.length<2)return"";let s=Pt(t,e,o,24);if(!s)return"";let r=$(i),l=`<div class="pc-sparkline-filled" style="height:${o}px">`;return l+=`<svg viewBox="0 0 ${e} ${o}" role="img" aria-label="${h(a)}" preserveAspectRatio="none" style="width:100%;height:${o}px;display:block">`,l+=`<defs><linearGradient id="${h(n)}" x1="0" y1="0" x2="0" y2="1">`,l+=`<stop offset="0%" stop-color="${r}" stop-opacity="0.3"/>`,l+=`<stop offset="100%" stop-color="${r}" stop-opacity="0"/>`,l+="</linearGradient></defs>",l+=`<path d="${s.areaPath}" fill="url(#${h(n)})" />`,l+=`<path d="${s.linePath}" fill="none" stroke="${r}" stroke-width="1.5" />`,l+="</svg></div>",l}var Ks=new Set(["friendly_name","icon","unit_of_measurement","device_class"]);function bo(t,e){let o=[],i=0;if(Array.isArray(t.chart_data)&&t.chart_data.length>0){for(let n of t.chart_data)n.type&&typeof n.count=="number"&&(o.push({label:n.type,value:Math.max(0,n.count),color:e[i%e.length]}),i++);return o}if(t.breakdown_24h&&typeof t.breakdown_24h=="object"){for(let[n,a]of Object.entries(t.breakdown_24h)){let s=Number(a);!isNaN(s)&&s>0&&(o.push({label:n,value:s,color:e[i%e.length]}),i++)}return o}for(let[n,a]of Object.entries(t)){if(Ks.has(n))continue;let s=Number(a);isNaN(s)||(o.push({label:n,value:Math.max(0,s),color:e[i%e.length]}),i++)}return o}var aa={heating:{cold:"#171717",hot:"#ff9f0a"},cooling:{cold:"#171717",hot:"#5ac8fa"},idle:{cold:"#171717",hot:"#525252"},off:{cold:"#171717",hot:"#262626"}};function la(t,e,o){let i=o&&aa[o]||aa.off,n=(e?.maxTemp??30)-(e?.minTemp??0);if(n<=0)return i.cold;let a=Math.max(0,Math.min(1,(t-(e?.minTemp??0))/n));return Ei(i.cold,i.hot,a)}function Js(t,e,o,i){let n=e.show_temp_bar??o.show_temp_bar??!0,a=e.show_power_bar??o.show_power_bar??!0,s=t.isUnavailable?" pc-unavailable":"",r=!t.isUnavailable&&t.currentTemp!==null&&t.currentTemp!==void 0&&t.targetTemp!==null&&t.targetTemp!==void 0&&Math.abs(t.currentTemp-t.targetTemp)<=.3,l,p;t.isUnavailable?(l=" pc-row-unavail",p='<span class="pc-state-tag pc-tag-unavail">Unavail</span>'):t.hvacAction==="heating"?(l=" pc-row-heat",p='<span class="pc-state-tag pc-tag-heat">Heat</span>'):t.hvacAction==="cooling"?(l=" pc-row-cool",p='<span class="pc-state-tag pc-tag-cool">Cool</span>'):t.hvacAction==="off"?(l=" pc-row-off",p='<span class="pc-state-tag pc-tag-off">Off</span>'):r?(l=" pc-row-at-target",p='<span class="pc-state-tag pc-tag-at-target">At target</span>'):(l=" pc-row-idle",p='<span class="pc-state-tag pc-tag-idle">Idle</span>');let c=t.isUnavailable?"":t.currentTemp!==null?`${Z(t.currentTemp)}${h(t.unit)}`:"--",u=!t.isUnavailable&&t.targetTemp!==null?`<span class="pc-zone-target">\u2192 ${Z(t.targetTemp)}${h(t.unit)}</span>`:"",m=!t.isUnavailable&&t.humidity!==null?` <span class="pc-zone-humidity"><ha-icon icon="mdi:water-percent"></ha-icon>${Math.round(t.humidity)}%</span>`:"",d=t.isUnavailable?`${h(t.name)}: Unavailable`:`${h(t.name)}: ${c}${t.targetTemp!==null?`, target ${Z(t.targetTemp)}${t.unit}`:""}${t.humidity!==null?`, ${Math.round(t.humidity)}% humidity`:""}, ${t.hvacAction}`,f=`<div class="pc-zone-row${s}${l}" tabindex="0" role="button"
    aria-label="${h(d)}" data-entity="${h(t.entityId)}">`;if(f+='<div class="pc-row-ribbon"></div>',f+='<div class="pc-zone-header">',f+=`<span class="pc-zone-name">${t.icon&&t.icon!=="mdi:thermometer"?`<ha-icon icon="${h(t.icon)}"></ha-icon> `:""}${h(t.name)}${m}</span>`,f+=`<span class="pc-zone-temp">${c}${u}${p}</span>`,f+="</div>",n&&!t.isUnavailable){let w=t.currentTemp!==null?Oe(t.currentTemp,t.minTemp,t.maxTemp):50,v=t.targetTemp!==null?Oe(t.targetTemp,t.minTemp,t.maxTemp):null,b=rt(t.minTemp),y=rt((t.minTemp+t.maxTemp)/2),_=rt(t.maxTemp),S=`linear-gradient(to right, ${$(b)}, ${$(y)}, ${$(_)})`;f+='<div class="pc-temp-gauge">',f+=`<div class="pc-temp-gauge-bg" style="background:${S}"></div>`,f+=`<div class="pc-temp-gauge-current" style="left:${$(w.toFixed(1))}%"></div>`,v!==null&&(f+=`<div class="pc-temp-gauge-target" style="left:${$(v.toFixed(1))}%"></div>`),f+="</div>"}if(a&&!t.isUnavailable){let w=t.heatingPower||t.coolingPower||0,v=be(t.hvacAction),b=v.token||v.fallback;if(w>0||t.hvacAction==="heating"||t.hvacAction==="cooling"){let y=Math.min(100,Math.max(0,w)),_=w>0?" pc-bar-active":"";f+='<div class="pc-power-bar-container">',f+='<div class="pc-power-bar-track"></div>',f+=`<div class="pc-power-bar-fill${_}" style="width:${$(y.toFixed(1))}%;background:${$(b)};--pc-bar-glow:${$(v.fallback)}40"></div>`,f+="</div>"}}if(t.chips.length>0){f+='<div class="pc-zone-chips">';for(let w of t.chips){let v=w.severity?` pc-severity-${w.severity.toLowerCase()}`:"",b=w.color?` style="color:${$(w.color)}"`:"",y=w.entityId?` data-entity="${h(w.entityId)}"`:"";f+=`<span class="pc-chip${v}"${b}${y} data-chip-type="${h(w.type)}">`,f+=`<ha-icon icon="${h(w.icon)}"></ha-icon>`,f+=`${h(w.label)}`,f+="</span>"}f+="</div>"}let g=e.sparkline?.mode||"overlay";if(g==="pulse"&&!t.isUnavailable)return Qs(t,e,i);if(!t.isUnavailable&&i&&i.length>=2){let w=be(t.hvacAction),v=e.color||w.fallback;g==="prominent"&&(f+=tl(v,i,t.unit,t.entityId))}return f+="</div>",f}function Qs(t,e,o){let i=be(t.hvacAction),n=t.heatingPower>0||t.hvacAction==="heating",a=t.hvacAction==="cooling",s=n||a,r=s?e.color||i.fallback:"var(--pulse-text-secondary)",l=$(r),p=h(t.entityId).replace(/\./g,"-"),c=t.heatingPower||t.coolingPower||0,u=t.hvacAction==="heating"?`Heating ${Math.round(c)}%`:t.hvacAction==="cooling"?`Cooling ${Math.round(c)}%`:"Idle",m=t.currentTemp!==null?`${Z(t.currentTemp)}${h(t.unit)}`:"--",d=t.targetTemp!==null?`\u2192 ${Z(t.targetTemp)}${h(t.unit)}`:"",f=`${h(t.name)}: ${m}, ${u}`,g=`pc-zone-row pc-zone-row-pulse${n?" pc-heating":""}`,w=_n(o||[],24,t.unit),v=`<div class="${g}" tabindex="0" role="button"
    aria-label="${h(f)}" data-entity="${h(t.entityId)}"${w?` data-sparkline='${h(w)}'`:""}>`;if(o&&o.length>=2){let b=Pt(o,360,56,60);if(b){let y=`pulse-grad-${p}`,_=`pulse-glow-${p}`,S=s?" pc-heating-glow":"",A=s?"0.55":"0.2",C=s?"0.05":"0.02",M=s?"2":"1.5",E=s?"1":"0.5";v+='<svg class="pc-pulse-bg" viewBox="0 0 360 56" preserveAspectRatio="none">',v+="<defs>",v+=`<linearGradient id="${y}" x1="0" y1="0" x2="0" y2="1">`,v+=`<stop offset="0%" stop-color="${l}" stop-opacity="${A}"/>`,v+=`<stop offset="100%" stop-color="${l}" stop-opacity="${C}"/>`,v+="</linearGradient>",s&&(v+=Ft(_,ye(360,360).toFixed(1))),v+="</defs>",v+=`<path d="${b.areaPath}" fill="url(#${y})" />`,v+=`<path d="${b.linePath}" fill="none" stroke="${l}" stroke-width="${M}" opacity="${E}"`,s&&(v+=` filter="url(#${_})" class="${S}"`),v+=" />",v+="</svg>"}}return v+='<div class="pc-pulse-info">',v+='<div class="pc-pulse-info-left">',v+=`<div class="pc-zone-name">${t.icon&&t.icon!=="mdi:thermometer"?`<ha-icon icon="${h(t.icon)}"></ha-icon> `:""}${h(t.name)}</div>`,v+='<div class="pc-pulse-status">',v+=`<span class="pc-status-dot" style="background:${l}"></span>`,v+=`${h(u)}`,v+="</div>",v+="</div>",v+='<div class="pc-pulse-info-right">',v+=`<span class="pc-pulse-current">${h(m)}</span>`,d&&(v+=`<span class="pc-zone-target">${d}</span>`),v+="</div>",v+="</div>",v+="</div>",v}function tl(t,e,o,i){let n=Pt(e,300,40,48);if(!n){let c=me(e,300,40,48,"avg",!0);return c?`<div class="pc-sparkline-prominent"><svg viewBox="0 0 300 40" preserveAspectRatio="none"><path d="${c}" fill="none" stroke="${$(t)}" stroke-width="1.5" opacity="0.7" /></svg></div>`:""}let s=`prom-grad-${i?i.replace(/[^a-z0-9]/gi,"-"):String(Math.random()).slice(2,8)}`,r=$(t),l=_n(e,24,o),p=`<div class="pc-sparkline-filled pc-sparkline-prominent"${l?` data-sparkline='${h(l)}'`:""}>`;return p+='<svg viewBox="0 0 300 40" preserveAspectRatio="none">',p+=`<defs><linearGradient id="${h(s)}" x1="0" y1="0" x2="0" y2="1">`,p+=`<stop offset="0%" stop-color="${r}" stop-opacity="0.3"/>`,p+=`<stop offset="100%" stop-color="${r}" stop-opacity="0"/>`,p+="</linearGradient></defs>",p+=`<path d="${n.areaPath}" fill="url(#${h(s)})" />`,p+=`<path d="${n.linePath}" fill="none" stroke="${r}" stroke-width="1.5" opacity="0.7" />`,p+="</svg></div>",p}function xn(t,e,o,i,n){if(!t||t.length===0)return"";let a=Number(e.columns)||1,s=a>1?" pc-columns":"",r=a>1?` style="grid-template-columns:repeat(${Number(a)}, 1fr)"`:"",l=`<div class="pc-section pc-section-zones${s}"${r}>`,p=i?.hubEntities?.home_state,c=p?o[p]:null;if(Q(c))l+='<div class="pulse-section-label">Zones</div>';else{let u=c.state==="on",m=u?"mdi:home":"mdi:home-export-outline",d=u?"Home":"Away",f=u?"var(--pulse-tier-moderate)":"var(--pulse-text-secondary)";l+='<div class="pc-section-header pc-section-header-center">',l+='<div class="pulse-section-label">Zones</div>',l+=`<span class="pc-chip" data-entity="${h(p)}" style="color:${$(f)}">`,l+=`<ha-icon icon="${h(m)}"></ha-icon>${h(d)}</span>`,l+="</div>"}for(let u of t){let{entityId:m,zoneEntities:d,zoneState:f}=at(u,i,o,e),g=ht(m,o,d,u),w=n?.data?.[g.entityId]||n?.data?.[m]||[];l+=Js(f,u,e,w)}return l+="</div>",l}function ca(t,e,o,i,n,a){if(!t||!e)return;let s=t.querySelectorAll(".pc-zone-row");for(let r=0;r<e.length;r++){let l=e[r],p=l.entity,c=i[p],u=a[p];if(c===u&&s[r])continue;let{zoneState:m}=at(l,n,i,o),d=s[r];if(!d)continue;let f=d.querySelector(".pc-zone-temp");if(f){let y=m.isUnavailable?"":m.currentTemp!==null?`${Z(m.currentTemp)}${m.unit}`:"--",_=!m.isUnavailable&&m.targetTemp!==null?`<span class="pc-zone-target">\u2192 ${Z(m.targetTemp)}${h(m.unit)}</span>`:"";f.innerHTML=`${h(y)}${_}`}let g=d.querySelector(".pc-power-bar-fill");if(g){let y=m.heatingPower||m.coolingPower||0,_=be(m.hvacAction),S=_.token||_.fallback;g.style.width=`${Math.min(100,Math.max(0,y)).toFixed(1)}%`,g.style.background=S,g.style.setProperty("--pc-bar-glow",`${_.fallback}40`),g.classList.toggle("pc-bar-active",y>0)}let w=d.querySelector(".pc-temp-gauge-current");if(w&&m.currentTemp!==null){let y=Oe(m.currentTemp,m.minTemp,m.maxTemp);w.style.left=`${y.toFixed(1)}%`}let v=d.querySelector(".pc-temp-gauge-target");if(v&&m.targetTemp!==null){let y=Oe(m.targetTemp,m.minTemp,m.maxTemp);v.style.left=`${y.toFixed(1)}%`}let b=d.querySelector(".pc-temp-gauge-bg");if(b&&!m.isUnavailable){let y=rt(m.minTemp),_=rt((m.minTemp+m.maxTemp)/2),S=rt(m.maxTemp);b.style.background=`linear-gradient(to right, ${y}, ${_}, ${S})`}m.isUnavailable?d.classList.add("pc-unavailable"):d.classList.remove("pc-unavailable")}}function qe(t){return!!(t?.api_usage&&t?.api_limit)}function pa(t){return t>95?"var(--pulse-tier-gale)":t>80?"var(--pulse-tier-strong)":"var(--pulse-tier-moderate)"}function el(t){let e=(t||"").toLowerCase();return e==="ok"||e==="healthy"?"var(--pulse-tier-moderate)":e==="warning"?"var(--pulse-tier-strong)":"var(--pulse-tier-gale)"}function ol(t,e){let o=e>0?Math.min(100,t/e*100):0,i=pa(o),n=80,a=n/2,s=n/2,r=n/2-4,l=r*.7,p=vo(a,s,l,r,-90,269.9),c=-90+o/100*360,u=o>0?vo(a,s,l,r,-90,Math.min(c,269.9)):"",m=o>95,d=o>80,f=m||d,g='<div class="pc-usage-gauge">';if(g+=`<svg viewBox="0 0 ${n} ${n}" role="img" aria-label="API usage: ${Math.round(t)} of ${Math.round(e)}" style="width:${n}px;height:${n}px">`,f&&(g+=`<defs>${Ft("gauge-glow",2)}</defs>`),g+=`<path d="${p}" fill="var(--pulse-border-divider)" />`,u){if(g+=`<path d="${u}" fill="${$(i)}"${f?' filter="url(#gauge-glow)"':""}>`,g+=`<title>API usage: ${Math.round(o)}%</title>`,f){let b=m?"1":"2.5";Rt()||(g+=`<animate attributeName="opacity" values="1;0.5;1" dur="${b}s" repeatCount="indefinite"/>`)}g+="</path>"}g+="</svg>";let w=h(Math.round(t)),v=h(Math.round(e));return g+=`<div class="pc-gauge-center">${w}<br><span class="pc-gauge-center-limit">/ ${v}</span></div>`,g+="</div>",g}function nl(t,e,o){let i=e?.data?.[t]||[];return Kt(i,200,40,o,"api-hist-grad","API usage history")}function il(t){let e=bo(t,Dt);if(e.length===0)return"";let o=60,i='<div class="pc-api-breakdown-row">';i+=`<div class="pc-donut-container pc-api-breakdown-donut" style="width:${o}px;height:${o}px">`;let{html:n}=go(e,{size:o,ariaLabel:"API call breakdown",centerNumStyle:"font-size:var(--pulse-font-body)"});return i+=n,i+="</div>",i+=xe(e.map(a=>({label:a.label,color:a.color,value:String(Math.round(a.value))}))),i+="</div>",i}function wo(t,e,o,i){if(!qe(t))return"";let n=parseFloat(e[t.api_usage]?.state)||0,a=parseFloat(e[t.api_limit]?.state)||100,s=a>0?Math.min(100,n/a*100):0,r=pa(s),l=e[t.api_status]?.state||"unknown",p=el(l),c='<div class="pc-api-dashboard">';c+='<div class="pc-api-row">',c+=ol(n,a);let u=t.api_usage;if(u&&i&&(c+=nl(u,i,r)),c+="</div>",t.api_breakdown&&e[t.api_breakdown]&&(c+='<div class="pc-api-row">',c+=il(e[t.api_breakdown].attributes||{}),c+="</div>"),c+='<div class="pc-zone-chips">',t.call_history&&e[t.call_history]){let m=e[t.call_history].attributes?.calls_per_hour;m!=null&&Number(m)>0&&(c+=`<span class="pc-chip" data-entity="${h(t.call_history)}">`,c+=`<ha-icon icon="mdi:speedometer"></ha-icon>${h(Math.round(Number(m)))}/hr</span>`)}if(t.polling_interval&&e[t.polling_interval]){let m=e[t.polling_interval],d=m.attributes?.unit_of_measurement||"";c+=`<span class="pc-chip" data-entity="${h(t.polling_interval)}">Poll: ${h(m.state)}${d?h(d):""}</span>`}if(t.next_sync&&e[t.next_sync]){let m=e[t.next_sync].state,d=m,f=0;if(m&&m.includes("T"))try{let g=new Date(m);f=g.getTime();let w=f-Date.now();if(w>0&&w<36e5){let v=Math.floor(w/6e4),b=Math.floor(w%6e4/1e3);d=v>0?`${v}m ${b}s`:`${b}s`}else d=dt(g)}catch{}c+=`<span class="pc-chip chip-next-sync" data-entity="${h(t.next_sync)}" data-target="${f}">Next: ${h(d)}</span>`}if(t.api_reset&&e[t.api_reset]){let m=e[t.api_reset].state,d=m;if(m&&m.includes("T"))try{let f=new Date(m);d=dt(f)}catch{}c+=`<span class="pc-chip" data-entity="${h(t.api_reset)}">Reset: ${h(d)}</span>`}return t.token_status&&e[t.token_status]&&(c+=`<span class="pc-chip" data-entity="${h(t.token_status)}">Token: ${h(e[t.token_status].state)}</span>`),c+=`<span class="pc-chip" data-entity="${t.api_status?h(t.api_status):""}" style="color:${$(p)}">${h(l)}</span>`,c+="</div>",c+="</div>",c}function $n(t,e,o,i){if(!qe(t))return"";let n='<div class="pc-section pc-section-api">';return n+='<div class="pulse-section-label">API Usage</div>',n+=wo(t,e,o,i),n+="</div>",n}function Ve(t){return!!t?.bridge_connected}function yo(t,e,o){if(!Ve(t))return"";let i=e[t.bridge_connected];if(!i)return"";let n=i.state==="on",a=n?"var(--pulse-tier-moderate)":"var(--pulse-tier-gale)",s=n?"Connected":"Disconnected",r=n?"pc-pulse-dot pc-connected":"pc-pulse-dot pc-disconnected",l=i.attributes||{},p=l.response_time_ms,c=l.consecutive_failures,u=l.last_error,m=t.boiler_flow_temp&&e[t.boiler_flow_temp]?.attributes?.unit_of_measurement||"\xB0C",d="";if(d+='<div class="pc-zone-chips">',d+=`<span class="pc-chip" data-entity="${h(t.bridge_connected)}" style="color:${$(a)}">`,d+=`<span class="${r}"></span>`,d+=`${h(s)}</span>`,p!==void 0&&(d+=`<span class="pc-chip" data-entity="${h(t.bridge_connected)}">${h(Math.round(p))}ms</span>`),c!==void 0&&c>0&&(d+=`<span class="pc-chip" data-entity="${h(t.bridge_connected)}" style="color:var(--pulse-tier-gale)">Failures: ${h(c)}</span>`),d+="</div>",t.boiler_flow_temp&&e[t.boiler_flow_temp]){let w=parseFloat(e[t.boiler_flow_temp].state),v=e[t.boiler_flow_temp].state,b=isNaN(w)?"var(--pulse-text-primary)":rt(w);if(d+='<div class="pc-flow-temp-row">',d+=`<span class="pc-flow-temp-value" style="color:${$(b)}">${h(v)}${h(m)}</span>`,o){let y=o.data?.[t.boiler_flow_temp]||[],_=Kt(y,120,30,b,"bridge-flow-grad","Boiler flow temperature history");_&&(d+=`<div class="pc-flow-sparkline">${_}</div>`)}d+="</div>"}let f=t.wc_status&&e[t.wc_status],g=t.wc_target_flow&&e[t.wc_target_flow];if((f||g)&&(d+='<div class="pc-zone-chips">',f&&(d+=`<span class="pc-chip" data-entity="${h(t.wc_status)}">${h(e[t.wc_status].state)}</span>`),g&&(d+=`<span class="pc-chip" data-entity="${h(t.wc_target_flow)}">Target: ${h(e[t.wc_target_flow].state)}${h(m)}</span>`),d+="</div>"),t.boiler_max_output&&e[t.boiler_max_output]){let w=e[t.boiler_max_output].state;w!=="unavailable"&&w!=="unknown"&&(d+='<div class="pc-zone-chips">',d+=`<span class="pc-chip" data-entity="${h(t.boiler_max_output)}">`,d+=`<ha-icon icon="mdi:thermometer-high"></ha-icon>Max: ${h(w)}${h(m)}</span>`,d+="</div>")}return u&&u!=="None"&&u!=="null"&&(d+='<div class="pc-zone-chips">',d+=`<span class="pc-chip" style="color:var(--pulse-tier-gale)">Error: ${h(u)}</span>`,d+="</div>"),d}function Sn(t,e,o){if(!Ve(t))return"";let i='<div class="pc-section pc-section-bridge">';return i+='<div class="pulse-section-label">Bridge</div>',i+=yo(t,e,o),i+="</div>",i}var _o="var(--pulse-tier-moderate)",da="var(--pulse-accent)";function $e(t){return!!t?.homekit_connected}function xo(t,e){if(!$e(t))return"";let o=e[t.homekit_connected];if(!o)return"";let i=o.attributes||{},n=t.homekit_reads_saved?e[t.homekit_reads_saved]:null,a=t.homekit_writes_saved?e[t.homekit_writes_saved]:null,s=n?Number(n.state)||0:Number(i.reads_saved_today)||0,r=a?Number(a.state)||0:Number(i.writes_saved_today)||0,l=s+r;return l>0?` \xB7 ${l} saved`:""}function $o(t,e,o){if(!$e(t))return"";let i=e[t.homekit_connected];if(!i)return"";let n=i.state==="on",a=n?_o:"var(--pulse-tier-gale)",s=n?"Connected":"Disconnected",r=n?"pc-pulse-dot pc-connected":"pc-pulse-dot pc-disconnected",l=i.attributes||{},p=l.uptime||"",c=l.mapped_zones,u=l.reconnect_count,m=t.homekit_reads_saved?e[t.homekit_reads_saved]:null,d=t.homekit_writes_saved?e[t.homekit_writes_saved]:null,f=m?Number(m.state)||0:Number(l.reads_saved_today)||0,g=d?Number(d.state)||0:Number(l.writes_saved_today)||0,w=f+g,v="";if(v+='<div class="pc-zone-chips">',v+=`<span class="pc-chip" data-entity="${h(t.homekit_connected)}" style="color:${$(a)}">`,v+=`<span class="${r}"></span>`,v+=`${h(s)}`,p&&(v+=` <span class="pc-chip-aside">${h(p)}</span>`),v+="</span>",c!==void 0&&(v+=`<span class="pc-chip">${h(c)} zones</span>`),u!==void 0&&u>0&&(v+=`<span class="pc-chip" style="color:var(--pulse-tier-strong)">Reconnects: ${h(u)}</span>`),v+="</div>",f>0||g>0){let A=w>0?f/w*100:100;v+='<div class="pc-homekit-bar-stack">',v+='<div class="pc-power-bar-container">',v+='<div class="pc-power-bar-track"></div>',v+=`<div class="pc-power-bar-fill" style="width:100%;background:${$(da)}"></div>`,v+=`<div class="pc-power-bar-fill" style="width:${$(A.toFixed(1))}%;background:${$(_o)}"></div>`,v+="</div>",v+="</div>";let C=t.homekit_reads_saved;if(C&&o){let z=o.data?.[C]||[];v+=Kt(z,200,30,_o,"hk-spark-grad","HomeKit saved calls history")}v+='<div class="pc-zone-chips">';let M=t.homekit_reads_saved||"",E=t.homekit_writes_saved||"";v+=`<span class="pc-chip"${M?` data-entity="${h(M)}"`:""} style="color:${$(_o)}">Reads: ${h(f)}</span>`,g>0&&(v+=`<span class="pc-chip"${E?` data-entity="${h(E)}"`:""} style="color:${$(da)}">Writes: ${h(g)}</span>`),v+="</div>"}let b=Number(l.write_attempts)||0,y=Number(l.write_successes)||0,_=Number(l.write_fallbacks)||0,S=Number(l.write_avg_latency_ms)||0;return(b>0||y>0||_>0)&&(v+='<div class="pc-zone-chips">',b>0&&(v+=`<span class="pc-chip">Attempts: ${h(b)}</span>`),y>0&&(v+=`<span class="pc-chip">Successes: ${h(y)}</span>`),_>0&&(v+=`<span class="pc-chip" style="color:var(--pulse-tier-strong)">Fallbacks: ${h(_)}</span>`),S>0&&(v+=`<span class="pc-chip">Latency: ${h(S)}ms</span>`),v+="</div>"),v}function kn(t,e,o){if(!$e(t))return"";let i=xo(t,e),n='<div class="pc-section pc-section-homekit">';return n+=`<div class="pulse-section-label">HomeKit${h(i)}</div>`,n+=$o(t,e,o),n+="</div>",n}function al(t){return{sunny:"mdi:weather-sunny",clear:"mdi:weather-night",cloudy:"mdi:weather-cloudy",partlycloudy:"mdi:weather-partly-cloudy",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy",fog:"mdi:weather-fog",windy:"mdi:weather-windy",lightning:"mdi:weather-lightning"}[(t||"").toLowerCase()]||"mdi:weather-cloudy"}function Tn(t,e,o){if(!t.outside_temp)return"";let i=e[t.outside_temp]?.state,n=e[t.weather]?.state||"",a=t.solar_intensity?e[t.solar_intensity]?.state:null,s='<div class="pc-section pc-section-weather">';s+='<div class="pulse-section-label">Weather</div>',s+='<div class="pc-zone-chips">',n&&(s+=`<span class="pc-chip"${t.weather?` data-entity="${h(t.weather)}"`:""}><ha-icon icon="${h(al(n))}"></ha-icon>${h(n)}</span>`),i!=null&&(s+=`<span class="pc-chip" data-entity="${h(t.outside_temp)}"><ha-icon icon="mdi:thermometer"></ha-icon>${h(i)}${h(e[t.outside_temp]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),a!=null&&(s+=`<span class="pc-chip"${t.solar_intensity?` data-entity="${h(t.solar_intensity)}"`:""}><ha-icon icon="mdi:white-balance-sunny"></ha-icon>${h(a)}%</span>`),s+="</div>";let r=t.outside_temp;if(r&&o){let l=o.data?.[r]||[],p=parseFloat(i||"0"),c=isNaN(p)?"var(--pulse-text-primary)":rt(p);s+=Kt(l,200,30,c,"weather-spark-grad","Outdoor temperature history")}return s+="</div>",s}function An(t,e,o){let i=!1,n='<div class="pc-section pc-section-environment">';n+='<div class="pulse-section-label">Environment</div>';for(let a of t){let s=Y(a.entity),r=o?.zoneEntities?.[s]||{},l=r.mold_risk&&e[r.mold_risk],p=r.condensation&&e[r.condensation],c=r.comfort_level&&e[r.comfort_level],u=r.surface_temp&&e[r.surface_temp],m=r.dew_point&&e[r.dew_point];if(!l&&!p&&!c&&!u&&!m)continue;i=!0;let d=a.name||e[a.entity]?.attributes?.friendly_name||s;if(n+=`<div class="pc-system-row"><span class="pc-system-label">${h(d)}</span>`,n+='<div class="pc-zone-chips">',l){let f=e[r.mold_risk].state,g=fo(f);n+=`<span class="pc-chip" data-entity="${h(r.mold_risk)}" style="color:${$(g.fallback)}">`,n+=`<ha-icon icon="mdi:mushroom"></ha-icon>${h(f)}</span>`}if(p){let f=e[r.condensation].state,g=fo(f);n+=`<span class="pc-chip" data-entity="${h(r.condensation)}" style="color:${$(g.fallback)}">`,n+=`<ha-icon icon="mdi:water-alert"></ha-icon>${h(f)}</span>`}c&&(n+=`<span class="pc-chip" data-entity="${h(r.comfort_level)}"><ha-icon icon="mdi:emoticon-outline"></ha-icon>${h(e[r.comfort_level].state)}</span>`),u&&(n+=`<span class="pc-chip" data-entity="${h(r.surface_temp)}"><ha-icon icon="mdi:texture-box"></ha-icon>${h(e[r.surface_temp].state)}${h(e[r.surface_temp]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),m&&(n+=`<span class="pc-chip" data-entity="${h(r.dew_point)}"><ha-icon icon="mdi:water-thermometer"></ha-icon>${h(e[r.dew_point].state)}${h(e[r.dew_point]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),n+="</div></div>"}return n+="</div>",i?n:""}function Cn(t,e,o){let i=!1,n='<div class="pc-section pc-section-thermal">';n+='<div class="pulse-section-label">Thermal Analytics</div>';for(let a of t){let s=Y(a.entity),r=o?.zoneEntities?.[s]||{},l=r.heating_rate&&e[r.heating_rate],p=r.thermal_inertia&&e[r.thermal_inertia],c=r.preheat_time&&e[r.preheat_time],u=r.confidence&&e[r.confidence],m=r.heat_accel&&e[r.heat_accel],d=r.approach_factor&&e[r.approach_factor];if(!l&&!p&&!c&&!u&&!m&&!d)continue;i=!0;let f=a.name||e[a.entity]?.attributes?.friendly_name||s;n+=`<div class="pc-system-row"><span class="pc-system-label">${h(f)}</span>`,n+='<div class="pc-zone-chips">',l&&(n+=`<span class="pc-chip" data-entity="${h(r.heating_rate)}"><ha-icon icon="mdi:trending-up"></ha-icon>${h(e[r.heating_rate].state)}${h(e[r.heating_rate]?.attributes?.unit_of_measurement||"\xB0C/hr")}</span>`),p&&(n+=`<span class="pc-chip" data-entity="${h(r.thermal_inertia)}"><ha-icon icon="mdi:speedometer"></ha-icon>${h(e[r.thermal_inertia].state)}</span>`),c&&(n+=`<span class="pc-chip" data-entity="${h(r.preheat_time)}"><ha-icon icon="mdi:timer-outline"></ha-icon>${h(e[r.preheat_time].state)} min</span>`),u&&(n+=`<span class="pc-chip" data-entity="${h(r.confidence)}"><ha-icon icon="mdi:check-circle-outline"></ha-icon>${h(e[r.confidence].state)}%</span>`),m&&(n+=`<span class="pc-chip" data-entity="${h(r.heat_accel)}"><ha-icon icon="mdi:rocket-launch"></ha-icon>${h(e[r.heat_accel].state)}${h(e[r.heat_accel]?.attributes?.unit_of_measurement||"")}</span>`),d&&(n+=`<span class="pc-chip" data-entity="${h(r.approach_factor)}"><ha-icon icon="mdi:target"></ha-icon>${h(e[r.approach_factor].state)}${h(e[r.approach_factor]?.attributes?.unit_of_measurement||"")}</span>`),n+="</div></div>"}return n+="</div>",i?n:""}function Mn(t,e,o){let i=!1,n='<div class="pc-section pc-section-schedule">';n+='<div class="pulse-section-label">Schedule</div>';for(let a of t){let s=Y(a.entity),r=o?.zoneEntities?.[s]||{},l=r.next_schedule&&e[r.next_schedule],p=r.schedule_deviation&&e[r.schedule_deviation],c=r.preheat_advisor&&e[r.preheat_advisor],u=r.comfort_target&&e[r.comfort_target];if(!l&&!p&&!c&&!u)continue;i=!0;let m=a.name||e[a.entity]?.attributes?.friendly_name||s;if(n+=`<div class="pc-system-row"><span class="pc-system-label">${h(m)}</span>`,n+='<div class="pc-zone-chips">',l){let d=r.next_sched_temp&&e[r.next_sched_temp]?` \u2192 ${h(e[r.next_sched_temp].state)}${h(e[r.next_sched_temp]?.attributes?.unit_of_measurement||"\xB0C")}`:"";n+=`<span class="pc-chip" data-entity="${h(r.next_schedule)}"><ha-icon icon="mdi:calendar-clock"></ha-icon>${h(e[r.next_schedule].state)}${d}</span>`}p&&(n+=`<span class="pc-chip" data-entity="${h(r.schedule_deviation)}"><ha-icon icon="mdi:swap-vertical"></ha-icon>${h(e[r.schedule_deviation].state)}${h(e[r.schedule_deviation]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),c&&(n+=`<span class="pc-chip" data-entity="${h(r.preheat_advisor)}"><ha-icon icon="mdi:radiator"></ha-icon>${h(e[r.preheat_advisor].state)}</span>`),u&&(n+=`<span class="pc-chip" data-entity="${h(r.comfort_target)}"><ha-icon icon="mdi:target"></ha-icon>${h(e[r.comfort_target].state)}${h(e[r.comfort_target]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),n+="</div></div>"}return n+="</div>",i?n:""}function rl(){return ue("graph-grad")}function sl(t,e){let o=e&&e.length>0?e:Dt;return o[t%o.length]}function ll(t,e,o){let n=[];for(let l of t){let p=Pt(l.data,300,e,48);p&&n.push({...p,color:l.color,entityId:l.entityId})}if(n.length===0){let l=sa(t,300,e);if(!l.some(u=>u.d!==""))return'<div class="pc-chart-empty">No data available</div>';let c=`<svg viewBox="0 0 300 ${e}" role="img" aria-label="${h(o)}" class="pc-chart-svg" preserveAspectRatio="none">`;for(let u of l)u.d!==""&&(c+=`<path d="${u.d}" fill="none" stroke="${$(u.color)}" stroke-width="var(--pc-chart-line-width, 1.5)" data-entity="${h(u.entityId)}" />`);return c+="</svg>",c}let a=n.map(()=>rl()),s=wn("graph-glow"),r=`<svg viewBox="0 0 300 ${e}" role="img" aria-label="${h(o)}" class="pc-chart-svg" preserveAspectRatio="none">`;r+="<defs>";for(let l=0;l<n.length;l++)r+=`<linearGradient id="${a[l]}" x1="0" y1="0" x2="0" y2="1">`,r+=`<stop offset="0%" stop-color="${$(n[l].color)}" stop-opacity="0.25"/>`,r+=`<stop offset="100%" stop-color="${$(n[l].color)}" stop-opacity="0"/>`,r+="</linearGradient>";r+=Ft(s,.6),r+="</defs>";for(let l=0;l<n.length;l++){let p=n[l];r+=`<path d="${p.areaPath}" fill="url(#${a[l]})" />`,r+=`<path d="${p.linePath}" fill="none" stroke="${$(p.color)}" stroke-width="var(--pc-chart-line-width, 1.5)" filter="url(#${s})" data-entity="${h(p.entityId)}" />`}return r+="</svg>",r}function Fn(t,e,o,i,n){let a=t.attribute||"current_temperature",s=t.stacked===!0,r=Number(t.height)||80,l=t.palette||void 0,p=t.entities||e.map(u=>u.entity);if(p.length===0)return"";let c='<div class="pc-section pc-section-graph">';return s?(c+=En(p,"current_temperature","Temperature",r,l,o,i,n,e),c+=En(p,"current_humidity","Humidity",r,l,o,i,n,e)):c+=En(p,a,a==="current_humidity"?"Humidity":"Temperature",r,l,o,i,n,e),c+="</div>",c}function En(t,e,o,i,n,a,s,r,l){let p=[],c=[],u=e==="current_humidity"||e==="humidity";for(let g=0;g<t.length;g++){let w=t[g],v=sl(g,n),b=Y(w),y=r?.zoneEntities?.[b]||{},_=l?.find(k=>k.entity===w),A=(u?Yt(w,s,y,_):ht(w,s,y,_))?.entityId||w,C=a.data[A]||[],M=_?.name||s[w]?.attributes?.friendly_name||b,E=s[w]?.attributes?.[e],z=u?"%":s[w]?.attributes?.unit_of_measurement||"\xB0C";p.push({entityId:A,data:C,color:v}),c.push({label:M,color:v,value:E!=null?`${E}${z}`:"--"})}let m=c.map(g=>g.label).join(", "),d=`${o} history for ${m}`,f=`<div class="pulse-section-label">${h(o)}</div>`;return f+=`<div class="pc-chart-container" style="height:${$(i)}px">`,f+=ll(p,i,d),f+="</div>",f+=xe(c),f}function In(t,e,o){let i=Number(t.size)||120,n=t.source,a=[];if(n==="api_breakdown"?a=cl(e,o):n==="homekit_saved"?a=pl(e,o):t.segments&&(a=dl(t.segments,o)),a.length===0)return"";let s='<div class="pc-section pc-section-donut">',r={api_breakdown:"API Breakdown",homekit_saved:"HomeKit Saved"},l={api_breakdown:"Calls",homekit_saved:"Saved"},p=n&&r[n]||"Breakdown",c=n&&l[n]||"Total";s+=`<div class="pulse-section-label">${h(p)}</div>`,s+=`<div class="pc-donut-container" style="width:${$(i)}px;height:${$(i)}px">`;let{html:u}=go(a,{size:i,centerLabel:c});s+=u,s+="</div>";let m=a.map(d=>({label:d.label,color:d.color,value:String(Math.round(d.value))}));return s+=xe(m),s+="</div>",s}function cl(t,e){let o=t.api_breakdown;if(!o||!e[o])return[];let i=e[o].attributes;return!i||typeof i!="object"?(Ot("api_call_breakdown entity has no attributes"),[]):bo(i,Dt)}function pl(t,e){if(!t.homekit_connected)return[];let o=e[t.homekit_connected];if(!o)return[];let i=o.attributes||{},n=t.homekit_reads_saved?e[t.homekit_reads_saved]:null,a=t.homekit_writes_saved?e[t.homekit_writes_saved]:null,s=n?Number(n.state)||0:Number(i.reads_saved_today)||0,r=a?Number(a.state)||0:Number(i.writes_saved_today)||0,l=[];return(s>0||r>0)&&(l.push({label:"Reads Saved",value:s,color:Dt[0]}),l.push({label:"Writes Saved",value:r,color:Dt[1]})),l}function dl(t,e){return t.map((o,i)=>({label:o.label||o.entity,value:Math.max(0,Number(e[o.entity]?.state)||0),color:o.color||Dt[i%Dt.length]}))}function So(t,e,o){let n=Date.now()-o,a=o/e,s=[],r=0,l=null;for(;r<t.length&&t[r].t<n;)isFinite(t[r].v)&&(l=Math.round(t[r].v*10)/10),r++;for(let p=0;p<e;p++){let c=n+p*a,u=c+a,m=c+a/2,d=0,f=0;for(;r<t.length&&t[r].t<u;)t[r].t>=c&&isFinite(t[r].v)&&(d+=t[r].v,f++),r++;f>0&&(l=Math.round(d/f*10)/10),s.push({value:l,time:m,label:dt(new Date(m))})}return s}function ko(t,e,o={}){let i=t.length;if(i===0)return'<div class="pc-strip-container"><div class="pc-chart-empty">No data</div></div>';let n=o.emptyColor||"var(--pulse-disabled)",a=o.emptyOpacity??.3,s=o.ariaLabel||"",r=JSON.stringify(t.map(p=>({v:p.value,l:p.label}))),l=`<div class="pc-strip-container" data-slots='${h(r)}'>`;l+=`<svg viewBox="0 0 ${i} 1" preserveAspectRatio="none" role="img" aria-label="${h(s)}" style="width:100%;height:100%;display:block">`;for(let p=0;p<i;p++){let c=t[p].value,u=c!==null?e(c):n,m=c!==null?1:a;l+=`<rect x="${p}" y="0" width="1.05" height="1" fill="${$(u)}" opacity="${m}"/>`}if(l+="</svg>",o.nowPct!==void 0){let p=Math.min(100,Math.max(0,o.nowPct));l+=`<div class="pc-now-marker" style="left:${p.toFixed(1)}%"></div>`}return l+="</div>",l}function Se(t,e,o={}){let i=t.length;if(i===0)return'<div class="pc-cells"><div class="pc-chart-empty">No data</div></div>';let n=JSON.stringify(t.map(s=>({v:s.value,l:s.label}))),a=`<div class="pc-cells" data-slots='${h(n)}'>`;for(let s=0;s<i;s++){let r=t[s].value,l=t[s].label;if(r!==null){let p=e(r),c=$(p);a+=`<div class="pc-cell" style="background:${c};color:${c}" data-hour="${h(l)}" data-score="${r}"></div>`}else a+=`<div class="pc-cell pc-cell-empty" data-hour="${h(l)}"></div>`}return a+="</div>",a}function To(){let t=document.createElement("div");t.className="pc-strip-tooltip",t.style.display="none";let e=null;return{element:t,show(o,i,n){e&&(clearTimeout(e),e=null),t.textContent=n,t.style.display="",t.style.left=`${i}px`},hide(){e=setTimeout(()=>{t.style.display="none"},50)}}}function ua(){let t=document.createElement("div");t.className="pc-strip-tooltip pc-strip-tooltip-fixed",t.style.display="none";let e=null;return{element:t,show(o,i,n){e&&(clearTimeout(e),e=null),t.textContent=n,t.style.display="",t.style.left=`${i}px`,t.style.top=`${o.top-28}px`},hide(){e=setTimeout(()=>{t.style.display="none"},50)}}}function Ao(t,e=5){let o=new Date,i=Date.now()-t,n="";for(let a=0;a<e-1;a++){let s=new Date(i+a/(e-1)*t);n+=`<span class="pc-time-label">${dt(s)}</span>`}return n+=`<span class="pc-time-label">${dt(o)}</span>`,n}function Jt(t,e,o){let i=Math.max(0,Math.min(1,(t-e.left)/e.width));return Math.min(o-1,Math.floor(i*o))}var ul=2e3;function Nn(t,e,o,i){let n=null,a=r=>{let l=o.getBoundingClientRect(),p=r-l.left;p>=0&&p<=l.width&&(e.style.left=`${i+p}px`,e.style.display="")},s=()=>{e.style.display="none",n&&(clearTimeout(n),n=null)};t.addEventListener("pointermove",r=>{r.pointerType!=="touch"&&a(r.clientX)}),t.addEventListener("pointerleave",s),t.addEventListener("pointerdown",r=>{r.pointerType==="touch"&&(a(r.clientX),n&&clearTimeout(n),n=setTimeout(s,ul))}),t.addEventListener("pointerup",r=>{r.pointerType})}function zn(t,e,o,i=""){if(!e||e.length===0)return;let n=e.length,a=null,s=null;t.addEventListener("pointerdown",r=>{if(r.pointerType==="touch"&&r.isPrimary===!1)return;let l=t.getBoundingClientRect();a=Jt(r.clientX,l,n),t.setPointerCapture(r.pointerId),s||(s=document.createElement("div"),s.className="pc-strip-drag-highlight",t.style.position="relative",t.appendChild(s)),s.style.display="",s.style.left=`${(a/n*100).toFixed(1)}%`,s.style.width="0%"}),t.addEventListener("pointermove",r=>{if(a===null||!s)return;let l=t.getBoundingClientRect(),p=Jt(r.clientX,l,n),c=Math.min(a,p),u=Math.max(a,p);s.style.left=`${(c/n*100).toFixed(1)}%`,s.style.width=`${((u-c+1)/n*100).toFixed(1)}%`}),t.addEventListener("pointerup",r=>{if(a===null){a=null;return}let l=t.getBoundingClientRect(),p=Jt(r.clientX,l,n),c=Math.min(a,p),u=Math.max(a,p),m=e.slice(c,u+1).filter(d=>d.v!==null);if(m.length>0){let d=m.map(S=>S.v),f=(d.reduce((S,A)=>S+A,0)/d.length).toFixed(1),g=Math.min(...d),w=Math.max(...d),v=e[c]?.l||"",b=e[u]?.l||"",y=`${v} \u2013 ${b}: avg ${f}${i}, ${g}${i} \u2013 ${w}${i}`,_=t.getBoundingClientRect();o.show(_,(c+u)/2/n*_.width,y),setTimeout(()=>o.hide(),3e3)}a=null})}var Ln=24,ml=Ln;function hl(t){if(!Array.isArray(t)||t.length===0)return null;let e=Date.now()-Ln*3600*1e3,o=t.filter(n=>n&&n.t>=e&&Number.isFinite(n.v));return o.length===0?null:o.reduce((n,a)=>n+a.v,0)/o.length}function Co(t,e,o,i){let n='<div class="pc-strip-rows">';n+='<div class="pc-strip-crosshair"></div>';let a=0,s=0,r="\xB0C";for(let l of t){let{entityId:p,zoneName:c,zoneEntities:u,zoneState:m}=at(l,o,e),f=ht(p,e,u,l)?.entityId||p,g=i?.data?.[f]||[];m.unit&&(r=m.unit);let w=So(g,ml,Ln*3600*1e3),v=Se(w,rt),b=hl(g);b!==null&&(a+=b,s+=1);let y=b===null?"--":`${Z(b)}${h(m.unit||"\xB0C")}`,_=wt(m);n+=`<div class="pc-timeline-group-row pc-timeline-row${_}" data-entity="${h(p)}" data-zone="${h(c)}">`,n+=`<span class="pc-timeline-group-name pc-zone-label">${h(m.name)}</span>`,n+=v,n+=`<span class="pc-timeline-group-stat">${h(y)}</span>`,n+="</div>"}return n+="</div>",n+=fl(),n+=gl(a,s,r,t.length),n}function fl(){return'<div class="pc-timeline-group-axis"><span></span><div class="ticks"><span>\u221224h</span><span>\u221218h</span><span>\u221212h</span><span>\u22126h</span><span>now</span></div><span></span></div>'}function gl(t,e,o,i){let n=e>0?t/e:null,a=n===null?"\u2014":`${Z(n)}${h(o)}`;return'<div class="pc-timeline-group-footer">'+vl(o)+`<span><strong>Home avg ${h(a)}</strong> \xB7 ${i} zones</span></div>`}function vl(t){let e=t?.includes("F"),o=s=>e?Math.round(s*9/5+32):s,i=e?61:16,n='<span class="pc-temp-legend">',a=null;for(let s of yn){let r=s.upper;if(r!==null&&o(r)<i){a=r;continue}let l;r===null?l=`\u2265${a!==null?o(a):i}${t}`:a===null?l=`\u2264${o(r)}${t}`:l=`${o(a)}\u2013${o(r)}${t}`,n+=`<span class="pc-temp-legend-pill"><span class="pc-temp-legend-pip" style="background:${$(s.color)}"></span>${h(l)}</span>`,a=r}return n+="</span>",n}function ma(t,e,o,i,n){if(!t||t.length===0)return"";let a=Number(e?.hours_to_show)||24,s=e?.mode||"timeline",r=Number(e?.slots_per_hour)||2,p=(e?.attribute||"temperature")==="humidity",c=p?Be:rt,u=s==="heatmap"?a:a*r,m=a*36e5,d=Date.now()-m,f=(Date.now()-d)/m*100,g=p?"Humidity":"Thermal",w=s==="heatmap"?"Heatmap":"Timeline",v='<div class="pc-section pc-section-thermal-strip">';if(v+='<div class="pc-section-header">',v+=`<div class="pulse-section-label">${h(String(Number(a)))}h ${h(g)} ${h(w)}</div>`,v+='<span class="pc-section-subtitle">Tap a zone for details</span>',v+="</div>",s==="heatmap"&&!p)return v+='<div class="pc-zone-detail" id="timeline-detail"></div>',v+=Co(t,o,i,n),v+="</div>",v;v+='<div class="pc-zone-detail" id="timeline-detail"></div>',v+='<div class="pc-strip-rows">',v+='<div class="pc-strip-crosshair"></div>';for(let b of t){let{entityId:y,zoneName:_,zoneEntities:S,zoneState:A}=at(b,i,o),M=(p?Yt(y,o,S,b):ht(y,o,S,b))?.entityId||y,E=b.name||o[y]?.attributes?.friendly_name||_,z=n?.data?.[M]||[],k=wt(A);if(v+=`<div class="pc-timeline-row${k}" data-zone="${h(_)}" data-entity="${h(y)}">`,v+=`<span class="pc-zone-label">${h(E)}</span>`,z.length<2){let x=!!o[M],T=M in(n?.data||{});v+=`<div class="pc-strip-container"><div class="pc-chart-empty">${h(x&&!T?"Waiting for data":"No data")}</div></div>`}else{let x=So(z,u,m),F=`${E} ${p?"humidity":"temperature"} over ${a}h`;s==="heatmap"?v+=Se(x,c,{ariaLabel:F}):v+=ko(x,c,{ariaLabel:F,nowPct:f})}v+="</div>"}return v+="</div>",v+='<div class="pc-time-axis">',v+=Ao(m),v+="</div>",v+="</div>",v}var bl={Comfortable:100,Warm:70,Cool:70,"Too Warm":40,"Too Cool":40};function ha(t,e,o,i){if(t==null||e===null||e===void 0||isNaN(t)||isNaN(e))return null;let n=100;if(n-=Math.min(50,Math.abs(t-e)*10),o!=null&&(n-=Math.min(25,Math.abs(o-45)*.5)),i!=null){let a=bl[i]??50;n=n*.7+a*.3}return Math.max(0,Math.min(100,Math.round(n)))}function fa(t){if(t>=80)return`rgba(52, 199, 89, ${(.35+t/100*.55).toFixed(2)})`;if(t>=50){let e=(t-50)/30;return`rgba(${Math.round(255-e*50)}, ${Math.round(159+e*40)}, 10, 0.65)`}return`rgba(255, 69, 58, ${(.35+(50-t)/50*.5).toFixed(2)})`}function Mo(t,e,o=72e5){if(t.length===0)return null;let i=0,n=t.length-1;for(;i<n;){let r=i+n>>1;t[r].t<e?i=r+1:n=r}let a=null,s=1/0;for(let r=Math.max(0,i-1);r<=Math.min(t.length-1,i);r++){let l=Math.abs(t[r].t-e);l<s&&isFinite(t[r].v)&&(s=l,a=t[r].v)}return s<=o?a:null}function ga(t,e,o,i,n){if(!t||t.length===0)return"";let a=Number(e?.slots_per_hour)||1,s=Number(e?.hours_to_show)||24,r=e?.mode||"heatmap",l=a*s,p=s*36e5,c=Date.now()-p,u=(Date.now()-c)/p*100,m=r==="timeline"?"Comfort Timeline":"Comfort Heatmap",d='<div class="pc-section pc-section-comfort-strip">';d+='<div class="pc-section-header">',d+=`<div class="pulse-section-label">${h(String(Number(s)))}h ${h(m)}</div>`,d+='<span class="pc-section-subtitle">Tap a zone for details</span>',d+="</div>",d+='<div class="pc-zone-detail" id="heatmap-detail"></div>',d+='<div class="pc-heatmap-body">',d+='<div class="pc-strip-crosshair"></div>';for(let f=0;f<t.length;f++){let g=t[f],{entityId:w,zoneName:v,zoneEntities:b,zoneState:y}=at(g,i,o),_=g.name||o[w]?.attributes?.friendly_name||v,A=ht(w,o,b,g).entityId,M=Yt(w,o,b,g)?.entityId||null,E=n?.data?.[A]||[],z=M?n?.data?.[M]||[]:[],k=o[w]?.attributes?.temperature??null,x=b.comfort_level,T=x&&o[x]?.state||null,F=[],B=p/l,I=null;if(E.length>0){let N=Mo(E,c,1/0),O=z.length>0?Mo(z,c,1/0):null;N!==null&&(I=ha(N,k,O,T))}for(let N=0;N<l;N++){let P=c+N*B+B/2,H=Mo(E,P),W=Mo(z,P),R=ha(H,k,W,T);R!==null&&(I=R);let D=new Date(P),U=dt(D);F.push({value:I,time:P,label:U})}let q=wt(y);d+=`<div class="pc-heatmap-row${q}" data-zone="${h(v)}" data-idx="${f}">`,d+=`<span class="pc-zone-label">${h(_)}</span>`;let L=`${_} comfort over ${s}h`;r==="timeline"?d+=ko(F,fa,{ariaLabel:L,nowPct:u}):d+=Se(F,fa,{ariaLabel:L}),d+="</div>"}return d+="</div>",d+='<div class="pc-heatmap-time-axis">',d+=Ao(p),d+="</div>",d+='<div class="pc-heatmap-legend">',d+='<div class="pc-legend-item"><div class="pc-legend-swatch pc-legend-swatch-good"></div>\u226580</div>',d+='<div class="pc-legend-item"><div class="pc-legend-swatch pc-legend-swatch-fair"></div>50\u201379</div>',d+='<div class="pc-legend-item"><div class="pc-legend-swatch pc-legend-swatch-poor"></div>&lt;50</div>',d+="</div>",d+="</div>",d}function va(t,e,o,i,n,a,s){let r=a+(s-a)*.35,l=a+(s-a)*.65,p=t-o,c=e-i,u=t+o,m=e+i,d=`M${a},${p.toFixed(1)}`;return d+=` C${r.toFixed(1)},${p.toFixed(1)} ${l.toFixed(1)},${c.toFixed(1)} ${s},${c.toFixed(1)}`,d+=` L${s},${m.toFixed(1)}`,d+=` C${l.toFixed(1)},${m.toFixed(1)} ${r.toFixed(1)},${u.toFixed(1)} ${a},${u.toFixed(1)}`,d+=" Z",d}function wl(t,e,o,i){let n=o+(i-o)*.35,a=o+(i-o)*.65;return`M${o},${t.toFixed(1)} C${n.toFixed(1)},${t.toFixed(1)} ${a.toFixed(1)},${e.toFixed(1)} ${i},${e.toFixed(1)}`}function Rn(t,e,o){if(!t||t.length===0)return"";let i=Rt(),n=[],a=!1;for(let k of t){let{entityId:x,zoneEntities:T,zoneState:F}=at(k,o,e);(F.heatingPower>0||T.heating_power||e[x]?.attributes?.heating_power!==void 0)&&(a=!0),n.push({name:F.name,power:F.heatingPower,temp:F.currentTemp,target:F.targetTemp,unit:F.unit,hvacAction:F.hvacAction})}let s=n.length>0?Math.round(n.reduce((k,x)=>k+x.power,0)/n.length):0,r='<div class="pc-section pc-section-energy-flow">';if(r+='<div class="pc-section-header">',r+='<div class="pulse-section-label">Energy Flow</div>',a&&(r+=`<span class="pc-energy-flow-header-value" style="color:${$(ne.heating.fallback)}">${h(s)}% avg</span>`),r+="</div>",!a)return r+='<div class="pc-chart-empty">No heating data</div></div>',r;let l=360,p=n.length<=3?44:n.length<=6?38:34,c=15,u=Math.max(80,n.length*p+30),m=n.length*p,d=Math.max(40,Math.min(m*.7,m-16)),f=Math.max(36,d*.6),g=Math.max(50,f/2+14),w=l-60,v=u/2,b=22,y=2,_=d/Math.max(n.length,1)*.7,S=ne.heating.fallback,A="var(--pulse-disabled)",C=n.some(k=>k.power>0||k.hvacAction==="heating"||k.hvacAction==="cooling"),M=n.filter(k=>k.power>0).length;r+=`<svg viewBox="0 0 ${l} ${u}" role="img" aria-label="Energy flow from boiler to zones" style="width:100%;height:${$(u)}px;display:block">`,r+="<defs>",r+=Ft("flow-glow",ye(l,360).toFixed(1));for(let k=0;k<n.length;k++){let x=n[k].power>0||n[k].hvacAction==="heating"||n[k].hvacAction==="cooling",T=x?S:A,F=n[k].power;if(x){let B=F>0?(4.5-F/100*3.3).toFixed(1):"5.0";r+=`<linearGradient id="flow-g${k}" x1="-0.5" y1="0" x2="0.5" y2="0" gradientUnits="objectBoundingBox">`,r+=`<stop offset="0%" stop-color="${$(T)}" stop-opacity="0.3"/>`,r+=`<stop offset="50%" stop-color="${$(T)}" stop-opacity="1.0"/>`,r+=`<stop offset="100%" stop-color="${$(T)}" stop-opacity="0.3"/>`,i||(r+=`<animate attributeName="x1" from="-0.5" to="0.5" dur="${B}s" repeatCount="indefinite"/>`,r+=`<animate attributeName="x2" from="0.5" to="1.5" dur="${B}s" repeatCount="indefinite"/>`),r+="</linearGradient>"}else r+=`<linearGradient id="flow-g${k}" x1="0" y1="0" x2="1" y2="0">`,r+=`<stop offset="0%" stop-color="${$(T)}" stop-opacity="0.15"/>`,r+=`<stop offset="50%" stop-color="${$(T)}" stop-opacity="0.25"/>`,r+=`<stop offset="100%" stop-color="${$(T)}" stop-opacity="0.1"/>`,r+="</linearGradient>"}r+="</defs>";let E=C?"rgba(255, 152, 0, 0.15)":"color-mix(in srgb, var(--pulse-text-primary) 8%, transparent)",z=C?"rgba(255, 152, 0, 0.25)":"color-mix(in srgb, var(--pulse-text-primary) 15%, transparent)";r+=`<rect x="${g-f/2}" y="${v-d/2}" width="${f}" height="${d}" rx="8" fill="${$(E)}" stroke="${$(z)}" stroke-width="1"/>`,r+=`<text x="${g}" y="${v-d/2-6}" text-anchor="middle" font-size="10" fill="var(--pulse-text-secondary)">Boiler</text>`;for(let k=0;k<n.length;k++){let x=n[k],T=c+k*p+20,F=x.power>0?y+x.power/100*(b-y):y,B=x.power>0||x.hvacAction==="heating"||x.hvacAction==="cooling",I=B?' class="pc-ribbon-active"':"",q=v+(k-(n.length-1)/2)*_,L=va(q,T,F/2,F/2,l,g+f/2,w-12);if(r+=`<path d="${L}" fill="url(#flow-g${k})"${I}${B?' filter="url(#flow-glow)"':""} data-zone="${h(x.name)}" data-zone-idx="${k}">`,r+=`<title>${h(x.name)}: ${Math.round(x.power)}% heating power</title></path>`,x.power>0&&!i){let W=Ki(x.power,20,M),R=Ji(x.power),D=Qi(F,b),U=(D*.8).toFixed(1),G=wl(q,T,g+f/2,w-12);r+=`<g class="pc-flow-particles" data-zone="${h(x.name)}" data-zone-idx="${k}" style="will-change:transform">`;for(let tt=0;tt<W;tt++){let et=(tt*(R/W)).toFixed(2);r+=`<circle r="${D.toFixed(1)}" fill="${$(S)}" opacity="0.8"`,r+=` filter="drop-shadow(0 0 ${U}px ${$(S)})">`,r+=`<animateMotion dur="${R.toFixed(1)}s" begin="${et}s" repeatCount="indefinite"`,r+=` path="${G}"/>`,r+="</circle>"}r+="</g>"}let N=B?"var(--pulse-text-primary)":"var(--pulse-text-secondary)",O=B?' font-weight="500"':"";r+=`<text x="${w}" y="${(T-1).toFixed(1)}" font-size="14" fill="${$(N)}"${O}>${h(x.name)}</text>`;let P=B?$(S):"var(--pulse-text-secondary)",H=B?`${x.hvacAction==="cooling"?"Cooling":"Heating"} ${Math.round(x.power)}%${x.temp!==null?` \xB7 ${Z(x.temp)}${x.unit}`:""}`:`Idle${x.temp!==null?` \xB7 ${Z(x.temp)}${x.unit}`:""}`;r+=`<text x="${w}" y="${(T+14).toFixed(1)}" font-size="10" fill="${P}">${h(H)}</text>`}return r+="</svg>",r+="</div>",r}function ba(t,e,o,i){if(!t||!e||e.length===0)return!1;let n=t.querySelector("svg");if(!n)return!1;let a=[];for(let k of e){let{zoneState:x}=at(k,i,o);a.push({name:x.name,power:x.heatingPower,temp:x.currentTemp,unit:x.unit,hvacAction:x.hvacAction})}let s=n.querySelectorAll("path[data-zone]");if(s.length!==a.length)return!1;let r=ne.heating.fallback,l="var(--pulse-disabled)",p=a.some(k=>k.power>0||k.hvacAction==="heating"||k.hvacAction==="cooling"),c=360,u=a.length<=3?44:a.length<=6?38:34,m=15,d=Math.max(80,a.length*u+30),f=a.length*u,g=Math.max(40,Math.min(f*.7,f-16)),w=Math.max(36,g*.6),v=Math.max(50,w/2+14),b=c-60,y=d/2,_=22,S=2,A=g/Math.max(a.length,1)*.7,C=Math.round(a.reduce((k,x)=>k+x.power,0)/a.length),M=t.querySelector(".pc-energy-flow-header-value");M&&(M.textContent=`${C}% avg`);let E=n.querySelector("rect");E&&(E.setAttribute("fill",p?"rgba(255, 152, 0, 0.15)":"color-mix(in srgb, var(--pulse-text-primary) 8%, transparent)"),E.setAttribute("stroke",p?"rgba(255, 152, 0, 0.25)":"color-mix(in srgb, var(--pulse-text-primary) 15%, transparent)"),E.setAttribute("stroke-width",p?"0.5":"1"));let z=n.querySelectorAll("text");for(let k=0;k<a.length;k++){let x=a[k],T=s[k],F=x.power>0||x.hvacAction==="heating"||x.hvacAction==="cooling",B=m+k*u+20,I=x.power>0?S+x.power/100*(_-S):S,q=y+(k-(a.length-1)/2)*A,L=va(q,B,I/2,I/2,c,v+w/2,b-12);T.setAttribute("d",L),F?(T.classList.add("pc-ribbon-active"),T.setAttribute("filter","url(#flow-glow)")):(T.classList.remove("pc-ribbon-active"),T.removeAttribute("filter"));let N=T.querySelector("title");N&&(N.textContent=`${x.name}: ${Math.round(x.power)}% heating power`);let O=n.querySelector(`g.flow-particles[data-zone-idx="${k}"]`);O&&(O.style.display=x.power>0?"":"none");let P=n.querySelector(`#flow-g${k}`);if(P){let U=F?r:l,G=P.querySelectorAll("stop"),tt=P.querySelectorAll("animate");if(F){let et=x.power>0?(4.5-x.power/100*3.3).toFixed(1):"5.0";G.length>=3&&(G[0].setAttribute("stop-color",U),G[0].setAttribute("stop-opacity","0.3"),G[1].setAttribute("stop-color",U),G[1].setAttribute("stop-opacity","1.0"),G[2].setAttribute("stop-color",U),G[2].setAttribute("stop-opacity","0.3"));for(let lt of tt)lt.setAttribute("dur",`${et}s`);P.setAttribute("gradientUnits","objectBoundingBox")}else{G.length>=3&&(G[0].setAttribute("stop-color",U),G[0].setAttribute("stop-opacity","0.15"),G[1].setAttribute("stop-color",U),G[1].setAttribute("stop-opacity","0.25"),G[2].setAttribute("stop-color",U),G[2].setAttribute("stop-opacity","0.1"));for(let et of tt)et.remove()}}let H=1+k*2,W=2+k*2,R=z[H],D=z[W];if(R&&(R.textContent=x.name,R.setAttribute("fill",F?"var(--pulse-text-primary)":"var(--pulse-text-secondary)"),F?R.setAttribute("font-weight","500"):R.removeAttribute("font-weight")),D){let U=F?`${x.hvacAction==="cooling"?"Cooling":"Heating"} ${Math.round(x.power)}%${x.temp!==null?` \xB7 ${Z(x.temp)}${x.unit}`:""}`:`Idle${x.temp!==null?` \xB7 ${Z(x.temp)}${x.unit}`:""}`;D.textContent=U,D.setAttribute("fill",F?r:"var(--pulse-text-secondary)")}}return!0}var wa=6,Hn=2;function Dn(t,e,o,i,n,a){let s=n*Math.PI/180,r=a*Math.PI/180,l=a-n>180?1:0;return`M${(t+o*Math.cos(s)).toFixed(2)},${(e+o*Math.sin(s)).toFixed(2)} A${o.toFixed(2)},${o.toFixed(2)} 0 ${l} 1 ${(t+o*Math.cos(r)).toFixed(2)},${(e+o*Math.sin(r)).toFixed(2)} L${(t+i*Math.cos(r)).toFixed(2)},${(e+i*Math.sin(r)).toFixed(2)} A${i.toFixed(2)},${i.toFixed(2)} 0 ${l} 0 ${(t+i*Math.cos(s)).toFixed(2)},${(e+i*Math.sin(s)).toFixed(2)} Z`}function On(t,e,o,i,n){if(!t||t.length===0)return"";let a=Rt(),s=Number(e?.size)||280,r=e?.attribute||"temperature",l=r==="temperature"||r==="both",p=r==="humidity"||r==="both",c=s/2,u=s/2,m=s*120/280,d=1.5,w=(360-d*t.length)/t.length,v=[];for(let L of t){let{entityId:N,zoneState:O}=at(L,i,o);v.push({name:O.name,temp:O.currentTemp,target:O.targetTemp,power:O.heatingPower,humidity:O.humidity,hvacAction:O.hvacAction,entityId:N,unit:O.unit,rowClass:wt(O)})}let b=e?.outdoor_temp_entity,y=b||i?.hubEntities?.outside_temp,_=null;if(y&&o[y]){let L=o[y];Q(L)||(_=L.attributes?.temperature!==void 0?String(L.attributes.temperature):L.state)}let S=y&&o[y]?.attributes?.unit_of_measurement||"\xB0C",A=e?.outdoor_humidity_entity,C=null;if(A&&o[A]){let L=o[A];Q(L)||(C=L.attributes?.humidity!==void 0?String(L.attributes.humidity):L.state)}let M="",E=r==="humidity"?C!==null?`${h(C)}%`:"--":_!==null?`${h(_)}${h(S)}`:"--";r!=="humidity"&&p&&C!==null&&(M=`${h(C)}%`);let k={temperature:"Home Thermal View",humidity:"Home Humidity View",both:"Home Climate View"}[r]||"Home Thermal View",x=`<div class="pc-section pc-section-radial" data-attribute="${h(r)}"${b?` data-outdoor-temp-entity="${h(b)}"`:""}${A?` data-outdoor-humidity-entity="${h(A)}"`:""}>`;x+=`<div class="pulse-section-label">${h(k)}</div>`,x+='<div class="pc-radial-container">';let T=`r${Math.random().toString(36).slice(2,9)}`,F=`radial-glow-${T}`,B=L=>`heat-shimmer-${T}-${L}`;if(x+=`<svg class="pc-radial-svg" viewBox="0 0 ${s} ${s}" width="${s}" height="${s}" role="img" aria-label="${h(k)}">`,x+="<defs>",x+=Ft(F,ye(s,280).toFixed(1)),!a)for(let L=0;L<v.length;L++){let N=v[L],O=fn(N.power,s);if(O<=0)continue;let P=45/Math.max(w,10),H=(.02*P).toFixed(4),W=(.04*P).toFixed(4);x+=`<filter id="${B(L)}" x="-5%" y="-5%" width="110%" height="110%">`,x+=`<feTurbulence type="turbulence" baseFrequency="${H} ${W}" numOctaves="2" result="turb">`,x+=`<animate attributeName="baseFrequency" values="${H} ${W};${(parseFloat(H)*1.5).toFixed(4)} ${W};${H} ${W}" dur="4s" repeatCount="indefinite"/>`,x+="</feTurbulence>",x+=`<feDisplacementMap in="SourceGraphic" in2="turb" scale="${O.toFixed(1)}" xChannelSelector="R" yChannelSelector="G"/>`,x+="</filter>"}x+="</defs>";for(let L=0;L<v.length;L++){let N=v[L],O=L*(w+d)-90,P=O+w,H=N.power>0||N.hvacAction==="heating"||N.hvacAction==="cooling",W=H?" pc-arc-active":"",R=[h(N.name)];l&&R.push(N.temp!==null?`${Z(N.temp)}${N.unit}`:"--"),p&&N.humidity!==null&&R.push(`${Math.round(N.humidity)}%`),R.push(H?`${N.hvacAction==="cooling"?"Cooling":"Heating"} ${N.power}%`:"Idle");let D=R.join(", ");x+=`<g class="pc-arc-group${W}" data-idx="${L}">`;let U=p&&r==="both"?m+Hn+wa+4:m+4,G=m-28-4,tt=Dn(c,u,U,G,O-d/2,P+d/2);if(x+=`<path d="${tt}" fill="transparent" class="pc-arc-hit"/>`,l){let et=N.temp!==null?rt(N.temp):"var(--pulse-disabled)",lt=8+N.power/100*20,vt=m-lt,St=Dn(c,u,m,vt,O,P);if(x+=`<path d="${St}" fill="${$(et)}" class="pc-arc-path"`,fn(N.power,s)>0&&!a?x+=` filter="url(#${B(L)})"`:H&&(x+=` filter="url(#${F})"`),x+=`><title>${D}</title>`,H&&!a){let Mt=N.power>0?(4.5-N.power/100*3).toFixed(1):"5.0";x+=`<animate attributeName="opacity" values="1;0.82;1" dur="${Mt}s" repeatCount="indefinite"/>`}x+="</path>"}if(p&&N.humidity!==null){let et=Be(N.humidity),lt,vt;if(r==="both")lt=m+Hn+wa,vt=m+Hn;else{let it=8+N.power/100*20;lt=m,vt=m-it}let St=Dn(c,u,lt,vt,O,P);x+=`<path d="${St}" fill="${$(et)}" class="pc-arc-path" opacity="0.8">`,x+=`<title>${D}</title>`,x+="</path>"}x+="</g>"}x+="</svg>";let I=8;if(l)for(let L of v){let N=8+L.power/100*20;N>I&&(I=N)}let q=Math.round((m-I)*2);x+=`<div class="pc-center-info" id="radial-center" style="width:${q}px;height:${q}px">`,x+='<div class="pc-center-sheen" id="radial-sheen"></div>',x+=`<div class="pc-center-value">${E}</div>`,x+='<div class="pc-center-label">Outdoor</div>',x+=`<div class="pc-center-sub">${M}</div>`,x+="</div>",x+="</div>",x+='<div class="pc-zone-detail" id="radial-detail"></div>',x+='<div class="pc-radial-legend">';for(let L=0;L<v.length;L++){let N=v[L],O=r==="humidity"?N.humidity!==null?Be(N.humidity):"var(--pulse-disabled)":N.temp!==null?rt(N.temp):"var(--pulse-disabled)",P="";l&&(P+=N.temp!==null?`${Z(N.temp)}${N.unit}`:"--"),l&&p&&(P+=" \xB7 "),p&&(P+=N.humidity!==null?`${Math.round(N.humidity)}%`:"--"),x+=`<div class="pc-legend-item${N.rowClass}" data-idx="${L}">`,x+=`<span class="pc-legend-dot" style="background:${$(O)}"></span>`,x+=`<span class="pc-legend-name">${h(N.name)}</span> <span class="pc-legend-temp">${h(P)}</span>`,x+="</div>"}return x+="</div>",x+="</div>",x}var yl=5,ya={green:"var(--pulse-tier-moderate)",amber:"var(--pulse-tier-strong)",red:"var(--pulse-tier-gale)"},_l={green:"mdi:check-circle",amber:"mdi:progress-clock",red:"mdi:alert-circle"};function xl(t){if(t.length===0)return{label:"All Good",color:"green",detail:"All zones off"};let e=t.filter(a=>a.currentTemp!==null&&a.currentTemp!==void 0&&a.targetTemp!==null&&a.targetTemp!==void 0&&Math.abs(a.currentTemp-a.targetTemp)<=1).length,o=t.length,i=e/o,n=o-e;return i>=.8?{label:"All Good",color:"green",detail:`${e} of ${o} zones at target`}:i>=.4?{label:"Warming Up",color:"amber",detail:`${n} zone${n!==1?"s":""} still catching up`}:{label:"Cold Start",color:"red",detail:`${n} of ${o} zones below target`}}function $l(t){let e=[],o=[],i=[];for(let n of t)n.isUnavailable?i.push(n):n.hvacAction==="off"||!n.targetTemp?o.push(n):e.push(n);return e.sort((n,a)=>{let s=n.currentTemp!==null&&n.currentTemp!==void 0&&n.targetTemp!==null?Math.abs(n.currentTemp-n.targetTemp):0;return(a.currentTemp!==null&&a.currentTemp!==void 0&&a.targetTemp!==null?Math.abs(a.currentTemp-a.targetTemp):0)-s}),o.sort((n,a)=>n.name.localeCompare(a.name)),i.sort((n,a)=>n.name.localeCompare(a.name)),[...e,...o,...i]}function Sl(t){if(t.length===0)return{onTarget:"--",avgActual:"--",avgTarget:"--",avgPower:"--"};let e=t.filter(r=>r.currentTemp!==null&&r.currentTemp!==void 0&&r.targetTemp!==null&&r.targetTemp!==void 0&&Math.abs(r.currentTemp-r.targetTemp)<=1).length,o=t.length,i=(t.reduce((r,l)=>r+(l.currentTemp??0),0)/o).toFixed(1),n=(t.reduce((r,l)=>r+(l.targetTemp??0),0)/o).toFixed(1),a=Math.round(t.reduce((r,l)=>r+l.heatingPower,0)/o),s=t[0].unit||"\xB0C";return{onTarget:`${e}/${o}`,avgActual:`${i}${s}`,avgTarget:`${n}${s}`,avgPower:`${a}%`}}function kl(t){let e=h(t.entityId),o=h(t.name),i=h(t.unit||"\xB0C"),n=!t.isUnavailable&&t.hvacAction!=="off"&&t.targetTemp,a,s;if(t.isUnavailable)a='<span class="pc-home-status-actual pc-off">--</span><span class="pc-home-status-arrow">\u2192</span><span class="pc-home-status-target">Unavailable</span>',s='<div class="pc-home-status-delta"><div class="pc-home-status-bar-track"><div class="pc-home-status-bar-center"></div></div><span class="pc-home-status-delta-text">--</span></div>';else if(!n)a=`<span class="pc-home-status-actual pc-off">${t.currentTemp!==null&&t.currentTemp!==void 0?`${h(t.currentTemp)}${i}`:"--"}</span><span class="pc-home-status-arrow"></span><span class="pc-home-status-target">Off</span>`,s='<div class="pc-home-status-delta"><div class="pc-home-status-bar-track"><div class="pc-home-status-bar-center"></div></div><span class="pc-home-status-delta-text">Off</span></div>';else if(a=`<span class="pc-home-status-actual">${t.currentTemp!==null&&t.currentTemp!==void 0?`${h(t.currentTemp)}${i}`:"--"}</span><span class="pc-home-status-arrow">\u2192</span><span class="pc-home-status-target">${h(t.targetTemp)}${i}</span>`,t.currentTemp!==null&&t.currentTemp!==void 0){let p=t.currentTemp-t.targetTemp,c=Math.abs(p),u=Math.min(c/yl,1)*50,m=p<0?`${$(50-u)}%`:"50%",d=`${$(u)}%`,f=c<1?"green":c<=2.5?"amber":"red",g=ya[f],v=`${p>=0?"+":"\u2212"}${h(c.toFixed(1))}\xB0`;s=`<div class="pc-home-status-delta"><div class="pc-home-status-bar-track"><div class="pc-home-status-bar-center"></div><div class="pc-home-status-bar-fill" style="left:${m};width:${d};background:${$(g)}"></div></div><span class="pc-home-status-delta-text" style="color:${$(g)}">${v}</span></div>`}else s='<div class="pc-home-status-delta"><div class="pc-home-status-bar-track"><div class="pc-home-status-bar-center"></div></div><span class="pc-home-status-delta-text">--</span></div>';return`<div class="pc-home-status-row${wt(t)}" role="button" tabindex="0" data-entity="${e}"><span class="pc-home-status-zone-name">${o}</span><div class="pc-home-status-temps">${a}</div>`+s+"</div>"}function Pn(t,e,o,i){if(!t||t.length===0)return"";let n=t.map(m=>at(m,o,e).zoneState),a=n.filter(m=>!m.isUnavailable&&m.hvacAction!=="off"&&m.targetTemp),s=xl(a),r=ya[s.color],l=_l[s.color],p=$l(n),c=Sl(a),u='<div class="pc-section pc-section-home-status">';u+='<div class="pulse-section-label">Home Status</div>',i?.show_hero===!1&&(u+='<div class="pc-home-status-hero">',u+=`<ha-icon class="pc-home-status-icon" icon="${h(l)}" style="color:${$(r)}"></ha-icon>`,u+=`<div class="pc-home-status-label" style="color:${$(r)}">${h(s.label)}</div>`,u+=`<div class="pc-home-status-detail">${h(s.detail)}</div>`,u+="</div>"),u+='<div class="pc-home-status-zones">';for(let m of p)u+=kl(m);return u+="</div>",u+='<div class="pc-home-status-summary">',u+=`<div class="pc-stat"><div class="pc-stat-value">${h(c.onTarget)}</div><div class="pc-stat-label">On Target</div></div>`,u+=`<div class="pc-stat"><div class="pc-stat-value">${h(c.avgActual)}</div><div class="pc-stat-label">Avg Actual</div></div>`,u+=`<div class="pc-stat"><div class="pc-stat-value">${h(c.avgTarget)}</div><div class="pc-stat-label">Avg Target</div></div>`,u+=`<div class="pc-stat"><div class="pc-stat-value">${h(c.avgPower)}</div><div class="pc-stat-label">Avg Power</div></div>`,u+="</div>",u+="</div>",u}var Bn={comfort:"comfort_level"};function Tl(t,e,o,i){if(!(t in Bn))return!0;let n=Bn[t];if(!e||e.length===0)return!1;for(let a of e){let s=Y(a.entity),l=(o?.zoneEntities?.[s]||{})[n];if(l&&!Q(i[l]))return!0}return!1}function _a(t,e,o,i){let n=Bn[t];if(!n)return null;let s=(o?.zoneEntities?.[e]||{})[n];if(!s)return null;let r=i[s];if(Q(r))return null;if(t==="comfort"){let p=r.attributes||{},c=parseFloat(p.temperature),u=parseFloat(p.comfort_target);if(!Number.isFinite(c)||!Number.isFinite(u))return null;let m=Math.abs(c-u);return Math.max(0,Math.min(100,Math.round(100-m*10)))}let l=parseFloat(r.state);return Number.isFinite(l)?l:null}function xa(t,e,o){let i=["power","temp","humidity"];return Tl("comfort",t,e,o)&&i.push("comfort"),i}var $a="var(--pulse-tier-calm)";function Al(t){return t<=40?"var(--pulse-tier-moderate)":t<=70?"var(--pulse-tier-strong)":"var(--pulse-tier-gale)"}function Cl(t){return t>=80?"var(--pulse-tier-moderate)":t>=50?"var(--pulse-tier-strong)":"var(--pulse-tier-gale)"}var Sa={power:{label:"Power",unit:"%",max:100,colorFn:Al},temp:{label:"Temp",unit:null,max:null,colorFn:()=>$a},humidity:{label:"Humidity",unit:"%",max:100,colorFn:()=>$a},comfort:{label:"Comfort",unit:"",max:100,colorFn:Cl}};function Ml(t,e,o,i,n){if(e.isUnavailable)return null;switch(t){case"power":return e.heatingPower;case"temp":return e.currentTemp;case"humidity":return e.humidity;case"comfort":return _a("comfort",o,i,n);default:return null}}function El(t,e){let o=t.filter(l=>l!=null);if(o.length===0)return{avg:"--",high:"--",low:"--",spread:"--"};let i=o.reduce((l,p)=>l+p,0)/o.length,n=Math.max(...o),a=Math.min(...o),s=n-a,r=e||"";return{avg:`${Z(i)}${r}`,high:`${Z(n)}${r}`,low:`${Z(a)}${r}`,spread:`${Z(s)}${r}`}}function Eo(t,e,o,i="power"){if(!t||t.length===0)return"";let n=xa(t,o,e),a=n.includes(i)?i:"power",s=Sa[a];if(!s)return"";let r=[];for(let f of t){let{entityId:g,zoneName:w,zoneState:v}=at(f,o,e),b=Ml(a,v,w,o,e);r.push({entityId:g,name:v.name,value:b,unit:v.unit||"\xB0C",rowClass:wt(v)})}r.sort((f,g)=>f.value===null&&g.value===null?0:f.value===null?1:g.value===null?-1:g.value-f.value);let l=r.map(f=>f.value).filter(f=>f!==null),p=s.max;p===null&&(p=l.length>0?Math.max(...l,30):30);let c=s.unit!==null?s.unit:r[0]?.unit||"\xB0C",u=`<div class="pc-section pc-section-zone-ranking" data-metric="${h(a)}">`;u+='<div class="pc-ranking-header">',u+='<div class="pulse-section-label">Zone Ranking</div>',u+='<div class="pc-ranking-tabs">';for(let f of n){let g=Sa[f];if(!g)continue;u+=`<div class="pc-ranking-tab${f===a?" pc-active":""}" data-metric="${h(f)}">${h(g.label)}</div>`}u+="</div></div>",u+='<div class="pc-ranking-list">';for(let f=0;f<r.length;f++){let g=r[f],w=f+1,v=w===1&&g.value!==null?" pc-top":"",b=g.value!==null&&p>0?Math.round(g.value/p*100):0,y=g.value!==null?s.colorFn(g.value):"",_=g.value!==null?`${b}%`:"0%",S;g.value===null?S="--":a==="temp"?S=`${g.value}${g.unit}`:S=`${g.value}${c}`,u+=`<div class="pc-rank-row${g.rowClass}" role="button" tabindex="0" data-entity="${h(g.entityId)}">`,u+=`<div class="pc-rank-num${v}">${w}</div>`,u+=`<div class="pc-rank-name">${h(g.name)}</div>`,u+=`<div class="pc-rank-bar-track"><div class="pc-rank-bar-fill" style="width:${$(_)};background:${$(y)}"></div></div>`,u+=`<div class="pc-rank-value">${h(S)}</div>`,u+="</div>"}u+="</div>";let m=r.map(f=>f.value),d=El(m,c);return u+='<div class="pc-ranking-summary">',u+=`<div class="pc-stat"><div class="pc-stat-value">${h(d.avg)}</div><div class="pc-stat-label">Average</div></div>`,u+=`<div class="pc-stat"><div class="pc-stat-value">${h(d.high)}</div><div class="pc-stat-label">Highest</div></div>`,u+=`<div class="pc-stat"><div class="pc-stat-value">${h(d.low)}</div><div class="pc-stat-label">Lowest</div></div>`,u+=`<div class="pc-stat"><div class="pc-stat-value">${h(d.spread)}</div><div class="pc-stat-label">Spread</div></div>`,u+="</div>",u+="</div>",u}var Fl=48,ka=30,Ta=70;function qn(t,e){let o=Date.now(),i=24*3600*1e3,n=i/e,a=o-i,s=Array.from({length:e},()=>({state:"idle",power:0}));if(!Array.isArray(t)||t.length===0)return s;for(let r=0;r<e;r++){let l=a+r*n,p=l+n,c=t.filter(w=>w&&w.t>=l&&w.t<p);if(c.length===0)continue;let u={heating:0,cooling:0,idle:0,off:0},m=0,d=0;for(let w of c)u[w.state]!==void 0&&(u[w.state]+=1),(w.state==="heating"||w.state==="cooling")&&Number.isFinite(w.power)&&(m+=w.power,d+=1);let f=["heating","cooling","idle","off"].reduce((w,v)=>u[v]>u[w]?v:w,"idle"),g=d>0?m/d:0;s[r]={state:f,power:g}}return s}function Il(t){let e="idle";return t.state==="heating"?t.power>=Ta?e="heat":t.power>=ka?e="heat-mid":e="heat-low":t.state==="cooling"?t.power>=Ta?e="cool":t.power>=ka?e="cool-mid":e="cool-low":t.state==="off"&&(e="off"),`pc-state-cell-${e}`}function Nl(t){let e=0,o=0;for(let i of t)i.state==="heating"?e+=30:i.state==="cooling"&&(o+=30);return{heatMin:e,coolMin:o}}function Ca(t){let e=0,o=0,i=0,n=0,a=0,s=0;for(let l of t)l.state==="heating"||l.state==="cooling"?(n+=1,l.state==="heating"?a+=1:s+=1,n>e&&(e=n,o=a,i=s)):(n=0,a=0,s=0);if(e===0)return{minutes:0,mode:"none"};let r="mixed";return o>0&&i===0?r="heat":i>0&&o===0&&(r="cool"),{minutes:e*30,mode:r}}function Ma(t){if(t.length===0)return null;let e=t.length/24,o=Array.from({length:24},()=>0);for(let r=0;r<t.length;r++){let l=t[r];if(l.state==="heating"||l.state==="cooling"){let p=Math.floor(r/e);o[p]+=1}}let i=-1,n=0;for(let r=0;r<24;r++)o[r]>n&&(n=o[r],i=r);return i<0?null:{hour:(new Date(Date.now()-24*3600*1e3).getHours()+i)%24,minutes:Math.round(n*30)}}function zl(t,e){if(t===0&&e===0)return"\u2014";let o=t+e,i=Math.floor(o/60),n=o%60;return n===0?`${i}h`:`${i}h ${n}m`}function Ll(t,e){return t>e&&t>0?"pc-state-active-heat":e>0?"pc-state-active-cool":""}function Rl(t){let o=Date.now()-864e5;return dt(new Date(o+t*18e5))}function Hl(t){if(t.state==="heating"||t.state==="cooling"){let e=t.state==="heating"?"heat":"cool";return t.power>0?`${e} ${Math.round(t.power)}%`:e}return t.state==="off"?"off":"idle"}function Ea(t,e,o,i){let n='<div class="pc-strip-rows">';n+='<div class="pc-strip-crosshair"></div>';let a=0,s=0;for(let r of t){let{entityId:l,zoneName:p,zoneState:c}=at(r,o,e),u=i?.stateData?.[l]||[],m=qn(u,Fl),{heatMin:d,coolMin:f}=Nl(m);a+=d,s+=f;let g=zl(d,f),w=Ll(d,f),v=wt(c);n+=`<div class="pc-timeline-group-row pc-state-row${v}" data-entity="${h(l)}" data-zone="${h(p)}">`,n+=`<span class="pc-timeline-group-name">${h(c.name)}</span>`,n+='<div class="pc-state-timeline-cells pc-cells">';for(let b=0;b<m.length;b++){let y=m[b],_=Rl(b),S=Hl(y);n+=`<span class="pc-state-cell pc-cell ${Il(y)}" data-hour="${h(_)}" data-score="${h(S)}"></span>`}n+="</div>",n+=`<span class="pc-timeline-group-stat ${w}">${h(g)}</span>`,n+="</div>"}return n+="</div>",n+=Dl(),n+=Ol(a,s,t.length),n}function Dl(){return'<div class="pc-timeline-group-axis"><span></span><div class="ticks"><span>\u221224h</span><span>\u221218h</span><span>\u221212h</span><span>\u22126h</span><span>now</span></div><span></span></div>'}function Aa(t){let e=Math.floor(t/60),o=t%60;return o===0?`${e}h`:`${e}h ${o}m`}function Ol(t,e,o){let i=t>0?`${Aa(t)} heat`:"",n=e>0?`${Aa(e)} cool`:"",s=[i,n].filter(Boolean).join(" \xB7 ")||"\u2014";return'<div class="pc-timeline-group-footer">'+Pl()+`<span><strong>${h(s)}</strong> \xB7 ${o} zones</span></div>`}function Pl(){return'<span class="pc-state-legend"><span class="pc-state-legend-pill"><span class="pc-state-legend-pip pc-state-legend-pip-heat"></span>Heat</span><span class="pc-state-legend-pill"><span class="pc-state-legend-pip pc-state-legend-pip-cool"></span>Cool</span><span class="pc-state-legend-pill"><span class="pc-state-legend-pip pc-state-legend-pip-idle"></span>Idle</span><span class="pc-state-legend-pill"><span class="pc-state-legend-pip pc-state-legend-pip-off"></span>Off</span></span>'}var Bl=new Set(["thermal","state"]),Fa={thermal:{label:"Thermal",subtitle:"Tap a zone for details"},state:{label:"State",subtitle:"Heat / cool demand by zone"}};function Vn(t,e,o,i,n){if(!e||e.length===0)return"";let a=t?.active_tab,s=typeof a=="string"&&Bl.has(a)?a:"thermal",r=`<div class="pc-section pc-section-timeline-group" data-active-tab="${h(s)}">`;r+='<div class="pc-section-header">',r+='<div class="pulse-section-label">24h Timeline</div>';let l=h(Fa[s].subtitle);r+=`<span class="pc-section-subtitle">${l}</span>`,r+="</div>",r+='<div class="pc-timeline-group-tabs" role="tablist">';for(let p of["thermal","state"])r+=`<div class="pc-timeline-group-tab${p===s?" pc-active":""}" role="tab" tabindex="0" aria-selected="${p===s}" data-tab="${h(p)}">${h(Fa[p].label)}</div>`;return r+="</div>",r+='<div class="pc-zone-detail" id="timeline-detail"></div>',r+='<div class="pc-timeline-group-body">',r+=s==="thermal"?Co(e,o,i,n):Ea(e,o,i,n),r+="</div>",r+="</div>",r}var ql=[{key:"bridge",label:"Bridge",soloHeader:(t,e)=>"Bridge",predicate:Ve,render:(t,e,o,i)=>yo(t,e,i)},{key:"homekit",label:"HomeKit",soloHeader:(t,e)=>`HomeKit${xo(t,e)}`,predicate:$e,render:(t,e,o,i)=>$o(t,e,i)},{key:"api",label:"API",soloHeader:(t,e)=>"API Usage",predicate:qe,render:(t,e,o,i)=>wo(t,e,o,i)}];function Wn(t,e,o,i){let n=ql.filter(c=>c.predicate(e));if(n.length===0)return"";if(n.length===1){let c=n[0],u='<div class="pc-section pc-section-system-health-group">';return u+=`<div class="pulse-section-label">${h(c.soloHeader(e,o))}</div>`,u+='<div class="pc-system-health-group-body">',u+=c.render(e,o,t,i),u+="</div>",u+="</div>",u}let a=t?.active_tab,r=n.some(c=>c.key===a)?a:n[0].key,l=n.find(c=>c.key===r)||n[0],p=`<div class="pc-section pc-section-system-health-group" data-active-tab="${h(r)}">`;p+='<div class="pc-section-header">',p+='<div class="pulse-section-label">System Health</div>',p+="</div>",p+='<div class="pc-system-health-group-tabs" role="tablist">';for(let c of n){let u=c.key===r?" pc-active":"";p+=`<div class="pc-system-health-group-tab${u}" role="tab" tabindex="0" aria-selected="${c.key===r}" data-tab="${h(c.key)}">${h(c.label)}</div>`}return p+="</div>",p+='<div class="pc-system-health-group-body">',p+=l.render(e,o,t,i),p+="</div>",p+="</div>",p}var Vl=new Set(["heating","cooling","mixed"]),Wl=new Set(["subtle","medium","bold"]);function Ia(t,e){if(!t||!Vl.has(t))return"";let o=e&&Wl.has(e)?e:"medium";return`<div class="pc-atmosphere-wash pc-state-${t} pc-intensity-${o}" aria-hidden="true"></div>`}var Ul={heating:"Heating",cooling:"Cooling",mixed:"Mixed",idle:"Idle",off:"Off"},jl=6;function Gl(t){let e="idle";return t.isUnavailable?e="unavail":t.hvacAction==="heating"?e="heating":t.hvacAction==="cooling"?e="cooling":t.hvacAction==="off"&&(e="off"),`pc-hero-dot-${e}`}function Xl(t){let e="idle";return t.isUnavailable?e="unavail":t.hvacAction==="heating"?e="heat":t.hvacAction==="cooling"?e="cool":t.hvacAction==="off"&&(e="off"),`pc-row-${e}`}function Un(t,e,o,i){if(!Array.isArray(t)||t.length===0)return"";let n=t.filter(b=>!b.isUnavailable),a=ho(t),s=t.filter(b=>!b.isUnavailable&&typeof b.currentTemp=="number"&&Number.isFinite(b.currentTemp)),r=s.length>0?s.reduce((b,y)=>b+y.currentTemp,0)/s.length:null,l=t[0]&&t[0].unit||"\xB0C",p=n.filter(b=>b.hvacAction==="heating").length,c=n.filter(b=>b.hvacAction==="cooling").length,u=Ul[a]||"Idle",m=r===null?"\u2014":`${Z(r)}${h(l)}`,d=`<div class="pc-hero pc-state-${a}">`;d+='<div class="pc-hero-top-row">',d+='<div class="pc-hero-temp-block">',d+='<div class="pc-hero-label">Home avg</div>',d+=`<div class="pc-hero-temp">${m}</div>`,d+="</div>",d+='<div class="pc-hero-dots">';for(let b of t){let y=Gl(b),_=[h(b.name)];!b.isUnavailable&&b.hvacAction&&_.push(h(b.hvacAction)),d+=`<span class="pc-hero-zone-dot ${y}" data-entity="${h(b.entityId)}" title="${_.join(" \u2014 ")}"></span>`}d+="</div>",d+='<div class="pc-hero-right">';let f=p+c,g=f>0?`${h(u)} \xB7 ${f} active`:`${h(u)} \xB7 ${n.length} ${n.length===1?"zone":"zones"}`;if(d+=`<div class="pc-hero-status">${g}</div>`,e?.hero_show_outside!==!1&&i&&typeof i.value=="number"&&Number.isFinite(i.value)){let b=i;d+='<div class="pc-hero-outside">',d+=`Outside ${Z(b.value)}${h(b.unit)}`,d+="</div>"}if(d+="</div>",d+="</div>",e?.hero_show_thermal_strip!==!1){let b=Zl(t,o);b&&(d+=b)}return d+="</div>",d}function Zl(t,e){let i=t.slice(0,jl),n=t.length-i.length,a=!1;for(let r of i){let l=e?.get?.(r.entityId);if(Array.isArray(l)&&l.length>=2){a=!0;break}}if(!a)return"";let s='<div class="pc-hero-strips">';for(let r of i)s+=Yl(r,e?.get?.(r.entityId)||[],24);return n>0&&(s+='<div class="pc-hero-zone-strip pc-hero-zone-strip-overflow">',s+=`<div class="pc-hero-zone-strip-label">+${n} more</div>`,s+="</div>"),s+="</div>",s}function Yl(t,e,o){let i=Xl(t),n="";if(Array.isArray(e)&&e.length>=2){let a={minTemp:t.minTemp??18,maxTemp:t.maxTemp??26},s=t.isUnavailable?"off":t.hvacAction,r=Math.max(1,Math.floor(e.length/o));for(let l=0;l<o;l++){let p=e[Math.min(e.length-1,l*r)],c=la(p.v,a,s);n+=`<span style="background:${$(c)}"></span>`}}else for(let a=0;a<o;a++)n+='<span class="pc-hero-zone-strip-cell-ghost"></span>';return`<div class="pc-hero-zone-strip ${i}" data-entity="${h(t.entityId)}"><div class="pc-hero-zone-strip-label">${h(t.name)}</div><div class="pc-hero-zone-strip-cells">${n}</div></div>`}function jn(t,e,o){let i={value:null,unit:"\xB0C",entityId:null};if(!o)return i;let n=t?.outdoor_temp_entity||e?.hubEntities?.outside_temp||null;if(!n){for(let p of Object.keys(o))if(p.startsWith("weather.")&&o[p]?.attributes?.temperature!==void 0){n=p;break}}if(!n||!o[n])return i;let a=o[n];if(Q(a))return{value:null,unit:"\xB0C",entityId:n};let s=a.attributes?.temperature!==void 0?a.attributes.temperature:a.state,r=Number.parseFloat(s),l=a.attributes?.unit_of_measurement||"\xB0C";return{value:Number.isFinite(r)?r:null,unit:l,entityId:n}}var Na=!1,Kl=typeof CSSStyleSheet<"u"&&typeof CSSStyleSheet.prototype.replaceSync=="function"&&typeof document<"u"&&"adoptedStyleSheets"in document.createElement("div").attachShadow({mode:"open"}),za=Kl?(()=>{let t=new CSSStyleSheet;return t.replaceSync(hn),t})():null,Jl=new Set(["zones","api","graph","bridge","thermal_strip","comfort_strip","homekit","weather","radial","donut","timeline_group","system_health_group"]),Ql={zones:".pc-section-zones",api:".pc-section-api",graph:".pc-section-graph",bridge:".pc-section-bridge",thermal_strip:".pc-section-thermal-strip",comfort_strip:".pc-section-comfort-strip",homekit:".pc-section-homekit",weather:".pc-section-weather",radial:".pc-section-radial",donut:".pc-section-donut",environment:".pc-section-environment",thermal:".pc-section-thermal",schedule:".pc-section-schedule",energy_flow:".pc-section-energy-flow",home_status:".pc-section-home-status",zone_ranking:".pc-section-zone-ranking",timeline_group:".pc-section-timeline-group",system_health_group:".pc-section-system-health-group"},Gn=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_elements={};_discovery=null;_historyCache;_shadow;_countdownTimer=null;_historyFetchInProgress=!1;_rafId=null;_lastUpdateTime=0;_rerenderTargets=null;_chipAbort=null;_sectionChipAbort=null;_radialAbort=null;_timelineAbort=null;_stateTimelineAbort=null;_heatmapAbort=null;_energyFlowAbort=null;_sparklineAbort=null;_zoneRankingTabsAbort=null;_timelineGroupTabsAbort=null;_timelineGroupCellTooltipAbort=null;_systemHealthGroupTabsAbort=null;_sparklinePathCache=new Map;_radialAnimState={shimmer:!1,sheen:!1};_historyGen=0;constructor(){super(),this._shadow=this.attachShadow({mode:"open"}),this._historyCache=na()}setConfig(e){this._stopRadialAnimations(),this._historyGen++,this._config=ta(e),this._discovery=null,this._prevStates={},this._elements={},this._hass&&(this._runDiscovery(),this._fullRender()),this._buildRerenderTargets()}set hass(e){if(this._hass=e,!!this._config){if(!this._discovery){this._runDiscovery(),this._fullRender(),this._refreshHistoryIfNeeded();return}this._rafId||(this._rafId=requestAnimationFrame(()=>{if(this._rafId=null,!this._hass||!this._config||!this._discovery)return;let o=Date.now();if(o-this._lastUpdateTime<200)return;this._lastUpdateTime=o;let i=this._hass.states,n=(this._config._zones||[]).some(a=>i[a.entity]!==this._prevStates[a.entity]);n&&this._updateZones(),this._updateSections(),n&&this._updateHero(),this._refreshHistoryIfNeeded(),this._cacheWatchedStates()}))}}_runDiscovery(){if(!this._hass||!this._config)return;this._historyGen++;let o=(this._config._zones||[]).map(i=>Y(i.entity));if(this._discovery=Xi(this._hass.states,o,this._hass.entities),!Na&&this._discovery.isTadoCE){Na=!0;let i=Object.entries(this._discovery.hubEntities).map(([n,a])=>`${n}=${a}`);console.info(`${oe} Tado CE hub discovery \u2014 found: ${i.join(", ")}`),this._discovery.missingHubKeys.length>0&&console.warn(`${oe} Tado CE hub discovery \u2014 missing: ${this._discovery.missingHubKeys.join(", ")}. Affected sections may render with degraded data.`)}this._buildRerenderTargets()}_rebuildSparklinePathCache(){this._sparklinePathCache.clear();let e=this._historyCache?.data;if(e)for(let[o,i]of Object.entries(e)){if(!i||i.length<2)continue;let n=Pt(i,340,36,48);n&&this._sparklinePathCache.set(o,n)}}_buildRerenderTargets(){if(!this._config||!this._discovery)return;let e=this._discovery,o=e.hubEntities,i=this._config._zones||[];this._rerenderTargets=[{selector:".pc-section-zones",watchIds:[o.home_state].filter(Boolean),render:()=>{let n=this._config,a=this._hass?.states||{};return xn(i,n,a,e,this._historyCache)}},{selector:".pc-section-api",watchIds:[o.api_usage,o.api_limit,o.api_status,o.next_sync,o.token_status].filter(Boolean),render:()=>{let n=this._hass?.states||{},s=(this._config?.sections||[{type:"zones"}]).find(r=>(typeof r=="string"?r:r.type)==="api")||{};return $n(o,n,s,this._historyCache)}},{selector:".pc-section-homekit",watchIds:[o.homekit_connected,o.homekit_reads_saved,o.homekit_writes_saved].filter(Boolean),render:()=>{let n=this._hass?.states||{};return kn(o,n,this._historyCache)}},{selector:".pc-section-bridge",watchIds:[o.bridge_connected,o.boiler_flow_temp,o.wc_status,o.wc_target_flow].filter(Boolean),render:()=>{let n=this._hass?.states||{};return Sn(o,n,this._historyCache)}},{selector:".pc-section-weather",watchIds:[o.outside_temp,o.weather,o.solar_intensity].filter(Boolean),render:()=>{let n=this._hass?.states||{};return Tn(o,n,this._historyCache)}},{selector:".pc-section-environment",watchIds:i.flatMap(n=>{let a=Y(n.entity),s=e.zoneEntities?.[a]||{};return[s.mold_risk,s.condensation,s.comfort_level,s.surface_temp,s.dew_point].filter(Boolean)}),render:()=>{let n=this._hass?.states||{};return An(i,n,e)}},{selector:".pc-section-thermal",watchIds:i.flatMap(n=>{let a=Y(n.entity),s=e.zoneEntities?.[a]||{};return[s.heating_rate,s.thermal_inertia,s.preheat_time,s.confidence].filter(Boolean)}),render:()=>{let n=this._hass?.states||{};return Cn(i,n,e)}},{selector:".pc-section-schedule",watchIds:i.flatMap(n=>{let a=Y(n.entity),s=e.zoneEntities?.[a]||{};return[s.next_schedule,s.next_sched_temp,s.schedule_deviation,s.preheat_advisor,s.comfort_target].filter(Boolean)}),render:()=>{let n=this._hass?.states||{};return Mn(i,n,e)}},{selector:".pc-section-radial",watchIds:i.map(n=>n.entity),render:()=>{let n=this._hass?.states||{},s=(this._config?.sections||[{type:"zones"}]).find(r=>(typeof r=="string"?r:r.type)==="radial")||{};return On(i,s,n,e,this._historyCache)}},{selector:".pc-section-donut",watchIds:(()=>{let s=(this._config?.sections||[]).find(r=>(typeof r=="string"?r:r.type)==="donut")?.source;return s==="api_breakdown"&&o.api_breakdown?[o.api_breakdown]:s==="homekit_saved"?[o.homekit_reads_saved,o.homekit_writes_saved].filter(Boolean):[]})(),render:()=>{let n=this._hass?.states||{},s=(this._config?.sections||[]).find(r=>(typeof r=="string"?r:r.type)==="donut")||{};return In(s,o,n)}},{selector:".pc-section-graph",watchIds:[],render:()=>{let n=this._hass?.states||{},s=(this._config?.sections||[{type:"zones"}]).find(r=>(typeof r=="string"?r:r.type)==="graph")||{};return Fn(s,i,this._historyCache,n,e)}},{selector:".pc-section-home-status",watchIds:i.map(n=>n.entity),render:()=>{let n=this._hass?.states||{};return Pn(i,n,e,this._config||{})}},{selector:".pc-section-zone-ranking",watchIds:i.map(n=>n.entity),render:()=>{let n=this._hass?.states||{},s=this._shadow.querySelector(".pc-section-zone-ranking")?.getAttribute("data-metric")||"power";return Eo(i,n,e,s)}}]}_fullRender(){if(!this._config||!this._hass||!this._discovery)return;let e=this._config,o=this._hass.states,i=this._discovery,n=e._zones||[],a=e.layout==="compact",s=e.entity_row===!0,r="";za?this._shadow.adoptedStyleSheets=[za]:r+=`<style>${hn}</style>`;let l=n.map(u=>{let m=Y(u.entity),d=i.zoneEntities?.[m]||{};return we(u.entity,d,o,u,e)}),p=ho(l);if(s||(r+=`<ha-card${a?' class="pc-compact"':""}>`),e.show_atmosphere!==!1&&(r+=Ia(p,e.atmosphere_intensity)),r+='<div class="pc-card-content">',e.title&&(r+=`<div class="pulse-title">${h(e.title)}</div>`),e.show_hero!==!1){let u=jn(e,i,o),m=f=>{let g=n.findIndex(_=>_.entity===f);if(g<0)return f;let w=n[g],v=Y(f),b=i?.zoneEntities?.[v]||{};return ht(f,o,b,w)?.entityId||f},d=gn(n,this._historyCache,m);r+=Un(l,e,d,u)}let c=e.sections||[{type:"zones"}];for(let u=0;u<c.length;u++){let m=c[u],d=this._renderSection(m,n,o,i);r+=d.replace(/^<div class="pc-section([^"]*)"/,`<div class="pc-section$1" data-section-index="${u}"`)}r+="</div>",s||(r+="</ha-card>"),this._shadow.innerHTML=r,this._elements.zonesSection=this._shadow.querySelector(".pc-section-zones"),this._elements.apiSection=this._shadow.querySelector(".pc-section-api"),this._cacheWatchedStates(),this._bindZoneActions(),this._bindChipActions(),this._bindSectionInteractions(),this._bindSectionChipActions(),this._startCountdownTimer()}_bindZoneActions(){if(!this._config||!this._hass)return;let e=this._shadow.querySelectorAll(".pc-zone-row"),o=this._config._zones||[];for(let i=0;i<e.length&&i<o.length;i++){let n=e[i],a=o[i],s=a.entity,r=n.__pulseCleanup;typeof r=="function"&&r();let l=new AbortController,{signal:p}=l,c=0,u=null,m=null,d=!1;n.__pulseCleanup=()=>{l.abort(),u&&clearTimeout(u),m&&clearTimeout(m),delete n.__pulseCleanup},n.addEventListener("keydown",g=>{let w=g;(w.key==="Enter"||w.key===" ")&&(w.preventDefault(),this._fireAction(s,a,"tap_action"))},{signal:p}),n.addEventListener("click",g=>{if(g.preventDefault(),d){d=!1;return}c++,c===1?u=setTimeout(()=>{c=0,this._fireAction(s,a,"tap_action")},250):c===2&&(u&&clearTimeout(u),c=0,this._fireAction(s,a,"double_tap_action"))},{signal:p}),n.addEventListener("pointerdown",()=>{d=!1,m=setTimeout(()=>{d=!0,this._fireAction(s,a,"hold_action")},500)},{signal:p});let f=()=>{m&&clearTimeout(m)};n.addEventListener("pointerup",f,{signal:p}),n.addEventListener("pointercancel",f,{signal:p}),n.addEventListener("contextmenu",g=>g.preventDefault(),{signal:p}),Et(n)}}_bindSectionInteractions(){this._bindRadialInteractions(),this._bindTimelineInteractions(),this._bindHeatmapInteractions(),this._bindEnergyFlowInteractions(),this._bindSparklineCrosshairs(),this._bindZoneRankingTabs(),this._bindTimelineGroupTabs(),this._bindTimelineGroupCellTooltip(),this._bindStateTimelineInteractions(),this._bindSystemHealthGroupTabs()}_bindChipActions(){if(!this._config||!this._hass)return;let e=this._resetAbort("_chipAbort"),o=this._config._zones||[],i=this._shadow.querySelectorAll(".pc-zone-row");for(let n=0;n<i.length&&n<o.length;n++){let a=o[n],s=a.entity,r=i[n].querySelectorAll(".pc-chip");for(let l of r){let p=l,c=p.dataset.chipType||"",u=p.dataset.entity||s,m=a.chip_actions,d=this._config.chip_actions,f=m?.[c]||d?.[c]||{},g=f.tap_action||{action:"more-info",entity:u},w=f.hold_action||{action:"none"};p.style.cursor="pointer",Et(p),p.addEventListener("click",b=>{b.stopPropagation(),this._hass&&ve(this,this._hass,g,u,Ot)},{signal:e});let v=null;p.addEventListener("pointerdown",b=>{b.stopPropagation(),v=setTimeout(()=>{!this._hass||w.action==="none"||ve(this,this._hass,w,u,Ot)},500)},{signal:e}),p.addEventListener("pointerup",b=>{b.stopPropagation(),v&&clearTimeout(v)},{signal:e}),p.addEventListener("pointercancel",()=>{v&&clearTimeout(v)},{signal:e}),p.addEventListener("contextmenu",b=>b.preventDefault(),{signal:e})}}}_bindSectionChipActions(){let e=this._resetAbort("_sectionChipAbort"),o=this._shadow.querySelectorAll(".pc-section [data-entity]");for(let i of o){let n=i;n.closest(".pc-zone-row")&&n.classList.contains("pc-chip")||n.classList.contains("pc-zone-row")||(n.style.cursor="pointer",Et(n),n.addEventListener("click",a=>{a.stopPropagation();let s=n.dataset.entity;s&&lo(this,"hass-more-info",{entityId:s})},{signal:e}))}}_startCountdownTimer(){this._countdownTimer&&clearInterval(this._countdownTimer);let e=this._shadow.querySelector(".chip-next-sync");if(!e)return;let o=Number(e.getAttribute("data-target"));if(!o||!isFinite(o))return;let i=()=>{let n=o-Date.now();if(n<=0){e.textContent="Next: now",this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null);return}let a=Math.floor(n/6e4),s=Math.floor(n%6e4/1e3);e.textContent=a>0?`Next: ${a}m ${s}s`:`Next: ${s}s`};i(),this._countdownTimer=setInterval(i,1e3)}_bindRadialInteractions(){let e=this._resetAbort("_radialAbort"),o=this._shadow.querySelectorAll(".pc-arc-group"),i=this._shadow.querySelectorAll(".pc-radial-legend .pc-legend-item"),n=this._shadow.querySelector("#radial-center"),a=this._shadow.querySelector("#radial-detail"),s=this._shadow.querySelector(".pc-section-radial svg");if(o.length===0||!n)return;let l=(s&&Number(s.getAttribute("width"))||280)/2,p=this._config?._zones||[],c=null,u=this._shadow.querySelector(".pc-section-radial")?.getAttribute("data-outdoor-temp-entity"),m=this._shadow.querySelector(".pc-section-radial")?.getAttribute("data-attribute")||"temperature",d=this._shadow.querySelector(".pc-section-radial")?.getAttribute("data-outdoor-humidity-entity"),f=()=>{let v=this._hass?.states||{},b=this._discovery,y=u||b?.hubEntities?.outside_temp,_="--",S="";if(m!=="humidity"&&y&&v[y]){let A=v[y];Q(A)||(_=`${A.attributes?.temperature!==void 0?A.attributes.temperature:A.state}${A.attributes?.unit_of_measurement||"\xB0C"}`)}if(d&&v[d]){let A=v[d];if(!Q(A)){let C=A.attributes?.humidity!==void 0?A.attributes.humidity:A.state;m==="humidity"?_=`${C}%`:S=`${C}%`}}return{center:_,centerSub:S}},g=v=>{let b=this._hass?.states||{},y=this._discovery;if(c===v){w();return}c=v;let _=p[v];if(!_)return;let S=_.entity,A=Y(S),C=y?.zoneEntities?.[A]||{},M=De(S,b,_),{name:E,temp:z,target:k,humidity:x}=M,T=M.hvacAction,F=0;if(C.heating_power){let P=b[C.heating_power];Q(P)||(F=parseFloat(P.state)||0)}else b[S]?.attributes?.heating_power!==void 0&&(F=parseFloat(b[S].attributes.heating_power)||0);let I=F>0||T==="heating"||T==="cooling"?`${T==="cooling"?"Cooling":"Heating"} ${Math.round(F)}%`:"Idle",q=n.querySelector(".pc-center-value"),L=n.querySelector(".pc-center-label"),N=n.querySelector(".pc-center-sub");q&&(q.textContent=z!==void 0?`${Z(z)}${M.unit}`:"--"),L&&(L.textContent=E);let O=x!==void 0?` \xB7 ${x}%`:"";N&&(N.textContent=`${I}${O}`),o.forEach((P,H)=>{P.classList.toggle("pc-dimmed",H!==v),P.classList.toggle("pc-selected",H===v),H===v?P.setAttribute("transform",`translate(${l}, ${l}) scale(1.06) translate(${-l}, ${-l})`):P.removeAttribute("transform")}),i.forEach((P,H)=>{P.classList.toggle("pc-selected",H===v)}),a&&(a.innerHTML=`<div class="pc-detail-stats">
          <div class="pc-stat"><div class="pc-stat-value">${k!==void 0?h(k)+h(M.unit):"--"}</div><div class="pc-stat-label">Target</div></div>
          <div class="pc-stat"><div class="pc-stat-value">${x!==void 0?h(x)+"%":"--"}</div><div class="pc-stat-label">Humidity</div></div>
          <div class="pc-stat"><div class="pc-stat-value">${h(T)}</div><div class="pc-stat-label">Action</div></div>
        </div>`,a.classList.add("pc-active"))},w=()=>{c=null;let{center:v,centerSub:b}=f(),y=n.querySelector(".pc-center-value"),_=n.querySelector(".pc-center-label"),S=n.querySelector(".pc-center-sub");y&&(y.textContent=v),_&&(_.textContent="Outdoor"),S&&(S.textContent=b),o.forEach(A=>{A.classList.remove("pc-dimmed","pc-selected"),A.removeAttribute("transform")}),i.forEach(A=>{A.classList.remove("pc-selected")}),a&&(a.classList.remove("pc-active"),a.innerHTML="")};if(o.forEach((v,b)=>{v.addEventListener("click",()=>g(b),{signal:e})}),i.forEach((v,b)=>{Et(v),v.addEventListener("click",()=>g(b),{signal:e})}),this._stopRadialAnimations(),o.length>1&&!Rt()){this._radialAnimState.shimmer=!0;let v=0,b=1,y=()=>{if(!this._radialAnimState.shimmer)return;if(c!==null){setTimeout(y,500);return}let _=o[v];if(!_){setTimeout(y,300);return}if(_.style.filter="brightness(1.8)",_.style.transition="filter 0.3s ease-in",setTimeout(()=>{_.style.filter="",_.style.transition="filter 0.5s ease-out"},250),v+=b,v>=o.length||v<0){v=b>0?0:o.length-1;let S=1e3+Math.random()*2e3;Math.random()<.4&&(b*=-1),setTimeout(y,S)}else{let S=80+Math.random()*170;setTimeout(y,S)}};setTimeout(y,1500)}if(!Rt()){let v=this._shadow.querySelector("#radial-sheen");if(v){let y=getComputedStyle(this).getPropertyValue("--primary-background-color").trim().match(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);(y?(.299*Number(y[1])+.587*Number(y[2])+.114*Number(y[3]))/255>=.5:!1)?v.classList.add("light-theme"):v.classList.remove("light-theme"),this._radialAnimState.sheen=!0;let S=()=>{if(!this._radialAnimState.sheen)return;let A=Math.random()>.5,C=A?"-100% 50%":"200% 50%",M=A?"200% 50%":"-100% 50%",E=1.2+Math.random()*1.5;v.style.transition="none",v.style.backgroundPosition=C,v.offsetWidth,v.style.transition=`background-position ${E}s ease-in-out`,v.style.backgroundPosition=M,setTimeout(()=>{let z=4e3+Math.random()*6e3;setTimeout(S,z)},E*1e3)};setTimeout(S,2e3+Math.random()*3e3)}}}_stopRadialAnimations(){this._radialAnimState.shimmer=!1,this._radialAnimState.sheen=!1}_resetAbort(e){let o=this[e];o&&o.abort();let i=new AbortController;return this[e]=i,i.signal}_bindTimelineInteractions(){let e=this._resetAbort("_timelineAbort"),o=this._shadow.querySelectorAll(".pc-section-thermal-strip, .pc-section-timeline-group");if(o.length===0)return;let i=this._config?._zones||[],n=this._hass?.states?.[i[0]?.entity]?.attributes?.unit_of_measurement||"\xB0C";for(let a of o){let s=a.querySelectorAll(".pc-timeline-row");if(s.length===0)continue;let r=a.querySelector(".pc-section-subtitle"),l="Tap a zone for details",p=null,c=null,u=m=>{c=null;let d=m.querySelector(".pc-comparison-path");d&&d.remove();let f=m.querySelector(".pc-comparison-legend");f&&f.remove()};s.forEach((m,d)=>{Et(m),m.addEventListener("click",()=>{let f=this._hass?.states||{},g=this._discovery,w=this._historyCache;if(a.querySelectorAll(".pc-strip-drag-highlight").forEach(H=>{H.style.display="none"}),p!==null&&p!==d){let H=a.querySelector(".pc-zone-detail"),W=H?.querySelector(".pc-detail-sparkline svg");if(H&&W){if(c===d){u(H);return}u(H),c=d;let R=i[d];if(!R)return;let D=R.entity,U=Y(D),G=g?.zoneEntities?.[U]||{},tt=R.temperature_entity||G.temperature||D,et=w?.data?.[tt]||[];if(et.length>=2){let Mt=this._sparklinePathCache.get(tt)||Pt(et,340,36,48);if(Mt){let bt=document.createElementNS("http://www.w3.org/2000/svg","path");bt.setAttribute("d",Mt.linePath),bt.setAttribute("fill","none"),bt.setAttribute("stroke","var(--pulse-info-color)"),bt.setAttribute("stroke-width","1.5"),bt.setAttribute("opacity","0.5"),bt.classList.add("pc-comparison-path"),W.appendChild(bt)}}let lt=i[p],vt=De(lt?.entity||"",f,lt).name,St=De(D,f,R).name,it=document.createElement("div");it.className="pc-comparison-legend",it.innerHTML=`<span><span style="display:inline-block;width:8px;height:8px;border-radius:var(--pulse-radius-circle);background:currentColor;margin-right:4px"></span>${h(vt)}</span><span><span style="display:inline-block;width:8px;height:8px;border-radius:var(--pulse-radius-circle);background:var(--pulse-info-color);margin-right:4px"></span>${h(St)}</span>`,H.appendChild(it);return}}if(p===d){p=null,c=null,s.forEach(W=>W.classList.remove("pc-selected"));let H=a.querySelector(".pc-zone-detail");H&&H.classList.remove("pc-active"),r&&(r.textContent=l);return}p=d,s.forEach((H,W)=>H.classList.toggle("pc-selected",W===d));let v=i[d];if(!v)return;let b=v.entity,y=f[b]?.attributes||{},_=De(b,f,v),{name:S,temp:A,target:C,humidity:M,hvacAction:E}=_;r&&(r.textContent=S);let z=Y(b),k=g?.zoneEntities?.[z]||{},x=v.temperature_entity||k.temperature||b,T=w?.data?.[x]||[],F="";if(T.length>=2){let H=T[T.length-1],W=T[T.length-2],R=H.v-W.v,D=(H.t-W.t)/36e5;if(D>0&&isFinite(R)&&isFinite(D)){let U=R/D;F=`${U>=0?"+":""}${U.toFixed(1)}${_.unit}/hr`}}let B=0;if(k.heating_power){let H=f[k.heating_power];Q(H)||(B=parseFloat(H.state)||0)}else y.heating_power!==void 0&&(B=parseFloat(y.heating_power)||0);let q=B>0||E==="heating"||E==="cooling"?`${E==="cooling"?"Cooling":"Heating"} ${Math.round(B)}%`:"Idle",L="";if(T.length>=2){let H=1/0,W=-1/0;for(let R of T)isFinite(R.v)&&(R.v<H&&(H=R.v),R.v>W&&(W=R.v));isFinite(H)&&isFinite(W)&&(L=`${H.toFixed(1)}${_.unit} \u2013 ${W.toFixed(1)}${_.unit} today`)}let N="";if(T.length>=2){let H=E==="heating"?"var(--pulse-tier-strong)":A!==void 0&&isFinite(Number(A))?rt(Number(A)):"var(--pulse-text-primary)",W=$(H),R=this._sparklinePathCache.get(x)||Pt(T,340,36,48);if(R){let D=`tl-detail-grad-${d}`;N=`<div class="pc-detail-sparkline pc-sparkline-filled" style="height:36px;margin-top:10px"><svg viewBox="0 0 340 36" preserveAspectRatio="none"><defs><linearGradient id="${h(D)}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${W}" stop-opacity="0.3"/><stop offset="100%" stop-color="${W}" stop-opacity="0"/></linearGradient></defs><path d="${R.areaPath}" fill="url(#${h(D)})" /><path d="${R.linePath}" fill="none" stroke="${W}" stroke-width="1.5" opacity="0.7" /></svg></div>`}}let O=a.querySelector(".pc-zone-detail");if(!O)return;O.innerHTML=`<div class="pc-detail-header"><span class="pc-detail-name">${h(S)}</span><span class="pc-detail-close">\u2715 Close</span></div>
          <div class="pc-detail-stats">
            <div class="pc-stat"><div class="pc-stat-value">${A!==void 0?h(A)+h(_.unit):"--"}</div><div class="pc-stat-label">Current</div>${F?`<div class="pc-stat-sub">${h(F)}</div>`:""}</div>
            <div class="pc-stat"><div class="pc-stat-value">${C!==void 0?h(C)+h(_.unit):"--"}</div><div class="pc-stat-label">Target</div>${q?`<div class="pc-stat-sub">${h(q)}</div>`:""}</div>
            <div class="pc-stat"><div class="pc-stat-value">${M!==void 0?h(M)+"%":"--"}</div><div class="pc-stat-label">Humidity</div>${L?`<div class="pc-stat-sub">${h(L)}</div>`:""}</div>
          </div>${N}`,O.classList.add("pc-active");let P=O.querySelector(".pc-detail-close");P&&P.addEventListener("click",H=>{H.stopPropagation(),p=null,c=null,s.forEach(W=>W.classList.remove("pc-selected")),O.classList.remove("pc-active"),r&&(r.textContent=l)},{signal:e})},{signal:e})}),a.classList.contains("pc-section-thermal-strip")&&this._bindThermalStripHandlers(a,e,n)}}_bindThermalStripHandlers(e,o,i){let n=To(),a=e.querySelector(".pc-strip-rows");a&&(a.style.position="relative",a.appendChild(n.element)),e.querySelectorAll(".pc-strip-container").forEach(p=>{let c=p.getAttribute("data-slots"),u=null;try{c&&(u=JSON.parse(c))}catch{}p.addEventListener("pointermove",m=>{if(m.pointerType==="touch"||!u)return;let d=p.getBoundingClientRect(),f=Jt(m.clientX,d,u.length),g=u[f];if(g){let w=g.v!==null?`${g.l}: ${g.v}${i}`:`${g.l}: --`;n.show(d,m.clientX-d.left,w)}},{signal:o}),p.addEventListener("pointerleave",()=>n.hide(),{signal:o}),p.addEventListener("pointerdown",m=>{if(m.pointerType!=="touch"||!u)return;let d=p.getBoundingClientRect(),f=Jt(m.clientX,d,u.length),g=u[f];if(g){let w=g.v!==null?`${g.l}: ${g.v}${i}`:`${g.l}: --`;n.show(d,m.clientX-d.left,w),setTimeout(()=>n.hide(),2e3)}},{signal:o})});let r=a?.querySelectorAll(".pc-strip-container");if(a&&r&&r.length>0){let p=a.querySelector(".pc-strip-crosshair"),c=r[0];if(p&&c){let u=c.getBoundingClientRect().left-a.getBoundingClientRect().left;Nn(a,p,c,u)}}e.querySelectorAll(".pc-strip-container, .pc-cells").forEach(p=>{let c=p.getAttribute("data-slots"),u=null;try{c&&(u=JSON.parse(c))}catch{}zn(p,u,n,i)})}_bindStateTimelineInteractions(){let e=this._resetAbort("_stateTimelineAbort"),o=this._shadow.querySelectorAll(".pc-section-timeline-group");if(o.length!==0)for(let i of o){let n=i.querySelectorAll(".pc-state-row");if(n.length===0)continue;let a=i.querySelector(".pc-zone-detail");if(!a)continue;let s=i.querySelector(".pc-section-subtitle"),r="Heat / cool demand by zone",l=null;n.forEach((p,c)=>{Et(p),p.addEventListener("click",()=>{if(l===c){l=null,n.forEach(R=>R.classList.remove("pc-selected")),a.classList.remove("pc-active"),s&&(s.textContent=r);return}l=c,n.forEach((R,D)=>R.classList.toggle("pc-selected",D===c));let u=this._hass?.states||{},m=this._discovery,d=this._historyCache,g=(this._config?._zones||[])[c];if(!g)return;let w=g.entity,v=Y(w),b=m?.zoneEntities?.[v]||{},y=we(w,b,u,g,{});s&&(s.textContent=y.name);let _=d?.stateData?.[w]||[],S=qn(_,48),A=0,C=0,M=0,E=0;for(let R of S)R.state==="heating"?A+=30:R.state==="cooling"?C+=30:R.state==="off"?E+=30:M+=30;let z=A+C,k=Ca(S),x=Ma(S),T=R=>{if(R===0)return"0m";let D=Math.floor(R/60),U=R%60;return D===0?`${U}m`:U===0?`${D}h`:`${D}h ${U}m`},F=z>0?T(z):"no demand",B=[];A>0&&B.push(`${T(A)} heat`),C>0&&B.push(`${T(C)} cool`);let I=B.join(" \xB7 "),q="";k.minutes>0&&(q=`${k.mode==="heat"?"heating":k.mode==="cool"?"cooling":"active"} run`);let L=k.minutes>0?T(k.minutes):"\u2014",N="\u2014",O="";x&&x.minutes>0&&(N=`${String(x.hour).padStart(2,"0")}:00`,O=`${T(x.minutes)} demand`);let P=`${T(M)} idle`,H=E>0?` \xB7 ${T(E)} off`:"";a.innerHTML=`<div class="pc-detail-header"><span class="pc-detail-name">${h(y.name)}</span><span class="pc-detail-close">\u2715 Close</span></div><div class="pc-detail-stats"><div class="pc-stat"><div class="pc-stat-value">${h(F)}</div><div class="pc-stat-label">24h Demand</div>`+(I?`<div class="pc-stat-sub">${h(I)}</div>`:"")+`</div><div class="pc-stat"><div class="pc-stat-value">${h(L)}</div><div class="pc-stat-label">Longest Run</div>`+(q?`<div class="pc-stat-sub">${h(q)}</div>`:"")+`</div><div class="pc-stat"><div class="pc-stat-value">${h(N)}</div><div class="pc-stat-label">Busiest Hour</div>`+(O?`<div class="pc-stat-sub">${h(O)}</div>`:"")+`</div></div><div class="pc-state-detail-footer">${h(P+H)}</div>`,a.classList.add("pc-active");let W=a.querySelector(".pc-detail-close");W&&W.addEventListener("click",R=>{R.stopPropagation(),l=null,n.forEach(D=>D.classList.remove("pc-selected")),a.classList.remove("pc-active"),s&&(s.textContent=r)},{signal:e})},{signal:e})})}}_bindHeatmapInteractions(){let e=this._resetAbort("_heatmapAbort"),o=this._shadow.querySelectorAll(".pc-section-comfort-strip .pc-heatmap-row"),i=this._shadow.querySelector("#heatmap-detail");if(o.length===0||!i)return;let n=null;o.forEach((d,f)=>{Et(d),d.addEventListener("click",()=>{let g=this._shadow.querySelector(".pc-section-comfort-strip");if(g&&g.querySelectorAll(".pc-strip-drag-highlight").forEach(k=>{k.style.display="none"}),n===f){n=null,o.forEach(k=>k.classList.remove("pc-selected")),i.classList.remove("pc-active");return}n=f,o.forEach((k,x)=>k.classList.toggle("pc-selected",x===f));let w=d.querySelectorAll(".pc-cell"),v=[],b=[];if(w.length>0)w.forEach(k=>{let x=k.getAttribute("data-score");x&&(v.push(Number(x)),b.push(k.getAttribute("data-hour")||"--"))});else{let x=d.querySelector(".pc-strip-container")?.getAttribute("data-slots");if(x)try{let T=JSON.parse(x);for(let F of T)F.v!==null&&F.v!==void 0&&(v.push(F.v),b.push(F.l||"--"))}catch{}}if(v.length===0)return;let y=Math.round(v.reduce((k,x)=>k+x,0)/v.length),_=0,S=0;for(let k=1;k<v.length;k++)v[k]>v[_]&&(_=k),v[k]<v[S]&&(S=k);let A=b[_]||"--",C=b[S]||"--",M=y>=80?"var(--pulse-tier-moderate)":y>=50?"var(--pulse-tier-strong)":"var(--pulse-tier-gale)",E=d.querySelector(".pc-zone-label")?.textContent||"";i.innerHTML=`<div class="pc-detail-header"><span class="pc-detail-name">${h(E)}</span><span class="pc-detail-close">\u2715 Close</span></div>
          <div class="pc-detail-stats">
            <div class="pc-stat"><div class="pc-stat-value">${y}</div><div class="pc-stat-label">Avg Score</div></div>
            <div class="pc-stat"><div class="pc-stat-value">${h(A)}</div><div class="pc-stat-label">Best Hour</div></div>
            <div class="pc-stat"><div class="pc-stat-value">${h(C)}</div><div class="pc-stat-label">Worst Hour</div></div>
          </div>
          <div class="pc-detail-bar"><div class="pc-detail-bar-fill" style="width:${y}%;background:${$(M)}"></div></div>`,i.classList.add("pc-active");let z=i.querySelector(".pc-detail-close");z&&z.addEventListener("click",k=>{k.stopPropagation(),n=null,o.forEach(x=>x.classList.remove("pc-selected")),i.classList.remove("pc-active")},{signal:e})},{signal:e})});let a=this._shadow.querySelector(".pc-section-comfort-strip");if(!a)return;let s=To(),r=a.querySelector(".pc-heatmap-body");r&&(r.style.position="relative",r.appendChild(s.element));let l=r?.querySelector(".pc-cells")||r?.querySelector(".pc-strip-container");a.querySelectorAll(".pc-cells").forEach(d=>{d.addEventListener("pointermove",f=>{if(f.pointerType==="touch")return;let g=f.target?.closest?.(".pc-cell");if(!g){s.hide();return}let w=g.getAttribute("data-hour")||"",v=g.getAttribute("data-score"),b=v?`${w}: Score ${v}`:`${w}: --`,y=l?.getBoundingClientRect();y&&s.show(y,f.clientX-y.left,b)},{signal:e}),d.addEventListener("pointerleave",()=>s.hide(),{signal:e}),d.addEventListener("pointerdown",f=>{if(f.pointerType!=="touch")return;let g=f.target?.closest?.(".pc-cell");if(!g)return;let w=g.getAttribute("data-hour")||"",v=g.getAttribute("data-score"),b=v?`${w}: Score ${v}`:`${w}: --`,y=l?.getBoundingClientRect();y&&(s.show(y,f.clientX-y.left,b),setTimeout(()=>s.hide(),2e3))},{signal:e})}),a.querySelectorAll(".pc-strip-container").forEach(d=>{let f=d.getAttribute("data-slots"),g=null;try{f&&(g=JSON.parse(f))}catch{}d.addEventListener("pointermove",w=>{if(w.pointerType==="touch"||!g)return;let v=d.getBoundingClientRect(),b=Jt(w.clientX,v,g.length),y=g[b];if(y){let _=y.v!==null?`${y.l}: Score ${y.v}`:`${y.l}: --`;s.show(v,w.clientX-v.left,_)}},{signal:e}),d.addEventListener("pointerleave",()=>s.hide(),{signal:e}),d.addEventListener("pointerdown",w=>{if(w.pointerType!=="touch"||!g)return;let v=d.getBoundingClientRect(),b=Jt(w.clientX,v,g.length),y=g[b];if(y){let _=y.v!==null?`${y.l}: Score ${y.v}`:`${y.l}: --`;s.show(v,w.clientX-v.left,_),setTimeout(()=>s.hide(),2e3)}},{signal:e})});let u=r?.querySelector(".pc-strip-crosshair");if(r&&u&&l){let d=l.getBoundingClientRect().left-r.getBoundingClientRect().left;Nn(r,u,l,d)}a.querySelectorAll(".pc-cells, .pc-strip-container").forEach(d=>{let f=d.getAttribute("data-slots"),g=null;try{f&&(g=JSON.parse(f))}catch{}zn(d,g,s)})}_bindEnergyFlowInteractions(){let e=this._resetAbort("_energyFlowAbort"),o=this._shadow.querySelectorAll(".section-energy-flow path[data-zone]"),i=this._shadow.querySelector(".section-energy-flow");if(o.length===0||!i)return;let n=null;o.forEach(a=>{a.classList.add("pc-ribbon"),a.addEventListener("click",()=>{let s=a.getAttribute("data-zone");if(s){if(n===s){n=null,o.forEach(r=>r.classList.remove("pc-dimmed"));return}n=s,o.forEach(r=>{r.classList.toggle("pc-dimmed",r.getAttribute("data-zone")!==s)})}},{signal:e})})}_bindSparklineCrosshairs(){let e=this._resetAbort("_sparklineAbort");this._shadow.querySelectorAll(".pc-strip-tooltip-fixed").forEach(n=>n.remove()),this._shadow.querySelectorAll(".sparkline-crosshair").forEach(n=>n.remove());let o=this._shadow.querySelectorAll(".pc-section-zones .pc-sparkline-filled, .pc-section-zones .pc-zone-row-pulse");if(o.length===0)return;let i=ua();this._shadow.appendChild(i.element),o.forEach(n=>{let a=n;a.style.position="relative";let s=document.createElement("div");s.className="pc-strip-crosshair pc-sparkline-crosshair",s.style.display="none",s.style.top="0",s.style.bottom="0",a.appendChild(s);let r=a.getAttribute("data-sparkline"),l=null;try{r&&(l=JSON.parse(r))}catch{}a.addEventListener("pointermove",c=>{if(c.pointerType==="touch")return;let u=a.getBoundingClientRect(),m=c.clientX-u.left;if(!(m<0||m>u.width)&&(s.style.left=`${m}px`,s.style.display="",l)){let d=l.d,f=l.u||"",g=Math.min(d.length-1,Math.floor(m/u.width*d.length)),w=d[g];if(w){let v=w.v!==null?`${w.l}: ${w.v}${f}`:`${w.l}: --`;i.show(u,c.clientX,v)}}},{signal:e}),a.addEventListener("pointerleave",()=>{s.style.display="none",i.hide()},{signal:e});let p=null;a.addEventListener("pointerdown",c=>{if(c.pointerType!=="touch")return;let u=a.getBoundingClientRect(),m=c.clientX-u.left;if(!(m<0||m>u.width)){if(s.style.left=`${m}px`,s.style.display="",l){let d=l.d,f=l.u||"",g=Math.min(d.length-1,Math.floor(m/u.width*d.length)),w=d[g];if(w){let v=w.v!==null?`${w.l}: ${w.v}${f}`:`${w.l}: --`;i.show(u,c.clientX,v)}}p&&clearTimeout(p),p=setTimeout(()=>{s.style.display="none",i.hide(),p=null},2e3)}},{signal:e})})}_bindZoneRankingTabs(){let e=this._resetAbort("_zoneRankingTabsAbort"),o=this._shadow.querySelector(".pc-section-zone-ranking");if(!o)return;let i=o.querySelectorAll(".pc-ranking-tab");if(i.length===0)return;let n=this._config?._zones||[],a=this._discovery;if(a)for(let s of i)s.addEventListener("click",()=>{let r=s.dataset.metric;if(!r)return;let l=this._hass?.states||{},p=Eo(n,l,a,r);if(!p)return;let c=document.createElement("template");c.innerHTML=p;let u=c.content.firstElementChild;u&&(o.replaceWith(u),this._bindZoneRankingTabs(),this._bindSectionChipActions())},{signal:e})}_bindTimelineGroupTabs(){let e=this._resetAbort("_timelineGroupTabsAbort"),o=this._shadow.querySelectorAll(".pc-section-timeline-group");if(o.length===0)return;let i=this._config?._zones||[],n=this._discovery;if(n)for(let a of o){let s=Number(a.dataset.sectionIndex);if(Number.isNaN(s))continue;let r=a.querySelectorAll(".pc-timeline-group-tab");for(let l of r)l.addEventListener("click",()=>{let p=l.dataset.tab;if(!p||!["thermal","state"].includes(p))return;let c=[...this._config?.sections||[]],u=c[s];if(!u||typeof u=="string"||u.type!=="timeline_group")return;let m={...u,active_tab:p};c[s]=m,this._config={...this._config,sections:c};let d=this._hass?.states||{},f=this._historyCache,g=Vn(m,i,d,n,f);if(!g)return;let w=g.replace(/^<div class="pc-section([^"]*)"/,`<div class="pc-section$1" data-section-index="${s}"`),v=document.createElement("template");v.innerHTML=w;let b=v.content.firstElementChild;b&&(a.replaceWith(b),this._bindTimelineGroupTabs(),this._bindTimelineGroupCellTooltip(),this._bindTimelineInteractions(),this._bindStateTimelineInteractions())},{signal:e})}}_bindTimelineGroupCellTooltip(){let e=this._resetAbort("_timelineGroupCellTooltipAbort");this._shadow.querySelectorAll(".pc-strip-rows .pc-strip-tooltip").forEach(n=>n.remove());let o=this._shadow.querySelectorAll(".pc-strip-rows");if(o.length===0)return;let i=this._hass?.states?.[(this._config?._zones||[])[0]?.entity]?.attributes?.unit_of_measurement||"\xB0C";for(let n of o){let a=n.querySelectorAll(".pc-cells");if(a.length===0)continue;let s=!!n.querySelector(".pc-state-timeline-cells"),r=n.querySelector(".pc-strip-crosshair"),l=To();n.style.position="relative",n.appendChild(l.element);for(let p of a)p.addEventListener("pointermove",c=>{if(c.pointerType==="touch")return;let u=c.target?.closest?.(".pc-cell");if(!u){l.hide(),r&&(r.style.display="none");return}let m=u.getAttribute("data-hour")||"",d=u.getAttribute("data-score"),f=d?s?`${m}: ${d}`:`${m}: ${d}${i}`:`${m}: --`,g=p.getBoundingClientRect();if(l.show(g,c.clientX-g.left,f),r){let w=n.getBoundingClientRect();r.style.left=`${c.clientX-w.left}px`,r.style.display=""}},{signal:e}),p.addEventListener("pointerleave",()=>{l.hide(),r&&(r.style.display="none")},{signal:e}),p.addEventListener("pointerdown",c=>{if(c.pointerType!=="touch")return;let u=c.target?.closest?.(".pc-cell");if(!u)return;let m=u.getAttribute("data-hour")||"",d=u.getAttribute("data-score"),f=d?s?`${m}: ${d}`:`${m}: ${d}${i}`:`${m}: --`,g=p.getBoundingClientRect();if(l.show(g,c.clientX-g.left,f),r){let w=n.getBoundingClientRect();r.style.left=`${c.clientX-w.left}px`,r.style.display=""}setTimeout(()=>{l.hide(),r&&(r.style.display="none")},2e3)},{signal:e})}}_bindSystemHealthGroupTabs(){let e=this._resetAbort("_systemHealthGroupTabsAbort"),o=this._shadow.querySelectorAll(".pc-section-system-health-group");if(o.length===0)return;let i=this._discovery;if(i)for(let n of o){let a=Number(n.dataset.sectionIndex);if(Number.isNaN(a))continue;let s=n.querySelectorAll(".pc-system-health-group-tab");for(let r of s)r.addEventListener("click",()=>{let l=r.dataset.tab;if(!l||!["bridge","homekit","api"].includes(l))return;let p=[...this._config?.sections||[]],c=p[a];if(!c||typeof c=="string"||c.type!=="system_health_group")return;let u={...c,active_tab:l};p[a]=u,this._config={...this._config,sections:p};let m=this._hass?.states||{},d=this._historyCache,f=Wn(u,i?.hubEntities||{},m,d);if(!f)return;let g=f.replace(/^<div class="pc-section([^"]*)"/,`<div class="pc-section$1" data-section-index="${a}"`),w=document.createElement("template");w.innerHTML=g;let v=w.content.firstElementChild;v&&(n.replaceWith(v),this._bindSystemHealthGroupTabs(),this._startCountdownTimer())},{signal:e})}}_renderSection(e,o,i,n){let a=typeof e=="string"?e:e.type,s=this._config,r=n.hubEntities,l=this._historyCache;switch(a){case"zones":return xn(o,s,i,n,l);case"api":return $n(r,i,e,l);case"graph":return Fn(e,o,l,i,n);case"donut":return In(e,r,i);case"bridge":return Sn(r,i,l);case"homekit":return kn(r,i,l);case"weather":return Tn(r,i,l);case"environment":return An(o,i,n);case"thermal":return Cn(o,i,n);case"schedule":return Mn(o,i,n);case"thermal_strip":return ma(o,e,i,n,l);case"comfort_strip":return ga(o,e,i,n,l);case"energy_flow":return Rn(o,i,n);case"radial":return On(o,e,i,n,l);case"home_status":return Pn(o,i,n,this._config||{});case"zone_ranking":return Eo(o,i,n);case"timeline_group":return Vn(e,o,i,n,l);case"system_health_group":return Wn(e,n?.hubEntities||{},i,l);default:return""}}_fireAction(e,o,i){if(!this._hass)return;let n=o[i]||this._config?.[i]||(i==="tap_action"?{action:"more-info"}:{action:"none"});ve(this,this._hass,n,e,Ot)}_applyTransitionGlow(e){let o=s=>{s&&(s.classList.add("pc-temp-transitioning"),setTimeout(()=>s.classList.remove("pc-temp-transitioning"),1100))},i=this._shadow.querySelectorAll(".pc-zone-row");i[e]&&o(i[e].querySelector(".pc-power-bar-fill"));let n=this._shadow.querySelectorAll(".pc-zone-row-pulse");o(n[e]||null);let a=this._shadow.querySelectorAll(".pc-arc-group");a[e]&&o(a[e].querySelector(".pc-arc-path"))}_updateZones(){if(!(!this._elements.zonesSection||!this._config||!this._hass||!this._discovery)){if(!Rt()){let e=this._config._zones||[],o=this._hass.states;for(let i=0;i<e.length;i++){let n=e[i].entity,a=this._prevStates[n],s=o[n];if(!a||!s)continue;let r=a.attributes?.current_temperature,l=s.attributes?.current_temperature;r!==void 0&&l!==void 0&&r!==l&&this._applyTransitionGlow(i)}}ca(this._elements.zonesSection,this._config._zones||[],this._config,this._hass.states,this._discovery,this._prevStates)}}_updateSections(){if(!this._hass||!this._discovery||!this._config)return;let e=this._hass.states,o=this._discovery,i=this._config._zones||[],n=this._rerenderTargets;if(!n)return;let a=new Set;for(let p of n){let c=this._shadow.querySelector(p.selector);if(!c||p.watchIds.length===0||!p.watchIds.some(g=>{let w=e[g],v=this._prevStates[g];return!v||v.state!==w?.state||v.last_updated!==w?.last_updated}))continue;let m=p.render();if(!m)continue;let d=document.createElement("template");d.innerHTML=m;let f=d.content.firstElementChild;f&&(c.replaceWith(f),a.add(p.selector))}let s=new Set([".pc-section-zones",".pc-section-api",".pc-section-bridge",".pc-section-homekit",".pc-section-weather",".pc-section-environment",".pc-section-thermal",".pc-section-schedule",".pc-section-home-status",".pc-section-zone-ranking"]);[...a].some(p=>s.has(p))&&this._bindSectionChipActions(),a.has(".pc-section-zones")&&(this._elements.zonesSection=this._shadow.querySelector(".pc-section-zones"),this._bindZoneActions(),this._bindChipActions()),a.has(".pc-section-api")&&(this._elements.apiSection=this._shadow.querySelector(".pc-section-api"),this._startCountdownTimer()),a.has(".pc-section-radial")&&this._bindRadialInteractions(),a.has(".pc-section-zone-ranking")&&this._bindZoneRankingTabs();let l=this._shadow.querySelector(".section-energy-flow");if(l&&i.some(c=>{let u=Y(c.entity),m=o.zoneEntities?.[u]||{};return[c.entity,m.heating_power,m.ac_power].filter(Boolean).some(f=>{let g=e[f],w=this._prevStates[f];return!w||w.state!==g?.state||w.last_updated!==g?.last_updated})})&&!ba(l,i,e,o)){let u=Rn(i,e,o);if(u){let m=document.createElement("template");m.innerHTML=u;let d=m.content.firstElementChild;d&&(l.replaceWith(d),a.add(".section-energy-flow"),this._bindEnergyFlowInteractions())}}}_updateHero(){if(!this._config||!this._hass||!this._discovery||this._config.show_hero===!1)return;let e=this._shadow.querySelector(".pc-hero");if(!e)return;let o=this._config,i=this._hass.states,n=this._discovery,a=o._zones||[],s=a.map(d=>{let f=Y(d.entity),g=n.zoneEntities?.[f]||{};return we(d.entity,g,i,d,o)}),r=jn(o,n,i),l=d=>{let f=a.findIndex(y=>y.entity===d);if(f<0)return d;let g=a[f],w=Y(d),v=n?.zoneEntities?.[w]||{};return ht(d,i,v,g)?.entityId||d},p=gn(a,this._historyCache,l),c=Un(s,o,p,r);if(!c)return;let u=document.createElement("template");u.innerHTML=c;let m=u.content.firstElementChild;m&&e.replaceWith(m)}_updateHistorySections(){if(!this._config||!this._hass||!this._discovery)return;let e=this._config,o=this._hass.states,i=this._discovery,n=e._zones||[],a=e.sections||[{type:"zones"}],s=[];for(let l=0;l<a.length;l++){let p=a[l],c=typeof p=="string"?p:p.type;if(!Jl.has(c))continue;let u=Ql[c];if(!u)continue;let m=this._shadow.querySelector(u);if(!m)continue;let d=this._renderSection(p,n,o,i);if(!d)continue;let f=d.replace(/^<div class="pc-section([^"]*)"/,`<div class="pc-section$1" data-section-index="${l}"`),g=document.createElement("template");g.innerHTML=f;let w=g.content.firstElementChild;w&&(m.replaceWith(w),s.push(c))}if(s.length===0)return;s.includes("zones")&&(this._elements.zonesSection=this._shadow.querySelector(".pc-section-zones"),this._bindZoneActions(),this._bindChipActions(),this._bindSparklineCrosshairs()),s.includes("api")&&(this._elements.apiSection=this._shadow.querySelector(".pc-section-api"),this._startCountdownTimer()),s.includes("radial")&&this._bindRadialInteractions(),s.includes("thermal_strip")&&(this._bindTimelineInteractions(),this._bindTimelineGroupCellTooltip()),s.includes("comfort_strip")&&this._bindHeatmapInteractions(),s.includes("timeline_group")&&(this._bindTimelineGroupTabs(),this._bindTimelineGroupCellTooltip(),this._bindTimelineInteractions(),this._bindStateTimelineInteractions()),s.includes("system_health_group")&&(this._bindSystemHealthGroupTabs(),this._startCountdownTimer()),s.some(l=>["zones","api","bridge","homekit","weather"].includes(l))&&this._bindSectionChipActions()}async _refreshHistoryIfNeeded(){if(!this._hass||!this._config||vn(this._historyCache))return;let o=(this._config?.sections||[]).some(f=>(typeof f=="string"?f:f?.type)==="timeline_group"),i=ea(),n=!o||i.stateData&&Object.values(i.stateData).some(f=>f.length>0);if(vn(i)&&n){this._historyCache=i,this._rebuildSparklinePathCache(),Object.values(i.data).filter(g=>g.length>=2).length>0&&(this._updateHistorySections(),this._updateHero());return}if(this._historyFetchInProgress)return;this._historyFetchInProgress=!0;let a=this._historyGen,s=this._config._zones||[],r=[],l=this._hass.states;for(let f of s){let g=Y(f.entity),w=this._discovery?.zoneEntities?.[g]||{},v=ht(f.entity,l,w,f);r.push(v.entityId);let b=Yt(f.entity,l,w,f);b&&r.push(b.entityId)}if(this._discovery?.hubEntities?.call_history&&r.push(this._discovery.hubEntities.call_history),this._discovery?.hubEntities?.api_usage&&r.push(this._discovery.hubEntities.api_usage),this._discovery?.hubEntities?.boiler_flow_temp&&r.push(this._discovery.hubEntities.boiler_flow_temp),this._discovery?.hubEntities?.homekit_reads_saved&&r.push(this._discovery.hubEntities.homekit_reads_saved),this._discovery?.hubEntities?.homekit_writes_saved&&r.push(this._discovery.hubEntities.homekit_writes_saved),this._discovery?.hubEntities?.outside_temp&&r.push(this._discovery.hubEntities.outside_temp),r.length===0){this._historyFetchInProgress=!1;return}let p=[...new Set(r.filter(f=>f&&typeof f=="string"&&f.includes(".")))];if(p.length===0){this._historyFetchInProgress=!1;return}let u=(this._config?.sections||[]).some(f=>(typeof f=="string"?f:f?.type)==="timeline_group"),m=[];if(u)for(let f of s)typeof f?.entity=="string"&&f.entity.startsWith("climate.")&&m.push(f.entity);let d=[...new Set(m.filter(f=>f.includes(".")))];try{let[f,g]=await Promise.all([Re(this._hass,p,24),d.length>0?Ai(this._hass,d,24):Promise.resolve({})]);if(a!==this._historyGen){Ot("History fetch result discarded \u2014 config changed during fetch");return}this._historyCache=ia(this._historyCache,f);let w={...this._historyCache.stateData||{}};for(let[y,_]of Object.entries(g))Array.isArray(_)&&_.length>0&&(w[y]=_);this._historyCache={...this._historyCache,stateData:w},this._rebuildSparklinePathCache(),oa(f,g);let v=Object.values(f).filter(y=>y.length>=2).length,b=Object.values(g).filter(y=>y.length>=1).length;(v>0||b>0)&&(this._updateHistorySections(),this._updateHero())}catch(f){Ot("History fetch failed, using cached data: %O",f)}finally{this._historyFetchInProgress=!1}}_getHomeAvgHistory(e){let o=this._historyCache?.data,i=this._hass?.states,n=this._discovery;if(!o||!i||!n||e.length===0)return[];let a=[],s=this._config?._zones||[];for(let l of e){if(l.isUnavailable)continue;let p=Y(l.entityId),c=n.zoneEntities?.[p]||{},u=s.find(f=>f.entity===l.entityId)||{entity:l.entityId},m=ht(l.entityId,i,c,u),d=o[m.entityId];Array.isArray(d)&&d.length>=2&&a.push(d)}return a.length===0?[]:a[0].map((l,p)=>{let c=[];for(let m of a){let d=m[Math.min(p,m.length-1)];d&&typeof d.v=="number"&&Number.isFinite(d.v)&&c.push(d.v)}let u=c.length>0?c.reduce((m,d)=>m+d,0)/c.length:l.v;return{t:l.t,v:u}})}_cacheWatchedStates(){if(!this._hass||!this._config||!this._discovery)return;let e=this._hass.states,o=this._config._zones||[],i=this._discovery.hubEntities,n={};for(let a of o){let s=a.entity;e[s]&&(n[s]=e[s]);let r=Y(s),l=this._discovery.zoneEntities?.[r]||{};for(let p of Object.values(l))p&&e[p]&&(n[p]=e[p])}for(let a of Object.values(i))a&&e[a]&&(n[a]=e[a]);this._prevStates=n}disconnectedCallback(){this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null),this._rafId&&(cancelAnimationFrame(this._rafId),this._rafId=null),this._chipAbort?.abort(),this._sectionChipAbort?.abort(),this._radialAbort?.abort(),this._timelineAbort?.abort(),this._stateTimelineAbort?.abort(),this._heatmapAbort?.abort(),this._energyFlowAbort?.abort(),this._sparklineAbort?.abort(),this._zoneRankingTabsAbort?.abort(),this._timelineGroupTabsAbort?.abort(),this._timelineGroupCellTooltipAbort?.abort(),this._systemHealthGroupTabsAbort?.abort(),this._stopRadialAnimations();let e=this._shadow?.querySelectorAll(".pc-zone-row")||[];for(let o of e){let i=o.__pulseCleanup;typeof i=="function"&&i()}}connectedCallback(){Wi(this),this._config&&this._hass&&!this._shadow.querySelector("ha-card")?(this._discovery||this._runDiscovery(),this._fullRender(),this._refreshHistoryIfNeeded()):this._config&&this._hass&&this._shadow.querySelector("ha-card")&&(this._bindSectionInteractions(),this._bindZoneActions(),this._bindChipActions(),this._bindSectionChipActions(),this._startCountdownTimer())}getCardSize(){let e=this._config?._zones?.length||1,o=this._config?.sections?.length||1;return Math.max(1,e+o)}getGridOptions(){return{columns:12,min_columns:3,rows:this.getCardSize(),min_rows:1}}static async getConfigElement(){return await import("./pulse-climate-editor.js"),document.createElement(Bi)}static getStubConfig(e){return{entity:Object.keys(e.states).find(i=>i.startsWith("climate."))||"climate.living_room"}}};customElements.get(uo)||customElements.define(uo,Gn);window.customCards=window.customCards||[];window.customCards.push({type:uo,name:"Pulse Climate Card",description:"Modular climate dashboard card with Tado CE enrichment"});console.info(`%c PULSE-CLIMATE-CARD %c v${Pi} `,"background:#4CAF50;color:white;font-weight:bold","background:#333;color:#fff");var La="1.8.1",ke="pulse-weather-card",Ra="pulse-weather-card-editor",Bt="Pulse Weather Card:",Ha=["overview","forecast","wind","air_quality","astro","alerts","atmosphere","meteogram"],Te={calm:"#5ac8fa",moderate:"#30d158",strong:"#ff9f0a",gale:"#ff453a"},Fo=[{max:5,color:"#5ac8fa"},{max:12,color:"#30d158"},{max:18,color:"#ff9f0a"},{max:1/0,color:"#ff453a"}],Io=[{max:11,tier:"calm"},{max:38,tier:"moderate"},{max:61,tier:"strong"},{max:1/0,tier:"gale"}],No=[{max:1,n:0,name:"Calm",desc:"Smoke rises vertically"},{max:5,n:1,name:"Light Air",desc:"Smoke drifts slowly"},{max:11,n:2,name:"Light Breeze",desc:"Leaves rustle"},{max:19,n:3,name:"Gentle Breeze",desc:"Leaves and twigs move"},{max:28,n:4,name:"Moderate Breeze",desc:"Small branches move"},{max:38,n:5,name:"Fresh Breeze",desc:"Small trees sway"},{max:49,n:6,name:"Strong Breeze",desc:"Large branches move"},{max:61,n:7,name:"Near Gale",desc:"Whole trees sway"},{max:74,n:8,name:"Gale",desc:"Twigs break off"},{max:88,n:9,name:"Strong Gale",desc:"Slight structural damage"},{max:102,n:10,name:"Storm",desc:"Trees uprooted"},{max:117,n:11,name:"Violent Storm",desc:"Widespread damage"},{max:1/0,n:12,name:"Hurricane",desc:"Devastating damage"}];var Xn=[{max:20,label:"Good",color:"#30d158",desc:"Air quality is satisfactory"},{max:40,label:"Fair",color:"#5ac8fa",desc:"Acceptable for most people"},{max:60,label:"Moderate",color:"#ff9f0a",desc:"Sensitive groups may be affected"},{max:80,label:"Poor",color:"#ff453a",desc:"Health effects possible for everyone"},{max:100,label:"Very Poor",color:"#8b0000",desc:"Serious health effects"},{max:1/0,label:"Extremely Poor",color:"#4a0020",desc:"Emergency conditions"}],Zn=[{max:50,label:"Good",color:"#30d158",desc:"Air quality is satisfactory"},{max:100,label:"Moderate",color:"#ffd60a",desc:"Acceptable for most people"},{max:150,label:"Unhealthy for Sensitive Groups",color:"#ff9f0a",desc:"Sensitive groups may experience effects"},{max:200,label:"Unhealthy",color:"#ff453a",desc:"Everyone may experience effects"},{max:300,label:"Very Unhealthy",color:"#8b0000",desc:"Health alert for everyone"},{max:1/0,label:"Hazardous",color:"#4a0020",desc:"Emergency conditions"}];var We=[{min:2,color:"#30d158",label:"Stable"},{min:0,color:"#ffd60a",label:"Marginal"},{min:-2,color:"#ff9f0a",label:"Slightly Unstable"},{min:-1/0,color:"#ff453a",label:"Unstable"}],Ae=80,Da=35;var Yn=.6,Oa=90,Pa=60,Ba=40,Kn=8;var Jn=1800*1e3,qa=7,Va=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],Wa={rain:"mdi:weather-pouring",wind:"mdi:weather-windy",snow:"mdi:weather-snowy-heavy",ice:"mdi:snowflake-alert",fog:"mdi:weather-fog",thunderstorm:"mdi:weather-lightning",heat:"mdi:thermometer-alert",cold:"mdi:snowflake-thermometer",flood:"mdi:home-flood",tornado:"mdi:weather-tornado",fire:"mdi:fire-alert",coastal:"mdi:waves",avalanche:"mdi:image-filter-hdr",unknown:"mdi:alert"},Qn={1:"#FFFF00",2:"#FFA500",3:"#FF9F0A",4:"#FF0000"},Ua={yellow:"#FFFF00",amber:"#FF9F0A",red:"#FF0000"};var ja=["temperature","apparent_temperature","dew_point","humidity","pressure","surface_pressure","wind_speed","wind_direction","wind_gusts","precipitation","rain","showers","snowfall","cloud_cover","cloud_cover_low","cloud_cover_mid","cloud_cover_high","uv_index","uv_index_clear_sky","visibility","cape","lifted_index","freezing_level_height","soil_temperature","soil_moisture","wind_shear_0_6_km","lapse_rate_700_500_hpa","lcl_height","stability_assessment","dew_point_comfort","visibility_category","feels_like_context","pressure_trend","european_aqi","us_aqi","pm2_5","pm10","nitrogen_dioxide","ozone","sulphur_dioxide","carbon_monoxide","carbon_dioxide","golden_hour_morning_start","golden_hour_morning_end","golden_hour_evening_start","golden_hour_evening_end","blue_hour_morning_start","blue_hour_morning_end","blue_hour_evening_start","blue_hour_evening_end","moon_phase","moonrise","moonset","daylight_duration"],Ga=["active_alert","upcoming_alert","alert_count"],ti="_weather",Xa=3;var Za={"clear-night":"\u{1F319}",cloudy:"\u2601\uFE0F",exceptional:"\u{1F321}\uFE0F",fog:"\u{1F32B}\uFE0F",hail:"\u{1F328}\uFE0F",lightning:"\u26A1","lightning-rainy":"\u26C8\uFE0F",partlycloudy:"\u26C5",pouring:"\u{1F327}\uFE0F",rainy:"\u{1F327}\uFE0F",snowy:"\u2744\uFE0F","snowy-rainy":"\u{1F328}\uFE0F",sunny:"\u2600\uFE0F",windy:"\u{1F4A8}","windy-variant":"\u{1F4A8}"},yt=29.53,Ya=["New Moon","Waxing Crescent","First Quarter","Waxing Gibbous","Full Moon","Waning Gibbous","Last Quarter","Waning Crescent"];var Ka=`${""}

${pe}
/* \u2500\u2500 Design Tokens \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
:host {
  display: block;

  /* Weather-specific glass intensity */
  --pulse-glass-blur: 20px;

  /* Typography */
  --pw-hero-size: 72px;
  --pw-hero-weight: 100;
  --pw-section-label-size: 11px;


  /* Semantic colors */
  --pw-color-freeze: #5ac8fa;
  --pw-color-stable: #30d158;
  --pw-text-overlay: #d0d0d0;
  --pw-shadow-overlay: 0 1px 3px rgba(0,0,0,0.6);

  /* Transitions */
  --pw-bg-transition: var(--pulse-anim-fill);

  /* \u2500\u2500 Wabi palette (sumi / nezumi / senmai / shu) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pw-sky-top: #1d2530;
  --pw-sky-mid: #384452;
  --pw-sky-bot: #827a6a;
  --pw-ink-cream: #fdf6e3;
  --pw-ink-cream-muted: rgba(229, 217, 194, 0.85);
  --pw-ink-cream-dim: rgba(229, 217, 194, 0.55);
  --pw-vermilion: #a83d2a;
  --pw-wind: #5ac8fa;
  --pw-warn-amber: #ff9f0a;
  --pw-warn-red: #ff453a;
  --pw-warn-yellow: #ffd60a;
  --pw-good-green: #30d158;

  /* Card-local \u2014 Weather is the only consumer at this size; everything else
     uses the shared --pulse-font-* scale. */
  --pw-font-caption: 13px;

  /* \u2500\u2500 Spacing scale \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pw-pad-x:     24px;   /* section left/right padding            */
  --pw-pad-y:     22px;   /* section top/bottom padding            */
  --pw-gap-block: 14px;   /* between sub-blocks                    */
  --pw-gap-tight:  6px;   /* within tight clusters                 */
}

/* \u2500\u2500 Card Shell \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-card {
  overflow: hidden;
  min-width: 0;
  /* Match cartouche radius (24px). Default HA card 12px is smaller than the
     cartouche frame's 24px, leaving a corner slice of pw-card background bleed
     through in light theme. Aligning here means cartouche fills card edge-to-edge. */
  border-radius: var(--pulse-radius-cartouche);
  background: var(--pulse-bg-card);
  color: var(--pulse-text-primary);
  /* font-family inherits from the HA frame \u2014 same as pulse-climate-card. */
  container-type: inline-size;
}

/* \u2500\u2500 Cartouche frame primitive \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* Default sky gradient \u2014 applies to every section unless that section
   paints its own background (atmosphere, air-quality). Promoted from
   per-section duplication so alerts / wind no longer leak light theme
   pw-card cream backdrop in light mode. */
.pw-cartouche {
  position: relative;
  border-radius: var(--pulse-radius-cartouche);
  overflow: hidden;
  isolation: isolate;
  background: linear-gradient(180deg,
    var(--pw-sky-top) 0%,
    var(--pw-sky-mid) 45%,
    var(--pw-sky-bot) 100%);
}

.pw-cartouche::before {
  content: "";
  position: absolute;
  inset: 14px;
  border: 1px solid rgba(229, 217, 194, 0.18);
  border-radius: 18px;
  z-index: 3;
  pointer-events: none;
}

/* Section content sits above the cartouche border */
.pw-cartouche > .pw-content {
  position: relative;
  z-index: 4;
}

/* \u2500\u2500 Section Shared \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-section { position: relative; min-width: 0; }
.pw-section + .pw-section { border-top: 1px solid var(--pulse-border-subtle); }

/* \u2500\u2500 Shared Status Label \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-status-label {
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  padding: 0 var(--pulse-space-card-wide);
  transition: color var(--pulse-anim-color);
  position: relative;
  z-index: 2;
}

/* \u2500\u2500 Mode Tabs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* \u2500\u2500 Glass Panel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* \u2500\u2500 Atmosphere Layer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.pw-fx,
.pw-wind-streaks,
.pw-atmos-fx,
.pw-smog-overlay,
.pw-haze-vignette {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.pw-fx,
.pw-wind-streaks,
.pw-atmos-fx { overflow: hidden; }
.pw-fx,
.pw-wind-streaks { z-index: 1; }

/* \u2500\u2500 Hero Display \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* \u2500\u2500 Temperature Arc \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* \u2500\u2500 Bottom Cards \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Precipitation bar label */
.pw-precip-label {
  font-size: 12px;
  color: var(--pulse-text-secondary);
  margin-bottom: 6px;
}

/* Snow badge */
.pw-snow-badge {
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  margin-top: 4px;
  position: relative;
  z-index: 2;
  text-shadow: var(--pw-shadow-overlay);
}

/* Feels like context */
.pw-feels-context {
  font-size: 10px;
  color: var(--pulse-text-secondary);
  text-align: center;
  position: relative;
  z-index: 2;
}

/* Snow precip fill \u2014 white gradient (bottom opaque \u2192 top transparent) */
.pw-precip-snow {
  background: linear-gradient(to top, var(--pw-text-overlay, #d0d0d0), transparent) !important;
}

/* Rain precip fill \u2014 gradient (bottom opaque \u2192 top fade) */
.pulse-precip-fill {
  background: linear-gradient(to top, #5ac8fa, rgba(90,200,250,0.15));
}

/* CAPE storm risk bar */

/* \u2500\u2500 Forecast \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.pw-hourly-strip {
  display: flex;
  gap: var(--pulse-space-hairline);
  overflow-x: auto;
  overflow-y: hidden;
  padding: 8px 0 12px;
  margin: 0 var(--pulse-space-card-wide);
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  cursor: grab;
}
.pw-hourly-strip::-webkit-scrollbar { display: none; }

/* \u2500\u2500 Wind Rose \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.pw-streak {
  position: absolute;
  height: 1px;
  border-radius: var(--pulse-radius-hairline);
  background: linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent);
  animation: pw-streakTravel linear infinite;
  animation-fill-mode: backwards;
}

.pw-rose-wrap {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
}

.pw-gust-sweep {
  animation: pw-gustPulse var(--gust-dur, 2s) ease-in-out infinite;
}

.pw-wind-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 3;
  pointer-events: none;
}

.pw-wind-speed {
  font-size: 28px;
  font-weight: 300;
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

.pw-wind-unit {
  font-size: 12px;
  color: var(--pulse-text-secondary);
  margin-top: 2px;
}

.pw-wind-beaufort {
  font-size: 17px;
  font-weight: 500;
  margin-top: 4px;
}

.pw-wind-beaufort-desc {
  font-size: 12px;
  color: var(--pulse-text-secondary);
}

/* \u2500\u2500 AQI Gauge \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-aqi { padding: 0 0 16px; position: relative; overflow: hidden; }

/* \u2500\u2500 Alerts \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.pw-alert-list { display: flex; flex-direction: column; gap: var(--pulse-space-element); padding: 0 var(--pulse-space-card-wide); }

.pw-alert-row {
  display: flex;
  gap: var(--pulse-space-row);
  padding: var(--pulse-space-row);
  background: var(--pulse-bg-elevated);
  border-radius: var(--pulse-radius-row);
  border-left: 3px solid;
}

.pw-alert-locations {
  font-size: 10px;
  color: var(--pulse-text-secondary);
  opacity: 0.85;
  margin-top: 3px;
}

/* \u2500\u2500 Atmosphere Column \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.pw-atmos-column-wrap {
  display: flex;
  align-items: stretch;
  padding: 8px var(--pulse-space-card-wide) 0;
  gap: var(--pulse-space-section);
  height: var(--pw-atmos-column-height, 200px);
  position: relative;
  z-index: 2;
}

.pw-atmos-scale {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  text-align: right;
  padding: 4px 0;
}

.pw-atmos-scale-label {
  font-size: 9px;
  color: var(--pulse-text-secondary);
  opacity: 0.7;
  font-variant-numeric: tabular-nums;
}

.pw-atmos-column {
  flex: 1;
  position: relative;
  border-radius: var(--pulse-radius-row);
  overflow: hidden;
  background: linear-gradient(to top, var(--pulse-bg-elevated) 0%, transparent 100%);
  border: 1px solid var(--pulse-border-subtle);
}

/* CAPE energy fill */
.pw-atmos-cape-fill {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 0 0 9px 9px;
  transition: height var(--pulse-anim-fill) ease;
}

/* Thermal particles */
.pw-thermal-particle {
  position: absolute;
  border-radius: var(--pulse-radius-circle);
  opacity: 0;
  animation: pw-thermalRise var(--rise-dur, 4s) ease-out infinite;
}

@keyframes pw-thermalRise {
  0% { transform: translateY(0) scale(1); opacity: 0; }
  10% { opacity: var(--peak-op, 0.4); }
  80% { opacity: var(--peak-op, 0.4); transform: translateY(var(--rise-dist, -80px)) scale(0.5); }
  100% { opacity: 0; transform: translateY(var(--rise-dist, -100px)) scale(0.3); }
}

/* Freezing level marker */
.pw-atmos-freeze-marker {
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  z-index: 2;
}

.pw-atmos-freeze-line {
  flex: 1;
  height: 1px;
  background: var(--pw-color-freeze);
  opacity: 0.4;
}

.pw-atmos-freeze-label {
  font-size: 10px;
  color: var(--pw-color-freeze);
  opacity: 0.6;
  padding: 0 6px;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}

/* LCL height marker (dashed line, grey \u2014 distinct from freeze marker) */
.pw-atmos-lcl-marker {
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  z-index: 2;
}

.pw-atmos-lcl-line {
  flex: 1;
  height: 0;
  border-top: 1px dashed rgba(160,160,160,0.4);
}

.pw-atmos-lcl-label {
  font-size: 10px;
  color: var(--pw-text-overlay);
  padding: 0 6px;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
  text-shadow: var(--pw-shadow-overlay);
}

.pw-atmos-ground-label {
  position: absolute;
  bottom: 4px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 10px;
  color: var(--pw-text-overlay);
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: var(--pw-shadow-overlay);
}

/* Tap-to-expand detail panel */

.pw-atmos-detail {
  overflow: hidden;
  max-height: 0;
  transition: max-height var(--pulse-anim-mode) ease;
  margin: 0 var(--pulse-space-card-wide);
}

.pw-atmos-detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 16px;
  padding: 12px 0;
  border-top: 1px solid var(--pulse-border-subtle);
}

.pw-atmos-detail-row {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-element);
}

.pw-atmos-detail-indicator {
  width: 4px;
  height: 24px;
  border-radius: var(--pulse-radius-bar);
  flex-shrink: 0;
}

.pw-atmos-detail-label {
  font-size: 10px;
  color: var(--pulse-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.pw-atmos-detail-value {
  font-size: 14px;
  font-weight: 300;
  font-variant-numeric: tabular-nums;
}

.pw-atmos-detail-desc {
  font-size: 9px;
  color: var(--pulse-text-secondary);
  opacity: 0.6;
}

/* \u2500\u2500 Severity Dot \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* \u2500\u2500 FX Keyframes \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes pw-rainFall {
  0% { transform: translateY(-20px); opacity: 0; }
  5% { opacity: 1; }
  95% { opacity: 0.8; }
  100% { transform: translateY(300px); opacity: 0; }
}

@keyframes pw-snowFall {
  0% { transform: translateY(-10px) translateX(0) rotate(0); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 0.6; }
  100% { transform: translateY(300px) translateX(30px) rotate(360deg); opacity: 0; }
}

@keyframes pw-flash {
  0%,100% { opacity: 0; }
  4% { opacity: 0.8; }
  6% { opacity: 0; }
  8% { opacity: 0.5; }
  10% { opacity: 0; }
}

@keyframes pw-boltStrike {
  0% { opacity: 0; filter: none; }
  3% { opacity: 0; }
  4% { opacity: 1; filter: drop-shadow(0 0 12px rgba(200,220,255,0.9)) drop-shadow(0 0 4px #fff); }
  6% { opacity: 0; filter: none; }
  8% { opacity: 0.7; filter: drop-shadow(0 0 6px rgba(200,220,255,0.5)); }
  10% { opacity: 0; filter: none; }
  100% { opacity: 0; }
}

@keyframes pw-fogDrift {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

@keyframes pw-rayPulse {
  0%,100% { opacity: 0.3; }
  50% { opacity: 0.7; }
}

@keyframes pw-cloudDrift {
  0% { transform: translateX(-120%); }
  100% { transform: translateX(500px); }
}

@keyframes pw-twinkle {
  0%,100% { opacity: 0.2; }
  50% { opacity: 0.9; }
}

@keyframes pw-shimmer {
  0% { background-position: 0% 0%; opacity: 0.4; }
  50% { background-position: 0% 100%; opacity: 0.8; }
  100% { background-position: 0% 0%; opacity: 0.4; }
}

@keyframes pw-rippleWave {
  0%, 100% { transform: scaleY(1) translateY(0); }
  50% { transform: scaleY(1.1) translateY(-3px); }
}

@keyframes pw-streakTravel {
  0% { translate: var(--sx) var(--sy); opacity: 0; }
  10% { opacity: var(--peak, 0.4); }
  90% { opacity: var(--peak, 0.4); }
  100% { translate: var(--ex) var(--ey); opacity: 0; }
}

@keyframes pw-arrowSway {
  0%   { transform: rotate(var(--sway-back)); }
  35%  { transform: rotate(var(--sway-fwd)); }
  65%  { transform: rotate(var(--sway-fwd)); }
  100% { transform: rotate(var(--sway-back)); }
}

@keyframes pw-roseShake {
  0%, 100% { translate: 0px 0px; }
  20%  { translate: var(--dx) var(--dy); }
  40%  { translate: calc(-0.6 * var(--dx)) calc(-0.6 * var(--dy)); }
  60%  { translate: calc(0.8 * var(--dx)) calc(0.8 * var(--dy)); }
  80%  { translate: calc(-0.3 * var(--dx)) calc(-0.3 * var(--dy)); }
}

@keyframes pw-gustPulse {
  0%   { opacity: 0.04; transform: scale(0.85); }
  40%  { opacity: var(--gust-peak, 0.2); transform: scale(1.05); }
  70%  { opacity: var(--gust-peak, 0.2); transform: scale(1.0); }
  100% { opacity: 0.04; transform: scale(0.85); }
}

@keyframes pw-breathe {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

@keyframes pw-dotPulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.3); }
}

@keyframes pw-sweepRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes pw-blipRing {
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(2.5); opacity: 0; }
}

@keyframes pw-blipPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.4); }
}

@keyframes pw-sunGlow {
  0%, 100% { filter: drop-shadow(0 0 8px rgba(255,200,50,0.4)); }
  50% { filter: drop-shadow(0 0 16px rgba(255,200,50,0.7)); }
}

@keyframes pw-moonGlow {
  0%, 100% { filter: drop-shadow(0 0 6px rgba(200,210,255,0.3)); }
  50% { filter: drop-shadow(0 0 12px rgba(200,210,255,0.5)); }
}

@keyframes pw-gaugeGlow {
  0%, 100% { filter: drop-shadow(0 0 4px var(--glow-color, rgba(255,255,255,0.2))); }
  50% { filter: drop-shadow(0 0 10px var(--glow-color, rgba(255,255,255,0.4))); }
}

/* \u2500\u2500 Air Haze FX \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.pw-dust-particle {
  position: absolute;
  border-radius: var(--pulse-radius-circle);
  background: rgba(180,160,120,0.3);
  animation: pw-dustFloat 8s ease-in-out infinite;
}

@keyframes pw-dustFloat {
  0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
  50% { transform: translateY(-20px) translateX(10px); opacity: 0.5; }
}

.pw-haze-blob {
  position: absolute;
  border-radius: var(--pulse-radius-circle);
  background: radial-gradient(ellipse, rgba(160,140,100,0.08), transparent 70%);
  animation: pw-hazeFloat 12s ease-in-out infinite;
}

@keyframes pw-hazeFloat {
  0%, 100% { transform: translateX(0); opacity: 0.3; }
  50% { transform: translateX(30px); opacity: 0.6; }
}

/* \u2500\u2500 Radar (CRT green phosphor style) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-radar {
  position: relative;
  width: 140px;
  height: 140px;
  border-radius: var(--pulse-radius-circle);
  overflow: hidden;
  background:
    repeating-radial-gradient(
      transparent, transparent 15%,
      var(--pw-radar-color, rgba(80,255,0,0.15)) 15.5%, transparent 16%
    ),
    linear-gradient(
      transparent 49.5%, var(--pw-radar-line, rgba(80,255,0,0.08)) 49.5%,
      var(--pw-radar-line, rgba(80,255,0,0.08)) 50.5%, transparent 50.5%
    ),
    linear-gradient(
      to right, transparent 49.5%, var(--pw-radar-line, rgba(80,255,0,0.08)) 49.5%,
      var(--pw-radar-line, rgba(80,255,0,0.08)) 50.5%, transparent 50.5%
    ),
    radial-gradient(var(--pw-radar-bg-inner, #001a00), var(--pw-radar-bg-outer, #000800));
}

.pw-radar::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: var(--pulse-radius-circle);
  background-image: conic-gradient(transparent 85%, var(--pw-radar-sweep, rgba(80,255,0,0.35)));
  animation: pw-sweepRotate var(--pw-radar-dur, 2.5s) linear infinite;
  will-change: transform;
}

.pw-radar::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: var(--pulse-radius-circle);
  background:
    radial-gradient(ellipse at 35% 25%, rgba(255,255,255,0.08) 0%, transparent 50%),
    radial-gradient(circle, transparent 55%, rgba(0,0,0,0.6) 100%);
  z-index: 3;
  pointer-events: none;
}

@keyframes pw-radarBlink {
  2%, 20% { background-color: var(--pw-blip-color, rgba(80,255,0,0.85)); box-shadow: 0 0 4px var(--pw-blip-color, rgba(80,255,0,0.6)); }
  90% { background-color: transparent; box-shadow: none; }
}

.pw-radar-blip {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: var(--pulse-radius-circle);
  transform: translate(-50%, -50%);
  z-index: 2;
  animation: pw-radarBlink var(--pw-radar-dur, 2.5s) ease-out infinite;
}

/* \u2500\u2500 Alert rows \u2014 Pulse DNA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-alert-list { display: flex; flex-direction: column; padding: 0 var(--pulse-space-card-wide); }

.pw-alert-row {
  display: flex;
  align-items: flex-start;
  gap: var(--pulse-space-row);
  padding: 10px 0;
  border-bottom: 1px solid var(--pulse-border-subtle);
}
.pw-alert-row:last-child { border-bottom: none; }

.pw-alert-locations {
  font-size: 10px;
  color: var(--pulse-text-secondary);
  opacity: 0.5;
  margin-top: 3px;
}

/* \u2500\u2500 Weather Summary \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-weather-summary { font-size: 13px; font-weight: 400; text-align: center; padding: 4px var(--pulse-space-card-wide) 8px; color: var(--pulse-text-primary); position: relative; z-index: 2; opacity: 0.85; }

/* \u2500\u2500 Day Progress Arc \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-day-arc { display: flex; align-items: center; gap: var(--pulse-space-element); padding: 4px var(--pulse-space-card-wide) 8px; position: relative; z-index: 2; }
.pw-day-arc-label { font-size: 10px; color: var(--pulse-text-secondary); font-variant-numeric: tabular-nums; opacity: 0.6; }
.pw-day-arc-bar { flex: 1; height: 2px; border-radius: var(--pulse-radius-hairline); background: var(--pulse-bg-elevated); position: relative; }
.pw-day-arc-fill { height: 100%; border-radius: var(--pulse-radius-hairline); background: linear-gradient(to right, #ff9f0a, #ffd60a); }
.pw-day-arc-marker { position: absolute; top: -3px; width: 8px; height: 8px; background: #ffd60a; border-radius: var(--pulse-radius-circle); border: 1px solid rgba(0,0,0,0.2); transform: translateX(-50%); box-shadow: 0 0 6px rgba(255,214,10,0.4); }

/* \u2500\u2500 Stability Badge \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-stability-badge { display: inline-block; font-size: 10px; font-weight: 600; padding: 2px 8px; border-radius: var(--pulse-radius-element); margin-left: 6px; vertical-align: middle; }

/* \u2500\u2500 Precip Time Markers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-precip-times { display: flex; justify-content: space-between; font-size: 9px; color: var(--pulse-text-secondary); opacity: 0.6; margin-top: 2px; }

/* \u2500\u2500 Freezing Level Marker (Temp Arc) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-arc-freeze { position: absolute; top: -6px; bottom: -6px; width: 1px; transform: translateX(-50%); }
.pw-arc-freeze-line { width: 1px; height: 100%; background: var(--pw-color-freeze); opacity: 0.5; }
.pw-arc-freeze-label { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); font-size: 8px; color: var(--pw-color-freeze); white-space: nowrap; }

/* \u2500\u2500 CAPE Sparkline \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-cape-sparkline { display: block; border-radius: var(--pulse-radius-bar); overflow: hidden; }
.pw-cape-peak { position: absolute; top: -12px; transform: translateX(-50%); font-size: 8px; color: var(--pulse-tier-strong); white-space: nowrap; font-variant-numeric: tabular-nums; }

/* \u2500\u2500 Comfort Bar (Dew Point) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-comfort-bar { display: flex; gap: var(--pulse-space-hairline); height: 4px; border-radius: var(--pulse-radius-bar); overflow: hidden; }
.pw-comfort-slot { flex: 1; border-radius: var(--pulse-radius-hairline); }

@media (prefers-reduced-motion: reduce) {
  .pw-streak,
  .pw-dust-particle,
  .pw-haze-blob,
  .pw-tension-wash.breathing,
  .pw-tension-vignette,
  .pw-radar::after,
  .pw-radar-blip,
  .pw-thermal-particle {
    animation: none !important;
  }
  .pw-atmos-detail {
    transition: none !important;
  }
}

/* \u2500\u2500 Tension Overlays \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-tension-vignette {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.pw-tension-wash {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.pw-tension-wash.breathing {
  animation: pw-breathe var(--breathe-dur, 4s) ease-in-out infinite;
}

@keyframes pw-vignettePulse {
  0%, 100% { opacity: var(--vignette-min, 0.5); }
  50% { opacity: var(--vignette-max, 1); }
}

/* \u2500\u2500 Meteogram \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-meteogram { padding: 0 0 16px; position: relative; overflow: hidden; }
.pw-meteogram-chart { display: block; width: 100%; height: auto; margin: 8px 0 0; position: relative; z-index: 2; }
/* Cloud strip fills the entire section so the band reads as edge-to-edge
   atmosphere rather than a strip floating inside the SVG. */
.pw-meteogram-cloud-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}
.pw-meteogram-cloud-slot {
  position: absolute;
  top: 0;
  bottom: 0;
  background: rgb(180, 190, 200);
}

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
 * Type-system primitives (single source of truth)
 * \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
 * Every section composes its DOM from t.* builders in type-system.js,
 * which emit one of these classes. Per-section CSS blocks below are
 * layout-only (padding, grid, gradient, brand-mark corner offset) \u2014
 * they should never restate font-size / font-weight
 * / text-transform. To add a new role, add it here AND in
 * type-system.js together.
 */

/* Hero block \u2014 wraps heroTier + display + narrative. Sections that
   compose their hero via t.heroBlock get the centred stacked layout
   for free; sections that need a different rhythm compose the
   primitives manually. */
.pw-hero-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--pw-gap-tight);
}
.pw-hero-block .pw-t-narrative { margin-top: 0; }

/* Top-marg wrapper \u2014 reserves the right gutter for the brand mark. */
.pw-t-marg { padding-right: 36px; }
/* Narrative directly under a kicker sits a tight gap below. */
.pw-t-marg .pw-t-kicker + .pw-t-narrative { margin-top: var(--pw-gap-tight); }

/* Section anchor: UPPERCASE 0.32em kicker. */
.pw-t-kicker {
  font-weight: 600;
  font-size: var(--pulse-font-kicker);
  letter-spacing: var(--pulse-ls-kicker);
  text-transform: uppercase;
  opacity: 0.6;
  line-height: 1;
}
.pw-t-kicker::after { content: " \xB7"; opacity: 0.5; }

/* Hero numbers \u2014 display size, tabular numerals. */
.pw-t-display {
  font-weight: 600;
  font-size: var(--pulse-font-display);
  letter-spacing: var(--pulse-ls-display);
  line-height: 1;
  font-variant-numeric: tabular-nums;
  color: var(--pw-ink-cream);
  text-shadow: 0 6px 36px rgba(0, 0, 0, 0.5);
  text-align: center;
}
.pw-t-display-suf {
  font-size: 0.48em;
  vertical-align: super;
  margin-left: -3px;
  text-shadow: none;
}

/* Hero tier \u2014 Atmosphere uses the larger title flavour, AQI the
   smaller body-sm flavour. Title Case \u2014 no text-transform. */
.pw-t-hero-tier {
  font-weight: 600;
  text-align: center;
}
.pw-t-hero-tier-atmos {
  font-size: var(--pulse-font-hero);
  letter-spacing: var(--pulse-ls-title);
  line-height: 1;
}
.pw-t-hero-tier-aqi {
  font-size: var(--pulse-font-body);
  letter-spacing: 0.04em;
  margin-top: 3px;
}

/* Narrative \u2014 Sentence case body. Centred caption that fills the
   section width; copy is short enough that wrapping happens only on
   narrow phones. Sections that need a different rhythm override. */
.pw-t-narrative {
  font-weight: 400;
  font-size: var(--pulse-font-section-title);
  line-height: 1.45;
  color: var(--pw-ink-cream-muted);
  text-align: center;
  margin-top: var(--pw-gap-tight);
}

/* Italic gloss \u2014 lowercase italic body-sm. */
.pw-t-gloss {
  font-style: italic;
  font-weight: 600;
  font-size: var(--pulse-font-body);
  letter-spacing: 0.05em;
  text-transform: lowercase;
  color: var(--pw-ink-cream-dim);
  text-align: center;
}

/* Italic meta caption \u2014 sentence-case italic micro. */
.pw-t-meta {
  font-style: italic;
  font-weight: 600;
  font-size: var(--pulse-font-label);
  letter-spacing: 0.04em;
  text-align: center;
  color: var(--pw-ink-cream-dim);
}

/* Stat tile primitive (value + label). */
.pw-t-stat { text-align: center; padding: 6px 4px; }
.pw-t-stat-v {
  font-weight: 600;
  font-size: var(--pw-font-caption);
  line-height: 1;
  font-variant-numeric: tabular-nums;
  color: var(--pw-ink-cream);
}
.pw-t-stat-l {
  font-weight: 600;
  font-size: var(--pulse-font-label);
  letter-spacing: var(--pulse-ls-micro);
  text-transform: lowercase;
  opacity: 0.55;
  margin-top: 5px;
}
/* Data tokens (chemical formulae, source acronyms) render as-given. */
.pw-t-data,
.pw-t-stat-l.pw-t-data {
  text-transform: none;
}

/* Chart caption \u2014 header above a chart. Lowercase 0.14em micro. */
.pw-t-chart-caption {
  text-align: center;
  font-weight: 600;
  font-size: var(--pulse-font-label);
  letter-spacing: var(--pulse-ls-micro);
  text-transform: lowercase;
  opacity: 0.5;
  margin-top: var(--pw-gap-block);
  margin-bottom: 4px;
}

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
 * Pro toggle scaffolding
 * \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
 * Brand-mark corner becomes a <button>. data-pro on the section root
 * swaps default \u2194 pro view. Shared filled-disc visual lives here so
 * every section gets the same toggle visual without redeclaring it.
 *
 * Phase A.1 lands the scaffolding only; per-section pro views land
 * in Phase B as the shells migrate.
 */

button.pw-brand-mark-corner {
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  border-radius: var(--pulse-radius-circle);
  transition: transform var(--pulse-anim-fast) ease;
}
button.pw-brand-mark-corner:hover {
  transform: scale(1.08);
}
button.pw-brand-mark-corner:focus-visible {
  outline: 2px solid var(--pulse-accent, var(--pw-vermilion));
  outline-offset: 3px;
}
/* Decorative brand mark (sections without a click action \u2014 Forecast,
   Atmosphere) sits at lower opacity so users don't try to tap it.
   Interactive marks live at full opacity, gain hover scale + focus
   ring above. */
div.pw-brand-mark-corner {
  opacity: 0.55;
}

/* Pro state: brand-mark circle fills as a solid \u6731 disc + dot dims. */
.pw-section[data-pro="true"] .pw-brand-mark-corner svg .mc {
  fill: var(--pw-vermilion);
  stroke-width: 0;
  opacity: 1;
}
.pw-section[data-pro="true"] .pw-brand-mark-corner svg .md {
  opacity: 0.7;
}

/* Default-vs-pro view swap (in-place fade replace). Sections that
   only have a default view today work fine \u2014 the rule has no effect
   without a sibling .pw-view-pro.
   The view wrapper inherits the same flex-column layout the content
   slot uses, so children inside a view keep their gap rhythm. */
.pw-view {
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  transition: opacity var(--pulse-anim-medium) ease;
}
.pw-section[data-pro="false"] .pw-view-pro,
.pw-section[data-pro="true"]  .pw-view-default {
  display: none;
}

/* \u2500\u2500 Overview \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* Sky gradient inherited from .pw-cartouche default. */
.pw-overview-v2 .pw-content {
  padding: var(--pw-pad-y) var(--pw-pad-x);
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  color: var(--pw-ink-cream-muted);
  font-family: inherit;
}
/* Location stamp \u2014 same anatomy as kicker but tighter tracking and
   smaller-cap aesthetic; rendered in Overview only via plain markup,
   not via t.kicker (which would add the trailing " \xB7"). */
.pw-overview-v2 .pw-loc-stamp {
  font-weight: 600;
  font-size: var(--pulse-font-kicker);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  opacity: 0.55;
  text-align: center;
}
.pw-overview-v2 .pw-hero-block {
  text-align: center;
  margin: 0;
}
/* Overview stats use vertical dividers between columns instead of a
   top hairline \u2014 gives a calmer visual rhythm under the busy hero
   block. */
.pw-overview-v2 .pulse-stats-row .pw-t-stat {
  padding: 7px 4px;
  border-right: 1px solid rgba(229, 217, 194, 0.1);
}
.pw-overview-v2 .pulse-stats-row .pw-t-stat:last-child {
  border-right: none;
}
.pw-overview-v2 .pw-brand-mark-corner {
  position: absolute;
  top: 18px;
  right: var(--pulse-space-card-wide);
  z-index: 5;
}
/* Pro view: 7-day temperature spark sits between the day arc and the
   stats grid. Caption above, sparkline below \u2014 same anatomy as a
   chart-caption + chart pair anywhere else in the family. */
.pw-overview-v2 .pw-overview-spark-block {
  margin: 0;
}
.pw-overview-v2 .pw-overview-spark {
  height: 38px;
}
.pw-overview-v2 .pw-overview-spark svg {
  width: 100%;
  height: 100%;
  display: block;
}

/* \u2500\u2500 Meteogram \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* Sky gradient inherited from .pw-cartouche default. */
.pw-meteogram-v2 .pw-content {
  padding: var(--pw-pad-y) var(--pw-pad-x);
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  color: var(--pw-ink-cream-muted);
  font-family: inherit;
}
.pw-meteogram-v2 .pw-meteogram-chart {
  position: relative;
  z-index: 2;
}
.pw-meteogram-v2 .pw-brand-mark-corner {
  position: absolute;
  top: 18px;
  right: var(--pulse-space-card-wide);
  z-index: 5;
}

/* \u2500\u2500 Forecast \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* Sky gradient inherited from .pw-cartouche default. */
.pw-forecast-v2 .pw-content {
  padding: var(--pw-pad-y) var(--pw-pad-x);
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  color: var(--pw-ink-cream-muted);
  font-family: inherit;
}
.pw-forecast-v2 .pw-fc-list {
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-tight);
  margin-top: 0;
}
.pw-forecast-v2 .pw-fc-row {
  display: grid;
  grid-template-columns: 60px 24px 36px 1fr 60px;
  align-items: center;
  gap: var(--pulse-space-element);
  padding: 5px 0;
  font-size: var(--pw-font-caption);
}
.pw-forecast-v2 .pw-fc-row.is-today .pw-fc-day {
  color: var(--pw-ink-cream);
  font-weight: 600;
}
.pw-forecast-v2 .pw-fc-day {
  color: var(--pw-ink-cream-dim);
  font-weight: 600;
}
.pw-forecast-v2 .pw-fc-icon { text-align: center; font-size: 16px; }
.pw-forecast-v2 .pw-fc-pop {
  text-align: right;
  color: var(--pw-vermilion);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  font-size: var(--pulse-font-label);
}
.pw-forecast-v2 .pw-fc-pop:empty { visibility: hidden; }
.pw-forecast-v2 .pw-fc-bar {
  position: relative;
  height: 5px;
  background: rgba(229, 217, 194, 0.08);
  border-radius: 2.5px;
}
.pw-forecast-v2 .pw-fc-bar-fill {
  position: absolute;
  top: 0;
  bottom: 0;
  background: linear-gradient(90deg, #5e6776 0%, #827a6a 50%, var(--pw-vermilion) 100%);
  border-radius: 2.5px;
}
.pw-forecast-v2 .pw-fc-now {
  position: absolute;
  top: -3px;
  width: 6px;
  height: 11px;
  background: var(--pw-ink-cream);
  border-radius: var(--pulse-radius-bar);
  transform: translateX(-50%);
  box-shadow: 0 0 4px rgba(253, 246, 227, 0.6);
}
.pw-forecast-v2 .pw-fc-range {
  display: flex;
  justify-content: space-between;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.2px;
  gap: var(--pulse-space-chip);
  font-weight: 600;
}
.pw-forecast-v2 .pw-fc-lo { color: var(--pw-ink-cream-dim); }
.pw-forecast-v2 .pw-fc-hi {
  color: var(--pw-ink-cream);
  font-weight: 600;
}
.pw-forecast-v2 .pw-brand-mark-corner {
  position: absolute;
  top: 18px;
  right: var(--pulse-space-card-wide);
  z-index: 5;
}
/* \u2500\u2500 Astro \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* Sky gradient inherited from .pw-cartouche default. */
/* (Night override below paints a deeper midnight palette.) */
/* After sunset / before sunrise the section paints a deeper midnight
   palette so the moon arc reads against night colour, not day. */
.pw-astro-v2.is-night {
  background: linear-gradient(180deg, #0a0e1f 0%, #131a35 55%, #1f2548 100%);
}
/* Sunrise/sunset labels are still informative at night ("here's when
   the sun will be back"), but they shouldn't dominate. Drop their
   contrast a touch. */
.pw-astro-v2.is-night .pw-t-kicker { opacity: 0.5; }
.pw-astro-v2 .pw-content {
  padding: var(--pw-pad-y) var(--pw-pad-x);
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  color: var(--pw-ink-cream-muted);
  font-family: inherit;
}
/* \u2500\u2500 Hero (Daylight / Night + duration) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-astro-v2 .pw-astro-hero {
  display: flex;
  align-items: baseline;
  gap: var(--pulse-space-panel);
  flex-wrap: wrap;
}
.pw-astro-v2 .pw-astro-hero-tier {
  font-size: var(--pulse-font-hero);
  font-weight: 500;
  letter-spacing: var(--pulse-ls-title);
  line-height: 1;
  color: var(--pw-warn-amber);
  text-transform: capitalize;
}
.pw-astro-v2.is-night .pw-astro-hero-tier { color: var(--pw-wind); }
.pw-astro-v2 .pw-astro-hero-num {
  font-size: 28px;
  font-weight: 300;
  letter-spacing: -0.5px;
  line-height: 1;
  font-variant-numeric: tabular-nums;
  color: var(--pw-ink-cream);
}

/* \u2500\u2500 Moon hero row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-astro-v2 .pw-astro-moon-hero {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-section);
  padding: var(--pw-gap-tight) 0;
}
.pw-astro-v2 .pw-astro-moon-glyph {
  flex-shrink: 0;
  filter: drop-shadow(0 0 6px rgba(232, 224, 208, 0.25));
}
.pw-astro-v2 .pw-astro-moon-text {
  display: flex;
  flex-direction: column;
  gap: var(--pulse-space-hairline);
}
.pw-astro-v2 .pw-astro-moon-name {
  font-size: var(--pulse-font-body);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--pw-ink-cream-muted);
}
.pw-astro-v2 .pw-astro-moon-meta {
  font-size: var(--pulse-font-label);
  color: var(--pw-ink-cream-dim);
  letter-spacing: var(--pulse-ls-micro);
  text-transform: lowercase;
}
.pw-astro-v2 .pw-astro-moon-illum {
  font-variant-numeric: tabular-nums;
  font-weight: 600;
  color: var(--pw-ink-cream-muted);
}

/* \u2500\u2500 24h ribbon \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-astro-v2 .pw-astro-rb {
  position: relative;
  height: 84px;
  border-radius: var(--pulse-radius-row);
  overflow: visible;
  margin-top: var(--pw-gap-tight);
}
.pw-astro-v2 .pw-astro-rb-track {
  position: absolute;
  inset: 22px 0 24px 0;
  border-radius: var(--pulse-radius-element);
  box-shadow: inset 0 0 0 1px rgba(229, 217, 194, 0.1);
}
.pw-astro-v2 .pw-astro-rb-now {
  position: absolute;
  top: 14px;
  bottom: 16px;
  width: 2px;
  margin-left: -1px;
  background: var(--pw-ink-cream);
  box-shadow: 0 0 8px rgba(253, 246, 227, 0.7);
  z-index: 3;
}
/* Axis labels are absolutely positioned at their actual hour
   percentages (0 / 25 / 50 / 75 / 100) so the visual position of
   each tick matches the underlying timeline. A grid-based layout
   would centre intermediate labels inside their grid cells (30%
   / 50% / 70%) and create a 4\u20135% drift between label position and
   actual time \u2014 making NOW-cursor look misaligned even when its
   percentage is correct. */
.pw-astro-v2 .pw-astro-rb-axis {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1.2em;
  font-size: var(--pulse-font-label);
  color: var(--pw-ink-cream-dim);
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.08em;
}
.pw-astro-v2 .pw-astro-rb-axis span {
  position: absolute;
  bottom: 0;
  transform: translateX(-50%);
}
.pw-astro-v2 .pw-astro-rb-axis span:nth-child(1) { left: 0; transform: translateX(0); }
.pw-astro-v2 .pw-astro-rb-axis span:nth-child(2) { left: 25%; }
.pw-astro-v2 .pw-astro-rb-axis span:nth-child(3) { left: 50%; }
.pw-astro-v2 .pw-astro-rb-axis span:nth-child(4) { left: 75%; }
.pw-astro-v2 .pw-astro-rb-axis span:nth-child(5) { left: 100%; transform: translateX(-100%); }

/* The second stats row sits flush under the first \u2014 no divider, no
   extra margin \u2014 so they read as one block. */
.pw-astro-v2 .pulse-stats-row + .pulse-stats-row {
  margin-top: var(--pw-gap-tight);
}
.pw-astro-v2 .pw-brand-mark-corner {
  position: absolute;
  top: 18px;
  right: var(--pulse-space-card-wide);
  z-index: 5;
}

/* \u2500\u2500 Atmosphere \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-atmosphere-v2 {
  background:
    radial-gradient(ellipse at 50% 50%, rgba(168, 61, 42, 0.14) 0%, transparent 70%),
    linear-gradient(180deg, #0a0a1a 0%, #1a1a2a 50%, #2a2a3a 100%);
}
.pw-atmosphere-v2 .pw-content {
  padding: var(--pw-pad-y) var(--pw-pad-x);
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  color: var(--pw-ink-cream-muted);
  font-family: inherit;
}
/* Vertical column visualisation \u2014 atmospheric profile up to 5km
   (auto-scales when freeze level or LCL exceed 4km). The CAPE fill
   grows from the surface up; the freeze level and LCL markers are
   absolutely-positioned tags + lines at their altitude bottom-%. */
.pw-atmosphere-v2 .pw-atmos-column-wrap {
  display: flex;
  gap: var(--pulse-space-panel);
  align-items: stretch;
  height: 200px;
  margin-top: var(--pw-gap-tight);
  padding: 0 4px;
}
.pw-atmosphere-v2 .pw-atmos-scale {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 600;
  font-size: var(--pulse-font-label);
  letter-spacing: var(--pulse-ls-micro);
  opacity: 0.5;
  font-variant-numeric: tabular-nums;
}
.pw-atmosphere-v2 .pw-atmos-column {
  flex: 1;
  position: relative;
  background: rgba(229, 217, 194, 0.04);
  border-radius: var(--pulse-radius-pill);
  border: 1px solid rgba(229, 217, 194, 0.1);
  overflow: hidden;
}
.pw-atmosphere-v2 .pw-atmos-cape-fill {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  border-top: 1px solid var(--pw-vermilion);
}
.pw-atmosphere-v2 .pw-atmos-freeze-marker,
.pw-atmosphere-v2 .pw-atmos-lcl-marker {
  position: absolute;
  left: 0; right: 0;
  display: flex;
  align-items: center;
  gap: var(--pulse-space-chip);
  padding-left: 6px;
}
.pw-atmosphere-v2 .pw-atmos-freeze-line {
  flex: 1;
  height: 1px;
  background: rgba(90, 200, 250, 0.5);
}
.pw-atmosphere-v2 .pw-atmos-freeze-label {
  font-weight: 600;
  font-size: var(--pulse-font-label);
  color: var(--pw-wind);
  background: var(--pw-sky-top);
  padding: 1px 5px;
  border-radius: var(--pulse-radius-tight);
}
.pw-atmosphere-v2 .pw-atmos-lcl-line {
  flex: 1;
  height: 0;
  border-top: 1px dashed rgba(208, 208, 208, 0.45);
}
.pw-atmosphere-v2 .pw-atmos-lcl-label {
  font-weight: 600;
  font-size: var(--pulse-font-label);
  color: rgba(208, 208, 208, 0.85);
  background: var(--pw-sky-top);
  padding: 1px 5px;
  border-radius: var(--pulse-radius-tight);
}
.pw-atmosphere-v2 .pw-atmos-ground-label {
  position: absolute;
  bottom: 4px;
  left: 0;
  right: 0;
  text-align: center;
  font-weight: 600;
  font-size: var(--pulse-font-label);
  letter-spacing: var(--pulse-ls-micro);
  text-transform: lowercase;
  opacity: 0.45;
}
.pw-atmosphere-v2 .pw-brand-mark-corner {
  position: absolute;
  top: 18px;
  right: var(--pulse-space-card-wide);
  z-index: 5;
}

/* \u2500\u2500 Wind (cartouche wrap only \u2014 rose preserved) \u2500 */
.pw-wind-v2 .pw-content {
  padding: var(--pw-pad-y) var(--pw-pad-x);
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  color: var(--pw-ink-cream-muted);
  font-family: inherit;
  position: relative;
}
.pw-wind-v2 .pw-brand-mark-corner {
  position: absolute;
  top: 18px;
  right: var(--pulse-space-card-wide);
  z-index: 5;
}
/* \u2500\u2500 Air quality \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-air-quality-v2 {
  background:
    radial-gradient(ellipse at 50% 50%, rgba(255, 214, 10, 0.06) 0%, transparent 70%),
    linear-gradient(180deg, #2a2a1a 0%, #1a1a0a 50%, #0a0a0a 100%);
}
.pw-air-quality-v2 .pw-content {
  padding: var(--pw-pad-y) var(--pw-pad-x);
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  color: var(--pw-ink-cream-muted);
  font-family: inherit;
}
.pw-air-quality-v2 .pw-aq-band {
  position: relative;
  height: 8px;
  background: linear-gradient(90deg,
    var(--pw-good-green) 0%,
    var(--pw-warn-yellow) 25%,
    var(--pw-warn-amber) 50%,
    var(--pw-warn-red) 75%,
    #8b0000 100%);
  border-radius: var(--pulse-radius-small);
}
.pw-air-quality-v2 .pw-aq-marker {
  position: absolute;
  top: -3px;
  width: 3px;
  height: 14px;
  background: var(--pw-ink-cream);
  transform: translateX(-50%);
  box-shadow: 0 0 4px rgba(253, 246, 227, 0.6);
}
.pw-air-quality-v2 .pw-aq-band-labels {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: var(--pulse-font-label);
  letter-spacing: 0.08em;
  text-transform: lowercase;
  opacity: 0.6;
}
/* Pollutant tiles use the larger body size \u2014 the value here is a
   hero stat, not a chip. The grid layout itself comes from the
   shared .pulse-stats-row primitive. */
.pw-air-quality-v2 .pulse-stats-row .pw-t-stat-v {
  font-size: var(--pulse-font-section-title);
}
.pw-air-quality-v2 .pw-brand-mark-corner {
  position: absolute;
  top: 18px;
  right: var(--pulse-space-card-wide);
  z-index: 5;
}

/* \u2500\u2500 Alerts (airport ticker rows) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-alerts-v2 .pw-content {
  padding: var(--pw-pad-y) var(--pw-pad-x);
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  color: var(--pw-ink-cream-muted);
  font-family: inherit;
  position: relative;
}
.pw-alerts-v2 .pw-alert-list {
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-tight);
  margin-top: 4px;
}
.pw-alerts-v2 .pw-alert-ticker {
  background: #000;
  border: 1px solid;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: var(--pulse-space-row);
  font-family: 'SF Mono', 'JetBrains Mono', Menlo, Consolas, monospace;
  box-shadow: inset 0 0 12px;
}
.pw-alerts-v2 .pw-alert-tri {
  font-size: var(--pulse-font-body);
  animation: pw-alertBlink 1s step-end infinite;
}
.pw-alerts-v2 .pw-alert-amber .pw-alert-tri { color: var(--pw-warn-yellow); }
.pw-alerts-v2 .pw-alert-red .pw-alert-tri { color: var(--pw-warn-red); }
.pw-alerts-v2 .pw-alert-text {
  font-weight: 700;
  font-size: var(--pw-font-caption);
  letter-spacing: 0.08em;
  line-height: 1.4;
}
.pw-alerts-v2 .pw-alert-amber .pw-alert-text {
  color: var(--pw-warn-yellow);
  text-shadow: 0 0 6px rgba(255, 214, 10, 0.5);
}
.pw-alerts-v2 .pw-alert-red .pw-alert-text {
  color: var(--pw-warn-red);
  text-shadow: 0 0 6px rgba(255, 69, 58, 0.5);
}
.pw-alerts-v2 .pw-alert-timestamp {
  text-align: right;
  margin-top: 4px;
  font-family: 'SF Mono', 'JetBrains Mono', Menlo, Consolas, monospace;
  font-weight: 600;
  font-size: var(--pulse-font-label);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.pw-alerts-v2 .pw-alert-timestamp.pw-alert-amber { color: rgba(255, 159, 10, 0.55); }
.pw-alerts-v2 .pw-alert-timestamp.pw-alert-red { color: rgba(255, 69, 58, 0.7); }
.pw-alerts-v2 .pw-all-clear-v2 {
  text-align: center;
  font-weight: 600;
  font-size: var(--pulse-font-body);
  color: var(--pw-ink-cream-dim);
  font-style: italic;
  letter-spacing: 0.04em;
  margin-top: 4px;
}
.pw-alerts-v2 .pw-all-clear-v2 strong {
  color: var(--pw-good-green);
  font-style: normal;
  font-weight: 600;
  display: block;
  font-size: var(--pulse-font-section-title);
  margin-bottom: 2px;
}
.pw-alerts-v2 .pw-brand-mark-corner {
  position: absolute;
  top: 18px;
  right: var(--pulse-space-card-wide);
  z-index: 5;
}
/* Pro view: per-alert detail card. Each card stacks headline +
   meta line + description + locations vertically; the tone modifier
   (.pw-alert-amber / .pw-alert-red) drives border + headline colour. */
.pw-alerts-v2 .pw-alert-detail {
  background: rgba(229, 217, 194, 0.04);
  border: 1px solid;
  border-radius: var(--pulse-radius-pill);
  padding: 10px 12px;
  margin-top: var(--pw-gap-tight);
}
.pw-alerts-v2 .pw-alert-detail.pw-alert-amber {
  border-color: rgba(255, 159, 10, 0.3);
}
.pw-alerts-v2 .pw-alert-detail.pw-alert-red {
  border-color: rgba(255, 69, 58, 0.45);
}
.pw-alerts-v2 .pw-alert-detail-head {
  font-weight: 600;
  font-size: var(--pulse-font-section-title);
  line-height: 1.3;
  margin-bottom: var(--pw-gap-tight);
}
.pw-alerts-v2 .pw-alert-detail.pw-alert-amber .pw-alert-detail-head {
  color: var(--pw-warn-yellow);
}
.pw-alerts-v2 .pw-alert-detail.pw-alert-red .pw-alert-detail-head {
  color: var(--pw-warn-red);
}
.pw-alerts-v2 .pw-alert-detail-meta {
  font-weight: 600;
  font-size: var(--pulse-font-label);
  letter-spacing: var(--pulse-ls-micro);
  opacity: 0.55;
  margin-bottom: var(--pw-gap-tight);
}
.pw-alerts-v2 .pw-alert-detail-desc {
  font-size: var(--pw-font-caption);
  line-height: 1.5;
  color: var(--pw-ink-cream-muted);
  margin-bottom: var(--pw-gap-tight);
}
.pw-alerts-v2 .pw-alert-detail-loc {
  font-size: var(--pulse-font-label);
  letter-spacing: 0.04em;
  opacity: 0.6;
}
@keyframes pw-alertBlink {
  50% { opacity: 0.3; }
}
`;var Ja=[{type:"overview"}],ec={overview:{},forecast:{mode:"both"},wind:{speed_mode:"speed"},air_quality:{scale:"eu"},astro:{},alerts:{},atmosphere:{}};function zo(t){if(!t)return{type:"overview"};if(typeof t=="string")return zo({type:t});if(typeof t!="object")return{type:"overview"};let e=Ha.includes(t.type)?t.type:"overview";return{...ec[e]||{},...t,type:e}}function Qa(t){if(!t||typeof t!="object")return{type:"custom:pulse-weather-card",sections:Ja.map(zo)};let e=t,o=Array.isArray(e.sections)&&e.sections.length>0?e.sections.map(zo):Ja.map(zo);return{type:e.type||"custom:pulse-weather-card",weather_entity:e.weather_entity||void 0,atmos_source:e.atmos_source||void 0,sections:o}}function ei(t){let e=t.replace(/^weather\./,"");return e.endsWith(ti)&&(e=e.slice(0,-ti.length)),e}function tr(t,e){let o=e.weather_entity||Object.keys(t).find(p=>p.startsWith("weather."))||"",i=e.atmos_source||ei(o),n={};for(let p of ja){let c=`sensor.${i}_${p}`;c in t&&(n[p]=c)}let a=Object.keys(n).length>=Xa,s=a?n:{},r=[];if(e.alert_entities&&e.alert_entities.length>0)for(let p of e.alert_entities)p in t&&r.push(p);else if(a){for(let u of Ga){let m=`sensor.${i}_${u}`,d=`sensor.${i}_warnings_${u}`;m in t?r.push(m):d in t&&r.push(d)}let p=`binary_sensor.${i}_alert_active`,c=`binary_sensor.${i}_warnings_alert_active`;p in t?r.push(p):c in t&&r.push(c)}let l="sun.sun"in t?"sun.sun":null;return{weatherEntityId:o,atmosCe:s,sunEntityId:l,atmosSource:a?i:null,alertEntityIds:r}}function or(t,e){return t.filter(o=>Number.isFinite(e(o)))}function ut(t,e=0){let o=Number(t);return Number.isFinite(o)?o:e}function Lo(t,e,o,i,n,a=0){if(e?.[i]){let s=Number(t?.states?.[e[i]]?.state);if(Number.isFinite(s))return s}return Number(o?.[n]??a)||a}function nr(t,e,o,i){return e?.[o]&&t?.states?.[e[o]]?.attributes?.unit_of_measurement||i}function Ce(t,e,o=0){let i=e?t?.states?.[e]:null;if(!i)return{value:o,unit:void 0,entity:null};let n=Number(i.state);return{value:Number.isFinite(n)?n:o,unit:i.attributes?.unit_of_measurement,entity:i}}function Ro(t,e,o){let i=e?.state||"sunny",n=o?.sunEntityId?t?.states?.[o.sunEntityId]?.state:null;return{condition:i,isNight:i==="clear-night"||n==="below_horizon"}}function Ue(t="pw-id"){return ue(t)}function ir(t){return`${t}, linear-gradient(180deg, var(--pw-sky-top) 0%, var(--pw-sky-mid) 45%, var(--pw-sky-bot) 100%)`}function Ho(t,e,o=36e5){let i=(e?e.getTime():Date.now())-o;return t.filter(n=>{let a=n.datetime;if(!a)return!1;let s=new Date(a).getTime();return Number.isFinite(s)&&s>=i})}function Qt(t){let e=Number(t);for(let o of Fo)if(e<=o.max)return o.color;return Fo[Fo.length-1].color}function oi(t){let e=Number(t);for(let o of Io)if(e<=o.max)return o.tier;return Io[Io.length-1].tier}function ar(t){return Te[oi(t)]||Te.calm}function Do(t){let e=Number(t);for(let o of No)if(e<=o.max)return o;return No[No.length-1]}function Oo(t){let e=(Number(t)%360+360)%360,o=Math.round(e/22.5)%16;return Va[o]}function rr(t){return t<=12?"#30d158":t<=50?"#5ac8fa":t<=87?"#ff9f0a":"#ff453a"}function sr(t){return t<10?"#5ac8fa":t<16?"#30d158":t<19?"#ffd60a":t<22?"#ff9f0a":"#ff453a"}function Me(t,e,o){if(!e||!o)return{todaySunrise:null,todaySunset:null,tomorrowSunrise:null};let i=new Date(e),n=new Date(o);if(isNaN(i.getTime())||isNaN(n.getTime()))return{todaySunrise:null,todaySunset:null,tomorrowSunrise:null};let a=i.getTime()>t.getTime()?new Date(i.getTime()-864e5):i,s=n.getTime()>t.getTime()?n:new Date(n.getTime()-864e5);s.getTime()>a.getTime()+864e5&&(s=new Date(s.getTime()-864e5)),a.getTime()>s.getTime()&&(a=new Date(a.getTime()-864e5));let r=i.getTime()>t.getTime()?i:new Date(i.getTime()+864e5);return{todaySunrise:a,todaySunset:s,tomorrowSunrise:r}}function ft(t,e){if(!t||isNaN(t.getTime()))return null;if(!e)return t;let o=e.getTime(),i=[t,new Date(t.getTime()-864e5),new Date(t.getTime()+864e5)],n=i[0],a=Math.abs(n.getTime()-o);for(let s=1;s<i.length;s+=1){let r=Math.abs(i[s].getTime()-o);r<a&&(n=i[s],a=r)}return n}function Ct(t,e,o){let i=e?Object.entries(e).map(([n,a])=>` ${n}="${a}"`).join(""):"";return o!=null?`<${t}${i}>${o}</${t}>`:`<${t}${i}/>`}function Po(t){return Za[t]||"\u{1F324}\uFE0F"}var er={"clear-night":"Clear Night",cloudy:"Cloudy",exceptional:"Exceptional",fog:"Fog",hail:"Hail",lightning:"Lightning","lightning-rainy":"Lightning Rainy",partlycloudy:"Partly Cloudy",pouring:"Pouring",rainy:"Rainy",snowy:"Snowy","snowy-rainy":"Snowy Rainy",sunny:"Sunny",windy:"Windy","windy-variant":"Windy Variant"};function lr(t){return Object.hasOwn(er,t)?er[t]:t.replace(/-/g," ").replace(/\b\w/g,e=>e.toUpperCase())}function $t(t,e,o){let i=document.createElement(t);if(i.className=e,o)for(let[n,a]of Object.entries(o))i.style.setProperty(n,a);return i}function X(t,e){return Math.random()*(e-t)+t}function je(t,e=60,o=1,i=2){let n=Math.min(e,Oa);for(let a=0;a<n;a++){let s=$t("div","pw-rain-drop"),r=X(15,30),l=X(.4,.8)/o;Object.assign(s.style,{left:`${X(0,100)}%`,top:`${X(-10,20)}%`,width:`${i}px`,height:`${r}px`,borderRadius:`0 0 ${i}px ${i}px`,background:"linear-gradient(to bottom, transparent, rgba(120,180,255,0.6))",animation:`pw-rainFall ${l}s linear ${X(0,2)}s infinite`,animationFillMode:"backwards",position:"absolute"}),t.appendChild(s)}}function ni(t,e=40){let o=Math.min(e,Pa);for(let i=0;i<o;i++){let n=$t("div","pw-snowflake"),a=X(2,5);Object.assign(n.style,{left:`${X(0,100)}%`,top:`${X(-5,10)}%`,width:`${a}px`,height:`${a}px`,borderRadius:"50%",background:"rgba(255,255,255,0.7)",animation:`pw-snowFall ${X(3,6)}s linear ${X(0,4)}s infinite`,animationFillMode:"backwards",position:"absolute"}),t.appendChild(n)}}function oc(t){for(let e=0;e<4;e++){let o=$t("div","pw-fog-layer");Object.assign(o.style,{position:"absolute",width:"200%",height:"40px",top:`${30+e*20}%`,left:"0",background:"linear-gradient(to right, transparent 0%, rgba(200,200,200,0.06) 20%, rgba(200,200,200,0.1) 50%, rgba(200,200,200,0.06) 80%, transparent 100%)",animation:`pw-fogDrift ${X(15,25)}s linear ${e*2}s infinite`,animationFillMode:"backwards"}),t.appendChild(o)}}function Bo(t){for(let e=0;e<8;e++){let o=$t("div","pw-sun-ray");Object.assign(o.style,{position:"absolute",top:"-20px",left:`${10+e*12}%`,width:"2px",height:"120px",background:"linear-gradient(to bottom, rgba(255,220,100,0.08), transparent)",transformOrigin:"top center",transform:`rotate(${-15+e*4}deg)`,animation:`pw-rayPulse ${X(3,5)}s ease-in-out ${X(0,2)}s infinite`,animationFillMode:"backwards"}),t.appendChild(o)}}function gt(t,e=4,o=1){let i=Math.min(e,Kn);for(let n=0;n<i;n++){let a=$t("div","pw-cloud"),s=X(80,160),r=X(30,60),l=X(20,40)/o;Object.assign(a.style,{position:"absolute",width:`${s}px`,height:`${r}px`,top:`${X(5,50)}%`,left:"0",borderRadius:"50%",background:"radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, transparent 70%)",animation:`pw-cloudDrift ${l}s linear ${X(0,15)}s infinite`,animationFillMode:"backwards"}),t.appendChild(a)}}function ii(t){for(let e=0;e<Ba;e++){let o=$t("div","pw-star"),i=X(1,3);Object.assign(o.style,{position:"absolute",left:`${X(0,100)}%`,top:`${X(0,70)}%`,width:`${i}px`,height:`${i}px`,borderRadius:"50%",background:"#fff",animation:`pw-twinkle ${X(2,5)}s ease-in-out ${X(0,3)}s infinite`,animationFillMode:"backwards"}),t.appendChild(o)}}function nc(t,e){let o=[],i=t,n=0,a=Math.floor(X(4,8)),s=e/a;o.push(`${i},${n}`);for(let r=0;r<a;r++)i+=X(-15,15),n+=s,o.push(`${i},${n}`);return o.join(" ")}function cr(t,e=2,o){let i=o||Array.from({length:e},(a,s)=>s*3),n=$t("div","pw-lightning-flash");Object.assign(n.style,{position:"absolute",inset:"0",background:"rgba(255,255,255,0.15)",animation:`pw-flash 6s ease-in-out ${i[0]||0}s infinite`,animationFillMode:"backwards",pointerEvents:"none"}),t.appendChild(n);for(let a=0;a<e;a++){let s="http://www.w3.org/2000/svg",r=document.createElementNS(s,"svg");r.setAttribute("class","pw-lightning-bolt"),r.setAttribute("width","60"),r.setAttribute("height","200"),r.setAttribute("viewBox","0 0 60 200"),r.style.position="absolute",r.style.top="0",r.style.left=`${X(15,75)}%`,r.style.pointerEvents="none",r.style.zIndex="2",r.style.animation=`pw-boltStrike 6s ease-in-out ${i[a]||0}s infinite`,r.style.animationFillMode="backwards";let l=nc(30,180),p=document.createElementNS(s,"polyline");p.setAttribute("points",l),p.setAttribute("fill","none"),p.setAttribute("stroke","rgba(200,220,255,0.4)"),p.setAttribute("stroke-width","6"),p.setAttribute("stroke-linecap","round"),p.setAttribute("stroke-linejoin","round"),r.appendChild(p);let c=document.createElementNS(s,"polyline");c.setAttribute("points",l),c.setAttribute("fill","none"),c.setAttribute("stroke","#fff"),c.setAttribute("stroke-width","2"),c.setAttribute("stroke-linecap","round"),c.setAttribute("stroke-linejoin","round"),r.appendChild(c),t.appendChild(r)}}function ic(t){let e=$t("div","pw-heat-shimmer");Object.assign(e.style,{position:"absolute",inset:"0",pointerEvents:"none",background:"linear-gradient(0deg, transparent 0%, rgba(255,200,100,0.03) 30%, transparent 50%, rgba(255,180,80,0.02) 70%, transparent 100%)",backgroundSize:"100% 200%",animation:"pw-shimmer 3s ease-in-out infinite"}),t.appendChild(e);let o=$t("div","pw-heat-ripple");Object.assign(o.style,{position:"absolute",bottom:"0",left:"0",right:"0",height:"60px",pointerEvents:"none",background:"repeating-linear-gradient(0deg, transparent, rgba(255,200,100,0.02) 2px, transparent 4px)",animation:"pw-rippleWave 2s ease-in-out infinite"}),t.appendChild(o)}function pr(t,e,o){let i=Math.min(1,(e/75+o/150)/2);if(i<.05)return;let n=$t("div","pw-smog-overlay");n.style.background=`rgba(120,110,80,${.05+i*.15})`,t.appendChild(n);let a=$t("div","pw-haze-vignette");a.style.background=`radial-gradient(ellipse at center, transparent 40%, rgba(80,70,50,${i*.3}) 100%)`,t.appendChild(a);let s=Math.floor(i*20);for(let l=0;l<s;l++){let p=$t("div","pw-dust-particle"),c=X(1,3+i*3);Object.assign(p.style,{left:`${X(0,100)}%`,top:`${X(10,90)}%`,width:`${c}px`,height:`${c}px`,animationDelay:`${X(0,8)}s`,animationFillMode:"backwards"}),t.appendChild(p)}let r=Math.floor(i*5);for(let l=0;l<r;l++){let p=$t("div","pw-haze-blob"),c=X(60,120);Object.assign(p.style,{left:`${X(-10,80)}%`,top:`${X(10,70)}%`,width:`${c}px`,height:`${c*.6}px`,animationDelay:`${X(0,12)}s`,animationFillMode:"backwards"}),t.appendChild(p)}}function dr(t,e,o){let i=document.createDocumentFragment();try{e&&ii(i);let n=o?Math.round(o.total/100*Kn):0;switch(t){case"sunny":e||Bo(i),o&&n>0&&gt(i,n);break;case"clear-night":o&&n>0&&gt(i,n);break;case"partlycloudy":e||Bo(i),gt(i,o?n:3);break;case"cloudy":gt(i,o?Math.max(n,4):6);break;case"rainy":je(i,40,1,2),gt(i,o?Math.max(n,3):4);break;case"pouring":je(i,80,1.5,3),gt(i,o?Math.max(n,5):6);break;case"snowy":ni(i,40),gt(i,o?Math.max(n,3):4);break;case"snowy-rainy":ni(i,20),je(i,20,.8,1),gt(i,o?Math.max(n,3):4);break;case"hail":je(i,30,1.2,3),ni(i,15),gt(i,o?Math.max(n,4):5);break;case"lightning":cr(i,2,[0,3]),gt(i,o?Math.max(n,5):6);break;case"lightning-rainy":cr(i,3,[0,2,4]),je(i,60,1.3,2),gt(i,o?Math.max(n,5):6);break;case"fog":oc(i);break;case"windy":case"windy-variant":gt(i,o?n:3,1.5);break;case"exceptional":ic(i);break;default:o&&n>0&&gt(i,n);break}}catch(n){console.warn(`${Bt} buildConditionFx threw \u2014 atmospheric FX will be partial or absent for this condition. Please share the error below when reporting.`,n)}return i}function Ge(t,e,o){return o===e?0:Math.max(0,Math.min(1,(t-e)/(o-e)))}function ai(t,e,o="ellipse"){let i=Math.max(0,Math.min(1,e)),n=Math.round(3+i*50),a=Math.round(2+i*25),s=Math.round(50+i*30),r=l=>l.toString(16).padStart(2,"0");return`radial-gradient(${o} at 50% 30%, ${t}${r(n)} 0%, ${t}${r(a)} ${s}%, transparent 90%)`}function ur(t,e=6,o=1.2){let i=Math.max(0,Math.min(1,t));return e-i*(e-o)}function mr(t,e){let o=Math.max(0,Math.min(1,e)),i=Math.round(4+o*20),n=Math.round(o*8),s=Math.round((.15+o*.55)*255).toString(16).padStart(2,"0");return`0 0 ${i}px ${n}px ${t}${s}`}function hr(t,e="0,0,0"){let o=Math.max(0,Math.min(1,t));if(o<.1)return"";let i=Math.round(60-o*30),n=(o*.5).toFixed(2);return`radial-gradient(ellipse at center, transparent ${i}%, rgba(${e},${n}) 100%)`}function fr(t,e=8,o=2){let i=Math.max(0,Math.min(1,t));return e-i*(e-o)}var ac="#a83d2a",gr="#7a2d20",ae="#fdf6e3",rc='<svg viewBox="0 0 40 40" width="38" height="38" aria-hidden="true">',sc="</svg>";function vr(t){let e=["day","cloudy","rain","night"].includes(t)?t:"day",i=`<circle class="mc" cx="20" cy="20" r="18" fill="${e==="night"?gr:ac}" opacity="0.92"/>`,n=`<line class="mh" x1="6" y1="22" x2="34" y2="22" stroke="${ae}" stroke-width="0.8" opacity="0.85"/>`,a="";return e==="day"?a=`<circle class="md" cx="20" cy="14" r="2.4" fill="${ae}" opacity="0.95"/>`:e==="cloudy"?a=`<circle class="md" cx="20" cy="14" r="2.4" fill="${ae}" opacity="0.45"/>`:e==="rain"?a=[`<line class="mg" x1="14" y1="11" x2="13" y2="16" stroke="${ae}" stroke-width="0.7" opacity="0.55"/>`,`<line class="mg" x1="20" y1="11" x2="19" y2="16" stroke="${ae}" stroke-width="0.7" opacity="0.55"/>`,`<line class="mg" x1="26" y1="11" x2="25" y2="16" stroke="${ae}" stroke-width="0.7" opacity="0.55"/>`].join(""):e==="night"&&(a=`<circle class="md" cx="20" cy="14" r="2.4" fill="${ae}" opacity="0.95"/><circle class="md-cut" cx="21.4" cy="13.4" r="1.8" fill="${gr}"/>`),`${rc}${i}${n}${a}${sc}`}function _t(t,e){return e?"night":["rainy","pouring","snowy","snowy-rainy","hail","lightning-rainy"].includes(t)?"rain":["cloudy","fog"].includes(t)?"cloudy":"day"}var V={kicker(t){return`<div class="pw-t-kicker">${h(t)}</div>`},heroTier(t,{flavor:e="aqi",color:o=""}={}){let i=e==="atmos"?"pw-t-hero-tier-atmos":"pw-t-hero-tier-aqi",n=o?` style="color:${$(o)}"`:"";return`<div class="pw-t-hero-tier ${i}"${n}>${h(t)}</div>`},display(t,{color:e="",suffix:o=""}={}){let i=e?` style="color:${$(e)}"`:"",n=o?`<span class="pw-t-display-suf">${h(o)}</span>`:"";return`<div class="pw-t-display"${i}>${h(String(t))}${n}</div>`},narrative(t){return`<div class="pw-t-narrative">${h(t)}</div>`},gloss(t){return`<div class="pw-t-gloss">${h(t)}</div>`},meta(t){return`<div class="pw-t-meta">${h(t)}</div>`},chartCaption(t){return`<div class="pw-t-chart-caption">${h(t)}</div>`},stat(t,e,{data:o=!1,valueColor:i=""}={}){let n=i?` style="color:${$(i)}"`:"",a=o?"pw-t-stat-l pw-t-data":"pw-t-stat-l";return`<div class="pw-t-stat"><div class="pw-t-stat-v"${n}>${h(String(t))}</div><div class="${a}">${h(e)}</div></div>`},statLabel(t){return`<span class="pw-t-stat-l">${h(t)}</span>`},dataToken(t){return`<span class="pw-t-data">${t}</span>`},heroBlock({tier:t="",tierFlavor:e="aqi",tierColor:o="",value:i="",valueSuffix:n="",valueColor:a="",narrative:s=""}={}){let r=t?this.heroTier(t,{flavor:e,color:o}):"",l=i!==""?this.display(i,{color:a,suffix:n}):"",p=s?this.narrative(s):"";return`<div class="pw-hero-block">${r}${l}${p}</div>`},statsRow(t,{columns:e=4,divided:o=!1}={}){let i=t.filter(Boolean);return i.length?`<div class="pulse-stats-row" data-cols="${e}"${o?' data-divided="true"':""}>${i.join("")}</div>`:""}};function mt({sectionClass:t,ariaLabel:e,brandVariant:o,kicker:i="",narrative:n="",preContent:a="",extraSectionClass:s="",sectionStyle:r="",body:l,proView:p="",proInitial:c=!1,proAction:u="view-swap",proAriaLabel:m="Toggle pro view",pro:d=!0}){d===!1&&(p="",u="view-swap",c=!1);let f=r?` style="${r}"`:"",g=`pw-section pw-cartouche ${t}${s?` ${s}`:""}`,w=vr(o),v=[i?V.kicker(i):"",n?V.narrative(n):""].filter(Boolean).join(""),b=v?`<div class="pw-t-marg">${v}</div>`:"",y=!!p,_=y||u!=="view-swap",S=y?`<div class="pw-view pw-view-default">${l}</div><div class="pw-view pw-view-pro">${p}</div>`:l,A=c?"true":"false",C=_?`<button class="pw-brand-mark-corner" aria-label="${h(m)}" aria-pressed="${A}" type="button">${w}</button>`:`<div class="pw-brand-mark-corner" aria-hidden="true">${w}</div>`;return`
    <div class="${g}" data-pro="${A}" data-pro-action="${u}"${f} role="region" aria-label="${h(e)}">
      ${a}
      ${C}
      <div class="pw-content">
        ${b}
        ${S}
      </div>
    </div>`}var ri=Object.freeze({none:{label:"Stable",color:"#30d158",desc:"No thunderstorm risk"},marginal:{label:"Marginal",color:"#ffd60a",desc:"Isolated storms possible"},slight:{label:"Slight",color:"#ff9f0a",desc:"Brief storms possible"},enhanced:{label:"Enhanced",color:"#ff6b35",desc:"Organized storms likely"},moderate:{label:"Moderate",color:"#ff453a",desc:"Severe storms expected"},high:{label:"Extreme",color:"#8b0000",desc:"Dangerous storm potential"},unknown:{label:"Unknown",color:"#888888",desc:"Insufficient data"}}),lc=Object.freeze({none:5,marginal:20,slight:40,enhanced:60,moderate:80,high:100,unknown:0});function cc(t,e){let o=Math.min(100,t/4e3*100),i=Math.min(100,Math.max(0,(6-e)/12*100));return Math.round(o*.6+i*.4)}function pc(t){return t<=10?{tierKey:"none",label:"Stable",color:"#30d158",desc:"No thunderstorm risk"}:t<=30?{tierKey:"marginal",label:"Marginal",color:"#ffd60a",desc:"Isolated storms possible"}:t<=55?{tierKey:"slight",label:"Moderate",color:"#ff9f0a",desc:"Scattered storms likely"}:t<=80?{tierKey:"moderate",label:"High",color:"#ff453a",desc:"Severe storms expected"}:{tierKey:"high",label:"Extreme",color:"#8b0000",desc:"Dangerous storm potential"}}function dc(t,e){let o=e.atmosCe,i=o.cape&&t.states[o.cape]&&Number(t.states[o.cape].state)||0,n=o.lifted_index&&t.states[o.lifted_index]&&Number(t.states[o.lifted_index].state)||0,a=!!(o.cape&&t.states[o.cape]),s=!!(o.lifted_index&&t.states[o.lifted_index]),r=a||s?cc(i,n):null;if(o.stability_assessment&&t.states[o.stability_assessment]){let p=t.states[o.stability_assessment].state,c=t.states[o.stability_assessment].attributes||{},u=ri[p];if(u){let m=lc[p]??0;return{tierKey:p,...u,score:m,source:"composite",attrs:c,capeValue:i,liValue:n,hasCape:a,hasLI:s}}}let l=r!==null?pc(r):null;return{tierKey:l?.tierKey||"unknown",label:l?.label||"Unknown",color:l?.color||"#888888",desc:l?.desc||"",score:r,source:"fallback",attrs:null,capeValue:i,liValue:n,hasCape:a,hasLI:s}}function uc(t){return Math.max(0,Math.min(100,t))}function br(t,e=5e3){return e<=0?0:Math.max(0,Math.min(100,t/e*100))}function mc(t,e){let a=Math.max(t,e),s=5e3;a>5e3*.8&&(s=Math.max(5e3,Math.ceil(a*1.25/1e3)*1e3));let r=Math.ceil(s/5e3)*1e3;s=Math.ceil(s/r)*r;let l=[];for(let p=s;p>=0;p-=r)l.push(p);return{scaleMax:s,labelInterval:r,labels:l}}var hc=Object.freeze({none:0,unknown:0,marginal:1,slight:2,enhanced:3,moderate:4,high:5});function fc(t){if(!t)return null;let e=o=>hc[String(t[o]||"none")]??0;return{maxThermal:Math.max(e("cape_tier"),e("lifted_index_tier"),e("lapse_rate_tier")),shearTier:e("wind_shear_tier")}}function gc({tierKey:t,tierDesc:e,hourly:o,now:i,todaySunset:n,attrs:a}){if(t==="none"||t==="unknown")return"Atmosphere settled \xB7 no convective signals";let s=fc(a);if(s&&s.maxThermal===0&&s.shearTier>=2)return"Wind shear elevated \xB7 atmosphere thermally quiet";let r=n&&!isNaN(n.getTime())?n.getTime():null,l=i.getTime(),p=r!==null&&l>=r,c=Array.isArray(o)?o.slice(0,6):[],u=c.map(b=>Number(b&&b.cape)||0),m=u.some(b=>Number.isFinite(b)&&b>0),d=null,f=null;if(m){let b=Math.max(...u);if(b>0){let y=c[u.indexOf(b)],_=y?y.datetime:null,S=_?new Date(String(_)):null;S&&!isNaN(S.getTime())&&(d=S.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1}),f=S.getTime())}}if(d===null||f===null){let b=e||"Storm risk active";return p?`${b} \xB7 calming overnight`:b}let g=1800*1e3,w=f<l-g,v=f>=l-g&&f<=l+g;return w?p?`Storm risk easing \u2014 peaked ${d}, calming overnight`:`Storm risk easing \u2014 peaked ${d}`:v?p?"Storm risk peaking now, calming overnight":r!==null?"Storm risk peaking now, calming after sunset":"Storm risk peaking now":r!==null&&f<r?`Storm risk peaks ${d}, calming after sunset`:r!==null?`Storm risk peaks ${d} (after sunset)`:`Storm risk peaks ${d}`}var mh=Object.freeze([Object.freeze({max:30,tier:"none"}),Object.freeze({max:40,tier:"marginal"}),Object.freeze({max:50,tier:"slight"}),Object.freeze({max:60,tier:"enhanced"}),Object.freeze({max:75,tier:"moderate"})]);var hh=Object.freeze([Object.freeze({max:6,tier:"none"}),Object.freeze({max:6.5,tier:"marginal"}),Object.freeze({max:7.5,tier:"slight"}),Object.freeze({max:8,tier:"enhanced"}),Object.freeze({max:9,tier:"moderate"})]);function vc(t){let e=Math.max(0,Math.min(100,t)),o=e/100;return{count:e<=10?0:Math.round(2+o*6),minSize:2+Math.round(o),maxSize:3+Math.round(o),minDur:4-o*2.2,maxDur:4-o*1.2}}function wr(t,e,o=Math.random){let i=document.createDocumentFragment(),n=vc(t);if(n.count===0)return i;let a=$(e);for(let s=0;s<n.count;s++){let r=document.createElement("div");r.className="pw-thermal-particle";let l=n.minSize+o()*(n.maxSize-n.minSize),p=10+o()*80,c=o()*30,u=n.minDur+o()*(n.maxDur-n.minDur),m=o()*u,d=.4+o()*.3,f=-(50+o()*60);r.setAttribute("style",[`width:${l.toFixed(1)}px`,`height:${l.toFixed(1)}px`,`left:${p.toFixed(1)}%`,`bottom:${c.toFixed(1)}%`,`background:${a}`,`--rise-dur:${u.toFixed(2)}s`,`--rise-dist:${f.toFixed(0)}px`,`--peak-op:${d.toFixed(2)}`,`animation-delay:${m.toFixed(2)}s`].join(";")),i.appendChild(r)}return i}function yr({hass:t,config:e,discovery:o,forecastData:i}){let n=o.atmosCe;if(!n.cape&&!n.lifted_index&&!n.freezing_level_height)return console.debug(`${Bt} Atmosphere section requires Atmos CE sensors (cape / lifted_index / freezing_level_height) \u2014 section skipped. Install Atmos CE integration if you want the atmospheric stability column.`),null;let a=dc(t,o),{capeValue:s,liValue:r,hasCape:l,hasLI:p,score:c}=a,u=D=>{let U=n[D];if(!U||!t.states[U])return{value:null,unit:""};let G=Number(t.states[U].state);if(!Number.isFinite(G))return{value:null,unit:""};let tt=String(t.states[U].attributes?.unit_of_measurement||"");return{value:G,unit:tt}},m=u("wind_shear_0_6_km"),d=u("lapse_rate_700_500_hpa"),f=u("freezing_level_height"),g=u("lcl_height"),w=a.tierKey,v={label:a.label,color:a.color,desc:a.desc},y=["slight","enhanced","moderate","high"].includes(w)?"rain":"cloudy",_=new Date,S=o.sunEntityId?t.states[o.sunEntityId]:null,{todaySunset:A}=Me(_,S?.attributes?.next_rising,S?.attributes?.next_setting),C=gc({tierKey:w,tierDesc:v.desc,hourly:i?.hourly||[],now:_,todaySunset:A,attrs:a.attrs}),M=f.value??0,E=g.value??0,{scaleMax:z,labels:k}=mc(M,E),x=c!==null?uc(c):0,T=v.color,F=l||p?`
          <div class="pw-atmos-cape-fill" style="height:${Number(x)}%;background:linear-gradient(to top, ${$(T)}66, ${$(T)}11)"></div>`:"",B=f.unit||"m",I=f.value!==null?(()=>{let D=br(f.value,z);return`
          <div class="pw-atmos-freeze-marker" style="bottom:${Number(D)}%">
            <span class="pw-atmos-freeze-label">\u2744 ${h(String(Math.round(f.value)))}${h(B)}</span>
            <div class="pw-atmos-freeze-line"></div>
          </div>`})():"",q=g.unit||"m",L=g.value!==null?(()=>{let D=br(g.value,z);return`
          <div class="pw-atmos-lcl-marker" style="bottom:${Number(D)}%">
            <span class="pw-atmos-lcl-label">\u2601 LCL ${h(String(Math.round(g.value)))}${h(q)}</span>
            <div class="pw-atmos-lcl-line"></div>
          </div>`})():"",O=`
        <div class="pw-atmos-column-wrap">
          <div class="pw-atmos-scale">${k.map(D=>`<span class="pw-atmos-scale-label">${D>=1e3?`${D/1e3}km`:String(D)}</span>`).join("")}</div>
          <div class="pw-atmos-column">
            ${F}
            ${I}
            ${L}
            <div class="pw-atmos-ground-label">surface</div>
          </div>
        </div>`,P=V.heroBlock({tier:v.label,tierFlavor:"atmos",tierColor:"var(--pw-vermilion)",narrative:C}),H=[l?V.stat(`${Math.round(s)}`,"cape J/kg"):"",p?V.stat(r.toFixed(1),"lifted idx"):"",m.value!==null?V.stat(`${Math.round(m.value)}`,`shear ${m.unit||"km/h"}`):"",d.value!==null?V.stat(d.value.toFixed(1),`lapse ${d.unit||"\xB0C/km"}`):""],W=V.statsRow(H,{columns:4,divided:!0}),R=`
        ${P}
        ${O}
        ${W}`;return mt({sectionClass:"pw-atmosphere-v2",ariaLabel:"Atmospheric stability",brandVariant:y,kicker:"atmospheric stability",body:R,pro:e?.pro!==!1})}function _r(t){let e=t.getHours();return e>=6&&e<12?"this morning":e>=12&&e<17?"this afternoon":e>=17&&e<21?"this evening":"tonight"}function bc(t,e){return t==="sunny"||t==="clear-night"?"Clear skies":t==="rainy"||t==="pouring"?"Rain":t==="snowy"||t==="snowy-rainy"?"Snow":t==="lightning"||t==="lightning-rainy"?"Storms":t==="fog"?"Fog":e>=88?"Overcast":e>=50?"Mostly cloudy":e>=12?"Some sun":"Sunny"}function wc(t){let e=t.slots.slice(0,6);if(e.length===0)return null;let o=Number(e[e.length-1].cloud_coverage),i=Number.isFinite(o)?o-t.cloudCoverNow:0,n=e.reduce((p,c)=>Math.max(p,Number(c.precipitation_probability)||0),0),a=e.reduce((p,c)=>Math.max(p,Number(c.snowfall)||0),0),r=e.reduce((p,c)=>Math.max(p,Number(c.wind_speed)||0),t.windSpeed)-t.windSpeed;return["moderate","high"].includes(t.stabilityState)?"with thunderstorms developing":n>=60?a>0?"with snow likely":"with rain likely":n>=40?a>0?"with snow possible":"with a brief shower or two":i>=30?"then increasing clouds":i<=-30?"then clearing":r>=8?"with wind firming":null}function xr(t){let e=bc(t.conditionNow,Number(t.cloudCoverNow)||0),o=wc(t),i=o?_r(t.now):null,n;return o?o.startsWith("then ")?n=`${e}, ${o} ${i}.`:n=`${e}, then ${o} ${i}.`:n=`${e} ${_r(t.now)}.`,{initial:e,transition:o,anchor:i,sentence:n}}var yc={sunny:"linear-gradient(180deg, #1a4a7a 0%, #2a6aaa 40%, transparent 100%)","clear-night":"linear-gradient(180deg, #050510 0%, #0a0a1a 50%, transparent 100%)",partlycloudy:"linear-gradient(180deg, #1a2a4a 0%, #2c4a6e 50%, transparent 100%)",cloudy:"linear-gradient(180deg, #2a2a3a 0%, #3a3a4a 50%, transparent 100%)",rainy:"linear-gradient(180deg, #1a2a3a 0%, #2a3a4a 50%, transparent 100%)",pouring:"linear-gradient(180deg, #0a1a2a 0%, #1a2a3a 50%, transparent 100%)",snowy:"linear-gradient(180deg, #2a3040 0%, #3a4050 50%, transparent 100%)","snowy-rainy":"linear-gradient(180deg, #1a2a3a 0%, #2a3a48 50%, transparent 100%)",hail:"linear-gradient(180deg, #1a2a3a 0%, #2a3a48 50%, transparent 100%)",lightning:"linear-gradient(180deg, #0a0a1a 0%, #1a1a2a 50%, transparent 100%)","lightning-rainy":"linear-gradient(180deg, #0a0a1a 0%, #1a1a2a 50%, transparent 100%)",fog:"linear-gradient(180deg, #2a2a2e 0%, #3a3a3e 50%, transparent 100%)",windy:"linear-gradient(180deg, #1a2a4a 0%, #2c4a6e 50%, transparent 100%)","windy-variant":"linear-gradient(180deg, #1a2a4a 0%, #2c4a6e 50%, transparent 100%)",exceptional:"linear-gradient(180deg, #4a2a1a 0%, #6a3a1a 40%, transparent 100%)"},_c="linear-gradient(180deg, #1a2a3a 0%, #2a3a4a 50%, transparent 100%)",$r={dry:"#30d158",comfortable:"#30d158",slightly_humid:"#ffd60a",humid:"#ff9f0a",oppressive:"#ff453a",clear:"#30d158",good:"#30d158",moderate:"#ffd60a",poor:"#ff9f0a",fog:"#ff453a"};function xc(t){return t<=30?"#5ac8fa":t<=60?"#30d158":t<=80?"#ff9f0a":"#ff453a"}function $c(t,e){if(t==null)return"Press";let o=Math.abs(Number(t));if(o<=1)return"Press";let i=e==="rising"?"Rising":e==="falling"?"Falling":"Press";return o>3?`${i} rapidly`:i}function Sc(t,e,o){let i=t.map(c=>{let u=Number(c.cape);return Number.isFinite(u)?u:0}),n=Math.max(...i,300),a=Math.max(...i),s=i.indexOf(a),l=i.map((c,u)=>({x:u/Math.max(t.length-1,1)*e,y:o-c/n*o})).map((c,u)=>`${u===0?"M":"L"}${c.x.toFixed(1)},${c.y.toFixed(1)}`).join(" "),p=`${l} L${e},${o} L0,${o} Z`;return{svgPath:l,areaPath:p,peakValue:a,peakIndex:s,maxCape:n}}function kc(t,e,o,i,n,a,s,r){let l=[];return s>0&&l.push({name:"Snow",value:s,unit:r}),o>0&&l.push({name:"Rain",value:o,unit:i}),n>0&&l.push({name:"Showers",value:n,unit:a}),l.length>0?`${l.map(c=>`${h(c.name)} ${h(c.value.toFixed(1))} ${h(c.unit)}`).join(" \xB7 ")} now`:t>0?`Precipitation \u2014 next 12h \xB7 ${h(t.toFixed(1))} ${h(e)} now`:"Precipitation \u2014 next 12h"}function qo(t){return!t||isNaN(t.getTime())?"":dt(t)}function Sr({hass:t,config:e,discovery:o,weatherEntity:i,forecastData:n}){let a=i.attributes,s=o.atmosCe,r=o.sunEntityId||"",{condition:l,isNight:p}=Ro(t,i,o),c=(K,J)=>Lo(t,s,a,K,J),u=(K,J)=>nr(t,s,K,J),m=c("temperature","temperature"),d=c("apparent_temperature","apparent_temperature")||m,f=c("humidity","humidity"),g=c("wind_speed","wind_speed"),w=c("wind_direction","wind_bearing"),v=c("wind_gusts","wind_gust_speed")||c("wind_gusts","wind_gusts"),b=c("dew_point","dew_point"),y=c("visibility","visibility"),_=c("pressure","pressure"),S=u("temperature","\xB0C"),A=u("visibility","km"),C=u("pressure","hPa"),M=u("dew_point","\xB0C"),E=n?.daily,z=n?.hourly,k=a.forecast,x=m,T=m;if(E&&E.length>0){let K=E[0],J=Number(K.templow),j=Number(K.temperature);Number.isFinite(J)&&Number.isFinite(j)&&(x=Math.min(J,j),T=Math.max(J,j))}else if(z&&z.length>0){let K=Date.now(),J=new Date;J.setHours(23,59,59,999);let j=J.getTime(),ct=1/0,pt=-1/0;for(let Wt of z.slice(0,24)){let kt=Date.parse(String(Wt.datetime??""));if(Number.isFinite(kt)&&(kt<K||kt>j))continue;let ot=Number(Wt.temperature);Number.isFinite(ot)&&(ot<ct&&(ct=ot),ot>pt&&(pt=ot))}Number.isFinite(ct)&&Number.isFinite(pt)&&ct!==pt&&(x=Math.min(ct,m),T=Math.max(pt,m))}else if(k&&k.length>0){let K=k[0],J=Number(K.templow),j=Number(K.temperature);Number.isFinite(J)&&Number.isFinite(j)&&(x=Math.min(J,j),T=Math.max(J,j))}let F=o.atmosCe.uv_index,B=F?Number(t.states[F]?.state)||0:Number(a.uv_index??0),{value:I,unit:q}=Ce(t,s.precipitation),L=q||"mm",{value:N,unit:O}=Ce(t,s.rain),{value:P,unit:H}=Ce(t,s.showers),{value:W,unit:R}=Ce(t,s.snowfall),D=O||"mm",U=H||"mm",G=R||"cm",{value:tt,entity:et}=Ce(t,s.uv_index_clear_sky),lt=s.dew_point_comfort?t.states[s.dew_point_comfort]:null,vt=s.visibility_category?t.states[s.visibility_category]:null,St=s.feels_like_context?t.states[s.feels_like_context]:null,it=s.pressure_trend?t.states[s.pressure_trend]:null,Mt=new Date,bt=r?t.states[r]:null,Go=bt?.attributes?.next_rising,Xo=bt?.attributes?.next_setting,{todaySunrise:Ie,todaySunset:ee,tomorrowSunrise:Ne}=Me(Mt,Go,Xo),zt=null;o.atmosCe.cloud_cover&&(zt={total:Number(t.states[o.atmosCe.cloud_cover]?.state)||0,low:Number(t.states[o.atmosCe.cloud_cover_low]?.state)||0,mid:Number(t.states[o.atmosCe.cloud_cover_mid]?.state)||0,high:Number(t.states[o.atmosCe.cloud_cover_high]?.state)||0});let se=s.freezing_level_height?t.states[s.freezing_level_height]:null,Ke=se&&Number(se.state)||0,le=(s.stability_assessment?t.states[s.stability_assessment]:null)?.state||"",ze=s.lifted_index?t.states[s.lifted_index]:null,Lt=ze&&Number(ze.state)||0,Je=$(yc[l]||_c),Zo=Math.max(T-x,1),pp=Math.max(0,Math.min(100,(m-x)/Zo*100)),di=Oo(w),Zr=`data-condition="${h(l)}" data-night="${p}" data-cloud='${h(JSON.stringify(zt||""))}'`,Yr=Ge(m,20,42),Kr=Ge(m,15,-10),Yo=Math.max(Yr,Kr),Jr=Qt(m),dp=Yo>.05?`text-shadow: 0 2px 20px rgba(0,0,0,0.3), ${mr(Jr,Yo)}`:"text-shadow: 0 2px 20px rgba(0,0,0,0.3)",ui=hr(Yo),Qr=ui?`<div class="pw-tension-vignette" style="background: ${$(ui)}"></div>`:"",up=W>0?`<div class="pw-snow-badge" style="color:var(--pw-color-freeze, #5ac8fa)">\u2744 ${h(W.toFixed(1))} ${h(G)}</div>`:"",mi=St?.state||"",ce=St?.attributes?.difference,Qe="";mi==="wind_chill"&&ce!==null&&ce!==void 0?Qe=`<div class="pw-feels-context">Wind chill ${h(String(Math.round(Number(ce))))}\xB0</div>`:mi==="heat_index"&&ce!==null&&ce!==void 0&&(Qe=`<div class="pw-feels-context">Heat index +${h(String(Math.round(Number(ce))))}\xB0</div>`);let ts=["marginal","slight","enhanced","moderate","high"],es="";if(le&&ts.includes(le)){let K=ri[le];if(K){let J=$(K.color),j=`\u26A1 ${h(K.label)}`;if(ze&&Lt<0){let ct=We.find(pt=>Lt>=pt.min)||We[We.length-1];j+=` \xB7 <span style="color:${$(ct.color)}">LI ${h(String(Lt))}</span>`}es=` <span class="pw-stability-badge" style="background:${J}33; color:${J}">${j}</span>`}}let Ko=vt?.state||"",mp=Ko&&!["unavailable","unknown"].includes(Ko)&&$r[Ko]||"",to=lt?.state||"",hp=to&&!["unavailable","unknown"].includes(to)&&$r[to]||"",hi=it?.attributes?.trend_symbol||"",fi=it?.state==="rising"?"#30d158":it?.state==="falling"?"#ff9f0a":it?.state==="steady"?"#5ac8fa":"",os=et&&Math.abs(tt-B)>=.5,Jo=it?.attributes?.change_3h,Qo=$c(Jo!=null?Number(Jo):null,it?.state||"");if(Qo==="Press"&&it?.state){let K=it.state;K==="rising"?Qo="Rising":K==="falling"&&(Qo="Falling")}let fp=fi||(it?"#5ac8fa":""),ns=ar(g),gp=Do(g),tn=v>g+5,is=g>0&&v/g>1.5,as=tn?is?` / <b>${h(Math.round(v))}</b>`:` / ${h(Math.round(v))}`:"",rs=`<svg width="10" height="10" viewBox="0 0 10 10" style="vertical-align:middle;transform:rotate(${Number(w)||0}deg)"><polygon points="5,0 3,8 5,6 7,8" fill="${$(ns)}" opacity="0.8"/></svg>`,vp=`${h(Math.round(g))}${as} ${rs}${h(di)}`,bp=`linear-gradient(to right, ${$(Qt(x))}, ${$(Qt(T))})`,ss="";if(se&&Ke<5e3&&x<=0){let K=Math.max(0,Math.min(100,(0-x)/Zo*100)),J=se?.attributes?.unit_of_measurement||"m";ss=`<div class="pw-arc-freeze" style="left:${Number(K)}%">
            <div class="pw-arc-freeze-label">\u2744 ${h(String(Math.round(Ke)))}${h(J)}</div>
            <div class="pw-arc-freeze-line"></div>
          </div>`}let gi="",vi=r?t.states[r]:null;if(vi&&Ie&&ee&&Ne){let K=Mt.getTime(),J=vi.state==="above_horizon",j,ct,pt,Wt,kt;if(J){let nt=Ie.getTime(),xt=ee.getTime(),Gt=Math.max(xt-nt,1);j=Math.max(0,Math.min(100,(K-nt)/Gt*100)),ct=qo(Ie),pt=qo(ee),Wt="background: linear-gradient(to right, #ff9f0a, #ffd60a)",kt="#ff9f0a"}else{let nt=ee.getTime(),xt=Ne.getTime(),Gt=Math.max(xt-nt,1);j=Math.max(0,Math.min(100,(K-nt)/Gt*100)),ct=qo(ee),pt=qo(Ne),Wt="background: linear-gradient(to right, #1a3050, #5ac8fa)",kt="#5ac8fa"}let ot=`left:${Number(j)}%; background:${$(kt)}; box-shadow: 0 0 6px ${$(kt)}66`,jt=` style="color:${$(kt)}"`,st=J?"1":"0.85",Ut=J?"":"\u{1F319}";gi=`
      <div class="pw-day-arc" style="opacity:${st}">
        <span class="pw-day-arc-label"${jt}>${h(ct)}</span>
        <div class="pw-day-arc-bar">
          <div class="pw-day-arc-fill" style="width:${Number(j)}%; ${Wt}"></div>
          <div class="pw-day-arc-marker" style="${ot}">${Ut}</div>
        </div>
        <span class="pw-day-arc-label"${jt}>${h(pt)}</span>
      </div>`}let ls="",cs="",ps="",eo="",bi=n?.hourly||[];if(bi.length>0){let j=Ho(bi,new Date).slice(0,12),ct=j.some(ot=>Number(ot.precipitation_probability)>0),pt=kc(I,L,N,D,P,U,W,G);if(I>0)eo=`
      <div class="pw-weather-summary" style="position:relative; z-index:2">
        <span style="font-size:14px">\u{1F327}</span> ${pt}
      </div>`;else{let ot=xr({now:new Date,cloudCoverNow:zt?zt.total:0,conditionNow:l,slots:j,windSpeed:g,uvIndex:B,stabilityState:le});eo=`
      <div class="pw-weather-summary" style="position:relative; z-index:2">
        ${h(ot.sentence)}
      </div>`}if(ct){let ot=j.map(Ut=>{let nt=Math.min(100,Math.max(0,Number(Ut.precipitation_probability)||0)),xt=Number(Ut.snowfall)||0,Gt=(Number(Ut.rain)||0)+(Number(Ut.showers)||0),Le=xt>0;if(Le&&Gt>0){let xs=xt+Gt,xi=Math.round(nt*xt/xs),$s=nt-xi;return`<div class="pulse-precip-slot"><div class="pulse-precip-fill" style="height:${Number($s)}%"></div><div class="pulse-precip-fill pw-precip-snow" style="height:${Number(xi)}%"></div></div>`}return`<div class="pulse-precip-slot"><div class="${Le?"pulse-precip-fill pw-precip-snow":"pulse-precip-fill"}" style="height: ${nt}%"></div></div>`}).join(""),st=j[Math.floor(j.length/2)]?`+${Math.floor(j.length/2)}h`:"";ls=`
      <div style="position: relative; z-index: 2; margin: 16px var(--pulse-space-card-wide) 0;">
        <div class="pw-precip-label">${pt}</div>
        <div class="pulse-precip-bar" role="img" aria-label="Precipitation probability" style="position:relative">${ot}</div>
        <div class="pw-precip-times"><span>Now</span><span>${h(st)}</span><span>+${h(String(j.length))}h</span></div>
      </div>`}if(j.some(ot=>Number(ot.cape)>300)){let st=Sc(j,200,24),Ut=st.peakIndex/Math.max(j.length-1,1)*200,nt=st.peakValue>=1e3?`${(st.peakValue/1e3).toFixed(1)}k`:String(Math.round(st.peakValue)),xt=j[st.peakIndex]?.datetime?new Date(j[st.peakIndex].datetime):null,Gt=xt?dt(xt):"",Le=Ue("pw-cape-grad");cs=`
      <div style="position: relative; z-index: 2; margin: 4px var(--pulse-space-card-wide) 0;">
        <div class="pw-precip-label" style="font-size:10px">Storm risk</div>
        <div style="position:relative">
          <svg class="pw-cape-sparkline" width="100%" height="24" viewBox="0 0 200 24" preserveAspectRatio="none">
            <defs>
              <linearGradient id="${Le}" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#ff453a" stop-opacity="0.6"/>
                <stop offset="33%" stop-color="#ff9f0a" stop-opacity="0.4"/>
                <stop offset="66%" stop-color="#ffd60a" stop-opacity="0.3"/>
                <stop offset="100%" stop-color="#30d158" stop-opacity="0.2"/>
              </linearGradient>
            </defs>
            <path d="${st.areaPath}" fill="url(#${Le})"/>
            <path d="${st.svgPath}" fill="none" stroke="#ff9f0a" stroke-width="1.5"/>
          </svg>
          ${st.peakValue>0?`<div class="pw-cape-peak" style="left:${Number(Ut)}px">${h(nt)} ${h(Gt)}</div>`:""}
        </div>
      </div>`}j.some(ot=>ot.dew_point!==void 0&&ot.dew_point!==null)&&(ps=`
      <div style="position: relative; z-index: 2; margin: 2px var(--pulse-space-card-wide) 0;">
        <div class="pw-precip-label" style="font-size:10px">Comfort</div>
        <div class="pw-comfort-bar">${j.map(jt=>{let st=Number(jt.dew_point)||0;return`<div class="pw-comfort-slot" style="background:${$(sr(st))}"></div>`}).join("")}</div>
      </div>`)}let wp=Qt(d),yp=zt!==null?rr(zt.total):"",_p=xc(f),xp=`${h(Math.round(_))} ${h(C)}${hi?` <span style="color:${$(fi)}">${h(hi)}</span>`:""}`,$p=`${h(Math.round(B))}${os?` <span style="opacity:0.5">/ ${h(String(Math.round(tt)))}</span>`:""}`;function ds(){return dt(new Date)}let us=lr(l),ms=_t(l,p),hs=e?.location_label||"Now",wi=Qe?Qe.replace(/<[^>]*>/g,"").trim():"",fs=eo?eo.replace(/<[^>]*>/g,"").trim():"",gs=zt?Math.round(zt.total)+"%":"--",vs=`
        <div class="pw-loc-stamp">${h(hs)} \xB7 ${h(ds())}</div>
        <div class="pw-hero-block">
          ${V.display(Math.round(m),{suffix:S})}
          ${V.gloss(`${us}${wi?" \xB7 "+wi:""}`)}
        </div>`,bs=V.statsRow([V.stat(`${Math.round(x)}/${Math.round(T)}\xB0`,"range"),V.stat(`${Math.round(g)}${tn?` / ${Math.round(v)}`:""} ${di}`,tn?"wind / gust":"wind"),V.stat(Math.round(B),"uv"),V.stat(gs,"cloud")],{columns:4}),oo=(n?.daily||[]).slice(0,7),en="";if(oo.length>=2){let j=oo.map(nt=>Number(nt.temperature)||0),ct=oo.map(nt=>Number(nt.templow??nt.temperature)||0),pt=Math.min(...ct),Wt=Math.max(...j),kt=Math.max(Wt-pt,1),ot=nt=>nt/(oo.length-1)*320,jt=nt=>38-(nt-pt)/kt*34-2,st=j.map((nt,xt)=>`${xt===0?"M":"L"}${ot(xt).toFixed(1)},${jt(nt).toFixed(1)}`).join(" ");en=`<svg viewBox="0 0 320 38" preserveAspectRatio="none">
      <path d="${`${st} L320,38 L0,38 Z`}" fill="rgba(168,61,42,0.08)"/>
      <path d="${st}" stroke="var(--pw-ink-cream)" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0.85"/>
    </svg>`}let ws=en?`<div class="pw-overview-spark-block">
        ${V.chartCaption("7-day temperature trend")}
        <div class="pw-overview-spark">${en}</div>
      </div>`:"",yi=vt?.state||"",on=it?.state||"",ys=[Number.isFinite(f)&&f>0,Number.isFinite(b)&&b!==0,!!yi,!!on].filter(Boolean).length>=2,_i="";if(ys){let K=Number.isFinite(f)&&f>0?V.stat(`${Math.round(f)}%`,to||"humidity"):V.stat("\u2014","humidity"),J=Number.isFinite(b)?V.stat(`${Math.round(b)}${M}`,"dew point"):V.stat("\u2014","dew point"),j=Number.isFinite(_)&&_>0?V.stat(`${Math.round(_)}`,on?`${C} ${on}`:C):V.stat("\u2014","pressure"),ct=Number.isFinite(y)&&y>0?V.stat(`${y.toFixed(y<10?1:0)}${A}`,yi||"visibility"):V.stat("\u2014","visibility");_i=V.statsRow([K,J,j,ct],{columns:4})}let _s=`
        ${vs}
        ${V.narrative(fs)}
        ${gi}
        ${ws}
        ${bs}
        ${_i}`;return mt({sectionClass:"pw-overview-v2",ariaLabel:"Current weather overview",brandVariant:ms,preContent:`${Qr}<div class="pw-fx" ${Zr} role="img" aria-label="${h(l)} weather effects"></div>`,body:_s,pro:e?.pro!==!1})}function Tc(t){if(!t||t.length===0)return"Forecast unavailable";let e=0;for(let s=1;s<t.length;s++)Number(t[s].temperature)>Number(t[e].temperature)&&(e=s);let o=t.findIndex(s=>Number(s.precipitation_probability)>=50),i=s=>s===0?"today":new Date(String(t[s].datetime||"")).toLocaleDateString([],{weekday:"short"}).toLowerCase(),n=i(e),a=Math.round(Number(t[e].temperature));return o>=0&&o!==e?`Warmest ${n} (${a}\xB0) \xB7 rain ${i(o)}`:o>=0?`Wet stretch \xB7 warmest ${n} (${a}\xB0)`:`Warmest ${n} (${a}\xB0) \xB7 dry through the week`}function kr({hass:t,config:e,discovery:o,forecastData:i,weatherEntity:n}){let a=i?.daily||[];if(a.length===0)return null;let s=o.atmosCe,l=(s.temperature?t.states[s.temperature]:null)?.attributes?.unit_of_measurement||"\xB0C",p=a.slice(0,7),c=p.flatMap(S=>[ut(S.temperature,0),ut(S.templow,0)]),u=Math.min(...c),m=Math.max(...c),d=Math.max(m-u,1),f=Number(n?.attributes?.temperature),g=p.map((S,A)=>{let C=ut(S.temperature,0),M=ut(S.templow,0),E=Math.round(Number(S.precipitation_probability)||0),z=A===0,k=z?"today":new Date(String(S.datetime||"")).toLocaleDateString([],{weekday:"short"}).toLowerCase(),x=Po(String(S.condition||"")),T=E>=50?`<span class="pw-fc-pop">${h(String(E))}%</span>`:'<span class="pw-fc-pop"></span>',F=(M-u)/d*100,B=(C-M)/d*100,I=z&&Number.isFinite(f)?`<span class="pw-fc-now" style="left:${$(((f-u)/d*100).toFixed(2)+"%")}"></span>`:"";return`
      <div class="pw-fc-row${z?" is-today":""}">
        <span class="pw-fc-day">${h(k)}</span>
        <span class="pw-fc-icon" aria-hidden="true">${x}</span>
        ${T}
        <span class="pw-fc-bar" aria-label="High ${Math.round(C)}${h(l)}, low ${Math.round(M)}${h(l)}">
          <span class="pw-fc-bar-fill" style="left:${$(F.toFixed(2)+"%")};width:${$(B.toFixed(2)+"%")}"></span>
          ${I}
        </span>
        <span class="pw-fc-range">
          <span class="pw-fc-lo">${h(String(Math.round(M)))}\xB0</span>
          <span class="pw-fc-hi">${h(String(Math.round(C)))}\xB0</span>
        </span>
      </div>`}).join(""),{condition:w,isNight:v}=Ro(t,n,o),b=_t(w,v),y=Tc(p),_=`
        <div class="pw-fc-list" role="list">
          ${g}
        </div>`;return mt({sectionClass:"pw-forecast-v2",ariaLabel:"Seven-day forecast",brandVariant:b,kicker:"the week ahead",narrative:y,body:_,pro:e?.pro!==!1})}var Ee=240,qt=Ee/2,Vt=Ee/2,Xe=90,Tr=.12,Vo=6,Wo=.5,Ar=.25,Ac=.3,Cc=6,Cr=.7,Mc=.2,Ec=4,Fc=3.3,Ic=15,Nc=35,zc=.08,Lc=.2,Rc=[{l:"N",a:0},{l:"NE",a:45},{l:"E",a:90},{l:"SE",a:135},{l:"S",a:180},{l:"SW",a:225},{l:"W",a:270},{l:"NW",a:315}];function Mr(t){return(t-90)*Math.PI/180}function Hc(t){let e=t*Math.PI/180;return{x:Math.sin(e),y:-Math.cos(e)}}function te(t,e){return{x:qt+e*Math.cos(t),y:Vt+e*Math.sin(t)}}function Dc(t,e,o,i){let n=Math.min(t/Ae,1)*Xe,a=te(e-Ar,n),s=te(e+Ar,n),r=o>Ac?"pw-gust-sweep":"",l=Math.max(.6,2.5-o*2).toFixed(2),p=(.15+o*.3).toFixed(2),c=`transform-origin:${qt}px ${Vt}px;--gust-dur:${l}s;--gust-peak:${p}`;return Ct("path",{class:r,d:`M${qt},${Vt} L${a.x.toFixed(1)},${a.y.toFixed(1)} L${s.x.toFixed(1)},${s.y.toFixed(1)} Z`,fill:i,opacity:.15,style:c})}function Oc(t,e,o,i){let n=Math.min(t/Ae,1)*Xe,a=te(e,n),s=te(e-Tr,n*.7),r=te(e+Tr,n*.7),l={x:a.x-Vo*Math.cos(e-Wo),y:a.y-Vo*Math.sin(e-Wo)},p={x:a.x-Vo*Math.cos(e+Wo),y:a.y-Vo*Math.sin(e+Wo)},c=o*Cc,u=Math.max(.4,4-o*3.6),m=c>Mc?`animation:pw-arrowSway ${u.toFixed(2)}s ease-in-out infinite;--sway-fwd:${(c*Cr).toFixed(2)}deg;--sway-back:${(-c*(1-Cr)).toFixed(2)}deg`:"",d=`transform-origin:${qt}px ${Vt}px;filter:drop-shadow(0 0 6px ${Xt(i,.38)});${m}`,f=Ct("path",{d:`M${qt},${Vt} L${s.x.toFixed(1)},${s.y.toFixed(1)} L${a.x.toFixed(1)},${a.y.toFixed(1)} L${r.x.toFixed(1)},${r.y.toFixed(1)} Z`,fill:i,opacity:.5}),g=Ct("line",{x1:qt,y1:Vt,x2:a.x.toFixed(1),y2:a.y.toFixed(1),stroke:i,"stroke-width":2.5,"stroke-linecap":"round"}),w=Ct("path",{d:`M${a.x.toFixed(1)},${a.y.toFixed(1)} L${l.x.toFixed(1)},${l.y.toFixed(1)} L${p.x.toFixed(1)},${p.y.toFixed(1)} Z`,fill:i});return Ct("g",{style:d},f+g+w)}function Er({hass:t,config:e,discovery:o,weatherEntity:i}){let n=i.attributes,a=o.atmosCe,s=e.speed_mode||"speed",r=(R,D)=>Lo(t,a,n,R,D),l=r("wind_speed","wind_speed"),p=r("wind_gusts","wind_gust_speed")||r("wind_gusts","wind_gusts")||l,c=r("wind_direction","wind_bearing"),m=(a.wind_speed?t.states[a.wind_speed]:null)?.attributes?.unit_of_measurement||n.wind_speed_unit||"km/h",d=s==="gust"?p:l,f=Math.min(l/Ae,1),g=Do(d),w=oi(d),v=Te[w]||Te.calm,b=Oo(c),y=Mr(c),_=Hc(c),S=Math.round(f*Da),A=Ec-f*Fc,C=zc+f*Lc,M=Ic+f*Nc,E=-_.y,z=_.x,k=[];for(let R=0;R<S;R++){let D=(Math.random()-.5)*400,U=-120-Math.random()*60,G=420+Math.random()*60,tt=(M*(.6+Math.random()*.8)).toFixed(1),et=(A+Math.random()*A*.5).toFixed(2),lt=(Math.random()*3).toFixed(2),vt=(C*(.5+Math.random()*.5)).toFixed(3),St=(U*_.x+D*E).toFixed(1),it=(U*_.y+D*z).toFixed(1),Mt=(G*_.x+D*E).toFixed(1),bt=(G*_.y+D*z).toFixed(1);k.push(`<div class="pw-streak" style="left:50%;top:50%;width:${tt}px;height:1px;transform:rotate(${c-90}deg);animation-duration:${et}s;animation-delay:${lt}s;opacity:${vt};background:linear-gradient(to right, transparent, ${Xt(v,.27)}, transparent);--sx:${St}px;--sy:${it}px;--ex:${Mt}px;--ey:${bt}px"></div>`)}let x=[];for(let R=1;R<=3;R++)x.push(Ct("circle",{cx:qt,cy:Vt,r:R*30,fill:"none",stroke:v,"stroke-width":.5,opacity:.08+R*.02}));for(let R of Rc){let D=Mr(R.a),U=te(D,20),G=te(D,Xe+4),tt=te(D,Xe+16),et=R.l.length===1;x.push(Ct("line",{x1:U.x.toFixed(1),y1:U.y.toFixed(1),x2:G.x.toFixed(1),y2:G.y.toFixed(1),stroke:v,"stroke-width":.5,opacity:.12})),x.push(Ct("text",{x:tt.x.toFixed(1),y:tt.y.toFixed(1),"text-anchor":"middle","dominant-baseline":"central",fill:et?"rgba(255,255,255,0.7)":"rgba(255,255,255,0.3)","font-size":et?11:9,"font-weight":et?600:400},h(R.l)))}x.push(Dc(p,y,f,v)),x.push(Oc(d,y,f,v)),(d>Ae||p>Ae)&&x.push(Ct("circle",{cx:qt,cy:Vt,r:Xe+2,fill:"none",stroke:"#ff453a","stroke-width":1.5,"stroke-dasharray":"4 4",opacity:.7})),x.push(Ct("circle",{cx:qt,cy:Vt,r:18,fill:v,opacity:.06})),x.push(Ct("circle",{cx:qt,cy:Vt,r:3,fill:v}));let F=f>Yn?(f-Yn)*5:0,B=Math.max(.15,.4-f*.25),I="";F>.1&&(I=`--dx:${(F*_.x).toFixed(2)}px;--dy:${(F*_.y).toFixed(2)}px;animation:pw-roseShake ${B.toFixed(2)}s ease-in-out infinite`);let q=Math.round(12+f*50).toString(16).padStart(2,"0"),L=Math.round(6+f*25).toString(16).padStart(2,"0"),N=ir(`radial-gradient(ellipse at 50% 50%, ${v}${q} 0%, ${v}${L} 40%, transparent 85%)`),O=_t(i?.state||"sunny",!1),P=s==="gust",H=P?"wind \xB7 gust":"wind",W=`
        <div class="pw-wind-streaks">${k.join("")}</div>
        <div class="pw-rose-wrap" style="${I}">
          <svg class="pw-rose-svg" width="${Ee}" height="${Ee}" viewBox="0 0 ${Ee} ${Ee}" style="display:block" role="img" aria-label="Wind compass rose showing ${h(Math.round(d))} ${h(m)} from ${h(b)}">
            <title>Wind direction compass</title>
            ${x.join("")}
          </svg>
          <div class="pw-wind-center">
            <div class="pw-wind-speed" style="color: ${$(v)}">${h(Math.round(d))}</div>
            <div class="pw-wind-unit">${h(m)} \xB7 ${h(Math.round(c))}\xB0 ${h(b)}</div>
            <div class="pw-wind-beaufort" style="color: ${$(v)}">${h(g.name)}</div>
            <div class="pw-wind-beaufort-desc">${h(g.desc)}</div>
          </div>
        </div>`;return mt({sectionClass:"pw-wind-v2",ariaLabel:"Wind compass and speed",brandVariant:O,kicker:H,sectionStyle:`background: ${$(N)}`,body:W,proAction:"wind-mode",proInitial:P,proAriaLabel:"Toggle speed and gust mode",pro:e.pro!==!1})}function Pc(t,e,o,i){if(o&&i){let s=(e==="us"?Zn:Xn).find(r=>r.label.toLowerCase()===o.toLowerCase());return{label:o,color:i,desc:s?.desc||""}}let n=e==="us"?Zn:Xn;for(let a of n)if(t<=a.max)return a;return n[n.length-1]}function Bc(t){let e=(t||"").toLowerCase();return e.includes("very unhealthy")||e.includes("hazardous")||e.includes("extremely poor")?"very_unhealthy":e.includes("sensitive")?"unhealthy_sg":e.includes("unhealthy")||e.includes("very poor")?"unhealthy":e.includes("moderate")||e.includes("fair")||e.includes("poor")?"moderate":e.includes("good")?"good":"unknown"}var Fr=Object.freeze({good:"var(--pw-good-green)",moderate:"var(--pw-warn-yellow)",unhealthy_sg:"var(--pw-warn-amber)",unhealthy:"var(--pw-warn-red)",very_unhealthy:"#8b0000",unknown:"var(--pw-ink-cream)"});function Ir({hass:t,config:e,discovery:o,weatherEntity:i}){let n=e.scale||"eu",a=n==="us"?"us_aqi":"european_aqi",s=e.aqi_entity||o.atmosCe[a];if(!s||!t.states[s])return null;let r=t.states[s],l=Number(r.state)||0,p=r.attributes?.category||null,c=r.attributes?.color||null,u=Pc(l,n,p,c),m=F=>{let B=o.atmosCe[F];if(!B||!t.states[B])return null;let I=Number(t.states[B].state);return Number.isFinite(I)?I:null},d=m("pm2_5"),f=m("pm10"),g=m("ozone"),w=m("nitrogen_dioxide"),v=m("sulphur_dioxide"),b=m("carbon_monoxide"),y=Bc(u.label),_=Fr[y]||Fr.unknown,S=_t("cloudy",!1),A=n==="us",M=Math.min(100,Math.max(0,l/(A?300:100)*100)),E=A?"air quality \xB7 us":"air quality",z=V.heroBlock({value:Math.round(l),valueColor:_,tier:u.label,tierFlavor:"aqi",tierColor:_}),k=`
        <div class="pw-aq-band" aria-hidden="true">
          <div class="pw-aq-marker" style="left:${$(`${M.toFixed(2)}%`)}"></div>
        </div>
        <div class="pw-aq-band-labels">
          <span>good</span>
          <span>moderate</span>
          <span>unh sg</span>
          <span>unhealthy</span>
          <span>v.unh</span>
        </div>`,x=V.statsRow([d!==null?V.stat(Math.round(d),"PM2.5",{data:!0}):"",f!==null?V.stat(Math.round(f),"PM10",{data:!0}):"",g!==null?V.stat(Math.round(g),"O\u2083",{data:!0}):"",w!==null?V.stat(Math.round(w),"NO\u2082",{data:!0}):"",v!==null?V.stat(Math.round(v),"SO\u2082",{data:!0}):"",b!==null?V.stat(b.toFixed(1),"CO",{data:!0}):""],{columns:3}),T=`
        ${z}
        ${k}
        ${x}`;return mt({sectionClass:"pw-air-quality-v2",ariaLabel:"Air quality index",brandVariant:S,kicker:E,body:T,proAction:"aqi-scale",proInitial:A,proAriaLabel:"Toggle EU and US AQI scale",pro:e.pro!==!1})}function qc(t){let e=(t%yt+yt)%yt;return Ya[Math.floor(e/yt*8)%8]}function Vc(t){return(t%yt+yt)%yt<yt/2}var si=864e5;function It(t){return!t||isNaN(t.getTime())?"--:--":t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1})}function Wc(t,e,o,i,n){if(i==null)return`<circle cx="${t.toFixed(1)}" cy="${e.toFixed(1)}" r="${o}" fill="#c8d0e0"/>`;let a=Math.max(0,Math.min(1,i/100)),s=n!=null?Vc(n):!0,r=`<circle cx="${t.toFixed(1)}" cy="${e.toFixed(1)}" r="${o}" fill="#2a2a3a"/>`;if(a>=.99)r+=`<circle cx="${t.toFixed(1)}" cy="${e.toFixed(1)}" r="${o}" fill="#e8e0d0"/>`;else if(a>.01){let l=e-o,p=e+o,c=(o*Math.abs(2*a-1)).toFixed(1),u=a>.5?1:0,m;s?m=`M${t.toFixed(1)},${l.toFixed(1)} A${o},${o} 0 0 1 ${t.toFixed(1)},${p.toFixed(1)} A${c},${o} 0 0 ${u} ${t.toFixed(1)},${l.toFixed(1)} Z`:m=`M${t.toFixed(1)},${l.toFixed(1)} A${o},${o} 0 0 0 ${t.toFixed(1)},${p.toFixed(1)} A${c},${o} 0 0 ${1-u} ${t.toFixed(1)},${l.toFixed(1)} Z`,r+=`<path d="${m}" fill="#e8e0d0"/>`}return r}var Uo="#050510",Nr="#0a1226",zr="#172b4f",Lr="#1f3d6e",Rr="#3a6fa8",Hr="#d97a3a",Dr="#ff9f0a",Or="#ffc560",Pr="#7eaedb",Br="#2c5a8e",qr="#ffd60a";function Uc(t,e,o,i,n,a,s,r,l,p){let c=new Date(t.getTime());c.setHours(0,0,0,0);let u=t.getTime(),m=e.getTime(),d=(o??new Date(u-35*6e4)).getTime(),f=(i??new Date(u-30*6e4)).getTime(),g=(n??new Date(u-6*6e4)).getTime(),w=(a??new Date(u+30*6e4)).getTime(),v=(s??new Date(m-30*6e4)).getTime(),b=(r??new Date(m+6*6e4)).getTime(),y=(l??new Date(m+30*6e4)).getTime(),_=(p??new Date(m+35*6e4)).getTime(),S=(u+m)/2,A=T=>Math.max(0,Math.min(100,T)),C=T=>A((T-c.getTime())/si*100),M=(T,F)=>C((T+F)/2),E=Math.min(60,(m-u)/8)*6e4,z=S-E,k=S+E;return`linear-gradient(to right, ${[`${Uo} 0%`,`${Uo} ${C(d).toFixed(2)}%`,`${Nr} ${M(d,f).toFixed(2)}%`,`${zr} ${C(f).toFixed(2)}%`,`${Lr} ${M(f,g).toFixed(2)}%`,`${Rr} ${C(g).toFixed(2)}%`,`${Hr} ${M(g,u).toFixed(2)}%`,`${Dr} ${C(u).toFixed(2)}%`,`${Or} ${M(u,w).toFixed(2)}%`,`${Pr} ${C(w).toFixed(2)}%`,`${Br} ${M(w,z).toFixed(2)}%`,`${qr} ${C(z).toFixed(2)}%`,`${qr} ${C(k).toFixed(2)}%`,`${Br} ${M(k,v).toFixed(2)}%`,`${Pr} ${C(v).toFixed(2)}%`,`${Or} ${M(v,m).toFixed(2)}%`,`${Dr} ${C(m).toFixed(2)}%`,`${Hr} ${M(m,b).toFixed(2)}%`,`${Rr} ${C(b).toFixed(2)}%`,`${Lr} ${M(b,y).toFixed(2)}%`,`${zr} ${C(y).toFixed(2)}%`,`${Nr} ${M(y,_).toFixed(2)}%`,`${Uo} ${C(_).toFixed(2)}%`,`${Uo} 100%`].join(", ")})`}function Vr(t){if(!t||isNaN(t)||t<=0)return"--";let e=Math.round(t/6e4),o=Math.floor(e/60),i=e%60;return`${o}h ${String(i).padStart(2,"0")}m`}function Wr({hass:t,config:e,discovery:o}){let i=new Date,n=o.sunEntityId?t.states[o.sunEntityId]:null;if(!n)return null;let a=n.attributes||{},s=a.next_rising||a.sunrise,r=a.next_setting||a.sunset;if(!s||!r)return null;let l=new Date(i);l.setHours(12,0,0,0);let p=ft(new Date(s),l),c=ft(new Date(r),l);if(!p||!c||isNaN(p.getTime())||isNaN(c.getTime()))return null;let u=o.atmosCe,m=Lt=>u[Lt]?new Date(String(t.states[u[Lt]]?.state)):null,d=ft(m("golden_hour_morning_start"),p),f=ft(m("golden_hour_morning_end"),p),g=ft(m("blue_hour_morning_start"),p),w=ft(m("golden_hour_evening_start"),c),v=ft(m("golden_hour_evening_end"),c),b=ft(m("blue_hour_evening_end"),c),y=a.next_dawn,_=a.next_dusk,S=y?ft(new Date(y),p):null,A=_?ft(new Date(_),c):null,C=u.moon_phase?t.states[u.moon_phase]:null,M=C?.attributes||{},E=M.moon_age!==void 0?Number(M.moon_age):null,z=M.illumination!==void 0?Number(M.illumination):null,k=E!==null?qc(E):C?.state||null,x=ft(m("moonrise"),i),T=ft(m("moonset"),i),F=i.getTime()>=p.getTime()&&i.getTime()<=c.getTime(),B=It(p),I=It(c),q=(p.getTime()+c.getTime())/2,L=It(new Date(q)),N=c.getTime()-p.getTime(),O=si-N,P=Vr(N),H=Vr(O),W=F?"Daylight":"Night",R=F?P:H,D=new Date(p.getTime());D.setHours(0,0,0,0);let U=Math.max(0,Math.min(100,(i.getTime()-D.getTime())/si*100)),G=Uc(p,c,S,g,d,f,w,v,b,A),et=`
      <div class="pw-astro-rb" role="img" aria-label="24-hour sky phase ribbon">
        <div class="pw-astro-rb-track" style="${`background: ${$(G)}`}"></div>
        <div class="pw-astro-rb-now" style="left:${U.toFixed(2)}%" aria-hidden="true"></div>
        <div class="pw-astro-rb-axis">
          <span>00</span><span>06</span><span>12</span><span>18</span><span>24</span>
        </div>
      </div>`,lt=z!=null?Math.round(z):null,vt=k||"Moon",St=Wc(24,24,22,z,E),it=lt!==null?`<span class="pw-astro-moon-illum">${h(`${lt}%`)}</span> illuminated`:"",Mt=E!=null?`${E.toFixed(1)}d old`:"",bt=E!=null?(()=>{let Lt=yt/2,Je=(E%yt+yt)%yt;return`${(Je<=Lt?Lt-Je:yt-Je+Lt).toFixed(1)}d to full`})():"",Go=[it,Mt,bt].filter(Boolean).join(" \xB7 "),Xo=`
      <div class="pw-astro-moon-hero">
        <div class="pw-astro-moon-glyph" aria-hidden="true">
          <svg viewBox="0 0 48 48" width="48" height="48">${St}</svg>
        </div>
        <div class="pw-astro-moon-text">
          <div class="pw-astro-moon-name">${h(vt)}</div>
          <div class="pw-astro-moon-meta">${Go}</div>
        </div>
      </div>`,Ie=F?`Sun rose ${B}, sets ${I} \xB7 solar noon ${L}.`:`Sun set ${I}, rises ${B} \xB7 solar noon ${L}.`,ee=`
      <div class="pw-astro-hero">
        <div class="pw-astro-hero-tier">${h(W)}</div>
        <div class="pw-astro-hero-num">${h(R)}</div>
      </div>
      ${V.narrative(Ie)}`,Ne=It(x),zt=It(T),se=V.statsRow([V.stat(It(S),"civil dawn"),V.stat(It(d),"golden start",{valueColor:"var(--pw-warn-amber)"}),V.stat(It(g),"blue start",{valueColor:"var(--pw-wind)"}),V.stat(Ne,"moonrise")],{columns:4,divided:!0}),Ke=V.statsRow([V.stat(It(A),"civil dusk"),V.stat(It(v),"golden end",{valueColor:"var(--pw-warn-amber)"}),V.stat(It(b),"blue end",{valueColor:"var(--pw-wind)"}),V.stat(zt,"moonset")],{columns:4,divided:!0}),pi=`
      ${ee}
      ${Xo}
      ${et}
      ${se}
      ${Ke}`,le=_t(F?"sunny":"clear-night",!F),ze=`<div class="pw-fx" data-astro-stars="${!F}" data-astro-day="${F}" role="img" aria-label="Sky atmospheric effects"></div>`;return mt({sectionClass:"pw-astro-v2",extraSectionClass:F?"":"is-night",ariaLabel:"Astronomy: sun and moon",brandVariant:le,kicker:"today's sky",preContent:ze,body:pi,pro:e?.pro!==!1})}function jc(t,e){let o=(t?.state||"").toLowerCase();if(!t||o==="none"||o==="no alerts"||o==="unavailable"||o==="0"||o==="off")return[];let i=t.entity_id||"";if(i.endsWith("_alert_count")||i.startsWith("binary_sensor."))return[];let n=t.attributes,a=[],s=n.alert_type||n.type||"wind",r=Number(n.level),l=Number.isFinite(r)&&r>0?r:1,p=typeof n.severity=="string"?n.severity.toLowerCase():"",c=Ua[p]||Qn[l]||Qn[1],u=Wa[s]||"mdi:alert",m=Number(n.progress)||0,d=Array.isArray(n.locations)?n.locations:[],f=n.end_time??"",g=null,w=null,v=!1;if(f==="")v=!0;else if(f){let b=new Date(f),y=new Date,_=b.getTime()-y.getTime();if(_/(1e3*60*60*24)>qa)v=!0;else if(e)g=Math.max(0,_/(1e3*60*60));else{let A=n.start_time||n.datetime;if(A){let C=new Date(String(A));w=Math.max(0,(C.getTime()-y.getTime())/(1e3*60*60))}}}return a.push({type:s,icon:u,severity:l,color:c,summary:String(n.headline||n.summary||t.state||""),desc:String(n.description||""),active:e,hoursLeft:g,hoursUntil:w,progress:m,locations:d,link:n.link?String(n.link):null,endTime:String(f),isUntilFurtherNotice:v}),a}function Gc(t){let e=t.severity>=4?"red":"amber",o="";t.isUntilFurtherNotice?o="UNTIL FURTHER NOTICE":t.active&&t.hoursLeft!==null?o=`${Math.round(t.hoursLeft)}H LEFT`:t.hoursUntil!==null?o=`IN ${Math.round(t.hoursUntil)}H`:t.active&&(o="ACTIVE");let i=String(t.type||"").toUpperCase(),n=String(t.summary||t.desc||"").toUpperCase().trim(),a=t.locations.length>0?t.locations.join(", ").toUpperCase():"",r=[o,i,n,a].filter(Boolean).join(" \xB7 ");return`
    <div class="pw-alert-ticker pw-alert-${e}">
      <span class="pw-alert-tri">\u25B6</span>
      <span class="pw-alert-text">${h(r)}</span>
    </div>`}function Ur({hass:t,config:e,discovery:o,proPersisted:i=!1}){let n=[];o.atmosCe.active_alert&&t.states[o.atmosCe.active_alert];for(let I of o.alertEntityIds){let q=t.states[I];if(!q)continue;let L=I.includes("active")||q.state==="on";n.push(...jc(q,L))}let s=n.length>0,r=s?n.reduce((I,q)=>q.severity>I.severity?q:I,n[0]).severity:0,l=s?n.reduce((I,q)=>q.severity>I.severity?q:I,n[0]).color:"#30d158",p=Ge(r,0,4),c=s?Math.min(1.5,1+(n.length-1)*.15):1,u=fr(p,3,1.2).toFixed(2),m=ur(p).toFixed(2),d=s?ai(l,p*c):ai("#30d158",.08),f=140,g=f/2,w=f/2,v=s?{bgInner:r>=4?"#1a0000":r>=3?"#1a0e00":"#1a1500",bgOuter:r>=4?"#0a0000":r>=3?"#0a0500":"#0a0800",ring:$(Xt(l,.15)),line:$(Xt(l,.08)),sweep:$(Xt(l,.4))}:{bgInner:"#001a00",bgOuter:"#000800",ring:"rgba(80,255,0,0.15)",line:"rgba(80,255,0,0.08)",sweep:"rgba(80,255,0,0.35)"},b=n.map((I,q)=>{let L=I.active?18+q*7:40+q*7,N=q*137.5*Math.PI/180,O=g+Math.cos(N)*L,P=w+Math.sin(N)*L,H=(q*137.5%360/360*Number(u)).toFixed(2);return I.active?`<div class="pw-radar-blip" style="left:${O.toFixed(1)}px;top:${P.toFixed(1)}px;--pw-blip-color:${$(I.color)};animation-delay:${H}s"></div>`:`<div style="position:absolute;left:${O.toFixed(1)}px;top:${P.toFixed(1)}px;width:4px;height:4px;border-radius:var(--pulse-radius-circle);background:${$(I.color)};opacity:0.2;transform:translate(-50%,-50%)"></div>`}).join(""),y=`
    <div style="display:flex;justify-content:center;padding:12px var(--pulse-space-card-wide);position:relative;z-index:2">
      <div class="pw-radar" style="--pw-radar-bg-inner:${v.bgInner};--pw-radar-bg-outer:${v.bgOuter};--pw-radar-color:${v.ring};--pw-radar-line:${v.line};--pw-radar-sweep:${v.sweep};--pw-radar-dur:${u}s" role="img" aria-label="${s?`${n.length} weather alerts`:"No active alerts"}">
        ${b}
      </div>
    </div>`,_=(()=>{if(!s)return"";let I=null;for(let q of n){if(q.isUntilFurtherNotice)return"further notice";if(q.endTime){let L=new Date(q.endTime);!isNaN(L.getTime())&&(!I||L>I)&&(I=L)}}return I?I.toLocaleString([],{hour:"2-digit",minute:"2-digit",month:"short",day:"numeric"}):"further notice"})(),S=_t(s?"rainy":"sunny",!1),A=n.map(Gc).join(""),C=s?"":'<div class="pw-all-clear-v2"><strong>All Clear</strong>last 7 days clean</div>',M=s?`<div class="pw-alert-timestamp pw-alert-${r>=4?"red":"amber"}">${n.length} active \xB7 valid through ${h(_)}</div>`:"",z=r>=4?`border-top: 2px solid ${$(l)};`:"",k=r>=4?"pw-alerts-red":r>0?"pw-alerts-amber":"pw-alerts-green",x=`<div class="pw-tension-wash${s?" breathing":""}" style="background: ${$(d)}; --breathe-dur: ${m}s"></div>`,T=`
        ${y}
        ${C}
        ${A?`<div class="pw-alert-list">${A}</div>`:""}
        ${M}`,F=n.map(I=>{let q=I.severity>=4?"red":"amber",L=I.summary||I.desc||I.type,N=[];I.isUntilFurtherNotice?N.push("until further notice"):I.active&&I.hoursLeft!==null?N.push(`${Math.round(I.hoursLeft)}h left`):I.hoursUntil!==null&&N.push(`in ${Math.round(I.hoursUntil)}h`),I.severity>0&&N.push(`severity ${I.severity}`),I.type&&N.push(I.type);let O=N.join(" \xB7 "),P=I.desc&&I.desc!==I.summary?`<div class="pw-alert-detail-desc">${h(I.desc)}</div>`:"",H=I.locations.length>0?`<div class="pw-alert-detail-loc">${h(I.locations.join(" \xB7 "))}</div>`:"";return`
        <div class="pw-alert-detail pw-alert-${q}">
          <div class="pw-alert-detail-head">${h(L)}</div>
          ${O?`<div class="pw-alert-detail-meta">${h(O)}</div>`:""}
          ${P}
          ${H}
        </div>`}).join(""),B=s?`
        ${y}
        ${C}
        ${F}
        ${M}`:void 0;return mt({sectionClass:"pw-alerts-v2",extraSectionClass:k,ariaLabel:"Active weather alerts",brandVariant:S,kicker:s?`active alerts (${n.length})`:"no active alerts",preContent:x,sectionStyle:z,body:T,proView:B,proInitial:i,pro:e?.pro!==!1})}var Nt=600,Xc=280,jo=8,li=80,Fe=200,Ze=220,Zc=254,jr=12,Yc=30,Kc=.9,Jc=3;function re(t,e){return e<=1?Nt/2:jo+t/(e-1)*(Nt-2*jo)}function Gr(t,e,o){if(!Number.isFinite(t)||!Number.isFinite(e)||!Number.isFinite(o))return(li+Fe)/2;let i=o-e||1;return li+(o-t)/i*(Fe-li)}function Qc(t){try{let e=new Date(t);return isNaN(e.getTime())?"":String(e.getHours()).padStart(2,"0")}catch{return""}}var tp=500;function ep(t,e=24){if(!Array.isArray(t))return null;let o=t.slice(0,tp),n=Ho(o,new Date).slice(0,e);if(n.length<2)return null;let a=n[0],s="cloud_cover"in a,r="cloud_cover_low"in a&&"cloud_cover_mid"in a&&"cloud_cover_high"in a,l="wind_speed"in a&&("wind_bearing"in a||"wind_direction"in a),p=n.map(g=>{let w=Number(g.temperature),v=ut(g.precipitation_probability,0),b=ut(g.snowfall,0),y=ut(g.rain,0),_=ut(g.showers,0),S=String(g.condition||""),A=b>0||S==="snowy"||S==="snowy-rainy"?"snow":"rain",C=A==="snow"?b:y+_;return{temp:w,precip:v,precipMm:C,precipType:A,condition:S,cloudCover:s?ut(g.cloud_cover,0):null,cloudLow:r?ut(g.cloud_cover_low,0):null,cloudMid:r?ut(g.cloud_cover_mid,0):null,cloudHigh:r?ut(g.cloud_cover_high,0):null,windSpeed:l?ut(g.wind_speed,0):null,windBearing:l?ut(g.wind_bearing??g.wind_direction,0):null,timeLabel:Qc(String(g.datetime||"")),datetime:String(g.datetime||"")}}),c=or(p,g=>g.temp);if(c.length<2)return null;let u=c.map(g=>g.temp),m=Math.min(...u),d=Math.max(...u),f=Math.max(...c.map(g=>g.precipMm),0);return{points:c,n:c.length,min:m,max:d,minIdx:u.indexOf(m),maxIdx:u.indexOf(d),maxPrecipMm:f,hasCloud:s,hasLayeredCloud:r,hasWind:l}}function op(t){let{points:e,n:o,hasLayeredCloud:i}=t;if(o<=0)return"";let n=o>1?(Nt-2*jo)/(o-1)/2:Nt/2,a="";for(let s=0;s<o;s++){let r=re(s,o),l=s===0?0:r-n,c=(s===o-1?Nt:r+n)-l,u=l/Nt*100,m=c/Nt*100,d;if(i){let f=(Number(e[s].cloudHigh)||0)/100*.06,g=(Number(e[s].cloudMid)||0)/100*.08,w=(Number(e[s].cloudLow)||0)/100*.1;d=Math.min(f+g+w,.15)}else d=(Number(e[s].cloudCover)||0)/100*.12;d<=0||(a+=`<div class="pw-meteogram-cloud-slot" style="left:${u.toFixed(2)}%;width:${m.toFixed(2)}%;opacity:${d.toFixed(3)}"></div>`)}return a?`<div class="pw-meteogram-cloud-bg" aria-hidden="true">${a}</div>`:""}function np(t){let{points:e,n:o,maxPrecipMm:i}=t,n=Ze-Fe,a=(Nt-2*jo)/(o-1)*Kc,s=i>0,r=s?Math.max(i,2):100,l="";for(let p=0;p<o;p++){let{precipMm:c,precip:u,precipType:m}=e[p],d=s?c:u;if(d<=0)continue;let f=d/r*n,g=re(p,o)-a/2,w=a;g<0&&(w+=g,g=0),g+w>Nt&&(w=Nt-g);let v=Ze-f,b=m==="snow"?"rgba(200,220,240,0.45)":"rgba(90,200,250,0.4)";l+=`<rect x="${g.toFixed(1)}" y="${v.toFixed(1)}" width="${w.toFixed(1)}" height="${f.toFixed(1)}" fill="${b}" rx="1"/>`}return l}function ip(t){let{points:e,n:o,maxPrecipMm:i}=t,n=Ze-Fe,a=i>0,s=a?Math.max(i,2):100,r="";for(let l=0;l<o;l++){let{precipMm:p,precip:c}=e[l],u=a?p:c;if(u<=0)continue;let m=re(l,o),d=u/s*n,f=Ze-d-2,g=a?p>=10?String(Math.round(p)):p.toFixed(1):`${Math.round(c)}%`;r+=`<text x="${m.toFixed(1)}" y="${f.toFixed(1)}" text-anchor="middle" fill="rgba(90,200,250,0.9)" font-size="13" font-weight="600">${h(g)}</text>`}return r}function ap(t){let{points:e,n:o,min:i,max:n}=t,a=e.map(d=>parseFloat(d.temp.toFixed(1))),s=e.map((d,f)=>({x:re(f,o),y:Gr(a[f],i,n)})),r=s.map((d,f)=>`${f===0?"M":"L"}${d.x.toFixed(1)},${d.y.toFixed(1)}`).join(" "),l=`${r} L${s[s.length-1].x.toFixed(1)},${Fe} L${s[0].x.toFixed(1)},${Fe} Z`,p=Ue("pw-meteogram-grad"),c=Qt(n),u=Qt(i),m=`<defs><linearGradient id="${p}" x1="0" y1="0" x2="0" y2="1">`;return m+=`<stop offset="0%" stop-color="${$(c)}" stop-opacity="0.25"/>`,m+=`<stop offset="100%" stop-color="${$(u)}" stop-opacity="0.03"/>`,m+="</linearGradient></defs>",m+=`<path d="${l}" fill="url(#${p})"/>`,m+=`<path d="${r}" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`,m}function rp(t){let{points:e,n:o}=t,i="";for(let n=0;n<o;n+=Jc){let a=re(n,o);i+=`<text x="${a.toFixed(1)}" y="${Zc}" text-anchor="middle" fill="var(--pw-ink-cream-dim)" font-size="15" font-weight="600">${h(e[n].timeLabel)}</text>`}return i}function sp(t,e,o,i){let n=o/1.852,a=((i+180)%360-90+360)%360,s=Math.round(n/5)*5,r=Math.floor(s/50);s-=r*50;let l=Math.floor(s/10);s-=l*10;let p=Math.floor(s/5),c=18,u="var(--pw-ink-cream-muted)",m="",d=-c;for(let f=0;f<r;f++)m+=`<polygon points="0,${d.toFixed(1)} 9,${(d+3).toFixed(1)} 0,${(d+6).toFixed(1)}" fill="${u}"/>`,d+=6;for(let f=0;f<l;f++)m+=`<line x1="0" y1="${d.toFixed(1)}" x2="9" y2="${(d+4.5).toFixed(1)}" stroke="${u}" stroke-width="1.4" stroke-linecap="round"/>`,d+=4.5;for(let f=0;f<p;f++)m+=`<line x1="0" y1="${d.toFixed(1)}" x2="4.5" y2="${(d+2.25).toFixed(1)}" stroke="${u}" stroke-width="1.4" stroke-linecap="round"/>`;return`<g transform="translate(${t.toFixed(1)},${e}) rotate(${a})"><line x1="0" y1="0" x2="0" y2="${-c}" stroke="${u}" stroke-width="1.4" stroke-linecap="round"/>${m}</g>`}function lp(t){let{points:e,n:o,min:i,max:n,minIdx:a,maxIdx:s}=t,r=0,l=1,p=2,c="";for(let u=0;u<o;u++){let m=u===a||u===s,d=m?r:u%3,f=re(u,o),g=Gr(e[u].temp,i,n);if(d===r){let w=e[u].temp,v=m?String(Math.round(w)):w.toFixed(1),b=u===a?"var(--pw-wind)":u===s?"var(--pw-vermilion)":"var(--pw-ink-cream)",y=m?17:15,_=g-jr;c+=`<text x="${f.toFixed(1)}" y="${_.toFixed(1)}" text-anchor="middle" fill="${b}" font-size="${y}" font-weight="600">${v}\xB0</text>`}else if(d===l){let w=Po(e[u].condition),v=g-jr;c+=`<text x="${f.toFixed(1)}" y="${v.toFixed(1)}" text-anchor="middle" font-size="20">${w}</text>`}else if(d===p){let w=Number(e[u].windSpeed),v=Number(e[u].windBearing);if(!Number.isFinite(w)||w<1||!Number.isFinite(v))continue;let b=g-Yc;c+=sp(f,b,w,v)}}return c}function Xr({config:t,forecastData:e}){let o=e?.hourly||[];if(o.length<2)return null;let i=Number(t.hours),n=t.horizon==="long"?"long":"short",a=Number.isFinite(i)&&i>0?Math.max(4,Math.min(48,i)):n==="long"?24:12,s=ep(o,a);if(!s)return null;let l=(t.show_cloud==="auto"||t.show_cloud===void 0?s.hasCloud:!!t.show_cloud)&&s.hasCloud?op(s):"",p=_t(s.points[0]?.condition||"sunny",!1),c=[];c.push(np(s)),c.push(ip(s)),c.push(ap(s)),c.push(lp(s));let u=re(0,s.n).toFixed(1);c.push(`<line x1="${u}" y1="0" x2="${u}" y2="${Ze}" stroke="var(--pw-vermilion)" stroke-width="0.8" stroke-dasharray="2 3" opacity="0.7"/>`),c.push(rp(s));let m=s.n,d=`${m}-hour meteogram showing temperature, condition, wind, and precipitation`,f=m<=12?"next twelve hours":`next ${m===24?"twenty-four":m} hours`,g=Ue("pw-meteogram-title"),w=`
        <div class="pw-meteogram-chart" aria-labelledby="${g}">
          <svg viewBox="0 0 ${Nt} ${Xc}" style="width:100%; height:auto" role="img" aria-label="${h(d)}">
            <title id="${g}">${h(d)}</title>
            ${c.join(`
`)}
          </svg>
        </div>`;return mt({sectionClass:"pw-meteogram-v2",ariaLabel:d,brandVariant:p,kicker:f,preContent:l,body:w,proAction:"meteo-horizon",proInitial:a>=18,proAriaLabel:"Toggle 12-hour and 24-hour view",pro:t.pro!==!1})}var cp={overview:Sr,forecast:kr,wind:Er,air_quality:Ir,astro:Wr,alerts:Ur,atmosphere:yr,meteogram:Xr},ci=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._lastWeatherState=null,this._atmosExpanded=!1,this._forecastData=null,this._forecastLastFetch=0,this._subscribedEntityId=null,this._atmosConfigEntryId=null,this._discovery=null,this._forecastFetching=!1,this._phaseTimer=null,this._countdownTimer=null,this._minuteTimer=null,this._warnedMissingEntity=null,this._warnedMissingAtmosCe=null,this._proState={}}setConfig(e){if(!e)throw new Error("Invalid configuration");this._cleanupTimers(),this._config=Qa(e),this._warnedMissingEntity=null,this._warnedMissingAtmosCe=null,this._discovery=null,this._proState={},this._hass&&this._fullRender()}_getDiscovery(){return this._discovery||(this._discovery=tr(this._hass.states,this._config)),this._discovery}_getCeFingerprint(e){let i=this._getDiscovery().atmosCe,n=[];for(let a of Object.keys(i)){let s=i[a],r=e.states[s];r&&n.push(`${a}=${r.state}`)}return n.join("|")}_warnIfAtmosCeMissing(e,o){let i=new Set(["atmosphere","air_quality","meteogram"]);if(!e.some(l=>i.has(l.type))||Object.keys(o.atmosCe).length>0)return;let a=this._config,s=a.atmos_source||ei(o.weatherEntityId||"");if(this._warnedMissingAtmosCe===s)return;this._warnedMissingAtmosCe=s;let r=a.atmos_source?`Set atmos_source matches no sensor.${s}_* entities \u2014 check the slug.`:`Derived slug "${s}" matches no sensor.${s}_* entities. If you renamed your weather entity after installing Atmos CE, set atmos_source manually in the card config.`;console.warn(`${Bt} atmosphere / air_quality / meteogram sections configured but no Atmos CE sensors discovered. ${r}`)}_cleanupTimers(){this._phaseTimer&&(clearTimeout(this._phaseTimer),this._phaseTimer=null),this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null),this._minuteTimer&&(clearInterval(this._minuteTimer),this._minuteTimer=null)}set hass(e){if(this._hass=e,!this._config)return;let o=this._config.weather_entity,i=o||Object.keys(e.states).find(l=>l.startsWith("weather."))||"",n=e.states[i];if(!n){o&&this._warnedMissingEntity!==o&&(console.warn(`${Bt} weather_entity "${o}" not found in hass.states. Check the entity_id in your card config (likely a typo, or the integration was removed).`),this._warnedMissingEntity=o);return}let a=this._getCeFingerprint(e),s=`${n.state}|${JSON.stringify(n.attributes)}|${a}`;s!==this._lastWeatherState&&(this._lastWeatherState=s,this._fullRender()),this._subscribeForecast(e,i)}async _subscribeForecast(e,o){let i=Date.now()-this._forecastLastFetch>=Jn;if(!(this._subscribedEntityId===o&&this._forecastData&&!i)&&!this._forecastFetching){this._forecastFetching=!0,this._subscribedEntityId=o;try{if(!e.callWS)return;let n=null;if(this._discovery?.atmosSource)try{if(!this._atmosConfigEntryId){let u=(await e.callWS({type:"config/entity_registry/list"}).catch(()=>[])).find(m=>m.platform==="atmos_ce");this._atmosConfigEntryId=u?.config_entry_id||null}if(this._atmosConfigEntryId){let m=(await e.callWS({type:"call_service",domain:"atmos_ce",service:"get_extended_forecast",service_data:{config_entry_id:this._atmosConfigEntryId,type:"hourly"},return_response:!0}).catch(()=>null))?.response;m?.forecast&&(n=m.forecast)}}catch(c){console.debug(`${Bt} extended forecast fetch failed, falling back to standard hourly`,c)}let a=null;o&&e.states[o]&&(a=await e.callWS({type:"call_service",domain:"weather",service:"get_forecasts",target:{entity_id:o},service_data:{type:"daily"},return_response:!0}).catch(()=>null));let s=null;!n&&o&&e.states[o]&&(s=(await e.callWS({type:"call_service",domain:"weather",service:"get_forecasts",target:{entity_id:o},service_data:{type:"hourly"},return_response:!0}).catch(()=>null))?.response?.[o]?.forecast||[]);let p=a?.response?.[o];this._forecastData={hourly:n||s||[],daily:p?.forecast||[]},this._forecastLastFetch=Date.now(),this._fullRender()}catch(n){console.warn(`${Bt} forecast fetch failed; retries throttled to ${Jn/1e3}s. Inspect the error below to diagnose. Common causes: weather entity offline, integration disabled, network failure.`,n),this._forecastLastFetch=Date.now()}finally{this._forecastFetching=!1}}}_unsubscribeForecasts(){this._subscribedEntityId=null,this._forecastLastFetch=0}disconnectedCallback(){this._unsubscribeForecasts(),this._cleanupTimers()}_fullRender(){if(!this._hass||!this._config||!this.shadowRoot)return;let e=this._getDiscovery(),o=this._hass.states[e.weatherEntityId];if(!o)return;let i=["<style>",Ka,"</style>",'<div class="pw-card">'],n=this._config.sections||[];this._warnIfAtmosCeMissing(n,e);for(let a=0;a<n.length;a++){let s=n[a],r=cp[s.type];if(r)try{let l=r({hass:this._hass,config:s,discovery:e,weatherEntity:o,forecastData:this._forecastData,sectionIndex:a,proPersisted:!!this._proState[a]});l&&i.push(l)}catch(l){console.warn(`${Bt} section "${s?.type}" renderer threw \u2014 section will be skipped, other sections continue. Please share the error below when reporting.`,l)}}i.push("</div>"),this.shadowRoot.innerHTML=i.join(""),this._postRender(e),this._schedulePhaseTransition(),this._minuteTimer||(this._minuteTimer=setInterval(()=>{this._lastWeatherState=null,this._hass&&this._fullRender()},6e4)),this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null),this.shadowRoot.querySelector(".pw-astro-countdown")&&(this._countdownTimer=setInterval(()=>{let a=this.shadowRoot?.querySelector(".pw-astro-countdown");if(!a){clearInterval(this._countdownTimer),this._countdownTimer=null;return}let s=Number(a.dataset.target)-Date.now();if(s<=0){clearInterval(this._countdownTimer),this._countdownTimer=null,this._lastWeatherState=null,this._fullRender();return}let r=Math.floor(s/1e3),l=Math.floor(r/3600),p=Math.floor(r%3600/60),c=r%60;a.textContent=(l>0?l+"h "+p+"m":p+"m "+c+"s")+(a.dataset.suffix||"")},1e3))}_schedulePhaseTransition(){if(this._phaseTimer&&(clearTimeout(this._phaseTimer),this._phaseTimer=null),!this._hass||!this._config)return;let e=this._getDiscovery(),o=e.atmosCe,i=this._hass.states[e.sunEntityId||""];if(!i)return;let n=new Date,a=n.getTime(),s=[],r=i.attributes?.next_rising,l=i.attributes?.next_setting,{todaySunrise:p,todaySunset:c}=Me(n,r,l),u=i.attributes?.next_rising?new Date(i.attributes.next_rising).getTime():NaN,m=i.attributes?.next_setting?new Date(i.attributes.next_setting).getTime():NaN;Number.isFinite(u)&&u>a&&s.push(u),Number.isFinite(m)&&m>a&&s.push(m);let d={golden_hour_morning_start:p,golden_hour_morning_end:p,blue_hour_morning_start:p,blue_hour_morning_end:p,golden_hour_evening_start:c,golden_hour_evening_end:c,blue_hour_evening_start:c,blue_hour_evening_end:c};for(let[w,v]of Object.entries(d)){if(!o[w])continue;let b=new Date(String(this._hass.states[o[w]]?.state||""));if(isNaN(b.getTime()))continue;let y=ft(b,v);if(!y)continue;let _=y.getTime();_>a&&s.push(_);let S=_+864e5;S>a&&s.push(S)}if(s.length===0)return;let g=Math.min(...s)-a+1e3;this._phaseTimer=setTimeout(()=>{this._phaseTimer=null,this._lastWeatherState=null,this._hass&&this._fullRender()},g)}_postRender(e){if(!this.shadowRoot||!this._hass)return;let o=this.shadowRoot.querySelectorAll(".pw-fx[data-condition]");for(let c of o){let u=c.getAttribute("data-condition")||"",m=c.getAttribute("data-night")==="true",d=null;try{let g=c.getAttribute("data-cloud");g&&g!=='""'&&g!==""&&(d=JSON.parse(g))}catch{}let f=dr(u,m,d);c.replaceChildren(f)}let i=this.shadowRoot.querySelectorAll(".pw-aqi[data-pm25]");for(let c of i){let u=Number(c.getAttribute("data-pm25"))||0,m=Number(c.getAttribute("data-pm10"))||0,d=c.querySelector(".pw-fx");if(d&&(u>0||m>0)){let f=document.createDocumentFragment();pr(f,u,m),d.replaceChildren(f)}}let n=this.shadowRoot.querySelectorAll(".pw-fx[data-astro-stars]");for(let c of n){let u=c.getAttribute("data-astro-stars")==="true",m=c.getAttribute("data-astro-day")==="true",d=document.createDocumentFragment();u&&ii(d),m&&(gt(d,3,.5),Bo(d)),c.replaceChildren(d)}let a=this.shadowRoot.querySelectorAll(".pw-atmos-fx[data-atmos-score]");for(let c of a){let u=Number(c.getAttribute("data-atmos-score"))||0,m=c.getAttribute("data-atmos-color")||"#30d158",d=wr(u,m);c.replaceChildren(d)}let s=[...this.shadowRoot.querySelectorAll(".pw-section")],r=this.shadowRoot.querySelectorAll("button.pw-brand-mark-corner");for(let c of r)c.addEventListener("click",u=>{let m=u.currentTarget,d=m.closest(".pw-section");if(!d||!this._config)return;let f=s.indexOf(d);if(f<0)return;let g=d.dataset.proAction||"view-swap";if(g==="wind-mode"||g==="meteo-horizon"||g==="aqi-scale"){let v=(this._config.sections||[]).map((y,_)=>_===f?{...y}:y),b=v[f];if(!b)return;if(g==="wind-mode"&&b.type==="wind")b.speed_mode=b.speed_mode==="gust"?"speed":"gust";else if(g==="meteo-horizon"&&b.type==="meteogram"){let y=Number(b.hours),_=Number.isFinite(y)&&y>0?y>=18:b.horizon==="long";b.horizon=_?"short":"long","hours"in b&&delete b.hours}else g==="aqi-scale"&&b.type==="air_quality"&&(b.scale=b.scale==="us"?"eu":"us");this._config={...this._config,sections:v},this._fullRender();return}let w=d.dataset.pro==="true"?"false":"true";d.dataset.pro=w,m.setAttribute("aria-pressed",w),this._proState[f]=w==="true"});let l=this.shadowRoot.querySelectorAll(".pw-hourly-strip");for(let c of l){let u=!1,m=0,d=0;c.addEventListener("mousedown",f=>{u=!0,m=f.pageX-c.offsetLeft,d=c.scrollLeft,c.style.cursor="grabbing"}),c.addEventListener("mouseleave",()=>{u=!1,c.style.cursor=""}),c.addEventListener("mouseup",()=>{u=!1,c.style.cursor=""}),c.addEventListener("mousemove",f=>{if(!u)return;f.preventDefault();let g=f.pageX-c.offsetLeft;c.scrollLeft=d-(g-m)}),c.addEventListener("touchstart",f=>{f.stopPropagation()},{passive:!0}),c.addEventListener("touchmove",f=>{f.stopPropagation()},{passive:!0}),c.addEventListener("wheel",f=>{let g=f;Math.abs(g.deltaX)<Math.abs(g.deltaY)&&(f.preventDefault(),c.scrollLeft+=g.deltaY)},{passive:!1})}let p=this.shadowRoot.querySelector(".pw-atmos-column-wrap[data-has-detail]");if(p){let c=this.shadowRoot.querySelector(".pw-atmos-detail");c&&(this._atmosExpanded&&(c.style.maxHeight=`${c.scrollHeight}px`,p.setAttribute("aria-expanded","true")),p.addEventListener("click",()=>{this._atmosExpanded=!this._atmosExpanded,this._atmosExpanded?(c.style.maxHeight=`${c.scrollHeight}px`,p.setAttribute("aria-expanded","true")):(c.style.maxHeight="0",p.setAttribute("aria-expanded","false"))}))}}getCardSize(){let e=this._config?.sections?.length||1;return Math.max(3,e*3)}getGridOptions(){return{columns:12,min_columns:6,rows:this.getCardSize(),min_rows:3}}static async getConfigElement(){return await import("./pulse-weather-card-editor.js"),document.createElement(Ra)}static getStubConfig(e){let o=Object.keys(e.states).find(i=>i.startsWith("weather."));return{type:`custom:${ke}`,weather_entity:o||"weather.home",sections:[{type:"overview"}]}}};customElements.get(ke)||(customElements.define(ke,ci),console.info(`%c ${ke.toUpperCase()} %c v${La} `,"background:#5ac8fa;color:#000;font-weight:bold","background:#333;color:#fff"));window.customCards=window.customCards||[];window.customCards.push({type:ke,name:"Pulse Weather Card",description:"Weather visualization with atmospheric effects, forecasts, wind rose, and more",preview:!0});var Ye=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_elements={};_indicators={};_indicatorTimer=null;_sparklineData={};_sparklineTimer=null;_sparklineLastFetch=0;_shadow;constructor(){super(),this._shadow=this.attachShadow({mode:"open"});let e=document.createElement("style");e.textContent=$i,this._shadow.appendChild(e)}get _cfg(){return this._config}disconnectedCallback(){this._indicatorTimer&&(clearTimeout(this._indicatorTimer),this._indicatorTimer=null),this._sparklineTimer&&(clearTimeout(this._sparklineTimer),this._sparklineTimer=null);let e=this._shadow.querySelectorAll(".pb-row");for(let o of e)dn(o),un(o)}connectedCallback(){this._config&&this._hass&&this._elements.container&&this._cacheBarElements()}setConfig(e){this._config=Li(e),this._elements={},this._sparklineData={},this._sparklineLastFetch=0,this._indicators={},this._hass&&(this._fullRender(),this._scheduleIndicatorFetch(),this._scheduleSparklineFetch())}set hass(e){if(this._hass=e,!this._config)return;let o=!1;for(let i of this._cfg.entities){let n=e.states[i.entity],a=this._prevStates[i.entity];if(!a||a.state!==n?.state||a.last_updated!==n?.last_updated){o=!0;break}let s=i.target??this._cfg.target;if(typeof s=="string"){let r=e.states[s],l=this._prevStates[`__target__${s}`];if(!l||l.state!==r?.state||l.last_updated!==r?.last_updated){o=!0;break}}}o&&(this._elements.container?this._updateBars():this._fullRender(),this._cacheStates(),this._scheduleIndicatorFetch(),this._scheduleSparklineFetch())}_fullRender(){let e=this._cfg;if(!e)return;let o=e.columns??1,i=o>1?` columns-${o}`:"",n=e.entity_row?" entity-row":"",a=e.layout==="compact"?" compact":"",s=[];o>1&&s.push(`--pb-columns:${o}`),e.gap!==void 0&&s.push(`--pulse-space-element:${$(de(e.gap))}`),e.font_size!==void 0&&s.push(`--pulse-font-body:${$(de(e.font_size))}`);let r=s.length>0?` style="${s.join(";")}"`:"",l="";e.title&&(l+=`<div class="pulse-title">${h(e.title)}</div>`),l+=`<div class="pb-card${i}${n}${a}"${r}>`;for(let m of e.entities)l+=this._renderBarRow(m);l+="</div>";let p=e.entity_row?l:`<ha-card>${l}</ha-card>`,c=this._shadow.querySelector("ha-card, .pb-card");c&&c.remove();let u=document.createElement("template");u.innerHTML=p,this._shadow.appendChild(u.content.cloneNode(!0)),this._elements.container=this._shadow.querySelector(".pb-card"),this._cacheBarElements();for(let m of e.entities){let d=this._elements.rows?.[m.entity];d&&(d.style.display=ln(m,this._hass)?"":"none")}}_renderBarRow(e){let o=this._cfg,i=sn(e,o,this._hass),n=e.positions?.name??o.positions?.name??Tt.positions.name,a=e.positions?.value??o.positions?.value??Tt.positions.value,s=e.positions?.icon??o.positions?.icon??Tt.positions.icon,r=e.positions?.indicator??o.positions?.indicator??Tt.positions.indicator,l=e.animation??{},p=l.speed??o.animation.speed,c=l.effect??o.animation.effect,u=l.state??o.animation.state,m=this._buildIndicatorHtml(e,o,r),d=cn(e,this._hass),f=this._buildPositionHtml(i,n,a,s,r,m,"outside",d),g=this._buildPositionHtml(i,n,a,s,r,m,"inside",d),w=$(de(e.height??o.height)),v=$(de(e.border_radius??o.border_radius)),b=i.color?`background-color:${$(i.color)};`:"",y=c==="charge"&&!i.isUnavailable?" charge":"",_=u==="off"?"transition:none;":"",S=ge(e,o),C=`width:${i.fill*S}%;${_}${b}`,M=this._buildTargetHtml(e,o,i.min,i.max),E=this._buildSparklineHtml(e,o),z=`
      <div class="pb-container" style="height:${w};border-radius:${v};--pb-animation-speed:${p}s;">
        <div class="pb-track"></div>
        ${E}
        <div class="pb-fill${y}" data-entity="${h(e.entity)}" style="${C}"></div>
        ${M}
        ${g}
      </div>`,k=!!(e.interactive??o.interactive),x=k?`<div class="pb-interactive-row"><div class="pb-step-btn" data-step="-1" role="button" aria-label="Decrease">\u2212</div>${z}<div class="pb-step-btn" data-step="1" role="button" aria-label="Increase">+</div></div>`:z,T=k?"slider":"progressbar",F=i.isUnavailable?`role="${T}" aria-valuenow="0" aria-valuemin="${i.min}" aria-valuemax="${i.max}" aria-label="${h(i.name)}: Unavailable"`:`role="${T}" aria-valuenow="${i.numValue}" aria-valuemin="${i.min}" aria-valuemax="${i.max}" aria-label="${h(i.name)}: ${h(i.displayValue)}"`,B=i.isUnavailable?" unavailable":"",I=k?" data-interactive":"",q=i.isUnavailable?'data-state="unavailable"':`data-state="${h(i.numValue)}"`,L=i.color?` data-severity-color="${h(i.color)}"`:"";return`<div class="pb-row${B}" data-entity="${h(e.entity)}"${I} ${q}${L} ${F}>${f}${x}</div>`}_buildIndicatorHtml(e,o,i){if(i==="off")return"";let n=e.indicator??o.indicator,a=this._indicators[e.entity],s=a?.direction??"neutral",r=n?.show_delta===!0&&!!a,l=this._hass?.states[e.entity],p=fe(e,l),c=ao(e,o,this._hass),{text:u}=rn(s,a?.delta??0,r,c,p),m=n?.inverted===!0?" inverted":"";return`<span class="pb-indicator ${s}${m}">${u}</span>`}_buildPositionHtml(e,o,i,n,a,s,r,l){if(o!==r&&i!==r&&n!==r&&a!==r)return"";let c=`<div class="${r==="outside"?"pb-labels":"pb-content"}"><div class="pb-label-left">`;return n===r&&e.resolvedIcon&&(c+=`<ha-icon class="pb-icon" icon="${h(e.resolvedIcon)}"></ha-icon>`),o===r&&(l?(c+='<div class="pb-name-group">',c+=`<span class="pb-name">${h(e.name)}</span>`,c+=`<span class="pb-secondary">${h(l)}</span>`,c+="</div>"):c+=`<span class="pb-name">${h(e.name)}</span>`),c+='</div><div class="pb-label-right">',i===r&&(c+=`<span class="pb-value">${h(e.displayValue)}</span>`),a===r&&s&&(c+=s),c+="</div></div>",c}_buildTargetHtml(e,o,i,n){let a=e.target??o.target,{value:s,showLabel:r}=ro(a,this._hass);if(s===null)return"";let l=At((s-i)/(n-i),0,1)*100,p=ge(e,o),c=`left:${l*p}%`,u=r?`<span class="pb-target-label">${h(s)}</span>`:"";return`<div class="pb-target" style="${c}">${u}</div>`}_updateBars(){let e=this._cfg;for(let o of e.entities){let i=sn(o,e,this._hass),n=ge(o,e),a=this._elements.rows?.[o.entity];if(!a||a.__pulseSliding)continue;let s=ln(o,this._hass);if(a.style.display=s?"":"none",!s)continue;a.classList.toggle("unavailable",i.isUnavailable);let r=a.querySelector(".pb-fill");if(r){let f=`${i.fill*n}%`;r.style.width=f,r.style.backgroundColor=i.color||"";let g=a.querySelector(".pb-sparkline");g&&(g.style.width=`${n*100}%`);let w=a.querySelector(".pb-icon");w&&i.resolvedIcon&&w.setAttribute("icon",i.resolvedIcon)}let l=a.querySelectorAll(".pb-name");for(let f of l)f.textContent=i.name;let p=a.querySelectorAll(".pb-value");for(let f of p)f.textContent=i.displayValue;let c=a.querySelectorAll(".pb-secondary");if(c.length>0){let f=cn(o,this._hass);for(let g of c)g.textContent=f}a.setAttribute("aria-valuenow",i.isUnavailable?"0":String(i.numValue)),a.setAttribute("aria-valuemin",String(i.min)),a.setAttribute("aria-valuemax",String(i.max)),a.setAttribute("aria-label",`${h(i.name)}: ${h(i.displayValue)}`),a.setAttribute("data-state",i.isUnavailable?"unavailable":String(i.numValue)),i.color?a.setAttribute("data-severity-color",i.color):a.removeAttribute("data-severity-color");let u=a.querySelector(".pb-target"),m=o.target??e.target,{value:d}=ro(m,this._hass);if(d!==null){let f=At((d-i.min)/(i.max-i.min),0,1)*100;if(u){u.style.left=`${f*n}%`,u.style.display="";let g=u.querySelector(".pb-target-label");g&&(g.textContent=String(d))}}else u&&(u.style.display="none")}}_scheduleIndicatorFetch(){let e=this._cfg;!e||!e.entities.some(i=>(i.indicator??e.indicator)?.show===!0)||(this._indicatorTimer&&clearTimeout(this._indicatorTimer),this._indicatorTimer=setTimeout(()=>this._fetchIndicators(),500))}async _fetchIndicators(){let e=this._cfg;if(e)try{let o=new Map;for(let n of e.entities)o.set(n.entity,n);let i=new Map;for(let n of e.entities){let a=n.indicator??e.indicator;if(!a?.show)continue;let s=a.period??60;i.has(s)||i.set(s,[]),i.get(s).push({entity:n.entity,icfg:a})}for(let[n,a]of i){let s=a.map(l=>l.entity),r=await zi(this._hass,s,n);for(let{entity:l,icfg:p}of a){let c=o.get(l),u=this._hass?.states[l],m=c?.attribute?u?.attributes?.[c.attribute]:u?.state,d=Ni(m,r[l]);this._indicators[l]=d;let f=this._elements.rows?.[l];if(!f)continue;let g=f.querySelector(".pb-indicator");if(g&&c){let w=this._hass?.states[l],v=fe(c,w),b=ao(c,e,this._hass),{text:y}=rn(d.direction,d.delta,p.show_delta===!0,b,v),_=p.inverted===!0?" inverted":"";g.textContent=y,g.className=`pb-indicator ${d.direction}${_}`}}}}catch(o){Ht("Indicator fetch failed: %O",o)}}_resolveSparklineConfig(e,o){let i=e.sparkline??o.sparkline;if(!i)return null;let n=i===!0?{}:i.show?i:null;if(!n)return null;let a=n.hours_to_show??24,s=n.points_per_hour??1;return{hours:a,pointsPerHour:s,slots:Math.max(a*s,2),aggregateFunc:n.aggregate_func??"avg",smoothing:n.smoothing!==!1,strokeWidth:Number(n.line_width??n.stroke_width??1.5)||1.5,color:n.color??null,updateInterval:n.update_interval??300}}_buildSparklineMarkup(e,o,i=!1){let n=`${o*100}%`,a=e.color?`color:${$(e.color)};`:"";return`<svg${i?' xmlns="http://www.w3.org/2000/svg"':""} class="pb-sparkline" viewBox="0 0 200 50" preserveAspectRatio="none" height="100%" style="width:${n};${a}"><path d="${e.path}" fill="none" stroke="currentColor" stroke-width="${e.strokeWidth}" /></svg>`}_buildSparklineHtml(e,o){let i=this._resolveSparklineConfig(e,o);if(!i)return"";let n=this._sparklineData[e.entity];if(!n||n.length<2)return"";let a=me(n,200,50,i.slots,i.aggregateFunc,i.smoothing);if(!a)return"";let s=ge(e,o);return this._buildSparklineMarkup({path:a,strokeWidth:i.strokeWidth,color:i.color},s,!1)}_scheduleSparklineFetch(){let e=this._cfg;if(!e||!e.entities.some(a=>!!this._resolveSparklineConfig(a,e)))return;let i=300;for(let a of e.entities){let s=this._resolveSparklineConfig(a,e);s&&s.updateInterval<i&&(i=s.updateInterval)}(Date.now()-this._sparklineLastFetch)/1e3<i&&this._sparklineLastFetch>0||(this._sparklineTimer&&clearTimeout(this._sparklineTimer),this._sparklineTimer=setTimeout(()=>this._fetchSparklines(),1e3))}async _fetchSparklines(){let e=this._cfg;if(e)try{let o=new Map;for(let i of e.entities){let n=this._resolveSparklineConfig(i,e);if(!n)continue;let a=n.hours;o.has(a)||o.set(a,[]),o.get(a).push(i.entity)}for(let[i,n]of o){let a=await Re(this._hass,n,i);for(let s of n)this._sparklineData[s]=a[s]||[]}this._sparklineLastFetch=Date.now(),this._updateSparklines()}catch(o){Ht("Sparkline fetch failed: %O",o)}}_updateSparklines(){let e=this._cfg;if(e)for(let o of e.entities){let i=this._resolveSparklineConfig(o,e);if(!i)continue;let n=this._elements.rows?.[o.entity];if(!n)continue;let a=this._sparklineData[o.entity];if(!a||a.length<2)continue;let s=me(a,200,50,i.slots,i.aggregateFunc,i.smoothing);if(!s)continue;let r=n.querySelector(".pb-sparkline"),l=ge(o,e),p=`${l*100}%`;if(r){let c=r.querySelector("path");c&&c.setAttribute("d",s),r.style.width=p}else{let c=n.querySelector(".pb-container");if(!c)continue;let u=this._buildSparklineMarkup({path:s,strokeWidth:i.strokeWidth,color:i.color},l,!0),m=new DOMParser().parseFromString(u,"image/svg+xml"),d=document.importNode(m.documentElement,!0),f=c.querySelector(".pb-track");f&&f.nextSibling?c.insertBefore(d,f.nextSibling):c.appendChild(d)}}}_cacheStates(){let e=this._cfg;this._prevStates={};for(let o of e.entities){let i=this._hass?.states[o.entity];i&&(this._prevStates[o.entity]={state:i.state,last_updated:i.last_updated});let n=o.target??e.target;if(typeof n=="string"){let a=this._hass?.states[n];a&&(this._prevStates[`__target__${n}`]={state:a.state,last_updated:a.last_updated})}}}_cacheBarElements(){let e=this._cfg;this._elements.rows={};let o=new Map;for(let n of e.entities)o.set(n.entity,n);let i=this._shadow.querySelectorAll(".pb-row");for(let n of i){let a=n.dataset.entity;if(a){this._elements.rows[a]=n;let s=o.get(a);s&&(Di(n,this,this._hass,e,s),(s.interactive??e.interactive)&&Oi(n,this,e,s)),Et(n);for(let r of n.querySelectorAll(".pb-step-btn"))Et(r)}}}getCardSize(){let e=this._config?.entities?.length||1,o=this._config?.columns||1;return Math.ceil(e/o)+(this._config?.title?1:0)}getGridOptions(){let e=this._config?.entities?.length||1,o=this._config?.columns||1,i=Math.ceil(e/o);return{columns:12,min_columns:3,rows:Math.max(1,i),min_rows:1}}static async getConfigElement(){return await import("./pulse-card-editor.js"),document.createElement("pulse-bar-card-editor")}static getStubConfig(e){return{entity:Object.keys(e.states).filter(i=>{let n=e.states[i];return i.startsWith("sensor.")&&!isNaN(parseFloat(n.state))})[0]||"sensor.example"}}};customElements.get("pulse-bar-card")||customElements.define("pulse-bar-card",Ye);customElements.get("pulse-card")||customElements.define("pulse-card",class extends Ye{});window.customCards=window.customCards||[];window.customCards.push({type:"pulse-bar-card",name:"Pulse Bar Card",description:"Compact horizontal bar chart for sensor data visualization",preview:!0,documentationURL:"https://github.com/hiall-fyi/pulse-card"});console.info(`%c PULSE-BAR-CARD %c v${Si} `,"background:#03A9F4;color:white;font-weight:bold","background:#333;color:white");var Mf=Ye;export{Mf as default};
