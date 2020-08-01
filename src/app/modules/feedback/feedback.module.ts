import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackComponent } from './feedback/feedback.component';
import { NgMaterialModule } from "src/app/core/designs/ngmaterial.module";
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [FeedbackComponent],
  imports: [
    CommonModule,
    NgMaterialModule,
    FeedbackRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FeedbackModule { }
