import{c as Rt,u as wt,a as oe,r as $e,m as gt}from"./@rc-component_context.cab5d4d3.js";import{r as n}from"./react.4fb287ef.js";import"./react-is.6aa2a333.js";import{f as $,g as Pe,b as H,d as y,h as J,c as ke,e as Q}from"./@babel_runtime.76b3ae3f.js";import{c as se}from"./classnames.2e4736b8.js";import{u as Pn,i as Wn,A as Kn,E as In,t as Et,c as bt,v as ze,g as Hn,H as _n,n as Nt,d as kt,I as Mn,J as Tt,y as Fn,b as Lt}from"./rc-util.8c303982.js";import"./react-dom.4aff48fa.js";import{R as an}from"./rc-resize-observer.07dcc288.js";var ge={},Z=Rt();function It(e,a){var t=n.useRef(0);t.current+=1;var r=n.useRef(e),o=[];Object.keys(e||{}).map(function(i){var u;(e==null?void 0:e[i])!==((u=r.current)===null||u===void 0?void 0:u[i])&&o.push(i)}),r.current=e;var l=n.useRef([]);return o.length&&(l.current=o),n.useDebugValue(t.current),n.useDebugValue(l.current.join(", ")),a&&("".concat(a,":"),t.current,l.current),t.current}var Ht=n.memo(function(){var e=It();return n.createElement("h1",null,"Render Times: ",e)});Ht.displayName="RenderBlock";var An=n.createContext({renderWithProps:!1}),_t="RC_TABLE_KEY";function Mt(e){return e==null?[]:Array.isArray(e)?e:[e]}function We(e){var a=[],t={};return e.forEach(function(r){for(var o=r||{},l=o.key,i=o.dataIndex,u=l||Mt(i).join("-")||_t;t[u];)u="".concat(u,"_next");t[u]=!0,a.push(u)}),a}function nn(e){return e!=null}function Ft(e){return e&&Pe(e)==="object"&&!Array.isArray(e)&&!n.isValidElement(e)}function Bt(e,a,t,r,o,l){var i=n.useContext(An),u=wt(),c=Pn(function(){if(nn(r))return[r];var s=a==null||a===""?[]:Array.isArray(a)?a:[a],f=Kn(e,s),d=f,m=void 0;if(o){var p=o(f,e,t);Ft(p)?(d=p.children,m=p.props,i.renderWithProps=!0):d=p}return[d,m]},[u,e,r,a,o,t],function(s,f){if(l){var d=$(s,2),m=d[1],p=$(f,2),x=p[1];return l(x,m)}return i.renderWithProps?!0:!Wn(s,f,!0)});return c}function zt(e,a,t,r){var o=e+a-1;return e<=r&&o>=t}function Ot(e,a){return oe(Z,function(t){var r=zt(e,a||1,t.hoverStartRow,t.hoverEndRow);return[r,t.onHover]})}var $t=function(a){var t=a.ellipsis,r=a.rowType,o=a.children,l,i=t===!0?{showTitle:!0}:t;return i&&(i.showTitle||r==="header")&&(typeof o=="string"||typeof o=="number"?l=o.toString():n.isValidElement(o)&&typeof o.props.children=="string"&&(l=o.props.children)),l};function Pt(e){var a,t,r,o,l,i,u,c,s=e.component,f=e.children,d=e.ellipsis,m=e.scope,p=e.prefixCls,x=e.className,h=e.align,v=e.record,S=e.render,N=e.dataIndex,L=e.renderIndex,O=e.shouldCellUpdate,C=e.index,w=e.rowType,F=e.colSpan,P=e.rowSpan,V=e.fixLeft,_=e.fixRight,j=e.firstFixLeft,k=e.lastFixLeft,g=e.firstFixRight,W=e.lastFixRight,A=e.appendNode,M=e.additionalProps,R=M===void 0?{}:M,K=e.isSticky,B="".concat(p,"-cell"),Y=oe(Z,["supportSticky","allColumnsFixedLeft"]),b=Y.supportSticky,me=Y.allColumnsFixedLeft,Re=Bt(v,N,L,f,S,O),X=$(Re,2),Ee=X[0],z=X[1],ue={},ve=typeof V=="number"&&b,le=typeof _=="number"&&b;ve&&(ue.position="sticky",ue.left=V),le&&(ue.position="sticky",ue.right=_);var we=(a=(t=(r=z==null?void 0:z.colSpan)!==null&&r!==void 0?r:F)!==null&&t!==void 0?t:R.colSpan)!==null&&a!==void 0?a:1,de=(o=(l=(i=z==null?void 0:z.rowSpan)!==null&&i!==void 0?i:P)!==null&&l!==void 0?l:R.rowSpan)!==null&&o!==void 0?o:1,U=Ot(C,de),D=$(U,2),T=D[0],ee=D[1],ne=function(Ce){var fe;v&&ee(C,C+de-1),R==null||(fe=R.onMouseEnter)===null||fe===void 0||fe.call(R,Ce)},te=function(Ce){var fe;v&&ee(-1,-1),R==null||(fe=R.onMouseLeave)===null||fe===void 0||fe.call(R,Ce)};if(we===0||de===0)return null;var G=(u=R.title)!==null&&u!==void 0?u:$t({rowType:w,ellipsis:d,children:Ee}),pe=se(B,x,(c={},H(c,"".concat(B,"-fix-left"),ve&&b),H(c,"".concat(B,"-fix-left-first"),j&&b),H(c,"".concat(B,"-fix-left-last"),k&&b),H(c,"".concat(B,"-fix-left-all"),k&&me&&b),H(c,"".concat(B,"-fix-right"),le&&b),H(c,"".concat(B,"-fix-right-first"),g&&b),H(c,"".concat(B,"-fix-right-last"),W&&b),H(c,"".concat(B,"-ellipsis"),d),H(c,"".concat(B,"-with-append"),A),H(c,"".concat(B,"-fix-sticky"),(ve||le)&&K&&b),H(c,"".concat(B,"-row-hover"),!z&&T),c),R.className,z==null?void 0:z.className),xe={};h&&(xe.textAlign=h);var Ue=y(y(y(y({},R.style),xe),ue),z==null?void 0:z.style),ie=Ee;return Pe(ie)==="object"&&!Array.isArray(ie)&&!n.isValidElement(ie)&&(ie=null),d&&(k||g)&&(ie=n.createElement("span",{className:"".concat(B,"-content")},ie)),n.createElement(s,J({},z,R,{className:pe,style:Ue,title:G,scope:m,onMouseEnter:ne,onMouseLeave:te,colSpan:we!==1?we:null,rowSpan:de!==1?de:null}),A,ie)}const Ke=n.memo(Pt);function on(e,a,t,r,o,l){var i=t[e]||{},u=t[a]||{},c,s;i.fixed==="left"?c=r.left[e]:u.fixed==="right"&&(s=r.right[a]);var f=!1,d=!1,m=!1,p=!1,x=t[a+1],h=t[e-1],v=!(l!=null&&l.children);if(o==="rtl"){if(c!==void 0){var S=h&&h.fixed==="left";p=!S&&v}else if(s!==void 0){var N=x&&x.fixed==="right";m=!N&&v}}else if(c!==void 0){var L=x&&x.fixed==="left";f=!L&&v}else if(s!==void 0){var O=h&&h.fixed==="right";d=!O&&v}return{fixLeft:c,fixRight:s,lastFixLeft:f,firstFixRight:d,lastFixRight:m,firstFixLeft:p,isSticky:r.isSticky}}var Dn=n.createContext({});function Wt(e){var a=e.className,t=e.index,r=e.children,o=e.colSpan,l=o===void 0?1:o,i=e.rowSpan,u=e.align,c=oe(Z,["prefixCls","direction"]),s=c.prefixCls,f=c.direction,d=n.useContext(Dn),m=d.scrollColumnIndex,p=d.stickyOffsets,x=d.flattenColumns,h=d.columns,v=t+l-1,S=v+1===m?l+1:l,N=on(t,t+S-1,x,p,f,h==null?void 0:h[t]);return n.createElement(Ke,J({className:a,index:t,component:"td",prefixCls:s,record:null,dataIndex:null,align:u,colSpan:S,rowSpan:i,render:function(){return r}},N))}var Kt=["children"];function At(e){var a=e.children,t=ke(e,Kt);return n.createElement("tr",t,a)}function Ae(e){var a=e.children;return a}Ae.Row=At;Ae.Cell=Wt;function Dt(e){var a=e.children,t=e.stickyOffsets,r=e.flattenColumns,o=e.columns,l=oe(Z,"prefixCls"),i=r.length-1,u=r[i],c=n.useMemo(function(){return{stickyOffsets:t,flattenColumns:r,scrollColumnIndex:u!=null&&u.scrollbar?i:null,columns:o}},[u,r,i,t,o]);return n.createElement(Dn.Provider,{value:c},n.createElement("tfoot",{className:"".concat(l,"-summary")},a))}const Oe=$e(Dt);var Ut=Ae;function jt(e){return null}function Xt(e){return null}function Un(e,a,t,r,o,l){var i=[];i.push({record:e,indent:a,index:l});var u=o(e),c=r==null?void 0:r.has(u);if(e&&Array.isArray(e[t])&&c)for(var s=0;s<e[t].length;s+=1){var f=Un(e[t][s],a+1,t,r,o,s);i.push.apply(i,Q(f))}return i}function Vt(e,a,t,r){var o=n.useMemo(function(){if(t!=null&&t.size){for(var l=[],i=0;i<(e==null?void 0:e.length);i+=1){var u=e[i];l.push.apply(l,Q(Un(u,0,a,t,r,i)))}return l}return e==null?void 0:e.map(function(c,s){return{record:c,indent:0,index:s}})},[e,a,t,r]);return o}function jn(e){var a=e.prefixCls,t=e.children,r=e.component,o=e.cellComponent,l=e.className,i=e.expanded,u=e.colSpan,c=e.isEmpty,s=oe(Z,["scrollbarSize","fixHeader","fixColumn","componentWidth","horizonScroll"]),f=s.scrollbarSize,d=s.fixHeader,m=s.fixColumn,p=s.componentWidth,x=s.horizonScroll,h=t;return(c?x:m)&&(h=n.createElement("div",{style:{width:p-(d?f:0),position:"sticky",left:0,overflow:"hidden"},className:"".concat(a,"-expanded-row-fixed")},p!==0&&h)),n.createElement(r,{className:l,style:{display:i?null:"none"}},n.createElement(Ke,{component:o,prefixCls:a,colSpan:u},h))}function Xn(e){var a=e.className,t=e.style,r=e.record,o=e.index,l=e.renderIndex,i=e.rowKey,u=e.rowExpandable,c=e.expandedKeys,s=e.onRow,f=e.indent,d=f===void 0?0:f,m=e.rowComponent,p=e.cellComponent,x=e.scopeCellComponent,h=e.childrenColumnName,v=oe(Z,["prefixCls","fixedInfoList","flattenColumns","expandableType","expandRowByClick","onTriggerExpand","rowClassName","expandedRowClassName","indentSize","expandIcon","expandedRowRender","expandIconColumnIndex"]),S=v.prefixCls,N=v.fixedInfoList,L=v.flattenColumns,O=v.expandableType,C=v.expandRowByClick,w=v.onTriggerExpand,F=v.rowClassName,P=v.expandedRowClassName,V=v.indentSize,_=v.expandIcon,j=v.expandedRowRender,k=v.expandIconColumnIndex,g=n.useState(!1),W=$(g,2),A=W[0],M=W[1],R=c&&c.has(i);n.useEffect(function(){R&&M(!0)},[R]);var K=O==="row"&&(!u||u(r)),B=O==="nest",Y=h&&r&&r[h],b=K||B,me=n.useRef(w);me.current=w;var Re=function(){me.current.apply(me,arguments)},X=s==null?void 0:s(r,o),Ee=function(D){var T;C&&b&&Re(r,D);for(var ee=arguments.length,ne=new Array(ee>1?ee-1:0),te=1;te<ee;te++)ne[te-1]=arguments[te];X==null||(T=X.onClick)===null||T===void 0||T.call.apply(T,[X,D].concat(ne))},z;typeof F=="string"?z=F:typeof F=="function"&&(z=F(r,o,d));var ue=We(L),ve=n.createElement(m,J({},X,{"data-row-key":i,className:se(a,"".concat(S,"-row"),"".concat(S,"-row-level-").concat(d),z,X&&X.className),style:y(y({},t),X?X.style:null),onClick:Ee}),L.map(function(U,D){var T=U.render,ee=U.dataIndex,ne=U.className,te=ue[D],G=N[D],pe;D===(k||0)&&B&&(pe=n.createElement(n.Fragment,null,n.createElement("span",{style:{paddingLeft:"".concat(V*d,"px")},className:"".concat(S,"-row-indent indent-level-").concat(d)}),_({prefixCls:S,expanded:R,expandable:Y,record:r,onExpand:Re})));var xe;return U.onCell&&(xe=U.onCell(r,o)),n.createElement(Ke,J({className:ne,ellipsis:U.ellipsis,align:U.align,scope:U.rowScope,component:U.rowScope?x:p,prefixCls:S,key:te,record:r,index:o,renderIndex:l,dataIndex:ee,render:T,shouldCellUpdate:U.shouldCellUpdate,expanded:pe&&R},G,{appendNode:pe,additionalProps:xe}))})),le;if(K&&(A||R)){var we=j(r,o,d+1,R),de=P&&P(r,o,d);le=n.createElement(jn,{expanded:R,className:se("".concat(S,"-expanded-row"),"".concat(S,"-expanded-row-level-").concat(d+1),de),prefixCls:S,component:m,cellComponent:p,colSpan:L.length,isEmpty:!1},we)}return n.createElement(n.Fragment,null,ve,le)}Xn.displayName="BodyRow";const Yt=$e(Xn);function Gt(e){var a=e.columnKey,t=e.onColumnResize,r=n.useRef();return n.useEffect(function(){r.current&&t(a,r.current.offsetWidth)},[]),n.createElement(an,{data:a},n.createElement("td",{ref:r,style:{padding:0,border:0,height:0}},n.createElement("div",{style:{height:0,overflow:"hidden"}}," ")))}function qt(e){var a=e.prefixCls,t=e.columnsKey,r=e.onColumnResize;return n.createElement("tr",{"aria-hidden":"true",className:"".concat(a,"-measure-row"),style:{height:0,fontSize:0}},n.createElement(an.Collection,{onBatchResize:function(l){l.forEach(function(i){var u=i.data,c=i.size;r(u,c.offsetWidth)})}},t.map(function(o){return n.createElement(Gt,{key:o,columnKey:o,onColumnResize:r})})))}function Vn(e){var a=e.data,t=e.getRowKey,r=e.measureColumnWidth,o=e.expandedKeys,l=e.onRow,i=e.rowExpandable,u=e.emptyNode,c=e.childrenColumnName,s=oe(Z,["prefixCls","getComponent","onColumnResize","flattenColumns"]),f=s.prefixCls,d=s.getComponent,m=s.onColumnResize,p=s.flattenColumns,x=Vt(a,c,o,t),h=n.useRef({renderWithProps:!1}),v=d(["body","wrapper"],"tbody"),S=d(["body","row"],"tr"),N=d(["body","cell"],"td"),L=d(["body","cell"],"th"),O;a.length?O=x.map(function(w,F){var P=w.record,V=w.indent,_=w.index,j=t(P,F);return n.createElement(Yt,{key:j,rowKey:j,record:P,index:F,renderIndex:_,rowComponent:S,cellComponent:N,scopeCellComponent:L,expandedKeys:o,onRow:l,getRowKey:t,rowExpandable:i,childrenColumnName:c,indent:V})}):O=n.createElement(jn,{expanded:!0,className:"".concat(f,"-placeholder"),prefixCls:f,component:S,cellComponent:N,colSpan:p.length,isEmpty:!0},u);var C=We(p);return n.createElement(An.Provider,{value:h.current},n.createElement(v,{className:"".concat(f,"-tbody")},r&&n.createElement(qt,{prefixCls:f,columnsKey:C,onColumnResize:m}),O))}Vn.displayName="Body";const Jt=$e(Vn);var Qt=["expandable"],Yn="RC_TABLE_INTERNAL_COL_DEFINE";function Zt(e){var a=e.expandable,t=ke(e,Qt),r;return"expandable"in e?r=y(y({},t),a):r=t,r.showExpandColumn===!1&&(r.expandIconColumnIndex=-1),r}var er=["columnType"];function Gn(e){for(var a=e.colWidths,t=e.columns,r=e.columCount,o=[],l=r||t.length,i=!1,u=l-1;u>=0;u-=1){var c=a[u],s=t&&t[u],f=s&&s[Yn];if(c||f||i){var d=f||{};d.columnType;var m=ke(d,er);o.unshift(n.createElement("col",J({key:u,style:{width:c}},m))),i=!0}}return n.createElement("colgroup",null,o)}var nr=["className","noData","columns","flattenColumns","colWidths","columCount","stickyOffsets","direction","fixHeader","stickyTopOffset","stickyBottomOffset","stickyClassName","onScroll","maxContentScroll","children"];function tr(e,a){return n.useMemo(function(){for(var t=[],r=0;r<a;r+=1){var o=e[r];if(o!==void 0)t[r]=o;else return null}return t},[e.join("_"),a])}var qn=n.forwardRef(function(e,a){var t=e.className,r=e.noData,o=e.columns,l=e.flattenColumns,i=e.colWidths,u=e.columCount,c=e.stickyOffsets,s=e.direction,f=e.fixHeader,d=e.stickyTopOffset,m=e.stickyBottomOffset,p=e.stickyClassName,x=e.onScroll,h=e.maxContentScroll,v=e.children,S=ke(e,nr),N=oe(Z,["prefixCls","scrollbarSize","isSticky"]),L=N.prefixCls,O=N.scrollbarSize,C=N.isSticky,w=C&&!f?0:O,F=n.useRef(null),P=n.useCallback(function(M){In(a,M),In(F,M)},[]);n.useEffect(function(){var M;function R(K){var B=K,Y=B.currentTarget,b=B.deltaX;b&&(x({currentTarget:Y,scrollLeft:Y.scrollLeft+b}),K.preventDefault())}return(M=F.current)===null||M===void 0||M.addEventListener("wheel",R),function(){var K;(K=F.current)===null||K===void 0||K.removeEventListener("wheel",R)}},[]);var V=n.useMemo(function(){return l.every(function(M){return M.width>=0})},[l]),_=l[l.length-1],j={fixed:_?_.fixed:null,scrollbar:!0,onHeaderCell:function(){return{className:"".concat(L,"-cell-scrollbar")}}},k=n.useMemo(function(){return w?[].concat(Q(o),[j]):o},[w,o]),g=n.useMemo(function(){return w?[].concat(Q(l),[j]):l},[w,l]),W=n.useMemo(function(){var M=c.right,R=c.left;return y(y({},c),{},{left:s==="rtl"?[].concat(Q(R.map(function(K){return K+w})),[0]):R,right:s==="rtl"?M:[].concat(Q(M.map(function(K){return K+w})),[0]),isSticky:C})},[w,c,C]),A=tr(i,u);return n.createElement("div",{style:y({overflow:"hidden"},C?{top:d,bottom:m}:{}),ref:P,className:se(t,H({},p,!!p))},n.createElement("table",{style:{tableLayout:"fixed",visibility:r||A?null:"hidden"}},(!r||!h||V)&&n.createElement(Gn,{colWidths:A?[].concat(Q(A),[w]):[],columCount:u+1,columns:g}),v(y(y({},S),{},{stickyOffsets:W,columns:k,flattenColumns:g}))))});qn.displayName="FixedHolder";const Bn=n.memo(qn);function Jn(e){var a=e.cells,t=e.stickyOffsets,r=e.flattenColumns,o=e.rowComponent,l=e.cellComponent,i=e.tdCellComponent,u=e.onHeaderRow,c=e.index,s=oe(Z,["prefixCls","direction"]),f=s.prefixCls,d=s.direction,m;u&&(m=u(a.map(function(x){return x.column}),c));var p=We(a.map(function(x){return x.column}));return n.createElement(o,m,a.map(function(x,h){var v=x.column,S=on(x.colStart,x.colEnd,r,t,d,v),N;return v&&v.onHeaderCell&&(N=x.column.onHeaderCell(v)),n.createElement(Ke,J({},x,{scope:v.title?x.colSpan>1?"colgroup":"col":null,ellipsis:v.ellipsis,align:v.align,component:v.title?l:i,prefixCls:f,key:p[h]},S,{additionalProps:N,rowType:"header"}))}))}Jn.displayName="HeaderRow";function rr(e){var a=[];function t(i,u){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;a[c]=a[c]||[];var s=u,f=i.filter(Boolean).map(function(d){var m={key:d.key,className:d.className||"",children:d.title,column:d,colStart:s},p=1,x=d.children;return x&&x.length>0&&(p=t(x,s,c+1).reduce(function(h,v){return h+v},0),m.hasSubColumns=!0),"colSpan"in d&&(p=d.colSpan),"rowSpan"in d&&(m.rowSpan=d.rowSpan),m.colSpan=p,m.colEnd=m.colStart+p-1,a[c].push(m),s+=p,p});return f}t(e,0);for(var r=a.length,o=function(u){a[u].forEach(function(c){!("rowSpan"in c)&&!c.hasSubColumns&&(c.rowSpan=r-u)})},l=0;l<r;l+=1)o(l);return a}function ar(e){var a=e.stickyOffsets,t=e.columns,r=e.flattenColumns,o=e.onHeaderRow,l=oe(Z,["prefixCls","getComponent"]),i=l.prefixCls,u=l.getComponent,c=n.useMemo(function(){return rr(t)},[t]),s=u(["header","wrapper"],"thead"),f=u(["header","row"],"tr"),d=u(["header","cell"],"th"),m=u(["header","cell"],"td");return n.createElement(s,{className:"".concat(i,"-thead")},c.map(function(p,x){var h=n.createElement(Jn,{key:x,flattenColumns:r,cells:p,stickyOffsets:a,rowComponent:f,cellComponent:d,tdCellComponent:m,onHeaderRow:o,index:x});return h}))}const zn=$e(ar);var or=["children"],lr=["fixed"];function Qn(e){return Et(e).filter(function(a){return n.isValidElement(a)}).map(function(a){var t=a.key,r=a.props,o=r.children,l=ke(r,or),i=y({key:t},l);return o&&(i.children=Qn(o)),i})}function tn(e){return e.reduce(function(a,t){var r=t.fixed,o=r===!0?"left":r,l=t.children;return l&&l.length>0?[].concat(Q(a),Q(tn(l).map(function(i){return y({fixed:o},i)}))):[].concat(Q(a),[y(y({},t),{},{fixed:o})])},[])}function ir(e){return e.map(function(a){var t=a.fixed,r=ke(a,lr),o=t;return t==="left"?o="right":t==="right"&&(o="left"),y({fixed:o},r)})}function cr(e,a){var t=e.prefixCls,r=e.columns,o=e.children,l=e.expandable,i=e.expandedKeys,u=e.columnTitle,c=e.getRowKey,s=e.onTriggerExpand,f=e.expandIcon,d=e.rowExpandable,m=e.expandIconColumnIndex,p=e.direction,x=e.expandRowByClick,h=e.columnWidth,v=e.fixed,S=n.useMemo(function(){return r||Qn(o)},[r,o]),N=n.useMemo(function(){if(l){var C,w=S.slice();if(!w.includes(ge)){var F=m||0;F>=0&&w.splice(F,0,ge)}var P=w.indexOf(ge);w=w.filter(function(k,g){return k!==ge||g===P});var V=S[P],_;(v==="left"||v)&&!m?_="left":(v==="right"||v)&&m===S.length?_="right":_=V?V.fixed:null;var j=(C={},H(C,Yn,{className:"".concat(t,"-expand-icon-col"),columnType:"EXPAND_COLUMN"}),H(C,"title",u),H(C,"fixed",_),H(C,"className","".concat(t,"-row-expand-icon-cell")),H(C,"width",h),H(C,"render",function(g,W,A){var M=c(W,A),R=i.has(M),K=d?d(W):!0,B=f({prefixCls:t,expanded:R,expandable:K,record:W,onExpand:s});return x?n.createElement("span",{onClick:function(b){return b.stopPropagation()}},B):B}),C);return w.map(function(k){return k===ge?j:k})}return S.filter(function(k){return k!==ge})},[l,S,c,i,f,p]),L=n.useMemo(function(){var C=N;return a&&(C=a(C)),C.length||(C=[{render:function(){return null}}]),C},[a,N,p]),O=n.useMemo(function(){return p==="rtl"?ir(tn(L)):tn(L)},[L,p]);return[L,O]}function sr(e){var a,t=e.prefixCls,r=e.record,o=e.onExpand,l=e.expanded,i=e.expandable,u="".concat(t,"-row-expand-icon");if(!i)return n.createElement("span",{className:se(u,"".concat(t,"-row-spaced"))});var c=function(f){o(r,f),f.stopPropagation()};return n.createElement("span",{className:se(u,(a={},H(a,"".concat(t,"-row-expanded"),l),H(a,"".concat(t,"-row-collapsed"),!l),a)),onClick:c})}function ur(e,a,t){var r=[];function o(l){(l||[]).forEach(function(i,u){r.push(a(i,u)),o(i[t])})}return o(e),r}function dr(e,a,t){var r=Zt(e),o=r.expandIcon,l=r.expandedRowKeys,i=r.defaultExpandedRowKeys,u=r.defaultExpandAllRows,c=r.expandedRowRender,s=r.onExpand,f=r.onExpandedRowsChange,d=r.childrenColumnName,m=o||sr,p=d||"children",x=n.useMemo(function(){return c?"row":e.expandable&&e.internalHooks===rn&&e.expandable.__PARENT_RENDER_ICON__||a.some(function(C){return C&&Pe(C)==="object"&&C[p]})?"nest":!1},[!!c,a]),h=n.useState(function(){return i||(u?ur(a,t,p):[])}),v=$(h,2),S=v[0],N=v[1],L=n.useMemo(function(){return new Set(l||S||[])},[l,S]),O=n.useCallback(function(C){var w=t(C,a.indexOf(C)),F,P=L.has(w);P?(L.delete(w),F=Q(L)):F=[].concat(Q(L),[w]),N(F),s&&s(!P,C),f&&f(F)},[t,L,a,s,f]);return[r,x,L,m,p,O]}function fr(e,a,t,r){var o=e.map(function(l,i){return on(i,i,e,a,t,r==null?void 0:r[i])});return Pn(function(){return o},[o],function(l,i){return!Wn(l,i)})}function Zn(e){var a=n.useRef(e),t=n.useState({}),r=$(t,2),o=r[1],l=n.useRef(null),i=n.useRef([]);function u(c){i.current.push(c);var s=Promise.resolve();l.current=s,s.then(function(){if(l.current===s){var f=i.current,d=a.current;i.current=[],f.forEach(function(m){a.current=m(a.current)}),l.current=null,d!==a.current&&o({})}})}return n.useEffect(function(){return function(){l.current=null}},[]),[a.current,u]}function mr(e){var a=n.useRef(e||null),t=n.useRef();function r(){window.clearTimeout(t.current)}function o(i){a.current=i,r(),t.current=window.setTimeout(function(){a.current=null,t.current=void 0},100)}function l(){return a.current}return n.useEffect(function(){return r},[]),[o,l]}function vr(){var e=n.useState(-1),a=$(e,2),t=a[0],r=a[1],o=n.useState(-1),l=$(o,2),i=l[0],u=l[1],c=n.useCallback(function(s,f){r(s),u(f)},[]);return[t,i,c]}var On=bt()?window:null;function pr(e,a){var t=Pe(e)==="object"?e:{},r=t.offsetHeader,o=r===void 0?0:r,l=t.offsetSummary,i=l===void 0?0:l,u=t.offsetScroll,c=u===void 0?0:u,s=t.getContainer,f=s===void 0?function(){return On}:s,d=f()||On;return n.useMemo(function(){var m=!!e;return{isSticky:m,stickyClassName:m?"".concat(a,"-sticky-holder"):"",offsetHeader:o,offsetSummary:i,offsetScroll:c,container:d}},[c,o,i,a,d])}function xr(e,a,t){var r=n.useMemo(function(){for(var o=[],l=[],i=0,u=0,c=0;c<a;c+=1)if(t==="rtl"){l[c]=u,u+=e[c]||0;var s=a-c-1;o[s]=i,i+=e[s]||0}else{o[c]=i,i+=e[c]||0;var f=a-c-1;l[f]=u,u+=e[f]||0}return{left:o,right:l}},[e,a,t]);return r}function $n(e){var a=e.className,t=e.children;return n.createElement("div",{className:a},t)}var Cr=function(a,t){var r,o,l=a.scrollBodyRef,i=a.onScroll,u=a.offsetScroll,c=a.container,s=oe(Z,"prefixCls"),f=((r=l.current)===null||r===void 0?void 0:r.scrollWidth)||0,d=((o=l.current)===null||o===void 0?void 0:o.clientWidth)||0,m=f&&d*(d/f),p=n.useRef(),x=Zn({scrollLeft:0,isHiddenScrollBar:!1}),h=$(x,2),v=h[0],S=h[1],N=n.useRef({delta:0,x:0}),L=n.useState(!1),O=$(L,2),C=O[0],w=O[1],F=function(){w(!1)},P=function(g){g.persist(),N.current.delta=g.pageX-v.scrollLeft,N.current.x=0,w(!0),g.preventDefault()},V=function(g){var W,A=g||((W=window)===null||W===void 0?void 0:W.event),M=A.buttons;if(!C||M===0){C&&w(!1);return}var R=N.current.x+g.pageX-N.current.x-N.current.delta;R<=0&&(R=0),R+m>=d&&(R=d-m),i({scrollLeft:R/d*(f+2)}),N.current.x=g.pageX},_=function(){if(l.current){var g=_n(l.current).top,W=g+l.current.offsetHeight,A=c===window?document.documentElement.scrollTop+window.innerHeight:_n(c).top+c.clientHeight;W-Hn()<=A||g>=A-u?S(function(M){return y(y({},M),{},{isHiddenScrollBar:!0})}):S(function(M){return y(y({},M),{},{isHiddenScrollBar:!1})})}},j=function(g){S(function(W){return y(y({},W),{},{scrollLeft:g/f*d||0})})};return n.useImperativeHandle(t,function(){return{setScrollLeft:j}}),n.useEffect(function(){var k=ze(document.body,"mouseup",F,!1),g=ze(document.body,"mousemove",V,!1);return _(),function(){k.remove(),g.remove()}},[m,C]),n.useEffect(function(){var k=ze(c,"scroll",_,!1),g=ze(window,"resize",_,!1);return function(){k.remove(),g.remove()}},[c]),n.useEffect(function(){v.isHiddenScrollBar||S(function(k){var g=l.current;return g?y(y({},k),{},{scrollLeft:g.scrollLeft/g.scrollWidth*g.clientWidth}):k})},[v.isHiddenScrollBar]),f<=d||!m||v.isHiddenScrollBar?null:n.createElement("div",{style:{height:Hn(),width:d,bottom:u},className:"".concat(s,"-sticky-scroll")},n.createElement("div",{onMouseDown:P,ref:p,className:se("".concat(s,"-sticky-scroll-bar"),H({},"".concat(s,"-sticky-scroll-bar-active"),C)),style:{width:"".concat(m,"px"),transform:"translate3d(".concat(v.scrollLeft,"px, 0, 0)")}}))};const yr=n.forwardRef(Cr);var hr=[],Sr={},rn="rc-table-internal-hook";function Rr(){return"No Data"}function wr(e){var a,t=y({rowKey:"key",prefixCls:"rc-table",emptyText:Rr},e),r=t.prefixCls,o=t.className,l=t.rowClassName,i=t.style,u=t.data,c=t.rowKey,s=t.scroll,f=t.tableLayout,d=t.direction,m=t.title,p=t.footer,x=t.summary,h=t.caption,v=t.id,S=t.showHeader,N=t.components,L=t.emptyText,O=t.onRow,C=t.onHeaderRow,w=t.internalHooks,F=t.transformColumns,P=t.internalRefs,V=t.sticky,_=u||hr,j=!!_.length,k=n.useCallback(function(E,I){return Kn(N,E)||I},[N]),g=n.useMemo(function(){return typeof c=="function"?c:function(E){var I=E&&E[c];return I}},[c]),W=vr(),A=$(W,3),M=A[0],R=A[1],K=A[2],B=dr(t,_,g),Y=$(B,6),b=Y[0],me=Y[1],Re=Y[2],X=Y[3],Ee=Y[4],z=Y[5],ue=n.useState(0),ve=$(ue,2),le=ve[0],we=ve[1],de=cr(y(y(y({},t),b),{},{expandable:!!b.expandedRowRender,columnTitle:b.columnTitle,expandedKeys:Re,getRowKey:g,onTriggerExpand:z,expandIcon:X,expandIconColumnIndex:b.expandIconColumnIndex,direction:d}),w===rn?F:null),U=$(de,2),D=U[0],T=U[1],ee=n.useMemo(function(){return{columns:D,flattenColumns:T}},[D,T]),ne=n.useRef(),te=n.useRef(),G=n.useRef(),pe=n.useRef(),xe=n.useRef(),Ue=n.useState(!1),ie=$(Ue,2),je=ie[0],Ce=ie[1],fe=n.useState(!1),ln=$(fe,2),et=ln[0],Ie=ln[1],nt=Zn(new Map),cn=$(nt,2),tt=cn[0],rt=cn[1],at=We(T),sn=at.map(function(E){return tt.get(E)}),un=n.useMemo(function(){return sn},[sn.join("_")]),He=xr(un,T.length,d),re=s&&nn(s.y),ce=s&&nn(s.x)||Boolean(b.fixed),Te=ce&&T.some(function(E){var I=E.fixed;return I}),dn=n.useRef(),be=pr(V,r),ye=be.isSticky,ot=be.offsetHeader,lt=be.offsetSummary,it=be.offsetScroll,ct=be.stickyClassName,st=be.container,ae=n.useMemo(function(){return x==null?void 0:x(_)},[x,_]),Le=(re||ye)&&n.isValidElement(ae)&&ae.type===Ae&&ae.props.fixed,Xe,_e,Ve;re&&(_e={overflowY:"scroll",maxHeight:s.y}),ce&&(Xe={overflowX:"auto"},re||(_e={overflowY:"hidden"}),Ve={width:(s==null?void 0:s.x)===!0?"auto":s==null?void 0:s.x,minWidth:"100%"});var fn=n.useCallback(function(E,I){Nt(ne.current)&&rt(function(q){if(q.get(E)!==I){var he=new Map(q);return he.set(E,I),he}return q})},[]),ut=mr(null),mn=$(ut,2),dt=mn[0],vn=mn[1];function Me(E,I){I&&(typeof I=="function"?I(E):I.scrollLeft!==E&&(I.scrollLeft=E,I.scrollLeft!==E&&setTimeout(function(){I.scrollLeft=E},0)))}var Ne=kt(function(E){var I=E.currentTarget,q=E.scrollLeft,he=d==="rtl",Se=typeof q=="number"?q:I.scrollLeft,Ln=I||Sr;if(!vn()||vn()===Ln){var Qe;dt(Ln),Me(Se,te.current),Me(Se,G.current),Me(Se,xe.current),Me(Se,(Qe=dn.current)===null||Qe===void 0?void 0:Qe.setScrollLeft)}if(I){var Ze=I.scrollWidth,en=I.clientWidth;if(Ze===en){Ce(!1),Ie(!1);return}he?(Ce(-Se<Ze-en),Ie(-Se>0)):(Ce(Se>0),Ie(Se<Ze-en))}}),pn=function(){ce&&G.current?Ne({currentTarget:G.current}):(Ce(!1),Ie(!1))},ft=function(I){var q=I.width;q!==le&&(pn(),we(ne.current?ne.current.offsetWidth:q))},xn=n.useRef(!1);n.useEffect(function(){xn.current&&pn()},[ce,u,D.length]),n.useEffect(function(){xn.current=!0},[]);var mt=n.useState(0),Cn=$(mt,2),Fe=Cn[0],yn=Cn[1],vt=n.useState(!0),hn=$(vt,2),Sn=hn[0],pt=hn[1];n.useEffect(function(){G.current instanceof Element?yn(Mn(G.current).width):yn(Mn(pe.current).width),pt(Tt("position","sticky"))},[]),n.useEffect(function(){w===rn&&P&&(P.body.current=G.current)});var xt=n.useCallback(function(E){return n.createElement(n.Fragment,null,n.createElement(zn,E),Le==="top"&&n.createElement(Oe,E,ae))},[Le,ae]),Ct=n.useCallback(function(E){return n.createElement(Oe,E,ae)},[ae]),Rn=k(["table"],"table"),Be=n.useMemo(function(){return f||(Te?(s==null?void 0:s.x)==="max-content"?"auto":"fixed":re||ye||T.some(function(E){var I=E.ellipsis;return I})?"fixed":"auto")},[re,Te,T,f,ye]),Ye,Ge={colWidths:un,columCount:T.length,stickyOffsets:He,onHeaderRow:C,fixHeader:re,scroll:s},yt=n.useMemo(function(){return j?null:typeof L=="function"?L():L},[j,L]),wn=n.createElement(Jt,{data:_,measureColumnWidth:re||ce||ye,expandedKeys:Re,rowExpandable:b.rowExpandable,getRowKey:g,onRow:O,emptyNode:yt,childrenColumnName:Ee}),gn=n.createElement(Gn,{colWidths:T.map(function(E){var I=E.width;return I}),columns:T}),En=h!=null?n.createElement("caption",{className:"".concat(r,"-caption")},h):void 0,bn=k(["body"]),ht=Fn(t,{data:!0}),Nn=Fn(t,{aria:!0});if(re||ye){var qe;typeof bn=="function"?(qe=bn(_,{scrollbarSize:Fe,ref:G,onScroll:Ne}),Ge.colWidths=T.map(function(E,I){var q=E.width,he=I===D.length-1?q-Fe:q;return typeof he=="number"&&!Number.isNaN(he)?he:(Lt(!1,"When use `components.body` with render props. Each column should have a fixed `width` value."),0)})):qe=n.createElement("div",{style:y(y({},Xe),_e),onScroll:Ne,ref:G,className:se("".concat(r,"-body"))},n.createElement(Rn,J({style:y(y({},Ve),{},{tableLayout:Be})},Nn),En,gn,wn,!Le&&ae&&n.createElement(Oe,{stickyOffsets:He,flattenColumns:T,columns:D},ae)));var kn=y(y(y({noData:!_.length,maxContentScroll:ce&&s.x==="max-content"},Ge),ee),{},{direction:d,stickyClassName:ct,onScroll:Ne});Ye=n.createElement(n.Fragment,null,S!==!1&&n.createElement(Bn,J({},kn,{stickyTopOffset:ot,className:"".concat(r,"-header"),ref:te}),xt),qe,Le&&Le!=="top"&&n.createElement(Bn,J({},kn,{stickyBottomOffset:lt,className:"".concat(r,"-summary"),ref:xe}),Ct),ye&&n.createElement(yr,{ref:dn,offsetScroll:it,scrollBodyRef:G,onScroll:Ne,container:st}))}else Ye=n.createElement("div",{style:y(y({},Xe),_e),className:se("".concat(r,"-content")),onScroll:Ne,ref:G},n.createElement(Rn,J({style:y(y({},Ve),{},{tableLayout:Be})},Nn),En,gn,S!==!1&&n.createElement(zn,J({},Ge,ee)),wn,ae&&n.createElement(Oe,{stickyOffsets:He,flattenColumns:T,columns:D},ae)));var Je=n.createElement("div",J({className:se(r,o,(a={},H(a,"".concat(r,"-rtl"),d==="rtl"),H(a,"".concat(r,"-ping-left"),je),H(a,"".concat(r,"-ping-right"),et),H(a,"".concat(r,"-layout-fixed"),f==="fixed"),H(a,"".concat(r,"-fixed-header"),re),H(a,"".concat(r,"-fixed-column"),Te),H(a,"".concat(r,"-scroll-horizontal"),ce),H(a,"".concat(r,"-has-fix-left"),T[0]&&T[0].fixed),H(a,"".concat(r,"-has-fix-right"),T[T.length-1]&&T[T.length-1].fixed==="right"),a)),style:i,id:v,ref:ne},ht),m&&n.createElement($n,{className:"".concat(r,"-title")},m(_)),n.createElement("div",{ref:pe,className:"".concat(r,"-container")},Ye),p&&n.createElement($n,{className:"".concat(r,"-footer")},p(_)));ce&&(Je=n.createElement(an,{onResize:ft},Je));var Tn=fr(T,He,d,D),St=n.useMemo(function(){return{prefixCls:r,getComponent:k,scrollbarSize:Fe,direction:d,fixedInfoList:Tn,isSticky:ye,supportSticky:Sn,componentWidth:le,fixHeader:re,fixColumn:Te,horizonScroll:ce,tableLayout:Be,rowClassName:l,expandedRowClassName:b.expandedRowClassName,expandIcon:X,expandableType:me,expandRowByClick:b.expandRowByClick,expandedRowRender:b.expandedRowRender,onTriggerExpand:z,expandIconColumnIndex:b.expandIconColumnIndex,indentSize:b.indentSize,allColumnsFixedLeft:T.every(function(E){return E.fixed==="left"}),columns:D,flattenColumns:T,onColumnResize:fn,hoverStartRow:M,hoverEndRow:R,onHover:K}},[r,k,Fe,d,Tn,ye,Sn,le,re,Te,ce,Be,l,b.expandedRowClassName,X,me,b.expandRowByClick,b.expandedRowRender,z,b.expandIconColumnIndex,b.indentSize,D,T,fn,M,R,K]);return n.createElement(Z.Provider,{value:St},Je)}function gr(e){return gt(wr,e)}var De=gr();De.EXPAND_COLUMN=ge;De.Column=jt;De.ColumnGroup=Xt;De.Summary=Ut;export{ge as E,Ut as F,Yn as I,rn as a,Qn as c,gr as g};