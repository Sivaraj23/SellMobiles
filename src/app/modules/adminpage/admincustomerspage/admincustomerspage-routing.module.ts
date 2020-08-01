import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmincustomerspageComponent } from "src/app/modules/adminpage/admincustomerspage/admincustomerspage/admincustomerspage.component";

const routes: Routes = [
  {
    path: '',
    component: AdmincustomerspageComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmincustomerspageRoutingModule { }
