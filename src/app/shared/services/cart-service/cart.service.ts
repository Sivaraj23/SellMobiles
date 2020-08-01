import { HttpClient } from '@angular/common/http';
import { Cart } from '../../entities/cart';
import { Product } from '../../entities/product';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RemoveProductDto } from '../../components/removeProductDto';
import { CartDto } from '../../../modules/productpage/singleproductpage/cartDto';
import { API_URL } from '../../utilities/url.api';
import {GET_HEADERS_JSON} from '../../utilities/headers.config';
import { UsetoastrService } from 'src/app/shared/services/toastrservice/usetoastr.service';
@Injectable({
  providedIn: 'root'
})

export class CartService  {
  cart: Cart;
  product: Product;
  cartDto: CartDto;
  removeProductDto: RemoveProductDto = new RemoveProductDto();
  cartItem: any;
  currentUserId: any; // Must be given by logIn service
  cartItemCount = 0;
  cartItems: any[] = [];
  count = 0;
  totalCartPrice = 0;

  changeTotalCartPrice: Subject<number> = new Subject<number>();
  changeTotalCartItemsCount: Subject<number> = new Subject<number>();
  changeCartItems: Subject<any[]> = new Subject<any[]>();


  constructor(private httpClient: HttpClient, private toastrService: UsetoastrService) {

      this.currentUserId = localStorage.getItem('userid');
      console.log(this.currentUserId);
      this.getFromCart().subscribe(data => {
      this.cartItems = data.body as any[];
      this.totalCartPrice = 0;
      for (this.cartItem of this.cartItems) {
        this.totalCartPrice += this.cartItem.price;
      }
      this.changeTotalCartPrice.next(this.totalCartPrice);
      console.log(this.cartItems);
      console.log('Total price in Service: ' + this.totalCartPrice);
    });



   // this.calculateCartCost();

  }
  addtoCart(cartDto: CartDto) {
    this.httpClient.post(API_URL.cart + '/addtoCart', cartDto, GET_HEADERS_JSON )
        .subscribe(data => {

           console.log('After adding getting cart....');
           this.count =   (<any>data).body;
           console.log(this.count);
           this.getFromCart().subscribe(data => {
          console.log('Instant change record:');
          this.cartItems = data.body as any[];
          console.log('New Cart Value: ' + this.cartItems.length);
           this.changeCartItems.next(this.cartItems);
           this.changeTotalCartItemsCount.next(this.cartItems.length);

         });
           if (this.count !== 0) {
            this.toastrService.success('Product already present in cart');
           } else {
              this.toastrService.success('Product added to cart');
            }



          this.calculateCartCost();
        });



  }
  getFromCart() {
    this.currentUserId = localStorage.getItem('userid');
    console.log('Current User in Cart service: ' + this.currentUserId);
    return this.httpClient.get<any>( API_URL.cart + '/' + this.currentUserId, GET_HEADERS_JSON);
  }

  removeFromCart(item: Product) {

    this.removeProductDto.productId = item.productId;
    this.removeProductDto.userId = this.currentUserId; // for now it will  given by logService User
    console.log('Product ID: ' + this.removeProductDto.productId + ',  User Id: ' + this.removeProductDto.userId);

    this.httpClient.get(API_URL.cart + '/delete/' + this.removeProductDto.productId + '/' + this.removeProductDto.userId, GET_HEADERS_JSON)
    .subscribe(data => {
      this.cartItems = (<any>data).body;
      console.log('After removing... remaining cartitems');
      console.log(this.cartItems);
      this.toastrService.success('Product removed successfully');
      this.changeCartItems.next(this.cartItems);
      this.changeTotalCartItemsCount.next(this.cartItems.length);

      // this.calculateCartCost();


      this.totalCartPrice = 0;
      for (this.cartItem of this.cartItems) {
        this.totalCartPrice += this.cartItem.price;
      }
      this.changeTotalCartPrice.next(this.totalCartPrice);
      console.log('Total price in Service: ' + this.totalCartPrice);


    });

  }
  calculateCartCost(): number {

    this.getFromCart().subscribe(data => {
      this.cartItems = data.body as any[];
      // console.log(this.cartItems);
      this.totalCartPrice = 0;
      for (this.cartItem of this.cartItems) {
        this.totalCartPrice += this.cartItem.price;
      }
      this.changeTotalCartPrice.next(this.totalCartPrice);
      console.log('Total price in Service: ' + this.totalCartPrice);
    });

    return this.totalCartPrice;

  }




}
