import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  ID: any;//Transporter ID
  name: any;//Transporter name
  contantInfo: any;//Transporter phone number
  rating: any;//Transporter rating
  clearenceDue: any;//Transporter amount to be settled
  activePackages: any;//Transporter package deliveries in progress
  cancelledPackages: any;//Transporter  cancelled
  deliveriesDone: any;//Transporter  number of deliveries completed
  profileImage: any;//Transporter profile image 
  userReviews = [];
  skips: number;
  infiniteScroll: any;
  DeliveredPackages:any
  setValues:Boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage
    , public http: Http, private alertCtrl: AlertController) {
    this.skips = 0;
    this.getData().then(() => {
      this.setValues = true;
    })
    /*get Transporter ID from localstorage and  request data and put it into variables to show in view________________*/
    
  }
  private getData(): Promise<any> {//promise used to ensure data has been loaded before it is acessed
    return new Promise((resolve, reject) => {
      //put the values in local storage
      this.storage.get('ID').then((val) => {
        this.ID = val;
  
        this.http.get('http://localhost:5000/getransporterdata', { params: { 'TransporterID': this.ID } }).map(res => res.json()).subscribe(response => {
          console.log(response.content);
          this.name = response.content[0].Name;
          console.log(this.name);
          this.contantInfo = response.content[0].Phone;
          console.log(this.contantInfo);
          this.rating = Array(response.content[0].Rating).fill(response.content[0].Rating);
          console.log(this.rating);
          this.clearenceDue = response.content[0].ClearenceDue;
          console.log(this.clearenceDue);
          this.cancelledPackages = response.content[0].CancelledPackages;
          this.activePackages = response.content[0].ActivePackages;
          console.log(this.cancelledPackages);
          this.profileImage = response.content[0].ProfileImage;
          this.DeliveredPackages = response.content[0].DeliveredPackages;
        },
          err => {
            console.log('error');
          }); 
        /*_______________________________________________________________________________________________________________*/
        this.http.get('http://localhost:5000/getReviews', { params: { 'TransporterID': this.ID, 'skips': this.skips } }).map(res => res.json()).subscribe(response => {
          response.content.map(item => {
            //console.log(item['rating'])
            item['ratings'] = Array(item['rating']).fill(item['rating']);  
            //console.log("After"+item['ratings'])
            //console.log(item)
            this.userReviews.push(item);
            resolve();
          });
        },
          err => {
            console.log('error');
          });
      });
      
    });
  }
  doInfinite(infiniteScroll) {
    this.infiniteScroll = infiniteScroll;
    this.skips = this.skips + 3;
    console.log("skips", this.skips)
    var length = this.userReviews.length;
    setTimeout(() => {
      this.http.get('http://localhost:5000/getReviews', { params: { 'TransporterID': this.ID, 'skips': this.skips } }).map(res => res.json()).subscribe(response => {
        response.content.map(item => {
          item['ratings'] = Array(item['rating']).fill(item['rating']);
          this.userReviews.push(item);
        })
        if (response.content == '') {
          console.log("End reached");
        }
      },
        err => {
          console.log('error');
        });
      if (length == this.userReviews.length) {
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

  ionViewDidLoad() {//page has loaded
    console.log('ionViewDidLoad ProfilePage');
  }

}
