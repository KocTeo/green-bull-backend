import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { CartItem } from '../entities/cart-item.entity';
import { Sale } from '../entities/sale.entity';

export class CreateSaleDto extends Sale {
  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @IsNumber()
  @IsNotEmpty()
  address_id: number;

  @IsNumber()
  @IsNotEmpty()
  total_price: number;

  @IsString()
  status: string;

  @IsString()
  @IsNotEmpty()
  payment_type: string;

  @ArrayNotEmpty()
  @IsArray()
  cart: CartItem[];
}
