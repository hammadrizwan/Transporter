import { Component, NgZone, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform,AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Http, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
declare var google: any;
/**
 * Generated class for the PackagedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-packagedetail',
  templateUrl: 'packagedetail.html',
})
export class PackagedetailPage {
  @ViewChild('mapdetail') mapElement: ElementRef;
  item: any;
  Source: any;
  map: any;
  Destination: any;
  ID:any;
  notRequested :Boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation,
    public zone: NgZone, public loadingCtrl: LoadingController, public platform: Platform,public http: Http,
    private alertCtrl: AlertController,public storage:Storage ) {
    this.item = this.navParams.data;
    console.log(this.item);
    this.Source = new google.maps.LatLng(this.item.SourceLatitude, this.item.SourceLongitude);
    console.log(this.Source)
    this.Destination = new google.maps.LatLng(this.item.DestinationLatitude, this.item.DestinationLongitude);
    console.log(this.Destination)
    this.presentLoadingDefault();
    this.notRequested=true;
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

  sendRequest(PackageID:any,PackageName:any,SenderID:any){//add sender id
    setTimeout(() => {
      this.storage.get('ID').then((val) => {
        this.ID=val;
       
      this.http.get('http://localhost:5000/requestDelivery',{params:{'PackageID': PackageID,'PackageName': PackageName,'TransporterID':this.ID,'SenderID': SenderID}}).map(res => res.json()).subscribe(response => {
        if (response.content == 'requested') {
          this.notRequested=false;
          this.presentNotification("Request has been sent, awaiting response from Package sender","Success");
        }
        else if(response.content == 'failed') {
          this.presentNotification("Request denied the package has already been booked","Failed");
        }
        else{
          this.presentNotification("Request already made","Rerequest ");
        }
      },
        err => {
          console.log('error');
        });
      });
    }, 300);
    
  }


  presentNotification(text,header) {
    let alert = this.alertCtrl.create({
      title: header,
      subTitle: text,
      buttons: ['Dismiss']
    });
    alert.present();
  }


}
