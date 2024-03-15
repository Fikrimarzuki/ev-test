<template>
  <section class="prd-section-smartphone">
    <div class="pss-desc">
      <h1>Galaxy S24 Ultra</h1>
      <p>
        Get epic cashback up to Rp3 Mio*<br/>
        and up to Rp3.7 Mio* off when<br/>
        buy 2 or more Galaxy products
      </p>
      <button>
        Buy now
      </button>
    </div>
    <NuxtImg
      class="pss-image"
      src="https://images.samsung.com/is/image/samsung/assets/id/2401/pfs/01-hd01-E3-kv-pc-1440x640.jpg?imwidth=768"
    />
    <div class="pss-title">
      <h1>Smartphones</h1>
      <p>Smartphones with so many feature.</p>
    </div>
    <div class="pss-content-container" v-if="!isLoading">
      <div
        v-for="(smp, i) in smartphones.slice(0,4)"
        :key="i"
        class="pss-content-wrapper"
      >
        <NuxtImg :src="smp.variations[0].images[0]" class="pss-content-img" />
        <div class="pss-content">
          <div class="pss-content-title">{{ smp.title }}</div>
          <p class="pss-content-desc">{{ smp.description.split("\n")[0] }}</p>
          <NuxtLink :to="`/products/${smp.id}`" class="pss-content-btn">
            Lebih detail
          </NuxtLink>
        </div>
      </div>
    </div>
    <div v-else>
      
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { IProduct } from "~/types/product.interface";
const props = defineProps({
  isLoading: { type: Boolean, default: false },
  products: { type: Array<IProduct>, default: [] }
})
const smartphones = computed(() => props.products.filter((el) => el.category === "smartphones") || [])
</script>

<style lang="scss" scoped>
.prd-section-smartphone {
  position: relative;
  width: 100%;
  .pss-desc {
    position: absolute;
    min-width: 360px;
    height: 360px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 10%;
    h1 {
      font-size: 42px;
      margin-bottom: 20px
    }
    p {
      line-height: 1.5;
      margin-top: 0;
      margin-bottom: 32px;
    }
    button {
      color: white;
      background-color: black;
      outline: none;
      border: none;
      width: fit-content;
      padding: 12px 24px;
      border-radius: 25px;
      font-weight: 600;
      font-size: $text-xs;
    }
  }
  .pss-image {
    width: 100%;
  }
  .pss-title {
    text-align: center;
    h1 {
      font-size: 24px;
    }
    p {
      font-size: $text-sm;
    }
  }
  .pss-content-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 16px;
    padding: 16px 0 72px;
    width: 100%;
    .pss-content-wrapper {
      position: relative;
      background-color: #f7f7f7;
      .pss-content-img {
        object-fit: cover;
      }
      .pss-content {
        padding: 0 32px 32px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .pss-content-title {
          font-size: $text-sm;
          text-align: center;
          font-weight: 600;
        }
        .pss-content-desc {
          text-align: center;
          font-size: $text-xs;
          min-height: 32px;
        }
        .pss-content-btn {
          font-size: $text-xs;
          font-weight: 600;
          text-decoration: underline;
          cursor: pointer;
          color: black;
        }
      }
    }
  }
}
</style>
