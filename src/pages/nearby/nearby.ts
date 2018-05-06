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

  currentLat: number;
  currentLong: number;
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
    if (Number.isInteger(parseInt(this.rad))) {
      this.loading = this.loadingCtrl.create({
        spinner: 'bubbles',
        content: 'Reloading...',
      });
      // this.loading.present();
      this.radius = (this.rad * 1000);
      if (this.markers != null) {
        this.markers.setMap(null);
        this.cityCircle.setMap(null);
      }
      this.getCurrentPositions();
      // this.loading.dismissAll();
      this.responseDataNearby=[];
      this.http.get('http://localhost:5000/nearbypackages',{params:{'Lat': this.currentLat,'Long':this.currentLong,'Radius':this.rad}}).map(res => res.json()).subscribe(response => {      
        response.content.map(item =>{
          this.responseDataNearby.push(item);
          let myPos = new google.maps.LatLng(Number(item['SourceLatitude']), Number(item['SourceLongitude']));
          this.addPackageMarker(myPos, this.responseDataNearby.indexOf(item), item['PackageName']);
        });
        // this.loading.dismiss();
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
  addPackageMarker(position, index, content) {
    let image = "assets/icon/package.png";
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: position,
      title: "hello",
      icon: image,
    });
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    infoWindow.open(this.map, marker);

    this.addPackageMarkerEvent(marker, index);
    return marker;
  }
  addPackageMarkerEvent(marker, index) {

    google.maps.event.addListener(marker, 'click', () => {

      this.openPackageDetailsPage(index);
    });
  }

}
