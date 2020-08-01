import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellorderpageComponent } from "src/app/modules/sellpage/sellorderpage/sellorderpage/sellorderpage.component";

const routes: Routes = [
  {
    path: '',
    component: SellorderpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellorderpageRoutingModule { }
