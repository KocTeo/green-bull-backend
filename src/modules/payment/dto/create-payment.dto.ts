import { IsNotEmpty, IsString } from 'class-validator';
import { Payment } from '../entities/payment.entity';

export class CreatePaymentDto extends Payment {
  @IsString()
  @IsNotEmpty()
  type: string;
}
