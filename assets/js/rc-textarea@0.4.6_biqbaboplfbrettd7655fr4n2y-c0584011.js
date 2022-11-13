import{b as te,c as z,_ as ae,a as H,d as re,g as ne,h as ie,i as oe,j as le}from"./@babel_runtime@7.19.0-130d17ca.js";import{r as v}from"./react@18.2.0-44b760b7.js";import{R as se}from"./rc-resize-observer@1.2.0_biqbaboplfbrettd7655fr4n2y-05be0dca.js";import{f as ue,a as N,e as $}from"./rc-util@5.24.4_biqbaboplfbrettd7655fr4n2y-26f345e3.js";import{c as de}from"./classnames@2.3.2-d75d9a59.js";import{j as T}from"./@ant-design_icons@4.7.0_biqbaboplfbrettd7655fr4n2y-a11e4fd7.js";var fe=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,ce=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break"],w={},u;function ve(t){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=t.getAttribute("id")||t.getAttribute("data-reactid")||t.getAttribute("name");if(g&&w[n])return w[n];var a=window.getComputedStyle(t),e=a.getPropertyValue("box-sizing")||a.getPropertyValue("-moz-box-sizing")||a.getPropertyValue("-webkit-box-sizing"),l=parseFloat(a.getPropertyValue("padding-bottom"))+parseFloat(a.getPropertyValue("padding-top")),r=parseFloat(a.getPropertyValue("border-bottom-width"))+parseFloat(a.getPropertyValue("border-top-width")),i=ce.map(function(o){return"".concat(o,":").concat(a.getPropertyValue(o))}).join(";"),c={sizingStyle:i,paddingSize:l,borderSize:r,boxSizing:e};return g&&n&&(w[n]=c),c}function ge(t){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;u||(u=document.createElement("textarea"),u.setAttribute("tab-index","-1"),u.setAttribute("aria-hidden","true"),document.body.appendChild(u)),t.getAttribute("wrap")?u.setAttribute("wrap",t.getAttribute("wrap")):u.removeAttribute("wrap");var e=ve(t,g),l=e.paddingSize,r=e.borderSize,i=e.boxSizing,c=e.sizingStyle;u.setAttribute("style","".concat(c,";").concat(fe)),u.value=t.value||t.placeholder||"";var o=void 0,d=void 0,p,f=u.scrollHeight;if(i==="border-box"?f+=r:i==="content-box"&&(f-=l),n!==null||a!==null){u.value=" ";var x=u.scrollHeight-l;n!==null&&(o=x*n,i==="border-box"&&(o=o+l+r),f=Math.max(o,f)),a!==null&&(d=x*a,i==="border-box"&&(d=d+l+r),p=f>d?"":"hidden",f=Math.min(d,f))}var S={height:f,overflowY:p,resize:"none"};return o&&(S.minHeight=o),d&&(S.maxHeight=d),S}var me=["prefixCls","onPressEnter","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],_=0,C=1,E=2,he=v.exports.forwardRef(function(t,g){var n=t.prefixCls,a=n===void 0?"rc-textarea":n;t.onPressEnter;var e=t.defaultValue,l=t.value,r=t.autoSize,i=t.onResize,c=t.className,o=t.style,d=t.disabled,p=t.onChange;t.onInternalAutoSize;var f=te(t,me),x=ue(e,{value:l,postState:function(s){return s!=null?s:""}}),S=z(x,2),K=S[0],Y=S[1],L=function(s){Y(s.target.value),p==null||p(s)},m=v.exports.useRef();v.exports.useImperativeHandle(g,function(){return{textArea:m.current}});var Z=v.exports.useMemo(function(){return r&&ae(r)==="object"?[r.minRows,r.maxRows]:[]},[r]),V=z(Z,2),P=V[0],I=V[1],y=!!r,G=function(){try{if(document.activeElement===m.current){var s=m.current,J=s.selectionStart,Q=s.selectionEnd,ee=s.scrollTop;m.current.setSelectionRange(J,Q),m.current.scrollTop=ee}}catch{}},X=v.exports.useState(E),M=z(X,2),b=M[0],R=M[1],B=v.exports.useState(),D=z(B,2),O=D[0],U=D[1],k=function(){R(_)};N(function(){y&&k()},[l,P,I,y]),N(function(){if(b===_)R(C);else if(b===C){var h=ge(m.current,!1,P,I);R(E),U(h)}else G()},[b]);var F=v.exports.useRef(),j=function(){$.cancel(F.current)},W=function(s){b===E&&(i==null||i(s),r&&(j(),F.current=$(function(){k()})))};v.exports.useEffect(function(){return j},[]);var q=y?O:null,A=H(H({},o),q);return(b===_||b===C)&&(A.overflowY="hidden",A.overflowX="hidden"),T(se,{onResize:W,disabled:!(r||i),children:T("textarea",{...f,ref:m,style:A,className:de(a,c,re({},"".concat(a,"-disabled"),d)),disabled:d,value:K,onChange:L})})}),Ae=function(t){ne(n,t);var g=ie(n);function n(a){var e;oe(this,n),e=g.call(this,a),e.resizableTextArea=void 0,e.focus=function(){e.resizableTextArea.textArea.focus()},e.saveTextArea=function(r){e.resizableTextArea=r},e.handleChange=function(r){var i=e.props.onChange;e.setValue(r.target.value),i&&i(r)},e.handleKeyDown=function(r){var i=e.props,c=i.onPressEnter,o=i.onKeyDown;r.keyCode===13&&c&&c(r),o&&o(r)};var l=typeof a.value>"u"||a.value===null?a.defaultValue:a.value;return e.state={value:l},e}return le(n,[{key:"setValue",value:function(e,l){"value"in this.props||this.setState({value:e},l)}},{key:"blur",value:function(){this.resizableTextArea.textArea.blur()}},{key:"render",value:function(){return T(he,{...this.props,value:this.state.value,onKeyDown:this.handleKeyDown,onChange:this.handleChange,ref:this.saveTextArea})}}],[{key:"getDerivedStateFromProps",value:function(e){return"value"in e?{value:e.value}:null}}]),n}(v.exports.Component);export{Ae as T};
