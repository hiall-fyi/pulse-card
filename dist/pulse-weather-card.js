var fr="1.9.0";var hr=fr,Be="pulse-weather-card",wr="pulse-weather-card-editor",fe="Pulse Weather Card:",gr=["overview","forecast","wind","air_quality","astro","alerts","atmosphere","meteogram"],We={calm:"#5ac8fa",moderate:"#30d158",strong:"#ff9f0a",gale:"#ff453a"},mt=[{max:5,color:"#5ac8fa"},{max:12,color:"#30d158"},{max:18,color:"#ff9f0a"},{max:1/0,color:"#ff453a"}],ft=[{max:11,tier:"calm"},{max:38,tier:"moderate"},{max:61,tier:"strong"},{max:1/0,tier:"gale"}],ht=[{max:1,n:0,name:"Calm",desc:"Smoke rises vertically"},{max:5,n:1,name:"Light Air",desc:"Smoke drifts slowly"},{max:11,n:2,name:"Light Breeze",desc:"Leaves rustle"},{max:19,n:3,name:"Gentle Breeze",desc:"Leaves and twigs move"},{max:28,n:4,name:"Moderate Breeze",desc:"Small branches move"},{max:38,n:5,name:"Fresh Breeze",desc:"Small trees sway"},{max:49,n:6,name:"Strong Breeze",desc:"Large branches move"},{max:61,n:7,name:"Near Gale",desc:"Whole trees sway"},{max:74,n:8,name:"Gale",desc:"Twigs break off"},{max:88,n:9,name:"Strong Gale",desc:"Slight structural damage"},{max:102,n:10,name:"Storm",desc:"Trees uprooted"},{max:117,n:11,name:"Violent Storm",desc:"Widespread damage"},{max:1/0,n:12,name:"Hurricane",desc:"Devastating damage"}];var Ot=[{max:20,label:"Good",color:"#30d158",desc:"Air quality is satisfactory"},{max:40,label:"Fair",color:"#5ac8fa",desc:"Acceptable for most people"},{max:60,label:"Moderate",color:"#ff9f0a",desc:"Sensitive groups may be affected"},{max:80,label:"Poor",color:"#ff453a",desc:"Health effects possible for everyone"},{max:100,label:"Very Poor",color:"#8b0000",desc:"Serious health effects"},{max:1/0,label:"Extremely Poor",color:"#4a0020",desc:"Emergency conditions"}],Ht=[{max:50,label:"Good",color:"#30d158",desc:"Air quality is satisfactory"},{max:100,label:"Moderate",color:"#ffd60a",desc:"Acceptable for most people"},{max:150,label:"Unhealthy for Sensitive Groups",color:"#ff9f0a",desc:"Sensitive groups may experience effects"},{max:200,label:"Unhealthy",color:"#ff453a",desc:"Everyone may experience effects"},{max:300,label:"Very Unhealthy",color:"#8b0000",desc:"Health alert for everyone"},{max:1/0,label:"Hazardous",color:"#4a0020",desc:"Emergency conditions"}];var Je=[{min:2,color:"#30d158",label:"Stable"},{min:0,color:"#ffd60a",label:"Marginal"},{min:-2,color:"#ff9f0a",label:"Slightly Unstable"},{min:-1/0,color:"#ff453a",label:"Unstable"}],Ue=80,br=35;var Pt=.6,vr=90,xr=60,yr=40,Bt=8;var Wt=1800*1e3,_r=7,$r=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],kr={rain:"mdi:weather-pouring",wind:"mdi:weather-windy",snow:"mdi:weather-snowy-heavy",ice:"mdi:snowflake-alert",fog:"mdi:weather-fog",thunderstorm:"mdi:weather-lightning",heat:"mdi:thermometer-alert",cold:"mdi:snowflake-thermometer",flood:"mdi:home-flood",tornado:"mdi:weather-tornado",fire:"mdi:fire-alert",coastal:"mdi:waves",avalanche:"mdi:image-filter-hdr",unknown:"mdi:alert"};function et(e){return e>=4?"red":e===3?"amber":"yellow"}var Sr={yellow:"#FFFF00",amber:"#FF9F0A",red:"#FF0000"};var Mr=["temperature","apparent_temperature","dew_point","humidity","pressure","surface_pressure","wind_speed","wind_direction","wind_gusts","precipitation","rain","showers","snowfall","cloud_cover","cloud_cover_low","cloud_cover_mid","cloud_cover_high","uv_index","uv_index_clear_sky","visibility","cape","lifted_index","freezing_level_height","soil_temperature","soil_moisture","wind_shear_0_6_km","lapse_rate_700_500_hpa","lcl_height","stability_assessment","dew_point_comfort","visibility_category","feels_like_context","pressure_trend","european_aqi","us_aqi","pm2_5","pm10","nitrogen_dioxide","ozone","sulphur_dioxide","carbon_monoxide","carbon_dioxide","golden_hour_morning_start","golden_hour_morning_end","golden_hour_evening_start","golden_hour_evening_end","blue_hour_morning_start","blue_hour_morning_end","blue_hour_evening_start","blue_hour_evening_end","moon_phase","moonrise","moonset","daylight_duration"],Tr=["active_alert","upcoming_alert","alert_count"],Ut="_weather",Fr=3;var Cr={"clear-night":"\u{1F319}",cloudy:"\u2601\uFE0F",exceptional:"\u{1F321}\uFE0F",fog:"\u{1F32B}\uFE0F",hail:"\u{1F328}\uFE0F",lightning:"\u26A1","lightning-rainy":"\u26C8\uFE0F",partlycloudy:"\u26C5",pouring:"\u{1F327}\uFE0F",rainy:"\u{1F327}\uFE0F",snowy:"\u2744\uFE0F","snowy-rainy":"\u{1F328}\uFE0F",sunny:"\u2600\uFE0F",windy:"\u{1F4A8}","windy-variant":"\u{1F4A8}"},te=29.53,Ar=["New Moon","Waxing Crescent","First Quarter","Waxing Gibbous","Full Moon","Waning Gibbous","Last Quarter","Waning Crescent"];var Er=`
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
`;var Nr=`${""}

${Er}
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
`;var Rr=[{type:"overview"}],po={overview:{},forecast:{mode:"both"},wind:{speed_mode:"speed"},air_quality:{scale:"eu"},astro:{},alerts:{},atmosphere:{}};function wt(e){if(!e)return{type:"overview"};if(typeof e=="string")return wt({type:e});if(typeof e!="object")return{type:"overview"};let t=gr.includes(e.type)?e.type:"overview";return{...po[t]||{},...e,type:t}}function Dr(e){if(!e||typeof e!="object")return{type:"custom:pulse-weather-card",sections:Rr.map(wt)};let t=e,r=Array.isArray(t.sections)&&t.sections.length>0?t.sections.map(wt):Rr.map(wt);return{type:t.type||"custom:pulse-weather-card",weather_entity:t.weather_entity||void 0,atmos_source:t.atmos_source||void 0,sections:r}}function h(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function k(e){return e==null||e===""?"":String(e).replace(/[;{}]/g,"").replace(/url\s*\(/gi,"").replace(/expression\s*\(/gi,"").replace(/-moz-binding\s*:/gi,"")}function Lr(e){return{columns:12,min_columns:e,rows:"auto"}}function oe(e){let t=e?.config?.time_zone;if(t&&e?.locale?.time_zone!=="local")return t}function pe(e,t,r){return!e||isNaN(e.getTime())?"":new Intl.DateTimeFormat("en-GB",{...r,timeZone:t}).format(e)}function U(e,t){return pe(e,t,{hour:"2-digit",minute:"2-digit",hourCycle:"h23"})}var Vt=0;function Ir(e="pulse-id"){return Vt=Vt+1>>>0,`${e}-${Vt.toString(36)}`}function jt(e){let t=e.replace(/^weather\./,"");return t.endsWith(Ut)&&(t=t.slice(0,-Ut.length)),t}function zr(e,t){let r=t.weather_entity||Object.keys(e).find(d=>d.startsWith("weather."))||"",a=t.atmos_source||jt(r),o={};for(let d of Mr){let s=`sensor.${a}_${d}`;s in e&&(o[d]=s)}let n=Object.keys(o).length>=Fr,i=n?o:{},l=[];if(t.alert_entities&&t.alert_entities.length>0)for(let d of t.alert_entities)d in e&&l.push(d);else if(n){for(let p of Tr){let u=`sensor.${a}_${p}`,m=`sensor.${a}_warnings_${p}`;u in e?l.push(u):m in e&&l.push(m)}let d=`binary_sensor.${a}_alert_active`,s=`binary_sensor.${a}_warnings_alert_active`;d in e?l.push(d):s in e&&l.push(s)}let c="sun.sun"in e?"sun.sun":null;return{weatherEntityId:r,atmosCe:i,sunEntityId:c,atmosSource:n?a:null,alertEntityIds:l}}function uo(e){if(typeof e!="string")return null;let t=e.trim().replace(/^#/,"");return t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),t.length!==6||/[^0-9a-f]/i.test(t)?null:{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}}function Me(e,t){if(typeof e!="string")return String(e);let r=Math.max(0,Math.min(1,Number(t))),a=uo(e);if(a)return`rgba(${a.r},${a.g},${a.b},${r})`;let o=/^rgb\(\s*(\d+)\s*[,\s]\s*(\d+)\s*[,\s]\s*(\d+)\s*\)$/i.exec(e.trim());return o?`rgba(${o[1]},${o[2]},${o[3]},${r})`:e}function Hr(e,t){return e.filter(r=>Number.isFinite(t(r)))}function X(e,t=0){let r=Number(e);return Number.isFinite(r)?r:t}function gt(e,t,r,a,o,n=0){if(t?.[a]){let i=Number(e?.states?.[t[a]]?.state);if(Number.isFinite(i))return i}return Number(r?.[o]??n)||n}function Pr(e,t,r,a){return t?.[r]&&e?.states?.[t[r]]?.attributes?.unit_of_measurement||a}function Ve(e,t,r=0){let a=t?e?.states?.[t]:null;if(!a)return{value:r,unit:void 0,entity:null};let o=Number(a.state);return{value:Number.isFinite(o)?o:r,unit:a.attributes?.unit_of_measurement,entity:a}}function bt(e,t,r){let a=t?.state||"sunny",o=r?.sunEntityId?e?.states?.[r.sunEntityId]?.state:null;return{condition:a,isNight:a==="clear-night"||o==="below_horizon"}}function tt(e="pw-id"){return Ir(e)}function Br(e){return`${e}, linear-gradient(180deg, var(--pw-sky-top) 0%, var(--pw-sky-mid) 45%, var(--pw-sky-bot) 100%)`}function vt(e,t,r=36e5){let a=(t?t.getTime():Date.now())-r;return e.filter(o=>{let n=o.datetime;if(!n)return!1;let i=new Date(n).getTime();return Number.isFinite(i)&&i>=a})}function Te(e){let t=Number(e);for(let r of mt)if(t<=r.max)return r.color;return mt[mt.length-1].color}function qt(e){let t=Number(e);for(let r of ft)if(t<=r.max)return r.tier;return ft[ft.length-1].tier}function Wr(e){return We[qt(e)]||We.calm}function xt(e){let t=Number(e);for(let r of ht)if(t<=r.max)return r;return ht[ht.length-1]}function yt(e){let t=(Number(e)%360+360)%360,r=Math.round(t/22.5)%16;return $r[r]}function Ur(e){return e<=12?"#30d158":e<=50?"#5ac8fa":e<=87?"#ff9f0a":"#ff453a"}function Vr(e){return e<10?"#5ac8fa":e<16?"#30d158":e<19?"#ffd60a":e<22?"#ff9f0a":"#ff453a"}function je(e,t,r){if(!t||!r)return{todaySunrise:null,todaySunset:null,tomorrowSunrise:null};let a=new Date(t),o=new Date(r);if(isNaN(a.getTime())||isNaN(o.getTime()))return{todaySunrise:null,todaySunset:null,tomorrowSunrise:null};let n=a.getTime()>e.getTime()?new Date(a.getTime()-864e5):a,i=o.getTime()>e.getTime()?o:new Date(o.getTime()-864e5);i.getTime()>n.getTime()+864e5&&(i=new Date(i.getTime()-864e5)),n.getTime()>i.getTime()&&(n=new Date(n.getTime()-864e5));let l=a.getTime()>e.getTime()?a:new Date(a.getTime()+864e5);return{todaySunrise:n,todaySunset:i,tomorrowSunrise:l}}function Z(e,t){if(!e||isNaN(e.getTime()))return null;if(!t)return e;let r=t.getTime(),a=[e,new Date(e.getTime()-864e5),new Date(e.getTime()+864e5)],o=a[0],n=Math.abs(o.getTime()-r);for(let i=1;i<a.length;i+=1){let l=Math.abs(a[i].getTime()-r);l<n&&(o=a[i],n=l)}return o}function le(e,t,r){let a=t?Object.entries(t).map(([o,n])=>` ${o}="${n}"`).join(""):"";return r!=null?`<${e}${a}>${r}</${e}>`:`<${e}${a}/>`}function _t(e){return Cr[e]||"\u{1F324}\uFE0F"}var Or={"clear-night":"Clear Night",cloudy:"Cloudy",exceptional:"Exceptional",fog:"Fog",hail:"Hail",lightning:"Lightning","lightning-rainy":"Lightning Rainy",partlycloudy:"Partly Cloudy",pouring:"Pouring",rainy:"Rainy",snowy:"Snowy","snowy-rainy":"Snowy Rainy",sunny:"Sunny",windy:"Windy","windy-variant":"Windy Variant"};function jr(e){return Object.hasOwn(Or,e)?Or[e]:e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase())}function ne(e,t,r){let a=document.createElement(e);if(a.className=t,r)for(let[o,n]of Object.entries(r))a.style.setProperty(o,n);return a}function F(e,t){return Math.random()*(t-e)+e}function rt(e,t=60,r=1,a=2){let o=Math.min(t,vr);for(let n=0;n<o;n++){let i=ne("div","pw-rain-drop"),l=F(15,30),c=F(.4,.8)/r;Object.assign(i.style,{left:`${F(0,100)}%`,top:`${F(-10,20)}%`,width:`${a}px`,height:`${l}px`,borderRadius:`0 0 ${a}px ${a}px`,background:"linear-gradient(to bottom, transparent, rgba(120,180,255,0.6))",animation:`pw-rainFall ${c}s linear ${F(0,2)}s infinite`,animationFillMode:"backwards",position:"absolute"}),e.appendChild(i)}}function Gt(e,t=40){let r=Math.min(t,xr);for(let a=0;a<r;a++){let o=ne("div","pw-snowflake"),n=F(2,5);Object.assign(o.style,{left:`${F(0,100)}%`,top:`${F(-5,10)}%`,width:`${n}px`,height:`${n}px`,borderRadius:"50%",background:"rgba(255,255,255,0.7)",animation:`pw-snowFall ${F(3,6)}s linear ${F(0,4)}s infinite`,animationFillMode:"backwards",position:"absolute"}),e.appendChild(o)}}function mo(e){for(let t=0;t<4;t++){let r=ne("div","pw-fog-layer");Object.assign(r.style,{position:"absolute",width:"200%",height:"40px",top:`${30+t*20}%`,left:"0",background:"linear-gradient(to right, transparent 0%, rgba(200,200,200,0.06) 20%, rgba(200,200,200,0.1) 50%, rgba(200,200,200,0.06) 80%, transparent 100%)",animation:`pw-fogDrift ${F(15,25)}s linear ${t*2}s infinite`,animationFillMode:"backwards"}),e.appendChild(r)}}function $t(e){for(let t=0;t<8;t++){let r=ne("div","pw-sun-ray");Object.assign(r.style,{position:"absolute",top:"-20px",left:`${10+t*12}%`,width:"2px",height:"120px",background:"linear-gradient(to bottom, rgba(255,220,100,0.08), transparent)",transformOrigin:"top center",transform:`rotate(${-15+t*4}deg)`,animation:`pw-rayPulse ${F(3,5)}s ease-in-out ${F(0,2)}s infinite`,animationFillMode:"backwards"}),e.appendChild(r)}}function Q(e,t=4,r=1){let a=Math.min(t,Bt);for(let o=0;o<a;o++){let n=ne("div","pw-cloud"),i=F(80,160),l=F(30,60),c=F(20,40)/r;Object.assign(n.style,{position:"absolute",width:`${i}px`,height:`${l}px`,top:`${F(5,50)}%`,left:"0",borderRadius:"50%",background:"radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, transparent 70%)",animation:`pw-cloudDrift ${c}s linear ${F(0,15)}s infinite`,animationFillMode:"backwards"}),e.appendChild(n)}}function Xt(e){for(let t=0;t<yr;t++){let r=ne("div","pw-star"),a=F(1,3);Object.assign(r.style,{position:"absolute",left:`${F(0,100)}%`,top:`${F(0,70)}%`,width:`${a}px`,height:`${a}px`,borderRadius:"50%",background:"#fff",animation:`pw-twinkle ${F(2,5)}s ease-in-out ${F(0,3)}s infinite`,animationFillMode:"backwards"}),e.appendChild(r)}}function fo(e,t){let r=[],a=e,o=0,n=Math.floor(F(4,8)),i=t/n;r.push(`${a},${o}`);for(let l=0;l<n;l++)a+=F(-15,15),o+=i,r.push(`${a},${o}`);return r.join(" ")}function qr(e,t=2,r){let a=r||Array.from({length:t},(n,i)=>i*3),o=ne("div","pw-lightning-flash");Object.assign(o.style,{position:"absolute",inset:"0",background:"rgba(255,255,255,0.15)",animation:`pw-flash 6s ease-in-out ${a[0]||0}s infinite`,animationFillMode:"backwards",pointerEvents:"none"}),e.appendChild(o);for(let n=0;n<t;n++){let i="http://www.w3.org/2000/svg",l=document.createElementNS(i,"svg");l.setAttribute("class","pw-lightning-bolt"),l.setAttribute("width","60"),l.setAttribute("height","200"),l.setAttribute("viewBox","0 0 60 200"),l.style.position="absolute",l.style.top="0",l.style.left=`${F(15,75)}%`,l.style.pointerEvents="none",l.style.zIndex="2",l.style.animation=`pw-boltStrike 6s ease-in-out ${a[n]||0}s infinite`,l.style.animationFillMode="backwards";let c=fo(30,180),d=document.createElementNS(i,"polyline");d.setAttribute("points",c),d.setAttribute("fill","none"),d.setAttribute("stroke","rgba(200,220,255,0.4)"),d.setAttribute("stroke-width","6"),d.setAttribute("stroke-linecap","round"),d.setAttribute("stroke-linejoin","round"),l.appendChild(d);let s=document.createElementNS(i,"polyline");s.setAttribute("points",c),s.setAttribute("fill","none"),s.setAttribute("stroke","#fff"),s.setAttribute("stroke-width","2"),s.setAttribute("stroke-linecap","round"),s.setAttribute("stroke-linejoin","round"),l.appendChild(s),e.appendChild(l)}}function ho(e){let t=ne("div","pw-heat-shimmer");Object.assign(t.style,{position:"absolute",inset:"0",pointerEvents:"none",background:"linear-gradient(0deg, transparent 0%, rgba(255,200,100,0.03) 30%, transparent 50%, rgba(255,180,80,0.02) 70%, transparent 100%)",backgroundSize:"100% 200%",animation:"pw-shimmer 3s ease-in-out infinite"}),e.appendChild(t);let r=ne("div","pw-heat-ripple");Object.assign(r.style,{position:"absolute",bottom:"0",left:"0",right:"0",height:"60px",pointerEvents:"none",background:"repeating-linear-gradient(0deg, transparent, rgba(255,200,100,0.02) 2px, transparent 4px)",animation:"pw-rippleWave 2s ease-in-out infinite"}),e.appendChild(r)}function Gr(e,t,r){let a=Math.min(1,(t/75+r/150)/2);if(a<.05)return;let o=ne("div","pw-smog-overlay");o.style.background=`rgba(120,110,80,${.05+a*.15})`,e.appendChild(o);let n=ne("div","pw-haze-vignette");n.style.background=`radial-gradient(ellipse at center, transparent 40%, rgba(80,70,50,${a*.3}) 100%)`,e.appendChild(n);let i=Math.floor(a*20);for(let c=0;c<i;c++){let d=ne("div","pw-dust-particle"),s=F(1,3+a*3);Object.assign(d.style,{left:`${F(0,100)}%`,top:`${F(10,90)}%`,width:`${s}px`,height:`${s}px`,animationDelay:`${F(0,8)}s`,animationFillMode:"backwards"}),e.appendChild(d)}let l=Math.floor(a*5);for(let c=0;c<l;c++){let d=ne("div","pw-haze-blob"),s=F(60,120);Object.assign(d.style,{left:`${F(-10,80)}%`,top:`${F(10,70)}%`,width:`${s}px`,height:`${s*.6}px`,animationDelay:`${F(0,12)}s`,animationFillMode:"backwards"}),e.appendChild(d)}}function Xr(e,t,r){let a=document.createDocumentFragment();try{t&&Xt(a);let o=r?Math.round(r.total/100*Bt):0;switch(e){case"sunny":t||$t(a),r&&o>0&&Q(a,o);break;case"clear-night":r&&o>0&&Q(a,o);break;case"partlycloudy":t||$t(a),Q(a,r?o:3);break;case"cloudy":Q(a,r?Math.max(o,4):6);break;case"rainy":rt(a,40,1,2),Q(a,r?Math.max(o,3):4);break;case"pouring":rt(a,80,1.5,3),Q(a,r?Math.max(o,5):6);break;case"snowy":Gt(a,40),Q(a,r?Math.max(o,3):4);break;case"snowy-rainy":Gt(a,20),rt(a,20,.8,1),Q(a,r?Math.max(o,3):4);break;case"hail":rt(a,30,1.2,3),Gt(a,15),Q(a,r?Math.max(o,4):5);break;case"lightning":qr(a,2,[0,3]),Q(a,r?Math.max(o,5):6);break;case"lightning-rainy":qr(a,3,[0,2,4]),rt(a,60,1.3,2),Q(a,r?Math.max(o,5):6);break;case"fog":mo(a);break;case"windy":case"windy-variant":Q(a,r?o:3,1.5);break;case"exceptional":ho(a);break;default:r&&o>0&&Q(a,o);break}}catch(o){console.warn(`${fe} buildConditionFx threw \u2014 atmospheric FX will be partial or absent for this condition. Please share the error below when reporting.`,o)}return a}function at(e,t,r){return r===t?0:Math.max(0,Math.min(1,(e-t)/(r-t)))}function Yt(e,t,r="ellipse"){let a=Math.max(0,Math.min(1,t)),o=Math.round(3+a*50),n=Math.round(2+a*25),i=Math.round(50+a*30),l=c=>c.toString(16).padStart(2,"0");return`radial-gradient(${r} at 50% 30%, ${e}${l(o)} 0%, ${e}${l(n)} ${i}%, transparent 90%)`}function Yr(e,t=6,r=1.2){let a=Math.max(0,Math.min(1,e));return t-a*(t-r)}function Kr(e,t){let r=Math.max(0,Math.min(1,t)),a=Math.round(4+r*20),o=Math.round(r*8),i=Math.round((.15+r*.55)*255).toString(16).padStart(2,"0");return`0 0 ${a}px ${o}px ${e}${i}`}function Zr(e,t="0,0,0"){let r=Math.max(0,Math.min(1,e));if(r<.1)return"";let a=Math.round(60-r*30),o=(r*.5).toFixed(2);return`radial-gradient(ellipse at center, transparent ${a}%, rgba(${t},${o}) 100%)`}function Qr(e,t=8,r=2){let a=Math.max(0,Math.min(1,e));return t-a*(t-r)}var wo="#a83d2a",Jr="#7a2d20",Ne="#fdf6e3",go='<svg viewBox="0 0 40 40" width="38" height="38" aria-hidden="true">',bo="</svg>";function ea(e){let t=["day","cloudy","rain","night"].includes(e)?e:"day",a=`<circle class="mc" cx="20" cy="20" r="18" fill="${t==="night"?Jr:wo}" opacity="0.92"/>`,o=`<line class="mh" x1="6" y1="22" x2="34" y2="22" stroke="${Ne}" stroke-width="0.8" opacity="0.85"/>`,n="";return t==="day"?n=`<circle class="md" cx="20" cy="14" r="2.4" fill="${Ne}" opacity="0.95"/>`:t==="cloudy"?n=`<circle class="md" cx="20" cy="14" r="2.4" fill="${Ne}" opacity="0.45"/>`:t==="rain"?n=[`<line class="mg" x1="14" y1="11" x2="13" y2="16" stroke="${Ne}" stroke-width="0.7" opacity="0.55"/>`,`<line class="mg" x1="20" y1="11" x2="19" y2="16" stroke="${Ne}" stroke-width="0.7" opacity="0.55"/>`,`<line class="mg" x1="26" y1="11" x2="25" y2="16" stroke="${Ne}" stroke-width="0.7" opacity="0.55"/>`].join(""):t==="night"&&(n=`<circle class="md" cx="20" cy="14" r="2.4" fill="${Ne}" opacity="0.95"/><circle class="md-cut" cx="21.4" cy="13.4" r="1.8" fill="${Jr}"/>`),`${go}${a}${o}${n}${bo}`}function re(e,t){return t?"night":["rainy","pouring","snowy","snowy-rainy","hail","lightning-rainy"].includes(e)?"rain":["cloudy","fog"].includes(e)?"cloudy":"day"}var _={kicker(e){return`<div class="pw-t-kicker">${h(e)}</div>`},heroTier(e,{flavor:t="aqi",color:r=""}={}){let a=t==="atmos"?"pw-t-hero-tier-atmos":"pw-t-hero-tier-aqi",o=r?` style="color:${k(r)}"`:"";return`<div class="pw-t-hero-tier ${a}"${o}>${h(e)}</div>`},display(e,{color:t="",suffix:r=""}={}){let a=t?` style="color:${k(t)}"`:"",o=r?`<span class="pw-t-display-suf">${h(r)}</span>`:"";return`<div class="pw-t-display"${a}>${h(String(e))}${o}</div>`},narrative(e){return`<div class="pw-t-narrative">${h(e)}</div>`},gloss(e){return`<div class="pw-t-gloss">${h(e)}</div>`},meta(e){return`<div class="pw-t-meta">${h(e)}</div>`},chartCaption(e){return`<div class="pw-t-chart-caption">${h(e)}</div>`},stat(e,t,{data:r=!1,valueColor:a=""}={}){let o=a?` style="color:${k(a)}"`:"",n=r?"pw-t-stat-l pw-t-data":"pw-t-stat-l";return`<div class="pw-t-stat"><div class="pw-t-stat-v"${o}>${h(String(e))}</div><div class="${n}">${h(t)}</div></div>`},statLabel(e){return`<span class="pw-t-stat-l">${h(e)}</span>`},dataToken(e){return`<span class="pw-t-data">${e}</span>`},heroBlock({tier:e="",tierFlavor:t="aqi",tierColor:r="",value:a="",valueSuffix:o="",valueColor:n="",narrative:i=""}={}){let l=e?this.heroTier(e,{flavor:t,color:r}):"",c=a!==""?this.display(a,{color:n,suffix:o}):"",d=i?this.narrative(i):"";return`<div class="pw-hero-block">${l}${c}${d}</div>`},statsRow(e,{columns:t=4,divided:r=!1}={}){let a=e.filter(Boolean);return a.length?`<div class="pulse-stats-row" data-cols="${t}"${r?' data-divided="true"':""}>${a.join("")}</div>`:""}};function Y({sectionClass:e,ariaLabel:t,brandVariant:r,kicker:a="",narrative:o="",preContent:n="",extraSectionClass:i="",sectionStyle:l="",body:c,proView:d="",proInitial:s=!1,proAction:p="view-swap",proAriaLabel:u="Toggle pro view",pro:m=!0}){m===!1&&(d="",p="view-swap",s=!1);let f=l?` style="${l}"`:"",g=`pw-section pw-cartouche ${e}${i?` ${i}`:""}`,w=ea(r),v=[a?_.kicker(a):"",o?_.narrative(o):""].filter(Boolean).join(""),x=v?`<div class="pw-t-marg">${v}</div>`:"",y=!!d,$=y||p!=="view-swap",A=y?`<div class="pw-view pw-view-default">${c}</div><div class="pw-view pw-view-pro">${d}</div>`:c,S=s?"true":"false",E=$?`<button class="pw-brand-mark-corner" aria-label="${h(u)}" aria-pressed="${S}" type="button">${w}</button>`:`<div class="pw-brand-mark-corner" aria-hidden="true">${w}</div>`;return`
    <div class="${g}" data-pro="${S}" data-pro-action="${p}"${f} role="region" aria-label="${h(t)}">
      ${n}
      ${E}
      <div class="pw-content">
        ${x}
        ${A}
      </div>
    </div>`}var Kt=Object.freeze({none:{label:"Stable",color:"#30d158",desc:"No thunderstorm risk"},marginal:{label:"Marginal",color:"#ffd60a",desc:"Isolated storms possible"},slight:{label:"Slight",color:"#ff9f0a",desc:"Brief storms possible"},enhanced:{label:"Enhanced",color:"#ff6b35",desc:"Organized storms likely"},moderate:{label:"Moderate",color:"#ff453a",desc:"Severe storms expected"},high:{label:"Extreme",color:"#8b0000",desc:"Dangerous storm potential"},unknown:{label:"Unknown",color:"#888888",desc:"Insufficient data"}}),vo=Object.freeze({none:5,marginal:20,slight:40,enhanced:60,moderate:80,high:100,unknown:0});function xo(e,t){let r=Math.min(100,e/4e3*100),a=Math.min(100,Math.max(0,(6-t)/12*100));return Math.round(r*.6+a*.4)}function yo(e){return e<=10?{tierKey:"none",label:"Stable",color:"#30d158",desc:"No thunderstorm risk"}:e<=30?{tierKey:"marginal",label:"Marginal",color:"#ffd60a",desc:"Isolated storms possible"}:e<=55?{tierKey:"slight",label:"Moderate",color:"#ff9f0a",desc:"Scattered storms likely"}:e<=80?{tierKey:"moderate",label:"High",color:"#ff453a",desc:"Severe storms expected"}:{tierKey:"high",label:"Extreme",color:"#8b0000",desc:"Dangerous storm potential"}}function _o(e,t){let r=t.atmosCe,a=r.cape&&e.states[r.cape]&&Number(e.states[r.cape].state)||0,o=r.lifted_index&&e.states[r.lifted_index]&&Number(e.states[r.lifted_index].state)||0,n=!!(r.cape&&e.states[r.cape]),i=!!(r.lifted_index&&e.states[r.lifted_index]),l=n||i?xo(a,o):null;if(r.stability_assessment&&e.states[r.stability_assessment]){let d=e.states[r.stability_assessment].state,s=e.states[r.stability_assessment].attributes||{},p=Kt[d];if(p){let u=vo[d]??0;return{tierKey:d,...p,score:u,source:"composite",attrs:s,capeValue:a,liValue:o,hasCape:n,hasLI:i}}}let c=l!==null?yo(l):null;return{tierKey:c?.tierKey||"unknown",label:c?.label||"Unknown",color:c?.color||"#888888",desc:c?.desc||"",score:l,source:"fallback",attrs:null,capeValue:a,liValue:o,hasCape:n,hasLI:i}}function $o(e){return Math.max(0,Math.min(100,e))}function ta(e,t=5e3){return t<=0?0:Math.max(0,Math.min(100,e/t*100))}function ko(e,t){let n=Math.max(e,t),i=5e3;n>5e3*.8&&(i=Math.max(5e3,Math.ceil(n*1.25/1e3)*1e3));let l=Math.ceil(i/5e3)*1e3;i=Math.ceil(i/l)*l;let c=[];for(let d=i;d>=0;d-=l)c.push(d);return{scaleMax:i,labelInterval:l,labels:c}}var So=Object.freeze({none:0,unknown:0,marginal:1,slight:2,enhanced:3,moderate:4,high:5});function Mo(e){if(!e)return null;let t=r=>So[String(e[r]||"none")]??0;return{maxThermal:Math.max(t("cape_tier"),t("lifted_index_tier"),t("lapse_rate_tier")),shearTier:t("wind_shear_tier")}}function To({tierKey:e,tierDesc:t,hourly:r,now:a,todaySunset:o,attrs:n,timeZone:i}){if(e==="none"||e==="unknown")return"Atmosphere settled \xB7 no convective signals";let l=Mo(n);if(l&&l.maxThermal===0&&l.shearTier>=2)return"Wind shear elevated \xB7 atmosphere thermally quiet";let c=o&&!isNaN(o.getTime())?o.getTime():null,d=a.getTime(),s=c!==null&&d>=c,p=Array.isArray(r)?r.slice(0,6):[],u=p.map(y=>Number(y&&y.cape)||0),m=u.some(y=>Number.isFinite(y)&&y>0),f=null,g=null;if(m){let y=Math.max(...u);if(y>0){let $=p[u.indexOf(y)],A=$?$.datetime:null,S=A?new Date(String(A)):null;S&&!isNaN(S.getTime())&&(f=U(S,i),g=S.getTime())}}if(f===null||g===null){let y=t||"Storm risk active";return s?`${y} \xB7 calming overnight`:y}let w=1800*1e3,v=g<d-w,x=g>=d-w&&g<=d+w;return v?s?`Storm risk easing \u2014 peaked ${f}, calming overnight`:`Storm risk easing \u2014 peaked ${f}`:x?s?"Storm risk peaking now, calming overnight":c!==null?"Storm risk peaking now, calming after sunset":"Storm risk peaking now":c!==null&&g<c?`Storm risk peaks ${f}, calming after sunset`:c!==null?`Storm risk peaks ${f} (after sunset)`:`Storm risk peaks ${f}`}var xi=Object.freeze([Object.freeze({max:30,tier:"none"}),Object.freeze({max:40,tier:"marginal"}),Object.freeze({max:50,tier:"slight"}),Object.freeze({max:60,tier:"enhanced"}),Object.freeze({max:75,tier:"moderate"})]);var yi=Object.freeze([Object.freeze({max:6,tier:"none"}),Object.freeze({max:6.5,tier:"marginal"}),Object.freeze({max:7.5,tier:"slight"}),Object.freeze({max:8,tier:"enhanced"}),Object.freeze({max:9,tier:"moderate"})]);function Fo(e){let t=Math.max(0,Math.min(100,e)),r=t/100;return{count:t<=10?0:Math.round(2+r*6),minSize:2+Math.round(r),maxSize:3+Math.round(r),minDur:4-r*2.2,maxDur:4-r*1.2}}function ra(e,t,r=Math.random){let a=document.createDocumentFragment(),o=Fo(e);if(o.count===0)return a;let n=k(t);for(let i=0;i<o.count;i++){let l=document.createElement("div");l.className="pw-thermal-particle";let c=o.minSize+r()*(o.maxSize-o.minSize),d=10+r()*80,s=r()*30,p=o.minDur+r()*(o.maxDur-o.minDur),u=r()*p,m=.4+r()*.3,f=-(50+r()*60);l.setAttribute("style",[`width:${c.toFixed(1)}px`,`height:${c.toFixed(1)}px`,`left:${d.toFixed(1)}%`,`bottom:${s.toFixed(1)}%`,`background:${n}`,`--rise-dur:${p.toFixed(2)}s`,`--rise-dist:${f.toFixed(0)}px`,`--peak-op:${m.toFixed(2)}`,`animation-delay:${u.toFixed(2)}s`].join(";")),a.appendChild(l)}return a}function aa({hass:e,config:t,discovery:r,forecastData:a}){let o=r.atmosCe;if(!o.cape&&!o.lifted_index&&!o.freezing_level_height)return console.debug(`${fe} Atmosphere section requires Atmos CE sensors (cape / lifted_index / freezing_level_height) \u2014 section skipped. Install Atmos CE integration if you want the atmospheric stability column.`),null;let n=_o(e,r),{capeValue:i,liValue:l,hasCape:c,hasLI:d,score:s}=n,p=H=>{let K=o[H];if(!K||!e.states[K])return{value:null,unit:""};let ie=Number(e.states[K].state);if(!Number.isFinite(ie))return{value:null,unit:""};let ce=String(e.states[K].attributes?.unit_of_measurement||"");return{value:ie,unit:ce}},u=p("wind_shear_0_6_km"),m=p("lapse_rate_700_500_hpa"),f=p("freezing_level_height"),g=p("lcl_height"),w=n.tierKey,v={label:n.label,color:n.color,desc:n.desc},y=["slight","enhanced","moderate","high"].includes(w)?"rain":"cloudy",$=new Date,A=r.sunEntityId?e.states[r.sunEntityId]:null,{todaySunset:S}=je($,A?.attributes?.next_rising,A?.attributes?.next_setting),E=To({tierKey:w,tierDesc:v.desc,hourly:a?.hourly||[],now:$,todaySunset:S,attrs:n.attrs,timeZone:oe(e)}),N=f.value??0,P=g.value??0,{scaleMax:R,labels:z}=ko(N,P),O=s!==null?$o(s):0,b=v.color,T=c||d?`
          <div class="pw-atmos-cape-fill" style="height:${Number(O)}%;background:linear-gradient(to top, ${k(b)}66, ${k(b)}11)"></div>`:"",C=f.unit||"m",D=f.value!==null?(()=>{let H=ta(f.value,R);return`
          <div class="pw-atmos-freeze-marker" style="bottom:${Number(H)}%">
            <span class="pw-atmos-freeze-label">\u2744 ${h(String(Math.round(f.value)))}${h(C)}</span>
            <div class="pw-atmos-freeze-line"></div>
          </div>`})():"",J=g.unit||"m",ge=g.value!==null?(()=>{let H=ta(g.value,R);return`
          <div class="pw-atmos-lcl-marker" style="bottom:${Number(H)}%">
            <span class="pw-atmos-lcl-label">\u2601 LCL ${h(String(Math.round(g.value)))}${h(J)}</span>
            <div class="pw-atmos-lcl-line"></div>
          </div>`})():"",_e=`
        <div class="pw-atmos-column-wrap">
          <div class="pw-atmos-scale">${z.map(H=>`<span class="pw-atmos-scale-label">${H>=1e3?`${H/1e3}km`:String(H)}</span>`).join("")}</div>
          <div class="pw-atmos-column">
            ${T}
            ${D}
            ${ge}
            <div class="pw-atmos-ground-label">surface</div>
          </div>
        </div>`,$e=_.heroBlock({tier:v.label,tierFlavor:"atmos",tierColor:"var(--pw-vermilion)",narrative:E}),Ce=[c?_.stat(`${Math.round(i)}`,"cape J/kg"):"",d?_.stat(l.toFixed(1),"lifted idx"):"",u.value!==null?_.stat(`${Math.round(u.value)}`,`shear ${u.unit||"km/h"}`):"",m.value!==null?_.stat(m.value.toFixed(1),`lapse ${m.unit||"\xB0C/km"}`):""],Ae=_.statsRow(Ce,{columns:4,divided:!0}),V=`
        ${$e}
        ${_e}
        ${Ae}`;return Y({sectionClass:"pw-atmosphere-v2",ariaLabel:"Atmospheric stability",brandVariant:y,kicker:"atmospheric stability",body:V,pro:t?.pro!==!1})}function oa(e,t){let r=t?Number(pe(e,t,{hour:"2-digit",hourCycle:"h23"})):e.getHours();return r>=6&&r<12?"this morning":r>=12&&r<17?"this afternoon":r>=17&&r<21?"this evening":"tonight"}function Co(e,t){return e==="sunny"||e==="clear-night"?"Clear skies":e==="rainy"||e==="pouring"?"Rain":e==="snowy"||e==="snowy-rainy"?"Snow":e==="lightning"||e==="lightning-rainy"?"Storms":e==="fog"?"Fog":t>=88?"Overcast":t>=50?"Mostly cloudy":t>=12?"Some sun":"Sunny"}function Ao(e){let t=e.slots.slice(0,6);if(t.length===0)return null;let r=Number(t[t.length-1].cloud_coverage),a=Number.isFinite(r)?r-e.cloudCoverNow:0,o=t.reduce((d,s)=>Math.max(d,Number(s.precipitation_probability)||0),0),n=t.reduce((d,s)=>Math.max(d,Number(s.snowfall)||0),0),l=t.reduce((d,s)=>Math.max(d,Number(s.wind_speed)||0),e.windSpeed)-e.windSpeed;return["moderate","high"].includes(e.stabilityState)?"with thunderstorms developing":o>=60?n>0?"with snow likely":"with rain likely":o>=40?n>0?"with snow possible":"with a brief shower or two":a>=30?"then increasing clouds":a<=-30?"then clearing":l>=8?"with wind firming":null}function na(e){let t=Co(e.conditionNow,Number(e.cloudCoverNow)||0),r=Ao(e),a=r?oa(e.now,e.timeZone):null,o;return r?r.startsWith("then ")?o=`${t}, ${r} ${a}.`:o=`${t}, then ${r} ${a}.`:o=`${t} ${oa(e.now,e.timeZone)}.`,{initial:t,transition:r,anchor:a,sentence:o}}var Eo={sunny:"linear-gradient(180deg, #1a4a7a 0%, #2a6aaa 40%, transparent 100%)","clear-night":"linear-gradient(180deg, #050510 0%, #0a0a1a 50%, transparent 100%)",partlycloudy:"linear-gradient(180deg, #1a2a4a 0%, #2c4a6e 50%, transparent 100%)",cloudy:"linear-gradient(180deg, #2a2a3a 0%, #3a3a4a 50%, transparent 100%)",rainy:"linear-gradient(180deg, #1a2a3a 0%, #2a3a4a 50%, transparent 100%)",pouring:"linear-gradient(180deg, #0a1a2a 0%, #1a2a3a 50%, transparent 100%)",snowy:"linear-gradient(180deg, #2a3040 0%, #3a4050 50%, transparent 100%)","snowy-rainy":"linear-gradient(180deg, #1a2a3a 0%, #2a3a48 50%, transparent 100%)",hail:"linear-gradient(180deg, #1a2a3a 0%, #2a3a48 50%, transparent 100%)",lightning:"linear-gradient(180deg, #0a0a1a 0%, #1a1a2a 50%, transparent 100%)","lightning-rainy":"linear-gradient(180deg, #0a0a1a 0%, #1a1a2a 50%, transparent 100%)",fog:"linear-gradient(180deg, #2a2a2e 0%, #3a3a3e 50%, transparent 100%)",windy:"linear-gradient(180deg, #1a2a4a 0%, #2c4a6e 50%, transparent 100%)","windy-variant":"linear-gradient(180deg, #1a2a4a 0%, #2c4a6e 50%, transparent 100%)",exceptional:"linear-gradient(180deg, #4a2a1a 0%, #6a3a1a 40%, transparent 100%)"},No="linear-gradient(180deg, #1a2a3a 0%, #2a3a4a 50%, transparent 100%)",ia={dry:"#30d158",comfortable:"#30d158",slightly_humid:"#ffd60a",humid:"#ff9f0a",oppressive:"#ff453a",clear:"#30d158",good:"#30d158",moderate:"#ffd60a",poor:"#ff9f0a",fog:"#ff453a"};function Ro(e){return e<=30?"#5ac8fa":e<=60?"#30d158":e<=80?"#ff9f0a":"#ff453a"}function Do(e,t){if(e==null)return"Press";let r=Math.abs(Number(e));if(r<=1)return"Press";let a=t==="rising"?"Rising":t==="falling"?"Falling":"Press";return r>3?`${a} rapidly`:a}function Lo(e,t,r){let a=e.map(s=>{let p=Number(s.cape);return Number.isFinite(p)?p:0}),o=Math.max(...a,300),n=Math.max(...a),i=a.indexOf(n),c=a.map((s,p)=>({x:p/Math.max(e.length-1,1)*t,y:r-s/o*r})).map((s,p)=>`${p===0?"M":"L"}${s.x.toFixed(1)},${s.y.toFixed(1)}`).join(" "),d=`${c} L${t},${r} L0,${r} Z`;return{svgPath:c,areaPath:d,peakValue:n,peakIndex:i,maxCape:o}}function Io(e,t,r,a,o,n,i,l){let c=[];return i>0&&c.push({name:"Snow",value:i,unit:l}),r>0&&c.push({name:"Rain",value:r,unit:a}),o>0&&c.push({name:"Showers",value:o,unit:n}),c.length>0?`${c.map(s=>`${h(s.name)} ${h(s.value.toFixed(1))} ${h(s.unit)}`).join(" \xB7 ")} now`:e>0?`Precipitation \u2014 next 12h \xB7 ${h(e.toFixed(1))} ${h(t)} now`:"Precipitation \u2014 next 12h"}function sa({hass:e,config:t,discovery:r,weatherEntity:a,forecastData:o}){let n=a.attributes,i=r.atmosCe,l=r.sunEntityId||"",c=oe(e),{condition:d,isNight:s}=bt(e,a,r),p=(L,I)=>gt(e,i,n,L,I),u=(L,I)=>Pr(e,i,L,I),m=p("temperature","temperature"),f=p("apparent_temperature","apparent_temperature")||m,g=p("humidity","humidity"),w=p("wind_speed","wind_speed"),v=p("wind_direction","wind_bearing"),x=p("wind_gusts","wind_gust_speed")||p("wind_gusts","wind_gusts"),y=p("dew_point","dew_point"),$=p("visibility","visibility"),A=p("pressure","pressure"),S=u("temperature","\xB0C"),E=u("visibility","km"),N=u("pressure","hPa"),P=u("dew_point","\xB0C"),R=o?.daily,z=o?.hourly,O=n.forecast,b=m,T=m;if(R&&R.length>0){let L=R[0],I=Number(L.templow),M=Number(L.temperature);Number.isFinite(I)&&Number.isFinite(M)&&(b=Math.min(I,M),T=Math.max(I,M))}else if(z&&z.length>0){let L=Date.now(),I=new Date;I.setHours(23,59,59,999);let M=I.getTime(),q=1/0,G=-1/0;for(let xe of z.slice(0,24)){let se=Date.parse(String(xe.datetime??""));if(Number.isFinite(se)&&(se<L||se>M))continue;let B=Number(xe.temperature);Number.isFinite(B)&&(B<q&&(q=B),B>G&&(G=B))}Number.isFinite(q)&&Number.isFinite(G)&&q!==G&&(b=Math.min(q,m),T=Math.max(G,m))}else if(O&&O.length>0){let L=O[0],I=Number(L.templow),M=Number(L.temperature);Number.isFinite(I)&&Number.isFinite(M)&&(b=Math.min(I,M),T=Math.max(I,M))}let C=r.atmosCe.uv_index,D=C?Number(e.states[C]?.state)||0:Number(n.uv_index??0),{value:J,unit:ge}=Ve(e,i.precipitation),be=ge||"mm",{value:_e,unit:$e}=Ve(e,i.rain),{value:Ce,unit:Ae}=Ve(e,i.showers),{value:V,unit:H}=Ve(e,i.snowfall),K=$e||"mm",ie=Ae||"mm",ce=H||"cm",{value:ve,entity:Xe}=Ve(e,i.uv_index_clear_sky),De=i.dew_point_comfort?e.states[i.dew_point_comfort]:null,Le=i.visibility_category?e.states[i.visibility_category]:null,Ie=i.feels_like_context?e.states[i.feels_like_context]:null,ee=i.pressure_trend?e.states[i.pressure_trend]:null,ze=new Date,it=l?e.states[l]:null,Ft=it?.attributes?.next_rising,Ct=it?.attributes?.next_setting,{todaySunrise:Ye,todaySunset:Ee,tomorrowSunrise:Ke}=je(ze,Ft,Ct),ue=null;r.atmosCe.cloud_cover&&(ue={total:Number(e.states[r.atmosCe.cloud_cover]?.state)||0,low:Number(e.states[r.atmosCe.cloud_cover_low]?.state)||0,mid:Number(e.states[r.atmosCe.cloud_cover_mid]?.state)||0,high:Number(e.states[r.atmosCe.cloud_cover_high]?.state)||0});let Oe=i.freezing_level_height?e.states[i.freezing_level_height]:null,st=Oe&&Number(Oe.state)||0,He=(i.stability_assessment?e.states[i.stability_assessment]:null)?.state||"",Ze=i.lifted_index?e.states[i.lifted_index]:null,me=Ze&&Number(Ze.state)||0,lt=k(Eo[d]||No),At=Math.max(T-b,1),kn=Math.max(0,Math.min(100,(m-b)/At*100)),rr=yt(v),La=`data-condition="${h(d)}" data-night="${s}" data-cloud='${h(JSON.stringify(ue||""))}'`,Ia=at(m,20,42),za=at(m,15,-10),Et=Math.max(Ia,za),Oa=Te(m),Sn=Et>.05?`text-shadow: 0 2px 20px rgba(0,0,0,0.3), ${Kr(Oa,Et)}`:"text-shadow: 0 2px 20px rgba(0,0,0,0.3)",ar=Zr(Et),Ha=ar?`<div class="pw-tension-vignette" style="background: ${k(ar)}"></div>`:"",Mn=V>0?`<div class="pw-snow-badge" style="color:var(--pw-color-freeze, #5ac8fa)">\u2744 ${h(V.toFixed(1))} ${h(ce)}</div>`:"",or=Ie?.state||"",Pe=Ie?.attributes?.difference,ct="";or==="wind_chill"&&Pe!==null&&Pe!==void 0?ct=`<div class="pw-feels-context">Wind chill ${h(String(Math.round(Number(Pe))))}\xB0</div>`:or==="heat_index"&&Pe!==null&&Pe!==void 0&&(ct=`<div class="pw-feels-context">Heat index +${h(String(Math.round(Number(Pe))))}\xB0</div>`);let Pa=["marginal","slight","enhanced","moderate","high"],Ba="";if(He&&Pa.includes(He)){let L=Kt[He];if(L){let I=k(L.color),M=`\u26A1 ${h(L.label)}`;if(Ze&&me<0){let q=Je.find(G=>me>=G.min)||Je[Je.length-1];M+=` \xB7 <span style="color:${k(q.color)}">LI ${h(String(me))}</span>`}Ba=` <span class="pw-stability-badge" style="background:${I}33; color:${I}">${M}</span>`}}let Nt=Le?.state||"",Tn=Nt&&!["unavailable","unknown"].includes(Nt)&&ia[Nt]||"",pt=De?.state||"",Fn=pt&&!["unavailable","unknown"].includes(pt)&&ia[pt]||"",nr=ee?.attributes?.trend_symbol||"",ir=ee?.state==="rising"?"#30d158":ee?.state==="falling"?"#ff9f0a":ee?.state==="steady"?"#5ac8fa":"",Wa=Xe&&Math.abs(ve-D)>=.5,Rt=ee?.attributes?.change_3h,Dt=Do(Rt!=null?Number(Rt):null,ee?.state||"");if(Dt==="Press"&&ee?.state){let L=ee.state;L==="rising"?Dt="Rising":L==="falling"&&(Dt="Falling")}let Cn=ir||(ee?"#5ac8fa":""),Ua=Wr(w),An=xt(w),Lt=x>w+5,Va=w>0&&x/w>1.5,ja=Lt?Va?` / <b>${h(Math.round(x))}</b>`:` / ${h(Math.round(x))}`:"",qa=`<svg width="10" height="10" viewBox="0 0 10 10" style="vertical-align:middle;transform:rotate(${Number(v)||0}deg)"><polygon points="5,0 3,8 5,6 7,8" fill="${k(Ua)}" opacity="0.8"/></svg>`,En=`${h(Math.round(w))}${ja} ${qa}${h(rr)}`,Nn=`linear-gradient(to right, ${k(Te(b))}, ${k(Te(T))})`,Ga="";if(Oe&&st<5e3&&b<=0){let L=Math.max(0,Math.min(100,(0-b)/At*100)),I=Oe?.attributes?.unit_of_measurement||"m";Ga=`<div class="pw-arc-freeze" style="left:${Number(L)}%">
            <div class="pw-arc-freeze-label">\u2744 ${h(String(Math.round(st)))}${h(I)}</div>
            <div class="pw-arc-freeze-line"></div>
          </div>`}let sr="",lr=l?e.states[l]:null;if(lr&&Ye&&Ee&&Ke){let L=ze.getTime(),I=lr.state==="above_horizon",M,q,G,xe,se;if(I){let W=Ye.getTime(),ae=Ee.getTime(),Se=Math.max(ae-W,1);M=Math.max(0,Math.min(100,(L-W)/Se*100)),q=U(Ye,c),G=U(Ee,c),xe="background: linear-gradient(to right, #ff9f0a, #ffd60a)",se="#ff9f0a"}else{let W=Ee.getTime(),ae=Ke.getTime(),Se=Math.max(ae-W,1);M=Math.max(0,Math.min(100,(L-W)/Se*100)),q=U(Ee,c),G=U(Ke,c),xe="background: linear-gradient(to right, #1a3050, #5ac8fa)",se="#5ac8fa"}let B=`left:${Number(M)}%; background:${k(se)}; box-shadow: 0 0 6px ${k(se)}66`,ke=` style="color:${k(se)}"`,j=I?"1":"0.85",ye=I?"":"\u{1F319}";sr=`
      <div class="pw-day-arc" style="opacity:${j}">
        <span class="pw-day-arc-label"${ke}>${h(q)}</span>
        <div class="pw-day-arc-bar">
          <div class="pw-day-arc-fill" style="width:${Number(M)}%; ${xe}"></div>
          <div class="pw-day-arc-marker" style="${B}">${ye}</div>
        </div>
        <span class="pw-day-arc-label"${ke}>${h(G)}</span>
      </div>`}let Xa="",Ya="",Ka="",dt="",cr=o?.hourly||[];if(cr.length>0){let M=vt(cr,new Date).slice(0,12),q=M.some(B=>Number(B.precipitation_probability)>0),G=Io(J,be,_e,K,Ce,ie,V,ce);if(J>0)dt=`
      <div class="pw-weather-summary" style="position:relative; z-index:2">
        <span style="font-size:14px">\u{1F327}</span> ${G}
      </div>`;else{let B=na({now:new Date,cloudCoverNow:ue?ue.total:0,conditionNow:d,slots:M,windSpeed:w,uvIndex:D,stabilityState:He,timeZone:c});dt=`
      <div class="pw-weather-summary" style="position:relative; z-index:2">
        ${h(B.sentence)}
      </div>`}if(q){let B=M.map(ye=>{let W=Math.min(100,Math.max(0,Number(ye.precipitation_probability)||0)),ae=Number(ye.snowfall)||0,Se=(Number(ye.rain)||0)+(Number(ye.showers)||0),Qe=ae>0;if(Qe&&Se>0){let so=ae+Se,mr=Math.round(W*ae/so),lo=W-mr;return`<div class="pulse-precip-slot"><div class="pulse-precip-fill" style="height:${Number(lo)}%"></div><div class="pulse-precip-fill pw-precip-snow" style="height:${Number(mr)}%"></div></div>`}return`<div class="pulse-precip-slot"><div class="${Qe?"pulse-precip-fill pw-precip-snow":"pulse-precip-fill"}" style="height: ${W}%"></div></div>`}).join(""),j=M[Math.floor(M.length/2)]?`+${Math.floor(M.length/2)}h`:"";Xa=`
      <div style="position: relative; z-index: 2; margin: 16px var(--pulse-space-card-wide) 0;">
        <div class="pw-precip-label">${G}</div>
        <div class="pulse-precip-bar" role="img" aria-label="Precipitation probability" style="position:relative">${B}</div>
        <div class="pw-precip-times"><span>Now</span><span>${h(j)}</span><span>+${h(String(M.length))}h</span></div>
      </div>`}if(M.some(B=>Number(B.cape)>300)){let j=Lo(M,200,24),ye=j.peakIndex/Math.max(M.length-1,1)*200,W=j.peakValue>=1e3?`${(j.peakValue/1e3).toFixed(1)}k`:String(Math.round(j.peakValue)),ae=M[j.peakIndex]?.datetime?new Date(M[j.peakIndex].datetime):null,Se=ae?U(ae,c):"",Qe=tt("pw-cape-grad");Ya=`
      <div style="position: relative; z-index: 2; margin: 4px var(--pulse-space-card-wide) 0;">
        <div class="pw-precip-label" style="font-size:10px">Storm risk</div>
        <div style="position:relative">
          <svg class="pw-cape-sparkline" width="100%" height="24" viewBox="0 0 200 24" preserveAspectRatio="none">
            <defs>
              <linearGradient id="${Qe}" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#ff453a" stop-opacity="0.6"/>
                <stop offset="33%" stop-color="#ff9f0a" stop-opacity="0.4"/>
                <stop offset="66%" stop-color="#ffd60a" stop-opacity="0.3"/>
                <stop offset="100%" stop-color="#30d158" stop-opacity="0.2"/>
              </linearGradient>
            </defs>
            <path d="${j.areaPath}" fill="url(#${Qe})"/>
            <path d="${j.svgPath}" fill="none" stroke="#ff9f0a" stroke-width="1.5"/>
          </svg>
          ${j.peakValue>0?`<div class="pw-cape-peak" style="left:${Number(ye)}px">${h(W)} ${h(Se)}</div>`:""}
        </div>
      </div>`}M.some(B=>B.dew_point!==void 0&&B.dew_point!==null)&&(Ka=`
      <div style="position: relative; z-index: 2; margin: 2px var(--pulse-space-card-wide) 0;">
        <div class="pw-precip-label" style="font-size:10px">Comfort</div>
        <div class="pw-comfort-bar">${M.map(ke=>{let j=Number(ke.dew_point)||0;return`<div class="pw-comfort-slot" style="background:${k(Vr(j))}"></div>`}).join("")}</div>
      </div>`)}let Rn=Te(f),Dn=ue!==null?Ur(ue.total):"",Ln=Ro(g),In=`${h(Math.round(A))} ${h(N)}${nr?` <span style="color:${k(ir)}">${h(nr)}</span>`:""}`,zn=`${h(Math.round(D))}${Wa?` <span style="opacity:0.5">/ ${h(String(Math.round(ve)))}</span>`:""}`,Za=jr(d),Qa=re(d,s),Ja=t?.location_label||"Now",pr=ct?ct.replace(/<[^>]*>/g,"").trim():"",eo=dt?dt.replace(/<[^>]*>/g,"").trim():"",to=ue?Math.round(ue.total)+"%":"--",ro=`
        <div class="pw-loc-stamp">${h(Ja)} \xB7 ${h(U(new Date,c))}</div>
        <div class="pw-hero-block">
          ${_.display(Math.round(m),{suffix:S})}
          ${_.gloss(`${Za}${pr?" \xB7 "+pr:""}`)}
        </div>`,ao=_.statsRow([_.stat(`${Math.round(b)}/${Math.round(T)}\xB0`,"range"),_.stat(`${Math.round(w)}${Lt?` / ${Math.round(x)}`:""} ${rr}`,Lt?"wind / gust":"wind"),_.stat(Math.round(D),"uv"),_.stat(to,"cloud")],{columns:4}),ut=(o?.daily||[]).slice(0,7),It="";if(ut.length>=2){let M=ut.map(W=>Number(W.temperature)||0),q=ut.map(W=>Number(W.templow??W.temperature)||0),G=Math.min(...q),xe=Math.max(...M),se=Math.max(xe-G,1),B=W=>W/(ut.length-1)*320,ke=W=>38-(W-G)/se*34-2,j=M.map((W,ae)=>`${ae===0?"M":"L"}${B(ae).toFixed(1)},${ke(W).toFixed(1)}`).join(" ");It=`<svg viewBox="0 0 320 38" preserveAspectRatio="none">
      <path d="${`${j} L320,38 L0,38 Z`}" fill="rgba(168,61,42,0.08)"/>
      <path d="${j}" stroke="var(--pw-ink-cream)" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0.85"/>
    </svg>`}let oo=It?`<div class="pw-overview-spark-block">
        ${_.chartCaption("7-day temperature trend")}
        <div class="pw-overview-spark">${It}</div>
      </div>`:"",dr=Le?.state||"",zt=ee?.state||"",no=[Number.isFinite(g)&&g>0,Number.isFinite(y)&&y!==0,!!dr,!!zt].filter(Boolean).length>=2,ur="";if(no){let L=Number.isFinite(g)&&g>0?_.stat(`${Math.round(g)}%`,pt||"humidity"):_.stat("\u2014","humidity"),I=Number.isFinite(y)?_.stat(`${Math.round(y)}${P}`,"dew point"):_.stat("\u2014","dew point"),M=Number.isFinite(A)&&A>0?_.stat(`${Math.round(A)}`,zt?`${N} ${zt}`:N):_.stat("\u2014","pressure"),q=Number.isFinite($)&&$>0?_.stat(`${$.toFixed($<10?1:0)}${E}`,dr||"visibility"):_.stat("\u2014","visibility");ur=_.statsRow([L,I,M,q],{columns:4})}let io=`
        ${ro}
        ${_.narrative(eo)}
        ${sr}
        ${oo}
        ${ao}
        ${ur}`;return Y({sectionClass:"pw-overview-v2",ariaLabel:"Current weather overview",brandVariant:Qa,preContent:`${Ha}<div class="pw-fx" ${La} role="img" aria-label="${h(d)} weather effects"></div>`,body:io,pro:t?.pro!==!1})}function zo(e,t){if(!e||e.length===0)return"Forecast unavailable";let r=0;for(let l=1;l<e.length;l++)Number(e[l].temperature)>Number(e[r].temperature)&&(r=l);let a=e.findIndex(l=>Number(l.precipitation_probability)>=50),o=l=>l===0?"today":pe(new Date(String(e[l].datetime||"")),t,{weekday:"short"}).toLowerCase(),n=o(r),i=Math.round(Number(e[r].temperature));return a>=0&&a!==r?`Warmest ${n} (${i}\xB0) \xB7 rain ${o(a)}`:a>=0?`Wet stretch \xB7 warmest ${n} (${i}\xB0)`:`Warmest ${n} (${i}\xB0) \xB7 dry through the week`}function la({hass:e,config:t,discovery:r,forecastData:a,weatherEntity:o}){let n=a?.daily||[];if(n.length===0)return null;let i=oe(e),l=r.atmosCe,d=(l.temperature?e.states[l.temperature]:null)?.attributes?.unit_of_measurement||"\xB0C",s=n.slice(0,7),p=s.flatMap(S=>[X(S.temperature,0),X(S.templow,0)]),u=Math.min(...p),m=Math.max(...p),f=Math.max(m-u,1),g=Number(o?.attributes?.temperature),w=s.map((S,E)=>{let N=X(S.temperature,0),P=X(S.templow,0),R=Math.round(Number(S.precipitation_probability)||0),z=E===0,O=z?"today":pe(new Date(String(S.datetime||"")),i,{weekday:"short"}).toLowerCase(),b=_t(String(S.condition||"")),T=R>=50?`<span class="pw-fc-pop">${h(String(R))}%</span>`:'<span class="pw-fc-pop"></span>',C=(P-u)/f*100,D=(N-P)/f*100,J=z&&Number.isFinite(g)?`<span class="pw-fc-now" style="left:${k(((g-u)/f*100).toFixed(2)+"%")}"></span>`:"";return`
      <div class="pw-fc-row${z?" is-today":""}">
        <span class="pw-fc-day">${h(O)}</span>
        <span class="pw-fc-icon" aria-hidden="true">${b}</span>
        ${T}
        <span class="pw-fc-bar" aria-label="High ${Math.round(N)}${h(d)}, low ${Math.round(P)}${h(d)}">
          <span class="pw-fc-bar-fill" style="left:${k(C.toFixed(2)+"%")};width:${k(D.toFixed(2)+"%")}"></span>
          ${J}
        </span>
        <span class="pw-fc-range">
          <span class="pw-fc-lo">${h(String(Math.round(P)))}\xB0</span>
          <span class="pw-fc-hi">${h(String(Math.round(N)))}\xB0</span>
        </span>
      </div>`}).join(""),{condition:v,isNight:x}=bt(e,o,r),y=re(v,x),$=zo(s,i),A=`
        <div class="pw-fc-list" role="list">
          ${w}
        </div>`;return Y({sectionClass:"pw-forecast-v2",ariaLabel:"Seven-day forecast",brandVariant:y,kicker:"the week ahead",narrative:$,body:A,pro:t?.pro!==!1})}var qe=240,he=qe/2,we=qe/2,ot=90,ca=.12,kt=6,St=.5,pa=.25,Oo=.3,Ho=6,da=.7,Po=.2,Bo=4,Wo=3.3,Uo=15,Vo=35,jo=.08,qo=.2,Go=[{l:"N",a:0},{l:"NE",a:45},{l:"E",a:90},{l:"SE",a:135},{l:"S",a:180},{l:"SW",a:225},{l:"W",a:270},{l:"NW",a:315}];function ua(e){return(e-90)*Math.PI/180}function Xo(e){let t=e*Math.PI/180;return{x:Math.sin(t),y:-Math.cos(t)}}function Fe(e,t){return{x:he+t*Math.cos(e),y:we+t*Math.sin(e)}}function Yo(e,t,r,a){let o=Math.min(e/Ue,1)*ot,n=Fe(t-pa,o),i=Fe(t+pa,o),l=r>Oo?"pw-gust-sweep":"",c=Math.max(.6,2.5-r*2).toFixed(2),d=(.15+r*.3).toFixed(2),s=`transform-origin:${he}px ${we}px;--gust-dur:${c}s;--gust-peak:${d}`;return le("path",{class:l,d:`M${he},${we} L${n.x.toFixed(1)},${n.y.toFixed(1)} L${i.x.toFixed(1)},${i.y.toFixed(1)} Z`,fill:a,opacity:.15,style:s})}function Ko(e,t,r,a){let o=Math.min(e/Ue,1)*ot,n=Fe(t,o),i=Fe(t-ca,o*.7),l=Fe(t+ca,o*.7),c={x:n.x-kt*Math.cos(t-St),y:n.y-kt*Math.sin(t-St)},d={x:n.x-kt*Math.cos(t+St),y:n.y-kt*Math.sin(t+St)},s=r*Ho,p=Math.max(.4,4-r*3.6),u=s>Po?`animation:pw-arrowSway ${p.toFixed(2)}s ease-in-out infinite;--sway-fwd:${(s*da).toFixed(2)}deg;--sway-back:${(-s*(1-da)).toFixed(2)}deg`:"",m=`transform-origin:${he}px ${we}px;filter:drop-shadow(0 0 6px ${Me(a,.38)});${u}`,f=le("path",{d:`M${he},${we} L${i.x.toFixed(1)},${i.y.toFixed(1)} L${n.x.toFixed(1)},${n.y.toFixed(1)} L${l.x.toFixed(1)},${l.y.toFixed(1)} Z`,fill:a,opacity:.5}),g=le("line",{x1:he,y1:we,x2:n.x.toFixed(1),y2:n.y.toFixed(1),stroke:a,"stroke-width":2.5,"stroke-linecap":"round"}),w=le("path",{d:`M${n.x.toFixed(1)},${n.y.toFixed(1)} L${c.x.toFixed(1)},${c.y.toFixed(1)} L${d.x.toFixed(1)},${d.y.toFixed(1)} Z`,fill:a});return le("g",{style:m},f+g+w)}function ma({hass:e,config:t,discovery:r,weatherEntity:a}){let o=a.attributes,n=r.atmosCe,i=t.speed_mode||"speed",l=(V,H)=>gt(e,n,o,V,H),c=l("wind_speed","wind_speed"),d=l("wind_gusts","wind_gust_speed")||l("wind_gusts","wind_gusts")||c,s=l("wind_direction","wind_bearing"),u=(n.wind_speed?e.states[n.wind_speed]:null)?.attributes?.unit_of_measurement||o.wind_speed_unit||"km/h",m=i==="gust"?d:c,f=Math.min(c/Ue,1),g=xt(m),w=qt(m),v=We[w]||We.calm,x=yt(s),y=ua(s),$=Xo(s),A=Math.round(f*br),S=Bo-f*Wo,E=jo+f*qo,N=Uo+f*Vo,P=-$.y,R=$.x,z=[];for(let V=0;V<A;V++){let H=(Math.random()-.5)*400,K=-120-Math.random()*60,ie=420+Math.random()*60,ce=(N*(.6+Math.random()*.8)).toFixed(1),ve=(S+Math.random()*S*.5).toFixed(2),Xe=(Math.random()*3).toFixed(2),De=(E*(.5+Math.random()*.5)).toFixed(3),Le=(K*$.x+H*P).toFixed(1),Ie=(K*$.y+H*R).toFixed(1),ee=(ie*$.x+H*P).toFixed(1),ze=(ie*$.y+H*R).toFixed(1);z.push(`<div class="pw-streak" style="left:50%;top:50%;width:${ce}px;height:1px;transform:rotate(${s-90}deg);animation-duration:${ve}s;animation-delay:${Xe}s;opacity:${De};background:linear-gradient(to right, transparent, ${Me(v,.27)}, transparent);--sx:${Le}px;--sy:${Ie}px;--ex:${ee}px;--ey:${ze}px"></div>`)}let O=[];for(let V=1;V<=3;V++)O.push(le("circle",{cx:he,cy:we,r:V*30,fill:"none",stroke:v,"stroke-width":.5,opacity:.08+V*.02}));for(let V of Go){let H=ua(V.a),K=Fe(H,20),ie=Fe(H,ot+4),ce=Fe(H,ot+16),ve=V.l.length===1;O.push(le("line",{x1:K.x.toFixed(1),y1:K.y.toFixed(1),x2:ie.x.toFixed(1),y2:ie.y.toFixed(1),stroke:v,"stroke-width":.5,opacity:.12})),O.push(le("text",{x:ce.x.toFixed(1),y:ce.y.toFixed(1),"text-anchor":"middle","dominant-baseline":"central",fill:ve?"rgba(255,255,255,0.7)":"rgba(255,255,255,0.3)","font-size":ve?11:9,"font-weight":ve?600:400},h(V.l)))}O.push(Yo(d,y,f,v)),O.push(Ko(m,y,f,v)),(m>Ue||d>Ue)&&O.push(le("circle",{cx:he,cy:we,r:ot+2,fill:"none",stroke:"#ff453a","stroke-width":1.5,"stroke-dasharray":"4 4",opacity:.7})),O.push(le("circle",{cx:he,cy:we,r:18,fill:v,opacity:.06})),O.push(le("circle",{cx:he,cy:we,r:3,fill:v}));let T=f>Pt?(f-Pt)*5:0,C=Math.max(.15,.4-f*.25),D="";T>.1&&(D=`--dx:${(T*$.x).toFixed(2)}px;--dy:${(T*$.y).toFixed(2)}px;animation:pw-roseShake ${C.toFixed(2)}s ease-in-out infinite`);let J=Math.round(12+f*50).toString(16).padStart(2,"0"),ge=Math.round(6+f*25).toString(16).padStart(2,"0"),be=Br(`radial-gradient(ellipse at 50% 50%, ${v}${J} 0%, ${v}${ge} 40%, transparent 85%)`),_e=re(a?.state||"sunny",!1),$e=i==="gust",Ce=$e?"wind \xB7 gust":"wind",Ae=`
        <div class="pw-wind-streaks">${z.join("")}</div>
        <div class="pw-rose-wrap" style="${D}">
          <svg class="pw-rose-svg" width="${qe}" height="${qe}" viewBox="0 0 ${qe} ${qe}" style="display:block" role="img" aria-label="Wind compass rose showing ${h(Math.round(m))} ${h(u)} from ${h(x)}">
            <title>Wind direction compass</title>
            ${O.join("")}
          </svg>
          <div class="pw-wind-center">
            <div class="pw-wind-speed" style="color: ${k(v)}">${h(Math.round(m))}</div>
            <div class="pw-wind-unit">${h(u)} \xB7 ${h(Math.round(s))}\xB0 ${h(x)}</div>
            <div class="pw-wind-beaufort" style="color: ${k(v)}">${h(g.name)}</div>
            <div class="pw-wind-beaufort-desc">${h(g.desc)}</div>
          </div>
        </div>`;return Y({sectionClass:"pw-wind-v2",ariaLabel:"Wind compass and speed",brandVariant:_e,kicker:Ce,sectionStyle:`background: ${k(be)}`,body:Ae,proAction:"wind-mode",proInitial:$e,proAriaLabel:"Toggle speed and gust mode",pro:t.pro!==!1})}function Zo(e,t,r,a){if(r&&a){let i=(t==="us"?Ht:Ot).find(l=>l.label.toLowerCase()===r.toLowerCase());return{label:r,color:a,desc:i?.desc||""}}let o=t==="us"?Ht:Ot;for(let n of o)if(e<=n.max)return n;return o[o.length-1]}function Qo(e){let t=(e||"").toLowerCase();return t.includes("very unhealthy")||t.includes("hazardous")||t.includes("extremely poor")?"very_unhealthy":t.includes("sensitive")?"unhealthy_sg":t.includes("unhealthy")||t.includes("very poor")?"unhealthy":t.includes("moderate")||t.includes("fair")||t.includes("poor")?"moderate":t.includes("good")?"good":"unknown"}var fa=Object.freeze({good:"var(--pw-good-green)",moderate:"var(--pw-warn-yellow)",unhealthy_sg:"var(--pw-warn-amber)",unhealthy:"var(--pw-warn-red)",very_unhealthy:"#8b0000",unknown:"var(--pw-ink-cream)"});function ha({hass:e,config:t,discovery:r,weatherEntity:a}){let o=t.scale||"eu",n=o==="us"?"us_aqi":"european_aqi",i=t.aqi_entity||r.atmosCe[n];if(!i||!e.states[i])return null;let l=e.states[i],c=Number(l.state)||0,d=l.attributes?.category||null,s=l.attributes?.color||null,p=Zo(c,o,d,s),u=T=>{let C=r.atmosCe[T];if(!C||!e.states[C])return null;let D=Number(e.states[C].state);return Number.isFinite(D)?D:null},m=u("pm2_5"),f=u("pm10"),g=u("ozone"),w=u("nitrogen_dioxide"),v=u("sulphur_dioxide"),x=u("carbon_monoxide"),y=Qo(p.label),$=fa[y]||fa.unknown,A=re("cloudy",!1),S=o==="us",N=Math.min(100,Math.max(0,c/(S?300:100)*100)),P=S?"air quality \xB7 us":"air quality",R=_.heroBlock({value:Math.round(c),valueColor:$,tier:p.label,tierFlavor:"aqi",tierColor:$}),z=`
        <div class="pw-aq-band" aria-hidden="true">
          <div class="pw-aq-marker" style="left:${k(`${N.toFixed(2)}%`)}"></div>
        </div>
        <div class="pw-aq-band-labels">
          <span>good</span>
          <span>moderate</span>
          <span>unh sg</span>
          <span>unhealthy</span>
          <span>v.unh</span>
        </div>`,O=_.statsRow([m!==null?_.stat(Math.round(m),"PM2.5",{data:!0}):"",f!==null?_.stat(Math.round(f),"PM10",{data:!0}):"",g!==null?_.stat(Math.round(g),"O\u2083",{data:!0}):"",w!==null?_.stat(Math.round(w),"NO\u2082",{data:!0}):"",v!==null?_.stat(Math.round(v),"SO\u2082",{data:!0}):"",x!==null?_.stat(x.toFixed(1),"CO",{data:!0}):""],{columns:3}),b=`
        ${R}
        ${z}
        ${O}`;return Y({sectionClass:"pw-air-quality-v2",ariaLabel:"Air quality index",brandVariant:A,kicker:P,body:b,proAction:"aqi-scale",proInitial:S,proAriaLabel:"Toggle EU and US AQI scale",pro:t.pro!==!1})}function Jo(e){let t=(e%te+te)%te;return Ar[Math.floor(t/te*8)%8]}function en(e){return(e%te+te)%te<te/2}var Zt=864e5;function tn(e,t,r,a,o){if(a==null)return`<circle cx="${e.toFixed(1)}" cy="${t.toFixed(1)}" r="${r}" fill="#c8d0e0"/>`;let n=Math.max(0,Math.min(1,a/100)),i=o!=null?en(o):!0,l=`<circle cx="${e.toFixed(1)}" cy="${t.toFixed(1)}" r="${r}" fill="#2a2a3a"/>`;if(n>=.99)l+=`<circle cx="${e.toFixed(1)}" cy="${t.toFixed(1)}" r="${r}" fill="#e8e0d0"/>`;else if(n>.01){let c=t-r,d=t+r,s=(r*Math.abs(2*n-1)).toFixed(1),p=n>.5?1:0,u;i?u=`M${e.toFixed(1)},${c.toFixed(1)} A${r},${r} 0 0 1 ${e.toFixed(1)},${d.toFixed(1)} A${s},${r} 0 0 ${p} ${e.toFixed(1)},${c.toFixed(1)} Z`:u=`M${e.toFixed(1)},${c.toFixed(1)} A${r},${r} 0 0 0 ${e.toFixed(1)},${d.toFixed(1)} A${s},${r} 0 0 ${1-p} ${e.toFixed(1)},${c.toFixed(1)} Z`,l+=`<path d="${u}" fill="#e8e0d0"/>`}return l}var Mt="#050510",wa="#0a1226",ga="#172b4f",ba="#1f3d6e",va="#3a6fa8",xa="#d97a3a",ya="#ff9f0a",_a="#ffc560",$a="#7eaedb",ka="#2c5a8e",Sa="#ffd60a";function rn(e,t,r,a,o,n,i,l,c,d){let s=new Date(e.getTime());s.setHours(0,0,0,0);let p=e.getTime(),u=t.getTime(),m=(r??new Date(p-35*6e4)).getTime(),f=(a??new Date(p-30*6e4)).getTime(),g=(o??new Date(p-6*6e4)).getTime(),w=(n??new Date(p+30*6e4)).getTime(),v=(i??new Date(u-30*6e4)).getTime(),x=(l??new Date(u+6*6e4)).getTime(),y=(c??new Date(u+30*6e4)).getTime(),$=(d??new Date(u+35*6e4)).getTime(),A=(p+u)/2,S=b=>Math.max(0,Math.min(100,b)),E=b=>S((b-s.getTime())/Zt*100),N=(b,T)=>E((b+T)/2),P=Math.min(60,(u-p)/8)*6e4,R=A-P,z=A+P;return`linear-gradient(to right, ${[`${Mt} 0%`,`${Mt} ${E(m).toFixed(2)}%`,`${wa} ${N(m,f).toFixed(2)}%`,`${ga} ${E(f).toFixed(2)}%`,`${ba} ${N(f,g).toFixed(2)}%`,`${va} ${E(g).toFixed(2)}%`,`${xa} ${N(g,p).toFixed(2)}%`,`${ya} ${E(p).toFixed(2)}%`,`${_a} ${N(p,w).toFixed(2)}%`,`${$a} ${E(w).toFixed(2)}%`,`${ka} ${N(w,R).toFixed(2)}%`,`${Sa} ${E(R).toFixed(2)}%`,`${Sa} ${E(z).toFixed(2)}%`,`${ka} ${N(z,v).toFixed(2)}%`,`${$a} ${E(v).toFixed(2)}%`,`${_a} ${N(v,u).toFixed(2)}%`,`${ya} ${E(u).toFixed(2)}%`,`${xa} ${N(u,x).toFixed(2)}%`,`${va} ${E(x).toFixed(2)}%`,`${ba} ${N(x,y).toFixed(2)}%`,`${ga} ${E(y).toFixed(2)}%`,`${wa} ${N(y,$).toFixed(2)}%`,`${Mt} ${E($).toFixed(2)}%`,`${Mt} 100%`].join(", ")})`}function Ma(e){if(!e||isNaN(e)||e<=0)return"--";let t=Math.round(e/6e4),r=Math.floor(t/60),a=t%60;return`${r}h ${String(a).padStart(2,"0")}m`}function Ta({hass:e,config:t,discovery:r}){let a=new Date,o=oe(e),n=r.sunEntityId?e.states[r.sunEntityId]:null;if(!n)return null;let i=n.attributes||{},l=i.next_rising||i.sunrise,c=i.next_setting||i.sunset;if(!l||!c)return null;let d=new Date(a);d.setHours(12,0,0,0);let s=Z(new Date(l),d),p=Z(new Date(c),d);if(!s||!p||isNaN(s.getTime())||isNaN(p.getTime()))return null;let u=r.atmosCe,m=me=>u[me]?new Date(String(e.states[u[me]]?.state)):null,f=Z(m("golden_hour_morning_start"),s),g=Z(m("golden_hour_morning_end"),s),w=Z(m("blue_hour_morning_start"),s),v=Z(m("golden_hour_evening_start"),p),x=Z(m("golden_hour_evening_end"),p),y=Z(m("blue_hour_evening_end"),p),$=i.next_dawn,A=i.next_dusk,S=$?Z(new Date($),s):null,E=A?Z(new Date(A),p):null,N=u.moon_phase?e.states[u.moon_phase]:null,P=N?.attributes||{},R=P.moon_age!==void 0?Number(P.moon_age):null,z=P.illumination!==void 0?Number(P.illumination):null,O=R!==null?Jo(R):N?.state||null,b=Z(m("moonrise"),a),T=Z(m("moonset"),a),C=a.getTime()>=s.getTime()&&a.getTime()<=p.getTime(),D=U(s,o),J=U(p,o),ge=(s.getTime()+p.getTime())/2,be=U(new Date(ge),o),_e=p.getTime()-s.getTime(),$e=Zt-_e,Ce=Ma(_e),Ae=Ma($e),V=C?"Daylight":"Night",H=C?Ce:Ae,K=new Date(s.getTime());K.setHours(0,0,0,0);let ie=Math.max(0,Math.min(100,(a.getTime()-K.getTime())/Zt*100)),ce=rn(s,p,S,w,f,g,v,x,y,E),Xe=`
      <div class="pw-astro-rb" role="img" aria-label="24-hour sky phase ribbon">
        <div class="pw-astro-rb-track" style="${`background: ${k(ce)}`}"></div>
        <div class="pw-astro-rb-now" style="left:${ie.toFixed(2)}%" aria-hidden="true"></div>
        <div class="pw-astro-rb-axis">
          <span>00</span><span>06</span><span>12</span><span>18</span><span>24</span>
        </div>
      </div>`,De=z!=null?Math.round(z):null,Le=O||"Moon",Ie=tn(24,24,22,z,R),ee=De!==null?`<span class="pw-astro-moon-illum">${h(`${De}%`)}</span> illuminated`:"",ze=R!=null?`${R.toFixed(1)}d old`:"",it=R!=null?(()=>{let me=te/2,lt=(R%te+te)%te;return`${(lt<=me?me-lt:te-lt+me).toFixed(1)}d to full`})():"",Ft=[ee,ze,it].filter(Boolean).join(" \xB7 "),Ct=`
      <div class="pw-astro-moon-hero">
        <div class="pw-astro-moon-glyph" aria-hidden="true">
          <svg viewBox="0 0 48 48" width="48" height="48">${Ie}</svg>
        </div>
        <div class="pw-astro-moon-text">
          <div class="pw-astro-moon-name">${h(Le)}</div>
          <div class="pw-astro-moon-meta">${Ft}</div>
        </div>
      </div>`,Ye=C?`Sun rose ${D}, sets ${J} \xB7 solar noon ${be}.`:`Sun set ${J}, rises ${D} \xB7 solar noon ${be}.`,Ee=`
      <div class="pw-astro-hero">
        <div class="pw-astro-hero-tier">${h(V)}</div>
        <div class="pw-astro-hero-num">${h(H)}</div>
      </div>
      ${_.narrative(Ye)}`,Ke=U(b,o),ue=U(T,o),Oe=_.statsRow([_.stat(U(S,o),"civil dawn"),_.stat(U(f,o),"golden start",{valueColor:"var(--pw-warn-amber)"}),_.stat(U(w,o),"blue start",{valueColor:"var(--pw-wind)"}),_.stat(Ke,"moonrise")],{columns:4,divided:!0}),st=_.statsRow([_.stat(U(E,o),"civil dusk"),_.stat(U(x,o),"golden end",{valueColor:"var(--pw-warn-amber)"}),_.stat(U(y,o),"blue end",{valueColor:"var(--pw-wind)"}),_.stat(ue,"moonset")],{columns:4,divided:!0}),tr=`
      ${Ee}
      ${Ct}
      ${Xe}
      ${Oe}
      ${st}`,He=re(C?"sunny":"clear-night",!C),Ze=`<div class="pw-fx" data-astro-stars="${!C}" data-astro-day="${C}" role="img" aria-label="Sky atmospheric effects"></div>`;return Y({sectionClass:"pw-astro-v2",extraSectionClass:C?"":"is-night",ariaLabel:"Astronomy: sun and moon",brandVariant:He,kicker:"today's sky",preContent:Ze,body:tr,pro:t?.pro!==!1})}var Fa=18,an=62,Ca=168;function on(e){return e.active?0:typeof e.hoursUntil=="number"&&e.hoursUntil>0?e.hoursUntil:0}function Aa(e){let t=Math.min(on(e),Ca)/Ca;return Fa+t*(an-Fa)}function Qt(e){let t=`${e.summary||""}|${e.type||""}|${e.endTime||""}`,r=0;for(let a=0;a<t.length;a+=1)r=(r*31+t.charCodeAt(a))%360;return r/360*2*Math.PI}function nn(e,t){let r=e.alert_type||e.type||"wind",a=Number(e.level),o=Number.isFinite(a)&&a>0?a:1,n=Sr[et(o)],i=kr[r]||"mdi:alert",l=Number(e.progress)||0,c=Array.isArray(e.locations)?e.locations:[],d=e.end_time??"",s=null,p=null,u=!1;if(d==="")u=!0;else if(d){let m=new Date(d),f=new Date,g=m.getTime()-f.getTime();if(g/(1e3*60*60*24)>_r)u=!0;else if(t)s=Math.max(0,g/(1e3*60*60));else{let v=e.start_time||e.datetime;if(v){let x=new Date(String(v));p=Math.max(0,(x.getTime()-f.getTime())/(1e3*60*60))}}}return{type:r,icon:i,severity:o,color:n,summary:String(e.headline||e.summary||""),desc:String(e.description||""),active:t,hoursLeft:s,hoursUntil:p,progress:l,locations:c,link:e.link?String(e.link):null,endTime:String(d),isUntilFurtherNotice:u}}function sn(e){let t=et(e.severity),r="";e.isUntilFurtherNotice?r="UNTIL FURTHER NOTICE":e.active&&e.hoursLeft!==null?r=`${Math.round(e.hoursLeft)}H LEFT`:e.hoursUntil!==null?r=`IN ${Math.round(e.hoursUntil)}H`:e.active&&(r="ACTIVE");let a=String(e.type||"").toUpperCase(),o=String(e.summary||e.desc||"").toUpperCase().trim(),n=e.locations.length>0?e.locations.join(", ").toUpperCase():"",l=[r,a,o,n].filter(Boolean).join(" \xB7 ");return`
    <div class="pw-alert-ticker pw-alert-${t}">
      <span class="pw-alert-tri">\u25B6</span>
      <span class="pw-alert-text">${h(l)}</span>
    </div>`}function Ea({hass:e,config:t,discovery:r,proPersisted:a=!1}){let o=[];for(let b of r.alertEntityIds){let C=e.states[b]?.attributes?.all_alerts;if(Array.isArray(C)){for(let D of C)o.push(nn(D,D.active===!0));break}}let n=o.length>0,i=n?o.reduce((b,T)=>T.severity>b.severity?T:b,o[0]).severity:0,l=n?o.reduce((b,T)=>T.severity>b.severity?T:b,o[0]).color:"#30d158",c=at(i,0,4),d=n?Math.min(1.5,1+(o.length-1)*.15):1,s=Qr(c,3,1.2).toFixed(2),p=Yr(c).toFixed(2),u=n?Yt(l,c*d):Yt("#30d158",.08),m=140,f=m/2,g=m/2,w=n?{bgInner:i>=4?"#1a0000":i>=3?"#1a0e00":"#1a1500",bgOuter:i>=4?"#0a0000":i>=3?"#0a0500":"#0a0800",ring:k(Me(l,.15)),line:k(Me(l,.08)),sweep:k(Me(l,.4))}:{bgInner:"#001a00",bgOuter:"#000800",ring:"rgba(80,255,0,0.15)",line:"rgba(80,255,0,0.08)",sweep:"rgba(80,255,0,0.35)"},v=o.map(b=>{let T=f+Math.cos(Qt(b))*Aa(b),C=g+Math.sin(Qt(b))*Aa(b),D=(Qt(b)/(2*Math.PI)*Number(s)).toFixed(2);return b.active?`<div class="pw-radar-blip" style="left:${T.toFixed(1)}px;top:${C.toFixed(1)}px;--pw-blip-color:${k(b.color)};animation-delay:${D}s"></div>`:`<div style="position:absolute;left:${T.toFixed(1)}px;top:${C.toFixed(1)}px;width:4px;height:4px;border-radius:var(--pulse-radius-circle);background:${k(b.color)};opacity:0.2;transform:translate(-50%,-50%)"></div>`}).join(""),x=`
    <div style="display:flex;justify-content:center;padding:12px var(--pulse-space-card-wide);position:relative;z-index:2">
      <div class="pw-radar" style="--pw-radar-bg-inner:${w.bgInner};--pw-radar-bg-outer:${w.bgOuter};--pw-radar-color:${w.ring};--pw-radar-line:${w.line};--pw-radar-sweep:${w.sweep};--pw-radar-dur:${s}s" role="img" aria-label="${n?`${o.length} weather alerts`:"No weather alerts"}">
        ${v}
      </div>
    </div>`,y=(()=>{if(!n)return"";let b=null;for(let T of o){if(T.isUntilFurtherNotice)return"further notice";if(T.endTime){let C=new Date(T.endTime);!isNaN(C.getTime())&&(!b||C>b)&&(b=C)}}return b?pe(b,oe(e),{hour:"2-digit",minute:"2-digit",month:"short",day:"numeric",hourCycle:"h23"}):"further notice"})(),$=re(n?"rainy":"sunny",!1),A=o.map(sn).join(""),S=n?"":'<div class="pw-all-clear-v2"><strong>All Clear</strong>no active or upcoming warnings</div>',E=o.length===1?"alert":"alerts",N=n?`<div class="pw-alert-timestamp pw-alert-${et(i)}">${o.length} ${E} \xB7 valid through ${h(y)}</div>`:"",P=`<div class="pw-tension-wash${n?" breathing":""}" style="background: ${k(u)}; --breathe-dur: ${p}s"></div>`,R=`
        ${x}
        ${S}
        ${A?`<div class="pw-alert-list">${A}</div>`:""}
        ${N}`,z=o.map(b=>{let T=et(b.severity),C=b.summary||b.desc||b.type,D=[];b.isUntilFurtherNotice?D.push("until further notice"):b.active&&b.hoursLeft!==null?D.push(`${Math.round(b.hoursLeft)}h left`):b.hoursUntil!==null&&D.push(`in ${Math.round(b.hoursUntil)}h`),b.severity>0&&D.push(`severity ${b.severity}`),b.type&&D.push(b.type);let J=D.join(" \xB7 "),ge=b.desc&&b.desc!==b.summary?`<div class="pw-alert-detail-desc">${h(b.desc)}</div>`:"",be=b.locations.length>0?`<div class="pw-alert-detail-loc">${h(b.locations.join(" \xB7 "))}</div>`:"";return`
        <div class="pw-alert-detail pw-alert-${T}">
          <div class="pw-alert-detail-head">${h(C)}</div>
          ${J?`<div class="pw-alert-detail-meta">${h(J)}</div>`:""}
          ${ge}
          ${be}
        </div>`}).join(""),O=n?`
        ${x}
        ${S}
        ${z}
        ${N}`:void 0;return Y({sectionClass:"pw-alerts-v2",ariaLabel:"Weather alerts",brandVariant:$,kicker:n?`weather alerts (${o.length})`:"no weather alerts",preContent:P,body:R,proView:O,proInitial:a,pro:t?.pro!==!1})}var de=600,ln=280,Tt=8,Jt=80,Ge=200,nt=220,cn=254,Na=12,pn=30,dn=.9,un=3;function Re(e,t){return t<=1?de/2:Tt+e/(t-1)*(de-2*Tt)}function Ra(e,t,r){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(r))return(Jt+Ge)/2;let a=r-t||1;return Jt+(r-e)/a*(Ge-Jt)}function mn(e,t){let r=new Date(e);return pe(r,t,{hour:"2-digit",hourCycle:"h23"})}var fn=500;function hn(e,t=24,r){if(!Array.isArray(e))return null;let a=e.slice(0,fn),n=vt(a,new Date).slice(0,t);if(n.length<2)return null;let i=n[0],l="cloud_cover"in i,c="cloud_cover_low"in i&&"cloud_cover_mid"in i&&"cloud_cover_high"in i,d="wind_speed"in i&&("wind_bearing"in i||"wind_direction"in i),s=n.map(w=>{let v=Number(w.temperature),x=X(w.precipitation_probability,0),y=X(w.snowfall,0),$=X(w.rain,0),A=X(w.showers,0),S=String(w.condition||""),E=y>0||S==="snowy"||S==="snowy-rainy"?"snow":"rain",N=E==="snow"?y:$+A;return{temp:v,precip:x,precipMm:N,precipType:E,condition:S,cloudCover:l?X(w.cloud_cover,0):null,cloudLow:c?X(w.cloud_cover_low,0):null,cloudMid:c?X(w.cloud_cover_mid,0):null,cloudHigh:c?X(w.cloud_cover_high,0):null,windSpeed:d?X(w.wind_speed,0):null,windBearing:d?X(w.wind_bearing??w.wind_direction,0):null,timeLabel:mn(String(w.datetime||""),r),datetime:String(w.datetime||"")}}),p=Hr(s,w=>w.temp);if(p.length<2)return null;let u=p.map(w=>w.temp),m=Math.min(...u),f=Math.max(...u),g=Math.max(...p.map(w=>w.precipMm),0);return{points:p,n:p.length,min:m,max:f,minIdx:u.indexOf(m),maxIdx:u.indexOf(f),maxPrecipMm:g,hasCloud:l,hasLayeredCloud:c,hasWind:d}}function wn(e){let{points:t,n:r,hasLayeredCloud:a}=e;if(r<=0)return"";let o=r>1?(de-2*Tt)/(r-1)/2:de/2,n="";for(let i=0;i<r;i++){let l=Re(i,r),c=i===0?0:l-o,s=(i===r-1?de:l+o)-c,p=c/de*100,u=s/de*100,m;if(a){let f=(Number(t[i].cloudHigh)||0)/100*.06,g=(Number(t[i].cloudMid)||0)/100*.08,w=(Number(t[i].cloudLow)||0)/100*.1;m=Math.min(f+g+w,.15)}else m=(Number(t[i].cloudCover)||0)/100*.12;m<=0||(n+=`<div class="pw-meteogram-cloud-slot" style="left:${p.toFixed(2)}%;width:${u.toFixed(2)}%;opacity:${m.toFixed(3)}"></div>`)}return n?`<div class="pw-meteogram-cloud-bg" aria-hidden="true">${n}</div>`:""}function gn(e){let{points:t,n:r,maxPrecipMm:a}=e,o=nt-Ge,n=(de-2*Tt)/(r-1)*dn,i=a>0,l=i?Math.max(a,2):100,c="";for(let d=0;d<r;d++){let{precipMm:s,precip:p,precipType:u}=t[d],m=i?s:p;if(m<=0)continue;let f=m/l*o,g=Re(d,r)-n/2,w=n;g<0&&(w+=g,g=0),g+w>de&&(w=de-g);let v=nt-f,x=u==="snow"?"rgba(200,220,240,0.45)":"color-mix(in srgb, var(--pw-wind) 40%, transparent)";c+=`<rect x="${g.toFixed(1)}" y="${v.toFixed(1)}" width="${w.toFixed(1)}" height="${f.toFixed(1)}" fill="${x}" rx="1"/>`}return c}function bn(e){let{points:t,n:r,maxPrecipMm:a}=e,o=nt-Ge,n=a>0,i=n?Math.max(a,2):100,l="";for(let c=0;c<r;c++){let{precipMm:d,precip:s}=t[c],p=n?d:s;if(p<=0)continue;let u=Re(c,r),m=p/i*o,f=nt-m-2,g=n?d>=10?String(Math.round(d)):d.toFixed(1):`${Math.round(s)}%`;l+=`<text x="${u.toFixed(1)}" y="${f.toFixed(1)}" text-anchor="middle" fill="color-mix(in srgb, var(--pw-wind) 90%, transparent)" font-size="13" font-weight="600">${h(g)}</text>`}return l}function vn(e){let{points:t,n:r,min:a,max:o}=e,n=t.map(m=>parseFloat(m.temp.toFixed(1))),i=t.map((m,f)=>({x:Re(f,r),y:Ra(n[f],a,o)})),l=i.map((m,f)=>`${f===0?"M":"L"}${m.x.toFixed(1)},${m.y.toFixed(1)}`).join(" "),c=`${l} L${i[i.length-1].x.toFixed(1)},${Ge} L${i[0].x.toFixed(1)},${Ge} Z`,d=tt("pw-meteogram-grad"),s=Te(o),p=Te(a),u=`<defs><linearGradient id="${d}" x1="0" y1="0" x2="0" y2="1">`;return u+=`<stop offset="0%" stop-color="${k(s)}" stop-opacity="0.25"/>`,u+=`<stop offset="100%" stop-color="${k(p)}" stop-opacity="0.03"/>`,u+="</linearGradient></defs>",u+=`<path d="${c}" fill="url(#${d})"/>`,u+=`<path d="${l}" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`,u}function xn(e){let{points:t,n:r}=e,a="";for(let o=0;o<r;o+=un){let n=Re(o,r);a+=`<text x="${n.toFixed(1)}" y="${cn}" text-anchor="middle" fill="var(--pw-ink-cream-dim)" font-size="15" font-weight="600">${h(t[o].timeLabel)}</text>`}return a}function yn(e,t,r,a){let o=r/1.852,n=((a+180)%360-90+360)%360,i=Math.round(o/5)*5,l=Math.floor(i/50);i-=l*50;let c=Math.floor(i/10);i-=c*10;let d=Math.floor(i/5),s=18,p="var(--pw-ink-cream-muted)",u="",m=-s;for(let f=0;f<l;f++)u+=`<polygon points="0,${m.toFixed(1)} 9,${(m+3).toFixed(1)} 0,${(m+6).toFixed(1)}" fill="${p}"/>`,m+=6;for(let f=0;f<c;f++)u+=`<line x1="0" y1="${m.toFixed(1)}" x2="9" y2="${(m+4.5).toFixed(1)}" stroke="${p}" stroke-width="1.4" stroke-linecap="round"/>`,m+=4.5;for(let f=0;f<d;f++)u+=`<line x1="0" y1="${m.toFixed(1)}" x2="4.5" y2="${(m+2.25).toFixed(1)}" stroke="${p}" stroke-width="1.4" stroke-linecap="round"/>`;return`<g transform="translate(${e.toFixed(1)},${t}) rotate(${n})"><line x1="0" y1="0" x2="0" y2="${-s}" stroke="${p}" stroke-width="1.4" stroke-linecap="round"/>${u}</g>`}function _n(e){let{points:t,n:r,min:a,max:o,minIdx:n,maxIdx:i}=e,l=0,c=1,d=2,s="";for(let p=0;p<r;p++){let u=p===n||p===i,m=u?l:p%3,f=Re(p,r),g=Ra(t[p].temp,a,o);if(m===l){let w=t[p].temp,v=u?String(Math.round(w)):w.toFixed(1),x=p===n?"var(--pw-wind)":p===i?"var(--pw-vermilion)":"var(--pw-ink-cream)",y=u?17:15,$=g-Na;s+=`<text x="${f.toFixed(1)}" y="${$.toFixed(1)}" text-anchor="middle" fill="${x}" font-size="${y}" font-weight="600">${v}\xB0</text>`}else if(m===c){let w=_t(t[p].condition),v=g-Na;s+=`<text x="${f.toFixed(1)}" y="${v.toFixed(1)}" text-anchor="middle" font-size="20">${w}</text>`}else if(m===d){let w=Number(t[p].windSpeed),v=Number(t[p].windBearing);if(!Number.isFinite(w)||w<1||!Number.isFinite(v))continue;let x=g-pn;s+=yn(f,x,w,v)}}return s}function Da({hass:e,config:t,forecastData:r}){let a=r?.hourly||[];if(a.length<2)return null;let o=oe(e),n=Number(t.hours),i=t.horizon==="long"?"long":"short",l=Number.isFinite(n)&&n>0?Math.max(4,Math.min(48,n)):i==="long"?24:12,c=hn(a,l,o);if(!c)return null;let s=(t.show_cloud==="auto"||t.show_cloud===void 0?c.hasCloud:!!t.show_cloud)&&c.hasCloud?wn(c):"",p=re(c.points[0]?.condition||"sunny",!1),u=[];u.push(gn(c)),u.push(bn(c)),u.push(vn(c)),u.push(_n(c));let m=Re(0,c.n).toFixed(1);u.push(`<line x1="${m}" y1="0" x2="${m}" y2="${nt}" stroke="var(--pw-vermilion)" stroke-width="0.8" stroke-dasharray="2 3" opacity="0.7"/>`),u.push(xn(c));let f=c.n,g=`${f}-hour meteogram showing temperature, condition, wind, and precipitation`,w=f<=12?"next twelve hours":`next ${f===24?"twenty-four":f} hours`,v=tt("pw-meteogram-title"),x=`
        <div class="pw-meteogram-chart" aria-labelledby="${v}">
          <svg viewBox="0 0 ${de} ${ln}" style="width:100%; height:auto" role="img" aria-label="${h(g)}">
            <title id="${v}">${h(g)}</title>
            ${u.join(`
`)}
          </svg>
        </div>`;return Y({sectionClass:"pw-meteogram-v2",ariaLabel:g,brandVariant:p,kicker:w,preContent:s,body:x,proAction:"meteo-horizon",proInitial:l>=18,proAriaLabel:"Toggle 12-hour and 24-hour view",pro:t.pro!==!1})}var $n={overview:sa,forecast:la,wind:ma,air_quality:ha,astro:Ta,alerts:Ea,atmosphere:aa,meteogram:Da},er=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._lastWeatherState=null,this._atmosExpanded=!1,this._forecastData=null,this._forecastLastFetch=0,this._subscribedEntityId=null,this._atmosConfigEntryId=null,this._discovery=null,this._forecastFetching=!1,this._phaseTimer=null,this._countdownTimer=null,this._minuteTimer=null,this._warnedMissingEntity=null,this._warnedMissingAtmosCe=null,this._proState={}}setConfig(t){if(!t)throw new Error("Invalid configuration");this._cleanupTimers(),this._config=Dr(t),this._warnedMissingEntity=null,this._warnedMissingAtmosCe=null,this._discovery=null,this._proState={},this._hass&&this._fullRender()}_getDiscovery(){return this._discovery||(this._discovery=zr(this._hass.states,this._config)),this._discovery}_getCeFingerprint(t){let a=this._getDiscovery().atmosCe,o=[];for(let n of Object.keys(a)){let i=a[n],l=t.states[i];l&&o.push(`${n}=${l.state}`)}return o.join("|")}_warnIfAtmosCeMissing(t,r){let a=new Set(["atmosphere","air_quality","meteogram"]);if(!t.some(c=>a.has(c.type))||Object.keys(r.atmosCe).length>0)return;let n=this._config,i=n.atmos_source||jt(r.weatherEntityId||"");if(this._warnedMissingAtmosCe===i)return;this._warnedMissingAtmosCe=i;let l=n.atmos_source?`Set atmos_source matches no sensor.${i}_* entities \u2014 check the slug.`:`Derived slug "${i}" matches no sensor.${i}_* entities. If you renamed your weather entity after installing Atmos CE, set atmos_source manually in the card config.`;console.warn(`${fe} atmosphere / air_quality / meteogram sections configured but no Atmos CE sensors discovered. ${l}`)}_cleanupTimers(){this._phaseTimer&&(clearTimeout(this._phaseTimer),this._phaseTimer=null),this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null),this._minuteTimer&&(clearInterval(this._minuteTimer),this._minuteTimer=null)}set hass(t){if(this._hass=t,!this._config)return;let r=this._config.weather_entity,a=r||Object.keys(t.states).find(c=>c.startsWith("weather."))||"",o=t.states[a];if(!o){r&&this._warnedMissingEntity!==r&&(console.warn(`${fe} weather_entity "${r}" not found in hass.states. Check the entity_id in your card config (likely a typo, or the integration was removed).`),this._warnedMissingEntity=r);return}let n=this._getCeFingerprint(t),i=`${o.state}|${JSON.stringify(o.attributes)}|${n}`;i!==this._lastWeatherState&&(this._lastWeatherState=i,this._fullRender()),this._subscribeForecast(t,a)}async _subscribeForecast(t,r){let a=Date.now()-this._forecastLastFetch>=Wt;if(!(this._subscribedEntityId===r&&this._forecastData&&!a)&&!this._forecastFetching){this._forecastFetching=!0,this._subscribedEntityId=r;try{if(!t.callWS)return;let o=null;if(this._discovery?.atmosSource)try{if(!this._atmosConfigEntryId){let p=(await t.callWS({type:"config/entity_registry/list"}).catch(()=>[])).find(u=>u.platform==="atmos_ce");this._atmosConfigEntryId=p?.config_entry_id||null}if(this._atmosConfigEntryId){let u=(await t.callWS({type:"call_service",domain:"atmos_ce",service:"get_extended_forecast",service_data:{config_entry_id:this._atmosConfigEntryId,type:"hourly"},return_response:!0}).catch(()=>null))?.response;u?.forecast&&(o=u.forecast)}}catch(s){console.debug(`${fe} extended forecast fetch failed, falling back to standard hourly`,s)}let n=null;r&&t.states[r]&&(n=await t.callWS({type:"call_service",domain:"weather",service:"get_forecasts",target:{entity_id:r},service_data:{type:"daily"},return_response:!0}).catch(()=>null));let i=null;!o&&r&&t.states[r]&&(i=(await t.callWS({type:"call_service",domain:"weather",service:"get_forecasts",target:{entity_id:r},service_data:{type:"hourly"},return_response:!0}).catch(()=>null))?.response?.[r]?.forecast||[]);let d=n?.response?.[r];this._forecastData={hourly:o||i||[],daily:d?.forecast||[]},this._forecastLastFetch=Date.now(),this._fullRender()}catch(o){console.warn(`${fe} forecast fetch failed; retries throttled to ${Wt/1e3}s. Inspect the error below to diagnose. Common causes: weather entity offline, integration disabled, network failure.`,o),this._forecastLastFetch=Date.now()}finally{this._forecastFetching=!1}}}_unsubscribeForecasts(){this._subscribedEntityId=null,this._forecastLastFetch=0}disconnectedCallback(){this._unsubscribeForecasts(),this._cleanupTimers()}_fullRender(){if(!this._hass||!this._config||!this.shadowRoot)return;let t=this._getDiscovery(),r=this._hass.states[t.weatherEntityId];if(!r)return;let a=["<style>",Nr,"</style>",'<div class="pw-card">'],o=this._config.sections||[];this._warnIfAtmosCeMissing(o,t);for(let n=0;n<o.length;n++){let i=o[n],l=$n[i.type];if(l)try{let c=l({hass:this._hass,config:i,discovery:t,weatherEntity:r,forecastData:this._forecastData,sectionIndex:n,proPersisted:!!this._proState[n]});c&&a.push(c)}catch(c){console.warn(`${fe} section "${i?.type}" renderer threw \u2014 section will be skipped, other sections continue. Please share the error below when reporting.`,c)}}a.push("</div>"),this.shadowRoot.innerHTML=a.join(""),this._postRender(t),this._schedulePhaseTransition(),this._minuteTimer||(this._minuteTimer=setInterval(()=>{this._lastWeatherState=null,this._hass&&this._fullRender()},6e4)),this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null),this.shadowRoot.querySelector(".pw-astro-countdown")&&(this._countdownTimer=setInterval(()=>{let n=this.shadowRoot?.querySelector(".pw-astro-countdown");if(!n){clearInterval(this._countdownTimer),this._countdownTimer=null;return}let i=Number(n.dataset.target)-Date.now();if(i<=0){clearInterval(this._countdownTimer),this._countdownTimer=null,this._lastWeatherState=null,this._fullRender();return}let l=Math.floor(i/1e3),c=Math.floor(l/3600),d=Math.floor(l%3600/60),s=l%60;n.textContent=(c>0?c+"h "+d+"m":d+"m "+s+"s")+(n.dataset.suffix||"")},1e3))}_schedulePhaseTransition(){if(this._phaseTimer&&(clearTimeout(this._phaseTimer),this._phaseTimer=null),!this._hass||!this._config)return;let t=this._getDiscovery(),r=t.atmosCe,a=this._hass.states[t.sunEntityId||""];if(!a)return;let o=new Date,n=o.getTime(),i=[],l=a.attributes?.next_rising,c=a.attributes?.next_setting,{todaySunrise:d,todaySunset:s}=je(o,l,c),p=a.attributes?.next_rising?new Date(a.attributes.next_rising).getTime():NaN,u=a.attributes?.next_setting?new Date(a.attributes.next_setting).getTime():NaN;Number.isFinite(p)&&p>n&&i.push(p),Number.isFinite(u)&&u>n&&i.push(u);let m={golden_hour_morning_start:d,golden_hour_morning_end:d,blue_hour_morning_start:d,blue_hour_morning_end:d,golden_hour_evening_start:s,golden_hour_evening_end:s,blue_hour_evening_start:s,blue_hour_evening_end:s};for(let[w,v]of Object.entries(m)){if(!r[w])continue;let x=new Date(String(this._hass.states[r[w]]?.state||""));if(isNaN(x.getTime()))continue;let y=Z(x,v);if(!y)continue;let $=y.getTime();$>n&&i.push($);let A=$+864e5;A>n&&i.push(A)}if(i.length===0)return;let g=Math.min(...i)-n+1e3;this._phaseTimer=setTimeout(()=>{this._phaseTimer=null,this._lastWeatherState=null,this._hass&&this._fullRender()},g)}_postRender(t){if(!this.shadowRoot||!this._hass)return;let r=this.shadowRoot.querySelectorAll(".pw-fx[data-condition]");for(let s of r){let p=s.getAttribute("data-condition")||"",u=s.getAttribute("data-night")==="true",m=null;try{let g=s.getAttribute("data-cloud");g&&g!=='""'&&g!==""&&(m=JSON.parse(g))}catch{}let f=Xr(p,u,m);s.replaceChildren(f)}let a=this.shadowRoot.querySelectorAll(".pw-aqi[data-pm25]");for(let s of a){let p=Number(s.getAttribute("data-pm25"))||0,u=Number(s.getAttribute("data-pm10"))||0,m=s.querySelector(".pw-fx");if(m&&(p>0||u>0)){let f=document.createDocumentFragment();Gr(f,p,u),m.replaceChildren(f)}}let o=this.shadowRoot.querySelectorAll(".pw-fx[data-astro-stars]");for(let s of o){let p=s.getAttribute("data-astro-stars")==="true",u=s.getAttribute("data-astro-day")==="true",m=document.createDocumentFragment();p&&Xt(m),u&&(Q(m,3,.5),$t(m)),s.replaceChildren(m)}let n=this.shadowRoot.querySelectorAll(".pw-atmos-fx[data-atmos-score]");for(let s of n){let p=Number(s.getAttribute("data-atmos-score"))||0,u=s.getAttribute("data-atmos-color")||"#30d158",m=ra(p,u);s.replaceChildren(m)}let i=[...this.shadowRoot.querySelectorAll(".pw-section")],l=this.shadowRoot.querySelectorAll("button.pw-brand-mark-corner");for(let s of l)s.addEventListener("click",p=>{let u=p.currentTarget,m=u.closest(".pw-section");if(!m||!this._config)return;let f=i.indexOf(m);if(f<0)return;let g=m.dataset.proAction||"view-swap";if(g==="wind-mode"||g==="meteo-horizon"||g==="aqi-scale"){let v=(this._config.sections||[]).map((y,$)=>$===f?{...y}:y),x=v[f];if(!x)return;if(g==="wind-mode"&&x.type==="wind")x.speed_mode=x.speed_mode==="gust"?"speed":"gust";else if(g==="meteo-horizon"&&x.type==="meteogram"){let y=Number(x.hours),$=Number.isFinite(y)&&y>0?y>=18:x.horizon==="long";x.horizon=$?"short":"long","hours"in x&&delete x.hours}else g==="aqi-scale"&&x.type==="air_quality"&&(x.scale=x.scale==="us"?"eu":"us");this._config={...this._config,sections:v},this._fullRender();return}let w=m.dataset.pro==="true"?"false":"true";m.dataset.pro=w,u.setAttribute("aria-pressed",w),this._proState[f]=w==="true"});let c=this.shadowRoot.querySelectorAll(".pw-hourly-strip");for(let s of c){let p=!1,u=0,m=0;s.addEventListener("mousedown",f=>{p=!0,u=f.pageX-s.offsetLeft,m=s.scrollLeft,s.style.cursor="grabbing"}),s.addEventListener("mouseleave",()=>{p=!1,s.style.cursor=""}),s.addEventListener("mouseup",()=>{p=!1,s.style.cursor=""}),s.addEventListener("mousemove",f=>{if(!p)return;f.preventDefault();let g=f.pageX-s.offsetLeft;s.scrollLeft=m-(g-u)}),s.addEventListener("touchstart",f=>{f.stopPropagation()},{passive:!0}),s.addEventListener("touchmove",f=>{f.stopPropagation()},{passive:!0}),s.addEventListener("wheel",f=>{let g=f;Math.abs(g.deltaX)<Math.abs(g.deltaY)&&(f.preventDefault(),s.scrollLeft+=g.deltaY)},{passive:!1})}let d=this.shadowRoot.querySelector(".pw-atmos-column-wrap[data-has-detail]");if(d){let s=this.shadowRoot.querySelector(".pw-atmos-detail");s&&(this._atmosExpanded&&(s.style.maxHeight=`${s.scrollHeight}px`,d.setAttribute("aria-expanded","true")),d.addEventListener("click",()=>{this._atmosExpanded=!this._atmosExpanded,this._atmosExpanded?(s.style.maxHeight=`${s.scrollHeight}px`,d.setAttribute("aria-expanded","true")):(s.style.maxHeight="0",d.setAttribute("aria-expanded","false"))}))}}getCardSize(){let t=this._config?.sections?.length||1;return Math.max(3,t*3)}getGridOptions(){return Lr(6)}static async getConfigElement(){return await import("./pulse-weather-card-editor.js"),document.createElement(wr)}static getStubConfig(t){let r=Object.keys(t.states).find(a=>a.startsWith("weather."));return{type:`custom:${Be}`,weather_entity:r||"weather.home",sections:[{type:"overview"}]}}};customElements.get(Be)||(customElements.define(Be,er),console.info(`%c ${Be.toUpperCase()} %c v${hr} `,"background:#5ac8fa;color:#000;font-weight:bold","background:#333;color:#fff"));window.customCards=window.customCards||[];window.customCards.push({type:Be,name:"Pulse Weather Card",description:"Weather visualization with atmospheric effects, forecasts, wind rose, and more",preview:!0});export{er as PulseWeatherCard};
