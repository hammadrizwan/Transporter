webpackJsonp([14],{

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllPackagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__packagedetail_packagedetail__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AllPackagesPage = (function () {
    function AllPackagesPage(navCtrl, navParams, http, storage, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.responseData = [];
        this.skips = 0;
        this.storage.get('ID').then(function (val) {
            _this.ID = val;
            console.log("va" + val);
            console.log(_this.ID);
            _this.http.get('http://localhost:5000/allpackages', { params: { 'TransporterID': _this.ID, 'skips': _this.skips } })
                .map(function (res) { return res.json(); }).subscribe(function (response) {
                response.content.map(function (item) {
                    _this.responseData.push(item);
                });
                console.log(response.content);
            });
        }, function (err) {
            console.log('error');
        });
    }
    AllPackagesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllPackagesPage');
    };
    AllPackagesPage.prototype.openPackageDetailsPage = function (i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__packagedetail_packagedetail__["a" /* PackagedetailPage */], this.responseData[i]);
    };
    AllPackagesPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.infiniteScroll = infiniteScroll;
        this.skips = this.skips + 10;
        var length = this.responseData.length;
        setTimeout(function () {
            _this.http.get('http://localhost:5000/allpackages', { params: { 'TransporterID': _this.ID, 'skips': _this.skips } }).map(function (res) { return res.json(); }).subscribe(function (response) {
                response.content.map(function (item) {
                    _this.responseData.push(item);
                });
                if (response.content == '') {
                    console.log("End reached");
                }
            }, function (err) {
                console.log('error');
            });
            // for (let i = 0; i < 30; i++) {
            //   this.items.push( this.items.length );
            // }
            if (length == _this.responseData.length) {
                _this.presentErrorAlert("There are no more packages left to show");
                infiniteScroll.enable(false);
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 300);
    };
    AllPackagesPage.prototype.presentErrorAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: text,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    AllPackagesPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        this.responseData = [];
        this.skips = 0;
        setTimeout(function () {
            console.log('Async operation has ended');
            _this.storage.get('ID').then(function (val) {
                _this.ID = val;
                console.log("va" + val);
                console.log(_this.ID);
                _this.http.get('http://localhost:5000/allpackages', { params: { 'TransporterID': _this.ID, 'skips': _this.skips } })
                    .map(function (res) { return res.json(); }).subscribe(function (response) {
                    response.content.map(function (item) {
                        _this.responseData.push(item);
                    });
                    console.log(response.content);
                });
            }, function (err) {
                console.log('error');
            });
            refresher.complete();
            if (_this.infiniteScroll != null) {
                _this.infiniteScroll.enable(true);
            }
        }, 2000);
    };
    return AllPackagesPage;
}());
AllPackagesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-all-packages',template:/*ion-inline-start:"D:\dnd\Transporter\src\pages\all-packages\all-packages.html"*/'<!--\n\n  Generated template for the AllPackagesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n  \n\n-->\n\n\n\n<ion-header>\n\n  <ion-navbar class="colornavbar">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Drive and Deliver</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="background1">\n\n  <!-- <ion-card *ngFor="let item of responseData, let i= index">\n\n    <ion-fab right>\n\n      <button class="buttoncolor" ion-fab>\n\n        <ion-icon name="pin"></ion-icon>\n\n      </button>\n\n      <img src="assets/imgs/advance-card-map-madison.png">\n\n\n\n  \n\n\n\n    <ion-item>\n\n      <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n\n      <h2>To:</h2>\n\n      <p>{{item.PickAddress}}</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon class="ioniconcolor1" name="radio-button-off" item-left large></ion-icon>\n\n      <h2>From:</h2>\n\n      <p>{{item.DestAddress}}</p>\n\n    </ion-item>\n\n\n\n    <ion-row>\n\n      <ion-col col-4>\n\n        <ion-item>\n\n          <h2></h2>\n\n          <p>RS:2500</p>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <ion-item>\n\n          <label>Package Size:</label>\n\n          <h2 ion-text>{{item.PackageSize}}</h2>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <ion-item>\n\n          <ion-icon class="ioniconcolor1" name="md-car"></ion-icon>\n\n          <p>{{item.TransportType}}</p>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n    <button ion-button full class="buttonitem" (click)="openPackageDetailsPage(i)">\n\n      Accept\n\n    </button>\n\n\n\n\n\n  </ion-card> -->\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n      \n\n      <ion-refresher-content\n\n      pullingIcon="arrow-dropdown"\n\n      pullingText="Pull to refresh"\n\n      refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n</ion-refresher>\n\n  <ion-card *ngFor="let item of responseData, let i= index">\n\n      <ion-fab right>\n\n        <button class="buttoncolor" ion-fab>\n\n          <ion-icon name="pin"></ion-icon>\n\n        </button>\n\n      </ion-fab>\n\n      <ion-thumbnail>\n\n      <img class="imagePackage" src="http://localhost:5000/uploads/{{item.PImage}}" />\n\n    </ion-thumbnail>\n\n      <ion-item >\n\n        <h2 >Fare</h2>\n\n        <ion-note item-end class="ioniconcolor1" style="font-size: 17px">{{item.Fare}}/-</ion-note>\n\n      </ion-item>\n\n      <ion-item >\n\n        <h2 >Transport Type:</h2>\n\n        <ion-note item-end class="ioniconcolor1"> {{item.VehicleType}} </ion-note>\n\n      </ion-item>\n\n      <ion-item >\n\n        <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n\n        <h2 class="ioniconcolor1">To: {{item.DestAddress}}\n\n        </h2>\n\n      </ion-item >\n\n  \n\n      <ion-item >\n\n        <ion-icon class="ioniconcolor1" name="radio-button-off" item-left large></ion-icon>\n\n        <h2 class="ioniconcolor1">From: {{item.PickAddress}}\n\n        </h2>\n\n      </ion-item>\n\n  \n\n      <button ion-button full class="buttonitem" (click)="openPackageDetailsPage(i)">\n\n        View Details\n\n      </button>\n\n    </ion-card>\n\n  \n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..."></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"D:\dnd\Transporter\src\pages\all-packages\all-packages.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], AllPackagesPage);

//# sourceMappingURL=all-packages.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnqueuedetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enqueue_enqueue__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
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
    function EnqueuedetailsPage(navCtrl, navParams, geolocation, zone, loadingCtrl, platform, http, alertCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.zone = zone;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.cancelledPackage = false; //the packages has been not cancelled hence set to false
        this.item = this.navParams.data; //get the package data from navParameters
        console.log(this.item.Status);
        if (this.item.Status == "Awaiting") {
            this.inProgress = false; //pacakges is yet to be picked up from source point
            this.cancellationOption = true; //cancellation option is available
        }
        else {
            this.inProgress = true; //the status in enroute and the delivery is in progress
            this.cancellationOption = false; //the package cannot be cancelled
        }
        this.setData().then(function () {
            _this.createMap(); //initialise map
            _this.findPath(); // find the path from user to current destination(source or destination)
            /* An observable is created below which runs after ever 3 seconds and checks if the current postion of the user
            has changes of not based on that it refreshes the map*/
            _this.observer = __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].interval(3000).subscribe(function () {
                _this.geolocation.getCurrentPosition().then(function (position) {
                    //console.log("ALoha" + position.coords.latitude, position.coords.longitude);
                    var newPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude); //get current position
                    if (_this.myPosition != newPosition) {
                        if (_this.marker1 != null) {
                            _this.marker1.setMap(null); //remove marker for current location
                        }
                        _this.marker1 = new google.maps.Marker({
                            map: _this.map,
                            position: _this.myPosition,
                            draggable: false,
                        });
                    }
                }),
                    function (error) {
                        console.log(error); //show error if any with geolocation
                    };
            });
        });
    }
    EnqueuedetailsPage.prototype.setData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.Source = new google.maps.LatLng(_this.item.SourceLatitude, _this.item.SourceLongitude); //set local source variable
            console.log(_this.Source);
            _this.Destination = new google.maps.LatLng(_this.item.DestinationLatitude, _this.item.DestinationLongitude); //set locatl destionation variable
            console.log(_this.Destination);
            setTimeout(function () {
                console.log("yolo");
                resolve(); //resolve the promise
            }, 1000); //wait just in case
        });
    };
    EnqueuedetailsPage.prototype.createMap = function () {
        this.map = new google.maps.Map(document.getElementById('mapdetail'), {
            zoom: 12,
            center: this.Source
        });
    };
    EnqueuedetailsPage.prototype.findPath = function () {
        var _this = this;
        var directionsService = new google.maps.DirectionsService;
        var rendererOptions = {
            preserveViewport: true //stop from zoom adjustment when the path is drawn
        };
        var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions); //direction display object
        directionsDisplay.setMap(this.map); //remove current directions shown
        console.log("outprogresso");
        this.geolocation.getCurrentPosition().then(function (position) {
            console.log("ALoha" + position.coords.latitude, position.coords.longitude);
            _this.myPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            if (_this.inProgress) {
                console.log("inprogresso");
                directionsService.route({
                    origin: _this.myPosition,
                    destination: _this.Destination,
                    travelMode: 'DRIVING'
                }, function (response, status) {
                    if (status === 'OK') {
                        // for (var i = 0; i < response.routes.length; i++) {
                        //   directionsDisplay.setDirections(response);
                        //   // Tell the DirectionsRenderer which route to display
                        //   directionsDisplay.setRouteIndex(i);
                        //   //directionsDisplay.setMap(this.map);
                        //   console.log(response.routes[i].legs[0].distance.value / 1000);
                        //}
                        console.log(response.routes[0].legs[0].distance.value / 1000);
                        directionsDisplay.setDirections(response); //draw directions
                    }
                    else {
                        window.alert('Directions request failed due to ' + status); //error show
                    }
                });
            }
            else {
                console.log("noint progresso");
                directionsService.route({
                    origin: _this.myPosition,
                    destination: _this.Source,
                    travelMode: google.maps.DirectionsTravelMode.DRIVING,
                    provideRouteAlternatives: true
                }, function (response, status) {
                    if (status === 'OK') {
                        // for (var i = 0; i < response.routes.length; i++) {
                        //   var dr = new google.maps.DirectionsRenderer();
                        //   directionsDisplay.setDirections(response);
                        //   // Tell the DirectionsRenderer which route to display
                        //   directionsDisplay.setRouteIndex(i);
                        //   //directionsDisplay.setMap(this.map);
                        //   console.log(response.routes[i].legs[0].distance.value / 1000);
                        //  }
                        console.log(response.routes[0].legs[0].distance.value / 1000);
                        directionsDisplay.setDirections(response); //draw directions
                    }
                    else {
                        window.alert('Directions request failed due to ' + status); //show error
                    }
                });
            }
        }),
            function (error) {
                console.log(error); //show any error with geolocation
            };
    };
    EnqueuedetailsPage.prototype.confirmPickUp = function (PackageID) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm PickUp',
            message: 'You have picked up the package?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        //in case of no do nothing and remove prompt
                    }
                },
                {
                    text: 'Confirm',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            content: 'Waiting for server response...',
                        });
                        loading.present(); //present notification to show user that request is bieng processed
                        _this.storage.get('ID').then(function (val) {
                            _this.ID = val;
                            var requestData = {
                                'PackageID': PackageID,
                                'TransporterID': _this.ID,
                            };
                            /*put request send to update package status from awaiting to intransit*/
                            _this.http.put('http://localhost:5000/confirmPickUp', JSON.stringify(requestData)).map(function (res) { return res.json(); }).subscribe(function (response) {
                                if (response['status'] == 'success') {
                                    loading.dismiss();
                                    _this.presentNotification("Pick Up confirmed", "picked up");
                                    _this.inProgress = true; //in progress set to true shows the input field to enter key and verify the PIN
                                    _this.cancellationOption = false; //cancell package button is now hidden from view
                                    _this.findPath(); //new route from the user to the destination instead of the source of the package
                                }
                                else {
                                    loading.dismiss();
                                    _this.presentNotification("testing", "Failed"); // if the request has failed
                                }
                            }, function (err) {
                                console.log('error');
                                console.log(err); //show any error with http request
                            });
                        });
                    }
                }
            ]
        });
        alert.present(); //present the alert created above to the user
    };
    EnqueuedetailsPage.prototype.sendDelivertConfirmation = function (PackageID) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Waiting for token validation...',
        });
        loading.present(); //present the loading
        if (/^\d{10}$/.test(this.token)) {
            // setTimeout(() => {
            //   this.storage.get('ID').then((val) => {
            //     this.ID = val;
            //     let Userdata = {
            //       'ID': this.ID,
            //       'token': this.token,
            //       //'Token':this.Token,
            //     };
            /*update package status to completed */
            this.http.get('http://localhost:5000/deliveryCompleted', { params: { 'PackageID': PackageID, 'token': this.token } }).map(function (res) { return res.json(); }).subscribe(function (response) {
                if (response.content == 'success') {
                    loading.dismiss();
                    _this.presentNotification("The Package delivery is completed", "Success"); //tell the user that delivery has been completed
                    setTimeout(function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__enqueue_enqueue__["a" /* EnqueuePage */]); //reroute to previous page
                    }, 400);
                }
                else {
                    loading.dismiss();
                    _this.presentNotification("Token Mismatch", "Failed"); //wrong token was entered
                }
            }, function (err) {
                console.log('error');
            });
            //   });
            // }, 300);
        }
        else {
            loading.dismiss();
            this.presentNotification("Token consists of only 10 digit", "Re Check Token");
        }
    };
    EnqueuedetailsPage.prototype.cancelPackage = function (PackageID) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Waiting for token validation...',
        });
        //loading.present();
        this.cancelledPackage = true;
        this.cancellationOption = false;
        // setTimeout(() => {
        this.storage.get('ID').then(function (val) {
            _this.ID = val;
            var requestData = {
                'PackageID': PackageID,
                'TransporterID': _this.ID,
            };
            _this.http.put('http://localhost:5000/cancelPackage', JSON.stringify(requestData)).map(function (res) { return res.json(); }).subscribe(function (response) {
                if (response['status'] == 'success') {
                    loading.dismiss();
                    _this.presentNotification("Package Cancelled", "Cancelled"); //tell the user that the package has been cancelled
                    setTimeout(function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__enqueue_enqueue__["a" /* EnqueuePage */]); //reroute to previous page
                    }, 400);
                }
                else {
                    loading.dismiss();
                    _this.presentNotification("testing", "Failed"); //tell the user the request has been denied
                }
            }, function (err) {
                console.log('error');
            });
        });
        // }, 300);
    };
    EnqueuedetailsPage.prototype.ionViewWillLeave = function () {
        console.log("Looks like I'm about to leave :(");
        this.observer.unsubscribe(); //unsubsribe to geolocation tracking
    };
    EnqueuedetailsPage.prototype.presentNotification = function (text, header) {
        var alert = this.alertCtrl.create({
            title: header,
            subTitle: text,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    EnqueuedetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnqueuedetailsPage');
    };
    return EnqueuedetailsPage;
}());
EnqueuedetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-enqueuedetails',template:/*ion-inline-start:"D:\dnd\Transporter\src\pages\enqueuedetails\enqueuedetails.html"*/'<!--\n\n  Generated template for the EnqueuedetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Enqueue Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="background1">\n\n  <h2 *ngIf="cancelledPackage">Package Cancelled</h2>\n\n  <div *ngIf="inProgress">\n\n    <ion-card>\n\n      <ion-item>\n\n        <ion-icon class="iconsize" name="code" item-start></ion-icon>\n\n        <ion-label color="danger" stacked>Verification Code</ion-label>\n\n        <ion-input [(ngModel)]="token" placeholder="XXXXXXX"></ion-input>\n\n      </ion-item>\n\n    </ion-card>\n\n    <button ion-button full class="buttonitemblue" (click)="sendDelivertConfirmation(item.PackageID)">\n\n        Send Request\n\n      </button>\n\n    \n\n  </div>\n\n  <button ion-button full *ngIf="!inProgress" class="buttonitemblue" (click)="confirmPickUp(item.PackageID)">\n\n      Confirm Package Pickup\n\n    </button>\n\n  <ion-card id="mapdetail" #mapdetail></ion-card>\n\n  <ion-card><button class="buttonitemblue" ion-button full (click)=findPath()>Find Path</button></ion-card>\n\n  <ion-card>\n\n\n\n    <ion-item>\n\n      <h2>Package Name:</h2>\n\n      <ion-note class="ioniconcolor1" item-end>{{item.PackageName}} </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-note class="ioniconcolor1">{{item.PackageDesc}}</ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <h2>Fare</h2>\n\n      <ion-note class="ioniconcolor1" item-end>{{item.Fare}}/-</ion-note>\n\n    </ion-item>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-item>\n\n      <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n\n      <ion-note class="ioniconcolor1">To: {{item.DestAddress}}\n\n      </ion-note>\n\n    </ion-item>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-item>\n\n      <ion-icon class="ioniconcolor1" name="radio-button-off" item-left large></ion-icon>\n\n      <ion-note class="ioniconcolor1">From: {{item.PickAddress}}\n\n      </ion-note>\n\n    </ion-item>\n\n  </ion-card>\n\n  <!--ADD NG IF TO CHECK STATUS UNTILL THE PACKAGE IS PICKED UP else show cancelation button-->\n\n  <ion-card>\n\n    <img class="imagePackage" src="http://localhost:5000/uploads/{{item.PImage}}" />\n\n  </ion-card>\n\n  <div *ngIf="cancellationOption">\n\n    <button ion-button full class="buttonitem" (click)="cancelPackage(item.PackageID)">\n\n      Cancel Package\n\n    </button>\n\n  </div>\n\n  \n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\dnd\Transporter\src\pages\enqueuedetails\enqueuedetails.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
], EnqueuedetailsPage);

// findPath() {
//   this.map = new google.maps.Map(document.getElementById('mapdetail'), {
//     zoom: 7,
//     center: { lat: 31.4826352, lng: 74.0712721 }
//   });
//   this.observer = Observable.interval(5000).subscribe(() => {//update timer to 20 seconds
//     this.geolocation.getCurrentPosition().then(
//       (position) => {
//         console.log(position.coords.latitude, position.coords.longitude);
//         let myPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//         console.log(JSON.parse(JSON.stringify(myPosition)));
//         let directionsService = new google.maps.DirectionsService;
//         let directionsDisplay = new google.maps.DirectionsRenderer;
//         if (this.marker1 != null && this.marker2 != null) {
//           this.marker1.setMap(null)
//           this.marker2.setMap(null)
//           console.log("hello");
//         }
//         directionsDisplay.setMap(this.map);
//         directionsService.route({
//           origin: myPosition,
//           destination: this.Destination,
//           travelMode: 'DRIVING'
//         }, function (response, status) {
//           if (status === 'OK') {
//             directionsDisplay.setDirections(response);
//           } else {
//             window.alert('Directions request failed due to ' + status);
//           }
//         });
//       }),
//       (error) => {
//         console.log(error);
//       }
//   });
// } 
//# sourceMappingURL=enqueuedetails.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveredPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__packagedetail_packagedetail__ = __webpack_require__(47);
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
 * Generated class for the DeliveredPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DeliveredPage = (function () {
    function DeliveredPage(navCtrl, navParams, storage, alertCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.responseDataDelivered = []; //to hold packages data
        this.skips = 0; //initialise the skips to 0
        this.storage.get('ID').then(function (val) {
            _this.ID = val;
            _this.http.get('http://localhost:5000/deliveredPackges', { params: { 'TransporterID': _this.ID, 'skips': _this.skips } })
                .map(function (res) { return res.json(); }).subscribe(function (response) {
                response.content.map(function (item) {
                    _this.responseDataDelivered.push(item); //insert packages into array
                });
                console.log(response.content);
            });
        }, function (err) {
            console.log('error');
        });
    }
    DeliveredPage.prototype.openPackageDetailsPage = function (i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__packagedetail_packagedetail__["a" /* PackagedetailPage */], this.responseDataDelivered[i]); //open package details page
    };
    DeliveredPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DeliveredPage');
    };
    DeliveredPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.infiniteScroll = infiniteScroll; //create infinitescroll object
        this.skips += 10; //skip the skip+10 messages
        var length = this.responseDataDelivered.length; //to check if no more packages are available
        setTimeout(function () {
            _this.http.get('http://localhost:5000/deliveredPackges', { params: { 'TransporterID': _this.ID, 'skips': _this.skips } }).map(function (res) { return res.json(); }).subscribe(function (response) {
                response.content.map(function (item) {
                    _this.responseDataDelivered.push(item); //insert packages into list to be displayed
                });
            }, function (err) {
                console.log(err); //if http returns an error show it
            });
            // for (let i = 0; i < 30; i++) {
            //   this.items.push( this.items.length );
            // }
            if (length == _this.responseDataDelivered.length) {
                _this.presentErrorAlert("There are no more packages left to show");
                infiniteScroll.enable(false);
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 300);
    };
    DeliveredPage.prototype.presentErrorAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: text,
            buttons: ['Dismiss'] //dismiss alert shown
        });
        alert.present(); //present alert to user
    };
    DeliveredPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        this.responseDataDelivered = []; //reset the array data to empty
        this.skips = 0; //reset the number of packages already served
        console.log('Async operation has ended');
        this.storage.get('ID').then(function (val) {
            _this.ID = val;
            console.log("va" + val);
            console.log(_this.ID);
            _this.http.get('http://localhost:5000/deliveredPackges', { params: { 'TransporterID': _this.ID, 'skips': _this.skips } })
                .map(function (res) { return res.json(); }).subscribe(function (response) {
                response.content.map(function (item) {
                    _this.responseDataDelivered.push(item);
                });
                console.log(response.content);
            });
        }, function (err) {
            console.log(err); //if error with http request log
        });
        refresher.complete(); //complete refreshing process and dismiss loading 
        if (this.infiniteScroll != null) {
            this.infiniteScroll.enable(true); //reset infinite scroll if turned off
        }
    };
    return DeliveredPage;
}());
DeliveredPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-delivered',template:/*ion-inline-start:"D:\dnd\Transporter\src\pages\delivered\delivered.html"*/'<!--\n\n  Generated template for the DeliveredPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar class="colornavbar">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Delivered Packages</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-card *ngFor="let item of responseDataDelivered, let i= index">\n\n    <ion-item>\n\n      <h2>Fare</h2>\n\n      <ion-note item-end class="ioniconcolor1" style="font-size: 17px">{{item.Fare}}/-</ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <h2>Transport Type:</h2>\n\n      <ion-note item-end class="ioniconcolor1"> {{item.VehicleType}} </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n\n      <h2 class="ioniconcolor1">To: {{item.PackageName}}\n\n      </h2>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon class="ioniconcolor1" name="radio-button-off" item-left large></ion-icon>\n\n      <h2 class="ioniconcolor1">From: {{item.PackageDesc}}\n\n      </h2>\n\n    </ion-item>\n\n\n\n  </ion-card>\n\n\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..."></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\dnd\Transporter\src\pages\delivered\delivered.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
], DeliveredPage);

//# sourceMappingURL=delivered.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnroutePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__packagedetail_packagedetail__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(15);
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
    function EnroutePage(loadingCtrl, toastCtrl, app, navCtrl, zone, platform, alertCtrl, storage, actionSheetCtrl, geolocation, http) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.app = app;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.actionSheetCtrl = actionSheetCtrl;
        this.geolocation = geolocation;
        this.http = http;
        this.addressElement = null;
        this.addressElement1 = null;
        this.Source = null;
        this.Destination = null;
        this.responseDataEnroute = [];
        this.listSearch = '';
        this.packageMarkers = [];
        this.search = false;
        this.switch = "map";
        this.regionals = [];
        this.radiusCircle = 2000; //radius in which to find the packages
    }
    EnroutePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad EnroutePage');
        this.platform.ready().then(function () { return _this.loadMaps(); });
        this.checkIfLocationChange();
    };
    EnroutePage.prototype.openPackageDetailsPage = function (i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__packagedetail_packagedetail__["a" /* PackagedetailPage */], this.responseDataEnroute[i]);
    };
    // doRefresh(refresher) {//pull to refersh
    //   console.log('Begin async operation', refresher);
    //   this.responseDataEnroute = [];//remove all packages from display
    //   for (let i = 0; i < this.packageMarkers.length; i++) {//remove all package markers
    //     this.packageMarkers[i].setMap(null);
    //   }
    //   if (this.marker1 != null && this.marker2 != null) {
    //     this.findPackages();//find the packages and display them
    //   }
    //   refresher.complete();//complete the refreshing process
    // }
    EnroutePage.prototype.ionViewDidLeave = function () {
        this.observer.unsubscribe(); //unsubscribe to any changes made to markers
    };
    EnroutePage.prototype.checkIfLocationChange = function () {
        var _this = this;
        var input = document.getElementById('textDisplay'); //get the div in which new position text is to be shown
        this.observer = __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].interval(2000).subscribe(function () {
            if (_this.marker1 != null) {
                if (_this.Source != _this.marker1.getPosition()) {
                    _this.Source = _this.marker1.getPosition(); //set source to new postion
                    var geocoder = new google.maps.Geocoder; //reverse geocoding to get location text
                    geocoder.geocode({ 'location': _this.Source }, function (results, status) {
                        if (status === 'OK') {
                            if (results[0]) {
                                input.innerText = results[0].formatted_address; //set text in div
                                //map.setZoom(11);
                                // let input = document.getElementById('s1');
                                //infowindow.setContent(results[0].formatted_address);
                                //infowindow.open(map, marker123);
                            }
                        }
                    });
                }
            }
            if (_this.marker2 != null) {
                if (_this.Destination != _this.marker2.getPosition()) {
                    _this.Destination = _this.marker2.getPosition(); //set destination to new postion
                    var geocoder = new google.maps.Geocoder; //reverse geocoding to get location text
                    geocoder.geocode({ 'location': _this.Destination }, function (results, status) {
                        if (status === 'OK') {
                            if (results[0]) {
                                input.innerText = results[0].formatted_address;
                                //map.setZoom(11);
                                // let input = document.getElementById('s1');  
                                //infowindow.setContent(results[0].formatted_address);
                                //infowindow.open(map, marker123);  
                            }
                        }
                    });
                }
            }
        });
    };
    EnroutePage.prototype.loadMaps = function () {
        if (!!google) {
            this.initializeMap(); //inititalise the map
            this.initAutocomplete(); //create the autocomplete for searchbars
        }
        else {
            this.errorAlert('Error', 'Something went wrong with the Internet Connection. Please check your Internet.');
        }
    };
    EnroutePage.prototype.errorAlert = function (title, message) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        _this.loadMaps();
                    }
                }
            ]
        });
        alert.present();
    };
    EnroutePage.prototype.initializeMap = function () {
        var mapEle = this.mapElement.nativeElement; //get map div
        this.map = new google.maps.Map(mapEle, {
            zoom: 12,
            center: { lat: 31.4826352, lng: 74.0712721 },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDoubleClickZoom: false,
            disableDefaultUI: true,
            zoomControl: true,
            scaleControl: true,
        });
        this.getCurrentPosition(); //set the default location at the users current position
    };
    EnroutePage.prototype.getCurrentPosition = function () {
        var _this = this;
        var locationOptions = { timeout: 10000 };
        this.geolocation.getCurrentPosition(locationOptions).then(function (position) {
            console.log(position.coords.latitude, position.coords.longitude);
            _this.Source = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var options = {
                center: _this.Source,
                zoom: 12
            };
            _this.map.setOptions(options); //set new options to map
            _this.marker1 = new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: _this.Source,
                draggable: true
            });
            console.log("this is the lat" + _this.marker1.getPosition().lat());
            console.log("this is the lng" + _this.marker1.getPosition().lng());
        }),
            function (error) {
                //     this.loading.dismiss().then(() => {
                //     this.showToast('Location not found. Please enable your GPS!');
                //     this.loading.dismiss();
                //     console.log(error);
                //   });
                console.log(error);
            };
    };
    EnroutePage.prototype.initAutocomplete = function () {
        var _this = this;
        this.addressElement1 = this.searchbar1.nativeElement.querySelector('.searchbar-input'); //get the search bar DOM
        this.createAutocomplete(this.addressElement1).subscribe(function (location) {
            console.log('First Search', location);
            _this.Source = new google.maps.LatLng(location.lat(), location.lng()); //Source marker location
            var options = {
                center: _this.Source,
                zoom: 13
            };
            _this.map.setOptions(options); //reset zoom and focus to source marker using options above
            _this.marker1.setMap(null); //remove previous marker
            // this.addMarker(this.Origin, "Origin",this.marker1);
            _this.marker1 = new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: _this.Source,
                draggable: true
            });
            _this.addInfoWindow(_this.marker1, "Origin"); //info shown when marker is clicked
        });
        this.addressElement = this.searchbar.nativeElement.querySelector('.searchbar-input'); //subscribe to observable that is returned
        this.createAutocomplete(this.addressElement).subscribe(function (location) {
            console.log('Second Search', location);
            _this.Destination = new google.maps.LatLng(location.lat(), location.lng()); //Destination marker location
            var options = {
                center: _this.Destination,
                zoom: 13
            };
            _this.map.setOptions(options); //reset zoom and focus to Destination marker using options abov
            // this.addMarker(this.Dest, "Destination",this.marker2  );
            _this.marker2 = new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: _this.Destination,
                draggable: true
            });
            _this.addInfoWindow(_this.marker2, "Destination"); //info shown when marker is clicked
        });
    };
    EnroutePage.prototype.findPath = function () {
        if (this.marker2 != null) {
            this.responseDataEnroute = [];
            for (var i = 0; i < this.packageMarkers.length; i++) {
                this.packageMarkers[i].setMap(null);
            }
            var directionsService = new google.maps.DirectionsService;
            var directionsDisplay_1 = new google.maps.DirectionsRenderer;
            this.map = new google.maps.Map(document.getElementById('mapEnroute'), {
                zoom: 9,
                center: { lat: 31.4826352, lng: 74.0712721 }
            }); //new map
            directionsDisplay_1.setMap(this.map); //set direction diplay method to show on this map
            directionsService.route({
                origin: this.Source,
                destination: this.Destination,
                travelMode: 'DRIVING'
            }, function (response, status) {
                if (status === 'OK') {
                    directionsDisplay_1.setDirections(response); //diplay directions
                }
                else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
            this.cityCircle1 = new google.maps.Circle({
                strokeColor: '#033860',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#2a4255',
                fillOpacity: 0.35,
                map: this.map,
                center: this.Destination,
                radius: this.radiusCircle,
            });
            this.cityCircle2 = new google.maps.Circle({
                strokeColor: '#033860',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#2a4255',
                fillOpacity: 0.35,
                map: this.map,
                center: this.Source,
                radius: this.radiusCircle,
            });
            //this.loading.present();
            this.findPackages(); //find and diplay the packages
            //this.loading.dismiss();//dismiss loading display
        }
        else {
            this.errorAlert("Destiantion Missing", "Please enter destination address");
        }
    };
    EnroutePage.prototype.findPackages = function () {
        var _this = this;
        var Src = JSON.parse(JSON.stringify(this.Source)); //convert Source to string and then parse it in array format
        var Des = JSON.parse(JSON.stringify(this.Destination)); //convert Destination to string and then parse it in array format
        var SourceLat = Src["lat"];
        var SourceLng = Src["lng"];
        var DestinationLat = Des["lat"];
        var DestinationLng = Des["lng"];
        this.responseDataEnroute = [];
        this.storage.get('ID').then(function (val) {
            _this.ID = val;
            _this.http.get('http://localhost:5000/enroutepackages', { params: { 'TransporterID': _this.ID, 'SourceLat': SourceLat, 'SourceLng': SourceLng, 'DestinationLat': DestinationLat, 'DestinationLng': DestinationLng, 'Radius': _this.radiusCircle } }).map(function (res) { return res.json(); }).subscribe(function (response) {
                response.content.map(function (item) {
                    _this.responseDataEnroute.push(item); //add item to diplay
                    var packageSource = new google.maps.LatLng(Number(item['SourceLatitude']), Number(item['SourceLongitude'])); //source packge  location
                    var packageDestination = new google.maps.LatLng(Number(item['DestinationLatitude']), Number(item['DestinationLongitude'])); //destination package location
                    _this.addPackageMarker(packageSource, packageDestination, _this.responseDataEnroute.indexOf(item), item['PackageName']); //drop package marker
                });
            });
        }, function (err) {
            console.log('error');
        });
    };
    EnroutePage.prototype.createAutocomplete = function (addressEl) {
        var autocomplete = new google.maps.places.Autocomplete(addressEl);
        autocomplete.bindTo('bounds', this.map);
        return new __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"](function (sub) {
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                var place = autocomplete.getPlace();
                console.log(place.formatted_address);
                //this.LocationText=autocomplete.gm_accessors_.place.fd.formattedPrediction;
                if (!place) {
                    sub.error({
                        message: 'Autocomplete returned place with no geometry'
                    });
                }
                else {
                    //console.log('Search', place.geometry.locat;
                    console.log('Search Lat', place.geometry.location.lat());
                    console.log('Search Lng', place.geometry.location.lng());
                    sub.next(place.geometry.location);
                    //sub.complete();
                }
            });
        });
    };
    // geocodeLatLng(latlng):any{
    //   let geocoder = new google.maps.Geocoder;
    //   geocoder.geocode({ 'location': latlng }, function (results, status) {
    //     if (status === 'OK') {
    //       if (results[0]) {
    //         //map.setZoom(11);
    //         return results[0].formatted_address;
    //         //infowindow.setContent(results[0].formatted_address);
    //         //infowindow.open(map, marker123);
    //       } else {
    //         window.alert('No results found');
    //         return "fails";
    //       }
    //     } else {
    //       window.alert('Geocoder failed due to: ' + status);
    //       return "fails";
    //     }
    //   });
    // }
    EnroutePage.prototype.addMarker = function (position, content, marker) {
        marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: position,
            draggable: true
        });
        this.addInfoWindow(marker, content);
        return marker;
    };
    EnroutePage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    EnroutePage.prototype.viewPlace = function (id) {
        console.log('Clicked Marker', id);
    };
    EnroutePage.prototype.addPackageMarker = function (packageSource, packageDestination, index, content) {
        var image = "assets/icon/package.png";
        var marker1 = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: packageSource,
            icon: image,
        });
        var marker2 = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: packageDestination,
            icon: image,
        });
        var infoWindow1 = new google.maps.InfoWindow({
            content: content
        });
        var infoWindow2 = new google.maps.InfoWindow({
            content: content
        });
        infoWindow1.open(this.map, marker1);
        infoWindow2.open(this.map, marker2);
        this.packageMarkers.push(marker1);
        this.packageMarkers.push(marker2);
        this.addPackageMarkerEvent(marker1, index);
        this.addPackageMarkerEvent(marker2, index);
    };
    EnroutePage.prototype.addPackageMarkerEvent = function (marker, index) {
        var _this = this;
        google.maps.event.addListener(marker, 'click', function () {
            _this.openPackageDetailsPage(index);
        });
    };
    EnroutePage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    return EnroutePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* ViewChild */])('s1'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["E" /* Input */])
], EnroutePage.prototype, "input", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* ViewChild */])('mapEnroute'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ElementRef */])
], EnroutePage.prototype, "mapElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* ViewChild */])('searchbar', { read: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ElementRef */] }),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ElementRef */])
], EnroutePage.prototype, "searchbar", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* ViewChild */])('searchbar1', { read: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ElementRef */] }),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ElementRef */])
], EnroutePage.prototype, "searchbar1", void 0);
EnroutePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-enroute',template:/*ion-inline-start:"D:\dnd\Transporter\src\pages\enroute\enroute.html"*/'<!--\n\n  Generated template for the AllPackagesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n  \n\n-->\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Drive and Deliver</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="background1">\n\n  <!-- <ion-refresher (ionRefresh)="doRefresh($event)">\n\n      \n\n    <ion-refresher-content\n\n    pullingIcon="arrow-dropdown"\n\n    pullingText="Pull to refresh"\n\n    refreshingText="Refreshing...">\n\n  </ion-refresher-content>\n\n  </ion-refresher> -->\n\n  <ion-card class="map">\n\n\n\n    <ion-searchbar  class="searchbars"  #searchbar1 placeholder="Source:(Default Current Location)"></ion-searchbar>\n\n    <ion-item></ion-item>\n\n    <ion-searchbar class="searchbars" #searchbar placeholder="Destination:"></ion-searchbar>\n\n    <ion-card id="mapEnroute" #mapEnroute></ion-card>\n\n    <button id="buttonSearch" ion-button (click)=findPath()>Find Path</button>\n\n    \n\n  </ion-card>\n\n\n\n  <ion-card id="divider"></ion-card>\n\n  <ion-item>\n\n    <ion-textarea id="textDisplay"></ion-textarea>\n\n  </ion-item>\n\n\n\n  <ion-card *ngFor="let item of responseDataEnroute, let i= index">\n\n    <ion-fab right>\n\n      <button class="buttoncolor" ion-fab>\n\n        <ion-icon name="pin"></ion-icon>\n\n      </button>\n\n    </ion-fab>\n\n    <img class="imagePackage" src="http://localhost:5000/uploads/{{item.PImage}}" />\n\n    <ion-item>\n\n      <h2>Fare</h2>\n\n      <ion-note item-end class="ioniconcolor1">{{item.Fare}}/-</ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <h2>Transport Type:</h2>\n\n      <ion-note item-end class="ioniconcolor1"> {{item.VehicleType}} </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n\n      <h2 class="ioniconcolor1">To: {{item.DestAddress}}\n\n      </h2>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon class="ioniconcolor1" name="radio-button-off" item-left large></ion-icon>\n\n      <h2 class="ioniconcolor1">From: {{item.PickAddress}}\n\n      </h2>\n\n    </ion-item>\n\n\n\n    <button ion-button full class="buttonitem" (click)="openPackageDetailsPage(i)">\n\n      View Details\n\n    </button>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\dnd\Transporter\src\pages\enroute\enroute.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_core__["P" /* NgZone */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
], EnroutePage);

//# sourceMappingURL=enroute.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* unused harmony export snapshotToArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Firebase__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_Firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HelpPage = (function () {
    function HelpPage(navCtrl, navParams, platform, storage, geolocation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.storage = storage;
        this.geolocation = geolocation;
        this.markers = [];
        this.ref = __WEBPACK_IMPORTED_MODULE_3_Firebase__["database"]().ref('geolocations/');
        platform.ready().then(function () {
            _this.initMap();
        }); //add this
        this.ref.on('value', function (resp) {
            _this.deleteMarkers();
            snapshotToArray(resp).forEach(function (data) {
                // let image = 'assets/imgs/green-bike.png';
                var updatelocation = new google.maps.LatLng(data.latitude, data.longitude);
                _this.addMarker(updatelocation);
                //his.setMapOnAll(this.map);
                console.log("inside the top if");
                //  let image = 'assets/imgs/blue-bike.png';
                // updatelocation = new google.maps.LatLng(data.latitude,data.longitude);
                // this.addMarker(updatelocation);
                // this.setMapOnAll(this.map);
                // console.log("inside the top else");
            });
        });
    }
    HelpPage.prototype.initMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then(function (resp) {
            var mylocation = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, {
                zoom: 15,
                center: mylocation
            });
        });
        this.watch = this.geolocation.watchPosition();
        this.watch.subscribe(function (data) {
            _this.deleteMarkers();
            // you can set your id here
            _this.updateGeolocation("hello", data.coords.latitude, data.coords.longitude);
            var updatelocation = new google.maps.LatLng(data.coords.latitude, data.coords.longitude);
            // let image = 'assets/imgs/blue-bike.png';
            _this.addMarker(updatelocation);
            //this.setMapOnAll(this.map);
            console.log("workisdas");
        });
        //this.watch.unsubscribe();
    };
    HelpPage.prototype.addMarker = function (location) {
        var marker = new google.maps.Marker({
            position: location,
            map: this.map,
        });
        this.markers.push(marker);
    };
    HelpPage.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    };
    HelpPage.prototype.clearMarkers = function () {
        this.setMapOnAll(null);
    };
    HelpPage.prototype.deleteMarkers = function () {
        this.clearMarkers();
        this.markers = [];
    };
    HelpPage.prototype.updateGeolocation = function (uuid, lat, lng) {
        // if(localStorage.getItem('sdas')) {
        __WEBPACK_IMPORTED_MODULE_3_Firebase__["database"]().ref('geolocations/' + "MY ID").set({
            ID: "Ad",
            latitude: lat,
            longitude: lng
        });
        console.log("inside if" + localStorage.getItem('mykey'));
        // } else {
        //   let newData = this.ref.push();
        //   newData.set({
        //     ID: "Ad",
        //     latitude: lat,
        //     longitude: lng
        //   });
        //   console.log("inside else");
        //   localStorage.setItem('mykey', newData.key);
        // }
    };
    return HelpPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], HelpPage.prototype, "mapElement", void 0);
HelpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-help',template:/*ion-inline-start:"D:\dnd\Transporter\src\pages\help\help.html"*/'<!--\n\n  Generated template for the HelpPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Help</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div #map id="map"></div>\n\n</ion-content>'/*ion-inline-end:"D:\dnd\Transporter\src\pages\help\help.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
], HelpPage);

var snapshotToArray = function (snapshot) {
    var returnArr = [];
    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        //console.log("value of item"+childSnapshot.toJSON());
        item.key = childSnapshot.key;
        //  console.log("value of item.key"+item.key);
        if (item.ID == "Ad") {
            console.log(item.longitude);
            returnArr.push(item);
            console.log("hello hey whtsupp");
        }
    });
    return returnArr;
};
//# sourceMappingURL=help.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NearbyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__packagedetail_packagedetail__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(15);
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
    function NearbyPage(loadingCtrl, toastCtrl, app, nav, zone, platform, alertCtrl, storage, actionSheetCtrl, geolocation, navCtrl, http) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.app = app;
        this.nav = nav;
        this.zone = zone;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.actionSheetCtrl = actionSheetCtrl;
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.http = http;
        this.packageMarkers = [];
        this.listSearch = '';
        this.radius = 1000;
        this.search = false;
        this.switch = "map";
        this.responseDataNearby = [];
        this.regionals = [];
    }
    NearbyPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad NearbyPage');
        this.platform.ready().then(function () { return _this.loadMaps(); });
    };
    NearbyPage.prototype.openPackageDetailsPage = function (i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__packagedetail_packagedetail__["a" /* PackagedetailPage */], this.responseDataNearby[i]);
    };
    NearbyPage.prototype.viewPlace = function (id) {
        console.log('Clicked Marker', id);
    };
    NearbyPage.prototype.loadMaps = function () {
        if (!!google) {
            this.initializeMap();
        }
        /*
              console.log('The Source'+this.Source);
              console.log('The Destination'+this.Destination);
              let distance=google.maps.geometry.spherical.computeDistanceBetween(this.Source,this.Destination);
              console.log('distance',distance);
          */
    };
    NearbyPage.prototype.reload = function () {
        var _this = this;
        if (Number.isInteger(parseInt(this.rad)) && (this.rad < 8)) {
            this.loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: 'Reloading...',
            });
            this.responseDataNearby = [];
            for (var i = 0; i < this.packageMarkers.length; i++) {
                this.packageMarkers[i].setMap(null);
            }
            // this.loading.present();
            this.radius = (this.rad * 1000);
            if (this.markers != null) {
                this.markers.setMap(null);
                this.cityCircle.setMap(null);
            }
            this.getCurrentPositions();
            // this.loading.dismissAll();
            this.responseDataNearby = [];
            this.storage.get('ID').then(function (val) {
                _this.ID = val;
                _this.http.get('http://localhost:5000/nearbypackages', { params: { 'TransporterID': _this.ID, 'Lat': _this.currentLat, 'Long': _this.currentLong, 'Radius': _this.rad } }).map(function (res) { return res.json(); }).subscribe(function (response) {
                    response.content.map(function (item) {
                        _this.responseDataNearby.push(item);
                        var packageSource = new google.maps.LatLng(Number(item['SourceLatitude']), Number(item['SourceLongitude'])); //source packge  location
                        var packageDestination = new google.maps.LatLng(Number(item['DestinationLatitude']), Number(item['DestinationLongitude'])); //destination package location
                        _this.addPackageMarker(packageSource, packageDestination, _this.responseDataNearby.indexOf(item), item['PackageName']); //drop package marker
                    });
                    // this.loading.dismiss();
                });
            }, function (err) {
                console.log('error');
            });
        }
        else {
            this.presentErrorAlert("Enter a number");
        }
    };
    NearbyPage.prototype.presentErrorAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Wrong input',
            subTitle: text,
            buttons: ['Dismiss'],
        });
        alert.present();
    };
    NearbyPage.prototype.initializeMap = function () {
        var _this = this;
        this.zone.run(function () {
            var mapEle = _this.mapElement.nativeElement;
            _this.map = new google.maps.Map(mapEle, {
                zoom: 12,
                center: { lat: 31.4826352, lng: 74.0712721 },
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                // styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }],
                disableDoubleClickZoom: false,
                disableDefaultUI: true,
                zoomControl: true,
                scaleControl: true,
            });
            _this.getCurrentPositions();
        });
    };
    //Center zoom
    //http://stackoverflow.com/questions/19304574/center-set-zoom-of-map-to-cover-all-visible-markers
    // go show currrent location
    NearbyPage.prototype.getCurrentPositions = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            console.log("hello" + position.coords.latitude, position.coords.longitude);
            _this.currentLat = position.coords.latitude;
            _this.currentLong = position.coords.longitude;
            var myPos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var options = {
                center: myPos,
                zoom: 12
            };
            _this.map.setOptions(options);
            _this.markers = _this.addMarker(myPos, "I am Here!");
            _this.cityCircle = new google.maps.Circle({
                strokeColor: '#033860',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#2a4255',
                fillOpacity: 0.35,
                map: _this.map,
                center: myPos,
                radius: _this.radius,
            });
        }, function (error) {
            console.log(error);
        });
    };
    NearbyPage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    NearbyPage.prototype.addMarker = function (position, content) {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: position
        });
        this.addInfoWindow(marker, content);
        return marker;
    };
    NearbyPage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    NearbyPage.prototype.addPackageMarker = function (packageSource, packageDestination, index, content) {
        var image = "assets/icon/package.png";
        var marker1 = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: packageSource,
            icon: image,
        });
        var marker2 = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: packageDestination,
            icon: image,
        });
        var infoWindow1 = new google.maps.InfoWindow({
            content: content
        });
        var infoWindow2 = new google.maps.InfoWindow({
            content: content
        });
        infoWindow1.open(this.map, marker1);
        infoWindow2.open(this.map, marker2);
        this.packageMarkers.push(marker1);
        this.packageMarkers.push(marker2);
        this.addPackageMarkerEvent(marker1, index);
        this.addPackageMarkerEvent(marker2, index);
    };
    NearbyPage.prototype.addPackageMarkerEvent = function (marker, index) {
        var _this = this;
        google.maps.event.addListener(marker, 'click', function () {
            _this.openPackageDetailsPage(index);
        });
    };
    return NearbyPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewChild */])('mapNearby'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */])
], NearbyPage.prototype, "mapElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewChild */])('distanceInput'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */])
], NearbyPage.prototype, "inputElement", void 0);
NearbyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-nearby',template:/*ion-inline-start:"D:\dnd\Transporter\src\pages\nearby\nearby.html"*/'<!--\n\n    Generated template for the AllPackagesPage page.\n\n\n\n    See http://ionicframework.com/docs/components/#navigation for more info on\n\n    Ionic pages and navigation.\n\n    \n\n  -->\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Drive and Deliver</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="background1">\n\n  <ion-card id="mapNearby" #mapNearby></ion-card>\n\n  <ion-card>\n\n    <ion-row>\n\n      <ion-col col-9>\n\n        <ion-input id="distanceInput" [(ngModel)]="rad" placeholder="Distance in kms(1 default max 5)" type="text"></ion-input>\n\n      </ion-col>\n\n      <ion-col col-3>\n\n        <button id="goButton" (click)="reload()" ion-button>GO!</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n  \n\n  <ion-card id="divider"></ion-card>\n\n\n\n\n\n  <ion-card *ngFor="let item of responseDataNearby, let i= index">\n\n      <ion-fab right>\n\n        <button class="buttoncolor" ion-fab>\n\n          <ion-icon name="pin"></ion-icon>\n\n        </button>\n\n      </ion-fab>\n\n      <img class="imagePackage" src="http://localhost:5000/uploads/{{item.PImage}}" />\n\n      <ion-item >\n\n        <h2 >Fare</h2>\n\n        <ion-note item-end class="ioniconcolor1">{{item.Fare}}/-</ion-note>\n\n      </ion-item>\n\n      <ion-item >\n\n        <h2 >Transport Type:</h2>\n\n        <ion-note item-end class="ioniconcolor1"> {{item.VehicleType}} </ion-note>\n\n      </ion-item>\n\n      <ion-item >\n\n        <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n\n        <h2 class="ioniconcolor1">To: {{item.DestAddress}}\n\n        </h2>\n\n      </ion-item >\n\n  \n\n      <ion-item >\n\n        <ion-icon class="ioniconcolor1" name="radio-button-off" item-left large></ion-icon>\n\n        <h2 class="ioniconcolor1">From: {{item.PickAddress}}\n\n        </h2>\n\n      </ion-item>\n\n  \n\n      <button ion-button full class="buttonitem" (click)="openPackageDetailsPage(i)">\n\n        View Details\n\n      </button>\n\n    </ion-card>  \n\n  </ion-content>'/*ion-inline-end:"D:\dnd\Transporter\src\pages\nearby\nearby.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* NgZone */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
], NearbyPage);

//# sourceMappingURL=nearby.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sign_up_sign_up__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_timeout__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(15);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, formBuilder, http, storage, alertCtrl, loadingCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.http = http;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.data = this.formBuilder.group({
            Email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].email])],
            Password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('^.{6,15}$')])],
        });
        this.submitAttempted = false;
        this.Email = this.data.controls['Email'];
        this.Password = this.data.controls['Password'];
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.logForm = function () {
        var _this = this;
        this.submitAttempted = true;
        if (this.Email.hasError('required') || this.Email.hasError('email')) {
            console.log("Email error");
            return;
        }
        else if (this.Password.hasError('required') || this.Password.hasError('pattern')) {
            console.log("password error");
            return;
        }
        var Userdata = {
            'Email': this.Email.value,
            'Password': this.Password.value,
        };
        this.loading = this.loadingCtrl.create({
            content: 'Uploading...',
        });
        this.loading.present();
        setTimeout(100);
        // this.storage.set('Name',this.Email.value);
        // this.storage.set('Password',this.Password.value);
        console.log(Userdata);
        this.http.post('http://localhost:5000/logintransporter', JSON.stringify(Userdata)).map(function (res) { return res.json(); }).subscribe(function (data) {
            var responseData = data;
            if (responseData.Error != "none") {
                _this.presentErrorAlert(responseData.Error);
                _this.loading.dismissAll();
            }
            else {
                _this.dataloaded(responseData).then(function () {
                    _this.events.publish('user:loggedin', "dataloaded"); //to set data values
                    _this.loading.dismissAll(); //dismiss loading
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]); //go to home page
                });
            }
        }, function (err) {
            console.log('error');
        });
        return;
    };
    LoginPage.prototype.dataloaded = function (responseData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //put the values in local storage
            _this.storage.set('Name', responseData.content[0].Name);
            _this.storage.set('Email', responseData.content[0].Email);
            _this.storage.set('Password', responseData.content[0].Password);
            _this.storage.set('ID', responseData.content[0].ID);
            _this.storage.set('Rating', responseData.content[0].Rating);
            _this.storage.set('FCMToken', responseData.content[0].FCMToken);
            _this.storage.set('ProfileImage', responseData.content[0].ProfileImage);
            var Notifications = [];
            _this.storage.set('NotificationData', Notifications); //try to make this global 
            setTimeout(function () {
                resolve();
            }, 2000); //wait just in case
        });
    };
    LoginPage.prototype.presentErrorAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: text,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    LoginPage.prototype.signuppage = function (page) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__sign_up_sign_up__["a" /* SignUpPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"D:\dnd\Transporter\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Drive And Deliver</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div class="forms">\n\n    <form [formGroup]="data" (ngSubmit)="logForm()">\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Email</ion-label>\n\n        <ion-input type="email" formControlName="Email"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="Email.hasError(\'required\') && submitAttempted">\n\n        <p ion-text color="danger">*Please enter email</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Password</ion-label>\n\n        <ion-input type="password" formControlName="Password"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="(Password.hasError(\'pattern\') && Password.touched) ||(submitAttempted && Password.hasError(\'required\')) ">\n\n        <p ion-text color="danger"> *Password minimum length 6</p>\n\n      </ion-item>\n\n\n\n      <ion-row>\n\n          <button ion-button color="secondary" type="submit" block>Login</button>\n\n      </ion-row>\n\n    </form>\n\n    <button ion-button (click)="signuppage()" block>SignUp</button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\dnd\Transporter\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Events */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_timeout__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_fcm__ = __webpack_require__(81);
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
    function SignUpPage(navCtrl, camera, transfer, file, filePath, actionSheetCtrl, toastCtrl, platform, loadingCtrl, formBuilder, alertCtrl, http, storage, fcm, events) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.storage = storage;
        this.fcm = fcm;
        this.events = events;
        this.lastImage1 = null;
        this.lastImage2 = null;
        this.lastImage3 = null;
        //formbuilder used for error checking and validation of data at client side
        this.data = this.formBuilder.group({
            lastImage1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            lastImage2: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            lastImage3: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            Name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            transportType: ['transportyype', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^((?!transportyype).)*$')]],
            Email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email])],
            CNIC: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$')])],
            Phone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('03[0-9]{9}$')])],
            Address: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            CarRegistrationNo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[A-Z]{3}(( ([0]{1}[7-9]{1}|[1]{1}[0-9]{1})[A,B]{0,1} | ))[0-9]{1,4}$')])],
            Password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^.{6,15}$')])],
            Date: ['date', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^((?!date).)*$')])],
            Month: ['month', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^((?!month).)*$')])],
            Year: ['year', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^((?!year).)*$')])],
            Gender: ['gender', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^((?!gender).)*$')])],
        });
        //bind the variables to input elements in the form making error checking and data access easier
        this.Name = this.data.controls['Name'];
        this.transportType = this.data.controls['transportType'];
        this.Email = this.data.controls['Email'];
        this.CNIC = this.data.controls['CNIC'];
        this.Phone = this.data.controls['Phone'];
        this.Address = this.data.controls['Address'];
        this.CarRegistrationNo = this.data.controls['CarRegistrationNo'];
        this.Password = this.data.controls['Password'];
        this.submitAttempted = false;
        this.Date = this.data.controls['Date'];
        this.Month = this.data.controls['Month'];
        this.Year = this.data.controls['Year'];
        this.Gender = this.data.controls['Gender'];
    }
    SignUpPage.prototype.logForm = function () {
        var _this = this;
        this.submitAttempted = true; //set true for error checking after user has entered all information
        //error checking for all fields in the signup form
        if (this.Name.hasError('required')) {
            this.presentErrorAlert("Some values have been entered Incorectly");
            return;
        }
        else if (this.Email.hasError('required') || this.Email.hasError('email')) {
            //console.log("Email error");
            this.presentErrorAlert("Some values have been entered Incorectly");
            return;
        }
        else if (this.CNIC.hasError('required') || this.CNIC.hasError('pattern')) {
            //console.log("CNIC error");
            this.presentErrorAlert("Some values have been entered Incorectly");
            return;
        }
        else if (this.Phone.hasError('required') || this.Phone.hasError('pattern')) {
            //console.log("Phone number error");
            this.presentErrorAlert("Some values have been entered Incorectly");
            return;
        }
        else if (this.CarRegistrationNo.hasError('required') || this.CarRegistrationNo.hasError('pattern')) {
            //console.log("Car registration error");
            this.presentErrorAlert("Some values have been entered Incorectly");
            return;
        }
        else if (this.Date.hasError('pattern') || this.Month.hasError('pattern') || this.Year.hasError('pattern')) {
            //console.log(" Date Month Year error");
            this.presentErrorAlert("Some values have been entered Incorectly");
            return;
        }
        else if (this.Gender.hasError('pattern')) {
            //console.log("Gender error");
            this.presentErrorAlert("Some values have been entered Incorectly");
            return;
        }
        else if (this.transportType.hasError('pattern')) {
            //console.log("transportType error");
            this.presentErrorAlert("Some values have been entered Incorectly");
            return;
        }
        else if (this.Password.hasError('required') || this.Password.hasError('pattern')) {
            //console.log("Passworderror");
            this.presentErrorAlert("Some values have been entered Incorectly");
            return;
        }
        this.loading = this.loadingCtrl.create({
            content: 'Creating Profile...',
        });
        console.log(this.transportType);
        console.log("ALosda");
        if (this.lastImage1 == null || this.lastImage2 == null || this.lastImage3 == null) {
            if (this.lastImage1 == null) {
                this.presentErrorAlert("Profile image missing");
            }
            if (this.lastImage2 == null) {
                this.presentErrorAlert("Liscence Image Missing");
            }
            if (this.lastImage3 == null) {
                this.presentErrorAlert("Vehicle Registration Image Missing");
            }
        }
        this.fcm.getToken().then(function (token) {
            _this.Token = token;
            _this.loading.present(); //show loading that request has been sent and response is bieng awaited for
            _this.uploadImages();
            var Userdata = {
                'ID': 0,
                'Name': _this.Name.value,
                'Email': _this.Email.value,
                'TransportType': _this.transportType.value,
                'CNIC': _this.CNIC.value,
                'Phone': _this.Phone.value,
                'Address': _this.Address.value,
                'CarRegistrationNo': _this.CarRegistrationNo.value,
                'Password': _this.Password.value,
                'Date': _this.Date.value,
                'Month': _this.Month.value,
                'Year': _this.Year.value,
                'Gender': _this.Gender.value,
                'Clearence Due': 0,
                'Rating': 0,
                'ActivePackages': 0,
                'CancelledPackages': 0.0,
                'FCMToken': _this.Token,
                'ProfileImage': _this.lastImage1,
            };
            _this.http.post('http://localhost:5000/signuptransporter', JSON.stringify(Userdata)).map(function (res) { return res.json(); }).subscribe(function (data) {
                var responseData = data;
                console.log(responseData.Error);
                if (responseData.Error != "none") {
                    _this.presentErrorAlert(responseData.Error);
                }
                else {
                    _this.dataloaded(responseData).then(function () {
                        _this.events.publish('user:loggedin', "dataloaded"); //to set data values
                        _this.loading.dismissAll(); //dismiss loading
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__home_home__["a" /* HomePage */]); //go to home page
                    });
                }
            }, function (err) {
                console.log('error');
            });
            //ALL things are now set just need to send data to the back end check for valid!!!/
        });
    };
    SignUpPage.prototype.dataloaded = function (responseData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //put the values in local storage
            _this.storage.set('Name', _this.Name.value); //user Name
            _this.storage.set('Email', _this.Email.value); //user email
            _this.storage.set('ID', _this.id); //User ID important
            _this.storage.set('FCMToken', _this.Token); //FCM token
            _this.storage.set('ProfileImage', _this.lastImage1); //profile image location
            var Notifications = []; //to hold notification data
            _this.storage.set('NotificationData', Notifications); //notification data
            setTimeout(function () {
                resolve();
            }, 2000); //wait just in case
        });
    };
    SignUpPage.prototype.uploadImages = function () {
        var fileTransfer = this.transfer.create();
        var options1 = {
            fileKey: 'file',
            fileName: this.lastImage1,
            headers: {}
        };
        fileTransfer.upload(this.pathForImage(this.lastImage1), 'http://localhost:5000/imageupload?type=' + 'Profile', options1, true)
            .then(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        var options2 = {
            fileKey: 'file',
            fileName: this.lastImage2,
            headers: {}
        };
        fileTransfer.upload(this.pathForImage(this.lastImage2), 'http://localhost:5000/imageupload?type=' + 'Liscence', options2, true)
            .then(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        var options3 = {
            fileKey: 'file',
            fileName: this.lastImage3,
            headers: {}
        };
        fileTransfer.upload(this.pathForImage(this.lastImage3), 'http://localhost:5000/imageupload?type=' + 'VehicleRegistration', options3, true)
            .then(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
    };
    //________________________________________________________CODE FOR CAMERA PHOTOES____________________________________
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
            //this.presentErrorAlert('Error while selecting image.');
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
                    _this.lastImage1 = newFileName; //profile image
                    break;
                case 2:
                    _this.lastImage2 = newFileName; //liscence image
                    break;
                case 3:
                    _this.lastImage3 = newFileName; //vehicle registration
                    break;
            }
        }, function (error) {
            _this.presentErrorAlert('Error while storing file.');
        });
    };
    SignUpPage.prototype.presentErrorAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: text,
            buttons: ['Dismiss']
        });
        alert.present();
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
        selector: 'page-sign-up',template:/*ion-inline-start:"D:\dnd\Transporter\src\pages\sign-up\sign-up.html"*/'<!--\n\n  Generated template for the SignUpPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>SignUp</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-item>\n\n  <ion-label floating>Pickup Address: </ion-label>\n\n  <ion-textarea></ion-textarea>\n\n</ion-item>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-item>\n\n    <ion-avatar item-start>\n\n      <ion-icon class="photo1" *ngIf="lastImage1==null" name="add-circle" large></ion-icon>\n\n      <img src="{{pathForImage(lastImage1)}}" class="avatar1" *ngIf="lastImage1!=null">\n\n    </ion-avatar>\n\n    <h2>Take a Selfie!</h2>\n\n    <button ion-button icon-left (click)="presentActionSheet(1)">\n\n      <ion-icon name="camera"></ion-icon>Select Image\n\n    </button>\n\n  </ion-item>\n\n\n\n  <!-- Image Liscence input -->\n\n  <ion-item>\n\n    <h2>Liscence</h2>\n\n    <ion-avatar item-start>\n\n      <ion-icon class="photo1" *ngIf="lastImage2==null" name="add-circle" large></ion-icon>\n\n      <img src="{{pathForImage(lastImage2)}}" class="avatar1" *ngIf="lastImage2 !=null">\n\n    </ion-avatar>\n\n    <button ion-button icon-left (click)="presentActionSheet(2)">\n\n      <ion-icon name="camera"></ion-icon>Select Image\n\n    </button>\n\n  </ion-item>\n\n\n\n  <!-- Image Car registration papers input -->\n\n  <ion-item>\n\n    <ion-avatar item-start>\n\n      <ion-icon class="photo1" *ngIf="lastImage3==null" name="add-circle" large></ion-icon>\n\n      <img src="{{pathForImage(lastImage3)}}" class="avatar1" *ngIf="lastImage3!=null">\n\n    </ion-avatar>\n\n    <h2>Vehicle Registration</h2>\n\n    <button ion-button icon-left (click)="presentActionSheet(3)">\n\n      <ion-icon name="camera"></ion-icon>Select Image\n\n    </button>\n\n  </ion-item>\n\n\n\n  <form [formGroup]="data" (ngSubmit)="logForm()">\n\n    <!-- Name input -->\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Name</ion-label>\n\n      <ion-input type="text" formControlName="Name"></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="Name.hasError(\'required\') && submitAttempted">\n\n      <p ion-text color="danger">*Please enter full name</p>\n\n    </ion-item>\n\n\n\n\n\n    <!-- Email input -->\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Email</ion-label>\n\n      <ion-input type="email" formControlName="Email"></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="Email.hasError(\'required\') && submitAttempted">\n\n      <p ion-text color="danger">*Please enter email</p>\n\n    </ion-item>\n\n    <ion-item *ngIf="Email.hasError(\'email\') && Email.touched">\n\n      <p ion-text color="danger">*Please enter proper email</p>\n\n    </ion-item>\n\n\n\n    <!-- CNIC input -->\n\n    <ion-item>\n\n      <ion-label color="primary" floating>CNIC</ion-label>\n\n      <ion-input formControlName="CNIC" type="text"></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="(CNIC.hasError(\'required\')  && submitAttempted)">\n\n      <p ion-text color="danger">*Please enter CNIC</p>\n\n    </ion-item>\n\n    <ion-item *ngIf="  CNIC.hasError(\'pattern\') && CNIC.touched">\n\n      <p ion-text color="danger"> *Please enter CNIC with dashes included</p>\n\n    </ion-item>\n\n\n\n    <!-- Phone Number input -->\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Phone Number</ion-label>\n\n      <ion-input formControlName="Phone" type="text"></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="Phone.hasError(\'required\')  && submitAttempted">\n\n      <p ion-text color="danger">*Please enter phone number</p>\n\n    </ion-item>\n\n    <ion-item *ngIf="Phone.hasError(\'pattern\')  && Phone.touched">\n\n      <p ion-text color="danger"> *Please enter proper phone number(no +92)</p>\n\n    </ion-item>\n\n\n\n    <!-- Address input -->\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Address</ion-label>\n\n      <ion-textarea formControlName="Address"></ion-textarea>\n\n    </ion-item>\n\n    <ion-item *ngIf="Address.hasError(\'required\')  && submitAttempted">\n\n      <p ion-text color="danger">*Please enter Address</p>\n\n    </ion-item>\n\n\n\n\n\n    <!-- Gender input -->\n\n    <ion-item>\n\n      <ion-label color="primary">Gender</ion-label>\n\n      <ion-select formControlName="Gender">\n\n        <ion-option value="gender" selected>Gender</ion-option>\n\n        <ion-option value="male">Male</ion-option>\n\n        <ion-option value="female">Female</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item *ngIf="Gender.hasError(\'pattern\')  && submitAttempted">\n\n      <p ion-text color="danger">*Please select Gender</p>\n\n    </ion-item>\n\n    <ion-item>\n\n\n\n      <!-- Date of Birth input -->\n\n      <ion-label color="primary">D.O.B</ion-label>\n\n      <ion-select formControlName="Date">\n\n        <ion-option value=" " selected>Date</ion-option>\n\n        <ion-option value="1">1</ion-option>\n\n        <ion-option value="2">2</ion-option>\n\n        <ion-option value="3">3</ion-option>\n\n        <ion-option value="4">4</ion-option>\n\n        <ion-option value="5">5</ion-option>\n\n        <ion-option value="6">6</ion-option>\n\n        <ion-option value="7">7</ion-option>\n\n        <ion-option value="8">8</ion-option>\n\n        <ion-option value="9">9</ion-option>\n\n        <ion-option value="10">10</ion-option>\n\n        <ion-option value="11">11</ion-option>\n\n        <ion-option value="12">12</ion-option>\n\n        <ion-option value="13">13</ion-option>\n\n        <ion-option value="14">14</ion-option>\n\n        <ion-option value="15">15</ion-option>\n\n        <ion-option value="16">16</ion-option>\n\n        <ion-option value="17">17</ion-option>\n\n        <ion-option value="18">18</ion-option>\n\n        <ion-option value="19">19</ion-option>\n\n        <ion-option value="20">20</ion-option>\n\n        <ion-option value="21">21</ion-option>\n\n        <ion-option value="22">22</ion-option>\n\n        <ion-option value="23">23</ion-option>\n\n        <ion-option value="24">24</ion-option>\n\n        <ion-option value="25">25</ion-option>\n\n        <ion-option value="26">26</ion-option>\n\n        <ion-option value="27">27</ion-option>\n\n        <ion-option value="28">28</ion-option>\n\n        <ion-option value="29">29</ion-option>\n\n        <ion-option value="30">30</ion-option>\n\n        <ion-option value="31">31</ion-option>\n\n      </ion-select>\n\n      <ion-select formControlName="Month">\n\n        <ion-option value="month" selected>Month</ion-option>\n\n        <ion-option value="Janaury">Janaury</ion-option>\n\n        <ion-option value="February">February</ion-option>\n\n        <ion-option value="March">March</ion-option>\n\n        <ion-option value="April">April</ion-option>\n\n        <ion-option value="May">May</ion-option>\n\n        <ion-option value="June">June</ion-option>\n\n        <ion-option value="July">July</ion-option>\n\n        <ion-option value="August">August</ion-option>\n\n        <ion-option value="September">September</ion-option>\n\n        <ion-option value="October">October</ion-option>\n\n        <ion-option value="November">November</ion-option>\n\n        <ion-option value="December">December</ion-option>\n\n      </ion-select>\n\n      <ion-select formControlName="Year">\n\n        <ion-option value="year" selected>Year</ion-option>\n\n        <ion-option value="1947">1947</ion-option>\n\n        <ion-option value="1948">1948</ion-option>\n\n        <ion-option value="1949">1949</ion-option>\n\n        <ion-option value="1950">1950</ion-option>\n\n        <ion-option value="1951">1951</ion-option>\n\n        <ion-option value="1952">1952</ion-option>\n\n        <ion-option value="1953">1953</ion-option>\n\n        <ion-option value="1954">1954</ion-option>\n\n        <ion-option value="1955">1955</ion-option>\n\n        <ion-option value="1956">1956</ion-option>\n\n        <ion-option value="1957">1957</ion-option>\n\n        <ion-option value="1958">1958</ion-option>\n\n        <ion-option value="1959">1959</ion-option>\n\n        <ion-option value="1960">1960</ion-option>\n\n        <ion-option value="1961">1961</ion-option>\n\n        <ion-option value="1962">1962</ion-option>\n\n        <ion-option value="1963">1963</ion-option>\n\n        <ion-option value="1964">1964</ion-option>\n\n        <ion-option value="1965">1965</ion-option>\n\n        <ion-option value="1966">1966</ion-option>\n\n        <ion-option value="1967">1967</ion-option>\n\n        <ion-option value="1968">1968</ion-option>\n\n        <ion-option value="1969">1969</ion-option>\n\n        <ion-option value="1970">1970</ion-option>\n\n        <ion-option value="1971">1971</ion-option>\n\n        <ion-option value="1972">1972</ion-option>\n\n        <ion-option value="1973">1973</ion-option>\n\n        <ion-option value="1974">1974</ion-option>\n\n        <ion-option value="1975">1975</ion-option>\n\n        <ion-option value="1976">1976</ion-option>\n\n        <ion-option value="1977">1977</ion-option>\n\n        <ion-option value="1978">1978</ion-option>\n\n        <ion-option value="1979">1979</ion-option>\n\n        <ion-option value="1980">1980</ion-option>\n\n        <ion-option value="1981">1981</ion-option>\n\n        <ion-option value="1982">1982</ion-option>\n\n        <ion-option value="1983">1983</ion-option>\n\n        <ion-option value="1984">1984</ion-option>\n\n        <ion-option value="1985">1985</ion-option>\n\n        <ion-option value="1986">1986</ion-option>\n\n        <ion-option value="1987">1987</ion-option>\n\n        <ion-option value="1988">1988</ion-option>\n\n        <ion-option value="1989">1989</ion-option>\n\n        <ion-option value="1990">1990</ion-option>\n\n        <ion-option value="1991">1991</ion-option>\n\n        <ion-option value="1992">1992</ion-option>\n\n        <ion-option value="1993">1993</ion-option>\n\n        <ion-option value="1994">1994</ion-option>\n\n        <ion-option value="1995">1995</ion-option>\n\n        <ion-option value="1996">1996</ion-option>\n\n        <ion-option value="1997">1997</ion-option>\n\n        <ion-option value="1998">1998</ion-option>\n\n        <ion-option value="1999">1999</ion-option>\n\n        <ion-option value="2000">2000</ion-option>\n\n        <ion-option value="2001">2001</ion-option>\n\n        <ion-option value="2002">2002</ion-option>\n\n        <ion-option value="2003">2003</ion-option>\n\n        <ion-option value="2004">2004</ion-option>\n\n        <ion-option value="2005">2005</ion-option>\n\n        <ion-option value="2006">2006</ion-option>\n\n        <ion-option value="2007">2007</ion-option>\n\n        <ion-option value="2008">2008</ion-option>\n\n        <ion-option value="2009">2009</ion-option>\n\n        <ion-option value="2010">2010</ion-option>\n\n        <ion-option value="2011">2011</ion-option>\n\n        <ion-option value="2012">2012</ion-option>\n\n        <ion-option value="2013">2013</ion-option>\n\n        <ion-option value="2014">2014</ion-option>\n\n        <ion-option value="2015">2015</ion-option>\n\n        <ion-option value="2016">2016</ion-option>\n\n        <ion-option value="2017">2017</ion-option>\n\n        <ion-option value="2018">2018</ion-option>\n\n      </ion-select>\n\n      \n\n    </ion-item>\n\n    <ion-item *ngIf="(this.Date.hasError(\'pattern\') || this.Month.hasError(\'pattern\') || this.Year.hasError(\'pattern\'))  && submitAttempted">\n\n      <p ion-text color="danger">*Please Enter proper DOB</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <!-- Transport Type  input -->\n\n      <ion-label color="primary">Transport Type</ion-label>\n\n      <ion-select formControlName="transportType">\n\n        <ion-option value="transportyype" selected>Vehicle</ion-option>\n\n        <ion-option value="Bike">Bike</ion-option>\n\n        <ion-option value="Car">Car</ion-option>\n\n        <ion-option value="Pick Up">Pick Up</ion-option>\n\n        <ion-option value="Truck">Truck</ion-option>\n\n      </ion-select>\n\n      </ion-item>\n\n      <ion-item *ngIf="this.transportType.hasError(\'pattern\')  && submitAttempted">\n\n        <p ion-text color="danger">*Please select a vehicly type</p>\n\n      </ion-item>\n\n    \n\n\n\n    <!-- Vehicle Registration No input -->\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Vehicle Registration No.</ion-label>\n\n      <ion-input type="text" formControlName="CarRegistrationNo"></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="CarRegistrationNo.hasError(\'required\')  && submitAttempted">\n\n      <p ion-text color="danger">*Please enter Vehicle registration number</p>\n\n    </ion-item>\n\n    <ion-item *ngIf="CarRegistrationNo.hasError(\'pattern\')  && CarRegistrationNo.touched">\n\n      <p ion-text color="danger"> *Please enter proper Vehicle registration number</p>\n\n    </ion-item>\n\n    \n\n    <!-- Password input -->\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Password</ion-label>\n\n      <ion-input type="password" formControlName="Password"></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="(Password.hasError(\'pattern\') && Password.touched) ||(submitAttempted && Password.hasError(\'required\')) ">\n\n      <p ion-text color="danger"> *Password minimum length 6</p>\n\n    </ion-item>\n\n    <button ion-button type="submit" block>Create Profile</button>\n\n  </form>\n\n  <!-- <button ion-button (click)="imageupload()" block>Create Profile</button> -->\n\n</ion-content>'/*ion-inline-end:"D:\dnd\Transporter\src\pages\sign-up\sign-up.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__["a" /* FilePath */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_12__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], SignUpPage);

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_fcm__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
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
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationsPage = (function () {
    function NotificationsPage(navCtrl, navParams, fcm, alertCtrl, http, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fcm = fcm;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.storage = storage;
        this.NotificationData = [];
        //  this.onNotification();
        console.log(this.navParams.data);
        this.storage.get('NotificationData').then(function (val) {
            _this.NotificationData = val;
            console.log(val);
        });
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationsPage');
    };
    // onNotification() {
    //   this.fcm.getToken().then(token=>{
    //     console.log(token);
    //     this.Token=token;
    //   });
    //   this.fcm.onNotification().subscribe(data => {
    //     if (data.wasTapped) {
    //       this.NotificationData.push(data);
    //       this.openPage(NotificationsPage);
    //     } else {
    //       this.NotificationData.push(data);
    //     };
    //   })
    // }
    NotificationsPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.setRoot(page);
    };
    NotificationsPage.prototype.showNotification = function (noti) {
        var alert = this.alertCtrl.create({
            title: 'Notification',
            subTitle: noti,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    NotificationsPage.prototype.sendNotify = function () {
        var _this = this;
        this.storage.get('FCMToken').then(function (val) {
            _this.Token = val;
            var data = {
                'TransporterID': _this.ID,
                'FCMToken': _this.Token,
            };
            _this.http.post('http://localhost:5000/notify', JSON.stringify(data)).map(function (res) { return res.json(); }).subscribe(function (data) {
            }, function (err) {
                console.log('error');
            });
        });
        // this.http.get('http://localhost:5000/notify').map(res => res.json()).subscribe(response => {
        //   },
        //     err => {
        //       console.log('error');
        //     });
    };
    return NotificationsPage;
}());
NotificationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notifications',template:/*ion-inline-start:"D:\dnd\Transporter\src\pages\notifications\notifications.html"*/'<!--\n\n  Generated template for the NotificationsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Notifications</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<!--ADD FOR LOOP Over data here-->\n\n\n\n<ion-content class="background1">\n\n  <ion-card *ngFor="let item of NotificationData, let i= index">\n\n   \n\n      <ion-row>\n\n        <ion-col col-2>\n\n          <ion-icon class="icon" name="paper-plane"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-10>\n\n          <h3>{{item}}</h3>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card>\n\n  \n\n\n\n  <ion-card>\n\n    <p class="token">{{Token}}</p>\n\n  </ion-card>\n\n  <button ion-button (click)="sendNotify()"></button>\n\n</ion-content>'/*ion-inline-end:"D:\dnd\Transporter\src\pages\notifications\notifications.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], NotificationsPage);

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
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
    function ProfilePage(navCtrl, navParams, storage, http, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.userReviews = [];
        this.skips = 0;
        /*get Transporter ID from localstorage and  request data and put it into variables to show in view________________*/
        this.storage.get('ID').then(function (val) {
            _this.ID = val;
            _this.http.get('http://localhost:5000/getransporterdata', { params: { 'TransporterID': _this.ID } }).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response.content);
                _this.name = response.content[0].Name;
                console.log(_this.name);
                _this.contantInfo = response.content[0].Phone;
                console.log(_this.contantInfo);
                _this.rating = Array(response.content[0].Rating).fill(response.content[0].Rating);
                console.log(_this.rating);
                _this.clearenceDue = response.content[0].ClearenceDue;
                console.log(_this.clearenceDue);
                _this.cancelledPackages = response.content[0].CancelledPackages;
                _this.activePackages = response.content[0].ActivePackages;
                console.log(_this.cancelledPackages);
                _this.profileImage = response.content[0].ProfileImage;
            }, function (err) {
                console.log('error');
            });
            /*_______________________________________________________________________________________________________________*/
            _this.http.get('http://localhost:5000/getReviews', { params: { 'TransporterID': _this.ID, 'skips': _this.skips } }).map(function (res) { return res.json(); }).subscribe(function (response) {
                response.content.map(function (item) {
                    //console.log(item['rating'])
                    item['ratings'] = Array(item['rating']).fill(item['rating']);
                    //console.log("After"+item['ratings'])
                    //console.log(item)
                    _this.userReviews.push(item);
                    console.log("yohoo");
                });
            }, function (err) {
                console.log('error');
            });
        });
    }
    ProfilePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.infiniteScroll = infiniteScroll;
        this.skips = this.skips + 3;
        console.log("skips", this.skips);
        var length = this.userReviews.length;
        setTimeout(function () {
            _this.http.get('http://localhost:5000/getReviews', { params: { 'TransporterID': _this.ID, 'skips': _this.skips } }).map(function (res) { return res.json(); }).subscribe(function (response) {
                response.content.map(function (item) {
                    item['ratings'] = Array(item['rating']).fill(item['rating']);
                    _this.userReviews.push(item);
                });
                if (response.content == '') {
                    console.log("End reached");
                }
            }, function (err) {
                console.log('error');
            });
            if (length == _this.userReviews.length) {
                _this.presentErrorAlert("There are no more packages left to show");
                infiniteScroll.enable(false);
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 300);
    };
    ProfilePage.prototype.presentErrorAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: text,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"D:\dnd\Transporter\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="background1">\n\n  <ion-card class="cards">\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img class="round" src="http://localhost:5000/getProfilePhoto/{{profileImage}}" />\n\n      </ion-avatar>\n\n      <label class="headerlabel">Name</label>\n\n      <p class="contents">{{name}}</p>\n\n      <label class="headerlabel">Contact Info</label>\n\n      <p class="contents">{{contantInfo}}</p>\n\n      <label class="headerlabel">Rating</label>\n\n      <p><ion-icon name=\'star\' clear small class="rating" *ngFor="let rating of rating" ></ion-icon></p>\n\n    </ion-item>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-row>\n\n      <ion-col col-12 class="card2">\n\n        <label class="headerlabel">Deliveries Done</label>\n\n        <ion-row class="badge">\n\n          <ion-badge class="badgevalues">0</ion-badge>\n\n          <!-- {{DeliveriesDone}} -->\n\n        </ion-row>\n\n      </ion-col>\n\n      <!-- <ion-col col-6 class="card2">\n\n        <label class="headerlabel">Clearence Due</label>\n\n        <ion-row class="badge">\n\n          <ion-badge class="badgevalues">{{clearenceDue}}</ion-badge>\n\n        </ion-row>\n\n      </ion-col> -->\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-6 class="card2">\n\n        <label class="headerlabel">Active Pakages</label>\n\n        <ion-row class="badge">\n\n          <ion-badge class="badgevalues">{{activePackages}}</ion-badge>\n\n        </ion-row>\n\n      </ion-col>\n\n      <ion-col col-6 class="card2">\n\n        <label class="headerlabel">Cancelled Packages</label>\n\n        <ion-row class="badge">\n\n          <ion-badge class="badgevalues">{{cancelledPackages}}</ion-badge>\n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n      <ion-badge class="headings">Reviews</ion-badge>\n\n  </ion-card>\n\n  <ion-card *ngFor="let review of userReviews">\n\n    <ion-card-header>\n\n      <ion-icon name=\'star\' clear small class="rating" *ngFor="let rating of review.ratings"></ion-icon>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p class="contents">"{{review.content}}"</p>\n\n    </ion-card-content>\n\n\n\n  </ion-card>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..."></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"D:\dnd\Transporter\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingRequestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__packagedetail_packagedetail__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
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
    function PendingRequestsPage(navCtrl, navParams, http, alertCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.responseDataPending = [];
        this.getPackages();
    }
    PendingRequestsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PendingRequestsPage');
    };
    PendingRequestsPage.prototype.openPackageDetailsPage = function (i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__packagedetail_packagedetail__["a" /* PackagedetailPage */], this.responseDataPending[i]);
    };
    PendingRequestsPage.prototype.getPackages = function () {
        var _this = this;
        this.storage.get('ID').then(function (val) {
            _this.ID = val;
            console.log(_this.ID);
            _this.http.get('http://localhost:5000/pendingpackages', { params: { 'TransporterID': _this.ID } }).map(function (res) { return res.json(); }).subscribe(function (response) {
                if (response.content == "failed") {
                    _this.responseDataPending = [];
                    _this.presentAlert("No Pending Packages Found");
                }
                else {
                    response.content.map(function (item) {
                        _this.responseDataPending.push(item);
                    });
                    console.log(response.content[0]);
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    PendingRequestsPage.prototype.presentAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: text,
            buttons: ['Dismiss'],
        });
        alert.present();
    };
    return PendingRequestsPage;
}());
PendingRequestsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pending-requests',template:/*ion-inline-start:"D:\dnd\Transporter\src\pages\pending-requests\pending-requests.html"*/'<!--\n\n  Generated template for the PendingRequestsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>PendingRequests</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="background1">\n\n  <ion-card *ngFor="let item of responseDataPending, let i= index">\n\n    <ion-fab right>\n\n      <button class="buttoncolor" ion-fab>\n\n        <ion-icon name="pin"></ion-icon>\n\n      </button>\n\n    </ion-fab>\n\n    <img class="imagePackage" src="http://localhost:5000/uploads/{{item.PImage}}" />\n\n    <ion-item >\n\n      <h2 >Name</h2>\n\n      <ion-note item-end class="ioniconcolor1" style="font-size: 17px">{{item.PackageName}}/-</ion-note>\n\n    </ion-item>\n\n    <ion-item >\n\n      <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n\n      <h2 class="ioniconcolor1">To: {{item.DestAddress}}\n\n      </h2>\n\n    </ion-item >\n\n\n\n    <ion-item >\n\n      <ion-icon class="ioniconcolor1" name="radio-button-off" item-left large></ion-icon>\n\n      <h2 class="ioniconcolor1">From: {{item.PickAddress}}\n\n      </h2>\n\n    </ion-item>\n\n\n\n    <button ion-button full class="buttonitem" (click)="openPackageDetailsPage(i)">\n\n      View Details\n\n    </button>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\dnd\Transporter\src\pages\pending-requests\pending-requests.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], PendingRequestsPage);

//# sourceMappingURL=pending-requests.js.map

/***/ }),

/***/ 165:
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
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/all-packages/all-packages.module": [
		461,
		13
	],
	"../pages/delivered/delivered.module": [
		463,
		12
	],
	"../pages/enqueue/enqueue.module": [
		462,
		11
	],
	"../pages/enqueuedetails/enqueuedetails.module": [
		464,
		10
	],
	"../pages/enroute/enroute.module": [
		465,
		9
	],
	"../pages/help/help.module": [
		466,
		8
	],
	"../pages/home/home.module": [
		467,
		7
	],
	"../pages/login/login.module": [
		468,
		6
	],
	"../pages/nearby/nearby.module": [
		469,
		5
	],
	"../pages/notifications/notifications.module": [
		471,
		4
	],
	"../pages/packagedetail/packagedetail.module": [
		470,
		3
	],
	"../pages/pending-requests/pending-requests.module": [
		473,
		2
	],
	"../pages/profile/profile.module": [
		472,
		1
	],
	"../pages/sign-up/sign-up.module": [
		474,
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
webpackAsyncContext.id = 207;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(316);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sign_up_sign_up__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_enroute_enroute__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_list_list__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_nearby_nearby__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_transfer__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_path__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_enqueuedetails_enqueuedetails__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_packagedetail_packagedetail__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_pending_requests_pending_requests__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_all_packages_all_packages__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_enqueue_enqueue__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_notifications_notifications__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_delivered_delivered__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_help_help__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_login_login__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_geolocation__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_fcm__ = __webpack_require__(81);
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
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_sign_up_sign_up__["a" /* SignUpPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_enroute_enroute__["a" /* EnroutePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_nearby_nearby__["a" /* NearbyPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_enqueuedetails_enqueuedetails__["a" /* EnqueuedetailsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_packagedetail_packagedetail__["a" /* PackagedetailPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_pending_requests_pending_requests__["a" /* PendingRequestsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_all_packages_all_packages__["a" /* AllPackagesPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_enqueue_enqueue__["a" /* EnqueuePage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_delivered_delivered__["a" /* DeliveredPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_login_login__["a" /* LoginPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {
                tabsPlacement: 'top',
            }, {
                links: [
                    { loadChildren: '../pages/all-packages/all-packages.module#AllPackagesPageModule', name: 'AllPackagesPage', segment: 'all-packages', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/enqueue/enqueue.module#EnqueuePageModule', name: 'EnqueuePage', segment: 'enqueue', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/delivered/delivered.module#DeliveredPageModule', name: 'DeliveredPage', segment: 'delivered', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/enqueuedetails/enqueuedetails.module#EnqueuedetailsPageModule', name: 'EnqueuedetailsPage', segment: 'enqueuedetails', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/enroute/enroute.module#EnroutePageModule', name: 'EnroutePage', segment: 'enroute', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/nearby/nearby.module#NearbyPageModule', name: 'NearbyPage', segment: 'nearby', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/packagedetail/packagedetail.module#PackagedetailPageModule', name: 'PackagedetailPage', segment: 'packagedetail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pending-requests/pending-requests.module#PendingRequestsPageModule', name: 'PendingRequestsPage', segment: 'pending-requests', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_sign_up_sign_up__["a" /* SignUpPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_enroute_enroute__["a" /* EnroutePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_nearby_nearby__["a" /* NearbyPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_enqueuedetails_enqueuedetails__["a" /* EnqueuedetailsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_packagedetail_packagedetail__["a" /* PackagedetailPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_pending_requests_pending_requests__["a" /* PendingRequestsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_all_packages_all_packages__["a" /* AllPackagesPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_enqueue_enqueue__["a" /* EnqueuePage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_delivered_delivered__["a" /* DeliveredPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_login_login__["a" /* LoginPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */],
            __WEBPACK_IMPORTED_MODULE_27__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_28__ionic_native_fcm__["a" /* FCM */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_delivered_delivered__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pending_requests_pending_requests__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_enqueue_enqueue__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_notifications_notifications__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_help_help__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_Firebase__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_Firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_fcm__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_observable_interval__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_rxjs_add_observable_interval__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var config = {
    apiKey: "AIzaSyDK3eYlkVHJTY83OOYXVIZQRq5C549pBcc",
    authDomain: "transporterdnd.firebaseapp.com",
    databaseURL: "https://transporterdnd.firebaseio.com",
    projectId: "transporterdnd",
    storageBucket: "transporterdnd.appspot.com",
    messagingSenderId: "680127595430"
};
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, events, storage, fcm, alertCtrl, http, geolocation) {
        var _this = this;
        this.events = events;
        this.storage = storage;
        this.fcm = fcm;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.geolocation = geolocation;
        this.NotificationData = []; //to store notification data temporarily
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.storage.get('Name').then(function (val) {
                if (val == null) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */]; //set landing page as login page
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */]; //set landing page as home page
                    _this.loggedIn = true;
                }
            });
        });
        this.loggedIn = false; //user is not initailly logged in
        __WEBPACK_IMPORTED_MODULE_15_Firebase__["initializeApp"](config); //intialise firebase
        this.ref = __WEBPACK_IMPORTED_MODULE_15_Firebase__["database"]().ref('geolocations/'); //assign data base to store gelocation
        this.Name = ""; //name value is not set
        this.pages = [
            { title: 'All Packages', component: __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */] },
            { title: 'Pending Requests', component: __WEBPACK_IMPORTED_MODULE_7__pages_pending_requests_pending_requests__["a" /* PendingRequestsPage */] },
            { title: 'Enqueue Packages', component: __WEBPACK_IMPORTED_MODULE_9__pages_enqueue_enqueue__["a" /* EnqueuePage */] },
            { title: 'Delivered Packages', component: __WEBPACK_IMPORTED_MODULE_6__pages_delivered_delivered__["a" /* DeliveredPage */] },
            { title: 'Notifications', component: __WEBPACK_IMPORTED_MODULE_10__pages_notifications_notifications__["a" /* NotificationsPage */] },
            { title: 'Help', component: __WEBPACK_IMPORTED_MODULE_11__pages_help_help__["a" /* HelpPage */] },
        ];
        this.loadData().then(function () {
            // this.subscribeWatch();
            _this.updateToken();
            _this.onNotification();
        });
        //this.onNotification();
        //this.subscribeWatch();//function that starts sending gelocation to database
        //console.log(this.loggedIn)  
    }
    MyApp.prototype.loadData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //put the values in local storage
            _this.events.subscribe('user:loggedin', function (text) {
                _this.storage.get('Name').then(function (val) {
                    _this.Name = val;
                    //this.showNotification("thy name" + val);
                });
                _this.storage.get('ProfileImage').then(function (val) {
                    _this.profileImage = val;
                });
                _this.loggedIn = true;
                resolve();
                //wait just in case
            });
            resolve();
        });
    };
    // subscribeWatch() {
    //   //this.watch = this.geolocation.watchPosition();
    //   //this.watch.subscribe((data) => {
    //     // you can set your id here
    //     //this.updateGeolocation("hello", data.coords.latitude, data.coords.longitude);
    //   //});
    //   //this.watch.unsubscribe();
    // //   this.observer = Observable.interval(5000).subscribe(() => {//update timer to 20 seconds
    // //     this.geolocation.getCurrentPosition().then(
    // //       (position) => {
    // //         console.log("ALoha" + position.coords.latitude, position.coords.longitude);
    // //         let newPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    // //         if (JSON.stringify(this.myPosition) !=JSON.stringify(newPosition)) {
    // //           this.updateGeolocation(position.coords.latitude,position.coords.longitude);
    // //           this.myPosition=newPosition;
    // //           console.log("my:"+this.myPosition)
    // //           console.log("new:"+newPosition)
    // //         }
    // //   });
    // // });
    // }
    MyApp.prototype.updateGeolocation = function (lat, lng) {
        var _this = this;
        this.storage.get('ID').then(function (val) {
            _this.ID = val;
            if (_this.ID != null) {
                __WEBPACK_IMPORTED_MODULE_15_Firebase__["database"]().ref('geolocations/' + _this.ID).set({
                    ID: _this.ID,
                    latitude: lat,
                    longitude: lng //new latitude
                });
            }
            else {
                console.log("op errors");
            }
        });
    };
    MyApp.prototype.ionViewDidLoad = function () {
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.openProfile = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */]);
    };
    MyApp.prototype.logout = function () {
        /*remove all storage values*/
        this.storage.set('Name', null);
        this.storage.set('Email', null);
        this.storage.set('Password', null);
        this.storage.set('ID', null);
        this.storage.set('Rating', null);
        this.storage.set('ProfileImage', null);
        this.storage.set('FCMToken', null);
        /*________________________________*/
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */]); //reroute to to login page
    };
    MyApp.prototype.onNotification = function () {
        var _this = this;
        this.fcm.onNotification().subscribe(function (data) {
            if (data.wasTapped) {
                _this.NotificationData.push(JSON.stringify(data)); //open app and show notification page
                console.log(data);
                _this.storage.get('NotificationData').then(function (val) {
                    _this.NotificationData.push(val);
                    _this.storage.set('NotificationData', _this.NotificationData); //notification data
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_notifications_notifications__["a" /* NotificationsPage */], _this.NotificationData);
                });
            }
            else {
                _this.showNotification(JSON.stringify(data));
                console.log(data);
                _this.NotificationData.push(JSON.stringify(data));
                _this.storage.get('NotificationData').then(function (val) {
                    _this.NotificationData.push(val);
                    _this.storage.set('NotificationData', _this.NotificationData); //notification data
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_notifications_notifications__["a" /* NotificationsPage */], _this.NotificationData);
                });
            }
        });
        this.fcm.onTokenRefresh().subscribe(function (token) {
            _this.storage.get('ID').then(function (val) {
                _this.ID = val;
                var data = {
                    'ID': _this.ID,
                    'appType': "Transporter",
                    'FCMToken': token,
                };
                _this.http.post('http://localhost:5000/updateToken', JSON.stringify(data)).map(function (res) { return res.json(); }).subscribe(function (data) {
                }, function (err) {
                    console.log('error');
                });
            });
        });
    };
    MyApp.prototype.updateToken = function () {
        var _this = this;
        this.fcm.getToken().then(function (token) {
            console.log(token);
            _this.Token = token;
            console.log("heres inside sdasd");
            _this.storage.get('ID').then(function (val) {
                _this.ID = val;
                var data = {
                    'ID': _this.ID,
                    'appType': "Transporter",
                    'FCMToken': _this.Token,
                };
                _this.storage.set('FCMToken', _this.Token); //FCM token
                _this.http.post('http://localhost:5000/updateToken', JSON.stringify(data)).map(function (res) { return res.json(); }).subscribe(function (data) {
                }, function (err) {
                    console.log('error');
                });
            });
        });
    };
    MyApp.prototype.showNotification = function (noti) {
        var alert = this.alertCtrl.create({
            title: 'Notification',
            subTitle: noti,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\dnd\Transporter\src\app\app.html"*/'<ion-menu *ngIf="loggedIn"  swipeEnable="true" [content]="content">\n\n    <ion-header class="themeblue">\n\n        <ion-item class="themeblue" no-lines>\n\n            <ion-row>\n\n                <ion-col col-6>\n\n                    <ion-avatar item-start>\n\n                        <img class="profileImage"  src="http://localhost:5000/getProfilePhoto/{{profileImage}}" />\n\n                    </ion-avatar>\n\n                </ion-col>\n\n                <ion-col align-self-center col-6>\n\n                    <h2 class="textcol">{{Name}}</h2>\n\n                    <button class="buttontheme" ion-button icon-left menuClose (click)="openProfile()">\n\n                        <ion-icon name="person"></ion-icon>Profile\n\n                    </button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-item>\n\n\n\n    </ion-header>\n\n    <ion-content class="buttontheme">\n\n\n\n        <ion-row>\n\n            <ion-col col-2 align-self-center>\n\n                <ion-icon class="textcol iconsize" name="ios-home"></ion-icon>\n\n            </ion-col>\n\n            <ion-col col-10>\n\n                <button no-lines class="buttontheme textcol" mode="md" menuClose ion-item (click)="openPage(pages[0])">\n\n                    All Packages\n\n                </button>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-2 align-self-center>\n\n                <ion-icon class="textcol iconsize" name="bookmarks"></ion-icon>\n\n            </ion-col>\n\n            <ion-col col-10>\n\n                <button no-lines class="buttontheme textcol" mode="md" menuClose ion-item (click)="openPage(pages[1])">\n\n                    Pending Requests\n\n                </button>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-2 align-self-center>\n\n                <ion-icon class="textcol iconsize" name="calendar"></ion-icon>\n\n            </ion-col>\n\n            <ion-col col-10>\n\n                <button no-lines class="buttontheme textcol" mode="md" menuClose ion-item (click)="openPage(pages[2])">\n\n                    Enqueue Packages\n\n                </button>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n                <ion-col col-2 align-self-center>\n\n                    <ion-icon class="textcol iconsize" name="checkmark-circle"></ion-icon>\n\n                </ion-col>\n\n                <ion-col col-10>\n\n                    <button no-lines class="buttontheme textcol" mode="md" menuClose ion-item (click)="openPage(pages[3])">\n\n                        Delivered Packages\n\n                    </button>\n\n                </ion-col>\n\n            </ion-row>\n\n        <ion-row>\n\n            <ion-col col-2 align-self-center>\n\n                <ion-icon class="textcol iconsize" name="chatbubbles"></ion-icon>\n\n            </ion-col>\n\n            <ion-col col-10>\n\n                <button no-lines class="buttontheme textcol" mode="md" menuClose ion-item (click)="openPage(pages[4])">\n\n                    Notifications\n\n                </button>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n            <ion-col col-2 align-self-center>\n\n                <ion-icon class="textcol iconsize" name="help-circle"></ion-icon>\n\n            </ion-col>\n\n            <ion-col col-10>\n\n                <button no-lines class="buttontheme textcol" mode="md" menuClose ion-item (click)="openPage(pages[5])">\n\n                    Help\n\n                </button>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n\n\n        <ion-footer class="themeblue">\n\n            <button ion-button full ion-button class="buttontheme" menuToggle (click)="logout()">\n\n                Log Out\n\n            </button>\n\n        </ion-footer>\n\n    </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\dnd\Transporter\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_16__ionic_native_fcm__["a" /* FCM */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__["a" /* Geolocation */]])
], MyApp);

//Observable.interval(5000).subscribe(() => {//update timer to 20 seconds
//   this.geolocation.getCurrentPosition().then(
//     (position) => {
//       console.log(position.coords.latitude, position.coords.longitude);
//       let myPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//       console.log(JSON.parse(JSON.stringify(myPosition)));
//       this.storage.get('ID').then((val) => {
//         let data = {
//           'TransporterID':val,
//           'Latitude':position.coords.latitude,
//           'Longitude':position.coords.longitude,
//         }
//       this.http.post('http://localhost:5000/trackUser', JSON.stringify(data)).map(res => res.json()).subscribe(data => {
//       },
//         err => {
//           console.log('error');
//         });
//       });
//     }),
//     (error) => {
//       console.log(error);
//     }
// }); 
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
        selector: 'page-list',template:/*ion-inline-start:"D:\dnd\Transporter\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\dnd\Transporter\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackagedetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
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
    function PackagedetailPage(navCtrl, navParams, geolocation, zone, loadingCtrl, platform, http, alertCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.zone = zone;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.item = this.navParams.data;
        console.log(this.item);
        this.Source = new google.maps.LatLng(this.item.SourceLatitude, this.item.SourceLongitude);
        console.log(this.Source);
        this.Destination = new google.maps.LatLng(this.item.DestinationLatitude, this.item.DestinationLongitude);
        console.log(this.Destination);
        this.presentLoadingDefault();
        this.notRequested = true;
        console.log(this.ID);
    }
    PackagedetailPage.prototype.presentLoadingDefault = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        setTimeout(function () {
            //this.platform.ready().then(() => this.initializeMap());
            _this.platform.ready().then(function () { return _this.findPath(); });
            loading.dismiss();
        }, 2000);
    };
    PackagedetailPage.prototype.findPath = function () {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('mapdetail'), {
            zoom: 9,
            center: { lat: 31.4826352, lng: 74.0712721 }
        });
        directionsDisplay.setMap(map);
        directionsService.route({
            origin: this.Source,
            destination: this.Destination,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    PackagedetailPage.prototype.sendRequest = function (PackageID, PackageName, SenderID) {
        var _this = this;
        setTimeout(function () {
            _this.storage.get('ID').then(function (val) {
                _this.ID = val;
                _this.http.get('http://localhost:5000/requestDelivery', { params: { 'PackageID': PackageID, 'PackageName': PackageName, 'TransporterID': _this.ID, 'SenderID': SenderID } }).map(function (res) { return res.json(); }).subscribe(function (response) {
                    if (response.content == 'success') {
                        _this.notRequested = false;
                        _this.presentNotification("Request has been sent, awaiting response from Package sender", "Success");
                    }
                    else if (response.content == 'failed') {
                        _this.presentNotification("Request denied the package has already been booked", "Failed");
                    }
                    else {
                        _this.presentNotification("Request already made", "Rerequest ");
                    }
                }, function (err) {
                    console.log('error');
                });
            });
        }, 300);
    };
    PackagedetailPage.prototype.presentNotification = function (text, header) {
        var alert = this.alertCtrl.create({
            title: header,
            subTitle: text,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    return PackagedetailPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('mapdetail'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], PackagedetailPage.prototype, "mapElement", void 0);
PackagedetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-packagedetail',template:/*ion-inline-start:"D:\dnd\Transporter\src\pages\packagedetail\packagedetail.html"*/'<!--\n\n  Generated template for the PackagedetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n\n\n    <ion-title>Package Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="background1">\n\n  <ion-card id="mapdetail" #mapdetail></ion-card>\n\n  <ion-card>\n\n    <ion-item>\n\n      <h2>Package Name:</h2>\n\n      <ion-note class="ioniconcolor1" item-end>{{item.PackageName}} </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-note class="ioniconcolor1">{{item.PackageDesc}}</ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <h2>Fare</h2>\n\n      <ion-note class="ioniconcolor1" item-end>{{item.Fare}}/-</ion-note>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <h2>Package Size:</h2>\n\n      <ion-note class="ioniconcolor1" item-end>{{item.PackageSize}} </ion-note>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <h2>Delivery Type:</h2>\n\n      <ion-note class="ioniconcolor1" item-end>{{item.TransportType}}</ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <h2>Vehicle Type:</h2>\n\n      <ion-note class="ioniconcolor1" item-end> {{item.VehicleType}} </ion-note>\n\n    </ion-item>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-item>\n\n      <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n\n      <ion-note class="ioniconcolor1">To: {{item.DestAddress}}\n\n      </ion-note>\n\n    </ion-item>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-item>\n\n      <ion-icon class="ioniconcolor1" name="radio-button-off" item-left large></ion-icon>\n\n      <ion-note class="ioniconcolor1">From: {{item.PickAddress}}\n\n      </ion-note>\n\n    </ion-item>\n\n  </ion-card>\n\n  <ion-card>\n\n    <img class="imagePackage" src="http://localhost:5000/uploads/{{item.PImage}}" />\n\n  </ion-card>\n\n  <button *ngIf="notRequested" ion-button full class="buttonitem" (click)="sendRequest(item.PackageID,item.PackageName,item.SenderID)">\n\n    Send Request\n\n  </button>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\dnd\Transporter\src\pages\packagedetail\packagedetail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], PackagedetailPage);

//# sourceMappingURL=packagedetail.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enroute_enroute__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nearby_nearby__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__all_packages_all_packages__ = __webpack_require__(148);
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
        selector: 'page-home',template:/*ion-inline-start:"D:\dnd\Transporter\src\pages\home\home.html"*/'<!--\n\n  Generated template for the HomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-tabs  >\n\n  <ion-tab [root]="allpackagespage" tabTitle="All" tabIcon="paper" tabsHideOnSubPages="true"></ion-tab>\n\n  <ion-tab [root]="nearbypage" tabTitle="Nearby" tabIcon="compass" tabsHideOnSubPages="true"></ion-tab>\n\n  <ion-tab [root]="enroutepage" tabTitle="Enroute" tabIcon="briefcase" tabsHideOnSubPages="true"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\dnd\Transporter\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnqueuePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enqueuedetails_enqueuedetails__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
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
 * Generated class for the EnqueuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnqueuePage = (function () {
    function EnqueuePage(navCtrl, navParams, http, alertCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.responseDataEnqueue = []; //to store packages data to be displayed
        this.getPackages(); //call the method to get packages from server
    }
    EnqueuePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnqueuePage'); //page loaded
    };
    EnqueuePage.prototype.openEnqueuedetailsPage = function (i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__enqueuedetails_enqueuedetails__["a" /* EnqueuedetailsPage */], this.responseDataEnqueue[i]); //push enque details page for package id =i
    };
    EnqueuePage.prototype.getPackages = function () {
        var _this = this;
        this.storage.get('ID').then(function (val) {
            _this.ID = val;
            _this.http.get('http://localhost:5000/enquedpackages', { params: { 'TransporterID': _this.ID } }).map(function (res) { return res.json(); }).subscribe(function (response) {
                if (response.content == "failed") {
                    _this.responseDataEnqueue = []; //set to empty
                    _this.presentAlert("No Enqueued Packages Found"); //prompt error to user
                }
                else {
                    response.content.map(function (item) {
                        _this.responseDataEnqueue.push(item); //insert into array
                    });
                }
            }, function (err) {
                console.log(err); //if http request gets an error
            });
        });
    };
    EnqueuePage.prototype.presentAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: text,
            buttons: ['Dismiss'],
        });
        alert.present();
    };
    return EnqueuePage;
}());
EnqueuePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-enqueue',template:/*ion-inline-start:"D:\dnd\Transporter\src\pages\enqueue\enqueue.html"*/'<!--\n\n  Generated template for the EnqueuePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar class="headertop">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Enqueue Packages</ion-title>\n\n    \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="background1">\n\n  <ion-card *ngFor="let item of responseDataEnqueue, let i= index">\n\n    <ion-fab right>\n\n      <button class="buttoncolor" ion-fab>\n\n        <ion-icon name="pin"></ion-icon>\n\n      </button>\n\n    </ion-fab>\n\n    <img class="imagePackage" src="http://localhost:5000/uploads/{{item.PImage}}" />\n\n    <ion-item >\n\n      <h2 >Name</h2>\n\n      <ion-note item-end class="ioniconcolor1" style="font-size: 17px">{{item.PackageName}}/-</ion-note>\n\n    </ion-item>\n\n    <ion-item >\n\n      <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n\n      <h2 class="ioniconcolor1">To: {{item.DestAddress}}\n\n      </h2>\n\n    </ion-item >\n\n    <button ion-button full class="buttonitem" (click)="openEnqueuedetailsPage(i)">\n\n      View Details\n\n    </button>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\dnd\Transporter\src\pages\enqueue\enqueue.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], EnqueuePage);

//# sourceMappingURL=enqueue.js.map

/***/ })

},[297]);
//# sourceMappingURL=main.js.map