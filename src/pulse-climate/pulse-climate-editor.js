/**
 * @module pulse-climate/editor
 * @description Visual editor for Pulse Climate Card (LitElement).
 * Uses shared editor helpers for entity list CRUD, reorder buttons,
 * card helper loading, and base styles.
 */

import { LitElement, html, css, nothing } from 'lit';
import { EDITOR_NAME } from './constants.js';
import {
  loadEditorHelpers, renderReorderButtons, computeLabel, SHARED_EDITOR_STYLES,
  updateListItemField, updateListItemNested, moveListItem, removeListItem,
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
      { value: 'home_status', label: 'Home status' },
      { value: 'zone_ranking', label: 'Zone ranking' },
      { value: 'graph', label: 'Graph' },
      { value: 'radial', label: 'Radial' },
      { value: 'donut', label: 'Donut' },
      { value: 'thermal_strip', label: 'Thermal strip' },
      { value: 'comfort_strip', label: 'Comfort strip' },
      { value: 'energy_flow', label: 'Energy flow' },
      { value: 'timeline_group', label: '24h Timeline (tabbed)' },
    ],
  },
  {
    label: 'Tado CE',
    hint: 'Requires Tado CE integration',
    sections: [
      { value: 'api', label: 'API' },
      { value: 'bridge', label: 'Bridge' },
      { value: 'homekit', label: 'HomeKit' },
      { value: 'system_health_group', label: 'System Health (Bridge / HomeKit / API tabs)' },
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
      _config: { state: true },
    };
  }

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
   * Single zone-write path: fires config-changed with the new zones list and
   * strips the legacy single-entity key.
   * @param {{entity: string, [key: string]: *}[]} zones
   */
  _updateZones(zones) {
    if (!this._config) return;
    const cfg = /** @type {Record<string, *>} */ ({ ...this._config, zones });
    delete cfg.entity;
    this._fireConfigChanged(cfg);
  }

  /**
   * @param {number} index
   * @param {CustomEvent} ev
   */
  _zoneChanged(index, ev) {
    if (!this._config) return;
    this._updateZones(/** @type {*} */ (updateListItemField(this._getZones(), index, 'entity', ev.detail?.value || '')));
  }

  /** @param {number} index */
  _removeZone(index) {
    if (!this._config) return;
    this._updateZones(/** @type {*} */ (removeListItem(this._getZones(), index)));
  }

  /**
   * @param {number} index
   * @param {number} direction
   */
  _moveZone(index, direction) {
    if (!this._config) return;
    const zones = this._getZones();
    const next = moveListItem(zones, index, direction);
    if (next !== zones) this._updateZones(/** @type {*} */ (next));
  }

  /** @param {CustomEvent} ev */
  _addZone(ev) {
    const entity = ev.detail?.value;
    if (!entity || !this._config) return;
    /** @type {*} */ (ev.target).value = '';
    this._updateZones([...this._getZones(), { entity }]);
  }

  /**
   * Per-zone string field (name / icon / color). Empty clears the field.
   * @param {number} index @param {string} field @param {Event} ev
   */
  _zoneFieldChanged(index, field, ev) {
    if (!this._config) return;
    const value = /** @type {HTMLInputElement} */ (ev.target).value ?? '';
    this._updateZones(/** @type {*} */ (updateListItemField(this._getZones(), index, field, value)));
  }

  /**
   * Per-zone sparkline mode (nested sparkline.mode). Empty clears.
   * @param {number} index @param {Event} ev
   */
  _zoneSparklineChanged(index, ev) {
    if (!this._config) return;
    const value = /** @type {HTMLInputElement} */ (ev.target).value ?? '';
    this._updateZones(/** @type {*} */ (updateListItemNested(this._getZones(), index, 'sparkline', 'mode', value)));
  }

  /**
   * Per-zone tri-state toggle. ha-select yields a string ('default'|'on'|'off');
   * coerce to boolean (or delete for default) so the backend, which reads a
   * boolean via ??, never sees a truthy "false" string.
   * @param {number} index @param {string} field @param {Event} ev
   */
  _zoneToggleChanged(index, field, ev) {
    if (!this._config) return;
    const sel = /** @type {HTMLInputElement} */ (ev.target).value;
    const value = sel === 'on' ? true : sel === 'off' ? false : '';
    this._updateZones(/** @type {*} */ (updateListItemField(this._getZones(), index, field, value)));
  }

  /**
   * Per-zone sensor-entity override. ha-entity-picker fires detail.value.
   * Empty selection clears the override.
   * @param {number} index @param {string} field @param {CustomEvent} ev
   */
  _zoneOverrideChanged(index, field, ev) {
    if (!this._config) return;
    const value = ev.detail?.value || '';
    this._updateZones(/** @type {*} */ (updateListItemField(this._getZones(), index, field, value)));
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
    const cfg = /** @type {Record<string, *>} */ ({ ...this._config });
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
          <div class="pc-editor-section-settings">
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
          <div class="pc-editor-section-settings">
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
          <div class="pc-editor-section-settings">
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
          <div class="pc-editor-section-settings">
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
      <div class="pc-editor">
        <h3>Zones</h3>
        <div class="pc-editor-entities">
          ${zones.map(
            (/** @type {*} */ z, /** @type {number} */ i) => {
              const triVal = (/** @type {string} */ field) =>
                z[field] === undefined ? 'default' : z[field] ? 'on' : 'off';
              return html`
              <div class="pc-editor-zone-row">
                <div class="pc-editor-zone-main">
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

                <div class="pc-editor-zone-fields">
                  <ha-textfield
                    .label=${'Name'}
                    .value=${z.name || ''}
                    @input=${(/** @type {Event} */ ev) => this._zoneFieldChanged(i, 'name', ev)}
                  ></ha-textfield>
                  <ha-icon-picker
                    .hass=${hass}
                    .label=${'Icon'}
                    .value=${z.icon || ''}
                    @value-changed=${(/** @type {CustomEvent} */ ev) =>
                      this._zoneFieldChanged(i, 'icon', /** @type {*} */ ({ target: { value: ev.detail?.value || '' } }))}
                  ></ha-icon-picker>
                  <ha-textfield
                    .label=${'Color'}
                    .value=${z.color || ''}
                    @input=${(/** @type {Event} */ ev) => this._zoneFieldChanged(i, 'color', ev)}
                  ></ha-textfield>
                  <ha-select
                    .label=${'Sparkline'}
                    .value=${z.sparkline?.mode || 'overlay'}
                    @selected=${(/** @type {Event} */ ev) => this._zoneSparklineChanged(i, ev)}
                    @closed=${(/** @type {Event} */ ev) => ev.stopPropagation()}
                  >
                    <mwc-list-item value="overlay">Overlay</mwc-list-item>
                    <mwc-list-item value="prominent">Prominent</mwc-list-item>
                    <mwc-list-item value="pulse">Pulse</mwc-list-item>
                  </ha-select>
                </div>

                <div class="pc-editor-zone-toggles">
                  ${[['show_temp_bar', 'Temp bar'], ['show_power_bar', 'Power bar'], ['interactive', 'Interactive']].map(
                    ([field, label]) => html`
                      <ha-select
                        .label=${label}
                        .value=${triVal(field)}
                        @selected=${(/** @type {Event} */ ev) => this._zoneToggleChanged(i, field, ev)}
                        @closed=${(/** @type {Event} */ ev) => ev.stopPropagation()}
                      >
                        <mwc-list-item value="default">Default</mwc-list-item>
                        <mwc-list-item value="on">On</mwc-list-item>
                        <mwc-list-item value="off">Off</mwc-list-item>
                      </ha-select>
                    `,
                  )}
                </div>

                <ha-expansion-panel .header=${'Sensor overrides'} outlined>
                  ${[
                    ['temperature_entity', 'Temperature'],
                    ['humidity_entity', 'Humidity'],
                    ['open_window_entity', 'Open window'],
                    ['battery_entity', 'Battery'],
                    ['mold_risk_entity', 'Mold risk'],
                    ['heating_power_entity', 'Heating power'],
                  ].map(([field, label]) => html`
                    <ha-entity-picker
                      .hass=${hass}
                      .label=${label}
                      .value=${z[field] || ''}
                      allow-custom-entity
                      @value-changed=${(/** @type {CustomEvent} */ ev) => this._zoneOverrideChanged(i, field, ev)}
                    ></ha-entity-picker>
                  `)}
                </ha-expansion-panel>
              </div>
            `;
            },
          )}
        </div>
        <ha-entity-picker
          class="pc-editor-add-entity"
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
          <div class="pc-editor-section-hint">No sections enabled — the card will be empty.</div>
        ` : nothing}

        ${SECTION_GROUPS.map((group) => html`
          <ha-expansion-panel .header=${group.label} outlined>
            ${group.hint ? html`<div slot="secondary">${group.hint}</div>` : nothing}
            <div class="pc-editor-section-grid">
              ${group.sections.map((opt) => html`
                <label class="pc-editor-section-chip ${sections.includes(opt.value) ? 'pc-editor-active' : ''}">
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
      .pc-editor {
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
      .pc-editor-entities {
        display: flex;
        flex-direction: column;
        gap: var(--pulse-space-element);
      }
      .pc-editor-zone-row {
        display: flex;
        flex-direction: column;
        gap: var(--pulse-space-tight);
        padding: var(--pulse-space-element);
        border: 1px solid var(--pulse-border-divider);
        border-radius: var(--pulse-radius-element);
        margin-bottom: var(--pulse-space-element);
      }
      .pc-editor-zone-main {
        display: flex;
        align-items: center;
      }
      .pc-editor-zone-main ha-entity-picker {
        flex: 1;
        min-width: 0;
      }
      .pc-editor-zone-fields {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--pulse-space-tight);
      }
      .pc-editor-zone-toggles {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: var(--pulse-space-tight);
      }
      ${SHARED_EDITOR_STYLES}
      .pc-editor-add-entity {
        display: block;
        margin-top: 8px;
      }
      ha-expansion-panel {
        margin-bottom: 4px;
      }
      .pc-editor-section-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--pulse-space-element);
        padding: 8px 0;
      }
      .pc-editor-section-chip {
        display: flex;
        align-items: center;
        gap: var(--pulse-space-chip);
        font-size: 13px;
        color: var(--pulse-text-primary);
        cursor: pointer;
      }
      .pc-editor-section-chip ha-switch {
        --switch-unchecked-button-color: var(--pulse-disabled);
      }
      .pc-editor-section-chip.pc-editor-active {
        /* Reserved for future active styling. */
      }
      .pc-editor-section-settings {
        padding: 4px 0 8px;
        border-top: 1px solid var(--pulse-border-divider);
        margin-top: 4px;
      }
      .pc-editor-section-hint {
        font-size: 12px;
        color: var(--pulse-tier-strong);
        padding: 4px 0 8px;
      }
    `;
  }
}

if (!customElements.get(EDITOR_NAME)) {
  customElements.define(EDITOR_NAME, PulseClimateCardEditor);
}
