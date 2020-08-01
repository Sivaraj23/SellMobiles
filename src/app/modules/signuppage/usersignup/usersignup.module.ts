import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersignupRoutingModule } from './usersignup-routing.module';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { Register } from '../../../shared/entities/register';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SellersignupModule } from '../sellersignup/sellersignup.module';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [UsersignupComponent],
  imports: [
    CommonModule,
    UsersignupRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    SellersignupModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatCheckboxModule
  ],

  exports: [
    UsersignupComponent
  ]
})
export class UsersignupModule {



}
