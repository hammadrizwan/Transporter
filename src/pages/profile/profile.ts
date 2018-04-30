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
  ID: any;
  Name:any;
  ContantInfo:any;
  Rating:any;
  ClearenceDue:any;
  ActivePackages:any;
  CancelledPackages:any;
  DeliveriesDone:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage
  ,public http:Http) {
    this.storage.get('ID').then((val) => {
      this.ID=val;
    
    console.log('http://localhost:5000/getransporterdata?TransporterID='+this.ID);
    this.http.get('http://localhost:5000/getransporterdata?TransporterID='+this.ID).map(res => res.json()).subscribe(response => {
      console.log(response.content);  
      this.Name=response.content[0].Name;
      console.log(this.Name);
      this.ContantInfo=response.content[0].Phone;
      console.log(this.ContantInfo);
      this.Rating=response.content[0].Rating;
      console.log(this.Rating);
      this.ClearenceDue=response.content[0].ClearenceDue;
      console.log(this.ClearenceDue);
      this.CancelledPackages=response.content[0].CancelledPackages;
      this.ActivePackages=response.content[0].ActivePackages;
      console.log(this.CancelledPackages);
    },
        err => {
        console.log('error');
      });
    });



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
