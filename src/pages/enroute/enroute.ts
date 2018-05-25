import { IonicPage, NavController, NavParams, Searchbar } from 'ionic-angular';
import { PackagedetailPage } from '../packagedetail/packagedetail';
import { Component, NgZone, ViewChild, ElementRef, Input } from '@angular/core';
import { ActionSheetController, AlertController, App, LoadingController, Platform, ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';

declare var google: any;

declare var MarkerClusterer: any;
/**
 * Generated class for the EnroutePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enroute',
  templateUrl: 'enroute.html',
})
export class EnroutePage {

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnroutePage');
    this.platform.ready().then(() => this.loadMaps());
    this.checkIfLocationChange();
  }

  openPackageDetailsPage(i: any) {
    this.navCtrl.push(PackagedetailPage, this.responseDataEnroute[i]);
  }
  @ViewChild('s1') input: Input;
  @ViewChild('mapEnroute') mapElement: ElementRef;
  //@ViewChild('searchbar1') searchbar2: Searchbar;
  @ViewChild('searchbar', { read: ElementRef }) searchbar: ElementRef;
  addressElement: HTMLInputElement = null;
  @ViewChild('searchbar1', { read: ElementRef }) searchbar1: ElementRef;
  addressElement1: HTMLInputElement = null;
  Source: any = null;
  Destination: any = null;
  marker1: any;
  marker2: any;
  MyLocation: any;
  responseDataEnroute = [];
  listSearch: string = '';
  ID: any;
  map: any;
  packageMarkers = [];
  loading: any;
  search: boolean = false;
  error: any;
  switch: string = "map";
  radiusCircle: any;
  regionals: any = [];
  currentregional: any;
  observer: any;
  cityCircle1: any;
  cityCircle2: any;
  constructor(
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public app: App,
    public navCtrl: NavController,
    public zone: NgZone,
    public platform: Platform,
    public alertCtrl: AlertController,
    public storage: Storage,
    public actionSheetCtrl: ActionSheetController,
    public geolocation: Geolocation,
    public http: Http, ) {
    this.radiusCircle = 2000;//radius in which to find the packages

  }
  doRefresh(refresher) {//pull to refersh
    console.log('Begin async operation', refresher);
    this.responseDataEnroute = [];//remove all packages from display
    for (let i = 0; i < this.packageMarkers.length; i++) {//remove all package markers
      this.packageMarkers[i].setMap(null);
    }
    this.findPackages();//find the packages and display them
    refresher.complete();//complete the refreshing process
  }
  ionViewDidLeave() {
    this.observer.unsubscribe();//unsubscribe to any changes made to markers
  }
  checkIfLocationChange() {//method checks if marker position is changed
    let input = document.getElementById('textDisplay');//get the div in which new position text is to be shown
    this.observer = Observable.interval(2000).subscribe(() => {//new observable runs every 2 sec
      if (this.marker1 != null) {//check if marker actually exits
        if (this.Source != this.marker1.getPosition()) {//check if postion has changed
          this.Source = this.marker1.getPosition();//set source to new postion
          let geocoder = new google.maps.Geocoder;//reverse geocoding to get location text
          geocoder.geocode({ 'location': this.Source }, function (results, status) {
            if (status === 'OK') {
              if (results[0]) {
                input.innerText = results[0].formatted_address;//set text in div
                //map.setZoom(11);
                // let input = document.getElementById('s1');
                //infowindow.setContent(results[0].formatted_address);
                //infowindow.open(map, marker123);
              }
            }
          });
        }
      }
      if (this.marker2 != null) {//check if marker actually exits
        if (this.Destination != this.marker2.getPosition()) {//check if postion has changed
          this.Destination = this.marker2.getPosition();//set destination to new postion
          let geocoder = new google.maps.Geocoder;//reverse geocoding to get location text
          geocoder.geocode({ 'location': this.Destination }, function (results, status) {
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
  }

  loadMaps() {
    if (!!google) {//check if google variable is available
      this.initializeMap();//inititalise the map
      this.initAutocomplete();//create the autocomplete for searchbars
    } else {
      this.errorAlert('Error', 'Something went wrong with the Internet Connection. Please check your Internet.')
    }
  }

  errorAlert(title, message) {//Error Alert Creator
    let alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            this.loadMaps();
          }
        }]
    });
    alert.present();
  }

  initializeMap() {
    var mapEle = this.mapElement.nativeElement;//get map div
    this.map = new google.maps.Map(mapEle, {//new map create with the following settings
      zoom: 12,
      center: { lat: 31.4826352, lng: 74.0712721 },
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDoubleClickZoom: false,
      disableDefaultUI: true,
      zoomControl: true,
      scaleControl: true,
    });

    this.getCurrentPosition();//set the default location at the users current position

  }
  getCurrentPosition() {//get the users current position

    let locationOptions = { timeout: 10000 };
    this.geolocation.getCurrentPosition(locationOptions).then(
      (position) => {
        console.log(position.coords.latitude, position.coords.longitude);
        this.Source = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        let options = {
          center: this.Source,
          zoom: 12

        };
        this.map.setOptions(options);//set new options to map
        this.marker1 = new google.maps.Marker({//drop marker at current location with the following settings
          map: this.map,
          animation: google.maps.Animation.DROP,
          position: this.Source,
          draggable: true
        });
        console.log("this is the lat" + this.marker1.getPosition().lat());
        console.log("this is the lng" + this.marker1.getPosition().lng());

      }),
      (error) => {
        //     this.loading.dismiss().then(() => {
        //     this.showToast('Location not found. Please enable your GPS!');
        //     this.loading.dismiss();
        //     console.log(error);
        //   });
        console.log(error);
      }


  }


  initAutocomplete(): void {

    this.addressElement1 = this.searchbar1.nativeElement.querySelector('.searchbar-input');//get the search bar DOM
    this.createAutocomplete(this.addressElement1).subscribe((location) => {//subscribe to observable that is returned
      console.log('First Search', location);
      this.Source = new google.maps.LatLng(location.lat(), location.lng());//Source marker location
      let options = {
        center: this.Source,
        zoom: 13
      };
      this.map.setOptions(options);//reset zoom and focus to source marker using options above
      this.marker1.setMap(null);//remove previous marker
      // this.addMarker(this.Origin, "Origin",this.marker1);
      this.marker1 = new google.maps.Marker({//drop new marker
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.Source,
        draggable: true
      });
      this.addInfoWindow(this.marker1, "Origin");//info shown when marker is clicked
    });

    this.addressElement = this.searchbar.nativeElement.querySelector('.searchbar-input');//subscribe to observable that is returned
    this.createAutocomplete(this.addressElement).subscribe((location) => {
      console.log('Second Search', location);
      this.Destination = new google.maps.LatLng(location.lat(), location.lng());//Destination marker location
      let options = {
        center: this.Destination,
        zoom: 13
      };
      this.map.setOptions(options);//reset zoom and focus to Destination marker using options abov
      // this.addMarker(this.Dest, "Destination",this.marker2  );
      this.marker2 = new google.maps.Marker({//drop new marker
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.Destination,
        draggable: true
      });
      this.addInfoWindow(this.marker2, "Destination");//info shown when marker is clicked
    });
  }

  findPath() {
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;
    this.map = new google.maps.Map(document.getElementById('mapEnroute'), {
      zoom: 9,
      center: { lat: 31.4826352, lng: 74.0712721 }
    });//new map
    directionsDisplay.setMap(this.map);//set direction diplay method to show on this map
    directionsService.route({//create new route show on  map
      origin: this.Source,//location A origin marker
      destination: this.Destination,//location B destination marker
      travelMode: 'DRIVING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);//diplay directions
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });


    this.cityCircle1 = new google.maps.Circle({//create the destination circle to be used on the map
      strokeColor: '#033860',//color the outline
      strokeOpacity: 0.8,//seethrough boundary color
      strokeWeight: 2,//width boundary
      fillColor: '#2a4255',//color inside the circle
      fillOpacity: 0.35,//seethrough inside color
      map: this.map,//the map to draw on
      center: this.Destination,//marker location
      radius: this.radiusCircle,//size of the circle
    });

    this.cityCircle2 = new google.maps.Circle({//create the Source Circel to be displayed on the map
      strokeColor: '#033860',//color the outline
      strokeOpacity: 0.8,//seethrough boundary color
      strokeWeight: 2,//width boundary
      fillColor: '#2a4255',//color inside the circle
      fillOpacity: 0.35,//seethrough inside color
      map: this.map,//the map to draw on
      center: this.Source,//marker location
      radius: this.radiusCircle,//size of the circle
    });

    //this.loading.present();
    this.findPackages();//find and diplay the packages
    //this.loading.dismiss();//dismiss loading display
  }
  findPackages() {

    let Src = JSON.parse(JSON.stringify(this.Source));//convert Source to string and then parse it in array format
    let Des = JSON.parse(JSON.stringify(this.Destination));//convert Destination to string and then parse it in array format
    let SourceLat = Src["lat"];
    let SourceLng = Src["lng"];
    let DestinationLat = Des["lat"];
    let DestinationLng = Des["lng"];
    this.responseDataEnroute = [];
    this.storage.get('ID').then((val) => {//transporter ID get
      this.ID = val;
      this.http.get('http://localhost:5000/enroutepackages',
        { params: { 'TransporterID': this.ID, 'SourceLat': SourceLat, 'SourceLng': SourceLng, 'DestinationLat': DestinationLat, 'DestinationLng': DestinationLng, 'Radius': this.radiusCircle } }
      ).map(res => res.json()).subscribe(response => {
        response.content.map(item => {
          this.responseDataEnroute.push(item);//add item to diplay
          let packageSource = new google.maps.LatLng(Number(item['SourceLatitude']), Number(item['SourceLongitude']));//source packge  location
          let packageDestination = new google.maps.LatLng(Number(item['DestinationLatitude']), Number(item['DestinationLongitude']));//destination package location
          this.addPackageMarker(packageSource, packageDestination, this.responseDataEnroute.indexOf(item), item['PackageName']);//drop package marker
        });
      });
    },
      err => {
        console.log('error');
      });
  }

  createAutocomplete(addressEl: HTMLInputElement): Observable<any> {
    const autocomplete = new google.maps.places.Autocomplete(addressEl);
    autocomplete.bindTo('bounds', this.map);
    return new Observable((sub: any) => {
      google.maps.event.addListener(autocomplete, 'place_changed', () => {
        const place = autocomplete.getPlace();
        console.log(place.formatted_address)
        //this.LocationText=autocomplete.gm_accessors_.place.fd.formattedPrediction;
        if (!place) {
          sub.error({
            message: 'Autocomplete returned place with no geometry'
          });
        } else {
          //console.log('Search', place.geometry.locat;
          console.log('Search Lat', place.geometry.location.lat());
          console.log('Search Lng', place.geometry.location.lng());
          sub.next(place.geometry.location);
          //sub.complete();
        }
      });
    });
  }
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
  addMarker(position, content, marker) {
    marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: position,
      draggable: true
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
  viewPlace(id) {
    console.log('Clicked Marker', id);
  }

  addPackageMarker(packageSource, packageDestination, index, content) {
    let image = "assets/icon/package.png";
    let marker1 = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: packageSource,
      icon: image,
    });
    let marker2 = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: packageDestination,
      icon: image,
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



  showToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }


  // mapsSearchBar(ev: any) {
  //   // set input to the value of the searchbar
  //   //this.search = ev.target.value;
  //   //    console.log(ev);
  //   const autocomplete = new google.maps.places.Autocomplete(ev);
  //   autocomplete.bindTo('bounds', this.map);
  //   return new Observable((sub: any) => {
  //     google.maps.event.addListener(autocomplete, 'place_changed', () => {
  //       const place = autocomplete.getPlace();
  //       if (!place.geometry) {
  //         sub.error({
  //           message: 'Autocomplete returned place with no geometry'
  //         });
  //       } else {
  //         sub.next(place.geometry.location);
  //         sub.complete();
  //       }
  //     });
  //   });
  // }
  //Center zoom
  //http://stackoverflow.com/questions/19304574/center-set-zoom-of-map-to-cover-all-visible-markers
  // bounceMap(markers) {
  //   let bounds = new google.maps.LatLngBounds();
  //   for (var i = 0; i < markers.length; i++) {
  //     bounds.extend(markers[i].getPosition());
  //   }
  //   this.map.fitBounds(bounds);
  // }
  // resizeMap() {
  //   setTimeout(() => {
  //     google.maps.event.trigger(this.map, 'resize');
  //   }, 200);
  // }

  /*
    getCurrentPositionfromStorage(markers) {
      this.storage.get('lastLocation').then((result) => {
        if (result) {
          let myPos = new google.maps.LatLng(result.lat, result.long);
          this.map.setOptions({
            center: myPos,
            zoom: 16
          });
          let marker = this.addMarker(myPos, "My last saved Location: " + result.location);
  
          markers.push(marker);
          this.bounceMap(markers);
  
          this.resizeMap();
        }
      });
    }
  */



  // go show currrent location

  // toggleSearch() {
  //   if (this.search) {
  //     this.search = false;
  //   } else {
  //     this.search = true;
  //   }
  // }
}