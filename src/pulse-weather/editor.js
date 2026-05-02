/**
 * @module pulse-weather/editor
 * @description Visual config editor for Pulse Weather Card (lazy-loaded).
 */

import { EDITOR_NAME, SECTION_TYPES } from './constants.js';
import { escapeHtml } from '../shared/utils.js';

/**
 * Pulse Weather Card visual editor.
 */
class PulseWeatherCardEditor extends HTMLElement {
  /** Create editor instance. */
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    /** @type {Record<string, unknown>|null} */
    this._config = null;
    /** @type {Hass|null} */
    this._hass = null;
  }

  /**
   * Set editor configuration.
   * @param {Record<string, unknown>} config - Card config.
   */
  setConfig(config) {
    this._config = { ...config };
    this._render();
  }

  /**
   * Set hass object.
   * @param {Hass} hass - Home Assistant hass object.
   */
  set hass(hass) {
    this._hass = hass;
  }

  /**
   * Fire config-changed event.
   */
  _fireConfigChanged() {
    this.dispatchEvent(new CustomEvent('config-changed', {
      detail: { config: this._config },
      bubbles: true,
      composed: true,
    }));
  }

  /**
   * Render editor UI.
   */
  _render() {
    if (!this.shadowRoot || !this._config) return;

    const sections = /** @type {Array<{type: string}>} */ (this._config.sections || [{ type: 'overview' }]);

    const sectionRows = sections.map((/** @type {{type: string}} */ s, /** @type {number} */ i) => `
      <div class="editor-section-row" data-index="${i}">
        <select class="editor-select" data-index="${i}" data-field="type">
          ${SECTION_TYPES.map((t) => `<option value="${escapeHtml(t)}" ${t === s.type ? 'selected' : ''}>${escapeHtml(t)}</option>`).join('')}
        </select>
        ${s.type === 'atmosphere' ? '<span class="editor-note">Requires Atmos CE sensors</span>' : ''}
        <button class="editor-btn editor-remove" data-index="${i}" title="Remove section">✕</button>
      </div>
    `).join('');

    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; padding: 16px; }
        .editor-field { margin-bottom: 12px; }
        .editor-label { font-size: 12px; font-weight: 500; margin-bottom: 4px; display: block; }
        .editor-input, .editor-select {
          width: 100%; padding: 8px; border: 1px solid var(--divider-color, #e0e0e0);
          border-radius: 4px; font-size: 14px; background: var(--card-background-color, #fff);
          color: var(--primary-text-color, #333); box-sizing: border-box;
        }
        .editor-section-row {
          display: flex; align-items: center; gap: 8px; margin-bottom: 4px;
        }
        .editor-section-row .editor-select { flex: 1; }
        .editor-btn {
          padding: 4px 8px; border: 1px solid var(--divider-color, #e0e0e0);
          border-radius: 4px; cursor: pointer; font-size: 12px;
          background: var(--card-background-color, #fff); color: var(--primary-text-color, #333);
        }
        .editor-btn:hover { background: var(--primary-color, #03a9f4); color: #fff; }
        .editor-remove { color: #ff453a; border-color: #ff453a; }
        .editor-note { font-size: 10px; color: var(--secondary-text-color, #888); font-style: italic; }
        .editor-add { margin-top: 8px; }
      </style>
      <div class="editor-field">
        <label class="editor-label">Weather Entity</label>
        <input class="editor-input" type="text" value="${escapeHtml(String(this._config.weather_entity || ''))}" data-field="weather_entity" placeholder="weather.home"/>
      </div>
      <div class="editor-field">
        <label class="editor-label">Atmos CE Source (optional)</label>
        <input class="editor-input" type="text" value="${escapeHtml(String(this._config.atmos_source || ''))}" data-field="atmos_source" placeholder="Auto-detect"/>
      </div>
      <div class="editor-field">
        <label class="editor-label">Sections</label>
        ${sectionRows}
        <button class="editor-btn editor-add">+ Add Section</button>
      </div>
    `;

    // Bind events
    this.shadowRoot.querySelectorAll('.editor-input').forEach((input) => {
      input.addEventListener('change', (e) => {
        if (!this._config) return;
        const field = /** @type {HTMLInputElement} */ (e.target).dataset.field;
        if (field) {
          this._config[field] = /** @type {HTMLInputElement} */ (e.target).value || undefined;
          this._fireConfigChanged();
        }
      });
    });

    this.shadowRoot.querySelectorAll('.editor-select').forEach((select) => {
      select.addEventListener('change', (e) => {
        if (!this._config) return;
        const idx = Number(/** @type {HTMLSelectElement} */ (e.target).dataset.index);
        const updated = /** @type {Array<{type: string}>} */ ([...(/** @type {Array<{type: string}>} */ (this._config.sections) || [])]);
        updated[idx] = { ...updated[idx], type: /** @type {HTMLSelectElement} */ (e.target).value };
        this._config.sections = updated;
        this._fireConfigChanged();
        this._render();
      });
    });

    this.shadowRoot.querySelectorAll('.editor-remove').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        if (!this._config) return;
        const idx = Number(/** @type {HTMLButtonElement} */ (e.target).dataset.index);
        const remaining = /** @type {Array<{type: string}>} */ ([...(/** @type {Array<{type: string}>} */ (this._config.sections) || [])]);
        remaining.splice(idx, 1);
        this._config.sections = remaining.length > 0 ? remaining : [{ type: 'overview' }];
        this._fireConfigChanged();
        this._render();
      });
    });

    const addBtn = this.shadowRoot.querySelector('.editor-add');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        if (!this._config) return;
        const appended = /** @type {Array<{type: string}>} */ ([...(/** @type {Array<{type: string}>} */ (this._config.sections) || [])]);
        appended.push({ type: 'overview' });
        this._config.sections = appended;
        this._fireConfigChanged();
        this._render();
      });
    }
  }
}

if (!customElements.get(EDITOR_NAME)) {
  customElements.define(EDITOR_NAME, PulseWeatherCardEditor);
}

export { PulseWeatherCardEditor };
