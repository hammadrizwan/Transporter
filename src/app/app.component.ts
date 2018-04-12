import { HomePage } from './../pages/home/home';
import { Component, ViewChild } from '@angular/core';
import { Nav ,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { SignUpPage } from '../pages/sign-up/sign-up';
import { EnroutePage } from '../pages/enroute/enroute';
import { ListPage } from '../pages/list/list';
import { NearbyPage } from '../pages/nearby/nearby';

import { EnqueuedetailsPage } from '../pages/enqueuedetails/enqueuedetails';
import { PackagedetailPage } from '../pages/packagedetail/packagedetail';
import { PendingRequestsPage } from '../pages/pending-requests/pending-requests';
import { ProfilePage } from '../pages/profile/profile';
import { AllPackagesPage } from '../pages/all-packages/all-packages';
import { EnqueuePage } from '../pages/enqueue/enqueue';
import { NotificationsPage } from '../pages/notifications/notifications';
import { HelpPage } from '../pages/help/help';
import {LoginPage} from '../pages/login/login';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = EnroutePage;
  pages: Array<{title: string, component: any}>;
  Name: string;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public events: Events
  ,public storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.Name="";
    this.pages = [
      { title: 'All Packages', component: HomePage },   
      { title: 'Pending Requests', component: PendingRequestsPage },
      { title: 'Enqueue Packages', component: EnqueuePage },      
      { title: 'Notifications', component: NotificationsPage },  
      { title: 'Help', component:  HelpPage},  
    ];

    events.subscribe('user:loggedin', (text) => {
      
      this.storage.get('Name').then((val) => {
        this.Name=val;
      });
      console.log(text);
    });
    
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  openProfile() {
    // profile Open
    
    this.nav.setRoot(ProfilePage);
  }
  logout(){
    this.Name="";
    this.storage.set('Name', "");
    this.storage.set('Email', "");
    this.storage.set('Password',"")
    this.storage.set('ID', "");
    this.storage.set('Rating',"");
    this.nav.setRoot(LoginPage);
  }
}

