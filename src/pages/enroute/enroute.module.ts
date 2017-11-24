import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnroutePage } from './enroute';

@NgModule({
  declarations: [
    EnroutePage,
  ],
  imports: [
    IonicPageModule.forChild(EnroutePage),
  ],
})
export class EnroutePageModule {}
