import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductpageComponent } from "src/app/modules/productpage/productpage/productpage.component";

const routes: Routes = [
  {
    path: '',
    component: ProductpageComponent
  },
  {
    path:'product',
    loadChildren:'./singleproductpage/singleproductpage.module#SingleproductpageModule'
  },
  {
    path:'product/:id',
    loadChildren:'./singleproductpage/singleproductpage.module#SingleproductpageModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductpageRoutingModule { }
