import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';

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
  name:any;//Transporter name
  contantInfo:any;//Transporter phone number
  rating:any;//Transporter rating
  clearenceDue:any;//Transporter amount to be settled
  activePackages:any;//Transporter package deliveries in progress
  cancelledPackages:any;//Transporter  cancelled
  deliveriesDone:any;//Transporter  number of deliveries completed
  profileImage:any;//Transporter profile image 
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage
  ,public http:Http) {
    /*get Transporter ID from localstorage and  request data and put it into variables to show in view________________*/
    this.storage.get('ID').then((val) => {
      this.ID=val;
      
    this.http.get('http://localhost:5000/getransporterdata',{params:{'TransporterID': this.ID}}).map(res => res.json()).subscribe(response => {
      console.log(response.content);  
      this.name=response.content[0].Name;
      console.log(this.name);
      this.contantInfo=response.content[0].Phone;
      console.log(this.contantInfo);
      this.rating=response.content[0].Rating;
      console.log(this.rating);
      this.clearenceDue=response.content[0].ClearenceDue;
      console.log(this.clearenceDue);
      this.cancelledPackages=response.content[0].CancelledPackages;
      this.activePackages=response.content[0].ActivePackages;
      console.log(this.cancelledPackages);
      this.profileImage=response.content[0].ProfileImage;
     
    },
        err => {
        console.log('error');
      });
    });
     /*_______________________________________________________________________________________________________________*/
  }

  ionViewDidLoad() {//page has loaded
    console.log('ionViewDidLoad ProfilePage');
  }

}
