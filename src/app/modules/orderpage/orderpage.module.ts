import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderpageRoutingModule } from './orderpage-routing.module';
import { OrderpageComponent } from './orderpage/orderpage.component';

@NgModule({
  declarations: [OrderpageComponent],
  imports: [
    CommonModule,
    OrderpageRoutingModule
  ],
  exports: [
    OrderpageComponent
  ]
})
export class OrderpageModule { }
