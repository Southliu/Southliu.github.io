import{j as p,a as k}from"./components_Bottom.f649ec7b.js";import{r as c}from"./react.017637b6.js";import{E as I}from"./components_Business.4504c7d5.js";import{R as j}from"./react-resizable.8e820268.js";import{a as F}from"./ahooks.0bfe52b7.js";import{h as O,i as U}from"./antd.b8eb8a06.js";function _(){const e=window.innerHeight,o=document.getElementById("header"),t=o==null?void 0:o.offsetHeight,s=document.getElementById("searches"),a=s==null?void 0:s.offsetHeight,g=document.getElementById("pagination"),r=g==null?void 0:g.offsetHeight;let n=e||0;return t&&n>0&&(n-=t),a&&n>0&&(n-=a),r&&n>0&&(n-=r),n>0?n-65:450}function P(e){switch(e){case"large":return 54;case"middle":return 46;default:return 38}}function B(e){for(let o=0;o<e.length;o++){const t=e[o];t.ellipsis===void 0&&(t.ellipsis=!0),t.render||(t.render=s=>s||(s===0?s:I))}return e}function $(e){const{onResize:o,width:t,...s}=e;return t?p(j,{width:t,height:0,handle:p("span",{className:"react-resizable-handle",onClick:a=>{a.stopPropagation()}}),onResize:o,draggableOpts:{enableUserSelectHack:!1},children:p("th",{...s})}):p("th",{...s})}function K(e,o){switch(o.type){case"changeScroll":let t=o.curScrollTop||0,s=o.scrollHeight||0;const a=o.tableScrollY||0;return s<=0&&(s=0),s!==0&&a===e.tableScrollY&&(s=e.scrollHeight),e.scrollHeight&&t>e.scrollHeight&&(t=e.scrollHeight),{...e,curScrollTop:t,scrollHeight:s,tableScrollY:a};case"reset":return{...e,curScrollTop:0,scrollHeight:0};default:throw new Error("表格：未知错误类型!")}}function A(e){return typeof e=="number"&&isFinite(e)}const V=c.exports.createContext({dispatch:void 0,renderLen:1,start:0,offsetStart:0,rowHeight:46,totalLen:0});function W(e){const{children:o,...t}=e,{renderLen:s,start:a,offsetStart:g}=c.exports.useContext(V);let r=null;if(o&&o!==null){const n=o==null?void 0:o[1];Array.isArray(n)&&n.length?r=[o==null?void 0:o[0],n.slice(a,a+s).map(u=>Array.isArray(u)?u[0]:u)]:r=o}return p("tbody",{...t,style:{transform:`translateY(-${g}px)`},children:r})}const M={rowHeight:38,curScrollTop:0,scrollHeight:0,tableScrollY:0};let L=0;function X(e){var E,d,S,b,w;const{style:o,children:t,...s}=e,{width:a,...g}=o,[r,n]=c.exports.useReducer(K,M),u=c.exports.useRef(null),C=c.exports.useRef(null),[f,T]=c.exports.useState(((S=(d=(E=t==null?void 0:t[1])==null?void 0:E.props)==null?void 0:d.data)==null?void 0:S.length)??0);c.exports.useEffect(()=>{var l,h,m,z,N,Y;A((m=(h=(l=t==null?void 0:t[1])==null?void 0:l.props)==null?void 0:h.data)==null?void 0:m.length)&&T((Y=(N=(z=t==null?void 0:t[1])==null?void 0:z.props)==null?void 0:N.data)==null?void 0:Y.length)},[t]);const y=c.exports.useMemo(()=>{let l="auto";return r.rowHeight&&f&&(l=r.rowHeight*f),l},[r.rowHeight,f]);let i=0;typeof L=="string"?i=(w=(b=u.current)==null?void 0:b.parentNode)==null?void 0:w.offsetHeight:i=L,A(y)&&y<i&&(i=y),i<=0&&(i=0);const x=c.exports.useMemo(()=>{let l=1;if(r.rowHeight&&f&&i)if(i<=0)l=0;else{const h=(i/r.rowHeight|0)+5;l=h>f?f:h}return l},[r.rowHeight,f,i]);let H=r.rowHeight?r.curScrollTop/r.rowHeight|0:0,v=r.rowHeight?r.curScrollTop%r.rowHeight:0;r.curScrollTop&&r.rowHeight&&r.curScrollTop>r.rowHeight?H>f-x?v=0:H>1&&(H=H-1,v+=r.rowHeight):H=0,c.exports.useEffect(()=>{var h;const l=(h=u.current)==null?void 0:h.parentNode;l&&(l.scrollTop=0),n({type:"reset"})},[f]);const R=F(l=>{var m,z;const h=((m=l==null?void 0:l.target)==null?void 0:m.scrollTop)??0;if(h!==r.curScrollTop){const N=((z=l==null?void 0:l.target)==null?void 0:z.scrollHeight)-i;n({type:"changeScroll",curScrollTop:h,scrollHeight:N,tableScrollY:i})}},{wait:60});return c.exports.useEffect(()=>{var h;const l=(h=u==null?void 0:u.current)==null?void 0:h.parentNode;return l&&l.addEventListener("scroll",m=>R.run(m)),()=>{l.removeEventListener("scroll",m=>R.run(m))}},[u,r.curScrollTop,i,r.scrollHeight,R]),p("div",{className:"virtualTable",ref:u,style:{width:"100%",position:"relative",height:y,boxSizing:"border-box",paddingTop:r.curScrollTop},children:p(V.Provider,{value:{dispatch:n,rowHeight:r.rowHeight,start:H,offsetStart:v,renderLen:x,totalLen:f},children:p("table",{...s,ref:C,style:{...g,width:a,position:"relative"},children:t})})})}function Z(e){const{height:o,size:t}=e;return L=o,M.rowHeight=P(t),{table:X,body:{wrapper:W}}}function q(e){const{loading:o,isZebra:t,isBordered:s,isVirtual:a,scrollX:g,scrollY:r,rowClassName:n,size:u}=e,[C,f]=c.exports.useState(B(e.columns));c.exports.useEffect(()=>{f(B(e.columns))},[e.columns]);const T=_(),y=d=>(S,{size:b})=>{const w=[...C];w[d]={...w[d],width:b.width},f(w)},i=C.map((d,S)=>({...d,onHeaderCell:b=>({width:b.width,onResize:y(S)})})),x=Z({height:T,size:u||"small"}),H=c.exports.useMemo(()=>({header:{cell:$},body:{wrapper:x.body.wrapper},table:x.table}),[x]),v=a===!0?H:{header:{cell:$}},R={...e.scroll,x:g??"max-content",y:r||T||void 0};return k("div",{id:"table",className:`
        overflow-auto
        ${s!==!1?"bordered":""}
        ${t!==!1?"zebra":""}
      `,children:[!T&&p(O,{}),T&&p(U,{size:"small",rowKey:"id",pagination:!1,loading:o,...e,rowClassName:(d,S,b)=>{const w=typeof n=="string"?n:n==null?void 0:n(d,S,b),l=`!h-${P(u)}px`;return`${w||""} ${l}`},style:{borderRadius:10,borderRight:"1px solid rgba(0, 0, 0, .05)",borderBottom:"1px solid rgba(0, 0, 0, .05)",overflow:"auto",...e.style},bordered:s!==!1,scroll:R,components:v,columns:i})]})}const re=c.exports.memo(q);export{re as B};
