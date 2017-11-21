webpackJsonp([5],{

/***/ "2rkW":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("mpGZ");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "5Qe/":
/***/ (function(module, exports) {

module.exports = "<nav mat-tab-nav-bar>\n  <a mat-tab-link\n     [routerLink]=\" ['./pickup'] \"\n     routerLinkActive #rla1=\"routerLinkActive\"\n     [active]=\"rla1.isActive\">\n    {{ 'SERVICES.TRANSPORTATION' | translate}}\n  </a>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "6AbW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("TToO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("WT6e");


var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* Component */])({
            selector: 'nj-services',
            template: __webpack_require__("5Qe/"),
            styles: [__webpack_require__("2rkW")],
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "OfQ8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("TToO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("WT6e");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("bfOx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_component__ = __webpack_require__("6AbW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_routes__ = __webpack_require__("dl1s");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_material_ng_material_module__ = __webpack_require__("R5jf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_translationModule_provider__ = __webpack_require__("HK5X");







var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__services_component__["a" /* ServicesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__ng_material_ng_material_module__["a" /* NgCustomMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_6__service_translationModule_provider__["a" /* TranslationModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__services_routes__["a" /* routes */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__services_component__["a" /* ServicesComponent */]
            ]
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ }),

/***/ "dl1s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_component__ = __webpack_require__("6AbW");

var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__services_component__["a" /* ServicesComponent */],
        children: [
            { path: '', redirectTo: 'pickup', pathMatch: 'full' },
            {
                path: 'pickup',
                loadChildren: './services-pickup/services-pickup.module#ServicesPickupModule'
            }
        ]
    }
];


/***/ }),

/***/ "mpGZ":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(undefined);
// imports


// module
exports.push([module.i, "/* fonts */\n", ""]);

// exports


/***/ })

});