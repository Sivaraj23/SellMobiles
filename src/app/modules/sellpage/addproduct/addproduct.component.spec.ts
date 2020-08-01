import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductComponent } from './addproduct.component';
import { UsetoastrService } from "src/app/shared/services/toastrservice/usetoastr.service";
import { ProductService } from "src/app/shared/services/product/product.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { NgMaterialModule } from "src/app/core/designs/ngmaterial.module";
import { ToastrModule } from 'ngx-toastr';
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddproductComponent', () => {
  let component: AddproductComponent;
  let fixture: ComponentFixture<AddproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddproductComponent ],
      providers:[UsetoastrService,ProductService,],
       imports:[HttpClientTestingModule,BrowserAnimationsModule,FormsModule,ReactiveFormsModule, NgMaterialModule,ToastrModule.forRoot({
        preventDuplicates: true,
        positionClass: 'toast-bottom-right',
      }) ] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('call submit', () => {
    fixture = TestBed.createComponent(AddproductComponent);
    component = fixture.componentInstance;
    component.submit();
    component.addProductForm
    expect(component).toBeTruthy();
  });
});
