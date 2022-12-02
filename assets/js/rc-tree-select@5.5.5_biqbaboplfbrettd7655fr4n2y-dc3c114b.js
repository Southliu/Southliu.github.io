import{c as W,b as j,g as sr,e as V,f as Lr,d as Ir}from"./@babel_runtime@7.20.1-5f192e20.js";import{r as i}from"./react@18.2.0-52f219d3.js";import{u as Kr,b as Tr,B as Vr}from"./rc-select@14.1.14_biqbaboplfbrettd7655fr4n2y-20f909ab.js";import{T as _r,c as Nr,d as Ye}from"./rc-tree@5.7.1_biqbaboplfbrettd7655fr4n2y-1d20759e.js";import{e as Mr,K as ne,t as Pr,a as Fe,h as ir}from"./rc-util@5.24.6_biqbaboplfbrettd7655fr4n2y-e98ccc02.js";import"./classnames@2.3.2-d75d9a59.js";import"./react-is@16.13.1-140c6955.js";import{j as Q,b as Ar}from"./@ant-design_cssinjs@1.0.2_biqbaboplfbrettd7655fr4n2y-bf6e9dad.js";var dr=i.exports.createContext(null),fr=i.exports.createContext(null);function Hr(e){return Array.isArray(e)?e:e!==void 0?[e]:[]}function Or(e){var r=e||{},t=r.label,o=r.value,a=r.children,u=o||"value";return{_title:t?[t]:["title","label"],value:u,key:u,children:a||"children"}}function qe(e){return!e||e.disabled||e.disableCheckbox||e.checkable===!1}function $r(e,r){var t=[];function o(a){a.forEach(function(u){var n=u[r.children];n&&(t.push(u[r.value]),o(n))})}return o(e),t}function or(e){return e==null}var Rr={width:0,height:0,display:"flex",overflow:"hidden",opacity:0,border:0,padding:0,margin:0},Fr=function(r,t){var o=Kr(),a=o.prefixCls,u=o.multiple,n=o.searchValue,c=o.toggleOpen,l=o.open,d=o.notFoundContent,v=i.exports.useContext(fr),w=v.virtual,C=v.listHeight,b=v.listItemHeight,L=v.treeData,I=v.fieldNames,U=v.onSelect,O=v.dropdownMatchSelectWidth,B=v.treeExpandAction,g=i.exports.useContext(dr),K=g.checkable,_=g.checkedKeys,ae=g.halfCheckedKeys,H=g.treeExpandedKeys,je=g.treeDefaultExpandAll,me=g.treeDefaultExpandedKeys,xe=g.onTreeExpand,Ue=g.treeIcon,Be=g.showTreeIcon,Ce=g.switcherIcon,Se=g.treeLine,be=g.treeNodeFilterProp,ke=g.loadData,le=g.treeLoadedKeys,Ee=g.treeMotion,De=g.onTreeLoad,we=g.keyEntities,G=i.exports.useRef(),ie=Mr(function(){return L},[l,L],function(h,k){return k[0]&&h[1]!==k[1]}),Le=i.exports.useMemo(function(){return K?{checked:_,halfChecked:ae}:null},[K,_,ae]);i.exports.useEffect(function(){if(l&&!u&&_.length){var h;(h=G.current)===null||h===void 0||h.scrollTo({key:_[0]})}},[l]);var oe=String(n).toLowerCase(),Ie=function(k){return oe?String(k[be]).toLowerCase().includes(oe):!1},ue=i.exports.useState(me),ce=W(ue,2),X=ce[0],Ke=ce[1],Te=i.exports.useState(null),se=W(Te,2),de=se[0],fe=se[1],Ve=i.exports.useMemo(function(){return H?j(H):n?de:X},[X,de,H,n]);i.exports.useEffect(function(){n&&fe($r(L,I))},[n]);var Ge=function(k){Ke(k),fe(k),xe&&xe(k)},J=function(k){k.preventDefault()},$=function(k,Y){var P=Y.node;K&&qe(P)||(U(P.key,{selected:!_.includes(P.key)}),u||c(!1))},_e=i.exports.useState(null),M=W(_e,2),ve=M[0],Ne=M[1],N=we[ve];if(i.exports.useImperativeHandle(t,function(){var h;return{scrollTo:(h=G.current)===null||h===void 0?void 0:h.scrollTo,onKeyDown:function(Y){var P,Me=Y.which;switch(Me){case ne.UP:case ne.DOWN:case ne.LEFT:case ne.RIGHT:(P=G.current)===null||P===void 0||P.onKeyDown(Y);break;case ne.ENTER:{if(N){var Pe=(N==null?void 0:N.node)||{},Z=Pe.selectable,Ae=Pe.value;Z!==!1&&$(null,{node:{key:ve},selected:!_.includes(Ae)})}break}case ne.ESC:c(!1)}},onKeyUp:function(){}}}),ie.length===0)return Q("div",{role:"listbox",className:"".concat(a,"-empty"),onMouseDown:J,children:d});var he={fieldNames:I};return le&&(he.loadedKeys=le),Ve&&(he.expandedKeys=Ve),Ar("div",{onMouseDown:J,children:[N&&l&&Q("span",{style:Rr,"aria-live":"assertive",children:N.node.value}),Q(_r,{ref:G,focusable:!1,prefixCls:"".concat(a,"-tree"),treeData:ie,height:C,itemHeight:b,virtual:w!==!1&&O!==!1,multiple:u,icon:Ue,showIcon:Be,switcherIcon:Ce,showLine:Se,loadData:n?null:ke,motion:Ee,activeKey:ve,checkable:K,checkStrictly:!0,checkedKeys:Le,selectedKeys:K?[]:_,defaultExpandAll:je,...he,onActiveChange:Ne,onSelect:$,onCheck:$,onExpand:Ge,onLoad:De,filterTreeNode:Ie,expandAction:B})]})},vr=i.exports.forwardRef(Fr);vr.displayName="OptionList";var hr=function(){return null},Wr="SHOW_ALL",pr="SHOW_PARENT",Qe="SHOW_CHILD";function ur(e,r,t,o){var a=new Set(e);return r===Qe?e.filter(function(u){var n=t[u];return!(n&&n.children&&n.children.some(function(c){var l=c.node;return a.has(l[o.value])})&&n.children.every(function(c){var l=c.node;return qe(l)||a.has(l[o.value])}))}):r===pr?e.filter(function(u){var n=t[u],c=n?n.parent:null;return!(c&&!qe(c.node)&&a.has(c.key))}):e}var jr=["children","value"];function gr(e){return Pr(e).map(function(r){if(!i.exports.isValidElement(r)||!r.type)return null;var t=r,o=t.key,a=t.props,u=a.children,n=a.value,c=sr(a,jr),l=V({key:o,value:n},c),d=gr(u);return d.length&&(l.children=d),l}).filter(function(r){return r})}function ze(e){if(!e)return e;var r=V({},e);return"props"in r||Object.defineProperty(r,"props",{get:function(){return Fe(!1,"New `rc-tree-select` not support return node instance as argument anymore. Please consider to remove `props` access."),r}}),r}function Ur(e,r,t,o,a,u){var n=null,c=null;function l(){function d(v){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"0",C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return v.map(function(b,L){var I="".concat(w,"-").concat(L),U=b[u.value],O=t.includes(U),B=d(b[u.children]||[],I,O),g=Q(hr,{...b,children:B.map(function(_){return _.node})});if(r===U&&(n=g),O){var K={pos:I,node:g,children:B};return C||c.push(K),K}return null}).filter(function(b){return b})}c||(c=[],d(o),c.sort(function(v,w){var C=v.node.props.value,b=w.node.props.value,L=t.indexOf(C),I=t.indexOf(b);return L-I}))}Object.defineProperty(e,"triggerNode",{get:function(){return Fe(!1,"`triggerNode` is deprecated. Please consider decoupling data with node."),l(),n}}),Object.defineProperty(e,"allCheckedNodes",{get:function(){return Fe(!1,"`allCheckedNodes` is deprecated. Please consider decoupling data with node."),l(),a?c:c.map(function(v){var w=v.node;return w})}})}function Br(e,r){var t=r.id,o=r.pId,a=r.rootPId,u={},n=[],c=e.map(function(l){var d=V({},l),v=d[t];return u[v]=d,d.key=d.key||v,d});return c.forEach(function(l){var d=l[o],v=u[d];v&&(v.children=v.children||[],v.children.push(l)),(d===a||!v&&a===null)&&n.push(l)}),n}function Gr(e,r,t){return i.exports.useMemo(function(){return e?t?Br(e,V({id:"id",pId:"pId",rootPId:null},t!==!0?t:{})):e:gr(r)},[r,t,e])}const Jr=function(e){var r=i.exports.useRef({valueLabels:new Map});return i.exports.useMemo(function(){var t=r.current.valueLabels,o=new Map,a=e.map(function(u){var n,c=u.value,l=(n=u.label)!==null&&n!==void 0?n:t.get(c);return o.set(c,l),V(V({},u),{},{label:l})});return r.current.valueLabels=o,[a]},[e])};function cr(e){var r=i.exports.useRef();r.current=e;var t=i.exports.useCallback(function(){return r.current.apply(r,arguments)},[]);return t}const Yr=function(e,r){return i.exports.useMemo(function(){var t=Nr(e,{fieldNames:r,initWrapper:function(a){return V(V({},a),{},{valueEntities:new Map})},processEntity:function(a,u){var n=a.node[r.value];u.valueEntities.set(n,a)}});return t},[e,r])},qr=function(e,r,t,o){return i.exports.useMemo(function(){var a=e.map(function(l){var d=l.value;return d}),u=r.map(function(l){var d=l.value;return d}),n=a.filter(function(l){return!o[l]});if(t){var c=Ye(a,!0,o);a=c.checkedKeys,u=c.halfCheckedKeys}return[Array.from(new Set([].concat(j(n),j(a)))),u]},[e,r,t,o])},zr=function(e,r,t){var o=t.treeNodeFilterProp,a=t.filterTreeNode,u=t.fieldNames,n=u.children;return i.exports.useMemo(function(){if(!r||a===!1)return e;var c;if(typeof a=="function")c=a;else{var l=r.toUpperCase();c=function(w,C){var b=C[o];return String(b).toUpperCase().includes(l)}}function d(v){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return v.map(function(C){var b=C[n],L=w||c(r,ze(C)),I=d(b||[],L);return L||I.length?V(V({},C),{},Lr({isLeaf:void 0},n,I)):null}).filter(function(C){return C})}return d(e)},[e,r,n,o,a])};var Qr=["id","prefixCls","value","defaultValue","onChange","onSelect","onDeselect","searchValue","inputValue","onSearch","autoClearSearchValue","filterTreeNode","treeNodeFilterProp","showCheckedStrategy","treeNodeLabelProp","multiple","treeCheckable","treeCheckStrictly","labelInValue","fieldNames","treeDataSimpleMode","treeData","children","loadData","treeLoadedKeys","onTreeLoad","treeDefaultExpandAll","treeExpandedKeys","treeDefaultExpandedKeys","onTreeExpand","treeExpandAction","virtual","listHeight","listItemHeight","onDropdownVisibleChange","dropdownMatchSelectWidth","treeLine","treeIcon","showTreeIcon","switcherIcon","treeMotion"];function Xr(e){return!e||Ir(e)!=="object"}var Zr=i.exports.forwardRef(function(e,r){var t=e.id,o=e.prefixCls,a=o===void 0?"rc-tree-select":o,u=e.value,n=e.defaultValue,c=e.onChange,l=e.onSelect,d=e.onDeselect,v=e.searchValue,w=e.inputValue,C=e.onSearch,b=e.autoClearSearchValue,L=b===void 0?!0:b,I=e.filterTreeNode,U=e.treeNodeFilterProp,O=U===void 0?"value":U,B=e.showCheckedStrategy,g=B===void 0?Qe:B,K=e.treeNodeLabelProp,_=e.multiple,ae=e.treeCheckable,H=e.treeCheckStrictly,je=e.labelInValue,me=e.fieldNames,xe=e.treeDataSimpleMode,Ue=e.treeData,Be=e.children,Ce=e.loadData,Se=e.treeLoadedKeys,be=e.onTreeLoad,ke=e.treeDefaultExpandAll,le=e.treeExpandedKeys,Ee=e.treeDefaultExpandedKeys,De=e.onTreeExpand,we=e.treeExpandAction,G=e.virtual,ie=e.listHeight,Le=ie===void 0?200:ie,oe=e.listItemHeight,Ie=oe===void 0?20:oe,ue=e.onDropdownVisibleChange,ce=e.dropdownMatchSelectWidth,X=ce===void 0?!0:ce,Ke=e.treeLine,Te=e.treeIcon,se=e.showTreeIcon,de=e.switcherIcon,fe=e.treeMotion,Ve=sr(e,Qr),Ge=Tr(t),J=ae&&!H,$=ae||H,_e=H||je,M=$||_,ve=ir(n,{value:u}),Ne=W(ve,2),N=Ne[0],he=Ne[1],h=i.exports.useMemo(function(){return Or(me)},[JSON.stringify(me)]),k=ir("",{value:v!==void 0?v:w,postState:function(s){return s||""}}),Y=W(k,2),P=Y[0],Me=Y[1],Pe=function(s){Me(s),C==null||C(s)},Z=Gr(Ue,Be,xe),Ae=Yr(Z,h),T=Ae.keyEntities,q=Ae.valueEntities,Xe=i.exports.useCallback(function(f){var s=[],p=[];return f.forEach(function(y){q.has(y)?p.push(y):s.push(y)}),{missingRawValues:s,existRawValues:p}},[q]),Ze=zr(Z,P,{fieldNames:h,treeNodeFilterProp:O,filterTreeNode:I}),er=i.exports.useCallback(function(f){if(f){if(K)return f[K];for(var s=h._title,p=0;p<s.length;p+=1){var y=f[s[p]];if(y!==void 0)return y}}},[h,K]),pe=i.exports.useCallback(function(f){var s=Hr(f);return s.map(function(p){return Xr(p)?{value:p}:p})},[]),He=i.exports.useCallback(function(f){var s=pe(f);return s.map(function(p){var y=p.label,D=p.value,S=p.halfChecked,m,x=q.get(D);if(x){var E;y=(E=y)!==null&&E!==void 0?E:er(x.node),m=x.node.disabled}else if(y===void 0){var R=pe(N).find(function(ge){return ge.value===D});y=R.label}return{label:y,value:D,halfChecked:S,disabled:m}})},[q,er,pe,N]),rr=i.exports.useMemo(function(){return pe(N)},[pe,N]),yr=i.exports.useMemo(function(){var f=[],s=[];return rr.forEach(function(p){p.halfChecked?s.push(p):f.push(p)}),[f,s]},[rr]),tr=W(yr,2),ee=tr[0],nr=tr[1],ar=i.exports.useMemo(function(){return ee.map(function(f){return f.value})},[ee]),mr=qr(ee,nr,J,T),lr=W(mr,2),re=lr[0],Oe=lr[1],xr=i.exports.useMemo(function(){var f=ur(re,g,T,h),s=f.map(function(S){var m,x,E;return(m=(x=T[S])===null||x===void 0||(E=x.node)===null||E===void 0?void 0:E[h.value])!==null&&m!==void 0?m:S}),p=s.map(function(S){var m=ee.find(function(x){return x.value===S});return{value:S,label:m==null?void 0:m.label}}),y=He(p),D=y[0];return!M&&D&&or(D.value)&&or(D.label)?[]:y.map(function(S){var m;return V(V({},S),{},{label:(m=S.label)!==null&&m!==void 0?m:S.value})})},[h,M,re,ee,He,g,T]),Cr=Jr(xr),Sr=W(Cr,1),br=Sr[0],$e=cr(function(f,s,p){var y=He(f);if(he(y),L&&Me(""),c){var D=f;if(J){var S=ur(f,g,T,h);D=S.map(function(A){var F=q.get(A);return F?F.node[h.value]:A})}var m=s||{triggerValue:void 0,selected:void 0},x=m.triggerValue,E=m.selected,R=D;if(H){var ge=nr.filter(function(A){return!D.includes(A.value)});R=[].concat(j(R),j(ge))}var ye=He(R),z={preValue:ee,triggerValue:x},te=!0;(H||p==="selection"&&!E)&&(te=!1),Ur(z,x,f,Z,te,h),$?z.checked=E:z.selected=E;var Re=_e?ye:ye.map(function(A){return A.value});c(M?Re:Re[0],_e?null:ye.map(function(A){return A.label}),z)}}),Je=i.exports.useCallback(function(f,s){var p,y=s.selected,D=s.source,S=T[f],m=S==null?void 0:S.node,x=(p=m==null?void 0:m[h.value])!==null&&p!==void 0?p:f;if(!M)$e([x],{selected:!0,triggerValue:x},"option");else{var E=y?[].concat(j(ar),[x]):re.filter(function(F){return F!==x});if(J){var R=Xe(E),ge=R.missingRawValues,ye=R.existRawValues,z=ye.map(function(F){return q.get(F).key}),te;if(y){var Re=Ye(z,!0,T);te=Re.checkedKeys}else{var A=Ye(z,{checked:!1,halfCheckedKeys:Oe},T);te=A.checkedKeys}E=[].concat(j(ge),j(te.map(function(F){return T[F].node[h.value]})))}$e(E,{selected:y,triggerValue:x},D||"option")}y||!M?l==null||l(x,ze(m)):d==null||d(x,ze(m))},[Xe,q,T,h,M,ar,$e,J,l,d,re,Oe]),kr=i.exports.useCallback(function(f){if(ue){var s={};Object.defineProperty(s,"documentClickClose",{get:function(){return Fe(!1,"Second param of `onDropdownVisibleChange` has been removed."),!1}}),ue(f,s)}},[ue]),Er=cr(function(f,s){var p=f.map(function(y){return y.value});if(s.type==="clear"){$e(p,{},"selection");return}s.values.length&&Je(s.values[0].value,{selected:!1,source:"selection"})}),Dr=i.exports.useMemo(function(){return{virtual:G,dropdownMatchSelectWidth:X,listHeight:Le,listItemHeight:Ie,treeData:Ze,fieldNames:h,onSelect:Je,treeExpandAction:we}},[G,X,Le,Ie,Ze,h,Je,we]),wr=i.exports.useMemo(function(){return{checkable:$,loadData:Ce,treeLoadedKeys:Se,onTreeLoad:be,checkedKeys:re,halfCheckedKeys:Oe,treeDefaultExpandAll:ke,treeExpandedKeys:le,treeDefaultExpandedKeys:Ee,onTreeExpand:De,treeIcon:Te,treeMotion:fe,showTreeIcon:se,switcherIcon:de,treeLine:Ke,treeNodeFilterProp:O,keyEntities:T}},[$,Ce,Se,be,re,Oe,ke,le,Ee,De,Te,fe,se,de,Ke,O,T]);return Q(fr.Provider,{value:Dr,children:Q(dr.Provider,{value:wr,children:Q(Vr,{ref:r,...Ve,id:Ge,prefixCls:a,mode:M?"multiple":void 0,displayValues:br,onDisplayValuesChange:Er,searchValue:P,onSearch:Pe,OptionList:vr,emptyOptions:!Z.length,onDropdownVisibleChange:kr,dropdownMatchSelectWidth:X})})})}),We=Zr;We.TreeNode=hr;We.SHOW_ALL=Wr;We.SHOW_PARENT=pr;We.SHOW_CHILD=Qe;export{We as G,Wr as S,hr as T,pr as a,Qe as b};