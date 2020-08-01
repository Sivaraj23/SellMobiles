import { User } from './user';
import { Brand } from './brand';
import {Image} from './image';
export class  Product{
  productId: number;
  user: User;
  productName: string;
  brand: Brand;
  screenSize: number;
  battery: string;
  operatingSystem: string;
  camera: string;
  memorySpeed: string;
  defects: string;
  price: number;
  description: string;
  purchaseDate: Date;
  updatedDate: Date;
  image:Image;
  sellerName: string;
}
