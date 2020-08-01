import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../shared/entities/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../../shared/services/product/product.service';
import { CartService } from '../../../../shared/services/cart-service/cart.service';
import { CartDto } from '../cartDto';
import * as moment from 'moment';
import { FormGroup } from '@angular/forms';
import { Review } from "src/app/shared/entities/review";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Router } from "@angular/router";
//import { ProductReview } from 'src/app/shared/entities/ProductReview';
import { ProdReview } from 'src/app/shared/entities/product-review';
@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent implements OnInit {
  userId: string;

  show=false;
  //productReview:ProductReview=new ProductReview();
  productReview: ProdReview = new ProdReview();
  review: Review = new Review();
  reviewForm: FormGroup;
  id: string;
  sellerId=1;
  count=0;
  getProduct:boolean=false;
  public product: Product;
  public products: Product[];
  cartDto: CartDto = new CartDto();
  buttonDisabled: boolean = true;
  addToCartButtonSelected: boolean = false;
  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService,private fb: FormBuilder,private routes:Router) {
    this.reviewForm=fb.group({
      'description': [null, [Validators.required]],
    });
    this.products = new Array<Product>();
    let id = this.route.snapshot.paramMap.get('id');
    this.id = id;

    this.productService.getProduct(this.id).subscribe(

      value => {
        this.getProduct = true;
        this.product = value.body;
        console.log('got product value');
       
        console.log('[POST] got product successfully', value);
      }, error => {
        console.log('FAIL to get product!');
      },
      () => {
        console.log('GET Product - now completed.');
      });
      console.log('roleid is--');
      console.log(parseInt(localStorage.getItem('roleid')));
      if(localStorage.getItem('login') && (this.sellerId==parseInt(localStorage.getItem('roleid'))))
      {
        this.buttonDisabled= false;
        console.log(this.buttonDisabled);
      }
      
  }

  ngOnInit() {
    
    this.review.userId=parseInt(localStorage.getItem('userid'));
    this.review.description = this.reviewForm.value.description;
    this.review.productId=parseInt(this.id);
    this.productService.getReply( this.review.productId).subscribe(
      data=>{
        this.productReview=data.body;
        // this.productReview.description=data.description;
        // this.productReview.userName=data.userName;
        console.log(data);
        this.show=true;
      }
    );
  }
  addToCart() {
    this.cartDto.userId = parseInt(localStorage.getItem('userid'));
    this.cartDto.productId = parseInt(this.id);
    this.cartService.addtoCart(this.cartDto);
    this.addToCartButtonSelected = true;
    
 
  }
  
  onReply(){
    window.location.reload;
   
    this.userId= localStorage.getItem('userid');
   if(this.userId==null){
    this.routes.navigate(['/login']);
   }
   else{
    this.review.userId=parseInt(localStorage.getItem('userid'));
    this.review.description = this.reviewForm.value.description;
    this.review.productId=parseInt(this.id);
    //console.log(this.review);
    this.productService.sendReply1(this.review).subscribe(
      data=>{
       
        console.log(data);
        this.reviewForm.reset();
        this.productService.getReply( this.review.productId).subscribe(
          data=>{
    
            this.productReview=data.body;
            // this.productReview.description=data.description;
            // this.productReview.userName=data.userName;
            console.log(data);
            this.show=true;
          }
        );
      
      }
    );
  }
  }

}
