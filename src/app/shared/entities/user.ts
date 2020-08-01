import { Role } from "src/app/modules/signuppage/role";

export interface User{
    usersId: number;
    role: Role;
    userName: string;
    email: string;
    password: string;
    mobileNo: string;
    street: string;
    city: string;
    state: string;
    pincode: string;
    createdDate: string;
    updatedDate: string; 
}