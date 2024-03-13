<template>
  <div v-if="pending">
    Loading
  </div>
  <div v-else>
    <Categories />
    <Products :products="products" />
  </div>
</template>

<script lang="ts" setup>
// import { useProductStore } from "@/stores/products.store";
import db from "~/db.json";
const runtimeConfig = useRuntimeConfig();
// const store = useProductStore();
// const { fetchProducts } = store;
const { pending, data } = useFetch("https://jsonplaceholder.typicode.com/todos", { lazy: true })

const products = db.products;
</script>
