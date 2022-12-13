import { CartItem } from './cart-item.entity';

export class Sale {
  id?: number;
  user_id: number;
  address_id: number;
  total_price: number;
  sale_date: Date;
  status?: string;
  payment_type: string;
  cart: CartItem[];
}
