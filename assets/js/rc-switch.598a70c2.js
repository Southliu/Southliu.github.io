import{n as P,e as M,b as m,g as T}from"./@babel_runtime.e68bd868.js";import{r as c}from"./react.ab566f72.js";import{c as R}from"./classnames.8cb16634.js";import{P as j,S as p}from"./rc-util.1a6f23f3.js";var A=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],F=c.forwardRef(function(e,v){var d,u=e.prefixCls,a=u===void 0?"rc-switch":u,f=e.className,g=e.checked,w=e.defaultChecked,i=e.disabled,N=e.loadingIcon,y=e.checkedChildren,b=e.unCheckedChildren,t=e.onClick,l=e.onChange,r=e.onKeyDown,x=P(e,A),I=j(!1,{value:g,defaultValue:w}),k=M(I,2),o=k[0],S=k[1];function h(n,C){var s=o;return i||(s=n,S(s),l==null||l(s,C)),s}function E(n){n.which===p.LEFT?h(!1,n):n.which===p.RIGHT&&h(!0,n),r==null||r(n)}function K(n){var C=h(!o,n);t==null||t(C,n)}var D=R(a,f,(d={},m(d,"".concat(a,"-checked"),o),m(d,"".concat(a,"-disabled"),i),d));return c.createElement("button",T({},x,{type:"button",role:"switch","aria-checked":o,disabled:i,className:D,ref:v,onKeyDown:E,onClick:K}),N,c.createElement("span",{className:"".concat(a,"-inner")},c.createElement("span",{className:"".concat(a,"-inner-checked")},y),c.createElement("span",{className:"".concat(a,"-inner-unchecked")},b)))});F.displayName="Switch";export{F as S};
