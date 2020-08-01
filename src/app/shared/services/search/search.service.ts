import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import  {API_URL}  from 'src/app/shared/utilities/url.api';
import {GET_HEADERS_JSON,GET_HEADERS_TEXT} from '../../utilities/headers.config';
import { Product } from "src/app/shared/entities/product";
import { ProductpageComponent } from "src/app/modules/productpage/productpage/productpage.component";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  search:string;
  constructor(private http: HttpClient) { }

  private subject = new Subject<any>();
  call = this.subject.asObservable();
  
  postSearch(data: string): Observable<any> {
    // console.log("  uu "+data.name);
    // console.log("email"+data.password);
    return this.http.post(API_URL.product + '/searchResult', data, GET_HEADERS_JSON);

  }

      setSearchKey(search:string)
      {
        this.search=search;
        // this.subject.next({ string: this.search });
        
      }
      getSearchKey():string{
        
        return this.search;
        
      }
      getVal() {
       this.subject.next();
        
       }
}
