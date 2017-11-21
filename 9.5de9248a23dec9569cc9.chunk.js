webpackJsonp([9],{

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@angular/router/esm5/router.js
var router = __webpack_require__(77);

// CONCATENATED MODULE: ./src/app/contacts/contacts.component.ts


var contacts_component_ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
    }
    ContactsComponent = tslib_es6["c" /* __decorate */]([
        Object(core["l" /* Component */])({
            selector: 'nj-contacts',
            styles: [__webpack_require__(401)],
            template: __webpack_require__(403)
        })
    ], ContactsComponent);
    return ContactsComponent;
}());


// EXTERNAL MODULE: ./src/app/ng-material/ng-material.module.ts
var ng_material_module = __webpack_require__(80);

// EXTERNAL MODULE: ./node_modules/@angular/platform-browser/esm5/platform-browser.js
var platform_browser = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@angular/material/esm5/material.es5.js + 45 modules
var material_es5 = __webpack_require__(172);

// EXTERNAL MODULE: ./src/app/service/translationModule.provider.ts
var translationModule_provider = __webpack_require__(78);

// CONCATENATED MODULE: ./src/app/contacts/contacts.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsModule", function() { return contacts_module_ContactsModule; });








var contacts_module_ContactsModule = /** @class */ (function () {
    function ContactsModule(iconRegistry, sanitizer) {
        console.log('registering fonts');
        iconRegistry
            .addSvgIcon('whats_app', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/whatsapp-icon.svg'))
            .addSvgIcon('line', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/line-messenger.svg'))
            .addSvgIcon('kakao', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/kakaotalk.svg'))
            .addSvgIcon('wechat', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/wechat.svg'));
    }
    ContactsModule = tslib_es6["c" /* __decorate */]([
        Object(core["A" /* NgModule */])({
            declarations: [
                contacts_component_ContactsComponent
            ],
            imports: [
                ng_material_module["a" /* NgCustomMaterialModule */],
                translationModule_provider["a" /* TranslationModule */],
                router["f" /* RouterModule */].forChild([{
                        path: '',
                        component: contacts_component_ContactsComponent
                    }])
            ]
        }),
        tslib_es6["f" /* __metadata */]("design:paramtypes", [material_es5["k" /* MatIconRegistry */], platform_browser["b" /* DomSanitizer */]])
    ], ContactsModule);
    return ContactsModule;
}());



/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(402);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(79)(undefined);
// imports


// module
exports.push([module.i, "/* fonts */\n", ""]);

// exports


/***/ }),

/***/ 403:
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"nj-card\">\n  <mat-card-header class=\"nj-card-header\">\n    <mat-card-title class=\"nj-card-title\">\n      <span class=\"nj-card-title-text\">{{'CONTACTS.CONTACTS' | translate}}</span>\n    </mat-card-title>\n    <mat-card-subtitle>{{'CONTACTS.ADD_CONTACTS_DESCRIPTION' | translate}}</mat-card-subtitle>\n  </mat-card-header>\n  <mat-divider></mat-divider>\n  <mat-card-content class=\"nj-card-content\">\n    <mat-list dense class=\"nj-card-list check-in-card-list\">\n      <h3 matSubheader class=\"nj-card-list-sub-header\">{{'CONTACTS.PHONE_WHATS_APP' | translate}}</h3>\n      <mat-list-item class=\"nj-card-list-item\">\n        <mat-icon mat-list-icon svgIcon=\"whats_app\" class=\"nj-card-list-item-icon\"></mat-icon>\n        <p matLine class=\"nj-card-list-item-text\">0971404828</p>\n      </mat-list-item>\n    </mat-list>\n    <mat-list dense class=\"nj-card-list check-in-card-list\">\n      <h3 matSubheader class=\"nj-card-list-sub-header\">{{'CONTACTS.LINE_KAKAO_WECHAT' | translate}}</h3>\n      <mat-list-item class=\"nj-card-list-item\">\n        <mat-icon mat-list-icon svgIcon=\"line\" class=\"nj-card-list-item-icon\"></mat-icon>\n        <mat-icon mat-list-icon svgIcon=\"kakao\" class=\"nj-card-list-item-icon\"></mat-icon>\n        <mat-icon mat-list-icon svgIcon=\"wechat\" class=\"nj-card-list-item-icon\"></mat-icon>\n        <p matLine class=\"nj-card-list-item-text\">KKTKKT2</p>\n      </mat-list-item>\n    </mat-list>\n  </mat-card-content>\n</mat-card>\n"

/***/ })

});