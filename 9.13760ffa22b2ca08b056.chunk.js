webpackJsonp([9],{

/***/ "5/HB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsModule", function() { return ContactsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("TToO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("WT6e");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("bfOx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contacts_component__ = __webpack_require__("voYE");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_material_ng_material_module__ = __webpack_require__("R5jf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("OE0E");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("DUFE");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_translationModule_provider__ = __webpack_require__("HK5X");








var ContactsModule = /** @class */ (function () {
    function ContactsModule(iconRegistry, sanitizer) {
        console.log('registering fonts');
        iconRegistry
            .addSvgIcon('whats_app', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/whatsapp-icon.svg'))
            .addSvgIcon('line', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/line-messenger.svg'))
            .addSvgIcon('kakao', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/kakaotalk.svg'))
            .addSvgIcon('wechat', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/wechat.svg'));
    }
    ContactsModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__contacts_component__["a" /* ContactsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__ng_material_ng_material_module__["a" /* NgCustomMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_7__service_translationModule_provider__["a" /* TranslationModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* RouterModule */].forChild([{
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_3__contacts_component__["a" /* ContactsComponent */]
                    }])
            ]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MatIconRegistry */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* DomSanitizer */]])
    ], ContactsModule);
    return ContactsModule;
}());



/***/ }),

/***/ "5VIl":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"nj-card\">\n  <mat-card-header class=\"nj-card-header\">\n    <mat-card-title class=\"nj-card-title\">\n      <span class=\"nj-card-title-text\">{{'CONTACTS.CONTACTS' | translate}}</span>\n    </mat-card-title>\n    <mat-card-subtitle>{{'CONTACTS.ADD_CONTACTS_DESCRIPTION' | translate}}</mat-card-subtitle>\n  </mat-card-header>\n  <mat-divider></mat-divider>\n  <mat-card-content class=\"nj-card-content\">\n    <mat-list dense class=\"nj-card-list check-in-card-list\">\n      <h3 matSubheader class=\"nj-card-list-sub-header\">{{'CONTACTS.PHONE_WHATS_APP' | translate}}</h3>\n      <mat-list-item class=\"nj-card-list-item\">\n        <mat-icon mat-list-icon svgIcon=\"whats_app\" class=\"nj-card-list-item-icon\"></mat-icon>\n        <p matLine class=\"nj-card-list-item-text\">0971404828</p>\n      </mat-list-item>\n    </mat-list>\n    <mat-list dense class=\"nj-card-list check-in-card-list\">\n      <h3 matSubheader class=\"nj-card-list-sub-header\">{{'CONTACTS.LINE_KAKAO_WECHAT' | translate}}</h3>\n      <mat-list-item class=\"nj-card-list-item\">\n        <mat-icon mat-list-icon svgIcon=\"line\" class=\"nj-card-list-item-icon\"></mat-icon>\n        <mat-icon mat-list-icon svgIcon=\"kakao\" class=\"nj-card-list-item-icon\"></mat-icon>\n        <mat-icon mat-list-icon svgIcon=\"wechat\" class=\"nj-card-list-item-icon\"></mat-icon>\n        <p matLine class=\"nj-card-list-item-text\">KKTKKT2</p>\n      </mat-list-item>\n    </mat-list>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "E+XL":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(undefined);
// imports


// module
exports.push([module.i, "/* fonts */\n", ""]);

// exports


/***/ }),

/***/ "bhLM":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("E+XL");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "voYE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("TToO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("WT6e");


var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
    }
    ContactsComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* Component */])({
            selector: 'nj-contacts',
            styles: [__webpack_require__("bhLM")],
            template: __webpack_require__("5VIl")
        })
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ })

});