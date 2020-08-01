import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellsalespageComponent } from "src/app/modules/sellpage/sellsalespage/sellsalespage/sellsalespage.component";

const routes: Routes = [
  {
    path: '',
    component: SellsalespageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellsalespageRoutingModule { }
