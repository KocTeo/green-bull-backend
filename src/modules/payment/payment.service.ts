import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPaymentDto: CreatePaymentDto) {
    return this.prisma.payment.create({
      data: {
        type: createPaymentDto.type,
      },
    });
  }

  findAll() {
    return this.prisma.payment.findMany();
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return this.prisma.payment.update({
      where: { id },
      data: {
        type: updatePaymentDto.type,
      },
    });
  }

  remove(id: number) {
    return this.prisma.payment.delete({ where: { id } });
  }
}
