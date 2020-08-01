import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileserviceService } from "../../shared/services/profileservice/profileservice.service";
import { ProfilepageRoutingModule } from './profilepage-routing.module';
import { ProfilepageComponent } from './profilepage/profilepage.component';

import { NgMaterialModule } from "../../core/designs/ngmaterial.module";
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ProfilepageComponent],
  imports: [
    CommonModule,
    ProfilepageRoutingModule,
    ReactiveFormsModule,
    
     FormsModule,
     NgMaterialModule 
  ]
})
export class ProfilepageModule { 

  constructor(private service : ProfileserviceService) {
    
      
      }
}
