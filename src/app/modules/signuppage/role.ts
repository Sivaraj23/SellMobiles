import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Role {
    roleId:number;
    createdOn:Date;
    description:string;
    roleName:string;
    updatedOn:Date;

    constructor() { }


}
