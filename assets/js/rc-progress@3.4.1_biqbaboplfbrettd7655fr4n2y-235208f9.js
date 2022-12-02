import{r as x}from"./react@18.2.0-52f219d3.js";import{c as Y}from"./classnames@2.3.2-d75d9a59.js";import{c as G,g as tt,d as W}from"./@babel_runtime@7.20.1-5f192e20.js";import{c as rt}from"./rc-util@5.24.6_biqbaboplfbrettd7655fr4n2y-e98ccc02.js";import{b as et,j as d}from"./@ant-design_cssinjs@1.0.2_biqbaboplfbrettd7655fr4n2y-bf6e9dad.js";var st={className:"",percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,style:{},trailColor:"#D9D9D9",trailWidth:1,gapPosition:"bottom"},at=function(){var t=x.exports.useRef([]),e=x.exports.useRef(null);return x.exports.useEffect(function(){var o=Date.now(),a=!1;t.current.forEach(function(s){if(!!s){a=!0;var l=s.style;l.transitionDuration=".3s, .3s, .3s, .06s",e.current&&o-e.current<100&&(l.transitionDuration="0s, 0s")}}),a&&(e.current=Date.now())}),t.current},M=0,ot=rt();function nt(){var r;return ot?(r=M,M+=1):r="TEST_OR_SSR",r}const ct=function(r){var t=x.exports.useState(),e=G(t,2),o=e[0],a=e[1];return x.exports.useEffect(function(){a("rc_progress_".concat(nt()))},[]),r||o};var it=["id","prefixCls","steps","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","style","className","strokeColor","percent"];function V(r){return+r.replace("%","")}function _(r){var t=r!=null?r:[];return Array.isArray(t)?t:[t]}var D=100,A=function(t,e,o,a,s,l,P,n,v,g){var u=arguments.length>10&&arguments[10]!==void 0?arguments[10]:0,j=o/100*360*((360-l)/360),w=l===0?0:{bottom:0,top:180,left:90,right:-90}[P],p=(100-a)/100*e;return v==="round"&&a!==100&&(p+=g/2,p>=e&&(p=e-.01)),{stroke:typeof n=="string"?n:void 0,strokeDasharray:"".concat(e,"px ").concat(t),strokeDashoffset:p+u,transform:"rotate(".concat(s+j+w,"deg)"),transformOrigin:"0 0",transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",fillOpacity:0}},X=function(t){var e=t.id,o=t.prefixCls,a=t.steps,s=t.strokeWidth,l=t.trailWidth,P=t.gapDegree,n=P===void 0?0:P,v=t.gapPosition,g=t.trailColor,u=t.strokeLinecap,j=t.style,w=t.className,p=t.strokeColor,Z=t.percent,q=tt(t,it),z=ct(e),R="".concat(z,"-gradient"),b=D/2-s/2,L=Math.PI*2*b,T=n>0?90+n/2:-90,k=L*((360-n)/360),O=W(a)==="object"?a:{count:a,space:2},m=O.count,B=O.space,H=A(L,k,0,100,T,n,v,g,u,s),U=_(Z),y=_(p),E=y.find(function(c){return c&&W(c)==="object"}),$=at(),J=function(){var i=0;return U.map(function(h,f){var I=y[f]||y[y.length-1],S=I&&W(I)==="object"?"url(#".concat(R,")"):void 0,C=A(L,k,i,h,T,n,v,I,u,s);return i+=h,d("circle",{className:"".concat(o,"-circle-path"),r:b,cx:0,cy:0,stroke:S,strokeLinecap:u,strokeWidth:s,opacity:h===0?0:1,style:C,ref:function(N){$[f]=N}},f)}).reverse()},K=function(){var i=Math.round(m*(U[0]/100)),h=100/m,f=0;return new Array(m).fill(null).map(function(I,S){var C=S<=i-1?y[0]:g,F=C&&W(C)==="object"?"url(#".concat(R,")"):void 0,N=A(L,k,f,h,T,n,v,C,"butt",s,B);return f+=(k-N.strokeDashoffset+B)*100/k,d("circle",{className:"".concat(o,"-circle-path"),r:b,cx:0,cy:0,stroke:F,strokeWidth:s,opacity:1,style:N,ref:function(Q){$[S]=Q}},S)})};return et("svg",{className:Y("".concat(o,"-circle"),w),viewBox:"".concat(-D/2," ").concat(-D/2," ").concat(D," ").concat(D),style:j,id:e,role:"presentation",...q,children:[E&&d("defs",{children:d("linearGradient",{id:R,x1:"100%",y1:"0%",x2:"0%",y2:"0%",children:Object.keys(E).sort(function(c,i){return V(c)-V(i)}).map(function(c,i){return d("stop",{offset:c,stopColor:E[c]},i)})})}),!m&&d("circle",{className:"".concat(o,"-circle-trail"),r:b,cx:0,cy:0,stroke:g,strokeLinecap:u,strokeWidth:l||s,style:H}),m?K():J()]})};X.defaultProps=st;X.displayName="Circle";export{X as C};