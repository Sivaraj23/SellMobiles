import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminsellerpageRoutingModule } from './adminsellerpage-routing.module';
import { AdminsellerpageComponent } from './adminsellerpage/adminsellerpage.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgMaterialModule } from "src/app/core/designs/ngmaterial.module";
@NgModule({
  declarations: [
    AdminsellerpageComponent
  ],
  imports: [
    CommonModule,
    NgMaterialModule,
    AdminsellerpageRoutingModule,
    ChartsModule
  ],
  exports : [
    AdminsellerpageComponent
  ]
})
export class AdminsellerpageModule { }
