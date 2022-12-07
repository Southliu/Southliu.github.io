import{n as fr}from"./@babel_runtime@7.20.1-5f192e20.js";var He={exports:{}},ue={exports:{}},Je=function(r,t){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return r.apply(t,n)}},lr=Je,fe=Object.prototype.toString,le=function(e){return function(r){var t=fe.call(r);return e[t]||(e[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function O(e){return e=e.toLowerCase(),function(t){return le(t)===e}}function ce(e){return Array.isArray(e)}function F(e){return typeof e>"u"}function cr(e){return e!==null&&!F(e)&&e.constructor!==null&&!F(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}var Ve=O("ArrayBuffer");function dr(e){var r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(e):r=e&&e.buffer&&Ve(e.buffer),r}function hr(e){return typeof e=="string"}function pr(e){return typeof e=="number"}function We(e){return e!==null&&typeof e=="object"}function g(e){if(le(e)!=="object")return!1;var r=Object.getPrototypeOf(e);return r===null||r===Object.prototype}var vr=O("Date"),mr=O("File"),Er=O("Blob"),Rr=O("FileList");function de(e){return fe.call(e)==="[object Function]"}function yr(e){return We(e)&&de(e.pipe)}function wr(e){var r="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||fe.call(e)===r||de(e.toString)&&e.toString()===r)}var br=O("URLSearchParams");function Or(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function Ar(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function he(e,r){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),ce(e))for(var t=0,i=e.length;t<i;t++)r.call(null,e[t],t,e);else for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.call(null,e[n],n,e)}function oe(){var e={};function r(n,a){g(e[a])&&g(n)?e[a]=oe(e[a],n):g(n)?e[a]=oe({},n):ce(n)?e[a]=n.slice():e[a]=n}for(var t=0,i=arguments.length;t<i;t++)he(arguments[t],r);return e}function Sr(e,r,t){return he(r,function(n,a){t&&typeof n=="function"?e[a]=lr(n,t):e[a]=n}),e}function Cr(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function xr(e,r,t,i){e.prototype=Object.create(r.prototype,i),e.prototype.constructor=e,t&&Object.assign(e.prototype,t)}function Tr(e,r,t){var i,n,a,o={};r=r||{};do{for(i=Object.getOwnPropertyNames(e),n=i.length;n-- >0;)a=i[n],o[a]||(r[a]=e[a],o[a]=!0);e=Object.getPrototypeOf(e)}while(e&&(!t||t(e,r))&&e!==Object.prototype);return r}function Pr(e,r,t){e=String(e),(t===void 0||t>e.length)&&(t=e.length),t-=r.length;var i=e.indexOf(r,t);return i!==-1&&i===t}function Nr(e){if(!e)return null;var r=e.length;if(F(r))return null;for(var t=new Array(r);r-- >0;)t[r]=e[r];return t}var _r=function(e){return function(r){return e&&r instanceof e}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),v={isArray:ce,isArrayBuffer:Ve,isBuffer:cr,isFormData:wr,isArrayBufferView:dr,isString:hr,isNumber:pr,isObject:We,isPlainObject:g,isUndefined:F,isDate:vr,isFile:mr,isBlob:Er,isFunction:de,isStream:yr,isURLSearchParams:br,isStandardBrowserEnv:Ar,forEach:he,merge:oe,extend:Sr,trim:Or,stripBOM:Cr,inherits:xr,toFlatObject:Tr,kindOf:le,kindOfTest:O,endsWith:Pr,toArray:Nr,isTypedArray:_r,isFileList:Rr},x=v;function ye(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var ze=function(r,t,i){if(!t)return r;var n;if(i)n=i(t);else if(x.isURLSearchParams(t))n=t.toString();else{var a=[];x.forEach(t,function(f,h){f===null||typeof f>"u"||(x.isArray(f)?h=h+"[]":f=[f],x.forEach(f,function(d){x.isDate(d)?d=d.toISOString():x.isObject(d)&&(d=JSON.stringify(d)),a.push(ye(h)+"="+ye(d))}))}),n=a.join("&")}if(n){var o=r.indexOf("#");o!==-1&&(r=r.slice(0,o)),r+=(r.indexOf("?")===-1?"?":"&")+n}return r},Dr=v;function $(){this.handlers=[]}$.prototype.use=function(r,t,i){return this.handlers.push({fulfilled:r,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};$.prototype.eject=function(r){this.handlers[r]&&(this.handlers[r]=null)};$.prototype.forEach=function(r){Dr.forEach(this.handlers,function(i){i!==null&&r(i)})};var qr=$,Ur=v,Br=function(r,t){Ur.forEach(r,function(n,a){a!==t&&a.toUpperCase()===t.toUpperCase()&&(r[t]=n,delete r[a])})},Xe=v;function P(e,r,t,i,n){Error.call(this),this.message=e,this.name="AxiosError",r&&(this.code=r),t&&(this.config=t),i&&(this.request=i),n&&(this.response=n)}Xe.inherits(P,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Ke=P.prototype,Qe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(e){Qe[e]={value:e}});Object.defineProperties(P,Qe);Object.defineProperty(Ke,"isAxiosError",{value:!0});P.from=function(e,r,t,i,n,a){var o=Object.create(Ke);return Xe.toFlatObject(e,o,function(f){return f!==Error.prototype}),P.call(o,e.message,r,t,i,n),o.name=e.name,a&&Object.assign(o,a),o};var _=P,Ye={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},V,we;function Ge(){if(we)return V;we=1;var e=v;function r(t,i){i=i||new FormData;var n=[];function a(s){return s===null?"":e.isDate(s)?s.toISOString():e.isArrayBuffer(s)||e.isTypedArray(s)?typeof Blob=="function"?new Blob([s]):Buffer.from(s):s}function o(s,f){if(e.isPlainObject(s)||e.isArray(s)){if(n.indexOf(s)!==-1)throw Error("Circular reference detected in "+f);n.push(s),e.forEach(s,function(c,d){if(!e.isUndefined(c)){var u=f?f+"."+d:d,m;if(c&&!f&&typeof c=="object"){if(e.endsWith(d,"{}"))c=JSON.stringify(c);else if(e.endsWith(d,"[]")&&(m=e.toArray(c))){m.forEach(function(B){!e.isUndefined(B)&&i.append(u,a(B))});return}}o(c,u)}}),n.pop()}else i.append(f,a(s))}return o(t),i}return V=r,V}var W,be;function gr(){if(be)return W;be=1;var e=_;return W=function(t,i,n){var a=n.config.validateStatus;!n.status||!a||a(n.status)?t(n):i(new e("Request failed with status code "+n.status,[e.ERR_BAD_REQUEST,e.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))},W}var z,Oe;function Lr(){if(Oe)return z;Oe=1;var e=v;return z=e.isStandardBrowserEnv()?function(){return{write:function(i,n,a,o,s,f){var h=[];h.push(i+"="+encodeURIComponent(n)),e.isNumber(a)&&h.push("expires="+new Date(a).toGMTString()),e.isString(o)&&h.push("path="+o),e.isString(s)&&h.push("domain="+s),f===!0&&h.push("secure"),document.cookie=h.join("; ")},read:function(i){var n=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(i){this.write(i,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),z}var Fr=function(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)},$r=function(r,t){return t?r.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):r},jr=Fr,Ir=$r,Ze=function(r,t){return r&&!jr(t)?Ir(r,t):t},X,Ae;function kr(){if(Ae)return X;Ae=1;var e=v,r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return X=function(i){var n={},a,o,s;return i&&e.forEach(i.split(`
`),function(h){if(s=h.indexOf(":"),a=e.trim(h.substr(0,s)).toLowerCase(),o=e.trim(h.substr(s+1)),a){if(n[a]&&r.indexOf(a)>=0)return;a==="set-cookie"?n[a]=(n[a]?n[a]:[]).concat([o]):n[a]=n[a]?n[a]+", "+o:o}}),n},X}var K,Se;function Mr(){if(Se)return K;Se=1;var e=v;return K=e.isStandardBrowserEnv()?function(){var t=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a"),n;function a(o){var s=o;return t&&(i.setAttribute("href",s),s=i.href),i.setAttribute("href",s),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:i.pathname.charAt(0)==="/"?i.pathname:"/"+i.pathname}}return n=a(window.location.href),function(s){var f=e.isString(s)?a(s):s;return f.protocol===n.protocol&&f.host===n.host}}():function(){return function(){return!0}}(),K}var Q,Ce;function j(){if(Ce)return Q;Ce=1;var e=_,r=v;function t(i){e.call(this,i==null?"canceled":i,e.ERR_CANCELED),this.name="CanceledError"}return r.inherits(t,e,{__CANCEL__:!0}),Q=t,Q}var Y,xe;function Hr(){return xe||(xe=1,Y=function(r){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return t&&t[1]||""}),Y}var G,Te;function Pe(){if(Te)return G;Te=1;var e=v,r=gr(),t=Lr(),i=ze,n=Ze,a=kr(),o=Mr(),s=Ye,f=_,h=j(),c=Hr();return G=function(u){return new Promise(function(B,A){var D=u.data,q=u.headers,U=u.responseType,S;function me(){u.cancelToken&&u.cancelToken.unsubscribe(S),u.signal&&u.signal.removeEventListener("abort",S)}e.isFormData(D)&&e.isStandardBrowserEnv()&&delete q["Content-Type"];var l=new XMLHttpRequest;if(u.auth){var sr=u.auth.username||"",or=u.auth.password?unescape(encodeURIComponent(u.auth.password)):"";q.Authorization="Basic "+btoa(sr+":"+or)}var M=n(u.baseURL,u.url);l.open(u.method.toUpperCase(),i(M,u.params,u.paramsSerializer),!0),l.timeout=u.timeout;function Ee(){if(!!l){var y="getAllResponseHeaders"in l?a(l.getAllResponseHeaders()):null,C=!U||U==="text"||U==="json"?l.responseText:l.response,b={data:C,status:l.status,statusText:l.statusText,headers:y,config:u,request:l};r(function(J){B(J),me()},function(J){A(J),me()},b),l=null}}if("onloadend"in l?l.onloadend=Ee:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(Ee)},l.onabort=function(){!l||(A(new f("Request aborted",f.ECONNABORTED,u,l)),l=null)},l.onerror=function(){A(new f("Network Error",f.ERR_NETWORK,u,l,l)),l=null},l.ontimeout=function(){var C=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded",b=u.transitional||s;u.timeoutErrorMessage&&(C=u.timeoutErrorMessage),A(new f(C,b.clarifyTimeoutError?f.ETIMEDOUT:f.ECONNABORTED,u,l)),l=null},e.isStandardBrowserEnv()){var Re=(u.withCredentials||o(M))&&u.xsrfCookieName?t.read(u.xsrfCookieName):void 0;Re&&(q[u.xsrfHeaderName]=Re)}"setRequestHeader"in l&&e.forEach(q,function(C,b){typeof D>"u"&&b.toLowerCase()==="content-type"?delete q[b]:l.setRequestHeader(b,C)}),e.isUndefined(u.withCredentials)||(l.withCredentials=!!u.withCredentials),U&&U!=="json"&&(l.responseType=u.responseType),typeof u.onDownloadProgress=="function"&&l.addEventListener("progress",u.onDownloadProgress),typeof u.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",u.onUploadProgress),(u.cancelToken||u.signal)&&(S=function(y){!l||(A(!y||y&&y.type?new h:y),l.abort(),l=null)},u.cancelToken&&u.cancelToken.subscribe(S),u.signal&&(u.signal.aborted?S():u.signal.addEventListener("abort",S))),D||(D=null);var H=c(M);if(H&&["http","https","file"].indexOf(H)===-1){A(new f("Unsupported protocol "+H+":",f.ERR_BAD_REQUEST,u));return}l.send(D)})},G}var Z,Ne;function Jr(){return Ne||(Ne=1,Z=null),Z}var p=v,_e=Br,De=_,Vr=Ye,Wr=Ge(),zr={"Content-Type":"application/x-www-form-urlencoded"};function qe(e,r){!p.isUndefined(e)&&p.isUndefined(e["Content-Type"])&&(e["Content-Type"]=r)}function Xr(){var e;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(e=Pe()),e}function Kr(e,r,t){if(p.isString(e))try{return(r||JSON.parse)(e),p.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(e)}var I={transitional:Vr,adapter:Xr(),transformRequest:[function(r,t){if(_e(t,"Accept"),_e(t,"Content-Type"),p.isFormData(r)||p.isArrayBuffer(r)||p.isBuffer(r)||p.isStream(r)||p.isFile(r)||p.isBlob(r))return r;if(p.isArrayBufferView(r))return r.buffer;if(p.isURLSearchParams(r))return qe(t,"application/x-www-form-urlencoded;charset=utf-8"),r.toString();var i=p.isObject(r),n=t&&t["Content-Type"],a;if((a=p.isFileList(r))||i&&n==="multipart/form-data"){var o=this.env&&this.env.FormData;return Wr(a?{"files[]":r}:r,o&&new o)}else if(i||n==="application/json")return qe(t,"application/json"),Kr(r);return r}],transformResponse:[function(r){var t=this.transitional||I.transitional,i=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,a=!i&&this.responseType==="json";if(a||n&&p.isString(r)&&r.length)try{return JSON.parse(r)}catch(o){if(a)throw o.name==="SyntaxError"?De.from(o,De.ERR_BAD_RESPONSE,this,null,this.response):o}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Jr()},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};p.forEach(["delete","get","head"],function(r){I.headers[r]={}});p.forEach(["post","put","patch"],function(r){I.headers[r]=p.merge(zr)});var pe=I,Qr=v,Yr=pe,Gr=function(r,t,i){var n=this||Yr;return Qr.forEach(i,function(o){r=o.call(n,r,t)}),r},ee,Ue;function er(){return Ue||(Ue=1,ee=function(r){return!!(r&&r.__CANCEL__)}),ee}var Be=v,re=Gr,Zr=er(),et=pe,rt=j();function te(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new rt}var tt=function(r){te(r),r.headers=r.headers||{},r.data=re.call(r,r.data,r.headers,r.transformRequest),r.headers=Be.merge(r.headers.common||{},r.headers[r.method]||{},r.headers),Be.forEach(["delete","get","head","post","put","patch","common"],function(n){delete r.headers[n]});var t=r.adapter||et.adapter;return t(r).then(function(n){return te(r),n.data=re.call(r,n.data,n.headers,r.transformResponse),n},function(n){return Zr(n)||(te(r),n&&n.response&&(n.response.data=re.call(r,n.response.data,n.response.headers,r.transformResponse))),Promise.reject(n)})},R=v,rr=function(r,t){t=t||{};var i={};function n(c,d){return R.isPlainObject(c)&&R.isPlainObject(d)?R.merge(c,d):R.isPlainObject(d)?R.merge({},d):R.isArray(d)?d.slice():d}function a(c){if(R.isUndefined(t[c])){if(!R.isUndefined(r[c]))return n(void 0,r[c])}else return n(r[c],t[c])}function o(c){if(!R.isUndefined(t[c]))return n(void 0,t[c])}function s(c){if(R.isUndefined(t[c])){if(!R.isUndefined(r[c]))return n(void 0,r[c])}else return n(void 0,t[c])}function f(c){if(c in t)return n(r[c],t[c]);if(c in r)return n(void 0,r[c])}var h={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:f};return R.forEach(Object.keys(r).concat(Object.keys(t)),function(d){var u=h[d]||a,m=u(d);R.isUndefined(m)&&u!==f||(i[d]=m)}),i},ne,ge;function tr(){return ge||(ge=1,ne={version:"0.27.2"}),ne}var nt=tr().version,w=_,ve={};["object","boolean","number","function","string","symbol"].forEach(function(e,r){ve[e]=function(i){return typeof i===e||"a"+(r<1?"n ":" ")+e}});var Le={};ve.transitional=function(r,t,i){function n(a,o){return"[Axios v"+nt+"] Transitional option '"+a+"'"+o+(i?". "+i:"")}return function(a,o,s){if(r===!1)throw new w(n(o," has been removed"+(t?" in "+t:"")),w.ERR_DEPRECATED);return t&&!Le[o]&&(Le[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),r?r(a,o,s):!0}};function it(e,r,t){if(typeof e!="object")throw new w("options must be an object",w.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(e),n=i.length;n-- >0;){var a=i[n],o=r[a];if(o){var s=e[a],f=s===void 0||o(s,a,e);if(f!==!0)throw new w("option "+a+" must be "+f,w.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new w("Unknown option "+a,w.ERR_BAD_OPTION)}}var at={assertOptions:it,validators:ve},nr=v,st=ze,Fe=qr,$e=tt,k=rr,ot=Ze,ir=at,T=ir.validators;function N(e){this.defaults=e,this.interceptors={request:new Fe,response:new Fe}}N.prototype.request=function(r,t){typeof r=="string"?(t=t||{},t.url=r):t=r||{},t=k(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var i=t.transitional;i!==void 0&&ir.assertOptions(i,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1);var n=[],a=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(t)===!1||(a=a&&m.synchronous,n.unshift(m.fulfilled,m.rejected))});var o=[];this.interceptors.response.forEach(function(m){o.push(m.fulfilled,m.rejected)});var s;if(!a){var f=[$e,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(o),s=Promise.resolve(t);f.length;)s=s.then(f.shift(),f.shift());return s}for(var h=t;n.length;){var c=n.shift(),d=n.shift();try{h=c(h)}catch(u){d(u);break}}try{s=$e(h)}catch(u){return Promise.reject(u)}for(;o.length;)s=s.then(o.shift(),o.shift());return s};N.prototype.getUri=function(r){r=k(this.defaults,r);var t=ot(r.baseURL,r.url);return st(t,r.params,r.paramsSerializer)};nr.forEach(["delete","get","head","options"],function(r){N.prototype[r]=function(t,i){return this.request(k(i||{},{method:r,url:t,data:(i||{}).data}))}});nr.forEach(["post","put","patch"],function(r){function t(i){return function(a,o,s){return this.request(k(s||{},{method:r,headers:i?{"Content-Type":"multipart/form-data"}:{},url:a,data:o}))}}N.prototype[r]=t(),N.prototype[r+"Form"]=t(!0)});var ut=N,ie,je;function ft(){if(je)return ie;je=1;var e=j();function r(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var i;this.promise=new Promise(function(o){i=o});var n=this;this.promise.then(function(a){if(!!n._listeners){var o,s=n._listeners.length;for(o=0;o<s;o++)n._listeners[o](a);n._listeners=null}}),this.promise.then=function(a){var o,s=new Promise(function(f){n.subscribe(f),o=f}).then(a);return s.cancel=function(){n.unsubscribe(o)},s},t(function(o){n.reason||(n.reason=new e(o),i(n.reason))})}return r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]},r.prototype.unsubscribe=function(i){if(!!this._listeners){var n=this._listeners.indexOf(i);n!==-1&&this._listeners.splice(n,1)}},r.source=function(){var i,n=new r(function(o){i=o});return{token:n,cancel:i}},ie=r,ie}var ae,Ie;function lt(){return Ie||(Ie=1,ae=function(r){return function(i){return r.apply(null,i)}}),ae}var se,ke;function ct(){if(ke)return se;ke=1;var e=v;return se=function(t){return e.isObject(t)&&t.isAxiosError===!0},se}var Me=v,dt=Je,L=ut,ht=rr,pt=pe;function ar(e){var r=new L(e),t=dt(L.prototype.request,r);return Me.extend(t,L.prototype,r),Me.extend(t,r),t.create=function(n){return ar(ht(e,n))},t}var E=ar(pt);E.Axios=L;E.CanceledError=j();E.CancelToken=ft();E.isCancel=er();E.VERSION=tr().version;E.toFormData=Ge();E.AxiosError=_;E.Cancel=E.CanceledError;E.all=function(r){return Promise.all(r)};E.spread=lt();E.isAxiosError=ct();ue.exports=E;ue.exports.default=E;(function(e){e.exports=ue.exports})(He);const mt=fr(He.exports);export{mt as a};
