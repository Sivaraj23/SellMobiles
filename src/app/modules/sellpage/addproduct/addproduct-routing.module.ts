import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddproductComponent} from './addproduct.component';

const routes: Routes = [
  {
    path: '',
    component: AddproductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddproductRoutingModule { }
