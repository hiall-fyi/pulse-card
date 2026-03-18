/**
 * @module pulse-card
 * @description Main PulseCard custom element — renders horizontal bar chart(s)
 * for Home Assistant sensor data. Entry point for the card.
 */

import { STYLES } from './styles.js';
import { DEFAULTS } from './constants.js';
import { bindActionListeners } from './action-handler.js';
import './editor.js';
import {
  clamp,
  computeIndicator,
  cssValue,
  escapeHtml,
  fetchPreviousValue,
  resolveBarState,
  normalizeConfig,
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

  /** Clean up timers when element is removed from DOM. */
  disconnectedCallback() {
    if (this._indicatorTimer) {
      clearTimeout(this._indicatorTimer);
      this._indicatorTimer = null;
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
    const dirClass = cfg.direction === 'up' ? ' direction-up' : '';
    const entityRowClass = cfg.entity_row ? ' entity-row' : '';
    const columnsStyle = columns > 1 ? ` style="--pulse-columns:${columns}"` : '';

    let inner = '';
    if (cfg.title) inner += `<div class="pulse-title">${escapeHtml(cfg.title)}</div>`;
    inner += `<div class="pulse-card${columnsClass}${dirClass}${entityRowClass}"${columnsStyle}>`;
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
    const isVertical = cfg.direction === 'up';

    // Positions
    const posName = ec.positions?.name ?? cfg.positions?.name ?? 'outside';
    const posValue = ec.positions?.value ?? cfg.positions?.value ?? 'outside';
    const posIcon = ec.positions?.icon ?? cfg.positions?.icon ?? 'off';
    const posIndicatorRaw = ec.positions?.indicator ?? cfg.positions?.indicator ?? 'off';
    // Auto-promote indicator position when indicator.show is true but position is default 'off'
    const indicatorCfg = ec.indicator ?? cfg.indicator;
    const posIndicator = indicatorCfg?.show === true && posIndicatorRaw === 'off' ? 'outside' : posIndicatorRaw;

    // Animation
    const ecAnim = ec.animation ?? {};
    const animSpeed = ecAnim.speed ?? cfg.animation?.speed ?? DEFAULTS.animation.speed;
    const animEffect = ecAnim.effect ?? cfg.animation?.effect ?? DEFAULTS.animation.effect;
    const animState = ecAnim.state ?? cfg.animation?.state ?? DEFAULTS.animation.state;

    // Indicator
    const indicatorHtml = this._buildIndicatorHtml(ec, cfg, posIndicator);

    // Labels (outside)
    const labelsHtml = this._buildLabelsHtml(bs, posName, posValue, posIcon, posIndicator, indicatorHtml);

    // Content (inside/classic mode)
    const contentHtml = this._buildContentHtml(bs, posName, posValue, posIcon, posIndicator, indicatorHtml);

    // Bar fill
    const height = cssValue(ec.height ?? cfg.height ?? DEFAULTS.height);
    const borderRadius = cssValue(ec.border_radius ?? cfg.border_radius ?? DEFAULTS.border_radius);
    const fillStyle = bs.color ? `background-color:${bs.color};` : '';
    const chargeClass = animEffect === 'charge' && !bs.isUnavailable ? ' charge' : '';
    const transitionStyle = animState === 'off' ? 'transition:none;' : '';
    const fillDim = isVertical
      ? `height:${bs.fill}%;${transitionStyle}${fillStyle}`
      : `width:${bs.fill}%;${transitionStyle}${fillStyle}`;

    // Target marker [US-7]
    const targetHtml = this._buildTargetHtml(ec, cfg, bs.min, bs.max, isVertical);

    const barHtml = `
      <div class="bar-container" style="height:${height};border-radius:${borderRadius};--pulse-animation-speed:${animSpeed}s;">
        <div class="bar-track"></div>
        <div class="bar-fill${chargeClass}" data-entity="${ec.entity}" style="${fillDim}"></div>
        ${targetHtml}
        ${contentHtml}
      </div>`;

    // ARIA [NFR-4]
    const ariaAttrs = bs.isUnavailable
      ? `role="progressbar" aria-valuenow="0" aria-valuemin="${bs.min}" aria-valuemax="${bs.max}" aria-label="${escapeHtml(bs.name)}: Unavailable"`
      : `role="progressbar" aria-valuenow="${bs.numValue}" aria-valuemin="${bs.min}" aria-valuemax="${bs.max}" aria-label="${escapeHtml(bs.name)}: ${escapeHtml(bs.displayValue)}"`;

    const unavailClass = bs.isUnavailable ? ' unavailable' : '';
    return `<div class="bar-row${unavailClass}" data-entity="${ec.entity}" ${ariaAttrs}>${labelsHtml}${barHtml}</div>`;
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
    const arrow = dir === 'up' ? '▲' : dir === 'down' ? '▼' : '▶';
    const showDelta = indicatorCfg?.show_delta === true;
    const deltaStr = showDelta && data ? ` ${data.delta > 0 ? '+' : ''}${data.delta}` : '';
    return `<span class="bar-indicator ${dir}">${arrow}${deltaStr}</span>`;
  }

  /**
   * Build outside labels HTML.
   * @param {BarState} bs
   * @param {string} posName
   * @param {string} posValue
   * @param {string} posIcon
   * @param {string} posIndicator
   * @param {string} indicatorHtml
   * @returns {string}
   */
  _buildLabelsHtml(bs, posName, posValue, posIcon, posIndicator, indicatorHtml) {
    if (posName !== 'outside' && posValue !== 'outside' && posIcon !== 'outside' && posIndicator !== 'outside') return '';

    let html = '<div class="bar-labels"><div class="bar-label-left">';
    if (posIcon === 'outside' && bs.resolvedIcon) {
      html += `<ha-icon class="bar-icon" icon="${escapeHtml(bs.resolvedIcon)}"></ha-icon>`;
    }
    if (posName === 'outside') html += `<span class="bar-name">${escapeHtml(bs.name)}</span>`;
    html += '</div><div class="bar-label-right">';
    if (posValue === 'outside') html += `<span class="bar-value">${escapeHtml(bs.displayValue)}</span>`;
    if (posIndicator === 'outside' && indicatorHtml) html += indicatorHtml;
    html += '</div></div>';
    return html;
  }

  /**
   * Build inside content HTML (classic mode).
   * @param {BarState} bs
   * @param {string} posName
   * @param {string} posValue
   * @param {string} posIcon
   * @param {string} posIndicator
   * @param {string} indicatorHtml
   * @returns {string}
   */
  _buildContentHtml(bs, posName, posValue, posIcon, posIndicator, indicatorHtml) {
    if (posName !== 'inside' && posValue !== 'inside' && posIcon !== 'inside' && posIndicator !== 'inside') return '';

    let html = '<div class="bar-content">';
    if (posIcon === 'inside' && bs.resolvedIcon) {
      html += `<ha-icon class="bar-icon" icon="${escapeHtml(bs.resolvedIcon)}"></ha-icon>`;
    }
    if (posName === 'inside') html += `<span class="bar-name">${escapeHtml(bs.name)}</span>`;
    if (posValue === 'inside') html += `<span class="bar-value">${escapeHtml(bs.displayValue)}</span>`;
    if (posIndicator === 'inside' && indicatorHtml) html += indicatorHtml;
    html += '</div>';
    return html;
  }

  /**
   * Build target marker HTML. [US-7, AC-7.1–7.4]
   * @param {EntityConfig} ec
   * @param {NormalizedConfig} cfg
   * @param {number} min
   * @param {number} max
   * @param {boolean} isVertical
   * @returns {string}
   */
  _buildTargetHtml(ec, cfg, min, max, isVertical) {
    const targetCfg = ec.target ?? cfg.target;
    const targetNum = this._resolveTargetValue(targetCfg);
    if (targetNum === null) return '';

    const targetPct = clamp((targetNum - min) / (max - min), 0, 1) * 100;
    const targetPos = isVertical ? `bottom:${targetPct}%` : `left:${targetPct}%`;
    const showLabel = this._shouldShowTargetLabel(targetCfg);
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
        const isVertical = cfg.direction === 'up';
        if (isVertical) {
          fillEl.style.height = `${bs.fill}%`;
        } else {
          fillEl.style.width = `${bs.fill}%`;
        }
        fillEl.style.backgroundColor = bs.color || '';

        // Update icon if severity has icon override
        const iconEl = row.querySelector('.bar-icon');
        if (iconEl) iconEl.setAttribute('icon', bs.resolvedIcon);
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
      const targetNum = this._resolveTargetValue(targetCfg);
      if (targetNum !== null) {
        const targetPct = clamp((targetNum - bs.min) / (bs.max - bs.min), 0, 1) * 100;
        if (targetEl) {
          const isVertical = cfg.direction === 'up';
          if (isVertical) {
            targetEl.style.bottom = `${targetPct}%`;
            targetEl.style.left = '';
          } else {
            targetEl.style.left = `${targetPct}%`;
            targetEl.style.bottom = '';
          }
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
   */
  async _fetchIndicators() {
    const cfg = this._cfg;
    if (!cfg) return;
    for (const ec of cfg.entities) {
      const icfg = ec.indicator ?? cfg.indicator;
      if (!icfg?.show) continue;

      const period = icfg.period ?? 60;
      const prev = await fetchPreviousValue(this._hass, ec.entity, period);
      const state = this._hass?.states[ec.entity];
      const rawValue = ec.attribute
        ? state?.attributes?.[ec.attribute]
        : state?.state;
      const result = computeIndicator(rawValue, prev);
      this._indicators[ec.entity] = result;

      // Update DOM
      const row = this._elements.rows?.[ec.entity];
      if (!row) continue;
      const indEl = row.querySelector('.bar-indicator');
      if (indEl) {
        const arrow = result.direction === 'up' ? '▲' : result.direction === 'down' ? '▼' : '▶';
        const showDelta = icfg.show_delta === true;
        const deltaStr = showDelta ? ` ${result.delta > 0 ? '+' : ''}${result.delta}` : '';
        indEl.textContent = `${arrow}${deltaStr}`;
        indEl.className = `bar-indicator ${result.direction}`;
      }
    }
  }

  /**
   * Resolve target config to a numeric value.
   * @param {number|string|import('./types.js').TargetObjectConfig|undefined|null} target
   * @returns {number|null}
   */
  _resolveTargetValue(target) {
    if (target === undefined || target === null) return null;
    if (typeof target === 'number') return isNaN(target) ? null : target;
    if (typeof target === 'string') {
      const state = this._hass?.states[target];
      if (!state) return null;
      const num = parseFloat(state.state);
      return isNaN(num) ? null : num;
    }
    if (typeof target === 'object' && target.value !== undefined) {
      return this._resolveTargetValue(target.value);
    }
    return null;
  }

  /**
   * Check if target label should be shown.
   * @param {number|string|import('./types.js').TargetObjectConfig|undefined|null} target
   * @returns {boolean}
   */
  _shouldShowTargetLabel(target) {
    if (typeof target === 'object' && target !== null) {
      return target.show_label === true;
    }
    return false;
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
    /** @type {NodeListOf<HTMLElement>} */
    const rows = this._shadow.querySelectorAll('.bar-row');
    for (const row of rows) {
      const entity = row.dataset.entity;
      if (entity) {
        this._elements.rows[entity] = row;
        const ec = cfg.entities.find(
          /** @param {EntityConfig} e */ (e) => e.entity === entity,
        );
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
    return { columns: 6, min_columns: 3, rows: Math.max(1, rows), min_rows: 1 };
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
customElements.define('pulse-card', PulseCard);

// Register in card picker [AC-12.12, AC-12.13]
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'pulse-card',
  name: 'Pulse Card',
  description: 'Compact horizontal bar chart for sensor data visualization',
  preview: true,
  documentationURL: 'https://github.com/hiall-fyi/pulse-card',
});

export default PulseCard;
