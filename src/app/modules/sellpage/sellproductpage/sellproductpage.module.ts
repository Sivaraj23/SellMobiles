import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellproductpageRoutingModule } from './sellproductpage-routing.module';
import { SellproductpageComponent } from './sellproductpage/sellproductpage.component';
import { NgMaterialModule } from "src/app/core/designs/ngmaterial.module";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    SellproductpageComponent
  ],
  imports: [
    CommonModule,
    SellproductpageRoutingModule,
    FormsModule,ReactiveFormsModule,
    NgMaterialModule
  ],
  exports: [
    SellproductpageComponent
  ]
})
export class SellproductpageModule { }
