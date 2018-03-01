import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import {IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { EnroutePage } from '../pages/enroute/enroute';
import { ListPage } from '../pages/list/list';
import { NearbyPage } from '../pages/nearby/nearby';
import { TabsPage } from '../pages/tabs/tabs';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera'
import { EnqueuedetailsPage } from '../pages/enqueuedetails/enqueuedetails';
import { PackagedetailPage } from '../pages/packagedetail/packagedetail';
import { PendingRequestsPage } from '../pages/pending-requests/pending-requests';
import { ProfilePage } from '../pages/profile/profile';
import { AllPackagesPage } from '../pages/all-packages/all-packages';
import { EnqueuePage } from '../pages/enqueue/enqueue';
import { NotificationsPage } from '../pages/notifications/notifications';
import {HelpPage} from '../pages/help/help'
import {LoginPage} from '../pages/login/login'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignUpPage,
    EnroutePage,
    ListPage,
    NearbyPage,
    EnqueuedetailsPage,
    PackagedetailPage,
    PendingRequestsPage,
    ProfilePage,
    AllPackagesPage,
    EnqueuePage,
    NotificationsPage,
    HelpPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      tabsPlacement :'top',
    }),
    IonicStorageModule.forRoot(), 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignUpPage,
    EnroutePage,
    ListPage,
    NearbyPage,
    EnqueuedetailsPage,
    PackagedetailPage,
    PendingRequestsPage,
    ProfilePage,
    AllPackagesPage,
    EnqueuePage,
    NotificationsPage,
    HelpPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    Transfer,
    Camera,
    FilePath,
    Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
