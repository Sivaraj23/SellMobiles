import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminpageRoutingModule } from './adminpage-routing.module';
import { AdminpageComponent } from './adminpage/adminpage.component';



import { NgMaterialModule } from "src/app/core/designs/ngmaterial.module";
import { AdminsidebarComponent } from './adminsidebar/adminsidebar.component';

import { ToastrModule } from 'ngx-toastr';
// import { ToastrService } from "src/app/shared/services/toastrservice/toastr.service";
@NgModule({
  declarations: [
    AdminpageComponent,
    AdminsidebarComponent],
  imports: [
    CommonModule,
    AdminpageRoutingModule,
   
    ToastrModule.forRoot() ,
    NgMaterialModule
  ],
  exports: [
    AdminsidebarComponent

  ]
})
export class AdminpageModule { }
