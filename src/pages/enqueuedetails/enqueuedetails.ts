import { EnqueuePage } from './../enqueue/enqueue';
import { Component, NgZone, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform, AlertController, Nav, Loading } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Http, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
declare var google: any;
/**
 * Generated class for the EnqueuedetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enqueuedetails',
  templateUrl: 'enqueuedetails.html',
})
export class EnqueuedetailsPage {
  
  item: any;
  Source: any;
  map: any;
  Destination: any;
  ID: any;
  token: any;
  loading: Loading;
  cancellationOption: Boolean;
  inProgress: Boolean;
  cancelledPackage: Boolean;
  observer: any
  marker1: any;
  myPosition: any
  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation,
    public zone: NgZone, public loadingCtrl: LoadingController, public platform: Platform, public http: Http,
    private alertCtrl: AlertController, public storage: Storage) {

    this.cancelledPackage = false;
    
    this.item = this.navParams.data;
    console.log(this.item.Status);
    if (this.item.Status == "Awaiting") {
      this.inProgress = false;
      this.cancellationOption = true;
    }
    else {
      this.inProgress = true;
      this.cancellationOption = false;
    }
    this.Source = new google.maps.LatLng(this.item.SourceLatitude, this.item.SourceLongitude);
    console.log(this.Source)
    this.Destination = new google.maps.LatLng(this.item.DestinationLatitude, this.item.DestinationLongitude);
    console.log(this.Destination)
    this.presentLoadingDefault();
    this.observer = Observable.interval(3000).subscribe(() => {//update timer to 20 seconds
      this.geolocation.getCurrentPosition().then(
        (position) => {
          console.log("ALoha" + position.coords.latitude, position.coords.longitude);
          this.myPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

          if (this.marker1 != null) {
            this.marker1.setMap(null)
          }
          this.marker1 = new google.maps.Marker({
            map: this.map,
            position: this.myPosition,
            draggable: false,
          });
        }),
        (error) => {
          console.log(error);
        }
    });

    console.log("This is id" + this.ID);
  }
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    setTimeout(() => {
      //this.platform.ready().then(() => this.initializeMap());
      this.platform.ready().then(() => this.findPath());
      loading.dismiss();
    }, 2000);
  }

  findPath() {

    this.map = new google.maps.Map(document.getElementById('mapdetail'), {
      zoom: 9,
      center: { lat: 31.4826352, lng: 74.0712721 }
    });
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay.setMap(this.map);
    this.geolocation.getCurrentPosition().then(
      (position) => {
        console.log("ALoha" + position.coords.latitude, position.coords.longitude);
        this.myPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        if (this.inProgress) {
          directionsService.route({
            origin: this.myPosition,
            destination: this.Destination,
            travelMode: 'DRIVING'
          }, function (response, status) {
            if (status === 'OK') {
              directionsDisplay.setDirections(response);
            } else {
              window.alert('Directions request failed due to ' + status);
            }
          });
        }
        else {
          directionsService.route({
            origin: this.myPosition,
            destination: this.Source,
            travelMode: 'DRIVING'
          }, function (response, status) {
            if (status === 'OK') {
              directionsDisplay.setDirections(response);
            } else {
              window.alert('Directions request failed due to ' + status);
            }
          });
        }
      }),
      (error) => {
        console.log(error);
      }


  }
  confirmPickUp(PackageID) {
    let alert = this.alertCtrl.create({
      title: 'Confirm PickUp',
      message: 'You have picked up the package?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            //do nothing
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            console.log('Buy clicked');

            alert.present();
            let loading = this.loadingCtrl.create({
              content: 'Waiting for server response...',
            });
            loading.present();
            this.storage.get('ID').then((val) => {
              this.ID = val;
              let Userdata = {
                'PackageID': PackageID,
                'TransporterID': this.ID,
              };
              this.http.put('http://localhost:5000/confirmPickUp', JSON.stringify(Userdata)).map(res => res.json()).subscribe(response => {
                if (response['status'] == 'success') {
                  loading.dismiss();
                  this.presentNotification("Pick Up confirmed", "picked up");
                  this.inProgress = true;
                  this.cancellationOption = false;
                  this.findPath();
                }
                else {
                  loading.dismiss();
                  this.presentNotification("testing", "Failed");
                }
              },
                err => {
                  console.log('error');
                });
            });

          }
        }
      ]
    });
    alert.present();
  }

  sendDelivertConfirmation(PackageID) {
    let loading = this.loadingCtrl.create({
      content: 'Waiting for token validation...',
    });

    loading.present();
    if (/^\d{10}$/.test(this.token)) {
      setTimeout(() => {
        this.storage.get('ID').then((val) => {
          this.ID = val;
          let Userdata = {
            'ID': this.ID,
            'token': this.token,
            //'Token':this.Token,
          };
          this.http.get('http://localhost:5000/deliveryCompleted', { params: { 'PackageID': PackageID, 'token': this.token } }
          ).map(res => res.json()).subscribe(response => {
            if (response.content == 'success') {
              loading.dismiss();
              this.cancelledPackage = true;
              this.cancellationOption = false;
              this.presentNotification("The Package delivery is completed", "Success");
              setTimeout(() => {
                this.navCtrl.setRoot(EnqueuePage);
              }, 400);
            }
            else {
              loading.dismiss();
              this.presentNotification("Token Mismatch", "Failed");
            }
          },
            err => {
              console.log('error');
            });
        });
      }, 300);
    }
    else {
      loading.dismiss();
      this.presentNotification("Token consists of only 10 digit", "Re Check Token")
    }
  }
  cancelPackage(PackageID) {
    let loading = this.loadingCtrl.create({
      content: 'Waiting for token validation...',
    });
    //loading.present();
    this.cancelledPackage = true;
    this.cancellationOption = false;
    // setTimeout(() => {
    //   this.storage.get('ID').then((val) => {
    //     this.ID = val;
    //     let Userdata = {
    //       'PackageID': PackageID,
    //       'TransporterID': this.ID,
    //     };
    //     this.http.put('http://localhost:5000/cancelPackage', JSON.stringify(Userdata)).map(res => res.json()).subscribe(response => {
    //       if (response['status'] == 'success') {
    //         loading.dismiss();
    //         this.presentNotification("Package Cancelled", "Cancelled");
    //         setTimeout(() => {
    //           this.navCtrl.setRoot(EnqueuePage);
    //         }, 400);

    //       }
    //       else {
    //         loading.dismiss();
    //         this.presentNotification("testing", "Failed");
    //       }
    //     },
    //       err => {
    //         console.log('error');
    //       });
    //   });
    // }, 300);
  }


  ionViewWillLeave() {
    console.log("Looks like I'm about to leave :(");
    this.observer.unsubscribe();
  }

  presentNotification(text, header) {
    let alert = this.alertCtrl.create({
      title: header,
      subTitle: text,
      buttons: ['Dismiss']
    });
    alert.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EnqueuedetailsPage');
  }

}
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