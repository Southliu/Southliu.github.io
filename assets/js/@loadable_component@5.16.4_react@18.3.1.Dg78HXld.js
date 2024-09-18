import{e as t}from"./react@18.3.1.BUluQGWx.js";import{h as e,g as n,i as r,j as a}from"./@babel_runtime@7.24.5.R2ax19wB.js";import{h as o}from"./hoist-non-react-statics@3.3.2.B_fYWbwq.js";var s=t.createContext(),i={},c="PENDING",u="REJECTED";var l=function(t){return t};function f(f){var d=f.defaultResolveComponent,h=void 0===d?l:d,p=f.render,v=f.onLoad;function y(l,f){void 0===f&&(f={});var d=function(t){return"function"==typeof t?{requireAsync:t,resolve:function(){},chunkName:function(){}}:t}(l),y={};function m(t){return f.cacheKey?f.cacheKey(t):d.resolve?d.resolve(t):"static"}function g(t,e,n){var r=f.resolveComponent?f.resolveComponent(t,e):h(t);return o(n,r,{preload:!0}),r}var E,_,b=function(t){var e=m(t),n=y[e];return n&&n.status!==u||((n=d.requireAsync(t)).status=c,y[e]=n,n.then((function(){n.status="RESOLVED"}),(function(t){n.status=u}))),n},k=function(t){function o(e){var n;return(n=t.call(this,e)||this).state={result:null,error:null,loading:!0,cacheKey:m(e)},function(t,e){if(!t){var n=new Error("loadable: "+e);throw n.framesToPop=1,n.name="Invariant Violation",n}}(!e.__chunkExtractor||d.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),e.__chunkExtractor?(!1===f.ssr||(d.requireAsync(e).catch((function(){return null})),n.loadSync(),e.__chunkExtractor.addChunk(d.chunkName(e))),r(n)):(!1!==f.ssr&&(d.isReady&&d.isReady(e)||d.chunkName&&i[d.chunkName(e)])&&n.loadSync(),n)}e(o,t),o.getDerivedStateFromProps=function(t,e){var r=m(t);return n({},e,{cacheKey:r,loading:e.loading||e.cacheKey!==r})};var s=o.prototype;return s.componentDidMount=function(){this.mounted=!0;var t=this.getCache();t&&t.status===u&&this.setCache(),this.state.loading&&this.loadAsync()},s.componentDidUpdate=function(t,e){e.cacheKey!==this.state.cacheKey&&this.loadAsync()},s.componentWillUnmount=function(){this.mounted=!1},s.safeSetState=function(t,e){this.mounted&&this.setState(t,e)},s.getCacheKey=function(){return m(this.props)},s.getCache=function(){return y[this.getCacheKey()]},s.setCache=function(t){void 0===t&&(t=void 0),y[this.getCacheKey()]=t},s.triggerOnLoad=function(){var t=this;v&&setTimeout((function(){v(t.state.result,t.props)}))},s.loadSync=function(){if(this.state.loading)try{var t=g(d.requireSync(this.props),this.props,R);this.state.result=t,this.state.loading=!1}catch(e){this.state.error=e}},s.loadAsync=function(){var t=this,e=this.resolveAsync();return e.then((function(e){var n=g(e,t.props,R);t.safeSetState({result:n,loading:!1},(function(){return t.triggerOnLoad()}))})).catch((function(e){return t.safeSetState({error:e,loading:!1})})),e},s.resolveAsync=function(){var t=this.props;t.__chunkExtractor,t.forwardedRef;var e=a(t,["__chunkExtractor","forwardedRef"]);return b(e)},s.render=function(){var t=this.props,e=t.forwardedRef,r=t.fallback;t.__chunkExtractor;var o=a(t,["forwardedRef","fallback","__chunkExtractor"]),s=this.state,i=s.error,u=s.loading,l=s.result;if(f.suspense&&(this.getCache()||this.loadAsync()).status===c)throw this.loadAsync();if(i)throw i;var d=r||f.fallback||null;return u?d:p({fallback:d,result:l,options:f,props:n({},o,{ref:e})})},o}(t.Component),C=(_=function(e){return t.createElement(s.Consumer,null,(function(n){return t.createElement(E,Object.assign({__chunkExtractor:n},e))}))},(E=k).displayName&&(_.displayName=E.displayName+"WithChunkExtractor"),_),R=t.forwardRef((function(e,n){return t.createElement(C,Object.assign({forwardedRef:n},e))}));return R.displayName="Loadable",R.preload=function(t){R.load(t)},R.load=function(t){return b(t)},R}return{loadable:y,lazy:function(t,e){return y(t,n({},e,{suspense:!0}))}}}var d=f({defaultResolveComponent:function(t){return t.__esModule?t.default:t.default||t},render:function(e){var n=e.result,r=e.props;return t.createElement(n,r)}}),h=d.loadable,p=d.lazy,v=f({onLoad:function(t,e){t&&e.forwardedRef&&("function"==typeof e.forwardedRef?e.forwardedRef(t):e.forwardedRef.current=t)},render:function(t){var e=t.result,n=t.props;return n.children?n.children(e):null}}),y=v.loadable,m=v.lazy,g=h;g.lib=y,p.lib=m;export{g as l};