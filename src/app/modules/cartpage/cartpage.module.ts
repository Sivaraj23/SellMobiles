import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  CartpageRoutingModule } from './cartpage-routing.module';
import {CartItemComponent} from './cart-item/cart-item.component';
import { CartHomeComponent } from './cart-home/cart-home.component';

import { NgMaterialModule } from 'src/app/core/designs/ngmaterial.module';

@NgModule({
  declarations: [CartItemComponent, CartHomeComponent],
  imports: [
    CommonModule,
    NgMaterialModule,
    CartpageRoutingModule
   
  ]
})
export class CartpageModule { }

