import { IsEmail, IsString } from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto extends User {
  @IsString()
  name: string;

  @IsString()
  password: string;

  @IsEmail()
  email: string;
}
