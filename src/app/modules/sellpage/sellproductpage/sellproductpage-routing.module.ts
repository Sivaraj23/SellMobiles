import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellproductpageComponent } from "src/app/modules/sellpage/sellproductpage/sellproductpage/sellproductpage.component";

const routes: Routes = [
  {
    path: '',
    component: SellproductpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellproductpageRoutingModule { }
