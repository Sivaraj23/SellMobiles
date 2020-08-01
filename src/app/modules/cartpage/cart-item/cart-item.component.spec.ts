import { Image } from './../../../shared/entities/image';
import { CartService } from 'src/app/shared/services/cart-service/cart.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemComponent } from './cart-item.component';
import { ToastrModule } from 'ngx-toastr';
import { Product } from 'src/app/shared/entities/product';




describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartItemComponent ],
      imports: [
        HttpClientTestingModule,
        HttpClientTestingModule,
        ToastrModule.forRoot({
          preventDuplicates: true,
          positionClass: 'toast-bottom-right',
        })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    

  });

  it('should create', () => {
   
    expect(component).toBeTruthy();
  });
  it('should check itemRemoved method', () => {
    const item = new Product();
    item.image = new Image();
    component.itemRemoved(item);
    expect(component).toBeTruthy();
  });


});
