import { Product } from "../entities/product";
import { User } from "../entities/user";

export interface Cart {
    cartId: number;
    product: Product;
    user: User;
    createdOn: string;
    updatedOn: string;
}