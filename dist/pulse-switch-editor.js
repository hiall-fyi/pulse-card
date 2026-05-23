var U=globalThis,N=U.ShadowRoot&&(U.ShadyCSS===void 0||U.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,I=Symbol(),tt=new WeakMap,C=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==I)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(N&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=tt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&tt.set(e,t))}return t}toString(){return this.cssText}},et=o=>new C(typeof o=="string"?o:o+"",void 0,I),w=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((s,i,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[r+1],o[0]);return new C(e,o,I)},st=(o,t)=>{if(N)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=U.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)}},z=N?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return et(e)})(o):o;var{is:Et,defineProperty:bt,getOwnPropertyDescriptor:St,getOwnPropertyNames:Ct,getOwnPropertySymbols:wt,getPrototypeOf:xt}=Object,H=globalThis,it=H.trustedTypes,Pt=it?it.emptyScript:"",Lt=H.reactiveElementPolyfillSupport,x=(o,t)=>o,B={toAttribute(o,t){switch(t){case Boolean:o=o?Pt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},rt=(o,t)=>!Et(o,t),ot={attribute:!0,type:String,converter:B,reflect:!1,useDefault:!1,hasChanged:rt};Symbol.metadata??=Symbol("metadata"),H.litPropertyMetadata??=new WeakMap;var _=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ot){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&bt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:r}=St(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){let c=i?.call(this);r?.call(this,n),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ot}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;let t=xt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){let e=this.properties,s=[...Ct(e),...wt(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(z(i))}else t!==void 0&&e.push(z(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return st(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let r=(s.converter?.toAttribute!==void 0?s.converter:B).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let r=s.getPropertyOptions(i),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:B;this._$Em=i;let c=n.fromAttribute(e,r.type);this[i]=c??this._$Ej?.get(i)??c,this._$Em=null}}requestUpdate(t,e,s,i=!1,r){if(t!==void 0){let n=this.constructor;if(i===!1&&(r=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??rt)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),r!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,r]of s){let{wrapped:n}=r,c=this[i];n!==!0||this._$AL.has(i)||c===void 0||this.C(i,void 0,r,c)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[x("elementProperties")]=new Map,_[x("finalized")]=new Map,Lt?.({ReactiveElement:_}),(H.reactiveElementVersions??=[]).push("2.1.2");var Z=globalThis,nt=o=>o,D=Z.trustedTypes,at=D?D.createPolicy("lit-html",{createHTML:o=>o}):void 0,ut="$lit$",m=`lit$${Math.random().toFixed(9).slice(2)}$`,_t="?"+m,Ot=`<${_t}>`,v=document,L=()=>v.createComment(""),O=o=>o===null||typeof o!="object"&&typeof o!="function",G=Array.isArray,Tt=o=>G(o)||typeof o?.[Symbol.iterator]=="function",j=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lt=/-->/g,ht=/>/g,g=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ct=/'/g,dt=/"/g,ft=/^(?:script|style|textarea|title)$/i,X=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),S=X(1),Vt=X(2),Ft=X(3),y=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),pt=new WeakMap,A=v.createTreeWalker(v,129);function mt(o,t){if(!G(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return at!==void 0?at.createHTML(t):t}var Mt=(o,t)=>{let e=o.length-1,s=[],i,r=t===2?"<svg>":t===3?"<math>":"",n=P;for(let c=0;c<e;c++){let a=o[c],d,p,l=-1,u=0;for(;u<a.length&&(n.lastIndex=u,p=n.exec(a),p!==null);)u=n.lastIndex,n===P?p[1]==="!--"?n=lt:p[1]!==void 0?n=ht:p[2]!==void 0?(ft.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=g):p[3]!==void 0&&(n=g):n===g?p[0]===">"?(n=i??P,l=-1):p[1]===void 0?l=-2:(l=n.lastIndex-p[2].length,d=p[1],n=p[3]===void 0?g:p[3]==='"'?dt:ct):n===dt||n===ct?n=g:n===lt||n===ht?n=P:(n=g,i=void 0);let f=n===g&&o[c+1].startsWith("/>")?" ":"";r+=n===P?a+Ot:l>=0?(s.push(d),a.slice(0,l)+ut+a.slice(l)+m+f):a+m+(l===-2?c:f)}return[mt(o,r+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},T=class o{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0,c=t.length-1,a=this.parts,[d,p]=Mt(t,e);if(this.el=o.createElement(d,s),A.currentNode=this.el.content,e===2||e===3){let l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=A.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(let l of i.getAttributeNames())if(l.endsWith(ut)){let u=p[n++],f=i.getAttribute(l).split(m),R=/([.?@])?(.*)/.exec(u);a.push({type:1,index:r,name:R[2],strings:f,ctor:R[1]==="."?F:R[1]==="?"?W:R[1]==="@"?q:b}),i.removeAttribute(l)}else l.startsWith(m)&&(a.push({type:6,index:r}),i.removeAttribute(l));if(ft.test(i.tagName)){let l=i.textContent.split(m),u=l.length-1;if(u>0){i.textContent=D?D.emptyScript:"";for(let f=0;f<u;f++)i.append(l[f],L()),A.nextNode(),a.push({type:2,index:++r});i.append(l[u],L())}}}else if(i.nodeType===8)if(i.data===_t)a.push({type:2,index:r});else{let l=-1;for(;(l=i.data.indexOf(m,l+1))!==-1;)a.push({type:7,index:r}),l+=m.length-1}r++}}static createElement(t,e){let s=v.createElement("template");return s.innerHTML=t,s}};function E(o,t,e=o,s){if(t===y)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl,r=O(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(o),i._$AT(o,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=E(o,i._$AS(o,t.values),i,s)),t}var V=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??v).importNode(e,!0);A.currentNode=i;let r=A.nextNode(),n=0,c=0,a=s[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new M(r,r.nextSibling,this,t):a.type===1?d=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(d=new K(r,this,t)),this._$AV.push(d),a=s[++c]}n!==a?.index&&(r=A.nextNode(),n++)}return A.currentNode=v,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},M=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),O(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==y&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Tt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(v.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=T.createElement(mt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let r=new V(i,this),n=r.u(this.options);r.p(e),this.T(n),this._$AH=r}}_$AC(t){let e=pt.get(t.strings);return e===void 0&&pt.set(t.strings,e=new T(t)),e}k(t){G(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let r of t)i===e.length?e.push(s=new o(this.O(L()),this.O(L()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=nt(t).nextSibling;nt(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},b=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=h}_$AI(t,e=this,s,i){let r=this.strings,n=!1;if(r===void 0)t=E(this,t,e,0),n=!O(t)||t!==this._$AH&&t!==y,n&&(this._$AH=t);else{let c=t,a,d;for(t=r[0],a=0;a<r.length-1;a++)d=E(this,c[s+a],e,a),d===y&&(d=this._$AH[a]),n||=!O(d)||d!==this._$AH[a],d===h?t=h:t!==h&&(t+=(d??"")+r[a+1]),this._$AH[a]=d}n&&!i&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},F=class extends b{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}},W=class extends b{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}},q=class extends b{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??h)===y)return;let s=this._$AH,i=t===h&&s!==h||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==h&&(s===h||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},K=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}};var Rt=Z.litHtmlPolyfillSupport;Rt?.(T,M),(Z.litHtmlVersions??=[]).push("3.3.2");var $t=(o,t,e)=>{let s=e?.renderBefore??t,i=s._$litPart$;if(i===void 0){let r=e?.renderBefore??null;s._$litPart$=i=new M(t.insertBefore(L(),r),r,void 0,e??{})}return i._$AI(o),i};var J=globalThis,$=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=$t(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return y}};$._$litElement$=!0,$.finalized=!0,J.litElementHydrateSupport?.({LitElement:$});var Ut=J.litElementPolyfillSupport;Ut?.({LitElement:$});(J.litElementVersions??=[]).push("4.2.2");var Y="pulse-switch-card-editor";var k={columns:4,show_speed:!1,speed_format:"rx/tx",led_mode:"realistic",avg_packet_size:500,hide_unavailable:!1,tap_action:{action:"more-info"},hold_action:{action:"none"}};var gt=w`
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
`,Nt="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z",Ht="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",Dt="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";async function At(o){if(!window.loadCardHelpers)return!1;try{return(await(await window.loadCardHelpers()).createCardElement({type:"entities",entities:[]})).constructor.getConfigElement(),!0}catch(t){return console.warn(`${o} failed to load card helpers:`,t),!1}}function vt(o,t,e,s){return S`
    ${t>1?S`
      <ha-icon-button
        .label=${"Move up"}
        .path=${Nt}
        class="pulse-move-icon"
        .disabled=${o===0}
        @click=${()=>e(o,-1)}
      ></ha-icon-button>
      <ha-icon-button
        .label=${"Move down"}
        .path=${Ht}
        class="pulse-move-icon"
        .disabled=${o===t-1}
        @click=${()=>e(o,1)}
      ></ha-icon-button>
    `:h}
    <ha-icon-button
      .label=${"Remove"}
      .path=${Dt}
      class="pulse-remove-icon"
      @click=${()=>s(o)}
    ></ha-icon-button>
  `}function yt(o){return o.label||o.name||""}var kt=[{name:"",type:"grid",column_min_width:"120px",schema:[{name:"title",label:"Title",selector:{text:{}}},{name:"columns",label:"Columns",selector:{number:{min:1,max:8,mode:"box"}}}]},{name:"",type:"grid",column_min_width:"120px",schema:[{name:"led_mode",label:"LED Mode",selector:{select:{options:[{value:"scaled",label:"Scaled"},{value:"realistic",label:"Realistic"}],mode:"dropdown"}}},{name:"speed_format",label:"Speed Format",selector:{select:{options:[{value:"rx/tx",label:"RX/TX"},{value:"rx",label:"RX Only"},{value:"total",label:"Total"}],mode:"dropdown"}}}]},{name:"show_speed",label:"Show Speed",selector:{boolean:{}}}],Q=class extends ${_helpersLoaded=!1;static get properties(){return{hass:{attribute:!1},_config:{state:!0}}}async connectedCallback(){super.connectedCallback(),!this._helpersLoaded&&(this._helpersLoaded=await At("Pulse Switch Card:"))}setConfig(t){this._config=t}_getPorts(){return(this._config?.ports||[]).map(t=>({...t}))}_fireConfigChanged(t){this._config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}_portEntityChanged(t,e){let s=e.detail.value,i=this._getPorts();s===""||s===void 0?i.splice(t,1):i[t]={...i[t],entity:s},this._fireConfigChanged({...this._config,ports:i})}_portLabelChanged(t,e){let s=e.target.value??"",i=this._getPorts();s===""?delete i[t].label:i[t].label=s,this._fireConfigChanged({...this._config,ports:i})}_removePort(t){let e=this._getPorts();e.splice(t,1),this._fireConfigChanged({...this._config,ports:e})}_movePort(t,e){let s=this._getPorts(),i=t+e;i<0||i>=s.length||([s[t],s[i]]=[s[i],s[t]],this._fireConfigChanged({...this._config,ports:s}))}_addPort(t){let e=t.detail.value;if(!e)return;let s=this._getPorts();s.push({entity:e}),t.target.value="",this._fireConfigChanged({...this._config,ports:s})}_settingsChanged(t){t.stopPropagation();let e=t.detail.value,s={...this._config},i=["title","columns","led_mode","speed_format"];for(let r of i){let n=e[r];n==null||n===""?delete s[r]:s[r]=n}e.show_speed===!1?s.show_speed=!1:delete s.show_speed,this._fireConfigChanged(s)}render(){let t=this.hass;if(!t||!this._config)return h;let e=this._getPorts(),s={title:this._config.title||"",columns:this._config.columns||k.columns,led_mode:this._config.led_mode||k.led_mode,speed_format:this._config.speed_format||k.speed_format,show_speed:this._config.show_speed!==!1};return S`
      <div class="ps-editor">
        <h3>Ports</h3>
        <div class="ps-editor-ports">
          ${e.map((i,r)=>S`
            <div class="ps-editor-port-row">
              <div class="ps-editor-port-row-main">
                <ha-entity-picker
                  .hass=${t}
                  .value=${i.entity}
                  .index=${r}
                  allow-custom-entity
                  .includeDomains=${["sensor"]}
                  @value-changed=${n=>this._portEntityChanged(r,n)}
                ></ha-entity-picker>
                ${vt(r,e.length,(n,c)=>this._movePort(n,c),n=>this._removePort(n))}
              </div>
              <div class="ps-editor-port-row-fields">
                <ha-textfield
                  .label=${"Label"}
                  .value=${i.label||""}
                  @input=${n=>this._portLabelChanged(r,n)}
                ></ha-textfield>
              </div>
            </div>
          `)}
        </div>
        <ha-entity-picker
          class="ps-editor-add-port"
          .hass=${t}
          .includeDomains=${["sensor"]}
          @value-changed=${this._addPort}
        ></ha-entity-picker>
        <h3>Card Settings</h3>
        <ha-form
          .hass=${t}
          .data=${s}
          .schema=${kt}
          .computeLabel=${yt}
          @value-changed=${this._settingsChanged}
        ></ha-form>
      </div>
    `}static get styles(){return w`
      .ps-editor { padding: 0; }
      h3 { margin: 16px 0 8px; font-size: 14px; font-weight: 500; }
      h3:first-child { margin-top: 0; }
      .ps-editor-ports { display: flex; flex-direction: column; gap: var(--pulse-space-element); }
      .ps-editor-port-row { border: 1px solid var(--pulse-border-divider); border-radius: var(--pulse-radius-element); padding: var(--pulse-space-element); }
      .ps-editor-port-row-main { display: flex; align-items: center; gap: var(--pulse-space-tight); }
      .ps-editor-port-row-main ha-entity-picker { flex: 1; }
      .ps-editor-port-row-fields { display: flex; gap: var(--pulse-space-element); margin-top: 4px; }
      .ps-editor-port-row-fields ha-textfield { flex: 1; }
      ${gt}
      .ps-editor-add-port { display: block; margin-top: 8px; }
    `}};customElements.get(Y)||customElements.define(Y,Q);
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
