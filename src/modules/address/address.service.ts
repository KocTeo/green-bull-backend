import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { User } from '../user/entities/user.entity';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAddressDto: CreateAddressDto) {
    const { user_id, zip, number } = createAddressDto;
    const exist = await this.prisma.address.findMany({
      where: {
        user_id,
        zip,
        number,
      },
    });

    if (exist.length > 0) {
      return {
        message: 'Address already exist',
      };
    }

    return this.prisma.address.create({
      data: createAddressDto,
    });
  }

  findAll({ id }) {
    return this.prisma.address.findMany({
      where: {
        user_id: id,
      },
    });
  }

  async update(id: number, updateAddressDto: UpdateAddressDto, user: User) {
    const address = await this.prisma.address.findUnique({
      where: { id },
    });

    if (address.user_id === user.id) {
      return this.prisma.address.update({
        where: { id },
        data: updateAddressDto,
      });
    }

    return "You don't have permission to update this address";
  }

  remove(id: number) {
    return this.prisma.address.delete({
      where: { id },
    });
  }
}
