<template>
  <section class="product-page-section">
    <div class="product-page-wrapper" v-if="!isLoading && product.id">
      <div class="product-img-wrapper">
        <div class="product-back-nav" @click="router.go(-1)">
          <Icon name="material-symbols:undo-rounded" class="icon-back" />Kembali ke halaman sebelumnya
        </div>
        <NuxtImg
          :src="variations[varIndex].images[varImgIndex]"
          class="product-img anima-show"
          id="productImage"
        />
        <div class="img-control-wrapper-bottom" v-if="variations[varIndex].images.length > 1">
          <div class="img-control-bottom">
            <div
              v-for="(img, i) in variations[varIndex].images"
              :key="i"
              class="bottom-control"
              :class="{ active: varImgIndex === i }"
              @click="varImgIndex = i"
            />
          </div>
        </div>
        <div
          class="img-control-wrapper-left-control"
          v-if="varImgIndex > 0"
          @click="handleClickImgControl('left')"
        >
          <div class="left-control">
            <Icon name="material-symbols:chevron-left-rounded" />
          </div>
        </div>
        <div
          class="img-control-wrapper-right-control"
          v-if="varImgIndex < variations[varIndex].images.length - 1"
          @click="handleClickImgControl('right')"
        >
          <div class="right-control">
            <Icon name="material-symbols:chevron-right-rounded" />
          </div>
        </div>
      </div>
      <div>
        <h3>{{ product.title }}</h3>
        <h2 v-if="variations[varIndex].price">{{ formatRupiahUtil(variations[varIndex].price || 0) }}</h2>
        <div v-if="variations.find(el => el.color)" class="color-container">
          <div class="color-title">
            <span>Warna:</span>
            <span>{{ variations[varIndex].color }}</span>
          </div>
          <div class="color-wrapper">
            <div
              v-for="(variation, i) in variations"
              :key="i"
              class="color-icon"
              :class="{ active: i === varIndex }"
              :style="`background: ${variation.color_code}`"
              @click="handleClickColor(i)"
            />
          </div>
        </div>
        <div v-if="variations[varIndex].storage.length" class="storage-container">
          <div
            v-for="(storage, i) in variations[varIndex].storage"
            :key="i"
            class="storage-wrapper"
          >
            {{ storage }}
          </div>
        </div>
        <div v-if="product.description" class="description-container">
          <ul>
            <li
              v-for="(desc, i) in product.description.split('\n')"
              :key="i"
            >{{ desc }}</li>
          </ul>
        </div>
        <div class="more-info-wrapper">
          <div v-if="product.cpu_speed">
            <div>CPU Speed</div>
            <div>{{ product.cpu_speed }}</div>
          </div>
          <div v-if="product.cpu_type">
            <div>CPU Type</div>
            <div>{{ product.cpu_type }}</div>
          </div>
          <div v-if="product.main_display?.size">
            <div>Size (Main Display)</div>
            <div>{{ product.main_display.size }}</div>
          </div>
          <div v-if="product.main_display?.resolution">
            <div>Resolution (Main Display)</div>
            <div>{{ product.main_display.resolution }}</div>
          </div>
          <div v-if="product.main_display?.technology">
            <div>Technology (Main Display)</div>
            <div>{{ product.main_display.technology }}</div>
          </div>
          <div v-if="product.main_display?.color_depth">
            <div>Color Depth (Main Display)</div>
            <div>{{ product.main_display.color_depth }}</div>
          </div>
          <div v-if="product.main_display?.max_refresh_rate">
            <div>Max Refresh Rate (Main Display)</div>
            <div>{{ product.main_display?.max_refresh_rate }}</div>
          </div>
          <div v-if="product.auto_focus">
            <div>Main Camera - Auto Focus</div>
            <div>{{ product.auto_focus }}</div>
          </div>
          <div v-if="product.camera_resolution">
            <div>Camera Resolution</div>
            <div>{{ product.camera_resolution }}</div>
          </div>
          <div v-if="product.memory">
            <div>Memori (GB)</div>
            <div>{{ product.memory }}</div>
          </div>
          <div v-if="product.storage">
            <div>Penyimpanan (GB)</div>
            <div>{{ product.storage }}</div>
          </div>
          <div v-if="product.buds?.speaker">
            <div>Speaker</div>
            <div>{{ product.buds.speaker }}</div>
          </div>
          <div v-if="product.buds?.audio_code">
            <div>Audio Codec</div>
            <div>{{ product.buds.audio_code }}</div>
          </div>
          <div v-if="product.buds?.bluetooth_version">
            <div>Bluetooth Version</div>
            <div>{{ product.buds.bluetooth_version }}</div>
          </div>
          <div v-if="product.buds?.battery_capacity_earbud">
            <div>Battery Capacity (Earbud)</div>
            <div>{{ product.buds.battery_capacity_earbud }}</div>
          </div>
          <div v-if="product.buds?.battery_capacity_case">
            <div>Battery Capacity (Case)</div>
            <div>{{ product.buds.battery_capacity_case }}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="isLoading" class="product-page-loading">
      <div></div>
      <div></div>
    </div>
    <div v-else-if="!product.id" class="product-page-notfound">
      <Icon name="ph:smiley-sad-thin" class="icon-sad" />
      <div>Product Not found</div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useProductStore } from "~/stores/products.store";
const route = useRoute();
const router = useRouter();
const notification = useNotif();
const animate = useAnimation();
const store = useProductStore();
const product = computed(() => store.getProduct);
const isLoading = ref(false);
const varIndex = ref(0);
const varImgIndex = ref(0);
const variations = computed(() => product.value?.variations || []);
const handleClickColor = (index: number) => {
  animate.fromToAnimation(document.getElementById("productImage"), "anima-show")
  varIndex.value = index
  varImgIndex.value = 0
}
const handleClickImgControl = (act: string) => {
  if (act === "left") {
    if (varImgIndex.value === 0) return
    animate.fromToAnimation(document.getElementById("productImage"), "anima-left")
    varImgIndex.value -= 1
  } else if (act === "right") {
    if (varImgIndex.value === variations.value[varIndex.value].images.length -1) return
    animate.fromToAnimation(document.getElementById("productImage"), "anima-right")
    varImgIndex.value += 1
  }
}
async function fetchProduct() {
  if (product.value?.id) return
  try {
    isLoading.value = true
    const productId = route.params.id as string 
    const { error } = await store.fetchProduct(productId)
    if (error) {
      const { error: errorApi } = await store.fetchProductApi(productId);
      if (errorApi) throw error
    }
  } catch(error) {
    notification({
      message: "failed to fetch product",
      type: "failed",
      time: 5000
    })
  } finally {
    isLoading.value = false
  }
}
fetchProduct()
onUnmounted(() => store.resetProduct())
</script>

<style lang="scss" scoped>
@use "~/assets/scss/_animation.scss";
.product-page-section {
  max-width: 1140px;
  margin: auto;
  .product-back-nav {
    padding: 16px;
    width: fit-content;
    font-size: $text-sm;
    .icon-back {
      padding-right: 4px;
    }
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .product-page-wrapper {
    padding: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    position: relative;
    .product-img-wrapper {
      position: relative;
      .product-img {
        position: sticky;
        top: 196px;
        width: 100%;
        transition: all 0.5s ease-in-out;
        &.anima-show {
          animation: hide-show 0.5s ease-in-out;
        }
        &.anima-left {
          animation: slide-right-left 0.5s ease-in-out forwards;
        }
        &.anima-right {
          animation: slide-left-right 0.5s ease-in-out forwards;
        }
      }
      .img-control-wrapper-bottom {
        display: flex;
        justify-content: center;
        .img-control-bottom {
          gap: 8px;
          border: 1px solid #cdcbcbef;
          display: flex;
          padding: 4px 8px;
          border-radius: 25px;
          .bottom-control {
            width: 8px;
            height: 8px;
            background-color: #757575;
            border-radius: 50%;
            cursor: pointer;
            &.active {
              background-color: black;
            }
          }
        }
      }
      .img-control-wrapper-left-control,
      .img-control-wrapper-right-control {
        position: absolute;
        top: 25%;
        cursor: pointer;
        .left-control,
        .right-control {
          padding: 2px;
          border: 1px solid #cdcbcbef;
          border-radius: 50%;
          svg {
            width: 32px;
            height: 32px;
          }
        }
      }
      .img-control-wrapper-left-control {
        left: 16px;
      }
      .img-control-wrapper-right-control {
        right: 16px;
      }
    }
    .color-container {
      font-size: $text-xs;
      .color-title {
        margin-bottom: 4px;
        span:first-child {
          margin-right: 2px;
          font-weight: 600;
        }
      }
      .color-wrapper {
        display: flex;
        align-items: center;
        gap: 8px;
        .color-icon {
          height: 14px;
          width: 14px;
          border-radius: 50%;
          border: 1px solid black;
          background-color: white;
          cursor: pointer;
          &.active {
            margin: 1px;
            outline: 1px solid black;
          }
        }
      }
    }
    .storage-container {
      font-size: $text-xxs;
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
      .storage-wrapper {
        padding: 8px;
        border: 1px solid black;
        width: fit-content;
        border-radius: 25px;
        font-weight: 600;
      }
    }
    .description-container {
      background-color: #f7f7f7;
      padding: 2px 0;
      margin-top: 8px;
      border-radius: 10px;
      font-size: $text-sm;
      line-height: 1.5;
    }
    .more-info-wrapper {
      margin-top: 16px;
      padding: 16px;
      background-color: #f7f7f7;
      border-radius: 10px;
      font-size: $text-sm;
      & > div {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 8px;
        padding: 8px 4px;
        border-bottom: 1px solid #bbb;
        align-items: center;
        &:last-child {
          border-bottom: 0;
        }
        div:last-child {
          font-weight: 550;
        }
      }
    }
  }
  .product-page-notfound {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: calc(100vh - 577px);
    font-size: $text-xl;
    .sad {
      height: 36px;
      width: 36px;
    }
  }
  .product-page-loading {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    margin-bottom: 64px;
    margin-top: 32px;
    & > div {
      width: 100%;
      min-height: 320px;
      background-color: rgba(201, 198, 198, 0.692);
      border-radius: 25px;
      transform: scale(1);
    	animation: pulse 2s infinite;
    }
  }
}
</style>
