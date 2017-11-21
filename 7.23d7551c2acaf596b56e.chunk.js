webpackJsonp([7],{

/***/ "+XFR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingInfoLocationModule", function() { return ListingInfoLocationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("TToO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("WT6e");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("bfOx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_material_ng_material_module__ = __webpack_require__("R5jf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listing_info_const__ = __webpack_require__("WkOb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__listing_info_location_component__ = __webpack_require__("ZXDM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_translationModule_provider__ = __webpack_require__("HK5X");







var ListingInfoLocationModule = /** @class */ (function () {
    function ListingInfoLocationModule() {
        this.LISTING_INFOS = __WEBPACK_IMPORTED_MODULE_4__listing_info_const__["a" /* ListingInfoDict */];
    }
    ListingInfoLocationModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__listing_info_location_component__["a" /* ListingInfoLocationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__ng_material_ng_material_module__["a" /* NgCustomMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_6__service_translationModule_provider__["a" /* TranslationModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_5__listing_info_location_component__["a" /* ListingInfoLocationComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__listing_info_location_component__["a" /* ListingInfoLocationComponent */]
            ]
        })
    ], ListingInfoLocationModule);
    return ListingInfoLocationModule;
}());



/***/ }),

/***/ "BDJI":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(undefined);
// imports


// module
exports.push([module.i, "/* fonts */\n", ""]);

// exports


/***/ }),

/***/ "ZXDM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingInfoLocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("TToO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("WT6e");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("OE0E");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("bfOx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_translationModule_provider__ = __webpack_require__("HK5X");





var ListingInfoLocationComponent = /** @class */ (function () {
    function ListingInfoLocationComponent(route, domSanitizer, translate) {
        this.route = route;
        this.domSanitizer = domSanitizer;
        this.translate = translate;
    }
    ListingInfoLocationComponent.prototype.ngOnInit = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var _this = this;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */](this, function (_a) {
                this.listingInfo = this.route.snapshot.data['listingInfo'];
                this.getHowToGoVideoUrl = function () { return _this.domSanitizer.bypassSecurityTrustResourceUrl(_this.listingInfo.location.voiceGuide.howToGo[_this.translate.getCurrentLang()].toString()); };
                this.gmHouseLocation = this.domSanitizer.bypassSecurityTrustResourceUrl(this.listingInfo.location.gMap.toString());
                return [2 /*return*/];
            });
        });
    };
    ListingInfoLocationComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* Component */])({
            selector: 'nj-listing-info-location',
            styles: [__webpack_require__("mnZy")],
            template: __webpack_require__("aZB5")
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_4__service_translationModule_provider__["a" /* TranslationModule */]])
    ], ListingInfoLocationComponent);
    return ListingInfoLocationComponent;
}());



/***/ }),

/***/ "aZB5":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"nj-card youtube-card\">\n  <mat-card-header class=\"nj-card-header\">\n    <mat-card-title class=\"nj-card-title\">\n      <mat-icon class=\"nj-card-title-icon\">location_on</mat-icon>\n      <span class=\"nj-card-title-text\">{{'LISTING_INFO_LOCATION.HOW_TO_GO' | translate}}</span>\n    </mat-card-title>\n    <mat-card-subtitle>\n      <pre>\n      {{'LISTING_INFO_LOCATION.HOW_TO_GO_DESCRIPTION' | translate}}\n      </pre>\n    </mat-card-subtitle>\n  </mat-card-header>\n  <mat-divider></mat-divider>\n  <div class=\"youtube-box\" mat-card-image>\n    <iframe width=\"100%\" height=\"100%\" [src]=\"this.getHowToGoVideoUrl()\"\n            frameborder=\"0\" allowfullscreen></iframe>\n  </div>\n  <mat-card-content class=\"nj-card-content\">\n    <mat-list dense class=\"nj-card-list\">\n      <h4 matSubheader class=\"nj-card-list-sub-header\">{{'LISTING_INFO.ADDRESS' | translate}}</h4>\n      <mat-list-item class=\"nj-card-list-item\">\n        <h4 matLine class=\"nj-card-list-item-heading\">{{'LISTING_INFO.ENGLISH' | translate}}</h4>\n      </mat-list-item>\n      <div>\n        <p class=\"nj-card-list-item-text\"> {{ this.listingInfo.location.address.en }} </p>\n      </div>\n      <mat-list-item class=\"nj-card-list-item\">\n        <h4 matLine class=\"nj-card-list-item-heading\">{{'LISTING_INFO.THAI' | translate}}</h4>\n      </mat-list-item>\n      <div>\n        <p class=\"nj-card-list-item-text\"> {{ this.listingInfo.location.address.th }} </p>\n      </div>\n    </mat-list>\n  </mat-card-content>\n</mat-card>\n<mat-card class=\"nj-card gmap-card\">\n  <mat-card-header class=\"nj-card-header\">\n    <mat-card-title class=\"nj-card-title\">\n      <mat-icon class=\"nj-card-title-icon\">map</mat-icon>\n      <span class=\"nj-card-title-text\">{{'LISTING_INFO_LOCATION.MAP' | translate}}</span>\n    </mat-card-title>\n  </mat-card-header>\n  <mat-divider></mat-divider>\n  <mat-card-content>\n    <iframe width=\"100%\" [src]=\"this.gmHouseLocation\"\n            frameborder=\"0\" allowfullscreen></iframe>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "mnZy":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("BDJI");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ })

});