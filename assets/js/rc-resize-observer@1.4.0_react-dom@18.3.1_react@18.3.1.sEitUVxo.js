import{n as e,o as t,a as r,_ as n,d as o,f as u,g as a}from"./@babel_runtime@7.24.5.Ca03HZ34.js";import{r as i}from"./react@18.3.1.zIIbIvjs.js";import{s as f,b as c,f as s,t as l}from"./rc-util@5.39.3_react-dom@18.3.1_react@18.3.1.CWjsLd5M.js";import{i as h}from"./resize-observer-polyfill@1.5.1.CzGuHLZU.js";var d=i.createContext(null);var v=new Map;var m=new h((function(e){e.forEach((function(e){var t,r=e.target;null===(t=v.get(r))||void 0===t||t.forEach((function(e){return e(r)}))}))}));var g=function(o){e(a,o);var u=t(a);function a(){return r(this,a),u.apply(this,arguments)}return n(a,[{key:"render",value:function(){return this.props.children}}]),a}(i.Component);function p(e,t){var r=e.children,n=e.disabled,a=i.useRef(null),l=i.useRef(null),h=i.useContext(d),p="function"==typeof r,R=p?r(a):r,b=i.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),w=!p&&i.isValidElement(R)&&f(R),E=w?R.ref:null,y=c(E,a),C=function(){var e;return s(a.current)||(a.current&&"object"===u(a.current)?s(null===(e=a.current)||void 0===e?void 0:e.nativeElement):null)||s(l.current)};i.useImperativeHandle(t,(function(){return C()}));var k=i.useRef(e);k.current=e;var H=i.useCallback((function(e){var t=k.current,r=t.onResize,n=t.data,u=e.getBoundingClientRect(),a=u.width,i=u.height,f=e.offsetWidth,c=e.offsetHeight,s=Math.floor(a),l=Math.floor(i);if(b.current.width!==s||b.current.height!==l||b.current.offsetWidth!==f||b.current.offsetHeight!==c){var d={width:s,height:l,offsetWidth:f,offsetHeight:c};b.current=d;var v=f===Math.round(a)?a:f,m=c===Math.round(i)?i:c,g=o(o({},d),{},{offsetWidth:v,offsetHeight:m});null==h||h(g,e,n),r&&Promise.resolve().then((function(){r(g,e)}))}}),[]);return i.useEffect((function(){var e,t,r=C();return r&&!n&&(e=r,t=H,v.has(e)||(v.set(e,new Set),m.observe(e)),v.get(e).add(t)),function(){return function(e,t){v.has(e)&&(v.get(e).delete(t),v.get(e).size||(m.unobserve(e),v.delete(e)))}(r,H)}}),[a.current,n]),i.createElement(g,{ref:l},w?i.cloneElement(R,{ref:y}):R)}var R=i.forwardRef(p);function b(e,t){var r=e.children;return("function"==typeof r?[r]:l(r)).map((function(r,n){var o=(null==r?void 0:r.key)||"".concat("rc-observer-key","-").concat(n);return i.createElement(R,a({},e,{key:o,ref:0===n?t:void 0}),r)}))}var w=i.forwardRef(b);w.Collection=function(e){var t=e.children,r=e.onBatchResize,n=i.useRef(0),o=i.useRef([]),u=i.useContext(d),a=i.useCallback((function(e,t,a){n.current+=1;var i=n.current;o.current.push({size:e,element:t,data:a}),Promise.resolve().then((function(){i===n.current&&(null==r||r(o.current),o.current=[])})),null==u||u(e,t,a)}),[r,u]);return i.createElement(d.Provider,{value:a},t)};export{w as R};