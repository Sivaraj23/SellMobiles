import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmincustomerspageRoutingModule } from './admincustomerspage-routing.module';
import { AdmincustomerspageComponent } from './admincustomerspage/admincustomerspage.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgMaterialModule } from "src/app/core/designs/ngmaterial.module";



@NgModule({
  declarations: [
    AdmincustomerspageComponent
  ],
  imports: [
    CommonModule,
    AdmincustomerspageRoutingModule,
    ChartsModule,
    NgMaterialModule
  ],exports: [
    AdmincustomerspageComponent
  ]
})
export class AdmincustomerspageModule { }
