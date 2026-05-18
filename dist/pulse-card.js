var zt=`
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
  border-radius: 2px 2px 0 0;
  background: var(--info-color, #5ac8fa);
}
`;var Pe=`${zt}
  :host {
    display: block;

    /* Card-local design tokens \u2014 override via card-mod or HA theme.
       Family-shared concerns live on --pulse-* via SHARED_STYLES. */
    --pb-columns: 1;
    --pb-track-opacity: 0.12;
    --pb-animation-speed: 0.8s;
  }

  ha-card {
    overflow: hidden;
    padding: 16px;
    background: var(--pulse-bg-card, var(--ha-card-background, var(--card-background-color)));
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
    gap: 6px;
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
    gap: 6px;
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
    font-weight: 500;
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
    background: var(--primary-color, #03A9F4);
    opacity: var(--pb-track-opacity);
    border-radius: inherit;
  }

  /* Fill */
  .pb-fill {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: var(--primary-color, #03A9F4);
    border-radius: inherit;
    transition: width var(--pb-animation-speed) ease,
                background-color 0.3s ease;
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
    background: var(--primary-text-color, #333);
    opacity: 0.6;
    border-radius: 1px;
    z-index: 2;
    pointer-events: none;
    box-shadow: 0 0 0 1px var(--card-background-color, rgba(255,255,255,0.8));
  }

  /* Target label */
  .pb-target-label {
    position: absolute;
    top: -18px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 10px;
    font-weight: 500;
    color: var(--primary-text-color, #333);
    white-space: nowrap;
    pointer-events: none;
    opacity: 0.7;
  }

  /* Indicator */
  .pb-indicator {
    font-size: 12px;
    font-weight: 500;
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
  @keyframes pulse-charge {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.75; }
  }
  .pb-fill.charge {
    animation: pulse-charge 2s ease-in-out infinite;
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
    border-radius: 4px;
  }

  /* Secondary info group \u2014 wraps name + secondary line */
  .pb-name-group {
    display: flex;
    flex-direction: column;
    min-width: 0;
    gap: 1px;
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
    color: var(--pb-sparkline-color, var(--primary-text-color));
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
    color: var(--primary-text-color);
    font-size: 18px;
    font-weight: 500;
    user-select: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
    position: relative;
    overflow: hidden;
    transition: opacity 0.15s;
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
    gap: 2px;
  }
  .pb-row[data-interactive] .pb-interactive-row .pb-container {
    flex: 1;
    min-width: 0;
  }

  /* Compact mode */
  ha-card:has(.compact) {
    padding: 10px;
  }
  .pb-card.compact {
    gap: var(--pulse-space-element, 6px);
  }
  .compact .pb-row {
    gap: 3px;
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
    font-size: 10px;
  }

  /* Reduced motion \u2014 respect prefers-reduced-motion */
  @media (prefers-reduced-motion: reduce) {
    .pb-fill.charge { animation: none; }
    .pb-fill, .pb-row { transition: none; }
  }
`;var qe="1.5.0",Oe="Pulse Card:",Q={min:0,max:100,height:"8px",border_radius:"4px",decimal:null,entity_row:!1,complementary:!1,limit_value:!1,columns:1,animation:{state:"on",speed:.8,effect:"none"},positions:{icon:"off",name:"outside",value:"outside",indicator:"off"},tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}};function h(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function k(e){return e==null||e===""?"":String(e).replace(/[;{}]/g,"").replace(/url\s*\(/gi,"").replace(/expression\s*\(/gi,"").replace(/-moz-binding\s*:/gi,"")}function tt(e,t,i){return Math.min(Math.max(e,t),i)}var Bn=32;function vt(e){if(e==null||e==="")return"";let t=String(e);if(t.length>Bn)return t;let i=t.split(".");if(i.length>2)return t;for(let n of i){if(n.length===0)return t;for(let o=0;o<n.length;o++){let r=n.charCodeAt(o);if(r<48||r>57)return t}}return`${t}px`}function nt(){return typeof window>"u"?!1:window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches??!1}function G(e,t=1){return e==null?"--":typeof e!="number"?String(e):isFinite(e)?String(parseFloat(e.toFixed(t))):"--"}var Ve="Pulse sparkline:";async function At(e,t,i=24){let n={};if(!e?.callWS||t.length===0)return n;let o=new Date,r=new Date(o.getTime()-i*60*60*1e3);try{let a=await e.callWS({type:"history/history_during_period",start_time:r.toISOString(),end_time:o.toISOString(),entity_ids:t,minimal_response:!0,significant_changes_only:!0});for(let s of t)try{let c=a?.[s];if(!c||c.length<2){n[s]=[];continue}let l=[];for(let p of c){let u=parseFloat(p.s);if(!isNaN(u)){let f=p.lu??p.last_updated,d=typeof f=="number"?f*1e3:new Date(f).getTime();isFinite(d)&&l.push({t:d,v:u})}}n[s]=l}catch(c){console.warn(`${Ve} parse failed for %s: %O`,s,c),n[s]=[]}}catch(a){console.warn(`${Ve} fetch failed: %O`,a);for(let s of t)n[s]=[]}return n}var Be={avg:e=>e.reduce((t,i)=>t+i,0)/e.length,min:e=>Math.min(...e),max:e=>Math.max(...e),median:e=>{let t=[...e].sort((n,o)=>n-o),i=Math.floor(t.length/2);return t.length%2?t[i]:(t[i-1]+t[i])/2},first:e=>e[0],last:e=>e[e.length-1],sum:e=>e.reduce((t,i)=>t+i,0),delta:e=>Math.max(...e)-Math.min(...e),diff:e=>e[e.length-1]-e[0]};function Un(e,t,i="avg"){if(e.length===0||t<1)return[];if(e.length<=t){let u=e[0].t,f=e[e.length-1].t-u||1;return e.map(d=>({x:(d.t-u)/f,v:d.v}))}let n=Be[i]||Be.avg,o=e[0].t,s=(e[e.length-1].t-o||1)/t,c=[],l=0,p=e[0].v;for(let u=0;u<t;u++){let f=o+(u+1)*s,d=[];for(;l<e.length&&e[l].t<f;)d.push(e[l].v),l++;d.length>0&&(p=n(d)),c.push({x:u/(t-1||1),v:p})}return c}function bt(e,t,i,n=24,o="avg",r=!0){if(e.length<2)return"";let a=Un(e,n,o);if(a.length<2)return"";let s=a[0].v,c=a[0].v;for(let g=1;g<a.length;g++)a[g].v<s&&(s=a[g].v),a[g].v>c&&(c=a[g].v);let l=c-s||1,p=2,u=i-p*2,f=a.map(g=>({x:g.x*t,y:p+u-(g.v-s)/l*u}));if(f.length===2||!r){let g=`M${f[0].x.toFixed(1)},${f[0].y.toFixed(1)}`;for(let y=1;y<f.length;y++)g+=`L${f[y].x.toFixed(1)},${f[y].y.toFixed(1)}`;return g}let d=f[0],m=`M${d.x.toFixed(1)},${d.y.toFixed(1)}`;for(let g=1;g<f.length;g++){let y=f[g],v=(d.x+y.x)/2,b=(d.y+y.y)/2;m+=` ${v.toFixed(1)},${b.toFixed(1)}`,m+=` Q${y.x.toFixed(1)},${y.y.toFixed(1)}`,d=y}return m+=` ${d.x.toFixed(1)},${d.y.toFixed(1)}`,m}var Wn=new Set(["on","open","home","locked","playing","active"]),Gn=new Set(["off","closed","not_home","unlocked","idle","paused","standby"]);function Ge(e,t,i){if(typeof e!="string")return null;let n=e.toLowerCase();return Wn.has(n)?i:Gn.has(n)?t:null}function jn(e,t){let i=String(e),n=i.charAt(0).toUpperCase()+i.slice(1);return t?`${n}${t}`:n}function Zn(e,t,i,n=!1){let o=Ge(e,t,i),r=o!==null?o:parseFloat(e);if(isNaN(r))return 0;let a=i-t;if(a<=0)return 0;let s=n?i-r:r;return tt((s-t)/a,0,1)*100}function Kn(e,t){if(!t||t.length===0)return null;let i=parseFloat(e);if(isNaN(i))return null;for(let n of t)if(i>=n.from&&i<=n.to)return n;return null}function Ue(e){let t=e.replace("#","");return t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:parseInt(t.substring(0,2),16),g:parseInt(t.substring(2,4),16),b:parseInt(t.substring(4,6),16)}}function Yn(e,t,i){let n=Ue(e),o=Ue(t),r=Math.round(n.r+(o.r-n.r)*i),a=Math.round(n.g+(o.g-n.g)*i),s=Math.round(n.b+(o.b-n.b)*i);return`rgb(${r}, ${a}, ${s})`}function Xn(e,t){if(!t||t.length<2)return null;let i=parseFloat(e);if(isNaN(i))return null;let n=t[0].from<=t[t.length-1].from?t:[...t].sort((o,r)=>o.from-r.from);for(let o=0;o<n.length-1;o++){let r=n[o],a=n[o+1];if(i>=r.from&&i<=a.to){let s=a.from-r.from,c=s>0?(i-r.from)/s:0;return Yn(r.color,a.color,tt(c,0,1))}}return i<=n[0].from?n[0].color:n[n.length-1].color}function Jn(e,t,i){let n=e.min??i?.min,o=e.max??i?.max;return n==null&&(n=t?.attributes?.min??t?.attributes?.min_temp??Q.min),o==null&&(o=t?.attributes?.max??t?.attributes?.max_temp??Q.max),{min:parseFloat(String(n)),max:parseFloat(String(o))}}function Nt(e,t,i){return e.decimal??t.decimal??i?.entities?.[e.entity]?.display_precision??null}function _t(e,t){return e.unit_of_measurement??t?.attributes?.unit_of_measurement??""}function Qn(e){return!isFinite(e)||e<0?"0":e>=1e9?`${(e/1e9).toFixed(1)}G`:e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}K`:e.toString()}function to(e,t,i){let n=parseFloat(e);if(isNaN(n))return String(e);let o=t!=null?n.toFixed(t):n.toString();return i?`${o}${i}`:o}function je(e,t){if(t==null)return{direction:"neutral",delta:0};let i=parseFloat(e),n=parseFloat(t);if(isNaN(i)||isNaN(n))return{direction:"neutral",delta:0};if(!isFinite(i)||!isFinite(n))return{direction:"neutral",delta:0};let o=Math.abs(i-n),r=Math.max(Math.abs(i),1);if(o>r*1e3)return{direction:"neutral",delta:0};let a=Math.round((i-n)*100)/100;return{direction:a>0?"up":a<0?"down":"neutral",delta:a}}function Qt(e,t,i,n,o){let r=e==="up"?"\u25B2":e==="down"?"\u25BC":"\u25B6";if(!i)return{arrow:r,text:r};let a=n!=null?t.toFixed(n):String(Math.round(t*100)/100),s=t>0?"+":"";return{arrow:r,text:`${r} ${s}${a}${o||""}`}}function ot(e,...t){console.warn(`${Oe} ${e}`,...t)}async function Ze(e,t,i=60){let n={};if(!e?.callWS||t.length===0)return n;let o=new Date,r=new Date(o.getTime()-i*60*1e3);try{let a=await e.callWS({type:"history/history_during_period",start_time:r.toISOString(),end_time:o.toISOString(),entity_ids:t,minimal_response:!0,significant_changes_only:!0});for(let s of t){let c=a?.[s];if(!c||c.length===0){n[s]=null;continue}let l=parseFloat(c[0].s);n[s]=isNaN(l)?null:l}}catch(a){ot("Failed to fetch history for %s: %O",t.join(", "),a);for(let s of t)n[s]=null}return n}function We(e){return!Array.isArray(e)||e.length<2?e:[...e].sort((t,i)=>t.from-i.from)}function Ke(e){if(!e)throw new Error("Please define an entity or entities");if(!e.entity&&!e.entities)throw new Error("Please define an entity or entities");let t={...Q,...e,animation:{...Q.animation,...e.animation},positions:{...Q.positions,...e.positions}};t.columns!==null&&t.columns!==void 0&&(t.columns=Number(t.columns)||1),t.animation.speed!==null&&t.animation.speed!==void 0&&(t.animation.speed=Number(t.animation.speed)||Q.animation.speed),t.severity&&(t.severity=We(t.severity)),t.indicator?.show===!0&&t.positions.indicator==="off"&&(t.positions={...t.positions,indicator:"outside"}),t.entities=e.entities?e.entities.map(n=>{let o=typeof n=="string"?{entity:n}:{...n};return o.severity&&(o.severity=We(o.severity)),!o.secondary_info&&t.secondary_info&&(o._cardSecondaryInfo=t.secondary_info),o.indicator?.show===!0&&o.positions&&o.positions.indicator==="off"?o.positions={...o.positions,indicator:"outside"}:o.indicator?.show===!0&&!o.positions?.indicator&&(o.positions={...o.positions||{},indicator:"outside"}),o}):[{entity:e.entity}];let i=new Set;for(let n of t.entities)i.has(n.entity)&&ot('Duplicate entity "%s" in config \u2014 only the last bar will update dynamically',n.entity),i.add(n.entity);return t}function Ht(e,t){if(e==null)return{value:null,showLabel:!1};if(typeof e=="number")return{value:isNaN(e)?null:e,showLabel:!1};if(typeof e=="string"){let i=t?.states[e];if(!i)return{value:null,showLabel:!1};let n=parseFloat(i.state);return{value:isNaN(n)?null:n,showLabel:!1}}return typeof e=="object"&&e.value!==void 0?{value:Ht(e.value,t).value,showLabel:e.show_label===!0}:{value:null,showLabel:!1}}function te(e,t,i){let n=i?.states[e.entity],o=!n||n.state==="unavailable"||n.state==="unknown"||n.state==="error",{min:r,max:a}=Jn(e,n,t),s=e.attribute?n?.attributes?.[e.attribute]:n?.state,c=e.attribute?null:Ge(s,r,a),l=c!==null,p=l?c:parseFloat(s),u=e.complementary??t.complementary,f=o?0:Zn(s,r,a,u),d=_t(e,n),m=Nt(e,t,i),y=(e.limit_value??t.limit_value)&&!isNaN(p)?tt(p,r,a):s,v=o?"Unavailable":e.state_map?.[s]?e.state_map[s]:l?jn(s,d):to(y,m,d),b=e.name??n?.attributes?.friendly_name??e.entity,_="",w="";if(!o){let C=e.state_color,F=n?.state;if(C&&F&&C[F])_=C[F];else{let I=e.attribute_color??t.attribute_color;if(I?.attribute&&I?.map){let $=n.attributes?.[I.attribute];if($!=null){let x=I.map[String($)];x&&(_=x)}}if(!_){let $=e.severity??t.severity;if($&&$.length>0)if($.some(E=>E.mode==="gradient")){let E=Xn(p,$);E&&(_=E)}else{let E=Kn(p,$);E&&(_=E.color,E.icon&&(w=E.icon))}}}}let S=_||e.color||t.color||"",A=e.icon||n?.attributes?.icon||"";return{isUnavailable:o,min:r,max:a,numValue:p,fill:f,displayValue:v,name:b,color:S,resolvedIcon:w||A}}function yt(e,t){let i=e.bar_width??t.bar_width;return i!=null?Math.max(1,Math.min(100,i))/100:1}function ee(e,t){if(!e.visibility)return!0;let i=t?.states[e.entity];if(!i)return!1;let n=e.visibility,o=e.attribute?i.attributes?.[e.attribute]:i.state;if(!e.attribute&&(i.state==="unavailable"||i.state==="unknown"||i.state==="error"))return n.state_equal!==void 0&&String(n.state_equal)===i.state;let r=parseFloat(o);return!(n.state_above!==void 0&&(isNaN(r)||r<=n.state_above)||n.state_below!==void 0&&(isNaN(r)||r>=n.state_below)||n.state_equal!==void 0&&String(o)!==String(n.state_equal)||n.state_not_equal!==void 0&&String(o)===String(n.state_not_equal))}var Ye={input_number:{service:"set_value",dataKey:"value"},number:{service:"set_value",dataKey:"value"},light:{service:"turn_on",dataKey:"brightness_pct",fixedRange:{min:0,max:100,step:1}},cover:{service:"set_cover_position",dataKey:"position",fixedRange:{min:0,max:100,step:1}},fan:{service:"set_percentage",dataKey:"percentage",fixedRange:{min:0,max:100,step:1}},media_player:{service:"volume_set",dataKey:"volume_level",transform:e=>e/100,fixedRange:{min:0,max:100,step:1}},climate:{service:"set_temperature",dataKey:"temperature"}};function Rt(e,t,i,n){if(n<=0)return tt(e,t,i);let o=Math.round((e-t)/n)*n+t,r=(String(n).split(".")[1]||"").length,a=Number(o.toFixed(r));return tt(a,t,i)}function Xe(e,t,i){if(i?.service){let a=i.service.split(".");if(a.length<2||!a[0]||!a[1])return null;let s={entity_id:e};if(i.data)for(let[c,l]of Object.entries(i.data))s[c]=l==="$value"?t:l;return{domain:a[0],service:a[1],data:s}}let n=e.split(".")[0],o=Ye[n];if(!o)return null;let r=o.transform?o.transform(t):t;return{domain:n,service:o.service,data:{entity_id:e,[o.dataKey]:r}}}function Ct(e,t,i,n){let o=e.split(".")[0],a=Ye[o]?.fixedRange,s=t?.attributes,c=n?.min??s?.min??s?.min_temp??a?.min??0,l=n?.max??s?.max??s?.max_temp??a?.max??100,p=i?.step??s?.step??s?.target_temp_step??s?.percentage_step??a?.step??1;return{min:Number(c),max:Number(l),step:Number(p)||1}}function eo(e){if(!e)return"";let t=new Date(e).getTime();if(isNaN(t))return"";let i=Date.now()-t;if(i<0)return"just now";let n=Math.floor(i/1e3);if(n<60)return"just now";let o=Math.floor(n/60);if(o<60)return`${o} min ago`;let r=Math.floor(o/60);return r<24?`${r}h ago`:`${Math.floor(r/24)}d ago`}function ne(e,t){let i=e.secondary_info??e._cardSecondaryInfo;if(!i)return"";if(i.text!==void 0&&i.text!==null&&i.text!=="")return String(i.text);let n=t?.states[e.entity];if(!n)return"";if(i.template)return i.template.replace(/\{(\w+)\}/g,(o,r)=>{let a=n.attributes?.[r];return a==null?"":(r==="bytes"||r==="packets")&&typeof a=="number"?Qn(a):String(a)});if(i.attribute){let o=n.attributes?.[i.attribute];return o!=null?String(o):""}return i.type==="last_changed"?eo(n.last_changed):""}function Dt(e,t,i){e.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:i}))}function no(e){if(typeof e!="string"||e.length===0)return!1;let t=e.trim();if(t.startsWith("/")&&!t.startsWith("//")||t.startsWith("./")||t.startsWith("../")||t.startsWith("#"))return!0;try{let i=new URL(t,window.location.href);return["http:","https:","mailto:","tel:"].includes(i.protocol)}catch{return!1}}function oo(e){if(typeof e!="string"||e.length===0)return!1;let t=e.trim();return!(t.startsWith("//")||/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(t))}function xt(e,t,i,n,o){if(!(!i||i.action==="none"))switch(i.action){case"more-info":Dt(e,"hass-more-info",{entityId:i.entity||n});break;case"navigate":i.navigation_path&&oo(i.navigation_path)?(history.pushState(null,"",i.navigation_path),Dt(e,"location-changed",{replace:!1})):i.navigation_path&&o("navigation_path rejected \u2014 must be a same-origin relative path: %s",i.navigation_path);break;case"call-service":case"perform-action":{let r=i.service||i.perform_action;if(!r||typeof r!="string")break;let a=r.indexOf(".");if(a<=0||a===r.length-1){o('Service rejected \u2014 expected "domain.service" format, got: %s',r);break}let s=r.slice(0,a),c=r.slice(a+1);t.callService(s,c,i.service_data||i.data).catch(l=>o("Service call %s failed: %O",r,l));break}case"url":i.url_path&&no(i.url_path)?window.open(i.url_path,"_blank","noopener,noreferrer"):i.url_path&&o("url_path rejected \u2014 only http/https/mailto/tel schemes or relative paths are allowed: %s",i.url_path);break;case"toggle":t.callService("homeassistant","toggle",{entity_id:i.entity||n}).catch(r=>o("Toggle %s failed: %O",i.entity||n,r));break}}function io(e,t,i){let n=t?.[e],o=i?.[e];return n||o||{action:e==="tap_action"?"more-info":"none"}}function Pt(e,t,i,n,o){let r=io(o,n,i);xt(e,t,r,n.entity,ot)}function ie(e){let t=e.__pulseCleanup;typeof t=="function"&&t()}function Je(e,t,i,n,o){ie(e);let r=new AbortController,{signal:a}=r,s=0,c=null,l=null,p=!1;e.__pulseCleanup=()=>{r.abort(),c&&clearTimeout(c),l&&clearTimeout(l),delete e.__pulseCleanup},e.setAttribute("tabindex","0"),e.addEventListener("keydown",f=>{(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),t._hass&&Pt(t,t._hass,n,o,"tap_action"))},{signal:a}),e.addEventListener("click",f=>{if(f.preventDefault(),p){p=!1;return}e.__pulseSliding||(s++,s===1?c=setTimeout(()=>{s=0,t._hass&&Pt(t,t._hass,n,o,"tap_action")},250):s===2&&(c&&clearTimeout(c),s=0,t._hass&&Pt(t,t._hass,n,o,"double_tap_action")))},{signal:a}),e.addEventListener("pointerdown",()=>{p=!1,l=setTimeout(()=>{p=!0,t._hass&&Pt(t,t._hass,n,o,"hold_action")},500)},{signal:a});let u=()=>{l&&clearTimeout(l)};e.addEventListener("pointerup",u,{signal:a}),e.addEventListener("pointercancel",u,{signal:a}),e.addEventListener("contextmenu",f=>f.preventDefault(),{signal:a})}var so=50;function se(e){let t=e.__pulseSliderCleanup;typeof t=="function"&&t()}function Qe(e,t,i,n){se(e);let o=e.querySelector(".pb-container");if(!o)return;let r=o,a=new AbortController,{signal:s}=a,c=null;e.__pulseSliderCleanup=()=>{a.abort(),c&&clearTimeout(c),g&&clearInterval(g),delete e.__pulseSliderCleanup};let l=typeof n.interactive=="object"?n.interactive:typeof i.interactive=="object"?i.interactive:void 0,p=null;function u(b){let _=r.getBoundingClientRect(),w=Math.max(0,Math.min(b-_.left,_.width)),S=_.width>0?w/_.width:0,T=t._hass?.states[n.entity],{min:C,max:F,step:I}=Ct(n.entity,T,l,n),$=C+S*(F-C);return Rt($,C,F,I)}function f(b){let w=t._hass?.states[n.entity],{min:S,max:A,step:T}=Ct(n.entity,w,l,n),C=A-S,F=C>0?(b-S)/C*100:0,I=r.querySelector(".pb-fill");I&&(I.style.width=`${F}%`);let $=_t(n,w),x=(String(T).split(".")[1]||"").length,E=x>0?b.toFixed(x):String(Math.round(b)),z=$?`${E}${$}`:E,N=e.querySelectorAll(".pb-value");for(let Z of N)Z.textContent=z}function d(){if(!p)return;let b=r.querySelector(".pb-fill");b&&(b.style.transition="",b.style.width=p.fillWidth);let _=e.querySelectorAll(".pb-value");for(let w of _)w.textContent=p.displayValue}function m(b){let _=Xe(n.entity,b,l);if(!_){ot("No slider service mapping for %s",n.entity),d();return}let w=t._hass;if(!w){d();return}w.callService(_.domain,_.service,_.data).catch(S=>{ot("Slider service call failed for %s: %O",n.entity,S),d()})}r.addEventListener("pointerdown",b=>{if(!t._hass)return;b.preventDefault();let _=r.querySelector(".pb-fill"),w=e.querySelector(".pb-value");p={fillWidth:_?.style.width||"0%",displayValue:w?.textContent||"",pointerId:b.pointerId,startX:b.clientX},e.__pulseSliding=!0,r.setPointerCapture(b.pointerId),e.classList.add("sliding"),_&&(_.style.transition="none");let S=u(b.clientX);f(S)},{signal:s}),r.addEventListener("pointermove",b=>{if(!p||b.pointerId!==p.pointerId)return;b.preventDefault();let _=u(b.clientX);f(_)},{signal:s}),r.addEventListener("pointerup",b=>{if(!p||b.pointerId!==p.pointerId)return;b.preventDefault();let _=r.querySelector(".pb-fill");_&&(_.style.transition=""),e.classList.remove("sliding"),r.releasePointerCapture(b.pointerId);let w=u(b.clientX);f(w),m(w),p=null,c=setTimeout(()=>{e.__pulseSliding=!1},so)},{signal:s}),r.addEventListener("pointercancel",b=>{if(!p||b.pointerId!==p.pointerId)return;let _=r.querySelector(".pb-fill");_&&(_.style.transition=""),e.classList.remove("sliding"),r.releasePointerCapture(b.pointerId),d(),p=null,e.__pulseSliding=!1},{signal:s});let g=null;function y(b){let _=t._hass;if(!_)return;let w=_.states[n.entity],{min:S,max:A,step:T}=Ct(n.entity,w,l,n),C=n.attribute?parseFloat(w?.attributes?.[n.attribute]):parseFloat(w?.state);if(isNaN(C))return;let F=Rt(C+b*T,S,A,T);F!==C&&(f(F),m(F))}let v=e.querySelectorAll(".pb-step-btn");for(let b of v){let _=Number(b.dataset.step);b.addEventListener("click",S=>{S.stopPropagation(),y(_)},{signal:s}),b.addEventListener("pointerdown",S=>{S.stopPropagation(),g&&clearInterval(g),g=setInterval(()=>y(_),200)},{signal:s});let w=()=>{g&&(clearInterval(g),g=null)};b.addEventListener("pointerup",w,{signal:s}),b.addEventListener("pointercancel",w,{signal:s}),b.addEventListener("pointerleave",w,{signal:s})}e.addEventListener("keydown",b=>{let _=t._hass;if(!_||b.key!=="ArrowRight"&&b.key!=="ArrowUp"&&b.key!=="ArrowLeft"&&b.key!=="ArrowDown")return;b.preventDefault();let w=_.states[n.entity],{min:S,max:A,step:T}=Ct(n.entity,w,l,n),C=n.attribute?parseFloat(w?.attributes?.[n.attribute]):parseFloat(w?.state);if(isNaN(C))return;let F=b.key==="ArrowRight"||b.key==="ArrowUp"?1:-1,I=Rt(C+F*T,S,A,T);I!==C&&(f(I),m(I))},{signal:s})}function it(e){if(!customElements.get("ha-ripple")||e.querySelector("ha-ripple"))return;let t=document.createElement("ha-ripple");e.appendChild(t),e.classList.add("has-ripple")}var tn="1.5.0",Ot="pulse-climate-card",en="pulse-climate-card-editor",nn="Pulse Climate Card:",mt={heating:{icon:"mdi:fire",cssVar:"--label-badge-yellow",fallback:"#FF9800",label:"Heating"},cooling:{icon:"mdi:snowflake",cssVar:"--label-badge-blue",fallback:"#2196F3",label:"Cooling"},drying:{icon:"mdi:water-off",cssVar:null,fallback:"#9C27B0",label:"Drying"},fan:{icon:"mdi:fan",cssVar:null,fallback:"#607D8B",label:"Fan"},idle:{icon:"mdi:clock-outline",cssVar:"--secondary-text-color",fallback:"#9E9E9E",label:"Idle"},off:{icon:"mdi:power",cssVar:"--disabled-color",fallback:"#616161",label:"Off"}},re={None:{cssVar:"--label-badge-green",fallback:"#4CAF50"},Low:{cssVar:"--label-badge-green",fallback:"#8BC34A"},Medium:{cssVar:"--label-badge-yellow",fallback:"#FF9800"},High:{cssVar:"--label-badge-red",fallback:"#F44336"},Critical:{cssVar:"--label-badge-red",fallback:"#B71C1C"}},on=["zones"];var st=["var(--label-badge-blue, #2196F3)","var(--label-badge-red, #F44336)","var(--label-badge-green, #4CAF50)","var(--label-badge-yellow, #FF9800)","var(--accent-color, #9C27B0)","var(--info-color, #00BCD4)","var(--warning-color, #FF5722)","var(--success-color, #8BC34A)"],lt={columns:1,layout:"default",show_temp_bar:!0,show_power_bar:!0,tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}},sn={graph:{attribute:"current_temperature",stacked:!1,hours_to_show:24,height:80},donut:{size:120},thermal_strip:{hours_to_show:24,mode:"timeline",slots_per_hour:2,attribute:"temperature"},comfort_strip:{slots_per_hour:1,hours_to_show:24,mode:"heatmap"},radial:{size:280,attribute:"temperature"},energy_flow:{}};var ae=`${zt}
:host {
  display: block;

  /* Card-local design tokens \u2014 override via card-mod or HA theme.
     Family-shared concerns (text colour, body type size, card chrome
     background, surface tint) live on --pulse-* and are inherited via
     SHARED_STYLES; only Climate-specific knobs declare locally. */
  --pc-bar-height: 8px;
  --pc-bar-radius: 4px;
  --pc-chart-line-width: 1.5;
  --pc-gap: 16px;
  --pc-gauge-height: 6px;
  --pc-gauge-radius: 3px;
  --pc-graph-height: 80px;
}

ha-card {
  overflow: hidden;
  padding: 16px;
  background: var(--pulse-bg-card);
  container-type: inline-size;
  color: var(--primary-text-color);
}

/* Title \u2014 adds layout margin on top of shared typography. */
.pulse-title { margin-bottom: 12px; }

/* Section container */
.pc-section { margin-top: 12px; }
.pc-section:first-child { margin-top: 0; }
.pulse-section-label { margin-bottom: 6px; }

/* Zone row */
.pc-zone-row {
  display: flex;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
}
.pc-zone-row:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
  border-radius: 4px;
}
.pc-zone-row.pc-unavailable { opacity: 0.5; }
.pc-zone-row.pc-unavailable .pc-power-bar-fill {
  background: var(--pulse-disabled) !important;
  width: 100% !important;
  opacity: 0.2;
}

/* Zone header: name + current temp */
.pc-zone-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 2px;
  gap: 4px;
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
.pc-zone-temp {
  font-size: var(--pulse-font-body);
  font-weight: 600;
  color: var(--pulse-text-primary);
  white-space: nowrap;
  flex-shrink: 0;
}
.pc-zone-target {
  font-size: 0.8em;
  color: var(--pulse-text-secondary);
  margin-left: 4px;
}
.pc-zone-humidity {
  font-size: 0.8em;
  font-weight: 400;
  color: var(--pulse-text-secondary);
  opacity: 0.7;
  display: inline-flex;
  align-items: center;
  gap: 1px;
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
  background: var(--primary-text-color);
  border-radius: 1.5px;
  z-index: 2;
  box-shadow: 0 0 0 1px var(--card-background-color, rgba(255,255,255,0.8));
}
.pc-temp-gauge-target {
  position: absolute;
  top: -1px;
  bottom: -1px;
  width: 2px;
  background: var(--primary-text-color);
  opacity: 0.5;
  border-radius: 1px;
  z-index: 1;
  box-shadow: 0 0 0 1px var(--card-background-color, rgba(255,255,255,0.8));
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
  transition: width 0.8s ease, background-color 0.3s ease;
}
.pc-power-bar-fill.pc-bar-active {
  box-shadow: 0 0 8px 1px var(--pc-bar-glow, rgba(255, 152, 0, 0.4));
  animation: barPulse 2.5s ease-in-out infinite;
}
@keyframes barPulse {
  0%, 100% { box-shadow: 0 0 6px 0 var(--pc-bar-glow, rgba(255, 152, 0, 0.3)); }
  50% { box-shadow: 0 0 10px 2px var(--pc-bar-glow, rgba(255, 152, 0, 0.5)); }
}

/* Status chips */
.pc-zone-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 2px 0;
}
.pc-chip {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-size: 11px;
  color: var(--pulse-text-secondary);
  white-space: nowrap;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
}
.pc-chip ha-icon { --mdc-icon-size: 14px; }
.pc-chip.pc-severity-high { color: var(--pulse-status-red); }
.pc-chip.pc-severity-medium { color: var(--pulse-status-yellow); }
.pc-chip.pc-severity-critical { color: var(--label-badge-red, #B71C1C); font-weight: 600; }

/* Multi-column zone grid */
.pc-section-zones.pc-columns {
  display: grid;
  gap: var(--pc-gap, 16px);
}

@container (max-width: 300px) {
  .pc-section-zones.pc-columns { grid-template-columns: 1fr; }
}

/* Compact mode */
.pc-compact .pc-zone-row { gap: 2px; }
.pc-compact .pc-zone-name { font-size: 12px; }
.pc-compact .pc-zone-chips { gap: 4px; }
.pc-compact .pc-chip { font-size: 10px; }

/* System section rows */
.pc-system-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 2px;
}
.pc-system-label {
  font-size: 12px;
  color: var(--pulse-text-secondary);
  min-width: 80px;
}
/* \u2500\u2500 Chart Styles \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Graph container */
.pc-chart-container {
  position: relative;
  width: 100%;
  height: var(--pc-graph-height, 80px);
  overflow: hidden;
  border-radius: 4px;
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
  font-size: 12px;
  color: var(--secondary-text-color);
  opacity: 0.6;
}

/* Legend chips */
.pc-chart-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 4px 0;
}
.pc-legend-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: var(--secondary-text-color);
  white-space: nowrap;
}
.pc-legend-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

/* Donut container */
.pc-donut-container {
  position: relative;
  margin: 8px auto;
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
  font-size: 18px;
  font-weight: 600;
  color: var(--secondary-text-color);
  text-align: center;
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
  border-radius: 4px;
  touch-action: pan-y;
}
.pc-sparkline-filled svg {
  width: 100%;
  height: 100%;
  display: block;
}

/* Zone Pulse mode \u2014 waveform as row background */
.pc-zone-row-pulse {
  position: relative;
  height: 56px;
  margin-bottom: 4px;
  border-radius: 10px;
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
.pc-pulse-info-left { display: flex; flex-direction: column; gap: 2px; }
.pc-pulse-info-right { display: flex; align-items: baseline; gap: 6px; }
.pc-pulse-current {
  font-size: 20px;
  font-weight: 300;
  color: var(--primary-text-color);
  font-variant-numeric: tabular-nums;
}
.pc-pulse-status {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  color: var(--secondary-text-color);
}
.pc-status-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  flex-shrink: 0;
}
@keyframes glowPulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}
.pc-heating-glow { animation: glowPulse 3s ease-in-out infinite; }

/* Heating row glow \u2014 warm border shadow */
.pc-zone-row-pulse.pc-heating {
  animation: rowGlow 3s ease-in-out infinite;
}
@keyframes rowGlow {
  0%, 100% { box-shadow: 0 0 10px 1px rgba(255, 152, 0, 0.25), inset 0 0 10px 1px rgba(255, 152, 0, 0.06); }
  50% { box-shadow: 0 0 16px 2px rgba(255, 152, 0, 0.4), inset 0 0 14px 2px rgba(255, 152, 0, 0.1); }
}

/* Thermal Timeline layout */
.pc-section-thermal-strip .pc-timeline-row {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  cursor: pointer;
  border-radius: 6px;
  padding: 2px 0;
  position: relative;
  overflow: hidden;
  transition: background 0.15s;
}
.pc-section-thermal-strip .pc-timeline-row:hover {
  background: color-mix(in srgb, var(--primary-color, #03A9F4) 6%, transparent);
}
.pc-section-thermal-strip .pc-timeline-row.pc-selected { background: color-mix(in srgb, var(--primary-color, #03A9F4) 12%, transparent); }
.pc-section-thermal-strip .pc-timeline-row.pc-selected .pc-strip-container,
.pc-section-comfort-strip .pc-heatmap-row.pc-selected .pc-strip-container { height: 18px; }
.pc-section-thermal-strip .pc-timeline-row.pc-selected .pc-zone-label { color: var(--primary-text-color, #e5e5e7); font-weight: 500; }
.pc-section-thermal-strip .pc-zone-label {
  width: 76px;
  font-size: 11px;
  color: var(--secondary-text-color, #a1a1a6);
  text-align: right;
  padding-right: 10px;
  flex-shrink: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* Strip container \u2014 shared by thermal strip and comfort strip (timeline mode) */
.pc-section-thermal-strip .pc-strip-container,
.pc-section-comfort-strip .pc-strip-container {
  flex: 1;
  height: 14px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  touch-action: pan-y;
}
.pc-section-thermal-strip .pc-now-marker,
.pc-section-comfort-strip .pc-now-marker {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1.5px;
  background: var(--primary-text-color, #333);
  opacity: 0.4;
  z-index: 2;
}
.pc-section-thermal-strip .pc-time-axis {
  display: flex;
  justify-content: space-between;
  padding: 4px 0 8px;
}
.pc-section-thermal-strip .pc-time-label {
  font-size: 9px;
  color: var(--secondary-text-color, #636366);
  opacity: 0.7;
}

/* Strip tooltip \u2014 shared by timeline and heatmap */
.pc-strip-tooltip {
  position: absolute;
  top: -26px;
  font-size: 10px;
  color: var(--pulse-text-primary, #e5e5e7);
  background: var(--pulse-glass-bg);
  backdrop-filter: blur(var(--pulse-glass-blur));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur));
  border: 1px solid var(--pulse-glass-border);
  padding: 2px 8px;
  border-radius: 4px;
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

/* Strip crosshair \u2014 vertical line across all zone rows */
.pc-strip-crosshair {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--primary-text-color, #333);
  opacity: 0.25;
  pointer-events: none;
  z-index: 5;
}

/* Drag selection highlight */
.pc-strip-drag-highlight {
  position: absolute;
  top: 0;
  bottom: 0;
  background: var(--primary-color, #03A9F4);
  opacity: 0.12;
  border-radius: 2px;
  pointer-events: none;
  z-index: 4;
}

/* Comfort Heatmap \u2014 HTML div cells for hover/click */
.pc-section-comfort-strip .pc-heatmap-body { padding: 4px 0; }
.pc-section-comfort-strip .pc-heatmap-row {
  display: flex;
  align-items: center;
  margin-bottom: 3px;
  cursor: pointer;
  border-radius: 6px;
  padding: 2px 0;
  position: relative;
  overflow: hidden;
  transition: background 0.15s;
}
.pc-section-comfort-strip .pc-heatmap-row:hover { background: color-mix(in srgb, var(--primary-color, #03A9F4) 6%, transparent); }
.pc-section-comfort-strip .pc-heatmap-row.pc-selected { background: color-mix(in srgb, var(--primary-color, #03A9F4) 12%, transparent); }
.pc-section-comfort-strip .pc-zone-label {
  width: 66px;
  font-size: 10px;
  color: var(--secondary-text-color, #a1a1a6);
  text-align: right;
  padding-right: 8px;
  flex-shrink: 0;
  transition: color 0.2s;
}
.pc-section-comfort-strip .pc-heatmap-row.pc-selected .pc-zone-label {
  color: var(--primary-text-color);
  font-weight: 500;
}

/* Heatmap cells \u2014 shared by comfort strip and thermal strip (heatmap mode) */
.pc-section-comfort-strip .pc-cells,
.pc-section-thermal-strip .pc-cells {
  display: flex;
  gap: 1px;
  flex: 1;
  touch-action: pan-y;
}
.pc-section-comfort-strip .pc-cell,
.pc-section-thermal-strip .pc-cell {
  flex: 1;
  height: 16px;
  border-radius: 2px;
  transition: transform 0.15s, height 0.2s;
}
.pc-section-comfort-strip .pc-heatmap-row.pc-selected .pc-cell,
.pc-section-thermal-strip .pc-timeline-row.pc-selected .pc-cell { height: 20px; }
.pc-section-comfort-strip .pc-cell:hover,
.pc-section-thermal-strip .pc-cell:hover { transform: scaleY(1.2); z-index: 1; }
.pc-section-comfort-strip .pc-cell-empty,
.pc-section-thermal-strip .pc-cell-empty {
  background: repeating-linear-gradient(
    45deg,
    var(--divider-color, rgba(255,255,255,0.06)) 0px,
    var(--divider-color, rgba(255,255,255,0.06)) 2px,
    transparent 2px,
    transparent 4px
  );
}
.pc-heatmap-legend {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 0;
  justify-content: center;
}
.pc-heatmap-legend .pc-legend-item {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 9px;
  color: var(--secondary-text-color, #8e8e93);
}
.pc-heatmap-legend .pc-legend-swatch {
  width: 8px;
  height: 8px;
  border-radius: 2px;
}
.pc-heatmap-time-axis {
  display: flex;
  justify-content: space-between;
  margin-left: 66px;
  padding: 4px 0 14px;
  font-size: 9px;
  color: var(--secondary-text-color, #636366);
}

/* Energy Flow */
.pc-ribbon-active { /* animation handled by SVG <animate> on gradient */ }
.pc-ribbon { cursor: pointer; transition: opacity 0.2s; }
.pc-ribbon:hover { opacity: 1 !important; }
.pc-ribbon.pc-dimmed { opacity: 0.2; }

/* Radial */
.pc-section-radial { text-align: center; }
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
  transition: opacity 0.25s;
  background: var(--pulse-glass-bg);
  backdrop-filter: blur(var(--pulse-glass-blur));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur));
  border: 1px solid var(--pulse-glass-border);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.pc-center-sheen {
  position: absolute;
  inset: 0;
  border-radius: 50%;
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
  font-size: 28px;
  font-weight: 300;
  color: var(--primary-text-color);
  transition: font-size 0.25s;
}
.pc-center-label {
  font-size: 10px;
  color: var(--secondary-text-color, #8e8e93);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 2px;
}
.pc-center-sub {
  font-size: 10px;
  color: var(--secondary-text-color, #636366);
  margin-top: 2px;
}
.pc-arc-group {
  cursor: pointer;
  transition: opacity 0.2s;
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
  gap: 5px;
  font-size: 11px;
  color: var(--secondary-text-color, #a1a1a6);
  cursor: pointer;
  padding: 2px 4px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  transition: background 0.15s, color 0.15s;
}
.pc-radial-legend .pc-legend-item:hover { background: color-mix(in srgb, var(--primary-color, #03A9F4) 8%, transparent); }
.pc-radial-legend .pc-legend-item.pc-selected { background: color-mix(in srgb, var(--primary-color, #03A9F4) 16%, transparent); color: var(--primary-text-color); }
.pc-radial-legend .pc-legend-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}
.pc-legend-temp {
  font-variant-numeric: tabular-nums;
  color: var(--primary-text-color);
  font-weight: 500;
}

/* Zone detail panel (shared by radial, thermal strip, comfort strip, energy flow) */
.pc-zone-detail {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: max-height 0.35s ease, opacity 0.25s ease, padding 0.35s ease;
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
  border-radius: 8px;
}
.pc-detail-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
}
.pc-detail-name { font-size: 15px; font-weight: 500; }
.pc-detail-close {
  font-size: 11px;
  color: var(--secondary-text-color, #636366);
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: background 0.15s;
}
.pc-detail-close:hover { background: color-mix(in srgb, var(--primary-color, #03A9F4) 10%, transparent); }
.pc-detail-stats { display: flex; gap: 16px; }
.pc-stat { flex: 1; }
.pc-stat-value {
  font-size: 22px;
  font-weight: 300;
  font-variant-numeric: tabular-nums;
}
.pc-stat-label {
  font-size: 10px;
  color: var(--secondary-text-color, #8e8e93);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  margin-top: 2px;
}
.pc-stat-sub {
  font-size: 10px;
  color: var(--secondary-text-color, #636366);
  margin-top: 1px;
}
.pc-detail-bar {
  margin-top: 10px;
  height: 6px;
  border-radius: 3px;
  background: var(--pulse-bg-secondary);
  overflow: hidden;
}
.pc-detail-bar-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.4s ease;
}
.pc-detail-sparkline {
  border-radius: 6px;
  overflow: hidden;
}

/* API Dashboard */
.pc-api-dashboard {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.pc-api-row {
  display: flex;
  align-items: center;
  gap: 8px;
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
  font-size: 14px;
  font-weight: 600;
  color: var(--secondary-text-color);
  text-align: center;
  line-height: 1.2;
}

/* HomeKit pulse dot */
.pc-pulse-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 4px;
  vertical-align: middle;
}
.pc-pulse-dot.pc-connected {
  background: var(--pulse-status-green);
  animation: pulse-glow 2s ease-in-out infinite;
}
.pc-pulse-dot.pc-disconnected {
  background: var(--pulse-status-red);
}
@keyframes pulse-glow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Bridge flow temp */
.pc-flow-temp-value {
  font-size: 18px;
  font-weight: 600;
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
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 4px;
}
.pc-home-status-detail {
  font-size: 12px;
  color: var(--secondary-text-color, #9E9E9E);
}
.pc-home-status-zones {
  display: flex;
  flex-direction: column;
}
.pc-home-status-row {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid color-mix(in srgb, var(--primary-text-color) 4%, transparent);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.pc-home-status-row:last-child { border-bottom: none; }
.pc-home-status-row:hover {
  background: color-mix(in srgb, var(--primary-color, #03A9F4) 6%, transparent);
}
.pc-home-status-row:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
  border-radius: 4px;
}
.pc-home-status-zone-name {
  width: 70px;
  flex-shrink: 0;
  font-size: 12px;
  color: var(--secondary-text-color, #9E9E9E);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.pc-home-status-temps {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 6px;
}
.pc-home-status-actual {
  font-size: 16px;
  font-variant-numeric: tabular-nums;
  color: var(--primary-text-color);
  min-width: 52px;
}
.pc-home-status-actual.pc-off {
  color: var(--secondary-text-color, #9E9E9E);
}
.pc-home-status-arrow {
  font-size: 11px;
  color: var(--secondary-text-color, #9E9E9E);
}
.pc-home-status-target {
  font-size: 13px;
  color: var(--secondary-text-color, #9E9E9E);
  font-variant-numeric: tabular-nums;
  min-width: 40px;
}
.pc-home-status-delta {
  display: flex;
  align-items: center;
  gap: 4px;
}
.pc-home-status-bar-track {
  position: relative;
  width: 60px;
  height: 6px;
  border-radius: 3px;
  background: color-mix(in srgb, var(--primary-text-color) 10%, transparent);
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
  border-radius: 3px;
}
.pc-home-status-delta-text {
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  width: 40px;
  text-align: right;
}
.pc-home-status-summary {
  display: flex;
  justify-content: space-around;
  border-top: 1px solid color-mix(in srgb, var(--primary-text-color) 10%, transparent);
  padding-top: 14px;
  margin-top: 16px;
}
.pc-home-status-summary .pc-stat { text-align: center; }
.pc-home-status-summary .pc-stat-value {
  font-size: 18px;
  font-weight: 300;
}
.pc-home-status-summary .pc-stat-label {
  font-size: 9px;
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
  gap: 4px;
}
.pc-ranking-tab {
  font-size: 10px;
  color: var(--secondary-text-color, #9E9E9E);
  padding: 4px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid transparent;
}
.pc-ranking-tab:hover {
  background: color-mix(in srgb, var(--primary-text-color) 4%, transparent);
}
.pc-ranking-tab.pc-active {
  background: color-mix(in srgb, var(--primary-text-color) 8%, transparent);
  color: var(--primary-text-color);
  border-color: color-mix(in srgb, var(--primary-text-color) 10%, transparent);
}
.pc-ranking-list { }
.pc-rank-row {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 8px;
  margin-bottom: 4px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.pc-rank-row:hover {
  background: color-mix(in srgb, var(--primary-text-color) 4%, transparent);
}
.pc-rank-row:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
}
.pc-rank-num {
  width: 24px;
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--secondary-text-color, #9E9E9E);
  flex-shrink: 0;
}
.pc-rank-num.pc-top { color: var(--label-badge-yellow, #FFD60A); }
.pc-rank-name {
  flex: 1;
  font-size: 13px;
  font-weight: 500;
  margin-left: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.pc-rank-bar-track {
  flex: 2;
  height: 8px;
  background: color-mix(in srgb, var(--primary-text-color) 10%, transparent);
  border-radius: 4px;
  margin: 0 12px;
  overflow: hidden;
}
.pc-rank-bar-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 0.6s ease, background 0.4s ease;
}
.pc-rank-value {
  font-size: 13px;
  font-weight: 500;
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
  border-top: 1px solid color-mix(in srgb, var(--primary-text-color) 10%, transparent);
}
.pc-ranking-summary .pc-stat { text-align: center; }
.pc-ranking-summary .pc-stat-value {
  font-size: 18px;
  font-weight: 300;
}
.pc-ranking-summary .pc-stat-label {
  font-size: 9px;
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
  transition: filter 0.3s ease-in, filter 0.8s ease-out 0.3s;
}

/* Reduced motion \u2014 respect prefers-reduced-motion for users sensitive to animation */
@media (prefers-reduced-motion: reduce) {
  .pc-power-bar-fill.pc-bar-active { animation: none; }
  .pc-heating-glow { animation: none; }
  .pc-zone-row-pulse.pc-heating { animation: none; }
  .pc-pulse-dot.pc-connected { animation: none; }
  .pc-temp-transitioning { filter: none; transition: none; }
}
`;function rt(e,...t){console.warn(`${nn} ${e}`,...t)}var rn=new Set;function ce(e,t,i,n){if(!i||n[i])return;let o=`${e}|${t}|${i}`;rn.has(o)||(rn.add(o),rt(`zone "%s": ${t} override points at missing entity "%s" \u2014 chip will not render`,e,i))}function wt(e){return mt[e]||mt.idle}function Tt(e,t,i){let n=J(e,{},t,i||{entity:e},{});return{name:n.name,temp:n.currentTemp??void 0,target:n.targetTemp??void 0,humidity:n.humidity??void 0,hvacAction:n.hvacAction,unit:n.unit}}function Vt(e){let t=e.charAt(0).toUpperCase()+e.slice(1).toLowerCase();return re[t]||re.Low}function Ft(e,t,i){return i<=t?50:tt((e-t)/(i-t),0,1)*100}function ro(e,t,i,n){let o=[],r=!n,a=c=>r||n.includes(c);if(n&&a("humidity")&&e.humidity!==null&&o.push({type:"humidity",icon:"mdi:water-percent",label:`${Math.round(e.humidity)}%`}),a("hvac_action")){let c=wt(e.hvacAction);o.push({type:"hvac_action",icon:c.icon,label:c.label,color:c.fallback})}if(a("overlay")&&e.overlayType){let c=e.overlayType==="Manual"?"mdi:hand-back-right":"mdi:calendar-clock";o.push({type:"overlay",icon:c,label:e.overlayType,entityId:t.overlay})}if(a("preset")&&e.presetMode){let c=e.presetMode==="away"?"mdi:home-export-outline":"mdi:home";o.push({type:"preset",icon:c,label:e.presetMode==="away"?"Away":"Home"})}let s=(c,l,p)=>{if(!a(c)||!t[p])return;let u=i[t[p]];if(u&&!["unavailable","unknown","none"].includes(u.state.toLowerCase())){let f=Vt(u.state);o.push({type:c,icon:l,label:u.state,color:`var(${f.cssVar}, ${f.fallback})`,severity:u.state,entityId:t[p]})}};if(a("open_window")&&t.open_window){let c=i[t.open_window];if(c){let l=c.state==="on";o.push({type:"open_window",icon:l?"mdi:window-open":"mdi:window-closed",label:l?"Open":"Closed",color:l?"var(--label-badge-red, #F44336)":void 0,entityId:t.open_window})}}if(a("window_predicted")&&t.window_predicted){let c=i[t.window_predicted];c&&c.state==="on"&&o.push({type:"window_predicted",icon:"mdi:window-open-variant",label:"Window predicted",color:"var(--label-badge-yellow, #FF9800)",entityId:t.window_predicted})}if(s("mold_risk","mdi:mushroom","mold_risk"),s("condensation","mdi:water-alert","condensation"),a("comfort_level")&&t.comfort_level){let c=i[t.comfort_level];c&&c.state!=="unavailable"&&o.push({type:"comfort_level",icon:"mdi:emoticon-outline",label:c.state,entityId:t.comfort_level})}if(a("preheat_now")&&t.preheat_now){let c=i[t.preheat_now];c&&c.state==="on"&&o.push({type:"preheat_now",icon:"mdi:radiator",label:"Preheating",color:"var(--label-badge-yellow, #FF9800)",entityId:t.preheat_now})}if(a("battery")||a("battery_all")){let c=n&&n.includes("battery_all"),l=[],p=["battery"],u=2;for(;t[`battery_${u}`];)p.push(`battery_${u}`),u++;for(let f of p){let d=t[f];if(!d)continue;let m=i[d];!m||m.state==="unavailable"||l.push({eid:d,state:m.state,lower:m.state.toLowerCase()})}if(l.length>0)if(c)for(let f=0;f<l.length;f++){let d=l[f],m=d.lower==="low"||d.lower==="critical"?"mdi:battery-alert":"mdi:battery",g=d.lower==="critical"?"var(--label-badge-red, #F44336)":d.lower==="low"?"var(--label-badge-yellow, #FF9800)":void 0;o.push({type:`battery${f>0?`_${f+1}`:""}`,icon:m,label:d.state,color:g,entityId:d.eid})}else{let f={critical:3,low:2,normal:1},d=l[0];for(let y of l)(f[y.lower]||0)>(f[d.lower]||0)&&(d=y);let m=d.lower==="low"||d.lower==="critical"?"mdi:battery-alert":"mdi:battery",g=d.lower==="critical"?"var(--label-badge-red, #F44336)":d.lower==="low"?"var(--label-badge-yellow, #FF9800)":void 0;o.push({type:"battery",icon:m,label:d.state,color:g,entityId:d.eid})}}if(a("valve_control")){let l=i[e.entityId]?.attributes||{},p=l.valve_control_active,u=l.valve_target,f=l.valve_control_backed_off,d=l.valve_control_enabled;f===!0?o.push({type:"valve_control",icon:"mdi:valve",label:"Valve: Backed off",color:"var(--disabled-color, #9E9E9E)"}):p===!0&&u!==void 0?o.push({type:"valve_control",icon:"mdi:valve",label:`Valve: ${G(u)}${e.unit}`,color:"var(--label-badge-yellow, #FF9800)"}):d===!0&&o.push({type:"valve_control",icon:"mdi:valve",label:"Valve: Idle",color:"var(--disabled-color, #9E9E9E)"})}if(n&&a("temp_source")){let l=i[e.entityId]?.attributes?.temperature_source;if(l&&l!=="cloud"){let p=l==="external"?"mdi:thermometer-probe":l==="homekit"?"mdi:apple":"mdi:cloud-outline";o.push({type:"temp_source",icon:p,label:l.charAt(0).toUpperCase()+l.slice(1)})}}return o}function J(e,t,i,n,o){let r=i[e],a=!r||r.state==="unavailable"||r.state==="unknown",s=r?.attributes||{},c=e.startsWith("sensor."),l=c?a?null:parseFloat(r?.state)||null:s.current_temperature??null,p=a||r?.state==="off"?null:s.temperature??null,u=c?null:s.current_humidity??null,f=c?"idle":s.hvac_action||(r?.state==="off"?"off":"idle"),d=c?"sensor":r?.state||"off",m=s.preset_mode||"",g=Number(s.min_temp??5),y=Number(s.max_temp??35),v=Number(s.target_temp_step??.5),b=s.unit_of_measurement||"\xB0C",_=0;if(t.heating_power){let x=i[t.heating_power];x&&x.state!=="unavailable"&&(_=parseFloat(x.state)||0)}else s.heating_power!==void 0&&(_=parseFloat(s.heating_power)||0);let w=0;if(t.ac_power){let x=i[t.ac_power];x&&x.state!=="unavailable"&&(w=parseFloat(x.state)||0)}let S="";if(t.overlay){let x=i[t.overlay];x&&x.state!=="unavailable"&&(S=x.state)}else s.overlay_type&&(S=s.overlay_type);let A=n.name||s.friendly_name||e.replace(/^(climate|sensor)\./,""),T=n.icon||s.icon||"mdi:thermometer",C=n.chips||o.chips||null,F={...t},I=n.name||e;n.open_window_entity&&(F.open_window=n.open_window_entity,ce(I,"open_window_entity",n.open_window_entity,i)),n.battery_entity&&(F.battery=n.battery_entity,ce(I,"battery_entity",n.battery_entity,i)),n.mold_risk_entity&&(F.mold_risk=n.mold_risk_entity,ce(I,"mold_risk_entity",n.mold_risk_entity,i));let $={entityId:e,name:A,icon:T,isUnavailable:a,currentTemp:l,targetTemp:p,humidity:u,heatingPower:_,coolingPower:w,hvacAction:f,hvacMode:d,presetMode:m,overlayType:S,minTemp:g,maxTemp:y,tempStep:v,unit:b,chips:[]};return $.chips=ro($,F,i,C),$}var an=280;function le(e,t=an){return e<=50?0:(2+(e-50)/50*3)*(t/an)}function cn(e,t=20,i=1){if(i<=0)return 0;let n=Math.min(4,Math.max(2,Math.round(e/30))),o=Math.floor(t/i);return Math.min(n,o)}function ln(e){return 4-e/100*2.5}function pn(e,t){return 1.5+e/t*1.5}function $t(e,t){return 3*(e/t)}function dn(e){if(!e)throw new Error("Please define an entity or zones");if(!e.entity&&!e.zones)throw new Error("Please define an entity or zones");if(e.entity&&typeof e.entity=="string"&&!e.entity.startsWith("climate.")&&!e.entity.startsWith("water_heater."))throw new Error("Entity must be a climate.* or water_heater.* entity");let t;e.zones?t=e.zones.map(n=>typeof n=="string"?{entity:n}:{...n}):t=[{entity:e.entity}];for(let n of t)if(!n.entity||typeof n.entity!="string")throw new Error("Each zone must have an entity ID");let i={...e,columns:Number(e.columns)||lt.columns,layout:e.layout||lt.layout,show_temp_bar:e.show_temp_bar??lt.show_temp_bar,show_power_bar:e.show_power_bar??lt.show_power_bar,tap_action:e.tap_action||{...lt.tap_action},hold_action:e.hold_action||{...lt.hold_action},double_tap_action:e.double_tap_action||{...lt.double_tap_action},sections:e.sections||[...on],_zones:t};return Array.isArray(i.sections)&&(i.sections=i.sections.map(n=>{let o=typeof n=="string"?{type:n}:{...n},r=sn[o.type];if(r){for(let[a,s]of Object.entries(r))if(o[a]===void 0||o[a]===null)o[a]=s;else if(typeof s=="number"){let c=Number(o[a]);Number.isFinite(c)?o[a]=c||s:(rt('section "%s": %s=%o is not numeric \u2014 using default %o',o.type,a,o[a],s),o[a]=s)}}return o})),i}var fn={api_usage:"api_usage",api_limit:"api_limit",api_status:"api_status",api_reset:"api_reset",token_status:"token_status",polling_interval:"polling_interval",call_history:"call_history",api_breakdown:"api_breakdown",last_sync:"last_sync",next_sync:"next_sync",outside_temp:"outside_temp",solar_intensity:"solar_intensity",weather:"weather",home_state:"home",bridge_connected:"bridge_connected",boiler_flow_temp:"boiler_flow_temp",wc_target_flow:"wc_target_flow_temp",wc_status:"wc_status",boiler_max_output:"boiler_max_output_temp",homekit_connected:"homekit_connected",homekit_reads_saved:"homekit_reads_saved",homekit_writes_saved:"homekit_writes_saved",bridge_capabilities:"bridge_capabilities",bridge_schema_version:"bridge_schema_version",zone_count:"zone_count",home_id:"home_id",home_insights:"home_insights"},ao={temperature:"temperature",humidity:"humidity",heating_power:"heating_power",ac_power:"ac_power",target_temp:"target",overlay:"overlay",mold_risk:"mold_risk",mold_risk_pct:"mold_risk_pct",condensation:"condensation_risk",surface_temp:"surface_temp",dew_point:"dew_point",comfort_level:"comfort_level",thermal_inertia:"thermal_inertia",heating_rate:"heating_rate",preheat_time:"preheat_time",confidence:"confidence",heat_accel:"heat_accel",approach_factor:"approach_factor",schedule_deviation:"schedule_deviation",next_schedule:"next_schedule",next_sched_temp:"next_sched_temp",preheat_advisor:"preheat_advisor",comfort_target:"comfort_target",open_window:"window",preheat_now:"preheat_now",window_predicted:"window_predicted",battery:"battery",connection:"connection",insights:"insights"},co={battery:"battery",connection:"connection"},lo={temperature:{platform:"sensor",suffixes:["_temp","_temperature"]},humidity:{platform:"sensor",suffixes:["_humidity"]},heating_power:{platform:"sensor",suffixes:["_heating","_heating_power"]},ac_power:{platform:"sensor",suffixes:["_ac","_ac_power"]},target_temp:{platform:"sensor",suffixes:["_ce_target","_target"]},overlay:{platform:"sensor",suffixes:["_ce_overlay","_mode"]},mold_risk:{platform:"sensor",suffixes:["_ce_mold_risk","_mold_risk"]},mold_risk_pct:{platform:"sensor",suffixes:["_ce_mold_risk_pct","_mold_risk_percentage"]},condensation:{platform:"sensor",suffixes:["_ce_condensation","_condensation_risk"]},surface_temp:{platform:"sensor",suffixes:["_ce_surface_temp","_surface_temperature"]},dew_point:{platform:"sensor",suffixes:["_ce_dew_point","_dew_point"]},comfort_level:{platform:"sensor",suffixes:["_ce_comfort_level","_comfort_level"]},thermal_inertia:{platform:"sensor",suffixes:["_ce_thermal_inertia","_thermal_inertia"]},heating_rate:{platform:"sensor",suffixes:["_ce_heating_rate","_avg_heating_rate"]},preheat_time:{platform:"sensor",suffixes:["_ce_preheat_time","_preheat_time"]},confidence:{platform:"sensor",suffixes:["_ce_confidence","_analysis_confidence"]},schedule_deviation:{platform:"sensor",suffixes:["_ce_schedule_deviation","_historical_deviation"]},next_schedule:{platform:"sensor",suffixes:["_ce_next_schedule","_next_schedule_time"]},next_sched_temp:{platform:"sensor",suffixes:["_ce_next_sched_temp","_next_schedule_temp"]},preheat_advisor:{platform:"sensor",suffixes:["_ce_preheat_advisor","_preheat_advisor"]},comfort_target:{platform:"sensor",suffixes:["_ce_comfort_target","_smart_comfort_target"]},heat_accel:{platform:"sensor",suffixes:["_ce_heat_accel","_heat_acceleration"]},approach_factor:{platform:"sensor",suffixes:["_ce_approach_factor","_approach_factor"]},open_window:{platform:"binary_sensor",suffixes:["_window","_open_window"]},preheat_now:{platform:"binary_sensor",suffixes:["_ce_preheat_now","_preheat_now"]},window_predicted:{platform:"binary_sensor",suffixes:["_ce_window_predicted","_window_predicted"]},battery:{platform:"sensor",suffixes:["_ce_battery","_battery"]},connection:{platform:"binary_sensor",suffixes:["_ce_connection","_connection"]},insights:{platform:"sensor",suffixes:["_ce_insights","_insights"]}},po={api_usage:{platform:"sensor",suffixes:["_api_usage"]},api_limit:{platform:"sensor",suffixes:["_api_limit"]},api_status:{platform:"sensor",suffixes:["_api_status"]},api_reset:{platform:"sensor",suffixes:["_api_reset"]},token_status:{platform:"sensor",suffixes:["_token_status"]},polling_interval:{platform:"sensor",suffixes:["_polling_interval"]},call_history:{platform:"sensor",suffixes:["_call_history"]},api_breakdown:{platform:"sensor",suffixes:["_api_breakdown","_api_call_breakdown"]},last_sync:{platform:"sensor",suffixes:["_last_sync"]},next_sync:{platform:"sensor",suffixes:["_next_sync"]},outside_temp:{platform:"sensor",suffixes:["_outside_temp"]},solar_intensity:{platform:"sensor",suffixes:["_solar_intensity"]},weather:{platform:"sensor",suffixes:["_weather","_weather_state"]},home_state:{platform:"binary_sensor",suffixes:["_home"]},bridge_connected:{platform:"binary_sensor",suffixes:["_bridge_connected","_bridge"]},boiler_flow_temp:{platform:"sensor",suffixes:["_boiler_flow_temp"]},wc_target_flow:{platform:"sensor",suffixes:["_wc_target_flow_temp"]},wc_status:{platform:"sensor",suffixes:["_wc_status"]},boiler_max_output:{platform:"number",suffixes:["_boiler_max_output_temp"]},homekit_connected:{platform:"binary_sensor",suffixes:["_homekit_connected"]},homekit_reads_saved:{platform:"sensor",suffixes:["_homekit_reads_saved"]},homekit_writes_saved:{platform:"sensor",suffixes:["_homekit_writes_saved"]},bridge_capabilities:{platform:"sensor",suffixes:["_bridge_capabilities"]},bridge_schema_version:{platform:"sensor",suffixes:["_bridge_schema_version"]},zone_count:{platform:"sensor",suffixes:["_zone_count","_zones_count"]},home_id:{platform:"sensor",suffixes:["_home_id"]},home_insights:{platform:"sensor",suffixes:["_home_insights"]}};function uo(e){let t=new Map;for(let[i,n]of Object.entries(e))n.platform==="tado_ce"&&n.translation_key&&(t.has(n.translation_key)||t.set(n.translation_key,i));return{byTranslationKey:t}}function ho(e,t){let i={};for(let[n,o]of Object.entries(fn)){let r=t.byTranslationKey.get(o);r&&(i[n]=r)}return i}function fo(e,t,i){let n={},o={...ao,...co};for(let r of t){n[r]={};let a=`climate.${r}`,s=e[a];if(!s?.device_id||s.platform!=="tado_ce")continue;let c=s.device_id;for(let[l,p]of Object.entries(e)){if(p.platform!=="tado_ce"||p.device_id!==c||!p.translation_key||!i[l])continue;let u=p.translation_key;if(u.endsWith("_suffixed")){let f=u.replace("_suffixed",""),d=Object.keys(o).find(m=>o[m]===f);if(!d)continue;if(!n[r][d])n[r][d]=l;else{let m=2;for(;n[r][`${d}_${m}`];)m++;n[r][`${d}_${m}`]=l}}else{let f=Object.keys(o).find(d=>o[d]===u);if(!f)continue;n[r][f]||(n[r][f]=l)}}}return n}function un(e){let t={},i=Object.keys(e);for(let[n,{platform:o,suffixes:r}]of Object.entries(po))for(let a of r){let s=i.find(c=>c.startsWith(`${o}.tado_ce`)&&c.endsWith(a));if(s){t[n]=s;break}}return t}function hn(e,t){let i={};for(let n of t){i[n]={};for(let[o,{platform:r,suffixes:a}]of Object.entries(lo))for(let s of a){let c=`${r}.${n}${s}`;if(e[c]){i[n][o]=c;break}}}return i}var gt={states:null,zoneNames:null,result:null};function mn(e,t,i){if(gt.result&&gt.states===e&&gt.zoneNames!==null&&gt.zoneNames.length===t.length&&gt.zoneNames.every((l,p)=>l===t[p]))return gt.result;let n=!1,o=!1;i&&(n=Object.values(i).some(l=>l.platform==="tado_ce"),o=n),n||(n=Object.keys(e).some(l=>l.startsWith("sensor.tado_ce_")));let r={};if(n)if(o){let l=uo(i);r=ho(i,l);let p=un(e);for(let[u,f]of Object.entries(p))r[u]||(r[u]=f)}else r=un(e);let a;if(o){a=fo(i,t,e);let l=hn(e,t);for(let p of t){a[p]||(a[p]={});let u=l[p]||{};for(let[f,d]of Object.entries(u))a[p][f]||(a[p][f]=d)}}else a=hn(e,t);let s=Object.keys(fn).filter(l=>!r[l]),c={isTadoCE:n,hubEntities:r,zoneEntities:a,missingHubKeys:s};if(n)for(let[l,p]of Object.entries(a))Object.keys(p).length===0&&console.debug('Pulse Climate: zone "%s" \u2014 no Tado CE entities discovered',l);return gt={states:e,zoneNames:[...t],result:c},c}function D(e){return e.replace(/^(climate|sensor|binary_sensor)\./,"")}function St(e){return typeof e=="string"&&e.length>0}function at(e,t,i,n){if(St(n?.temperature_entity))return{entityId:n.temperature_entity,source:"yaml_override"};let r=t[e]?.attributes?.external_temp_sensor;return St(r)&&t[r]?{entityId:r,source:"external"}:St(i?.temperature)?{entityId:i.temperature,source:"discovery"}:{entityId:e,source:"climate_fallback"}}function pt(e,t,i,n){if(St(n?.humidity_entity))return{entityId:n.humidity_entity,source:"yaml_override"};let r=t[e]?.attributes?.external_humidity_sensor;return St(r)&&t[r]?{entityId:r,source:"external"}:St(i?.humidity)?{entityId:i.humidity,source:"discovery"}:null}var Bt={timestamp:0,data:{}};function gn(){return Bt}function vn(e){let t={...Bt.data};for(let[i,n]of Object.entries(e))n.length>0&&(t[i]=n);return Bt={timestamp:Date.now(),data:t},Bt}function bn(){return{timestamp:0,data:{}}}function pe(e){return e.timestamp>0&&Date.now()-e.timestamp<3e5}function _n(e,t){let i={...e.data};for(let[n,o]of Object.entries(t))o.length>0&&(i[n]=o);return{timestamp:Date.now(),data:i}}function de(e,t){if(e.length===0||t<1)return[];let i=e[0].t,r=(e[e.length-1].t-i||1)/t,a=[],s=0,c=e[0].v;for(let l=0;l<t;l++){let p=i+(l+1)*r,u=0,f=0;for(;s<e.length&&e[s].t<p;)u+=e[s].v,f++,s++;f>0&&(c=u/f),a.push({x:l/(t-1||1),v:c})}return a}function yn(e,t,i,n,o){let a=i-4,s=o-n||1,c=e.map(u=>({x:u.x*t,y:2+a-(u.v-n)/s*a}));if(c.length<2)return"";if(c.length===2)return`M${c[0].x.toFixed(1)},${c[0].y.toFixed(1)}L${c[1].x.toFixed(1)},${c[1].y.toFixed(1)}`;let l=c[0],p=`M${l.x.toFixed(1)},${l.y.toFixed(1)}`;for(let u=1;u<c.length;u++){let f=c[u],d=(l.x+f.x)/2,m=(l.y+f.y)/2;p+=` ${d.toFixed(1)},${m.toFixed(1)}`,p+=` Q${f.x.toFixed(1)},${f.y.toFixed(1)}`,l=f}return p+=` ${l.x.toFixed(1)},${l.y.toFixed(1)}`,p}function xn(e,t,i,n=48){if(!e||e.length===0)return[];let o=1/0,r=-1/0;for(let a of e)for(let s of a.data)isFinite(s.v)&&(s.v<o&&(o=s.v),s.v>r&&(r=s.v));return isFinite(o)||(o=0),isFinite(r)||(r=100),e.map(a=>{let s=a.data.filter(p=>isFinite(p.v));if(s.length<2)return{entityId:a.entityId,color:a.color,d:""};let c=de(s,n),l=yn(c,t,i,o,r);return{entityId:a.entityId,color:a.color,d:l}})}function Ut(e,t,i,n){if(!e||e.length===0)return[];let o=i??t/2-2,r=n??o*.6,a=t/2,s=t/2,c=e.map(f=>Math.max(0,f.value)),l=c.reduce((f,d)=>f+d,0);if(l===0)return[];let p=[],u=-90;for(let f=0;f<e.length;f++){if(c[f]===0)continue;let d=c[f]/l*360;d>=360&&(d=359.9);let m=u+d,g=Wt(a,s,r,o,u,m);p.push({label:e[f].label,color:e[f].color,d:g,angle:d}),u=m}return p}function kt(e){if(!e||e.length===0)return"";let t='<div class="pc-chart-legend">';for(let i of e){let n=k(i.color),o=h(i.label),r=i.value!==void 0&&i.value!==null?` ${h(i.value)}`:"";t+=`<span class="pc-legend-chip"><span class="pc-legend-dot" style="background:${n}"></span>${o}${r}</span>`}return t+="</div>",t}function j(e){return e<=14?"#1565C0":e<=16?"#4FC3F7":e<=17?"#4DB6AC":e<=18?"#81C784":e<=19?"#AED581":e<=20?"#C5E1A5":e<=21?"#FFF176":e<=22?"#FFB74D":e<=23?"#FF8A65":e<=24?"#EF5350":"#C62828"}function Et(e){return e<=20?"#C62828":e<=30?"#EF5350":e<=35?"#FF8A65":e<=40?"#FFB74D":e<=45?"#AED581":e<=55?"#4CAF50":e<=60?"#AED581":e<=65?"#4DB6AC":e<=70?"#4FC3F7":e<=80?"#1E88E5":"#1565C0"}function Wt(e,t,i,n,o,r){let a=o*Math.PI/180,s=r*Math.PI/180,c=r-o,l=Math.abs(c)>180?1:0,p=e+n*Math.cos(a),u=t+n*Math.sin(a),f=e+n*Math.cos(s),d=t+n*Math.sin(s),m=e+i*Math.cos(s),g=t+i*Math.sin(s),y=e+i*Math.cos(a),v=t+i*Math.sin(a);return[`M${p.toFixed(2)},${u.toFixed(2)}`,`A${n.toFixed(2)},${n.toFixed(2)} 0 ${l} 1 ${f.toFixed(2)},${d.toFixed(2)}`,`L${m.toFixed(2)},${g.toFixed(2)}`,`A${i.toFixed(2)},${i.toFixed(2)} 0 ${l} 0 ${y.toFixed(2)},${v.toFixed(2)}`,"Z"].join(" ")}function ct(e,t,i,n=48){if(!e||e.length<2)return null;let o=e.filter(f=>isFinite(f.v));if(o.length<2)return null;let r=Date.now(),a=o[o.length-1];r-a.t>6e5&&o.push({t:r,v:a.v});let s=de(o,n);if(s.length<2)return null;let c=1/0,l=-1/0;for(let f of s)f.v<c&&(c=f.v),f.v>l&&(l=f.v);isFinite(c)||(c=0),isFinite(l)||(l=100);let p=yn(s,t,i,c,l);if(!p)return null;let u=`${p} L${t.toFixed(1)},${i.toFixed(1)} L0,${i.toFixed(1)} Z`;return{linePath:p,areaPath:u}}function ue(e,t=24,i=""){if(!e||e.length<2)return"";let n=e.filter(l=>isFinite(l.v));if(n.length<2)return"";let o=de(n,t),r=n[0].t,a=n[n.length-1].t,s=n.every(l=>Number.isInteger(l.v)),c={u:i,d:[]};return c.d=o.map(l=>{let p=r+l.x*(a-r),u=new Date(p),f=`${String(u.getHours()).padStart(2,"0")}:${String(u.getMinutes()).padStart(2,"0")}`,d=s?Math.round(l.v):Math.round(l.v*10)/10;return{l:f,v:d}}),JSON.stringify(c)}function dt(e,t,i,n,o,r=""){if(!e||e.length<2)return"";let a=ct(e,t,i,24);if(!a)return"";let s=k(n),c=`<div class="pc-sparkline-filled" style="height:${i}px">`;return c+=`<svg viewBox="0 0 ${t} ${i}" role="img" aria-label="${h(r)}" preserveAspectRatio="none" style="width:100%;height:${i}px;display:block">`,c+=`<defs><linearGradient id="${h(o)}" x1="0" y1="0" x2="0" y2="1">`,c+=`<stop offset="0%" stop-color="${s}" stop-opacity="0.3"/>`,c+=`<stop offset="100%" stop-color="${s}" stop-opacity="0"/>`,c+="</linearGradient></defs>",c+=`<path d="${a.areaPath}" fill="url(#${h(o)})" />`,c+=`<path d="${a.linePath}" fill="none" stroke="${s}" stroke-width="1.5" />`,c+="</svg></div>",c}var mo=new Set(["friendly_name","icon","unit_of_measurement","device_class"]);function Gt(e,t){let i=[],n=0;if(Array.isArray(e.chart_data)&&e.chart_data.length>0){for(let o of e.chart_data)o.type&&typeof o.count=="number"&&(i.push({label:o.type,value:Math.max(0,o.count),color:t[n%t.length]}),n++);return i}if(e.breakdown_24h&&typeof e.breakdown_24h=="object"){for(let[o,r]of Object.entries(e.breakdown_24h)){let a=Number(r);!isNaN(a)&&a>0&&(i.push({label:o,value:a,color:t[n%t.length]}),n++)}return i}for(let[o,r]of Object.entries(e)){if(mo.has(o))continue;let a=Number(r);isNaN(a)||(i.push({label:o,value:Math.max(0,a),color:t[n%t.length]}),n++)}return i}function go(e,t,i,n){let o=t.show_temp_bar??i.show_temp_bar??!0,r=t.show_power_bar??i.show_power_bar??!0,a=e.isUnavailable?" pc-unavailable":"",s=e.isUnavailable?"Unavailable":e.currentTemp!==null?`${G(e.currentTemp)}${h(e.unit)}`:"--",c=!e.isUnavailable&&e.targetTemp!==null?`<span class="pc-zone-target">\u2192 ${G(e.targetTemp)}${h(e.unit)}</span>`:"",l=!e.isUnavailable&&e.humidity!==null?` <span class="pc-zone-humidity"><ha-icon icon="mdi:water-percent"></ha-icon>${Math.round(e.humidity)}%</span>`:"",p=e.isUnavailable?`${h(e.name)}: Unavailable`:`${h(e.name)}: ${s}${e.targetTemp!==null?`, target ${G(e.targetTemp)}${e.unit}`:""}${e.humidity!==null?`, ${Math.round(e.humidity)}% humidity`:""}, ${e.hvacAction}`,u=`<div class="pc-zone-row${a}" tabindex="0" role="button"
    aria-label="${h(p)}" data-entity="${h(e.entityId)}">`;if(u+='<div class="pc-zone-header">',u+=`<span class="pc-zone-name">${e.icon&&e.icon!=="mdi:thermometer"?`<ha-icon icon="${h(e.icon)}"></ha-icon> `:""}${h(e.name)}${l}</span>`,u+=`<span class="pc-zone-temp">${s}${c}</span>`,u+="</div>",o&&!e.isUnavailable){let d=e.currentTemp!==null?Ft(e.currentTemp,e.minTemp,e.maxTemp):50,m=e.targetTemp!==null?Ft(e.targetTemp,e.minTemp,e.maxTemp):null,g=j(e.minTemp),y=j((e.minTemp+e.maxTemp)/2),v=j(e.maxTemp),b=`linear-gradient(to right, ${k(g)}, ${k(y)}, ${k(v)})`;u+='<div class="pc-temp-gauge">',u+=`<div class="pc-temp-gauge-bg" style="background:${b}"></div>`,u+=`<div class="pc-temp-gauge-current" style="left:${k(d.toFixed(1))}%"></div>`,m!==null&&(u+=`<div class="pc-temp-gauge-target" style="left:${k(m.toFixed(1))}%"></div>`),u+="</div>"}if(r&&!e.isUnavailable){let d=e.heatingPower||e.coolingPower||0,m=wt(e.hvacAction),g=m.cssVar?`var(${m.cssVar}, ${m.fallback})`:m.fallback;if(d>0||e.hvacAction==="heating"||e.hvacAction==="cooling"){let y=Math.min(100,Math.max(0,d)),v=d>0?" pc-bar-active":"";u+='<div class="pc-power-bar-container">',u+='<div class="pc-power-bar-track"></div>',u+=`<div class="pc-power-bar-fill${v}" style="width:${k(y.toFixed(1))}%;background:${k(g)};--pc-bar-glow:${k(m.fallback)}40"></div>`,u+="</div>"}}if(e.chips.length>0){u+='<div class="pc-zone-chips">';for(let d of e.chips){let m=d.severity?` pc-severity-${d.severity.toLowerCase()}`:"",g=d.color?` style="color:${k(d.color)}"`:"",y=d.entityId?` data-entity="${h(d.entityId)}"`:"";u+=`<span class="pc-chip${m}"${g}${y} data-chip-type="${h(d.type)}">`,u+=`<ha-icon icon="${h(d.icon)}"></ha-icon>`,u+=`${h(d.label)}`,u+="</span>"}u+="</div>"}let f=t.sparkline?.mode||"overlay";if(f==="pulse"&&!e.isUnavailable)return vo(e,t,n);if(!e.isUnavailable&&n&&n.length>=2){let d=wt(e.hvacAction),m=t.color||d.fallback;f==="prominent"&&(u+=bo(m,n,e.unit,e.entityId))}return u+="</div>",u}function vo(e,t,i){let n=wt(e.hvacAction),o=e.heatingPower>0||e.hvacAction==="heating",r=e.hvacAction==="cooling",a=o||r,s=a?t.color||n.fallback:"var(--secondary-text-color, #9E9E9E)",c=k(s),l=h(e.entityId).replace(/\./g,"-"),p=e.heatingPower||e.coolingPower||0,u=e.hvacAction==="heating"?`Heating ${Math.round(p)}%`:e.hvacAction==="cooling"?`Cooling ${Math.round(p)}%`:"Idle",f=e.currentTemp!==null?`${G(e.currentTemp)}${h(e.unit)}`:"--",d=e.targetTemp!==null?`\u2192 ${G(e.targetTemp)}${h(e.unit)}`:"",m=`${h(e.name)}: ${f}, ${u}`,g=`pc-zone-row pc-zone-row-pulse${o?" pc-heating":""}`,y=ue(i||[],24,e.unit),v=`<div class="${g}" tabindex="0" role="button"
    aria-label="${h(m)}" data-entity="${h(e.entityId)}"${y?` data-sparkline='${h(y)}'`:""}>`;if(i&&i.length>=2){let b=ct(i,360,56,60);if(b){let _=`pulse-grad-${l}`,w=`pulse-glow-${l}`,S=a?" pc-heating-glow":"",A=a?"0.55":"0.2",T=a?"0.05":"0.02",C=a?"2":"1.5",F=a?"1":"0.5";v+='<svg class="pc-pulse-bg" viewBox="0 0 360 56" preserveAspectRatio="none">',v+="<defs>",v+=`<linearGradient id="${_}" x1="0" y1="0" x2="0" y2="1">`,v+=`<stop offset="0%" stop-color="${c}" stop-opacity="${A}"/>`,v+=`<stop offset="100%" stop-color="${c}" stop-opacity="${T}"/>`,v+="</linearGradient>",a&&(v+=`<filter id="${w}"><feGaussianBlur stdDeviation="${$t(360,360).toFixed(1)}" result="b"/>`,v+='<feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>'),v+="</defs>",v+=`<path d="${b.areaPath}" fill="url(#${_})" />`,v+=`<path d="${b.linePath}" fill="none" stroke="${c}" stroke-width="${C}" opacity="${F}"`,a&&(v+=` filter="url(#${w})" class="${S}"`),v+=" />",v+="</svg>"}}return v+='<div class="pc-pulse-info">',v+='<div class="pc-pulse-info-left">',v+=`<div class="pc-zone-name">${e.icon&&e.icon!=="mdi:thermometer"?`<ha-icon icon="${h(e.icon)}"></ha-icon> `:""}${h(e.name)}</div>`,v+='<div class="pc-pulse-status">',v+=`<span class="pc-status-dot" style="background:${c}"></span>`,v+=`${h(u)}`,v+="</div>",v+="</div>",v+='<div class="pc-pulse-info-right">',v+=`<span class="pc-pulse-current">${h(f)}</span>`,d&&(v+=`<span class="pc-zone-target">${d}</span>`),v+="</div>",v+="</div>",v+="</div>",v}function bo(e,t,i,n){let o=ct(t,300,40,48);if(!o){let p=bt(t,300,40,48,"avg",!0);return p?`<div class="pc-sparkline-prominent"><svg viewBox="0 0 300 40" preserveAspectRatio="none"><path d="${p}" fill="none" stroke="${k(e)}" stroke-width="1.5" opacity="0.7" /></svg></div>`:""}let a=`prom-grad-${n?n.replace(/[^a-z0-9]/gi,"-"):String(Math.random()).slice(2,8)}`,s=k(e),c=ue(t,24,i),l=`<div class="pc-sparkline-filled" style="height:40px"${c?` data-sparkline='${h(c)}'`:""}>`;return l+='<svg viewBox="0 0 300 40" preserveAspectRatio="none">',l+=`<defs><linearGradient id="${h(a)}" x1="0" y1="0" x2="0" y2="1">`,l+=`<stop offset="0%" stop-color="${s}" stop-opacity="0.3"/>`,l+=`<stop offset="100%" stop-color="${s}" stop-opacity="0"/>`,l+="</linearGradient></defs>",l+=`<path d="${o.areaPath}" fill="url(#${h(a)})" />`,l+=`<path d="${o.linePath}" fill="none" stroke="${s}" stroke-width="1.5" opacity="0.7" />`,l+="</svg></div>",l}function he(e,t,i,n,o){if(!e||e.length===0)return"";let r=Number(t.columns)||1,a=r>1?" pc-columns":"",s=r>1?` style="grid-template-columns:repeat(${Number(r)}, 1fr)"`:"",c=`<div class="pc-section pc-section-zones${a}"${s}>`,l=n?.hubEntities?.home_state,p=l?i[l]:null;if(p&&p.state!=="unavailable"){let u=p.state==="on",f=u?"mdi:home":"mdi:home-export-outline",d=u?"Home":"Away",m=u?"var(--label-badge-green, #4CAF50)":"var(--secondary-text-color)";c+='<div style="display:flex;justify-content:space-between;align-items:center">',c+='<div class="pulse-section-label">Zones</div>',c+=`<span class="pc-chip" data-entity="${h(l)}" style="color:${k(m)}">`,c+=`<ha-icon icon="${h(f)}"></ha-icon>${h(d)}</span>`,c+="</div>"}else c+='<div class="pulse-section-label">Zones</div>';for(let u of e){let f=u.entity,d=D(f),m=n?.zoneEntities?.[d]||{},g=J(f,m,i,u,t),y=at(f,i,m,u),v=o?.data?.[y.entityId]||o?.data?.[f]||[];c+=go(g,u,t,v)}return c+="</div>",c}function wn(e,t,i,n,o,r){if(!e||!t)return;let a=e.querySelectorAll(".pc-zone-row");for(let s=0;s<t.length;s++){let c=t[s],l=c.entity,p=D(l),u=o?.zoneEntities?.[p]||{},f=n[l],d=r[l];if(f===d&&a[s])continue;let m=J(l,u,n,c,i),g=a[s];if(!g)continue;let y=g.querySelector(".pc-zone-temp");if(y){let S=m.isUnavailable?"Unavailable":m.currentTemp!==null?`${G(m.currentTemp)}${m.unit}`:"--",A=!m.isUnavailable&&m.targetTemp!==null?`<span class="pc-zone-target">\u2192 ${G(m.targetTemp)}${h(m.unit)}</span>`:"";y.innerHTML=`${h(S)}${A}`}let v=g.querySelector(".pc-power-bar-fill");if(v){let S=m.heatingPower||m.coolingPower||0,A=wt(m.hvacAction),T=A.cssVar?`var(${A.cssVar}, ${A.fallback})`:A.fallback;v.style.width=`${Math.min(100,Math.max(0,S)).toFixed(1)}%`,v.style.background=T,v.style.setProperty("--pc-bar-glow",`${A.fallback}40`),v.classList.toggle("pc-bar-active",S>0)}let b=g.querySelector(".pc-temp-gauge-current");if(b&&m.currentTemp!==null){let S=Ft(m.currentTemp,m.minTemp,m.maxTemp);b.style.left=`${S.toFixed(1)}%`}let _=g.querySelector(".pc-temp-gauge-target");if(_&&m.targetTemp!==null){let S=Ft(m.targetTemp,m.minTemp,m.maxTemp);_.style.left=`${S.toFixed(1)}%`}let w=g.querySelector(".pc-temp-gauge-bg");if(w&&!m.isUnavailable){let S=j(m.minTemp),A=j((m.minTemp+m.maxTemp)/2),T=j(m.maxTemp);w.style.background=`linear-gradient(to right, ${S}, ${A}, ${T})`}m.isUnavailable?g.classList.add("pc-unavailable"):g.classList.remove("pc-unavailable")}}function $n(e){return e>95?"var(--label-badge-red, #F44336)":e>80?"var(--label-badge-yellow, #FF9800)":"var(--label-badge-green, #4CAF50)"}function _o(e){let t=(e||"").toLowerCase();return t==="ok"||t==="healthy"?"var(--label-badge-green, #4CAF50)":t==="warning"?"var(--label-badge-yellow, #FF9800)":"var(--label-badge-red, #F44336)"}function yo(e,t){let i=t>0?Math.min(100,e/t*100):0,n=$n(i),o=80,r=o/2,a=o/2,s=o/2-4,c=s*.7,l=Wt(r,a,c,s,-90,269.9),p=-90+i/100*360,u=i>0?Wt(r,a,c,s,-90,Math.min(p,269.9)):"",f=i>95,d=i>80,m=f||d,g='<div class="pc-usage-gauge">';if(g+=`<svg viewBox="0 0 ${o} ${o}" role="img" aria-label="API usage: ${Math.round(e)} of ${Math.round(t)}" style="width:${o}px;height:${o}px">`,m&&(g+='<defs><filter id="gauge-glow"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>'),g+=`<path d="${l}" fill="var(--divider-color, rgba(0,0,0,0.12))" />`,u){if(g+=`<path d="${u}" fill="${k(n)}"${m?' filter="url(#gauge-glow)"':""}>`,g+=`<title>API usage: ${Math.round(i)}%</title>`,m){let y=f?"1":"2.5";nt()||(g+=`<animate attributeName="opacity" values="1;0.5;1" dur="${y}s" repeatCount="indefinite"/>`)}g+="</path>"}return g+="</svg>",g+=`<div class="pc-gauge-center">${h(Math.round(e))}<br><span style="font-size:10px;opacity:0.6">/ ${h(Math.round(t))}</span></div>`,g+="</div>",g}function xo(e,t,i){let n=t?.data?.[e]||[];return dt(n,200,40,i,"api-hist-grad","API usage history")}function wo(e){let t=Gt(e,st);if(t.length===0)return"";let i=60,n=Ut(t,i),o=t.reduce((c,l)=>c+l.value,0),r='<div style="display:flex;align-items:center;gap:12px">';r+=`<div class="pc-donut-container" style="width:${i}px;height:${i}px;flex-shrink:0;margin:0">`,r+=`<svg viewBox="0 0 ${i} ${i}" role="img" aria-label="API call breakdown">`;let a=i/2-2,s=a*.6;r+=`<circle cx="${i/2}" cy="${i/2}" r="${((a+s)/2).toFixed(1)}" fill="none" stroke="var(--divider-color, rgba(0,0,0,0.12))" stroke-width="${(a-s).toFixed(1)}" />`;for(let c of n)r+=`<path d="${c.d}" fill="${k(c.color)}"><title>${h(c.label)}: ${Math.round(c.angle/360*o)}</title></path>`;return r+="</svg>",r+=`<div class="pc-donut-center" style="font-size:12px">${h(Math.round(o))}</div>`,r+="</div>",r+=kt(t.map(c=>({label:c.label,color:c.color,value:String(Math.round(c.value))}))),r+="</div>",r}function fe(e,t,i,n){if(!e.api_usage||!e.api_limit)return"";let o=parseFloat(t[e.api_usage]?.state)||0,r=parseFloat(t[e.api_limit]?.state)||100,a=r>0?Math.min(100,o/r*100):0,s=$n(a),c=t[e.api_status]?.state||"unknown",l=_o(c),p='<div class="pc-section pc-section-api">';p+='<div class="pulse-section-label">API Usage</div>',p+='<div class="pc-api-dashboard">',p+='<div class="pc-api-row">',p+=yo(o,r);let u=e.api_usage;if(u&&n&&(p+=xo(u,n,s)),p+="</div>",e.api_breakdown&&t[e.api_breakdown]&&(p+='<div class="pc-api-row">',p+=wo(t[e.api_breakdown].attributes||{}),p+="</div>"),p+='<div class="pc-zone-chips">',e.call_history&&t[e.call_history]){let f=t[e.call_history].attributes?.calls_per_hour;f!=null&&Number(f)>0&&(p+=`<span class="pc-chip" data-entity="${h(e.call_history)}">`,p+=`<ha-icon icon="mdi:speedometer"></ha-icon>${h(Math.round(Number(f)))}/hr</span>`)}if(e.polling_interval&&t[e.polling_interval]){let f=t[e.polling_interval],d=f.attributes?.unit_of_measurement||"";p+=`<span class="pc-chip" data-entity="${h(e.polling_interval)}">Poll: ${h(f.state)}${d?h(d):""}</span>`}if(e.next_sync&&t[e.next_sync]){let f=t[e.next_sync].state,d=f,m=0;if(f&&f.includes("T"))try{let g=new Date(f);m=g.getTime();let y=m-Date.now();if(y>0&&y<36e5){let v=Math.floor(y/6e4),b=Math.floor(y%6e4/1e3);d=v>0?`${v}m ${b}s`:`${b}s`}else d=`${String(g.getHours()).padStart(2,"0")}:${String(g.getMinutes()).padStart(2,"0")}`}catch(g){console.debug("Pulse Climate: api date parse fallback",g)}p+=`<span class="pc-chip chip-next-sync" data-entity="${h(e.next_sync)}" data-target="${m}">Next: ${h(d)}</span>`}if(e.api_reset&&t[e.api_reset]){let f=t[e.api_reset].state,d=f;if(f&&f.includes("T"))try{let m=new Date(f);d=`${String(m.getHours()).padStart(2,"0")}:${String(m.getMinutes()).padStart(2,"0")}`}catch(m){console.debug("Pulse Climate: api date parse fallback",m)}p+=`<span class="pc-chip" data-entity="${h(e.api_reset)}">Reset: ${h(d)}</span>`}return e.token_status&&t[e.token_status]&&(p+=`<span class="pc-chip" data-entity="${h(e.token_status)}">Token: ${h(t[e.token_status].state)}</span>`),p+=`<span class="pc-chip" data-entity="${e.api_status?h(e.api_status):""}" style="color:${k(l)}">${h(c)}</span>`,p+="</div>",p+="</div>",p+="</div>",p}function me(e,t,i){if(!e.bridge_connected)return"";let n=t[e.bridge_connected];if(!n)return"";let o=n.state==="on",r=o?"var(--label-badge-green, #4CAF50)":"var(--label-badge-red, #F44336)",a=o?"Connected":"Disconnected",s=o?"pc-pulse-dot pc-connected":"pc-pulse-dot pc-disconnected",c=n.attributes||{},l=c.response_time_ms,p=c.consecutive_failures,u=c.last_error,f=e.boiler_flow_temp&&t[e.boiler_flow_temp]?.attributes?.unit_of_measurement||"\xB0C",d='<div class="pc-section pc-section-bridge">';if(d+='<div class="pulse-section-label">Bridge</div>',d+='<div class="pc-zone-chips">',d+=`<span class="pc-chip" data-entity="${h(e.bridge_connected)}" style="color:${k(r)}">`,d+=`<span class="${s}"></span>`,d+=`${h(a)}</span>`,l!==void 0&&(d+=`<span class="pc-chip" data-entity="${h(e.bridge_connected)}">${h(Math.round(l))}ms</span>`),p!==void 0&&p>0&&(d+=`<span class="pc-chip" data-entity="${h(e.bridge_connected)}" style="color:var(--label-badge-red, #F44336)">Failures: ${h(p)}</span>`),d+="</div>",e.boiler_flow_temp&&t[e.boiler_flow_temp]){let y=parseFloat(t[e.boiler_flow_temp].state),v=t[e.boiler_flow_temp].state,b=isNaN(y)?"var(--primary-text-color)":j(y);if(d+='<div style="display:flex;align-items:center;gap:8px;margin-top:4px">',d+=`<span class="pc-flow-temp-value" style="color:${k(b)}">${h(v)}${h(f)}</span>`,i){let _=i.data?.[e.boiler_flow_temp]||[],w=dt(_,120,30,b,"bridge-flow-grad","Boiler flow temperature history");w&&(d+=`<div class="pc-flow-sparkline">${w}</div>`)}d+="</div>"}let m=e.wc_status&&t[e.wc_status],g=e.wc_target_flow&&t[e.wc_target_flow];if((m||g)&&(d+='<div class="pc-zone-chips">',m&&(d+=`<span class="pc-chip" data-entity="${h(e.wc_status)}">${h(t[e.wc_status].state)}</span>`),g&&(d+=`<span class="pc-chip" data-entity="${h(e.wc_target_flow)}">Target: ${h(t[e.wc_target_flow].state)}${h(f)}</span>`),d+="</div>"),e.boiler_max_output&&t[e.boiler_max_output]){let y=t[e.boiler_max_output].state;y!=="unavailable"&&y!=="unknown"&&(d+='<div class="pc-zone-chips">',d+=`<span class="pc-chip" data-entity="${h(e.boiler_max_output)}">`,d+=`<ha-icon icon="mdi:thermometer-high"></ha-icon>Max: ${h(y)}${h(f)}</span>`,d+="</div>")}return u&&u!=="None"&&u!=="null"&&(d+='<div class="pc-zone-chips">',d+=`<span class="pc-chip" style="color:var(--label-badge-red, #F44336)">Error: ${h(u)}</span>`,d+="</div>"),d+="</div>",d}var jt="var(--label-badge-green, #4CAF50)",Sn="var(--accent-color, #9C27B0)";function ge(e,t,i){if(!e.homekit_connected)return"";let n=t[e.homekit_connected];if(!n)return"";let o=n.state==="on",r=o?jt:"var(--label-badge-red, #F44336)",a=o?"Connected":"Disconnected",s=o?"pc-pulse-dot pc-connected":"pc-pulse-dot pc-disconnected",c=n.attributes||{},l=c.uptime||"",p=c.mapped_zones,u=c.reconnect_count,f=e.homekit_reads_saved?t[e.homekit_reads_saved]:null,d=e.homekit_writes_saved?t[e.homekit_writes_saved]:null,m=f?Number(f.state)||0:Number(c.reads_saved_today)||0,g=d?Number(d.state)||0:Number(c.writes_saved_today)||0,y=m+g,v='<div class="pc-section pc-section-homekit">',b=y>0?` \xB7 ${y} saved`:"";if(v+=`<div class="pulse-section-label">HomeKit${h(b)}</div>`,v+='<div class="pc-zone-chips">',v+=`<span class="pc-chip" data-entity="${h(e.homekit_connected)}" style="color:${k(r)}">`,v+=`<span class="${s}"></span>`,v+=`${h(a)}`,l&&(v+=` <span style="opacity:0.6;font-size:10px">${h(l)}</span>`),v+="</span>",p!==void 0&&(v+=`<span class="pc-chip">${h(p)} zones</span>`),u!==void 0&&u>0&&(v+=`<span class="pc-chip" style="color:var(--label-badge-yellow, #FF9800)">Reconnects: ${h(u)}</span>`),v+="</div>",m>0||g>0){let T=y>0?m/y*100:100;v+='<div style="margin-top:4px">',v+='<div class="pc-power-bar-container">',v+='<div class="pc-power-bar-track"></div>',v+=`<div class="pc-power-bar-fill" style="width:100%;background:${k(Sn)}"></div>`,v+=`<div class="pc-power-bar-fill" style="width:${k(T.toFixed(1))}%;background:${k(jt)}"></div>`,v+="</div>",v+="</div>";let C=e.homekit_reads_saved;if(C&&i){let $=i.data?.[C]||[];v+=dt($,200,30,jt,"hk-spark-grad","HomeKit saved calls history")}v+='<div class="pc-zone-chips">';let F=e.homekit_reads_saved||"",I=e.homekit_writes_saved||"";v+=`<span class="pc-chip"${F?` data-entity="${h(F)}"`:""} style="color:${k(jt)}">Reads: ${h(m)}</span>`,g>0&&(v+=`<span class="pc-chip"${I?` data-entity="${h(I)}"`:""} style="color:${k(Sn)}">Writes: ${h(g)}</span>`),v+="</div>"}let _=Number(c.write_attempts)||0,w=Number(c.write_successes)||0,S=Number(c.write_fallbacks)||0,A=Number(c.write_avg_latency_ms)||0;return(_>0||w>0||S>0)&&(v+='<div class="pc-zone-chips">',_>0&&(v+=`<span class="pc-chip">Attempts: ${h(_)}</span>`),w>0&&(v+=`<span class="pc-chip">Successes: ${h(w)}</span>`),S>0&&(v+=`<span class="pc-chip" style="color:var(--label-badge-yellow, #FF9800)">Fallbacks: ${h(S)}</span>`),A>0&&(v+=`<span class="pc-chip">Latency: ${h(A)}ms</span>`),v+="</div>"),v+="</div>",v}function $o(e){return{sunny:"mdi:weather-sunny",clear:"mdi:weather-night",cloudy:"mdi:weather-cloudy",partlycloudy:"mdi:weather-partly-cloudy",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy",fog:"mdi:weather-fog",windy:"mdi:weather-windy",lightning:"mdi:weather-lightning"}[(e||"").toLowerCase()]||"mdi:weather-cloudy"}function ve(e,t,i){if(!e.outside_temp)return"";let n=t[e.outside_temp]?.state,o=t[e.weather]?.state||"",r=e.solar_intensity?t[e.solar_intensity]?.state:null,a='<div class="pc-section pc-section-weather">';a+='<div class="pulse-section-label">Weather</div>',a+='<div class="pc-zone-chips">',o&&(a+=`<span class="pc-chip"${e.weather?` data-entity="${h(e.weather)}"`:""}><ha-icon icon="${h($o(o))}"></ha-icon>${h(o)}</span>`),n!=null&&(a+=`<span class="pc-chip" data-entity="${h(e.outside_temp)}"><ha-icon icon="mdi:thermometer"></ha-icon>${h(n)}${h(t[e.outside_temp]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),r!=null&&(a+=`<span class="pc-chip"${e.solar_intensity?` data-entity="${h(e.solar_intensity)}"`:""}><ha-icon icon="mdi:white-balance-sunny"></ha-icon>${h(r)}%</span>`),a+="</div>";let s=e.outside_temp;if(s&&i){let c=i.data?.[s]||[],l=parseFloat(n||"0"),p=isNaN(l)?"var(--primary-text-color)":j(l);a+=dt(c,200,30,p,"weather-spark-grad","Outdoor temperature history")}return a+="</div>",a}function be(e,t,i){let n=!1,o='<div class="pc-section pc-section-environment">';o+='<div class="pulse-section-label">Environment</div>';for(let r of e){let a=D(r.entity),s=i?.zoneEntities?.[a]||{},c=s.mold_risk&&t[s.mold_risk],l=s.condensation&&t[s.condensation],p=s.comfort_level&&t[s.comfort_level],u=s.surface_temp&&t[s.surface_temp],f=s.dew_point&&t[s.dew_point];if(!c&&!l&&!p&&!u&&!f)continue;n=!0;let d=r.name||t[r.entity]?.attributes?.friendly_name||a;if(o+=`<div class="pc-system-row"><span class="pc-system-label">${h(d)}</span>`,o+='<div class="pc-zone-chips">',c){let m=t[s.mold_risk].state,g=Vt(m);o+=`<span class="pc-chip" data-entity="${h(s.mold_risk)}" style="color:${k(g.fallback)}">`,o+=`<ha-icon icon="mdi:mushroom"></ha-icon>${h(m)}</span>`}if(l){let m=t[s.condensation].state,g=Vt(m);o+=`<span class="pc-chip" data-entity="${h(s.condensation)}" style="color:${k(g.fallback)}">`,o+=`<ha-icon icon="mdi:water-alert"></ha-icon>${h(m)}</span>`}p&&(o+=`<span class="pc-chip" data-entity="${h(s.comfort_level)}"><ha-icon icon="mdi:emoticon-outline"></ha-icon>${h(t[s.comfort_level].state)}</span>`),u&&(o+=`<span class="pc-chip" data-entity="${h(s.surface_temp)}"><ha-icon icon="mdi:texture-box"></ha-icon>${h(t[s.surface_temp].state)}${h(t[s.surface_temp]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),f&&(o+=`<span class="pc-chip" data-entity="${h(s.dew_point)}"><ha-icon icon="mdi:water-thermometer"></ha-icon>${h(t[s.dew_point].state)}${h(t[s.dew_point]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),o+="</div></div>"}return o+="</div>",n?o:""}function _e(e,t,i){let n=!1,o='<div class="pc-section pc-section-thermal">';o+='<div class="pulse-section-label">Thermal Analytics</div>';for(let r of e){let a=D(r.entity),s=i?.zoneEntities?.[a]||{},c=s.heating_rate&&t[s.heating_rate],l=s.thermal_inertia&&t[s.thermal_inertia],p=s.preheat_time&&t[s.preheat_time],u=s.confidence&&t[s.confidence],f=s.heat_accel&&t[s.heat_accel],d=s.approach_factor&&t[s.approach_factor];if(!c&&!l&&!p&&!u&&!f&&!d)continue;n=!0;let m=r.name||t[r.entity]?.attributes?.friendly_name||a;o+=`<div class="pc-system-row"><span class="pc-system-label">${h(m)}</span>`,o+='<div class="pc-zone-chips">',c&&(o+=`<span class="pc-chip" data-entity="${h(s.heating_rate)}"><ha-icon icon="mdi:trending-up"></ha-icon>${h(t[s.heating_rate].state)}${h(t[s.heating_rate]?.attributes?.unit_of_measurement||"\xB0C/hr")}</span>`),l&&(o+=`<span class="pc-chip" data-entity="${h(s.thermal_inertia)}"><ha-icon icon="mdi:speedometer"></ha-icon>${h(t[s.thermal_inertia].state)}</span>`),p&&(o+=`<span class="pc-chip" data-entity="${h(s.preheat_time)}"><ha-icon icon="mdi:timer-outline"></ha-icon>${h(t[s.preheat_time].state)} min</span>`),u&&(o+=`<span class="pc-chip" data-entity="${h(s.confidence)}"><ha-icon icon="mdi:check-circle-outline"></ha-icon>${h(t[s.confidence].state)}%</span>`),f&&(o+=`<span class="pc-chip" data-entity="${h(s.heat_accel)}"><ha-icon icon="mdi:rocket-launch"></ha-icon>${h(t[s.heat_accel].state)}${h(t[s.heat_accel]?.attributes?.unit_of_measurement||"")}</span>`),d&&(o+=`<span class="pc-chip" data-entity="${h(s.approach_factor)}"><ha-icon icon="mdi:target"></ha-icon>${h(t[s.approach_factor].state)}${h(t[s.approach_factor]?.attributes?.unit_of_measurement||"")}</span>`),o+="</div></div>"}return o+="</div>",n?o:""}function ye(e,t,i){let n=!1,o='<div class="pc-section pc-section-schedule">';o+='<div class="pulse-section-label">Schedule</div>';for(let r of e){let a=D(r.entity),s=i?.zoneEntities?.[a]||{},c=s.next_schedule&&t[s.next_schedule],l=s.schedule_deviation&&t[s.schedule_deviation],p=s.preheat_advisor&&t[s.preheat_advisor],u=s.comfort_target&&t[s.comfort_target];if(!c&&!l&&!p&&!u)continue;n=!0;let f=r.name||t[r.entity]?.attributes?.friendly_name||a;if(o+=`<div class="pc-system-row"><span class="pc-system-label">${h(f)}</span>`,o+='<div class="pc-zone-chips">',c){let d=s.next_sched_temp&&t[s.next_sched_temp]?` \u2192 ${h(t[s.next_sched_temp].state)}${h(t[s.next_sched_temp]?.attributes?.unit_of_measurement||"\xB0C")}`:"";o+=`<span class="pc-chip" data-entity="${h(s.next_schedule)}"><ha-icon icon="mdi:calendar-clock"></ha-icon>${h(t[s.next_schedule].state)}${d}</span>`}l&&(o+=`<span class="pc-chip" data-entity="${h(s.schedule_deviation)}"><ha-icon icon="mdi:swap-vertical"></ha-icon>${h(t[s.schedule_deviation].state)}${h(t[s.schedule_deviation]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),p&&(o+=`<span class="pc-chip" data-entity="${h(s.preheat_advisor)}"><ha-icon icon="mdi:radiator"></ha-icon>${h(t[s.preheat_advisor].state)}</span>`),u&&(o+=`<span class="pc-chip" data-entity="${h(s.comfort_target)}"><ha-icon icon="mdi:target"></ha-icon>${h(t[s.comfort_target].state)}${h(t[s.comfort_target]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),o+="</div></div>"}return o+="</div>",n?o:""}var xe=0;function So(){return xe=xe+1>>>0,`graph-grad-${xe.toString(36)}`}function ko(e,t){let i=t&&t.length>0?t:st;return i[e%i.length]}function Ao(e,t,i){let o=[];for(let s of e){let c=ct(s.data,300,t,48);c&&o.push({...c,color:s.color,entityId:s.entityId})}if(o.length===0){let s=xn(e,300,t);if(!s.some(p=>p.d!==""))return'<div class="pc-chart-empty">No data available</div>';let l=`<svg viewBox="0 0 300 ${t}" role="img" aria-label="${h(i)}" class="pc-chart-svg" preserveAspectRatio="none">`;for(let p of s)p.d!==""&&(l+=`<path d="${p.d}" fill="none" stroke="${k(p.color)}" stroke-width="var(--pc-chart-line-width, 1.5)" data-entity="${h(p.entityId)}" />`);return l+="</svg>",l}let r=o.map(()=>So()),a=`<svg viewBox="0 0 300 ${t}" role="img" aria-label="${h(i)}" class="pc-chart-svg" preserveAspectRatio="none">`;a+="<defs>";for(let s=0;s<o.length;s++)a+=`<linearGradient id="${r[s]}" x1="0" y1="0" x2="0" y2="1">`,a+=`<stop offset="0%" stop-color="${k(o[s].color)}" stop-opacity="0.25"/>`,a+=`<stop offset="100%" stop-color="${k(o[s].color)}" stop-opacity="0"/>`,a+="</linearGradient>";a+="</defs>";for(let s=0;s<o.length;s++){let c=o[s];a+=`<path d="${c.areaPath}" fill="url(#${r[s]})" />`,a+=`<path d="${c.linePath}" fill="none" stroke="${k(c.color)}" stroke-width="var(--pc-chart-line-width, 1.5)" data-entity="${h(c.entityId)}" />`}return a+="</svg>",a}function $e(e,t,i,n,o){let r=e.attribute||"current_temperature",a=e.stacked===!0,s=Number(e.height)||80,c=e.palette||void 0,l=e.entities||t.map(u=>u.entity);if(l.length===0)return"";let p='<div class="pc-section pc-section-graph">';return a?(p+=we(l,"current_temperature","Temperature",s,c,i,n,o,t),p+=we(l,"current_humidity","Humidity",s,c,i,n,o,t)):p+=we(l,r,r==="current_humidity"?"Humidity":"Temperature",s,c,i,n,o,t),p+="</div>",p}function we(e,t,i,n,o,r,a,s,c){let l=[],p=[],u=t==="current_humidity"||t==="humidity";for(let g=0;g<e.length;g++){let y=e[g],v=ko(g,o),b=D(y),_=s?.zoneEntities?.[b]||{},w=c?.find($=>$.entity===y),A=(u?pt(y,a,_,w):at(y,a,_,w))?.entityId||y,T=r.data[A]||[],C=w?.name||a[y]?.attributes?.friendly_name||b,F=a[y]?.attributes?.[t],I=u?"%":a[y]?.attributes?.unit_of_measurement||"\xB0C";l.push({entityId:A,data:T,color:v}),p.push({label:C,color:v,value:F!=null?`${F}${I}`:"--"})}let f=p.map(g=>g.label).join(", "),d=`${i} history for ${f}`,m=`<div class="pulse-section-label">${h(i)}</div>`;return m+=`<div class="pc-chart-container" style="height:${k(n)}px">`,m+=Ao(l,n,d),m+="</div>",m+=kt(p),m}function Se(e,t,i){let n=Number(e.size)||120,o=e.source,r=[];if(o==="api_breakdown"?r=Co(t,i):o==="homekit_saved"?r=To(t,i):e.segments&&(r=Fo(e.segments,i)),r.length===0)return"";let a=r.reduce((g,y)=>g+y.value,0),s=Ut(r,n),c='<div class="pc-section pc-section-donut">',p=o&&{api_breakdown:"API Breakdown",homekit_saved:"HomeKit Saved"}[o]||"Breakdown";c+=`<div class="pulse-section-label">${h(p)}</div>`;let u=r.map(g=>`${g.label} ${g.value}`).join(", ");c+=`<div class="pc-donut-container" style="width:${k(n)}px;height:${k(n)}px">`,c+=`<svg viewBox="0 0 ${n} ${n}" role="img" aria-label="${h(u)}">`;let f=n/2-2,d=f*.6;c+=`<circle cx="${n/2}" cy="${n/2}" r="${((f+d)/2).toFixed(1)}" fill="none" stroke="var(--divider-color, rgba(0,0,0,0.12))" stroke-width="${(f-d).toFixed(1)}" />`;for(let g of s)c+=`<path d="${g.d}" fill="${k(g.color)}" data-segment="${h(g.label)}"><title>${h(g.label)}: ${Math.round(g.angle/360*a)}</title></path>`;c+="</svg>",c+=`<div class="pc-donut-center">${h(Math.round(a))}</div>`,c+="</div>";let m=r.map(g=>({label:g.label,color:g.color,value:String(Math.round(g.value))}));return c+=kt(m),c+="</div>",c}function Co(e,t){let i=e.api_breakdown;if(!i||!t[i])return[];let n=t[i].attributes;return!n||typeof n!="object"?(rt("api_call_breakdown entity has no attributes"),[]):Gt(n,st)}function To(e,t){if(!e.homekit_connected)return[];let i=t[e.homekit_connected];if(!i)return[];let n=i.attributes||{},o=e.homekit_reads_saved?t[e.homekit_reads_saved]:null,r=e.homekit_writes_saved?t[e.homekit_writes_saved]:null,a=o?Number(o.state)||0:Number(n.reads_saved_today)||0,s=r?Number(r.state)||0:Number(n.writes_saved_today)||0,c=[];return(a>0||s>0)&&(c.push({label:"Reads Saved",value:a,color:st[0]}),c.push({label:"Writes Saved",value:s,color:st[1]})),c}function Fo(e,t){return e.map((i,n)=>({label:i.label||i.entity,value:Math.max(0,Number(t[i.entity]?.state)||0),color:i.color||st[n%st.length]}))}function kn(e,t,i){let o=Date.now()-i,r=i/t,a=[],s=0,c=null;for(;s<e.length&&e[s].t<o;)isFinite(e[s].v)&&(c=Math.round(e[s].v*10)/10),s++;for(let l=0;l<t;l++){let p=o+l*r,u=p+r,f=p+r/2,d=0,m=0;for(;s<e.length&&e[s].t<u;)e[s].t>=p&&isFinite(e[s].v)&&(d+=e[s].v,m++),s++;m>0&&(c=Math.round(d/m*10)/10);let g=new Date(f),y=`${String(g.getHours()).padStart(2,"0")}:${String(g.getMinutes()).padStart(2,"0")}`;a.push({value:c,time:f,label:y})}return a}function Zt(e,t,i={}){let n=e.length;if(n===0)return'<div class="pc-strip-container"><div class="pc-chart-empty" style="height:14px;font-size:10px">No data</div></div>';let o=i.emptyColor||"var(--disabled-color, #9E9E9E)",r=i.emptyOpacity??.3,a=i.ariaLabel||"",s=JSON.stringify(e.map(l=>({v:l.value,l:l.label}))),c=`<div class="pc-strip-container" data-slots='${h(s)}'>`;c+=`<svg viewBox="0 0 ${n} 1" preserveAspectRatio="none" role="img" aria-label="${h(a)}" style="width:100%;height:100%;display:block">`;for(let l=0;l<n;l++){let p=e[l].value,u=p!==null?t(p):o,f=p!==null?1:r;c+=`<rect x="${l}" y="0" width="1.05" height="1" fill="${k(u)}" opacity="${f}"/>`}if(c+="</svg>",i.nowPct!==void 0){let l=Math.min(100,Math.max(0,i.nowPct));c+=`<div class="pc-now-marker" style="left:${l.toFixed(1)}%"></div>`}return c+="</div>",c}function Kt(e,t,i={}){let n=e.length;if(n===0)return'<div class="pc-cells"><div class="pc-chart-empty" style="height:16px;font-size:10px">No data</div></div>';let o=JSON.stringify(e.map(a=>({v:a.value,l:a.label}))),r=`<div class="pc-cells" data-slots='${h(o)}'>`;for(let a=0;a<n;a++){let s=e[a].value,c=e[a].label;if(s!==null){let l=t(s);r+=`<div class="pc-cell" style="background:${k(l)}" data-hour="${h(c)}" data-score="${s}"></div>`}else r+=`<div class="pc-cell pc-cell-empty" data-hour="${h(c)}"></div>`}return r+="</div>",r}function ke(){let e=document.createElement("div");e.className="pc-strip-tooltip",e.style.display="none";let t=null;return{element:e,show(i,n,o){t&&(clearTimeout(t),t=null),e.textContent=o,e.style.display="",e.style.left=`${n}px`},hide(){t=setTimeout(()=>{e.style.display="none"},50)}}}function An(){let e=document.createElement("div");e.className="pc-strip-tooltip pc-strip-tooltip-fixed",e.style.display="none";let t=null;return{element:e,show(i,n,o){t&&(clearTimeout(t),t=null),e.textContent=o,e.style.display="",e.style.left=`${n}px`,e.style.top=`${i.top-28}px`},hide(){t=setTimeout(()=>{e.style.display="none"},50)}}}function Yt(e,t=5){let i=new Date,n=Date.now()-e,o="";for(let r=0;r<t-1;r++){let a=new Date(n+r/(t-1)*e);o+=`<span class="pc-time-label">${String(a.getHours()).padStart(2,"0")}:${String(a.getMinutes()).padStart(2,"0")}</span>`}return o+=`<span class="pc-time-label">${String(i.getHours()).padStart(2,"0")}:${String(i.getMinutes()).padStart(2,"0")}</span>`,o}function ut(e,t,i){let n=Math.max(0,Math.min(1,(e-t.left)/t.width));return Math.min(i-1,Math.floor(n*i))}var Eo=2e3;function Ae(e,t,i,n){let o=null,r=s=>{let c=i.getBoundingClientRect(),l=s-c.left;l>=0&&l<=c.width&&(t.style.left=`${n+l}px`,t.style.display="")},a=()=>{t.style.display="none",o&&(clearTimeout(o),o=null)};e.addEventListener("pointermove",s=>{s.pointerType!=="touch"&&r(s.clientX)}),e.addEventListener("pointerleave",a),e.addEventListener("pointerdown",s=>{s.pointerType==="touch"&&(r(s.clientX),o&&clearTimeout(o),o=setTimeout(a,Eo))}),e.addEventListener("pointerup",s=>{s.pointerType})}function Ce(e,t,i,n=""){if(!t||t.length===0)return;let o=t.length,r=null,a=null;e.addEventListener("pointerdown",s=>{if(s.pointerType==="touch"&&s.isPrimary===!1)return;let c=e.getBoundingClientRect();r=ut(s.clientX,c,o),e.setPointerCapture(s.pointerId),a||(a=document.createElement("div"),a.className="pc-strip-drag-highlight",e.style.position="relative",e.appendChild(a)),a.style.display="",a.style.left=`${(r/o*100).toFixed(1)}%`,a.style.width="0%"}),e.addEventListener("pointermove",s=>{if(r===null||!a)return;let c=e.getBoundingClientRect(),l=ut(s.clientX,c,o),p=Math.min(r,l),u=Math.max(r,l);a.style.left=`${(p/o*100).toFixed(1)}%`,a.style.width=`${((u-p+1)/o*100).toFixed(1)}%`}),e.addEventListener("pointerup",s=>{if(r===null){r=null;return}let c=e.getBoundingClientRect(),l=ut(s.clientX,c,o),p=Math.min(r,l),u=Math.max(r,l),f=t.slice(p,u+1).filter(d=>d.v!==null);if(f.length>0){let d=f.map(S=>S.v),m=(d.reduce((S,A)=>S+A,0)/d.length).toFixed(1),g=Math.min(...d),y=Math.max(...d),v=t[p]?.l||"",b=t[u]?.l||"",_=`${v} \u2013 ${b}: avg ${m}${n}, ${g}${n} \u2013 ${y}${n}`,w=e.getBoundingClientRect();i.show(w,(p+u)/2/o*w.width,_),setTimeout(()=>i.hide(),3e3)}r=null})}function Cn(e,t,i,n,o){if(!e||e.length===0)return"";let r=Number(t?.hours_to_show)||24,a=t?.mode||"timeline",s=Number(t?.slots_per_hour)||2,l=(t?.attribute||"temperature")==="humidity",p=l?Et:j,u=a==="heatmap"?r:r*s,f=r*36e5,d=Date.now()-f,m=(Date.now()-d)/f*100,g=l?"Humidity":"Thermal",y=a==="heatmap"?"Heatmap":"Timeline",v='<div class="pc-section pc-section-thermal-strip">';v+='<div style="display:flex;justify-content:space-between;align-items:baseline">',v+=`<div class="pulse-section-label">${h(String(Number(r)))}h ${h(g)} ${h(y)}</div>`,v+='<span class="pc-card-subtitle pc-section-subtitle" style="font-size:11px;color:var(--secondary-text-color,#636366)">Tap a zone for details</span>',v+="</div>",v+='<div class="pc-zone-detail" id="timeline-detail"></div>',v+='<div class="pc-strip-rows" style="position:relative">',v+='<div class="pc-strip-crosshair" style="display:none"></div>';for(let b of e){let _=b.entity,w=D(_),S=n?.zoneEntities?.[w]||{},T=(l?pt(_,i,S,b):at(_,i,S,b))?.entityId||_,C=b.name||i[_]?.attributes?.friendly_name||w,F=o?.data?.[T]||[];if(v+=`<div class="pc-timeline-row" data-zone="${h(w)}" data-entity="${h(_)}">`,v+=`<span class="pc-zone-label">${h(C)}</span>`,F.length<2){let I=!!i[T],$=T in(o?.data||{});v+=`<div class="pc-strip-container"><div class="pc-chart-empty" style="height:14px;font-size:10px">${h(I&&!$?"Waiting for data":"No data")}</div></div>`}else{let I=kn(F,u,f),x=`${C} ${l?"humidity":"temperature"} over ${r}h`;a==="heatmap"?v+=Kt(I,p,{ariaLabel:x}):v+=Zt(I,p,{ariaLabel:x,nowPct:m})}v+="</div>"}return v+="</div>",v+='<div class="pc-time-axis" style="margin-left:76px">',v+=Yt(f),v+="</div>",v+="</div>",v}var Io={Comfortable:100,Warm:70,Cool:70,"Too Warm":40,"Too Cool":40};function Tn(e,t,i,n){if(e==null||t===null||t===void 0||isNaN(e)||isNaN(t))return null;let o=100;if(o-=Math.min(50,Math.abs(e-t)*10),i!=null&&(o-=Math.min(25,Math.abs(i-45)*.5)),n!=null){let r=Io[n]??50;o=o*.7+r*.3}return Math.max(0,Math.min(100,Math.round(o)))}function Fn(e){if(e>=80)return`rgba(52, 199, 89, ${(.35+e/100*.55).toFixed(2)})`;if(e>=50){let t=(e-50)/30;return`rgba(${Math.round(255-t*50)}, ${Math.round(159+t*40)}, 10, 0.65)`}return`rgba(255, 69, 58, ${(.35+(50-e)/50*.5).toFixed(2)})`}function Xt(e,t,i=72e5){if(e.length===0)return null;let n=0,o=e.length-1;for(;n<o;){let s=n+o>>1;e[s].t<t?n=s+1:o=s}let r=null,a=1/0;for(let s=Math.max(0,n-1);s<=Math.min(e.length-1,n);s++){let c=Math.abs(e[s].t-t);c<a&&isFinite(e[s].v)&&(a=c,r=e[s].v)}return a<=i?r:null}function En(e,t,i,n,o){if(!e||e.length===0)return"";let r=Number(t?.slots_per_hour)||1,a=Number(t?.hours_to_show)||24,s=t?.mode||"heatmap",c=r*a,l=a*36e5,p=Date.now()-l,u=(Date.now()-p)/l*100,f=s==="timeline"?"Comfort Timeline":"Comfort Heatmap",d='<div class="pc-section pc-section-comfort-strip">';d+='<div style="display:flex;justify-content:space-between;align-items:baseline">',d+=`<div class="pulse-section-label">${h(String(Number(a)))}h ${h(f)}</div>`,d+='<span class="pc-card-subtitle" style="font-size:11px;color:var(--secondary-text-color,#636366)">Tap a zone for details</span>',d+="</div>",d+='<div class="pc-zone-detail" id="heatmap-detail"></div>',d+='<div class="pc-heatmap-body" style="position:relative">',d+='<div class="pc-strip-crosshair" style="display:none"></div>';for(let m=0;m<e.length;m++){let g=e[m],y=g.entity,v=D(y),b=n?.zoneEntities?.[v]||{},_=g.name||i[y]?.attributes?.friendly_name||v,S=at(y,i,b,g).entityId,T=pt(y,i,b,g)?.entityId||null,C=o?.data?.[S]||[],F=T?o?.data?.[T]||[]:[],I=i[y]?.attributes?.temperature??null,$=b.comfort_level,x=$&&i[$]?.state||null,E=[],z=l/c,N=null;if(C.length>0){let M=Xt(C,p,1/0),L=F.length>0?Xt(F,p,1/0):null;M!==null&&(N=Tn(M,I,L,x))}for(let M=0;M<c;M++){let P=p+M*z+z/2,O=Xt(C,P),H=Xt(F,P),W=Tn(O,I,H,x);W!==null&&(N=W);let Y=new Date(P),K=`${String(Y.getHours()).padStart(2,"0")}:${String(Y.getMinutes()).padStart(2,"0")}`;E.push({value:N,time:P,label:K})}d+=`<div class="pc-heatmap-row" data-zone="${h(v)}" data-idx="${m}">`,d+=`<span class="pc-zone-label">${h(_)}</span>`;let Z=`${_} comfort over ${a}h`;s==="timeline"?d+=Zt(E,Fn,{ariaLabel:Z,nowPct:u}):d+=Kt(E,Fn),d+="</div>"}return d+="</div>",d+='<div class="pc-heatmap-time-axis">',d+=Yt(l),d+="</div>",d+='<div class="pc-heatmap-legend">',d+='<div class="pc-legend-item"><div class="pc-legend-swatch" style="background:rgba(52,199,89,0.7)"></div>\u226580</div>',d+='<div class="pc-legend-item"><div class="pc-legend-swatch" style="background:rgba(255,159,10,0.65)"></div>50\u201379</div>',d+='<div class="pc-legend-item"><div class="pc-legend-swatch" style="background:rgba(255,69,58,0.6)"></div>&lt;50</div>',d+="</div>",d+="</div>",d}function In(e,t,i,n,o,r,a){let s=r+(a-r)*.35,c=r+(a-r)*.65,l=e-i,p=t-n,u=e+i,f=t+n,d=`M${r},${l.toFixed(1)}`;return d+=` C${s.toFixed(1)},${l.toFixed(1)} ${c.toFixed(1)},${p.toFixed(1)} ${a},${p.toFixed(1)}`,d+=` L${a},${f.toFixed(1)}`,d+=` C${c.toFixed(1)},${f.toFixed(1)} ${s.toFixed(1)},${u.toFixed(1)} ${r},${u.toFixed(1)}`,d+=" Z",d}function Mo(e,t,i,n){let o=i+(n-i)*.35,r=i+(n-i)*.65;return`M${i},${e.toFixed(1)} C${o.toFixed(1)},${e.toFixed(1)} ${r.toFixed(1)},${t.toFixed(1)} ${n},${t.toFixed(1)}`}function Te(e,t,i){if(!e||e.length===0)return"";let n=nt(),o=[],r=!1;for(let $ of e){let x=$.entity,E=D(x),z=i?.zoneEntities?.[E]||{},N=J(x,z,t,$,{});(N.heatingPower>0||z.heating_power||t[x]?.attributes?.heating_power!==void 0)&&(r=!0),o.push({name:N.name,power:N.heatingPower,temp:N.currentTemp,target:N.targetTemp,unit:N.unit,hvacAction:N.hvacAction})}let a=o.length>0?Math.round(o.reduce(($,x)=>$+x.power,0)/o.length):0,s='<div class="pc-section pc-section-energy-flow">';if(s+='<div style="display:flex;justify-content:space-between;align-items:baseline">',s+='<div class="pulse-section-label">Energy Flow</div>',r&&(s+=`<span class="pc-energy-flow-header-value" style="font-size:11px;color:${k(mt.heating.fallback)};font-weight:500">${h(a)}% avg</span>`),s+="</div>",!r)return s+='<div class="pc-chart-empty">No heating data</div></div>',s;let c=360,l=o.length<=3?44:o.length<=6?38:34,p=15,u=Math.max(80,o.length*l+30),f=o.length*l,d=Math.max(40,Math.min(f*.7,f-16)),m=Math.max(36,d*.6),g=Math.max(50,m/2+14),y=c-60,v=u/2,b=22,_=2,w=d/Math.max(o.length,1)*.7,S=mt.heating.fallback,A="var(--disabled-color, #9E9E9E)",T=o.some($=>$.power>0||$.hvacAction==="heating"||$.hvacAction==="cooling"),C=o.filter($=>$.power>0).length;s+=`<svg viewBox="0 0 ${c} ${u}" role="img" aria-label="Energy flow from boiler to zones" style="width:100%;height:${k(u)}px;display:block">`,s+="<defs>",s+=`<filter id="flow-glow"><feGaussianBlur stdDeviation="${$t(c,360).toFixed(1)}" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`;for(let $=0;$<o.length;$++){let x=o[$].power>0||o[$].hvacAction==="heating"||o[$].hvacAction==="cooling",E=x?S:A,z=o[$].power;if(x){let N=z>0?(4.5-z/100*3.3).toFixed(1):"5.0";s+=`<linearGradient id="flow-g${$}" x1="-0.5" y1="0" x2="0.5" y2="0" gradientUnits="objectBoundingBox">`,s+=`<stop offset="0%" stop-color="${k(E)}" stop-opacity="0.3"/>`,s+=`<stop offset="50%" stop-color="${k(E)}" stop-opacity="1.0"/>`,s+=`<stop offset="100%" stop-color="${k(E)}" stop-opacity="0.3"/>`,n||(s+=`<animate attributeName="x1" from="-0.5" to="0.5" dur="${N}s" repeatCount="indefinite"/>`,s+=`<animate attributeName="x2" from="0.5" to="1.5" dur="${N}s" repeatCount="indefinite"/>`),s+="</linearGradient>"}else s+=`<linearGradient id="flow-g${$}" x1="0" y1="0" x2="1" y2="0">`,s+=`<stop offset="0%" stop-color="${k(E)}" stop-opacity="0.15"/>`,s+=`<stop offset="50%" stop-color="${k(E)}" stop-opacity="0.25"/>`,s+=`<stop offset="100%" stop-color="${k(E)}" stop-opacity="0.1"/>`,s+="</linearGradient>"}s+="</defs>";let F=T?"rgba(255, 152, 0, 0.15)":"color-mix(in srgb, var(--primary-text-color, #e5e5e7) 8%, transparent)",I=T?"rgba(255, 152, 0, 0.25)":"color-mix(in srgb, var(--primary-text-color, #e5e5e7) 15%, transparent)";s+=`<rect x="${g-m/2}" y="${v-d/2}" width="${m}" height="${d}" rx="8" fill="${k(F)}" stroke="${k(I)}" stroke-width="1"/>`,s+=`<text x="${g}" y="${v-d/2-6}" text-anchor="middle" font-size="10" fill="var(--secondary-text-color, #8e8e93)">Boiler</text>`;for(let $=0;$<o.length;$++){let x=o[$],E=p+$*l+20,z=x.power>0?_+x.power/100*(b-_):_,N=x.power>0||x.hvacAction==="heating"||x.hvacAction==="cooling",Z=N?' class="pc-ribbon-active"':"",M=v+($-(o.length-1)/2)*w,L=In(M,E,z/2,z/2,c,g+m/2,y-12);if(s+=`<path d="${L}" fill="url(#flow-g${$})"${Z}${N?' filter="url(#flow-glow)"':""} data-zone="${h(x.name)}" data-zone-idx="${$}">`,s+=`<title>${h(x.name)}: ${Math.round(x.power)}% heating power</title></path>`,x.power>0&&!n){let Y=cn(x.power,20,C),K=ln(x.power),et=pn(z,b),B=(et*.8).toFixed(1),U=Mo(M,E,g+m/2,y-12);s+=`<g class="pc-flow-particles" data-zone="${h(x.name)}" data-zone-idx="${$}" style="will-change:transform">`;for(let R=0;R<Y;R++){let q=(R*(K/Y)).toFixed(2);s+=`<circle r="${et.toFixed(1)}" fill="${k(S)}" opacity="0.8"`,s+=` filter="drop-shadow(0 0 ${B}px ${k(S)})">`,s+=`<animateMotion dur="${K.toFixed(1)}s" begin="${q}s" repeatCount="indefinite"`,s+=` path="${U}"/>`,s+="</circle>"}s+="</g>"}let P=N?"var(--primary-text-color, #e5e5e7)":"var(--secondary-text-color, #a1a1a6)",O=N?' font-weight="600"':"";s+=`<text x="${y}" y="${(E-1).toFixed(1)}" font-size="11" fill="${k(P)}"${O}>${h(x.name)}</text>`;let H=N?k(S):"var(--secondary-text-color, #8e8e93)",W=N?`${x.hvacAction==="cooling"?"Cooling":"Heating"} ${Math.round(x.power)}%${x.temp!==null?` \xB7 ${G(x.temp)}${x.unit}`:""}`:`Idle${x.temp!==null?` \xB7 ${G(x.temp)}${x.unit}`:""}`;s+=`<text x="${y}" y="${(E+12).toFixed(1)}" font-size="9" fill="${H}">${h(W)}</text>`}return s+="</svg>",s+="</div>",s}function Mn(e,t,i,n){if(!e||!t||t.length===0)return!1;let o=e.querySelector("svg");if(!o)return!1;let r=[];for(let $ of t){let x=$.entity,E=D(x),z=n?.zoneEntities?.[E]||{},N=J(x,z,i,$,{});r.push({name:N.name,power:N.heatingPower,temp:N.currentTemp,unit:N.unit,hvacAction:N.hvacAction})}let a=o.querySelectorAll("path[data-zone]");if(a.length!==r.length)return!1;let s=mt.heating.fallback,c="var(--disabled-color, #9E9E9E)",l=r.some($=>$.power>0||$.hvacAction==="heating"||$.hvacAction==="cooling"),p=360,u=r.length<=3?44:r.length<=6?38:34,f=15,d=Math.max(80,r.length*u+30),m=r.length*u,g=Math.max(40,Math.min(m*.7,m-16)),y=Math.max(36,g*.6),v=Math.max(50,y/2+14),b=p-60,_=d/2,w=22,S=2,A=g/Math.max(r.length,1)*.7,T=Math.round(r.reduce(($,x)=>$+x.power,0)/r.length),C=e.querySelector(".energy-flow-header-value");C&&(C.textContent=`${T}% avg`);let F=o.querySelector("rect");F&&(F.setAttribute("fill",l?"rgba(255, 152, 0, 0.15)":"color-mix(in srgb, var(--primary-text-color, #e5e5e7) 8%, transparent)"),F.setAttribute("stroke",l?"rgba(255, 152, 0, 0.25)":"color-mix(in srgb, var(--primary-text-color, #e5e5e7) 15%, transparent)"),F.setAttribute("stroke-width",l?"0.5":"1"));let I=o.querySelectorAll("text");for(let $=0;$<r.length;$++){let x=r[$],E=a[$],z=x.power>0||x.hvacAction==="heating"||x.hvacAction==="cooling",N=f+$*u+20,Z=x.power>0?S+x.power/100*(w-S):S,M=_+($-(r.length-1)/2)*A,L=In(M,N,Z/2,Z/2,p,v+y/2,b-12);E.setAttribute("d",L),z?(E.classList.add("pc-ribbon-active"),E.setAttribute("filter","url(#flow-glow)")):(E.classList.remove("pc-ribbon-active"),E.removeAttribute("filter"));let P=E.querySelector("title");P&&(P.textContent=`${x.name}: ${Math.round(x.power)}% heating power`);let O=o.querySelector(`g.flow-particles[data-zone-idx="${$}"]`);O&&(O.style.display=x.power>0?"":"none");let H=o.querySelector(`#flow-g${$}`);if(H){let B=z?s:c,U=H.querySelectorAll("stop"),R=H.querySelectorAll("animate");if(z){let q=x.power>0?(4.5-x.power/100*3.3).toFixed(1):"5.0";U.length>=3&&(U[0].setAttribute("stop-color",B),U[0].setAttribute("stop-opacity","0.3"),U[1].setAttribute("stop-color",B),U[1].setAttribute("stop-opacity","1.0"),U[2].setAttribute("stop-color",B),U[2].setAttribute("stop-opacity","0.3"));for(let V of R)V.setAttribute("dur",`${q}s`);H.setAttribute("gradientUnits","objectBoundingBox")}else{U.length>=3&&(U[0].setAttribute("stop-color",B),U[0].setAttribute("stop-opacity","0.15"),U[1].setAttribute("stop-color",B),U[1].setAttribute("stop-opacity","0.25"),U[2].setAttribute("stop-color",B),U[2].setAttribute("stop-opacity","0.1"));for(let q of R)q.remove()}}let W=1+$*2,Y=2+$*2,K=I[W],et=I[Y];if(K&&(K.textContent=x.name,K.setAttribute("fill",z?"var(--primary-text-color, #e5e5e7)":"var(--secondary-text-color, #a1a1a6)"),z?K.setAttribute("font-weight","600"):K.removeAttribute("font-weight")),et){let B=z?`${x.hvacAction==="cooling"?"Cooling":"Heating"} ${Math.round(x.power)}%${x.temp!==null?` \xB7 ${G(x.temp)}${x.unit}`:""}`:`Idle${x.temp!==null?` \xB7 ${G(x.temp)}${x.unit}`:""}`;et.textContent=B,et.setAttribute("fill",z?s:"var(--secondary-text-color, #8e8e93)")}}return!0}var Ln=6,Fe=2;function Ee(e,t,i,n,o,r){let a=o*Math.PI/180,s=r*Math.PI/180,c=r-o>180?1:0;return`M${(e+i*Math.cos(a)).toFixed(2)},${(t+i*Math.sin(a)).toFixed(2)} A${i.toFixed(2)},${i.toFixed(2)} 0 ${c} 1 ${(e+i*Math.cos(s)).toFixed(2)},${(t+i*Math.sin(s)).toFixed(2)} L${(e+n*Math.cos(s)).toFixed(2)},${(t+n*Math.sin(s)).toFixed(2)} A${n.toFixed(2)},${n.toFixed(2)} 0 ${c} 0 ${(e+n*Math.cos(a)).toFixed(2)},${(t+n*Math.sin(a)).toFixed(2)} Z`}function Ie(e,t,i,n,o){if(!e||e.length===0)return"";let r=nt(),a=Number(t?.size)||280,s=t?.attribute||"temperature",c=s==="temperature"||s==="both",l=s==="humidity"||s==="both",p=a/2,u=a/2,f=a*120/280,d=1.5,y=(360-d*e.length)/e.length,v=[];for(let M of e){let L=M.entity,P=D(L),O=n?.zoneEntities?.[P]||{},H=J(L,O,i,M,{});v.push({name:H.name,temp:H.currentTemp,target:H.targetTemp,power:H.heatingPower,humidity:H.humidity,hvacAction:H.hvacAction,entityId:L,unit:H.unit})}let b=t?.outdoor_temp_entity,_=b||n?.hubEntities?.outside_temp,w=null;if(_&&i[_]){let M=i[_];M.state!=="unavailable"&&M.state!=="unknown"&&(w=M.attributes?.temperature!==void 0?String(M.attributes.temperature):M.state)}let S=_&&i[_]?.attributes?.unit_of_measurement||"\xB0C",A=t?.outdoor_humidity_entity,T=null;if(A&&i[A]){let M=i[A];M.state!=="unavailable"&&M.state!=="unknown"&&(T=M.attributes?.humidity!==void 0?String(M.attributes.humidity):M.state)}let C="",F=s==="humidity"?T!==null?`${h(T)}%`:"--":w!==null?`${h(w)}${h(S)}`:"--";s!=="humidity"&&l&&T!==null&&(C=`${h(T)}%`);let $={temperature:"Home Thermal View",humidity:"Home Humidity View",both:"Home Climate View"}[s]||"Home Thermal View",x=`<div class="pc-section pc-section-radial" data-attribute="${h(s)}"${b?` data-outdoor-temp-entity="${h(b)}"`:""}${A?` data-outdoor-humidity-entity="${h(A)}"`:""}>`;x+=`<div class="pulse-section-label">${h($)}</div>`,x+='<div class="pc-radial-container">';let E=`r${Math.random().toString(36).slice(2,9)}`,z=`radial-glow-${E}`,N=M=>`heat-shimmer-${E}-${M}`;if(x+=`<svg viewBox="0 0 ${a} ${a}" width="${a}" height="${a}" role="img" aria-label="${h($)}" style="display:block;margin:0 auto">`,x+="<defs>",x+=`<filter id="${z}"><feGaussianBlur stdDeviation="${$t(a,280).toFixed(1)}" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`,!r)for(let M=0;M<v.length;M++){let L=v[M],P=le(L.power,a);if(P<=0)continue;let O=45/Math.max(y,10),H=(.02*O).toFixed(4),W=(.04*O).toFixed(4);x+=`<filter id="${N(M)}" x="-5%" y="-5%" width="110%" height="110%">`,x+=`<feTurbulence type="turbulence" baseFrequency="${H} ${W}" numOctaves="2" result="turb">`,x+=`<animate attributeName="baseFrequency" values="${H} ${W};${(parseFloat(H)*1.5).toFixed(4)} ${W};${H} ${W}" dur="4s" repeatCount="indefinite"/>`,x+="</feTurbulence>",x+=`<feDisplacementMap in="SourceGraphic" in2="turb" scale="${P.toFixed(1)}" xChannelSelector="R" yChannelSelector="G"/>`,x+="</filter>"}x+="</defs>";for(let M=0;M<v.length;M++){let L=v[M],P=M*(y+d)-90,O=P+y,H=L.power>0||L.hvacAction==="heating"||L.hvacAction==="cooling",W=H?" pc-arc-active":"",Y=[h(L.name)];c&&Y.push(L.temp!==null?`${G(L.temp)}${L.unit}`:"--"),l&&L.humidity!==null&&Y.push(`${Math.round(L.humidity)}%`),Y.push(H?`${L.hvacAction==="cooling"?"Cooling":"Heating"} ${L.power}%`:"Idle");let K=Y.join(", ");x+=`<g class="pc-arc-group${W}" data-idx="${M}">`;let et=l&&s==="both"?f+Fe+Ln+4:f+4,B=f-28-4,U=Ee(p,u,et,B,P-d/2,O+d/2);if(x+=`<path d="${U}" fill="transparent" class="pc-arc-hit"/>`,c){let R=L.temp!==null?j(L.temp):"var(--disabled-color, #9E9E9E)",q=8+L.power/100*20,V=f-q,X=Ee(p,u,f,V,P,O);if(x+=`<path d="${X}" fill="${k(R)}" class="pc-arc-path"`,le(L.power,a)>0&&!r?x+=` filter="url(#${N(M)})"`:H&&(x+=` filter="url(#${z})"`),x+=`><title>${K}</title>`,H&&!r){let Mt=L.power>0?(4.5-L.power/100*3).toFixed(1):"5.0";x+=`<animate attributeName="opacity" values="1;0.82;1" dur="${Mt}s" repeatCount="indefinite"/>`}x+="</path>"}if(l&&L.humidity!==null){let R=Et(L.humidity),q,V;if(s==="both")q=f+Fe+Ln,V=f+Fe;else{let ht=8+L.power/100*20;q=f,V=f-ht}let X=Ee(p,u,q,V,P,O);x+=`<path d="${X}" fill="${k(R)}" class="pc-arc-path" opacity="0.8">`,x+=`<title>${K}</title>`,x+="</path>"}x+="</g>"}x+="</svg>";let Z=Math.round((f-28)*2);x+=`<div class="pc-center-info" id="radial-center" style="width:${Z}px;height:${Z}px">`,x+='<div class="pc-center-sheen" id="radial-sheen"></div>',x+=`<div class="pc-center-value">${F}</div>`,x+='<div class="pc-center-label">Outdoor</div>',x+=`<div class="pc-center-sub">${C}</div>`,x+="</div>",x+="</div>",x+='<div class="pc-zone-detail" id="radial-detail"></div>',x+='<div class="pc-radial-legend">';for(let M=0;M<v.length;M++){let L=v[M],P=s==="humidity"?L.humidity!==null?Et(L.humidity):"var(--disabled-color, #9E9E9E)":L.temp!==null?j(L.temp):"var(--disabled-color, #9E9E9E)",O="";c&&(O+=L.temp!==null?`${G(L.temp)}${L.unit}`:"--"),c&&l&&(O+=" \xB7 "),l&&(O+=L.humidity!==null?`${Math.round(L.humidity)}%`:"--"),x+=`<div class="pc-legend-item" data-idx="${M}">`,x+=`<span class="pc-legend-dot" style="background:${k(P)}"></span>`,x+=`${h(L.name)} <span class="pc-legend-temp">${h(O)}</span>`,x+="</div>"}return x+="</div>",x+="</div>",x}var Lo=5,zn={green:"var(--label-badge-green, #4CAF50)",amber:"var(--label-badge-yellow, #FF9800)",red:"var(--label-badge-red, #F44336)"},zo={green:"mdi:check-circle",amber:"mdi:progress-clock",red:"mdi:alert-circle"};function No(e){if(e.length===0)return{label:"All Good",color:"green",detail:"All zones off"};let t=e.filter(r=>r.currentTemp!==null&&r.currentTemp!==void 0&&r.targetTemp!==null&&r.targetTemp!==void 0&&Math.abs(r.currentTemp-r.targetTemp)<=1).length,i=e.length,n=t/i,o=i-t;return n>=.8?{label:"All Good",color:"green",detail:`${t} of ${i} zones at target`}:n>=.4?{label:"Warming Up",color:"amber",detail:`${o} zone${o!==1?"s":""} still catching up`}:{label:"Cold Start",color:"red",detail:`${o} of ${i} zones below target`}}function Ho(e){let t=[],i=[],n=[];for(let o of e)o.isUnavailable?n.push(o):o.hvacAction==="off"||!o.targetTemp?i.push(o):t.push(o);return t.sort((o,r)=>{let a=o.currentTemp!==null&&o.currentTemp!==void 0&&o.targetTemp!==null?Math.abs(o.currentTemp-o.targetTemp):0;return(r.currentTemp!==null&&r.currentTemp!==void 0&&r.targetTemp!==null?Math.abs(r.currentTemp-r.targetTemp):0)-a}),i.sort((o,r)=>o.name.localeCompare(r.name)),n.sort((o,r)=>o.name.localeCompare(r.name)),[...t,...i,...n]}function Ro(e){if(e.length===0)return{onTarget:"--",avgActual:"--",avgTarget:"--",avgPower:"--"};let t=e.filter(s=>s.currentTemp!==null&&s.currentTemp!==void 0&&s.targetTemp!==null&&s.targetTemp!==void 0&&Math.abs(s.currentTemp-s.targetTemp)<=1).length,i=e.length,n=(e.reduce((s,c)=>s+(c.currentTemp??0),0)/i).toFixed(1),o=(e.reduce((s,c)=>s+(c.targetTemp??0),0)/i).toFixed(1),r=Math.round(e.reduce((s,c)=>s+c.heatingPower,0)/i),a=e[0].unit||"\xB0C";return{onTarget:`${t}/${i}`,avgActual:`${n}${a}`,avgTarget:`${o}${a}`,avgPower:`${r}%`}}function Do(e){let t=h(e.entityId),i=h(e.name),n=h(e.unit||"\xB0C"),o=!e.isUnavailable&&e.hvacAction!=="off"&&e.targetTemp,r,a;if(e.isUnavailable)r='<span class="pc-home-status-actual pc-off">--</span><span class="pc-home-status-arrow">\u2192</span><span class="pc-home-status-target">Unavailable</span>',a='<div class="pc-home-status-delta"><div class="pc-home-status-bar-track"><div class="pc-home-status-bar-center"></div></div><span class="pc-home-status-delta-text" style="color:var(--secondary-text-color, #9E9E9E)">--</span></div>';else if(!o)r=`<span class="pc-home-status-actual pc-off">${e.currentTemp!==null&&e.currentTemp!==void 0?`${h(e.currentTemp)}${n}`:"--"}</span><span class="pc-home-status-arrow"></span><span class="pc-home-status-target">Off</span>`,a='<div class="pc-home-status-delta"><div class="pc-home-status-bar-track"><div class="pc-home-status-bar-center"></div></div><span class="pc-home-status-delta-text" style="color:var(--secondary-text-color, #9E9E9E)">Off</span></div>';else if(r=`<span class="pc-home-status-actual">${e.currentTemp!==null&&e.currentTemp!==void 0?`${h(e.currentTemp)}${n}`:"--"}</span><span class="pc-home-status-arrow">\u2192</span><span class="pc-home-status-target">${h(e.targetTemp)}${n}</span>`,e.currentTemp!==null&&e.currentTemp!==void 0){let c=e.currentTemp-e.targetTemp,l=Math.abs(c),p=Math.min(l/Lo,1)*50,u=c<0?`${k(50-p)}%`:"50%",f=`${k(p)}%`,d=l<1?"green":l<=2.5?"amber":"red",m=zn[d],y=`${c>=0?"+":"\u2212"}${h(l.toFixed(1))}\xB0`;a=`<div class="pc-home-status-delta"><div class="pc-home-status-bar-track"><div class="pc-home-status-bar-center"></div><div class="pc-home-status-bar-fill" style="left:${u};width:${f};background:${k(m)}"></div></div><span class="pc-home-status-delta-text" style="color:${k(m)}">${y}</span></div>`}else a='<div class="pc-home-status-delta"><div class="pc-home-status-bar-track"><div class="pc-home-status-bar-center"></div></div><span class="pc-home-status-delta-text" style="color:var(--secondary-text-color, #9E9E9E)">--</span></div>';return`<div class="pc-home-status-row" role="button" tabindex="0" data-entity="${t}"><span class="pc-home-status-zone-name">${i}</span><div class="pc-home-status-temps">${r}</div>`+a+"</div>"}function Me(e,t,i){if(!e||e.length===0)return"";let n=e.map(u=>{let f=u.entity,d=D(f),m=i?.zoneEntities?.[d]||{};return J(f,m,t,u,{})}),o=n.filter(u=>!u.isUnavailable&&u.hvacAction!=="off"&&u.targetTemp),r=No(o),a=zn[r.color],s=zo[r.color],c=Ho(n),l=Ro(o),p='<div class="pc-section pc-section-home-status">';p+='<div class="pulse-section-label">Home Status</div>',p+='<div class="pc-home-status-hero">',p+=`<ha-icon class="pc-home-status-icon" icon="${h(s)}" style="color:${k(a)}"></ha-icon>`,p+=`<div class="pc-home-status-label" style="color:${k(a)}">${h(r.label)}</div>`,p+=`<div class="pc-home-status-detail">${h(r.detail)}</div>`,p+="</div>",p+='<div class="pc-home-status-zones">';for(let u of c)p+=Do(u);return p+="</div>",p+='<div class="pc-home-status-summary">',p+=`<div class="pc-stat"><div class="pc-stat-value">${h(l.onTarget)}</div><div class="pc-stat-label">On Target</div></div>`,p+=`<div class="pc-stat"><div class="pc-stat-value">${h(l.avgActual)}</div><div class="pc-stat-label">Avg Actual</div></div>`,p+=`<div class="pc-stat"><div class="pc-stat-value">${h(l.avgTarget)}</div><div class="pc-stat-label">Avg Target</div></div>`,p+=`<div class="pc-stat"><div class="pc-stat-value">${h(l.avgPower)}</div><div class="pc-stat-label">Avg Power</div></div>`,p+="</div>",p+="</div>",p}var Le={comfort:"comfort_level"};function Po(e,t,i,n){if(!(e in Le))return!0;let o=Le[e];if(!t||t.length===0)return!1;for(let r of t){let a=D(r.entity),c=(i?.zoneEntities?.[a]||{})[o];if(c&&n[c]&&n[c].state!=="unavailable")return!0}return!1}function Nn(e,t,i,n){let o=Le[e];if(!o)return null;let a=(i?.zoneEntities?.[t]||{})[o];if(!a)return null;let s=n[a];if(!s||s.state==="unavailable"||s.state==="unknown")return null;if(e==="comfort"){let l=s.attributes||{},p=parseFloat(l.temperature),u=parseFloat(l.comfort_target);if(!Number.isFinite(p)||!Number.isFinite(u))return null;let f=Math.abs(p-u);return Math.max(0,Math.min(100,Math.round(100-f*10)))}let c=parseFloat(s.state);return Number.isFinite(c)?c:null}function Hn(e,t,i){let n=["power","temp","humidity"];return Po("comfort",e,t,i)&&n.push("comfort"),n}var Rn="var(--info-color, #5AC8FA)";function qo(e){return e<=40?"var(--label-badge-green, #4CAF50)":e<=70?"var(--label-badge-yellow, #FF9800)":"var(--label-badge-red, #F44336)"}function Oo(e){return e>=80?"var(--label-badge-green, #4CAF50)":e>=50?"var(--label-badge-yellow, #FF9800)":"var(--label-badge-red, #F44336)"}var Dn={power:{label:"Power",unit:"%",max:100,colorFn:qo},temp:{label:"Temp",unit:null,max:null,colorFn:()=>Rn},humidity:{label:"Humidity",unit:"%",max:100,colorFn:()=>Rn},comfort:{label:"Comfort",unit:"",max:100,colorFn:Oo}};function Vo(e,t,i,n,o){if(t.isUnavailable)return null;switch(e){case"power":return t.heatingPower;case"temp":return t.currentTemp;case"humidity":return t.humidity;case"comfort":return Nn("comfort",i,n,o);default:return null}}function Bo(e,t){let i=e.filter(c=>c!=null);if(i.length===0)return{avg:"--",high:"--",low:"--",spread:"--"};let n=(i.reduce((c,l)=>c+l,0)/i.length).toFixed(1),o=Math.max(...i),r=Math.min(...i),a=(o-r).toFixed(1),s=t||"";return{avg:`${n}${s}`,high:`${Number.isInteger(o)?o:o.toFixed(1)}${s}`,low:`${Number.isInteger(r)?r:r.toFixed(1)}${s}`,spread:`${a}${s}`}}function Jt(e,t,i,n="power"){if(!e||e.length===0)return"";let o=Hn(e,i,t),r=o.includes(n)?n:"power",a=Dn[r];if(!a)return"";let s=[];for(let m of e){let g=m.entity,y=D(g),v=i?.zoneEntities?.[y]||{},b=J(g,v,t,m,{}),_=Vo(r,b,y,i,t);s.push({entityId:g,name:b.name,value:_,unit:b.unit||"\xB0C"})}s.sort((m,g)=>m.value===null&&g.value===null?0:m.value===null?1:g.value===null?-1:g.value-m.value);let c=s.map(m=>m.value).filter(m=>m!==null),l=a.max;l===null&&(l=c.length>0?Math.max(...c,30):30);let p=a.unit!==null?a.unit:s[0]?.unit||"\xB0C",u=`<div class="pc-section pc-section-zone-ranking" data-metric="${h(r)}">`;u+='<div class="pc-ranking-header">',u+='<div class="pulse-section-label">Zone Ranking</div>',u+='<div class="pc-ranking-tabs">';for(let m of o){let g=Dn[m];if(!g)continue;u+=`<div class="pc-ranking-tab${m===r?" pc-active":""}" data-metric="${h(m)}">${h(g.label)}</div>`}u+="</div></div>",u+='<div class="pc-ranking-list">';for(let m=0;m<s.length;m++){let g=s[m],y=m+1,v=y===1&&g.value!==null?" pc-top":"",b=g.value!==null&&l>0?Math.round(g.value/l*100):0,_=g.value!==null?a.colorFn(g.value):"",w=g.value!==null?`${b}%`:"0%",S;g.value===null?S="--":r==="temp"?S=`${g.value}${g.unit}`:S=`${g.value}${p}`,u+=`<div class="pc-rank-row" role="button" tabindex="0" data-entity="${h(g.entityId)}">`,u+=`<div class="pc-rank-num${v}">${y}</div>`,u+=`<div class="pc-rank-name">${h(g.name)}</div>`,u+=`<div class="pc-rank-bar-track"><div class="pc-rank-bar-fill" style="width:${k(w)};background:${k(_)}"></div></div>`,u+=`<div class="pc-rank-value">${h(S)}</div>`,u+="</div>"}u+="</div>";let f=s.map(m=>m.value),d=Bo(f,p);return u+='<div class="pc-ranking-summary">',u+=`<div class="pc-stat"><div class="pc-stat-value">${h(d.avg)}</div><div class="pc-stat-label">Average</div></div>`,u+=`<div class="pc-stat"><div class="pc-stat-value">${h(d.high)}</div><div class="pc-stat-label">Highest</div></div>`,u+=`<div class="pc-stat"><div class="pc-stat-value">${h(d.low)}</div><div class="pc-stat-label">Lowest</div></div>`,u+=`<div class="pc-stat"><div class="pc-stat-value">${h(d.spread)}</div><div class="pc-stat-label">Spread</div></div>`,u+="</div>",u+="</div>",u}var Pn=!1,Uo=typeof CSSStyleSheet<"u"&&typeof CSSStyleSheet.prototype.replaceSync=="function"&&typeof document<"u"&&"adoptedStyleSheets"in document.createElement("div").attachShadow({mode:"open"}),qn=Uo?(()=>{let e=new CSSStyleSheet;return e.replaceSync(ae),e})():null,Wo=new Set(["zones","api","graph","bridge","thermal_strip","comfort_strip","homekit","weather","radial","donut"]),Go={zones:".pc-section-zones",api:".pc-section-api",graph:".pc-section-graph",bridge:".pc-section-bridge",thermal_strip:".pc-section-thermal-strip",comfort_strip:".pc-section-comfort-strip",homekit:".pc-section-homekit",weather:".pc-section-weather",radial:".pc-section-radial",donut:".pc-section-donut",environment:".pc-section-environment",thermal:".pc-section-thermal",schedule:".pc-section-schedule",energy_flow:".pc-section-energy-flow",home_status:".pc-section-home-status",zone_ranking:".pc-section-zone-ranking"},ze=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_elements={};_discovery=null;_historyCache;_shadow;_countdownTimer=null;_historyFetchInProgress=!1;_rafId=null;_lastUpdateTime=0;_rerenderTargets=null;_chipAbort=null;_sectionChipAbort=null;_radialAbort=null;_timelineAbort=null;_heatmapAbort=null;_energyFlowAbort=null;_sparklineAbort=null;_sparklinePathCache=new Map;_radialAnimState={shimmer:!1,sheen:!1};_historyGen=0;constructor(){super(),this._shadow=this.attachShadow({mode:"open"}),this._historyCache=bn()}setConfig(t){this._stopRadialAnimations(),this._historyGen++,this._config=dn(t),this._discovery=null,this._prevStates={},this._elements={},this._hass&&(this._runDiscovery(),this._fullRender()),this._buildRerenderTargets()}set hass(t){if(this._hass=t,!!this._config){if(!this._discovery){this._runDiscovery(),this._fullRender(),this._refreshHistoryIfNeeded();return}this._rafId||(this._rafId=requestAnimationFrame(()=>{if(this._rafId=null,!this._hass||!this._config||!this._discovery)return;let i=Date.now();if(i-this._lastUpdateTime<200)return;this._lastUpdateTime=i;let n=this._hass.states;(this._config._zones||[]).some(r=>n[r.entity]!==this._prevStates[r.entity])&&this._updateZones(),this._updateSections(),this._refreshHistoryIfNeeded(),this._cacheWatchedStates()}))}}_runDiscovery(){if(!this._hass||!this._config)return;this._historyGen++;let i=(this._config._zones||[]).map(n=>D(n.entity));if(this._discovery=mn(this._hass.states,i,this._hass.entities),!Pn&&this._discovery.isTadoCE){Pn=!0;let n=Object.entries(this._discovery.hubEntities).map(([o,r])=>`${o}=${r}`);console.info("Pulse Climate: hub discovery \u2014 found:",n.join(", ")),this._discovery.missingHubKeys.length>0&&console.warn("Pulse Climate: hub discovery \u2014 missing:",this._discovery.missingHubKeys.join(", "))}this._buildRerenderTargets()}_rebuildSparklinePathCache(){this._sparklinePathCache.clear();let t=this._historyCache?.data;if(t)for(let[i,n]of Object.entries(t)){if(!n||n.length<2)continue;let o=ct(n,340,36,48);o&&this._sparklinePathCache.set(i,o)}}_buildRerenderTargets(){if(!this._config||!this._discovery)return;let t=this._discovery,i=t.hubEntities,n=this._config._zones||[];this._rerenderTargets=[{selector:".pc-section-zones",watchIds:[i.home_state].filter(Boolean),render:()=>{let o=this._config,r=this._hass?.states||{};return he(n,o,r,t,this._historyCache)}},{selector:".pc-section-api",watchIds:[i.api_usage,i.api_limit,i.api_status,i.next_sync,i.token_status].filter(Boolean),render:()=>{let o=this._hass?.states||{},a=(this._config?.sections||[{type:"zones"}]).find(s=>(typeof s=="string"?s:s.type)==="api")||{};return fe(i,o,a,this._historyCache)}},{selector:".pc-section-homekit",watchIds:[i.homekit_connected,i.homekit_reads_saved,i.homekit_writes_saved].filter(Boolean),render:()=>{let o=this._hass?.states||{};return ge(i,o,this._historyCache)}},{selector:".pc-section-bridge",watchIds:[i.bridge_connected,i.boiler_flow_temp,i.wc_status,i.wc_target_flow].filter(Boolean),render:()=>{let o=this._hass?.states||{};return me(i,o,this._historyCache)}},{selector:".pc-section-weather",watchIds:[i.outside_temp,i.weather,i.solar_intensity].filter(Boolean),render:()=>{let o=this._hass?.states||{};return ve(i,o,this._historyCache)}},{selector:".pc-section-environment",watchIds:n.flatMap(o=>{let r=D(o.entity),a=t.zoneEntities?.[r]||{};return[a.mold_risk,a.condensation,a.comfort_level,a.surface_temp,a.dew_point].filter(Boolean)}),render:()=>{let o=this._hass?.states||{};return be(n,o,t)}},{selector:".pc-section-thermal",watchIds:n.flatMap(o=>{let r=D(o.entity),a=t.zoneEntities?.[r]||{};return[a.heating_rate,a.thermal_inertia,a.preheat_time,a.confidence].filter(Boolean)}),render:()=>{let o=this._hass?.states||{};return _e(n,o,t)}},{selector:".pc-section-schedule",watchIds:n.flatMap(o=>{let r=D(o.entity),a=t.zoneEntities?.[r]||{};return[a.next_schedule,a.next_sched_temp,a.schedule_deviation,a.preheat_advisor,a.comfort_target].filter(Boolean)}),render:()=>{let o=this._hass?.states||{};return ye(n,o,t)}},{selector:".pc-section-radial",watchIds:n.map(o=>o.entity),render:()=>{let o=this._hass?.states||{},a=(this._config?.sections||[{type:"zones"}]).find(s=>(typeof s=="string"?s:s.type)==="radial")||{};return Ie(n,a,o,t,this._historyCache)}},{selector:".pc-section-donut",watchIds:(()=>{let a=(this._config?.sections||[]).find(s=>(typeof s=="string"?s:s.type)==="donut")?.source;return a==="api_breakdown"&&i.api_breakdown?[i.api_breakdown]:a==="homekit_saved"?[i.homekit_reads_saved,i.homekit_writes_saved].filter(Boolean):[]})(),render:()=>{let o=this._hass?.states||{},a=(this._config?.sections||[]).find(s=>(typeof s=="string"?s:s.type)==="donut")||{};return Se(a,i,o)}},{selector:".pc-section-graph",watchIds:[],render:()=>{let o=this._hass?.states||{},a=(this._config?.sections||[{type:"zones"}]).find(s=>(typeof s=="string"?s:s.type)==="graph")||{};return $e(a,n,this._historyCache,o,t)}},{selector:".pc-section-home-status",watchIds:n.map(o=>o.entity),render:()=>{let o=this._hass?.states||{};return Me(n,o,t)}},{selector:".pc-section-zone-ranking",watchIds:n.map(o=>o.entity),render:()=>{let o=this._hass?.states||{},a=this._shadow.querySelector(".pc-section-zone-ranking")?.getAttribute("data-metric")||"power";return Jt(n,o,t,a)}}]}_fullRender(){if(!this._config||!this._hass||!this._discovery)return;let t=this._config,i=this._hass.states,n=this._discovery,o=t._zones||[],r=t.layout==="compact",a=t.entity_row===!0,s="";qn?this._shadow.adoptedStyleSheets=[qn]:s+=`<style>${ae}</style>`,a||(s+=`<ha-card${r?' class="pc-compact"':""}>`),t.title&&(s+=`<div class="pulse-title">${h(t.title)}</div>`);let c=t.sections||[{type:"zones"}];for(let l of c)s+=this._renderSection(l,o,i,n);a||(s+="</ha-card>"),this._shadow.innerHTML=s,this._elements.zonesSection=this._shadow.querySelector(".pc-section-zones"),this._elements.apiSection=this._shadow.querySelector(".pc-section-api"),this._cacheWatchedStates(),this._bindZoneActions(),this._bindChipActions(),this._bindSectionInteractions(),this._bindSectionChipActions(),this._startCountdownTimer()}_bindZoneActions(){if(!this._config||!this._hass)return;let t=this._shadow.querySelectorAll(".pc-zone-row"),i=this._config._zones||[];for(let n=0;n<t.length&&n<i.length;n++){let o=t[n],r=i[n],a=r.entity,s=o.__pulseCleanup;typeof s=="function"&&s();let c=new AbortController,{signal:l}=c,p=0,u=null,f=null,d=!1;o.__pulseCleanup=()=>{c.abort(),u&&clearTimeout(u),f&&clearTimeout(f),delete o.__pulseCleanup},o.addEventListener("keydown",g=>{let y=g;(y.key==="Enter"||y.key===" ")&&(y.preventDefault(),this._fireAction(a,r,"tap_action"))},{signal:l}),o.addEventListener("click",g=>{if(g.preventDefault(),d){d=!1;return}p++,p===1?u=setTimeout(()=>{p=0,this._fireAction(a,r,"tap_action")},250):p===2&&(u&&clearTimeout(u),p=0,this._fireAction(a,r,"double_tap_action"))},{signal:l}),o.addEventListener("pointerdown",()=>{d=!1,f=setTimeout(()=>{d=!0,this._fireAction(a,r,"hold_action")},500)},{signal:l});let m=()=>{f&&clearTimeout(f)};o.addEventListener("pointerup",m,{signal:l}),o.addEventListener("pointercancel",m,{signal:l}),o.addEventListener("contextmenu",g=>g.preventDefault(),{signal:l}),it(o)}}_bindSectionInteractions(){this._bindRadialInteractions(),this._bindTimelineInteractions(),this._bindHeatmapInteractions(),this._bindEnergyFlowInteractions(),this._bindSparklineCrosshairs(),this._bindZoneRankingTabs()}_bindChipActions(){if(!this._config||!this._hass)return;this._chipAbort&&this._chipAbort.abort(),this._chipAbort=new AbortController;let{signal:t}=this._chipAbort,i=this._config._zones||[],n=this._shadow.querySelectorAll(".pc-zone-row");for(let o=0;o<n.length&&o<i.length;o++){let r=i[o],a=r.entity,s=n[o].querySelectorAll(".pc-chip");for(let c of s){let l=c,p=l.dataset.chipType||"",u=l.dataset.entity||a,f=r.chip_actions,d=this._config.chip_actions,m=f?.[p]||d?.[p]||{},g=m.tap_action||{action:"more-info",entity:u},y=m.hold_action||{action:"none"};l.style.cursor="pointer",it(l),l.addEventListener("click",b=>{b.stopPropagation(),this._hass&&xt(this,this._hass,g,u,rt)},{signal:t});let v=null;l.addEventListener("pointerdown",b=>{b.stopPropagation(),v=setTimeout(()=>{!this._hass||y.action==="none"||xt(this,this._hass,y,u,rt)},500)},{signal:t}),l.addEventListener("pointerup",b=>{b.stopPropagation(),v&&clearTimeout(v)},{signal:t}),l.addEventListener("pointercancel",()=>{v&&clearTimeout(v)},{signal:t}),l.addEventListener("contextmenu",b=>b.preventDefault(),{signal:t})}}}_bindSectionChipActions(){this._sectionChipAbort&&this._sectionChipAbort.abort(),this._sectionChipAbort=new AbortController;let{signal:t}=this._sectionChipAbort,i=this._shadow.querySelectorAll(".pc-section [data-entity]");for(let n of i){let o=n;o.closest(".pc-zone-row")&&o.classList.contains("pc-chip")||o.classList.contains("pc-zone-row")||(o.style.cursor="pointer",it(o),o.addEventListener("click",r=>{r.stopPropagation();let a=o.dataset.entity;a&&Dt(this,"hass-more-info",{entityId:a})},{signal:t}))}}_startCountdownTimer(){this._countdownTimer&&clearInterval(this._countdownTimer);let t=this._shadow.querySelector(".chip-next-sync");if(!t)return;let i=Number(t.getAttribute("data-target"));if(!i||!isFinite(i))return;let n=()=>{let o=i-Date.now();if(o<=0){t.textContent="Next: now",this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null);return}let r=Math.floor(o/6e4),a=Math.floor(o%6e4/1e3);t.textContent=r>0?`Next: ${r}m ${a}s`:`Next: ${a}s`};n(),this._countdownTimer=setInterval(n,1e3)}_bindRadialInteractions(){this._radialAbort&&this._radialAbort.abort(),this._radialAbort=new AbortController;let{signal:t}=this._radialAbort,i=this._shadow.querySelectorAll(".pc-arc-group"),n=this._shadow.querySelectorAll(".pc-radial-legend .pc-legend-item"),o=this._shadow.querySelector("#radial-center"),r=this._shadow.querySelector("#radial-detail"),a=this._shadow.querySelector(".pc-section-radial svg");if(i.length===0||!o)return;let c=(a&&Number(a.getAttribute("width"))||280)/2,l=this._config?._zones||[],p=null,u=this._shadow.querySelector(".pc-section-radial")?.getAttribute("data-outdoor-temp-entity"),f=this._shadow.querySelector(".pc-section-radial")?.getAttribute("data-attribute")||"temperature",d=this._shadow.querySelector(".pc-section-radial")?.getAttribute("data-outdoor-humidity-entity"),m=()=>{let v=this._hass?.states||{},b=this._discovery,_=u||b?.hubEntities?.outside_temp,w="--",S="";if(f!=="humidity"&&_&&v[_]){let A=v[_];A.state!=="unavailable"&&A.state!=="unknown"&&(w=`${A.attributes?.temperature!==void 0?A.attributes.temperature:A.state}${A.attributes?.unit_of_measurement||"\xB0C"}`)}if(d&&v[d]){let A=v[d];if(A.state!=="unavailable"&&A.state!=="unknown"){let T=A.attributes?.humidity!==void 0?A.attributes.humidity:A.state;f==="humidity"?w=`${T}%`:S=`${T}%`}}return{center:w,centerSub:S}},g=v=>{let b=this._hass?.states||{},_=this._discovery;if(p===v){y();return}p=v;let w=l[v];if(!w)return;let S=w.entity,A=D(S),T=_?.zoneEntities?.[A]||{},C=Tt(S,b,w),{name:F,temp:I,target:$,humidity:x}=C,E=C.hvacAction,z=0;if(T.heating_power){let H=b[T.heating_power];H&&H.state!=="unavailable"&&(z=parseFloat(H.state)||0)}else b[S]?.attributes?.heating_power!==void 0&&(z=parseFloat(b[S].attributes.heating_power)||0);let Z=z>0||E==="heating"||E==="cooling"?`${E==="cooling"?"Cooling":"Heating"} ${Math.round(z)}%`:"Idle",M=o.querySelector(".pc-center-value"),L=o.querySelector(".pc-center-label"),P=o.querySelector(".pc-center-sub");M&&(M.textContent=I!==void 0?`${G(I)}${C.unit}`:"--"),L&&(L.textContent=F);let O=x!==void 0?` \xB7 ${x}%`:"";P&&(P.textContent=`${Z}${O}`),i.forEach((H,W)=>{H.classList.toggle("pc-dimmed",W!==v),H.classList.toggle("pc-selected",W===v),W===v?H.setAttribute("transform",`translate(${c}, ${c}) scale(1.06) translate(${-c}, ${-c})`):H.removeAttribute("transform")}),n.forEach((H,W)=>{H.classList.toggle("pc-selected",W===v)}),r&&(r.innerHTML=`<div class="pc-detail-stats">
          <div class="pc-stat"><div class="pc-stat-value">${$!==void 0?h($)+h(C.unit):"--"}</div><div class="pc-stat-label">Target</div></div>
          <div class="pc-stat"><div class="pc-stat-value">${x!==void 0?h(x)+"%":"--"}</div><div class="pc-stat-label">Humidity</div></div>
          <div class="pc-stat"><div class="pc-stat-value">${h(E)}</div><div class="pc-stat-label">Action</div></div>
        </div>`,r.classList.add("pc-active"))},y=()=>{p=null;let{center:v,centerSub:b}=m(),_=o.querySelector(".pc-center-value"),w=o.querySelector(".pc-center-label"),S=o.querySelector(".pc-center-sub");_&&(_.textContent=v),w&&(w.textContent="Outdoor"),S&&(S.textContent=b),i.forEach(A=>{A.classList.remove("pc-dimmed","pc-selected"),A.removeAttribute("transform")}),n.forEach(A=>{A.classList.remove("pc-selected")}),r&&(r.classList.remove("pc-active"),r.innerHTML="")};if(i.forEach((v,b)=>{v.addEventListener("click",()=>g(b),{signal:t})}),n.forEach((v,b)=>{it(v),v.addEventListener("click",()=>g(b),{signal:t})}),this._stopRadialAnimations(),i.length>1&&!nt()){this._radialAnimState.shimmer=!0;let v=0,b=1,_=()=>{if(!this._radialAnimState.shimmer)return;if(p!==null){setTimeout(_,500);return}let w=i[v];if(!w){setTimeout(_,300);return}if(w.style.filter="brightness(1.8)",w.style.transition="filter 0.3s ease-in",setTimeout(()=>{w.style.filter="",w.style.transition="filter 0.5s ease-out"},250),v+=b,v>=i.length||v<0){v=b>0?0:i.length-1;let S=1e3+Math.random()*2e3;Math.random()<.4&&(b*=-1),setTimeout(_,S)}else{let S=80+Math.random()*170;setTimeout(_,S)}};setTimeout(_,1500)}if(!nt()){let v=this._shadow.querySelector("#radial-sheen");if(v){let _=getComputedStyle(this).getPropertyValue("--primary-background-color").trim().match(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);(_?(.299*Number(_[1])+.587*Number(_[2])+.114*Number(_[3]))/255>=.5:!1)?v.classList.add("light-theme"):v.classList.remove("light-theme"),this._radialAnimState.sheen=!0;let S=()=>{if(!this._radialAnimState.sheen)return;let A=Math.random()>.5,T=A?"-100% 50%":"200% 50%",C=A?"200% 50%":"-100% 50%",F=1.2+Math.random()*1.5;v.style.transition="none",v.style.backgroundPosition=T,v.offsetWidth,v.style.transition=`background-position ${F}s ease-in-out`,v.style.backgroundPosition=C,setTimeout(()=>{let I=4e3+Math.random()*6e3;setTimeout(S,I)},F*1e3)};setTimeout(S,2e3+Math.random()*3e3)}}}_stopRadialAnimations(){this._radialAnimState.shimmer=!1,this._radialAnimState.sheen=!1}_bindTimelineInteractions(){this._timelineAbort&&this._timelineAbort.abort(),this._timelineAbort=new AbortController;let{signal:t}=this._timelineAbort,i=this._shadow.querySelectorAll(".pc-section-thermal-strip .pc-timeline-row"),n=this._shadow.querySelector(".pc-section-thermal-strip");if(i.length===0||!n)return;let o=this._config?._zones||[],r=n.querySelector(".pc-section-subtitle"),a="Tap a zone for details",s=this._hass?.states?.[o[0]?.entity]?.attributes?.unit_of_measurement||"\xB0C",c=null,l=null,p=b=>{l=null;let _=b.querySelector(".pc-comparison-path");_&&_.remove();let w=b.querySelector(".comparison-legend");w&&w.remove()};i.forEach((b,_)=>{it(b),b.addEventListener("click",()=>{let w=this._hass?.states||{},S=this._discovery,A=this._historyCache;if(n.querySelectorAll(".pc-strip-drag-highlight").forEach(R=>{R.style.display="none"}),c!==null&&c!==_){let R=n.querySelector(".pc-zone-detail"),q=R?.querySelector(".pc-detail-sparkline svg");if(R&&q){if(l===_){p(R);return}p(R),l=_;let V=o[_];if(!V)return;let X=V.entity,ht=D(X),Mt=S?.zoneEntities?.[ht]||{},Ne=V.temperature_entity||Mt.temperature||X,He=A?.data?.[Ne]||[];if(He.length>=2){let De=this._sparklinePathCache.get(Ne)||ct(He,340,36,48);if(De){let ft=document.createElementNS("http://www.w3.org/2000/svg","path");ft.setAttribute("d",De.linePath),ft.setAttribute("fill","none"),ft.setAttribute("stroke","var(--info-color, #4FC3F7)"),ft.setAttribute("stroke-width","1.5"),ft.setAttribute("opacity","0.5"),ft.classList.add("pc-comparison-path"),q.appendChild(ft)}}let Re=o[c],On=Tt(Re?.entity||"",w,Re).name,Vn=Tt(X,w,V).name,Lt=document.createElement("div");Lt.className="pc-comparison-legend",Lt.style.cssText="display:flex;gap:12px;font-size:10px;margin-top:4px;color:var(--secondary-text-color,#8e8e93)",Lt.innerHTML=`<span><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:currentColor;margin-right:4px"></span>${h(On)}</span><span><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--info-color, #4FC3F7);margin-right:4px"></span>${h(Vn)}</span>`,R.appendChild(Lt);return}}if(c===_){c=null,l=null,i.forEach(q=>q.classList.remove("pc-selected"));let R=n.querySelector(".pc-zone-detail");R&&R.classList.remove("pc-active"),r&&(r.textContent=a);return}c=_,i.forEach((R,q)=>R.classList.toggle("pc-selected",q===_));let T=o[_];if(!T)return;let C=T.entity,F=w[C]?.attributes||{},I=Tt(C,w,T),{name:$,temp:x,target:E,humidity:z,hvacAction:N}=I;r&&(r.textContent=$);let Z=D(C),M=S?.zoneEntities?.[Z]||{},L=T.temperature_entity||M.temperature||C,P=A?.data?.[L]||[],O="";if(P.length>=2){let R=P[P.length-1],q=P[P.length-2],V=R.v-q.v,X=(R.t-q.t)/36e5;if(X>0&&isFinite(V)&&isFinite(X)){let ht=V/X;O=`${ht>=0?"+":""}${ht.toFixed(1)}${I.unit}/hr`}}let H=0;if(M.heating_power){let R=w[M.heating_power];R&&R.state!=="unavailable"&&(H=parseFloat(R.state)||0)}else F.heating_power!==void 0&&(H=parseFloat(F.heating_power)||0);let Y=H>0||N==="heating"||N==="cooling"?`${N==="cooling"?"Cooling":"Heating"} ${Math.round(H)}%`:"Idle",K="";if(P.length>=2){let R=1/0,q=-1/0;for(let V of P)isFinite(V.v)&&(V.v<R&&(R=V.v),V.v>q&&(q=V.v));isFinite(R)&&isFinite(q)&&(K=`${R.toFixed(1)}${I.unit} \u2013 ${q.toFixed(1)}${I.unit} today`)}let et="";if(P.length>=2){let R=N==="heating"?"var(--label-badge-yellow, #FF9800)":x!==void 0&&isFinite(Number(x))?j(Number(x)):"var(--primary-text-color)",q=k(R),V=this._sparklinePathCache.get(L)||ct(P,340,36,48);if(V){let X=`tl-detail-grad-${_}`;et=`<div class="pc-detail-sparkline pc-sparkline-filled" style="height:36px;margin-top:10px"><svg viewBox="0 0 340 36" preserveAspectRatio="none"><defs><linearGradient id="${h(X)}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${q}" stop-opacity="0.3"/><stop offset="100%" stop-color="${q}" stop-opacity="0"/></linearGradient></defs><path d="${V.areaPath}" fill="url(#${h(X)})" /><path d="${V.linePath}" fill="none" stroke="${q}" stroke-width="1.5" opacity="0.7" /></svg></div>`}}let B=n.querySelector(".pc-zone-detail");B||(B=document.createElement("div"),B.className="pc-zone-detail",n.insertBefore(B,n.querySelector(".pc-timeline-row"))),B.innerHTML=`<div class="pc-detail-header"><span class="pc-detail-name">${h($)}</span><span class="pc-detail-close">\u2715 Close</span></div>
          <div class="pc-detail-stats">
            <div class="pc-stat"><div class="pc-stat-value">${x!==void 0?h(x)+h(I.unit):"--"}</div><div class="pc-stat-label">Current</div>${O?`<div class="pc-stat-sub">${h(O)}</div>`:""}</div>
            <div class="pc-stat"><div class="pc-stat-value">${E!==void 0?h(E)+h(I.unit):"--"}</div><div class="pc-stat-label">Target</div>${Y?`<div class="pc-stat-sub">${h(Y)}</div>`:""}</div>
            <div class="pc-stat"><div class="pc-stat-value">${z!==void 0?h(z)+"%":"--"}</div><div class="pc-stat-label">Humidity</div>${K?`<div class="pc-stat-sub">${h(K)}</div>`:""}</div>
          </div>${et}`,B.classList.add("pc-active");let U=B.querySelector(".pc-detail-close");U&&U.addEventListener("click",R=>{R.stopPropagation(),c=null,l=null,i.forEach(q=>q.classList.remove("pc-selected")),B.classList.remove("pc-active"),r&&(r.textContent=a)},{signal:t})},{signal:t})});let u=ke(),f=n.querySelector(".pc-strip-rows");f&&(f.style.position="relative",f.appendChild(u.element)),n.querySelectorAll(".pc-strip-container").forEach(b=>{let _=b.getAttribute("data-slots"),w=null;try{_&&(w=JSON.parse(_))}catch{}b.addEventListener("pointermove",S=>{if(S.pointerType==="touch"||!w)return;let A=b.getBoundingClientRect(),T=ut(S.clientX,A,w.length),C=w[T];if(C){let F=C.v!==null?`${C.l}: ${C.v}${s}`:`${C.l}: --`;u.show(A,S.clientX-A.left,F)}},{signal:t}),b.addEventListener("pointerleave",()=>u.hide(),{signal:t}),b.addEventListener("pointerdown",S=>{if(S.pointerType!=="touch"||!w)return;let A=b.getBoundingClientRect(),T=ut(S.clientX,A,w.length),C=w[T];if(C){let F=C.v!==null?`${C.l}: ${C.v}${s}`:`${C.l}: --`;u.show(A,S.clientX-A.left,F),setTimeout(()=>u.hide(),2e3)}},{signal:t})}),n.querySelectorAll(".pc-cells").forEach(b=>{b.addEventListener("pointermove",_=>{if(_.pointerType==="touch")return;let w=_.target?.closest?.(".pc-cell");if(!w){u.hide();return}let S=w.getAttribute("data-hour")||"",A=w.getAttribute("data-score"),T=A?`${S}: ${A}${s}`:`${S}: --`,C=b.getBoundingClientRect();u.show(C,_.clientX-C.left,T)},{signal:t}),b.addEventListener("pointerleave",()=>u.hide(),{signal:t}),b.addEventListener("pointerdown",_=>{if(_.pointerType!=="touch")return;let w=_.target?.closest?.(".pc-cell");if(!w)return;let S=w.getAttribute("data-hour")||"",A=w.getAttribute("data-score"),T=A?`${S}: ${A}${s}`:`${S}: --`,C=b.getBoundingClientRect();u.show(C,_.clientX-C.left,T),setTimeout(()=>u.hide(),2e3)},{signal:t})});let g=f?.querySelector(".pc-strip-crosshair"),y=f?.querySelector(".pc-strip-container")||f?.querySelector(".pc-cells");if(f&&g&&y){let b=y.getBoundingClientRect().left-f.getBoundingClientRect().left;Ae(f,g,y,b)}n.querySelectorAll(".pc-strip-container, .pc-cells").forEach(b=>{let _=b.getAttribute("data-slots"),w=null;try{_&&(w=JSON.parse(_))}catch{}Ce(b,w,u,s)})}_bindHeatmapInteractions(){this._heatmapAbort&&this._heatmapAbort.abort(),this._heatmapAbort=new AbortController;let{signal:t}=this._heatmapAbort,i=this._shadow.querySelectorAll(".pc-section-comfort-strip .pc-heatmap-row"),n=this._shadow.querySelector("#heatmap-detail");if(i.length===0||!n)return;let o=null;i.forEach((d,m)=>{it(d),d.addEventListener("click",()=>{let g=this._shadow.querySelector(".pc-section-comfort-strip");if(g&&g.querySelectorAll(".pc-strip-drag-highlight").forEach($=>{$.style.display="none"}),o===m){o=null,i.forEach($=>$.classList.remove("pc-selected")),n.classList.remove("pc-active");return}o=m,i.forEach(($,x)=>$.classList.toggle("pc-selected",x===m));let y=d.querySelectorAll(".pc-cell"),v=[],b=[];if(y.length>0)y.forEach($=>{let x=$.getAttribute("data-score");x&&(v.push(Number(x)),b.push($.getAttribute("data-hour")||"--"))});else{let x=d.querySelector(".pc-strip-container")?.getAttribute("data-slots");if(x)try{let E=JSON.parse(x);for(let z of E)z.v!==null&&z.v!==void 0&&(v.push(z.v),b.push(z.l||"--"))}catch{}}if(v.length===0)return;let _=Math.round(v.reduce(($,x)=>$+x,0)/v.length),w=0,S=0;for(let $=1;$<v.length;$++)v[$]>v[w]&&(w=$),v[$]<v[S]&&(S=$);let A=b[w]||"--",T=b[S]||"--",C=_>=80?"var(--label-badge-green, #34c759)":_>=50?"var(--label-badge-yellow, #ff9f0a)":"var(--label-badge-red, #ff453a)",F=d.querySelector(".pc-zone-label")?.textContent||"";n.innerHTML=`<div class="pc-detail-header"><span class="pc-detail-name">${h(F)}</span><span class="pc-detail-close">\u2715 Close</span></div>
          <div class="pc-detail-stats">
            <div class="pc-stat"><div class="pc-stat-value">${_}</div><div class="pc-stat-label">Avg Score</div></div>
            <div class="pc-stat"><div class="pc-stat-value">${h(A)}</div><div class="pc-stat-label">Best Hour</div></div>
            <div class="pc-stat"><div class="pc-stat-value">${h(T)}</div><div class="pc-stat-label">Worst Hour</div></div>
          </div>
          <div class="pc-detail-bar"><div class="pc-detail-bar-fill" style="width:${_}%;background:${k(C)}"></div></div>`,n.classList.add("pc-active");let I=n.querySelector(".pc-detail-close");I&&I.addEventListener("click",$=>{$.stopPropagation(),o=null,i.forEach(x=>x.classList.remove("pc-selected")),n.classList.remove("pc-active")},{signal:t})},{signal:t})});let r=this._shadow.querySelector(".pc-section-comfort-strip");if(!r)return;let a=ke(),s=r.querySelector(".pc-heatmap-body");s&&(s.style.position="relative",s.appendChild(a.element));let c=s?.querySelector(".pc-cells")||s?.querySelector(".pc-strip-container");r.querySelectorAll(".pc-cells").forEach(d=>{d.addEventListener("pointermove",m=>{if(m.pointerType==="touch")return;let g=m.target?.closest?.(".pc-cell");if(!g){a.hide();return}let y=g.getAttribute("data-hour")||"",v=g.getAttribute("data-score"),b=v?`${y}: Score ${v}`:`${y}: --`,_=c?.getBoundingClientRect();_&&a.show(_,m.clientX-_.left,b)},{signal:t}),d.addEventListener("pointerleave",()=>a.hide(),{signal:t}),d.addEventListener("pointerdown",m=>{if(m.pointerType!=="touch")return;let g=m.target?.closest?.(".pc-cell");if(!g)return;let y=g.getAttribute("data-hour")||"",v=g.getAttribute("data-score"),b=v?`${y}: Score ${v}`:`${y}: --`,_=c?.getBoundingClientRect();_&&(a.show(_,m.clientX-_.left,b),setTimeout(()=>a.hide(),2e3))},{signal:t})}),r.querySelectorAll(".pc-strip-container").forEach(d=>{let m=d.getAttribute("data-slots"),g=null;try{m&&(g=JSON.parse(m))}catch{}d.addEventListener("pointermove",y=>{if(y.pointerType==="touch"||!g)return;let v=d.getBoundingClientRect(),b=ut(y.clientX,v,g.length),_=g[b];if(_){let w=_.v!==null?`${_.l}: Score ${_.v}`:`${_.l}: --`;a.show(v,y.clientX-v.left,w)}},{signal:t}),d.addEventListener("pointerleave",()=>a.hide(),{signal:t}),d.addEventListener("pointerdown",y=>{if(y.pointerType!=="touch"||!g)return;let v=d.getBoundingClientRect(),b=ut(y.clientX,v,g.length),_=g[b];if(_){let w=_.v!==null?`${_.l}: Score ${_.v}`:`${_.l}: --`;a.show(v,y.clientX-v.left,w),setTimeout(()=>a.hide(),2e3)}},{signal:t})});let u=s?.querySelector(".pc-strip-crosshair");if(s&&u&&c){let d=c.getBoundingClientRect().left-s.getBoundingClientRect().left;Ae(s,u,c,d)}r.querySelectorAll(".pc-cells, .pc-strip-container").forEach(d=>{let m=d.getAttribute("data-slots"),g=null;try{m&&(g=JSON.parse(m))}catch{}Ce(d,g,a)})}_bindEnergyFlowInteractions(){this._energyFlowAbort&&this._energyFlowAbort.abort(),this._energyFlowAbort=new AbortController;let{signal:t}=this._energyFlowAbort,i=this._shadow.querySelectorAll(".section-energy-flow path[data-zone]"),n=this._shadow.querySelector(".section-energy-flow");if(i.length===0||!n)return;let o=null;i.forEach(r=>{r.classList.add("pc-ribbon"),r.addEventListener("click",()=>{let a=r.getAttribute("data-zone");if(a){if(o===a){o=null,i.forEach(s=>s.classList.remove("pc-dimmed"));return}o=a,i.forEach(s=>{s.classList.toggle("pc-dimmed",s.getAttribute("data-zone")!==a)})}},{signal:t})})}_bindSparklineCrosshairs(){this._sparklineAbort&&this._sparklineAbort.abort(),this._sparklineAbort=new AbortController;let{signal:t}=this._sparklineAbort;this._shadow.querySelectorAll(".pc-strip-tooltip-fixed").forEach(o=>o.remove()),this._shadow.querySelectorAll(".sparkline-crosshair").forEach(o=>o.remove());let i=this._shadow.querySelectorAll(".pc-section-zones .pc-sparkline-filled, .pc-section-zones .pc-zone-row-pulse");if(i.length===0)return;let n=An();this._shadow.appendChild(n.element),i.forEach(o=>{let r=o;r.style.position="relative";let a=document.createElement("div");a.className="pc-strip-crosshair pc-sparkline-crosshair",a.style.display="none",a.style.top="0",a.style.bottom="0",r.appendChild(a);let s=r.getAttribute("data-sparkline"),c=null;try{s&&(c=JSON.parse(s))}catch{}r.addEventListener("pointermove",p=>{if(p.pointerType==="touch")return;let u=r.getBoundingClientRect(),f=p.clientX-u.left;if(!(f<0||f>u.width)&&(a.style.left=`${f}px`,a.style.display="",c)){let d=c.d,m=c.u||"",g=Math.min(d.length-1,Math.floor(f/u.width*d.length)),y=d[g];if(y){let v=y.v!==null?`${y.l}: ${y.v}${m}`:`${y.l}: --`;n.show(u,p.clientX,v)}}},{signal:t}),r.addEventListener("pointerleave",()=>{a.style.display="none",n.hide()},{signal:t});let l=null;r.addEventListener("pointerdown",p=>{if(p.pointerType!=="touch")return;let u=r.getBoundingClientRect(),f=p.clientX-u.left;if(!(f<0||f>u.width)){if(a.style.left=`${f}px`,a.style.display="",c){let d=c.d,m=c.u||"",g=Math.min(d.length-1,Math.floor(f/u.width*d.length)),y=d[g];if(y){let v=y.v!==null?`${y.l}: ${y.v}${m}`:`${y.l}: --`;n.show(u,p.clientX,v)}}l&&clearTimeout(l),l=setTimeout(()=>{a.style.display="none",n.hide(),l=null},2e3)}},{signal:t})})}_bindZoneRankingTabs(){let t=this._shadow.querySelector(".pc-section-zone-ranking");if(!t)return;let i=t.querySelectorAll(".pc-ranking-tab");if(i.length===0)return;let n=this._config?._zones||[],o=this._discovery;if(o)for(let r of i)r.addEventListener("click",()=>{let a=r.dataset.metric;if(!a)return;let s=this._hass?.states||{},c=Jt(n,s,o,a);if(!c)return;let l=document.createElement("template");l.innerHTML=c;let p=l.content.firstElementChild;p&&(t.replaceWith(p),this._bindZoneRankingTabs(),this._bindSectionChipActions())})}_renderSection(t,i,n,o){let r=typeof t=="string"?t:t.type,a=this._config,s=o.hubEntities,c=this._historyCache;switch(r){case"zones":return he(i,a,n,o,c);case"api":return fe(s,n,t,c);case"graph":return $e(t,i,c,n,o);case"donut":return Se(t,s,n);case"bridge":return me(s,n,c);case"homekit":return ge(s,n,c);case"weather":return ve(s,n,c);case"environment":return be(i,n,o);case"thermal":return _e(i,n,o);case"schedule":return ye(i,n,o);case"thermal_strip":return Cn(i,t,n,o,c);case"comfort_strip":return En(i,t,n,o,c);case"energy_flow":return Te(i,n,o);case"radial":return Ie(i,t,n,o,c);case"home_status":return Me(i,n,o);case"zone_ranking":return Jt(i,n,o);default:return""}}_fireAction(t,i,n){if(!this._hass)return;let o=i[n]||this._config?.[n]||(n==="tap_action"?{action:"more-info"}:{action:"none"});xt(this,this._hass,o,t,rt)}_applyTransitionGlow(t){let i=a=>{a&&(a.classList.add("pc-temp-transitioning"),setTimeout(()=>a.classList.remove("pc-temp-transitioning"),1100))},n=this._shadow.querySelectorAll(".pc-zone-row");n[t]&&i(n[t].querySelector(".pc-power-bar-fill"));let o=this._shadow.querySelectorAll(".pc-zone-row-pulse");i(o[t]||null);let r=this._shadow.querySelectorAll(".pc-arc-group");r[t]&&i(r[t].querySelector(".pc-arc-path"))}_updateZones(){if(!(!this._elements.zonesSection||!this._config||!this._hass||!this._discovery)){if(!nt()){let t=this._config._zones||[],i=this._hass.states;for(let n=0;n<t.length;n++){let o=t[n].entity,r=this._prevStates[o],a=i[o];if(!r||!a)continue;let s=r.attributes?.current_temperature,c=a.attributes?.current_temperature;s!==void 0&&c!==void 0&&s!==c&&this._applyTransitionGlow(n)}}wn(this._elements.zonesSection,this._config._zones||[],this._config,this._hass.states,this._discovery,this._prevStates)}}_updateSections(){if(!this._hass||!this._discovery||!this._config)return;let t=this._hass.states,i=this._discovery,n=this._config._zones||[],o=this._rerenderTargets;if(!o)return;let r=new Set;for(let l of o){let p=this._shadow.querySelector(l.selector);if(!p||l.watchIds.length===0||!l.watchIds.some(g=>{let y=t[g],v=this._prevStates[g];return!v||v.state!==y?.state||v.last_updated!==y?.last_updated}))continue;let f=l.render();if(!f)continue;let d=document.createElement("template");d.innerHTML=f;let m=d.content.firstElementChild;m&&(p.replaceWith(m),r.add(l.selector))}let a=new Set([".pc-section-zones",".pc-section-api",".pc-section-bridge",".pc-section-homekit",".pc-section-weather",".pc-section-environment",".pc-section-thermal",".pc-section-schedule",".pc-section-home-status",".pc-section-zone-ranking"]);[...r].some(l=>a.has(l))&&this._bindSectionChipActions(),r.has(".pc-section-zones")&&(this._elements.zonesSection=this._shadow.querySelector(".pc-section-zones"),this._bindZoneActions(),this._bindChipActions()),r.has(".pc-section-api")&&(this._elements.apiSection=this._shadow.querySelector(".pc-section-api"),this._startCountdownTimer()),r.has(".pc-section-radial")&&this._bindRadialInteractions(),r.has(".pc-section-zone-ranking")&&this._bindZoneRankingTabs();let c=this._shadow.querySelector(".section-energy-flow");if(c&&n.some(p=>{let u=D(p.entity),f=i.zoneEntities?.[u]||{};return[p.entity,f.heating_power,f.ac_power].filter(Boolean).some(m=>{let g=t[m],y=this._prevStates[m];return!y||y.state!==g?.state||y.last_updated!==g?.last_updated})})&&!Mn(c,n,t,i)){let u=Te(n,t,i);if(u){let f=document.createElement("template");f.innerHTML=u;let d=f.content.firstElementChild;d&&(c.replaceWith(d),r.add(".section-energy-flow"),this._bindEnergyFlowInteractions())}}}_updateHistorySections(){if(!this._config||!this._hass||!this._discovery)return;let t=this._config,i=this._hass.states,n=this._discovery,o=t._zones||[],r=t.sections||[{type:"zones"}],a=[];for(let c of r){let l=typeof c=="string"?c:c.type;if(!Wo.has(l))continue;let p=Go[l];if(!p)continue;let u=this._shadow.querySelector(p);if(!u)continue;let f=this._renderSection(c,o,i,n);if(!f)continue;let d=document.createElement("template");d.innerHTML=f;let m=d.content.firstElementChild;m&&(u.replaceWith(m),a.push(l))}if(a.length===0)return;a.includes("zones")&&(this._elements.zonesSection=this._shadow.querySelector(".pc-section-zones"),this._bindZoneActions(),this._bindChipActions(),this._bindSparklineCrosshairs()),a.includes("api")&&(this._elements.apiSection=this._shadow.querySelector(".pc-section-api"),this._startCountdownTimer()),a.includes("radial")&&this._bindRadialInteractions(),a.includes("thermal_strip")&&this._bindTimelineInteractions(),a.includes("comfort_strip")&&this._bindHeatmapInteractions(),a.includes("energy_flow")&&this._bindEnergyFlowInteractions(),a.some(c=>["zones","api","bridge","homekit","weather"].includes(c))&&this._bindSectionChipActions()}async _refreshHistoryIfNeeded(){if(!this._hass||!this._config||pe(this._historyCache))return;let t=gn();if(pe(t)){this._historyCache=t,this._rebuildSparklinePathCache(),Object.values(t.data).filter(c=>c.length>=2).length>0&&this._updateHistorySections();return}if(this._historyFetchInProgress)return;this._historyFetchInProgress=!0;let i=this._historyGen,n=this._config._zones||[],o=[],r=this._hass.states;for(let s of n){let c=D(s.entity),l=this._discovery?.zoneEntities?.[c]||{},p=at(s.entity,r,l,s);o.push(p.entityId);let u=pt(s.entity,r,l,s);u&&o.push(u.entityId)}if(this._discovery?.hubEntities?.call_history&&o.push(this._discovery.hubEntities.call_history),this._discovery?.hubEntities?.api_usage&&o.push(this._discovery.hubEntities.api_usage),this._discovery?.hubEntities?.boiler_flow_temp&&o.push(this._discovery.hubEntities.boiler_flow_temp),this._discovery?.hubEntities?.homekit_reads_saved&&o.push(this._discovery.hubEntities.homekit_reads_saved),this._discovery?.hubEntities?.homekit_writes_saved&&o.push(this._discovery.hubEntities.homekit_writes_saved),this._discovery?.hubEntities?.outside_temp&&o.push(this._discovery.hubEntities.outside_temp),o.length===0){this._historyFetchInProgress=!1;return}let a=[...new Set(o.filter(s=>s&&typeof s=="string"&&s.includes(".")))];if(a.length===0){this._historyFetchInProgress=!1;return}try{let s=await At(this._hass,a,24);if(i!==this._historyGen){rt("History fetch result discarded \u2014 config changed during fetch");return}this._historyCache=_n(this._historyCache,s),this._rebuildSparklinePathCache(),vn(s),Object.values(s).filter(l=>l.length>=2).length>0&&this._updateHistorySections()}catch(s){rt("History fetch failed, using cached data: %O",s)}finally{this._historyFetchInProgress=!1}}_cacheWatchedStates(){if(!this._hass||!this._config||!this._discovery)return;let t=this._hass.states,i=this._config._zones||[],n=this._discovery.hubEntities,o={};for(let r of i){let a=r.entity;t[a]&&(o[a]=t[a]);let s=D(a),c=this._discovery.zoneEntities?.[s]||{};for(let l of Object.values(c))l&&t[l]&&(o[l]=t[l])}for(let r of Object.values(n))r&&t[r]&&(o[r]=t[r]);this._prevStates=o}disconnectedCallback(){this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null),this._rafId&&(cancelAnimationFrame(this._rafId),this._rafId=null),this._chipAbort?.abort(),this._sectionChipAbort?.abort(),this._radialAbort?.abort(),this._timelineAbort?.abort(),this._heatmapAbort?.abort(),this._energyFlowAbort?.abort(),this._sparklineAbort?.abort(),this._stopRadialAnimations();let t=this._shadow?.querySelectorAll(".pc-zone-row")||[];for(let i of t){let n=i.__pulseCleanup;typeof n=="function"&&n()}}connectedCallback(){this._config&&this._hass&&!this._shadow.querySelector("ha-card")?(this._discovery||this._runDiscovery(),this._fullRender(),this._refreshHistoryIfNeeded()):this._config&&this._hass&&this._shadow.querySelector("ha-card")&&(this._bindSectionInteractions(),this._bindZoneActions(),this._bindChipActions(),this._bindSectionChipActions(),this._startCountdownTimer())}getCardSize(){let t=this._config?._zones?.length||1,i=this._config?.sections?.length||1;return Math.max(1,t+i)}getGridOptions(){return{columns:12,min_columns:3,rows:this.getCardSize(),min_rows:1}}static async getConfigElement(){return await import("./pulse-climate-editor.js"),document.createElement(en)}static getStubConfig(t){return{entity:Object.keys(t.states).find(n=>n.startsWith("climate."))||"climate.living_room"}}};customElements.get(Ot)||customElements.define(Ot,ze);window.customCards=window.customCards||[];window.customCards.push({type:Ot,name:"Pulse Climate Card",description:"Modular climate dashboard card with Tado CE enrichment"});console.info(`%c PULSE-CLIMATE-CARD %c v${tn} `,"background:#4CAF50;color:white;font-weight:bold","background:#333;color:#fff");var It=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_elements={};_indicators={};_indicatorTimer=null;_sparklineData={};_sparklineTimer=null;_sparklineLastFetch=0;_shadow;constructor(){super(),this._shadow=this.attachShadow({mode:"open"});let t=document.createElement("style");t.textContent=Pe,this._shadow.appendChild(t)}get _cfg(){return this._config}disconnectedCallback(){this._indicatorTimer&&(clearTimeout(this._indicatorTimer),this._indicatorTimer=null),this._sparklineTimer&&(clearTimeout(this._sparklineTimer),this._sparklineTimer=null);let t=this._shadow.querySelectorAll(".pb-row");for(let i of t)ie(i),se(i)}connectedCallback(){this._config&&this._hass&&this._elements.container&&this._cacheBarElements()}setConfig(t){this._config=Ke(t),this._elements={},this._sparklineData={},this._sparklineLastFetch=0,this._indicators={},this._hass&&(this._fullRender(),this._scheduleIndicatorFetch(),this._scheduleSparklineFetch())}set hass(t){if(this._hass=t,!this._config)return;let i=!1;for(let n of this._cfg.entities){let o=t.states[n.entity],r=this._prevStates[n.entity];if(!r||r.state!==o?.state||r.last_updated!==o?.last_updated){i=!0;break}let a=n.target??this._cfg.target;if(typeof a=="string"){let s=t.states[a],c=this._prevStates[`__target__${a}`];if(!c||c.state!==s?.state||c.last_updated!==s?.last_updated){i=!0;break}}}i&&(this._elements.container?this._updateBars():this._fullRender(),this._cacheStates(),this._scheduleIndicatorFetch(),this._scheduleSparklineFetch())}_fullRender(){let t=this._cfg;if(!t)return;let i=t.columns??1,n=i>1?` columns-${i}`:"",o=t.entity_row?" entity-row":"",r=t.layout==="compact"?" compact":"",a=[];i>1&&a.push(`--pb-columns:${i}`),t.gap!==void 0&&a.push(`--pulse-space-element:${k(vt(t.gap))}`),t.font_size!==void 0&&a.push(`--pulse-font-body:${k(vt(t.font_size))}`);let s=a.length>0?` style="${a.join(";")}"`:"",c="";t.title&&(c+=`<div class="pulse-title">${h(t.title)}</div>`),c+=`<div class="pb-card${n}${o}${r}"${s}>`;for(let f of t.entities)c+=this._renderBarRow(f);c+="</div>";let l=t.entity_row?c:`<ha-card>${c}</ha-card>`,p=this._shadow.querySelector("ha-card, .pb-card");p&&p.remove();let u=document.createElement("template");u.innerHTML=l,this._shadow.appendChild(u.content.cloneNode(!0)),this._elements.container=this._shadow.querySelector(".pb-card"),this._cacheBarElements();for(let f of t.entities){let d=this._elements.rows?.[f.entity];d&&(d.style.display=ee(f,this._hass)?"":"none")}}_renderBarRow(t){let i=this._cfg,n=te(t,i,this._hass),o=t.positions?.name??i.positions?.name??Q.positions.name,r=t.positions?.value??i.positions?.value??Q.positions.value,a=t.positions?.icon??i.positions?.icon??Q.positions.icon,s=t.positions?.indicator??i.positions?.indicator??Q.positions.indicator,c=t.animation??{},l=c.speed??i.animation.speed,p=c.effect??i.animation.effect,u=c.state??i.animation.state,f=this._buildIndicatorHtml(t,i,s),d=ne(t,this._hass),m=this._buildPositionHtml(n,o,r,a,s,f,"outside",d),g=this._buildPositionHtml(n,o,r,a,s,f,"inside",d),y=k(vt(t.height??i.height)),v=k(vt(t.border_radius??i.border_radius)),b=n.color?`background-color:${k(n.color)};`:"",_=p==="charge"&&!n.isUnavailable?" charge":"",w=u==="off"?"transition:none;":"",S=yt(t,i),T=`width:${n.fill*S}%;${w}${b}`,C=this._buildTargetHtml(t,i,n.min,n.max),F=this._buildSparklineHtml(t,i),I=`
      <div class="pb-container" style="height:${y};border-radius:${v};--pb-animation-speed:${l}s;">
        <div class="pb-track"></div>
        ${F}
        <div class="pb-fill${_}" data-entity="${h(t.entity)}" style="${T}"></div>
        ${C}
        ${g}
      </div>`,$=!!(t.interactive??i.interactive),x=$?`<div class="pb-interactive-row"><div class="pb-step-btn" data-step="-1" role="button" aria-label="Decrease">\u2212</div>${I}<div class="pb-step-btn" data-step="1" role="button" aria-label="Increase">+</div></div>`:I,E=$?"slider":"progressbar",z=n.isUnavailable?`role="${E}" aria-valuenow="0" aria-valuemin="${n.min}" aria-valuemax="${n.max}" aria-label="${h(n.name)}: Unavailable"`:`role="${E}" aria-valuenow="${n.numValue}" aria-valuemin="${n.min}" aria-valuemax="${n.max}" aria-label="${h(n.name)}: ${h(n.displayValue)}"`,N=n.isUnavailable?" unavailable":"",Z=$?" data-interactive":"",M=n.isUnavailable?'data-state="unavailable"':`data-state="${h(n.numValue)}"`,L=n.color?` data-severity-color="${h(n.color)}"`:"";return`<div class="pb-row${N}" data-entity="${h(t.entity)}"${Z} ${M}${L} ${z}>${m}${x}</div>`}_buildIndicatorHtml(t,i,n){if(n==="off")return"";let o=t.indicator??i.indicator,r=this._indicators[t.entity],a=r?.direction??"neutral",s=o?.show_delta===!0&&!!r,c=this._hass?.states[t.entity],l=_t(t,c),p=Nt(t,i,this._hass),{text:u}=Qt(a,r?.delta??0,s,p,l),f=o?.inverted===!0?" inverted":"";return`<span class="pb-indicator ${a}${f}">${u}</span>`}_buildPositionHtml(t,i,n,o,r,a,s,c){if(i!==s&&n!==s&&o!==s&&r!==s)return"";let p=`<div class="${s==="outside"?"pb-labels":"pb-content"}"><div class="pb-label-left">`;return o===s&&t.resolvedIcon&&(p+=`<ha-icon class="pb-icon" icon="${h(t.resolvedIcon)}"></ha-icon>`),i===s&&(c?(p+='<div class="pb-name-group">',p+=`<span class="pb-name">${h(t.name)}</span>`,p+=`<span class="pb-secondary">${h(c)}</span>`,p+="</div>"):p+=`<span class="pb-name">${h(t.name)}</span>`),p+='</div><div class="pb-label-right">',n===s&&(p+=`<span class="pb-value">${h(t.displayValue)}</span>`),r===s&&a&&(p+=a),p+="</div></div>",p}_buildTargetHtml(t,i,n,o){let r=t.target??i.target,{value:a,showLabel:s}=Ht(r,this._hass);if(a===null)return"";let c=tt((a-n)/(o-n),0,1)*100,l=yt(t,i),p=`left:${c*l}%`,u=s?`<span class="pb-target-label">${h(a)}</span>`:"";return`<div class="pb-target" style="${p}">${u}</div>`}_updateBars(){let t=this._cfg;for(let i of t.entities){let n=te(i,t,this._hass),o=yt(i,t),r=this._elements.rows?.[i.entity];if(!r||r.__pulseSliding)continue;let a=ee(i,this._hass);if(r.style.display=a?"":"none",!a)continue;r.classList.toggle("unavailable",n.isUnavailable);let s=r.querySelector(".pb-fill");if(s){let m=`${n.fill*o}%`;s.style.width=m,s.style.backgroundColor=n.color||"";let g=r.querySelector(".pb-sparkline");g&&(g.style.width=`${o*100}%`);let y=r.querySelector(".pb-icon");y&&n.resolvedIcon&&y.setAttribute("icon",n.resolvedIcon)}let c=r.querySelectorAll(".pb-name");for(let m of c)m.textContent=n.name;let l=r.querySelectorAll(".pb-value");for(let m of l)m.textContent=n.displayValue;let p=r.querySelectorAll(".pb-secondary");if(p.length>0){let m=ne(i,this._hass);for(let g of p)g.textContent=m}r.setAttribute("aria-valuenow",n.isUnavailable?"0":String(n.numValue)),r.setAttribute("aria-valuemin",String(n.min)),r.setAttribute("aria-valuemax",String(n.max)),r.setAttribute("aria-label",`${h(n.name)}: ${h(n.displayValue)}`),r.setAttribute("data-state",n.isUnavailable?"unavailable":String(n.numValue)),n.color?r.setAttribute("data-severity-color",n.color):r.removeAttribute("data-severity-color");let u=r.querySelector(".pb-target"),f=i.target??t.target,{value:d}=Ht(f,this._hass);if(d!==null){let m=tt((d-n.min)/(n.max-n.min),0,1)*100;if(u){u.style.left=`${m*o}%`,u.style.display="";let g=u.querySelector(".pb-target-label");g&&(g.textContent=String(d))}}else u&&(u.style.display="none")}}_scheduleIndicatorFetch(){let t=this._cfg;!t||!t.entities.some(n=>(n.indicator??t.indicator)?.show===!0)||(this._indicatorTimer&&clearTimeout(this._indicatorTimer),this._indicatorTimer=setTimeout(()=>this._fetchIndicators(),500))}async _fetchIndicators(){let t=this._cfg;if(t)try{let i=new Map;for(let o of t.entities)i.set(o.entity,o);let n=new Map;for(let o of t.entities){let r=o.indicator??t.indicator;if(!r?.show)continue;let a=r.period??60;n.has(a)||n.set(a,[]),n.get(a).push({entity:o.entity,icfg:r})}for(let[o,r]of n){let a=r.map(c=>c.entity),s=await Ze(this._hass,a,o);for(let{entity:c,icfg:l}of r){let p=i.get(c),u=this._hass?.states[c],f=p?.attribute?u?.attributes?.[p.attribute]:u?.state,d=je(f,s[c]);this._indicators[c]=d;let m=this._elements.rows?.[c];if(!m)continue;let g=m.querySelector(".pb-indicator");if(g&&p){let y=this._hass?.states[c],v=_t(p,y),b=Nt(p,t,this._hass),{text:_}=Qt(d.direction,d.delta,l.show_delta===!0,b,v),w=l.inverted===!0?" inverted":"";g.textContent=_,g.className=`pb-indicator ${d.direction}${w}`}}}}catch(i){ot("Indicator fetch failed: %O",i)}}_resolveSparklineConfig(t,i){let n=t.sparkline??i.sparkline;if(!n)return null;let o=n===!0?{}:n.show?n:null;if(!o)return null;let r=o.hours_to_show??24,a=o.points_per_hour??1;return{hours:r,pointsPerHour:a,slots:Math.max(r*a,2),aggregateFunc:o.aggregate_func??"avg",smoothing:o.smoothing!==!1,strokeWidth:Number(o.line_width??o.stroke_width??1.5)||1.5,color:o.color??null,updateInterval:o.update_interval??300}}_buildSparklineMarkup(t,i,n=!1){let o=`${i*100}%`,r=t.color?`color:${k(t.color)};`:"";return`<svg${n?' xmlns="http://www.w3.org/2000/svg"':""} class="pb-sparkline" viewBox="0 0 200 50" preserveAspectRatio="none" height="100%" style="width:${o};${r}"><path d="${t.path}" fill="none" stroke="currentColor" stroke-width="${t.strokeWidth}" /></svg>`}_buildSparklineHtml(t,i){let n=this._resolveSparklineConfig(t,i);if(!n)return"";let o=this._sparklineData[t.entity];if(!o||o.length<2)return"";let r=bt(o,200,50,n.slots,n.aggregateFunc,n.smoothing);if(!r)return"";let a=yt(t,i);return this._buildSparklineMarkup({path:r,strokeWidth:n.strokeWidth,color:n.color},a,!1)}_scheduleSparklineFetch(){let t=this._cfg;if(!t||!t.entities.some(r=>!!this._resolveSparklineConfig(r,t)))return;let n=300;for(let r of t.entities){let a=this._resolveSparklineConfig(r,t);a&&a.updateInterval<n&&(n=a.updateInterval)}(Date.now()-this._sparklineLastFetch)/1e3<n&&this._sparklineLastFetch>0||(this._sparklineTimer&&clearTimeout(this._sparklineTimer),this._sparklineTimer=setTimeout(()=>this._fetchSparklines(),1e3))}async _fetchSparklines(){let t=this._cfg;if(t)try{let i=new Map;for(let n of t.entities){let o=this._resolveSparklineConfig(n,t);if(!o)continue;let r=o.hours;i.has(r)||i.set(r,[]),i.get(r).push(n.entity)}for(let[n,o]of i){let r=await At(this._hass,o,n);for(let a of o)this._sparklineData[a]=r[a]||[]}this._sparklineLastFetch=Date.now(),this._updateSparklines()}catch(i){ot("Sparkline fetch failed: %O",i)}}_updateSparklines(){let t=this._cfg;if(t)for(let i of t.entities){let n=this._resolveSparklineConfig(i,t);if(!n)continue;let o=this._elements.rows?.[i.entity];if(!o)continue;let r=this._sparklineData[i.entity];if(!r||r.length<2)continue;let a=bt(r,200,50,n.slots,n.aggregateFunc,n.smoothing);if(!a)continue;let s=o.querySelector(".pb-sparkline"),c=yt(i,t),l=`${c*100}%`;if(s){let p=s.querySelector("path");p&&p.setAttribute("d",a),s.style.width=l}else{let p=o.querySelector(".pb-container");if(!p)continue;let u=this._buildSparklineMarkup({path:a,strokeWidth:n.strokeWidth,color:n.color},c,!0),f=new DOMParser().parseFromString(u,"image/svg+xml"),d=document.importNode(f.documentElement,!0),m=p.querySelector(".pb-track");m&&m.nextSibling?p.insertBefore(d,m.nextSibling):p.appendChild(d)}}}_cacheStates(){let t=this._cfg;this._prevStates={};for(let i of t.entities){let n=this._hass?.states[i.entity];n&&(this._prevStates[i.entity]={state:n.state,last_updated:n.last_updated});let o=i.target??t.target;if(typeof o=="string"){let r=this._hass?.states[o];r&&(this._prevStates[`__target__${o}`]={state:r.state,last_updated:r.last_updated})}}}_cacheBarElements(){let t=this._cfg;this._elements.rows={};let i=new Map;for(let o of t.entities)i.set(o.entity,o);let n=this._shadow.querySelectorAll(".pb-row");for(let o of n){let r=o.dataset.entity;if(r){this._elements.rows[r]=o;let a=i.get(r);a&&(Je(o,this,this._hass,t,a),(a.interactive??t.interactive)&&Qe(o,this,t,a)),it(o);for(let s of o.querySelectorAll(".pb-step-btn"))it(s)}}}getCardSize(){let t=this._config?.entities?.length||1,i=this._config?.columns||1;return Math.ceil(t/i)+(this._config?.title?1:0)}getGridOptions(){let t=this._config?.entities?.length||1,i=this._config?.columns||1,n=Math.ceil(t/i);return{columns:12,min_columns:3,rows:Math.max(1,n),min_rows:1}}static async getConfigElement(){return await import("./pulse-card-editor.js"),document.createElement("pulse-bar-card-editor")}static getStubConfig(t){return{entity:Object.keys(t.states).filter(n=>{let o=t.states[n];return n.startsWith("sensor.")&&!isNaN(parseFloat(o.state))})[0]||"sensor.example"}}};customElements.get("pulse-bar-card")||customElements.define("pulse-bar-card",It);customElements.get("pulse-card")||customElements.define("pulse-card",class extends It{});window.customCards=window.customCards||[];window.customCards.push({type:"pulse-bar-card",name:"Pulse Bar Card",description:"Compact horizontal bar chart for sensor data visualization",preview:!0,documentationURL:"https://github.com/hiall-fyi/pulse-card"});console.info(`%c PULSE-BAR-CARD %c v${qe} `,"background:#03A9F4;color:white;font-weight:bold","background:#333;color:white");var wr=It;export{wr as default};
