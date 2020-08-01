import { Injectable } from '@angular/core';
import  {API_URL}  from 'src/app/shared/utilities/url.api';
import { Observable } from "rxjs";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { GET_HEADERS_JSON } from "src/app/shared/utilities/headers.config";

@Injectable({
  providedIn: 'root'
})
export class SelldashboardService {



  constructor(private http: HttpClient) { }

  getSellerOrderByBrand(userid : any): Observable <any> {
    
    return this.http.post<any>(`${API_URL.user+'/get/stats/ordersByBrand'}/${userid}`, GET_HEADERS_JSON);
  
    }
}
