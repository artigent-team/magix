/*!3.8.14 MIT kooboy_li@163.com*/module.exports=(()=>{let e=require("$"),t=e.isPlainObject,r=e.isArray,n=0,i="",o=[],l=window,a=void 0,f=document,s=f.documentElement.getAttribute,h=(e,t)=>s.call(e,t),d=e(f),$=l.setTimeout;function u(){}let c,p=JSON.stringify,m="\x1e",g="prototype",b="params",v=/[#?].*$/,w=/([^=&?\/#]+)=?([^&#?]*)/g,y=/(?!^)=|&/,x=e=>(e||"mx_")+n++,k=x(),V={rootId:x(),defaultView:k,error(e){throw e}},I=e=>"object"==typeof e?e:f.getElementById(e),T=e=>!e||"object"!=typeof e,C=(e,t,r,n)=>{let i,o,l,a=0;for(l in e)i=e[l],o=t[l],T(i)&&o===i||P(n,l)||(r[l]=1,a=1),t[l]=i;return a},S=(e,t,r)=>{if(e=I(e),t=I(t),e&&t&&!(r=e==t))try{r=16==(16&t.compareDocumentPosition(e))}catch(e){}return r},{assign:j,keys:q,hasOwnProperty:A}=Object,U=e("head"),E=(e,t)=>{t&&!E[e]&&(E[e]=1,U.append(`<style>${t}`))},N=e=>h(e,"id")||(e.$a=1,e.id=x()),O=(e,t,n,i,l)=>{for(l of(t=t||o,r(e)||(e=[e]),r(t)||(t=[t]),e))try{i=l&&l.apply(n,t)}catch(e){V.error(e)}return i},P=(e,t)=>e&&A.call(e,t),H=(e,t)=>{let r,n;if(T(t))(r=t+i)[0]==m&&P(e,r)&&(t=e[r]);else for(r in t)n=t[r],n=H(e,n),t[r]=n;return t},M=(e,t)=>t.f-e.f||t.t-e.t;function _(e,t,r,n){(n=this).c=[],n.b=t||5,n.x=n.b+(e||20),n.r=r}j(_[g],{get(e){let t=this.c[m+e];return t&&(t.f++,t.t=n++,t=t.v),t},each(e,t,r,n,i){for(i of(r=this).c)e(i.v,t,r)},set(e,t){let r=this,i=r.c,o=m+e,l=i[o],a=r.b;if(!l){if(i.length>=r.x)for(i.sort(M);a--;)(l=i.pop()).f>0&&r.del(l.o);l={o:e},i.push(l),i[o]=l}l.v=t,l.f=1,l.t=n++},del(e){e=m+e;let t=this.c,r=t[e],n=this.r;r&&(r.f=-1,r.v=i,delete t[e],n&&O(n,r.o))},has(e){return P(this.c,m+e)}});let L,R=e.isFunction,Z=V.views={},B=(e,t)=>{if(Z[k]||(Z[k]=L),!e)return t();r(e)||(e=[e]);let n,i=[],o=0,l=()=>{o||t.apply(le,i)},a=(e,t,r)=>{(e=e(r=(e=>{i[t]||(o--,i[t]=e,l())}))).then&&e.then(r)};for(let t=0;t<e.length;t++)n=Z[e[t]],R(n)&&!n.extend?(o++,a(n,t)):i[t]=Z[e[t]];l()};function D(){}let z=(e,t,r,n,i)=>(D[g]=t[g],i=new D,j(i,r),j(e,n),i.constructor=e,e[g]=i,e),F=e.find||e.zepto,J=F.matchesSelector||F.matches,Q=(e,t)=>{t=e.data,e.eventTarget=t.e,O(t.f,e,t.v)},X=(t,r,n,i,o)=>{o&&(r+=`.${o.i}`),i?e(t).off(r,n):e(t).on(r,o,n)},G=e=>e;let K,W=new _,Y=0,ee=(e,t,r)=>{try{r=decodeURIComponent(r)}catch(e){}K[t]=r},te=e=>{let t,r=W.get(e);return r||(K={},t=e.replace(v,i),e==t&&y.test(t)&&(t=i),e.replace(t,i).replace(w,ee),W.set(e,r={a:t,b:K})),{path:r.a,params:{...r.b}}},re=(e,t,r)=>{let n,o,l,a=[];for(o in t)n=t[o]+i,(!r||n||P(r,o))&&(n=encodeURIComponent(n),a.push(l=o+"="+n));return l&&(e+=(e&&(~e.indexOf("?")?"&":"?"))+a.join("&")),e},ne=(e,t)=>{let r,n={};if(e)for(r of e)n[t&&r?r[t]:r]=t?r:1+(0|n[r]);return n},ie=new _,oe=(e,t,r)=>(ie.has(e)?r=ie.get(e):(r=O(Function(`return ${e}`)),e.indexOf(m)>-1?H(t,r):ie.set(e,r)),r),le={config:(e,r)=>(r=V,e&&(r=t(e)?j(r,e):r[e]),r),boot(e){j(V,e),B(V.ini,t=>{j(V,t,e),B(V.exts,()=>{Ne.on("changed",_e),ce.on("changed",_e),Y=1,qe()})})},toMap:ne,toTry:O,toUrl:re,parseUrl:te,mix:j,has:P,keys:q,inside:S,node:I,applyStyle:E,guid:x,use:B,Cache:_,nodeId:N,guard:G},ae={fire(e,t,r,n){let o,l,a,f,s=this,h=s[m+e];if(t||(t={}),t.type=e,h)for(l=(o=h.length)-1;o--;)(f=h[a=n?o:l-o]).f?(f.x=1,O(f.f,t,s),f.x=i):f.x||(h.splice(a,1),l--);return(h=s[`on${e}`])&&O(h,t,s),r&&s.off(e),s},on(e,t){let r=m+e;return(this[r]||(this[r]=[])).push({f:t}),this},off(e,t){let r,n=m+e,o=this,l=o[n];if(t){if(l)for(r of l)if(r.f==t){r.f=i;break}}else delete o[n],delete o[`on${e}`];return o}};le.Event=ae;let fe={},se={},he={},de=0,$e=e=>{e=(e+i).split(",");for(let t of e)P(se,t)?se[t]++:se[t]=1;return e},ue=e=>{let t,r;for(t of e)P(se,t)&&((r=--se[t])||(delete se[t],delete fe[t]))};let ce={get(e){let t=e?fe[e]:fe;return t},set(e,t){return de=C(e,fe,he,t)||de,this},digest(e,t){e&&ce.set(e,t),de&&(de=0,this.fire("changed",{keys:he}),he={})},diff:()=>he,clean:e=>({ctor(){e=$e(e),this.on("destroy",()=>ue(e))}}),...ae};le.State=ce;let pe,me=new _,ge=new _,be=l.location,ve=0,we={query:{},params:{},href:i},ye=/(?:^.*\/\/[^\/]+|#.*$)/gi,xe=/^[^#]*#?!?/;function ke(e,t){return this[b][e]||t!==a&&t||i}let Ve,Ie,Te,Ce,Se,je=(e,t)=>{e="#!"+e,t?be.replace(e):be.hash=e},qe=()=>{let e,t,r=Ue().srcHash;X(l,"hashchange",(n,o,l)=>{t||(o=Ue(),(e=o.srcHash)!=r&&(l=(()=>{n.p=1,r=e,t=i,je(e),Ee()}),n={reject(){n.p=1,t=i,je(r)},resolve:l,prevent(){t=1}},Ne.fire("change",n),t||n.p||l()))}),X(l,"beforeunload",(e,t,r)=>{if(e=e||l.event,t={},Ne.fire("pageunload",t),r=t.msg)return e&&(e.returnValue=r),r}),Ee()},Ae=f.title,Ue=e=>{e=e||be.href;let r,n,o,l,a,f=me.get(e);return f||(r=e.replace(ye,i),n=e.replace(xe,i),f={get:ke,href:e,srcQuery:r,srcHash:n,query:o=te(r),hash:l=te(n),params:a={...o[b],...l[b]}},Y&&(((e,r)=>{if(Ve||(Ve=V.routes||{},Ie=V.unmatchView,Te=V.defaultView,Ce=V.defaultPath||"/",Se=V.rewrite),!e.view){let n=e.hash.path||Ce;Se&&(n=Se(n,e[b],Ve)),r=Ve[n]||Ie||Te,e.path=n,e.view=r,t(r)&&j(e,r)}})(f),me.set(e,f))),f},Ee=()=>{let e=Ue(),t=((e,t)=>{let r=e.href,n=t.href,i=r+m+n,o=ge.get(i);if(!o){let n,l;o={params:l={},force:!r};let a,f=e[b],s=t[b],h=q(f).concat(q(s)),d=e=>{let t=f[e],r=s[e];t!=r&&(l[e]={from:t,to:r},n=1)};for(a of h)d(a);f=e,s=t,l=o,d("path"),d("view"),ge.set(i,o={a:n,b:o})}return o})(we,we=e);return!ve&&t.a&&((pe=t.b).path&&(f.title=e.title||Ae),Ne.fire("changed",pe)),ve=0,pe},Ne={parse:Ue,diff:Ee,to(e,r,n,o){!r&&t(e)&&(r=e,e=i);let l=te(e),a=l[b],f=l.path,s=we.path,h=we[b],d=we.query[b];if(j(a,r),f)for(s in d)P(a,s)||(a[s]=i);else h&&(f=s,a={...h,...a});((e,t,r,n,i,o)=>{(e=re(e,t,o))!=r.srcHash&&(ve=i,je(e,n))})(f,a,we,n,o,d)},...ae};le.Router=Ne;let Oe,Pe,He=0,Me=(e,t,r,n,i,o,l)=>{e&&e.$a!=He&&(r=e.$v)&&r.$a>1&&((t?((e,t,r)=>{let n,i=e.$os;if(i)for(n of i)if(r=P(t,n))break;return r})(r,t):Rt(r))&&(l=r.$b()),l&&l.then||(l=Re),l.then(()=>{for(o of e.children())Me(Le[o],t)}))},_e=(e,t,r)=>{t=ze(),(r=e.view)?t.mountView(r.to):(He=n++,Me(t,e.keys))},Le={},Re={then:e=>e()},Ze=e=>{if(!e.$b&&!e.$d&&e.$cc==e.$rc){e.$cr||(e.$cr=1,e.$ca=0,e.fire("created"));let{id:t,pId:r}=e,n=Le[r];n&&!P(n.$e,t)&&(n.$e[t]=1,n.$rc++,Ze(n))}},Be=(e,t)=>{if(!e.$ca&&e.$cr){e.$cr=0,e.$ca=1,e.fire("alter",t);let{id:r,pId:n}=e,i=Le[n];i&&P(i.$e,r)&&(i.$rc--,delete i.$e[r],Be(i,t))}},De=(e,t,r,n)=>(n=(n=(n=Le[e])&&n.$v)?n.$d.$a:{},t.indexOf(m)>0&&H(n,r),n),ze=e=>(Oe||(c=f.body,e=V.rootId,I(e)||(c.id=e),Oe=new Xe(e)),Oe),Fe=(e,t)=>{P(Le,e)||(Le[e]=t,Xe.fire("add",{vframe:t}),(e=I(e))&&(e.vframe=t))},Je=(e,t,r)=>{for(t=e.$f;t.length;)(r=t.shift()).r||e.invoke(r.n,r.a),delete t[r.k]},Qe=[];function Xe(e,t,r){(r=this).id=e,r.$c={},r.$cc=0,r.$rc=0,r.$g=r.$g||1,r.$e={},r.$f=[],r.pId=t,Fe(e,r)}j(Xe,{all:()=>Le,get:e=>Le[e]},ae),j(Xe[g],ae,{mountView(e,t){let r,n,o,l,a,f=this,s=f.id,h=I(s),d=f.pId;!f.$h&&h&&(f.$h=1,f.$i=h.innerHTML),f.unmountView(),f.$b=0,r=te(e||i),o=r.path,h&&o&&(f.path=e,l=r[b],De(d,e,l),f.$j=r.path,j(l,t),n=f.$g,B(o,e=>{if(n==f.$g){if(!e)return V.error(Error(`id:${s} cannot load:${o}`));a=Lt(e),o=new e(s,f,l,h,a),f.$v=o,f.$a=He,Pt(o),(l=O(o.init,[l,{node:h,deep:!o.tmpl}],o))||(l=Re),n=++f.$g,l.then(()=>{n==f.$g&&(o.$b(),o.tmpl||(f.$h=0,o.$e||o.endUpdate()))})}}))},unmountView(){let t,r,n=this,{$v:i,id:o}=n;n.$f=[],i&&(Pe||(r=1,Pe={id:o}),n.$b=1,n.unmountZone(0,1),Be(n,Pe),n.$v=0,i.$a>0&&(i.$a=0,delete et[o],delete tt[o],i.fire("destroy",0,1,1),Et(i,1),Pt(i,1),i.owner=0),i.$a--,(t=I(o))&&n.$h&&e(t).html(n.$i),r&&(Pe=0)),n.$g++},mountVframe(e,t,r){let n,i=this,o=i.id,l=i.$c;return Be(i,{id:e}),(n=Le[e])||(P(l,e)||(i.$n=0,i.$cc++),l[e]=e,(n=Qe.pop())?Xe.call(n,e,o):n=new Xe(e,o)),n.mountView(t,r),n},mountZone(t,r){let n,i,o=this,l=[];t=t||o.id;let a=e(`#${t} [mx-view]`);for(n of(o.$d=1,a))n.$b||(i=N(n),n.$b=1,l.push([i,h(n,"mx-view")]));for([i,n]of l)o.mountVframe(i,n);o.$d=0,r||Ze(o)},unmountVframe(e,t){let r;if(e=e?this.$c[e]:this.id,r=Le[e]){let{$cr:n,pId:i}=r;r.unmountView(),((e,t,r)=>{(r=Le[e])&&(delete Le[e],Xe.fire("remove",{vframe:r,fcc:t}),(e=I(e))&&(e.$b=0,e.vframe=0,e.$a=0))})(e,n),r.id=r.pId=r.$c=r.$e=0,r.$h=0,r.off("alter"),r.off("created"),Qe.push(r),(r=Le[i])&&P(r.$c,e)&&(delete r.$c[e],r.$n=0,r.$cc--,t||Ze(r))}},unmountZone(e,t){let r,n=this;for(r in n.$c)(!e||r!=e&&S(r,e))&&n.unmountVframe(r,1);t||Ze(n)},parent(e,t){for(t=this,e=e>>>0||1;t&&e--;)t=Le[t.pId];return t},children(e){return(e=this).$n||(e.$n=q(e.$c))},invoke(e,t){let r,n,i,o,l,a=this.$f;return(n=this.$v)&&n.$e?r=(i=n[e])&&O(i,t,n):((o=a[l=m+e])&&(o.r=t===o.a),o={n:e,a:t,k:l},a.push(o),a[l]=o),r}}),le.Vframe=Xe,e.fn.invokeView=function(e,t){let r,n,i=[];for(r of this)n=r.vframe,i.push(n&&n.invoke(e,t));return i};let Ge=new _(30,10),Ke=/(?:([\w\-]+)\x1e)?([^(]+)\(([\s\S]*)?\)/,We={},Ye={},et={},tt={},rt=0,nt=(e,t)=>{let r,n,i,l,a,f,s=[],d=e,$=h(e,`mx-${t}`),u=[],p="#",m=0;if($&&((a=Ge.get($))||(a={v:(a=$.match(Ke)||o)[1],n:a[2],i:a[3]},Ge.set($,a)),a={...a,r:$}),a&&!a.v||Ye[t]){if((i=tt[n=d.$d])&&1==i[d.$e]&&(f=1,p=n),!f){for(u.push(d);d!=c&&(d=d.parentNode);){if(Le[n=d.id]||(i=tt[n=d.$d])&&1==i[d.$e]){p=n;break}u.push(d)}for($ of u)(n=tt[p])||(n=tt[p]={}),n[i=$.$e||($.$e=++rt)]=1,$.$d=p}d=e.id,Le[d]&&(m=p=d);do{if((r=Le[p])&&(f=r.$v)){if(l=(i=f.$so)[t])for(d=l.length;d--;)i={r:n=l[d],v:p,n:n},n?!m&&J(e,n)&&s.push(i):m&&s.unshift(i);if(f.tmpl&&!m){a&&!a.v&&(a.v=p);break}m=0}}while(r&&(p=r.pId))}return a&&s.push(a),s},it=e=>{let t,r,n,i,o,l,a,f,{target:s,type:h}=e,d=[];for(;s!=c;){if((t=nt(s,h)).length){d=[];for(let{v:r,r:d,n:$,i:u}of t){if(a!=r){if(a&&e.isPropagationStopped())break;a=r}(i=(n=Le[r])&&n.$v)?(l=i[o=$+m+h])&&(e.eventTarget=s,f=u?oe(u,i.$d.$a):{},e[b]=f,O(l,e,i)):e.stopPropagation()}}if((r=et[l=s.$d])&&(r=r[s.$e])&&r[h]||e.isPropagationStopped()){d.length&&d.push(l);break}a=s.id,Le[a]&&d.push(a),d.push(s),s=s.parentNode||c}if(l=d.length)for(r="#";l--;)(i=d[l]).nodeType?((t=et[r])||(t=et[r]={}),(f=t[a=i.$e||(i.$e=++rt)])||(f=t[a]={}),f[h]=1):r=i},ot=(e,t,r)=>{let n=0|We[e],i=r?-1:1;n&&r!==n||X(c,e,it,r),We[e]=n+i,t&&(Ye[e]=(0|Ye[e])+i)},lt="http://www.w3.org/2000/svg",at="http://www.w3.org/1998/Math/MathML",ft={option:[1,"<select multiple>"],thead:[1,"<table>"],col:[2,"<table><colgroup>"],tr:[2,"<table><tbody>"],td:[3,"<table><tbody><tr>"],area:[1,"<map>"],param:[1,"<object>"],g:[1,`<svg xmlns="${lt}">`],m:[1,`<math xmlns="${at}">`],_:[0,""]},st=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i;ft.optgroup=ft.option,ft.tbody=ft.tfoot=ft.colgroup=ft.caption=ft.thead,ft.th=ft.td;let ht=f.implementation.createHTMLDocument(i),dt=ht.createElement("base");dt.href=f.location.href,ht.head.appendChild(dt);let $t=(e,t)=>{if(1==t.nodeType){let r=N(t);e.unmountZone(r,1),e.$c[r]&&e.unmountVframe(r,1)}},ut={INPUT:["value","checked"],TEXTAREA:["value"],OPTION:["selected"]},ct=(e,t)=>(1==e.nodeType&&(e.$f?t=e.$g:((t=e.$a?i:h(e,"id"))||(t=h(e,"mxs")),t||(t=h(e,"mx-view"))&&(t=te(t).path),e.$f=1,e.$g=t)),t),pt=(e,t,r,n,i)=>{let o,l,a,f,s,h=e.lastChild,d=t.firstChild,$=0,u={},c={};for(;h;)$++,(a=ct(h))&&(a=u[a]||(u[a]=[])).push(h),h=h.previousSibling;for(;d;)(a=ct(d))&&(c[a]=(c[a]||0)+1),d=d.nextSibling;for(d=t.firstChild,h=e.firstChild;d;)if($--,o=d,d=d.nextSibling,(f=u[a=ct(o)])&&(f=f.pop())){for(;f!=h;)s=h.nextSibling,e.appendChild(h),h=s;h=f.nextSibling,c[a]&&c[a]--,mt(f,o,e,r,n,i)}else h?(a=ct(l=h))&&u[a]&&c[a]?($++,r.c=1,r.n.push([8,e,o,l])):(h=h.nextSibling,mt(l,o,e,r,n,i)):(r.c=1,r.n.push([1,e,o]));for(l=e.lastChild;$-- >0;)$t(n,l),r.n.push([2,e,l]),l=l.previousSibling,r.c=1},mt=(e,t,r,n,o,l)=>{if(((e,t)=>{let r,n=e.nodeName,i=ut[n],o=0;if(i)for(r of i)e[r]!=t[r]&&(o=1,e[r]=t[r]);return o})(e,t)||1==e.nodeType&&e.hasAttribute("mxv")||!e.isEqualNode||!e.isEqualNode(t))if(e.nodeName===t.nodeName)if(1===e.nodeType){let r=h(t,"mxs");if(r&&r==h(e,"mxs"))return;let a,f,s,d,$,u,c,p=h(t,"mx-view"),m=t.innerHTML,g=h(t,"mxa"),v=!g||g!=h(e,"mxa"),w=Le[h(e,"id")],y=p&&te(p);if(p&&w&&(!h(t,"id")||h(t,"id")==h(e,"id"))&&w.$j==y.path&&(d=w.$v)){if(u=m!=w.$i,c=p!=w.path,s=h(e,"mxv"),!u&&!c&&s)for(s of $=s.split(","))if("#"==s||P(l,s)){c=1;break}(c||u)&&((s=d.$e&&d.$f)?($=y[b],De(w.pId,p,$),w.$i=m,w.path=p,y={node:t,deep:!d.tmpl,attr:v,inner:u,query:c,keys:l},O(s,[$,y],d)&&n.v.push(d),a=y.deep):(f=1,a=1))}else a=1,f=w;f&&(n.c=1,w.unmountVframe(0,1)),v&&((e,t,r,n)=>{let o,l,a,f;delete e.$f;let s=e.attributes,d=t.attributes;for(l=s.length;l--;)o=s[l].name,t.hasAttribute(o)||("id"==o?n||r.d.push([e,i]):(r.c=1,e.removeAttribute(o)));for(l=d.length;l--;)a=(o=d[l]).name,f=o.value,h(e,a)!=f&&("id"==a?r.d.push([e,f]):(r.c=1,e.setAttribute(a,f)))})(e,t,n,w&&p),a&&pt(e,t,n,o,l)}else e.nodeValue!==t.nodeValue&&(n.c=1,e.nodeValue=t.nodeValue);else $t(o,e),n.c=1,n.n.push([4,r,t,e])},gt={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},bt=/[&<>"'\`]/g,vt=e=>""+(null==e?"":e),wt=e=>`&${gt[e]};`,yt=e=>vt(e).replace(bt,wt),xt=(e,t,r,n)=>{for(n=e[m];--n;)if(e[r=m+n]===t)return r;return e[r=m+e[m]++]=t,r},kt={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},Vt=e=>kt[e],It=/[!')(*]/g,Tt=e=>encodeURIComponent(vt(e)).replace(It,Vt),Ct=/[\\'"]/g,St=e=>vt(e).replace(Ct,"\\$&"),jt=(e,t)=>{let r,n,i=e.$k,o=e.$c,l=e.$b,a=Le[l],f=a&&a.$v,s={d:[],v:[],n:[]},h=I(l),$=e.$d,u=e.$a,c=r=>{t.i<t.length?jt(e,t):(s=t.slice(),t.i=t.length=0,r&&f.fire("domready"),O(s))};if(t.i=t.length,e.$c=0,e.$k={},o&&f&&h&&f.$a>0&&(r=f.tmpl)&&f.$d==e){for(n of(f.fire("dompatch"),delete et[l],delete tt[l],n=((e,t)=>{let r,n=ht.createElement("div"),i=t.namespaceURI;r=i==lt?"g":i==at?"m":(st.exec(e)||[0,""])[1];let o=ft[r]||ft._;n.innerHTML=o[1]+e;let l=o[0];for(;l--;)n=n.lastChild;return n})(r($,l,u,yt,vt,Tt,xt,St),h),pt(h,n,s,a,i),s.d))n[0].id=n[1];for(n of s.n)1==n[0]?n[1].appendChild(n[2]):2==n[0]?n[1].removeChild(n[2]):4==n[0]?n[1].replaceChild(n[2],n[3]):n[1].insertBefore(n[2],n[3]);for(n of(a.$d=r=s.c||!f.$e,s.v))n.$b();r&&f.endUpdate(l),s.c&&d.trigger({type:"htmlchanged",vId:l}),c(1)}else c()};function qt(e){let t=this;t.$b=e,t.$c=1,t.$d={vId:e},t.$a={[m]:1},t.$e=[],t.$k={}}j(qt[g],{get(e,t){return t=this.$d,e&&(t=t[e]),t},set(e,t){let r=this;return r.$c=C(e,r.$d,r.$k,t)||r.$c,r},digest(e,t,r){let n=this.set(e,t),i=n.$e;r&&i.push(r),i.i||jt(n,i)},snapshot(){return this.$f=p(this.$d),this},altered(){let e=this;if(e.$f)return e.$f!=p(e.$d)},translate(e){return H(this.$d,e)},parse(e){return oe(e,this.$a)}});let At=/^(\$?)([^<]*)<([^>]+)>(?:&(.+))?$/,Ut=(e,t,r)=>(e.a?r=e:((r=function(e){O(r.a,e,this)}).a=[e],r.b=1),r.a=r.a.concat(t.a||t),r),Et=(e,t)=>{let r,n,i=e.$r;for(r in i)n=i[r],(t||n.x)&&Nt(i,r,1)},Nt=(e,t,r,n)=>{let i,l,a=e[t];return a&&a!=n&&((i=(l=a.e).destroy)&&r&&O(i,o,l),delete e[t]),l},Ot=(e,t,r,n,i)=>{n=e[t],e[t]=e[r]=function(...e){if((i=this).$a>0)return i.$a++,i.fire("rendercall"),Et(i),O(n,e,i)}},Pt=(e,t)=>{let r,{$eo:n,$so:i,$el:o,id:l}=e;for(r in n)ot(r,i[r],t);for(r of o)X(r.e,r.n,Q,t,{i:l,v:e,f:r.f,m:r.m,e:r.e})},Ht={win:l,doc:f},Mt=(e,t,r)=>{let n,i,o,l,a={};for(i of e)for(n in i)o=i[n],l=a[n],"ctor"!=n?(At.test(n)&&(l?o=Ut(l,o):o.b=1),a[n]=o):r.push(o);for(n in a)P(t,n)||(t[n]=a[n])};function _t(...e){let t=this._||(this._=[]);return Mt(e,this[g],t),this}let Lt=e=>{if(!e[m]){e[m]=[];let t,r,n,i,o,l,a,f,s,h,d,$=e[g],u={},c=[],p={};for(a in(r=$.mixins)&&Mt(r,$,e[m]),$)if(t=$[a],r=a.match(At)){if([,l,n,i,d]=r,h={},d)for(f of d=d.split(","))h[f]=!0;for(f of i=i.split(",")){if(o=Ht[n],s=1,l){if(o){c.push({f:t,e:o,n:f,m:h});continue}s=2,(o=p[f])||(o=p[f]=[]),o[n]||(o[n]=1,o.push(n))}u[f]=u[f]|s,(o=$[f=n+m+f])?o.b&&(t.b?$[f]=Ut(t,o):P($,a)&&($[f]=t)):$[f]=t}}Ot($,"render","$b"),$.$eo=u,$.$el=c,$.$so=p,$.$f=$.assign}return e[m]},Rt=e=>{let t,r,n,i=e.$l;if(i.f&&(i.p&&(t=pe.path),!t&&i.k))for(r of(n=pe[b],i.k))if(t=P(n,r))break;return t};function Zt(e,t,r,n,i){(i=this).owner=t,i.id=e,i.$l={k:[]},i.$r={},i.$a=1,i.updater=i.$d=new qt(i.id),(e=Zt._)&&O(e,[r,{node:n,deep:!i.tmpl}],i)}j(Zt,{merge:_t,extend:function e(t,r){let n=this,i=(t=t||{}).ctor,o=[];function l(e,t,r,i,a,f,s,h,d){n.call(s=this,e,t,r,i,a),f=l._,h=[r,{node:i,deep:!s.tmpl}],f&&O(f,h,s),(d=o.concat(a)).length&&O(d,h,s)}return i&&o.push(i),l.merge=_t,l.extend=e,z(l,n,t,r)}}),j(Zt[g],ae,{init:u,beginUpdate(e,t){(t=this).$a>0&&t.$e&&t.owner.unmountZone(e,1)},endUpdate(e,t,r,n,i){(r=this).$a>0&&(e=e||r.id,t?i=t:(i=r.$e,r.$e=1),(n=r.owner).mountZone(e,t),i||$(r.wrapAsync(Je),0,n))},wrapAsync(e,t){let r=this,n=r.$a;return(...i)=>{if(n>0&&n==r.$a)return e.apply(t||r,i)}},observeLocation(e,r){let n;(n=this.$l).f=1,t(e)&&(r=e.path,e=e[b]),n.p=r,e&&(n.k=(e+i).split(","))},observeState(e){this.$os=(e+i).split(",")},capture(e,t,r,n){return n=this.$r,t?(Nt(n,e,1,t),n[e]={e:t,x:r}):t=(n=n[e])&&n.e,t},release(e,t){return Nt(this.$r,e,t)},leaveTip(e,t){let r=this,n=i=>{let o="a",l="b";"change"!=i.type&&(o="b",l="a"),n[o]?(i.prevent(),i.reject()):t()&&(i.prevent(),n[l]=1,r.leaveConfirm(()=>{n[l]=0,i.resolve()},()=>{n[l]=0,i.reject()},e))},i=r=>{t()&&(r.msg=e)};Ne.on("change",n),Ne.on("pageunload",i),r.on("unload",n),r.on("destroy",()=>{Ne.off("change",n),Ne.off("pageunload",i)})},render:u}),le.View=Zt;let Bt=e.type,Dt=Date.now;function zt(){this.id=x("b"),this.$={}}j(zt[g],{get(e,t){let n,o=this.$;if(e){let t,n=r(e)?e.slice():(e+i).split(".");for(;(t=n.shift())&&o;)o=o[t];t&&(o=a)}return t!==a&&(n=Bt(t))!=Bt(o)&&(o=t),o},set(e,r){t(e)||(e={[e]:r}),j(this.$,e)}});function Ft(e,t,r){(r=this[e])&&(delete this[e],O(r,t,r.e))}let Jt=(e,t,r,n,i,o)=>{let l=[],a=null,f=0;return function(s,h){f++;let d,$,u=this,c=u.$b,p=c.k;if(l[s+1]=u,h?(a=h,d=1):o.has(p)||(p&&o.set(p,u),c.t=Dt(),($=c.a)&&O($,u,u),($=c.x)&&t.clear($),d=1),!r.$d){let t=f==n;t&&(r.$e=0,2==i&&(l[0]=a,O(e,l,r))),1==i&&O(e,[h||null,u,t,s],r)}d&&t.fire("end",{bag:u,error:h})}},Qt=(e,t,n,i,o)=>{if(e.$d)return e;if(e.$e)return e.enqueue(Qt.bind(e,e,t,n,i,o));e.$e=1,r(t)||(t=[t]);let l=e.constructor,a=0,f=l.$f,s=Jt(n,l,e,t.length,i,l.$c);for(let e of t)if(e){let t,r=l.get(e,o),n=r.e,i=n.$b.k,h=s.bind(n,a++);i&&f[i]?f[i].push(h):r.u?(i&&((t=[h]).e=n,f[i]=t,h=Ft.bind(f,i)),l.$s(n,h)):h()}return e};function Xt(){let e=this;e.id=x("s"),e.$g=[]}j(Xt[g],{all(e,t){return Qt(this,e,t,2)},save(e,t){return Qt(this,e,t,2,1)},one(e,t){return Qt(this,e,t,1)},enqueue(e){let t=this;return t.$d||(t.$g.push(e),t.dequeue(t.$h)),t},dequeue(...e){let t,r=this;r.$e||r.$d||(r.$e=1,$(()=>{r.$e=0,r.$d||(t=r.$g.shift())&&O(t,r.$h=e)},0))},destroy(e){(e=this).$d=1,e.$g=0}});let Gt=(e,t)=>[p(t),p(e)].join(m),Kt=(e,t,r,n)=>{(n=e&&e.$b)&&t[n.n]&&r.del(n.k)},Wt={add(e){let t,n=this.$b;for(t of(r(e)||(e=[e]),e))if(t){let{name:e,cache:r}=t;t.cache=0|r,n[e]=t}},create(e){let r=this.meta(e),n=0|e.cache||r.cache,i=new zt;i.set(r),i.$b={n:r.name,a:r.after,x:r.cleans,k:n&&Gt(r,e)},t(e)&&i.set(e);let o=r.before;return o&&O(o,i,i),this.fire("begin",{bag:i}),i},meta(e){return this.$b[e.name||e]||e},get(e,t){let r,n,i=this;return t||(r=i.cached(e)),r||(r=i.create(e),n=1),{e:r,u:n}},clear(e){this.$c.each(Kt,ne((e+i).split(",")))},cached(e){let t,r,n=this,i=n.$c,o=n.meta(e),l=0|e.cache||o.cache;if(l&&(r=Gt(o,e)),r){let e=n.$f[r];e?t=e.e:(t=i.get(r))&&Dt()-t.$b.t>l&&(i.del(r),t=0)}return t},...ae};return Xt.extend=((e,t,r)=>{function n(){Xt.call(this)}return n.$s=e,n.$c=new _(t,r),n.$f={},n.$b={},z(n,Xt,null,Wt)}),le.Service=Xt,j(u[g],ae),u.extend=function e(t,r){let n=this,i=t&&t.ctor;function o(...e){n.apply(this,e),i&&i.apply(this,e)}return o.extend=e,z(o,n,t,r)},le.Base=u,L=Zt.extend(),le.addView=((e,t)=>{Z[e]=t}),le})();