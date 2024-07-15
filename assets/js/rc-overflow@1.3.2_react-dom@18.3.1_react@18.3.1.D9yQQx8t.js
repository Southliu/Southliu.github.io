import{l as e,j as r,h as t,g as n}from"./@babel_runtime@7.24.7.uphKh7BM.js";import{r as a,e as i}from"./react@18.3.1.zIIbIvjs.js";import{c as s}from"./classnames@2.5.1.Xo58IrnT.js";import{R as o}from"./rc-resize-observer@1.4.0_react-dom@18.3.1_react@18.3.1.sEitUVxo.js";import{p as l,b as u,u as c}from"./rc-util@5.43.0_react-dom@18.3.1_react@18.3.1.bvtOFkwB.js";import{r as m}from"./react-dom@18.3.1_react@18.3.1.D2tCNtKO.js";var f=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],d=void 0;function v(n,i){var l=n.prefixCls,u=n.invalidate,c=n.item,m=n.renderItem,v=n.responsive,p=n.responsiveDisabled,y=n.registerSize,h=n.itemKey,b=n.className,E=n.style,g=n.children,N=n.display,R=n.order,C=n.component,x=void 0===C?"div":C,I=e(n,f),w=v&&!N;function S(e){y(h,e)}a.useEffect((function(){return function(){S(null)}}),[]);var M,_=m&&c!==d?m(c):g;u||(M={opacity:w?0:1,height:w?0:d,overflowY:w?"hidden":d,order:v?R:d,pointerEvents:w?"none":d,position:w?"absolute":d});var z={};w&&(z["aria-hidden"]=!0);var j=a.createElement(x,r({className:s(!u&&l,b),style:t(t({},M),E)},z,I,{ref:i}),_);return v&&(j=a.createElement(o,{onResize:function(e){S(e.offsetWidth)},disabled:p},j)),j}var p=a.forwardRef(v);function y(){var e=a.useRef(null);return function(r){e.current||(e.current=[],function(e){if("undefined"==typeof MessageChannel)l(e);else{var r=new MessageChannel;r.port1.onmessage=function(){return e()},r.port2.postMessage(void 0)}}((function(){m.unstable_batchedUpdates((function(){e.current.forEach((function(e){e()})),e.current=null}))}))),e.current.push(r)}}function h(e,r){var t=a.useState(r),i=n(t,2),s=i[0],o=i[1];return[s,u((function(r){e((function(){o(r)}))}))]}p.displayName="Item";var b=i.createContext(null),E=["component"],g=["className"],N=["className"],R=function(t,n){var i=a.useContext(b);if(!i){var o=t.component,l=void 0===o?"div":o,u=e(t,E);return a.createElement(l,r({},u,{ref:n}))}var c=i.className,m=e(i,g),f=t.className,d=e(t,N);return a.createElement(b.Provider,{value:null},a.createElement(p,r({ref:n,className:s(c,f)},m,d)))},C=a.forwardRef(R);C.displayName="RawItem";var x=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],I="responsive",w="invalidate";function S(e){return"+ ".concat(e.length," ...")}function M(i,l){var u=i.prefixCls,m=void 0===u?"rc-overflow":u,f=i.data,d=void 0===f?[]:f,v=i.renderItem,E=i.renderRawItem,g=i.itemKey,N=i.itemWidth,R=void 0===N?10:N,C=i.ssr,M=i.style,_=i.className,z=i.maxCount,j=i.renderRest,k=i.renderRawRest,A=i.suffix,K=i.component,D=void 0===K?"div":K,P=i.itemComponent,V=i.onVisibleChange,W=e(i,x),F="full"===C,T=y(),G=h(T,null),O=n(G,2),X=O[0],L=O[1],U=X||0,Y=h(T,new Map),q=n(Y,2),B=q[0],H=q[1],J=h(T,0),Q=n(J,2),Z=Q[0],$=Q[1],ee=h(T,0),re=n(ee,2),te=re[0],ne=re[1],ae=h(T,0),ie=n(ae,2),se=ie[0],oe=ie[1],le=a.useState(null),ue=n(le,2),ce=ue[0],me=ue[1],fe=a.useState(null),de=n(fe,2),ve=de[0],pe=de[1],ye=a.useMemo((function(){return null===ve&&F?Number.MAX_SAFE_INTEGER:ve||0}),[ve,X]),he=a.useState(!1),be=n(he,2),Ee=be[0],ge=be[1],Ne="".concat(m,"-item"),Re=Math.max(Z,te),Ce=z===I,xe=d.length&&Ce,Ie=z===w,we=xe||"number"==typeof z&&d.length>z,Se=a.useMemo((function(){var e=d;return xe?e=null===X&&F?d:d.slice(0,Math.min(d.length,U/R)):"number"==typeof z&&(e=d.slice(0,z)),e}),[d,R,X,z,xe]),Me=a.useMemo((function(){return xe?d.slice(ye+1):d.slice(Se.length)}),[d,Se,xe,ye]),_e=a.useCallback((function(e,r){var t;return"function"==typeof g?g(e):null!==(t=g&&(null==e?void 0:e[g]))&&void 0!==t?t:r}),[g]),ze=a.useCallback(v||function(e){return e},[v]);function je(e,r,t){(ve!==e||void 0!==r&&r!==ce)&&(pe(e),t||(ge(e<d.length-1),null==V||V(e)),void 0!==r&&me(r))}function ke(e,r){H((function(t){var n=new Map(t);return null===r?n.delete(e):n.set(e,r),n}))}function Ae(e){return B.get(_e(Se[e],e))}c((function(){if(U&&"number"==typeof Re&&Se){var e=se,r=Se.length,t=r-1;if(!r)return void je(0,null);for(var n=0;n<r;n+=1){var a=Ae(n);if(F&&(a=a||0),void 0===a){je(n-1,void 0,!0);break}if(e+=a,0===t&&e<=U||n===t-1&&e+Ae(t)<=U){je(t,null);break}if(e+Re>U){je(n-1,e-a-se+te);break}}A&&Ae(0)+se>U&&me(null)}}),[U,B,te,se,_e,Se]);var Ke=Ee&&!!Me.length,De={};null!==ce&&xe&&(De={position:"absolute",left:ce,top:0});var Pe,Ve={prefixCls:Ne,responsive:xe,component:P,invalidate:Ie},We=E?function(e,r){var n=_e(e,r);return a.createElement(b.Provider,{key:n,value:t(t({},Ve),{},{order:r,item:e,itemKey:n,registerSize:ke,display:r<=ye})},E(e,r))}:function(e,t){var n=_e(e,t);return a.createElement(p,r({},Ve,{order:t,key:n,item:e,renderItem:ze,itemKey:n,registerSize:ke,display:t<=ye}))},Fe={order:Ke?ye:Number.MAX_SAFE_INTEGER,className:"".concat(Ne,"-rest"),registerSize:function(e,r){ne(r),$(te)},display:Ke};if(k)k&&(Pe=a.createElement(b.Provider,{value:t(t({},Ve),Fe)},k(Me)));else{var Te=j||S;Pe=a.createElement(p,r({},Ve,Fe),"function"==typeof Te?Te(Me):Te)}var Ge=a.createElement(D,r({className:s(!Ie&&m,_),style:M,ref:l},W),Se.map(We),we?Pe:null,A&&a.createElement(p,r({},Ve,{responsive:Ce,responsiveDisabled:!xe,order:ye,className:"".concat(Ne,"-suffix"),registerSize:function(e,r){oe(r)},display:!0,style:De}),A));return Ce&&(Ge=a.createElement(o,{onResize:function(e,r){L(r.clientWidth)},disabled:!xe},Ge)),Ge}var _=a.forwardRef(M);_.displayName="Overflow",_.Item=C,_.RESPONSIVE=I,_.INVALIDATE=w;export{_ as F};
