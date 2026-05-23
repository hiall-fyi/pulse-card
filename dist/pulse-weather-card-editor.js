var U=globalThis,H=U.ShadowRoot&&(U.ShadyCSS===void 0||U.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,D=Symbol(),ee=new WeakMap,w=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==D)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(H&&e===void 0){let s=t!==void 0&&t.length===1;s&&(e=ee.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&ee.set(t,e))}return e}toString(){return this.cssText}},te=o=>new w(typeof o=="string"?o:o+"",void 0,D),C=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((s,i,n)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[n+1],o[0]);return new w(t,o,D)},se=(o,e)=>{if(H)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let s=document.createElement("style"),i=U.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,o.appendChild(s)}},z=H?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return te(t)})(o):o;var{is:be,defineProperty:Ae,getOwnPropertyDescriptor:xe,getOwnPropertyNames:Ee,getOwnPropertySymbols:we,getPrototypeOf:Ce}=Object,I=globalThis,ie=I.trustedTypes,Oe=ie?ie.emptyScript:"",Le=I.reactiveElementPolyfillSupport,O=(o,e)=>o,W={toAttribute(o,e){switch(e){case Boolean:o=o?Oe:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},ne=(o,e)=>!be(o,e),oe={attribute:!0,type:String,converter:W,reflect:!1,useDefault:!1,hasChanged:ne};Symbol.metadata??=Symbol("metadata"),I.litPropertyMetadata??=new WeakMap;var m=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=oe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Ae(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){let{get:i,set:n}=xe(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:i,set(r){let l=i?.call(this);n?.call(this,r),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??oe}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;let e=Ce(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){let t=this.properties,s=[...Ee(t),...we(t)];for(let i of s)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[t,s]of this.elementProperties){let i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let i of s)t.unshift(z(i))}else e!==void 0&&t.push(z(e));return t}static _$Eu(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return se(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){let s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){let n=(s.converter?.toAttribute!==void 0?s.converter:W).toAttribute(t,s.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){let s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let n=s.getPropertyOptions(i),r=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:W;this._$Em=i;let l=r.fromAttribute(t,n.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(e,t,s,i=!1,n){if(e!==void 0){let r=this.constructor;if(i===!1&&(n=this[e]),s??=r.getPropertyOptions(e),!((s.hasChanged??ne)(n,t)||s.useDefault&&s.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:n},r){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),n!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,n]of s){let{wrapped:r}=n,l=this[i];r!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,n,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};m.elementStyles=[],m.shadowRootOptions={mode:"open"},m[O("elementProperties")]=new Map,m[O("finalized")]=new Map,Le?.({ReactiveElement:m}),(I.reactiveElementVersions??=[]).push("2.1.2");var K=globalThis,re=o=>o,k=K.trustedTypes,ae=k?k.createPolicy("lit-html",{createHTML:o=>o}):void 0,ue="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,_e="?"+g,Pe=`<${_e}>`,S=document,P=()=>S.createComment(""),R=o=>o===null||typeof o!="object"&&typeof o!="function",X=Array.isArray,Re=o=>X(o)||typeof o?.[Symbol.iterator]=="function",F=`[ 	
\f\r]`,L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,le=/-->/g,ce=/>/g,y=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),he=/'/g,de=/"/g,me=/^(?:script|style|textarea|title)$/i,Y=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),u=Y(1),Be=Y(2),qe=Y(3),b=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),pe=new WeakMap,v=S.createTreeWalker(S,129);function fe(o,e){if(!X(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ae!==void 0?ae.createHTML(e):e}var Me=(o,e)=>{let t=o.length-1,s=[],i,n=e===2?"<svg>":e===3?"<math>":"",r=L;for(let l=0;l<t;l++){let a=o[l],c,p,d=-1,_=0;for(;_<a.length&&(r.lastIndex=_,p=r.exec(a),p!==null);)_=r.lastIndex,r===L?p[1]==="!--"?r=le:p[1]!==void 0?r=ce:p[2]!==void 0?(me.test(p[2])&&(i=RegExp("</"+p[2],"g")),r=y):p[3]!==void 0&&(r=y):r===y?p[0]===">"?(r=i??L,d=-1):p[1]===void 0?d=-2:(d=r.lastIndex-p[2].length,c=p[1],r=p[3]===void 0?y:p[3]==='"'?de:he):r===de||r===he?r=y:r===le||r===ce?r=L:(r=y,i=void 0);let f=r===y&&o[l+1].startsWith("/>")?" ":"";n+=r===L?a+Pe:d>=0?(s.push(c),a.slice(0,d)+ue+a.slice(d)+g+f):a+g+(d===-2?l:f)}return[fe(o,n+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},M=class o{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,r=0,l=e.length-1,a=this.parts,[c,p]=Me(e,t);if(this.el=o.createElement(c,s),v.currentNode=this.el.content,t===2||t===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=v.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let d of i.getAttributeNames())if(d.endsWith(ue)){let _=p[r++],f=i.getAttribute(d).split(g),N=/([.?@])?(.*)/.exec(_);a.push({type:1,index:n,name:N[2],strings:f,ctor:N[1]==="."?q:N[1]==="?"?V:N[1]==="@"?j:E}),i.removeAttribute(d)}else d.startsWith(g)&&(a.push({type:6,index:n}),i.removeAttribute(d));if(me.test(i.tagName)){let d=i.textContent.split(g),_=d.length-1;if(_>0){i.textContent=k?k.emptyScript:"";for(let f=0;f<_;f++)i.append(d[f],P()),v.nextNode(),a.push({type:2,index:++n});i.append(d[_],P())}}}else if(i.nodeType===8)if(i.data===_e)a.push({type:2,index:n});else{let d=-1;for(;(d=i.data.indexOf(g,d+1))!==-1;)a.push({type:7,index:n}),d+=g.length-1}n++}}static createElement(e,t){let s=S.createElement("template");return s.innerHTML=e,s}};function x(o,e,t=o,s){if(e===b)return e;let i=s!==void 0?t._$Co?.[s]:t._$Cl,n=R(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(o),i._$AT(o,t,s)),s!==void 0?(t._$Co??=[])[s]=i:t._$Cl=i),i!==void 0&&(e=x(o,i._$AS(o,e.values),i,s)),e}var B=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??S).importNode(t,!0);v.currentNode=i;let n=v.nextNode(),r=0,l=0,a=s[0];for(;a!==void 0;){if(r===a.index){let c;a.type===2?c=new T(n,n.nextSibling,this,e):a.type===1?c=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(c=new G(n,this,e)),this._$AV.push(c),a=s[++l]}r!==a?.index&&(n=v.nextNode(),r++)}return v.currentNode=S,i}p(e){let t=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},T=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=x(this,e,t),R(e)?e===h||e==null||e===""?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==b&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Re(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&R(this._$AH)?this._$AA.nextSibling.data=e:this.T(S.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=M.createElement(fe(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{let n=new B(i,this),r=n.u(this.options);n.p(t),this.T(r),this._$AH=n}}_$AC(e){let t=pe.get(e.strings);return t===void 0&&pe.set(e.strings,t=new M(e)),t}k(e){X(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,i=0;for(let n of e)i===t.length?t.push(s=new o(this.O(P()),this.O(P()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let s=re(e).nextSibling;re(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},E=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,n){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=h}_$AI(e,t=this,s,i){let n=this.strings,r=!1;if(n===void 0)e=x(this,e,t,0),r=!R(e)||e!==this._$AH&&e!==b,r&&(this._$AH=e);else{let l=e,a,c;for(e=n[0],a=0;a<n.length-1;a++)c=x(this,l[s+a],t,a),c===b&&(c=this._$AH[a]),r||=!R(c)||c!==this._$AH[a],c===h?e=h:e!==h&&(e+=(c??"")+n[a+1]),this._$AH[a]=c}r&&!i&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},q=class extends E{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}},V=class extends E{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}},j=class extends E{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){if((e=x(this,e,t,0)??h)===b)return;let s=this._$AH,i=e===h&&s!==h||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==h&&(s===h||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},G=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){x(this,e)}};var Te=K.litHtmlPolyfillSupport;Te?.(M,T),(K.litHtmlVersions??=[]).push("3.3.2");var ge=(o,e,t)=>{let s=t?.renderBefore??e,i=s._$litPart$;if(i===void 0){let n=t?.renderBefore??null;s._$litPart$=i=new T(e.insertBefore(P(),n),n,void 0,t??{})}return i._$AI(o),i};var Q=globalThis,$=class extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ge(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return b}};$._$litElement$=!0,$.finalized=!0,Q.litElementHydrateSupport?.({LitElement:$});var Ne=Q.litElementPolyfillSupport;Ne?.({LitElement:$});(Q.litElementVersions??=[]).push("4.2.2");var Z="pulse-weather-card-editor";var it=1800*1e3;var $e=C`
  .pulse-move-icon {
    color: var(--pulse-text-secondary);
    --mdc-icon-button-size: 36px;
  }
  .pulse-remove-icon {
    color: var(--pulse-text-secondary);
    --mdc-icon-button-size: 36px;
  }
  .pulse-move-icon[disabled] {
    opacity: 0.3;
    pointer-events: none;
  }
`,Ue="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z",He="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",Ie="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";async function ye(o){if(!window.loadCardHelpers)return!1;try{return(await(await window.loadCardHelpers()).createCardElement({type:"entities",entities:[]})).constructor.getConfigElement(),!0}catch(e){return console.warn(`${o} failed to load card helpers:`,e),!1}}function ve(o,e,t,s){return u`
    ${e>1?u`
      <ha-icon-button
        .label=${"Move up"}
        .path=${Ue}
        class="pulse-move-icon"
        .disabled=${o===0}
        @click=${()=>t(o,-1)}
      ></ha-icon-button>
      <ha-icon-button
        .label=${"Move down"}
        .path=${He}
        class="pulse-move-icon"
        .disabled=${o===e-1}
        @click=${()=>t(o,1)}
      ></ha-icon-button>
    `:h}
    <ha-icon-button
      .label=${"Remove"}
      .path=${Ie}
      class="pulse-remove-icon"
      @click=${()=>s(o)}
    ></ha-icon-button>
  `}function A(o){return o.label||o.name||""}var Se=[{label:"Core",sections:[{value:"overview",label:"Overview"},{value:"forecast",label:"Forecast"},{value:"wind",label:"Wind"},{value:"astro",label:"Astro"},{value:"alerts",label:"Alerts"}]},{label:"Atmos CE",hint:"Requires Atmos CE sensors",sections:[{value:"air_quality",label:"Air quality"},{value:"atmosphere",label:"Atmosphere"},{value:"meteogram",label:"Meteogram"}]}],ke=[{name:"title",label:"Title",selector:{text:{}}}],J=class extends ${_helpersLoaded=!1;static get properties(){return{hass:{attribute:!1},_config:{state:!0}}}async connectedCallback(){super.connectedCallback(),!this._helpersLoaded&&(this._helpersLoaded=await ye("Pulse Weather Card:"),this.requestUpdate())}setConfig(e){this._config={...e}}_fireConfigChanged(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}_getSectionsRaw(){return!this._config?.sections||!Array.isArray(this._config.sections)?[{type:"overview"}]:this._config.sections.map(e=>typeof e=="string"?e:{...e})}_getEnabledTypes(){return this._getSectionsRaw().map(e=>typeof e=="string"?e:e.type)}_getSectionConfig(e){let s=this._getSectionsRaw().find(i=>(typeof i=="string"?i:i.type)===e);return!s||typeof s=="string"?{}:s}_toggleSection(e,t){let s=this._getSectionsRaw();t&&!s.some(i=>(typeof i=="string"?i:i.type)===e)?s.push(e):t||(s=s.filter(i=>(typeof i=="string"?i:i.type)!==e)),this._fireConfigChanged({...this._config,sections:s})}_updateSectionProp(e,t,s){let i=this._getSectionsRaw(),n=i.findIndex(a=>(typeof a=="string"?a:a.type)===e);if(n===-1)return;let r=i[n];r=typeof r=="string"?{type:r}:{...r},s===""||s===void 0||s===null?delete r[t]:r[t]=s;let l=Object.keys(r).filter(a=>a!=="type");i[n]=l.length===0?r.type:r,this._fireConfigChanged({...this._config,sections:i})}_moveSection(e,t){let s=this._getSectionsRaw(),i=e+t;i<0||i>=s.length||([s[e],s[i]]=[s[i],s[e]],this._fireConfigChanged({...this._config,sections:s}))}_removeSection(e){let t=this._getSectionsRaw();t.splice(e,1),t.length===0&&t.push("overview"),this._fireConfigChanged({...this._config,sections:t})}_settingsChanged(e){e.stopPropagation();let t=e.detail?.value;if(!t)return;let s={...this._config};t.title===void 0||t.title===null||t.title===""?delete s.title:s.title=t.title,this._fireConfigChanged(s)}_weatherEntityChanged(e){let t=e.detail?.value,s={...this._config};t?s.weather_entity=t:delete s.weather_entity,this._fireConfigChanged(s)}_atmosSourceChanged(e){let t=e.target.value??"",s={...this._config};t?s.atmos_source=t:delete s.atmos_source,this._fireConfigChanged(s)}_renderSectionSettings(e,t){if(!this._getEnabledTypes().includes(e))return h;switch(e){case"overview":return this._renderOverviewSettings(t);case"wind":return this._renderWindSettings(t);case"forecast":return this._renderForecastSettings(t);case"air_quality":return this._renderAirQualitySettings(t);case"meteogram":return this._renderMeteogramSettings(t);default:return h}}_renderOverviewSettings(e){let t=this._getSectionConfig("overview");return u`
      <div class="pw-editor-section-settings">
        <ha-form
          .hass=${e}
          .data=${{location_label:t.location_label||""}}
          .schema=${[{name:"location_label",label:"Location label",selector:{text:{}}}]}
          .computeLabel=${A}
          @value-changed=${s=>{let i=s.detail?.value?.location_label;this._updateSectionProp("overview","location_label",i||void 0)}}
        ></ha-form>
      </div>
    `}_renderWindSettings(e){let t=this._getSectionConfig("wind");return u`
      <div class="pw-editor-section-settings">
        <ha-form
          .hass=${e}
          .data=${{speed_mode:t.speed_mode||"speed",pro:t.pro!==!1}}
          .schema=${[{name:"speed_mode",label:"Display",selector:{select:{options:[{value:"speed",label:"Speed"},{value:"gust",label:"Gust"}],mode:"dropdown"}}},{name:"pro",label:"Brand-mark toggle",selector:{boolean:{}}}]}
          .computeLabel=${A}
          @value-changed=${s=>{let i=s.detail?.value;i&&(i.speed_mode!==void 0&&this._updateSectionProp("wind","speed_mode",i.speed_mode==="speed"?void 0:i.speed_mode),i.pro!==void 0&&this._updateSectionProp("wind","pro",i.pro===!1?!1:void 0))}}
        ></ha-form>
      </div>
    `}_renderForecastSettings(e){let t=this._getSectionConfig("forecast");return u`
      <div class="pw-editor-section-settings">
        <ha-form
          .hass=${e}
          .data=${{pro:t.pro!==!1}}
          .schema=${[{name:"pro",label:"Brand-mark toggle",selector:{boolean:{}}}]}
          .computeLabel=${A}
          @value-changed=${s=>{let i=s.detail?.value?.pro;this._updateSectionProp("forecast","pro",i===!1?!1:void 0)}}
        ></ha-form>
      </div>
    `}_renderAirQualitySettings(e){let t=this._getSectionConfig("air_quality");return u`
      <div class="pw-editor-section-settings">
        <ha-form
          .hass=${e}
          .data=${{scale:t.scale||"eu"}}
          .schema=${[{name:"scale",label:"AQI scale",selector:{select:{options:[{value:"eu",label:"European"},{value:"us",label:"US EPA"}],mode:"dropdown"}}}]}
          .computeLabel=${A}
          @value-changed=${s=>{let i=s.detail?.value?.scale;this._updateSectionProp("air_quality","scale",i==="eu"?void 0:i)}}
        ></ha-form>
      </div>
    `}_renderMeteogramSettings(e){let t=this._getSectionConfig("meteogram");return u`
      <div class="pw-editor-section-settings">
        <ha-form
          .hass=${e}
          .data=${{horizon:t.horizon==="long"?"long":"short",hours:t.hours??"",show_cloud:t.show_cloud===void 0?"auto":String(t.show_cloud)}}
          .schema=${[{name:"horizon",label:"Horizon",selector:{select:{options:[{value:"short",label:"Short (12h)"},{value:"long",label:"Long (24h)"}],mode:"dropdown"}}},{name:"hours",label:"Hours override",selector:{number:{min:0,max:48,mode:"box"}}},{name:"show_cloud",label:"Cloud cover",selector:{select:{options:[{value:"auto",label:"Auto"},{value:"true",label:"Always"},{value:"false",label:"Never"}],mode:"dropdown"}}}]}
          .computeLabel=${A}
          @value-changed=${s=>{let i=s.detail?.value;if(i){if(i.horizon!==void 0&&this._updateSectionProp("meteogram","horizon",i.horizon==="short"?void 0:i.horizon),i.hours!==void 0){let n=Number(i.hours);this._updateSectionProp("meteogram","hours",Number.isFinite(n)&&n>0?n:void 0)}if(i.show_cloud!==void 0){let n=i.show_cloud==="true"?!0:i.show_cloud==="false"?!1:void 0;this._updateSectionProp("meteogram","show_cloud",n)}}}}
        ></ha-form>
      </div>
    `}render(){let e=this.hass;if(!e||!this._config)return h;let t=this._getSectionsRaw(),s=this._getEnabledTypes(),i={title:this._config.title||""};return u`
      <div class="pw-editor">
        <h3>Entities</h3>
        <ha-entity-picker
          .hass=${e}
          .value=${this._config.weather_entity||""}
          .includeDomains=${["weather"]}
          .label=${"Weather entity"}
          allow-custom-entity
          @value-changed=${this._weatherEntityChanged}
        ></ha-entity-picker>
        <ha-textfield
          class="pw-editor-atmos-source"
          .label=${"Atmos CE source (optional)"}
          .value=${this._config.atmos_source||""}
          .helper=${"Slug override \u2014 leave blank to auto-detect"}
          helperPersistent
          @input=${this._atmosSourceChanged}
        ></ha-textfield>

        <h3>Card Settings</h3>
        <ha-form
          .hass=${e}
          .data=${i}
          .schema=${ke}
          .computeLabel=${A}
          @value-changed=${this._settingsChanged}
        ></ha-form>

        <h3>Section Order</h3>
        <div class="pw-editor-sections-list">
          ${t.map((n,r)=>{let l=typeof n=="string"?n:n.type,a=Se.flatMap(c=>c.sections).find(c=>c.value===l)?.label||l;return u`
              <div class="pw-editor-section-row">
                <span class="pw-editor-section-row-label">${a}</span>
                ${ve(r,t.length,(c,p)=>this._moveSection(c,p),c=>this._removeSection(c))}
              </div>
            `})}
        </div>

        ${s.length===0?u`
          <div class="pw-editor-section-hint">No sections enabled — the card will be empty.</div>
        `:h}

        ${Se.map(n=>u`
          <ha-expansion-panel .header=${n.label} outlined>
            ${n.hint?u`<div slot="secondary">${n.hint}</div>`:h}
            <div class="pw-editor-section-grid">
              ${n.sections.map(r=>u`
                <label class="pw-editor-section-chip ${s.includes(r.value)?"pw-editor-active":""}">
                  <ha-switch
                    .checked=${s.includes(r.value)}
                    @change=${l=>this._toggleSection(r.value,l.target.checked)}
                  ></ha-switch>
                  <span>${r.label}</span>
                </label>
              `)}
            </div>
            ${n.sections.map(r=>this._renderSectionSettings(r.value,e))}
          </ha-expansion-panel>
        `)}
      </div>
    `}static get styles(){return C`
      .pw-editor {
        display: flex;
        flex-direction: column;
      }
      h3 {
        font-size: 14px;
        font-weight: 500;
        margin: 12px 0 8px;
        color: var(--pulse-text-primary);
      }
      h3:first-child { margin-top: 0; }
      .pw-editor-atmos-source {
        display: block;
        margin-top: 8px;
      }
      .pw-editor-sections-list {
        display: flex;
        flex-direction: column;
        gap: var(--pulse-space-tight);
      }
      .pw-editor-section-row {
        display: flex;
        align-items: center;
        gap: var(--pulse-space-element);
        padding: var(--pulse-space-tight) var(--pulse-space-element);
        border: 1px solid var(--pulse-border-divider);
        border-radius: var(--pulse-radius-element);
      }
      .pw-editor-section-row-label {
        flex: 1;
        font-size: 13px;
        color: var(--pulse-text-primary);
      }
      ${$e}
      ha-expansion-panel {
        margin-bottom: 4px;
      }
      .pw-editor-section-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--pulse-space-element);
        padding: 8px 0;
      }
      .pw-editor-section-chip {
        display: flex;
        align-items: center;
        gap: var(--pulse-space-chip);
        font-size: 13px;
        color: var(--pulse-text-primary);
        cursor: pointer;
      }
      .pw-editor-section-chip ha-switch {
        --switch-unchecked-button-color: var(--pulse-disabled);
      }
      .pw-editor-section-settings {
        padding: 4px 0 8px;
        border-top: 1px solid var(--pulse-border-divider);
        margin-top: 4px;
      }
      .pw-editor-section-hint {
        font-size: 12px;
        color: var(--pulse-status-yellow);
        padding: 4px 0 8px;
      }
    `}};customElements.get(Z)||customElements.define(Z,J);export{J as PulseWeatherCardEditor};
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
