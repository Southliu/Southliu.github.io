import{c as U,d as je,g as Ne,e as C,f as $,b as te}from"./@babel_runtime@7.20.1-c09c1810.js";import{r as a}from"./react@18.2.0-693b9b6f.js";import{i as Pt,b as Un,s as Bt,t as Ot,p as De,g as zn,G as Wn,c as zt,D as Fn,q as Wt,H as Kn,I as Ft,a as Kt,x as At}from"./rc-util@5.24.6_biqbaboplfbrettd7655fr4n2y-0f35c327.js";import{c as ue}from"./classnames@2.3.2-d75d9a59.js";import{s as cn}from"./shallowequal@1.1.0-be60d069.js";import{R as un}from"./rc-resize-observer@1.2.0_biqbaboplfbrettd7655fr4n2y-dfe0dbb2.js";import{j as v,b as ce,F as Ue}from"./@ant-design_cssinjs@1.0.2_biqbaboplfbrettd7655fr4n2y-8bfcb13e.js";function Dt(e){return null}function Vt(e){return null}var Ut="RC_TABLE_KEY";function jn(e){return e==null?[]:Array.isArray(e)?e:[e]}function Xn(e,n){if(!n&&typeof n!="number")return e;for(var t=jn(n),r=e,o=0;o<t.length;o+=1){if(!r)return null;var i=t[o];r=r[i]}return r}function Xe(e){var n=[],t={};return e.forEach(function(r){for(var o=r||{},i=o.key,s=o.dataIndex,c=i||jn(s).join("-")||Ut;t[c];)c="".concat(c,"_next");t[c]=!0,n.push(c)}),n}function an(e){return e!=null}var Yn=a.exports.createContext(!1);function jt(){var e=a.exports.createContext(null),n=function(r){var o=r.value,i=r.children,s=a.exports.useRef(o);s.current=o;var c=a.exports.useState(function(){return{getValue:function(){return s.current},listeners:new Set}}),l=U(c,1),d=l[0];return Un(function(){d.listeners.forEach(function(f){f(o)})},[o]),v(e.Provider,{value:d,children:i})};return{Context:e,Provider:n}}function Xt(e,n){var t=Pt(n),r=a.exports.useContext(e==null?void 0:e.Context),o=r||{},i=o.listeners,s=o.getValue,c=a.exports.useState(function(){return t(r?s():null)}),l=U(c,2),d=l[0],f=l[1];return Un(function(){if(!r)return;function u(x){f(function(p){var m=t(x);return cn(p,m)?p:m})}return i.add(u),function(){i.delete(u)}},[r]),d}var Gn=jt(),Ye=a.exports.createContext(null),_n=a.exports.createContext({renderWithProps:!1}),Yt=["colSpan","rowSpan","style","className"];function Gt(e,n,t,r){var o=e+n-1;return e<=r&&o>=t}function _t(e){return e&&je(e)==="object"&&!Array.isArray(e)&&!a.exports.isValidElement(e)}function qt(e){return typeof e=="string"?!0:Bt(e)}var Jt=function(n){var t=n.ellipsis,r=n.rowType,o=n.children,i,s=t===!0?{showTitle:!0}:t;return s&&(s.showTitle||r==="header")&&(typeof o=="string"||typeof o=="number"?i=o.toString():a.exports.isValidElement(o)&&typeof o.props.children=="string"&&(i=o.props.children)),i};function Qt(e,n){var t,r,o,i=e.prefixCls,s=e.className,c=e.record,l=e.index,d=e.renderIndex,f=e.dataIndex,u=e.render,x=e.children,p=e.component,m=p===void 0?"td":p,b=e.colSpan,y=e.rowSpan,E=e.fixLeft,k=e.fixRight,z=e.firstFixLeft,V=e.lastFixLeft,T=e.firstFixRight,M=e.lastFixRight,W=e.appendNode,P=e.additionalProps,B=P===void 0?{}:P,F=e.ellipsis,K=e.align,w=e.rowType,H=e.isSticky,S=e.hovering,O=e.onHover,R="".concat(i,"-cell"),N=a.exports.useContext(_n),g=a.exports.useContext(Yn),j=a.exports.useContext(Ye),_=j.allColumnsFixedLeft,ae=a.exports.useMemo(function(){if(an(x))return[x];var pe=Xn(c,f),I=pe,Y=void 0;if(u){var ve=u(pe,c,d);_t(ve)?(I=ve.children,Y=ve.props,N.renderWithProps=!0):I=ve}return[I,Y]},[N.renderWithProps?Math.random():0,x,f,N,c,u,d]),Q=U(ae,2),fe=Q[0],G=Q[1],re=fe;je(re)==="object"&&!Array.isArray(re)&&!a.exports.isValidElement(re)&&(re=null),F&&(V||T)&&(re=v("span",{className:"".concat(R,"-content"),children:re}));var Z=G||{},me=Z.colSpan,Ce=Z.rowSpan,Re=Z.style,Me=Z.className,be=Ne(Z,Yt),X=(t=me!==void 0?me:b)!==null&&t!==void 0?t:1,q=(r=Ce!==void 0?Ce:y)!==null&&r!==void 0?r:1;if(X===0||q===0)return null;var A={},J=typeof E=="number"&&g,le=typeof k=="number"&&g;J&&(A.position="sticky",A.left=E),le&&(A.position="sticky",A.right=k);var ee={};K&&(ee.textAlign=K);var Se=function(I){var Y;c&&O(l,l+q-1),B==null||(Y=B.onMouseEnter)===null||Y===void 0||Y.call(B,I)},ge=function(I){var Y;c&&O(-1,-1),B==null||(Y=B.onMouseLeave)===null||Y===void 0||Y.call(B,I)},Ee=Jt({rowType:w,ellipsis:F,children:fe}),Pe=C(C(C({title:Ee},be),B),{},{colSpan:X!==1?X:null,rowSpan:q!==1?q:null,className:ue(R,s,(o={},$(o,"".concat(R,"-fix-left"),J&&g),$(o,"".concat(R,"-fix-left-first"),z&&g),$(o,"".concat(R,"-fix-left-last"),V&&g),$(o,"".concat(R,"-fix-left-all"),V&&_&&g),$(o,"".concat(R,"-fix-right"),le&&g),$(o,"".concat(R,"-fix-right-first"),T&&g),$(o,"".concat(R,"-fix-right-last"),M&&g),$(o,"".concat(R,"-ellipsis"),F),$(o,"".concat(R,"-with-append"),W),$(o,"".concat(R,"-fix-sticky"),(J||le)&&H&&g),$(o,"".concat(R,"-row-hover"),!G&&S),o),B.className,Me),style:C(C(C(C({},B.style),ee),A),Re),onMouseEnter:Se,onMouseLeave:ge,ref:qt(m)?n:null});return ce(m,{...Pe,children:[W,re]})}var qn=a.exports.forwardRef(Qt);qn.displayName="Cell";var Zt=["expanded","className","hovering"],er=a.exports.memo(qn,function(e,n){return n.shouldCellUpdate?Zt.every(function(t){return e[t]===n[t]})&&!n.shouldCellUpdate(n.record,e.record):cn(e,n)}),$e=a.exports.forwardRef(function(e,n){var t=e.index,r=e.additionalProps,o=r===void 0?{}:r,i=e.colSpan,s=e.rowSpan,c=o.colSpan,l=o.rowSpan,d=i!=null?i:c,f=s!=null?s:l,u=Xt(Gn,function(m){var b=Gt(t,f||1,m==null?void 0:m.startRow,m==null?void 0:m.endRow);return{onHover:m==null?void 0:m.onHover,hovering:b}}),x=u.onHover,p=u.hovering;return v(er,{...e,colSpan:d,rowSpan:f,hovering:p,ref:n,onHover:x})});$e.displayName="WrappedCell";var de=a.exports.createContext(null);function dn(e,n,t,r,o){var i=t[e]||{},s=t[n]||{},c,l;i.fixed==="left"?c=r.left[e]:s.fixed==="right"&&(l=r.right[n]);var d=!1,f=!1,u=!1,x=!1,p=t[n+1],m=t[e-1];if(o==="rtl"){if(c!==void 0){var b=m&&m.fixed==="left";x=!b}else if(l!==void 0){var y=p&&p.fixed==="right";u=!y}}else if(c!==void 0){var E=p&&p.fixed==="left";d=!E}else if(l!==void 0){var k=m&&m.fixed==="right";f=!k}return{fixLeft:c,fixRight:l,lastFixLeft:d,firstFixRight:f,lastFixRight:u,firstFixLeft:x,isSticky:r.isSticky}}function Jn(e){var n=e.cells,t=e.stickyOffsets,r=e.flattenColumns,o=e.rowComponent,i=e.cellComponent,s=e.onHeaderRow,c=e.index,l=a.exports.useContext(de),d=l.prefixCls,f=l.direction,u;s&&(u=s(n.map(function(p){return p.column}),c));var x=Xe(n.map(function(p){return p.column}));return v(o,{...u,children:n.map(function(p,m){var b=p.column,y=dn(p.colStart,p.colEnd,r,t,f),E;return b&&b.onHeaderCell&&(E=p.column.onHeaderCell(b)),a.exports.createElement($e,{...p,ellipsis:b.ellipsis,align:b.align,component:i,prefixCls:d,key:x[m],...y,additionalProps:E,rowType:"header"})})})}Jn.displayName="HeaderRow";function nr(e){var n=[];function t(s,c){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;n[l]=n[l]||[];var d=c,f=s.filter(Boolean).map(function(u){var x={key:u.key,className:u.className||"",children:u.title,column:u,colStart:d},p=1,m=u.children;return m&&m.length>0&&(p=t(m,d,l+1).reduce(function(b,y){return b+y},0),x.hasSubColumns=!0),"colSpan"in u&&(p=u.colSpan),"rowSpan"in u&&(x.rowSpan=u.rowSpan),x.colSpan=p,x.colEnd=x.colStart+p-1,n[l].push(x),d+=p,p});return f}t(e,0);for(var r=n.length,o=function(c){n[c].forEach(function(l){!("rowSpan"in l)&&!l.hasSubColumns&&(l.rowSpan=r-c)})},i=0;i<r;i+=1)o(i);return n}function An(e){var n=e.stickyOffsets,t=e.columns,r=e.flattenColumns,o=e.onHeaderRow,i=a.exports.useContext(de),s=i.prefixCls,c=i.getComponent,l=a.exports.useMemo(function(){return nr(t)},[t]),d=c(["header","wrapper"],"thead"),f=c(["header","row"],"tr"),u=c(["header","cell"],"th");return v(d,{className:"".concat(s,"-thead"),children:l.map(function(x,p){var m=v(Jn,{flattenColumns:r,cells:x,stickyOffsets:n,rowComponent:f,cellComponent:u,onHeaderRow:o,index:p},p);return m})})}var Qn=a.exports.createContext(null);function Zn(e){var n=e.prefixCls,t=e.children,r=e.component,o=e.cellComponent,i=e.className,s=e.expanded,c=e.colSpan,l=e.isEmpty,d=a.exports.useContext(de),f=d.scrollbarSize,u=a.exports.useContext(Qn),x=u.fixHeader,p=u.fixColumn,m=u.componentWidth,b=u.horizonScroll;return a.exports.useMemo(function(){var y=t;return(l?b:p)&&(y=v("div",{style:{width:m-(x?f:0),position:"sticky",left:0,overflow:"hidden"},className:"".concat(n,"-expanded-row-fixed"),children:m!==0&&y})),v(r,{className:i,style:{display:s?null:"none"},children:v($e,{component:o,prefixCls:n,colSpan:c,children:y})})},[t,r,i,s,c,l,f,m,p,x,b])}var et=a.exports.createContext(null);function nt(e){var n=e.className,t=e.style,r=e.record,o=e.index,i=e.renderIndex,s=e.rowKey,c=e.rowExpandable,l=e.expandedKeys,d=e.onRow,f=e.indent,u=f===void 0?0:f,x=e.rowComponent,p=e.cellComponent,m=e.childrenColumnName,b=a.exports.useContext(de),y=b.prefixCls,E=b.fixedInfoList,k=a.exports.useContext(Ye),z=k.flattenColumns,V=k.expandableType,T=k.expandRowByClick,M=k.onTriggerExpand,W=k.rowClassName,P=k.expandedRowClassName,B=k.indentSize,F=k.expandIcon,K=k.expandedRowRender,w=k.expandIconColumnIndex,H=a.exports.useState(!1),S=U(H,2),O=S[0],R=S[1],N=l&&l.has(e.recordKey);a.exports.useEffect(function(){N&&R(!0)},[N]);var g=V==="row"&&(!c||c(r)),j=V==="nest",_=m&&r&&r[m],ae=g||j,Q=a.exports.useRef(M);Q.current=M;var fe=function(){Q.current.apply(Q,arguments)},G=d==null?void 0:d(r,o),re=function(q){var A;T&&ae&&fe(r,q);for(var J=arguments.length,le=new Array(J>1?J-1:0),ee=1;ee<J;ee++)le[ee-1]=arguments[ee];G==null||(A=G.onClick)===null||A===void 0||A.call.apply(A,[G,q].concat(le))},Z;typeof W=="string"?Z=W:typeof W=="function"&&(Z=W(r,o,u));var me=Xe(z),Ce=v(x,{...G,"data-row-key":s,className:ue(n,"".concat(y,"-row"),"".concat(y,"-row-level-").concat(u),Z,G&&G.className),style:C(C({},t),G?G.style:null),onClick:re,children:z.map(function(X,q){var A=X.render,J=X.dataIndex,le=X.className,ee=me[q],Se=E[q],ge;q===(w||0)&&j&&(ge=ce(Ue,{children:[v("span",{style:{paddingLeft:"".concat(B*u,"px")},className:"".concat(y,"-row-indent indent-level-").concat(u)}),F({prefixCls:y,expanded:N,expandable:_,record:r,onExpand:fe})]}));var Ee;return X.onCell&&(Ee=X.onCell(r,o)),v($e,{className:le,ellipsis:X.ellipsis,align:X.align,component:p,prefixCls:y,record:r,index:o,renderIndex:i,dataIndex:J,render:A,shouldCellUpdate:X.shouldCellUpdate,expanded:ge&&N,...Se,appendNode:ge,additionalProps:Ee},ee)})}),Re;if(g&&(O||N)){var Me=K(r,o,u+1,N),be=P&&P(r,o,u);Re=v(Zn,{expanded:N,className:ue("".concat(y,"-expanded-row"),"".concat(y,"-expanded-row-level-").concat(u+1),be),prefixCls:y,component:x,cellComponent:p,colSpan:z.length,isEmpty:!1,children:Me})}return ce(Ue,{children:[Ce,Re]})}nt.displayName="BodyRow";function tt(e,n,t,r,o,i){var s=[];s.push({record:e,indent:n,index:i});var c=o(e),l=r==null?void 0:r.has(c);if(e&&Array.isArray(e[t])&&l)for(var d=0;d<e[t].length;d+=1){var f=tt(e[t][d],n+1,t,r,o,d);s.push.apply(s,te(f))}return s}function tr(e,n,t,r){var o=a.exports.useMemo(function(){if(t!=null&&t.size){for(var i=[],s=0;s<(e==null?void 0:e.length);s+=1){var c=e[s];i.push.apply(i,te(tt(c,0,n,t,r,s)))}return i}return e==null?void 0:e.map(function(l,d){return{record:l,indent:0,index:d}})},[e,n,t,r]);return o}function rr(e){var n=e.columnKey,t=e.onColumnResize,r=a.exports.useRef();return a.exports.useEffect(function(){r.current&&t(n,r.current.offsetWidth)},[]),v(un,{data:n,children:v("td",{ref:r,style:{padding:0,border:0,height:0},children:v("div",{style:{height:0,overflow:"hidden"},children:"\xA0"})})})}function or(e){var n=e.prefixCls,t=e.columnsKey,r=e.onColumnResize;return v("tr",{"aria-hidden":"true",className:"".concat(n,"-measure-row"),style:{height:0,fontSize:0},children:v(un.Collection,{onBatchResize:function(i){i.forEach(function(s){var c=s.data,l=s.size;r(c,l.offsetWidth)})},children:t.map(function(o){return v(rr,{columnKey:o,onColumnResize:r},o)})})})}function ar(e){var n=e.data,t=e.getRowKey,r=e.measureColumnWidth,o=e.expandedKeys,i=e.onRow,s=e.rowExpandable,c=e.emptyNode,l=e.childrenColumnName,d=a.exports.useContext(et),f=d.onColumnResize,u=a.exports.useContext(de),x=u.prefixCls,p=u.getComponent,m=a.exports.useContext(Ye),b=m.flattenColumns,y=tr(n,l,o,t),E=a.exports.useRef({renderWithProps:!1}),k=a.exports.useState(-1),z=U(k,2),V=z[0],T=z[1],M=a.exports.useState(-1),W=U(M,2),P=W[0],B=W[1],F=a.exports.useCallback(function(w,H){T(w),B(H)},[]),K=a.exports.useMemo(function(){var w=p(["body","wrapper"],"tbody"),H=p(["body","row"],"tr"),S=p(["body","cell"],"td"),O;n.length?O=y.map(function(N,g){var j=N.record,_=N.indent,ae=N.index,Q=t(j,g);return v(nt,{rowKey:Q,record:j,recordKey:Q,index:g,renderIndex:ae,rowComponent:H,cellComponent:S,expandedKeys:o,onRow:i,getRowKey:t,rowExpandable:s,childrenColumnName:l,indent:_},Q)}):O=v(Zn,{expanded:!0,className:"".concat(x,"-placeholder"),prefixCls:x,component:H,cellComponent:S,colSpan:b.length,isEmpty:!0,children:c});var R=Xe(b);return ce(w,{className:"".concat(x,"-tbody"),children:[r&&v(or,{prefixCls:x,columnsKey:R,onColumnResize:f}),O]})},[n,x,i,r,o,t,p,c,b,l,f,s,y]);return v(_n.Provider,{value:E.current,children:v(Gn.Provider,{value:{startRow:V,endRow:P,onHover:F},children:K})})}var rt=a.exports.memo(ar);rt.displayName="Body";var lr=["expandable"],ot="RC_TABLE_INTERNAL_COL_DEFINE";function ir(e){var n=e.expandable,t=Ne(e,lr),r;return"expandable"in e?r=C(C({},t),n):r=t,r.showExpandColumn===!1&&(r.expandIconColumnIndex=-1),r}var we={},sr=["children"],cr=["fixed"];function at(e){return Ot(e).filter(function(n){return a.exports.isValidElement(n)}).map(function(n){var t=n.key,r=n.props,o=r.children,i=Ne(r,sr),s=C({key:t},i);return o&&(s.children=at(o)),s})}function ln(e){return e.reduce(function(n,t){var r=t.fixed,o=r===!0?"left":r,i=t.children;return i&&i.length>0?[].concat(te(n),te(ln(i).map(function(s){return C({fixed:o},s)}))):[].concat(te(n),[C(C({},t),{},{fixed:o})])},[])}function ur(e){return e.map(function(n){var t=n.fixed,r=Ne(n,cr),o=t;return t==="left"?o="right":t==="right"&&(o="left"),C({fixed:o},r)})}function dr(e,n){var t=e.prefixCls,r=e.columns,o=e.children,i=e.expandable,s=e.expandedKeys,c=e.columnTitle,l=e.getRowKey,d=e.onTriggerExpand,f=e.expandIcon,u=e.rowExpandable,x=e.expandIconColumnIndex,p=e.direction,m=e.expandRowByClick,b=e.columnWidth,y=e.fixed,E=a.exports.useMemo(function(){return r||at(o)},[r,o]),k=a.exports.useMemo(function(){if(i){var T,M=E.slice();if(!M.includes(we)){var W=x||0;W>=0&&M.splice(W,0,we)}var P=M.indexOf(we);M=M.filter(function(w,H){return w!==we||H===P});var B=E[P],F;(y==="left"||y)&&!x?F="left":(y==="right"||y)&&x===E.length?F="right":F=B?B.fixed:null;var K=(T={},$(T,ot,{className:"".concat(t,"-expand-icon-col"),columnType:"EXPAND_COLUMN"}),$(T,"title",c),$(T,"fixed",F),$(T,"className","".concat(t,"-row-expand-icon-cell")),$(T,"width",b),$(T,"render",function(H,S,O){var R=l(S,O),N=s.has(R),g=u?u(S):!0,j=f({prefixCls:t,expanded:N,expandable:g,record:S,onExpand:d});return m?v("span",{onClick:function(ae){return ae.stopPropagation()},children:j}):j}),T);return M.map(function(w){return w===we?K:w})}return E.filter(function(w){return w!==we})},[i,E,l,s,f,p]),z=a.exports.useMemo(function(){var T=k;return n&&(T=n(T)),T.length||(T=[{render:function(){return null}}]),T},[n,k,p]),V=a.exports.useMemo(function(){return p==="rtl"?ur(ln(z)):ln(z)},[z,p]);return[z,V]}function lt(e){var n=a.exports.useRef(e),t=a.exports.useState({}),r=U(t,2),o=r[1],i=a.exports.useRef(null),s=a.exports.useRef([]);function c(l){s.current.push(l);var d=Promise.resolve();i.current=d,d.then(function(){if(i.current===d){var f=s.current,u=n.current;s.current=[],f.forEach(function(x){n.current=x(n.current)}),i.current=null,u!==n.current&&o({})}})}return a.exports.useEffect(function(){return function(){i.current=null}},[]),[n.current,c]}function fr(e){var n=a.exports.useRef(e||null),t=a.exports.useRef();function r(){window.clearTimeout(t.current)}function o(s){n.current=s,r(),t.current=window.setTimeout(function(){n.current=null,t.current=void 0},100)}function i(){return n.current}return a.exports.useEffect(function(){return r},[]),[o,i]}function pr(e,n,t){var r=a.exports.useMemo(function(){for(var o=[],i=[],s=0,c=0,l=0;l<n;l+=1)if(t==="rtl"){i[l]=c,c+=e[l]||0;var d=n-l-1;o[d]=s,s+=e[d]||0}else{o[l]=s,s+=e[l]||0;var f=n-l-1;i[f]=c,c+=e[f]||0}return{left:o,right:i}},[e,n,t]);return r}var vr=["columnType"];function it(e){for(var n=e.colWidths,t=e.columns,r=e.columCount,o=[],i=r||t.length,s=!1,c=i-1;c>=0;c-=1){var l=n[c],d=t&&t[c],f=d&&d[ot];if(l||f||s){var u=f||{};u.columnType;var x=Ne(u,vr);o.unshift(v("col",{style:{width:l},...x},c)),s=!0}}return v("colgroup",{children:o})}function Dn(e){var n=e.className,t=e.children;return v("div",{className:n,children:t})}var st=a.exports.createContext({});function xr(e){var n=e.className,t=e.index,r=e.children,o=e.colSpan,i=o===void 0?1:o,s=e.rowSpan,c=e.align,l=a.exports.useContext(de),d=l.prefixCls,f=l.direction,u=a.exports.useContext(st),x=u.scrollColumnIndex,p=u.stickyOffsets,m=u.flattenColumns,b=t+i-1,y=b+1===x?i+1:i,E=dn(t,t+y-1,m,p,f);return v($e,{className:n,index:t,component:"td",prefixCls:d,record:null,dataIndex:null,align:c,colSpan:y,rowSpan:s,render:function(){return r},...E})}var mr=["children"];function Cr(e){var n=e.children,t=Ne(e,mr);return v("tr",{...t,children:n})}function Ge(e){var n=e.children;return n}Ge.Row=Cr;Ge.Cell=xr;function Ve(e){var n=e.children,t=e.stickyOffsets,r=e.flattenColumns,o=a.exports.useContext(de),i=o.prefixCls,s=r.length-1,c=r[s],l=a.exports.useMemo(function(){return{stickyOffsets:t,flattenColumns:r,scrollColumnIndex:c!=null&&c.scrollbar?s:null}},[c,r,s,t]);return v(st.Provider,{value:l,children:v("tfoot",{className:"".concat(i,"-summary"),children:n})})}var hr=Ge;function yr(e){var n,t=e.prefixCls,r=e.record,o=e.onExpand,i=e.expanded,s=e.expandable,c="".concat(t,"-row-expand-icon");if(!s)return v("span",{className:ue(c,"".concat(t,"-row-spaced"))});var l=function(f){o(r,f),f.stopPropagation()};return v("span",{className:ue(c,(n={},$(n,"".concat(t,"-row-expanded"),i),$(n,"".concat(t,"-row-collapsed"),!i),n)),onClick:l})}function Rr(e,n,t){var r=[];function o(i){(i||[]).forEach(function(s,c){r.push(n(s,c)),o(s[t])})}return o(e),r}var Sr=function(n,t){var r,o,i=n.scrollBodyRef,s=n.onScroll,c=n.offsetScroll,l=n.container,d=a.exports.useContext(de),f=d.prefixCls,u=((r=i.current)===null||r===void 0?void 0:r.scrollWidth)||0,x=((o=i.current)===null||o===void 0?void 0:o.clientWidth)||0,p=u&&x*(x/u),m=a.exports.useRef(),b=lt({scrollLeft:0,isHiddenScrollBar:!1}),y=U(b,2),E=y[0],k=y[1],z=a.exports.useRef({delta:0,x:0}),V=a.exports.useState(!1),T=U(V,2),M=T[0],W=T[1],P=function(){W(!1)},B=function(S){S.persist(),z.current.delta=S.pageX-E.scrollLeft,z.current.x=0,W(!0),S.preventDefault()},F=function(S){var O,R=S||((O=window)===null||O===void 0?void 0:O.event),N=R.buttons;if(!M||N===0){M&&W(!1);return}var g=z.current.x+S.pageX-z.current.x-z.current.delta;g<=0&&(g=0),g+p>=x&&(g=x-p),s({scrollLeft:g/x*(u+2)}),z.current.x=S.pageX},K=function(){if(!!i.current){var S=Wn(i.current).top,O=S+i.current.offsetHeight,R=l===window?document.documentElement.scrollTop+window.innerHeight:Wn(l).top+l.clientHeight;O-zn()<=R||S>=R-c?k(function(N){return C(C({},N),{},{isHiddenScrollBar:!0})}):k(function(N){return C(C({},N),{},{isHiddenScrollBar:!1})})}},w=function(S){k(function(O){return C(C({},O),{},{scrollLeft:S/u*x||0})})};return a.exports.useImperativeHandle(t,function(){return{setScrollLeft:w}}),a.exports.useEffect(function(){var H=De(document.body,"mouseup",P,!1),S=De(document.body,"mousemove",F,!1);return K(),function(){H.remove(),S.remove()}},[p,M]),a.exports.useEffect(function(){var H=De(l,"scroll",K,!1),S=De(window,"resize",K,!1);return function(){H.remove(),S.remove()}},[l]),a.exports.useEffect(function(){E.isHiddenScrollBar||k(function(H){var S=i.current;return S?C(C({},H),{},{scrollLeft:S.scrollLeft/S.scrollWidth*S.clientWidth}):H})},[E.isHiddenScrollBar]),u<=x||!p||E.isHiddenScrollBar?null:v("div",{style:{height:zn(),width:x,bottom:c},className:"".concat(f,"-sticky-scroll"),children:v("div",{onMouseDown:B,ref:m,className:ue("".concat(f,"-sticky-scroll-bar"),$({},"".concat(f,"-sticky-scroll-bar-active"),M)),style:{width:"".concat(p,"px"),transform:"translate3d(".concat(E.scrollLeft,"px, 0, 0)")}})})};const gr=a.exports.forwardRef(Sr);var Vn=zt()?window:null;function wr(e,n){var t=je(e)==="object"?e:{},r=t.offsetHeader,o=r===void 0?0:r,i=t.offsetSummary,s=i===void 0?0:i,c=t.offsetScroll,l=c===void 0?0:c,d=t.getContainer,f=d===void 0?function(){return Vn}:d,u=f()||Vn;return a.exports.useMemo(function(){var x=!!e;return{isSticky:x,stickyClassName:x?"".concat(n,"-sticky-holder"):"",offsetHeader:o,offsetSummary:s,offsetScroll:l,container:u}},[l,o,s,n,u])}var Nr=["className","noData","columns","flattenColumns","colWidths","columCount","stickyOffsets","direction","fixHeader","stickyTopOffset","stickyBottomOffset","stickyClassName","onScroll","maxContentScroll","children"];function br(e,n){return a.exports.useMemo(function(){for(var t=[],r=0;r<n;r+=1){var o=e[r];if(o!==void 0)t[r]=o;else return null}return t},[e.join("_"),n])}var sn=a.exports.forwardRef(function(e,n){var t=e.className,r=e.noData,o=e.columns,i=e.flattenColumns,s=e.colWidths,c=e.columCount,l=e.stickyOffsets,d=e.direction,f=e.fixHeader,u=e.stickyTopOffset,x=e.stickyBottomOffset,p=e.stickyClassName,m=e.onScroll,b=e.maxContentScroll,y=e.children,E=Ne(e,Nr),k=a.exports.useContext(de),z=k.prefixCls,V=k.scrollbarSize,T=k.isSticky,M=T&&!f?0:V,W=a.exports.useRef(null),P=a.exports.useCallback(function(R){Fn(n,R),Fn(W,R)},[]);a.exports.useEffect(function(){var R;function N(g){var j=g.currentTarget,_=g.deltaX;_&&(m({currentTarget:j,scrollLeft:j.scrollLeft+_}),g.preventDefault())}return(R=W.current)===null||R===void 0||R.addEventListener("wheel",N),function(){var g;(g=W.current)===null||g===void 0||g.removeEventListener("wheel",N)}},[]);var B=a.exports.useMemo(function(){return i.every(function(R){return R.width>=0})},[i]),F=i[i.length-1],K={fixed:F?F.fixed:null,scrollbar:!0,onHeaderCell:function(){return{className:"".concat(z,"-cell-scrollbar")}}},w=a.exports.useMemo(function(){return M?[].concat(te(o),[K]):o},[M,o]),H=a.exports.useMemo(function(){return M?[].concat(te(i),[K]):i},[M,i]),S=a.exports.useMemo(function(){var R=l.right,N=l.left;return C(C({},l),{},{left:d==="rtl"?[].concat(te(N.map(function(g){return g+M})),[0]):N,right:d==="rtl"?R:[].concat(te(R.map(function(g){return g+M})),[0]),isSticky:T})},[M,l,T]),O=br(s,c);return v("div",{style:C({overflow:"hidden"},T?{top:u,bottom:x}:{}),ref:P,className:ue(t,$({},p,!!p)),children:ce("table",{style:{tableLayout:"fixed",visibility:r||O?null:"hidden"},children:[(!r||!b||B)&&v(it,{colWidths:O?[].concat(te(O),[M]):[],columCount:c+1,columns:H}),y(C(C({},E),{},{stickyOffsets:S,columns:w,flattenColumns:H}))]})})});sn.displayName="FixedHolder";var Er=[],kr={},on="rc-table-internal-hook",Lr=a.exports.memo(function(e){var n=e.children;return n},function(e,n){return cn(e.props,n.props)?e.pingLeft!==n.pingLeft||e.pingRight!==n.pingRight:!1});function He(e){var n,t=e.prefixCls,r=e.className,o=e.rowClassName,i=e.style,s=e.data,c=e.rowKey,l=e.scroll,d=e.tableLayout,f=e.direction,u=e.title,x=e.footer,p=e.summary,m=e.id,b=e.showHeader,y=e.components,E=e.emptyText,k=e.onRow,z=e.onHeaderRow,V=e.internalHooks,T=e.transformColumns,M=e.internalRefs,W=e.sticky,P=s||Er,B=!!P.length,F=a.exports.useCallback(function(h,L){return Xn(y||{},h)||L},[y]),K=a.exports.useMemo(function(){return typeof c=="function"?c:function(h){var L=h&&h[c];return L}},[c]),w=ir(e),H=w.expandIcon,S=w.expandedRowKeys,O=w.defaultExpandedRowKeys,R=w.defaultExpandAllRows,N=w.expandedRowRender,g=w.columnTitle,j=w.onExpand,_=w.onExpandedRowsChange,ae=w.expandRowByClick,Q=w.rowExpandable,fe=w.expandIconColumnIndex,G=w.expandedRowClassName,re=w.childrenColumnName,Z=w.indentSize,me=H||yr,Ce=re||"children",Re=a.exports.useMemo(function(){return N?"row":e.expandable&&V===on&&e.expandable.__PARENT_RENDER_ICON__||P.some(function(h){return h&&je(h)==="object"&&h[Ce]})?"nest":!1},[!!N,P]),Me=a.exports.useState(function(){return O||(R?Rr(P,K,Ce):[])}),be=U(Me,2),X=be[0],q=be[1],A=a.exports.useMemo(function(){return new Set(S||X||[])},[S,X]),J=a.exports.useCallback(function(h){var L=K(h,P.indexOf(h)),D,ne=A.has(L);ne?(A.delete(L),D=te(A)):D=[].concat(te(A),[L]),q(D),j&&j(!ne,h),_&&_(D)},[K,A,P,j,_]),le=a.exports.useState(0),ee=U(le,2),Se=ee[0],ge=ee[1],Ee=dr(C(C(C({},e),w),{},{expandable:!!N,columnTitle:g,expandedKeys:A,getRowKey:K,onTriggerExpand:J,expandIcon:me,expandIconColumnIndex:fe,direction:f}),V===on?T:null),Pe=U(Ee,2),pe=Pe[0],I=Pe[1],Y=a.exports.useMemo(function(){return{columns:pe,flattenColumns:I}},[pe,I]),ve=a.exports.useRef(),fn=a.exports.useRef(),ie=a.exports.useRef(),pn=a.exports.useRef(),vn=a.exports.useRef(),ct=a.exports.useState(!1),xn=U(ct,2),mn=xn[0],Be=xn[1],ut=a.exports.useState(!1),Cn=U(ut,2),hn=Cn[0],Oe=Cn[1],dt=lt(new Map),yn=U(dt,2),ft=yn[0],pt=yn[1],vt=Xe(I),Rn=vt.map(function(h){return ft.get(h)}),Sn=a.exports.useMemo(function(){return Rn},[Rn.join("_")]),ke=pr(Sn,I.length,f),oe=l&&an(l.y),se=l&&an(l.x)||Boolean(w.fixed),Ie=se&&I.some(function(h){var L=h.fixed;return L}),gn=a.exports.useRef(),Le=wr(W,t),he=Le.isSticky,xt=Le.offsetHeader,mt=Le.offsetSummary,Ct=Le.offsetScroll,ht=Le.stickyClassName,yt=Le.container,xe=p==null?void 0:p(P),ze=(oe||he)&&a.exports.isValidElement(xe)&&xe.type===Ge&&xe.props.fixed,_e,We,qe;oe&&(We={overflowY:"scroll",maxHeight:l.y}),se&&(_e={overflowX:"auto"},oe||(We={overflowY:"hidden"}),qe={width:(l==null?void 0:l.x)===!0?"auto":l==null?void 0:l.x,minWidth:"100%"});var wn=a.exports.useCallback(function(h,L){Wt(ve.current)&&pt(function(D){if(D.get(h)!==L){var ne=new Map(D);return ne.set(h,L),ne}return D})},[]),Rt=fr(null),Nn=U(Rt,2),St=Nn[0],bn=Nn[1];function Fe(h,L){!L||(typeof L=="function"?L(h):L.scrollLeft!==h&&(L.scrollLeft=h))}var Te=function(L){var D=L.currentTarget,ne=L.scrollLeft,Ht=f==="rtl",ye=typeof ne=="number"?ne:D.scrollLeft,On=D||kr;if(!bn()||bn()===On){var nn;St(On),Fe(ye,fn.current),Fe(ye,ie.current),Fe(ye,vn.current),Fe(ye,(nn=gn.current)===null||nn===void 0?void 0:nn.setScrollLeft)}if(D){var tn=D.scrollWidth,rn=D.clientWidth;if(tn===rn){Be(!1),Oe(!1);return}Ht?(Be(-ye<tn-rn),Oe(-ye>0)):(Be(ye>0),Oe(ye<tn-rn))}},En=function(){se&&ie.current?Te({currentTarget:ie.current}):(Be(!1),Oe(!1))},gt=function(L){var D=L.width;D!==Se&&(En(),ge(ve.current?ve.current.offsetWidth:D))},kn=a.exports.useRef(!1);a.exports.useEffect(function(){kn.current&&En()},[se,s,pe.length]),a.exports.useEffect(function(){kn.current=!0},[]);var wt=a.exports.useState(0),Ln=U(wt,2),Ke=Ln[0],Tn=Ln[1],Nt=a.exports.useState(!0),Mn=U(Nt,2),bt=Mn[0],Et=Mn[1];a.exports.useEffect(function(){ie.current instanceof Element?Tn(Kn(ie.current).width):Tn(Kn(pn.current).width),Et(Ft("position","sticky"))},[]),a.exports.useEffect(function(){V===on&&M&&(M.body.current=ie.current)});var In=F(["table"],"table"),Ae=a.exports.useMemo(function(){return d||(Ie?(l==null?void 0:l.x)==="max-content"?"auto":"fixed":oe||he||I.some(function(h){var L=h.ellipsis;return L})?"fixed":"auto")},[oe,Ie,I,d,he]),Je,Qe={colWidths:Sn,columCount:I.length,stickyOffsets:ke,onHeaderRow:z,fixHeader:oe,scroll:l},kt=a.exports.useMemo(function(){return B?null:typeof E=="function"?E():E},[B,E]),$n=v(rt,{data:P,measureColumnWidth:oe||se||he,expandedKeys:A,rowExpandable:Q,getRowKey:K,onRow:k,emptyNode:kt,childrenColumnName:Ce}),Hn=v(it,{colWidths:I.map(function(h){var L=h.width;return L}),columns:I}),Pn=F(["body"]);if(oe||he){var Ze;typeof Pn=="function"?(Ze=Pn(P,{scrollbarSize:Ke,ref:ie,onScroll:Te}),Qe.colWidths=I.map(function(h,L){var D=h.width,ne=L===pe.length-1?D-Ke:D;return typeof ne=="number"&&!Number.isNaN(ne)?ne:(Kt(!1,"When use `components.body` with render props. Each column should have a fixed `width` value."),0)})):Ze=v("div",{style:C(C({},_e),We),onScroll:Te,ref:ie,className:ue("".concat(t,"-body")),children:ce(In,{style:C(C({},qe),{},{tableLayout:Ae}),children:[Hn,$n,!ze&&xe&&v(Ve,{stickyOffsets:ke,flattenColumns:I,children:xe})]})});var Bn=C(C(C({noData:!P.length,maxContentScroll:se&&l.x==="max-content"},Qe),Y),{},{direction:f,stickyClassName:ht,onScroll:Te});Je=ce(Ue,{children:[b!==!1&&v(sn,{...Bn,stickyTopOffset:xt,className:"".concat(t,"-header"),ref:fn,children:function(h){return ce(Ue,{children:[v(An,{...h}),ze==="top"&&v(Ve,{...h,children:xe})]})}}),Ze,ze&&ze!=="top"&&v(sn,{...Bn,stickyBottomOffset:mt,className:"".concat(t,"-summary"),ref:vn,children:function(h){return v(Ve,{...h,children:xe})}}),he&&v(gr,{ref:gn,offsetScroll:Ct,scrollBodyRef:ie,onScroll:Te,container:yt})]})}else Je=v("div",{style:C(C({},_e),We),className:ue("".concat(t,"-content")),onScroll:Te,ref:ie,children:ce(In,{style:C(C({},qe),{},{tableLayout:Ae}),children:[Hn,b!==!1&&v(An,{...Qe,...Y}),$n,xe&&v(Ve,{stickyOffsets:ke,flattenColumns:I,children:xe})]})});var Lt=At(e,{aria:!0,data:!0}),en=v("div",{className:ue(t,r,(n={},$(n,"".concat(t,"-rtl"),f==="rtl"),$(n,"".concat(t,"-ping-left"),mn),$(n,"".concat(t,"-ping-right"),hn),$(n,"".concat(t,"-layout-fixed"),d==="fixed"),$(n,"".concat(t,"-fixed-header"),oe),$(n,"".concat(t,"-fixed-column"),Ie),$(n,"".concat(t,"-scroll-horizontal"),se),$(n,"".concat(t,"-has-fix-left"),I[0]&&I[0].fixed),$(n,"".concat(t,"-has-fix-right"),I[I.length-1]&&I[I.length-1].fixed==="right"),n)),style:i,id:m,ref:ve,...Lt,children:ce(Lr,{pingLeft:mn,pingRight:hn,props:C(C({},e),{},{stickyOffsets:ke,mergedExpandedKeys:A}),children:[u&&v(Dn,{className:"".concat(t,"-title"),children:u(P)}),v("div",{ref:pn,className:"".concat(t,"-container"),children:Je}),x&&v(Dn,{className:"".concat(t,"-footer"),children:x(P)})]})});se&&(en=v(un,{onResize:gt,children:en}));var Tt=a.exports.useMemo(function(){return{prefixCls:t,getComponent:F,scrollbarSize:Ke,direction:f,fixedInfoList:I.map(function(h,L){return dn(L,L,I,ke,f)}),isSticky:he}},[t,F,Ke,f,I,ke,he]),Mt=a.exports.useMemo(function(){return C(C({},Y),{},{tableLayout:Ae,rowClassName:o,expandedRowClassName:G,expandIcon:me,expandableType:Re,expandRowByClick:ae,expandedRowRender:N,onTriggerExpand:J,expandIconColumnIndex:fe,indentSize:Z,allColumnsFixedLeft:Y.flattenColumns.every(function(h){return h.fixed==="left"})})},[Y,Ae,o,G,me,Re,ae,N,J,fe,Z]),It=a.exports.useMemo(function(){return{componentWidth:Se,fixHeader:oe,fixColumn:Ie,horizonScroll:se}},[Se,oe,Ie,se]),$t=a.exports.useMemo(function(){return{onColumnResize:wn}},[wn]);return v(Yn.Provider,{value:bt,children:v(de.Provider,{value:Tt,children:v(Ye.Provider,{value:Mt,children:v(Qn.Provider,{value:It,children:v(et.Provider,{value:$t,children:en})})})})})}He.EXPAND_COLUMN=we;He.Column=Vt;He.ColumnGroup=Dt;He.Summary=hr;He.defaultProps={rowKey:"key",prefixCls:"rc-table",emptyText:function(){return"No Data"}};export{hr as F,ot as I,He as T,on as a,at as c};
