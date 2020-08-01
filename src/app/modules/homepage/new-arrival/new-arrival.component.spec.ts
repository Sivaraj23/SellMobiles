import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArrivalComponent } from './new-arrival.component';
import { ProductListComponent } from "src/app/modules/homepage/product-list/product-list.component";
import { NgMaterialModule } from "src/app/core/designs/ngmaterial.module";
import {ProductService} from '../../../shared/services/product/product.service';
import { HttpClientModule } from "@angular/common/http";

describe('NewArrivalComponent', () => {
  let component: NewArrivalComponent;
  let fixture: ComponentFixture<NewArrivalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewArrivalComponent,ProductListComponent ],
      imports:[NgMaterialModule,HttpClientModule],
      providers:[ProductService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewArrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
