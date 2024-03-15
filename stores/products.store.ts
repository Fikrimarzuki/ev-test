import { defineStore } from "pinia";
import type { IProduct, IProductFilter } from "~/types/product.interface";
import useEnv from "~/composables/useEnv";

export const useProductStore = defineStore("products", {
  state: () => ({
    products: [] as IProduct[],
    product: {} as IProduct
  }),
  getters: {
    getProducts: (state) => state.products,
    getProduct: (state) => state.product
  },
  actions: {
    resetProduct() {
      this.product = {} as IProduct
    },
    async fetchProducts(filter?: IProductFilter) {
      try {
        let url = "products"
        if (filter) {
          url += "?"
          for (const key in filter) {
            const k = key as keyof IProductFilter;
            if (filter[k]) {
              url += `${key}=${filter[k]}&`
            }
          }
          url = url.slice(0, -1)
          // if (filter.category) url += `category=${filter.category}&`
          // if (filter.keyword) url += `title=${filter.keyword}&`
          // if (filter.product_type) url += `product_type=${filter.product_type}`
        }
        const response = await fetch(`${useEnv().BASE_URL}/${url}`);
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const data = await response.json()
        this.products = data
        return { data, error: null }
      } catch(error) {
        return { data: null, error }
      }
    },
    async fetchProductsApi(filter?: IProductFilter) {
      try {
        let url = "products"
        if (filter) {
          url += "?"
          for (const key in filter) {
            const k = key as keyof IProductFilter;
            if (filter[k]) {
              url += `${key}=${filter[k]}&`
            }
          }
          url = url.slice(0, -1)
          // if (filter.category) url += `category=${filter.category}&`
          // if (filter.keyword) url += `title=${filter.keyword}&`
          // if (filter.product_type) url += `product_type=${filter.product_type}`
        }
        const response = await fetch(`/api/${url}`);
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const data = await response.json()
        this.products = data
        return { data, error: null }
      } catch(error) {
        return { data: null, error }
      }
    },
    async fetchProduct(id: string) {
      try {
        const response = await fetch(`${useEnv().BASE_URL}/products/${id}`);
        if (!response.ok) throw new Error(response.statusText)

        const data = await response.json()
        const product = data.find((el: IProduct) => el.id === id)
        if (!product) throw new Error("data not found")

        this.product = product
        this.products = data
        return { data, error: null }
      } catch(error) {
        return { data: null, error }
      }
    },
    async fetchProductApi(id: string) {
      try {
        const response = await fetch(`/api/products/${id}`);
        if (!response.ok) throw new Error(response.statusText)

        const data = await response.json()
        if (!data) throw new Error("data not found")
        this.product = data
        return { data, error: null }
      } catch(error) {
        return { data: null, error }
      }
    }
  }
})
