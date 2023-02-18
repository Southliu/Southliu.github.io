import{c as ie,f as _,g as le,d as ae,h as se,b as ce,e as B}from"./@babel_runtime.76b3ae3f.js";import{c as ee}from"./classnames.2e4736b8.js";import{B as fe,r as X,f as ve}from"./rc-input.14a98b39.js";import{r as m,R as E}from"./react.4fb287ef.js";import{j as ue,e as ne,h as re}from"./rc-util.8c303982.js";import{R as ge}from"./rc-resize-observer.07dcc288.js";var me=`
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
`,pe=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],U={},g;function he(e){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(d&&U[t])return U[t];var n=window.getComputedStyle(e),l=n.getPropertyValue("box-sizing")||n.getPropertyValue("-moz-box-sizing")||n.getPropertyValue("-webkit-box-sizing"),p=parseFloat(n.getPropertyValue("padding-bottom"))+parseFloat(n.getPropertyValue("padding-top")),a=parseFloat(n.getPropertyValue("border-bottom-width"))+parseFloat(n.getPropertyValue("border-top-width")),u=pe.map(function(c){return"".concat(c,":").concat(n.getPropertyValue(c))}).join(";"),b={sizingStyle:u,paddingSize:p,borderSize:a,boxSizing:l};return d&&t&&(U[t]=b),b}function Se(e){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;g||(g=document.createElement("textarea"),g.setAttribute("tab-index","-1"),g.setAttribute("aria-hidden","true"),document.body.appendChild(g)),e.getAttribute("wrap")?g.setAttribute("wrap",e.getAttribute("wrap")):g.removeAttribute("wrap");var l=he(e,d),p=l.paddingSize,a=l.borderSize,u=l.boxSizing,b=l.sizingStyle;g.setAttribute("style","".concat(b,";").concat(me)),g.value=e.value||e.placeholder||"";var c=void 0,f=void 0,h,o=g.scrollHeight;if(u==="border-box"?o+=a:u==="content-box"&&(o-=p),t!==null||n!==null){g.value=" ";var x=g.scrollHeight-p;t!==null&&(c=x*t,u==="border-box"&&(c=c+p+a),o=Math.max(c,o)),n!==null&&(f=x*n,u==="border-box"&&(f=f+p+a),h=o>f?"":"hidden",o=Math.min(f,o))}var y={height:o,overflowY:h,resize:"none"};return c&&(y.minHeight=c),f&&(y.maxHeight=f),y}var be=["prefixCls","onPressEnter","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],q=0,J=1,Q=2,xe=m.forwardRef(function(e,d){var t=e,n=t.prefixCls;t.onPressEnter;var l=t.defaultValue,p=t.value,a=t.autoSize,u=t.onResize,b=t.className,c=t.style,f=t.disabled,h=t.onChange;t.onInternalAutoSize;var o=ie(t,be),x=ue(l,{value:p,postState:function(i){return i??""}}),y=_(x,2),C=y[0],L=y[1],P=function(i){L(i.target.value),h==null||h(i)},R=m.useRef();m.useImperativeHandle(d,function(){return{textArea:R.current}});var $=m.useMemo(function(){return a&&le(a)==="object"?[a.minRows,a.maxRows]:[]},[a]),A=_($,2),M=A[0],w=A[1],j=!!a,D=function(){try{if(document.activeElement===R.current){var i=R.current,r=i.selectionStart,s=i.selectionEnd,S=i.scrollTop;R.current.setSelectionRange(r,s),R.current.scrollTop=S}}catch{}},F=m.useState(Q),H=_(F,2),z=H[0],I=H[1],K=m.useState(),V=_(K,2),G=V[0],O=V[1],Y=function(){I(q)};ne(function(){j&&Y()},[p,M,w,j]),ne(function(){if(z===q)I(J);else if(z===J){var v=Se(R.current,!1,M,w);I(Q),O(v)}else D()},[z]);var W=m.useRef(),Z=function(){re.cancel(W.current)},T=function(i){z===Q&&(u==null||u(i),a&&(Z(),W.current=re(function(){Y()})))};m.useEffect(function(){return Z},[]);var k=j?G:null,N=ae(ae({},c),k);return(z===q||z===J)&&(N.overflowY="hidden",N.overflowX="hidden"),m.createElement(ge,{onResize:T,disabled:!(a||u)},m.createElement("textarea",se({},o,{ref:R,style:N,className:ee(n,b,ce({},"".concat(n,"-disabled"),f)),disabled:f,value:C,onChange:P})))}),ze=["defaultValue","value","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","classes","showCount","className","style","disabled"];function de(e,d){return B(e||"").slice(0,d).join("")}function oe(e,d,t,n){var l=t;return e?l=de(t,n):B(d||"").length<t.length&&B(t||"").length>n&&(l=d),l}var Ie=E.forwardRef(function(e,d){var t=e.defaultValue,n=e.value,l=e.onChange,p=e.allowClear,a=e.maxLength,u=e.onCompositionStart,b=e.onCompositionEnd,c=e.suffix,f=e.prefixCls,h=f===void 0?"rc-textarea":f,o=e.classes,x=e.showCount,y=e.className,C=e.style,L=e.disabled,P=ie(e,ze),R=ue(t,{value:n,defaultValue:t}),$=_(R,2),A=$[0],M=$[1],w=m.useRef(null),j=E.useState(!1),D=_(j,2),F=D[0],H=D[1],z=E.useRef(),I=E.useRef(0),K=function(){w.current.textArea.focus()};m.useImperativeHandle(d,function(){return{resizableTextArea:w.current,focus:K,blur:function(){w.current.textArea.blur()}}});var V=Number(a)>0,G=function(r){H(!0),z.current=A,I.current=r.currentTarget.selectionStart,u==null||u(r)},O=function(r){H(!1);var s=r.currentTarget.value;if(V){var S,te=I.current>=a+1||I.current===((S=z.current)===null||S===void 0?void 0:S.length);s=oe(te,z.current,s,a)}s!==A&&(M(s),X(r.currentTarget,r,l,s)),b==null||b(r)},Y=function(r){var s=r.target.value;if(!F&&V){var S=r.target.selectionStart>=a+1||r.target.selectionStart===s.length||!r.target.selectionStart;s=oe(S,A,s,a)}M(s),X(r.currentTarget,r,l,s)},W=function(r){var s=P.onPressEnter,S=P.onKeyDown;r.key==="Enter"&&s&&s(r),S==null||S(r)},Z=function(r){M(""),K(),X(w.current.textArea,r,l)},T=ve(A);!F&&V&&n==null&&(T=de(T,a));var k=E.createElement(fe,{value:T,allowClear:p,handleReset:Z,suffix:c,prefixCls:h,classes:{affixWrapper:o==null?void 0:o.affixWrapper},disabled:L,style:C,inputStyle:{resize:C==null?void 0:C.resize},inputElement:E.createElement(xe,se({},P,{onKeyDown:W,onChange:Y,onCompositionStart:G,onCompositionEnd:O,className:ee(x?"":y,o==null?void 0:o.textarea),style:!x&&C,disabled:L,prefixCls:h,ref:w}))});if(x){var N=B(T).length,v;return le(x)==="object"?v=x.formatter({value:T,count:N,maxLength:a}):v="".concat(N).concat(V?" / ".concat(a):""),E.createElement("div",{hidden:P.hidden,className:ee("".concat(h,"-show-count"),y,o==null?void 0:o.countWrapper),style:C,"data-count":v},k,E.createElement("span",{className:"".concat(h,"-data-count")},v))}return k});export{Ie as T};
