import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnqueuedetailsPage } from '../enqueuedetails/enqueuedetails';
import { Http, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the EnqueuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enqueue',
  templateUrl: 'enqueue.html',
})
export class EnqueuePage {
  ID: any;
  responseDataEnqueue = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,
    private alertCtrl: AlertController, public storage: Storage) {
    this.getPackages();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnqueuePage');
  }
  openEnqueuedetailsPage(i: any) {
    this.navCtrl.push(EnqueuedetailsPage, this.responseDataEnqueue[i]);
  }

  getPackages() {
    this.storage.get('ID').then((val) => {
      this.ID = val;
      this.http.get('http://localhost:5000/enquedpackages?TransporterID=' + this.ID).map(res => res.json()).subscribe(response => {
        if (response.content == "failed") {
          this.responseDataEnqueue=[];
          this.presentAlert("No Enqueued Packages Found");
        }
        else {
          response.content.map(item =>{
            this.responseDataEnqueue.push(item);
          });
        }
      },
        err => {
          console.log(err);
        });
    });
  }
  presentAlert(text) {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: text,
      buttons: ['Dismiss'],
    });
    alert.present();
  }

}
