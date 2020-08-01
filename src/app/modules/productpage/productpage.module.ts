import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgMaterialModule} from '../../core/designs/ngmaterial.module';
import { ProductpageRoutingModule } from './productpage-routing.module';
import { ProductpageComponent } from './productpage/productpage.component';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { CartService } from 'src/app/shared/services/cart-service/cart.service';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule,FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ProductpageComponent
  ],
  imports: [
    CommonModule,
    ProductpageRoutingModule,
    NgMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[
    ProductService,
    CartService
  ],
  exports: [
    ProductpageComponent
  ]
})
export class ProductpageModule { }
