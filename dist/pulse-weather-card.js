var ua="0.1.1",He="pulse-weather-card",ma="pulse-weather-card-editor",we="Pulse Weather Card:",fa=["overview","forecast","wind","air_quality","astro","alerts","atmosphere","meteogram"],We={calm:"#5ac8fa",moderate:"#30d158",strong:"#ff9f0a",gale:"#ff453a"},pt=[{max:5,color:"#5ac8fa"},{max:12,color:"#30d158"},{max:18,color:"#ff9f0a"},{max:1/0,color:"#ff453a"}],dt=[{max:11,tier:"calm"},{max:38,tier:"moderate"},{max:61,tier:"strong"},{max:1/0,tier:"gale"}],ut=[{max:1,n:0,name:"Calm",desc:"Smoke rises vertically"},{max:5,n:1,name:"Light Air",desc:"Smoke drifts slowly"},{max:11,n:2,name:"Light Breeze",desc:"Leaves rustle"},{max:19,n:3,name:"Gentle Breeze",desc:"Leaves and twigs move"},{max:28,n:4,name:"Moderate Breeze",desc:"Small branches move"},{max:38,n:5,name:"Fresh Breeze",desc:"Small trees sway"},{max:49,n:6,name:"Strong Breeze",desc:"Large branches move"},{max:61,n:7,name:"Near Gale",desc:"Whole trees sway"},{max:74,n:8,name:"Gale",desc:"Twigs break off"},{max:88,n:9,name:"Strong Gale",desc:"Slight structural damage"},{max:102,n:10,name:"Storm",desc:"Trees uprooted"},{max:117,n:11,name:"Violent Storm",desc:"Widespread damage"},{max:1/0,n:12,name:"Hurricane",desc:"Devastating damage"}];var zt=[{max:20,label:"Good",color:"#30d158",desc:"Air quality is satisfactory"},{max:40,label:"Fair",color:"#5ac8fa",desc:"Acceptable for most people"},{max:60,label:"Moderate",color:"#ff9f0a",desc:"Sensitive groups may be affected"},{max:80,label:"Poor",color:"#ff453a",desc:"Health effects possible for everyone"},{max:100,label:"Very Poor",color:"#8b0000",desc:"Serious health effects"},{max:1/0,label:"Extremely Poor",color:"#4a0020",desc:"Emergency conditions"}],Dt=[{max:50,label:"Good",color:"#30d158",desc:"Air quality is satisfactory"},{max:100,label:"Moderate",color:"#ffd60a",desc:"Acceptable for most people"},{max:150,label:"Unhealthy for Sensitive Groups",color:"#ff9f0a",desc:"Sensitive groups may experience effects"},{max:200,label:"Unhealthy",color:"#ff453a",desc:"Everyone may experience effects"},{max:300,label:"Very Unhealthy",color:"#8b0000",desc:"Health alert for everyone"},{max:1/0,label:"Hazardous",color:"#4a0020",desc:"Emergency conditions"}];var Qe=[{min:2,color:"#30d158",label:"Stable"},{min:0,color:"#ffd60a",label:"Marginal"},{min:-2,color:"#ff9f0a",label:"Slightly Unstable"},{min:-1/0,color:"#ff453a",label:"Unstable"}],Be=80,ha=35;var It=.6,ga=90,wa=60,ba=40,Ot=8;var Pt=1800*1e3,va=7,xa=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],ya={rain:"mdi:weather-pouring",wind:"mdi:weather-windy",snow:"mdi:weather-snowy-heavy",ice:"mdi:snowflake-alert",fog:"mdi:weather-fog",thunderstorm:"mdi:weather-lightning",heat:"mdi:thermometer-alert",cold:"mdi:snowflake-thermometer",flood:"mdi:home-flood",tornado:"mdi:weather-tornado",fire:"mdi:fire-alert",coastal:"mdi:waves",avalanche:"mdi:image-filter-hdr",unknown:"mdi:alert"},Ht={1:"#FFFF00",2:"#FFA500",3:"#FF0000",4:"#8B0000"};var _a=["temperature","apparent_temperature","dew_point","humidity","pressure","surface_pressure","wind_speed","wind_direction","wind_gusts","precipitation","rain","showers","snowfall","cloud_cover","cloud_cover_low","cloud_cover_mid","cloud_cover_high","uv_index","uv_index_clear_sky","visibility","cape","lifted_index","freezing_level_height","soil_temperature","soil_moisture","wind_shear_0_6_km","lapse_rate_700_500_hpa","lcl_height","stability_assessment","dew_point_comfort","visibility_category","feels_like_context","pressure_trend","european_aqi","us_aqi","pm2_5","pm10","nitrogen_dioxide","ozone","sulphur_dioxide","carbon_monoxide","carbon_dioxide","golden_hour_morning_start","golden_hour_morning_end","golden_hour_evening_start","golden_hour_evening_end","blue_hour_morning_start","blue_hour_morning_end","blue_hour_evening_start","blue_hour_evening_end","moon_phase","moonrise","moonset","daylight_duration"],$a=["active_alert","upcoming_alert","alert_count"],Wt="_weather",ka=3;var Sa={"clear-night":"\u{1F319}",cloudy:"\u2601\uFE0F",exceptional:"\u{1F321}\uFE0F",fog:"\u{1F32B}\uFE0F",hail:"\u{1F328}\uFE0F",lightning:"\u26A1","lightning-rainy":"\u26C8\uFE0F",partlycloudy:"\u26C5",pouring:"\u{1F327}\uFE0F",rainy:"\u{1F327}\uFE0F",snowy:"\u2744\uFE0F","snowy-rainy":"\u{1F328}\uFE0F",sunny:"\u2600\uFE0F",windy:"\u{1F4A8}","windy-variant":"\u{1F4A8}"},ae=29.53,Ma=["New Moon","Waxing Crescent","First Quarter","Waxing Gibbous","Full Moon","Waning Gibbous","Last Quarter","Waning Crescent"];var Ta=`
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

/* Precipitation bar \u2014 Dark Sky signature element */
.pulse-precip-bar {
  height: 32px;
  background: var(--pulse-bg-elevated);
  border-radius: var(--pulse-radius-pill);
  display: flex;
  overflow: hidden;
}

.pulse-precip-slot {
  flex: 1;
  position: relative;
}

.pulse-precip-fill {
  position: absolute;
  bottom: 0;
  left: 1px;
  right: 1px;
  border-radius: var(--pulse-radius-bar) var(--pulse-radius-bar) 0 0;
  background: var(--pulse-info-color);
}
`;var Fa=`${""}

${Ta}
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
  --pw-sky-bot: #827a6a;
  --pw-ink-cream: #fdf6e3;
  --pw-ink-cream-muted: rgba(229, 217, 194, 0.85);
  --pw-ink-cream-dim: rgba(229, 217, 194, 0.55);
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

/* Precipitation bar label */
.pw-precip-label {
  font-size: 12px;
  color: var(--pulse-text-secondary);
  margin-bottom: 6px;
}

/* Snow badge */
.pw-snow-badge {
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  margin-top: 4px;
  position: relative;
  z-index: 2;
  text-shadow: var(--pw-shadow-overlay);
}

/* Feels like context */
.pw-feels-context {
  font-size: 10px;
  color: var(--pulse-text-secondary);
  text-align: center;
  position: relative;
  z-index: 2;
}

/* Snow precip fill \u2014 white gradient (bottom opaque \u2192 top transparent) */
.pw-precip-snow {
  background: linear-gradient(to top, var(--pw-text-overlay, #d0d0d0), transparent) !important;
}

/* Rain precip fill \u2014 gradient (bottom opaque \u2192 top fade) */
.pulse-precip-fill {
  background: linear-gradient(to top, #5ac8fa, rgba(90,200,250,0.15));
}

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
  color: var(--pulse-text-secondary);
  margin-top: 2px;
}

.pw-wind-beaufort {
  font-size: 17px;
  font-weight: 500;
  margin-top: 4px;
}

.pw-wind-beaufort-desc {
  font-size: 12px;
  color: var(--pulse-text-secondary);
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

.pw-alert-locations {
  font-size: 10px;
  color: var(--pulse-text-secondary);
  opacity: 0.85;
  margin-top: 3px;
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
  color: var(--pulse-text-secondary);
  opacity: 0.7;
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
  color: var(--pulse-text-secondary);
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
  color: var(--pulse-text-secondary);
  opacity: 0.6;
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

.pw-alert-locations {
  font-size: 10px;
  color: var(--pulse-text-secondary);
  opacity: 0.5;
  margin-top: 3px;
}

/* \u2500\u2500 Weather Summary \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-weather-summary { font-size: 13px; font-weight: 400; text-align: center; padding: 4px var(--pulse-space-card-wide) 8px; color: var(--pulse-text-primary); position: relative; z-index: 2; opacity: 0.85; }

/* \u2500\u2500 Day Progress Arc \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-day-arc { display: flex; align-items: center; gap: var(--pulse-space-element); padding: 4px var(--pulse-space-card-wide) 8px; position: relative; z-index: 2; }
.pw-day-arc-label { font-size: 10px; color: var(--pulse-text-secondary); font-variant-numeric: tabular-nums; opacity: 0.6; }
.pw-day-arc-bar { flex: 1; height: 2px; border-radius: var(--pulse-radius-hairline); background: var(--pulse-bg-elevated); position: relative; }
.pw-day-arc-fill { height: 100%; border-radius: var(--pulse-radius-hairline); background: linear-gradient(to right, #ff9f0a, #ffd60a); }
.pw-day-arc-marker { position: absolute; top: -3px; width: 8px; height: 8px; background: #ffd60a; border-radius: var(--pulse-radius-circle); border: 1px solid rgba(0,0,0,0.2); transform: translateX(-50%); box-shadow: 0 0 6px rgba(255,214,10,0.4); }

/* \u2500\u2500 Stability Badge \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-stability-badge { display: inline-block; font-size: 10px; font-weight: 600; padding: 2px 8px; border-radius: var(--pulse-radius-element); margin-left: 6px; vertical-align: middle; }

/* \u2500\u2500 Precip Time Markers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-precip-times { display: flex; justify-content: space-between; font-size: 9px; color: var(--pulse-text-secondary); opacity: 0.6; margin-top: 2px; }

/* \u2500\u2500 Freezing Level Marker (Temp Arc) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-arc-freeze { position: absolute; top: -6px; bottom: -6px; width: 1px; transform: translateX(-50%); }
.pw-arc-freeze-line { width: 1px; height: 100%; background: var(--pw-color-freeze); opacity: 0.5; }
.pw-arc-freeze-label { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); font-size: 8px; color: var(--pw-color-freeze); white-space: nowrap; }

/* \u2500\u2500 CAPE Sparkline \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-cape-sparkline { display: block; border-radius: var(--pulse-radius-bar); overflow: hidden; }
.pw-cape-peak { position: absolute; top: -12px; transform: translateX(-50%); font-size: 8px; color: var(--pulse-tier-strong); white-space: nowrap; font-variant-numeric: tabular-nums; }

/* \u2500\u2500 Comfort Bar (Dew Point) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-comfort-bar { display: flex; gap: var(--pulse-space-hairline); height: 4px; border-radius: var(--pulse-radius-bar); overflow: hidden; }
.pw-comfort-slot { flex: 1; border-radius: var(--pulse-radius-hairline); }

@media (prefers-reduced-motion: reduce) {
  .pw-streak,
  .pw-dust-particle,
  .pw-haze-blob,
  .pw-tension-wash.breathing,
  .pw-tension-vignette,
  .pw-radar::after,
  .pw-radar-blip,
  .pw-thermal-particle {
    animation: none !important;
  }
  .pw-atmos-detail {
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
.pw-overview-v2 .pw-overview-spark svg {
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
.pw-alerts-v2 .pw-alert-amber .pw-alert-tri { color: var(--pw-warn-yellow); }
.pw-alerts-v2 .pw-alert-red .pw-alert-tri { color: var(--pw-warn-red); }
.pw-alerts-v2 .pw-alert-text {
  font-weight: 700;
  font-size: var(--pw-font-caption);
  letter-spacing: 0.08em;
  line-height: 1.4;
}
.pw-alerts-v2 .pw-alert-amber .pw-alert-text {
  color: var(--pw-warn-yellow);
  text-shadow: 0 0 6px rgba(255, 214, 10, 0.5);
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
}
.pw-alerts-v2 .pw-alert-timestamp.pw-alert-amber { color: rgba(255, 159, 10, 0.55); }
.pw-alerts-v2 .pw-alert-timestamp.pw-alert-red { color: rgba(255, 69, 58, 0.7); }
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
   (.pw-alert-amber / .pw-alert-red) drives border + headline colour. */
.pw-alerts-v2 .pw-alert-detail {
  background: rgba(229, 217, 194, 0.04);
  border: 1px solid;
  border-radius: var(--pulse-radius-pill);
  padding: 10px 12px;
  margin-top: var(--pw-gap-tight);
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
.pw-alerts-v2 .pw-alert-detail.pw-alert-amber .pw-alert-detail-head {
  color: var(--pw-warn-yellow);
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
`;var Ca=[{type:"overview"}],ro={overview:{},forecast:{mode:"both"},wind:{speed_mode:"speed"},air_quality:{scale:"eu"},astro:{},alerts:{},atmosphere:{}};function Bt(e){if(!e||typeof e!="object")return{type:"overview"};let t=fa.includes(e.type)?e.type:"overview";return{...ro[t]||{},...e,type:t}}function Aa(e){if(!e||typeof e!="object")return{type:"custom:pulse-weather-card",sections:Ca.map(Bt)};let t=e,a=Array.isArray(t.sections)&&t.sections.length>0?t.sections.map(Bt):Ca.map(Bt);return{type:t.type||"custom:pulse-weather-card",weather_entity:t.weather_entity||void 0,atmos_source:t.atmos_source||void 0,sections:a}}function g(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function k(e){return e==null||e===""?"":String(e).replace(/[;{}]/g,"").replace(/url\s*\(/gi,"").replace(/expression\s*\(/gi,"").replace(/-moz-binding\s*:/gi,"")}function Ze(e){return`${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`}var Ut=0;function Ea(e="pulse-id"){return Ut=Ut+1>>>0,`${e}-${Ut.toString(36)}`}function Vt(e){let t=e.replace(/^weather\./,"");return t.endsWith(Wt)&&(t=t.slice(0,-Wt.length)),t}function Na(e,t){let a=t.weather_entity||Object.keys(e).find(c=>c.startsWith("weather."))||"",r=t.atmos_source||Vt(a),o={};for(let c of _a){let s=`sensor.${r}_${c}`;s in e&&(o[c]=s)}let i=Object.keys(o).length>=ka,n=i?o:{},l=[];if(t.alert_entities&&t.alert_entities.length>0)for(let c of t.alert_entities)c in e&&l.push(c);else if(i){for(let d of $a){let u=`sensor.${r}_${d}`,m=`sensor.${r}_warnings_${d}`;u in e?l.push(u):m in e&&l.push(m)}let c=`binary_sensor.${r}_alert_active`,s=`binary_sensor.${r}_warnings_alert_active`;c in e?l.push(c):s in e&&l.push(s)}let p="sun.sun"in e?"sun.sun":null;return{weatherEntityId:a,atmosCe:n,sunEntityId:p,atmosSource:i?r:null,alertEntityIds:l}}function oo(e){if(typeof e!="string")return null;let t=e.trim().replace(/^#/,"");return t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),t.length!==6||/[^0-9a-f]/i.test(t)?null:{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}}function Me(e,t){if(typeof e!="string")return String(e);let a=Math.max(0,Math.min(1,Number(t))),r=oo(e);if(r)return`rgba(${r.r},${r.g},${r.b},${a})`;let o=/^rgb\(\s*(\d+)\s*[,\s]\s*(\d+)\s*[,\s]\s*(\d+)\s*\)$/i.exec(e.trim());return o?`rgba(${o[1]},${o[2]},${o[3]},${a})`:e}function La(e,t){return e.filter(a=>Number.isFinite(t(a)))}function K(e,t=0){let a=Number(e);return Number.isFinite(a)?a:t}function mt(e,t,a,r,o,i=0){if(t?.[r]){let n=Number(e?.states?.[t[r]]?.state);if(Number.isFinite(n))return n}return Number(a?.[o]??i)||i}function za(e,t,a,r){return t?.[a]&&e?.states?.[t[a]]?.attributes?.unit_of_measurement||r}function Ue(e,t,a=0){let r=t?e?.states?.[t]:null;if(!r)return{value:a,unit:void 0,entity:null};let o=Number(r.state);return{value:Number.isFinite(o)?o:a,unit:r.attributes?.unit_of_measurement,entity:r}}function ft(e,t,a){let r=t?.state||"sunny",o=a?.sunEntityId?e?.states?.[a.sunEntityId]?.state:null;return{condition:r,isNight:r==="clear-night"||o==="below_horizon"}}function Je(e="pw-id"){return Ea(e)}function Da(e){return`${e}, linear-gradient(180deg, var(--pw-sky-top) 0%, var(--pw-sky-mid) 45%, var(--pw-sky-bot) 100%)`}function ht(e,t,a=36e5){let r=(t?t.getTime():Date.now())-a;return e.filter(o=>{let i=o.datetime;if(!i)return!1;let n=new Date(i).getTime();return Number.isFinite(n)&&n>=r})}function Te(e){let t=Number(e);for(let a of pt)if(t<=a.max)return a.color;return pt[pt.length-1].color}function jt(e){let t=Number(e);for(let a of dt)if(t<=a.max)return a.tier;return dt[dt.length-1].tier}function Ia(e){return We[jt(e)]||We.calm}function gt(e){let t=Number(e);for(let a of ut)if(t<=a.max)return a;return ut[ut.length-1]}function wt(e){let t=(Number(e)%360+360)%360,a=Math.round(t/22.5)%16;return xa[a]}function Oa(e){return e<=12?"#30d158":e<=50?"#5ac8fa":e<=87?"#ff9f0a":"#ff453a"}function Pa(e){return e<10?"#5ac8fa":e<16?"#30d158":e<19?"#ffd60a":e<22?"#ff9f0a":"#ff453a"}function Ve(e,t,a){if(!t||!a)return{todaySunrise:null,todaySunset:null,tomorrowSunrise:null};let r=new Date(t),o=new Date(a);if(isNaN(r.getTime())||isNaN(o.getTime()))return{todaySunrise:null,todaySunset:null,tomorrowSunrise:null};let i=r.getTime()>e.getTime()?new Date(r.getTime()-864e5):r,n=o.getTime()>e.getTime()?o:new Date(o.getTime()-864e5);n.getTime()>i.getTime()+864e5&&(n=new Date(n.getTime()-864e5)),i.getTime()>n.getTime()&&(i=new Date(i.getTime()-864e5));let l=r.getTime()>e.getTime()?r:new Date(r.getTime()+864e5);return{todaySunrise:i,todaySunset:n,tomorrowSunrise:l}}function Z(e,t){if(!e||isNaN(e.getTime()))return null;if(!t)return e;let a=t.getTime(),r=[e,new Date(e.getTime()-864e5),new Date(e.getTime()+864e5)],o=r[0],i=Math.abs(o.getTime()-a);for(let n=1;n<r.length;n+=1){let l=Math.abs(r[n].getTime()-a);l<i&&(o=r[n],i=l)}return o}function pe(e,t,a){let r=t?Object.entries(t).map(([o,i])=>` ${o}="${i}"`).join(""):"";return a!=null?`<${e}${r}>${a}</${e}>`:`<${e}${r}/>`}function bt(e){return Sa[e]||"\u{1F324}\uFE0F"}var Ra={"clear-night":"Clear Night",cloudy:"Cloudy",exceptional:"Exceptional",fog:"Fog",hail:"Hail",lightning:"Lightning","lightning-rainy":"Lightning Rainy",partlycloudy:"Partly Cloudy",pouring:"Pouring",rainy:"Rainy",snowy:"Snowy","snowy-rainy":"Snowy Rainy",sunny:"Sunny",windy:"Windy","windy-variant":"Windy Variant"};function Ha(e){return Object.hasOwn(Ra,e)?Ra[e]:e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase())}function le(e,t,a){let r=document.createElement(e);if(r.className=t,a)for(let[o,i]of Object.entries(a))r.style.setProperty(o,i);return r}function F(e,t){return Math.random()*(t-e)+e}function et(e,t=60,a=1,r=2){let o=Math.min(t,ga);for(let i=0;i<o;i++){let n=le("div","pw-rain-drop"),l=F(15,30),p=F(.4,.8)/a;Object.assign(n.style,{left:`${F(0,100)}%`,top:`${F(-10,20)}%`,width:`${r}px`,height:`${l}px`,borderRadius:`0 0 ${r}px ${r}px`,background:"linear-gradient(to bottom, transparent, rgba(120,180,255,0.6))",animation:`pw-rainFall ${p}s linear ${F(0,2)}s infinite`,animationFillMode:"backwards",position:"absolute"}),e.appendChild(n)}}function qt(e,t=40){let a=Math.min(t,wa);for(let r=0;r<a;r++){let o=le("div","pw-snowflake"),i=F(2,5);Object.assign(o.style,{left:`${F(0,100)}%`,top:`${F(-5,10)}%`,width:`${i}px`,height:`${i}px`,borderRadius:"50%",background:"rgba(255,255,255,0.7)",animation:`pw-snowFall ${F(3,6)}s linear ${F(0,4)}s infinite`,animationFillMode:"backwards",position:"absolute"}),e.appendChild(o)}}function no(e){for(let t=0;t<4;t++){let a=le("div","pw-fog-layer");Object.assign(a.style,{position:"absolute",width:"200%",height:"40px",top:`${30+t*20}%`,left:"0",background:"linear-gradient(to right, transparent 0%, rgba(200,200,200,0.06) 20%, rgba(200,200,200,0.1) 50%, rgba(200,200,200,0.06) 80%, transparent 100%)",animation:`pw-fogDrift ${F(15,25)}s linear ${t*2}s infinite`,animationFillMode:"backwards"}),e.appendChild(a)}}function vt(e){for(let t=0;t<8;t++){let a=le("div","pw-sun-ray");Object.assign(a.style,{position:"absolute",top:"-20px",left:`${10+t*12}%`,width:"2px",height:"120px",background:"linear-gradient(to bottom, rgba(255,220,100,0.08), transparent)",transformOrigin:"top center",transform:`rotate(${-15+t*4}deg)`,animation:`pw-rayPulse ${F(3,5)}s ease-in-out ${F(0,2)}s infinite`,animationFillMode:"backwards"}),e.appendChild(a)}}function J(e,t=4,a=1){let r=Math.min(t,Ot);for(let o=0;o<r;o++){let i=le("div","pw-cloud"),n=F(80,160),l=F(30,60),p=F(20,40)/a;Object.assign(i.style,{position:"absolute",width:`${n}px`,height:`${l}px`,top:`${F(5,50)}%`,left:"0",borderRadius:"50%",background:"radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, transparent 70%)",animation:`pw-cloudDrift ${p}s linear ${F(0,15)}s infinite`,animationFillMode:"backwards"}),e.appendChild(i)}}function Gt(e){for(let t=0;t<ba;t++){let a=le("div","pw-star"),r=F(1,3);Object.assign(a.style,{position:"absolute",left:`${F(0,100)}%`,top:`${F(0,70)}%`,width:`${r}px`,height:`${r}px`,borderRadius:"50%",background:"#fff",animation:`pw-twinkle ${F(2,5)}s ease-in-out ${F(0,3)}s infinite`,animationFillMode:"backwards"}),e.appendChild(a)}}function io(e,t){let a=[],r=e,o=0,i=Math.floor(F(4,8)),n=t/i;a.push(`${r},${o}`);for(let l=0;l<i;l++)r+=F(-15,15),o+=n,a.push(`${r},${o}`);return a.join(" ")}function Wa(e,t=2,a){let r=a||Array.from({length:t},(i,n)=>n*3),o=le("div","pw-lightning-flash");Object.assign(o.style,{position:"absolute",inset:"0",background:"rgba(255,255,255,0.15)",animation:`pw-flash 6s ease-in-out ${r[0]||0}s infinite`,animationFillMode:"backwards",pointerEvents:"none"}),e.appendChild(o);for(let i=0;i<t;i++){let n="http://www.w3.org/2000/svg",l=document.createElementNS(n,"svg");l.setAttribute("class","pw-lightning-bolt"),l.setAttribute("width","60"),l.setAttribute("height","200"),l.setAttribute("viewBox","0 0 60 200"),l.style.position="absolute",l.style.top="0",l.style.left=`${F(15,75)}%`,l.style.pointerEvents="none",l.style.zIndex="2",l.style.animation=`pw-boltStrike 6s ease-in-out ${r[i]||0}s infinite`,l.style.animationFillMode="backwards";let p=io(30,180),c=document.createElementNS(n,"polyline");c.setAttribute("points",p),c.setAttribute("fill","none"),c.setAttribute("stroke","rgba(200,220,255,0.4)"),c.setAttribute("stroke-width","6"),c.setAttribute("stroke-linecap","round"),c.setAttribute("stroke-linejoin","round"),l.appendChild(c);let s=document.createElementNS(n,"polyline");s.setAttribute("points",p),s.setAttribute("fill","none"),s.setAttribute("stroke","#fff"),s.setAttribute("stroke-width","2"),s.setAttribute("stroke-linecap","round"),s.setAttribute("stroke-linejoin","round"),l.appendChild(s),e.appendChild(l)}}function so(e){let t=le("div","pw-heat-shimmer");Object.assign(t.style,{position:"absolute",inset:"0",pointerEvents:"none",background:"linear-gradient(0deg, transparent 0%, rgba(255,200,100,0.03) 30%, transparent 50%, rgba(255,180,80,0.02) 70%, transparent 100%)",backgroundSize:"100% 200%",animation:"pw-shimmer 3s ease-in-out infinite"}),e.appendChild(t);let a=le("div","pw-heat-ripple");Object.assign(a.style,{position:"absolute",bottom:"0",left:"0",right:"0",height:"60px",pointerEvents:"none",background:"repeating-linear-gradient(0deg, transparent, rgba(255,200,100,0.02) 2px, transparent 4px)",animation:"pw-rippleWave 2s ease-in-out infinite"}),e.appendChild(a)}function Ba(e,t,a){let r=Math.min(1,(t/75+a/150)/2);if(r<.05)return;let o=le("div","pw-smog-overlay");o.style.background=`rgba(120,110,80,${.05+r*.15})`,e.appendChild(o);let i=le("div","pw-haze-vignette");i.style.background=`radial-gradient(ellipse at center, transparent 40%, rgba(80,70,50,${r*.3}) 100%)`,e.appendChild(i);let n=Math.floor(r*20);for(let p=0;p<n;p++){let c=le("div","pw-dust-particle"),s=F(1,3+r*3);Object.assign(c.style,{left:`${F(0,100)}%`,top:`${F(10,90)}%`,width:`${s}px`,height:`${s}px`,animationDelay:`${F(0,8)}s`,animationFillMode:"backwards"}),e.appendChild(c)}let l=Math.floor(r*5);for(let p=0;p<l;p++){let c=le("div","pw-haze-blob"),s=F(60,120);Object.assign(c.style,{left:`${F(-10,80)}%`,top:`${F(10,70)}%`,width:`${s}px`,height:`${s*.6}px`,animationDelay:`${F(0,12)}s`,animationFillMode:"backwards"}),e.appendChild(c)}}function Ua(e,t,a){let r=document.createDocumentFragment();try{t&&Gt(r);let o=a?Math.round(a.total/100*Ot):0;switch(e){case"sunny":t||vt(r),a&&o>0&&J(r,o);break;case"clear-night":a&&o>0&&J(r,o);break;case"partlycloudy":t||vt(r),J(r,a?o:3);break;case"cloudy":J(r,a?Math.max(o,4):6);break;case"rainy":et(r,40,1,2),J(r,a?Math.max(o,3):4);break;case"pouring":et(r,80,1.5,3),J(r,a?Math.max(o,5):6);break;case"snowy":qt(r,40),J(r,a?Math.max(o,3):4);break;case"snowy-rainy":qt(r,20),et(r,20,.8,1),J(r,a?Math.max(o,3):4);break;case"hail":et(r,30,1.2,3),qt(r,15),J(r,a?Math.max(o,4):5);break;case"lightning":Wa(r,2,[0,3]),J(r,a?Math.max(o,5):6);break;case"lightning-rainy":Wa(r,3,[0,2,4]),et(r,60,1.3,2),J(r,a?Math.max(o,5):6);break;case"fog":no(r);break;case"windy":case"windy-variant":J(r,a?o:3,1.5);break;case"exceptional":so(r);break;default:a&&o>0&&J(r,o);break}}catch(o){console.warn(`${we} buildConditionFx threw \u2014 atmospheric FX will be partial or absent for this condition. Please share the error below when reporting.`,o)}return r}function tt(e,t,a){return a===t?0:Math.max(0,Math.min(1,(e-t)/(a-t)))}function Xt(e,t,a="ellipse"){let r=Math.max(0,Math.min(1,t)),o=Math.round(3+r*50),i=Math.round(2+r*25),n=Math.round(50+r*30),l=p=>p.toString(16).padStart(2,"0");return`radial-gradient(${a} at 50% 30%, ${e}${l(o)} 0%, ${e}${l(i)} ${n}%, transparent 90%)`}function Va(e,t=6,a=1.2){let r=Math.max(0,Math.min(1,e));return t-r*(t-a)}function ja(e,t){let a=Math.max(0,Math.min(1,t)),r=Math.round(4+a*20),o=Math.round(a*8),n=Math.round((.15+a*.55)*255).toString(16).padStart(2,"0");return`0 0 ${r}px ${o}px ${e}${n}`}function qa(e,t="0,0,0"){let a=Math.max(0,Math.min(1,e));if(a<.1)return"";let r=Math.round(60-a*30),o=(a*.5).toFixed(2);return`radial-gradient(ellipse at center, transparent ${r}%, rgba(${t},${o}) 100%)`}function Ga(e,t=8,a=2){let r=Math.max(0,Math.min(1,e));return t-r*(t-a)}var lo="#a83d2a",Xa="#7a2d20",Ae="#fdf6e3",co='<svg viewBox="0 0 40 40" width="38" height="38" aria-hidden="true">',po="</svg>";function Ya(e){let t=["day","cloudy","rain","night"].includes(e)?e:"day",r=`<circle class="mc" cx="20" cy="20" r="18" fill="${t==="night"?Xa:lo}" opacity="0.92"/>`,o=`<line class="mh" x1="6" y1="22" x2="34" y2="22" stroke="${Ae}" stroke-width="0.8" opacity="0.85"/>`,i="";return t==="day"?i=`<circle class="md" cx="20" cy="14" r="2.4" fill="${Ae}" opacity="0.95"/>`:t==="cloudy"?i=`<circle class="md" cx="20" cy="14" r="2.4" fill="${Ae}" opacity="0.45"/>`:t==="rain"?i=[`<line class="mg" x1="14" y1="11" x2="13" y2="16" stroke="${Ae}" stroke-width="0.7" opacity="0.55"/>`,`<line class="mg" x1="20" y1="11" x2="19" y2="16" stroke="${Ae}" stroke-width="0.7" opacity="0.55"/>`,`<line class="mg" x1="26" y1="11" x2="25" y2="16" stroke="${Ae}" stroke-width="0.7" opacity="0.55"/>`].join(""):t==="night"&&(i=`<circle class="md" cx="20" cy="14" r="2.4" fill="${Ae}" opacity="0.95"/><circle class="md-cut" cx="21.4" cy="13.4" r="1.8" fill="${Xa}"/>`),`${co}${r}${o}${i}${po}`}function re(e,t){return t?"night":["rainy","pouring","snowy","snowy-rainy","hail","lightning-rainy"].includes(e)?"rain":["cloudy","fog"].includes(e)?"cloudy":"day"}var y={kicker(e){return`<div class="pw-t-kicker">${g(e)}</div>`},heroTier(e,{flavor:t="aqi",color:a=""}={}){let r=t==="atmos"?"pw-t-hero-tier-atmos":"pw-t-hero-tier-aqi",o=a?` style="color:${k(a)}"`:"";return`<div class="pw-t-hero-tier ${r}"${o}>${g(e)}</div>`},display(e,{color:t="",suffix:a=""}={}){let r=t?` style="color:${k(t)}"`:"",o=a?`<span class="pw-t-display-suf">${g(a)}</span>`:"";return`<div class="pw-t-display"${r}>${g(String(e))}${o}</div>`},narrative(e){return`<div class="pw-t-narrative">${g(e)}</div>`},gloss(e){return`<div class="pw-t-gloss">${g(e)}</div>`},meta(e){return`<div class="pw-t-meta">${g(e)}</div>`},chartCaption(e){return`<div class="pw-t-chart-caption">${g(e)}</div>`},stat(e,t,{data:a=!1,valueColor:r=""}={}){let o=r?` style="color:${k(r)}"`:"",i=a?"pw-t-stat-l pw-t-data":"pw-t-stat-l";return`<div class="pw-t-stat"><div class="pw-t-stat-v"${o}>${g(String(e))}</div><div class="${i}">${g(t)}</div></div>`},statLabel(e){return`<span class="pw-t-stat-l">${g(e)}</span>`},dataToken(e){return`<span class="pw-t-data">${e}</span>`},heroBlock({tier:e="",tierFlavor:t="aqi",tierColor:a="",value:r="",valueSuffix:o="",valueColor:i="",narrative:n=""}={}){let l=e?this.heroTier(e,{flavor:t,color:a}):"",p=r!==""?this.display(r,{color:i,suffix:o}):"",c=n?this.narrative(n):"";return`<div class="pw-hero-block">${l}${p}${c}</div>`},statsRow(e,{columns:t=4,divided:a=!1}={}){let r=e.filter(Boolean);return r.length?`<div class="pulse-stats-row" data-cols="${t}"${a?' data-divided="true"':""}>${r.join("")}</div>`:""}};function Q({sectionClass:e,ariaLabel:t,brandVariant:a,kicker:r="",narrative:o="",preContent:i="",extraSectionClass:n="",sectionStyle:l="",body:p,proView:c="",proInitial:s=!1,proAction:d="view-swap",proAriaLabel:u="Toggle pro view",pro:m=!0}){m===!1&&(c="",d="view-swap",s=!1);let f=l?` style="${l}"`:"",h=`pw-section pw-cartouche ${e}${n?` ${n}`:""}`,v=Ya(a),b=[r?y.kicker(r):"",o?y.narrative(o):""].filter(Boolean).join(""),w=b?`<div class="pw-t-marg">${b}</div>`:"",$=!!c,_=$||d!=="view-swap",S=$?`<div class="pw-view pw-view-default">${p}</div><div class="pw-view pw-view-pro">${c}</div>`:p,E=s?"true":"false",T=_?`<button class="pw-brand-mark-corner" aria-label="${g(u)}" aria-pressed="${E}" type="button">${v}</button>`:`<div class="pw-brand-mark-corner" aria-hidden="true">${v}</div>`;return`
    <div class="${h}" data-pro="${E}" data-pro-action="${d}"${f} role="region" aria-label="${g(t)}">
      ${i}
      ${T}
      <div class="pw-content">
        ${w}
        ${S}
      </div>
    </div>`}var Yt=Object.freeze({none:{label:"Stable",color:"#30d158",desc:"No thunderstorm risk"},marginal:{label:"Marginal",color:"#ffd60a",desc:"Isolated storms possible"},slight:{label:"Slight",color:"#ff9f0a",desc:"Brief storms possible"},enhanced:{label:"Enhanced",color:"#ff6b35",desc:"Organized storms likely"},moderate:{label:"Moderate",color:"#ff453a",desc:"Severe storms expected"},high:{label:"Extreme",color:"#8b0000",desc:"Dangerous storm potential"},unknown:{label:"Unknown",color:"#888888",desc:"Insufficient data"}}),uo=Object.freeze({none:5,marginal:20,slight:40,enhanced:60,moderate:80,high:100,unknown:0});function mo(e,t){let a=Math.min(100,e/4e3*100),r=Math.min(100,Math.max(0,(6-t)/12*100));return Math.round(a*.6+r*.4)}function fo(e){return e<=10?{tierKey:"none",label:"Stable",color:"#30d158",desc:"No thunderstorm risk"}:e<=30?{tierKey:"marginal",label:"Marginal",color:"#ffd60a",desc:"Isolated storms possible"}:e<=55?{tierKey:"slight",label:"Moderate",color:"#ff9f0a",desc:"Scattered storms likely"}:e<=80?{tierKey:"moderate",label:"High",color:"#ff453a",desc:"Severe storms expected"}:{tierKey:"high",label:"Extreme",color:"#8b0000",desc:"Dangerous storm potential"}}function ho(e,t){let a=t.atmosCe,r=a.cape&&e.states[a.cape]&&Number(e.states[a.cape].state)||0,o=a.lifted_index&&e.states[a.lifted_index]&&Number(e.states[a.lifted_index].state)||0,i=!!(a.cape&&e.states[a.cape]),n=!!(a.lifted_index&&e.states[a.lifted_index]),l=i||n?mo(r,o):null;if(a.stability_assessment&&e.states[a.stability_assessment]){let c=e.states[a.stability_assessment].state,s=e.states[a.stability_assessment].attributes||{},d=Yt[c];if(d){let u=uo[c]??0;return{tierKey:c,...d,score:u,source:"composite",attrs:s,capeValue:r,liValue:o,hasCape:i,hasLI:n}}}let p=l!==null?fo(l):null;return{tierKey:p?.tierKey||"unknown",label:p?.label||"Unknown",color:p?.color||"#888888",desc:p?.desc||"",score:l,source:"fallback",attrs:null,capeValue:r,liValue:o,hasCape:i,hasLI:n}}function go(e){return Math.max(0,Math.min(100,e))}function Ka(e,t=5e3){return t<=0?0:Math.max(0,Math.min(100,e/t*100))}function wo(e,t){let i=Math.max(e,t),n=5e3;i>5e3*.8&&(n=Math.max(5e3,Math.ceil(i*1.25/1e3)*1e3));let l=Math.ceil(n/5e3)*1e3;n=Math.ceil(n/l)*l;let p=[];for(let c=n;c>=0;c-=l)p.push(c);return{scaleMax:n,labelInterval:l,labels:p}}var bo=Object.freeze({none:0,unknown:0,marginal:1,slight:2,enhanced:3,moderate:4,high:5});function vo(e){if(!e)return null;let t=a=>bo[String(e[a]||"none")]??0;return{maxThermal:Math.max(t("cape_tier"),t("lifted_index_tier"),t("lapse_rate_tier")),shearTier:t("wind_shear_tier")}}function xo({tierKey:e,tierDesc:t,hourly:a,now:r,todaySunset:o,attrs:i}){if(e==="none"||e==="unknown")return"Atmosphere settled \xB7 no convective signals";let n=vo(i);if(n&&n.maxThermal===0&&n.shearTier>=2)return"Wind shear elevated \xB7 atmosphere thermally quiet";let l=o&&!isNaN(o.getTime())?o.getTime():null,p=r.getTime(),c=l!==null&&p>=l,s=Array.isArray(a)?a.slice(0,6):[],d=s.map(w=>Number(w&&w.cape)||0),u=d.some(w=>Number.isFinite(w)&&w>0),m=null,f=null;if(u){let w=Math.max(...d);if(w>0){let $=s[d.indexOf(w)],_=$?$.datetime:null,S=_?new Date(String(_)):null;S&&!isNaN(S.getTime())&&(m=S.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1}),f=S.getTime())}}if(m===null||f===null){let w=t||"Storm risk active";return c?`${w} \xB7 calming overnight`:w}let h=1800*1e3,v=f<p-h,b=f>=p-h&&f<=p+h;return v?c?`Storm risk easing \u2014 peaked ${m}, calming overnight`:`Storm risk easing \u2014 peaked ${m}`:b?c?"Storm risk peaking now, calming overnight":l!==null?"Storm risk peaking now, calming after sunset":"Storm risk peaking now":l!==null&&f<l?`Storm risk peaks ${m}, calming after sunset`:l!==null?`Storm risk peaks ${m} (after sunset)`:`Storm risk peaks ${m}`}var ci=Object.freeze([Object.freeze({max:30,tier:"none"}),Object.freeze({max:40,tier:"marginal"}),Object.freeze({max:50,tier:"slight"}),Object.freeze({max:60,tier:"enhanced"}),Object.freeze({max:75,tier:"moderate"})]);var pi=Object.freeze([Object.freeze({max:6,tier:"none"}),Object.freeze({max:6.5,tier:"marginal"}),Object.freeze({max:7.5,tier:"slight"}),Object.freeze({max:8,tier:"enhanced"}),Object.freeze({max:9,tier:"moderate"})]);function yo(e){let t=Math.max(0,Math.min(100,e)),a=t/100;return{count:t<=10?0:Math.round(2+a*6),minSize:2+Math.round(a),maxSize:3+Math.round(a),minDur:4-a*2.2,maxDur:4-a*1.2}}function Qa(e,t,a=Math.random){let r=document.createDocumentFragment(),o=yo(e);if(o.count===0)return r;let i=k(t);for(let n=0;n<o.count;n++){let l=document.createElement("div");l.className="pw-thermal-particle";let p=o.minSize+a()*(o.maxSize-o.minSize),c=10+a()*80,s=a()*30,d=o.minDur+a()*(o.maxDur-o.minDur),u=a()*d,m=.4+a()*.3,f=-(50+a()*60);l.setAttribute("style",[`width:${p.toFixed(1)}px`,`height:${p.toFixed(1)}px`,`left:${c.toFixed(1)}%`,`bottom:${s.toFixed(1)}%`,`background:${i}`,`--rise-dur:${d.toFixed(2)}s`,`--rise-dist:${f.toFixed(0)}px`,`--peak-op:${m.toFixed(2)}`,`animation-delay:${u.toFixed(2)}s`].join(";")),r.appendChild(l)}return r}function Za({hass:e,config:t,discovery:a,forecastData:r}){let o=a.atmosCe;if(!o.cape&&!o.lifted_index&&!o.freezing_level_height)return console.debug(`${we} Atmosphere section requires Atmos CE sensors (cape / lifted_index / freezing_level_height) \u2014 section skipped. Install Atmos CE integration if you want the atmospheric stability column.`),null;let i=ho(e,a),{capeValue:n,liValue:l,hasCape:p,hasLI:c,score:s}=i,d=O=>{let ee=o[O];if(!ee||!e.states[ee])return{value:null,unit:""};let ie=Number(e.states[ee].state);if(!Number.isFinite(ie))return{value:null,unit:""};let fe=String(e.states[ee].attributes?.unit_of_measurement||"");return{value:ie,unit:fe}},u=d("wind_shear_0_6_km"),m=d("lapse_rate_700_500_hpa"),f=d("freezing_level_height"),h=d("lcl_height"),v=i.tierKey,b={label:i.label,color:i.color,desc:i.desc},$=["slight","enhanced","moderate","high"].includes(v)?"rain":"cloudy",_=new Date,S=a.sunEntityId?e.states[a.sunEntityId]:null,{todaySunset:E}=Ve(_,S?.attributes?.next_rising,S?.attributes?.next_setting),T=xo({tierKey:v,tierDesc:b.desc,hourly:r?.hourly||[],now:_,todaySunset:E,attrs:i.attrs}),C=f.value??0,R=h.value??0,{scaleMax:D,labels:B}=wo(C,R),A=s!==null?go(s):0,P=b.color,I=p||c?`
          <div class="pw-atmos-cape-fill" style="height:${Number(A)}%;background:linear-gradient(to top, ${k(P)}66, ${k(P)}11)"></div>`:"",U=f.unit||"m",x=f.value!==null?(()=>{let O=Ka(f.value,D);return`
          <div class="pw-atmos-freeze-marker" style="bottom:${Number(O)}%">
            <span class="pw-atmos-freeze-label">\u2744 ${g(String(Math.round(f.value)))}${g(U)}</span>
            <div class="pw-atmos-freeze-line"></div>
          </div>`})():"",N=h.unit||"m",V=h.value!==null?(()=>{let O=Ka(h.value,D);return`
          <div class="pw-atmos-lcl-marker" style="bottom:${Number(O)}%">
            <span class="pw-atmos-lcl-label">\u2601 LCL ${g(String(Math.round(h.value)))}${g(N)}</span>
            <div class="pw-atmos-lcl-line"></div>
          </div>`})():"",oe=`
        <div class="pw-atmos-column-wrap">
          <div class="pw-atmos-scale">${B.map(O=>`<span class="pw-atmos-scale-label">${O>=1e3?`${O/1e3}km`:String(O)}</span>`).join("")}</div>
          <div class="pw-atmos-column">
            ${I}
            ${x}
            ${V}
            <div class="pw-atmos-ground-label">surface</div>
          </div>
        </div>`,ne=y.heroBlock({tier:b.label,tierFlavor:"atmos",tierColor:"var(--pw-vermilion)",narrative:T}),de=[p?y.stat(`${Math.round(n)}`,"cape J/kg"):"",c?y.stat(l.toFixed(1),"lifted idx"):"",u.value!==null?y.stat(`${Math.round(u.value)}`,`shear ${u.unit||"km/h"}`):"",m.value!==null?y.stat(m.value.toFixed(1),`lapse ${m.unit||"\xB0C/km"}`):""],xe=y.statsRow(de,{columns:4,divided:!0}),j=`
        ${ne}
        ${oe}
        ${xe}`;return Q({sectionClass:"pw-atmosphere-v2",ariaLabel:"Atmospheric stability",brandVariant:$,kicker:"atmospheric stability",body:j,pro:t?.pro!==!1})}function Ja(e){let t=e.getHours();return t>=6&&t<12?"this morning":t>=12&&t<17?"this afternoon":t>=17&&t<21?"this evening":"tonight"}function _o(e,t){return e==="sunny"||e==="clear-night"?"Clear skies":e==="rainy"||e==="pouring"?"Rain":e==="snowy"||e==="snowy-rainy"?"Snow":e==="lightning"||e==="lightning-rainy"?"Storms":e==="fog"?"Fog":t>=88?"Overcast":t>=50?"Mostly cloudy":t>=12?"Some sun":"Sunny"}function $o(e){let t=e.slots.slice(0,6);if(t.length===0)return null;let a=Number(t[t.length-1].cloud_coverage),r=Number.isFinite(a)?a-e.cloudCoverNow:0,o=t.reduce((c,s)=>Math.max(c,Number(s.precipitation_probability)||0),0),i=t.reduce((c,s)=>Math.max(c,Number(s.snowfall)||0),0),l=t.reduce((c,s)=>Math.max(c,Number(s.wind_speed)||0),e.windSpeed)-e.windSpeed;return["moderate","high"].includes(e.stabilityState)?"with thunderstorms developing":o>=60?i>0?"with snow likely":"with rain likely":o>=40?i>0?"with snow possible":"with a brief shower or two":r>=30?"then increasing clouds":r<=-30?"then clearing":l>=8?"with wind firming":null}function er(e){let t=_o(e.conditionNow,Number(e.cloudCoverNow)||0),a=$o(e),r=a?Ja(e.now):null,o;return a?a.startsWith("then ")?o=`${t}, ${a} ${r}.`:o=`${t}, then ${a} ${r}.`:o=`${t} ${Ja(e.now)}.`,{initial:t,transition:a,anchor:r,sentence:o}}var ko={sunny:"linear-gradient(180deg, #1a4a7a 0%, #2a6aaa 40%, transparent 100%)","clear-night":"linear-gradient(180deg, #050510 0%, #0a0a1a 50%, transparent 100%)",partlycloudy:"linear-gradient(180deg, #1a2a4a 0%, #2c4a6e 50%, transparent 100%)",cloudy:"linear-gradient(180deg, #2a2a3a 0%, #3a3a4a 50%, transparent 100%)",rainy:"linear-gradient(180deg, #1a2a3a 0%, #2a3a4a 50%, transparent 100%)",pouring:"linear-gradient(180deg, #0a1a2a 0%, #1a2a3a 50%, transparent 100%)",snowy:"linear-gradient(180deg, #2a3040 0%, #3a4050 50%, transparent 100%)","snowy-rainy":"linear-gradient(180deg, #1a2a3a 0%, #2a3a48 50%, transparent 100%)",hail:"linear-gradient(180deg, #1a2a3a 0%, #2a3a48 50%, transparent 100%)",lightning:"linear-gradient(180deg, #0a0a1a 0%, #1a1a2a 50%, transparent 100%)","lightning-rainy":"linear-gradient(180deg, #0a0a1a 0%, #1a1a2a 50%, transparent 100%)",fog:"linear-gradient(180deg, #2a2a2e 0%, #3a3a3e 50%, transparent 100%)",windy:"linear-gradient(180deg, #1a2a4a 0%, #2c4a6e 50%, transparent 100%)","windy-variant":"linear-gradient(180deg, #1a2a4a 0%, #2c4a6e 50%, transparent 100%)",exceptional:"linear-gradient(180deg, #4a2a1a 0%, #6a3a1a 40%, transparent 100%)"},So="linear-gradient(180deg, #1a2a3a 0%, #2a3a4a 50%, transparent 100%)",tr={dry:"#30d158",comfortable:"#30d158",slightly_humid:"#ffd60a",humid:"#ff9f0a",oppressive:"#ff453a",clear:"#30d158",good:"#30d158",moderate:"#ffd60a",poor:"#ff9f0a",fog:"#ff453a"};function Mo(e){return e<=30?"#5ac8fa":e<=60?"#30d158":e<=80?"#ff9f0a":"#ff453a"}function To(e,t){if(e==null)return"Press";let a=Math.abs(Number(e));if(a<=1)return"Press";let r=t==="rising"?"Rising":t==="falling"?"Falling":"Press";return a>3?`${r} rapidly`:r}function Fo(e,t,a){let r=e.map(s=>{let d=Number(s.cape);return Number.isFinite(d)?d:0}),o=Math.max(...r,300),i=Math.max(...r),n=r.indexOf(i),p=r.map((s,d)=>({x:d/Math.max(e.length-1,1)*t,y:a-s/o*a})).map((s,d)=>`${d===0?"M":"L"}${s.x.toFixed(1)},${s.y.toFixed(1)}`).join(" "),c=`${p} L${t},${a} L0,${a} Z`;return{svgPath:p,areaPath:c,peakValue:i,peakIndex:n,maxCape:o}}function Co(e,t,a,r,o,i,n,l){let p=[];return n>0&&p.push({name:"Snow",value:n,unit:l}),a>0&&p.push({name:"Rain",value:a,unit:r}),o>0&&p.push({name:"Showers",value:o,unit:i}),p.length>0?`${p.map(s=>`${g(s.name)} ${g(s.value.toFixed(1))} ${g(s.unit)}`).join(" \xB7 ")} now`:e>0?`Precipitation \u2014 next 12h \xB7 ${g(e.toFixed(1))} ${g(t)} now`:"Precipitation \u2014 next 12h"}function xt(e){return!e||isNaN(e.getTime())?"":Ze(e)}function ar({hass:e,config:t,discovery:a,weatherEntity:r,forecastData:o}){let i=r.attributes,n=a.atmosCe,l=a.sunEntityId||"",{condition:p,isNight:c}=ft(e,r,a),s=(L,z)=>mt(e,n,i,L,z),d=(L,z)=>za(e,n,L,z),u=s("temperature","temperature"),m=s("apparent_temperature","apparent_temperature")||u,f=s("humidity","humidity"),h=s("wind_speed","wind_speed"),v=s("wind_direction","wind_bearing"),b=s("wind_gusts","wind_gust_speed")||s("wind_gusts","wind_gusts"),w=s("dew_point","dew_point"),$=s("visibility","visibility"),_=s("pressure","pressure"),S=d("temperature","\xB0C"),E=d("visibility","km"),T=d("pressure","hPa"),C=d("dew_point","\xB0C"),R=o?.daily,D=o?.hourly,B=i.forecast,A=u,P=u;if(R&&R.length>0){let L=R[0],z=Number(L.templow),M=Number(L.temperature);Number.isFinite(z)&&Number.isFinite(M)&&(A=Math.min(z,M),P=Math.max(z,M))}else if(D&&D.length>0){let L=Date.now(),z=new Date;z.setHours(23,59,59,999);let M=z.getTime(),X=1/0,Y=-1/0;for(let _e of D.slice(0,24)){let ce=Date.parse(String(_e.datetime??""));if(Number.isFinite(ce)&&(ce<L||ce>M))continue;let H=Number(_e.temperature);Number.isFinite(H)&&(H<X&&(X=H),H>Y&&(Y=H))}Number.isFinite(X)&&Number.isFinite(Y)&&X!==Y&&(A=Math.min(X,u),P=Math.max(Y,u))}else if(B&&B.length>0){let L=B[0],z=Number(L.templow),M=Number(L.temperature);Number.isFinite(z)&&Number.isFinite(M)&&(A=Math.min(z,M),P=Math.max(z,M))}let I=a.atmosCe.uv_index,U=I?Number(e.states[I]?.state)||0:Number(i.uv_index??0),{value:x,unit:N}=Ue(e,n.precipitation),V=N||"mm",{value:G,unit:oe}=Ue(e,n.rain),{value:ne,unit:de}=Ue(e,n.showers),{value:xe,unit:j}=Ue(e,n.snowfall),O=oe||"mm",ee=de||"mm",ie=j||"cm",{value:fe,entity:ye}=Ue(e,n.uv_index_clear_sky),Ne=n.dew_point_comfort?e.states[n.dew_point_comfort]:null,Re=n.visibility_category?e.states[n.visibility_category]:null,Le=n.feels_like_context?e.states[n.feels_like_context]:null,te=n.pressure_trend?e.states[n.pressure_trend]:null,ze=new Date,De=l?e.states[l]:null,St=De?.attributes?.next_rising,Mt=De?.attributes?.next_setting,{todaySunrise:Ge,todaySunset:Ce,tomorrowSunrise:Xe}=Ve(ze,St,Mt),he=null;a.atmosCe.cloud_cover&&(he={total:Number(e.states[a.atmosCe.cloud_cover]?.state)||0,low:Number(e.states[a.atmosCe.cloud_cover_low]?.state)||0,mid:Number(e.states[a.atmosCe.cloud_cover_mid]?.state)||0,high:Number(e.states[a.atmosCe.cloud_cover_high]?.state)||0});let Ie=n.freezing_level_height?e.states[n.freezing_level_height]:null,ot=Ie&&Number(Ie.state)||0,Oe=(n.stability_assessment?e.states[n.stability_assessment]:null)?.state||"",Ye=n.lifted_index?e.states[n.lifted_index]:null,ge=Ye&&Number(Ye.state)||0,nt=k(ko[p]||So),Tt=Math.max(P-A,1),hn=Math.max(0,Math.min(100,(u-A)/Tt*100)),ea=wt(v),Tr=`data-condition="${g(p)}" data-night="${c}" data-cloud='${g(JSON.stringify(he||""))}'`,Fr=tt(u,20,42),Cr=tt(u,15,-10),Ft=Math.max(Fr,Cr),Ar=Te(u),gn=Ft>.05?`text-shadow: 0 2px 20px rgba(0,0,0,0.3), ${ja(Ar,Ft)}`:"text-shadow: 0 2px 20px rgba(0,0,0,0.3)",ta=qa(Ft),Er=ta?`<div class="pw-tension-vignette" style="background: ${k(ta)}"></div>`:"",wn=xe>0?`<div class="pw-snow-badge" style="color:var(--pw-color-freeze, #5ac8fa)">\u2744 ${g(xe.toFixed(1))} ${g(ie)}</div>`:"",aa=Le?.state||"",Pe=Le?.attributes?.difference,it="";aa==="wind_chill"&&Pe!==null&&Pe!==void 0?it=`<div class="pw-feels-context">Wind chill ${g(String(Math.round(Number(Pe))))}\xB0</div>`:aa==="heat_index"&&Pe!==null&&Pe!==void 0&&(it=`<div class="pw-feels-context">Heat index +${g(String(Math.round(Number(Pe))))}\xB0</div>`);let Nr=["marginal","slight","enhanced","moderate","high"],Rr="";if(Oe&&Nr.includes(Oe)){let L=Yt[Oe];if(L){let z=k(L.color),M=`\u26A1 ${g(L.label)}`;if(Ye&&ge<0){let X=Qe.find(Y=>ge>=Y.min)||Qe[Qe.length-1];M+=` \xB7 <span style="color:${k(X.color)}">LI ${g(String(ge))}</span>`}Rr=` <span class="pw-stability-badge" style="background:${z}33; color:${z}">${M}</span>`}}let Ct=Re?.state||"",bn=Ct&&!["unavailable","unknown"].includes(Ct)&&tr[Ct]||"",st=Ne?.state||"",vn=st&&!["unavailable","unknown"].includes(st)&&tr[st]||"",ra=te?.attributes?.trend_symbol||"",oa=te?.state==="rising"?"#30d158":te?.state==="falling"?"#ff9f0a":te?.state==="steady"?"#5ac8fa":"",Lr=ye&&Math.abs(fe-U)>=.5,At=te?.attributes?.change_3h,Et=To(At!=null?Number(At):null,te?.state||"");if(Et==="Press"&&te?.state){let L=te.state;L==="rising"?Et="Rising":L==="falling"&&(Et="Falling")}let xn=oa||(te?"#5ac8fa":""),zr=Ia(h),yn=gt(h),Nt=b>h+5,Dr=h>0&&b/h>1.5,Ir=Nt?Dr?` / <b>${g(Math.round(b))}</b>`:` / ${g(Math.round(b))}`:"",Or=`<svg width="10" height="10" viewBox="0 0 10 10" style="vertical-align:middle;transform:rotate(${Number(v)||0}deg)"><polygon points="5,0 3,8 5,6 7,8" fill="${k(zr)}" opacity="0.8"/></svg>`,_n=`${g(Math.round(h))}${Ir} ${Or}${g(ea)}`,$n=`linear-gradient(to right, ${k(Te(A))}, ${k(Te(P))})`,Pr="";if(Ie&&ot<5e3&&A<=0){let L=Math.max(0,Math.min(100,(0-A)/Tt*100)),z=Ie?.attributes?.unit_of_measurement||"m";Pr=`<div class="pw-arc-freeze" style="left:${Number(L)}%">
            <div class="pw-arc-freeze-label">\u2744 ${g(String(Math.round(ot)))}${g(z)}</div>
            <div class="pw-arc-freeze-line"></div>
          </div>`}let na="",ia=l?e.states[l]:null;if(ia&&Ge&&Ce&&Xe){let L=ze.getTime(),z=ia.state==="above_horizon",M,X,Y,_e,ce;if(z){let W=Ge.getTime(),se=Ce.getTime(),Se=Math.max(se-W,1);M=Math.max(0,Math.min(100,(L-W)/Se*100)),X=xt(Ge),Y=xt(Ce),_e="background: linear-gradient(to right, #ff9f0a, #ffd60a)",ce="#ff9f0a"}else{let W=Ce.getTime(),se=Xe.getTime(),Se=Math.max(se-W,1);M=Math.max(0,Math.min(100,(L-W)/Se*100)),X=xt(Ce),Y=xt(Xe),_e="background: linear-gradient(to right, #1a3050, #5ac8fa)",ce="#5ac8fa"}let H=`left:${Number(M)}%; background:${k(ce)}; box-shadow: 0 0 6px ${k(ce)}66`,ke=` style="color:${k(ce)}"`,q=z?"1":"0.85",$e=z?"":"\u{1F319}";na=`
      <div class="pw-day-arc" style="opacity:${q}">
        <span class="pw-day-arc-label"${ke}>${g(X)}</span>
        <div class="pw-day-arc-bar">
          <div class="pw-day-arc-fill" style="width:${Number(M)}%; ${_e}"></div>
          <div class="pw-day-arc-marker" style="${H}">${$e}</div>
        </div>
        <span class="pw-day-arc-label"${ke}>${g(Y)}</span>
      </div>`}let Hr="",Wr="",Br="",lt="",sa=o?.hourly||[];if(sa.length>0){let M=ht(sa,new Date).slice(0,12),X=M.some(H=>Number(H.precipitation_probability)>0),Y=Co(x,V,G,O,ne,ee,xe,ie);if(x>0)lt=`
      <div class="pw-weather-summary" style="position:relative; z-index:2">
        <span style="font-size:14px">\u{1F327}</span> ${Y}
      </div>`;else{let H=er({now:new Date,cloudCoverNow:he?he.total:0,conditionNow:p,slots:M,windSpeed:h,uvIndex:U,stabilityState:Oe});lt=`
      <div class="pw-weather-summary" style="position:relative; z-index:2">
        ${g(H.sentence)}
      </div>`}if(X){let H=M.map($e=>{let W=Math.min(100,Math.max(0,Number($e.precipitation_probability)||0)),se=Number($e.snowfall)||0,Se=(Number($e.rain)||0)+(Number($e.showers)||0),Ke=se>0;if(Ke&&Se>0){let eo=se+Se,da=Math.round(W*se/eo),to=W-da;return`<div class="pulse-precip-slot"><div class="pulse-precip-fill" style="height:${Number(to)}%"></div><div class="pulse-precip-fill pw-precip-snow" style="height:${Number(da)}%"></div></div>`}return`<div class="pulse-precip-slot"><div class="${Ke?"pulse-precip-fill pw-precip-snow":"pulse-precip-fill"}" style="height: ${W}%"></div></div>`}).join(""),q=M[Math.floor(M.length/2)]?`+${Math.floor(M.length/2)}h`:"";Hr=`
      <div style="position: relative; z-index: 2; margin: 16px var(--pulse-space-card-wide) 0;">
        <div class="pw-precip-label">${Y}</div>
        <div class="pulse-precip-bar" role="img" aria-label="Precipitation probability" style="position:relative">${H}</div>
        <div class="pw-precip-times"><span>Now</span><span>${g(q)}</span><span>+${g(String(M.length))}h</span></div>
      </div>`}if(M.some(H=>Number(H.cape)>300)){let q=Fo(M,200,24),$e=q.peakIndex/Math.max(M.length-1,1)*200,W=q.peakValue>=1e3?`${(q.peakValue/1e3).toFixed(1)}k`:String(Math.round(q.peakValue)),se=M[q.peakIndex]?.datetime?new Date(M[q.peakIndex].datetime):null,Se=se?Ze(se):"",Ke=Je("pw-cape-grad");Wr=`
      <div style="position: relative; z-index: 2; margin: 4px var(--pulse-space-card-wide) 0;">
        <div class="pw-precip-label" style="font-size:10px">Storm risk</div>
        <div style="position:relative">
          <svg class="pw-cape-sparkline" width="100%" height="24" viewBox="0 0 200 24" preserveAspectRatio="none">
            <defs>
              <linearGradient id="${Ke}" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#ff453a" stop-opacity="0.6"/>
                <stop offset="33%" stop-color="#ff9f0a" stop-opacity="0.4"/>
                <stop offset="66%" stop-color="#ffd60a" stop-opacity="0.3"/>
                <stop offset="100%" stop-color="#30d158" stop-opacity="0.2"/>
              </linearGradient>
            </defs>
            <path d="${q.areaPath}" fill="url(#${Ke})"/>
            <path d="${q.svgPath}" fill="none" stroke="#ff9f0a" stroke-width="1.5"/>
          </svg>
          ${q.peakValue>0?`<div class="pw-cape-peak" style="left:${Number($e)}px">${g(W)} ${g(Se)}</div>`:""}
        </div>
      </div>`}M.some(H=>H.dew_point!==void 0&&H.dew_point!==null)&&(Br=`
      <div style="position: relative; z-index: 2; margin: 2px var(--pulse-space-card-wide) 0;">
        <div class="pw-precip-label" style="font-size:10px">Comfort</div>
        <div class="pw-comfort-bar">${M.map(ke=>{let q=Number(ke.dew_point)||0;return`<div class="pw-comfort-slot" style="background:${k(Pa(q))}"></div>`}).join("")}</div>
      </div>`)}let kn=Te(m),Sn=he!==null?Oa(he.total):"",Mn=Mo(f),Tn=`${g(Math.round(_))} ${g(T)}${ra?` <span style="color:${k(oa)}">${g(ra)}</span>`:""}`,Fn=`${g(Math.round(U))}${Lr?` <span style="opacity:0.5">/ ${g(String(Math.round(fe)))}</span>`:""}`;function Ur(){return Ze(new Date)}let Vr=Ha(p),jr=re(p,c),qr=t?.location_label||"Now",la=it?it.replace(/<[^>]*>/g,"").trim():"",Gr=lt?lt.replace(/<[^>]*>/g,"").trim():"",Xr=he?Math.round(he.total)+"%":"--",Yr=`
        <div class="pw-loc-stamp">${g(qr)} \xB7 ${g(Ur())}</div>
        <div class="pw-hero-block">
          ${y.display(Math.round(u),{suffix:S})}
          ${y.gloss(`${Vr}${la?" \xB7 "+la:""}`)}
        </div>`,Kr=y.statsRow([y.stat(`${Math.round(A)}/${Math.round(P)}\xB0`,"range"),y.stat(`${Math.round(h)}${Nt?` / ${Math.round(b)}`:""} ${ea}`,Nt?"wind / gust":"wind"),y.stat(Math.round(U),"uv"),y.stat(Xr,"cloud")],{columns:4}),ct=(o?.daily||[]).slice(0,7),Rt="";if(ct.length>=2){let M=ct.map(W=>Number(W.temperature)||0),X=ct.map(W=>Number(W.templow??W.temperature)||0),Y=Math.min(...X),_e=Math.max(...M),ce=Math.max(_e-Y,1),H=W=>W/(ct.length-1)*320,ke=W=>38-(W-Y)/ce*34-2,q=M.map((W,se)=>`${se===0?"M":"L"}${H(se).toFixed(1)},${ke(W).toFixed(1)}`).join(" ");Rt=`<svg viewBox="0 0 320 38" preserveAspectRatio="none">
      <path d="${`${q} L320,38 L0,38 Z`}" fill="rgba(168,61,42,0.08)"/>
      <path d="${q}" stroke="var(--pw-ink-cream)" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0.85"/>
    </svg>`}let Qr=Rt?`<div class="pw-overview-spark-block">
        ${y.chartCaption("7-day temperature trend")}
        <div class="pw-overview-spark">${Rt}</div>
      </div>`:"",ca=Re?.state||"",Lt=te?.state||"",Zr=[Number.isFinite(f)&&f>0,Number.isFinite(w)&&w!==0,!!ca,!!Lt].filter(Boolean).length>=2,pa="";if(Zr){let L=Number.isFinite(f)&&f>0?y.stat(`${Math.round(f)}%`,st||"humidity"):y.stat("\u2014","humidity"),z=Number.isFinite(w)?y.stat(`${Math.round(w)}${C}`,"dew point"):y.stat("\u2014","dew point"),M=Number.isFinite(_)&&_>0?y.stat(`${Math.round(_)}`,Lt?`${T} ${Lt}`:T):y.stat("\u2014","pressure"),X=Number.isFinite($)&&$>0?y.stat(`${$.toFixed($<10?1:0)}${E}`,ca||"visibility"):y.stat("\u2014","visibility");pa=y.statsRow([L,z,M,X],{columns:4})}let Jr=`
        ${Yr}
        ${y.narrative(Gr)}
        ${na}
        ${Qr}
        ${Kr}
        ${pa}`;return Q({sectionClass:"pw-overview-v2",ariaLabel:"Current weather overview",brandVariant:jr,preContent:`${Er}<div class="pw-fx" ${Tr} role="img" aria-label="${g(p)} weather effects"></div>`,body:Jr,pro:t?.pro!==!1})}function Ao(e){if(!e||e.length===0)return"Forecast unavailable";let t=0;for(let n=1;n<e.length;n++)Number(e[n].temperature)>Number(e[t].temperature)&&(t=n);let a=e.findIndex(n=>Number(n.precipitation_probability)>=50),r=n=>n===0?"today":new Date(String(e[n].datetime||"")).toLocaleDateString([],{weekday:"short"}).toLowerCase(),o=r(t),i=Math.round(Number(e[t].temperature));return a>=0&&a!==t?`Warmest ${o} (${i}\xB0) \xB7 rain ${r(a)}`:a>=0?`Wet stretch \xB7 warmest ${o} (${i}\xB0)`:`Warmest ${o} (${i}\xB0) \xB7 dry through the week`}function rr({hass:e,config:t,discovery:a,forecastData:r,weatherEntity:o}){let i=r?.daily||[];if(i.length===0)return null;let n=a.atmosCe,p=(n.temperature?e.states[n.temperature]:null)?.attributes?.unit_of_measurement||"\xB0C",c=i.slice(0,7),s=c.flatMap(S=>[K(S.temperature,0),K(S.templow,0)]),d=Math.min(...s),u=Math.max(...s),m=Math.max(u-d,1),f=Number(o?.attributes?.temperature),h=c.map((S,E)=>{let T=K(S.temperature,0),C=K(S.templow,0),R=Math.round(Number(S.precipitation_probability)||0),D=E===0,B=D?"today":new Date(String(S.datetime||"")).toLocaleDateString([],{weekday:"short"}).toLowerCase(),A=bt(String(S.condition||"")),P=R>=50?`<span class="pw-fc-pop">${g(String(R))}%</span>`:'<span class="pw-fc-pop"></span>',I=(C-d)/m*100,U=(T-C)/m*100,x=D&&Number.isFinite(f)?`<span class="pw-fc-now" style="left:${k(((f-d)/m*100).toFixed(2)+"%")}"></span>`:"";return`
      <div class="pw-fc-row${D?" is-today":""}">
        <span class="pw-fc-day">${g(B)}</span>
        <span class="pw-fc-icon" aria-hidden="true">${A}</span>
        ${P}
        <span class="pw-fc-bar" aria-label="High ${Math.round(T)}${g(p)}, low ${Math.round(C)}${g(p)}">
          <span class="pw-fc-bar-fill" style="left:${k(I.toFixed(2)+"%")};width:${k(U.toFixed(2)+"%")}"></span>
          ${x}
        </span>
        <span class="pw-fc-range">
          <span class="pw-fc-lo">${g(String(Math.round(C)))}\xB0</span>
          <span class="pw-fc-hi">${g(String(Math.round(T)))}\xB0</span>
        </span>
      </div>`}).join(""),{condition:v,isNight:b}=ft(e,o,a),w=re(v,b),$=Ao(c),_=`
        <div class="pw-fc-list" role="list">
          ${h}
        </div>`;return Q({sectionClass:"pw-forecast-v2",ariaLabel:"Seven-day forecast",brandVariant:w,kicker:"the week ahead",narrative:$,body:_,pro:t?.pro!==!1})}var je=240,be=je/2,ve=je/2,at=90,or=.12,yt=6,_t=.5,nr=.25,Eo=.3,No=6,ir=.7,Ro=.2,Lo=4,zo=3.3,Do=15,Io=35,Oo=.08,Po=.2,Ho=[{l:"N",a:0},{l:"NE",a:45},{l:"E",a:90},{l:"SE",a:135},{l:"S",a:180},{l:"SW",a:225},{l:"W",a:270},{l:"NW",a:315}];function sr(e){return(e-90)*Math.PI/180}function Wo(e){let t=e*Math.PI/180;return{x:Math.sin(t),y:-Math.cos(t)}}function Fe(e,t){return{x:be+t*Math.cos(e),y:ve+t*Math.sin(e)}}function Bo(e,t,a,r){let o=Math.min(e/Be,1)*at,i=Fe(t-nr,o),n=Fe(t+nr,o),l=a>Eo?"pw-gust-sweep":"",p=Math.max(.6,2.5-a*2).toFixed(2),c=(.15+a*.3).toFixed(2),s=`transform-origin:${be}px ${ve}px;--gust-dur:${p}s;--gust-peak:${c}`;return pe("path",{class:l,d:`M${be},${ve} L${i.x.toFixed(1)},${i.y.toFixed(1)} L${n.x.toFixed(1)},${n.y.toFixed(1)} Z`,fill:r,opacity:.15,style:s})}function Uo(e,t,a,r){let o=Math.min(e/Be,1)*at,i=Fe(t,o),n=Fe(t-or,o*.7),l=Fe(t+or,o*.7),p={x:i.x-yt*Math.cos(t-_t),y:i.y-yt*Math.sin(t-_t)},c={x:i.x-yt*Math.cos(t+_t),y:i.y-yt*Math.sin(t+_t)},s=a*No,d=Math.max(.4,4-a*3.6),u=s>Ro?`animation:pw-arrowSway ${d.toFixed(2)}s ease-in-out infinite;--sway-fwd:${(s*ir).toFixed(2)}deg;--sway-back:${(-s*(1-ir)).toFixed(2)}deg`:"",m=`transform-origin:${be}px ${ve}px;filter:drop-shadow(0 0 6px ${Me(r,.38)});${u}`,f=pe("path",{d:`M${be},${ve} L${n.x.toFixed(1)},${n.y.toFixed(1)} L${i.x.toFixed(1)},${i.y.toFixed(1)} L${l.x.toFixed(1)},${l.y.toFixed(1)} Z`,fill:r,opacity:.5}),h=pe("line",{x1:be,y1:ve,x2:i.x.toFixed(1),y2:i.y.toFixed(1),stroke:r,"stroke-width":2.5,"stroke-linecap":"round"}),v=pe("path",{d:`M${i.x.toFixed(1)},${i.y.toFixed(1)} L${p.x.toFixed(1)},${p.y.toFixed(1)} L${c.x.toFixed(1)},${c.y.toFixed(1)} Z`,fill:r});return pe("g",{style:m},f+h+v)}function lr({hass:e,config:t,discovery:a,weatherEntity:r}){let o=r.attributes,i=a.atmosCe,n=t.speed_mode||"speed",l=(j,O)=>mt(e,i,o,j,O),p=l("wind_speed","wind_speed"),c=l("wind_gusts","wind_gust_speed")||l("wind_gusts","wind_gusts")||p,s=l("wind_direction","wind_bearing"),u=(i.wind_speed?e.states[i.wind_speed]:null)?.attributes?.unit_of_measurement||o.wind_speed_unit||"km/h",m=n==="gust"?c:p,f=Math.min(p/Be,1),h=gt(m),v=jt(m),b=We[v]||We.calm,w=wt(s),$=sr(s),_=Wo(s),S=Math.round(f*ha),E=Lo-f*zo,T=Oo+f*Po,C=Do+f*Io,R=-_.y,D=_.x,B=[];for(let j=0;j<S;j++){let O=(Math.random()-.5)*400,ee=-120-Math.random()*60,ie=420+Math.random()*60,fe=(C*(.6+Math.random()*.8)).toFixed(1),ye=(E+Math.random()*E*.5).toFixed(2),Ne=(Math.random()*3).toFixed(2),Re=(T*(.5+Math.random()*.5)).toFixed(3),Le=(ee*_.x+O*R).toFixed(1),te=(ee*_.y+O*D).toFixed(1),ze=(ie*_.x+O*R).toFixed(1),De=(ie*_.y+O*D).toFixed(1);B.push(`<div class="pw-streak" style="left:50%;top:50%;width:${fe}px;height:1px;transform:rotate(${s-90}deg);animation-duration:${ye}s;animation-delay:${Ne}s;opacity:${Re};background:linear-gradient(to right, transparent, ${Me(b,.27)}, transparent);--sx:${Le}px;--sy:${te}px;--ex:${ze}px;--ey:${De}px"></div>`)}let A=[];for(let j=1;j<=3;j++)A.push(pe("circle",{cx:be,cy:ve,r:j*30,fill:"none",stroke:b,"stroke-width":.5,opacity:.08+j*.02}));for(let j of Ho){let O=sr(j.a),ee=Fe(O,20),ie=Fe(O,at+4),fe=Fe(O,at+16),ye=j.l.length===1;A.push(pe("line",{x1:ee.x.toFixed(1),y1:ee.y.toFixed(1),x2:ie.x.toFixed(1),y2:ie.y.toFixed(1),stroke:b,"stroke-width":.5,opacity:.12})),A.push(pe("text",{x:fe.x.toFixed(1),y:fe.y.toFixed(1),"text-anchor":"middle","dominant-baseline":"central",fill:ye?"rgba(255,255,255,0.7)":"rgba(255,255,255,0.3)","font-size":ye?11:9,"font-weight":ye?600:400},g(j.l)))}A.push(Bo(c,$,f,b)),A.push(Uo(m,$,f,b)),(m>Be||c>Be)&&A.push(pe("circle",{cx:be,cy:ve,r:at+2,fill:"none",stroke:"#ff453a","stroke-width":1.5,"stroke-dasharray":"4 4",opacity:.7})),A.push(pe("circle",{cx:be,cy:ve,r:18,fill:b,opacity:.06})),A.push(pe("circle",{cx:be,cy:ve,r:3,fill:b}));let I=f>It?(f-It)*5:0,U=Math.max(.15,.4-f*.25),x="";I>.1&&(x=`--dx:${(I*_.x).toFixed(2)}px;--dy:${(I*_.y).toFixed(2)}px;animation:pw-roseShake ${U.toFixed(2)}s ease-in-out infinite`);let N=Math.round(12+f*50).toString(16).padStart(2,"0"),V=Math.round(6+f*25).toString(16).padStart(2,"0"),G=Da(`radial-gradient(ellipse at 50% 50%, ${b}${N} 0%, ${b}${V} 40%, transparent 85%)`),oe=re(r?.state||"sunny",!1),ne=n==="gust",de=ne?"wind \xB7 gust":"wind",xe=`
        <div class="pw-wind-streaks">${B.join("")}</div>
        <div class="pw-rose-wrap" style="${x}">
          <svg class="pw-rose-svg" width="${je}" height="${je}" viewBox="0 0 ${je} ${je}" style="display:block" role="img" aria-label="Wind compass rose showing ${g(Math.round(m))} ${g(u)} from ${g(w)}">
            <title>Wind direction compass</title>
            ${A.join("")}
          </svg>
          <div class="pw-wind-center">
            <div class="pw-wind-speed" style="color: ${k(b)}">${g(Math.round(m))}</div>
            <div class="pw-wind-unit">${g(u)} \xB7 ${g(Math.round(s))}\xB0 ${g(w)}</div>
            <div class="pw-wind-beaufort" style="color: ${k(b)}">${g(h.name)}</div>
            <div class="pw-wind-beaufort-desc">${g(h.desc)}</div>
          </div>
        </div>`;return Q({sectionClass:"pw-wind-v2",ariaLabel:"Wind compass and speed",brandVariant:oe,kicker:de,sectionStyle:`background: ${k(G)}`,body:xe,proAction:"wind-mode",proInitial:ne,proAriaLabel:"Toggle speed and gust mode",pro:t.pro!==!1})}function Vo(e,t,a,r){if(a&&r){let n=(t==="us"?Dt:zt).find(l=>l.label.toLowerCase()===a.toLowerCase());return{label:a,color:r,desc:n?.desc||""}}let o=t==="us"?Dt:zt;for(let i of o)if(e<=i.max)return i;return o[o.length-1]}function jo(e){let t=(e||"").toLowerCase();return t.includes("very unhealthy")||t.includes("hazardous")||t.includes("extremely poor")?"very_unhealthy":t.includes("sensitive")?"unhealthy_sg":t.includes("unhealthy")||t.includes("very poor")?"unhealthy":t.includes("moderate")||t.includes("fair")||t.includes("poor")?"moderate":t.includes("good")?"good":"unknown"}var cr=Object.freeze({good:"var(--pw-good-green)",moderate:"var(--pw-warn-yellow)",unhealthy_sg:"var(--pw-warn-amber)",unhealthy:"var(--pw-warn-red)",very_unhealthy:"#8b0000",unknown:"var(--pw-ink-cream)"});function pr({hass:e,config:t,discovery:a,weatherEntity:r}){let o=t.scale||"eu",i=o==="us"?"us_aqi":"european_aqi",n=t.aqi_entity||a.atmosCe[i];if(!n||!e.states[n])return null;let l=e.states[n],p=Number(l.state)||0,c=l.attributes?.category||null,s=l.attributes?.color||null,d=Vo(p,o,c,s),u=I=>{let U=a.atmosCe[I];if(!U||!e.states[U])return null;let x=Number(e.states[U].state);return Number.isFinite(x)?x:null},m=u("pm2_5"),f=u("pm10"),h=u("ozone"),v=u("nitrogen_dioxide"),b=u("sulphur_dioxide"),w=u("carbon_monoxide"),$=jo(d.label),_=cr[$]||cr.unknown,S=re("cloudy",!1),E=o==="us",C=Math.min(100,Math.max(0,p/(E?300:100)*100)),R=E?"air quality \xB7 us":"air quality",D=y.heroBlock({value:Math.round(p),valueColor:_,tier:d.label,tierFlavor:"aqi",tierColor:_}),B=`
        <div class="pw-aq-band" aria-hidden="true">
          <div class="pw-aq-marker" style="left:${k(`${C.toFixed(2)}%`)}"></div>
        </div>
        <div class="pw-aq-band-labels">
          <span>good</span>
          <span>moderate</span>
          <span>unh sg</span>
          <span>unhealthy</span>
          <span>v.unh</span>
        </div>`,A=y.statsRow([m!==null?y.stat(Math.round(m),"PM2.5",{data:!0}):"",f!==null?y.stat(Math.round(f),"PM10",{data:!0}):"",h!==null?y.stat(Math.round(h),"O\u2083",{data:!0}):"",v!==null?y.stat(Math.round(v),"NO\u2082",{data:!0}):"",b!==null?y.stat(Math.round(b),"SO\u2082",{data:!0}):"",w!==null?y.stat(w.toFixed(1),"CO",{data:!0}):""],{columns:3}),P=`
        ${D}
        ${B}
        ${A}`;return Q({sectionClass:"pw-air-quality-v2",ariaLabel:"Air quality index",brandVariant:S,kicker:R,body:P,proAction:"aqi-scale",proInitial:E,proAriaLabel:"Toggle EU and US AQI scale",pro:t.pro!==!1})}function qo(e){let t=(e%ae+ae)%ae;return Ma[Math.floor(t/ae*8)%8]}function Go(e){return(e%ae+ae)%ae<ae/2}var Kt=864e5;function ue(e){return!e||isNaN(e.getTime())?"--:--":e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1})}function Xo(e,t,a,r,o){if(r==null)return`<circle cx="${e.toFixed(1)}" cy="${t.toFixed(1)}" r="${a}" fill="#c8d0e0"/>`;let i=Math.max(0,Math.min(1,r/100)),n=o!=null?Go(o):!0,l=`<circle cx="${e.toFixed(1)}" cy="${t.toFixed(1)}" r="${a}" fill="#2a2a3a"/>`;if(i>=.99)l+=`<circle cx="${e.toFixed(1)}" cy="${t.toFixed(1)}" r="${a}" fill="#e8e0d0"/>`;else if(i>.01){let p=t-a,c=t+a,s=(a*Math.abs(2*i-1)).toFixed(1),d=i>.5?1:0,u;n?u=`M${e.toFixed(1)},${p.toFixed(1)} A${a},${a} 0 0 1 ${e.toFixed(1)},${c.toFixed(1)} A${s},${a} 0 0 ${d} ${e.toFixed(1)},${p.toFixed(1)} Z`:u=`M${e.toFixed(1)},${p.toFixed(1)} A${a},${a} 0 0 0 ${e.toFixed(1)},${c.toFixed(1)} A${s},${a} 0 0 ${1-d} ${e.toFixed(1)},${p.toFixed(1)} Z`,l+=`<path d="${u}" fill="#e8e0d0"/>`}return l}var $t="#050510",dr="#0a1226",ur="#172b4f",mr="#1f3d6e",fr="#3a6fa8",hr="#d97a3a",gr="#ff9f0a",wr="#ffc560",br="#7eaedb",vr="#2c5a8e",xr="#ffd60a";function Yo(e,t,a,r,o,i,n,l,p,c){let s=new Date(e.getTime());s.setHours(0,0,0,0);let d=e.getTime(),u=t.getTime(),m=(a??new Date(d-35*6e4)).getTime(),f=(r??new Date(d-30*6e4)).getTime(),h=(o??new Date(d-6*6e4)).getTime(),v=(i??new Date(d+30*6e4)).getTime(),b=(n??new Date(u-30*6e4)).getTime(),w=(l??new Date(u+6*6e4)).getTime(),$=(p??new Date(u+30*6e4)).getTime(),_=(c??new Date(u+35*6e4)).getTime(),S=(d+u)/2,E=P=>Math.max(0,Math.min(100,P)),T=P=>E((P-s.getTime())/Kt*100),C=(P,I)=>T((P+I)/2),R=Math.min(60,(u-d)/8)*6e4,D=S-R,B=S+R;return`linear-gradient(to right, ${[`${$t} 0%`,`${$t} ${T(m).toFixed(2)}%`,`${dr} ${C(m,f).toFixed(2)}%`,`${ur} ${T(f).toFixed(2)}%`,`${mr} ${C(f,h).toFixed(2)}%`,`${fr} ${T(h).toFixed(2)}%`,`${hr} ${C(h,d).toFixed(2)}%`,`${gr} ${T(d).toFixed(2)}%`,`${wr} ${C(d,v).toFixed(2)}%`,`${br} ${T(v).toFixed(2)}%`,`${vr} ${C(v,D).toFixed(2)}%`,`${xr} ${T(D).toFixed(2)}%`,`${xr} ${T(B).toFixed(2)}%`,`${vr} ${C(B,b).toFixed(2)}%`,`${br} ${T(b).toFixed(2)}%`,`${wr} ${C(b,u).toFixed(2)}%`,`${gr} ${T(u).toFixed(2)}%`,`${hr} ${C(u,w).toFixed(2)}%`,`${fr} ${T(w).toFixed(2)}%`,`${mr} ${C(w,$).toFixed(2)}%`,`${ur} ${T($).toFixed(2)}%`,`${dr} ${C($,_).toFixed(2)}%`,`${$t} ${T(_).toFixed(2)}%`,`${$t} 100%`].join(", ")})`}function yr(e){if(!e||isNaN(e)||e<=0)return"--";let t=Math.round(e/6e4),a=Math.floor(t/60),r=t%60;return`${a}h ${String(r).padStart(2,"0")}m`}function _r({hass:e,config:t,discovery:a}){let r=new Date,o=a.sunEntityId?e.states[a.sunEntityId]:null;if(!o)return null;let i=o.attributes||{},n=i.next_rising||i.sunrise,l=i.next_setting||i.sunset;if(!n||!l)return null;let p=new Date(r);p.setHours(12,0,0,0);let c=Z(new Date(n),p),s=Z(new Date(l),p);if(!c||!s||isNaN(c.getTime())||isNaN(s.getTime()))return null;let d=a.atmosCe,u=ge=>d[ge]?new Date(String(e.states[d[ge]]?.state)):null,m=Z(u("golden_hour_morning_start"),c),f=Z(u("golden_hour_morning_end"),c),h=Z(u("blue_hour_morning_start"),c),v=Z(u("golden_hour_evening_start"),s),b=Z(u("golden_hour_evening_end"),s),w=Z(u("blue_hour_evening_end"),s),$=i.next_dawn,_=i.next_dusk,S=$?Z(new Date($),c):null,E=_?Z(new Date(_),s):null,T=d.moon_phase?e.states[d.moon_phase]:null,C=T?.attributes||{},R=C.moon_age!==void 0?Number(C.moon_age):null,D=C.illumination!==void 0?Number(C.illumination):null,B=R!==null?qo(R):T?.state||null,A=Z(u("moonrise"),r),P=Z(u("moonset"),r),I=r.getTime()>=c.getTime()&&r.getTime()<=s.getTime(),U=ue(c),x=ue(s),N=(c.getTime()+s.getTime())/2,V=ue(new Date(N)),G=s.getTime()-c.getTime(),oe=Kt-G,ne=yr(G),de=yr(oe),xe=I?"Daylight":"Night",j=I?ne:de,O=new Date(c.getTime());O.setHours(0,0,0,0);let ee=Math.max(0,Math.min(100,(r.getTime()-O.getTime())/Kt*100)),ie=Yo(c,s,S,h,m,f,v,b,w,E),ye=`
      <div class="pw-astro-rb" role="img" aria-label="24-hour sky phase ribbon">
        <div class="pw-astro-rb-track" style="${`background: ${k(ie)}`}"></div>
        <div class="pw-astro-rb-now" style="left:${ee.toFixed(2)}%" aria-hidden="true"></div>
        <div class="pw-astro-rb-axis">
          <span>00</span><span>06</span><span>12</span><span>18</span><span>24</span>
        </div>
      </div>`,Ne=D!=null?Math.round(D):null,Re=B||"Moon",Le=Xo(24,24,22,D,R),te=Ne!==null?`<span class="pw-astro-moon-illum">${g(`${Ne}%`)}</span> illuminated`:"",ze=R!=null?`${R.toFixed(1)}d old`:"",De=R!=null?(()=>{let ge=ae/2,nt=(R%ae+ae)%ae;return`${(nt<=ge?ge-nt:ae-nt+ge).toFixed(1)}d to full`})():"",St=[te,ze,De].filter(Boolean).join(" \xB7 "),Mt=`
      <div class="pw-astro-moon-hero">
        <div class="pw-astro-moon-glyph" aria-hidden="true">
          <svg viewBox="0 0 48 48" width="48" height="48">${Le}</svg>
        </div>
        <div class="pw-astro-moon-text">
          <div class="pw-astro-moon-name">${g(Re)}</div>
          <div class="pw-astro-moon-meta">${St}</div>
        </div>
      </div>`,Ge=I?`Sun rose ${U}, sets ${x} \xB7 solar noon ${V}.`:`Sun set ${x}, rises ${U} \xB7 solar noon ${V}.`,Ce=`
      <div class="pw-astro-hero">
        <div class="pw-astro-hero-tier">${g(xe)}</div>
        <div class="pw-astro-hero-num">${g(j)}</div>
      </div>
      ${y.narrative(Ge)}`,Xe=ue(A),he=ue(P),Ie=y.statsRow([y.stat(ue(S),"civil dawn"),y.stat(ue(m),"golden start",{valueColor:"var(--pw-warn-amber)"}),y.stat(ue(h),"blue start",{valueColor:"var(--pw-wind)"}),y.stat(Xe,"moonrise")],{columns:4,divided:!0}),ot=y.statsRow([y.stat(ue(E),"civil dusk"),y.stat(ue(b),"golden end",{valueColor:"var(--pw-warn-amber)"}),y.stat(ue(w),"blue end",{valueColor:"var(--pw-wind)"}),y.stat(he,"moonset")],{columns:4,divided:!0}),Jt=`
      ${Ce}
      ${Mt}
      ${ye}
      ${Ie}
      ${ot}`,Oe=re(I?"sunny":"clear-night",!I),Ye=`<div class="pw-fx" data-astro-stars="${!I}" data-astro-day="${I}" role="img" aria-label="Sky atmospheric effects"></div>`;return Q({sectionClass:"pw-astro-v2",extraSectionClass:I?"":"is-night",ariaLabel:"Astronomy: sun and moon",brandVariant:Oe,kicker:"today's sky",preContent:Ye,body:Jt,pro:t?.pro!==!1})}function Ko(e,t){let a=(e?.state||"").toLowerCase();if(!e||a==="none"||a==="no alerts"||a==="unavailable"||a==="0"||a==="off")return[];let r=e.entity_id||"";if(r.endsWith("_alert_count")||r.startsWith("binary_sensor."))return[];let o=e.attributes,i=[],n=o.alert_type||o.type||"wind",l=Number(o.level),p=Number.isFinite(l)&&l>0?l:1,c=o.color||Ht[p]||Ht[1],s=ya[n]||"mdi:alert",d=Number(o.progress)||0,u=Array.isArray(o.locations)?o.locations:[],m=o.end_time??"",f=null,h=null,v=!1;if(m==="")v=!0;else if(m){let b=new Date(m),w=new Date,$=b.getTime()-w.getTime();if($/(1e3*60*60*24)>va)v=!0;else if(t)f=Math.max(0,$/(1e3*60*60));else{let S=o.start_time||o.datetime;if(S){let E=new Date(String(S));h=Math.max(0,(E.getTime()-w.getTime())/(1e3*60*60))}}}return i.push({type:n,icon:s,severity:p,color:c,summary:String(o.headline||o.summary||e.state||""),desc:String(o.description||""),active:t,hoursLeft:f,hoursUntil:h,progress:d,locations:u,link:o.link?String(o.link):null,endTime:String(m),isUntilFurtherNotice:v}),i}function Qo(e){let t=e.severity>=4?"red":"amber",a="";e.isUntilFurtherNotice?a="UNTIL FURTHER NOTICE":e.active&&e.hoursLeft!==null?a=`${Math.round(e.hoursLeft)}H LEFT`:e.hoursUntil!==null?a=`IN ${Math.round(e.hoursUntil)}H`:e.active&&(a="ACTIVE");let r=String(e.type||"").toUpperCase(),o=String(e.summary||e.desc||"").toUpperCase().trim(),i=e.locations.length>0?e.locations.join(", ").toUpperCase():"",l=[a,r,o,i].filter(Boolean).join(" \xB7 ");return`
    <div class="pw-alert-ticker pw-alert-${t}">
      <span class="pw-alert-tri">\u25B6</span>
      <span class="pw-alert-text">${g(l)}</span>
    </div>`}function $r({hass:e,config:t,discovery:a,proPersisted:r=!1}){let o=[];a.atmosCe.active_alert&&e.states[a.atmosCe.active_alert];for(let x of a.alertEntityIds){let N=e.states[x];if(!N)continue;let V=x.includes("active")||N.state==="on";o.push(...Ko(N,V))}let n=o.length>0,l=n?o.reduce((x,N)=>N.severity>x.severity?N:x,o[0]).severity:0,p=n?o.reduce((x,N)=>N.severity>x.severity?N:x,o[0]).color:"#30d158",c=tt(l,0,4),s=n?Math.min(1.5,1+(o.length-1)*.15):1,d=Ga(c,3,1.2).toFixed(2),u=Va(c).toFixed(2),m=n?Xt(p,c*s):Xt("#30d158",.08),f=140,h=f/2,v=f/2,b=n?{bgInner:l>=4?"#1a0000":l>=3?"#1a0e00":"#1a1500",bgOuter:l>=4?"#0a0000":l>=3?"#0a0500":"#0a0800",ring:k(Me(p,.15)),line:k(Me(p,.08)),sweep:k(Me(p,.4))}:{bgInner:"#001a00",bgOuter:"#000800",ring:"rgba(80,255,0,0.15)",line:"rgba(80,255,0,0.08)",sweep:"rgba(80,255,0,0.35)"},w=o.map((x,N)=>{let V=x.active?18+N*7:40+N*7,G=N*137.5*Math.PI/180,oe=h+Math.cos(G)*V,ne=v+Math.sin(G)*V,de=(N*137.5%360/360*Number(d)).toFixed(2);return x.active?`<div class="pw-radar-blip" style="left:${oe.toFixed(1)}px;top:${ne.toFixed(1)}px;--pw-blip-color:${k(x.color)};animation-delay:${de}s"></div>`:`<div style="position:absolute;left:${oe.toFixed(1)}px;top:${ne.toFixed(1)}px;width:4px;height:4px;border-radius:var(--pulse-radius-circle);background:${k(x.color)};opacity:0.2;transform:translate(-50%,-50%)"></div>`}).join(""),$=`
    <div style="display:flex;justify-content:center;padding:12px var(--pulse-space-card-wide);position:relative;z-index:2">
      <div class="pw-radar" style="--pw-radar-bg-inner:${b.bgInner};--pw-radar-bg-outer:${b.bgOuter};--pw-radar-color:${b.ring};--pw-radar-line:${b.line};--pw-radar-sweep:${b.sweep};--pw-radar-dur:${d}s" role="img" aria-label="${n?`${o.length} weather alerts`:"No active alerts"}">
        ${w}
      </div>
    </div>`,_=(()=>{if(!n)return"";let x=null;for(let N of o){if(N.isUntilFurtherNotice)return"further notice";if(N.endTime){let V=new Date(N.endTime);!isNaN(V.getTime())&&(!x||V>x)&&(x=V)}}return x?x.toLocaleString([],{hour:"2-digit",minute:"2-digit",month:"short",day:"numeric"}):"further notice"})(),S=re(n?"rainy":"sunny",!1),E=o.map(Qo).join(""),T=n?"":'<div class="pw-all-clear-v2"><strong>All Clear</strong>last 7 days clean</div>',C=n?`<div class="pw-alert-timestamp pw-alert-${l>=4?"red":"amber"}">${o.length} active \xB7 valid through ${g(_)}</div>`:"",D=l>=4?`border-top: 2px solid ${k(p)};`:"",B=l>=4?"pw-alerts-red":l>0?"pw-alerts-amber":"pw-alerts-green",A=`<div class="pw-tension-wash${n?" breathing":""}" style="background: ${k(m)}; --breathe-dur: ${u}s"></div>`,P=`
        ${$}
        ${T}
        ${E?`<div class="pw-alert-list">${E}</div>`:""}
        ${C}`,I=o.map(x=>{let N=x.severity>=4?"red":"amber",V=x.summary||x.desc||x.type,G=[];x.isUntilFurtherNotice?G.push("until further notice"):x.active&&x.hoursLeft!==null?G.push(`${Math.round(x.hoursLeft)}h left`):x.hoursUntil!==null&&G.push(`in ${Math.round(x.hoursUntil)}h`),x.severity>0&&G.push(`severity ${x.severity}`),x.type&&G.push(x.type);let oe=G.join(" \xB7 "),ne=x.desc&&x.desc!==x.summary?`<div class="pw-alert-detail-desc">${g(x.desc)}</div>`:"",de=x.locations.length>0?`<div class="pw-alert-detail-loc">${g(x.locations.join(" \xB7 "))}</div>`:"";return`
        <div class="pw-alert-detail pw-alert-${N}">
          <div class="pw-alert-detail-head">${g(V)}</div>
          ${oe?`<div class="pw-alert-detail-meta">${g(oe)}</div>`:""}
          ${ne}
          ${de}
        </div>`}).join(""),U=n?`
        ${$}
        ${T}
        ${I}
        ${C}`:void 0;return Q({sectionClass:"pw-alerts-v2",extraSectionClass:B,ariaLabel:"Active weather alerts",brandVariant:S,kicker:n?`active alerts (${o.length})`:"no active alerts",preContent:A,sectionStyle:D,body:P,proView:U,proInitial:r,pro:t?.pro!==!1})}var me=600,Zo=280,kt=8,Qt=80,qe=200,rt=220,Jo=254,kr=12,en=30,tn=.9,an=3;function Ee(e,t){return t<=1?me/2:kt+e/(t-1)*(me-2*kt)}function Sr(e,t,a){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(a))return(Qt+qe)/2;let r=a-t||1;return Qt+(a-e)/r*(qe-Qt)}function rn(e){try{let t=new Date(e);return isNaN(t.getTime())?"":String(t.getHours()).padStart(2,"0")}catch{return""}}var on=500;function nn(e,t=24){if(!Array.isArray(e))return null;let a=e.slice(0,on),o=ht(a,new Date).slice(0,t);if(o.length<2)return null;let i=o[0],n="cloud_cover"in i,l="cloud_cover_low"in i&&"cloud_cover_mid"in i&&"cloud_cover_high"in i,p="wind_speed"in i&&("wind_bearing"in i||"wind_direction"in i),c=o.map(h=>{let v=Number(h.temperature),b=K(h.precipitation_probability,0),w=K(h.snowfall,0),$=K(h.rain,0),_=K(h.showers,0),S=String(h.condition||""),E=w>0||S==="snowy"||S==="snowy-rainy"?"snow":"rain",T=E==="snow"?w:$+_;return{temp:v,precip:b,precipMm:T,precipType:E,condition:S,cloudCover:n?K(h.cloud_cover,0):null,cloudLow:l?K(h.cloud_cover_low,0):null,cloudMid:l?K(h.cloud_cover_mid,0):null,cloudHigh:l?K(h.cloud_cover_high,0):null,windSpeed:p?K(h.wind_speed,0):null,windBearing:p?K(h.wind_bearing??h.wind_direction,0):null,timeLabel:rn(String(h.datetime||"")),datetime:String(h.datetime||"")}}),s=La(c,h=>h.temp);if(s.length<2)return null;let d=s.map(h=>h.temp),u=Math.min(...d),m=Math.max(...d),f=Math.max(...s.map(h=>h.precipMm),0);return{points:s,n:s.length,min:u,max:m,minIdx:d.indexOf(u),maxIdx:d.indexOf(m),maxPrecipMm:f,hasCloud:n,hasLayeredCloud:l,hasWind:p}}function sn(e){let{points:t,n:a,hasLayeredCloud:r}=e;if(a<=0)return"";let o=a>1?(me-2*kt)/(a-1)/2:me/2,i="";for(let n=0;n<a;n++){let l=Ee(n,a),p=n===0?0:l-o,s=(n===a-1?me:l+o)-p,d=p/me*100,u=s/me*100,m;if(r){let f=(Number(t[n].cloudHigh)||0)/100*.06,h=(Number(t[n].cloudMid)||0)/100*.08,v=(Number(t[n].cloudLow)||0)/100*.1;m=Math.min(f+h+v,.15)}else m=(Number(t[n].cloudCover)||0)/100*.12;m<=0||(i+=`<div class="pw-meteogram-cloud-slot" style="left:${d.toFixed(2)}%;width:${u.toFixed(2)}%;opacity:${m.toFixed(3)}"></div>`)}return i?`<div class="pw-meteogram-cloud-bg" aria-hidden="true">${i}</div>`:""}function ln(e){let{points:t,n:a,maxPrecipMm:r}=e,o=rt-qe,i=(me-2*kt)/(a-1)*tn,n=r>0,l=n?Math.max(r,2):100,p="";for(let c=0;c<a;c++){let{precipMm:s,precip:d,precipType:u}=t[c],m=n?s:d;if(m<=0)continue;let f=m/l*o,h=Ee(c,a)-i/2,v=i;h<0&&(v+=h,h=0),h+v>me&&(v=me-h);let b=rt-f,w=u==="snow"?"rgba(200,220,240,0.45)":"rgba(90,200,250,0.4)";p+=`<rect x="${h.toFixed(1)}" y="${b.toFixed(1)}" width="${v.toFixed(1)}" height="${f.toFixed(1)}" fill="${w}" rx="1"/>`}return p}function cn(e){let{points:t,n:a,maxPrecipMm:r}=e,o=rt-qe,i=r>0,n=i?Math.max(r,2):100,l="";for(let p=0;p<a;p++){let{precipMm:c,precip:s}=t[p],d=i?c:s;if(d<=0)continue;let u=Ee(p,a),m=d/n*o,f=rt-m-2,h=i?c>=10?String(Math.round(c)):c.toFixed(1):`${Math.round(s)}%`;l+=`<text x="${u.toFixed(1)}" y="${f.toFixed(1)}" text-anchor="middle" fill="rgba(90,200,250,0.9)" font-size="13" font-weight="600">${g(h)}</text>`}return l}function pn(e){let{points:t,n:a,min:r,max:o}=e,i=t.map(m=>parseFloat(m.temp.toFixed(1))),n=t.map((m,f)=>({x:Ee(f,a),y:Sr(i[f],r,o)})),l=n.map((m,f)=>`${f===0?"M":"L"}${m.x.toFixed(1)},${m.y.toFixed(1)}`).join(" "),p=`${l} L${n[n.length-1].x.toFixed(1)},${qe} L${n[0].x.toFixed(1)},${qe} Z`,c=Je("pw-meteogram-grad"),s=Te(o),d=Te(r),u=`<defs><linearGradient id="${c}" x1="0" y1="0" x2="0" y2="1">`;return u+=`<stop offset="0%" stop-color="${k(s)}" stop-opacity="0.25"/>`,u+=`<stop offset="100%" stop-color="${k(d)}" stop-opacity="0.03"/>`,u+="</linearGradient></defs>",u+=`<path d="${p}" fill="url(#${c})"/>`,u+=`<path d="${l}" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`,u}function dn(e){let{points:t,n:a}=e,r="";for(let o=0;o<a;o+=an){let i=Ee(o,a);r+=`<text x="${i.toFixed(1)}" y="${Jo}" text-anchor="middle" fill="var(--pw-ink-cream-dim)" font-size="15" font-weight="600">${g(t[o].timeLabel)}</text>`}return r}function un(e,t,a,r){let o=a/1.852,i=((r+180)%360-90+360)%360,n=Math.round(o/5)*5,l=Math.floor(n/50);n-=l*50;let p=Math.floor(n/10);n-=p*10;let c=Math.floor(n/5),s=18,d="var(--pw-ink-cream-muted)",u="",m=-s;for(let f=0;f<l;f++)u+=`<polygon points="0,${m.toFixed(1)} 9,${(m+3).toFixed(1)} 0,${(m+6).toFixed(1)}" fill="${d}"/>`,m+=6;for(let f=0;f<p;f++)u+=`<line x1="0" y1="${m.toFixed(1)}" x2="9" y2="${(m+4.5).toFixed(1)}" stroke="${d}" stroke-width="1.4" stroke-linecap="round"/>`,m+=4.5;for(let f=0;f<c;f++)u+=`<line x1="0" y1="${m.toFixed(1)}" x2="4.5" y2="${(m+2.25).toFixed(1)}" stroke="${d}" stroke-width="1.4" stroke-linecap="round"/>`;return`<g transform="translate(${e.toFixed(1)},${t}) rotate(${i})"><line x1="0" y1="0" x2="0" y2="${-s}" stroke="${d}" stroke-width="1.4" stroke-linecap="round"/>${u}</g>`}function mn(e){let{points:t,n:a,min:r,max:o,minIdx:i,maxIdx:n}=e,l=0,p=1,c=2,s="";for(let d=0;d<a;d++){let u=d===i||d===n,m=u?l:d%3,f=Ee(d,a),h=Sr(t[d].temp,r,o);if(m===l){let v=t[d].temp,b=u?String(Math.round(v)):v.toFixed(1),w=d===i?"var(--pw-wind)":d===n?"var(--pw-vermilion)":"var(--pw-ink-cream)",$=u?17:15,_=h-kr;s+=`<text x="${f.toFixed(1)}" y="${_.toFixed(1)}" text-anchor="middle" fill="${w}" font-size="${$}" font-weight="600">${b}\xB0</text>`}else if(m===p){let v=bt(t[d].condition),b=h-kr;s+=`<text x="${f.toFixed(1)}" y="${b.toFixed(1)}" text-anchor="middle" font-size="20">${v}</text>`}else if(m===c){let v=Number(t[d].windSpeed),b=Number(t[d].windBearing);if(!Number.isFinite(v)||v<1||!Number.isFinite(b))continue;let w=h-en;s+=un(f,w,v,b)}}return s}function Mr({config:e,forecastData:t}){let a=t?.hourly||[];if(a.length<2)return null;let r=Number(e.hours),o=e.horizon==="long"?"long":"short",i=Number.isFinite(r)&&r>0?Math.max(4,Math.min(48,r)):o==="long"?24:12,n=nn(a,i);if(!n)return null;let p=(e.show_cloud==="auto"||e.show_cloud===void 0?n.hasCloud:!!e.show_cloud)&&n.hasCloud?sn(n):"",c=re(n.points[0]?.condition||"sunny",!1),s=[];s.push(ln(n)),s.push(cn(n)),s.push(pn(n)),s.push(mn(n));let d=Ee(0,n.n).toFixed(1);s.push(`<line x1="${d}" y1="0" x2="${d}" y2="${rt}" stroke="var(--pw-vermilion)" stroke-width="0.8" stroke-dasharray="2 3" opacity="0.7"/>`),s.push(dn(n));let u=n.n,m=`${u}-hour meteogram showing temperature, condition, wind, and precipitation`,f=u<=12?"next twelve hours":`next ${u===24?"twenty-four":u} hours`,h=Je("pw-meteogram-title"),v=`
        <div class="pw-meteogram-chart" aria-labelledby="${h}">
          <svg viewBox="0 0 ${me} ${Zo}" style="width:100%; height:auto" role="img" aria-label="${g(m)}">
            <title id="${h}">${g(m)}</title>
            ${s.join(`
`)}
          </svg>
        </div>`;return Q({sectionClass:"pw-meteogram-v2",ariaLabel:m,brandVariant:c,kicker:f,preContent:p,body:v,proAction:"meteo-horizon",proInitial:i>=18,proAriaLabel:"Toggle 12-hour and 24-hour view",pro:e.pro!==!1})}var fn={overview:ar,forecast:rr,wind:lr,air_quality:pr,astro:_r,alerts:$r,atmosphere:Za,meteogram:Mr},Zt=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._lastWeatherState=null,this._atmosExpanded=!1,this._forecastData=null,this._forecastLastFetch=0,this._subscribedEntityId=null,this._atmosConfigEntryId=null,this._discovery=null,this._forecastFetching=!1,this._phaseTimer=null,this._countdownTimer=null,this._minuteTimer=null,this._warnedMissingEntity=null,this._warnedMissingAtmosCe=null,this._proState={}}setConfig(t){if(!t)throw new Error("Invalid configuration");this._cleanupTimers(),this._config=Aa(t),this._warnedMissingEntity=null,this._warnedMissingAtmosCe=null,this._discovery=null,this._proState={},this._hass&&this._fullRender()}_getDiscovery(){return this._discovery||(this._discovery=Na(this._hass.states,this._config)),this._discovery}_getCeFingerprint(t){let r=this._getDiscovery().atmosCe,o=[];for(let i of Object.keys(r)){let n=r[i],l=t.states[n];l&&o.push(`${i}=${l.state}`)}return o.join("|")}_warnIfAtmosCeMissing(t,a){let r=new Set(["atmosphere","air_quality","meteogram"]);if(!t.some(p=>r.has(p.type))||Object.keys(a.atmosCe).length>0)return;let i=this._config,n=i.atmos_source||Vt(a.weatherEntityId||"");if(this._warnedMissingAtmosCe===n)return;this._warnedMissingAtmosCe=n;let l=i.atmos_source?`Set atmos_source matches no sensor.${n}_* entities \u2014 check the slug.`:`Derived slug "${n}" matches no sensor.${n}_* entities. If you renamed your weather entity after installing Atmos CE, set atmos_source manually in the card config.`;console.warn(`${we} atmosphere / air_quality / meteogram sections configured but no Atmos CE sensors discovered. ${l}`)}_cleanupTimers(){this._phaseTimer&&(clearTimeout(this._phaseTimer),this._phaseTimer=null),this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null),this._minuteTimer&&(clearInterval(this._minuteTimer),this._minuteTimer=null)}set hass(t){if(this._hass=t,!this._config)return;let a=this._config.weather_entity,r=a||Object.keys(t.states).find(p=>p.startsWith("weather."))||"",o=t.states[r];if(!o){a&&this._warnedMissingEntity!==a&&(console.warn(`${we} weather_entity "${a}" not found in hass.states. Check the entity_id in your card config (likely a typo, or the integration was removed).`),this._warnedMissingEntity=a);return}let i=this._getCeFingerprint(t),n=`${o.state}|${JSON.stringify(o.attributes)}|${i}`;n!==this._lastWeatherState&&(this._lastWeatherState=n,this._fullRender()),this._subscribeForecast(t,r)}async _subscribeForecast(t,a){let r=Date.now()-this._forecastLastFetch>=Pt;if(!(this._subscribedEntityId===a&&this._forecastData&&!r)&&!this._forecastFetching){this._forecastFetching=!0,this._subscribedEntityId=a;try{if(!t.callWS)return;let o=null;if(this._discovery?.atmosSource)try{if(!this._atmosConfigEntryId){let d=(await t.callWS({type:"config/entity_registry/list"}).catch(()=>[])).find(u=>u.platform==="atmos_ce");this._atmosConfigEntryId=d?.config_entry_id||null}if(this._atmosConfigEntryId){let u=(await t.callWS({type:"call_service",domain:"atmos_ce",service:"get_extended_forecast",service_data:{config_entry_id:this._atmosConfigEntryId,type:"hourly"},return_response:!0}).catch(()=>null))?.response;u?.forecast&&(o=u.forecast)}}catch(s){console.debug(`${we} extended forecast fetch failed, falling back to standard hourly`,s)}let i=null;a&&t.states[a]&&(i=await t.callWS({type:"call_service",domain:"weather",service:"get_forecasts",target:{entity_id:a},service_data:{type:"daily"},return_response:!0}).catch(()=>null));let n=null;!o&&a&&t.states[a]&&(n=(await t.callWS({type:"call_service",domain:"weather",service:"get_forecasts",target:{entity_id:a},service_data:{type:"hourly"},return_response:!0}).catch(()=>null))?.response?.[a]?.forecast||[]);let c=i?.response?.[a];this._forecastData={hourly:o||n||[],daily:c?.forecast||[]},this._forecastLastFetch=Date.now(),this._fullRender()}catch(o){console.warn(`${we} forecast fetch failed; retries throttled to ${Pt/1e3}s. Inspect the error below to diagnose. Common causes: weather entity offline, integration disabled, network failure.`,o),this._forecastLastFetch=Date.now()}finally{this._forecastFetching=!1}}}_unsubscribeForecasts(){this._subscribedEntityId=null,this._forecastLastFetch=0}disconnectedCallback(){this._unsubscribeForecasts(),this._cleanupTimers()}_fullRender(){if(!this._hass||!this._config||!this.shadowRoot)return;let t=this._getDiscovery(),a=this._hass.states[t.weatherEntityId];if(!a)return;let r=["<style>",Fa,"</style>",'<div class="pw-card">'],o=this._config.sections||[];this._warnIfAtmosCeMissing(o,t);for(let i=0;i<o.length;i++){let n=o[i],l=fn[n.type];if(l)try{let p=l({hass:this._hass,config:n,discovery:t,weatherEntity:a,forecastData:this._forecastData,sectionIndex:i,proPersisted:!!this._proState[i]});p&&r.push(p)}catch(p){console.warn(`${we} section "${n?.type}" renderer threw \u2014 section will be skipped, other sections continue. Please share the error below when reporting.`,p)}}r.push("</div>"),this.shadowRoot.innerHTML=r.join(""),this._postRender(t),this._schedulePhaseTransition(),this._minuteTimer||(this._minuteTimer=setInterval(()=>{this._lastWeatherState=null,this._hass&&this._fullRender()},6e4)),this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null),this.shadowRoot.querySelector(".pw-astro-countdown")&&(this._countdownTimer=setInterval(()=>{let i=this.shadowRoot?.querySelector(".pw-astro-countdown");if(!i){clearInterval(this._countdownTimer),this._countdownTimer=null;return}let n=Number(i.dataset.target)-Date.now();if(n<=0){clearInterval(this._countdownTimer),this._countdownTimer=null,this._lastWeatherState=null,this._fullRender();return}let l=Math.floor(n/1e3),p=Math.floor(l/3600),c=Math.floor(l%3600/60),s=l%60;i.textContent=(p>0?p+"h "+c+"m":c+"m "+s+"s")+(i.dataset.suffix||"")},1e3))}_schedulePhaseTransition(){if(this._phaseTimer&&(clearTimeout(this._phaseTimer),this._phaseTimer=null),!this._hass||!this._config)return;let t=this._getDiscovery(),a=t.atmosCe,r=this._hass.states[t.sunEntityId||""];if(!r)return;let o=new Date,i=o.getTime(),n=[],l=r.attributes?.next_rising,p=r.attributes?.next_setting,{todaySunrise:c,todaySunset:s}=Ve(o,l,p),d=r.attributes?.next_rising?new Date(r.attributes.next_rising).getTime():NaN,u=r.attributes?.next_setting?new Date(r.attributes.next_setting).getTime():NaN;Number.isFinite(d)&&d>i&&n.push(d),Number.isFinite(u)&&u>i&&n.push(u);let m={golden_hour_morning_start:c,golden_hour_morning_end:c,blue_hour_morning_start:c,blue_hour_morning_end:c,golden_hour_evening_start:s,golden_hour_evening_end:s,blue_hour_evening_start:s,blue_hour_evening_end:s};for(let[v,b]of Object.entries(m)){if(!a[v])continue;let w=new Date(String(this._hass.states[a[v]]?.state||""));if(isNaN(w.getTime()))continue;let $=Z(w,b);if(!$)continue;let _=$.getTime();_>i&&n.push(_);let S=_+864e5;S>i&&n.push(S)}if(n.length===0)return;let h=Math.min(...n)-i+1e3;this._phaseTimer=setTimeout(()=>{this._phaseTimer=null,this._lastWeatherState=null,this._hass&&this._fullRender()},h)}_postRender(t){if(!this.shadowRoot||!this._hass)return;let a=this.shadowRoot.querySelectorAll(".pw-fx[data-condition]");for(let s of a){let d=s.getAttribute("data-condition")||"",u=s.getAttribute("data-night")==="true",m=null;try{let h=s.getAttribute("data-cloud");h&&h!=='""'&&h!==""&&(m=JSON.parse(h))}catch{}let f=Ua(d,u,m);s.replaceChildren(f)}let r=this.shadowRoot.querySelectorAll(".pw-aqi[data-pm25]");for(let s of r){let d=Number(s.getAttribute("data-pm25"))||0,u=Number(s.getAttribute("data-pm10"))||0,m=s.querySelector(".pw-fx");if(m&&(d>0||u>0)){let f=document.createDocumentFragment();Ba(f,d,u),m.replaceChildren(f)}}let o=this.shadowRoot.querySelectorAll(".pw-fx[data-astro-stars]");for(let s of o){let d=s.getAttribute("data-astro-stars")==="true",u=s.getAttribute("data-astro-day")==="true",m=document.createDocumentFragment();d&&Gt(m),u&&(J(m,3,.5),vt(m)),s.replaceChildren(m)}let i=this.shadowRoot.querySelectorAll(".pw-atmos-fx[data-atmos-score]");for(let s of i){let d=Number(s.getAttribute("data-atmos-score"))||0,u=s.getAttribute("data-atmos-color")||"#30d158",m=Qa(d,u);s.replaceChildren(m)}let n=[...this.shadowRoot.querySelectorAll(".pw-section")],l=this.shadowRoot.querySelectorAll("button.pw-brand-mark-corner");for(let s of l)s.addEventListener("click",d=>{let u=d.currentTarget,m=u.closest(".pw-section");if(!m||!this._config)return;let f=n.indexOf(m);if(f<0)return;let h=m.dataset.proAction||"view-swap";if(h==="wind-mode"||h==="meteo-horizon"||h==="aqi-scale"){let b=(this._config.sections||[]).map(($,_)=>_===f?{...$}:$),w=b[f];if(!w)return;if(h==="wind-mode"&&w.type==="wind")w.speed_mode=w.speed_mode==="gust"?"speed":"gust";else if(h==="meteo-horizon"&&w.type==="meteogram"){let $=Number(w.hours),_=Number.isFinite($)&&$>0?$>=18:w.horizon==="long";w.horizon=_?"short":"long","hours"in w&&delete w.hours}else h==="aqi-scale"&&w.type==="air_quality"&&(w.scale=w.scale==="us"?"eu":"us");this._config={...this._config,sections:b},this._fullRender();return}let v=m.dataset.pro==="true"?"false":"true";m.dataset.pro=v,u.setAttribute("aria-pressed",v),this._proState[f]=v==="true"});let p=this.shadowRoot.querySelectorAll(".pw-hourly-strip");for(let s of p){let d=!1,u=0,m=0;s.addEventListener("mousedown",f=>{d=!0,u=f.pageX-s.offsetLeft,m=s.scrollLeft,s.style.cursor="grabbing"}),s.addEventListener("mouseleave",()=>{d=!1,s.style.cursor=""}),s.addEventListener("mouseup",()=>{d=!1,s.style.cursor=""}),s.addEventListener("mousemove",f=>{if(!d)return;f.preventDefault();let h=f.pageX-s.offsetLeft;s.scrollLeft=m-(h-u)}),s.addEventListener("touchstart",f=>{f.stopPropagation()},{passive:!0}),s.addEventListener("touchmove",f=>{f.stopPropagation()},{passive:!0}),s.addEventListener("wheel",f=>{let h=f;Math.abs(h.deltaX)<Math.abs(h.deltaY)&&(f.preventDefault(),s.scrollLeft+=h.deltaY)},{passive:!1})}let c=this.shadowRoot.querySelector(".pw-atmos-column-wrap[data-has-detail]");if(c){let s=this.shadowRoot.querySelector(".pw-atmos-detail");s&&(this._atmosExpanded&&(s.style.maxHeight=`${s.scrollHeight}px`,c.setAttribute("aria-expanded","true")),c.addEventListener("click",()=>{this._atmosExpanded=!this._atmosExpanded,this._atmosExpanded?(s.style.maxHeight=`${s.scrollHeight}px`,c.setAttribute("aria-expanded","true")):(s.style.maxHeight="0",c.setAttribute("aria-expanded","false"))}))}}getCardSize(){let t=this._config?.sections?.length||1;return Math.max(3,t*3)}getGridOptions(){return{columns:12,min_columns:6,rows:this.getCardSize(),min_rows:3}}static async getConfigElement(){return await import("./pulse-weather-card-editor.js"),document.createElement(ma)}static getStubConfig(t){let a=Object.keys(t.states).find(r=>r.startsWith("weather."));return{type:`custom:${He}`,weather_entity:a||"weather.home",sections:[{type:"overview"}]}}};customElements.get(He)||(customElements.define(He,Zt),console.info(`%c ${He.toUpperCase()} %c v${ua} `,"background:#5ac8fa;color:#000;font-weight:bold","background:#333;color:#fff"));window.customCards=window.customCards||[];window.customCards.push({type:He,name:"Pulse Weather Card",description:"Weather visualization with atmospheric effects, forecasts, wind rose, and more",preview:!0});export{Zt as PulseWeatherCard};
