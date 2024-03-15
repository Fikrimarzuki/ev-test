<template>
  <section class="prd-section-tablet">
    <div class="pst-desc-wrapper">
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
    </div>
    <NuxtImg
      class="pst-image"
      src="https://images.samsung.com/is/image/samsung/assets/id/2307/pfs/07-hd01-Tab-S9-Series-kv-pc-1440x640.jpg?imwidth=768"
    />
    <div class="pst-title">
      <h1>Tablets</h1>
      <p>Tablets with so many feature.</p>
    </div>
    <div class="pst-content-container" v-if="!isLoading">
      <div
        v-for="(tbl, i) in tablets.slice(0,4)"
        :key="i"
        class="pst-content-wrapper"
      >
        <div class="pst-img-wrapper">
          <NuxtImg :src="tbl.variations[0].images[0]" class="pst-content-img" />
        </div>
        <div class="pst-content">
          <div class="pst-content-title">{{ tbl.title }}</div>
          <p class="pst-content-desc">{{ tbl.description.split("\n")[0] }}</p>
          <NuxtLink :to="`/products/${tbl.id}`" class="pst-content-btn">
            Lebih detail
          </NuxtLink>
        </div>
      </div>
    </div>
    <div v-else class="pst-loading-wrapper">
      <div v-for="(_, i) in [1,2,3,4]" class="pst-content-loading"></div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { IProduct } from "~/types/product.interface";
const props = defineProps({
  isLoading: { type: Boolean, default: false },
  products: { type: Array<IProduct>, default: [] }
})
const tablets = computed(() => props.products.filter((el) => el.category === "tablets") || [])
</script>

<style lang="scss" scoped>
@use "~/assets/scss/_animation.scss";
.prd-section-tablet {
  position: relative;
  width: 100%;
  .pst-desc-wrapper {
    position: absolute;
    left: 10%;
    top: 64px;
    .pst-desc {
      display: flex;
      flex-direction: column;
      justify-content: center;
      h1 {
        font-size: clamp(16px, 5vw, 42px);
        margin-bottom: 20px
      }
      p {
        font-size: clamp(10px, 1.9vw, 16px);
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
  }
  .pst-image {
    width: 100%;
  }
  .pst-title {
    text-align: center;
    h1 {
      font-size: 24px;
    }
    p {
      font-size: $text-sm;
    }
  }
  .pst-content-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 16px;
    padding: 16px 0 72px;
    width: 100%;
    .pst-content-wrapper {
      position: relative;
      background-color: #f7f7f7;
      .pst-img-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        .pst-content-img {
          object-fit: cover;
          width: 100%;
        }
      }
      .pst-content {
        padding: 0 32px 32px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .pst-content-title {
          font-size: $text-sm;
          text-align: center;
          font-weight: 600;
        }
        .pst-content-desc {
          text-align: center;
          font-size: $text-xs;
          min-height: 32px;
        }
        .pst-content-btn {
          font-size: $text-xs;
          font-weight: 600;
          text-decoration: underline;
          cursor: pointer;
          color: black;
        }
      }
    }
  }
  .pst-loading-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 32px;
    padding: 16px 0 72px;
    .pst-content-loading {
      height: 360px;
      width: 100%;
      background-color: rgba(192, 192, 192, 0.863);
      border-radius: 25px;
      animation: pulse 2s infinite;
    }
  }
}
@media only screen and (max-width: 768px) {
  .prd-section-tablet {
    .pst-desc-wrapper {
      top: 32px;
    }
    .pst-content-container,
    .pst-loading-wrapper {
      grid-template-columns: 1fr 1fr;
    }
  }
}
@media only screen and (max-width: 620px) {
  .prd-section-tablet {
    .pst-desc-wrapper {
      .pst-desc {
        button {
          display: none;
        }
      }
    }
  }
}
@media only screen and (max-width: 368px) {
  .prd-section-tablet {
    .pst-desc-wrapper {
      top: 16px;
      .pst-desc {
        h1 {
          margin: 8px 0
        }
        p {
          margin-bottom: 8px;
        }
      }
    }
    .pst-content-container,
    .pst-loading-wrapper {
      grid-template-columns: 1fr;
    }
  }
}
</style>
