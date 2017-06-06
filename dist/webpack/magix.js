/*3.4.1 Licensed MIT*/module.exports=function(){var n,t,e=require("$"),r=function(){},i=e.isFunction,o=function(t,e){var o=j.views||r;if(o[U]||(o[U]=n),!t)return e();c(t)||(t=[t]);for(var a,u=[],f=0,s=function(){f||e.apply(Q,u)},$=function(n,t,e){e=function(n){u[t]||(f--,u[t]=n,s())},n=n(e),n.then&&n.then(e)},h=0;h<t.length;h++)a=o[t[h]],i(a)&&!a.extend?(f++,$(a,h)):u[h]=o[t[h]];s()},a=function(){},u=function(n,t,e,r,i){return a[V]=t[V],i=new a,C(i,e),C(n,r),i.constructor=n,n[V]=i,n},f=e.isPlainObject,c=e.isArray,s=function(n,t){e(n).html(t),y.triggerHandler({type:"htmlchange",target:n})},$=0,h="",v=[],l=v.slice,p=",",d=null,m=window,g=document,y=e(g),w="#",b=JSON.stringify,x="\x1e",k="object",V="prototype",q="/",I=/[#?].*$/,A=/([^=&?\/#]+)=?([^&#?]*)/g,T=/(?!^)=|&/,S=function(n){return(n||"mx_")+$++},U=S(),j={rootId:S(),defaultView:U,error:function(n){throw n}},H=j.hasOwnProperty,E=function(n){return typeof n==k?n:g.getElementById(n)},O=function(n,t,e){if(n=E(n),t=E(t),n&&t&&(e=n==t,!e))try{e=t.contains?t.contains(n):16&t.compareDocumentPosition(n)}catch(r){}return e},C=Object.assign||function(n,t,e){for(e in t)n[e]=t[e];return n},M=function(n,t){t&&!M[n]&&(M[n]=1,e("head").append("<style>"+t+"</style>"))},P=function(n,t,e,r,i,o){for(t=t||v,c(n)||(n=[n]),c(t)||(t=[t]),r=0;o=n[r];r++)try{i=o&&o.apply(e,t)}catch(a){j.error(a)}return i},Z=function(n,t){return n&&H.call(n,t)},L=function(n,t){return t.f-n.f||t.t-n.t},R=function(n,t,e,r){r=this,r.c=[],r.b=0|t||5,r.x=r.b+(n||20),r.r=e};C(R[V],{get:function(n){var t=this,e=t.c,r=e[x+n];return r&&(r.f++,r.t=$++,r=r.v),r},each:function(n,t,e,r,i){for(e=this,r=e.c,i=r.length-1;i>-1;i--)n(r[i].v,t,e)},set:function(n,t){var e=this,r=e.c,i=x+n,o=r[i],a=e.b;if(!o){if(r.length>=e.x)for(r.sort(L);a--;)o=r.pop(),o.f>0&&e.del(o.o);o={o:n},r.push(o),r[i]=o}o.v=t,o.f=1,o.t=$++},del:function(n){n=x+n;var t=this.c,e=t[n],r=this.r;e&&(e.f=-1,e.v=h,delete t[n],r&&P(r,e.o))},has:function(n){return Z(this.c,x+n)}});var F,B=new R,D=function(n,t,e){try{e=decodeURIComponent(e)}catch(r){}F[t]=e},N=function(n){var t,e=B.get(n);return e||(F={},t=n.replace(I,h),n==t&&T.test(t)&&(t=h),n.replace(t,h).replace(A,D),B.set(n,e={a:t,b:F})),{path:e.a,params:C({},e.b)}},z=function(n,t,e){var r,i,o,a=[];for(i in t)r=t[i]+h,(!e||r||Z(e,i))&&(r=encodeURIComponent(r),a.push(o=i+"="+r));return o&&(n+=(n&&(~n.indexOf("?")?"&":"?"))+a.join("&")),n},J=function(n,t){var e,r,i,o={};if(n&&(i=n.length))for(e=0;e<i;e++)r=n[e],o[t&&r?r[t]:r]=t?r:(0|o[r])+1;return o},K=Object.keys||function(n,t,e){t=[];for(e in n)Z(n,e)&&t.push(e);return t},Q={config:function(n,t){return t=j,n&&(t=f(n)?C(t,n):t[n]),t},boot:function(n){C(j,n),o(j.ini,function(t){C(j,t),C(j,n),o(j.exts,function(){Vn.on("changed",Mn),cn()})})},toMap:J,toTry:P,toUrl:z,parseUrl:N,mix:C,has:Z,keys:K,inside:O,node:E,applyStyle:M,guid:S,Cache:R},_="on",G={fire:function(n,t,e,r){var i,o,a,u,f=x+n,c=this,s=c[f];if(t||(t={}),t.type||(t.type=n),s)for(i=s.length,o=i-1;i--;)a=r?i:o-i,u=s[a],u.f?(u.x=1,P(u.f,t,c),u.x=h):u.x||(s.splice(a,1),o--);s=c[_+n],s&&P(s,t,c),e&&c.off(n)},on:function(n,t){var e=this,r=x+n,i=e[r]||(e[r]=[]);i.push({f:t})},off:function(n,t){var e,r,i=x+n,o=this,a=o[i];if(t){if(a)for(e=a.length;e--;)if(r=a[e],r.f==t){r.f=h;break}}else delete o[i],delete o[_+n]}};Q.Event=G;var W,X,Y,nn,tn,en,rn,on,an=w+"!",un=function(n,t){n=an+n,t?pn.replace(n):pn.hash=n},fn=function(n,t,e,r,i){n=z(n,t,i),n!=e.srcHash&&un(n,r)},cn=function(){var n,t,r=xn().srcHash;e(m).on("hashchange",function(e,i,o){t||(i=xn(),n=i.srcHash,n!=r&&(o=function(){e.p=1,t=h,un(r=n),kn()},e={reject:function(){e.p=1,t=h,un(r)},resolve:o,prevent:function(){t=1}},Vn.fire("change",e),t||e.p||o()))}),m.onbeforeunload=function(n){n=n||m.event;var t={};if(Vn.fire("pageunload",t),t.msg)return n&&(n.returnValue=t.msg),t.msg},kn()},sn="path",$n="view",hn="params",vn=new R,ln=new R,pn=m.location,dn={query:{},params:{},href:h},mn=/(?:^.*\/\/[^\/]+|#.*$)/gi,gn=/^[^#]*#?!?/,yn=function(n,t){return t=this[hn],t[n]||h},wn=function(n,t){if(nn||(nn=j.routes||{},tn=j.unmatchView,rn=j.defaultView,on=j.defaultPath||q,en=i(nn),en||nn[on]||(nn[on]=rn)),!n[$n]){var e=n.hash[sn]||W&&n.query[sn]||on;t=en?nn.call(j,e,n):nn[e]||tn||rn,n[sn]=e,n[$n]=t}},bn=function(n,t){var e=n.href,r=t.href,i=e+x+r,o=ln.get(i);if(!o){var a,u,f,c;o={force:!e},o[hn]=c={};var s,$,h=n[hn],v=t[hn],l=[sn,$n].concat(K(h),K(v));for(s=l.length-1;s>=0;s--)$=l[s],1==s&&(h=n,v=t,c=o),u=h[$],f=v[$],u!=f&&(c[$]={from:u,to:f},a=1);ln.set(i,o={a:a,b:o})}return o},xn=function(n){n=n||pn.href;var t,e,r,i,o,a=vn.get(n);return a||(t=n.replace(mn,h),e=n.replace(gn,h),r=N(t),i=N(e),o=C({},r[hn]),C(o,i[hn]),a={get:yn,href:n,srcQuery:t,srcHash:e,query:r,hash:i,params:o},wn(a),vn.set(n,a)),a},kn=function(){var n=xn(),t=bn(dn,dn=n);return t.a&&(Y=dn[hn],Vn.fire("changed",X=t.b)),X},Vn=C({parse:xn,diff:kn,to:function(n,t,e){!t&&f(n)&&(t=n,n=h);var r=N(n),i=r[hn],o=r[sn],a=dn[sn],u=dn.query[hn];if(C(i,t),o){if(!W)for(a in u)Z(i,a)||(i[a]=h)}else Y&&(o=a,i=C(C({},Y),i));fn(o,Y=i,dn,e,u)}},G);Q.Router=Vn;var qn,In,An,Tn=function(n,t,e){n.$d||n.$h||n.$cc!=n.$rc||(n.$cr||(n.$cr=1,n.$ca=0,n.fire("created")),t=n.id,e=jn[n.pId],e&&!Z(e.$r,t)&&(e.$r[t]=1,e.$rc++,Tn(e)))},Sn=function(n,t,e,r){!n.$ca&&n.$cr&&(n.$cr=0,n.$ca=1,n.fire("alter",t),e=n.id,r=jn[n.pId],r&&Z(r.$r,e)&&(r.$rc--,delete r.$r[e],Sn(r,t)))},Un=function(n,e){return qn||(t=g.body,n=j.rootId,e=E(n),e||(t.id=n),qn=new Pn(n)),qn},jn={},Hn=function(n,t){Z(jn,n)||(jn[n]=t,Pn.fire("add",{vframe:t}),n=E(n),n&&(n.vframe=t))},En=function(n,t,e){for(t=n.$il;t.length;)e=t.shift(),e.r||n.invoke(e.n,e.a),delete t[e.k]},On=function(n,t,e){e=jn[n],e&&(delete jn[n],Pn.fire("remove",{vframe:e,fcc:t}),n=E(n),n&&(n.vframe=d))},Cn=function(n,t){if(n&&n.$g!=An&&(t=n.$v)&&t.$s>0){var e=Vt(t);e&&t.render();for(var r=n.children(),i=r.length,o=0;o<i;)Cn(jn[r[o++]])}},Mn=function(n){var t,e=Un();(t=n.view)?e.mountView(t.to):(An=$++,Cn(e))},Pn=function(n,t,e){e=this,e.id=n,e.$c={},e.$cc=0,e.$rc=0,e.$s=1,e.$r={},e.$il=[],e.pId=t,Hn(n,e)};C(Pn,C({all:function(){return jn},get:function(n){return jn[n]}},G)),C(C(Pn[V],G),{mountView:function(n,t){var e,r,i,a=this,u=a.id,f=E(u);if(!a.$a&&f&&(a.$a=1,a.$t=f.innerHTML),a.unmountView(),a.$d=0,f&&n){a.path=n,e=N(n),i=e.path,r=++a.$s;var c,s,$=e.params,h=jn[a.pId];if(h=h&&h.$v,h=h&&h.updater,h&&n.indexOf(x)>0)for(c in $)s=$[c],s.charAt(0)==x&&($[c]=h.get(s));C($,t),o(i,function(n){if(r==a.$s){if(!n)return j.error(Error("id:"+u+" cannot load:"+i));xt(n),i=new n({owner:a,id:u},$),a.$v=i,a.$g=An,yt(i),i.init($),i.render(),i.$t||i.$p||i.endUpdate()}})}},unmountView:function(){var n,t,e=this,r=e.$v;e.$il=[],r&&(In||(t=1,In={id:e.id}),e.$d=1,e.unmountZone(),Sn(e,In),e.$v=0,r.$s>0&&(r.$s=0,r.fire("destroy",0,1,1),dt(r,1),yt(r,1)),r.$s--,r.owner=d,n=E(e.id),n&&e.$a&&s(n,e.$t),t&&(In=0)),e.$s++},mountVframe:function(n,t,e){var r,i=this;return Sn(i,{id:n}),r=jn[n],r||(Z(i.$c,n)||(i.$cl=h,i.$cc++),i.$c[n]=n,r=new Pn(n,i.id)),r.mountView(t,e),r},mountZone:function(n,t){var r,i,o,a=this,u=[];n=n||a.id;var f=e(w+n+" [mx-view]");for(a.$h=1,r=0;r<f.length;r++)i=f[r],o=i.id||(i.id=S()),i.$m||(i.$m=1,u.push([o,i.getAttribute("mx-view")]));for(;u.length;)i=u.shift(),o=i[0],u[o]?j.error(Error("vf.id duplicate:"+o+" at "+a.path)):a.mountVframe(u[o]=o,i[1],t);a.$h=0,Tn(a)},unmountVframe:function(n,t){var e,r,i,o=this;n=n?o.$c[n]:o.id,e=jn[n],e&&(r=e.$cr,i=e.pId,e.unmountView(),On(n,r),e.id=e.pId=h,e=jn[i],e&&Z(e.$c,n)&&(delete e.$c[n],e.$cl=h,e.$cc--,t||Tn(e)))},unmountZone:function(n){var t,e=this,r=e.$c;for(t in r)(!n||t!=n&&O(t,n))&&e.unmountVframe(t,1)},parent:function(n,t){for(t=this,n=n>>>0||1;t&&n--;)t=jn[t.pId];return t},children:function(n){return n=this,n.$cl||(n.$cl=K(n.$c))},invoke:function(n,t){var e,r,i,o,a,u=this,f=u.$il;return(r=u.$v)&&r.$p?e=(i=r[n])&&P(i,t,r):(o=f[a=x+n],o&&(o.r=t==o.a),o={n:n,a:t,k:a},f.push(o),f[a]=o),e}}),Q.Vframe=Pn;var Zn=e.find||e.zepto,Ln=Zn.matchesSelector||Zn.matches,Rn=function(n,t){t=n.data,n.eventTarget=t.e,P(t.f,n,t.v)},Fn=function(n,t,r,i,o){o&&(t+="."+o.i),i?e(n).off(t,r):e(n).on(t,o,r)},Bn="parentNode",Dn=new R(30,10),Nn=/(?:([\w\-]+)\u001e)?([^\(]+)\(([\s\S]*)?\)/,zn={},Jn={},Kn=function(n,t){var e,r,i,o,a,u,f,c=[],s=n,$=n.getAttribute("mx-"+t),h=[];if($&&(a=Dn.get($),a||(a=$.match(Nn)||v,a={v:a[1],n:a[2],i:a[3]},a.p=a.i&&P(Function("return "+a.i)),Dn.set($,a)),c.push(a={r:$,v:a.v,p:a.p,n:a.n})),a&&!a.v||Jn[t]){if(n.$v)f=n.$v;else for(h.push(s);s=s[Bn];){if(jn[r=s.id]||(r=s.$v)){f=r;break}h.push(s)}if(f){for(;$=h.pop();)$.$v=f;do if(e=jn[f],u=e.$v){i=u.$so,o=i[t];for(r in o)Ln(n,r)&&c.push({r:r,v:f,n:r});if(u.$t){a&&!a.v&&(a.v=f);break}}while(f=e.pId)}}return c},Qn=function(n){for(var e,r,i,o,a,u,f,c=n.target,s=n.type,$=[];c!=t&&1==c.nodeType;){if(r=Kn(c,s),r.length)for($=[];e=r.pop();)e.v||j.error(Error("bad "+s+":"+e.r)),o=jn[e.v],a=o&&o.$v,u=e.n+x+s,f=a[u],f&&(n.eventTarget=c,n.params=e.p||{},P(f,n,a));if((i=c.$)&&i[s]||n.isPropagationStopped())break;$.push(c),c=c[Bn]||t}for(;c=$.pop();)i=c.$||(c.$={}),i[s]=1},_n=function(n,e,r){var i=0|zn[n],o=r?-1:1;(!i||r&&1==i)&&Fn(t,n,Qn,r),zn[n]=i+o,e&&(Jn[n]=(0|Jn[n])+o)},Gn=/\\|'/g,Wn=/\r|\n/g,Xn=/<%([@=!])?([\s\S]+?)%>|$/g,Yn=function(n){var t=0,e="$p+='";return n.replace(Xn,function(r,i,o,a){return e+=n.slice(t,a).replace(Gn,"\\$&").replace(Wn,"\\n"),t=a+r.length,"@"==i?e+="'\n$s=$i();\n$p+=$s;\n$$[$s]="+o+";\n$p+='":"="==i?e+="'+\n(($t=("+o+"))==null?'':$e($t))+\n'":"!"==i?e+="'+\n(($t=("+o+"))==null?'':$t)+\n'":o&&(e+="';\n"+o+"\n$p+='"),r}),e+="';\n",e="var $t,$p='',$em={'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;','\\'':'&#x27;','`':'&#x60;'},$er=/[&<>\"'`]/g,$ef=function(m){return $em[m]},$e=function(v){return (''+v).replace($er,$ef)},$i=function(){return '"+x+"'+$g++},$s,$eum={'!':'%21','\\'':'%27','(':'%28',')':'%29','*':'%2A'},$euf=function(m){return $eum[m]},$eur=/[!')(*]/g,$eu=function(v){return encodeURIComponent(v).replace($eur,$euf)};\n"+e+"return $p;\n",Function("$g","$$",e)},nt=new R,tt=function(n,t){var e=nt.get(n);return e||(e=Yn(n),nt.set(n,e)),e(1,t)},et=/\d+\u001d/g,rt=/([\w\-:]+)(?:=(["'])([\s\S]*?)\2)?/g,it={amp:"&",lt:"<",gt:">",quot:'"',"#x27":"'","#x60":"`"},ot=/&([^;]+?);/g,at=function(n,t){return it[t]||n},ut=function(n){return!n||typeof n!=k},ft=function(n,t,e,r,i,o,a){var u,f,c,s=n.id||(n.id=S());if(i){var $=lt(tt(e.attr,r),a),h={};$.replace(rt,function(n,t,e,r){h[t]=r});for(var v,l,p,d,m,g=e.attrs.length-1;g>=0;g--)v=e.attrs[g],l=v.n,m=v.f,v.v?(u=1,f=h[l]):(p=v.p?n[m||l]:n.getAttribute(l),d=v.b?Z(h,l):h[l]||"",p!=d&&(v.p?(v.q&&(d=d.replace(ot,at)),n[m||l]=d):d?n.setAttribute(l,d):n.removeAttribute(l)))}u&&(c=jn[s],c&&c[f?"unmountView":"unmountVframe"]()),o&&t.setHTML(s,tt(e.tmpl,r)),u&&f&&t.owner.mountVframe(s,f)},ct=function(n,t,r){var i=jn[n.$i],o=i&&i.$v;if(o){var a=o.tmpl,u=a.html,f=a.subs,c=o.id;if(n.$rd&&t)for(var s,$,h,v,l,p,d,m,g=f.length-1;g>=0;g--){if(h=0,v=0,$=f[g],l=1,d=$.mask,s=$.pKeys)for(p=s.length;--p>=0;)if(Z(t,s[p])){l=0;break}if(l){for(s=$.keys,p=s.length,l=0;--p>=0;)if(Z(t,s[p])){if(l=1,!d||h&&v){h=$.tmpl,v=$.attr;break}m=d.charAt(p),h=h||1&m,v=v||2&m}if(l){var y=e(lt($.path,c));for(p=0;p<y.length;)ft(y[p++],o,$,r,v,h,c,n)}}}else{var w,b,x=function(n){return w[n].tmpl};if(f){if(!f.$)for(f.$=w={},b=f.length;b>0;){var k=f[--b];k.s&&(w[k.s]=k,k.tmpl=k.tmpl.replace(et,x),delete k.s)}w=f.$}n.$rd=1;var V=u.replace(et,x);o.setHTML(n.$t,tt(V,r))}}},st=function(n){var t=this;t.$i=n,t.$t=n,t.$data={},t.$keys={}},$t=st.prototype;C($t,{to:function(n,t){return t=this,t.$t=n,t},get:function(n){var t=this.$data;return n&&(t=t[n]),t},gain:function(n){for(var t,e=this.$data,r=n.split(".");e&&r.length;)t=r.shift(),e=e[t];return e},set:function(n){var t,e,r=this,i=r.$data,o=r.$keys;for(var a in n)e=n[a],t=i[a],ut(e)&&t==e||(o[a]=1),i[a]=e;return r},digest:function(n){var t=this;n&&t.set(n),n=t.$data;var e=t.$keys;return ct(t,e,n),t.$keys={},t},snapshot:function(){var n=this;return n.$ss=b(n.$data),n},altered:function(){var n=this;if(n.$ss)return n.$ss!=b(n.$data)}});var ht=/^(\$?)([^<]+?)<([^>]+)>$/,vt=/\u001f/g,lt=function(n,t){return(n+h).replace(vt,t||this.id)},pt=function(n,t,e){return n.$l?e=n:(e=function(n){P(e.$l,n,this)},e.$l=[n],e.$m=1),e.$l=e.$l.concat(t.$l||t),e},dt=function(n,t){var e,r,i=n.$r;for(e in i)r=i[e],(t||r.x)&&mt(i,e,1)},mt=function(n,t,e,r){var i,o,a=n[t];return a&&a!=r&&(o=a.e,i=o.destroy,i&&e&&P(i,v,o),delete n[t]),o},gt=function(n,t,e){t=n.render,n.render=function(){e=this,e.$s>0&&(e.$s++,e.fire("rendercall"),dt(e),P(t,l.call(arguments),e))}},yt=function(n,t){var e,r,i=n.$eo,o=n.$so;n.id;for(e in i)_n(e,o[e],t);for(i=n.$el,e=i.length;e--;)r=i[e],Fn(r.e,r.n,Rn,t,{i:n.id,v:n,f:r.f,e:r.e})},wt=[],bt={win:m,doc:g},xt=function(n){if(!n[x]){n[x]=1;var t,e,r,i,o,a,u,f,c,s=n[V],$={},h=[],v={};for(u in s)if(t=s[u],e=u.match(ht))for(a=e[1],r=e[2],i=e[3].split(p);f=i.pop();){if(o=bt[r],c=1,a){if(o){h.push({f:t,e:o,n:f});continue}c=2,o=v[f],o||(o=v[f]={}),o[r]=1}$[f]=$[f]|c,f=r+x+f,o=s[f],o?o.$m&&(t.$m?s[f]=pt(o,t):Z(s,u)&&(s[f]=t)):s[f]=t}gt(s),s.$eo=$,s.$el=h,s.$so=v,s.$t=!!s.tmpl}},kt=function(n,t,e){for(var r=0;r<n.length&&!(e=Z(t,n[r]));r++);return e},Vt=function(n){var t,e=n.$l;return e.f&&(e.p&&(t=X[sn]),t||(t=kt(e.k,X[hn]))),t},qt=function(n,t){t=this,C(t,n),t.$l={k:[]},t.$r={},t.$s=1,t.updater=new st(t.id),P(wt,n,t)},It=qt[V];C(qt,{merge:function(n,t){t=n&&n.ctor,t&&wt.push(t),C(It,n)},extend:function(n,t){var e=this;n=n||{};var r=n.ctor,i=[];r&&i.push(r);var o=function(n,t){e.call(this,n,t),P(i,t,this)},a=n.mixins;if(a){for(var f,c,s,$,h=a.length,v=0,l={};v<h;){f=a[v++];for(c in f)s=f[c],$=l[c],"ctor"==c?i.push(s):ht.test(c)?($?s=pt($,s):s.$m=1,l[c]=s):$?j.error(Error("mixins duplicate:"+c)):l[c]=s}n=C(l,n)}return o.extend=e.extend,u(o,e,n,t)}}),C(C(It,G),{render:r,init:r,wrapEvent:lt,beginUpdate:function(n,t){t=this,t.$s>0&&t.$p&&(t.owner.unmountZone(n),t.fire("prerender",{id:n}))},endUpdate:function(n,t,e,r){t=this,t.$s>0&&(n=n||t.id,t.fire("rendered",{id:n}),r=t.$p,t.$p=1,e=t.owner,e.mountZone(n),r||setTimeout(t.wrapAsync(function(){En(e)}),0))},wrapAsync:function(n,t){var e=this,r=e.$s;return function(){r>0&&r==e.$s&&n&&n.apply(t||e,arguments)}},observe:function(n,t){var e,r,i=this;e=i.$l,e.f=1,r=e.k,f(n)&&(t=n.path,n=n.params),e.p=t,n&&(e.k=r.concat((n+h).split(p)))},capture:function(n,t,e,r,i){return r=this.$r,t?(mt(r,n,1,t),i={e:t,x:e},r[n]=i):(i=r[n],t=i&&i.e||t),t},release:function(n,t){return mt(this.$r,n,t)},leaveTip:function(n,t){var e=this,r=function(i){var o="a",a="b";"change"!=i.type&&(o="b",a="a"),r[o]?(i.prevent(),i.reject()):t()?(i.prevent(),r[a]=1,e.leaveConfirm(n,function(){r[a]=0,i.resolve()},function(){r[a]=0,i.reject()})):i.resolve()},i=function(e){t()&&(e.msg=n)};Vn.on("change",r),Vn.on("pageunload",i),e.on("unload",r),e.on("destroy",function(){Vn.off("change",r),Vn.off("pageunload",i)})},share:function(n,t){var e=this;e.$sd||(e.$sd={}),e.$sd[n]=t},getShared:function(n){var t,e=this,r=e.$sd;if(r&&(t=Z(r,n)))return r[n];var i=e.owner.parent();return i?i.invoke("getShared",n):void 0},setHTML:function(n,t){var e,r=this;r.beginUpdate(n),r.$s>0&&(e=E(n),e&&s(e,lt(t,r.id))),r.endUpdate(n)}}),Q.View=qt;var At=e.type,Tt=e.proxy,St=e.now||Date.now,Ut=function(){this.id=S("b"),this.$={}};C(Ut[V],{get:function(n,t,e){var r=this,i=arguments.length,o=i>=2,a=r.$,u=a;if(i){for(var f,s=c(n)?l.call(n):(n+h).split(".");(f=s.shift())&&u;)u=u[f];f&&(u=e)}var $;return o&&($=At(t))!=At(u)&&(j.error(Error("type neq:"+n+" is not a(n) "+$)),u=t),u},set:function(n,t){var e,r=this;f(n)||(e={},e[n]=t,n=e),C(r.$,n)}});var jt=1,Ht=2,Et=function(n,t,e){e=this[n],e&&(delete this[n],P(e,t,e.e))},Ot=function(n,t,e,r,i,o){var a=[],u=d,f=0;return function(c,s){var $,h=this;f++;var v=h.$m,l=v.k;a[c+1]=h;var p={bag:h,error:s};if(s)u=s,t.fire("fail",p),$=1;else if(!o.has(l)){l&&o.set(l,h),v.t=St();var m=v.a;m&&P(m,h,h),v.x&&t.clear(v.x),t.fire("done",p),$=1}if(!e.$o){var g=f==r;g&&(e.$b=0,i==Ht&&(a[0]=u,P(n,a,e))),i==jt&&P(n,[s?s:d,h,g,c],e)}$&&t.fire("end",p)}},Ct=function(n,t,e,r,i){if(n.$o)return n;if(n.$b)return n.enqueue(function(){Ct(this,t,e,r,i)});n.$b=1;var o=n.constructor,a=o.$r;c(t)||(t=[t]);for(var u,f=t.length,s=Ot(e,o,n,f,r,o.$c),$=0;$<f;$++)if(u=t[$]){var h,v=o.get(u,i),l=v.e,p=l.$m.k,d=Tt(s,l,$);p&&a[p]?a[p].push(d):v.u?(p&&(h=[d],h.e=l,a[p]=h,d=Tt(Et,a,p)),o.$s(l,d)):d()}return n},Mt=function(){var n=this;n.id=S("s"),n.$q=[]};C(Mt[V],{all:function(n,t){return Ct(this,n,t,Ht)},save:function(n,t){return Ct(this,n,t,Ht,1)},one:function(n,t){return Ct(this,n,t,jt)},enqueue:function(n){var t=this;return t.$o||(t.$q.push(n),t.dequeue(t.$a)),t},dequeue:function(){var n=this,t=l.call(arguments);n.$b||n.$o||(n.$b=1,setTimeout(function(){if(n.$b=0,!n.$o){var e=n.$q.shift();e&&P(e,n.$a=t,n)}},0))},destroy:function(n){n=this,n.$o=1,n.$q=0}});var Pt=function(n,t,e){return e=[b(t),b(n)],e.join(x)},Zt=function(n,t,e,r){r=n&&n.$m,r&&t[r.n]&&e.del(r.k)},Lt=C({add:function(n){var t=this,e=t.$m;c(n)||(n=[n]);for(var r,i,o=n.length-1;o>-1;o--)r=n[o],r&&(i=r.name,r.cache=0|r.cache,e[i]=r)},create:function(n){var t=this,e=t.meta(n),r=0|n.cache||e.cache,i=new Ut;i.set(e),i.$m={n:e.name,a:e.after,x:e.cleans,k:r&&Pt(e,n)},f(n)&&i.set(n);var o=e.before;return o&&P(o,i,i),t.fire("begin",{bag:i}),i},meta:function(n){var t=this,e=t.$m,r=n.name||n,i=e[r];return i||n},get:function(n,t){var e,r,i=this;return t||(e=i.cached(n)),e||(e=i.create(n),r=1),{e:e,u:r}},clear:function(n){this.$c.each(Zt,J((n+h).split(p)))},cached:function(n){var t,e,r=this,i=r.$c,o=r.meta(n),a=0|n.cache||o.cache;if(a&&(e=Pt(o,n)),e){var u=r.$r,f=u[e];f?t=f.e:(t=i.get(e),t&&St()-t.$m.t>a&&(i.del(e),t=0))}return t}},G);Mt.extend=function(n,t,e){var r=this,i=function(){r.call(this)};return i.$s=n,i.$c=new R(t,e),i.$r={},i.$m={},u(i,r,d,Lt)},Q.Service=Mt;var Rt=function(n,t){var e=this,r=n&&n.ctor,i=function(){var n=this,t=arguments;e.apply(n,t),r&&r.apply(n,t)};return i.extend=Rt,u(i,e,n,t)};return C(r[V],G),r.extend=Rt,Q.Base=r,n=qt.extend(),Q}();