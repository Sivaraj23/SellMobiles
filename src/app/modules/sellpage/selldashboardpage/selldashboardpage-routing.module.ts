import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelldashboardpageComponent } from "src/app/modules/sellpage/selldashboardpage/selldashboardpage/selldashboardpage.component";

const routes: Routes = [
  {
    path: '',
    component: SelldashboardpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelldashboardpageRoutingModule { }
