/*!3.8.1 MIT kooboy_li@163.com*/KISSY.add("magix",(e,t,r)=>{let i,n=e.all,o=e.isObject,a=e.isArray,f=0,l="",s=[],$=",",h=window,d=document,c=n(d),u=h.setTimeout,p=function(){},g=JSON.stringify,m="\x1e",v="object",b="prototype",w="params",y="path",k="mx-view",x=/[#?].*$/,V=/([^=&?\/#]+)=?([^&#?]*)/g,I=/(?!^)=|&/,j=e=>(e||"mx_")+f++,_=j(),S={rootId:j(),defaultView:_,error(e){throw e}},A=e=>typeof e==v?e:d.getElementById(e),O=e=>!e||typeof e!=v,T=(e,t,r)=>{let i,n,o,a=0;for(o in e)i=e[o],n=t[o],O(i)&&n===i||(r[o]=1,a=1),t[o]=i;return a},U=(e,t,r)=>{if(e=A(e),t=A(t),e&&t&&!(r=e==t))try{r=16==(16&t.compareDocumentPosition(e))}catch(e){}return r},{assign:q,keys:C,hasOwnProperty:Z}=Object,H=n("head"),P=(e,t)=>{t&&!P[e]&&(P[e]=1,H.append(`<style>${t}`))},E=e=>e.id||(e.id=j()),N=(e,t,r,i,n)=>{t=t||s,a(e)||(e=[e]),a(t)||(t=[t]);for(n of e)try{i=n&&n.apply(r,t)}catch(e){S.error(e)}return i},z=(e,t)=>e&&Z.call(e,t),B=(e,t,r)=>{let i,n;for(i in t)n=t[i],r[i]=(n+l)[0]==m?e[n]:n},L=(e,t)=>t.f-e.f||t.t-e.t,M=function(e,t,r,i){(i=this).c=[],i.b=t||5,i.x=i.b+(e||20),i.r=r};q(M[b],{get(e){let t=this.c[m+e];return t&&(t.f++,t.t=f++,t=t.v),t},each(e,t,r,i,n){i=(r=this).c;for(n of i)e(n.v,t,r)},set(e,t){let r=this,i=r.c,n=m+e,o=i[n],a=r.b;if(!o){if(i.length>=r.x)for(i.sort(L);a--;)(o=i.pop()).f>0&&r.del(o.o);o={o:e},i.push(o),i[n]=o}o.v=t,o.f=1,o.t=f++},del(e){e=m+e;let t=this.c,r=t[e],i=this.r;r&&(r.f=-1,r.v=l,delete t[e],i&&N(i,r.o))},has(e){return z(this.c,m+e)}});let R=(t,r)=>{e.use(t&&t+l,(e,...t)=>{r&&r.apply(e,t)})},D=e.extend,F=r.test,J=function(e,t){t=this,e.eventTarget=t.e,N(t.f,e,t.v)},K=(e,r,i,n,o)=>{o?t[`${n?"un":l}delegate`](e,r,i,o):t[n?"detach":"on"](e,r,i,o)};let Q,Y=new M,G=0,W=(e,t,r)=>{try{r=decodeURIComponent(r)}catch(e){}Q[t]=r},X=e=>{let t,r=Y.get(e);return r||(Q={},e==(t=e.replace(x,l))&&I.test(t)&&(t=l),e.replace(t,l).replace(V,W),Y.set(e,r={a:t,b:Q})),{path:r.a,params:{...r.b}}},ee=(e,t,r)=>{let i,n,o,a=[];for(n in t)i=t[n]+l,(!r||i||z(r,n))&&(i=encodeURIComponent(i),a.push(o=n+"="+i));return o&&(e+=(e&&(~e.indexOf("?")?"&":"?"))+a.join("&")),e},te=(e,t)=>{let r,i={};if(e)for(r of e)i[t&&r?r[t]:r]=t?r:1+(0|i[r]);return i},re={config:(e,t)=>(t=S,e&&(t=o(e)?q(t,e):t[e]),t),boot(e){q(S,e),R(S.ini,t=>{q(S,t,e),R(S.exts,()=>{qe.on("changed",Be),$e.on("changed",Be),G=1,Ae()})})},toMap:te,toTry:N,toUrl:ee,parseUrl:X,mix:q,has:z,keys:C,inside:U,node:A,applyStyle:P,guid:j,use:R,Cache:M,nodeId:E},ie={fire(e,t,r,i){let n,o,a,f,s=this,$=s[m+e];if(t||(t={}),t.type||(t.type=e),$)for(o=(n=$.length)-1;n--;)(f=$[a=i?n:o-n]).f?(f.x=1,N(f.f,t,s),f.x=l):f.x||($.splice(a,1),o--);($=s[`on${e}`])&&N($,t,s),r&&s.off(e)},on(e,t){let r=m+e;(this[r]||(this[r]=[])).push({f:t})},off(e,t){let r,i=m+e,n=this,o=n[i];if(t){if(o)for(r of o)if(r.f==t){r.f=l;break}}else delete n[i],delete n[`on${e}`]}};re.Event=ie;let ne={},oe={},ae={},fe=0,le=e=>{e=(e+l).split(",");for(let t of e)z(oe,t)?oe[t]++:oe[t]=1;return e},se=e=>{let t,r;for(t of e)z(oe,t)&&((r=--oe[t])||(delete oe[t],delete ne[t]))};let $e={get(e){let t=e?ne[e]:ne;return t},set(e){fe=T(e,ne,ae)||fe},digest(e){e&&$e.set(e),fe&&(fe=0,this.fire("changed",{keys:ae}),ae={})},diff:()=>ae,clean:e=>({ctor(){e=le(e),this.on("destroy",()=>se(e))}}),...ie};re.State=$e;let he,de,ce,ue,pe,ge,me,ve,be="view",we=new M,ye=new M,ke=h.location,xe=0,Ve={query:{},params:{},href:l},Ie=/(?:^.*\/\/[^\/]+|#.*$)/gi,je=/^[^#]*#?!?/,_e=function(e){return this[w][e]||l},Se=(e,t)=>{e=`#!${e}`,t?ke.replace(e):ke.hash=e},Ae=()=>{let e,t,r=Te().srcHash;K(h,"hashchange",(i,n,o)=>{t||(n=Te(),(e=n.srcHash)!=r&&(o=(()=>{i.p=1,r=e,t=l,Se(e),Ue()}),i={reject(){i.p=1,t=l,Se(r)},resolve:o,prevent(){t=1}},qe.fire("change",i),t||i.p||o()))}),h.onbeforeunload=((e,t,r)=>{if(e=e||h.event,t={},qe.fire("pageunload",t),r=t.msg)return e&&(e.returnValue=r),r}),Ue()},Oe=d.title,Te=e=>{e=e||ke.href;let t,r,i,n,a,f=we.get(e);return f||(t=e.replace(Ie,l),r=e.replace(je,l),i=X(t),n=X(r),a={...i[w],...n[w]},f={get:_e,href:e,srcQuery:t,srcHash:r,query:i,hash:n,params:a},G&&(((e,t)=>{if(de||(de=S.routes||{},ce=S.unmatchView,ue=S.defaultView,pe=S.defaultPath||"/",ge=S.rewrite),!e[be]){let r=e.hash[y]||pe;ge&&(r=ge(r,e[w],de)),t=de[r]||ce||ue,e[y]=r,e[be]=t,o(t)&&q(e,t)}})(f),we.set(e,f))),f},Ue=()=>{let e=Te(),t=((e,t)=>{let r=e.href,i=t.href,n=r+m+i,o=ye.get(n);if(!o){let i,a;o={params:a={},force:!r};let f,l=e[w],s=t[w],$=C(l).concat(C(s)),h=e=>{let t=l[e],r=s[e];t!=r&&(a[e]={from:t,to:r},i=1)};for(f of $)h(f);l=e,s=t,a=o,h(y),h(be),ye.set(n,o={a:i,b:o})}return o})(Ve,Ve=e);return!xe&&t.a&&((he=t.b)[y]&&(d.title=e.title||Oe),qe.fire("changed",he)),xe=0,he},qe={parse:Te,diff:Ue,to(e,t,r,i){!t&&o(e)&&(t=e,e=l);let n=X(e),a=n[w],f=n[y],s=Ve[y],$=Ve[w],h=Ve.query[w];if(q(a,t),f)for(s in h)z(a,s)||(a[s]=l);else $&&(f=s,a={...$,...a});var d,c,u,p;c=Ve,u=r,p=i,(d=ee(d=f,a,h))!=c.srcHash&&(xe=p,Se(d,u))},...ie};re.Router=qe;let Ce=e=>{if(!e.$a&&!e.$b&&e.$cc==e.$rc){e.$cr||(e.$cr=1,e.$ca=0,e.fire("created"));let t,{id:r,pId:i}=e;(t=He[i])&&!z(t.$d,r)&&(t.$d[r]=1,t.$rc++,Ce(t))}},Ze=(e,t)=>{if(!e.$ca&&e.$cr){e.$cr=0,e.$ca=1,e.fire("alter",t);let r,{id:i,pId:n}=e;(r=He[n])&&z(r.$d,i)&&(r.$rc--,delete r.$d[i],Ze(r,t))}},He={},Pe=(e,t,r)=>{for(t=e.$e;t.length;)(r=t.shift()).r||e.invoke(r.n,r.a),delete t[r.k]},Ee=[],Ne=0,ze=(e,t,r)=>{if(e&&e.$f!=Ne&&(r=e.$v)&&r.$a>1){(t?((e,t,r)=>{let i,n=e.$os;if(n)for(i of n)if(r=z(t,i))break;return r})(r,t):bt(r))&&r.$b();let i,n=e.children();for(i of n)ze(He[i],t)}},Be=e=>{let t,r=(e=>(me||(i=d.body,e=S.rootId,A(e)||(i.id=e),me=new Le(e)),me))();(t=e[be])?r.mountView(t.to):(Ne=f++,ze(r,e.keys))},Le=function(e,t,r){var i,n;(r=this).id=e,r.$c={},r.$cc=0,r.$rc=0,r.$g=1,r.$d={},r.$e=[],r.pId=t,n=r,z(He,i=e)||(He[i]=n,Le.fire("add",{vframe:n}),(i=A(i))&&(i.vframe=n))};q(Le,{all:()=>He,get:e=>He[e]},ie),q(Le[b],ie,{mountView(e,t){let r,i,n,o,a,f,l=this,{id:s,pId:$,$g:h}=l,d=A(s);!l.$h&&d&&(l.$h=1,l.$i=d.innerHTML),l.unmountView(),l.$a=0,d&&e&&(l[y]=e,r=X(e),n=r[y],i=++h,o=r[w],f=(f=(f=(f=He[$])&&f.$v)&&f.$d)&&f.$a,e.indexOf(m)>0&&B(f,o,o),l.$n=r[y],q(o,t),R(n,e=>{if(i==l.$g){if(!e)return S.error(Error(`id:${s} cannot load:${n}`));a=vt(e),n=new e(s,l,o,a),l.$v=n,l.$f=Ne,pt(n),N(n.init,o,n),n.$b(),n.$e||(l.$h=0,n.$f||n.endUpdate())}}))},unmountView(){let e,t,r=this,{$v:i,id:o}=r;r.$e=[],i&&(ve||(t=1,ve={id:o}),r.$a=1,r.unmountZone(0,1),Ze(r,ve),r.$v=0,i.$a>0&&(i.$a=0,i.fire("destroy",0,1,1),dt(i,1),pt(i,1),i.owner=0),i.$a--,(e=A(o))&&r.$h&&n(e).html(r.$i),t&&(ve=0)),r.$g++},mountVframe(e,t,r){let i,n=this,o=n.id,a=n.$c;return Ze(n,{id:e}),(i=He[e])||(z(a,e)||(n.$o=0,n.$cc++),a[e]=e,(i=Ee.pop())?Le.call(i,e,o):i=new Le(e,o)),i.mountView(t,r),i},mountZone(e,t){let r,i,o=this,a=[];e=e||o.id;let f=n(`#${e} [${k}]`);o.$b=1;for(r of f)i=E(r),r.$a||(r.$a=1,a.push([i,r.getAttribute(k)]));for([i,r]of a)a[i]?S.error(Error(`vf.id duplicate:${i} at ${o[y]}`)):o.mountVframe(a[i]=i,r);o.$b=0,t||Ce(o)},unmountVframe(e,t){let r;if(e=e?this.$c[e]:this.id,r=He[e]){let{$cr:a,pId:f}=r;r.unmountView(),n=a,(o=He[i=e])&&(delete He[i],Le.fire("remove",{vframe:o,fcc:n}),(i=A(i))&&(i.$a=i.vframe=0)),r.id=r.pId=r.$c=r.$d=r.$h=0,r.off("alter"),r.off("created"),Ee.push(r),(r=He[f])&&z(r.$c,e)&&(delete r.$c[e],r.$o=0,r.$cc--,t||Ce(r))}var i,n,o},unmountZone(e,t){let r,i=this;for(r in i.$c)(!e||r!=e&&U(r,e))&&i.unmountVframe(r,1);t||Ce(i)},parent(e,t){for(t=this,e=e>>>0||1;t&&e--;)t=He[t.pId];return t},children(e){return(e=this).$o||(e.$o=C(e.$c))},invoke(e,t){let r,i,n,o,a,f=this.$e;return(i=this.$v)&&i.$f?r=(n=i[e])&&N(n,t,i):((o=f[a=m+e])&&(o.r=t===o.a),o={n:e,a:t,k:a},f.push(o),f[a]=o),r}}),re.Vframe=Le,r[b].invokeView=function(e,t){if(this.length){let r=this[0],i=r.vframe;if(void 0===t)return i&&i.invoke(e);for(r of this)(i=r.vframe)&&i.invoke(e,t)}};let Me=new M(30,10),Re=/(?:([\w\-]+)\x1e)?([^(]+)\(([\s\S]*)?\)/,De={},Fe={},Je=(e,t)=>{let r,n,o,a,f,l,$,h=[],d=e,c=e.getAttribute(`mx-${t}`),u=[],p=0;if(c&&((f=Me.get(c))||((f={v:(f=c.match(Re)||s)[1],n:f[2],i:f[3]}).p=f.i&&N(Function(`return ${f.i}`),s,e),Me.set(c,f)),f={...f,r:c},h.push(f)),f&&!f.v||Fe[t]){if(!($=e.$a))for(u.push(d);d!=i&&(d=d.parentNode);){if(He[n=d.id]||(n=d.$v)){$=n;break}u.push(d)}if($){for(c of u)c.$a=$;d=e.id,He[d]&&(p=$=d);do{if((r=He[$])&&(l=r.$v)){a=(o=l.$so)[t];for(n in a)o={r:n,v:$,n:n},n?F(e,n)&&h.push(o):p&&h.unshift(o);if(l.$e&&!p){f&&!f.v&&(f.v=$);break}p=0}}while(r&&($=r.pId))}}return h},Ke=e=>{let t,r,n,o,a,f,l,s,{target:$,type:h}=e,d=[];for(;$!=i;){if((t=Je($,h)).length){d=[];for(let{v:r,r:i,n:d,p:c,i:u}of t){if(l!=r){if(l&&e.isPropagationStopped())break;l=r}if(o=(n=He[r])&&n.$v){if((f=o[a=d+m+h])&&(e.eventTarget=$,s=c||{},u&&u.indexOf(m)>0&&B(o.$d.$a,s,s={}),e[w]=s,N(f,e,o),e.isImmediatePropagationStopped()))break;0}else e.stopPropagation();0}}if((r=$.$)&&r[h]||e.isPropagationStopped())break;d.push($),$=$.parentNode||i}for($ of d)(r=$.$||($.$={}))[h]=1},Qe=(e,t,r)=>{let n=0|De[e],o=r?-1:1;n&&r!==n||K(i,e,Ke,r),De[e]=n+o,t&&(Fe[e]=(0|Fe[e])+o)},Ye={input_value:1,input_checked:1,input_disabled:1,input_readonly:1,textarea_value:1,textarea_checked:1,textarea_disabled:1,textarea_readonly:1,option_selected:1},Ge={area:1,br:1,col:1,embed:1,hr:1,img:1,input:1,param:1,source:1,track:1,wbr:1},We=/^<([a-z\d]+)((?:\s+[-A-Za-z\d_]+(?:="[^"]*")?)*)\s*(\/?)>/,Xe=/([-A-Za-z\d_]+)(?:="([^"]*)")?/g,et=/^<\/[a-z\d+]+>/,tt=(e,t)=>{let r=E(t);e.$c[r]?e.unmountVframe(r,1):e.unmountZone(r,1)},rt=(e,t,r,i)=>{let n,o,a;for(n of t.i)o=n.d,z(r.j,o)||(n.e?"value"==o?e.value="":e[o]=!1:"id"==o?i.d.push([e,""]):e.removeAttribute(o));for(n of r.i)o=n.d,a=n.f,t.j[o]!=a&&(n.e?"value"==o?e.value=a:e[o]=!0:"id"==o?i.d.push([e,a]):e.setAttribute(o,a))},it=(e,t,r,i,n,o,a,f,l)=>{if(3==(l=e.h))return d.createTextNode(e.b);f="svg"==l?"http://www.w3.org/2000/svg":t.namespaceURI,(i=d.createElementNS(f,l)).innerHTML=e.b;for(n of e.i)o=n.d,a=n.f,n.e?"value"==o?i.value=a:i[o]=!0:"id"==o?r.d.push([i,a]):i.setAttribute(o,a);return i},nt=(e,t,r,i,n,o,a)=>{let f,l,s,$,h,d,c,u,p,g,m,v,b,w=e.childNodes,y={};if(t){for(f=(h=t.a).length,l=(d=r.a).length,s=0;s<f;s++)(g=(c=h[s]).k)&&(y[g]={l:w[s],m:c});for(s=0;s<l;s++)if(c=h[s],m=y[g=(u=d[s]).k]){if(v=m.l,b=m.m,v!=w[s]){for(h.splice(s,0,c=b),$=h.length;$--;)if(h[$].k==g){h.splice($,1);break}e.insertBefore(v,w[s])}ot(w[s],e,c,u,i,n,o,a)}else c?y[c.k]?(h.splice(s,0,u),f++,e.insertBefore(it(u,e,i),w[s])):ot(w[s],e,c,u,i,n,o,a):e.appendChild(it(u,e,i));for(s=l;s<f;s++)p=e.lastChild,tt(n,p),e.removeChild(p),i.c=1}else i.c=1,e.innerHTML=r.b},ot=(e,t,r,i,n,o,a,f)=>{if(r.h==i.h)if(3==r.h)r.b!=i.b&&(e.nodeValue=i.b);else{let t,l,s,$,h,d,c,u,p=i.j[k],g=i.b,v=He[e.id];p&&v?($=v.$v,d=(h=X(p))[w],p.indexOf(m)>-1&&B(a,d,d),c=g!=v.$i,u=!$.$e,v.$n==h[y]&&$.$g?(v.$i=g,v[y]=p,h={keys:f,inner:g,deep:u,html:c},rt(e,r,i,n),N($.$g,[d,h],$)&&$.$b(),l=h.deep):(s=1,l=1,t=1)):(t=1,l=1,s=v),s&&v.unmountVframe(0,1),t&&rt(e,r,i,n),l&&!Ge[i.h]&&(n.c=1,nt(e,r,i,n,o,a,f))}else tt(o,e),t.replaceChild(it(i,t,n),e),n.c=1},at=(e,t,r,i)=>{let n,o,a,f,l=e.$b,$=He[l],h=$&&$.$v,d={d:[]},u=A(l);if(h&&h.$a>0&&(n=h.$e)){if(r){f=(e=>{let t,r,i,n,o,a,f,l,$,h,d,c=e.length,u=0,p={a:[],b:e},g=[{c:p}],m=(e,t)=>{t.replace(Xe,(t,r,i)=>{"id"==r&&(d=i),a.push({d:r,e:Ye[e+"_"+r],f:i}),$[r]=i})};for(;u<c;)t=1,0==(i=e.slice(u)).indexOf("</")?(n=i.match(et))&&(l=(p=g.pop()).c,a=e.slice(p.g,u),"textarea"==l.h?(l.i.push({d:"value",f:a,e:1}),l.j.value=a,l.a=s):l.b=a,p=g[g.length-1].c,u+=n[0].length,t=0):"<"==i[0]&&(n=i.match(We))&&(o=n[1],f=n[3]||Ge[o],a=[],$={},d="",m(o,n[2]),l={k:d,h:o,i:a,j:$,a:[]},u+=n[0].length,p.a.push(l),f||(g.push({c:l,g:u}),p=l),t=0),t&&(u+=(h=(r=i.indexOf("<"))<0?i:i.substring(0,r)).length,l={h:3,b:h},p.a.push(l));return p})(o=$t(n(m,t),l)),nt(u,e.$d,f,d,$,t,i),e.$d=f;for(a of d.d)a[0].id=a[1];d.c&&(h.endUpdate(l),c.fire("htmlchanged",{vId:l}))}h.fire("domready")}},ft=function(e){this.$b=e,this.$c=1,this.$a={vId:e,[m]:1},this.$k={}};q(ft[b],{get(e,t){return t=this.$a,e&&(t=t[e]),t},set(e){let t=this,{$a:r,$k:i}=t;return e&&(t.$c=T(e,r,i)||t.$c),t},digest(e,t,r){let i=this;return i.set(e),e=i.$a,t=i.$k,r=i.$c,i.$c=0,i.$k={},at(i,e,r,t),i},snapshot(){return this.$e=g(this.$a),this},altered(){let e=this;if(e.$e)return e.$e!=g(e.$a)}});let lt=/^(\$?)([^<]*)<([^>]+)>$/,st=/\x1f/g,$t=(e,t)=>(e+l).replace(st,t),ht=(e,t,r)=>(e.$h?r=e:((r=function(e){N(r.$h,e,this)}).$h=[e],r.$i=1),r.$h=r.$h.concat(t.$h||t),r),dt=(e,t)=>{let r,i,n=e.$r;for(r in n)i=n[r],(t||i.x)&&ct(n,r,1)},ct=(e,t,r,i)=>{let n,o,a=e[t];return a&&a!=i&&((n=(o=a.e).destroy)&&r&&N(n,s,o),delete e[t]),o},ut=(e,t,r,i,n)=>{i=e[t],e[t]=e[r]=function(...e){(n=this).$a>0&&(n.$a++,n.fire("rendercall"),dt(n),N(i,e,n))}},pt=(e,t)=>{let r,{$eo:i,$so:n,$el:o,id:a}=e;for(r in i)Qe(r,n[r],t);for(r of o)K(r.e,r.n,J,t,{i:a,v:e,f:r.f,e:r.e})},gt=[],mt={win:h,doc:d},vt=e=>{if(!e[m]){e[m]=[];let t,r,i,n,o,a,f,l,s,h=e[b],d={},c=[],u={},p={};if(r=h.mixins){for(o of r)for(f in o)t=o[f],i=p[f],"ctor"!=f?(lt.test(f)&&(i?t=ht(i,t):t.$i=1),p[f]=t):e[m].push(t);for(f in p)z(h,f)||(h[f]=p[f])}for(f in h)if(t=h[f],r=f.match(lt)){[,a,i,n]=r,n=n.split($);for(l of n){if(o=mt[i],s=1,a){if(o){c.push({f:t,e:o,n:l});continue}s=2,(o=u[l])||(o=u[l]={}),o[i]=1}d[l]=d[l]|s,(o=h[l=i+m+l])?o.$i&&(t.$i?h[l]=ht(o,t):z(h,f)&&(h[l]=t)):h[l]=t}}ut(h,"render","$b"),h.$eo=d,h.$el=c,h.$so=u,h.$e=h.tmpl,h.$g=h.assign}return e[m]},bt=e=>{let t,r,i,n=e.$l;if(n.f&&(n.p&&(t=he[y]),!t&&n.k)){i=he[w];for(r of n.k)if(t=z(i,r))break}return t},wt=function(e,t,r,i){(i=this).owner=t,i.id=e,i.$l={k:[]},i.$r={},i.$a=1,i.updater=i.$d=new ft(i.id),N(gt,r,i)},yt=wt[b];q(wt,{merge(...e){let t,r;for(t of e)(r=t&&t.ctor)&&gt.push(r),q(yt,t)},extend(e,t){let r=this,i=(e=e||{}).ctor,n=[];i&&n.push(i);let o=function(e,t,i,o){r.call(this,e,t,i),N(n.concat(o),i,this)};return o.extend=r.extend,D(o,r,e,t)}}),q(yt,ie,{init:p,wrapEvent(e){return $t(e,this.id)},beginUpdate(e,t){(t=this).$a>0&&t.$f&&t.owner.unmountZone(e,1)},endUpdate(e,t,r,i,n){(r=this).$a>0&&(e=e||r.id,t?n=t:(n=r.$f,r.$f=1),(i=r.owner).mountZone(e,t),n||u(r.wrapAsync(Pe),0,i))},wrapAsync(e,t){let r=this,i=r.$a;return(...n)=>{if(i>0&&i==r.$a)return e.apply(t||r,n)}},observeLocation(e,t){let r;(r=this.$l).f=1,o(e)&&(t=e[y],e=e[w]),r.p=t,e&&(r.k=(e+l).split($))},observeState(e){this.$os=(e+l).split($)},capture(e,t,r,i){return i=this.$r,t?(ct(i,e,1,t),i[e]={e:t,x:r}):t=(i=i[e])&&i.e,t},release(e,t){return ct(this.$r,e,t)},leaveTip(e,t){let r=this,i=n=>{let o="a",a="b";"change"!=n.type&&(o="b",a="a"),i[o]?(n.prevent(),n.reject()):t()?(n.prevent(),i[a]=1,r.leaveConfirm(e,()=>{i[a]=0,n.resolve()},()=>{i[a]=0,n.reject()})):n.resolve()},n=r=>{t()&&(r.msg=e)};qe.on("change",i),qe.on("pageunload",n),r.on("unload",i),r.on("destroy",()=>{qe.off("change",i),qe.off("pageunload",n)})},render:p}),re.View=wt;let kt=e.type,xt=e.now,Vt=function(){this.id=j("b"),this.$={}};q(Vt[b],{get(e,t,r){let i,n=t!=r,o=this.$;if(e){let t,i=a(e)?e.slice():(e+l).split(".");for(;(t=i.shift())&&o;)o=o[t];t&&(o=r)}return n&&(i=kt(t))!=kt(o)&&(o=t),o},set(e,t){o(e)||(e={[e]:t}),q(this.$,e)}});let It=function(e,t,r){(r=this[e])&&(delete this[e],N(r,t,r.e))},jt=(e,t,r,i,n,o)=>{let a=[],f=0,l=0;return function(s,$){let h,d=this;l++;let c=d.$b,u=c.k;a[s+1]=d;let p,g={bag:d,error:$};if($?(f=$,t.fire("fail",g),h=1):o.has(u)||(u&&o.set(u,d),c.t=xt(),(p=c.a)&&N(p,d,d),(p=c.x)&&t.clear(p),t.fire("done",g),h=1),!r.$d){let t=l==i;t&&(r.$e=0,2==n&&(a[0]=f,N(e,a,r))),1==n&&N(e,[$||null,d,t,s],r)}h&&t.fire("end",g)}},_t=(e,t,r,i,n)=>{if(e.$d)return e;if(e.$e)return e.enqueue(_t.bind(e,e,t,r,i,n));e.$e=1,a(t)||(t=[t]);let o=e.constructor,f=0,l=o.$f,s=jt(r,o,e,t.length,i,o.$c);for(let e of t)if(e){let t,r=o.get(e,n),i=r.e,a=i.$b.k,$=s.bind(i,f++);a&&l[a]?l[a].push($):r.u?(a&&((t=[$]).e=i,l[a]=t,$=It.bind(l,a)),o.$s(i,$)):$()}return e},St=function(){let e=this;e.id=j("s"),e.$g=[]};q(St[b],{all(e,t){return _t(this,e,t,2)},save(e,t){return _t(this,e,t,2,1)},one(e,t){return _t(this,e,t,1)},enqueue(e){let t=this;return t.$d||(t.$g.push(e),t.dequeue(t.$h)),t},dequeue(...e){let t,r=this;r.$e||r.$d||(r.$e=1,u(()=>{r.$e=0,r.$d||(t=r.$g.shift())&&N(t,r.$h=e)},0))},destroy(e){(e=this).$d=1,e.$g=0}});let At=(e,t)=>[g(t),g(e)].join(m),Ot=(e,t,r,i)=>{(i=e&&e.$b)&&t[i.n]&&r.del(i.k)},Tt={add(e){let t,r=this.$b;a(e)||(e=[e]);for(t of e)if(t){let{name:e,cache:i}=t;t.cache=0|i,r[e]=t}},create(e){let t=this.meta(e),r=0|e.cache||t.cache,i=new Vt;i.set(t),i.$b={n:t.name,a:t.after,x:t.cleans,k:r&&At(t,e)},o(e)&&i.set(e);let n=t.before;return n&&N(n,i,i),this.fire("begin",{bag:i}),i},meta(e){return this.$b[e.name||e]||e},get(e,t){let r,i,n=this;return t||(r=n.cached(e)),r||(r=n.create(e),i=1),{e:r,u:i}},clear(e){this.$c.each(Ot,te((e+l).split($)))},cached(e){let t,r,i=this,n=i.$c,o=i.meta(e),a=0|e.cache||o.cache;if(a&&(r=At(o,e)),r){let e=i.$f[r];e?t=e.e:(t=n.get(r))&&xt()-t.$b.t>a&&(n.del(r),t=0)}return t},...ie};return St.extend=((e,t,r)=>{let i=function(){St.call(this)};return i.$s=e,i.$c=new M(t,r),i.$f={},i.$b={},D(i,St,null,Tt)}),re.Service=St,q(p[b],ie),p.extend=function e(t,r){let i=this,n=t&&t.ctor,o=function(...e){i.apply(this,e),n&&n.apply(this,e)};return o.extend=e,D(o,i,t,r)},re.Base=p,e.add(_,()=>wt.extend()),re},{requires:["event","node","dom"]});