import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SellersignupComponent } from './sellersignup.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgMaterialModule } from 'src/app/core/designs/ngmaterial.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SellersignupComponent', () => {
  let component: SellersignupComponent;
  let fixture: ComponentFixture<SellersignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellersignupComponent ],
      imports:[ReactiveFormsModule,
      RouterTestingModule,
    NgMaterialModule,
    HttpClientTestingModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      positionClass: 'toast-bottom-right',
    }),
    BrowserAnimationsModule
  ]
,    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellersignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke onSubmit() method', () => {
    fixture = TestBed.createComponent(SellersignupComponent);
    component = fixture.componentInstance;
    
    component.onSubmit();
    
    expect(component).toBeTruthy();
  });

  it('should invoke validateEmail() method', () => {
    fixture = TestBed.createComponent(SellersignupComponent);
    component = fixture.componentInstance;
    
    component.validateEmail();
    
    expect(component).toBeTruthy();
  });


});
