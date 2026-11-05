# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [1.10.0] - 2026-11-05

### All cards

#### Security

- **Colour and size values in a card's config can no longer break out of the HTML they are written into.** The cards clean a colour or size before putting it in a style or an SVG attribute, but the cleaning removed only a few CSS characters. A value that contained a quote could close the attribute and add another one, and a value written as an HTML character reference could rebuild a `url(` that had been stripped. The shared cleaning step now also removes quotes, angle brackets, backticks, backslashes, ampersands and control characters, and takes the opening bracket off `url(`, `expression(` and `-moz-binding:` in a single pass that cannot be pieced back together, even for a very long value. Normal values such as `#ff9f0a`, `rgb(...)`, `var(--...)` and `color-mix(...)` are unchanged. Only someone who can edit a dashboard's config could ever supply these values, so this matters mainly if you paste a dashboard config from somewhere you don't fully trust.

- **The project's automated security checks were tightened.** CodeQL scanning runs on pushes and pull requests, secret scanning runs on pushes to `main` and on pull requests, GitHub Actions are pinned to exact commits instead of moving tags (the HACS validation action used to follow `main`), and Dependabot groups its GitHub Actions updates. Two high-severity advisories were cleared, and the development tools (vitest, eslint, jsdom and fast-check) were updated. None of these are part of the card files you load.

### Bar Card

#### Bug fixes

- **The colour picker added next to a Color field in the visual editor now gets the same layout as the built-in ones.** The swatch the editor adds beside a Color text field was missing its styling, so it sat unstyled instead of as a row with a round swatch. The editor also now recognises a Color field that already has its own swatch and leaves it alone.
- **A Pulse Bar sparkline no longer disappears when its history request fails.** The card replaced the working sparkline with an empty one and counted the failure as a successful refresh, so it stayed blank until the next interval. It now keeps the last good data. Editing the card's config while a request was still running could also let the slow reply from the old config overwrite the new one; those replies are now ignored.
- **Colours on a bar are checked the same way on live updates as on the first draw.** The first render already cleaned a bar's colour value before using it, but the update that runs on every state change wrote it as it was.

### Climate Card

#### Features

- **Tap a zone in Energy Flow or AC Flow to open its climate entity.** The zone's name, status and temperature now open the usual Home Assistant climate dialog, so you can change the target or the mode without leaving the card. Tapping the coloured flow itself still highlights that zone and dims the others.
- **A new AC Flow section shows how hard each air conditioner is working.** Add `energy_flow_ac` to the card's sections for a diagram with an air conditioner at the top and the air blowing down to each zone, in rows of up to four. Each zone shows its name, state and temperature. Ribbon width follows its AC power sensor, and the ribbons and moving dots are blue while cooling and orange while heating. A zone without a power sensor still shows what it is doing (for example Cooling, Heating, Drying or Idle) with no percentage, and its ribbon has a fixed width and a few dots while it is active. "No AC data" only appears when every zone is unavailable. It can sit beside the boiler Energy Flow in the same card.

#### Bug fixes

- **An air conditioner that reports no action is no longer always shown as Idle.** Some climate entities, such as SmartIR air conditioners driven through a Broadlink controller, only report their mode (heat, cool and so on) and never an `hvac_action`, so the card showed them as Idle even while they were running. The card now works the action out from the mode and the temperatures: Heating when a unit in heat, auto or heat_cool mode is below its target, Cooling when a unit in cool, auto or heat_cool mode is above it, and Drying or Fan for those two modes. If the card finds a power sensor for the unit, a heating power reading above zero reads Heating, an AC power reading above zero means it is running and the mode decides the direction (heat mode reads Heating, cool mode reads Cooling), zero reads Idle, and dry and fan-only modes always read Drying and Fan. Without a power sensor, a zone within 0.3 degrees of its target no longer reads Heating or Cooling. Climates that do report `hvac_action` show what they report. Frost protection (a heat setting at the minimum temperature while not heating, read as Off) now applies only to zones where the card has found sensors for the zone, which is what Tado CE provides, so a thermostat or air conditioner set to its own minimum, such as 16, shows its normal reading and target. Power readings are kept between 0 and 100%, and a reading that is not a number is ignored.
- **The Energy Flow stays up while the boiler is idle when a zone uses a power sensor.** With a heating power sensor set on a zone, the section showed "No heating data" whenever the sensor read 0 and came back as soon as the boiler fired. It now keeps the diagram whenever the sensor is readable.
- **The hero and the backdrop colour follow power-sensor and home-state changes.** A change on a zone's own power sensor left the hero showing the old state, and the backdrop wash kept the colour it had when the card first loaded. Both now update with the rest of the card.
- **A second update arriving within 200 ms of the previous one is no longer lost.** The card skipped it and did not come back to it, so a row could stay on an old value until something else changed. It now catches up as soon as that short window ends.
- **Temperatures show the unit your Home Assistant uses.** Climate entities carry no unit of their own, so the card assumed Celsius, and a Fahrenheit Home Assistant printed values such as 68°C. Zones, the outdoor temperature, the graph legend and the chart tooltips now follow Home Assistant's own setting. The temperature colours, the zone gauge ranges and the at-target, shortfall and comfort thresholds follow the same scale, so a Fahrenheit zone at 68°F is coloured and judged like a Celsius zone at 20°C.
- **Range thermostats, off thermostats and a 0 degree sensor read correctly.** A thermostat in heat_cool or auto with a low and a high target (and no single target) read as Off or Idle with no target. It now shows the nearer limit as its target, reads Heating below the range, Cooling above it and Idle inside it (when it reports no action of its own), and counts as on target in Home Status while inside the range. A thermostat whose state is off now reads Off even if its integration still reports an idle action, a temperature sensor reading exactly 0 shows 0 instead of `--`, and a zone with no target at all is styled as Idle, not dimmed, in every section.
- **A drying or fan zone no longer reads "At target", and preheating and defrosting have their own words.** The Zones tag now prints Drying or Fan like every other section, and a heat pump in preheating or defrosting shows that word instead of Idle. An offline window sensor no longer shows a green "Closed" chip.
- **Home Status reads an offline home, a hot air conditioner and a 0 degree target correctly.** When every zone is unavailable it says "Unavailable" instead of "All Good". Zones that are above their target (an air conditioner in cool mode at 30 against 22) read "Cooling Down" or "Too Warm" with "still above target", and a mix of both sides reads "still away from target", instead of the heating wording. A target of exactly 0 counts as a target.
- **Zone rows keep the right layout and colour when a zone goes offline and comes back.** A Pulse-layout zone that went unavailable and returned kept the wrong layout until the next history refresh, the filled sparkline kept the colour of the previous state, and a zone named with an ampersand (A&B) read as `A&amp;B` in screen readers.
- **The Energy Flow dots follow a zone's power.** A zone drawn at 10% kept its slow, few dots when it rose to 80%. The dots now change speed, size and number as the power moves, redrawing only when a step is crossed rather than on every 1% change.
- **The Radial rounds the outdoor temperature like the hero, shows the same centre after you deselect a zone, and keeps your selected zone open when it refreshes.** A raw reading such as 12.34567°C no longer shows, and a refresh caused by a power or outdoor change no longer closes the zone you were looking at.
- **A removed card stays quiet, and the hero follows an outdoor sensor that disappears.** A change pushed into a card that had been taken off the dashboard restarted its timers, and the hero kept showing "Outside 7°C" after the weather entity was removed. A new config now fetches history on the next update instead of waiting for the old request, and the hero is only redrawn when its content changed.
- **The health group, the comfort strip and the strip and timeline ribbons refresh with the rest of the card.** The bridge and API status chips, the strip and timeline row ribbons and the comfort strip used to wait for the 5-minute history refresh. They now update with the card, and the row ribbons change in place so an open detail panel stays open. Taps on their rows and chips respond the same way before and after a refresh, and a row with its own detail panel no longer also opens the more-info dialog.
- **Sensors added or renamed while a dashboard is open are picked up without a reload.** A new heating power sensor, for example, used to need a page reload before its power bar appeared. The card checks at most once a minute, on the next update from Home Assistant after that.
- **Every section now uses the same word for a zone.** The same zone could be "Off" in Zones and Home Status but "Idle" in the Radial, Energy Flow and tap panels, an unavailable zone showed "Idle" in some places, and Hero tooltips and Zones screen-reader labels printed the raw lowercase state. A zone is now one of Unavailable, Off, Heating, Cooling, Drying, Fan or Idle everywhere (Heating and Cooling keep their percentage where there is room for it), and the Zones tags read "Heating", "Cooling" and "Unavailable" in full (a Zones row within 0.3 degrees of its target reads "At target" instead). Home Status also stopped listing a drying or fan-only zone, or a heat_cool zone that is heating or cooling, as "Off" just because it has no single target: it stays an active row with "--" as the target, and is left out of the on-target count, average target, average power and home status.
- **Zone Ranking's Comfort tab now shows the same score as the Comfort strip.** The tab scored each zone by its distance from Tado CE's own comfort target, while the strip scores against your thermostat's target with humidity and Tado CE's comfort level added, so one zone could read 94 in one place and 88 in the other. Both now use the strip's score, and a zone that is off, in frost protection or unavailable shows `--` in Zone Ranking and an empty row in the strip. Scores in the Comfort tab will change. The ranking reads the same temperature and humidity sensors as the strip, including any `temperature_entity` or `humidity_entity` you set for a zone.
- **The Zone Ranking Comfort tab is no longer limited to Tado CE.** It used to appear only when a Tado CE comfort sensor was found. The score only needs a current temperature and a target, so it now appears for any climate entity, and Tado CE's comfort level is still added to the score where there is one. In a home that mixes both kinds, a Tado CE zone can score a little higher than an equivalent zone without a comfort level. The tab hides itself when every zone is off or has no target.
- **The Radial and the Hero use the same outdoor temperature, and both follow it live.** The Radial centre only looked at its own setting and the Tado CE outside sensor, so a home with just a weather entity saw the outdoor value in the Hero but `--` in the Radial. Both now use one order: the Radial's own `outdoor_temp_entity`, the card-level one, the Tado CE outside sensor, then any weather entity. They also refresh when the outdoor entity changes instead of waiting for a zone to update, and the Radial's outdoor humidity entity does the same.
- **Power changes from a separate sensor now reach every section.** If a zone's heating power comes from its own sensor (the "Heating power" setting, or a separate power entity), Home Status, the Radial, Zone Ranking and the Zones power bar only noticed a change when the climate entity itself updated; Energy Flow was the only section that followed the sensor. They all follow it now.
- **Zone rows refresh their chips when any sensor tied to the zone changes.** An open window, battery or mould sensor changing on its own used to leave the chip as it was until the climate entity next updated.
- **Temperatures, humidity and power are rounded the same way in every zone section.** Home Status rows showed the raw reading (17.349°C), Zone Ranking showed 53.4% humidity and 33.6% power, the tap panels showed raw numbers, and the Home Status footer printed 20.0°C beside a row that said 20°C. Temperatures now follow the one-decimal rule the Zones section already used, and humidity and power percentages are whole numbers, including in both tap panels. The Home Status change figure (for example +3.7°C) now carries the zone's own unit instead of a bare degree sign, so a Fahrenheit zone shows °F, and a zone exactly on target shows 0 instead of +0.0. Zone Ranking still sorts on the exact readings, so two zones can show the same rounded value in a slightly different order. Sensor chips (Environment, Schedule, Thermal and Weather) and the Radial's outdoor value still print the sensor's own reading.
- **Home Status, Energy Flow and Zone Ranking now give the same average power for a home.** Energy Flow counted off and unavailable zones as 0%, and Zone Ranking counted off zones, so the same home could read 30%, 15% and 18% in three places. All three now average the zones that are available, not off, and have a power reading, with an idle zone counting as 0%. Home Status also leaves out a zone that has no single target, so its figure can differ from the other two when a home has heat_cool, drying or fan-only zones. Home Status "Avg Actual" and "Avg Target" also leave out a zone that has no temperature reading, instead of averaging it as 0 degrees, and show `--` when no zone has one.
- **Home Status counts a zone as on target by the same rule as its status banner.** The banner ("All Good", "Warming Up", "Cold Start") treated a heating zone as short only when it was more than 1 degree under its target, while the "On Target" count at the bottom used a flat 1 degree either way, so a heating zone sitting 1.5 above its target could read "All Good" and "0/1" together. Both now use the banner's rule, and the colour bar is green at exactly 1 degree short instead of amber. A heat-mode zone above its target now counts as on target in the footer, and a cool-mode zone does so when it is below its target.
- **Zone rows in the pulse layout now follow live changes.** With `sparkline: mode: pulse` a zone's temperature, target, status word (Heating, Idle, Off) and line colour were drawn once and then stayed as they were until the card was redrawn. They now update as the zone changes, and the line recolours and starts glowing when the zone starts heating or cooling. The sparkline shape itself still refreshes on the usual history update.
- **The Comfort strip scores a zone against the same target as its row.** It read the climate's raw target setting, so a zone in frost protection (shown as Off in its row) was scored against 5 degrees, and an off zone against the target it last had. Those zones now show an empty strip row, the same as a zone with no target. The tooltip you get from dragging across a strip also rounds like the rest of the card (17.3 instead of 17.349).
- **The "At target" tag no longer misses by a rounding hair.** A zone at 20.7 with a target of 21 showed "Idle" because the difference works out to 0.30000000000000004 inside the card. The 0.3 degree cue now allows for that.
- **The Radial tooltip escapes the zone's unit.** The unit of measurement went into the tooltip text as it came from the entity, so an unusual unit string from a custom integration was written into the card as markup. It is now escaped. The temperature range in the strip tap panel also uses the same rounding as the rest of the card.
- **The Zones section now keeps up with live changes.** After the first update, a zone could lose its Heat, Idle or Off tag, and its row colour, humidity, power bar, chips and temperature gauge stayed at the old values while the other sections showed the new state. Each row now shows what it would show after a fresh load, and the chips still respond to taps after they change.
- **The boiler Energy Flow no longer cuts off the status and temperature on the right.** A line like "Heating 54% · 17.4°C" ran past the edge of the diagram, so the temperature of the bottom zone was clipped. Each zone now shows its name, its status and its temperature on three lines, the same as AC Flow, and the labels start a little further left. A zone with no temperature reading shows `--`. The rows are slightly taller to fit the extra line. With more than four zones the boiler moves to the top of the diagram at the same size as before, nothing sits at 12 o'clock, and the zones are spread on an arc around its sides and below it, with each flow leaving the boiler's edge as a smooth curve. The labels stay clear of each other up to about eight zones, so keep the names short if you have that many. A very long zone name is still cut off at the edge, so give the zone a shorter `name:` in its config.
- **Home Status no longer says "Cold Start" or "Warming Up" when your zones are warmer than their target.** A heating zone above its target was counted as missing it, so three zones at 16 to 20°C with a 5°C target showed "Cold Start, 3 of 3 zones below target". The hero now counts a heating zone as behind only when it is more than 1° under its target, and a cooling zone only when it is more than 1° over. Other modes, auto for example, still count either side. The wording changes to "at or past target" and "still short of target". On a zone where the card has found sensors for the zone (Tado CE provides them), a heating zone set to its lowest allowed temperature (Tado's frost protection, 5°C by default) now counts as off unless it is actually heating: it shows an Off row, drops out of the hero and the footer, and no longer shows a target. The deviation bar and the +/- figure are also coloured by how far a zone is short, so a heating zone sitting above its target is green instead of red.
- **A zone that Tado reports as idle no longer looks like it is heating because of a small leftover power value.** A zone could show "Idle" in the Zones row while its orange glow, power bar and the Energy Flow ("Heating 3%") treated it as heating. The card now goes by the zone's reported action and only uses the power value when the zone doesn't report one.
- **The radial shows a cooling zone's real power, and no longer gives it the heat haze.** An air conditioner with a power sensor showed "Cooling 0%" in the radial's title while the panel you get by clicking it showed the real figure, and above 50% power a cooling zone also got the heat-shimmer effect. A cooling zone also no longer reads as heating from a leftover heating-power reading.
- **Zone Ranking's Power tab and the Avg Power figure now count air conditioners that have a power sensor.** They only added up heating power, so an AC zone always counted as 0%.
- **A zone with no power sensor no longer shows 0%.** The zone rows, the radial and Energy Flow now say just "Cooling" or "Heating" for it, Zone Ranking shows `--` and ranks it last, and Avg Power and the Energy Flow average leave it out instead of pulling the figure down with a zero. The Energy Flow ribbon tooltip says "no power data". An air conditioner that only reports energy totals, with no live power reading, is one example.
- **Clicking a ribbon in Energy Flow now highlights that zone, and the diagram updates in place.** The highlight and the in-place update were both looking for the section under the wrong name, so neither ever ran. A change in a zone's power now updates the ribbons and labels in place, which keeps the flow animation running.
- **A zone that starts heating or cooling after the Energy Flow was drawn now gets its flowing particles straight away.** A zone drawn while idle had no particles, and they only appeared the next time the whole card redrew. The diagram now redraws once when a zone goes from idle to active, then updates in place.
- **Charts are correct when several Climate cards share a dashboard.** The cards shared one history cache with a single timestamp, so a card added later could pick it up without the sensors it needed and show empty charts for up to five minutes. A failed or partial history fetch was also counted as a success. Each sensor is now tracked on its own, a card only reuses the shared data when it covers everything it needs, and a failed fetch is retried. Editing the zone list or adding a graph entity now fetches the new sensors straight away, and the tap-to-details chart and the compare overlay read the same temperature sensor as the rest of the card (zones with an external temperature sensor showed nothing there).
- **Editing the dashboard no longer leaves extra hover, drag and animation handlers running.** Each switch in and out of edit mode, tab change or history refresh added another set of crosshair and drag-select listeners to the strips and heatmaps, and every edit of the card's config, including each keystroke in the editor preview, started another radial glow animation. They are now cleaned up each time. The sparkline hover also stopped working after the Zones section was redrawn, and a history response that arrived after the card was removed could restart its timers.
- **Two sections of the same type each keep their own content.** With two Thermal strips (temperature and humidity) or two Radials in one card, the first history load made both show the last one's data, and later live updates only reached the first. Each section now updates on its own.
- **The Graph legend follows live temperatures.** The current temperature next to each zone name only changed with the five-minute history refresh. It now updates when the zone does.
- **Open panels and selections stay as you left them.** A comfort, thermal or timeline detail panel used to close every five minutes when history refreshed. When the card found a new sensor, those panels, a selected Energy Flow ribbon and the Ranking tab you picked were reset. They now stay open, and one tap on a selected row or ribbon closes it again. A comparison you had added on top of a thermal panel is the one thing that still has to be picked again.
- **The Energy Flow dots change colour with the zone, and a zone's sparkline comes and goes with its availability.** In AC Flow a zone that switched from heating to cooling kept orange dots on a blue ribbon. A zone with a prominent sparkline that went unavailable kept the sparkline, and one that came back got no sparkline until the next history refresh.
- **A prominent sparkline with unreadable history draws nothing instead of an invalid line.** A zone whose recorded temperatures were all unreadable got a sparkline path made of `NaN` values, and its row was rebuilt on every update. The row now has no sparkline until the history is readable.
- **A clock that jumps backwards no longer freezes the card.** After a wall tablet or a VM corrected its clock by several minutes, the card ignored updates until the old time had passed again. It now carries on at once.
- **The API view shows the raw time when it can't read it, instead of "Invalid Date".** A history fetch that failed while the card was collecting its entities could also leave history switched off for good; it now always recovers.

#### Improvements

- **The Zones section stopped repeating the Home/Away badge on every zone row.** Each zone showed its own Home/Away chip as well as the one already in the section header, so a nine-zone dashboard printed the same badge nine times over. The per-zone chip now only shows when there's no header badge to duplicate it, or when you ask for it explicitly with `chips: [preset]`.
- **An off zone's chip row stopped repeating the "Off" tag next to its temperature.** Switching a zone off already showed an "Off" pill there, then the chip strip below piled on two more "Off" chips for the same fact: one for the HVAC state, one for the schedule overlay. The HVAC chip now skips automatically, and the overlay chip skips when the overlay itself reads Off; a zone switched off under a Manual or Schedule overlay still shows that chip. List `hvac_action` or `overlay` explicitly in `chips:` to show either anyway.
- **A zone's chip row no longer repeats the zone's status.** The tag beside the temperature already says Heating, Cooling, Idle, Off, Drying or Fan, and the extra chip could push the comfort and battery chips onto a second line. List `hvac_action` in `chips:` to bring the chip back for every state.

#### Removed

- **The `window_predicted` chip is gone.** It flagged Tado's own drift-based guess that a window might be open, separate from the `open_window` chip, which reflects an actual window/door sensor. An explicit `chips: [window_predicted]` entry is now just ignored rather than erroring, but it's worth deleting from your config.

### Weather Card

#### Bug fixes

- **The Weather Card shows the unit of your weather entity and Home Assistant instead of always Celsius, and never shows the previous entity's forecast.** Without Atmos CE sensors the card assumed Celsius, so a Fahrenheit Home Assistant printed values such as 68°C. It now uses the weather entity's own temperature unit, then Home Assistant's setting. After you change the weather entity, the old entity's forecast no longer stays on screen while the new one loads.
- **A failed forecast request is logged, and the card keeps the last forecast.** Failures in the entity registry lookup, the extended forecast and the daily and hourly forecasts were swallowed without a trace. Each now logs a warning in the browser console (the registry one once per card). When a refresh fails the card keeps the previous daily or hourly forecast of the same weather entity instead of going blank.
- **The minute, phase and countdown timers restart when the card is attached again.** They are re-armed whenever the card is attached again, and a late forecast reply no longer starts them after the card is removed.

## [1.9.2] - 2026-09-05

### Bar Card

#### Bug fixes

- **A gradient bar with three or more colour stops stopped blending after the first pair.** Anything past the second stop's start rendered as a flat colour instead of continuing the smooth blend `mode: gradient` promises. A disk-usage bar with green → orange → red stops, for example, jumped straight to solid orange, then solid red, with no blending at either boundary. Two-stop gradients were unaffected.
- **A `target` set as `{ value: entity_id }` stopped following its entity.** The marker and its label only moved when the bar's *main* entity changed. Moving the reference entity on its own, an `input_number` used as a temperature target, for example, left the target line stuck until something else on the card happened to update at the same time.
- **The target's label (`show_label: true`) is now actually visible.** It has rendered above the bar exactly as documented since the option was added, but sat entirely outside the bar's own clipped edge, so it never showed at any bar height. It now gets its own reserved space above the bar instead of floating past the clip.

### Climate Card

#### Bug fixes

- **Hot-water zones now discover their history and overlay chip.** A zone configured through a `water_heater.*` entity, the shape Tado CE's boiler/hot-water zones use, couldn't find any of its related sensors: the temperature sparkline stayed blank and the overlay chip never showed, with no explanation anywhere in the card. The zone lookup only recognised `climate`, `sensor`, and `binary_sensor` entities; it now recognises `water_heater` too.

#### Security

- **A mould or condensation risk chip no longer trusts its sensor's state text outright.** The chip's severity styling read that text directly rather than checking it against the handful of values the card actually understands, so a state containing stray quote marks could interfere with the chip's own markup. It's now checked against the known severities first.

### Weather Card

#### Bug fixes

- **Renaming your weather entity no longer freezes the card.** With no `weather_entity` set in the card config (the card finds one on its own), renaming that entity from Home Assistant's Settings → Entities (no dashboard edit needed) left the card showing its last render forever, with nothing to say why. It now picks up the new entity right away.
- **The EU air-quality scale's "Poor" band gets its own colour, not "Fair"'s.** On the EU 1–6 scale, "Poor" (AQI 60–80, described by the EU as health effects possible for everyone) was sharing a mild yellow badge with "Fair" and "Moderate" instead of a clearly worse one.
- **An unavailable air-quality sensor no longer shows as "Good".** A missing reading was coerced to zero, the cleanest possible score, so the card confidently reported clean air with no data behind it. It now hides the section instead, the same as any other missing sensor.
- **An unavailable UV sensor no longer shows as UV 0.** Same issue as the air-quality one above, on the overview's UV stat: a missing reading read as the safest possible value instead of "no data". It now shows "--" instead.
- **The atmosphere column no longer shows "0 J/kg" of storm energy when the CAPE sensor is unavailable.** The same coercion showed up here too, and it doubled as the switch deciding whether to show the CAPE and Lifted Index detail rows at all, so an unavailable sensor didn't just show a wrong number, it also kept a "Stable" reading and its detail rows on screen with nothing behind them. Both now correctly disappear when there's no reading to show.
- **A new or cleared weather alert can now appear right away, not up to a minute late.** The card's change-detection check covered the weather entity and Atmos CE's atmospheric sensors but not its alert sensors, so a firing or clearing alert only showed up once the card's regular 60-second refresh caught up.


## [1.9.1] - 2026-08-01

### All cards

#### Bug fixes

- **Everything you can tap is now reachable with a keyboard.** Chips, zone rows, ranking rows, the metric and timeline tab strips, the Weather Card's atmosphere panel, and the hourly forecast strip all responded to a mouse but ignored Enter and Space, so keyboard and switch-access users could see them and not use them. They now activate the same way a click does. Bar Card step buttons could also be reached but not focused.
- **Focused elements now show a focus ring.** Newly keyboard-reachable elements took focus without any visible indicator, so tabbing through a card gave you no idea where you were. Focus now draws a ring in your Home Assistant accent colour on everything focusable.
- **"Reduce motion" is now respected properly.** Only a fraction of each card's animation was covered, and the Weather Card's rain, snow, clouds, stars, fog, sun rays, and lightning were not covered at all, so a system set to reduce motion still got around 200 animated particles. The Weather Card now skips building those effects entirely rather than freezing them mid-frame. The air-quality haze is the one exception: its tint still darkens with the PM reading, since that carries the reading itself, and only the drifting dust is dropped.
- **Small text on the Weather Card is readable in a light theme.** Wind units, the atmosphere labels, and the sunrise/sunset times drew in a colour picked for your Home Assistant theme while sitting on the card's own dark backdrop, so in a light theme they came out dark-on-dark. They now use the card's cream palette. The bottom of the sky gradient was also too light for any text to read against, so it has been deepened, keeping the warm tone.
- **Chips and tabs are easier to hit.** Zone chips were about 15px tall, and the ranking tabs, radial legend, and detail close button were all a little under the 24px minimum, which made them fiddly on a phone. All four are now at least 24px.

#### Improvements

- **Storm-risk sparkline on the Weather Card overview.** The code that draws this has been in the card since 1.3.2 but was never placed on the page, so it has never appeared for anyone. It now shows below the stats when the next 12 hours carry meaningful instability, captioned with the peak value and the hour it lands.


## [1.9.0] - 2026-07-16

### Climate Card

#### Features

- **New heating-circuit chip.** If your boiler has more than one heating circuit and you run Tado CE, you can now add a `heating_circuit` chip to a zone to see which circuit that room is assigned to. It only shows when you list it in the zone's `chips`, and it stays hidden for rooms with no circuit assigned, so single-circuit homes see nothing extra. Tapping it opens the entity so you can reassign the circuit. To see it, upgrade [Tado CE](https://github.com/hiall-fyi/tado_ce) to 4.2.0 or later, which is the version that adds the heating-circuit entities.

#### Bug fixes

- **Comfort strip now reads the full range of comfort levels.** The strip's colour tint only recognised a few of the comfort states Tado CE actually reports, so rooms reading "Cold", "Hot", or anything with a "Dry" or "Humid" note fell back to a flat neutral tint instead of their real warmth. It now maps every comfort band, so a cold or overheated room reads true on the strip. The tint also no longer drifts toward neutral when a room's comfort sensor is briefly unavailable.


## [1.8.6] - 2026-07-09

### Weather Card

#### Bug fixes

- **Times now follow your Home Assistant time zone, not your device's.** If you were away from home in a different time zone, the overview clock, sunrise and sunset, the day arc, the meteogram's hour labels, and the storm-narrative time all read in your device's local time instead of your home's. They now follow the time zone set in your Home Assistant profile, so someone on holiday in Bangkok, checking on their London home, still sees London times. This respects the "Time zone" option in your profile: leave it on the server default and you get your home's zone; set it to your device and you get local time on purpose.

### Climate Card

#### Bug fixes

- **Timeline, heatmap, and chart times now follow your Home Assistant time zone.** The thermal and state timeline cells, the comfort strip, the temperature-history sparkline tooltips, the API next-sync and reset times, and the busiest-hour stat all read in your device's local time, so they showed the wrong hour when you were away from home. They now follow your Home Assistant profile's time zone setting, matching the Weather Card fix above.


## [1.8.5] - 2026-06-30

### Weather Card

#### Bug fixes

- **Amber warnings now show in amber, not yellow.** An amber weather warning painted its headline, ticker triangle, and the line under the radar in yellow, so an amber heat warning read the same colour as a lower-level yellow one. The warning text now takes the colour that matches its level, so yellow, amber, and red warnings each read as their own colour and line up with the radar blip.

- **Warnings now split into three colour levels instead of two.** The text only ever coloured warnings amber or red, so a low-level yellow advisory was drawn as amber. Warnings now follow the same yellow / amber / red scale as the radar and the source data, so each level shows its true colour.

- **The "all clear" line no longer claims a seven-day history the card doesn't keep.** When nothing was active it read "last 7 days clean", but the card has no record of past warnings. It only ever sees warnings that are in force or coming up, so a warning that ended an hour ago is already gone from its view. The line now reads "no active or upcoming warnings", which is what the card can actually tell you.

#### Other

- **`card_mod` users:** the alerts section no longer carries the `.pw-alerts-green` / `.pw-alerts-amber` / `.pw-alerts-red` classes that changed with the overall severity. If you styled the section through one of those, switch to `.pw-alerts-v2` for the whole section, or the per-warning `.pw-alert-yellow` / `.pw-alert-amber` / `.pw-alert-red` tone classes on individual rows. The radar, ticker, and detail-card hooks are unchanged.


## [1.8.4] - 2026-06-27

### Bug fixes

- **Card content no longer spills past its box and overlaps the card below** ([#50](https://github.com/hiall-fyi/pulse-card/issues/50) - @BirbByte, [#43](https://github.com/hiall-fyi/pulse-card/issues/43) - @ChrisMarriott38) — in a dashboard's sections (grid) view, a tall card reserved a fixed-height slot that was often shorter than what it actually drew, so the bottom of the card painted over whatever sat beneath it. The Climate and Weather cards were hit hardest, since a single heatmap, timeline, or meteogram section can run several rows deep. Every card now tells the grid to size its slot to the real content height, so the full card shows and the next card sits clear of it. If you had switched on the card's "Auto height" toggle, or added `grid_options: rows: auto` in YAML, to work around this, you no longer need either.

### Notes

- **The Weather card now reports the right version in the browser console.** Each card logs its version on load (open the browser console and you'll see a line like `PULSE-WEATHER-CARD v1.8.4`). The Weather card had fallen behind and logged an older number than the release you were on. All three cards now share one version, so the console line matches the version you installed.


## [1.8.3] - 2026-06-23

### Climate Card

#### Improvements

- **The 24h thermal heatmap now shows detail in hot weather.** The colour scale used to stop at 24°C, so once a room sat anywhere above that its whole row turned a single flat red and you could not see the temperature moving through the day. The scale now runs up through orange, red, and magenta to a deep tone past 34°C, so a warm summer home reads as a gradient again. Every temperature keeps a fixed colour across all zones, so you can still compare rooms at a glance.

- **The colour legend tracks the data on show.** It now lists only the temperature bands the current 24 hours actually crosses, cool colours in winter and hot ones in a heatwave, rather than a fixed set. It no longer spills onto a second row.

- **The number on each thermal row is labelled `24h avg`.** That figure has always been the zone's 24-hour average, not its current reading, but nothing said so. It is now labelled under the time axis. For the live temperature, read the zones section.


## [1.8.2] - 2026-06-22

The alerts section needs **[Atmos CE](https://github.com/hiall-fyi/atmos_ce) 1.0.1 or newer** to show the full warning list. On an older Atmos CE the section is empty. Update Atmos CE first, then this card.

### Bug fixes

- **The alerts section now shows every warning, not just two.** When a region had several warnings at once (say two ambers and a red during a heat event), the card could only show two of them, and the most severe one would sometimes go missing entirely. It now reads the full warning list from Atmos CE 1.0.1+ and shows each one, with the warnings already in force listed first and the most severe leading.

- **Section header reads "weather alerts" instead of "active alerts".** The list now includes upcoming warnings, not only those in force, so the old "active" label was misleading when an upcoming warning was on show. The count and the footer line match.

### Improvements

- **Radar blips spread out and sit at a distance that reflects timing.** A warning that is in force sits near the centre of the radar; the further into the future a warning starts, the further out its blip sits, up to a week away at the edge. Each blip takes a stable angle of its own, so warnings no longer pile up on the same spot or along one line, and they stay put between refreshes instead of jumping around.

### Notes

- The card has resolved alert colours from the severity name (yellow, amber, red) since 1.8.1, so it already showed the right colour even when the integration sent the wrong hex. Atmos CE 1.0.1 fixes that hex at the source; the card's colour handling is unchanged and stays in place as a safety net for any integration that sends a wrong colour.


## [1.8.1] - 2026-06-20

### Bug fixes

- **Weather Card sections all showing overview content** ([#49](https://github.com/hiall-fyi/pulse-card/issues/49) - @wrowlands3) — any section without custom options configured (scale, speed mode, horizon, etc.) was stored as a plain type string rather than an object. The config loader treated plain strings as invalid and fell back to `overview`, so every unconfigured section rendered as overview instead of its own content. Fixed in config normalisation; all section types now resolve correctly regardless of whether options are set.

- **Alerts radar showing red for Amber warnings** — Atmos CE sets `color: "#FF0000"` on level-3 alerts regardless of the severity name. The radar sweep, ring, and blip colours were derived from that field directly, so an Amber warning produced a red radar. Fixed by resolving the radar colour from the `severity` string attribute (`amber`, `yellow`, `red`) rather than the integration-supplied hex. The `ALERT_COLOR_MAP` numeric fallback for level 3 was also corrected from red to amber.


## [1.8.0] - 2026-06-17

**Pulse Weather Card ships as the third card in the family.** Works with any `weather.*` entity out of the box — point it at your entity and you get the current conditions hero, a 7-day forecast, and a meteogram on first load. Pair it with [Atmos CE](https://github.com/hiall-fyi/atmos_ce) for atmospheric stability, air quality, astronomy detail, weather alerts, and the extended 22-field hourly forecast that feeds cloud cover layers and CAPE data into the chart. Eight sections, each behind a section-shell with a brand-mark corner that toggles between a default and a pro view at runtime without touching YAML.

### Features

- **`overview` section** — current temperature in large type with a day/night progress arc (sunrise to sunset in amber, sunset to tomorrow's sunrise in blue), a contextual weather narrative sentence, precipitation probability bars for the next 12 hours, and a 4-column stats grid covering wind/gust, UV, and cloud cover. Brand-mark corner swaps to a pro view with a 7-day temperature sparkline and a second row of humidity, dew point, pressure trend, and visibility category stats. Atmos CE adds a CAPE storm-risk sparkline, wind chill and heat index context on the condition line, pressure trend symbol and direction, and labelled visibility category.

- **`forecast` section** — 7-day list with day label, condition icon, precipitation probability (shown when 50% or above), and a temperature range bar normalised across the full week so taller bars read as relatively warmer days. A dot marks today's current temperature on its bar so you can see where you sit in today's range at a glance.

- **`meteogram` section** — yr.no-style time-series chart on a single SVG: temperature curve with gradient fill, precipitation bars growing up from the baseline (blue for rain, white for snow), cloud cover as a translucent background wash, and NWS-standard wind barbs rotating through the staggered label cluster every three hours. Min and max temperature hours always show their value. Defaults to 12 hours; brand-mark corner toggles to 24 hours. Cloud cover layer requires Atmos CE extended forecast.

- **`wind` section** — animated compass rose with a direction arrow, gust cone, and animated wind streaks through the background. Centre display shows speed, unit, bearing in degrees, compass direction, and Beaufort scale name and description. Brand-mark corner toggles the rose centre between sustained speed and gust speed; the kicker updates to confirm which is shown.

- **`astro` section** — 24-hour sky-phase ribbon from midnight to midnight, coloured across night, civil twilight, blue hour, golden hour, and solar noon. Moon phase hero shows an SVG phase glyph, illumination percentage, age in days, and days to full. Stat tiles below show civil dawn/dusk, golden hour start/end, blue hour start/end, moonrise, and moonset. Requires `sun.sun`. Twilight times populated from Atmos CE sensors when available; ribbon renders with offset estimates otherwise.

- **`air_quality` section** — AQI gauge with a 5-tier colour band and a current-value marker, category label, and pollutant breakdown for PM2.5, PM10, NO₂, O₃, SO₂, and CO. Brand-mark corner toggles between EU scale (0–100) and US EPA scale (0–300); the kicker updates to confirm which is active. Requires Atmos CE.

- **`alerts` section** — radar-style display with active Meteoalarm weather alerts from Atmos CE. Radar sweep speed and colour shift with severity; alert blips appear inside the radar at positions keyed by severity and timing. Brand-mark corner toggles between a compressed ticker view (type, time window, location, headline) and full detail cards with prose description and locations. Shows a green all-clear radar when no alerts are active. Requires Atmos CE.

- **`atmosphere` section** — vertical atmospheric stability column showing a CAPE fill growing up from the surface, a cyan freezing-level marker, and a dashed LCL (cloud base) marker. The column scale extends automatically when either marker would exceed 80% of the default 5 km range. Storm-risk narrative in the header adapts to forecast CAPE peak time, whether the peak is past or upcoming, and whether sunset has passed. Tapping the column expands a detail panel with CAPE, Lifted Index, wind shear, lapse rate, freeze level, LCL, and cloud cover breakdown by layer. Requires Atmos CE sensors (at minimum `cape`, `lifted_index`, or `freezing_level_height`).

- **Atmos CE auto-discovery** — the card derives a source slug from the weather entity ID (strips `weather.` prefix and `_weather` suffix) and scans for `sensor.<slug>_*` entities across around 50 known keys. Set `atmos_source` explicitly when the slug derivation fails after a weather entity rename. When Atmos CE is present, the card fetches the extended hourly forecast via `atmos_ce.get_extended_forecast` before falling back to the standard `weather.get_forecasts`; the extended response adds dew point, CAPE, cloud cover by layer, and precipitation type per slot.

### Notes

- **Bar Card and Climate Card are unchanged in this release.** All existing configs keep working without edits.

- **No extra resource entry needed.** All three cards bundle into `pulse-card.js`, so your existing `/local/pulse-card.js` resource covers the Weather Card too. HACS installs everything automatically.


## [1.7.0] - 2026-06-13

**Climate Card visual revamp — Mercury monolith. Atmosphere drops the rotating gradient for a quiet radial wash that only shows up when something's actually heating or cooling. Hero gains per-zone breathing dots and per-zone 24h thermal strips, all synced to a single master pulse phase. Zone rows pick up a 3px state ribbon for at-a-glance scanning. Every zone-name surface across the card now shares one visual hierarchy, so an active zone reads bright and an off or sensor-only zone reads quiet wherever it appears. Plus two new optional grouped sections: a tabbed `timeline_group` (Thermal Heatmap + State Timeline) and an autodiscovered `system_health_group` (Bridge / HomeKit / API). The Thermal tab also gains a colour legend so you can read what each heatmap band means. HVAC colours converge on the existing Apple-tier palette so heating amber and cooling cyan match Weather Card and Zone Ranking.**

### ⚠️ Upgrade Notes

- **Climate Card heating / cooling colours shift slightly.** Internal HVAC references converge on the Apple-tier palette (`--pulse-tier-strong` / `--pulse-tier-calm`) instead of Material yellow / blue. Visually that means heating reads as `#ff9f0a` (Apple amber) and cooling as `#5ac8fa` (Apple cyan) — same hues Weather Card and Zone Ranking already use. If you've overridden `--pulse-status-yellow` or `--pulse-status-blue` for HVAC purposes via `card-mod`, switch to `--pulse-tier-strong` / `--pulse-tier-calm`. The status tokens stay defined for Bar / Switch / Weather, which still consume them in their non-HVAC semantics.

- **Sensors in an `error` state now read as unavailable everywhere.** Both cards already treated `unavailable` and `unknown` as "no value to show". A sensor reporting `error` is now handled the same way across the board — a Bar with an errored entity reads as Unavailable, and an errored Climate zone chip or power reading is skipped rather than printing the literal word `error`. If you were relying on the old Climate behaviour where an `error` state slipped through as a value, it now hides like the other dead states.

- **Atmosphere idle and off states render nothing.** The previous rotating conic gradient quietly tinted the card backdrop even when no zone was active. The new wash only shows for `heating`, `cooling`, or `mixed` home state; `idle` and `off` produce no markup. The card now reads as quiet when nothing's happening, which is the point.

- **Hero markup restructured.** If you depended on the legacy `pc-hero-dot` / `pc-hero-breakdown` / `pc-hero-strip` classes via `card-mod`, the new structure uses `pc-hero-dots` (cluster), `pc-hero-zone-dot` (one per zone, with `pc-hero-dot-{state}` modifier), and `pc-hero-strips` / `pc-hero-zone-strip` (per-zone 24h strips). Home-average single strip and the breakdown line are gone — the dot cluster expresses both visually.

- **Two new section types are opt-in.** `timeline_group` and `system_health_group` are additive — existing `thermal_strip`, `bridge`, `homekit`, and `api` keep working with their current markup. Add the new types to your `sections:` list when you want the tabbed view.

### Features

- **`timeline_group` section — tabbed 24h Thermal + State views** ([docs](CLIMATE_CARD_GUIDE.md)) — single section that hosts both the existing thermal heatmap and a new state timeline behind tabs. Click "Thermal" to see the rainbow heatmap with a 24h average per zone; click "State" to see when each zone was actually heating or cooling, with cell opacity reflecting power level. Both views share the same row grid (zone name on the left, cells in the middle, stat on the right) so zones stay vertically aligned across the tab switch. Add `type: timeline_group` to your `sections:` list; default tab is Thermal.

- **`system_health_group` section — autodiscovered tabbed Bridge / HomeKit / API** ([docs](CLIMATE_CARD_GUIDE.md)) — single section that hosts the three Tado CE health surfaces behind tabs. The group renders only the views that are actually discoverable: 0 of 3 present hides the whole group, 1 of 3 drops the tab strip and uses the view's domain as the section header, 2 or 3 show a tab strip in priority order Bridge → HomeKit → API. Saves vertical space when you have all three configured; for users without HomeKit or running cloud-only Tado, the group adapts to whatever is available.

- **Thermal tab gains a colour legend and a home-average footer** — the heatmap previously left you to guess what each colour band meant. The Thermal tab footer now shows a row of legend pills, one per temperature band, each labelled with the range it covers (not just a single anchor temperature), plus the home-average temperature for the window. The pip colours adapt to your actual data range so the legend matches the cells you're looking at, rather than a fixed scale that might not line up.

- **Hero per-zone breathing dot cluster** — the legacy single state pill becomes a row of dots, one per zone. Heating and cooling dots breathe at the master 4-second pulse phase; idle dots stay static at half opacity; off / unavailable dots fade further. Hover a dot to see the zone name and state. Replaces the breakdown line — the dot cluster shows the same information faster.

- **Hero per-zone 24h thermal strips** — under the dot cluster, one strip per zone showing the last 24 hours of temperature. Cells use the new state-aware gradient (dark cold-end fading to the zone's state accent — amber for heating, cyan for cooling, grey for idle). Strips have a 2px left ribbon coloured by HVAC state so each zone's strip flags its current state without needing to read the dot above. Capped at 6 rows; 7+ zones render the visible 6 plus a `+N more` mini-row so hero height stays predictable. Toggle off with `hero_show_thermal_strip: false` if you prefer the compact hero.

- **Zone row leading state ribbon** — every zone row picks up a 3px ribbon on its left edge, coloured by HVAC state (amber heating / cyan cooling / muted grey idle / faint off). Lets you scan zone state across a long zone list without reading text or icons.

- **Per-zone settings in the visual editor** — each zone in the editor now has its own Name, Icon, Colour, and Sparkline mode, plus Default / On / Off dropdowns for the temperature bar, power bar, and slider, and a collapsible Sensor overrides panel for pointing a zone at specific temperature / humidity / window / battery / mold-risk / heating-power entities. Everything that previously needed hand-written YAML is now in the GUI. A new `heating_power_entity` zone option drives the power bar and energy flow when auto-discovery can't find the sensor on its own.

### Bug Fixes

- **Hero home average displays sensor mean even when all zones are off.** Previously the legacy hero filtered to live-only zones and produced an em-dash placeholder when every zone was switched off — even though the temperature sensors were still reading and the average was meaningful. The new hero averages every zone with a finite current temperature regardless of HVAC action, so all-off setups see their actual home temperature instead of a dash.

### Improvements

- **Master pulse phase synchronises every motion across the card** — atmosphere wash, hero zone dots, and any future motion read from a single CSS-only animation phase (`@property --pc-pulse-phase` on `:host`, 4-second period). Everything that breathes stays in lockstep without any JavaScript timer. `prefers-reduced-motion: reduce` suspends the animation and locks the phase at its mid-state, so identity colours and ribbon edges stay visible but motion ceases.

- **Atmosphere becomes a single radial wash** — the rotating conic gradient retired in favour of a quiet wash that sweeps amber from the top when heating, cyan from the bottom when cooling, or both at reduced intensity when mixed. Idle and off states render no markup at all.

- **HVAC colour convergence on the existing Apple-tier palette** — climate-card-internal HVAC references (zone tag colours, power bar fill, sparkline lines, energy flow connectors, radial needle, graph, donut) now consume `--pulse-tier-strong` / `--pulse-tier-calm` / `--pulse-tier-moderate` / `--pulse-tier-gale` instead of the Material `--pulse-status-*` tokens. Visually heating shifts from `#FF9800` to `#ff9f0a` and cooling from `#2196F3` to `#5ac8fa`, so the climate card now matches Weather Card's wind tiers and Zone Ranking's power bars exactly. Zero new tokens added.

- **Body renderers extracted into reusable `*-view.js` modules** — `bridge.js`, `homekit.js`, `api.js`, and `thermal-strip.js` (heatmap mode) now delegate their body markup to dedicated view modules, so the new grouped sections share the exact same renderers without duplication. Existing standalone sections render byte-identically against pre-Mercury markup snapshots; if you have a working dashboard config today, nothing changes for you.

- **One visual hierarchy across every zone-name surface** — zone rows, home-status, zone ranking, thermal and comfort strips, the timeline group's Thermal and State tabs, and the radial legend now derive their emphasis from one shared rule. An active heating or cooling zone reads bright; an off, unavailable, or sensor-only zone reads quiet — consistently, wherever that zone appears on the card. Previously each surface decided emphasis on its own and they drifted apart.

- **Shared colour, state, and id helpers consolidated across the family** — hex-colour parsing, the "is this entity unavailable" check, SVG gradient/filter id generation, and the smooth-line path maths each lived in three or four near-identical copies across the cards. They're now single shared helpers, so a fix or tweak lands once instead of being chased across files. No visible change on its own; it's the groundwork that keeps the cards behaving identically where they should.

### Notes

- **No YAML config changes required.** Every option that worked in v1.6.0 keeps working without edits. The new `timeline_group` and `system_health_group` types are additive and opt-in; existing standalone sections render exactly as they did before. Hero, atmosphere, and zone rows update visually but keep the same config keys.

- **HACS upgrade is unchanged.** Filename `pulse-card.js` and HACS folder `/hacsfiles/pulse-card/` stay where they are. Existing dashboard resource URLs (`/local/pulse-card.js`) keep working without changes.


## [1.6.0] - 2026-05-23

**Climate Card gains an opt-in home overview (home-average temperature in big numbers, status pill, 24h thermal strip, outdoor temp), plus an animated atmosphere backdrop tinted by overall heating state. Plus a sweep through the design tokens — typography, radii, durations, spacing, and tier colours all live on the family `--pulse-*` surface now, so card-mod tweaks ripple cleanly across every card.**

### ⚠️ Upgrade Notes

- **Climate Card adds two new card-level visuals.** A home overview at the top showing your home-average temperature in big numbers, a status pill (All Good / Warming Up / Cold Start), how many zones are heating right now, a 24-hour thermal strip of the home's average, and an outdoor temperature line — opt in with `show_hero: true`; off by default so existing dashboards keep their layout. An animated atmosphere backdrop that subtly tints the card based on overall heating state is on by default; turn it off with `show_atmosphere: false`. Per-component opt-outs (`hero_show_thermal_strip`, `hero_show_outside`, `atmosphere_intensity`) are documented in [CLIMATE_CARD_GUIDE.md](CLIMATE_CARD_GUIDE.md).

- **Reminder: `type: custom:pulse-card` still goes away in v2.0.0.** The alias keeps working in v1.6.0 — your existing dashboards keep loading without YAML changes — but the canonical name is `type: custom:pulse-bar-card`. When you next edit a dashboard, swap the type in the YAML. No rush; this release won't break anything.

### Features

- **Climate Card home overview at the top** — single-glance summary of your whole home, anchored by the home-average temperature in big numbers. Sits above the zone list and shows the average alongside a status pill (All Good / Warming Up / Cold Start), how many zones are heating right now, a 24-hour thermal strip of the home's average, and an outdoor temperature line. Outdoor temp is auto-detected from a Tado CE outside sensor or any `weather.*` entity; override with the new card-level `outdoor_temp_entity` option. Off by default — opt in with `show_hero: true`. Hide individual rows with `hero_show_thermal_strip` / `hero_show_outside`.
- **Climate Card atmosphere backdrop** — animated tint behind the card chrome that reflects overall heating state. Subtle by default and breathes slowly so it doesn't distract; pick `subtle` / `medium` / `bold` via `atmosphere_intensity`, or turn off entirely with `show_atmosphere: false`.
- **Donut largest-segment bloom** — the dominant zone in the donut now glows softly to anchor the eye. Centre value uses the same hero typography as the rest of the card.
- **Heatmap now-marker** — when you set the comfort or thermal strip to heatmap mode, a vertical line marks the current hour. Previously the marker only appeared in timeline mode.
- **Strip cell hover glow + warm spotlight on selected row** — hovering a thermal strip cell now highlights it with a soft glow, and the currently selected row gets a warm spotlight wash so you can track it across scrolling.
- **Radial centre + zone ranking typography** — radial section's centre temperature, zone-ranking summary stats, and the home-status block all now use the same hero font family (32px, thin weight, tabular numerals). Numbers stay aligned column-to-column, big numbers read as a family.

### Bug Fixes

- **Climate Card history cache no longer keys against the wrong sensor** — when a zone configured `temperature_entity` to override which sensor feeds its history (e.g. a Sonoff external sensor instead of Tado's built-in reading), the home-average history strip read from `data[climate.foo]` while the writer keyed against the resolved sensor, leaving the strip permanently empty. Both sides now resolve the same way.
- **Climate Card donut bloom no longer silently disappears** — the active arc had a global `filter: url(#donut-bloom)` rule that overrode the inline per-instance filter id, so the browser looked up an id that didn't exist and dropped the bloom entirely. The CSS rule is gone; the inline attribute now wins.
- **Thermal strip cell glow + scaleY no longer get clipped** — the hover glow and selected-row scale effects were being silently clipped by `overflow: hidden` on the row container and strip wrapper. Both containers now use `overflow: visible`; cells keep their corner rounding via their own `border-radius`.
- **Climate Card "X active" zone count now counts only heating + cooling** — the hero status pill was including idle / off zones in the count. Off zones now show their own subtle backdrop instead of being counted as active.
- **Section labels no longer fade out** — the family-shared `.pulse-section-label` had a 0.7 opacity multiplier baked in, which made labels read as washed-out grey on light themes. Removed; labels now use full token colour.
- **Climate Card comparison legend now styles** — the comparison overlay between primary and comparison entities was emitting `class="comparison-legend"` while the stylesheet rule expected `.pc-comparison-legend`. Selector typo fixed; legend now picks up its colour and dot styling.

### Improvements

- **Family `--pulse-*` token surface expanded** — typography (display / hero / summary / large / stat / kicker font sizes, plus letter-spacing scale), border radii (panel / row / element / pill / small / tight / hairline / circle), animation durations (instant / fast / base / medium / mode / slow / colour / reveal / fill), spacing scale (panel / row / chip / hairline / pin), and Apple-system tier colours (calm / moderate / strong / gale) all now live as named tokens on the `--pulse-*` family surface. Defaults match what shipped before, so the cards look identical without `card-mod` overrides — but if you do override, a single token change cascades cleanly. Full reference is in each card's guide.
- **Hearth wash** — Climate Card backdrop picks up a subtle bottom-edge ember glow that pairs with the new atmosphere layer. Static; no animation. Disable indirectly by setting `--pulse-bg-card` via card-mod.
- **Atmosphere subsystem hardening** — the atmosphere column's storm narrative no longer mis-renders severe storms as "Atmosphere settled" when CAPE plus lifted-index push the score into the High band on installs without an Atmos CE composite sensor. Atmos CE sensor changes (CAPE bumps, freeze level shifts, wind shear updates) now invalidate the render gate immediately instead of waiting up to 60 seconds for the periodic timer.
- **Climate Card atmosphere section honours `pro: false`** — Bar / Climate / Switch all let you set `pro: false` per section to demote the brand-mark corner button to a static decorator. The atmosphere section silently ignored it; it now follows the same opt-out as every other section.
- **Aggressive comment + dead-code sweep** — internal jargon stripped from source comments, family-wide log prefix alignment, unused exports purged. No user-visible behaviour change; the maintenance cost on every future fix drops.

### Notes

- **No YAML config changes required.** Every option that worked in v1.5.0 keeps working without edits. The 6 new Climate Card options are additive and default to sensible values, so dashboards untouched still render.
- **HACS upgrade is unchanged.** The filename `pulse-card.js` and HACS folder `/hacsfiles/pulse-card/` stay where they are. Existing dashboard resource URLs (`/local/pulse-card.js`) keep working without changes.


## [1.5.0] - 2026-05-20

**Bar Card and Climate Card naming sweep — shared design tokens are now under one `--pulse-*` family prefix and card-specific knobs use `--pb-*` or `--pc-*`. CSS class selectors are slug-prefixed to match. If you customise either card with `card-mod` or a custom HA theme, you'll need to update a handful of variable names. Plus a Climate Card editor fix that lets you tick on the Home Status and Zone Ranking sections without hand-editing YAML.**

### ⚠️ Upgrade Notes

- **Card-mod and custom HA theme variables have been renamed.** Tokens that both cards share (text colour, body type size, card chrome background, surface tint) now live under one family prefix `--pulse-*`. Tokens that are genuinely card-specific use `--pb-*` (Bar Card) or `--pc-*` (Climate Card). If you set any of the variables in the migration table below via `card-mod` or a custom theme, swap them to the new names. Variables you didn't override aren't affected — defaults still work.

  | Old name | New name | Card |
  |---|---|---|
  | `--pulse-card-background` | `--pulse-bg-card` | family-shared (used by every card) |
  | `--pulse-font-size` | `--pulse-font-body` | family-shared |
  | `--pulse-name-color` | `--pulse-text-primary` | family-shared |
  | `--pulse-value-color` | `--pulse-text-primary` | family-shared |
  | `--pulse-secondary-color` | `--pulse-text-secondary` | family-shared |
  | `--pulse-icon-color` | `--pulse-text-secondary` | family-shared |
  | `--pulse-row-bg` | `--pulse-bg-secondary` | family-shared |
  | `--pulse-chip-color` | `--pulse-text-secondary` | family-shared |
  | `--pulse-indicator-color` | `--pb-indicator-color` | Bar Card (per-card override) |
  | `--pulse-track-opacity` | `--pb-track-opacity` | Bar Card |
  | `--pulse-sparkline-color` | `--pb-sparkline-color` | Bar Card |
  | `--pulse-bar-height` | `--pc-bar-height` | Climate Card |
  | `--pulse-bar-radius` | `--pc-bar-radius` | Climate Card |
  | `--pulse-gauge-height` | `--pc-gauge-height` | Climate Card |
  | `--pulse-gauge-radius` | `--pc-gauge-radius` | Climate Card |
  | `--pulse-gap` | `--pc-gap` | Climate Card |
  | `--pulse-graph-height` | `--pc-graph-height` | Climate Card |
  | `--pulse-chart-line-width` | `--pc-chart-line-width` | Climate Card |

- **CSS class selectors used in `card-mod` styles have been renamed.** If you target any of the Bar Card's chrome class or any Climate Card section / element class with `card-mod`, the new names use the `.pb-*` and `.pc-*` prefixes:

  | Old selector | New selector |
  |---|---|
  | `.pulse-card` (Bar Card chrome) | `.pb-card` |
  | `.zone-row`, `.zone-name`, `.zone-temp`, `.zone-target`, `.zone-humidity`, `.zone-chips` | `.pc-zone-row`, `.pc-zone-name`, etc. |
  | `.section`, `.section-label` | `.pc-section`, `.pulse-section-label` (the latter is family-shared) |
  | `.section-zones`, `.section-radial`, `.section-thermal-strip`, `.section-comfort-strip`, `.section-zone-ranking`, `.section-home-status`, `.section-energy-flow`, `.section-graph`, `.section-donut`, `.section-api`, `.section-bridge`, `.section-homekit`, `.section-weather`, `.section-environment`, `.section-thermal`, `.section-schedule` | Each one prefixed with `pc-` |
  | `.chip`, `.severity-high`, `.severity-medium`, `.severity-critical` | `.pc-chip`, `.pc-severity-*` |
  | `.power-bar-container`, `.power-bar-fill`, `.power-bar-track` | `.pc-power-bar-container`, `.pc-power-bar-fill`, `.pc-power-bar-track` |
  | `.temp-gauge`, `.temp-gauge-bg`, `.temp-gauge-current`, `.temp-gauge-target` | `.pc-temp-gauge`, `.pc-temp-gauge-bg`, `.pc-temp-gauge-current`, `.pc-temp-gauge-target` |
  | `.legend-item`, `.legend-chip`, `.legend-dot` | `.pc-legend-item`, `.pc-legend-chip`, `.pc-legend-dot` |
  | `.rank-row`, `.rank-num`, `.rank-name`, `.rank-value`, `.top` (rank-1 highlight) | `.pc-rank-row`, `.pc-rank-num`, `.pc-rank-name`, `.pc-rank-value`, `.pc-top` |
  | `.home-status-*` | `.pc-home-status-*` |
  | `.zone-row-pulse`, `.heating` (chained on `.zone-row-pulse`), `.heating-glow` (SVG glow filter) | `.pc-zone-row-pulse`, `.pc-heating`, `.pc-heating-glow` |
  | `.unavailable` (chained on `.zone-row`), `.bar-active` (chained on `.power-bar-fill`) | `.pc-unavailable`, `.pc-bar-active` |
  | `.columns` (chained on `.section-zones`, multi-column grid), `.active` (chained on `.ranking-tab`, selected tab) | `.pc-columns`, `.pc-active` |
  | `.comparison-path`, `.comparison-legend` (zone-graph comparison overlay) | `.pc-comparison-path`, `.pc-comparison-legend` |

  `.pulse-title` and `.pulse-section-label` stay on the family-shared prefix because both cards share them. The full list of renamed Climate Card classes is in the updated [CLIMATE_CARD_GUIDE.md](CLIMATE_CARD_GUIDE.md). The dashboard YAML config (`type: custom:pulse-card`, `type: custom:pulse-climate-card`) and per-zone options haven't changed — only the CSS hooks for advanced styling.

- **Heads-up: `type: custom:pulse-card` is deprecated and will be removed in v2.0.0.** It still works in v1.5.0 — your existing dashboards keep loading without YAML changes — but the canonical name is now `type: custom:pulse-bar-card`. When you next edit a dashboard, swap `pulse-card` for `pulse-bar-card` in the `type` field. There's no rush; this release won't break anything. The v2.0.0 release will drop the alias entirely, so any dashboard still on `pulse-card` at that point will fail to load until you update the YAML. The filename `pulse-card.js` (and the HACS folder `/hacsfiles/pulse-card/`) is unchanged — only the YAML `type:` value is renaming.

### Bug Fixes

- **Climate Card editor now lets you tick on Home Status and Zone Ranking** — both sections shipped in v1.3.0 but the visual editor never listed them in the section picker, so you had to hand-edit the YAML to enable either. They now appear in the "Charts & Visuals" group alongside Zones, Graph, Radial, etc.
- **Climate Card visual states no longer briefly flash uncoloured on first paint** — the connection-status pulse dot, the radial section's selected zone arc, the zone ranking gold marker on rank 1, and chip severity colours all rendered without the matching CSS class on the very first render in some scenarios. They picked up the class within the first state update, so the gap was usually milliseconds — but if you tap into a card during the initial load you may have noticed the brief flicker. Markup and selectors are now pinned to the same prefix everywhere, so first paint matches steady state.

### Improvements

- **Card-mod and theme variable names map cleanly to where they belong.** Anything both cards share — text colour, body type size, card chrome, surface tint — lives on a single `--pulse-*` token, so styling that you set once flows to every card in the family. `--pb-*` and `--pc-*` are reserved for genuinely card-specific knobs (Bar Card sparkline colour, Climate Card gauge height, etc.). If you've ever wondered "is this variable for Bar or Climate?" while writing a theme, the answer is now visible at a glance.
- **The Bar Card's `pb-card` chrome class no longer collides with anything.** It used to be `pulse-card`, which conflicted with the legacy custom-element name and made `.pulse-card` selectors ambiguous between "the card chrome" and "any card in the family". Resolved by renaming the chrome class.

### Notes

- **No YAML config changes.** Your dashboard YAML keeps working as-is — every option name (`zones`, `entity`, `sections`, `tap_action`, `interactive`, etc.) is unchanged.
- **Theme defaults are unchanged.** If you don't set any of the renamed variables yourself, the cards look identical to v1.4.0.
- **Why the rename?** With Bar Card and Climate Card both in the family today (and Weather Card in development), mixing every card under `.pulse-*` had become genuinely confusing — both for users writing card-mod and for anyone reading the source. Shared concerns (text colour, body type size, card chrome) now sit under a single `--pulse-*` family prefix that flows to every card; only the card-specific knobs carry a slug prefix. Ownership is now obvious from the name.
- **`PULSE_CARD_GUIDE.md` renamed to `BAR_CARD_GUIDE.md`** to match the card's name. README links updated. The old filename is the only thing that's moved — content is the same plus the v1.5.0 token rename.


## [1.4.0] - 2026-05-12

**Security, reliability, and diagnostics — chip text hardening, animation timer cleanup, and the Climate Card now tells you when something's wrong instead of silently breaking.**

### Security

- **Chip text hardening on the Climate Card** — environment, thermal, and schedule chips now escape the unit suffix (°C, %, etc.) before rendering. Units are read from Home Assistant entity attributes, which can be overridden via `customize.yaml`, so the extra escape step keeps the chips safe if an unusual value ever turns up there
- **URL scheme whitelist on tap actions** — tap, hold, and double-tap actions that navigate or open a URL now only allow `http://`, `https://`, and `/local` paths. This prevents a crafted YAML config from triggering unexpected protocols

### Bug Fixes

- **Climate Card no longer leaks animation timers** — the shimmer sweep and glass sheen on the radial view now stop cleanly when you edit the card config, refresh the dashboard, or navigate away. On long-running dashboards this prevents a gradual slowdown as orphaned animation timers used to pile up in the background
- **Climate Card detail tooltips no longer stack on reconnect** — tap/hover interactions on thermal strips, comfort heatmaps, and zone sparklines now correctly clean up their listeners when the dashboard reloads, so tooltips no longer fire twice after an HA restart
- **Climate Card history never shows stale data** — if you edit the card config or change zones while a history fetch is in flight, the in-flight result is discarded instead of overwriting the new cache. Other Pulse Climate Cards on the same dashboard are no longer affected either
- **Climate Card radial view no longer bleeds filter effects between cards** — if you had two Pulse Climate Cards on the same dashboard at different sizes, the second card's glow and heat-shimmer effects could silently pick up the first card's settings. Each card now owns its own filter definitions
- **Climate Card stacked graphs no longer collide in shadow DOM** — when the graph section was set to `stacked: true`, the temperature and humidity sub-graphs could share gradient IDs, causing subtle colour bleed. Each sub-graph now gets a unique ID
- **Climate Card history alerts no longer silently downgrade severity** — if the Atmos CE integration ever emitted an alert with an unparseable severity value, the card silently rendered it as level 1. Now only truthy numeric levels are accepted
- **Energy flow section handles unusual zone names** — zones with quotes or brackets in the name no longer break the section's internal selector logic

### Improvements

- **Diagnostic logging for Bar Card sparklines** — if Home Assistant's history format ever changes in a way the card can't parse, you'll now see a console warning pointing at the specific entity instead of a silently-empty sparkline
- **Climate Card warns when a section option is not a number** — if you accidentally write something like `radial: { size: auto }` instead of a number, the card now logs a clear warning instead of silently substituting the default
- **Manual entity overrides now warn on typos** — if you set `battery_entity: sensor.does_not_exist` on a zone, you'll see a console warning naming the zone and the missing entity, so the silent "chip disappeared" case is diagnosable
- **Hardened internal helpers against future misuse** — thermal particle backgrounds and SVG attribute builders now sanitize their inputs internally


## [1.3.2] - 2026-05-07

**Colour token sweep — chip colours, ranking highlights, and comfort bars now follow your HA theme automatically.**

### Improvements

- **Chip colours now follow your HA theme** — remaining hardcoded chip colours (window open, battery, mold risk, preheat, valve) have been migrated to CSS variables. If you use a custom HA theme or card-mod, these chips now adapt automatically

### Bug Fixes

- **Fixed floating-point noise in temperature displays** ([#45](https://github.com/hiall-fyi/pulse-card/issues/45) - @Si-Hill) — Values like `18.700000000000003°C` could appear in the valve control chip and other temperature displays when an integration passed through raw floating-point arithmetic results. All numeric temperature displays now round to one decimal place, showing clean values like `18.7°C`
- **Valve chip now shows "Idle" for SVC-enabled zones** ([#45](https://github.com/hiall-fyi/pulse-card/issues/45) - @Si-Hill) — Zones with Smart Valve Control enabled but not actively intervening previously showed no valve chip at all, making it look like SVC wasn't running. You'll now see "Valve: Idle" on those zones so you can tell at a glance that SVC is monitoring. Requires Tado CE v4.0.0-beta.14+ (which exposes the idle state)

## [1.3.1] - 2026-05-02

**Shared design tokens across both cards, manual entity overrides on the Climate Card, and documentation improvements.**

### New

- **Manual entity overrides on the Climate Card** — you can now set `open_window_entity`, `battery_entity`, and `mold_risk_entity` per zone in your YAML config. This opens up chips to any climate integration — not just Tado CE. Tado CE users can also swap in dedicated sensors (e.g. a Zigbee window contact instead of Tado's built-in open window detection). Point each override to any entity in your system and the chip appears on that zone

### Improvements

- **Shared design tokens** — both cards (Bar and Climate) now share the same colour and typography tokens. If your HA theme sets `--primary-text-color` or `--primary-color`, every card picks it up consistently. This also means card-mod overrides using `--pulse-*` variables work across both cards

- **Larger radial center pane** — the glass circle in the middle of the radial view now sits closer to the surrounding arcs, giving it a more filled-in, polished look

- **Better Bar Card guide** — the configuration guide now documents per-entity `min`/`max` overrides with examples, making it clearer how to mix different ranges on the same card

## [1.3.0] - 2026-04-27

**Two new sections — Home Status and Zone Ranking — plus visual polish and reliability fixes.**

### New

- **Home Status section** — add `home_status` to your sections list for a single-glance summary of your entire home's heating state. A hero indicator at the top tells you whether things are All Good, Warming Up, or in Cold Start based on how many zones are at target. Below that, every zone is listed with its actual → target temps and a colour-coded deviation bar, sorted so the zone furthest from target appears first. A summary footer shows aggregate stats. Tap any zone to open its controls
- **Zone Ranking section** — add `zone_ranking` for a leaderboard view of your zones. Switch between Power, Temp, Humidity, and Comfort tabs to re-rank. Each zone shows its rank, a proportional bar, and the metric value. Summary stats at the bottom show average, highest, lowest, and spread. The Comfort tab appears automatically when you have Tado CE — it uses the ASHRAE 55 comfort model to score each zone based on how close it is to its calculated comfort target
- **Glass sheen on the radial center** — a subtle light band sweeps across the center circle at random intervals, giving the glass pane a polished, alive feel. Adapts to your theme automatically and respects reduced motion preferences

### Improvements

- **Livelier radial view** — the shimmer sweep is brighter and active zone arcs stay more vivid throughout their pulse cycle, so the whole radial section feels more energetic at a glance
- **Cleaner zone labels on thermal strips and comfort heatmaps** — removed the external sensor name that appeared below each zone name. Zone labels now just show the zone name everywhere. If you need to know which sensor is feeding a zone's data, use the `temp_source` chip
- **Tado CE features auto-hide when not available** — sections and tabs that need Tado CE data (like the Comfort ranking tab) only appear when the card detects Tado CE sensors. Non-Tado users see a clean interface with no empty or broken sections

### Bug Fixes

- **Fixed visual effects not resuming after dashboard edit** — shimmer sweep, glass sheen, and all tap actions on the Climate Card stopped working after editing and saving your dashboard. You had to hard-refresh the page to get them back. The card now properly restores everything when HA reconnects it
- **Fixed tap actions not resuming after dashboard edit on the Bar Card** — same issue as above but for the Pulse Bar Card. Tap, hold, double-tap, and slider interactions now resume correctly after a dashboard save

## [1.2.1] - 2026-04-26

### Bug Fixes

- **Zone discovery rewritten — works for all users** ([Discussion #20](https://github.com/hiall-fyi/pulse-card/discussions/20) - @driagi) — the previous discovery method relied on an internal identifier that Home Assistant removed from the frontend in 2023.3. This meant mold risk, comfort level, condensation, and other zone-level chips never appeared for most users. The card now uses device grouping instead, which works on every HA version and every language

### Improvements

- **Multi-valve battery chip shows worst state** ([Discussion #20](https://github.com/hiall-fyi/pulse-card/discussions/20) - @driagi) — rooms with multiple TRVs now show a single battery chip with the worst state across all valves (e.g. if 3 are Normal and 1 is Low, you see "Low"). Use `battery_all` in your chips list to see every valve's battery individually
- **Multi-valve zones fully discovered** — all battery and connection entities are now found for zones with 2+ TRVs, even when every device uses a suffixed name

## [1.2.0] - 2026-04-26

**External sensor auto-detection, discovery fixes, and visual polish.**

### New

- **External sensor auto-detection** ([#29](https://github.com/hiall-fyi/pulse-card/issues/29) - @Si-Hill) — if you've configured an external temperature or humidity sensor in Tado CE (e.g. Sonoff Zigbee SNZB-02D), the card now picks it up automatically and uses it for graphs, thermal strips, comfort heatmaps, and sparklines. External sensors typically report every few minutes, so your history charts will be noticeably denser. No YAML changes needed — the card reads the `external_temp_sensor` and `external_humidity_sensor` attributes from your climate entity
- **Source indicator on history sections** — when a zone's history data comes from an external sensor, a small label appears next to the zone name showing the sensor's friendly name. Hover for the full entity ID. Helps you understand why your graphs might differ from the Tado app
- **"Waiting for data" vs "No data"** — when an external sensor is configured but hasn't accumulated history yet (e.g. just paired), the card shows "Waiting for data" instead of "No data" so you know it's working, just needs time
- **Zone icons** ([Discussion #20](https://github.com/hiall-fyi/pulse-card/discussions/20) - @driagi) — custom icons set via `icon: mdi:sofa` in your zone config now render next to the zone name

### Bug Fixes

- **Thermal strip no longer shows black cells at the start** — the first few time slots in thermal and comfort strips appeared black when history data started slightly before the visible window. The card now carries forward the last known reading, so early slots show the correct temperature colour
- **Empty heatmap cells are now visually distinct** — cells with no data now show a subtle diagonal stripe pattern instead of a solid dark colour that looked like a temperature reading
- **Tado CE sensors discovered for v2.x upgrade users** ([#29](https://github.com/hiall-fyi/pulse-card/issues/29) - @Si-Hill, [Discussion #20](https://github.com/hiall-fyi/pulse-card/discussions/20) - @driagi) — if you first installed Tado CE before v3.0, your sensors kept the old internal identifiers. The card now recognises both old and new formats, so temperature, humidity, mold risk, and all other zone sensors are discovered correctly
- **Multi-valve zones show all battery chips** — rooms with two or more TRVs now show a battery chip for each valve, not just the first one found
- **Prominent sparkline colors no longer bleed between zones** ([Discussion #20](https://github.com/hiall-fyi/pulse-card/discussions/20) - @driagi) — each zone's prominent sparkline now uses its own SVG gradient, so setting different colors per zone works as expected
- **History fetch deduplication** — when an external sensor entity matches the discovered sensor, the card no longer fetches the same entity twice

## [1.1.0] - 2026-04-25

**Performance, reliability, and international compatibility.**

### Bug Fixes

- **Charts and sparklines now load on page refresh** ([#29](https://github.com/hiall-fyi/pulse-card/issues/29) - @Si-Hill) — history-based sections (graphs, thermal strips, comfort heatmaps, sparklines) showed empty data after refreshing the dashboard. The card now re-fetches history on reconnect and preserves cached data across page navigations
- **Radial shimmer and interactions survive updates** — the arc glow animation and tap-to-select stopped working after a zone's temperature changed. Now they re-bind correctly after each update
- **Entity discovery now works in any language** ([#28](https://github.com/hiall-fyi/pulse-card/issues/28) - @dragorex71) — if your Home Assistant is set to Italian, German, or any non-English language, Tado CE sensors get translated names and the card couldn't find them. The card now looks up sensors by their stable internal identifier instead of matching names, so all sections work regardless of your HA language
- **Battery and connection chip discovery** ([Discussion #20](https://github.com/hiall-fyi/pulse-card/discussions/20) - @driagi) — battery and connection sensors are now discovered correctly. These are device-level entities with a different naming pattern that the previous scanner missed. Multi-device zones (e.g. a room with two TRVs) show both battery sensors
- **Battery chip icons now match the actual state** — the battery chip was comparing against uppercase states ("LOW") but Tado CE reports Title Case ("Low"). Icons and colors now resolve correctly for Normal, Low, and Critical states
- **Condensation chip no longer shows when there's no risk** — heating zones report "None" when condensation risk is zero. The chip now hides in that case instead of showing a meaningless "None" label

### Improvements

- **Dramatically lower CPU usage on multi-card dashboards** ([#27](https://github.com/hiall-fyi/pulse-card/issues/27) - @hapklaar) — dashboards with many climate cards no longer spike CPU to 200%. Updates are now throttled and batched, and the card only tracks entities it actually uses instead of watching everything
- **Cards on the same page share history data** — multiple climate cards no longer make separate data requests for the same sensors. The first card to fetch shares its data with all other cards on the page
- **Cards on the same page share sensor discovery** — the scan that finds your Tado CE sensors now runs once and is shared across all cards, instead of each card scanning independently
- **Zone updates skip when nothing changed** — the card now checks if any zone actually changed before doing work. On a dashboard with 15 zones and 50 cards, this avoids thousands of unnecessary checks per second
- **History refresh preserves your interactions** — the 5-minute data refresh no longer rebuilds environment, thermal, and schedule sections. If you had a panel expanded or an item selected, it stays exactly as you left it
- **Detail panel sparklines render instantly** — tapping a zone in the thermal strip or comfort heatmap now shows the sparkline immediately. The chart paths are prepared in advance when data arrives, not computed on every tap
- **Tapping a zone always shows the latest data** — if you tap a zone 5 minutes after the last refresh, the detail panel now shows the current temperature and history, not stale data from the last refresh
- **No more listener buildup on long-running dashboards** — re-rendering a section now cleanly removes old interactions before adding new ones, preventing slowdowns on dashboards that stay open for hours
- **Smarter refresh targeting** — updating a section that doesn't have tappable chips (like a graph) no longer triggers unnecessary work on unrelated sections
- **Styles shared across all cards** — on modern browsers, the card's stylesheet is parsed once and shared across all instances instead of each card parsing its own copy. Older browsers work exactly as before

### Documentation

- **Section compatibility table** ([#28](https://github.com/hiall-fyi/pulse-card/issues/28) - @dragorex71) — the Climate Card Guide now has a clear table showing which sections work with any climate entity and which need Tado CE
- **Donut section requires a source** — the guide now explains that you need to specify `source: api_breakdown`, `source: homekit_saved`, or custom `segments` for the donut chart to render
- **Tado CE sections list required entities** — each Tado CE section now documents which `sensor.tado_ce_*` entities it needs

## [1.0.0] - 2026-04-24

**Pulse Climate Card — your climate dashboard in one card.**

This release introduces Pulse Climate Card alongside Pulse Card. Both cards ship in a single install and share the same Pulse DNA — clean typography, HA theme integration, and a visual editor — but each has its own personality. Pulse Card is minimal and compact. Pulse Climate Card is expressive and data-rich, with glowing power bars, animated energy flow with particles, heat shimmer, frosted glass panels, and a radial thermal compass.

### Pulse Climate Card (New)

- **Your whole climate system at a glance** — see every zone's temperature, target, humidity, HVAC status, and heating power on one card. Works with any thermostat — Tado, Ecobee, Nest, or a generic `climate.*` entity
- **14 ways to visualise your data** — pick from zones, temperature graph, radial thermal compass, energy flow animation, thermal strip, comfort heatmap, donut chart, and seven Tado CE sections. Drag them into any order you like
- **Tado CE? Zero setup** — the card scans for your Tado CE sensors and fills in mold risk, comfort levels, open window alerts, battery status, and more. You don't configure anything — it just appears
- **Tap and drag to set temperature** — turn on the interactive slider and adjust your target temperature right from the card. Tap to jump, drag to fine-tune
- **Three sparkline styles** — a subtle overlay behind the gauge, a prominent filled chart below the header, or the full pulse mode where the waveform becomes the zone's background and active zones glow
- **Energy flow with particle animation** — watch tiny dots travel along the energy flow lines from your boiler to each zone. Particle size and speed scale with heating power — busier zones get bigger, faster particles
- **Heat shimmer on high-power zones** — in the radial view, zones heating above 50% show a subtle wavy distortion on their arcs, like hot air rising
- **Frosted glass panels** — the radial center display, zone detail panels, and tooltips use a frosted glass effect. You can customise the blur and background colour — see the [Configuration Guide](CLIMATE_CARD_GUIDE.md#css-custom-properties)
- **Temperature change flash** — when a zone's temperature changes, its power bar and radial arc briefly flash brighter, so you can spot changes at a glance
- **Respects reduced motion** — if you have "reduce motion" enabled in your OS settings, all animations are disabled automatically. No config needed
- **Works on light and dark themes** — all colours, glows, and effects look right on any HA theme
- **Visual editor** — add zones, pick sections from grouped panels, and tweak settings like graph hours and outside temperature entity — all without touching YAML
- **Tap, hold, and double-tap** — every zone row and chip responds to your touch. Tap a chip to open its source entity, hold a zone to navigate somewhere, or double-tap for a custom action
- **Full configuration guide** — everything you need is in [CLIMATE_CARD_GUIDE.md](CLIMATE_CARD_GUIDE.md)

### Pulse Card

- **Build your own labels with templates** — use `{attribute_name}` placeholders in secondary info to show dynamic text from entity attributes. `{bytes}` and `{packets}` are automatically formatted as human-readable numbers. Set it once at card level and every entity inherits the same format
- **Auto-color bars by attribute** — set `attribute_color` at card level to colour bars based on an entity attribute. Map firewall `action: drop` to red and `action: accept` to green — every entity picks up its colour automatically
- **Card-level secondary info default** — set `secondary_info` once and all entities inherit it. Per-entity overrides still work when you need something different
- **Icons sit where they should** ([#24](https://github.com/hiall-fyi/pulse-card/issues/24) - @ChrisMarriott38) — icons inside and outside bars are now properly centred with the text
- **Card-level min/max now works** ([Discussion #20](https://github.com/hiall-fyi/pulse-card/discussions/20) - @Si-Hill) — setting min and max in the Bar Limits section now applies to all bars as expected. Previously only per-entity min/max worked
- **Tap feedback** — bar rows now show a ripple effect when you tap them, matching the feel of built-in HA cards
- **Full configuration guide** — moved to [PULSE_CARD_GUIDE.md](PULSE_CARD_GUIDE.md). The README is now a concise landing page for both cards

### Under the Hood

- **Faster dashboard loads** — editor code only loads when you open the editor, so the cards themselves are lighter
- **Shared foundations** — both cards share the same action handling and editor helpers, so they behave the same way everywhere

## [0.5.0] - 2026-04-19

**Slider mode, step buttons, and state-based colors**

### Added

- **Slider mode** ([#2](https://github.com/hiall-fyi/pulse-card/issues/2), [Discussion #19](https://github.com/hiall-fyi/pulse-card/discussions/19) - @ChrisMarriott38) — add `interactive: true` to any entity and the bar becomes a slider. Tap anywhere to jump to a value, or drag to fine-tune it. Works with input numbers, number helpers, lights (brightness), covers (position), fans (speed), media players (volume), and climate entities (target temperature). Min, max, and step are picked up from the entity automatically
- **Step buttons** ([Discussion #19](https://github.com/hiall-fyi/pulse-card/discussions/19) - @ChrisMarriott38) — interactive bars now have − and + buttons on each side for precise adjustments. Tap for a single step, hold to repeat. Step size follows the entity's attributes (e.g. 0.5°C for Tado TRVs) or your `interactive: { step: 0.5 }` override
- **State-based bar colors (`state_color`)** — set bar colors based on the entity's state string, independent of the numeric value. Useful for climate entities where you want "off" zones greyed out while active zones keep their severity colors
- **Custom service override** — for entity types not in the built-in list, you can specify the service call directly: `interactive: { service: "climate.set_temperature", data: { temperature: "$value" } }`

### Improved

- **Climate entity support** — bars for climate entities now correctly use `min_temp` and `max_temp` from the entity attributes for the fill range. The slider auto-detects `climate.set_temperature` and reads `target_temp_step` for the step size
- **Secondary info readability** — the secondary text inside colored bars now inherits the parent text color instead of using hardcoded white, so it's readable in both light and dark themes
- **Sparkline color** — removed a hardcoded dark fallback color that could make sparklines invisible on dark themes

### Fixed

- **Actions always use the latest entity state** — tap, hold, double-tap, and slider interactions now read the current Home Assistant state at the moment you interact, not a stale snapshot from when the card first loaded

## [0.4.0] - 2026-04-18

**Binary entities, secondary info, and custom state labels**

### Added

- **Binary/switch entity support** — Pulse Card now handles on/off entities natively. Switches, input booleans, locks, covers, and media players display as filled bars with meaningful text ("On", "Off", "Open", "Closed") instead of showing "Unavailable". Severity colors work automatically — set green for on, red for off
- **Secondary info line** — show extra context below the entity name. Use `secondary_info: { text: "input · drop" }` for static text, `secondary_info: { attribute: "chain" }` to show an entity attribute, or `secondary_info: { type: "last_changed" }` to show when the entity last changed state. Configurable in the visual editor
- **Custom state labels (`state_map`)** — map state strings to your own display text. Show "Enabled"/"Disabled" instead of "On"/"Off" for firewall rules, or "Armed"/"Disarmed" for alarms
- **Toggle action** — use `tap_action: { action: toggle }` to toggle switches directly from the card without writing a full `call-service` config
- **Responsive columns** — multi-column layouts automatically collapse to a single column on narrow screens (under 300px card width), so bars stay readable on phones
- **Severity data attribute** — each bar row now carries `data-severity-color` with the resolved severity color, so card-mod users can target specific severity states with custom CSS

## [0.3.2] - 2026-04-14

### Fixed

- **Sparkline now appears immediately after enabling** — previously you had to refresh the page after toggling sparkline on in the editor. The card now fetches history data as soon as the config changes
- **Stale data cleared on config change** — switching entities no longer leaves old sparkline or indicator data lingering in memory

### Improved

- **Numeric config values are now coerced** — animation speed, columns, and sparkline line width are guaranteed to be numbers even if your YAML has them as strings, preventing potential rendering issues

## [0.3.1] - 2026-04-09

### Fixed

- **HACS download now works correctly** ([#21](https://github.com/hiall-fyi/pulse-card/issues/21) - @ChrisMarriott38) — the v0.3.0 release was missing the built JS files as release assets, so HACS downloaded the raw source instead of the bundled card. This caused 404 errors and the card not loading. The release process is now fixed

## [0.3.0] - 2026-04-08

### Added

- **Color Picker** ([#8](https://github.com/hiall-fyi/pulse-card/issues/8), [Discussion #20](https://github.com/hiall-fyi/pulse-card/discussions/20) - @ChrisMarriott38) — pick bar colors visually instead of typing hex codes. A color swatch sits next to every color field — click it to open your browser's color picker, or keep typing values directly
- **Sparkline in the Editor** — the visual editor now has all the most common sparkline settings: on/off, hours to show, line width, points per hour, smoothing, aggregation function, refresh interval, and color. Toggle Sparkline on and the fields appear right below
- **More Settings in the Editor** — indicator inverted mode, clamp value, and invert fill are now in the visual editor. Previously these were YAML-only
- **State Data Attribute** — each bar row now carries a `data-state` attribute with the current numeric value (or `"unavailable"`), so you can target specific states with card-mod

### Improved

- **Sparkline fills to bar width** ([#21](https://github.com/hiall-fyi/pulse-card/issues/21) - @ChrisMarriott38) — the sparkline trend line now stretches to your `bar_width` setting instead of shrinking with the current value. A sensor at 10% still shows the full trend across the bar track area
- **Editor redesigned** — settings are now organized with expandable panels for Bar Limits, Indicator, and Animation. Common settings (title, layout, color, height, positions, sparkline) stay visible at the top, advanced options are tucked away until you need them
- **Fewer redundant calculations** — bar width scaling and bar state are now computed once per entity instead of multiple times per update cycle
- **New brand identity** — refreshed icon and logo with a richer, layered design. Dark mode variants included

## [0.2.1] - 2026-04-06

### Fixed

- **Sparkline no longer spills past the bar** ([#18](https://github.com/hiall-fyi/pulse-card/issues/18) - @ChrisMarriott38) — the trend line now stays inside the colored portion of the bar instead of stretching across the empty track area

## [0.2.0] - 2026-04-05

### Added

- **Sparkline Trend Line** — see recent history right behind the bar, no extra card needed. Turn it on with `sparkline: true` and customize how far back to look (`hours_to_show`), how smooth the line is (`points_per_hour`), how values are combined (`aggregate_func`: avg, min, max, median), line thickness (`line_width`), and color. Per-entity overrides let you show 6 hours for CPU but 7 days for battery — all in one card
- **Conditional Visibility** — show bars only when they meet a condition. Set `visibility: { state_above: 80 }` on an entity and it only appears when the value crosses that threshold. Combine multiple conditions (AND logic) and pair with severity colors for an "alerts only" dashboard that stays clean when everything is healthy
- **Compact Mode** — `layout: compact` tightens padding, gaps, and font sizes so you can fit more bars into less space. Works well in sections view at narrow column widths
- **Font Size Control** — `font_size` sets the base text size for name, value, and icon. Or leave it unset and inside-bar text auto-scales to fit the bar height
- **Sparkline Color Variable** — new `--pulse-sparkline-color` CSS custom property for theme-level sparkline color control

### Improved

- Visual editor redesigned with a compact 3-column layout — all settings now fit on screen without scrolling, even in Sections view. Font Size, Invert Fill, and Clamp Value are no longer YAML-only
- Icons inside bars now match the text color instead of grey — much easier to read on colored fills
- Icon size scales with text size instead of staying fixed — stays proportional whether you're using default, compact, or custom font sizes
- Inside-bar text and icons now auto-scale to the bar height — a 30px bar gets smaller text, a 60px bar gets larger text, no manual tuning needed
- Tap action errors (e.g. calling a service that doesn't exist) are now caught and logged instead of silently failing

## [0.1.8] - 2026-04-02

### Added

- **Inverted Indicator Colors** — new `indicator.inverted` option flips the trend arrow colors so "up" shows red and "down" shows green. Ideal for CPU, memory, and disk usage where rising values are bad. Works at card level or per-entity
- **CSS Custom Properties** — you can now fine-tune colors and opacity without `card-mod` hacks. Available variables: `--pulse-card-background`, `--pulse-icon-color`, `--pulse-name-color`, `--pulse-value-color`, `--pulse-indicator-color`, `--pulse-track-opacity`

### Improved

- Change indicator now shows the unit of measurement (e.g. `▲ +0.3%` instead of `▲ +0.3`) and respects the decimal precision setting
- Change indicator no longer shows nonsense values when a sensor's unit was changed in HA (e.g. bytes → GB) — the card detects the mismatch and shows neutral instead

## [0.1.7] - 2026-03-26

### Improved

- Sensor values now respect Home Assistant's display precision setting — if you've configured decimal places for a sensor in HA (or the integration provides a default), the card uses that automatically instead of showing raw floats like "10.0992555831266%". You can still override with the `decimal` config option
- The card now loads faster on your dashboard — the visual editor and its dependencies are only loaded when you actually open the editor, not on every page view
- Entities in an `error` state are now handled the same as `unavailable` and `unknown` — showing "Unavailable" instead of a broken bar

## [0.1.6] - 2026-03-23

### Added

- **Bar Width Limit** ([#12](https://github.com/hiall-fyi/pulse-card/issues/12) - @ChrisMarriott38) — new `bar_width` setting (1–100) controls how much of the bar track the fill can use. Keeps the colored bar from overlapping your value text and change indicators at high percentages. Available in the visual editor next to Target, or per-entity in YAML
- **Entity Reorder** ([#8](https://github.com/hiall-fyi/pulse-card/issues/8) - @ChrisMarriott38) — you can now move entities up and down in the visual editor using ▲/▼ buttons. No more cutting and pasting in the code editor to rearrange bars

### Improved

- Name and Color fields in the visual editor now update the preview as you type, matching the behavior of other Card Settings fields ([#8](https://github.com/hiall-fyi/pulse-card/issues/8) - @ChrisMarriott38)

## [0.1.5] - 2026-03-22

### Added

- Visual editor now shows Name and Color fields for each entity — you can set per-entity display names and colors without switching to YAML

### Improved

- Your config values are now validated before rendering — the card won't break from unexpected characters in color, height, or gap settings

## [0.1.4] - 2026-03-20

### Fixed

- Inside mode layout now matches outside mode — name, value, icon, and indicator are properly grouped left/right instead of spreading into equal columns ([#9](https://github.com/hiall-fyi/pulse-card/issues/9))

## [0.1.3] - 2026-03-20

### Added

- Visual editor now supports more settings — Decimals, Target value, Indicator on/off, Indicator position, Lookback period, Show Change Amount, and Animation speed can all be configured without YAML
- Version number now shows in the browser console (e.g. `PULSE-CARD v0.1.3`) for easier troubleshooting

### Improved

- Visual editor is now organized into three clear sections: Card Settings, Layout, and Display — no more scrolling through one long list
- Visual editor labels are simpler — "Name", "Value", "Icon" instead of "Name Position", "Value Position", etc.
- Cards with multiple entities and indicators load faster — history data is now fetched in one go instead of one call per entity
- External URLs opened via tap actions are now handled more securely
- Loading the card resource twice no longer causes an error
- If the editor's helper components fail to load, the editor still works instead of breaking
- Icons no longer show a broken placeholder when the value is empty

### Fixed

- Visual editor no longer writes `animation: { effect: "none" }` to your config when the effect is set to the default — keeps your YAML clean
- Visual editor now preserves `target.show_label` when you edit the target value — previously switching between YAML and the visual editor would lose the label setting
- Entity names with special characters now display correctly

## [0.1.2] - 2026-03-19

### Fixed

- Gap setting now works when you type a plain number like `8` — it's automatically treated as `8px` ([#2](https://github.com/hiall-fyi/pulse-card/issues/2))
- Card now takes up the full width in Sections view instead of only half

## [0.1.1] - 2026-03-19

### Added

- New `gap` setting to control the space between bars — configurable via the visual editor or YAML (e.g. `gap: 8` or `gap: 16px`) ([#2](https://github.com/hiall-fyi/pulse-card/issues/2))

### Removed

- Vertical bar direction (`direction: up`) has been removed — the feature was experimental and not well suited for a bar card. Use a dedicated charting card for vertical layouts ([#2](https://github.com/hiall-fyi/pulse-card/issues/2))

## [0.1.0] - 2026-03-18

### Added

- Horizontal bar display for any numeric sensor
- Multiple entities in a single card with per-entity overrides
- Severity-based color ranges with gradient mode
- Visual editor for card settings and entity management
- Target marker overlay (static value or entity ID)
- Change indicator (▲/▼) comparing current value to history
- Tap, hold, and double-tap actions
- Charge animation effect
- Entity row mode (for use inside entities card)
- Multi-column grid layout
- Sections view and masonry view support
- Auto-detect min/max from entity attributes
- Display entity attributes instead of state
- Configurable bar height, border radius, and animation speed
- Dark and light theme support
- Keyboard and screen reader accessibility
- HACS installation support
