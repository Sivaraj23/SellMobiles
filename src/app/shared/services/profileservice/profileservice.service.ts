import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs'; 
import { API_URL } from "../../utilities/url.api";
import { ProfileData } from "../../entities/profileData";
import { GET_HEADERS_JSON } from "../../utilities/headers.config";
@Injectable({
  providedIn: 'root'
})
export class ProfileserviceService {

  constructor(private http:HttpClient,private profserv: ProfileserviceService) { }

  
  // // //                                                                                            // // //
 // ************************ GETTING USERPROFILE DATA FROM DATABASE BY PASSING ID *************************//
// // //                                                                                            // // //
  

getById(id:number):Observable<any>{
  console.log(id);
  console.log('getmethod');
  return this.http.get(`${API_URL.user+'/getUser'}/${id}`,GET_HEADERS_JSON);
}  

  // // //                                                                                        // // //
 // ************************ SENDING UPDATED USERPROFILE DATA TO THE DATABASE *************************//
// // //                                                                                        // // //


postprofiledata(profile:ProfileData):Observable<any>{
  console.log('postmethod');
  return this.http.put(API_URL.user+'/updateUser', profile,GET_HEADERS_JSON);
}


// // // SETTER  // // //

  // setUserdata(userdata:User){
  //   this.userdata=userdata;
  //   console.log(this.userdata);
  // }
  

// // // GETTER  // // //
  
  // getUserdata(){
  //   return this.userdata;
  // }


}
