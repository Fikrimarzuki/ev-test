<template>
  <section class="prd-section-gbuds">
    <div class="psg-desc">
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
      class="psg-image"
      src="https://images.samsung.com/is/image/samsung/assets/id/2208/pfs/09-hd02-buds2pro-kv-pc-1440X640-new.jpg?imwidth=768" />
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
.prd-section-gbuds {
  position: relative;
  width: 100%;
  .psg-desc {
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
  .psg-image {
    width: 100%;
  }
}
</style>
