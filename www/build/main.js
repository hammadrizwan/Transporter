webpackJsonp([1],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/sign-up/sign-up.module": [
		263,
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
webpackAsyncContext.id = 149;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(212);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sign_up_sign_up__ = __webpack_require__(99);
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
            __WEBPACK_IMPORTED_MODULE_7__pages_sign_up_sign_up__["a" /* SignUpPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_sign_up_sign_up__["a" /* SignUpPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_sign_up_sign_up__ = __webpack_require__(99);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_sign_up_sign_up__["a" /* SignUpPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"Y:\Angular\Transporter\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"Y:\Angular\Transporter\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"Y:\Angular\Transporter\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"Y:\Angular\Transporter\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
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
    function SignUpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
    };
    return SignUpPage;
}());
SignUpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sign-up',template:/*ion-inline-start:"Y:\Angular\Transporter\src\pages\sign-up\sign-up.html"*/'<!--\n  Generated template for the SignUpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>SignUp</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="logForm()">\n    <ion-item>\n      <ion-label color="primary" stacked>Name</ion-label>\n      <ion-input   placeholder="Enter Name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>Email</ion-label>\n      <ion-input type="email" placeholder="Enter Email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>CNIC</ion-label>\n      <ion-input   placeholder="Enter Cnic" maxlength="15"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>Phone</ion-label>\n      <ion-input   placeholder="Phone Number +92" maxlength="13"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>Address</ion-label>\n      <ion-textarea  placeholder="Enter Address"></ion-textarea>\n    </ion-item>\n    \n     \n    <ion-item>\n        <ion-label color="primary">Gender</ion-label>\n        <ion-select>\n          <ion-option selected>Date</ion-option>\n          <ion-option value="1">1</ion-option>\n          <ion-option value="2">2</ion-option>\n          <ion-option value="3">3</ion-option>\n          <ion-option value="4">4</ion-option>\n          <ion-option value="5">5</ion-option>\n          <ion-option value="6">6</ion-option>\n          <ion-option value="7">7</ion-option>\n          <ion-option value="8">8</ion-option>\n          <ion-option value="9">9</ion-option>\n          <ion-option value="10">10</ion-option>\n          <ion-option value="11">11</ion-option>\n          <ion-option value="12">12</ion-option>\n          <ion-option value="13">13</ion-option>\n          <ion-option value="14">14</ion-option>\n          <ion-option value="15">15</ion-option>\n          <ion-option value="16">16</ion-option>\n          <ion-option value="17">17</ion-option>\n          <ion-option value="18">18</ion-option>\n          <ion-option value="19">19</ion-option>\n          <ion-option value="20">20</ion-option>\n          <ion-option value="21">21</ion-option>\n          <ion-option value="22">22</ion-option>\n          <ion-option value="23">23</ion-option>\n          <ion-option value="24">24</ion-option>\n          <ion-option value="25">25</ion-option>\n          <ion-option value="26">26</ion-option>\n          <ion-option value="27">27</ion-option>\n          <ion-option value="28">28</ion-option>\n          <ion-option value="29">29</ion-option>\n          <ion-option value="30">30</ion-option>\n          <ion-option value="31">31</ion-option>\n        </ion-select>\n      <ion-select >\n        <ion-option value="f" selected>Month</ion-option>\n        <ion-option value="Janaury">Janaury</ion-option>\n        <ion-option value="February">February</ion-option>\n        <ion-option value="March">March</ion-option>\n        <ion-option value="April">April</ion-option>\n        <ion-option value="May">May</ion-option>\n        <ion-option value="June">June</ion-option>\n        <ion-option value="July">July</ion-option>\n        <ion-option value="August">August</ion-option>\n        <ion-option value="September">September</ion-option>\n        <ion-option value="October">October</ion-option>\n        <ion-option value="November">November</ion-option>\n        <ion-option value="December">December</ion-option>\n      </ion-select>\n      <ion-select >\n        <ion-option value="f" selected>Year</ion-option>\n        <ion-option value="1947">1947</ion-option>\n        <ion-option value="1948">1948</ion-option>\n        <ion-option value="1949">1949</ion-option>\n        <ion-option value="1950">1950</ion-option>\n        <ion-option value="1951">1951</ion-option>\n        <ion-option value="1952">1952</ion-option>\n        <ion-option value="1953">1953</ion-option>\n        <ion-option value="1954">1954</ion-option>\n        <ion-option value="1955">1955</ion-option>\n        <ion-option value="1956">1956</ion-option>\n        <ion-option value="1957">1957</ion-option>\n        <ion-option value="1958">1958</ion-option>\n        <ion-option value="1959">1959</ion-option>\n        <ion-option value="1960">1960</ion-option>\n        <ion-option value="1961">1961</ion-option>\n        <ion-option value="1962">1962</ion-option>\n        <ion-option value="1963">1963</ion-option>\n        <ion-option value="1964">1964</ion-option>\n        <ion-option value="1965">1965</ion-option>\n        <ion-option value="1966">1966</ion-option>\n        <ion-option value="1967">1967</ion-option>\n        <ion-option value="1968">1968</ion-option>\n        <ion-option value="1969">1969</ion-option>\n        <ion-option value="1970">1970</ion-option>\n        <ion-option value="1971">1971</ion-option>\n        <ion-option value="1972">1972</ion-option>\n        <ion-option value="1973">1973</ion-option>\n        <ion-option value="1974">1974</ion-option>\n        <ion-option value="1975">1975</ion-option>\n        <ion-option value="1976">1976</ion-option>\n        <ion-option value="1977">1977</ion-option>\n        <ion-option value="1978">1978</ion-option>\n        <ion-option value="1979">1979</ion-option>\n        <ion-option value="1980">1980</ion-option>\n        <ion-option value="1981">1981</ion-option>\n        <ion-option value="1982">1982</ion-option>\n        <ion-option value="1983">1983</ion-option>\n        <ion-option value="1984">1984</ion-option>\n        <ion-option value="1985">1985</ion-option>\n        <ion-option value="1986">1986</ion-option>\n        <ion-option value="1987">1987</ion-option>\n        <ion-option value="1988">1988</ion-option>\n        <ion-option value="1989">1989</ion-option>\n        <ion-option value="1990">1990</ion-option>\n        <ion-option value="1991">1991</ion-option>\n        <ion-option value="1992">1992</ion-option>\n        <ion-option value="1993">1993</ion-option>\n        <ion-option value="1994">1994</ion-option>\n        <ion-option value="1995">1995</ion-option>\n        <ion-option value="1996">1996</ion-option>\n        <ion-option value="1997">1997</ion-option>\n        <ion-option value="1998">1998</ion-option>\n        <ion-option value="1999">1999</ion-option>\n        <ion-option value="2000">2000</ion-option>\n        <ion-option value="2001">2001</ion-option>\n        <ion-option value="2002">2002</ion-option>\n        <ion-option value="2003">2003</ion-option>\n        <ion-option value="2004">2004</ion-option>\n        <ion-option value="2005">2005</ion-option>\n        <ion-option value="2006">2006</ion-option>\n        <ion-option value="2007">2007</ion-option>\n        <ion-option value="2008">2008</ion-option>\n        <ion-option value="2009">2009</ion-option>\n        <ion-option value="2010">2010</ion-option>\n        <ion-option value="2011">2011</ion-option>\n        <ion-option value="2012">2012</ion-option>\n        <ion-option value="2013">2013</ion-option>\n        <ion-option value="2014">2014</ion-option>\n        <ion-option value="2015">2015</ion-option>\n        <ion-option value="2016">2016</ion-option>\n        <ion-option value="2017">2017</ion-option>\n        <ion-option value="2018">2018</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>Car Registration</ion-label>\n      <ion-input   placeholder="Car Plate no." maxlength="13"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>Password</ion-label>\n      <ion-input type="email" placeholder="Enter Password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>Confirm Password</ion-label>\n      <ion-input type="password" placeholder="ReEnter Password"></ion-input>\n    </ion-item>\n    \n   \n    <button ion-button type="submit" block>Create Profile</button>\n    \n  </form>\n</ion-content>\n'/*ion-inline-end:"Y:\Angular\Transporter\src\pages\sign-up\sign-up.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], SignUpPage);

//# sourceMappingURL=sign-up.js.map

/***/ })

},[193]);
//# sourceMappingURL=main.js.map