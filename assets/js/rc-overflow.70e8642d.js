import{c as k,h as E,d as z,f as R}from"./@babel_runtime.76b3ae3f.js";import{r as a}from"./react.4fb287ef.js";import{c as se}from"./classnames.2e4736b8.js";import{R as Ie}from"./rc-resize-observer.07dcc288.js";import{p as Ye,h as ge,e as qe}from"./rc-util.8c303982.js";var Je=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],p=void 0;function Qe(e,f){var v=e.prefixCls,s=e.invalidate,o=e.item,n=e.renderItem,u=e.responsive,h=e.responsiveDisabled,l=e.registerSize,_=e.itemKey,N=e.className,C=e.style,H=e.children,Y=e.display,c=e.order,K=e.component,P=K===void 0?"div":K,U=k(e,Je),m=u&&!Y;function M(x){l(_,x)}a.useEffect(function(){return function(){M(null)}},[]);var q=n&&o!==p?n(o):H,w;s||(w={opacity:m?0:1,height:m?0:p,overflowY:m?"hidden":p,order:u?c:p,pointerEvents:m?"none":p,position:m?"absolute":p});var O={};m&&(O["aria-hidden"]=!0);var S=a.createElement(P,E({className:se(!s&&v,N),style:z(z({},w),C)},O,U,{ref:f}),q);return u&&(S=a.createElement(Ie,{onResize:function(J){var F=J.offsetWidth;M(F)},disabled:h},S)),S}var A=a.forwardRef(Qe);A.displayName="Item";function Ze(){var e=Ye({}),f=R(e,2),v=f[1],s=a.useRef([]),o=0,n=0;function u(h){var l=o;o+=1,s.current.length<l+1&&(s.current[l]=h);var _=s.current[l];function N(C){s.current[l]=typeof C=="function"?C(s.current[l]):C,ge.cancel(n),n=ge(function(){v({},!0)})}return[_,N]}return u}var et=["component"],tt=["className"],rt=["className"],at=function(f,v){var s=a.useContext(X);if(!s){var o=f.component,n=o===void 0?"div":o,u=k(f,et);return a.createElement(n,E({},u,{ref:v}))}var h=s.className,l=k(s,tt),_=f.className,N=k(f,rt);return a.createElement(X.Provider,{value:null},a.createElement(A,E({ref:v,className:se(h,_)},l,N)))},Ee=a.forwardRef(at);Ee.displayName="RawItem";var nt=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],X=a.createContext(null),we="responsive",xe="invalidate";function it(e){return"+ ".concat(e.length," ...")}function st(e,f){var v=e.prefixCls,s=v===void 0?"rc-overflow":v,o=e.data,n=o===void 0?[]:o,u=e.renderItem,h=e.renderRawItem,l=e.itemKey,_=e.itemWidth,N=_===void 0?10:_,C=e.ssr,H=e.style,Y=e.className,c=e.maxCount,K=e.renderRest,P=e.renderRawRest,U=e.suffix,m=e.component,M=m===void 0?"div":m,q=e.itemComponent,w=e.onVisibleChange,O=k(e,nt),S=Ze(),x=C==="full",J=S(null),F=R(J,2),$=F[0],be=F[1],g=$||0,pe=S(new Map),le=R(pe,2),oe=le[0],ze=le[1],Pe=S(0),fe=R(Pe,2),Ue=fe[0],We=fe[1],De=S(0),ue=R(De,2),T=ue[0],ke=ue[1],Ae=S(0),de=R(Ae,2),V=de[0],Ke=de[1],Me=a.useState(null),ve=R(Me,2),Q=ve[0],ce=ve[1],Oe=a.useState(null),me=R(Oe,2),L=me[0],Fe=me[1],b=a.useMemo(function(){return L===null&&x?Number.MAX_SAFE_INTEGER:L||0},[L,$]),$e=a.useState(!1),Se=R($e,2),Te=Se[0],Ve=Se[1],Z="".concat(s,"-item"),ye=Math.max(Ue,T),ee=c===we,y=n.length&&ee,Re=c===xe,Le=y||typeof c=="number"&&n.length>c,I=a.useMemo(function(){var t=n;return y?$===null&&x?t=n:t=n.slice(0,Math.min(n.length,g/N)):typeof c=="number"&&(t=n.slice(0,c)),t},[n,N,$,c,y]),te=a.useMemo(function(){return y?n.slice(b+1):n.slice(I.length)},[n,I,y,b]),j=a.useCallback(function(t,r){var i;return typeof l=="function"?l(t):(i=l&&(t==null?void 0:t[l]))!==null&&i!==void 0?i:r},[l]),je=a.useCallback(u||function(t){return t},[u]);function G(t,r,i){L===t&&(r===void 0||r===Q)||(Fe(t),i||(Ve(t<n.length-1),w==null||w(t)),r!==void 0&&ce(r))}function Ge(t,r){be(r.clientWidth)}function he(t,r){ze(function(i){var d=new Map(i);return r===null?d.delete(t):d.set(t,r),d})}function Xe(t,r){ke(r),We(T)}function Be(t,r){Ke(r)}function re(t){return oe.get(j(I[t],t))}qe(function(){if(g&&ye&&I){var t=V,r=I.length,i=r-1;if(!r){G(0,null);return}for(var d=0;d<r;d+=1){var D=re(d);if(x&&(D=D||0),D===void 0){G(d-1,void 0,!0);break}if(t+=D,i===0&&t<=g||d===i-1&&t+re(i)<=g){G(i,null);break}else if(t+ye>g){G(d-1,t-D-V+T);break}}U&&re(0)+V>g&&ce(null)}},[g,oe,T,V,j,I]);var _e=Te&&!!te.length,Ne={};Q!==null&&y&&(Ne={position:"absolute",left:Q,top:0});var W={prefixCls:Z,responsive:y,component:q,invalidate:Re},He=h?function(t,r){var i=j(t,r);return a.createElement(X.Provider,{key:i,value:z(z({},W),{},{order:r,item:t,itemKey:i,registerSize:he,display:r<=b})},h(t,r))}:function(t,r){var i=j(t,r);return a.createElement(A,E({},W,{order:r,key:i,item:t,renderItem:je,itemKey:i,registerSize:he,display:r<=b}))},ae,Ce={order:_e?b:Number.MAX_SAFE_INTEGER,className:"".concat(Z,"-rest"),registerSize:Xe,display:_e};if(P)P&&(ae=a.createElement(X.Provider,{value:z(z({},W),Ce)},P(te)));else{var ne=K||it;ae=a.createElement(A,E({},W,Ce),typeof ne=="function"?ne(te):ne)}var ie=a.createElement(M,E({className:se(!Re&&s,Y),style:H,ref:f},O),I.map(He),Le?ae:null,U&&a.createElement(A,E({},W,{responsive:ee,responsiveDisabled:!y,order:b,className:"".concat(Z,"-suffix"),registerSize:Be,display:!0,style:Ne}),U));return ee&&(ie=a.createElement(Ie,{onResize:Ge,disabled:!y},ie)),ie}var B=a.forwardRef(st);B.displayName="Overflow";B.Item=Ee;B.RESPONSIVE=we;B.INVALIDATE=xe;export{B as F};