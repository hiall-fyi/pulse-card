var O=`
  :host {
    display: block;
  }

  ha-card {
    overflow: hidden;
    padding: 16px;
    background: var(--pulse-card-background, var(--ha-card-background, var(--card-background-color)));
    container-type: inline-size;
  }

  .pulse-card {
    display: flex;
    flex-direction: column;
    gap: var(--pulse-gap, 12px);
  }

  /* Multi-column grid \u2014 responsive: auto-collapse on narrow screens */
  .pulse-card[class*="columns-"] {
    display: grid;
    grid-template-columns: repeat(var(--pulse-columns, 1), 1fr);
    gap: var(--pulse-gap, 16px);
  }

  @container (max-width: 300px) {
    .pulse-card[class*="columns-"] {
      grid-template-columns: 1fr;
    }
  }

  /* Bar row \u2014 each entity */
  .bar-row {
    display: flex;
    flex-direction: column;
    gap: 6px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  /* Labels row (outside mode \u2014 default) */
  .bar-labels {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2px;
  }

  .bar-label-left, .bar-label-right {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .bar-label-left {
    flex: 1;
    min-width: 0;
    overflow: hidden;
  }

  .bar-name {
    font-size: var(--pulse-font-size, 14px);
    color: var(--pulse-name-color, var(--primary-text-color));
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .bar-value {
    font-size: var(--pulse-font-size, 14px);
    font-weight: 500;
    color: var(--pulse-value-color, var(--primary-text-color));
    white-space: nowrap;
  }

  /* Bar container */
  .bar-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    container-type: size;
  }

  /* Track (background) */
  .bar-track {
    position: absolute;
    inset: 0;
    background: var(--primary-color, #03A9F4);
    opacity: var(--pulse-track-opacity, 0.12);
    border-radius: inherit;
  }

  /* Fill */
  .bar-fill {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: var(--primary-color, #03A9F4);
    border-radius: inherit;
    transition: width var(--pulse-animation-speed, 0.8s) ease,
                background-color 0.3s ease;
  }

  /* Content overlay (classic/inside mode) */
  .bar-content {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    height: 100%;
    z-index: 3;
    /* Auto-scale font to bar height: 30% of container, clamped 10px\u201316px */
    font-size: var(--pulse-font-size, clamp(10px, 40cqh, 16px));
  }

  /* Target marker \u2014 visually distinct from fill [AC-7.3] */
  .bar-target {
    position: absolute;
    top: -1px;
    bottom: -1px;
    width: 2px;
    background: var(--primary-text-color, #333);
    opacity: 0.6;
    border-radius: 1px;
    z-index: 2;
    pointer-events: none;
    box-shadow: 0 0 0 1px var(--card-background-color, rgba(255,255,255,0.8));
  }

  /* Target label [AC-7.4] */
  .bar-target-label {
    position: absolute;
    top: -18px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 10px;
    font-weight: 500;
    color: var(--primary-text-color, #333);
    white-space: nowrap;
    pointer-events: none;
    opacity: 0.7;
  }

  /* Indicator */
  .bar-indicator {
    font-size: 12px;
    font-weight: 500;
    color: var(--pulse-indicator-color);
  }
  .bar-indicator.up { color: var(--pulse-indicator-color, var(--label-badge-green, #4CAF50)); }
  .bar-indicator.down { color: var(--pulse-indicator-color, var(--label-badge-red, #F44336)); }
  .bar-indicator.neutral { color: var(--pulse-indicator-color, var(--secondary-text-color)); }

  /* Inverted indicator \u2014 up is bad, down is good (CPU, memory, disk usage) */
  .bar-indicator.inverted.up { color: var(--pulse-indicator-color, var(--label-badge-red, #F44336)); }
  .bar-indicator.inverted.down { color: var(--pulse-indicator-color, var(--label-badge-green, #4CAF50)); }

  /* Icon */
  .bar-icon {
    --mdc-icon-size: 1.3em;
    font-size: var(--pulse-font-size, 14px);
    color: var(--pulse-icon-color, var(--secondary-text-color));
    flex-shrink: 0;
  }
  .bar-content .bar-icon {
    color: var(--pulse-icon-color, var(--pulse-name-color, var(--primary-text-color)));
  }

  /* Unavailable state */
  .bar-row.unavailable .bar-fill {
    background: var(--disabled-color, #bdbdbd) !important;
    width: 100% !important;
    opacity: 0.2;
  }
  .bar-row.unavailable .bar-name,
  .bar-row.unavailable .bar-value {
    opacity: 0.5;
  }

  /* Charge animation */
  @keyframes pulse-charge {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.75; }
  }
  .bar-fill.charge {
    animation: pulse-charge 2s ease-in-out infinite;
  }

  /* Entity row mode */
  .entity-row {
    padding: 8px 0;
  }

  /* Title header */
  .pulse-title {
    font-size: 16px;
    font-weight: 500;
    color: var(--primary-text-color);
    padding-bottom: 4px;
  }

  /* Hover feedback */
  .bar-row:active {
    opacity: 0.8;
  }
  @media (hover: hover) {
    .bar-row:hover .bar-fill {
      filter: brightness(1.1);
    }
  }

  /* Keyboard focus indicator */
  .bar-row:focus-visible {
    outline: 2px solid var(--primary-color, #03A9F4);
    outline-offset: 2px;
    border-radius: 4px;
  }

  /* Secondary info group \u2014 wraps name + secondary line */
  .bar-name-group {
    display: flex;
    flex-direction: column;
    min-width: 0;
    gap: 1px;
  }

  /* Secondary info text */
  .bar-secondary {
    font-size: 0.75em;
    opacity: 0.85;
    color: var(--pulse-secondary-color, var(--secondary-text-color));
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Inside bar \u2014 use white like other inside-bar text */
  .bar-content .bar-secondary {
    color: var(--pulse-secondary-color, rgba(255, 255, 255, 0.75));
  }

  /* Sparkline overlay [US-1] */
  .bar-sparkline {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50%;
    z-index: 1;
    pointer-events: none;
    opacity: 0.45;
    color: var(--pulse-sparkline-color, var(--primary-text-color, #333));
  }
  .bar-sparkline path {
    vector-effect: non-scaling-stroke;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* Compact mode [US-3] */
  ha-card:has(.compact) {
    padding: 10px;
  }
  .pulse-card.compact {
    gap: var(--pulse-gap, 6px);
  }
  .compact .bar-row {
    gap: 3px;
  }
  .compact .bar-labels {
    padding: 0;
  }
  .compact .bar-name {
    font-size: var(--pulse-font-size, 12px);
  }
  .compact .bar-value {
    font-size: var(--pulse-font-size, 12px);
  }
  .compact .bar-indicator {
    font-size: 10px;
  }
`;var j="0.4.0",G="Pulse Card:",v={min:0,max:100,height:"8px",border_radius:"4px",decimal:null,entity_row:!1,complementary:!1,limit_value:!1,columns:1,animation:{state:"on",speed:.8,effect:"none"},positions:{icon:"off",name:"outside",value:"outside",indicator:"off"},tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}};var ut=new Set(["on","open","home","locked","playing","active"]),dt=new Set(["off","closed","not_home","unlocked","idle","paused","standby"]);function Q(i,t,n){if(typeof i!="string")return null;let e=i.toLowerCase();return ut.has(e)?n:dt.has(e)?t:null}function pt(i,t){let n=String(i),e=n.charAt(0).toUpperCase()+n.slice(1);return t?`${e}${t}`:e}function T(i,t,n){return Math.min(Math.max(i,t),n)}function ft(i,t,n,e=!1){let o=Q(i,t,n),r=o!==null?o:parseFloat(i);if(isNaN(r))return 0;let s=n-t;if(s<=0)return 0;let a=e?n-r:r;return T((a-t)/s,0,1)*100}function ht(i,t){if(!t||t.length===0)return null;let n=parseFloat(i);if(isNaN(n))return null;for(let e of t)if(n>=e.from&&n<=e.to)return e;return null}function Y(i){let t=i.replace("#","");return t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:parseInt(t.substring(0,2),16),g:parseInt(t.substring(2,4),16),b:parseInt(t.substring(4,6),16)}}function mt(i,t,n){let e=Y(i),o=Y(t),r=Math.round(e.r+(o.r-e.r)*n),s=Math.round(e.g+(o.g-e.g)*n),a=Math.round(e.b+(o.b-e.b)*n);return`rgb(${r}, ${s}, ${a})`}function gt(i,t){if(!t||t.length<2)return null;let n=parseFloat(i);if(isNaN(n))return null;let e=t[0].from<=t[t.length-1].from?t:[...t].sort((o,r)=>o.from-r.from);for(let o=0;o<e.length-1;o++){let r=e[o],s=e[o+1];if(n>=r.from&&n<=s.to){let a=s.from-r.from,c=a>0?(n-r.from)/a:0;return mt(r.color,s.color,T(c,0,1))}}return n<=e[0].from?e[0].color:e[e.length-1].color}function bt(i,t){let n=i.min,e=i.max;return n==null&&(n=t?.attributes?.min??v.min),e==null&&(e=t?.attributes?.max??v.max),{min:parseFloat(String(n)),max:parseFloat(String(e))}}function N(i,t,n){return i.decimal??t.decimal??n?.entities?.[i.entity]?.display_precision??null}function I(i,t){return i.unit_of_measurement??t?.attributes?.unit_of_measurement??""}function vt(i,t,n){let e=parseFloat(i);if(isNaN(e))return String(i);let o=t!=null?e.toFixed(t):e.toString();return n?`${o}${n}`:o}function J(i,t){if(t==null)return{direction:"neutral",delta:0};let n=parseFloat(i),e=parseFloat(t);if(isNaN(n)||isNaN(e))return{direction:"neutral",delta:0};if(!isFinite(n)||!isFinite(e))return{direction:"neutral",delta:0};let o=Math.abs(n-e),r=Math.max(Math.abs(n),1);if(o>r*1e3)return{direction:"neutral",delta:0};let s=Math.round((n-e)*100)/100;return{direction:s>0?"up":s<0?"down":"neutral",delta:s}}function V(i,t,n,e,o){let r=i==="up"?"\u25B2":i==="down"?"\u25BC":"\u25B6";if(!n)return{arrow:r,text:r};let s=e!=null?t.toFixed(e):String(Math.round(t*100)/100),a=t>0?"+":"";return{arrow:r,text:`${r} ${a}${s}${o||""}`}}function w(i){return i==null||i===""?"":String(i).replace(/[;{}]/g,"").replace(/url\s*\(/gi,"").replace(/expression\s*\(/gi,"").replace(/-moz-binding\s*:/gi,"")}function y(i,...t){console.warn(`${G} ${i}`,...t)}async function Z(i,t,n=60){let e={};if(!i?.callWS||t.length===0)return e;let o=new Date,r=new Date(o.getTime()-n*60*1e3);try{let s=await i.callWS({type:"history/history_during_period",start_time:r.toISOString(),end_time:o.toISOString(),entity_ids:t,minimal_response:!0,significant_changes_only:!0});for(let a of t){let c=s?.[a];if(!c||c.length===0){e[a]=null;continue}let d=parseFloat(c[0].s);e[a]=isNaN(d)?null:d}}catch(s){y("Failed to fetch history for %s: %O",t.join(", "),s);for(let a of t)e[a]=null}return e}function A(i){if(i==null||i==="")return"";let t=String(i);return/^\d+(\.\d+)?$/.test(t)?`${t}px`:t}function b(i){return String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function X(i){return!Array.isArray(i)||i.length<2?i:[...i].sort((t,n)=>t.from-n.from)}function tt(i){if(!i)throw new Error("Please define an entity or entities");if(!i.entity&&!i.entities)throw new Error("Please define an entity or entities");let t={...v,...i,animation:{...v.animation,...i.animation},positions:{...v.positions,...i.positions}};t.columns!=null&&(t.columns=Number(t.columns)||1),t.animation.speed!=null&&(t.animation.speed=Number(t.animation.speed)||v.animation.speed),t.severity&&(t.severity=X(t.severity)),t.entities=i.entities?i.entities.map(e=>{let o=typeof e=="string"?{entity:e}:{...e};return o.severity&&(o.severity=X(o.severity)),o}):[{entity:i.entity}];let n=new Set;for(let e of t.entities)n.has(e.entity)&&y('Duplicate entity "%s" in config \u2014 only the last bar will update dynamically',e.entity),n.add(e.entity);return t}function M(i,t){if(i==null)return{value:null,showLabel:!1};if(typeof i=="number")return{value:isNaN(i)?null:i,showLabel:!1};if(typeof i=="string"){let n=t?.states[i];if(!n)return{value:null,showLabel:!1};let e=parseFloat(n.state);return{value:isNaN(e)?null:e,showLabel:!1}}return typeof i=="object"&&i.value!==void 0?{value:M(i.value,t).value,showLabel:i.show_label===!0}:{value:null,showLabel:!1}}function H(i,t,n){let e=n?.states[i.entity],o=!e||e.state==="unavailable"||e.state==="unknown"||e.state==="error",{min:r,max:s}=bt(i,e),a=i.attribute?e?.attributes?.[i.attribute]:e?.state,c=i.attribute?null:Q(a,r,s),d=c!==null,l=d?c:parseFloat(a),p=i.complementary??t.complementary,u=o?0:ft(a,r,s,p),f=I(i,e),m=N(i,t,n),g=(i.limit_value??t.limit_value)&&!isNaN(l)?T(l,r,s):a,x=o?"Unavailable":i.state_map?.[a]?i.state_map[a]:d?pt(a,f):vt(g,m,f),S=i.name??e?.attributes?.friendly_name??i.entity,k="",$="";if(!o){let F=i.severity??t.severity;if(F&&F.length>0)if(F.some(_=>_.mode==="gradient")){let _=gt(l,F);_&&(k=_)}else{let _=ht(l,F);_&&(k=_.color,_.icon&&($=_.icon))}}let D=k||i.color||t.color||"",z=i.icon||e?.attributes?.icon||"";return{isUnavailable:o,min:r,max:s,numValue:l,fill:u,displayValue:x,name:S,color:D,resolvedIcon:$||z}}function C(i,t){let n=i.bar_width??t.bar_width;return n!=null?Math.max(1,Math.min(100,n))/100:1}async function et(i,t,n=24){let e={};if(!i?.callWS||t.length===0)return e;let o=new Date,r=new Date(o.getTime()-n*60*60*1e3);try{let s=await i.callWS({type:"history/history_during_period",start_time:r.toISOString(),end_time:o.toISOString(),entity_ids:t,minimal_response:!0,significant_changes_only:!0});for(let a of t){let c=s?.[a];if(!c||c.length<2){e[a]=[];continue}let d=[];for(let l of c){let p=parseFloat(l.s);if(!isNaN(p)){let u=l.lu??l.last_updated,f=typeof u=="number"?u*1e3:new Date(u).getTime();d.push({t:f,v:p})}}e[a]=d}}catch(s){y("Sparkline fetch failed: %O",s);for(let a of t)e[a]=[]}return e}var K={avg:i=>i.reduce((t,n)=>t+n,0)/i.length,min:i=>Math.min(...i),max:i=>Math.max(...i),median:i=>{let t=[...i].sort((e,o)=>e-o),n=Math.floor(t.length/2);return t.length%2?t[n]:(t[n-1]+t[n])/2},first:i=>i[0],last:i=>i[i.length-1],sum:i=>i.reduce((t,n)=>t+n,0),delta:i=>Math.max(...i)-Math.min(...i),diff:i=>i[i.length-1]-i[0]};function _t(i,t,n="avg"){if(i.length===0||t<1)return[];if(i.length<=t){let p=i[0].t,u=i[i.length-1].t-p||1;return i.map(f=>({x:(f.t-p)/u,v:f.v}))}let e=K[n]||K.avg,o=i[0].t,a=(i[i.length-1].t-o||1)/t,c=[],d=0,l=i[0].v;for(let p=0;p<t;p++){let u=o+(p+1)*a,f=[];for(;d<i.length&&i[d].t<u;)f.push(i[d].v),d++;f.length>0&&(l=e(f)),c.push({x:p/(t-1||1),v:l})}return c}function q(i,t,n,e=24,o="avg",r=!0){if(i.length<2)return"";let s=_t(i,e,o);if(s.length<2)return"";let a=s[0].v,c=s[0].v;for(let h=1;h<s.length;h++)s[h].v<a&&(a=s[h].v),s[h].v>c&&(c=s[h].v);let d=c-a||1,l=2,p=n-l*2,u=s.map(h=>({x:h.x*t,y:l+p-(h.v-a)/d*p}));if(u.length===2||!r){let h=`M${u[0].x.toFixed(1)},${u[0].y.toFixed(1)}`;for(let g=1;g<u.length;g++)h+=`L${u[g].x.toFixed(1)},${u[g].y.toFixed(1)}`;return h}let f=u[0],m=`M${f.x.toFixed(1)},${f.y.toFixed(1)}`;for(let h=1;h<u.length;h++){let g=u[h],x=(f.x+g.x)/2,S=(f.y+g.y)/2;m+=` ${x.toFixed(1)},${S.toFixed(1)}`,m+=` Q${g.x.toFixed(1)},${g.y.toFixed(1)}`,f=g}return m+=` ${f.x.toFixed(1)},${f.y.toFixed(1)}`,m}function R(i,t){if(!i.visibility)return!0;let n=t?.states[i.entity];if(!n)return!1;let e=i.visibility,o=i.attribute?n.attributes?.[i.attribute]:n.state;if(!i.attribute&&(n.state==="unavailable"||n.state==="unknown"||n.state==="error"))return e.state_equal!==void 0&&String(e.state_equal)===n.state;let r=parseFloat(o);return!(e.state_above!==void 0&&(isNaN(r)||r<=e.state_above)||e.state_below!==void 0&&(isNaN(r)||r>=e.state_below)||e.state_equal!==void 0&&String(o)!==String(e.state_equal)||e.state_not_equal!==void 0&&String(o)===String(e.state_not_equal))}function yt(i){if(!i)return"";let t=new Date(i).getTime();if(isNaN(t))return"";let n=Date.now()-t;if(n<0)return"just now";let e=Math.floor(n/1e3);if(e<60)return"just now";let o=Math.floor(e/60);if(o<60)return`${o} min ago`;let r=Math.floor(o/60);return r<24?`${r}h ago`:`${Math.floor(r/24)}d ago`}function U(i,t){let n=i.secondary_info;if(!n)return"";if(n.text!==void 0&&n.text!==null&&n.text!=="")return String(n.text);let e=t?.states[i.entity];if(!e)return"";if(n.attribute){let o=e.attributes?.[n.attribute];return o!=null?String(o):""}return n.type==="last_changed"?yt(e.last_changed):""}var wt=250,xt=500;function nt(i,t,n){i.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:n}))}function St(i,t,n,e){if(!(!n||n.action==="none"))switch(n.action){case"more-info":nt(i,"hass-more-info",{entityId:n.entity||e});break;case"navigate":history.pushState(null,"",n.navigation_path),nt(i,"location-changed",{replace:!1});break;case"call-service":case"perform-action":{let o=n.service||n.perform_action;if(!o)break;let[r,s]=o.split(".");t.callService(r,s,n.service_data||n.data).catch(a=>y("Service call %s failed: %O",o,a));break}case"url":n.url_path&&window.open(n.url_path,"_blank","noopener,noreferrer");break;case"toggle":t.callService("homeassistant","toggle",{entity_id:n.entity||e}).catch(o=>y("Toggle %s failed: %O",n.entity||e,o));break}}function kt(i,t,n){let e=t?.[i],o=n?.[i];return e||o||{action:i==="tap_action"?"more-info":"none"}}function E(i,t,n,e,o){let r=kt(o,e,n);St(i,t,r,e.entity)}function P(i){let t=i.__pulseCleanup;typeof t=="function"&&t()}function it(i,t,n,e,o){P(i);let r=new AbortController,{signal:s}=r,a=0,c=null,d=null,l=!1;i.__pulseCleanup=()=>{r.abort(),c&&clearTimeout(c),d&&clearTimeout(d),delete i.__pulseCleanup},i.setAttribute("tabindex","0"),i.addEventListener("keydown",u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),n&&E(t,n,e,o,"tap_action"))},{signal:s}),i.addEventListener("click",u=>{if(u.preventDefault(),l){l=!1;return}a++,a===1?c=setTimeout(()=>{a=0,n&&E(t,n,e,o,"tap_action")},wt):a===2&&(c&&clearTimeout(c),a=0,n&&E(t,n,e,o,"double_tap_action"))},{signal:s}),i.addEventListener("pointerdown",()=>{l=!1,d=setTimeout(()=>{l=!0,n&&E(t,n,e,o,"hold_action")},xt)},{signal:s});let p=()=>{d&&clearTimeout(d)};i.addEventListener("pointerup",p,{signal:s}),i.addEventListener("pointercancel",p,{signal:s}),i.addEventListener("contextmenu",u=>u.preventDefault(),{signal:s})}var L=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_elements={};_indicators={};_indicatorTimer=null;_sparklineData={};_sparklineTimer=null;_sparklineLastFetch=0;_shadow;constructor(){super(),this._shadow=this.attachShadow({mode:"open"});let t=document.createElement("style");t.textContent=O,this._shadow.appendChild(t)}get _cfg(){return this._config}disconnectedCallback(){this._indicatorTimer&&(clearTimeout(this._indicatorTimer),this._indicatorTimer=null),this._sparklineTimer&&(clearTimeout(this._sparklineTimer),this._sparklineTimer=null);let t=this._shadow.querySelectorAll(".bar-row");for(let n of t)P(n)}setConfig(t){this._config=tt(t),this._elements={},this._sparklineData={},this._sparklineLastFetch=0,this._indicators={},this._hass&&(this._fullRender(),this._scheduleIndicatorFetch(),this._scheduleSparklineFetch())}set hass(t){if(this._hass=t,!this._config)return;let n=!1;for(let e of this._cfg.entities){let o=t.states[e.entity],r=this._prevStates[e.entity];if(!r||r.state!==o?.state||r.last_updated!==o?.last_updated){n=!0;break}let s=e.target??this._cfg.target;if(typeof s=="string"){let a=t.states[s],c=this._prevStates[`__target__${s}`];if(!c||c.state!==a?.state||c.last_updated!==a?.last_updated){n=!0;break}}}n&&(this._elements.container?this._updateBars():this._fullRender(),this._cacheStates(),this._scheduleIndicatorFetch(),this._scheduleSparklineFetch())}_fullRender(){let t=this._cfg;if(!t)return;let n=t.columns??1,e=n>1?` columns-${n}`:"",o=t.entity_row?" entity-row":"",r=t.layout==="compact"?" compact":"",s=[];n>1&&s.push(`--pulse-columns:${n}`),t.gap!==void 0&&s.push(`--pulse-gap:${w(A(t.gap))}`),t.font_size!==void 0&&s.push(`--pulse-font-size:${w(A(t.font_size))}`);let a=s.length>0?` style="${s.join(";")}"`:"",c="";t.title&&(c+=`<div class="pulse-title">${b(t.title)}</div>`),c+=`<div class="pulse-card${e}${o}${r}"${a}>`;for(let u of t.entities)c+=this._renderBarRow(u);c+="</div>";let d=t.entity_row?c:`<ha-card>${c}</ha-card>`,l=this._shadow.querySelector("ha-card, .pulse-card");l&&l.remove();let p=document.createElement("template");p.innerHTML=d,this._shadow.appendChild(p.content.cloneNode(!0)),this._elements.container=this._shadow.querySelector(".pulse-card"),this._cacheBarElements();for(let u of t.entities){let f=this._elements.rows?.[u.entity];f&&(f.style.display=R(u,this._hass)?"":"none")}}_renderBarRow(t){let n=this._cfg,e=H(t,n,this._hass),o=t.positions?.name??n.positions?.name??v.positions.name,r=t.positions?.value??n.positions?.value??v.positions.value,s=t.positions?.icon??n.positions?.icon??v.positions.icon,a=t.positions?.indicator??n.positions?.indicator??v.positions.indicator,d=(t.indicator??n.indicator)?.show===!0&&a==="off"?"outside":a,l=t.animation??{},p=l.speed??n.animation.speed,u=l.effect??n.animation.effect,f=l.state??n.animation.state,m=this._buildIndicatorHtml(t,n,d),h=U(t,this._hass),g=this._buildPositionHtml(e,o,r,s,d,m,"outside",h),x=this._buildPositionHtml(e,o,r,s,d,m,"inside",h),S=w(A(t.height??n.height)),k=w(A(t.border_radius??n.border_radius)),$=e.color?`background-color:${w(e.color)};`:"",D=u==="charge"&&!e.isUnavailable?" charge":"",z=f==="off"?"transition:none;":"",W=C(t,n),B=`width:${e.fill*W}%;${z}${$}`,_=this._buildTargetHtml(t,n,e.min,e.max),ot=this._buildSparklineHtml(t,n),rt=`
      <div class="bar-container" style="height:${S};border-radius:${k};--pulse-animation-speed:${p}s;">
        <div class="bar-track"></div>
        ${ot}
        <div class="bar-fill${D}" data-entity="${b(t.entity)}" style="${B}"></div>
        ${_}
        ${x}
      </div>`,st=e.isUnavailable?`role="progressbar" aria-valuenow="0" aria-valuemin="${e.min}" aria-valuemax="${e.max}" aria-label="${b(e.name)}: Unavailable"`:`role="progressbar" aria-valuenow="${e.numValue}" aria-valuemin="${e.min}" aria-valuemax="${e.max}" aria-label="${b(e.name)}: ${b(e.displayValue)}"`,at=e.isUnavailable?" unavailable":"",lt=e.isUnavailable?'data-state="unavailable"':`data-state="${b(e.numValue)}"`,ct=e.color?` data-severity-color="${b(e.color)}"`:"";return`<div class="bar-row${at}" data-entity="${b(t.entity)}" ${lt}${ct} ${st}>${g}${rt}</div>`}_buildIndicatorHtml(t,n,e){let o=t.indicator??n.indicator;if(!(o?.show===!0&&e!=="off"))return"";let s=this._indicators[t.entity],a=s?.direction??"neutral",c=o?.show_delta===!0&&!!s,d=this._hass?.states[t.entity],l=I(t,d),p=N(t,n,this._hass),{text:u}=V(a,s?.delta??0,c,p,l),f=o?.inverted===!0?" inverted":"";return`<span class="bar-indicator ${a}${f}">${u}</span>`}_buildPositionHtml(t,n,e,o,r,s,a,c){if(n!==a&&e!==a&&o!==a&&r!==a)return"";let l=`<div class="${a==="outside"?"bar-labels":"bar-content"}"><div class="bar-label-left">`;return o===a&&t.resolvedIcon&&(l+=`<ha-icon class="bar-icon" icon="${b(t.resolvedIcon)}"></ha-icon>`),n===a&&(c?(l+='<div class="bar-name-group">',l+=`<span class="bar-name">${b(t.name)}</span>`,l+=`<span class="bar-secondary">${b(c)}</span>`,l+="</div>"):l+=`<span class="bar-name">${b(t.name)}</span>`),l+='</div><div class="bar-label-right">',e===a&&(l+=`<span class="bar-value">${b(t.displayValue)}</span>`),r===a&&s&&(l+=s),l+="</div></div>",l}_buildTargetHtml(t,n,e,o){let r=t.target??n.target,{value:s,showLabel:a}=M(r,this._hass);if(s===null)return"";let c=T((s-e)/(o-e),0,1)*100,d=C(t,n),l=`left:${c*d}%`,p=a?`<span class="bar-target-label">${b(s)}</span>`:"";return`<div class="bar-target" style="${l}">${p}</div>`}_updateBars(){let t=this._cfg;for(let n of t.entities){let e=H(n,t,this._hass),o=C(n,t),r=this._elements.rows?.[n.entity];if(!r)continue;let s=R(n,this._hass);if(r.style.display=s?"":"none",!s)continue;r.classList.toggle("unavailable",e.isUnavailable);let a=r.querySelector(".bar-fill");if(a){let m=`${e.fill*o}%`;a.style.width=m,a.style.backgroundColor=e.color||"";let h=r.querySelector(".bar-sparkline");h&&(h.style.width=`${o*100}%`);let g=r.querySelector(".bar-icon");g&&e.resolvedIcon&&g.setAttribute("icon",e.resolvedIcon)}let c=r.querySelectorAll(".bar-name");for(let m of c)m.textContent=e.name;let d=r.querySelectorAll(".bar-value");for(let m of d)m.textContent=e.displayValue;let l=r.querySelectorAll(".bar-secondary");if(l.length>0){let m=U(n,this._hass);for(let h of l)h.textContent=m}r.setAttribute("aria-valuenow",e.isUnavailable?"0":String(e.numValue)),r.setAttribute("aria-valuemin",String(e.min)),r.setAttribute("aria-valuemax",String(e.max)),r.setAttribute("aria-label",`${b(e.name)}: ${b(e.displayValue)}`),r.setAttribute("data-state",e.isUnavailable?"unavailable":String(e.numValue)),e.color?r.setAttribute("data-severity-color",e.color):r.removeAttribute("data-severity-color");let p=r.querySelector(".bar-target"),u=n.target??t.target,{value:f}=M(u,this._hass);if(f!==null){let m=T((f-e.min)/(e.max-e.min),0,1)*100;if(p){p.style.left=`${m*o}%`,p.style.display="";let h=p.querySelector(".bar-target-label");h&&(h.textContent=String(f))}}else p&&(p.style.display="none")}}_scheduleIndicatorFetch(){let t=this._cfg;!t||!t.entities.some(e=>(e.indicator??t.indicator)?.show===!0)||(this._indicatorTimer&&clearTimeout(this._indicatorTimer),this._indicatorTimer=setTimeout(()=>this._fetchIndicators(),500))}async _fetchIndicators(){let t=this._cfg;if(t)try{let n=new Map;for(let o of t.entities)n.set(o.entity,o);let e=new Map;for(let o of t.entities){let r=o.indicator??t.indicator;if(!r?.show)continue;let s=r.period??60;e.has(s)||e.set(s,[]),e.get(s).push({entity:o.entity,icfg:r})}for(let[o,r]of e){let s=r.map(c=>c.entity),a=await Z(this._hass,s,o);for(let{entity:c,icfg:d}of r){let l=n.get(c),p=this._hass?.states[c],u=l?.attribute?p?.attributes?.[l.attribute]:p?.state,f=J(u,a[c]);this._indicators[c]=f;let m=this._elements.rows?.[c];if(!m)continue;let h=m.querySelector(".bar-indicator");if(h&&l){let g=this._hass?.states[c],x=I(l,g),S=N(l,t,this._hass),{text:k}=V(f.direction,f.delta,d.show_delta===!0,S,x),$=d.inverted===!0?" inverted":"";h.textContent=k,h.className=`bar-indicator ${f.direction}${$}`}}}}catch(n){y("Indicator fetch failed: %O",n)}}_resolveSparklineConfig(t,n){let e=t.sparkline??n.sparkline;if(!e)return null;let o=e===!0?{}:e.show?e:null;if(!o)return null;let r=o.hours_to_show??24,s=o.points_per_hour??1;return{hours:r,pointsPerHour:s,slots:Math.max(r*s,2),aggregateFunc:o.aggregate_func??"avg",smoothing:o.smoothing!==!1,strokeWidth:Number(o.line_width??o.stroke_width??1.5)||1.5,color:o.color??null,updateInterval:o.update_interval??300}}_buildSparklineHtml(t,n){let e=this._resolveSparklineConfig(t,n);if(!e)return"";let o=this._sparklineData[t.entity];if(!o||o.length<2)return"";let r=q(o,200,50,e.slots,e.aggregateFunc,e.smoothing);if(!r)return"";let a=C(t,n)*100,c=e.color?`color:${w(e.color)};`:"";return`<svg class="bar-sparkline" viewBox="0 0 200 50" preserveAspectRatio="none" height="100%" style="${`width:${a}%;${c}`}"><path d="${r}" fill="none" stroke="currentColor" stroke-width="${e.strokeWidth}" /></svg>`}_scheduleSparklineFetch(){let t=this._cfg;if(!t||!t.entities.some(r=>!!this._resolveSparklineConfig(r,t)))return;let e=300;for(let r of t.entities){let s=this._resolveSparklineConfig(r,t);s&&s.updateInterval<e&&(e=s.updateInterval)}(Date.now()-this._sparklineLastFetch)/1e3<e&&this._sparklineLastFetch>0||(this._sparklineTimer&&clearTimeout(this._sparklineTimer),this._sparklineTimer=setTimeout(()=>this._fetchSparklines(),1e3))}async _fetchSparklines(){let t=this._cfg;if(t)try{let n=new Map;for(let e of t.entities){let o=this._resolveSparklineConfig(e,t);if(!o)continue;let r=o.hours;n.has(r)||n.set(r,[]),n.get(r).push(e.entity)}for(let[e,o]of n){let r=await et(this._hass,o,e);for(let s of o)this._sparklineData[s]=r[s]||[]}this._sparklineLastFetch=Date.now(),this._updateSparklines()}catch(n){y("Sparkline fetch failed: %O",n)}}_updateSparklines(){let t=this._cfg;if(t)for(let n of t.entities){let e=this._resolveSparklineConfig(n,t);if(!e)continue;let o=this._elements.rows?.[n.entity];if(!o)continue;let r=this._sparklineData[n.entity];if(!r||r.length<2)continue;let s=q(r,200,50,e.slots,e.aggregateFunc,e.smoothing);if(!s)continue;let a=o.querySelector(".bar-sparkline"),d=`${C(n,t)*100}%`;if(a){let l=a.querySelector("path");l&&l.setAttribute("d",s),a.style.width=d}else{let l=o.querySelector(".bar-container");if(!l)continue;let p=e.color?`color:${w(e.color)};`:"",u=`<svg xmlns="http://www.w3.org/2000/svg" class="bar-sparkline" viewBox="0 0 200 50" preserveAspectRatio="none" height="100%" style="width:${d};${p}"><path d="${s}" fill="none" stroke="currentColor" stroke-width="${e.strokeWidth}" /></svg>`,f=new DOMParser().parseFromString(u,"image/svg+xml"),m=document.importNode(f.documentElement,!0),h=l.querySelector(".bar-track");h&&h.nextSibling?l.insertBefore(m,h.nextSibling):l.appendChild(m)}}}_cacheStates(){let t=this._cfg;this._prevStates={};for(let n of t.entities){let e=this._hass?.states[n.entity];e&&(this._prevStates[n.entity]={state:e.state,last_updated:e.last_updated});let o=n.target??t.target;if(typeof o=="string"){let r=this._hass?.states[o];r&&(this._prevStates[`__target__${o}`]={state:r.state,last_updated:r.last_updated})}}}_cacheBarElements(){let t=this._cfg;this._elements.rows={};let n=new Map;for(let o of t.entities)n.set(o.entity,o);let e=this._shadow.querySelectorAll(".bar-row");for(let o of e){let r=o.dataset.entity;if(r){this._elements.rows[r]=o;let s=n.get(r);s&&it(o,this,this._hass,t,s)}}}getCardSize(){let t=this._config?.entities?.length||1,n=this._config?.columns||1;return Math.ceil(t/n)+(this._config?.title?1:0)}getGridOptions(){let t=this._config?.entities?.length||1,n=this._config?.columns||1,e=Math.ceil(t/n);return{columns:12,min_columns:3,rows:Math.max(1,e),min_rows:1}}static async getConfigElement(){return await import("./editor.js"),document.createElement("pulse-card-editor")}static getStubConfig(t){return{entity:Object.keys(t.states).filter(e=>{let o=t.states[e];return e.startsWith("sensor.")&&!isNaN(parseFloat(o.state))})[0]||"sensor.example"}}};customElements.get("pulse-card")||customElements.define("pulse-card",L);window.customCards=window.customCards||[];window.customCards.push({type:"pulse-card",name:"Pulse Card",description:"Compact horizontal bar chart for sensor data visualization",preview:!0,documentationURL:"https://github.com/hiall-fyi/pulse-card"});console.info(`%c PULSE-CARD %c v${j} `,"background:#03A9F4;color:white;font-weight:bold","background:#333;color:white");var Dt=L;export{Dt as default};
