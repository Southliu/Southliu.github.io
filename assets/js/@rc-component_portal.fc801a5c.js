import{c as s,b as z}from"./@babel_runtime.0b96ec9f.js";import{r as n}from"./react.017637b6.js";import{r as A}from"./react-dom.9b851fd7.js";import{c as h,b as C,g as B,u as M,r as b,s as O,d as W}from"./rc-util.88348ebb.js";var L=n.exports.createContext(null),w=[];function N(e,t){var a=n.exports.useState(function(){if(!h())return null;var o=document.createElement("div");return o}),f=s(a,1),r=f[0],u=n.exports.useContext(L),l=n.exports.useState(w),c=s(l,2),d=c[0],v=c[1],R=u||function(o){v(function(S){var i=[o].concat(z(S));return i})};function p(){r.parentElement||document.body.appendChild(r)}function m(){var o;(o=r.parentElement)===null||o===void 0||o.removeChild(r)}return C(function(){return e?u?u(p):p():m(),m},[e]),C(function(){d.length&&(d.forEach(function(o){return o()}),v(w))},[d]),[r,R]}function Y(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var j="rc-util-locker-".concat(Date.now()),D=0;function F(e){var t=!!e,a=n.exports.useState(function(){return D+=1,"".concat(j,"_").concat(D)}),f=s(a,1),r=f[0];C(function(){if(t){var u=B(),l=Y();M(`
html body {
  overflow-y: hidden;
  `.concat(l?"width: calc(100% - ".concat(u,"px);"):"",`
}`),r)}else b(r);return function(){b(r)}},[t,r])}var P=!1;function G(e){return typeof e=="boolean"&&(P=e),P}var k=function(t){return t===!1?!1:!h()||!t?null:typeof t=="string"?document.querySelector(t):typeof t=="function"?t():t},Z=n.exports.forwardRef(function(e,t){var a=e.open,f=e.autoLock,r=e.getContainer;e.debug;var u=e.autoDestroy,l=u===void 0?!0:u,c=e.children,d=n.exports.useState(a),v=s(d,2),R=v[0],p=v[1],m=R||a;n.exports.useEffect(function(){(l||a)&&p(a)},[a,l]);var o=n.exports.useState(function(){return k(r)}),S=s(o,2),i=S[0],q=S[1];n.exports.useEffect(function(){var y=k(r);q(y??null)});var I=N(m&&!i),E=s(I,2),g=E[0],Q=E[1],_=i??g;F(f&&a&&h()&&(_===g||_===document.body));var $=null;if(c&&O(c)&&t){var H=c;$=H.ref}var T=W($,t);if(!m||!h()||i===void 0)return null;var U=_===!1||G(),x=c;return t&&(x=n.exports.cloneElement(c,{ref:T})),n.exports.createElement(L.Provider,{value:Q},U?x:A.exports.createPortal(x,_))});export{Z as P};