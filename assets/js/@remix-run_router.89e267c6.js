/**
 * @remix-run/router v1.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},w.apply(this,arguments)}var y;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(y||(y={}));const W="popstate";function oe(e){e===void 0&&(e={});function t(i,r){let{pathname:a,search:l,hash:s}=i.location;return $("",{pathname:a,search:l,hash:s},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:O(r)}return M(t,n,null,e)}function v(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function k(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function H(){return Math.random().toString(36).substr(2,8)}function L(e,t){return{usr:e.state,key:e.key,idx:t}}function $(e,t,n,i){return n===void 0&&(n=null),w({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?S(t):t,{state:n,key:t&&t.key||i||H()})}function O(e){let{pathname:t="/",search:n="",hash:i=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function S(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substr(i),e=e.substr(0,i)),e&&(t.pathname=e)}return t}function M(e,t,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:a=!1}=i,l=r.history,s=y.Pop,o=null,c=h();c==null&&(c=0,l.replaceState(w({},l.state,{idx:c}),""));function h(){return(l.state||{idx:null}).idx}function p(){let u=y.Pop,f=h();if(f!=null){let d=f-c;s=u,c=f,o&&o({action:s,location:m.location,delta:d})}else k(!1,"You are trying to block a POP navigation to a location that was not created by @remix-run/router. The block will fail silently in production, but in general you should do all navigation with the router (instead of using window.history.pushState directly) to avoid this situation.")}function g(u,f){s=y.Push;let d=$(m.location,u,f);n&&n(d,u),c=h()+1;let R=L(d,c),x=m.createHref(d);try{l.pushState(R,"",x)}catch{r.location.assign(x)}a&&o&&o({action:s,location:m.location,delta:1})}function T(u,f){s=y.Replace;let d=$(m.location,u,f);n&&n(d,u),c=h();let R=L(d,c),x=m.createHref(d);l.replaceState(R,"",x),a&&o&&o({action:s,location:m.location,delta:0})}function I(u){let f=r.location.origin!=="null"?r.location.origin:r.location.href,d=typeof u=="string"?u:O(u);return v(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let m={get action(){return s},get location(){return e(r,l)},listen(u){if(o)throw new Error("A history only accepts one active listener");return r.addEventListener(W,p),o=u,()=>{r.removeEventListener(W,p),o=null}},createHref(u){return t(r,u)},createURL:I,encodeLocation(u){let f=I(u);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:T,go(u){return l.go(u)}};return m}var U;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(U||(U={}));function ce(e,t,n){n===void 0&&(n="/");let i=typeof t=="string"?S(t):t,r=Z(i.pathname||"/",n);if(r==null)return null;let a=j(e);V(a);let l=null;for(let s=0;l==null&&s<a.length;++s)l=K(a[s],Q(r));return l}function j(e,t,n,i){t===void 0&&(t=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(a,l,s)=>{let o={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};o.relativePath.startsWith("/")&&(v(o.relativePath.startsWith(i),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(i.length));let c=P([i,o.relativePath]),h=n.concat(o);a.children&&a.children.length>0&&(v(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),j(a.children,t,h,c)),!(a.path==null&&!a.index)&&t.push({path:c,score:G(c,a.index),routesMeta:h})};return e.forEach((a,l)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))r(a,l);else for(let o of C(a.path))r(a,l,o)}),t}function C(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,r=n.endsWith("?"),a=n.replace(/\?$/,"");if(i.length===0)return r?[a,""]:[a];let l=C(i.join("/")),s=[];return s.push(...l.map(o=>o===""?a:[a,o].join("/"))),r&&s.push(...l),s.map(o=>e.startsWith("/")&&o===""?"/":o)}function V(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:J(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const A=/^:\w+$/,z=3,_=2,D=1,N=10,q=-2,B=e=>e==="*";function G(e,t){let n=e.split("/"),i=n.length;return n.some(B)&&(i+=q),t&&(i+=_),n.filter(r=>!B(r)).reduce((r,a)=>r+(A.test(a)?z:a===""?D:N),i)}function J(e,t){return e.length===t.length&&e.slice(0,-1).every((i,r)=>i===t[r])?e[e.length-1]-t[t.length-1]:0}function K(e,t){let{routesMeta:n}=e,i={},r="/",a=[];for(let l=0;l<n.length;++l){let s=n[l],o=l===n.length-1,c=r==="/"?t:t.slice(r.length)||"/",h=Y({path:s.relativePath,caseSensitive:s.caseSensitive,end:o},c);if(!h)return null;Object.assign(i,h.params);let p=s.route;a.push({params:i,pathname:P([r,h.pathname]),pathnameBase:ne(P([r,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(r=P([r,h.pathnameBase]))}return a}function Y(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=F(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let a=r[0],l=a.replace(/(.)\/+$/,"$1"),s=r.slice(1);return{params:i.reduce((c,h,p)=>{if(h==="*"){let g=s[p]||"";l=a.slice(0,a.length-g.length).replace(/(.)\/+$/,"$1")}return c[h]=X(s[p]||"",h),c},{}),pathname:a,pathnameBase:l,pattern:e}}function F(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),b(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,s)=>(i.push(s),"/([^\\/]+)"));return e.endsWith("*")?(i.push("*"),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),i]}function Q(e){try{return decodeURI(e)}catch(t){return b(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function X(e,t){try{return decodeURIComponent(e)}catch(n){return b(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Z(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}function b(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ee(e,t){t===void 0&&(t="/");let{pathname:n,search:i="",hash:r=""}=typeof e=="string"?S(e):e;return{pathname:n?n.startsWith("/")?n:te(n,t):t,search:re(i),hash:ie(r)}}function te(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function E(e,t,n,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function he(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ue(e,t,n,i){i===void 0&&(i=!1);let r;typeof e=="string"?r=S(e):(r=w({},e),v(!r.pathname||!r.pathname.includes("?"),E("?","pathname","search",r)),v(!r.pathname||!r.pathname.includes("#"),E("#","pathname","hash",r)),v(!r.search||!r.search.includes("#"),E("#","search","hash",r)));let a=e===""||r.pathname==="",l=a?"/":r.pathname,s;if(i||l==null)s=n;else{let p=t.length-1;if(l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),p-=1;r.pathname=g.join("/")}s=p>=0?t[p]:"/"}let o=ee(r,s),c=l&&l!=="/"&&l.endsWith("/"),h=(a||l===".")&&n.endsWith("/");return!o.pathname.endsWith("/")&&(c||h)&&(o.pathname+="/"),o}const P=e=>e.join("/").replace(/\/\/+/g,"/"),ne=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),re=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ie=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class ae{constructor(t,n,i,r){r===void 0&&(r=!1),this.status=t,this.statusText=n||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}}function fe(e){return e instanceof ae}const le=["post","put","patch","delete"];[...le];export{y as A,fe as a,O as b,oe as c,he as g,v as i,P as j,ce as m,S as p,ue as r,Z as s};
