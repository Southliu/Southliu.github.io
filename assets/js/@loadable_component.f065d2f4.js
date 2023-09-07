import{e as t}from"./react.a7da97a2.js";import{i as e,h as n,j as r,k as o}from"./@babel_runtime.d775819b.js";import{r as a}from"./react-is.90ab392a.js";import{h as s}from"./hoist-non-react-statics.b23c5de2.js";var i=t.createContext(),c={},u="PENDING",l="REJECTED";var f=function(t){return t};function d(d){var h=d.defaultResolveComponent,p=void 0===h?f:h,m=d.render,v=d.onLoad;function y(f,d){void 0===d&&(d={});var h=function(t){return"function"==typeof t?{requireAsync:t,resolve:function(){},chunkName:function(){}}:t}(f),y={};function g(t){return d.cacheKey?d.cacheKey(t):h.resolve?h.resolve(t):"static"}function E(t,e,n){var r=d.resolveComponent?d.resolveComponent(t,e):p(t);if(d.resolveComponent&&!a.isValidElementType(r))throw new Error("resolveComponent returned something that is not a React component!");return s(n,r,{preload:!0}),r}var k,C,_=function(t){var e=g(t),n=y[e];return n&&n.status!==l||((n=h.requireAsync(t)).status=u,y[e]=n,n.then((function(){n.status="RESOLVED"}),(function(t){n.status=l}))),n},b=function(t){function a(e){var n;return(n=t.call(this,e)||this).state={result:null,error:null,loading:!0,cacheKey:g(e)},function(t,e){if(!t){var n=new Error("loadable: "+e);throw n.framesToPop=1,n.name="Invariant Violation",n}}(!e.__chunkExtractor||h.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),e.__chunkExtractor?(!1===d.ssr||(h.requireAsync(e).catch((function(){return null})),n.loadSync(),e.__chunkExtractor.addChunk(h.chunkName(e))),r(n)):(!1!==d.ssr&&(h.isReady&&h.isReady(e)||h.chunkName&&c[h.chunkName(e)])&&n.loadSync(),n)}e(a,t),a.getDerivedStateFromProps=function(t,e){var r=g(t);return n({},e,{cacheKey:r,loading:e.loading||e.cacheKey!==r})};var s=a.prototype;return s.componentDidMount=function(){this.mounted=!0;var t=this.getCache();t&&t.status===l&&this.setCache(),this.state.loading&&this.loadAsync()},s.componentDidUpdate=function(t,e){e.cacheKey!==this.state.cacheKey&&this.loadAsync()},s.componentWillUnmount=function(){this.mounted=!1},s.safeSetState=function(t,e){this.mounted&&this.setState(t,e)},s.getCacheKey=function(){return g(this.props)},s.getCache=function(){return y[this.getCacheKey()]},s.setCache=function(t){void 0===t&&(t=void 0),y[this.getCacheKey()]=t},s.triggerOnLoad=function(){var t=this;v&&setTimeout((function(){v(t.state.result,t.props)}))},s.loadSync=function(){if(this.state.loading)try{var t=E(h.requireSync(this.props),this.props,w);this.state.result=t,this.state.loading=!1}catch(e){this.state.error=e}},s.loadAsync=function(){var t=this,e=this.resolveAsync();return e.then((function(e){var n=E(e,t.props,w);t.safeSetState({result:n,loading:!1},(function(){return t.triggerOnLoad()}))})).catch((function(e){return t.safeSetState({error:e,loading:!1})})),e},s.resolveAsync=function(){var t=this.props;t.__chunkExtractor,t.forwardedRef;var e=o(t,["__chunkExtractor","forwardedRef"]);return _(e)},s.render=function(){var t=this.props,e=t.forwardedRef,r=t.fallback;t.__chunkExtractor;var a=o(t,["forwardedRef","fallback","__chunkExtractor"]),s=this.state,i=s.error,c=s.loading,l=s.result;if(d.suspense&&(this.getCache()||this.loadAsync()).status===u)throw this.loadAsync();if(i)throw i;var f=r||d.fallback||null;return c?f:m({fallback:f,result:l,options:d,props:n({},a,{ref:e})})},a}(t.Component),R=(C=function(e){return t.createElement(i.Consumer,null,(function(n){return t.createElement(k,Object.assign({__chunkExtractor:n},e))}))},(k=b).displayName&&(C.displayName=k.displayName+"WithChunkExtractor"),C),w=t.forwardRef((function(e,n){return t.createElement(R,Object.assign({forwardedRef:n},e))}));return w.displayName="Loadable",w.preload=function(t){w.load(t)},w.load=function(t){return _(t)},w}return{loadable:y,lazy:function(t,e){return y(t,n({},e,{suspense:!0}))}}}var h=d({defaultResolveComponent:function(t){return t.__esModule?t.default:t.default||t},render:function(e){var n=e.result,r=e.props;return t.createElement(n,r)}}),p=h.loadable,m=h.lazy,v=d({onLoad:function(t,e){t&&e.forwardedRef&&("function"==typeof e.forwardedRef?e.forwardedRef(t):e.forwardedRef.current=t)},render:function(t){var e=t.result,n=t.props;return n.children?n.children(e):null}}),y=v.loadable,g=v.lazy,E=p;E.lib=y,m.lib=g;export{E as l};
