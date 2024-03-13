interface Variation {
  id: number;
  name: string;
  image: string;
  price: number;
}

export interface IProduct {
  id: number;
  name: string;
  slug: string;
  price: number;
  discount_price: number | null;
  category: string[];
  description: string;
  images: string[];
  variations: Variation[];
  stock: number;
}
