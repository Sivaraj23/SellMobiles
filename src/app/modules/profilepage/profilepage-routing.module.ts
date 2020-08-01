import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilepageComponent } from "./profilepage/profilepage.component";
import { AuthGuard } from 'src/app/shared/services/auth-guard/auth.guard';
const routes: Routes = [
{path:'',component:ProfilepageComponent,canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilepageRoutingModule { }
