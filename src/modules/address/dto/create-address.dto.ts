import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Address } from '../entities/address.entity';

export class CreateAddressDto extends Address {
  @IsString()
  @IsNotEmpty()
  street: string;

  @IsNotEmpty()
  @IsString()
  number: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  state: string;

  @IsNotEmpty()
  @IsString()
  country: string;

  @IsNotEmpty()
  @IsString()
  zip: string;

  @IsNotEmpty()
  @IsString()
  complement: string;

  @IsNotEmpty()
  @IsNumber()
  user_id: number;
}
