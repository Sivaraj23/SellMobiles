import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/services/auth-guard/auth.guard';

const routes: Routes = [
  { 
    path: 'home', 
    loadChildren:'./modules/homepage/homepage.module#HomepageModule'
  },
  { 
    path: 'admin', 
    loadChildren:'./modules/adminpage/adminpage.module#AdminpageModule',
    canActivate:[AuthGuard]

  },
  {
    path: 'login', 
    loadChildren: './modules/loginpage/loginpage.module#LoginpageModule'
  },
  {
    path: 'sell',
    loadChildren: './modules/sellpage/sellpage.module#SellpageModule'
  },
  { 
    path: 'cart',
    loadChildren: './modules/cartpage/cartpage.module#CartpageModule' 
  },
  
  {
    path: 'orders',
    loadChildren: './modules/orderpage/orderpage.module#OrderpageModule'
  },
  {
    path: 'feedback', 
    loadChildren: './modules/feedback/feedback.module#FeedbackModule'
  },
  {
    path: 'products',
    loadChildren: './modules/productpage/productpage.module#ProductpageModule'
  },
  {
    path: 'profile',
    loadChildren: './modules/profilepage/profilepage.module#ProfilepageModule'
  }
  ,
  {
    path:'usersignup',
    loadChildren:'./modules/signuppage/usersignup/usersignup.module#UsersignupModule'
  },
  {
    path:'sellersignup',
    loadChildren:'./modules/signuppage/sellersignup/sellersignup.module#SellersignupModule'
  },
  {
    path:'sellerapproval',
    loadChildren:'./modules/signuppage/signuppage.module#SignuppageModule'
  },
  

  {
    path: '',
    redirectTo : '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo : '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:'reload',useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
