import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class Role{
    public   roleId :number;
	public  roleName: string;
	public description: string;
	public  createdOn:string;
	public  updatedOn:string;
}

