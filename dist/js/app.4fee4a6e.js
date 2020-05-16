(function(e){function t(t){for(var r,o,s=t[0],u=t[1],i=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-9414dc44":"f4957d67"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-9414dc44":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-9414dc44":"659d9bd8"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var i=c[s],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){i=d[s],l=i.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],f.parentNode.removeChild(f),n(c)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"11c0":function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return a})),n.d(t,"mutations",(function(){return c})),n.d(t,"getters",(function(){return s})),n.d(t,"actions",(function(){return u}));n("e6cf");var r=n("bc3a"),o=n.n(r);const a={currentUser:i("auth.currentUser")},c={SET_CURRENT_USER(e,t){e.currentUser=t,l("auth.currentUser",t),d(e)}},s={loggedIn(e){return!!e.currentUser}},u={init({state:e,dispatch:t}){d(e),t("validate")},logIn({commit:e,dispatch:t,getters:n},{username:r,password:a}={}){return n.loggedIn?t("validate"):o.a.post("/api/session",{username:r,password:a}).then(t=>{const n=t.data;return e("SET_CURRENT_USER",n),n})},logOut({commit:e}){e("SET_CURRENT_USER",null)},validate({commit:e,state:t}){return t.currentUser?o.a.get("/api/session").then(t=>{const n=t.data;return e("SET_CURRENT_USER",n),n}).catch(t=>(t.response&&401===t.response.status?e("SET_CURRENT_USER",null):console.warn(t),null)):Promise.resolve(null)}};function i(e){return JSON.parse(window.localStorage.getItem(e))}function l(e,t){window.localStorage.setItem(e,JSON.stringify(t))}function d(e){o.a.defaults.headers.common.Authorization=e.currentUser?e.currentUser.token:""}},"1a0e":function(e,t,n){e.exports={loadingIcon:"_loading_loadingIcon_2KEMq",center:"_loading_center_2G3Tx"}},2883:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",[n("Transition",{attrs:{appear:""}},[n("BaseIcon",{class:e.$style.loadingIcon,attrs:{name:"sync",spin:""}})],1)],1)},o=[],a=n("444f"),c={page:{title:"Loading page...",meta:[{name:"description",content:"Loading page..."}]},components:{Layout:a["default"]}},s=c,u=n("46e4"),i=n("2877");function l(e){this["$style"]=u["default"].locals||u["default"]}var d=Object(i["a"])(s,r,o,!1,l,null,null);t["default"]=d.exports},"2e4c":function(e,t){},"437c":function(e,t,n){},"444f":function(e,t,n){"use strict";var r=n("7be0"),o=n("eeae"),a=n("b08f"),c=n("2877");function s(e){this["$style"]=a["default"].locals||a["default"]}var u=Object(c["a"])(o["default"],r["a"],r["b"],!1,s,null,null);t["default"]=u.exports},"46e4":function(e,t,n){"use strict";var r=n("1a0e"),o=n.n(r);t["default"]=o.a},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=(n("e260"),n("e6cf"),n("ddb0"),n("8c4f")),a=n("58ca"),c=n("323e"),s=n.n(c),u=n("2f62"),i=(n("5377"),n("5319"),n("1276"),n("5530")),l=n("bba4"),d=n.n(l);const f={},p={modules:{}};function m(e,t){if(1===t.length)return e;const n=t.shift();return e.modules[n]=Object(i["a"])({modules:{},namespaced:!0},e.modules[n]),m(e.modules[n],t)}(function(){const e=n("cfa9");e.keys().forEach(t=>{const n=e(t).default||e(t);if(f[t]===n)return;f[t]=n;const r=t.replace(/^\.\//,"").replace(/\.\w+$/,"").split(/\//).map(d.a),{modules:o}=m(p,r);o[r.pop()]=Object(i["a"])({namespaced:!0},n)})})();var h=p.modules;function g(e,{modules:t=h,modulePrefix:n="",flags:r={}}={}){for(const o in t){const a=t[o];a.actions&&a.actions[e]&&(a.namespaced?b.dispatch(`${n}${o}/${e}`):r.dispatchGlobal=!0),a.modules&&g(e,{modules:a.modules,modulePrefix:n+o+"/",flags:r})}!n&&r.dispatchGlobal&&b.dispatch(e)}r["a"].use(u["a"]);const v=new u["a"].Store({modules:h,strict:!1});var b=v;g("init");var _=[{path:"/",name:"home",component:()=>y(n.e("chunk-9414dc44").then(n.bind(null,"51d9")))},{path:"/404",name:"404",component:n("bdd2").default,props:!0},{path:"*",redirect:"404"}];function y(e){const t=()=>({component:e,loading:n("2883").default,delay:100,error:n("ef68").default,timeout:1e4});return Promise.resolve({functional:!0,render(e,{data:n,children:r}){return e(t,n,r)}})}r["a"].use(o["a"]),r["a"].use(a["a"],{keyName:"page"});const E=new o["a"]({routes:_,mode:"history",scrollBehavior(e,t,n){return n||{x:0,y:0}}});E.beforeEach((e,t,n)=>{null!==t.name&&s.a.start();const r=e.matched.some(e=>e.meta.authRequired);if(!r)return n();if(b.getters["auth/loggedIn"])return b.dispatch("auth/validate").then(e=>{e?n():o()});function o(){n({name:"login",query:{redirectFrom:e.fullPath}})}o()}),E.beforeResolve(async(e,t,n)=>{try{for(const r of e.matched)await new Promise((o,a)=>{r.meta&&r.meta.beforeResolve?r.meta.beforeResolve(e,t,(...e)=>{e.length?(t.name===e[0].name&&s.a.done(),n(...e),a(new Error("Redirected"))):o()}):o()})}catch(r){return}n()}),E.afterEach((e,t)=>{s.a.done()});var w=E,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("RouterView",{key:e.$route.fullPath})],1)},S=[],O=n("c2a4"),U={page:{titleTemplate(e){return e="function"===typeof e?e(this.$store):e,e?`${e} | ${O.title}`:O.title}}},C=U,T=(n("6294"),n("2877")),R=Object(T["a"])(C,x,S,!1,null,null,null),j=R.exports;n("fb6a");const $=n("b526");$.keys().forEach(e=>{const t=$(e),n=e.replace(/^\.\/_/,"").replace(/\.\w+$/,"").split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join("");r["a"].component(n,t.default||t)}),r["a"].config.productionTip=!0,"e2e"===Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_TEST&&(r["a"].config.errorHandler=window.Cypress.cy.onUncaughtException);const P=new r["a"]({router:w,store:b,render:e=>e(j)}).$mount("#app");"e2e"===Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_TEST&&(window.__app__=P)},6294:function(e,t,n){"use strict";var r=n("437c"),o=n.n(r);o.a},"670f":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return"font-awesome"===e.source?n("FontAwesomeIcon",e._b({attrs:{icon:e.name}},"FontAwesomeIcon",e.$attrs,!1)):"custom"===e.source?n("span",e._b({class:e.customIconClass},"span",e.$attrs,!1)):e._e()},o=[],a=n("ad3d"),c=n("ecee"),s=n("bba4"),u=n.n(s);c["c"].add(n("3818").definition,n("7f18").definition);var i={components:{FontAwesomeIcon:a["a"]},inheritAttrs:!1,props:{source:{type:String,default:"font-awesome"},name:{type:String,required:!0}},computed:{customIconClass(){return this.$style[u()("icon-custom-"+this.name)]}}},l=i,d=n("2877"),f=Object(d["a"])(l,r,o,!1,null,null,null);t["default"]=f.exports},"7be0":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$style.container},[e._t("default")],2)},o=[]},8203:function(e,t,n){"use strict";var r=n("e1e2"),o=n.n(r);t["default"]=o.a},"8ad3":function(e,t,n){e.exports={title:"_timeout_title_QmghM"}},"9aba":function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return r})),n.d(t,"getters",(function(){return o})),n.d(t,"mutations",(function(){return a})),n.d(t,"actions",(function(){return c}));const r={swatches:[{id:1,hexcode:"#990000",rgb:"153, 0, 0",name:"Red",text:"Red Sphere"},{id:2,hexcode:"#339933",rgb:"51, 153, 51",name:"Green",text:"Green Cube"},{id:3,hexcode:"#3366cc",rgb:"51, 102, 153",name:"Blue",text:"Blue Cube"},{id:4,hexcode:"#cccccc",rgb:"204, 204, 204",name:"Image",text:"Assimilation Texture"},{id:5,hexcode:"#dddddd",rgb:"204, 204, 204",name:"Random",text:"Random Cube"}],colorId:1},o={getAllSwatches:e=>e.swatches},a={setColor(e,t){e.color.colorId=t},editColor(e,t){const n=e.swatches.findIndex(e=>e.id===t.id);e.color.colorId=e.swatches[n].hexcode}},c={}},b08f:function(e,t,n){"use strict";var r=n("ee55"),o=n.n(r);t["default"]=o.a},b20d:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return a})),n.d(t,"getters",(function(){return c})),n.d(t,"mutations",(function(){return s})),n.d(t,"actions",(function(){return u}));n("e6cf");var r=n("bc3a"),o=n.n(r);const a={cached:[]},c={},s={CACHE_USER(e,t){e.cached.push(t)}},u={fetchUser({commit:e,state:t,rootState:n},{username:r}){const{currentUser:a}=n.auth;if(a&&a.username===r)return Promise.resolve(a);const c=t.cached.find(e=>e.username===r);return c?Promise.resolve(c):o.a.get("/api/users/"+r).then(t=>{const n=t.data;return e("CACHE_USER",n),n})}}},b526:function(e,t,n){var r={"./_base-icon.vue":"670f"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="b526"},bdd2:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",[n("h1",{class:e.$style.title},[e._v(" 404 "),e.resource?[e._v(" "+e._s(e.resource)+" ")]:e._e(),e._v(" Not Found ")],2)])},o=[],a=n("444f"),c={page:{title:"404",meta:[{name:"description",content:"404"}]},components:{Layout:a["default"]},props:{resource:{type:String,default:""}}},s=c,u=n("8203"),i=n("2877");function l(e){this["$style"]=u["default"].locals||u["default"]}var d=Object(i["a"])(s,r,o,!1,l,null,null);t["default"]=d.exports},c2a4:function(e){e.exports=JSON.parse('{"title":"3D Scene - based on Vue Enterprise Boilerplate","description":"Coding Challenge Experience Engineering"}')},cfa9:function(e,t,n){var r={"./auth.js":"11c0","./color.js":"f91c","./swatches.js":"9aba","./users.js":"b20d"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="cfa9"},d746:function(e,t,n){"use strict";var r=n("8ad3"),o=n.n(r);t["default"]=o.a},e1e2:function(e,t,n){e.exports={title:"_404_title_2zcsz"}},ee55:function(e,t,n){e.exports={center:"main_center_1QYpq",container:"main_container_3EUVG"}},eeae:function(e,t,n){"use strict";var r=n("2e4c"),o=n.n(r);t["default"]=o.a},ef68:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.offlineConfirmed?n("Layout",[n("h1",{class:e.$style.title},[e._v(" The page timed out while loading. Are you sure you're still connected to the Internet? ")])]):n("LoadingView")},o=[],a=n("bc3a"),c=n.n(a),s=n("444f"),u=n("2883"),i={page:{title:"Page timeout",meta:[{name:"description",content:"The page timed out while loading."}]},components:{Layout:s["default"],LoadingView:u["default"]},data(){return{offlineConfirmed:!1}},beforeCreate(){c.a.head("/api/ping").then(()=>{window.location.reload()}).catch(()=>{this.offlineConfirmed=!0})}},l=i,d=n("d746"),f=n("2877");function p(e){this["$style"]=d["default"].locals||d["default"]}var m=Object(f["a"])(l,r,o,!1,p,null,null);t["default"]=m.exports},f91c:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return r}));const r={colorId:1}}});
//# sourceMappingURL=app.4fee4a6e.js.map