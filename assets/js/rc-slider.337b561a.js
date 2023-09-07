import{c as e,h as t,b as n,d as r,e as a,g as u,f as o}from"./@babel_runtime.d775819b.js";import{r as l}from"./react.a7da97a2.js";import{c as i}from"./classnames.71976509.js";import{K as c,A as s,i as f}from"./rc-util.b2252098.js";var v=l.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0,keyboard:!0});function d(e,t,n){return(e-t)/(n-t)}function m(e,t,n,r){var a=d(t,n,r),u={};switch(e){case"rtl":u.right="".concat(100*a,"%"),u.transform="translateX(50%)";break;case"btt":u.bottom="".concat(100*a,"%"),u.transform="translateY(50%)";break;case"ttb":u.top="".concat(100*a,"%"),u.transform="translateY(-50%)";break;default:u.left="".concat(100*a,"%"),u.transform="translateX(-50%)"}return u}function h(e,t){return Array.isArray(e)?e[t]:e}var b=["prefixCls","value","valueIndex","onStartMove","style","render","dragging","onOffsetChange"],g=l.forwardRef((function(a,u){var o,s,f=a.prefixCls,d=a.value,g=a.valueIndex,p=a.onStartMove,x=a.style,y=a.render,E=a.dragging,k=a.onOffsetChange,C=e(a,b),M=l.useContext(v),S=M.min,w=M.max,F=M.direction,L=M.disabled,R=M.keyboard,I=M.range,N=M.tabIndex,D=M.ariaLabelForHandle,H=M.ariaLabelledByForHandle,O=M.ariaValueTextFormatterForHandle,P="".concat(f,"-handle"),A=function(e){L||p(e,g)},B=m(F,d,S,w),T=l.createElement("div",t({ref:u,className:i(P,(o={},n(o,"".concat(P,"-").concat(g+1),I),n(o,"".concat(P,"-dragging"),E),o)),style:r(r({},B),x),onMouseDown:A,onTouchStart:A,onKeyDown:function(e){if(!L&&R){var t=null;switch(e.which||e.keyCode){case c.LEFT:t="ltr"===F||"btt"===F?-1:1;break;case c.RIGHT:t="ltr"===F||"btt"===F?1:-1;break;case c.UP:t="ttb"!==F?1:-1;break;case c.DOWN:t="ttb"!==F?-1:1;break;case c.HOME:t="min";break;case c.END:t="max";break;case c.PAGE_UP:t=2;break;case c.PAGE_DOWN:t=-2}null!==t&&(e.preventDefault(),k(t,g))}},tabIndex:L?null:h(N,g),role:"slider","aria-valuemin":S,"aria-valuemax":w,"aria-valuenow":d,"aria-disabled":L,"aria-label":h(D,g),"aria-labelledby":h(H,g),"aria-valuetext":null===(s=h(O,g))||void 0===s?void 0:s(d),"aria-orientation":"ltr"===F||"rtl"===F?"horizontal":"vertical"},C));return y&&(T=y(T,{index:g,prefixCls:f,value:d,dragging:E})),T})),p=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","draggingIndex"],x=l.forwardRef((function(n,r){var a=n.prefixCls,u=n.style,o=n.onStartMove,i=n.onOffsetChange,c=n.values,s=n.handleRender,f=n.draggingIndex,v=e(n,p),d=l.useRef({});return l.useImperativeHandle(r,(function(){return{focus:function(e){var t;null===(t=d.current[e])||void 0===t||t.focus()}}})),l.createElement(l.Fragment,null,c.map((function(e,n){return l.createElement(g,t({ref:function(e){e?d.current[n]=e:delete d.current[n]},dragging:f===n,prefixCls:a,style:h(u,n),key:n,value:e,valueIndex:n,onStartMove:o,onOffsetChange:i,render:s},v))})))}));function y(e){var t="touches"in e?e.touches[0]:e;return{pageX:t.pageX,pageY:t.pageY}}function E(e){var t,a=e.prefixCls,u=e.style,o=e.start,c=e.end,s=e.index,f=e.onStartMove,m=l.useContext(v),h=m.direction,b=m.min,g=m.max,p=m.disabled,x=m.range,y="".concat(a,"-track"),E=d(o,b,g),k=d(c,b,g),C=function(e){!p&&f&&f(e,-1)},M={};switch(h){case"rtl":M.right="".concat(100*E,"%"),M.width="".concat(100*k-100*E,"%");break;case"btt":M.bottom="".concat(100*E,"%"),M.height="".concat(100*k-100*E,"%");break;case"ttb":M.top="".concat(100*E,"%"),M.height="".concat(100*k-100*E,"%");break;default:M.left="".concat(100*E,"%"),M.width="".concat(100*k-100*E,"%")}return l.createElement("div",{className:i(y,(t={},n(t,"".concat(y,"-").concat(s+1),x),n(t,"".concat(a,"-track-draggable"),f),t)),style:r(r({},M),u),onMouseDown:C,onTouchStart:C})}function k(e){var t=e.prefixCls,n=e.style,r=e.values,a=e.startPoint,u=e.onStartMove,o=l.useContext(v),i=o.included,c=o.range,s=o.min,f=l.useMemo((function(){if(!c){if(0===r.length)return[];var e=null!=a?a:s,t=r[0];return[{start:Math.min(e,t),end:Math.max(e,t)}]}for(var n=[],u=0;u<r.length-1;u+=1)n.push({start:r[u],end:r[u+1]});return n}),[r,c,a,s]);return i?f.map((function(e,r){var a=e.start,o=e.end;return l.createElement(E,{index:r,prefixCls:t,style:h(n,r),start:a,end:o,key:r,onStartMove:u})})):null}function C(e){var t=e.prefixCls,a=e.style,u=e.children,o=e.value,c=e.onClick,s=l.useContext(v),f=s.min,d=s.max,h=s.direction,b=s.includedStart,g=s.includedEnd,p=s.included,x="".concat(t,"-text"),y=m(h,o,f,d);return l.createElement("span",{className:i(x,n({},"".concat(x,"-active"),p&&b<=o&&o<=g)),style:r(r({},y),a),onMouseDown:function(e){e.stopPropagation()},onClick:function(){c(o)}},u)}function M(e){var t=e.prefixCls,n=e.marks,r=e.onClick,a="".concat(t,"-mark");return n.length?l.createElement("div",{className:a},n.map((function(e){var t=e.value,n=e.style,u=e.label;return l.createElement(C,{key:t,prefixCls:a,style:n,value:t,onClick:r},u)}))):null}function S(e){var t=e.prefixCls,a=e.value,u=e.style,o=e.activeStyle,c=l.useContext(v),s=c.min,f=c.max,d=c.direction,h=c.included,b=c.includedStart,g=c.includedEnd,p="".concat(t,"-dot"),x=h&&b<=a&&a<=g,y=r(r({},m(d,a,s,f)),"function"==typeof u?u(a):u);return x&&(y=r(r({},y),"function"==typeof o?o(a):o)),l.createElement("span",{className:i(p,n({},"".concat(p,"-active"),x)),style:y})}function w(e){var t=e.prefixCls,n=e.marks,r=e.dots,a=e.style,u=e.activeStyle,o=l.useContext(v),i=o.min,c=o.max,s=o.step,f=l.useMemo((function(){var e=new Set;if(n.forEach((function(t){e.add(t.value)})),r&&null!==s)for(var t=i;t<=c;)e.add(t),t+=s;return Array.from(e)}),[i,c,s,r,n]);return l.createElement("div",{className:"".concat(t,"-step")},f.map((function(e){return l.createElement(S,{prefixCls:t,key:e,value:e,style:a,activeStyle:u})})))}var F=l.forwardRef((function(e,t){var r,c=e.prefixCls,d=void 0===c?"rc-slider":c,m=e.className,h=e.style,b=e.disabled,g=void 0!==b&&b,p=e.keyboard,E=void 0===p||p,C=e.autoFocus,S=e.onFocus,F=e.onBlur,L=e.min,R=void 0===L?0:L,I=e.max,N=void 0===I?100:I,D=e.step,H=void 0===D?1:D,O=e.value,P=e.defaultValue,A=e.range,B=e.count,T=e.onChange,X=e.onBeforeChange,Y=e.onAfterChange,j=e.allowCross,V=void 0===j||j,G=e.pushable,_=void 0!==G&&G,z=e.draggableTrack,K=e.reverse,U=e.vertical,W=e.included,q=void 0===W||W,J=e.startPoint,Q=e.trackStyle,Z=e.handleStyle,$=e.railStyle,ee=e.dotStyle,te=e.activeDotStyle,ne=e.marks,re=e.dots,ae=e.handleRender,ue=e.tabIndex,oe=void 0===ue?0:ue,le=e.ariaLabelForHandle,ie=e.ariaLabelledByForHandle,ce=e.ariaValueTextFormatterForHandle,se=l.useRef(),fe=l.useRef(),ve=l.useMemo((function(){return U?K?"ttb":"btt":K?"rtl":"ltr"}),[K,U]),de=l.useMemo((function(){return isFinite(R)?R:0}),[R]),me=l.useMemo((function(){return isFinite(N)?N:100}),[N]),he=l.useMemo((function(){return null!==H&&H<=0?1:H}),[H]),be=l.useMemo((function(){return"boolean"==typeof _?!!_&&he:_>=0&&_}),[_,he]),ge=l.useMemo((function(){return Object.keys(ne||{}).map((function(e){var t=ne[e],n={value:Number(e)};return t&&"object"===o(t)&&!l.isValidElement(t)&&("label"in t||"style"in t)?(n.style=t.style,n.label=t.label):n.label=t,n})).filter((function(e){var t=e.label;return t||"number"==typeof t})).sort((function(e,t){return e.value-t.value}))}),[ne]),pe=function(e,t,n,r,a,o){var i=l.useCallback((function(n){var r=isFinite(n)?n:e;return r=Math.min(t,n),Math.max(e,r)}),[e,t]),c=l.useCallback((function(r){if(null!==n){var a=e+Math.round((i(r)-e)/n)*n,u=function(e){return(String(e).split(".")[1]||"").length},o=Math.max(u(n),u(t),u(e)),l=Number(a.toFixed(o));return e<=l&&l<=t?l:null}return null}),[n,e,t,i]),s=l.useCallback((function(a){var u=i(a),o=r.map((function(e){return e.value}));null!==n&&o.push(c(a)),o.push(e,t);var l=o[0],s=t-e;return o.forEach((function(e){var t=Math.abs(u-e);t<=s&&(l=e,s=t)})),l}),[e,t,r,n,i,c]),f=function a(o,l,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit";if("number"==typeof l){var f,v=o[i],d=v+l,m=[];r.forEach((function(e){m.push(e.value)})),m.push(e,t),m.push(c(v));var h=l>0?1:-1;"unit"===s?m.push(c(v+h*n)):m.push(c(d)),m=m.filter((function(e){return null!==e})).filter((function(e){return l<0?e<=v:e>=v})),"unit"===s&&(m=m.filter((function(e){return e!==v})));var b="unit"===s?v:d;f=m[0];var g=Math.abs(f-b);if(m.forEach((function(e){var t=Math.abs(e-b);t<g&&(f=e,g=t)})),void 0===f)return l<0?e:t;if("dist"===s)return f;if(Math.abs(l)>1){var p=u(o);return p[i]=f,a(p,l-h,i,s)}return f}return"min"===l?e:"max"===l?t:void 0},v=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",a=e[n],u=f(e,t,n,r);return{value:u,changed:u!==a}},d=function(e){return null===o&&0===e||"number"==typeof o&&e<o};return[s,function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",u=e.map(s),l=u[n],i=f(u,t,n,r);if(u[n]=i,!1===a){var c=o||0;n>0&&u[n-1]!==l&&(u[n]=Math.max(u[n],u[n-1]+c)),n<u.length-1&&u[n+1]!==l&&(u[n]=Math.min(u[n],u[n+1]-c))}else if("number"==typeof o||null===o){for(var m=n+1;m<u.length;m+=1)for(var h=!0;d(u[m]-u[m-1])&&h;){var b=v(u,1,m);u[m]=b.value,h=b.changed}for(var g=n;g>0;g-=1)for(var p=!0;d(u[g]-u[g-1])&&p;){var x=v(u,-1,g-1);u[g-1]=x.value,p=x.changed}for(var y=u.length-1;y>0;y-=1)for(var E=!0;d(u[y]-u[y-1])&&E;){var k=v(u,-1,y-1);u[y-1]=k.value,E=k.changed}for(var C=0;C<u.length-1;C+=1)for(var M=!0;d(u[C+1]-u[C])&&M;){var S=v(u,1,C+1);u[C+1]=S.value,M=S.changed}}return{value:u[n],values:u}}]}(de,me,he,ge,V,be),xe=a(pe,2),ye=xe[0],Ee=xe[1],ke=s(P,{value:O}),Ce=a(ke,2),Me=Ce[0],Se=Ce[1],we=l.useMemo((function(){var e=null==Me?[]:Array.isArray(Me)?Me:[Me],t=a(e,1)[0],n=null===Me?[]:[void 0===t?de:t];if(A){if(n=u(e),B||void 0===Me){var r=B>=0?B+1:2;for(n=n.slice(0,r);n.length<r;){var o;n.push(null!==(o=n[n.length-1])&&void 0!==o?o:de)}}n.sort((function(e,t){return e-t}))}return n.forEach((function(e,t){n[t]=ye(e)})),n}),[Me,A,de,B,ye]),Fe=l.useRef(we);Fe.current=we;var Le=function(e){return A?e:e[0]},Re=function(e){var t=u(e).sort((function(e,t){return e-t}));T&&!f(t,Fe.current,!0)&&T(Le(t)),Se(t)},Ie=function(e){if(!g){var t=0,n=me-de;we.forEach((function(r,a){var u=Math.abs(e-r);u<=n&&(n=u,t=a)}));var r=u(we);r[t]=e,A&&!we.length&&void 0===B&&r.push(e),null==X||X(Le(r)),Re(r),null==Y||Y(Le(r))}},Ne=l.useState(null),De=a(Ne,2),He=De[0],Oe=De[1];l.useEffect((function(){if(null!==He){var e=we.indexOf(He);e>=0&&se.current.focus(e)}Oe(null)}),[He]);var Pe=l.useMemo((function(){return(!z||null!==he)&&z}),[z,he]),Ae=function(e,t,n,r,o,i,c,s,f){var v=l.useState(null),d=a(v,2),m=d[0],h=d[1],b=l.useState(-1),g=a(b,2),p=g[0],x=g[1],E=l.useState(n),k=a(E,2),C=k[0],M=k[1],S=l.useState(n),w=a(S,2),F=w[0],L=w[1],R=l.useRef(null),I=l.useRef(null);l.useEffect((function(){-1===p&&M(n)}),[n,p]),l.useEffect((function(){return function(){document.removeEventListener("mousemove",R.current),document.removeEventListener("mouseup",I.current),document.removeEventListener("touchmove",R.current),document.removeEventListener("touchend",I.current)}}),[]);var N=function(e,t){C.some((function(t,n){return t!==e[n]}))&&(void 0!==t&&h(t),M(e),c(e))},D=function(e,t){if(-1===e){var n=F[0],a=F[F.length-1],l=r-n,c=o-a,s=t*(o-r);s=Math.max(s,l),s=Math.min(s,c);var v=i(n+s);s=v-n;var d=F.map((function(e){return e+s}));N(d)}else{var m=(o-r)*t,h=u(C);h[e]=F[e];var b=f(h,m,e,"dist");N(b.values,b.value)}},H=l.useRef(D);H.current=D;var O=l.useMemo((function(){var e=u(n).sort((function(e,t){return e-t})),t=u(C).sort((function(e,t){return e-t}));return e.every((function(e,n){return e===t[n]}))?C:n}),[n,C]);return[p,m,O,function(r,a){r.stopPropagation();var u=n[a];x(a),h(u),L(n);var o=y(r),l=o.pageX,i=o.pageY,c=function(n){n.preventDefault();var r,u=y(n),o=u.pageX,c=u.pageY,s=o-l,f=c-i,v=e.current.getBoundingClientRect(),d=v.width,m=v.height;switch(t){case"btt":r=-f/m;break;case"ttb":r=f/m;break;case"rtl":r=-s/d;break;default:r=s/d}H.current(a,r)},f=function e(t){t.preventDefault(),document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",c),document.removeEventListener("touchend",e),document.removeEventListener("touchmove",c),R.current=null,I.current=null,x(-1),s()};document.addEventListener("mouseup",f),document.addEventListener("mousemove",c),document.addEventListener("touchend",f),document.addEventListener("touchmove",c),R.current=c,I.current=f}]}(fe,ve,we,de,me,ye,Re,(function(){null==Y||Y(Le(Fe.current))}),Ee),Be=a(Ae,4),Te=Be[0],Xe=Be[1],Ye=Be[2],je=Be[3],Ve=function(e,t){je(e,t),null==X||X(Le(Fe.current))},Ge=-1!==Te;l.useEffect((function(){if(!Ge){var e=we.lastIndexOf(Xe);se.current.focus(e)}}),[Ge]);var _e=l.useMemo((function(){return u(Ye).sort((function(e,t){return e-t}))}),[Ye]),ze=l.useMemo((function(){return A?[_e[0],_e[_e.length-1]]:[de,_e[0]]}),[_e,A,de]),Ke=a(ze,2),Ue=Ke[0],We=Ke[1];l.useImperativeHandle(t,(function(){return{focus:function(){se.current.focus(0)},blur:function(){var e=document.activeElement;fe.current.contains(e)&&(null==e||e.blur())}}})),l.useEffect((function(){C&&se.current.focus(0)}),[]);var qe=l.useMemo((function(){return{min:de,max:me,direction:ve,disabled:g,keyboard:E,step:he,included:q,includedStart:Ue,includedEnd:We,range:A,tabIndex:oe,ariaLabelForHandle:le,ariaLabelledByForHandle:ie,ariaValueTextFormatterForHandle:ce}}),[de,me,ve,g,E,he,q,Ue,We,A,oe,le,ie,ce]);return l.createElement(v.Provider,{value:qe},l.createElement("div",{ref:fe,className:i(d,m,(r={},n(r,"".concat(d,"-disabled"),g),n(r,"".concat(d,"-vertical"),U),n(r,"".concat(d,"-horizontal"),!U),n(r,"".concat(d,"-with-marks"),ge.length),r)),style:h,onMouseDown:function(e){e.preventDefault();var t,n=fe.current.getBoundingClientRect(),r=n.width,a=n.height,u=n.left,o=n.top,l=n.bottom,i=n.right,c=e.clientX,s=e.clientY;switch(ve){case"btt":t=(l-s)/a;break;case"ttb":t=(s-o)/a;break;case"rtl":t=(i-c)/r;break;default:t=(c-u)/r}Ie(ye(de+t*(me-de)))}},l.createElement("div",{className:"".concat(d,"-rail"),style:$}),l.createElement(k,{prefixCls:d,style:Q,values:_e,startPoint:J,onStartMove:Pe?Ve:null}),l.createElement(w,{prefixCls:d,marks:ge,dots:re,style:ee,activeStyle:te}),l.createElement(x,{ref:se,prefixCls:d,style:Z,values:Ye,draggingIndex:Te,onStartMove:Ve,onOffsetChange:function(e,t){if(!g){var n=Ee(we,e,t);null==X||X(Le(we)),Re(n.values),null==Y||Y(Le(n.values)),Oe(n.value)}},onFocus:S,onBlur:F,handleRender:ae}),l.createElement(M,{prefixCls:d,marks:ge,onClick:Ie})))}));export{F as S};
