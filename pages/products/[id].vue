<template>
  <section class="product-page-wrapper">
    <div class="product-page-back"><Icon name="mdi:keyboard-backspace" />Kembali Ke Halaman Utama</div>
    <div class="product-container">
      <div class="product-images-wrapper">
        <Icon name="material-symbols:arrow-back-ios-rounded" class="img-control prev" />
        <div class="product-image-wrapper">
          <NuxtImg :src="product?.images[indexImage]" alt="" />
        </div>
        <Icon name="material-symbols:arrow-forward-ios-rounded" class="img-control next" />
      </div>
      <div class="product-content-wrapper">
        <div></div>
        <div class="product-content-name">
          {{ product?.name }}
        </div>
        <div>
          <div>Price:</div>
          <div>{{ formatRupiahUtil(product?.price || 0) }}</div>
          <div v-for="(category, i) in product?.category" :key="i">
            Category: {{ category }}
          </div>
        </div>
        <div>
          <div></div>
          <div>
            <Icon name="logos:facebook" />
            <Icon name="skill-icons:instagram" />
            <Icon name="logos:youtube-icon" />
            <Icon name="logos:whatsapp-icon" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// import { useProductStore } from "@/stores/products.store";
import db from "~/db.json";

const route = useRoute();
const productId = computed(() => +route.params.id || 0)
const product = db.products.find(el => el.id === productId.value)
const indexImage = ref(0);
</script>

<style lang="scss" scoped>
.product-page-wrapper {
  max-width: 1140px;
  margin: auto;
  .product-page-back {
    color: #FBBB14;
    font-weight: 600;
    cursor: pointer;
  }
  .product-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .product-images-wrapper {
      position: relative;
      flex: 1;
      padding: 16px;
      max-height: min-content;
      .img-control {
        position: absolute;
        top: 50%;
        height: 36px;
        width: 36px;
        &.prev {
          left: 24px;
        }
        &.next {
          right: 24px;
        }
      }
      .product-image-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        img {
          object-fit: cover;
        }
      }
    }
    .product-content-wrapper {
      flex: 1;
      .product-content-name {
        font-weight: 700;
        font-size: 36px;
        text-transform: capitalize;
      }
    }
  }
}
</style>
