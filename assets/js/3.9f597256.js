(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{300:function(t,e,n){"use strict";var i=n(1),s=n(44).some,r=n(43),a=n(20),o=r("some"),l=a("some");i({target:"Array",proto:!0,forced:!o||!l},{some:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},301:function(t,e,n){"use strict";var i=n(167),s=n(166),r=n(6),a=n(24),o=n(96),l=n(168),u=n(14),c=n(169),p=n(67),h=n(2),d=[].push,f=Math.min,g=!h((function(){return!RegExp(4294967295,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(a(this)),r=void 0===n?4294967295:n>>>0;if(0===r)return[];if(void 0===t)return[i];if(!s(t))return e.call(i,t,r);for(var o,l,u,c=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,g=new RegExp(t.source,h+"g");(o=p.call(g,i))&&!((l=g.lastIndex)>f&&(c.push(i.slice(f,o.index)),o.length>1&&o.index<i.length&&d.apply(c,o.slice(1)),u=o[0].length,f=l,c.length>=r));)g.lastIndex===o.index&&g.lastIndex++;return f===i.length?!u&&g.test("")||c.push(""):c.push(i.slice(f)),c.length>r?c.slice(0,r):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var s=a(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,s,n):i.call(String(s),e,n)},function(t,s){var a=n(i,t,this,s,i!==e);if(a.done)return a.value;var p=r(t),h=String(this),d=o(p,RegExp),v=p.unicode,m=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(g?"y":"g"),b=new d(g?p:"^(?:"+p.source+")",m),_=void 0===s?4294967295:s>>>0;if(0===_)return[];if(0===h.length)return null===c(b,h)?[h]:[];for(var k=0,x=0,$=[];x<h.length;){b.lastIndex=g?x:0;var C,y=c(b,g?h:h.slice(x));if(null===y||(C=f(u(b.lastIndex+(g?0:x)),h.length))===k)x=l(h,x,v);else{if($.push(h.slice(k,x)),$.length===_)return $;for(var S=1;S<=y.length-1;S++)if($.push(y[S]),$.length===_)return $;x=k=C}}return $.push(h.slice(k)),$}]}),!g)},302:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},303:function(t,e,n){var i=n(5),s=n(95);t.exports=function(t,e,n){var r,a;return s&&"function"==typeof(r=e.constructor)&&r!==n&&i(a=r.prototype)&&a!==n.prototype&&s(t,a),t}},304:function(t,e,n){var i=n(24),s="["+n(302)+"]",r=RegExp("^"+s+s+"*"),a=RegExp(s+s+"*$"),o=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(r,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},305:function(t,e,n){},306:function(t,e,n){},307:function(t,e,n){},308:function(t,e,n){},309:function(t,e,n){},310:function(t,e,n){},311:function(t,e,n){},312:function(t,e,n){},313:function(t,e,n){},314:function(t,e,n){},315:function(t,e,n){},316:function(t,e,n){},317:function(t,e,n){},318:function(t,e,n){},319:function(t,e,n){},320:function(t,e,n){},326:function(t,e,n){"use strict";var i=n(167),s=n(6),r=n(14),a=n(24),o=n(168),l=n(169);i("match",1,(function(t,e,n){return[function(e){var n=a(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,t,this);if(i.done)return i.value;var a=s(t),u=String(this);if(!a.global)return l(a,u);var c=a.unicode;a.lastIndex=0;for(var p,h=[],d=0;null!==(p=l(a,u));){var f=String(p[0]);h[d]=f,""===f&&(a.lastIndex=o(u,r(a.lastIndex),c)),d++}return 0===d?null:h}]}))},327:function(t,e,n){var i,s;
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */void 0===(s="function"==typeof(i=function(){var t,e,n={version:"0.2.0"},i=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function s(t,e,n){return t<e?e:t>n?n:t}function r(t){return 100*(-1+t)}n.configure=function(t){var e,n;for(e in t)void 0!==(n=t[e])&&t.hasOwnProperty(e)&&(i[e]=n);return this},n.status=null,n.set=function(t){var e=n.isStarted();t=s(t,i.minimum,1),n.status=1===t?null:t;var l=n.render(!e),u=l.querySelector(i.barSelector),c=i.speed,p=i.easing;return l.offsetWidth,a((function(e){""===i.positionUsing&&(i.positionUsing=n.getPositioningCSS()),o(u,function(t,e,n){var s;return(s="translate3d"===i.positionUsing?{transform:"translate3d("+r(t)+"%,0,0)"}:"translate"===i.positionUsing?{transform:"translate("+r(t)+"%,0)"}:{"margin-left":r(t)+"%"}).transition="all "+e+"ms "+n,s}(t,c,p)),1===t?(o(l,{transition:"none",opacity:1}),l.offsetWidth,setTimeout((function(){o(l,{transition:"all "+c+"ms linear",opacity:0}),setTimeout((function(){n.remove(),e()}),c)}),c)):setTimeout(e,c)})),this},n.isStarted=function(){return"number"==typeof n.status},n.start=function(){n.status||n.set(0);var t=function(){setTimeout((function(){n.status&&(n.trickle(),t())}),i.trickleSpeed)};return i.trickle&&t(),this},n.done=function(t){return t||n.status?n.inc(.3+.5*Math.random()).set(1):this},n.inc=function(t){var e=n.status;return e?("number"!=typeof t&&(t=(1-e)*s(Math.random()*e,.1,.95)),e=s(e+t,0,.994),n.set(e)):n.start()},n.trickle=function(){return n.inc(Math.random()*i.trickleRate)},t=0,e=0,n.promise=function(i){return i&&"resolved"!==i.state()?(0===e&&n.start(),t++,e++,i.always((function(){0==--e?(t=0,n.done()):n.set((t-e)/t)})),this):this},n.render=function(t){if(n.isRendered())return document.getElementById("nprogress");u(document.documentElement,"nprogress-busy");var e=document.createElement("div");e.id="nprogress",e.innerHTML=i.template;var s,a=e.querySelector(i.barSelector),l=t?"-100":r(n.status||0),c=document.querySelector(i.parent);return o(a,{transition:"all 0 linear",transform:"translate3d("+l+"%,0,0)"}),i.showSpinner||(s=e.querySelector(i.spinnerSelector))&&h(s),c!=document.body&&u(c,"nprogress-custom-parent"),c.appendChild(e),e},n.remove=function(){c(document.documentElement,"nprogress-busy"),c(document.querySelector(i.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&h(t)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};var a=function(){var t=[];function e(){var n=t.shift();n&&n(e)}return function(n){t.push(n),1==t.length&&e()}}(),o=function(){var t=["Webkit","O","Moz","ms"],e={};function n(n){return n=n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(t,e){return e.toUpperCase()})),e[n]||(e[n]=function(e){var n=document.body.style;if(e in n)return e;for(var i,s=t.length,r=e.charAt(0).toUpperCase()+e.slice(1);s--;)if((i=t[s]+r)in n)return i;return e}(n))}function i(t,e,i){e=n(e),t.style[e]=i}return function(t,e){var n,s,r=arguments;if(2==r.length)for(n in e)void 0!==(s=e[n])&&e.hasOwnProperty(n)&&i(t,n,s);else i(t,r[1],r[2])}}();function l(t,e){return("string"==typeof t?t:p(t)).indexOf(" "+e+" ")>=0}function u(t,e){var n=p(t),i=n+e;l(n,e)||(t.className=i.substring(1))}function c(t,e){var n,i=p(t);l(t,e)&&(n=i.replace(" "+e+" "," "),t.className=n.substring(1,n.length-1))}function p(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function h(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return n})?i.call(e,n,e,t):i)||(t.exports=s)},328:function(t,e,n){"use strict";var i=n(305);n.n(i).a},329:function(t,e,n){"use strict";var i=n(1),s=n(330);i({target:"String",proto:!0,forced:n(331)("link")},{link:function(t){return s(this,"a","href",t)}})},330:function(t,e,n){var i=n(24),s=/"/g;t.exports=function(t,e,n,r){var a=String(i(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+a+"</"+e+">"}},331:function(t,e,n){var i=n(2);t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},332:function(t,e,n){"use strict";var i=n(306);n.n(i).a},333:function(t,e,n){"use strict";var i=n(307);n.n(i).a},334:function(t,e,n){var i=n(1),s=n(335);i({global:!0,forced:parseInt!=s},{parseInt:s})},335:function(t,e,n){var i=n(4),s=n(304).trim,r=n(302),a=i.parseInt,o=/^[+-]?0[Xx]/,l=8!==a(r+"08")||22!==a(r+"0x16");t.exports=l?function(t,e){var n=s(String(t));return a(n,e>>>0||(o.test(n)?16:10))}:a},336:function(t,e,n){"use strict";var i=n(308);n.n(i).a},337:function(t,e,n){"use strict";var i=n(309);n.n(i).a},338:function(t,e,n){"use strict";var i=n(1),s=n(304).trim;i({target:"String",proto:!0,forced:n(339)("trim")},{trim:function(){return s(this)}})},339:function(t,e,n){var i=n(2),s=n(302);t.exports=function(t){return i((function(){return!!s[t]()||"​᠎"!="​᠎"[t]()||s[t].name!==t}))}},340:function(t,e,n){"use strict";var i=n(310);n.n(i).a},341:function(t,e,n){var i=n(7),s=n(4),r=n(94),a=n(303),o=n(9).f,l=n(68).f,u=n(166),c=n(102),p=n(180),h=n(11),d=n(2),f=n(30).set,g=n(171),v=n(3)("match"),m=s.RegExp,b=m.prototype,_=/a/g,k=/a/g,x=new m(_)!==_,$=p.UNSUPPORTED_Y;if(i&&r("RegExp",!x||$||d((function(){return k[v]=!1,m(_)!=_||m(k)==k||"/a/i"!=m(_,"i")})))){for(var C=function(t,e){var n,i=this instanceof C,s=u(t),r=void 0===e;if(!i&&s&&t.constructor===C&&r)return t;x?s&&!r&&(t=t.source):t instanceof C&&(r&&(e=c.call(t)),t=t.source),$&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var o=a(x?new m(t,e):m(t,e),i?this:b,C);return $&&n&&f(o,{sticky:n}),o},y=function(t){t in C||o(C,t,{configurable:!0,get:function(){return m[t]},set:function(e){m[t]=e}})},S=l(m),w=0;S.length>w;)y(S[w++]);b.constructor=C,C.prototype=b,h(s,"RegExp",C)}g("RegExp")},342:function(t,e,n){"use strict";var i=n(311);n.n(i).a},343:function(t,e,n){"use strict";var i=n(312);n.n(i).a},344:function(t,e,n){"use strict";var i=n(313);n.n(i).a},345:function(t,e,n){"use strict";var i=n(314);n.n(i).a},346:function(t,e,n){"use strict";var i=n(315);n.n(i).a},347:function(t,e,n){"use strict";var i=n(316);n.n(i).a},348:function(t,e,n){"use strict";var i=n(317);n.n(i).a},349:function(t,e,n){"use strict";var i=n(318);n.n(i).a},350:function(t,e,n){"use strict";var i=n(319);n.n(i).a},351:function(t,e,n){"use strict";var i=n(320);n.n(i).a},377:function(t,e,n){"use strict";n.r(e);n(104);var i=n(0),s=n(327),r=n.n(s),a=(n(170),n(97),n(65),n(64),n(93),n(98),n(32)),o=(n(28),n(178),n(103),n(181),n(66),n(326),n(301),/#.*$/),l=/\.(md|html)$/,u=/\/$/,c=/^(https?:|mailto:|tel:)/,p=/(\.xml)/;function h(t){return decodeURI(t).replace(o,"").replace(l,"")}function d(t){return c.test(t)}function f(t){return p.test(t)}function g(t){if(d(t))return t;var e=t.match(o),n=e?e[0]:"",i=h(t);return u.test(i)||f(i)?t:i+".html"+n}function v(t,e){var n=t.hash,i=function(t){var e=t.match(o);if(e)return e[0]}(e);return(!i||n===i)&&h(t.path)===h(e)}function m(t,e,n){n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var s=e.split("/");n&&s[s.length-1]||s.pop();for(var r=t.replace(/^\//,"").split("/"),a=0;a<r.length;a++){var o=r[a];".."===o?s.pop():"."!==o&&s.push(o)}""!==s[0]&&s.unshift("");return s.join("/")}(e,n));for(var i=h(e),s=0;s<t.length;s++)if(h(t[s].path)===i)return Object.assign({},t[s],{type:"page",path:g(e)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function b(t,e,n,i){var s=n.pages,r=n.themeConfig,a=i&&r.locales&&r.locales[i]||r;if("auto"===(t.frontmatter.sidebar||a.sidebar||r.sidebar))return function(t){var e=_(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var o=a.sidebar||r.sidebar;if(o){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t.path,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(n))return{base:n,config:e[n]};var i;return{}}(e,o),u=l.base,c=l.config;return c?c.map((function(t){return function t(e,n,i,s){if("string"==typeof e)return m(n,e,i);if(Array.isArray(e))return Object.assign(m(n,e[0],i),{title:e[1]});s&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");var r=e.children||[];return{type:"group",title:e.title,children:r.map((function(e){return t(e,n,i,!0)})),collapsable:!1!==e.collapsable}}(t,s,u)})):[]}return[]}function _(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function k(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}function x(t,e,n){var i=[];e.forEach((function(t){"group"===t.type?i.push.apply(i,Object(a.a)(t.children||[])):i.push(t)}));for(var s=0;s<i.length;s++){var r=i[s];if("page"===r.type&&r.path===t.path)return i[s+n]}}var $={name:"Blog",props:["sidebarItems"],computed:{lastUpdated:function(){if(this.$page.lastUpdated){var t=new Date(this.$page.lastUpdated);return"".concat(t.toLocaleDateString(this.$lang,{year:"numeric",month:"long",day:"numeric"}),", ").concat(t.toLocaleTimeString(this.$lang))}},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?m(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,x(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?m(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,x(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,s=void 0===i?"":i,r=t.docsBranch,a=void 0===r?"master":r,o=t.docsRepo,l=void 0===o?e:o,c=h(this.$page.path);return u.test(c)?c+="README.md":c+=".md",l&&n?this.createEditLink(e,l,s,a,c):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"},publishDate:function(){return new Date(this.$frontmatter.date).toLocaleDateString(this.$lang,{year:"numeric",month:"long",day:"numeric"})}},methods:{createEditLink:function(t,e,n,i,s){return/bitbucket.org/.test(t)?(c.test(e)?e:t).replace(u,"")+"/".concat(i)+(n?"/"+n.replace(u,""):"")+s+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(c.test(e)?e:"https://github.com/".concat(e)).replace(u,"")+"/edit/".concat(i)+(n?"/"+n.replace(u,""):"")+s}}},C=(n(328),n(42)),y=Object(C.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog"},[n("div",{staticClass:"blog__header"},[n("p",{staticClass:"publish-date"},[n("time",{attrs:{datetime:t.$frontmatter.date}},[t._v(t._s(t.publishDate))])]),t._v(" "),t.$page.readingTime?n("p",[t._v("Time to read: "+t._s(t.$page.readingTime.text))]):t._e(),t._v(" "),n("h1",{staticClass:"blog__title"},[t._v(t._s(t.$page.title))])]),t._v(" "),n("Content",{staticClass:"custom"}),t._v(" "),n("div",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("time",{staticClass:"time",attrs:{datetime:t.$page.lastUpdated}},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)}),[],!1,null,"3d5e3e24",null).exports,S=(n(300),n(99),n(329),{props:{item:{required:!0}},computed:{link:function(){return g(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link}},methods:{isExternal:d,isMailto:function(t){return/^mailto:/.test(t)},isTel:function(t){return/^tel:/.test(t)},isXml:f}}),w=Object(C.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)||t.isXml(t.link)?t.isXml(t.link)?n("a",{staticClass:"nav-link",attrs:{href:t.link}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+" \n\n  ")]):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null).exports,L={components:{NavLink:w},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},E=(n(332),Object(C.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:"hero"}}):t._e(),t._v(" "),n("h1",[t._v(t._s(t.data.heroText||t.$title||"Hello"))]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{attrs:{custom:""}}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports);function O(t,e,n){var i=[];e.forEach((function(t){"group"===t.type?i.push.apply(i,Object(a.a)(t.children||[])):i.push(t)}));for(var s=0;s<i.length;s++){var r=i[s];if("page"===r.type&&r.path===t.path)return i[s+n]}}var T={props:["sidebarItems"],computed:{lastUpdated:function(){if(this.$page.lastUpdated)return new Date(this.$page.lastUpdated).toLocaleString(this.$lang)},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?m(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,O(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?m(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,O(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,s=void 0===i?"":i,r=t.docsBranch,a=void 0===r?"master":r,o=t.docsRepo,l=void 0===o?e:o,c=h(this.$page.path);return u.test(c)?c+="README.md":c+=".md",l&&n?this.createEditLink(e,l,s,a,c):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,s){return/bitbucket.org/.test(t)?(c.test(e)?e:t).replace(u,"")+"/".concat(i)+(n?"/"+n.replace(u,""):"")+s+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(c.test(e)?e:"https://github.com/".concat(e)).replace(u,"")+"/edit/".concat(i)+(n?"/"+n.replace(u,""):"")+s}}},I=(n(333),Object(C.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{attrs:{custom:!1}}),t._v(" "),n("div",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),U=(n(334),n(336),Object(C.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),j=(n(10),n(25),n(31),n(92)),N={props:["options"],mounted:function(){this.initialize(this.options,this.$lang)},methods:{initialize:function(t,e){Promise.all([Promise.all([n.e(0),n.e(2)]).then(n.t.bind(null,375,7)),Promise.all([n.e(0),n.e(2)]).then(n.t.bind(null,376,7))]).then((function(n){var i=Object(j.a)(n,1)[0];i=i.default;var s=t.algoliaOptions,r=void 0===s?{}:s;i(Object.assign({},t,{inputSelector:"#algolia-search-input",algoliaOptions:Object.assign({facetFilters:["lang:".concat(e)].concat(r.facetFilters||[])},r)}))}))},update:function(t,e){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(t,e)}},watch:{$lang:function(t){this.update(this.options,t)},options:function(t){this.update(t,this.$lang)}}},P=(n(337),Object(C.a)(N,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form"}},[e("input",{staticClass:"search-query",attrs:{id:"algolia-search-input"}})])}],!1,null,null,null).exports),D=(n(338),{data:function(){return{query:"",focused:!1,focusIndex:0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site,n=e.pages,i=e.themeConfig.searchMaxSuggestions||5,s=this.$localePath,r=function(e){return e.title&&e.title.toLowerCase().indexOf(t)>-1},a=[],o=0;o<n.length&&!(a.length>=i);o++){var l=n[o];if(this.getPageLocalePath(l)===s)if(r(l))a.push(l);else if(l.headers)for(var u=0;u<l.headers.length&&!(a.length>=i);u++){var c=l.headers[u];r(c)&&a.push(Object.assign({},l,{path:l.path+"#"+c.slug,header:c}))}}return a}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),R=(n(340),Object(C.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,i){return n("li",{staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports),M=(n(341),n(105),{name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}}),W=(n(342),Object(C.a)(M,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null).exports),B={components:{NavLink:w,DropdownTransition:W},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},A=(n(343),{components:{NavLink:w,DropdownLink:Object(C.a)(B,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)})),0):n("NavLink",{attrs:{item:e}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,s=this.$site.themeConfig.locales||{},r={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map((function(r){var a,o=e[r],l=s[r]&&s[r].label||o.lang;return o.lang===t.$lang?a=n:(a=n.replace(t.$localeConfig.path,r),i.some((function(t){return t.path===a}))||(a=r)),{text:l,link:a}}))};return[].concat(Object(a.a)(this.userNav),[r])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(k(t),{items:(t.items||[]).map(k)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}}),H=(n(344),Object(C.a)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports);function q(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var G={components:{SidebarButton:U,NavLinks:H,SearchBox:R,AlgoliaSearchBox:P},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(q(this.$el,"paddingLeft"))+parseInt(q(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},z=(n(345),Object(C.a)(G,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:{"max-width":t.linksWrapMaxWidth+"px"}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports);function X(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function V(t,e,n,i,s){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||r>s?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var a=v(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[X(t,n+"#"+e.slug,e.title,a),V(t,e.children,n,i,s,r+1)])})))}var Y={functional:!0,props:["item"],render:function(t,e){var n=e.parent,i=n.$page,s=n.$site,r=n.$route,a=e.props.item,l=v(r,a.path),u="auto"===a.type?l||a.children.some((function(t){return v(r,a.basePath+"#"+t.slug)})):l,c=X(t,a.path,a.title||a.path,u),p=null!=i.frontmatter.sidebarDepth?i.frontmatter.sidebarDepth:s.themeConfig.sidebarDepth,h=null==p?1:p,d=!!s.themeConfig.displayAllHeaders;return"auto"===a.type?[c,V(t,a.children,a.basePath,r,h)]:(u||d)&&a.headers&&!o.test(a.path)?[c,V(t,_(a.headers),a.path,r,h)]:c}},F=(n(346),Object(C.a)(Y,void 0,void 0,!1,null,null,null).exports),J={name:"SidebarGroup",props:["item","first","open","collapsable"],components:{SidebarLink:F,DropdownTransition:W}};n(347);var K={components:{SidebarGroup:Object(C.a)(J,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-group",class:{first:t.first,collapsable:t.collapsable}},[n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("ul",{ref:"items",staticClass:"sidebar-group-items"},t._l(t.item.children,(function(t){return n("li",[n("SidebarLink",{attrs:{item:t}})],1)})),0):t._e()])],1)}),[],!1,null,null,null).exports,SidebarLink:F,NavLinks:H},props:["items"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if("group"===i.type&&i.children.some((function(e){return v(t,e.path)})))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return v(this.$route,t.path)}}},Q=(n(348),Object(C.a)(K,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[n("NavLinks"),t._v(" "),t._t("top"),t._v(" "),t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,first:0===i,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{item:e}})],1)})),0):t._e(),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),Z=n(61),tt={props:{updateEvent:{type:Object,default:null}},computed:{popupConfig:function(){for(var t=0,e=[this.$themeLocaleConfig,this.$site.themeConfig];t<e.length;t++){var n=e[t].serviceWorker;if(n&&n.updatePopup)return"object"===Object(Z.a)(n.updatePopup)?n.updatePopup:{}}return null},enabled:function(){return Boolean(this.popupConfig&&this.updateEvent)},message:function(){var t=this.popupConfig;return t&&t.message||"New content is available."},buttonText:function(){var t=this.popupConfig;return t&&t.buttonText||"Refresh"}},methods:{reload:function(){this.updateEvent&&(this.updateEvent.skipWaiting().then((function(){location.reload(!0)})),this.updateEvent=null)}}},et=(n(349),{components:{Blog:y,Home:E,Page:I,Sidebar:Q,Navbar:z,SWUpdatePopup:Object(C.a)(tt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n    "+t._s(t.message)),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v(t._s(t.buttonText))])]):t._e()])}),[],!1,null,null,null).exports},data:function(){return{isSidebarOpen:!1,swUpdateEvent:null}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.layout&&!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return b(this.$page,this.$route,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;window.addEventListener("scroll",this.onScroll),r.a.configure({showSpinner:!1}),this.$router.beforeEach((function(t,e,n){t.path===e.path||i.a.component(t.name)||r.a.start(),n()})),this.$router.afterEach((function(){r.a.done(),t.isSidebarOpen=!1})),this.$on("sw-updated",this.onSWUpdated)},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))},onSWUpdated:function(t){this.swUpdateEvent=t}}}),nt=(n(350),n(351),Object(C.a)(et,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.blog?n("Blog",{attrs:{"sidebar-items":t.sidebarItems}}):t.$page.frontmatter.layout?n("div",{staticClass:"custom-layout"},[n(t.$page.frontmatter.layout,{tag:"component"})],1):t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2),t._v(" "),n("SWUpdatePopup",{attrs:{updateEvent:t.swUpdateEvent}})],1)}),[],!1,null,null,null));e.default=nt.exports}}]);