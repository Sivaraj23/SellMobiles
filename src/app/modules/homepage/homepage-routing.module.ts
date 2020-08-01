import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomepageComponent
  },
  {
    path:'products',
    loadChildren:'../productpage/productpage.module#ProductpageModule'
  },
  {
    path:'product/:id',
    loadChildren:'../productpage/singleproductpage/singleproductpage.module#SingleproductpageModule'
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
