import { defineStore } from "pinia";

export const useProductStore = defineStore("products", () => {
  const products = ref<Product[] | null>(null)
  return {
    products
  }
})

interface Variation {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  discount_price: number;
  category: string[];
  description: string;
  images: string[];
  variations: Variation[];
  stock: number;
}

