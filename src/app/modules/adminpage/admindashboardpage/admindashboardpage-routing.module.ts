import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashboardpageComponent } from "src/app/modules/adminpage/admindashboardpage/admindashboardpage/admindashboardpage.component";

const routes: Routes = [{
  path: '',
  component : AdmindashboardpageComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmindashboardpageRoutingModule { }
