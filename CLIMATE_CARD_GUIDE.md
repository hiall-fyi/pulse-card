[← Back to README](README.md)

# Pulse Climate Card: Configuration Guide

Pulse Climate Card is a climate dashboard card for Home Assistant. It gives you a visual overview of your heating and cooling system (temperatures, humidity, HVAC status and energy flow) all in one card. It works with any `climate.*` entity (and `water_heater.*` too), and if you use [Tado CE](https://github.com/hiall-fyi/tado_ce), it auto-discovers your sensors for an enriched display with zero extra configuration.

---

## Quick Start

Add the card with a single climate entity. That's all you need to get started:

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

Pulse Climate Card works with any climate integration, such as Ecobee, Nest, a generic thermostat, or anything that creates a `climate.*` entity. The card reads standard attributes directly from your climate entity, so basic temperature and HVAC status work out of the box.

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

Without `temperature_entity` and `humidity_entity`, the card still shows live temperature and humidity from the climate entity's attributes. You just won't get history-based features like sparklines and strip charts.

### What the Card Reads Automatically

The card reads these standard `climate.*` attributes, with no configuration needed:

| Attribute | What it shows |
|---|---|
| `current_temperature` | The live temperature displayed in the zone header |
| `temperature` | The target temperature (shown as "→ 21°C") |
| `current_humidity` | Humidity percentage shown next to the zone name |
| `hvac_action` | Current HVAC state: heating, cooling, idle, off, drying, fan, preheating or defrosting. If the entity reports none, the card estimates one (see [Known Limitations](#known-limitations)) |
| `preset_mode` | Preset chip: Away when the preset is `away`, Home for any other preset |
| `min_temp` / `max_temp` | Temperature gauge range |
| `unit_of_measurement` | Temperatures are shown in the unit your Home Assistant uses; the card takes the entity's own unit only when it has one |

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
| `heating_power_entity` | string | auto | Point to a specific heating power sensor (0 to 100) for the power bar and energy flow, used instead of the discovered sensor or the entity's `heating_power` attribute |
| `open_window_entity` | string | auto | Point to a specific open window sensor for the `open_window` chip |
| `battery_entity` | string | auto | Point to a specific battery sensor for the `battery` chip |
| `mold_risk_entity` | string | auto | Point to a specific mold risk sensor for the `mold_risk` chip |
| `chips` | list | auto | Explicitly choose which status chips to show (see below) |
| `color` | string | auto | Override the colour of the prominent sparkline, and of the pulse line while the zone is heating or cooling. The power bar and gauge ignore it |
| `show_temp_bar` | boolean | `true` | Show the temperature gauge bar |
| `show_power_bar` | boolean | `true` | Show the heating/cooling power bar |
| `sparkline` | object | none | Sparkline configuration (see [Sparkline Modes](#sparkline-modes)) |
| `tap_action` | object | `more-info` | What happens when you tap the zone row |
| `hold_action` | object | `none` | What happens when you long-press the zone row |
| `double_tap_action` | object | `none` | What happens when you double-tap the zone row |
| `chip_actions` | object | none | Per-chip-type tap/hold action overrides |

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

Available chip types: `hvac_action`, `overlay`, `preset`, `humidity`, `open_window`, `mold_risk`, `condensation`, `comfort_level`, `preheat_now`, `battery`, `battery_all`, `valve_control`, `temp_source`, `heating_circuit`.

The `preset` chip reads Away when the preset is `away` and Home for any other preset. It is auto-detected per zone, but the card skips it automatically when the Zones section header is already showing a home-wide presence badge (via `home_state` discovery), because it would just repeat the header. List `preset` explicitly in `chips:` to show it on a zone anyway.

Auto mode never shows the `hvac_action` chip, because the state tag next to the temperature already says Heating, Cooling, Idle, Off, Drying or Fan, and it drops the `overlay` chip when its state is "Off". List them explicitly in `chips:` to show them anyway.

For multi-valve zones (rooms with 2+ TRVs), `battery` shows the worst battery state across all valves: if 3 are Normal and 1 is Low, you see "Low". Use `battery_all` to show every valve's battery individually.

### Sparkline Modes

Each zone can show a temperature history sparkline. There are two modes that draw a sparkline, `prominent` and `pulse`:

| Mode | Description |
|---|---|
| `overlay` | Listed in the editor but not drawn in this version. A zone set to `overlay`, or with no `mode`, shows no sparkline. Use `prominent` or `pulse`. |
| `prominent` | A filled area chart shown below the zone header. Gives the sparkline more visual weight with a gradient fill. |
| `pulse` | A different zone layout: the sparkline becomes the zone's background, with temperature and status overlaid on top. Active zones glow with the HVAC color. This layout shows only the name, status, temperature and target; the gauge, power bar and chips are not drawn. |

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

Each zone supports tap, hold, and double-tap actions, the same as the Bar Card (see the [Bar Card Guide](BAR_CARD_GUIDE.md#tap-actions) for the full list of available actions).

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

Sections are the building blocks of your climate dashboard. You choose which sections to show and in what order. They render top to bottom as listed. By default, only the `zones` section is shown.

```yaml
sections:
  - zones
  - graph
  - radial
```

Sections are rendered in the order they appear in your `sections` list. You can add the same section type more than once (for example a temperature and a humidity `thermal_strip`) and each keeps its own content.

### Section Compatibility

Not all sections work with every setup. Here's a quick reference:

| Section | Works with any climate entity | Needs Tado CE |
|---|---|---|
| `zones` | ✅ | No |
| `graph` | ✅ | No |
| `thermal_strip` | ✅ | No |
| `comfort_strip` | ✅ | No |
| `energy_flow` | ✅ (needs `heating_power`) | No |
| `energy_flow_ac` | ✅ (power sensor optional) | No |
| `home_status` | ✅ | No |
| `zone_ranking` | ✅ (Tado CE adds its comfort level to the Comfort tab) | No |
| `radial` | ✅ | No |
| `timeline_group` | ✅ | No |
| `donut` | ✅ (with custom `segments`) | ✅ (for `api_breakdown` / `homekit_saved`) |
| `api` | No | ✅ |
| `system_health_group` | No | ✅ |
| `bridge` | No | ✅ |
| `homekit` | No | ✅ |
| `weather` | No | ✅ |
| `environment` | No | ✅ |
| `thermal` | No | ✅ |
| `schedule` | No | ✅ |

Sections marked "Needs Tado CE" rely on entities created by the [Tado CE](https://github.com/hiall-fyi/tado_ce) integration. Without those entities, these sections won't display any data.

### zones

Your climate zones with temperature, humidity, power bars, and status chips. This is the primary section and is shown by default.

The zones section inherits its configuration from the card-level `zones`, `columns`, `show_temp_bar`, and `show_power_bar` settings. See [Zone Configuration](#zone-configuration) above for all zone-level options.

### graph

A multi-line time series chart showing temperature or humidity history for all your zones. Each zone gets its own colored line with a filled gradient area.

| Option | Type | Default | Description |
|---|---|---|---|
| `entities` | list | all zones | Climate entities to plot, for example `[climate.living_room, climate.bedroom]`. By default the graph plots every zone in the card |
| `attribute` | string | `current_temperature` | Which attribute to plot: `current_temperature` or `current_humidity` |
| `stacked` | boolean | `false` | Show both temperature and humidity as stacked graphs |
| `hours_to_show` | number | `24` | Hours shown. The card fetches 24 hours of history, so a higher value only adds empty time at the start |
| `height` | number | `80` | Chart height in pixels |
| `palette` | list | none | Custom color palette for the lines (overrides the default 8-color palette) |

```yaml
sections:
  - type: graph
    attribute: current_temperature
    height: 100
    stacked: true
```

### donut

A ring chart for visualising proportional data. **You must specify either a `source` or custom `segments`**. Without one of these, the donut won't render.

| Option | Type | Default | Description |
|---|---|---|---|
| `size` | number | `120` | Chart diameter in pixels |
| `source` | string | none | Pre-built data source: `api_breakdown` or `homekit_saved` (requires [Tado CE](https://github.com/hiall-fyi/tado_ce)) |
| `segments` | list | none | Custom segments, each with `entity`, `label`, and `color` (works with any entity) |

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

Colour-coded temperature or humidity history strips, one row per zone. Each strip shows values over time in colour. Temperature strips run from cool blue through green and yellow to red and magenta. Humidity strips run from red (dry) through green to blue (humid). You can tap a row to see a detail panel with a sparkline comparison.

| Option | Type | Default | Description |
|---|---|---|---|
| `hours_to_show` | number | `24` | How many hours of history to display |
| `mode` | string | `timeline` | Rendering mode: `timeline` (SVG strip) or `heatmap` (HTML grid) |
| `slots_per_hour` | number | `2` | Data resolution: how many time slots per hour |
| `attribute` | string | `temperature` | What to display: `temperature` or `humidity` |

```yaml
sections:
  - type: thermal_strip
    mode: heatmap
    attribute: humidity
```

### comfort_strip

A time-slot heatmap showing comfort levels across all your zones. Each cell represents a time slot, colour-coded by comfort score. You can hover for tooltips and drag to select a time range.

| Option | Type | Default | Description |
|---|---|---|---|
| `slots_per_hour` | number | `1` | Data resolution: how many time slots per hour |
| `hours_to_show` | number | `24` | How many hours of history to display |
| `mode` | string | `heatmap` | Rendering mode: `heatmap` (HTML grid) or `timeline` (SVG strip) |

```yaml
sections:
  - type: comfort_strip
    slots_per_hour: 2
    hours_to_show: 24
```

### energy_flow

An animated diagram showing energy flowing from your boiler to each zone. Line width reflects heating power, so thicker lines mean more energy. Active zones pulse with an animated gradient and particle dots, idle zones show a faint trace.

This section has no configurable options. It reads heating power data from your zones automatically. Each zone shows its name, status and temperature on three lines. With up to four zones the boiler sits on the left and the zones on the right; with five or more, the boiler moves to the top and the zones are spread on an arc around its sides and below it, with each flow leaving the boiler's edge as a smooth curve. The labels stay clear of each other up to about eight zones.

```yaml
sections:
  - energy_flow
```

### energy_flow_ac

The air conditioner version of `energy_flow`. It draws an air conditioner at the top of the card and blows the air down to each zone, with the zones laid out in rows of up to four (a short last row is centred). Each zone shows its name, what it is doing and its temperature. Ribbons and the dots moving along them are blue while a zone cools and orange while it heats. Ribbon width follows the zone's AC power sensor when the card can find one. It looks for a sensor named after the zone (the climate entity id without `climate.`) plus `_ac` or `_ac_power`, so `climate.living_room` is matched with `sensor.living_room_ac`.

A zone without a power sensor still shows what it is doing. Its label reads "Cooling", "Heating" or "Idle" with no percentage, the ribbon has a fixed width and a few dots while it is active, and the hover text says "no power data". The section only shows "No AC data" when every zone is unavailable. Zones without a power sensor are left out of the average in the section header.

```yaml
type: custom:pulse-climate-card
zones:
  - entity: climate.living_room
  - entity: climate.bedroom
sections:
  - zones
  - energy_flow_ac
```

Sections draw every zone in the card, so to show heating zones and air conditioners separately, use two cards, one with the boiler zones and `energy_flow`, one with the AC zones and `energy_flow_ac`. Both sections can also sit in the same card if you want to see them side by side.

### home_status

A single-glance summary of your entire home's heating state. Shows a hero indicator at the top (All Good / Warming Up / Cold Start, or Cooling Down / Too Warm when the zones that are off target are above it, or Unavailable when no zone is reporting) based on how many zones are short of their target, a sorted list of every zone with actual → target temps and a colour-coded deviation bar, and a summary footer with aggregate stats. A zone in heat mode counts as short of its target only when it is more than 1° under it (1.8° on a Fahrenheit Home Assistant), and a zone in cool mode only when it is more than 1° over (1.8°); other modes count either side, and a thermostat with a temperature range uses its band instead of a single target. The banner reads All Good when at least 80% of zones are on target, Warming Up or Cooling Down from 40%, and Cold Start or Too Warm below that. A heating zone set to its lowest allowed temperature (Tado's frost protection, for zones the card has found sensors for, which is what Tado CE provides) counts as off unless it is actually heating, and the deviation bar is coloured by how far a zone is short. When `show_hero: true` is set, the home overview at the top of the card replaces the banner and this section starts with the zone list.

Zones are sorted by how far they are from target, so the zone that needs the most attention appears first. Off zones are grouped at the bottom. Tap any zone row to open its more-info dialog.

This section has no configurable options. It reads data from your zones automatically.

```yaml
sections:
  - home_status
```

### zone_ranking

A leaderboard view of your zones, ranked by a metric you choose. Switch between Power, Temp, Humidity, and Comfort tabs to re-rank. Each zone shows its rank number, name, a proportional bar, and the metric value. Summary stats at the bottom show average, highest, lowest, and spread.

The Comfort tab appears when at least one zone has a score. It gives each zone the same score as the Comfort strip: how close the room is to your thermostat's target, adjusted for humidity and, if you have Tado CE, its comfort level. Zones without a comfort level are scored on temperature and humidity alone, so in a home that mixes Tado CE zones with other climates, a Tado CE zone can score a little higher than an equivalent zone without one. A zone with no target (off, in frost protection or unavailable) shows `--` and sorts last. Power and Comfort bars use severity colours (green/amber/red), while Temp and Humidity bars use a uniform blue.

Tap any zone row to open its more-info dialog.

This section has no configurable options. It reads data from your zones automatically.

```yaml
sections:
  - zone_ranking
```

### radial

A circular thermal compass showing all your zones as coloured arcs around a center display. Arc colour reflects temperature (cool blue → warm red), arc thickness reflects heating power, and active zones glow with a pulse animation. The center shows the outside temperature.

| Option | Type | Default | Description |
|---|---|---|---|
| `size` | number | `280` | Chart diameter in pixels |
| `attribute` | string | `temperature` | What to display: `temperature`, `humidity`, or `both` (shows temperature arcs with an outer humidity ring) |
| `outdoor_temp_entity` | string | auto | Override the entity used for the center outside temperature display. Falls back to the card-level `outdoor_temp_entity`, then the Tado CE outside sensor, then any `weather.*` entity, the same order the Hero uses |
| `outdoor_humidity_entity` | string | none | Entity for outside humidity. With `attribute: humidity` the centre shows it as the main value, with `both` it shows under the temperature |

Tap a zone arc to select it and the center updates to show that zone's details. Tap the legend items to switch between zones.

```yaml
sections:
  - type: radial
    size: 280
    attribute: both
    outdoor_temp_entity: sensor.outdoor_temperature
    outdoor_humidity_entity: sensor.outdoor_humidity
```

### timeline_group

A tabbed 24-hour history section that hosts two views behind a tab strip, so you get both without stacking two full sections. The **Thermal** tab shows the colour-coded temperature heatmap; the **State** tab shows when each zone was actually heating or cooling, with cell opacity reflecting the demand level. Both tabs share the same row grid, so zones stay vertically aligned when you switch tabs. Tap a row on either tab to reveal its detail stats.

The number on the right of each Thermal row is that zone's **24-hour average**, labelled `24h avg` under the time axis. It is not the live reading. For the current temperature, look at the `zones` section, which shows what each zone reads right now. The two will differ, often by a degree or more, when a zone has warmed or cooled over the day.

Cell colours run on a fixed scale, so a given temperature is always the same colour across every zone and every day. The scale runs cool blue through green and yellow up to orange, red, and deep magenta for heatwave temperatures past 34°C (93°F on a Fahrenheit Home Assistant, where the bands are converted). The legend along the bottom only lists the bands the current window actually crosses, so it shows cool colours in winter and hot ones in a heatwave without ever spilling onto a second row.

| Option | Type | Default | Description |
|---|---|---|---|
| `active_tab` | string | `thermal` | Which tab opens first: `thermal` or `state`. The card remembers your last tab while it's on screen |

The 24-hour window is fixed for this section. If you need a different window or finer resolution, use the standalone `thermal_strip` section instead.

```yaml
sections:
  - type: timeline_group
    active_tab: state
```

### Tado CE Sections

The following sections display data from the [Tado CE](https://github.com/hiall-fyi/tado_ce) integration. They rely on auto-discovery of `sensor.tado_ce_*` entities. If these entities aren't present, the sections won't show any data. You can include them in your config regardless; they simply won't render if the required entities aren't found.

#### api

API usage dashboard showing a gauge of your current API usage, a sparkline of call history, and a breakdown of call types. Needs: `sensor.tado_ce_*_api_usage`, `sensor.tado_ce_*_api_limit`, and related API entities.

#### bridge

Bridge connection status, boiler flow temperature, and weather compensation details. Needs: `binary_sensor.tado_ce_*_bridge_connected` and related bridge entities.

#### homekit

HomeKit connection status, saved API calls, and write statistics. Needs: `binary_sensor.tado_ce_*_homekit_connected` and related HomeKit entities.

#### weather

Outdoor temperature, current weather condition, and solar intensity. Needs: `sensor.tado_ce_*_outside_temp` and related weather entities.

#### environment

Per-zone environmental data: mold risk, condensation risk, comfort level, and surface temperature. Needs per-zone sensors like `sensor.{zone}_ce_mold_risk`, `sensor.{zone}_ce_condensation`, etc.

#### thermal

Per-zone thermal analysis: heating rate, thermal inertia, preheat time, and analysis confidence. Needs per-zone sensors like `sensor.{zone}_ce_heating_rate`, `sensor.{zone}_ce_thermal_inertia`, etc.

#### schedule

Per-zone schedule information: next scheduled change, deviation from schedule, and preheat advisor recommendations. Needs per-zone sensors like `sensor.{zone}_ce_next_schedule`, `sensor.{zone}_ce_schedule_deviation`, etc.

None of these sections have configurable options. They read data directly from your Tado CE entities.

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

#### system_health_group

A tabbed section that folds the `bridge`, `homekit`, and `api` views into one tab strip, so the three health surfaces share a single block instead of three. It only shows the views it can actually find: with none discovered the whole section stays hidden, with one it drops the tab strip and just shows that view, and with two or three it shows a tab strip in the order Bridge → HomeKit → API. Handy when you run all three; for a cloud-only setup with no HomeKit, it quietly adapts to whatever's there.

| Option | Type | Default | Description |
|---|---|---|---|
| `active_tab` | string | first available | Which tab opens first: `bridge`, `homekit`, or `api`. Falls back to the first discovered view if the one you name isn't available |

```yaml
sections:
  - type: system_health_group
    active_tab: homekit
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
| `entity` | string | none | Single zone shorthand (use `zones` for multiple) |
| `zones` | list | none | List of zone configurations |
| `title` | string | none | Card title shown at the top |
| `columns` | number | `1` | Number of columns for the zone grid |
| `layout` | string | `default` | `compact` reduces padding and spacing for dense dashboards |
| `entity_row` | boolean | `false` | Remove the card border for embedding inside other cards |
| `show_temp_bar` | boolean | `true` | Show temperature gauge bars on all zones |
| `show_power_bar` | boolean | `true` | Show heating/cooling power bars on all zones |
| `show_hero` | boolean | `false` | Show the home overview at the top (home-average temperature, status pill, thermal strip, outdoor temp), opt-in |
| `hero_show_thermal_strip` | boolean | `true` | Render the 24h home-average thermal strip below the home overview |
| `hero_show_outside` | boolean | `true` | Show outdoor temperature line below the home overview |
| `outdoor_temp_entity` | string | auto | Card-level outdoor temperature source. Auto-detects from Tado CE outside sensor or any `weather.*` entity |
| `show_atmosphere` | boolean | `true` | Show the animated atmosphere backdrop tinted by overall heating state |
| `atmosphere_intensity` | `subtle` / `medium` / `bold` | `medium` | Backdrop opacity tier when `show_atmosphere` is on |
| `chips` | list | auto | Default chip list for all zones |
| `sections` | list | `[zones]` | Which sections to show and in what order |
| `tap_action` | object | `more-info` | Default tap action for all zones |
| `hold_action` | object | `none` | Default hold action for all zones |
| `double_tap_action` | object | `none` | Default double-tap action for all zones |
| `chip_actions` | object | none | Default per-chip-type action overrides for all zones |

### Override Hierarchy

Zone-level settings always take priority over card-level defaults. This lets you set sensible defaults at the card level and override specific zones as needed:

```yaml
type: custom:pulse-climate-card
# Card-level defaults
show_temp_bar: true
show_power_bar: true
tap_action:
  action: more-info

zones:
  - entity: climate.living_room
    # Inherits all card-level defaults
  - entity: climate.bedroom
    show_power_bar: false      # Override: hide power bar for this zone
  - entity: climate.kitchen
    tap_action:                # Override: custom tap action for this zone
      action: navigate
      navigation_path: /lovelace/kitchen
```

---

## Tado CE Auto-Discovery

If you have the [Tado CE](https://github.com/hiall-fyi/tado_ce) integration installed, Pulse Climate Card automatically detects your Tado entities and enriches the display, with no extra configuration needed.

### How It Works

The card uses Home Assistant's entity registry to find your Tado CE sensors by their internal identifiers, so this works regardless of your HA language setting (Italian, German, Spanish, etc.). When Tado CE entities are found, the card automatically discovers:

**Per-zone sensors:** temperature, humidity, heating power, AC power, mold risk, condensation risk, surface temperature, dew point, comfort level, thermal inertia, heating rate, preheat time, open window, battery status, and more.

**Hub-level sensors:** API usage, weather data, bridge status, HomeKit status, boiler flow temperature, and weather compensation.

This data automatically populates chips on your zone rows, fills in section content (weather, environment, thermal, schedule, api, bridge, homekit), and provides history data for sparklines and strip charts.

New or renamed sensors are picked up without a reload. The card re-checks at most once a minute, on the next Home Assistant update after that.

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

If you've configured an external temperature or humidity sensor in Tado CE (e.g. a Sonoff Zigbee sensor), the card picks it up automatically. It reads the `external_temp_sensor` and `external_humidity_sensor` attributes from your climate entity and uses that sensor for history data. Graphs, thermal strips, comfort heatmaps, and sparklines all benefit from the external sensor's denser reporting interval.

The resolution order for history data is:

1. **YAML override** (`temperature_entity` / `humidity_entity`): always wins
2. **External sensor** from Tado CE config: auto-detected, no YAML needed
3. **Discovered Tado CE sensor**: the built-in TRV sensor
4. **Climate entity fallback**: last resort

If you've just paired a new external sensor and it hasn't accumulated history yet, the Thermal strip shows "Waiting for data" instead of "No data" so you know it's working.

### Without Tado CE

If you don't use Tado CE, the card still works with any `climate.*` entity. You get:

- Live temperature, target temperature, and humidity from standard climate attributes
- HVAC action status (heating, cooling, idle, off, drying, fan), estimated by the card when the entity reports none
- Preset chip (Away for the `away` preset, Home for any other)
- Temperature gauge and power bars
- Graph and radial sections (using climate entity history)

For history-based features like sparklines and strip charts, point `temperature_entity` and `humidity_entity` to your dedicated sensor entities (see [Generic Climate Entities](#generic-climate-entities) above).

Tado CE-specific sections (api, bridge, homekit, weather, environment, thermal, schedule) simply won't render without Tado CE installed, and they don't take up any space on your card.

---

## Visual Identity

Pulse Climate Card has several visual features that make your climate dashboard distinctive. All effects respect your `prefers-reduced-motion` OS setting. If you're sensitive to animation, the card disables all repetitive motion automatically.

### Home Overview

A single-glance summary at the top of the card, anchored by the home-average temperature in big numbers. Below the number sits a cluster of dots, one per zone. Heating and cooling zones breathe in time with each other, idle zones stay dim, and off or unavailable zones fade further back. Hover a dot for the zone name and state. Under the dots, each zone gets its own 24-hour thermal strip with a coloured left ribbon flagging its current state (amber heating, cyan cooling, grey idle), so you can read the whole home's recent history at a glance. With seven or more zones, the strips cap at six rows plus a `+N more` line to keep the hero height predictable. An outdoor temperature line rounds it off.

**Off by default. Opt in with `show_hero: true`.** Once enabled, hide the per-zone strips with `hero_show_thermal_strip: false` or the outdoor line with `hero_show_outside: false`. The outdoor temperature auto-detects from a Tado CE outside sensor or any `weather.*` entity in your dashboard; override with the card-level `outdoor_temp_entity`.

### Atmosphere Backdrop

A quiet radial wash behind the card chrome that only appears when something's actually running: amber sweeping from the top when zones are heating, cyan from the bottom when cooling, both at lower intensity when the home is mixed. When everything is idle or off, the backdrop shows nothing at all, so the card reads as calm when there's nothing to report. The hero dots breathe on a 4-second pulse; other animations run at their own speed. All of it freezes under `prefers-reduced-motion`.

`atmosphere_intensity` accepts `subtle` / `medium` / `bold`. Set `show_atmosphere: false` to disable entirely.

### Heating Glow

While a zone is heating or cooling, its power bar glows with a gentle pulse in the action colour, and the bar width follows the power. Idle zones show no glow.

### Heat Shimmer

In the radial view, zones with high heating power (above 50%) show a subtle wavy distortion on their arcs, like hot air rising. Cooling zones never do. The shimmer intensity scales with power and section size, so it's always proportional and never overwhelming.

### Temperature Transition Glow

When a zone's climate entity reports a new `current_temperature`, its power bar, pulse row and radial arc briefly flash brighter and then settle back, a quick visual cue that something just changed. The flash is a brightness boost only and does not change colour.

### Frosted Glass Panels

The radial center display, zone detail panels, and strip tooltips use a frosted glass effect: a semi-transparent background with a blur that lets the content behind show through. This gives depth without obscuring the arcs and charts.

### Energy Flow Animation

The `energy_flow` section shows animated lines flowing from a boiler source to each zone. Active zones have a bright animated gradient that moves along the line, and the speed matches the heating power. Small particle dots travel along each active line, with particle size proportional to the line width. Idle zones show a faint static trace. The line width is proportional to heating power.

### Radial Thermal View

The `radial` section renders a circular compass with one arc per zone. Arc colour maps to temperature (blue → red), arc thickness grows with heating power, and active arcs pulse with a glow animation. The center shows the outside temperature by default in a frosted glass circle, and updates to show zone details when you tap an arc.

### Thermal & Comfort Strips

The `thermal_strip` section shows colour-coded temperature or humidity timelines, one row per zone. Temperature slots run from cool blue to red and magenta, and humidity slots from red (dry) through green to blue (humid). The `comfort_strip` section shows a similar heatmap but based on comfort scores across zones and time.

---

## Styling with `card-mod`

Climate Card exposes three layers you can target from `card-mod` or an HA theme: CSS custom properties for colour and sizing knobs, class selectors for layout-level overrides, and data attributes for state-driven styling.

### CSS custom properties

Family-shared tokens (used by every Pulse card) live on the `--pulse-*` prefix. Change them once and every card in your dashboard picks up the new value. Climate-Card-only knobs use the `--pc-*` prefix.

**Family tokens** (used by every card in the family):

| Variable | Controls | Default |
|---|---|---|
| `--pulse-bg-card` | Card background colour | HA theme card background |
| `--pulse-bg-secondary` | Zone row background (pulse layout), detail bar background | HA secondary background |
| `--pulse-text-primary` | Zone name and temperature colour | HA theme primary text |
| `--pulse-text-secondary` | Chip text, target / humidity colour | HA theme secondary text |
| `--pulse-font-body` | Base font size for zone names and temperatures | `14px` |
| `--pulse-glass-bg` | Frosted glass panel background colour | HA card background |
| `--pulse-glass-blur` | Frosted glass blur radius | `8px` |

The family surface also exposes named tokens for typography (`--pulse-font-display` / `-hero` / `-summary` / `-large` / `-stat` / `-kicker`), border radii (`--pulse-radius-panel` / `-row` / `-element` / `-pill` / `-small` / `-tight` / `-hairline` / `-circle`), animation durations (`--pulse-anim-instant` / `-fast` / `-base` / `-medium` / `-mode` / `-slow` / `-color` / `-reveal` / `-fill`), spacing (`--pulse-space-card` / `-panel` / `-section` / `-row` / `-element` / `-chip` / `-tight` / `-hairline` / `-pin`), and Apple-system tier colours (`--pulse-tier-calm` / `-moderate` / `-strong` / `-gale`). Defaults match what shipped before, and overriding any one cascades cleanly to every card in your dashboard. The full list is in the [shared stylesheet on GitHub](https://github.com/hiall-fyi/pulse-card/blob/main/src/shared/styles.js).

**Climate-Card-only tokens:**

| Variable | Controls | Default |
|---|---|---|
| `--pc-gauge-height` | Temperature gauge bar height | `6px` |
| `--pc-gauge-radius` | Temperature gauge bar corner radius | `3px` |
| `--pc-bar-height` | Power bar height | `8px` |
| `--pc-bar-radius` | Power bar corner radius | `4px` |
| `--pc-gap` | Gap between zones in multi-column layout | `16px` |
| `--pc-graph-height` | Graph section height | `80px` |
| `--pc-chart-line-width` | Graph line stroke width | `1.5` |

```yaml
type: custom:pulse-climate-card
zones:
  - entity: climate.living_room
card_mod:
  style: |
    :host {
      --pulse-bg-secondary: rgba(139, 92, 222, 0.08);
      --pulse-text-primary: rgba(255, 255, 255, 0.9);
      --pc-bar-height: 10px;
    }
```

### Class selectors

Use these for structural changes that custom properties don't cover: padding, borders, hover states, layout tweaks. Each section root is a `.pc-section`; each zone row is a `.pc-zone-row`, and rows in the pulse layout (backed by the sparkline) carry `.pc-zone-row-pulse` as well.

**Card chrome**

| Selector | What it targets |
|---|---|
| `.pc-section` | Every section root (one per declared section, sits inside `<ha-card>`) |
| `.pulse-title` | The card title row (family-shared with Bar Card) |
| `.pulse-section-label` | The label above each section (family-shared with Bar Card) |

**Zones**

| Selector | What it targets |
|---|---|
| `.pc-section-zones` | The zones section's outer container |
| `.pc-section-zones.pc-columns` | The same container when multi-column layout is active |
| `.pc-zone-row` | One zone row, in the default layout or the pulse layout (pulse rows carry both classes) |
| `.pc-zone-row.pc-unavailable` | A default-layout row when its climate entity is unavailable (greyed out). Pulse rows never get it, because an unavailable zone falls back to the default layout |
| `.pc-zone-row-pulse` | One zone row in pulse layout (SVG background, focus ring, info split) |
| `.pc-zone-row-pulse.pc-heating` | A pulse-layout row when the zone is actively heating (red wash) |
| `.pc-heating-glow` | The glowing sparkline path in an active pulse row |
| `.pc-zone-name`, `.pc-zone-temp`, `.pc-zone-target`, `.pc-zone-humidity` | Name, current temperature, target, and humidity inside a row |
| `.pc-zone-chips` | The chip strip below the zone header |
| `.pc-chip` | One chip (sensor pill). Pair with `.pc-severity-medium / .pc-severity-high / .pc-severity-critical` for severity tone |
| `.pc-temp-gauge`, `.pc-temp-gauge-bg`, `.pc-temp-gauge-current`, `.pc-temp-gauge-target` | The temperature gauge bar and its layered parts |
| `.pc-power-bar-container`, `.pc-power-bar-track`, `.pc-power-bar-fill` | The three power bar layers |
| `.pc-power-bar-fill.pc-bar-active` | The animated fill that appears when the zone is drawing power |

**Other sections**

| Selector | What it targets |
|---|---|
| `.pc-section-radial`, `.pc-section-thermal-strip`, `.pc-section-comfort-strip`, `.pc-section-zone-ranking`, `.pc-section-home-status`, `.pc-section-energy-flow`, `.pc-section-graph`, `.pc-section-donut`, `.pc-section-api`, `.pc-section-bridge`, `.pc-section-homekit`, `.pc-section-weather`, `.pc-section-environment`, `.pc-section-thermal`, `.pc-section-schedule` | Each named section's outer container. Pair with `.pc-section` rules for one-off overrides |
| `.pc-rank-row`, `.pc-rank-num`, `.pc-rank-name`, `.pc-rank-value` | Zone Ranking row pieces. `.pc-rank-num.pc-top` highlights the rank-1 row |
| `.pc-ranking-tab`, `.pc-ranking-tab.pc-active` | Zone Ranking metric tabs and the selected one |
| `.pc-home-status-row`, `.pc-home-status-hero`, `.pc-home-status-zones` | Home Status row, hero block, and per-zone strip |
| `.pc-comparison-path`, `.pc-comparison-legend` | The overlay path and legend chip in the zone-graph comparison view |

### Data attributes for state-driven styling

Several elements carry data attributes you can pair with their class to style differently per zone, per metric, or per chip type.

- `data-entity`: the entity ID (on zone rows, ranking rows, home-status rows, and chips, including bridge / API / environment chips)
- `data-zone`: the zone name (on `.pc-heatmap-row`, `.pc-timeline-row`, `.pc-state-row` and energy-flow ribbons; ranking rows carry only `data-entity`)
- `data-metric`: the active metric key (on `.pc-section-zone-ranking`)
- `data-chip-type`: the chip family (on `.pc-chip`, with values like `mold_risk`, `battery`, `humidity`)

```yaml
type: custom:pulse-climate-card
zones:
  - entity: climate.living_room
  - entity: climate.bedroom
card_mod:
  style: |
    .pc-zone-row.pc-unavailable {
      opacity: 0.5;
      filter: grayscale(0.4);
    }
    .pc-zone-row-pulse.pc-heating {
      box-shadow: 0 0 12px rgba(255, 100, 50, 0.3);
    }
    .pc-chip[data-chip-type="mold_risk"] {
      font-weight: 600;
    }
```

v1.5.0 reorganised the design tokens. Concerns shared with other cards in the family (text colour, body type size, card chrome, surface tint) moved to the `--pulse-*` family prefix; Climate-only knobs (gauge / bar / graph dimensions) sit under `--pc-*`. Class selectors moved from various unprefixed names to `.pc-*`. If you upgraded from v1.4.0 and your `card-mod` styles stopped applying, see the migration tables in [CHANGELOG.md](CHANGELOG.md#150---2026-05-20) for the old-name → new-name mapping.

---

## Actions & Interactivity

### Zone Tap Actions

Tap, hold, or double-tap a zone row to trigger an action. By default, tapping opens the entity's more-info dialog.

| Option | Default | Description |
|---|---|---|
| `tap_action` | `more-info` | Single tap |
| `hold_action` | `none` | Long press |
| `double_tap_action` | `none` | Double tap |

Available actions: `more-info`, `navigate`, `call-service`, `url`, `toggle`, `none`

Set these at the card level for all zones, or per-zone for individual overrides. See the [Bar Card Guide](BAR_CARD_GUIDE.md#tap-actions) for detailed action configuration.

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

- **Radial:** Tap an arc to select a zone. The center display updates to show that zone's temperature, target, and HVAC status. Tap the legend items to switch between zones.
- **Thermal strip:** Tap a zone row to open a detail panel with a sparkline comparison. Hover over time slots for temperature tooltips.
- **Comfort strip:** Hover for comfort score tooltips. Drag to select a time range for comparison.
- **Energy flow and AC flow:** Tap a ribbon to highlight that zone. Other ribbons dim so you can focus on one zone's energy flow. Tap again to deselect. Tap a zone's name, status or temperature to open its climate entity and change the target or mode.

---

## Known Limitations

- **History-based sections need a sensor entity:** sparklines, thermal strips, comfort heatmaps, and graph sections rely on HA history data. Climate entities (`climate.*`) don't store numeric history the same way sensors do. If you use Tado CE with external sensors, the card picks them up automatically. For other integrations, point `temperature_entity` and `humidity_entity` to your dedicated sensor entities
- **Frosted glass needs a modern browser:** the frosted glass effect on panels and tooltips uses `backdrop-filter`, which isn't supported in older browsers. The card falls back to a solid background. Nothing breaks, it just looks less fancy
- **Visual editor doesn't cover everything:** per-zone chip filters, chip action overrides, and some section-specific options (like `hero_*` and `outdoor_temp_entity` at card level) are YAML-only. The editor handles the most common settings
- **Comfort scores are approximate:** the comfort heatmap blends temperature deviation, humidity, and Tado CE comfort level into a single score. It's a useful overview, not a scientific measurement
- **Energy flow needs heating power data:** the energy flow section only shows meaningful ribbons when your climate entities (or Tado CE sensors) report `heating_power`. Without it, you'll see "No heating data". `energy_flow_ac` does not need a power sensor, it falls back to showing each zone's state. Long zone names are not shortened in `energy_flow` or `energy_flow_ac`, so a long zone name can run off the edge or overlap its neighbour. Give the zone a short `name:` in its zone config to fix it, for example `name: Master` instead of the entity's long friendly name
- **A zone has the same name in every section:** Unavailable, Off, Heating, Cooling, Drying, Fan, Preheating, Defrosting or Idle. Heating and Cooling add the power percentage where the section has room for it.
- **"On target" means one thing in Home Status:** the status banner and the On Target count both treat a zone in heat mode as short of its target only when it is more than 1° under it, and a zone in cool mode only when it is more than 1° over (1.8° on a Fahrenheit Home Assistant). The "At target" tag in the Zones section is stricter: it appears within 0.3°.
- **The Comfort strip skips zones without a target:** a zone that is off, in frost protection or unavailable has no target to compare with, so its strip row stays empty rather than showing a score. The Comfort tab of Zone Ranking uses the same score for the current moment, reading the same temperature and humidity sensors as the strip, including any `temperature_entity` or `humidity_entity` you set for the zone. If every zone is off or has no target, the Comfort tab is hidden.
- **Average power is the same everywhere:** Home Status, Energy Flow and Zone Ranking average the zones that are available, not off, and have a power reading, with an idle zone counting as 0%. Energy Flow and AC Flow each read only their own power source (heating or air conditioner), while Home Status and Zone Ranking use whichever a zone has, so a home with both radiators and air conditioners can show different averages in them. Home Status also leaves out a zone that reports no target temperature, as a unit in dry or fan_only mode often does.
- **Numbers are rounded the same way in every section:** temperatures to one decimal (20.0 shows as 20), humidity and power to whole percentages. Sensor chips in the Environment, Schedule, Thermal and Weather sections still print the sensor's own reading, and the Graph legend prints the climate entity's own value. Zone Ranking sorts on the exact readings, so two zones with the same rounded value can appear in a slightly different order.
- **Without `hvac_action` the action is an estimate:** some climate entities, such as SmartIR air conditioners, report only their mode. For those the card works out the action itself. The dry and fan_only modes show Drying and Fan. Otherwise a readable power sensor decides first (above 0 is Heating or Cooling), then the mode and temperatures: a heat, auto or heat_cool unit more than 0.3° below its target reads Heating, and a cool, auto or heat_cool unit more than 0.3° above it reads Cooling (0.54° on a Fahrenheit Home Assistant). Within 0.3° the zone reads Idle. A thermostat with a temperature range uses its low and high targets. An infrared unit gives no feedback, so "Heating" means the unit is on in heat mode and the room is below the target, not that its compressor is running. Climates that report `hvac_action` are shown exactly as they report.
- **Multiple cards share resources:** placing several Pulse Climate Cards on the same dashboard view works well. Cards share history data, entity discovery, and CSS to keep things efficient. Each card draws inside its own shadow root, so gradient and filter IDs do not clash between cards
