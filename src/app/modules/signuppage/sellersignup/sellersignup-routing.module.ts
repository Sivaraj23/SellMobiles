import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellersignupComponent } from './sellersignup/sellersignup.component';

const routes: Routes = [

  { path: '', component: SellersignupComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellersignupRoutingModule { }
