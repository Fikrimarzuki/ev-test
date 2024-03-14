<template>
  <section class="prd-section-tablet">
    <div class="pst-desc">
      <h1>Galaxy Tab S9 Series</h1>
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
      class="pst-image"
      src="https://images.samsung.com/is/image/samsung/assets/id/2307/pfs/07-hd01-Tab-S9-Series-kv-pc-1440x640.jpg?imwidth=768" />
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
.prd-section-tablet {
  position: relative;
  width: 100%;
  .pst-desc {
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
  .pst-image {
    width: 100%;
  }
}
</style>
