import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PackagedetailPage } from './packagedetail';

@NgModule({
  declarations: [
    PackagedetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PackagedetailPage),
  ],
})
export class PackagedetailPageModule {}
