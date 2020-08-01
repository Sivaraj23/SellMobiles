import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellsalespageRoutingModule } from './sellsalespage-routing.module';
import { SellsalespageComponent } from './sellsalespage/sellsalespage.component';

@NgModule({
  declarations: [SellsalespageComponent],
  imports: [
    CommonModule,
    SellsalespageRoutingModule
  ],
  exports: [
    SellsalespageComponent
  ]
})
export class SellsalespageModule { }
