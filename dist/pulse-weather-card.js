"use strict";(()=>{var ia=Object.defineProperty;var Vt=(t,o)=>()=>(t&&(o=t(t=0)),o);var ra=(t,o)=>{for(var e in o)ia(t,e,{get:o[e],enumerable:!0})};var ce,_t,Mt,zt,Nt,Rt,Dt,Ot,bt,At,Et,It,Lt,Pt,pe,Kt,de,ue,me,Qt,ge,fe,he,Zt,we,xe,be,Jt,ve,ye,Tt,_e,K=Vt(()=>{"use strict";ce="0.1.0",_t="pulse-weather-card",Mt="pulse-weather-card-editor",zt=["overview","forecast","wind","air_quality","astro","alerts","atmosphere"],Nt={calm:"#5ac8fa",moderate:"#30d158",strong:"#ff9f0a",gale:"#ff453a"},Rt=[{max:5,color:"#5ac8fa"},{max:12,color:"#30d158"},{max:18,color:"#ff9f0a"},{max:1/0,color:"#ff453a"}],Dt=[{max:11,tier:"calm"},{max:38,tier:"moderate"},{max:61,tier:"strong"},{max:1/0,tier:"gale"}],Ot=[{max:1,n:0,name:"Calm",desc:"Smoke rises vertically"},{max:5,n:1,name:"Light Air",desc:"Smoke drifts slowly"},{max:11,n:2,name:"Light Breeze",desc:"Leaves rustle"},{max:19,n:3,name:"Gentle Breeze",desc:"Leaves and twigs move"},{max:28,n:4,name:"Moderate Breeze",desc:"Small branches move"},{max:38,n:5,name:"Fresh Breeze",desc:"Small trees sway"},{max:49,n:6,name:"Strong Breeze",desc:"Large branches move"},{max:61,n:7,name:"Near Gale",desc:"Whole trees sway"},{max:74,n:8,name:"Gale",desc:"Twigs break off"},{max:88,n:9,name:"Strong Gale",desc:"Slight structural damage"},{max:102,n:10,name:"Storm",desc:"Trees uprooted"},{max:117,n:11,name:"Violent Storm",desc:"Widespread damage"},{max:1/0,n:12,name:"Hurricane",desc:"Devastating damage"}],bt=[{max:2,color:"#30d158",label:"Low"},{max:5,color:"#ffd60a",label:"Moderate"},{max:7,color:"#ff9f0a",label:"High"},{max:10,color:"#ff453a",label:"Very High"},{max:1/0,color:"#bf5af2",label:"Extreme"}],At=[{max:20,label:"Good",color:"#30d158",desc:"Air quality is satisfactory"},{max:40,label:"Fair",color:"#5ac8fa",desc:"Acceptable for most people"},{max:60,label:"Moderate",color:"#ff9f0a",desc:"Sensitive groups may be affected"},{max:80,label:"Poor",color:"#ff453a",desc:"Health effects possible for everyone"},{max:100,label:"Very Poor",color:"#8b0000",desc:"Serious health effects"},{max:1/0,label:"Extremely Poor",color:"#4a0020",desc:"Emergency conditions"}],Et=[{max:50,label:"Good",color:"#30d158",desc:"Air quality is satisfactory"},{max:100,label:"Moderate",color:"#ffd60a",desc:"Acceptable for most people"},{max:150,label:"Unhealthy for Sensitive Groups",color:"#ff9f0a",desc:"Sensitive groups may experience effects"},{max:200,label:"Unhealthy",color:"#ff453a",desc:"Everyone may experience effects"},{max:300,label:"Very Unhealthy",color:"#8b0000",desc:"Health alert for everyone"},{max:1/0,label:"Hazardous",color:"#4a0020",desc:"Emergency conditions"}],It=[{max:300,color:"#30d158",label:"Stable"},{max:1e3,color:"#ffd60a",label:"Marginal"},{max:2500,color:"#ff9f0a",label:"Moderate"},{max:1/0,color:"#ff453a",label:"High"}],Lt=[{min:2,color:"#30d158",label:"Stable"},{min:0,color:"#ffd60a",label:"Marginal"},{min:-2,color:"#ff9f0a",label:"Slightly Unstable"},{min:-1/0,color:"#ff453a",label:"Unstable"}],Pt=80,pe=35,Kt=.6,de=90,ue=60,me=40,Qt=8,ge=7,fe=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],he={rain:"mdi:weather-pouring",wind:"mdi:weather-windy",snow:"mdi:weather-snowy-heavy",ice:"mdi:snowflake-alert",fog:"mdi:weather-fog",thunderstorm:"mdi:weather-lightning",heat:"mdi:thermometer-alert",cold:"mdi:snowflake-thermometer",flood:"mdi:home-flood",tornado:"mdi:weather-tornado",fire:"mdi:fire-alert",coastal:"mdi:waves",avalanche:"mdi:image-filter-hdr",unknown:"mdi:alert"},Zt={1:"#FFFF00",2:"#FFA500",3:"#FF0000",4:"#8B0000"},we=[{key:"pm2_5",label:"PM2.5",unit:"\xB5g/m\xB3",maxEu:75},{key:"pm10",label:"PM10",unit:"\xB5g/m\xB3",maxEu:150},{key:"nitrogen_dioxide",label:"NO\u2082",unit:"\xB5g/m\xB3",maxEu:400},{key:"ozone",label:"O\u2083",unit:"\xB5g/m\xB3",maxEu:240},{key:"sulphur_dioxide",label:"SO\u2082",unit:"\xB5g/m\xB3",maxEu:500},{key:"carbon_monoxide",label:"CO",unit:"\xB5g/m\xB3",maxEu:2e4},{key:"carbon_dioxide",label:"CO\u2082",unit:"ppm",maxEu:5e3}],xe=["temperature","apparent_temperature","dew_point","humidity","pressure","surface_pressure","wind_speed","wind_direction","wind_gusts","precipitation","rain","showers","snowfall","cloud_cover","cloud_cover_low","cloud_cover_mid","cloud_cover_high","uv_index","uv_index_clear_sky","visibility","cape","lifted_index","freezing_level_height","soil_temperature","soil_moisture","wind_shear_0_6km","lapse_rate_700_500","lcl_height","stability_assessment","european_aqi","us_aqi","pm2_5","pm10","nitrogen_dioxide","ozone","sulphur_dioxide","carbon_monoxide","carbon_dioxide","golden_hour_morning_start","golden_hour_morning_end","golden_hour_evening_start","golden_hour_evening_end","blue_hour_morning","blue_hour_evening","moon_phase","moonrise","moonset","daylight_duration"],be=["active_alert","upcoming_alert","alert_count"],Jt="_weather",ve=3,ye={"clear-night":"\u{1F319}",cloudy:"\u2601\uFE0F",exceptional:"\u{1F321}\uFE0F",fog:"\u{1F32B}\uFE0F",hail:"\u{1F328}\uFE0F",lightning:"\u26A1","lightning-rainy":"\u26C8\uFE0F",partlycloudy:"\u26C5",pouring:"\u{1F327}\uFE0F",rainy:"\u{1F327}\uFE0F",snowy:"\u2744\uFE0F","snowy-rainy":"\u{1F328}\uFE0F",sunny:"\u2600\uFE0F",windy:"\u{1F4A8}","windy-variant":"\u{1F4A8}"},Tt=29.53,_e=["New Moon","Waxing Crescent","First Quarter","Waxing Gibbous","Full Moon","Waning Gibbous","Last Quarter","Waning Crescent"]});function n(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function f(t){return t==null||t===""?"":String(t).replace(/[;{}]/g,"").replace(/url\s*\(/gi,"").replace(/expression\s*\(/gi,"").replace(/-moz-binding\s*:/gi,"")}var Ht=Vt(()=>{"use strict"});var ea={};ra(ea,{PulseWeatherCardEditor:()=>Yt});var Yt,aa=Vt(()=>{"use strict";K();Ht();Yt=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null}setConfig(o){this._config={...o},this._render()}set hass(o){this._hass=o}_fireConfigChanged(){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_render(){if(!this.shadowRoot||!this._config)return;let e=(this._config.sections||[{type:"overview"}]).map((i,r)=>`
      <div class="editor-section-row" data-index="${r}">
        <select class="editor-select" data-index="${r}" data-field="type">
          ${zt.map(p=>`<option value="${n(p)}" ${p===i.type?"selected":""}>${n(p)}</option>`).join("")}
        </select>
        ${i.type==="atmosphere"?'<span class="editor-note">Requires Atmos CE sensors</span>':""}
        <button class="editor-btn editor-remove" data-index="${r}" title="Remove section">\u2715</button>
      </div>
    `).join("");this.shadowRoot.innerHTML=`
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
        <input class="editor-input" type="text" value="${n(String(this._config.weather_entity||""))}" data-field="weather_entity" placeholder="weather.home"/>
      </div>
      <div class="editor-field">
        <label class="editor-label">Atmos CE Source (optional)</label>
        <input class="editor-input" type="text" value="${n(String(this._config.atmos_source||""))}" data-field="atmos_source" placeholder="Auto-detect"/>
      </div>
      <div class="editor-field">
        <label class="editor-label">Sections</label>
        ${e}
        <button class="editor-btn editor-add">+ Add Section</button>
      </div>
    `,this.shadowRoot.querySelectorAll(".editor-input").forEach(i=>{i.addEventListener("change",r=>{if(!this._config)return;let p=r.target.dataset.field;p&&(this._config[p]=r.target.value||void 0,this._fireConfigChanged())})}),this.shadowRoot.querySelectorAll(".editor-select").forEach(i=>{i.addEventListener("change",r=>{if(!this._config)return;let p=Number(r.target.dataset.index),l=[...this._config.sections||[]];l[p]={...l[p],type:r.target.value},this._config.sections=l,this._fireConfigChanged(),this._render()})}),this.shadowRoot.querySelectorAll(".editor-remove").forEach(i=>{i.addEventListener("click",r=>{if(!this._config)return;let p=Number(r.target.dataset.index),l=[...this._config.sections||[]];l.splice(p,1),this._config.sections=l.length>0?l:[{type:"overview"}],this._fireConfigChanged(),this._render()})});let a=this.shadowRoot.querySelector(".editor-add");a&&a.addEventListener("click",()=>{if(!this._config)return;let i=[...this._config.sections||[]];i.push({type:"overview"}),this._config.sections=i,this._fireConfigChanged(),this._render()})}};customElements.get(Mt)||customElements.define(Mt,Yt)});K();var $e=`
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

  /* \u2500\u2500 Disabled \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
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
  --pulse-weight-light: 300;
  --pulse-weight-regular: 400;
  --pulse-weight-medium: 500;
  --pulse-weight-semibold: 600;

  /* \u2500\u2500 Border Radius \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-radius-card: var(--ha-card-border-radius, 12px);
  --pulse-radius-panel: 14px;
  --pulse-radius-row: 10px;
  --pulse-radius-element: 8px;
  --pulse-radius-small: 4px;
  --pulse-radius-pill: 6px;
  --pulse-radius-bar: 2px;

  /* \u2500\u2500 Spacing \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --pulse-space-card: 16px;
  --pulse-space-section: 12px;
  --pulse-space-element: 8px;
  --pulse-space-tight: 4px;
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

/* Section label \u2014 uppercase, small, secondary */
.pulse-section-label {
  font-size: var(--pulse-font-label);
  font-weight: var(--pulse-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--pulse-text-secondary);
  opacity: 0.7;
}

/* Glass panel \u2014 frosted overlay */
.pulse-glass {
  background: var(--pulse-glass-bg);
  backdrop-filter: blur(var(--pulse-glass-blur));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur));
  border: 1px solid var(--pulse-glass-border);
}

/* Stat value \u2014 light weight, tabular numbers */
.pulse-stat-value {
  font-weight: var(--pulse-weight-light);
  font-variant-numeric: tabular-nums;
}

/* Stat label \u2014 caption size, uppercase */
.pulse-stat-label {
  font-size: var(--pulse-font-caption);
  color: var(--pulse-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

/* Interactive base \u2014 pointer, tap-highlight, focus ring */
.pulse-interactive {
  cursor: pointer;
  position: relative;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
}

.pulse-interactive:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 2px;
  border-radius: var(--pulse-radius-small);
}

/* Unavailable / disabled state */
.pulse-unavailable {
  opacity: 0.5;
}

/* Hero value \u2014 ultra-thin weight for large numbers (Dark Sky DNA) */
.pulse-hero-value {
  font-weight: var(--pulse-weight-hero, 100);
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

/* Flat stats row \u2014 Dark Sky style, border-top separator */
.pulse-stats-row {
  display: flex;
  justify-content: space-between;
  padding-top: var(--pulse-space-section);
  border-top: 1px solid var(--pulse-border-subtle);
}

.pulse-stats-row .stat {
  flex: 1;
  text-align: center;
}

/* Ultra-muted label */
.pulse-muted-label {
  color: var(--pulse-text-secondary);
  opacity: 0.25;
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
  border-radius: 2px 2px 0 0;
  background: #5ac8fa;
}
`;var Se=`${$e}
/* \u2500\u2500 Design Tokens \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
:host {
  display: block;

  /* Weather-specific glass intensity */
  --pulse-glass-blur: 20px;

  /* Typography */
  --pw-hero-size: 72px;
  --pw-hero-weight: 100;
  --pw-label-size: 11px;
  --pw-stat-size: 16px;
  --pw-section-label-size: 11px;

  /* Tier colors */
  --pw-tier-calm: #5ac8fa;
  --pw-tier-moderate: #30d158;
  --pw-tier-strong: #ff9f0a;
  --pw-tier-gale: #ff453a;

  /* Transitions */
  --pw-bg-transition: 0.8s;
  --pw-color-transition: 0.4s;
}

/* \u2500\u2500 Card Shell \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-card {
  overflow: hidden;
  min-width: 0;
  border-radius: var(--ha-card-border-radius, 12px);
  background: var(--pulse-bg-card);
  color: var(--pulse-text-primary);
  font-family: var(--ha-card-font-family, -apple-system, BlinkMacSystemFont, 'SF Pro', system-ui, sans-serif);
  container-type: inline-size;
}

/* \u2500\u2500 Section Shared \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-section { position: relative; min-width: 0; }
.pw-section + .pw-section { border-top: 1px solid var(--pulse-border-subtle); }

.pw-section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px 0;
  position: relative;
  z-index: 2;
  margin-bottom: 10px;
}

.pw-section-title {
  font-size: var(--pw-section-label-size);
  font-weight: 600;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: var(--pulse-text-secondary);
  opacity: 0.7;
}

/* \u2500\u2500 Mode Tabs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-tabs {
  display: flex;
  gap: 2px;
  background: var(--pulse-bg-elevated);
  border-radius: 6px;
  padding: 2px;
}

.pw-tab {
  padding: 3px 8px;
  border-radius: 4px;
  border: none;
  background: transparent;
  color: var(--pulse-text-secondary);
  font-size: 10px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

.pw-tab:hover { color: var(--pulse-text-primary); opacity: 0.7; }
.pw-tab:focus-visible {
  outline: 2px solid var(--pulse-accent);
  outline-offset: 1px;
}
.pw-tab[aria-selected="true"] {
  background: var(--pulse-bg-selected);
  color: var(--pulse-text-primary);
}

/* \u2500\u2500 Glass Panel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-glass {
  background: var(--pulse-glass-bg);
  backdrop-filter: blur(var(--pulse-glass-blur));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur));
  border: 1px solid var(--pulse-glass-border);
  border-radius: 14px;
  padding: 14px 16px;
}

/* \u2500\u2500 Stats Grid \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
}

.pw-stat { text-align: center; padding: 6px 0; }
.pw-stat-value {
  font-size: var(--pw-stat-size);
  font-weight: 400;
  font-variant-numeric: tabular-nums;
}
.pw-stat-label {
  font-size: 9px;
  color: var(--pulse-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-top: 2px;
}

/* \u2500\u2500 Atmosphere Layer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-atmosphere {
  position: relative;
  overflow: hidden;
  transition: background var(--pw-bg-transition);
}

.pw-fx {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

/* \u2500\u2500 Hero Display \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-hero {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 24px 20px 20px;
}

.pw-hero-temp {
  font-size: var(--pw-hero-size);
  font-weight: var(--pw-hero-weight);
  line-height: 1;
  font-variant-numeric: tabular-nums;
  text-shadow: 0 2px 20px rgba(0,0,0,0.3);
}

.pw-hero-condition {
  font-size: 15px;
  font-weight: 400;
  color: var(--pulse-text-primary);
  opacity: 0.7;
  margin-top: 4px;
}

.pw-hero-feels {
  font-size: 12px;
  color: var(--pulse-text-secondary);
  margin-top: 2px;
}

/* \u2500\u2500 Temperature Arc \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-temp-arc {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 8px 20px 16px;
}

.pw-arc-label {
  font-size: 14px;
  font-variant-numeric: tabular-nums;
  opacity: 0.6;
}

.pw-arc-bar {
  width: 120px;
  height: 4px;
  border-radius: 2px;
  position: relative;
  background: linear-gradient(to right, #5ac8fa, #30d158, #ff9f0a, #ff453a);
  opacity: 0.8;
}

.pw-arc-marker {
  position: absolute;
  top: -4px;
  width: 12px;
  height: 12px;
  background: #fff;
  border-radius: 50%;
  border: 2px solid rgba(0,0,0,0.3);
  transform: translateX(-50%);
  box-shadow: 0 1px 6px rgba(0,0,0,0.4);
}

.pw-arc-ghost {
  position: absolute;
  top: -4px;
  width: 10px;
  height: 10px;
  background: rgba(255,255,255,0.3);
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.2);
  transform: translateX(-50%);
  opacity: 0.5;
}

/* \u2500\u2500 Bottom Cards \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Precipitation bar label */
.pw-precip-label {
  font-size: 10px;
  color: var(--pulse-text-secondary);
  opacity: 0.3;
  margin-bottom: 6px;
}

.pw-bottom-row { display: flex; gap: 8px; }

.pw-bottom-card {
  flex: 1;
  background: var(--pulse-bg-elevated);
  border-radius: 10px;
  padding: 10px 12px;
}

.pw-bottom-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.pw-bottom-label { font-size: 10px; color: var(--pulse-text-secondary); }
.pw-bottom-value { font-size: 13px; font-weight: 500; }

.pw-mini-bar {
  height: 3px;
  background: var(--pulse-bg-elevated);
  border-radius: 2px;
  overflow: hidden;
}

.pw-mini-fill { height: 100%; border-radius: 2px; }

/* \u2500\u2500 Forecast \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-forecast { padding: 0 0 16px; }

.pw-hourly-strip {
  display: flex;
  gap: 2px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 8px 0 12px;
  margin: 0 20px;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  cursor: grab;
}
.pw-hourly-strip::-webkit-scrollbar { display: none; }

.pw-hour-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 48px;
  padding: 8px 4px;
  border-radius: 10px;
  transition: background 0.2s;
}

.pw-hour-col:hover { background: var(--pulse-bg-elevated); }

.pw-hour-col.pw-current {
  background: rgba(90,200,250,0.08);
  border: 1px solid rgba(90,200,250,0.15);
}

.pw-hour-time { font-size: 10px; color: var(--pulse-text-secondary); margin-bottom: 6px; }
.pw-hour-icon { font-size: 20px; margin-bottom: 6px; }
.pw-hour-temp { font-size: 14px; font-weight: 300; font-variant-numeric: tabular-nums; }
.pw-hour-precip { font-size: 9px; color: #5ac8fa; margin-top: 4px; min-height: 12px; }

.pw-sparkline-wrap {
  padding: 0 20px;
  margin: 0 0 12px;
  height: 40px;
}

.pw-daily-rows { display: flex; flex-direction: column; gap: 4px; padding: 0 20px; }

.pw-daily-row {
  display: grid;
  grid-template-columns: 48px 24px 32px 1fr 32px 32px;
  align-items: center;
  gap: 6px;
  padding: 6px 0;
  font-size: 13px;
}

.pw-daily-day { font-weight: 400; }
.pw-daily-icon { font-size: 16px; text-align: center; }
.pw-daily-precip { font-size: 10px; color: #5ac8fa; text-align: right; }

.pw-daily-bar-wrap {
  height: 4px;
  background: var(--pulse-bg-elevated);
  border-radius: 2px;
  position: relative;
}

.pw-daily-bar {
  position: absolute;
  height: 100%;
  border-radius: 2px;
}

.pw-daily-low, .pw-daily-high {
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  text-align: right;
}
.pw-daily-low { color: var(--pulse-text-secondary); }

/* \u2500\u2500 Wind Rose \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-wind {
  position: relative;
  overflow: hidden;
}

.pw-wind-streaks {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

.pw-streak {
  position: absolute;
  height: 1px;
  border-radius: 1px;
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
  font-size: 10px;
  color: var(--pulse-text-secondary);
  margin-top: 2px;
}

.pw-wind-beaufort {
  font-size: 11px;
  font-weight: 500;
  margin-top: 4px;
}

.pw-wind-beaufort-desc {
  font-size: 9px;
  color: var(--pulse-text-secondary);
}

/* \u2500\u2500 AQI Gauge \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-aqi { padding: 0 0 16px; position: relative; overflow: hidden; }

.pw-aqi-gauge-unit {
  position: relative;
  z-index: 2;
  width: 220px;
  height: 140px;
  margin: 0 auto 12px;
}

.pw-aqi-gauge-center {
  position: absolute;
  bottom: 8px;
  left: 0;
  right: 0;
  text-align: center;
}

.pw-aqi-value {
  font-size: 52px;
  font-weight: 100;
  font-variant-numeric: tabular-nums;
  line-height: 1;
  transition: color 0.4s;
}

.pw-aqi-scale-label {
  font-size: 10px;
  color: var(--pulse-text-secondary);
  opacity: 0.85;
  margin-top: 1px;
}

.pw-aqi-category {
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  margin-top: 4px;
  padding: 0 20px;
  transition: color 0.4s;
}

.pw-aqi-desc {
  font-size: 12px;
  color: var(--pulse-text-secondary);
  text-align: center;
  margin-top: 2px;
  padding: 0 20px;
}

.pw-pollutant-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  margin-top: 12px;
  padding: 0 20px;
}

.pw-pollutant-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 6px 4px;
  background: var(--pulse-bg-elevated);
  border-radius: 8px;
}

.pw-pollutant-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}

.pw-pollutant-header {
  display: flex;
  align-items: center;
  gap: 4px;
}

.pw-pollutant-label { color: var(--pulse-text-secondary); font-size: 10px; }
.pw-pollutant-value { font-size: 13px; font-weight: 500; font-variant-numeric: tabular-nums; }

/* \u2500\u2500 Astro \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-astro {
  position: relative;
  overflow: hidden;
  padding: 0 0 16px;
}

.pw-sky-wash {
  position: absolute;
  inset: 0;
  transition: background var(--pw-bg-transition);
  z-index: 0;
}

.pw-astro-content { position: relative; z-index: 2; }

/* Stars layer above content in astro section */
.pw-astro > .pw-fx { z-index: 3; }

.pw-arc-wrap {
  display: flex;
  justify-content: center;
  padding: 20px 20px 8px;
  position: relative;
}

.pw-astro-info {
  text-align: center;
  padding: 8px 20px;
}

.pw-astro-theme-label {
  font-size: 14px;
  font-weight: 500;
}

.pw-astro-countdown {
  font-size: 11px;
  color: var(--pulse-text-secondary);
  margin-top: 2px;
}

.pw-astro-countdown-wrap {
  text-align: center;
  padding: 6px 20px 0;
}

.pw-astro-countdown-text {
  font-size: 13px;
  font-weight: 400;
}

.pw-astro-progress {
  margin-top: 6px;
}

.pw-astro-progress-bar {
  height: 3px;
  background: var(--pulse-bg-elevated);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 4px;
}

.pw-astro-progress-fill {
  height: 100%;
  border-radius: 2px;
  transition: width 0.6s;
}

.pw-astro-progress-label {
  font-size: 10px;
  color: var(--pulse-text-secondary);
  opacity: 0.85;
  text-align: center;
}

.pw-astro-stats {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 4px;
  margin: 8px 20px 0;
}

/* \u2500\u2500 Alerts \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-alerts {
  position: relative;
  overflow: hidden;
  padding: 0 0 16px;
}

.pw-severity-wash {
  position: absolute;
  inset: 0;
  z-index: 0;
  animation: pw-breathe 4s ease-in-out infinite;
}

.pw-alerts-content { position: relative; z-index: 2; }

.pw-radar-wrap {
  display: flex;
  justify-content: center;
  padding: 16px 20px;
}

.pw-alert-list { display: flex; flex-direction: column; gap: 8px; padding: 0 20px; }

.pw-alert-row {
  display: flex;
  gap: 10px;
  padding: 10px;
  background: var(--pulse-bg-elevated);
  border-radius: 10px;
  border-left: 3px solid;
}

.pw-alert-icon { font-size: 20px; flex-shrink: 0; }

.pw-alert-body { flex: 1; min-width: 0; }

.pw-alert-headline {
  font-size: 13px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
}

.pw-alert-badge {
  font-size: 9px;
  font-weight: 600;
  padding: 1px 5px;
  border-radius: 3px;
  text-transform: uppercase;
}

.pw-alert-desc {
  font-size: 11px;
  color: var(--pulse-text-secondary);
  margin-top: 3px;
  line-height: 1.4;
}

.pw-alert-locations {
  font-size: 10px;
  color: var(--pulse-text-secondary);
  opacity: 0.85;
  margin-top: 3px;
}

.pw-alert-time {
  font-size: 11px;
  color: var(--pulse-text-secondary);
  text-align: right;
  flex-shrink: 0;
  white-space: nowrap;
}

.pw-alert-progress {
  height: 2px;
  background: var(--pulse-bg-elevated);
  border-radius: 1px;
  margin-top: 6px;
  overflow: hidden;
}

.pw-alert-progress-fill { height: 100%; border-radius: 1px; }

.pw-all-clear {
  text-align: center;
  padding: 20px 0;
  font-size: 14px;
  font-weight: 500;
  color: #30d158;
}

/* \u2500\u2500 Atmosphere Column \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-atmos { padding: 0 0 16px; position: relative; overflow: hidden; }

.pw-atmos-tier-label {
  font-size: 10px;
  font-weight: 500;
}

.pw-atmos-tier-desc {
  font-size: 11px;
  font-weight: 300;
  color: var(--pulse-text-secondary);
  opacity: 0.7;
  text-align: center;
  padding: 0 20px;
  position: relative;
  z-index: 2;
}

.pw-atmos-confidence {
  font-size: 8px;
  color: var(--pulse-text-secondary);
  opacity: 0.4;
  text-align: center;
  margin-top: 4px;
  font-variant-numeric: tabular-nums;
  position: relative;
  z-index: 2;
}

.pw-atmos-column-wrap {
  display: flex;
  align-items: stretch;
  padding: 8px 20px 0;
  gap: 12px;
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
  font-size: 8px;
  color: var(--pulse-text-secondary);
  opacity: 0.3;
  font-variant-numeric: tabular-nums;
}

.pw-atmos-column {
  flex: 1;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  background: linear-gradient(to top, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.005) 100%);
  border: 1px solid rgba(255,255,255,0.03);
}

/* CAPE energy fill */
.pw-atmos-cape-fill {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 0 0 9px 9px;
  transition: height 0.8s ease;
}

/* FX container inside CAPE fill (for thermal particles) */
.pw-atmos-fx {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

/* Thermal particles */
.pw-thermal-particle {
  position: absolute;
  border-radius: 50%;
  opacity: 0;
  animation: pw-thermalRise var(--rise-dur, 4s) ease-out infinite;
}

@keyframes pw-thermalRise {
  0% { transform: translateY(0) scale(1); opacity: 0; }
  10% { opacity: var(--peak-op, 0.4); }
  80% { opacity: var(--peak-op, 0.4); transform: translateY(var(--rise-dist, -80px)) scale(0.5); }
  100% { opacity: 0; transform: translateY(var(--rise-dist, -100px)) scale(0.3); }
}

/* Column inner glow */
.pw-atmos-column-glow {
  position: absolute;
  inset: 0;
  border-radius: 9px;
  pointer-events: none;
  box-shadow: inset 0 0 20px var(--glow-color, transparent);
}

.pw-atmos-column-glow.pulsing {
  animation: pw-columnPulse var(--pulse-dur, 3s) ease-in-out infinite;
}

@keyframes pw-columnPulse {
  0%, 100% { box-shadow: inset 0 0 20px var(--glow-color, transparent); }
  50% { box-shadow: inset 0 0 40px var(--glow-color, transparent); }
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
  background: #5ac8fa;
  opacity: 0.4;
}

.pw-atmos-freeze-label {
  font-size: 8px;
  color: #5ac8fa;
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
  font-size: 8px;
  color: #a0a0a0;
  opacity: 0.6;
  padding: 0 6px;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}

.pw-atmos-ground-label {
  position: absolute;
  bottom: 4px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 7px;
  color: var(--pulse-text-secondary);
  opacity: 0.2;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Info panel */
.pw-atmos-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 90px;
  background: var(--pulse-bg-elevated);
  border-radius: 10px;
  padding: 12px 0;
}

.pw-atmos-metric { text-align: center; }

.pw-atmos-metric-value {
  font-size: 28px;
  font-weight: var(--pulse-weight-hero, 100);
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

.pw-atmos-metric-unit {
  font-size: 9px;
  color: var(--pulse-text-secondary);
  opacity: 0.4;
  margin-top: 2px;
}

.pw-atmos-metric-label {
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  color: var(--pulse-text-secondary);
  opacity: 0.4;
  margin-top: 2px;
}

/* \u2500\u2500 Severity Dot \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-severity-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  animation: pw-dotPulse 2s ease-in-out infinite;
}

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
.pw-smog-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.pw-haze-vignette {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.pw-dust-particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(180,160,120,0.3);
  animation: pw-dustFloat 8s ease-in-out infinite;
}

@keyframes pw-dustFloat {
  0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
  50% { transform: translateY(-20px) translateX(10px); opacity: 0.5; }
}

.pw-haze-blob {
  position: absolute;
  border-radius: 50%;
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
  border-radius: 50%;
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
  border-radius: 50%;
  background-image: conic-gradient(transparent 85%, var(--pw-radar-sweep, rgba(80,255,0,0.35)));
  animation: pw-sweepRotate var(--pw-radar-dur, 2.5s) linear infinite;
  will-change: transform;
}

.pw-radar::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
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
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  animation: pw-radarBlink var(--pw-radar-dur, 2.5s) ease-out infinite;
}

/* \u2500\u2500 Alert rows \u2014 Pulse DNA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.pw-alert-list { display: flex; flex-direction: column; padding: 0 20px; }

.pw-alert-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255,255,255,0.04);
}
.pw-alert-row:last-child { border-bottom: none; }
.pw-alert-row.upcoming { opacity: 0.5; }
.pw-alert-row.active .pw-alert-headline { color: var(--pw-alert-color); }
.pw-alert-row.active .pw-alert-time { color: var(--pw-alert-color); }

.pw-alert-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 5px;
}

.pw-alert-body { flex: 1; min-width: 0; }

.pw-alert-headline {
  font-size: 13px;
  font-weight: 500;
  line-height: 1.3;
}

.pw-alert-type {
  font-size: 9px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  opacity: 0.3;
  margin-top: 1px;
}

.pw-alert-desc {
  font-size: 11px;
  font-weight: 300;
  color: var(--pulse-text-secondary);
  opacity: 0.7;
  margin-top: 3px;
  line-height: 1.4;
}

.pw-alert-locations {
  font-size: 10px;
  color: var(--pulse-text-secondary);
  opacity: 0.5;
  margin-top: 3px;
}

.pw-alert-time {
  font-size: 10px;
  font-weight: 400;
  color: var(--pulse-text-secondary);
  opacity: 0.6;
  text-align: right;
  flex-shrink: 0;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}

.pw-all-clear {
  text-align: center;
  padding: 4px 0;
  font-size: 13px;
  font-weight: 400;
  color: #30d158;
}

@media (prefers-reduced-motion: reduce) {
  .pw-streak,
  .pw-wind-arrow,
  .pw-gust-cone,
  .pw-rose-container.pw-shaking,
  .pw-severity-wash,
  .pw-severity-dot,
  .pw-dust-particle,
  .pw-haze-blob,
  .pw-tension-wash.breathing,
  .pw-tension-vignette,
  .pw-radar::after,
  .pw-radar-blip,
  .pw-thermal-particle,
  .pw-atmos-column-glow.pulsing {
    animation: none !important;
  }
  .pw-atmos-column-glow.pulsing {
    box-shadow: inset 0 0 30px var(--glow-color, transparent) !important;
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
`;K();var ke=[{type:"overview"}],sa={overview:{},forecast:{mode:"both"},wind:{speed_mode:"speed"},air_quality:{scale:"eu"},astro:{},alerts:{},atmosphere:{}};function te(t){if(!t||typeof t!="object")return{type:"overview"};let o=zt.includes(t.type)?t.type:"overview";return{...sa[o]||{},...t,type:o}}function Me(t){if(!t||typeof t!="object")return{type:"custom:pulse-weather-card",sections:ke.map(te)};let o=t,e=Array.isArray(o.sections)&&o.sections.length>0?o.sections.map(te):ke.map(te);return{type:o.type||"custom:pulse-weather-card",weather_entity:o.weather_entity||void 0,atmos_source:o.atmos_source||void 0,sections:e}}Ht();K();function na(t){let o=t.replace(/^weather\./,"");return o.endsWith(Jt)&&(o=o.slice(0,-Jt.length)),o}function ee(t,o){let e=o.weather_entity||Object.keys(t).find(c=>c.startsWith("weather."))||"",a=o.atmos_source||na(e),i={};for(let c of xe){let d=`sensor.${a}_${c}`;d in t&&(i[c]=d)}let r=Object.keys(i).length>=ve,p=r?i:{},l=[];if(o.alert_entities&&o.alert_entities.length>0)for(let c of o.alert_entities)c in t&&l.push(c);else if(r){for(let m of be){let u=`sensor.${a}_${m}`,g=`sensor.${a}_warnings_${m}`;u in t?l.push(u):g in t&&l.push(g)}let c=`binary_sensor.${a}_alert_active`,d=`binary_sensor.${a}_warnings_alert_active`;c in t?l.push(c):d in t&&l.push(d)}let s="sun.sun"in t?"sun.sun":null;return{weatherEntityId:e,atmosCe:p,sunEntityId:s,atmosSource:r?a:null,alertEntityIds:l}}K();function B(t,o,e){let a=document.createElement(t);if(a.className=o,e)for(let[i,r]of Object.entries(e))a.style.setProperty(i,r);return a}function M(t,o){return Math.random()*(o-t)+t}function Ct(t,o=60,e=1,a=2){let i=Math.min(o,de);for(let r=0;r<i;r++){let p=B("div","pw-rain-drop"),l=M(15,30),s=M(.4,.8)/e;Object.assign(p.style,{left:`${M(0,100)}%`,top:`${M(-10,20)}%`,width:`${a}px`,height:`${l}px`,borderRadius:`0 0 ${a}px ${a}px`,background:"linear-gradient(to bottom, transparent, rgba(120,180,255,0.6))",animation:`pw-rainFall ${s}s linear ${M(0,2)}s infinite`,animationFillMode:"backwards",position:"absolute"}),t.appendChild(p)}}function ae(t,o=40){let e=Math.min(o,ue);for(let a=0;a<e;a++){let i=B("div","pw-snowflake"),r=M(2,5);Object.assign(i.style,{left:`${M(0,100)}%`,top:`${M(-5,10)}%`,width:`${r}px`,height:`${r}px`,borderRadius:"50%",background:"rgba(255,255,255,0.7)",animation:`pw-snowFall ${M(3,6)}s linear ${M(0,4)}s infinite`,animationFillMode:"backwards",position:"absolute"}),t.appendChild(i)}}function la(t){for(let o=0;o<4;o++){let e=B("div","pw-fog-layer");Object.assign(e.style,{position:"absolute",width:"200%",height:"40px",top:`${30+o*20}%`,left:"0",background:"linear-gradient(to right, transparent 0%, rgba(200,200,200,0.06) 20%, rgba(200,200,200,0.1) 50%, rgba(200,200,200,0.06) 80%, transparent 100%)",animation:`pw-fogDrift ${M(15,25)}s linear ${o*2}s infinite`,animationFillMode:"backwards"}),t.appendChild(e)}}function Wt(t){for(let o=0;o<8;o++){let e=B("div","pw-sun-ray");Object.assign(e.style,{position:"absolute",top:"-20px",left:`${10+o*12}%`,width:"2px",height:"120px",background:"linear-gradient(to bottom, rgba(255,220,100,0.08), transparent)",transformOrigin:"top center",transform:`rotate(${-15+o*4}deg)`,animation:`pw-rayPulse ${M(3,5)}s ease-in-out ${M(0,2)}s infinite`,animationFillMode:"backwards"}),t.appendChild(e)}}function G(t,o=4,e=1){let a=Math.min(o,Qt);for(let i=0;i<a;i++){let r=B("div","pw-cloud"),p=M(80,160),l=M(30,60),s=M(20,40)/e;Object.assign(r.style,{position:"absolute",width:`${p}px`,height:`${l}px`,top:`${M(5,50)}%`,left:"0",borderRadius:"50%",background:"radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, transparent 70%)",animation:`pw-cloudDrift ${s}s linear ${M(0,15)}s infinite`,animationFillMode:"backwards"}),t.appendChild(r)}}function oe(t){for(let o=0;o<me;o++){let e=B("div","pw-star"),a=M(1,3);Object.assign(e.style,{position:"absolute",left:`${M(0,100)}%`,top:`${M(0,70)}%`,width:`${a}px`,height:`${a}px`,borderRadius:"50%",background:"#fff",animation:`pw-twinkle ${M(2,5)}s ease-in-out ${M(0,3)}s infinite`,animationFillMode:"backwards"}),t.appendChild(e)}}function Ae(t,o){let e=[],a=t,i=0,r=Math.floor(M(4,8)),p=o/r;e.push(`${a},${i}`);for(let l=0;l<r;l++)a+=M(-15,15),i+=p,e.push(`${a},${i}`);return e.join(" ")}function Ee(t,o=2,e){let a=e||Array.from({length:o},(r,p)=>p*3),i=B("div","pw-lightning-flash");Object.assign(i.style,{position:"absolute",inset:"0",background:"rgba(255,255,255,0.15)",animation:`pw-flash 6s ease-in-out ${a[0]||0}s infinite`,animationFillMode:"backwards",pointerEvents:"none"}),t.appendChild(i);for(let r=0;r<o;r++){let p="http://www.w3.org/2000/svg",l=document.createElementNS(p,"svg");l.setAttribute("class","pw-lightning-bolt"),l.setAttribute("width","60"),l.setAttribute("height","200"),l.setAttribute("viewBox","0 0 60 200"),l.style.position="absolute",l.style.top="0",l.style.left=`${M(15,75)}%`,l.style.pointerEvents="none",l.style.zIndex="2",l.style.animation=`pw-boltStrike 6s ease-in-out ${a[r]||0}s infinite`,l.style.animationFillMode="backwards";let s=document.createElementNS(p,"polyline");s.setAttribute("points",Ae(30,180)),s.setAttribute("fill","none"),s.setAttribute("stroke","rgba(200,220,255,0.4)"),s.setAttribute("stroke-width","6"),s.setAttribute("stroke-linecap","round"),s.setAttribute("stroke-linejoin","round"),l.appendChild(s);let c=document.createElementNS(p,"polyline");c.setAttribute("points",Ae(30,180)),c.setAttribute("fill","none"),c.setAttribute("stroke","#fff"),c.setAttribute("stroke-width","2"),c.setAttribute("stroke-linecap","round"),c.setAttribute("stroke-linejoin","round"),l.appendChild(c),t.appendChild(l)}}function ca(t){let o=B("div","pw-heat-shimmer");Object.assign(o.style,{position:"absolute",inset:"0",pointerEvents:"none",background:"linear-gradient(0deg, transparent 0%, rgba(255,200,100,0.03) 30%, transparent 50%, rgba(255,180,80,0.02) 70%, transparent 100%)",backgroundSize:"100% 200%",animation:"pw-shimmer 3s ease-in-out infinite"}),t.appendChild(o);let e=B("div","pw-heat-ripple");Object.assign(e.style,{position:"absolute",bottom:"0",left:"0",right:"0",height:"60px",pointerEvents:"none",background:"repeating-linear-gradient(0deg, transparent, rgba(255,200,100,0.02) 2px, transparent 4px)",animation:"pw-rippleWave 2s ease-in-out infinite"}),t.appendChild(e)}function Te(t,o,e){let a=Math.min(1,(o/75+e/150)/2);if(a<.05)return;let i=B("div","pw-smog-overlay");i.style.background=`rgba(120,110,80,${.05+a*.15})`,t.appendChild(i);let r=B("div","pw-haze-vignette");r.style.background=`radial-gradient(ellipse at center, transparent 40%, rgba(80,70,50,${a*.3}) 100%)`,t.appendChild(r);let p=Math.floor(a*20);for(let s=0;s<p;s++){let c=B("div","pw-dust-particle"),d=M(1,3+a*3);Object.assign(c.style,{left:`${M(0,100)}%`,top:`${M(10,90)}%`,width:`${d}px`,height:`${d}px`,animationDelay:`${M(0,8)}s`,animationFillMode:"backwards"}),t.appendChild(c)}let l=Math.floor(a*5);for(let s=0;s<l;s++){let c=B("div","pw-haze-blob"),d=M(60,120);Object.assign(c.style,{left:`${M(-10,80)}%`,top:`${M(10,70)}%`,width:`${d}px`,height:`${d*.6}px`,animationDelay:`${M(0,12)}s`,animationFillMode:"backwards"}),t.appendChild(c)}}function Ce(t,o,e){let a=document.createDocumentFragment();try{o&&oe(a);let i=e?Math.round(e.total/100*Qt):0;switch(t){case"sunny":o||Wt(a),e&&i>0&&G(a,i);break;case"clear-night":e&&i>0&&G(a,i);break;case"partlycloudy":o||Wt(a),G(a,e?i:3);break;case"cloudy":G(a,e?Math.max(i,4):6);break;case"rainy":Ct(a,40,1,2),G(a,e?Math.max(i,3):4);break;case"pouring":Ct(a,80,1.5,3),G(a,e?Math.max(i,5):6);break;case"snowy":ae(a,40),G(a,e?Math.max(i,3):4);break;case"snowy-rainy":ae(a,20),Ct(a,20,.8,1),G(a,e?Math.max(i,3):4);break;case"hail":Ct(a,30,1.2,3),ae(a,15),G(a,e?Math.max(i,4):5);break;case"lightning":Ee(a,2,[0,3]),G(a,e?Math.max(i,5):6);break;case"lightning-rainy":Ee(a,3,[0,2,4]),Ct(a,60,1.3,2),G(a,e?Math.max(i,5):6);break;case"fog":la(a);break;case"windy":case"windy-variant":G(a,e?i:3,1.5);break;case"exceptional":ca(a);break;default:e&&i>0&&G(a,i);break}}catch{}return a}K();Ht();function tt(t){let o=Number(t);for(let e of Rt)if(o<=e.max)return e.color;return Rt[Rt.length-1].color}function Fe(t){let o=Number(t);for(let e of Dt)if(o<=e.max)return e.tier;return Dt[Dt.length-1].tier}function ze(t){let o=Number(t);for(let e of Ot)if(o<=e.max)return e;return Ot[Ot.length-1]}function Ne(t){let o=(Number(t)%360+360)%360,e=Math.round(o/22.5)%16;return fe[e]}function Re(t,o,e){if(e)return e;let a=Number(t),i=a<=100?At:Et;for(let r of i)if(a<=r.max)return r.color;return i[i.length-1].color}function ie(t){let o=Number(t);for(let e of bt)if(o<=e.max)return e.color;return bt[bt.length-1].color}function De(t){let o=Number(t);for(let e of bt)if(o<=e.max)return e.label;return bt[bt.length-1].label}function Oe(t){let o=Number(t);for(let e of It)if(o<=e.max)return e.color;return It[It.length-1].color}function et(t,o,e){let a=o?Object.entries(o).map(([i,r])=>` ${i}="${r}"`).join(""):"";return e!=null?`<${t}${a}>${e}</${t}>`:`<${t}${a}/>`}function re(t){return ye[t]||"\u{1F324}\uFE0F"}function q(t,o,e){return e===o?0:Math.max(0,Math.min(1,(t-o)/(e-o)))}function X(t,o,e="ellipse"){let a=Math.max(0,Math.min(1,o)),i=Math.round(3+a*50),r=Math.round(2+a*25),p=Math.round(50+a*30),l=s=>s.toString(16).padStart(2,"0");return`radial-gradient(${e} at 50% 30%, ${t}${l(i)} 0%, ${t}${l(r)} ${p}%, transparent 90%)`}function gt(t,o=6,e=1.2){let a=Math.max(0,Math.min(1,t));return o-a*(o-e)}function vt(t,o){let e=Math.max(0,Math.min(1,o)),a=Math.round(4+e*20),i=Math.round(e*8),p=Math.round((.15+e*.55)*255).toString(16).padStart(2,"0");return`0 0 ${a}px ${i}px ${t}${p}`}function Ut(t,o="0,0,0"){let e=Math.max(0,Math.min(1,t));if(e<.1)return"";let a=Math.round(60-e*30),i=(e*.5).toFixed(2);return`radial-gradient(ellipse at center, transparent ${a}%, rgba(${o},${i}) 100%)`}function Ie(t,o=8,e=2){let a=Math.max(0,Math.min(1,t));return o-a*(o-e)}var pa={sunny:"linear-gradient(180deg, #1a4a7a 0%, #2a6aaa 40%, transparent 100%)","clear-night":"linear-gradient(180deg, #050510 0%, #0a0a1a 50%, transparent 100%)",partlycloudy:"linear-gradient(180deg, #1a2a4a 0%, #2c4a6e 50%, transparent 100%)",cloudy:"linear-gradient(180deg, #2a2a3a 0%, #3a3a4a 50%, transparent 100%)",rainy:"linear-gradient(180deg, #1a2a3a 0%, #2a3a4a 50%, transparent 100%)",pouring:"linear-gradient(180deg, #0a1a2a 0%, #1a2a3a 50%, transparent 100%)",snowy:"linear-gradient(180deg, #2a3040 0%, #3a4050 50%, transparent 100%)","snowy-rainy":"linear-gradient(180deg, #1a2a3a 0%, #2a3a48 50%, transparent 100%)",hail:"linear-gradient(180deg, #1a2a3a 0%, #2a3a48 50%, transparent 100%)",lightning:"linear-gradient(180deg, #0a0a1a 0%, #1a1a2a 50%, transparent 100%)","lightning-rainy":"linear-gradient(180deg, #0a0a1a 0%, #1a1a2a 50%, transparent 100%)",fog:"linear-gradient(180deg, #2a2a2e 0%, #3a3a3e 50%, transparent 100%)",windy:"linear-gradient(180deg, #1a2a4a 0%, #2c4a6e 50%, transparent 100%)","windy-variant":"linear-gradient(180deg, #1a2a4a 0%, #2c4a6e 50%, transparent 100%)",exceptional:"linear-gradient(180deg, #4a2a1a 0%, #6a3a1a 40%, transparent 100%)"},da="linear-gradient(180deg, #1a2a3a 0%, #2a3a4a 50%, transparent 100%)";function Le({hass:t,config:o,discovery:e,weatherEntity:a,forecastData:i}){let r=a.attributes,p=e.atmosCe,l=a.state||"sunny",s=l==="clear-night"||t.states["sun.sun"]?.state==="below_horizon";function c(V,wt){if(p[V]){let xt=Number(t.states[p[V]]?.state);if(!isNaN(xt))return xt}return Number(r[wt]??0)||0}let d=c("temperature","temperature"),m=c("apparent_temperature","apparent_temperature")||d,u=c("humidity","humidity"),g=c("wind_speed","wind_speed"),x=c("wind_direction","wind_bearing"),b=c("dew_point","dew_point"),A=c("visibility","visibility"),y=c("pressure","pressure");function C(V,wt){return p[V]&&t.states[p[V]]?.attributes?.unit_of_measurement||wt}let T=C("temperature","\xB0C"),$=C("visibility","km"),R=C("pressure","hPa"),E=C("dew_point","\xB0C"),F=r.forecast,h=Number(F?.[0]?.templow??d-5),S=Number(F?.[0]?.temperature??d+5),w=e.atmosCe.uv_index,_=w?Number(t.states[w]?.state)||0:Number(r.uv_index??0),z=e.atmosCe.uv_index_clear_sky,I=z?Number(t.states[z]?.state):null,D=null;e.atmosCe.cloud_cover&&(D={total:Number(t.states[e.atmosCe.cloud_cover]?.state)||0,low:Number(t.states[e.atmosCe.cloud_cover_low]?.state)||0,mid:Number(t.states[e.atmosCe.cloud_cover_mid]?.state)||0,high:Number(t.states[e.atmosCe.cloud_cover_high]?.state)||0});let U=f(pa[l]||da),Y=Math.max(S-h,1),P=Math.max(0,Math.min(100,(d-h)/Y*100)),Q=Math.min(100,_/11*100),N=I!==null?Math.min(100,I/11*100):null,k=Math.max(0,Math.min(100,(y-950)/100*100)),j=["N","NE","E","SE","S","SW","W","NW"][Math.round(x/45)%8]||"",at=`data-condition="${n(l)}" data-night="${s}" data-cloud='${n(JSON.stringify(D||""))}'`,st=q(d,20,42),ot=q(d,15,-10),it=Math.max(st,ot),Z=tt(d),J=it>.05?`text-shadow: 0 2px 20px rgba(0,0,0,0.3), ${vt(Z,it)}`:"text-shadow: 0 2px 20px rgba(0,0,0,0.3)",rt=Ut(it),nt=rt?`<div class="pw-tension-vignette" style="background: ${f(rt)}"></div>`:"",St="",Ft=i?.hourly||[];if(Ft.length>0){let V=Ft.slice(0,12);V.some(xt=>Number(xt.precipitation_probability)>0)&&(St=`
      <div style="position: relative; z-index: 2; margin: 16px 20px 0;">
        <div class="pw-precip-label">Precipitation \u2014 next hours</div>
        <div class="pulse-precip-bar" role="img" aria-label="Precipitation probability">${V.map(kt=>`<div class="pulse-precip-slot"><div class="pulse-precip-fill" style="height: ${Math.min(100,Math.max(0,Number(kt.precipitation_probability)||0))}%"></div></div>`).join("")}</div>
      </div>`)}return`
    <div class="pw-section pw-atmosphere" style="background: ${U}; min-height: 280px;">
      ${nt}
      <div class="pw-fx" ${at} role="img" aria-label="${n(l)} weather effects"></div>
      <div class="pw-section-header">
        <span class="pw-section-title">Weather</span>
      </div>
      <div class="pw-hero">
        <div class="pw-hero-temp" style="color: ${f(tt(d))}; ${J}">${n(d.toFixed(1))}${n(T)}</div>
        <div class="pw-hero-condition">${n(l.replace(/-/g," ").replace(/\b\w/g,V=>V.toUpperCase()))}</div>
        <div class="pw-hero-feels">Feels like ${n(m.toFixed(1))}${n(T)}</div>
      </div>
      <div class="pw-temp-arc">
        <span class="pw-arc-label">${n(Math.round(h))}${n(T)}</span>
        <div class="pw-arc-bar" role="img" aria-label="Temperature range ${Math.round(h)}${n(T)} to ${Math.round(S)}${n(T)}">
          <div class="pw-arc-marker" style="left: ${Number(P)}%"></div>
        </div>
        <span class="pw-arc-label">${n(Math.round(S))}${n(T)}</span>
      </div>
      <div class="pulse-stats-row" style="margin: 0 20px; position: relative; z-index: 2;" role="img" aria-label="Weather statistics">
        <div class="stat">
          <div class="pw-stat-value">${n(Math.round(u))}%</div>
          <div class="pw-stat-label">Humid</div>
        </div>
        <div class="stat">
          <div class="pw-stat-value">${n(Math.round(g))} ${n(j)}</div>
          <div class="pw-stat-label">Wind</div>
        </div>
        <div class="stat">
          <div class="pw-stat-value">${n(b.toFixed(1))}${n(E)}</div>
          <div class="pw-stat-label">Dew</div>
        </div>
        <div class="stat">
          <div class="pw-stat-value">${n(Math.round(A))} ${n($)}</div>
          <div class="pw-stat-label">Vis</div>
        </div>
      </div>
      ${St}
      <div class="pw-bottom-row" style="position: relative; z-index: 2; padding: 12px 20px 16px;">
        <div class="pw-bottom-card">
          <div class="pw-bottom-header">
            <span class="pw-bottom-label">UV Index</span>
            <span class="pw-bottom-value" style="color: ${f(ie(_))}">${n(Math.round(_))} ${n(De(_))}</span>
          </div>
          <div class="pw-mini-bar" role="img" aria-label="UV index ${Math.round(_)}">
            <div class="pw-mini-fill" style="width: ${Number(Q)}%; background: ${f(ie(_))}"></div>
          </div>
          ${N!==null&&I!==null?`<div class="pw-arc-ghost" style="left: ${Number(N)}%; position: relative; top: -8px;" title="Clear-sky UV: ${n(String(Math.round(I)))}"></div>`:""}
        </div>
        <div class="pw-bottom-card">
          <div class="pw-bottom-header">
            <span class="pw-bottom-label">Pressure</span>
            <span class="pw-bottom-value">${n(Math.round(y))} ${n(R)}</span>
          </div>
          <div class="pw-mini-bar" role="img" aria-label="Pressure ${Math.round(y)} ${n(R)}">
            <div class="pw-mini-fill" style="width: ${Number(k)}%; background: #5ac8fa"></div>
          </div>
        </div>
      </div>
    </div>`}function ua(t,o){if(o)return"Now";try{return new Date(t).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return""}}function ma(t,o){if(o===0)return"Today";try{return new Date(t).toLocaleDateString([],{weekday:"short"})}catch{return""}}function ga(t,o,e){if(!t||t.length<2)return{linePath:"",areaPath:"",min:0,max:0};let a=t.map(m=>Number(m.temperature)||0),i=Math.min(...a),r=Math.max(...a),p=r-i||1,l=4,c=a.map((m,u)=>{let g=u/(a.length-1)*o,x=l+(r-m)/p*(e-l*2);return{x:g,y:x}}).map((m,u)=>`${u===0?"M":"L"}${m.x.toFixed(1)},${m.y.toFixed(1)}`).join(" "),d=`${c} L${o},${e} L0,${e} Z`;return{linePath:c,areaPath:d,min:i,max:r}}function Pe({hass:t,config:o,discovery:e,forecastData:a}){let i=o.mode||"both",r=a?.hourly||[],p=a?.daily||[];if(r.length===0&&p.length===0)return null;let l=e.atmosCe,c=(l.temperature?t.states[l.temperature]:null)?.attributes?.unit_of_measurement||"\xB0C",d=i==="both"||i==="hourly",m=i==="both"||i==="daily",u=["both","hourly","daily"].map(b=>`<button class="pw-tab" role="tab" aria-selected="${b===i}" tabindex="${b===i?"0":"-1"}" data-mode="${n(b)}">${n(b.charAt(0).toUpperCase()+b.slice(1))}</button>`).join(""),g="";if(d&&r.length>0){let b=Date.now(),A=r.filter(E=>{let F=new Date(String(E.datetime||""));return!isNaN(F.getTime())&&F.getTime()>=b-36e5}),y=A.slice(0,24).map((E,F)=>{let h=Number(E.temperature)||0,S=Number(E.precipitation_probability)||0,w=q(S,0,100),_=w>.1?` style="background: rgba(90,200,250,${(w*.12).toFixed(3)})"`:"";return`
        <div class="pw-hour-col ${F===0?"pw-current":""}"${_}>
          <div class="pw-hour-time">${n(ua(String(E.datetime||""),F===0))}</div>
          <div class="pw-hour-icon">${re(String(E.condition||""))}</div>
          <div class="pw-hour-temp" style="color: ${f(tt(h))}">${n(Math.round(h))}${n(c)}</div>
          ${S>0?`<div class="pw-hour-precip">${n(Math.round(S))}%</div>`:""}
        </div>`}).join(""),C=300,T=40,$=ga(A.slice(0,24),C,T),R=$.linePath?`
      <div class="pw-sparkline-wrap">
        <svg width="100%" height="${T}" viewBox="0 0 ${C} ${T}" preserveAspectRatio="none" role="img" aria-label="Temperature trend">
          <title>Temperature sparkline</title>
          <defs>
            <linearGradient id="pw-spark-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="${f(tt($.max))}" stop-opacity="0.3"/>
              <stop offset="100%" stop-color="${f(tt($.min))}" stop-opacity="0.05"/>
            </linearGradient>
          </defs>
          <path d="${n($.areaPath)}" fill="url(#pw-spark-grad)"/>
          <path d="${n($.linePath)}" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
        </svg>
      </div>`:"";g=`
      <div class="pw-hourly-strip">${y}</div>
      ${R}`}let x="";if(m&&p.length>0){let b=p.map($=>[Number($.temperature)||0,Number($.templow)||0]).flat(),A=Math.min(...b),y=Math.max(...b),C=y-A||1;x=`<div class="pw-daily-rows">${p.slice(0,7).map(($,R)=>{let E=Number($.temperature)||0,F=Number($.templow)||0,h=Number($.precipitation_probability)||0,S=(F-A)/C*100,w=(E-F)/C*100,_=q(h,0,100),z=_>.1?` style="background: rgba(90,200,250,${(_*.08).toFixed(3)}); border-radius: 4px"`:"",I=E===y,D=F===A,U=I?`; text-shadow: ${vt(f(tt(E)),.6)}`:"",Y=D?`; text-shadow: ${vt(f(tt(F)),.6)}`:"";return`
        <div class="pw-daily-row"${z}>
          <span class="pw-daily-day">${n(ma(String($.datetime||""),R))}</span>
          <span class="pw-daily-icon">${re(String($.condition||""))}</span>
          <span class="pw-daily-precip">${h>0?`${n(Math.round(h))}%`:""}</span>
          <div class="pw-daily-bar-wrap" role="img" aria-label="Temperature range ${Math.round(F)}${n(c)} to ${Math.round(E)}${n(c)}">
            <div class="pw-daily-bar" style="left: ${Number(S)}%; width: ${Number(w)}%; background: linear-gradient(to right, ${f(tt(F))}, ${f(tt(E))})"></div>
          </div>
          <span class="pw-daily-low" style="color: var(--pulse-text-secondary)${Y}">${n(Math.round(F))}${n(c)}</span>
          <span class="pw-daily-high" style="${U?U.slice(2):""}">${n(Math.round(E))}${n(c)}</span>
        </div>`}).join("")}</div>`}return`
    <div class="pw-section pw-forecast" style="background: radial-gradient(ellipse at 50% 20%, rgba(90,200,250,0.06) 0%, transparent 70%)">
      <div class="pw-section-header">
        <span class="pw-section-title">Forecast</span>
        <div class="pw-tabs" role="tablist">${u}</div>
      </div>
      ${g}
      ${x}
    </div>`}K();var $t=240,ct=$t/2,pt=$t/2,qt=90,He=.12,jt=6,Gt=.5,We=.25,fa=.3,ha=6,Ue=.7,wa=.2,xa=4,ba=3.3,va=15,ya=35,_a=.08,$a=.2,Sa=[{l:"N",a:0},{l:"NE",a:45},{l:"E",a:90},{l:"SE",a:135},{l:"S",a:180},{l:"SW",a:225},{l:"W",a:270},{l:"NW",a:315}];function je(t){return(t-90)*Math.PI/180}function ka(t){let o=t*Math.PI/180;return{x:Math.sin(o),y:-Math.cos(o)}}function ft(t,o){return{x:ct+o*Math.cos(t),y:pt+o*Math.sin(t)}}function Ma(t,o,e,a){let i=Math.min(t/Pt,1)*qt,r=ft(o-We,i),p=ft(o+We,i),l=e>fa?"pw-gust-sweep":"",s=Math.max(.6,2.5-e*2).toFixed(2),c=(.15+e*.3).toFixed(2),d=`transform-origin:${ct}px ${pt}px;--gust-dur:${s}s;--gust-peak:${c}`;return et("path",{class:l,d:`M${ct},${pt} L${r.x.toFixed(1)},${r.y.toFixed(1)} L${p.x.toFixed(1)},${p.y.toFixed(1)} Z`,fill:a,opacity:.15,style:d})}function Aa(t,o,e,a){let i=Math.min(t/Pt,1)*qt,r=ft(o,i),p=ft(o-He,i*.7),l=ft(o+He,i*.7),s={x:r.x-jt*Math.cos(o-Gt),y:r.y-jt*Math.sin(o-Gt)},c={x:r.x-jt*Math.cos(o+Gt),y:r.y-jt*Math.sin(o+Gt)},d=e*ha,m=Math.max(.4,4-e*3.6),u=d>wa?`animation:pw-arrowSway ${m.toFixed(2)}s ease-in-out infinite;--sway-fwd:${(d*Ue).toFixed(2)}deg;--sway-back:${(-d*(1-Ue)).toFixed(2)}deg`:"",g=`transform-origin:${ct}px ${pt}px;filter:drop-shadow(0 0 6px ${a}60);${u}`,x=et("path",{d:`M${ct},${pt} L${p.x.toFixed(1)},${p.y.toFixed(1)} L${r.x.toFixed(1)},${r.y.toFixed(1)} L${l.x.toFixed(1)},${l.y.toFixed(1)} Z`,fill:a,opacity:.5}),b=et("line",{x1:ct,y1:pt,x2:r.x.toFixed(1),y2:r.y.toFixed(1),stroke:a,"stroke-width":2.5,"stroke-linecap":"round"}),A=et("path",{d:`M${r.x.toFixed(1)},${r.y.toFixed(1)} L${s.x.toFixed(1)},${s.y.toFixed(1)} L${c.x.toFixed(1)},${c.y.toFixed(1)} Z`,fill:a});return et("g",{style:g},x+b+A)}function Ge({hass:t,config:o,discovery:e,weatherEntity:a}){let i=a.attributes,r=e.atmosCe,p=o.speed_mode||"speed";function l(k,H){if(r[k]){let j=Number(t.states[r[k]]?.state);if(!isNaN(j))return j}return Number(i[H]??0)||0}let s=l("wind_speed","wind_speed"),c=l("wind_gusts","wind_gust_speed")||l("wind_gusts","wind_gusts")||s,d=l("wind_direction","wind_bearing"),u=(r.wind_speed?t.states[r.wind_speed]:null)?.attributes?.unit_of_measurement||i.wind_speed_unit||"km/h",g=p==="gust"?c:s,x=Math.min(s/Pt,1),b=ze(g),A=Fe(g),y=Nt[A]||Nt.calm,C=Ne(d),T=je(d),$=ka(d),R=Math.round(x*pe),E=xa-x*ba,F=_a+x*$a,h=va+x*ya,S=-$.y,w=$.x,_=[];for(let k=0;k<R;k++){let H=(Math.random()-.5)*400,j=-120-Math.random()*60,at=420+Math.random()*60,st=(h*(.6+Math.random()*.8)).toFixed(1),ot=(E+Math.random()*E*.5).toFixed(2),it=(Math.random()*3).toFixed(2),Z=(F*(.5+Math.random()*.5)).toFixed(3),J=(j*$.x+H*S).toFixed(1),rt=(j*$.y+H*w).toFixed(1),nt=(at*$.x+H*S).toFixed(1),St=(at*$.y+H*w).toFixed(1);_.push(`<div class="pw-streak" style="left:50%;top:50%;width:${st}px;height:1px;transform:rotate(${d-90}deg);animation-duration:${ot}s;animation-delay:${it}s;opacity:${Z};background:linear-gradient(to right, transparent, ${y}44, transparent);--sx:${J}px;--sy:${rt}px;--ex:${nt}px;--ey:${St}px"></div>`)}let z=[];for(let k=1;k<=3;k++)z.push(et("circle",{cx:ct,cy:pt,r:k*30,fill:"none",stroke:y,"stroke-width":.5,opacity:.08+k*.02}));for(let k of Sa){let H=je(k.a),j=ft(H,20),at=ft(H,qt+4),st=ft(H,qt+16),ot=k.l.length===1;z.push(et("line",{x1:j.x.toFixed(1),y1:j.y.toFixed(1),x2:at.x.toFixed(1),y2:at.y.toFixed(1),stroke:y,"stroke-width":.5,opacity:.12})),z.push(et("text",{x:st.x.toFixed(1),y:st.y.toFixed(1),"text-anchor":"middle","dominant-baseline":"central",fill:ot?"rgba(255,255,255,0.7)":"rgba(255,255,255,0.3)","font-size":ot?11:9,"font-weight":ot?600:400},n(k.l)))}z.push(Ma(c,T,x,y)),z.push(Aa(g,T,x,y)),z.push(et("circle",{cx:ct,cy:pt,r:18,fill:y,opacity:.06})),z.push(et("circle",{cx:ct,cy:pt,r:3,fill:y}));let I=x>Kt?(x-Kt)*5:0,D=Math.max(.15,.4-x*.25),U="";I>.1&&(U=`--dx:${(I*$.x).toFixed(2)}px;--dy:${(I*$.y).toFixed(2)}px;animation:pw-roseShake ${D.toFixed(2)}s ease-in-out infinite`);let Y=Math.round(12+x*50).toString(16).padStart(2,"0"),P=Math.round(6+x*25).toString(16).padStart(2,"0"),Q=`radial-gradient(ellipse at 50% 50%, ${y}${Y} 0%, ${y}${P} 40%, transparent 85%)`,N=["speed","gust"].map(k=>`<button class="pw-tab" role="tab" aria-selected="${k===p}" tabindex="${k===p?"0":"-1"}" data-mode="${n(k)}">${n(k.charAt(0).toUpperCase()+k.slice(1))}</button>`).join("");return`
    <div class="pw-section pw-wind" style="background: ${f(Q)}">
      <div class="pw-section-header">
        <span class="pw-section-title">Wind</span>
        <div class="pw-tabs" role="tablist">${N}</div>
      </div>
      <div class="pw-wind-streaks">${_.join("")}</div>
      <div class="pw-rose-wrap" style="${U}">
        <svg class="pw-rose-svg" width="${$t}" height="${$t}" viewBox="0 0 ${$t} ${$t}" style="display:block" role="img" aria-label="Wind compass rose showing ${n(Math.round(g))} ${n(u)} from ${n(C)}">
          <title>Wind direction compass</title>
          ${z.join("")}
        </svg>
        <div class="pw-wind-center">
          <div class="pw-wind-speed" style="color: ${f(y)}">${n(Math.round(g))}</div>
          <div class="pw-wind-unit">${n(u)} \xB7 ${n(Math.round(d))}\xB0 ${n(C)}</div>
          <div class="pw-wind-beaufort" style="color: ${f(y)}">${n(b.name)}</div>
          <div class="pw-wind-beaufort-desc">${n(b.desc)}</div>
        </div>
      </div>
    </div>`}K();function Ea(t,o,e,a){if(e&&a){let p=(o==="us"?Et:At).find(l=>l.label.toLowerCase()===e.toLowerCase());return{label:e,color:a,desc:p?.desc||""}}let i=o==="us"?Et:At;for(let r of i)if(t<=r.max)return r;return i[i.length-1]}function Ta(t,o){let e=t/o;return e<.3?"#30d158":e<.6?"#ff9f0a":"#ff453a"}function qe({hass:t,config:o,discovery:e,weatherEntity:a}){let i=o.scale||"eu",r=i==="us"?"us_aqi":"european_aqi",p=o.aqi_entity||e.atmosCe[r];if(!p||!t.states[p])return null;let l=t.states[p],s=Number(l.state)||0,c=l.attributes?.category||null,d=l.attributes?.color||null,m=Ea(s,i,c,d),u=Re(s,c,d),g=i==="us"?300:100,x=Math.min(100,s/g*100),b=q(s,0,g),A=gt(b,3,.8).toFixed(2),y=88,C=110,T=110,$=12,R=Math.PI*y,E=x/100*R,F=`M${C-y},${T} A${y},${y} 0 0 1 ${C+y},${T}`,h=`
    <div class="pw-aqi-gauge-unit" role="img" aria-label="Air quality index ${s}, ${n(m.label)}">
      <svg width="220" height="120" viewBox="0 0 220 120" style="display:block;--gc:${f(u)};--glow-color:${f(u)};animation:pw-gaugeGlow ${A}s ease-in-out infinite">
        <title>AQI gauge: ${n(String(s))} - ${n(m.label)}</title>
        <path d="${F}" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="${$}" stroke-linecap="round"/>
        <path d="${F}" fill="none" stroke="${f(u)}" stroke-width="${$}" stroke-linecap="round"
          stroke-dasharray="${E.toFixed(1)} ${R.toFixed(1)}"/>
      </svg>
      <div class="pw-aqi-gauge-center">
        <div class="pw-aqi-value" style="color: ${f(u)}">${n(String(s))}</div>
        <div class="pw-aqi-scale-label">${n(i==="us"?"US AQI":"European AQI")}</div>
      </div>
    </div>`,S=["eu","us"].map(N=>`<button class="pw-tab" role="tab" aria-selected="${N===i}" tabindex="${N===i?"0":"-1"}" data-scale="${n(N)}">${n(N.toUpperCase())}</button>`).join(""),w=[];for(let N of we){let k=e.atmosCe[N.key];if(!k||!t.states[k])continue;let H=Number(t.states[k].state)||0,j=Ta(H,N.maxEu);w.push(`
      <div class="stat">
        <div class="pw-stat-value">${n(H.toFixed(1))}</div>
        <div class="pw-stat-label"><span style="background: ${f(j)}; display:inline-block; width:5px; height:5px; border-radius:50%; margin-right:3px; vertical-align:middle"></span>${n(N.label)}</div>
      </div>`)}let _=w.length>0?w.join(""):"",z=e.atmosCe.pm2_5,I=e.atmosCe.pm10,D=z&&Number(t.states[z]?.state)||0,U=I&&Number(t.states[I]?.state)||0,Y=b<.15?X("#30d158",.12):X(u,b),P=Ut(b,"80,70,50"),Q=P?`<div class="pw-tension-vignette" style="background: ${f(P)}"></div>`:"";return`
    <div class="pw-section pw-aqi" data-pm25="${Number(D)}" data-pm10="${Number(U)}" style="background: ${f(Y)}">
      ${Q}
      <div class="pw-section-header">
        <span class="pw-section-title">Air Quality</span>
        <div class="pw-tabs" role="tablist">${S}</div>
      </div>
      <div class="pw-fx" role="img" aria-label="Air quality atmospheric effects"></div>
      ${h}
      <div class="pw-aqi-category" style="color: ${f(u)}">${n(m.label)}</div>
      <div class="pw-aqi-desc">${n(m.desc)}</div>
      ${_?`<div class="pulse-stats-row" style="margin: 16px 20px 0; padding-top: 12px">${_}</div>`:""}
    </div>`}K();var Ye=360,Ve=190,yt=130,Xt=Ye/2,ht=Ve-24,Bt=Xt-yt,se=Xt+yt,dt=Math.PI*yt,Ca=8,Be=12,Xe=16,Fa=[{name:"Night",gradient:"linear-gradient(180deg, #050510, #0a0a1a 50%, transparent)",labelColor:"#636366",stars:!0,isDay:!1},{name:"Blue Hour",gradient:"linear-gradient(180deg, #0a1628, #1a3050 60%, transparent)",labelColor:"#5ac8fa",stars:!0,isDay:!1},{name:"Golden Hour",gradient:"linear-gradient(180deg, #1a2a4a, #3a4a5a 40%, #6a4a30)",labelColor:"#ff9f0a",stars:!1,isDay:!0},{name:"Daytime",gradient:"linear-gradient(180deg, #1a3a5f, #2c5a8e 50%, transparent)",labelColor:"#ffd60a",stars:!1,isDay:!0},{name:"Golden Hour",gradient:"linear-gradient(180deg, #2a2a3a, #5a3a2a 50%, #8a4a1a)",labelColor:"#ff6b35",stars:!1,isDay:!0},{name:"Blue Hour",gradient:"linear-gradient(180deg, #0a1020, #1a2a40 60%, transparent)",labelColor:"#5ac8fa",stars:!0,isDay:!1}];function za(t,o,e,a,i,r,p){let l=t.getTime(),s=o.getTime(),c=e.getTime(),d=r?r.getTime():s-36e5,m=a?a.getTime():s-18e5,u=i?i.getTime():c+18e5,g=p?p.getTime():c+36e5;return l<d?0:l<m?1:l<s?2:l<c?3:l<u?4:l<g?5:0}function ne(t){let o=Math.PI*(1-t);return{x:Xt+yt*Math.cos(o),y:ht-yt*Math.sin(o)}}function Na(t){let o=(t%Tt+Tt)%Tt;return _e[Math.floor(o/Tt*8)%8]}function L(t){return!t||isNaN(t.getTime())?"--:--":t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1})}function Ra(t){return t===null||isNaN(t)?"--":t.toFixed(1)+"h"}function O(t,o,e){let a=Object.entries(o).map(([i,r])=>" "+i+'="'+r+'"').join("");return e!==void 0?"<"+t+a+">"+e+"</"+t+">":"<"+t+a+"/>"}function Ke({hass:t,config:o,discovery:e}){let a=new Date,i=e.sunEntityId?t.states[e.sunEntityId]:null;if(!i)return null;let r=i.attributes||{},p=new Date(r.next_rising||r.sunrise||a.toISOString()),l=new Date(r.next_setting||r.sunset||a.toISOString()),s=p.getTime()>a.getTime()?new Date(p.getTime()-864e5):p,c=(l.getTime()>a.getTime(),l);c.getTime()>s.getTime()+864e5&&(c=new Date(c.getTime()-864e5)),s.getTime()>c.getTime()&&(s=new Date(s.getTime()-864e5));let d=p.getTime()>a.getTime()?p:new Date(p.getTime()+864e5),m=l.getTime()>a.getTime()?l:new Date(l.getTime()+864e5),u=e.atmosCe,g=u.golden_hour_morning_start?new Date(String(t.states[u.golden_hour_morning_start]?.state)):null,x=u.golden_hour_morning_end?new Date(String(t.states[u.golden_hour_morning_end]?.state)):null,b=u.golden_hour_evening_start?new Date(String(t.states[u.golden_hour_evening_start]?.state)):null,A=u.golden_hour_evening_end?new Date(String(t.states[u.golden_hour_evening_end]?.state)):null,y=u.blue_hour_morning?new Date(String(t.states[u.blue_hour_morning]?.state)):null,C=u.blue_hour_evening?new Date(String(t.states[u.blue_hour_evening]?.state)):null,T=c.getTime()-s.getTime(),$=function(v){return v&&T>0?Math.max(0,Math.min(1,(v.getTime()-s.getTime())/T)):-1},R=u.moon_phase?t.states[u.moon_phase]:null,E=R?.attributes||{},F=E.moon_age!==void 0?Number(E.moon_age):null,h=E.illumination!==void 0?Number(E.illumination):null,S=F!==null?Na(F):R?.state||null,w=u.moonrise?new Date(t.states[u.moonrise]?.state):null,_=u.moonset?new Date(t.states[u.moonset]?.state):null,z=u.daylight_duration?t.states[u.daylight_duration]:null,I=z?Number(z.state):(c.getTime()-s.getTime())/36e5,D=za(a,s,c,g,A,y,C),U=Fa[D],Y=$(a),P=a.getTime()>=s.getTime()&&a.getTime()<=c.getTime(),Q="M"+Bt+","+ht+" A"+yt+","+yt+" 0 0 1 "+se+","+ht,N=[],k="",H=1/0;if(P){let v=c.getTime()-a.getTime();H=v/6e4,k=Math.floor(v/36e5)+"h "+Math.floor(v%36e5/6e4)+"m until sunset"}else if(D===4&&A){let v=A.getTime()-a.getTime();v>0&&(k=Math.floor(v/6e4)+"m of golden hour left")}else if(D===5&&C){let W=(A?new Date(A.getTime()+36e5):new Date(C.getTime()+18e5)).getTime()-a.getTime();W>0&&(k=Math.floor(W/6e4)+"m of blue hour left")}else if(D===1&&y){let v=(g||s).getTime()-a.getTime();v>0&&(k=Math.floor(v/6e4)+"m of blue hour left")}else if(D===2){let v=s.getTime()-a.getTime();v>0&&(k=Math.floor(v/6e4)+"m until sunrise")}else{let W=(s.getTime()>a.getTime()?s:new Date(s.getTime()+864e5)).getTime()-a.getTime();W>0&&(k=Math.floor(W/36e5)+"h "+Math.floor(W%36e5/6e4)+"m until sunrise")}let j=Bt,at=se-Bt,st=P?Math.max(0,Math.min(1,Y)):0;if(N.push(O("rect",{x:j,y:ht-1.5,width:at,height:3,rx:1.5,fill:"rgba(255,255,255,0.06)"})),st>0&&N.push(O("rect",{x:j,y:ht-1.5,width:(at*st).toFixed(1),height:3,rx:1.5,fill:U.labelColor,opacity:.6})),k){let v=P?q(H,180,0):0,W=Math.round(10+v*4),ut=v>.3?"#ff9f0a":"rgba(255,255,255,0.35)",mt=(.35+v*.55).toFixed(2);N.push(O("text",{x:Xt,y:ht+14,"text-anchor":"middle",fill:ut,"font-size":W,opacity:mt},n(k)))}N.push(O("path",{d:Q,fill:"none",stroke:"rgba(255,255,255,0.08)","stroke-width":2}));let ot=$(x||g),it=$(b||A);if(ot>0){let v=ot*dt,W="Golden Hour AM: "+L(s)+" \u2013 "+L(x||g);N.push("<g>"+O("title",{},n(W))+O("path",{d:Q,fill:"none",stroke:"#ff9f0a","stroke-width":3,opacity:.5,"stroke-dasharray":v.toFixed(1)+" "+dt})+"</g>")}if(it>0&&it<1){let v=it*dt,W=(1-it)*dt,ut="Golden Hour PM: "+L(b||A)+" \u2013 "+L(c);N.push("<g>"+O("title",{},n(ut))+O("path",{d:Q,fill:"none",stroke:"#ff6b35","stroke-width":3,opacity:.5,"stroke-dasharray":"0 "+v.toFixed(1)+" "+W.toFixed(1)+" "+dt})+"</g>")}let Z=L(s),J=L(c),rt="#ff9f0a",nt="#ff6b35";switch(D){case 0:Z="",J="";break;case 1:Z=L(y),J=L(g),rt="#5ac8fa",nt="#5ac8fa";break;case 2:Z=L(g),J=L(s),rt="#ff9f0a",nt="#ff9f0a";break;case 3:break;case 4:Z=L(b||c),J=L(A),rt="#ff6b35",nt="#ff6b35";break;case 5:Z=L(C),J=L(A?new Date(A.getTime()+36e5):null),rt="#5ac8fa",nt="#5ac8fa";break}if(Z&&N.push(O("text",{x:Bt,y:ht-6,"text-anchor":"middle",fill:rt,"font-size":9,opacity:.8},n(Z))),J&&N.push(O("text",{x:se,y:ht-6,"text-anchor":"middle",fill:nt,"font-size":9,opacity:.8},n(J))),P&&Y>=0){let v=ne(Y),W=Y*dt;N.push(O("path",{d:Q,fill:"none",stroke:"rgba(255,220,100,0.1)","stroke-width":2,"stroke-dasharray":W.toFixed(1)+" "+dt}));let ut=O("circle",{cx:v.x.toFixed(1),cy:v.y.toFixed(1),r:11,fill:"#ffd60a"});ut+=O("circle",{cx:v.x.toFixed(1),cy:v.y.toFixed(1),r:7,fill:"#ffe066",opacity:.5});for(let mt=0;mt<Ca;mt++){let lt=mt*45*Math.PI/180;ut+=O("line",{x1:(v.x+Be*Math.cos(lt)).toFixed(1),y1:(v.y+Be*Math.sin(lt)).toFixed(1),x2:(v.x+Xe*Math.cos(lt)).toFixed(1),y2:(v.y+Xe*Math.sin(lt)).toFixed(1),stroke:"#ffd60a","stroke-width":1.5,"stroke-linecap":"round",opacity:.4})}N.push('<g style="animation: pw-sunGlow 4s ease-in-out infinite">'+ut+"</g>")}if(w&&_&&!isNaN(w.getTime())&&!isNaN(_.getTime())){let v=_.getTime()<w.getTime()?new Date(_.getTime()+864e5):_,W=v.getTime()-w.getTime();if(W>0&&a.getTime()>=w.getTime()&&a.getTime()<=v.getTime()){let mt=Math.max(0,Math.min(1,(a.getTime()-w.getTime())/W)),lt=ne(mt),oa=mt*dt;N.push(O("path",{d:Q,fill:"none",stroke:"rgba(200,210,230,0.06)","stroke-width":1.5,"stroke-dasharray":oa.toFixed(1)+" "+dt})),N.push('<g style="animation: pw-moonGlow 4s ease-in-out infinite">'+O("circle",{cx:lt.x.toFixed(1),cy:lt.y.toFixed(1),r:8,fill:"#c8d0e0"})+O("circle",{cx:lt.x.toFixed(1),cy:lt.y.toFixed(1),r:5,fill:"#e8e0d0",opacity:.5})+"</g>")}}else if(!P){let v=ne(.5);N.push('<g style="animation: pw-moonGlow 4s ease-in-out infinite">'+O("circle",{cx:v.x.toFixed(1),cy:v.y.toFixed(1),r:8,fill:"#c8d0e0"})+O("circle",{cx:v.x.toFixed(1),cy:v.y.toFixed(1),r:5,fill:"#e8e0d0",opacity:.5})+"</g>")}let Ft='<svg style="display:block;width:100%;overflow:visible" viewBox="0 0 '+Ye+" "+Ve+'" role="img" aria-label="Sun and moon arc">'+N.join("")+"</svg>",V=S?n(S)+(h!==null?" "+Math.round(h)+"%":""):"",wt=D===2||D===4,xt=D===0,kt="";return wt?kt='<div class="pw-tension-wash" style="background: '+f(X("#ff9f0a",.2))+'"></div>':xt&&(kt='<div class="pw-tension-wash" style="background: '+f(X("#5ac8fa",.1))+'"></div>'),'<div class="pw-section pw-astro"><div class="pw-sky-wash" style="background: '+f(U.gradient)+'"></div>'+kt+'<div class="pw-fx" data-astro-stars="'+U.stars+'" data-astro-day="'+U.isDay+'" role="img" aria-label="Sky atmospheric effects"></div><div class="pw-astro-content"><div class="pw-section-header"><span class="pw-section-title">Sun &amp; Moon</span><span style="font-size:10px;color:'+f(U.labelColor)+'">'+V+'</span></div><div class="pw-arc-wrap">'+Ft+'</div><div class="pulse-stats-row" style="margin: 8px 20px 0" role="img" aria-label="Sun and moon statistics"><div class="stat"><div class="pw-stat-value">'+n(L(P?s:d))+'</div><div class="pw-stat-label">'+(P?"Sunrise":"Next Rise")+'</div></div><div class="stat"><div class="pw-stat-value">'+n(L(P?c:m))+'</div><div class="pw-stat-label">'+(P?"Sunset":"Next Set")+'</div></div><div class="stat"><div class="pw-stat-value">'+n(Ra(P?I:(m.getTime()-d.getTime())/36e5))+'</div><div class="pw-stat-label">Daylight</div></div><div class="stat"><div class="pw-stat-value">'+n(L(w))+'</div><div class="pw-stat-label">Moonrise</div></div><div class="stat"><div class="pw-stat-value">'+n(L(_))+'</div><div class="pw-stat-label">Moonset</div></div></div></div></div>'}K();function Da(t,o){let e=(t?.state||"").toLowerCase();if(!t||e==="none"||e==="no alerts"||e==="unavailable"||e==="0"||e==="off")return[];let a=t.entity_id||"";if(a.endsWith("_alert_count")||a.startsWith("binary_sensor."))return[];let i=t.attributes,r=[],p=i.alert_type||i.type||"wind",l=Number(i.level)||1,s=i.color||Zt[l]||Zt[1],c=he[p]||"mdi:alert",d=Number(i.progress)||0,m=Array.isArray(i.locations)?i.locations:[],u=i.end_time??"",g=null,x=null,b=!1;if(u==="")b=!0;else if(u){let A=new Date(u),y=new Date,C=A.getTime()-y.getTime();if(C/(1e3*60*60*24)>ge)b=!0;else if(o)g=Math.max(0,C/(1e3*60*60));else{let $=i.start_time||i.datetime;if($){let R=new Date(String($));x=Math.max(0,(R.getTime()-y.getTime())/(1e3*60*60))}}}return r.push({type:p,icon:c,severity:l,color:s,summary:String(i.headline||i.summary||t.state||""),desc:String(i.description||""),active:o,hoursLeft:g,hoursUntil:x,progress:d,locations:m,link:i.link?String(i.link):null,endTime:String(u),isUntilFurtherNotice:b}),r}function Qe({hass:t,config:o,discovery:e}){let a=[];e.atmosCe.active_alert&&t.states[e.atmosCe.active_alert];for(let h of e.alertEntityIds){let S=t.states[h];if(!S)continue;let w=h.includes("active")||S.state==="on";a.push(...Da(S,w))}let r=a.length>0,p=r?a.reduce((h,S)=>S.severity>h.severity?S:h,a[0]).severity:0,l=r?a.reduce((h,S)=>S.severity>h.severity?S:h,a[0]).color:"#30d158",s=q(p,0,4),c=r?Math.min(1.5,1+(a.length-1)*.15):1,d=Ie(s,3,1.2).toFixed(2),m=gt(s).toFixed(2),u=gt(s,2,.6).toFixed(2),g=r?X(l,s*c):X("#30d158",.08),x=140,b=x/2,A=x/2,y=r?{bgInner:p>=4?"#1a0000":p>=3?"#1a0e00":"#1a1500",bgOuter:p>=4?"#0a0000":p>=3?"#0a0500":"#0a0800",ring:f(l.replace(")",",0.15)").replace("rgb(","rgba(")),line:f(l.replace(")",",0.08)").replace("rgb(","rgba(")),sweep:f(l.replace(")",",0.4)").replace("rgb(","rgba("))}:{bgInner:"#001a00",bgOuter:"#000800",ring:"rgba(80,255,0,0.15)",line:"rgba(80,255,0,0.08)",sweep:"rgba(80,255,0,0.35)"},C=a.map((h,S)=>{let w=h.active?18+S*7:40+S*7,_=S*137.5*Math.PI/180,z=b+Math.cos(_)*w,I=A+Math.sin(_)*w,D=(S*137.5%360/360*Number(d)).toFixed(2);return h.active?`<div class="pw-radar-blip" style="left:${z.toFixed(1)}px;top:${I.toFixed(1)}px;--pw-blip-color:${f(h.color)};animation-delay:${D}s"></div>`:`<div style="position:absolute;left:${z.toFixed(1)}px;top:${I.toFixed(1)}px;width:4px;height:4px;border-radius:50%;background:${f(h.color)};opacity:0.2;transform:translate(-50%,-50%)"></div>`}).join(""),T=`
    <div style="display:flex;justify-content:center;padding:12px 20px;position:relative;z-index:2">
      <div class="pw-radar" style="--pw-radar-bg-inner:${y.bgInner};--pw-radar-bg-outer:${y.bgOuter};--pw-radar-color:${y.ring};--pw-radar-line:${y.line};--pw-radar-sweep:${y.sweep};--pw-radar-dur:${d}s" role="img" aria-label="${r?`${a.length} weather alerts`:"No active alerts"}">
        ${C}
      </div>
    </div>`,$=`<span class="pw-severity-dot" style="background: ${f(l)}; animation-duration: ${u}s"></span>`,R=p>=4,E=a.map(h=>{let S=h.isUntilFurtherNotice?"Until further notice":h.active&&h.hoursLeft!==null?`${Math.round(h.hoursLeft)}h left`:h.hoursUntil!==null?`${Math.round(h.hoursUntil)}h until`:"",w=h.active?"active":"upcoming",_=h.active?`--pw-alert-color:${f(h.color)}`:"";return`
      <div class="pw-alert-row ${w}" style="${_}">
        <div class="pw-alert-dot" style="background:${f(h.color)}"></div>
        <div class="pw-alert-body">
          <div class="pw-alert-headline">${n(h.summary)}</div>
          <div class="pw-alert-type">${n(h.type)}</div>
          ${h.desc?`<div class="pw-alert-desc">${n(h.desc)}</div>`:""}
          ${h.locations.length>0?`<div class="pw-alert-locations">${n(h.locations.join(", "))}</div>`:""}
        </div>
        <span class="pw-alert-time">${n(S)}</span>
      </div>`}).join("");return`
    <div class="pw-section pw-alerts"${R?` style="border-top: 2px solid ${f(l)}"`:""}>
      <div class="pw-tension-wash${r?" breathing":""}" style="background: ${f(g)}; --breathe-dur: ${m}s"></div>
      <div class="pw-alerts-content">
        <div class="pw-section-header">
          <span class="pw-section-title">Alerts</span>
          ${$}
        </div>
        ${T}
        ${r?"":'<div class="pw-all-clear">All Clear</div>'}
        ${E?`<div class="pw-alert-list">${E}</div>`:""}
      </div>
    </div>`}K();var Oa=Object.freeze({none:{label:"Stable",color:"#30d158",desc:"No thunderstorm risk"},marginal:{label:"Marginal",color:"#ffd60a",desc:"Isolated storms possible"},slight:{label:"Slight",color:"#ff9f0a",desc:"Brief storms possible"},enhanced:{label:"Enhanced",color:"#ff6b35",desc:"Organized storms likely"},moderate:{label:"Moderate",color:"#ff453a",desc:"Severe storms expected"},high:{label:"Extreme",color:"#8b0000",desc:"Dangerous storm potential"},unknown:{label:"Unknown",color:"#888888",desc:"Insufficient data"}});function Ia(t){for(let o of Lt)if(t>=o.min)return o;return Lt[Lt.length-1]}function La(t,o){let e=Math.min(100,t/4e3*100),a=Math.min(100,Math.max(0,(6-o)/12*100));return Math.round(e*.6+a*.4)}function Pa(t){return t<=10?{label:"Stable",color:"#30d158",desc:"No thunderstorm risk"}:t<=30?{label:"Marginal",color:"#ffd60a",desc:"Isolated storms possible"}:t<=55?{label:"Moderate",color:"#ff9f0a",desc:"Scattered storms likely"}:t<=80?{label:"High",color:"#ff453a",desc:"Severe storms expected"}:{label:"Extreme",color:"#8b0000",desc:"Dangerous storm potential"}}function Ha(t,o){let e=o.atmosCe,a=e.cape&&t.states[e.cape]&&Number(t.states[e.cape].state)||0,i=e.lifted_index&&t.states[e.lifted_index]&&Number(t.states[e.lifted_index].state)||0,r=!!(e.cape&&t.states[e.cape]),p=!!(e.lifted_index&&t.states[e.lifted_index]),l=r||p?La(a,i):null;if(e.stability_assessment&&t.states[e.stability_assessment]){let c=t.states[e.stability_assessment].state,d=t.states[e.stability_assessment].attributes||{},m=Oa[c];if(m)return{...m,score:l,source:"composite",attrs:d,capeValue:a,liValue:i,hasCape:r,hasLI:p}}return{...(l!==null?Pa(l):null)||{label:"Unknown",color:"#888888",desc:""},score:l,source:"fallback",attrs:null,capeValue:a,liValue:i,hasCape:r,hasLI:p}}function Wa(t){return Math.max(0,Math.min(100,t))}function Ze(t,o=5e3){return o<=0?0:Math.max(0,Math.min(100,t/o*100))}function Ua(t){let o=Math.max(0,Math.min(100,t)),e=o/100;return{count:o<=10?0:Math.round(2+e*6),minSize:2+Math.round(e),maxSize:3+Math.round(e),minDur:4-e*2.2,maxDur:4-e*1.2}}function Je(t,o,e=Math.random){let a=document.createDocumentFragment(),i=Ua(t);if(i.count===0)return a;for(let r=0;r<i.count;r++){let p=document.createElement("div");p.className="pw-thermal-particle";let l=i.minSize+e()*(i.maxSize-i.minSize),s=10+e()*80,c=e()*30,d=i.minDur+e()*(i.maxDur-i.minDur),m=e()*d,u=.4+e()*.3,g=-(50+e()*60);p.setAttribute("style",[`width:${l.toFixed(1)}px`,`height:${l.toFixed(1)}px`,`left:${s.toFixed(1)}%`,`bottom:${c.toFixed(1)}%`,`background:${o}`,`--rise-dur:${d.toFixed(2)}s`,`--rise-dist:${g.toFixed(0)}px`,`--peak-op:${u.toFixed(2)}`,`animation-delay:${m.toFixed(2)}s`].join(";")),a.appendChild(p)}return a}function ta({hass:t,config:o,discovery:e}){let a=e.atmosCe;if(!a.cape&&!a.lifted_index&&!a.freezing_level_height)return console.debug("Pulse Weather: Atmosphere section requires Atmos CE sensors \u2014 skipping"),null;let i=Ha(t,e),{score:r,source:p,capeValue:l,liValue:s,hasCape:c,hasLI:d}=i,m=i.label!=="Unknown"?i:null,u=r!==null?Wa(r):0,g=m?.color||"#30d158",x=c||d?`
        <div class="pw-atmos-cape-fill" style="height:${Number(u)}%;background:linear-gradient(to top, ${f(g)}40, ${f(g)}08)">
          <div class="pw-atmos-fx" data-atmos-score="${Number(r)}" data-atmos-color="${f(g)}"></div>
        </div>`:"",b=r!==null?q(r,0,100):0,A=b>.1?`
        <div class="pw-atmos-column-glow${b>.3?" pulsing":""}" style="--glow-color:${f(g)}40;--pulse-dur:${gt(b,3,.8).toFixed(2)}s"></div>`:"",y=a.freezing_level_height&&t.states[a.freezing_level_height]?(()=>{let w=Number(t.states[a.freezing_level_height].state)||0,_=t.states[a.freezing_level_height]?.attributes?.unit_of_measurement||"m",z=Ze(w);return`
        <div class="pw-atmos-freeze-marker" style="bottom:${Number(z)}%">
          <span class="pw-atmos-freeze-label">\u2744 ${n(String(Math.round(w)))}${n(_)}</span>
          <div class="pw-atmos-freeze-line"></div>
        </div>`})():"",C=a.lcl_height&&t.states[a.lcl_height]?(()=>{let w=Number(t.states[a.lcl_height].state)||0,_=t.states[a.lcl_height]?.attributes?.unit_of_measurement||"m",z=Ze(w);return`
        <div class="pw-atmos-lcl-marker" style="bottom:${Number(z)}%">
          <span class="pw-atmos-lcl-label">\u2601 LCL ${n(String(Math.round(w)))}${n(_)}</span>
          <div class="pw-atmos-lcl-line"></div>
        </div>`})():"",T=[];if(c){let w=Oe(l),_=b>.1?`; text-shadow: ${vt(g,b)}`:"";T.push(`
      <div class="pw-atmos-metric">
        <div class="pw-atmos-metric-value" style="color:${f(w)}${_}">${n(String(Math.round(l)))}</div>
        <div class="pw-atmos-metric-unit">J/kg</div>
        <div class="pw-atmos-metric-label">CAPE</div>
      </div>`)}if(d){let w=Ia(s);T.push(`
      <div class="pw-atmos-metric">
        <div class="pw-atmos-metric-value" style="color:${f(w.color)}">${n(s>=0?"+":"")}${n(s.toFixed(1))}</div>
        <div class="pw-atmos-metric-label">Lifted Idx</div>
      </div>`)}if(a.wind_shear_0_6km&&t.states[a.wind_shear_0_6km]){let w=Number(t.states[a.wind_shear_0_6km].state)||0,_=t.states[a.wind_shear_0_6km]?.attributes?.unit_of_measurement||"km/h";T.push(`
      <div class="pw-atmos-metric">
        <div class="pw-atmos-metric-value">${n(String(Math.round(w)))}</div>
        <div class="pw-atmos-metric-unit">${n(_)}</div>
        <div class="pw-atmos-metric-label">Shear</div>
      </div>`)}let $=p==="composite"&&i.attrs?`<div class="pw-atmos-confidence">${n(String(i.attrs.parameters_available||0))}/${n(String(i.attrs.parameters_total||4))} params</div>`:"",R=[];if(a.freezing_level_height&&t.states[a.freezing_level_height]){let w=Number(t.states[a.freezing_level_height].state)||0,_=t.states[a.freezing_level_height]?.attributes?.unit_of_measurement||"m",z=w<1e3?"#5ac8fa":w<3e3?"#30d158":"#ff9f0a";R.push(`
      <div class="stat">
        <div class="pw-stat-value" style="color:${f(z)}">${n(String(Math.round(w)))}${n(_)}</div>
        <div class="pw-stat-label">Freeze Lvl</div>
      </div>`)}if(a.soil_temperature&&t.states[a.soil_temperature]){let w=Number(t.states[a.soil_temperature].state)||0,_=t.states[a.soil_temperature]?.attributes?.unit_of_measurement||"\xB0C";R.push(`
      <div class="stat">
        <div class="pw-stat-value">${n(w.toFixed(1))}${n(_)}</div>
        <div class="pw-stat-label">Soil Temp</div>
      </div>`)}if(a.soil_moisture&&t.states[a.soil_moisture]){let w=Number(t.states[a.soil_moisture].state)||0;R.push(`
      <div class="stat">
        <div class="pw-stat-value">${n(w.toFixed(2))}</div>
        <div class="pw-stat-label">Soil Moist</div>
      </div>`)}let E=R.length>0?`<div class="pulse-stats-row" style="margin:12px 20px 0;padding-top:12px" role="img" aria-label="Atmospheric data">${R.join("")}</div>`:"";if(!m&&T.length===0&&R.length===0)return null;let F=m?.color||"#30d158",h=b<.15?X("#30d158",.08):X(F,b),S=b>.3?`<div class="pw-tension-wash breathing" style="background:${f(X(F,b))};--breathe-dur:${gt(b).toFixed(2)}s"></div>`:"";return`
    <div class="pw-section pw-atmos" style="background:${f(h)}">
      ${S}
      <div class="pw-section-header">
        <span class="pw-section-title">Atmosphere</span>
        ${m?`<span class="pw-atmos-tier-label" style="color:${f(m.color)}">${n(m.label)}</span>`:""}
      </div>
      ${m?`<div class="pw-atmos-tier-desc">${n(m.desc)}</div>`:""}
      ${$}
      <div class="pw-atmos-column-wrap" role="img" aria-label="Atmospheric instability ${r!==null?n(String(r))+"%, "+n(m?.label||""):"unknown"}">
        <div class="pw-atmos-scale">
          <span class="pw-atmos-scale-label">5km</span>
          <span class="pw-atmos-scale-label">4km</span>
          <span class="pw-atmos-scale-label">3km</span>
          <span class="pw-atmos-scale-label">2km</span>
          <span class="pw-atmos-scale-label">1km</span>
          <span class="pw-atmos-scale-label">0</span>
        </div>
        <div class="pw-atmos-column">
          ${x}
          ${A}
          ${y}
          ${C}
          <div class="pw-atmos-ground-label">Surface</div>
        </div>
        <div class="pw-atmos-info">
          ${T.join("")}
        </div>
      </div>
      ${E}
    </div>`}var ja={overview:Le,forecast:Pe,wind:Ge,air_quality:qe,astro:Ke,alerts:Qe,atmosphere:ta},le=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._lastWeatherState=null,this._forecastData=null,this._subscribedEntityId=null,this._phaseTimer=null}setConfig(o){if(!o)throw new Error("Invalid configuration");this._config=Me(o),this._hass&&this._fullRender()}set hass(o){if(this._hass=o,!this._config)return;let e=this._config.weather_entity||Object.keys(o.states).find(r=>r.startsWith("weather."))||"",a=o.states[e];if(!a)return;let i=`${a.state}|${JSON.stringify(a.attributes)}`;i!==this._lastWeatherState&&(this._lastWeatherState=i,this._fullRender(),this._subscribeForecast(o,e))}async _subscribeForecast(o,e){if(!(this._subscribedEntityId===e&&this._forecastData)&&(this._subscribedEntityId=e,!!o.callWS))try{let a=await o.callWS({type:"call_service",domain:"weather",service:"get_forecasts",target:{entity_id:e},service_data:{type:"daily"},return_response:!0}).catch(()=>null),i=await o.callWS({type:"call_service",domain:"weather",service:"get_forecasts",target:{entity_id:e},service_data:{type:"hourly"},return_response:!0}).catch(()=>null),r=a,p=i,l=r?.response,s=p?.response,c=l?.[e],d=s?.[e];this._forecastData={hourly:d?.forecast||[],daily:c?.forecast||[]},this._fullRender()}catch{}}_unsubscribeForecasts(){this._subscribedEntityId=null}disconnectedCallback(){this._unsubscribeForecasts(),this._phaseTimer&&(clearTimeout(this._phaseTimer),this._phaseTimer=null)}_fullRender(){if(!this._hass||!this._config||!this.shadowRoot)return;let o=ee(this._hass.states,this._config),e=this._hass.states[o.weatherEntityId];if(!e)return;let a=["<style>",Se,"</style>",'<div class="pw-card">'];for(let i of this._config.sections||[]){let r=ja[i.type];if(r)try{let p=r({hass:this._hass,config:i,discovery:o,weatherEntity:e,forecastData:this._forecastData});p&&a.push(p)}catch{}}a.push("</div>"),this.shadowRoot.innerHTML=a.join(""),this._postRender(o),this._schedulePhaseTransition()}_schedulePhaseTransition(){if(this._phaseTimer&&(clearTimeout(this._phaseTimer),this._phaseTimer=null),!this._hass||!this._config)return;let o=ee(this._hass.states,this._config),e=o.atmosCe,a=this._hass.states[o.sunEntityId||""];if(!a)return;let i=Date.now(),r=[],p=new Date(a.attributes?.next_rising||"").getTime(),l=new Date(a.attributes?.next_setting||"").getTime();p>i&&r.push(p),l>i&&r.push(l);for(let d of["golden_hour_morning_start","golden_hour_morning_end","golden_hour_evening_start","golden_hour_evening_end","blue_hour_morning","blue_hour_evening"])if(e[d]){let m=new Date(String(this._hass.states[e[d]]?.state||"")).getTime();m>i&&r.push(m)}if(r.length===0)return;let c=Math.min(...r)-i+1e3;this._phaseTimer=setTimeout(()=>{this._phaseTimer=null,this._lastWeatherState=null,this._hass&&this._fullRender()},c)}_postRender(o){if(!this.shadowRoot||!this._hass)return;let e=this.shadowRoot.querySelectorAll(".pw-fx[data-condition]");for(let s of e){let c=s.getAttribute("data-condition")||"",d=s.getAttribute("data-night")==="true",m=null;try{let g=s.getAttribute("data-cloud");g&&g!=='""'&&g!==""&&(m=JSON.parse(g))}catch{}let u=Ce(c,d,m);s.replaceChildren(u)}let a=this.shadowRoot.querySelectorAll(".pw-aqi[data-pm25]");for(let s of a){let c=Number(s.getAttribute("data-pm25"))||0,d=Number(s.getAttribute("data-pm10"))||0,m=s.querySelector(".pw-fx");if(m&&(c>0||d>0)){let u=document.createDocumentFragment();Te(u,c,d),m.replaceChildren(u)}}let i=this.shadowRoot.querySelectorAll(".pw-fx[data-astro-stars]");for(let s of i){let c=s.getAttribute("data-astro-stars")==="true",d=s.getAttribute("data-astro-day")==="true",m=document.createDocumentFragment();c&&oe(m),d&&(G(m,3,.5),Wt(m)),s.replaceChildren(m)}let r=this.shadowRoot.querySelectorAll(".pw-atmos-fx[data-atmos-score]");for(let s of r){let c=Number(s.getAttribute("data-atmos-score"))||0,d=s.getAttribute("data-atmos-color")||"#30d158",m=Je(c,d);s.replaceChildren(m)}let p=this.shadowRoot.querySelectorAll(".pw-tab");for(let s of p)s.addEventListener("click",c=>{let d=c.currentTarget,m=d.dataset.mode,u=d.dataset.scale;if(m||u){if(!this._config)return;let g=[...this._config.sections||[]];for(let x of g)m&&("mode"in x||x.type==="forecast"||x.type==="wind")&&(x.type==="forecast"&&m&&(x.mode=m),x.type==="wind"&&m&&(x.speed_mode=m)),u&&x.type==="air_quality"&&(x.scale=u);this._config={...this._config,sections:g},this._fullRender()}});let l=this.shadowRoot.querySelectorAll(".pw-hourly-strip");for(let s of l){let c=!1,d=0,m=0;s.addEventListener("mousedown",u=>{c=!0,d=u.pageX-s.offsetLeft,m=s.scrollLeft,s.style.cursor="grabbing"}),s.addEventListener("mouseleave",()=>{c=!1,s.style.cursor=""}),s.addEventListener("mouseup",()=>{c=!1,s.style.cursor=""}),s.addEventListener("mousemove",u=>{if(!c)return;u.preventDefault();let g=u.pageX-s.offsetLeft;s.scrollLeft=m-(g-d)}),s.addEventListener("touchstart",u=>{u.stopPropagation()},{passive:!0}),s.addEventListener("touchmove",u=>{u.stopPropagation()},{passive:!0}),s.addEventListener("wheel",u=>{let g=u;Math.abs(g.deltaX)<Math.abs(g.deltaY)&&(u.preventDefault(),s.scrollLeft+=g.deltaY)},{passive:!1})}}getCardSize(){let o=this._config?.sections?.length||1;return Math.max(3,o*3)}getGridOptions(){return{columns:12,min_columns:6,rows:this.getCardSize(),min_rows:3}}static async getConfigElement(){return await Promise.resolve().then(()=>(aa(),ea)),document.createElement(Mt)}static getStubConfig(o){let e=Object.keys(o.states).find(a=>a.startsWith("weather."));return{type:`custom:${_t}`,weather_entity:e||"weather.home",sections:[{type:"overview"}]}}};customElements.get(_t)||(customElements.define(_t,le),console.info(`%c ${_t.toUpperCase()} %c v${ce} `,"background:#5ac8fa;color:#000;font-weight:bold","background:#333;color:#fff"));window.customCards=window.customCards||[];window.customCards.push({type:_t,name:"Pulse Weather Card",description:"Weather visualization with atmospheric effects, forecasts, wind rose, and more",preview:!0});})();
