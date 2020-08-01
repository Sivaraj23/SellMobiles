import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../shared/services/product/product.service';
import { Product } from "src/app/shared/entities/product";
@Component({
  selector: 'homepage-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[];
url1='../../../../assets/phones/dummy.jpg';
isProductLoaded:boolean=false;
  constructor(private productService:ProductService) { 
    console.log('home page');
    this.productService.getProducts().subscribe(data => {
      
      
            this.products = data.body;
            this.isProductLoaded =true;
            
            
          }, error => {
            
            console.log(error);
          }
          )
      
  }

  ngOnInit() {
  }

}
