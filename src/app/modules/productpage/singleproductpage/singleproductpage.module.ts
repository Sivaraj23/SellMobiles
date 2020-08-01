import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleproductpageRoutingModule } from './singleproductpage-routing.module';
import {SingleproductComponent} from './singleproduct/singleproduct.component';
import {NgMaterialModule} from '../../.././core/designs/ngmaterial.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [SingleproductComponent],
  imports: [
    CommonModule,
    SingleproductpageRoutingModule,
    NgMaterialModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class SingleproductpageModule { }
