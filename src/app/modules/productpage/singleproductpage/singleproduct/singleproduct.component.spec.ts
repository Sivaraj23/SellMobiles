import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleproductComponent } from './singleproduct.component';
import { ProductService } from "src/app/shared/services/product/product.service";
import { CartService } from "src/app/shared/services/cart-service/cart.service";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs";

import { HttpClientTestingModule} from '@angular/common/http/testing';
import {UsetoastrService} from '../../../../shared/services/toastrservice/usetoastr.service'
import { NgMaterialModule } from "src/app/core/designs/ngmaterial.module";
import {RouterTestingModule} from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

describe('SingleproductComponent', () => {
  let component: SingleproductComponent;
  let fixture: ComponentFixture<SingleproductComponent>;
  const route = ({ data: of({ label: 'hello' }) } as any) as ActivatedRoute;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleproductComponent ],
      providers:[ProductService,CartService,UsetoastrService],
     
      imports:[ HttpClientTestingModule,NgMaterialModule,RouterTestingModule,FormsModule,ReactiveFormsModule,ToastrModule.forRoot({
        preventDuplicates: true,
        positionClass: 'toast-bottom-right',
      }),]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  fit('should create', () => {
    fixture = TestBed.createComponent(SingleproductComponent);
    component = fixture.componentInstance;
    component.addToCart();
    expect(component).toBeTruthy();
  });
});
