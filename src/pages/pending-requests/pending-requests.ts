import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PackagedetailPage } from '../packagedetail/packagedetail';
import { Http, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the PendingRequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pending-requests',
  templateUrl: 'pending-requests.html',
})
export class PendingRequestsPage {
  responseDataPending = [];
  ID: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,
    private alertCtrl: AlertController, public storage: Storage) {
    this.getPackages();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingRequestsPage');
  }
  openPackageDetailsPage(i: any) {
    this.navCtrl.push(PackagedetailPage, this.responseDataPending[i]);
  }

  getPackages() {
    this.storage.get('ID').then((val) => {
      this.ID = val;
      console.log(this.ID);
      this.http.get('http://localhost:5000/pendingpackages?TransporterID=' + this.ID).map(res => res.json()).subscribe(response => {
        if (response.content == "failed") {
          this.responseDataPending = [];
          this.presentAlert("No Pending Packages Found");
        }
        else {
          response.content.map(item =>{
            this.responseDataPending.push(item);
          });
          console.log(response.content[0]);
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
