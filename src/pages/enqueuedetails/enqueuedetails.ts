import { EnqueuePage } from './../enqueue/enqueue';
import { Component, NgZone, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform, AlertController,Nav, Loading } from 'ionic-angular';
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
  @ViewChild('mapdetail') mapElement: ElementRef;
  item: any;
  Source: any;
  map: any;
  Destination: any;
  ID: any;
  token: any;
  loading: Loading;
  cancellationOption:Boolean;
  inProgress:Boolean;
  cancelled:Boolean;
  observer:any
  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation,
    public zone: NgZone, public loadingCtrl: LoadingController, public platform: Platform, public http: Http,
    private alertCtrl: AlertController, public storage: Storage) {
    this.cancellationOption=true;
    this.cancelled=false;
    this.inProgress=false;
    this.item = this.navParams.data;
    console.log(this.item);
    this.Source = new google.maps.LatLng(this.item.SourceLatitude, this.item.SourceLongitude);
    console.log(this.Source)
    this.Destination = new google.maps.LatLng(this.item.DestinationLatitude, this.item.DestinationLongitude);
    console.log(this.Destination)
    this.presentLoadingDefault();
    // this.observer=Observable.interval(5000).subscribe(() => {//update timer to 20 seconds
    //     this.geolocation.getCurrentPosition().then(
    //       (position) => {
    //         console.log(position.coords.latitude, position.coords.longitude);
    //         let myPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    //         console.log(JSON.parse(JSON.stringify(myPosition)));
    //         this.storage.get('ID').then((val) => {
    //           let data = {
    //             'TransporterID':val,
    //             'Latitude':position.coords.latitude,
    //             'Longitude':position.coords.longitude,
    //           }
    //         this.http.post('http://localhost:5000/trackUser', JSON.stringify(data)).map(res => res.json()).subscribe(data => {
    //         },
    //           err => {
    //             console.log('error');
    //           });
    //         });
    //       }),
    //       (error) => {
    //         console.log(error);
    //       }
    //   });

    console.log(this.ID);
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
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;

    const map = new google.maps.Map(document.getElementById('mapdetail'), {
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
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  sendDelivertConfirmation(PackageID) {
    let loading = this.loadingCtrl.create({
      content: 'Waiting for token validation...',
    });
    loading.present();
    if (/^\d{10}$/.test(this.token)) {
      setTimeout(() => {
        this.storage.get('ID').then((val) => {
          this.ID=val;
          let Userdata = {
            'ID': this.ID,
            'token': this.token,
            //'Token':this.Token,
          };
        this.http.get('http://localhost:5000/deliveryCompleted',{params:{'PackageID': PackageID,'token': this.token}} 
      ).map(res => res.json()).subscribe(response => {
          if (response.content == 'success') {
            loading.dismiss(); 
            this.cancelled=true;
            this.cancellationOption=false;
            this.presentNotification("The Package delivery is completed","Success");          
            setTimeout(() => {
              this.navCtrl.setRoot(EnqueuePage);
            }, 400);      
          }
          else{
            loading.dismiss();   
            this.presentNotification("Token Mismatch","Failed");
          }
        },
          err => {
            console.log('error');
          });
        });
      }, 300);
    }
    else{
      loading.dismiss();
      this.presentNotification("Token consists of only 10 digit","Re Check Token")
    }
  }
  cancelPackage(PackageID){
    let loading = this.loadingCtrl.create({
      content: 'Waiting for token validation...',
    });
    //loading.present();
    
      setTimeout(() => {
        this.storage.get('ID').then((val) => {
          this.ID=val;
          let Userdata = {
            'PackageID': PackageID,
            'TransporterID': this.ID,
          };
        this.http.put('http://localhost:5000/cancelPackage', JSON.stringify(Userdata) 
      ).map(res => res.json()).subscribe(response => {
          if (response['status'] == 'success') {
            loading.dismiss(); 
            this.presentNotification("Package Cancelled","Cancelled");          
            setTimeout(() => {
              this.navCtrl.setRoot(EnqueuePage);
            }, 400);      
          }
          else{
            loading.dismiss();   
            this.presentNotification("testing","Failed");
          }
        },
          err => {
            console.log('error');
          });
        });
      }, 300);
  }

  popView(){
    console.log("aloha")
    this.navCtrl.pop();
  }
  ionViewWillLeave() {
    console.log("Looks like I'm about to leave :(");
    //this.observer.unsubscribe();
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
