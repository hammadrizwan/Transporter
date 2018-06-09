import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PackagedetailPage } from '../packagedetail/packagedetail';
import { identifierModuleUrl } from '@angular/compiler/compiler';
import { NgZone, ViewChild, ElementRef } from '@angular/core';
import { ActionSheetController, AlertController, App, LoadingController, Platform, ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';

declare var google: any;

/**
 * Generated class for the NearbyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-nearby',
  templateUrl: 'nearby.html',
})
export class NearbyPage {
  ID:any;
  currentLat: number;
  currentLong: number;
  packageMarkers=[];
  ionViewDidLoad() {
    console.log('ionViewDidLoad NearbyPage');
    this.platform.ready().then(() => this.loadMaps());
  }
  openPackageDetailsPage(i: any) {
    this.navCtrl.push(PackagedetailPage, this.responseDataNearby[i]);
  } 
  @ViewChild('mapNearby') mapElement: ElementRef;
  @ViewChild('distanceInput') inputElement: ElementRef;
  MyLocation: any;
  listSearch: string = '';
  cityCircle: any;
  radius = 1000;
  rad: any;
  map: any;
  marker: any;
  markers: any;
  loading: any;
  search: boolean = false;
  error: any;
  switch: string = "map";
  responseDataNearby = [];
  regionals: any = [];
  currentregional: any;

  constructor(
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public app: App,
    public nav: NavController,
    public zone: NgZone,
    public platform: Platform,
    public alertCtrl: AlertController,
    public storage: Storage,
    public actionSheetCtrl: ActionSheetController,
    public geolocation: Geolocation,
    public navCtrl: NavController,
    public http: Http,
  ) {


  }

  viewPlace(id) {
    console.log('Clicked Marker', id);
  }


  loadMaps() {
    if (!!google) {
      this.initializeMap();
    }
    /*
          console.log('The Source'+this.Source);
          console.log('The Destination'+this.Destination);
          let distance=google.maps.geometry.spherical.computeDistanceBetween(this.Source,this.Destination);
          console.log('distance',distance);
      */
  }

  reload() {
    if (Number.isInteger(parseInt(this.rad)) && (this.rad <8)) {
      this.loading = this.loadingCtrl.create({
        spinner: 'bubbles',
        content: 'Reloading...',
      });
      this.responseDataNearby=[];
      for (let i = 0; i < this.packageMarkers.length; i++) {//remove all package markers
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
      this.responseDataNearby=[];
      this.storage.get('ID').then((val) => {
        this.ID=val;
      this.http.get('http://localhost:5000/nearbypackages',{params:{'TransporterID':this.ID,'Lat': this.currentLat,'Long':this.currentLong,'Radius':this.rad}}).map(res => res.json()).subscribe(response => {      
        response.content.map(item =>{
          this.responseDataNearby.push(item);
          let packageSource = new google.maps.LatLng(Number(item['SourceLatitude']), Number(item['SourceLongitude']));//source packge  location
          let packageDestination = new google.maps.LatLng(Number(item['DestinationLatitude']), Number(item['DestinationLongitude']));//destination package location
          this.addPackageMarker(packageSource, packageDestination, this.responseDataNearby.indexOf(item), item['PackageName']);//drop package marker
        });
        // this.loading.dismiss();
      });
      },
        err => {
          console.log('error');
        });     
    }
    else {
      this.presentErrorAlert("Enter a number")
    } 
  }
  presentErrorAlert(text) {
    let alert = this.alertCtrl.create({
      title: 'Wrong input',
      subTitle: text,
      buttons: ['Dismiss'],
    });
    alert.present();
  }

  initializeMap() {
    this.zone.run(() => {
      var mapEle = this.mapElement.nativeElement;
      this.map = new google.maps.Map(mapEle, {
        zoom: 12,
        center: { lat: 31.4826352, lng:74.0712721},
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        // styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }],
        disableDoubleClickZoom: false,
        disableDefaultUI: true,
        zoomControl: true,
        scaleControl: true,
      });
      this.getCurrentPositions();
    }); 
  }

  //Center zoom
  //http://stackoverflow.com/questions/19304574/center-set-zoom-of-map-to-cover-all-visible-markers
  // go show currrent location
  getCurrentPositions() {
    this.geolocation.getCurrentPosition().then(

      (position) => {
        console.log("hello" + position.coords.latitude, position.coords.longitude);
        this.currentLat = position.coords.latitude;
        this.currentLong = position.coords.longitude;
        let myPos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        let options = {
          center: myPos,
          zoom: 12
        };
        this.map.setOptions(options);
        this.markers = this.addMarker(myPos, "I am Here!");

        this.cityCircle = new google.maps.Circle({
          strokeColor: '#033860',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#2a4255',
          fillOpacity: 0.35,
          map: this.map,
          center: myPos,
          radius: this.radius,
        });
      },
      (error) => {
      console.log(error);
  }
)}
showToast(message) {
  let toast = this.toastCtrl.create({
    message: message,
    duration: 3000
  });
  toast.present();
}
  addMarker(position, content) {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: position
    });
    this.addInfoWindow(marker, content);
    return marker;
  }

  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }
  addPackageMarker(packageSource, packageDestination, index, content) {
    let image1 = "assets/icon/package.png";
    let image2 = "assets/icon/flag.png";
    
    let marker1 = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: packageSource,
      icon: image1,
    });
    let marker2 = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: packageDestination,
      icon: image2,
    });
    let infoWindow1 = new google.maps.InfoWindow({//show text above package
      content: content
    });
    let infoWindow2 = new google.maps.InfoWindow({//show text above package
      content: content
    });
    infoWindow1.open(this.map, marker1);
    infoWindow2.open(this.map, marker2);
    this.packageMarkers.push(marker1);
    this.packageMarkers.push(marker2);
    this.addPackageMarkerEvent(marker1, index);
    this.addPackageMarkerEvent(marker2, index);
  }
  addPackageMarkerEvent(marker, index) {

    google.maps.event.addListener(marker, 'click', () => {

      this.openPackageDetailsPage(index);
    });
  }


}
