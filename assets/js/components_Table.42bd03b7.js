import{j as g,a as k}from"./components_Bottom.8e587700.js";import{r as c}from"./react.4fb287ef.js";import{E as I}from"./components_Business.18a18d60.js";import{R as j}from"./react-resizable.de608032.js";import{a as F}from"./ahooks.c4f6ff73.js";import{h as O,i as U}from"./antd.5aea764c.js";function _(){const e=window.innerHeight,o=document.getElementById("header"),t=o==null?void 0:o.offsetHeight,s=document.getElementById("searches"),a=s==null?void 0:s.offsetHeight,d=document.getElementById("pagination"),r=d==null?void 0:d.offsetHeight;let n=e||0;return t&&n>0&&(n-=t),a&&n>0&&(n-=a),r&&n>0&&(n-=r),n>0?n-65:450}function P(e){switch(e){case"large":return 54;case"middle":return 46;default:return 38}}function B(e){for(let o=0;o<e.length;o++){const t=e[o];t.ellipsis===void 0&&(t.ellipsis=!0),t.render||(t.render=s=>s||(s===0?s:I))}return e}function $(e){const{onResize:o,width:t,...s}=e;return t?g(j,{width:t,height:0,handle:g("span",{className:"react-resizable-handle",onClick:a=>{a.stopPropagation()}}),onResize:o,draggableOpts:{enableUserSelectHack:!1},children:g("th",{...s})}):g("th",{...s})}function K(e,o){switch(o.type){case"changeScroll":let t=o.curScrollTop||0,s=o.scrollHeight||0;const a=o.tableScrollY||0;return s<=0&&(s=0),s!==0&&a===e.tableScrollY&&(s=e.scrollHeight),e.scrollHeight&&t>e.scrollHeight&&(t=e.scrollHeight),{...e,curScrollTop:t,scrollHeight:s,tableScrollY:a};case"reset":return{...e,curScrollTop:0,scrollHeight:0};default:throw new Error("表格：未知错误类型!")}}function A(e){return typeof e=="number"&&isFinite(e)}const V=c.createContext({dispatch:void 0,renderLen:1,start:0,offsetStart:0,rowHeight:46,totalLen:0});function W(e){const{children:o,...t}=e,{renderLen:s,start:a,offsetStart:d}=c.useContext(V);let r=null;if(o&&o!==null){const n=o==null?void 0:o[1];Array.isArray(n)&&n.length?r=[o==null?void 0:o[0],n.slice(a,a+s).map(u=>Array.isArray(u)?u[0]:u)]:r=o}return g("tbody",{...t,style:{transform:`translateY(-${d}px)`},children:r})}const M={rowHeight:38,curScrollTop:0,scrollHeight:0,tableScrollY:0};let L=0;function X(e){var E,p,S,b,w;const{style:o,children:t,...s}=e,{width:a,...d}=o,[r,n]=c.useReducer(K,M),u=c.useRef(null),N=c.useRef(null),[f,T]=c.useState(((S=(p=(E=t==null?void 0:t[2])==null?void 0:E.props)==null?void 0:p.data)==null?void 0:S.length)??0);c.useEffect(()=>{var l,h,m,C,x,Y;A((m=(h=(l=t==null?void 0:t[1])==null?void 0:l.props)==null?void 0:h.data)==null?void 0:m.length)&&T((Y=(x=(C=t==null?void 0:t[1])==null?void 0:C.props)==null?void 0:x.data)==null?void 0:Y.length)},[t]);const y=c.useMemo(()=>{let l="auto";return r.rowHeight&&f&&(l=r.rowHeight*f),l},[r.rowHeight,f]);let i=0;typeof L=="string"?i=(w=(b=u.current)==null?void 0:b.parentNode)==null?void 0:w.offsetHeight:i=L,A(y)&&y<i&&(i=y),i<=0&&(i=0);const v=c.useMemo(()=>{let l=1;if(r.rowHeight&&f&&i)if(i<=0)l=0;else{const h=(i/r.rowHeight|0)+5;l=h>f?f:h}return l},[r.rowHeight,f,i]);let H=r.rowHeight?r.curScrollTop/r.rowHeight|0:0,R=r.rowHeight?r.curScrollTop%r.rowHeight:0;r.curScrollTop&&r.rowHeight&&r.curScrollTop>r.rowHeight?H>f-v?R=0:H>1&&(H=H-1,R+=r.rowHeight):H=0,c.useEffect(()=>{var h;const l=(h=u.current)==null?void 0:h.parentNode;l&&(l.scrollTop=0),n({type:"reset"})},[f]);const z=F(l=>{var m,C;const h=((m=l==null?void 0:l.target)==null?void 0:m.scrollTop)??0;if(h!==r.curScrollTop){const x=((C=l==null?void 0:l.target)==null?void 0:C.scrollHeight)-i;n({type:"changeScroll",curScrollTop:h,scrollHeight:x,tableScrollY:i})}},{wait:60});return c.useEffect(()=>{var h;const l=(h=u==null?void 0:u.current)==null?void 0:h.parentNode;return l&&l.addEventListener("scroll",m=>z.run(m)),()=>{l.removeEventListener("scroll",m=>z.run(m))}},[u,r.curScrollTop,i,r.scrollHeight,z]),g("div",{className:"virtualTable",ref:u,style:{width:"100%",position:"relative",height:y,boxSizing:"border-box",paddingTop:r.curScrollTop},children:g(V.Provider,{value:{dispatch:n,rowHeight:r.rowHeight,start:H,offsetStart:R,renderLen:v,totalLen:f},children:g("table",{...s,ref:N,style:{...d,width:a,position:"relative"},children:t})})})}function Z(e){const{height:o,size:t}=e;return L=o,M.rowHeight=P(t),{table:X,body:{wrapper:W}}}function q(e){const{loading:o,isZebra:t,isBordered:s,isVirtual:a,scrollX:d,scrollY:r,rowClassName:n,size:u}=e,[N,f]=c.useState(B(e.columns));c.useEffect(()=>{f(B(e.columns))},[e.columns]);const T=_(),y=p=>(S,{size:b})=>{const w=[...N];w[p]={...w[p],width:b.width},f(w)},i=N.map((p,S)=>({...p,onHeaderCell:b=>({width:b.width,onResize:y(S)})})),v=Z({height:T,size:u||"small"}),H=c.useMemo(()=>({header:{cell:$},body:{wrapper:v.body.wrapper},table:v.table}),[v]),R=a===!0?H:{header:{cell:$}},z={...e.scroll,x:d??"max-content",y:r||T||void 0};return k("div",{id:"table",className:`
        overflow-auto
        ${s!==!1?"bordered":""}
        ${t!==!1?"zebra":""}
      `,children:[!T&&g(O,{}),T&&g(U,{size:"small",rowKey:"id",pagination:!1,loading:o,...e,rowClassName:(p,S,b)=>{const w=typeof n=="string"?n:n==null?void 0:n(p,S,b),l=`!h-${P(u)}px`;return`${w||""} ${l}`},style:{borderRadius:10,borderRight:"1px solid rgba(0, 0, 0, .05)",borderBottom:"1px solid rgba(0, 0, 0, .05)",overflow:"auto",...e.style},bordered:s!==!1,scroll:z,components:R,columns:i})]})}const re=c.memo(q);export{re as B};