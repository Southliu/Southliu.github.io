import{i as O,j as U,a as $,b as E,_ as L,g as x,f as P,h as A,q as I,m as S,d as W}from"./@babel_runtime.0b96ec9f.js";import{R as M,r as N}from"./react.017637b6.js";import{c as B}from"./classnames.96a48171.js";import{a as H,x as X}from"./rc-util.88348ebb.js";function K(o,n){var p="cannot ".concat(o.method," ").concat(o.action," ").concat(n.status,"'"),e=new Error(p);return e.status=n.status,e.method=o.method,e.url=o.action,e}function j(o){var n=o.responseText||o.response;if(!n)return n;try{return JSON.parse(n)}catch{return n}}function G(o){var n=new XMLHttpRequest;o.onProgress&&n.upload&&(n.upload.onprogress=function(r){r.total>0&&(r.percent=r.loaded/r.total*100),o.onProgress(r)});var p=new FormData;o.data&&Object.keys(o.data).forEach(function(t){var r=o.data[t];if(Array.isArray(r)){r.forEach(function(i){p.append("".concat(t,"[]"),i)});return}p.append(t,r)}),o.file instanceof Blob?p.append(o.filename,o.file,o.file.name):p.append(o.filename,o.file),n.onerror=function(r){o.onError(r)},n.onload=function(){return n.status<200||n.status>=300?o.onError(K(o,n),j(n)):o.onSuccess(j(n),n)},n.open(o.method,o.action,!0),o.withCredentials&&"withCredentials"in n&&(n.withCredentials=!0);var e=o.headers||{};return e["X-Requested-With"]!==null&&n.setRequestHeader("X-Requested-With","XMLHttpRequest"),Object.keys(e).forEach(function(t){e[t]!==null&&n.setRequestHeader(t,e[t])}),n.send(p),{abort:function(){n.abort()}}}var J=+new Date,_=0;function D(){return"rc-upload-".concat(J,"-").concat(++_)}const q=function(o,n){if(o&&n){var p=Array.isArray(n)?n:n.split(","),e=o.name||"",t=o.type||"",r=t.replace(/\/.*$/,"");return p.some(function(i){var a=i.trim();if(/^\*(\/\*)?$/.test(i))return!0;if(a.charAt(0)==="."){var u=e.toLowerCase(),s=a.toLowerCase(),c=[s];return(s===".jpg"||s===".jpeg")&&(c=[".jpg",".jpeg"]),c.some(function(f){return u.endsWith(f)})}return/\/\*$/.test(a)?r===a.replace(/\/.*$/,""):t===a?!0:/^\w+$/.test(a)?(H(!1,"Upload takes an invalidate 'accept' type '".concat(a,"'.Skip for check.")),!0):!1})}return!0};function z(o,n){var p=o.createReader(),e=[];function t(){p.readEntries(function(r){var i=Array.prototype.slice.apply(r);e=e.concat(i);var a=!i.length;a?n(e):t()})}t()}var Q=function(n,p,e){var t=function r(i,a){i.path=a||"",i.isFile?i.file(function(u){e(u)&&(i.fullPath&&!u.webkitRelativePath&&(Object.defineProperties(u,{webkitRelativePath:{writable:!0}}),u.webkitRelativePath=i.fullPath.replace(/^\//,""),Object.defineProperties(u,{webkitRelativePath:{writable:!1}})),p([u]))}):i.isDirectory&&z(i,function(u){u.forEach(function(s){r(s,"".concat(a).concat(i.name,"/"))})})};n.forEach(function(r){t(r.webkitGetAsEntry())})},V=["component","prefixCls","className","disabled","id","style","multiple","accept","capture","children","directory","openFileDialogOnClick","onMouseEnter","onMouseLeave"],Y=function(o){O(p,o);var n=U(p);function p(){var e;$(this,p);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e=n.call.apply(n,[this].concat(r)),e.state={uid:D()},e.reqs={},e.fileInput=void 0,e._isMounted=void 0,e.onChange=function(a){var u=e.props,s=u.accept,c=u.directory,f=a.target.files,d=E(f).filter(function(v){return!c||q(v,s)});e.uploadFiles(d),e.reset()},e.onClick=function(a){var u=e.fileInput;if(!!u){var s=e.props,c=s.children,f=s.onClick;if(c&&c.type==="button"){var d=u.parentNode;d.focus(),d.querySelector("button").blur()}u.click(),f&&f(a)}},e.onKeyDown=function(a){a.key==="Enter"&&e.onClick(a)},e.onFileDrop=function(a){var u=e.props.multiple;if(a.preventDefault(),a.type!=="dragover")if(e.props.directory)Q(Array.prototype.slice.call(a.dataTransfer.items),e.uploadFiles,function(c){return q(c,e.props.accept)});else{var s=E(a.dataTransfer.files).filter(function(c){return q(c,e.props.accept)});u===!1&&(s=s.slice(0,1)),e.uploadFiles(s)}},e.uploadFiles=function(a){var u=E(a),s=u.map(function(c){return c.uid=D(),e.processFile(c,u)});Promise.all(s).then(function(c){var f=e.props.onBatchStart;f==null||f(c.map(function(d){var v=d.origin,m=d.parsedFile;return{file:v,parsedFile:m}})),c.filter(function(d){return d.parsedFile!==null}).forEach(function(d){e.post(d)})})},e.processFile=function(){var a=I(S().mark(function u(s,c){var f,d,v,m,g,k,h,F,C;return S().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(f=e.props.beforeUpload,d=s,!f){l.next=14;break}return l.prev=3,l.next=6,f(s,c);case 6:d=l.sent,l.next=12;break;case 9:l.prev=9,l.t0=l.catch(3),d=!1;case 12:if(d!==!1){l.next=14;break}return l.abrupt("return",{origin:s,parsedFile:null,action:null,data:null});case 14:if(v=e.props.action,typeof v!="function"){l.next=21;break}return l.next=18,v(s);case 18:m=l.sent,l.next=22;break;case 21:m=v;case 22:if(g=e.props.data,typeof g!="function"){l.next=29;break}return l.next=26,g(s);case 26:k=l.sent,l.next=30;break;case 29:k=g;case 30:return h=(W(d)==="object"||typeof d=="string")&&d?d:s,h instanceof File?F=h:F=new File([h],s.name,{type:s.type}),C=F,C.uid=s.uid,l.abrupt("return",{origin:s,data:k,parsedFile:C,action:m});case 35:case"end":return l.stop()}},u,null,[[3,9]])}));return function(u,s){return a.apply(this,arguments)}}(),e.saveFileInput=function(a){e.fileInput=a},e}return L(p,[{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.abort()}},{key:"post",value:function(t){var r=this,i=t.data,a=t.origin,u=t.action,s=t.parsedFile;if(!!this._isMounted){var c=this.props,f=c.onStart,d=c.customRequest,v=c.name,m=c.headers,g=c.withCredentials,k=c.method,h=a.uid,F=d||G,C={action:u,filename:v,data:i,file:s,headers:m,withCredentials:g,method:k||"post",onProgress:function(l){var y=r.props.onProgress;y==null||y(l,s)},onSuccess:function(l,y){var b=r.props.onSuccess;b==null||b(l,s,y),delete r.reqs[h]},onError:function(l,y){var b=r.props.onError;b==null||b(l,y,s),delete r.reqs[h]}};f(a),this.reqs[h]=F(C)}}},{key:"reset",value:function(){this.setState({uid:D()})}},{key:"abort",value:function(t){var r=this.reqs;if(t){var i=t.uid?t.uid:t;r[i]&&r[i].abort&&r[i].abort(),delete r[i]}else Object.keys(r).forEach(function(a){r[a]&&r[a].abort&&r[a].abort(),delete r[a]})}},{key:"render",value:function(){var t,r=this.props,i=r.component,a=r.prefixCls,u=r.className,s=r.disabled,c=r.id,f=r.style,d=r.multiple,v=r.accept,m=r.capture,g=r.children,k=r.directory,h=r.openFileDialogOnClick,F=r.onMouseEnter,C=r.onMouseLeave,w=x(r,V),l=B((t={},P(t,a,!0),P(t,"".concat(a,"-disabled"),s),P(t,u,u),t)),y=k?{directory:"directory",webkitdirectory:"webkitdirectory"}:{},b=s?{}:{onClick:h?this.onClick:function(){},onKeyDown:h?this.onKeyDown:function(){},onMouseEnter:F,onMouseLeave:C,onDrop:this.onFileDrop,onDragOver:this.onFileDrop,tabIndex:"0"};return M.createElement(i,A({},b,{className:l,role:"button",style:f}),M.createElement("input",A({},X(w,{aria:!0,data:!0}),{id:c,type:"file",ref:this.saveFileInput,onClick:function(T){return T.stopPropagation()},key:this.state.uid,style:{display:"none"},accept:v},y,{multiple:d,onChange:this.onChange},m!=null?{capture:m}:{})),g)}}]),p}(N.exports.Component);function R(){}var Z=function(o){O(p,o);var n=U(p);function p(){var e;$(this,p);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e=n.call.apply(n,[this].concat(r)),e.uploader=void 0,e.saveUploader=function(a){e.uploader=a},e}return L(p,[{key:"abort",value:function(t){this.uploader.abort(t)}},{key:"render",value:function(){return M.createElement(Y,A({},this.props,{ref:this.saveUploader}))}}]),p}(N.exports.Component);Z.defaultProps={component:"span",prefixCls:"rc-upload",data:{},headers:{},name:"file",multipart:!1,onStart:R,onError:R,onSuccess:R,multiple:!1,beforeUpload:null,customRequest:null,withCredentials:!1,openFileDialogOnClick:!0};export{Z as U};