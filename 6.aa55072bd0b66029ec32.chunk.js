webpackJsonp([6],{

/***/ "+XFR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("TToO");

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__("WT6e");

// EXTERNAL MODULE: ./node_modules/@angular/router/esm5/router.js
var router = __webpack_require__("bfOx");

// EXTERNAL MODULE: ./src/app/ng-material/ng-material.module.ts
var ng_material_module = __webpack_require__("R5jf");

// EXTERNAL MODULE: ./src/app/listing-info/listing-info.const.ts
var listing_info_const = __webpack_require__("WkOb");

// EXTERNAL MODULE: ./node_modules/@angular/platform-browser/esm5/platform-browser.js
var platform_browser = __webpack_require__("OE0E");

// EXTERNAL MODULE: ./src/app/service/translationModule.provider.ts
var translationModule_provider = __webpack_require__("HK5X");

// CONCATENATED MODULE: ./src/app/listing-info/listing-info-location/listing-info-location.component.ts





var listing_info_location_component_ListingInfoLocationComponent = /** @class */ (function () {
    function ListingInfoLocationComponent(route, domSanitizer, translate) {
        this.route = route;
        this.domSanitizer = domSanitizer;
        this.translate = translate;
    }
    ListingInfoLocationComponent.prototype.ngOnInit = function () {
        return tslib_es6["b" /* __awaiter */](this, void 0, void 0, function () {
            var _this = this;
            return tslib_es6["e" /* __generator */](this, function (_a) {
                this.listingInfo = this.route.snapshot.data['listingInfo'];
                this.getHowToGoVideoUrl = function () { return _this.domSanitizer.bypassSecurityTrustResourceUrl(_this.listingInfo.location.voiceGuide.howToGo[_this.translate.getCurrentLang()].toString()); };
                this.gmHouseLocation = this.domSanitizer.bypassSecurityTrustResourceUrl(this.listingInfo.location.gMap.toString());
                return [2 /*return*/];
            });
        });
    };
    ListingInfoLocationComponent = tslib_es6["c" /* __decorate */]([
        Object(core["l" /* Component */])({
            selector: 'nj-listing-info-location',
            styles: [__webpack_require__("mnZy")],
            template: __webpack_require__("aZB5")
        }),
        tslib_es6["f" /* __metadata */]("design:paramtypes", [router["a" /* ActivatedRoute */],
            platform_browser["b" /* DomSanitizer */],
            translationModule_provider["a" /* TranslationModule */]])
    ], ListingInfoLocationComponent);
    return ListingInfoLocationComponent;
}());


// CONCATENATED MODULE: ./src/app/listing-info/listing-info-location/listing-info-location.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingInfoLocationModule", function() { return listing_info_location_module_ListingInfoLocationModule; });







var listing_info_location_module_ListingInfoLocationModule = /** @class */ (function () {
    function ListingInfoLocationModule() {
        this.LISTING_INFOS = listing_info_const["a" /* ListingInfoDict */];
    }
    ListingInfoLocationModule = tslib_es6["c" /* __decorate */]([
        Object(core["A" /* NgModule */])({
            declarations: [
                listing_info_location_component_ListingInfoLocationComponent
            ],
            imports: [
                ng_material_module["a" /* NgCustomMaterialModule */],
                translationModule_provider["a" /* TranslationModule */],
                router["f" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: listing_info_location_component_ListingInfoLocationComponent
                    }
                ])
            ],
            exports: [
                listing_info_location_component_ListingInfoLocationComponent
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