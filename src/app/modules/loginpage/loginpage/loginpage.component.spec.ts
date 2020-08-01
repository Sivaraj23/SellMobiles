import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
import { AuthService, AuthServiceConfig, SocialLoginModule } from 'angular5-social-login';
import { LoginpageComponent } from './loginpage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
// import { REACTIVE_DRIVEN_DIRECTIVES } from '@angular/forms/src/directives';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoaderService } from 'src/app/shared/services/loaderservice/loader.service';
import { UsetoastrService } from 'src/app/shared/services/toastrservice/usetoastr.service';
import { NgMaterialModule } from 'src/app/core/designs/ngmaterial.module';
import { ToastrModule } from 'ngx-toastr';
import { getAuthServiceConfigs } from 'src/app/app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('LoginpageComponent', () => {
  let component: LoginpageComponent;
  let fixture: ComponentFixture<LoginpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginpageComponent ],
      imports:[ReactiveFormsModule,
        NgMaterialModule,
        RouterTestingModule,
        HttpClientTestingModule,
        ToastrModule.forRoot({
        preventDuplicates: true,
        positionClass: 'toast-bottom-right',
        }),
      SocialLoginModule,
      BrowserAnimationsModule
      
      
    ],
    providers:[
    LoaderService,
    UsetoastrService,
    AuthService, {
       provide: AuthServiceConfig,
       useFactory: getAuthServiceConfigs
     }
    
]
 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create', () => {
    fixture = TestBed.createComponent(LoginpageComponent);
    component = fixture.componentInstance;
    
    component.userData;
    
    expect(component).toBeTruthy();
  });
  it('should invoke onSubmit method', () => {
    fixture = TestBed.createComponent(LoginpageComponent);
    component = fixture.componentInstance;
    
    component.onSubmit();
    
    expect(component).toBeTruthy();
  });

  it('should invoke socialLogin() method', () => {
    fixture = TestBed.createComponent(LoginpageComponent);
    component = fixture.componentInstance;
    
    component.socialSignIn(null);
    
    expect(component).toBeTruthy();
  });

});