import{r as D}from"./react.017637b6.js";import{r as G}from"./prop-types.08c7c3df.js";import{r as L}from"./gud.c1a0efd2.js";import{r as N}from"./warning.07d0fac9.js";var g={exports:{}},R={exports:{}},I;function $(){return I||(I=1,function(q,s){s.__esModule=!0;var h=D.exports;y(h);var P=G(),m=y(P),T=L(),_=y(T),d=N();y(d);function y(t){return t&&t.__esModule?t:{default:t}}function E(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function x(t,r){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r&&(typeof r=="object"||typeof r=="function")?r:t}function M(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof r);t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(t,r):t.__proto__=r)}var w=1073741823;function O(t,r){return t===r?t!==0||1/t===1/r:t!==t&&r!==r}function U(t){var r=[];return{on:function(f){r.push(f)},off:function(f){r=r.filter(function(o){return o!==f})},get:function(){return t},set:function(f,o){t=f,r.forEach(function(b){return b(t,o)})}}}function B(t){return Array.isArray(t)?t[0]:t}function C(t,r){var l,f,o="__create-react-context-"+(0,_.default)()+"__",b=function(v){M(n,v);function n(){var i,e,u;E(this,n);for(var c=arguments.length,a=Array(c),p=0;p<c;p++)a[p]=arguments[p];return u=(i=(e=x(this,v.call.apply(v,[this].concat(a))),e),e.emitter=U(e.props.value),i),x(e,u)}return n.prototype.getChildContext=function(){var e;return e={},e[o]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var u=this.props.value,c=e.value,a=void 0;O(u,c)?a=0:(a=typeof r=="function"?r(u,c):w,a|=0,a!==0&&this.emitter.set(e.value,a))}},n.prototype.render=function(){return this.props.children},n}(h.Component);b.childContextTypes=(l={},l[o]=m.default.object.isRequired,l);var W=function(v){M(n,v);function n(){var i,e,u;E(this,n);for(var c=arguments.length,a=Array(c),p=0;p<c;p++)a[p]=arguments[p];return u=(i=(e=x(this,v.call.apply(v,[this].concat(a))),e),e.state={value:e.getValue()},e.onUpdate=function(j,S){var V=e.observedBits|0;(V&S)!==0&&e.setState({value:e.getValue()})},i),x(e,u)}return n.prototype.componentWillReceiveProps=function(e){var u=e.observedBits;this.observedBits=u??w},n.prototype.componentDidMount=function(){this.context[o]&&this.context[o].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=e??w},n.prototype.componentWillUnmount=function(){this.context[o]&&this.context[o].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[o]?this.context[o].get():t},n.prototype.render=function(){return B(this.props.children)(this.state.value)},n}(h.Component);return W.contextTypes=(f={},f[o]=m.default.object,f),{Provider:b,Consumer:W}}s.default=C,q.exports=s.default}(R,R.exports)),R.exports}var A;function J(){return A||(A=1,function(q,s){s.__esModule=!0;var h=D.exports,P=_(h),m=$(),T=_(m);function _(d){return d&&d.__esModule?d:{default:d}}s.default=P.default.createContext||T.default,q.exports=s.default}(g,g.exports)),g.exports}export{J as r};
