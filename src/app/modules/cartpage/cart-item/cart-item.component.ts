import { Product } from '../../../shared/entities/product';
import { ProductService } from './../../../shared/services/product-service/product.service';
import { CartService } from './../../../shared/services/cart-service/cart.service';

import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {

  constructor(private cartService: CartService, private productService: ProductService) {
   }
  @Input()
  item: Product = new Product();

  itemRemoved(item: Product) {
   this.cartService.removeFromCart(item);
  }
}
