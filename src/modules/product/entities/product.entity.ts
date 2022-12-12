export class Product {
  id?: number;
  name: string;
  price: number;
  description: string;
  image: string;
  slug: string;
  inventory: number;
  discount?: number;
  categories: number[];
}
