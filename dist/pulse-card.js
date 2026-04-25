var Ae=`
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
    position: relative;
    overflow: hidden;
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

  /* Target marker \u2014 visually distinct from fill */
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

  /* Target label */
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
    display: flex;
    align-items: center;
    line-height: 0;
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
  .bar-row:not(.has-ripple):active {
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

  /* Sparkline overlay */
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
    position: relative;
    overflow: hidden;
    transition: opacity 0.15s;
  }
  .bar-step-btn:hover {
    opacity: 1;
  }
  .bar-step-btn:not(.has-ripple):active {
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

  /* Compact mode */
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

  /* Reduced motion \u2014 respect prefers-reduced-motion */
  @media (prefers-reduced-motion: reduce) {
    .bar-fill.charge { animation: none; }
    .bar-fill, .bar-row { transition: none; }
  }
`;var Te="1.1.0",Fe="Pulse Card:",X={min:0,max:100,height:"8px",border_radius:"4px",decimal:null,entity_row:!1,complementary:!1,limit_value:!1,columns:1,animation:{state:"on",speed:.8,effect:"none"},positions:{icon:"off",name:"outside",value:"outside",indicator:"off"},tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}};function f(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function C(e){return e==null||e===""?"":String(e).replace(/[;{}]/g,"").replace(/url\s*\(/gi,"").replace(/expression\s*\(/gi,"").replace(/-moz-binding\s*:/gi,"")}function Y(e,t,n){return Math.min(Math.max(e,t),n)}function ut(e){if(e==null||e==="")return"";let t=String(e);return/^\d+(\.\d+)?$/.test(t)?`${t}px`:t}function nt(){return typeof window>"u"?!1:window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches??!1}var So=new Set(["on","open","home","locked","playing","active"]),ko=new Set(["off","closed","not_home","unlocked","idle","paused","standby"]);function Me(e,t,n){if(typeof e!="string")return null;let o=e.toLowerCase();return So.has(o)?n:ko.has(o)?t:null}function Co(e,t){let n=String(e),o=n.charAt(0).toUpperCase()+n.slice(1);return t?`${o}${t}`:o}function Ao(e,t,n,o=!1){let i=Me(e,t,n),s=i!==null?i:parseFloat(e);if(isNaN(s))return 0;let a=n-t;if(a<=0)return 0;let r=o?n-s:s;return Y((r-t)/a,0,1)*100}function To(e,t){if(!t||t.length===0)return null;let n=parseFloat(e);if(isNaN(n))return null;for(let o of t)if(n>=o.from&&n<=o.to)return o;return null}function Ie(e){let t=e.replace("#","");return t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:parseInt(t.substring(0,2),16),g:parseInt(t.substring(2,4),16),b:parseInt(t.substring(4,6),16)}}function Fo(e,t,n){let o=Ie(e),i=Ie(t),s=Math.round(o.r+(i.r-o.r)*n),a=Math.round(o.g+(i.g-o.g)*n),r=Math.round(o.b+(i.b-o.b)*n);return`rgb(${s}, ${a}, ${r})`}function Io(e,t){if(!t||t.length<2)return null;let n=parseFloat(e);if(isNaN(n))return null;let o=t[0].from<=t[t.length-1].from?t:[...t].sort((i,s)=>i.from-s.from);for(let i=0;i<o.length-1;i++){let s=o[i],a=o[i+1];if(n>=s.from&&n<=a.to){let r=a.from-s.from,l=r>0?(n-s.from)/r:0;return Fo(s.color,a.color,Y(l,0,1))}}return n<=o[0].from?o[0].color:o[o.length-1].color}function zo(e,t,n){let o=e.min??n?.min,i=e.max??n?.max;return o==null&&(o=t?.attributes?.min??t?.attributes?.min_temp??X.min),i==null&&(i=t?.attributes?.max??t?.attributes?.max_temp??X.max),{min:parseFloat(String(o)),max:parseFloat(String(i))}}function Ct(e,t,n){return e.decimal??t.decimal??n?.entities?.[e.entity]?.display_precision??null}function ht(e,t){return e.unit_of_measurement??t?.attributes?.unit_of_measurement??""}function Eo(e){return!isFinite(e)||e<0?"0":e>=1e9?`${(e/1e9).toFixed(1)}G`:e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}K`:e.toString()}function Mo(e,t,n){let o=parseFloat(e);if(isNaN(o))return String(e);let i=t!=null?o.toFixed(t):o.toString();return n?`${i}${n}`:i}function Le(e,t){if(t==null)return{direction:"neutral",delta:0};let n=parseFloat(e),o=parseFloat(t);if(isNaN(n)||isNaN(o))return{direction:"neutral",delta:0};if(!isFinite(n)||!isFinite(o))return{direction:"neutral",delta:0};let i=Math.abs(n-o),s=Math.max(Math.abs(n),1);if(i>s*1e3)return{direction:"neutral",delta:0};let a=Math.round((n-o)*100)/100;return{direction:a>0?"up":a<0?"down":"neutral",delta:a}}function Ut(e,t,n,o,i){let s=e==="up"?"\u25B2":e==="down"?"\u25BC":"\u25B6";if(!n)return{arrow:s,text:s};let a=o!=null?t.toFixed(o):String(Math.round(t*100)/100),r=t>0?"+":"";return{arrow:s,text:`${s} ${r}${a}${i||""}`}}function J(e,...t){console.warn(`${Fe} ${e}`,...t)}async function Ne(e,t,n=60){let o={};if(!e?.callWS||t.length===0)return o;let i=new Date,s=new Date(i.getTime()-n*60*1e3);try{let a=await e.callWS({type:"history/history_during_period",start_time:s.toISOString(),end_time:i.toISOString(),entity_ids:t,minimal_response:!0,significant_changes_only:!0});for(let r of t){let l=a?.[r];if(!l||l.length===0){o[r]=null;continue}let c=parseFloat(l[0].s);o[r]=isNaN(c)?null:c}}catch(a){J("Failed to fetch history for %s: %O",t.join(", "),a);for(let r of t)o[r]=null}return o}function ze(e){return!Array.isArray(e)||e.length<2?e:[...e].sort((t,n)=>t.from-n.from)}function He(e){if(!e)throw new Error("Please define an entity or entities");if(!e.entity&&!e.entities)throw new Error("Please define an entity or entities");let t={...X,...e,animation:{...X.animation,...e.animation},positions:{...X.positions,...e.positions}};t.columns!==null&&t.columns!==void 0&&(t.columns=Number(t.columns)||1),t.animation.speed!==null&&t.animation.speed!==void 0&&(t.animation.speed=Number(t.animation.speed)||X.animation.speed),t.severity&&(t.severity=ze(t.severity)),t.entities=e.entities?e.entities.map(o=>{let i=typeof o=="string"?{entity:o}:{...o};return i.severity&&(i.severity=ze(i.severity)),!i.secondary_info&&t.secondary_info&&(i._cardSecondaryInfo=t.secondary_info),i}):[{entity:e.entity}];let n=new Set;for(let o of t.entities)n.has(o.entity)&&J('Duplicate entity "%s" in config \u2014 only the last bar will update dynamically',o.entity),n.add(o.entity);return t}function At(e,t){if(e==null)return{value:null,showLabel:!1};if(typeof e=="number")return{value:isNaN(e)?null:e,showLabel:!1};if(typeof e=="string"){let n=t?.states[e];if(!n)return{value:null,showLabel:!1};let o=parseFloat(n.state);return{value:isNaN(o)?null:o,showLabel:!1}}return typeof e=="object"&&e.value!==void 0?{value:At(e.value,t).value,showLabel:e.show_label===!0}:{value:null,showLabel:!1}}function jt(e,t,n){let o=n?.states[e.entity],i=!o||o.state==="unavailable"||o.state==="unknown"||o.state==="error",{min:s,max:a}=zo(e,o,t),r=e.attribute?o?.attributes?.[e.attribute]:o?.state,l=e.attribute?null:Me(r,s,a),c=l!==null,d=c?l:parseFloat(r),h=e.complementary??t.complementary,u=i?0:Ao(r,s,a,h),p=ht(e,o),_=Ct(e,t,n),b=(e.limit_value??t.limit_value)&&!isNaN(d)?Y(d,s,a):r,m=i?"Unavailable":e.state_map?.[r]?e.state_map[r]:c?Co(r,p):Mo(b,_,p),v=e.name??o?.attributes?.friendly_name??e.entity,y="",x="";if(!i){let E=e.state_color,M=o?.state;if(E&&M&&E[M])y=E[M];else{let I=e.attribute_color??t.attribute_color;if(I?.attribute&&I?.map){let S=o.attributes?.[I.attribute];if(S!=null){let w=I.map[String(S)];w&&(y=w)}}if(!y){let S=e.severity??t.severity;if(S&&S.length>0)if(S.some(z=>z.mode==="gradient")){let z=Io(d,S);z&&(y=z)}else{let z=To(d,S);z&&(y=z.color,z.icon&&(x=z.icon))}}}}let $=y||e.color||t.color||"",k=e.icon||o?.attributes?.icon||"";return{isUnavailable:i,min:s,max:a,numValue:d,fill:u,displayValue:m,name:v,color:$,resolvedIcon:x||k}}function ft(e,t){let n=e.bar_width??t.bar_width;return n!=null?Math.max(1,Math.min(100,n))/100:1}async function Tt(e,t,n=24){let o={};if(!e?.callWS||t.length===0)return o;let i=new Date,s=new Date(i.getTime()-n*60*60*1e3);try{let a=await e.callWS({type:"history/history_during_period",start_time:s.toISOString(),end_time:i.toISOString(),entity_ids:t,minimal_response:!0,significant_changes_only:!0});for(let r of t)try{let l=a?.[r];if(!l||l.length<2){o[r]=[];continue}let c=[];for(let d of l){let h=parseFloat(d.s);if(!isNaN(h)){let u=d.lu??d.last_updated,p=typeof u=="number"?u*1e3:new Date(u).getTime();isFinite(p)&&c.push({t:p,v:h})}}o[r]=c}catch{o[r]=[]}}catch(a){J("Sparkline fetch failed: %O",a);for(let r of t)o[r]=[]}return o}var Ee={avg:e=>e.reduce((t,n)=>t+n,0)/e.length,min:e=>Math.min(...e),max:e=>Math.max(...e),median:e=>{let t=[...e].sort((o,i)=>o-i),n=Math.floor(t.length/2);return t.length%2?t[n]:(t[n-1]+t[n])/2},first:e=>e[0],last:e=>e[e.length-1],sum:e=>e.reduce((t,n)=>t+n,0),delta:e=>Math.max(...e)-Math.min(...e),diff:e=>e[e.length-1]-e[0]};function Lo(e,t,n="avg"){if(e.length===0||t<1)return[];if(e.length<=t){let h=e[0].t,u=e[e.length-1].t-h||1;return e.map(p=>({x:(p.t-h)/u,v:p.v}))}let o=Ee[n]||Ee.avg,i=e[0].t,r=(e[e.length-1].t-i||1)/t,l=[],c=0,d=e[0].v;for(let h=0;h<t;h++){let u=i+(h+1)*r,p=[];for(;c<e.length&&e[c].t<u;)p.push(e[c].v),c++;p.length>0&&(d=o(p)),l.push({x:h/(t-1||1),v:d})}return l}function yt(e,t,n,o=24,i="avg",s=!0){if(e.length<2)return"";let a=Lo(e,o,i);if(a.length<2)return"";let r=a[0].v,l=a[0].v;for(let g=1;g<a.length;g++)a[g].v<r&&(r=a[g].v),a[g].v>l&&(l=a[g].v);let c=l-r||1,d=2,h=n-d*2,u=a.map(g=>({x:g.x*t,y:d+h-(g.v-r)/c*h}));if(u.length===2||!s){let g=`M${u[0].x.toFixed(1)},${u[0].y.toFixed(1)}`;for(let b=1;b<u.length;b++)g+=`L${u[b].x.toFixed(1)},${u[b].y.toFixed(1)}`;return g}let p=u[0],_=`M${p.x.toFixed(1)},${p.y.toFixed(1)}`;for(let g=1;g<u.length;g++){let b=u[g],m=(p.x+b.x)/2,v=(p.y+b.y)/2;_+=` ${m.toFixed(1)},${v.toFixed(1)}`,_+=` Q${b.x.toFixed(1)},${b.y.toFixed(1)}`,p=b}return _+=` ${p.x.toFixed(1)},${p.y.toFixed(1)}`,_}function Wt(e,t){if(!e.visibility)return!0;let n=t?.states[e.entity];if(!n)return!1;let o=e.visibility,i=e.attribute?n.attributes?.[e.attribute]:n.state;if(!e.attribute&&(n.state==="unavailable"||n.state==="unknown"||n.state==="error"))return o.state_equal!==void 0&&String(o.state_equal)===n.state;let s=parseFloat(i);return!(o.state_above!==void 0&&(isNaN(s)||s<=o.state_above)||o.state_below!==void 0&&(isNaN(s)||s>=o.state_below)||o.state_equal!==void 0&&String(i)!==String(o.state_equal)||o.state_not_equal!==void 0&&String(i)===String(o.state_not_equal))}var Re={input_number:{service:"set_value",dataKey:"value"},number:{service:"set_value",dataKey:"value"},light:{service:"turn_on",dataKey:"brightness_pct",fixedRange:{min:0,max:100,step:1}},cover:{service:"set_cover_position",dataKey:"position",fixedRange:{min:0,max:100,step:1}},fan:{service:"set_percentage",dataKey:"percentage",fixedRange:{min:0,max:100,step:1}},media_player:{service:"volume_set",dataKey:"volume_level",transform:e=>e/100,fixedRange:{min:0,max:100,step:1}},climate:{service:"set_temperature",dataKey:"temperature"}};function Ft(e,t,n,o){if(o<=0)return Y(e,t,n);let i=Math.round((e-t)/o)*o+t,s=(String(o).split(".")[1]||"").length,a=Number(i.toFixed(s));return Y(a,t,n)}function De(e,t,n){if(n?.service){let a=n.service.split(".");if(a.length<2||!a[0]||!a[1])return null;let r={entity_id:e};if(n.data)for(let[l,c]of Object.entries(n.data))r[l]=c==="$value"?t:c;return{domain:a[0],service:a[1],data:r}}let o=e.split(".")[0],i=Re[o];if(!i)return null;let s=i.transform?i.transform(t):t;return{domain:o,service:i.service,data:{entity_id:e,[i.dataKey]:s}}}function bt(e,t,n,o){let i=e.split(".")[0],a=Re[i]?.fixedRange,r=t?.attributes,l=o?.min??r?.min??r?.min_temp??a?.min??0,c=o?.max??r?.max??r?.max_temp??a?.max??100,d=n?.step??r?.step??r?.target_temp_step??r?.percentage_step??a?.step??1;return{min:Number(l),max:Number(c),step:Number(d)||1}}function No(e){if(!e)return"";let t=new Date(e).getTime();if(isNaN(t))return"";let n=Date.now()-t;if(n<0)return"just now";let o=Math.floor(n/1e3);if(o<60)return"just now";let i=Math.floor(o/60);if(i<60)return`${i} min ago`;let s=Math.floor(i/60);return s<24?`${s}h ago`:`${Math.floor(s/24)}d ago`}function Gt(e,t){let n=e.secondary_info??e._cardSecondaryInfo;if(!n)return"";if(n.text!==void 0&&n.text!==null&&n.text!=="")return String(n.text);let o=t?.states[e.entity];if(!o)return"";if(n.template)return n.template.replace(/\{(\w+)\}/g,(i,s)=>{let a=o.attributes?.[s];return a==null?"":(s==="bytes"||s==="packets")&&typeof a=="number"?Eo(a):String(a)});if(n.attribute){let i=o.attributes?.[n.attribute];return i!=null?String(i):""}return n.type==="last_changed"?No(o.last_changed):""}function It(e,t,n){e.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:n}))}function mt(e,t,n,o,i){if(!(!n||n.action==="none"))switch(n.action){case"more-info":It(e,"hass-more-info",{entityId:n.entity||o});break;case"navigate":n.navigation_path&&(history.pushState(null,"",n.navigation_path),It(e,"location-changed",{replace:!1}));break;case"call-service":case"perform-action":{let s=n.service||n.perform_action;if(!s)break;let[a,r]=s.split(".");t.callService(a,r,n.service_data||n.data).catch(l=>i("Service call %s failed: %O",s,l));break}case"url":n.url_path&&window.open(n.url_path,"_blank","noopener,noreferrer");break;case"toggle":t.callService("homeassistant","toggle",{entity_id:n.entity||o}).catch(s=>i("Toggle %s failed: %O",n.entity||o,s));break}}function Ho(e,t,n){let o=t?.[e],i=n?.[e];return o||i||{action:e==="tap_action"?"more-info":"none"}}function zt(e,t,n,o,i){let s=Ho(i,o,n);mt(e,t,s,o.entity,J)}function Kt(e){let t=e.__pulseCleanup;typeof t=="function"&&t()}function Pe(e,t,n,o,i){Kt(e);let s=new AbortController,{signal:a}=s,r=0,l=null,c=null,d=!1;e.__pulseCleanup=()=>{s.abort(),l&&clearTimeout(l),c&&clearTimeout(c),delete e.__pulseCleanup},e.setAttribute("tabindex","0"),e.addEventListener("keydown",u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),t._hass&&zt(t,t._hass,o,i,"tap_action"))},{signal:a}),e.addEventListener("click",u=>{if(u.preventDefault(),d){d=!1;return}e.__pulseSliding||(r++,r===1?l=setTimeout(()=>{r=0,t._hass&&zt(t,t._hass,o,i,"tap_action")},250):r===2&&(l&&clearTimeout(l),r=0,t._hass&&zt(t,t._hass,o,i,"double_tap_action")))},{signal:a}),e.addEventListener("pointerdown",()=>{d=!1,c=setTimeout(()=>{d=!0,t._hass&&zt(t,t._hass,o,i,"hold_action")},500)},{signal:a});let h=()=>{c&&clearTimeout(c)};e.addEventListener("pointerup",h,{signal:a}),e.addEventListener("pointercancel",h,{signal:a}),e.addEventListener("contextmenu",u=>u.preventDefault(),{signal:a})}var Ro=50;function Xt(e){let t=e.__pulseSliderCleanup;typeof t=="function"&&t()}function qe(e,t,n,o){Xt(e);let i=e.querySelector(".bar-container");if(!i)return;let s=i,a=new AbortController,{signal:r}=a,l=null;e.__pulseSliderCleanup=()=>{a.abort(),l&&clearTimeout(l),g&&clearInterval(g),delete e.__pulseSliderCleanup};let c=typeof o.interactive=="object"?o.interactive:typeof n.interactive=="object"?n.interactive:void 0,d=null;function h(v){let y=s.getBoundingClientRect(),x=Math.max(0,Math.min(v-y.left,y.width)),$=y.width>0?x/y.width:0,A=t._hass?.states[o.entity],{min:E,max:M,step:I}=bt(o.entity,A,c,o),S=E+$*(M-E);return Ft(S,E,M,I)}function u(v){let x=t._hass?.states[o.entity],{min:$,max:k,step:A}=bt(o.entity,x,c,o),E=k-$,M=E>0?(v-$)/E*100:0,I=s.querySelector(".bar-fill");I&&(I.style.width=`${M}%`);let S=ht(o,x),w=(String(A).split(".")[1]||"").length,z=w>0?v.toFixed(w):String(Math.round(v)),F=S?`${z}${S}`:z,T=e.querySelectorAll(".bar-value");for(let P of T)P.textContent=F}function p(){if(!d)return;let v=s.querySelector(".bar-fill");v&&(v.style.transition="",v.style.width=d.fillWidth);let y=e.querySelectorAll(".bar-value");for(let x of y)x.textContent=d.displayValue}function _(v){let y=De(o.entity,v,c);if(!y){J("No slider service mapping for %s",o.entity),p();return}let x=t._hass;if(!x){p();return}x.callService(y.domain,y.service,y.data).catch($=>{J("Slider service call failed for %s: %O",o.entity,$),p()})}s.addEventListener("pointerdown",v=>{if(!t._hass)return;v.preventDefault();let y=s.querySelector(".bar-fill"),x=e.querySelector(".bar-value");d={fillWidth:y?.style.width||"0%",displayValue:x?.textContent||"",pointerId:v.pointerId,startX:v.clientX},e.__pulseSliding=!0,s.setPointerCapture(v.pointerId),e.classList.add("sliding"),y&&(y.style.transition="none");let $=h(v.clientX);u($)},{signal:r}),s.addEventListener("pointermove",v=>{if(!d||v.pointerId!==d.pointerId)return;v.preventDefault();let y=h(v.clientX);u(y)},{signal:r}),s.addEventListener("pointerup",v=>{if(!d||v.pointerId!==d.pointerId)return;v.preventDefault();let y=s.querySelector(".bar-fill");y&&(y.style.transition=""),e.classList.remove("sliding"),s.releasePointerCapture(v.pointerId);let x=h(v.clientX);u(x),_(x),d=null,l=setTimeout(()=>{e.__pulseSliding=!1},Ro)},{signal:r}),s.addEventListener("pointercancel",v=>{if(!d||v.pointerId!==d.pointerId)return;let y=s.querySelector(".bar-fill");y&&(y.style.transition=""),e.classList.remove("sliding"),s.releasePointerCapture(v.pointerId),p(),d=null,e.__pulseSliding=!1},{signal:r});let g=null;function b(v){let y=t._hass;if(!y)return;let x=y.states[o.entity],{min:$,max:k,step:A}=bt(o.entity,x,c,o),E=o.attribute?parseFloat(x?.attributes?.[o.attribute]):parseFloat(x?.state);if(isNaN(E))return;let M=Ft(E+v*A,$,k,A);M!==E&&(u(M),_(M))}let m=e.querySelectorAll(".bar-step-btn");for(let v of m){let y=Number(v.dataset.step);v.addEventListener("click",$=>{$.stopPropagation(),b(y)},{signal:r}),v.addEventListener("pointerdown",$=>{$.stopPropagation(),g&&clearInterval(g),g=setInterval(()=>b(y),200)},{signal:r});let x=()=>{g&&(clearInterval(g),g=null)};v.addEventListener("pointerup",x,{signal:r}),v.addEventListener("pointercancel",x,{signal:r}),v.addEventListener("pointerleave",x,{signal:r})}e.addEventListener("keydown",v=>{let y=t._hass;if(!y||v.key!=="ArrowRight"&&v.key!=="ArrowUp"&&v.key!=="ArrowLeft"&&v.key!=="ArrowDown")return;v.preventDefault();let x=y.states[o.entity],{min:$,max:k,step:A}=bt(o.entity,x,c,o),E=o.attribute?parseFloat(x?.attributes?.[o.attribute]):parseFloat(x?.state);if(isNaN(E))return;let M=v.key==="ArrowRight"||v.key==="ArrowUp"?1:-1,I=Ft(E+M*A,$,k,A);I!==E&&(u(I),_(I))},{signal:r})}function tt(e){if(!customElements.get("ha-ripple")||e.querySelector("ha-ripple"))return;let t=document.createElement("ha-ripple");e.appendChild(t),e.classList.add("has-ripple")}var Oe="1.1.0",Mt="pulse-climate-card",Be="pulse-climate-card-editor",Ve="Pulse Climate Card:",ct={heating:{icon:"mdi:fire",cssVar:"--label-badge-yellow",fallback:"#FF9800",label:"Heating"},cooling:{icon:"mdi:snowflake",cssVar:"--label-badge-blue",fallback:"#2196F3",label:"Cooling"},drying:{icon:"mdi:water-off",cssVar:null,fallback:"#9C27B0",label:"Drying"},fan:{icon:"mdi:fan",cssVar:null,fallback:"#607D8B",label:"Fan"},idle:{icon:"mdi:clock-outline",cssVar:"--secondary-text-color",fallback:"#9E9E9E",label:"Idle"},off:{icon:"mdi:power",cssVar:"--disabled-color",fallback:"#616161",label:"Off"}},Yt={None:{cssVar:"--label-badge-green",fallback:"#4CAF50"},Low:{cssVar:"--label-badge-green",fallback:"#8BC34A"},Medium:{cssVar:"--label-badge-yellow",fallback:"#FF9800"},High:{cssVar:"--label-badge-red",fallback:"#F44336"},Critical:{cssVar:"--label-badge-red",fallback:"#B71C1C"}},Ue=["zones"];var et=["var(--label-badge-blue, #2196F3)","var(--label-badge-red, #F44336)","var(--label-badge-green, #4CAF50)","var(--label-badge-yellow, #FF9800)","var(--accent-color, #9C27B0)","var(--info-color, #00BCD4)","var(--warning-color, #FF5722)","var(--success-color, #8BC34A)"],rt={columns:1,layout:"default",show_temp_bar:!0,show_power_bar:!0,tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}},je={graph:{attribute:"current_temperature",stacked:!1,hours_to_show:24,height:80},donut:{size:120},thermal_strip:{hours_to_show:24,mode:"timeline",slots_per_hour:2,attribute:"temperature"},comfort_strip:{slots_per_hour:1,hours_to_show:24,mode:"heatmap"},radial:{size:280,attribute:"temperature"},energy_flow:{}};var Jt=`
:host { display: block; }

ha-card {
  overflow: hidden;
  padding: 16px;
  background: var(--pulse-card-background, var(--ha-card-background, var(--card-background-color)));
  container-type: inline-size;
  color: var(--primary-text-color);
}

/* Title */
.pulse-title {
  font-size: 16px;
  font-weight: 500;
  color: var(--primary-text-color);
  margin-bottom: 12px;
}

/* Section container */
.section { margin-top: 12px; }
.section:first-child { margin-top: 0; }
.section-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--secondary-text-color);
  opacity: 0.7;
  margin-bottom: 6px;
  letter-spacing: 0.5px;
}

/* Zone row */
.zone-row {
  display: flex;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
}
.zone-row:focus-visible {
  outline: 2px solid var(--primary-color, #03A9F4);
  outline-offset: 2px;
  border-radius: 4px;
}
.zone-row.unavailable { opacity: 0.5; }
.zone-row.unavailable .power-bar-fill {
  background: var(--disabled-color, #bdbdbd) !important;
  width: 100% !important;
  opacity: 0.2;
}

/* Zone header: name + current temp */
.zone-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 2px;
  gap: 4px;
  min-width: 0;
}
.zone-name {
  font-size: var(--pulse-font-size, 14px);
  color: var(--pulse-name-color, var(--primary-text-color));
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
}
.zone-temp {
  font-size: var(--pulse-font-size, 14px);
  font-weight: 600;
  color: var(--pulse-value-color, var(--primary-text-color));
  white-space: nowrap;
  flex-shrink: 0;
}
.zone-target {
  font-size: 0.8em;
  color: var(--secondary-text-color);
  margin-left: 4px;
}
.zone-humidity {
  font-size: 0.8em;
  font-weight: 400;
  color: var(--secondary-text-color);
  opacity: 0.7;
  display: inline-flex;
  align-items: center;
  gap: 1px;
  margin-left: 4px;
}
.zone-humidity ha-icon {
  --mdc-icon-size: 12px;
}

/* Temperature gauge bar */
.temp-gauge {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: var(--pulse-gauge-height, 6px);
  border-radius: var(--pulse-gauge-radius, 3px);
}
.temp-gauge-bg {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0.25;
}
.temp-gauge-current {
  position: absolute;
  top: -1px;
  bottom: -1px;
  width: 3px;
  background: var(--primary-text-color);
  border-radius: 1.5px;
  z-index: 2;
  box-shadow: 0 0 0 1px var(--card-background-color, rgba(255,255,255,0.8));
}
.temp-gauge-target {
  position: absolute;
  top: -1px;
  bottom: -1px;
  width: 2px;
  background: var(--primary-text-color);
  opacity: 0.5;
  border-radius: 1px;
  z-index: 1;
  box-shadow: 0 0 0 1px var(--card-background-color, rgba(255,255,255,0.8));
}

/* Heating/cooling power bar */
.power-bar-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: var(--pulse-bar-height, 8px);
  border-radius: var(--pulse-bar-radius, 4px);
}
.power-bar-track {
  position: absolute;
  inset: 0;
  background: var(--primary-color, #03A9F4);
  opacity: 0.12;
  border-radius: inherit;
}
.power-bar-fill {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  border-radius: inherit;
  transition: width 0.8s ease, background-color 0.3s ease;
}
.power-bar-fill.bar-active {
  box-shadow: 0 0 8px 1px var(--bar-glow-color, rgba(255, 152, 0, 0.4));
  animation: barPulse 2.5s ease-in-out infinite;
}
@keyframes barPulse {
  0%, 100% { box-shadow: 0 0 6px 0 var(--bar-glow-color, rgba(255, 152, 0, 0.3)); }
  50% { box-shadow: 0 0 10px 2px var(--bar-glow-color, rgba(255, 152, 0, 0.5)); }
}

/* Status chips */
.zone-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 2px 0;
}
.chip {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-size: 11px;
  color: var(--pulse-chip-color, var(--secondary-text-color));
  white-space: nowrap;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
}
.chip ha-icon { --mdc-icon-size: 14px; }
.chip.severity-high { color: var(--label-badge-red, #F44336); }
.chip.severity-medium { color: var(--label-badge-yellow, #FF9800); }
.chip.severity-critical { color: var(--label-badge-red, #B71C1C); font-weight: 600; }

/* Multi-column zone grid */
.section-zones.columns {
  display: grid;
  gap: var(--pulse-gap, 16px);
}

@container (max-width: 300px) {
  .section-zones.columns { grid-template-columns: 1fr; }
}

/* Compact mode */
.compact .zone-row { gap: 2px; }
.compact .zone-name { font-size: 12px; }
.compact .zone-chips { gap: 4px; }
.compact .chip { font-size: 10px; }

/* System section rows */
.system-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 2px;
}
.system-label {
  font-size: 12px;
  color: var(--secondary-text-color);
  min-width: 80px;
}
/* \u2500\u2500 Chart Styles \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Graph container */
.chart-container {
  position: relative;
  width: 100%;
  height: var(--pulse-graph-height, 80px);
  overflow: hidden;
  border-radius: 4px;
}
.chart-svg {
  width: 100%;
  height: 100%;
  display: block;
}
.chart-svg path {
  stroke-width: var(--pulse-chart-line-width, 1.5);
  vector-effect: non-scaling-stroke;
}
.chart-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 12px;
  color: var(--secondary-text-color);
  opacity: 0.6;
}

/* Legend chips */
.chart-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 4px 0;
}
.legend-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: var(--secondary-text-color);
  white-space: nowrap;
}
.legend-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

/* Donut container */
.donut-container {
  position: relative;
  margin: 8px auto;
}
.donut-container svg {
  width: 100%;
  height: 100%;
}
.donut-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  font-weight: 600;
  color: var(--secondary-text-color);
  text-align: center;
}

/* Responsive: hide legend at narrow widths */
@container (max-width: 200px) {
  .chart-legend { display: none; }
  .chart-container { height: 50px; }
}

/* \u2500\u2500 Visual Identity Styles \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Filled sparkline (shared by pulse mode, graph, bridge, api) */
.sparkline-filled {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
  touch-action: pan-y;
}
.sparkline-filled svg {
  width: 100%;
  height: 100%;
  display: block;
}

/* Zone Pulse mode \u2014 waveform as row background */
.zone-row-pulse {
  position: relative;
  height: 56px;
  margin-bottom: 4px;
  border-radius: 10px;
  overflow: hidden;
  background: var(--pulse-row-bg, var(--secondary-background-color, rgba(58, 58, 60, 0.6)));
  display: flex;
  align-items: center;
  padding: 0 14px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: pan-y;
}
.zone-row-pulse:focus-visible {
  outline: 2px solid var(--primary-color, #03A9F4);
  outline-offset: 2px;
}
.zone-row-pulse .pulse-bg {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  display: block;
  z-index: 1;
}
.zone-row-pulse .pulse-info {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.pulse-info-left { display: flex; flex-direction: column; gap: 2px; }
.pulse-info-right { display: flex; align-items: baseline; gap: 6px; }
.pulse-current {
  font-size: 20px;
  font-weight: 300;
  color: var(--primary-text-color);
  font-variant-numeric: tabular-nums;
}
.pulse-status {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  color: var(--secondary-text-color);
}
.status-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  flex-shrink: 0;
}
@keyframes glowPulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}
.heating-glow { animation: glowPulse 3s ease-in-out infinite; }

/* Heating row glow \u2014 warm border shadow */
.zone-row-pulse.heating {
  animation: rowGlow 3s ease-in-out infinite;
}
@keyframes rowGlow {
  0%, 100% { box-shadow: 0 0 10px 1px rgba(255, 152, 0, 0.25), inset 0 0 10px 1px rgba(255, 152, 0, 0.06); }
  50% { box-shadow: 0 0 16px 2px rgba(255, 152, 0, 0.4), inset 0 0 14px 2px rgba(255, 152, 0, 0.1); }
}

/* Thermal Timeline layout */
.section-thermal-strip .timeline-row {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  cursor: pointer;
  border-radius: 6px;
  padding: 2px 0;
  position: relative;
  overflow: hidden;
  transition: background 0.15s;
}
.section-thermal-strip .timeline-row:hover {
  background: color-mix(in srgb, var(--primary-color, #03A9F4) 6%, transparent);
}
.section-thermal-strip .timeline-row.selected { background: color-mix(in srgb, var(--primary-color, #03A9F4) 12%, transparent); }
.section-thermal-strip .timeline-row.selected .strip-container,
.section-comfort-strip .heatmap-row.selected .strip-container { height: 18px; }
.section-thermal-strip .timeline-row.selected .zone-label { color: var(--primary-text-color, #e5e5e7); font-weight: 500; }
.section-thermal-strip .zone-label {
  width: 76px;
  font-size: 11px;
  color: var(--secondary-text-color, #a1a1a6);
  text-align: right;
  padding-right: 10px;
  flex-shrink: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* Strip container \u2014 shared by thermal strip and comfort strip (timeline mode) */
.section-thermal-strip .strip-container,
.section-comfort-strip .strip-container {
  flex: 1;
  height: 14px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  touch-action: pan-y;
}
.section-thermal-strip .now-marker,
.section-comfort-strip .now-marker {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1.5px;
  background: var(--primary-text-color, #333);
  opacity: 0.4;
  z-index: 2;
}
.section-thermal-strip .time-axis {
  display: flex;
  justify-content: space-between;
  padding: 4px 0 8px;
}
.section-thermal-strip .time-label {
  font-size: 9px;
  color: var(--secondary-text-color, #636366);
  opacity: 0.7;
}

/* Strip tooltip \u2014 shared by timeline and heatmap */
.strip-tooltip {
  position: absolute;
  top: -26px;
  font-size: 10px;
  color: var(--primary-text-color, #e5e5e7);
  background: var(--pulse-glass-bg, var(--ha-card-background, var(--card-background-color, rgba(255, 255, 255, 0.75))));
  backdrop-filter: blur(var(--pulse-glass-blur, 8px));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur, 8px));
  border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  z-index: 10;
  transform: translateX(-50%);
}
.strip-tooltip-fixed {
  position: fixed;
  top: auto;
  z-index: 9999;
}

/* Strip crosshair \u2014 vertical line across all zone rows */
.strip-crosshair {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--primary-text-color, #333);
  opacity: 0.25;
  pointer-events: none;
  z-index: 5;
}

/* Drag selection highlight */
.strip-drag-highlight {
  position: absolute;
  top: 0;
  bottom: 0;
  background: var(--primary-color, #03A9F4);
  opacity: 0.12;
  border-radius: 2px;
  pointer-events: none;
  z-index: 4;
}

/* Comfort Heatmap \u2014 HTML div cells for hover/click */
.section-comfort-strip .heatmap-body { padding: 4px 0; }
.section-comfort-strip .heatmap-row {
  display: flex;
  align-items: center;
  margin-bottom: 3px;
  cursor: pointer;
  border-radius: 6px;
  padding: 2px 0;
  position: relative;
  overflow: hidden;
  transition: background 0.15s;
}
.section-comfort-strip .heatmap-row:hover { background: color-mix(in srgb, var(--primary-color, #03A9F4) 6%, transparent); }
.section-comfort-strip .heatmap-row.selected { background: color-mix(in srgb, var(--primary-color, #03A9F4) 12%, transparent); }
.section-comfort-strip .zone-label {
  width: 66px;
  font-size: 10px;
  color: var(--secondary-text-color, #a1a1a6);
  text-align: right;
  padding-right: 8px;
  flex-shrink: 0;
  transition: color 0.2s;
}
.section-comfort-strip .heatmap-row.selected .zone-label {
  color: var(--primary-text-color);
  font-weight: 500;
}
/* Heatmap cells \u2014 shared by comfort strip and thermal strip (heatmap mode) */
.section-comfort-strip .cells,
.section-thermal-strip .cells {
  display: flex;
  gap: 1px;
  flex: 1;
  touch-action: pan-y;
}
.section-comfort-strip .cell,
.section-thermal-strip .cell {
  flex: 1;
  height: 16px;
  border-radius: 2px;
  transition: transform 0.15s, height 0.2s;
}
.section-comfort-strip .heatmap-row.selected .cell,
.section-thermal-strip .timeline-row.selected .cell { height: 20px; }
.section-comfort-strip .cell:hover,
.section-thermal-strip .cell:hover { transform: scaleY(1.2); z-index: 1; }
.section-comfort-strip .cell-empty,
.section-thermal-strip .cell-empty {
  background: var(--divider-color, rgba(0,0,0,0.08));
}
.heatmap-legend {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 0;
  justify-content: center;
}
.heatmap-legend .legend-item {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 9px;
  color: var(--secondary-text-color, #8e8e93);
}
.heatmap-legend .legend-swatch {
  width: 8px;
  height: 8px;
  border-radius: 2px;
}
.heatmap-time-axis {
  display: flex;
  justify-content: space-between;
  margin-left: 66px;
  padding: 4px 0 14px;
  font-size: 9px;
  color: var(--secondary-text-color, #636366);
}

/* Energy Flow */
.ribbon-active { /* animation handled by SVG <animate> on gradient */ }
.ribbon { cursor: pointer; transition: opacity 0.2s; }
.ribbon:hover { opacity: 1 !important; }
.ribbon.dimmed { opacity: 0.2; }

/* Radial */
.section-radial { text-align: center; }
.radial-container {
  display: flex;
  justify-content: center;
  position: relative;
}
.center-info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  transition: opacity 0.25s;
  background: var(--pulse-glass-bg, var(--ha-card-background, var(--card-background-color, rgba(255, 255, 255, 0.75))));
  backdrop-filter: blur(var(--pulse-glass-blur, 8px));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur, 8px));
  border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.center-value {
  font-size: 28px;
  font-weight: 300;
  color: var(--primary-text-color);
  transition: font-size 0.25s;
}
.center-label {
  font-size: 10px;
  color: var(--secondary-text-color, #8e8e93);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 2px;
}
.center-sub {
  font-size: 10px;
  color: var(--secondary-text-color, #636366);
  margin-top: 2px;
}
.arc-group {
  cursor: pointer;
  transition: opacity 0.2s;
  opacity: 0.6;
}
.arc-group.arc-active { opacity: 1; }
.arc-group:hover { opacity: 1 !important; }
.arc-group.dimmed { opacity: 0.2 !important; }
.arc-group.selected { opacity: 1 !important; }
.arc-path {
  cursor: pointer;
}
.arc-path:hover { opacity: 1 !important; }

/* Radial legend */
.radial-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 12px;
  margin-top: 16px;
  justify-content: center;
}
.radial-legend .legend-item {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  color: var(--secondary-text-color, #a1a1a6);
  cursor: pointer;
  padding: 2px 4px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  transition: background 0.15s, color 0.15s;
}
.radial-legend .legend-item:hover { background: color-mix(in srgb, var(--primary-color, #03A9F4) 8%, transparent); }
.radial-legend .legend-item.selected { background: color-mix(in srgb, var(--primary-color, #03A9F4) 16%, transparent); color: var(--primary-text-color); }
.radial-legend .legend-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}
.legend-temp {
  font-variant-numeric: tabular-nums;
  color: var(--primary-text-color);
  font-weight: 500;
}

/* Zone detail panel (shared by radial, thermal strip, comfort strip, energy flow) */
.zone-detail {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: max-height 0.35s ease, opacity 0.25s ease, padding 0.35s ease;
  padding: 0;
}
.zone-detail.active {
  max-height: 240px;
  opacity: 1;
  padding: 14px 0 16px;
  background: var(--pulse-glass-bg, var(--ha-card-background, var(--card-background-color, rgba(255, 255, 255, 0.75))));
  backdrop-filter: blur(var(--pulse-glass-blur, 8px));
  -webkit-backdrop-filter: blur(var(--pulse-glass-blur, 8px));
  border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
  border-radius: 8px;
}
.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
}
.detail-name { font-size: 15px; font-weight: 500; }
.detail-close {
  font-size: 11px;
  color: var(--secondary-text-color, #636366);
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: background 0.15s;
}
.detail-close:hover { background: color-mix(in srgb, var(--primary-color, #03A9F4) 10%, transparent); }
.detail-stats { display: flex; gap: 16px; }
.stat { flex: 1; }
.stat-value {
  font-size: 22px;
  font-weight: 300;
  font-variant-numeric: tabular-nums;
}
.stat-label {
  font-size: 10px;
  color: var(--secondary-text-color, #8e8e93);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  margin-top: 2px;
}
.stat-sub {
  font-size: 10px;
  color: var(--secondary-text-color, #636366);
  margin-top: 1px;
}
.detail-bar {
  margin-top: 10px;
  height: 6px;
  border-radius: 3px;
  background: var(--pulse-row-bg, var(--secondary-background-color, #3a3a3c));
  overflow: hidden;
}
.detail-bar-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.4s ease;
}
.detail-sparkline {
  border-radius: 6px;
  overflow: hidden;
}

/* API Dashboard */
.api-dashboard {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.api-row {
  display: flex;
  align-items: center;
  gap: 8px;
}
.usage-gauge {
  position: relative;
  flex-shrink: 0;
}
.gauge-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  font-weight: 600;
  color: var(--secondary-text-color);
  text-align: center;
  line-height: 1.2;
}

/* HomeKit pulse dot */
.pulse-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 4px;
  vertical-align: middle;
}
.pulse-dot.connected {
  background: var(--label-badge-green, #4CAF50);
  animation: pulse-glow 2s ease-in-out infinite;
}
.pulse-dot.disconnected {
  background: var(--label-badge-red, #F44336);
}
@keyframes pulse-glow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Bridge flow temp */
.flow-temp-value {
  font-size: 18px;
  font-weight: 600;
}
.flow-sparkline {
  display: inline-block;
  vertical-align: middle;
}

/* Responsive degradation for new sections */
@container (max-width: 200px) {
  .section-thermal-strip .time-axis { display: none; }
  .section-comfort-strip svg text { display: none; }
  .api-row { flex-direction: column; }
}

/* Temperature transition glow \u2014 brief brightness flash on temp change */
.temp-transitioning {
  filter: brightness(1.4);
  transition: filter 0.3s ease-in, filter 0.8s ease-out 0.3s;
}

/* Reduced motion \u2014 respect prefers-reduced-motion for users sensitive to animation */
@media (prefers-reduced-motion: reduce) {
  .power-bar-fill.bar-active { animation: none; }
  .heating-glow { animation: none; }
  .zone-row-pulse.heating { animation: none; }
  .pulse-dot.connected { animation: none; }
  .temp-transitioning { filter: none; transition: none; }
}
`;function dt(e,...t){console.warn(`${Ve} ${e}`,...t)}function gt(e){return ct[e]||ct.idle}function wt(e,t,n){let o=it(e,{},t,n||{entity:e},{});return{name:o.name,temp:o.currentTemp??void 0,target:o.targetTemp??void 0,humidity:o.humidity??void 0,hvacAction:o.hvacAction,unit:o.unit}}function Lt(e){let t=e.charAt(0).toUpperCase()+e.slice(1).toLowerCase();return Yt[t]||Yt.Low}function xt(e,t,n){return n<=t?50:Y((e-t)/(n-t),0,1)*100}function Do(e,t,n,o){let i=[],s=!o,a=l=>s||o.includes(l);if(o&&a("humidity")&&e.humidity!==null&&i.push({type:"humidity",icon:"mdi:water-percent",label:`${Math.round(e.humidity)}%`}),a("hvac_action")){let l=gt(e.hvacAction);i.push({type:"hvac_action",icon:l.icon,label:l.label,color:l.fallback})}if(a("overlay")&&e.overlayType){let l=e.overlayType==="Manual"?"mdi:hand-back-right":"mdi:calendar-clock";i.push({type:"overlay",icon:l,label:e.overlayType,entityId:t.overlay})}if(a("preset")&&e.presetMode){let l=e.presetMode==="away"?"mdi:home-export-outline":"mdi:home";i.push({type:"preset",icon:l,label:e.presetMode==="away"?"Away":"Home"})}let r=(l,c,d)=>{if(!a(l)||!t[d])return;let h=n[t[d]];if(h&&!["unavailable","unknown","none"].includes(h.state.toLowerCase())){let u=Lt(h.state);i.push({type:l,icon:c,label:h.state,color:u.fallback,severity:h.state,entityId:t[d]})}};if(a("open_window")&&t.open_window){let l=n[t.open_window];if(l){let c=l.state==="on";i.push({type:"open_window",icon:c?"mdi:window-open":"mdi:window-closed",label:c?"Open":"Closed",color:c?"#F44336":void 0,entityId:t.open_window})}}if(a("window_predicted")&&t.window_predicted){let l=n[t.window_predicted];l&&l.state==="on"&&i.push({type:"window_predicted",icon:"mdi:window-open-variant",label:"Window predicted",color:"#FF9800",entityId:t.window_predicted})}if(r("mold_risk","mdi:mushroom","mold_risk"),r("condensation","mdi:water-alert","condensation"),a("comfort_level")&&t.comfort_level){let l=n[t.comfort_level];l&&l.state!=="unavailable"&&i.push({type:"comfort_level",icon:"mdi:emoticon-outline",label:l.state,entityId:t.comfort_level})}if(a("preheat_now")&&t.preheat_now){let l=n[t.preheat_now];l&&l.state==="on"&&i.push({type:"preheat_now",icon:"mdi:radiator",label:"Preheating",color:"#FF9800",entityId:t.preheat_now})}if(a("battery")&&t.battery){let l=n[t.battery];if(l&&l.state!=="unavailable"){let c=l.state.toLowerCase(),d=c==="low"||c==="critical"?"mdi:battery-alert":"mdi:battery",h=c==="critical"?"#F44336":c==="low"?"#FF9800":void 0;i.push({type:"battery",icon:d,label:l.state,color:h,entityId:t.battery})}}if(a("valve_control")){let c=n[e.entityId]?.attributes||{},d=c.valve_control_active,h=c.valve_target;c.valve_control_backed_off===!0?i.push({type:"valve_control",icon:"mdi:valve",label:"Valve: Backed off",color:"#9E9E9E"}):d===!0&&h!==void 0&&i.push({type:"valve_control",icon:"mdi:valve",label:`Valve: ${h}${e.unit}`,color:"#FF9800"})}if(o&&a("temp_source")){let c=n[e.entityId]?.attributes?.temperature_source;if(c&&c!=="cloud"){let d=c==="external"?"mdi:thermometer-probe":c==="homekit"?"mdi:apple":"mdi:cloud-outline";i.push({type:"temp_source",icon:d,label:c.charAt(0).toUpperCase()+c.slice(1)})}}return i}function it(e,t,n,o,i){let s=n[e],a=!s||s.state==="unavailable"||s.state==="unknown",r=s?.attributes||{},l=e.startsWith("sensor."),c=l?a?null:parseFloat(s?.state)||null:r.current_temperature??null,d=a||s?.state==="off"?null:r.temperature??null,h=l?null:r.current_humidity??null,u=l?"idle":r.hvac_action||(s?.state==="off"?"off":"idle"),p=l?"sensor":s?.state||"off",_=r.preset_mode||"",g=Number(r.min_temp??5),b=Number(r.max_temp??35),m=Number(r.target_temp_step??.5),v=r.unit_of_measurement||"\xB0C",y=0;if(t.heating_power){let I=n[t.heating_power];I&&I.state!=="unavailable"&&(y=parseFloat(I.state)||0)}else r.heating_power!==void 0&&(y=parseFloat(r.heating_power)||0);let x=0;if(t.ac_power){let I=n[t.ac_power];I&&I.state!=="unavailable"&&(x=parseFloat(I.state)||0)}let $="";if(t.overlay){let I=n[t.overlay];I&&I.state!=="unavailable"&&($=I.state)}else r.overlay_type&&($=r.overlay_type);let k=o.name||r.friendly_name||e.replace(/^(climate|sensor)\./,""),A=o.icon||r.icon||"mdi:thermometer",E=o.chips||i.chips||null,M={entityId:e,name:k,icon:A,isUnavailable:a,currentTemp:c,targetTemp:d,humidity:h,heatingPower:y,coolingPower:x,hvacAction:u,hvacMode:p,presetMode:_,overlayType:$,minTemp:g,maxTemp:b,tempStep:m,unit:v,chips:[]};return M.chips=Do(M,t,n,E),M}var We=280;function Qt(e,t=We){return e<=50?0:(2+(e-50)/50*3)*(t/We)}function Ge(e,t=20,n=1){if(n<=0)return 0;let o=Math.min(4,Math.max(2,Math.round(e/30))),i=Math.floor(t/n);return Math.min(o,i)}function Ze(e){return 4-e/100*2.5}function Ke(e,t){return 1.5+e/t*1.5}function _t(e,t){return 3*(e/t)}function Xe(e){if(!e)throw new Error("Please define an entity or zones");if(!e.entity&&!e.zones)throw new Error("Please define an entity or zones");if(e.entity&&typeof e.entity=="string"&&!e.entity.startsWith("climate.")&&!e.entity.startsWith("water_heater."))throw new Error("Entity must be a climate.* or water_heater.* entity");let t;e.zones?t=e.zones.map(o=>typeof o=="string"?{entity:o}:{...o}):t=[{entity:e.entity}];for(let o of t)if(!o.entity||typeof o.entity!="string")throw new Error("Each zone must have an entity ID");let n={...e,columns:Number(e.columns)||rt.columns,layout:e.layout||rt.layout,show_temp_bar:e.show_temp_bar??rt.show_temp_bar,show_power_bar:e.show_power_bar??rt.show_power_bar,tap_action:e.tap_action||{...rt.tap_action},hold_action:e.hold_action||{...rt.hold_action},double_tap_action:e.double_tap_action||{...rt.double_tap_action},sections:e.sections||[...Ue],_zones:t};return Array.isArray(n.sections)&&(n.sections=n.sections.map(o=>{let i=typeof o=="string"?{type:o}:{...o},s=je[i.type];if(s)for(let[a,r]of Object.entries(s))i[a]===void 0||i[a]===null?i[a]=r:typeof r=="number"&&(i[a]=Number(i[a])||r);return i})),n}var Qe={api_usage:"api_usage",api_limit:"api_limit",api_status:"api_status",api_reset:"api_reset",token_status:"token_status",polling_interval:"polling_interval",call_history:"call_history",api_breakdown:"api_breakdown",last_sync:"last_sync",next_sync:"next_sync",outside_temp:"outside_temp",solar_intensity:"solar_intensity",weather:"weather",home_state:"home",bridge_connected:"bridge_connected",boiler_flow_temp:"boiler_flow_temp",wc_target_flow:"wc_target_flow_temp",wc_status:"wc_status",boiler_max_output:"boiler_max_output_temp",homekit_connected:"homekit_connected",homekit_reads_saved:"homekit_reads_saved",homekit_writes_saved:"homekit_writes_saved",bridge_capabilities:"bridge_capabilities",bridge_schema_version:"bridge_schema_version",zone_count:"zone_count",home_id:"home_id",home_insights:"home_insights"},Po={temperature:"temperature",humidity:"humidity",heating_power:"heating_power",ac_power:"ac_power",target_temp:"target",overlay:"overlay",mold_risk:"mold_risk",mold_risk_pct:"mold_risk_pct",condensation:"condensation_risk",surface_temp:"surface_temp",dew_point:"dew_point",comfort_level:"comfort_level",thermal_inertia:"thermal_inertia",heating_rate:"heating_rate",preheat_time:"preheat_time",confidence:"confidence",heat_accel:"heat_accel",approach_factor:"approach_factor",schedule_deviation:"schedule_deviation",next_schedule:"next_schedule",next_sched_temp:"next_sched_temp",preheat_advisor:"preheat_advisor",comfort_target:"comfort_target",open_window:"window",preheat_now:"preheat_now",window_predicted:"window_predicted",battery:"battery",connection:"connection",insights:"insights"},qo={battery:"battery",connection:"connection"},Oo={temperature:{platform:"sensor",suffixes:["_temp","_temperature"]},humidity:{platform:"sensor",suffixes:["_humidity"]},heating_power:{platform:"sensor",suffixes:["_heating","_heating_power"]},ac_power:{platform:"sensor",suffixes:["_ac","_ac_power"]},target_temp:{platform:"sensor",suffixes:["_ce_target","_target"]},overlay:{platform:"sensor",suffixes:["_ce_overlay","_mode"]},mold_risk:{platform:"sensor",suffixes:["_ce_mold_risk","_mold_risk"]},mold_risk_pct:{platform:"sensor",suffixes:["_ce_mold_risk_pct","_mold_risk_percentage"]},condensation:{platform:"sensor",suffixes:["_ce_condensation","_condensation_risk"]},surface_temp:{platform:"sensor",suffixes:["_ce_surface_temp","_surface_temperature"]},dew_point:{platform:"sensor",suffixes:["_ce_dew_point","_dew_point"]},comfort_level:{platform:"sensor",suffixes:["_ce_comfort_level","_comfort_level"]},thermal_inertia:{platform:"sensor",suffixes:["_ce_thermal_inertia","_thermal_inertia"]},heating_rate:{platform:"sensor",suffixes:["_ce_heating_rate","_avg_heating_rate"]},preheat_time:{platform:"sensor",suffixes:["_ce_preheat_time","_preheat_time"]},confidence:{platform:"sensor",suffixes:["_ce_confidence","_analysis_confidence"]},schedule_deviation:{platform:"sensor",suffixes:["_ce_schedule_deviation","_historical_deviation"]},next_schedule:{platform:"sensor",suffixes:["_ce_next_schedule","_next_schedule_time"]},next_sched_temp:{platform:"sensor",suffixes:["_ce_next_sched_temp","_next_schedule_temp"]},preheat_advisor:{platform:"sensor",suffixes:["_ce_preheat_advisor","_preheat_advisor"]},comfort_target:{platform:"sensor",suffixes:["_ce_comfort_target","_smart_comfort_target"]},heat_accel:{platform:"sensor",suffixes:["_ce_heat_accel","_heat_acceleration"]},approach_factor:{platform:"sensor",suffixes:["_ce_approach_factor","_approach_factor"]},open_window:{platform:"binary_sensor",suffixes:["_window","_open_window"]},preheat_now:{platform:"binary_sensor",suffixes:["_ce_preheat_now","_preheat_now"]},window_predicted:{platform:"binary_sensor",suffixes:["_ce_window_predicted","_window_predicted"]},battery:{platform:"sensor",suffixes:["_ce_battery","_battery"]},connection:{platform:"binary_sensor",suffixes:["_ce_connection","_connection"]},insights:{platform:"sensor",suffixes:["_ce_insights","_insights"]}},Bo={api_usage:{platform:"sensor",suffixes:["_api_usage"]},api_limit:{platform:"sensor",suffixes:["_api_limit"]},api_status:{platform:"sensor",suffixes:["_api_status"]},api_reset:{platform:"sensor",suffixes:["_api_reset"]},token_status:{platform:"sensor",suffixes:["_token_status"]},polling_interval:{platform:"sensor",suffixes:["_polling_interval"]},call_history:{platform:"sensor",suffixes:["_call_history"]},api_breakdown:{platform:"sensor",suffixes:["_api_breakdown","_api_call_breakdown"]},last_sync:{platform:"sensor",suffixes:["_last_sync"]},next_sync:{platform:"sensor",suffixes:["_next_sync"]},outside_temp:{platform:"sensor",suffixes:["_outside_temp"]},solar_intensity:{platform:"sensor",suffixes:["_solar_intensity"]},weather:{platform:"sensor",suffixes:["_weather","_weather_state"]},home_state:{platform:"binary_sensor",suffixes:["_home"]},bridge_connected:{platform:"binary_sensor",suffixes:["_bridge_connected","_bridge"]},boiler_flow_temp:{platform:"sensor",suffixes:["_boiler_flow_temp"]},wc_target_flow:{platform:"sensor",suffixes:["_wc_target_flow_temp"]},wc_status:{platform:"sensor",suffixes:["_wc_status"]},boiler_max_output:{platform:"number",suffixes:["_boiler_max_output_temp"]},homekit_connected:{platform:"binary_sensor",suffixes:["_homekit_connected"]},homekit_reads_saved:{platform:"sensor",suffixes:["_homekit_reads_saved"]},homekit_writes_saved:{platform:"sensor",suffixes:["_homekit_writes_saved"]},bridge_capabilities:{platform:"sensor",suffixes:["_bridge_capabilities"]},bridge_schema_version:{platform:"sensor",suffixes:["_bridge_schema_version"]},zone_count:{platform:"sensor",suffixes:["_zone_count","_zones_count"]},home_id:{platform:"sensor",suffixes:["_home_id"]},home_insights:{platform:"sensor",suffixes:["_home_insights"]}};function Vo(e){let t=new Map,n=new Map;for(let[o,i]of Object.entries(e))if(i.platform==="tado_ce"&&(i.translation_key&&(t.has(i.translation_key)||t.set(i.translation_key,o)),i.unique_id)){let s=i.unique_id.split("_"),a=s.findIndex((r,l)=>l>=2&&!/^\d+$/.test(r));if(a>0){let r=s.slice(a).join("_");n.set(r,o)}}return{byTranslationKey:t,byUniqueIdSuffix:n}}function Uo(e,t){let n={};for(let[o,i]of Object.entries(Qe)){let s=t.byTranslationKey.get(i);if(s){n[o]=s;continue}let a=t.byUniqueIdSuffix.get(i);a&&(n[o]=a)}return n}function jo(e,t,n){let o=new Map;for(let[s,a]of Object.entries(e)){if(a.platform!=="tado_ce"||!a.unique_id)continue;let r=a.unique_id.match(/^tado_ce_\d+_zone_(\d+)_(.+)$/);if(!r)continue;let[,l,c]=r;o.has(l)||o.set(l,[]),o.get(l).push({suffix:c,entityId:s})}let i={};for(let s of t){i[s]={};let a=`climate.${s}`,r=e[a],l=null;if(r?.platform==="tado_ce"&&r.unique_id){let c=r.unique_id.match(/^tado_ce_\d+_zone_(\d+)_/);c&&(l=c[1])}if(l&&o.has(l)){let c=o.get(l);for(let[d,h]of Object.entries(Po)){let u=c.find(p=>e[p.entityId]?.translation_key===h);u&&n[u.entityId]&&(i[s][d]=u.entityId)}}}for(let s of t){let a=`climate.${s}`,r=e[a];if(!r?.device_id)continue;let l=r.device_id;for(let[c,d]of Object.entries(e))if(!(d.platform!=="tado_ce"||d.device_id!==l)&&!(!d.translation_key||!n[c])){for(let[h,u]of Object.entries(qo))if(d.translation_key===u)i[s][h]||(i[s][h]=c);else if(d.translation_key===`${u}_suffixed`){let p=`${h}_2`;i[s][p]||(i[s][p]=c)}}}return i}function Ye(e){let t={},n=Object.keys(e);for(let[o,{platform:i,suffixes:s}]of Object.entries(Bo))for(let a of s){let r=n.find(l=>l.startsWith(`${i}.tado_ce`)&&l.endsWith(a));if(r){t[o]=r;break}}return t}function Je(e,t){let n={};for(let o of t){n[o]={};for(let[i,{platform:s,suffixes:a}]of Object.entries(Oo))for(let r of a){let l=`${s}.${o}${r}`;if(e[l]){n[o][i]=l;break}}}return n}var pt={states:null,zoneNames:null,result:null};function to(e,t,n){if(pt.result&&pt.states===e&&pt.zoneNames!==null&&pt.zoneNames.length===t.length&&pt.zoneNames.every((c,d)=>c===t[d]))return pt.result;let o=!1,i=!1;n&&(o=Object.values(n).some(c=>c.platform==="tado_ce"),i=o),o||(o=Object.keys(e).some(c=>c.startsWith("sensor.tado_ce_")));let s={};if(o)if(i){let c=Vo(n);s=Uo(n,c);let d=Ye(e);for(let[h,u]of Object.entries(d))s[h]||(s[h]=u)}else s=Ye(e);let a;if(i){a=jo(n,t,e);let c=Je(e,t);for(let d of t){a[d]||(a[d]={});let h=c[d]||{};for(let[u,p]of Object.entries(h))a[d][u]||(a[d][u]=p)}}else a=Je(e,t);let r=Object.keys(Qe).filter(c=>!s[c]),l={isTadoCE:o,hubEntities:s,zoneEntities:a,missingHubKeys:r};return pt={states:e,zoneNames:[...t],result:l},l}function H(e){return e.replace(/^(climate|sensor|binary_sensor)\./,"")}var Nt={timestamp:0,data:{}};function eo(){return Nt}function oo(e){let t={...Nt.data};for(let[n,o]of Object.entries(e))o.length>0&&(t[n]=o);return Nt={timestamp:Date.now(),data:t},Nt}function no(){return{timestamp:0,data:{}}}function te(e){return e.timestamp>0&&Date.now()-e.timestamp<3e5}function io(e,t){let n={...e.data};for(let[o,i]of Object.entries(t))i.length>0&&(n[o]=i);return{timestamp:Date.now(),data:n}}function ee(e,t){if(e.length===0||t<1)return[];let n=e[0].t,s=(e[e.length-1].t-n||1)/t,a=[],r=0,l=e[0].v;for(let c=0;c<t;c++){let d=n+(c+1)*s,h=0,u=0;for(;r<e.length&&e[r].t<d;)h+=e[r].v,u++,r++;u>0&&(l=h/u),a.push({x:c/(t-1||1),v:l})}return a}function ro(e,t,n,o,i){let a=n-4,r=i-o||1,l=e.map(h=>({x:h.x*t,y:2+a-(h.v-o)/r*a}));if(l.length<2)return"";if(l.length===2)return`M${l[0].x.toFixed(1)},${l[0].y.toFixed(1)}L${l[1].x.toFixed(1)},${l[1].y.toFixed(1)}`;let c=l[0],d=`M${c.x.toFixed(1)},${c.y.toFixed(1)}`;for(let h=1;h<l.length;h++){let u=l[h],p=(c.x+u.x)/2,_=(c.y+u.y)/2;d+=` ${p.toFixed(1)},${_.toFixed(1)}`,d+=` Q${u.x.toFixed(1)},${u.y.toFixed(1)}`,c=u}return d+=` ${c.x.toFixed(1)},${c.y.toFixed(1)}`,d}function so(e,t,n,o=48){if(!e||e.length===0)return[];let i=1/0,s=-1/0;for(let a of e)for(let r of a.data)isFinite(r.v)&&(r.v<i&&(i=r.v),r.v>s&&(s=r.v));return isFinite(i)||(i=0),isFinite(s)||(s=100),e.map(a=>{let r=a.data.filter(d=>isFinite(d.v));if(r.length<2)return{entityId:a.entityId,color:a.color,d:""};let l=ee(r,o),c=ro(l,t,n,i,s);return{entityId:a.entityId,color:a.color,d:c}})}function Ht(e,t,n,o){if(!e||e.length===0)return[];let i=n??t/2-2,s=o??i*.6,a=t/2,r=t/2,l=e.map(u=>Math.max(0,u.value)),c=l.reduce((u,p)=>u+p,0);if(c===0)return[];let d=[],h=-90;for(let u=0;u<e.length;u++){if(l[u]===0)continue;let p=l[u]/c*360;p>=360&&(p=359.9);let _=h+p,g=Rt(a,r,s,i,h,_);d.push({label:e[u].label,color:e[u].color,d:g,angle:p}),h=_}return d}function vt(e){if(!e||e.length===0)return"";let t='<div class="chart-legend">';for(let n of e){let o=C(n.color),i=f(n.label),s=n.value!==void 0&&n.value!==null?` ${f(n.value)}`:"";t+=`<span class="legend-chip"><span class="legend-dot" style="background:${o}"></span>${i}${s}</span>`}return t+="</div>",t}function W(e){return e<=14?"#1565C0":e<=16?"#4FC3F7":e<=17?"#4DB6AC":e<=18?"#81C784":e<=19?"#AED581":e<=20?"#C5E1A5":e<=21?"#FFF176":e<=22?"#FFB74D":e<=23?"#FF8A65":e<=24?"#EF5350":"#C62828"}function $t(e){return e<=20?"#C62828":e<=30?"#EF5350":e<=35?"#FF8A65":e<=40?"#FFB74D":e<=45?"#AED581":e<=55?"#4CAF50":e<=60?"#AED581":e<=65?"#4DB6AC":e<=70?"#4FC3F7":e<=80?"#1E88E5":"#1565C0"}function Rt(e,t,n,o,i,s){let a=i*Math.PI/180,r=s*Math.PI/180,l=s-i,c=Math.abs(l)>180?1:0,d=e+o*Math.cos(a),h=t+o*Math.sin(a),u=e+o*Math.cos(r),p=t+o*Math.sin(r),_=e+n*Math.cos(r),g=t+n*Math.sin(r),b=e+n*Math.cos(a),m=t+n*Math.sin(a);return[`M${d.toFixed(2)},${h.toFixed(2)}`,`A${o.toFixed(2)},${o.toFixed(2)} 0 ${c} 1 ${u.toFixed(2)},${p.toFixed(2)}`,`L${_.toFixed(2)},${g.toFixed(2)}`,`A${n.toFixed(2)},${n.toFixed(2)} 0 ${c} 0 ${b.toFixed(2)},${m.toFixed(2)}`,"Z"].join(" ")}function ot(e,t,n,o=48){if(!e||e.length<2)return null;let i=e.filter(u=>isFinite(u.v));if(i.length<2)return null;let s=Date.now(),a=i[i.length-1];s-a.t>6e5&&i.push({t:s,v:a.v});let r=ee(i,o);if(r.length<2)return null;let l=1/0,c=-1/0;for(let u of r)u.v<l&&(l=u.v),u.v>c&&(c=u.v);isFinite(l)||(l=0),isFinite(c)||(c=100);let d=ro(r,t,n,l,c);if(!d)return null;let h=`${d} L${t.toFixed(1)},${n.toFixed(1)} L0,${n.toFixed(1)} Z`;return{linePath:d,areaPath:h}}function oe(e,t=24,n=""){if(!e||e.length<2)return"";let o=e.filter(c=>isFinite(c.v));if(o.length<2)return"";let i=ee(o,t),s=o[0].t,a=o[o.length-1].t,r=o.every(c=>Number.isInteger(c.v)),l={u:n,d:[]};return l.d=i.map(c=>{let d=s+c.x*(a-s),h=new Date(d),u=`${String(h.getHours()).padStart(2,"0")}:${String(h.getMinutes()).padStart(2,"0")}`,p=r?Math.round(c.v):Math.round(c.v*10)/10;return{l:u,v:p}}),JSON.stringify(l)}function st(e,t,n,o,i,s=""){if(!e||e.length<2)return"";let a=ot(e,t,n,24);if(!a)return"";let r=C(o),l=`<div class="sparkline-filled" style="height:${n}px">`;return l+=`<svg viewBox="0 0 ${t} ${n}" role="img" aria-label="${f(s)}" preserveAspectRatio="none" style="width:100%;height:${n}px;display:block">`,l+=`<defs><linearGradient id="${f(i)}" x1="0" y1="0" x2="0" y2="1">`,l+=`<stop offset="0%" stop-color="${r}" stop-opacity="0.3"/>`,l+=`<stop offset="100%" stop-color="${r}" stop-opacity="0"/>`,l+="</linearGradient></defs>",l+=`<path d="${a.areaPath}" fill="url(#${f(i)})" />`,l+=`<path d="${a.linePath}" fill="none" stroke="${r}" stroke-width="1.5" />`,l+="</svg></div>",l}var Wo=new Set(["friendly_name","icon","unit_of_measurement","device_class"]);function Dt(e,t){let n=[],o=0;if(Array.isArray(e.chart_data)&&e.chart_data.length>0){for(let i of e.chart_data)i.type&&typeof i.count=="number"&&(n.push({label:i.type,value:Math.max(0,i.count),color:t[o%t.length]}),o++);return n}if(e.breakdown_24h&&typeof e.breakdown_24h=="object"){for(let[i,s]of Object.entries(e.breakdown_24h)){let a=Number(s);!isNaN(a)&&a>0&&(n.push({label:i,value:a,color:t[o%t.length]}),o++)}return n}for(let[i,s]of Object.entries(e)){if(Wo.has(i))continue;let a=Number(s);isNaN(a)||(n.push({label:i,value:Math.max(0,a),color:t[o%t.length]}),o++)}return n}function Go(e,t,n,o){let i=t.show_temp_bar??n.show_temp_bar??!0,s=t.show_power_bar??n.show_power_bar??!0,a=e.isUnavailable?" unavailable":"",r=e.isUnavailable?"Unavailable":e.currentTemp!==null?`${e.currentTemp}${f(e.unit)}`:"--",l=!e.isUnavailable&&e.targetTemp!==null?`<span class="zone-target">\u2192 ${e.targetTemp}${f(e.unit)}</span>`:"",c=!e.isUnavailable&&e.humidity!==null?` <span class="zone-humidity"><ha-icon icon="mdi:water-percent"></ha-icon>${Math.round(e.humidity)}%</span>`:"",d=e.isUnavailable?`${f(e.name)}: Unavailable`:`${f(e.name)}: ${r}${e.targetTemp!==null?`, target ${e.targetTemp}${e.unit}`:""}${e.humidity!==null?`, ${Math.round(e.humidity)}% humidity`:""}, ${e.hvacAction}`,h=`<div class="zone-row${a}" tabindex="0" role="button"
    aria-label="${f(d)}" data-entity="${f(e.entityId)}">`;if(h+='<div class="zone-header">',h+=`<span class="zone-name">${f(e.name)}${c}</span>`,h+=`<span class="zone-temp">${r}${l}</span>`,h+="</div>",i&&!e.isUnavailable){let p=e.currentTemp!==null?xt(e.currentTemp,e.minTemp,e.maxTemp):50,_=e.targetTemp!==null?xt(e.targetTemp,e.minTemp,e.maxTemp):null,g=W(e.minTemp),b=W((e.minTemp+e.maxTemp)/2),m=W(e.maxTemp),v=`linear-gradient(to right, ${C(g)}, ${C(b)}, ${C(m)})`;h+='<div class="temp-gauge">',h+=`<div class="temp-gauge-bg" style="background:${v}"></div>`,h+=`<div class="temp-gauge-current" style="left:${C(p.toFixed(1))}%"></div>`,_!==null&&(h+=`<div class="temp-gauge-target" style="left:${C(_.toFixed(1))}%"></div>`),h+="</div>"}if(s&&!e.isUnavailable){let p=e.heatingPower||e.coolingPower||0,_=gt(e.hvacAction),g=_.cssVar?`var(${_.cssVar}, ${_.fallback})`:_.fallback;if(p>0||e.hvacAction==="heating"||e.hvacAction==="cooling"){let b=Math.min(100,Math.max(0,p)),m=p>0?" bar-active":"";h+='<div class="power-bar-container">',h+='<div class="power-bar-track"></div>',h+=`<div class="power-bar-fill${m}" style="width:${C(b.toFixed(1))}%;background:${C(g)};--bar-glow-color:${C(_.fallback)}40"></div>`,h+="</div>"}}if(e.chips.length>0){h+='<div class="zone-chips">';for(let p of e.chips){let _=p.severity?` severity-${p.severity.toLowerCase()}`:"",g=p.color?` style="color:${C(p.color)}"`:"",b=p.entityId?` data-entity="${f(p.entityId)}"`:"";h+=`<span class="chip${_}"${g}${b} data-chip-type="${f(p.type)}">`,h+=`<ha-icon icon="${f(p.icon)}"></ha-icon>`,h+=`${f(p.label)}`,h+="</span>"}h+="</div>"}let u=t.sparkline?.mode||"overlay";if(u==="pulse"&&!e.isUnavailable)return Zo(e,t,o);if(!e.isUnavailable&&o&&o.length>=2){let p=gt(e.hvacAction),_=t.color||p.fallback;u==="prominent"&&(h+=Ko(_,o,e.unit))}return h+="</div>",h}function Zo(e,t,n){let o=gt(e.hvacAction),i=e.heatingPower>0||e.hvacAction==="heating",s=e.hvacAction==="cooling",a=i||s,r=a?t.color||o.fallback:"var(--secondary-text-color, #9E9E9E)",l=C(r),c=f(e.entityId).replace(/\./g,"-"),d=e.heatingPower||e.coolingPower||0,h=e.hvacAction==="heating"?`Heating ${Math.round(d)}%`:e.hvacAction==="cooling"?`Cooling ${Math.round(d)}%`:"Idle",u=e.currentTemp!==null?`${e.currentTemp}${f(e.unit)}`:"--",p=e.targetTemp!==null?`\u2192 ${e.targetTemp}${f(e.unit)}`:"",_=`${f(e.name)}: ${u}, ${h}`,g=`zone-row zone-row-pulse${i?" heating":""}`,b=oe(n||[],24,e.unit),m=`<div class="${g}" tabindex="0" role="button"
    aria-label="${f(_)}" data-entity="${f(e.entityId)}"${b?` data-sparkline='${f(b)}'`:""}>`;if(n&&n.length>=2){let v=ot(n,360,56,60);if(v){let y=`pulse-grad-${c}`,x=`pulse-glow-${c}`,$=a?" heating-glow":"",k=a?"0.55":"0.2",A=a?"0.05":"0.02",E=a?"2":"1.5",M=a?"1":"0.5";m+='<svg class="pulse-bg" viewBox="0 0 360 56" preserveAspectRatio="none">',m+="<defs>",m+=`<linearGradient id="${y}" x1="0" y1="0" x2="0" y2="1">`,m+=`<stop offset="0%" stop-color="${l}" stop-opacity="${k}"/>`,m+=`<stop offset="100%" stop-color="${l}" stop-opacity="${A}"/>`,m+="</linearGradient>",a&&(m+=`<filter id="${x}"><feGaussianBlur stdDeviation="${_t(360,360).toFixed(1)}" result="b"/>`,m+='<feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>'),m+="</defs>",m+=`<path d="${v.areaPath}" fill="url(#${y})" />`,m+=`<path d="${v.linePath}" fill="none" stroke="${l}" stroke-width="${E}" opacity="${M}"`,a&&(m+=` filter="url(#${x})" class="${$}"`),m+=" />",m+="</svg>"}}return m+='<div class="pulse-info">',m+='<div class="pulse-info-left">',m+=`<div class="zone-name">${f(e.name)}</div>`,m+='<div class="pulse-status">',m+=`<span class="status-dot" style="background:${l}"></span>`,m+=`${f(h)}`,m+="</div>",m+="</div>",m+='<div class="pulse-info-right">',m+=`<span class="pulse-current">${f(u)}</span>`,p&&(m+=`<span class="zone-target">${p}</span>`),m+="</div>",m+="</div>",m+="</div>",m}function Ko(e,t,n){let o=ot(t,300,40,48);if(!o){let r=yt(t,300,40,48,"avg",!0);return r?`<div class="sparkline-prominent"><svg viewBox="0 0 300 40" preserveAspectRatio="none"><path d="${r}" fill="none" stroke="${C(e)}" stroke-width="1.5" opacity="0.7" /></svg></div>`:""}let i=C(e),s=oe(t,24,n),a=`<div class="sparkline-filled" style="height:40px"${s?` data-sparkline='${f(s)}'`:""}>`;return a+='<svg viewBox="0 0 300 40" preserveAspectRatio="none">',a+='<defs><linearGradient id="prom-grad" x1="0" y1="0" x2="0" y2="1">',a+=`<stop offset="0%" stop-color="${i}" stop-opacity="0.3"/>`,a+=`<stop offset="100%" stop-color="${i}" stop-opacity="0"/>`,a+="</linearGradient></defs>",a+=`<path d="${o.areaPath}" fill="url(#prom-grad)" />`,a+=`<path d="${o.linePath}" fill="none" stroke="${i}" stroke-width="1.5" opacity="0.7" />`,a+="</svg></div>",a}function ne(e,t,n,o,i){if(!e||e.length===0)return"";let s=Number(t.columns)||1,a=s>1?" columns":"",r=s>1?` style="grid-template-columns:repeat(${Number(s)}, 1fr)"`:"",l=`<div class="section section-zones${a}"${r}>`,c=o?.hubEntities?.home_state,d=c?n[c]:null;if(d&&d.state!=="unavailable"){let h=d.state==="on",u=h?"mdi:home":"mdi:home-export-outline",p=h?"Home":"Away",_=h?"var(--label-badge-green, #4CAF50)":"var(--secondary-text-color)";l+='<div style="display:flex;justify-content:space-between;align-items:center">',l+='<div class="section-label">Zones</div>',l+=`<span class="chip" data-entity="${f(c)}" style="color:${C(_)}">`,l+=`<ha-icon icon="${f(u)}"></ha-icon>${f(p)}</span>`,l+="</div>"}else l+='<div class="section-label">Zones</div>';for(let h of e){let u=h.entity,p=H(u),_=o?.zoneEntities?.[p]||{},g=it(u,_,n,h,t),b=h.temperature_entity||_.temperature||u,m=i?.data?.[b]||i?.data?.[u]||[];l+=Go(g,h,t,m)}return l+="</div>",l}function ao(e,t,n,o,i,s){if(!e||!t)return;let a=e.querySelectorAll(".zone-row");for(let r=0;r<t.length;r++){let l=t[r],c=l.entity,d=H(c),h=i?.zoneEntities?.[d]||{},u=o[c],p=s[c];if(u===p&&a[r])continue;let _=it(c,h,o,l,n),g=a[r];if(!g)continue;let b=g.querySelector(".zone-temp");if(b){let $=_.isUnavailable?"Unavailable":_.currentTemp!==null?`${_.currentTemp}${_.unit}`:"--",k=!_.isUnavailable&&_.targetTemp!==null?`<span class="zone-target">\u2192 ${_.targetTemp}${f(_.unit)}</span>`:"";b.innerHTML=`${f($)}${k}`}let m=g.querySelector(".power-bar-fill");if(m){let $=_.heatingPower||_.coolingPower||0,k=gt(_.hvacAction),A=k.cssVar?`var(${k.cssVar}, ${k.fallback})`:k.fallback;m.style.width=`${Math.min(100,Math.max(0,$)).toFixed(1)}%`,m.style.background=A,m.style.setProperty("--bar-glow-color",`${k.fallback}40`),m.classList.toggle("bar-active",$>0)}let v=g.querySelector(".temp-gauge-current");if(v&&_.currentTemp!==null){let $=xt(_.currentTemp,_.minTemp,_.maxTemp);v.style.left=`${$.toFixed(1)}%`}let y=g.querySelector(".temp-gauge-target");if(y&&_.targetTemp!==null){let $=xt(_.targetTemp,_.minTemp,_.maxTemp);y.style.left=`${$.toFixed(1)}%`}let x=g.querySelector(".temp-gauge-bg");if(x&&!_.isUnavailable){let $=W(_.minTemp),k=W((_.minTemp+_.maxTemp)/2),A=W(_.maxTemp);x.style.background=`linear-gradient(to right, ${$}, ${k}, ${A})`}_.isUnavailable?g.classList.add("unavailable"):g.classList.remove("unavailable")}}function lo(e){return e>95?"var(--label-badge-red, #F44336)":e>80?"var(--label-badge-yellow, #FF9800)":"var(--label-badge-green, #4CAF50)"}function Xo(e){let t=(e||"").toLowerCase();return t==="ok"||t==="healthy"?"var(--label-badge-green, #4CAF50)":t==="warning"?"var(--label-badge-yellow, #FF9800)":"var(--label-badge-red, #F44336)"}function Yo(e,t){let n=t>0?Math.min(100,e/t*100):0,o=lo(n),i=80,s=i/2,a=i/2,r=i/2-4,l=r*.7,c=Rt(s,a,l,r,-90,269.9),d=-90+n/100*360,h=n>0?Rt(s,a,l,r,-90,Math.min(d,269.9)):"",u=n>95,p=n>80,_=u||p,g='<div class="usage-gauge">';if(g+=`<svg viewBox="0 0 ${i} ${i}" role="img" aria-label="API usage: ${Math.round(e)} of ${Math.round(t)}" style="width:${i}px;height:${i}px">`,_&&(g+='<defs><filter id="gauge-glow"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>'),g+=`<path d="${c}" fill="var(--divider-color, rgba(0,0,0,0.12))" />`,h){if(g+=`<path d="${h}" fill="${C(o)}"${_?' filter="url(#gauge-glow)"':""}>`,g+=`<title>API usage: ${Math.round(n)}%</title>`,_){let b=u?"1":"2.5";nt()||(g+=`<animate attributeName="opacity" values="1;0.5;1" dur="${b}s" repeatCount="indefinite"/>`)}g+="</path>"}return g+="</svg>",g+=`<div class="gauge-center">${f(Math.round(e))}<br><span style="font-size:10px;opacity:0.6">/ ${f(Math.round(t))}</span></div>`,g+="</div>",g}function Jo(e,t,n){let o=t?.data?.[e]||[];return st(o,200,40,n,"api-hist-grad","API usage history")}function Qo(e){let t=Dt(e,et);if(t.length===0)return"";let n=60,o=Ht(t,n),i=t.reduce((l,c)=>l+c.value,0),s='<div style="display:flex;align-items:center;gap:12px">';s+=`<div class="donut-container" style="width:${n}px;height:${n}px;flex-shrink:0;margin:0">`,s+=`<svg viewBox="0 0 ${n} ${n}" role="img" aria-label="API call breakdown">`;let a=n/2-2,r=a*.6;s+=`<circle cx="${n/2}" cy="${n/2}" r="${((a+r)/2).toFixed(1)}" fill="none" stroke="var(--divider-color, rgba(0,0,0,0.12))" stroke-width="${(a-r).toFixed(1)}" />`;for(let l of o)s+=`<path d="${l.d}" fill="${C(l.color)}"><title>${f(l.label)}: ${Math.round(l.angle/360*i)}</title></path>`;return s+="</svg>",s+=`<div class="donut-center" style="font-size:12px">${f(Math.round(i))}</div>`,s+="</div>",s+=vt(t.map(l=>({label:l.label,color:l.color,value:String(Math.round(l.value))}))),s+="</div>",s}function ie(e,t,n,o){if(!e.api_usage||!e.api_limit)return"";let i=parseFloat(t[e.api_usage]?.state)||0,s=parseFloat(t[e.api_limit]?.state)||100,a=s>0?Math.min(100,i/s*100):0,r=lo(a),l=t[e.api_status]?.state||"unknown",c=Xo(l),d='<div class="section section-api">';d+='<div class="section-label">API Usage</div>',d+='<div class="api-dashboard">',d+='<div class="api-row">',d+=Yo(i,s);let h=e.api_usage;if(h&&o&&(d+=Jo(h,o,r)),d+="</div>",e.api_breakdown&&t[e.api_breakdown]&&(d+='<div class="api-row">',d+=Qo(t[e.api_breakdown].attributes||{}),d+="</div>"),d+='<div class="zone-chips">',e.call_history&&t[e.call_history]){let u=t[e.call_history].attributes?.calls_per_hour;u!=null&&Number(u)>0&&(d+=`<span class="chip" data-entity="${f(e.call_history)}">`,d+=`<ha-icon icon="mdi:speedometer"></ha-icon>${f(Math.round(Number(u)))}/hr</span>`)}if(e.polling_interval&&t[e.polling_interval]){let u=t[e.polling_interval],p=u.attributes?.unit_of_measurement||"";d+=`<span class="chip" data-entity="${f(e.polling_interval)}">Poll: ${f(u.state)}${p?f(p):""}</span>`}if(e.next_sync&&t[e.next_sync]){let u=t[e.next_sync].state,p=u,_=0;if(u&&u.includes("T"))try{let g=new Date(u);_=g.getTime();let b=_-Date.now();if(b>0&&b<36e5){let m=Math.floor(b/6e4),v=Math.floor(b%6e4/1e3);p=m>0?`${m}m ${v}s`:`${v}s`}else p=`${String(g.getHours()).padStart(2,"0")}:${String(g.getMinutes()).padStart(2,"0")}`}catch{}d+=`<span class="chip chip-next-sync" data-entity="${f(e.next_sync)}" data-target="${_}">Next: ${f(p)}</span>`}if(e.api_reset&&t[e.api_reset]){let u=t[e.api_reset].state,p=u;if(u&&u.includes("T"))try{let _=new Date(u);p=`${String(_.getHours()).padStart(2,"0")}:${String(_.getMinutes()).padStart(2,"0")}`}catch{}d+=`<span class="chip" data-entity="${f(e.api_reset)}">Reset: ${f(p)}</span>`}return e.token_status&&t[e.token_status]&&(d+=`<span class="chip" data-entity="${f(e.token_status)}">Token: ${f(t[e.token_status].state)}</span>`),d+=`<span class="chip" data-entity="${e.api_status?f(e.api_status):""}" style="color:${C(c)}">${f(l)}</span>`,d+="</div>",d+="</div>",d+="</div>",d}function re(e,t,n){if(!e.bridge_connected)return"";let o=t[e.bridge_connected];if(!o)return"";let i=o.state==="on",s=i?"var(--label-badge-green, #4CAF50)":"var(--label-badge-red, #F44336)",a=i?"Connected":"Disconnected",r=i?"pulse-dot connected":"pulse-dot disconnected",l=o.attributes||{},c=l.response_time_ms,d=l.consecutive_failures,h=l.last_error,u=e.boiler_flow_temp&&t[e.boiler_flow_temp]?.attributes?.unit_of_measurement||"\xB0C",p='<div class="section section-bridge">';if(p+='<div class="section-label">Bridge</div>',p+='<div class="zone-chips">',p+=`<span class="chip" data-entity="${f(e.bridge_connected)}" style="color:${C(s)}">`,p+=`<span class="${r}"></span>`,p+=`${f(a)}</span>`,c!==void 0&&(p+=`<span class="chip" data-entity="${f(e.bridge_connected)}">${f(Math.round(c))}ms</span>`),d!==void 0&&d>0&&(p+=`<span class="chip" data-entity="${f(e.bridge_connected)}" style="color:var(--label-badge-red, #F44336)">Failures: ${f(d)}</span>`),p+="</div>",e.boiler_flow_temp&&t[e.boiler_flow_temp]){let b=parseFloat(t[e.boiler_flow_temp].state),m=t[e.boiler_flow_temp].state,v=isNaN(b)?"var(--primary-text-color)":W(b);if(p+='<div style="display:flex;align-items:center;gap:8px;margin-top:4px">',p+=`<span class="flow-temp-value" style="color:${C(v)}">${f(m)}${f(u)}</span>`,n){let y=n.data?.[e.boiler_flow_temp]||[],x=st(y,120,30,v,"bridge-flow-grad","Boiler flow temperature history");x&&(p+=`<div class="flow-sparkline">${x}</div>`)}p+="</div>"}let _=e.wc_status&&t[e.wc_status],g=e.wc_target_flow&&t[e.wc_target_flow];if((_||g)&&(p+='<div class="zone-chips">',_&&(p+=`<span class="chip" data-entity="${f(e.wc_status)}">${f(t[e.wc_status].state)}</span>`),g&&(p+=`<span class="chip" data-entity="${f(e.wc_target_flow)}">Target: ${f(t[e.wc_target_flow].state)}${f(u)}</span>`),p+="</div>"),e.boiler_max_output&&t[e.boiler_max_output]){let b=t[e.boiler_max_output].state;b!=="unavailable"&&b!=="unknown"&&(p+='<div class="zone-chips">',p+=`<span class="chip" data-entity="${f(e.boiler_max_output)}">`,p+=`<ha-icon icon="mdi:thermometer-high"></ha-icon>Max: ${f(b)}${f(u)}</span>`,p+="</div>")}return h&&h!=="None"&&h!=="null"&&(p+='<div class="zone-chips">',p+=`<span class="chip" style="color:var(--label-badge-red, #F44336)">Error: ${f(h)}</span>`,p+="</div>"),p+="</div>",p}var Pt="var(--label-badge-green, #4CAF50)",co="var(--accent-color, #9C27B0)";function se(e,t,n){if(!e.homekit_connected)return"";let o=t[e.homekit_connected];if(!o)return"";let i=o.state==="on",s=i?Pt:"var(--label-badge-red, #F44336)",a=i?"Connected":"Disconnected",r=i?"pulse-dot connected":"pulse-dot disconnected",l=o.attributes||{},c=l.uptime||"",d=l.mapped_zones,h=l.reconnect_count,u=e.homekit_reads_saved?t[e.homekit_reads_saved]:null,p=e.homekit_writes_saved?t[e.homekit_writes_saved]:null,_=u?Number(u.state)||0:Number(l.reads_saved_today)||0,g=p?Number(p.state)||0:Number(l.writes_saved_today)||0,b=_+g,m='<div class="section section-homekit">',v=b>0?` \xB7 ${b} saved`:"";if(m+=`<div class="section-label">HomeKit${f(v)}</div>`,m+='<div class="zone-chips">',m+=`<span class="chip" data-entity="${f(e.homekit_connected)}" style="color:${C(s)}">`,m+=`<span class="${r}"></span>`,m+=`${f(a)}`,c&&(m+=` <span style="opacity:0.6;font-size:10px">${f(c)}</span>`),m+="</span>",d!==void 0&&(m+=`<span class="chip">${f(d)} zones</span>`),h!==void 0&&h>0&&(m+=`<span class="chip" style="color:var(--label-badge-yellow, #FF9800)">Reconnects: ${f(h)}</span>`),m+="</div>",_>0||g>0){let A=b>0?_/b*100:100;m+='<div style="margin-top:4px">',m+='<div class="power-bar-container">',m+='<div class="power-bar-track"></div>',m+=`<div class="power-bar-fill" style="width:100%;background:${C(co)}"></div>`,m+=`<div class="power-bar-fill" style="width:${C(A.toFixed(1))}%;background:${C(Pt)}"></div>`,m+="</div>",m+="</div>";let E=e.homekit_reads_saved;if(E&&n){let S=n.data?.[E]||[];m+=st(S,200,30,Pt,"hk-spark-grad","HomeKit saved calls history")}m+='<div class="zone-chips">';let M=e.homekit_reads_saved||"",I=e.homekit_writes_saved||"";m+=`<span class="chip"${M?` data-entity="${f(M)}"`:""} style="color:${C(Pt)}">Reads: ${f(_)}</span>`,g>0&&(m+=`<span class="chip"${I?` data-entity="${f(I)}"`:""} style="color:${C(co)}">Writes: ${f(g)}</span>`),m+="</div>"}let y=Number(l.write_attempts)||0,x=Number(l.write_successes)||0,$=Number(l.write_fallbacks)||0,k=Number(l.write_avg_latency_ms)||0;return(y>0||x>0||$>0)&&(m+='<div class="zone-chips">',y>0&&(m+=`<span class="chip">Attempts: ${f(y)}</span>`),x>0&&(m+=`<span class="chip">Successes: ${f(x)}</span>`),$>0&&(m+=`<span class="chip" style="color:var(--label-badge-yellow, #FF9800)">Fallbacks: ${f($)}</span>`),k>0&&(m+=`<span class="chip">Latency: ${f(k)}ms</span>`),m+="</div>"),m+="</div>",m}function tn(e){return{sunny:"mdi:weather-sunny",clear:"mdi:weather-night",cloudy:"mdi:weather-cloudy",partlycloudy:"mdi:weather-partly-cloudy",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy",fog:"mdi:weather-fog",windy:"mdi:weather-windy",lightning:"mdi:weather-lightning"}[(e||"").toLowerCase()]||"mdi:weather-cloudy"}function ae(e,t,n){if(!e.outside_temp)return"";let o=t[e.outside_temp]?.state,i=t[e.weather]?.state||"",s=e.solar_intensity?t[e.solar_intensity]?.state:null,a='<div class="section section-weather">';a+='<div class="section-label">Weather</div>',a+='<div class="zone-chips">',i&&(a+=`<span class="chip"${e.weather?` data-entity="${f(e.weather)}"`:""}><ha-icon icon="${f(tn(i))}"></ha-icon>${f(i)}</span>`),o!=null&&(a+=`<span class="chip" data-entity="${f(e.outside_temp)}"><ha-icon icon="mdi:thermometer"></ha-icon>${f(o)}${f(t[e.outside_temp]?.attributes?.unit_of_measurement||"\xB0C")}</span>`),s!=null&&(a+=`<span class="chip"${e.solar_intensity?` data-entity="${f(e.solar_intensity)}"`:""}><ha-icon icon="mdi:white-balance-sunny"></ha-icon>${f(s)}%</span>`),a+="</div>";let r=e.outside_temp;if(r&&n){let l=n.data?.[r]||[],c=parseFloat(o||"0"),d=isNaN(c)?"var(--primary-text-color)":W(c);a+=st(l,200,30,d,"weather-spark-grad","Outdoor temperature history")}return a+="</div>",a}function le(e,t,n){let o=!1,i='<div class="section section-environment">';i+='<div class="section-label">Environment</div>';for(let s of e){let a=H(s.entity),r=n?.zoneEntities?.[a]||{},l=r.mold_risk&&t[r.mold_risk],c=r.condensation&&t[r.condensation],d=r.comfort_level&&t[r.comfort_level],h=r.surface_temp&&t[r.surface_temp],u=r.dew_point&&t[r.dew_point];if(!l&&!c&&!d&&!h&&!u)continue;o=!0;let p=s.name||t[s.entity]?.attributes?.friendly_name||a;if(i+=`<div class="system-row"><span class="system-label">${f(p)}</span>`,i+='<div class="zone-chips">',l){let _=t[r.mold_risk].state,g=Lt(_);i+=`<span class="chip" data-entity="${f(r.mold_risk)}" style="color:${C(g.fallback)}">`,i+=`<ha-icon icon="mdi:mushroom"></ha-icon>${f(_)}</span>`}if(c){let _=t[r.condensation].state,g=Lt(_);i+=`<span class="chip" data-entity="${f(r.condensation)}" style="color:${C(g.fallback)}">`,i+=`<ha-icon icon="mdi:water-alert"></ha-icon>${f(_)}</span>`}d&&(i+=`<span class="chip" data-entity="${f(r.comfort_level)}"><ha-icon icon="mdi:emoticon-outline"></ha-icon>${f(t[r.comfort_level].state)}</span>`),h&&(i+=`<span class="chip" data-entity="${f(r.surface_temp)}"><ha-icon icon="mdi:texture-box"></ha-icon>${f(t[r.surface_temp].state)}${t[r.surface_temp]?.attributes?.unit_of_measurement||"\xB0C"}</span>`),u&&(i+=`<span class="chip" data-entity="${f(r.dew_point)}"><ha-icon icon="mdi:water-thermometer"></ha-icon>${f(t[r.dew_point].state)}${t[r.dew_point]?.attributes?.unit_of_measurement||"\xB0C"}</span>`),i+="</div></div>"}return i+="</div>",o?i:""}function ce(e,t,n){let o=!1,i='<div class="section section-thermal">';i+='<div class="section-label">Thermal Analytics</div>';for(let s of e){let a=H(s.entity),r=n?.zoneEntities?.[a]||{},l=r.heating_rate&&t[r.heating_rate],c=r.thermal_inertia&&t[r.thermal_inertia],d=r.preheat_time&&t[r.preheat_time],h=r.confidence&&t[r.confidence],u=r.heat_accel&&t[r.heat_accel],p=r.approach_factor&&t[r.approach_factor];if(!l&&!c&&!d&&!h&&!u&&!p)continue;o=!0;let _=s.name||t[s.entity]?.attributes?.friendly_name||a;i+=`<div class="system-row"><span class="system-label">${f(_)}</span>`,i+='<div class="zone-chips">',l&&(i+=`<span class="chip" data-entity="${f(r.heating_rate)}"><ha-icon icon="mdi:trending-up"></ha-icon>${f(t[r.heating_rate].state)}${t[r.heating_rate]?.attributes?.unit_of_measurement||"\xB0C/hr"}</span>`),c&&(i+=`<span class="chip" data-entity="${f(r.thermal_inertia)}"><ha-icon icon="mdi:speedometer"></ha-icon>${f(t[r.thermal_inertia].state)}</span>`),d&&(i+=`<span class="chip" data-entity="${f(r.preheat_time)}"><ha-icon icon="mdi:timer-outline"></ha-icon>${f(t[r.preheat_time].state)} min</span>`),h&&(i+=`<span class="chip" data-entity="${f(r.confidence)}"><ha-icon icon="mdi:check-circle-outline"></ha-icon>${f(t[r.confidence].state)}%</span>`),u&&(i+=`<span class="chip" data-entity="${f(r.heat_accel)}"><ha-icon icon="mdi:rocket-launch"></ha-icon>${f(t[r.heat_accel].state)}${t[r.heat_accel]?.attributes?.unit_of_measurement||""}</span>`),p&&(i+=`<span class="chip" data-entity="${f(r.approach_factor)}"><ha-icon icon="mdi:target"></ha-icon>${f(t[r.approach_factor].state)}${t[r.approach_factor]?.attributes?.unit_of_measurement||""}</span>`),i+="</div></div>"}return i+="</div>",o?i:""}function de(e,t,n){let o=!1,i='<div class="section section-schedule">';i+='<div class="section-label">Schedule</div>';for(let s of e){let a=H(s.entity),r=n?.zoneEntities?.[a]||{},l=r.next_schedule&&t[r.next_schedule],c=r.schedule_deviation&&t[r.schedule_deviation],d=r.preheat_advisor&&t[r.preheat_advisor],h=r.comfort_target&&t[r.comfort_target];if(!l&&!c&&!d&&!h)continue;o=!0;let u=s.name||t[s.entity]?.attributes?.friendly_name||a;if(i+=`<div class="system-row"><span class="system-label">${f(u)}</span>`,i+='<div class="zone-chips">',l){let p=r.next_sched_temp&&t[r.next_sched_temp]?` \u2192 ${f(t[r.next_sched_temp].state)}${t[r.next_sched_temp]?.attributes?.unit_of_measurement||"\xB0C"}`:"";i+=`<span class="chip" data-entity="${f(r.next_schedule)}"><ha-icon icon="mdi:calendar-clock"></ha-icon>${f(t[r.next_schedule].state)}${p}</span>`}c&&(i+=`<span class="chip" data-entity="${f(r.schedule_deviation)}"><ha-icon icon="mdi:swap-vertical"></ha-icon>${f(t[r.schedule_deviation].state)}${t[r.schedule_deviation]?.attributes?.unit_of_measurement||"\xB0C"}</span>`),d&&(i+=`<span class="chip" data-entity="${f(r.preheat_advisor)}"><ha-icon icon="mdi:radiator"></ha-icon>${f(t[r.preheat_advisor].state)}</span>`),h&&(i+=`<span class="chip" data-entity="${f(r.comfort_target)}"><ha-icon icon="mdi:target"></ha-icon>${f(t[r.comfort_target].state)}${t[r.comfort_target]?.attributes?.unit_of_measurement||"\xB0C"}</span>`),i+="</div></div>"}return i+="</div>",o?i:""}function en(e,t){let n=t&&t.length>0?t:et;return n[e%n.length]}function on(e,t,n){let i=[];for(let a of e){let r=ot(a.data,300,t,48);r&&i.push({...r,color:a.color,entityId:a.entityId})}if(i.length===0){let a=so(e,300,t);if(!a.some(c=>c.d!==""))return'<div class="chart-empty">No data available</div>';let l=`<svg viewBox="0 0 300 ${t}" role="img" aria-label="${f(n)}" class="chart-svg" preserveAspectRatio="none">`;for(let c of a)c.d!==""&&(l+=`<path d="${c.d}" fill="none" stroke="${C(c.color)}" stroke-width="var(--pulse-chart-line-width, 1.5)" data-entity="${f(c.entityId)}" />`);return l+="</svg>",l}let s=`<svg viewBox="0 0 300 ${t}" role="img" aria-label="${f(n)}" class="chart-svg" preserveAspectRatio="none">`;s+="<defs>";for(let a=0;a<i.length;a++){let r=`graph-grad-${a}`;s+=`<linearGradient id="${r}" x1="0" y1="0" x2="0" y2="1">`,s+=`<stop offset="0%" stop-color="${C(i[a].color)}" stop-opacity="0.25"/>`,s+=`<stop offset="100%" stop-color="${C(i[a].color)}" stop-opacity="0"/>`,s+="</linearGradient>"}s+="</defs>";for(let a=0;a<i.length;a++){let r=i[a];s+=`<path d="${r.areaPath}" fill="url(#graph-grad-${a})" />`,s+=`<path d="${r.linePath}" fill="none" stroke="${C(r.color)}" stroke-width="var(--pulse-chart-line-width, 1.5)" data-entity="${f(r.entityId)}" />`}return s+="</svg>",s}function ue(e,t,n,o,i){let s=e.attribute||"current_temperature",a=e.stacked===!0,r=Number(e.height)||80,l=e.palette||void 0,c=e.entities||t.map(h=>h.entity);if(c.length===0)return"";let d='<div class="section section-graph">';return a?(d+=pe(c,"current_temperature","Temperature",r,l,n,o,i,t),d+=pe(c,"current_humidity","Humidity",r,l,n,o,i,t)):d+=pe(c,s,s==="current_humidity"?"Humidity":"Temperature",r,l,n,o,i,t),d+="</div>",d}function nn(e,t,n,o){let i=H(e),s=n?.zoneEntities?.[i]||{},a=o?.find(r=>r.entity===e);return t==="current_temperature"||t==="temperature"?a?.temperature_entity||s.temperature||e:(t==="current_humidity"||t==="humidity")&&(a?.humidity_entity||s.humidity)||e}function pe(e,t,n,o,i,s,a,r,l){let c=[],d=[];for(let _=0;_<e.length;_++){let g=e[_],b=en(_,i),m=nn(g,t,r,l),v=s.data[m]||[],y=H(g),$=l?.find(E=>E.entity===g)?.name||a[g]?.attributes?.friendly_name||y,k=a[g]?.attributes?.[t],A=t==="current_humidity"?"%":a[g]?.attributes?.unit_of_measurement||"\xB0C";c.push({entityId:m,data:v,color:b}),d.push({label:$,color:b,value:k!=null?`${k}${A}`:"--"})}let h=d.map(_=>_.label).join(", "),u=`${n} history for ${h}`,p=`<div class="section-label">${f(n)}</div>`;return p+=`<div class="chart-container" style="height:${C(o)}px">`,p+=on(c,o,u),p+="</div>",p+=vt(d),p}function he(e,t,n){let o=Number(e.size)||120,i=e.source,s=[];if(i==="api_breakdown"?s=rn(t,n):i==="homekit_saved"?s=sn(t,n):e.segments&&(s=an(e.segments,n)),s.length===0)return"";let a=s.reduce((g,b)=>g+b.value,0),r=Ht(s,o),l='<div class="section section-donut">',d=i&&{api_breakdown:"API Breakdown",homekit_saved:"HomeKit Saved"}[i]||"Breakdown";l+=`<div class="section-label">${f(d)}</div>`;let h=s.map(g=>`${g.label} ${g.value}`).join(", ");l+=`<div class="donut-container" style="width:${C(o)}px;height:${C(o)}px">`,l+=`<svg viewBox="0 0 ${o} ${o}" role="img" aria-label="${f(h)}">`;let u=o/2-2,p=u*.6;l+=`<circle cx="${o/2}" cy="${o/2}" r="${((u+p)/2).toFixed(1)}" fill="none" stroke="var(--divider-color, rgba(0,0,0,0.12))" stroke-width="${(u-p).toFixed(1)}" />`;for(let g of r)l+=`<path d="${g.d}" fill="${C(g.color)}" data-segment="${f(g.label)}"><title>${f(g.label)}: ${Math.round(g.angle/360*a)}</title></path>`;l+="</svg>",l+=`<div class="donut-center">${f(Math.round(a))}</div>`,l+="</div>";let _=s.map(g=>({label:g.label,color:g.color,value:String(Math.round(g.value))}));return l+=vt(_),l+="</div>",l}function rn(e,t){let n=e.api_breakdown;if(!n||!t[n])return[];let o=t[n].attributes;return!o||typeof o!="object"?(dt("api_call_breakdown entity has no attributes"),[]):Dt(o,et)}function sn(e,t){if(!e.homekit_connected)return[];let n=t[e.homekit_connected];if(!n)return[];let o=n.attributes||{},i=e.homekit_reads_saved?t[e.homekit_reads_saved]:null,s=e.homekit_writes_saved?t[e.homekit_writes_saved]:null,a=i?Number(i.state)||0:Number(o.reads_saved_today)||0,r=s?Number(s.state)||0:Number(o.writes_saved_today)||0,l=[];return(a>0||r>0)&&(l.push({label:"Reads Saved",value:a,color:et[0]}),l.push({label:"Writes Saved",value:r,color:et[1]})),l}function an(e,t){return e.map((n,o)=>({label:n.label||n.entity,value:Math.max(0,Number(t[n.entity]?.state)||0),color:n.color||et[o%et.length]}))}function po(e,t,n){let i=Date.now()-n,s=n/t,a=[],r=null,l=0;for(let c=0;c<t;c++){let d=i+c*s,h=d+s,u=d+s/2,p=0,_=0;for(;l<e.length&&e[l].t<h;)e[l].t>=d&&isFinite(e[l].v)&&(p+=e[l].v,_++),l++;_>0&&(r=Math.round(p/_*10)/10);let g=new Date(u),b=`${String(g.getHours()).padStart(2,"0")}:${String(g.getMinutes()).padStart(2,"0")}`;a.push({value:r,time:u,label:b})}return a}function qt(e,t,n={}){let o=e.length;if(o===0)return'<div class="strip-container"><div class="chart-empty" style="height:14px;font-size:10px">No data</div></div>';let i=n.emptyColor||"var(--disabled-color, #9E9E9E)",s=n.emptyOpacity??.3,a=n.ariaLabel||"",r=JSON.stringify(e.map(c=>({v:c.value,l:c.label}))),l=`<div class="strip-container" data-slots='${f(r)}'>`;l+=`<svg viewBox="0 0 ${o} 1" preserveAspectRatio="none" role="img" aria-label="${f(a)}" style="width:100%;height:100%;display:block">`;for(let c=0;c<o;c++){let d=e[c].value,h=d!==null?t(d):i,u=d!==null?1:s;l+=`<rect x="${c}" y="0" width="1.05" height="1" fill="${C(h)}" opacity="${u}"/>`}if(l+="</svg>",n.nowPct!==void 0){let c=Math.min(100,Math.max(0,n.nowPct));l+=`<div class="now-marker" style="left:${c.toFixed(1)}%"></div>`}return l+="</div>",l}function Ot(e,t,n={}){let o=e.length;if(o===0)return'<div class="cells"><div class="chart-empty" style="height:16px;font-size:10px">No data</div></div>';let i=JSON.stringify(e.map(a=>({v:a.value,l:a.label}))),s=`<div class="cells" data-slots='${f(i)}'>`;for(let a=0;a<o;a++){let r=e[a].value,l=e[a].label;if(r!==null){let c=t(r);s+=`<div class="cell" style="background:${C(c)}" data-hour="${f(l)}" data-score="${r}"></div>`}else s+=`<div class="cell cell-empty" data-hour="${f(l)}"></div>`}return s+="</div>",s}function fe(){let e=document.createElement("div");e.className="strip-tooltip",e.style.display="none";let t=null;return{element:e,show(n,o,i){t&&(clearTimeout(t),t=null),e.textContent=i,e.style.display="",e.style.left=`${o}px`},hide(){t=setTimeout(()=>{e.style.display="none"},50)}}}function uo(){let e=document.createElement("div");e.className="strip-tooltip strip-tooltip-fixed",e.style.display="none";let t=null;return{element:e,show(n,o,i){t&&(clearTimeout(t),t=null),e.textContent=i,e.style.display="",e.style.left=`${o}px`,e.style.top=`${n.top-28}px`},hide(){t=setTimeout(()=>{e.style.display="none"},50)}}}function Bt(e,t=5){let n=new Date,o=Date.now()-e,i="";for(let s=0;s<t-1;s++){let a=new Date(o+s/(t-1)*e);i+=`<span class="time-label">${String(a.getHours()).padStart(2,"0")}:${String(a.getMinutes()).padStart(2,"0")}</span>`}return i+=`<span class="time-label">${String(n.getHours()).padStart(2,"0")}:${String(n.getMinutes()).padStart(2,"0")}</span>`,i}function at(e,t,n){let o=Math.max(0,Math.min(1,(e-t.left)/t.width));return Math.min(n-1,Math.floor(o*n))}var ln=2e3;function me(e,t,n,o){let i=null,s=r=>{let l=n.getBoundingClientRect(),c=r-l.left;c>=0&&c<=l.width&&(t.style.left=`${o+c}px`,t.style.display="")},a=()=>{t.style.display="none",i&&(clearTimeout(i),i=null)};e.addEventListener("pointermove",r=>{r.pointerType!=="touch"&&s(r.clientX)}),e.addEventListener("pointerleave",a),e.addEventListener("pointerdown",r=>{r.pointerType==="touch"&&(s(r.clientX),i&&clearTimeout(i),i=setTimeout(a,ln))}),e.addEventListener("pointerup",r=>{r.pointerType})}function ge(e,t,n,o=""){if(!t||t.length===0)return;let i=t.length,s=null,a=null;e.addEventListener("pointerdown",r=>{if(r.pointerType==="touch"&&r.isPrimary===!1)return;let l=e.getBoundingClientRect();s=at(r.clientX,l,i),e.setPointerCapture(r.pointerId),a||(a=document.createElement("div"),a.className="strip-drag-highlight",e.style.position="relative",e.appendChild(a)),a.style.display="",a.style.left=`${(s/i*100).toFixed(1)}%`,a.style.width="0%"}),e.addEventListener("pointermove",r=>{if(s===null||!a)return;let l=e.getBoundingClientRect(),c=at(r.clientX,l,i),d=Math.min(s,c),h=Math.max(s,c);a.style.left=`${(d/i*100).toFixed(1)}%`,a.style.width=`${((h-d+1)/i*100).toFixed(1)}%`}),e.addEventListener("pointerup",r=>{if(s===null){s=null;return}let l=e.getBoundingClientRect(),c=at(r.clientX,l,i),d=Math.min(s,c),h=Math.max(s,c),u=t.slice(d,h+1).filter(p=>p.v!==null);if(u.length>0){let p=u.map($=>$.v),_=(p.reduce(($,k)=>$+k,0)/p.length).toFixed(1),g=Math.min(...p),b=Math.max(...p),m=t[d]?.l||"",v=t[h]?.l||"",y=`${m} \u2013 ${v}: avg ${_}${o}, ${g}${o} \u2013 ${b}${o}`,x=e.getBoundingClientRect();n.show(x,(d+h)/2/i*x.width,y),setTimeout(()=>n.hide(),3e3)}s=null})}function ho(e,t,n,o,i){if(!e||e.length===0)return"";let s=Number(t?.hours_to_show)||24,a=t?.mode||"timeline",r=Number(t?.slots_per_hour)||2,c=(t?.attribute||"temperature")==="humidity",d=c?$t:W,h=a==="heatmap"?s:s*r,u=s*36e5,p=Date.now()-u,_=(Date.now()-p)/u*100,g=c?"Humidity":"Thermal",b=a==="heatmap"?"Heatmap":"Timeline",m='<div class="section section-thermal-strip">';m+='<div style="display:flex;justify-content:space-between;align-items:baseline">',m+=`<div class="section-label">${C(s)}h ${f(g)} ${f(b)}</div>`,m+='<span class="card-subtitle section-subtitle" style="font-size:11px;color:var(--secondary-text-color,#636366)">Tap a zone for details</span>',m+="</div>",m+='<div class="zone-detail" id="timeline-detail"></div>',m+='<div class="strip-rows" style="position:relative">',m+='<div class="strip-crosshair" style="display:none"></div>';for(let v of e){let y=v.entity,x=H(y),$=o?.zoneEntities?.[x]||{},k=c?v.humidity_entity||$.humidity||y:v.temperature_entity||$.temperature||y,A=v.name||n[y]?.attributes?.friendly_name||x,E=i?.data?.[k]||[];if(m+=`<div class="timeline-row" data-zone="${f(x)}" data-entity="${f(y)}">`,m+=`<span class="zone-label">${f(A)}</span>`,E.length<2)m+='<div class="strip-container"><div class="chart-empty" style="height:14px;font-size:10px">No data</div></div>';else{let M=po(E,h,u),S=`${A} ${c?"humidity":"temperature"} over ${s}h`;a==="heatmap"?m+=Ot(M,d,{ariaLabel:S}):m+=qt(M,d,{ariaLabel:S,nowPct:_})}m+="</div>"}return m+="</div>",m+='<div class="time-axis" style="margin-left:76px">',m+=Bt(u),m+="</div>",m+="</div>",m}var cn={Comfortable:100,Warm:70,Cool:70,"Too Warm":40,"Too Cool":40};function dn(e,t,n,o){if(e==null||t===null||t===void 0||isNaN(e)||isNaN(t))return null;let i=100;if(i-=Math.min(50,Math.abs(e-t)*10),n!=null&&(i-=Math.min(25,Math.abs(n-45)*.5)),o!=null){let s=cn[o]??50;i=i*.7+s*.3}return Math.max(0,Math.min(100,Math.round(i)))}function fo(e){if(e>=80)return`rgba(52, 199, 89, ${(.35+e/100*.55).toFixed(2)})`;if(e>=50){let t=(e-50)/30;return`rgba(${Math.round(255-t*50)}, ${Math.round(159+t*40)}, 10, 0.65)`}return`rgba(255, 69, 58, ${(.35+(50-e)/50*.5).toFixed(2)})`}function mo(e,t,n=72e5){if(e.length===0)return null;let o=0,i=e.length-1;for(;o<i;){let r=o+i>>1;e[r].t<t?o=r+1:i=r}let s=null,a=1/0;for(let r=Math.max(0,o-1);r<=Math.min(e.length-1,o);r++){let l=Math.abs(e[r].t-t);l<a&&isFinite(e[r].v)&&(a=l,s=e[r].v)}return a<=n?s:null}function go(e,t,n,o,i){if(!e||e.length===0)return"";let s=Number(t?.slots_per_hour)||1,a=Number(t?.hours_to_show)||24,r=t?.mode||"heatmap",l=s*a,c=a*36e5,d=Date.now()-c,h=(Date.now()-d)/c*100,u=r==="timeline"?"Comfort Timeline":"Comfort Heatmap",p='<div class="section section-comfort-strip">';p+='<div style="display:flex;justify-content:space-between;align-items:baseline">',p+=`<div class="section-label">${C(a)}h ${f(u)}</div>`,p+='<span class="card-subtitle" style="font-size:11px;color:var(--secondary-text-color,#636366)">Tap a zone for details</span>',p+="</div>",p+='<div class="zone-detail" id="heatmap-detail"></div>',p+='<div class="heatmap-body" style="position:relative">',p+='<div class="strip-crosshair" style="display:none"></div>';for(let _=0;_<e.length;_++){let g=e[_],b=g.entity,m=H(b),v=o?.zoneEntities?.[m]||{},y=g.name||n[b]?.attributes?.friendly_name||m,x=g.temperature_entity||v.temperature||b,$=g.humidity_entity||v.humidity,k=i?.data?.[x]||[],A=$?i?.data?.[$]||[]:[],E=n[b]?.attributes?.temperature??null,M=v.comfort_level,I=M&&n[M]?.state||null,S=[],w=null,z=c/l;for(let T=0;T<l;T++){let R=d+T*z+z/2,N=mo(k,R),B=mo(A,R),V=dn(N,E,B,I);V!==null&&(w=V);let O=new Date(R),G=`${String(O.getHours()).padStart(2,"0")}:${String(O.getMinutes()).padStart(2,"0")}`;S.push({value:w,time:R,label:G})}p+=`<div class="heatmap-row" data-zone="${f(m)}" data-idx="${_}">`,p+=`<span class="zone-label">${f(y)}</span>`;let F=`${y} comfort over ${a}h`;r==="timeline"?p+=qt(S,fo,{ariaLabel:F,nowPct:h}):p+=Ot(S,fo),p+="</div>"}return p+="</div>",p+='<div class="heatmap-time-axis">',p+=Bt(c),p+="</div>",p+='<div class="heatmap-legend">',p+='<div class="legend-item"><div class="legend-swatch" style="background:rgba(52,199,89,0.7)"></div>\u226580</div>',p+='<div class="legend-item"><div class="legend-swatch" style="background:rgba(255,159,10,0.65)"></div>50\u201379</div>',p+='<div class="legend-item"><div class="legend-swatch" style="background:rgba(255,69,58,0.6)"></div>&lt;50</div>',p+="</div>",p+="</div>",p}function _o(e,t,n,o,i,s,a){let r=s+(a-s)*.35,l=s+(a-s)*.65,c=e-n,d=t-o,h=e+n,u=t+o,p=`M${s},${c.toFixed(1)}`;return p+=` C${r.toFixed(1)},${c.toFixed(1)} ${l.toFixed(1)},${d.toFixed(1)} ${a},${d.toFixed(1)}`,p+=` L${a},${u.toFixed(1)}`,p+=` C${l.toFixed(1)},${u.toFixed(1)} ${r.toFixed(1)},${h.toFixed(1)} ${s},${h.toFixed(1)}`,p+=" Z",p}function pn(e,t,n,o){let i=n+(o-n)*.35,s=n+(o-n)*.65;return`M${n},${e.toFixed(1)} C${i.toFixed(1)},${e.toFixed(1)} ${s.toFixed(1)},${t.toFixed(1)} ${o},${t.toFixed(1)}`}function _e(e,t,n){if(!e||e.length===0)return"";let o=nt(),i=[],s=!1;for(let S of e){let w=S.entity,z=H(w),F=n?.zoneEntities?.[z]||{},T=it(w,F,t,S,{});(T.heatingPower>0||F.heating_power||t[w]?.attributes?.heating_power!==void 0)&&(s=!0),i.push({name:T.name,power:T.heatingPower,temp:T.currentTemp,target:T.targetTemp,unit:T.unit,hvacAction:T.hvacAction})}let a=i.length>0?Math.round(i.reduce((S,w)=>S+w.power,0)/i.length):0,r='<div class="section section-energy-flow">';if(r+='<div style="display:flex;justify-content:space-between;align-items:baseline">',r+='<div class="section-label">Energy Flow</div>',s&&(r+=`<span style="font-size:11px;color:${C(ct.heating.fallback)};font-weight:500">${f(a)}% avg</span>`),r+="</div>",!s)return r+='<div class="chart-empty">No heating data</div></div>',r;let l=360,c=i.length<=3?44:i.length<=6?38:34,d=15,h=Math.max(80,i.length*c+30),u=i.length*c,p=Math.max(40,Math.min(u*.7,u-16)),_=Math.max(36,p*.6),g=Math.max(50,_/2+14),b=l-60,m=h/2,v=22,y=2,x=p/Math.max(i.length,1)*.7,$=ct.heating.fallback,k="var(--disabled-color, #9E9E9E)",A=i.some(S=>S.power>0||S.hvacAction==="heating"||S.hvacAction==="cooling"),E=i.filter(S=>S.power>0).length;r+=`<svg viewBox="0 0 ${l} ${h}" role="img" aria-label="Energy flow from boiler to zones" style="width:100%;height:${C(h)}px;display:block">`,r+="<defs>",r+=`<filter id="flow-glow"><feGaussianBlur stdDeviation="${_t(l,360).toFixed(1)}" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`;for(let S=0;S<i.length;S++){let w=i[S].power>0||i[S].hvacAction==="heating"||i[S].hvacAction==="cooling",z=w?$:k,F=i[S].power;if(w){let T=F>0?(4.5-F/100*3.3).toFixed(1):"5.0";r+=`<linearGradient id="flow-g${S}" x1="-0.5" y1="0" x2="0.5" y2="0" gradientUnits="objectBoundingBox">`,r+=`<stop offset="0%" stop-color="${C(z)}" stop-opacity="0.3"/>`,r+=`<stop offset="50%" stop-color="${C(z)}" stop-opacity="1.0"/>`,r+=`<stop offset="100%" stop-color="${C(z)}" stop-opacity="0.3"/>`,o||(r+=`<animate attributeName="x1" from="-0.5" to="0.5" dur="${T}s" repeatCount="indefinite"/>`,r+=`<animate attributeName="x2" from="0.5" to="1.5" dur="${T}s" repeatCount="indefinite"/>`),r+="</linearGradient>"}else r+=`<linearGradient id="flow-g${S}" x1="0" y1="0" x2="1" y2="0">`,r+=`<stop offset="0%" stop-color="${C(z)}" stop-opacity="0.15"/>`,r+=`<stop offset="50%" stop-color="${C(z)}" stop-opacity="0.25"/>`,r+=`<stop offset="100%" stop-color="${C(z)}" stop-opacity="0.1"/>`,r+="</linearGradient>"}r+="</defs>";let M=A?"rgba(255, 152, 0, 0.15)":"color-mix(in srgb, var(--primary-text-color, #e5e5e7) 8%, transparent)",I=A?"rgba(255, 152, 0, 0.25)":"color-mix(in srgb, var(--primary-text-color, #e5e5e7) 15%, transparent)";r+=`<rect x="${g-_/2}" y="${m-p/2}" width="${_}" height="${p}" rx="8" fill="${C(M)}" stroke="${C(I)}" stroke-width="1"/>`,r+=`<text x="${g}" y="${m-p/2-6}" text-anchor="middle" font-size="10" fill="var(--secondary-text-color, #8e8e93)">Boiler</text>`;for(let S=0;S<i.length;S++){let w=i[S],z=d+S*c+20,F=w.power>0?y+w.power/100*(v-y):y,T=w.power>0||w.hvacAction==="heating"||w.hvacAction==="cooling",P=T?' class="ribbon-active"':"",R=m+(S-(i.length-1)/2)*x,N=_o(R,z,F/2,F/2,l,g+_/2,b-12);if(r+=`<path d="${N}" fill="url(#flow-g${S})"${P}${T?' filter="url(#flow-glow)"':""} data-zone="${f(w.name)}">`,r+=`<title>${f(w.name)}: ${Math.round(w.power)}% heating power</title></path>`,w.power>0&&!o){let Q=Ge(w.power,20,E),K=Ze(w.power),U=Ke(F,v),j=(U*.8).toFixed(1),L=pn(R,z,g+_/2,b-12);r+=`<g class="flow-particles" data-zone="${f(w.name)}" style="will-change:transform">`;for(let D=0;D<Q;D++){let q=(D*(K/Q)).toFixed(2);r+=`<circle r="${U.toFixed(1)}" fill="${C($)}" opacity="0.8"`,r+=` filter="drop-shadow(0 0 ${j}px ${C($)})">`,r+=`<animateMotion dur="${K.toFixed(1)}s" begin="${q}s" repeatCount="indefinite"`,r+=` path="${L}"/>`,r+="</circle>"}r+="</g>"}let B=T?"var(--primary-text-color, #e5e5e7)":"var(--secondary-text-color, #a1a1a6)",V=T?' font-weight="600"':"";r+=`<text x="${b}" y="${(z-1).toFixed(1)}" font-size="11" fill="${C(B)}"${V}>${f(w.name)}</text>`;let O=T?C($):"var(--secondary-text-color, #8e8e93)",G=T?`${w.hvacAction==="cooling"?"Cooling":"Heating"} ${Math.round(w.power)}%${w.temp!==null?` \xB7 ${w.temp}${w.unit}`:""}`:`Idle${w.temp!==null?` \xB7 ${w.temp}${w.unit}`:""}`;r+=`<text x="${b}" y="${(z+12).toFixed(1)}" font-size="9" fill="${O}">${f(G)}</text>`}return r+="</svg>",r+="</div>",r}function vo(e,t,n,o){if(!e||!t||t.length===0)return!1;let i=e.querySelector("svg");if(!i)return!1;let s=[];for(let S of t){let w=S.entity,z=H(w),F=o?.zoneEntities?.[z]||{},T=it(w,F,n,S,{});s.push({name:T.name,power:T.heatingPower,temp:T.currentTemp,unit:T.unit,hvacAction:T.hvacAction})}let a=i.querySelectorAll("path[data-zone]");if(a.length!==s.length)return!1;let r=ct.heating.fallback,l="var(--disabled-color, #9E9E9E)",c=s.some(S=>S.power>0||S.hvacAction==="heating"||S.hvacAction==="cooling"),d=360,h=s.length<=3?44:s.length<=6?38:34,u=15,p=Math.max(80,s.length*h+30),_=s.length*h,g=Math.max(40,Math.min(_*.7,_-16)),b=Math.max(36,g*.6),m=Math.max(50,b/2+14),v=d-60,y=p/2,x=22,$=2,k=g/Math.max(s.length,1)*.7,A=Math.round(s.reduce((S,w)=>S+w.power,0)/s.length),E=e.querySelector(".section-label + span, div > span");E&&(E.textContent=`${A}% avg`);let M=i.querySelector("rect");M&&(M.setAttribute("fill",c?"rgba(255, 152, 0, 0.15)":"color-mix(in srgb, var(--primary-text-color, #e5e5e7) 8%, transparent)"),M.setAttribute("stroke",c?"rgba(255, 152, 0, 0.25)":"color-mix(in srgb, var(--primary-text-color, #e5e5e7) 15%, transparent)"),M.setAttribute("stroke-width",c?"0.5":"1"));let I=i.querySelectorAll("text");for(let S=0;S<s.length;S++){let w=s[S],z=a[S],F=w.power>0||w.hvacAction==="heating"||w.hvacAction==="cooling",T=u+S*h+20,P=w.power>0?$+w.power/100*(x-$):$,R=y+(S-(s.length-1)/2)*k,N=_o(R,T,P/2,P/2,d,m+b/2,v-12);z.setAttribute("d",N),F?(z.classList.add("ribbon-active"),z.setAttribute("filter","url(#flow-glow)")):(z.classList.remove("ribbon-active"),z.removeAttribute("filter"));let B=z.querySelector("title");B&&(B.textContent=`${w.name}: ${Math.round(w.power)}% heating power`);let V=i.querySelector(`g.flow-particles[data-zone="${w.name}"]`);V&&(V.style.display=w.power>0?"":"none");let O=i.querySelector(`#flow-g${S}`);if(O){let j=F?r:l,L=O.querySelectorAll("stop"),D=O.querySelectorAll("animate");if(F){let q=w.power>0?(4.5-w.power/100*3.3).toFixed(1):"5.0";L.length>=3&&(L[0].setAttribute("stop-color",j),L[0].setAttribute("stop-opacity","0.3"),L[1].setAttribute("stop-color",j),L[1].setAttribute("stop-opacity","1.0"),L[2].setAttribute("stop-color",j),L[2].setAttribute("stop-opacity","0.3"));for(let Z of D)Z.setAttribute("dur",`${q}s`);O.setAttribute("gradientUnits","objectBoundingBox")}else{L.length>=3&&(L[0].setAttribute("stop-color",j),L[0].setAttribute("stop-opacity","0.15"),L[1].setAttribute("stop-color",j),L[1].setAttribute("stop-opacity","0.25"),L[2].setAttribute("stop-color",j),L[2].setAttribute("stop-opacity","0.1"));for(let q of D)q.remove()}}let G=1+S*2,Q=2+S*2,K=I[G],U=I[Q];if(K&&(K.textContent=w.name,K.setAttribute("fill",F?"var(--primary-text-color, #e5e5e7)":"var(--secondary-text-color, #a1a1a6)"),F?K.setAttribute("font-weight","600"):K.removeAttribute("font-weight")),U){let j=F?`${w.hvacAction==="cooling"?"Cooling":"Heating"} ${Math.round(w.power)}%${w.temp!==null?` \xB7 ${w.temp}${w.unit}`:""}`:`Idle${w.temp!==null?` \xB7 ${w.temp}${w.unit}`:""}`;U.textContent=j,U.setAttribute("fill",F?r:"var(--secondary-text-color, #8e8e93)")}}return!0}var yo=6,ve=2;function ye(e,t,n,o,i,s){let a=i*Math.PI/180,r=s*Math.PI/180,l=s-i>180?1:0;return`M${(e+n*Math.cos(a)).toFixed(2)},${(t+n*Math.sin(a)).toFixed(2)} A${n.toFixed(2)},${n.toFixed(2)} 0 ${l} 1 ${(e+n*Math.cos(r)).toFixed(2)},${(t+n*Math.sin(r)).toFixed(2)} L${(e+o*Math.cos(r)).toFixed(2)},${(t+o*Math.sin(r)).toFixed(2)} A${o.toFixed(2)},${o.toFixed(2)} 0 ${l} 0 ${(e+o*Math.cos(a)).toFixed(2)},${(t+o*Math.sin(a)).toFixed(2)} Z`}function be(e,t,n,o,i){if(!e||e.length===0)return"";let s=nt(),a=Number(t?.size)||280,r=t?.attribute||"temperature",l=r==="temperature"||r==="both",c=r==="humidity"||r==="both",d=a/2,h=a/2,u=a*120/280,p=1.5,b=(360-p*e.length)/e.length,m=[];for(let F of e){let T=F.entity,P=H(T),R=o?.zoneEntities?.[P]||{},N=it(T,R,n,F,{});m.push({name:N.name,temp:N.currentTemp,target:N.targetTemp,power:N.heatingPower,humidity:N.humidity,hvacAction:N.hvacAction,entityId:T,unit:N.unit})}let v=t?.outdoor_temp_entity,y=v||o?.hubEntities?.outside_temp,x=null;if(y&&n[y]){let F=n[y];F.state!=="unavailable"&&F.state!=="unknown"&&(x=F.attributes?.temperature!==void 0?String(F.attributes.temperature):F.state)}let $=y&&n[y]?.attributes?.unit_of_measurement||"\xB0C",k=t?.outdoor_humidity_entity,A=null;if(k&&n[k]){let F=n[k];F.state!=="unavailable"&&F.state!=="unknown"&&(A=F.attributes?.humidity!==void 0?String(F.attributes.humidity):F.state)}let E="",M=r==="humidity"?A!==null?`${f(A)}%`:"--":x!==null?`${f(x)}${f($)}`:"--";r!=="humidity"&&c&&A!==null&&(E=`${f(A)}%`);let S={temperature:"Home Thermal View",humidity:"Home Humidity View",both:"Home Climate View"}[r]||"Home Thermal View",w=`<div class="section section-radial" data-attribute="${f(r)}"${v?` data-outdoor-temp-entity="${f(v)}"`:""}${k?` data-outdoor-humidity-entity="${f(k)}"`:""}>`;if(w+=`<div class="section-label">${f(S)}</div>`,w+='<div class="radial-container">',w+=`<svg viewBox="0 0 ${a} ${a}" width="${a}" height="${a}" role="img" aria-label="${f(S)}" style="display:block;margin:0 auto">`,w+="<defs>",w+=`<filter id="radial-glow"><feGaussianBlur stdDeviation="${_t(a,280).toFixed(1)}" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`,!s)for(let F=0;F<m.length;F++){let T=m[F],P=Qt(T.power,a);if(P<=0)continue;let R=45/Math.max(b,10),N=(.02*R).toFixed(4),B=(.04*R).toFixed(4);w+=`<filter id="heat-shimmer-${F}" x="-5%" y="-5%" width="110%" height="110%">`,w+=`<feTurbulence type="turbulence" baseFrequency="${N} ${B}" numOctaves="2" result="turb">`,w+=`<animate attributeName="baseFrequency" values="${N} ${B};${(parseFloat(N)*1.5).toFixed(4)} ${B};${N} ${B}" dur="4s" repeatCount="indefinite"/>`,w+="</feTurbulence>",w+=`<feDisplacementMap in="SourceGraphic" in2="turb" scale="${P.toFixed(1)}" xChannelSelector="R" yChannelSelector="G"/>`,w+="</filter>"}w+="</defs>";for(let F=0;F<m.length;F++){let T=m[F],P=F*(b+p)-90,R=P+b,N=T.power>0||T.hvacAction==="heating"||T.hvacAction==="cooling",B=N?" arc-active":"",V=[f(T.name)];l&&V.push(T.temp!==null?`${T.temp}${T.unit}`:"--"),c&&T.humidity!==null&&V.push(`${Math.round(T.humidity)}%`),V.push(N?`${T.hvacAction==="cooling"?"Cooling":"Heating"} ${T.power}%`:"Idle");let O=V.join(", ");w+=`<g class="arc-group${B}" data-idx="${F}">`;let G=c&&r==="both"?u+ve+yo+4:u+4,Q=u-28-4,K=ye(d,h,G,Q,P-p/2,R+p/2);if(w+=`<path d="${K}" fill="transparent" class="arc-hit"/>`,l){let U=T.temp!==null?W(T.temp):"var(--disabled-color, #9E9E9E)",j=8+T.power/100*20,L=u-j,D=ye(d,h,u,L,P,R);if(w+=`<path d="${D}" fill="${C(U)}" class="arc-path"`,Qt(T.power,a)>0&&!s?w+=` filter="url(#heat-shimmer-${F})"`:N&&(w+=' filter="url(#radial-glow)"'),w+=`><title>${O}</title>`,N&&!s){let Z=T.power>0?(4.5-T.power/100*3).toFixed(1):"5.0";w+=`<animate attributeName="opacity" values="1;0.65;1" dur="${Z}s" repeatCount="indefinite"/>`}w+="</path>"}if(c&&T.humidity!==null){let U=$t(T.humidity),j,L;if(r==="both")j=u+ve+yo,L=u+ve;else{let q=8+T.power/100*20;j=u,L=u-q}let D=ye(d,h,j,L,P,R);w+=`<path d="${D}" fill="${C(U)}" class="arc-path" opacity="0.8">`,w+=`<title>${O}</title>`,w+="</path>"}w+="</g>"}w+="</svg>";let z=Math.round((u-28-8)*2);w+=`<div class="center-info" id="radial-center" style="width:${z}px;height:${z}px">`,w+=`<div class="center-value">${M}</div>`,w+='<div class="center-label">Outdoor</div>',w+=`<div class="center-sub">${E}</div>`,w+="</div>",w+="</div>",w+='<div class="zone-detail" id="radial-detail"></div>',w+='<div class="radial-legend">';for(let F=0;F<m.length;F++){let T=m[F],P=r==="humidity"?T.humidity!==null?$t(T.humidity):"var(--disabled-color, #9E9E9E)":T.temp!==null?W(T.temp):"var(--disabled-color, #9E9E9E)",R="";l&&(R+=T.temp!==null?`${T.temp}${T.unit}`:"--"),l&&c&&(R+=" \xB7 "),c&&(R+=T.humidity!==null?`${Math.round(T.humidity)}%`:"--"),w+=`<div class="legend-item" data-idx="${F}">`,w+=`<span class="legend-dot" style="background:${C(P)}"></span>`,w+=`${f(T.name)} <span class="legend-temp">${f(R)}</span>`,w+="</div>"}return w+="</div>",w+="</div>",w}var bo=!1,un=typeof CSSStyleSheet<"u"&&typeof CSSStyleSheet.prototype.replaceSync=="function"&&typeof document<"u"&&"adoptedStyleSheets"in document.createElement("div").attachShadow({mode:"open"}),wo=un?(()=>{let e=new CSSStyleSheet;return e.replaceSync(Jt),e})():null,hn=new Set(["zones","api","graph","bridge","thermal_strip","comfort_strip","homekit","weather","radial","donut"]),fn={zones:".section-zones",api:".section-api",graph:".section-graph",bridge:".section-bridge",thermal_strip:".section-thermal-strip",comfort_strip:".section-comfort-strip",homekit:".section-homekit",weather:".section-weather",radial:".section-radial",donut:".section-donut",environment:".section-environment",thermal:".section-thermal",schedule:".section-schedule",energy_flow:".section-energy-flow"},we=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_elements={};_discovery=null;_historyCache;_shadow;_countdownTimer=null;_historyFetchInProgress=!1;_rafId=null;_lastUpdateTime=0;_rerenderTargets=null;_chipAbort=null;_sectionChipAbort=null;_radialAbort=null;_timelineAbort=null;_heatmapAbort=null;_energyFlowAbort=null;_sparklineAbort=null;_sparklinePathCache=new Map;constructor(){super(),this._shadow=this.attachShadow({mode:"open"}),this._historyCache=no()}setConfig(t){this._config=Xe(t),this._discovery=null,this._prevStates={},this._elements={},this._hass&&(this._runDiscovery(),this._fullRender()),this._buildRerenderTargets()}set hass(t){if(this._hass=t,!!this._config){if(!this._discovery){this._runDiscovery(),this._fullRender(),this._refreshHistoryIfNeeded();return}this._rafId||(this._rafId=requestAnimationFrame(()=>{if(this._rafId=null,!this._hass||!this._config||!this._discovery)return;let n=Date.now();if(n-this._lastUpdateTime<200)return;this._lastUpdateTime=n;let o=this._hass.states;(this._config._zones||[]).some(s=>o[s.entity]!==this._prevStates[s.entity])&&this._updateZones(),this._updateSections(),this._refreshHistoryIfNeeded(),this._cacheWatchedStates()}))}}_runDiscovery(){if(!this._hass||!this._config)return;let n=(this._config._zones||[]).map(o=>H(o.entity));if(this._discovery=to(this._hass.states,n,this._hass.entities),!bo&&this._discovery.isTadoCE){bo=!0;let o=Object.entries(this._discovery.hubEntities).map(([i,s])=>`${i}=${s}`);console.info("Pulse Climate: hub discovery \u2014 found:",o.join(", ")),this._discovery.missingHubKeys.length>0&&console.warn("Pulse Climate: hub discovery \u2014 missing:",this._discovery.missingHubKeys.join(", "))}this._buildRerenderTargets()}_rebuildSparklinePathCache(){this._sparklinePathCache.clear();let t=this._historyCache?.data;if(t)for(let[n,o]of Object.entries(t)){if(!o||o.length<2)continue;let i=ot(o,340,36,48);i&&this._sparklinePathCache.set(n,i)}}_buildRerenderTargets(){if(!this._config||!this._discovery)return;let t=this._discovery,n=t.hubEntities,o=this._config._zones||[];this._rerenderTargets=[{selector:".section-zones",watchIds:[n.home_state].filter(Boolean),render:()=>{let i=this._config,s=this._hass?.states||{};return ne(o,i,s,t,this._historyCache)}},{selector:".section-api",watchIds:[n.api_usage,n.api_limit,n.api_status,n.next_sync,n.token_status].filter(Boolean),render:()=>{let i=this._hass?.states||{},a=(this._config?.sections||[{type:"zones"}]).find(r=>(typeof r=="string"?r:r.type)==="api")||{};return ie(n,i,a,this._historyCache)}},{selector:".section-homekit",watchIds:[n.homekit_connected,n.homekit_reads_saved,n.homekit_writes_saved].filter(Boolean),render:()=>{let i=this._hass?.states||{};return se(n,i,this._historyCache)}},{selector:".section-bridge",watchIds:[n.bridge_connected,n.boiler_flow_temp,n.wc_status,n.wc_target_flow].filter(Boolean),render:()=>{let i=this._hass?.states||{};return re(n,i,this._historyCache)}},{selector:".section-weather",watchIds:[n.outside_temp,n.weather,n.solar_intensity].filter(Boolean),render:()=>{let i=this._hass?.states||{};return ae(n,i,this._historyCache)}},{selector:".section-environment",watchIds:o.flatMap(i=>{let s=H(i.entity),a=t.zoneEntities?.[s]||{};return[a.mold_risk,a.condensation,a.comfort_level,a.surface_temp,a.dew_point].filter(Boolean)}),render:()=>{let i=this._hass?.states||{};return le(o,i,t)}},{selector:".section-thermal",watchIds:o.flatMap(i=>{let s=H(i.entity),a=t.zoneEntities?.[s]||{};return[a.heating_rate,a.thermal_inertia,a.preheat_time,a.confidence].filter(Boolean)}),render:()=>{let i=this._hass?.states||{};return ce(o,i,t)}},{selector:".section-schedule",watchIds:o.flatMap(i=>{let s=H(i.entity),a=t.zoneEntities?.[s]||{};return[a.next_schedule,a.next_sched_temp,a.schedule_deviation,a.preheat_advisor,a.comfort_target].filter(Boolean)}),render:()=>{let i=this._hass?.states||{};return de(o,i,t)}},{selector:".section-radial",watchIds:o.map(i=>i.entity),render:()=>{let i=this._hass?.states||{},a=(this._config?.sections||[{type:"zones"}]).find(r=>(typeof r=="string"?r:r.type)==="radial")||{};return be(o,a,i,t,this._historyCache)}},{selector:".section-donut",watchIds:(()=>{let a=(this._config?.sections||[]).find(r=>(typeof r=="string"?r:r.type)==="donut")?.source;return a==="api_breakdown"&&n.api_breakdown?[n.api_breakdown]:a==="homekit_saved"?[n.homekit_reads_saved,n.homekit_writes_saved].filter(Boolean):[]})(),render:()=>{let i=this._hass?.states||{},a=(this._config?.sections||[]).find(r=>(typeof r=="string"?r:r.type)==="donut")||{};return he(a,n,i)}},{selector:".section-graph",watchIds:[],render:()=>{let i=this._hass?.states||{},a=(this._config?.sections||[{type:"zones"}]).find(r=>(typeof r=="string"?r:r.type)==="graph")||{};return ue(a,o,this._historyCache,i,t)}}]}_fullRender(){if(!this._config||!this._hass||!this._discovery)return;let t=this._config,n=this._hass.states,o=this._discovery,i=t._zones||[],s=t.layout==="compact",a=t.entity_row===!0,r="";wo?this._shadow.adoptedStyleSheets=[wo]:r+=`<style>${Jt}</style>`,a||(r+=`<ha-card${s?' class="compact"':""}>`),t.title&&(r+=`<div class="pulse-title">${f(t.title)}</div>`);let l=t.sections||[{type:"zones"}];for(let c of l)r+=this._renderSection(c,i,n,o);a||(r+="</ha-card>"),this._shadow.innerHTML=r,this._elements.zonesSection=this._shadow.querySelector(".section-zones"),this._elements.apiSection=this._shadow.querySelector(".section-api"),this._cacheWatchedStates(),this._bindZoneActions(),this._bindChipActions(),this._bindSectionInteractions(),this._bindSectionChipActions(),this._startCountdownTimer()}_bindZoneActions(){if(!this._config||!this._hass)return;let t=this._shadow.querySelectorAll(".zone-row"),n=this._config._zones||[];for(let o=0;o<t.length&&o<n.length;o++){let i=t[o],s=n[o],a=s.entity,r=i.__pulseCleanup;typeof r=="function"&&r();let l=new AbortController,{signal:c}=l,d=0,h=null,u=null,p=!1;i.__pulseCleanup=()=>{l.abort(),h&&clearTimeout(h),u&&clearTimeout(u),delete i.__pulseCleanup},i.addEventListener("keydown",g=>{let b=g;(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),this._fireAction(a,s,"tap_action"))},{signal:c}),i.addEventListener("click",g=>{if(g.preventDefault(),p){p=!1;return}d++,d===1?h=setTimeout(()=>{d=0,this._fireAction(a,s,"tap_action")},250):d===2&&(h&&clearTimeout(h),d=0,this._fireAction(a,s,"double_tap_action"))},{signal:c}),i.addEventListener("pointerdown",()=>{p=!1,u=setTimeout(()=>{p=!0,this._fireAction(a,s,"hold_action")},500)},{signal:c});let _=()=>{u&&clearTimeout(u)};i.addEventListener("pointerup",_,{signal:c}),i.addEventListener("pointercancel",_,{signal:c}),i.addEventListener("contextmenu",g=>g.preventDefault(),{signal:c}),tt(i)}}_bindSectionInteractions(){this._bindRadialInteractions(),this._bindTimelineInteractions(),this._bindHeatmapInteractions(),this._bindEnergyFlowInteractions(),this._bindSparklineCrosshairs()}_bindChipActions(){if(!this._config||!this._hass)return;this._chipAbort&&this._chipAbort.abort(),this._chipAbort=new AbortController;let{signal:t}=this._chipAbort,n=this._config._zones||[],o=this._shadow.querySelectorAll(".zone-row");for(let i=0;i<o.length&&i<n.length;i++){let s=n[i],a=s.entity,r=o[i].querySelectorAll(".chip");for(let l of r){let c=l,d=c.dataset.chipType||"",h=c.dataset.entity||a,u=s.chip_actions,p=this._config.chip_actions,_=u?.[d]||p?.[d]||{},g=_.tap_action||{action:"more-info",entity:h},b=_.hold_action||{action:"none"};c.style.cursor="pointer",tt(c),c.addEventListener("click",v=>{v.stopPropagation(),this._hass&&mt(this,this._hass,g,h,dt)},{signal:t});let m=null;c.addEventListener("pointerdown",v=>{v.stopPropagation(),m=setTimeout(()=>{!this._hass||b.action==="none"||mt(this,this._hass,b,h,dt)},500)},{signal:t}),c.addEventListener("pointerup",v=>{v.stopPropagation(),m&&clearTimeout(m)},{signal:t}),c.addEventListener("pointercancel",()=>{m&&clearTimeout(m)},{signal:t}),c.addEventListener("contextmenu",v=>v.preventDefault(),{signal:t})}}}_bindSectionChipActions(){this._sectionChipAbort&&this._sectionChipAbort.abort(),this._sectionChipAbort=new AbortController;let{signal:t}=this._sectionChipAbort,n=this._shadow.querySelectorAll(".section .chip[data-entity]");for(let o of n){let i=o;i.closest(".zone-row")||(i.style.cursor="pointer",tt(i),i.addEventListener("click",s=>{s.stopPropagation();let a=i.dataset.entity;a&&It(this,"hass-more-info",{entityId:a})},{signal:t}))}}_startCountdownTimer(){this._countdownTimer&&clearInterval(this._countdownTimer);let t=this._shadow.querySelector(".chip-next-sync");if(!t)return;let n=Number(t.getAttribute("data-target"));if(!n||!isFinite(n))return;let o=()=>{let i=n-Date.now();if(i<=0){t.textContent="Next: now",this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null);return}let s=Math.floor(i/6e4),a=Math.floor(i%6e4/1e3);t.textContent=s>0?`Next: ${s}m ${a}s`:`Next: ${a}s`};o(),this._countdownTimer=setInterval(o,1e3)}_bindRadialInteractions(){this._radialAbort&&this._radialAbort.abort(),this._radialAbort=new AbortController;let{signal:t}=this._radialAbort,n=this._shadow.querySelectorAll(".arc-group"),o=this._shadow.querySelectorAll(".radial-legend .legend-item"),i=this._shadow.querySelector("#radial-center"),s=this._shadow.querySelector("#radial-detail"),a=this._shadow.querySelector(".section-radial svg");if(n.length===0||!i)return;let l=(a&&Number(a.getAttribute("width"))||280)/2,c=this._config?._zones||[],d=null,h=this._shadow.querySelector(".section-radial")?.getAttribute("data-outdoor-temp-entity"),u=this._shadow.querySelector(".section-radial")?.getAttribute("data-attribute")||"temperature",p=this._shadow.querySelector(".section-radial")?.getAttribute("data-outdoor-humidity-entity"),_=()=>{let m=this._hass?.states||{},v=this._discovery,y=h||v?.hubEntities?.outside_temp,x="--",$="";if(u!=="humidity"&&y&&m[y]){let k=m[y];k.state!=="unavailable"&&k.state!=="unknown"&&(x=`${k.attributes?.temperature!==void 0?k.attributes.temperature:k.state}${k.attributes?.unit_of_measurement||"\xB0C"}`)}if(p&&m[p]){let k=m[p];if(k.state!=="unavailable"&&k.state!=="unknown"){let A=k.attributes?.humidity!==void 0?k.attributes.humidity:k.state;u==="humidity"?x=`${A}%`:$=`${A}%`}}return{center:x,centerSub:$}},g=m=>{let v=this._hass?.states||{},y=this._discovery;if(d===m){b();return}d=m;let x=c[m];if(!x)return;let $=x.entity,k=H($),A=y?.zoneEntities?.[k]||{},E=wt($,v,x),{name:M,temp:I,target:S,humidity:w}=E,z=E.hvacAction,F=0;if(A.heating_power){let O=v[A.heating_power];O&&O.state!=="unavailable"&&(F=parseFloat(O.state)||0)}else v[$]?.attributes?.heating_power!==void 0&&(F=parseFloat(v[$].attributes.heating_power)||0);let P=F>0||z==="heating"||z==="cooling"?`${z==="cooling"?"Cooling":"Heating"} ${Math.round(F)}%`:"Idle",R=i.querySelector(".center-value"),N=i.querySelector(".center-label"),B=i.querySelector(".center-sub");R&&(R.textContent=I!==void 0?`${I}${E.unit}`:"--"),N&&(N.textContent=M);let V=w!==void 0?` \xB7 ${w}%`:"";B&&(B.textContent=`${P}${V}`),n.forEach((O,G)=>{O.classList.toggle("dimmed",G!==m),O.classList.toggle("selected",G===m),G===m?O.setAttribute("transform",`translate(${l}, ${l}) scale(1.06) translate(${-l}, ${-l})`):O.removeAttribute("transform")}),o.forEach((O,G)=>{O.classList.toggle("selected",G===m)}),s&&(s.innerHTML=`<div class="detail-stats">
          <div class="stat"><div class="stat-value">${S!==void 0?f(S)+f(E.unit):"--"}</div><div class="stat-label">Target</div></div>
          <div class="stat"><div class="stat-value">${w!==void 0?f(w)+"%":"--"}</div><div class="stat-label">Humidity</div></div>
          <div class="stat"><div class="stat-value">${f(z)}</div><div class="stat-label">Action</div></div>
        </div>`,s.classList.add("active"))},b=()=>{d=null;let{center:m,centerSub:v}=_(),y=i.querySelector(".center-value"),x=i.querySelector(".center-label"),$=i.querySelector(".center-sub");y&&(y.textContent=m),x&&(x.textContent="Outdoor"),$&&($.textContent=v),n.forEach(k=>{k.classList.remove("dimmed","selected"),k.removeAttribute("transform")}),o.forEach(k=>{k.classList.remove("selected")}),s&&(s.classList.remove("active"),s.innerHTML="")};if(n.forEach((m,v)=>{m.addEventListener("click",()=>g(v),{signal:t})}),o.forEach((m,v)=>{tt(m),m.addEventListener("click",()=>g(v),{signal:t})}),n.length>1&&!nt()){let m=!0,v=0,y=1,x=()=>{if(!m||d!==null){setTimeout(x,500);return}let k=n[v];if(!k){setTimeout(x,300);return}if(k.style.filter="brightness(1.4)",k.style.transition="filter 0.3s ease-in",setTimeout(()=>{k.style.filter="",k.style.transition="filter 0.5s ease-out"},250),v+=y,v>=n.length||v<0){v=y>0?0:n.length-1;let A=1e3+Math.random()*2e3;Math.random()<.4&&(y*=-1),setTimeout(x,A)}else{let A=80+Math.random()*170;setTimeout(x,A)}};setTimeout(x,1500);let $=n[0];$&&($.__shimmerStop=()=>{m=!1})}}_bindTimelineInteractions(){this._timelineAbort&&this._timelineAbort.abort(),this._timelineAbort=new AbortController;let t=this._shadow.querySelectorAll(".section-thermal-strip .timeline-row"),n=this._shadow.querySelector(".section-thermal-strip");if(t.length===0||!n)return;let o=this._config?._zones||[],i=n.querySelector(".section-subtitle"),s="Tap a zone for details",a=this._hass?.states?.[o[0]?.entity]?.attributes?.unit_of_measurement||"\xB0C",r=null,l=null,c=m=>{l=null;let v=m.querySelector(".comparison-path");v&&v.remove();let y=m.querySelector(".comparison-legend");y&&y.remove()};t.forEach((m,v)=>{tt(m),m.addEventListener("click",()=>{let y=this._hass?.states||{},x=this._discovery,$=this._historyCache;if(n.querySelectorAll(".strip-drag-highlight").forEach(L=>{L.style.display="none"}),r!==null&&r!==v){let L=n.querySelector(".zone-detail"),D=L?.querySelector(".detail-sparkline svg");if(L&&D){if(l===v){c(L);return}c(L),l=v;let q=o[v];if(!q)return;let Z=q.entity,St=H(Z),xe=x?.zoneEntities?.[St]||{},$e=q.temperature_entity||xe.temperature||Z,Se=$?.data?.[$e]||[];if(Se.length>=2){let Ce=this._sparklinePathCache.get($e)||ot(Se,340,36,48);if(Ce){let lt=document.createElementNS("http://www.w3.org/2000/svg","path");lt.setAttribute("d",Ce.linePath),lt.setAttribute("fill","none"),lt.setAttribute("stroke","var(--info-color, #4FC3F7)"),lt.setAttribute("stroke-width","1.5"),lt.setAttribute("opacity","0.5"),lt.classList.add("comparison-path"),D.appendChild(lt)}}let ke=o[r],xo=wt(ke?.entity||"",y,ke).name,$o=wt(Z,y,q).name,kt=document.createElement("div");kt.className="comparison-legend",kt.style.cssText="display:flex;gap:12px;font-size:10px;margin-top:4px;color:var(--secondary-text-color,#8e8e93)",kt.innerHTML=`<span><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:currentColor;margin-right:4px"></span>${f(xo)}</span><span><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--info-color, #4FC3F7);margin-right:4px"></span>${f($o)}</span>`,L.appendChild(kt);return}}if(r===v){r=null,l=null,t.forEach(D=>D.classList.remove("selected"));let L=n.querySelector(".zone-detail");L&&L.classList.remove("active"),i&&(i.textContent=s);return}r=v,t.forEach((L,D)=>L.classList.toggle("selected",D===v));let k=o[v];if(!k)return;let A=k.entity,E=y[A]?.attributes||{},M=wt(A,y,k),{name:I,temp:S,target:w,humidity:z,hvacAction:F}=M;i&&(i.textContent=I);let T=H(A),P=x?.zoneEntities?.[T]||{},R=k.temperature_entity||P.temperature||A,N=$?.data?.[R]||[],B="";if(N.length>=2){let L=N[N.length-1],D=N[N.length-2],q=L.v-D.v,Z=(L.t-D.t)/36e5;if(Z>0&&isFinite(q)&&isFinite(Z)){let St=q/Z;B=`${St>=0?"+":""}${St.toFixed(1)}${M.unit}/hr`}}let V=0;if(P.heating_power){let L=y[P.heating_power];L&&L.state!=="unavailable"&&(V=parseFloat(L.state)||0)}else E.heating_power!==void 0&&(V=parseFloat(E.heating_power)||0);let G=V>0||F==="heating"||F==="cooling"?`${F==="cooling"?"Cooling":"Heating"} ${Math.round(V)}%`:"Idle",Q="";if(N.length>=2){let L=1/0,D=-1/0;for(let q of N)isFinite(q.v)&&(q.v<L&&(L=q.v),q.v>D&&(D=q.v));isFinite(L)&&isFinite(D)&&(Q=`${L.toFixed(1)}${M.unit} \u2013 ${D.toFixed(1)}${M.unit} today`)}let K="";if(N.length>=2){let L=F==="heating"?"#FF9800":S!==void 0&&isFinite(Number(S))?W(Number(S)):"var(--primary-text-color)",D=C(L),q=this._sparklinePathCache.get(R)||ot(N,340,36,48);if(q){let Z=`tl-detail-grad-${v}`;K=`<div class="detail-sparkline sparkline-filled" style="height:36px;margin-top:10px"><svg viewBox="0 0 340 36" preserveAspectRatio="none"><defs><linearGradient id="${f(Z)}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${D}" stop-opacity="0.3"/><stop offset="100%" stop-color="${D}" stop-opacity="0"/></linearGradient></defs><path d="${q.areaPath}" fill="url(#${f(Z)})" /><path d="${q.linePath}" fill="none" stroke="${D}" stroke-width="1.5" opacity="0.7" /></svg></div>`}}let U=n.querySelector(".zone-detail");U||(U=document.createElement("div"),U.className="zone-detail",n.insertBefore(U,n.querySelector(".timeline-row"))),U.innerHTML=`<div class="detail-header"><span class="detail-name">${f(I)}</span><span class="detail-close">\u2715 Close</span></div>
          <div class="detail-stats">
            <div class="stat"><div class="stat-value">${S!==void 0?f(S)+f(M.unit):"--"}</div><div class="stat-label">Current</div>${B?`<div class="stat-sub">${f(B)}</div>`:""}</div>
            <div class="stat"><div class="stat-value">${w!==void 0?f(w)+f(M.unit):"--"}</div><div class="stat-label">Target</div>${G?`<div class="stat-sub">${f(G)}</div>`:""}</div>
            <div class="stat"><div class="stat-value">${z!==void 0?f(z)+"%":"--"}</div><div class="stat-label">Humidity</div>${Q?`<div class="stat-sub">${f(Q)}</div>`:""}</div>
          </div>${K}`,U.classList.add("active");let j=U.querySelector(".detail-close");j&&j.addEventListener("click",L=>{L.stopPropagation(),r=null,l=null,t.forEach(D=>D.classList.remove("selected")),U.classList.remove("active"),i&&(i.textContent=s)})})});let d=fe(),h=n.querySelector(".strip-rows");h&&(h.style.position="relative",h.appendChild(d.element)),n.querySelectorAll(".strip-container").forEach(m=>{let v=m.getAttribute("data-slots"),y=null;try{v&&(y=JSON.parse(v))}catch{}m.addEventListener("pointermove",x=>{if(x.pointerType==="touch"||!y)return;let $=m.getBoundingClientRect(),k=at(x.clientX,$,y.length),A=y[k];if(A){let E=A.v!==null?`${A.l}: ${A.v}${a}`:`${A.l}: --`;d.show($,x.clientX-$.left,E)}}),m.addEventListener("pointerleave",()=>d.hide()),m.addEventListener("pointerdown",x=>{if(x.pointerType!=="touch"||!y)return;let $=m.getBoundingClientRect(),k=at(x.clientX,$,y.length),A=y[k];if(A){let E=A.v!==null?`${A.l}: ${A.v}${a}`:`${A.l}: --`;d.show($,x.clientX-$.left,E),setTimeout(()=>d.hide(),2e3)}})}),n.querySelectorAll(".cells").forEach(m=>{m.addEventListener("pointermove",v=>{if(v.pointerType==="touch")return;let y=v.target?.closest?.(".cell");if(!y){d.hide();return}let x=y.getAttribute("data-hour")||"",$=y.getAttribute("data-score"),k=$?`${x}: ${$}${a}`:`${x}: --`,A=m.getBoundingClientRect();d.show(A,v.clientX-A.left,k)}),m.addEventListener("pointerleave",()=>d.hide()),m.addEventListener("pointerdown",v=>{if(v.pointerType!=="touch")return;let y=v.target?.closest?.(".cell");if(!y)return;let x=y.getAttribute("data-hour")||"",$=y.getAttribute("data-score"),k=$?`${x}: ${$}${a}`:`${x}: --`,A=m.getBoundingClientRect();d.show(A,v.clientX-A.left,k),setTimeout(()=>d.hide(),2e3)})});let _=h?.querySelector(".strip-crosshair"),g=h?.querySelector(".strip-container")||h?.querySelector(".cells");if(h&&_&&g){let m=g.getBoundingClientRect().left-h.getBoundingClientRect().left;me(h,_,g,m)}n.querySelectorAll(".strip-container, .cells").forEach(m=>{let v=m.getAttribute("data-slots"),y=null;try{v&&(y=JSON.parse(v))}catch{}ge(m,y,d,a)})}_bindHeatmapInteractions(){this._heatmapAbort&&this._heatmapAbort.abort(),this._heatmapAbort=new AbortController;let t=this._shadow.querySelectorAll(".section-comfort-strip .heatmap-row"),n=this._shadow.querySelector("#heatmap-detail");if(t.length===0||!n)return;let o=null;t.forEach((u,p)=>{tt(u),u.addEventListener("click",()=>{let _=this._shadow.querySelector(".section-comfort-strip");if(_&&_.querySelectorAll(".strip-drag-highlight").forEach(I=>{I.style.display="none"}),o===p){o=null,t.forEach(I=>I.classList.remove("selected")),n.classList.remove("active");return}o=p,t.forEach((I,S)=>I.classList.toggle("selected",S===p));let g=u.querySelectorAll(".cell"),b=[],m=[];if(g.length>0)g.forEach(I=>{let S=I.getAttribute("data-score");S&&(b.push(Number(S)),m.push(I.getAttribute("data-hour")||"--"))});else{let S=u.querySelector(".strip-container")?.getAttribute("data-slots");if(S)try{let w=JSON.parse(S);for(let z of w)z.v!==null&&z.v!==void 0&&(b.push(z.v),m.push(z.l||"--"))}catch{}}if(b.length===0)return;let v=Math.round(b.reduce((I,S)=>I+S,0)/b.length),y=0,x=0;for(let I=1;I<b.length;I++)b[I]>b[y]&&(y=I),b[I]<b[x]&&(x=I);let $=m[y]||"--",k=m[x]||"--",A=v>=80?"#34c759":v>=50?"#ff9f0a":"#ff453a",E=u.querySelector(".zone-label")?.textContent||"";n.innerHTML=`<div class="detail-header"><span class="detail-name">${f(E)}</span><span class="detail-close">\u2715 Close</span></div>
          <div class="detail-stats">
            <div class="stat"><div class="stat-value">${v}</div><div class="stat-label">Avg Score</div></div>
            <div class="stat"><div class="stat-value">${f($)}</div><div class="stat-label">Best Hour</div></div>
            <div class="stat"><div class="stat-value">${f(k)}</div><div class="stat-label">Worst Hour</div></div>
          </div>
          <div class="detail-bar"><div class="detail-bar-fill" style="width:${v}%;background:${C(A)}"></div></div>`,n.classList.add("active");let M=n.querySelector(".detail-close");M&&M.addEventListener("click",I=>{I.stopPropagation(),o=null,t.forEach(S=>S.classList.remove("selected")),n.classList.remove("active")})})});let i=this._shadow.querySelector(".section-comfort-strip");if(!i)return;let s=fe(),a=i.querySelector(".heatmap-body");a&&(a.style.position="relative",a.appendChild(s.element));let r=a?.querySelector(".cells")||a?.querySelector(".strip-container");i.querySelectorAll(".cells").forEach(u=>{u.addEventListener("pointermove",p=>{if(p.pointerType==="touch")return;let _=p.target?.closest?.(".cell");if(!_){s.hide();return}let g=_.getAttribute("data-hour")||"",b=_.getAttribute("data-score"),m=b?`${g}: Score ${b}`:`${g}: --`,v=r?.getBoundingClientRect();v&&s.show(v,p.clientX-v.left,m)}),u.addEventListener("pointerleave",()=>s.hide()),u.addEventListener("pointerdown",p=>{if(p.pointerType!=="touch")return;let _=p.target?.closest?.(".cell");if(!_)return;let g=_.getAttribute("data-hour")||"",b=_.getAttribute("data-score"),m=b?`${g}: Score ${b}`:`${g}: --`,v=r?.getBoundingClientRect();v&&(s.show(v,p.clientX-v.left,m),setTimeout(()=>s.hide(),2e3))})}),i.querySelectorAll(".strip-container").forEach(u=>{let p=u.getAttribute("data-slots"),_=null;try{p&&(_=JSON.parse(p))}catch{}u.addEventListener("pointermove",g=>{if(g.pointerType==="touch"||!_)return;let b=u.getBoundingClientRect(),m=at(g.clientX,b,_.length),v=_[m];if(v){let y=v.v!==null?`${v.l}: Score ${v.v}`:`${v.l}: --`;s.show(b,g.clientX-b.left,y)}}),u.addEventListener("pointerleave",()=>s.hide()),u.addEventListener("pointerdown",g=>{if(g.pointerType!=="touch"||!_)return;let b=u.getBoundingClientRect(),m=at(g.clientX,b,_.length),v=_[m];if(v){let y=v.v!==null?`${v.l}: Score ${v.v}`:`${v.l}: --`;s.show(b,g.clientX-b.left,y),setTimeout(()=>s.hide(),2e3)}})});let d=a?.querySelector(".strip-crosshair");if(a&&d&&r){let u=r.getBoundingClientRect().left-a.getBoundingClientRect().left;me(a,d,r,u)}i.querySelectorAll(".cells, .strip-container").forEach(u=>{let p=u.getAttribute("data-slots"),_=null;try{p&&(_=JSON.parse(p))}catch{}ge(u,_,s)})}_bindEnergyFlowInteractions(){this._energyFlowAbort&&this._energyFlowAbort.abort(),this._energyFlowAbort=new AbortController;let{signal:t}=this._energyFlowAbort,n=this._shadow.querySelectorAll(".section-energy-flow path[data-zone]"),o=this._shadow.querySelector(".section-energy-flow");if(n.length===0||!o)return;let i=null;n.forEach(s=>{s.classList.add("ribbon"),s.addEventListener("click",()=>{let a=s.getAttribute("data-zone");if(a){if(i===a){i=null,n.forEach(r=>r.classList.remove("dimmed"));return}i=a,n.forEach(r=>{r.classList.toggle("dimmed",r.getAttribute("data-zone")!==a)})}},{signal:t})})}_bindSparklineCrosshairs(){this._sparklineAbort&&this._sparklineAbort.abort(),this._sparklineAbort=new AbortController,this._shadow.querySelectorAll(".strip-tooltip-fixed").forEach(o=>o.remove()),this._shadow.querySelectorAll(".sparkline-crosshair").forEach(o=>o.remove());let t=this._shadow.querySelectorAll(".section-zones .sparkline-filled, .section-zones .zone-row-pulse");if(t.length===0)return;let n=uo();this._shadow.appendChild(n.element),t.forEach(o=>{let i=o;i.style.position="relative";let s=document.createElement("div");s.className="strip-crosshair sparkline-crosshair",s.style.display="none",s.style.top="0",s.style.bottom="0",i.appendChild(s);let a=i.getAttribute("data-sparkline"),r=null;try{a&&(r=JSON.parse(a))}catch{}i.addEventListener("pointermove",c=>{if(c.pointerType==="touch")return;let d=i.getBoundingClientRect(),h=c.clientX-d.left;if(!(h<0||h>d.width)&&(s.style.left=`${h}px`,s.style.display="",r)){let u=r.d,p=r.u||"",_=Math.min(u.length-1,Math.floor(h/d.width*u.length)),g=u[_];if(g){let b=g.v!==null?`${g.l}: ${g.v}${p}`:`${g.l}: --`;n.show(d,c.clientX,b)}}}),i.addEventListener("pointerleave",()=>{s.style.display="none",n.hide()});let l=null;i.addEventListener("pointerdown",c=>{if(c.pointerType!=="touch")return;let d=i.getBoundingClientRect(),h=c.clientX-d.left;if(!(h<0||h>d.width)){if(s.style.left=`${h}px`,s.style.display="",r){let u=r.d,p=r.u||"",_=Math.min(u.length-1,Math.floor(h/d.width*u.length)),g=u[_];if(g){let b=g.v!==null?`${g.l}: ${g.v}${p}`:`${g.l}: --`;n.show(d,c.clientX,b)}}l&&clearTimeout(l),l=setTimeout(()=>{s.style.display="none",n.hide(),l=null},2e3)}})})}_renderSection(t,n,o,i){let s=typeof t=="string"?t:t.type,a=this._config,r=i.hubEntities,l=this._historyCache;switch(s){case"zones":return ne(n,a,o,i,l);case"api":return ie(r,o,t,l);case"graph":return ue(t,n,l,o,i);case"donut":return he(t,r,o);case"bridge":return re(r,o,l);case"homekit":return se(r,o,l);case"weather":return ae(r,o,l);case"environment":return le(n,o,i);case"thermal":return ce(n,o,i);case"schedule":return de(n,o,i);case"thermal_strip":return ho(n,t,o,i,l);case"comfort_strip":return go(n,t,o,i,l);case"energy_flow":return _e(n,o,i);case"radial":return be(n,t,o,i,l);default:return""}}_fireAction(t,n,o){if(!this._hass)return;let i=n[o]||this._config?.[o]||(o==="tap_action"?{action:"more-info"}:{action:"none"});mt(this,this._hass,i,t,dt)}_applyTransitionGlow(t){let n=a=>{a&&(a.classList.add("temp-transitioning"),setTimeout(()=>a.classList.remove("temp-transitioning"),1100))},o=this._shadow.querySelectorAll(".zone-row");o[t]&&n(o[t].querySelector(".power-bar-fill"));let i=this._shadow.querySelectorAll(".zone-row-pulse");n(i[t]||null);let s=this._shadow.querySelectorAll(".arc-group");s[t]&&n(s[t].querySelector(".arc-path"))}_updateZones(){if(!(!this._elements.zonesSection||!this._config||!this._hass||!this._discovery)){if(!nt()){let t=this._config._zones||[],n=this._hass.states;for(let o=0;o<t.length;o++){let i=t[o].entity,s=this._prevStates[i],a=n[i];if(!s||!a)continue;let r=s.attributes?.current_temperature,l=a.attributes?.current_temperature;r!==void 0&&l!==void 0&&r!==l&&this._applyTransitionGlow(o)}}ao(this._elements.zonesSection,this._config._zones||[],this._config,this._hass.states,this._discovery,this._prevStates)}}_updateSections(){if(!this._hass||!this._discovery||!this._config)return;let t=this._hass.states,n=this._discovery,o=this._config._zones||[],i=this._rerenderTargets;if(!i)return;let s=new Set;for(let c of i){let d=this._shadow.querySelector(c.selector);if(!d||c.watchIds.length===0||!c.watchIds.some(g=>{let b=t[g],m=this._prevStates[g];return!m||m.state!==b?.state||m.last_updated!==b?.last_updated}))continue;let u=c.render();if(!u)continue;let p=document.createElement("template");p.innerHTML=u;let _=p.content.firstElementChild;_&&(d.replaceWith(_),s.add(c.selector))}let a=new Set([".section-zones",".section-api",".section-bridge",".section-homekit",".section-weather",".section-environment",".section-thermal",".section-schedule"]);[...s].some(c=>a.has(c))&&this._bindSectionChipActions(),s.has(".section-zones")&&(this._elements.zonesSection=this._shadow.querySelector(".section-zones"),this._bindZoneActions(),this._bindChipActions()),s.has(".section-api")&&(this._elements.apiSection=this._shadow.querySelector(".section-api"),this._startCountdownTimer()),s.has(".section-radial")&&this._bindRadialInteractions();let l=this._shadow.querySelector(".section-energy-flow");if(l&&o.some(d=>{let h=H(d.entity),u=n.zoneEntities?.[h]||{};return[d.entity,u.heating_power,u.ac_power].filter(Boolean).some(_=>{let g=t[_],b=this._prevStates[_];return!b||b.state!==g?.state||b.last_updated!==g?.last_updated})})&&!vo(l,o,t,n)){let h=_e(o,t,n);if(h){let u=document.createElement("template");u.innerHTML=h;let p=u.content.firstElementChild;p&&(l.replaceWith(p),s.add(".section-energy-flow"),this._bindEnergyFlowInteractions())}}}_updateHistorySections(){if(!this._config||!this._hass||!this._discovery)return;let t=this._config,n=this._hass.states,o=this._discovery,i=t._zones||[],s=t.sections||[{type:"zones"}],a=[];for(let l of s){let c=typeof l=="string"?l:l.type;if(!hn.has(c))continue;let d=fn[c];if(!d)continue;let h=this._shadow.querySelector(d);if(!h)continue;let u=this._renderSection(l,i,n,o);if(!u)continue;let p=document.createElement("template");p.innerHTML=u;let _=p.content.firstElementChild;_&&(h.replaceWith(_),a.push(c))}if(a.length===0)return;a.includes("zones")&&(this._elements.zonesSection=this._shadow.querySelector(".section-zones"),this._bindZoneActions(),this._bindChipActions(),this._bindSparklineCrosshairs()),a.includes("api")&&(this._elements.apiSection=this._shadow.querySelector(".section-api"),this._startCountdownTimer()),a.includes("radial")&&this._bindRadialInteractions(),a.includes("thermal_strip")&&this._bindTimelineInteractions(),a.includes("comfort_strip")&&this._bindHeatmapInteractions(),a.includes("energy_flow")&&this._bindEnergyFlowInteractions(),a.some(l=>["zones","api","bridge","homekit","weather"].includes(l))&&this._bindSectionChipActions()}async _refreshHistoryIfNeeded(){if(!this._hass||!this._config||te(this._historyCache))return;let t=eo();if(te(t)){this._historyCache=t,this._rebuildSparklinePathCache(),Object.values(t.data).filter(a=>a.length>=2).length>0&&this._updateHistorySections();return}if(this._historyFetchInProgress)return;this._historyFetchInProgress=!0;let n=this._config._zones||[],o=[];for(let s of n){let a=H(s.entity),r=this._discovery?.zoneEntities?.[a]||{};o.push(s.temperature_entity||r.temperature||s.entity);let l=s.humidity_entity||r.humidity;l&&o.push(l)}if(this._discovery?.hubEntities?.call_history&&o.push(this._discovery.hubEntities.call_history),this._discovery?.hubEntities?.api_usage&&o.push(this._discovery.hubEntities.api_usage),this._discovery?.hubEntities?.boiler_flow_temp&&o.push(this._discovery.hubEntities.boiler_flow_temp),this._discovery?.hubEntities?.homekit_reads_saved&&o.push(this._discovery.hubEntities.homekit_reads_saved),this._discovery?.hubEntities?.homekit_writes_saved&&o.push(this._discovery.hubEntities.homekit_writes_saved),this._discovery?.hubEntities?.outside_temp&&o.push(this._discovery.hubEntities.outside_temp),o.length===0){this._historyFetchInProgress=!1;return}let i=o.filter(s=>s&&typeof s=="string"&&s.includes("."));if(i.length===0){this._historyFetchInProgress=!1;return}try{let s=await Tt(this._hass,i,24);this._historyCache=io(this._historyCache,s),this._rebuildSparklinePathCache(),oo(s),Object.values(s).filter(r=>r.length>=2).length>0&&this._updateHistorySections()}catch{dt("History fetch failed, using cached data")}finally{this._historyFetchInProgress=!1}}_cacheWatchedStates(){if(!this._hass||!this._config||!this._discovery)return;let t=this._hass.states,n=this._config._zones||[],o=this._discovery.hubEntities,i={};for(let s of n){let a=s.entity;t[a]&&(i[a]=t[a]);let r=H(a),l=this._discovery.zoneEntities?.[r]||{};for(let c of Object.values(l))c&&t[c]&&(i[c]=t[c])}for(let s of Object.values(o))s&&t[s]&&(i[s]=t[s]);this._prevStates=i}disconnectedCallback(){this._countdownTimer&&(clearInterval(this._countdownTimer),this._countdownTimer=null),this._rafId&&(cancelAnimationFrame(this._rafId),this._rafId=null),this._chipAbort?.abort(),this._sectionChipAbort?.abort(),this._radialAbort?.abort(),this._timelineAbort?.abort(),this._heatmapAbort?.abort(),this._energyFlowAbort?.abort(),this._sparklineAbort?.abort();let t=this._shadow?.querySelector(".arc-group");t&&typeof t.__shimmerStop=="function"&&t.__shimmerStop();let n=this._shadow?.querySelectorAll(".zone-row")||[];for(let o of n){let i=o.__pulseCleanup;typeof i=="function"&&i()}}connectedCallback(){this._config&&this._hass&&!this._shadow.querySelector("ha-card")&&(this._discovery||this._runDiscovery(),this._fullRender(),this._refreshHistoryIfNeeded())}getCardSize(){let t=this._config?._zones?.length||1,n=this._config?.sections?.length||1;return Math.max(1,t+n)}getGridOptions(){return{columns:12,min_columns:3,rows:this.getCardSize(),min_rows:1}}static async getConfigElement(){return await import("./pulse-climate-editor.js"),document.createElement(Be)}static getStubConfig(t){return{entity:Object.keys(t.states).find(o=>o.startsWith("climate."))||"climate.living_room"}}};customElements.get(Mt)||customElements.define(Mt,we);window.customCards=window.customCards||[];window.customCards.push({type:Mt,name:"Pulse Climate Card",description:"Modular climate dashboard card with Tado CE enrichment"});console.info(`%c PULSE-CLIMATE-CARD %c v${Oe} `,"background:#4CAF50;color:white;font-weight:bold","background:#333;color:#fff");var Vt=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_elements={};_indicators={};_indicatorTimer=null;_sparklineData={};_sparklineTimer=null;_sparklineLastFetch=0;_shadow;constructor(){super(),this._shadow=this.attachShadow({mode:"open"});let t=document.createElement("style");t.textContent=Ae,this._shadow.appendChild(t)}get _cfg(){return this._config}disconnectedCallback(){this._indicatorTimer&&(clearTimeout(this._indicatorTimer),this._indicatorTimer=null),this._sparklineTimer&&(clearTimeout(this._sparklineTimer),this._sparklineTimer=null);let t=this._shadow.querySelectorAll(".bar-row");for(let n of t)Kt(n),Xt(n)}setConfig(t){this._config=He(t),this._elements={},this._sparklineData={},this._sparklineLastFetch=0,this._indicators={},this._hass&&(this._fullRender(),this._scheduleIndicatorFetch(),this._scheduleSparklineFetch())}set hass(t){if(this._hass=t,!this._config)return;let n=!1;for(let o of this._cfg.entities){let i=t.states[o.entity],s=this._prevStates[o.entity];if(!s||s.state!==i?.state||s.last_updated!==i?.last_updated){n=!0;break}let a=o.target??this._cfg.target;if(typeof a=="string"){let r=t.states[a],l=this._prevStates[`__target__${a}`];if(!l||l.state!==r?.state||l.last_updated!==r?.last_updated){n=!0;break}}}n&&(this._elements.container?this._updateBars():this._fullRender(),this._cacheStates(),this._scheduleIndicatorFetch(),this._scheduleSparklineFetch())}_fullRender(){let t=this._cfg;if(!t)return;let n=t.columns??1,o=n>1?` columns-${n}`:"",i=t.entity_row?" entity-row":"",s=t.layout==="compact"?" compact":"",a=[];n>1&&a.push(`--pulse-columns:${n}`),t.gap!==void 0&&a.push(`--pulse-gap:${C(ut(t.gap))}`),t.font_size!==void 0&&a.push(`--pulse-font-size:${C(ut(t.font_size))}`);let r=a.length>0?` style="${a.join(";")}"`:"",l="";t.title&&(l+=`<div class="pulse-title">${f(t.title)}</div>`),l+=`<div class="pulse-card${o}${i}${s}"${r}>`;for(let u of t.entities)l+=this._renderBarRow(u);l+="</div>";let c=t.entity_row?l:`<ha-card>${l}</ha-card>`,d=this._shadow.querySelector("ha-card, .pulse-card");d&&d.remove();let h=document.createElement("template");h.innerHTML=c,this._shadow.appendChild(h.content.cloneNode(!0)),this._elements.container=this._shadow.querySelector(".pulse-card"),this._cacheBarElements();for(let u of t.entities){let p=this._elements.rows?.[u.entity];p&&(p.style.display=Wt(u,this._hass)?"":"none")}}_renderBarRow(t){let n=this._cfg,o=jt(t,n,this._hass),i=t.positions?.name??n.positions?.name??X.positions.name,s=t.positions?.value??n.positions?.value??X.positions.value,a=t.positions?.icon??n.positions?.icon??X.positions.icon,r=t.positions?.indicator??n.positions?.indicator??X.positions.indicator,c=(t.indicator??n.indicator)?.show===!0&&r==="off"?"outside":r,d=t.animation??{},h=d.speed??n.animation.speed,u=d.effect??n.animation.effect,p=d.state??n.animation.state,_=this._buildIndicatorHtml(t,n,c),g=Gt(t,this._hass),b=this._buildPositionHtml(o,i,s,a,c,_,"outside",g),m=this._buildPositionHtml(o,i,s,a,c,_,"inside",g),v=C(ut(t.height??n.height)),y=C(ut(t.border_radius??n.border_radius)),x=o.color?`background-color:${C(o.color)};`:"",$=u==="charge"&&!o.isUnavailable?" charge":"",k=p==="off"?"transition:none;":"",A=ft(t,n),M=`width:${o.fill*A}%;${k}${x}`,I=this._buildTargetHtml(t,n,o.min,o.max),S=this._buildSparklineHtml(t,n),w=`
      <div class="bar-container" style="height:${v};border-radius:${y};--pulse-animation-speed:${h}s;">
        <div class="bar-track"></div>
        ${S}
        <div class="bar-fill${$}" data-entity="${f(t.entity)}" style="${M}"></div>
        ${I}
        ${m}
      </div>`,z=!!(t.interactive??n.interactive),F=z?`<div class="bar-interactive-row"><div class="bar-step-btn" data-step="-1" role="button" aria-label="Decrease">\u2212</div>${w}<div class="bar-step-btn" data-step="1" role="button" aria-label="Increase">+</div></div>`:w,T=z?"slider":"progressbar",P=o.isUnavailable?`role="${T}" aria-valuenow="0" aria-valuemin="${o.min}" aria-valuemax="${o.max}" aria-label="${f(o.name)}: Unavailable"`:`role="${T}" aria-valuenow="${o.numValue}" aria-valuemin="${o.min}" aria-valuemax="${o.max}" aria-label="${f(o.name)}: ${f(o.displayValue)}"`,R=o.isUnavailable?" unavailable":"",N=z?" data-interactive":"",B=o.isUnavailable?'data-state="unavailable"':`data-state="${f(o.numValue)}"`,V=o.color?` data-severity-color="${f(o.color)}"`:"";return`<div class="bar-row${R}" data-entity="${f(t.entity)}"${N} ${B}${V} ${P}>${b}${F}</div>`}_buildIndicatorHtml(t,n,o){let i=t.indicator??n.indicator;if(!(i?.show===!0&&o!=="off"))return"";let a=this._indicators[t.entity],r=a?.direction??"neutral",l=i?.show_delta===!0&&!!a,c=this._hass?.states[t.entity],d=ht(t,c),h=Ct(t,n,this._hass),{text:u}=Ut(r,a?.delta??0,l,h,d),p=i?.inverted===!0?" inverted":"";return`<span class="bar-indicator ${r}${p}">${u}</span>`}_buildPositionHtml(t,n,o,i,s,a,r,l){if(n!==r&&o!==r&&i!==r&&s!==r)return"";let d=`<div class="${r==="outside"?"bar-labels":"bar-content"}"><div class="bar-label-left">`;return i===r&&t.resolvedIcon&&(d+=`<ha-icon class="bar-icon" icon="${f(t.resolvedIcon)}"></ha-icon>`),n===r&&(l?(d+='<div class="bar-name-group">',d+=`<span class="bar-name">${f(t.name)}</span>`,d+=`<span class="bar-secondary">${f(l)}</span>`,d+="</div>"):d+=`<span class="bar-name">${f(t.name)}</span>`),d+='</div><div class="bar-label-right">',o===r&&(d+=`<span class="bar-value">${f(t.displayValue)}</span>`),s===r&&a&&(d+=a),d+="</div></div>",d}_buildTargetHtml(t,n,o,i){let s=t.target??n.target,{value:a,showLabel:r}=At(s,this._hass);if(a===null)return"";let l=Y((a-o)/(i-o),0,1)*100,c=ft(t,n),d=`left:${l*c}%`,h=r?`<span class="bar-target-label">${f(a)}</span>`:"";return`<div class="bar-target" style="${d}">${h}</div>`}_updateBars(){let t=this._cfg;for(let n of t.entities){let o=jt(n,t,this._hass),i=ft(n,t),s=this._elements.rows?.[n.entity];if(!s||s.__pulseSliding)continue;let a=Wt(n,this._hass);if(s.style.display=a?"":"none",!a)continue;s.classList.toggle("unavailable",o.isUnavailable);let r=s.querySelector(".bar-fill");if(r){let _=`${o.fill*i}%`;r.style.width=_,r.style.backgroundColor=o.color||"";let g=s.querySelector(".bar-sparkline");g&&(g.style.width=`${i*100}%`);let b=s.querySelector(".bar-icon");b&&o.resolvedIcon&&b.setAttribute("icon",o.resolvedIcon)}let l=s.querySelectorAll(".bar-name");for(let _ of l)_.textContent=o.name;let c=s.querySelectorAll(".bar-value");for(let _ of c)_.textContent=o.displayValue;let d=s.querySelectorAll(".bar-secondary");if(d.length>0){let _=Gt(n,this._hass);for(let g of d)g.textContent=_}s.setAttribute("aria-valuenow",o.isUnavailable?"0":String(o.numValue)),s.setAttribute("aria-valuemin",String(o.min)),s.setAttribute("aria-valuemax",String(o.max)),s.setAttribute("aria-label",`${f(o.name)}: ${f(o.displayValue)}`),s.setAttribute("data-state",o.isUnavailable?"unavailable":String(o.numValue)),o.color?s.setAttribute("data-severity-color",o.color):s.removeAttribute("data-severity-color");let h=s.querySelector(".bar-target"),u=n.target??t.target,{value:p}=At(u,this._hass);if(p!==null){let _=Y((p-o.min)/(o.max-o.min),0,1)*100;if(h){h.style.left=`${_*i}%`,h.style.display="";let g=h.querySelector(".bar-target-label");g&&(g.textContent=String(p))}}else h&&(h.style.display="none")}}_scheduleIndicatorFetch(){let t=this._cfg;!t||!t.entities.some(o=>(o.indicator??t.indicator)?.show===!0)||(this._indicatorTimer&&clearTimeout(this._indicatorTimer),this._indicatorTimer=setTimeout(()=>this._fetchIndicators(),500))}async _fetchIndicators(){let t=this._cfg;if(t)try{let n=new Map;for(let i of t.entities)n.set(i.entity,i);let o=new Map;for(let i of t.entities){let s=i.indicator??t.indicator;if(!s?.show)continue;let a=s.period??60;o.has(a)||o.set(a,[]),o.get(a).push({entity:i.entity,icfg:s})}for(let[i,s]of o){let a=s.map(l=>l.entity),r=await Ne(this._hass,a,i);for(let{entity:l,icfg:c}of s){let d=n.get(l),h=this._hass?.states[l],u=d?.attribute?h?.attributes?.[d.attribute]:h?.state,p=Le(u,r[l]);this._indicators[l]=p;let _=this._elements.rows?.[l];if(!_)continue;let g=_.querySelector(".bar-indicator");if(g&&d){let b=this._hass?.states[l],m=ht(d,b),v=Ct(d,t,this._hass),{text:y}=Ut(p.direction,p.delta,c.show_delta===!0,v,m),x=c.inverted===!0?" inverted":"";g.textContent=y,g.className=`bar-indicator ${p.direction}${x}`}}}}catch(n){J("Indicator fetch failed: %O",n)}}_resolveSparklineConfig(t,n){let o=t.sparkline??n.sparkline;if(!o)return null;let i=o===!0?{}:o.show?o:null;if(!i)return null;let s=i.hours_to_show??24,a=i.points_per_hour??1;return{hours:s,pointsPerHour:a,slots:Math.max(s*a,2),aggregateFunc:i.aggregate_func??"avg",smoothing:i.smoothing!==!1,strokeWidth:Number(i.line_width??i.stroke_width??1.5)||1.5,color:i.color??null,updateInterval:i.update_interval??300}}_buildSparklineHtml(t,n){let o=this._resolveSparklineConfig(t,n);if(!o)return"";let i=this._sparklineData[t.entity];if(!i||i.length<2)return"";let s=yt(i,200,50,o.slots,o.aggregateFunc,o.smoothing);if(!s)return"";let r=ft(t,n)*100,l=o.color?`color:${C(o.color)};`:"";return`<svg class="bar-sparkline" viewBox="0 0 200 50" preserveAspectRatio="none" height="100%" style="${`width:${r}%;${l}`}"><path d="${s}" fill="none" stroke="currentColor" stroke-width="${o.strokeWidth}" /></svg>`}_scheduleSparklineFetch(){let t=this._cfg;if(!t||!t.entities.some(s=>!!this._resolveSparklineConfig(s,t)))return;let o=300;for(let s of t.entities){let a=this._resolveSparklineConfig(s,t);a&&a.updateInterval<o&&(o=a.updateInterval)}(Date.now()-this._sparklineLastFetch)/1e3<o&&this._sparklineLastFetch>0||(this._sparklineTimer&&clearTimeout(this._sparklineTimer),this._sparklineTimer=setTimeout(()=>this._fetchSparklines(),1e3))}async _fetchSparklines(){let t=this._cfg;if(t)try{let n=new Map;for(let o of t.entities){let i=this._resolveSparklineConfig(o,t);if(!i)continue;let s=i.hours;n.has(s)||n.set(s,[]),n.get(s).push(o.entity)}for(let[o,i]of n){let s=await Tt(this._hass,i,o);for(let a of i)this._sparklineData[a]=s[a]||[]}this._sparklineLastFetch=Date.now(),this._updateSparklines()}catch(n){J("Sparkline fetch failed: %O",n)}}_updateSparklines(){let t=this._cfg;if(t)for(let n of t.entities){let o=this._resolveSparklineConfig(n,t);if(!o)continue;let i=this._elements.rows?.[n.entity];if(!i)continue;let s=this._sparklineData[n.entity];if(!s||s.length<2)continue;let a=yt(s,200,50,o.slots,o.aggregateFunc,o.smoothing);if(!a)continue;let r=i.querySelector(".bar-sparkline"),c=`${ft(n,t)*100}%`;if(r){let d=r.querySelector("path");d&&d.setAttribute("d",a),r.style.width=c}else{let d=i.querySelector(".bar-container");if(!d)continue;let h=o.color?`color:${C(o.color)};`:"",u=`<svg xmlns="http://www.w3.org/2000/svg" class="bar-sparkline" viewBox="0 0 200 50" preserveAspectRatio="none" height="100%" style="width:${c};${h}"><path d="${a}" fill="none" stroke="currentColor" stroke-width="${o.strokeWidth}" /></svg>`,p=new DOMParser().parseFromString(u,"image/svg+xml"),_=document.importNode(p.documentElement,!0),g=d.querySelector(".bar-track");g&&g.nextSibling?d.insertBefore(_,g.nextSibling):d.appendChild(_)}}}_cacheStates(){let t=this._cfg;this._prevStates={};for(let n of t.entities){let o=this._hass?.states[n.entity];o&&(this._prevStates[n.entity]={state:o.state,last_updated:o.last_updated});let i=n.target??t.target;if(typeof i=="string"){let s=this._hass?.states[i];s&&(this._prevStates[`__target__${i}`]={state:s.state,last_updated:s.last_updated})}}}_cacheBarElements(){let t=this._cfg;this._elements.rows={};let n=new Map;for(let i of t.entities)n.set(i.entity,i);let o=this._shadow.querySelectorAll(".bar-row");for(let i of o){let s=i.dataset.entity;if(s){this._elements.rows[s]=i;let a=n.get(s);a&&(Pe(i,this,this._hass,t,a),(a.interactive??t.interactive)&&qe(i,this,t,a)),tt(i);for(let r of i.querySelectorAll(".bar-step-btn"))tt(r)}}}getCardSize(){let t=this._config?.entities?.length||1,n=this._config?.columns||1;return Math.ceil(t/n)+(this._config?.title?1:0)}getGridOptions(){let t=this._config?.entities?.length||1,n=this._config?.columns||1,o=Math.ceil(t/n);return{columns:12,min_columns:3,rows:Math.max(1,o),min_rows:1}}static async getConfigElement(){return await import("./pulse-card-editor.js"),document.createElement("pulse-card-editor")}static getStubConfig(t){return{entity:Object.keys(t.states).filter(o=>{let i=t.states[o];return o.startsWith("sensor.")&&!isNaN(parseFloat(i.state))})[0]||"sensor.example"}}};customElements.get("pulse-card")||customElements.define("pulse-card",Vt);window.customCards=window.customCards||[];window.customCards.push({type:"pulse-card",name:"Pulse Card",description:"Compact horizontal bar chart for sensor data visualization",preview:!0,documentationURL:"https://github.com/hiall-fyi/pulse-card"});console.info(`%c PULSE-CARD %c v${Te} `,"background:#03A9F4;color:white;font-weight:bold","background:#333;color:white");var xr=Vt;export{xr as default};
