var ac_main =
webpackJsonpac__name_([2],{

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(2);

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(0);

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppState; });


var AppState = (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this._clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype._clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    return AppState;
}());
AppState = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], AppState);



/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_component__ = __webpack_require__(198);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__about_component__["a"]; });



/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(440);

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(201);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });



/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__no_content_component__ = __webpack_require__(206);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__no_content_component__["a"]; });



/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_listing_component__ = __webpack_require__(207);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__page_listing_component__["a"]; });



/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
var Api = (function () {
    function Api() {
        this.PROXY_URL = 'https://crossorigin.me/';
    }
    return Api;
}());



/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(443);

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(64);

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(17);

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(762);

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(770);

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(786);

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(813);

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(195);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });
// App



/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(442);

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(143);

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });

/*
 * Angular 2 decorators and services
 */


/*
 * App Component
 * Top Level Component
 */
var AppComponent = (function () {
    function AppComponent(appState) {
        this.appState = appState;
        this.angularclassLogo = 'assets/img/angularclass-avatar.png';
        this.name = 'Angular 2 Webpack Starter';
        this.url = 'https://twitter.com/AngularClass';
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('Initial App State', this.appState.state);
    };
    return AppComponent;
}());
AppComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app',
        encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None,
        styles: [
            __webpack_require__(241)
        ],
        template: __webpack_require__(230)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppState */]])
], AppComponent);

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */


/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angularclass_hmr__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environment__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_resolver__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_home__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_about__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component_log_in__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__component_side_nav__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__component_header__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_listing__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__component_page_listing__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__component_no_content__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__styles_styles_scss__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__styles_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__styles_styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__styles_headings_css__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__styles_headings_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__styles_headings_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_material__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_hammerjs__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__service_airbnb_api_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__service_google_api_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });







/*
 * Platform and Environment providers/directives/pipes
 */


// App is our top level component

















// Application wide providers
var APP_PROVIDERS = __WEBPACK_IMPORTED_MODULE_10__app_resolver__["a" /* APP_RESOLVER_PROVIDERS */].concat([
    __WEBPACK_IMPORTED_MODULE_11__app_service__["a" /* AppState */],
    __WEBPACK_IMPORTED_MODULE_24__service_airbnb_api_service__["a" /* AirbnbApiService */],
    __WEBPACK_IMPORTED_MODULE_25__service_google_api_service__["a" /* GoogleApiService */]
]);
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appRef, appState) {
        this.appRef = appRef;
        this.appState = appState;
    }
    AppModule.prototype.hmrOnInit = function (store) {
        if (!store || !store.state) {
            return;
        }
        console.log('HMR store', JSON.stringify(store, null, 2));
        // set state
        this.appState._state = store.state;
        // set input values
        if ('restoreInputValues' in store) {
            var restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }
        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    };
    AppModule.prototype.hmrOnDestroy = function (store) {
        var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
        // save state
        var state = this.appState._state;
        store.state = state;
        // recreate root elements
        store.disposeOldHosts = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angularclass_hmr__["createNewHosts"])(cmpLocation);
        // save input values
        store.restoreInputValues = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angularclass_hmr__["createInputTransfer"])();
        // remove styles
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angularclass_hmr__["removeNgStyles"])();
    };
    AppModule.prototype.hmrAfterDestroy = function (store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    return AppModule;
}());
AppModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__component_about__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_12__component_home__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__component_log_in__["a" /* LogInComponent */],
            __WEBPACK_IMPORTED_MODULE_16__component_header__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_15__component_side_nav__["a" /* SideNavComponent */],
            __WEBPACK_IMPORTED_MODULE_17__component_listing__["a" /* ListingComponent */],
            __WEBPACK_IMPORTED_MODULE_18__component_page_listing__["a" /* PageListingComponent */],
            __WEBPACK_IMPORTED_MODULE_19__component_no_content__["a" /* NoContentComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["RouterModule"].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* ROUTES */], { useHash: true, preloadingStrategy: __WEBPACK_IMPORTED_MODULE_6__angular_router__["PreloadAllModules"] }),
            __WEBPACK_IMPORTED_MODULE_22__angular_material__["MaterialModule"].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__environment__["b" /* ENV_PROVIDERS */],
            APP_PROVIDERS
        ]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_core__["ApplicationRef"],
        __WEBPACK_IMPORTED_MODULE_11__app_service__["a" /* AppState */]])
], AppModule);



/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* unused harmony export DataResolver */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_RESOLVER_PROVIDERS; });




var DataResolver = (function () {
    function DataResolver() {
    }
    DataResolver.prototype.resolve = function (route, state) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ res: 'I am data' });
    };
    return DataResolver;
}());
DataResolver = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], DataResolver);

// an array of services to resolve routes with data
var APP_RESOLVER_PROVIDERS = [
    DataResolver
];


/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_home__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_about__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_no_content__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_page_listing__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });




var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__component_home__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__component_home__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_1__component_about__["a" /* AboutComponent */] },
    { path: 'listing', component: __WEBPACK_IMPORTED_MODULE_3__component_page_listing__["a" /* PageListingComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__component_no_content__["a" /* NoContentComponent */] },
];


/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });



var AboutComponent = (function () {
    function AboutComponent(route) {
        this.route = route;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .data
            .subscribe(function (data) {
            // your resolved data from route
            _this.localState = data.yourData;
        });
        console.log('hello `About` component');
        // static data that is bundled
        // var mockData = require('assets/mock-data/mock-data.json');
        // console.log('mockData', mockData);
        // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
        this.asyncDataWithWebpack();
    };
    AboutComponent.prototype.asyncDataWithWebpack = function () {
        var _this = this;
        // you can also async load mock data with 'es6-promise-loader'
        // you would do this if you don't want the mock-data bundled
        // remember that 'es6-promise-loader' is a promise
        setTimeout(function () {
            __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 397))
                .then(function (json) {
                console.log('async mockData', json);
                _this.localState = json;
            });
        });
    };
    return AboutComponent;
}());
AboutComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'about',
        styles: ["\n  "],
        template: "\n    <h1>About</h1>\n    <div>\n      For hot module reloading run\n      <pre>npm run start:hmr</pre>\n    </div>\n    <div>\n      <h3>\n        patrick@AngularClass.com\n      </h3>\n    </div>\n    <pre>this.localState = {{ localState | json }}</pre>\n  "
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]])
], AboutComponent);



/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_metadata_directives__ = __webpack_require__(255);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });



var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
        /* empty */
    };
    return HeaderComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_metadata_directives__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object)
], HeaderComponent.prototype, "sidenav", void 0);
HeaderComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'nj-header',
        providers: [],
        styles: [__webpack_require__(242)],
        template: __webpack_require__(231)
    })
], HeaderComponent);



/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(441);

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_component__ = __webpack_require__(199);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__header_component__["a"]; });



/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_google_api_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });



var HomeComponent = (function () {
    function HomeComponent(googleApiService) {
        this.googleApiService = googleApiService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.googleApiService.getClient()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return HomeComponent;
}());
HomeComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'home',
        styles: [__webpack_require__(243)],
        template: __webpack_require__(232)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_google_api_service__["a" /* GoogleApiService */]])
], HomeComponent);



/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listing_component__ = __webpack_require__(203);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__listing_component__["a"]; });



/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingComponent; });


var ListingComponent = (function () {
    function ListingComponent() {
    }
    ListingComponent.prototype.ngOnInit = function () {
        console.log('listing', this.listing);
        this.index++;
    };
    return ListingComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object)
], ListingComponent.prototype, "listing", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Number)
], ListingComponent.prototype, "index", void 0);
ListingComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'nj-listing',
        providers: [],
        styles: [__webpack_require__(244)],
        template: __webpack_require__(233)
    })
], ListingComponent);



/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__log_in_component__ = __webpack_require__(205);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__log_in_component__["a"]; });



/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_google_api_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_airbnb_api_service__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogInComponent; });




var LogInComponent = (function () {
    function LogInComponent(googleApiService, airbnbApiService) {
        this.googleApiService = googleApiService;
        this.airbnbApiService = airbnbApiService;
        this.logInInputState = 'inactive';
        this.init();
    }
    LogInComponent.prototype.setLogInInputState = function (state) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __awaiter */](this, void 0, void 0, function () {
            var auth;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __generator */](this, function (_a) {
                this.logInInputState = state;
                auth = this.gapi.auth2.getAuthInstance().signIn();
                console.log('login result', auth);
                this.airbnbApiService.logInByGoogle()
                    .then(function (res) {
                    res.subscribe(function (obRes) {
                        console.log('login by google result: ', obRes);
                    });
                })
                    .catch(function (err) {
                    console.log('err login by google', err);
                });
                return [2 /*return*/];
            });
        });
    };
    LogInComponent.prototype.init = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __awaiter */](this, void 0, void 0, function () {
            var _a;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __generator */](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.googleApiService.getClient()];
                    case 1:
                        _a.gapi = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return LogInComponent;
}());
LogInComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'nj-log-in',
        providers: [],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["trigger"])('logInInputState', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({
                    height: '1rem'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({
                    height: '*'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])('100ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])('100ms ease-out'))
            ])
        ],
        styles: [__webpack_require__(245)],
        template: __webpack_require__(234)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_google_api_service__["a" /* GoogleApiService */],
        __WEBPACK_IMPORTED_MODULE_3__service_airbnb_api_service__["a" /* AirbnbApiService */]])
], LogInComponent);



/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoContentComponent; });


var NoContentComponent = (function () {
    function NoContentComponent() {
    }
    return NoContentComponent;
}());
NoContentComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'no-content',
        template: "\n    <div>\n      <h1>404: page missing</h1>\n    </div>\n  "
    })
], NoContentComponent);



/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_listing_service__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_repo_service_provider__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_repo_service__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListingComponent; });





var PageListingComponent = (function () {
    function PageListingComponent(listingService) {
        this.listingService = listingService;
    }
    PageListingComponent.prototype.ngOnInit = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __awaiter */](this, void 0, void 0, function () {
            var _this = this;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __generator */](this, function (_a) {
                this.listingService.getListing().catch(function (res) {
                    console.log('err res', res);
                    return res;
                }).subscribe(function (res) {
                    console.log('res', res);
                    _this.listings = res;
                });
                return [2 /*return*/];
            });
        });
    };
    return PageListingComponent;
}());
PageListingComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'nj-page-listing',
        providers: [__WEBPACK_IMPORTED_MODULE_2__page_listing_service__["a" /* PageListingService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_4__service_repo_service__["a" /* RepoService */],
                useFactory: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__service_repo_service_provider__["a" /* repoServiceFactory */])('listing'),
            }],
        styles: [__webpack_require__(246)],
        template: __webpack_require__(235)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__page_listing_service__["a" /* PageListingService */]])
], PageListingComponent);



/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_airbnb_api_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_repo_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_rxjs_Observable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__node_modules_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListingService; });





var PageListingService = (function () {
    function PageListingService(apiService, repoService) {
        this.apiService = apiService;
        this.repoService = repoService;
    }
    PageListingService.prototype.getListing = function () {
        var _this = this;
        return this.getAllListings()
            .catch(function (err) {
            if (err.name === 'not_found') {
                var listingArray = _this.fetchListing();
                var listingDocArray = _this.transformToListingDocArray(listingArray);
                return listingDocArray
                    .merge()
                    .mergeMap(function (listings) {
                    return _this.saveAllListingToRepo(listings)
                        .mergeMapTo(_this.getAllListings());
                });
            }
            else {
                console.log('error getListing', err);
            }
        });
    };
    PageListingService.prototype.saveAllListingToRepo = function (listingDocs) {
        console.log('listingDoc', listingDocs);
        return __WEBPACK_IMPORTED_MODULE_4__node_modules_rxjs_Observable__["Observable"].fromPromise(this.repoService.saveAll(listingDocs));
    };
    PageListingService.prototype.fetchListing = function () {
        return this.apiService.getListing()
            .mergeMap(function (res) {
            return res['listings'];
        });
    };
    PageListingService.prototype.transformToListingDocArray = function (listings) {
        var _this = this;
        return listings
            .map(function (listing) { return _this.getMappedListingData(listing); })
            .map(function (listing) { return _this.createListingDoc(listing); })
            .toArray();
    };
    PageListingService.prototype.createListingDoc = function (listing) {
        var timestamp = new Date().getTime();
        var repoDoc = {
            _id: 'listing',
            updatedAt: timestamp,
            createdAt: timestamp
        };
        return Object.assign(repoDoc, listing);
    };
    PageListingService.prototype.getMappedListingData = function (data) {
        var listing = {
            _id: null,
            name: null,
            summary: null,
            photos: {
                large_url: [],
                small_encoded: [],
                thumbnail_encoded: []
            },
            bedrooms: null
        };
        listing._id = data['id'].toString();
        listing.name = data['name'];
        listing.summary = data['summary'];
        listing.photos.large_url = data['xl_picture_urls'];
        listing.bedrooms = data['bedrooms'];
        return listing;
    };
    PageListingService.prototype.getAllListings = function () {
        console.log('get all listings');
        return __WEBPACK_IMPORTED_MODULE_4__node_modules_rxjs_Observable__["Observable"].fromPromise(this.repoService.list());
    };
    return PageListingService;
}());
PageListingService = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_airbnb_api_service__["a" /* AirbnbApiService */],
        __WEBPACK_IMPORTED_MODULE_3__service_repo_service__["a" /* RepoService */]])
], PageListingService);



/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__side_nav_component__ = __webpack_require__(210);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__side_nav_component__["a"]; });



/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(819);

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNavComponent; });


var SideNavComponent = (function () {
    function SideNavComponent() {
    }
    SideNavComponent.prototype.ngOnInit = function () {
        /* empty */
    };
    return SideNavComponent;
}());
SideNavComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'nj-side-nav',
        providers: [],
        styles: [__webpack_require__(247)],
        template: __webpack_require__(236)
    })
], SideNavComponent);



/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__repo_service__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return repoServiceFactory; });

var repoServiceFactory = function (dbName) {
    console.log('dbName', dbName);
    return function () { return new __WEBPACK_IMPORTED_MODULE_0__repo_service__["a" /* RepoService */](dbName); };
};


/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "html, body, main {\n  width: 100%;\n  height: 100%;\n  font-family: Arial, Helvetica, sans-serif; }\n\na.active {\n  background-color: gray; }\n\n.side-nav-container .side-nav {\n  width: 70%; }\n", ""]);

// exports


/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ":host nav {\n  display: flex;\n  margin: 0; }\n  :host nav #nav-button {\n    min-width: 2rem;\n    height: 3rem; }\n", ""]);

// exports


/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "/*styles for home content only*/\n", ""]);

// exports


/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  padding: 1rem; }\n  :host .listing-card .listing-header .listing-header-image {\n    background-image: url(\"https://a2.muscache.com/im/pictures/186ff6e1-3227-4792-bc6e-591932235263.jpg?aki_policy=profile_small\"); }\n  @media (max-width: 600px) {\n    :host .listing-card .listing-header {\n      margin: -8px 0 16px; } }\n  :host .listing-card .listing-content .listing-content-image img {\n    width: 100%; }\n", ""]);

// exports


/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ":host {\n  display: flex;\n  justify-content: center; }\n  :host .log-in-input-wrapper .wording-label {\n    display: inline-block;\n    margin: 1rem 0; }\n  :host .log-in-input-wrapper.active .wording-label {\n    display: none; }\n  :host .log-in-input-wrapper.inactive .form-box {\n    display: none; }\n", ""]);

// exports


/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "/* this file will be extracted to main dist folder and is imported in index.html */\n/* This file is for setting global styles  */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n.md-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n[md-ripple] {\n  overflow: hidden; }\n\n[md-ripple].mdRippleUnbounded {\n  overflow: visible; }\n\n.md-ripple-background {\n  background-color: rgba(0, 0, 0, 0.0588);\n  opacity: 0;\n  transition: opacity 300ms linear;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0; }\n\n.mdRippleUnbounded .md-ripple-background {\n  display: none; }\n\n.md-ripple-background.md-ripple-active {\n  opacity: 1; }\n\n.mdRippleFocused .md-ripple-background {\n  opacity: 1; }\n\n.md-ripple-foreground {\n  background-color: rgba(0, 0, 0, 0.0588);\n  border-radius: 50%;\n  pointer-events: none;\n  opacity: 0.25;\n  position: absolute;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1); }\n\n.md-ripple-foreground.md-ripple-fade-in {\n  opacity: 1; }\n\n.md-ripple-foreground.md-ripple-fade-out {\n  opacity: 0; }\n\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  text-transform: none;\n  width: 1px; }\n\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n\n.cdk-global-overlay-wrapper {\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000; }\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.6); }\n\n.cdk-overlay-transparent-backdrop {\n  background: none; }\n\n.mdRippleFocused .md-ripple-background {\n  background-color: rgba(255, 64, 129, 0.1); }\n\n[md-button].md-button-focus.md-primary .md-button-focus-overlay, [md-icon-button].md-button-focus.md-primary .md-button-focus-overlay, [md-raised-button].md-button-focus.md-primary .md-button-focus-overlay, [md-fab].md-button-focus.md-primary .md-button-focus-overlay, [md-mini-fab].md-button-focus.md-primary .md-button-focus-overlay {\n  background-color: rgba(63, 81, 181, 0.12); }\n\n[md-button].md-button-focus.md-accent .md-button-focus-overlay, [md-icon-button].md-button-focus.md-accent .md-button-focus-overlay, [md-raised-button].md-button-focus.md-accent .md-button-focus-overlay, [md-fab].md-button-focus.md-accent .md-button-focus-overlay, [md-mini-fab].md-button-focus.md-accent .md-button-focus-overlay {\n  background-color: rgba(255, 64, 129, 0.12); }\n\n[md-button].md-button-focus.md-warn .md-button-focus-overlay, [md-icon-button].md-button-focus.md-warn .md-button-focus-overlay, [md-raised-button].md-button-focus.md-warn .md-button-focus-overlay, [md-fab].md-button-focus.md-warn .md-button-focus-overlay, [md-mini-fab].md-button-focus.md-warn .md-button-focus-overlay {\n  background-color: rgba(244, 67, 54, 0.12); }\n\n[md-button], [md-icon-button] {\n  background: transparent; }\n  [md-button].md-primary, [md-icon-button].md-primary {\n    color: #3f51b5; }\n  [md-button].md-accent, [md-icon-button].md-accent {\n    color: #ff4081; }\n  [md-button].md-warn, [md-icon-button].md-warn {\n    color: #f44336; }\n  [md-button].md-primary[disabled], [md-button].md-accent[disabled], [md-button].md-warn[disabled], [md-button][disabled][disabled], [md-icon-button].md-primary[disabled], [md-icon-button].md-accent[disabled], [md-icon-button].md-warn[disabled], [md-icon-button][disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  [md-button]:hover.md-primary .md-button-focus-overlay, [md-icon-button]:hover.md-primary .md-button-focus-overlay {\n    background-color: rgba(63, 81, 181, 0.12); }\n  [md-button]:hover.md-accent .md-button-focus-overlay, [md-icon-button]:hover.md-accent .md-button-focus-overlay {\n    background-color: rgba(255, 64, 129, 0.12); }\n  [md-button]:hover.md-warn .md-button-focus-overlay, [md-icon-button]:hover.md-warn .md-button-focus-overlay {\n    background-color: rgba(244, 67, 54, 0.12); }\n\n[md-raised-button], [md-fab], [md-mini-fab] {\n  background-color: #fafafa; }\n  [md-raised-button].md-primary, [md-fab].md-primary, [md-mini-fab].md-primary {\n    color: rgba(255, 255, 255, 0.87); }\n  [md-raised-button].md-accent, [md-fab].md-accent, [md-mini-fab].md-accent {\n    color: white; }\n  [md-raised-button].md-warn, [md-fab].md-warn, [md-mini-fab].md-warn {\n    color: white; }\n  [md-raised-button].md-primary[disabled], [md-raised-button].md-accent[disabled], [md-raised-button].md-warn[disabled], [md-raised-button][disabled][disabled], [md-fab].md-primary[disabled], [md-fab].md-accent[disabled], [md-fab].md-warn[disabled], [md-fab][disabled][disabled], [md-mini-fab].md-primary[disabled], [md-mini-fab].md-accent[disabled], [md-mini-fab].md-warn[disabled], [md-mini-fab][disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  [md-raised-button].md-primary, [md-fab].md-primary, [md-mini-fab].md-primary {\n    background-color: #3f51b5; }\n  [md-raised-button].md-accent, [md-fab].md-accent, [md-mini-fab].md-accent {\n    background-color: #ff4081; }\n  [md-raised-button].md-warn, [md-fab].md-warn, [md-mini-fab].md-warn {\n    background-color: #f44336; }\n  [md-raised-button].md-primary[disabled], [md-raised-button].md-accent[disabled], [md-raised-button].md-warn[disabled], [md-raised-button][disabled][disabled], [md-fab].md-primary[disabled], [md-fab].md-accent[disabled], [md-fab].md-warn[disabled], [md-fab][disabled][disabled], [md-mini-fab].md-primary[disabled], [md-mini-fab].md-accent[disabled], [md-mini-fab].md-warn[disabled], [md-mini-fab][disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n\n[md-fab], [md-mini-fab] {\n  background-color: #ff4081;\n  color: white; }\n\n.md-button-toggle-checked .md-button-toggle-label-content {\n  background-color: #e0e0e0; }\n\n.md-button-toggle-disabled .md-button-toggle-label-content {\n  background-color: rgba(0, 0, 0, 0.38); }\n\nmd-card {\n  background: white;\n  color: black; }\n\nmd-card-subtitle {\n  color: rgba(0, 0, 0, 0.54); }\n\n.md-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54); }\n\n.md-checkbox-checkmark {\n  fill: #fafafa; }\n\n.md-checkbox-checkmark-path {\n  stroke: #fafafa !important; }\n\n.md-checkbox-mixedmark {\n  background-color: #fafafa; }\n\n.md-checkbox-indeterminate.md-primary .md-checkbox-background, .md-checkbox-checked.md-primary .md-checkbox-background {\n  background-color: #3f51b5; }\n\n.md-checkbox-indeterminate.md-accent .md-checkbox-background, .md-checkbox-checked.md-accent .md-checkbox-background {\n  background-color: #e91e63; }\n\n.md-checkbox-indeterminate.md-warn .md-checkbox-background, .md-checkbox-checked.md-warn .md-checkbox-background {\n  background-color: #f44336; }\n\n.md-checkbox-disabled.md-checkbox-checked .md-checkbox-background, .md-checkbox-disabled.md-checkbox-indeterminate .md-checkbox-background {\n  background-color: #b0b0b0; }\n\n.md-checkbox-disabled:not(.md-checkbox-checked) .md-checkbox-frame {\n  border-color: #b0b0b0; }\n\n.md-checkbox:not(.md-checkbox-disabled).md-primary .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(63, 81, 181, 0.26); }\n\n.md-checkbox:not(.md-checkbox-disabled).md-accent .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(255, 64, 129, 0.26); }\n\n.md-checkbox:not(.md-checkbox-disabled).md-warn .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(244, 67, 54, 0.26); }\n\n.md-chip:not(.md-basic-chip) {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87); }\n\n.md-chip.md-chip-selected:not(.md-basic-chip) {\n  background-color: #808080;\n  color: rgba(255, 255, 255, 0.87); }\n  .md-chip.md-chip-selected:not(.md-basic-chip).md-primary {\n    background-color: #3f51b5;\n    color: rgba(255, 255, 255, 0.87); }\n  .md-chip.md-chip-selected:not(.md-basic-chip).md-accent {\n    background-color: #e91e63;\n    color: white; }\n  .md-chip.md-chip-selected:not(.md-basic-chip).md-warn {\n    background-color: #f44336;\n    color: white; }\n\nmd-dialog-container {\n  background: white; }\n\nmd-icon.md-primary {\n  color: #3f51b5; }\n\nmd-icon.md-accent {\n  color: #ff4081; }\n\nmd-icon.md-warn {\n  color: #f44336; }\n\n.md-input-placeholder {\n  color: rgba(0, 0, 0, 0.38); }\n  .md-input-placeholder.md-focused {\n    color: #3f51b5; }\n    .md-input-placeholder.md-focused.md-accent {\n      color: #ff4081; }\n    .md-input-placeholder.md-focused.md-warn {\n      color: #f44336; }\n\ninput.md-input-element:-webkit-autofill + .md-input-placeholder .md-placeholder-required,\n.md-input-placeholder.md-float.md-focused .md-placeholder-required {\n  color: #ff4081; }\n\n.md-input-underline {\n  border-color: rgba(0, 0, 0, 0.12); }\n  .md-input-underline .md-input-ripple {\n    background-color: #3f51b5; }\n    .md-input-underline .md-input-ripple.md-accent {\n      background-color: #ff4081; }\n    .md-input-underline .md-input-ripple.md-warn {\n      background-color: #f44336; }\n\nmd-list md-list-item, md-list a[md-list-item], md-nav-list md-list-item, md-nav-list a[md-list-item] {\n  color: black; }\n\nmd-list [md-subheader], md-nav-list [md-subheader] {\n  color: rgba(0, 0, 0, 0.54); }\n\nmd-divider {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\nmd-nav-list .md-list-item:hover, md-nav-list .md-list-item.md-list-item-focus {\n  background: rgba(0, 0, 0, 0.04); }\n\n.md-menu-content {\n  background: white; }\n\n[md-menu-item] {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87); }\n  [md-menu-item][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  [md-menu-item] md-icon {\n    color: rgba(0, 0, 0, 0.54); }\n  [md-menu-item]:hover:not([disabled]), [md-menu-item]:focus:not([disabled]) {\n    background: rgba(0, 0, 0, 0.04); }\n\n.md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#c5cae9%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.md-progress-bar-buffer {\n  background-color: #c5cae9; }\n\n.md-progress-bar-fill::after {\n  background-color: #3949ab; }\n\nmd-progress-bar.md-accent .md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#f8bbd0%27%2F%3E%3C%2Fsvg%3E\"); }\n\nmd-progress-bar.md-accent .md-progress-bar-buffer {\n  background-color: #f8bbd0; }\n\nmd-progress-bar.md-accent .md-progress-bar-fill::after {\n  background-color: #d81b60; }\n\nmd-progress-bar.md-warn .md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#ffcdd2%27%2F%3E%3C%2Fsvg%3E\"); }\n\nmd-progress-bar.md-warn .md-progress-bar-buffer {\n  background-color: #ffcdd2; }\n\nmd-progress-bar.md-warn .md-progress-bar-fill::after {\n  background-color: #e53935; }\n\nmd-progress-spinner path, md-progress-circle path, md-spinner path {\n  stroke: #3949ab; }\n\nmd-progress-spinner.md-accent path, md-progress-circle.md-accent path, md-spinner.md-accent path {\n  stroke: #d81b60; }\n\nmd-progress-spinner.md-warn path, md-progress-circle.md-warn path, md-spinner.md-warn path {\n  stroke: #e53935; }\n\n.md-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.54); }\n  .md-radio-checked .md-radio-outer-circle {\n    border-color: #ff4081; }\n  .md-radio-disabled .md-radio-outer-circle {\n    border-color: rgba(0, 0, 0, 0.38); }\n\n.md-radio-inner-circle {\n  background-color: #ff4081; }\n  .md-radio-disabled .md-radio-inner-circle {\n    background-color: rgba(0, 0, 0, 0.38); }\n\n.md-radio-ripple .md-ripple-foreground {\n  background-color: rgba(255, 64, 129, 0.26); }\n  .md-radio-disabled .md-radio-ripple .md-ripple-foreground {\n    background-color: rgba(0, 0, 0, 0.38); }\n\n.md-select-trigger {\n  color: rgba(0, 0, 0, 0.38);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n  md-select:focus:not(.md-select-disabled) .md-select-trigger {\n    color: #3f51b5;\n    border-bottom: 1px solid #3f51b5; }\n  md-select.ng-invalid.ng-touched:not(.md-select-disabled) .md-select-trigger {\n    color: #f44336;\n    border-bottom: 1px solid #f44336; }\n\n.md-select-arrow {\n  color: rgba(0, 0, 0, 0.38); }\n  md-select:focus:not(.md-select-disabled) .md-select-arrow {\n    color: #3f51b5; }\n  md-select.ng-invalid.ng-touched:not(.md-select-disabled) .md-select-arrow {\n    color: #f44336; }\n\n.md-select-content {\n  background: white; }\n\n.md-select-value {\n  color: rgba(0, 0, 0, 0.87); }\n  .md-select-disabled .md-select-value {\n    color: rgba(0, 0, 0, 0.38); }\n\nmd-option:hover:not(.md-option-disabled), md-option:focus:not(.md-option-disabled) {\n  background: rgba(0, 0, 0, 0.04); }\n\nmd-option.md-selected {\n  background: rgba(0, 0, 0, 0.04);\n  color: #3f51b5; }\n\nmd-option.md-option-disabled {\n  color: rgba(0, 0, 0, 0.38); }\n\n.md-sidenav-container {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n\nmd-sidenav {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n  md-sidenav.md-sidenav-push {\n    background-color: white; }\n\n.md-sidenav-backdrop.md-sidenav-shown {\n  background-color: rgba(0, 0, 0, 0.6); }\n\nmd-slide-toggle.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #e91e63; }\n\nmd-slide-toggle.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(233, 30, 99, 0.5); }\n\nmd-slide-toggle.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(0, 0, 0, 0.12); }\n\nmd-slide-toggle.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(233, 30, 99, 0.26); }\n\nmd-slide-toggle.md-primary.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #3f51b5; }\n\nmd-slide-toggle.md-primary.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(63, 81, 181, 0.5); }\n\nmd-slide-toggle.md-primary.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(0, 0, 0, 0.12); }\n\nmd-slide-toggle.md-primary.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(63, 81, 181, 0.26); }\n\nmd-slide-toggle.md-warn.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #f44336; }\n\nmd-slide-toggle.md-warn.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(244, 67, 54, 0.5); }\n\nmd-slide-toggle.md-warn.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(0, 0, 0, 0.12); }\n\nmd-slide-toggle.md-warn.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(244, 67, 54, 0.26); }\n\n.md-disabled .md-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n\n.md-disabled .md-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.md-slide-toggle-thumb {\n  background-color: #fafafa; }\n\n.md-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.md-slider-track {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.md-slider-track-fill {\n  background-color: #ff4081; }\n\n.md-slider-thumb {\n  background-color: #ff4081; }\n\n.md-slider-thumb-label {\n  background-color: #ff4081; }\n\n.md-slider-thumb-label-text {\n  color: white; }\n\n[md-tab-nav-bar],\n.md-tab-header {\n  border-bottom: 1px solid #e0e0e0; }\n\n.md-tab-label:focus {\n  background-color: rgba(197, 202, 233, 0.3); }\n\nmd-ink-bar {\n  background-color: #3f51b5; }\n\nmd-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87); }\n  md-toolbar.md-primary {\n    background: #3f51b5;\n    color: rgba(255, 255, 255, 0.87); }\n  md-toolbar.md-accent {\n    background: #ff4081;\n    color: white; }\n  md-toolbar.md-warn {\n    background: #f44336;\n    color: white; }\n\n.md-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n\n/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n/* Document\n   ========================================================================== */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  line-height: 1.15;\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n  /* 3 */\n  -webkit-text-size-adjust: 100%;\n  /* 3 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0; }\n\n/**\n * Add the correct display in IE 9-.\n */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\nfigcaption,\nfigure,\nmain {\n  /* 1 */\n  display: block; }\n\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */ }\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\na:active,\na:hover {\n  outline-width: 0; }\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit; }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000; }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\naudio,\nvideo {\n  display: inline-block; }\n\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none; }\n\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */ }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\ndetails,\nmenu {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Scripting\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\ncanvas {\n  display: inline-block; }\n\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none; }\n\n/* Hidden\n   ========================================================================== */\n/**\n * Add the correct display in IE 10-.\n */\n[hidden] {\n  display: none; }\n\nnav {\n  margin-top: 16px; }\n\nnav a {\n  background-color: #00838F;\n  color: white;\n  padding: 8px 16px;\n  margin: 8px;\n  vertical-align: middle;\n  line-height: 1.25;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 4px; }\n\np {\n  margin: 0; }\n", ""]);

// exports


/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "h1 {\n  color: #00BCD4;\n}", ""]);

// exports


/***/ }),

/***/ 230:
/***/ (function(module, exports) {

module.exports = "<nj-header [sidenav]=\"sidenav\"></nj-header>\n<md-sidenav-container class=\"side-nav-container\">\n  <md-sidenav class=\"side-nav\" #sidenav mode=\"push\">\n    <!-- sidenav content -->\n    <nj-side-nav></nj-side-nav>\n  </md-sidenav>\n  <!-- primary content -->\n  <router-outlet></router-outlet>\n  <footer></footer>\n</md-sidenav-container>\n"

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports = "<nav>\n  <button id=\"nav-button\" md-button (click)=\"sidenav.toggle()\"><i class=\"material-icons\">menu</i></button>\n  <!-- <a [routerLink]=\" ['./'] \"\n      routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n     Index\n   </a>\n   <a [routerLink]=\" ['./home'] \"\n      routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n     Home\n   </a>\n   <a [routerLink]=\" ['./detail'] \"\n      routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n     Detail\n   </a>\n   <a [routerLink]=\" ['./barrel'] \"\n      routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n     Barrel\n   </a>\n   <a [routerLink]=\" ['./about'] \"\n      routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n     About\n   </a>-->\n</nav>\n"

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

module.exports = "<nj-log-in></nj-log-in>\n<nj-page-listing></nj-page-listing>\n"

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"listing-card\">\n  <md-card-header class=\"listing-header\">\n    <div md-card-avatar class=\"listing-header-image\"></div>\n    <md-card-title>N&J #{{ index }}</md-card-title>\n    <md-card-subtitle>{{ listing.bedrooms }} bed rooms</md-card-subtitle>\n  </md-card-header>\n  <md-card-content class=\"listing-content\">\n    <div class=\"listing-content-image\">\n      <img src=\"{{ listing.photos.large_url[0] }}\" style=\"\" alt=\"\"/>\n    </div>\n    <div class=\"listing-content-desc\">\n      <a href=\"https://www.airbnb.com/rooms/16268602\" rel=\"nofollow\"><h4>{{ listing.name }}</h4></a>\n      <div>Bangkok, Krung Thep Maha Nakhon, Thailand</div>\n      <blockquote>our house is only within 20 minutes distance to hot places such as Sukhumvit, Asoke, Siam, RCA,\n        Khaosan, Thonglor, etc.\n\n        Every public transportation is accessible within 5 minutes distance so it...\n      </blockquote>\n    </div>\n  </md-card-content>\n  <md-card-actions>\n    <button md-button>SHARE</button>\n  </md-card-actions>\n</md-card>\n"

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

module.exports = "<div class=\"log-in-input-wrapper\"\n     [ngClass]=\"logInInputState\"\n     [@logInInputState]=\"logInInputState\"\n     (click)=\"setLogInInputState('active')\">\n  <label for=\"login-input\" class=\"wording-label\">\n    Have you booked already? Please click here to log in!\n  </label>\n  <div #formBox class=\"form-box\">\n    <form autocomplete=\"off\">\n      <input\n        id=\"login-input\"\n        placeholder=\"Type your booking number\"\n        (blur)=\"setLogInInputState('inactive')\"\n        autofocus>\n      <button>Log In</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

module.exports = "<nj-listing *ngFor=\"let listing of listings; let i = index\" [listing]=\"listing.doc\" [index]=\"i\"></nj-listing>\n"

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

module.exports = "<md-list class=\"side-nav-list\">\n  <md-list-item class=\"side-nav-list-item\"> Houses</md-list-item>\n  <md-list-item class=\"side-nav-list-item\"> Check-in</md-list-item>\n  <md-list-item class=\"side-nav-list-item\"> Check-out</md-list-item>\n</md-list>\n"

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(220);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(115)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/lib/loader.js!./styles.scss", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/lib/loader.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(221);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(115)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js!./headings.css", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js!./headings.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(213);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(214);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(215);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(216);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(217);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(218);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(219);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(129);

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(446);

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(517);

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = vendor_lib;

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleApiService; });




var GoogleApiService = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __extends */](GoogleApiService, _super);
    function GoogleApiService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.API_URL = 'https://apis.google.com/js/api.js';
        return _this;
    }
    GoogleApiService.prototype.getClient = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __awaiter */](this, void 0, void 0, function () {
            var _this = this;
            var api;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.gapi) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getApi()];
                    case 1:
                        api = _a.sent();
                        console.log('api', api);
                        new Function(api['_body'])();
                        this.gapi = window['gapi'];
                        this.gapi.load('client:auth2', function () {
                            return _this.initClient();
                        });
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.gapi];
                }
            });
        });
    };
    GoogleApiService.prototype.getApi = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __generator */](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('getting Google Api...');
                        return [4 /*yield*/, this.http.get(this.PROXY_URL + this.API_URL).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    GoogleApiService.prototype.initClient = function () {
        var _this = this;
        this.gapi.client.init({
            apiKey: 'AIzaSyB3Iy2TK3Yyd9nFTQgM6n375LMqB8GQKk0',
            clientId: '873328552635-kig6sktb4ha9lglu7ajo7ek404834e0p.apps.googleusercontent.com',
            scope: 'profile',
            discoveryDocs: ['https://people.googleapis.com/$discovery/rest?version=v1']
        }).then(function () {
            // Listen for sign-in state changes.
            _this.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
            // Handle the initial sign-in state.
            updateSigninStatus(_this.gapi.auth2.getAuthInstance().isSignedIn.get());
            function updateSigninStatus(isSignedIn) {
                if (isSignedIn) {
                    console.log('signed in!');
                }
                else {
                    console.log('authorization failed!');
                }
            }
        });
    };
    return GoogleApiService;
}(__WEBPACK_IMPORTED_MODULE_3__api__["a" /* Api */]));
GoogleApiService = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], GoogleApiService);



/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(749);

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(760);

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(803);

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(809);

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(810);

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(849);

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_environment__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app__ = __webpack_require__(128);
/* harmony export (immutable) */ __webpack_exports__["main"] = main;
/*
 * Angular bootstraping
 */



/*
 * App Module
 * our top level module that holds all of our components
 */

/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["platformBrowserDynamic"])()
        .bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app__["a" /* AppModule */]).then(function(MODULE_REF) {
  if (false) {
    module["hot"]["accept"]();
    
    if (MODULE_REF.instance["hmrOnInit"]) {
      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
      module["hot"]["apply"](function(status) {
        MODULE_REF.instance["hmrOnStatus"](status);
      });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
      module["hot"]["check"](function(err, outdatedModules) {
        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
      module["hot"]["decline"](function(dependencies) {
        MODULE_REF.instance["hmrOnDecline"](dependencies);
      });
    }
    module["hot"]["dispose"](function(store) {
      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
      MODULE_REF.destroy();
      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
    });
  }
  return MODULE_REF;
})
        .then(__WEBPACK_IMPORTED_MODULE_1__app_environment__["a" /* decorateModuleRef */])
        .catch(function (err) { return console.error(err); });
}
// needed for hmr
// in prod this is replace for document ready
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__["bootloader"])(main);


/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__google_api_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_http_src_headers__ = __webpack_require__(249);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AirbnbApiService; });









var AirbnbApiService = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __extends */](AirbnbApiService, _super);
    function AirbnbApiService(http, googleApiService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.googleApiService = googleApiService;
        _this.baseUrl = 'https://api.airbnb.com';
        return _this;
    }
    AirbnbApiService.prototype.getListing = function () {
        console.log('get listing...');
        return this.http
            .get(this.PROXY_URL +
            this.baseUrl +
            '/v2/listings?locale=en-US&_offset=0&user_id=45188796&has_availability=false' +
            '&currency=USD&_limit=10&_format=v1_legacy_long' +
            '&client_id=3092nxybyb0otqw18e8nh5nty')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    AirbnbApiService.prototype.logInByGoogle = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __awaiter */](this, void 0, void 0, function () {
            var _a, access_token;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __generator */](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getGapi()];
                    case 1:
                        _a.gapi = _b.sent();
                        access_token = this.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token;
                        return [2 /*return*/, this.http
                                .post(this.baseUrl +
                                '/v1/authorize', {
                                locale: 'en-US',
                                client_id: 'd306zoyjsyarp7ifhu67rjxn52tv0t20',
                                prevent_account_creation: true,
                                assertion_type: 'https://www.googleapis.com/oauth2/v1/userinfo',
                                assertion: access_token
                            }, {
                                method: 'POST',
                                headers: new __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_http_src_headers__["Headers"]({
                                    'content-type': 'application/x-www-form-urlencoded'
                                })
                            })];
                }
            });
        });
    };
    AirbnbApiService.prototype.getGapi = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __awaiter */](this, void 0, void 0, function () {
            var _a;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __generator */](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.gapi) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.googleApiService.getClient()];
                    case 1:
                        _a.gapi = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/, this.gapi];
                }
            });
        });
    };
    return AirbnbApiService;
}(__WEBPACK_IMPORTED_MODULE_6__api__["a" /* Api */]));
AirbnbApiService = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_7__google_api_service__["a" /* GoogleApiService */]])
], AirbnbApiService);



/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pouchdb__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pouchdb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pouchdb__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepoService; });



var RepoService = (function () {
    function RepoService(db) {
        // To use PouchDB Chrome plugin
        window['PouchDB'] = __WEBPACK_IMPORTED_MODULE_2_pouchdb__;
        this._db = this.createDb(db);
    }
    RepoService.prototype.list = function () {
        return this._db
            .allDocs({
            include_docs: true
        })
            .then(function (res) {
            if (!res.total_rows) {
                var e = Error('not_found');
                e.name = 'not_found';
                throw e;
            }
            return res.rows;
        });
    };
    RepoService.prototype.get = function (id) {
        return this._db.get(id);
    };
    RepoService.prototype.save = function (data) {
        if (this.isIdIncluded(data)) {
            return this._db.put(data);
        }
        else {
            return this._db.post(data);
        }
    };
    RepoService.prototype.saveAll = function (data) {
        return this._db.bulkDocs(data);
    };
    RepoService.prototype.createDb = function (db) {
        return new __WEBPACK_IMPORTED_MODULE_2_pouchdb__(db);
    };
    RepoService.prototype.isIdIncluded = function (data) {
        return !!data['_id'];
    };
    return RepoService;
}());
RepoService = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [String])
], RepoService);



/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decorateModuleRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ENV_PROVIDERS; });
// Angular 2


// Environment Providers
var PROVIDERS = [];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function (value) { return value; };
if (false) {
    enableProdMode();
    // Production
    _decorateModuleRef = function (modRef) {
        disableDebugTools();
        return modRef;
    };
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ApplicationRef"]);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["enableDebugTools"])(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    // Development
    PROVIDERS = PROVIDERS.slice();
}
var decorateModuleRef = _decorateModuleRef;
var ENV_PROVIDERS = PROVIDERS.slice();


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(444);

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(111);

/***/ })

},[395]);
//# sourceMappingURL=main.bundle.js.map