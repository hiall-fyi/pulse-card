/**
 * @module pulse-card
 * @description Main PulseCard custom element — renders horizontal bar chart(s)
 * for Home Assistant sensor data. Entry point for the card.
 */

import { STYLES } from './styles.js';
import { VERSION, DEFAULTS } from './constants.js';
import { bindActionListeners, cleanupActionListeners } from './action-handler.js';
import './editor.js';
import {
  clamp,
  computeIndicator,
  cssValue,
  escapeHtml,
  fetchPreviousValues,
  formatIndicator,
  resolveBarState,
  resolveTarget,
  normalizeConfig,
  sanitizeCssValue,
  warn,
} from './utils.js';

/** @typedef {import('./types.js').PulseCardConfig & {entities: import('./types.js').EntityConfig[]}} NormalizedConfig */
/** @typedef {import('./types.js').EntityConfig} EntityConfig */
/** @typedef {import('./types.js').Hass} Hass */
/** @typedef {import('./types.js').BarState} BarState */

/**
 * PulseCard — compact horizontal bar chart card for Home Assistant.
 * @extends HTMLElement
 */
class PulseCard extends HTMLElement {
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

  /** Clean up timers and action listeners when element is removed from DOM. */
  disconnectedCallback() {
    if (this._indicatorTimer) {
      clearTimeout(this._indicatorTimer);
      this._indicatorTimer = null;
    }
    // Clean up action listener timers on all bar rows
    const rows = this._shadow.querySelectorAll('.bar-row');
    for (const row of rows) {
      cleanupActionListeners(/** @type {HTMLElement} */ (row));
    }
  }

  /**
   * Validate and store config. Throws on invalid. [CP-4, AC-12.15]
   * @param {Record<string, *>} config
   */
  setConfig(config) {
    this._config = normalizeConfig(config);
    this._elements = {};
    if (this._hass) this._fullRender();
  }

  /**
   * Called by HA on every state change. Differential update. [NFR-1]
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
      // Check if target entity state changed [AC-7.1]
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
    }
  }

  /** Build complete DOM via innerHTML. */
  _fullRender() {
    const cfg = this._cfg;
    if (!cfg) return;
    const columns = cfg.columns ?? 1;
    const columnsClass = columns > 1 ? ` columns-${columns}` : '';
    const entityRowClass = cfg.entity_row ? ' entity-row' : '';
    const gap = cfg.gap;
    let inlineStyle = '';
    if (columns > 1 || gap !== undefined) {
      const parts = [];
      if (columns > 1) parts.push(`--pulse-columns:${columns}`);
      if (gap !== undefined) {
        parts.push(`--pulse-gap:${sanitizeCssValue(cssValue(gap))}`);
      }
      inlineStyle = ` style="${parts.join(';')}"`;
    }
    const columnsStyle = inlineStyle;

    let inner = '';
    if (cfg.title) inner += `<div class="pulse-title">${escapeHtml(cfg.title)}</div>`;
    inner += `<div class="pulse-card${columnsClass}${entityRowClass}"${columnsStyle}>`;
    for (const ec of cfg.entities) inner += this._renderBarRow(ec);
    inner += '</div>';

    const fullHtml = cfg.entity_row ? inner : `<ha-card>${inner}</ha-card>`;

    const old = this._shadow.querySelector('ha-card, .pulse-card');
    if (old) old.remove();

    const tpl = document.createElement('template');
    tpl.innerHTML = fullHtml;
    this._shadow.appendChild(tpl.content.cloneNode(true));

    this._elements.container = this._shadow.querySelector('.pulse-card');
    this._cacheBarElements();
  }

  /**
   * Render a single bar row HTML string. [US-1, AC-1.1–1.4]
   * @param {EntityConfig} ec - Entity config.
   * @returns {string} HTML string.
   */
  _renderBarRow(ec) {
    const cfg = this._cfg;
    const bs = resolveBarState(ec, cfg, this._hass);

    // Positions
    const posName = ec.positions?.name ?? cfg.positions?.name ?? DEFAULTS.positions.name;
    const posValue = ec.positions?.value ?? cfg.positions?.value ?? DEFAULTS.positions.value;
    const posIcon = ec.positions?.icon ?? cfg.positions?.icon ?? DEFAULTS.positions.icon;
    const posIndicatorRaw = ec.positions?.indicator ?? cfg.positions?.indicator ?? DEFAULTS.positions.indicator;
    // Auto-promote indicator position when indicator.show is true but position is default 'off'
    const indicatorCfg = ec.indicator ?? cfg.indicator;
    const posIndicator = indicatorCfg?.show === true && posIndicatorRaw === 'off' ? 'outside' : posIndicatorRaw;

    // Animation — cfg.animation is guaranteed populated by normalizeConfig
    const ecAnim = ec.animation ?? {};
    const animSpeed = ecAnim.speed ?? /** @type {NonNullable<typeof cfg.animation>} */ (cfg.animation).speed;
    const animEffect = ecAnim.effect ?? /** @type {NonNullable<typeof cfg.animation>} */ (cfg.animation).effect;
    const animState = ecAnim.state ?? /** @type {NonNullable<typeof cfg.animation>} */ (cfg.animation).state;

    // Indicator
    const indicatorHtml = this._buildIndicatorHtml(ec, cfg, posIndicator);

    // Labels (outside)
    const labelsHtml = this._buildPositionHtml(bs, posName, posValue, posIcon, posIndicator, indicatorHtml, 'outside');

    // Content (inside/classic mode)
    const contentHtml = this._buildPositionHtml(bs, posName, posValue, posIcon, posIndicator, indicatorHtml, 'inside');

    // Bar fill
    const height = sanitizeCssValue(cssValue(ec.height ?? cfg.height));
    const borderRadius = sanitizeCssValue(cssValue(ec.border_radius ?? cfg.border_radius));
    const fillStyle = bs.color ? `background-color:${sanitizeCssValue(bs.color)};` : '';
    const chargeClass = animEffect === 'charge' && !bs.isUnavailable ? ' charge' : '';
    const transitionStyle = animState === 'off' ? 'transition:none;' : '';
    const barWidthRaw = ec.bar_width ?? cfg.bar_width;
    // eslint-disable-next-line eqeqeq -- loose equality catches both null and undefined
    const barWidthScale = barWidthRaw != null ? Math.max(1, Math.min(100, barWidthRaw)) / 100 : 1;
    const scaledFill = bs.fill * barWidthScale;
    const fillDim = `width:${scaledFill}%;${transitionStyle}${fillStyle}`;

    // Target marker [US-7]
    const targetHtml = this._buildTargetHtml(ec, cfg, bs.min, bs.max);

    const barHtml = `
      <div class="bar-container" style="height:${height};border-radius:${borderRadius};--pulse-animation-speed:${animSpeed}s;">
        <div class="bar-track"></div>
        <div class="bar-fill${chargeClass}" data-entity="${escapeHtml(ec.entity)}" style="${fillDim}"></div>
        ${targetHtml}
        ${contentHtml}
      </div>`;

    // ARIA [NFR-4]
    const ariaAttrs = bs.isUnavailable
      ? `role="progressbar" aria-valuenow="0" aria-valuemin="${bs.min}" aria-valuemax="${bs.max}" aria-label="${escapeHtml(bs.name)}: Unavailable"`
      : `role="progressbar" aria-valuenow="${bs.numValue}" aria-valuemin="${bs.min}" aria-valuemax="${bs.max}" aria-label="${escapeHtml(bs.name)}: ${escapeHtml(bs.displayValue)}"`;

    const unavailClass = bs.isUnavailable ? ' unavailable' : '';
    return `<div class="bar-row${unavailClass}" data-entity="${escapeHtml(ec.entity)}" ${ariaAttrs}>${labelsHtml}${barHtml}</div>`;
  }

  /**
   * Build indicator HTML snippet.
   * @param {EntityConfig} ec
   * @param {NormalizedConfig} cfg
   * @param {string} posIndicator
   * @returns {string}
   */
  _buildIndicatorHtml(ec, cfg, posIndicator) {
    const indicatorCfg = ec.indicator ?? cfg.indicator;
    const showIndicator = indicatorCfg?.show === true && posIndicator !== 'off';
    if (!showIndicator) return '';

    const data = this._indicators[ec.entity];
    const dir = data?.direction ?? 'neutral';
    const showDelta = indicatorCfg?.show_delta === true && !!data;
    const { text } = formatIndicator(dir, data?.delta ?? 0, showDelta);
    return `<span class="bar-indicator ${dir}">${text}</span>`;
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
   * @returns {string}
   */
  _buildPositionHtml(bs, posName, posValue, posIcon, posIndicator, indicatorHtml, mode) {
    if (posName !== mode && posValue !== mode && posIcon !== mode && posIndicator !== mode) return '';

    const wrapperClass = mode === 'outside' ? 'bar-labels' : 'bar-content';
    let html = `<div class="${wrapperClass}"><div class="bar-label-left">`;
    if (posIcon === mode && bs.resolvedIcon) {
      html += `<ha-icon class="bar-icon" icon="${escapeHtml(bs.resolvedIcon)}"></ha-icon>`;
    }
    if (posName === mode) html += `<span class="bar-name">${escapeHtml(bs.name)}</span>`;
    html += '</div><div class="bar-label-right">';
    if (posValue === mode) html += `<span class="bar-value">${escapeHtml(bs.displayValue)}</span>`;
    if (posIndicator === mode && indicatorHtml) html += indicatorHtml;
    html += '</div></div>';
    return html;
  }

  /**
   * Build target marker HTML. [US-7, AC-7.1–7.4]
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
    const barWidthRaw = ec.bar_width ?? cfg.bar_width;
    // eslint-disable-next-line eqeqeq -- loose equality catches both null and undefined
    const barWidthScale = barWidthRaw != null ? Math.max(1, Math.min(100, barWidthRaw)) / 100 : 1;
    const targetPos = `left:${targetPct * barWidthScale}%`;
    const labelHtml = showLabel
      ? `<span class="bar-target-label">${escapeHtml(targetNum)}</span>`
      : '';
    return `<div class="bar-target${showLabel ? ' show-label' : ''}" style="${targetPos}">${labelHtml}</div>`;
  }

  /**
   * Differential update — only change fill width, value text, color, icon. [NFR-1]
   */
  _updateBars() {
    const cfg = this._cfg;
    for (const ec of cfg.entities) {
      const bs = resolveBarState(ec, cfg, this._hass);
      const row = this._elements.rows?.[ec.entity];
      if (!row) continue;

      // Update unavailable class
      row.classList.toggle('unavailable', bs.isUnavailable);

      // Update fill
      /** @type {HTMLElement|null} */
      const fillEl = /** @type {HTMLElement|null} */ (row.querySelector('.bar-fill'));
      if (fillEl) {
        const barWidthRaw = ec.bar_width ?? cfg.bar_width;
        // eslint-disable-next-line eqeqeq -- loose equality catches both null and undefined
        const barWidthScale = barWidthRaw != null ? Math.max(1, Math.min(100, barWidthRaw)) / 100 : 1;
        fillEl.style.width = `${bs.fill * barWidthScale}%`;
        fillEl.style.backgroundColor = bs.color || '';

        // Update icon if severity has icon override
        const iconEl = row.querySelector('.bar-icon');
        if (iconEl && bs.resolvedIcon) iconEl.setAttribute('icon', bs.resolvedIcon);
      }

      // Update name + value text
      const nameEls = row.querySelectorAll('.bar-name');
      for (const el of nameEls) el.textContent = bs.name;
      const valueEls = row.querySelectorAll('.bar-value');
      for (const el of valueEls) el.textContent = bs.displayValue;

      // Update ARIA
      row.setAttribute('aria-valuenow', bs.isUnavailable ? '0' : String(bs.numValue));
      row.setAttribute('aria-valuemin', String(bs.min));
      row.setAttribute('aria-valuemax', String(bs.max));
      row.setAttribute('aria-label', `${escapeHtml(bs.name)}: ${escapeHtml(bs.displayValue)}`);

      // Update target marker position [US-7]
      /** @type {HTMLElement|null} */
      const targetEl = /** @type {HTMLElement|null} */ (row.querySelector('.bar-target'));
      const targetCfg = ec.target ?? cfg.target;
      const { value: targetNum } = resolveTarget(targetCfg, this._hass);
      if (targetNum !== null) {
        const targetPct = clamp((targetNum - bs.min) / (bs.max - bs.min), 0, 1) * 100;
        const barWidthRawT = ec.bar_width ?? cfg.bar_width;
        // eslint-disable-next-line eqeqeq -- loose equality catches both null and undefined
        const barWidthScaleT = barWidthRawT != null ? Math.max(1, Math.min(100, barWidthRawT)) / 100 : 1;
        if (targetEl) {
          targetEl.style.left = `${targetPct * barWidthScaleT}%`;
          targetEl.style.display = '';
          const labelEl = targetEl.querySelector('.bar-target-label');
          if (labelEl) labelEl.textContent = String(targetNum);
        }
      } else if (targetEl) {
        targetEl.style.display = 'none';
      }
    }
  }

  /**
   * Schedule indicator data fetch with debounce. [US-16]
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
   * Fetch history data and update indicator elements. [US-16, AC-16.1–16.5]
   * Uses a single batch WS call for all indicator entities.
   */
  async _fetchIndicators() {
    const cfg = this._cfg;
    if (!cfg) return;

    try {
      // Build entity ID → EntityConfig map for O(1) lookup
      /** @type {Map<string, EntityConfig>} */
      const entityMap = new Map();
      for (const ec of cfg.entities) entityMap.set(ec.entity, ec);

      // Collect entities that need indicator data, grouped by period
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

      // Batch fetch per period group
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

          // Update DOM
          const row = this._elements.rows?.[entity];
          if (!row) continue;
          const indEl = row.querySelector('.bar-indicator');
          if (indEl) {
            const { text } = formatIndicator(result.direction, result.delta, icfg.show_delta === true);
            indEl.textContent = text;
            indEl.className = `bar-indicator ${result.direction}`;
          }
        }
      }
    } catch (e) {
      warn('Indicator fetch failed: %O', e);
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
    const rows = this._shadow.querySelectorAll('.bar-row');
    for (const row of rows) {
      const entity = row.dataset.entity;
      if (entity) {
        this._elements.rows[entity] = row;
        const ec = entityMap.get(entity);
        if (ec) bindActionListeners(row, this, this._hass, cfg, ec);
      }
    }
  }

  /**
   * Return card height for masonry view. [US-11, AC-11.4]
   * @returns {number}
   */
  getCardSize() {
    const entityCount = this._config?.entities?.length || 1;
    const columns = this._config?.columns || 1;
    const rows = Math.ceil(entityCount / columns);
    return rows + (this._config?.title ? 1 : 0);
  }

  /**
   * Return grid sizing for sections view. [US-11, AC-11.1–11.3]
   * @returns {object}
   */
  getGridOptions() {
    const entityCount = this._config?.entities?.length || 1;
    const columns = this._config?.columns || 1;
    const rows = Math.ceil(entityCount / columns);
    return { columns: 12, min_columns: 3, rows: Math.max(1, rows), min_rows: 1 };
  }

  /**
   * Return editor custom element for visual editor. [US-4, AC-4.1]
   * @returns {HTMLElement}
   */
  static getConfigElement() {
    return document.createElement('pulse-card-editor');
  }

  /**
   * Return stub config for card picker. [AC-4.6, AC-12.13]
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

// Register custom element [AC-12.12]
if (!customElements.get('pulse-card')) {
  customElements.define('pulse-card', PulseCard);
}

// Register in card picker [AC-12.12, AC-12.13]
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'pulse-card',
  name: 'Pulse Card',
  description: 'Compact horizontal bar chart for sensor data visualization',
  preview: true,
  documentationURL: 'https://github.com/hiall-fyi/pulse-card',
});

console.info(
  `%c PULSE-CARD %c v${VERSION} `,
  'background:#03A9F4;color:white;font-weight:bold',
  'background:#333;color:white',
);

export default PulseCard;
