import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginpageRoutingModule } from './loginpage-routing.module';
import { LoginpageComponent } from './loginpage/loginpage.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { UsersignupModule } from '../signuppage/usersignup/usersignup.module';
import {SignuppageModule} from '../signuppage/signuppage.module';

@NgModule({
  declarations: [
    LoginpageComponent
  ],
  imports: [
    CommonModule,
    LoginpageRoutingModule,
     MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
   ReactiveFormsModule,
   MatButtonModule,
   MatDialogModule,
   MatIconModule,
   UsersignupModule,
   SignuppageModule,
  ],
  exports: [
    LoginpageComponent
  ]
})
export class LoginpageModule { }
