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
  ID: any;//hold user ID for http request
  responseDataEnqueue = [];//to store packages data to be displayed
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,
    private alertCtrl: AlertController, public storage: Storage) {
    this.getPackages();//call the method to get packages from server
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnqueuePage');//page loaded
  }
  openEnqueuedetailsPage(i: any) {
    this.navCtrl.push(EnqueuedetailsPage, this.responseDataEnqueue[i]);//push enque details page for package id =i
  }

  getPackages() {
    this.storage.get('ID').then((val) => {//get the user ID form storage
      this.ID = val;
      this.http.get('http://localhost:5000/enquedpackages',{params:{'TransporterID': this.ID}}).map(res => res.json()).subscribe(response => {
        if (response.content == "failed") {//no packages found
          this.responseDataEnqueue=[];//set to empty
          this.presentAlert("No Enqueued Packages Found");//prompt error to user
        }
        else {
          response.content.map(item =>{//iterate over all the packages and insert them in to responseDataEnqueue array
            this.responseDataEnqueue.push(item);//insert into array
          });
        }
      },
        err => {
          console.log(err);//if http request gets an error
        });
    });
  }
  presentAlert(text) {
    let alert = this.alertCtrl.create({//create an alert
      title: text,//set the text of the alert to the provided text
      buttons: ['Dismiss'],//dismiss alert
    });
    alert.present();
  }

}
