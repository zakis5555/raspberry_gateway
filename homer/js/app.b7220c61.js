(function(e){function t(t){for(var a,i,o=t[0],c=t[1],l=t[2],u=0,f=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);h&&h(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var o=n[i];0!==s[o]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},i={app:0},s={app:0},r=[];function o(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-06843ba8":"82ebd5d1","chunk-0aaa7db6":"24d36550","chunk-2ce48702":"0214ddc8","chunk-2e94844a":"e06afd4e","chunk-355f6f92":"626611f2","chunk-536190e1":"0b3b9b46","chunk-655d6310":"4320b3b0","chunk-7981bd83":"4d86fc4d","chunk-7cad209b":"f2e6193e","chunk-9e3ef38a":"2bb70827","chunk-f47203b8":"b9a332f1","chunk-fd3ed72e":"17b3db7c"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-06843ba8":1,"chunk-0aaa7db6":1,"chunk-2ce48702":1,"chunk-355f6f92":1,"chunk-536190e1":1,"chunk-655d6310":1,"chunk-7981bd83":1,"chunk-7cad209b":1,"chunk-f47203b8":1,"chunk-fd3ed72e":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-06843ba8":"4733196c","chunk-0aaa7db6":"65b8c217","chunk-2ce48702":"3f75b2e0","chunk-2e94844a":"31d6cfe0","chunk-355f6f92":"500fe474","chunk-536190e1":"d191b1ca","chunk-655d6310":"89da3e06","chunk-7981bd83":"b69211c5","chunk-7cad209b":"3610de1b","chunk-9e3ef38a":"31d6cfe0","chunk-f47203b8":"29a37b88","chunk-fd3ed72e":"dce59c38"}[e]+".css",s=c.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===s))return t()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){l=f[o],u=l.getAttribute("data-href");if(u===a||u===s)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||s,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete i[e],h.parentNode.removeChild(h),n(r)},h.href=s;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){i[e]=0})));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(e);var f=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(h);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",f.name="ChunkLoadError",f.type=a,f.request=i,n[1](f)}s[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var h=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0957":function(e,t,n){var a={"./AdGuardHome.vue":["115b","chunk-655d6310"],"./Generic.vue":["fd6b"],"./Lidarr.vue":["7e7d","chunk-355f6f92"],"./Mealie.vue":["132b","chunk-2e94844a"],"./Medusa.vue":["bb90","chunk-2ce48702"],"./OpenWeather.vue":["deb6","chunk-fd3ed72e"],"./PaperlessNG.vue":["3e2c","chunk-9e3ef38a"],"./PiHole.vue":["bd96","chunk-7981bd83"],"./Ping.vue":["32c7","chunk-f47203b8"],"./Prometheus.vue":["e869","chunk-7cad209b"],"./Prowlarr.vue":["21d5","chunk-06843ba8"],"./Radarr.vue":["7807","chunk-536190e1"],"./Sonarr.vue":["154c","chunk-0aaa7db6"]};function i(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],i=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(i)}))}i.keys=function(){return Object.keys(a)},i.id="0957",e.exports=i},"3f2e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.config?n("div",{class:["theme-"+e.config.theme,e.isDark?"is-dark":"is-light",e.config.footer?"":"no-footer"],attrs:{id:"app"}},[n("DynamicTheme",{attrs:{themes:e.config.colors}}),n("div",{attrs:{id:"bighead"}},[e.config.header?n("section",{staticClass:"first-line"},[n("div",{staticClass:"container"},[n("div",{staticClass:"logo"},[n("a",{attrs:{href:"#"}},[e.config.logo?n("img",{attrs:{src:e.config.logo,alt:"dashboard logo"}}):e._e()]),e.config.icon?n("i",{class:e.config.icon}):e._e()]),n("div",{staticClass:"dashboard-title"},[n("span",{staticClass:"headline"},[e._v(e._s(e.config.subtitle))]),n("h1",[e._v(e._s(e.config.title))])])])]):e._e(),n("Navbar",{attrs:{open:e.showMenu,links:e.config.links},on:{"navbar-toggle":function(t){e.showMenu=!e.showMenu}}},[n("DarkMode",{on:{updated:function(t){e.isDark=t}}}),n("SettingToggle",{attrs:{name:"vlayout",icon:"fa-list",iconAlt:"fa-columns"},on:{updated:function(t){e.vlayout=t}}}),n("SearchInput",{staticClass:"navbar-item is-inline-block-mobile",attrs:{hotkey:e.searchHotkey()},on:{input:e.filterServices,"search-focus":function(t){e.showMenu=!0},"search-open":e.navigateToFirstService,"search-cancel":e.filterServices}})],1)],1),n("section",{staticClass:"section",attrs:{id:"main-section"}},[n("div",{staticClass:"container"},[e.config.connectivityCheck?n("ConnectivityChecker",{on:{"network-status-update":function(t){e.offline=t}}}):e._e(),e.offline?e._e():n("div",[n("Message",{attrs:{item:e.config.message}}),!e.vlayout||e.filter?n("div",{staticClass:"columns is-multiline"},[e._l(e.services,(function(t){return[t.name?n("h2",{staticClass:"column is-full group-title"},[t.icon?n("i",{class:["fa-fw",t.icon]}):t.logo?n("div",{staticClass:"group-logo media-left"},[n("figure",{staticClass:"image is-48x48"},[n("img",{attrs:{src:t.logo,alt:t.name+" logo"}})])]):e._e(),e._v(" "+e._s(t.name)+" ")]):e._e(),e._l(t.items,(function(t,a){return n("Service",{key:a,class:["column","is-"+12/e.config.columns],attrs:{item:t,proxy:e.config.proxy}})}))]}))],2):e._e(),!e.filter&&e.vlayout?n("div",{staticClass:"columns is-multiline layout-vertical"},e._l(e.services,(function(t){return n("div",{key:t.name,class:["column","is-"+12/e.config.columns]},[t.name?n("h2",{staticClass:"group-title"},[t.icon?n("i",{class:["fa-fw",t.icon]}):t.logo?n("div",{staticClass:"group-logo media-left"},[n("figure",{staticClass:"image is-48x48"},[n("img",{attrs:{src:t.logo,alt:t.name+" logo"}})])]):e._e(),e._v(" "+e._s(t.name)+" ")]):e._e(),e._l(t.items,(function(t,a){return n("Service",{key:a,attrs:{item:t,proxy:e.config.proxy}})}))],2)})),0):e._e()],1)],1)]),n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[e.config.footer?n("div",{staticClass:"content has-text-centered",domProps:{innerHTML:e._s(e.config.footer)}}):e._e()])])],1):e._e()},s=[],r=n("b85c"),o=n("1da1"),c=(n("ac1f"),n("841c"),n("99af"),n("d3b7"),n("caad6"),n("2532"),n("b0c0"),n("4de4"),n("96cf"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.links?n("div",{staticClass:"container-fluid"},[n("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-brand"},[n("a",{staticClass:"navbar-burger",class:{"is-active":e.showMenu},attrs:{role:"button","aria-label":"menu","aria-expanded":"false"},on:{click:function(t){return e.$emit("navbar-toggle")}}},[n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}})])]),n("div",{staticClass:"navbar-menu",class:{"is-active":e.showMenu}},[n("div",{staticClass:"navbar-start"},e._l(e.links,(function(t,a){return n("a",{key:a,staticClass:"navbar-item",attrs:{rel:"noreferrer",href:t.url,target:t.target}},[t.icon?n("i",{class:["fa-fw",t.icon,{"mr-2":t.name}]}):e._e(),e._v(" "+e._s(t.name)+" ")])})),0),n("div",{staticClass:"navbar-end"},[e._t("default")],2)])])])]):e._e()}),l=[],u={name:"Navbar",props:{open:{type:Boolean,default:!1},links:Array},computed:{showMenu:function(){return this.open&&this.isSmallScreen()}},methods:{isSmallScreen:function(){return window.matchMedia("screen and (max-width: 1023px)").matches}}},f=u,h=n("2877"),d=Object(h["a"])(f,c,l,!1,null,null,null),m=d.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.offline?n("div",{staticClass:"offline-message"},[n("i",{staticClass:"far fa-dizzy"}),n("h1",[e._v(" You're offline friend. "),n("span",{on:{click:e.checkOffline}},[n("i",{staticClass:"fas fa-redo-alt"})])])]):e._e()},v=[],p={name:"ConnectivityChecker",data:function(){return{offline:!1}},created:function(){var e=this;this.checkOffline(),document.addEventListener("visibilitychange",(function(){"visible"==document.visibilityState&&e.checkOffline()}),!1)},methods:{checkOffline:function(){var e=this;return fetch(window.location.href+"?alive",{method:"HEAD",cache:"no-store"}).then((function(t){e.offline=!t.ok})).catch((function(){e.offline=!0})).finally((function(){e.$emit("network-status-update",e.offline)}))}}},b=p,k=Object(h["a"])(b,g,v,!1,null,null,null),y=k.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.component,{tag:"component",attrs:{item:e.item,proxy:e.proxy}})},_=[],C=(n("3ca3"),n("ddb0"),n("fd6b")),x={name:"Service",props:{item:Object,proxy:Object},computed:{component:function(){var e=this.item.type||"Generic";return"Generic"===e?C["default"]:function(){return n("0957")("./".concat(e,".vue"))}}}},S=x,O=Object(h["a"])(S,w,_,!1,null,null,null),j=O.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("article",{staticClass:"message",class:e.message.style},[e.message.title||e.message.icon?n("div",{staticClass:"message-header"},[n("p",[e.message.icon?n("i",{class:"fa-fw "+e.message.icon}):e._e(),e._v(" "+e._s(e.message.title)+" ")])]):e._e(),e.message.content?n("div",{staticClass:"message-body",domProps:{innerHTML:e._s(e.message.content)}}):e._e()]):e._e()},E=[],M=n("5530"),$={name:"Message",props:{item:Object},data:function(){return{message:{}}},created:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.message=Object.assign({},this.item),e.next=3,this.getMessage();case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),computed:{show:function(){return this.message.title||this.message.content}},watch:{item:function(e){this.message=Object.assign({},e)}},methods:{getMessage:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n,a,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.item){e.next=2;break}return e.abrupt("return");case 2:if(!this.item.url){e.next=11;break}return e.next=5,this.downloadMessage(this.item.url);case 5:for(t=e.sent,console.log("done"),this.item.mapping&&(t=this.mapRemoteMessage(t)),n=this.message,a=0,i=["title","style","content","icon"];a<i.length;a++)s=i[a],s in t&&null!==t[s]&&(n[s]=t[s]);this.message=Object(M["a"])({},n);case 11:this.item.refreshInterval&&setTimeout(this.getMessage,this.item.refreshInterval);case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),downloadMessage:function(e){return fetch(e).then((function(e){if(200==e.status)return e.json()}))},mapRemoteMessage:function(e){var t={};for(var n in this.item.mapping)e[this.item.mapping[n]]&&(t[n]=e[this.item.mapping[n]]);return t}}},T=$,L=Object(h["a"])(T,D,E,!1,null,null,null),P=L.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-bar"},[n("label",{staticClass:"search-label",attrs:{for:"search"}}),n("input",{ref:"search",attrs:{type:"text"},domProps:{value:e.value},on:{input:function(t){return e.search(t.target.value)},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")||t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.open()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.altKey?e.open("_blank"):null}]}})])},N=[],R=(n("2b3d"),{name:"SearchInput",props:{value:String,hotkey:{type:String,default:"/"}},mounted:function(){this._keyListener=function(e){e.key===this.hotkey&&(e.preventDefault(),this.focus()),"Escape"===e.key&&this.cancel()},document.addEventListener("keydown",this._keyListener.bind(this));var e=new URLSearchParams(window.location.search).get("search");e&&(this.$refs.search.value=e,this.search(e),this.focus())},methods:{open:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$refs.search.value&&this.$emit("search-open",e)},focus:function(){var e=this;this.$emit("search-focus"),this.$nextTick((function(){e.$refs.search.focus()}))},setSearchURL:function(e){var t=new URL(window.location);""===e?t.searchParams.delete("search"):t.searchParams.set("search",e),window.history.replaceState("search",null,t)},cancel:function(){this.setSearchURL(""),this.$refs.search.value="",this.$refs.search.blur(),this.$emit("search-cancel")},search:function(e){this.setSearchURL(e),this.$emit("input",e.toLowerCase())}},beforeDestroy:function(){document.removeEventListener("keydown",this._keyListener)}}),I=R,F=Object(h["a"])(I,A,N,!1,null,"48218b6d",null),H=F.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"navbar-item is-inline-block-mobile",on:{click:function(t){return e.toggleSetting()}}},[n("span",[n("i",{class:["fas","fa-fw",e.value?e.icon:e.secondaryIcon]})]),e._t("default")],2)},G=[],K={name:"SettingToggle",props:{name:String,icon:String,iconAlt:String},data:function(){return{secondaryIcon:null,value:!0}},created:function(){this.secondaryIcon=this.iconAlt||this.icon,this.name in localStorage&&(this.value=JSON.parse(localStorage[this.name])),this.$emit("updated",this.value)},methods:{toggleSetting:function(){this.value=!this.value,localStorage[this.name]=this.value,this.$emit("updated",this.value)}}},B=K,V=Object(h["a"])(B,U,G,!1,null,null,null),z=V.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"navbar-item is-inline-block-mobile",attrs:{"aria-label":"Toggle dark mode"},on:{click:function(t){return e.toggleTheme()}}},[n("i",{staticClass:"fa-fw",class:""+e.faClasses[e.mode],attrs:{title:""+e.titles[e.mode]}})])},q=[],W={name:"Darkmode",data:function(){return{isDark:null,faClasses:null,titles:null,mode:null}},created:function(){this.faClasses=["fas fa-adjust","fas fa-circle","far fa-circle"],this.titles=["Auto-switch","Light theme","Dark theme"],this.mode=0,"overrideDark"in localStorage&&(this.mode=JSON.parse(localStorage.overrideDark)?2:1),this.isDark=this.getIsDark(),this.$emit("updated",this.isDark)},methods:{toggleTheme:function(){switch(this.mode=(this.mode+1)%3,this.mode){case 0:localStorage.removeItem("overrideDark");break;case 1:localStorage.overrideDark=!1;break;case 2:localStorage.overrideDark=!0;break;default:break}this.isDark=this.getIsDark(),this.$emit("updated",this.isDark)},getIsDark:function(){var e=[matchMedia("(prefers-color-scheme: dark)").matches,!1,!0];return e[this.mode]}}},Y=W,Q=Object(h["a"])(Y,J,q,!1,null,null,null),X=Q.exports,Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("DynamicStyle",[e._v(" :root, body #app.is-light { "+e._s(e.getVars(e.themes.light))+" } @media (prefers-color-scheme: light), (prefers-color-scheme: no-preference) { :root, body #app { "+e._s(e.getVars(e.themes.light))+" } } body #app.is-dark { "+e._s(e.getVars(e.themes.dark))+" } @media (prefers-color-scheme: dark) { :root, body #app { "+e._s(e.getVars(e.themes.dark))+" } } ")])},ee=[],te=(n("a15b"),{name:"DynamicTheme",props:{themes:Object},methods:{getVars:function(e){var t=[];for(var n in e){var a="".concat(e[n]);a?"background-image"==n&&(a="url(".concat(e[n],")")):a="initial",t.push("--".concat(n,": ").concat(a))}return t.join(";")}}}),ne=te,ae=Object(h["a"])(ne,Z,ee,!1,null,null,null),ie=ae.exports,se='---\n# Default configuration\n\ntitle: "Dashboard"\nsubtitle: "Homer"\n\nheader: true\nfooter: \'<p>Created with <span class="has-text-danger">❤️</span> with <a href="https://bulma.io/">bulma</a>, <a href="https://vuejs.org/">vuejs</a> & <a href="https://fontawesome.com/">font awesome</a> // Fork me on <a href="https://github.com/bastienwirtz/homer"><i class="fab fa-github-alt"></i></a></p>\' # set false if you want to hide it.\n\ncolumns: 3\nconnectivityCheck: true\n\ntheme: default\ncolors:\n  light:\n    highlight-primary: "#3367d6"\n    highlight-secondary: "#4285f4"\n    highlight-hover: "#5a95f5"\n    background: "#f5f5f5"\n    card-background: "#ffffff"\n    text: "#363636"\n    text-header: "#ffffff"\n    text-title: "#303030"\n    text-subtitle: "#424242"\n    card-shadow: rgba(0, 0, 0, 0.1)\n    link: "#3273dc"\n    link-hover: "#363636"\n    background-image: ""\n  dark:\n    highlight-primary: "#3367d6"\n    highlight-secondary: "#4285f4"\n    highlight-hover: "#5a95f5"\n    background: "#131313"\n    card-background: "#2b2b2b"\n    text: "#eaeaea"\n    text-header: "#ffffff"\n    text-title: "#fafafa"\n    text-subtitle: "#f5f5f5"\n    card-shadow: rgba(0, 0, 0, 0.4)\n    link: "#3273dc"\n    link-hover: "#ffdd57"\n    background-image: ""\n\nmessage: ~\nlinks: []\nservices: []\n\n\nproxy: ~',re=n("e2c1"),oe=n("da81"),ce={name:"App",components:{Navbar:m,ConnectivityChecker:y,Service:j,Message:P,SearchInput:H,SettingToggle:z,DarkMode:X,DynamicTheme:ie},data:function(){return{config:null,services:null,offline:!1,filter:"",vlayout:!0,isDark:null,showMenu:!1}},created:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.buildDashboard(),window.onhashchange=this.buildDashboard;case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{searchHotkey:function(){if(this.config.hotkey&&this.config.hotkey.search)return this.config.hotkey.search},buildDashboard:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n,a,i,s,o,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=re.load(se),e.prev=1,e.next=4,this.getConfig();case 4:if(n=e.sent,a=""!=window.location.hash.substring(1)?window.location.hash.substring(1):null,!a){e.next=11;break}return e.next=9,this.getConfig("assets/".concat(a,".yml"));case 9:i=e.sent,n=Object.assign(n,i);case 11:e.next=17;break;case 13:e.prev=13,e.t0=e["catch"](1),console.log(e.t0),n=this.handleErrors("⚠️ Error loading configuration",e.t0);case 17:if(this.config=oe(t,n),this.services=this.config.services,document.title=this.config.documentTitle||"".concat(this.config.title," | ").concat(this.config.subtitle),this.config.stylesheet){s="",o=Object(r["a"])(this.config.stylesheet);try{for(o.s();!(c=o.n()).done;)l=c.value,s+='@import "'.concat(l,'";')}catch(u){o.e(u)}finally{o.f()}this.createStylesheet(s)}case 21:case"end":return e.stop()}}),e,this,[[1,13]])})));function t(){return e.apply(this,arguments)}return t}(),getConfig:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"assets/config.yml";return fetch(t).then((function(t){if(!t.redirected){if(!t.ok)throw Error("".concat(t.statusText,": ").concat(t.body));var n=e;return t.text().then((function(e){return re.load(e)})).then((function(e){return e.externalConfig?n.getConfig(e.externalConfig):e}))}window.location.href=t.url}))},matchesFilter:function(e){return e.name.toLowerCase().includes(this.filter)||e.subtitle&&e.subtitle.toLowerCase().includes(this.filter)||e.tag&&e.tag.toLowerCase().includes(this.filter)},navigateToFirstService:function(e){try{var t=this.services[0].items[0];window.open(t.url,e||t.target||"_self")}catch(n){console.warning("fail to open service")}},filterServices:function(e){if(this.filter=e,e){var t,n=[],a=Object(r["a"])(this.config.services);try{for(a.s();!(t=a.n()).done;){var i,s=t.value,o=Object(r["a"])(s.items);try{for(o.s();!(i=o.n()).done;){var c=i.value;this.matchesFilter(c)&&n.push(c)}}catch(l){o.e(l)}finally{o.f()}}}catch(l){a.e(l)}finally{a.f()}this.services=[{name:e,icon:"fas fa-search",items:n}]}else this.services=this.config.services},handleErrors:function(e,t){return{message:{title:e,style:"is-danger",content:t}}},createStylesheet:function(e){var t=document.createElement("style");t.appendChild(document.createTextNode(e)),document.head.appendChild(t)}}},le=ce,ue=Object(h["a"])(le,i,s,!1,null,null,null),fe=ue.exports,he=n("9483");Object(he["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("15f5"),n("a89b");a["a"].config.productionTip=!1,a["a"].component("DynamicStyle",{render:function(e){return e("style",this.$slots.default)}}),new a["a"]({render:function(e){return e(fe)}}).$mount("#app")},a89b:function(e,t,n){},f3e5:function(e,t,n){"use strict";n("3f2e")},fd6b:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"card",class:e.item.class,style:"background-color:"+e.item.background+";"},[n("a",{attrs:{href:e.item.url,target:e.item.target,rel:"noreferrer"}},[n("div",{staticClass:"card-content"},[n("div",{class:e.mediaClass},[e._t("icon",(function(){return[e.item.logo?n("div",{staticClass:"media-left"},[n("figure",{staticClass:"image is-48x48"},[n("img",{attrs:{src:e.item.logo,alt:e.item.name+" logo"}})])]):e._e(),e.item.icon?n("div",{staticClass:"media-left"},[n("figure",{staticClass:"image is-48x48"},[n("i",{class:["fa-fw",e.item.icon],staticStyle:{"font-size":"35px"}})])]):e._e()]})),n("div",{staticClass:"media-content"},[e._t("content",(function(){return[n("p",{staticClass:"title is-4"},[e._v(e._s(e.item.name))]),e.item.subtitle?n("p",{staticClass:"subtitle is-6"},[e._v(" "+e._s(e.item.subtitle)+" ")]):e._e()]}))],2),e._t("indicator")],2),e.item.tag?n("div",{staticClass:"tag",class:e.item.tagstyle},[n("strong",{staticClass:"tag-text"},[e._v("#"+e._s(e.item.tag))])]):e._e()])])])])},i=[],s={name:"Generic",props:{item:Object},computed:{mediaClass:function(){return{media:!0,"no-subtitle":!this.item.subtitle}}}},r=s,o=(n("f3e5"),n("2877")),c=Object(o["a"])(r,a,i,!1,null,"b754ebc4",null);t["default"]=c.exports}});
//# sourceMappingURL=app.b7220c61.js.map