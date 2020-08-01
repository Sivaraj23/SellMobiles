import { Product } from '../entities/product';
import { User } from './user';
export interface Order{
    orderId: number;
    user: User;
    products: Product[];
    quantity: number;
    status: string;
    createdOn: string;
    updatedOn: string;
}