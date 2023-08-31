import{c as I,g as M,b as Q,f as P,e as K,n as q}from"./@babel_runtime.c8088fcd.js";import{r as o}from"./react.76efb1e3.js";import{r as F}from"./react-dom.9f2c8c46.js";import{a as W}from"./rc-motion.2ceeb80c.js";import{c as L}from"./classnames.82ff248b.js";import{N as z}from"./rc-util.644b3d3a.js";var B=o.forwardRef(function(e,d){var y=e.prefixCls,c=e.style,f=e.className,l=e.duration,s=l===void 0?4.5:l,E=e.eventKey,p=e.content,k=e.closable,A=e.closeIcon,S=A===void 0?"x":A,h=e.props,_=e.onClick,m=e.onNoticeClose,b=e.times,$=o.useState(!1),u=I($,2),C=u[0],g=u[1],N=function(){m(E)},v=function(r){(r.key==="Enter"||r.code==="Enter"||r.keyCode===z.ENTER)&&N()};o.useEffect(function(){if(!C&&s>0){var t=setTimeout(function(){N()},s*1e3);return function(){clearTimeout(t)}}},[s,C,b]);var n="".concat(y,"-notice");return o.createElement("div",M({},h,{ref:d,className:L(n,f,Q({},"".concat(n,"-closable"),k)),style:c,onMouseEnter:function(){g(!0)},onMouseLeave:function(){g(!1)},onClick:_}),o.createElement("div",{className:"".concat(n,"-content")},p),k&&o.createElement("a",{tabIndex:0,className:"".concat(n,"-close"),onKeyDown:v,onClick:function(r){r.preventDefault(),r.stopPropagation(),N()}},S))}),J=o.forwardRef(function(e,d){var y=e.prefixCls,c=y===void 0?"rc-notification":y,f=e.container,l=e.motion,s=e.maxCount,E=e.className,p=e.style,k=e.onAllRemoved,A=o.useState([]),S=I(A,2),h=S[0],_=S[1],m=function(t){var r,a=h.find(function(i){return i.key===t});a==null||(r=a.onClose)===null||r===void 0||r.call(a),_(function(i){return i.filter(function(x){return x.key!==t})})};o.useImperativeHandle(d,function(){return{open:function(t){_(function(r){var a=P(r),i=a.findIndex(function(w){return w.key===t.key}),x=K({},t);if(i>=0){var R;x.times=(((R=r[i])===null||R===void 0?void 0:R.times)||0)+1,a[i]=x}else x.times=0,a.push(x);return s>0&&a.length>s&&(a=a.slice(-s)),a})},close:function(t){m(t)},destroy:function(){_([])}}});var b=o.useState({}),$=I(b,2),u=$[0],C=$[1];o.useEffect(function(){var n={};h.forEach(function(t){var r=t.placement,a=r===void 0?"topRight":r;a&&(n[a]=n[a]||[],n[a].push(t))}),Object.keys(u).forEach(function(t){n[t]=n[t]||[]}),C(n)},[h]);var g=function(t){C(function(r){var a=K({},r),i=a[t]||[];return i.length||delete a[t],a})},N=o.useRef(!1);if(o.useEffect(function(){Object.keys(u).length>0?N.current=!0:N.current&&(k==null||k(),N.current=!1)},[u]),!f)return null;var v=Object.keys(u);return F.createPortal(o.createElement(o.Fragment,null,v.map(function(n){var t=u[n],r=t.map(function(i){return{config:i,key:i.key}}),a=typeof l=="function"?l(n):l;return o.createElement(W,M({key:n,className:L(c,"".concat(c,"-").concat(n),E==null?void 0:E(n)),style:p==null?void 0:p(n),keys:r,motionAppear:!0},a,{onAllRemoved:function(){g(n)}}),function(i,x){var R=i.config,w=i.className,O=i.style,D=R.key,j=R.times,H=R.className,G=R.style;return o.createElement(B,M({},R,{ref:x,prefixCls:c,className:L(w,H),style:K(K({},O),G),times:j,key:D,eventKey:D,onNoticeClose:m}))})})),f)}),U=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved"],V=function(){return document.body},T=0;function X(){for(var e={},d=arguments.length,y=new Array(d),c=0;c<d;c++)y[c]=arguments[c];return y.forEach(function(f){f&&Object.keys(f).forEach(function(l){var s=f[l];s!==void 0&&(e[l]=s)})}),e}function ae(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=e.getContainer,y=d===void 0?V:d,c=e.motion,f=e.prefixCls,l=e.maxCount,s=e.className,E=e.style,p=e.onAllRemoved,k=q(e,U),A=o.useState(),S=I(A,2),h=S[0],_=S[1],m=o.useRef(),b=o.createElement(J,{container:h,ref:m,prefixCls:f,motion:c,maxCount:l,className:s,style:E,onAllRemoved:p}),$=o.useState([]),u=I($,2),C=u[0],g=u[1],N=o.useMemo(function(){return{open:function(n){var t=X(k,n);(t.key===null||t.key===void 0)&&(t.key="rc-notification-".concat(T),T+=1),g(function(r){return[].concat(P(r),[{type:"open",config:t}])})},close:function(n){g(function(t){return[].concat(P(t),[{type:"close",key:n}])})},destroy:function(){g(function(n){return[].concat(P(n),[{type:"destroy"}])})}}},[]);return o.useEffect(function(){_(y())}),o.useEffect(function(){m.current&&C.length&&(C.forEach(function(v){switch(v.type){case"open":m.current.open(v.config);break;case"close":m.current.close(v.key);break;case"destroy":m.current.destroy();break}}),g([]))},[C]),[N,b]}export{B as N,ae as u};
