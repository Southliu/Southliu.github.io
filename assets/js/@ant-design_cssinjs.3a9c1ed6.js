import{u as t,i as e,w as n,c as r,a as o,r as i,b as a}from"./rc-util.b2252098.js";import{_ as c,a as l,b as u,c as d,d as s,e as f,f as h,g as v,h as m}from"./@babel_runtime.d775819b.js";import{m as p}from"./@emotion_hash.b17c1a96.js";import{r as y,R as g}from"./react.a7da97a2.js";import{u as b}from"./@emotion_unitless.ede54c47.js";import{s as k,c as E,a as S}from"./stylis.b6f45693.js";var C=function(){function t(e){l(this,t),u(this,"instanceId",void 0),u(this,"cache",new Map),this.instanceId=e}return c(t,[{key:"get",value:function(t){return this.cache.get(t.join("%"))||null}},{key:"update",value:function(t,e){var n=t.join("%"),r=e(this.cache.get(n));null===r?this.cache.delete(n):this.cache.set(n,r)}}]),t}(),_=["children"],B="data-token-hash",I="data-css-hash",j="__cssinjs_instance__";function T(){var t=Math.random().toString(12).slice(2);if("undefined"!=typeof document&&document.head&&document.body){var e=document.body.querySelectorAll("style[".concat(I,"]"))||[],n=document.head.firstChild;Array.from(e).forEach((function(e){e[j]=e[j]||t,e[j]===t&&document.head.insertBefore(e,n)}));var r={};Array.from(document.querySelectorAll("style[".concat(I,"]"))).forEach((function(e){var n,o=e.getAttribute(I);r[o]?e[j]===t&&(null===(n=e.parentNode)||void 0===n||n.removeChild(e)):r[o]=!0}))}return new C(t)}var A=y.createContext({hashPriority:"low",cache:T(),defaultCache:!0}),R=function(n){var r=n.children,o=d(n,_),i=y.useContext(A),a=t((function(){var t=s({},i);Object.keys(o).forEach((function(e){var n=o[e];void 0!==o[e]&&(t[e]=n)}));var e=o.cache;return t.cache=t.cache||T(),t.defaultCache=!e&&i.defaultCache,t}),[i,o],(function(t,n){return!e(t[0],n[0],!0)||!e(t[1],n[1],!0)}));return y.createElement(A.Provider,{value:a},r)};var L=function(){function t(){l(this,t),u(this,"cache",void 0),u(this,"keys",void 0),u(this,"cacheCallTimes",void 0),this.cache=new Map,this.keys=[],this.cacheCallTimes=0}return c(t,[{key:"size",value:function(){return this.keys.length}},{key:"internalGet",value:function(t){var e,n,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o={map:this.cache};return t.forEach((function(t){var e,n;o?o=null===(e=o)||void 0===e||null===(n=e.map)||void 0===n?void 0:n.get(t):o=void 0})),null!==(e=o)&&void 0!==e&&e.value&&r&&(o.value[1]=this.cacheCallTimes++),null===(n=o)||void 0===n?void 0:n.value}},{key:"get",value:function(t){var e;return null===(e=this.internalGet(t,!0))||void 0===e?void 0:e[0]}},{key:"has",value:function(t){return!!this.internalGet(t)}},{key:"set",value:function(e,n){var r=this;if(!this.has(e)){if(this.size()+1>t.MAX_CACHE_SIZE+t.MAX_CACHE_OFFSET){var o=this.keys.reduce((function(t,e){var n=f(t,2)[1];return r.internalGet(e)[1]<n?[e,r.internalGet(e)[1]]:t}),[this.keys[0],this.cacheCallTimes]),i=f(o,1)[0];this.delete(i)}this.keys.push(e)}var a=this.cache;e.forEach((function(t,o){if(o===e.length-1)a.set(t,{value:[n,r.cacheCallTimes++]});else{var i=a.get(t);i?i.map||(i.map=new Map):a.set(t,{map:new Map}),a=a.get(t).map}}))}},{key:"deleteByPath",value:function(t,e){var n,r=t.get(e[0]);if(1===e.length)return r.map?t.set(e[0],{map:r.map}):t.delete(e[0]),null===(n=r.value)||void 0===n?void 0:n[0];var o=this.deleteByPath(r.map,e.slice(1));return r.map&&0!==r.map.size||r.value||t.delete(e[0]),o}},{key:"delete",value:function(t){if(this.has(t))return this.keys=this.keys.filter((function(e){return!function(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}(e,t)})),this.deleteByPath(this.cache,t)}}]),t}();u(L,"MAX_CACHE_SIZE",20),u(L,"MAX_CACHE_OFFSET",5);var M=0,w=function(){function t(e){l(this,t),u(this,"derivatives",void 0),u(this,"id",void 0),this.derivatives=Array.isArray(e)?e:[e],this.id=M,0===e.length&&n(e.length>0),M+=1}return c(t,[{key:"getDerivativeToken",value:function(t){return this.derivatives.reduce((function(e,n){return n(t,e)}),void 0)}}]),t}(),W=new L;function N(t){var e=Array.isArray(t)?t:[t];return W.has(e)||W.set(e,new w(e)),W.get(e)}var O=new WeakMap;function x(t){var e=O.get(t)||"";return e||(Object.keys(t).forEach((function(n){var r=t[n];e+=n,r instanceof w?e+=r.id:r&&"object"===h(r)?e+=x(r):e+=r})),O.set(t,e)),e}var H="random-".concat(Date.now(),"-").concat(Math.random()).replace(/\./g,""),P="_bAmBoO_";var q=void 0;function F(){return void 0===q&&(q=function(t,e,n){if(r()){var a,c;o(t,H);var l=document.createElement("div");l.style.position="fixed",l.style.left="0",l.style.top="0",null==e||e(l),document.body.appendChild(l);var u=n?n(l):null===(a=getComputedStyle(l).content)||void 0===a?void 0:a.includes(P);return null===(c=l.parentNode)||void 0===c||c.removeChild(l),i(H),u}return!1}("@layer ".concat(H," { .").concat(H,' { content: "').concat(P,'"!important; } }'),(function(t){t.className=H}))),q}var G=s({},g).useInsertionEffect,K=G?function(t,e,n){return G((function(){return t(),e()}),n)}:function(t,e,n){y.useMemo(t,n),a((function(){return e(!0)}),n)},X=void 0!==s({},g).useInsertionEffect?function(t){var e=[],n=!1;return y.useEffect((function(){return n=!1,function(){n=!0,e.length&&e.forEach((function(t){return t()}))}}),t),function(t){n||e.push(t)}}:function(){return function(t){t()}};function z(t,e,n,r,o){var i=y.useContext(A).cache,a=[t].concat(v(e)),c=a.join("_"),l=X([c]),u=function(t){i.update(a,(function(e){var r=f(e||[],2),o=r[0],i=[void 0===o?0:o,r[1]||n()];return t?t(i):i}))};y.useMemo((function(){u()}),[c]);var d=i.get(a)[1];return K((function(){null==o||o(d)}),(function(t){return u((function(e){var n=f(e,2),r=n[0],i=n[1];return t&&0===r&&(null==o||o(d)),[r+1,i]})),function(){i.update(a,(function(t){var e=f(t||[],2),n=e[0],o=void 0===n?0:n,i=e[1];return 0===o-1?(l((function(){return null==r?void 0:r(i,!1)})),null):[o-1,i]}))}}),[c]),d}var D={},Z=new Map;var Y=0;function $(t,e){Z.set(t,(Z.get(t)||0)-1);var n=Array.from(Z.keys()),r=n.filter((function(t){return(Z.get(t)||0)<=0}));n.length-r.length>Y&&r.forEach((function(t){!function(t,e){"undefined"!=typeof document&&document.querySelectorAll("style[".concat(B,'="').concat(t,'"]')).forEach((function(t){var n;t[j]===e&&(null===(n=t.parentNode)||void 0===n||n.removeChild(t))}))}(t,e),Z.delete(t)}))}var J=function(t,e,n,r){var o=n.getDerivativeToken(t),i=s(s({},o),e);return r&&(i=r(i)),i};function Q(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=y.useContext(A).cache.instanceId,o=n.salt,i=void 0===o?"":o,a=n.override,c=void 0===a?D:a,l=n.formatToken,u=n.getComputedToken,d=y.useMemo((function(){return Object.assign.apply(Object,[{}].concat(v(e)))}),[e]),s=y.useMemo((function(){return x(d)}),[d]),f=y.useMemo((function(){return x(c)}),[c]),h=z("token",[i,t.id,s,f],(function(){var e=u?u(d,c,t):J(d,c,t,l),n=function(t,e){return p("".concat(e,"_").concat(x(t)))}(e,i);e._tokenKey=n,function(t){Z.set(t,(Z.get(t)||0)+1)}(n);var r="".concat("css","-").concat(p(n));return e._hashId=r,[e,r]}),(function(t){$(t[0]._tokenKey,r)}));return h}var U,V="data-ant-cssinjs-cache-path",tt="_FILE_STYLE__",et=!0;function nt(t){return function(){if(!U&&(U={},r())){var t=document.createElement("div");t.className=V,t.style.position="fixed",t.style.visibility="hidden",t.style.top="-9999px",document.body.appendChild(t);var e=getComputedStyle(t).content||"";(e=e.replace(/^"/,"").replace(/"$/,"")).split(";").forEach((function(t){var e=t.split(":"),n=f(e,2),r=n[0],o=n[1];U[r]=o}));var n,o=document.querySelector("style[".concat(V,"]"));o&&(et=!1,null===(n=o.parentNode)||void 0===n||n.removeChild(o)),document.body.removeChild(t)}}(),!!U[t]}var rt=r(),ot="_multi_value_";function it(t){return k(E(t),S).replace(/\{%%%\:[^;];}/g,";")}var at=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{root:!0,parentSelectors:[]},o=r.root,i=r.injectHash,a=r.parentSelectors,c=n.hashId,l=n.layer;n.path;var u=n.hashPriority,d=n.transformers,m=void 0===d?[]:d;n.linters;var p="",y={};function g(e){var r=e.getName(c);if(!y[r]){var o=t(e.style,n,{root:!1,parentSelectors:a}),i=f(o,1)[0];y[r]="@keyframes ".concat(e.getName(c)).concat(i)}}var k=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.forEach((function(e){Array.isArray(e)?t(e,n):e&&n.push(e)})),n}(Array.isArray(e)?e:[e]);if(k.forEach((function(e){var r="string"!=typeof e||o?e:{};if("string"==typeof r)p+="".concat(r,"\n");else if(r._keyframe)g(r);else{var l=m.reduce((function(t,e){var n;return(null==e||null===(n=e.visit)||void 0===n?void 0:n.call(e,t))||t}),r);Object.keys(l).forEach((function(e){var r=l[e];if("object"!==h(r)||!r||"animationName"===e&&r._keyframe||function(t){return"object"===h(t)&&t&&("_skip_check_"in t||ot in t)}(r)){let t=function(t,e){var n=t.replace(/[A-Z]/g,(function(t){return"-".concat(t.toLowerCase())})),r=e;b[t]||"number"!=typeof r||0===r||(r="".concat(r,"px")),"animationName"===t&&null!=e&&e._keyframe&&(g(e),r=e.getName(c)),p+="".concat(n,":").concat(r,";")};var d,m=null!==(d=null==r?void 0:r.value)&&void 0!==d?d:r;"object"===h(r)&&null!=r&&r[ot]&&Array.isArray(m)?m.forEach((function(n){t(e,n)})):t(e,m)}else{var k=!1,E=e.trim(),S=!1;(o||i)&&c?E.startsWith("@")?k=!0:E=function(t,e,n){if(!e)return t;var r=".".concat(e),o="low"===n?":where(".concat(r,")"):r;return t.split(",").map((function(t){var e,n=t.trim().split(/\s+/),r=n[0]||"",i=(null===(e=r.match(/^\w+/))||void 0===e?void 0:e[0])||"";return[r="".concat(i).concat(o).concat(r.slice(i.length))].concat(v(n.slice(1))).join(" ")})).join(",")}(e,c,u):!o||c||"&"!==E&&""!==E||(E="",S=!0);var C=t(r,n,{root:S,injectHash:k,parentSelectors:[].concat(v(a),[E])}),_=f(C,2),B=_[0],I=_[1];y=s(s({},y),I),p+="".concat(E).concat(B)}}))}})),o){if(l&&F()){var E=l.split(","),S=E[E.length-1].trim();p="@layer ".concat(S," {").concat(p,"}"),E.length>1&&(p="@layer ".concat(l,"{%%%:%}").concat(p))}}else p="{".concat(p,"}");return[p,y]};function ct(){return null}function lt(t,e){var n=t.token,a=t.path,c=t.hashId,l=t.layer,d=t.nonce,s=t.clientOnly,h=t.order,g=void 0===h?0:h,b=y.useContext(A),k=b.autoClear;b.mock;var E=b.defaultCache,S=b.hashPriority,C=b.container,_=b.ssrInline,T=b.transformers,R=b.linters,L=b.cache,M=n._tokenKey,w=[M].concat(v(a)),W=rt,N=z("style",w,(function(){var t=w.join("|");if(nt(t)){var n=function(t){var e=U[t],n=null;if(e&&r())if(et)n=tt;else{var o=document.querySelector("style[".concat(I,'="').concat(U[t],'"]'));o?n=o.innerHTML:delete U[t]}return[n,e]}(t),o=f(n,2),i=o[0],u=o[1];if(i)return[i,M,u,{},s,g]}var d=e(),h=at(d,{hashId:c,hashPriority:S,layer:l,path:a.join("-"),transformers:T,linters:R}),v=f(h,2),m=v[0],y=v[1],b=it(m),k=function(t,e){return p("".concat(t.join("%")).concat(e))}(w,b);return[b,M,k,y,s,g]}),(function(t,e){var n=f(t,3)[2];(e||k)&&rt&&i(n,{mark:I})}),(function(t){var e=f(t,4),n=e[0];e[1];var r=e[2],i=e[3];if(W&&n!==tt){var a={mark:I,prepend:"queue",attachTo:C,priority:g},c="function"==typeof d?d():d;c&&(a.csp={nonce:c});var l=o(n,r,a);l[j]=L.instanceId,l.setAttribute(B,M),Object.keys(i).forEach((function(t){o(it(i[t]),"_effect-".concat(t),a)}))}})),O=f(N,3),x=O[0],H=O[1],P=O[2];return function(t){var e,n;_&&!W&&E?e=y.createElement("style",m({},(u(n={},B,H),u(n,I,P),n),{dangerouslySetInnerHTML:{__html:x}})):e=y.createElement(ct,null);return y.createElement(y.Fragment,null,e,t)}}var ut=function(){function t(e,n){l(this,t),u(this,"name",void 0),u(this,"style",void 0),u(this,"_keyframe",!0),this.name=e,this.style=n}return c(t,[{key:"getName",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t?"".concat(t,"-").concat(this.name):this.name}}]),t}();function dt(t){return t.notSplit=!0,t}var st={inset:["top","right","bottom","left"],insetBlock:["top","bottom"],insetBlockStart:["top"],insetBlockEnd:["bottom"],insetInline:["left","right"],insetInlineStart:["left"],insetInlineEnd:["right"],marginBlock:["marginTop","marginBottom"],marginBlockStart:["marginTop"],marginBlockEnd:["marginBottom"],marginInline:["marginLeft","marginRight"],marginInlineStart:["marginLeft"],marginInlineEnd:["marginRight"],paddingBlock:["paddingTop","paddingBottom"],paddingBlockStart:["paddingTop"],paddingBlockEnd:["paddingBottom"],paddingInline:["paddingLeft","paddingRight"],paddingInlineStart:["paddingLeft"],paddingInlineEnd:["paddingRight"],borderBlock:dt(["borderTop","borderBottom"]),borderBlockStart:dt(["borderTop"]),borderBlockEnd:dt(["borderBottom"]),borderInline:dt(["borderLeft","borderRight"]),borderInlineStart:dt(["borderLeft"]),borderInlineEnd:dt(["borderRight"]),borderBlockWidth:["borderTopWidth","borderBottomWidth"],borderBlockStartWidth:["borderTopWidth"],borderBlockEndWidth:["borderBottomWidth"],borderInlineWidth:["borderLeftWidth","borderRightWidth"],borderInlineStartWidth:["borderLeftWidth"],borderInlineEndWidth:["borderRightWidth"],borderBlockStyle:["borderTopStyle","borderBottomStyle"],borderBlockStartStyle:["borderTopStyle"],borderBlockEndStyle:["borderBottomStyle"],borderInlineStyle:["borderLeftStyle","borderRightStyle"],borderInlineStartStyle:["borderLeftStyle"],borderInlineEndStyle:["borderRightStyle"],borderBlockColor:["borderTopColor","borderBottomColor"],borderBlockStartColor:["borderTopColor"],borderBlockEndColor:["borderBottomColor"],borderInlineColor:["borderLeftColor","borderRightColor"],borderInlineStartColor:["borderLeftColor"],borderInlineEndColor:["borderRightColor"],borderStartStartRadius:["borderTopLeftRadius"],borderStartEndRadius:["borderTopRightRadius"],borderEndStartRadius:["borderBottomLeftRadius"],borderEndEndRadius:["borderBottomRightRadius"]};function ft(t,e){var n=t;return e&&(n="".concat(n," !important")),{_skip_check_:!0,value:n}}var ht={visit:function(t){var e={};return Object.keys(t).forEach((function(n){var r=t[n],o=st[n];if(!o||"number"!=typeof r&&"string"!=typeof r)e[n]=r;else{var i=function(t){if("number"==typeof t)return[[t],!1];var e=String(t).trim(),n=e.match(/(.*)(!important)/),r=(n?n[1]:e).trim().split(/\s+/),o="",i=0;return[r.reduce((function(t,e){return e.includes("(")?(o+=e,i+=e.split("(").length-1):e.includes(")")?(o+=e,0==(i-=e.split(")").length-1)&&(t.push(o),o="")):i>0?o+=e:t.push(e),t}),[]),!!n]}(r),a=f(i,2),c=a[0],l=a[1];o.length&&o.notSplit?o.forEach((function(t){e[t]=ft(r,l)})):1===o.length?e[o[0]]=ft(r,l):2===o.length?o.forEach((function(t,n){var r;e[t]=ft(null!==(r=c[n])&&void 0!==r?r:c[0],l)})):4===o.length?o.forEach((function(t,n){var r,o;e[t]=ft(null!==(r=null!==(o=c[n])&&void 0!==o?o:c[n-2])&&void 0!==r?r:c[0],l)})):e[n]=r}})),e}};export{ut as K,R as S,lt as a,N as c,J as g,ht as t,Q as u};
