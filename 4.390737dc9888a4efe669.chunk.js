webpackJsonp([4],{

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@angular/router/esm5/router.js
var router = __webpack_require__(77);

// CONCATENATED MODULE: ./src/app/services/services.component.ts


var services_component_ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent = tslib_es6["c" /* __decorate */]([
        Object(core["l" /* Component */])({
            selector: 'nj-services',
            template: __webpack_require__(404),
            styles: [__webpack_require__(405)],
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
var ng_material_module = __webpack_require__(80);

// EXTERNAL MODULE: ./src/app/service/translationModule.provider.ts
var translationModule_provider = __webpack_require__(78);

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

/***/ 404:
/***/ (function(module, exports) {

module.exports = "<nav mat-tab-nav-bar>\n  <a mat-tab-link\n     [routerLink]=\" ['./pickup'] \"\n     routerLinkActive #rla1=\"routerLinkActive\"\n     [active]=\"rla1.isActive\">\n    {{ 'SERVICES.TRANSPORTATION' | translate}}\n  </a>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(406);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(79)(undefined);
// imports


// module
exports.push([module.i, "/* fonts */\n", ""]);

// exports


/***/ })

});