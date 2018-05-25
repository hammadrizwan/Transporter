import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http, RequestOptions } from '@angular/http';
import { PackagedetailPage } from '../packagedetail/packagedetail';
/**
 * Generated class for the DeliveredPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delivered',
  templateUrl: 'delivered.html',
})
export class DeliveredPage {
  responseDataDelivered = [];
  skips: number;
  ID:any
  infiniteScroll:any;
  constructor(public navCtrl: NavController, public navParams: NavParams
    ,public storage: Storage,private alertCtrl: AlertController,private http:Http) {
    this.skips = 0;
    this.storage.get('ID').then((val) => {
      this.ID = val;
      console.log("va"+val);
      console.log(this.ID)
      this.http.get('http://localhost:5000/deliveredPackges', { params: {'TransporterID':this.ID, 'skips': this.skips } })
      .map(res => res.json()).subscribe(response => {
        response.content.map(item => {
          this.responseDataDelivered.push(item);
        })
        console.log(response.content);
      });
    },
      err => {
        console.log('error');
      });
  }
  openPackageDetailsPage(i: any) {
    this.navCtrl.push(PackagedetailPage, this.responseDataDelivered[i]);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeliveredPage');
  }
  doInfinite(infiniteScroll) {
    this.infiniteScroll=infiniteScroll;
    this.skips = 10;
    var length = this.responseDataDelivered.length;
    setTimeout(() => {
      this.http.get('http://localhost:5000/deliveredPackges', { params: { 'TransporterID':this.ID,'skips': this.skips } }).map(res => res.json()).subscribe(response => {
        response.content.map(item => {
          this.responseDataDelivered.push(item);
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
      if (length == this.responseDataDelivered.length) {
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
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.responseDataDelivered=[]
    this.skips = 0;
    setTimeout(() => {
      console.log('Async operation has ended');
     
    this.storage.get('ID').then((val) => {
      this.ID = val;
      console.log("va"+val);
      console.log(this.ID)
      this.http.get('http://localhost:5000/deliveredPackges', { params: {'TransporterID':this.ID, 'skips': this.skips } })
      .map(res => res.json()).subscribe(response => {
        response.content.map(item => {
          this.responseDataDelivered.push(item);
        })
        console.log(response.content);
      });
    },
      err => {
        console.log('error');
      }); 
      refresher.complete();
      if(this.infiniteScroll!=null){
        this.infiniteScroll.enable(true)
      }
    }, 2000);     
  }
}
