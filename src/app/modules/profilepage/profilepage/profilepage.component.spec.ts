import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilepageComponent } from './profilepage.component';
import { ReactiveFormsModule } from "@angular/forms";
import { NgMaterialModule } from "../../../core/designs/ngmaterial.module";
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr'
describe('ProfilepageComponent', () => {
  let component: ProfilepageComponent;
  let fixture: ComponentFixture<ProfilepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilepageComponent ],
      imports:[
        ReactiveFormsModule,
        NgMaterialModule,
        HttpClientTestingModule,
        HttpClientModule,
        ToastrModule.forRoot({
          preventDuplicates: true,
          positionClass: 'toast-bottom-right',
        }),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke submit method', () => {
    fixture = TestBed.createComponent(ProfilepageComponent);
    component = fixture.componentInstance;
    component.submit();
    expect(component).toBeTruthy;
  });

  it('should invoke cancel method', () => {
    fixture = TestBed.createComponent(ProfilepageComponent);
    component = fixture.componentInstance;
    component.cancel();
    expect(component).toBeTruthy;
  });
  it('should invoke submit password method', () => {
    fixture = TestBed.createComponent(ProfilepageComponent);
    component = fixture.componentInstance;
    component.submitpassword();
    expect(component).toBeTruthy;
  });

  it('should invoke reviews method', () => {
    fixture = TestBed.createComponent(ProfilepageComponent);
    component = fixture.componentInstance;
    component.reviews_css();
    expect(component).toBeTruthy;
  });
  it('should invoke orders method', () => {
    fixture = TestBed.createComponent(ProfilepageComponent);
    component = fixture.componentInstance;
    component.orders_css();
    expect(component).toBeTruthy;
  });
  it('should invoke orderdetails method', () => {
    fixture = TestBed.createComponent(ProfilepageComponent);
    component = fixture.componentInstance;
    component.orderdetails_css();
    expect(component).toBeTruthy;
  });
  it('should invoke sales method', () => {
    fixture = TestBed.createComponent(ProfilepageComponent);
    component = fixture.componentInstance;
    component.sales_css();
    expect(component).toBeTruthy;
  });

  it('should invoke whishlist method', () => {
    fixture = TestBed.createComponent(ProfilepageComponent);
    component = fixture.componentInstance;
    component.wishlist_css();
    expect(component).toBeTruthy;
  });
  
});
