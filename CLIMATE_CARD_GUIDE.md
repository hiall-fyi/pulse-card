[← Back to README](README.md)

# Pulse Climate Card — Configuration Guide

Pulse Climate Card is a climate dashboard card for Home Assistant. It gives you a visual overview of your heating and cooling system — temperatures, humidity, HVAC status, and energy flow — all in one card. It works with any `climate.*` entity (and `water_heater.*` too), and if you use [Tado CE](https://github.com/hiall-fyi/tado_ce), it auto-discovers your sensors for an enriched display with zero extra configuration.

---

## Quick Start

Add the card with a single climate entity — that's all you need to get started:

```yaml
type: custom:pulse-climate-card
entity: climate.living_room
```

You'll see the zone's current temperature, target temperature, HVAC status, and a heating/cooling power bar. The card reads standard `climate.*` attributes automatically.

---

## Multi-Zone Setup

To show multiple rooms on one card, use the `zones` list:

```yaml
type: custom:pulse-climate-card
zones:
  - entity: climate.living_room
  - entity: climate.bedroom
  - entity: climate.kitchen
```

You can customise each zone with a name, icon, and color:

```yaml
type: custom:pulse-climate-card
zones:
  - entity: climate.living_room
    name: Living Room
    icon: mdi:sofa
    color: "#FF9800"
  - entity: climate.bedroom
    name: Bedroom
    icon: mdi:bed
```

---

## Generic Climate Entities

Pulse Climate Card works with any climate integration — Ecobee, Nest, generic thermostat, or anything that creates a `climate.*` entity. The card reads standard attributes directly from your climate entity, so basic temperature and HVAC status work out of the box.

For history charts and sparklines, the card needs a dedicated temperature sensor entity (not the climate entity itself, which doesn't store history the same way). If you don't use Tado CE (which auto-discovers these), you can point the card to the right sensors manually:

```yaml
type: custom:pulse-climate-card
zones:
  - entity: climate.ecobee_downstairs
    name: Downstairs
    temperature_entity: sensor.ecobee_downstairs_temperature
    humidity_entity: sensor.ecobee_downstairs_humidity
  - entity: climate.nest_upstairs
    name: Upstairs
    temperature_entity: sensor.nest_upstairs_temperature
    humidity_entity: sensor.nest_upstairs_humidity
```

Without `temperature_entity` and `humidity_entity`, the card still shows live temperature and humidity from the climate entity's attributes — you just won't get history-based features like sparklines and strip charts.

### What the Card Reads Automatically

The card reads these standard `climate.*` attributes — no configuration needed:

| Attribute | What it shows |
|---|---|
| `current_temperature` | The live temperature displayed in the zone header |
| `temperature` | The target temperature (shown as "→ 21°C") |
| `current_humidity` | Humidity percentage shown next to the zone name |
| `hvac_action` | Current HVAC state — heating, cooling, idle, off, drying, or fan |
| `preset_mode` | Preset chip (Home / Away) |
| `min_temp` / `max_temp` | Temperature gauge range and slider limits |
| `unit_of_measurement` | °C or °F — displayed alongside temperatures |

If your climate integration provides these attributes, the card picks them up automatically.

---

## Zone Configuration

Each zone in the `zones` list supports these options:

| Option | Type | Default | Description |
|---|---|---|---|
| `entity` | string | **required** | The `climate.*` or `water_heater.*` entity for this zone |
| `name` | string | auto | Override the zone name (defaults to the entity's friendly name) |
| `icon` | string | auto | Override the zone icon (e.g. `mdi:sofa`) |
| `temperature_entity` | string | auto | Point to a specific temperature sensor for history charts and sparklines |
| `humidity_entity` | string | auto | Point to a specific humidity sensor for comfort heatmaps |
| `chips` | list | auto | Explicitly choose which status chips to show (see below) |
| `color` | string | auto | Override the bar and sparkline color for this zone |
| `show_temp_bar` | boolean | `true` | Show the temperature gauge bar |
| `show_power_bar` | boolean | `true` | Show the heating/cooling power bar |
| `interactive` | boolean | `false` | Enable the temperature slider — tap or drag to adjust the target temperature |
| `sparkline` | object | — | Sparkline configuration (see [Sparkline Modes](#sparkline-modes)) |
| `tap_action` | object | `more-info` | What happens when you tap the zone row |
| `hold_action` | object | `none` | What happens when you long-press the zone row |
| `chip_actions` | object | — | Per-chip-type tap/hold action overrides |

### Chips

Chips are small status badges that appear on each zone row. By default, the card auto-detects which chips to show based on available data. You can override this with an explicit list:

```yaml
zones:
  - entity: climate.living_room
    chips:
      - hvac_action
      - overlay
      - mold_risk
      - battery
```

Available chip types: `hvac_action`, `overlay`, `preset`, `humidity`, `open_window`, `window_predicted`, `mold_risk`, `condensation`, `comfort_level`, `preheat_now`, `battery`, `battery_all`, `valve_control`, `temp_source`.

For multi-valve zones (rooms with 2+ TRVs), `battery` shows the worst battery state across all valves — if 3 are Normal and 1 is Low, you see "Low". Use `battery_all` to show every valve's battery individually.

### Sparkline Modes

Each zone can show a temperature history sparkline. There are three display modes:

| Mode | Description |
|---|---|
| `overlay` | A subtle trend line rendered behind the temperature gauge bar. Minimal footprint — the zone row stays compact. This is the default when sparkline is enabled. |
| `prominent` | A filled area chart shown below the zone header. Gives the sparkline more visual weight with a gradient fill. |
| `pulse` | A completely different zone layout — the sparkline becomes the zone's background, with temperature and status overlaid on top. Active zones glow with the HVAC color. |

```yaml
zones:
  - entity: climate.living_room
    sparkline:
      mode: prominent
  - entity: climate.bedroom
    sparkline:
      mode: pulse
```

### Zone Actions

Each zone supports tap, hold, and double-tap actions — same as Pulse Card (see the [Pulse Card Guide](PULSE_CARD_GUIDE.md#tap-actions) for the full list of available actions).

```yaml
zones:
  - entity: climate.living_room
    tap_action:
      action: more-info
    hold_action:
      action: navigate
      navigation_path: /lovelace/climate
```

You can also override what happens when you tap individual chips using `chip_actions`. By default, tapping a chip opens the source entity's more-info dialog. To customise:

```yaml
zones:
  - entity: climate.living_room
    chip_actions:
      mold_risk:
        tap_action:
          action: navigate
          navigation_path: /lovelace/environment
      battery:
        tap_action:
          action: more-info
```

### Fully Customised Zone Example

```yaml
zones:
  - entity: climate.living_room
    name: Living Room
    icon: mdi:sofa
    color: "#FF9800"
    temperature_entity: sensor.living_room_temperature
    humidity_entity: sensor.living_room_humidity
    show_temp_bar: true
    show_power_bar: true
    interactive: true
    chips:
      - hvac_action
      - overlay
      - mold_risk
      - open_window
      - battery
    sparkline:
      mode: prominent
    tap_action:
      action: more-info
    hold_action:
      action: navigate
      navigation_path: /lovelace/climate
    chip_actions:
      mold_risk:
        tap_action:
          action: more-info
```

---

## Section Types

Sections are the building blocks of your climate dashboard. You choose which sections to show and in what order — they render top to bottom as listed. By default, only the `zones` section is shown.

```yaml
sections:
  - zones
  - graph
  - radial
```

Sections are rendered in the order they appear in your `sections` list.

### Section Compatibility

Not all sections work with every setup. Here's a quick reference:

| Section | Works with any climate entity | Needs Tado CE |
|---|---|---|
| `zones` | ✅ | — |
| `graph` | ✅ | — |
| `thermal_strip` | ✅ | — |
| `comfort_strip` | ✅ | — |
| `energy_flow` | ✅ (needs `heating_power`) | — |
| `home_status` | ✅ | — |
| `zone_ranking` | ✅ (Comfort tab needs Tado CE) | — |
| `radial` | ✅ | — |
| `donut` | ✅ (with custom `segments`) | ✅ (for `api_breakdown` / `homekit_saved`) |
| `api` | — | ✅ |
| `bridge` | — | ✅ |
| `homekit` | — | ✅ |
| `weather` | — | ✅ |
| `environment` | — | ✅ |
| `thermal` | — | ✅ |
| `schedule` | — | ✅ |

Sections marked "Needs Tado CE" rely on entities created by the [Tado CE](https://github.com/hiall-fyi/tado_ce) integration. Without those entities, these sections won't display any data.

### zones

Your climate zones with temperature, humidity, power bars, and status chips. This is the primary section and is shown by default.

The zones section inherits its configuration from the card-level `zones`, `columns`, `show_temp_bar`, and `show_power_bar` settings. See [Zone Configuration](#zone-configuration) above for all zone-level options.

### graph

A multi-line time series chart showing temperature or humidity history for all your zones. Each zone gets its own colored line with a filled gradient area.

| Option | Type | Default | Description |
|---|---|---|---|
| `attribute` | string | `current_temperature` | Which attribute to plot — `current_temperature` or `current_humidity` |
| `stacked` | boolean | `false` | Show both temperature and humidity as stacked graphs |
| `hours_to_show` | number | `24` | How many hours of history to display |
| `height` | number | `80` | Chart height in pixels |
| `palette` | list | — | Custom color palette for the lines (overrides the default 8-color palette) |

```yaml
sections:
  - type: graph
    attribute: current_temperature
    hours_to_show: 48
    height: 100
    stacked: true
```

### donut

A ring chart for visualising proportional data. **You must specify either a `source` or custom `segments`** — without one of these, the donut won't render.

| Option | Type | Default | Description |
|---|---|---|---|
| `size` | number | `120` | Chart diameter in pixels |
| `source` | string | — | Pre-built data source: `api_breakdown` or `homekit_saved` (requires [Tado CE](https://github.com/hiall-fyi/tado_ce)) |
| `segments` | list | — | Custom segments — each with `entity`, `label`, and `color` (works with any entity) |

**Tado CE sources:**

```yaml
sections:
  - type: donut
    source: api_breakdown
    size: 140
```

**Custom segments (any entity):**

```yaml
sections:
  - type: donut
    segments:
      - entity: sensor.living_room_temperature
        label: Living Room
        color: "#FF9800"
      - entity: sensor.bedroom_temperature
        label: Bedroom
        color: "#4CAF50"
```

### thermal_strip

Colour-coded temperature or humidity history strips — one row per zone. Each strip shows values over time using a colour gradient from cool (blue) to warm (red). You can tap a row to see a detail panel with a sparkline comparison.

| Option | Type | Default | Description |
|---|---|---|---|
| `hours_to_show` | number | `24` | How many hours of history to display |
| `mode` | string | `timeline` | Rendering mode — `timeline` (SVG strip) or `heatmap` (HTML grid) |
| `slots_per_hour` | number | `2` | Data resolution — how many time slots per hour |
| `attribute` | string | `temperature` | What to display — `temperature` or `humidity` |

```yaml
sections:
  - type: thermal_strip
    hours_to_show: 48
    mode: heatmap
    attribute: humidity
```

### comfort_strip

A time-slot heatmap showing comfort levels across all your zones. Each cell represents a time slot, colour-coded by comfort score. You can hover for tooltips and drag to select a time range.

| Option | Type | Default | Description |
|---|---|---|---|
| `slots_per_hour` | number | `1` | Data resolution — how many time slots per hour |
| `hours_to_show` | number | `24` | How many hours of history to display |
| `mode` | string | `heatmap` | Rendering mode — `heatmap` (HTML grid) or `timeline` (SVG strip) |

```yaml
sections:
  - type: comfort_strip
    slots_per_hour: 2
    hours_to_show: 24
```

### energy_flow

An animated diagram showing energy flowing from your boiler to each zone. Line width reflects heating power — thicker lines mean more energy. Active zones pulse with an animated gradient and particle dots, idle zones show a faint trace.

This section has no configurable options — it reads heating power data from your zones automatically.

```yaml
sections:
  - energy_flow
```

### home_status

A single-glance summary of your entire home's heating state. Shows a hero indicator at the top (All Good / Warming Up / Cold Start) based on how many zones are at target temperature, a sorted list of every zone with actual → target temps and a colour-coded deviation bar, and a summary footer with aggregate stats.

Zones are sorted by how far they are from target — the zone that needs the most attention appears first. Off zones are grouped at the bottom. Tap any zone row to open its more-info dialog.

This section has no configurable options — it reads data from your zones automatically.

```yaml
sections:
  - home_status
```

### zone_ranking

A leaderboard view of your zones, ranked by a metric you choose. Switch between Power, Temp, Humidity, and Comfort tabs to re-rank. Each zone shows its rank number, name, a proportional bar, and the metric value. Summary stats at the bottom show average, highest, lowest, and spread.

The Comfort tab only appears when you have Tado CE installed — it uses the ASHRAE 55 adaptive comfort model to score each zone based on how close its temperature is to the calculated comfort target. Power and Comfort bars use severity colours (green/amber/red), while Temp and Humidity bars use a uniform blue.

Tap any zone row to open its more-info dialog.

This section has no configurable options — it reads data from your zones automatically.

```yaml
sections:
  - zone_ranking
```

### radial

A circular thermal compass showing all your zones as coloured arcs around a center display. Arc colour reflects temperature (cool blue → warm red), arc thickness reflects heating power, and active zones glow with a pulse animation. The center shows the outside temperature.

| Option | Type | Default | Description |
|---|---|---|---|
| `size` | number | `280` | Chart diameter in pixels |
| `attribute` | string | `temperature` | What to display — `temperature`, `humidity`, or `both` (shows temperature arcs with an outer humidity ring) |
| `outdoor_temp_entity` | string | auto | Override the entity used for the center outside temperature display |
| `outdoor_humidity_entity` | string | — | Entity for outside humidity (shown in center when `attribute` is `both`) |

Tap a zone arc to select it — the center updates to show that zone's details. Tap the legend items to switch between zones.

```yaml
sections:
  - type: radial
    size: 280
    attribute: both
    outdoor_temp_entity: sensor.outdoor_temperature
    outdoor_humidity_entity: sensor.outdoor_humidity
```

### Tado CE Sections

The following sections display data from the [Tado CE](https://github.com/hiall-fyi/tado_ce) integration. They rely on auto-discovery of `sensor.tado_ce_*` entities — if these entities aren't present, the sections won't show any data. You can include them in your config regardless; they simply won't render if the required entities aren't found.

#### api

API usage dashboard showing a gauge of your current API usage, a sparkline of call history, and a breakdown of call types. Needs: `sensor.tado_ce_*_api_usage`, `sensor.tado_ce_*_api_limit`, and related API entities.

#### bridge

Bridge connection status, boiler flow temperature, and weather compensation details. Needs: `binary_sensor.tado_ce_*_bridge_connected` and related bridge entities.

#### homekit

HomeKit connection status, saved API calls, and write statistics. Needs: `binary_sensor.tado_ce_*_homekit_connected` and related HomeKit entities.

#### weather

Outdoor temperature, current weather condition, and solar intensity. Needs: `sensor.tado_ce_*_outside_temp` and related weather entities.

#### environment

Per-zone environmental data — mold risk, condensation risk, comfort level, and surface temperature. Needs per-zone sensors like `sensor.{zone}_ce_mold_risk`, `sensor.{zone}_ce_condensation`, etc.

#### thermal

Per-zone thermal analysis — heating rate, thermal inertia, preheat time, and analysis confidence. Needs per-zone sensors like `sensor.{zone}_ce_heating_rate`, `sensor.{zone}_ce_thermal_inertia`, etc.

#### schedule

Per-zone schedule information — next scheduled change, deviation from schedule, and preheat advisor recommendations. Needs per-zone sensors like `sensor.{zone}_ce_next_schedule`, `sensor.{zone}_ce_schedule_deviation`, etc.

None of these sections have configurable options — they read data directly from your Tado CE entities.

```yaml
sections:
  - zones
  - weather
  - environment
  - thermal
  - schedule
  - api
  - bridge
```

### Multi-Section Example

Here's a full dashboard layout with multiple section types. Sections render in the order you list them:

```yaml
type: custom:pulse-climate-card
zones:
  - entity: climate.living_room
  - entity: climate.bedroom
  - entity: climate.kitchen
sections:
  - zones
  - type: graph
    hours_to_show: 24
    stacked: true
  - type: radial
    size: 200
  - home_status
  - zone_ranking
  - energy_flow
  - type: thermal_strip
    hours_to_show: 48
  - type: comfort_strip
    slots_per_hour: 2
  - weather
  - environment
```

---

## Card-Level Settings

These options apply to the entire card. Zone-level settings override card-level defaults where both exist.

| Option | Type | Default | Description |
|---|---|---|---|
| `entity` | string | — | Single zone shorthand (use `zones` for multiple) |
| `zones` | list | — | List of zone configurations |
| `title` | string | — | Card title shown at the top |
| `columns` | number | `1` | Number of columns for the zone grid |
| `layout` | string | `default` | `compact` reduces padding and spacing for dense dashboards |
| `entity_row` | boolean | `false` | Remove the card border for embedding inside other cards |
| `show_temp_bar` | boolean | `true` | Show temperature gauge bars on all zones |
| `show_power_bar` | boolean | `true` | Show heating/cooling power bars on all zones |
| `interactive` | boolean | `false` | Enable temperature sliders on all zones |
| `chips` | list | auto | Default chip list for all zones |
| `sections` | list | `[zones]` | Which sections to show and in what order |
| `tap_action` | object | `more-info` | Default tap action for all zones |
| `hold_action` | object | `none` | Default hold action for all zones |
| `double_tap_action` | object | `none` | Default double-tap action for all zones |
| `chip_actions` | object | — | Default per-chip-type action overrides for all zones |
| `sparkline` | object | — | Default sparkline config for all zones |
| `gap` | string/number | — | Space between zones (e.g. `8` or `8px`) |
| `font_size` | string/number | auto | Base font size |

### Override Hierarchy

Zone-level settings always take priority over card-level defaults. This lets you set sensible defaults at the card level and override specific zones as needed:

```yaml
type: custom:pulse-climate-card
# Card-level defaults
show_temp_bar: true
show_power_bar: true
interactive: false
tap_action:
  action: more-info

zones:
  - entity: climate.living_room
    # Inherits all card-level defaults
  - entity: climate.bedroom
    interactive: true          # Override: enable slider for this zone only
    show_power_bar: false      # Override: hide power bar for this zone
  - entity: climate.kitchen
    tap_action:                # Override: custom tap action for this zone
      action: navigate
      navigation_path: /lovelace/kitchen
```

---

## Tado CE Auto-Discovery

If you have the [Tado CE](https://github.com/hiall-fyi/tado_ce) integration installed, Pulse Climate Card automatically detects your Tado entities and enriches the display — no extra configuration needed.

### How It Works

The card uses Home Assistant's entity registry to find your Tado CE sensors by their internal identifiers — this works regardless of your HA language setting (Italian, German, Spanish, etc.). When Tado CE entities are found, the card automatically discovers:

**Per-zone sensors** — temperature, humidity, heating power, AC power, mold risk, condensation risk, surface temperature, dew point, comfort level, thermal inertia, heating rate, preheat time, open window, battery status, and more.

**Hub-level sensors** — API usage, weather data, bridge status, HomeKit status, boiler flow temperature, and weather compensation.

This data automatically populates chips on your zone rows, fills in section content (weather, environment, thermal, schedule, api, bridge, homekit), and provides history data for sparklines and strip charts.

### Overriding Auto-Discovered Entities

If you want to use a different sensor than the one auto-discovered, you can override it at the zone level:

```yaml
zones:
  - entity: climate.living_room
    temperature_entity: sensor.my_custom_temperature_sensor
    humidity_entity: sensor.my_custom_humidity_sensor
```

Zone-level `temperature_entity` and `humidity_entity` always take priority over auto-discovered entities.

### External Sensor Auto-Detection

If you've configured an external temperature or humidity sensor in Tado CE (e.g. a Sonoff Zigbee sensor), the card picks it up automatically. It reads the `external_temp_sensor` and `external_humidity_sensor` attributes from your climate entity and uses that sensor for history data — graphs, thermal strips, comfort heatmaps, and sparklines all benefit from the external sensor's denser reporting interval.

The resolution order for history data is:

1. **YAML override** (`temperature_entity` / `humidity_entity`) — always wins
2. **External sensor** from Tado CE config — auto-detected, no YAML needed
3. **Discovered Tado CE sensor** — the built-in TRV sensor
4. **Climate entity fallback** — last resort

When an external sensor is in use, a small label appears next to the zone name in thermal strips and comfort heatmaps showing the sensor's friendly name. Hover it to see the full entity ID.

If you've just paired a new external sensor and it hasn't accumulated history yet, the card shows "Waiting for data" instead of "No data" so you know it's working.

### Without Tado CE

If you don't use Tado CE, the card still works with any `climate.*` entity. You get:

- Live temperature, target temperature, and humidity from standard climate attributes
- HVAC action status (heating, cooling, idle, off)
- Preset mode chips (Home / Away)
- Temperature gauge and power bars
- Interactive temperature slider
- Graph and radial sections (using climate entity history)

For history-based features like sparklines and strip charts, point `temperature_entity` and `humidity_entity` to your dedicated sensor entities (see [Generic Climate Entities](#generic-climate-entities) above).

Tado CE-specific sections (api, bridge, homekit, weather, environment, thermal, schedule) simply won't render without Tado CE installed — they don't take up any space on your card.

---

## Visual Identity

Pulse Climate Card has several visual features that make your climate dashboard distinctive. All effects respect your `prefers-reduced-motion` OS setting — if you're sensitive to animation, the card disables all repetitive motion automatically.

### Heating Glow

When a zone is actively heating, its power bar glows with a warm orange pulse. The glow intensity and animation speed scale with heating power — a zone at 100% pulses faster and brighter than one at 20%. Cooling zones glow blue. Idle zones show no glow.

### Heat Shimmer

In the radial view, zones with high heating power (above 50%) show a subtle wavy distortion on their arcs — like hot air rising. The shimmer intensity scales with power and section size, so it's always proportional and never overwhelming.

### Temperature Transition Glow

When a zone's temperature changes, its power bar and radial arc briefly flash brighter then settle back — a quick visual cue that something just changed. The flash colour matches the HVAC action (warm orange for heating, blue for cooling).

### Frosted Glass Panels

The radial center display, zone detail panels, and strip tooltips use a frosted glass effect — a semi-transparent background with a blur that lets the content behind show through. This gives depth without obscuring the arcs and charts.

### Energy Flow Animation

The `energy_flow` section shows animated lines flowing from a boiler source to each zone. Active zones have a bright animated gradient that moves along the line — the speed matches the heating power. Small particle dots travel along each active line, with particle size proportional to the line width. Idle zones show a faint static trace. The line width is proportional to heating power.

### Radial Thermal View

The `radial` section renders a circular compass with one arc per zone. Arc colour maps to temperature (blue → red), arc thickness grows with heating power, and active arcs pulse with a glow animation. The center shows the outside temperature by default in a frosted glass circle, and updates to show zone details when you tap an arc.

### Thermal & Comfort Strips

The `thermal_strip` section shows colour-coded temperature timelines — one row per zone, with each time slot coloured from cool blue to warm red. The `comfort_strip` section shows a similar heatmap but based on comfort scores across zones and time.

### CSS Custom Properties

You can fine-tune the card's appearance using CSS custom properties. Set these in your HA theme or in a `card-mod` style block:

| Property | Default | Description |
|---|---|---|
| `--pulse-card-background` | HA card background | Card background colour |
| `--pulse-font-size` | `14px` | Base font size for zone names and temperatures |
| `--pulse-name-color` | Primary text colour | Zone name colour |
| `--pulse-value-color` | Primary text colour | Temperature value colour |
| `--pulse-chip-color` | Secondary text colour | Chip text colour |
| `--pulse-gauge-height` | `6px` | Temperature gauge bar height |
| `--pulse-gauge-radius` | `3px` | Temperature gauge bar corner radius |
| `--pulse-bar-height` | `8px` | Power bar height |
| `--pulse-bar-radius` | `4px` | Power bar corner radius |
| `--pulse-row-bg` | HA secondary background | Pulse mode zone row background |
| `--pulse-gap` | `16px` | Gap between zones in multi-column layout |
| `--pulse-graph-height` | `80px` | Graph section height |
| `--pulse-chart-line-width` | `1.5` | Graph line stroke width |
| `--pulse-glass-bg` | HA card background | Frosted glass panel background colour |
| `--pulse-glass-blur` | `8px` | Frosted glass blur radius |

---

## Actions & Interactivity

### Temperature Slider

Set `interactive: true` on a zone (or at the card level for all zones) to turn the temperature gauge into a slider. Tap anywhere on the gauge to jump to a temperature, or drag to fine-tune it. The slider respects your climate entity's `min_temp`, `max_temp`, and temperature step.

```yaml
type: custom:pulse-climate-card
interactive: true
zones:
  - entity: climate.living_room
  - entity: climate.bedroom
```

### Zone Tap Actions

Tap, hold, or double-tap a zone row to trigger an action. By default, tapping opens the entity's more-info dialog.

| Option | Default | Description |
|---|---|---|
| `tap_action` | `more-info` | Single tap |
| `hold_action` | `none` | Long press |
| `double_tap_action` | `none` | Double tap |

Available actions: `more-info`, `navigate`, `call-service`, `url`, `toggle`, `none`

Set these at the card level for all zones, or per-zone for individual overrides. See the [Pulse Card Guide](PULSE_CARD_GUIDE.md#tap-actions) for detailed action configuration.

### Chip Tap Actions

By default, tapping a chip opens the more-info dialog for the chip's source entity (e.g. tapping a mold risk chip opens the mold risk sensor). You can override this per chip type using `chip_actions`:

```yaml
chip_actions:
  mold_risk:
    tap_action:
      action: navigate
      navigation_path: /lovelace/environment
  battery:
    hold_action:
      action: more-info
```

### Section Interactivity

Several sections respond to taps and gestures:

- **Radial** — Tap an arc to select a zone. The center display updates to show that zone's temperature, target, and HVAC status. Tap the legend items to switch between zones.
- **Thermal strip** — Tap a zone row to open a detail panel with a sparkline comparison. Hover over time slots for temperature tooltips.
- **Comfort strip** — Hover for comfort score tooltips. Drag to select a time range for comparison.
- **Energy flow** — Tap a ribbon to highlight that zone — other ribbons dim so you can focus on one zone's energy flow. Tap again to deselect.

---

## Known Limitations

- **History-based sections need a sensor entity** — sparklines, thermal strips, comfort heatmaps, and graph sections rely on HA history data. Climate entities (`climate.*`) don't store numeric history the same way sensors do. If you use Tado CE with external sensors, the card picks them up automatically. For other integrations, point `temperature_entity` and `humidity_entity` to your dedicated sensor entities
- **Frosted glass needs a modern browser** — the frosted glass effect on panels and tooltips uses `backdrop-filter`, which isn't supported in older browsers. The card falls back to a solid background — nothing breaks, it just looks less fancy
- **Visual editor doesn't cover everything** — per-zone chip filters, chip action overrides, and some section-specific options (like `outdoor_humidity_entity` on radial) are YAML-only. The editor handles the most common settings
- **Comfort scores are approximate** — the comfort heatmap blends temperature deviation, humidity, and Tado CE comfort level into a single score. It's a useful overview, not a scientific measurement
- **Energy flow needs heating power data** — the energy flow section only shows meaningful ribbons when your climate entities (or Tado CE sensors) report `heating_power`. Without it, you'll see "No heating data"
- **Multiple cards share resources** — placing several Pulse Climate Cards on the same dashboard view works well. Cards share history data, entity discovery, and CSS to keep things efficient. Some SVG gradient IDs may overlap between cards in rare cases — if you notice visual glitches, try combining your zones into a single card with multiple sections instead
