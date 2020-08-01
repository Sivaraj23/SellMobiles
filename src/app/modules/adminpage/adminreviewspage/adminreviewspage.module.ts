import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminreviewspageRoutingModule } from './adminreviewspage-routing.module';
import { AdminreviewspageComponent } from './adminreviewspage/adminreviewspage.component';
import { NgMaterialModule } from "src/app/core/designs/ngmaterial.module";


@NgModule({
  declarations: [
    AdminreviewspageComponent
  ],
  imports: [
    CommonModule,
    AdminreviewspageRoutingModule,
    NgMaterialModule
  ],
  exports: [
    AdminreviewspageComponent
  ]
})
export class AdminreviewspageModule { }
