import{m as t,k as n}from"./@babel_runtime@7.24.5.Ca03HZ34.js";var r=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)},e="object"==typeof t&&t&&t.Object===Object&&t,i="object"==typeof self&&self&&self.Object===Object&&self,o=e||i||Function("return this")(),a=o,u=function(){return a.Date.now()},c=/\s/;var f=function(t){for(var n=t.length;n--&&c.test(t.charAt(n)););return n},l=/^\s+/;var v=function(t){return t?t.slice(0,f(t)+1).replace(l,""):t},s=o.Symbol,p=s,d=Object.prototype,b=d.hasOwnProperty,y=d.toString,m=p?p.toStringTag:void 0;var g=function(t){var n=b.call(t,m),r=t[m];try{t[m]=void 0;var e=!0}catch(o){}var i=y.call(t);return e&&(n?t[m]=r:delete t[m]),i},j=Object.prototype.toString;var h=g,O=function(t){return j.call(t)},T=s?s.toStringTag:void 0;var x=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":T&&T in Object(t)?h(t):O(t)},w=function(t){return null!=t&&"object"==typeof t};var S=v,N=r,E=function(t){return"symbol"==typeof t||w(t)&&"[object Symbol]"==x(t)},W=/^[-+]0x[0-9a-f]+$/i,$=/^0b[01]+$/i,M=/^0o[0-7]+$/i,k=parseInt;var A=r,D=u,F=function(t){if("number"==typeof t)return t;if(E(t))return NaN;if(N(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=N(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=S(t);var r=$.test(t);return r||M.test(t)?k(t.slice(2),r?2:8):W.test(t)?NaN:+t},I=Math.max,P=Math.min;var U=function(t,n,r){var e,i,o,a,u,c,f=0,l=!1,v=!1,s=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(n){var r=e,o=i;return e=i=void 0,f=n,a=t.apply(o,r)}function d(t){var r=t-c;return void 0===c||r>=n||r<0||v&&t-f>=o}function b(){var t=D();if(d(t))return y(t);u=setTimeout(b,function(t){var r=n-(t-c);return v?P(r,o-(t-f)):r}(t))}function y(t){return u=void 0,s&&e?p(t):(e=i=void 0,a)}function m(){var t=D(),r=d(t);if(e=arguments,i=this,c=t,r){if(void 0===u)return function(t){return f=t,u=setTimeout(b,n),l?p(t):a}(c);if(v)return clearTimeout(u),u=setTimeout(b,n),p(c)}return void 0===u&&(u=setTimeout(b,n)),a}return n=F(n)||0,A(r)&&(l=!!r.leading,o=(v="maxWait"in r)?I(F(r.maxWait)||0,n):o,s="trailing"in r?!!r.trailing:s),m.cancel=function(){void 0!==u&&clearTimeout(u),f=0,e=c=i=u=void 0},m.flush=function(){return void 0===u?a:y(D())},m};const _=n(U);var q=U,z=r;const B=n((function(t,n,r){var e=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return z(r)&&(e="leading"in r?!!r.leading:e,i="trailing"in r?!!r.trailing:i),q(t,n,{leading:e,maxWait:n,trailing:i})}));export{_ as d,B as t};