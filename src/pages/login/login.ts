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
  constructor(private navCtrl: NavController, private navParams: NavParams,
    private formBuilder: FormBuilder, private http: Http,
    private storage: Storage,private alertCtrl: AlertController,
    private loadingCtrl: LoadingController, private events: Events) {

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

    let Userdata = {//user data sent for user authentication
      'Email': this.Email.value,//email 
      'Password': this.Password.value,//password
    };
    this.loading = this.loadingCtrl.create({
      content: 'Logging In...',
    });
    this.loading.present();
    setTimeout(100);
    // this.storage.set('Name',this.Email.value);
    // this.storage.set('Password',this.Password.value);

    console.log(Userdata);
    this.http.post('http://localhost:5000/logintransporter', JSON.stringify(Userdata)).map(res => res.json()).subscribe(data => {
      let responseData = data;
      if (responseData.Error != "none") {
        this.presentErrorAlert(responseData.Error);
        this.loading.dismissAll();
      }
      else {
        this.dataloaded(responseData).then(() => {//promise to wait for the data to be loaded
          this.events.publish('user:loggedin', "dataloaded");//to set data values
          this.loading.dismissAll();//dismiss loading
          this.navCtrl.setRoot(HomePage);//go to home page
        })
      }
    },
      err => {
        console.log('error');
      });
    return;
  }
  dataloaded(responseData): Promise<any> {//promise used to ensure data has been loaded before it is acessed
    return new Promise((resolve, reject) => {
      //put the values in local storage
      this.storage.set('Name', responseData.content[0].Name);
      this.storage.set('Email', responseData.content[0].Email);
      this.storage.set('Password', responseData.content[0].Password)
      this.storage.set('ID', responseData.content[0].ID);
      this.storage.set('Rating', responseData.content[0].Rating);
      this.storage.set('FCMToken', responseData.content[0].FCMToken);
      this.storage.set('ProfileImage', responseData.content[0].ProfileImage);
      let Notifications = [];
      this.storage.set('NotificationData', Notifications);//try to make this global 
      setTimeout(() => {
        resolve();
      }, 2000);//wait just in case
    })
  }
  presentErrorAlert(text) {//error alert creator method
    let alert = this.alertCtrl.create({
      title: text,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  signuppage(page) {//push the signup page in event the user has no account
    this.navCtrl.push(SignUpPage);
  }
}
