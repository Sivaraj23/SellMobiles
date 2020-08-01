import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignuppageRoutingModule } from './signuppage-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersignupModule } from './usersignup/usersignup.module';
import { SellersignupModule } from './sellersignup/sellersignup.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material';
import { SignuppageComponent } from './signuppage/signuppage.component';
@NgModule({
  declarations: [SignuppageComponent],
  imports: [
    CommonModule,
    SignuppageRoutingModule,
    ReactiveFormsModule,
    UsersignupModule,
    SellersignupModule,
    MatTabsModule,
    MatFormFieldModule
  ]
})
export class SignuppageModule { }
 