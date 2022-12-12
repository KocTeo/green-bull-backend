import { Category } from 'src/modules/category/entities/category.entity';

export class Product {
  id?: number;
  name: string;
  price: number;
  description: string;
  image: string;
  slug: string;
  invetory: number;
  discount?: number;
  category: Category[];
}
