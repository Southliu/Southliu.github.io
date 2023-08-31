import{j as g,r as i}from"./react.76efb1e3.js";import{E as M}from"./components_Business.a1f9c3ad.js";import{R as k}from"./react-resizable.f6303e9e.js";import{a as F}from"./ahooks.3df0ac5f.js";import{i as O,j as U}from"./antd.469ebff6.js";function _(e){var r;const l=document.documentElement.clientHeight||document.body.clientHeight,t=((r=e==null?void 0:e.getBoundingClientRect())==null?void 0:r.top)||0,s=document.getElementById("pagination"),u=(s==null?void 0:s.offsetHeight)||0,H=l-t-u;return H>0?H-55:450}function A(e){switch(e){case"large":return 54;case"middle":return 46;default:return 38}}function Y(e){for(let l=0;l<e.length;l++){const t=e[l];t.ellipsis===void 0&&(t.ellipsis=!0),t.render||(t.render=s=>s||(s===0?s:M))}return e}function B(e){const{onResize:l,width:t,...s}=e;return t?g.jsx(k,{width:t,height:0,handle:g.jsx("span",{className:"react-resizable-handle",onClick:u=>{u.stopPropagation()}}),onResize:l,draggableOpts:{enableUserSelectHack:!1},children:g.jsx("th",{...s})}):g.jsx("th",{...s})}function I(e,l){switch(l.type){case"changeScroll":let t=l.curScrollTop||0,s=l.scrollHeight||0;const u=l.tableScrollY||0;return s<=0&&(s=0),s!==0&&u===e.tableScrollY&&(s=e.scrollHeight),e.scrollHeight&&t>e.scrollHeight&&(t=e.scrollHeight),{...e,curScrollTop:t,scrollHeight:s,tableScrollY:u};case"reset":return{...e,curScrollTop:0,scrollHeight:0};default:throw new Error("表格：未知错误类型!")}}function $(e){return typeof e=="number"&&isFinite(e)}const P=i.createContext({dispatch:void 0,renderLen:1,start:0,offsetStart:0,rowHeight:46,totalLen:0});function K(e){const{children:l,...t}=e,{renderLen:s,start:u,offsetStart:H}=i.useContext(P);let r=null;if(l&&l!==null){const f=l==null?void 0:l[1];Array.isArray(f)&&f.length?r=[l==null?void 0:l[0],f.slice(u,u+s).map(a=>Array.isArray(a)?a[0]:a)]:r=l}return g.jsx("tbody",{...t,style:{transform:`translateY(-${H}px)`},children:r})}const V={rowHeight:38,curScrollTop:0,scrollHeight:0,tableScrollY:0};let N=0;function W(e){var j,E,m,S,w;const{style:l,children:t,...s}=e,{width:u,...H}=l,[r,f]=i.useReducer(I,V),a=i.useRef(null),R=i.useRef(null),[h,v]=i.useState(((m=(E=(j=t==null?void 0:t[2])==null?void 0:j.props)==null?void 0:E.data)==null?void 0:m.length)??0);i.useEffect(()=>{var o,n,b,x,C,L;$((b=(n=(o=t==null?void 0:t[1])==null?void 0:o.props)==null?void 0:n.data)==null?void 0:b.length)&&v((L=(C=(x=t==null?void 0:t[1])==null?void 0:x.props)==null?void 0:C.data)==null?void 0:L.length)},[t]);const p=i.useMemo(()=>{let o="auto";return r.rowHeight&&h&&(o=r.rowHeight*h),o},[r.rowHeight,h]);let c=0;typeof N=="string"?c=(w=(S=a.current)==null?void 0:S.parentNode)==null?void 0:w.offsetHeight:c=N,$(p)&&Number(p)<c&&(c=p),c<=0&&(c=0);const z=i.useMemo(()=>{let o=1;if(r.rowHeight&&h&&c)if(c<=0)o=0;else{const n=(c/r.rowHeight|0)+5;o=n>h?h:n}return o},[r.rowHeight,h,c]);let d=r.rowHeight?r.curScrollTop/r.rowHeight|0:0,T=r.rowHeight?r.curScrollTop%r.rowHeight:0;r.curScrollTop&&r.rowHeight&&r.curScrollTop>r.rowHeight?d>h-z?T=0:d>1&&(d=d-1,T+=r.rowHeight):d=0,i.useEffect(()=>{var n;const o=(n=a.current)==null?void 0:n.parentNode;o&&(o.scrollTop=0),f({type:"reset"})},[h]);const y=F(o=>{var b,x;const n=((b=o==null?void 0:o.target)==null?void 0:b.scrollTop)??0;if(n!==r.curScrollTop){const C=((x=o==null?void 0:o.target)==null?void 0:x.scrollHeight)-c;f({type:"changeScroll",curScrollTop:n,scrollHeight:C,tableScrollY:c})}},{wait:60});return i.useEffect(()=>{var n;const o=(n=a==null?void 0:a.current)==null?void 0:n.parentNode;return o&&o.addEventListener("scroll",b=>y.run(b)),()=>{o.removeEventListener("scroll",b=>y.run(b))}},[a,r.curScrollTop,c,r.scrollHeight,y]),g.jsx("div",{className:"virtualTable",ref:a,style:{width:"100%",position:"relative",height:p,boxSizing:"border-box",paddingTop:r.curScrollTop},children:g.jsx(P.Provider,{value:{dispatch:f,rowHeight:r.rowHeight,start:d,offsetStart:T,renderLen:z,totalLen:h},children:g.jsx("table",{...s,ref:R,style:{...H,width:u,position:"relative"},children:t})})})}function X(e){const{height:l,size:t}=e;return N=l,V.rowHeight=A(t),{table:W,body:{wrapper:K}}}function Z(e){const{loading:l,isZebra:t,isBordered:s,isVirtual:u,scrollX:H,scrollY:r,rowClassName:f,size:a}=e,[R,h]=i.useState(Y(e.columns)),v=i.useRef(null);i.useEffect(()=>{h(Y(e.columns))},[e.columns]);const p=_(v.current),c=m=>(S,{size:w})=>{const o=[...R];o[m]={...o[m],width:w.width},h(o)},z=R.map((m,S)=>({...m,onHeaderCell:w=>({width:w.width,onResize:c(S)})})),d=X({height:p,size:a||"small"}),T=i.useMemo(()=>({header:{cell:B},body:{wrapper:d.body.wrapper},table:d.table}),[d]),y=u===!0?T:{header:{cell:B}},j={...e.scroll,x:H??"max-content",y:r||p||void 0},E=(m,S,w)=>{const o=typeof f=="string"?f:f==null?void 0:f(m,S,w),n=`!h-${A(a)}px`;return`${o||""} ${n}`};return g.jsxs("div",{id:"table",className:`
        overflow-auto
        ${s!==!1?"bordered":""}
        ${t!==!1?"zebra":""}
      `,children:[!p&&g.jsx(O,{}),p&&g.jsx(U,{ref:v,size:"small",rowKey:"id",pagination:!1,loading:l,...e,rowClassName:E,style:{borderRadius:10,borderRight:"1px solid rgba(0, 0, 0, .05)",borderBottom:"1px solid rgba(0, 0, 0, .05)",overflow:"auto",...e.style},bordered:s!==!1,scroll:j,components:y,columns:z})]})}const ee=i.memo(Z);export{ee as B};
