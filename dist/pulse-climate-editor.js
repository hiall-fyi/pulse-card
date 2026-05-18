var U=globalThis,H=U.ShadowRoot&&(U.ShadyCSS===void 0||U.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,z=Symbol(),ee=new WeakMap,E=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(H&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=ee.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ee.set(t,e))}return e}toString(){return this.cssText}},te=o=>new E(typeof o=="string"?o:o+"",void 0,z),x=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((i,s,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[n+1],o[0]);return new E(t,o,z)},ie=(o,e)=>{if(H)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let i=document.createElement("style"),s=U.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,o.appendChild(i)}},I=H?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return te(t)})(o):o;var{is:ve,defineProperty:Ae,getOwnPropertyDescriptor:we,getOwnPropertyNames:Se,getOwnPropertySymbols:Ce,getPrototypeOf:Ee}=Object,M=globalThis,se=M.trustedTypes,xe=se?se.emptyScript:"",Pe=M.reactiveElementPolyfillSupport,P=(o,e)=>o,V={toAttribute(o,e){switch(e){case Boolean:o=o?xe:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},re=(o,e)=>!ve(o,e),oe={attribute:!0,type:String,converter:V,reflect:!1,useDefault:!1,hasChanged:re};Symbol.metadata??=Symbol("metadata"),M.litPropertyMetadata??=new WeakMap;var m=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=oe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Ae(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){let{get:s,set:n}=we(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:s,set(r){let l=s?.call(this);n?.call(this,r),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??oe}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;let e=Ee(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){let t=this.properties,i=[...Se(t),...Ce(t)];for(let s of i)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[t,i]of this.elementProperties){let s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let s of i)t.unshift(I(s))}else e!==void 0&&t.push(I(e));return t}static _$Eu(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ie(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){let n=(i.converter?.toAttribute!==void 0?i.converter:V).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){let i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let n=i.getPropertyOptions(s),r=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:V;this._$Em=s;let l=r.fromAttribute(t,n.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(e,t,i,s=!1,n){if(e!==void 0){let r=this.constructor;if(s===!1&&(n=this[e]),i??=r.getPropertyOptions(e),!((i.hasChanged??re)(n,t)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:n},r){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),n!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,n]of i){let{wrapped:r}=n,l=this[s];r!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,n,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};m.elementStyles=[],m.shadowRootOptions={mode:"open"},m[P("elementProperties")]=new Map,m[P("finalized")]=new Map,Pe?.({ReactiveElement:m}),(M.reactiveElementVersions??=[]).push("2.1.2");var K=globalThis,ne=o=>o,D=K.trustedTypes,ae=D?D.createPolicy("lit-html",{createHTML:o=>o}):void 0,ue="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,_e="?"+g,Le=`<${_e}>`,v=document,O=()=>v.createComment(""),k=o=>o===null||typeof o!="object"&&typeof o!="function",G=Array.isArray,Oe=o=>G(o)||typeof o?.[Symbol.iterator]=="function",B=`[ 	
\f\r]`,L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,le=/-->/g,he=/>/g,b=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ce=/'/g,de=/"/g,me=/^(?:script|style|textarea|title)$/i,Y=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),u=Y(1),Ze=Y(2),je=Y(3),A=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),pe=new WeakMap,y=v.createTreeWalker(v,129);function fe(o,e){if(!G(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ae!==void 0?ae.createHTML(e):e}var ke=(o,e)=>{let t=o.length-1,i=[],s,n=e===2?"<svg>":e===3?"<math>":"",r=L;for(let l=0;l<t;l++){let a=o[l],d,p,c=-1,_=0;for(;_<a.length&&(r.lastIndex=_,p=r.exec(a),p!==null);)_=r.lastIndex,r===L?p[1]==="!--"?r=le:p[1]!==void 0?r=he:p[2]!==void 0?(me.test(p[2])&&(s=RegExp("</"+p[2],"g")),r=b):p[3]!==void 0&&(r=b):r===b?p[0]===">"?(r=s??L,c=-1):p[1]===void 0?c=-2:(c=r.lastIndex-p[2].length,d=p[1],r=p[3]===void 0?b:p[3]==='"'?de:ce):r===de||r===ce?r=b:r===le||r===he?r=L:(r=b,s=void 0);let f=r===b&&o[l+1].startsWith("/>")?" ":"";n+=r===L?a+Le:c>=0?(i.push(d),a.slice(0,c)+ue+a.slice(c)+g+f):a+g+(c===-2?l:f)}return[fe(o,n+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},T=class o{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,r=0,l=e.length-1,a=this.parts,[d,p]=ke(e,t);if(this.el=o.createElement(d,i),y.currentNode=this.el.content,t===2||t===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=y.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(let c of s.getAttributeNames())if(c.endsWith(ue)){let _=p[r++],f=s.getAttribute(c).split(g),N=/([.?@])?(.*)/.exec(_);a.push({type:1,index:n,name:N[2],strings:f,ctor:N[1]==="."?Z:N[1]==="?"?j:N[1]==="@"?q:S}),s.removeAttribute(c)}else c.startsWith(g)&&(a.push({type:6,index:n}),s.removeAttribute(c));if(me.test(s.tagName)){let c=s.textContent.split(g),_=c.length-1;if(_>0){s.textContent=D?D.emptyScript:"";for(let f=0;f<_;f++)s.append(c[f],O()),y.nextNode(),a.push({type:2,index:++n});s.append(c[_],O())}}}else if(s.nodeType===8)if(s.data===_e)a.push({type:2,index:n});else{let c=-1;for(;(c=s.data.indexOf(g,c+1))!==-1;)a.push({type:7,index:n}),c+=g.length-1}n++}}static createElement(e,t){let i=v.createElement("template");return i.innerHTML=e,i}};function w(o,e,t=o,i){if(e===A)return e;let s=i!==void 0?t._$Co?.[i]:t._$Cl,n=k(e)?void 0:e._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(o),s._$AT(o,t,i)),i!==void 0?(t._$Co??=[])[i]=s:t._$Cl=s),s!==void 0&&(e=w(o,s._$AS(o,e.values),s,i)),e}var F=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??v).importNode(t,!0);y.currentNode=s;let n=y.nextNode(),r=0,l=0,a=i[0];for(;a!==void 0;){if(r===a.index){let d;a.type===2?d=new R(n,n.nextSibling,this,e):a.type===1?d=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(d=new W(n,this,e)),this._$AV.push(d),a=i[++l]}r!==a?.index&&(n=y.nextNode(),r++)}return y.currentNode=v,s}p(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},R=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=w(this,e,t),k(e)?e===h||e==null||e===""?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==A&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Oe(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&k(this._$AH)?this._$AA.nextSibling.data=e:this.T(v.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=T.createElement(fe(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{let n=new F(s,this),r=n.u(this.options);n.p(t),this.T(r),this._$AH=n}}_$AC(e){let t=pe.get(e.strings);return t===void 0&&pe.set(e.strings,t=new T(e)),t}k(e){G(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,s=0;for(let n of e)s===t.length?t.push(i=new o(this.O(O()),this.O(O()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let i=ne(e).nextSibling;ne(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},S=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=h}_$AI(e,t=this,i,s){let n=this.strings,r=!1;if(n===void 0)e=w(this,e,t,0),r=!k(e)||e!==this._$AH&&e!==A,r&&(this._$AH=e);else{let l=e,a,d;for(e=n[0],a=0;a<n.length-1;a++)d=w(this,l[i+a],t,a),d===A&&(d=this._$AH[a]),r||=!k(d)||d!==this._$AH[a],d===h?e=h:e!==h&&(e+=(d??"")+n[a+1]),this._$AH[a]=d}r&&!s&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Z=class extends S{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}},j=class extends S{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}},q=class extends S{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=w(this,e,t,0)??h)===A)return;let i=this._$AH,s=e===h&&i!==h||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==h&&(i===h||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},W=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){w(this,e)}};var Te=K.litHtmlPolyfillSupport;Te?.(T,R),(K.litHtmlVersions??=[]).push("3.3.2");var ge=(o,e,t)=>{let i=t?.renderBefore??e,s=i._$litPart$;if(s===void 0){let n=t?.renderBefore??null;i._$litPart$=s=new R(e.insertBefore(O(),n),n,void 0,t??{})}return s._$AI(o),s};var J=globalThis,$=class extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ge(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return A}};$._$litElement$=!0,$.finalized=!0,J.litElementHydrateSupport?.({LitElement:$});var Re=J.litElementPolyfillSupport;Re?.({LitElement:$});(J.litElementVersions??=[]).push("4.2.2");var X="pulse-climate-card-editor";var $e=x`
  .pulse-move-icon {
    color: var(--secondary-text-color);
    --mdc-icon-button-size: 36px;
  }
  .pulse-remove-icon {
    color: var(--secondary-text-color);
    --mdc-icon-button-size: 36px;
  }
  .pulse-move-icon[disabled] {
    opacity: 0.3;
    pointer-events: none;
  }
`,Ne="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z",Ue="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",He="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";async function be(o){if(!window.loadCardHelpers)return!1;try{return(await(await window.loadCardHelpers()).createCardElement({type:"entities",entities:[]})).constructor.getConfigElement(),!0}catch(e){return console.warn(`${o} failed to load card helpers:`,e),!1}}function ye(o,e,t,i){return u`
    ${e>1?u`
      <ha-icon-button
        .label=${"Move up"}
        .path=${Ne}
        class="pulse-move-icon"
        .disabled=${o===0}
        @click=${()=>t(o,-1)}
      ></ha-icon-button>
      <ha-icon-button
        .label=${"Move down"}
        .path=${Ue}
        class="pulse-move-icon"
        .disabled=${o===e-1}
        @click=${()=>t(o,1)}
      ></ha-icon-button>
    `:h}
    <ha-icon-button
      .label=${"Remove"}
      .path=${He}
      class="pulse-remove-icon"
      @click=${()=>i(o)}
    ></ha-icon-button>
  `}function C(o){return o.label||o.name||""}var Me=[{value:"default",label:"Default"},{value:"compact",label:"Compact"}],De=[{label:"Charts & Visuals",sections:[{value:"zones",label:"Zones"},{value:"home_status",label:"Home status"},{value:"zone_ranking",label:"Zone ranking"},{value:"graph",label:"Graph"},{value:"radial",label:"Radial"},{value:"donut",label:"Donut"},{value:"thermal_strip",label:"Thermal strip"},{value:"comfort_strip",label:"Comfort strip"},{value:"energy_flow",label:"Energy flow"}]},{label:"Tado CE",hint:"Requires Tado CE integration",sections:[{value:"api",label:"API"},{value:"bridge",label:"Bridge"},{value:"homekit",label:"HomeKit"},{value:"weather",label:"Weather"},{value:"environment",label:"Environment"},{value:"thermal",label:"Thermal"},{value:"schedule",label:"Schedule"}]}];function ze(){return[{name:"",type:"grid",column_min_width:"120px",schema:[{name:"title",label:"Title",selector:{text:{}}},{name:"layout",label:"Layout",selector:{select:{options:Me,mode:"dropdown"}}},{name:"columns",label:"Columns",selector:{number:{min:1,max:6,mode:"box"}}}]},{name:"",type:"grid",column_min_width:"120px",schema:[{name:"show_temp_bar",label:"Temp bar",selector:{boolean:{}}},{name:"show_power_bar",label:"Power bar",selector:{boolean:{}}},{name:"interactive",label:"Slider",selector:{boolean:{}}}]}]}var Q=class extends ${_helpersLoaded=!1;static get properties(){return{hass:{attribute:!1},_config:{type:Object}}}_config=null;async connectedCallback(){super.connectedCallback(),!this._helpersLoaded&&(this._helpersLoaded=await be("Pulse Climate Card:"),this.requestUpdate())}setConfig(e){this._config={...e}}_getZones(){return this._config?.zones?this._config.zones.map(e=>typeof e=="string"?{entity:e}:{...e}):this._config?.entity?[{entity:this._config.entity}]:[]}_fireConfigChanged(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_zoneChanged(e,t){if(!this._config)return;let i=this._getZones();i[e]={...i[e],entity:t.detail?.value||""};let s={...this._config,zones:i};delete s.entity,this._fireConfigChanged(s)}_removeZone(e){if(!this._config)return;let t=this._getZones();t.splice(e,1),this._fireConfigChanged({...this._config,zones:t})}_moveZone(e,t){if(!this._config)return;let i=this._getZones(),s=e+t;s<0||s>=i.length||([i[e],i[s]]=[i[s],i[e]],this._fireConfigChanged({...this._config,zones:i}))}_addZone(e){let t=e.detail?.value;if(!t||!this._config)return;e.target.value="";let i=[...this._getZones(),{entity:t}],s={...this._config,zones:i};delete s.entity,this._fireConfigChanged(s)}_getSections(){return this._config?.sections?this._config.sections.map(e=>typeof e=="string"?e:e.type):["zones"]}_getSectionsRaw(){return this._config?.sections?this._config.sections.map(e=>typeof e=="string"?e:{...e}):["zones"]}_getSectionConfig(e){let i=this._getSectionsRaw().find(s=>(typeof s=="string"?s:s.type)===e);return!i||typeof i=="string"?{}:i}_toggleSection(e,t){let i=this._getSectionsRaw();t&&!i.some(s=>(typeof s=="string"?s:s.type)===e)?i.push(e):t||(i=i.filter(s=>(typeof s=="string"?s:s.type)!==e)),this._fireConfigChanged({...this._config,sections:i})}_updateSectionProp(e,t,i){let s=this._getSectionsRaw(),n=s.findIndex(a=>(typeof a=="string"?a:a.type)===e);if(n===-1)return;let r=s[n];typeof r=="string"?r={type:r}:r={...r},i===""||i===void 0||i===null?delete r[t]:r[t]=i;let l=Object.keys(r).filter(a=>a!=="type");s[n]=l.length===0?r.type:r,this._fireConfigChanged({...this._config,sections:s})}_settingsChanged(e){let t=e.detail?.value;if(!t)return;let i={...this._config};t.title!==void 0&&(i.title=t.title||void 0),t.layout!==void 0&&(i.layout=t.layout),t.columns!==void 0&&(i.columns=Number(t.columns)||1),t.show_temp_bar!==void 0&&(i.show_temp_bar=t.show_temp_bar),t.show_power_bar!==void 0&&(i.show_power_bar=t.show_power_bar),t.interactive!==void 0&&(i.interactive=t.interactive),this._fireConfigChanged(i)}_renderSectionSettings(e,t){if(!this._getSections().includes(e))return h;switch(e){case"graph":return u`
          <div class="pc-editor-section-settings">
            <ha-form
              .hass=${t}
              .data=${{hours_to_show:this._getSectionConfig("graph").hours_to_show||24,height:this._getSectionConfig("graph").height||80,stacked:this._getSectionConfig("graph").stacked||!1}}
              .schema=${[{name:"",type:"grid",column_min_width:"100px",schema:[{name:"hours_to_show",label:"Graph hours",selector:{number:{min:1,max:168,mode:"box"}}},{name:"height",label:"Graph height (px)",selector:{number:{min:40,max:200,mode:"box"}}}]},{name:"stacked",label:"Stacked (temp + humidity)",selector:{boolean:{}}}]}
              .computeLabel=${C}
              @value-changed=${i=>{let s=i.detail?.value;s&&(s.hours_to_show!==void 0&&this._updateSectionProp("graph","hours_to_show",Number(s.hours_to_show)||24),s.height!==void 0&&this._updateSectionProp("graph","height",Number(s.height)||80),s.stacked!==void 0&&this._updateSectionProp("graph","stacked",s.stacked||void 0))}}
            ></ha-form>
          </div>
        `;case"radial":{let i=this._getSectionConfig("radial"),s=i.attribute||"temperature",n=s==="temperature"||s==="both",r=s==="humidity"||s==="both";return u`
          <div class="pc-editor-section-settings">
            <ha-form
              .hass=${t}
              .data=${{attribute:s}}
              .schema=${[{name:"attribute",label:"Display",selector:{select:{options:[{value:"temperature",label:"Temperature"},{value:"humidity",label:"Humidity"},{value:"both",label:"Both"}],mode:"dropdown"}}}]}
              .computeLabel=${C}
              @value-changed=${l=>{let a=l.detail?.value?.attribute;a!==void 0&&this._updateSectionProp("radial","attribute",a==="temperature"?void 0:a)}}
            ></ha-form>
            ${n?u`
              <ha-entity-picker
                .hass=${t}
                .value=${i.outdoor_temp_entity||""}
                .includeDomains=${["sensor","weather"]}
                .label=${"Outdoor temperature entity"}
                allow-custom-entity
                @value-changed=${l=>this._updateSectionProp("radial","outdoor_temp_entity",l.detail?.value||"")}
              ></ha-entity-picker>
            `:h}
            ${r?u`
              <ha-entity-picker
                .hass=${t}
                .value=${i.outdoor_humidity_entity||""}
                .includeDomains=${["sensor"]}
                .label=${"Outdoor humidity entity"}
                allow-custom-entity
                @value-changed=${l=>this._updateSectionProp("radial","outdoor_humidity_entity",l.detail?.value||"")}
              ></ha-entity-picker>
            `:h}
          </div>
        `}case"thermal_strip":return u`
          <div class="pc-editor-section-settings">
            <ha-form
              .hass=${t}
              .data=${{attribute:this._getSectionConfig("thermal_strip").attribute||"temperature",hours_to_show:this._getSectionConfig("thermal_strip").hours_to_show||24,slots_per_hour:this._getSectionConfig("thermal_strip").slots_per_hour||2}}
              .schema=${[{name:"attribute",label:"Display",selector:{select:{options:[{value:"temperature",label:"Temperature"},{value:"humidity",label:"Humidity"}],mode:"dropdown"}}},{name:"",type:"grid",column_min_width:"100px",schema:[{name:"hours_to_show",label:"Hours",selector:{number:{min:1,max:168,mode:"box"}}},{name:"slots_per_hour",label:"Slots/hr",selector:{number:{min:1,max:12,mode:"box"}}}]}]}
              .computeLabel=${C}
              @value-changed=${i=>{let s=i.detail?.value;s&&(s.attribute!==void 0&&this._updateSectionProp("thermal_strip","attribute",s.attribute==="temperature"?void 0:s.attribute),s.hours_to_show!==void 0&&this._updateSectionProp("thermal_strip","hours_to_show",Number(s.hours_to_show)||24),s.slots_per_hour!==void 0&&this._updateSectionProp("thermal_strip","slots_per_hour",Number(s.slots_per_hour)||2))}}
            ></ha-form>
          </div>
        `;case"comfort_strip":return u`
          <div class="pc-editor-section-settings">
            <ha-form
              .hass=${t}
              .data=${{hours_to_show:this._getSectionConfig("comfort_strip").hours_to_show||24,slots_per_hour:this._getSectionConfig("comfort_strip").slots_per_hour||1}}
              .schema=${[{name:"",type:"grid",column_min_width:"100px",schema:[{name:"hours_to_show",label:"Comfort hours",selector:{number:{min:1,max:168,mode:"box"}}},{name:"slots_per_hour",label:"Comfort slots/hr",selector:{number:{min:1,max:12,mode:"box"}}}]}]}
              .computeLabel=${C}
              @value-changed=${i=>{let s=i.detail?.value;s&&(s.hours_to_show!==void 0&&this._updateSectionProp("comfort_strip","hours_to_show",Number(s.hours_to_show)||24),s.slots_per_hour!==void 0&&this._updateSectionProp("comfort_strip","slots_per_hour",Number(s.slots_per_hour)||1))}}
            ></ha-form>
          </div>
        `;default:return h}}render(){let e=this.hass;if(!e||!this._config)return h;let t=this._getZones(),i=this._getSections(),s={title:this._config.title||"",layout:this._config.layout||"default",columns:this._config.columns||1,show_temp_bar:this._config.show_temp_bar!==!1,show_power_bar:this._config.show_power_bar!==!1,interactive:this._config.interactive===!0},n=i.length;return u`
      <div class="pc-editor">
        <h3>Zones</h3>
        <div class="pc-editor-entities">
          ${t.map((r,l)=>u`
              <div class="pc-editor-entity-row">
                <div class="pc-editor-entity-row-main">
                  <ha-entity-picker
                    .hass=${e}
                    .value=${r.entity}
                    .includeDomains=${["climate","water_heater"]}
                    allow-custom-entity
                    @value-changed=${a=>this._zoneChanged(l,a)}
                  ></ha-entity-picker>
                  ${ye(l,t.length,(a,d)=>this._moveZone(a,d),a=>this._removeZone(a))}
                </div>
              </div>
            `)}
        </div>
        <ha-entity-picker
          class="pc-editor-add-entity"
          .hass=${e}
          .includeDomains=${["climate","water_heater"]}
          @value-changed=${this._addZone}
        ></ha-entity-picker>

        <h3>Card Settings</h3>
        <ha-form
          .hass=${e}
          .data=${s}
          .schema=${ze()}
          .computeLabel=${C}
          @value-changed=${this._settingsChanged}
        ></ha-form>

        ${n===0?u`
          <div class="pc-editor-section-hint">No sections enabled — the card will be empty.</div>
        `:h}

        ${De.map(r=>u`
          <ha-expansion-panel .header=${r.label} outlined>
            ${r.hint?u`<div slot="secondary">${r.hint}</div>`:h}
            <div class="pc-editor-section-grid">
              ${r.sections.map(l=>u`
                <label class="pc-editor-section-chip ${i.includes(l.value)?"pc-editor-active":""}">
                  <ha-switch
                    .checked=${i.includes(l.value)}
                    @change=${a=>this._toggleSection(l.value,a.target.checked)}
                  ></ha-switch>
                  <span>${l.label}</span>
                </label>
              `)}
            </div>
            ${r.sections.map(l=>this._renderSectionSettings(l.value,e))}
          </ha-expansion-panel>
        `)}
      </div>
    `}static get styles(){return x`
      .pc-editor {
        display: flex;
        flex-direction: column;
      }
      h3 {
        font-size: 14px;
        font-weight: 500;
        margin: 12px 0 8px;
        color: var(--primary-text-color);
      }
      h3:first-child { margin-top: 0; }
      .pc-editor-entities {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .pc-editor-entity-row {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 8px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 8px;
      }
      .pc-editor-entity-row-main {
        display: flex;
        align-items: center;
      }
      .pc-editor-entity-row-main ha-entity-picker {
        flex: 1;
        min-width: 0;
      }
      ${$e}
      .pc-editor-add-entity {
        display: block;
        margin-top: 8px;
      }
      ha-expansion-panel {
        margin-bottom: 4px;
      }
      .pc-editor-section-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
        padding: 8px 0;
      }
      .pc-editor-section-chip {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 13px;
        color: var(--primary-text-color);
        cursor: pointer;
      }
      .pc-editor-section-chip ha-switch {
        --switch-unchecked-button-color: var(--disabled-color, #bdbdbd);
      }
      .pc-editor-section-chip.pc-editor-active {
        /* Reserved for future active styling. */
      }
      .pc-editor-section-settings {
        padding: 4px 0 8px;
        border-top: 1px solid var(--divider-color, rgba(255,255,255,0.08));
        margin-top: 4px;
      }
      .pc-editor-section-hint {
        font-size: 12px;
        color: var(--warning-color, #FF9800);
        padding: 4px 0 8px;
      }
    `}};customElements.get(X)||customElements.define(X,Q);
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
