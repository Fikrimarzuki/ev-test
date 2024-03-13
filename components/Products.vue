<template>
  <section class="products-section">
    <div class="title">Products</div>
    <div class="products-wrapper">
      <div v-for="(product, i) in products" :key="i" class="product-content-wrapper">
        <NuxtImg :src="product.images[0]" class="product-img" />
        <div class="product-content">
          <div class="product-name">{{ product.name }}</div>
          <div>Harga Reseller: <span>{{ formatRupiahUtil(product.price) }}</span></div>
          <NuxtLink :to="`/products/${product.id}`">See Product</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { IProduct } from "~/types/product.interface"
defineProps({
  products: { type: Array<IProduct>, default: [] }
})
</script>

<style lang="scss" scoped>
.products-section {
  max-width: 1140px;
  margin: auto;
  .title {
    font-weight: 600;
    font-size: 1.25rem;
    margin-bottom: 16px;
  }
  .products-wrapper {
    display: grid;
    grid-template-columns: repeat(3, minmax(320px, 1fr));
    gap: 16px;
    .product-content-wrapper {
      border-radius: 10px;
      background-color: gray;
      height: 320px;
      .product-img {
        border-radius: 10px 10px 0 0;
        width: 100%;
        height: 200px;
        object-fit: cover;
        object-position: center center;
      }
      .product-content {
        padding: 8px;
        .product-name {
          font-weight: 600;
        }
      }
    }
  }
}
</style>
