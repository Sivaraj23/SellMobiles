import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellpageRoutingModule } from './sellpage-routing.module';
import { SellpageComponent } from './sellpage/sellpage.component';
import {SellersidebarComponent} from './sellersidebar/sellersidebar.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from 'src/app/shared/services/product/product.service';

@NgModule({
  declarations: [
    SellpageComponent,
    SellersidebarComponent,
   
  ],
  imports: [
    CommonModule,
    SellpageRoutingModule,
    HttpClientModule,
   
  ],providers:[
    ProductService
  ],
  exports: [
    SellpageComponent
  ]
})
export class SellpageModule { }
