import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { LoginService } from "src/app/shared/services/loginservice/login.service";
import { NgMaterialModule } from "src/app/core/designs/ngmaterial.module";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { LoaderComponent } from "src/app/shared/components/loader/loader.component";
import { CartService } from "src/app/shared/services/cart-service/cart.service";
import { Router } from "@angular/router";
import { AuthService, AuthServiceConfig } from 'angular5-social-login';
import { getAuthServiceConfigs } from 'src/app/app.module';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        NgMaterialModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        ToastrModule.forRoot({
          preventDuplicates: true,
          positionClass: 'toast-bottom-right',
        })
      ],
      declarations: [ HeaderComponent,LoaderComponent ],
      providers:[
        CartService,
        { provide: Router,
          useValue: routerSpy
         }
        , AuthService,{
          provide: AuthServiceConfig,
          useFactory: getAuthServiceConfigs
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
