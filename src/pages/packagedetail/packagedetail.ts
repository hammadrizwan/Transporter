import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PackagedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-packagedetail',
  templateUrl: 'packagedetail.html',
})
export class PackagedetailPage {
  data=[]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data.push(this.navParams.data);
    console.log(this.data);
  }

  

}
