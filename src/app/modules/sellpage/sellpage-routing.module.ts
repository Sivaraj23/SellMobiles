import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellpageComponent } from "src/app/modules/sellpage/sellpage/sellpage.component";
import { AddproductComponent} from './addproduct/addproduct.component';
import { AuthGuard } from 'src/app/shared/services/auth-guard/auth.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   component: SellpageComponent
  // },
  // {
  //   path: 'addProduct',
  //   loadChildren:'./addproduct/addproduct.module#AddproductModule'
  // },

  { 
    path: '', 
    component: SellpageComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path : 'dashboard' , 
        loadChildren: './selldashboardpage/selldashboardpage.module#SelldashboardpageModule'
      },
      {
        path: '', 
        loadChildren: './selldashboardpage/selldashboardpage.module#SelldashboardpageModule'
      },
      {
        path: 'orders', 
        loadChildren: './sellorderpage/sellorderpage.module#SellorderpageModule'
      },
      {
        path: 'addProduct', 
        loadChildren: './addproduct/addproduct.module#AddproductModule'
      },
      {
        path: 'sales', 
        loadChildren: './sellsalespage/sellsalespage.module#SellsalespageModule'
      }
    ]
  }  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellpageRoutingModule { }
