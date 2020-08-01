import { Injectable } from '@angular/core';
import { Login } from '../../entities/login';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from 'src/app/core/header/header.component';
import { API_URL } from '../../utilities/url.api'
import { GET_HEADERS_JSON } from '../../utilities/headers.config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private header: HeaderComponent;
  constructor(private http: HttpClient, public regserv: LoginService, public userData: Login) { }

  postUser(data: Login): Observable<any> {
    // console.log("  uu "+data.name);
    // console.log("email"+data.password);
    return this.http.post(API_URL.user + '/getUser', data, GET_HEADERS_JSON);

  }
  //   setLogin(login:string){
  // this.header.setLogin(login);
  //   }

  getLogin(): boolean {
    if (localStorage.getItem('login')) {
      return true;
    }
  }
}
