import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from "src/app/modules/loginpage/loginpage/loginpage.component";
import { AuthGuard } from 'src/app/shared/services/auth-guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginpageComponent,
  },

  {
    path: 'usersignup',
    loadChildren: '../signuppage/usersignup/usersignup.module#UsersignupModule'
  }, {
    path: 'login', component: LoginpageComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginpageRoutingModule { }
