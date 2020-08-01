import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellersignupRoutingModule } from './sellersignup-routing.module';
import { SellersignupComponent } from './sellersignup/sellersignup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [SellersignupComponent],
  imports: [
    CommonModule,
    SellersignupRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule
  ]
})
export class SellersignupModule { }
