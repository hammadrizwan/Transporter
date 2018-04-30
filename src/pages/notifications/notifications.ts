import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FCM } from '@ionic-native/fcm';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';


/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {
  NotificationData = [];
  Token:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private fcm: FCM,private alertCtrl: AlertController, private http:Http) {
  //  this.onNotification();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
  }

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
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot(page);
  }
  showNotification(noti){
    let alert = this.alertCtrl.create({
    title: 'Notification',
    subTitle: noti,
    buttons: ['Dismiss']
  });
  alert.present();
  }
  sendNotify(){
    this.http.get('http://localhost:5000/notify').map(res => res.json()).subscribe(response => {
        
      },
        err => {
          console.log('error');
        });
        
  }
}
