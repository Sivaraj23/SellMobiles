import { Injectable } from '@angular/core';
import { Role } from './role';

@Injectable({
    providedIn: 'root'
})

export class Register {
    userId:string;
    userName: string;
    email: string;
    shopName: string;
    password: string;
    cPassword: string;
    mobileNo: number;
    street: string;
    city: string;
    state: string;
    pincode: number;
    role:Role;

    constructor() { }


}
