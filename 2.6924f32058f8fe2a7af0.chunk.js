webpackJsonp([2],{

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@angular/router/esm5/router.js
var router = __webpack_require__(77);

// EXTERNAL MODULE: ./src/app/listings/listings.module.ts + 7 modules
var listings_module = __webpack_require__(241);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@angular/animations/esm5/animations.js
var animations = __webpack_require__(17);

// EXTERNAL MODULE: ./src/app/service/airbnb.api.service.ts + 328 modules
var airbnb_api_service = __webpack_require__(173);

// EXTERNAL MODULE: ./src/app/service/google.api.service.ts
var google_api_service = __webpack_require__(118);

// CONCATENATED MODULE: ./src/app/log-in/log-in.component.ts





var log_in_component_LogInComponent = /** @class */ (function () {
    function LogInComponent(googleApiService, airbnbApiService) {
        this.googleApiService = googleApiService;
        this.airbnbApiService = airbnbApiService;
        this.logInInputState = 'inactive';
        this.init();
    }
    LogInComponent.prototype.setLogInInputState = function (state) {
        return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
            return tslib_es6["e" /* __generator */](this, function (_a) {
                this.logInInputState = state;
                return [2 /*return*/];
            });
        });
    };
    LogInComponent.prototype.login = function () {
        var auth = this.gapi.auth2.getAuthInstance().signIn();
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
    };
    LogInComponent.prototype.init = function () {
        return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
            var _a;
            return tslib_es6["e" /* __generator */](this, function (_b) {
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
    LogInComponent = tslib_es6["c" /* __decorate */]([
        Object(core["l" /* Component */])({
            selector: 'nj-log-in',
            providers: [],
            animations: [
                Object(animations["j" /* trigger */])('logInInputState', [
                    Object(animations["g" /* state */])('inactive', Object(animations["h" /* style */])({
                        height: '1rem'
                    })),
                    Object(animations["g" /* state */])('active', Object(animations["h" /* style */])({
                        height: '*'
                    })),
                    Object(animations["i" /* transition */])('inactive => active', Object(animations["e" /* animate */])('100ms ease-in')),
                    Object(animations["i" /* transition */])('active => inactive', Object(animations["e" /* animate */])('100ms ease-out'))
                ])
            ],
            styles: [__webpack_require__(395)],
            template: __webpack_require__(397)
        }),
        tslib_es6["f" /* __metadata */]("design:paramtypes", [google_api_service["a" /* GoogleApiService */],
            airbnb_api_service["a" /* AirbnbApiService */]])
    ], LogInComponent);
    return LogInComponent;
}());


// CONCATENATED MODULE: ./src/app/log-in/log-in.module.ts




var log_in_module_LogInModule = /** @class */ (function () {
    function LogInModule() {
    }
    LogInModule = tslib_es6["c" /* __decorate */]([
        Object(core["A" /* NgModule */])({
            declarations: [
                log_in_component_LogInComponent
            ],
            imports: [
                common["b" /* CommonModule */]
            ],
            exports: [
                log_in_component_LogInComponent
            ]
        })
    ], LogInModule);
    return LogInModule;
}());


// EXTERNAL MODULE: ./src/app/ng-material/ng-material.module.ts
var ng_material_module = __webpack_require__(80);

// CONCATENATED MODULE: ./src/app/home/home.component.ts



var home_component_HomeComponent = /** @class */ (function () {
    function HomeComponent(googleApiService) {
        this.googleApiService = googleApiService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
            return tslib_es6["e" /* __generator */](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    HomeComponent = tslib_es6["c" /* __decorate */]([
        Object(core["l" /* Component */])({
            selector: 'home',
            styles: [__webpack_require__(398)],
            template: __webpack_require__(400)
        }),
        tslib_es6["f" /* __metadata */]("design:paramtypes", [google_api_service["a" /* GoogleApiService */]])
    ], HomeComponent);
    return HomeComponent;
}());


// CONCATENATED MODULE: ./src/app/home/home.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return home_module_HomeModule; });







var home_module_HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib_es6["c" /* __decorate */]([
        Object(core["A" /* NgModule */])({
            declarations: [
                home_component_HomeComponent
            ],
            imports: [
                ng_material_module["a" /* NgCustomMaterialModule */],
                listings_module["ListingsModule"],
                log_in_module_LogInModule,
                router["f" /* RouterModule */].forChild([{
                        path: '',
                        component: home_component_HomeComponent
                    }])
            ],
            exports: [
                home_component_HomeComponent
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(396);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(79)(undefined);
// imports


// module
exports.push([module.i, "/* fonts */\n:host {\n  display: flex;\n  justify-content: center; }\n  :host .log-in-input-wrapper .wording-label {\n    display: inline-block;\n    margin: 1rem 0; }\n  :host .log-in-input-wrapper.active .wording-label {\n    display: none; }\n  :host .log-in-input-wrapper.inactive .form-box {\n    display: none; }\n", ""]);

// exports


/***/ }),

/***/ 397:
/***/ (function(module, exports) {

module.exports = "<div class=\"log-in-input-wrapper\"\n     [ngClass]=\"logInInputState\"\n     [@logInInputState]=\"logInInputState\"\n     (click)=\"setLogInInputState('active')\">\n  <label for=\"login-input\" class=\"wording-label\">\n    Have you booked already? Please click here to log in!\n  </label>\n  <div #formBox class=\"form-box\">\n    <form autocomplete=\"off\">\n      <input\n        id=\"login-input\"\n        placeholder=\"Type your booking number\"\n        autofocus>\n      <button (click)=\"login()\">Log In</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(399);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(79)(undefined);
// imports


// module
exports.push([module.i, "/* fonts */\n/*styles for home content only*/\n", ""]);

// exports


/***/ }),

/***/ 400:
/***/ (function(module, exports) {

module.exports = "<nj-log-in></nj-log-in>\n<nj-listings></nj-listings>\n"

/***/ })

});