/* version:0.9.beta.min
 * mail:343830384@163.com
 * http://59.110.153.171
 */
(function(){var A=function(x){var t=typeof(x),k;if(t=="string"){return 1}if(t=="boolean"){return 2}if(t=="number"){return 3}if(x instanceof Array){return 4}if(t=="object"){for(k in x){return 5}}return 6};var Z=function(o,z,j,c,f){var n=o.childNodes,w=n.length,i,y,p,i=0,a,b=c.n;if(f){y=o.getAttribute(U[4]);if(y){y=y.trim(),y?(c.n++,j[y]={f:c.n,g:-1},a=j[y],z.push([y,a,o]),j=j[y],b=0):null}}while(i<w){if(n[i].nodeType==1){y=n[i].getAttribute(U[4]),p=1;if(y){y=y.trim(),y?(c.n++,j[y]={f:c.n,g:b},a=j[y],z.push([y,a,n[i]]),Z(n[i],z,a,c),p=0):null}p?Z(n[i],z,j,c):null}i++}};var C=function(a,b){var c=b.length;while(c--){if(a==b[c]){break}}return c};var D=function(b,s,e){var a=[],c=b.length,i=0;e?null:e=c;while(s<e){a[i]=b[s],s++,i++}return a};var E=function(d,a,c){var e=d.length,i=0,s="",b=".";c!=undefined?e=c:null;while(i<e){if(i==e-1){b=""}a?s+=d[i]:s+=(d[i]+b),i++}return s};var F={"$_a":1,"$_b":1,"$_c":1,"$_d":1,"$_e":1,"$_f":1,"$_g":1,"$_h":1,"$_i":1,"$_j":1,"$_k":1,"$_l":1,"$_m":1};var G=function(a,b,c){var k,v;for(k in b){v=b[k];if(v instanceof Array){a[k]=[],H(a[k],v,c)}else{if(!F[k]){a[k]={},G(a[k],v,c)}}}};var H=function(a,b,c){var d=b.length,k,v;while(d--){v=b[d],a[d]={},a[d].$_a=v.$_a,a[d].$_b=v.$_b,a[d].$_d=c[v.$_c],a[d].$_h=c[v.$_i],a[d].$_e=c[v.$_g],a[d].$_f=v.$_f,a[d].$_j=c[v.$_k],a[d].$_l=c[v.$_m];for(k in v){if(!F[k]){o1[k]={},G(o1[k],v,c)}}}};var I=function(a,b){var d,e=b.length,i,f,g,h=[],c;while(e--){d=b[e].length,i=0,f=0;while(i<d){if(a[i]==b[e][i]){f++}else{break}i++}h[e]=f}d=h.length,f=-1,i=0;while(d--){h[d]?(h[d]>i?(i=h[d],f=d):null):null}if(f==-1){return}b=D(a,h[f]-1),i=0,d=b.length,h=[],g=-1;while(i<d){c=b[i];if(c){b[i+1]!=undefined?h.push(b[i+1]):null,g++}else{break}i+=2}if(g!=-1){return{a:g,b:f,c:h}}};var J=function(a){if(!a){return}var b=a.length,c=[],d;if(b){while(b--){d=a[b].name;if(!M[3].test(d)){c.push([d,a[b].value])}}return c}return null};var K=function(a,b,c){var d,e,f,g,h,i=0,j=0;b?null:(b={},c=[]),e=a.nodeName,b.a={},b.a.a=e,b.a.b=J(a.attributes),c.push(a),d=a.childNodes;if(d){h=d.length}else{return}b.b=[];while(i<h){f=d[i].nodeType,f===1?(b.b[j]={},K(d[i],b.b[j],c),j++):null,f===3?(g=d[i].textContent.trim(),g?(g=g.replace(M[1],""),b.b[j]=g,j++,c.push(d[i])):null):null,i++}return[b,c]};var L=function(a,b,c,d){var e,f,g=a.b,h,j,k,i,n;e=a.a.a,h=document.createElement(e),f=a.a.b;if(f){n=f.length;while(n--){h.setAttribute(f[n][0],f[n][1])}}d?b.appendChild(h):c=[],c.push(h);if(!g){return}n=g.length,i=0;while(i<n){j=g[i];if(A(j)==1){k=document.createTextNode(j),c.push(k),h.appendChild(k)}else{L(j,h,c,1)}i++}return[h,c]};var M=[/(\{\{[^{}]+\}\})/,/(\{\{[^{}]+\}\})/g,/({{|}})/g,/^(e\-)/,/(\>\=|\<\=|\>|\<|\=\=\=|\=\=|\=)/,];var N=function(s){var a=[],d=s.length,i=0,c,t="",f=1,k,g,o,b;while(i<d){c=s[i];if(f&&c=="="){a.push(t),a.push(c),t="",f=0,k=1,i++;continue}if(k&&c=="?"){t=t.split(M[4]),o=t.length,b=0;while(b<o){a.push(t[b]),b++}t="",k=0,a.push(c),g=1,i++,o=i;continue}if(g&&c==")"&&s[i+1]==":"){a.push(s.slice(o+1,i)),a.push(":"),a.push(s.slice(i+3,-1));break}t+=c,i++;if(i==d){a.push(t)}}return a};var O={"=":0,"==":0,"===":0,">=":1,"<=":2,">":3,"<":4};var P=function(a){var b=N(a),c=b.length,i=0,d=[];if(c>2){c=b.length,d.push(b[2].replace(M[2],"").trim());if(c==9){d.push(O[b[3]])}while(i<c){i%2||i==2?null:d.push(b[i].trim()),i++}return d}};var Q=function(a){var b,c,d=[],v;b=a.split(";"),c=b.length;while(c--){v=P(b[c]);if(v){d.push(v)}}if(d.length){return d}};var R=function(a,b,c){var d=a.getAttribute(U[3]),e;if(d){d=d.trim(),a.removeAttribute(U[3]);if(d){d=Q(d);if(d){e=d.length;while(e--){if(!b[d[e][0]]){b[d[e][0]]=[]}b[d[e][0]].push({$_e:c?null:a,$_g:c?C(a,c):null,$_f:D(d[e],0)})}}}}};var S=function(a,b,c){var d=a.getAttribute(U[2]),e;if(d){e=d.trim(),a.removeAttribute(U[2]);if(e){if(!b[e]){b[e]=[]}b[e].push({$_h:c?null:a,$_i:c?C(a,c):null});return 0}}return 1};var T={"e-input":"$_j","e-change":"$_l","$_j":"$_k","$_l":"$_m"};var U=["e-id","e-base","e-html","e-attr","e-for","prototype"];var V=function(a,b,c){var d=a.attributes,i=d.length,n,s,v,h,j;while(i--){n=d[i],s=n.name,h=T[s];if(h){v=n.value.trim(),a.removeAttribute(s);if(v){if(!b[v]){b[v]=[]}j={},j[h]=c?null:a,j[T[h]]=c?C(a,c):null,b[v].push(j)}}}};var W=function(s){var o,d,c,i,a;o=document.createDocumentFragment(),d=document.createElement("div"),d.innerHTML=s.trim(),c=d.childNodes,a=c.length,i=0;while(i<a){o.appendChild(c[0]),i++}return o};var B=function(o,a){var i,c;if(o){i=o.length;while(i--){c=a[o[i][0]].d,B(c,a);delete a[o[i][0]]}}};var X=function(a){var b=[],c=this;c.f=1,c.g=-1,c.h={},c.i=[],c.j=[],c.k=[0,1,2,3],c.l={},c.m=[[]],c.n=a.data,c.n?null:c.n={},c.a(),c.o={$_data:c.n,$_setToSelf:c.b,$_setToGlobal:c.c,$_watcher:c.d,$_watcherFor:c.e},c.p={};if(a.el){A(a.el)==1?(c.o.$_el=W(a.el),c.r(c.o.$_el,c.h)):c.r(a.el,null)}if(a.watcher){c.G(a.watcher)}if(a.watcherFor){c.F(a.watcherFor)}c.t(c.n,b,1),b=null;if(a.created){a.created(c.o)}return c.n};X[U[5]].a=function(){var z=this;z.b=function(a,c){var d={},b;b=A(c)==1?W(c):c,z.r(b,d,1),z.t(a,[],0,d,a),d=null;return b};z.c=function(v){var d=z.h,f=1,a,t,b,c,i,e;a=z.n,t=A(v.el),v.base?c=v.base.trim():c="";if(t==1){v.el=W(v.el)}if(c){i=0,b=c.split("."),e=b.length;while(i<e){d=d[b[i]],a=a[b[i]],i++}t=A(v.a);if(!z.k[t]){d[v.key]={},d=d[v.key],c+="."+v.key}b.push(v.key)}else{b=[v.key],c=v.key,d[v.key]={},d=d[v.key]}a[v.key]=v.data,z.r(v.el,d,1,c),z.w(a,v.key,D(b,0),c,5),z.t(a[v.key],b,2),d=null,a=null;return v.el};z.d=function(o){z.G(o)};z.e=function(o){z.F(o)}};X[U[5]].G=function(c){var a,v,b=this;b.D?null:b.D={};for(a in c){v=c[a];if(v){b.D[a.trim()]=v}}};X[U[5]].F=function(c){var a,v,b=this;b.E?null:b.E={};for(a in c){v=c[a];if(v){b.E[a.trim()]=v}}};X[U[5]].r=function(a,b,c,d){if(!a){return}var e=a.childNodes,L=e.length,t=this;!b?(b=t.q(a,t.h,"",d),c=b[1],b=b[0]):null;if(!L){return}var v,f,i=0,g,h,j,k,l,m,n=b;while(i<L){e[i]?f=e[i].nodeType:f=-1;if(f==3){v=e[i].nodeValue.trim(),g=v.split(M[1]),j=g.length;if(j>1){k=0,l=[],m=[];while(k<j){if(M[1].test(g[k])){l.push(k),h=g[k].replace(M[2],""),g[k]=h,m.push(h)}k++}j=m.length,k=0;while(k<j){if(!n[m[k]]){n[m[k]]=[]}n[m[k]].push({$_d:!t.H?e[i]:null,$_c:t.H?C(e[i],t.I):null,$_a:l,$_b:g});k++}}}else{if(f==1){b=t.q(e[i],n,c,d),t.f?t.r(e[i],b[0],b[1],d):null}}i++}};X[U[5]].q=function(b,c,d,e){var a,f=1,l,i,g=1,t=this;t.f=1,a=b.getAttribute(U[1]);if(a){a=a.trim(),b.removeAttribute(U[1]);if(a){d?(d+="."+a):d+=a,c[a]={},c=c[a],f=0}}if(!e){a=b.getAttribute(U[4]);if(a&&f){a=a.trim();if(a){t.H=1,g=0,t.g++,t.m[t.g]=[],t.j[t.g]=[];if(d){t.m[t.g]=d.split(".")}var h={},j=[],k={n:-1},m=Z(b,j,h,k,1),n,o,p,q,r,s,u,v,w,x,y,z;l=j.length,i=0,x=t.m[t.g];while(i<l){k={},v=[],w=[],s=i,u=0,n=j[i][1],o=j[i][0],r=j[i][2],p=n.f,q=n.g;if(i==0){n.e=r.parentNode,n.e.removeChild(r)}s++;while(s<l){j[s][1].g==p?(j[s][1].d=u,u++,w.push(s)):null,s++}s=u;while(s--){z=j[w[s]][2].parentNode,z.removeChild(j[w[s]][2]),v.push(z)}y=K(r),t.I=y[1],R(r,k,t.I),t.f=S(r,k,t.I);if(t.f){t.r(r,k,t.I)}u?n.c=[]:null;while(u--){n.c.push(C(v[u],t.I))}n.b=y[0],n.a=k,x.push(o),i++}t.p[t.g]={},k=null,v=null,w=null,t.i[t.g]=j,j=null,h=null,m=null,t.H=0}}t.H?(R(b,c,t.I),t.f=S(b,c,t.I)):(R(b,c),t.f=S(b,c))}else{R(b,c),t.f=S(b,c)}t.H?V(b,c,t.I):V(b,c),a=b.getAttribute(U[0]);if(a&&g&&!t.H){a=a.trim(),b.removeAttribute(U[0]);if(a){t.o[a]=b}}return[c,d]};X[U[5]].s=function(a){var t=this,b=I(a,t.m);if(!b){return}var c=t.h,j=t.n,i=0,d=a.length,e,f,g=d-1,s,z,u,v,w,x,y,U,V,W,X,Y,Z;d==1?f=c:null;while(i<d){c[a[i]]?c=c[a[i]]:(c[a[i]]={},c=c[a[i]]),j=j[a[i]],i==d-2?f=c:null,i++}d=j.length;if(!d){return}var h,k,l,m,n,o,p,q,r;h=b.a,k=b.b;if(t.m[k].indexOf(a[a.length-1])==-1){return}n=b.c,m=t.i[k][h][1],o=m.a,p=m.b,q=m.c,l=m.d;if(h){d=h;while(d--){b=t.j[k][d];if(b){n[d]=b.indexOf(Number(n[d]))}}}s=t.i[k][h][0],z="$_"+k+h+s+E(n,1);if(t.E&&t.E[s]){v=t.E[s],w=[],y,u,r,b=a.join(".")+"."+(n.length?n.join(".")+".":""),s,i=0,d=j.length;while(i<d){u={$_allow:1,$_data:j[i],$_forData:j,$_index:i,$_watcher:0,$_pos:n.concat(i),$_gIndex:k,$_gData:t.n,$_gWatcher:t.d,$_eng:t.o},v(u,t.l);if(u.$_watcher){for(y in u.$_watcher){s=b+i+"."+y,Z=u.$_watcher[y],r={},r[s]=Z,t.d(r)}}u.$_allow?w.push(i):null,i++}}t.j[k][h]=w;if(!t.p[k][z]){t.p[k][z]={a:[],b:[],c:[]}}x=t.p[k][z].a,s=t.p[k][z].b,b=t.p[k][z].c,Z=t.p[k][z].d;if(Z){d=Z.length,w?(i=w.length):i=j.length;if(i<d){B(Z,t.p[k])}}t.p[k][z].d=[],f[a[g]]={},c=f[a[g]];if(h){i=n.length,y="$_"+k+(h-1)+t.i[k][h-1][0]+E(n,1,i-1),r=t.p[k][y].c[n[i-1]][l],t.p[k][y].d.push([z,l])}else{r=m.e}U=q?q.length:0,Z=1,i=0,d=w?w.length:j.length,e=s.length,d>=e?i=e:null,e>=d?(Z=0,i=d,d=e):null;while(i<d){if(Z){W=L(p),s.push(W[0]);if(U){V=U,Y=[];while(V--){Y.push(W[1][q[V]])}b.push(Y)}X={},G(X,o,W[1]),x.push(X),r.appendChild(W[0])}else{x.pop(),r.removeChild(s.pop()),b.pop()}i++}if(w){d=w.length;while(d--){c[w[d]]=x[d]}}else{d=x.length;while(d--){c[d]=x[d]}}return w};X[U[5]].t=function(a,b,c,d,e,f,g,h,j){var l=A(a),k,v,m=b,n,o,i=0,p=-1,q,r=h,s=j,t=this;for(k in a){v=a[k],o=null,q=0;if(f&&k!=f[i]){continue}if(g){p++,r=p,s=f?f[i]:i}if(c){l=A(v)}b=D(m,0),b.push(k),n=E(b);if(l==4&&c==1){o=t.s(b),q=1}c?t.w(a,k,D(b,0),n,l,r,s):t.x(b,d,e),t.k[l]?null:t.t(v,b,c,d,e,o,q,r,s),i++}m=null,$i=null,b=null};X[U[5]].v=function(a,b){var c,d,e;for(c in a){d=a[c],e=A(d);if(b&&b[c]){a[c]=b[c]}else{e==5?this.v(d):a[c]=""}}};X[U[5]].u=function(a){var b,c,d;for(b in a){c=a[b],d=A(c);if(d==5||d==4){this.u(c)}else{a[b]=""}delete a[b]}};X[U[5]].w=function(a,b,c,e,l,g,h){var v=a[b],i=this,j,f=l,k,d=i.o;if(i.D&&i.D[e]){k=i.D[e],delete i.D[e];d.$_value=undefined,d.$_destroy=0,k(undefined,v,d,i.l),d.$_value==undefined?null:v=d.$_value,d.$_destroy?k=null:null}Object.defineProperty(a,b,{enumerable:1,configurable:1,set:function(s){if(i.D&&i.D[e]){k=i.D[e],delete i.D[e]}if(v!=s){f=A(s);if(l==5){i.v(v,s),i.t(v,c,1)}else{if(l==4){j=D(c,0),i.u(v),v=s,i.t(v,j,1,null,null,i.s(j),1)}else{if(k){d.$_value=undefined,d.$_destroy=0,k(v,s,d,i.l),d.$_value==undefined?null:s=d.$_value,d.$_destroy?k=null:null}i.k[f]?(v=s,i.x(c,null,null,g,h)):null}}}},get:function(){return v}});i.k[f]?i.x(c,null,null,g,h):null};X[U[5]].x=function(a,b,c,d,e){var f=this.y(a,b,c,d,e);if(f){this.z(f,a,c)}};X[U[5]].y=function(b,c,e,f,g){if(!b){return}var l=b.length,i=0,d,t=this,h=c?c:t.h;while(i<l){if(!(h&&b)){return 0}h=h[b[i]];if(i==l-2){d=h}i++}if(h&&(h.$_index||h.$_value)){d=h}if(d){t.J=f,t.K=g;if(d.$_index){t.z(d.$_index,b,e)}if(d.$_value){t.z(d.$_value,b,e)}}return h};X[U[5]].z=function(a,b,c){var d=a.length,e,f,g=this;while(d--){e=a[d];if(e.$_d){e.$_d.textContent=g.B(b,e.$_a,e.$_b,c)}if(e.$_e){g.A(e.$_e,b,e.$_f,c)}if(e.$_h){e.$_h.innerHTML=g.C(b,b[b.length-1],c)}if(e.$_j){f=g.C(b,b[b.length-1],c,1),e.$_j.value=f[0];e.$_j.oninput=function(){f[1][f[2]]=this.value}}if(e.$_l){f=g.C(b,b[b.length-1],c,1),e.$_l.value=f[0];e.$_l.onchange=function(){f[1][f[2]]=this.value}}}};X[U[5]].A=function(a,b,d,e){var v=this.C(b,d[0],e),f=d[1],g,c,h,i=d.length,j,y;switch(i){case 2:j=1,c=v;break;case 4:v?j=1:null,c=d[2],h=d[3];break;case 6:f=d[2],g=d[1],g==0?(v==d[3]?j=1:null):null,g==1?(v>=d[3]?j=1:null):null,g==2?(v<=d[3]?j=1:null):null,g==3?(v>d[3]?j=1:null):null,g==4?(v<d[3]?j=1:null):null,c=d[4],h=d[5];break;default:return}f?f=f.toLowerCase():null;if(f=="class"){y=" "}if(f=="style"){y=";"}if(i>2&&y){v=a.getAttribute(f),v?(v=(v.replace(y+h,"")).replace(y+c,"").trim()):null,v?(v=v+y+(j?c:h)):(v=y+(j?c:h)),a.setAttribute(f,v)}else{a.setAttribute(f,j?c:h)}};X[U[5]].B=function(a,b,c,d){var e=b.length,f,v,g=D(c,0);while(e--){f=c[b[e]],v=this.C(a,f,d),g[b[e]]=v}return E(g,1)};X[U[5]].C=function(a,b,e,f){var g=a.length,h=this,i=0,c=e?e:h.n,d=c;if(b=="$_index"){return h.J}while(i<g){i!=g-1?c=c[a[i]]:c=c[b];if(c==undefined){break}if(i==g-2){d=c}i++}if(b=="$_value"){return d[h.K]}c==undefined?c="":null;if(f){return[c,d,b]}return c};Eng=X}());