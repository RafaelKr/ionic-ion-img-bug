import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { LoadingImgComponent } from './loading-img.component';


@NgModule({
  declarations: [LoadingImgComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [LoadingImgComponent],
  entryComponents: [LoadingImgComponent],
})
export class LoadingImgComponentModule {
}
