import{e as t}from"./react@18.3.1.BYZOCa2p.js";const e=/^[a-z0-9]+(-[a-z0-9]+)*$/,n=(t,e,n,i="")=>{const r=t.split(":");if("@"===t.slice(0,1)){if(r.length<2||r.length>3)return null;i=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const t=r.pop(),n=r.pop(),c={provider:r.length>0?r[0]:i,prefix:n,name:t};return e&&!o(c)?null:c}const c=r[0],s=c.split("-");if(s.length>1){const t={provider:i,prefix:s.shift(),name:s.join("-")};return e&&!o(t)?null:t}if(n&&""===i){const t={provider:i,prefix:"",name:c};return e&&!o(t,n)?null:t}return null},o=(t,n)=>!!t&&!(""!==t.provider&&!t.provider.match(e)||!(n&&""===t.prefix||t.prefix.match(e))||!t.name.match(e)),i=Object.freeze({left:0,top:0,width:16,height:16}),r=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),c=Object.freeze({...i,...r}),s=Object.freeze({...c,body:"",hidden:!1});function a(t,e){const n=function(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const o=((t.rotate||0)+(e.rotate||0))%4;return o&&(n.rotate=o),n}(t,e);for(const o in s)o in r?o in t&&!(o in n)&&(n[o]=r[o]):o in e?n[o]=e[o]:o in t&&(n[o]=t[o]);return n}function l(t,e,n){const o=t.icons,i=t.aliases||Object.create(null);let r={};function c(t){r=a(o[t]||i[t],r)}return c(e),n.forEach(c),a(t,r)}function f(t,e){const n=[];if("object"!=typeof t||"object"!=typeof t.icons)return n;t.not_found instanceof Array&&t.not_found.forEach((t=>{e(t,null),n.push(t)}));const o=function(t,e){const n=t.icons,o=t.aliases||Object.create(null),i=Object.create(null);return Object.keys(n).concat(Object.keys(o)).forEach((function t(e){if(n[e])return i[e]=[];if(!(e in i)){i[e]=null;const n=o[e]&&o[e].parent,r=n&&t(n);r&&(i[e]=[n].concat(r))}return i[e]})),i}(t);for(const i in o){const r=o[i];r&&(e(i,l(t,i,r)),n.push(i))}return n}const u={provider:"",aliases:{},not_found:{},...i};function d(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function p(t){if("object"!=typeof t||null===t)return null;const n=t;if("string"!=typeof n.prefix||!t.icons||"object"!=typeof t.icons)return null;if(!d(t,u))return null;const o=n.icons;for(const r in o){const t=o[r];if(!r.match(e)||"string"!=typeof t.body||!d(t,s))return null}const i=n.aliases||Object.create(null);for(const r in i){const t=i[r],n=t.parent;if(!r.match(e)||"string"!=typeof n||!o[n]&&!i[n]||!d(t,s))return null}return n}const h=Object.create(null);function g(t,e){const n=h[t]||(h[t]=Object.create(null));return n[e]||(n[e]=function(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}(t,e))}function m(t,e){return p(e)?f(e,((e,n)=>{n?t.icons[e]=n:t.missing.add(e)})):[]}let b=!1;function y(t){return"boolean"==typeof t&&(b=t),b}function v(t,e){if("object"!=typeof t)return!1;if("string"!=typeof e&&(e=t.provider||""),b&&!e&&!t.prefix){let e=!1;return p(t)&&(t.prefix="",f(t,((t,o)=>{o&&function(t,e){const o=n(t,!0,b);return!!o&&function(t,e,n){try{if("string"==typeof n.body)return t.icons[e]={...n},!0}catch(o){}return!1}(g(o.provider,o.prefix),o.name,e)}(t,o)&&(e=!0)}))),e}const i=t.prefix;if(!o({provider:e,prefix:i,name:"a"}))return!1;return!!m(g(e,i),t)}const x=Object.freeze({width:null,height:null}),w=Object.freeze({...x,...r}),j=/(-?[0-9.]*[0-9]+[0-9.]*)/g,k=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function _(t,e,n){if(1===e)return t;if(n=n||100,"number"==typeof t)return Math.ceil(t*e*n)/n;if("string"!=typeof t)return t;const o=t.split(j);if(null===o||!o.length)return t;const i=[];let r=o.shift(),c=k.test(r);for(;;){if(c){const t=parseFloat(r);isNaN(t)?i.push(r):i.push(Math.ceil(t*e*n)/n)}else i.push(r);if(r=o.shift(),void 0===r)return i.join("");c=!c}}const S=/\sid="(\S+)"/g,E="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16);let O=0;function M(t,e=E){const n=[];let o;for(;o=S.exec(t);)n.push(o[1]);if(!n.length)return t;const i="suffix"+(16777216*Math.random()|Date.now()).toString(16);return n.forEach((n=>{const o="function"==typeof e?e(n):e+(O++).toString(),r=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+r+')([")]|\\.[a-z])',"g"),"$1"+o+i+"$3")})),t=t.replace(new RegExp(i,"g"),"")}const L=Object.create(null);function T(t){return L[t]||L[""]}function F(t){let e;if("string"==typeof t.resources)e=[t.resources];else if(e=t.resources,!(e instanceof Array&&e.length))return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:!0===t.random,index:t.index||0,dataAfterTimeout:!1!==t.dataAfterTimeout}}const I=Object.create(null),C=["https://api.simplesvg.com","https://api.unisvg.com"],D=[];for(;C.length>0;)1===C.length||Math.random()>.5?D.push(C.shift()):D.push(C.pop());function z(t,e){const n=F(e);return null!==n&&(I[t]=n,!0)}function N(t){return I[t]}I[""]=F({resources:["https://api.iconify.design"].concat(D)});let R=(()=>{let t;try{if(t=fetch,"function"==typeof t)return t}catch(e){}})();const A={prepare:(t,e,n)=>{const o=[],i=function(t,e){const n=N(t);if(!n)return 0;let o;if(n.maxURL){let t=0;n.resources.forEach((e=>{const n=e;t=Math.max(t,n.length)}));const i=e+".json?icons=";o=n.maxURL-t-n.path.length-i.length}else o=0;return o}(t,e),r="icons";let c={type:r,provider:t,prefix:e,icons:[]},s=0;return n.forEach(((n,a)=>{s+=n.length+1,s>=i&&a>0&&(o.push(c),c={type:r,provider:t,prefix:e,icons:[]},s=n.length),c.icons.push(n)})),o.push(c),o},send:(t,e,n)=>{if(!R)return void n("abort",424);let o=function(t){if("string"==typeof t){const e=N(t);if(e)return e.path}return"/"}(e.provider);switch(e.type){case"icons":{const t=e.prefix,n=e.icons.join(",");o+=t+".json?"+new URLSearchParams({icons:n}).toString();break}case"custom":{const t=e.uri;o+="/"===t.slice(0,1)?t.slice(1):t;break}default:return void n("abort",400)}let i=503;R(t+o).then((t=>{const e=t.status;if(200===e)return i=501,t.json();setTimeout((()=>{n(function(t){return 404===t}(e)?"abort":"next",e)}))})).then((t=>{"object"==typeof t&&null!==t?setTimeout((()=>{n("success",t)})):setTimeout((()=>{404===t?n("abort",t):n("next",i)}))})).catch((()=>{n("next",i)}))}};function P(t,e){t.forEach((t=>{const n=t.loaderCallbacks;n&&(t.loaderCallbacks=n.filter((t=>t.id!==e)))}))}let U=0;var $={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function q(t,e,n,o){const i=t.resources.length,r=t.random?Math.floor(Math.random()*i):t.index;let c;if(t.random){let e=t.resources.slice(0);for(c=[];e.length>1;){const t=Math.floor(Math.random()*e.length);c.push(e[t]),e=e.slice(0,t).concat(e.slice(t+1))}c=c.concat(e)}else c=t.resources.slice(r).concat(t.resources.slice(0,r));const s=Date.now();let a,l="pending",f=0,u=null,d=[],p=[];function h(){u&&(clearTimeout(u),u=null)}function g(){"pending"===l&&(l="aborted"),h(),d.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),d=[]}function m(t,e){e&&(p=[]),"function"==typeof t&&p.push(t)}function b(){l="failed",p.forEach((t=>{t(void 0,a)}))}function y(){d.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),d=[]}function v(){if("pending"!==l)return;h();const o=c.shift();if(void 0===o)return d.length?void(u=setTimeout((()=>{h(),"pending"===l&&(y(),b())}),t.timeout)):void b();const i={status:"pending",resource:o,callback:(e,n)=>{!function(e,n,o){const i="success"!==n;switch(d=d.filter((t=>t!==e)),l){case"pending":break;case"failed":if(i||!t.dataAfterTimeout)return;break;default:return}if("abort"===n)return a=o,void b();if(i)return a=o,void(d.length||(c.length?v():b()));if(h(),y(),!t.random){const n=t.resources.indexOf(e.resource);-1!==n&&n!==t.index&&(t.index=n)}l="completed",p.forEach((t=>{t(o)}))}(i,e,n)}};d.push(i),f++,u=setTimeout(v,t.rotate),n(o,e,i.callback)}return"function"==typeof o&&p.push(o),setTimeout(v),function(){return{startTime:s,payload:e,status:l,queriesSent:f,queriesPending:d.length,subscribe:m,abort:g}}}function H(t){const e={...$,...t};let n=[];function o(){n=n.filter((t=>"pending"===t().status))}return{query:function(t,i,r){const c=q(e,t,i,((t,e)=>{o(),r&&r(t,e)}));return n.push(c),c},find:function(t){return n.find((e=>t(e)))||null},setIndex:t=>{e.index=t},getIndex:()=>e.index,cleanup:o}}function Q(){}const J=Object.create(null);function W(t,e,n){let o,i;if("string"==typeof t){const e=T(t);if(!e)return n(void 0,424),Q;i=e.send;const r=function(t){if(!J[t]){const e=N(t);if(!e)return;const n={config:e,redundancy:H(e)};J[t]=n}return J[t]}(t);r&&(o=r.redundancy)}else{const e=F(t);if(e){o=H(e);const n=T(t.resources?t.resources[0]:"");n&&(i=n.send)}}return o&&i?o.query(e,i,n)().abort:(n(void 0,424),Q)}const B="iconify2",X="iconify",G=X+"-count",K=X+"-version",V=36e5,Y=168;function Z(t,e){try{return t.getItem(e)}catch(n){}}function tt(t,e,n){try{return t.setItem(e,n),!0}catch(o){}}function et(t,e){try{t.removeItem(e)}catch(n){}}function nt(t,e){return tt(t,G,e.toString())}function ot(t){return parseInt(Z(t,G))||0}const it={local:!0,session:!0},rt={local:new Set,session:new Set};let ct=!1;let st="undefined"==typeof window?{}:window;function at(t){const e=t+"Storage";try{if(st&&st[e]&&"number"==typeof st[e].length)return st[e]}catch(n){}it[t]=!1}function lt(t,e){const n=at(t);if(!n)return;const o=Z(n,K);if(o!==B){if(o){const t=ot(n);for(let e=0;e<t;e++)et(n,X+e.toString())}return tt(n,K,B),void nt(n,0)}const i=Math.floor(Date.now()/V)-Y,r=t=>{const o=X+t.toString(),r=Z(n,o);if("string"==typeof r){try{const n=JSON.parse(r);if("object"==typeof n&&"number"==typeof n.cached&&n.cached>i&&"string"==typeof n.provider&&"object"==typeof n.data&&"string"==typeof n.data.prefix&&e(n,t))return!0}catch(c){}et(n,o)}};let c=ot(n);for(let s=c-1;s>=0;s--)r(s)||(s===c-1?(c--,nt(n,c)):rt[t].add(s))}function ft(){if(!ct){ct=!0;for(const t in it)lt(t,(t=>{const e=t.data,n=g(t.provider,e.prefix);if(!m(n,e).length)return!1;const o=e.lastModified||-1;return n.lastModifiedCached=n.lastModifiedCached?Math.min(n.lastModifiedCached,o):o,!0}))}}function ut(t,e){function n(n){let o;if(!it[n]||!(o=at(n)))return;const i=rt[n];let r;if(i.size)i.delete(r=Array.from(i).shift());else if(r=ot(o),!nt(o,r+1))return;const c={cached:Math.floor(Date.now()/V),provider:t.provider,data:e};return tt(o,X+r.toString(),JSON.stringify(c))}ct||ft(),e.lastModified&&!function(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const o in it)lt(o,(n=>{const o=n.data;return n.provider!==t.provider||o.prefix!==t.prefix||o.lastModified===e}));return!0}(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&delete(e=Object.assign({},e)).not_found,n("local")||n("session"))}function dt(){}function pt(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout((()=>{t.iconsLoaderFlag=!1,function(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout((()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const o=t.provider,i=t.prefix;e.forEach((e=>{const r=e.icons,c=r.pending.length;r.pending=r.pending.filter((e=>{if(e.prefix!==i)return!0;const c=e.name;if(t.icons[c])r.loaded.push({provider:o,prefix:i,name:c});else{if(!t.missing.has(c))return n=!0,!0;r.missing.push({provider:o,prefix:i,name:c})}return!1})),r.pending.length!==c&&(n||P([t],e.id),e.callback(r.loaded.slice(0),r.missing.slice(0),r.pending.slice(0),e.abort))}))})))}(t)})))}const ht=(t,e)=>{const o=function(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort(((t,e)=>t.provider!==e.provider?t.provider.localeCompare(e.provider):t.prefix!==e.prefix?t.prefix.localeCompare(e.prefix):t.name.localeCompare(e.name)));let o={provider:"",prefix:"",name:""};return t.forEach((t=>{if(o.name===t.name&&o.prefix===t.prefix&&o.provider===t.provider)return;o=t;const i=t.provider,r=t.prefix,c=t.name,s=n[i]||(n[i]=Object.create(null)),a=s[r]||(s[r]=g(i,r));let l;l=c in a.icons?e.loaded:""===r||a.missing.has(c)?e.missing:e.pending;const f={provider:i,prefix:r,name:c};l.push(f)})),e}(function(t,e=!0,o=!1){const i=[];return t.forEach((t=>{const r="string"==typeof t?n(t,e,o):t;r&&i.push(r)})),i}(t,!0,y()));if(!o.pending.length){let t=!0;return e&&setTimeout((()=>{t&&e(o.loaded,o.missing,o.pending,dt)})),()=>{t=!1}}const i=Object.create(null),r=[];let c,s;return o.pending.forEach((t=>{const{provider:e,prefix:n}=t;if(n===s&&e===c)return;c=e,s=n,r.push(g(e,n));const o=i[e]||(i[e]=Object.create(null));o[n]||(o[n]=[])})),o.pending.forEach((t=>{const{provider:e,prefix:n,name:o}=t,r=g(e,n),c=r.pendingIcons||(r.pendingIcons=new Set);c.has(o)||(c.add(o),i[e][n].push(o))})),r.forEach((t=>{const{provider:e,prefix:n}=t;i[e][n].length&&function(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout((()=>{t.iconsQueueFlag=!1;const{provider:e,prefix:n}=t,o=t.iconsToLoad;let i;delete t.iconsToLoad,o&&(i=T(e))&&i.prepare(e,n,o).forEach((n=>{W(e,n,(e=>{if("object"!=typeof e)n.icons.forEach((e=>{t.missing.add(e)}));else try{const n=m(t,e);if(!n.length)return;const o=t.pendingIcons;o&&n.forEach((t=>{o.delete(t)})),ut(t,e)}catch(o){}pt(t)}))}))})))}(t,i[e][n])})),e?function(t,e,n){const o=U++,i=P.bind(null,n,o);if(!e.pending.length)return i;const r={id:o,icons:e,callback:t,abort:i};return n.forEach((t=>{(t.loaderCallbacks||(t.loaderCallbacks=[])).push(r)})),i}(e,o,r):dt};const gt=/[\s,]+/;function mt(t,e){e.split(gt).forEach((e=>{switch(e.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0}}))}function bt(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function o(t){for(;t<0;)t+=4;return t%4}if(""===n){const e=parseInt(t);return isNaN(e)?0:o(e)}if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i/=e,i%1==0?o(i):0)}}return e}let yt;function vt(t){return void 0===yt&&function(){try{yt=window.trustedTypes.createPolicy("iconify",{createHTML:t=>t})}catch(t){yt=null}}(),yt?yt.createHTML(t):t}const xt={...w,inline:!1},wt={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},jt={display:"inline-block"},kt={backgroundColor:"currentColor"},_t={backgroundColor:"transparent"},St={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Et={WebkitMask:kt,mask:kt,background:_t};for(const Dt in Et){const t=Et[Dt];for(const e in St)t[Dt+e]=St[e]}const Ot={...xt,inline:!0};function Mt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const Lt=(e,n,o,i)=>{const r=o?Ot:xt,s=function(t,e){const n={...t};for(const o in e){const t=e[o],i=typeof t;o in x?(null===t||t&&("string"===i||"number"===i))&&(n[o]=t):i===typeof n[o]&&(n[o]="rotate"===o?t%4:t)}return n}(r,n),a=n.mode||"svg",l={},f=n.style||{},u={..."svg"===a?wt:{},ref:i};for(let t in n){const e=n[t];if(void 0!==e)switch(t){case"icon":case"style":case"children":case"onLoad":case"mode":case"_ref":case"_inline":break;case"inline":case"hFlip":case"vFlip":s[t]=!0===e||"true"===e||1===e;break;case"flip":"string"==typeof e&&mt(s,e);break;case"color":l.color=e;break;case"rotate":"string"==typeof e?s[t]=bt(e):"number"==typeof e&&(s[t]=e);break;case"ariaHidden":case"aria-hidden":!0!==e&&"true"!==e&&delete u["aria-hidden"];break;default:void 0===r[t]&&(u[t]=e)}}const d=function(t,e){const n={...c,...t},o={...w,...e},i={left:n.left,top:n.top,width:n.width,height:n.height};let r=n.body;[n,o].forEach((t=>{const e=[],n=t.hFlip,o=t.vFlip;let c,s=t.rotate;switch(n?o?s+=2:(e.push("translate("+(i.width+i.left).toString()+" "+(0-i.top).toString()+")"),e.push("scale(-1 1)"),i.top=i.left=0):o&&(e.push("translate("+(0-i.left).toString()+" "+(i.height+i.top).toString()+")"),e.push("scale(1 -1)"),i.top=i.left=0),s<0&&(s-=4*Math.floor(s/4)),s%=4,s){case 1:c=i.height/2+i.top,e.unshift("rotate(90 "+c.toString()+" "+c.toString()+")");break;case 2:e.unshift("rotate(180 "+(i.width/2+i.left).toString()+" "+(i.height/2+i.top).toString()+")");break;case 3:c=i.width/2+i.left,e.unshift("rotate(-90 "+c.toString()+" "+c.toString()+")")}s%2==1&&(i.left!==i.top&&(c=i.left,i.left=i.top,i.top=c),i.width!==i.height&&(c=i.width,i.width=i.height,i.height=c)),e.length&&(r='<g transform="'+e.join(" ")+'">'+r+"</g>")}));const s=o.width,a=o.height,l=i.width,f=i.height;let u,d;null===s?(d=null===a?"1em":"auto"===a?f:a,u=_(d,l/f)):(u="auto"===s?l:s,d=null===a?_(u,f/l):"auto"===a?f:a);const p={},h=(t,e)=>{(t=>"unset"===t||"undefined"===t||"none"===t)(e)||(p[t]=e.toString())};return h("width",u),h("height",d),p.viewBox=i.left.toString()+" "+i.top.toString()+" "+l.toString()+" "+f.toString(),{attributes:p,body:r}}(e,s),p=d.attributes;if(s.inline&&(l.verticalAlign="-0.125em"),"svg"===a){u.style={...l,...f},Object.assign(u,p);let e=0,o=n.id;return"string"==typeof o&&(o=o.replace(/-/g,"_")),u.dangerouslySetInnerHTML={__html:vt(M(d.body,o?()=>o+"ID"+e++:"iconifyReact"))},t.createElement("svg",u)}const{body:h,width:g,height:m}=e,b="mask"===a||"bg"!==a&&-1!==h.indexOf("currentColor"),y=function(t,e){let n=-1===t.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const o in e)n+=" "+o+'="'+e[o]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}(h,{...p,width:g+"",height:m+""});var v;return u.style={...l,"--svg":(v=y,'url("'+function(t){return"data:image/svg+xml,"+function(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}(t)}(v)+'")'),width:Mt(p.width),height:Mt(p.height),...jt,...b?kt:_t,...f},t.createElement("span",u)};var Tt;if(y(!0),Tt=A,L[""]=Tt,"undefined"!=typeof document&&"undefined"!=typeof window){ft();const t=window;if(void 0!==t.IconifyPreload){const e=t.IconifyPreload;"object"==typeof e&&null!==e&&(e instanceof Array?e:[e]).forEach((t=>{try{"object"!=typeof t||null===t||t instanceof Array||"object"!=typeof t.icons||"string"!=typeof t.prefix||v(t)}catch(e){}}))}if(void 0!==t.IconifyProviders){const e=t.IconifyProviders;if("object"==typeof e&&null!==e)for(let t in e){try{const n=e[t];if("object"!=typeof n||!n||void 0===n.resources)continue;z(t,n)}catch(Ct){}}}}class Ft extends t.Component{constructor(t){super(t),this.state={icon:null}}_abortLoading(){this._loading&&(this._loading.abort(),this._loading=null)}_setData(t){this.state.icon!==t&&this.setState({icon:t})}_checkIcon(t){const e=this.state,o=this.props.icon;if("object"==typeof o&&null!==o&&"string"==typeof o.body)return this._icon="",this._abortLoading(),void((t||null===e.icon)&&this._setData({data:o}));let i;if("string"!=typeof o||null===(i=n(o,!1,!0)))return this._abortLoading(),void this._setData(null);const r=function(t){const e="string"==typeof t?n(t,!0,b):t;if(e){const t=g(e.provider,e.prefix),n=e.name;return t.icons[n]||(t.missing.has(n)?null:void 0)}}(i);if(r){if(this._icon!==o||null===e.icon){this._abortLoading(),this._icon=o;const t=["iconify"];""!==i.prefix&&t.push("iconify--"+i.prefix),""!==i.provider&&t.push("iconify--"+i.provider),this._setData({data:r,classes:t}),this.props.onLoad&&this.props.onLoad(o)}}else this._loading&&this._loading.name===o||(this._abortLoading(),this._icon="",this._setData(null),null!==r&&(this._loading={name:o,abort:ht([i],this._checkIcon.bind(this,!1))}))}componentDidMount(){this._checkIcon(!1)}componentDidUpdate(t){t.icon!==this.props.icon&&this._checkIcon(!0)}componentWillUnmount(){this._abortLoading()}render(){const e=this.props,n=this.state.icon;if(null===n)return e.children?e.children:t.createElement("span",{});let o=e;return n.classes&&(o={...e,className:("string"==typeof e.className?e.className+" ":"")+n.classes.join(" ")}),Lt({...c,...n.data},o,e._inline,e._ref)}}const It=t.forwardRef((function(e,n){const o={...e,_ref:n,_inline:!1};return t.createElement(Ft,o)}));t.forwardRef((function(e,n){const o={...e,_ref:n,_inline:!0};return t.createElement(Ft,o)}));export{It as I};
