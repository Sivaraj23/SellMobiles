import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMaterialModule } from "../../../core/designs/ngmaterial.module";
import { SelldashboardpageRoutingModule } from './selldashboardpage-routing.module';
import { SelldashboardpageComponent } from './selldashboardpage/selldashboardpage.component';
import { ChartsModule } from "ng2-charts";

@NgModule({
  declarations: [
    SelldashboardpageComponent
    
  ],
  imports: [
    CommonModule,
    ChartsModule,
    SelldashboardpageRoutingModule,
    NgMaterialModule
  ],
  exports: [
    SelldashboardpageComponent
  ]
})
export class SelldashboardpageModule { }
