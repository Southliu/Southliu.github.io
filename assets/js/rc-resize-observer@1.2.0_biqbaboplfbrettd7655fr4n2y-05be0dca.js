import{r as o}from"./react@18.2.0-44b760b7.js";import{s as N,i as O,D as k,t as S}from"./rc-util@5.24.4_biqbaboplfbrettd7655fr4n2y-26f345e3.js";import{g as L,h as $,i as A,j as F,a as H}from"./@babel_runtime@7.19.0-130d17ca.js";import{i as K}from"./resize-observer-polyfill@1.5.1-1e2b0dc8.js";import{j as M}from"./@ant-design_icons@4.7.0_biqbaboplfbrettd7655fr4n2y-a11e4fd7.js";var c=new Map;function T(e){e.forEach(function(n){var r,t=n.target;(r=c.get(t))===null||r===void 0||r.forEach(function(i){return i(t)})})}var I=new K(T);function V(e,n){c.has(e)||(c.set(e,new Set),I.observe(e)),c.get(e).add(n)}function X(e,n){c.has(e)&&(c.get(e).delete(n),c.get(e).size||(I.unobserve(e),c.delete(e)))}var Y=function(e){L(r,e);var n=$(r);function r(){return A(this,r),n.apply(this,arguments)}return F(r,[{key:"render",value:function(){return this.props.children}}]),r}(o.exports.Component),x=o.exports.createContext(null);function q(e){var n=e.children,r=e.onBatchResize,t=o.exports.useRef(0),i=o.exports.useRef([]),s=o.exports.useContext(x),l=o.exports.useCallback(function(f,u,v){t.current+=1;var d=t.current;i.current.push({size:f,element:u,data:v}),Promise.resolve().then(function(){d===t.current&&(r==null||r(i.current),i.current=[])}),s==null||s(f,u,v)},[r,s]);return M(x.Provider,{value:l,children:n})}function G(e){var n=e.children,r=e.disabled,t=o.exports.useRef(null),i=o.exports.useRef(null),s=o.exports.useContext(x),l=typeof n=="function",f=l?n(t):n,u=o.exports.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),v=!l&&o.exports.isValidElement(f)&&N(f),d=v?f.ref:null,P=o.exports.useMemo(function(){return O(d,t)},[d,t]),m=o.exports.useRef(e);m.current=e;var C=o.exports.useCallback(function(a){var b=m.current,z=b.onResize,j=b.data,E=a.getBoundingClientRect(),R=E.width,g=E.height,h=a.offsetWidth,p=a.offsetHeight,_=Math.floor(R),w=Math.floor(g);if(u.current.width!==_||u.current.height!==w||u.current.offsetWidth!==h||u.current.offsetHeight!==p){var y={width:_,height:w,offsetWidth:h,offsetHeight:p};u.current=y;var B=h===Math.round(R)?R:h,D=p===Math.round(g)?g:p,W=H(H({},y),{},{offsetWidth:B,offsetHeight:D});s==null||s(W,a,j),z&&Promise.resolve().then(function(){z(W,a)})}},[]);return o.exports.useEffect(function(){var a=k(t.current)||k(i.current);return a&&!r&&V(a,C),function(){return X(a,C)}},[t.current,r]),M(Y,{ref:i,children:v?o.exports.cloneElement(f,{ref:P}):f})}var J="rc-observer-key";function Q(e){var n=e.children,r=typeof n=="function"?[n]:S(n);return r.map(function(t,i){var s=(t==null?void 0:t.key)||"".concat(J,"-").concat(i);return o.exports.createElement(G,{...e,key:s},t)})}Q.Collection=q;export{Q as R};
