import { EnroutePage } from './../pages/enroute/enroute';
import { HomePage } from './../pages/home/home';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { ListPage } from '../pages/list/list';
import { NearbyPage } from '../pages/nearby/nearby';
import { Http } from '@angular/http';
import { DeliveredPage } from '../pages/delivered/delivered';
import { EnqueuedetailsPage } from '../pages/enqueuedetails/enqueuedetails';
import { PackagedetailPage } from '../pages/packagedetail/packagedetail';
import { PendingRequestsPage } from '../pages/pending-requests/pending-requests';
import { ProfilePage } from '../pages/profile/profile';
import { AllPackagesPage } from '../pages/all-packages/all-packages';
import { EnqueuePage } from '../pages/enqueue/enqueue';
import { NotificationsPage } from '../pages/notifications/notifications';
import { HelpPage } from '../pages/help/help';
import { LoginPage } from '../pages/login/login';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import * as firebase from 'Firebase';
import { FCM } from '@ionic-native/fcm';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/interval";
var config = {
  apiKey: "AIzaSyDK3eYlkVHJTY83OOYXVIZQRq5C549pBcc",
  authDomain: "transporterdnd.firebaseapp.com",
  databaseURL: "https://transporterdnd.firebaseio.com",
  projectId: "transporterdnd",
  storageBucket: "transporterdnd.appspot.com",
  messagingSenderId: "680127595430"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any;//the start page of the application
  pages: Array<{ title: string, component: any }>;
  Name: string;//User name to be showin in the side bar
  NotificationData = [];//to store notification data temporar ily
  Token: any;//FCM token
  ID: any;//User ID
  profileImage: any;//Profile image to be shown in side bar
  loggedIn: Boolean = false;//used to enable side bar after user has entered the application
  ref: any;//firebase reference
  observer: any;//observer to sending tracking information
  myPosition: any;//current postion of user
  string:any="";
  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public events: Events,
    public storage: Storage,
    private fcm: FCM,
    private alertCtrl: AlertController,
    public http: Http,
    public geolocation: Geolocation, ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.loggedIn = false;
      this.storage.get('Name').then((val) => {//check if user initals are set or not
        if (val == null) {
          this.rootPage = LoginPage; //set landing page as login page
          this.loadData().then(() => {
            this.loggedIn = true; 
            console.log("inhere")
            //this.subscribeWatch();
            //this.updateToken();
            //this.onNotification();
          })
        }
        else {
          this.rootPage = HomePage;//set landing page as home page
          this.getData().then(() => {
            console.log("inhere")
            this.loggedIn = true;
           // this.subscribeWatch();
            //this.updateToken();
            //this.onNotification();
          })
        }
      })
    });
    //user is not initailly logged in
    //firebase.initializeApp(config);//intialise firebase
    //this.ref = firebase.database().ref('geolocations/');//assign data base to store gelocation

    this.Name = "";//name value is not set
    this.pages = [
      { title: 'All Packages', component: HomePage },
      { title: 'Pending Requests', component: PendingRequestsPage },
      { title: 'Enqueue Packages', component: EnqueuePage },
      { title: 'Delivered Packages', component: DeliveredPage },
      { title: 'Notifications', component: NotificationsPage },
      { title: 'Help', component: HelpPage },
    ];
    //this.onNotification();
    //this.subscribeWatch();//function that starts sending gelocation to database
    //console.log(this.loggedIn)  
  }
  private loadData(): Promise<any> {//promise used to ensure data has been loaded before it is acessed
    return new Promise((resolve, reject) => {
      //put the values in local storage
    this.events.subscribe('user:loggedin', (text) => {//event fires when user logs in or signups
        this.storage.get('Name').then((val) => {
          this.Name = val;
        });
        this.storage.get('ProfileImage').then((val) => {
          this.profileImage = val;
        });
        
        resolve();
        //wait just in case
      })
    });
  }
  private getData(): Promise<any> {//promise used to ensure data has been loaded before it is acessed
    return new Promise((resolve, reject) => {
      //put the values in local storage
      this.storage.get('Name').then((val) => {
        this.Name = val;
      });
      this.storage.get('ProfileImage').then((val) => {
        this.profileImage = val;
      });
      resolve();
      //wait just in case
    })

  }

  subscribeWatch() {
    //this.watch = this.geolocation.watchPosition();
    //this.watch.subscribe((data) => {
      // you can set your id here
      //this.updateGeolocation("hello", data.coords.latitude, data.coords.longitude);

    // });
    // this.watch.unsubscribe();
    this.observer = Observable.interval(5000).subscribe(() => {//update timer to 20 seconds
      this.geolocation.getCurrentPosition().then(
        (position) => {
          console.log("ALoha" + position.coords.latitude, position.coords.longitude);
          let newPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          if (JSON.stringify(this.myPosition) !=JSON.stringify(newPosition)) {
            this.updateGeolocation(position.coords.latitude,position.coords.longitude);
            this.myPosition=newPosition;
            console.log("my:"+this.myPosition)
            console.log("new:"+newPosition)
          }
    });
  });
  }
  updateGeolocation(lat, lng) {
    this.storage.get('ID').then((val) => {//get User ID
      this.ID = val;
      if (this.ID != null) {
        firebase.database().ref('geolocations/' + this.ID).set({//Update user data in database or create new if does not exist
          ID: this.ID,//user ID
          latitude: lat,//new longitude
          longitude: lng//new latitude
        });
      } else {
        console.log("op errors");
      }
    });
  }
  ionViewDidLoad() {

  }


  openPage(page) {
    this.nav.setRoot(page.component);
  }
  openProfile() {
    this.nav.push(ProfilePage);
  }
  logout() {

    /*remove all storage values*/
    this.storage.set('Name', null);
    this.storage.set('Email', null);
    this.storage.set('ID', null);
    this.storage.set('ProfileImage', null);
    this.storage.set('FCMToken', null);

    
    /*________________________________*/
    this.nav.setRoot(LoginPage);//reroute to to login page
    setTimeout(() => {//wait to storage is set
      this.loggedIn=false;
    }, 1500);
  }
  onNotification() {
    this.fcm.onNotification().subscribe(data => {//notification subscribe
      if (data.wasTapped) {//notification in background was tapped
        if(data.PackageAcceptance=="true"){
          this.storage.get('NotificationData').then((val) => {
            this.string="Your Bid for"+data.PackageName+"has been accepted";
            if(val!=null){
              this.NotificationData=val;
            }
            console.log(this.string)
            this.NotificationData.push(this.string);
            this.storage.set('NotificationData', this.NotificationData);//notification data
            this.nav.setRoot(EnqueuePage);
            this.string=""
          });
        }
        else if(data.PackageAcceptance=="false"){
            this.string="Your Bid for"+data.PackageName+"has been denied";
            console.log(this.string)
            this.showNotification(this.string)
            this.NotificationData.push(this.string);
            this.storage.set('NotificationData', this.NotificationData);//notification data
            this.string=""
        }
        else{
          this.storage.get('NotificationData').then((val) => {
            console.log(data)
            if(val!=null){
              this.NotificationData=val;
            }
            this.NotificationData.push(data.Notification);
            this.storage.set('NotificationData', this.NotificationData);//notification data
            this.nav.setRoot(NotificationsPage, this.NotificationData);
          });
        }

      } else {
        //this.showNotification(JSON.stringify(data));
        console.log(data);
        if(data.PackageAcceptance=="true"){
          this.storage.get('NotificationData').then((val) => {
            this.string="Your Bid for"+data.PackageName+"has been accepted";
            if(val!=null){
              this.NotificationData=val;
            }
            console.log(this.string)
            this.NotificationData.push(this.string);
            this.storage.set('NotificationData', this.NotificationData);//notification data
            this.nav.setRoot(EnqueuePage);
            this.string=""
          });
        }
        else if(data.PackageAcceptance=="false"){
          this.string="Your Bid for"+data.PackageName+"has been denied";
          console.log(this.string)
          this.showNotification(this.string)
          this.NotificationData.push(this.string);
          this.storage.set('NotificationData', this.NotificationData);//notification data
          this.string=""
        }
        else{
          this.storage.get('NotificationData').then((val) => {
            console.log(data)
            if(val!=null){
              this.NotificationData=val;
            }
            this.NotificationData.push(data.Notification);
            this.showNotification(data.Notification)
            this.storage.set('NotificationData', this.NotificationData);//notification data
            this.nav.setRoot(NotificationsPage, this.NotificationData);
          });
        }
        
        
      }
    });
    this.fcm.onTokenRefresh().subscribe(token => {//if token is updated then store renewed token
      this.storage.get('ID').then((val) => {
        this.ID = val;
        let data = {
          'ID': this.ID,
          'appType': "Transporter",
          'FCMToken': token,
        };
        this.http.post('http://localhost:5000/updateToken', JSON.stringify(data)).map(res => res.json()).subscribe(data => {
        },
          err => {
            console.log('error');
          });
      });
    });
  }
  updateToken() {
    this.fcm.getToken().then(token => {
      console.log(token);
      this.Token = token;
      console.log("heres inside sdasd")
      this.storage.get('ID').then((val) => {
        this.ID = val;
        let data = {
          'ID': this.ID,
          'appType': "Transporter",
          'FCMToken': this.Token,
        };
        this.storage.set('FCMToken', this.Token);//FCM token
        this.http.post('http://localhost:5000/updateToken', JSON.stringify(data)).map(res => res.json()).subscribe(data => {
        },
          err => {
            console.log('error');
          });
      });
    });
  }

  showNotification(text) {
    let alert = this.alertCtrl.create({
      title: 'Notification',
      subTitle: text,
      buttons: ['Dismiss']
    });
    alert.present();
  }
}

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

