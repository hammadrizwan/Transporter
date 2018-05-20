import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, AbstractControl, } from '@angular/forms';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { HomePage } from '../home/home';
declare var cordova: any;
import { FCM } from '@ionic-native/fcm';
import { Events } from 'ionic-angular';
/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  id: number;
  loading: Loading;
  lastImage1: string = null;
  lastImage2: string = null;
  lastImage3: string = null;
  submitAttempted: Boolean;
  data: FormGroup;
  Name: AbstractControl;
  Email: AbstractControl;
  CNIC: AbstractControl;
  Phone: AbstractControl;
  Address: AbstractControl;
  CarRegistrationNo: AbstractControl;
  Password: AbstractControl;
  Date: AbstractControl;
  Month: AbstractControl;
  Year: AbstractControl;
  Gender: AbstractControl;
  transportType:AbstractControl;
  Token: any;
  constructor(public navCtrl: NavController,
    private camera: Camera,
    private transfer: FileTransfer,
    private file: File,
    private filePath: FilePath,
    public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController,
    public platform: Platform,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    public http: Http,
    public storage: Storage,
    private fcm: FCM,
    public events: Events,) {
      //formbuilder used for error checking and validation of data at client side
    this.data = this.formBuilder.group({
      lastImage1: ['', Validators.required],
      lastImage2: ['', Validators.required],
      lastImage3: ['', Validators.required],
      Name: ['', Validators.required],
      transportType:['transportyype', [Validators.required, Validators.pattern('^((?!transportyype).)*$')]],
      Email: ['', Validators.compose([Validators.required, Validators.email])],
      CNIC: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$')])],
      Phone: ['', Validators.compose([Validators.required, Validators.pattern('03[0-9]{9}$')])],
      Address: ['', Validators.required],
      CarRegistrationNo: ['', Validators.compose([Validators.required, Validators.pattern('^[A-Z]{3}(( ([0]{1}[7-9]{1}|[1]{1}[0-9]{1})[A,B]{0,1} | ))[0-9]{1,4}$')])],
      Password: ['', Validators.compose([Validators.required, Validators.pattern('^.{6,15}$')])],
      Date: ['date', Validators.compose([Validators.required, Validators.pattern('^((?!date).)*$')])],
      Month: ['month', Validators.compose([Validators.required, Validators.pattern('^((?!month).)*$')])],
      Year: ['year', Validators.compose([Validators.required, Validators.pattern('^((?!year).)*$')])],
      Gender: ['gender', Validators.compose([Validators.required, Validators.pattern('^((?!gender).)*$')])],
    });
    //bind the variables to input elements in the form making error checking and data access easier
    this.Name = this.data.controls['Name'];
    this.transportType = this.data.controls['transportType'];
    this.Email = this.data.controls['Email'];
    this.CNIC = this.data.controls['CNIC'];
    this.Phone = this.data.controls['Phone'];
    this.Address = this.data.controls['Address'];
    this.CarRegistrationNo = this.data.controls['CarRegistrationNo'];
    this.Password = this.data.controls['Password'];
    this.submitAttempted = false;
    this.Date = this.data.controls['Date'];
    this.Month = this.data.controls['Month'];
    this.Year = this.data.controls['Year'];
    this.Gender = this.data.controls['Gender'];
  }

  logForm() {//fucntion called when user tries to register with the server
    
    this.submitAttempted = true;//set true for error checking after user has entered all information
    //error checking for all fields in the signup form
    if (this.Name.hasError('required')) {
      this.presentErrorAlert("Some values have been entered Incorectly");
      return;
    }
    else if (this.Email.hasError('required') || this.Email.hasError('email')) {
      //console.log("Email error");
      this.presentErrorAlert("Some values have been entered Incorectly");
      return;
    }
    else if (this.CNIC.hasError('required') || this.CNIC.hasError('pattern')) {
      //console.log("CNIC error");
      this.presentErrorAlert("Some values have been entered Incorectly");
      return;
    }
    else if (this.Phone.hasError('required') || this.Phone.hasError('pattern')) {
      //console.log("Phone number error");
      this.presentErrorAlert("Some values have been entered Incorectly");
      return;
    }
    else if (this.CarRegistrationNo.hasError('required') || this.CarRegistrationNo.hasError('pattern')) {
      //console.log("Car registration error");
      this.presentErrorAlert("Some values have been entered Incorectly");
      return;
    }
    
    else if (this.Date.hasError('pattern') || this.Month.hasError('pattern') || this.Year.hasError('pattern')) {
      //console.log(" Date Month Year error");
      this.presentErrorAlert("Some values have been entered Incorectly");
      return;
    }
    else if (this.Gender.hasError('pattern')) {
      //console.log("Gender error");
      this.presentErrorAlert("Some values have been entered Incorectly");
      return;
    }
    else if (this.transportType.hasError('pattern') ) {
      //console.log("transportType error");
      this.presentErrorAlert("Some values have been entered Incorectly");
      return;
    }
    else if (this.Password.hasError('required') || this.Password.hasError('pattern')) {
      //console.log("Passworderror");
      this.presentErrorAlert("Some values have been entered Incorectly");
      return;
    }
    this.loading = this.loadingCtrl.create({
      content: 'Creating Profile...',
    });
    console.log(this.transportType);
    

    
    console.log("ALosda")
      if(this.lastImage1 ==null || this.lastImage2==null || this.lastImage3==null ){
        if(this.lastImage1 ==null){
          this.presentErrorAlert("Profile image missing");         
        }
        if(this.lastImage2 ==null){
          this.presentErrorAlert("Liscence Image Missing");
        }
        if(this.lastImage3 ==null){
          this.presentErrorAlert("Vehicle Registration Image Missing");
        }

      }
      this.fcm.getToken().then(token=>{
        this.Token=token;
      
      this.loading.present();//show loading that request has been sent and response is bieng awaited for
      this.upload();
      let Userdata = {
        'ID': 0,
        'Name': this.Name.value,
        'Email': this.Email.value,
        'TransportType':this.transportType.value,
        'CNIC': this.CNIC.value,
        'Phone': this.Phone.value,
        'Address': this.Address.value,
        'CarRegistrationNo': this.CarRegistrationNo.value,
        'Password': this.Password.value,
        'Date': this.Date.value,
        'Month': this.Month.value,
        'Year': this.Year.value,
        'Gender': this.Gender.value,
        'Clearence Due': 0,
        'Rating': 0,
        'ActivePackages': 0,
        'CancelledPackages': 0.0,
        'FCMToken':this.Token,
        'ProfileImage':this.lastImage1,
      };
  
      this.http.post('http://localhost:5000/signup', JSON.stringify(Userdata)).map(res => res.json()).subscribe(data => {
        let responseData = data;
        console.log(responseData.Error);
        
        if (responseData.Error != "none") {
          this.presentErrorAlert(responseData.Error);
        }
        else {//if account creation successfull store these value in local storage as they will be required by the application
          this.storage.set('Name', this.Name.value);
          this.storage.set('Email', this.Email.value);
          this.storage.set('Password', this.Password.value)
          this.storage.set('ID', this.id);
          this.storage.set('Rating', 0);
          this.storage.set('FCMToken',this.Token);
          this.storage.set('ProfileImage',this.lastImage1);
          let Notifications=[];
          this.storage.set('NotificationData',Notifications);
          this.events.publish('user:loggedin',"yo");
          this.loading.dismissAll();
          this.navCtrl.setRoot(HomePage);
        }
      },
        err => {
          console.log('error');
        });
      //ALL things are now set just need to send data to the back end check for valid!!!/
    });
  }
  upload() {
    let fileTransfer: FileTransferObject = this.transfer.create();
    let options1: FileUploadOptions = {
      fileKey: 'file',
      fileName: this.lastImage1,
      headers: {}

    }

    fileTransfer.upload(this.pathForImage(this.lastImage1), 'http://localhost:5000/imageupload?type='+'Profile', options1, true)
      .then((data) => {
        console.log(data)
      }, (err) => {
        console.log("ALosda1")
        console.log(err)
      })
      let options2: FileUploadOptions = {
        fileKey: 'file',
        fileName: this.lastImage2,
        headers: {}
  
      }
      fileTransfer.upload(this.pathForImage(this.lastImage2), 'http://localhost:5000/imageupload?type='+'Liscence', options2, true)
      .then((data) => {
        console.log(data)
      }, (err) => {
        console.log("ALosda2")
        console.log(err)
      })
      let options3: FileUploadOptions = {
        fileKey: 'file',
        fileName: this.lastImage3,
        headers: {}
  
      }
      fileTransfer.upload(this.pathForImage(this.lastImage3), 'http://localhost:5000/imageupload?type='+'VehicleRegistration', options3, true)
      .then((data) => {
        console.log(data)
      }, (err) => {
        console.log("ALosd3")
        console.log(err)
      })
  }
  openPage(page) {//if account creation successfull open the home page
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot(page);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }


  //________________________________________________________CODE FOR CAMERA PHOTOES____________________________________
  public presentActionSheet(id) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY, id);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA, id);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }
  public takePicture(sourceType, id) {
    // Create options for the Camera Dialog
    var options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    // Get the data of an image
    this.camera.getPicture(options).then((imagePath) => {
      // Special handling for Android library
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName(), id);
          });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName(), id);
      }
    }, (err) => {
      this.presentErrorAlert('Error while selecting image.');
    });
  }

  private createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
    return newFileName;
  }
  // Copy the image to a local folder
  private copyFileToLocalDir(namePath, currentName, newFileName, id) {
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      switch (id) {
        case 1:
          this.lastImage1 = newFileName;
          break;
        case 2:
          this.lastImage2 = newFileName;
          break;
        case 3:
          this.lastImage3 = newFileName;
          break;
      }
    }, error => {
      this.presentErrorAlert('Error while storing file.');
    });
  }

  presentErrorAlert(text) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: text,
      buttons: ['Dismiss']
    });
    alert.present();
  }
  // Always get the accurate path to your apps folder
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return cordova.file.dataDirectory + img;
    }
  }
  
  //__________________________________________________________________________________________________________________

 
}
