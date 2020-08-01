import { Injectable } from '@angular/core';
import { Role } from "./role";

@Injectable({
    providedIn: 'root'
  })
export class ProfileData{
    public usersId:number;
    public userName:string;
    public email:string;
    public password:string;
    public street:string;
    public city:string;
    public state:string;
    public pincode:string;
    public mobileNo:string;
    public shopName:string;
    public role: Role;
    public createdOn:string;
    public updatedOn:string; 
}