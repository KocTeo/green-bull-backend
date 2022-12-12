import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    const {
      name,
      description,
      price,
      categories,
      image,
      inventory,
      slug,
      discount,
    } = createProductDto;

    const created = await this.prisma.product.create({
      data: {
        name,
        description,
        price,
        image,
        inventory,
        slug,
        discount,
      },
    });

    const createdCategoryProduct = categories.map((category) => {
      return this.prisma.category_Products.create({
        data: {
          product_id: created.id,
          category_id: category,
        },
      });
    });

    return {
      ...created,
      categories: await Promise.all(createdCategoryProduct),
    };
  }

  async findAll() {
    const products = await this.prisma.product.findMany({
      include: { categories: true },
    });

    return products;
  }

  async findByCategory(id: number) {
    const products = await this.prisma.product.findMany({
      where: {
        categories: {
          some: {
            category_id: id,
          },
        },
      },
    });

    return products;
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({
      where: { id },
      include: { categories: true },
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const { categories, ...wihtoutCategories } = updateProductDto;
    console.log(categories);
    return this.prisma.product.update({
      where: { id },
      data: wihtoutCategories,
    });
  }

  remove(id: number) {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}
