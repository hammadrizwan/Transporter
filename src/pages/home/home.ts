import { Component,ViewChild } from '@angular/core';
import { Nav ,IonicPage, NavController, NavParams } from 'ionic-angular';

import { EnroutePage } from './../enroute/enroute';
import { NearbyPage } from './../nearby/nearby';
import { AllPackagesPage } from './../all-packages/all-packages';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  allpackagespage=AllPackagesPage;
  nearbypage=NearbyPage;
  enroutepage=EnroutePage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  

}
