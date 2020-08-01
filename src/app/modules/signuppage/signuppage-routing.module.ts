import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersignupComponent } from './usersignup/usersignup/usersignup.component';
import { SignuppageComponent } from './signuppage/signuppage.component';

const routes: Routes = [

  {
    path:'',
    component:SignuppageComponent,
  
    
    children:[
      {
        path:'usersignup',
        component:UsersignupComponent
        //loadChildren: './signupage/usersignup.module#UsersignupModule'

    },
    {
      path:'sellersignup',
      component:SignuppageComponent
     // loadChildren: './signupage/sellersignup.module#SellersignupModule'

      },
    ]    
  },

  {
    path:'',
    component:SignuppageComponent,
    children:[
      {
        path:'sellerapproval',
        component:SignuppageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignuppageRoutingModule { }
