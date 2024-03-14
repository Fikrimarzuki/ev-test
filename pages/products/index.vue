<template>
  <div>
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
</template>

<script lang="ts" setup>
import { useProductStore } from "@/stores/products.store";
import useNotif from "~/composables/useNotif";
import data from "~/db.json";
const route = useRoute()
const store = useProductStore();
const notification = useNotif();
const categories = data.categories;
const tab = computed(() => categories.find(el => el.slug === route.query.tab)?.slug || "all")
const products = computed(() => store.getProducts)
const isLoading = ref(false);

async function fetchData() {
  try {
    isLoading.value = true
    const { error } = await store.fetchProducts()
    if (error) throw error
  } catch(error) {
    notification({
      message: "There's something wrong when fetch products",
      type: "failed",
      time: 5000
    })
  } finally {
    isLoading.value = false
  }
}
fetchData()
</script>

<style lang="scss" scoped>
section {
  max-width: $max-w-section;
  margin: auto;
}
</style>
