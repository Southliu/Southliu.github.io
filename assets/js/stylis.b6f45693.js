var e="comm",r="rule",n="decl",c=Math.abs,a=String.fromCharCode;function t(e){return e.trim()}function u(e,r,n){return e.replace(r,n)}function s(e,r){return e.indexOf(r)}function i(e,r){return 0|e.charCodeAt(r)}function f(e,r,n){return e.slice(r,n)}function o(e){return e.length}function l(e,r){return r.push(e),e}var h=1,b=1,k=0,d=0,p=0,v="";function g(e,r,n,c,a,t,u,s){return{value:e,root:r,parent:n,type:c,props:a,children:t,line:h,column:b,length:u,return:"",siblings:s}}function w(){return p=d<k?i(v,d++):0,b++,10===p&&(b=1,h++),p}function m(){return i(v,d)}function y(){return d}function C(e,r){return f(v,e,r)}function x(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function j(e){return t(C(d-1,O(91===e?e+2:40===e?e+1:e)))}function A(e){for(;(p=m())&&p<33;)w();return x(e)>2||x(p)>3?"":" "}function M(e,r){for(;--r&&w()&&!(p<48||p>102||p>57&&p<65||p>70&&p<97););return C(e,y()+(r<6&&32==m()&&32==w()))}function O(e){for(;w();)switch(p){case e:return d;case 34:case 39:34!==e&&39!==e&&O(p);break;case 40:41===e&&O(e);break;case 92:w()}return d}function S(e,r){for(;w()&&e+p!==57&&(e+p!==84||47!==m()););return"/*"+C(r,d-1)+"*"+a(47===e?e:w())}function q(e){for(;!x(m());)w();return C(e,d)}function z(e){return function(e){return v="",e}(B("",null,null,null,[""],e=function(e){return h=b=1,k=o(v=e),d=0,[]}(e),0,[0],e))}function B(e,r,n,c,t,f,k,g,C){for(var x=0,O=0,z=k,G=0,H=0,I=0,J=1,K=1,L=1,N=0,P="",Q=t,R=f,T=c,U=P;K;)switch(I=N,N=w()){case 40:if(108!=I&&58==i(U,z-1)){-1!=s(U+=u(j(N),"&","&\f"),"&\f")&&(L=-1);break}case 34:case 39:case 91:U+=j(N);break;case 9:case 10:case 13:case 32:U+=A(I);break;case 92:U+=M(y()-1,7);continue;case 47:switch(m()){case 42:case 47:l(E(S(w(),y()),r,n,C),C);break;default:U+="/"}break;case 123*J:g[x++]=o(U)*L;case 125*J:case 59:case 0:switch(N){case 0:case 125:K=0;case 59+O:-1==L&&(U=u(U,/\f/g,"")),H>0&&o(U)-z&&l(H>32?F(U+";",c,n,z-1,C):F(u(U," ","")+";",c,n,z-2,C),C);break;case 59:U+=";";default:if(l(T=D(U,r,n,x,O,t,g,P,Q=[],R=[],z,f),f),123===N)if(0===O)B(U,r,T,T,Q,f,z,g,R);else switch(99===G&&110===i(U,3)?100:G){case 100:case 108:case 109:case 115:B(e,T,T,c&&l(D(e,T,T,0,0,t,g,P,t,Q=[],z,R),R),t,R,z,g,c?Q:R);break;default:B(U,T,T,T,[""],R,0,g,R)}}x=O=H=0,J=L=1,P=U="",z=k;break;case 58:z=1+o(U),H=I;default:if(J<1)if(123==N)--J;else if(125==N&&0==J++&&125==(p=d>0?i(v,--d):0,b--,10===p&&(b=1,h--),p))continue;switch(U+=a(N),N*J){case 38:L=O>0?1:(U+="\f",-1);break;case 44:g[x++]=(o(U)-1)*L,L=1;break;case 64:45===m()&&(U+=j(w())),G=m(),O=z=o(P=U+=q(y())),N++;break;case 45:45===I&&2==o(U)&&(J=0)}}return f}function D(e,n,a,s,i,o,l,h,b,k,d,p){for(var v=i-1,w=0===i?o:[""],m=function(e){return e.length}(w),y=0,C=0,x=0;y<s;++y)for(var j=0,A=f(e,v+1,v=c(C=l[y])),M=e;j<m;++j)(M=t(C>0?w[j]+" "+A:u(A,/&\f/g,w[j])))&&(b[x++]=M);return g(e,n,a,0===i?r:h,b,k,d,p)}function E(r,n,c,t){return g(r,n,c,e,a(p),f(r,2,-2),0,t)}function F(e,r,c,a,t){return g(e,r,c,n,f(e,0,a),f(e,a+1,-1),a,t)}function G(e,r){for(var n="",c=0;c<e.length;c++)n+=r(e[c],c,e,r)||"";return n}function H(c,a,t,u){switch(c.type){case"@layer":if(c.children.length)break;case"@import":case n:return c.return=c.return||c.value;case e:return"";case"@keyframes":return c.return=c.value+"{"+G(c.children,u)+"}";case r:if(!o(c.value=c.props.join(",")))return""}return o(t=G(c.children,u))?c.return=c.value+"{"+t+"}":""}export{H as a,z as c,G as s};
