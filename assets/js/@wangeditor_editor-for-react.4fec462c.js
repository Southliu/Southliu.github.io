import{r as f,R as N}from"./react.017637b6.js";import{i as P,a as T}from"./@wangeditor_editor.2cfb3dd1.js";var p=function(){return p=Object.assign||function(e){for(var r,o=1,a=arguments.length;o<a;o++)for(var n in r=arguments[o])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e},p.apply(this,arguments)};function E(e,r){var o=typeof Symbol=="function"&&e[Symbol.iterator];if(!o)return e;var a,n,c=o.call(e),u=[];try{for(;(r===void 0||r-- >0)&&!(a=c.next()).done;)u.push(a.value)}catch(i){n={error:i}}finally{try{a&&!a.done&&(o=c.return)&&o.call(c)}finally{if(n)throw n.error}}return u}function z(e){var r=e.defaultContent,o=r===void 0?[]:r,a=e.onCreated,n=e.defaultHtml,c=n===void 0?"":n,u=e.value,i=u===void 0?"":u,d=e.onChange,s=e.defaultConfig,v=s===void 0?{}:s,g=e.mode,S=g===void 0?"default":g,h=e.style,w=h===void 0?{}:h,H=e.className,m=f.exports.useRef(null),x=E(f.exports.useState(null),2),y=x[0],C=x[1],b=E(f.exports.useState(""),2),O=b[0],R=b[1],j=function(t){a&&a(t);var l=v.onCreated;l&&l(t)},D=function(t){R(t.getHtml()),d&&d(t);var l=v.onChange;l&&l(t)},A=function(t){var l=v.onDestroyed;C(null),l&&l(t)};return f.exports.useEffect(function(){if(y!=null&&i!==O)try{y.setHtml(i)}catch(t){console.error(t)}},[i]),f.exports.useEffect(function(){var t;if(m.current!=null&&y==null&&!(!((t=m.current)===null||t===void 0)&&t.getAttribute("data-w-e-textarea"))){var l=P({selector:m.current,config:p(p({},v),{onCreated:j,onChange:D,onDestroyed:A}),content:o,html:c||i,mode:S});C(l)}},[y]),N.createElement("div",{style:w,ref:m,className:H})}function B(e){var r=e.editor,o=e.defaultConfig,a=o===void 0?{}:o,n=e.mode,c=n===void 0?"default":n,u=e.style,i=u===void 0?{}:u,d=e.className,s=f.exports.useRef(null);return f.exports.useEffect(function(){s.current!=null&&r!=null&&T({editor:r,selector:s.current,config:a,mode:c})},[r]),N.createElement("div",{style:i,ref:s,className:d})}export{B as c,z as u};
