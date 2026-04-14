var P=`
  :host {
    display: block;
  }

  ha-card {
    overflow: hidden;
    padding: 16px;
    background: var(--pulse-card-background, var(--ha-card-background, var(--card-background-color)));
  }

  .pulse-card {
    display: flex;
    flex-direction: column;
    gap: var(--pulse-gap, 12px);
  }

  /* Multi-column grid */
  .pulse-card[class*="columns-"] {
    display: grid;
    grid-template-columns: repeat(var(--pulse-columns, 1), 1fr);
    gap: var(--pulse-gap, 16px);
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
`;var W="0.3.2",R="Pulse Card:",v={min:0,max:100,height:"8px",border_radius:"4px",decimal:null,entity_row:!1,complementary:!1,limit_value:!1,columns:1,animation:{state:"on",speed:.8,effect:"none"},positions:{icon:"off",name:"outside",value:"outside",indicator:"off"},tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}};function $(i,t,n){return Math.min(Math.max(i,t),n)}function st(i,t,n,e=!1){let o=parseFloat(i);if(isNaN(o))return 0;let r=n-t;if(r<=0)return 0;let s=e?n-o:o;return $((s-t)/r,0,1)*100}function at(i,t){if(!t||t.length===0)return null;let n=parseFloat(i);if(isNaN(n))return null;for(let e of t)if(n>=e.from&&n<=e.to)return e;return null}function O(i){let t=i.replace("#","");return t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:parseInt(t.substring(0,2),16),g:parseInt(t.substring(2,4),16),b:parseInt(t.substring(4,6),16)}}function lt(i,t,n){let e=O(i),o=O(t),r=Math.round(e.r+(o.r-e.r)*n),s=Math.round(e.g+(o.g-e.g)*n),a=Math.round(e.b+(o.b-e.b)*n);return`rgb(${r}, ${s}, ${a})`}function ct(i,t){if(!t||t.length<2)return null;let n=parseFloat(i);if(isNaN(n))return null;let e=t[0].from<=t[t.length-1].from?t:[...t].sort((o,r)=>o.from-r.from);for(let o=0;o<e.length-1;o++){let r=e[o],s=e[o+1];if(n>=r.from&&n<=s.to){let a=s.from-r.from,l=a>0?(n-r.from)/a:0;return lt(r.color,s.color,$(l,0,1))}}return n<=e[0].from?e[0].color:e[e.length-1].color}function ut(i,t){let n=i.min,e=i.max;return n==null&&(n=t?.attributes?.min??v.min),e==null&&(e=t?.attributes?.max??v.max),{min:parseFloat(String(n)),max:parseFloat(String(e))}}function N(i,t,n){return i.decimal??t.decimal??n?.entities?.[i.entity]?.display_precision??null}function L(i,t){return i.unit_of_measurement??t?.attributes?.unit_of_measurement??""}function dt(i,t,n){let e=parseFloat(i);if(isNaN(e))return String(i);let o=t!=null?e.toFixed(t):e.toString();return n?`${o}${n}`:o}function j(i,t){if(t==null)return{direction:"neutral",delta:0};let n=parseFloat(i),e=parseFloat(t);if(isNaN(n)||isNaN(e))return{direction:"neutral",delta:0};if(!isFinite(n)||!isFinite(e))return{direction:"neutral",delta:0};let o=Math.abs(n-e),r=Math.max(Math.abs(n),1);if(o>r*1e3)return{direction:"neutral",delta:0};let s=Math.round((n-e)*100)/100;return{direction:s>0?"up":s<0?"down":"neutral",delta:s}}function z(i,t,n,e,o){let r=i==="up"?"\u25B2":i==="down"?"\u25BC":"\u25B6";if(!n)return{arrow:r,text:r};let s=e!=null?t.toFixed(e):String(Math.round(t*100)/100),a=t>0?"+":"";return{arrow:r,text:`${r} ${a}${s}${o||""}`}}function x(i){return i==null||i===""?"":String(i).replace(/[;{}]/g,"").replace(/url\s*\(/gi,"").replace(/expression\s*\(/gi,"").replace(/-moz-binding\s*:/gi,"")}function S(i,...t){console.warn(`${R} ${i}`,...t)}async function X(i,t,n=60){let e={};if(!i?.callWS||t.length===0)return e;let o=new Date,r=new Date(o.getTime()-n*60*1e3);try{let s=await i.callWS({type:"history/history_during_period",start_time:r.toISOString(),end_time:o.toISOString(),entity_ids:t,minimal_response:!0,significant_changes_only:!0});for(let a of t){let l=s?.[a];if(!l||l.length===0){e[a]=null;continue}let u=parseFloat(l[0].s);e[a]=isNaN(u)?null:u}}catch(s){S("Failed to fetch history for %s: %O",t.join(", "),s);for(let a of t)e[a]=null}return e}function I(i){if(i==null||i==="")return"";let t=String(i);return/^\d+(\.\d+)?$/.test(t)?`${t}px`:t}function b(i){return String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function B(i){return!Array.isArray(i)||i.length<2?i:[...i].sort((t,n)=>t.from-n.from)}function Y(i){if(!i)throw new Error("Please define an entity or entities");if(!i.entity&&!i.entities)throw new Error("Please define an entity or entities");let t={...v,...i,animation:{...v.animation,...i.animation},positions:{...v.positions,...i.positions}};t.columns!=null&&(t.columns=Number(t.columns)||1),t.animation.speed!=null&&(t.animation.speed=Number(t.animation.speed)||v.animation.speed),t.severity&&(t.severity=B(t.severity)),t.entities=i.entities?i.entities.map(e=>{let o=typeof e=="string"?{entity:e}:{...e};return o.severity&&(o.severity=B(o.severity)),o}):[{entity:i.entity}];let n=new Set;for(let e of t.entities)n.has(e.entity)&&S('Duplicate entity "%s" in config \u2014 only the last bar will update dynamically',e.entity),n.add(e.entity);return t}function A(i,t){if(i==null)return{value:null,showLabel:!1};if(typeof i=="number")return{value:isNaN(i)?null:i,showLabel:!1};if(typeof i=="string"){let n=t?.states[i];if(!n)return{value:null,showLabel:!1};let e=parseFloat(n.state);return{value:isNaN(e)?null:e,showLabel:!1}}return typeof i=="object"&&i.value!==void 0?{value:A(i.value,t).value,showLabel:i.show_label===!0}:{value:null,showLabel:!1}}function D(i,t,n){let e=n?.states[i.entity],o=!e||e.state==="unavailable"||e.state==="unknown"||e.state==="error",{min:r,max:s}=ut(i,e),a=i.attribute?e?.attributes?.[i.attribute]:e?.state,l=parseFloat(a),u=i.complementary??t.complementary,c=o?0:st(a,r,s,u),f=L(i,e),d=N(i,t,n),m=(i.limit_value??t.limit_value)&&!isNaN(l)?$(l,r,s):a,h=o?"Unavailable":dt(m,d,f),g=i.name??e?.attributes?.friendly_name??i.entity,y="",w="";if(!o){let k=i.severity??t.severity;if(k&&k.length>0)if(k.some(_=>_.mode==="gradient")){let _=ct(l,k);_&&(y=_)}else{let _=at(l,k);_&&(y=_.color,_.icon&&(w=_.icon))}}let T=y||i.color||t.color||"",C=i.icon||e?.attributes?.icon||"";return{isUnavailable:o,min:r,max:s,numValue:l,fill:c,displayValue:h,name:g,color:T,resolvedIcon:w||C}}function F(i,t){let n=i.bar_width??t.bar_width;return n!=null?Math.max(1,Math.min(100,n))/100:1}async function K(i,t,n=24){let e={};if(!i?.callWS||t.length===0)return e;let o=new Date,r=new Date(o.getTime()-n*60*60*1e3);try{let s=await i.callWS({type:"history/history_during_period",start_time:r.toISOString(),end_time:o.toISOString(),entity_ids:t,minimal_response:!0,significant_changes_only:!0});for(let a of t){let l=s?.[a];if(!l||l.length<2){e[a]=[];continue}let u=[];for(let c of l){let f=parseFloat(c.s);if(!isNaN(f)){let d=c.lu??c.last_updated,p=typeof d=="number"?d*1e3:new Date(d).getTime();u.push({t:p,v:f})}}e[a]=u}}catch(s){S("Sparkline fetch failed: %O",s);for(let a of t)e[a]=[]}return e}var G={avg:i=>i.reduce((t,n)=>t+n,0)/i.length,min:i=>Math.min(...i),max:i=>Math.max(...i),median:i=>{let t=[...i].sort((e,o)=>e-o),n=Math.floor(t.length/2);return t.length%2?t[n]:(t[n-1]+t[n])/2},first:i=>i[0],last:i=>i[i.length-1],sum:i=>i.reduce((t,n)=>t+n,0),delta:i=>Math.max(...i)-Math.min(...i),diff:i=>i[i.length-1]-i[0]};function pt(i,t,n="avg"){if(i.length===0||t<1)return[];if(i.length<=t){let f=i[0].t,d=i[i.length-1].t-f||1;return i.map(p=>({x:(p.t-f)/d,v:p.v}))}let e=G[n]||G.avg,o=i[0].t,a=(i[i.length-1].t-o||1)/t,l=[],u=0,c=i[0].v;for(let f=0;f<t;f++){let d=o+(f+1)*a,p=[];for(;u<i.length&&i[u].t<d;)p.push(i[u].v),u++;p.length>0&&(c=e(p)),l.push({x:f/(t-1||1),v:c})}return l}function V(i,t,n,e=24,o="avg",r=!0){if(i.length<2)return"";let s=pt(i,e,o);if(s.length<2)return"";let a=s[0].v,l=s[0].v;for(let h=1;h<s.length;h++)s[h].v<a&&(a=s[h].v),s[h].v>l&&(l=s[h].v);let u=l-a||1,c=2,f=n-c*2,d=s.map(h=>({x:h.x*t,y:c+f-(h.v-a)/u*f}));if(d.length===2||!r){let h=`M${d[0].x.toFixed(1)},${d[0].y.toFixed(1)}`;for(let g=1;g<d.length;g++)h+=`L${d[g].x.toFixed(1)},${d[g].y.toFixed(1)}`;return h}let p=d[0],m=`M${p.x.toFixed(1)},${p.y.toFixed(1)}`;for(let h=1;h<d.length;h++){let g=d[h],y=(p.x+g.x)/2,w=(p.y+g.y)/2;m+=` ${y.toFixed(1)},${w.toFixed(1)}`,m+=` Q${g.x.toFixed(1)},${g.y.toFixed(1)}`,p=g}return m+=` ${p.x.toFixed(1)},${p.y.toFixed(1)}`,m}function H(i,t){if(!i.visibility)return!0;let n=t?.states[i.entity];if(!n)return!1;let e=i.visibility,o=i.attribute?n.attributes?.[i.attribute]:n.state;if(!i.attribute&&(n.state==="unavailable"||n.state==="unknown"||n.state==="error"))return e.state_equal!==void 0&&String(e.state_equal)===n.state;let r=parseFloat(o);return!(e.state_above!==void 0&&(isNaN(r)||r<=e.state_above)||e.state_below!==void 0&&(isNaN(r)||r>=e.state_below)||e.state_equal!==void 0&&String(o)!==String(e.state_equal)||e.state_not_equal!==void 0&&String(o)===String(e.state_not_equal))}var ft=250,ht=500;function Q(i,t,n){i.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:n}))}function mt(i,t,n,e){if(!(!n||n.action==="none"))switch(n.action){case"more-info":Q(i,"hass-more-info",{entityId:n.entity||e});break;case"navigate":history.pushState(null,"",n.navigation_path),Q(i,"location-changed",{replace:!1});break;case"call-service":case"perform-action":{let o=n.service||n.perform_action;if(!o)break;let[r,s]=o.split(".");t.callService(r,s,n.service_data||n.data).catch(a=>S("Service call %s failed: %O",o,a));break}case"url":n.url_path&&window.open(n.url_path,"_blank","noopener,noreferrer");break}}function gt(i,t,n){let e=t?.[i],o=n?.[i];return e||o||{action:i==="tap_action"?"more-info":"none"}}function E(i,t,n,e,o){let r=gt(o,e,n);mt(i,t,r,e.entity)}function q(i){let t=i.__pulseCleanup;typeof t=="function"&&t()}function J(i,t,n,e,o){q(i);let r=new AbortController,{signal:s}=r,a=0,l=null,u=null,c=!1;i.__pulseCleanup=()=>{r.abort(),l&&clearTimeout(l),u&&clearTimeout(u),delete i.__pulseCleanup},i.setAttribute("tabindex","0"),i.addEventListener("keydown",d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),n&&E(t,n,e,o,"tap_action"))},{signal:s}),i.addEventListener("click",d=>{if(d.preventDefault(),c){c=!1;return}a++,a===1?l=setTimeout(()=>{a=0,n&&E(t,n,e,o,"tap_action")},ft):a===2&&(l&&clearTimeout(l),a=0,n&&E(t,n,e,o,"double_tap_action"))},{signal:s}),i.addEventListener("pointerdown",()=>{c=!1,u=setTimeout(()=>{c=!0,n&&E(t,n,e,o,"hold_action")},ht)},{signal:s});let f=()=>{u&&clearTimeout(u)};i.addEventListener("pointerup",f,{signal:s}),i.addEventListener("pointercancel",f,{signal:s}),i.addEventListener("contextmenu",d=>d.preventDefault(),{signal:s})}var M=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_elements={};_indicators={};_indicatorTimer=null;_sparklineData={};_sparklineTimer=null;_sparklineLastFetch=0;_shadow;constructor(){super(),this._shadow=this.attachShadow({mode:"open"});let t=document.createElement("style");t.textContent=P,this._shadow.appendChild(t)}get _cfg(){return this._config}disconnectedCallback(){this._indicatorTimer&&(clearTimeout(this._indicatorTimer),this._indicatorTimer=null),this._sparklineTimer&&(clearTimeout(this._sparklineTimer),this._sparklineTimer=null);let t=this._shadow.querySelectorAll(".bar-row");for(let n of t)q(n)}setConfig(t){this._config=Y(t),this._elements={},this._sparklineData={},this._sparklineLastFetch=0,this._indicators={},this._hass&&(this._fullRender(),this._scheduleIndicatorFetch(),this._scheduleSparklineFetch())}set hass(t){if(this._hass=t,!this._config)return;let n=!1;for(let e of this._cfg.entities){let o=t.states[e.entity],r=this._prevStates[e.entity];if(!r||r.state!==o?.state||r.last_updated!==o?.last_updated){n=!0;break}let s=e.target??this._cfg.target;if(typeof s=="string"){let a=t.states[s],l=this._prevStates[`__target__${s}`];if(!l||l.state!==a?.state||l.last_updated!==a?.last_updated){n=!0;break}}}n&&(this._elements.container?this._updateBars():this._fullRender(),this._cacheStates(),this._scheduleIndicatorFetch(),this._scheduleSparklineFetch())}_fullRender(){let t=this._cfg;if(!t)return;let n=t.columns??1,e=n>1?` columns-${n}`:"",o=t.entity_row?" entity-row":"",r=t.layout==="compact"?" compact":"",s=[];n>1&&s.push(`--pulse-columns:${n}`),t.gap!==void 0&&s.push(`--pulse-gap:${x(I(t.gap))}`),t.font_size!==void 0&&s.push(`--pulse-font-size:${x(I(t.font_size))}`);let a=s.length>0?` style="${s.join(";")}"`:"",l="";t.title&&(l+=`<div class="pulse-title">${b(t.title)}</div>`),l+=`<div class="pulse-card${e}${o}${r}"${a}>`;for(let d of t.entities)l+=this._renderBarRow(d);l+="</div>";let u=t.entity_row?l:`<ha-card>${l}</ha-card>`,c=this._shadow.querySelector("ha-card, .pulse-card");c&&c.remove();let f=document.createElement("template");f.innerHTML=u,this._shadow.appendChild(f.content.cloneNode(!0)),this._elements.container=this._shadow.querySelector(".pulse-card"),this._cacheBarElements();for(let d of t.entities){let p=this._elements.rows?.[d.entity];p&&(p.style.display=H(d,this._hass)?"":"none")}}_renderBarRow(t){let n=this._cfg,e=D(t,n,this._hass),o=t.positions?.name??n.positions?.name??v.positions.name,r=t.positions?.value??n.positions?.value??v.positions.value,s=t.positions?.icon??n.positions?.icon??v.positions.icon,a=t.positions?.indicator??n.positions?.indicator??v.positions.indicator,u=(t.indicator??n.indicator)?.show===!0&&a==="off"?"outside":a,c=t.animation??{},f=c.speed??n.animation.speed,d=c.effect??n.animation.effect,p=c.state??n.animation.state,m=this._buildIndicatorHtml(t,n,u),h=this._buildPositionHtml(e,o,r,s,u,m,"outside"),g=this._buildPositionHtml(e,o,r,s,u,m,"inside"),y=x(I(t.height??n.height)),w=x(I(t.border_radius??n.border_radius)),T=e.color?`background-color:${x(e.color)};`:"",C=d==="charge"&&!e.isUnavailable?" charge":"",U=p==="off"?"transition:none;":"",k=F(t,n),_=`width:${e.fill*k}%;${U}${T}`,tt=this._buildTargetHtml(t,n,e.min,e.max),et=this._buildSparklineHtml(t,n),nt=`
      <div class="bar-container" style="height:${y};border-radius:${w};--pulse-animation-speed:${f}s;">
        <div class="bar-track"></div>
        ${et}
        <div class="bar-fill${C}" data-entity="${b(t.entity)}" style="${_}"></div>
        ${tt}
        ${g}
      </div>`,it=e.isUnavailable?`role="progressbar" aria-valuenow="0" aria-valuemin="${e.min}" aria-valuemax="${e.max}" aria-label="${b(e.name)}: Unavailable"`:`role="progressbar" aria-valuenow="${e.numValue}" aria-valuemin="${e.min}" aria-valuemax="${e.max}" aria-label="${b(e.name)}: ${b(e.displayValue)}"`,ot=e.isUnavailable?" unavailable":"",rt=e.isUnavailable?'data-state="unavailable"':`data-state="${b(e.numValue)}"`;return`<div class="bar-row${ot}" data-entity="${b(t.entity)}" ${rt} ${it}>${h}${nt}</div>`}_buildIndicatorHtml(t,n,e){let o=t.indicator??n.indicator;if(!(o?.show===!0&&e!=="off"))return"";let s=this._indicators[t.entity],a=s?.direction??"neutral",l=o?.show_delta===!0&&!!s,u=this._hass?.states[t.entity],c=L(t,u),f=N(t,n,this._hass),{text:d}=z(a,s?.delta??0,l,f,c),p=o?.inverted===!0?" inverted":"";return`<span class="bar-indicator ${a}${p}">${d}</span>`}_buildPositionHtml(t,n,e,o,r,s,a){if(n!==a&&e!==a&&o!==a&&r!==a)return"";let u=`<div class="${a==="outside"?"bar-labels":"bar-content"}"><div class="bar-label-left">`;return o===a&&t.resolvedIcon&&(u+=`<ha-icon class="bar-icon" icon="${b(t.resolvedIcon)}"></ha-icon>`),n===a&&(u+=`<span class="bar-name">${b(t.name)}</span>`),u+='</div><div class="bar-label-right">',e===a&&(u+=`<span class="bar-value">${b(t.displayValue)}</span>`),r===a&&s&&(u+=s),u+="</div></div>",u}_buildTargetHtml(t,n,e,o){let r=t.target??n.target,{value:s,showLabel:a}=A(r,this._hass);if(s===null)return"";let l=$((s-e)/(o-e),0,1)*100,u=F(t,n),c=`left:${l*u}%`,f=a?`<span class="bar-target-label">${b(s)}</span>`:"";return`<div class="bar-target" style="${c}">${f}</div>`}_updateBars(){let t=this._cfg;for(let n of t.entities){let e=D(n,t,this._hass),o=F(n,t),r=this._elements.rows?.[n.entity];if(!r)continue;let s=H(n,this._hass);if(r.style.display=s?"":"none",!s)continue;r.classList.toggle("unavailable",e.isUnavailable);let a=r.querySelector(".bar-fill");if(a){let p=`${e.fill*o}%`;a.style.width=p,a.style.backgroundColor=e.color||"";let m=r.querySelector(".bar-sparkline");m&&(m.style.width=`${o*100}%`);let h=r.querySelector(".bar-icon");h&&e.resolvedIcon&&h.setAttribute("icon",e.resolvedIcon)}let l=r.querySelectorAll(".bar-name");for(let p of l)p.textContent=e.name;let u=r.querySelectorAll(".bar-value");for(let p of u)p.textContent=e.displayValue;r.setAttribute("aria-valuenow",e.isUnavailable?"0":String(e.numValue)),r.setAttribute("aria-valuemin",String(e.min)),r.setAttribute("aria-valuemax",String(e.max)),r.setAttribute("aria-label",`${b(e.name)}: ${b(e.displayValue)}`),r.setAttribute("data-state",e.isUnavailable?"unavailable":String(e.numValue));let c=r.querySelector(".bar-target"),f=n.target??t.target,{value:d}=A(f,this._hass);if(d!==null){let p=$((d-e.min)/(e.max-e.min),0,1)*100;if(c){c.style.left=`${p*o}%`,c.style.display="";let m=c.querySelector(".bar-target-label");m&&(m.textContent=String(d))}}else c&&(c.style.display="none")}}_scheduleIndicatorFetch(){let t=this._cfg;!t||!t.entities.some(e=>(e.indicator??t.indicator)?.show===!0)||(this._indicatorTimer&&clearTimeout(this._indicatorTimer),this._indicatorTimer=setTimeout(()=>this._fetchIndicators(),500))}async _fetchIndicators(){let t=this._cfg;if(t)try{let n=new Map;for(let o of t.entities)n.set(o.entity,o);let e=new Map;for(let o of t.entities){let r=o.indicator??t.indicator;if(!r?.show)continue;let s=r.period??60;e.has(s)||e.set(s,[]),e.get(s).push({entity:o.entity,icfg:r})}for(let[o,r]of e){let s=r.map(l=>l.entity),a=await X(this._hass,s,o);for(let{entity:l,icfg:u}of r){let c=n.get(l),f=this._hass?.states[l],d=c?.attribute?f?.attributes?.[c.attribute]:f?.state,p=j(d,a[l]);this._indicators[l]=p;let m=this._elements.rows?.[l];if(!m)continue;let h=m.querySelector(".bar-indicator");if(h&&c){let g=this._hass?.states[l],y=L(c,g),w=N(c,t,this._hass),{text:T}=z(p.direction,p.delta,u.show_delta===!0,w,y),C=u.inverted===!0?" inverted":"";h.textContent=T,h.className=`bar-indicator ${p.direction}${C}`}}}}catch(n){S("Indicator fetch failed: %O",n)}}_resolveSparklineConfig(t,n){let e=t.sparkline??n.sparkline;if(!e)return null;let o=e===!0?{}:e.show?e:null;if(!o)return null;let r=o.hours_to_show??24,s=o.points_per_hour??1;return{hours:r,pointsPerHour:s,slots:Math.max(r*s,2),aggregateFunc:o.aggregate_func??"avg",smoothing:o.smoothing!==!1,strokeWidth:Number(o.line_width??o.stroke_width??1.5)||1.5,color:o.color??null,updateInterval:o.update_interval??300}}_buildSparklineHtml(t,n){let e=this._resolveSparklineConfig(t,n);if(!e)return"";let o=this._sparklineData[t.entity];if(!o||o.length<2)return"";let r=V(o,200,50,e.slots,e.aggregateFunc,e.smoothing);if(!r)return"";let a=F(t,n)*100,l=e.color?`color:${x(e.color)};`:"";return`<svg class="bar-sparkline" viewBox="0 0 200 50" preserveAspectRatio="none" height="100%" style="${`width:${a}%;${l}`}"><path d="${r}" fill="none" stroke="currentColor" stroke-width="${e.strokeWidth}" /></svg>`}_scheduleSparklineFetch(){let t=this._cfg;if(!t||!t.entities.some(r=>!!this._resolveSparklineConfig(r,t)))return;let e=300;for(let r of t.entities){let s=this._resolveSparklineConfig(r,t);s&&s.updateInterval<e&&(e=s.updateInterval)}(Date.now()-this._sparklineLastFetch)/1e3<e&&this._sparklineLastFetch>0||(this._sparklineTimer&&clearTimeout(this._sparklineTimer),this._sparklineTimer=setTimeout(()=>this._fetchSparklines(),1e3))}async _fetchSparklines(){let t=this._cfg;if(t)try{let n=new Map;for(let e of t.entities){let o=this._resolveSparklineConfig(e,t);if(!o)continue;let r=o.hours;n.has(r)||n.set(r,[]),n.get(r).push(e.entity)}for(let[e,o]of n){let r=await K(this._hass,o,e);for(let s of o)this._sparklineData[s]=r[s]||[]}this._sparklineLastFetch=Date.now(),this._updateSparklines()}catch(n){S("Sparkline fetch failed: %O",n)}}_updateSparklines(){let t=this._cfg;if(t)for(let n of t.entities){let e=this._resolveSparklineConfig(n,t);if(!e)continue;let o=this._elements.rows?.[n.entity];if(!o)continue;let r=this._sparklineData[n.entity];if(!r||r.length<2)continue;let s=V(r,200,50,e.slots,e.aggregateFunc,e.smoothing);if(!s)continue;let a=o.querySelector(".bar-sparkline"),u=`${F(n,t)*100}%`;if(a){let c=a.querySelector("path");c&&c.setAttribute("d",s),a.style.width=u}else{let c=o.querySelector(".bar-container");if(!c)continue;let f=e.color?`color:${x(e.color)};`:"",d=`<svg xmlns="http://www.w3.org/2000/svg" class="bar-sparkline" viewBox="0 0 200 50" preserveAspectRatio="none" height="100%" style="width:${u};${f}"><path d="${s}" fill="none" stroke="currentColor" stroke-width="${e.strokeWidth}" /></svg>`,p=new DOMParser().parseFromString(d,"image/svg+xml"),m=document.importNode(p.documentElement,!0),h=c.querySelector(".bar-track");h&&h.nextSibling?c.insertBefore(m,h.nextSibling):c.appendChild(m)}}}_cacheStates(){let t=this._cfg;this._prevStates={};for(let n of t.entities){let e=this._hass?.states[n.entity];e&&(this._prevStates[n.entity]={state:e.state,last_updated:e.last_updated});let o=n.target??t.target;if(typeof o=="string"){let r=this._hass?.states[o];r&&(this._prevStates[`__target__${o}`]={state:r.state,last_updated:r.last_updated})}}}_cacheBarElements(){let t=this._cfg;this._elements.rows={};let n=new Map;for(let o of t.entities)n.set(o.entity,o);let e=this._shadow.querySelectorAll(".bar-row");for(let o of e){let r=o.dataset.entity;if(r){this._elements.rows[r]=o;let s=n.get(r);s&&J(o,this,this._hass,t,s)}}}getCardSize(){let t=this._config?.entities?.length||1,n=this._config?.columns||1;return Math.ceil(t/n)+(this._config?.title?1:0)}getGridOptions(){let t=this._config?.entities?.length||1,n=this._config?.columns||1,e=Math.ceil(t/n);return{columns:12,min_columns:3,rows:Math.max(1,e),min_rows:1}}static async getConfigElement(){return await import("./editor.js"),document.createElement("pulse-card-editor")}static getStubConfig(t){return{entity:Object.keys(t.states).filter(e=>{let o=t.states[e];return e.startsWith("sensor.")&&!isNaN(parseFloat(o.state))})[0]||"sensor.example"}}};customElements.get("pulse-card")||customElements.define("pulse-card",M);window.customCards=window.customCards||[];window.customCards.push({type:"pulse-card",name:"Pulse Card",description:"Compact horizontal bar chart for sensor data visualization",preview:!0,documentationURL:"https://github.com/hiall-fyi/pulse-card"});console.info(`%c PULSE-CARD %c v${W} `,"background:#03A9F4;color:white;font-weight:bold","background:#333;color:white");var Tt=M;export{Tt as default};
