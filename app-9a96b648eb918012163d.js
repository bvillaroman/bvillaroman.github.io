webpackJsonp([0xd2a57dc1d883],{"./.cache/api-runner-browser.js":function(e,o){"use strict";function n(e,o,n){var s=t.map(function(n){if(n.plugin[e]){var s=n.plugin[e](o,n.options);return s}});return s=s.filter(function(e){return"undefined"!=typeof e}),s.length>0?s:n?[n]:[]}function s(e,o,n){return t.reduce(function(n,s){return s.plugin[e]?n.then(function(){return s.plugin[e](o,s.options)}):n},Promise.resolve())}o.__esModule=!0,o.apiRunner=n,o.apiRunnerAsync=s;var t=[]},"./.cache/async-requires.js":function(e,o,n){"use strict";var s;o.components={"component---src-pages-404-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-404-js!./src/pages/404.js"),"component---src-pages-shoots-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-shoots-js!./src/pages/Shoots.js"),"component---src-pages-portraits-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-portraits-js!./src/pages/Portraits.js"),"component---src-pages-about-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-about-js!./src/pages/about.js"),"component---src-pages-index-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-js!./src/pages/index.js"),"component---src-pages-success-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-success-js!./src/pages/success.js")},o.json=(s={"layout-index.json":n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),"404.json":n("./node_modules/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json")},s["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),s["shoots.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---shoots!./.cache/json/shoots.json"),s["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),s["portraits.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---portraits!./.cache/json/portraits.json"),s["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),s["about.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---about!./.cache/json/about.json"),s["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),s["index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json"),s["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),s["success.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---success!./.cache/json/success.json"),s["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),s["404-html.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json"),s),o.layouts={"component---src-layouts-index-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-js!./.cache/layouts/index.js")}},"./.cache/component-renderer.js":function(e,o,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function t(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function a(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}function r(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}o.__esModule=!0;var u=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},l=n("./node_modules/react/index.js"),i=s(l),d=n("./node_modules/prop-types/index.js"),c=s(d),m=n("./.cache/loader.js"),p=s(m),b=n("./.cache/emitter.js"),f=s(b),g=function(e){var o=e.children;return i.default.createElement("div",null,o())},j=function(e){function o(n){t(this,o);var s=a(this,e.call(this));return s.state={location:n.location,pageResources:p.default.getResourcesForPathname(n.location.pathname)},s}return r(o,e),o.prototype.componentWillReceiveProps=function(e){var o=this;if(this.state.location.pathname!==e.location.pathname){var n=p.default.getResourcesForPathname(e.location.pathname);n?this.setState({location:e.location,pageResources:n}):p.default.getResourcesForPathname(e.location.pathname,function(n){o.setState({location:e.location,pageResources:n})})}},o.prototype.componentDidMount=function(){var e=this;f.default.on("onPostLoadPageResources",function(o){o.page.path===p.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:o.pageResources})})},o.prototype.shouldComponentUpdate=function(e,o){return!o.pageResources||(!(this.state.pageResources||!o.pageResources)||(this.state.pageResources.component!==o.pageResources.component||(this.state.pageResources.json!==o.pageResources.json||!(this.state.location.key===o.location.key||!o.pageResources.page||!o.pageResources.page.matchPath&&!o.pageResources.page.path))))},o.prototype.render=function(){return this.props.page?this.state.pageResources?(0,l.createElement)(this.state.pageResources.component,u({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?(0,l.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:g,u({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},o}(i.default.Component);j.propTypes={page:c.default.bool,layout:c.default.bool,location:c.default.object},o.default=j,e.exports=o.default},"./.cache/emitter.js":function(e,o,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var t=n("./node_modules/mitt/dist/mitt.js"),a=s(t),r=(0,a.default)();e.exports=r},"./.cache/find-page.js":function(e,o,n){"use strict";var s=n("./node_modules/react-router-dom/index.js"),t={};e.exports=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(n){var a=n.slice(o.length);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),t[a])return t[a];var r=void 0;return e.some(function(e){if(e.matchPath){if((0,s.matchPath)(a,{path:e.path})||(0,s.matchPath)(a,{path:e.matchPath}))return r=e,t[a]=e,!0}else if((0,s.matchPath)(a,{path:e.path,exact:!0}))return r=e,t[a]=e,!0;return!1}),r}}},"./node_modules/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xa2868bfb69fc,function(o,s){s?(console.log("bundle loading error",s),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/404-html.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xe70826b53c04,function(o,s){s?(console.log("bundle loading error",s),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/404.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---about!./.cache/json/about.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xf927f8900006,function(o,s){s?(console.log("bundle loading error",s),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/about.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x81b8806e4260,function(o,s){s?(console.log("bundle loading error",s),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/index.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(60335399758886,function(o,s){s?(console.log("bundle loading error",s),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/layout-index.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---portraits!./.cache/json/portraits.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(462889978083,function(o,s){s?(console.log("bundle loading error",s),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/portraits.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---shoots!./.cache/json/shoots.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(32853035806623,function(o,s){s?(console.log("bundle loading error",s),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/shoots.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---success!./.cache/json/success.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x9b544cfa2a85,function(o,s){s?(console.log("bundle loading error",s),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/success.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-js!./.cache/layouts/index.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x67ef26645b2a,function(o,s){s?(console.log("bundle loading error",s),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/bruce/bvillaroman/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/bruce/bvillaroman/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/bruce/bvillaroman/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/bruce/bvillaroman/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/bruce/bvillaroman/node_modules/babel-preset-stage-0/lib/index.js","/Users/bruce/bvillaroman/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/index.js')})})}},"./.cache/loader.js":function(e,o,n){(function(o){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var t=n("./node_modules/react/index.js"),a=(s(t),n("./.cache/find-page.js")),r=s(a),u=n("./.cache/emitter.js"),l=s(u),i=void 0,d={},c={},m={},p={},b={},f=[],g=[],j={},h=[],y={},x=function(e){return e&&e.default||e},_=void 0,v=!0;_=n("./.cache/prefetcher.js")({getNextQueuedResources:function(){return h.slice(-1)[0]},createResourceDownload:function(e){w(e,function(){h=h.filter(function(o){return o!==e}),_.onResourcedFinished(e)})}}),l.default.on("onPreLoadPageResources",function(e){_.onPreLoadPageResources(e)}),l.default.on("onPostLoadPageResources",function(e){_.onPostLoadPageResources(e)});var R=function(e,o){return y[e]>y[o]?1:y[e]<y[o]?-1:0},P=function(e,o){return j[e]>j[o]?1:j[e]<j[o]?-1:0},w=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(p[e])o.nextTick(function(){n(null,p[e])});else{var s="component---"===e.slice(0,12)?c.components[e]||c.layouts[e]:c.json[e];s(function(o,s){p[e]=s,n(o,s)})}},E=function(e,n){b[e]?o.nextTick(function(){n(null,b[e])}):w(e,function(o,s){if(o)n(o);else{var t=x(s());b[e]=t,n(o,t)}})},C=1,N={empty:function(){g=[],j={},y={},h=[],f=[]},addPagesArray:function(e){f=e;var o="";i=(0,r.default)(e,o)},addDevRequires:function(e){d=e},addProdRequires:function(e){c=e},dequeue:function(e){return g.pop()},enqueue:function(e){if(!f.some(function(o){return o.path===e}))return!1;var o=1/C;C+=1,j[e]?j[e]+=1:j[e]=1,N.has(e)||g.unshift(e),g.sort(P);var n=i(e);return n.jsonName&&(y[n.jsonName]?y[n.jsonName]+=1+o:y[n.jsonName]=1+o,h.indexOf(n.jsonName)!==-1||p[n.jsonName]||h.unshift(n.jsonName)),n.componentChunkName&&(y[n.componentChunkName]?y[n.componentChunkName]+=1+o:y[n.componentChunkName]=1+o,h.indexOf(n.componentChunkName)!==-1||p[n.jsonName]||h.unshift(n.componentChunkName)),h.sort(R),_.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:h,resourcesCount:y}},getPages:function(){return{pathArray:g,pathCount:j}},getPage:function(e){return i(e)},has:function(e){return g.some(function(o){return o===e})},getResourcesForPathname:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};v&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(i(e)||navigator.serviceWorker.getRegistrations().then(function(e){for(var o=e,n=Array.isArray(o),s=0,o=n?o:o[Symbol.iterator]();;){var t;if(n){if(s>=o.length)break;t=o[s++]}else{if(s=o.next(),s.done)break;t=s.value}var a=t;a.unregister()}window.location.reload()})),v=!1;var s=i(e);if(!s)return void console.log("A page wasn't found for \""+e+'"');if(e=s.path,m[e])return o.nextTick(function(){n(m[e]),l.default.emit("onPostLoadPageResources",{page:s,pageResources:m[e]})}),m[e];l.default.emit("onPreLoadPageResources",{path:e});var t=void 0,a=void 0,r=void 0,u=function(){if(t&&a&&(!s.layoutComponentChunkName||r)){m[e]={component:t,json:a,layout:r};var o={component:t,json:a,layout:r};n(o),l.default.emit("onPostLoadPageResources",{page:s,pageResources:o})}};return E(s.componentChunkName,function(e,o){e&&console.log("Loading the component for "+s.path+" failed"),t=o,u()}),E(s.jsonName,function(e,o){e&&console.log("Loading the JSON for "+s.path+" failed"),a=o,u()}),void(s.layoutComponentChunkName&&E(s.layoutComponentChunkName,function(e,o){e&&console.log("Loading the Layout for "+s.path+" failed"),r=o,u()}))},peek:function(e){return g.slice(-1)[0]},length:function(){return g.length},indexOf:function(e){return g.length-g.indexOf(e)-1}};e.exports=N}).call(o,n("./node_modules/process/browser.js"))},"./.cache/pages.json":function(e,o){e.exports=[{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-shoots-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"shoots.json",path:"/Shoots/"},{componentChunkName:"component---src-pages-portraits-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"portraits.json",path:"/Portraits/"},{componentChunkName:"component---src-pages-about-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-pages-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-success-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"success.json",path:"/success/"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},"./.cache/prefetcher.js":function(e,o){"use strict";e.exports=function(e){var o=e.getNextQueuedResources,n=e.createResourceDownload,s=[],t=[],a=function(){var e=o();e&&(t.push(e),n(e))},r=function(e){switch(e.type){case"RESOURCE_FINISHED":t=t.filter(function(o){return o!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":s.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":s=s.filter(function(o){return o!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===t.length&&0===s.length&&a()},0)};return{onResourcedFinished:function(e){r({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){r({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){r({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){r({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:s,resourcesDownloading:t}},empty:function(){s=[],t=[]}}}},0:function(e,o,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var t=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},a=n("./.cache/api-runner-browser.js"),r=n("./node_modules/react/index.js"),u=s(r),l=n("./node_modules/react-dom/index.js"),i=s(l),d=n("./node_modules/react-router-dom/index.js"),c=n("./node_modules/gatsby-react-router-scroll/index.js"),m=n("./node_modules/history/createBrowserHistory.js"),p=s(m),b=n("./node_modules/domready/ready.js"),f=s(b),g=n("./.cache/emitter.js"),j=s(g),h=n("./.cache/pages.json"),y=s(h),x=n("./.cache/redirects.json"),_=s(x),v=n("./.cache/component-renderer.js"),R=s(v),P=n("./.cache/async-requires.js"),w=s(P),E=n("./.cache/loader.js"),C=s(E);n("./node_modules/core-js/modules/es6.promise.js"),window.___emitter=j.default,C.default.addPagesArray(y.default),C.default.addProdRequires(w.default),window.asyncRequires=w.default,window.___loader=C.default,window.matchPath=d.matchPath;var N=(0,p.default)(),U=_.default.reduce(function(e,o){return e[o.fromPath]=o,e},{}),k=function(e){var o=U[e];if(null!=o){var n=C.default.getResourcesForPathname(e);return null!=n&&console.error('The route "'+e+'" matches both a page and a redirect; this is probably not intentional.'),N.replace(o.toPath),!0}return!1};k(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history||(window.___history=e,e.listen(function(e,o){k(e.pathname)||(0,a.apiRunner)("onRouteUpdate",{location:e,action:o})}))}function o(e,o){var n=o.location.pathname,s=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:n});if(s.length>0)return s[0];if(e){var t=e.location.pathname;if(t===n)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&n("./.cache/register-service-worker.js");var s=function(e){function o(s){s.page.path===C.default.getPage(e).path&&(j.default.off("onPostLoadPageResources",o),clearTimeout(n),window.___history.push(e))}if(window.location.pathname!==e){var n=setTimeout(function(){j.default.off("onPostLoadPageResources",o),j.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);C.default.getResourcesForPathname(e)?(clearTimeout(n),window.___history.push(e)):j.default.on("onPostLoadPageResources",o)}};window.___navigateTo=s,(0,a.apiRunner)("onRouteUpdate",{location:N.location,action:N.action});var l=(0,a.apiRunner)("replaceRouterComponent",{history:N})[0],m=function(e){var o=e.children;return u.default.createElement(d.Router,{history:N},o)};C.default.getResourcesForPathname(window.location.pathname,function(){var n=function(){return(0,r.createElement)(l?l:m,null,(0,r.createElement)(c.ScrollContext,{shouldUpdateScroll:o},(0,r.createElement)((0,d.withRouter)(R.default),{layout:!0,children:function(o){return(0,r.createElement)(d.Route,{render:function(n){e(n.history);var s=o?o:n;return C.default.getPage(s.location.pathname)?(0,r.createElement)(R.default,t({page:!0},s)):(0,r.createElement)(R.default,{location:{page:!0,pathname:"/404.html"}})}})}})))},s=(0,a.apiRunner)("wrapRootComponent",{Root:n},n)[0];(0,f.default)(function(){return i.default.render(u.default.createElement(s,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},"./.cache/redirects.json":function(e,o){e.exports=[]},"./.cache/register-service-worker.js":function(e,o,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var t=n("./.cache/emitter.js"),a=s(t),r="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(r+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var o=e.installing;console.log("installingWorker",o),o.addEventListener("statechange",function(){switch(o.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},"./node_modules/domready/ready.js":function(e,o,n){!function(o,n){e.exports=n()}("domready",function(){var e,o=[],n=document,s=n.documentElement.doScroll,t="DOMContentLoaded",a=(s?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return a||n.addEventListener(t,e=function(){for(n.removeEventListener(t,e),a=1;e=o.shift();)e()}),function(e){a?setTimeout(e,0):o.push(e)}})},"./node_modules/gatsby-module-loader/patch.js":function(e,o,n){"use strict";function s(){function e(e){var o=s.lastChild;return"SCRIPT"!==o.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",o)):void(o.onload=o.onerror=function(){o.onload=o.onerror=null,setTimeout(e,0)})}var o,s=document.querySelector("head"),t=n.e,a=n.s;n.e=function(s,r){var u=!1,l=!0,i=function(e){r&&(r(n,e),r=null)};return!a&&o&&o[s]?void i(!0):(t(s,function(){u||(u=!0,l?setTimeout(function(){i()}):i())}),void(u||(l=!1,e(function(){u||(u=!0,a?a[s]=void 0:(o||(o={}),o[s]=!0),i(!0))}))))}}s()},"./node_modules/mitt/dist/mitt.js":function(e,o){function n(e){return e=e||Object.create(null),{on:function(o,n){(e[o]||(e[o]=[])).push(n)},off:function(o,n){e[o]&&e[o].splice(e[o].indexOf(n)>>>0,1)},emit:function(o,n){(e[o]||[]).map(function(e){e(n)}),(e["*"]||[]).map(function(e){e(o,n)})}}}e.exports=n},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-404-js!./src/pages/404.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x9427c64ab85d,function(o,s){s?(console.log("bundle loading error",s),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/bruce/bvillaroman/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/bruce/bvillaroman/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/bruce/bvillaroman/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/bruce/bvillaroman/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/bruce/bvillaroman/node_modules/babel-preset-stage-0/lib/index.js","/Users/bruce/bvillaroman/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/404.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-portraits-js!./src/pages/Portraits.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(49891556735375,function(o,s){s?(console.log("bundle loading error",s),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/bruce/bvillaroman/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/bruce/bvillaroman/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/bruce/bvillaroman/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/bruce/bvillaroman/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/bruce/bvillaroman/node_modules/babel-preset-stage-0/lib/index.js","/Users/bruce/bvillaroman/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/Portraits.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-shoots-js!./src/pages/Shoots.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xa3deb62ff62b,function(o,s){s?(console.log("bundle loading error",s),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/bruce/bvillaroman/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/bruce/bvillaroman/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/bruce/bvillaroman/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/bruce/bvillaroman/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/bruce/bvillaroman/node_modules/babel-preset-stage-0/lib/index.js","/Users/bruce/bvillaroman/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/Shoots.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-about-js!./src/pages/about.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xefeaa6d1881d,function(o,s){s?(console.log("bundle loading error",s),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/bruce/bvillaroman/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/bruce/bvillaroman/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/bruce/bvillaroman/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/bruce/bvillaroman/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/bruce/bvillaroman/node_modules/babel-preset-stage-0/lib/index.js","/Users/bruce/bvillaroman/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/about.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-js!./src/pages/index.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(35783957827783,function(o,s){s?(console.log("bundle loading error",s),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/bruce/bvillaroman/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/bruce/bvillaroman/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/bruce/bvillaroman/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/bruce/bvillaroman/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/bruce/bvillaroman/node_modules/babel-preset-stage-0/lib/index.js","/Users/bruce/bvillaroman/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-success-js!./src/pages/success.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(40787343088564,function(o,s){s?(console.log("bundle loading error",s),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/bruce/bvillaroman/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/bruce/bvillaroman/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/bruce/bvillaroman/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/bruce/bvillaroman/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/bruce/bvillaroman/node_modules/babel-preset-stage-0/lib/index.js","/Users/bruce/bvillaroman/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/success.js')})})}}});
//# sourceMappingURL=app-9a96b648eb918012163d.js.map