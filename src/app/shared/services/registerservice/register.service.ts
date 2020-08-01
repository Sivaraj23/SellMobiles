import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { API_URL } from '../../utilities/url.api';

import { Register } from '../../entities/register';
import { Observable } from 'rxjs';
import { GET_HEADERS_JSON, GET_HEADERS_TEXT } from '../../utilities/headers.config';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  // private headers=new HttpHeaders({'content-type':'application/json'});

  constructor(private http: HttpClient, public regserv: RegisterService, public userData: Register) { }

  postUser(userData: Register): Observable<any> {
    // console.log("  uu "+data.userName);
    // console.log("email"+data.email);
    return this.http.post(API_URL.user + '/saveUser', userData, GET_HEADERS_JSON)
  }


  postSeller(sellerData: Register): Observable<any> {
    // console.log("  uu "+data.userName);
    // console.log("email"+data.email);
    return this.http.post(API_URL.user + '/saveSeller', sellerData, GET_HEADERS_JSON);

  }


  getUser() {
    return this.userData;
  }


  validateEmail(userData: Register): Observable<any> {
    // console.log("  uu "+data.userName);
    // console.log("email"+data.email);
    return this.http.post(API_URL.user + '/validateemail', userData, GET_HEADERS_JSON);

  }
  validateSellerMail(sellerData: Register): Observable<any> {
    // console.log("  uu "+data.userName);
    // console.log("email"+data.email);
    return this.http.post(API_URL.user + '/validateemail', sellerData, GET_HEADERS_JSON);

  }


}
