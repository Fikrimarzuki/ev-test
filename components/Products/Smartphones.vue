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
    <div class="pss-content-wrapper" v-if="!isLoading">
      <div v-for="(smp, i) in smartphones" :key="i">
        {{ smp.title }}
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
}
</style>
