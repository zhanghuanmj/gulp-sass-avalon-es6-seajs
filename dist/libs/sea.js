/*! yimay_gf - v1.0.0 - 2015-11-19 */!function(a,b){function c(a){return function(b){return{}.toString.call(b)=="[object "+a+"]"}}function d(){return A++}function e(a){return a.match(D)[0]}function f(a){for(a=a.replace(E,"/"),a=a.replace(G,"$1/");a.match(F);)a=a.replace(F,"/");return a}function g(a){var b=a.length-1,c=a.charCodeAt(b);return 35===c?a.substring(0,b):".js"===a.substring(b-2)||a.indexOf("?")>0||47===c?a:a+".js"}function h(a){var b=v.alias;return b&&x(b[a])?b[a]:a}function i(a){var b,c=v.paths;return c&&(b=a.match(H))&&x(c[b[1]])&&(a=c[b[1]]+b[2]),a}function j(a){var b=v.vars;return b&&a.indexOf("{")>-1&&(a=a.replace(I,function(a,c){return x(b[c])?b[c]:a})),a}function k(a){var b=v.map,c=a;if(b)for(var d=0,e=b.length;e>d;d++){var f=b[d];if(c=z(f)?f(a)||a:a.replace(f[0],f[1]),c!==a)break}return c}function l(a,b){var c,d=a.charCodeAt(0);if(J.test(a))c=a;else if(46===d)c=(b?e(b):v.cwd)+a;else if(47===d){var g=v.cwd.match(K);c=g?g[0]+a.substring(1):a}else c=v.base+a;return 0===c.indexOf("//")&&(c=location.protocol+c),f(c)}function m(a,b){if(!a)return"";a=h(a),a=i(a),a=h(a),a=j(a),a=h(a),a=g(a),a=h(a);var c=l(a,b);return c=h(c),c=k(c)}function n(a){return a.hasAttribute?a.src:a.getAttribute("src",4)}function o(a,b,c){var d;try{importScripts(a)}catch(e){d=e}b(d)}function p(a,b,c){var d=Y.createElement("script");if(c){var e=z(c)?c(a):c;e&&(d.charset=e)}q(d,b,a),d.async=!0,d.src=a,_=d,ba?aa.insertBefore(d,ba):aa.appendChild(d),_=null}function q(a,b,c){function d(c){a.onload=a.onerror=a.onreadystatechange=null,v.debug||aa.removeChild(a),a=null,b(c)}var e="onload"in a;e?(a.onload=d,a.onerror=function(){C("error",{uri:c,node:a}),d(!0)}):a.onreadystatechange=function(){/loaded|complete/.test(a.readyState)&&d()}}function r(){if(_)return _;if(ca&&"interactive"===ca.readyState)return ca;for(var a=aa.getElementsByTagName("script"),b=a.length-1;b>=0;b--){var c=a[b];if("interactive"===c.readyState)return ca=c}}function s(a){function b(){k=a.charAt(l++)}function c(){return/\s/.test(k)}function d(){return'"'==k||"'"==k}function e(){var c=l,d=k,e=a.indexOf(d,c);if(-1==e)l=m;else if("\\"!=a.charAt(e-1))l=e+1;else for(;m>l;)if(b(),"\\"==k)l++;else if(k==d)break;o&&(r.push(a.slice(c,l-1)),o=0)}function f(){for(l--;m>l;)if(b(),"\\"==k)l++;else{if("/"==k)break;if("["==k)for(;m>l;)if(b(),"\\"==k)l++;else if("]"==k)break}}function g(){return/[a-z_$]/i.test(k)}function h(){var b=a.slice(l-1),c=/^[\w$]+/.exec(b)[0];p={"if":1,"for":1,"while":1,"with":1}[c],n={"break":1,"case":1,"continue":1,"debugger":1,"delete":1,"do":1,"else":1,"false":1,"if":1,"in":1,"instanceof":1,"return":1,"typeof":1,"void":1}[c],o=/^require\s*\(\s*(['"]).+?\1\s*\)/.test(b),o?(c=/^require\s*\(\s*['"]/.exec(b)[0],l+=c.length-2):l+=/^[\w$]+(?:\s*\.\s*[\w$]+)*/.exec(b)[0].length-1}function i(){return/\d/.test(k)||"."==k&&/\d/.test(a.charAt(l))}function j(){var b,c=a.slice(l-1);b="."==k?/^\.\d+(?:E[+-]?\d*)?\s*/i.exec(c)[0]:/^0x[\da-f]*/i.test(c)?/^0x[\da-f]*\s*/i.exec(c)[0]:/^\d+\.?\d*(?:E[+-]?\d*)?\s*/i.exec(c)[0],l+=b.length-1,n=0}if(-1==a.indexOf("require"))return[];for(var k,l=0,m=a.length,n=1,o=0,p=0,q=[],r=[];m>l;)b(),c()||(d()?(e(),n=1):"/"==k?(b(),"/"==k?(l=a.indexOf("\n",l),-1==l&&(l=a.length)):"*"==k?(l=a.indexOf("*/",l),-1==l?l=m:l+=2):n?(f(),n=0):(l--,n=1)):g()?h():i()?j():"("==k?(q.push(p),n=1):")"==k?n=q.pop():(n="]"!=k,o=0));return r}function t(a,b){this.uri=a,this.dependencies=b||[],this.deps={},this.status=0,this._entry=[]}if(!a.seajs){var u=a.seajs={version:"3.0.0"},v=u.data={},w=c("Object"),x=c("String"),y=Array.isArray||c("Array"),z=c("Function"),A=0,B=v.events={};u.on=function(a,b){var c=B[a]||(B[a]=[]);return c.push(b),u},u.off=function(a,b){if(!a&&!b)return B=v.events={},u;var c=B[a];if(c)if(b)for(var d=c.length-1;d>=0;d--)c[d]===b&&c.splice(d,1);else delete B[a];return u};var C=u.emit=function(a,b){var c=B[a];if(c){c=c.slice();for(var d=0,e=c.length;e>d;d++)c[d](b)}return u},D=/[^?#]*\//,E=/\/\.\//g,F=/\/[^\/]+\/\.\.\//,G=/([^:\/])\/+\//g,H=/^([^\/:]+)(\/.+)$/,I=/{([^{]+)}/g,J=/^\/\/.|:\//,K=/^.*?\/\/.*?\//;u.resolve=m;var L,M,N="undefined"==typeof window&&"undefined"!=typeof importScripts&&z(importScripts),O=/^(about|blob):/,P=!location.href||O.test(location.href)?"":e(location.href);if(N){var Q;try{var R=Error();throw R}catch(S){Q=S.stack.split("\n")}Q.shift();for(var T,U=/.*?((?:http|https|file)(?::\/{2}[\w]+)(?:[\/|\.]?)(?:[^\s"]*)).*?/i,V=/(.*?):\d+:\d+\)?$/;Q.length>0;){var W=Q.shift();if(T=U.exec(W),null!=T)break}var X;if(null!=T)var X=V.exec(T[1])[1];M=X,L=e(X||P),""===P&&(P=L)}else{var Y=document,Z=Y.scripts,$=Y.getElementById("seajsnode")||Z[Z.length-1];M=n($),L=e(M||P)}if(N)u.request=o;else{var _,Y=document,aa=Y.head||Y.getElementsByTagName("head")[0]||Y.documentElement,ba=aa.getElementsByTagName("base")[0];u.request=p}var ca,da,ea=u.cache={},fa={},ga={},ha={},ia=t.STATUS={FETCHING:1,SAVED:2,LOADING:3,LOADED:4,EXECUTING:5,EXECUTED:6,ERROR:7};t.prototype.resolve=function(){for(var a=this,b=a.dependencies,c=[],d=0,e=b.length;e>d;d++)c[d]=t.resolve(b[d],a.uri);return c},t.prototype.pass=function(){for(var a=this,b=a.dependencies.length,c=0;c<a._entry.length;c++){for(var d=a._entry[c],e=0,f=0;b>f;f++){var g=a.deps[a.dependencies[f]];g.status<ia.LOADED&&!d.history.hasOwnProperty(g.uri)&&(d.history[g.uri]=!0,e++,g._entry.push(d),g.status===ia.LOADING&&g.pass())}e>0&&(d.remain+=e-1,a._entry.shift(),c--)}},t.prototype.load=function(){var a=this;if(!(a.status>=ia.LOADING)){a.status=ia.LOADING;var c=a.resolve();C("load",c);for(var d=0,e=c.length;e>d;d++)a.deps[a.dependencies[d]]=t.get(c[d]);if(a.pass(),a._entry.length)return a.onload(),b;var f,g={};for(d=0;e>d;d++)f=ea[c[d]],f.status<ia.FETCHING?f.fetch(g):f.status===ia.SAVED&&f.load();for(var h in g)g.hasOwnProperty(h)&&g[h]()}},t.prototype.onload=function(){var a=this;a.status=ia.LOADED;for(var b=0,c=(a._entry||[]).length;c>b;b++){var d=a._entry[b];0===--d.remain&&d.callback()}delete a._entry},t.prototype.error=function(){var a=this;a.onload(),a.status=ia.ERROR},t.prototype.exec=function(){function a(b){var d=c.deps[b]||t.get(a.resolve(b));if(d.status==ia.ERROR)throw Error("module was broken: "+d.uri);return d.exec()}var c=this;if(c.status>=ia.EXECUTING)return c.exports;if(c.status=ia.EXECUTING,c._entry&&!c._entry.length&&delete c._entry,!c.hasOwnProperty("factory"))return c.non=!0,b;var e=c.uri;a.resolve=function(a){return t.resolve(a,e)},a.async=function(b,c){return t.use(b,c,e+"_async_"+d()),a};var f=c.factory,g=z(f)?f(a,c.exports={},c):f;return g===b&&(g=c.exports),delete c.factory,c.exports=g,c.status=ia.EXECUTED,C("exec",c),c.exports},t.prototype.fetch=function(a){function c(){u.request(g.requestUri,g.onRequest,g.charset)}function d(a){delete fa[h],ga[h]=!0,da&&(t.save(f,da),da=null);var b,c=ha[h];for(delete ha[h];b=c.shift();)a===!0?b.error():b.load()}var e=this,f=e.uri;e.status=ia.FETCHING;var g={uri:f};C("fetch",g);var h=g.requestUri||f;return!h||ga.hasOwnProperty(h)?(e.load(),b):fa.hasOwnProperty(h)?(ha[h].push(e),b):(fa[h]=!0,ha[h]=[e],C("request",g={uri:f,requestUri:h,onRequest:d,charset:z(v.charset)?v.charset(h)||"utf-8":v.charset}),g.requested||(a?a[g.requestUri]=c:c()),b)},t.resolve=function(a,b){var c={id:a,refUri:b};return C("resolve",c),c.uri||u.resolve(c.id,b)},t.define=function(a,c,d){var e=arguments.length;1===e?(d=a,a=b):2===e&&(d=c,y(a)?(c=a,a=b):c=b),!y(c)&&z(d)&&(c=b===s?[]:s(""+d));var f={id:a,uri:t.resolve(a),deps:c,factory:d};if(!N&&!f.uri&&Y.attachEvent&&b!==r){var g=r();g&&(f.uri=g.src)}C("define",f),f.uri?t.save(f.uri,f):da=f},t.save=function(a,b){var c=t.get(a);c.status<ia.SAVED&&(c.id=b.id||a,c.dependencies=b.deps||[],c.factory=b.factory,c.status=ia.SAVED,C("save",c))},t.get=function(a,b){return ea[a]||(ea[a]=new t(a,b))},t.use=function(b,c,d){var e=t.get(d,y(b)?b:[b]);e._entry.push(e),e.history={},e.remain=1,e.callback=function(){for(var b=[],d=e.resolve(),f=0,g=d.length;g>f;f++)b[f]=ea[d[f]].exec();c&&c.apply(a,b),delete e.callback,delete e.history,delete e.remain,delete e._entry},e.load()},u.use=function(a,b){return t.use(a,b,v.cwd+"_use_"+d()),u},t.define.cmd={},a.define=t.define,u.Module=t,v.fetchedList=ga,v.cid=d,u.require=function(a){var b=t.get(t.resolve(a));return b.status<ia.EXECUTING&&(b.onload(),b.exec()),b.exports},v.base=L,v.dir=L,v.loader=M,v.cwd=P,v.charset="utf-8",u.config=function(a){for(var b in a){var c=a[b],d=v[b];if(d&&w(d))for(var e in c)d[e]=c[e];else y(d)?c=d.concat(c):"base"===b&&("/"!==c.slice(-1)&&(c+="/"),c=l(c)),v[b]=c}return C("config",a),u}}}(this);