import{i as u,r as O,a as V}from"./@ctrl_tinycolor.fb5a5473.js";var c=2,M=.16,I=.05,J=.05,K=.15,G=5,R=4,L=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function S(r){var t=r.r,e=r.g,a=r.b,n=O(t,e,a);return{h:n.h*360,s:n.s,v:n.v}}function s(r){var t=r.r,e=r.g,a=r.b;return"#".concat(V(t,e,a,!1))}function Q(r,t,e){var a=e/100,n={r:(t.r-r.r)*a+r.r,g:(t.g-r.g)*a+r.g,b:(t.b-r.b)*a+r.b};return n}function D(r,t,e){var a;return Math.round(r.h)>=60&&Math.round(r.h)<=240?a=e?Math.round(r.h)-c*t:Math.round(r.h)+c*t:a=e?Math.round(r.h)+c*t:Math.round(r.h)-c*t,a<0?a+=360:a>=360&&(a-=360),a}function E(r,t,e){if(r.h===0&&r.s===0)return r.s;var a;return e?a=r.s-M*t:t===R?a=r.s+M:a=r.s+I*t,a>1&&(a=1),e&&t===G&&a>.1&&(a=.1),a<.06&&(a=.06),Number(a.toFixed(2))}function H(r,t,e){var a;return e?a=r.v+J*t:a=r.v-K*t,a>1&&(a=1),Number(a.toFixed(2))}function B(r){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=[],a=u(r),n=G;n>0;n-=1){var i=S(a),g=s(u({h:D(i,n,!0),s:E(i,n,!0),v:H(i,n,!0)}));e.push(g)}e.push(s(a));for(var o=1;o<=R;o+=1){var p=S(a),x=s(u({h:D(p,o),s:E(p,o),v:H(p,o)}));e.push(x)}return t.theme==="dark"?L.map(function(d){var m=d.index,C=d.opacity,b=s(Q(u(t.backgroundColor||"#141414"),u(e[m]),C*100));return b}):e}var h={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1677FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},f={},y={};Object.keys(h).forEach(function(r){f[r]=B(h[r]),f[r].primary=f[r][5],y[r]=B(h[r],{theme:"dark",backgroundColor:"#141414"}),y[r].primary=y[r][5]});var rr=f.blue,l=2,k=.16,U=.05,W=.05,X=.15,q=5,z=4,Y=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function P(r){var t=r.r,e=r.g,a=r.b,n=O(t,e,a);return{h:n.h*360,s:n.s,v:n.v}}function v(r){var t=r.r,e=r.g,a=r.b;return"#".concat(V(t,e,a,!1))}function Z(r,t,e){var a=e/100,n={r:(t.r-r.r)*a+r.r,g:(t.g-r.g)*a+r.g,b:(t.b-r.b)*a+r.b};return n}function N(r,t,e){var a;return Math.round(r.h)>=60&&Math.round(r.h)<=240?a=e?Math.round(r.h)-l*t:Math.round(r.h)+l*t:a=e?Math.round(r.h)+l*t:Math.round(r.h)-l*t,a<0?a+=360:a>=360&&(a-=360),a}function T(r,t,e){if(r.h===0&&r.s===0)return r.s;var a;return e?a=r.s-k*t:t===z?a=r.s+k:a=r.s+U*t,a>1&&(a=1),e&&t===q&&a>.1&&(a=.1),a<.06&&(a=.06),Number(a.toFixed(2))}function j(r,t,e){var a;return e?a=r.v+W*t:a=r.v-X*t,a>1&&(a=1),Number(a.toFixed(2))}function w(r){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=[],a=u(r),n=q;n>0;n-=1){var i=P(a),g=v(u({h:N(i,n,!0),s:T(i,n,!0),v:j(i,n,!0)}));e.push(g)}e.push(v(a));for(var o=1;o<=z;o+=1){var p=P(a),x=v(u({h:N(p,o),s:T(p,o),v:j(p,o)}));e.push(x)}return t.theme==="dark"?Y.map(function(d){var m=d.index,C=d.opacity,b=v(Z(u(t.backgroundColor||"#141414"),u(e[m]),C*100));return b}):e}var F={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1890FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},$={},A={};Object.keys(F).forEach(function(r){$[r]=w(F[r]),$[r].primary=$[r][5],A[r]=w(F[r],{theme:"dark",backgroundColor:"#141414"}),A[r].primary=A[r][5]});export{w as a,rr as b,B as g,h as p};
