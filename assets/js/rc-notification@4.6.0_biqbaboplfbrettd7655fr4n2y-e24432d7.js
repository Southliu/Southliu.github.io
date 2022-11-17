import{g as S,h as $,i as R,j,d as D,c as U,e as I,a as N,b as O}from"./@babel_runtime@7.19.0-130d17ca.js";import{r as M}from"./react@18.2.0-9cdefec6.js";import{l as L,k as W}from"./rc-util@5.24.4_biqbaboplfbrettd7655fr4n2y-ae37cd3a.js";import{c as x}from"./classnames@2.3.2-d75d9a59.js";import{a as F}from"./rc-motion@2.6.2_biqbaboplfbrettd7655fr4n2y-c6acc879.js";import{R as V}from"./react-dom@18.2.0_react@18.2.0-e0b0c786.js";import{b as E,j as y,F as q}from"./@ant-design_icons@4.7.0_biqbaboplfbrettd7655fr4n2y-7910088d.js";var _=function(k){S(m,k);var v=$(m);function m(){var e;R(this,m);for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return e=v.call.apply(v,[this].concat(r)),e.closeTimer=null,e.close=function(c){c&&c.stopPropagation(),e.clearCloseTimer();var l=e.props,u=l.onClose,a=l.noticeKey;u&&u(a)},e.startCloseTimer=function(){e.props.duration&&(e.closeTimer=window.setTimeout(function(){e.close()},e.props.duration*1e3))},e.clearCloseTimer=function(){e.closeTimer&&(clearTimeout(e.closeTimer),e.closeTimer=null)},e}return j(m,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentDidUpdate",value:function(n){(this.props.duration!==n.duration||this.props.updateMark!==n.updateMark||this.props.visible!==n.visible&&this.props.visible)&&this.restartCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"restartCloseTimer",value:function(){this.clearCloseTimer(),this.startCloseTimer()}},{key:"render",value:function(){var n=this,r=this.props,t=r.prefixCls,c=r.className,l=r.closable,u=r.closeIcon,a=r.style,p=r.onClick,s=r.children,i=r.holder,o="".concat(t,"-notice"),d=Object.keys(this.props).reduce(function(C,f){return(f.substr(0,5)==="data-"||f.substr(0,5)==="aria-"||f==="role")&&(C[f]=n.props[f]),C},{}),h=E("div",{className:x(o,c,D({},"".concat(o,"-closable"),l)),style:a,onMouseEnter:this.clearCloseTimer,onMouseLeave:this.startCloseTimer,onClick:p,...d,children:[y("div",{className:"".concat(o,"-content"),children:s}),l?y("a",{tabIndex:0,onClick:this.close,className:"".concat(o,"-close"),children:u||y("span",{className:"".concat(o,"-close-x")})}):null]});return i?V.createPortal(h,i):h}}]),m}(M.Component);_.defaultProps={onClose:function(){},duration:1.5};function z(k){var v=M.useRef({}),m=M.useState([]),e=U(m,2),n=e[0],r=e[1];function t(c){var l=!0;k.add(c,function(u,a){var p=a.key;if(u&&(!v.current[p]||l)){var s=y(_,{...a,holder:u});v.current[p]=s,r(function(i){var o=i.findIndex(function(h){return h.key===a.key});if(o===-1)return[].concat(I(i),[s]);var d=I(i);return d[o]=s,d})}l=!1})}return[t,y(q,{children:n})]}var B=["getContainer"],w=0,G=Date.now();function K(){var k=w;return w+=1,"rcNotification_".concat(G,"_").concat(k)}var P=function(k){S(m,k);var v=$(m);function m(){var e;R(this,m);for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return e=v.call.apply(v,[this].concat(r)),e.state={notices:[]},e.hookRefs=new Map,e.add=function(c,l){var u=c.key||K(),a=N(N({},c),{},{key:u}),p=e.props.maxCount;e.setState(function(s){var i=s.notices,o=i.map(function(h){return h.notice.key}).indexOf(u),d=i.concat();return o!==-1?d.splice(o,1,{notice:a,holderCallback:l}):(p&&i.length>=p&&(a.key=d[0].notice.key,a.updateMark=K(),a.userPassKey=u,d.shift()),d.push({notice:a,holderCallback:l})),{notices:d}})},e.remove=function(c){e.setState(function(l){var u=l.notices;return{notices:u.filter(function(a){var p=a.notice,s=p.key,i=p.userPassKey,o=i||s;return o!==c})}})},e.noticePropsMap={},e}return j(m,[{key:"getTransitionName",value:function(){var n=this.props,r=n.prefixCls,t=n.animation,c=this.props.transitionName;return!c&&t&&(c="".concat(r,"-").concat(t)),c}},{key:"render",value:function(){var n=this,r=this.state.notices,t=this.props,c=t.prefixCls,l=t.className,u=t.closeIcon,a=t.style,p=[];return r.forEach(function(s,i){var o=s.notice,d=s.holderCallback,h=i===r.length-1?o.updateMark:void 0,C=o.key,f=o.userPassKey,T=N(N(N({prefixCls:c,closeIcon:u},o),o.props),{},{key:C,noticeKey:f||C,updateMark:h,onClose:function(b){var g;n.remove(b),(g=o.onClose)===null||g===void 0||g.call(o)},onClick:o.onClick,children:o.content});p.push(C),n.noticePropsMap[C]={props:T,holderCallback:d}}),y("div",{className:x(c,l),style:a,children:y(F,{keys:p,motionName:this.getTransitionName(),onVisibleChanged:function(i,o){var d=o.key;i||delete n.noticePropsMap[d]},children:function(s){var i=s.key,o=s.className,d=s.style,h=s.visible,C=n.noticePropsMap[i],f=C.props,T=C.holderCallback;return T?y("div",{className:x(o,"".concat(c,"-hook-holder")),style:N({},d),ref:function(b){typeof i>"u"||(b?(n.hookRefs.set(i,b),T(b,f)):n.hookRefs.delete(i))}},i):y(_,{...f,className:x(o,f==null?void 0:f.className),style:N(N({},d),f==null?void 0:f.style),visible:h})}})})}}]),m}(M.Component);P.newInstance=void 0;P.defaultProps={prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}};P.newInstance=function(v,m){var e=v||{},n=e.getContainer,r=O(e,B),t=document.createElement("div");if(n){var c=n();c.appendChild(t)}else document.body.appendChild(t);var l=!1;function u(a){l||(l=!0,m({notice:function(s){a.add(s)},removeNotice:function(s){a.remove(s)},component:a,destroy:function(){W(t),t.parentNode&&t.parentNode.removeChild(t)},useNotification:function(){return z(a)}}))}L(y(P,{...r,ref:u}),t)};export{P as N,z as u};
