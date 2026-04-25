var M=`
  /* ================================================================
   * Host & Card Shell
   * ================================================================ */
  :host {
    display: block;
  }

  ha-card {
    overflow: hidden;
    padding: 16px;
    background: var(--ha-card-background, var(--card-background-color));
    container-type: inline-size;
  }

  .panel-title {
    font-size: 16px;
    font-weight: 500;
    color: var(--primary-text-color);
    padding-bottom: 8px;
  }

  /* ================================================================
   * Port Grid \u2014 responsive CSS grid
   * ================================================================ */
  .port-grid {
    display: grid;
    grid-template-columns: repeat(var(--panel-columns, 4), 1fr);
    gap: 12px 8px;
    justify-items: center;
  }

  @container (max-width: 300px) {
    .port-grid {
      grid-template-columns: repeat(var(--panel-columns-narrow, 2), 1fr);
    }
  }

  /* ================================================================
   * Port Tile \u2014 wrapper for body + label + speed
   * ================================================================ */
  .port-tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  .port-tile:not(.has-ripple):active {
    opacity: 0.8;
  }

  @media (hover: hover) {
    .port-tile:hover .port-body {
      filter: brightness(1.15);
    }
  }

  .port-tile:focus-visible {
    outline: 2px solid var(--primary-color, #03A9F4);
    outline-offset: 2px;
    border-radius: 4px;
  }

  /* State-dependent tile opacity */
  .port-tile.disconnected {
    opacity: 0.4;
  }

  .port-tile.disabled {
    opacity: 0.25;
  }

  .port-tile.unavailable {
    opacity: 0.3;
  }

  /* ================================================================
   * Port Body \u2014 3D metallic shell (shared by all port types)
   * ================================================================ */
  .port-body {
    width: 50px;
    height: 40px;
    background: linear-gradient(180deg, #404040 0%, #2c2c2c 30%, #1a1a1a 100%);
    border: 1px solid rgba(160, 160, 160, 0.35);
    border-radius: 3px;
    position: relative;
    box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(0, 0, 0, 0.3);
  }

  .port-body.disconnected,
  .port-body.disabled,
  .port-body.unavailable {
    border-color: rgba(70, 70, 70, 0.25);
  }

  /* ================================================================
   * RJ45 Port Internals \u2014 socket, pins, tab
   * ================================================================ */
  .port-socket {
    position: absolute;
    top: 8px;
    left: 4px;
    right: 4px;
    bottom: 7px;
    background: #0e0e0e;
    border-radius: 2px;
    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.95);
  }

  .port-pins {
    display: flex;
    justify-content: center;
    gap: 2px;
    padding-top: 3px;
  }

  .port-pin {
    width: 2px;
    height: 10px;
    border-radius: 0.5px;
    opacity: 0.65;
    background: #c8a84e;
  }

  .port-pin.off {
    background: #444;
  }

  .port-tab {
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 3px;
    background: rgba(90, 90, 90, 0.3);
    border-radius: 1px;
  }

  /* ================================================================
   * SFP Port \u2014 wider body, cage slot instead of pins
   * ================================================================ */
  .port-body.sfp {
    width: 56px;
  }

  .port-cage {
    position: absolute;
    top: 12px;
    left: 4px;
    right: 4px;
    bottom: 5px;
    background: #0a0a0a;
    border: 1px solid rgba(80, 80, 80, 0.3);
    border-radius: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .port-cage-edge {
    width: 70%;
    height: 1px;
    background: rgba(120, 120, 120, 0.4);
  }

  /* ================================================================
   * Virtual Port \u2014 dashed border, icon, no physical elements
   * ================================================================ */
  .port-body.virtual {
    border-style: dashed;
    border-color: rgba(160, 160, 160, 0.25);
    background: linear-gradient(180deg, rgba(64, 64, 64, 0.6) 0%, rgba(44, 44, 44, 0.6) 30%, rgba(26, 26, 26, 0.6) 100%);
  }

  .port-virtual-icon {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--secondary-text-color);
    --mdc-icon-size: 18px;
  }

  /* ================================================================
   * LEDs \u2014 link (left) and activity (right)
   * ================================================================ */
  .port-led {
    position: absolute;
    top: 3px;
    width: 7px;
    height: 3px;
    border-radius: 1px;
    z-index: 5;
    transition: opacity 0.05s;
  }

  .port-led.link {
    left: 4px;
  }

  .port-led.activity {
    right: 4px;
  }

  /* Link LED states */
  .port-led.link.connected {
    background: #00E676;
    box-shadow: 0 0 4px #00E676, 0 0 8px rgba(0, 230, 118, 0.3);
  }

  .port-led.link.disconnected {
    background: #222;
    border: 1px solid #333;
    box-sizing: border-box;
  }

  .port-led.link.disabled {
    background: #8B0000;
    box-shadow: 0 0 3px rgba(139, 0, 0, 0.5);
  }

  .port-led.link.unavailable {
    background: #222;
    border: 1px solid #333;
    box-sizing: border-box;
  }

  /* Activity LED states */
  .port-led.activity.active {
    background: #FFB300;
    box-shadow: 0 0 4px #FFB300, 0 0 8px rgba(255, 179, 0, 0.3);
  }

  .port-led.activity.idle {
    background: #222;
    border: 1px solid #333;
    box-sizing: border-box;
    opacity: 1;
  }

  /* ================================================================
   * Port Label & Speed Text
   * ================================================================ */
  .port-label {
    font-size: 10px;
    font-weight: 600;
    color: var(--secondary-text-color);
    text-align: center;
    letter-spacing: 0.3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  .port-speed {
    font-size: 9px;
    font-family: monospace;
    color: var(--secondary-text-color);
    opacity: 0.7;
    text-align: center;
    white-space: nowrap;
  }

  /* ================================================================
   * Compact Mode
   * ================================================================ */
  ha-card:has(.compact) {
    padding: 10px;
  }

  .port-grid.compact {
    gap: 8px 4px;
  }

  .compact .port-body {
    width: 42px;
    height: 34px;
  }

  .compact .port-body.sfp {
    width: 48px;
  }

  .compact .port-socket {
    top: 7px;
    bottom: 6px;
    left: 3px;
    right: 3px;
  }

  .compact .port-pin {
    height: 8px;
  }

  .compact .port-label {
    font-size: 9px;
  }

  .compact .port-speed {
    font-size: 8px;
  }

  /* ================================================================
   * Entity Row Mode (no ha-card wrapper)
   * ================================================================ */
  .port-grid.entity-row {
    padding: 8px 0;
  }
`;var N="1.1.0",m="pulse-switch-card",D="pulse-switch-card-editor",I="Pulse Switch Card:";var f={columns:4,show_speed:!1,speed_format:"rx/tx",led_mode:"realistic",avg_packet_size:500,tap_action:{action:"more-info"},hold_action:{action:"none"}};var v=class{constructor(t){this._el=t,this._timer=null,this._on=!1,this._currentOnMs=0,this._currentOffMs=0}update(t){if(t<=0){this._stopBlink(),this._setOff();return}let e=1-Math.pow(1-50/1e3,t);if(e>=.95){this._stopBlink(),this._setOn();return}let o=50/e-50;this._ensureBlink(50,o)}updateScaled(t){if(t<=0){this._stopBlink(),this._setOff();return}if(t>=.8){this._stopBlink(),this._setOn();return}let s=1e3/(1+t*11.25),o=Math.min(50,s/2),l=s-o;this._ensureBlink(o,l)}_ensureBlink(t,e){let s=Math.round(t),o=Math.round(e);if(this._timer&&this._currentOnMs===s&&this._currentOffMs===o)return;this._currentOnMs=s,this._currentOffMs=o,this._stopBlink();let l=()=>{let n=s*(.8+Math.random()*.4),r=o*(.8+Math.random()*.4);this._setOn(),this._timer=setTimeout(()=>{this._setOff(),this._timer=setTimeout(l,r)},n)};l()}_stopBlink(){this._timer&&(clearTimeout(this._timer),this._timer=null),this._currentOnMs=0,this._currentOffMs=0}_setOn(){this._on||(this._el.style.opacity="1",this._on=!0)}_setOff(){this._el.style.opacity="0",this._on=!1}pause(){this._stopBlink()}destroy(){this._stopBlink(),this._setOff()}};function x(i){return String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function g(i){return i==null||i===""?"":String(i).replace(/[;{}]/g,"").replace(/url\s*\(/gi,"").replace(/expression\s*\(/gi,"").replace(/-moz-binding\s*:/gi,"")}function k(i){return!isFinite(i)||i<.01?"0":i>=1e3?`${(i/1e3).toFixed(1)}G`:i>=100?Math.round(i).toString():i>=1?i.toFixed(1):i.toFixed(2)}function R(i,t,e){switch(e){case"rx":return`\u2193${k(i)}`;case"total":return k(i+t);default:return`\u2193${k(i)} \u2191${k(t)}`}}function w(i){return i.replace(/_rx_speed$/,"_tx_speed")}function F(i,t=500){return i<=0||t<=0?0:i*1e6/(t*8)}function C(i,t,e){if(e<=0)return 0;let s=i-t;return s<0?0:s/e}function S(i,t){if(i.label)return i.label;let e=t?.attributes?.comment;if(e&&e!=="null"&&e!=="")return String(e);let s=t?.attributes?.friendly_name;if(s){let o=String(s).match(/Interfaces?\s+(.+?)\s+(?:RX|TX)\s/i);if(o)return o[1].replace(/[_-]/g," ");let l=String(s).split(" ");return l[l.length-1]}return i.entity}var q=/bridge|pppoe|vlan|loopback|ovpn|wireguard/i;function L(i){if(i.port_type==="sfp"||i.port_type==="rj45"||i.port_type==="virtual")return i.port_type;let t=i.entity;return/sfp/i.test(t)?"sfp":q.test(t)?"virtual":"rj45"}function P(i){if(i.icon)return i.icon;let t=i.entity.toLowerCase();return/bridge/.test(t)?"mdi:bridge":/pppoe/.test(t)?"mdi:wan":/vlan/.test(t)?"mdi:lan":/ovpn|wireguard|vpn/.test(t)?"mdi:vpn":/loopback/.test(t)?"mdi:loop":"mdi:network"}function z(i,...t){console.warn(`${I} ${i}`,...t)}function j(i,t,e){i.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:e}))}function B(i,t,e,s,o){if(!(!e||e.action==="none"))switch(e.action){case"more-info":j(i,"hass-more-info",{entityId:e.entity||s});break;case"navigate":e.navigation_path&&(history.pushState(null,"",e.navigation_path),j(i,"location-changed",{replace:!1}));break;case"call-service":case"perform-action":{let l=e.service||e.perform_action;if(!l)break;let[n,r]=l.split(".");t.callService(n,r,e.service_data||e.data).catch(a=>o("Service call %s failed: %O",l,a));break}case"url":e.url_path&&window.open(e.url_path,"_blank","noopener,noreferrer");break;case"toggle":t.callService("homeassistant","toggle",{entity_id:e.entity||s}).catch(l=>o("Toggle %s failed: %O",e.entity||s,l));break}}function H(i){if(!customElements.get("ha-ripple")||i.querySelector("ha-ripple"))return;let t=document.createElement("ha-ripple");i.appendChild(t),i.classList.add("has-ripple")}var O=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_portElements={};_activityLeds={};_prevPackets={};_visibilityObserver=null;_visible=!0;_shadow;constructor(){super(),this._shadow=this.attachShadow({mode:"open"});let t=document.createElement("style");t.textContent=M,this._shadow.appendChild(t)}setConfig(t){if(!t||!t.ports||!Array.isArray(t.ports)||t.ports.length===0)throw new Error('Please define at least one port in the "ports" array');for(let e=0;e<t.ports.length;e++)if(!t.ports[e]?.entity)throw new Error(`Port ${e+1} is missing required "entity" field`);this._destroyAllLeds(),this._config={...f,...t,ports:t.ports},this._prevStates={},this._portElements={},this._prevPackets={},this._hass&&this._fullRender()}set hass(t){if(this._hass=t,!this._config)return;let e=!1;for(let s of this._config.ports){let o=t.states[s.entity],l=w(s.entity),n=t.states[l],r=this._prevStates[s.entity];if(!r||r.state!==o?.state||r.last_updated!==o?.last_updated||r.txState!==n?.state){e=!0;break}}e&&(Object.keys(this._portElements).length===0?this._fullRender():this._updateAllPorts(),this._cacheStates())}_fullRender(){let t=this._config,e=t.columns??f.columns,s=Math.min(e,2),o=t.layout==="compact"?" compact":"",l=t.entity_row?" entity-row":"",n="";t.title&&(n+=`<div class="panel-title">${x(t.title)}</div>`),n+=`<div class="port-grid${o}${l}" style="--panel-columns:${g(e)};--panel-columns-narrow:${g(s)}">`;for(let c=0;c<t.ports.length;c++)n+=this._renderPortTile(t.ports[c],c);n+="</div>";let r=t.entity_row?n:`<ha-card>${n}</ha-card>`;for(let c of[...this._shadow.children])c.tagName!=="STYLE"&&c.remove();let a=document.createElement("template");a.innerHTML=r,this._shadow.appendChild(a.content.cloneNode(!0)),this._destroyAllLeds(),this._portElements={};let p=this._shadow.querySelectorAll(".port-tile");for(let c of p){let u=c.dataset.entity;if(!u)continue;let h=c.querySelector(".port-led.link"),d=c.querySelector(".port-led.activity"),_=c.querySelector(".port-label"),b=c.querySelector(".port-speed"),E=[...c.querySelectorAll(".port-pin")];this._portElements[u]={tile:c,linkLed:h,actLed:d,label:_,speed:b,pins:E},d&&(this._activityLeds[u]=new v(d)),this._bindActions(c,u),H(c)}this._updateAllPorts(),this._cacheStates()}_renderPortTile(t,e){let s=this._config,o=L(t),l=this._hass?.states[t.entity],n=S(t,l),r=s.show_speed===!0,a;if(o==="rj45")a=`
        <div class="port-socket"><div class="port-pins">${Array.from({length:8},()=>'<div class="port-pin"></div>').join("")}</div></div>
        <div class="port-tab"></div>`;else if(o==="sfp")a=`
        <div class="port-cage"><div class="port-cage-edge"></div></div>`;else{let c=P(t);a=`
        <div class="port-virtual-icon"><ha-icon icon="${x(c)}"></ha-icon></div>`}let p=`${x(n)}: loading`;return`
      <div class="port-tile" data-entity="${x(t.entity)}" data-index="${e}"
           tabindex="0" role="status" aria-label="${p}">
        <div class="port-body ${o}">
          <div class="port-led link disconnected"></div>
          <div class="port-led activity idle"></div>
          ${a}
        </div>
        <div class="port-label">${x(n)}</div>
        ${r?'<div class="port-speed"></div>':""}
      </div>`}_updateAllPorts(){if(!(!this._config||!this._hass||!this._visible))for(let t of this._config.ports)this._updatePort(t)}_updatePort(t){let e=this._portElements[t.entity];if(!e)return;let s=this._resolvePortState(t);e.tile.className=`port-tile ${s.linkState}`;let o=e.tile.querySelector(".port-body");o&&(o.className=`port-body ${s.portType} ${s.linkState}`),e.linkLed.className=`port-led link ${s.linkState}`;let l=s.totalSpeed>0?"active":"idle";e.actLed.className=`port-led activity ${l}`;let n=this._activityLeds[t.entity];if(n){let p=this._config;s.totalSpeed<=0||s.linkState!=="connected"?n.update(0):p.led_mode==="scaled"?n.updateScaled(s.utilization):n.update(s.pps)}let r=s.linkState==="connected"?"port-pin":"port-pin off";for(let p of e.pins)p.className=r;e.speed&&(e.speed.textContent=s.speedText);let a=s.totalSpeed>0?`, ${s.speedText}`:"";e.tile.setAttribute("aria-label",`${s.label}: ${s.linkState}${a}`)}_resolvePortState(t){let e=this._config,s=this._hass,o=s.states[t.entity],l=w(t.entity),n=s.states[l],r="connected";if(!o||o.state==="unavailable"||o.state==="unknown")r="unavailable";else{let A=o.attributes?.disabled,$=o.attributes?.running;A===!0||A==="true"?r="disabled":($===!1||$==="false")&&(r="disconnected")}let a=r==="unavailable"?0:parseFloat(o?.state)||0,p=r==="unavailable"?0:parseFloat(n?.state)||0,c=a+p,u=L(t),h=u==="virtual"?P(t):"",d=S(t,o),_=e.speed_format??f.speed_format,b=c>0?R(a,p,_):"",E=this._computePps(t,c),T=t.link_speed??1e3,V=T>0?Math.min(c/T,1):0;return{entityId:t.entity,linkState:r,portType:u,virtualIcon:h,rxSpeed:a,txSpeed:p,totalSpeed:c,label:d,speedText:b,pps:E,utilization:V}}_computePps(t,e){let s=this._config,o=this._hass;if(t.rx_packets||t.tx_packets){let n=t.rx_packets?o.states[t.rx_packets]:null,r=t.tx_packets?o.states[t.tx_packets]:null,a=n&&n.state!=="unavailable"?parseFloat(n.state):NaN,p=r&&r.state!=="unavailable"?parseFloat(r.state):NaN;if(!isNaN(a)||!isNaN(p)){let c=(isNaN(a)?0:a)+(isNaN(p)?0:p),u=this._prevPackets[t.entity],h=Date.now()/1e3;if(u){let d=h-u.timestamp,_=u.rx+u.tx,b=C(c,_,d);return this._prevPackets[t.entity]={rx:isNaN(a)?0:a,tx:isNaN(p)?0:p,timestamp:h},b}this._prevPackets[t.entity]={rx:isNaN(a)?0:a,tx:isNaN(p)?0:p,timestamp:h}}}let l=s.avg_packet_size??f.avg_packet_size;return F(e,l)}_bindActions(t,e){let s=this._config,o=s.ports.find(d=>d.entity===e);if(!o)return;let l=t.__pulseCleanup;typeof l=="function"&&l();let n=new AbortController,{signal:r}=n,a=null,p=!1;t.__pulseCleanup=()=>{n.abort(),a&&clearTimeout(a),delete t.__pulseCleanup};let c=d=>d==="tap_action"?o.tap_action??s.tap_action??f.tap_action:o.hold_action??s.hold_action??f.hold_action,u=d=>{if(!this._hass)return;let _=c(d);B(t,this._hass,_,e,z)};t.addEventListener("click",d=>{if(d.preventDefault(),p){p=!1;return}u("tap_action")},{signal:r}),t.addEventListener("pointerdown",()=>{p=!1,a=setTimeout(()=>{p=!0,u("hold_action")},500)},{signal:r});let h=()=>{a&&clearTimeout(a)};t.addEventListener("pointerup",h,{signal:r}),t.addEventListener("pointercancel",h,{signal:r}),t.addEventListener("contextmenu",d=>d.preventDefault(),{signal:r}),t.addEventListener("keydown",d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),u("tap_action"))},{signal:r})}_cacheStates(){if(!(!this._config||!this._hass)){this._prevStates={};for(let t of this._config.ports){let e=this._hass.states[t.entity],s=w(t.entity),o=this._hass.states[s];e&&(this._prevStates[t.entity]={state:e.state,last_updated:e.last_updated,txState:o?.state})}}}_pauseAllLeds(){for(let t of Object.values(this._activityLeds))t.pause()}_resumeAllLeds(){if(!(!this._config||!this._hass))for(let t of this._config.ports)this._updatePort(t)}_destroyAllLeds(){for(let t of Object.values(this._activityLeds))t.destroy();this._activityLeds={}}connectedCallback(){this._config&&this._hass&&Object.keys(this._portElements).length===0&&(this._fullRender(),this._cacheStates()),!(typeof IntersectionObserver>"u")&&(this._visibilityObserver=new IntersectionObserver(([t])=>{let e=this._visible;this._visible=t.isIntersecting,!e&&this._visible?this._resumeAllLeds():e&&!this._visible&&this._pauseAllLeds()},{threshold:0}),this._visibilityObserver.observe(this))}disconnectedCallback(){this._destroyAllLeds();for(let t of Object.keys(this._portElements)){let s=this._portElements[t]?.tile?.__pulseCleanup;typeof s=="function"&&s()}this._portElements={},this._visibilityObserver&&(this._visibilityObserver.disconnect(),this._visibilityObserver=null)}getCardSize(){let t=this._config?.ports?.length||1,e=this._config?.columns||f.columns;return Math.ceil(t/e)+(this._config?.title?1:0)}getGridOptions(){let t=this._config?.ports?.length||1,e=this._config?.columns||f.columns,s=Math.ceil(t/e);return{columns:12,min_columns:3,rows:Math.max(1,s),min_rows:1}}static async getConfigElement(){return await import("./pulse-switch-editor.js"),document.createElement(D)}static getStubConfig(t){let s=Object.keys(t.states).filter(o=>o.startsWith("sensor.")&&o.endsWith("_rx_speed")).slice(0,4).map(o=>({entity:o}));return s.length===0&&s.push({entity:"sensor.example_rx_speed"}),{type:`custom:${m}`,ports:s}}};customElements.get(m)||(customElements.define(m,O),console.info(`%c ${m.toUpperCase()} %c v${N} `,"background:#FFB300;color:#000;font-weight:bold","background:#333;color:#fff"));window.customCards=window.customCards||[];window.customCards.push({type:m,name:"Pulse Switch Card",description:"Network switch front panel with LED indicators",preview:!0});
