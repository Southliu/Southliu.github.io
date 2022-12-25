import{g as We,h as qe,f as te,e as G,c as I,b as re,d as ct}from"./@babel_runtime.0b96ec9f.js";import{r as t}from"./react.017637b6.js";import{c as Me}from"./classnames.96a48171.js";import{s as vt}from"./shallowequal.6a8ebf1c.js";import{K as ee,h as dt}from"./rc-util.88348ebb.js";var ce=t.exports.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0});function _e(e,s,a){return(e-s)/(a-s)}function De(e,s,a,f){var u=_e(s,a,f),l={};switch(e){case"rtl":l.right="".concat(u*100,"%"),l.transform="translateX(50%)";break;case"btt":l.bottom="".concat(u*100,"%"),l.transform="translateY(50%)";break;case"ttb":l.top="".concat(u*100,"%"),l.transform="translateY(-50%)";break;default:l.left="".concat(u*100,"%"),l.transform="translateX(-50%)";break}return l}function ge(e,s){return Array.isArray(e)?e[s]:e}var ft=["prefixCls","value","valueIndex","onStartMove","style","render","dragging","onOffsetChange"],mt=t.exports.forwardRef(function(e,s){var a,f,u=e.prefixCls,l=e.value,c=e.valueIndex,x=e.onStartMove,C=e.style,M=e.render,S=e.dragging,h=e.onOffsetChange,g=We(e,ft),o=t.exports.useContext(ce),n=o.min,v=o.max,i=o.direction,m=o.disabled,r=o.range,b=o.tabIndex,L=o.ariaLabelForHandle,E=o.ariaLabelledByForHandle,O=o.ariaValueTextFormatterForHandle,k="".concat(u,"-handle"),$=function(A){m||x(A,c)},w=function(A){if(!m){var _=null;switch(A.which||A.keyCode){case ee.LEFT:_=i==="ltr"||i==="btt"?-1:1;break;case ee.RIGHT:_=i==="ltr"||i==="btt"?1:-1;break;case ee.UP:_=i!=="ttb"?1:-1;break;case ee.DOWN:_=i!=="ttb"?-1:1;break;case ee.HOME:_="min";break;case ee.END:_="max";break;case ee.PAGE_UP:_=2;break;case ee.PAGE_DOWN:_=-2;break}_!==null&&(A.preventDefault(),h(_,c))}},R=De(i,l,n,v),B=t.exports.createElement("div",qe({ref:s,className:Me(k,(a={},te(a,"".concat(k,"-").concat(c+1),r),te(a,"".concat(k,"-dragging"),S),a)),style:G(G({},R),C),onMouseDown:$,onTouchStart:$,onKeyDown:w,tabIndex:m?null:ge(b,c),role:"slider","aria-valuemin":n,"aria-valuemax":v,"aria-valuenow":l,"aria-disabled":m,"aria-label":ge(L,c),"aria-labelledby":ge(E,c),"aria-valuetext":(f=ge(O,c))===null||f===void 0?void 0:f(l)},g));return M&&(B=M(B,{index:c,prefixCls:u,value:l,dragging:S})),B}),gt=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","draggingIndex"],ht=t.exports.forwardRef(function(e,s){var a=e.prefixCls,f=e.style,u=e.onStartMove,l=e.onOffsetChange,c=e.values,x=e.handleRender,C=e.draggingIndex,M=We(e,gt),S=t.exports.useRef({});return t.exports.useImperativeHandle(s,function(){return{focus:function(g){var o;(o=S.current[g])===null||o===void 0||o.focus()}}}),t.exports.createElement(t.exports.Fragment,null,c.map(function(h,g){return t.exports.createElement(mt,qe({ref:function(n){n?S.current[g]=n:delete S.current[g]},dragging:C===g,prefixCls:a,style:ge(f,g),key:g,value:h,valueIndex:g,onStartMove:u,onOffsetChange:l,render:x},M))}))});function Ge(e){var s="touches"in e?e.touches[0]:e;return{pageX:s.pageX,pageY:s.pageY}}function xt(e,s,a,f,u,l,c,x,C){var M=t.exports.useState(null),S=I(M,2),h=S[0],g=S[1],o=t.exports.useState(-1),n=I(o,2),v=n[0],i=n[1],m=t.exports.useState(a),r=I(m,2),b=r[0],L=r[1],E=t.exports.useState(a),O=I(E,2),k=O[0],$=O[1],w=t.exports.useRef(null),R=t.exports.useRef(null);t.exports.useEffect(function(){v===-1&&L(a)},[a,v]),t.exports.useEffect(function(){return function(){document.removeEventListener("mousemove",w.current),document.removeEventListener("mouseup",R.current),document.removeEventListener("touchmove",w.current),document.removeEventListener("touchend",R.current)}},[]);var B=function(D,T){b.some(function(X,q){return X!==D[q]})&&(T!==void 0&&g(T),L(D),c(D))},N=function(D,T){if(D===-1){var X=k[0],q=k[k.length-1],he=f-X,xe=u-q,Y=T*(u-f);Y=Math.max(Y,he),Y=Math.min(Y,xe);var W=l(X+Y);Y=W-X;var ae=k.map(function(ve){return ve+Y});B(ae)}else{var z=(u-f)*T,J=re(b);J[D]=k[D];var ne=C(J,z,D,"dist");B(ne.values,ne.value)}},A=t.exports.useRef(N);A.current=N;var _=function(D,T){D.stopPropagation();var X=a[T];i(T),g(X),$(a);var q=Ge(D),he=q.pageX,xe=q.pageY,Y=function(z){z.preventDefault();var J=Ge(z),ne=J.pageX,ve=J.pageY,be=ne-he,ye=ve-xe,Q=e.current.getBoundingClientRect(),oe=Q.width,ue=Q.height,P;switch(s){case"btt":P=-ye/ue;break;case"ttb":P=ye/ue;break;case"rtl":P=-be/oe;break;default:P=be/oe}A.current(T,P)},W=function ae(z){z.preventDefault(),document.removeEventListener("mouseup",ae),document.removeEventListener("mousemove",Y),document.removeEventListener("touchend",ae),document.removeEventListener("touchmove",Y),w.current=null,R.current=null,i(-1),x()};document.addEventListener("mouseup",W),document.addEventListener("mousemove",Y),document.addEventListener("touchend",W),document.addEventListener("touchmove",Y),w.current=Y,R.current=W},j=t.exports.useMemo(function(){var K=re(a).sort(function(T,X){return T-X}),D=re(b).sort(function(T,X){return T-X});return K.every(function(T,X){return T===D[X]})?b:a},[a,b]);return[v,h,j,_]}function bt(e){var s=e.prefixCls,a=e.style,f=e.start,u=e.end,l=e.index,c=e.onStartMove,x=t.exports.useContext(ce),C=x.direction,M=x.min,S=x.max,h=x.disabled,g=x.range,o="".concat(s,"-track"),n=_e(f,M,S),v=_e(u,M,S),i=function(b){!h&&c&&c(b,-1)},m={};switch(C){case"rtl":m.right="".concat(n*100,"%"),m.width="".concat(v*100-n*100,"%");break;case"btt":m.bottom="".concat(n*100,"%"),m.height="".concat(v*100-n*100,"%");break;case"ttb":m.top="".concat(n*100,"%"),m.height="".concat(v*100-n*100,"%");break;default:m.left="".concat(n*100,"%"),m.width="".concat(v*100-n*100,"%")}return t.exports.createElement("div",{className:Me(o,g&&"".concat(o,"-").concat(l+1)),style:G(G({},m),a),onMouseDown:i,onTouchStart:i})}function yt(e){var s=e.prefixCls,a=e.style,f=e.values,u=e.startPoint,l=e.onStartMove,c=t.exports.useContext(ce),x=c.included,C=c.range,M=c.min,S=t.exports.useMemo(function(){if(!C){if(f.length===0)return[];var h=u??M,g=f[0];return[{start:Math.min(h,g),end:Math.max(h,g)}]}for(var o=[],n=0;n<f.length-1;n+=1)o.push({start:f[n],end:f[n+1]});return o},[f,C,u,M]);return x?S.map(function(h,g){var o=h.start,n=h.end;return t.exports.createElement(bt,{index:g,prefixCls:s,style:ge(a,g),start:o,end:n,key:g,onStartMove:l})}):null}function Ct(e){var s=e.prefixCls,a=e.style,f=e.children,u=e.value,l=e.onClick,c=t.exports.useContext(ce),x=c.min,C=c.max,M=c.direction,S=c.includedStart,h=c.includedEnd,g=c.included,o="".concat(s,"-text"),n=De(M,u,x,C);return t.exports.createElement("span",{className:Me(o,te({},"".concat(o,"-active"),g&&S<=u&&u<=h)),style:G(G({},n),a),onMouseDown:function(i){i.stopPropagation()},onClick:function(){l(u)}},f)}function St(e){var s=e.prefixCls,a=e.marks,f=e.onClick,u="".concat(s,"-mark");return a.length?t.exports.createElement("div",{className:u},a.map(function(l){var c=l.value,x=l.style,C=l.label;return t.exports.createElement(Ct,{key:c,prefixCls:u,style:x,value:c,onClick:f},C)})):null}function Mt(e){var s=e.prefixCls,a=e.value,f=e.style,u=e.activeStyle,l=t.exports.useContext(ce),c=l.min,x=l.max,C=l.direction,M=l.included,S=l.includedStart,h=l.includedEnd,g="".concat(s,"-dot"),o=M&&S<=a&&a<=h,n=G(G({},De(C,a,c,x)),typeof f=="function"?f(a):f);return o&&(n=G(G({},n),typeof u=="function"?u(a):u)),t.exports.createElement("span",{className:Me(g,te({},"".concat(g,"-active"),o)),style:n})}function kt(e){var s=e.prefixCls,a=e.marks,f=e.dots,u=e.style,l=e.activeStyle,c=t.exports.useContext(ce),x=c.min,C=c.max,M=c.step,S=t.exports.useMemo(function(){var h=new Set;if(a.forEach(function(o){h.add(o.value)}),f&&M!==null)for(var g=x;g<=C;)h.add(g),g+=M;return Array.from(h)},[x,C,M,f,a]);return t.exports.createElement("div",{className:"".concat(s,"-step")},S.map(function(h){return t.exports.createElement(Mt,{prefixCls:s,key:h,value:h,style:u,activeStyle:l})}))}function Et(e,s,a,f,u,l){var c=t.exports.useCallback(function(o){var n=isFinite(o)?o:e;return n=Math.min(s,o),n=Math.max(e,n),n},[e,s]),x=t.exports.useCallback(function(o){if(a!==null){var n=e+Math.round((c(o)-e)/a)*a,v=function(b){return(String(b).split(".")[1]||"").length},i=Math.max(v(a),v(s),v(e)),m=Number(n.toFixed(i));return e<=m&&m<=s?m:null}return null},[a,e,s,c]),C=t.exports.useCallback(function(o){var n=c(o),v=f.map(function(r){return r.value});a!==null&&v.push(x(o)),v.push(e,s);var i=v[0],m=s-e;return v.forEach(function(r){var b=Math.abs(n-r);b<=m&&(i=r,m=b)}),i},[e,s,f,a,c,x]),M=function o(n,v,i){var m=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit";if(typeof v=="number"){var r,b=n[i],L=b+v,E=[];f.forEach(function(R){E.push(R.value)}),E.push(e,s),E.push(x(b));var O=v>0?1:-1;m==="unit"?E.push(x(b+O*a)):E.push(x(L)),E=E.filter(function(R){return R!==null}).filter(function(R){return v<0?R<=b:R>=b}),m==="unit"&&(E=E.filter(function(R){return R!==b}));var k=m==="unit"?b:L;r=E[0];var $=Math.abs(r-k);if(E.forEach(function(R){var B=Math.abs(R-k);B<$&&(r=R,$=B)}),r===void 0)return v<0?e:s;if(m==="dist")return r;if(Math.abs(v)>1){var w=re(n);return w[i]=r,o(w,v-O,i,m)}return r}else{if(v==="min")return e;if(v==="max")return s}},S=function(n,v,i){var m=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",r=n[i],b=M(n,v,i,m);return{value:b,changed:b!==r}},h=function(n){return l===null&&n===0||typeof l=="number"&&n<l},g=function(n,v,i){var m=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",r=n.map(C),b=r[i],L=M(r,v,i,m);if(r[i]=L,u===!1){var E=l||0;i>0&&r[i-1]!==b&&(r[i]=Math.max(r[i],r[i-1]+E)),i<r.length-1&&r[i+1]!==b&&(r[i]=Math.min(r[i],r[i+1]-E))}else if(typeof l=="number"||l===null){for(var O=i+1;O<r.length;O+=1)for(var k=!0;h(r[O]-r[O-1])&&k;){var $=S(r,1,O);r[O]=$.value,k=$.changed}for(var w=i;w>0;w-=1)for(var R=!0;h(r[w]-r[w-1])&&R;){var B=S(r,-1,w-1);r[w-1]=B.value,R=B.changed}for(var N=r.length-1;N>0;N-=1)for(var A=!0;h(r[N]-r[N-1])&&A;){var _=S(r,-1,N-1);r[N-1]=_.value,A=_.changed}for(var j=0;j<r.length-1;j+=1)for(var K=!0;h(r[j+1]-r[j])&&K;){var D=S(r,1,j+1);r[j+1]=D.value,K=D.changed}}return{value:r[i],values:r}};return[C,g]}var _t=t.exports.forwardRef(function(e,s){var a,f=e.prefixCls,u=f===void 0?"rc-slider":f,l=e.className,c=e.style,x=e.disabled,C=x===void 0?!1:x,M=e.autoFocus,S=e.onFocus,h=e.onBlur,g=e.min,o=g===void 0?0:g,n=e.max,v=n===void 0?100:n,i=e.step,m=i===void 0?1:i,r=e.value,b=e.defaultValue,L=e.range,E=e.count,O=e.onChange,k=e.onBeforeChange,$=e.onAfterChange,w=e.allowCross,R=w===void 0?!0:w,B=e.pushable,N=B===void 0?!1:B,A=e.draggableTrack,_=e.reverse,j=e.vertical,K=e.included,D=K===void 0?!0:K,T=e.startPoint,X=e.trackStyle,q=e.handleStyle,he=e.railStyle,xe=e.dotStyle,Y=e.activeDotStyle,W=e.marks,ae=e.dots,z=e.handleRender,J=e.tabIndex,ne=J===void 0?0:J,ve=e.ariaLabelForHandle,be=e.ariaLabelledByForHandle,ye=e.ariaValueTextFormatterForHandle,Q=t.exports.useRef(),oe=t.exports.useRef(),ue=t.exports.useMemo(function(){return j?_?"ttb":"btt":_?"rtl":"ltr"},[_,j]),P=t.exports.useMemo(function(){return isFinite(o)?o:0},[o]),de=t.exports.useMemo(function(){return isFinite(v)?v:100},[v]),ie=t.exports.useMemo(function(){return m!==null&&m<=0?1:m},[m]),ze=t.exports.useMemo(function(){return N===!0?ie:N>=0?N:!1},[N,ie]),ke=t.exports.useMemo(function(){var F=Object.keys(W||{});return F.map(function(y){var d=W[y],H={value:Number(y)};return d&&ct(d)==="object"&&!t.exports.isValidElement(d)&&("label"in d||"style"in d)?(H.style=d.style,H.label=d.label):H.label=d,H}).filter(function(y){var d=y.label;return d||typeof d=="number"}).sort(function(y,d){return y.value-d.value})},[W]),Je=Et(P,de,ie,ke,R,ze),Le=I(Je,2),Ee=Le[0],Pe=Le[1],Qe=dt(b,{value:r}),He=I(Qe,2),V=He[0],Ve=He[1],U=t.exports.useMemo(function(){var F=V==null?[]:Array.isArray(V)?V:[V],y=I(F,1),d=y[0],H=d===void 0?P:d,p=V===null?[]:[H];if(L){if(p=re(F),E||V===void 0){var me=E>=0?E+1:2;for(p=p.slice(0,me);p.length<me;){var se;p.push((se=p[p.length-1])!==null&&se!==void 0?se:P)}}p.sort(function(Z,Ce){return Z-Ce})}return p.forEach(function(Z,Ce){p[Ce]=Ee(Z)}),p},[V,L,P,E,Ee]),Re=t.exports.useRef(U);Re.current=U;var le=function(y){return L?y:y[0]},$e=function(y){var d=re(y).sort(function(H,p){return H-p});O&&!vt(d,Re.current)&&O(le(d)),Ve(d)},Oe=function(y){if(!C){var d=0,H=de-P;U.forEach(function(me,se){var Z=Math.abs(y-me);Z<=H&&(H=Z,d=se)});var p=re(U);p[d]=y,L&&!U.length&&E===void 0&&p.push(y),k==null||k(le(p)),$e(p),$==null||$(le(p))}},Ze=function(y){y.preventDefault();var d=oe.current.getBoundingClientRect(),H=d.width,p=d.height,me=d.left,se=d.top,Z=d.bottom,Ce=d.right,Ue=y.clientX,Ie=y.clientY,Se;switch(ue){case"btt":Se=(Z-Ie)/p;break;case"ttb":Se=(Ie-se)/p;break;case"rtl":Se=(Ce-Ue)/H;break;default:Se=(Ue-me)/H}var st=P+Se*(de-P);Oe(Ee(st))},et=t.exports.useState(null),Te=I(et,2),Fe=Te[0],Ne=Te[1],tt=function(y,d){if(!C){var H=Pe(U,y,d);k==null||k(le(U)),$e(H.values),$==null||$(le(H.values)),Ne(H.value)}};t.exports.useEffect(function(){if(Fe!==null){var F=U.indexOf(Fe);F>=0&&Q.current.focus(F)}Ne(null)},[Fe]);var rt=t.exports.useMemo(function(){return A&&ie===null?!1:A},[A,ie]),at=function(){$==null||$(le(Re.current))},nt=xt(oe,ue,U,P,de,Ee,$e,at,Pe),pe=I(nt,4),Be=pe[0],ot=pe[1],we=pe[2],ut=pe[3],Ae=function(y,d){ut(y,d),k==null||k(le(Re.current))},Xe=Be!==-1;t.exports.useEffect(function(){if(!Xe){var F=U.lastIndexOf(ot);Q.current.focus(F)}},[Xe]);var fe=t.exports.useMemo(function(){return re(we).sort(function(F,y){return F-y})},[we]),it=t.exports.useMemo(function(){return L?[fe[0],fe[fe.length-1]]:[P,fe[0]]},[fe,L,P]),Ye=I(it,2),je=Ye[0],Ke=Ye[1];t.exports.useImperativeHandle(s,function(){return{focus:function(){Q.current.focus(0)},blur:function(){var y=document,d=y.activeElement;oe.current.contains(d)&&(d==null||d.blur())}}}),t.exports.useEffect(function(){M&&Q.current.focus(0)},[]);var lt=t.exports.useMemo(function(){return{min:P,max:de,direction:ue,disabled:C,step:ie,included:D,includedStart:je,includedEnd:Ke,range:L,tabIndex:ne,ariaLabelForHandle:ve,ariaLabelledByForHandle:be,ariaValueTextFormatterForHandle:ye}},[P,de,ue,C,ie,D,je,Ke,L,ne,ve,be,ye]);return t.exports.createElement(ce.Provider,{value:lt},t.exports.createElement("div",{ref:oe,className:Me(u,l,(a={},te(a,"".concat(u,"-disabled"),C),te(a,"".concat(u,"-vertical"),j),te(a,"".concat(u,"-horizontal"),!j),te(a,"".concat(u,"-with-marks"),ke.length),a)),style:c,onMouseDown:Ze},t.exports.createElement("div",{className:"".concat(u,"-rail"),style:he}),t.exports.createElement(yt,{prefixCls:u,style:X,values:fe,startPoint:T,onStartMove:rt?Ae:null}),t.exports.createElement(kt,{prefixCls:u,marks:ke,dots:ae,style:xe,activeStyle:Y}),t.exports.createElement(ht,{ref:Q,prefixCls:u,style:q,values:we,draggingIndex:Be,onStartMove:Ae,onOffsetChange:tt,onFocus:S,onBlur:h,handleRender:z}),t.exports.createElement(St,{prefixCls:u,marks:ke,onClick:Oe})))});export{_t as S};