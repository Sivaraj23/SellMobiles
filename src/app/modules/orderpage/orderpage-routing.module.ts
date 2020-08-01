import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderpageComponent } from "src/app/modules/orderpage/orderpage/orderpage.component";

const routes: Routes = [
  {
    path: '',
    component: OrderpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderpageRoutingModule { }
