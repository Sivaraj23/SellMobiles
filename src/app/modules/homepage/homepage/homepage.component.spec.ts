import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageComponent } from './homepage.component';
import { LoaderService } from "src/app/shared/services/loaderservice/loader.service";
import { CarouselComponent } from "src/app/modules/homepage/carousel/carousel.component";
import { FooterComponent } from "src/app/core/footer/footer.component";
import { NgMaterialModule } from "src/app/core/designs/ngmaterial.module";
import { NewArrivalComponent } from "src/app/modules/homepage/new-arrival/new-arrival.component";
import { BrandComponent } from "src/app/modules/homepage/brand/brand.component";
import { ProductListComponent } from "src/app/modules/homepage/product-list/product-list.component";
import { TestimonialComponent } from "src/app/modules/homepage/testimonial/testimonial.component";
import { ProductService } from "src/app/shared/services/product/product.service";
import { HttpClientModule } from "@angular/common/http";

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageComponent,
        CarouselComponent,
        FooterComponent,
        NewArrivalComponent,
        BrandComponent,
        TestimonialComponent,
        ProductListComponent
      , ],imports:[
          NgMaterialModule,HttpClientModule
        ],providers:[LoaderService,ProductService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
