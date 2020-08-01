import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminsellerpageComponent } from "src/app/modules/adminpage/adminsellerpage/adminsellerpage/adminsellerpage.component";

const routes: Routes = [
  {
   path:'' , component:  AdminsellerpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminsellerpageRoutingModule { }
