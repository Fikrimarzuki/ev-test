<template>
  <section class="prd-section-watch">
    <div class="psw-desc">
      <h1>Galaxy Watch 6</h1>
      <p>
        Start your everyday wellness journey
      </p>
      <button>
        Buy now
      </button>
    </div>
    <NuxtImg
      class="psw-image"
      src="https://images.samsung.com/is/image/samsung/assets/id/2307/pfs/09-hd01-Watch6-kv-pc-1440x640.jpg?imwidth=768" />
  </section>
</template>

<script lang="ts" setup>
import type { IProduct } from "~/types/product.interface";
const props = defineProps({
  isLoading: { type: Boolean, default: false },
  products: { type: Array<IProduct>, default: [] }
})
</script>

<style lang="scss" scoped>
.prd-section-watch {
  position: relative;
  width: 100%;
  .psw-desc {
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
  .psw-image {
    width: 100%;
  }
}
</style>
