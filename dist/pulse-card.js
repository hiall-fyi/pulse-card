var tt=`
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

  /* Inside bar \u2014 inherit text color from parent, reduce opacity */
  .bar-content .bar-secondary {
    color: var(--pulse-secondary-color, inherit);
    opacity: 0.6;
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
    color: var(--pulse-sparkline-color, var(--primary-text-color));
  }
  .bar-sparkline path {
    vector-effect: non-scaling-stroke;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* Interactive slider bars */
  .bar-row[data-interactive] .bar-container {
    touch-action: none;
    cursor: pointer;
  }
  .bar-row[data-interactive].sliding .bar-container {
    cursor: grabbing;
  }
  .bar-row[data-interactive].sliding .bar-fill {
    transition: none;
  }

  /* Step buttons for interactive bars */
  .bar-step-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    min-width: 28px;
    height: 100%;
    cursor: pointer;
    opacity: 0.6;
    color: var(--primary-text-color);
    font-size: 18px;
    font-weight: 500;
    user-select: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
    transition: opacity 0.15s;
  }
  .bar-step-btn:hover {
    opacity: 1;
  }
  .bar-step-btn:active {
    opacity: 0.4;
  }

  /* Interactive bar row layout \u2014 bar-container between step buttons */
  .bar-row[data-interactive] .bar-interactive-row {
    display: flex;
    align-items: stretch;
    gap: 2px;
  }
  .bar-row[data-interactive] .bar-interactive-row .bar-container {
    flex: 1;
    min-width: 0;
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
`;var et="0.5.0",nt="Pulse Card:",I={min:0,max:100,height:"8px",border_radius:"4px",decimal:null,entity_row:!1,complementary:!1,limit_value:!1,columns:1,animation:{state:"on",speed:.8,effect:"none"},positions:{icon:"off",name:"outside",value:"outside",indicator:"off"},tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}};var yt=new Set(["on","open","home","locked","playing","active"]),wt=new Set(["off","closed","not_home","unlocked","idle","paused","standby"]);function at(i,t,n){if(typeof i!="string")return null;let e=i.toLowerCase();return yt.has(e)?n:wt.has(e)?t:null}function xt(i,t){let n=String(i),e=n.charAt(0).toUpperCase()+n.slice(1);return t?`${e}${t}`:e}function A(i,t,n){return Math.min(Math.max(i,t),n)}function St(i,t,n,e=!1){let r=at(i,t,n),s=r!==null?r:parseFloat(i);if(isNaN(s))return 0;let a=n-t;if(a<=0)return 0;let o=e?n-s:s;return A((o-t)/a,0,1)*100}function kt(i,t){if(!t||t.length===0)return null;let n=parseFloat(i);if(isNaN(n))return null;for(let e of t)if(n>=e.from&&n<=e.to)return e;return null}function it(i){let t=i.replace("#","");return t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:parseInt(t.substring(0,2),16),g:parseInt(t.substring(2,4),16),b:parseInt(t.substring(4,6),16)}}function $t(i,t,n){let e=it(i),r=it(t),s=Math.round(e.r+(r.r-e.r)*n),a=Math.round(e.g+(r.g-e.g)*n),o=Math.round(e.b+(r.b-e.b)*n);return`rgb(${s}, ${a}, ${o})`}function Ft(i,t){if(!t||t.length<2)return null;let n=parseFloat(i);if(isNaN(n))return null;let e=t[0].from<=t[t.length-1].from?t:[...t].sort((r,s)=>r.from-s.from);for(let r=0;r<e.length-1;r++){let s=e[r],a=e[r+1];if(n>=s.from&&n<=a.to){let o=a.from-s.from,c=o>0?(n-s.from)/o:0;return $t(s.color,a.color,A(c,0,1))}}return n<=e[0].from?e[0].color:e[e.length-1].color}function It(i,t){let n=i.min,e=i.max;return n==null&&(n=t?.attributes?.min??t?.attributes?.min_temp??I.min),e==null&&(e=t?.attributes?.max??t?.attributes?.max_temp??I.max),{min:parseFloat(String(n)),max:parseFloat(String(e))}}function H(i,t,n){return i.decimal??t.decimal??n?.entities?.[i.entity]?.display_precision??null}function V(i,t){return i.unit_of_measurement??t?.attributes?.unit_of_measurement??""}function Tt(i,t,n){let e=parseFloat(i);if(isNaN(e))return String(i);let r=t!=null?e.toFixed(t):e.toString();return n?`${r}${n}`:r}function ot(i,t){if(t==null)return{direction:"neutral",delta:0};let n=parseFloat(i),e=parseFloat(t);if(isNaN(n)||isNaN(e))return{direction:"neutral",delta:0};if(!isFinite(n)||!isFinite(e))return{direction:"neutral",delta:0};let r=Math.abs(n-e),s=Math.max(Math.abs(n),1);if(r>s*1e3)return{direction:"neutral",delta:0};let a=Math.round((n-e)*100)/100;return{direction:a>0?"up":a<0?"down":"neutral",delta:a}}function G(i,t,n,e,r){let s=i==="up"?"\u25B2":i==="down"?"\u25BC":"\u25B6";if(!n)return{arrow:s,text:s};let a=e!=null?t.toFixed(e):String(Math.round(t*100)/100),o=t>0?"+":"";return{arrow:s,text:`${s} ${o}${a}${r||""}`}}function N(i){return i==null||i===""?"":String(i).replace(/[;{}]/g,"").replace(/url\s*\(/gi,"").replace(/expression\s*\(/gi,"").replace(/-moz-binding\s*:/gi,"")}function T(i,...t){console.warn(`${nt} ${i}`,...t)}async function lt(i,t,n=60){let e={};if(!i?.callWS||t.length===0)return e;let r=new Date,s=new Date(r.getTime()-n*60*1e3);try{let a=await i.callWS({type:"history/history_during_period",start_time:s.toISOString(),end_time:r.toISOString(),entity_ids:t,minimal_response:!0,significant_changes_only:!0});for(let o of t){let c=a?.[o];if(!c||c.length===0){e[o]=null;continue}let d=parseFloat(c[0].s);e[o]=isNaN(d)?null:d}}catch(a){T("Failed to fetch history for %s: %O",t.join(", "),a);for(let o of t)e[o]=null}return e}function z(i){if(i==null||i==="")return"";let t=String(i);return/^\d+(\.\d+)?$/.test(t)?`${t}px`:t}function x(i){return String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function rt(i){return!Array.isArray(i)||i.length<2?i:[...i].sort((t,n)=>t.from-n.from)}function ct(i){if(!i)throw new Error("Please define an entity or entities");if(!i.entity&&!i.entities)throw new Error("Please define an entity or entities");let t={...I,...i,animation:{...I.animation,...i.animation},positions:{...I.positions,...i.positions}};t.columns!==null&&t.columns!==void 0&&(t.columns=Number(t.columns)||1),t.animation.speed!==null&&t.animation.speed!==void 0&&(t.animation.speed=Number(t.animation.speed)||I.animation.speed),t.severity&&(t.severity=rt(t.severity)),t.entities=i.entities?i.entities.map(e=>{let r=typeof e=="string"?{entity:e}:{...e};return r.severity&&(r.severity=rt(r.severity)),r}):[{entity:i.entity}];let n=new Set;for(let e of t.entities)n.has(e.entity)&&T('Duplicate entity "%s" in config \u2014 only the last bar will update dynamically',e.entity),n.add(e.entity);return t}function U(i,t){if(i==null)return{value:null,showLabel:!1};if(typeof i=="number")return{value:isNaN(i)?null:i,showLabel:!1};if(typeof i=="string"){let n=t?.states[i];if(!n)return{value:null,showLabel:!1};let e=parseFloat(n.state);return{value:isNaN(e)?null:e,showLabel:!1}}return typeof i=="object"&&i.value!==void 0?{value:U(i.value,t).value,showLabel:i.show_label===!0}:{value:null,showLabel:!1}}function K(i,t,n){let e=n?.states[i.entity],r=!e||e.state==="unavailable"||e.state==="unknown"||e.state==="error",{min:s,max:a}=It(i,e),o=i.attribute?e?.attributes?.[i.attribute]:e?.state,c=i.attribute?null:at(o,s,a),d=c!==null,l=d?c:parseFloat(o),h=i.complementary??t.complementary,p=r?0:St(o,s,a,h),m=V(i,e),v=H(i,t,n),_=(i.limit_value??t.limit_value)&&!isNaN(l)?A(l,s,a):o,L=r?"Unavailable":i.state_map?.[o]?i.state_map[o]:d?xt(o,m):Tt(_,v,m),u=i.name??e?.attributes?.friendly_name??i.entity,b="",g="";if(!r){let w=i.state_color,S=e?.state;if(w&&S&&w[S])b=w[S];else{let k=i.severity??t.severity;if(k&&k.length>0)if(k.some($=>$.mode==="gradient")){let $=Ft(l,k);$&&(b=$)}else{let $=kt(l,k);$&&(b=$.color,$.icon&&(g=$.icon))}}}let y=b||i.color||t.color||"",C=i.icon||e?.attributes?.icon||"";return{isUnavailable:r,min:s,max:a,numValue:l,fill:p,displayValue:L,name:u,color:y,resolvedIcon:g||C}}function R(i,t){let n=i.bar_width??t.bar_width;return n!=null?Math.max(1,Math.min(100,n))/100:1}async function ut(i,t,n=24){let e={};if(!i?.callWS||t.length===0)return e;let r=new Date,s=new Date(r.getTime()-n*60*60*1e3);try{let a=await i.callWS({type:"history/history_during_period",start_time:s.toISOString(),end_time:r.toISOString(),entity_ids:t,minimal_response:!0,significant_changes_only:!0});for(let o of t){let c=a?.[o];if(!c||c.length<2){e[o]=[];continue}let d=[];for(let l of c){let h=parseFloat(l.s);if(!isNaN(h)){let p=l.lu??l.last_updated,m=typeof p=="number"?p*1e3:new Date(p).getTime();d.push({t:m,v:h})}}e[o]=d}}catch(a){T("Sparkline fetch failed: %O",a);for(let o of t)e[o]=[]}return e}var st={avg:i=>i.reduce((t,n)=>t+n,0)/i.length,min:i=>Math.min(...i),max:i=>Math.max(...i),median:i=>{let t=[...i].sort((e,r)=>e-r),n=Math.floor(t.length/2);return t.length%2?t[n]:(t[n-1]+t[n])/2},first:i=>i[0],last:i=>i[i.length-1],sum:i=>i.reduce((t,n)=>t+n,0),delta:i=>Math.max(...i)-Math.min(...i),diff:i=>i[i.length-1]-i[0]};function Ct(i,t,n="avg"){if(i.length===0||t<1)return[];if(i.length<=t){let h=i[0].t,p=i[i.length-1].t-h||1;return i.map(m=>({x:(m.t-h)/p,v:m.v}))}let e=st[n]||st.avg,r=i[0].t,o=(i[i.length-1].t-r||1)/t,c=[],d=0,l=i[0].v;for(let h=0;h<t;h++){let p=r+(h+1)*o,m=[];for(;d<i.length&&i[d].t<p;)m.push(i[d].v),d++;m.length>0&&(l=e(m)),c.push({x:h/(t-1||1),v:l})}return c}function X(i,t,n,e=24,r="avg",s=!0){if(i.length<2)return"";let a=Ct(i,e,r);if(a.length<2)return"";let o=a[0].v,c=a[0].v;for(let f=1;f<a.length;f++)a[f].v<o&&(o=a[f].v),a[f].v>c&&(c=a[f].v);let d=c-o||1,l=2,h=n-l*2,p=a.map(f=>({x:f.x*t,y:l+h-(f.v-o)/d*h}));if(p.length===2||!s){let f=`M${p[0].x.toFixed(1)},${p[0].y.toFixed(1)}`;for(let _=1;_<p.length;_++)f+=`L${p[_].x.toFixed(1)},${p[_].y.toFixed(1)}`;return f}let m=p[0],v=`M${m.x.toFixed(1)},${m.y.toFixed(1)}`;for(let f=1;f<p.length;f++){let _=p[f],L=(m.x+_.x)/2,u=(m.y+_.y)/2;v+=` ${L.toFixed(1)},${u.toFixed(1)}`,v+=` Q${_.x.toFixed(1)},${_.y.toFixed(1)}`,m=_}return v+=` ${m.x.toFixed(1)},${m.y.toFixed(1)}`,v}function Y(i,t){if(!i.visibility)return!0;let n=t?.states[i.entity];if(!n)return!1;let e=i.visibility,r=i.attribute?n.attributes?.[i.attribute]:n.state;if(!i.attribute&&(n.state==="unavailable"||n.state==="unknown"||n.state==="error"))return e.state_equal!==void 0&&String(e.state_equal)===n.state;let s=parseFloat(r);return!(e.state_above!==void 0&&(isNaN(s)||s<=e.state_above)||e.state_below!==void 0&&(isNaN(s)||s>=e.state_below)||e.state_equal!==void 0&&String(r)!==String(e.state_equal)||e.state_not_equal!==void 0&&String(r)===String(e.state_not_equal))}var dt={input_number:{service:"set_value",dataKey:"value"},number:{service:"set_value",dataKey:"value"},light:{service:"turn_on",dataKey:"brightness_pct",fixedRange:{min:0,max:100,step:1}},cover:{service:"set_cover_position",dataKey:"position",fixedRange:{min:0,max:100,step:1}},fan:{service:"set_percentage",dataKey:"percentage",fixedRange:{min:0,max:100,step:1}},media_player:{service:"volume_set",dataKey:"volume_level",transform:i=>i/100,fixedRange:{min:0,max:100,step:1}},climate:{service:"set_temperature",dataKey:"temperature"}};function P(i,t,n,e){if(e<=0)return A(i,t,n);let r=Math.round((i-t)/e)*e+t,s=(String(e).split(".")[1]||"").length,a=Number(r.toFixed(s));return A(a,t,n)}function pt(i,t,n){if(n?.service){let a=n.service.split(".");if(a.length<2||!a[0]||!a[1])return null;let o={entity_id:i};if(n.data)for(let[c,d]of Object.entries(n.data))o[c]=d==="$value"?t:d;return{domain:a[0],service:a[1],data:o}}let e=i.split(".")[0],r=dt[e];if(!r)return null;let s=r.transform?r.transform(t):t;return{domain:e,service:r.service,data:{entity_id:i,[r.dataKey]:s}}}function q(i,t,n,e){let r=i.split(".")[0],a=dt[r]?.fixedRange,o=t?.attributes,c=e?.min??o?.min??o?.min_temp??a?.min??0,d=e?.max??o?.max??o?.max_temp??a?.max??100,l=n?.step??o?.step??o?.target_temp_step??o?.percentage_step??a?.step??1;return{min:Number(c),max:Number(d),step:Number(l)||1}}function Lt(i){if(!i)return"";let t=new Date(i).getTime();if(isNaN(t))return"";let n=Date.now()-t;if(n<0)return"just now";let e=Math.floor(n/1e3);if(e<60)return"just now";let r=Math.floor(e/60);if(r<60)return`${r} min ago`;let s=Math.floor(r/60);return s<24?`${s}h ago`:`${Math.floor(s/24)}d ago`}function Q(i,t){let n=i.secondary_info;if(!n)return"";if(n.text!==void 0&&n.text!==null&&n.text!=="")return String(n.text);let e=t?.states[i.entity];if(!e)return"";if(n.attribute){let r=e.attributes?.[n.attribute];return r!=null?String(r):""}return n.type==="last_changed"?Lt(e.last_changed):""}var At=250,Nt=500;function ft(i,t,n){i.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:n}))}function Mt(i,t,n,e){if(!(!n||n.action==="none"))switch(n.action){case"more-info":ft(i,"hass-more-info",{entityId:n.entity||e});break;case"navigate":history.pushState(null,"",n.navigation_path),ft(i,"location-changed",{replace:!1});break;case"call-service":case"perform-action":{let r=n.service||n.perform_action;if(!r)break;let[s,a]=r.split(".");t.callService(s,a,n.service_data||n.data).catch(o=>T("Service call %s failed: %O",r,o));break}case"url":n.url_path&&window.open(n.url_path,"_blank","noopener,noreferrer");break;case"toggle":t.callService("homeassistant","toggle",{entity_id:n.entity||e}).catch(r=>T("Toggle %s failed: %O",n.entity||e,r));break}}function Dt(i,t,n){let e=t?.[i],r=n?.[i];return e||r||{action:i==="tap_action"?"more-info":"none"}}function B(i,t,n,e,r){let s=Dt(r,e,n);Mt(i,t,s,e.entity)}function J(i){let t=i.__pulseCleanup;typeof t=="function"&&t()}function ht(i,t,n,e,r){J(i);let s=new AbortController,{signal:a}=s,o=0,c=null,d=null,l=!1;i.__pulseCleanup=()=>{s.abort(),c&&clearTimeout(c),d&&clearTimeout(d),delete i.__pulseCleanup},i.setAttribute("tabindex","0"),i.addEventListener("keydown",p=>{(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),t._hass&&B(t,t._hass,e,r,"tap_action"))},{signal:a}),i.addEventListener("click",p=>{if(p.preventDefault(),l){l=!1;return}i.__pulseSliding||(o++,o===1?c=setTimeout(()=>{o=0,t._hass&&B(t,t._hass,e,r,"tap_action")},At):o===2&&(c&&clearTimeout(c),o=0,t._hass&&B(t,t._hass,e,r,"double_tap_action")))},{signal:a}),i.addEventListener("pointerdown",()=>{l=!1,d=setTimeout(()=>{l=!0,t._hass&&B(t,t._hass,e,r,"hold_action")},Nt)},{signal:a});let h=()=>{d&&clearTimeout(d)};i.addEventListener("pointerup",h,{signal:a}),i.addEventListener("pointercancel",h,{signal:a}),i.addEventListener("contextmenu",p=>p.preventDefault(),{signal:a})}var Vt=50;function Z(i){let t=i.__pulseSliderCleanup;typeof t=="function"&&t()}function mt(i,t,n,e){Z(i);let r=i.querySelector(".bar-container");if(!r)return;let s=r,a=new AbortController,{signal:o}=a,c=null;i.__pulseSliderCleanup=()=>{a.abort(),c&&clearTimeout(c),f&&clearInterval(f),delete i.__pulseSliderCleanup};let d=typeof e.interactive=="object"?e.interactive:typeof n.interactive=="object"?n.interactive:void 0,l=null;function h(u){let b=s.getBoundingClientRect(),g=Math.max(0,Math.min(u-b.left,b.width)),y=b.width>0?g/b.width:0,F=t._hass?.states[e.entity],{min:w,max:S,step:k}=q(e.entity,F,d,e),M=w+y*(S-w);return P(M,w,S,k)}function p(u){let g=t._hass?.states[e.entity],{min:y,max:C,step:F}=q(e.entity,g,d,e),w=C-y,S=w>0?(u-y)/w*100:0,k=s.querySelector(".bar-fill");k&&(k.style.width=`${S}%`);let M=V(e,g),$=(String(F).split(".")[1]||"").length,D=$>0?u.toFixed($):String(Math.round(u)),O=M?`${D}${M}`:D,E=i.querySelectorAll(".bar-value");for(let j of E)j.textContent=O}function m(){if(!l)return;let u=s.querySelector(".bar-fill");u&&(u.style.transition="",u.style.width=l.fillWidth);let b=i.querySelectorAll(".bar-value");for(let g of b)g.textContent=l.displayValue}function v(u){let b=pt(e.entity,u,d);if(!b){T("No slider service mapping for %s",e.entity),m();return}let g=t._hass;if(!g){m();return}g.callService(b.domain,b.service,b.data).catch(y=>{T("Slider service call failed for %s: %O",e.entity,y),m()})}s.addEventListener("pointerdown",u=>{if(!t._hass)return;u.preventDefault();let b=s.querySelector(".bar-fill"),g=i.querySelector(".bar-value");l={fillWidth:b?.style.width||"0%",displayValue:g?.textContent||"",pointerId:u.pointerId,startX:u.clientX},i.__pulseSliding=!0,s.setPointerCapture(u.pointerId),i.classList.add("sliding"),b&&(b.style.transition="none");let y=h(u.clientX);p(y)},{signal:o}),s.addEventListener("pointermove",u=>{if(!l||u.pointerId!==l.pointerId)return;u.preventDefault();let b=h(u.clientX);p(b)},{signal:o}),s.addEventListener("pointerup",u=>{if(!l||u.pointerId!==l.pointerId)return;u.preventDefault();let b=s.querySelector(".bar-fill");b&&(b.style.transition=""),i.classList.remove("sliding"),s.releasePointerCapture(u.pointerId);let g=h(u.clientX);p(g),v(g),l=null,c=setTimeout(()=>{i.__pulseSliding=!1},Vt)},{signal:o}),s.addEventListener("pointercancel",u=>{if(!l||u.pointerId!==l.pointerId)return;let b=s.querySelector(".bar-fill");b&&(b.style.transition=""),i.classList.remove("sliding"),s.releasePointerCapture(u.pointerId),m(),l=null,i.__pulseSliding=!1},{signal:o});let f=null;function _(u){let b=t._hass;if(!b)return;let g=b.states[e.entity],{min:y,max:C,step:F}=q(e.entity,g,d,e),w=e.attribute?parseFloat(g?.attributes?.[e.attribute]):parseFloat(g?.state);if(isNaN(w))return;let S=P(w+u*F,y,C,F);S!==w&&(p(S),v(S))}let L=i.querySelectorAll(".bar-step-btn");for(let u of L){let b=Number(u.dataset.step);u.addEventListener("click",y=>{y.stopPropagation(),_(b)},{signal:o}),u.addEventListener("pointerdown",y=>{y.stopPropagation(),f&&clearInterval(f),f=setInterval(()=>_(b),200)},{signal:o});let g=()=>{f&&(clearInterval(f),f=null)};u.addEventListener("pointerup",g,{signal:o}),u.addEventListener("pointercancel",g,{signal:o}),u.addEventListener("pointerleave",g,{signal:o})}i.addEventListener("keydown",u=>{let b=t._hass;if(!b||u.key!=="ArrowRight"&&u.key!=="ArrowUp"&&u.key!=="ArrowLeft"&&u.key!=="ArrowDown")return;u.preventDefault();let g=b.states[e.entity],{min:y,max:C,step:F}=q(e.entity,g,d,e),w=e.attribute?parseFloat(g?.attributes?.[e.attribute]):parseFloat(g?.state);if(isNaN(w))return;let S=u.key==="ArrowRight"||u.key==="ArrowUp"?1:-1,k=P(w+S*F,y,C,F);k!==w&&(p(k),v(k))},{signal:o})}var W=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_elements={};_indicators={};_indicatorTimer=null;_sparklineData={};_sparklineTimer=null;_sparklineLastFetch=0;_shadow;constructor(){super(),this._shadow=this.attachShadow({mode:"open"});let t=document.createElement("style");t.textContent=tt,this._shadow.appendChild(t)}get _cfg(){return this._config}disconnectedCallback(){this._indicatorTimer&&(clearTimeout(this._indicatorTimer),this._indicatorTimer=null),this._sparklineTimer&&(clearTimeout(this._sparklineTimer),this._sparklineTimer=null);let t=this._shadow.querySelectorAll(".bar-row");for(let n of t)J(n),Z(n)}setConfig(t){this._config=ct(t),this._elements={},this._sparklineData={},this._sparklineLastFetch=0,this._indicators={},this._hass&&(this._fullRender(),this._scheduleIndicatorFetch(),this._scheduleSparklineFetch())}set hass(t){if(this._hass=t,!this._config)return;let n=!1;for(let e of this._cfg.entities){let r=t.states[e.entity],s=this._prevStates[e.entity];if(!s||s.state!==r?.state||s.last_updated!==r?.last_updated){n=!0;break}let a=e.target??this._cfg.target;if(typeof a=="string"){let o=t.states[a],c=this._prevStates[`__target__${a}`];if(!c||c.state!==o?.state||c.last_updated!==o?.last_updated){n=!0;break}}}n&&(this._elements.container?this._updateBars():this._fullRender(),this._cacheStates(),this._scheduleIndicatorFetch(),this._scheduleSparklineFetch())}_fullRender(){let t=this._cfg;if(!t)return;let n=t.columns??1,e=n>1?` columns-${n}`:"",r=t.entity_row?" entity-row":"",s=t.layout==="compact"?" compact":"",a=[];n>1&&a.push(`--pulse-columns:${n}`),t.gap!==void 0&&a.push(`--pulse-gap:${N(z(t.gap))}`),t.font_size!==void 0&&a.push(`--pulse-font-size:${N(z(t.font_size))}`);let o=a.length>0?` style="${a.join(";")}"`:"",c="";t.title&&(c+=`<div class="pulse-title">${x(t.title)}</div>`),c+=`<div class="pulse-card${e}${r}${s}"${o}>`;for(let p of t.entities)c+=this._renderBarRow(p);c+="</div>";let d=t.entity_row?c:`<ha-card>${c}</ha-card>`,l=this._shadow.querySelector("ha-card, .pulse-card");l&&l.remove();let h=document.createElement("template");h.innerHTML=d,this._shadow.appendChild(h.content.cloneNode(!0)),this._elements.container=this._shadow.querySelector(".pulse-card"),this._cacheBarElements();for(let p of t.entities){let m=this._elements.rows?.[p.entity];m&&(m.style.display=Y(p,this._hass)?"":"none")}}_renderBarRow(t){let n=this._cfg,e=K(t,n,this._hass),r=t.positions?.name??n.positions?.name??I.positions.name,s=t.positions?.value??n.positions?.value??I.positions.value,a=t.positions?.icon??n.positions?.icon??I.positions.icon,o=t.positions?.indicator??n.positions?.indicator??I.positions.indicator,d=(t.indicator??n.indicator)?.show===!0&&o==="off"?"outside":o,l=t.animation??{},h=l.speed??n.animation.speed,p=l.effect??n.animation.effect,m=l.state??n.animation.state,v=this._buildIndicatorHtml(t,n,d),f=Q(t,this._hass),_=this._buildPositionHtml(e,r,s,a,d,v,"outside",f),L=this._buildPositionHtml(e,r,s,a,d,v,"inside",f),u=N(z(t.height??n.height)),b=N(z(t.border_radius??n.border_radius)),g=e.color?`background-color:${N(e.color)};`:"",y=p==="charge"&&!e.isUnavailable?" charge":"",C=m==="off"?"transition:none;":"",F=R(t,n),S=`width:${e.fill*F}%;${C}${g}`,k=this._buildTargetHtml(t,n,e.min,e.max),M=this._buildSparklineHtml(t,n),$=`
      <div class="bar-container" style="height:${u};border-radius:${b};--pulse-animation-speed:${h}s;">
        <div class="bar-track"></div>
        ${M}
        <div class="bar-fill${y}" data-entity="${x(t.entity)}" style="${S}"></div>
        ${k}
        ${L}
      </div>`,D=!!(t.interactive??n.interactive),O=D?`<div class="bar-interactive-row"><div class="bar-step-btn" data-step="-1" role="button" aria-label="Decrease">\u2212</div>${$}<div class="bar-step-btn" data-step="1" role="button" aria-label="Increase">+</div></div>`:$,E=D?"slider":"progressbar",j=e.isUnavailable?`role="${E}" aria-valuenow="0" aria-valuemin="${e.min}" aria-valuemax="${e.max}" aria-label="${x(e.name)}: Unavailable"`:`role="${E}" aria-valuenow="${e.numValue}" aria-valuemin="${e.min}" aria-valuemax="${e.max}" aria-label="${x(e.name)}: ${x(e.displayValue)}"`,bt=e.isUnavailable?" unavailable":"",gt=D?" data-interactive":"",vt=e.isUnavailable?'data-state="unavailable"':`data-state="${x(e.numValue)}"`,_t=e.color?` data-severity-color="${x(e.color)}"`:"";return`<div class="bar-row${bt}" data-entity="${x(t.entity)}"${gt} ${vt}${_t} ${j}>${_}${O}</div>`}_buildIndicatorHtml(t,n,e){let r=t.indicator??n.indicator;if(!(r?.show===!0&&e!=="off"))return"";let a=this._indicators[t.entity],o=a?.direction??"neutral",c=r?.show_delta===!0&&!!a,d=this._hass?.states[t.entity],l=V(t,d),h=H(t,n,this._hass),{text:p}=G(o,a?.delta??0,c,h,l),m=r?.inverted===!0?" inverted":"";return`<span class="bar-indicator ${o}${m}">${p}</span>`}_buildPositionHtml(t,n,e,r,s,a,o,c){if(n!==o&&e!==o&&r!==o&&s!==o)return"";let l=`<div class="${o==="outside"?"bar-labels":"bar-content"}"><div class="bar-label-left">`;return r===o&&t.resolvedIcon&&(l+=`<ha-icon class="bar-icon" icon="${x(t.resolvedIcon)}"></ha-icon>`),n===o&&(c?(l+='<div class="bar-name-group">',l+=`<span class="bar-name">${x(t.name)}</span>`,l+=`<span class="bar-secondary">${x(c)}</span>`,l+="</div>"):l+=`<span class="bar-name">${x(t.name)}</span>`),l+='</div><div class="bar-label-right">',e===o&&(l+=`<span class="bar-value">${x(t.displayValue)}</span>`),s===o&&a&&(l+=a),l+="</div></div>",l}_buildTargetHtml(t,n,e,r){let s=t.target??n.target,{value:a,showLabel:o}=U(s,this._hass);if(a===null)return"";let c=A((a-e)/(r-e),0,1)*100,d=R(t,n),l=`left:${c*d}%`,h=o?`<span class="bar-target-label">${x(a)}</span>`:"";return`<div class="bar-target" style="${l}">${h}</div>`}_updateBars(){let t=this._cfg;for(let n of t.entities){let e=K(n,t,this._hass),r=R(n,t),s=this._elements.rows?.[n.entity];if(!s||s.__pulseSliding)continue;let a=Y(n,this._hass);if(s.style.display=a?"":"none",!a)continue;s.classList.toggle("unavailable",e.isUnavailable);let o=s.querySelector(".bar-fill");if(o){let v=`${e.fill*r}%`;o.style.width=v,o.style.backgroundColor=e.color||"";let f=s.querySelector(".bar-sparkline");f&&(f.style.width=`${r*100}%`);let _=s.querySelector(".bar-icon");_&&e.resolvedIcon&&_.setAttribute("icon",e.resolvedIcon)}let c=s.querySelectorAll(".bar-name");for(let v of c)v.textContent=e.name;let d=s.querySelectorAll(".bar-value");for(let v of d)v.textContent=e.displayValue;let l=s.querySelectorAll(".bar-secondary");if(l.length>0){let v=Q(n,this._hass);for(let f of l)f.textContent=v}s.setAttribute("aria-valuenow",e.isUnavailable?"0":String(e.numValue)),s.setAttribute("aria-valuemin",String(e.min)),s.setAttribute("aria-valuemax",String(e.max)),s.setAttribute("aria-label",`${x(e.name)}: ${x(e.displayValue)}`),s.setAttribute("data-state",e.isUnavailable?"unavailable":String(e.numValue)),e.color?s.setAttribute("data-severity-color",e.color):s.removeAttribute("data-severity-color");let h=s.querySelector(".bar-target"),p=n.target??t.target,{value:m}=U(p,this._hass);if(m!==null){let v=A((m-e.min)/(e.max-e.min),0,1)*100;if(h){h.style.left=`${v*r}%`,h.style.display="";let f=h.querySelector(".bar-target-label");f&&(f.textContent=String(m))}}else h&&(h.style.display="none")}}_scheduleIndicatorFetch(){let t=this._cfg;!t||!t.entities.some(e=>(e.indicator??t.indicator)?.show===!0)||(this._indicatorTimer&&clearTimeout(this._indicatorTimer),this._indicatorTimer=setTimeout(()=>this._fetchIndicators(),500))}async _fetchIndicators(){let t=this._cfg;if(t)try{let n=new Map;for(let r of t.entities)n.set(r.entity,r);let e=new Map;for(let r of t.entities){let s=r.indicator??t.indicator;if(!s?.show)continue;let a=s.period??60;e.has(a)||e.set(a,[]),e.get(a).push({entity:r.entity,icfg:s})}for(let[r,s]of e){let a=s.map(c=>c.entity),o=await lt(this._hass,a,r);for(let{entity:c,icfg:d}of s){let l=n.get(c),h=this._hass?.states[c],p=l?.attribute?h?.attributes?.[l.attribute]:h?.state,m=ot(p,o[c]);this._indicators[c]=m;let v=this._elements.rows?.[c];if(!v)continue;let f=v.querySelector(".bar-indicator");if(f&&l){let _=this._hass?.states[c],L=V(l,_),u=H(l,t,this._hass),{text:b}=G(m.direction,m.delta,d.show_delta===!0,u,L),g=d.inverted===!0?" inverted":"";f.textContent=b,f.className=`bar-indicator ${m.direction}${g}`}}}}catch(n){T("Indicator fetch failed: %O",n)}}_resolveSparklineConfig(t,n){let e=t.sparkline??n.sparkline;if(!e)return null;let r=e===!0?{}:e.show?e:null;if(!r)return null;let s=r.hours_to_show??24,a=r.points_per_hour??1;return{hours:s,pointsPerHour:a,slots:Math.max(s*a,2),aggregateFunc:r.aggregate_func??"avg",smoothing:r.smoothing!==!1,strokeWidth:Number(r.line_width??r.stroke_width??1.5)||1.5,color:r.color??null,updateInterval:r.update_interval??300}}_buildSparklineHtml(t,n){let e=this._resolveSparklineConfig(t,n);if(!e)return"";let r=this._sparklineData[t.entity];if(!r||r.length<2)return"";let s=X(r,200,50,e.slots,e.aggregateFunc,e.smoothing);if(!s)return"";let o=R(t,n)*100,c=e.color?`color:${N(e.color)};`:"";return`<svg class="bar-sparkline" viewBox="0 0 200 50" preserveAspectRatio="none" height="100%" style="${`width:${o}%;${c}`}"><path d="${s}" fill="none" stroke="currentColor" stroke-width="${e.strokeWidth}" /></svg>`}_scheduleSparklineFetch(){let t=this._cfg;if(!t||!t.entities.some(s=>!!this._resolveSparklineConfig(s,t)))return;let e=300;for(let s of t.entities){let a=this._resolveSparklineConfig(s,t);a&&a.updateInterval<e&&(e=a.updateInterval)}(Date.now()-this._sparklineLastFetch)/1e3<e&&this._sparklineLastFetch>0||(this._sparklineTimer&&clearTimeout(this._sparklineTimer),this._sparklineTimer=setTimeout(()=>this._fetchSparklines(),1e3))}async _fetchSparklines(){let t=this._cfg;if(t)try{let n=new Map;for(let e of t.entities){let r=this._resolveSparklineConfig(e,t);if(!r)continue;let s=r.hours;n.has(s)||n.set(s,[]),n.get(s).push(e.entity)}for(let[e,r]of n){let s=await ut(this._hass,r,e);for(let a of r)this._sparklineData[a]=s[a]||[]}this._sparklineLastFetch=Date.now(),this._updateSparklines()}catch(n){T("Sparkline fetch failed: %O",n)}}_updateSparklines(){let t=this._cfg;if(t)for(let n of t.entities){let e=this._resolveSparklineConfig(n,t);if(!e)continue;let r=this._elements.rows?.[n.entity];if(!r)continue;let s=this._sparklineData[n.entity];if(!s||s.length<2)continue;let a=X(s,200,50,e.slots,e.aggregateFunc,e.smoothing);if(!a)continue;let o=r.querySelector(".bar-sparkline"),d=`${R(n,t)*100}%`;if(o){let l=o.querySelector("path");l&&l.setAttribute("d",a),o.style.width=d}else{let l=r.querySelector(".bar-container");if(!l)continue;let h=e.color?`color:${N(e.color)};`:"",p=`<svg xmlns="http://www.w3.org/2000/svg" class="bar-sparkline" viewBox="0 0 200 50" preserveAspectRatio="none" height="100%" style="width:${d};${h}"><path d="${a}" fill="none" stroke="currentColor" stroke-width="${e.strokeWidth}" /></svg>`,m=new DOMParser().parseFromString(p,"image/svg+xml"),v=document.importNode(m.documentElement,!0),f=l.querySelector(".bar-track");f&&f.nextSibling?l.insertBefore(v,f.nextSibling):l.appendChild(v)}}}_cacheStates(){let t=this._cfg;this._prevStates={};for(let n of t.entities){let e=this._hass?.states[n.entity];e&&(this._prevStates[n.entity]={state:e.state,last_updated:e.last_updated});let r=n.target??t.target;if(typeof r=="string"){let s=this._hass?.states[r];s&&(this._prevStates[`__target__${r}`]={state:s.state,last_updated:s.last_updated})}}}_cacheBarElements(){let t=this._cfg;this._elements.rows={};let n=new Map;for(let r of t.entities)n.set(r.entity,r);let e=this._shadow.querySelectorAll(".bar-row");for(let r of e){let s=r.dataset.entity;if(s){this._elements.rows[s]=r;let a=n.get(s);a&&(ht(r,this,this._hass,t,a),(a.interactive??t.interactive)&&mt(r,this,t,a))}}}getCardSize(){let t=this._config?.entities?.length||1,n=this._config?.columns||1;return Math.ceil(t/n)+(this._config?.title?1:0)}getGridOptions(){let t=this._config?.entities?.length||1,n=this._config?.columns||1,e=Math.ceil(t/n);return{columns:12,min_columns:3,rows:Math.max(1,e),min_rows:1}}static async getConfigElement(){return await import("./editor.js"),document.createElement("pulse-card-editor")}static getStubConfig(t){return{entity:Object.keys(t.states).filter(e=>{let r=t.states[e];return e.startsWith("sensor.")&&!isNaN(parseFloat(r.state))})[0]||"sensor.example"}}};customElements.get("pulse-card")||customElements.define("pulse-card",W);window.customCards=window.customCards||[];window.customCards.push({type:"pulse-card",name:"Pulse Card",description:"Compact horizontal bar chart for sensor data visualization",preview:!0,documentationURL:"https://github.com/hiall-fyi/pulse-card"});console.info(`%c PULSE-CARD %c v${et} `,"background:#03A9F4;color:white;font-weight:bold","background:#333;color:white");var Xt=W;export{Xt as default};
