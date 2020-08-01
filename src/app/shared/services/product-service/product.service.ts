import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../entities/product';
import { Review } from "src/app/shared/entities/review";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : Product[] = [];


  constructor(private httpService: HttpClient) { 
    this.httpService.get('../assets/product.json').subscribe(data =>{
      this.products = data as Product[];
     // console.log(this.products[3]);
    })
  }
  
  getProduct(id: number): Product {
    for(let product of this.products){
      if(id == product.productId){
        return product;
      }
    }

     
  }
  sendReply(review:Review){
    
  }
}
