import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnqueuePage } from './enqueue';

@NgModule({
  declarations: [
    EnqueuePage,
  ],
  imports: [
    IonicPageModule.forChild(EnqueuePage),
  ],
})
export class EnqueuePageModule {}
