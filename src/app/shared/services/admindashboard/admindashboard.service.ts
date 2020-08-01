import { Injectable } from '@angular/core';
import  {API_URL}  from 'src/app/shared/utilities/url.api';
import { Observable } from "rxjs";
import {  HttpClient } from "@angular/common/http";
import {GET_HEADERS_JSON,GET_HEADERS_TEXT} from '../../utilities/headers.config';

@Injectable({
  providedIn: 'root'
})
export class AdmindashboardService {





  constructor(private http: HttpClient) { }

  getSellersCountByState(): Observable <any> {
    return this.http.get<any>(API_URL.user+'/seller',GET_HEADERS_JSON);
    
    }

getUsersCountByRole(): Observable <any> {
  
  return this.http.get<any>(API_URL.stats+'/get/usersbasedonrole',GET_HEADERS_JSON);
  
  }

  getUsersCountByState():Observable<any>{
    return this.http.get<any>(API_URL.stats+'/getState',GET_HEADERS_JSON);
  }


}
