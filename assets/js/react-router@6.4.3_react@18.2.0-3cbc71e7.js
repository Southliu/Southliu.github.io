import{i as p,g as I,r as T,j as P,p as B,m as J,A as w,s as k,a as V}from"./@remix-run_router@1.0.3-a37d51dc.js";import{a as b,r as a}from"./react@18.2.0-693b9b6f.js";import{j as c,b as S,F as _}from"./@ant-design_cssinjs@1.0.2_biqbaboplfbrettd7655fr4n2y-8bfcb13e.js";/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},R.apply(this,arguments)}function $(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const G=typeof Object.is=="function"?Object.is:$,{useState:W,useEffect:X,useLayoutEffect:Y,useDebugValue:q}=b;function z(e,t,n){const r=t(),[{inst:o},l]=W({inst:{value:r,getSnapshot:t}});return Y(()=>{o.value=r,o.getSnapshot=t,E(o)&&l({inst:o})},[e,r,t]),X(()=>(E(o)&&l({inst:o}),e(()=>{E(o)&&l({inst:o})})),[e]),q(r),r}function E(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!G(n,r)}catch{return!0}}function K(e,t,n){return t()}const Q=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Z=!Q,A=Z?K:z;"useSyncExternalStore"in b&&(e=>e.useSyncExternalStore)(b);const H=a.exports.createContext(null),M=a.exports.createContext(null),N=a.exports.createContext(null),C=a.exports.createContext(null),v=a.exports.createContext({outlet:null,matches:[]}),L=a.exports.createContext(null);function y(){return a.exports.useContext(C)!=null}function F(){return y()||p(!1),a.exports.useContext(C).location}function de(){y()||p(!1);let{basename:e,navigator:t}=a.exports.useContext(N),{matches:n}=a.exports.useContext(v),{pathname:r}=F(),o=JSON.stringify(I(n).map(u=>u.pathnameBase)),l=a.exports.useRef(!1);return a.exports.useEffect(()=>{l.current=!0}),a.exports.useCallback(function(u,i){if(i===void 0&&(i={}),!l.current)return;if(typeof u=="number"){t.go(u);return}let d=T(u,JSON.parse(o),r,i.relative==="path");e!=="/"&&(d.pathname=d.pathname==="/"?e:P([e,d.pathname])),(i.replace?t.replace:t.push)(d,i.state,i)},[e,t,o,r])}const ee=a.exports.createContext(null);function te(e){let t=a.exports.useContext(v).outlet;return t&&c(ee.Provider,{value:e,children:t})}function he(e,t){y()||p(!1);let n=a.exports.useContext(M),{matches:r}=a.exports.useContext(v),o=r[r.length-1],l=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let u=F(),i;if(t){var d;let h=typeof t=="string"?B(t):t;s==="/"||((d=h.pathname)==null?void 0:d.startsWith(s))||p(!1),i=h}else i=u;let f=i.pathname||"/",g=s==="/"?f:f.slice(s.length)||"/",x=J(e,{pathname:g}),m=ae(x&&x.map(h=>Object.assign({},h,{params:Object.assign({},l,h.params),pathname:P([s,h.pathname]),pathnameBase:h.pathnameBase==="/"?s:P([s,h.pathnameBase])})),r,n||void 0);return t&&m?c(C.Provider,{value:{location:R({pathname:"/",search:"",hash:"",state:null,key:"default"},i),navigationType:w.Pop},children:m}):m}function re(){let e=le(),t=V(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},l={padding:"2px 4px",backgroundColor:r};return S(_,{children:[c("h2",{children:"Unhandled Thrown Error!"}),c("h3",{style:{fontStyle:"italic"},children:t}),n?c("pre",{style:o,children:n}):null,c("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),S("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",c("code",{style:l,children:"errorElement"})," props on\xA0",c("code",{style:l,children:"<Route>"})]})]})}class ne extends a.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?c(L.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function oe(e){let{routeContext:t,match:n,children:r}=e,o=a.exports.useContext(H);return o&&n.route.errorElement&&(o._deepestRenderedBoundaryId=n.route.id),c(v.Provider,{value:t,children:r})}function ae(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,o=n==null?void 0:n.errors;if(o!=null){let l=r.findIndex(s=>s.route.id&&(o==null?void 0:o[s.route.id]));l>=0||p(!1),r=r.slice(0,Math.min(r.length,l+1))}return r.reduceRight((l,s,u)=>{let i=s.route.id?o==null?void 0:o[s.route.id]:null,d=n?s.route.errorElement||c(re,{}):null,f=()=>c(oe,{match:s,routeContext:{outlet:l,matches:t.concat(r.slice(0,u+1))},children:i?d:s.route.element!==void 0?s.route.element:l});return n&&(s.route.errorElement||u===0)?c(ne,{location:n.location,component:d,error:i,children:f()}):f()},null)}var U;(function(e){e.UseRevalidator="useRevalidator"})(U||(U={}));var D;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(D||(D={}));function se(e){let t=a.exports.useContext(M);return t||p(!1),t}function le(){var e;let t=a.exports.useContext(L),n=se(D.UseRouteError),r=a.exports.useContext(v),o=r.matches[r.matches.length-1];return t||(r||p(!1),o.route.id||p(!1),(e=n.errors)==null?void 0:e[o.route.id])}function pe(e){return te(e.context)}function fe(e){let{basename:t="/",children:n=null,location:r,navigationType:o=w.Pop,navigator:l,static:s=!1}=e;y()&&p(!1);let u=t.replace(/^\/*/,"/"),i=a.exports.useMemo(()=>({basename:u,navigator:l,static:s}),[u,l,s]);typeof r=="string"&&(r=B(r));let{pathname:d="/",search:f="",hash:g="",state:x=null,key:m="default"}=r,h=a.exports.useMemo(()=>{let O=k(d,u);return O==null?null:{pathname:O,search:f,hash:g,state:x,key:m}},[u,d,f,g,x,m]);return h==null?null:c(N.Provider,{value:i,children:c(C.Provider,{children:n,value:{location:h,navigationType:o}})})}var j;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(j||(j={}));new Promise(()=>{});export{pe as O,fe as R,F as a,he as b,de as u};
