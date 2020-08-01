import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SingleproductComponent} from './singleproduct/singleproduct.component';

const routes: Routes = [
  {
    path: '',
    component: SingleproductComponent,
    
  },
  {
    path: 'product/:id',
    component: SingleproductComponent
  },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleproductpageRoutingModule { }
