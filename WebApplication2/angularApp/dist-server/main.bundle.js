!function(e,t){for(var o in t)e[o]=t[o]}(exports,function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var o={};return t.m=e,t.c=o,t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}({0:function(e,t,o){e.exports=o("N9i+")},"2jjE":function(e,t){e.exports=require("core-js/es7/reflect")},"3P0r":function(e,t){e.exports=require("core-js/es6/math")},"8wGh":function(e,t){e.exports=require("@angular/animations/browser")},A7Ap:function(e,t){e.exports=require("@angular/router")},ASwt:function(e,t){e.exports=require("@angular/platform-server")},FHYU:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o("OQ0P"),n=o("seFm"),u=o("wQAS"),p=o("qZDQ"),l=o("q4dy"),i=o("f9NF"),a=o("ASwt"),d=o("Ir0Z"),s=o("yv0u"),c=o("wp5R"),m=o("8wGh"),f=o("Hq/i"),R=o("l0JX"),M=o("A7Ap"),y=o("xZkS"),A=o("m/OJ"),O=o("vnfH"),C=o("xPtR"),E=o("aR8+");t.AppModuleNgFactory=r.\u0275cmf(n.AppModule,[u.AppComponent],function(e){return r.\u0275mod([r.\u0275mpd(512,r.ComponentFactoryResolver,r.\u0275CodegenComponentFactoryResolver,[[8,[p.EmptyComponentNgFactory,l.AppComponentNgFactory]],[3,r.ComponentFactoryResolver],r.NgModuleRef]),r.\u0275mpd(4608,i.BrowserXhr,a.\u0275c,[]),r.\u0275mpd(4608,i.ResponseOptions,i.BaseResponseOptions,[]),r.\u0275mpd(4608,i.XSRFStrategy,a.\u0275d,[]),r.\u0275mpd(4608,i.XHRBackend,i.XHRBackend,[i.BrowserXhr,i.ResponseOptions,i.XSRFStrategy]),r.\u0275mpd(4608,i.RequestOptions,i.BaseRequestOptions,[]),r.\u0275mpd(5120,i.Http,a.\u0275e,[i.XHRBackend,i.RequestOptions]),r.\u0275mpd(4608,d.HttpXsrfTokenExtractor,d.\u0275g,[s.DOCUMENT,r.PLATFORM_ID,d.\u0275e]),r.\u0275mpd(4608,d.\u0275h,d.\u0275h,[d.HttpXsrfTokenExtractor,d.\u0275f]),r.\u0275mpd(5120,d.HTTP_INTERCEPTORS,function(e){return[e]},[d.\u0275h]),r.\u0275mpd(4608,d.XhrFactory,a.\u0275c,[]),r.\u0275mpd(4608,d.HttpXhrBackend,d.HttpXhrBackend,[d.XhrFactory]),r.\u0275mpd(6144,d.HttpBackend,null,[d.HttpXhrBackend]),r.\u0275mpd(5120,d.HttpHandler,a.\u0275f,[d.HttpBackend,[2,d.HTTP_INTERCEPTORS]]),r.\u0275mpd(4608,d.HttpClient,d.HttpClient,[d.HttpHandler]),r.\u0275mpd(4608,d.\u0275d,d.\u0275d,[]),r.\u0275mpd(5120,r.LOCALE_ID,r.\u0275m,[[3,r.LOCALE_ID]]),r.\u0275mpd(4608,s.NgLocalization,s.NgLocaleLocalization,[r.LOCALE_ID]),r.\u0275mpd(5120,r.APP_ID,r.\u0275f,[]),r.\u0275mpd(5120,r.IterableDiffers,r.\u0275k,[]),r.\u0275mpd(5120,r.KeyValueDiffers,r.\u0275l,[]),r.\u0275mpd(4608,c.DomSanitizer,c.\u0275e,[s.DOCUMENT]),r.\u0275mpd(6144,r.Sanitizer,null,[c.DomSanitizer]),r.\u0275mpd(4608,c.HAMMER_GESTURE_CONFIG,c.HammerGestureConfig,[]),r.\u0275mpd(5120,c.EVENT_MANAGER_PLUGINS,function(e,t,o,r){return[new c.\u0275DomEventsPlugin(e),new c.\u0275KeyEventsPlugin(t),new c.\u0275HammerGesturesPlugin(o,r)]},[s.DOCUMENT,s.DOCUMENT,s.DOCUMENT,c.HAMMER_GESTURE_CONFIG]),r.\u0275mpd(4608,c.EventManager,c.EventManager,[c.EVENT_MANAGER_PLUGINS,r.NgZone]),r.\u0275mpd(135680,c.\u0275DomSharedStylesHost,c.\u0275DomSharedStylesHost,[s.DOCUMENT]),r.\u0275mpd(4608,c.\u0275DomRendererFactory2,c.\u0275DomRendererFactory2,[c.EventManager,c.\u0275DomSharedStylesHost]),r.\u0275mpd(4608,a.\u0275b,a.\u0275b,[c.DOCUMENT,[2,c.\u0275TRANSITION_ID]]),r.\u0275mpd(6144,c.\u0275SharedStylesHost,null,[a.\u0275b]),r.\u0275mpd(4608,a.\u0275ServerRendererFactory2,a.\u0275ServerRendererFactory2,[r.NgZone,c.DOCUMENT,c.\u0275SharedStylesHost]),r.\u0275mpd(4608,m.AnimationDriver,m.\u0275NoopAnimationDriver,[]),r.\u0275mpd(5120,m.\u0275AnimationStyleNormalizer,f.\u0275d,[]),r.\u0275mpd(4608,m.\u0275AnimationEngine,f.\u0275b,[m.AnimationDriver,m.\u0275AnimationStyleNormalizer]),r.\u0275mpd(5120,r.RendererFactory2,a.\u0275a,[a.\u0275ServerRendererFactory2,m.\u0275AnimationEngine,r.NgZone]),r.\u0275mpd(4352,r.Testability,null,[]),r.\u0275mpd(4608,c.Meta,c.Meta,[s.DOCUMENT]),r.\u0275mpd(4608,c.Title,c.Title,[s.DOCUMENT]),r.\u0275mpd(4608,R.AnimationBuilder,f.\u0275BrowserAnimationBuilder,[r.RendererFactory2,c.DOCUMENT]),r.\u0275mpd(5120,M.ActivatedRoute,M.\u0275f,[M.Router]),r.\u0275mpd(4608,M.NoPreloading,M.NoPreloading,[]),r.\u0275mpd(6144,M.PreloadingStrategy,null,[M.NoPreloading]),r.\u0275mpd(135680,M.RouterPreloader,M.RouterPreloader,[M.Router,r.NgModuleFactoryLoader,r.Compiler,r.Injector,M.PreloadingStrategy]),r.\u0275mpd(4608,M.PreloadAllModules,M.PreloadAllModules,[]),r.\u0275mpd(5120,M.ROUTER_INITIALIZER,M.\u0275i,[M.\u0275g]),r.\u0275mpd(5120,r.APP_BOOTSTRAP_LISTENER,function(e,t,o,r){return[e,y.loadPrebootFactory(t,o,r)]},[M.ROUTER_INITIALIZER,a.PlatformState,r.RendererFactory2,y.PREBOOT_RECORD_OPTIONS]),r.\u0275mpd(512,i.HttpModule,i.HttpModule,[]),r.\u0275mpd(512,d.HttpClientXsrfModule,d.HttpClientXsrfModule,[]),r.\u0275mpd(512,d.HttpClientModule,d.HttpClientModule,[]),r.\u0275mpd(512,s.CommonModule,s.CommonModule,[]),r.\u0275mpd(1024,r.ErrorHandler,c.\u0275a,[]),r.\u0275mpd(1024,r.NgProbeToken,function(){return[M.\u0275b()]},[]),r.\u0275mpd(512,M.\u0275g,M.\u0275g,[r.Injector]),r.\u0275mpd(1024,r.APP_INITIALIZER,function(e,t,o){return[c.\u0275c(e,t),M.\u0275h(o)]},[[2,c.NgProbeToken],[2,r.NgProbeToken],M.\u0275g]),r.\u0275mpd(512,r.ApplicationInitStatus,r.ApplicationInitStatus,[[2,r.APP_INITIALIZER]]),r.\u0275mpd(131584,r.\u0275e,r.\u0275e,[r.NgZone,r.\u0275Console,r.Injector,r.ErrorHandler,r.ComponentFactoryResolver,r.ApplicationInitStatus]),r.\u0275mpd(2048,r.ApplicationRef,null,[r.\u0275e]),r.\u0275mpd(512,r.ApplicationModule,r.ApplicationModule,[r.ApplicationRef]),r.\u0275mpd(512,c.BrowserModule,c.BrowserModule,[[3,c.BrowserModule]]),r.\u0275mpd(512,f.NoopAnimationsModule,f.NoopAnimationsModule,[]),r.\u0275mpd(512,a.ServerModule,a.ServerModule,[]),r.\u0275mpd(1024,M.\u0275a,M.\u0275d,[[3,M.Router]]),r.\u0275mpd(512,M.UrlSerializer,M.DefaultUrlSerializer,[]),r.\u0275mpd(512,M.ChildrenOutletContexts,M.ChildrenOutletContexts,[]),r.\u0275mpd(256,M.ROUTER_CONFIGURATION,{},[]),r.\u0275mpd(1024,s.LocationStrategy,M.\u0275c,[s.PlatformLocation,[2,s.APP_BASE_HREF],M.ROUTER_CONFIGURATION]),r.\u0275mpd(512,s.Location,s.Location,[s.LocationStrategy]),r.\u0275mpd(512,r.Compiler,r.Compiler,[]),r.\u0275mpd(512,r.NgModuleFactoryLoader,r.SystemJsNgModuleLoader,[r.Compiler,[2,r.SystemJsNgModuleLoaderConfig]]),r.\u0275mpd(1024,M.ROUTES,function(){return[[{path:"dash",loadChildren:"./dash/dash.module#DashModule"},{path:"**",component:A.EmptyComponent}]]},[]),r.\u0275mpd(1024,M.Router,M.\u0275e,[r.ApplicationRef,M.UrlSerializer,M.ChildrenOutletContexts,s.Location,r.Injector,r.NgModuleFactoryLoader,r.Compiler,M.ROUTES,M.ROUTER_CONFIGURATION,[2,M.UrlHandlingStrategy],[2,M.RouteReuseStrategy]]),r.\u0275mpd(512,M.RouterModule,M.RouterModule,[[2,M.\u0275a],[2,M.Router]]),r.\u0275mpd(512,O.AppRoutingModule,O.AppRoutingModule,[]),r.\u0275mpd(512,C.MenuModule,C.MenuModule,[]),r.\u0275mpd(512,E.AppModuleShared,E.AppModuleShared,[]),r.\u0275mpd(512,y.ServerPrebootModule,y.ServerPrebootModule,[]),r.\u0275mpd(512,n.AppModule,n.AppModule,[]),r.\u0275mpd(256,d.\u0275e,"XSRF-TOKEN",[]),r.\u0275mpd(256,d.\u0275f,"X-XSRF-TOKEN",[]),r.\u0275mpd(256,y.PREBOOT_RECORD_OPTIONS,{appRoot:"app"},[])])})},H3oc:function(e,t){e.exports=require("core-js/es6/date")},"Hq/i":function(e,t){e.exports=require("@angular/platform-browser/animations")},Ir0Z:function(e,t){e.exports=require("@angular/common/http")},MeRl:function(e,t){e.exports=require("core-js/es6/reflect")},"N9i+":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o("yH9s"),o("WzFu");var r=o("OQ0P"),n=o("rvhi"),u=o("q4tM"),p=o("FHYU");r.enableProdMode(),t.default=n.createServerRenderer(function(e){var t={appSelector:"<app-root></app-root>",ngModule:p.AppModuleNgFactory,request:e,providers:[]};return u.ngAspnetCoreEngine(t).then(function(t){return t.globals.transferData=u.createTransferScript({someData:"Transfer this to the client on the window.TRANSFER_CACHE {} object",fromDotnet:e.data.thisCameFromDotNET}),{html:t.html,globals:t.globals}})})},OQ0P:function(e,t){e.exports=require("@angular/core")},R9hN:function(e,t){e.exports=require("core-js/es6/object")},Sf6w:function(e,t){e.exports=require("core-js/es6/string")},"TU+8":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o("pOH5"),o("R9hN"),o("qAIt"),o("sye9"),o("Y3yM"),o("oKxh"),o("3P0r"),o("Sf6w"),o("H3oc"),o("iaU0"),o("xGjA"),o("ujG8"),o("csSf"),o("bWs6"),o("MeRl"),o("2jjE")},TpZ7:function(e,t){e.exports=require("zone.js")},WzFu:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o("TU+8"),o("TpZ7")},Y3yM:function(e,t){e.exports=require("core-js/es6/parse-float")},"aR8+":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e}();t.AppModuleShared=r},bWs6:function(e,t){e.exports=require("core-js/es6/set")},csSf:function(e,t){e.exports=require("core-js/es6/weak-map")},f9NF:function(e,t){e.exports=require("@angular/http")},iaU0:function(e,t){e.exports=require("core-js/es6/array")},l0JX:function(e,t){e.exports=require("@angular/animations")},"m/OJ":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e}();t.EmptyComponent=r},oKxh:function(e,t){e.exports=require("core-js/es6/number")},pOH5:function(e,t){e.exports=require("core-js/es6/symbol")},q4dy:function(e,t,o){"use strict";function r(e){return u.\u0275vid(0,[(e()(),u.\u0275ted(null,["\n    "])),(e()(),u.\u0275eld(0,null,null,1,"h1",[],null,null,null,null,null)),(e()(),u.\u0275ted(null,["SSR Test"])),(e()(),u.\u0275ted(null,["\n    "])),(e()(),u.\u0275eld(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),u.\u0275did(212992,null,0,p.RouterOutlet,[p.ChildrenOutletContexts,u.ViewContainerRef,u.ComponentFactoryResolver,[8,null],u.ChangeDetectorRef],null,null),(e()(),u.\u0275ted(null,["\n    "]))],function(e,t){e(t,5,0)},null)}function n(e){return u.\u0275vid(0,[(e()(),u.\u0275eld(0,null,null,1,"app-root",[],null,null,null,r,t.RenderType_AppComponent)),u.\u0275did(49152,null,0,l.AppComponent,[],null,null)],null,null)}Object.defineProperty(t,"__esModule",{value:!0});var u=o("OQ0P"),p=o("A7Ap"),l=o("wQAS"),i=[];t.RenderType_AppComponent=u.\u0275crt({encapsulation:2,styles:i,data:{}}),t.View_AppComponent_0=r,t.View_AppComponent_Host_0=n,t.AppComponentNgFactory=u.\u0275ccf("app-root",l.AppComponent,n,{},{},[])},q4tM:function(e,t){e.exports=require("@nguniversal/aspnetcore-engine")},qAIt:function(e,t){e.exports=require("core-js/es6/function")},qZDQ:function(e,t,o){"use strict";function r(e){return u.\u0275vid(0,[],null,null)}function n(e){return u.\u0275vid(0,[(e()(),u.\u0275eld(0,null,null,1,"app-empty",[],null,null,null,r,t.RenderType_EmptyComponent)),u.\u0275did(49152,null,0,p.EmptyComponent,[],null,null)],null,null)}Object.defineProperty(t,"__esModule",{value:!0});var u=o("OQ0P"),p=o("m/OJ"),l=[];t.RenderType_EmptyComponent=u.\u0275crt({encapsulation:2,styles:l,data:{}}),t.View_EmptyComponent_0=r,t.View_EmptyComponent_Host_0=n,t.EmptyComponentNgFactory=u.\u0275ccf("app-empty",p.EmptyComponent,n,{},{},[])},rvhi:function(e,t){e.exports=require("aspnet-prerendering")},seFm:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.ctorParameters=function(){return[]},e}();t.AppModule=r},sye9:function(e,t){e.exports=require("core-js/es6/parse-int")},ujG8:function(e,t){e.exports=require("core-js/es6/map")},vnfH:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o("m/OJ");t.routes=[{path:"dash",loadChildren:"./dash/dash.module#DashModule"},{path:"**",component:r.EmptyComponent}];var n=function(){function e(){}return e}();t.AppRoutingModule=n},wQAS:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e}();t.AppComponent=r},wp5R:function(e,t){e.exports=require("@angular/platform-browser")},xGjA:function(e,t){e.exports=require("core-js/es6/regexp")},xPtR:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e}();t.MenuModule=r},xZkS:function(e,t){e.exports=require("preboot/src/server/server-preboot.module")},yH9s:function(e,t){e.exports=require("zone.js/dist/zone-node")},yv0u:function(e,t){e.exports=require("@angular/common")}}));