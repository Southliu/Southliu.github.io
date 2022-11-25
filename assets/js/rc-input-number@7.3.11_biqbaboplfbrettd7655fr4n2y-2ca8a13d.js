import{_ as ke,a as Ve,f as x,g as ze,c as H,d as Je}from"./@babel_runtime@7.20.1-c09c1810.js";import{r as v}from"./react@18.2.0-693b9b6f.js";import{c as ae}from"./classnames@2.3.2-d75d9a59.js";import{B as Qe,a as Ze,f as we,C as ne,j as et,K as L}from"./rc-util@5.24.6_biqbaboplfbrettd7655fr4n2y-0f35c327.js";import{b as Me,j as D}from"./@ant-design_cssinjs@1.0.2_biqbaboplfbrettd7655fr4n2y-8bfcb13e.js";function ie(){return typeof BigInt=="function"}function w(e){var t=e.trim(),r=t.startsWith("-");r&&(t=t.slice(1)),t=t.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,""),t.startsWith(".")&&(t="0".concat(t));var s=t||"0",i=s.split("."),l=i[0]||"0",g=i[1]||"0";l==="0"&&g==="0"&&(r=!1);var c=r?"-":"";return{negative:r,negativeStr:c,trimStr:s,integerStr:l,decimalStr:g,fullStr:"".concat(c).concat(s)}}function ue(e){var t=String(e);return!Number.isNaN(Number(t))&&t.includes("e")}function U(e){var t=String(e);if(ue(e)){var r=Number(t.slice(t.indexOf("e-")+2)),s=t.match(/\.(\d+)/);return s!=null&&s[1]&&(r+=s[1].length),r}return t.includes(".")&&se(t)?t.length-t.indexOf(".")-1:0}function j(e){var t=String(e);if(ue(e)){if(e>Number.MAX_SAFE_INTEGER)return String(ie()?BigInt(e).toString():Number.MAX_SAFE_INTEGER);if(e<Number.MIN_SAFE_INTEGER)return String(ie()?BigInt(e).toString():Number.MIN_SAFE_INTEGER);t=e.toFixed(U(t))}return w(t).fullStr}function se(e){return typeof e=="number"?!Number.isNaN(e):e?/^\s*-?\d+(\.\d+)?\s*$/.test(e)||/^\s*-?\d+\.\s*$/.test(e)||/^\s*-?\.\d+\s*$/.test(e):!1}function Re(e){var t=typeof e=="number"?j(e):w(e).fullStr,r=t.includes(".");return r?w(t.replace(/(\d)\.(\d)/g,"$1$2.")).fullStr:e+"0"}var tt=function(){function e(t){if(Ve(this,e),this.origin="",this.number=void 0,this.empty=void 0,!t&&t!==0||!String(t).trim()){this.empty=!0;return}this.origin=String(t),this.number=Number(t)}return ke(e,[{key:"negate",value:function(){return new e(-this.toNumber())}},{key:"add",value:function(r){if(this.isInvalidate())return new e(r);var s=Number(r);if(Number.isNaN(s))return this;var i=this.number+s;if(i>Number.MAX_SAFE_INTEGER)return new e(Number.MAX_SAFE_INTEGER);if(i<Number.MIN_SAFE_INTEGER)return new e(Number.MIN_SAFE_INTEGER);var l=Math.max(U(this.number),U(s));return new e(i.toFixed(l))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(r){return this.toNumber()===(r==null?void 0:r.toNumber())}},{key:"lessEquals",value:function(r){return this.add(r.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return r?this.isInvalidate()?"":j(this.number):this.origin}}]),e}(),rt=function(){function e(t){if(Ve(this,e),this.origin="",this.negative=void 0,this.integer=void 0,this.decimal=void 0,this.decimalLen=void 0,this.empty=void 0,this.nan=void 0,!t&&t!==0||!String(t).trim()){this.empty=!0;return}if(this.origin=String(t),t==="-"){this.nan=!0;return}var r=t;if(ue(r)&&(r=Number(r)),r=typeof r=="string"?r:j(r),se(r)){var s=w(r);this.negative=s.negative;var i=s.trimStr.split(".");this.integer=BigInt(i[0]);var l=i[1]||"0";this.decimal=BigInt(l),this.decimalLen=l.length}else this.nan=!0}return ke(e,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(r){var s="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(r,"0"));return BigInt(s)}},{key:"negate",value:function(){var r=new e(this.toString());return r.negative=!r.negative,r}},{key:"add",value:function(r){if(this.isInvalidate())return new e(r);var s=new e(r);if(s.isInvalidate())return this;var i=Math.max(this.getDecimalStr().length,s.getDecimalStr().length),l=this.alignDecimal(i),g=s.alignDecimal(i),c=(l+g).toString(),p=w(c),h=p.negativeStr,f=p.trimStr,m="".concat(h).concat(f.padStart(i+1,"0"));return new e("".concat(m.slice(0,-i),".").concat(m.slice(-i)))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(r){return this.toString()===(r==null?void 0:r.toString())}},{key:"lessEquals",value:function(r){return this.add(r.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return r?this.isInvalidate()?"":w("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),e}();function S(e){return ie()?new rt(e):new tt(e)}function W(e,t,r){var s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(e==="")return"";var i=w(e),l=i.negativeStr,g=i.integerStr,c=i.decimalStr,p="".concat(t).concat(c),h="".concat(l).concat(g);if(r>=0){var f=Number(c[r]);if(f>=5&&!s){var m=S(e).add("".concat(l,"0.").concat("0".repeat(r)).concat(10-f));return W(m.toString(),t,r,s)}return r===0?h:"".concat(h).concat(t).concat(c.padEnd(r,"0").slice(0,r))}return p===".0"?h:"".concat(h).concat(p)}var nt=200,at=600;function it(e){var t=e.prefixCls,r=e.upNode,s=e.downNode,i=e.upDisabled,l=e.downDisabled,g=e.onStep,c=v.exports.useRef(),p=v.exports.useRef();p.current=g;var h=function(E,K){E.preventDefault(),p.current(K);function A(){p.current(K),c.current=setTimeout(A,nt)}c.current=setTimeout(A,at)},f=function(){clearTimeout(c.current)};if(v.exports.useEffect(function(){return f},[]),Qe())return null;var m="".concat(t,"-handler"),N=ae(m,"".concat(m,"-up"),x({},"".concat(m,"-up-disabled"),i)),I=ae(m,"".concat(m,"-down"),x({},"".concat(m,"-down-disabled"),l)),R={unselectable:"on",role:"button",onMouseUp:f,onMouseLeave:f};return Me("div",{className:"".concat(m,"-wrap"),children:[D("span",{...R,onMouseDown:function(E){h(E,!0)},"aria-label":"Increase Value","aria-disabled":i,className:N,children:r||D("span",{unselectable:"on",className:"".concat(t,"-handler-up-inner")})}),D("span",{...R,onMouseDown:function(E){h(E,!1)},"aria-label":"Decrease Value","aria-disabled":l,className:I,children:s||D("span",{unselectable:"on",className:"".concat(t,"-handler-down-inner")})})]})}function ut(e,t){var r=v.exports.useRef(null);function s(){try{var l=e.selectionStart,g=e.selectionEnd,c=e.value,p=c.substring(0,l),h=c.substring(g);r.current={start:l,end:g,value:c,beforeTxt:p,afterTxt:h}}catch{}}function i(){if(e&&r.current&&t)try{var l=e.value,g=r.current,c=g.beforeTxt,p=g.afterTxt,h=g.start,f=l.length;if(l.endsWith(p))f=l.length-r.current.afterTxt.length;else if(l.startsWith(c))f=c.length;else{var m=c[h-1],N=l.indexOf(m,h-1);N!==-1&&(f=N+1)}e.setSelectionRange(f,f)}catch(I){Ze(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(I.message))}}return[s,i]}const st=function(){var e=v.exports.useRef(0),t=function(){we.cancel(e.current)};return v.exports.useEffect(function(){return t},[]),function(r){t(),e.current=we(function(){r()})}};var ot=["prefixCls","className","style","min","max","step","defaultValue","value","disabled","readOnly","upHandler","downHandler","keyboard","controls","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep"],Ce=function(t,r){return t||r.isEmpty()?r.toString():r.toNumber()},_e=function(t){var r=S(t);return r.isInvalidate()?null:r},lt=v.exports.forwardRef(function(e,t){var r,s=e.prefixCls,i=s===void 0?"rc-input-number":s,l=e.className,g=e.style,c=e.min,p=e.max,h=e.step,f=h===void 0?1:h,m=e.defaultValue,N=e.value,I=e.disabled,R=e.readOnly,M=e.upHandler,E=e.downHandler,K=e.keyboard,A=e.controls,Ae=A===void 0?!0:A,oe=e.stringMode,O=e.parser,T=e.formatter,C=e.precision,_=e.decimalSeparator,X=e.onChange,Y=e.onInput,z=e.onPressEnter,J=e.onStep,Te=ze(e,ot),le="".concat(i,"-input"),G=v.exports.useRef(null),Be=v.exports.useState(!1),ce=H(Be,2),fe=ce[0],de=ce[1],y=v.exports.useRef(!1),B=v.exports.useRef(!1),F=v.exports.useRef(!1),Fe=v.exports.useState(function(){return S(N!=null?N:m)}),ve=H(Fe,2),d=ve[0],me=ve[1];function $e(a){N===void 0&&me(a)}var Q=v.exports.useCallback(function(a,n){if(!n)return C>=0?C:Math.max(U(a),U(f))},[C,f]),Z=v.exports.useCallback(function(a){var n=String(a);if(O)return O(n);var o=n;return _&&(o=o.replace(_,".")),o.replace(/[^\w.-]+/g,"")},[O,_]),ge=v.exports.useRef(""),pe=v.exports.useCallback(function(a,n){if(T)return T(a,{userTyping:n,input:String(ge.current)});var o=typeof a=="number"?j(a):a;if(!n){var u=Q(o,n);if(se(o)&&(_||u>=0)){var b=_||".";o=W(o,b,u)}}return o},[T,Q,_]),qe=v.exports.useState(function(){var a=m!=null?m:N;return d.isInvalidate()&&["string","number"].includes(Je(a))?Number.isNaN(a)?"":a:pe(d.toString(),!1)}),he=H(qe,2),$=he[0],Ne=he[1];ge.current=$;function q(a,n){Ne(pe(a.isInvalidate()?a.toString(!1):a.toString(!n),n))}var k=v.exports.useMemo(function(){return _e(p)},[p,C]),V=v.exports.useMemo(function(){return _e(c)},[c,C]),Se=v.exports.useMemo(function(){return!k||!d||d.isInvalidate()?!1:k.lessEquals(d)},[k,d]),be=v.exports.useMemo(function(){return!V||!d||d.isInvalidate()?!1:d.lessEquals(V)},[V,d]),Pe=ut(G.current,fe),ye=H(Pe,2),Ue=ye[0],Ke=ye[1],Ie=function(n){return k&&!n.lessEquals(k)?k:V&&!V.lessEquals(n)?V:null},ee=function(n){return!Ie(n)},te=function(n,o){var u=n,b=ee(u)||u.isEmpty();if(!u.isEmpty()&&!o&&(u=Ie(u)||u,b=!0),!R&&!I&&b){var P=u.toString(),re=Q(P,o);return re>=0&&(u=S(W(P,".",re)),ee(u)||(u=S(W(P,".",re,!0)))),u.equals(d)||($e(u),X==null||X(u.isEmpty()?null:Ce(oe,u)),N===void 0&&q(u,o)),u}return d},Oe=st(),Ee=function a(n){if(Ue(),Ne(n),!B.current){var o=Z(n),u=S(o);u.isNaN()||te(u,!0)}Y==null||Y(n),Oe(function(){var b=n;O||(b=n.replace(/。/g,".")),b!==n&&a(b)})},Ge=function(){B.current=!0},He=function(){B.current=!1,Ee(G.current.value)},Le=function(n){Ee(n.target.value)},xe=function(n){var o;if(!(n&&Se||!n&&be)){y.current=!1;var u=S(F.current?Re(f):f);n||(u=u.negate());var b=(d||S(0)).add(u.toString()),P=te(b,!1);J==null||J(Ce(oe,P),{offset:F.current?Re(f):f,type:n?"up":"down"}),(o=G.current)===null||o===void 0||o.focus()}},De=function(n){var o=S(Z($)),u=o;o.isNaN()?u=d:u=te(o,n),N!==void 0?q(d,!1):u.isNaN()||q(u,!1)},We=function(){y.current=!0},je=function(n){var o=n.which,u=n.shiftKey;y.current=!0,u?F.current=!0:F.current=!1,o===L.ENTER&&(B.current||(y.current=!1),De(!1),z==null||z(n)),K!==!1&&!B.current&&[L.UP,L.DOWN].includes(o)&&(xe(L.UP===o),n.preventDefault())},Xe=function(){y.current=!1,F.current=!1},Ye=function(){De(!1),de(!1),y.current=!1};return ne(function(){d.isInvalidate()||q(d,!1)},[C]),ne(function(){var a=S(N);me(a);var n=S(Z($));(!a.equals(n)||!y.current||T)&&q(a,y.current)},[N]),ne(function(){T&&Ke()},[$]),Me("div",{className:ae(i,l,(r={},x(r,"".concat(i,"-focused"),fe),x(r,"".concat(i,"-disabled"),I),x(r,"".concat(i,"-readonly"),R),x(r,"".concat(i,"-not-a-number"),d.isNaN()),x(r,"".concat(i,"-out-of-range"),!d.isInvalidate()&&!ee(d)),r)),style:g,onFocus:function(){de(!0)},onBlur:Ye,onKeyDown:je,onKeyUp:Xe,onCompositionStart:Ge,onCompositionEnd:He,onBeforeInput:We,children:[Ae&&D(it,{prefixCls:i,upNode:M,downNode:E,upDisabled:Se,downDisabled:be,onStep:xe}),D("div",{className:"".concat(le,"-wrap"),children:D("input",{autoComplete:"off",role:"spinbutton","aria-valuemin":c,"aria-valuemax":p,"aria-valuenow":d.isInvalidate()?null:d.toString(),step:f,...Te,ref:et(G,t),className:le,value:$,onChange:Le,disabled:I,readOnly:R})})]})});lt.displayName="InputNumber";export{lt as I};
