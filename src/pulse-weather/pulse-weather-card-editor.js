/**
 * @module pulse-weather/editor
 * @description Visual editor for Pulse Weather Card (LitElement).
 * Matches Climate / Bar / Switch family pattern: shared editor helpers,
 * ha-entity-picker, ha-form, ha-expansion-panel, per-section settings.
 */

import { LitElement, html, css, nothing } from 'lit';
import { EDITOR_NAME } from './constants.js';
import {
  loadEditorHelpers, renderReorderButtons, computeLabel, SHARED_EDITOR_STYLES,
} from '../shared/editor-helpers.js';

/**
 * Section groups for the editor UI. Hint surfaces Atmos CE dependency.
 * @type {{label: string, hint?: string, sections: {value: string, label: string}[]}[]}
 */
const SECTION_GROUPS = [
  {
    label: 'Core',
    sections: [
      { value: 'overview', label: 'Overview' },
      { value: 'forecast', label: 'Forecast' },
      { value: 'wind', label: 'Wind' },
      { value: 'astro', label: 'Astro' },
      { value: 'alerts', label: 'Alerts' },
    ],
  },
  {
    label: 'Atmos CE',
    hint: 'Requires Atmos CE sensors',
    sections: [
      { value: 'air_quality', label: 'Air quality' },
      { value: 'atmosphere', label: 'Atmosphere' },
      { value: 'meteogram', label: 'Meteogram' },
    ],
  },
];

/** Card-level settings schema (just title for now — weather has no other top-level toggles). */
const SETTINGS_SCHEMA = [
  { name: 'title', label: 'Title', selector: { text: {} } },
];

class PulseWeatherCardEditor extends LitElement {
  /** @type {boolean} Whether HA card helpers have been loaded. */
  _helpersLoaded = false;

  static get properties() {
    return {
      hass: { attribute: false },
      _config: { state: true },
    };
  }

  async connectedCallback() {
    super.connectedCallback();
    if (this._helpersLoaded) return;
    this._helpersLoaded = await loadEditorHelpers('Pulse Weather Card:');
    this.requestUpdate();
  }

  /** @param {Record<string, *>} config */
  setConfig(config) {
    this._config = { ...config };
  }

  /** @param {Record<string, *>} config */
  _fireConfigChanged(config) {
    this._config = config;
    this.dispatchEvent(new CustomEvent('config-changed', {
      detail: { config },
      bubbles: true,
      composed: true,
    }));
  }

  // ── Sections list (ordered, with reorder + remove) ──────────────

  /** @returns {(string|Record<string, *>)[]} */
  _getSectionsRaw() {
    if (!this._config?.sections || !Array.isArray(this._config.sections)) {
      return [{ type: 'overview' }];
    }
    return this._config.sections.map((/** @type {*} */ s) =>
      typeof s === 'string' ? s : { ...s },
    );
  }

  /** @returns {string[]} */
  _getEnabledTypes() {
    return this._getSectionsRaw().map((s) => typeof s === 'string' ? s : s.type);
  }

  /**
   * @param {string} sectionType
   * @returns {Record<string, *>}
   */
  _getSectionConfig(sectionType) {
    const raw = this._getSectionsRaw();
    const entry = raw.find((s) => (typeof s === 'string' ? s : s.type) === sectionType);
    if (!entry || typeof entry === 'string') return {};
    return /** @type {Record<string, *>} */ (entry);
  }

  /**
   * @param {string} sectionType
   * @param {boolean} enabled
   */
  _toggleSection(sectionType, enabled) {
    let sections = this._getSectionsRaw();
    if (enabled && !sections.some((s) => (typeof s === 'string' ? s : s.type) === sectionType)) {
      sections.push(sectionType);
    } else if (!enabled) {
      sections = sections.filter((s) => (typeof s === 'string' ? s : s.type) !== sectionType);
    }
    this._fireConfigChanged({ ...this._config, sections });
  }

  /**
   * @param {string} sectionType
   * @param {string} prop
   * @param {*} value
   */
  _updateSectionProp(sectionType, prop, value) {
    const sections = this._getSectionsRaw();
    const idx = sections.findIndex((s) => (typeof s === 'string' ? s : s.type) === sectionType);
    if (idx === -1) return;
    let entry = sections[idx];
    entry = typeof entry === 'string' ? { type: entry } : { ...entry };
    if (value === '' || value === undefined || value === null) {
      delete entry[prop];
    } else {
      entry[prop] = value;
    }
    const keys = Object.keys(entry).filter((k) => k !== 'type');
    sections[idx] = keys.length === 0 ? entry.type : entry;
    this._fireConfigChanged({ ...this._config, sections });
  }

  /**
   * @param {number} index
   * @param {number} direction
   */
  _moveSection(index, direction) {
    const sections = this._getSectionsRaw();
    const target = index + direction;
    if (target < 0 || target >= sections.length) return;
    [sections[index], sections[target]] = [sections[target], sections[index]];
    this._fireConfigChanged({ ...this._config, sections });
  }

  /** @param {number} index */
  _removeSection(index) {
    const sections = this._getSectionsRaw();
    sections.splice(index, 1);
    if (sections.length === 0) sections.push('overview');
    this._fireConfigChanged({ ...this._config, sections });
  }

  // ── Card-level settings ─────────────────────────────────────────

  /** @param {CustomEvent} ev */
  _settingsChanged(ev) {
    ev.stopPropagation();
    const data = ev.detail?.value;
    if (!data) return;
    /** @type {Record<string, *>} */
    const cfg = { ...this._config };
    if (data.title === undefined || data.title === null || data.title === '') {
      delete cfg.title;
    } else {
      cfg.title = data.title;
    }
    this._fireConfigChanged(cfg);
  }

  /** @param {CustomEvent} ev */
  _weatherEntityChanged(ev) {
    const value = ev.detail?.value;
    /** @type {Record<string, *>} */
    const cfg = { ...this._config };
    if (!value) {
      delete cfg.weather_entity;
    } else {
      cfg.weather_entity = value;
    }
    this._fireConfigChanged(cfg);
  }

  /** @param {Event} ev */
  _atmosSourceChanged(ev) {
    const value = /** @type {HTMLInputElement} */ (ev.target).value ?? '';
    /** @type {Record<string, *>} */
    const cfg = { ...this._config };
    if (!value) {
      delete cfg.atmos_source;
    } else {
      cfg.atmos_source = value;
    }
    this._fireConfigChanged(cfg);
  }

  // ── Per-section settings renderers ──────────────────────────────

  /**
   * @param {string} type
   * @param {*} hass
   * @returns {import('lit').TemplateResult|typeof nothing}
   */
  _renderSectionSettings(type, hass) {
    if (!this._getEnabledTypes().includes(type)) return nothing;

    switch (type) {
      case 'overview':
        return this._renderOverviewSettings(hass);
      case 'wind':
        return this._renderWindSettings(hass);
      case 'forecast':
        return this._renderForecastSettings(hass);
      case 'air_quality':
        return this._renderAirQualitySettings(hass);
      case 'meteogram':
        return this._renderMeteogramSettings(hass);
      default:
        return nothing;
    }
  }

  /** @param {*} hass */
  _renderOverviewSettings(hass) {
    const cfg = this._getSectionConfig('overview');
    return html`
      <div class="pw-editor-section-settings">
        <ha-form
          .hass=${hass}
          .data=${{ location_label: cfg.location_label || '' }}
          .schema=${[
            { name: 'location_label', label: 'Location label', selector: { text: {} } },
          ]}
          .computeLabel=${computeLabel}
          @value-changed=${(/** @type {CustomEvent} */ ev) => {
            const val = ev.detail?.value?.location_label;
            this._updateSectionProp('overview', 'location_label', val || undefined);
          }}
        ></ha-form>
      </div>
    `;
  }

  /** @param {*} hass */
  _renderWindSettings(hass) {
    const cfg = this._getSectionConfig('wind');
    return html`
      <div class="pw-editor-section-settings">
        <ha-form
          .hass=${hass}
          .data=${{
            speed_mode: cfg.speed_mode || 'speed',
            pro: cfg.pro !== false,
          }}
          .schema=${[
            { name: 'speed_mode', label: 'Display', selector: { select: { options: [
              { value: 'speed', label: 'Speed' },
              { value: 'gust', label: 'Gust' },
            ], mode: 'dropdown' } } },
            { name: 'pro', label: 'Brand-mark toggle', selector: { boolean: {} } },
          ]}
          .computeLabel=${computeLabel}
          @value-changed=${(/** @type {CustomEvent} */ ev) => {
            const data = ev.detail?.value;
            if (!data) return;
            if (data.speed_mode !== undefined) {
              this._updateSectionProp('wind', 'speed_mode', data.speed_mode === 'speed' ? undefined : data.speed_mode);
            }
            if (data.pro !== undefined) {
              this._updateSectionProp('wind', 'pro', data.pro === false ? false : undefined);
            }
          }}
        ></ha-form>
      </div>
    `;
  }

  /** @param {*} hass */
  _renderForecastSettings(hass) {
    const cfg = this._getSectionConfig('forecast');
    return html`
      <div class="pw-editor-section-settings">
        <ha-form
          .hass=${hass}
          .data=${{ pro: cfg.pro !== false }}
          .schema=${[
            { name: 'pro', label: 'Brand-mark toggle', selector: { boolean: {} } },
          ]}
          .computeLabel=${computeLabel}
          @value-changed=${(/** @type {CustomEvent} */ ev) => {
            const val = ev.detail?.value?.pro;
            this._updateSectionProp('forecast', 'pro', val === false ? false : undefined);
          }}
        ></ha-form>
      </div>
    `;
  }

  /** @param {*} hass */
  _renderAirQualitySettings(hass) {
    const cfg = this._getSectionConfig('air_quality');
    return html`
      <div class="pw-editor-section-settings">
        <ha-form
          .hass=${hass}
          .data=${{ scale: cfg.scale || 'eu' }}
          .schema=${[
            { name: 'scale', label: 'AQI scale', selector: { select: { options: [
              { value: 'eu', label: 'European' },
              { value: 'us', label: 'US EPA' },
            ], mode: 'dropdown' } } },
          ]}
          .computeLabel=${computeLabel}
          @value-changed=${(/** @type {CustomEvent} */ ev) => {
            const val = ev.detail?.value?.scale;
            this._updateSectionProp('air_quality', 'scale', val === 'eu' ? undefined : val);
          }}
        ></ha-form>
      </div>
    `;
  }

  /** @param {*} hass */
  _renderMeteogramSettings(hass) {
    const cfg = this._getSectionConfig('meteogram');
    return html`
      <div class="pw-editor-section-settings">
        <ha-form
          .hass=${hass}
          .data=${{
            horizon: cfg.horizon === 'long' ? 'long' : 'short',
            hours: cfg.hours ?? '',
            show_cloud: cfg.show_cloud === undefined ? 'auto' : String(cfg.show_cloud),
          }}
          .schema=${[
            { name: 'horizon', label: 'Horizon', selector: { select: { options: [
              { value: 'short', label: 'Short (12h)' },
              { value: 'long', label: 'Long (24h)' },
            ], mode: 'dropdown' } } },
            { name: 'hours', label: 'Hours override', selector: { number: { min: 0, max: 48, mode: 'box' } } },
            { name: 'show_cloud', label: 'Cloud cover', selector: { select: { options: [
              { value: 'auto', label: 'Auto' },
              { value: 'true', label: 'Always' },
              { value: 'false', label: 'Never' },
            ], mode: 'dropdown' } } },
          ]}
          .computeLabel=${computeLabel}
          @value-changed=${(/** @type {CustomEvent} */ ev) => {
            const data = ev.detail?.value;
            if (!data) return;
            if (data.horizon !== undefined) {
              this._updateSectionProp('meteogram', 'horizon', data.horizon === 'short' ? undefined : data.horizon);
            }
            if (data.hours !== undefined) {
              const n = Number(data.hours);
              this._updateSectionProp('meteogram', 'hours', Number.isFinite(n) && n > 0 ? n : undefined);
            }
            if (data.show_cloud !== undefined) {
              const v = data.show_cloud === 'true' ? true
                : data.show_cloud === 'false' ? false
                : undefined;
              this._updateSectionProp('meteogram', 'show_cloud', v);
            }
          }}
        ></ha-form>
      </div>
    `;
  }

  // ── Render ──────────────────────────────────────────────────────

  render() {
    /** @type {*} */
    const hass = /** @type {*} */ (this).hass;
    if (!hass || !this._config) return nothing;

    const sections = this._getSectionsRaw();
    const enabledTypes = this._getEnabledTypes();

    const formData = {
      title: this._config.title || '',
    };

    return html`
      <div class="pw-editor">
        <h3>Entities</h3>
        <ha-entity-picker
          .hass=${hass}
          .value=${this._config.weather_entity || ''}
          .includeDomains=${['weather']}
          .label=${'Weather entity'}
          allow-custom-entity
          @value-changed=${this._weatherEntityChanged}
        ></ha-entity-picker>
        <ha-textfield
          class="pw-editor-atmos-source"
          .label=${'Atmos CE source (optional)'}
          .value=${this._config.atmos_source || ''}
          .helper=${'Slug override — leave blank to auto-detect'}
          helperPersistent
          @input=${this._atmosSourceChanged}
        ></ha-textfield>

        <h3>Card Settings</h3>
        <ha-form
          .hass=${hass}
          .data=${formData}
          .schema=${SETTINGS_SCHEMA}
          .computeLabel=${computeLabel}
          @value-changed=${this._settingsChanged}
        ></ha-form>

        <h3>Section Order</h3>
        <div class="pw-editor-sections-list">
          ${sections.map((s, i) => {
            const type = typeof s === 'string' ? s : s.type;
            const label = SECTION_GROUPS
              .flatMap((g) => g.sections)
              .find((opt) => opt.value === type)?.label || type;
            return html`
              <div class="pw-editor-section-row">
                <span class="pw-editor-section-row-label">${label}</span>
                ${renderReorderButtons(
                  i, sections.length,
                  (idx, dir) => this._moveSection(idx, dir),
                  (idx) => this._removeSection(idx),
                )}
              </div>
            `;
          })}
        </div>

        ${enabledTypes.length === 0 ? html`
          <div class="pw-editor-section-hint">No sections enabled — the card will be empty.</div>
        ` : nothing}

        ${SECTION_GROUPS.map((group) => html`
          <ha-expansion-panel .header=${group.label} outlined>
            ${group.hint ? html`<div slot="secondary">${group.hint}</div>` : nothing}
            <div class="pw-editor-section-grid">
              ${group.sections.map((opt) => html`
                <label class="pw-editor-section-chip ${enabledTypes.includes(opt.value) ? 'pw-editor-active' : ''}">
                  <ha-switch
                    .checked=${enabledTypes.includes(opt.value)}
                    @change=${(/** @type {Event} */ ev) =>
                      this._toggleSection(opt.value, /** @type {HTMLInputElement} */ (ev.target).checked)}
                  ></ha-switch>
                  <span>${opt.label}</span>
                </label>
              `)}
            </div>
            ${group.sections.map((opt) => this._renderSectionSettings(opt.value, hass))}
          </ha-expansion-panel>
        `)}
      </div>
    `;
  }

  static get styles() {
    return css`
      .pw-editor {
        display: flex;
        flex-direction: column;
      }
      h3 {
        font-size: 14px;
        font-weight: 500;
        margin: 12px 0 8px;
        color: var(--pulse-text-primary);
      }
      h3:first-child { margin-top: 0; }
      .pw-editor-atmos-source {
        display: block;
        margin-top: 8px;
      }
      .pw-editor-sections-list {
        display: flex;
        flex-direction: column;
        gap: var(--pulse-space-tight);
      }
      .pw-editor-section-row {
        display: flex;
        align-items: center;
        gap: var(--pulse-space-element);
        padding: var(--pulse-space-tight) var(--pulse-space-element);
        border: 1px solid var(--pulse-border-divider);
        border-radius: var(--pulse-radius-element);
      }
      .pw-editor-section-row-label {
        flex: 1;
        font-size: 13px;
        color: var(--pulse-text-primary);
      }
      ${SHARED_EDITOR_STYLES}
      ha-expansion-panel {
        margin-bottom: 4px;
      }
      .pw-editor-section-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--pulse-space-element);
        padding: 8px 0;
      }
      .pw-editor-section-chip {
        display: flex;
        align-items: center;
        gap: var(--pulse-space-chip);
        font-size: 13px;
        color: var(--pulse-text-primary);
        cursor: pointer;
      }
      .pw-editor-section-chip ha-switch {
        --switch-unchecked-button-color: var(--pulse-disabled);
      }
      .pw-editor-section-settings {
        padding: 4px 0 8px;
        border-top: 1px solid var(--pulse-border-divider);
        margin-top: 4px;
      }
      .pw-editor-section-hint {
        font-size: 12px;
        color: var(--pulse-status-yellow);
        padding: 4px 0 8px;
      }
    `;
  }
}

if (!customElements.get(EDITOR_NAME)) {
  customElements.define(EDITOR_NAME, PulseWeatherCardEditor);
}

export { PulseWeatherCardEditor };
