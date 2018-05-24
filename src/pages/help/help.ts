import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild, ElementRef } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import * as firebase from 'Firebase';
import { Device } from '@ionic-native/device';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google: any;

@IonicPage()

@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})

export class HelpPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  markers=[];
  ref = firebase.database().ref('geolocations/');
  watch:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public platform: Platform,
    public storage: Storage,private geolocation: Geolocation) {
    platform.ready().then(() => {
      this.initMap();
    });//add this
    this.ref.on('value', resp => {
      this.deleteMarkers();
      snapshotToArray(resp).forEach(data => {
        
         // let image = 'assets/imgs/green-bike.png';
          let updatelocation = new google.maps.LatLng(data.latitude,data.longitude);
          this.addMarker(updatelocation);
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


  initMap() {
    this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((resp) => {
      let mylocation = new google.maps.LatLng(resp.coords.latitude,resp.coords.longitude);
      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        zoom: 15,
        center: mylocation
      });
    });
    this.watch = this.geolocation.watchPosition();
    this.watch.subscribe((data) => {
      this.deleteMarkers();
      // you can set your id here
      this.updateGeolocation("hello", data.coords.latitude,data.coords.longitude);
      let updatelocation = new google.maps.LatLng(data.coords.latitude,data.coords.longitude);
     // let image = 'assets/imgs/blue-bike.png';
      this.addMarker(updatelocation);
      //this.setMapOnAll(this.map);
      console.log("workisdas")
    });
    //this.watch.unsubscribe();
  }
  
  addMarker(location) {
    let marker = new google.maps.Marker({
      position: location,
      map: this.map,
     // icon: image
    });
    this.markers.push(marker);
  }
  
  setMapOnAll(map) {
    for (var i = 0; i < this.markers.length; i++) {
     this.markers[i].setMap(map);
    }
  }
  
  clearMarkers() {
    this.setMapOnAll(null);
  }
  
  deleteMarkers() {
    this.clearMarkers();
    this.markers = [];
  }
  updateGeolocation(uuid, lat, lng) {
    // if(localStorage.getItem('sdas')) {
      firebase.database().ref('geolocations/'+"MY ID").set({
        ID:"Ad",
        latitude: lat,
        longitude : lng
      });
      console.log("inside if"+localStorage.getItem('mykey'));
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
  }

}

export const snapshotToArray = snapshot => {
  let returnArr = [];
  snapshot.forEach(childSnapshot => {
     let item = childSnapshot.val();
   //console.log("value of item"+childSnapshot.toJSON());
     
     item.key = childSnapshot.key;
  //  console.log("value of item.key"+item.key);

 
     if(item.ID=="Ad")
     {
       console.log(item.longitude);
      returnArr.push(item);
      console.log("hello hey whtsupp"); 
    }
});

   return returnArr;
};
