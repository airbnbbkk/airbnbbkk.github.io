webpackJsonp([2],{

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listings_listings_module__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__log_in_log_in_module__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_material_ng_material_module__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_component__ = __webpack_require__(831);







var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__ng_material_ng_material_module__["a" /* NgCustomMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_3__listings_listings_module__["ListingsModule"],
                __WEBPACK_IMPORTED_MODULE_4__log_in_log_in_module__["a" /* LogInModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* RouterModule */].forChild([{
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_6__home_component__["a" /* HomeComponent */]
                    }])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__home_component__["a" /* HomeComponent */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogInModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__log_in_component__ = __webpack_require__(827);




var LogInModule = /** @class */ (function () {
    function LogInModule() {
    }
    LogInModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__log_in_component__["a" /* LogInComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__log_in_component__["a" /* LogInComponent */]
            ]
        })
    ], LogInModule);
    return LogInModule;
}());



/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_airbnb_api_service__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_google_api_service__ = __webpack_require__(147);





var LogInComponent = /** @class */ (function () {
    function LogInComponent(googleApiService, airbnbApiService) {
        this.googleApiService = googleApiService;
        this.airbnbApiService = airbnbApiService;
        this.logInInputState = 'inactive';
        this.init();
    }
    LogInComponent.prototype.setLogInInputState = function (state) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */](this, function (_a) {
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
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var _a;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */](this, function (_b) {
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
    LogInComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["l" /* Component */])({
            selector: 'nj-log-in',
            providers: [],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('logInInputState', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        height: '1rem'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        height: '*'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
                ])
            ],
            styles: [__webpack_require__(828)],
            template: __webpack_require__(830)
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__service_google_api_service__["a" /* GoogleApiService */],
            __WEBPACK_IMPORTED_MODULE_3__service_airbnb_api_service__["a" /* AirbnbApiService */]])
    ], LogInComponent);
    return LogInComponent;
}());



/***/ }),

/***/ 828:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(829);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 829:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(97)(undefined);
// imports


// module
exports.push([module.i, "/* fonts */\n:host {\n  display: flex;\n  justify-content: center; }\n  :host .log-in-input-wrapper .wording-label {\n    display: inline-block;\n    margin: 1rem 0; }\n  :host .log-in-input-wrapper.active .wording-label {\n    display: none; }\n  :host .log-in-input-wrapper.inactive .form-box {\n    display: none; }\n", ""]);

// exports


/***/ }),

/***/ 830:
/***/ (function(module, exports) {

module.exports = "<div class=\"log-in-input-wrapper\"\n     [ngClass]=\"logInInputState\"\n     [@logInInputState]=\"logInInputState\"\n     (click)=\"setLogInInputState('active')\">\n  <label for=\"login-input\" class=\"wording-label\">\n    Have you booked already? Please click here to log in!\n  </label>\n  <div #formBox class=\"form-box\">\n    <form autocomplete=\"off\">\n      <input\n        id=\"login-input\"\n        placeholder=\"Type your booking number\"\n        autofocus>\n      <button (click)=\"login()\">Log In</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_google_api_service__ = __webpack_require__(147);



var HomeComponent = /** @class */ (function () {
    function HomeComponent(googleApiService) {
        this.googleApiService = googleApiService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    HomeComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* Component */])({
            selector: 'home',
            styles: [__webpack_require__(832)],
            template: __webpack_require__(834)
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_google_api_service__["a" /* GoogleApiService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ 832:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(833);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 833:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(97)(undefined);
// imports


// module
exports.push([module.i, "/* fonts */\n/*styles for home content only*/\n", ""]);

// exports


/***/ }),

/***/ 834:
/***/ (function(module, exports) {

module.exports = "<nj-log-in></nj-log-in>\n<nj-listings></nj-listings>\n"

/***/ })

});