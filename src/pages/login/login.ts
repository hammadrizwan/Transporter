import { SignUpPage } from '../sign-up/sign-up';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, AbstractControl, } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { Storage } from '@ionic/storage';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, public http: Http, public storage: Storage) {

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
    // this.storage.set('Name',this.Email.value);
    // this.storage.set('Password',this.Password.value);

    console.log(Userdata);
    this.http.post('http://localhost:5000/login', JSON.stringify(Userdata)).map(res => res.json()).subscribe(data => {
      let responseData = data;
      console.log(responseData);
    },
      err => {
        console.log('error');
      });
    return;
  }

  signuppage() {
    this.navCtrl.push(SignUpPage);
  }
}
