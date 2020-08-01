import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { SellersignupComponent } from '../sellersignup/sellersignup/sellersignup.component';

const routes: Routes = [

  {
    path: '',
    component: UsersignupComponent
  },
  {
    path: 'sellersignup',
    component: SellersignupComponent
    //loadChildren:'../signuppage/sellersignup/sellersignup.module#SellersignupModule'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersignupRoutingModule { }
