import{r as c}from"./react.017637b6.js";import{d as p,t as y}from"./lodash.6964f957.js";import"./dayjs.ac1503fb.js";import"./resize-observer-polyfill.2974a3e4.js";var i=function(r){return typeof r=="function"},h=!1;const s=h;function f(n){var r=c.exports.useRef(n);return r.current=n,r}var d=function(r){s&&(i(r)||console.error("useUnmount expected parameter is a function, got ".concat(typeof r)));var a=f(r);c.exports.useEffect(function(){return function(){a.current()}},[])};const v=d;var g=globalThis&&globalThis.__read||function(n,r){var a=typeof Symbol=="function"&&n[Symbol.iterator];if(!a)return n;var e=a.call(n),o,t=[],u;try{for(;(r===void 0||r-- >0)&&!(o=e.next()).done;)t.push(o.value)}catch(l){u={error:l}}finally{try{o&&!o.done&&(a=e.return)&&a.call(e)}finally{if(u)throw u.error}}return t},m=globalThis&&globalThis.__spreadArray||function(n,r,a){if(a||arguments.length===2)for(var e=0,o=r.length,t;e<o;e++)(t||!(e in r))&&(t||(t=Array.prototype.slice.call(r,0,e)),t[e]=r[e]);return n.concat(t||Array.prototype.slice.call(r))};function F(n,r){var a;s&&(i(n)||console.error("useDebounceFn expected parameter is a function, got ".concat(typeof n)));var e=f(n),o=(a=r==null?void 0:r.wait)!==null&&a!==void 0?a:1e3,t=c.exports.useMemo(function(){return p(function(){for(var u=[],l=0;l<arguments.length;l++)u[l]=arguments[l];return e.current.apply(e,m([],g(u),!1))},o,r)},[]);return v(function(){t.cancel()}),{run:t,cancel:t.cancel,flush:t.flush}}var b=globalThis&&globalThis.__read||function(n,r){var a=typeof Symbol=="function"&&n[Symbol.iterator];if(!a)return n;var e=a.call(n),o,t=[],u;try{for(;(r===void 0||r-- >0)&&!(o=e.next()).done;)t.push(o.value)}catch(l){u={error:l}}finally{try{o&&!o.done&&(a=e.return)&&a.call(e)}finally{if(u)throw u.error}}return t},_=globalThis&&globalThis.__spreadArray||function(n,r,a){if(a||arguments.length===2)for(var e=0,o=r.length,t;e<o;e++)(t||!(e in r))&&(t||(t=Array.prototype.slice.call(r,0,e)),t[e]=r[e]);return n.concat(t||Array.prototype.slice.call(r))};function D(n,r){var a;s&&(i(n)||console.error("useThrottleFn expected parameter is a function, got ".concat(typeof n)));var e=f(n),o=(a=r==null?void 0:r.wait)!==null&&a!==void 0?a:1e3,t=c.exports.useMemo(function(){return y(function(){for(var u=[],l=0;l<arguments.length;l++)u[l]=arguments[l];return e.current.apply(e,_([],b(u),!1))},o,r)},[]);return v(function(){t.cancel()}),{run:t,cancel:t.cancel,flush:t.flush}}export{D as a,F as u};
