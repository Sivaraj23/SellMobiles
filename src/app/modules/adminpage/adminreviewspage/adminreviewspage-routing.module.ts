import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminreviewspageComponent } from "src/app/modules/adminpage/adminreviewspage/adminreviewspage/adminreviewspage.component";

const routes: Routes = [
  {
    path:'',
    component : AdminreviewspageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminreviewspageRoutingModule { }
