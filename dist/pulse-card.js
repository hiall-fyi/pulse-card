var wt=`
  :host {
    display: block;
  }

  ha-card {
    overflow: hidden;
    padding: 16px;
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
    font-size: 14px;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .bar-value {
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
    white-space: nowrap;
  }

  /* Bar container */
  .bar-container {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  /* Track (background) */
  .bar-track {
    position: absolute;
    inset: 0;
    background: var(--primary-color, #03A9F4);
    opacity: 0.12;
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
    z-index: 1;
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
  }
  .bar-indicator.up { color: var(--label-badge-green, #4CAF50); }
  .bar-indicator.down { color: var(--label-badge-red, #F44336); }
  .bar-indicator.neutral { color: var(--secondary-text-color); }

  /* Icon */
  .bar-icon {
    --mdc-icon-size: 18px;
    color: var(--secondary-text-color);
    flex-shrink: 0;
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
`;var xt="0.1.6",At="Pulse Card:",m={min:0,max:100,height:"8px",border_radius:"4px",decimal:null,entity_row:!1,complementary:!1,limit_value:!1,columns:1,animation:{state:"on",speed:.8,effect:"none"},positions:{icon:"off",name:"outside",value:"outside",indicator:"off"},tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}};function St(n,t,e){n.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:e}))}function Qt(n,t,e,i){if(!(!e||e.action==="none"))switch(e.action){case"more-info":St(n,"hass-more-info",{entityId:e.entity||i});break;case"navigate":history.pushState(null,"",e.navigation_path),St(n,"location-changed",{replace:!1});break;case"call-service":case"perform-action":{let s=e.service||e.perform_action;if(!s)break;let[o,r]=s.split(".");t.callService(o,r,e.service_data||e.data);break}case"url":e.url_path&&window.open(e.url_path,"_blank","noopener,noreferrer");break}}function te(n,t,e){let i=t?.[n],s=e?.[n];return i||s||{action:n==="tap_action"?"more-info":"none"}}function B(n,t,e,i,s){let o=te(s,i,e);Qt(n,t,o,i.entity)}function tt(n){let t=n.__pulseCleanup;typeof t=="function"&&t()}function Et(n,t,e,i,s){tt(n);let o=new AbortController,{signal:r}=o,l=0,a=null,c=null,h=!1;n.__pulseCleanup=()=>{o.abort(),a&&clearTimeout(a),c&&clearTimeout(c),delete n.__pulseCleanup},n.setAttribute("tabindex","0"),n.addEventListener("keydown",u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),e&&B(t,e,i,s,"tap_action"))},{signal:r}),n.addEventListener("click",u=>{if(u.preventDefault(),h){h=!1;return}l++,l===1?a=setTimeout(()=>{l=0,e&&B(t,e,i,s,"tap_action")},250):l===2&&(a&&clearTimeout(a),l=0,e&&B(t,e,i,s,"double_tap_action"))},{signal:r}),n.addEventListener("pointerdown",()=>{h=!1,c=setTimeout(()=>{h=!0,e&&B(t,e,i,s,"hold_action")},500)},{signal:r});let d=()=>{c&&clearTimeout(c)};n.addEventListener("pointerup",d,{signal:r}),n.addEventListener("pointercancel",d,{signal:r}),n.addEventListener("contextmenu",u=>u.preventDefault(),{signal:r})}var V=globalThis,j=V.ShadowRoot&&(V.ShadyCSS===void 0||V.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,et=Symbol(),Ct=new WeakMap,k=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==et)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(j&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=Ct.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Ct.set(e,t))}return t}toString(){return this.cssText}},Lt=n=>new k(typeof n=="string"?n:n+"",void 0,et),it=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((i,s,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1],n[0]);return new k(e,n,et)},Tt=(n,t)=>{if(j)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),s=V.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)}},st=j?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return Lt(e)})(n):n;var{is:ee,defineProperty:ie,getOwnPropertyDescriptor:se,getOwnPropertyNames:ne,getOwnPropertySymbols:oe,getPrototypeOf:re}=Object,W=globalThis,Pt=W.trustedTypes,ae=Pt?Pt.emptyScript:"",le=W.reactiveElementPolyfillSupport,H=(n,t)=>n,nt={toAttribute(n,t){switch(t){case Boolean:n=n?ae:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},Nt=(n,t)=>!ee(n,t),Mt={attribute:!0,type:String,converter:nt,reflect:!1,useDefault:!1,hasChanged:Nt};Symbol.metadata??=Symbol("metadata"),W.litPropertyMetadata??=new WeakMap;var y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Mt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&ie(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:o}=se(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:s,set(r){let l=s?.call(this);o?.call(this,r),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Mt}static _$Ei(){if(this.hasOwnProperty(H("elementProperties")))return;let t=re(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(H("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(H("properties"))){let e=this.properties,i=[...ne(e),...oe(e)];for(let s of i)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(st(s))}else t!==void 0&&e.push(st(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Tt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){let o=(i.converter?.toAttribute!==void 0?i.converter:nt).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){let i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let o=i.getPropertyOptions(s),r=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:nt;this._$Em=s;let l=r.fromAttribute(e,o.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(t,e,i,s=!1,o){if(t!==void 0){let r=this.constructor;if(s===!1&&(o=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??Nt)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),o!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,o]of i){let{wrapped:r}=o,l=this[s];r!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,o,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[H("elementProperties")]=new Map,y[H("finalized")]=new Map,le?.({ReactiveElement:y}),(W.reactiveElementVersions??=[]).push("2.1.2");var ht=globalThis,kt=n=>n,q=ht.trustedTypes,Ht=q?q.createPolicy("lit-html",{createHTML:n=>n}):void 0,Ft="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,zt="?"+$,ce=`<${zt}>`,E=document,U=()=>E.createComment(""),R=n=>n===null||typeof n!="object"&&typeof n!="function",ut=Array.isArray,de=n=>ut(n)||typeof n?.[Symbol.iterator]=="function",ot=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ot=/-->/g,Ut=/>/g,A=RegExp(`>|${ot}(?:([^\\s"'>=/]+)(${ot}*=${ot}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Rt=/'/g,It=/"/g,Bt=/^(?:script|style|textarea|title)$/i,pt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),K=pt(1),Me=pt(2),Ne=pt(3),C=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),Dt=new WeakMap,S=E.createTreeWalker(E,129);function Vt(n,t){if(!ut(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ht!==void 0?Ht.createHTML(t):t}var he=(n,t)=>{let e=n.length-1,i=[],s,o=t===2?"<svg>":t===3?"<math>":"",r=O;for(let l=0;l<e;l++){let a=n[l],c,h,d=-1,u=0;for(;u<a.length&&(r.lastIndex=u,h=r.exec(a),h!==null);)u=r.lastIndex,r===O?h[1]==="!--"?r=Ot:h[1]!==void 0?r=Ut:h[2]!==void 0?(Bt.test(h[2])&&(s=RegExp("</"+h[2],"g")),r=A):h[3]!==void 0&&(r=A):r===A?h[0]===">"?(r=s??O,d=-1):h[1]===void 0?d=-2:(d=r.lastIndex-h[2].length,c=h[1],r=h[3]===void 0?A:h[3]==='"'?It:Rt):r===It||r===Rt?r=A:r===Ot||r===Ut?r=O:(r=A,s=void 0);let p=r===A&&n[l+1].startsWith("/>")?" ":"";o+=r===O?a+ce:d>=0?(i.push(c),a.slice(0,d)+Ft+a.slice(d)+$+p):a+$+(d===-2?l:p)}return[Vt(n,o+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},I=class n{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0,l=t.length-1,a=this.parts,[c,h]=he(t,e);if(this.el=n.createElement(c,i),S.currentNode=this.el.content,e===2||e===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=S.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(let d of s.getAttributeNames())if(d.endsWith(Ft)){let u=h[r++],p=s.getAttribute(d).split($),_=/([.?@])?(.*)/.exec(u);a.push({type:1,index:o,name:_[2],strings:p,ctor:_[1]==="."?at:_[1]==="?"?lt:_[1]==="@"?ct:T}),s.removeAttribute(d)}else d.startsWith($)&&(a.push({type:6,index:o}),s.removeAttribute(d));if(Bt.test(s.tagName)){let d=s.textContent.split($),u=d.length-1;if(u>0){s.textContent=q?q.emptyScript:"";for(let p=0;p<u;p++)s.append(d[p],U()),S.nextNode(),a.push({type:2,index:++o});s.append(d[u],U())}}}else if(s.nodeType===8)if(s.data===zt)a.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf($,d+1))!==-1;)a.push({type:7,index:o}),d+=$.length-1}o++}}static createElement(t,e){let i=E.createElement("template");return i.innerHTML=t,i}};function L(n,t,e=n,i){if(t===C)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl,o=R(t)?void 0:t._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(n),s._$AT(n,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=L(n,s._$AS(n,t.values),s,i)),t}var rt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??E).importNode(e,!0);S.currentNode=s;let o=S.nextNode(),r=0,l=0,a=i[0];for(;a!==void 0;){if(r===a.index){let c;a.type===2?c=new D(o,o.nextSibling,this,t):a.type===1?c=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(c=new dt(o,this,t)),this._$AV.push(c),a=i[++l]}r!==a?.index&&(o=S.nextNode(),r++)}return S.currentNode=E,s}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},D=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=L(this,t,e),R(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==C&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):de(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==f&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(E.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=I.createElement(Vt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{let o=new rt(s,this),r=o.u(this.options);o.p(e),this.T(r),this._$AH=o}}_$AC(t){let e=Dt.get(t.strings);return e===void 0&&Dt.set(t.strings,e=new I(t)),e}k(t){ut(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let o of t)s===e.length?e.push(i=new n(this.O(U()),this.O(U()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=kt(t).nextSibling;kt(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},T=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=f}_$AI(t,e=this,i,s){let o=this.strings,r=!1;if(o===void 0)t=L(this,t,e,0),r=!R(t)||t!==this._$AH&&t!==C,r&&(this._$AH=t);else{let l=t,a,c;for(t=o[0],a=0;a<o.length-1;a++)c=L(this,l[i+a],e,a),c===C&&(c=this._$AH[a]),r||=!R(c)||c!==this._$AH[a],c===f?t=f:t!==f&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}r&&!s&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},at=class extends T{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}},lt=class extends T{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}},ct=class extends T{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=L(this,t,e,0)??f)===C)return;let i=this._$AH,s=t===f&&i!==f||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==f&&(i===f||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},dt=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}};var ue=ht.litHtmlPolyfillSupport;ue?.(I,D),(ht.litHtmlVersions??=[]).push("3.3.2");var jt=(n,t,e)=>{let i=e?.renderBefore??t,s=i._$litPart$;if(s===void 0){let o=e?.renderBefore??null;i._$litPart$=s=new D(t.insertBefore(U(),o),o,void 0,e??{})}return s._$AI(n),s};var ft=globalThis,w=class extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=jt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return C}};w._$litElement$=!0,w.finalized=!0,ft.litElementHydrateSupport?.({LitElement:w});var pe=ft.litElementPolyfillSupport;pe?.({LitElement:w});(ft.litElementVersions??=[]).push("4.2.2");var G=[{value:"outside",label:"Outside"},{value:"inside",label:"Inside"},{value:"off",label:"Off"}],fe=[{name:"title",label:"Title",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"height",label:"Height",selector:{text:{}}},{name:"border_radius",label:"Border Radius",selector:{text:{}}}]},{name:"",type:"grid",schema:[{name:"color",label:"Color",selector:{text:{}}},{name:"decimal",label:"Decimals",selector:{number:{min:0,max:6,mode:"box"}}}]}],me=[{name:"",type:"grid",schema:[{name:"columns",label:"Columns",selector:{number:{min:1,max:6,mode:"box"}}},{name:"gap",label:"Gap",selector:{text:{}}}]},{name:"",type:"grid",schema:[{name:"min",label:"Min",selector:{number:{mode:"box"}}},{name:"max",label:"Max",selector:{number:{mode:"box"}}}]},{name:"",type:"grid",schema:[{name:"target_value",label:"Target",selector:{text:{}}},{name:"bar_width",label:"Bar Width (%)",selector:{number:{min:1,max:100,mode:"box"}}}]}],_e=[{name:"",type:"grid",schema:[{name:"pos_name",label:"Name",selector:{select:{options:G,mode:"dropdown"}}},{name:"pos_value",label:"Value",selector:{select:{options:G,mode:"dropdown"}}}]},{name:"",type:"grid",schema:[{name:"pos_icon",label:"Icon",selector:{select:{options:G,mode:"dropdown"}}},{name:"pos_indicator",label:"Indicator",selector:{select:{options:G,mode:"dropdown"}}}]},{name:"",type:"grid",schema:[{name:"indicator_period",label:"Lookback (min)",selector:{number:{min:1,max:1440,mode:"box"}}},{name:"show_delta",label:"Show Change Amount",selector:{boolean:{}}}]},{name:"",type:"grid",schema:[{name:"anim_effect",label:"Effect",selector:{select:{options:[{value:"none",label:"None"},{value:"charge",label:"Charge"}],mode:"dropdown"}}},{name:"anim_speed",label:"Speed (s)",selector:{number:{min:0,max:5,step:.1,mode:"box"}}}]}],mt=class extends w{_helpersLoaded=!1;static get properties(){return{hass:{attribute:!1},_config:{state:!0}}}async connectedCallback(){if(super.connectedCallback(),!this._helpersLoaded&&window.loadCardHelpers)try{let t=await window.loadCardHelpers();this._helpersLoaded=!0,(await t.createCardElement({type:"entities",entities:[]})).constructor.getConfigElement()}catch(t){console.warn("Pulse Card: failed to load card helpers:",t)}}setConfig(t){this._config=t}_getEntities(){let t=this._config;return t.entities?t.entities.map(e=>typeof e=="string"?{entity:e}:{...e}):t.entity?[{entity:t.entity}]:[]}_fireConfigChanged(t){this._config=t;let e=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}_entityChanged(t,e){let i=e.detail.value,s=this._getEntities();i===""||i===void 0?s.splice(t,1):s[t]={...s[t],entity:i},this._updateEntities(s)}_entityFieldChanged(t,e,i){let s=i.target.value??"",o=this._getEntities();s===""||s===void 0?delete o[t][e]:o[t]={...o[t],[e]:s},this._updateEntities(o)}_removeEntity(t){let e=this._getEntities();e.splice(t,1),this._updateEntities(e)}_moveEntity(t,e){let i=this._getEntities(),s=t+e;s<0||s>=i.length||([i[t],i[s]]=[i[s],i[t]],this._updateEntities(i))}_addEntity(t){let e=t.detail.value;if(!e)return;let i=this._getEntities();i.push({entity:e}),t.target.value="",this._updateEntities(i)}_updateEntities(t){let e={...this._config},i=this._config;t.length<=1&&!i.entities?(e.entity=t[0]?.entity||"",delete e.entities):(e.entities=t,delete e.entity),this._fireConfigChanged(e)}_settingsChanged(t){t.stopPropagation();let e=t.detail.value,i={...this._config},s=["title","height","border_radius","color","columns","gap","min","max","decimal","bar_width"];for(let l of s){let a=e[l];a==null||a===""?delete i[l]:i[l]=a}let o=["complementary","limit_value","entity_row"];for(let l of o)e[l]===!0?i[l]=!0:e[l]===!1&&delete i[l];this._applyTarget(i,e.target_value);let r=[["positions",{pos_name:"name",pos_value:"value",pos_icon:"icon",pos_indicator:"indicator"}],["animation",{anim_effect:"effect",anim_speed:"speed"},(l,a)=>l==="effect"&&a==="none"?void 0:a],["indicator",{pos_indicator:"show",indicator_period:"period",show_delta:"show_delta"},(l,a)=>l==="show"?a&&a!=="off"?!0:void 0:l==="show_delta"?a===!0?!0:void 0:a]];for(let[l,a,c]of r){let h={...i[l]||{}};for(let[d,u]of Object.entries(a)){let p=e[d];c&&(p=c(u,p)),p==null||p===""?delete h[u]:h[u]=p}Object.keys(h).length>0?i[l]=h:delete i[l]}this._fireConfigChanged(i)}_applyTarget(t,e){if(e==null||e===""){delete t.target;return}let i=parseFloat(e),s=isNaN(i)?e:i,o=this._config?.target;typeof o=="object"&&o!==null?t.target={...o,value:s}:t.target=s}_computeLabel(t){return t.label||t.name||""}render(){let t=this.hass;if(!t||!this._config)return f;let e=this._getEntities(),i=this._config.target,s="";i!=null&&(typeof i=="object"&&i.value!==void 0?s=String(i.value):s=String(i));let o={title:this._config.title||"",height:this._config.height||"",border_radius:this._config.border_radius||"",color:this._config.color||"",decimal:this._config.decimal??"",columns:this._config.columns||m.columns,gap:this._config.gap||"",target_value:s,bar_width:this._config.bar_width??"",min:this._config.min??"",max:this._config.max??"",pos_name:this._config.positions?.name??m.positions.name,pos_value:this._config.positions?.value??m.positions.value,pos_icon:this._config.positions?.icon??m.positions.icon,pos_indicator:this._config.positions?.indicator??m.positions.indicator,indicator_period:this._config.indicator?.period??"",show_delta:this._config.indicator?.show_delta||!1,anim_effect:this._config.animation?.effect??m.animation.effect,anim_speed:this._config.animation?.speed??""};return K`
      <div class="editor">
        <h3>Entities</h3>
        <div class="entities">
          ${e.map((r,l)=>K`
              <div class="entity-row">
                <div class="entity-row-main">
                  <ha-entity-picker
                    .hass=${t}
                    .value=${r.entity}
                    .index=${l}
                    allow-custom-entity
                    @value-changed=${a=>this._entityChanged(l,a)}
                  ></ha-entity-picker>
                  ${e.length>1?K`
                    <ha-icon-button
                      .label=${"Move up"}
                      .path=${"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"}
                      class="move-icon"
                      .disabled=${l===0}
                      @click=${()=>this._moveEntity(l,-1)}
                    ></ha-icon-button>
                    <ha-icon-button
                      .label=${"Move down"}
                      .path=${"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"}
                      class="move-icon"
                      .disabled=${l===e.length-1}
                      @click=${()=>this._moveEntity(l,1)}
                    ></ha-icon-button>
                  `:f}
                  <ha-icon-button
                    .label=${"Remove"}
                    .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}
                    class="remove-icon"
                    @click=${()=>this._removeEntity(l)}
                  ></ha-icon-button>
                </div>
                <div class="entity-row-fields">
                  <ha-textfield
                    .label=${"Name"}
                    .value=${r.name||""}
                    @input=${a=>this._entityFieldChanged(l,"name",a)}
                  ></ha-textfield>
                  <ha-textfield
                    .label=${"Color"}
                    .value=${r.color||""}
                    @input=${a=>this._entityFieldChanged(l,"color",a)}
                  ></ha-textfield>
                </div>
              </div>
            `)}
        </div>
        <ha-entity-picker
          class="add-entity"
          .hass=${t}
          @value-changed=${this._addEntity}
        ></ha-entity-picker>
        <h3>Card Settings</h3>
        <ha-form
          .hass=${t}
          .data=${o}
          .schema=${fe}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._settingsChanged}
        ></ha-form>
        <h3>Layout</h3>
        <ha-form
          .hass=${t}
          .data=${o}
          .schema=${me}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._settingsChanged}
        ></ha-form>
        <h3>Display</h3>
        <ha-form
          .hass=${t}
          .data=${o}
          .schema=${_e}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._settingsChanged}
        ></ha-form>
      </div>
    `}static get styles(){return it`
      .editor {
        display: flex;
        flex-direction: column;
      }
      h3 {
        font-size: 14px;
        font-weight: 500;
        margin: 12px 0 8px;
        color: var(--primary-text-color);
      }
      h3:first-child {
        margin-top: 0;
      }
      .entities {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .entity-row {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 8px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 8px;
      }
      .entity-row-main {
        display: flex;
        align-items: center;
      }
      .entity-row-main ha-entity-picker {
        flex: 1;
        min-width: 0;
      }
      .entity-row-fields {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
      }
      .remove-icon {
        color: var(--secondary-text-color);
        --mdc-icon-button-size: 36px;
      }
      .move-icon {
        color: var(--secondary-text-color);
        --mdc-icon-button-size: 36px;
      }
      .move-icon[disabled] {
        opacity: 0.3;
        pointer-events: none;
      }
      .add-entity {
        display: block;
        margin-top: 8px;
      }
    `}};customElements.get("pulse-card-editor")||customElements.define("pulse-card-editor",mt);function P(n,t,e){return Math.min(Math.max(n,t),e)}function ge(n,t,e,i=!1){let s=parseFloat(n);if(isNaN(s))return 0;let o=e-t;if(o<=0)return 0;let r=i?e-s:s;return P((r-t)/o,0,1)*100}function be(n,t){if(!t||t.length===0)return null;let e=parseFloat(n);if(isNaN(e))return null;for(let i of t)if(e>=i.from&&e<=i.to)return i;return null}function Wt(n){let t=n.replace("#","");return t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:parseInt(t.substring(0,2),16),g:parseInt(t.substring(2,4),16),b:parseInt(t.substring(4,6),16)}}function ye(n,t,e){let i=Wt(n),s=Wt(t),o=Math.round(i.r+(s.r-i.r)*e),r=Math.round(i.g+(s.g-i.g)*e),l=Math.round(i.b+(s.b-i.b)*e);return`rgb(${o}, ${r}, ${l})`}function ve(n,t){if(!t||t.length<2)return null;let e=parseFloat(n);if(isNaN(e))return null;let i=t[0].from<=t[t.length-1].from?t:[...t].sort((s,o)=>s.from-o.from);for(let s=0;s<i.length-1;s++){let o=i[s],r=i[s+1];if(e>=o.from&&e<=r.to){let l=r.from-o.from,a=l>0?(e-o.from)/l:0;return ye(o.color,r.color,P(a,0,1))}}return e<=i[0].from?i[0].color:i[i.length-1].color}function $e(n,t){let e=n.min,i=n.max;return e==null&&(e=t?.attributes?.min??m.min),i==null&&(i=t?.attributes?.max??m.max),{min:parseFloat(String(e)),max:parseFloat(String(i))}}function we(n,t,e){let i=parseFloat(n);if(isNaN(i))return String(n);let s=t!=null?i.toFixed(t):i.toString();return e?`${s}${e}`:s}function qt(n,t){if(t==null)return{direction:"neutral",delta:0};let e=parseFloat(n),i=parseFloat(t);if(isNaN(e)||isNaN(i))return{direction:"neutral",delta:0};let s=Math.round((e-i)*100)/100;return{direction:s>0?"up":s<0?"down":"neutral",delta:s}}function gt(n,t,e){let i=n==="up"?"\u25B2":n==="down"?"\u25BC":"\u25B6",s=e?` ${t>0?"+":""}${t}`:"";return{arrow:i,text:`${i}${s}`}}function F(n){return n==null||n===""?"":String(n).replace(/[;{}]/g,"").replace(/url\s*\(/gi,"")}function bt(n,...t){console.warn(`${At} ${n}`,...t)}async function Kt(n,t,e=60){let i={};if(!n?.callWS||t.length===0)return i;let s=new Date,o=new Date(s.getTime()-e*60*1e3);try{let r=await n.callWS({type:"history/history_during_period",start_time:o.toISOString(),end_time:s.toISOString(),entity_ids:t,minimal_response:!0,significant_changes_only:!0});for(let l of t){let a=r?.[l];if(!a||a.length===0){i[l]=null;continue}let c=parseFloat(a[0].s);i[l]=isNaN(c)?null:c}}catch(r){bt("Failed to fetch history for %s: %O",t.join(", "),r);for(let l of t)i[l]=null}return i}function Y(n){if(n==null||n==="")return"";let t=String(n);return/^\d+(\.\d+)?$/.test(t)?`${t}px`:t}function g(n){return String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function _t(n){return!Array.isArray(n)||n.length<2?n:[...n].sort((t,e)=>t.from-e.from)}function Gt(n){if(!n)throw new Error("Please define an entity or entities");if(!n.entity&&!n.entities)throw new Error("Please define an entity or entities");let t={...m,...n,animation:{...m.animation,...n.animation},positions:{...m.positions,...n.positions}};return t.severity&&(t.severity=_t(t.severity)),t.entities=n.entities?n.entities.map(e=>{let i=typeof e=="string"?{entity:e}:{...e};return i.severity&&(i.severity=_t(i.severity)),i}):[{entity:n.entity,...n}],t.entities.length===1&&t.entities[0].severity&&(t.entities[0].severity=_t(t.entities[0].severity)),t}function Z(n,t){if(n==null)return{value:null,showLabel:!1};if(typeof n=="number")return{value:isNaN(n)?null:n,showLabel:!1};if(typeof n=="string"){let e=t?.states[n];if(!e)return{value:null,showLabel:!1};let i=parseFloat(e.state);return{value:isNaN(i)?null:i,showLabel:!1}}return typeof n=="object"&&n.value!==void 0?{value:Z(n.value,t).value,showLabel:n.show_label===!0}:{value:null,showLabel:!1}}function yt(n,t,e){let i=e?.states[n.entity],s=!i||i.state==="unavailable"||i.state==="unknown",{min:o,max:r}=$e(n,i),l=n.attribute?i?.attributes?.[n.attribute]:i?.state,a=parseFloat(l),c=n.complementary??t.complementary,h=s?0:ge(l,o,r,c),d=n.unit_of_measurement??i?.attributes?.unit_of_measurement??"",u=n.decimal??t.decimal??null,_=(n.limit_value??t.limit_value)&&!isNaN(a)?P(a,o,r):l,x=s?"Unavailable":we(_,u,d),M=n.name??i?.attributes?.friendly_name??n.entity,N="",z="";if(!s){let v=n.severity??t.severity;if(v&&v.length>0)if(v.some(b=>b.mode==="gradient")){let b=ve(a,v);b&&(N=b)}else{let b=be(a,v);b&&(N=b.color,b.icon&&(z=b.icon))}}let J=N||n.color||t.color||"",Q=n.icon||i?.attributes?.icon||"";return{isUnavailable:s,min:o,max:r,numValue:a,fill:h,displayValue:x,name:M,color:J,resolvedIcon:z||Q}}var X=class extends HTMLElement{_config=null;_hass=null;_prevStates={};_elements={};_indicators={};_indicatorTimer=null;_shadow;constructor(){super(),this._shadow=this.attachShadow({mode:"open"});let t=document.createElement("style");t.textContent=wt,this._shadow.appendChild(t)}get _cfg(){return this._config}disconnectedCallback(){this._indicatorTimer&&(clearTimeout(this._indicatorTimer),this._indicatorTimer=null);let t=this._shadow.querySelectorAll(".bar-row");for(let e of t)tt(e)}setConfig(t){this._config=Gt(t),this._elements={},this._hass&&this._fullRender()}set hass(t){if(this._hass=t,!this._config)return;let e=!1;for(let i of this._cfg.entities){let s=t.states[i.entity],o=this._prevStates[i.entity];if(!o||o.state!==s?.state||o.last_updated!==s?.last_updated){e=!0;break}let r=i.target??this._cfg.target;if(typeof r=="string"){let l=t.states[r],a=this._prevStates[`__target__${r}`];if(!a||a.state!==l?.state||a.last_updated!==l?.last_updated){e=!0;break}}}e&&(this._elements.container?this._updateBars():this._fullRender(),this._cacheStates(),this._scheduleIndicatorFetch())}_fullRender(){let t=this._cfg;if(!t)return;let e=t.columns??1,i=e>1?` columns-${e}`:"",s=t.entity_row?" entity-row":"",o=t.gap,r="";if(e>1||o!==void 0){let u=[];e>1&&u.push(`--pulse-columns:${e}`),o!==void 0&&u.push(`--pulse-gap:${F(Y(o))}`),r=` style="${u.join(";")}"`}let l=r,a="";t.title&&(a+=`<div class="pulse-title">${g(t.title)}</div>`),a+=`<div class="pulse-card${i}${s}"${l}>`;for(let u of t.entities)a+=this._renderBarRow(u);a+="</div>";let c=t.entity_row?a:`<ha-card>${a}</ha-card>`,h=this._shadow.querySelector("ha-card, .pulse-card");h&&h.remove();let d=document.createElement("template");d.innerHTML=c,this._shadow.appendChild(d.content.cloneNode(!0)),this._elements.container=this._shadow.querySelector(".pulse-card"),this._cacheBarElements()}_renderBarRow(t){let e=this._cfg,i=yt(t,e,this._hass),s=t.positions?.name??e.positions?.name??m.positions.name,o=t.positions?.value??e.positions?.value??m.positions.value,r=t.positions?.icon??e.positions?.icon??m.positions.icon,l=t.positions?.indicator??e.positions?.indicator??m.positions.indicator,c=(t.indicator??e.indicator)?.show===!0&&l==="off"?"outside":l,h=t.animation??{},d=h.speed??e.animation.speed,u=h.effect??e.animation.effect,p=h.state??e.animation.state,_=this._buildIndicatorHtml(t,e,c),x=this._buildPositionHtml(i,s,o,r,c,_,"outside"),M=this._buildPositionHtml(i,s,o,r,c,_,"inside"),N=F(Y(t.height??e.height)),z=F(Y(t.border_radius??e.border_radius)),J=i.color?`background-color:${F(i.color)};`:"",Q=u==="charge"&&!i.isUnavailable?" charge":"",vt=p==="off"?"transition:none;":"",v=t.bar_width??e.bar_width,$t=v!=null?Math.max(1,Math.min(100,v))/100:1,Yt=`width:${i.fill*$t}%;${vt}${J}`,Zt=this._buildTargetHtml(t,e,i.min,i.max),Xt=`
      <div class="bar-container" style="height:${N};border-radius:${z};--pulse-animation-speed:${d}s;">
        <div class="bar-track"></div>
        <div class="bar-fill${Q}" data-entity="${g(t.entity)}" style="${Yt}"></div>
        ${Zt}
        ${M}
      </div>`,Jt=i.isUnavailable?`role="progressbar" aria-valuenow="0" aria-valuemin="${i.min}" aria-valuemax="${i.max}" aria-label="${g(i.name)}: Unavailable"`:`role="progressbar" aria-valuenow="${i.numValue}" aria-valuemin="${i.min}" aria-valuemax="${i.max}" aria-label="${g(i.name)}: ${g(i.displayValue)}"`;return`<div class="bar-row${i.isUnavailable?" unavailable":""}" data-entity="${g(t.entity)}" ${Jt}>${x}${Xt}</div>`}_buildIndicatorHtml(t,e,i){let s=t.indicator??e.indicator;if(!(s?.show===!0&&i!=="off"))return"";let r=this._indicators[t.entity],l=r?.direction??"neutral",a=s?.show_delta===!0&&!!r,{text:c}=gt(l,r?.delta??0,a);return`<span class="bar-indicator ${l}">${c}</span>`}_buildPositionHtml(t,e,i,s,o,r,l){if(e!==l&&i!==l&&s!==l&&o!==l)return"";let c=`<div class="${l==="outside"?"bar-labels":"bar-content"}"><div class="bar-label-left">`;return s===l&&t.resolvedIcon&&(c+=`<ha-icon class="bar-icon" icon="${g(t.resolvedIcon)}"></ha-icon>`),e===l&&(c+=`<span class="bar-name">${g(t.name)}</span>`),c+='</div><div class="bar-label-right">',i===l&&(c+=`<span class="bar-value">${g(t.displayValue)}</span>`),o===l&&r&&(c+=r),c+="</div></div>",c}_buildTargetHtml(t,e,i,s){let o=t.target??e.target,{value:r,showLabel:l}=Z(o,this._hass);if(r===null)return"";let a=P((r-i)/(s-i),0,1)*100,c=t.bar_width??e.bar_width,h=c!=null?Math.max(1,Math.min(100,c))/100:1,d=`left:${a*h}%`,u=l?`<span class="bar-target-label">${g(r)}</span>`:"";return`<div class="bar-target${l?" show-label":""}" style="${d}">${u}</div>`}_updateBars(){let t=this._cfg;for(let e of t.entities){let i=yt(e,t,this._hass),s=this._elements.rows?.[e.entity];if(!s)continue;s.classList.toggle("unavailable",i.isUnavailable);let o=s.querySelector(".bar-fill");if(o){let d=e.bar_width??t.bar_width,u=d!=null?Math.max(1,Math.min(100,d))/100:1;o.style.width=`${i.fill*u}%`,o.style.backgroundColor=i.color||"";let p=s.querySelector(".bar-icon");p&&i.resolvedIcon&&p.setAttribute("icon",i.resolvedIcon)}let r=s.querySelectorAll(".bar-name");for(let d of r)d.textContent=i.name;let l=s.querySelectorAll(".bar-value");for(let d of l)d.textContent=i.displayValue;s.setAttribute("aria-valuenow",i.isUnavailable?"0":String(i.numValue)),s.setAttribute("aria-valuemin",String(i.min)),s.setAttribute("aria-valuemax",String(i.max)),s.setAttribute("aria-label",`${g(i.name)}: ${g(i.displayValue)}`);let a=s.querySelector(".bar-target"),c=e.target??t.target,{value:h}=Z(c,this._hass);if(h!==null){let d=P((h-i.min)/(i.max-i.min),0,1)*100,u=e.bar_width??t.bar_width,p=u!=null?Math.max(1,Math.min(100,u))/100:1;if(a){a.style.left=`${d*p}%`,a.style.display="";let _=a.querySelector(".bar-target-label");_&&(_.textContent=String(h))}}else a&&(a.style.display="none")}}_scheduleIndicatorFetch(){let t=this._cfg;!t||!t.entities.some(i=>(i.indicator??t.indicator)?.show===!0)||(this._indicatorTimer&&clearTimeout(this._indicatorTimer),this._indicatorTimer=setTimeout(()=>this._fetchIndicators(),500))}async _fetchIndicators(){let t=this._cfg;if(t)try{let e=new Map;for(let s of t.entities)e.set(s.entity,s);let i=new Map;for(let s of t.entities){let o=s.indicator??t.indicator;if(!o?.show)continue;let r=o.period??60;i.has(r)||i.set(r,[]),i.get(r).push({entity:s.entity,icfg:o})}for(let[s,o]of i){let r=o.map(a=>a.entity),l=await Kt(this._hass,r,s);for(let{entity:a,icfg:c}of o){let h=e.get(a),d=this._hass?.states[a],u=h?.attribute?d?.attributes?.[h.attribute]:d?.state,p=qt(u,l[a]);this._indicators[a]=p;let _=this._elements.rows?.[a];if(!_)continue;let x=_.querySelector(".bar-indicator");if(x){let{text:M}=gt(p.direction,p.delta,c.show_delta===!0);x.textContent=M,x.className=`bar-indicator ${p.direction}`}}}}catch(e){bt("Indicator fetch failed: %O",e)}}_cacheStates(){let t=this._cfg;this._prevStates={};for(let e of t.entities){let i=this._hass?.states[e.entity];i&&(this._prevStates[e.entity]={state:i.state,last_updated:i.last_updated});let s=e.target??t.target;if(typeof s=="string"){let o=this._hass?.states[s];o&&(this._prevStates[`__target__${s}`]={state:o.state,last_updated:o.last_updated})}}}_cacheBarElements(){let t=this._cfg;this._elements.rows={};let e=new Map;for(let s of t.entities)e.set(s.entity,s);let i=this._shadow.querySelectorAll(".bar-row");for(let s of i){let o=s.dataset.entity;if(o){this._elements.rows[o]=s;let r=e.get(o);r&&Et(s,this,this._hass,t,r)}}}getCardSize(){let t=this._config?.entities?.length||1,e=this._config?.columns||1;return Math.ceil(t/e)+(this._config?.title?1:0)}getGridOptions(){let t=this._config?.entities?.length||1,e=this._config?.columns||1,i=Math.ceil(t/e);return{columns:12,min_columns:3,rows:Math.max(1,i),min_rows:1}}static getConfigElement(){return document.createElement("pulse-card-editor")}static getStubConfig(t){return{entity:Object.keys(t.states).filter(i=>{let s=t.states[i];return i.startsWith("sensor.")&&!isNaN(parseFloat(s.state))})[0]||"sensor.example"}}};customElements.get("pulse-card")||customElements.define("pulse-card",X);window.customCards=window.customCards||[];window.customCards.push({type:"pulse-card",name:"Pulse Card",description:"Compact horizontal bar chart for sensor data visualization",preview:!0,documentationURL:"https://github.com/hiall-fyi/pulse-card"});console.info(`%c PULSE-CARD %c v${xt} `,"background:#03A9F4;color:white;font-weight:bold","background:#333;color:white");var ei=X;export{ei as default};
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
