webpackJsonp([1],{

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPickupModule", function() { return ServicesPickupModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_pickup_component__ = __webpack_require__(843);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_material_ng_material_module__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_translationModule_provider__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dialog_booking_services_pickup_dialog_booking__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dialog_confirm_services_pickup_dialog_confirm__ = __webpack_require__(793);










var ServicesPickupModule = /** @class */ (function () {
    function ServicesPickupModule() {
    }
    ServicesPickupModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__services_pickup_component__["a" /* ServicesPickupComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dialog_booking_services_pickup_dialog_booking__["a" /* ServicesPickupDialogBookingComponent */],
                __WEBPACK_IMPORTED_MODULE_9__dialog_confirm_services_pickup_dialog_confirm__["a" /* ServicesPickupDialogConfirmComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__ng_material_ng_material_module__["a" /* NgCustomMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_7__service_translationModule_provider__["a" /* TranslationModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_5__services_pickup_component__["a" /* ServicesPickupComponent */]
                    }
                ]),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* ReactiveFormsModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__dialog_booking_services_pickup_dialog_booking__["a" /* ServicesPickupDialogBookingComponent */],
                __WEBPACK_IMPORTED_MODULE_9__dialog_confirm_services_pickup_dialog_confirm__["a" /* ServicesPickupDialogConfirmComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__services_pickup_component__["a" /* ServicesPickupComponent */]
            ]
        })
    ], ServicesPickupModule);
    return ServicesPickupModule;
}());



/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PICKUP_SPOTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ServicesPickupInfo; });
var PICKUP_SPOTS;
(function (PICKUP_SPOTS) {
    PICKUP_SPOTS[PICKUP_SPOTS["SUVARNABHUMI"] = 0] = "SUVARNABHUMI";
    PICKUP_SPOTS[PICKUP_SPOTS["DONMUEANG"] = 1] = "DONMUEANG";
    PICKUP_SPOTS[PICKUP_SPOTS["HOUSE"] = 2] = "HOUSE";
})(PICKUP_SPOTS || (PICKUP_SPOTS = {}));
var ServicesPickupInfo = {
    vehicles: [
        /*{
          name: {
            en: 'Honda Accord',
            ko: '혼다 어코드',
            cn: '本田雅阁'
          },
          capacity: '2 - 3',
          price: 1000,
          img: 'honda_accord.jpg'
        },*/
        {
            name: {
                en: 'Toyota Fortuner',
                ko: '도요타 포츄너',
                cn: '丰田Fortuner'
            },
            capacity: '1 - 4',
            price: 1200,
            img: 'toyota_fortuner.jpg'
        },
        {
            name: {
                en: 'Mini Van',
                ko: '미니벤',
                cn: '迷你范'
            },
            capacity: '4 - 8',
            price: 2000,
            img: 'mini_van.jpg'
        }
    ],
    spots: [
        {
            type: PICKUP_SPOTS.SUVARNABHUMI,
            name: {
                i18n: 'SERVICES.SHUTTLE_SUVARNABHUMI'
            },
            location: 'Between gate number 3 and 4'
        },
        {
            type: PICKUP_SPOTS.DONMUEANG,
            name: {
                i18n: 'SERVICES.SHUTTLE_DONMUEANG'
            },
            location: 'Gate number 3'
        },
        {
            type: PICKUP_SPOTS.HOUSE,
            name: {
                i18n: 'SERVICES.SHUTTLE_HOUSE'
            },
            location: 'At the house lobby'
        }
    ]
};


/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesPickupDialogBookingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_translationModule_provider__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_pickup_const__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_airbnb_api_service__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dialog_confirm_services_pickup_dialog_confirm__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);









var ServicesPickupDialogBookingComponent = /** @class */ (function () {
    function ServicesPickupDialogBookingComponent(data, airbnbApi, formBuilder, dialog, translate) {
        this.data = data;
        this.airbnbApi = airbnbApi;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.translate = translate;
        this.PICKUP_SPOTS = __WEBPACK_IMPORTED_MODULE_5__services_pickup_const__["a" /* PICKUP_SPOTS */];
        this.pickupInfo = Object.assign({}, data.pickupInfo);
        this.selectedVehicle = Object.assign({}, data.selectedVehicle);
        this.confirmCode = data.confirmCode;
        this.form = formBuilder.group({
            vehicle: null,
            bookingNumber: this.confirmCode,
            price: null,
            tripType: 'oneway',
            departure: null,
            destination: {
                value: null,
                disabled: false
            }
        });
        this.airportForm = formBuilder.group({
            time: null,
            date: null,
            name: null,
            flightName: null,
            flightNumber: null
        });
        this.houseForm = formBuilder.group({
            time: null,
            date: null
        });
        this.departures = this.destination = this.pickupInfo.spots.slice();
        this.form.valueChanges.subscribe(function (formData) {
        });
    }
    ServicesPickupDialogBookingComponent.prototype.ngOnInit = function () {
        this.form.get('vehicle').setValue(this.selectedVehicle.name[this.translate.getCurrentLang()]);
        this.form.get('price').setValue(this.getPickupPrice());
    };
    ServicesPickupDialogBookingComponent.prototype.changeSpotOptions = function () {
        var departureForm = this.form.get('departure');
        var destinationForm = this.form.get('destination');
        var tripTypeForm = this.form.get('tripType');
        console.log('change spot options', this.airportForm.enabled, this.houseForm.enabled);
        this.airportForm.enable();
        this.houseForm.enable();
        destinationForm.enable();
        departureForm.enable();
        this.departures = this.destination = this.pickupInfo.spots.slice();
        if (tripTypeForm.value === 'oneway') {
            if (departureForm.value === __WEBPACK_IMPORTED_MODULE_5__services_pickup_const__["a" /* PICKUP_SPOTS */].HOUSE) {
                this.airportForm.disable();
                destinationForm.setValue(null);
                this.destination = this.pickupInfo.spots.filter(function (spot) { return spot.type !== __WEBPACK_IMPORTED_MODULE_5__services_pickup_const__["a" /* PICKUP_SPOTS */].HOUSE; });
            }
            else {
                this.houseForm.disable();
                this.fixDestinationToHouse();
            }
        }
        else {
            this.departures = this.pickupInfo.spots.filter(function (spot) { return spot.type !== __WEBPACK_IMPORTED_MODULE_5__services_pickup_const__["a" /* PICKUP_SPOTS */].HOUSE; });
            if (departureForm.value === __WEBPACK_IMPORTED_MODULE_5__services_pickup_const__["a" /* PICKUP_SPOTS */].HOUSE) {
                departureForm.setValue(null);
            }
            this.fixDestinationToHouse();
        }
    };
    ServicesPickupDialogBookingComponent.prototype.getPickupPrice = function () {
        var tripType = this.form.get('tripType').value;
        var multiplier = tripType === 'oneway' ? 1 : 2;
        return multiplier * this.selectedVehicle.price;
    };
    ServicesPickupDialogBookingComponent.prototype.onSubmit = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var message;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */](this, function (_a) {
                if (this.form.invalid) {
                    return [2 /*return*/];
                }
                message = this.generateMessage();
                this.validateAllFormFields(this.airportForm);
                this.validateAllFormFields(this.houseForm);
                if (this.airportForm.enabled && this.houseForm.enabled) {
                    if (this.airportForm.valid && this.houseForm.valid) {
                        console.log('submitting form', message);
                    }
                }
                else if (this.houseForm.enabled) {
                    if (this.houseForm.valid) {
                        console.log('submitting form', message);
                    }
                }
                else if (this.airportForm.enabled) {
                    if (this.airportForm.valid) {
                        console.log('submitting form', message);
                    }
                }
                this.openConfirmDialog(message);
                return [2 /*return*/];
            });
        });
    };
    ServicesPickupDialogBookingComponent.prototype.openConfirmDialog = function (message) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__dialog_confirm_services_pickup_dialog_confirm__["a" /* ServicesPickupDialogConfirmComponent */], {
            panelClass: 'nj-confirm-dialog',
            height: '90%',
            data: {
                bookingNumber: this.form.get('bookingNumber').value,
                amount: this.getPickupPrice(),
                message: message
            }
        });
    };
    ServicesPickupDialogBookingComponent.prototype.generateMessage = function () {
        var title = "Shuttle Service Request - " + this.form.get('tripType').value + "\n\n";
        var price = "Total Price: " + this.getPickupPrice() + "\n\n";
        var fromAirport = '';
        var fromHouse = "";
        if (this.airportForm.enabled) {
            fromAirport = "[Airport to House]\n\n"
                + ("booking number: " + this.form.get('bookingNumber').value + "\n")
                + ("vehicle: " + this.form.get('vehicle').value + "\n")
                + ("airport: " + __WEBPACK_IMPORTED_MODULE_5__services_pickup_const__["a" /* PICKUP_SPOTS */][this.form.get('departure').value] + "\n")
                + ("date & time: " + this.convertToReadableDate(this.airportForm.get('date').value) + " " + this.airportForm.get('time').value + "\n")
                + ("flight: " + this.airportForm.get('flightName').value + " " + this.airportForm.get('flightNumber').value + "\n")
                + ("name card: " + this.airportForm.get('name').value + "\n\n");
        }
        if (this.houseForm.enabled) {
            fromHouse = "[House to Airport]\n\n"
                + ("date & time: " + this.convertToReadableDate(this.houseForm.get('date').value) + " " + this.houseForm.get('time').value + "\n\n");
        }
        return title + fromAirport + fromHouse + price;
    };
    ServicesPickupDialogBookingComponent.prototype.fixDestinationToHouse = function () {
        var destinationForm = this.form.get('destination');
        this.destination = this.pickupInfo.spots.filter(function (spot) { return spot.type === __WEBPACK_IMPORTED_MODULE_5__services_pickup_const__["a" /* PICKUP_SPOTS */].HOUSE; });
        destinationForm.setValue(__WEBPACK_IMPORTED_MODULE_5__services_pickup_const__["a" /* PICKUP_SPOTS */].HOUSE);
        destinationForm.disable();
    };
    ServicesPickupDialogBookingComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormGroup */]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    ServicesPickupDialogBookingComponent.prototype.convertToReadableDate = function (date) {
        return __WEBPACK_IMPORTED_MODULE_8_moment__(date).format('YYYY MMM DD dddd');
    };
    ServicesPickupDialogBookingComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* Component */])({
            selector: 'services-pickup-dialog-booking',
            template: __webpack_require__(847),
            styles: [__webpack_require__(848)]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["g" /* __param */](0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_6__service_airbnb_api_service__["a" /* AirbnbApiService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__service_translationModule_provider__["a" /* TranslationModule */]])
    ], ServicesPickupDialogBookingComponent);
    return ServicesPickupDialogBookingComponent;
}());



/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesPickupDialogConfirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_translationModule_provider__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_airbnb_api_service__ = __webpack_require__(284);





var ServicesPickupDialogConfirmComponent = /** @class */ (function () {
    function ServicesPickupDialogConfirmComponent(data, dialog, confirmDialog, airbnbApi, translate) {
        this.data = data;
        this.dialog = dialog;
        this.confirmDialog = confirmDialog;
        this.airbnbApi = airbnbApi;
        this.translate = translate;
        this.submitted = false;
    }
    ServicesPickupDialogConfirmComponent.prototype.submit = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
            var _this = this;
            var res, resTemp, subs, resTempSubs;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */](this, function (_a) {
                this.submitted = true;
                res = this.airbnbApi.sendMessage(276569855, this.data.message);
                resTemp = this.airbnbApi.requestShuttleService(this.data.bookingNumber, this.data.amount, this.data.message);
                subs = res.subscribe(function (r) {
                    console.log('response', r);
                    _this.dialog.closeAll();
                    alert('your request has been sent.\n\nThe host will contact you shortly.');
                }, function (err) {
                    alert('Failed to send request. If the problem persists, please contact the host.');
                    _this.submitted = false;
                }, function () { return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](_this, void 0, void 0, function () {
                    return __WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, subs.unsubscribe()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                resTempSubs = resTemp.subscribe(function (r) {
                    console.log('response', r);
                }, function (err) {
                }, function () { return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](_this, void 0, void 0, function () {
                    return __WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, resTempSubs.unsubscribe()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    ServicesPickupDialogConfirmComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* Component */])({
            selector: 'services-pickup-dialog-confirm',
            template: __webpack_require__(844),
            styles: [__webpack_require__(845)]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["g" /* __param */](0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_4__service_airbnb_api_service__["a" /* AirbnbApiService */],
            __WEBPACK_IMPORTED_MODULE_3__service_translationModule_provider__["a" /* TranslationModule */]])
    ], ServicesPickupDialogConfirmComponent);
    return ServicesPickupDialogConfirmComponent;
}());



/***/ }),

/***/ 843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesPickupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pickup_const__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_translationModule_provider__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialog_booking_services_pickup_dialog_booking__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service__ = __webpack_require__(148);







var ServicesPickupComponent = /** @class */ (function () {
    function ServicesPickupComponent(translate, dialog, appState) {
        this.translate = translate;
        this.dialog = dialog;
        this.appState = appState;
        "";
        this.pickupInfo = __WEBPACK_IMPORTED_MODULE_2__services_pickup_const__["b" /* ServicesPickupInfo */];
    }
    ServicesPickupComponent.prototype.openDialog = function (vehicle) {
        console.log('confirmation code', this.appState.get('confirmationCode'));
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__dialog_booking_services_pickup_dialog_booking__["a" /* ServicesPickupDialogBookingComponent */], {
            panelClass: 'nj-booking-dialog',
            height: '90%',
            data: {
                pickupInfo: this.pickupInfo,
                selectedVehicle: vehicle,
                confirmCode: this.appState.get('confirmationCode')
            }
        });
    };
    ServicesPickupComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* Component */])({
            selector: 'nj-services-pickup',
            styles: [__webpack_require__(850)],
            template: __webpack_require__(852)
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["f" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_translationModule_provider__["a" /* TranslationModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_6__app_service__["a" /* AppState */]])
    ], ServicesPickupComponent);
    return ServicesPickupComponent;
}());



/***/ }),

/***/ 844:
/***/ (function(module, exports) {

module.exports = "<p>{{'SERVICES.SHUTTLE_CONFIRM_HEADER' | translate}}</p>\n<mat-card class=\"nj-card\">\n  <mat-card-content class=\"nj-card-content\">\n    <pre>{{data.message}}</pre>\n  </mat-card-content>\n</mat-card>\n<p>{{'SERVICES.SHUTTLE_CONFIRM_INFO' | translate}}</p>\n<div class=\"button-group\" *ngIf=\"!submitted\">\n  <button mat-raised-button color=\"warn\" (click)=\"confirmDialog.close()\">\n    {{'SERVICES.SHUTTLE_BACK'\n    | translate}}\n  </button>\n  <button mat-raised-button color=\"primary\" (click)=\"submit()\">\n    {{'SERVICES.SHUTTLE_SUBMIT'\n    | translate}}\n  </button>\n</div>\n<mat-spinner style=\"margin:0 auto;\" *ngIf=\"submitted\"></mat-spinner>\n"

/***/ }),

/***/ 845:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(846);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 846:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(97)(undefined);
// imports


// module
exports.push([module.i, "/* fonts */\n", ""]);

// exports


/***/ }),

/***/ 847:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" #heroForm=\"ngForm\">\n  <mat-form-field>\n    <input matInput placeholder=\"Vehicle Type\"\n           formControlName=\"vehicle\" readonly>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput placeholder=\"{{'SERVICES.SHUTTLE_CONFIRMATION_CODE' | translate}}\"\n           formControlName=\"bookingNumber\" pattern=\"[a-zA-Z0-9]*\" required>\n    <mat-error *ngIf=\"form.controls['bookingNumber'].hasError('pattern')\">\n      {{'COMMON.ERROR_MESSAGES.ALPHANUMERIC_ONLY' | translate}}\n    </mat-error>\n  </mat-form-field>\n  <div class=\"\">\n    <mat-radio-group name=\"trip\" formControlName=\"tripType\" (change)=\"changeSpotOptions()\">\n      <mat-radio-button value=\"oneway\">{{'SERVICES.SHUTTLE_ONEWAY' | translate}}\n      </mat-radio-button>\n      <span>&nbsp;</span>\n      <mat-radio-button value=\"round\">{{'SERVICES.SHUTTLE_ROUNDTRIP' | translate}}\n      </mat-radio-button>\n    </mat-radio-group>\n  </div>\n  <div class=\"nj-form-field-spots nj-form-field\">\n    <table cellspacing=\"0\">\n      <tr>\n        <td>\n          <mat-form-field>\n            <mat-select placeholder=\"{{'SERVICES.SHUTTLE_DEPARTURE' | translate}}\"\n                        name=\"departure\"\n                        formControlName=\"departure\"\n                        floatPlaceholder=\"never\"\n                        (change)=\"changeSpotOptions()\" required>\n              <mat-option *ngFor=\"let airport of departures\" [value]=\"airport.type\">\n                {{airport.name.i18n | translate}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </td>\n        <td class=\"icon-col\">\n          <mat-icon cxlass=\"nj-card-title-icon\">{{form.get('tripType').value === 'oneway' ?\n            'trending_flat':'swap_horiz'}}\n          </mat-icon>\n        </td>\n        <td>\n          <mat-form-field>\n            <mat-select placeholder=\"{{'SERVICES.SHUTTLE_DESTINATION' | translate}}\"\n                        name=\"destination\"\n                        floatPlaceholder=\"never\"\n                        formControlName=\"destination\" required>\n              <mat-option *ngFor=\"let airport of destination\" [value]=\"airport.type\">\n                {{airport.name.i18n | translate}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </td>\n      </tr>\n    </table>\n  </div>\n  <mat-card class=\"airport-pickup-card pickup-card nj-card\"\n            *ngIf=\"form.controls['departure'].value !== PICKUP_SPOTS.HOUSE\">\n    <mat-card-header class=\"nj-card-header\">\n      <mat-card-title class=\"nj-card-title\">\n        <mat-icon class=\"nj-card-title-icon\">local_airport</mat-icon>\n        <mat-icon class=\"nj-card-title-icon\">trending_flat</mat-icon>\n        <mat-icon class=\"nj-card-title-icon\">home</mat-icon>\n      </mat-card-title>\n    </mat-card-header>\n    <form [formGroup]=\"airportForm\">\n      <mat-card-content class=\"nj-card-content\">\n        <table cellspacing=\"0\">\n          <tr>\n            <td>\n              <mat-form-field class=\"nj-booking-date-picker\">\n                <input matInput [matDatepicker]=\"picker\" (click)=\"picker.open()\"\n                       placeholder=\"{{'SERVICES.SHUTTLE_DATE' | translate}} & {{'SERVICES.SHUTTLE_TIME' | translate}}\"\n                       formControlName=\"date\" required readonly>\n                <mat-hint align=\"start\">Enter your arrival time of flight</mat-hint>\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                <mat-datepicker touchUi=\"false\" #picker></mat-datepicker>\n              </mat-form-field>\n            </td>\n            <td>\n              <input formControlName=\"time\" type=\"time\" class=\"time-input\" placeholder=\"Time\" required>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <mat-form-field>\n                <input type=\"text\" matInput placeholder=\"{{'SERVICES.SHUTTLE_FLIGHT_NAME' | translate}}\"\n                       formControlName=\"flightName\"\n                       pattern=\"[a-zA-Z0-9 ]*\" required>\n                <mat-error *ngIf=\"airportForm.controls['flightName'].hasError('pattern')\">\n                  {{'COMMON.ERROR_MESSAGES.ALPHANUMERIC_ONLY' | translate}}\n                </mat-error>\n              </mat-form-field>\n            </td>\n            <td>\n              <mat-form-field>\n                <input type=\"text\" matInput placeholder=\"{{'SERVICES.SHUTTLE_FLIGHT_NUMBER' | translate}}\"\n                       formControlName=\"flightNumber\"\n                       pattern=\"[a-zA-Z0-9 ]*\" required>\n                <mat-error *ngIf=\"airportForm.controls['flightNumber'].hasError('pattern')\">\n                  {{'COMMON.ERROR_MESSAGES.ALPHANUMERIC_ONLY' | translate}}\n                </mat-error>\n              </mat-form-field>\n            </td>\n          </tr>\n        </table>\n        <mat-form-field>\n          <input type=\"text\" matInput placeholder=\"{{'SERVICES.SHUTTLE_YOUR_NAME' | translate}}\" formControlName=\"name\"\n                 pattern=\"[a-zA-Z ]*\" required>\n          <mat-error *ngIf=\"airportForm.controls['name'].hasError('pattern')\" required>\n            {{'COMMON.ERROR_MESSAGES.ENGLISH_ONLY' | translate}}\n          </mat-error>\n        </mat-form-field>\n      </mat-card-content>\n    </form>\n  </mat-card>\n  <mat-card class=\"house-pickup-card pickup-card nj-card\"\n            *ngIf=\"form.controls['departure'].value === PICKUP_SPOTS.HOUSE || form.controls['tripType'].value !== 'oneway'\">\n    <mat-card-header class=\"nj-card-header\">\n      <mat-card-title class=\"nj-card-title\">\n        <mat-icon class=\"nj-card-title-icon\">home</mat-icon>\n        <mat-icon class=\"nj-card-title-icon\">trending_flat</mat-icon>\n        <mat-icon class=\"nj-card-title-icon\">local_airport</mat-icon>\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content class=\"nj-card-content\">\n      <form [formGroup]=\"houseForm\">\n        <table cellspacing=\"0\">\n          <tr>\n            <td>\n              <mat-form-field class=\"nj-booking-date-picker\">\n                <input matInput [matDatepicker]=\"picker\" [min]=\"airportForm.get('date').value\" formControlName=\"date\"\n                       (click)=\"picker.open()\"\n                       placeholder=\"{{'SERVICES.SHUTTLE_DATE' | translate}} & {{'SERVICES.SHUTTLE_TIME' | translate}}\"\n                       required readonly>\n                <mat-hint align=\"start\">Enter the time that you want to leave from the house</mat-hint>\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                <mat-datepicker touchUi=\"false\" #picker></mat-datepicker>\n              </mat-form-field>\n            </td>\n            <td>\n              <input formControlName=\"time\" type=\"time\" id=\"houseTime\"\n                     class=\"time-input\" placeholder=\"Time\" required>\n            </td>\n          </tr>\n        </table>\n      </form>\n    </mat-card-content>\n  </mat-card>\n  <div class=\"button-box\">\n    <mat-form-field class=\"total-price-form-field\">\n      <input matInput type=\"text\" placeholder=\"{{'SERVICES.SHUTTLE_TOTAL_PRICE' | translate}}\"\n             formControlName=\"price\"\n             [value]=\"getPickupPrice() | number\" readonly>\n      <span matSuffix>{{'COMMON.BAHT' | translate}}</span>\n    </mat-form-field>\n    <button class=\"submit-button\" mat-raised-button color=\"primary\" type=\"submit\">{{'SERVICES.SHUTTLE_CONTINUE'\n      | translate}}\n    </button>\n  </div>\n</form>\n\n"

/***/ }),

/***/ 848:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(849);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 849:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(97)(undefined);
// imports


// module
exports.push([module.i, "/* fonts */\n:host {\n  display: block; }\n\n.nj-form-field {\n  padding-bottom: 0;\n  margin-bottom: 1.50em; }\n  .nj-form-field label {\n    color: rgba(0, 0, 0, 0.54); }\n\n.time-input {\n  height: 1rem;\n  width: 50%;\n  border: none;\n  border-bottom: 1px solid;\n  border-radius: 0;\n  background: none; }\n  .time-input.ng-invalid.ng-touched {\n    border-color: red; }\n\n.nj-booking-date-picker {\n  width: 100%; }\n\n.mat-input-element,\ninput[type='time'],\ninput[type='text'] {\n  font-size: 16px; }\n\n.nj-form-field-spots td {\n  width: 50%; }\n\n.nj-form-field-spots .icon-col {\n  width: inherit; }\n\ntable {\n  width: 100%; }\n  table caption {\n    text-align: left; }\n  table td mat-form-field, table td mat-select {\n    width: 100%; }\n\n.button-box .total-price-form-field {\n  width: 40%; }\n\n.button-box .submit-button {\n  margin-left: 10%; }\n\n.pickup-card .nj-card-header /deep/ .mat-card-header-text {\n  margin: 0; }\n\n.pickup-card .nj-card-header .nj-card-title .nj-card-title-icon {\n  font-size: 1.2rem; }\n", ""]);

// exports


/***/ }),

/***/ 850:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(851);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 851:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(97)(undefined);
// imports


// module
exports.push([module.i, "/* fonts */\n", ""]);

// exports


/***/ }),

/***/ 852:
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"nj-card\">\n  <mat-card-header class=\"nj-card-header\">\n    <mat-card-title class=\"nj-card-title\">\n      <mat-icon class=\"nj-card-title-icon\">local_airport</mat-icon>\n      <span class=\"nj-card-title-text\">{{ 'SERVICES.SHUTTLE' | translate}}</span>\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content class=\"nj-card-content\">\n    <div class=\"description-box\">\n      <p>\n        {{ 'SERVICES.SHUTTLE_DESCRIPTION' | translate}}\n      </p>\n    </div>\n  </mat-card-content>\n</mat-card>\n<mat-card class=\"nj-card\">\n  <mat-card-header class=\"nj-card-header\">\n    <mat-card-title class=\"nj-card-title\">\n      <mat-icon class=\"nj-card-title-icon\">directions_car</mat-icon>\n      <span class=\"nj-card-title-text\">{{ 'SERVICES.SHUTTLE_VEHICLE_LIST' | translate}}</span>\n    </mat-card-title>\n  </mat-card-header>\n  <mat-divider></mat-divider>\n  <mat-card-content class=\"nj-card-content\">\n    <mat-list>\n      <mat-tab-group>\n        <mat-tab label=\"{{vehicle.name[translate.getCurrentLang()]}}\"\n                *ngFor=\"let vehicle of pickupInfo.vehicles; let i = index\">\n          <mat-list dense class=\"nj-card-list\">\n            <mat-card class=\"example-card\">\n              <!--<mat-card-header>\n                <mat-card-title>{{vehicle.name[translate.getCurrentLang()]}}</mat-card-title>\n                <mat-card-subtitle></mat-card-subtitle>\n              </mat-card-header>-->\n              <img mat-card-image src=\"assets/img/{{vehicle.img}}\">\n              <mat-card-content>\n                <mat-list>\n                  <mat-list-item class=\"nj-card-list-item\">\n                    <mat-icon mat-list-icon class=\"nj-card-list-item-icon\">people</mat-icon>\n                    <h4 matLine class=\"nj-card-list-item-heading\">{{'SERVICES.SHUTTLE_CAPACITY'\n                      | translate}}</h4>\n                    <p matLine class=\"nj-card-list-item-text\"> {{vehicle.capacity}}\n                      {{'SERVICES.SHUTTLE_PEOPLE' |\n                      translate}} </p>\n                  </mat-list-item>\n                  <mat-list-item class=\"nj-card-list-item\">\n                    <mat-icon mat-list-icon class=\"nj-card-list-item-icon\">payment</mat-icon>\n                    <h4 matLine class=\"nj-card-list-item-heading\">{{'SERVICES.SHUTTLE_PRICE' |\n                      translate}}</h4>\n                    <p matLine class=\"nj-card-list-item-text\"> {{vehicle.price | number}} {{ 'COMMON.BAHT' |\n                      translate}}</p>\n                  </mat-list-item>\n                </mat-list>\n              </mat-card-content>\n              <mat-card-actions>\n                <button mat-raised-button color=\"primary\" (click)=\"openDialog(vehicle)\">{{'SERVICES.SHUTTLE_BOOK'\n                  | translate}}</button>\n              </mat-card-actions>\n            </mat-card>\n          </mat-list>\n        </mat-tab>\n      </mat-tab-group>\n    </mat-list>\n  </mat-card-content>\n</mat-card>\n<mat-card class=\"nj-card\">\n  <mat-card-header class=\"nj-card-header\">\n    <mat-card-title class=\"nj-card-title\">\n      <mat-icon class=\"nj-card-title-icon\">place</mat-icon>\n      <span class=\"nj-card-title-text\">{{ 'SERVICES.SHUTTLE_PICKUP_SPOT' | translate}}</span>\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content class=\"nj-card-content\">\n    <p>\n      {{ 'SERVICES.SHUTTLE_PICKUP_SPOT_INFO' | translate}}\n    </p>\n    <mat-card class=\"nj-card\">\n      <mat-card-header class=\"nj-card-header\">\n        <mat-card-title class=\"nj-card-title\">\n          <mat-icon class=\"nj-card-title-icon\">warning</mat-icon>\n          <span class=\"nj-card-title-text\">{{ 'COMMON.ATTENTION' | translate | uppercase}}</span>\n        </mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <p class=\"warn-box\">{{ 'SERVICES.SHUTTLE_PICKUP_SPOT_WARN' | translate}}</p>\n      </mat-card-content>\n    </mat-card>\n    <mat-card class=\"nj-card\">\n      <mat-card-header class=\"nj-card-header\">\n        <mat-card-title class=\"nj-card-title\">\n          <span\n            class=\"nj-card-title-text\">{{ 'SERVICES.SHUTTLE_SUVARNABHUMI' | translate}}</span>\n        </mat-card-title>\n        <mat-card-subtitle>\n          {{ 'SERVICES.SHUTTLE_SUVARNABHUMI_INFO' | translate}}\n        </mat-card-subtitle>\n      </mat-card-header>\n      <img mat-card-image src=\"assets/img/pickup_suvan_airport.jpg\">\n    </mat-card>\n    <mat-card class=\"nj-card\">\n      <mat-card-header class=\"nj-card-header\">\n        <mat-card-title class=\"nj-card-title\">\n          <span class=\"nj-card-title-text\">{{ 'SERVICES.SHUTTLE_DONMUEANG' | translate}}</span>\n        </mat-card-title>\n        <mat-card-subtitle>\n          {{ 'SERVICES.SHUTTLE_DONMUEANG_INFO' | translate}}\n        </mat-card-subtitle>\n      </mat-card-header>\n      <img mat-card-image src=\"assets/img/pickup_dmk_airport.jpg\">\n    </mat-card>\n    <mat-card class=\"nj-card\">\n      <mat-card-header class=\"nj-card-header\">\n        <mat-card-title class=\"nj-card-title\">\n          <span class=\"nj-card-title-text\">{{ 'SERVICES.SHUTTLE_HOUSE' | translate}}</span>\n        </mat-card-title>\n        <mat-card-subtitle>\n          {{ 'SERVICES.SHUTTLE_HOUSE_INFO' | translate}}\n        </mat-card-subtitle>\n      </mat-card-header>\n    </mat-card>\n  </mat-card-content>\n</mat-card>\n"

/***/ })

});