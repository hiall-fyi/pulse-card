var T=globalThis,N=T.ShadowRoot&&(T.ShadyCSS===void 0||T.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,I=Symbol(),tt=new WeakMap,x=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==I)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(N&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=tt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&tt.set(e,t))}return t}toString(){return this.cssText}},et=n=>new x(typeof n=="string"?n:n+"",void 0,I),j=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((s,i,o)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[o+1],n[0]);return new x(e,n,I)},st=(n,t)=>{if(N)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=T.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,n.appendChild(s)}},z=N?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return et(e)})(n):n;var{is:$t,defineProperty:yt,getOwnPropertyDescriptor:vt,getOwnPropertyNames:bt,getOwnPropertySymbols:At,getPrototypeOf:Et}=Object,H=globalThis,it=H.trustedTypes,St=it?it.emptyScript:"",xt=H.reactiveElementPolyfillSupport,C=(n,t)=>n,B={toAttribute(n,t){switch(t){case Boolean:n=n?St:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},ot=(n,t)=>!$t(n,t),nt={attribute:!0,type:String,converter:B,reflect:!1,useDefault:!1,hasChanged:ot};Symbol.metadata??=Symbol("metadata"),H.litPropertyMetadata??=new WeakMap;var f=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=nt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&yt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:o}=vt(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:i,set(r){let l=i?.call(this);o?.call(this,r),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??nt}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;let t=Et(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){let e=this.properties,s=[...bt(e),...At(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(z(i))}else t!==void 0&&e.push(z(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return st(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let o=(s.converter?.toAttribute!==void 0?s.converter:B).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let o=s.getPropertyOptions(i),r=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:B;this._$Em=i;let l=r.fromAttribute(e,o.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,e,s,i=!1,o){if(t!==void 0){let r=this.constructor;if(i===!1&&(o=this[t]),s??=r.getPropertyOptions(t),!((s.hasChanged??ot)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},r){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),o!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,o]of s){let{wrapped:r}=o,l=this[i];r!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,o,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};f.elementStyles=[],f.shadowRootOptions={mode:"open"},f[C("elementProperties")]=new Map,f[C("finalized")]=new Map,xt?.({ReactiveElement:f}),(H.reactiveElementVersions??=[]).push("2.1.2");var G=globalThis,rt=n=>n,R=G.trustedTypes,at=R?R.createPolicy("lit-html",{createHTML:n=>n}):void 0,ut="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,mt="?"+_,Ct=`<${mt}>`,v=document,L=()=>v.createComment(""),P=n=>n===null||typeof n!="object"&&typeof n!="function",J=Array.isArray,wt=n=>J(n)||typeof n?.[Symbol.iterator]=="function",F=`[ 	
\f\r]`,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lt=/-->/g,ht=/>/g,$=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ct=/'/g,dt=/"/g,ft=/^(?:script|style|textarea|title)$/i,Y=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),k=Y(1),Dt=Y(2),It=Y(3),b=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),pt=new WeakMap,y=v.createTreeWalker(v,129);function _t(n,t){if(!J(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return at!==void 0?at.createHTML(t):t}var Lt=(n,t)=>{let e=n.length-1,s=[],i,o=t===2?"<svg>":t===3?"<math>":"",r=w;for(let l=0;l<e;l++){let a=n[l],c,d,h=-1,m=0;for(;m<a.length&&(r.lastIndex=m,d=r.exec(a),d!==null);)m=r.lastIndex,r===w?d[1]==="!--"?r=lt:d[1]!==void 0?r=ht:d[2]!==void 0?(ft.test(d[2])&&(i=RegExp("</"+d[2],"g")),r=$):d[3]!==void 0&&(r=$):r===$?d[0]===">"?(r=i??w,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,c=d[1],r=d[3]===void 0?$:d[3]==='"'?dt:ct):r===dt||r===ct?r=$:r===lt||r===ht?r=w:(r=$,i=void 0);let u=r===$&&n[l+1].startsWith("/>")?" ":"";o+=r===w?a+Ct:h>=0?(s.push(c),a.slice(0,h)+ut+a.slice(h)+_+u):a+_+(h===-2?l:u)}return[_t(n,o+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},O=class n{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,r=0,l=t.length-1,a=this.parts,[c,d]=Lt(t,e);if(this.el=n.createElement(c,s),y.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=y.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let h of i.getAttributeNames())if(h.endsWith(ut)){let m=d[r++],u=i.getAttribute(h).split(_),U=/([.?@])?(.*)/.exec(m);a.push({type:1,index:o,name:U[2],strings:u,ctor:U[1]==="."?V:U[1]==="?"?W:U[1]==="@"?q:S}),i.removeAttribute(h)}else h.startsWith(_)&&(a.push({type:6,index:o}),i.removeAttribute(h));if(ft.test(i.tagName)){let h=i.textContent.split(_),m=h.length-1;if(m>0){i.textContent=R?R.emptyScript:"";for(let u=0;u<m;u++)i.append(h[u],L()),y.nextNode(),a.push({type:2,index:++o});i.append(h[m],L())}}}else if(i.nodeType===8)if(i.data===mt)a.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(_,h+1))!==-1;)a.push({type:7,index:o}),h+=_.length-1}o++}}static createElement(t,e){let s=v.createElement("template");return s.innerHTML=t,s}};function E(n,t,e=n,s){if(t===b)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl,o=P(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(n),i._$AT(n,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=E(n,i._$AS(n,t.values),i,s)),t}var K=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??v).importNode(e,!0);y.currentNode=i;let o=y.nextNode(),r=0,l=0,a=s[0];for(;a!==void 0;){if(r===a.index){let c;a.type===2?c=new M(o,o.nextSibling,this,t):a.type===1?c=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(c=new Z(o,this,t)),this._$AV.push(c),a=s[++l]}r!==a?.index&&(o=y.nextNode(),r++)}return y.currentNode=v,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},M=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),P(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==b&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):wt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(v.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=O.createElement(_t(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let o=new K(i,this),r=o.u(this.options);o.p(e),this.T(r),this._$AH=o}}_$AC(t){let e=pt.get(t.strings);return e===void 0&&pt.set(t.strings,e=new O(t)),e}k(t){J(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let o of t)i===e.length?e.push(s=new n(this.O(L()),this.O(L()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=rt(t).nextSibling;rt(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},S=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(t,e=this,s,i){let o=this.strings,r=!1;if(o===void 0)t=E(this,t,e,0),r=!P(t)||t!==this._$AH&&t!==b,r&&(this._$AH=t);else{let l=t,a,c;for(t=o[0],a=0;a<o.length-1;a++)c=E(this,l[s+a],e,a),c===b&&(c=this._$AH[a]),r||=!P(c)||c!==this._$AH[a],c===p?t=p:t!==p&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}r&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},V=class extends S{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},W=class extends S{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}},q=class extends S{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??p)===b)return;let s=this._$AH,i=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==p&&(s===p||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Z=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}};var Pt=G.litHtmlPolyfillSupport;Pt?.(O,M),(G.litHtmlVersions??=[]).push("3.3.2");var gt=(n,t,e)=>{let s=e?.renderBefore??t,i=s._$litPart$;if(i===void 0){let o=e?.renderBefore??null;s._$litPart$=i=new M(t.insertBefore(L(),o),o,void 0,e??{})}return i._$AI(n),i};var X=globalThis,g=class extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=gt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return b}};g._$litElement$=!0,g.finalized=!0,X.litElementHydrateSupport?.({LitElement:g});var Ot=X.litElementPolyfillSupport;Ot?.({LitElement:g});(X.litElementVersions??=[]).push("4.2.2");var A={min:0,max:100,height:"8px",border_radius:"4px",decimal:null,entity_row:!1,complementary:!1,limit_value:!1,columns:1,animation:{state:"on",speed:.8,effect:"none"},positions:{icon:"off",name:"outside",value:"outside",indicator:"off"},tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}};var D=[{value:"outside",label:"Outside"},{value:"inside",label:"Inside"},{value:"off",label:"Off"}],Mt=[{name:"title",label:"Title",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"height",label:"Height",selector:{text:{}}},{name:"border_radius",label:"Border Radius",selector:{text:{}}}]},{name:"",type:"grid",schema:[{name:"color",label:"Color",selector:{text:{}}},{name:"decimal",label:"Decimals",selector:{number:{min:0,max:6,mode:"box"}}}]}],Ut=[{name:"",type:"grid",schema:[{name:"columns",label:"Columns",selector:{number:{min:1,max:6,mode:"box"}}},{name:"gap",label:"Gap",selector:{text:{}}}]},{name:"",type:"grid",schema:[{name:"min",label:"Min",selector:{number:{mode:"box"}}},{name:"max",label:"Max",selector:{number:{mode:"box"}}}]},{name:"",type:"grid",schema:[{name:"target_value",label:"Target",selector:{text:{}}},{name:"bar_width",label:"Bar Width (%)",selector:{number:{min:1,max:100,mode:"box"}}}]}],Tt=[{name:"",type:"grid",schema:[{name:"pos_name",label:"Name",selector:{select:{options:D,mode:"dropdown"}}},{name:"pos_value",label:"Value",selector:{select:{options:D,mode:"dropdown"}}}]},{name:"",type:"grid",schema:[{name:"pos_icon",label:"Icon",selector:{select:{options:D,mode:"dropdown"}}},{name:"pos_indicator",label:"Indicator",selector:{select:{options:D,mode:"dropdown"}}}]},{name:"",type:"grid",schema:[{name:"indicator_period",label:"Lookback (min)",selector:{number:{min:1,max:1440,mode:"box"}}},{name:"show_delta",label:"Show Change Amount",selector:{boolean:{}}}]},{name:"",type:"grid",schema:[{name:"anim_effect",label:"Effect",selector:{select:{options:[{value:"none",label:"None"},{value:"charge",label:"Charge"}],mode:"dropdown"}}},{name:"anim_speed",label:"Speed (s)",selector:{number:{min:0,max:5,step:.1,mode:"box"}}}]}],Q=class extends g{_helpersLoaded=!1;static get properties(){return{hass:{attribute:!1},_config:{state:!0}}}async connectedCallback(){if(super.connectedCallback(),!this._helpersLoaded&&window.loadCardHelpers)try{let t=await window.loadCardHelpers();this._helpersLoaded=!0,(await t.createCardElement({type:"entities",entities:[]})).constructor.getConfigElement()}catch(t){console.warn("Pulse Card: failed to load card helpers:",t)}}setConfig(t){this._config=t}_getEntities(){let t=this._config;return t.entities?t.entities.map(e=>typeof e=="string"?{entity:e}:{...e}):t.entity?[{entity:t.entity}]:[]}_fireConfigChanged(t){this._config=t;let e=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}_entityChanged(t,e){let s=e.detail.value,i=this._getEntities();s===""||s===void 0?i.splice(t,1):i[t]={...i[t],entity:s},this._updateEntities(i)}_entityFieldChanged(t,e,s){let i=s.target.value??"",o=this._getEntities();i===""||i===void 0?delete o[t][e]:o[t]={...o[t],[e]:i},this._updateEntities(o)}_removeEntity(t){let e=this._getEntities();e.splice(t,1),this._updateEntities(e)}_moveEntity(t,e){let s=this._getEntities(),i=t+e;i<0||i>=s.length||([s[t],s[i]]=[s[i],s[t]],this._updateEntities(s))}_addEntity(t){let e=t.detail.value;if(!e)return;let s=this._getEntities();s.push({entity:e}),t.target.value="",this._updateEntities(s)}_updateEntities(t){let e={...this._config},s=this._config;t.length<=1&&!s.entities?(e.entity=t[0]?.entity||"",delete e.entities):(e.entities=t,delete e.entity),this._fireConfigChanged(e)}_settingsChanged(t){t.stopPropagation();let e=t.detail.value,s={...this._config},i=["title","height","border_radius","color","columns","gap","min","max","decimal","bar_width"];for(let l of i){let a=e[l];a==null||a===""?delete s[l]:s[l]=a}let o=["complementary","limit_value","entity_row"];for(let l of o)e[l]===!0?s[l]=!0:e[l]===!1&&delete s[l];this._applyTarget(s,e.target_value);let r=[["positions",{pos_name:"name",pos_value:"value",pos_icon:"icon",pos_indicator:"indicator"}],["animation",{anim_effect:"effect",anim_speed:"speed"},(l,a)=>l==="effect"&&a==="none"?void 0:a],["indicator",{pos_indicator:"show",indicator_period:"period",show_delta:"show_delta"},(l,a)=>l==="show"?a&&a!=="off"?!0:void 0:l==="show_delta"?a===!0?!0:void 0:a]];for(let[l,a,c]of r){let d={...s[l]||{}};for(let[h,m]of Object.entries(a)){let u=e[h];c&&(u=c(m,u)),u==null||u===""?delete d[m]:d[m]=u}Object.keys(d).length>0?s[l]=d:delete s[l]}this._fireConfigChanged(s)}_applyTarget(t,e){if(e==null||e===""){delete t.target;return}let s=parseFloat(e),i=isNaN(s)?e:s,o=this._config?.target;typeof o=="object"&&o!==null?t.target={...o,value:i}:t.target=i}_computeLabel(t){return t.label||t.name||""}render(){let t=this.hass;if(!t||!this._config)return p;let e=this._getEntities(),s=this._config.target,i="";s!=null&&(typeof s=="object"&&s.value!==void 0?i=String(s.value):i=String(s));let o={title:this._config.title||"",height:this._config.height||"",border_radius:this._config.border_radius||"",color:this._config.color||"",decimal:this._config.decimal??"",columns:this._config.columns||A.columns,gap:this._config.gap||"",target_value:i,bar_width:this._config.bar_width??"",min:this._config.min??"",max:this._config.max??"",pos_name:this._config.positions?.name??A.positions.name,pos_value:this._config.positions?.value??A.positions.value,pos_icon:this._config.positions?.icon??A.positions.icon,pos_indicator:this._config.positions?.indicator??A.positions.indicator,indicator_period:this._config.indicator?.period??"",show_delta:this._config.indicator?.show_delta||!1,anim_effect:this._config.animation?.effect??A.animation.effect,anim_speed:this._config.animation?.speed??""};return k`
      <div class="editor">
        <h3>Entities</h3>
        <div class="entities">
          ${e.map((r,l)=>k`
              <div class="entity-row">
                <div class="entity-row-main">
                  <ha-entity-picker
                    .hass=${t}
                    .value=${r.entity}
                    .index=${l}
                    allow-custom-entity
                    @value-changed=${a=>this._entityChanged(l,a)}
                  ></ha-entity-picker>
                  ${e.length>1?k`
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
                  `:p}
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
          .schema=${Mt}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._settingsChanged}
        ></ha-form>
        <h3>Layout</h3>
        <ha-form
          .hass=${t}
          .data=${o}
          .schema=${Ut}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._settingsChanged}
        ></ha-form>
        <h3>Display</h3>
        <ha-form
          .hass=${t}
          .data=${o}
          .schema=${Tt}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._settingsChanged}
        ></ha-form>
      </div>
    `}static get styles(){return j`
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
    `}};customElements.get("pulse-card-editor")||customElements.define("pulse-card-editor",Q);export{Q as PulseCardEditor};
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
