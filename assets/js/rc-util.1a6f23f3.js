import{e as B,r as l,R as Fe}from"./react.ab566f72.js";import{r as _}from"./react-is.f75b9dc6.js";import{c as E,f as N,D as Ke,d as ge,e as h,w as Ee,x as A}from"./@babel_runtime.e68bd868.js";import{R as S,a as ke}from"./react-dom.16493159.js";function Q(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[];return B.Children.forEach(e,function(t){t==null&&!n.keepEmpty||(Array.isArray(t)?r=r.concat(Q(t)):_.isFragment(t)&&t.props?r=r.concat(Q(t.props.children,n)):r.push(t))}),r}var Y={};function xe(e,n){}function He(e,n,r){!n&&!Y[r]&&(e(!1,r),Y[r]=!0)}function $e(e,n){He(xe,e,n)}function Kn(e,n,r){var t=l.useRef({});return(!("value"in t.current)||r(t.current.condition,n))&&(t.current.value=e(),t.current.condition=n),t.current.value}function We(e,n){typeof e=="function"?e(n):E(e)==="object"&&e&&"current"in e&&(e.current=n)}function kn(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var t=n.filter(function(a){return a});return t.length<=1?t[0]:function(a){n.forEach(function(i){We(i,a)})}}function xn(e){var n,r,t=_.isMemo(e)?e.type.type:e.type;return!(typeof t=="function"&&!(!((n=t.prototype)===null||n===void 0)&&n.render)||typeof e=="function"&&!(!((r=e.prototype)===null||r===void 0)&&r.render))}function Hn(e){return e instanceof HTMLElement?e:S.findDOMNode(e)}function $n(e,n){var r=N({},e);return Array.isArray(n)&&n.forEach(function(t){delete r[t]}),r}var he=function(n){return+setTimeout(n,16)},Se=function(n){return clearTimeout(n)};typeof window<"u"&&"requestAnimationFrame"in window&&(he=function(n){return window.requestAnimationFrame(n)},Se=function(n){return window.cancelAnimationFrame(n)});var Z=0,G=new Map;function Ne(e){G.delete(e)}var Ve=function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;Z+=1;var t=Z;function a(i){if(i===0)Ne(t),n();else{var o=he(function(){a(i-1)});G.set(t,o)}}return a(r),t};Ve.cancel=function(e){var n=G.get(e);return Ne(n),Se(n)};function Wn(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,t=new Set;function a(i,o){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,f=t.has(i);if($e(!f,"Warning: There may be circular references"),f)return!1;if(i===o)return!0;if(r&&c>1)return!1;t.add(i);var d=c+1;if(Array.isArray(i)){if(!Array.isArray(o)||i.length!==o.length)return!1;for(var v=0;v<i.length;v++)if(!a(i[v],o[v],d))return!1;return!0}if(i&&o&&E(i)==="object"&&E(o)==="object"){var m=Object.keys(i);return m.length!==Object.keys(o).length?!1:m.every(function(p){return a(i[p],o[p],d)})}return!1}return a(e,n)}function q(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Be(e,n){if(!e)return!1;if(e.contains)return e.contains(n);for(var r=n;r;){if(r===e)return!0;r=r.parentNode}return!1}var X="data-rc-order",Ge="rc-util-key",x=new Map;function we(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.mark;return n?n.startsWith("data-")?n:"data-".concat(n):Ge}function T(e){if(e.attachTo)return e.attachTo;var n=document.querySelector("head");return n||document.body}function qe(e){return e==="queue"?"prependQueue":e?"prepend":"append"}function Me(e){return Array.from((x.get(e)||e).children).filter(function(n){return n.tagName==="STYLE"})}function Re(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!q())return null;var r=n.csp,t=n.prepend,a=document.createElement("style");a.setAttribute(X,qe(t)),r!=null&&r.nonce&&(a.nonce=r==null?void 0:r.nonce),a.innerHTML=e;var i=T(n),o=i.firstChild;if(t){if(t==="queue"){var c=Me(i).filter(function(f){return["prepend","prependQueue"].includes(f.getAttribute(X))});if(c.length)return i.insertBefore(a,c[c.length-1].nextSibling),a}i.insertBefore(a,o)}else i.appendChild(a);return a}function ye(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=T(n);return Me(r).find(function(t){return t.getAttribute(we(n))===e})}function Vn(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=ye(e,n);if(r){var t=T(n);t.removeChild(r)}}function ze(e,n){var r=x.get(e);if(!r||!Be(document,r)){var t=Re("",n),a=t.parentNode;x.set(e,a),e.removeChild(t)}}function Bn(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=T(r);ze(t,r);var a=ye(n,r);if(a){var i,o;if(!((i=r.csp)===null||i===void 0)&&i.nonce&&a.nonce!==((o=r.csp)===null||o===void 0?void 0:o.nonce)){var c;a.nonce=(c=r.csp)===null||c===void 0?void 0:c.nonce}return a.innerHTML!==e&&(a.innerHTML=e),a}var f=Re(e,r);return f.setAttribute(we(r),n),f}function J(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[];return B.Children.forEach(e,function(t){t==null&&!n.keepEmpty||(Array.isArray(t)?r=r.concat(J(t)):_.isFragment(t)&&t.props?r=r.concat(J(t.props.children,n)):r.push(t))}),r}var H={},je=function(n){};function Qe(e,n){}function Ye(e,n){}function Ze(){H={}}function Ae(e,n,r){!n&&!H[r]&&(e(!1,r),H[r]=!0)}function b(e,n){Ae(Qe,e,n)}function Xe(e,n){Ae(Ye,e,n)}b.preMessage=je;b.resetWarned=Ze;b.noteOnce=Xe;function Je(e,n){for(var r=e,t=0;t<n.length;t+=1){if(r==null)return;r=r[n[t]]}return r}function Ce(e,n,r,t){if(!n.length)return r;var a=Ke(n),i=a[0],o=a.slice(1),c;return!e&&typeof i=="number"?c=[]:Array.isArray(e)?c=ge(e):c=N({},e),t&&r===void 0&&o.length===1?delete c[i][o[0]]:c[i]=Ce(c[i],o,r,t),c}function Gn(e,n,r){var t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return n.length&&t&&r===void 0&&!Je(e,n.slice(0,-1))?e:Ce(e,n,r,t)}function en(e){return e instanceof HTMLElement||e instanceof SVGElement}function qn(e){return en(e)?e:e instanceof B.Component?S.findDOMNode(e):null}function nn(e,n,r){var t=l.useRef({});return(!("value"in t.current)||r(t.current.condition,n))&&(t.current.value=e(),t.current.condition=n),t.current.value}function rn(e,n){typeof e=="function"?e(n):E(e)==="object"&&e&&"current"in e&&(e.current=n)}function tn(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var t=n.filter(function(a){return a});return t.length<=1?t[0]:function(a){n.forEach(function(i){rn(i,a)})}}function zn(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return nn(function(){return tn.apply(void 0,n)},n,function(t,a){return t.length===a.length&&t.every(function(i,o){return i===a[o]})})}function jn(e){var n,r,t=_.isMemo(e)?e.type.type:e.type;return!(typeof t=="function"&&!((n=t.prototype)!==null&&n!==void 0&&n.render)||typeof e=="function"&&!((r=e.prototype)!==null&&r!==void 0&&r.render))}function ee(e){var n=l.useRef(!1),r=l.useState(e),t=h(r,2),a=t[0],i=t[1];l.useEffect(function(){return n.current=!1,function(){n.current=!0}},[]);function o(c,f){f&&n.current||i(c)}return[a,o]}function z(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var _e=function(n){return+setTimeout(n,16)},Te=function(n){return clearTimeout(n)};typeof window<"u"&&"requestAnimationFrame"in window&&(_e=function(n){return window.requestAnimationFrame(n)},Te=function(n){return window.cancelAnimationFrame(n)});var ne=0,j=new Map;function be(e){j.delete(e)}var an=function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;ne+=1;var t=ne;function a(i){if(i===0)be(t),n();else{var o=_e(function(){a(i-1)});j.set(t,o)}}return a(r),t};an.cancel=function(e){var n=j.get(e);return be(n),Te(n)};function on(e,n){if(!e)return!1;if(e.contains)return e.contains(n);for(var r=n;r;){if(r===e)return!0;r=r.parentNode}return!1}var re="data-rc-order",un="rc-util-key",$=new Map;function Oe(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.mark;return n?n.startsWith("data-")?n:"data-".concat(n):un}function O(e){if(e.attachTo)return e.attachTo;var n=document.querySelector("head");return n||document.body}function sn(e){return e==="queue"?"prependQueue":e?"prepend":"append"}function Ue(e){return Array.from(($.get(e)||e).children).filter(function(n){return n.tagName==="STYLE"})}function Le(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!z())return null;var r=n.csp,t=n.prepend,a=document.createElement("style");a.setAttribute(re,sn(t)),r!=null&&r.nonce&&(a.nonce=r==null?void 0:r.nonce),a.innerHTML=e;var i=O(n),o=i.firstChild;if(t){if(t==="queue"){var c=Ue(i).filter(function(f){return["prepend","prependQueue"].includes(f.getAttribute(re))});if(c.length)return i.insertBefore(a,c[c.length-1].nextSibling),a}i.insertBefore(a,o)}else i.appendChild(a);return a}function Ie(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=O(n);return Ue(r).find(function(t){return t.getAttribute(Oe(n))===e})}function Qn(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=Ie(e,n);if(r){var t=O(n);t.removeChild(r)}}function cn(e,n){var r=$.get(e);if(!r||!on(document,r)){var t=Le("",n),a=t.parentNode;$.set(e,a),e.removeChild(t)}}function Yn(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=O(r);cn(t,r);var a=Ie(n,r);if(a){var i,o;if((i=r.csp)!==null&&i!==void 0&&i.nonce&&a.nonce!==((o=r.csp)===null||o===void 0?void 0:o.nonce)){var c;a.nonce=(c=r.csp)===null||c===void 0?void 0:c.nonce}return a.innerHTML!==e&&(a.innerHTML=e),a}var f=Le(e,r);return f.setAttribute(Oe(r),n),f}function Pe(e){var n;return e==null||(n=e.getRootNode)===null||n===void 0?void 0:n.call(e)}function fn(e){return Pe(e)!==(e==null?void 0:e.ownerDocument)}function Zn(e){return fn(e)?Pe(e):null}function te(e){var n=l.useRef();n.current=e;var r=l.useCallback(function(){for(var t,a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(t=n.current)===null||t===void 0?void 0:t.call.apply(t,[n].concat(i))},[]);return r}var u={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(n){var r=n.keyCode;if(n.altKey&&!n.ctrlKey||n.metaKey||r>=u.F1&&r<=u.F12)return!1;switch(r){case u.ALT:case u.CAPS_LOCK:case u.CONTEXT_MENU:case u.CTRL:case u.DOWN:case u.END:case u.ESC:case u.HOME:case u.INSERT:case u.LEFT:case u.MAC_FF_META:case u.META:case u.NUMLOCK:case u.NUM_CENTER:case u.PAGE_DOWN:case u.PAGE_UP:case u.PAUSE:case u.PRINT_SCREEN:case u.RIGHT:case u.SHIFT:case u.UP:case u.WIN_KEY:case u.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(n){if(n>=u.ZERO&&n<=u.NINE||n>=u.NUM_ZERO&&n<=u.NUM_MULTIPLY||n>=u.A&&n<=u.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&n===0)return!0;switch(n){case u.SPACE:case u.QUESTION_MARK:case u.NUM_PLUS:case u.NUM_MINUS:case u.NUM_PERIOD:case u.NUM_DIVISION:case u.SEMICOLON:case u.DASH:case u.EQUALS:case u.COMMA:case u.PERIOD:case u.SLASH:case u.APOSTROPHE:case u.SINGLE_QUOTE:case u.OPEN_SQUARE_BRACKET:case u.BACKSLASH:case u.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},y=N({},ke),ln=y.version,dn=y.render,vn=y.unmountComponentAtNode,U;try{var mn=Number((ln||"").split(".")[0]);mn>=18&&(U=y.createRoot)}catch{}function ae(e){var n=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;n&&E(n)==="object"&&(n.usingClientEntryPoint=e)}var C="__rc_react_root__";function pn(e,n){ae(!0);var r=n[C]||U(n);ae(!1),r.render(e),n[C]=r}function gn(e,n){dn(e,n)}function Xn(e,n){if(U){pn(e,n);return}gn(e,n)}function En(e){return W.apply(this,arguments)}function W(){return W=Ee(A().mark(function e(n){return A().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.resolve().then(function(){var a;(a=n[C])===null||a===void 0||a.unmount(),delete n[C]}));case 1:case"end":return t.stop()}},e)})),W.apply(this,arguments)}function hn(e){vn(e)}function Jn(e){return V.apply(this,arguments)}function V(){return V=Ee(A().mark(function e(n){return A().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(U===void 0){t.next=2;break}return t.abrupt("return",En(n));case 2:hn(n);case 3:case"end":return t.stop()}},e)})),V.apply(this,arguments)}function ie(e){var n=l.useRef(!1),r=l.useState(e),t=h(r,2),a=t[0],i=t[1];l.useEffect(function(){return n.current=!1,function(){n.current=!0}},[]);function o(c,f){f&&n.current||i(c)}return[a,o]}const er=function(e){if(!e)return!1;if(e instanceof HTMLElement&&e.offsetParent)return!0;if(e instanceof SVGGraphicsElement&&e.getBBox){var n=e.getBBox(),r=n.width,t=n.height;if(r||t)return!0}if(e instanceof HTMLElement&&e.getBoundingClientRect){var a=e.getBoundingClientRect(),i=a.width,o=a.height;if(i||o)return!0}return!1};var oe=z()?l.useLayoutEffect:l.useEffect,ue=function(n,r){var t=l.useRef(!0);oe(function(){if(!t.current)return n()},r),oe(function(){return t.current=!1,function(){t.current=!0}},[])},F;function Sn(e){if(typeof document>"u")return 0;if(e||F===void 0){var n=document.createElement("div");n.style.width="100%",n.style.height="200px";var r=document.createElement("div"),t=r.style;t.position="absolute",t.top="0",t.left="0",t.pointerEvents="none",t.visibility="hidden",t.width="200px",t.height="150px",t.overflow="hidden",r.appendChild(n),document.body.appendChild(r);var a=n.offsetWidth;r.style.overflow="scroll";var i=n.offsetWidth;a===i&&(i=r.clientWidth),document.body.removeChild(r),F=a-i}return F}function se(e){var n=e.match(/^(.*)px$/),r=Number(n==null?void 0:n[1]);return Number.isNaN(r)?Sn():r}function nr(e){if(typeof document>"u"||!e||!(e instanceof Element))return{width:0,height:0};var n=getComputedStyle(e,"::-webkit-scrollbar"),r=n.width,t=n.height;return{width:se(r),height:se(t)}}function Nn(){var e=N({},Fe);return e.useId}var ce=0;function rr(e){var n=l.useState("ssr-id"),r=h(n,2),t=r[0],a=r[1],i=Nn(),o=i==null?void 0:i();return l.useEffect(function(){if(!i){var c=ce;ce+=1,a("rc_unique_".concat(c))}},[]),e||o||t}var wn=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,Mn=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,Rn="".concat(wn," ").concat(Mn).split(/[\s\n]+/),yn="aria-",An="data-";function fe(e,n){return e.indexOf(n)===0}function tr(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r;n===!1?r={aria:!0,data:!0,attr:!0}:n===!0?r={aria:!0}:r=N({},n);var t={};return Object.keys(e).forEach(function(a){(r.aria&&(a==="role"||fe(a,yn))||r.data&&fe(a,An)||r.attr&&Rn.includes(a))&&(t[a]=e[a])}),t}var le=q()?l.useLayoutEffect:l.useEffect,de=function(n,r){var t=l.useRef(!0);le(function(){if(!t.current)return n()},r),le(function(){return t.current=!1,function(){t.current=!0}},[])};function K(e){return e!==void 0}function ar(e,n){var r=n||{},t=r.defaultValue,a=r.value,i=r.onChange,o=r.postState,c=ie(function(){return K(a)?a:K(t)?typeof t=="function"?t():t:typeof e=="function"?e():e}),f=h(c,2),d=f[0],v=f[1],m=a!==void 0?a:d,p=o?o(m):m,L=te(i),I=ie([m]),w=h(I,2),M=w[0],P=w[1];de(function(){var g=M[0];d!==g&&L(d,g)},[M]),de(function(){K(a)||v(a)},[a]);var D=te(function(g,R){v(g,R),P([m],R)});return[p,D]}function ve(e){var n=l.useRef();n.current=e;var r=l.useCallback(function(){for(var t,a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(t=n.current)===null||t===void 0?void 0:t.call.apply(t,[n].concat(i))},[]);return r}function k(e){return e!==void 0}function ir(e,n){var r=n||{},t=r.defaultValue,a=r.value,i=r.onChange,o=r.postState,c=ee(function(){return k(a)?a:k(t)?typeof t=="function"?t():t:typeof e=="function"?e():e}),f=h(c,2),d=f[0],v=f[1],m=a!==void 0?a:d,p=o?o(m):m,L=ve(i),I=ee([m]),w=h(I,2),M=w[0],P=w[1];ue(function(){var g=M[0];d!==g&&L(d,g)},[M]),ue(function(){k(a)||v(a)},[a]);var D=ve(function(g,R){v(g,R),P([m],R)});return[p,D]}const or=function(){if(typeof navigator>"u"||typeof window>"u")return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e==null?void 0:e.substr(0,4))},Cn=function(e){if(!e)return!1;if(e instanceof Element){if(e.offsetParent)return!0;if(e.getBBox){var n=e.getBBox(),r=n.width,t=n.height;if(r||t)return!0}if(e.getBoundingClientRect){var a=e.getBoundingClientRect(),i=a.width,o=a.height;if(i||o)return!0}}return!1};function ur(e,n){var r=N({},e);return Array.isArray(n)&&n.forEach(function(t){delete r[t]}),r}var _n=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,Tn=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,bn="".concat(_n," ").concat(Tn).split(/[\s\n]+/),On="aria-",Un="data-";function me(e,n){return e.indexOf(n)===0}function sr(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r;n===!1?r={aria:!0,data:!0,attr:!0}:n===!0?r={aria:!0}:r=N({},n);var t={};return Object.keys(e).forEach(function(a){(r.aria&&(a==="role"||me(a,On))||r.data&&me(a,Un)||r.attr&&bn.includes(a))&&(t[a]=e[a])}),t}function cr(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,t=new Set;function a(i,o){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,f=t.has(i);if(b(!f,"Warning: There may be circular references"),f)return!1;if(i===o)return!0;if(r&&c>1)return!1;t.add(i);var d=c+1;if(Array.isArray(i)){if(!Array.isArray(o)||i.length!==o.length)return!1;for(var v=0;v<i.length;v++)if(!a(i[v],o[v],d))return!1;return!0}if(i&&o&&E(i)==="object"&&E(o)==="object"){var m=Object.keys(i);return m.length!==Object.keys(o).length?!1:m.every(function(p){return a(i[p],o[p],d)})}return!1}return a(e,n)}function pe(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Cn(e)){var r=e.nodeName.toLowerCase(),t=["input","select","textarea","button"].includes(r)||e.isContentEditable||r==="a"&&!!e.getAttribute("href"),a=e.getAttribute("tabindex"),i=Number(a),o=null;return a&&!Number.isNaN(i)?o=i:t&&o===null&&(o=0),t&&e.disabled&&(o=null),o!==null&&(o>=0||n&&o<0)}return!1}function fr(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=ge(e.querySelectorAll("*")).filter(function(t){return pe(t,n)});return pe(e,n)&&r.unshift(e),r}function lr(e,n,r,t){var a=S.unstable_batchedUpdates?function(o){S.unstable_batchedUpdates(r,o)}:r;return e.addEventListener&&e.addEventListener(n,a,t),{remove:function(){e.removeEventListener&&e.removeEventListener(n,a,t)}}}var dr=l.forwardRef(function(e,n){var r=e.didUpdate,t=e.getContainer,a=e.children,i=l.useRef(),o=l.useRef();l.useImperativeHandle(n,function(){return{}});var c=l.useRef(!1);return!c.current&&q()&&(o.current=t(),i.current=o.current.parentNode,c.current=!0),l.useEffect(function(){r==null||r(e)}),l.useEffect(function(){return o.current.parentNode===null&&i.current!==null&&i.current.appendChild(o.current),function(){var f,d;(f=o.current)===null||f===void 0||(d=f.parentNode)===null||d===void 0||d.removeChild(o.current)}},[]),o.current?S.createPortal(a,o.current):null});const vr=function(){if(typeof navigator>"u"||typeof window>"u")return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e==null?void 0:e.substr(0,4))};function mr(e){var n=e.getBoundingClientRect(),r=document.documentElement;return{left:n.left+(window.pageXOffset||r.scrollLeft)-(r.clientLeft||document.body.clientLeft||0),top:n.top+(window.pageYOffset||r.scrollTop)-(r.clientTop||document.body.clientTop||0)}}function pr(e,n,r,t){var a=S.unstable_batchedUpdates?function(o){S.unstable_batchedUpdates(r,o)}:r;return e.addEventListener&&e.addEventListener(n,a,t),{remove:function(){e.removeEventListener&&e.removeEventListener(n,a,t)}}}var s={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(n){var r=n.keyCode;if(n.altKey&&!n.ctrlKey||n.metaKey||r>=s.F1&&r<=s.F12)return!1;switch(r){case s.ALT:case s.CAPS_LOCK:case s.CONTEXT_MENU:case s.CTRL:case s.DOWN:case s.END:case s.ESC:case s.HOME:case s.INSERT:case s.LEFT:case s.MAC_FF_META:case s.META:case s.NUMLOCK:case s.NUM_CENTER:case s.PAGE_DOWN:case s.PAGE_UP:case s.PAUSE:case s.PRINT_SCREEN:case s.RIGHT:case s.SHIFT:case s.UP:case s.WIN_KEY:case s.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(n){if(n>=s.ZERO&&n<=s.NINE||n>=s.NUM_ZERO&&n<=s.NUM_MULTIPLY||n>=s.A&&n<=s.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&n===0)return!0;switch(n){case s.SPACE:case s.QUESTION_MARK:case s.NUM_PLUS:case s.NUM_MINUS:case s.NUM_PERIOD:case s.NUM_DIVISION:case s.SEMICOLON:case s.DASH:case s.EQUALS:case s.COMMA:case s.PERIOD:case s.SLASH:case s.APOSTROPHE:case s.SINGLE_QUOTE:case s.OPEN_SQUARE_BRACKET:case s.BACKSLASH:case s.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},De=function(n){if(z()&&window.document.documentElement){var r=Array.isArray(n)?n:[n],t=window.document.documentElement;return r.some(function(a){return a in t.style})}return!1},Ln=function(n,r){if(!De(n))return!1;var t=document.createElement("div"),a=t.style[n];return t.style[n]=r,t.style[n]!==a};function gr(e,n){return!Array.isArray(e)&&n!==void 0?Ln(e,n):De(e)}export{qn as $,Xn as A,Jn as B,xn as C,kn as D,er as E,Q as F,$n as G,ie as H,ar as I,te as J,sr as K,le as L,s as M,Be as N,lr as O,ir as P,tr as Q,on as R,u as S,Je as T,Gn as U,J as V,ur as W,ue as X,nn as Y,fr as Z,ee as _,Kn as a,We as a0,Hn as a1,Xe as a2,Qe as a3,pr as a4,mr as a5,nr as a6,gr as a7,vr as a8,dr as a9,b,q as c,Yn as d,$e as e,ve as f,Zn as g,oe as h,Wn as i,cr as j,z as k,Sn as l,Qn as m,zn as n,en as o,Cn as p,an as q,Vn as r,jn as s,tn as t,Bn as u,rn as v,xe as w,or as x,rr as y,Ve as z};
