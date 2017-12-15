webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-grid-tile {\n  background-color: lightblue;\n}\n\nmat-list-item {\n  border: silver thin solid;\n}\n\nmat-card {\n  padding: 12px;\n}\n\n.no-padding {\n  padding: 0;\n}\n\n.no-margin {\n  margin: 0;\n}\n\n.chart-row {\n  padding-left: 0;\n  padding-right: 0;\n  margin-top: 10px;\n}\n\n.chart-half {\n  margin-left: 15%;\n  width: 70%;\n  height: 20vh;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.chart-buffer {\n  padding: 0;\n  margin-top: 0;\n}\n\n/*animation*/\n.circle-loader {\n  margin: 0 0 0 10px;\n  border: 2px solid rgba(0, 0, 0, 0.2);\n  border-left-color: #5cb85c;\n  -webkit-animation-name: loader-spin;\n          animation-name: loader-spin;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.circle-loader,\n.circle-loader:after {\n  border-radius: 50%;\n  width: 2em;\n  height: 2em;\n}\n\n.load-complete {\n  -webkit-animation: none;\n  animation: none;\n  border-color: #5cb85c;\n  transition: border 500ms ease-out;\n}\n\n.checkmark {\n  display: none;\n}\n.checkmark.draw:after {\n  -webkit-animation-duration: 800ms;\n          animation-duration: 800ms;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-name: checkmark;\n          animation-name: checkmark;\n  -webkit-transform: scaleX(-1) rotate(135deg);\n          transform: scaleX(-1) rotate(135deg);\n}\n.checkmark:after {\n  opacity: 1;\n  height: 1em;\n  width: 0.5em;\n  -webkit-transform-origin: left top;\n          transform-origin: left top;\n  border-right: 2px solid #5cb85c;\n  border-top: 2px solid #5cb85c;\n  content: '';\n  left: 0.33333333em;\n  top: 1em;\n  position: absolute;\n}\n\n@-webkit-keyframes loader-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes loader-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes checkmark {\n  0% {\n    height: 0;\n    width: 0;\n    opacity: 1;\n  }\n  20% {\n    height: 0;\n    width: 0.5em;\n    opacity: 1;\n  }\n  40% {\n    height: 1em;\n    width: 0.5em;\n    opacity: 1;\n  }\n  100% {\n    height: 1em;\n    width: 0.5em;\n    opacity: 1;\n  }\n}\n@keyframes checkmark {\n  0% {\n    height: 0;\n    width: 0;\n    opacity: 1;\n  }\n  20% {\n    height: 0;\n    width: 0.5em;\n    opacity: 1;\n  }\n  40% {\n    height: 1em;\n    width: 0.5em;\n    opacity: 1;\n  }\n  100% {\n    height: 1em;\n    width: 0.5em;\n    opacity: 1;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-margin\">\n  <div class=\"col-md-12 chart-row\">\n    <div [myChart]=\"chartOptions\" #requestChart=\"myChart\" class=\"chart-half\"></div>\n  </div>\n</div>\n<div class=\"row no-margin\">\n  <div class=\"col-md-4\">\n    <mat-card style=\"background-color: #F2F4F8;height: 75vh; overflow: scroll\">\n      <mat-card-title>\n        Pending Requests\n      </mat-card-title>\n      <mat-card-content>\n        <ul class=\"list-group\">\n          <a href=\"#\" class=\"list-group-item\"\n             *ngFor=\"let request of pRequests\" style=\"color: black;\"\n             (click)=\"requestClicked(request,'p')\">\n            <span class=\"badge badge-pill\" style=\"background:#1D9DFC;\">{{getWaitingTime(request.timestamp)}}</span>\n            <div>{{request.name}}</div>\n            <div style=\"color: #6D6D6D;\">Request Type - {{request.type}}</div>\n            <p class=\"mb-1\" style=\"color:#a7afb2;\">Summary - {{request.summary}}</p>\n          </a>\n        </ul>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n  <div class=\"col-md-4\">\n    <mat-card style=\"background-color: #F2F4F8;height: 75vh; overflow: scroll\">\n      <mat-card-title>\n        Approved Requests\n      </mat-card-title>\n      <mat-card-content>\n        <ul class=\"list-group\">\n          <a href=\"#\" class=\"list-group-item\"\n             *ngFor=\"let request of aRequests\" style=\"color: black;\"\n             (click)=\"requestClicked(request,'a')\">\n            <span style=\"float: right;\">\n              <i class=\"fa fa-paypal\" *ngIf=\"request.bot\"></i>\n              <i class=\"fa fa-user\" *ngIf=\"!request.bot\"></i>\n              <span class=\"badge badge-pill\" style=\"background:#8fd17b;\">{{getWaitingTime(request.timestamp)}}</span>\n            </span>\n            <div>{{request.name}}</div>\n            <div style=\"color: #6D6D6D;\">Request Type - {{request.type}}</div>\n            <div class=\"no-margin no-padding\">\n              <div class=\"row\">\n                <div class=\"col-md-10\" style=\"float: left;\">\n                  <p class=\"mb-1\" style=\"color:#a7afb2;\">Summary - {{request.summary}}</p>\n                </div>\n                <div class=\"col-md-2\" style=\"float: right;\">\n                  <div [id]=\"removeSpaces(request.name)+request.timestamp+'loader'\" class=\"circle-loader\" style=\"float: right;\">\n                    <div [id]=\"removeSpaces(request.name)+request.timestamp+'checkmark'\" class=\"checkmark draw\"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </a>\n        </ul>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n  <div class=\"col-md-4\">\n    <mat-card style=\"background-color: #F2F4F8;height: 75vh; overflow: scroll\">\n      <mat-card-title>\n        Declined Requests\n      </mat-card-title>\n      <mat-card-content>\n        <ul class=\"list-group\">\n          <a href=\"#\" class=\"list-group-item\"\n             *ngFor=\"let request of dRequests\" style=\"color: black;\"\n             (click)=\"requestClicked(request,'d')\">\n            <span style=\"float: right;\">\n              <i class=\"fa fa-paypal\" *ngIf=\"request.bot\"></i>\n              <i class=\"fa fa-user\" *ngIf=\"!request.bot\"></i>\n              <span class=\"badge badge-pill\" style=\"background:#FD6585;\">{{getWaitingTime(request.timestamp)}}</span>\n            </span>\n            <div>{{request.name}}</div>\n            <div style=\"color: #6D6D6D;\">Request Type - {{request.type}}</div>\n            <p class=\"mb-1\" style=\"color:#a7afb2;\">Summary - {{request.summary}}</p>\n          </a>\n        </ul>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_zip__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/zip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives__ = __webpack_require__("../../../../../src/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dialog_dialog_component__ = __webpack_require__("../../../../../src/app/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppComponent = (function () {
    function AppComponent(dialog, snackBar, zone, db) {
        var _this = this;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.zone = zone;
        this.db = db;
        this.pRequests = [];
        this.aRequests = [];
        this.dRequests = [];
        this.human = [];
        this.chartOptions = __WEBPACK_IMPORTED_MODULE_3__directives__["b" /* chartOptions */];
        this.initDB();
        setInterval(function () {
            _this.initDB();
        }, 2000);
    }
    AppComponent.prototype.initDB = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].zip(this.db.list('pending').valueChanges(), this.db.list('accepted').valueChanges(), this.db.list('declined').valueChanges()).subscribe(function (_a) {
            var pData = _a[0], aData = _a[1], dData = _a[2];
            _this.zone.run(function () {
                var tempAR = _this.getJsonArray(aData, true);
                if (!__WEBPACK_IMPORTED_MODULE_5_lodash__["isEqual"](_this.aRequests, tempAR)) {
                    __WEBPACK_IMPORTED_MODULE_5_lodash__["forEach"](tempAR, function (request) {
                        setTimeout(function () {
                            _this.toggleAnimation(request);
                        }, 0);
                    });
                    _this.aRequests = tempAR;
                }
                var tempDR = _this.getJsonArray(dData, true);
                if (!__WEBPACK_IMPORTED_MODULE_5_lodash__["isEqual"](_this.dRequests, tempDR)) {
                    _this.dRequests = tempDR;
                }
                var tempPR = _this.removeRequests(_this.getJsonArray(pData, false), _this.aRequests, _this.dRequests);
                if (!__WEBPACK_IMPORTED_MODULE_5_lodash__["isEqual"](_this.pRequests, tempPR)) {
                    _this.pRequests = tempPR;
                }
                _this.drawGraph([_this.pRequests.length, _this.aRequests.length, _this.dRequests.length]);
            });
        });
    };
    AppComponent.prototype.removeRequests = function (arr, aR, dR) {
        __WEBPACK_IMPORTED_MODULE_5_lodash__["forEach"](aR, function (v) {
            __WEBPACK_IMPORTED_MODULE_5_lodash__["remove"](arr, function (r) { return r.name === v.name; });
        });
        __WEBPACK_IMPORTED_MODULE_5_lodash__["forEach"](dR, function (v) {
            __WEBPACK_IMPORTED_MODULE_5_lodash__["remove"](arr, function (r) { return r.name === v.name; });
        });
        return arr;
    };
    AppComponent.prototype.getJsonArray = function (data, setBot) {
        var arr = [];
        __WEBPACK_IMPORTED_MODULE_5_lodash__["forEach"](data, function (req) {
            var parsed = JSON.parse(req);
            parsed.timestamp = __WEBPACK_IMPORTED_MODULE_5_lodash__["round"](parsed.timestamp);
            arr.push(parsed);
        });
        this.setBot(arr, setBot);
        return this.sortRequests(arr);
    };
    AppComponent.prototype.requestClicked = function (request, type) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__dialog_dialog_component__["a" /* DialogComponent */], {
            data: { request: request, type: type }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'a') {
                _this.human.push(request.name + request.timestamp);
                _this.removePRequest(request);
                _this.addARequest(request);
                _this.drawGraph([_this.pRequests.length, _this.aRequests.length, _this.dRequests.length]);
            }
            else if (result === 'd') {
                _this.human.push(request.name + request.timestamp);
                _this.removePRequest(request);
                _this.addDRequest(request);
                _this.drawGraph([_this.pRequests.length, _this.aRequests.length, _this.dRequests.length]);
            }
        });
    };
    AppComponent.prototype.removePRequest = function (request) {
        var _this = this;
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_5_lodash__["remove"](_this.pRequests, function (r) { return r.name === request.name; });
        }, 0);
    };
    AppComponent.prototype.addARequest = function (request) {
        var _this = this;
        this.aRequests = this.sortRequests(__WEBPACK_IMPORTED_MODULE_5_lodash__["concat"](this.aRequests, request));
        setTimeout(function () {
            _this.db.list('accepted').push(JSON.stringify(request));
        }, 0);
        this.snackBar.open('Request Approved, API initiated', '', {
            duration: 1500
        });
        setTimeout(function () {
            _this.toggleAnimation(request);
        }, 5000);
    };
    AppComponent.prototype.addDRequest = function (request) {
        var _this = this;
        this.dRequests = this.sortRequests(__WEBPACK_IMPORTED_MODULE_5_lodash__["concat"](this.dRequests, request));
        setTimeout(function () {
            _this.db.list('declined').push(JSON.stringify(request));
        }, 0);
        this.snackBar.open('Request Declined', '', {
            duration: 1500
        });
    };
    AppComponent.prototype.drawGraph = function (data) {
        var chartObj = this.requestChart;
        while (chartObj.chart.series.length > 0) {
            chartObj.chart.series[0].remove(false);
        }
        chartObj.chart.addSeries({
            data: [
                { y: data[0], name: 'Pending', color: '#1D9DFC' },
                { y: data[1], name: 'Accepted', color: '#8fd17b' },
                { y: data[2], name: 'Declined', color: '#FD6585' }
            ]
        }, false);
        chartObj.chart.redraw();
    };
    AppComponent.prototype.sortRequests = function (requests) {
        return __WEBPACK_IMPORTED_MODULE_5_lodash__["sortBy"](requests, ['timestamp']);
    };
    AppComponent.prototype.getWaitingTime = function (epoch) {
        if (!epoch) {
            epoch = __WEBPACK_IMPORTED_MODULE_4_moment__().valueOf() / 1000;
        }
        var then = __WEBPACK_IMPORTED_MODULE_4_moment__(epoch * 1000);
        var now = __WEBPACK_IMPORTED_MODULE_4_moment__();
        return __WEBPACK_IMPORTED_MODULE_5_lodash__["round"](__WEBPACK_IMPORTED_MODULE_4_moment__["duration"](now.diff(then)).asHours()) + ' hours';
    };
    AppComponent.prototype.removeSpaces = function (str) {
        if (!str) {
            return '';
        }
        return str.replace(/\s/g, '');
    };
    AppComponent.prototype.setBot = function (requests, isBot) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_lodash__["forEach"](requests, function (request) {
            if (_this.human.indexOf(request.name + request.timestamp) === -1) {
                request.bot = isBot;
            }
            else {
                request.bot = false;
            }
        });
    };
    AppComponent.prototype.toggleAnimation = function (request) {
        __WEBPACK_IMPORTED_MODULE_8_jquery__('#' + this.removeSpaces(request.name) + request.timestamp + 'loader').toggleClass('load-complete');
        __WEBPACK_IMPORTED_MODULE_8_jquery__('#' + this.removeSpaces(request.name) + request.timestamp + 'checkmark').toggle();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('requestChart'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "requestChart", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_grid_list__ = __webpack_require__("../../../material/esm5/grid-list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives__ = __webpack_require__("../../../../../src/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers__ = __webpack_require__("../../../../../src/providers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dialog_dialog_component__ = __webpack_require__("../../../../../src/app/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_snack_bar__ = __webpack_require__("../../../material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var config = {
    apiKey: 'AIzaSyAj7eQ33XshszvUweCGQZ8r4GNkEBn3S90',
    authDomain: 'brewfire-1ba0d.firebaseapp.com',
    databaseURL: 'https://brewfire-1ba0d.firebaseio.com',
    projectId: 'brewfire-1ba0d',
    storageBucket: 'brewfire-1ba0d.appspot.com',
    messagingSenderId: '300400788811'
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__directives__["a" /* ChartDirective */],
                __WEBPACK_IMPORTED_MODULE_14__dialog_dialog_component__["a" /* DialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_firestore__["a" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_grid_list__["a" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_snack_bar__["b" /* MatSnackBarModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__providers__["a" /* HttpService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_14__dialog_dialog_component__["a" /* DialogComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{title}}</h2>\n<mat-dialog-content>\n\n\n  <div>Name - {{request.name}}</div>\n  <div style=\"margin-bottom: 10px\">\n    <i class=\"fa fa-phone\"> {{request.phone}}</i>\n    <i class=\"fa fa-envelope\"> {{request.email}}</i>\n  </div>\n  <span style=\"color:#6D6D6D\">Waiting Time - {{getWaitingTime(request.timestamp)}}</span>\n  <div style=\"color: #6D6D6D;\">Request Type - {{request.type}}</div>\n  <p class=\"mb-1\" style=\"color:#6D6D6D;\">Summary - {{request.summary}}</p>\n  <p class=\"mb-1\" style=\"color:#6D6D6D;\">Details - {{request.details}}</p>\n\n\n</mat-dialog-content>\n<mat-dialog-actions>\n\n  <div *ngIf=\"showActions\">\n    <button mat-button color=\"primary\" [mat-dialog-close]=\"'a'\" tabindex=\"1\">Approve</button>\n    <button mat-button color=\"warn\" [mat-dialog-close]=\"'d'\" tabindex=\"1\">Decline</button>\n    <button mat-button mat-dialog-close tabindex=\"-1\">Cancel</button>\n  </div>\n  <button mat-button mat-dialog-close tabindex=\"1\" *ngIf=\"!showActions\">Cancel</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DialogComponent = (function () {
    function DialogComponent(data) {
        this.data = data;
        this.showActions = false;
        this.request = data.request;
        this.type = data.type;
        this.init();
    }
    DialogComponent.prototype.init = function () {
        if (this.type === 'p') {
            this.title = 'Pending Request';
            this.showActions = true;
        }
        else if (this.type === 'a') {
            this.title = 'Accepted Request';
            this.showActions = false;
        }
        else if (this.type === 'd') {
            this.title = 'Declined Request';
            this.showActions = false;
        }
    };
    DialogComponent.prototype.getWaitingTime = function (epoch) {
        var then = __WEBPACK_IMPORTED_MODULE_2_moment__(epoch * 1000);
        var now = __WEBPACK_IMPORTED_MODULE_2_moment__();
        return __WEBPACK_IMPORTED_MODULE_3_lodash__["round"](__WEBPACK_IMPORTED_MODULE_2_moment__["duration"](now.diff(then)).asHours()) + ' hours';
    };
    DialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-dialog',
            template: __webpack_require__("../../../../../src/app/dialog/dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dialog/dialog.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "../../../../../src/directives/chart.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return chartOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts__ = __webpack_require__("../../../../highcharts/highcharts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highcharts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


__WEBPACK_IMPORTED_MODULE_1_highcharts__["setOptions"]({
    lang: {
        thousandsSep: ',',
        noData: 'No Data Available. Try other options.'
    }
});
var ChartDirective = (function () {
    function ChartDirective(ele) {
        this.hostElement = ele;
    }
    Object.defineProperty(ChartDirective.prototype, "options", {
        set: function (opt) {
            if (!opt) {
                console.log('No valid options...');
                console.log(opt);
                return;
            }
            if (opt.series || opt.data) {
                if (this.chartObj) {
                    this.chartObj.destroy();
                }
                if (!opt.chart) {
                    opt.chart = {};
                }
                opt.chart.renderTo = this.hostElement.nativeElement;
                this.chartObj = new __WEBPACK_IMPORTED_MODULE_1_highcharts__["Chart"](opt);
            }
            else {
                console.log('No valid options...');
                console.dir(opt);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartDirective.prototype, "chart", {
        get: function () {
            return this.chartObj;
        },
        enumerable: true,
        configurable: true
    });
    ChartDirective.prototype.ngOnDestroy = function () {
        if (this.chartObj) {
            this.chartObj.destroy();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])('myChart'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ChartDirective.prototype, "options", null);
    ChartDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[myChart]',
            exportAs: 'myChart'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], ChartDirective);
    return ChartDirective;
}());

var chartOptions = {
    chart: {
        type: 'bar'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: ['Pending', 'Accepted', 'Declined'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '# of Requests',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        },
        series: {
            animation: false
        }
    },
    credits: {
        enabled: false
    },
    series: [],
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b>' + ': ' + this.y;
        }
    }
};


/***/ }),

/***/ "../../../../../src/directives/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chart_directive__ = __webpack_require__("../../../../../src/directives/chart.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__chart_directive__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__chart_directive__["b"]; });



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/providers/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__("../../../../../src/providers/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.requestUrl = 'localhost:8080/request';
    }
    HttpService.prototype.getRequestQuery = function () {
        return new Promise(function (resolve, reject) {
            resolve(__WEBPACK_IMPORTED_MODULE_1__model__["a" /* dummyData */]);
        });
        // return this.get(this.requestUrl);
    };
    HttpService.prototype.get = function (url, options) {
        return this.http.get(url, options).toPromise();
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "../../../../../src/providers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_service__ = __webpack_require__("../../../../../src/providers/http.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__http_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__("../../../../../src/providers/model.ts");
/* unused harmony namespace reexport */




/***/ }),

/***/ "../../../../../src/providers/model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dummyData; });
var dummyData = {
    pending: [
        {
            name: 'Virat Kohli',
            type: 'chargeback',
            summary: 'give me my chargeback',
            details: 'hey google help me with chargeback? google replied: can not help you',
            timestamp: 1513218000
        },
        {
            name: 'Sachin Tengli',
            type: 'limit',
            summary: 'increase my limit',
            details: 'hey google increase my limit? google replied: sure',
            timestamp: 1513188000
        },
        {
            name: 'Sania Mirza',
            type: 'limit',
            summary: 'increase my limit',
            details: 'hey google how do I increase my paypal limit? google replied: ...',
            timestamp: 1513288000
        }
    ],
    accepted: [{
            name: 'Saurav Ganguly',
            type: 'chargeback',
            summary: 'item not delivered',
            details: 'hey google I got a fraud item? google replied: tell me about item...',
            timestamp: 1513265000
        }],
    declined: [{
            name: 'Salman Khan',
            type: 'limit',
            summary: 'increase my limit',
            details: 'hey google I am going to travel, increase my limit? google replied: no means no, you stupid murderer',
            timestamp: 1513200000
        }]
};


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map