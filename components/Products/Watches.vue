<template>
  <section class="prd-section-watch">
    <div class="psw-desc-wrapper">
      <div class="psw-desc">
        <h1>Galaxy Watch 6</h1>
        <p>
          Start your everyday wellness journey
        </p>
        <button>
          Buy now
        </button>
      </div>
    </div>
    <NuxtImg
      class="psw-image"
      src="https://images.samsung.com/is/image/samsung/assets/id/2307/pfs/09-hd01-Watch6-kv-pc-1440x640.jpg?imwidth=768"
    />
    <div class="psw-title">
      <h1>Watches</h1>
      <p>Watches with so many feature.</p>
    </div>
    <div class="psw-content-container" v-if="!isLoading">
      <div
        v-for="(wtch, i) in watches.slice(0,4)"
        :key="i"
        class="psw-content-wrapper"
      >
        <NuxtImg :src="wtch.variations[0].images[0]" class="psw-content-img" />
        <div class="psw-content">
          <div class="psw-content-title">{{ wtch.title.split("(")[0] }}</div>
          <p class="psw-content-desc">{{ wtch.description.split("\n")[0] }}</p>
          <NuxtLink :to="`/products/${wtch.id}`" class="psw-content-btn">
            Lebih detail
          </NuxtLink>
        </div>
      </div>
    </div>
    <div v-else class="psw-loading-wrapper">
      <div v-for="(_, i) in [1,2,3,4]" class="psw-content-loading"></div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { IProduct } from "~/types/product.interface";
const props = defineProps({
  isLoading: { type: Boolean, default: false },
  products: { type: Array<IProduct>, default: [] }
})
const watches = computed(() => props.products.filter((el) => el.category === "watches") || [])
</script>

<style lang="scss" scoped>
@use "~/assets/scss/_animation.scss";
.prd-section-watch {
  position: relative;
  width: 100%;
  .psw-desc-wrapper {
    position: absolute;
    left: 10%;
    top: 64px;
    .psw-desc {
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
  .psw-image {
    width: 100%;
  }
  .psw-title {
    text-align: center;
    h1 {
      font-size: 24px;
    }
    p {
      font-size: $text-sm;
    }
  }
  .psw-content-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 16px;
    padding: 16px 0 72px;
    width: 100%;
    .psw-content-wrapper {
      position: relative;
      background-color: #f7f7f7;
      .psw-content-img {
        object-fit: cover;
        width: 100%;
      }
      .psw-content {
        padding: 0 32px 32px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .psw-content-title {
          font-size: $text-sm;
          text-align: center;
          font-weight: 600;
        }
        .psw-content-desc {
          text-align: center;
          font-size: $text-xs;
          min-height: 32px;
        }
        .psw-content-btn {
          font-size: $text-xs;
          font-weight: 600;
          text-decoration: underline;
          cursor: pointer;
          color: black;
        }
      }
    }
  }
  .psw-loading-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 32px;
    padding: 16px 0 72px;
    .psw-content-loading {
      height: 360px;
      width: 100%;
      background-color: rgba(192, 192, 192, 0.863);
      border-radius: 25px;
      animation: pulse 2s infinite;
    }
  }
}
@media only screen and (max-width: 768px) {
  .prd-section-watch {
    .psw-desc-wrapper {
      top: 32px;
    }
    .psw-content-container,
    .psw-loading-wrapper {
      grid-template-columns: 1fr 1fr;
    }
  }
}
@media only screen and (max-width: 620px) {
  .prd-section-watch {
    .psw-desc-wrapper {
      .psw-desc {
        button {
          display: none;
        }
      }
    }
  }
}
@media only screen and (max-width: 368px) {
  .prd-section-watch {
    .psw-desc-wrapper {
      top: 16px;
      .psw-desc {
        h1 {
          margin: 8px 0
        }
        p {
          margin-bottom: 8px;
        }
      }
    }
    .psw-content-container,
    .psw-loading-wrapper {
      grid-template-columns: 1fr;
    }
  }
}
</style>
