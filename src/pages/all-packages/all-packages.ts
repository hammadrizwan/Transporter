import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PackagedetailPage } from '../packagedetail/packagedetail';
import { Http, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the AllPackagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google: any;

@IonicPage()
@Component({
  selector: 'page-all-packages',
  templateUrl: 'all-packages.html',
})
export class AllPackagesPage {
  responseData = [];
  skips: number;
  ID:any

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public storage: Storage,
    private alertCtrl: AlertController) {
    this.skips = 0;
    this.storage.get('ID').then((val) => {
      this.ID = val;
      console.log(this.ID)
      this.http.get('http://localhost:5000/allpackages', { params: {'TransporterID':this.ID, 'skips': this.skips } })
      .map(res => res.json()).subscribe(response => {
        response.content.map(item => {
          this.responseData.push(item);
        })
        console.log(response.content);
      });
    },
      err => {
        console.log('error');
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllPackagesPage');
  }

  openPackageDetailsPage(i: any) {
    this.navCtrl.push(PackagedetailPage, this.responseData[i]);
  }
  doInfinite(infiniteScroll) {

    this.skips = 10;
    var length = this.responseData.length;
    setTimeout(() => {
      this.http.get('http://localhost:5000/allpackages', { params: { 'TransporterID':this.ID,'skips': this.skips } }).map(res => res.json()).subscribe(response => {
        response.content.map(item => {
          this.responseData.push(item);
        })
        if (response.content == '') {
          console.log("End reached");
        }
      },
        err => {
          console.log('error');
        });
      // for (let i = 0; i < 30; i++) {
      //   this.items.push( this.items.length );
      // }
      if (length == this.responseData.length) {
        this.presentErrorAlert("There are no more packages left to show");
        infiniteScroll.enable(false);
      }
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 300);

  }
  presentErrorAlert(text) {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: text,
      buttons: ['Dismiss']
    });
    alert.present();
  }


}
