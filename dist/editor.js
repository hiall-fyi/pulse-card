var U=globalThis,H=U.ShadowRoot&&(U.ShadyCSS===void 0||U.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,I=Symbol(),se=new WeakMap,S=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==I)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(H&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=se.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&se.set(t,e))}return e}toString(){return this.cssText}},ne=n=>new S(typeof n=="string"?n:n+"",void 0,I),z=(n,...e)=>{let t=n.length===1?n[0]:e.reduce((i,s,o)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1],n[0]);return new S(t,n,I)},oe=(n,e)=>{if(H)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let i=document.createElement("style"),s=U.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)}},B=H?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return ne(t)})(n):n;var{is:be,defineProperty:xe,getOwnPropertyDescriptor:we,getOwnPropertyNames:Ae,getOwnPropertySymbols:Ee,getPrototypeOf:Se}=Object,R=globalThis,re=R.trustedTypes,Ce=re?re.emptyScript:"",ke=R.reactiveElementPolyfillSupport,C=(n,e)=>n,F={toAttribute(n,e){switch(e){case Boolean:n=n?Ce:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},le=(n,e)=>!be(n,e),ae={attribute:!0,type:String,converter:F,reflect:!1,useDefault:!1,hasChanged:le};Symbol.metadata??=Symbol("metadata"),R.litPropertyMetadata??=new WeakMap;var m=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ae){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&xe(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){let{get:s,set:o}=we(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:s,set(a){let l=s?.call(this);o?.call(this,a),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ae}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;let e=Se(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){let t=this.properties,i=[...Ae(t),...Ee(t)];for(let s of i)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[t,i]of this.elementProperties){let s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let s of i)t.unshift(B(s))}else e!==void 0&&t.push(B(e));return t}static _$Eu(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return oe(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){let o=(i.converter?.toAttribute!==void 0?i.converter:F).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){let i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let o=i.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:F;this._$Em=s;let l=a.fromAttribute(t,o.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(e,t,i,s=!1,o){if(e!==void 0){let a=this.constructor;if(s===!1&&(o=this[e]),i??=a.getPropertyOptions(e),!((i.hasChanged??le)(o,t)||i.useDefault&&i.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:o},a){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),o!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,o]of i){let{wrapped:a}=o,l=this[s];a!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,o,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};m.elementStyles=[],m.shadowRootOptions={mode:"open"},m[C("elementProperties")]=new Map,m[C("finalized")]=new Map,ke?.({ReactiveElement:m}),(R.reactiveElementVersions??=[]).push("2.1.2");var J=globalThis,ce=n=>n,j=J.trustedTypes,he=j?j.createPolicy("lit-html",{createHTML:n=>n}):void 0,_e="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,ge="?"+_,Le=`<${ge}>`,v=document,L=()=>v.createComment(""),P=n=>n===null||typeof n!="object"&&typeof n!="function",X=Array.isArray,Pe=n=>X(n)||typeof n?.[Symbol.iterator]=="function",V=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,de=/-->/g,pe=/>/g,y=RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ue=/'/g,fe=/"/g,ye=/^(?:script|style|textarea|title)$/i,Q=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),T=Q(1),Fe=Q(2),Ve=Q(3),b=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),me=new WeakMap,$=v.createTreeWalker(v,129);function $e(n,e){if(!X(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return he!==void 0?he.createHTML(e):e}var Oe=(n,e)=>{let t=n.length-1,i=[],s,o=e===2?"<svg>":e===3?"<math>":"",a=k;for(let l=0;l<t;l++){let r=n[l],c,h,d=-1,u=0;for(;u<r.length&&(a.lastIndex=u,h=a.exec(r),h!==null);)u=a.lastIndex,a===k?h[1]==="!--"?a=de:h[1]!==void 0?a=pe:h[2]!==void 0?(ye.test(h[2])&&(s=RegExp("</"+h[2],"g")),a=y):h[3]!==void 0&&(a=y):a===y?h[0]===">"?(a=s??k,d=-1):h[1]===void 0?d=-2:(d=a.lastIndex-h[2].length,c=h[1],a=h[3]===void 0?y:h[3]==='"'?fe:ue):a===fe||a===ue?a=y:a===de||a===pe?a=k:(a=y,s=void 0);let f=a===y&&n[l+1].startsWith("/>")?" ":"";o+=a===k?r+Le:d>=0?(i.push(c),r.slice(0,d)+_e+r.slice(d)+_+f):r+_+(d===-2?l:f)}return[$e(n,o+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},O=class n{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,a=0,l=e.length-1,r=this.parts,[c,h]=Oe(e,t);if(this.el=n.createElement(c,i),$.currentNode=this.el.content,t===2||t===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=$.nextNode())!==null&&r.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(let d of s.getAttributeNames())if(d.endsWith(_e)){let u=h[a++],f=s.getAttribute(d).split(_),N=/([.?@])?(.*)/.exec(u);r.push({type:1,index:o,name:N[2],strings:f,ctor:N[1]==="."?W:N[1]==="?"?q:N[1]==="@"?G:A}),s.removeAttribute(d)}else d.startsWith(_)&&(r.push({type:6,index:o}),s.removeAttribute(d));if(ye.test(s.tagName)){let d=s.textContent.split(_),u=d.length-1;if(u>0){s.textContent=j?j.emptyScript:"";for(let f=0;f<u;f++)s.append(d[f],L()),$.nextNode(),r.push({type:2,index:++o});s.append(d[u],L())}}}else if(s.nodeType===8)if(s.data===ge)r.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf(_,d+1))!==-1;)r.push({type:7,index:o}),d+=_.length-1}o++}}static createElement(e,t){let i=v.createElement("template");return i.innerHTML=e,i}};function w(n,e,t=n,i){if(e===b)return e;let s=i!==void 0?t._$Co?.[i]:t._$Cl,o=P(e)?void 0:e._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(n),s._$AT(n,t,i)),i!==void 0?(t._$Co??=[])[i]=s:t._$Cl=s),s!==void 0&&(e=w(n,s._$AS(n,e.values),s,i)),e}var K=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??v).importNode(t,!0);$.currentNode=s;let o=$.nextNode(),a=0,l=0,r=i[0];for(;r!==void 0;){if(a===r.index){let c;r.type===2?c=new M(o,o.nextSibling,this,e):r.type===1?c=new r.ctor(o,r.name,r.strings,this,e):r.type===6&&(c=new Z(o,this,e)),this._$AV.push(c),r=i[++l]}a!==r?.index&&(o=$.nextNode(),a++)}return $.currentNode=v,s}p(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},M=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=w(this,e,t),P(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==b&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Pe(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==p&&P(this._$AH)?this._$AA.nextSibling.data=e:this.T(v.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=O.createElement($e(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{let o=new K(s,this),a=o.u(this.options);o.p(t),this.T(a),this._$AH=o}}_$AC(e){let t=me.get(e.strings);return t===void 0&&me.set(e.strings,t=new O(e)),t}k(e){X(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,s=0;for(let o of e)s===t.length?t.push(i=new n(this.O(L()),this.O(L()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let i=ce(e).nextSibling;ce(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},A=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(e,t=this,i,s){let o=this.strings,a=!1;if(o===void 0)e=w(this,e,t,0),a=!P(e)||e!==this._$AH&&e!==b,a&&(this._$AH=e);else{let l=e,r,c;for(e=o[0],r=0;r<o.length-1;r++)c=w(this,l[i+r],t,r),c===b&&(c=this._$AH[r]),a||=!P(c)||c!==this._$AH[r],c===p?e=p:e!==p&&(e+=(c??"")+o[r+1]),this._$AH[r]=c}a&&!s&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},W=class extends A{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}},q=class extends A{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}},G=class extends A{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){if((e=w(this,e,t,0)??p)===b)return;let i=this._$AH,s=e===p&&i!==p||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==p&&(i===p||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Z=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){w(this,e)}};var Me=J.litHtmlPolyfillSupport;Me?.(O,M),(J.litHtmlVersions??=[]).push("3.3.2");var ve=(n,e,t)=>{let i=t?.renderBefore??e,s=i._$litPart$;if(s===void 0){let o=t?.renderBefore??null;i._$litPart$=s=new M(e.insertBefore(L(),o),o,void 0,t??{})}return s._$AI(n),s};var Y=globalThis,g=class extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ve(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return b}};g._$litElement$=!0,g.finalized=!0,Y.litElementHydrateSupport?.({LitElement:g});var Te=Y.litElementPolyfillSupport;Te?.({LitElement:g});(Y.litElementVersions??=[]).push("4.2.2");var x={min:0,max:100,height:"8px",border_radius:"4px",decimal:null,entity_row:!1,complementary:!1,limit_value:!1,columns:1,animation:{state:"on",speed:.8,effect:"none"},positions:{icon:"off",name:"outside",value:"outside",indicator:"off"},tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}};function Ne(){if(typeof document>"u")return"#44739e";let n=getComputedStyle(document.documentElement).getPropertyValue("--primary-text-color").trim();return E(n)||"#44739e"}function ee(){if(typeof document>"u")return"#03a9f4";let n=getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim();return E(n)||"#03a9f4"}var te=new Map;function E(n){if(!n||typeof n!="string")return"";let e=n.trim();if(!e)return"";if(te.has(e))return te.get(e);let t=Ue(e);return te.set(e,t),t}function Ue(n){if(/^#[0-9a-f]{6}$/i.test(n))return n.toLowerCase();if(/^#[0-9a-f]{3}$/i.test(n))return`#${n[1]}${n[1]}${n[2]}${n[2]}${n[3]}${n[3]}`.toLowerCase();let e=n.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);if(e){let t=i=>parseInt(i,10).toString(16).padStart(2,"0");return`#${t(e[1])}${t(e[2])}${t(e[3])}`}if(n.startsWith("var("))return"";if(typeof document<"u"){let t=document.createElement("span");t.style.color=n,document.body.appendChild(t);let i=getComputedStyle(t).color;t.remove();let s=i.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);if(s){let o=a=>parseInt(a,10).toString(16).padStart(2,"0");return`#${o(s[1])}${o(s[2])}${o(s[3])}`}}return""}var D=[{value:"outside",label:"Outside"},{value:"inside",label:"Inside"},{value:"off",label:"Off"}],He=[{value:"avg",label:"Average"},{value:"min",label:"Min"},{value:"max",label:"Max"},{value:"median",label:"Median"},{value:"first",label:"First"},{value:"last",label:"Last"},{value:"sum",label:"Sum"},{value:"delta",label:"Delta"},{value:"diff",label:"Diff"}];function Re(n){return[{name:"",type:"grid",column_min_width:"120px",schema:[{name:"title",label:"Title",selector:{text:{}}},{name:"layout",label:"Layout",selector:{select:{options:[{value:"default",label:"Default"},{value:"compact",label:"Compact"}],mode:"dropdown"}}},{name:"color",label:"Color",selector:{text:{}}}]},{name:"",type:"grid",column_min_width:"120px",schema:[{name:"height",label:"Height",selector:{text:{}}},{name:"border_radius",label:"Radius",selector:{text:{}}},{name:"font_size",label:"Font Size",selector:{text:{}}}]},{name:"",type:"grid",column_min_width:"120px",schema:[{name:"pos_name",label:"Name",selector:{select:{options:D,mode:"dropdown"}}},{name:"pos_value",label:"Value",selector:{select:{options:D,mode:"dropdown"}}},{name:"pos_icon",label:"Icon",selector:{select:{options:D,mode:"dropdown"}}}]},{name:"sparkline_show",label:"Sparkline",selector:{boolean:{}}},...n.sparkline_show?[{name:"",type:"grid",column_min_width:"120px",schema:[{name:"sparkline_hours",label:"Hours",selector:{number:{min:1,max:168,mode:"box"}}},{name:"sparkline_line_width",label:"Line Width",selector:{number:{min:.5,max:5,step:.5,mode:"box"}}},{name:"sparkline_points",label:"Points/Hour",selector:{number:{min:.25,max:12,step:.25,mode:"box"}}}]},{name:"",type:"grid",column_min_width:"120px",schema:[{name:"sparkline_smoothing",label:"Smoothing",selector:{boolean:{}}},{name:"sparkline_aggregate",label:"Aggregate",selector:{select:{options:He,mode:"dropdown"}}},{name:"sparkline_interval",label:"Refresh (s)",selector:{number:{min:30,max:3600,mode:"box"}}}]}]:[]]}var je=[{type:"expandable",name:"",flatten:!0,title:"Bar Limits",schema:[{name:"",type:"grid",column_min_width:"120px",schema:[{name:"min",label:"Min",selector:{number:{mode:"box"}}},{name:"max",label:"Max",selector:{number:{mode:"box"}}},{name:"target_value",label:"Target",selector:{text:{}}}]},{name:"",type:"grid",column_min_width:"120px",schema:[{name:"bar_width",label:"Bar Width (%)",selector:{number:{min:1,max:100,mode:"box"}}},{name:"columns",label:"Columns",selector:{number:{min:1,max:6,mode:"box"}}},{name:"gap",label:"Gap",selector:{text:{}}}]},{name:"",type:"grid",column_min_width:"120px",schema:[{name:"decimal",label:"Decimals",selector:{number:{min:0,max:6,mode:"box"}}},{name:"complementary",label:"Invert Fill",selector:{boolean:{}}},{name:"limit_value",label:"Clamp Value",selector:{boolean:{}}}]}]},{type:"expandable",name:"",flatten:!0,title:"Indicator",schema:[{name:"",type:"grid",column_min_width:"120px",schema:[{name:"pos_indicator",label:"Position",selector:{select:{options:D,mode:"dropdown"}}},{name:"indicator_period",label:"Lookback (min)",selector:{number:{min:1,max:1440,mode:"box"}}}]},{name:"",type:"grid",column_min_width:"120px",schema:[{name:"show_delta",label:"Show Delta",selector:{boolean:{}}},{name:"indicator_inverted",label:"Inverted",selector:{boolean:{}}}]}]},{type:"expandable",name:"",flatten:!0,title:"Animation",schema:[{name:"",type:"grid",column_min_width:"120px",schema:[{name:"anim_effect",label:"Effect",selector:{select:{options:[{value:"none",label:"None"},{value:"charge",label:"Charge"}],mode:"dropdown"}}},{name:"anim_speed",label:"Speed (s)",selector:{number:{min:0,max:5,step:.1,mode:"box"}}}]}]}],ie=class extends g{_helpersLoaded=!1;static get properties(){return{hass:{attribute:!1},_config:{state:!0}}}async connectedCallback(){if(super.connectedCallback(),!this._helpersLoaded&&window.loadCardHelpers)try{let e=await window.loadCardHelpers();this._helpersLoaded=!0,(await e.createCardElement({type:"entities",entities:[]})).constructor.getConfigElement()}catch(e){console.warn("Pulse Card: failed to load card helpers:",e)}}setConfig(e){this._config=e,this._needsSwatchInject=!0}updated(){this._needsSwatchInject&&(this._needsSwatchInject=!1,this._injectColorSwatches())}_injectColorSwatches(){let e=this.shadowRoot;if(e)for(let t of e.querySelectorAll("ha-textfield")){if(t.label!=="Color"||t.closest(".color-field"))continue;let i=t.parentElement;if(!i||i.querySelector('input[type="color"]'))continue;let s=document.createElement("div");s.className="color-field",i.insertBefore(s,t),s.appendChild(t);let o=document.createElement("input");o.type="color",o.title="Pick color",o.value=E(t.value)||ee(),s.appendChild(o),o.addEventListener("input",()=>{t.value=o.value,t.dispatchEvent(new Event("input",{bubbles:!0}))}),t.addEventListener("input",()=>{o.value=E(t.value)||ee()})}}_getEntities(){let e=this._config;return e.entities?e.entities.map(t=>typeof t=="string"?{entity:t}:{...t}):e.entity?[{entity:e.entity}]:[]}_fireConfigChanged(e){this._config=e,this._needsSwatchInject=!0;let t=new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}_entityChanged(e,t){let i=t.detail.value,s=this._getEntities();i===""||i===void 0?s.splice(e,1):s[e]={...s[e],entity:i},this._updateEntities(s)}_entityFieldChanged(e,t,i){let s=i.target.value??"",o=this._getEntities();s===""||s===void 0?delete o[e][t]:o[e]={...o[e],[t]:s},this._updateEntities(o)}_entitySecondaryChanged(e,t,i){let s=i.target.value??"",o=this._getEntities(),a=o[e].secondary_info||{};if(s===""||s===void 0){let l={...a};delete l[t],Object.keys(l).length===0?delete o[e].secondary_info:o[e]={...o[e],secondary_info:l}}else o[e]={...o[e],secondary_info:{...a,[t]:s}};this._updateEntities(o)}_removeEntity(e){let t=this._getEntities();t.splice(e,1),this._updateEntities(t)}_moveEntity(e,t){let i=this._getEntities(),s=e+t;s<0||s>=i.length||([i[e],i[s]]=[i[s],i[e]],this._updateEntities(i))}_addEntity(e){let t=e.detail.value;if(!t)return;let i=this._getEntities();i.push({entity:t}),e.target.value="",this._updateEntities(i)}_updateEntities(e){let t={...this._config},i=this._config;e.length<=1&&!i.entities?(t.entity=e[0]?.entity||"",delete t.entities):(t.entities=e,delete t.entity),this._fireConfigChanged(t)}_settingsChanged(e){e.stopPropagation();let t=e.detail.value,i={...this._config},s=["title","height","border_radius","color","columns","gap","min","max","decimal","bar_width","font_size"];for(let l of s){let r=t[l];r==null||r===""?delete i[l]:i[l]=r}let o=["complementary","limit_value","entity_row"];for(let l of o)t[l]===!0?i[l]=!0:t[l]===!1&&delete i[l];this._applyTarget(i,t.target_value);let a=[["positions",{pos_name:"name",pos_value:"value",pos_icon:"icon",pos_indicator:"indicator"}],["animation",{anim_effect:"effect",anim_speed:"speed"},(l,r)=>l==="effect"&&r==="none"?void 0:r],["indicator",{pos_indicator:"show",indicator_period:"period",show_delta:"show_delta",indicator_inverted:"inverted"},(l,r)=>l==="show"?r&&r!=="off"?!0:void 0:l==="show_delta"||l==="inverted"?r===!0?!0:void 0:r]];for(let[l,r,c]of a){let h={...i[l]||{}};for(let[d,u]of Object.entries(r)){let f=t[d];c&&(f=c(u,f)),f==null||f===""?delete h[u]:h[u]=f}Object.keys(h).length>0?i[l]=h:delete i[l]}if(t.sparkline_show===!0){let r={...typeof i.sparkline=="object"&&i.sparkline!==null?i.sparkline:{},show:!0},c={sparkline_hours:"hours_to_show",sparkline_line_width:"line_width",sparkline_points:"points_per_hour",sparkline_aggregate:"aggregate_func",sparkline_interval:"update_interval"};for(let[h,d]of Object.entries(c)){if(!(h in t))continue;let u=t[h];u==null||u===""||d==="aggregate_func"&&u==="avg"?delete r[d]:r[d]=u}"sparkline_smoothing"in t&&(t.sparkline_smoothing===!1?r.smoothing=!1:delete r.smoothing),i.sparkline=r}else t.sparkline_show===!1&&delete i.sparkline;t.layout&&t.layout!=="default"?i.layout=t.layout:delete i.layout,this._fireConfigChanged(i)}_applyTarget(e,t){if(t==null||t===""){delete e.target;return}let i=parseFloat(t),s=isNaN(i)?t:i,o=this._config?.target;typeof o=="object"&&o!==null?e.target={...o,value:s}:e.target=s}_computeLabel(e){return e.label||e.name||""}render(){let e=this.hass;if(!e||!this._config)return p;let t=this._getEntities(),i=this._config.target,s="";i!=null&&(typeof i=="object"&&i.value!==void 0?s=String(i.value):s=String(i));let o={title:this._config.title||"",height:this._config.height||"",border_radius:this._config.border_radius||"",color:this._config.color||"",decimal:this._config.decimal??"",columns:this._config.columns||x.columns,gap:this._config.gap||"",target_value:s,bar_width:this._config.bar_width??"",font_size:this._config.font_size||"",complementary:this._config.complementary||!1,limit_value:this._config.limit_value||!1,min:this._config.min??"",max:this._config.max??"",pos_name:this._config.positions?.name??x.positions.name,pos_value:this._config.positions?.value??x.positions.value,pos_icon:this._config.positions?.icon??x.positions.icon,pos_indicator:this._config.positions?.indicator??x.positions.indicator,indicator_period:this._config.indicator?.period??"",show_delta:this._config.indicator?.show_delta||!1,anim_effect:this._config.animation?.effect??x.animation.effect,anim_speed:this._config.animation?.speed??"",sparkline_show:typeof this._config.sparkline=="object"?this._config.sparkline?.show||!1:this._config.sparkline===!0,sparkline_hours:typeof this._config.sparkline=="object"?this._config.sparkline?.hours_to_show??"":"",sparkline_line_width:typeof this._config.sparkline=="object"?this._config.sparkline?.line_width??this._config.sparkline?.stroke_width??"":"",sparkline_points:typeof this._config.sparkline=="object"?this._config.sparkline?.points_per_hour??"":"",sparkline_smoothing:typeof this._config.sparkline=="object"?this._config.sparkline?.smoothing!==!1:!0,sparkline_aggregate:typeof this._config.sparkline=="object"?this._config.sparkline?.aggregate_func??"avg":"avg",sparkline_interval:typeof this._config.sparkline=="object"?this._config.sparkline?.update_interval??"":"",sparkline_color:typeof this._config.sparkline=="object"?this._config.sparkline?.color??"":"",indicator_inverted:this._config.indicator?.inverted||!1,layout:this._config.layout||"default"};return T`
      <div class="editor">
        <h3>Entities</h3>
        <div class="entities">
          ${t.map((a,l)=>T`
              <div class="entity-row">
                <div class="entity-row-main">
                  <ha-entity-picker
                    .hass=${e}
                    .value=${a.entity}
                    .index=${l}
                    allow-custom-entity
                    @value-changed=${r=>this._entityChanged(l,r)}
                  ></ha-entity-picker>
                  ${t.length>1?T`
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
                      .disabled=${l===t.length-1}
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
                    .value=${a.name||""}
                    @input=${r=>this._entityFieldChanged(l,"name",r)}
                  ></ha-textfield>
                  <div class="color-field">
                    <ha-textfield
                      .label=${"Color"}
                      .value=${a.color||""}
                      @input=${r=>this._entityFieldChanged(l,"color",r)}
                    ></ha-textfield>
                    <input type="color"
                      .value=${E(a.color)||ee()}
                      @input=${r=>this._entityFieldChanged(l,"color",r)}
                      title="Pick color"
                    />
                  </div>
                </div>
                <div class="entity-row-fields">
                  <ha-textfield
                    .label=${"Secondary Text"}
                    .value=${a.secondary_info?.text||""}
                    @input=${r=>this._entitySecondaryChanged(l,"text",r)}
                  ></ha-textfield>
                  <ha-textfield
                    .label=${"Secondary Attr"}
                    .value=${a.secondary_info?.attribute||""}
                    @input=${r=>this._entitySecondaryChanged(l,"attribute",r)}
                  ></ha-textfield>
                </div>
                <div class="entity-row-fields">
                  <label class="interactive-toggle">
                    <span>Interactive</span>
                    <ha-switch
                      .checked=${!!a.interactive}
                      @change=${r=>{let c=r.target.checked,h=this._getEntities();c?h[l]={...h[l],interactive:!0}:delete h[l].interactive,this._updateEntities(h)}}
                    ></ha-switch>
                  </label>
                </div>
              </div>
            `)}
        </div>
        <ha-entity-picker
          class="add-entity"
          .hass=${e}
          @value-changed=${this._addEntity}
        ></ha-entity-picker>
        <h3>Card Settings</h3>
        <ha-form
          .hass=${e}
          .data=${o}
          .schema=${Re(o)}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._settingsChanged}
        ></ha-form>
        ${o.sparkline_show?T`
          <div class="color-field sparkline-color">
            <ha-textfield
              .label=${"Sparkline Color"}
              .value=${o.sparkline_color||""}
              @input=${a=>{let l=a.target.value??"",r={...this._config},c=typeof r.sparkline=="object"&&r.sparkline!==null?{...r.sparkline}:{show:!0};l===""?delete c.color:c.color=l,r.sparkline=c,this._fireConfigChanged(r)}}
            ></ha-textfield>
            <input type="color"
              .value=${E(o.sparkline_color)||Ne()}
              @input=${a=>{let l=a.target.value,r={...this._config},c=typeof r.sparkline=="object"&&r.sparkline!==null?{...r.sparkline}:{show:!0};c.color=l,r.sparkline=c,this._fireConfigChanged(r);let h=a.target.parentElement?.querySelector("ha-textfield");h&&(h.value=l)}}
              title="Pick color"
            />
          </div>
        `:p}
        <ha-form
          .hass=${e}
          .data=${o}
          .schema=${je}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._settingsChanged}
        ></ha-form>
      </div>
    `}static get styles(){return z`
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
      .color-field {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .color-field ha-textfield {
        flex: 1;
        min-width: 0;
      }
      .color-field input[type="color"] {
        -webkit-appearance: none;
        appearance: none;
        width: 40px;
        height: 40px;
        padding: 0;
        border: 2px solid var(--divider-color, #e0e0e0);
        border-radius: 6px;
        cursor: pointer;
        background: none;
        flex-shrink: 0;
        overflow: hidden;
      }
      .color-field input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 2px;
      }
      .color-field input[type="color"]::-webkit-color-swatch {
        border: none;
        border-radius: 3px;
      }
      .sparkline-color {
        margin: 4px 0 16px;
      }
      .interactive-toggle {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        color: var(--primary-text-color);
        cursor: pointer;
        padding: 4px 0;
      }
    `}};customElements.get("pulse-card-editor")||customElements.define("pulse-card-editor",ie);export{ie as PulseCardEditor,E as toHex6};
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
