import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnqueuedetailsPage } from '../enqueuedetails/enqueuedetails';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnqueuePage');
  }
  openEnqueuedetailsPage(){
    this.navCtrl.push(EnqueuedetailsPage);
  }

}
