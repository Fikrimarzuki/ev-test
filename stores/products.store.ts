import { defineStore } from "pinia";
import type { IProduct } from "~/types/product.interface";
import useEnv from "~/composables/useEnv";

export const useProductStore = defineStore("products", {
  state: () => ({
    products: [] as IProduct[],
  }),
  getters: {
    getProducts: (state) => state.products
  },
  actions: {
    async fetchProducts() {
      try {
        const response = await fetch(`${useEnv().BASE_URL}/products`);
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const data = await response.json()
        this.products = data
        return { data, error: null }
      } catch(error) {
        return { data: null, error }
      }
    }
  }
})
