import{j as ke,i as Ve,d as x,b as Ye,c as H,_ as ze}from"./@babel_runtime@7.19.0-130d17ca.js";import{r as v}from"./react@18.2.0-44b760b7.js";import{c as ae}from"./classnames@2.3.2-d75d9a59.js";import{A as Je,w as Qe,e as we,B as ne,i as Ze,K as L}from"./rc-util@5.24.4_biqbaboplfbrettd7655fr4n2y-26f345e3.js";import{b as Me,j as D}from"./@ant-design_icons@4.7.0_biqbaboplfbrettd7655fr4n2y-a11e4fd7.js";function ie(){return typeof BigInt=="function"}function w(e){var t=e.trim(),r=t.startsWith("-");r&&(t=t.slice(1)),t=t.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,""),t.startsWith(".")&&(t="0".concat(t));var s=t||"0",i=s.split("."),l=i[0]||"0",g=i[1]||"0";l==="0"&&g==="0"&&(r=!1);var c=r?"-":"";return{negative:r,negativeStr:c,trimStr:s,integerStr:l,decimalStr:g,fullStr:"".concat(c).concat(s)}}function ue(e){var t=String(e);return!Number.isNaN(Number(t))&&t.includes("e")}function U(e){var t=String(e);if(ue(e)){var r=Number(t.slice(t.indexOf("e-")+2)),s=t.match(/\.(\d+)/);return s!=null&&s[1]&&(r+=s[1].length),r}return t.includes(".")&&se(t)?t.length-t.indexOf(".")-1:0}function j(e){var t=String(e);if(ue(e)){if(e>Number.MAX_SAFE_INTEGER)return String(ie()?BigInt(e).toString():Number.MAX_SAFE_INTEGER);if(e<Number.MIN_SAFE_INTEGER)return String(ie()?BigInt(e).toString():Number.MIN_SAFE_INTEGER);t=e.toFixed(U(t))}return w(t).fullStr}function se(e){return typeof e=="number"?!Number.isNaN(e):e?/^\s*-?\d+(\.\d+)?\s*$/.test(e)||/^\s*-?\d+\.\s*$/.test(e)||/^\s*-?\.\d+\s*$/.test(e):!1}function Re(e){var t=typeof e=="number"?j(e):w(e).fullStr,r=t.includes(".");return r?w(t.replace(/(\d)\.(\d)/g,"$1$2.")).fullStr:e+"0"}var et=function(){function e(t){if(Ve(this,e),this.origin="",this.number=void 0,this.empty=void 0,!t&&t!==0||!String(t).trim()){this.empty=!0;return}this.origin=String(t),this.number=Number(t)}return ke(e,[{key:"negate",value:function(){return new e(-this.toNumber())}},{key:"add",value:function(r){if(this.isInvalidate())return new e(r);var s=Number(r);if(Number.isNaN(s))return this;var i=this.number+s;if(i>Number.MAX_SAFE_INTEGER)return new e(Number.MAX_SAFE_INTEGER);if(i<Number.MIN_SAFE_INTEGER)return new e(Number.MIN_SAFE_INTEGER);var l=Math.max(U(this.number),U(s));return new e(i.toFixed(l))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(r){return this.toNumber()===(r==null?void 0:r.toNumber())}},{key:"lessEquals",value:function(r){return this.add(r.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return r?this.isInvalidate()?"":j(this.number):this.origin}}]),e}(),tt=function(){function e(t){if(Ve(this,e),this.origin="",this.negative=void 0,this.integer=void 0,this.decimal=void 0,this.decimalLen=void 0,this.empty=void 0,this.nan=void 0,!t&&t!==0||!String(t).trim()){this.empty=!0;return}if(this.origin=String(t),t==="-"){this.nan=!0;return}var r=t;if(ue(r)&&(r=Number(r)),r=typeof r=="string"?r:j(r),se(r)){var s=w(r);this.negative=s.negative;var i=s.trimStr.split(".");this.integer=BigInt(i[0]);var l=i[1]||"0";this.decimal=BigInt(l),this.decimalLen=l.length}else this.nan=!0}return ke(e,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(r){var s="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(r,"0"));return BigInt(s)}},{key:"negate",value:function(){var r=new e(this.toString());return r.negative=!r.negative,r}},{key:"add",value:function(r){if(this.isInvalidate())return new e(r);var s=new e(r);if(s.isInvalidate())return this;var i=Math.max(this.getDecimalStr().length,s.getDecimalStr().length),l=this.alignDecimal(i),g=s.alignDecimal(i),c=(l+g).toString(),p=w(c),h=p.negativeStr,f=p.trimStr,m="".concat(h).concat(f.padStart(i+1,"0"));return new e("".concat(m.slice(0,-i),".").concat(m.slice(-i)))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(r){return this.toString()===(r==null?void 0:r.toString())}},{key:"lessEquals",value:function(r){return this.add(r.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return r?this.isInvalidate()?"":w("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),e}();function S(e){return ie()?new tt(e):new et(e)}function W(e,t,r){var s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(e==="")return"";var i=w(e),l=i.negativeStr,g=i.integerStr,c=i.decimalStr,p="".concat(t).concat(c),h="".concat(l).concat(g);if(r>=0){var f=Number(c[r]);if(f>=5&&!s){var m=S(e).add("".concat(l,"0.").concat("0".repeat(r)).concat(10-f));return W(m.toString(),t,r,s)}return r===0?h:"".concat(h).concat(t).concat(c.padEnd(r,"0").slice(0,r))}return p===".0"?h:"".concat(h).concat(p)}var rt=200,nt=600;function at(e){var t=e.prefixCls,r=e.upNode,s=e.downNode,i=e.upDisabled,l=e.downDisabled,g=e.onStep,c=v.exports.useRef(),p=v.exports.useRef();p.current=g;var h=function(I,K){I.preventDefault(),p.current(K);function A(){p.current(K),c.current=setTimeout(A,rt)}c.current=setTimeout(A,nt)},f=function(){clearTimeout(c.current)};if(v.exports.useEffect(function(){return f},[]),Je())return null;var m="".concat(t,"-handler"),N=ae(m,"".concat(m,"-up"),x({},"".concat(m,"-up-disabled"),i)),y=ae(m,"".concat(m,"-down"),x({},"".concat(m,"-down-disabled"),l)),R={unselectable:"on",role:"button",onMouseUp:f,onMouseLeave:f};return Me("div",{className:"".concat(m,"-wrap"),children:[D("span",{...R,onMouseDown:function(I){h(I,!0)},"aria-label":"Increase Value","aria-disabled":i,className:N,children:r||D("span",{unselectable:"on",className:"".concat(t,"-handler-up-inner")})}),D("span",{...R,onMouseDown:function(I){h(I,!1)},"aria-label":"Decrease Value","aria-disabled":l,className:y,children:s||D("span",{unselectable:"on",className:"".concat(t,"-handler-down-inner")})})]})}function it(e,t){var r=v.exports.useRef(null);function s(){try{var l=e.selectionStart,g=e.selectionEnd,c=e.value,p=c.substring(0,l),h=c.substring(g);r.current={start:l,end:g,value:c,beforeTxt:p,afterTxt:h}}catch{}}function i(){if(e&&r.current&&t)try{var l=e.value,g=r.current,c=g.beforeTxt,p=g.afterTxt,h=g.start,f=l.length;if(l.endsWith(p))f=l.length-r.current.afterTxt.length;else if(l.startsWith(c))f=c.length;else{var m=c[h-1],N=l.indexOf(m,h-1);N!==-1&&(f=N+1)}e.setSelectionRange(f,f)}catch(y){Qe(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(y.message))}}return[s,i]}const ut=function(){var e=v.exports.useRef(0),t=function(){we.cancel(e.current)};return v.exports.useEffect(function(){return t},[]),function(r){t(),e.current=we(function(){r()})}};var st=["prefixCls","className","style","min","max","step","defaultValue","value","disabled","readOnly","upHandler","downHandler","keyboard","controls","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep"],Ce=function(t,r){return t||r.isEmpty()?r.toString():r.toNumber()},_e=function(t){var r=S(t);return r.isInvalidate()?null:r},ot=v.exports.forwardRef(function(e,t){var r,s=e.prefixCls,i=s===void 0?"rc-input-number":s,l=e.className,g=e.style,c=e.min,p=e.max,h=e.step,f=h===void 0?1:h,m=e.defaultValue,N=e.value,y=e.disabled,R=e.readOnly,M=e.upHandler,I=e.downHandler,K=e.keyboard,A=e.controls,Ae=A===void 0?!0:A,oe=e.stringMode,O=e.parser,T=e.formatter,C=e.precision,_=e.decimalSeparator,X=e.onChange,Y=e.onInput,z=e.onPressEnter,J=e.onStep,Te=Ye(e,st),le="".concat(i,"-input"),G=v.exports.useRef(null),Fe=v.exports.useState(!1),ce=H(Fe,2),fe=ce[0],de=ce[1],E=v.exports.useRef(!1),F=v.exports.useRef(!1),$=v.exports.useRef(!1),$e=v.exports.useState(function(){return S(N!=null?N:m)}),ve=H($e,2),d=ve[0],me=ve[1];function qe(a){N===void 0&&me(a)}var Q=v.exports.useCallback(function(a,n){if(!n)return C>=0?C:Math.max(U(a),U(f))},[C,f]),Z=v.exports.useCallback(function(a){var n=String(a);if(O)return O(n);var o=n;return _&&(o=o.replace(_,".")),o.replace(/[^\w.-]+/g,"")},[O,_]),ge=v.exports.useRef(""),pe=v.exports.useCallback(function(a,n){if(T)return T(a,{userTyping:n,input:String(ge.current)});var o=typeof a=="number"?j(a):a;if(!n){var u=Q(o,n);if(se(o)&&(_||u>=0)){var b=_||".";o=W(o,b,u)}}return o},[T,Q,_]),Be=v.exports.useState(function(){var a=m!=null?m:N;return d.isInvalidate()&&["string","number"].includes(ze(a))?Number.isNaN(a)?"":a:pe(d.toString(),!1)}),he=H(Be,2),q=he[0],Ne=he[1];ge.current=q;function B(a,n){Ne(pe(a.isInvalidate()?a.toString(!1):a.toString(!n),n))}var k=v.exports.useMemo(function(){return _e(p)},[p,C]),V=v.exports.useMemo(function(){return _e(c)},[c,C]),Se=v.exports.useMemo(function(){return!k||!d||d.isInvalidate()?!1:k.lessEquals(d)},[k,d]),be=v.exports.useMemo(function(){return!V||!d||d.isInvalidate()?!1:d.lessEquals(V)},[V,d]),Pe=it(G.current,fe),ye=H(Pe,2),Ue=ye[0],Ke=ye[1],Ie=function(n){return k&&!n.lessEquals(k)?k:V&&!V.lessEquals(n)?V:null},ee=function(n){return!Ie(n)},te=function(n,o){var u=n,b=ee(u)||u.isEmpty();if(!u.isEmpty()&&!o&&(u=Ie(u)||u,b=!0),!R&&!y&&b){var P=u.toString(),re=Q(P,o);return re>=0&&(u=S(W(P,".",re)),ee(u)||(u=S(W(P,".",re,!0)))),u.equals(d)||(qe(u),X==null||X(u.isEmpty()?null:Ce(oe,u)),N===void 0&&B(u,o)),u}return d},Oe=ut(),Ee=function a(n){if(Ue(),Ne(n),!F.current){var o=Z(n),u=S(o);u.isNaN()||te(u,!0)}Y==null||Y(n),Oe(function(){var b=n;O||(b=n.replace(/。/g,".")),b!==n&&a(b)})},Ge=function(){F.current=!0},He=function(){F.current=!1,Ee(G.current.value)},Le=function(n){Ee(n.target.value)},xe=function(n){var o;if(!(n&&Se||!n&&be)){E.current=!1;var u=S($.current?Re(f):f);n||(u=u.negate());var b=(d||S(0)).add(u.toString()),P=te(b,!1);J==null||J(Ce(oe,P),{offset:$.current?Re(f):f,type:n?"up":"down"}),(o=G.current)===null||o===void 0||o.focus()}},De=function(n){var o=S(Z(q)),u=o;o.isNaN()?u=d:u=te(o,n),N!==void 0?B(d,!1):u.isNaN()||B(u,!1)},We=function(n){var o=n.which,u=n.shiftKey;E.current=!0,u?$.current=!0:$.current=!1,o===L.ENTER&&(F.current||(E.current=!1),De(!1),z==null||z(n)),K!==!1&&!F.current&&[L.UP,L.DOWN].includes(o)&&(xe(L.UP===o),n.preventDefault())},je=function(){E.current=!1,$.current=!1},Xe=function(){De(!1),de(!1),E.current=!1};return ne(function(){d.isInvalidate()||B(d,!1)},[C]),ne(function(){var a=S(N);me(a);var n=S(Z(q));(!a.equals(n)||!E.current||T)&&B(a,E.current)},[N]),ne(function(){T&&Ke()},[q]),Me("div",{className:ae(i,l,(r={},x(r,"".concat(i,"-focused"),fe),x(r,"".concat(i,"-disabled"),y),x(r,"".concat(i,"-readonly"),R),x(r,"".concat(i,"-not-a-number"),d.isNaN()),x(r,"".concat(i,"-out-of-range"),!d.isInvalidate()&&!ee(d)),r)),style:g,onFocus:function(){de(!0)},onBlur:Xe,onKeyDown:We,onKeyUp:je,onCompositionStart:Ge,onCompositionEnd:He,children:[Ae&&D(at,{prefixCls:i,upNode:M,downNode:I,upDisabled:Se,downDisabled:be,onStep:xe}),D("div",{className:"".concat(le,"-wrap"),children:D("input",{autoComplete:"off",role:"spinbutton","aria-valuemin":c,"aria-valuemax":p,"aria-valuenow":d.isInvalidate()?null:d.toString(),step:f,...Te,ref:Ze(G,t),className:le,value:q,onChange:Le,disabled:y,readOnly:R})})]})});ot.displayName="InputNumber";export{ot as I};