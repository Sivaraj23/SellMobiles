import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/services/cart-service/cart.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgMaterialModule } from 'src/app/core/designs/ngmaterial.module';
import { CartItemComponent } from './../cart-item/cart-item.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { CartHomeComponent } from './cart-home.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { UsetoastrService } from 'src/app/shared/services/toastrservice/usetoastr.service';

describe('CartHomeComponent', () => {
  let component: CartHomeComponent;
  let fixture: ComponentFixture<CartHomeComponent>;
  //let cartService: CartService;
  //let httpClientSpy: { get: jasmine.Spy};
  //let toastrService: UsetoastrService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartHomeComponent, CartItemComponent],
      imports: [
        NgMaterialModule,
        HttpClientTestingModule,
        ToastrModule.forRoot({
          preventDuplicates: true,
          positionClass: 'toast-bottom-right',
        }),
        RouterTestingModule


      ],
      providers: [CartService, ToastrService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
   // httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    
   // cartService = new CartService(<any> httpClientSpy, toastrService );

    fixture = TestBed.createComponent(CartHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke isCartEmpty() Method', ()=>{
    component.isCartEmpty();
    expect(component).toBeTruthy();
  });
  it('should invoke continueShopping() Method', ()=>{
    component.continueShopping() ;
    expect(component).toBeTruthy();
  });
  
  // fit('#getObservableValue should return value from observable',
  //   (done: DoneFn) => {
  //   cartService.getFromCart().subscribe(value => {
  //     expect(value).toBe('observable<any> value');
  //     done();
  //   });
  // });



});
