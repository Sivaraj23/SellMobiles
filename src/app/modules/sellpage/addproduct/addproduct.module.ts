import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddproductComponent} from './addproduct.component'
import { AddproductRoutingModule } from './addproduct-routing.module';
import {NgMaterialModule} from '../../.././core/designs/ngmaterial.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AddproductComponent],
  imports: [
    CommonModule,
    AddproductRoutingModule,
    FormsModule,ReactiveFormsModule,
     NgMaterialModule                
  ]
})
export class AddproductModule { }
