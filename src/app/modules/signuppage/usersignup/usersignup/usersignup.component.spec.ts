import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersignupComponent } from './usersignup.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgMaterialModule } from 'src/app/core/designs/ngmaterial.module';
import { ToastrModule, ToastrService,  } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UsersignupComponent', () => {
  let component: UsersignupComponent;
  let fixture: ComponentFixture<UsersignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersignupComponent],
      imports:[ReactiveFormsModule,
      RouterTestingModule,
      NgMaterialModule,
      HttpClientTestingModule,
      ToastrModule.forRoot({
        preventDuplicates: true,
        positionClass: 'toast-bottom-right',
      }),
      BrowserAnimationsModule
      
 ],
 providers:[ ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke onSubmit method', () => {
    fixture = TestBed.createComponent(UsersignupComponent);
    component = fixture.componentInstance;
    
    component.onSubmit();
    
    expect(component).toBeTruthy();
  });

  it('should invoke validateEmail() method', () => {
    fixture = TestBed.createComponent(UsersignupComponent);
    component = fixture.componentInstance;
    
    component.validateEmail();
    
    expect(component).toBeTruthy();
  });

});
