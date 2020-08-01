import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from '../../entities/product';
import { ProductDto } from "src/app/shared/entities/productDto";
import {API_URL} from '../../utilities/url.api';
import { Review } from "src/app/shared/entities/review";

@Injectable()
export class ProductService {
  products:Product[];
  productDto: ProductDto=new ProductDto() ;
  id:any;
  POST_PRODUCT_URL = API_URL.product+'/addProduct';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) {
    this.getProducts().subscribe(data => {
      
      
            this.products = data.body;
            this.setProducts(this.products);
            console.log(this.products);
      
          }, error => {           
            console.log(error);
          }
          )
   }
  addProduct(productDto: ProductDto): Observable<any> {
   
    this.productDto = productDto;
    this.id=localStorage.getItem('userid');
    this.productDto.userId = this.id;
    return this.http.post(this.POST_PRODUCT_URL, this.productDto, { 'responseType': 'text' });
  }
  getProducts(): Observable<any> {

  //  this.setProducts(this.products);
    return this.http.get(API_URL.product+'/getAll', { 'responseType': 'json' });
  }

  getProduct(id: string): Observable<any> {
    return this.http.post(API_URL.product+'/getProductByID', id, { 'responseType': 'json' });
  }

  addImage(file: File): Observable<any> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', API_URL.product+'/api/file/upload', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }
   sendReply1(review:Review):Observable<any>{
     console.log(review);
      return this.http.post(API_URL.review+'/product',review,{ 'responseType': 'text' });
   }
   getReply(productId:any):Observable<any>{
    
     return this.http.get(`${API_URL.review+'/getReply'}/${productId}`,{ 'responseType': 'json' });
  }

  setProducts(products:Product[]){
    this.products=products;
  }
  getProducts1():Product[]{
    return this.products;
  }

    
}
