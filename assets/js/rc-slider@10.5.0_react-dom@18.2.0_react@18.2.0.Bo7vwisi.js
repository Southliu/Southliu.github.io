import{c as e,h as t,b as n,d as r,e as a,g as u,f as o}from"./@babel_runtime@7.24.4.BmQrySDS.js";import{c as l}from"./classnames@2.5.1.C42auVll.js";import{K as c,B as i,d as s,i as f}from"./rc-util@5.39.1_react-dom@18.2.0_react@18.2.0.BMjVa3px.js";import{r as d}from"./react@18.2.0.BNo5BOs9.js";var v=d.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0,keyboard:!0,styles:{},classNames:{}});function m(e,t,n){return(e-t)/(n-t)}function h(e,t,n,r){var a=m(t,n,r),u={};switch(e){case"rtl":u.right="".concat(100*a,"%"),u.transform="translateX(50%)";break;case"btt":u.bottom="".concat(100*a,"%"),u.transform="translateY(50%)";break;case"ttb":u.top="".concat(100*a,"%"),u.transform="translateY(-50%)";break;default:u.left="".concat(100*a,"%"),u.transform="translateX(-50%)"}return u}function g(e,t){return Array.isArray(e)?e[t]:e}var p=["prefixCls","value","valueIndex","onStartMove","style","render","dragging","onOffsetChange","onChangeComplete"],b=d.forwardRef((function(a,u){var o,i,s=a.prefixCls,f=a.value,m=a.valueIndex,b=a.onStartMove,y=a.style,x=a.render,C=a.dragging,E=a.onOffsetChange,k=a.onChangeComplete,M=e(a,p),S=d.useContext(v),w=S.min,F=S.max,N=S.direction,L=S.disabled,R=S.keyboard,D=S.range,I=S.tabIndex,H=S.ariaLabelForHandle,O=S.ariaLabelledByForHandle,P=S.ariaValueTextFormatterForHandle,A=S.styles,T=S.classNames,B="".concat(s,"-handle"),X=function(e){L||b(e,m)},Y=h(N,f,w,F),_=d.createElement("div",t({ref:u,className:l(B,(o={},n(o,"".concat(B,"-").concat(m+1),D),n(o,"".concat(B,"-dragging"),C),o),T.handle),style:r(r(r({},Y),y),A.handle),onMouseDown:X,onTouchStart:X,onKeyDown:function(e){if(!L&&R){var t=null;switch(e.which||e.keyCode){case c.LEFT:t="ltr"===N||"btt"===N?-1:1;break;case c.RIGHT:t="ltr"===N||"btt"===N?1:-1;break;case c.UP:t="ttb"!==N?1:-1;break;case c.DOWN:t="ttb"!==N?-1:1;break;case c.HOME:t="min";break;case c.END:t="max";break;case c.PAGE_UP:t=2;break;case c.PAGE_DOWN:t=-2}null!==t&&(e.preventDefault(),E(t,m))}},onKeyUp:function(e){switch(e.which||e.keyCode){case c.LEFT:case c.RIGHT:case c.UP:case c.DOWN:case c.HOME:case c.END:case c.PAGE_UP:case c.PAGE_DOWN:null==k||k()}},tabIndex:L?null:g(I,m),role:"slider","aria-valuemin":w,"aria-valuemax":F,"aria-valuenow":f,"aria-disabled":L,"aria-label":g(H,m),"aria-labelledby":g(O,m),"aria-valuetext":null===(i=g(P,m))||void 0===i?void 0:i(f),"aria-orientation":"ltr"===N||"rtl"===N?"horizontal":"vertical"},M));return x&&(_=x(_,{index:m,prefixCls:s,value:f,dragging:C})),_})),y=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","draggingIndex"],x=d.forwardRef((function(n,r){var a=n.prefixCls,u=n.style,o=n.onStartMove,l=n.onOffsetChange,c=n.values,i=n.handleRender,s=n.draggingIndex,f=e(n,y),v=d.useRef({});return d.useImperativeHandle(r,(function(){return{focus:function(e){var t;null===(t=v.current[e])||void 0===t||t.focus()}}})),d.createElement(d.Fragment,null,c.map((function(e,n){return d.createElement(b,t({ref:function(e){e?v.current[n]=e:delete v.current[n]},dragging:s===n,prefixCls:a,style:g(u,n),key:n,value:e,valueIndex:n,onStartMove:o,onOffsetChange:l,render:i},f))})))}));function C(e){var t="touches"in e?e.touches[0]:e;return{pageX:t.pageX,pageY:t.pageY}}function E(e){var t=e.prefixCls,a=e.style,u=e.children,o=e.value,c=e.onClick,i=d.useContext(v),s=i.min,f=i.max,m=i.direction,g=i.includedStart,p=i.includedEnd,b=i.included,y="".concat(t,"-text"),x=h(m,o,s,f);return d.createElement("span",{className:l(y,n({},"".concat(y,"-active"),b&&g<=o&&o<=p)),style:r(r({},x),a),onMouseDown:function(e){e.stopPropagation()},onClick:function(){c(o)}},u)}function k(e){var t=e.prefixCls,n=e.marks,r=e.onClick,a="".concat(t,"-mark");return n.length?d.createElement("div",{className:a},n.map((function(e){var t=e.value,n=e.style,u=e.label;return d.createElement(E,{key:t,prefixCls:a,style:n,value:t,onClick:r},u)}))):null}function M(e){var t=e.prefixCls,a=e.value,u=e.style,o=e.activeStyle,c=d.useContext(v),i=c.min,s=c.max,f=c.direction,m=c.included,g=c.includedStart,p=c.includedEnd,b="".concat(t,"-dot"),y=m&&g<=a&&a<=p,x=r(r({},h(f,a,i,s)),"function"==typeof u?u(a):u);return y&&(x=r(r({},x),"function"==typeof o?o(a):o)),d.createElement("span",{className:l(b,n({},"".concat(b,"-active"),y)),style:x})}function S(e){var t=e.prefixCls,n=e.marks,r=e.dots,a=e.style,u=e.activeStyle,o=d.useContext(v),l=o.min,c=o.max,i=o.step,s=d.useMemo((function(){var e=new Set;if(n.forEach((function(t){e.add(t.value)})),r&&null!==i)for(var t=l;t<=c;)e.add(t),t+=i;return Array.from(e)}),[l,c,i,r,n]);return d.createElement("div",{className:"".concat(t,"-step")},s.map((function(e){return d.createElement(M,{prefixCls:t,key:e,value:e,style:a,activeStyle:u})})))}function w(e){var t,a=e.prefixCls,u=e.style,o=e.start,c=e.end,i=e.index,s=e.onStartMove,f=e.replaceCls,h=d.useContext(v),g=h.direction,p=h.min,b=h.max,y=h.disabled,x=h.range,C=h.classNames,E="".concat(a,"-track"),k=m(o,p,b),M=m(c,p,b),S=function(e){!y&&s&&s(e,-1)},w={};switch(g){case"rtl":w.right="".concat(100*k,"%"),w.width="".concat(100*M-100*k,"%");break;case"btt":w.bottom="".concat(100*k,"%"),w.height="".concat(100*M-100*k,"%");break;case"ttb":w.top="".concat(100*k,"%"),w.height="".concat(100*M-100*k,"%");break;default:w.left="".concat(100*k,"%"),w.width="".concat(100*M-100*k,"%")}var F=f||l(E,(n(t={},"".concat(E,"-").concat(i+1),null!==i&&x),n(t,"".concat(a,"-track-draggable"),s),t),C.track);return d.createElement("div",{className:F,style:r(r({},w),u),onMouseDown:S,onTouchStart:S})}function F(e){var t=e.prefixCls,n=e.style,a=e.values,u=e.startPoint,o=e.onStartMove,c=d.useContext(v),i=c.included,s=c.range,f=c.min,m=c.styles,h=c.classNames,p=d.useMemo((function(){if(!s){if(0===a.length)return[];var e=null!=u?u:f,t=a[0];return[{start:Math.min(e,t),end:Math.max(e,t)}]}for(var n=[],r=0;r<a.length-1;r+=1)n.push({start:a[r],end:a[r+1]});return n}),[a,s,u,f]),b=null;return(h.tracks||m.tracks)&&(b=d.createElement(w,{index:null,prefixCls:t,start:p[0].start,end:p[p.length-1].end,replaceCls:l(h.tracks,"".concat(t,"-tracks")),style:m.tracks})),i?d.createElement(d.Fragment,null,b,p.map((function(e,a){var u=e.start,l=e.end;return d.createElement(w,{index:a,prefixCls:t,style:r(r({},g(n,a)),m.track),start:u,end:l,key:a,onStartMove:o})}))):null}var N=d.forwardRef((function(e,t){var c,m=e.prefixCls,h=void 0===m?"rc-slider":m,g=e.className,p=e.style,b=e.classNames,y=e.styles,E=e.disabled,M=void 0!==E&&E,w=e.keyboard,N=void 0===w||w,L=e.autoFocus,R=e.onFocus,D=e.onBlur,I=e.min,H=void 0===I?0:I,O=e.max,P=void 0===O?100:O,A=e.step,T=void 0===A?1:A,B=e.value,X=e.defaultValue,Y=e.range,_=e.count,j=e.onChange,G=e.onBeforeChange,U=e.onAfterChange,V=e.onChangeComplete,W=e.allowCross,K=void 0===W||W,z=e.pushable,q=void 0!==z&&z,J=e.draggableTrack,Q=e.reverse,Z=e.vertical,$=e.included,ee=void 0===$||$,te=e.startPoint,ne=e.trackStyle,re=e.handleStyle,ae=e.railStyle,ue=e.dotStyle,oe=e.activeDotStyle,le=e.marks,ce=e.dots,ie=e.handleRender,se=e.tabIndex,fe=void 0===se?0:se,de=e.ariaLabelForHandle,ve=e.ariaLabelledByForHandle,me=e.ariaValueTextFormatterForHandle,he=d.useRef(),ge=d.useRef(),pe=d.useMemo((function(){return Z?Q?"ttb":"btt":Q?"rtl":"ltr"}),[Q,Z]),be=d.useMemo((function(){return isFinite(H)?H:0}),[H]),ye=d.useMemo((function(){return isFinite(P)?P:100}),[P]),xe=d.useMemo((function(){return null!==T&&T<=0?1:T}),[T]),Ce=d.useMemo((function(){return"boolean"==typeof q?!!q&&xe:q>=0&&q}),[q,xe]),Ee=d.useMemo((function(){return Object.keys(le||{}).map((function(e){var t=le[e],n={value:Number(e)};return t&&"object"===o(t)&&!d.isValidElement(t)&&("label"in t||"style"in t)?(n.style=t.style,n.label=t.label):n.label=t,n})).filter((function(e){var t=e.label;return t||"number"==typeof t})).sort((function(e,t){return e.value-t.value}))}),[le]),ke=function(e,t,n,r,a,o){var l=d.useCallback((function(n){var r=isFinite(n)?n:e;return r=Math.min(t,n),Math.max(e,r)}),[e,t]),c=d.useCallback((function(r){if(null!==n){var a=e+Math.round((l(r)-e)/n)*n,u=function(e){return(String(e).split(".")[1]||"").length},o=Math.max(u(n),u(t),u(e)),c=Number(a.toFixed(o));return e<=c&&c<=t?c:null}return null}),[n,e,t,l]),i=d.useCallback((function(a){var u=l(a),o=r.map((function(e){return e.value}));null!==n&&o.push(c(a)),o.push(e,t);var i=o[0],s=t-e;return o.forEach((function(e){var t=Math.abs(u-e);t<=s&&(i=e,s=t)})),i}),[e,t,r,n,l,c]),s=function a(o,l,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit";if("number"==typeof l){var f,d=o[i],v=d+l,m=[];r.forEach((function(e){m.push(e.value)})),m.push(e,t),m.push(c(d));var h=l>0?1:-1;"unit"===s?m.push(c(d+h*n)):m.push(c(v)),m=m.filter((function(e){return null!==e})).filter((function(e){return l<0?e<=d:e>=d})),"unit"===s&&(m=m.filter((function(e){return e!==d})));var g="unit"===s?d:v;f=m[0];var p=Math.abs(f-g);if(m.forEach((function(e){var t=Math.abs(e-g);t<p&&(f=e,p=t)})),void 0===f)return l<0?e:t;if("dist"===s)return f;if(Math.abs(l)>1){var b=u(o);return b[i]=f,a(b,l-h,i,s)}return f}return"min"===l?e:"max"===l?t:void 0},f=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",a=e[n],u=s(e,t,n,r);return{value:u,changed:u!==a}},v=function(e){return null===o&&0===e||"number"==typeof o&&e<o};return[i,function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",u=e.map(i),l=u[n],c=s(u,t,n,r);if(u[n]=c,!1===a){var d=o||0;n>0&&u[n-1]!==l&&(u[n]=Math.max(u[n],u[n-1]+d)),n<u.length-1&&u[n+1]!==l&&(u[n]=Math.min(u[n],u[n+1]-d))}else if("number"==typeof o||null===o){for(var m=n+1;m<u.length;m+=1)for(var h=!0;v(u[m]-u[m-1])&&h;){var g=f(u,1,m);u[m]=g.value,h=g.changed}for(var p=n;p>0;p-=1)for(var b=!0;v(u[p]-u[p-1])&&b;){var y=f(u,-1,p-1);u[p-1]=y.value,b=y.changed}for(var x=u.length-1;x>0;x-=1)for(var C=!0;v(u[x]-u[x-1])&&C;){var E=f(u,-1,x-1);u[x-1]=E.value,C=E.changed}for(var k=0;k<u.length-1;k+=1)for(var M=!0;v(u[k+1]-u[k])&&M;){var S=f(u,1,k+1);u[k+1]=S.value,M=S.changed}}return{value:u[n],values:u}}]}(be,ye,xe,Ee,K,Ce),Me=a(ke,2),Se=Me[0],we=Me[1],Fe=i(X,{value:B}),Ne=a(Fe,2),Le=Ne[0],Re=Ne[1],De=d.useMemo((function(){var e=null==Le?[]:Array.isArray(Le)?Le:[Le],t=a(e,1)[0],n=null===Le?[]:[void 0===t?be:t];if(Y){if(n=u(e),_||void 0===Le){var r=_>=0?_+1:2;for(n=n.slice(0,r);n.length<r;){var o;n.push(null!==(o=n[n.length-1])&&void 0!==o?o:be)}}n.sort((function(e,t){return e-t}))}return n.forEach((function(e,t){n[t]=Se(e)})),n}),[Le,Y,be,_,Se]),Ie=d.useRef(De);Ie.current=De;var He=function(e){return Y?e:e[0]},Oe=function(e){var t=u(e).sort((function(e,t){return e-t}));j&&!f(t,Ie.current,!0)&&j(He(t)),Re(t)},Pe=function(){null==U||U(He(Ie.current)),s(!U,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),null==V||V(He(Ie.current))},Ae=function(e,t,n,r,o,l,c,i,s){var f=d.useState(null),v=a(f,2),m=v[0],h=v[1],g=d.useState(-1),p=a(g,2),b=p[0],y=p[1],x=d.useState(n),E=a(x,2),k=E[0],M=E[1],S=d.useState(n),w=a(S,2),F=w[0],N=w[1],L=d.useRef(null),R=d.useRef(null);d.useEffect((function(){-1===b&&M(n)}),[n,b]),d.useEffect((function(){return function(){document.removeEventListener("mousemove",L.current),document.removeEventListener("mouseup",R.current),document.removeEventListener("touchmove",L.current),document.removeEventListener("touchend",R.current)}}),[]);var D=function(e,t){k.some((function(t,n){return t!==e[n]}))&&(void 0!==t&&h(t),M(e),c(e))},I=function(e,t){if(-1===e){var n=F[0],a=F[F.length-1],c=r-n,i=o-a,f=t*(o-r);f=Math.max(f,c),f=Math.min(f,i);var d=l(n+f);f=d-n;var v=F.map((function(e){return e+f}));D(v)}else{var m=(o-r)*t,h=u(k);h[e]=F[e];var g=s(h,m,e,"dist");D(g.values,g.value)}},H=d.useRef(I);H.current=I;var O=d.useMemo((function(){var e=u(n).sort((function(e,t){return e-t})),t=u(k).sort((function(e,t){return e-t}));return e.every((function(e,n){return e===t[n]}))?k:n}),[n,k]);return[b,m,O,function(r,a,u){r.stopPropagation();var o=u||n,l=o[a];y(a),h(l),N(o);var c=C(r),s=c.pageX,f=c.pageY,d=function(n){n.preventDefault();var r,u=C(n),o=u.pageX,l=u.pageY,c=o-s,i=l-f,d=e.current.getBoundingClientRect(),v=d.width,m=d.height;switch(t){case"btt":r=-i/m;break;case"ttb":r=i/m;break;case"rtl":r=-c/v;break;default:r=c/v}H.current(a,r)},v=function e(t){t.preventDefault(),document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",d),document.removeEventListener("touchend",e),document.removeEventListener("touchmove",d),L.current=null,R.current=null,y(-1),i()};document.addEventListener("mouseup",v),document.addEventListener("mousemove",d),document.addEventListener("touchend",v),document.addEventListener("touchmove",d),L.current=d,R.current=v}]}(ge,pe,De,be,ye,Se,Oe,Pe,we),Te=a(Ae,4),Be=Te[0],Xe=Te[1],Ye=Te[2],_e=Te[3],je=function(e,t){if(!M){var n=0,r=ye-be;De.forEach((function(t,a){var u=Math.abs(e-t);u<=r&&(r=u,n=a)}));var a=u(De);a[n]=e,Y&&!De.length&&void 0===_&&a.push(e),null==G||G(He(a)),Oe(a),t&&_e(t,n,a)}},Ge=d.useState(null),Ue=a(Ge,2),Ve=Ue[0],We=Ue[1];d.useEffect((function(){if(null!==Ve){var e=De.indexOf(Ve);e>=0&&he.current.focus(e)}We(null)}),[Ve]);var Ke=d.useMemo((function(){return(!J||null!==xe)&&J}),[J,xe]),ze=function(e,t){_e(e,t),null==G||G(He(Ie.current))},qe=-1!==Be;d.useEffect((function(){if(!qe){var e=De.lastIndexOf(Xe);he.current.focus(e)}}),[qe]);var Je=d.useMemo((function(){return u(Ye).sort((function(e,t){return e-t}))}),[Ye]),Qe=d.useMemo((function(){return Y?[Je[0],Je[Je.length-1]]:[be,Je[0]]}),[Je,Y,be]),Ze=a(Qe,2),$e=Ze[0],et=Ze[1];d.useImperativeHandle(t,(function(){return{focus:function(){he.current.focus(0)},blur:function(){var e=document.activeElement;ge.current.contains(e)&&(null==e||e.blur())}}})),d.useEffect((function(){L&&he.current.focus(0)}),[]);var tt=d.useMemo((function(){return{min:be,max:ye,direction:pe,disabled:M,keyboard:N,step:xe,included:ee,includedStart:$e,includedEnd:et,range:Y,tabIndex:fe,ariaLabelForHandle:de,ariaLabelledByForHandle:ve,ariaValueTextFormatterForHandle:me,styles:y||{},classNames:b||{}}}),[be,ye,pe,M,N,xe,ee,$e,et,Y,fe,de,ve,me,y,b]);return d.createElement(v.Provider,{value:tt},d.createElement("div",{ref:ge,className:l(h,g,(c={},n(c,"".concat(h,"-disabled"),M),n(c,"".concat(h,"-vertical"),Z),n(c,"".concat(h,"-horizontal"),!Z),n(c,"".concat(h,"-with-marks"),Ee.length),c)),style:p,onMouseDown:function(e){e.preventDefault();var t,n=ge.current.getBoundingClientRect(),r=n.width,a=n.height,u=n.left,o=n.top,l=n.bottom,c=n.right,i=e.clientX,s=e.clientY;switch(pe){case"btt":t=(l-s)/a;break;case"ttb":t=(s-o)/a;break;case"rtl":t=(c-i)/r;break;default:t=(i-u)/r}je(Se(be+t*(ye-be)),e)}},d.createElement("div",{className:l("".concat(h,"-rail"),null==b?void 0:b.rail),style:r(r({},ae),null==y?void 0:y.rail)}),d.createElement(F,{prefixCls:h,style:ne,values:Je,startPoint:te,onStartMove:Ke?ze:null}),d.createElement(S,{prefixCls:h,marks:Ee,dots:ce,style:ue,activeStyle:oe}),d.createElement(x,{ref:he,prefixCls:h,style:re,values:Ye,draggingIndex:Be,onStartMove:ze,onOffsetChange:function(e,t){if(!M){var n=we(De,e,t);null==G||G(He(De)),Oe(n.values),We(n.value)}},onFocus:R,onBlur:D,handleRender:ie,onChangeComplete:Pe}),d.createElement(k,{prefixCls:h,marks:Ee,onClick:je})))}));export{N as S};