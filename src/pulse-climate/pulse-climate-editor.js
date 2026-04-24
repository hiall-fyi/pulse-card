/**
 * @module pulse-climate/editor
 * @description Visual editor for Pulse Climate Card (LitElement).
 * Uses shared editor helpers for entity list CRUD, reorder buttons,
 * card helper loading, and base styles.
 */

import { LitElement, html, css, nothing } from 'lit';
import { EDITOR_NAME } from './constants.js';
import {
  loadEditorHelpers, renderReorderButtons, computeLabel,
} from '../shared/editor-helpers.js';

/** Layout options for dropdown. */
const LAYOUT_OPTIONS = [
  { value: 'default', label: 'Default' },
  { value: 'compact', label: 'Compact' },
];

/**
 * Section groups for the editor UI.
 * Each group has a label, optional hint, and list of section types.
 * @type {{label: string, hint?: string, sections: {value: string, label: string}[]}[]}
 */
const SECTION_GROUPS = [
  {
    label: 'Charts & Visuals',
    sections: [
      { value: 'zones', label: 'Zones' },
      { value: 'graph', label: 'Graph' },
      { value: 'radial', label: 'Radial' },
      { value: 'donut', label: 'Donut' },
      { value: 'thermal_strip', label: 'Thermal strip' },
      { value: 'comfort_strip', label: 'Comfort strip' },
      { value: 'energy_flow', label: 'Energy flow' },
    ],
  },
  {
    label: 'Tado CE',
    hint: 'Requires Tado CE integration',
    sections: [
      { value: 'api', label: 'API' },
      { value: 'bridge', label: 'Bridge' },
      { value: 'homekit', label: 'HomeKit' },
      { value: 'weather', label: 'Weather' },
      { value: 'environment', label: 'Environment' },
      { value: 'thermal', label: 'Thermal' },
      { value: 'schedule', label: 'Schedule' },
    ],
  },
];

/**
 * Build the card settings schema.
 * @returns {*[]}
 */
function buildSettingsSchema() {
  return [
    {
      name: '', type: 'grid', column_min_width: '120px',
      schema: [
        { name: 'title', label: 'Title', selector: { text: {} } },
        { name: 'layout', label: 'Layout', selector: { select: { options: LAYOUT_OPTIONS, mode: 'dropdown' } } },
        { name: 'columns', label: 'Columns', selector: { number: { min: 1, max: 6, mode: 'box' } } },
      ],
    },
    {
      name: '', type: 'grid', column_min_width: '120px',
      schema: [
        { name: 'show_temp_bar', label: 'Temp bar', selector: { boolean: {} } },
        { name: 'show_power_bar', label: 'Power bar', selector: { boolean: {} } },
        { name: 'interactive', label: 'Slider', selector: { boolean: {} } },
      ],
    },
  ];
}

class PulseClimateCardEditor extends LitElement {
  /** @type {boolean} Whether HA card helpers have been loaded. */
  _helpersLoaded = false;

  static get properties() {
    return {
      hass: { attribute: false },
      _config: { type: Object },
    };
  }

  /** @type {Record<string, *>|null} */
  _config = null;

  async connectedCallback() {
    super.connectedCallback();
    if (this._helpersLoaded) return;
    this._helpersLoaded = await loadEditorHelpers('Pulse Climate Card:');
    this.requestUpdate();
  }

  /** @param {Record<string, *>} config */
  setConfig(config) {
    this._config = { ...config };
  }

  // ── Zone CRUD ───────────────────────────────────────────────────

  /** @returns {{entity: string, [key: string]: *}[]} */
  _getZones() {
    if (this._config?.zones) {
      return this._config.zones.map((/** @type {*} */ z) =>
        typeof z === 'string' ? { entity: z } : { ...z },
      );
    }
    if (this._config?.entity) {
      return [{ entity: this._config.entity }];
    }
    return [];
  }

  /** @param {Record<string, *>} config */
  _fireConfigChanged(config) {
    this._config = config;
    this.dispatchEvent(new CustomEvent('config-changed', {
      detail: { config },
      bubbles: true,
      composed: true,
    }));
    this.requestUpdate();
  }

  /**
   * @param {number} index
   * @param {CustomEvent} ev
   */
  _zoneChanged(index, ev) {
    if (!this._config) return;
    const zones = this._getZones();
    zones[index] = { ...zones[index], entity: ev.detail?.value || '' };
    const cfg = /** @type {Record<string, *>} */ ({ ...this._config, zones });
    delete cfg.entity;
    this._fireConfigChanged(cfg);
  }

  /** @param {number} index */
  _removeZone(index) {
    if (!this._config) return;
    const zones = this._getZones();
    zones.splice(index, 1);
    this._fireConfigChanged({ ...this._config, zones });
  }

  /**
   * @param {number} index
   * @param {number} direction
   */
  _moveZone(index, direction) {
    if (!this._config) return;
    const zones = this._getZones();
    const target = index + direction;
    if (target < 0 || target >= zones.length) return;
    [zones[index], zones[target]] = [zones[target], zones[index]];
    this._fireConfigChanged({ ...this._config, zones });
  }

  /** @param {CustomEvent} ev */
  _addZone(ev) {
    const entity = ev.detail?.value;
    if (!entity || !this._config) return;
    /** @type {*} */ (ev.target).value = '';
    const zones = [...this._getZones(), { entity }];
    const cfg = /** @type {Record<string, *>} */ ({ ...this._config, zones });
    delete cfg.entity;
    this._fireConfigChanged(cfg);
  }

  // ── Sections ────────────────────────────────────────────────────

  /** @returns {string[]} */
  _getSections() {
    if (!this._config?.sections) return ['zones'];
    return this._config.sections.map((/** @type {*} */ s) =>
      typeof s === 'string' ? s : s.type,
    );
  }

  /** @returns {(string|Record<string, *>)[]} */
  _getSectionsRaw() {
    if (!this._config?.sections) return ['zones'];
    return this._config.sections.map((/** @type {*} */ s) => typeof s === 'string' ? s : { ...s });
  }

  /**
   * @param {string} sectionType
   * @returns {Record<string, *>}
   */
  _getSectionConfig(sectionType) {
    const raw = this._getSectionsRaw();
    const entry = raw.find((/** @type {*} */ s) => (typeof s === 'string' ? s : s.type) === sectionType);
    if (!entry || typeof entry === 'string') return {};
    return entry;
  }

  /**
   * @param {string} sectionType
   * @param {boolean} enabled
   */
  _toggleSection(sectionType, enabled) {
    let sections = this._getSectionsRaw();
    if (enabled && !sections.some((/** @type {*} */ s) => (typeof s === 'string' ? s : s.type) === sectionType)) {
      sections.push(sectionType);
    } else if (!enabled) {
      sections = sections.filter((/** @type {*} */ s) => (typeof s === 'string' ? s : s.type) !== sectionType);
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
    const idx = sections.findIndex((/** @type {*} */ s) => (typeof s === 'string' ? s : s.type) === sectionType);
    if (idx === -1) return;
    let entry = sections[idx];
    if (typeof entry === 'string') {
      entry = { type: entry };
    } else {
      entry = { ...entry };
    }
    if (value === '' || value === undefined || value === null) {
      delete entry[prop];
    } else {
      entry[prop] = value;
    }
    const keys = Object.keys(entry).filter((k) => k !== 'type');
    sections[idx] = keys.length === 0 ? entry.type : entry;
    this._fireConfigChanged({ ...this._config, sections });
  }

  // ── Card settings ───────────────────────────────────────────────

  /** @param {CustomEvent} ev */
  _settingsChanged(ev) {
    const data = ev.detail?.value;
    if (!data) return;
    const cfg = { ...this._config };
    if (data.title !== undefined) cfg.title = data.title || undefined;
    if (data.layout !== undefined) cfg.layout = data.layout;
    if (data.columns !== undefined) cfg.columns = Number(data.columns) || 1;
    if (data.show_temp_bar !== undefined) cfg.show_temp_bar = data.show_temp_bar;
    if (data.show_power_bar !== undefined) cfg.show_power_bar = data.show_power_bar;
    if (data.interactive !== undefined) cfg.interactive = data.interactive;
    this._fireConfigChanged(cfg);
  }

  // ── Section settings renderers ──────────────────────────────────

  /**
   * Render inline settings for a section type (when enabled).
   * @param {string} type - Section type.
   * @param {*} hass - HA hass object.
   * @returns {import('lit').TemplateResult|typeof nothing}
   */
  _renderSectionSettings(type, hass) {
    if (!this._getSections().includes(type)) return nothing;

    switch (type) {
      case 'graph':
        return html`
          <div class="section-settings">
            <ha-form
              .hass=${hass}
              .data=${{
                hours_to_show: this._getSectionConfig('graph').hours_to_show || 24,
                height: this._getSectionConfig('graph').height || 80,
                stacked: this._getSectionConfig('graph').stacked || false,
              }}
              .schema=${[
                { name: '', type: 'grid', column_min_width: '100px', schema: [
                  { name: 'hours_to_show', label: 'Graph hours', selector: { number: { min: 1, max: 168, mode: 'box' } } },
                  { name: 'height', label: 'Graph height (px)', selector: { number: { min: 40, max: 200, mode: 'box' } } },
                ]},
                { name: 'stacked', label: 'Stacked (temp + humidity)', selector: { boolean: {} } },
              ]}
              .computeLabel=${computeLabel}
              @value-changed=${(/** @type {CustomEvent} */ ev) => {
                const data = ev.detail?.value;
                if (!data) return;
                if (data.hours_to_show !== undefined) this._updateSectionProp('graph', 'hours_to_show', Number(data.hours_to_show) || 24);
                if (data.height !== undefined) this._updateSectionProp('graph', 'height', Number(data.height) || 80);
                if (data.stacked !== undefined) this._updateSectionProp('graph', 'stacked', data.stacked || undefined);
              }}
            ></ha-form>
          </div>
        `;

      case 'radial': {
        const radialCfg = this._getSectionConfig('radial');
        const radialAttr = radialCfg.attribute || 'temperature';
        const showTempEntity = radialAttr === 'temperature' || radialAttr === 'both';
        const showHumEntity = radialAttr === 'humidity' || radialAttr === 'both';
        return html`
          <div class="section-settings">
            <ha-form
              .hass=${hass}
              .data=${{ attribute: radialAttr }}
              .schema=${[
                { name: 'attribute', label: 'Display', selector: { select: { options: [
                  { value: 'temperature', label: 'Temperature' },
                  { value: 'humidity', label: 'Humidity' },
                  { value: 'both', label: 'Both' },
                ], mode: 'dropdown' } } },
              ]}
              .computeLabel=${computeLabel}
              @value-changed=${(/** @type {CustomEvent} */ ev) => {
                const val = ev.detail?.value?.attribute;
                if (val !== undefined) this._updateSectionProp('radial', 'attribute', val === 'temperature' ? undefined : val);
              }}
            ></ha-form>
            ${showTempEntity ? html`
              <ha-entity-picker
                .hass=${hass}
                .value=${radialCfg.outdoor_temp_entity || ''}
                .includeDomains=${['sensor', 'weather']}
                .label=${'Outdoor temperature entity'}
                allow-custom-entity
                @value-changed=${(/** @type {CustomEvent} */ ev) =>
                  this._updateSectionProp('radial', 'outdoor_temp_entity', ev.detail?.value || '')}
              ></ha-entity-picker>
            ` : nothing}
            ${showHumEntity ? html`
              <ha-entity-picker
                .hass=${hass}
                .value=${radialCfg.outdoor_humidity_entity || ''}
                .includeDomains=${['sensor']}
                .label=${'Outdoor humidity entity'}
                allow-custom-entity
                @value-changed=${(/** @type {CustomEvent} */ ev) =>
                  this._updateSectionProp('radial', 'outdoor_humidity_entity', ev.detail?.value || '')}
              ></ha-entity-picker>
            ` : nothing}
          </div>
        `;
      }

      case 'thermal_strip':
        return html`
          <div class="section-settings">
            <ha-form
              .hass=${hass}
              .data=${{
                attribute: this._getSectionConfig('thermal_strip').attribute || 'temperature',
                hours_to_show: this._getSectionConfig('thermal_strip').hours_to_show || 24,
                slots_per_hour: this._getSectionConfig('thermal_strip').slots_per_hour || 2,
              }}
              .schema=${[
                { name: 'attribute', label: 'Display', selector: { select: { options: [
                  { value: 'temperature', label: 'Temperature' },
                  { value: 'humidity', label: 'Humidity' },
                ], mode: 'dropdown' } } },
                { name: '', type: 'grid', column_min_width: '100px', schema: [
                  { name: 'hours_to_show', label: 'Hours', selector: { number: { min: 1, max: 168, mode: 'box' } } },
                  { name: 'slots_per_hour', label: 'Slots/hr', selector: { number: { min: 1, max: 12, mode: 'box' } } },
                ]},
              ]}
              .computeLabel=${computeLabel}
              @value-changed=${(/** @type {CustomEvent} */ ev) => {
                const data = ev.detail?.value;
                if (!data) return;
                if (data.attribute !== undefined) this._updateSectionProp('thermal_strip', 'attribute', data.attribute === 'temperature' ? undefined : data.attribute);
                if (data.hours_to_show !== undefined) this._updateSectionProp('thermal_strip', 'hours_to_show', Number(data.hours_to_show) || 24);
                if (data.slots_per_hour !== undefined) this._updateSectionProp('thermal_strip', 'slots_per_hour', Number(data.slots_per_hour) || 2);
              }}
            ></ha-form>
          </div>
        `;

      case 'comfort_strip':
        return html`
          <div class="section-settings">
            <ha-form
              .hass=${hass}
              .data=${{
                hours_to_show: this._getSectionConfig('comfort_strip').hours_to_show || 24,
                slots_per_hour: this._getSectionConfig('comfort_strip').slots_per_hour || 1,
              }}
              .schema=${[
                { name: '', type: 'grid', column_min_width: '100px', schema: [
                  { name: 'hours_to_show', label: 'Comfort hours', selector: { number: { min: 1, max: 168, mode: 'box' } } },
                  { name: 'slots_per_hour', label: 'Comfort slots/hr', selector: { number: { min: 1, max: 12, mode: 'box' } } },
                ]},
              ]}
              .computeLabel=${computeLabel}
              @value-changed=${(/** @type {CustomEvent} */ ev) => {
                const data = ev.detail?.value;
                if (!data) return;
                if (data.hours_to_show !== undefined) this._updateSectionProp('comfort_strip', 'hours_to_show', Number(data.hours_to_show) || 24);
                if (data.slots_per_hour !== undefined) this._updateSectionProp('comfort_strip', 'slots_per_hour', Number(data.slots_per_hour) || 1);
              }}
            ></ha-form>
          </div>
        `;

      default:
        return nothing;
    }
  }

  // ── Render ──────────────────────────────────────────────────────

  render() {
    /** @type {*} */
    const hass = /** @type {*} */ (this).hass;
    if (!hass || !this._config) return nothing;

    const zones = this._getZones();
    const sections = this._getSections();

    const formData = {
      title: this._config.title || '',
      layout: this._config.layout || 'default',
      columns: this._config.columns || 1,
      show_temp_bar: this._config.show_temp_bar !== false,
      show_power_bar: this._config.show_power_bar !== false,
      interactive: this._config.interactive === true,
    };

    const enabledCount = sections.length;

    return html`
      <div class="editor">
        <h3>Zones</h3>
        <div class="entities">
          ${zones.map(
            (/** @type {*} */ z, /** @type {number} */ i) => html`
              <div class="entity-row">
                <div class="entity-row-main">
                  <ha-entity-picker
                    .hass=${hass}
                    .value=${z.entity}
                    .includeDomains=${['climate', 'water_heater']}
                    allow-custom-entity
                    @value-changed=${(/** @type {CustomEvent} */ ev) => this._zoneChanged(i, ev)}
                  ></ha-entity-picker>
                  ${renderReorderButtons(
                    i, zones.length,
                    (idx, dir) => this._moveZone(idx, dir),
                    (idx) => this._removeZone(idx),
                  )}
                </div>
              </div>
            `,
          )}
        </div>
        <ha-entity-picker
          class="add-entity"
          .hass=${hass}
          .includeDomains=${['climate', 'water_heater']}
          @value-changed=${this._addZone}
        ></ha-entity-picker>

        <h3>Card Settings</h3>
        <ha-form
          .hass=${hass}
          .data=${formData}
          .schema=${buildSettingsSchema()}
          .computeLabel=${computeLabel}
          @value-changed=${this._settingsChanged}
        ></ha-form>

        ${enabledCount === 0 ? html`
          <div class="section-hint">No sections enabled — the card will be empty.</div>
        ` : nothing}

        ${SECTION_GROUPS.map((group) => html`
          <ha-expansion-panel .header=${group.label} outlined>
            ${group.hint ? html`<div slot="secondary">${group.hint}</div>` : nothing}
            <div class="section-grid">
              ${group.sections.map((opt) => html`
                <label class="section-chip ${sections.includes(opt.value) ? 'active' : ''}">
                  <ha-switch
                    .checked=${sections.includes(opt.value)}
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
      .editor {
        display: flex;
        flex-direction: column;
      }
      h3 {
        font-size: 14px;
        font-weight: 500;
        margin: 12px 0 8px;
        color: var(--primary-text-color);
      }
      h3:first-child { margin-top: 0; }
      .entities {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .entity-row {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 8px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 8px;
      }
      .entity-row-main {
        display: flex;
        align-items: center;
      }
      .entity-row-main ha-entity-picker {
        flex: 1;
        min-width: 0;
      }
      .move-icon {
        color: var(--secondary-text-color);
        --mdc-icon-button-size: 36px;
      }
      .remove-icon {
        color: var(--secondary-text-color);
        --mdc-icon-button-size: 36px;
      }
      .add-entity {
        display: block;
        margin-top: 8px;
      }
      ha-expansion-panel {
        margin-bottom: 4px;
      }
      .section-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
        padding: 8px 0;
      }
      .section-chip {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 13px;
        color: var(--primary-text-color);
        cursor: pointer;
      }
      .section-chip ha-switch {
        --switch-unchecked-button-color: var(--disabled-color, #bdbdbd);
      }
      .section-settings {
        padding: 4px 0 8px;
        border-top: 1px solid var(--divider-color, rgba(255,255,255,0.08));
        margin-top: 4px;
      }
      .section-hint {
        font-size: 12px;
        color: var(--warning-color, #FF9800);
        padding: 4px 0 8px;
      }
    `;
  }
}

if (!customElements.get(EDITOR_NAME)) {
  customElements.define(EDITOR_NAME, PulseClimateCardEditor);
}
