!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.d3=e.d3||{})}(this,function(e){"use strict";function t(e){return function(){return e}}function n(e){return e[0]}function r(e){return e[1]}function i(){this._=null}function f(e){e.U=e.C=e.L=e.R=e.P=e.N=null}function u(e,t){var n=t,r=t.R,i=n.U;i?i.L===n?i.L=r:i.R=r:e._=r,r.U=i,n.U=r,n.R=r.L,n.R&&(n.R.U=n),r.L=n}function s(e,t){var n=t,r=t.L,i=n.U;i?i.L===n?i.L=r:i.R=r:e._=r,r.U=i,n.U=r,n.L=r.R,n.L&&(n.L.U=n),r.R=n}function l(e){for(;e.L;)e=e.L;return e}function a(e,t,n,r){var i=[null,null],f=F.push(i)-1;return i.left=e,i.right=t,n&&h(i,e,t,n),r&&h(i,t,e,r),B[e.index].halfedges.push(f),B[t.index].halfedges.push(f),i}function o(e,t,n){var r=[t,n];return r.left=e,r}function h(e,t,n,r){e[0]||e[1]?e.left===n?e[1]=r:e[0]=r:(e[0]=r,e.left=t,e.right=n)}function c(e,t,n,r,i){var f,u=e[0],s=e[1],l=u[0],a=u[1],o=s[0],h=s[1],c=0,d=1,v=o-l,g=h-a;if(f=t-l,v||!(f>0)){if(f/=v,v<0){if(f<c)return;f<d&&(d=f)}else if(v>0){if(f>d)return;f>c&&(c=f)}if(f=r-l,v||!(f<0)){if(f/=v,v<0){if(f>d)return;f>c&&(c=f)}else if(v>0){if(f<c)return;f<d&&(d=f)}if(f=n-a,g||!(f>0)){if(f/=g,g<0){if(f<c)return;f<d&&(d=f)}else if(g>0){if(f>d)return;f>c&&(c=f)}if(f=i-a,g||!(f<0)){if(f/=g,g<0){if(f>d)return;f>c&&(c=f)}else if(g>0){if(f<c)return;f<d&&(d=f)}return!(c>0||d<1)||(c>0&&(e[0]=[l+c*v,a+c*g]),d<1&&(e[1]=[l+d*v,a+d*g]),!0)}}}}}function d(e,t,n,r,i){var f=e[1];if(f)return!0;var u,s,l=e[0],a=e.left,o=e.right,h=a[0],c=a[1],d=o[0],v=o[1],g=(h+d)/2,C=(c+v)/2;if(v===c){if(g<t||g>=r)return;if(h>d){if(l){if(l[1]>=i)return}else l=[g,n];f=[g,i]}else{if(l){if(l[1]<n)return}else l=[g,i];f=[g,n]}}else if(u=(h-d)/(v-c),s=C-u*g,u<-1||u>1)if(h>d){if(l){if(l[1]>=i)return}else l=[(n-s)/u,n];f=[(i-s)/u,i]}else{if(l){if(l[1]<n)return}else l=[(i-s)/u,i];f=[(n-s)/u,n]}else if(c<v){if(l){if(l[0]>=r)return}else l=[t,u*t+s];f=[r,u*r+s]}else{if(l){if(l[0]<t)return}else l=[r,u*r+s];f=[t,u*t+s]}return e[0]=l,e[1]=f,!0}function v(e,t,n,r){for(var i,f=F.length;f--;)d(i=F[f],e,t,n,r)&&c(i,e,t,n,r)&&(Math.abs(i[0][0]-i[1][0])>I||Math.abs(i[0][1]-i[1][1])>I)||delete F[f]}function g(e){return B[e.index]={site:e,halfedges:[]}}function C(e,t){var n=e.site,r=t.left,i=t.right;return n===i&&(i=r,r=n),i?Math.atan2(i[1]-r[1],i[0]-r[0]):(n===r?(r=t[1],i=t[0]):(r=t[0],i=t[1]),Math.atan2(r[0]-i[0],i[1]-r[1]))}function p(e,t){return t[+(t.left!==e.site)]}function L(e,t){return t[+(t.left===e.site)]}function R(){for(var e,t,n,r,i=0,f=B.length;i<f;++i)if((e=B[i])&&(r=(t=e.halfedges).length)){var u=new Array(r),s=new Array(r);for(n=0;n<r;++n)u[n]=n,s[n]=C(e,F[t[n]]);for(u.sort(function(e,t){return s[t]-s[e]}),n=0;n<r;++n)s[n]=t[u[n]];for(n=0;n<r;++n)t[n]=s[n]}}function y(e,t,n,r){var i,f,u,s,l,a,h,c,d,v,g,C,R=B.length,y=!0;for(i=0;i<R;++i)if(f=B[i]){for(u=f.site,l=f.halfedges,s=l.length;s--;)F[l[s]]||l.splice(s,1);for(s=0,a=l.length;s<a;)v=L(f,F[l[s]]),g=v[0],C=v[1],h=p(f,F[l[++s%a]]),c=h[0],d=h[1],(Math.abs(g-c)>I||Math.abs(C-d)>I)&&(l.splice(s,0,F.push(o(u,v,Math.abs(g-e)<I&&r-C>I?[e,Math.abs(c-e)<I?d:r]:Math.abs(C-r)<I&&n-g>I?[Math.abs(d-r)<I?c:n,r]:Math.abs(g-n)<I&&C-t>I?[n,Math.abs(c-n)<I?d:t]:Math.abs(C-t)<I&&g-e>I?[Math.abs(d-t)<I?c:e,t]:null))-1),++a);a&&(y=!1)}if(y){var b,M,U,x=1/0;for(i=0,y=null;i<R;++i)(f=B[i])&&(u=f.site,b=u[0]-e,M=u[1]-t,U=b*b+M*M,U<x&&(x=U,y=f));if(y){var N=[e,t],P=[e,r],_=[n,r],k=[n,t];y.halfedges.push(F.push(o(u=y.site,N,P))-1,F.push(o(u,P,_))-1,F.push(o(u,_,k))-1,F.push(o(u,k,N))-1)}}for(i=0;i<R;++i)(f=B[i])&&(f.halfedges.length||delete B[i])}function b(){f(this),this.x=this.y=this.arc=this.site=this.cy=null}function M(e){var t=e.P,n=e.N;if(t&&n){var r=t.site,i=e.site,f=n.site;if(r!==f){var u=i[0],s=i[1],l=r[0]-u,a=r[1]-s,o=f[0]-u,h=f[1]-s,c=2*(l*h-a*o);if(!(c>=-J)){var d=l*l+a*a,v=o*o+h*h,g=(h*d-a*v)/c,C=(l*v-o*d)/c,p=G.pop()||new b;p.arc=e,p.site=i,p.x=g+u,p.y=(p.cy=C+s)+Math.sqrt(g*g+C*C),e.circle=p;for(var L=null,R=D._;R;)if(p.y<R.y||p.y===R.y&&p.x<=R.x){if(!R.L){L=R.P;break}R=R.L}else{if(!R.R){L=R;break}R=R.R}D.insert(L,p),L||(E=p)}}}}function U(e){var t=e.circle;t&&(t.P||(E=t.N),D.remove(t),G.push(t),f(t),e.circle=null)}function x(){f(this),this.edge=this.site=this.circle=null}function N(e){var t=H.pop()||new x;return t.site=e,t}function P(e){U(e),O.remove(e),H.push(e),f(e)}function _(e){var t=e.circle,n=t.x,r=t.cy,i=[n,r],f=e.P,u=e.N,s=[e];P(e);for(var l=f;l.circle&&Math.abs(n-l.circle.x)<I&&Math.abs(r-l.circle.cy)<I;)f=l.P,s.unshift(l),P(l),l=f;s.unshift(l),U(l);for(var o=u;o.circle&&Math.abs(n-o.circle.x)<I&&Math.abs(r-o.circle.cy)<I;)u=o.N,s.push(o),P(o),o=u;s.push(o),U(o);var c,d=s.length;for(c=1;c<d;++c)o=s[c],l=s[c-1],h(o.edge,l.site,o.site,i);l=s[0],o=s[d-1],o.edge=a(l.site,o.site,null,i),M(l),M(o)}function k(e){for(var t,n,r,i,f=e[0],u=e[1],s=O._;s;)if(r=m(s,u)-f,r>I)s=s.L;else{if(i=f-w(s,u),!(i>I)){r>-I?(t=s.P,n=s):i>-I?(t=s,n=s.N):t=n=s;break}if(!s.R){t=s;break}s=s.R}g(e);var l=N(e);if(O.insert(t,l),t||n){if(t===n)return U(t),n=N(t.site),O.insert(l,n),l.edge=n.edge=a(t.site,l.site),M(t),void M(n);if(!n)return void(l.edge=a(t.site,l.site));U(t),U(n);var o=t.site,c=o[0],d=o[1],v=e[0]-c,C=e[1]-d,p=n.site,L=p[0]-c,R=p[1]-d,y=2*(v*R-C*L),b=v*v+C*C,x=L*L+R*R,P=[(R*b-C*x)/y+c,(v*x-L*b)/y+d];h(n.edge,o,p,P),l.edge=a(o,e,null,P),n.edge=a(e,p,null,P),M(t),M(n)}}function m(e,t){var n=e.site,r=n[0],i=n[1],f=i-t;if(!f)return r;var u=e.P;if(!u)return-(1/0);n=u.site;var s=n[0],l=n[1],a=l-t;if(!a)return s;var o=s-r,h=1/f-1/a,c=o/a;return h?(-c+Math.sqrt(c*c-2*h*(o*o/(-2*a)-l+a/2+i-f/2)))/h+r:(r+s)/2}function w(e,t){var n=e.N;if(n)return m(n,t);var r=e.site;return r[1]===t?r[0]:1/0}function A(e,t,n){return(e[0]-n[0])*(t[1]-e[1])-(e[0]-t[0])*(n[1]-e[1])}function j(e,t){return t[1]-e[1]||t[0]-e[0]}function q(e,t){var n,r,f,u=e.sort(j).pop();for(F=[],B=new Array(e.length),O=new i,D=new i;;)if(f=E,u&&(!f||u[1]<f.y||u[1]===f.y&&u[0]<f.x))u[0]===n&&u[1]===r||(k(u),n=u[0],r=u[1]),u=e.pop();else{if(!f)break;_(f.arc)}if(R(),t){var s=+t[0][0],l=+t[0][1],a=+t[1][0],o=+t[1][1];v(s,l,a,o),y(s,l,a,o)}this.edges=F,this.cells=B,O=D=F=B=null}function z(){function e(e){return new q(e.map(function(t,n){var r=[Math.round(i(t,n,e)/I)*I,Math.round(f(t,n,e)/I)*I];return r.index=n,r.data=t,r}),u)}var i=n,f=r,u=null;return e.polygons=function(t){return e(t).polygons()},e.links=function(t){return e(t).links()},e.triangles=function(t){return e(t).triangles()},e.x=function(n){return arguments.length?(i="function"==typeof n?n:t(+n),e):i},e.y=function(n){return arguments.length?(f="function"==typeof n?n:t(+n),e):f},e.extent=function(t){return arguments.length?(u=null==t?null:[[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]],e):u&&[[u[0][0],u[0][1]],[u[1][0],u[1][1]]]},e.size=function(t){return arguments.length?(u=null==t?null:[[0,0],[+t[0],+t[1]]],e):u&&[u[1][0]-u[0][0],u[1][1]-u[0][1]]},e}i.prototype={constructor:i,insert:function(e,t){var n,r,i;if(e){if(t.P=e,t.N=e.N,e.N&&(e.N.P=t),e.N=t,e.R){for(e=e.R;e.L;)e=e.L;e.L=t}else e.R=t;n=e}else this._?(e=l(this._),t.P=null,t.N=e,e.P=e.L=t,n=e):(t.P=t.N=null,this._=t,n=null);for(t.L=t.R=null,t.U=n,t.C=!0,e=t;n&&n.C;)r=n.U,n===r.L?(i=r.R,i&&i.C?(n.C=i.C=!1,r.C=!0,e=r):(e===n.R&&(u(this,n),e=n,n=e.U),n.C=!1,r.C=!0,s(this,r))):(i=r.L,i&&i.C?(n.C=i.C=!1,r.C=!0,e=r):(e===n.L&&(s(this,n),e=n,n=e.U),n.C=!1,r.C=!0,u(this,r))),n=e.U;this._.C=!1},remove:function(e){e.N&&(e.N.P=e.P),e.P&&(e.P.N=e.N),e.N=e.P=null;var t,n,r,i=e.U,f=e.L,a=e.R;if(n=f?a?l(a):f:a,i?i.L===e?i.L=n:i.R=n:this._=n,f&&a?(r=n.C,n.C=e.C,n.L=f,f.U=n,n!==a?(i=n.U,n.U=e.U,e=n.R,i.L=e,n.R=a,a.U=n):(n.U=i,i=n,e=n.R)):(r=e.C,e=n),e&&(e.U=i),!r){if(e&&e.C)return void(e.C=!1);do{if(e===this._)break;if(e===i.L){if(t=i.R,t.C&&(t.C=!1,i.C=!0,u(this,i),t=i.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,s(this,t),t=i.R),t.C=i.C,i.C=t.R.C=!1,u(this,i),e=this._;break}}else if(t=i.L,t.C&&(t.C=!1,i.C=!0,s(this,i),t=i.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,u(this,t),t=i.L),t.C=i.C,i.C=t.L.C=!1,s(this,i),e=this._;break}t.C=!0,e=i,i=i.U}while(!e.C);e&&(e.C=!1)}}};var E,O,B,D,F,G=[],H=[],I=1e-6,J=1e-12;q.prototype={constructor:q,polygons:function(){var e=this.edges;return this.cells.map(function(t){var n=t.halfedges.map(function(n){return p(t,e[n])});return n.data=t.site.data,n})},triangles:function(){var e=[],t=this.edges;return this.cells.forEach(function(n,r){for(var i,f=n.site,u=n.halfedges,s=-1,l=u.length,a=t[u[l-1]],o=a.left===f?a.right:a.left;++s<l;)i=o,a=t[u[s]],o=a.left===f?a.right:a.left,r<i.index&&r<o.index&&A(f,i,o)<0&&e.push([f.data,i.data,o.data])}),e},links:function(){return this.edges.filter(function(e){return e.right}).map(function(e){return{source:e.left.data,target:e.right.data}})}},e.voronoi=z,Object.defineProperty(e,"__esModule",{value:!0})});
function glassFilter(options){
  var  vctx = options.original_context;
  var  ictx = options.image_context;
  var  canvas = options.original_canvas;
  var image_canvas = options.image_canvas;
  var width = options.width;
  var height = options.height;
  var img_data = options.image_data;
  var getPixelDataAt = options.getPixelDataFunc;
  var n_points = options.number_of_points;
  vctx.clearRect(0, 0, width, height);
  var voronoi = d3.voronoi()
      .extent([[-1, -1], [width + 1, height + 1]]);
  var sites = [];
  for(var i=0;i<n_points;i++){
    sites.push([Math.random() * width, Math.random() * height]);
  }
  var diagram = voronoi(sites);
  var polygons = diagram.polygons();
  var polygonc = 0;
  polygons.forEach( function (polygon){
  point = sites[polygonc];
  colorToPaint = getPixelDataAt(Math.round(point[0]),Math.round(point[1]),image_canvas.width);
  color = "rgb("+colorToPaint[0]+","+colorToPaint[1]+","+colorToPaint[2]+")";
  vctx.beginPath();
    polygon.forEach(function(vertex){
        vctx.lineTo(vertex[0],vertex[1]);
      });
    vctx.closePath();
    vctx.strokeStyle = (typeof(options.strokeColor) !== 'undefined')? options.strokeColor: color;
    vctx.fillStyle = color;
    vctx.stroke();
    vctx.fill();
    polygonc++;
  });
  if(options.displayCentroids){
    vctx.fillStyle = "black";
    sites.forEach(function(dots){
      vctx.fillRect(dots[0],dots[1],2,2);
      });
  }
}
