import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminpageComponent } from "src/app/modules/adminpage/adminpage/adminpage.component";
import { AuthGuard } from 'src/app/shared/services/auth-guard/auth.guard';

const routes: Routes = [
  { 
    path: '', 
    component: AdminpageComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path : 'sellers' , 
        loadChildren: './adminsellerpage/adminsellerpage.module#AdminsellerpageModule'
      },
      {
        path: '', 
        loadChildren: './admindashboardpage/admindashboardpage.module#AdmindashboardpageModule'
      },
      {
        path: 'dashboard', 
        loadChildren: './admindashboardpage/admindashboardpage.module#AdmindashboardpageModule'
      },
      {
        path: 'customers', 
        loadChildren: './admincustomerspage/admincustomerspage.module#AdmincustomerspageModule'
      },
      {
        path: 'reviews', 
        loadChildren: './adminreviewspage/adminreviewspage.module#AdminreviewspageModule'
      },
      // {
      //   path:'',
      //   component:AdminpageComponent,
      //   canActivate:[AuthGuard] 
      // }
 
 

  ],
  }
 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminpageRoutingModule { }
