import { SignUpPage } from '../sign-up/sign-up';
import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, AbstractControl, } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  submitAttempted: Boolean;
  Email: AbstractControl;
  data: any;
  Password: AbstractControl;
  loading: Loading;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, public http: Http, public storage: Storage, 
    public alertCtrl:AlertController,public loadingCtrl: LoadingController,public events: Events ) {

    this.data = this.formBuilder.group({
      Email: ['', Validators.compose([Validators.required, Validators.email])],
      Password: ['', Validators.compose([Validators.required, Validators.pattern('^.{6,15}$')])],
    });
    this.submitAttempted = false;
    this.Email = this.data.controls['Email'];
    this.Password = this.data.controls['Password'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logForm() {
    this.submitAttempted = true;
    if (this.Email.hasError('required') || this.Email.hasError('email')) {
      console.log("Email error");
      return;
    }
    else if (this.Password.hasError('required') || this.Password.hasError('pattern')) {
      console.log("password error");
      return;
    }

    let Userdata = {
      'Email': this.Email.value,
      'Password': this.Password.value,
    };
    this.loading = this.loadingCtrl.create({
      content: 'Uploading...',
    });
    this.loading.present();
    setTimeout(100);
    // this.storage.set('Name',this.Email.value);
    // this.storage.set('Password',this.Password.value);

    console.log(Userdata);
    this.http.post('http://localhost:5000/login', JSON.stringify(Userdata)).map(res => res.json()).subscribe(data => {
      let responseData = data;
      if (responseData.Error != "none") {
        this.loading.dismissAll();
        this.presentErrorAlert(responseData.Error);
      }
      else{
        this.loading.dismissAll();
        this.storage.set('Name', responseData.content[0].Name);
        this.storage.set('Email', responseData.content[0].Email);
        this.storage.set('Password', responseData.content[0].Password)
        this.storage.set('ID', responseData.content[0].ID);
        this.storage.set('Rating', responseData.content[0].Rating);
        this.events.publish('user:loggedin',"yo");
        this.openPage(HomePage);
      }
    },
      err => {
        console.log('error');
      });
    return;
  }
  presentErrorAlert(text) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: text,
      buttons: ['Dismiss']
    });
    alert.present();
  }
  
  signuppage(page) {
    this.navCtrl.push(SignUpPage);
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot(page);
  }
}
