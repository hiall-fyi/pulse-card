/**
 * @module pulse-card
 * @description Main PulseBarCard custom element — renders horizontal bar chart(s)
 * for Home Assistant sensor data. Entry point for the card.
 */

import { STYLES } from './styles.js';
import { VERSION, DEFAULTS } from './constants.js';
import { bindActionListeners, cleanupActionListeners } from './action-handler.js';
import { bindSliderListeners, cleanupSliderListeners } from './slider-handler.js';
import { attachRipple } from '../shared/ripple.js';
import {
  clamp,
  computeBarWidthScale,
  computeIndicator,
  cssValue,
  escapeHtml,
  evaluateVisibility,
  fetchPreviousValues,
  fetchSparklineData,
  buildSparklinePath,
  formatIndicator,
  resolveBarState,
  resolveDecimal,
  resolveUnit,
  resolveTarget,
  resolveSecondaryInfo,
  normalizeConfig,
  sanitizeCssValue,
  warn,
} from './utils.js';

/** @typedef {import('./types.js').PulseCardConfig & {entities: import('./types.js').EntityConfig[]}} NormalizedConfig */
/** @typedef {import('./types.js').EntityConfig} EntityConfig */
/** @typedef {import('./types.js').Hass} Hass */
/** @typedef {import('./types.js').BarState} BarState */

/**
 * PulseBarCard — compact horizontal bar chart card for Home Assistant.
 * @extends HTMLElement
 */
class PulseBarCard extends HTMLElement {
  /** @type {NormalizedConfig|null} Normalized config. */
  _config = null;

  /** @type {Hass|null} Home Assistant instance. */
  _hass = null;

  /** @type {Record<string, {state: string, last_updated: string}>} Previous entity states for diff. */
  _prevStates = {};

  /** @type {{container?: Element|null, rows?: Record<string, Element>}} Cached DOM element refs. */
  _elements = {};

  /** @type {Record<string, import('./types.js').IndicatorData>} Cached indicator data. */
  _indicators = {};

  /** @type {ReturnType<typeof setTimeout>|null} Indicator fetch debounce timer. */
  _indicatorTimer = null;

  /** @type {Record<string, {t:number, v:number}[]>} Cached sparkline history data per entity. */
  _sparklineData = {};

  /** @type {ReturnType<typeof setTimeout>|null} Sparkline refresh timer. */
  _sparklineTimer = null;

  /** @type {number} Timestamp of last sparkline fetch. */
  _sparklineLastFetch = 0;

  /** @type {ShadowRoot} */
  _shadow;

  constructor() {
    super();
    this._shadow = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.textContent = STYLES;
    this._shadow.appendChild(style);
  }

  /**
   * Non-null config accessor — avoids verbose type casts throughout the class.
   * Only call after setConfig() has been called.
   * @returns {NormalizedConfig}
   */
  get _cfg() {
    return /** @type {NormalizedConfig} */ (this._config);
  }

  disconnectedCallback() {
    if (this._indicatorTimer) {
      clearTimeout(this._indicatorTimer);
      this._indicatorTimer = null;
    }
    if (this._sparklineTimer) {
      clearTimeout(this._sparklineTimer);
      this._sparklineTimer = null;
    }
    const rows = this._shadow.querySelectorAll('.pb-row');
    for (const row of rows) {
      cleanupActionListeners(/** @type {HTMLElement} */ (row));
      cleanupSliderListeners(/** @type {HTMLElement} */ (row));
    }
  }

  /** Re-bind listeners when reconnected after dashboard edit. */
  connectedCallback() {
    if (this._config && this._hass && this._elements.container) {
      /* DOM preserved across reconnect, but disconnectedCallback cleaned up
         the listeners — re-bind action + slider listeners. */
      this._cacheBarElements();
    }
  }

  /**
   * Validate and store config. Throws on invalid.
   * @param {Record<string, *>} config
   */
  setConfig(config) {
    this._config = normalizeConfig(config);
    this._elements = {};
    /* Reset async data caches so stale entries from old entities don't linger. */
    this._sparklineData = {};
    this._sparklineLastFetch = 0;
    this._indicators = {};
    if (this._hass) {
      this._fullRender();
      this._scheduleIndicatorFetch();
      this._scheduleSparklineFetch();
    }
  }

  /**
   * Called by HA on every state change. Differential update.
   * @param {Hass} hass
   */
  set hass(hass) {
    this._hass = hass;
    if (!this._config) return;

    let needsRender = false;
    for (const ec of this._cfg.entities) {
      const state = hass.states[ec.entity];
      const prev = this._prevStates[ec.entity];
      if (!prev || prev.state !== state?.state || prev.last_updated !== state?.last_updated) {
        needsRender = true;
        break;
      }
      const targetCfg = ec.target ?? this._cfg.target;
      if (typeof targetCfg === 'string') {
        const tState = hass.states[targetCfg];
        const tPrev = this._prevStates[`__target__${targetCfg}`];
        if (!tPrev || tPrev.state !== tState?.state || tPrev.last_updated !== tState?.last_updated) {
          needsRender = true;
          break;
        }
      }
    }

    if (needsRender) {
      if (!this._elements.container) {
        this._fullRender();
      } else {
        this._updateBars();
      }
      this._cacheStates();
      this._scheduleIndicatorFetch();
      this._scheduleSparklineFetch();
    }
  }

  /** Build complete DOM via innerHTML. */
  _fullRender() {
    const cfg = this._cfg;
    if (!cfg) return;
    const columns = cfg.columns ?? 1;
    const columnsClass = columns > 1 ? ` columns-${columns}` : '';
    const entityRowClass = cfg.entity_row ? ' entity-row' : '';
    const compactClass = cfg.layout === 'compact' ? ' compact' : '';
    const parts = [];
    if (columns > 1) parts.push(`--pb-columns:${columns}`);
    if (cfg.gap !== undefined) {
      parts.push(`--pulse-space-element:${sanitizeCssValue(cssValue(cfg.gap))}`);
    }
    if (cfg.font_size !== undefined) {
      parts.push(`--pulse-font-body:${sanitizeCssValue(cssValue(cfg.font_size))}`);
    }
    const columnsStyle = parts.length > 0 ? ` style="${parts.join(';')}"` : '';

    let inner = '';
    if (cfg.title) inner += `<div class="pulse-title">${escapeHtml(cfg.title)}</div>`;
    inner += `<div class="pb-card${columnsClass}${entityRowClass}${compactClass}"${columnsStyle}>`;
    for (const ec of cfg.entities) inner += this._renderBarRow(ec);
    inner += '</div>';

    const fullHtml = cfg.entity_row ? inner : `<ha-card>${inner}</ha-card>`;

    const old = this._shadow.querySelector('ha-card, .pb-card');
    if (old) old.remove();

    const tpl = document.createElement('template');
    // eslint-disable-next-line no-unsanitized/property -- inputs pre-escaped by _renderBarRow
    tpl.innerHTML = fullHtml;
    this._shadow.appendChild(tpl.content.cloneNode(true));

    this._elements.container = this._shadow.querySelector('.pb-card');
    this._cacheBarElements();

    for (const ec of cfg.entities) {
      const row = /** @type {HTMLElement|undefined} */ (this._elements.rows?.[ec.entity]);
      if (row) row.style.display = evaluateVisibility(ec, this._hass) ? '' : 'none';
    }
  }

  /**
   * Render a single bar row HTML string.
   * @param {EntityConfig} ec - Entity config.
   * @returns {string} HTML string.
   */
  _renderBarRow(ec) {
    const cfg = this._cfg;
    const bs = resolveBarState(ec, cfg, this._hass);

    const posName = ec.positions?.name ?? cfg.positions?.name ?? DEFAULTS.positions.name;
    const posValue = ec.positions?.value ?? cfg.positions?.value ?? DEFAULTS.positions.value;
    const posIcon = ec.positions?.icon ?? cfg.positions?.icon ?? DEFAULTS.positions.icon;
    // Position is the single show/hide for the indicator: anything
    // other than 'off' renders the arrow at that position. Legacy
    // configs that set `indicator.show: true` without a position get
    // promoted to 'outside' during normalizeConfig so the editor and
    // runtime agree on what the user sees.
    const posIndicator = ec.positions?.indicator ?? cfg.positions?.indicator ?? DEFAULTS.positions.indicator;

    /* cfg.animation is guaranteed populated by normalizeConfig. */
    const ecAnim = ec.animation ?? {};
    const animSpeed = ecAnim.speed ?? /** @type {NonNullable<typeof cfg.animation>} */ (cfg.animation).speed;
    const animEffect = ecAnim.effect ?? /** @type {NonNullable<typeof cfg.animation>} */ (cfg.animation).effect;
    const animState = ecAnim.state ?? /** @type {NonNullable<typeof cfg.animation>} */ (cfg.animation).state;

    const indicatorHtml = this._buildIndicatorHtml(ec, cfg, posIndicator);
    const secondaryText = resolveSecondaryInfo(ec, this._hass);
    const labelsHtml = this._buildPositionHtml(bs, posName, posValue, posIcon, posIndicator, indicatorHtml, 'outside', secondaryText);
    const contentHtml = this._buildPositionHtml(bs, posName, posValue, posIcon, posIndicator, indicatorHtml, 'inside', secondaryText);

    const height = sanitizeCssValue(cssValue(ec.height ?? cfg.height));
    const borderRadius = sanitizeCssValue(cssValue(ec.border_radius ?? cfg.border_radius));
    const fillStyle = bs.color ? `background-color:${sanitizeCssValue(bs.color)};` : '';
    const chargeClass = animEffect === 'charge' && !bs.isUnavailable ? ' charge' : '';
    const transitionStyle = animState === 'off' ? 'transition:none;' : '';
    const barWidthScale = computeBarWidthScale(ec, cfg);
    const scaledFill = bs.fill * barWidthScale;
    const fillDim = `width:${scaledFill}%;${transitionStyle}${fillStyle}`;

    const targetHtml = this._buildTargetHtml(ec, cfg, bs.min, bs.max);
    const sparklineHtml = this._buildSparklineHtml(ec, cfg);

    const barContainerHtml = `
      <div class="pb-container" style="height:${height};border-radius:${borderRadius};--pb-animation-speed:${animSpeed}s;">
        <div class="pb-track"></div>
        ${sparklineHtml}
        <div class="pb-fill${chargeClass}" data-entity="${escapeHtml(ec.entity)}" style="${fillDim}"></div>
        ${targetHtml}
        ${contentHtml}
      </div>`;

    const isInteractive = !!(ec.interactive ?? cfg.interactive);

    const barHtml = isInteractive
      ? `<div class="pb-interactive-row"><div class="pb-step-btn" data-step="-1" role="button" aria-label="Decrease">−</div>${barContainerHtml}<div class="pb-step-btn" data-step="1" role="button" aria-label="Increase">+</div></div>`
      : barContainerHtml;

    const ariaRole = isInteractive ? 'slider' : 'progressbar';
    const ariaAttrs = bs.isUnavailable
      ? `role="${ariaRole}" aria-valuenow="0" aria-valuemin="${bs.min}" aria-valuemax="${bs.max}" aria-label="${escapeHtml(bs.name)}: Unavailable"`
      : `role="${ariaRole}" aria-valuenow="${bs.numValue}" aria-valuemin="${bs.min}" aria-valuemax="${bs.max}" aria-label="${escapeHtml(bs.name)}: ${escapeHtml(bs.displayValue)}"`;

    const unavailClass = bs.isUnavailable ? ' unavailable' : '';
    const interactiveAttr = isInteractive ? ' data-interactive' : '';
    const stateAttr = bs.isUnavailable ? 'data-state="unavailable"' : `data-state="${escapeHtml(bs.numValue)}"`;
    const severityAttr = bs.color ? ` data-severity-color="${escapeHtml(bs.color)}"` : '';
    return `<div class="pb-row${unavailClass}" data-entity="${escapeHtml(ec.entity)}"${interactiveAttr} ${stateAttr}${severityAttr} ${ariaAttrs}>${labelsHtml}${barHtml}</div>`;
  }

  /**
   * Build indicator HTML snippet.
   * @param {EntityConfig} ec
   * @param {NormalizedConfig} cfg
   * @param {string} posIndicator
   * @returns {string}
   */
  _buildIndicatorHtml(ec, cfg, posIndicator) {
    if (posIndicator === 'off') return '';
    const indicatorCfg = ec.indicator ?? cfg.indicator;

    const data = this._indicators[ec.entity];
    const dir = data?.direction ?? 'neutral';
    const showDelta = indicatorCfg?.show_delta === true && !!data;
    const state = this._hass?.states[ec.entity];
    const unit = resolveUnit(ec, state);
    const decimal = resolveDecimal(ec, cfg, this._hass);
    const { text } = formatIndicator(dir, data?.delta ?? 0, showDelta, decimal, unit);
    const inverted = indicatorCfg?.inverted === true ? ' inverted' : '';
    return `<span class="pb-indicator ${dir}${inverted}">${text}</span>`;
  }

  /**
   * Build position-based HTML (outside labels or inside content).
   * @param {BarState} bs
   * @param {string} posName
   * @param {string} posValue
   * @param {string} posIcon
   * @param {string} posIndicator
   * @param {string} indicatorHtml
   * @param {'outside'|'inside'} mode - Position mode to render.
   * @param {string} [secondaryText] - Optional secondary info text.
   * @returns {string}
   */
  _buildPositionHtml(bs, posName, posValue, posIcon, posIndicator, indicatorHtml, mode, secondaryText) {
    if (posName !== mode && posValue !== mode && posIcon !== mode && posIndicator !== mode) return '';

    const wrapperClass = mode === 'outside' ? 'pb-labels' : 'pb-content';
    let html = `<div class="${wrapperClass}"><div class="pb-label-left">`;
    if (posIcon === mode && bs.resolvedIcon) {
      html += `<ha-icon class="pb-icon" icon="${escapeHtml(bs.resolvedIcon)}"></ha-icon>`;
    }
    if (posName === mode) {
      if (secondaryText) {
        html += `<div class="pb-name-group">`;
        html += `<span class="pb-name">${escapeHtml(bs.name)}</span>`;
        html += `<span class="pb-secondary">${escapeHtml(secondaryText)}</span>`;
        html += `</div>`;
      } else {
        html += `<span class="pb-name">${escapeHtml(bs.name)}</span>`;
      }
    }
    html += '</div><div class="pb-label-right">';
    if (posValue === mode) html += `<span class="pb-value">${escapeHtml(bs.displayValue)}</span>`;
    if (posIndicator === mode && indicatorHtml) html += indicatorHtml;
    html += '</div></div>';
    return html;
  }

  /**
   * Build target marker HTML.
   * @param {EntityConfig} ec
   * @param {NormalizedConfig} cfg
   * @param {number} min
   * @param {number} max
   * @returns {string}
   */
  _buildTargetHtml(ec, cfg, min, max) {
    const targetCfg = ec.target ?? cfg.target;
    const { value: targetNum, showLabel } = resolveTarget(targetCfg, this._hass);
    if (targetNum === null) return '';

    const targetPct = clamp((targetNum - min) / (max - min), 0, 1) * 100;
    const barWidthScale = computeBarWidthScale(ec, cfg);
    const targetPos = `left:${targetPct * barWidthScale}%`;
    const labelHtml = showLabel
      ? `<span class="pb-target-label">${escapeHtml(targetNum)}</span>`
      : '';
    return `<div class="pb-target" style="${targetPos}">${labelHtml}</div>`;
  }

  /**
   * Differential update — only change fill width, value text, color, icon.
   */
  _updateBars() {
    const cfg = this._cfg;
    for (const ec of cfg.entities) {
      const bs = resolveBarState(ec, cfg, this._hass);
      const barWidthScale = computeBarWidthScale(ec, cfg);
      const row = this._elements.rows?.[ec.entity];
      if (!row) continue;

      /* During active slider drag, optimistic UI takes priority over server echo. */
      if (/** @type {*} */ (row).__pulseSliding) continue;

      const visible = evaluateVisibility(ec, this._hass);
      /** @type {HTMLElement} */ (row).style.display = visible ? '' : 'none';
      if (!visible) continue;

      row.classList.toggle('unavailable', bs.isUnavailable);

      /** @type {HTMLElement|null} */
      const fillEl = /** @type {HTMLElement|null} */ (row.querySelector('.pb-fill'));
      if (fillEl) {
        const scaledWidth = `${bs.fill * barWidthScale}%`;
        fillEl.style.width = scaledWidth;
        fillEl.style.backgroundColor = bs.color || '';

        /* Sparkline width must mirror the bar_width clamp so the line never
           runs past the bar end. */
        /** @type {HTMLElement|null} */
        const sparkSvg = /** @type {HTMLElement|null} */ (row.querySelector('.pb-sparkline'));
        if (sparkSvg) sparkSvg.style.width = `${barWidthScale * 100}%`;

        const iconEl = row.querySelector('.pb-icon');
        if (iconEl && bs.resolvedIcon) iconEl.setAttribute('icon', bs.resolvedIcon);
      }

      const nameEls = row.querySelectorAll('.pb-name');
      for (const el of nameEls) el.textContent = bs.name;
      const valueEls = row.querySelectorAll('.pb-value');
      for (const el of valueEls) el.textContent = bs.displayValue;

      const secondaryEls = row.querySelectorAll('.pb-secondary');
      if (secondaryEls.length > 0) {
        const secondaryText = resolveSecondaryInfo(ec, this._hass);
        for (const el of secondaryEls) el.textContent = secondaryText;
      }

      row.setAttribute('aria-valuenow', bs.isUnavailable ? '0' : String(bs.numValue));
      row.setAttribute('aria-valuemin', String(bs.min));
      row.setAttribute('aria-valuemax', String(bs.max));
      row.setAttribute('aria-label', `${escapeHtml(bs.name)}: ${escapeHtml(bs.displayValue)}`);
      row.setAttribute('data-state', bs.isUnavailable ? 'unavailable' : String(bs.numValue));
      if (bs.color) {
        row.setAttribute('data-severity-color', bs.color);
      } else {
        row.removeAttribute('data-severity-color');
      }

      /** @type {HTMLElement|null} */
      const targetEl = /** @type {HTMLElement|null} */ (row.querySelector('.pb-target'));
      const targetCfg = ec.target ?? cfg.target;
      const { value: targetNum } = resolveTarget(targetCfg, this._hass);
      if (targetNum !== null) {
        const targetPct = clamp((targetNum - bs.min) / (bs.max - bs.min), 0, 1) * 100;
        if (targetEl) {
          targetEl.style.left = `${targetPct * barWidthScale}%`;
          targetEl.style.display = '';
          const labelEl = targetEl.querySelector('.pb-target-label');
          if (labelEl) labelEl.textContent = String(targetNum);
        }
      } else if (targetEl) {
        targetEl.style.display = 'none';
      }
    }
  }

  /**
   * Schedule indicator data fetch with debounce.
   */
  _scheduleIndicatorFetch() {
    const cfg = this._cfg;
    if (!cfg) return;
    const hasIndicator = cfg.entities.some(
      /** @param {EntityConfig} ec */ (ec) => {
      const icfg = ec.indicator ?? cfg.indicator;
      return icfg?.show === true;
    });
    if (!hasIndicator) return;

    if (this._indicatorTimer) clearTimeout(this._indicatorTimer);
    this._indicatorTimer = setTimeout(() => this._fetchIndicators(), 500);
  }

  /**
   * Fetch history data and update indicator elements.
   * Uses a single batch WS call for all indicator entities.
   */
  async _fetchIndicators() {
    const cfg = this._cfg;
    if (!cfg) return;

    try {
      /** @type {Map<string, EntityConfig>} */
      const entityMap = new Map();
      for (const ec of cfg.entities) entityMap.set(ec.entity, ec);

      /** @type {Map<number, {entity: string, icfg: import('./types.js').IndicatorConfig}[]>} */
      const byPeriod = new Map();
      for (const ec of cfg.entities) {
        const icfg = ec.indicator ?? cfg.indicator;
        if (!icfg?.show) continue;
        const period = icfg.period ?? 60;
        if (!byPeriod.has(period)) byPeriod.set(period, []);
        /** @type {{entity: string, icfg: import('./types.js').IndicatorConfig}[]} */
        const group = /** @type {{entity: string, icfg: import('./types.js').IndicatorConfig}[]} */ (byPeriod.get(period));
        group.push({ entity: ec.entity, icfg });
      }

      for (const [period, entries] of byPeriod) {
        const entityIds = entries.map((e) => e.entity);
        const prevValues = await fetchPreviousValues(this._hass, entityIds, period);

        for (const { entity, icfg } of entries) {
          const ec = entityMap.get(entity);
          const state = this._hass?.states[entity];
          const rawValue = ec?.attribute
            ? state?.attributes?.[ec.attribute]
            : state?.state;
          const result = computeIndicator(rawValue, prevValues[entity]);
          this._indicators[entity] = result;

          const row = this._elements.rows?.[entity];
          if (!row) continue;
          const indEl = row.querySelector('.pb-indicator');
          if (indEl && ec) {
            const entityState = this._hass?.states[entity];
            const unit = resolveUnit(ec, entityState);
            const decimal = resolveDecimal(ec, cfg, this._hass);
            const { text } = formatIndicator(result.direction, result.delta, icfg.show_delta === true, decimal, unit);
            const inverted = icfg.inverted === true ? ' inverted' : '';
            indEl.textContent = text;
            indEl.className = `pb-indicator ${result.direction}${inverted}`;
          }
        }
      }
    } catch (e) {
      warn('Indicator fetch failed: %O', e);
    }
  }

  /**
   * Resolve sparkline config for an entity.
   * Returns a fully-resolved config with all defaults applied, or null if disabled.
   * @param {EntityConfig} ec
   * @param {NormalizedConfig} cfg
   * @returns {import('./types.js').ResolvedSparklineConfig|null}
   */
  _resolveSparklineConfig(ec, cfg) {
    const raw = ec.sparkline ?? cfg.sparkline;
    if (!raw) return null;
    const scfg = raw === true ? /** @type {import('./types.js').SparklineConfig} */ ({}) : (raw.show ? raw : null);
    if (!scfg) return null;
    const hours = scfg.hours_to_show ?? 24;
    const pph = scfg.points_per_hour ?? 1;
    return {
      hours,
      pointsPerHour: pph,
      slots: Math.max(hours * pph, 2),
      aggregateFunc: scfg.aggregate_func ?? 'avg',
      smoothing: scfg.smoothing !== false,
      strokeWidth: Number(scfg.line_width ?? scfg.stroke_width ?? 1.5) || 1.5,
      color: scfg.color ?? null,
      updateInterval: scfg.update_interval ?? 300,
    };
  }

  /**
   * Build sparkline SVG markup. Shared by the initial render
   * (_buildSparklineHtml) and the post-fetch DOM injection path
   * (_updateSparklines) so both paths produce byte-identical output
   * for the same inputs.
   * @param {{path: string, strokeWidth: number, color: string|null}} scfg
   * @param {number} barWidthScale - 0..1, multiplied by 100 for width%.
   * @param {boolean} [includeXmlns] - true when injecting via DOMParser.
   * @returns {string}
   */
  _buildSparklineMarkup(scfg, barWidthScale, includeXmlns = false) {
    const widthPct = `${barWidthScale * 100}%`;
    const colorStyle = scfg.color ? `color:${sanitizeCssValue(scfg.color)};` : '';
    const ns = includeXmlns ? ' xmlns="http://www.w3.org/2000/svg"' : '';
    return `<svg${ns} class="pb-sparkline" viewBox="0 0 200 50" preserveAspectRatio="none" height="100%" style="width:${widthPct};${colorStyle}"><path d="${scfg.path}" fill="none" stroke="currentColor" stroke-width="${scfg.strokeWidth}" /></svg>`;
  }

  /**
   * Build sparkline SVG HTML for a bar row.
   * @param {EntityConfig} ec
   * @param {NormalizedConfig} cfg
   * @returns {string}
   */
  _buildSparklineHtml(ec, cfg) {
    const scfg = this._resolveSparklineConfig(ec, cfg);
    if (!scfg) return '';
    const data = this._sparklineData[ec.entity];
    if (!data || data.length < 2) return '';
    const path = buildSparklinePath(data, 200, 50, scfg.slots, scfg.aggregateFunc, scfg.smoothing);
    if (!path) return '';
    const barWidthScale = computeBarWidthScale(ec, cfg);
    return this._buildSparklineMarkup(
      { path, strokeWidth: scfg.strokeWidth, color: scfg.color },
      barWidthScale,
      false,
    );
  }

  /**
   * Schedule sparkline data fetch with interval gating.
   */
  _scheduleSparklineFetch() {
    const cfg = this._cfg;
    if (!cfg) return;
    const hasSparkline = cfg.entities.some(
      /** @param {EntityConfig} ec */ (ec) => !!this._resolveSparklineConfig(ec, cfg),
    );
    if (!hasSparkline) return;

    let minInterval = 300;
    for (const ec of cfg.entities) {
      const scfg = this._resolveSparklineConfig(ec, cfg);
      if (scfg && scfg.updateInterval < minInterval) {
        minInterval = scfg.updateInterval;
      }
    }

    const elapsed = (Date.now() - this._sparklineLastFetch) / 1000;
    if (elapsed < minInterval && this._sparklineLastFetch > 0) return;

    if (this._sparklineTimer) clearTimeout(this._sparklineTimer);
    this._sparklineTimer = setTimeout(() => this._fetchSparklines(), 1000);
  }

  /**
   * Fetch sparkline history data and update SVG paths.
   */
  async _fetchSparklines() {
    const cfg = this._cfg;
    if (!cfg) return;

    try {
      /** @type {Map<number, string[]>} */
      const byHours = new Map();
      for (const ec of cfg.entities) {
        const scfg = this._resolveSparklineConfig(ec, cfg);
        if (!scfg) continue;
        const hours = scfg.hours;
        if (!byHours.has(hours)) byHours.set(hours, []);
        /** @type {string[]} */ (byHours.get(hours)).push(ec.entity);
      }

      for (const [hours, entityIds] of byHours) {
        const data = await fetchSparklineData(this._hass, entityIds, hours);
        for (const eid of entityIds) {
          this._sparklineData[eid] = data[eid] || [];
        }
      }

      this._sparklineLastFetch = Date.now();
      this._updateSparklines();
    } catch (e) {
      warn('Sparkline fetch failed: %O', e);
    }
  }

  /**
   * Update sparkline SVG path elements in the DOM.
   * Creates SVG elements if they don't exist yet (first fetch after render).
   */
  _updateSparklines() {
    const cfg = this._cfg;
    if (!cfg) return;
    for (const ec of cfg.entities) {
      const scfg = this._resolveSparklineConfig(ec, cfg);
      if (!scfg) continue;
      const row = this._elements.rows?.[ec.entity];
      if (!row) continue;
      const data = this._sparklineData[ec.entity];
      if (!data || data.length < 2) continue;

      const path = buildSparklinePath(data, 200, 50, scfg.slots, scfg.aggregateFunc, scfg.smoothing);
      if (!path) continue;

      const svg = row.querySelector('.pb-sparkline');
      const barWidthScale = computeBarWidthScale(ec, cfg);
      const sparkWidth = `${barWidthScale * 100}%`;

      if (!svg) {
        // SVG doesn't exist yet — inject it into pb-container between track and fill.
        // Must use DOMParser to create proper SVG namespace elements (innerHTML creates HTMLUnknownElement).
        const container = row.querySelector('.pb-container');
        if (!container) continue;
        const svgMarkup = this._buildSparklineMarkup(
          { path, strokeWidth: scfg.strokeWidth, color: scfg.color },
          barWidthScale,
          true,
        );
        const parsed = new DOMParser().parseFromString(svgMarkup, 'image/svg+xml');
        const svgEl = document.importNode(parsed.documentElement, true);
        const track = container.querySelector('.pb-track');
        if (track && track.nextSibling) {
          container.insertBefore(svgEl, track.nextSibling);
        } else {
          container.appendChild(svgEl);
        }
      } else {
        // SVG exists — update path and width
        const pathEl = svg.querySelector('path');
        if (pathEl) pathEl.setAttribute('d', path);
        /** @type {HTMLElement} */ (svg).style.width = sparkWidth;
      }
    }
  }

  /** Cache previous entity states for change detection. */
  _cacheStates() {
    const cfg = this._cfg;
    this._prevStates = {};
    for (const ec of cfg.entities) {
      const state = this._hass?.states[ec.entity];
      if (state) {
        this._prevStates[ec.entity] = {
          state: state.state,
          last_updated: state.last_updated,
        };
      }
      const targetCfg = ec.target ?? cfg.target;
      if (typeof targetCfg === 'string') {
        const tState = this._hass?.states[targetCfg];
        if (tState) {
          this._prevStates[`__target__${targetCfg}`] = {
            state: tState.state,
            last_updated: tState.last_updated,
          };
        }
      }
    }
  }

  /** Cache DOM references for bar rows. */
  _cacheBarElements() {
    const cfg = this._cfg;
    this._elements.rows = {};
    /** @type {Map<string, EntityConfig>} */
    const entityMap = new Map();
    for (const ec of cfg.entities) entityMap.set(ec.entity, ec);
    /** @type {NodeListOf<HTMLElement>} */
    const rows = this._shadow.querySelectorAll('.pb-row');
    for (const row of rows) {
      const entity = row.dataset.entity;
      if (entity) {
        this._elements.rows[entity] = row;
        const ec = entityMap.get(entity);
        if (ec) {
          bindActionListeners(row, this, this._hass, cfg, ec);
          const interactiveCfg = ec.interactive ?? cfg.interactive;
          if (interactiveCfg) {
            bindSliderListeners(row, this, cfg, ec);
          }
        }
        attachRipple(row);
        for (const btn of row.querySelectorAll('.pb-step-btn')) {
          attachRipple(/** @type {HTMLElement} */ (btn));
        }
      }
    }
  }

  /**
   * Return card height for masonry view.
   * @returns {number}
   */
  getCardSize() {
    const entityCount = this._config?.entities?.length || 1;
    const columns = this._config?.columns || 1;
    const rows = Math.ceil(entityCount / columns);
    return rows + (this._config?.title ? 1 : 0);
  }

  /**
   * Return grid sizing for sections view.
   * @returns {object}
   */
  getGridOptions() {
    const entityCount = this._config?.entities?.length || 1;
    const columns = this._config?.columns || 1;
    const rows = Math.ceil(entityCount / columns);
    return { columns: 12, min_columns: 3, rows: Math.max(1, rows), min_rows: 1 };
  }

  /**
   * Return editor custom element for visual editor.
   * Lazy-loads editor.js (and lit dependency) on first editor open.
   * @returns {Promise<HTMLElement>}
   */
  static async getConfigElement() {
    await import('./pulse-bar-card-editor.js');
    return document.createElement('pulse-bar-card-editor');
  }

  /**
   * Return stub config for card picker.
   * @param {Hass} hass
   * @returns {object}
   */
  static getStubConfig(hass) {
    const entities = Object.keys(hass.states).filter((eid) => {
      const state = hass.states[eid];
      return eid.startsWith('sensor.') && !isNaN(parseFloat(state.state));
    });
    return { entity: entities[0] || 'sensor.example' };
  }
}

// Register the new name first; alias the old name as a thin subclass
// (one class can only be registered once with customElements.define)
// so existing `type: custom:pulse-card` configs continue to work.
if (!customElements.get('pulse-bar-card')) {
  customElements.define('pulse-bar-card', PulseBarCard);
}
if (!customElements.get('pulse-card')) {
  customElements.define('pulse-card', class extends PulseBarCard {});
}

// Register in card picker — primary name is `pulse-bar-card`. Old
// `pulse-card` configs still resolve via the alias above.
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'pulse-bar-card',
  name: 'Pulse Bar Card',
  description: 'Compact horizontal bar chart for sensor data visualization',
  preview: true,
  documentationURL: 'https://github.com/hiall-fyi/pulse-card',
});

console.info(
  `%c PULSE-BAR-CARD %c v${VERSION} `,
  'background:#03A9F4;color:white;font-weight:bold',
  'background:#333;color:white',
);

// Bundle Pulse Climate Card into the same file
import '../pulse-climate/pulse-climate-card.js';

export default PulseBarCard;
