import { CartService } from '../../../shared/services/cart-service/cart.service';

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cart-home',
    templateUrl: './cart-home.component.html',
    styleUrls: ['./cart-home.component.css']
})
export class CartHomeComponent implements OnInit {

    currentUserId: any;
    cartItemCount: number;
    items: any[] = [];
    _subscription: Subscription;

    totalPrice = 0;
    isloadingCart = true;

    constructor(private cartService: CartService, private router: Router) {
    } 
    ngOnInit() {
        this.currentUserId = localStorage.getItem('userid');
        this.getcartItems();
        this.items = this.cartService.cartItems;
        this.cartItemCount = this.items.length;

        // Observe for change in cart items
        this._subscription = this.cartService.changeCartItems
            .subscribe(data => {
                this.items = data as any[];
                this.cartItemCount = this.items.length;


            });

        // Observe for change in Price
        this.totalPrice = this.cartService.totalCartPrice;
        this._subscription = this.cartService.changeTotalCartPrice.subscribe(data => {
            this.totalPrice = data;
        });

        this.cartService.calculateCartCost();
    }


    getcartItems() {
        this.isloadingCart = true;
        this.cartService.getFromCart().subscribe(data => {
            this.items = data.body as any[];
            this.cartItemCount = this.items.length;
            this.isloadingCart = false;

        }, error => {
            this.isloadingCart = false;
            console.log('Something went wriong');
        });
    }
    isCartEmpty(): boolean {
        if (this.cartItemCount > 0) {
            return true;
        } else {
            return false;
        }
    }
    continueShopping() {
        this.router.navigateByUrl('/home');
    }
}
