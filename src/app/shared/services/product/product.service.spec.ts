import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { HttpClientModule } from "@angular/common/http";

describe('ProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({
imports:[HttpClientModule]
  }));
  // import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
  
  it('should be created', () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service).toBeTruthy();
  });
});
