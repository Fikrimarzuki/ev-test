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
      src="https://images.samsung.com/is/image/samsung/assets/id/2208/pfs/09-hd02-buds2pro-kv-pc-1440X640-new.jpg?imwidth=768"
    />
    <div class="psg-title">
      <h1>Galaxy Buds</h1>
      <p>Galaxy buds with so many feature.</p>
    </div>
    <div class="psg-content-container" v-if="!isLoading">
      <div
        v-for="(gbud, i) in gbuds.slice(0,4)"
        :key="i"
        class="psg-content-wrapper"
      >
        <div class="psg-img-wrapper">
          <NuxtImg :src="gbud.variations[0].images[0]" class="psg-content-img" />
        </div>
        <div class="psg-content">
          <div class="psg-content-title">{{ gbud.title }}</div>
          <p class="psg-content-desc">{{ gbud.description.split("\n")[0] }}</p>
          <NuxtLink :to="`/products/${gbud.id}`" class="psg-content-btn">
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
const gbuds = computed(() => props.products.filter((el) => el.category === "galaxy-buds") || [])
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
  .psg-title {
    text-align: center;
    h1 {
      font-size: 24px;
    }
    p {
      font-size: $text-sm;
    }
  }
  .psg-content-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 16px;
    padding: 16px 0 72px;
    width: 100%;
    .psg-content-wrapper {
      position: relative;
      background-color: #f7f7f7;
      .psg-img-wrapper {
        display: flex;
        justify-content: center;
        .psg-content-img {
          object-fit: cover;
          max-width: 236px;
        }
      }
      .psg-content {
        padding: 0 32px 32px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .psg-content-title {
          font-size: $text-sm;
          text-align: center;
          font-weight: 600;
        }
        .psg-content-desc {
          text-align: center;
          font-size: $text-xs;
          min-height: 32px;
        }
        .psg-content-btn {
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
