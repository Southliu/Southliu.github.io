import{r as t}from"./react.a7da97a2.js";import{r as e}from"./prop-types.b55ce3dc.js";import{r as o}from"./gud.e7728936.js";import{r}from"./warning.008c4a7c.js";var n,i,u={exports:{}},s={exports:{}};function a(){return n||(n=1,function(n,i){i.__esModule=!0;var u=t;p(u);var s=p(e()),a=p(o());function p(t){return t&&t.__esModule?t:{default:t}}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}p(r());var h=1073741823;i.default=function(t,e){var o,r,n="__create-react-context-"+(0,a.default)()+"__",i=function(t){function o(){var e,r,n,i;c(this,o);for(var u=arguments.length,s=Array(u),a=0;a<u;a++)s[a]=arguments[a];return e=r=f(this,t.call.apply(t,[this].concat(s))),r.emitter=(n=r.props.value,i=[],{on:function(t){i.push(t)},off:function(t){i=i.filter((function(e){return e!==t}))},get:function(){return n},set:function(t,e){n=t,i.forEach((function(t){return t(n,e)}))}}),f(r,e)}return l(o,t),o.prototype.getChildContext=function(){var t;return(t={})[n]=this.emitter,t},o.prototype.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var o=this.props.value,r=t.value,n=void 0;((i=o)===(u=r)?0!==i||1/i==1/u:i!=i&&u!=u)?n=0:(n="function"==typeof e?e(o,r):h,0!==(n|=0)&&this.emitter.set(t.value,n))}var i,u},o.prototype.render=function(){return this.props.children},o}(u.Component);i.childContextTypes=((o={})[n]=s.default.object.isRequired,o);var p=function(e){function o(){var t,r;c(this,o);for(var n=arguments.length,i=Array(n),u=0;u<n;u++)i[u]=arguments[u];return t=r=f(this,e.call.apply(e,[this].concat(i))),r.state={value:r.getValue()},r.onUpdate=function(t,e){0!=((0|r.observedBits)&e)&&r.setState({value:r.getValue()})},f(r,t)}return l(o,e),o.prototype.componentWillReceiveProps=function(t){var e=t.observedBits;this.observedBits=null==e?h:e},o.prototype.componentDidMount=function(){this.context[n]&&this.context[n].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?h:t},o.prototype.componentWillUnmount=function(){this.context[n]&&this.context[n].off(this.onUpdate)},o.prototype.getValue=function(){return this.context[n]?this.context[n].get():t},o.prototype.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},o}(u.Component);return p.contextTypes=((r={})[n]=s.default.object,r),{Provider:i,Consumer:p}},n.exports=i.default}(s,s.exports)),s.exports}function p(){return i||(i=1,function(e,o){o.__esModule=!0;var r=i(t),n=i(a());function i(t){return t&&t.__esModule?t:{default:t}}o.default=r.default.createContext||n.default,e.exports=o.default}(u,u.exports)),u.exports}export{p as r};
