var Qt="1.9.2";var Jt=Qt,Le="pulse-weather-card",er="pulse-weather-card-editor",ce="Pulse Weather Card:",tr=["overview","forecast","wind","air_quality","astro","alerts","atmosphere","meteogram"],tt={calm:"#5ac8fa",moderate:"#30d158",strong:"#ff9f0a",gale:"#ff453a"},rt=[{max:5,color:"#5ac8fa"},{max:12,color:"#30d158"},{max:18,color:"#ff9f0a"},{max:1/0,color:"#ff453a"}],at=[{max:11,tier:"calm"},{max:38,tier:"moderate"},{max:61,tier:"strong"},{max:1/0,tier:"gale"}],ot=[{max:1,n:0,name:"Calm",desc:"Smoke rises vertically"},{max:5,n:1,name:"Light Air",desc:"Smoke drifts slowly"},{max:11,n:2,name:"Light Breeze",desc:"Leaves rustle"},{max:19,n:3,name:"Gentle Breeze",desc:"Leaves and twigs move"},{max:28,n:4,name:"Moderate Breeze",desc:"Small branches move"},{max:38,n:5,name:"Fresh Breeze",desc:"Small trees sway"},{max:49,n:6,name:"Strong Breeze",desc:"Large branches move"},{max:61,n:7,name:"Near Gale",desc:"Whole trees sway"},{max:74,n:8,name:"Gale",desc:"Twigs break off"},{max:88,n:9,name:"Strong Gale",desc:"Slight structural damage"},{max:102,n:10,name:"Storm",desc:"Trees uprooted"},{max:117,n:11,name:"Violent Storm",desc:"Widespread damage"},{max:1/0,n:12,name:"Hurricane",desc:"Devastating damage"}];var Ft=[{max:20,label:"Good",color:"#30d158",desc:"Air quality is satisfactory"},{max:40,label:"Fair",color:"#5ac8fa",desc:"Acceptable for most people"},{max:60,label:"Moderate",color:"#ff9f0a",desc:"Sensitive groups may be affected"},{max:80,label:"Poor",color:"#ff453a",desc:"Health effects possible for everyone"},{max:100,label:"Very Poor",color:"#8b0000",desc:"Serious health effects"},{max:1/0,label:"Extremely Poor",color:"#4a0020",desc:"Emergency conditions"}],At=[{max:50,label:"Good",color:"#30d158",desc:"Air quality is satisfactory"},{max:100,label:"Moderate",color:"#ffd60a",desc:"Acceptable for most people"},{max:150,label:"Unhealthy for Sensitive Groups",color:"#ff9f0a",desc:"Sensitive groups may experience effects"},{max:200,label:"Unhealthy",color:"#ff453a",desc:"Everyone may experience effects"},{max:300,label:"Very Unhealthy",color:"#8b0000",desc:"Health alert for everyone"},{max:1/0,label:"Hazardous",color:"#4a0020",desc:"Emergency conditions"}];var De=80,rr=35;var Et=.6,ar=90,or=60,nr=40,Ct=8;var Nt=1800*1e3,ir=7,sr=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],lr={rain:"mdi:weather-pouring",wind:"mdi:weather-windy",snow:"mdi:weather-snowy-heavy",ice:"mdi:snowflake-alert",fog:"mdi:weather-fog",thunderstorm:"mdi:weather-lightning",heat:"mdi:thermometer-alert",cold:"mdi:snowflake-thermometer",flood:"mdi:home-flood",tornado:"mdi:weather-tornado",fire:"mdi:fire-alert",coastal:"mdi:waves",avalanche:"mdi:image-filter-hdr",unknown:"mdi:alert"};function Ve(e){return e>=4?"red":e===3?"amber":"yellow"}var cr={yellow:"#FFFF00",amber:"#FF9F0A",red:"#FF0000"};var pr=["temperature","apparent_temperature","dew_point","humidity","pressure","surface_pressure","wind_speed","wind_direction","wind_gusts","precipitation","rain","showers","snowfall","cloud_cover","cloud_cover_low","cloud_cover_mid","cloud_cover_high","uv_index","uv_index_clear_sky","visibility","cape","lifted_index","freezing_level_height","soil_temperature","soil_moisture","wind_shear_0_6_km","lapse_rate_700_500_hpa","lcl_height","stability_assessment","dew_point_comfort","visibility_category","feels_like_context","pressure_trend","european_aqi","us_aqi","pm2_5","pm10","nitrogen_dioxide","ozone","sulphur_dioxide","carbon_monoxide","carbon_dioxide","golden_hour_morning_start","golden_hour_morning_end","golden_hour_evening_start","golden_hour_evening_end","blue_hour_morning_start","blue_hour_morning_end","blue_hour_evening_start","blue_hour_evening_end","moon_phase","moonrise","moonset","daylight_duration"],dr=["active_alert","upcoming_alert","alert_count"],Rt="_weather",ur=3;var mr={"clear-night":"\u{1F319}",cloudy:"\u2601\uFE0F",exceptional:"\u{1F321}\uFE0F",fog:"\u{1F32B}\uFE0F",hail:"\u{1F328}\uFE0F",lightning:"\u26A1","lightning-rainy":"\u26C8\uFE0F",partlycloudy:"\u26C5",pouring:"\u{1F327}\uFE0F",rainy:"\u{1F327}\uFE0F",snowy:"\u2744\uFE0F","snowy-rainy":"\u{1F328}\uFE0F",sunny:"\u2600\uFE0F",windy:"\u{1F4A8}","windy-variant":"\u{1F4A8}"},J=29.53,fr=["New Moon","Waxing Crescent","First Quarter","Waxing Gibbous","Full Moon","Waning Gibbous","Last Quarter","Waning Crescent"];var hr=`
/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
 * Pulse Card Family \u2014 Shared Design Tokens
 * \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

:host {
  /* \u2500\u2500 Text \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-text-primary: var(--primary-text-color);
  --pulse-text-secondary: var(--secondary-text-color);
  --pulse-text-disabled: var(--disabled-text-color, var(--secondary-text-color));

  /* \u2500\u2500 Backgrounds \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-bg-card: var(--ha-card-background, var(--card-background-color));
  --pulse-bg-secondary: var(--secondary-background-color);
  --pulse-bg-elevated: color-mix(in srgb, var(--primary-text-color) 4%, transparent);
  --pulse-bg-hover: color-mix(in srgb, var(--primary-color, #03A9F4) 6%, transparent);
  --pulse-bg-selected: color-mix(in srgb, var(--primary-color, #03A9F4) 12%, transparent);

  /* \u2500\u2500 Borders \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-border-divider: var(--divider-color);
  --pulse-border-subtle: color-mix(in srgb, var(--primary-text-color) 4%, transparent);
  --pulse-border-medium: color-mix(in srgb, var(--primary-text-color) 10%, transparent);

  /* \u2500\u2500 Accent \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-accent: var(--primary-color, #03A9F4);

  /* \u2500\u2500 Status \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-status-green: var(--label-badge-green, #4CAF50);
  --pulse-status-red: var(--label-badge-red, #F44336);
  --pulse-status-yellow: var(--label-badge-yellow, #FF9800);
  --pulse-status-blue: var(--label-badge-blue, #2196F3);

  /* \u2500\u2500 Info / Disabled \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-info-color: var(--info-color, #5AC8FA);
  --pulse-disabled: var(--disabled-color, #bdbdbd);

  /* \u2500\u2500 Glass Panel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-glass-bg: var(--ha-card-background, var(--card-background-color, rgba(255, 255, 255, 0.75)));
  --pulse-glass-blur: 8px;
  --pulse-glass-border: transparent;

  /* \u2500\u2500 Typography Scale \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-font-title: 16px;
  --pulse-font-body: 14px;
  --pulse-font-label: 11px;
  --pulse-font-caption: 10px;
  --pulse-font-micro: 9px;

  /* \u2500\u2500 Font Weights \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-weight-hero: 100;
  --pulse-weight-thin: 200;
  --pulse-weight-light: 300;
  --pulse-weight-regular: 400;
  --pulse-weight-medium: 500;
  --pulse-weight-semibold: 600;

  /* \u2500\u2500 Extended typography scale \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-font-display: 64px;        /* Weather hero temp; future Climate display numbers */
  --pulse-font-hero: 32px;           /* Climate radial centre; secondary hero */
  --pulse-font-summary: 24px;        /* summary stat numbers (home-status, ranking) */
  --pulse-font-large: 20px;          /* large hero-adjacent numbers (zone pulse, home-status label) */
  --pulse-font-stat: 18px;           /* mid-emphasis stat values (flow temp, home-status zone actual) */
  --pulse-font-section-title: 17px;  /* Weather pw-status-label equivalent */
  --pulse-font-kicker: 12px;         /* uppercase top-of-section labels */

  /* \u2500\u2500 Letter-spacing scale \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-ls-display: -1.5px;
  --pulse-ls-hero: -1px;
  --pulse-ls-title: -0.8px;
  --pulse-ls-kicker: 0.32em;
  --pulse-ls-micro: 0.14em;

  /* \u2500\u2500 Tier colours (Apple system, promoted from Weather) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-tier-calm: #5ac8fa;
  --pulse-tier-moderate: #30d158;
  --pulse-tier-strong: #ff9f0a;
  --pulse-tier-gale: #ff453a;

  /* \u2500\u2500 Border Radius \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-radius-card: var(--ha-card-border-radius, 12px);
  --pulse-radius-cartouche: 24px;            /* outer frame on Climate hearth + Weather cartouche */
  --pulse-radius-panel: 14px;
  --pulse-radius-row: 10px;
  --pulse-radius-element: 8px;
  --pulse-radius-pill: 6px;
  --pulse-radius-small: 4px;
  --pulse-radius-tight: 3px;                 /* state tags, slim chips */
  --pulse-radius-bar: 2px;
  --pulse-radius-hairline: 1px;              /* sub-pixel cells, day arc, slot bars */
  --pulse-radius-circle: 50%;                /* dots, donut centres, circular markers */

  /* \u2500\u2500 Spacing \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-space-card-wide: 20px;     /* weather chrome \u2014 wider inset for hero/cartouche layouts */
  --pulse-space-card: 16px;          /* card-edge padding, section margins */
  --pulse-space-panel: 14px;         /* glass-panel inner pad, cartouche inset */
  --pulse-space-section: 12px;       /* between section blocks */
  --pulse-space-row: 10px;           /* between row items */
  --pulse-space-element: 8px;        /* between elements within a row */
  --pulse-space-chip: 6px;           /* chip gap, dense flex gap */
  --pulse-space-tight: 4px;          /* labels, status tags */
  --pulse-space-hairline: 2px;       /* sub-pixel cell gaps, micro padding */
  --pulse-space-pin: 1px;            /* one-pixel anchor offsets */

  /* \u2500\u2500 Animation timing \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-anim-instant: 0.05s;     /* flash, sub-frame feedback */
  --pulse-anim-fast: 0.15s;        /* hover backgrounds, ripple onset */
  --pulse-anim-base: 0.2s;         /* default colour / opacity transitions */
  --pulse-anim-medium: 0.25s;      /* transform / font-size easing */
  --pulse-anim-mode: 0.3s;         /* mode swap, max-height reveal */
  --pulse-anim-slow: 0.35s;        /* expand panels, large transitions */
  --pulse-anim-color: 0.4s;        /* slow colour cross-fade */
  --pulse-anim-reveal: 0.6s;       /* bar-width fills, sparkline grow */
  --pulse-anim-fill: 0.8s;         /* heating bar width grow */
}

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
 * Utility Classes
 * \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

/* Keyboard focus ring for every focusable element in the family. Keyed off
   [tabindex] so anything focusable is covered, whether the attribute comes from
   markup or from makeActivatable at runtime.

   No border-radius: an outline already follows the element's own radius, so
   declaring one here would reshape the element while focused. */
:host [tabindex]:focus-visible,
:host([tabindex]):focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
}

/* Card title \u2014 16px medium weight */
.pulse-title {
  font-size: var(--pulse-font-title);
  font-weight: var(--pulse-weight-medium);
  color: var(--pulse-text-primary);
}

/* Section label \u2014 uppercase, small, secondary tone.
   No opacity multiplier: --pulse-text-secondary is already the dimmed token,
   stacking 0.7 on top dropped light-theme contrast below WCAG-large threshold. */
.pulse-section-label {
  font-size: var(--pulse-font-label);
  font-weight: var(--pulse-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--pulse-text-secondary);
}

/* Glass panel \u2014 frosted overlay */
.pulse-glass {
  background: var(--pulse-glass-bg);
  backdrop-filter: blur(var(--pulse-glass-blur));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur));
  border: 1px solid var(--pulse-glass-border);
}

/* Stats row \u2014 grid layout primitive shared across the Pulse card
   family. Children are stat tiles emitted by each card's own type
   builder (e.g. pulse-weather's pt.stat). The row controls only
   layout: column count, divider, gap, margin.
   - data-cols: "3" | "4" \u2014 column count (default 4)
   - data-divided: "true" \u2014 adds a 1px hairline at the top so the row
     reads as a footer rather than a flush block. */
.pulse-stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--pulse-space-tight) var(--pulse-space-element);
  margin-top: var(--pulse-space-section);
}
.pulse-stats-row[data-cols="3"] { grid-template-columns: repeat(3, 1fr); }
.pulse-stats-row[data-divided="true"] {
  padding-top: var(--pulse-space-section);
  border-top: 1px solid var(--pulse-border-subtle);
}
`;var wr=`${""}

${hr}
/* \u2500\u2500 Design Tokens \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
:host {
  display: block;

  /* Weather-specific glass intensity */
  --pulse-glass-blur: 20px;

  /* Typography */
  --pw-hero-size: 72px;
  --pw-hero-weight: 100;
  --pw-section-label-size: 11px;


  /* Semantic colors */
  --pw-color-freeze: #5ac8fa;
  --pw-color-stable: #30d158;
  --pw-text-overlay: #d0d0d0;
  --pw-shadow-overlay: 0 1px 3px rgba(0,0,0,0.6);

  /* Transitions */
  --pw-bg-transition: var(--pulse-anim-fill);

  /* \u2500\u2500 Wabi palette (sumi / nezumi / senmai / shu) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pw-sky-top: #1d2530;
  --pw-sky-mid: #384452;
  /* The bottom stop is the lightest point of the sky and therefore the contrast
     floor for all cream text. Do not lighten without re-running
     tests/pulse-weather/styles-tokens.test.js. */
  --pw-sky-bot: #413d35;
  --pw-ink-cream: #fdf6e3;
  --pw-ink-cream-muted: rgba(229, 217, 194, 0.85);
  /* 0.72 is the lowest alpha that clears 4.5:1 against --pw-sky-bot. */
  --pw-ink-cream-dim: rgba(229, 217, 194, 0.72);
  --pw-vermilion: #a83d2a;
  --pw-wind: #5ac8fa;
  --pw-warn-amber: #ff9f0a;
  --pw-warn-red: #ff453a;
  --pw-warn-yellow: #ffd60a;
  --pw-good-green: #30d158;

  /* Card-local \u2014 Weather is the only consumer at this size; everything else
     uses the shared --pulse-font-* scale. */
  --pw-font-caption: 13px;

  /* \u2500\u2500 Spacing scale \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pw-pad-x:     24px;   /* section left/right padding            */
  --pw-pad-y:     22px;   /* section top/bottom padding            */
  --pw-gap-block: 14px;   /* between sub-blocks                    */
  --pw-gap-tight:  6px;   /* within tight clusters                 */
}

/* \u2500\u2500 Card Shell \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-card {
  overflow: hidden;
  min-width: 0;
  /* Match cartouche radius (24px). Default HA card 12px is smaller than the
     cartouche frame's 24px, leaving a corner slice of pw-card background bleed
     through in light theme. Aligning here means cartouche fills card edge-to-edge. */
  border-radius: var(--pulse-radius-cartouche);
  background: var(--pulse-bg-card);
  color: var(--pulse-text-primary);
  /* font-family inherits from the HA frame \u2014 same as pulse-climate-card. */
  container-type: inline-size;
}

/* \u2500\u2500 Cartouche frame primitive \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* Default sky gradient \u2014 applies to every section unless that section
   paints its own background (atmosphere, air-quality). Promoted from
   per-section duplication so alerts / wind no longer leak light theme
   pw-card cream backdrop in light mode. */
.pw-cartouche {
  position: relative;
  border-radius: var(--pulse-radius-cartouche);
  overflow: hidden;
  isolation: isolate;
  background: linear-gradient(180deg,
    var(--pw-sky-top) 0%,
    var(--pw-sky-mid) 45%,
    var(--pw-sky-bot) 100%);
}

.pw-cartouche::before {
  content: "";
  position: absolute;
  inset: 14px;
  border: 1px solid rgba(229, 217, 194, 0.18);
  border-radius: 18px;
  z-index: 3;
  pointer-events: none;
}

/* Section content sits above the cartouche border */
.pw-cartouche > .pw-content {
  position: relative;
  z-index: 4;
}

/* \u2500\u2500 Section Shared \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-section { position: relative; min-width: 0; }
.pw-section + .pw-section { border-top: 1px solid var(--pulse-border-subtle); }

/* \u2500\u2500 Shared Status Label \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-status-label {
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  padding: 0 var(--pulse-space-card-wide);
  transition: color var(--pulse-anim-color);
  position: relative;
  z-index: 2;
}

/* \u2500\u2500 Mode Tabs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* \u2500\u2500 Glass Panel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* \u2500\u2500 Atmosphere Layer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.pw-fx,
.pw-wind-streaks,
.pw-atmos-fx,
.pw-smog-overlay,
.pw-haze-vignette {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.pw-fx,
.pw-wind-streaks,
.pw-atmos-fx { overflow: hidden; }
.pw-fx,
.pw-wind-streaks { z-index: 1; }

/* \u2500\u2500 Hero Display \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* \u2500\u2500 Temperature Arc \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* \u2500\u2500 Bottom Cards \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* CAPE storm risk bar */

/* \u2500\u2500 Forecast \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.pw-hourly-strip {
  display: flex;
  gap: var(--pulse-space-hairline);
  overflow-x: auto;
  overflow-y: hidden;
  padding: 8px 0 12px;
  margin: 0 var(--pulse-space-card-wide);
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  cursor: grab;
}
.pw-hourly-strip::-webkit-scrollbar { display: none; }

/* \u2500\u2500 Wind Rose \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.pw-streak {
  position: absolute;
  height: 1px;
  border-radius: var(--pulse-radius-hairline);
  background: linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent);
  animation: pw-streakTravel linear infinite;
  animation-fill-mode: backwards;
}

.pw-rose-wrap {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
}

.pw-gust-sweep {
  animation: pw-gustPulse var(--gust-dur, 2s) ease-in-out infinite;
}

.pw-wind-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 3;
  pointer-events: none;
}

.pw-wind-speed {
  font-size: 28px;
  font-weight: 300;
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

.pw-wind-unit {
  font-size: 12px;
  color: var(--pw-ink-cream-dim);
  margin-top: 2px;
}

.pw-wind-beaufort {
  font-size: 17px;
  font-weight: 500;
  margin-top: 4px;
}

.pw-wind-beaufort-desc {
  font-size: 12px;
  color: var(--pw-ink-cream-dim);
}

/* \u2500\u2500 AQI Gauge \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-aqi { padding: 0 0 16px; position: relative; overflow: hidden; }

/* \u2500\u2500 Alerts \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.pw-alert-list { display: flex; flex-direction: column; gap: var(--pulse-space-element); padding: 0 var(--pulse-space-card-wide); }

.pw-alert-row {
  display: flex;
  gap: var(--pulse-space-row);
  padding: var(--pulse-space-row);
  background: var(--pulse-bg-elevated);
  border-radius: var(--pulse-radius-row);
  border-left: 3px solid;
}

/* \u2500\u2500 Atmosphere Column \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.pw-atmos-column-wrap {
  display: flex;
  align-items: stretch;
  padding: 8px var(--pulse-space-card-wide) 0;
  gap: var(--pulse-space-section);
  height: var(--pw-atmos-column-height, 200px);
  position: relative;
  z-index: 2;
}

.pw-atmos-scale {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  text-align: right;
  padding: 4px 0;
}

.pw-atmos-scale-label {
  font-size: 9px;
  /* No opacity here \u2014 the parent .pw-atmos-scale already sets 0.5. */
  color: var(--pw-ink-cream-dim);
  font-variant-numeric: tabular-nums;
}

.pw-atmos-column {
  flex: 1;
  position: relative;
  border-radius: var(--pulse-radius-row);
  overflow: hidden;
  background: linear-gradient(to top, var(--pulse-bg-elevated) 0%, transparent 100%);
  border: 1px solid var(--pulse-border-subtle);
}

/* CAPE energy fill */
.pw-atmos-cape-fill {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 0 0 9px 9px;
  transition: height var(--pulse-anim-fill) ease;
}

/* Thermal particles */
.pw-thermal-particle {
  position: absolute;
  border-radius: var(--pulse-radius-circle);
  opacity: 0;
  animation: pw-thermalRise var(--rise-dur, 4s) ease-out infinite;
}

@keyframes pw-thermalRise {
  0% { transform: translateY(0) scale(1); opacity: 0; }
  10% { opacity: var(--peak-op, 0.4); }
  80% { opacity: var(--peak-op, 0.4); transform: translateY(var(--rise-dist, -80px)) scale(0.5); }
  100% { opacity: 0; transform: translateY(var(--rise-dist, -100px)) scale(0.3); }
}

/* Freezing level marker */
.pw-atmos-freeze-marker {
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  z-index: 2;
}

.pw-atmos-freeze-line {
  flex: 1;
  height: 1px;
  background: var(--pw-color-freeze);
  opacity: 0.4;
}

.pw-atmos-freeze-label {
  font-size: 10px;
  color: var(--pw-color-freeze);
  opacity: 0.6;
  padding: 0 6px;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}

/* LCL height marker (dashed line, grey \u2014 distinct from freeze marker) */
.pw-atmos-lcl-marker {
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  z-index: 2;
}

.pw-atmos-lcl-line {
  flex: 1;
  height: 0;
  border-top: 1px dashed rgba(160,160,160,0.4);
}

.pw-atmos-lcl-label {
  font-size: 10px;
  color: var(--pw-text-overlay);
  padding: 0 6px;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
  text-shadow: var(--pw-shadow-overlay);
}

.pw-atmos-ground-label {
  position: absolute;
  bottom: 4px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 10px;
  color: var(--pw-text-overlay);
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: var(--pw-shadow-overlay);
}

/* Tap-to-expand detail panel */

.pw-atmos-detail {
  overflow: hidden;
  max-height: 0;
  transition: max-height var(--pulse-anim-mode) ease;
  margin: 0 var(--pulse-space-card-wide);
}

.pw-atmos-detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 16px;
  padding: 12px 0;
  border-top: 1px solid var(--pulse-border-subtle);
}

.pw-atmos-detail-row {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-element);
}

.pw-atmos-detail-indicator {
  width: 4px;
  height: 24px;
  border-radius: var(--pulse-radius-bar);
  flex-shrink: 0;
}

.pw-atmos-detail-label {
  font-size: 10px;
  color: var(--pw-ink-cream-dim);
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.pw-atmos-detail-value {
  font-size: 14px;
  font-weight: 300;
  font-variant-numeric: tabular-nums;
}

.pw-atmos-detail-desc {
  font-size: 9px;
  color: var(--pw-ink-cream-dim);
}

/* \u2500\u2500 Severity Dot \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* \u2500\u2500 FX Keyframes \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes pw-rainFall {
  0% { transform: translateY(-20px); opacity: 0; }
  5% { opacity: 1; }
  95% { opacity: 0.8; }
  100% { transform: translateY(300px); opacity: 0; }
}

@keyframes pw-snowFall {
  0% { transform: translateY(-10px) translateX(0) rotate(0); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 0.6; }
  100% { transform: translateY(300px) translateX(30px) rotate(360deg); opacity: 0; }
}

@keyframes pw-flash {
  0%,100% { opacity: 0; }
  4% { opacity: 0.8; }
  6% { opacity: 0; }
  8% { opacity: 0.5; }
  10% { opacity: 0; }
}

@keyframes pw-boltStrike {
  0% { opacity: 0; filter: none; }
  3% { opacity: 0; }
  4% { opacity: 1; filter: drop-shadow(0 0 12px rgba(200,220,255,0.9)) drop-shadow(0 0 4px #fff); }
  6% { opacity: 0; filter: none; }
  8% { opacity: 0.7; filter: drop-shadow(0 0 6px rgba(200,220,255,0.5)); }
  10% { opacity: 0; filter: none; }
  100% { opacity: 0; }
}

@keyframes pw-fogDrift {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

@keyframes pw-rayPulse {
  0%,100% { opacity: 0.3; }
  50% { opacity: 0.7; }
}

@keyframes pw-cloudDrift {
  0% { transform: translateX(-120%); }
  100% { transform: translateX(500px); }
}

@keyframes pw-twinkle {
  0%,100% { opacity: 0.2; }
  50% { opacity: 0.9; }
}

@keyframes pw-shimmer {
  0% { background-position: 0% 0%; opacity: 0.4; }
  50% { background-position: 0% 100%; opacity: 0.8; }
  100% { background-position: 0% 0%; opacity: 0.4; }
}

@keyframes pw-rippleWave {
  0%, 100% { transform: scaleY(1) translateY(0); }
  50% { transform: scaleY(1.1) translateY(-3px); }
}

@keyframes pw-streakTravel {
  0% { translate: var(--sx) var(--sy); opacity: 0; }
  10% { opacity: var(--peak, 0.4); }
  90% { opacity: var(--peak, 0.4); }
  100% { translate: var(--ex) var(--ey); opacity: 0; }
}

@keyframes pw-arrowSway {
  0%   { transform: rotate(var(--sway-back)); }
  35%  { transform: rotate(var(--sway-fwd)); }
  65%  { transform: rotate(var(--sway-fwd)); }
  100% { transform: rotate(var(--sway-back)); }
}

@keyframes pw-roseShake {
  0%, 100% { translate: 0px 0px; }
  20%  { translate: var(--dx) var(--dy); }
  40%  { translate: calc(-0.6 * var(--dx)) calc(-0.6 * var(--dy)); }
  60%  { translate: calc(0.8 * var(--dx)) calc(0.8 * var(--dy)); }
  80%  { translate: calc(-0.3 * var(--dx)) calc(-0.3 * var(--dy)); }
}

@keyframes pw-gustPulse {
  0%   { opacity: 0.04; transform: scale(0.85); }
  40%  { opacity: var(--gust-peak, 0.2); transform: scale(1.05); }
  70%  { opacity: var(--gust-peak, 0.2); transform: scale(1.0); }
  100% { opacity: 0.04; transform: scale(0.85); }
}

@keyframes pw-breathe {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

@keyframes pw-dotPulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.3); }
}

@keyframes pw-sweepRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes pw-blipRing {
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(2.5); opacity: 0; }
}

@keyframes pw-blipPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.4); }
}

@keyframes pw-sunGlow {
  0%, 100% { filter: drop-shadow(0 0 8px rgba(255,200,50,0.4)); }
  50% { filter: drop-shadow(0 0 16px rgba(255,200,50,0.7)); }
}

@keyframes pw-moonGlow {
  0%, 100% { filter: drop-shadow(0 0 6px rgba(200,210,255,0.3)); }
  50% { filter: drop-shadow(0 0 12px rgba(200,210,255,0.5)); }
}

@keyframes pw-gaugeGlow {
  0%, 100% { filter: drop-shadow(0 0 4px var(--glow-color, rgba(255,255,255,0.2))); }
  50% { filter: drop-shadow(0 0 10px var(--glow-color, rgba(255,255,255,0.4))); }
}

/* \u2500\u2500 Air Haze FX \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.pw-dust-particle {
  position: absolute;
  border-radius: var(--pulse-radius-circle);
  background: rgba(180,160,120,0.3);
  animation: pw-dustFloat 8s ease-in-out infinite;
}

@keyframes pw-dustFloat {
  0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
  50% { transform: translateY(-20px) translateX(10px); opacity: 0.5; }
}

.pw-haze-blob {
  position: absolute;
  border-radius: var(--pulse-radius-circle);
  background: radial-gradient(ellipse, rgba(160,140,100,0.08), transparent 70%);
  animation: pw-hazeFloat 12s ease-in-out infinite;
}

@keyframes pw-hazeFloat {
  0%, 100% { transform: translateX(0); opacity: 0.3; }
  50% { transform: translateX(30px); opacity: 0.6; }
}

/* \u2500\u2500 Radar (CRT green phosphor style) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-radar {
  position: relative;
  width: 140px;
  height: 140px;
  border-radius: var(--pulse-radius-circle);
  overflow: hidden;
  background:
    repeating-radial-gradient(
      transparent, transparent 15%,
      var(--pw-radar-color, rgba(80,255,0,0.15)) 15.5%, transparent 16%
    ),
    linear-gradient(
      transparent 49.5%, var(--pw-radar-line, rgba(80,255,0,0.08)) 49.5%,
      var(--pw-radar-line, rgba(80,255,0,0.08)) 50.5%, transparent 50.5%
    ),
    linear-gradient(
      to right, transparent 49.5%, var(--pw-radar-line, rgba(80,255,0,0.08)) 49.5%,
      var(--pw-radar-line, rgba(80,255,0,0.08)) 50.5%, transparent 50.5%
    ),
    radial-gradient(var(--pw-radar-bg-inner, #001a00), var(--pw-radar-bg-outer, #000800));
}

.pw-radar::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: var(--pulse-radius-circle);
  background-image: conic-gradient(transparent 85%, var(--pw-radar-sweep, rgba(80,255,0,0.35)));
  animation: pw-sweepRotate var(--pw-radar-dur, 2.5s) linear infinite;
  will-change: transform;
}

.pw-radar::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: var(--pulse-radius-circle);
  background:
    radial-gradient(ellipse at 35% 25%, rgba(255,255,255,0.08) 0%, transparent 50%),
    radial-gradient(circle, transparent 55%, rgba(0,0,0,0.6) 100%);
  z-index: 3;
  pointer-events: none;
}

@keyframes pw-radarBlink {
  2%, 20% { background-color: var(--pw-blip-color, rgba(80,255,0,0.85)); box-shadow: 0 0 4px var(--pw-blip-color, rgba(80,255,0,0.6)); }
  90% { background-color: transparent; box-shadow: none; }
}

.pw-radar-blip {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: var(--pulse-radius-circle);
  transform: translate(-50%, -50%);
  z-index: 2;
  animation: pw-radarBlink var(--pw-radar-dur, 2.5s) ease-out infinite;
}

/* \u2500\u2500 Alert rows \u2014 Pulse DNA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-alert-list { display: flex; flex-direction: column; padding: 0 var(--pulse-space-card-wide); }

.pw-alert-row {
  display: flex;
  align-items: flex-start;
  gap: var(--pulse-space-row);
  padding: 10px 0;
  border-bottom: 1px solid var(--pulse-border-subtle);
}
.pw-alert-row:last-child { border-bottom: none; }

/* \u2500\u2500 Day Progress Arc \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-day-arc { display: flex; align-items: center; gap: var(--pulse-space-element); padding: 4px var(--pulse-space-card-wide) 8px; position: relative; z-index: 2; }
.pw-day-arc-label { font-size: 10px; color: var(--pw-ink-cream-dim); font-variant-numeric: tabular-nums; }
.pw-day-arc-bar { flex: 1; height: 2px; border-radius: var(--pulse-radius-hairline); background: var(--pulse-bg-elevated); position: relative; }
.pw-day-arc-fill { height: 100%; border-radius: var(--pulse-radius-hairline); background: linear-gradient(to right, #ff9f0a, #ffd60a); }
.pw-day-arc-marker { position: absolute; top: -3px; width: 8px; height: 8px; background: #ffd60a; border-radius: var(--pulse-radius-circle); border: 1px solid rgba(0,0,0,0.2); transform: translateX(-50%); box-shadow: 0 0 6px rgba(255,214,10,0.4); }

/* Backstop for animation declared in markup. weather-fx.js and wind.js set
   animation as an inline style, which outranks a plain declaration \u2014 hence
   !important. The primary gate skips generating FX entirely, in
   pulse-weather-card.js _postRender. */
@media (prefers-reduced-motion: reduce) {
  :host,
  :host *,
  :host *::before,
  :host *::after {
    animation: none !important;
    transition: none !important;
  }
}

/* \u2500\u2500 Tension Overlays \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-tension-vignette {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.pw-tension-wash {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.pw-tension-wash.breathing {
  animation: pw-breathe var(--breathe-dur, 4s) ease-in-out infinite;
}

@keyframes pw-vignettePulse {
  0%, 100% { opacity: var(--vignette-min, 0.5); }
  50% { opacity: var(--vignette-max, 1); }
}

/* \u2500\u2500 Meteogram \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-meteogram { padding: 0 0 16px; position: relative; overflow: hidden; }
.pw-meteogram-chart { display: block; width: 100%; height: auto; margin: 8px 0 0; position: relative; z-index: 2; }
/* Cloud strip fills the entire section so the band reads as edge-to-edge
   atmosphere rather than a strip floating inside the SVG. */
.pw-meteogram-cloud-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}
.pw-meteogram-cloud-slot {
  position: absolute;
  top: 0;
  bottom: 0;
  background: rgb(180, 190, 200);
}

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
 * Type-system primitives (single source of truth)
 * \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
 * Every section composes its DOM from t.* builders in type-system.js,
 * which emit one of these classes. Per-section CSS blocks below are
 * layout-only (padding, grid, gradient, brand-mark corner offset) \u2014
 * they should never restate font-size / font-weight
 * / text-transform. To add a new role, add it here AND in
 * type-system.js together.
 */

/* Hero block \u2014 wraps heroTier + display + narrative. Sections that
   compose their hero via t.heroBlock get the centred stacked layout
   for free; sections that need a different rhythm compose the
   primitives manually. */
.pw-hero-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--pw-gap-tight);
}
.pw-hero-block .pw-t-narrative { margin-top: 0; }

/* Top-marg wrapper \u2014 reserves the right gutter for the brand mark. */
.pw-t-marg { padding-right: 36px; }
/* Narrative directly under a kicker sits a tight gap below. */
.pw-t-marg .pw-t-kicker + .pw-t-narrative { margin-top: var(--pw-gap-tight); }

/* Section anchor: UPPERCASE 0.32em kicker. */
.pw-t-kicker {
  font-weight: 600;
  font-size: var(--pulse-font-kicker);
  letter-spacing: var(--pulse-ls-kicker);
  text-transform: uppercase;
  opacity: 0.6;
  line-height: 1;
}
.pw-t-kicker::after { content: " \xB7"; opacity: 0.5; }

/* Hero numbers \u2014 display size, tabular numerals. */
.pw-t-display {
  font-weight: 600;
  font-size: var(--pulse-font-display);
  letter-spacing: var(--pulse-ls-display);
  line-height: 1;
  font-variant-numeric: tabular-nums;
  color: var(--pw-ink-cream);
  text-shadow: 0 6px 36px rgba(0, 0, 0, 0.5);
  text-align: center;
}
.pw-t-display-suf {
  font-size: 0.48em;
  vertical-align: super;
  margin-left: -3px;
  text-shadow: none;
}

/* Hero tier \u2014 Atmosphere uses the larger title flavour, AQI the
   smaller body-sm flavour. Title Case \u2014 no text-transform. */
.pw-t-hero-tier {
  font-weight: 600;
  text-align: center;
}
.pw-t-hero-tier-atmos {
  font-size: var(--pulse-font-hero);
  letter-spacing: var(--pulse-ls-title);
  line-height: 1;
}
.pw-t-hero-tier-aqi {
  font-size: var(--pulse-font-body);
  letter-spacing: 0.04em;
  margin-top: 3px;
}

/* Narrative \u2014 Sentence case body. Centred caption that fills the
   section width; copy is short enough that wrapping happens only on
   narrow phones. Sections that need a different rhythm override. */
.pw-t-narrative {
  font-weight: 400;
  font-size: var(--pulse-font-section-title);
  line-height: 1.45;
  color: var(--pw-ink-cream-muted);
  text-align: center;
  margin-top: var(--pw-gap-tight);
}

/* Italic gloss \u2014 lowercase italic body-sm. */
.pw-t-gloss {
  font-style: italic;
  font-weight: 600;
  font-size: var(--pulse-font-body);
  letter-spacing: 0.05em;
  text-transform: lowercase;
  color: var(--pw-ink-cream-dim);
  text-align: center;
}

/* Italic meta caption \u2014 sentence-case italic micro. */
.pw-t-meta {
  font-style: italic;
  font-weight: 600;
  font-size: var(--pulse-font-label);
  letter-spacing: 0.04em;
  text-align: center;
  color: var(--pw-ink-cream-dim);
}

/* Stat tile primitive (value + label). */
.pw-t-stat { text-align: center; padding: 6px 4px; }
.pw-t-stat-v {
  font-weight: 600;
  font-size: var(--pw-font-caption);
  line-height: 1;
  font-variant-numeric: tabular-nums;
  color: var(--pw-ink-cream);
}
.pw-t-stat-l {
  font-weight: 600;
  font-size: var(--pulse-font-label);
  letter-spacing: var(--pulse-ls-micro);
  text-transform: lowercase;
  opacity: 0.55;
  margin-top: 5px;
}
/* Data tokens (chemical formulae, source acronyms) render as-given. */
.pw-t-data,
.pw-t-stat-l.pw-t-data {
  text-transform: none;
}

/* Chart caption \u2014 header above a chart. Lowercase 0.14em micro. */
.pw-t-chart-caption {
  text-align: center;
  font-weight: 600;
  font-size: var(--pulse-font-label);
  letter-spacing: var(--pulse-ls-micro);
  text-transform: lowercase;
  opacity: 0.5;
  margin-top: var(--pw-gap-block);
  margin-bottom: 4px;
}

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
 * Pro toggle scaffolding
 * \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
 * Brand-mark corner becomes a <button>. data-pro on the section root
 * swaps default \u2194 pro view. Shared filled-disc visual lives here so
 * every section gets the same toggle visual without redeclaring it.
 *
 * Phase A.1 lands the scaffolding only; per-section pro views land
 * in Phase B as the shells migrate.
 */

button.pw-brand-mark-corner {
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  border-radius: var(--pulse-radius-circle);
  transition: transform var(--pulse-anim-fast) ease;
}
button.pw-brand-mark-corner:hover {
  transform: scale(1.08);
}
button.pw-brand-mark-corner:focus-visible {
  outline: 2px solid var(--pulse-accent, var(--pw-vermilion));
  outline-offset: 3px;
}
/* Decorative brand mark (sections without a click action \u2014 Forecast,
   Atmosphere) sits at lower opacity so users don't try to tap it.
   Interactive marks live at full opacity, gain hover scale + focus
   ring above. */
div.pw-brand-mark-corner {
  opacity: 0.55;
}

/* Pro state: brand-mark circle fills as a solid \u6731 disc + dot dims. */
.pw-section[data-pro="true"] .pw-brand-mark-corner svg .mc {
  fill: var(--pw-vermilion);
  stroke-width: 0;
  opacity: 1;
}
.pw-section[data-pro="true"] .pw-brand-mark-corner svg .md {
  opacity: 0.7;
}

/* Default-vs-pro view swap (in-place fade replace). Sections that
   only have a default view today work fine \u2014 the rule has no effect
   without a sibling .pw-view-pro.
   The view wrapper inherits the same flex-column layout the content
   slot uses, so children inside a view keep their gap rhythm. */
.pw-view {
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  transition: opacity var(--pulse-anim-medium) ease;
}
.pw-section[data-pro="false"] .pw-view-pro,
.pw-section[data-pro="true"]  .pw-view-default {
  display: none;
}

/* \u2500\u2500 Overview \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* Sky gradient inherited from .pw-cartouche default. */
.pw-overview-v2 .pw-content {
  padding: var(--pw-pad-y) var(--pw-pad-x);
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  color: var(--pw-ink-cream-muted);
  font-family: inherit;
}
/* Location stamp \u2014 same anatomy as kicker but tighter tracking and
   smaller-cap aesthetic; rendered in Overview only via plain markup,
   not via t.kicker (which would add the trailing " \xB7"). */
.pw-overview-v2 .pw-loc-stamp {
  font-weight: 600;
  font-size: var(--pulse-font-kicker);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  opacity: 0.55;
  text-align: center;
}
.pw-overview-v2 .pw-hero-block {
  text-align: center;
  margin: 0;
}
/* Overview stats use vertical dividers between columns instead of a
   top hairline \u2014 gives a calmer visual rhythm under the busy hero
   block. */
.pw-overview-v2 .pulse-stats-row .pw-t-stat {
  padding: 7px 4px;
  border-right: 1px solid rgba(229, 217, 194, 0.1);
}
.pw-overview-v2 .pulse-stats-row .pw-t-stat:last-child {
  border-right: none;
}
.pw-overview-v2 .pw-brand-mark-corner {
  position: absolute;
  top: 18px;
  right: var(--pulse-space-card-wide);
  z-index: 5;
}
/* Pro view: 7-day temperature spark sits between the day arc and the
   stats grid. Caption above, sparkline below \u2014 same anatomy as a
   chart-caption + chart pair anywhere else in the family. */
.pw-overview-v2 .pw-overview-spark-block {
  margin: 0;
}
.pw-overview-v2 .pw-overview-spark {
  height: 38px;
}
.pw-overview-v2 .pw-overview-storm {
  height: 24px;
}
.pw-overview-v2 .pw-overview-spark svg,
.pw-overview-v2 .pw-overview-storm svg {
  width: 100%;
  height: 100%;
  display: block;
}

/* \u2500\u2500 Meteogram \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* Sky gradient inherited from .pw-cartouche default. */
.pw-meteogram-v2 .pw-content {
  padding: var(--pw-pad-y) var(--pw-pad-x);
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  color: var(--pw-ink-cream-muted);
  font-family: inherit;
}
.pw-meteogram-v2 .pw-meteogram-chart {
  position: relative;
  z-index: 2;
}
.pw-meteogram-v2 .pw-brand-mark-corner {
  position: absolute;
  top: 18px;
  right: var(--pulse-space-card-wide);
  z-index: 5;
}

/* \u2500\u2500 Forecast \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* Sky gradient inherited from .pw-cartouche default. */
.pw-forecast-v2 .pw-content {
  padding: var(--pw-pad-y) var(--pw-pad-x);
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  color: var(--pw-ink-cream-muted);
  font-family: inherit;
}
.pw-forecast-v2 .pw-fc-list {
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-tight);
  margin-top: 0;
}
.pw-forecast-v2 .pw-fc-row {
  display: grid;
  grid-template-columns: 60px 24px 36px 1fr 60px;
  align-items: center;
  gap: var(--pulse-space-element);
  padding: 5px 0;
  font-size: var(--pw-font-caption);
}
.pw-forecast-v2 .pw-fc-row.is-today .pw-fc-day {
  color: var(--pw-ink-cream);
  font-weight: 600;
}
.pw-forecast-v2 .pw-fc-day {
  color: var(--pw-ink-cream-dim);
  font-weight: 600;
}
.pw-forecast-v2 .pw-fc-icon { text-align: center; font-size: 16px; }
.pw-forecast-v2 .pw-fc-pop {
  text-align: right;
  color: var(--pw-vermilion);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  font-size: var(--pulse-font-label);
}
.pw-forecast-v2 .pw-fc-pop:empty { visibility: hidden; }
.pw-forecast-v2 .pw-fc-bar {
  position: relative;
  height: 5px;
  background: rgba(229, 217, 194, 0.08);
  border-radius: 2.5px;
}
.pw-forecast-v2 .pw-fc-bar-fill {
  position: absolute;
  top: 0;
  bottom: 0;
  /* Cool-to-warm temperature range gradient. The two cool stops are this
     bar's only consumers, so they stay raw hex rather than card tokens.
     #827a6a coincides with --pw-sky-bot's value but is a different concept
     (range-bar cool end, not sky), so binding to that token would couple the
     two and let a sky-colour change bleed into the forecast bar. */
  background: linear-gradient(90deg, #5e6776 0%, #827a6a 50%, var(--pw-vermilion) 100%);
  border-radius: 2.5px;
}
.pw-forecast-v2 .pw-fc-now {
  position: absolute;
  top: -3px;
  width: 6px;
  height: 11px;
  background: var(--pw-ink-cream);
  border-radius: var(--pulse-radius-bar);
  transform: translateX(-50%);
  box-shadow: 0 0 4px rgba(253, 246, 227, 0.6);
}
.pw-forecast-v2 .pw-fc-range {
  display: flex;
  justify-content: space-between;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.2px;
  gap: var(--pulse-space-chip);
  font-weight: 600;
}
.pw-forecast-v2 .pw-fc-lo { color: var(--pw-ink-cream-dim); }
.pw-forecast-v2 .pw-fc-hi {
  color: var(--pw-ink-cream);
  font-weight: 600;
}
.pw-forecast-v2 .pw-brand-mark-corner {
  position: absolute;
  top: 18px;
  right: var(--pulse-space-card-wide);
  z-index: 5;
}
/* \u2500\u2500 Astro \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* Sky gradient inherited from .pw-cartouche default. */
/* (Night override below paints a deeper midnight palette.) */
/* After sunset / before sunrise the section paints a deeper midnight
   palette so the moon arc reads against night colour, not day. */
.pw-astro-v2.is-night {
  background: linear-gradient(180deg, #0a0e1f 0%, #131a35 55%, #1f2548 100%);
}
/* Sunrise/sunset labels are still informative at night ("here's when
   the sun will be back"), but they shouldn't dominate. Drop their
   contrast a touch. */
.pw-astro-v2.is-night .pw-t-kicker { opacity: 0.5; }
.pw-astro-v2 .pw-content {
  padding: var(--pw-pad-y) var(--pw-pad-x);
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  color: var(--pw-ink-cream-muted);
  font-family: inherit;
}
/* \u2500\u2500 Hero (Daylight / Night + duration) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-astro-v2 .pw-astro-hero {
  display: flex;
  align-items: baseline;
  gap: var(--pulse-space-panel);
  flex-wrap: wrap;
}
.pw-astro-v2 .pw-astro-hero-tier {
  font-size: var(--pulse-font-hero);
  font-weight: 500;
  letter-spacing: var(--pulse-ls-title);
  line-height: 1;
  color: var(--pw-warn-amber);
  text-transform: capitalize;
}
.pw-astro-v2.is-night .pw-astro-hero-tier { color: var(--pw-wind); }
.pw-astro-v2 .pw-astro-hero-num {
  font-size: 28px;
  font-weight: 300;
  letter-spacing: -0.5px;
  line-height: 1;
  font-variant-numeric: tabular-nums;
  color: var(--pw-ink-cream);
}

/* \u2500\u2500 Moon hero row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-astro-v2 .pw-astro-moon-hero {
  display: flex;
  align-items: center;
  gap: var(--pulse-space-section);
  padding: var(--pw-gap-tight) 0;
}
.pw-astro-v2 .pw-astro-moon-glyph {
  flex-shrink: 0;
  filter: drop-shadow(0 0 6px rgba(232, 224, 208, 0.25));
}
.pw-astro-v2 .pw-astro-moon-text {
  display: flex;
  flex-direction: column;
  gap: var(--pulse-space-hairline);
}
.pw-astro-v2 .pw-astro-moon-name {
  font-size: var(--pulse-font-body);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--pw-ink-cream-muted);
}
.pw-astro-v2 .pw-astro-moon-meta {
  font-size: var(--pulse-font-label);
  color: var(--pw-ink-cream-dim);
  letter-spacing: var(--pulse-ls-micro);
  text-transform: lowercase;
}
.pw-astro-v2 .pw-astro-moon-illum {
  font-variant-numeric: tabular-nums;
  font-weight: 600;
  color: var(--pw-ink-cream-muted);
}

/* \u2500\u2500 24h ribbon \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-astro-v2 .pw-astro-rb {
  position: relative;
  height: 84px;
  border-radius: var(--pulse-radius-row);
  overflow: visible;
  margin-top: var(--pw-gap-tight);
}
.pw-astro-v2 .pw-astro-rb-track {
  position: absolute;
  inset: 22px 0 24px 0;
  border-radius: var(--pulse-radius-element);
  box-shadow: inset 0 0 0 1px rgba(229, 217, 194, 0.1);
}
.pw-astro-v2 .pw-astro-rb-now {
  position: absolute;
  top: 14px;
  bottom: 16px;
  width: 2px;
  margin-left: -1px;
  background: var(--pw-ink-cream);
  box-shadow: 0 0 8px rgba(253, 246, 227, 0.7);
  z-index: 3;
}
/* Axis labels are absolutely positioned at their actual hour
   percentages (0 / 25 / 50 / 75 / 100) so the visual position of
   each tick matches the underlying timeline. A grid-based layout
   would centre intermediate labels inside their grid cells (30%
   / 50% / 70%) and create a 4\u20135% drift between label position and
   actual time \u2014 making NOW-cursor look misaligned even when its
   percentage is correct. */
.pw-astro-v2 .pw-astro-rb-axis {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1.2em;
  font-size: var(--pulse-font-label);
  color: var(--pw-ink-cream-dim);
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.08em;
}
.pw-astro-v2 .pw-astro-rb-axis span {
  position: absolute;
  bottom: 0;
  transform: translateX(-50%);
}
.pw-astro-v2 .pw-astro-rb-axis span:nth-child(1) { left: 0; transform: translateX(0); }
.pw-astro-v2 .pw-astro-rb-axis span:nth-child(2) { left: 25%; }
.pw-astro-v2 .pw-astro-rb-axis span:nth-child(3) { left: 50%; }
.pw-astro-v2 .pw-astro-rb-axis span:nth-child(4) { left: 75%; }
.pw-astro-v2 .pw-astro-rb-axis span:nth-child(5) { left: 100%; transform: translateX(-100%); }

/* The second stats row sits flush under the first \u2014 no divider, no
   extra margin \u2014 so they read as one block. */
.pw-astro-v2 .pulse-stats-row + .pulse-stats-row {
  margin-top: var(--pw-gap-tight);
}
.pw-astro-v2 .pw-brand-mark-corner {
  position: absolute;
  top: 18px;
  right: var(--pulse-space-card-wide);
  z-index: 5;
}

/* \u2500\u2500 Atmosphere \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-atmosphere-v2 {
  background:
    radial-gradient(ellipse at 50% 50%, rgba(168, 61, 42, 0.14) 0%, transparent 70%),
    linear-gradient(180deg, #0a0a1a 0%, #1a1a2a 50%, #2a2a3a 100%);
}
.pw-atmosphere-v2 .pw-content {
  padding: var(--pw-pad-y) var(--pw-pad-x);
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  color: var(--pw-ink-cream-muted);
  font-family: inherit;
}
/* Vertical column visualisation \u2014 atmospheric profile up to 5km
   (auto-scales when freeze level or LCL exceed 4km). The CAPE fill
   grows from the surface up; the freeze level and LCL markers are
   absolutely-positioned tags + lines at their altitude bottom-%. */
.pw-atmosphere-v2 .pw-atmos-column-wrap {
  display: flex;
  gap: var(--pulse-space-panel);
  align-items: stretch;
  height: 200px;
  margin-top: var(--pw-gap-tight);
  padding: 0 4px;
}
.pw-atmosphere-v2 .pw-atmos-scale {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 600;
  font-size: var(--pulse-font-label);
  letter-spacing: var(--pulse-ls-micro);
  opacity: 0.5;
  font-variant-numeric: tabular-nums;
}
.pw-atmosphere-v2 .pw-atmos-column {
  flex: 1;
  position: relative;
  background: rgba(229, 217, 194, 0.04);
  border-radius: var(--pulse-radius-pill);
  border: 1px solid rgba(229, 217, 194, 0.1);
  overflow: hidden;
}
.pw-atmosphere-v2 .pw-atmos-cape-fill {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  border-top: 1px solid var(--pw-vermilion);
}
.pw-atmosphere-v2 .pw-atmos-freeze-marker,
.pw-atmosphere-v2 .pw-atmos-lcl-marker {
  position: absolute;
  left: 0; right: 0;
  display: flex;
  align-items: center;
  gap: var(--pulse-space-chip);
  padding-left: 6px;
}
.pw-atmosphere-v2 .pw-atmos-freeze-line {
  flex: 1;
  height: 1px;
  background: rgba(90, 200, 250, 0.5);
}
.pw-atmosphere-v2 .pw-atmos-freeze-label {
  font-weight: 600;
  font-size: var(--pulse-font-label);
  color: var(--pw-wind);
  background: var(--pw-sky-top);
  padding: 1px 5px;
  border-radius: var(--pulse-radius-tight);
}
.pw-atmosphere-v2 .pw-atmos-lcl-line {
  flex: 1;
  height: 0;
  border-top: 1px dashed rgba(208, 208, 208, 0.45);
}
.pw-atmosphere-v2 .pw-atmos-lcl-label {
  font-weight: 600;
  font-size: var(--pulse-font-label);
  color: rgba(208, 208, 208, 0.85);
  background: var(--pw-sky-top);
  padding: 1px 5px;
  border-radius: var(--pulse-radius-tight);
}
.pw-atmosphere-v2 .pw-atmos-ground-label {
  position: absolute;
  bottom: 4px;
  left: 0;
  right: 0;
  text-align: center;
  font-weight: 600;
  font-size: var(--pulse-font-label);
  letter-spacing: var(--pulse-ls-micro);
  text-transform: lowercase;
  opacity: 0.45;
}
.pw-atmosphere-v2 .pw-brand-mark-corner {
  position: absolute;
  top: 18px;
  right: var(--pulse-space-card-wide);
  z-index: 5;
}

/* \u2500\u2500 Wind (cartouche wrap only \u2014 rose preserved) \u2500 */
.pw-wind-v2 .pw-content {
  padding: var(--pw-pad-y) var(--pw-pad-x);
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  color: var(--pw-ink-cream-muted);
  font-family: inherit;
  position: relative;
}
.pw-wind-v2 .pw-brand-mark-corner {
  position: absolute;
  top: 18px;
  right: var(--pulse-space-card-wide);
  z-index: 5;
}
/* \u2500\u2500 Air quality \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-air-quality-v2 {
  background:
    radial-gradient(ellipse at 50% 50%, rgba(255, 214, 10, 0.06) 0%, transparent 70%),
    linear-gradient(180deg, #2a2a1a 0%, #1a1a0a 50%, #0a0a0a 100%);
}
.pw-air-quality-v2 .pw-content {
  padding: var(--pw-pad-y) var(--pw-pad-x);
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  color: var(--pw-ink-cream-muted);
  font-family: inherit;
}
.pw-air-quality-v2 .pw-aq-band {
  position: relative;
  height: 8px;
  background: linear-gradient(90deg,
    var(--pw-good-green) 0%,
    var(--pw-warn-yellow) 25%,
    var(--pw-warn-amber) 50%,
    var(--pw-warn-red) 75%,
    #8b0000 100%);
  border-radius: var(--pulse-radius-small);
}
.pw-air-quality-v2 .pw-aq-marker {
  position: absolute;
  top: -3px;
  width: 3px;
  height: 14px;
  background: var(--pw-ink-cream);
  transform: translateX(-50%);
  box-shadow: 0 0 4px rgba(253, 246, 227, 0.6);
}
.pw-air-quality-v2 .pw-aq-band-labels {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: var(--pulse-font-label);
  letter-spacing: 0.08em;
  text-transform: lowercase;
  opacity: 0.6;
}
/* Pollutant tiles use the larger body size \u2014 the value here is a
   hero stat, not a chip. The grid layout itself comes from the
   shared .pulse-stats-row primitive. */
.pw-air-quality-v2 .pulse-stats-row .pw-t-stat-v {
  font-size: var(--pulse-font-section-title);
}
.pw-air-quality-v2 .pw-brand-mark-corner {
  position: absolute;
  top: 18px;
  right: var(--pulse-space-card-wide);
  z-index: 5;
}

/* \u2500\u2500 Alerts (airport ticker rows) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-alerts-v2 .pw-content {
  padding: var(--pw-pad-y) var(--pw-pad-x);
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-block);
  color: var(--pw-ink-cream-muted);
  font-family: inherit;
  position: relative;
}
.pw-alerts-v2 .pw-alert-list {
  display: flex;
  flex-direction: column;
  gap: var(--pw-gap-tight);
  margin-top: 4px;
}
.pw-alerts-v2 .pw-alert-ticker {
  background: #000;
  border: 1px solid;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: var(--pulse-space-row);
  font-family: 'SF Mono', 'JetBrains Mono', Menlo, Consolas, monospace;
  box-shadow: inset 0 0 12px;
}
.pw-alerts-v2 .pw-alert-tri {
  font-size: var(--pulse-font-body);
  animation: pw-alertBlink 1s step-end infinite;
}
.pw-alerts-v2 .pw-alert-yellow .pw-alert-tri { color: var(--pw-warn-yellow); }
.pw-alerts-v2 .pw-alert-amber .pw-alert-tri { color: var(--pw-warn-amber); }
.pw-alerts-v2 .pw-alert-red .pw-alert-tri { color: var(--pw-warn-red); }
.pw-alerts-v2 .pw-alert-text {
  font-weight: 700;
  font-size: var(--pw-font-caption);
  letter-spacing: 0.08em;
  line-height: 1.4;
}
.pw-alerts-v2 .pw-alert-yellow .pw-alert-text {
  color: var(--pw-warn-yellow);
  text-shadow: 0 0 6px rgba(255, 214, 10, 0.5);
}
.pw-alerts-v2 .pw-alert-amber .pw-alert-text {
  color: var(--pw-warn-amber);
  text-shadow: 0 0 6px rgba(255, 159, 10, 0.5);
}
.pw-alerts-v2 .pw-alert-red .pw-alert-text {
  color: var(--pw-warn-red);
  text-shadow: 0 0 6px rgba(255, 69, 58, 0.5);
}
.pw-alerts-v2 .pw-alert-timestamp {
  text-align: right;
  margin-top: 4px;
  font-family: 'SF Mono', 'JetBrains Mono', Menlo, Consolas, monospace;
  font-weight: 600;
  font-size: var(--pulse-font-label);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  /* Secondary line: dim the tone token rather than baking a per-tier alpha
     into a hardcoded rgba, so the colour stays in sync with the family token. */
  opacity: 0.65;
}
.pw-alerts-v2 .pw-alert-timestamp.pw-alert-yellow { color: var(--pw-warn-yellow); }
.pw-alerts-v2 .pw-alert-timestamp.pw-alert-amber { color: var(--pw-warn-amber); }
.pw-alerts-v2 .pw-alert-timestamp.pw-alert-red { color: var(--pw-warn-red); }
.pw-alerts-v2 .pw-all-clear-v2 {
  text-align: center;
  font-weight: 600;
  font-size: var(--pulse-font-body);
  color: var(--pw-ink-cream-dim);
  font-style: italic;
  letter-spacing: 0.04em;
  margin-top: 4px;
}
.pw-alerts-v2 .pw-all-clear-v2 strong {
  color: var(--pw-good-green);
  font-style: normal;
  font-weight: 600;
  display: block;
  font-size: var(--pulse-font-section-title);
  margin-bottom: 2px;
}
.pw-alerts-v2 .pw-brand-mark-corner {
  position: absolute;
  top: 18px;
  right: var(--pulse-space-card-wide);
  z-index: 5;
}
/* Pro view: per-alert detail card. Each card stacks headline +
   meta line + description + locations vertically; the tone modifier
   (.pw-alert-yellow / .pw-alert-amber / .pw-alert-red) drives border +
   headline colour. */
.pw-alerts-v2 .pw-alert-detail {
  background: rgba(229, 217, 194, 0.04);
  border: 1px solid;
  border-radius: var(--pulse-radius-pill);
  padding: 10px 12px;
  margin-top: var(--pw-gap-tight);
}
.pw-alerts-v2 .pw-alert-detail.pw-alert-yellow {
  border-color: rgba(255, 214, 10, 0.3);
}
.pw-alerts-v2 .pw-alert-detail.pw-alert-amber {
  border-color: rgba(255, 159, 10, 0.3);
}
.pw-alerts-v2 .pw-alert-detail.pw-alert-red {
  border-color: rgba(255, 69, 58, 0.45);
}
.pw-alerts-v2 .pw-alert-detail-head {
  font-weight: 600;
  font-size: var(--pulse-font-section-title);
  line-height: 1.3;
  margin-bottom: var(--pw-gap-tight);
}
.pw-alerts-v2 .pw-alert-detail.pw-alert-yellow .pw-alert-detail-head {
  color: var(--pw-warn-yellow);
}
.pw-alerts-v2 .pw-alert-detail.pw-alert-amber .pw-alert-detail-head {
  color: var(--pw-warn-amber);
}
.pw-alerts-v2 .pw-alert-detail.pw-alert-red .pw-alert-detail-head {
  color: var(--pw-warn-red);
}
.pw-alerts-v2 .pw-alert-detail-meta {
  font-weight: 600;
  font-size: var(--pulse-font-label);
  letter-spacing: var(--pulse-ls-micro);
  opacity: 0.55;
  margin-bottom: var(--pw-gap-tight);
}
.pw-alerts-v2 .pw-alert-detail-desc {
  font-size: var(--pw-font-caption);
  line-height: 1.5;
  color: var(--pw-ink-cream-muted);
  margin-bottom: var(--pw-gap-tight);
}
.pw-alerts-v2 .pw-alert-detail-loc {
  font-size: var(--pulse-font-label);
  letter-spacing: 0.04em;
  opacity: 0.6;
}
@keyframes pw-alertBlink {
  50% { opacity: 0.3; }
}
`;var gr=[{type:"overview"}],Fa={overview:{},forecast:{mode:"both"},wind:{speed_mode:"speed"},air_quality:{scale:"eu"},astro:{},alerts:{},atmosphere:{}};function nt(e){if(!e)return{type:"overview"};if(typeof e=="string")return nt({type:e});if(typeof e!="object")return{type:"overview"};let t=tr.includes(e.type)?e.type:"overview";return{...Fa[t]||{},...e,type:t}}function br(e){if(!e||typeof e!="object")return{type:"custom:pulse-weather-card",sections:gr.map(nt)};let t=e,r=Array.isArray(t.sections)&&t.sections.length>0?t.sections.map(nt):gr.map(nt);return{type:t.type||"custom:pulse-weather-card",weather_entity:t.weather_entity||void 0,atmos_source:t.atmos_source||void 0,sections:r}}function g(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function S(e){return e==null||e===""?"":String(e).replace(/[;{}]/g,"").replace(/url\s*\(/gi,"").replace(/expression\s*\(/gi,"").replace(/-moz-binding\s*:/gi,"")}function vr(e){return{columns:12,min_columns:e,rows:"auto"}}function qe(){return typeof window>"u"?!1:window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches??!1}function te(e){let t=e?.config?.time_zone;if(t&&e?.locale?.time_zone!=="local")return t}function ie(e,t,r){return!e||isNaN(e.getTime())?"":new Intl.DateTimeFormat("en-GB",{...r,timeZone:t}).format(e)}function H(e,t){return ie(e,t,{hour:"2-digit",minute:"2-digit",hourCycle:"h23"})}var Lt=0;function xr(e="pulse-id"){return Lt=Lt+1>>>0,`${e}-${Lt.toString(36)}`}function yr(e,t,{signal:r,role:a="button"}={}){e.setAttribute("role",a),e.setAttribute("tabindex","0"),e.addEventListener("keydown",o=>{let n=o;n.key!=="Enter"&&n.key!==" "||(n.preventDefault(),t(n))},r?{signal:r}:void 0)}function Dt(e){let t=e.replace(/^weather\./,"");return t.endsWith(Rt)&&(t=t.slice(0,-Rt.length)),t}function _r(e,t){let r=t.weather_entity||Object.keys(e).find(d=>d.startsWith("weather."))||"",a=t.atmos_source||Dt(r),o={};for(let d of pr){let p=`sensor.${a}_${d}`;p in e&&(o[d]=p)}let n=Object.keys(o).length>=ur,i=n?o:{},l=[];if(t.alert_entities&&t.alert_entities.length>0)for(let d of t.alert_entities)d in e&&l.push(d);else if(n){for(let s of dr){let u=`sensor.${a}_${s}`,f=`sensor.${a}_warnings_${s}`;u in e?l.push(u):f in e&&l.push(f)}let d=`binary_sensor.${a}_alert_active`,p=`binary_sensor.${a}_warnings_alert_active`;d in e?l.push(d):p in e&&l.push(p)}let c="sun.sun"in e?"sun.sun":null;return{weatherEntityId:r,atmosCe:i,sunEntityId:c,atmosSource:n?a:null,alertEntityIds:l}}function Aa(e){if(typeof e!="string")return null;let t=e.trim().replace(/^#/,"");return t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),t.length!==6||/[^0-9a-f]/i.test(t)?null:{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}}function ye(e,t){if(typeof e!="string")return String(e);let r=Math.max(0,Math.min(1,Number(t))),a=Aa(e);if(a)return`rgba(${a.r},${a.g},${a.b},${r})`;let o=/^rgb\(\s*(\d+)\s*[,\s]\s*(\d+)\s*[,\s]\s*(\d+)\s*\)$/i.exec(e.trim());return o?`rgba(${o[1]},${o[2]},${o[3]},${r})`:e}function kr(e,t){return e.filter(r=>Number.isFinite(t(r)))}function V(e,t=0){let r=Number(e);return Number.isFinite(r)?r:t}function it(e,t,r,a,o,n=0){if(t?.[a]){let i=Number(e?.states?.[t[a]]?.state);if(Number.isFinite(i))return i}return Number(r?.[o]??n)||n}function Sr(e,t,r,a){return t?.[r]&&e?.states?.[t[r]]?.attributes?.unit_of_measurement||a}function Ge(e,t,r=0){let a=t?e?.states?.[t]:null;if(!a)return{value:r,unit:void 0,entity:null};let o=Number(a.state);return{value:Number.isFinite(o)?o:r,unit:a.attributes?.unit_of_measurement,entity:a}}function st(e,t,r){let a=t?.state||"sunny",o=r?.sunEntityId?e?.states?.[r.sunEntityId]?.state:null;return{condition:a,isNight:a==="clear-night"||o==="below_horizon"}}function Xe(e="pw-id"){return xr(e)}function Mr(e){return`${e}, linear-gradient(180deg, var(--pw-sky-top) 0%, var(--pw-sky-mid) 45%, var(--pw-sky-bot) 100%)`}function lt(e,t,r=36e5){let a=(t?t.getTime():Date.now())-r;return e.filter(o=>{let n=o.datetime;if(!n)return!1;let i=new Date(n).getTime();return Number.isFinite(i)&&i>=a})}function It(e){let t=Number(e);for(let r of rt)if(t<=r.max)return r.color;return rt[rt.length-1].color}function Tr(e){let t=Number(e);for(let r of at)if(t<=r.max)return r.tier;return at[at.length-1].tier}function Fr(e){let t=Number(e);for(let r of ot)if(t<=r.max)return r;return ot[ot.length-1]}function ct(e){let t=(Number(e)%360+360)%360,r=Math.round(t/22.5)%16;return sr[r]}function Ie(e,t,r){if(!t||!r)return{todaySunrise:null,todaySunset:null,tomorrowSunrise:null};let a=new Date(t),o=new Date(r);if(isNaN(a.getTime())||isNaN(o.getTime()))return{todaySunrise:null,todaySunset:null,tomorrowSunrise:null};let n=a.getTime()>e.getTime()?new Date(a.getTime()-864e5):a,i=o.getTime()>e.getTime()?o:new Date(o.getTime()-864e5);i.getTime()>n.getTime()+864e5&&(i=new Date(i.getTime()-864e5)),n.getTime()>i.getTime()&&(n=new Date(n.getTime()-864e5));let l=a.getTime()>e.getTime()?a:new Date(a.getTime()+864e5);return{todaySunrise:n,todaySunset:i,tomorrowSunrise:l}}function Y(e,t){if(!e||isNaN(e.getTime()))return null;if(!t)return e;let r=t.getTime(),a=[e,new Date(e.getTime()-864e5),new Date(e.getTime()+864e5)],o=a[0],n=Math.abs(o.getTime()-r);for(let i=1;i<a.length;i+=1){let l=Math.abs(a[i].getTime()-r);l<n&&(o=a[i],n=l)}return o}function ne(e,t,r){let a=t?Object.entries(t).map(([o,n])=>` ${o}="${n}"`).join(""):"";return r!=null?`<${e}${a}>${r}</${e}>`:`<${e}${a}/>`}function pt(e){return mr[e]||"\u{1F324}\uFE0F"}var $r={"clear-night":"Clear Night",cloudy:"Cloudy",exceptional:"Exceptional",fog:"Fog",hail:"Hail",lightning:"Lightning","lightning-rainy":"Lightning Rainy",partlycloudy:"Partly Cloudy",pouring:"Pouring",rainy:"Rainy",snowy:"Snowy","snowy-rainy":"Snowy Rainy",sunny:"Sunny",windy:"Windy","windy-variant":"Windy Variant"};function Ar(e){return Object.hasOwn($r,e)?$r[e]:e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase())}function re(e,t,r){let a=document.createElement(e);if(a.className=t,r)for(let[o,n]of Object.entries(r))a.style.setProperty(o,n);return a}function M(e,t){return Math.random()*(t-e)+e}function Ye(e,t=60,r=1,a=2){let o=Math.min(t,ar);for(let n=0;n<o;n++){let i=re("div","pw-rain-drop"),l=M(15,30),c=M(.4,.8)/r;Object.assign(i.style,{left:`${M(0,100)}%`,top:`${M(-10,20)}%`,width:`${a}px`,height:`${l}px`,borderRadius:`0 0 ${a}px ${a}px`,background:"linear-gradient(to bottom, transparent, rgba(120,180,255,0.6))",animation:`pw-rainFall ${c}s linear ${M(0,2)}s infinite`,animationFillMode:"backwards",position:"absolute"}),e.appendChild(i)}}function Ot(e,t=40){let r=Math.min(t,or);for(let a=0;a<r;a++){let o=re("div","pw-snowflake"),n=M(2,5);Object.assign(o.style,{left:`${M(0,100)}%`,top:`${M(-5,10)}%`,width:`${n}px`,height:`${n}px`,borderRadius:"50%",background:"rgba(255,255,255,0.7)",animation:`pw-snowFall ${M(3,6)}s linear ${M(0,4)}s infinite`,animationFillMode:"backwards",position:"absolute"}),e.appendChild(o)}}function Ea(e){for(let t=0;t<4;t++){let r=re("div","pw-fog-layer");Object.assign(r.style,{position:"absolute",width:"200%",height:"40px",top:`${30+t*20}%`,left:"0",background:"linear-gradient(to right, transparent 0%, rgba(200,200,200,0.06) 20%, rgba(200,200,200,0.1) 50%, rgba(200,200,200,0.06) 80%, transparent 100%)",animation:`pw-fogDrift ${M(15,25)}s linear ${t*2}s infinite`,animationFillMode:"backwards"}),e.appendChild(r)}}function dt(e){for(let t=0;t<8;t++){let r=re("div","pw-sun-ray");Object.assign(r.style,{position:"absolute",top:"-20px",left:`${10+t*12}%`,width:"2px",height:"120px",background:"linear-gradient(to bottom, rgba(255,220,100,0.08), transparent)",transformOrigin:"top center",transform:`rotate(${-15+t*4}deg)`,animation:`pw-rayPulse ${M(3,5)}s ease-in-out ${M(0,2)}s infinite`,animationFillMode:"backwards"}),e.appendChild(r)}}function K(e,t=4,r=1){let a=Math.min(t,Ct);for(let o=0;o<a;o++){let n=re("div","pw-cloud"),i=M(80,160),l=M(30,60),c=M(20,40)/r;Object.assign(n.style,{position:"absolute",width:`${i}px`,height:`${l}px`,top:`${M(5,50)}%`,left:"0",borderRadius:"50%",background:"radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, transparent 70%)",animation:`pw-cloudDrift ${c}s linear ${M(0,15)}s infinite`,animationFillMode:"backwards"}),e.appendChild(n)}}function zt(e){for(let t=0;t<nr;t++){let r=re("div","pw-star"),a=M(1,3);Object.assign(r.style,{position:"absolute",left:`${M(0,100)}%`,top:`${M(0,70)}%`,width:`${a}px`,height:`${a}px`,borderRadius:"50%",background:"#fff",animation:`pw-twinkle ${M(2,5)}s ease-in-out ${M(0,3)}s infinite`,animationFillMode:"backwards"}),e.appendChild(r)}}function Ca(e,t){let r=[],a=e,o=0,n=Math.floor(M(4,8)),i=t/n;r.push(`${a},${o}`);for(let l=0;l<n;l++)a+=M(-15,15),o+=i,r.push(`${a},${o}`);return r.join(" ")}function Er(e,t=2,r){let a=r||Array.from({length:t},(n,i)=>i*3),o=re("div","pw-lightning-flash");Object.assign(o.style,{position:"absolute",inset:"0",background:"rgba(255,255,255,0.15)",animation:`pw-flash 6s ease-in-out ${a[0]||0}s infinite`,animationFillMode:"backwards",pointerEvents:"none"}),e.appendChild(o);for(let n=0;n<t;n++){let i="http://www.w3.org/2000/svg",l=document.createElementNS(i,"svg");l.setAttribute("class","pw-lightning-bolt"),l.setAttribute("width","60"),l.setAttribute("height","200"),l.setAttribute("viewBox","0 0 60 200"),l.style.position="absolute",l.style.top="0",l.style.left=`${M(15,75)}%`,l.style.pointerEvents="none",l.style.zIndex="2",l.style.animation=`pw-boltStrike 6s ease-in-out ${a[n]||0}s infinite`,l.style.animationFillMode="backwards";let c=Ca(30,180),d=document.createElementNS(i,"polyline");d.setAttribute("points",c),d.setAttribute("fill","none"),d.setAttribute("stroke","rgba(200,220,255,0.4)"),d.setAttribute("stroke-width","6"),d.setAttribute("stroke-linecap","round"),d.setAttribute("stroke-linejoin","round"),l.appendChild(d);let p=document.createElementNS(i,"polyline");p.setAttribute("points",c),p.setAttribute("fill","none"),p.setAttribute("stroke","#fff"),p.setAttribute("stroke-width","2"),p.setAttribute("stroke-linecap","round"),p.setAttribute("stroke-linejoin","round"),l.appendChild(p),e.appendChild(l)}}function Na(e){let t=re("div","pw-heat-shimmer");Object.assign(t.style,{position:"absolute",inset:"0",pointerEvents:"none",background:"linear-gradient(0deg, transparent 0%, rgba(255,200,100,0.03) 30%, transparent 50%, rgba(255,180,80,0.02) 70%, transparent 100%)",backgroundSize:"100% 200%",animation:"pw-shimmer 3s ease-in-out infinite"}),e.appendChild(t);let r=re("div","pw-heat-ripple");Object.assign(r.style,{position:"absolute",bottom:"0",left:"0",right:"0",height:"60px",pointerEvents:"none",background:"repeating-linear-gradient(0deg, transparent, rgba(255,200,100,0.02) 2px, transparent 4px)",animation:"pw-rippleWave 2s ease-in-out infinite"}),e.appendChild(r)}function Cr(e,t,r){let a=Math.min(1,(t/75+r/150)/2);if(a<.05)return;let o=re("div","pw-smog-overlay");o.style.background=`rgba(120,110,80,${.05+a*.15})`,e.appendChild(o);let n=re("div","pw-haze-vignette");if(n.style.background=`radial-gradient(ellipse at center, transparent 40%, rgba(80,70,50,${a*.3}) 100%)`,e.appendChild(n),qe())return;let i=Math.floor(a*20);for(let c=0;c<i;c++){let d=re("div","pw-dust-particle"),p=M(1,3+a*3);Object.assign(d.style,{left:`${M(0,100)}%`,top:`${M(10,90)}%`,width:`${p}px`,height:`${p}px`,animationDelay:`${M(0,8)}s`,animationFillMode:"backwards"}),e.appendChild(d)}let l=Math.floor(a*5);for(let c=0;c<l;c++){let d=re("div","pw-haze-blob"),p=M(60,120);Object.assign(d.style,{left:`${M(-10,80)}%`,top:`${M(10,70)}%`,width:`${p}px`,height:`${p*.6}px`,animationDelay:`${M(0,12)}s`,animationFillMode:"backwards"}),e.appendChild(d)}}function Nr(e,t,r){let a=document.createDocumentFragment();if(qe())return a;try{t&&zt(a);let o=r?Math.round(r.total/100*Ct):0;switch(e){case"sunny":t||dt(a),r&&o>0&&K(a,o);break;case"clear-night":r&&o>0&&K(a,o);break;case"partlycloudy":t||dt(a),K(a,r?o:3);break;case"cloudy":K(a,r?Math.max(o,4):6);break;case"rainy":Ye(a,40,1,2),K(a,r?Math.max(o,3):4);break;case"pouring":Ye(a,80,1.5,3),K(a,r?Math.max(o,5):6);break;case"snowy":Ot(a,40),K(a,r?Math.max(o,3):4);break;case"snowy-rainy":Ot(a,20),Ye(a,20,.8,1),K(a,r?Math.max(o,3):4);break;case"hail":Ye(a,30,1.2,3),Ot(a,15),K(a,r?Math.max(o,4):5);break;case"lightning":Er(a,2,[0,3]),K(a,r?Math.max(o,5):6);break;case"lightning-rainy":Er(a,3,[0,2,4]),Ye(a,60,1.3,2),K(a,r?Math.max(o,5):6);break;case"fog":Ea(a);break;case"windy":case"windy-variant":K(a,r?o:3,1.5);break;case"exceptional":Na(a);break;default:r&&o>0&&K(a,o);break}}catch(o){console.warn(`${ce} buildConditionFx threw \u2014 atmospheric FX will be partial or absent for this condition. Please share the error below when reporting.`,o)}return a}function Ke(e,t,r){return r===t?0:Math.max(0,Math.min(1,(e-t)/(r-t)))}function Ht(e,t,r="ellipse"){let a=Math.max(0,Math.min(1,t)),o=Math.round(3+a*50),n=Math.round(2+a*25),i=Math.round(50+a*30),l=c=>c.toString(16).padStart(2,"0");return`radial-gradient(${r} at 50% 30%, ${e}${l(o)} 0%, ${e}${l(n)} ${i}%, transparent 90%)`}function Rr(e,t=6,r=1.2){let a=Math.max(0,Math.min(1,e));return t-a*(t-r)}function Lr(e,t="0,0,0"){let r=Math.max(0,Math.min(1,e));if(r<.1)return"";let a=Math.round(60-r*30),o=(r*.5).toFixed(2);return`radial-gradient(ellipse at center, transparent ${a}%, rgba(${t},${o}) 100%)`}function Dr(e,t=8,r=2){let a=Math.max(0,Math.min(1,e));return t-a*(t-r)}function Ir(e,t){let r=t?Number(ie(e,t,{hour:"2-digit",hourCycle:"h23"})):e.getHours();return r>=6&&r<12?"this morning":r>=12&&r<17?"this afternoon":r>=17&&r<21?"this evening":"tonight"}function Ra(e,t){return e==="sunny"||e==="clear-night"?"Clear skies":e==="rainy"||e==="pouring"?"Rain":e==="snowy"||e==="snowy-rainy"?"Snow":e==="lightning"||e==="lightning-rainy"?"Storms":e==="fog"?"Fog":t>=88?"Overcast":t>=50?"Mostly cloudy":t>=12?"Some sun":"Sunny"}function La(e){let t=e.slots.slice(0,6);if(t.length===0)return null;let r=Number(t[t.length-1].cloud_coverage),a=Number.isFinite(r)?r-e.cloudCoverNow:0,o=t.reduce((d,p)=>Math.max(d,Number(p.precipitation_probability)||0),0),n=t.reduce((d,p)=>Math.max(d,Number(p.snowfall)||0),0),l=t.reduce((d,p)=>Math.max(d,Number(p.wind_speed)||0),e.windSpeed)-e.windSpeed;return["moderate","high"].includes(e.stabilityState)?"with thunderstorms developing":o>=60?n>0?"with snow likely":"with rain likely":o>=40?n>0?"with snow possible":"with a brief shower or two":a>=30?"then increasing clouds":a<=-30?"then clearing":l>=8?"with wind firming":null}function Or(e){let t=Ra(e.conditionNow,Number(e.cloudCoverNow)||0),r=La(e),a=r?Ir(e.now,e.timeZone):null,o;return r?r.startsWith("then ")?o=`${t}, ${r} ${a}.`:o=`${t}, then ${r} ${a}.`:o=`${t} ${Ir(e.now,e.timeZone)}.`,{initial:t,transition:r,anchor:a,sentence:o}}var Da="#a83d2a",zr="#7a2d20",Ae="#fdf6e3",Ia='<svg viewBox="0 0 40 40" width="38" height="38" aria-hidden="true">',Oa="</svg>";function Hr(e){let t=["day","cloudy","rain","night"].includes(e)?e:"day",a=`<circle class="mc" cx="20" cy="20" r="18" fill="${t==="night"?zr:Da}" opacity="0.92"/>`,o=`<line class="mh" x1="6" y1="22" x2="34" y2="22" stroke="${Ae}" stroke-width="0.8" opacity="0.85"/>`,n="";return t==="day"?n=`<circle class="md" cx="20" cy="14" r="2.4" fill="${Ae}" opacity="0.95"/>`:t==="cloudy"?n=`<circle class="md" cx="20" cy="14" r="2.4" fill="${Ae}" opacity="0.45"/>`:t==="rain"?n=[`<line class="mg" x1="14" y1="11" x2="13" y2="16" stroke="${Ae}" stroke-width="0.7" opacity="0.55"/>`,`<line class="mg" x1="20" y1="11" x2="19" y2="16" stroke="${Ae}" stroke-width="0.7" opacity="0.55"/>`,`<line class="mg" x1="26" y1="11" x2="25" y2="16" stroke="${Ae}" stroke-width="0.7" opacity="0.55"/>`].join(""):t==="night"&&(n=`<circle class="md" cx="20" cy="14" r="2.4" fill="${Ae}" opacity="0.95"/><circle class="md-cut" cx="21.4" cy="13.4" r="1.8" fill="${zr}"/>`),`${Ia}${a}${o}${n}${Oa}`}function ee(e,t){return t?"night":["rainy","pouring","snowy","snowy-rainy","hail","lightning-rainy"].includes(e)?"rain":["cloudy","fog"].includes(e)?"cloudy":"day"}var y={kicker(e){return`<div class="pw-t-kicker">${g(e)}</div>`},heroTier(e,{flavor:t="aqi",color:r=""}={}){let a=t==="atmos"?"pw-t-hero-tier-atmos":"pw-t-hero-tier-aqi",o=r?` style="color:${S(r)}"`:"";return`<div class="pw-t-hero-tier ${a}"${o}>${g(e)}</div>`},display(e,{color:t="",suffix:r=""}={}){let a=t?` style="color:${S(t)}"`:"",o=r?`<span class="pw-t-display-suf">${g(r)}</span>`:"";return`<div class="pw-t-display"${a}>${g(String(e))}${o}</div>`},narrative(e){return`<div class="pw-t-narrative">${g(e)}</div>`},gloss(e){return`<div class="pw-t-gloss">${g(e)}</div>`},meta(e){return`<div class="pw-t-meta">${g(e)}</div>`},chartCaption(e){return`<div class="pw-t-chart-caption">${g(e)}</div>`},stat(e,t,{data:r=!1,valueColor:a=""}={}){let o=a?` style="color:${S(a)}"`:"",n=r?"pw-t-stat-l pw-t-data":"pw-t-stat-l";return`<div class="pw-t-stat"><div class="pw-t-stat-v"${o}>${g(String(e))}</div><div class="${n}">${g(t)}</div></div>`},statLabel(e){return`<span class="pw-t-stat-l">${g(e)}</span>`},dataToken(e){return`<span class="pw-t-data">${e}</span>`},heroBlock({tier:e="",tierFlavor:t="aqi",tierColor:r="",value:a="",valueSuffix:o="",valueColor:n="",narrative:i=""}={}){let l=e?this.heroTier(e,{flavor:t,color:r}):"",c=a!==""?this.display(a,{color:n,suffix:o}):"",d=i?this.narrative(i):"";return`<div class="pw-hero-block">${l}${c}${d}</div>`},statsRow(e,{columns:t=4,divided:r=!1}={}){let a=e.filter(Boolean);return a.length?`<div class="pulse-stats-row" data-cols="${t}"${r?' data-divided="true"':""}>${a.join("")}</div>`:""}};function q({sectionClass:e,ariaLabel:t,brandVariant:r,kicker:a="",narrative:o="",preContent:n="",extraSectionClass:i="",sectionStyle:l="",body:c,proView:d="",proInitial:p=!1,proAction:s="view-swap",proAriaLabel:u="Toggle pro view",pro:f=!0}){f===!1&&(d="",s="view-swap",p=!1);let m=l?` style="${l}"`:"",w=`pw-section pw-cartouche ${e}${i?` ${i}`:""}`,h=Hr(r),b=[a?y.kicker(a):"",o?y.narrative(o):""].filter(Boolean).join(""),$=b?`<div class="pw-t-marg">${b}</div>`:"",x=!!d,_=x||s!=="view-swap",T=x?`<div class="pw-view pw-view-default">${c}</div><div class="pw-view pw-view-pro">${d}</div>`:c,k=p?"true":"false",F=_?`<button class="pw-brand-mark-corner" aria-label="${g(u)}" aria-pressed="${k}" type="button">${h}</button>`:`<div class="pw-brand-mark-corner" aria-hidden="true">${h}</div>`;return`
    <div class="${w}" data-pro="${k}" data-pro-action="${s}"${m} role="region" aria-label="${g(t)}">
      ${n}
      ${F}
      <div class="pw-content">
        ${$}
        ${T}
      </div>
    </div>`}function za(e,t,r){let a=e.map(p=>{let s=Number(p.cape);return Number.isFinite(s)?s:0}),o=Math.max(...a,300),n=Math.max(...a),i=a.indexOf(n),c=a.map((p,s)=>({x:s/Math.max(e.length-1,1)*t,y:r-p/o*r})).map((p,s)=>`${s===0?"M":"L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" "),d=`${c} L${t},${r} L0,${r} Z`;return{svgPath:c,areaPath:d,peakValue:n,peakIndex:i,maxCape:o}}function Ha(e,t,r,a,o,n,i,l){let c=[];return i>0&&c.push({name:"Snow",value:i,unit:l}),r>0&&c.push({name:"Rain",value:r,unit:a}),o>0&&c.push({name:"Showers",value:o,unit:n}),c.length>0?`${c.map(p=>`${g(p.name)} ${g(p.value.toFixed(1))} ${g(p.unit)}`).join(" \xB7 ")} now`:e>0?`Precipitation \u2014 next 12h \xB7 ${g(e.toFixed(1))} ${g(t)} now`:"Precipitation \u2014 next 12h"}function Pr({hass:e,config:t,discovery:r,weatherEntity:a,forecastData:o}){let n=a.attributes,i=r.atmosCe,l=r.sunEntityId||"",c=te(e),{condition:d,isNight:p}=st(e,a,r),s=(P,W)=>it(e,i,n,P,W),u=(P,W)=>Sr(e,i,P,W),f=s("temperature","temperature"),m=s("humidity","humidity"),w=s("wind_speed","wind_speed"),h=s("wind_direction","wind_bearing"),b=s("wind_gusts","wind_gust_speed")||s("wind_gusts","wind_gusts"),$=s("dew_point","dew_point"),x=s("visibility","visibility"),_=s("pressure","pressure"),T=u("temperature","\xB0C"),k=u("visibility","km"),F=u("pressure","hPa"),C=u("dew_point","\xB0C"),L=o?.daily,N=o?.hourly,O=n.forecast,D=f,v=f;if(L&&L.length>0){let P=L[0],W=Number(P.templow),I=Number(P.temperature);Number.isFinite(W)&&Number.isFinite(I)&&(D=Math.min(W,I),v=Math.max(W,I))}else if(N&&N.length>0){let P=Date.now(),W=new Date;W.setHours(23,59,59,999);let I=W.getTime(),X=1/0,j=-1/0;for(let he of N.slice(0,24)){let U=Date.parse(String(he.datetime??""));if(Number.isFinite(U)&&(U<P||U>I))continue;let oe=Number(he.temperature);Number.isFinite(oe)&&(oe<X&&(X=oe),oe>j&&(j=oe))}Number.isFinite(X)&&Number.isFinite(j)&&X!==j&&(D=Math.min(X,f),v=Math.max(j,f))}else if(O&&O.length>0){let P=O[0],W=Number(P.templow),I=Number(P.temperature);Number.isFinite(W)&&Number.isFinite(I)&&(D=Math.min(W,I),v=Math.max(W,I))}let E=r.atmosCe.uv_index,A=Number(E?e.states[E]?.state:n.uv_index),R=Number.isFinite(A)?A:null,{value:Z,unit:ue}=Ge(e,i.precipitation),me=ue||"mm",{value:ge,unit:be}=Ge(e,i.rain),{value:$e,unit:ke}=Ge(e,i.showers),{value:B,unit:z}=Ge(e,i.snowfall),G=be||"mm",ae=ke||"mm",le=z||"cm",ve=i.dew_point_comfort?e.states[i.dew_point_comfort]:null,He=i.visibility_category?e.states[i.visibility_category]:null,Se=i.feels_like_context?e.states[i.feels_like_context]:null,Pe=i.pressure_trend?e.states[i.pressure_trend]:null,Ce=new Date,Ne=l?e.states[l]:null,We=Ne?.attributes?.next_rising,wt=Ne?.attributes?.next_setting,{todaySunrise:Be,todaySunset:Me,tomorrowSunrise:Ue}=Ie(Ce,We,wt),xe=null;r.atmosCe.cloud_cover&&(xe={total:Number(e.states[r.atmosCe.cloud_cover]?.state)||0,low:Number(e.states[r.atmosCe.cloud_cover_low]?.state)||0,mid:Number(e.states[r.atmosCe.cloud_cover_mid]?.state)||0,high:Number(e.states[r.atmosCe.cloud_cover_high]?.state)||0});let gt=(i.stability_assessment?e.states[i.stability_assessment]:null)?.state||"",bt=ct(h),vt=`data-condition="${g(d)}" data-night="${p}" data-cloud='${g(JSON.stringify(xe||""))}'`,xt=Ke(f,20,42),yt=Ke(f,15,-10),_t=Math.max(xt,yt),fe=Lr(_t),je=fe?`<div class="pw-tension-vignette" style="background: ${S(fe)}"></div>`:"",$t=Se?.state||"",kt=Se?.attributes?.difference,Je="";if(kt!=null){let P=Math.round(Number(kt));$t==="wind_chill"?Je=`Wind chill ${P}\xB0`:$t==="heat_index"&&(Je=`Heat index +${P}\xB0`)}let ga=ve?.state||"",Vt=b>w+5,qt="",Gt=l?e.states[l]:null;if(Gt&&Be&&Me&&Ue){let P=Ce.getTime(),W=Gt.state==="above_horizon",I,X,j,he,U;if(W){let we=Be.getTime(),Q=Me.getTime(),Re=Math.max(Q-we,1);I=Math.max(0,Math.min(100,(P-we)/Re*100)),X=H(Be,c),j=H(Me,c),he="background: linear-gradient(to right, #ff9f0a, #ffd60a)",U="#ff9f0a"}else{let we=Me.getTime(),Q=Ue.getTime(),Re=Math.max(Q-we,1);I=Math.max(0,Math.min(100,(P-we)/Re*100)),X=H(Me,c),j=H(Ue,c),he="background: linear-gradient(to right, #1a3050, #5ac8fa)",U="#5ac8fa"}let oe=`left:${Number(I)}%; background:${S(U)}; box-shadow: 0 0 6px ${S(U)}66`,Te=` style="color:${S(U)}"`,Fe=W?"":"\u{1F319}";qt=`
      <div class="pw-day-arc">
        <span class="pw-day-arc-label"${Te}>${g(X)}</span>
        <div class="pw-day-arc-bar">
          <div class="pw-day-arc-fill" style="width:${Number(I)}%; ${he}"></div>
          <div class="pw-day-arc-marker" style="${oe}">${Fe}</div>
        </div>
        <span class="pw-day-arc-label"${Te}>${g(j)}</span>
      </div>`}let St="",Xt="",Yt=o?.hourly||[];if(Yt.length>0){let I=lt(Yt,new Date).slice(0,12),X=Ha(Z,me,ge,G,$e,ae,B,le);if(Z>0?St=X:St=Or({now:new Date,cloudCoverNow:xe?xe.total:0,conditionNow:d,slots:I,windSpeed:w,uvIndex:R,stabilityState:gt,timeZone:c}).sentence,I.some(j=>Number(j.cape)>300)){let U=za(I,320,24),oe=I[U.peakIndex]?.datetime?new Date(I[U.peakIndex].datetime):null,Te=U.peakValue>=1e3?`${(U.peakValue/1e3).toFixed(1)}k`:String(Math.round(U.peakValue)),Fe=oe?`storm risk \xB7 peak ${Te} J/kg at ${H(oe,c)}`:`storm risk \xB7 peak ${Te} J/kg`,we=Xe("pw-cape-grad");Xt=`<div class="pw-overview-spark-block">
        ${y.chartCaption(Fe)}
        <div class="pw-overview-storm">
          <svg viewBox="0 0 320 24" preserveAspectRatio="none" role="img" aria-label="${g(Fe)}">
            <defs>
              <linearGradient id="${we}" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="var(--pw-warn-amber)" stop-opacity="0.35"/>
                <stop offset="100%" stop-color="var(--pw-warn-amber)" stop-opacity="0.04"/>
              </linearGradient>
            </defs>
            <path d="${U.areaPath}" fill="url(#${we})"/>
            <path d="${U.svgPath}" fill="none" stroke="var(--pw-warn-amber)" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>
      </div>`}}let ba=Ar(d),va=ee(d,p),xa=t?.location_label||"Now",ya=xe?Math.round(xe.total)+"%":"--",_a=`
        <div class="pw-loc-stamp">${g(xa)} \xB7 ${g(H(new Date,c))}</div>
        <div class="pw-hero-block">
          ${y.display(Math.round(f),{suffix:T})}
          ${y.gloss(`${ba}${Je?" \xB7 "+Je:""}`)}
        </div>`,$a=y.statsRow([y.stat(`${Math.round(D)}/${Math.round(v)}\xB0`,"range"),y.stat(`${Math.round(w)}${Vt?` / ${Math.round(b)}`:""} ${bt}`,Vt?"wind / gust":"wind"),y.stat(R!==null?Math.round(R):"--","uv"),y.stat(ya,"cloud")],{columns:4}),et=(o?.daily||[]).slice(0,7),Mt="";if(et.length>=2){let I=et.map(Q=>Number(Q.temperature)||0),X=et.map(Q=>Number(Q.templow??Q.temperature)||0),j=Math.min(...X),he=Math.max(...I),U=Math.max(he-j,1),oe=Q=>Q/(et.length-1)*320,Te=Q=>38-(Q-j)/U*34-2,Fe=I.map((Q,Re)=>`${Re===0?"M":"L"}${oe(Re).toFixed(1)},${Te(Q).toFixed(1)}`).join(" ");Mt=`<svg viewBox="0 0 320 38" preserveAspectRatio="none">
      <path d="${`${Fe} L320,38 L0,38 Z`}" fill="rgba(168,61,42,0.08)"/>
      <path d="${Fe}" stroke="var(--pw-ink-cream)" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0.85"/>
    </svg>`}let ka=Mt?`<div class="pw-overview-spark-block">
        ${y.chartCaption("7-day temperature trend")}
        <div class="pw-overview-spark">${Mt}</div>
      </div>`:"",Kt=He?.state||"",Tt=Pe?.state||"",Sa=[Number.isFinite(m)&&m>0,Number.isFinite($)&&$!==0,!!Kt,!!Tt].filter(Boolean).length>=2,Zt="";if(Sa){let P=Number.isFinite(m)&&m>0?y.stat(`${Math.round(m)}%`,ga||"humidity"):y.stat("\u2014","humidity"),W=Number.isFinite($)?y.stat(`${Math.round($)}${C}`,"dew point"):y.stat("\u2014","dew point"),I=Number.isFinite(_)&&_>0?y.stat(`${Math.round(_)}`,Tt?`${F} ${Tt}`:F):y.stat("\u2014","pressure"),X=Number.isFinite(x)&&x>0?y.stat(`${x.toFixed(x<10?1:0)}${k}`,Kt||"visibility"):y.stat("\u2014","visibility");Zt=y.statsRow([P,W,I,X],{columns:4})}let Ma=`
        ${_a}
        ${y.narrative(St)}
        ${qt}
        ${ka}
        ${Xt}
        ${$a}
        ${Zt}`;return q({sectionClass:"pw-overview-v2",ariaLabel:"Current weather overview",brandVariant:va,preContent:`${je}<div class="pw-fx" ${vt} role="img" aria-label="${g(d)} weather effects"></div>`,body:Ma,pro:t?.pro!==!1})}function Pa(e,t){if(!e||e.length===0)return"Forecast unavailable";let r=0;for(let l=1;l<e.length;l++)Number(e[l].temperature)>Number(e[r].temperature)&&(r=l);let a=e.findIndex(l=>Number(l.precipitation_probability)>=50),o=l=>l===0?"today":ie(new Date(String(e[l].datetime||"")),t,{weekday:"short"}).toLowerCase(),n=o(r),i=Math.round(Number(e[r].temperature));return a>=0&&a!==r?`Warmest ${n} (${i}\xB0) \xB7 rain ${o(a)}`:a>=0?`Wet stretch \xB7 warmest ${n} (${i}\xB0)`:`Warmest ${n} (${i}\xB0) \xB7 dry through the week`}function Wr({hass:e,config:t,discovery:r,forecastData:a,weatherEntity:o}){let n=a?.daily||[];if(n.length===0)return null;let i=te(e),l=r.atmosCe,d=(l.temperature?e.states[l.temperature]:null)?.attributes?.unit_of_measurement||"\xB0C",p=n.slice(0,7),s=p.flatMap(k=>[V(k.temperature,0),V(k.templow,0)]),u=Math.min(...s),f=Math.max(...s),m=Math.max(f-u,1),w=Number(o?.attributes?.temperature),h=p.map((k,F)=>{let C=V(k.temperature,0),L=V(k.templow,0),N=Math.round(Number(k.precipitation_probability)||0),O=F===0,D=O?"today":ie(new Date(String(k.datetime||"")),i,{weekday:"short"}).toLowerCase(),v=pt(String(k.condition||"")),E=N>=50?`<span class="pw-fc-pop">${g(String(N))}%</span>`:'<span class="pw-fc-pop"></span>',A=(L-u)/m*100,R=(C-L)/m*100,Z=O&&Number.isFinite(w)?`<span class="pw-fc-now" style="left:${S(((w-u)/m*100).toFixed(2)+"%")}"></span>`:"";return`
      <div class="pw-fc-row${O?" is-today":""}">
        <span class="pw-fc-day">${g(D)}</span>
        <span class="pw-fc-icon" aria-hidden="true">${v}</span>
        ${E}
        <span class="pw-fc-bar" aria-label="High ${Math.round(C)}${g(d)}, low ${Math.round(L)}${g(d)}">
          <span class="pw-fc-bar-fill" style="left:${S(A.toFixed(2)+"%")};width:${S(R.toFixed(2)+"%")}"></span>
          ${Z}
        </span>
        <span class="pw-fc-range">
          <span class="pw-fc-lo">${g(String(Math.round(L)))}\xB0</span>
          <span class="pw-fc-hi">${g(String(Math.round(C)))}\xB0</span>
        </span>
      </div>`}).join(""),{condition:b,isNight:$}=st(e,o,r),x=ee(b,$),_=Pa(p,i),T=`
        <div class="pw-fc-list" role="list">
          ${h}
        </div>`;return q({sectionClass:"pw-forecast-v2",ariaLabel:"Seven-day forecast",brandVariant:x,kicker:"the week ahead",narrative:_,body:T,pro:t?.pro!==!1})}var Oe=240,pe=Oe/2,de=Oe/2,Ze=90,Br=.12,ut=6,mt=.5,Ur=.25,Wa=.3,Ba=6,jr=.7,Ua=.2,ja=4,Va=3.3,qa=15,Ga=35,Xa=.08,Ya=.2,Ka=[{l:"N",a:0},{l:"NE",a:45},{l:"E",a:90},{l:"SE",a:135},{l:"S",a:180},{l:"SW",a:225},{l:"W",a:270},{l:"NW",a:315}];function Vr(e){return(e-90)*Math.PI/180}function Za(e){let t=e*Math.PI/180;return{x:Math.sin(t),y:-Math.cos(t)}}function _e(e,t){return{x:pe+t*Math.cos(e),y:de+t*Math.sin(e)}}function Qa(e,t,r,a){let o=Math.min(e/De,1)*Ze,n=_e(t-Ur,o),i=_e(t+Ur,o),l=r>Wa?"pw-gust-sweep":"",c=Math.max(.6,2.5-r*2).toFixed(2),d=(.15+r*.3).toFixed(2),p=`transform-origin:${pe}px ${de}px;--gust-dur:${c}s;--gust-peak:${d}`;return ne("path",{class:l,d:`M${pe},${de} L${n.x.toFixed(1)},${n.y.toFixed(1)} L${i.x.toFixed(1)},${i.y.toFixed(1)} Z`,fill:a,opacity:.15,style:p})}function Ja(e,t,r,a){let o=Math.min(e/De,1)*Ze,n=_e(t,o),i=_e(t-Br,o*.7),l=_e(t+Br,o*.7),c={x:n.x-ut*Math.cos(t-mt),y:n.y-ut*Math.sin(t-mt)},d={x:n.x-ut*Math.cos(t+mt),y:n.y-ut*Math.sin(t+mt)},p=r*Ba,s=Math.max(.4,4-r*3.6),u=p>Ua?`animation:pw-arrowSway ${s.toFixed(2)}s ease-in-out infinite;--sway-fwd:${(p*jr).toFixed(2)}deg;--sway-back:${(-p*(1-jr)).toFixed(2)}deg`:"",f=`transform-origin:${pe}px ${de}px;filter:drop-shadow(0 0 6px ${ye(a,.38)});${u}`,m=ne("path",{d:`M${pe},${de} L${i.x.toFixed(1)},${i.y.toFixed(1)} L${n.x.toFixed(1)},${n.y.toFixed(1)} L${l.x.toFixed(1)},${l.y.toFixed(1)} Z`,fill:a,opacity:.5}),w=ne("line",{x1:pe,y1:de,x2:n.x.toFixed(1),y2:n.y.toFixed(1),stroke:a,"stroke-width":2.5,"stroke-linecap":"round"}),h=ne("path",{d:`M${n.x.toFixed(1)},${n.y.toFixed(1)} L${c.x.toFixed(1)},${c.y.toFixed(1)} L${d.x.toFixed(1)},${d.y.toFixed(1)} Z`,fill:a});return ne("g",{style:f},m+w+h)}function qr({hass:e,config:t,discovery:r,weatherEntity:a}){let o=a.attributes,n=r.atmosCe,i=t.speed_mode||"speed",l=(B,z)=>it(e,n,o,B,z),c=l("wind_speed","wind_speed"),d=l("wind_gusts","wind_gust_speed")||l("wind_gusts","wind_gusts")||c,p=l("wind_direction","wind_bearing"),u=(n.wind_speed?e.states[n.wind_speed]:null)?.attributes?.unit_of_measurement||o.wind_speed_unit||"km/h",f=i==="gust"?d:c,m=Math.min(c/De,1),w=Fr(f),h=Tr(f),b=tt[h]||tt.calm,$=ct(p),x=Vr(p),_=Za(p),T=Math.round(m*rr),k=ja-m*Va,F=Xa+m*Ya,C=qa+m*Ga,L=-_.y,N=_.x,O=[];for(let B=0;B<T;B++){let z=(Math.random()-.5)*400,G=-120-Math.random()*60,ae=420+Math.random()*60,le=(C*(.6+Math.random()*.8)).toFixed(1),ve=(k+Math.random()*k*.5).toFixed(2),He=(Math.random()*3).toFixed(2),Se=(F*(.5+Math.random()*.5)).toFixed(3),Pe=(G*_.x+z*L).toFixed(1),Ce=(G*_.y+z*N).toFixed(1),Ne=(ae*_.x+z*L).toFixed(1),We=(ae*_.y+z*N).toFixed(1);O.push(`<div class="pw-streak" style="left:50%;top:50%;width:${le}px;height:1px;transform:rotate(${p-90}deg);animation-duration:${ve}s;animation-delay:${He}s;opacity:${Se};background:linear-gradient(to right, transparent, ${ye(b,.27)}, transparent);--sx:${Pe}px;--sy:${Ce}px;--ex:${Ne}px;--ey:${We}px"></div>`)}let D=[];for(let B=1;B<=3;B++)D.push(ne("circle",{cx:pe,cy:de,r:B*30,fill:"none",stroke:b,"stroke-width":.5,opacity:.08+B*.02}));for(let B of Ka){let z=Vr(B.a),G=_e(z,20),ae=_e(z,Ze+4),le=_e(z,Ze+16),ve=B.l.length===1;D.push(ne("line",{x1:G.x.toFixed(1),y1:G.y.toFixed(1),x2:ae.x.toFixed(1),y2:ae.y.toFixed(1),stroke:b,"stroke-width":.5,opacity:.12})),D.push(ne("text",{x:le.x.toFixed(1),y:le.y.toFixed(1),"text-anchor":"middle","dominant-baseline":"central",fill:ve?"rgba(255,255,255,0.7)":"rgba(255,255,255,0.3)","font-size":ve?11:9,"font-weight":ve?600:400},g(B.l)))}D.push(Qa(d,x,m,b)),D.push(Ja(f,x,m,b)),(f>De||d>De)&&D.push(ne("circle",{cx:pe,cy:de,r:Ze+2,fill:"none",stroke:"#ff453a","stroke-width":1.5,"stroke-dasharray":"4 4",opacity:.7})),D.push(ne("circle",{cx:pe,cy:de,r:18,fill:b,opacity:.06})),D.push(ne("circle",{cx:pe,cy:de,r:3,fill:b}));let E=m>Et?(m-Et)*5:0,A=Math.max(.15,.4-m*.25),R="";E>.1&&(R=`--dx:${(E*_.x).toFixed(2)}px;--dy:${(E*_.y).toFixed(2)}px;animation:pw-roseShake ${A.toFixed(2)}s ease-in-out infinite`);let Z=Math.round(12+m*50).toString(16).padStart(2,"0"),ue=Math.round(6+m*25).toString(16).padStart(2,"0"),me=Mr(`radial-gradient(ellipse at 50% 50%, ${b}${Z} 0%, ${b}${ue} 40%, transparent 85%)`),ge=ee(a?.state||"sunny",!1),be=i==="gust",$e=be?"wind \xB7 gust":"wind",ke=`
        <div class="pw-wind-streaks">${O.join("")}</div>
        <div class="pw-rose-wrap" style="${R}">
          <svg class="pw-rose-svg" width="${Oe}" height="${Oe}" viewBox="0 0 ${Oe} ${Oe}" style="display:block" role="img" aria-label="Wind compass rose showing ${g(Math.round(f))} ${g(u)} from ${g($)}">
            <title>Wind direction compass</title>
            ${D.join("")}
          </svg>
          <div class="pw-wind-center">
            <div class="pw-wind-speed" style="color: ${S(b)}">${g(Math.round(f))}</div>
            <div class="pw-wind-unit">${g(u)} \xB7 ${g(Math.round(p))}\xB0 ${g($)}</div>
            <div class="pw-wind-beaufort" style="color: ${S(b)}">${g(w.name)}</div>
            <div class="pw-wind-beaufort-desc">${g(w.desc)}</div>
          </div>
        </div>`;return q({sectionClass:"pw-wind-v2",ariaLabel:"Wind compass and speed",brandVariant:ge,kicker:$e,sectionStyle:`background: ${S(me)}`,body:ke,proAction:"wind-mode",proInitial:be,proAriaLabel:"Toggle speed and gust mode",pro:t.pro!==!1})}function eo(e,t,r,a){if(r&&a){let i=(t==="us"?At:Ft).find(l=>l.label.toLowerCase()===r.toLowerCase());return{label:r,color:a,desc:i?.desc||""}}let o=t==="us"?At:Ft;for(let n of o)if(e<=n.max)return n;return o[o.length-1]}function to(e){let t=(e||"").toLowerCase();return t.includes("very unhealthy")||t.includes("hazardous")||t.includes("extremely poor")?"very_unhealthy":t.includes("sensitive")?"unhealthy_sg":t.includes("unhealthy")||t.includes("very poor")?"unhealthy":t.includes("poor")?"unhealthy_sg":t.includes("moderate")||t.includes("fair")?"moderate":t.includes("good")?"good":"unknown"}var Gr=Object.freeze({good:"var(--pw-good-green)",moderate:"var(--pw-warn-yellow)",unhealthy_sg:"var(--pw-warn-amber)",unhealthy:"var(--pw-warn-red)",very_unhealthy:"#8b0000",unknown:"var(--pw-ink-cream)"});function Xr({hass:e,config:t,discovery:r,weatherEntity:a}){let o=t.scale||"eu",n=o==="us"?"us_aqi":"european_aqi",i=t.aqi_entity||r.atmosCe[n];if(!i||!e.states[i])return null;let l=e.states[i],c=Number(l.state);if(!Number.isFinite(c))return null;let d=l.attributes?.category||null,p=l.attributes?.color||null,s=eo(c,o,d,p),u=E=>{let A=r.atmosCe[E];if(!A||!e.states[A])return null;let R=Number(e.states[A].state);return Number.isFinite(R)?R:null},f=u("pm2_5"),m=u("pm10"),w=u("ozone"),h=u("nitrogen_dioxide"),b=u("sulphur_dioxide"),$=u("carbon_monoxide"),x=to(s.label),_=Gr[x]||Gr.unknown,T=ee("cloudy",!1),k=o==="us",C=Math.min(100,Math.max(0,c/(k?300:100)*100)),L=k?"air quality \xB7 us":"air quality",N=y.heroBlock({value:Math.round(c),valueColor:_,tier:s.label,tierFlavor:"aqi",tierColor:_}),O=`
        <div class="pw-aq-band" aria-hidden="true">
          <div class="pw-aq-marker" style="left:${S(`${C.toFixed(2)}%`)}"></div>
        </div>
        <div class="pw-aq-band-labels">
          <span>good</span>
          <span>moderate</span>
          <span>unh sg</span>
          <span>unhealthy</span>
          <span>v.unh</span>
        </div>`,D=y.statsRow([f!==null?y.stat(Math.round(f),"PM2.5",{data:!0}):"",m!==null?y.stat(Math.round(m),"PM10",{data:!0}):"",w!==null?y.stat(Math.round(w),"O\u2083",{data:!0}):"",h!==null?y.stat(Math.round(h),"NO\u2082",{data:!0}):"",b!==null?y.stat(Math.round(b),"SO\u2082",{data:!0}):"",$!==null?y.stat($.toFixed(1),"CO",{data:!0}):""],{columns:3}),v=`
        ${N}
        ${O}
        ${D}`;return q({sectionClass:"pw-air-quality-v2",ariaLabel:"Air quality index",brandVariant:T,kicker:L,body:v,proAction:"aqi-scale",proInitial:k,proAriaLabel:"Toggle EU and US AQI scale",pro:t.pro!==!1})}function ro(e){let t=(e%J+J)%J;return fr[Math.floor(t/J*8)%8]}function ao(e){return(e%J+J)%J<J/2}var Pt=864e5;function oo(e,t,r,a,o){if(a==null)return`<circle cx="${e.toFixed(1)}" cy="${t.toFixed(1)}" r="${r}" fill="#c8d0e0"/>`;let n=Math.max(0,Math.min(1,a/100)),i=o!=null?ao(o):!0,l=`<circle cx="${e.toFixed(1)}" cy="${t.toFixed(1)}" r="${r}" fill="#2a2a3a"/>`;if(n>=.99)l+=`<circle cx="${e.toFixed(1)}" cy="${t.toFixed(1)}" r="${r}" fill="#e8e0d0"/>`;else if(n>.01){let c=t-r,d=t+r,p=(r*Math.abs(2*n-1)).toFixed(1),s=n>.5?1:0,u;i?u=`M${e.toFixed(1)},${c.toFixed(1)} A${r},${r} 0 0 1 ${e.toFixed(1)},${d.toFixed(1)} A${p},${r} 0 0 ${s} ${e.toFixed(1)},${c.toFixed(1)} Z`:u=`M${e.toFixed(1)},${c.toFixed(1)} A${r},${r} 0 0 0 ${e.toFixed(1)},${d.toFixed(1)} A${p},${r} 0 0 ${1-s} ${e.toFixed(1)},${c.toFixed(1)} Z`,l+=`<path d="${u}" fill="#e8e0d0"/>`}return l}var ft="#050510",Yr="#0a1226",Kr="#172b4f",Zr="#1f3d6e",Qr="#3a6fa8",Jr="#d97a3a",ea="#ff9f0a",ta="#ffc560",ra="#7eaedb",aa="#2c5a8e",oa="#ffd60a";function no(e,t,r,a,o,n,i,l,c,d){let p=new Date(e.getTime());p.setHours(0,0,0,0);let s=e.getTime(),u=t.getTime(),f=(r??new Date(s-35*6e4)).getTime(),m=(a??new Date(s-30*6e4)).getTime(),w=(o??new Date(s-6*6e4)).getTime(),h=(n??new Date(s+30*6e4)).getTime(),b=(i??new Date(u-30*6e4)).getTime(),$=(l??new Date(u+6*6e4)).getTime(),x=(c??new Date(u+30*6e4)).getTime(),_=(d??new Date(u+35*6e4)).getTime(),T=(s+u)/2,k=v=>Math.max(0,Math.min(100,v)),F=v=>k((v-p.getTime())/Pt*100),C=(v,E)=>F((v+E)/2),L=Math.min(60,(u-s)/8)*6e4,N=T-L,O=T+L;return`linear-gradient(to right, ${[`${ft} 0%`,`${ft} ${F(f).toFixed(2)}%`,`${Yr} ${C(f,m).toFixed(2)}%`,`${Kr} ${F(m).toFixed(2)}%`,`${Zr} ${C(m,w).toFixed(2)}%`,`${Qr} ${F(w).toFixed(2)}%`,`${Jr} ${C(w,s).toFixed(2)}%`,`${ea} ${F(s).toFixed(2)}%`,`${ta} ${C(s,h).toFixed(2)}%`,`${ra} ${F(h).toFixed(2)}%`,`${aa} ${C(h,N).toFixed(2)}%`,`${oa} ${F(N).toFixed(2)}%`,`${oa} ${F(O).toFixed(2)}%`,`${aa} ${C(O,b).toFixed(2)}%`,`${ra} ${F(b).toFixed(2)}%`,`${ta} ${C(b,u).toFixed(2)}%`,`${ea} ${F(u).toFixed(2)}%`,`${Jr} ${C(u,$).toFixed(2)}%`,`${Qr} ${F($).toFixed(2)}%`,`${Zr} ${C($,x).toFixed(2)}%`,`${Kr} ${F(x).toFixed(2)}%`,`${Yr} ${C(x,_).toFixed(2)}%`,`${ft} ${F(_).toFixed(2)}%`,`${ft} 100%`].join(", ")})`}function na(e){if(!e||isNaN(e)||e<=0)return"--";let t=Math.round(e/6e4),r=Math.floor(t/60),a=t%60;return`${r}h ${String(a).padStart(2,"0")}m`}function ia({hass:e,config:t,discovery:r}){let a=new Date,o=te(e),n=r.sunEntityId?e.states[r.sunEntityId]:null;if(!n)return null;let i=n.attributes||{},l=i.next_rising||i.sunrise,c=i.next_setting||i.sunset;if(!l||!c)return null;let d=new Date(a);d.setHours(12,0,0,0);let p=Y(new Date(l),d),s=Y(new Date(c),d);if(!p||!s||isNaN(p.getTime())||isNaN(s.getTime()))return null;let u=r.atmosCe,f=fe=>u[fe]?new Date(String(e.states[u[fe]]?.state)):null,m=Y(f("golden_hour_morning_start"),p),w=Y(f("golden_hour_morning_end"),p),h=Y(f("blue_hour_morning_start"),p),b=Y(f("golden_hour_evening_start"),s),$=Y(f("golden_hour_evening_end"),s),x=Y(f("blue_hour_evening_end"),s),_=i.next_dawn,T=i.next_dusk,k=_?Y(new Date(_),p):null,F=T?Y(new Date(T),s):null,C=u.moon_phase?e.states[u.moon_phase]:null,L=C?.attributes||{},N=L.moon_age!==void 0?Number(L.moon_age):null,O=L.illumination!==void 0?Number(L.illumination):null,D=N!==null?ro(N):C?.state||null,v=Y(f("moonrise"),a),E=Y(f("moonset"),a),A=a.getTime()>=p.getTime()&&a.getTime()<=s.getTime(),R=H(p,o),Z=H(s,o),ue=(p.getTime()+s.getTime())/2,me=H(new Date(ue),o),ge=s.getTime()-p.getTime(),be=Pt-ge,$e=na(ge),ke=na(be),B=A?"Daylight":"Night",z=A?$e:ke,G=new Date(p.getTime());G.setHours(0,0,0,0);let ae=Math.max(0,Math.min(100,(a.getTime()-G.getTime())/Pt*100)),le=no(p,s,k,h,m,w,b,$,x,F),He=`
      <div class="pw-astro-rb" role="img" aria-label="24-hour sky phase ribbon">
        <div class="pw-astro-rb-track" style="${`background: ${S(le)}`}"></div>
        <div class="pw-astro-rb-now" style="left:${ae.toFixed(2)}%" aria-hidden="true"></div>
        <div class="pw-astro-rb-axis">
          <span>00</span><span>06</span><span>12</span><span>18</span><span>24</span>
        </div>
      </div>`,Se=O!=null?Math.round(O):null,Pe=D||"Moon",Ce=oo(24,24,22,O,N),Ne=Se!==null?`<span class="pw-astro-moon-illum">${g(`${Se}%`)}</span> illuminated`:"",We=N!=null?`${N.toFixed(1)}d old`:"",wt=N!=null?(()=>{let fe=J/2,je=(N%J+J)%J;return`${(je<=fe?fe-je:J-je+fe).toFixed(1)}d to full`})():"",Be=[Ne,We,wt].filter(Boolean).join(" \xB7 "),Me=`
      <div class="pw-astro-moon-hero">
        <div class="pw-astro-moon-glyph" aria-hidden="true">
          <svg viewBox="0 0 48 48" width="48" height="48">${Ce}</svg>
        </div>
        <div class="pw-astro-moon-text">
          <div class="pw-astro-moon-name">${g(Pe)}</div>
          <div class="pw-astro-moon-meta">${Be}</div>
        </div>
      </div>`,Ue=A?`Sun rose ${R}, sets ${Z} \xB7 solar noon ${me}.`:`Sun set ${Z}, rises ${R} \xB7 solar noon ${me}.`,xe=`
      <div class="pw-astro-hero">
        <div class="pw-astro-hero-tier">${g(B)}</div>
        <div class="pw-astro-hero-num">${g(z)}</div>
      </div>
      ${y.narrative(Ue)}`,jt=H(v,o),gt=H(E,o),bt=y.statsRow([y.stat(H(k,o),"civil dawn"),y.stat(H(m,o),"golden start",{valueColor:"var(--pw-warn-amber)"}),y.stat(H(h,o),"blue start",{valueColor:"var(--pw-wind)"}),y.stat(jt,"moonrise")],{columns:4,divided:!0}),vt=y.statsRow([y.stat(H(F,o),"civil dusk"),y.stat(H($,o),"golden end",{valueColor:"var(--pw-warn-amber)"}),y.stat(H(x,o),"blue end",{valueColor:"var(--pw-wind)"}),y.stat(gt,"moonset")],{columns:4,divided:!0}),xt=`
      ${xe}
      ${Me}
      ${He}
      ${bt}
      ${vt}`,yt=ee(A?"sunny":"clear-night",!A),_t=`<div class="pw-fx" data-astro-stars="${!A}" data-astro-day="${A}" role="img" aria-label="Sky atmospheric effects"></div>`;return q({sectionClass:"pw-astro-v2",extraSectionClass:A?"":"is-night",ariaLabel:"Astronomy: sun and moon",brandVariant:yt,kicker:"today's sky",preContent:_t,body:xt,pro:t?.pro!==!1})}var sa=18,io=62,la=168;function so(e){return e.active?0:typeof e.hoursUntil=="number"&&e.hoursUntil>0?e.hoursUntil:0}function ca(e){let t=Math.min(so(e),la)/la;return sa+t*(io-sa)}function Wt(e){let t=`${e.summary||""}|${e.type||""}|${e.endTime||""}`,r=0;for(let a=0;a<t.length;a+=1)r=(r*31+t.charCodeAt(a))%360;return r/360*2*Math.PI}function lo(e,t){let r=e.alert_type||e.type||"wind",a=Number(e.level),o=Number.isFinite(a)&&a>0?a:1,n=cr[Ve(o)],i=lr[r]||"mdi:alert",l=Number(e.progress)||0,c=Array.isArray(e.locations)?e.locations:[],d=e.end_time??"",p=null,s=null,u=!1;if(d==="")u=!0;else if(d){let f=new Date(d),m=new Date,w=f.getTime()-m.getTime();if(w/(1e3*60*60*24)>ir)u=!0;else if(t)p=Math.max(0,w/(1e3*60*60));else{let b=e.start_time||e.datetime;if(b){let $=new Date(String(b));s=Math.max(0,($.getTime()-m.getTime())/(1e3*60*60))}}}return{type:r,icon:i,severity:o,color:n,summary:String(e.headline||e.summary||""),desc:String(e.description||""),active:t,hoursLeft:p,hoursUntil:s,progress:l,locations:c,link:e.link?String(e.link):null,endTime:String(d),isUntilFurtherNotice:u}}function co(e){let t=Ve(e.severity),r="";e.isUntilFurtherNotice?r="UNTIL FURTHER NOTICE":e.active&&e.hoursLeft!==null?r=`${Math.round(e.hoursLeft)}H LEFT`:e.hoursUntil!==null?r=`IN ${Math.round(e.hoursUntil)}H`:e.active&&(r="ACTIVE");let a=String(e.type||"").toUpperCase(),o=String(e.summary||e.desc||"").toUpperCase().trim(),n=e.locations.length>0?e.locations.join(", ").toUpperCase():"",l=[r,a,o,n].filter(Boolean).join(" \xB7 ");return`
    <div class="pw-alert-ticker pw-alert-${t}">
      <span class="pw-alert-tri">\u25B6</span>
      <span class="pw-alert-text">${g(l)}</span>
    </div>`}function pa({hass:e,config:t,discovery:r,proPersisted:a=!1}){let o=[];for(let v of r.alertEntityIds){let A=e.states[v]?.attributes?.all_alerts;if(Array.isArray(A)){for(let R of A)o.push(lo(R,R.active===!0));break}}let n=o.length>0,i=n?o.reduce((v,E)=>E.severity>v.severity?E:v,o[0]).severity:0,l=n?o.reduce((v,E)=>E.severity>v.severity?E:v,o[0]).color:"#30d158",c=Ke(i,0,4),d=n?Math.min(1.5,1+(o.length-1)*.15):1,p=Dr(c,3,1.2).toFixed(2),s=Rr(c).toFixed(2),u=n?Ht(l,c*d):Ht("#30d158",.08),f=140,m=f/2,w=f/2,h=n?{bgInner:i>=4?"#1a0000":i>=3?"#1a0e00":"#1a1500",bgOuter:i>=4?"#0a0000":i>=3?"#0a0500":"#0a0800",ring:S(ye(l,.15)),line:S(ye(l,.08)),sweep:S(ye(l,.4))}:{bgInner:"#001a00",bgOuter:"#000800",ring:"rgba(80,255,0,0.15)",line:"rgba(80,255,0,0.08)",sweep:"rgba(80,255,0,0.35)"},b=o.map(v=>{let E=m+Math.cos(Wt(v))*ca(v),A=w+Math.sin(Wt(v))*ca(v),R=(Wt(v)/(2*Math.PI)*Number(p)).toFixed(2);return v.active?`<div class="pw-radar-blip" style="left:${E.toFixed(1)}px;top:${A.toFixed(1)}px;--pw-blip-color:${S(v.color)};animation-delay:${R}s"></div>`:`<div style="position:absolute;left:${E.toFixed(1)}px;top:${A.toFixed(1)}px;width:4px;height:4px;border-radius:var(--pulse-radius-circle);background:${S(v.color)};opacity:0.2;transform:translate(-50%,-50%)"></div>`}).join(""),$=`
    <div style="display:flex;justify-content:center;padding:12px var(--pulse-space-card-wide);position:relative;z-index:2">
      <div class="pw-radar" style="--pw-radar-bg-inner:${h.bgInner};--pw-radar-bg-outer:${h.bgOuter};--pw-radar-color:${h.ring};--pw-radar-line:${h.line};--pw-radar-sweep:${h.sweep};--pw-radar-dur:${p}s" role="img" aria-label="${n?`${o.length} weather alerts`:"No weather alerts"}">
        ${b}
      </div>
    </div>`,x=(()=>{if(!n)return"";let v=null;for(let E of o){if(E.isUntilFurtherNotice)return"further notice";if(E.endTime){let A=new Date(E.endTime);!isNaN(A.getTime())&&(!v||A>v)&&(v=A)}}return v?ie(v,te(e),{hour:"2-digit",minute:"2-digit",month:"short",day:"numeric",hourCycle:"h23"}):"further notice"})(),_=ee(n?"rainy":"sunny",!1),T=o.map(co).join(""),k=n?"":'<div class="pw-all-clear-v2"><strong>All Clear</strong>no active or upcoming warnings</div>',F=o.length===1?"alert":"alerts",C=n?`<div class="pw-alert-timestamp pw-alert-${Ve(i)}">${o.length} ${F} \xB7 valid through ${g(x)}</div>`:"",L=`<div class="pw-tension-wash${n?" breathing":""}" style="background: ${S(u)}; --breathe-dur: ${s}s"></div>`,N=`
        ${$}
        ${k}
        ${T?`<div class="pw-alert-list">${T}</div>`:""}
        ${C}`,O=o.map(v=>{let E=Ve(v.severity),A=v.summary||v.desc||v.type,R=[];v.isUntilFurtherNotice?R.push("until further notice"):v.active&&v.hoursLeft!==null?R.push(`${Math.round(v.hoursLeft)}h left`):v.hoursUntil!==null&&R.push(`in ${Math.round(v.hoursUntil)}h`),v.severity>0&&R.push(`severity ${v.severity}`),v.type&&R.push(v.type);let Z=R.join(" \xB7 "),ue=v.desc&&v.desc!==v.summary?`<div class="pw-alert-detail-desc">${g(v.desc)}</div>`:"",me=v.locations.length>0?`<div class="pw-alert-detail-loc">${g(v.locations.join(" \xB7 "))}</div>`:"";return`
        <div class="pw-alert-detail pw-alert-${E}">
          <div class="pw-alert-detail-head">${g(A)}</div>
          ${Z?`<div class="pw-alert-detail-meta">${g(Z)}</div>`:""}
          ${ue}
          ${me}
        </div>`}).join(""),D=n?`
        ${$}
        ${k}
        ${O}
        ${C}`:void 0;return q({sectionClass:"pw-alerts-v2",ariaLabel:"Weather alerts",brandVariant:_,kicker:n?`weather alerts (${o.length})`:"no weather alerts",preContent:L,body:N,proView:D,proInitial:a,pro:t?.pro!==!1})}var po=Object.freeze({none:{label:"Stable",color:"#30d158",desc:"No thunderstorm risk"},marginal:{label:"Marginal",color:"#ffd60a",desc:"Isolated storms possible"},slight:{label:"Slight",color:"#ff9f0a",desc:"Brief storms possible"},enhanced:{label:"Enhanced",color:"#ff6b35",desc:"Organized storms likely"},moderate:{label:"Moderate",color:"#ff453a",desc:"Severe storms expected"},high:{label:"Extreme",color:"#8b0000",desc:"Dangerous storm potential"},unknown:{label:"Unknown",color:"#888888",desc:"Insufficient data"}}),uo=Object.freeze({none:5,marginal:20,slight:40,enhanced:60,moderate:80,high:100,unknown:0});function mo(e,t){let r=Math.min(100,e/4e3*100),a=Math.min(100,Math.max(0,(6-t)/12*100));return Math.round(r*.6+a*.4)}function fo(e){return e<=10?{tierKey:"none",label:"Stable",color:"#30d158",desc:"No thunderstorm risk"}:e<=30?{tierKey:"marginal",label:"Marginal",color:"#ffd60a",desc:"Isolated storms possible"}:e<=55?{tierKey:"slight",label:"Moderate",color:"#ff9f0a",desc:"Scattered storms likely"}:e<=80?{tierKey:"moderate",label:"High",color:"#ff453a",desc:"Severe storms expected"}:{tierKey:"high",label:"Extreme",color:"#8b0000",desc:"Dangerous storm potential"}}function ho(e,t){let r=t.atmosCe,a=r.cape&&e.states[r.cape]?Number(e.states[r.cape].state):NaN,o=r.lifted_index&&e.states[r.lifted_index]?Number(e.states[r.lifted_index].state):NaN,n=Number.isFinite(a),i=Number.isFinite(o),l=n?a:0,c=i?o:0,d=n||i?mo(l,c):null;if(r.stability_assessment&&e.states[r.stability_assessment]){let s=e.states[r.stability_assessment].state,u=e.states[r.stability_assessment].attributes||{},f=po[s];if(f){let m=uo[s]??0;return{tierKey:s,...f,score:m,source:"composite",attrs:u,capeValue:l,liValue:c,hasCape:n,hasLI:i}}}let p=d!==null?fo(d):null;return{tierKey:p?.tierKey||"unknown",label:p?.label||"Unknown",color:p?.color||"#888888",desc:p?.desc||"",score:d,source:"fallback",attrs:null,capeValue:l,liValue:c,hasCape:n,hasLI:i}}function wo(e){return Math.max(0,Math.min(100,e))}function da(e,t=5e3){return t<=0?0:Math.max(0,Math.min(100,e/t*100))}function go(e,t){let n=Math.max(e,t),i=5e3;n>5e3*.8&&(i=Math.max(5e3,Math.ceil(n*1.25/1e3)*1e3));let l=Math.ceil(i/5e3)*1e3;i=Math.ceil(i/l)*l;let c=[];for(let d=i;d>=0;d-=l)c.push(d);return{scaleMax:i,labelInterval:l,labels:c}}var bo=Object.freeze({none:0,unknown:0,marginal:1,slight:2,enhanced:3,moderate:4,high:5});function vo(e){if(!e)return null;let t=r=>bo[String(e[r]||"none")]??0;return{maxThermal:Math.max(t("cape_tier"),t("lifted_index_tier"),t("lapse_rate_tier")),shearTier:t("wind_shear_tier")}}function xo({tierKey:e,tierDesc:t,hourly:r,now:a,todaySunset:o,attrs:n,timeZone:i}){if(e==="none"||e==="unknown")return"Atmosphere settled \xB7 no convective signals";let l=vo(n);if(l&&l.maxThermal===0&&l.shearTier>=2)return"Wind shear elevated \xB7 atmosphere thermally quiet";let c=o&&!isNaN(o.getTime())?o.getTime():null,d=a.getTime(),p=c!==null&&d>=c,s=Array.isArray(r)?r.slice(0,6):[],u=s.map(x=>Number(x&&x.cape)||0),f=u.some(x=>Number.isFinite(x)&&x>0),m=null,w=null;if(f){let x=Math.max(...u);if(x>0){let _=s[u.indexOf(x)],T=_?_.datetime:null,k=T?new Date(String(T)):null;k&&!isNaN(k.getTime())&&(m=H(k,i),w=k.getTime())}}if(m===null||w===null){let x=t||"Storm risk active";return p?`${x} \xB7 calming overnight`:x}let h=1800*1e3,b=w<d-h,$=w>=d-h&&w<=d+h;return b?p?`Storm risk easing \u2014 peaked ${m}, calming overnight`:`Storm risk easing \u2014 peaked ${m}`:$?p?"Storm risk peaking now, calming overnight":c!==null?"Storm risk peaking now, calming after sunset":"Storm risk peaking now":c!==null&&w<c?`Storm risk peaks ${m}, calming after sunset`:c!==null?`Storm risk peaks ${m} (after sunset)`:`Storm risk peaks ${m}`}var oi=Object.freeze([Object.freeze({max:30,tier:"none"}),Object.freeze({max:40,tier:"marginal"}),Object.freeze({max:50,tier:"slight"}),Object.freeze({max:60,tier:"enhanced"}),Object.freeze({max:75,tier:"moderate"})]);var ni=Object.freeze([Object.freeze({max:6,tier:"none"}),Object.freeze({max:6.5,tier:"marginal"}),Object.freeze({max:7.5,tier:"slight"}),Object.freeze({max:8,tier:"enhanced"}),Object.freeze({max:9,tier:"moderate"})]);function yo(e){let t=Math.max(0,Math.min(100,e)),r=t/100;return{count:t<=10?0:Math.round(2+r*6),minSize:2+Math.round(r),maxSize:3+Math.round(r),minDur:4-r*2.2,maxDur:4-r*1.2}}function ua(e,t,r=Math.random){let a=document.createDocumentFragment(),o=yo(e);if(o.count===0)return a;let n=S(t);for(let i=0;i<o.count;i++){let l=document.createElement("div");l.className="pw-thermal-particle";let c=o.minSize+r()*(o.maxSize-o.minSize),d=10+r()*80,p=r()*30,s=o.minDur+r()*(o.maxDur-o.minDur),u=r()*s,f=.4+r()*.3,m=-(50+r()*60);l.setAttribute("style",[`width:${c.toFixed(1)}px`,`height:${c.toFixed(1)}px`,`left:${d.toFixed(1)}%`,`bottom:${p.toFixed(1)}%`,`background:${n}`,`--rise-dur:${s.toFixed(2)}s`,`--rise-dist:${m.toFixed(0)}px`,`--peak-op:${f.toFixed(2)}`,`animation-delay:${u.toFixed(2)}s`].join(";")),a.appendChild(l)}return a}function ma({hass:e,config:t,discovery:r,forecastData:a}){let o=r.atmosCe;if(!o.cape&&!o.lifted_index&&!o.freezing_level_height)return console.debug(`${ce} Atmosphere section requires Atmos CE sensors (cape / lifted_index / freezing_level_height) \u2014 section skipped. Install Atmos CE integration if you want the atmospheric stability column.`),null;let n=ho(e,r),{capeValue:i,liValue:l,hasCape:c,hasLI:d,score:p}=n,s=z=>{let G=o[z];if(!G||!e.states[G])return{value:null,unit:""};let ae=Number(e.states[G].state);if(!Number.isFinite(ae))return{value:null,unit:""};let le=String(e.states[G].attributes?.unit_of_measurement||"");return{value:ae,unit:le}},u=s("wind_shear_0_6_km"),f=s("lapse_rate_700_500_hpa"),m=s("freezing_level_height"),w=s("lcl_height"),h=n.tierKey,b={label:n.label,color:n.color,desc:n.desc},x=["slight","enhanced","moderate","high"].includes(h)?"rain":"cloudy",_=new Date,T=r.sunEntityId?e.states[r.sunEntityId]:null,{todaySunset:k}=Ie(_,T?.attributes?.next_rising,T?.attributes?.next_setting),F=xo({tierKey:h,tierDesc:b.desc,hourly:a?.hourly||[],now:_,todaySunset:k,attrs:n.attrs,timeZone:te(e)}),C=m.value??0,L=w.value??0,{scaleMax:N,labels:O}=go(C,L),D=p!==null?wo(p):0,v=b.color,E=c||d?`
          <div class="pw-atmos-cape-fill" style="height:${Number(D)}%;background:linear-gradient(to top, ${S(v)}66, ${S(v)}11)"></div>`:"",A=m.unit||"m",R=m.value!==null?(()=>{let z=da(m.value,N);return`
          <div class="pw-atmos-freeze-marker" style="bottom:${Number(z)}%">
            <span class="pw-atmos-freeze-label">\u2744 ${g(String(Math.round(m.value)))}${g(A)}</span>
            <div class="pw-atmos-freeze-line"></div>
          </div>`})():"",Z=w.unit||"m",ue=w.value!==null?(()=>{let z=da(w.value,N);return`
          <div class="pw-atmos-lcl-marker" style="bottom:${Number(z)}%">
            <span class="pw-atmos-lcl-label">\u2601 LCL ${g(String(Math.round(w.value)))}${g(Z)}</span>
            <div class="pw-atmos-lcl-line"></div>
          </div>`})():"",ge=`
        <div class="pw-atmos-column-wrap">
          <div class="pw-atmos-scale">${O.map(z=>`<span class="pw-atmos-scale-label">${z>=1e3?`${z/1e3}km`:String(z)}</span>`).join("")}</div>
          <div class="pw-atmos-column">
            ${E}
            ${R}
            ${ue}
            <div class="pw-atmos-ground-label">surface</div>
          </div>
        </div>`,be=y.heroBlock({tier:b.label,tierFlavor:"atmos",tierColor:"var(--pw-vermilion)",narrative:F}),$e=[c?y.stat(`${Math.round(i)}`,"cape J/kg"):"",d?y.stat(l.toFixed(1),"lifted idx"):"",u.value!==null?y.stat(`${Math.round(u.value)}`,`shear ${u.unit||"km/h"}`):"",f.value!==null?y.stat(f.value.toFixed(1),`lapse ${f.unit||"\xB0C/km"}`):""],ke=y.statsRow($e,{columns:4,divided:!0}),B=`
        ${be}
        ${ge}
        ${ke}`;return q({sectionClass:"pw-atmosphere-v2",ariaLabel:"Atmospheric stability",brandVariant:x,kicker:"atmospheric stability",body:B,pro:t?.pro!==!1})}var se=600,_o=280,ht=8,Bt=80,ze=200,Qe=220,$o=254,fa=12,ko=30,So=.9,Mo=3;function Ee(e,t){return t<=1?se/2:ht+e/(t-1)*(se-2*ht)}function ha(e,t,r){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(r))return(Bt+ze)/2;let a=r-t||1;return Bt+(r-e)/a*(ze-Bt)}function To(e,t){let r=new Date(e);return ie(r,t,{hour:"2-digit",hourCycle:"h23"})}var Fo=500;function Ao(e,t=24,r){if(!Array.isArray(e))return null;let a=e.slice(0,Fo),n=lt(a,new Date).slice(0,t);if(n.length<2)return null;let i=n[0],l="cloud_cover"in i,c="cloud_cover_low"in i&&"cloud_cover_mid"in i&&"cloud_cover_high"in i,d="wind_speed"in i&&("wind_bearing"in i||"wind_direction"in i),p=n.map(h=>{let b=Number(h.temperature),$=V(h.precipitation_probability,0),x=V(h.snowfall,0),_=V(h.rain,0),T=V(h.showers,0),k=String(h.condition||""),F=x>0||k==="snowy"||k==="snowy-rainy"?"snow":"rain",C=F==="snow"?x:_+T;return{temp:b,precip:$,precipMm:C,precipType:F,condition:k,cloudCover:l?V(h.cloud_cover,0):null,cloudLow:c?V(h.cloud_cover_low,0):null,cloudMid:c?V(h.cloud_cover_mid,0):null,cloudHigh:c?V(h.cloud_cover_high,0):null,windSpeed:d?V(h.wind_speed,0):null,windBearing:d?V(h.wind_bearing??h.wind_direction,0):null,timeLabel:To(String(h.datetime||""),r),datetime:String(h.datetime||"")}}),s=kr(p,h=>h.temp);if(s.length<2)return null;let u=s.map(h=>h.temp),f=Math.min(...u),m=Math.max(...u),w=Math.max(...s.map(h=>h.precipMm),0);return{points:s,n:s.length,min:f,max:m,minIdx:u.indexOf(f),maxIdx:u.indexOf(m),maxPrecipMm:w,hasCloud:l,hasLayeredCloud:c,hasWind:d}}function Eo(e){let{points:t,n:r,hasLayeredCloud:a}=e;if(r<=0)return"";let o=r>1?(se-2*ht)/(r-1)/2:se/2,n="";for(let i=0;i<r;i++){let l=Ee(i,r),c=i===0?0:l-o,p=(i===r-1?se:l+o)-c,s=c/se*100,u=p/se*100,f;if(a){let m=(Number(t[i].cloudHigh)||0)/100*.06,w=(Number(t[i].cloudMid)||0)/100*.08,h=(Number(t[i].cloudLow)||0)/100*.1;f=Math.min(m+w+h,.15)}else f=(Number(t[i].cloudCover)||0)/100*.12;f<=0||(n+=`<div class="pw-meteogram-cloud-slot" style="left:${s.toFixed(2)}%;width:${u.toFixed(2)}%;opacity:${f.toFixed(3)}"></div>`)}return n?`<div class="pw-meteogram-cloud-bg" aria-hidden="true">${n}</div>`:""}function Co(e){let{points:t,n:r,maxPrecipMm:a}=e,o=Qe-ze,n=(se-2*ht)/(r-1)*So,i=a>0,l=i?Math.max(a,2):100,c="";for(let d=0;d<r;d++){let{precipMm:p,precip:s,precipType:u}=t[d],f=i?p:s;if(f<=0)continue;let m=f/l*o,w=Ee(d,r)-n/2,h=n;w<0&&(h+=w,w=0),w+h>se&&(h=se-w);let b=Qe-m,$=u==="snow"?"rgba(200,220,240,0.45)":"color-mix(in srgb, var(--pw-wind) 40%, transparent)";c+=`<rect x="${w.toFixed(1)}" y="${b.toFixed(1)}" width="${h.toFixed(1)}" height="${m.toFixed(1)}" fill="${$}" rx="1"/>`}return c}function No(e){let{points:t,n:r,maxPrecipMm:a}=e,o=Qe-ze,n=a>0,i=n?Math.max(a,2):100,l="";for(let c=0;c<r;c++){let{precipMm:d,precip:p}=t[c],s=n?d:p;if(s<=0)continue;let u=Ee(c,r),f=s/i*o,m=Qe-f-2,w=n?d>=10?String(Math.round(d)):d.toFixed(1):`${Math.round(p)}%`;l+=`<text x="${u.toFixed(1)}" y="${m.toFixed(1)}" text-anchor="middle" fill="color-mix(in srgb, var(--pw-wind) 90%, transparent)" font-size="13" font-weight="600">${g(w)}</text>`}return l}function Ro(e){let{points:t,n:r,min:a,max:o}=e,n=t.map(f=>parseFloat(f.temp.toFixed(1))),i=t.map((f,m)=>({x:Ee(m,r),y:ha(n[m],a,o)})),l=i.map((f,m)=>`${m===0?"M":"L"}${f.x.toFixed(1)},${f.y.toFixed(1)}`).join(" "),c=`${l} L${i[i.length-1].x.toFixed(1)},${ze} L${i[0].x.toFixed(1)},${ze} Z`,d=Xe("pw-meteogram-grad"),p=It(o),s=It(a),u=`<defs><linearGradient id="${d}" x1="0" y1="0" x2="0" y2="1">`;return u+=`<stop offset="0%" stop-color="${S(p)}" stop-opacity="0.25"/>`,u+=`<stop offset="100%" stop-color="${S(s)}" stop-opacity="0.03"/>`,u+="</linearGradient></defs>",u+=`<path d="${c}" fill="url(#${d})"/>`,u+=`<path d="${l}" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`,u}function Lo(e){let{points:t,n:r}=e,a="";for(let o=0;o<r;o+=Mo){let n=Ee(o,r);a+=`<text x="${n.toFixed(1)}" y="${$o}" text-anchor="middle" fill="var(--pw-ink-cream-dim)" font-size="15" font-weight="600">${g(t[o].timeLabel)}</text>`}return a}function Do(e,t,r,a){let o=r/1.852,n=((a+180)%360-90+360)%360,i=Math.round(o/5)*5,l=Math.floor(i/50);i-=l*50;let c=Math.floor(i/10);i-=c*10;let d=Math.floor(i/5),p=18,s="var(--pw-ink-cream-muted)",u="",f=-p;for(let m=0;m<l;m++)u+=`<polygon points="0,${f.toFixed(1)} 9,${(f+3).toFixed(1)} 0,${(f+6).toFixed(1)}" fill="${s}"/>`,f+=6;for(let m=0;m<c;m++)u+=`<line x1="0" y1="${f.toFixed(1)}" x2="9" y2="${(f+4.5).toFixed(1)}" stroke="${s}" stroke-width="1.4" stroke-linecap="round"/>`,f+=4.5;for(let m=0;m<d;m++)u+=`<line x1="0" y1="${f.toFixed(1)}" x2="4.5" y2="${(f+2.25).toFixed(1)}" stroke="${s}" stroke-width="1.4" stroke-linecap="round"/>`;return`<g transform="translate(${e.toFixed(1)},${t}) rotate(${n})"><line x1="0" y1="0" x2="0" y2="${-p}" stroke="${s}" stroke-width="1.4" stroke-linecap="round"/>${u}</g>`}function Io(e){let{points:t,n:r,min:a,max:o,minIdx:n,maxIdx:i}=e,l=0,c=1,d=2,p="";for(let s=0;s<r;s++){let u=s===n||s===i,f=u?l:s%3,m=Ee(s,r),w=ha(t[s].temp,a,o);if(f===l){let h=t[s].temp,b=u?String(Math.round(h)):h.toFixed(1),$=s===n?"var(--pw-wind)":s===i?"var(--pw-vermilion)":"var(--pw-ink-cream)",x=u?17:15,_=w-fa;p+=`<text x="${m.toFixed(1)}" y="${_.toFixed(1)}" text-anchor="middle" fill="${$}" font-size="${x}" font-weight="600">${b}\xB0</text>`}else if(f===c){let h=pt(t[s].condition),b=w-fa;p+=`<text x="${m.toFixed(1)}" y="${b.toFixed(1)}" text-anchor="middle" font-size="20">${h}</text>`}else if(f===d){let h=Number(t[s].windSpeed),b=Number(t[s].windBearing);if(!Number.isFinite(h)||h<1||!Number.isFinite(b))continue;let $=w-ko;p+=Do(m,$,h,b)}}return p}function wa({hass:e,config:t,forecastData:r}){let a=r?.hourly||[];if(a.length<2)return null;let o=te(e),n=Number(t.hours),i=t.horizon==="long"?"long":"short",l=Number.isFinite(n)&&n>0?Math.max(4,Math.min(48,n)):i==="long"?24:12,c=Ao(a,l,o);if(!c)return null;let p=(t.show_cloud==="auto"||t.show_cloud===void 0?c.hasCloud:!!t.show_cloud)&&c.hasCloud?Eo(c):"",s=ee(c.points[0]?.condition||"sunny",!1),u=[];u.push(Co(c)),u.push(No(c)),u.push(Ro(c)),u.push(Io(c));let f=Ee(0,c.n).toFixed(1);u.push(`<line x1="${f}" y1="0" x2="${f}" y2="${Qe}" stroke="var(--pw-vermilion)" stroke-width="0.8" stroke-dasharray="2 3" opacity="0.7"/>`),u.push(Lo(c));let m=c.n,w=`${m}-hour meteogram showing temperature, condition, wind, and precipitation`,h=m<=12?"next twelve hours":`next ${m===24?"twenty-four":m} hours`,b=Xe("pw-meteogram-title"),$=`
        <div class="pw-meteogram-chart" aria-labelledby="${b}">
          <svg viewBox="0 0 ${se} ${_o}" style="width:100%; height:auto" role="img" aria-label="${g(w)}">
            <title id="${b}">${g(w)}</title>
            ${u.join(`
`)}
          </svg>
        </div>`;return q({sectionClass:"pw-meteogram-v2",ariaLabel:w,brandVariant:s,kicker:h,preContent:p,body:$,proAction:"meteo-horizon",proInitial:l>=18,proAriaLabel:"Toggle 12-hour and 24-hour view",pro:t.pro!==!1})}var Oo={overview:Pr,forecast:Wr,wind:qr,air_quality:Xr,astro:ia,alerts:pa,atmosphere:ma,meteogram:wa},Ut=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._lastWeatherState=null,this._atmosExpanded=!1,this._forecastData=null,this._forecastLastFetch=0,this._subscribedEntityId=null,this._atmosConfigEntryId=null,this._discovery=null,this._forecastFetching=!1,this._phaseTimer=null,this._countdownTimer=null,this._minuteTimer=null,this._warnedMissingEntity=null,this._warnedMissingAtmosCe=null,this._proState={}}setConfig(t){if(!t)throw new Error("Invalid configuration");this._cleanupTimers(),this._config=br(t),this._warnedMissingEntity=null,this._warnedMissingAtmosCe=null,this._discovery=null,this._proState={},this._hass&&this._fullRender()}_getDiscovery(){let t=this._discovery?.weatherEntityId;return(!this._discovery||t&&!(t in this._hass.states))&&(this._discovery=_r(this._hass.states,this._config)),this._discovery}_getCeFingerprint(t){let r=this._getDiscovery(),a=r.atmosCe,o=[];for(let n of Object.keys(a)){let i=a[n],l=t.states[i];l&&o.push(`${n}=${l.state}`)}for(let n of r.alertEntityIds){let i=t.states[n];i&&o.push(`${n}=${i.state}`)}return o.join("|")}_warnIfAtmosCeMissing(t,r){let a=new Set(["atmosphere","air_quality","meteogram"]);if(!t.some(c=>a.has(c.type))||Object.keys(r.atmosCe).length>0)return;let n=this._config,i=n.atmos_source||Dt(r.weatherEntityId||"");if(this._warnedMissingAtmosCe===i)return;this._warnedMissingAtmosCe=i;let l=n.atmos_source?`Set atmos_source matches no sensor.${i}_* entities \u2014 check the slug.`:`Derived slug "${i}" matches no sensor.${i}_* entities. If you renamed your weather entity after installing Atmos CE, set atmos_source manually in the card config.`;console.warn(`${ce} atmosphere / air_quality / meteogram sections configured but no Atmos CE sensors discovered. ${l}`)}_cleanupTimers(){this._phaseTimer&&(clearTimeout(this._phaseTimer),this._phaseTimer=null),this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null),this._minuteTimer&&(clearInterval(this._minuteTimer),this._minuteTimer=null)}set hass(t){if(this._hass=t,!this._config)return;let r=this._config.weather_entity,a=r||Object.keys(t.states).find(c=>c.startsWith("weather."))||"",o=t.states[a];if(!o){r&&this._warnedMissingEntity!==r&&(console.warn(`${ce} weather_entity "${r}" not found in hass.states. Check the entity_id in your card config (likely a typo, or the integration was removed).`),this._warnedMissingEntity=r);return}let n=this._getCeFingerprint(t),i=`${o.state}|${JSON.stringify(o.attributes)}|${n}`;i!==this._lastWeatherState&&(this._lastWeatherState=i,this._fullRender()),this._subscribeForecast(t,a)}async _subscribeForecast(t,r){let a=Date.now()-this._forecastLastFetch>=Nt;if(!(this._subscribedEntityId===r&&this._forecastData&&!a)&&!this._forecastFetching){this._forecastFetching=!0,this._subscribedEntityId=r;try{if(!t.callWS)return;let o=null;if(this._discovery?.atmosSource)try{if(!this._atmosConfigEntryId){let s=(await t.callWS({type:"config/entity_registry/list"}).catch(()=>[])).find(u=>u.platform==="atmos_ce");this._atmosConfigEntryId=s?.config_entry_id||null}if(this._atmosConfigEntryId){let u=(await t.callWS({type:"call_service",domain:"atmos_ce",service:"get_extended_forecast",service_data:{config_entry_id:this._atmosConfigEntryId,type:"hourly"},return_response:!0}).catch(()=>null))?.response;u?.forecast&&(o=u.forecast)}}catch(p){console.debug(`${ce} extended forecast fetch failed, falling back to standard hourly`,p)}let n=null;r&&t.states[r]&&(n=await t.callWS({type:"call_service",domain:"weather",service:"get_forecasts",target:{entity_id:r},service_data:{type:"daily"},return_response:!0}).catch(()=>null));let i=null;!o&&r&&t.states[r]&&(i=(await t.callWS({type:"call_service",domain:"weather",service:"get_forecasts",target:{entity_id:r},service_data:{type:"hourly"},return_response:!0}).catch(()=>null))?.response?.[r]?.forecast||[]);let d=n?.response?.[r];this._forecastData={hourly:o||i||[],daily:d?.forecast||[]},this._forecastLastFetch=Date.now(),this._fullRender()}catch(o){console.warn(`${ce} forecast fetch failed; retries throttled to ${Nt/1e3}s. Inspect the error below to diagnose. Common causes: weather entity offline, integration disabled, network failure.`,o),this._forecastLastFetch=Date.now()}finally{this._forecastFetching=!1}}}_unsubscribeForecasts(){this._subscribedEntityId=null,this._forecastLastFetch=0}disconnectedCallback(){this._unsubscribeForecasts(),this._cleanupTimers()}_fullRender(){if(!this._hass||!this._config||!this.shadowRoot)return;let t=this._getDiscovery(),r=this._hass.states[t.weatherEntityId];if(!r)return;let a=["<style>",wr,"</style>",'<div class="pw-card">'],o=this._config.sections||[];this._warnIfAtmosCeMissing(o,t);for(let n=0;n<o.length;n++){let i=o[n],l=Oo[i.type];if(l)try{let c=l({hass:this._hass,config:i,discovery:t,weatherEntity:r,forecastData:this._forecastData,sectionIndex:n,proPersisted:!!this._proState[n]});c&&a.push(c)}catch(c){console.warn(`${ce} section "${i?.type}" renderer threw \u2014 section will be skipped, other sections continue. Please share the error below when reporting.`,c)}}a.push("</div>"),this.shadowRoot.innerHTML=a.join(""),this._postRender(t),this._schedulePhaseTransition(),this._minuteTimer||(this._minuteTimer=setInterval(()=>{this._lastWeatherState=null,this._hass&&this._fullRender()},6e4)),this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null),this.shadowRoot.querySelector(".pw-astro-countdown")&&(this._countdownTimer=setInterval(()=>{let n=this.shadowRoot?.querySelector(".pw-astro-countdown");if(!n){clearInterval(this._countdownTimer),this._countdownTimer=null;return}let i=Number(n.dataset.target)-Date.now();if(i<=0){clearInterval(this._countdownTimer),this._countdownTimer=null,this._lastWeatherState=null,this._fullRender();return}let l=Math.floor(i/1e3),c=Math.floor(l/3600),d=Math.floor(l%3600/60),p=l%60;n.textContent=(c>0?c+"h "+d+"m":d+"m "+p+"s")+(n.dataset.suffix||"")},1e3))}_schedulePhaseTransition(){if(this._phaseTimer&&(clearTimeout(this._phaseTimer),this._phaseTimer=null),!this._hass||!this._config)return;let t=this._getDiscovery(),r=t.atmosCe,a=this._hass.states[t.sunEntityId||""];if(!a)return;let o=new Date,n=o.getTime(),i=[],l=a.attributes?.next_rising,c=a.attributes?.next_setting,{todaySunrise:d,todaySunset:p}=Ie(o,l,c),s=a.attributes?.next_rising?new Date(a.attributes.next_rising).getTime():NaN,u=a.attributes?.next_setting?new Date(a.attributes.next_setting).getTime():NaN;Number.isFinite(s)&&s>n&&i.push(s),Number.isFinite(u)&&u>n&&i.push(u);let f={golden_hour_morning_start:d,golden_hour_morning_end:d,blue_hour_morning_start:d,blue_hour_morning_end:d,golden_hour_evening_start:p,golden_hour_evening_end:p,blue_hour_evening_start:p,blue_hour_evening_end:p};for(let[h,b]of Object.entries(f)){if(!r[h])continue;let $=new Date(String(this._hass.states[r[h]]?.state||""));if(isNaN($.getTime()))continue;let x=Y($,b);if(!x)continue;let _=x.getTime();_>n&&i.push(_);let T=_+864e5;T>n&&i.push(T)}if(i.length===0)return;let w=Math.min(...i)-n+1e3;this._phaseTimer=setTimeout(()=>{this._phaseTimer=null,this._lastWeatherState=null,this._hass&&this._fullRender()},w)}_postRender(t){if(!this.shadowRoot||!this._hass)return;let r=qe(),a=r?[]:this.shadowRoot.querySelectorAll(".pw-fx[data-condition]");for(let s of a){let u=s.getAttribute("data-condition")||"",f=s.getAttribute("data-night")==="true",m=null;try{let h=s.getAttribute("data-cloud");h&&h!=='""'&&h!==""&&(m=JSON.parse(h))}catch{}let w=Nr(u,f,m);s.replaceChildren(w)}let o=this.shadowRoot.querySelectorAll(".pw-aqi[data-pm25]");for(let s of o){let u=Number(s.getAttribute("data-pm25"))||0,f=Number(s.getAttribute("data-pm10"))||0,m=s.querySelector(".pw-fx");if(m&&(u>0||f>0)){let w=document.createDocumentFragment();Cr(w,u,f),m.replaceChildren(w)}}let n=r?[]:this.shadowRoot.querySelectorAll(".pw-fx[data-astro-stars]");for(let s of n){let u=s.getAttribute("data-astro-stars")==="true",f=s.getAttribute("data-astro-day")==="true",m=document.createDocumentFragment();u&&zt(m),f&&(K(m,3,.5),dt(m)),s.replaceChildren(m)}let i=r?[]:this.shadowRoot.querySelectorAll(".pw-atmos-fx[data-atmos-score]");for(let s of i){let u=Number(s.getAttribute("data-atmos-score"))||0,f=s.getAttribute("data-atmos-color")||"#30d158",m=ua(u,f);s.replaceChildren(m)}let l=[...this.shadowRoot.querySelectorAll(".pw-section")],c=this.shadowRoot.querySelectorAll("button.pw-brand-mark-corner");for(let s of c)s.addEventListener("click",u=>{let f=u.currentTarget,m=f.closest(".pw-section");if(!m||!this._config)return;let w=l.indexOf(m);if(w<0)return;let h=m.dataset.proAction||"view-swap";if(h==="wind-mode"||h==="meteo-horizon"||h==="aqi-scale"){let $=(this._config.sections||[]).map((_,T)=>T===w?{..._}:_),x=$[w];if(!x)return;if(h==="wind-mode"&&x.type==="wind")x.speed_mode=x.speed_mode==="gust"?"speed":"gust";else if(h==="meteo-horizon"&&x.type==="meteogram"){let _=Number(x.hours),T=Number.isFinite(_)&&_>0?_>=18:x.horizon==="long";x.horizon=T?"short":"long","hours"in x&&delete x.hours}else h==="aqi-scale"&&x.type==="air_quality"&&(x.scale=x.scale==="us"?"eu":"us");this._config={...this._config,sections:$},this._fullRender();return}let b=m.dataset.pro==="true"?"false":"true";m.dataset.pro=b,f.setAttribute("aria-pressed",b),this._proState[w]=b==="true"});let d=this.shadowRoot.querySelectorAll(".pw-hourly-strip");for(let s of d){let u=!1,f=0,m=0,w=s;w.setAttribute("tabindex","0"),w.setAttribute("role","group"),w.hasAttribute("aria-label")||w.setAttribute("aria-label","Hourly forecast, scrollable"),s.addEventListener("mousedown",h=>{u=!0,f=h.pageX-s.offsetLeft,m=s.scrollLeft,s.style.cursor="grabbing"}),s.addEventListener("mouseleave",()=>{u=!1,s.style.cursor=""}),s.addEventListener("mouseup",()=>{u=!1,s.style.cursor=""}),s.addEventListener("mousemove",h=>{if(!u)return;h.preventDefault();let b=h.pageX-s.offsetLeft;s.scrollLeft=m-(b-f)}),s.addEventListener("touchstart",h=>{h.stopPropagation()},{passive:!0}),s.addEventListener("touchmove",h=>{h.stopPropagation()},{passive:!0}),s.addEventListener("wheel",h=>{let b=h;Math.abs(b.deltaX)<Math.abs(b.deltaY)&&(h.preventDefault(),s.scrollLeft+=b.deltaY)},{passive:!1})}let p=this.shadowRoot.querySelector(".pw-atmos-column-wrap[data-has-detail]");if(p){let s=this.shadowRoot.querySelector(".pw-atmos-detail");if(s){this._atmosExpanded&&(s.style.maxHeight=`${s.scrollHeight}px`,p.setAttribute("aria-expanded","true"));let u=()=>{this._atmosExpanded=!this._atmosExpanded,this._atmosExpanded?(s.style.maxHeight=`${s.scrollHeight}px`,p.setAttribute("aria-expanded","true")):(s.style.maxHeight="0",p.setAttribute("aria-expanded","false"))};yr(p,u),p.hasAttribute("aria-expanded")||p.setAttribute("aria-expanded","false"),p.addEventListener("click",u)}}}getCardSize(){let t=this._config?.sections?.length||1;return Math.max(3,t*3)}getGridOptions(){return vr(6)}static async getConfigElement(){return await import("./pulse-weather-card-editor.js"),document.createElement(er)}static getStubConfig(t){let r=Object.keys(t.states).find(a=>a.startsWith("weather."));return{type:`custom:${Le}`,weather_entity:r||"weather.home",sections:[{type:"overview"}]}}};customElements.get(Le)||(customElements.define(Le,Ut),console.info(`%c ${Le.toUpperCase()} %c v${Jt} `,"background:#5ac8fa;color:#000;font-weight:bold","background:#333;color:#fff"));window.customCards=window.customCards||[];window.customCards.push({type:Le,name:"Pulse Weather Card",description:"Weather visualization with atmospheric effects, forecasts, wind rose, and more",preview:!0});export{Ut as PulseWeatherCard};
