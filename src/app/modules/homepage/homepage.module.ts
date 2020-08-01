import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CarouselComponent } from './carousel/carousel.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { NgMaterialModule } from '../../core/designs/ngmaterial.module';
// import { FooterComponent } from "src/app/core/footer/footer.component";
import { NewArrivalComponent } from './new-arrival/new-arrival.component';
import { BrandComponent } from './brand/brand.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FooterComponent } from "src/app/core/footer/footer.component";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ProductService } from "src/app/shared/services/product/product.service";
import { ProductpageModule } from "src/app/modules/productpage/productpage.module";
import { SingleproductpageModule } from "src/app/modules/productpage/singleproductpage/singleproductpage.module";
@NgModule({
  declarations: [
    CarouselComponent, 
    HomepageComponent,
    FooterComponent,
    NewArrivalComponent,
    BrandComponent,
    ProductListComponent,
    TestimonialComponent
  ],
  imports: [
    CommonModule,
    NgMaterialModule,
    ComponentsModule,
    HomepageRoutingModule,
    SingleproductpageModule
  ],
  exports: [
    HomepageComponent,
    CarouselComponent
  ],
  providers:[ProductService]
})
export class HomepageModule { }
