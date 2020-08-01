import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { AdmindashboardpageRoutingModule } from './admindashboardpage-routing.module';
import { AdmindashboardpageComponent } from './admindashboardpage/admindashboardpage.component';
import { NgMaterialModule } from "src/app/core/designs/ngmaterial.module";
// import { ComponentsModule } from "src/app/shared/components/components.module";

@NgModule({
  declarations: [
    AdmindashboardpageComponent
  ],
  imports: [
    CommonModule,
    NgMaterialModule,
    ChartsModule,
  
    AdmindashboardpageRoutingModule
  ],
  exports: [
    AdmindashboardpageComponent
  ]
})
export class AdmindashboardpageModule { }