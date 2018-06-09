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
  responseDataDelivered = [];//to hold packages data
  skips: number;//skip the packages that have already been served
  ID: any//to store user ID
  infiniteScroll: any;
  constructor(public navCtrl: NavController, public navParams: NavParams
    , public storage: Storage, private alertCtrl: AlertController, private http: Http) {
    this.skips = 0;//initialise the skips to 0
    this.storage.get('ID').then((val) => {//get user ID
      this.ID = val;
      this.http.get('http://localhost:5000/deliveredPackges', { params: { 'TransporterID': this.ID, 'skips': this.skips } })
        .map(res => res.json()).subscribe(response => {//get packages request
          if (response.content == "failed") {//no packages found
            this.responseDataDelivered = [];//set to empty
            this.presentAlert("No Delivered Packages Found");//prompt error to user
          }
          else {
            response.content.map(item => {//traverse packges 
              this.responseDataDelivered.push(item);//insert packages into array
            })
            console.log(response.content);
          }
        });
    },
      err => {
        console.log('error');
      });
  }
  openPackageDetailsPage(i: any) {
    this.navCtrl.push(PackagedetailPage, this.responseDataDelivered[i]);//open package details page
  }
  presentAlert(text) {
    let alert = this.alertCtrl.create({//create an alert
      title: text,//set the text of the alert to the provided text
      buttons: ['Dismiss'],//dismiss alert
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeliveredPage');
  }
  doInfinite(infiniteScroll) {
    this.infiniteScroll = infiniteScroll;//create infinitescroll object
    this.skips += 10;//skip the skip+10 messages
    var length = this.responseDataDelivered.length;//to check if no more packages are available
    setTimeout(() => {
      this.http.get('http://localhost:5000/deliveredPackges', { params: { 'TransporterID': this.ID, 'skips': this.skips } }).map(res => res.json()).subscribe(response => {
        response.content.map(item => {//traverse packages 
          this.responseDataDelivered.push(item);//insert packages into list to be displayed
        })
      },
        err => {
          console.log(err);//if http returns an error show it
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
  presentErrorAlert(text) {//create alert method
    let alert = this.alertCtrl.create({//create new alert
      title: text,//alert message
      buttons: ['Dismiss']//dismiss alert shown
    });
    alert.present();//present alert to user
  }
  doRefresh(refresher) {//pull to refresh
    console.log('Begin async operation', refresher);
    this.responseDataDelivered = []//reset the array data to empty
    this.skips = 0;//reset the number of packages already served
    console.log('Async operation has ended');

    this.storage.get('ID').then((val) => {//get ID from storage
      this.ID = val;
      console.log("va" + val);
      console.log(this.ID)
      this.http.get('http://localhost:5000/deliveredPackges', { params: { 'TransporterID': this.ID, 'skips': this.skips } })
        .map(res => res.json()).subscribe(response => {//send request to server to get latest data
          response.content.map(item => {//insert data into responseDataDelivered
            this.responseDataDelivered.push(item);
          })
          console.log(response.content);
        });
    },
      err => {
        console.log(err);//if error with http request log
      });
    refresher.complete();//complete refreshing process and dismiss loading 
    if (this.infiniteScroll != null) {//check if infinite scroll if off
      this.infiniteScroll.enable(true)//reset infinite scroll if turned off
    }
  }
}
