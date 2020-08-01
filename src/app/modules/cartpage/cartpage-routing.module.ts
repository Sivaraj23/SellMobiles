import { CartHomeComponent } from './cart-home/cart-home.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/shared/services/auth-guard/auth.guard';
import { HomepageComponent } from '../homepage/homepage/homepage.component';

const routes: Routes = [
  { path:'', component:CartHomeComponent,canActivate:[AuthGuard]},
  
  { path:'', component:CartHomeComponent},
  { path: 'item/:id',
    loadChildren: '../productpage/singleproductpage/singleproductpage.module#SingleproductpageModule',
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartpageRoutingModule { }
