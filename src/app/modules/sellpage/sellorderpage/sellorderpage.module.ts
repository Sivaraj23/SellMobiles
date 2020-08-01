import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellorderpageRoutingModule } from './sellorderpage-routing.module';
import { SellorderpageComponent } from './sellorderpage/sellorderpage.component';

@NgModule({
  declarations: [SellorderpageComponent],
  imports: [
    CommonModule,
    SellorderpageRoutingModule
  ],
  exports: [
    SellorderpageComponent
  ]
})
export class SellorderpageModule { }
