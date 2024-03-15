<template>
  <div>
    <div v-if="!productType && !keyword">
      <ProductsSmartphones
        v-if="tab === 'smartphones' || tab === 'all'"
        :isLoading="isLoading"
        :products="products"
      />
      <ProductsTablets
        v-if="tab === 'tablets' || tab == 'all'"
        :isLoading="isLoading"
        :products="products"
      />
      <ProductsWatches
        v-if="tab === 'watches' || tab === 'all'"
        :isLoading="isLoading"
        :products="products"
      />
      <ProductsGalaxyBuds
        v-if="tab === 'galaxy-buds' || tab == 'all'"
        :isLoading="isLoading"
        :products="products"
      />
    </div>
    <div v-else>
      <ProductsSearch :isLoading="isLoading" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useProductStore } from "@/stores/products.store";
import type { IProductFilter } from "~/types/product.interface";
import useNotif from "~/composables/useNotif";
import data from "~/db.json";
const route = useRoute();
const store = useProductStore();
const notification = useNotif();
const categories = data.categories;
const productTypes = data["product-types"]
const tab = computed(() => categories.find(el => el.slug === route.query.tab)?.slug || "all")
const productType = computed(() => productTypes.find(el => el.slug === route.query.type)?.slug || "")
const keyword = computed(() => route.query.keyword || "")
const products = computed(() => store.getProducts)
const isLoading = ref(false);

// async function fetchData() {
//   if (products.value.length !== 0 || productType.value || keyword.value) return
//   try {
//     isLoading.value = true
//     const { error } = await store.fetchProducts()
//     if (error) {
//       const { error:errorApi } = await store.fetchProductsApi()
//       if (errorApi) throw errorApi
//     }
//   } catch(error) {
//     notification({
//       message: "There's something wrong when fetch products",
//       type: "failed",
//       time: 5000
//     })
//   } finally {
//     isLoading.value = false
//   }
// }
// fetchData()
// watch(() => route.query, () => fetchData())
async function handleFetchProduct() {
  if (isLoading.value) return
  try {
    isLoading.value = true
    let filter: IProductFilter = {}
    if (route.query) {
      if (route.query.keyword) filter.keyword = route.query.keyword as string;
      if (route.query.type) filter.product_type = route.query.type as string;
      if (route.query.tab && route.query.tab !== "all") filter.category = route.query.tab as string; 
      if (route.query.storage) filter.storage = route.query.storage as string;     
    }
    const { error } = await store.fetchProducts(filter)    
    if (error) {
      const { error: errorApi } = await store.fetchProductsApi(filter);
      if (errorApi) throw errorApi
    }
  } catch(error) {
    notification({
      message: "failed to fetch products",
      type: "failed",
      time: 5000
    })
  } finally {
    isLoading.value = false
  }
}
watch(() => route.query, () => handleFetchProduct())
handleFetchProduct()
</script>

<style lang="scss" scoped>
section {
  max-width: $max-w-section;
  margin: auto;
}
</style>
