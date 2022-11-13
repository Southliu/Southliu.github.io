import{r as y}from"./react@18.2.0-44b760b7.js";import{_ as J,e as P,a as V,q as te,m as D,d as re,b as fe,g as Te,h as Ie,i as ge,k as Ae,j as ve,c as Q}from"./@babel_runtime@7.19.0-130d17ca.js";import{w as H,y as Ue,z as Le,t as We}from"./rc-util@5.24.4_biqbaboplfbrettd7655fr4n2y-26f345e3.js";import{S as je}from"./async-validator@4.2.5-f1555ba6.js";import{j as _,F as He}from"./@ant-design_icons@4.7.0_biqbaboplfbrettd7655fr4n2y-a11e4fd7.js";var q="RC_FORM_INTERNAL_HOOKS",k=function(){H(!1,"Can not find FormContext. Please make sure you wrap Field under Form.")},Y=y.exports.createContext({getFieldValue:k,getFieldsValue:k,getFieldError:k,getFieldWarning:k,getFieldsError:k,isFieldsTouched:k,isFieldTouched:k,isFieldValidating:k,isFieldsValidating:k,resetFields:k,setFields:k,setFieldValue:k,setFieldsValue:k,validateFields:k,submit:k,getInternalHooks:function(){return k(),{dispatch:k,initEntityValue:k,registerField:k,useSubscribe:k,setInitialValues:k,destroyForm:k,setCallbacks:k,registerWatch:k,getFields:k,setValidateMessages:k,setPreserve:k,getInitialValue:k}}});function se(l){return l==null?[]:Array.isArray(l)?l:[l]}var S="'${name}' is not a valid ${type}",ke={default:"Validation error on field '${name}'",required:"'${name}' is required",enum:"'${name}' must be one of [${enum}]",whitespace:"'${name}' cannot be empty",date:{format:"'${name}' is invalid for format date",parse:"'${name}' could not be parsed as date",invalid:"'${name}' is invalid date"},types:{string:S,method:S,array:S,object:S,number:S,date:S,boolean:S,integer:S,float:S,regexp:S,email:S,url:S,hex:S},string:{len:"'${name}' must be exactly ${len} characters",min:"'${name}' must be at least ${min} characters",max:"'${name}' cannot be longer than ${max} characters",range:"'${name}' must be between ${min} and ${max} characters"},number:{len:"'${name}' must equal ${len}",min:"'${name}' cannot be less than ${min}",max:"'${name}' cannot be greater than ${max}",range:"'${name}' must be between ${min} and ${max}"},array:{len:"'${name}' must be exactly ${len} in length",min:"'${name}' cannot be less than ${min} in length",max:"'${name}' cannot be greater than ${max} in length",range:"'${name}' must be between ${min} and ${max} in length"},pattern:{mismatch:"'${name}' does not match pattern ${pattern}"}};function ne(l){return Array.isArray(l)?De(l):J(l)==="object"&&l!==null?_e(l):l}function _e(l){if(Object.getPrototypeOf(l)===Object.prototype){var a={};for(var r in l)a[r]=ne(l[r]);return a}return l}function De(l){return l.map(function(a){return ne(a)})}function M(l){return se(l)}function j(l,a){var r=Ue(l,a);return r}function W(l,a,r){var t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,e=Le(l,a,r,t);return e}function Ve(l,a){var r={};return a.forEach(function(t){var e=j(l,t);r=W(r,t,e)}),r}function B(l,a){return l&&l.some(function(r){return Ne(r,a)})}function Pe(l){return J(l)==="object"&&l!==null&&Object.getPrototypeOf(l)===Object.prototype}function Re(l,a){var r=Array.isArray(l)?P(l):V({},l);return a&&Object.keys(a).forEach(function(t){var e=r[t],n=a[t],s=Pe(e)&&Pe(n);r[t]=s?Re(e,n||{}):ne(n)}),r}function ee(l){for(var a=arguments.length,r=new Array(a>1?a-1:0),t=1;t<a;t++)r[t-1]=arguments[t];return r.reduce(function(e,n){return Re(e,n)},l)}function Ne(l,a){return!l||!a||l.length!==a.length?!1:l.every(function(r,t){return a[t]===r})}function ze(l,a){if(l===a)return!0;if(!l&&a||l&&!a||!l||!a||J(l)!=="object"||J(a)!=="object")return!1;var r=Object.keys(l),t=Object.keys(a),e=new Set([].concat(r,t));return P(e).every(function(n){var s=l[n],c=a[n];return typeof s=="function"&&typeof c=="function"?!0:s===c})}function Ke(l){var a=arguments.length<=1?void 0:arguments[1];return a&&a.target&&J(a.target)==="object"&&l in a.target?a.target[l]:a}function be(l,a,r){var t=l.length;if(a<0||a>=t||r<0||r>=t)return l;var e=l[a],n=a-r;return n>0?[].concat(P(l.slice(0,r)),[e],P(l.slice(r,a)),P(l.slice(a+1,t))):n<0?[].concat(P(l.slice(0,a)),P(l.slice(a+1,r+1)),[e],P(l.slice(r+1,t))):l}var qe=je;function Ge(l,a){return l.replace(/\$\{\w+\}/g,function(r){var t=r.slice(2,-1);return a[t]})}var we="CODE_LOGIC_ERROR";function ue(l,a,r,t,e){return oe.apply(this,arguments)}function oe(){return oe=te(D().mark(function l(a,r,t,e,n){var s,c,u,i,o,d,f,F,p;return D().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return s=V({},t),delete s.ruleIndex,s.validator&&(c=s.validator,s.validator=function(){try{return c.apply(void 0,arguments)}catch(m){return console.error(m),Promise.reject(we)}}),u=null,s&&s.type==="array"&&s.defaultField&&(u=s.defaultField,delete s.defaultField),i=new qe(re({},a,[s])),o=ee({},ke,e.validateMessages),i.messages(o),d=[],g.prev=9,g.next=12,Promise.resolve(i.validate(re({},a,r),V({},e)));case 12:g.next=17;break;case 14:g.prev=14,g.t0=g.catch(9),g.t0.errors&&(d=g.t0.errors.map(function(m,v){var b=m.message,w=b===we?o.default:b;return y.exports.isValidElement(w)?y.exports.cloneElement(w,{key:"error_".concat(v)}):w}));case 17:if(!(!d.length&&u)){g.next=22;break}return g.next=20,Promise.all(r.map(function(m,v){return ue("".concat(a,".").concat(v),m,u,e,n)}));case 20:return f=g.sent,g.abrupt("return",f.reduce(function(m,v){return[].concat(P(m),P(v))},[]));case 22:return F=V(V({},t),{},{name:a,enum:(t.enum||[]).join(", ")},n),p=d.map(function(m){return typeof m=="string"?Ge(m,F):m}),g.abrupt("return",p);case 25:case"end":return g.stop()}},l,null,[[9,14]])})),oe.apply(this,arguments)}function Je(l,a,r,t,e,n){var s=l.join("."),c=r.map(function(o,d){var f=o.validator,F=V(V({},o),{},{ruleIndex:d});return f&&(F.validator=function(p,h,g){var m=!1,v=function(){for(var E=arguments.length,C=new Array(E),N=0;N<E;N++)C[N]=arguments[N];Promise.resolve().then(function(){H(!m,"Your validator function has already return a promise. `callback` will be ignored."),m||g.apply(void 0,C)})},b=f(p,h,v);m=b&&typeof b.then=="function"&&typeof b.catch=="function",H(m,"`callback` is deprecated. Please return a promise instead."),m&&b.then(function(){g()}).catch(function(w){g(w||" ")})}),F}).sort(function(o,d){var f=o.warningOnly,F=o.ruleIndex,p=d.warningOnly,h=d.ruleIndex;return!!f==!!p?F-h:f?1:-1}),u;if(e===!0)u=new Promise(function(){var o=te(D().mark(function d(f,F){var p,h,g;return D().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:p=0;case 1:if(!(p<c.length)){v.next=12;break}return h=c[p],v.next=5,ue(s,a,h,t,n);case 5:if(g=v.sent,!g.length){v.next=9;break}return F([{errors:g,rule:h}]),v.abrupt("return");case 9:p+=1,v.next=1;break;case 12:f([]);case 13:case"end":return v.stop()}},d)}));return function(d,f){return o.apply(this,arguments)}}());else{var i=c.map(function(o){return ue(s,a,o,t,n).then(function(d){return{errors:d,rule:o}})});u=(e?Be(i):Ye(i)).then(function(o){return Promise.reject(o)})}return u.catch(function(o){return o}),u}function Ye(l){return le.apply(this,arguments)}function le(){return le=te(D().mark(function l(a){return D().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.all(a).then(function(e){var n,s=(n=[]).concat.apply(n,P(e));return s}));case 1:case"end":return t.stop()}},l)})),le.apply(this,arguments)}function Be(l){return ce.apply(this,arguments)}function ce(){return ce=te(D().mark(function l(a){var r;return D().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=0,e.abrupt("return",new Promise(function(n){a.forEach(function(s){s.then(function(c){c.errors.length&&n([c]),r+=1,r===a.length&&n([])})})}));case 2:case"end":return e.stop()}},l)})),ce.apply(this,arguments)}var Qe=["name"],T=[];function Ce(l,a,r,t,e,n){return typeof l=="function"?l(a,r,"source"in n?{source:n.source}:{}):t!==e}var he=function(l){Te(r,l);var a=Ie(r);function r(t){var e;if(ge(this,r),e=a.call(this,t),e.state={resetCount:0},e.cancelRegisterFunc=null,e.mounted=!1,e.touched=!1,e.dirty=!1,e.validatePromise=null,e.prevValidating=void 0,e.errors=T,e.warnings=T,e.cancelRegister=function(){var u=e.props,i=u.preserve,o=u.isListField,d=u.name;e.cancelRegisterFunc&&e.cancelRegisterFunc(o,i,M(d)),e.cancelRegisterFunc=null},e.getNamePath=function(){var u=e.props,i=u.name,o=u.fieldContext,d=o.prefixName,f=d===void 0?[]:d;return i!==void 0?[].concat(P(f),P(i)):[]},e.getRules=function(){var u=e.props,i=u.rules,o=i===void 0?[]:i,d=u.fieldContext;return o.map(function(f){return typeof f=="function"?f(d):f})},e.refresh=function(){!e.mounted||e.setState(function(u){var i=u.resetCount;return{resetCount:i+1}})},e.triggerMetaEvent=function(u){var i=e.props.onMetaChange;i==null||i(V(V({},e.getMeta()),{},{destroy:u}))},e.onStoreChange=function(u,i,o){var d=e.props,f=d.shouldUpdate,F=d.dependencies,p=F===void 0?[]:F,h=d.onReset,g=o.store,m=e.getNamePath(),v=e.getValue(u),b=e.getValue(g),w=i&&B(i,m);switch(o.type==="valueUpdate"&&o.source==="external"&&v!==b&&(e.touched=!0,e.dirty=!0,e.validatePromise=null,e.errors=T,e.warnings=T,e.triggerMetaEvent()),o.type){case"reset":if(!i||w){e.touched=!1,e.dirty=!1,e.validatePromise=null,e.errors=T,e.warnings=T,e.triggerMetaEvent(),h==null||h(),e.refresh();return}break;case"remove":{if(f){e.reRender();return}break}case"setField":{if(w){var E=o.data;"touched"in E&&(e.touched=E.touched),"validating"in E&&!("originRCField"in E)&&(e.validatePromise=E.validating?Promise.resolve([]):null),"errors"in E&&(e.errors=E.errors||T),"warnings"in E&&(e.warnings=E.warnings||T),e.dirty=!0,e.triggerMetaEvent(),e.reRender();return}if(f&&!m.length&&Ce(f,u,g,v,b,o)){e.reRender();return}break}case"dependenciesUpdate":{var C=p.map(M);if(C.some(function(N){return B(o.relatedFields,N)})){e.reRender();return}break}default:if(w||(!p.length||m.length||f)&&Ce(f,u,g,v,b,o)){e.reRender();return}break}f===!0&&e.reRender()},e.validateRules=function(u){var i=e.getNamePath(),o=e.getValue(),d=Promise.resolve().then(function(){if(!e.mounted)return[];var f=e.props,F=f.validateFirst,p=F===void 0?!1:F,h=f.messageVariables,g=u||{},m=g.triggerName,v=e.getRules();m&&(v=v.filter(function(w){var E=w.validateTrigger;if(!E)return!0;var C=se(E);return C.includes(m)}));var b=Je(i,o,v,u,p,h);return b.catch(function(w){return w}).then(function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:T;if(e.validatePromise===d){var E;e.validatePromise=null;var C=[],N=[];(E=w.forEach)===null||E===void 0||E.call(w,function(R){var $=R.rule.warningOnly,x=R.errors,U=x===void 0?T:x;$?N.push.apply(N,P(U)):C.push.apply(C,P(U))}),e.errors=C,e.warnings=N,e.triggerMetaEvent(),e.reRender()}}),b});return e.validatePromise=d,e.dirty=!0,e.errors=T,e.warnings=T,e.triggerMetaEvent(),e.reRender(),d},e.isFieldValidating=function(){return!!e.validatePromise},e.isFieldTouched=function(){return e.touched},e.isFieldDirty=function(){if(e.dirty||e.props.initialValue!==void 0)return!0;var u=e.props.fieldContext,i=u.getInternalHooks(q),o=i.getInitialValue;return o(e.getNamePath())!==void 0},e.getErrors=function(){return e.errors},e.getWarnings=function(){return e.warnings},e.isListField=function(){return e.props.isListField},e.isList=function(){return e.props.isList},e.isPreserve=function(){return e.props.preserve},e.getMeta=function(){e.prevValidating=e.isFieldValidating();var u={touched:e.isFieldTouched(),validating:e.prevValidating,errors:e.errors,warnings:e.warnings,name:e.getNamePath()};return u},e.getOnlyChild=function(u){if(typeof u=="function"){var i=e.getMeta();return V(V({},e.getOnlyChild(u(e.getControlled(),i,e.props.fieldContext))),{},{isFunction:!0})}var o=We(u);return o.length!==1||!y.exports.isValidElement(o[0])?{child:o,isFunction:!1}:{child:o[0],isFunction:!1}},e.getValue=function(u){var i=e.props.fieldContext.getFieldsValue,o=e.getNamePath();return j(u||i(!0),o)},e.getControlled=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=e.props,o=i.trigger,d=i.validateTrigger,f=i.getValueFromEvent,F=i.normalize,p=i.valuePropName,h=i.getValueProps,g=i.fieldContext,m=d!==void 0?d:g.validateTrigger,v=e.getNamePath(),b=g.getInternalHooks,w=g.getFieldsValue,E=b(q),C=E.dispatch,N=e.getValue(),R=h||function(O){return re({},p,O)},$=u[o],x=V(V({},u),R(N));x[o]=function(){e.touched=!0,e.dirty=!0,e.triggerMetaEvent();for(var O,z=arguments.length,I=new Array(z),L=0;L<z;L++)I[L]=arguments[L];f?O=f.apply(void 0,I):O=Ke.apply(void 0,[p].concat(I)),F&&(O=F(O,N,w(!0))),C({type:"updateValue",namePath:v,value:O}),$&&$.apply(void 0,I)};var U=se(m||[]);return U.forEach(function(O){var z=x[O];x[O]=function(){z&&z.apply(void 0,arguments);var I=e.props.rules;I&&I.length&&C({type:"validateField",namePath:v,triggerName:O})}}),x},t.fieldContext){var n=t.fieldContext.getInternalHooks,s=n(q),c=s.initEntityValue;c(Ae(e))}return e}return ve(r,[{key:"componentDidMount",value:function(){var e=this.props,n=e.shouldUpdate,s=e.fieldContext;if(this.mounted=!0,s){var c=s.getInternalHooks,u=c(q),i=u.registerField;this.cancelRegisterFunc=i(this)}n===!0&&this.reRender()}},{key:"componentWillUnmount",value:function(){this.cancelRegister(),this.triggerMetaEvent(!0),this.mounted=!1}},{key:"reRender",value:function(){!this.mounted||this.forceUpdate()}},{key:"render",value:function(){this.state.resetCount;var e=this.props.children,n=this.getOnlyChild(e),s=n.child,c=n.isFunction,u;return c?u=s:y.exports.isValidElement(s)?u=y.exports.cloneElement(s,this.getControlled(s.props)):(H(!s,"`children` of Field is not validate ReactElement."),u=s),_(He,{children:u})}}]),r}(y.exports.Component);he.contextType=Y;he.defaultProps={trigger:"onChange",valuePropName:"value"};function $e(l){var a=l.name,r=fe(l,Qe),t=y.exports.useContext(Y),e=a!==void 0?M(a):void 0,n="keep";return r.isListField||(n="_".concat((e||[]).join("_"))),_(he,{name:e,...r,fieldContext:t},n)}var Xe=y.exports.createContext(null),Ze=function(a){var r=a.name,t=a.initialValue,e=a.children,n=a.rules,s=a.validateTrigger,c=y.exports.useContext(Y),u=y.exports.useRef({keys:[],id:0}),i=u.current,o=y.exports.useMemo(function(){var p=M(c.prefixName)||[];return[].concat(P(p),P(M(r)))},[c.prefixName,r]),d=y.exports.useMemo(function(){return V(V({},c),{},{prefixName:o})},[c,o]),f=y.exports.useMemo(function(){return{getKey:function(h){var g=o.length,m=h[g];return[i.keys[m],h.slice(g+1)]}}},[o]);if(typeof e!="function")return H(!1,"Form.List only accepts function as children."),null;var F=function(h,g,m){var v=m.source;return v==="internal"?!1:h!==g};return _(Xe.Provider,{value:f,children:_(Y.Provider,{value:d,children:_($e,{name:[],shouldUpdate:F,rules:n,validateTrigger:s,initialValue:t,isList:!0,children:function(p,h){var g=p.value,m=g===void 0?[]:g,v=p.onChange,b=c.getFieldValue,w=function(){var R=b(o||[]);return R||[]},E={add:function(R,$){var x=w();$>=0&&$<=x.length?(i.keys=[].concat(P(i.keys.slice(0,$)),[i.id],P(i.keys.slice($))),v([].concat(P(x.slice(0,$)),[R],P(x.slice($))))):(i.keys=[].concat(P(i.keys),[i.id]),v([].concat(P(x),[R]))),i.id+=1},remove:function(R){var $=w(),x=new Set(Array.isArray(R)?R:[R]);x.size<=0||(i.keys=i.keys.filter(function(U,O){return!x.has(O)}),v($.filter(function(U,O){return!x.has(O)})))},move:function(R,$){if(R!==$){var x=w();R<0||R>=x.length||$<0||$>=x.length||(i.keys=be(i.keys,R,$),v(be(x,R,$)))}}},C=m||[];return Array.isArray(C)||(C=[]),e(C.map(function(N,R){var $=i.keys[R];return $===void 0&&(i.keys[R]=i.id,$=i.keys[R],i.id+=1),{name:R,key:$,isListField:!0}}),E,h)}})})})};function er(l){var a=!1,r=l.length,t=[];return l.length?new Promise(function(e,n){l.forEach(function(s,c){s.catch(function(u){return a=!0,u}).then(function(u){r-=1,t[c]=u,!(r>0)&&(a&&n(t),e(t))})})}):Promise.resolve([])}var xe="__@field_split__";function ae(l){return l.map(function(a){return"".concat(J(a),":").concat(a)}).join(xe)}var G=function(){function l(){ge(this,l),this.kvs=new Map}return ve(l,[{key:"set",value:function(r,t){this.kvs.set(ae(r),t)}},{key:"get",value:function(r){return this.kvs.get(ae(r))}},{key:"update",value:function(r,t){var e=this.get(r),n=t(e);n?this.set(r,n):this.delete(r)}},{key:"delete",value:function(r){this.kvs.delete(ae(r))}},{key:"map",value:function(r){return P(this.kvs.entries()).map(function(t){var e=Q(t,2),n=e[0],s=e[1],c=n.split(xe);return r({key:c.map(function(u){var i=u.match(/^([^:]*):(.*)$/),o=Q(i,3),d=o[1],f=o[2];return d==="number"?Number(f):f}),value:s})})}},{key:"toJSON",value:function(){var r={};return this.map(function(t){var e=t.key,n=t.value;return r[e.join(".")]=n,null}),r}}]),l}(),rr=["name","errors"],tr=ve(function l(a){var r=this;ge(this,l),this.formHooked=!1,this.forceRootUpdate=void 0,this.subscribable=!0,this.store={},this.fieldEntities=[],this.initialValues={},this.callbacks={},this.validateMessages=null,this.preserve=null,this.lastValidatePromise=null,this.getForm=function(){return{getFieldValue:r.getFieldValue,getFieldsValue:r.getFieldsValue,getFieldError:r.getFieldError,getFieldWarning:r.getFieldWarning,getFieldsError:r.getFieldsError,isFieldsTouched:r.isFieldsTouched,isFieldTouched:r.isFieldTouched,isFieldValidating:r.isFieldValidating,isFieldsValidating:r.isFieldsValidating,resetFields:r.resetFields,setFields:r.setFields,setFieldValue:r.setFieldValue,setFieldsValue:r.setFieldsValue,validateFields:r.validateFields,submit:r.submit,_init:!0,getInternalHooks:r.getInternalHooks}},this.getInternalHooks=function(t){return t===q?(r.formHooked=!0,{dispatch:r.dispatch,initEntityValue:r.initEntityValue,registerField:r.registerField,useSubscribe:r.useSubscribe,setInitialValues:r.setInitialValues,destroyForm:r.destroyForm,setCallbacks:r.setCallbacks,setValidateMessages:r.setValidateMessages,getFields:r.getFields,setPreserve:r.setPreserve,getInitialValue:r.getInitialValue,registerWatch:r.registerWatch}):(H(!1,"`getInternalHooks` is internal usage. Should not call directly."),null)},this.useSubscribe=function(t){r.subscribable=t},this.prevWithoutPreserves=null,this.setInitialValues=function(t,e){if(r.initialValues=t||{},e){var n,s=ee({},t,r.store);(n=r.prevWithoutPreserves)===null||n===void 0||n.map(function(c){var u=c.key;s=W(s,u,j(t,u))}),r.prevWithoutPreserves=null,r.updateStore(s)}},this.destroyForm=function(){var t=new G;r.getFieldEntities(!0).forEach(function(e){r.isMergedPreserve(e.isPreserve())||t.set(e.getNamePath(),!0)}),r.prevWithoutPreserves=t},this.getInitialValue=function(t){var e=j(r.initialValues,t);return t.length?ne(e):e},this.setCallbacks=function(t){r.callbacks=t},this.setValidateMessages=function(t){r.validateMessages=t},this.setPreserve=function(t){r.preserve=t},this.watchList=[],this.registerWatch=function(t){return r.watchList.push(t),function(){r.watchList=r.watchList.filter(function(e){return e!==t})}},this.notifyWatch=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];if(r.watchList.length){var e=r.getFieldsValue();r.watchList.forEach(function(n){n(e,t)})}},this.timeoutId=null,this.warningUnhooked=function(){},this.updateStore=function(t){r.store=t},this.getFieldEntities=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return t?r.fieldEntities.filter(function(e){return e.getNamePath().length}):r.fieldEntities},this.getFieldsMap=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=new G;return r.getFieldEntities(t).forEach(function(n){var s=n.getNamePath();e.set(s,n)}),e},this.getFieldEntitiesForNamePathList=function(t){if(!t)return r.getFieldEntities(!0);var e=r.getFieldsMap(!0);return t.map(function(n){var s=M(n);return e.get(s)||{INVALIDATE_NAME_PATH:M(n)}})},this.getFieldsValue=function(t,e){if(r.warningUnhooked(),t===!0&&!e)return r.store;var n=r.getFieldEntitiesForNamePathList(Array.isArray(t)?t:null),s=[];return n.forEach(function(c){var u,i="INVALIDATE_NAME_PATH"in c?c.INVALIDATE_NAME_PATH:c.getNamePath();if(!(!t&&((u=c.isListField)===null||u===void 0?void 0:u.call(c))))if(!e)s.push(i);else{var o="getMeta"in c?c.getMeta():null;e(o)&&s.push(i)}}),Ve(r.store,s.map(M))},this.getFieldValue=function(t){r.warningUnhooked();var e=M(t);return j(r.store,e)},this.getFieldsError=function(t){r.warningUnhooked();var e=r.getFieldEntitiesForNamePathList(t);return e.map(function(n,s){return n&&!("INVALIDATE_NAME_PATH"in n)?{name:n.getNamePath(),errors:n.getErrors(),warnings:n.getWarnings()}:{name:M(t[s]),errors:[],warnings:[]}})},this.getFieldError=function(t){r.warningUnhooked();var e=M(t),n=r.getFieldsError([e])[0];return n.errors},this.getFieldWarning=function(t){r.warningUnhooked();var e=M(t),n=r.getFieldsError([e])[0];return n.warnings},this.isFieldsTouched=function(){r.warningUnhooked();for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var s=e[0],c=e[1],u,i=!1;e.length===0?u=null:e.length===1?Array.isArray(s)?(u=s.map(M),i=!1):(u=null,i=s):(u=s.map(M),i=c);var o=r.getFieldEntities(!0),d=function(g){return g.isFieldTouched()};if(!u)return i?o.every(d):o.some(d);var f=new G;u.forEach(function(h){f.set(h,[])}),o.forEach(function(h){var g=h.getNamePath();u.forEach(function(m){m.every(function(v,b){return g[b]===v})&&f.update(m,function(v){return[].concat(P(v),[h])})})});var F=function(g){return g.some(d)},p=f.map(function(h){var g=h.value;return g});return i?p.every(F):p.some(F)},this.isFieldTouched=function(t){return r.warningUnhooked(),r.isFieldsTouched([t])},this.isFieldsValidating=function(t){r.warningUnhooked();var e=r.getFieldEntities();if(!t)return e.some(function(s){return s.isFieldValidating()});var n=t.map(M);return e.some(function(s){var c=s.getNamePath();return B(n,c)&&s.isFieldValidating()})},this.isFieldValidating=function(t){return r.warningUnhooked(),r.isFieldsValidating([t])},this.resetWithFieldInitialValue=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=new G,n=r.getFieldEntities(!0);n.forEach(function(u){var i=u.props.initialValue,o=u.getNamePath();if(i!==void 0){var d=e.get(o)||new Set;d.add({entity:u,value:i}),e.set(o,d)}});var s=function(i){i.forEach(function(o){var d=o.props.initialValue;if(d!==void 0){var f=o.getNamePath(),F=r.getInitialValue(f);if(F!==void 0)H(!1,"Form already set 'initialValues' with path '".concat(f.join("."),"'. Field can not overwrite it."));else{var p=e.get(f);if(p&&p.size>1)H(!1,"Multiple Field with path '".concat(f.join("."),"' set 'initialValue'. Can not decide which one to pick."));else if(p){var h=r.getFieldValue(f);(!t.skipExist||h===void 0)&&r.updateStore(W(r.store,f,P(p)[0].value))}}}})},c;t.entities?c=t.entities:t.namePathList?(c=[],t.namePathList.forEach(function(u){var i=e.get(u);if(i){var o;(o=c).push.apply(o,P(P(i).map(function(d){return d.entity})))}})):c=n,s(c)},this.resetFields=function(t){r.warningUnhooked();var e=r.store;if(!t){r.updateStore(ee({},r.initialValues)),r.resetWithFieldInitialValue(),r.notifyObservers(e,null,{type:"reset"}),r.notifyWatch();return}var n=t.map(M);n.forEach(function(s){var c=r.getInitialValue(s);r.updateStore(W(r.store,s,c))}),r.resetWithFieldInitialValue({namePathList:n}),r.notifyObservers(e,n,{type:"reset"}),r.notifyWatch(n)},this.setFields=function(t){r.warningUnhooked();var e=r.store,n=[];t.forEach(function(s){var c=s.name;s.errors;var u=fe(s,rr),i=M(c);n.push(i),"value"in u&&r.updateStore(W(r.store,i,u.value)),r.notifyObservers(e,[i],{type:"setField",data:s})}),r.notifyWatch(n)},this.getFields=function(){var t=r.getFieldEntities(!0),e=t.map(function(n){var s=n.getNamePath(),c=n.getMeta(),u=V(V({},c),{},{name:s,value:r.getFieldValue(s)});return Object.defineProperty(u,"originRCField",{value:!0}),u});return e},this.initEntityValue=function(t){var e=t.props.initialValue;if(e!==void 0){var n=t.getNamePath(),s=j(r.store,n);s===void 0&&r.updateStore(W(r.store,n,e))}},this.isMergedPreserve=function(t){var e=t!==void 0?t:r.preserve;return e!=null?e:!0},this.registerField=function(t){r.fieldEntities.push(t);var e=t.getNamePath();if(r.notifyWatch([e]),t.props.initialValue!==void 0){var n=r.store;r.resetWithFieldInitialValue({entities:[t],skipExist:!0}),r.notifyObservers(n,[t.getNamePath()],{type:"valueUpdate",source:"internal"})}return function(s,c){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];if(r.fieldEntities=r.fieldEntities.filter(function(d){return d!==t}),!r.isMergedPreserve(c)&&(!s||u.length>1)){var i=s?void 0:r.getInitialValue(e);if(e.length&&r.getFieldValue(e)!==i&&r.fieldEntities.every(function(d){return!Ne(d.getNamePath(),e)})){var o=r.store;r.updateStore(W(o,e,i,!0)),r.notifyObservers(o,[e],{type:"remove"}),r.triggerDependenciesUpdate(o,e)}}r.notifyWatch([e])}},this.dispatch=function(t){switch(t.type){case"updateValue":{var e=t.namePath,n=t.value;r.updateValue(e,n);break}case"validateField":{var s=t.namePath,c=t.triggerName;r.validateFields([s],{triggerName:c});break}}},this.notifyObservers=function(t,e,n){if(r.subscribable){var s=V(V({},n),{},{store:r.getFieldsValue(!0)});r.getFieldEntities().forEach(function(c){var u=c.onStoreChange;u(t,e,s)})}else r.forceRootUpdate()},this.triggerDependenciesUpdate=function(t,e){var n=r.getDependencyChildrenFields(e);return n.length&&r.validateFields(n),r.notifyObservers(t,n,{type:"dependenciesUpdate",relatedFields:[e].concat(P(n))}),n},this.updateValue=function(t,e){var n=M(t),s=r.store;r.updateStore(W(r.store,n,e)),r.notifyObservers(s,[n],{type:"valueUpdate",source:"internal"}),r.notifyWatch([n]);var c=r.triggerDependenciesUpdate(s,n),u=r.callbacks.onValuesChange;if(u){var i=Ve(r.store,[n]);u(i,r.getFieldsValue())}r.triggerOnFieldsChange([n].concat(P(c)))},this.setFieldsValue=function(t){r.warningUnhooked();var e=r.store;if(t){var n=ee(r.store,t);r.updateStore(n)}r.notifyObservers(e,null,{type:"valueUpdate",source:"external"}),r.notifyWatch()},this.setFieldValue=function(t,e){r.setFields([{name:t,value:e}])},this.getDependencyChildrenFields=function(t){var e=new Set,n=[],s=new G;r.getFieldEntities().forEach(function(u){var i=u.props.dependencies;(i||[]).forEach(function(o){var d=M(o);s.update(d,function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new Set;return f.add(u),f})})});var c=function u(i){var o=s.get(i)||new Set;o.forEach(function(d){if(!e.has(d)){e.add(d);var f=d.getNamePath();d.isFieldDirty()&&f.length&&(n.push(f),u(f))}})};return c(t),n},this.triggerOnFieldsChange=function(t,e){var n=r.callbacks.onFieldsChange;if(n){var s=r.getFields();if(e){var c=new G;e.forEach(function(i){var o=i.name,d=i.errors;c.set(o,d)}),s.forEach(function(i){i.errors=c.get(i.name)||i.errors})}var u=s.filter(function(i){var o=i.name;return B(t,o)});n(u,s)}},this.validateFields=function(t,e){r.warningUnhooked();var n=!!t,s=n?t.map(M):[],c=[];r.getFieldEntities(!0).forEach(function(o){if(n||s.push(o.getNamePath()),(e==null?void 0:e.recursive)&&n){var d=o.getNamePath();d.every(function(p,h){return t[h]===p||t[h]===void 0})&&s.push(d)}if(!(!o.props.rules||!o.props.rules.length)){var f=o.getNamePath();if(!n||B(s,f)){var F=o.validateRules(V({validateMessages:V(V({},ke),r.validateMessages)},e));c.push(F.then(function(){return{name:f,errors:[],warnings:[]}}).catch(function(p){var h,g=[],m=[];return(h=p.forEach)===null||h===void 0||h.call(p,function(v){var b=v.rule.warningOnly,w=v.errors;b?m.push.apply(m,P(w)):g.push.apply(g,P(w))}),g.length?Promise.reject({name:f,errors:g,warnings:m}):{name:f,errors:g,warnings:m}}))}}});var u=er(c);r.lastValidatePromise=u,u.catch(function(o){return o}).then(function(o){var d=o.map(function(f){var F=f.name;return F});r.notifyObservers(r.store,d,{type:"validateFinish"}),r.triggerOnFieldsChange(d,o)});var i=u.then(function(){return r.lastValidatePromise===u?Promise.resolve(r.getFieldsValue(s)):Promise.reject([])}).catch(function(o){var d=o.filter(function(f){return f&&f.errors.length});return Promise.reject({values:r.getFieldsValue(s),errorFields:d,outOfDate:r.lastValidatePromise!==u})});return i.catch(function(o){return o}),i},this.submit=function(){r.warningUnhooked(),r.validateFields().then(function(t){var e=r.callbacks.onFinish;if(e)try{e(t)}catch(n){console.error(n)}}).catch(function(t){var e=r.callbacks.onFinishFailed;e&&e(t)})},this.forceRootUpdate=a});function Me(l){var a=y.exports.useRef(),r=y.exports.useState({}),t=Q(r,2),e=t[1];if(!a.current)if(l)a.current=l;else{var n=function(){e({})},s=new tr(n);a.current=s.getForm()}return[a.current]}var de=y.exports.createContext({triggerFormChange:function(){},triggerFormFinish:function(){},registerForm:function(){},unregisterForm:function(){}}),nr=function(a){var r=a.validateMessages,t=a.onFormChange,e=a.onFormFinish,n=a.children,s=y.exports.useContext(de),c=y.exports.useRef({});return _(de.Provider,{value:V(V({},s),{},{validateMessages:V(V({},s.validateMessages),r),triggerFormChange:function(i,o){t&&t(i,{changedFields:o,forms:c.current}),s.triggerFormChange(i,o)},triggerFormFinish:function(i,o){e&&e(i,{values:o,forms:c.current}),s.triggerFormFinish(i,o)},registerForm:function(i,o){i&&(c.current=V(V({},c.current),{},re({},i,o))),s.registerForm(i,o)},unregisterForm:function(i){var o=V({},c.current);delete o[i],c.current=o,s.unregisterForm(i)}}),children:n})},ir=["name","initialValues","fields","form","preserve","children","component","validateMessages","validateTrigger","onValuesChange","onFieldsChange","onFinish","onFinishFailed"],ar=function(a,r){var t=a.name,e=a.initialValues,n=a.fields,s=a.form,c=a.preserve,u=a.children,i=a.component,o=i===void 0?"form":i,d=a.validateMessages,f=a.validateTrigger,F=f===void 0?"onChange":f,p=a.onValuesChange,h=a.onFieldsChange,g=a.onFinish,m=a.onFinishFailed,v=fe(a,ir),b=y.exports.useContext(de),w=Me(s),E=Q(w,1),C=E[0],N=C.getInternalHooks(q),R=N.useSubscribe,$=N.setInitialValues,x=N.setCallbacks,U=N.setValidateMessages,O=N.setPreserve,z=N.destroyForm;y.exports.useImperativeHandle(r,function(){return C}),y.exports.useEffect(function(){return b.registerForm(t,C),function(){b.unregisterForm(t)}},[b,C,t]),U(V(V({},b.validateMessages),d)),x({onValuesChange:p,onFieldsChange:function(A){if(b.triggerFormChange(t,A),h){for(var K=arguments.length,ye=new Array(K>1?K-1:0),Z=1;Z<K;Z++)ye[Z-1]=arguments[Z];h.apply(void 0,[A].concat(ye))}},onFinish:function(A){b.triggerFormFinish(t,A),g&&g(A)},onFinishFailed:m}),O(c);var I=y.exports.useRef(null);$(e,!I.current),I.current||(I.current=!0),y.exports.useEffect(function(){return z},[]);var L,me=typeof u=="function";if(me){var Oe=C.getFieldsValue(!0);L=u(Oe,C)}else L=u;R(!me);var pe=y.exports.useRef();y.exports.useEffect(function(){ze(pe.current||[],n||[])||C.setFields(n||[]),pe.current=n},[n,C]);var Se=y.exports.useMemo(function(){return V(V({},C),{},{validateTrigger:F})},[C,F]),Fe=_(Y.Provider,{value:Se,children:L});return o===!1?Fe:_(o,{...v,onSubmit:function(A){A.preventDefault(),A.stopPropagation(),C.submit()},onReset:function(A){var K;A.preventDefault(),C.resetFields(),(K=v.onReset)===null||K===void 0||K.call(v,A)},children:Fe})};function Ee(l){try{return JSON.stringify(l)}catch{return Math.random()}}function sr(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0,r=y.exports.useState(),t=Q(r,2),e=t[0],n=t[1],s=y.exports.useMemo(function(){return Ee(e)},[e]),c=y.exports.useRef(s);c.current=s;var u=y.exports.useContext(Y),i=a||u,o=i&&i._init,d=M(l),f=y.exports.useRef(d);return f.current=d,y.exports.useEffect(function(){if(!!o){var F=i.getFieldsValue,p=i.getInternalHooks,h=p(q),g=h.registerWatch,m=g(function(b){var w=j(b,f.current),E=Ee(w);c.current!==E&&(c.current=E,n(w))}),v=j(F(),f.current);return n(v),m}},[]),e}var ur=y.exports.forwardRef(ar),X=ur;X.FormProvider=nr;X.Field=$e;X.List=Ze;X.useForm=Me;X.useWatch=sr;export{Y as C,nr as F,Xe as L,X as R,$e as W,Ze as a,sr as b,Me as u};
