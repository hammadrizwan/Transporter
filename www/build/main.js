webpackJsonp([9],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnroutePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EnroutePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnroutePage = (function () {
    function EnroutePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EnroutePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnroutePage');
    };
    return EnroutePage;
}());
EnroutePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-enroute',template:/*ion-inline-start:"Y:\Angular\Transporter\src\pages\enroute\enroute.html"*/'<!--\n  Generated template for the AllPackagesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n  \n-->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Drive and Deliver</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <ion-fab right>\n      <button ion-fab>\n        <ion-icon name="pin"></ion-icon>\n      </button>\n    </ion-fab>\n\n    <img src="assets/imgs/Borough-market.jpg">\n\n    <ion-item>\n      <ion-icon name="american-football" item-start large></ion-icon>\n      <h2>To: Museum of American-Footaball</h2>\n      <p>11 N. Way St, Madison, WI 53703</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="basket" item-left large></ion-icon>\n      <h2>From: Vegetable Market</h2>.\n      <p>14 S. Hop Avenue, Madison, WI 53703</p>\n    </ion-item>\n\n    <ion-item>\n      <span item-left>Offer= 5200rs</span>\n      <span item-left>Package Size= Medium</span>\n      <span item-left>Transport Type= Car</span>\n    </ion-item>\n\n    <ion-item>\n      <button ion-button full>\n        <ion-icon name="navigate"></ion-icon>\n        Accept\n      </button>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n\n    <img src="assets/imgs/advance-card-map-madison.png">\n    <ion-fab right top>\n      <button ion-fab>\n        <ion-icon name="pin"></ion-icon>\n      </button>\n    </ion-fab>\n\n    <ion-item>\n      <ion-icon name="football" item-start large></ion-icon>\n      <h2>To: Museum of Football</h2>\n      <p>11 N. Way St, Madison, WI 53703</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="wine" item-left large></ion-icon>\n      <h2>From: Institute of Fine Cocktails</h2>\n      <p>14 S. Hop Avenue, Madison, WI 53703</p>\n    </ion-item>\n\n    <ion-item>\n      <span item-left>Offer= 2500rs</span>\n      <span item-left>Package Size= Small</span>\n      <span item-left>Transport Type= Bike</span>\n    </ion-item>\n\n\n    <ion-item>\n      <button ion-button full>\n        <ion-icon name="navigate"></ion-icon>\n        Accept\n      </button>\n    </ion-item>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"Y:\Angular\Transporter\src\pages\enroute\enroute.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], EnroutePage);

//# sourceMappingURL=enroute.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NearbyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NearbyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NearbyPage = (function () {
    function NearbyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NearbyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NearbyPage');
    };
    return NearbyPage;
}());
NearbyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-nearby',template:/*ion-inline-start:"Y:\Angular\Transporter\src\pages\nearby\nearby.html"*/'<!--\n  Generated template for the AllPackagesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n  \n-->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Drive and Deliver</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n    \n    <img src="assets/imgs/Grocery-bag.jpg">\n      <ion-fab right top>\n        <button ion-fab>\n          <ion-icon name="pin"></ion-icon>\n        </button>\n      </ion-fab>\n    \n      <ion-item>\n        <ion-icon name="football" item-start large></ion-icon>\n        <h2>To: Museum of Football</h2>\n        <p>11 N. Way St, Madison, WI 53703</p>\n      </ion-item>\n    \n      <ion-item>\n        <ion-icon name="wine" item-left large ></ion-icon>\n        <h2>From: Institute of Fine Cocktails</h2>\n        <p>14 S. Hop Avenue, Madison, WI 53703</p>\n      </ion-item>\n    \n      <ion-item>\n        <span item-left>Offer= 2500rs</span>\n        <span item-left>Package Size= Small</span>\n        <span item-left>Transport Type= Bike</span>\n      </ion-item>\n\n\n      <ion-item>\n        <button ion-button full>\n          <ion-icon name="navigate"></ion-icon>\n          Accept\n        </button>\n      </ion-item>\n\n    </ion-card>\n    <ion-card>\n      \n\n\n      <ion-fab right >\n        <button ion-fab>\n          <ion-icon name="pin"></ion-icon>\n        </button>\n      </ion-fab>\n\n        <img src="assets/imgs/Borough-market.jpg">\n      \n        <ion-item>\n          <ion-icon name="american-football" item-start large></ion-icon>\n          <h2>To: Museum of American-Footaball</h2>\n          <p>11 N. Way St, Madison, WI 53703</p>\n        </ion-item>\n      \n        <ion-item>\n          <ion-icon name="basket" item-left large ></ion-icon>\n          <h2>From: Vegetable Market</h2>\n          <p>14 S. Hop Avenue, Madison, WI 53703</p>\n        </ion-item>\n      \n        <ion-item>\n          <span item-left>Offer= 5200rs</span>\n          <span item-left>Package Size= Medium</span>\n          <span item-left>Transport Type= Car</span>\n        </ion-item>\n\n        <ion-item>\n          <button ion-button full>\n            <ion-icon name="navigate"></ion-icon>\n            Accept\n          </button>\n        </ion-item>\n      </ion-card>\n</ion-content>'/*ion-inline-end:"Y:\Angular\Transporter\src\pages\nearby\nearby.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], NearbyPage);

//# sourceMappingURL=nearby.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingRequestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PendingRequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PendingRequestsPage = (function () {
    function PendingRequestsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PendingRequestsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PendingRequestsPage');
    };
    return PendingRequestsPage;
}());
PendingRequestsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pending-requests',template:/*ion-inline-start:"Y:\Angular\Transporter\src\pages\pending-requests\pending-requests.html"*/'<!--\n  Generated template for the PendingRequestsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>PendingRequests</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-item>\n      <img width="50px" height="100px" src="assets/imgs/advance-card-map-madison.png">\n    </ion-item>\n    <ion-fab right top>\n      <button ion-fab>\n        <ion-icon name="pin"></ion-icon>\n      </button>\n    </ion-fab>\n\n    <ion-item>\n      <ion-icon name="football" item-start large></ion-icon>\n      <h2>To: Museum of Football</h2>\n      <p>11 N. Way St, Madison, WI 53703</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="wine" item-left large></ion-icon>\n      <h3>From: Institute of Fine Cocktails</h3>\n      <p>14 S. Hop Avenue, Madison, WI 53703</p>\n    </ion-item>\n    <ion-row>\n      <ion-col col-4>\n        <ion-item>\n            <ion-icon name="cash" item-left large></ion-icon>\n          <p>RS 2500</p>\n        </ion-item>\n      </ion-col>\n      <ion-col col-4>\n        <ion-item>\n          <ion-icon name="open" item-left large></ion-icon>\n          <p>Small</p>\n        </ion-item>\n      </ion-col>\n      <ion-col col-4>\n        <ion-item>\n          <ion-icon name="bus" item-left large></ion-icon>\n          <p>Bike</p>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"Y:\Angular\Transporter\src\pages\pending-requests\pending-requests.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], PendingRequestsPage);

//# sourceMappingURL=pending-requests.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllPackagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__packagedetail_packagedetail__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AllPackagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllPackagesPage = (function () {
    function AllPackagesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AllPackagesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllPackagesPage');
    };
    AllPackagesPage.prototype.openPackageDetailsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__packagedetail_packagedetail__["a" /* PackagedetailPage */]);
    };
    return AllPackagesPage;
}());
AllPackagesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-all-packages',template:/*ion-inline-start:"Y:\Angular\Transporter\src\pages\all-packages\all-packages.html"*/'<!--\n  Generated template for the AllPackagesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n  \n-->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Drive and Deliver</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n    \n    <img src="assets/imgs/advance-card-map-madison.png">\n      <ion-fab right top>\n        <button ion-fab>\n          <ion-icon name="pin"></ion-icon>\n        </button>\n      </ion-fab>\n    \n      <ion-item>\n        <ion-icon name="football" item-start large></ion-icon>\n        <h2>To: Museum of Football</h2>\n        <p>11 N. Way St, Madison, WI 53703</p>\n      </ion-item>\n    \n      <ion-item>\n        <ion-icon name="wine" item-left large ></ion-icon>\n        <h2>From: Institute of Fine Cocktails</h2>\n        <p>14 S. Hop Avenue, Madison, WI 53703</p>\n      </ion-item>\n    \n      <ion-item>\n        <span item-left>Offer= 2500rs</span>\n        <span item-left>Package Size= Small</span>\n        <span item-left>Transport Type= Bike</span>\n      </ion-item>\n\n\n      <ion-item>\n        <button ion-button full (click)="openPackageDetailsPage()">\n          <ion-icon name="navigate"></ion-icon>\n          Accept\n        </button>\n      </ion-item>\n\n    </ion-card>\n    <ion-card>\n      \n\n\n      <ion-fab right >\n        <button ion-fab>\n          <ion-icon name="pin"></ion-icon>\n        </button>\n      </ion-fab>\n\n        <img src="assets/imgs/Borough-market.jpg">\n      \n        <ion-item>\n          <ion-icon name="american-football" item-start large></ion-icon>\n          <h2>To: Museum of American-Footaball</h2>\n          <p>11 N. Way St, Madison, WI 53703</p>\n        </ion-item>\n      \n        <ion-item>\n          <ion-icon name="basket" item-left large ></ion-icon>\n          <h2>From: Vegetable Market</h2>\n          <p>14 S. Hop Avenue, Madison, WI 53703</p>\n        </ion-item>\n      \n        <ion-item>\n          <span item-left>Offer= 5200rs</span>\n          <span item-left>Package Size= Medium</span>\n          <span item-left>Transport Type= Car</span>\n        </ion-item>\n\n        <ion-item>\n          <button ion-button full (click)="openPackageDetailsPage()">\n            <ion-icon name="navigate"></ion-icon>\n            Accept\n          </button>\n        </ion-item>\n      </ion-card>\n</ion-content>'/*ion-inline-end:"Y:\Angular\Transporter\src\pages\all-packages\all-packages.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], AllPackagesPage);

//# sourceMappingURL=all-packages.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enroute_enroute__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nearby_nearby__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__all_packages_all_packages__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.allpackagespage = __WEBPACK_IMPORTED_MODULE_4__all_packages_all_packages__["a" /* AllPackagesPage */];
        this.nearbypage = __WEBPACK_IMPORTED_MODULE_3__nearby_nearby__["a" /* NearbyPage */];
        this.enroutepage = __WEBPACK_IMPORTED_MODULE_2__enroute_enroute__["a" /* EnroutePage */];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"Y:\Angular\Transporter\src\pages\home\home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-tabs>\n  <ion-tab [root]="allpackagespage" tabTitle="All" tabIcon="paper" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="nearbypage" tabTitle="Nearby" tabIcon="compass" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="enroutepage" tabTitle="Enroute" tabIcon="briefcase" tabsHideOnSubPages="true"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"Y:\Angular\Transporter\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/all-packages/all-packages.module": [
		281,
		8
	],
	"../pages/enqueuedetails/enqueuedetails.module": [
		275,
		7
	],
	"../pages/enroute/enroute.module": [
		276,
		6
	],
	"../pages/home/home.module": [
		282,
		5
	],
	"../pages/nearby/nearby.module": [
		277,
		4
	],
	"../pages/packagedetail/packagedetail.module": [
		278,
		3
	],
	"../pages/pending-requests/pending-requests.module": [
		279,
		2
	],
	"../pages/profile/profile.module": [
		280,
		1
	],
	"../pages/sign-up/sign-up.module": [
		283,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnqueuedetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EnqueuedetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnqueuedetailsPage = (function () {
    function EnqueuedetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EnqueuedetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnqueuedetailsPage');
    };
    return EnqueuedetailsPage;
}());
EnqueuedetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-enqueuedetails',template:/*ion-inline-start:"Y:\Angular\Transporter\src\pages\enqueuedetails\enqueuedetails.html"*/'<!--\n  Generated template for the EnqueuedetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Enqueue Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <div class="text-center">\n      <h1 style="text-align: center;">Package Name</h1>\n\n      <h2 style="text-align: center;">Grocery Bag</h2>\n    </div>\n    <ion-card-content>\n      <ion-card-title>\n      </ion-card-title>\n      <ion-list>\n        <ion-item>\n            <ion-icon name="arrow-round-back" item-start></ion-icon>\n          <ion-card-header>\n            To:\n          </ion-card-header>\n          <ion-card-content>\n            House 454 D, street 9, askari x, lahore.\n          </ion-card-content>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="arrow-round-forward" item-start></ion-icon>\n          <ion-card-header>\n            From:\n          </ion-card-header>\n          <ion-card-content>\n            Phase 5, food mart, defense, lahore.\n          </ion-card-content>\n        </ion-item>\n        <ion-item>\n          <ion-icon name="cash" item-start></ion-icon>\n          Money\n          <p>Rs:700</p>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name="barcode" item-start></ion-icon>\n          <ion-label color="danger" stacked>Verification Code:</ion-label>\n          <ion-input placeholder="XXXXXXX"></ion-input>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n\n\n    <ion-img center width="280" height="280" src="assets/imgs/8012607.png"></ion-img>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"Y:\Angular\Transporter\src\pages\enqueuedetails\enqueuedetails.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], EnqueuedetailsPage);

//# sourceMappingURL=enqueuedetails.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"Y:\Angular\Transporter\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Welcome User!</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"Y:\Angular\Transporter\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_transfer__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignUpPage = (function () {
    function SignUpPage(navCtrl, camera, transfer, file, filePath, actionSheetCtrl, toastCtrl, platform, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.lastImage1 = null;
        this.lastImage2 = null;
        this.lastImage3 = null;
    }
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
    };
    SignUpPage.prototype.presentActionSheet = function (id) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY, id);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA, id);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    SignUpPage.prototype.takePicture = function (sourceType, id) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName(), id);
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName(), id);
            }
        }, function (err) {
            _this.presentToast('Error while selecting image.');
        });
    };
    SignUpPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    SignUpPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName, id) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            switch (id) {
                case 1:
                    _this.lastImage1 = newFileName;
                    break;
                case 2:
                    _this.lastImage2 = newFileName;
                    break;
                case 3:
                    _this.lastImage3 = newFileName;
                    break;
            }
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    SignUpPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    // Always get the accurate path to your apps folder
    SignUpPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    return SignUpPage;
}());
SignUpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sign-up',template:/*ion-inline-start:"Y:\Angular\Transporter\src\pages\sign-up\sign-up.html"*/'<!--\n  Generated template for the SignUpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>SignUp</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-avatar item-start>\n      <ion-icon class="photo1"  *ngIf="lastImage1==null" name="add-circle" large></ion-icon>\n      <img src="{{pathForImage(lastImage1)}}" class="avatar1" *ngIf="lastImage1!=null">\n    </ion-avatar>\n    <ion-buttons></ion-buttons>\n    <h3>Take a Selfie!</h3>\n    <button ion-button (click)="presentActionSheet(1)">\n      <ion-icon name="camera"></ion-icon>Select Image\n    </button>\n  </ion-item>\n\n\n\n  <form (ngSubmit)="logForm()">\n    <ion-item>\n      <ion-label color="primary" stacked>Name</ion-label>\n      <ion-input placeholder="Enter Name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>Email</ion-label>\n      <ion-input type="email" placeholder="Enter Email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>CNIC</ion-label>\n      <ion-input placeholder="Enter Cnic" maxlength="15"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>Phone</ion-label>\n      <ion-input placeholder="Phone Number +92" maxlength="13"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>Address</ion-label>\n      <ion-textarea placeholder="Enter Address"></ion-textarea>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label color="primary">Gender</ion-label>\n      <ion-select>\n        <ion-option selected>Date</ion-option>\n        <ion-option value="1">1</ion-option>\n        <ion-option value="2">2</ion-option>\n        <ion-option value="3">3</ion-option>\n        <ion-option value="4">4</ion-option>\n        <ion-option value="5">5</ion-option>\n        <ion-option value="6">6</ion-option>\n        <ion-option value="7">7</ion-option>\n        <ion-option value="8">8</ion-option>\n        <ion-option value="9">9</ion-option>\n        <ion-option value="10">10</ion-option>\n        <ion-option value="11">11</ion-option>\n        <ion-option value="12">12</ion-option>\n        <ion-option value="13">13</ion-option>\n        <ion-option value="14">14</ion-option>\n        <ion-option value="15">15</ion-option>\n        <ion-option value="16">16</ion-option>\n        <ion-option value="17">17</ion-option>\n        <ion-option value="18">18</ion-option>\n        <ion-option value="19">19</ion-option>\n        <ion-option value="20">20</ion-option>\n        <ion-option value="21">21</ion-option>\n        <ion-option value="22">22</ion-option>\n        <ion-option value="23">23</ion-option>\n        <ion-option value="24">24</ion-option>\n        <ion-option value="25">25</ion-option>\n        <ion-option value="26">26</ion-option>\n        <ion-option value="27">27</ion-option>\n        <ion-option value="28">28</ion-option>\n        <ion-option value="29">29</ion-option>\n        <ion-option value="30">30</ion-option>\n        <ion-option value="31">31</ion-option>\n      </ion-select>\n      <ion-select>\n        <ion-option value="f" selected>Month</ion-option>\n        <ion-option value="Janaury">Janaury</ion-option>\n        <ion-option value="February">February</ion-option>\n        <ion-option value="March">March</ion-option>\n        <ion-option value="April">April</ion-option>\n        <ion-option value="May">May</ion-option>\n        <ion-option value="June">June</ion-option>\n        <ion-option value="July">July</ion-option>\n        <ion-option value="August">August</ion-option>\n        <ion-option value="September">September</ion-option>\n        <ion-option value="October">October</ion-option>\n        <ion-option value="November">November</ion-option>\n        <ion-option value="December">December</ion-option>\n      </ion-select>\n      <ion-select>\n        <ion-option value="f" selected>Year</ion-option>\n        <ion-option value="1947">1947</ion-option>\n        <ion-option value="1948">1948</ion-option>\n        <ion-option value="1949">1949</ion-option>\n        <ion-option value="1950">1950</ion-option>\n        <ion-option value="1951">1951</ion-option>\n        <ion-option value="1952">1952</ion-option>\n        <ion-option value="1953">1953</ion-option>\n        <ion-option value="1954">1954</ion-option>\n        <ion-option value="1955">1955</ion-option>\n        <ion-option value="1956">1956</ion-option>\n        <ion-option value="1957">1957</ion-option>\n        <ion-option value="1958">1958</ion-option>\n        <ion-option value="1959">1959</ion-option>\n        <ion-option value="1960">1960</ion-option>\n        <ion-option value="1961">1961</ion-option>\n        <ion-option value="1962">1962</ion-option>\n        <ion-option value="1963">1963</ion-option>\n        <ion-option value="1964">1964</ion-option>\n        <ion-option value="1965">1965</ion-option>\n        <ion-option value="1966">1966</ion-option>\n        <ion-option value="1967">1967</ion-option>\n        <ion-option value="1968">1968</ion-option>\n        <ion-option value="1969">1969</ion-option>\n        <ion-option value="1970">1970</ion-option>\n        <ion-option value="1971">1971</ion-option>\n        <ion-option value="1972">1972</ion-option>\n        <ion-option value="1973">1973</ion-option>\n        <ion-option value="1974">1974</ion-option>\n        <ion-option value="1975">1975</ion-option>\n        <ion-option value="1976">1976</ion-option>\n        <ion-option value="1977">1977</ion-option>\n        <ion-option value="1978">1978</ion-option>\n        <ion-option value="1979">1979</ion-option>\n        <ion-option value="1980">1980</ion-option>\n        <ion-option value="1981">1981</ion-option>\n        <ion-option value="1982">1982</ion-option>\n        <ion-option value="1983">1983</ion-option>\n        <ion-option value="1984">1984</ion-option>\n        <ion-option value="1985">1985</ion-option>\n        <ion-option value="1986">1986</ion-option>\n        <ion-option value="1987">1987</ion-option>\n        <ion-option value="1988">1988</ion-option>\n        <ion-option value="1989">1989</ion-option>\n        <ion-option value="1990">1990</ion-option>\n        <ion-option value="1991">1991</ion-option>\n        <ion-option value="1992">1992</ion-option>\n        <ion-option value="1993">1993</ion-option>\n        <ion-option value="1994">1994</ion-option>\n        <ion-option value="1995">1995</ion-option>\n        <ion-option value="1996">1996</ion-option>\n        <ion-option value="1997">1997</ion-option>\n        <ion-option value="1998">1998</ion-option>\n        <ion-option value="1999">1999</ion-option>\n        <ion-option value="2000">2000</ion-option>\n        <ion-option value="2001">2001</ion-option>\n        <ion-option value="2002">2002</ion-option>\n        <ion-option value="2003">2003</ion-option>\n        <ion-option value="2004">2004</ion-option>\n        <ion-option value="2005">2005</ion-option>\n        <ion-option value="2006">2006</ion-option>\n        <ion-option value="2007">2007</ion-option>\n        <ion-option value="2008">2008</ion-option>\n        <ion-option value="2009">2009</ion-option>\n        <ion-option value="2010">2010</ion-option>\n        <ion-option value="2011">2011</ion-option>\n        <ion-option value="2012">2012</ion-option>\n        <ion-option value="2013">2013</ion-option>\n        <ion-option value="2014">2014</ion-option>\n        <ion-option value="2015">2015</ion-option>\n        <ion-option value="2016">2016</ion-option>\n        <ion-option value="2017">2017</ion-option>\n        <ion-option value="2018">2018</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>Car Registration</ion-label>\n      <ion-input placeholder="Car Plate no." maxlength="13"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>Password</ion-label>\n      <ion-input type="email" placeholder="Enter Password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>Confirm Password</ion-label>\n      <ion-input type="password" placeholder="ReEnter Password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <h3>Liscence</h3>\n      <ion-avatar item-start>\n        <ion-icon class="photo1"  *ngIf="lastImage1==null" name="add-circle" large></ion-icon>\n        <img src="{{pathForImage(lastImage2)}}" class="avatar1" *ngIf="lastImage1!=null">\n      </ion-avatar>\n      <ion-buttons></ion-buttons>\n      <button ion-button (click)="presentActionSheet(2)" >\n        <ion-icon name="camera"></ion-icon>Select Image\n      </button>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <ion-icon class="photo1"  *ngIf="lastImage1==null" name="add-circle" large></ion-icon>\n        <img src="{{pathForImage(lastImage3)}}" class="avatar1" *ngIf="lastImage1!=null">\n      </ion-avatar>\n      <ion-buttons></ion-buttons>\n      <h3>Vehicle Registration</h3>\n      <button ion-button (click)="presentActionSheet(3)">\n        <ion-icon name="camera"></ion-icon>Select Image\n      </button>\n    </ion-item>\n\n\n    <button ion-button type="submit" block>Create Profile</button>\n\n  </form>\n</ion-content>'/*ion-inline-end:"Y:\Angular\Transporter\src\pages\sign-up\sign-up.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], SignUpPage);

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sign_up_sign_up__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_enroute_enroute__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_list__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_nearby_nearby__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_transfer__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_path__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_enqueuedetails_enqueuedetails__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_packagedetail_packagedetail__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_pending_requests_pending_requests__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_all_packages_all_packages__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_sign_up_sign_up__["a" /* SignUpPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_enroute_enroute__["a" /* EnroutePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_nearby_nearby__["a" /* NearbyPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_enqueuedetails_enqueuedetails__["a" /* EnqueuedetailsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_packagedetail_packagedetail__["a" /* PackagedetailPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_pending_requests_pending_requests__["a" /* PendingRequestsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_all_packages_all_packages__["a" /* AllPackagesPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                tabsPlacement: 'top',
            }, {
                links: [
                    { loadChildren: '../pages/enqueuedetails/enqueuedetails.module#EnqueuedetailsPageModule', name: 'EnqueuedetailsPage', segment: 'enqueuedetails', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/enroute/enroute.module#EnroutePageModule', name: 'EnroutePage', segment: 'enroute', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/nearby/nearby.module#NearbyPageModule', name: 'NearbyPage', segment: 'nearby', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/packagedetail/packagedetail.module#PackagedetailPageModule', name: 'PackagedetailPage', segment: 'packagedetail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pending-requests/pending-requests.module#PendingRequestsPageModule', name: 'PendingRequestsPage', segment: 'pending-requests', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/all-packages/all-packages.module#AllPackagesPageModule', name: 'AllPackagesPage', segment: 'all-packages', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_sign_up_sign_up__["a" /* SignUpPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_enroute_enroute__["a" /* EnroutePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_nearby_nearby__["a" /* NearbyPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_enqueuedetails_enqueuedetails__["a" /* EnqueuedetailsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_packagedetail_packagedetail__["a" /* PackagedetailPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_pending_requests_pending_requests__["a" /* PendingRequestsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_all_packages_all_packages__["a" /* AllPackagesPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_path__["a" /* FilePath */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_packagedetail_packagedetail__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pending_requests_pending_requests__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.pages = [
            { title: 'All Packages', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Pending Requests', component: __WEBPACK_IMPORTED_MODULE_6__pages_pending_requests_pending_requests__["a" /* PendingRequestsPage */] },
            { title: 'Package Detail', component: __WEBPACK_IMPORTED_MODULE_5__pages_packagedetail_packagedetail__["a" /* PackagedetailPage */] }
        ];
    }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"Y:\Angular\Transporter\src\app\app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n        <ion-toolbar>\n            <ion-item>\n                <ion-avatar item-start>\n                    <img src="assets/imgs/Borough-market.jpg">\n                </ion-avatar>\n                <h2>Qasim Cheema</h2>\n            </ion-item>\n            <button ion-button round outline icon-left >\n                <ion-icon name="person"></ion-icon> Edit Profile\n            </button>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n        <ion-list>\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n                {{p.title}}\n            </button>\n        </ion-list>\n    </ion-content>\n\n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"Y:\Angular\Transporter\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
], MyApp);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"Y:\Angular\Transporter\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"Y:\Angular\Transporter\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackagedetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PackagedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PackagedetailPage = (function () {
    function PackagedetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PackagedetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PackagedetailPage');
    };
    return PackagedetailPage;
}());
PackagedetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-packagedetail',template:/*ion-inline-start:"Y:\Angular\Transporter\src\pages\packagedetail\packagedetail.html"*/'<!--\n  Generated template for the PackagedetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>Package Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <div class="text-center">\n      <h1 style="text-align: center;">Package Name</h1>\n\n      <h2 style="text-align: center;">Grocery Bag</h2>\n    </div>\n    <ion-card-content>\n      <img src="assets/imgs/advance-card-map-madison.png" />\n      <ion-card-title>\n        Details:\n      </ion-card-title>\n      <p>\n        Grocery Bag containing some pack of chips, some snacks, medicines, oil, noodles,some fruit. Thats it.\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card>\n\n    <ion-card-content>\n      <ion-card-title>\n      </ion-card-title>\n      <ion-list>\n        <ion-item>\n          <ion-icon name="square" item-start></ion-icon>\n          Size\n          <p>Medium</p>\n        </ion-item>\n        <ion-item>\n          <ion-icon name="cash" item-start></ion-icon>\n          Money\n          <p>Rs:700</p>\n        </ion-item>\n        <ion-item>\n          <ion-icon name="car" item-start></ion-icon>\n          Type\n          <p>Bike</p>\n        </ion-item>\n        <ion-item>\n          <ion-icon name="barcode" item-start></ion-icon>\n          Verification Code:\n          <p>819261723</p>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n      <ion-card-header>\n        To:\n      </ion-card-header>\n      <ion-card-content>\n        House 454 D, street 9, askari x, lahore.\n      </ion-card-content>\n    </ion-card>\n  \n    <ion-card>\n      <ion-card-header>\n        From:\n      </ion-card-header>\n      <ion-card-content>\n        Phase 5, food mart, defense, lahore.\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n    <ion-img center width="280" height="280" src="assets/imgs/8012607.png"></ion-img>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"Y:\Angular\Transporter\src\pages\packagedetail\packagedetail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], PackagedetailPage);

//# sourceMappingURL=packagedetail.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map