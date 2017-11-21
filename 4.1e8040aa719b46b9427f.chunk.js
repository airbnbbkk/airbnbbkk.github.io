webpackJsonp([4],{

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

/***/ "OfQ8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("TToO");

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__("WT6e");

// EXTERNAL MODULE: ./node_modules/@angular/router/esm5/router.js
var router = __webpack_require__("bfOx");

// CONCATENATED MODULE: ./src/app/services/services.component.ts


var services_component_ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent = tslib_es6["c" /* __decorate */]([
        Object(core["l" /* Component */])({
            selector: 'nj-services',
            template: __webpack_require__("5Qe/"),
            styles: [__webpack_require__("2rkW")],
        }),
        tslib_es6["f" /* __metadata */]("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());


// CONCATENATED MODULE: ./src/app/services/services.routes.ts

var routes = [
    {
        path: '',
        component: services_component_ServicesComponent,
        children: [
            { path: '', redirectTo: 'pickup', pathMatch: 'full' },
            {
                path: 'pickup',
                loadChildren: './services-pickup/services-pickup.module#ServicesPickupModule'
            }
        ]
    }
];

// EXTERNAL MODULE: ./src/app/ng-material/ng-material.module.ts
var ng_material_module = __webpack_require__("R5jf");

// EXTERNAL MODULE: ./src/app/service/translationModule.provider.ts
var translationModule_provider = __webpack_require__("HK5X");

// CONCATENATED MODULE: ./src/app/services/services.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return services_module_ServicesModule; });







var services_module_ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = tslib_es6["c" /* __decorate */]([
        Object(core["A" /* NgModule */])({
            declarations: [
                services_component_ServicesComponent
            ],
            imports: [
                ng_material_module["a" /* NgCustomMaterialModule */],
                translationModule_provider["a" /* TranslationModule */],
                router["f" /* RouterModule */].forChild(routes)
            ],
            exports: [
                services_component_ServicesComponent
            ]
        })
    ], ServicesModule);
    return ServicesModule;
}());



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