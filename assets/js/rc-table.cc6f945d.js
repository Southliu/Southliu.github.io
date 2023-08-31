import{c as St,u as wt,a as oe,r as Pe,m as gt}from"./@rc-component_context.f6cf85a7.js";import{r as n}from"./react.76efb1e3.js";import"./react-is.4e9f7c39.js";import{c as O,d as Ie,b as H,e as y,g as J,n as ke,f as Q}from"./@babel_runtime.c8088fcd.js";import{c as se}from"./classnames.82ff248b.js";import{$ as Pn,k as Wn,a0 as Kn,a1 as In,a2 as Et,c as bt,a3 as ze,l as Hn,a4 as _n,a5 as Nt,j as kt,a6 as Mn,a7 as Tt,a8 as Fn}from"./rc-util.644b3d3a.js";import"./react-dom.9f2c8c46.js";import{R as an}from"./rc-resize-observer.438dc091.js";var ge={},nn="rc-table-internal-hook",Z=St();function Lt(e,r){var t=n.useRef(0);t.current+=1;var a=n.useRef(e),o=[];Object.keys(e||{}).map(function(i){var u;(e==null?void 0:e[i])!==((u=a.current)===null||u===void 0?void 0:u[i])&&o.push(i)}),a.current=e;var l=n.useRef([]);return o.length&&(l.current=o),n.useDebugValue(t.current),n.useDebugValue(l.current.join(", ")),r&&("".concat(r,":"),t.current,l.current),t.current}var It=n.memo(function(){var e=Lt();return n.createElement("h1",null,"Render Times: ",e)});It.displayName="RenderBlock";var An=n.createContext({renderWithProps:!1}),Ht="RC_TABLE_KEY";function _t(e){return e==null?[]:Array.isArray(e)?e:[e]}function We(e){var r=[],t={};return e.forEach(function(a){for(var o=a||{},l=o.key,i=o.dataIndex,u=l||_t(i).join("-")||Ht;t[u];)u="".concat(u,"_next");t[u]=!0,r.push(u)}),r}function tn(e){return e!=null}function Mt(e){return e&&Ie(e)==="object"&&!Array.isArray(e)&&!n.isValidElement(e)}function Ft(e,r,t,a,o,l){var i=n.useContext(An),u=wt(),c=Pn(function(){if(tn(a))return[a];var s=r==null||r===""?[]:Array.isArray(r)?r:[r],d=Kn(e,s),f=d,m=void 0;if(o){var p=o(d,e,t);Mt(p)?(f=p.children,m=p.props,i.renderWithProps=!0):f=p}return[f,m]},[u,e,a,r,o,t],function(s,d){if(l){var f=O(s,2),m=f[1],p=O(d,2),x=p[1];return l(x,m)}return i.renderWithProps?!0:!Wn(s,d,!0)});return c}function Bt(e,r,t,a){var o=e+r-1;return e<=a&&o>=t}function $t(e,r){return oe(Z,function(t){var a=Bt(e,r||1,t.hoverStartRow,t.hoverEndRow);return[a,t.onHover]})}var zt=function(r){var t=r.ellipsis,a=r.rowType,o=r.children,l,i=t===!0?{showTitle:!0}:t;return i&&(i.showTitle||a==="header")&&(typeof o=="string"||typeof o=="number"?l=o.toString():n.isValidElement(o)&&typeof o.props.children=="string"&&(l=o.props.children)),l};function Ot(e){var r,t,a,o,l,i,u,c,s=e.component,d=e.children,f=e.ellipsis,m=e.scope,p=e.prefixCls,x=e.className,h=e.align,v=e.record,R=e.render,N=e.dataIndex,L=e.renderIndex,z=e.shouldCellUpdate,C=e.index,w=e.rowType,F=e.colSpan,P=e.rowSpan,V=e.fixLeft,_=e.fixRight,U=e.firstFixLeft,k=e.lastFixLeft,g=e.firstFixRight,W=e.lastFixRight,A=e.appendNode,M=e.additionalProps,S=M===void 0?{}:M,K=e.isSticky,B="".concat(p,"-cell"),Y=oe(Z,["supportSticky","allColumnsFixedLeft"]),b=Y.supportSticky,me=Y.allColumnsFixedLeft,Se=Ft(v,N,L,d,R,z),X=O(Se,2),Ee=X[0],$=X[1],ue={},ve=typeof V=="number"&&b,le=typeof _=="number"&&b;ve&&(ue.position="sticky",ue.left=V),le&&(ue.position="sticky",ue.right=_);var we=(r=(t=(a=$==null?void 0:$.colSpan)!==null&&a!==void 0?a:S.colSpan)!==null&&t!==void 0?t:F)!==null&&r!==void 0?r:1,fe=(o=(l=(i=$==null?void 0:$.rowSpan)!==null&&i!==void 0?i:S.rowSpan)!==null&&l!==void 0?l:P)!==null&&o!==void 0?o:1,j=$t(C,fe),D=O(j,2),T=D[0],ee=D[1],ne=function(Ce){var de;v&&ee(C,C+fe-1),S==null||(de=S.onMouseEnter)===null||de===void 0||de.call(S,Ce)},te=function(Ce){var de;v&&ee(-1,-1),S==null||(de=S.onMouseLeave)===null||de===void 0||de.call(S,Ce)};if(we===0||fe===0)return null;var G=(u=S.title)!==null&&u!==void 0?u:zt({rowType:w,ellipsis:f,children:Ee}),pe=se(B,x,(c={},H(c,"".concat(B,"-fix-left"),ve&&b),H(c,"".concat(B,"-fix-left-first"),U&&b),H(c,"".concat(B,"-fix-left-last"),k&&b),H(c,"".concat(B,"-fix-left-all"),k&&me&&b),H(c,"".concat(B,"-fix-right"),le&&b),H(c,"".concat(B,"-fix-right-first"),g&&b),H(c,"".concat(B,"-fix-right-last"),W&&b),H(c,"".concat(B,"-ellipsis"),f),H(c,"".concat(B,"-with-append"),A),H(c,"".concat(B,"-fix-sticky"),(ve||le)&&K&&b),H(c,"".concat(B,"-row-hover"),!$&&T),c),S.className,$==null?void 0:$.className),xe={};h&&(xe.textAlign=h);var je=y(y(y(y({},S.style),xe),ue),$==null?void 0:$.style),ie=Ee;return Ie(ie)==="object"&&!Array.isArray(ie)&&!n.isValidElement(ie)&&(ie=null),f&&(k||g)&&(ie=n.createElement("span",{className:"".concat(B,"-content")},ie)),n.createElement(s,J({},$,S,{className:pe,style:je,title:G,scope:m,onMouseEnter:ne,onMouseLeave:te,colSpan:we!==1?we:null,rowSpan:fe!==1?fe:null}),A,ie)}const Ke=n.memo(Ot);function on(e,r,t,a,o,l){var i=t[e]||{},u=t[r]||{},c,s;i.fixed==="left"?c=a.left[o==="rtl"?r:e]:u.fixed==="right"&&(s=a.right[o==="rtl"?e:r]);var d=!1,f=!1,m=!1,p=!1,x=t[r+1],h=t[e-1],v=!(l!=null&&l.children);if(o==="rtl"){if(c!==void 0){var R=h&&h.fixed==="left";p=!R&&v}else if(s!==void 0){var N=x&&x.fixed==="right";m=!N&&v}}else if(c!==void 0){var L=x&&x.fixed==="left";d=!L&&v}else if(s!==void 0){var z=h&&h.fixed==="right";f=!z&&v}return{fixLeft:c,fixRight:s,lastFixLeft:d,firstFixRight:f,lastFixRight:m,firstFixLeft:p,isSticky:a.isSticky}}var Dn=n.createContext({});function Pt(e){var r=e.className,t=e.index,a=e.children,o=e.colSpan,l=o===void 0?1:o,i=e.rowSpan,u=e.align,c=oe(Z,["prefixCls","direction"]),s=c.prefixCls,d=c.direction,f=n.useContext(Dn),m=f.scrollColumnIndex,p=f.stickyOffsets,x=f.flattenColumns,h=f.columns,v=t+l-1,R=v+1===m?l+1:l,N=on(t,t+R-1,x,p,d,h==null?void 0:h[t]);return n.createElement(Ke,J({className:r,index:t,component:"td",prefixCls:s,record:null,dataIndex:null,align:u,colSpan:R,rowSpan:i,render:function(){return a}},N))}var Wt=["children"];function Kt(e){var r=e.children,t=ke(e,Wt);return n.createElement("tr",t,r)}function Ae(e){var r=e.children;return r}Ae.Row=Kt;Ae.Cell=Pt;function At(e){var r=e.children,t=e.stickyOffsets,a=e.flattenColumns,o=e.columns,l=oe(Z,"prefixCls"),i=a.length-1,u=a[i],c=n.useMemo(function(){return{stickyOffsets:t,flattenColumns:a,scrollColumnIndex:u!=null&&u.scrollbar?i:null,columns:o}},[u,a,i,t,o]);return n.createElement(Dn.Provider,{value:c},n.createElement("tfoot",{className:"".concat(l,"-summary")},r))}const Oe=Pe(At);var Dt=Ae;function jt(e){return null}function Ut(e){return null}function jn(e,r,t,a,o,l){var i=[];i.push({record:e,indent:r,index:l});var u=o(e),c=a==null?void 0:a.has(u);if(e&&Array.isArray(e[t])&&c)for(var s=0;s<e[t].length;s+=1){var d=jn(e[t][s],r+1,t,a,o,s);i.push.apply(i,Q(d))}return i}function Xt(e,r,t,a){var o=n.useMemo(function(){if(t!=null&&t.size){for(var l=[],i=0;i<(e==null?void 0:e.length);i+=1){var u=e[i];l.push.apply(l,Q(jn(u,0,r,t,a,i)))}return l}return e==null?void 0:e.map(function(c,s){return{record:c,indent:0,index:s}})},[e,r,t,a]);return o}function Un(e){var r=e.prefixCls,t=e.children,a=e.component,o=e.cellComponent,l=e.className,i=e.expanded,u=e.colSpan,c=e.isEmpty,s=oe(Z,["scrollbarSize","fixHeader","fixColumn","componentWidth","horizonScroll"]),d=s.scrollbarSize,f=s.fixHeader,m=s.fixColumn,p=s.componentWidth,x=s.horizonScroll,h=t;return(c?x:m)&&(h=n.createElement("div",{style:{width:p-(f?d:0),position:"sticky",left:0,overflow:"hidden"},className:"".concat(r,"-expanded-row-fixed")},p!==0&&h)),n.createElement(a,{className:l,style:{display:i?null:"none"}},n.createElement(Ke,{component:o,prefixCls:r,colSpan:u},h))}function Xn(e){var r=e.className,t=e.style,a=e.record,o=e.index,l=e.renderIndex,i=e.rowKey,u=e.rowExpandable,c=e.expandedKeys,s=e.onRow,d=e.indent,f=d===void 0?0:d,m=e.rowComponent,p=e.cellComponent,x=e.scopeCellComponent,h=e.childrenColumnName,v=oe(Z,["prefixCls","fixedInfoList","flattenColumns","expandableType","expandRowByClick","onTriggerExpand","rowClassName","expandedRowClassName","indentSize","expandIcon","expandedRowRender","expandIconColumnIndex"]),R=v.prefixCls,N=v.fixedInfoList,L=v.flattenColumns,z=v.expandableType,C=v.expandRowByClick,w=v.onTriggerExpand,F=v.rowClassName,P=v.expandedRowClassName,V=v.indentSize,_=v.expandIcon,U=v.expandedRowRender,k=v.expandIconColumnIndex,g=n.useState(!1),W=O(g,2),A=W[0],M=W[1],S=c&&c.has(i);n.useEffect(function(){S&&M(!0)},[S]);var K=z==="row"&&(!u||u(a)),B=z==="nest",Y=h&&a&&a[h],b=K||B,me=n.useRef(w);me.current=w;var Se=function(){me.current.apply(me,arguments)},X=s==null?void 0:s(a,o),Ee=function(D){var T;C&&b&&Se(a,D);for(var ee=arguments.length,ne=new Array(ee>1?ee-1:0),te=1;te<ee;te++)ne[te-1]=arguments[te];X==null||(T=X.onClick)===null||T===void 0||T.call.apply(T,[X,D].concat(ne))},$;typeof F=="string"?$=F:typeof F=="function"&&($=F(a,o,f));var ue=We(L),ve=n.createElement(m,J({},X,{"data-row-key":i,className:se(r,"".concat(R,"-row"),"".concat(R,"-row-level-").concat(f),$,X&&X.className),style:y(y({},t),X?X.style:null),onClick:Ee}),L.map(function(j,D){var T=j.render,ee=j.dataIndex,ne=j.className,te=ue[D],G=N[D],pe;D===(k||0)&&B&&(pe=n.createElement(n.Fragment,null,n.createElement("span",{style:{paddingLeft:"".concat(V*f,"px")},className:"".concat(R,"-row-indent indent-level-").concat(f)}),_({prefixCls:R,expanded:S,expandable:Y,record:a,onExpand:Se})));var xe;return j.onCell&&(xe=j.onCell(a,o)),n.createElement(Ke,J({className:ne,ellipsis:j.ellipsis,align:j.align,scope:j.rowScope,component:j.rowScope?x:p,prefixCls:R,key:te,record:a,index:o,renderIndex:l,dataIndex:ee,render:T,shouldCellUpdate:j.shouldCellUpdate,expanded:pe&&S},G,{appendNode:pe,additionalProps:xe}))})),le;if(K&&(A||S)){var we=U(a,o,f+1,S),fe=P&&P(a,o,f);le=n.createElement(Un,{expanded:S,className:se("".concat(R,"-expanded-row"),"".concat(R,"-expanded-row-level-").concat(f+1),fe),prefixCls:R,component:m,cellComponent:p,colSpan:L.length,isEmpty:!1},we)}return n.createElement(n.Fragment,null,ve,le)}Xn.displayName="BodyRow";const Vt=Pe(Xn);function Yt(e){var r=e.columnKey,t=e.onColumnResize,a=n.useRef();return n.useEffect(function(){a.current&&t(r,a.current.offsetWidth)},[]),n.createElement(an,{data:r},n.createElement("td",{ref:a,style:{padding:0,border:0,height:0}},n.createElement("div",{style:{height:0,overflow:"hidden"}}," ")))}function Gt(e){var r=e.prefixCls,t=e.columnsKey,a=e.onColumnResize;return n.createElement("tr",{"aria-hidden":"true",className:"".concat(r,"-measure-row"),style:{height:0,fontSize:0}},n.createElement(an.Collection,{onBatchResize:function(l){l.forEach(function(i){var u=i.data,c=i.size;a(u,c.offsetWidth)})}},t.map(function(o){return n.createElement(Yt,{key:o,columnKey:o,onColumnResize:a})})))}function Vn(e){var r=e.data,t=e.getRowKey,a=e.measureColumnWidth,o=e.expandedKeys,l=e.onRow,i=e.rowExpandable,u=e.emptyNode,c=e.childrenColumnName,s=oe(Z,["prefixCls","getComponent","onColumnResize","flattenColumns"]),d=s.prefixCls,f=s.getComponent,m=s.onColumnResize,p=s.flattenColumns,x=Xt(r,c,o,t),h=n.useRef({renderWithProps:!1}),v=f(["body","wrapper"],"tbody"),R=f(["body","row"],"tr"),N=f(["body","cell"],"td"),L=f(["body","cell"],"th"),z;r.length?z=x.map(function(w,F){var P=w.record,V=w.indent,_=w.index,U=t(P,F);return n.createElement(Vt,{key:U,rowKey:U,record:P,index:F,renderIndex:_,rowComponent:R,cellComponent:N,scopeCellComponent:L,expandedKeys:o,onRow:l,getRowKey:t,rowExpandable:i,childrenColumnName:c,indent:V})}):z=n.createElement(Un,{expanded:!0,className:"".concat(d,"-placeholder"),prefixCls:d,component:R,cellComponent:N,colSpan:p.length,isEmpty:!0},u);var C=We(p);return n.createElement(An.Provider,{value:h.current},n.createElement(v,{className:"".concat(d,"-tbody")},a&&n.createElement(Gt,{prefixCls:d,columnsKey:C,onColumnResize:m}),z))}Vn.displayName="Body";const qt=Pe(Vn);var Jt=["expandable"],Yn="RC_TABLE_INTERNAL_COL_DEFINE";function Qt(e){var r=e.expandable,t=ke(e,Jt),a;return"expandable"in e?a=y(y({},t),r):a=t,a.showExpandColumn===!1&&(a.expandIconColumnIndex=-1),a}var Zt=["columnType"];function Gn(e){for(var r=e.colWidths,t=e.columns,a=e.columCount,o=[],l=a||t.length,i=!1,u=l-1;u>=0;u-=1){var c=r[u],s=t&&t[u],d=s&&s[Yn];if(c||d||i){var f=d||{};f.columnType;var m=ke(f,Zt);o.unshift(n.createElement("col",J({key:u,style:{width:c}},m))),i=!0}}return n.createElement("colgroup",null,o)}var er=["className","noData","columns","flattenColumns","colWidths","columCount","stickyOffsets","direction","fixHeader","stickyTopOffset","stickyBottomOffset","stickyClassName","onScroll","maxContentScroll","children"];function nr(e,r){return n.useMemo(function(){for(var t=[],a=0;a<r;a+=1){var o=e[a];if(o!==void 0)t[a]=o;else return null}return t},[e.join("_"),r])}var qn=n.forwardRef(function(e,r){var t=e.className,a=e.noData,o=e.columns,l=e.flattenColumns,i=e.colWidths,u=e.columCount,c=e.stickyOffsets,s=e.direction,d=e.fixHeader,f=e.stickyTopOffset,m=e.stickyBottomOffset,p=e.stickyClassName,x=e.onScroll,h=e.maxContentScroll,v=e.children,R=ke(e,er),N=oe(Z,["prefixCls","scrollbarSize","isSticky"]),L=N.prefixCls,z=N.scrollbarSize,C=N.isSticky,w=C&&!d?0:z,F=n.useRef(null),P=n.useCallback(function(M){In(r,M),In(F,M)},[]);n.useEffect(function(){var M;function S(K){var B=K,Y=B.currentTarget,b=B.deltaX;b&&(x({currentTarget:Y,scrollLeft:Y.scrollLeft+b}),K.preventDefault())}return(M=F.current)===null||M===void 0||M.addEventListener("wheel",S),function(){var K;(K=F.current)===null||K===void 0||K.removeEventListener("wheel",S)}},[]);var V=n.useMemo(function(){return l.every(function(M){return M.width>=0})},[l]),_=l[l.length-1],U={fixed:_?_.fixed:null,scrollbar:!0,onHeaderCell:function(){return{className:"".concat(L,"-cell-scrollbar")}}},k=n.useMemo(function(){return w?[].concat(Q(o),[U]):o},[w,o]),g=n.useMemo(function(){return w?[].concat(Q(l),[U]):l},[w,l]),W=n.useMemo(function(){var M=c.right,S=c.left;return y(y({},c),{},{left:s==="rtl"?[].concat(Q(S.map(function(K){return K+w})),[0]):S,right:s==="rtl"?M:[].concat(Q(M.map(function(K){return K+w})),[0]),isSticky:C})},[w,c,C]),A=nr(i,u);return n.createElement("div",{style:y({overflow:"hidden"},C?{top:f,bottom:m}:{}),ref:P,className:se(t,H({},p,!!p))},n.createElement("table",{style:{tableLayout:"fixed",visibility:a||A?null:"hidden"}},(!a||!h||V)&&n.createElement(Gn,{colWidths:A?[].concat(Q(A),[w]):[],columCount:u+1,columns:g}),v(y(y({},R),{},{stickyOffsets:W,columns:k,flattenColumns:g}))))});qn.displayName="FixedHolder";const Bn=n.memo(qn);function Jn(e){var r=e.cells,t=e.stickyOffsets,a=e.flattenColumns,o=e.rowComponent,l=e.cellComponent,i=e.tdCellComponent,u=e.onHeaderRow,c=e.index,s=oe(Z,["prefixCls","direction"]),d=s.prefixCls,f=s.direction,m;u&&(m=u(r.map(function(x){return x.column}),c));var p=We(r.map(function(x){return x.column}));return n.createElement(o,m,r.map(function(x,h){var v=x.column,R=on(x.colStart,x.colEnd,a,t,f,v),N;return v&&v.onHeaderCell&&(N=x.column.onHeaderCell(v)),n.createElement(Ke,J({},x,{scope:v.title?x.colSpan>1?"colgroup":"col":null,ellipsis:v.ellipsis,align:v.align,component:v.title?l:i,prefixCls:d,key:p[h]},R,{additionalProps:N,rowType:"header"}))}))}Jn.displayName="HeaderRow";function tr(e){var r=[];function t(i,u){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;r[c]=r[c]||[];var s=u,d=i.filter(Boolean).map(function(f){var m={key:f.key,className:f.className||"",children:f.title,column:f,colStart:s},p=1,x=f.children;return x&&x.length>0&&(p=t(x,s,c+1).reduce(function(h,v){return h+v},0),m.hasSubColumns=!0),"colSpan"in f&&(p=f.colSpan),"rowSpan"in f&&(m.rowSpan=f.rowSpan),m.colSpan=p,m.colEnd=m.colStart+p-1,r[c].push(m),s+=p,p});return d}t(e,0);for(var a=r.length,o=function(u){r[u].forEach(function(c){!("rowSpan"in c)&&!c.hasSubColumns&&(c.rowSpan=a-u)})},l=0;l<a;l+=1)o(l);return r}function rr(e){var r=e.stickyOffsets,t=e.columns,a=e.flattenColumns,o=e.onHeaderRow,l=oe(Z,["prefixCls","getComponent"]),i=l.prefixCls,u=l.getComponent,c=n.useMemo(function(){return tr(t)},[t]),s=u(["header","wrapper"],"thead"),d=u(["header","row"],"tr"),f=u(["header","cell"],"th"),m=u(["header","cell"],"td");return n.createElement(s,{className:"".concat(i,"-thead")},c.map(function(p,x){var h=n.createElement(Jn,{key:x,flattenColumns:a,cells:p,stickyOffsets:r,rowComponent:d,cellComponent:f,tdCellComponent:m,onHeaderRow:o,index:x});return h}))}const $n=Pe(rr);var ar=["children"],or=["fixed"];function Qn(e){return Et(e).filter(function(r){return n.isValidElement(r)}).map(function(r){var t=r.key,a=r.props,o=a.children,l=ke(a,ar),i=y({key:t},l);return o&&(i.children=Qn(o)),i})}function rn(e){return e.filter(function(r){return r&&Ie(r)==="object"}).reduce(function(r,t){var a=t.fixed,o=a===!0?"left":a,l=t.children;return l&&l.length>0?[].concat(Q(r),Q(rn(l).map(function(i){return y({fixed:o},i)}))):[].concat(Q(r),[y(y({},t),{},{fixed:o})])},[])}function lr(e){return e.map(function(r){var t=r.fixed,a=ke(r,or),o=t;return t==="left"?o="right":t==="right"&&(o="left"),y({fixed:o},a)})}function ir(e,r){var t=e.prefixCls,a=e.columns,o=e.children,l=e.expandable,i=e.expandedKeys,u=e.columnTitle,c=e.getRowKey,s=e.onTriggerExpand,d=e.expandIcon,f=e.rowExpandable,m=e.expandIconColumnIndex,p=e.direction,x=e.expandRowByClick,h=e.columnWidth,v=e.fixed,R=n.useMemo(function(){return a||Qn(o)},[a,o]),N=n.useMemo(function(){if(l){var C,w=R.slice();if(!w.includes(ge)){var F=m||0;F>=0&&w.splice(F,0,ge)}var P=w.indexOf(ge);w=w.filter(function(k,g){return k!==ge||g===P});var V=R[P],_;(v==="left"||v)&&!m?_="left":(v==="right"||v)&&m===R.length?_="right":_=V?V.fixed:null;var U=(C={},H(C,Yn,{className:"".concat(t,"-expand-icon-col"),columnType:"EXPAND_COLUMN"}),H(C,"title",u),H(C,"fixed",_),H(C,"className","".concat(t,"-row-expand-icon-cell")),H(C,"width",h),H(C,"render",function(g,W,A){var M=c(W,A),S=i.has(M),K=f?f(W):!0,B=d({prefixCls:t,expanded:S,expandable:K,record:W,onExpand:s});return x?n.createElement("span",{onClick:function(b){return b.stopPropagation()}},B):B}),C);return w.map(function(k){return k===ge?U:k})}return R.filter(function(k){return k!==ge})},[l,R,c,i,d,p]),L=n.useMemo(function(){var C=N;return r&&(C=r(C)),C.length||(C=[{render:function(){return null}}]),C},[r,N,p]),z=n.useMemo(function(){return p==="rtl"?lr(rn(L)):rn(L)},[L,p]);return[L,z]}function cr(e){var r,t=e.prefixCls,a=e.record,o=e.onExpand,l=e.expanded,i=e.expandable,u="".concat(t,"-row-expand-icon");if(!i)return n.createElement("span",{className:se(u,"".concat(t,"-row-spaced"))});var c=function(d){o(a,d),d.stopPropagation()};return n.createElement("span",{className:se(u,(r={},H(r,"".concat(t,"-row-expanded"),l),H(r,"".concat(t,"-row-collapsed"),!l),r)),onClick:c})}function sr(e,r,t){var a=[];function o(l){(l||[]).forEach(function(i,u){a.push(r(i,u)),o(i[t])})}return o(e),a}function ur(e,r,t){var a=Qt(e),o=a.expandIcon,l=a.expandedRowKeys,i=a.defaultExpandedRowKeys,u=a.defaultExpandAllRows,c=a.expandedRowRender,s=a.onExpand,d=a.onExpandedRowsChange,f=a.childrenColumnName,m=o||cr,p=f||"children",x=n.useMemo(function(){return c?"row":e.expandable&&e.internalHooks===nn&&e.expandable.__PARENT_RENDER_ICON__||r.some(function(C){return C&&Ie(C)==="object"&&C[p]})?"nest":!1},[!!c,r]),h=n.useState(function(){return i||(u?sr(r,t,p):[])}),v=O(h,2),R=v[0],N=v[1],L=n.useMemo(function(){return new Set(l||R||[])},[l,R]),z=n.useCallback(function(C){var w=t(C,r.indexOf(C)),F,P=L.has(w);P?(L.delete(w),F=Q(L)):F=[].concat(Q(L),[w]),N(F),s&&s(!P,C),d&&d(F)},[t,L,r,s,d]);return[a,x,L,m,p,z]}function fr(e,r,t,a){var o=e.map(function(l,i){return on(i,i,e,r,t,a==null?void 0:a[i])});return Pn(function(){return o},[o],function(l,i){return!Wn(l,i)})}function Zn(e){var r=n.useRef(e),t=n.useState({}),a=O(t,2),o=a[1],l=n.useRef(null),i=n.useRef([]);function u(c){i.current.push(c);var s=Promise.resolve();l.current=s,s.then(function(){if(l.current===s){var d=i.current,f=r.current;i.current=[],d.forEach(function(m){r.current=m(r.current)}),l.current=null,f!==r.current&&o({})}})}return n.useEffect(function(){return function(){l.current=null}},[]),[r.current,u]}function dr(e){var r=n.useRef(e||null),t=n.useRef();function a(){window.clearTimeout(t.current)}function o(i){r.current=i,a(),t.current=window.setTimeout(function(){r.current=null,t.current=void 0},100)}function l(){return r.current}return n.useEffect(function(){return a},[]),[o,l]}function mr(){var e=n.useState(-1),r=O(e,2),t=r[0],a=r[1],o=n.useState(-1),l=O(o,2),i=l[0],u=l[1],c=n.useCallback(function(s,d){a(s),u(d)},[]);return[t,i,c]}var zn=bt()?window:null;function vr(e,r){var t=Ie(e)==="object"?e:{},a=t.offsetHeader,o=a===void 0?0:a,l=t.offsetSummary,i=l===void 0?0:l,u=t.offsetScroll,c=u===void 0?0:u,s=t.getContainer,d=s===void 0?function(){return zn}:s,f=d()||zn;return n.useMemo(function(){var m=!!e;return{isSticky:m,stickyClassName:m?"".concat(r,"-sticky-holder"):"",offsetHeader:o,offsetSummary:i,offsetScroll:c,container:f}},[c,o,i,r,f])}function pr(e,r,t){var a=n.useMemo(function(){for(var o=[],l=[],i=0,u=0,c=0;c<r;c+=1)if(t==="rtl"){l[c]=u,u+=e[c]||0;var s=r-c-1;o[s]=i,i+=e[s]||0}else{o[c]=i,i+=e[c]||0;var d=r-c-1;l[d]=u,u+=e[d]||0}return{left:o,right:l}},[e,r,t]);return a}function On(e){var r=e.className,t=e.children;return n.createElement("div",{className:r},t)}var xr=function(r,t){var a,o,l=r.scrollBodyRef,i=r.onScroll,u=r.offsetScroll,c=r.container,s=oe(Z,"prefixCls"),d=((a=l.current)===null||a===void 0?void 0:a.scrollWidth)||0,f=((o=l.current)===null||o===void 0?void 0:o.clientWidth)||0,m=d&&f*(f/d),p=n.useRef(),x=Zn({scrollLeft:0,isHiddenScrollBar:!1}),h=O(x,2),v=h[0],R=h[1],N=n.useRef({delta:0,x:0}),L=n.useState(!1),z=O(L,2),C=z[0],w=z[1],F=function(){w(!1)},P=function(g){g.persist(),N.current.delta=g.pageX-v.scrollLeft,N.current.x=0,w(!0),g.preventDefault()},V=function(g){var W,A=g||((W=window)===null||W===void 0?void 0:W.event),M=A.buttons;if(!C||M===0){C&&w(!1);return}var S=N.current.x+g.pageX-N.current.x-N.current.delta;S<=0&&(S=0),S+m>=f&&(S=f-m),i({scrollLeft:S/f*(d+2)}),N.current.x=g.pageX},_=function(){if(l.current){var g=_n(l.current).top,W=g+l.current.offsetHeight,A=c===window?document.documentElement.scrollTop+window.innerHeight:_n(c).top+c.clientHeight;W-Hn()<=A||g>=A-u?R(function(M){return y(y({},M),{},{isHiddenScrollBar:!0})}):R(function(M){return y(y({},M),{},{isHiddenScrollBar:!1})})}},U=function(g){R(function(W){return y(y({},W),{},{scrollLeft:g/d*f||0})})};return n.useImperativeHandle(t,function(){return{setScrollLeft:U}}),n.useEffect(function(){var k=ze(document.body,"mouseup",F,!1),g=ze(document.body,"mousemove",V,!1);return _(),function(){k.remove(),g.remove()}},[m,C]),n.useEffect(function(){var k=ze(c,"scroll",_,!1),g=ze(window,"resize",_,!1);return function(){k.remove(),g.remove()}},[c]),n.useEffect(function(){v.isHiddenScrollBar||R(function(k){var g=l.current;return g?y(y({},k),{},{scrollLeft:g.scrollLeft/g.scrollWidth*g.clientWidth}):k})},[v.isHiddenScrollBar]),d<=f||!m||v.isHiddenScrollBar?null:n.createElement("div",{style:{height:Hn(),width:f,bottom:u},className:"".concat(s,"-sticky-scroll")},n.createElement("div",{onMouseDown:P,ref:p,className:se("".concat(s,"-sticky-scroll-bar"),H({},"".concat(s,"-sticky-scroll-bar-active"),C)),style:{width:"".concat(m,"px"),transform:"translate3d(".concat(v.scrollLeft,"px, 0, 0)")}}))};const Cr=n.forwardRef(xr);var yr=[],hr={};function Rr(){return"No Data"}function Sr(e){var r,t=y({rowKey:"key",prefixCls:"rc-table",emptyText:Rr},e),a=t.prefixCls,o=t.className,l=t.rowClassName,i=t.style,u=t.data,c=t.rowKey,s=t.scroll,d=t.tableLayout,f=t.direction,m=t.title,p=t.footer,x=t.summary,h=t.caption,v=t.id,R=t.showHeader,N=t.components,L=t.emptyText,z=t.onRow,C=t.onHeaderRow,w=t.internalHooks,F=t.transformColumns,P=t.internalRefs,V=t.sticky,_=u||yr,U=!!_.length,k=n.useCallback(function(E,I){return Kn(N,E)||I},[N]),g=n.useMemo(function(){return typeof c=="function"?c:function(E){var I=E&&E[c];return I}},[c]),W=mr(),A=O(W,3),M=A[0],S=A[1],K=A[2],B=ur(t,_,g),Y=O(B,6),b=Y[0],me=Y[1],Se=Y[2],X=Y[3],Ee=Y[4],$=Y[5],ue=n.useState(0),ve=O(ue,2),le=ve[0],we=ve[1],fe=ir(y(y(y({},t),b),{},{expandable:!!b.expandedRowRender,columnTitle:b.columnTitle,expandedKeys:Se,getRowKey:g,onTriggerExpand:$,expandIcon:X,expandIconColumnIndex:b.expandIconColumnIndex,direction:f}),w===nn?F:null),j=O(fe,2),D=j[0],T=j[1],ee=n.useMemo(function(){return{columns:D,flattenColumns:T}},[D,T]),ne=n.useRef(),te=n.useRef(),G=n.useRef(),pe=n.useRef(),xe=n.useRef(),je=n.useState(!1),ie=O(je,2),Ue=ie[0],Ce=ie[1],de=n.useState(!1),ln=O(de,2),et=ln[0],He=ln[1],nt=Zn(new Map),cn=O(nt,2),tt=cn[0],rt=cn[1],at=We(T),sn=at.map(function(E){return tt.get(E)}),un=n.useMemo(function(){return sn},[sn.join("_")]),_e=pr(un,T.length,f),re=s&&tn(s.y),ce=s&&tn(s.x)||!!b.fixed,Te=ce&&T.some(function(E){var I=E.fixed;return I}),fn=n.useRef(),be=vr(V,a),ye=be.isSticky,ot=be.offsetHeader,lt=be.offsetSummary,it=be.offsetScroll,ct=be.stickyClassName,st=be.container,ae=n.useMemo(function(){return x==null?void 0:x(_)},[x,_]),Le=(re||ye)&&n.isValidElement(ae)&&ae.type===Ae&&ae.props.fixed,Xe,Me,Ve;re&&(Me={overflowY:"scroll",maxHeight:s.y}),ce&&(Xe={overflowX:"auto"},re||(Me={overflowY:"hidden"}),Ve={width:(s==null?void 0:s.x)===!0?"auto":s==null?void 0:s.x,minWidth:"100%"});var dn=n.useCallback(function(E,I){Nt(ne.current)&&rt(function(q){if(q.get(E)!==I){var he=new Map(q);return he.set(E,I),he}return q})},[]),ut=dr(null),mn=O(ut,2),ft=mn[0],vn=mn[1];function Fe(E,I){I&&(typeof I=="function"?I(E):I.scrollLeft!==E&&(I.scrollLeft=E,I.scrollLeft!==E&&setTimeout(function(){I.scrollLeft=E},0)))}var Ne=kt(function(E){var I=E.currentTarget,q=E.scrollLeft,he=f==="rtl",Re=typeof q=="number"?q:I.scrollLeft,Ln=I||hr;if(!vn()||vn()===Ln){var Qe;ft(Ln),Fe(Re,te.current),Fe(Re,G.current),Fe(Re,xe.current),Fe(Re,(Qe=fn.current)===null||Qe===void 0?void 0:Qe.setScrollLeft)}if(I){var Ze=I.scrollWidth,en=I.clientWidth;if(Ze===en){Ce(!1),He(!1);return}he?(Ce(-Re<Ze-en),He(-Re>0)):(Ce(Re>0),He(Re<Ze-en))}}),pn=function(){ce&&G.current?Ne({currentTarget:G.current}):(Ce(!1),He(!1))},dt=function(I){var q=I.width;q!==le&&(pn(),we(ne.current?ne.current.offsetWidth:q))},xn=n.useRef(!1);n.useEffect(function(){xn.current&&pn()},[ce,u,D.length]),n.useEffect(function(){xn.current=!0},[]);var mt=n.useState(0),Cn=O(mt,2),Be=Cn[0],yn=Cn[1],vt=n.useState(!0),hn=O(vt,2),Rn=hn[0],pt=hn[1];n.useEffect(function(){G.current instanceof Element?yn(Mn(G.current).width):yn(Mn(pe.current).width),pt(Tt("position","sticky"))},[]),n.useEffect(function(){w===nn&&P&&(P.body.current=G.current)});var xt=n.useCallback(function(E){return n.createElement(n.Fragment,null,n.createElement($n,E),Le==="top"&&n.createElement(Oe,E,ae))},[Le,ae]),Ct=n.useCallback(function(E){return n.createElement(Oe,E,ae)},[ae]),Sn=k(["table"],"table"),$e=n.useMemo(function(){return d||(Te?(s==null?void 0:s.x)==="max-content"?"auto":"fixed":re||ye||T.some(function(E){var I=E.ellipsis;return I})?"fixed":"auto")},[re,Te,T,d,ye]),Ye,Ge={colWidths:un,columCount:T.length,stickyOffsets:_e,onHeaderRow:C,fixHeader:re,scroll:s},yt=n.useMemo(function(){return U?null:typeof L=="function"?L():L},[U,L]),wn=n.createElement(qt,{data:_,measureColumnWidth:re||ce||ye,expandedKeys:Se,rowExpandable:b.rowExpandable,getRowKey:g,onRow:z,emptyNode:yt,childrenColumnName:Ee}),gn=n.createElement(Gn,{colWidths:T.map(function(E){var I=E.width;return I}),columns:T}),En=h!=null?n.createElement("caption",{className:"".concat(a,"-caption")},h):void 0,bn=k(["body"]),ht=Fn(t,{data:!0}),Nn=Fn(t,{aria:!0});if(re||ye){var qe;typeof bn=="function"?(qe=bn(_,{scrollbarSize:Be,ref:G,onScroll:Ne}),Ge.colWidths=T.map(function(E,I){var q=E.width,he=I===D.length-1?q-Be:q;return typeof he=="number"&&!Number.isNaN(he)?he:0})):qe=n.createElement("div",{style:y(y({},Xe),Me),onScroll:Ne,ref:G,className:se("".concat(a,"-body"))},n.createElement(Sn,J({style:y(y({},Ve),{},{tableLayout:$e})},Nn),En,gn,wn,!Le&&ae&&n.createElement(Oe,{stickyOffsets:_e,flattenColumns:T,columns:D},ae)));var kn=y(y(y({noData:!_.length,maxContentScroll:ce&&s.x==="max-content"},Ge),ee),{},{direction:f,stickyClassName:ct,onScroll:Ne});Ye=n.createElement(n.Fragment,null,R!==!1&&n.createElement(Bn,J({},kn,{stickyTopOffset:ot,className:"".concat(a,"-header"),ref:te}),xt),qe,Le&&Le!=="top"&&n.createElement(Bn,J({},kn,{stickyBottomOffset:lt,className:"".concat(a,"-summary"),ref:xe}),Ct),ye&&n.createElement(Cr,{ref:fn,offsetScroll:it,scrollBodyRef:G,onScroll:Ne,container:st}))}else Ye=n.createElement("div",{style:y(y({},Xe),Me),className:se("".concat(a,"-content")),onScroll:Ne,ref:G},n.createElement(Sn,J({style:y(y({},Ve),{},{tableLayout:$e})},Nn),En,gn,R!==!1&&n.createElement($n,J({},Ge,ee)),wn,ae&&n.createElement(Oe,{stickyOffsets:_e,flattenColumns:T,columns:D},ae)));var Je=n.createElement("div",J({className:se(a,o,(r={},H(r,"".concat(a,"-rtl"),f==="rtl"),H(r,"".concat(a,"-ping-left"),Ue),H(r,"".concat(a,"-ping-right"),et),H(r,"".concat(a,"-layout-fixed"),d==="fixed"),H(r,"".concat(a,"-fixed-header"),re),H(r,"".concat(a,"-fixed-column"),Te),H(r,"".concat(a,"-scroll-horizontal"),ce),H(r,"".concat(a,"-has-fix-left"),T[0]&&T[0].fixed),H(r,"".concat(a,"-has-fix-right"),T[T.length-1]&&T[T.length-1].fixed==="right"),r)),style:i,id:v,ref:ne},ht),m&&n.createElement(On,{className:"".concat(a,"-title")},m(_)),n.createElement("div",{ref:pe,className:"".concat(a,"-container")},Ye),p&&n.createElement(On,{className:"".concat(a,"-footer")},p(_)));ce&&(Je=n.createElement(an,{onResize:dt},Je));var Tn=fr(T,_e,f,D),Rt=n.useMemo(function(){return{prefixCls:a,getComponent:k,scrollbarSize:Be,direction:f,fixedInfoList:Tn,isSticky:ye,supportSticky:Rn,componentWidth:le,fixHeader:re,fixColumn:Te,horizonScroll:ce,tableLayout:$e,rowClassName:l,expandedRowClassName:b.expandedRowClassName,expandIcon:X,expandableType:me,expandRowByClick:b.expandRowByClick,expandedRowRender:b.expandedRowRender,onTriggerExpand:$,expandIconColumnIndex:b.expandIconColumnIndex,indentSize:b.indentSize,allColumnsFixedLeft:T.every(function(E){return E.fixed==="left"}),columns:D,flattenColumns:T,onColumnResize:dn,hoverStartRow:M,hoverEndRow:S,onHover:K}},[a,k,Be,f,Tn,ye,Rn,le,re,Te,ce,$e,l,b.expandedRowClassName,X,me,b.expandRowByClick,b.expandedRowRender,$,b.expandIconColumnIndex,b.indentSize,D,T,dn,M,S,K]);return n.createElement(Z.Provider,{value:Rt},Je)}function wr(e){return gt(Sr,e)}var De=wr();De.EXPAND_COLUMN=ge;De.Column=jt;De.ColumnGroup=Ut;De.Summary=Dt;export{ge as E,Dt as F,Yn as I,nn as a,Qn as c,wr as g};
