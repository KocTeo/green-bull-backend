import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';

@Injectable()
export class SaleService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSaleDto: CreateSaleDto) {
    const { user_id, address_id, total_price, payment_type, status, cart } =
      createSaleDto;

    const sale_date = new Date();

    const created = await this.prisma.sale.create({
      data: {
        user_id,
        address_id,
        total_price,
        payment_type,
        status,
        sale_date,
        sale_product: {
          createMany: {
            data: cart,
          },
        },
      },
    });

    return created;
  }

  findAll({ id }) {
    return this.prisma.sale.findMany({
      where: {
        user_id: id,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.sale.findUnique({
      where: { id },
    });
  }

  update(id: number, updateSaleDto: UpdateSaleDto) {
    return this.prisma.sale.update({
      where: { id },
      data: updateSaleDto,
    });
  }

  async remove(id: number) {
    await this.prisma.sale_Product.deleteMany({
      where: {
        sale_id: id,
      },
    });

    return this.prisma.sale.delete({
      where: { id },
    });
  }
}
