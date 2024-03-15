<template>
  <section class="product-search-section">
    <div class="product-search-wrapper">
      <div class="psw-left-wrapper">
        <div class="search-wrapper">
          <Icon name="material-symbols:search-rounded" class="search-icon" @click="handleSearch" />
          <input type="text" placeholder="Search product" v-model="keyword" @keyup.enter="handleSearch" />
        </div>
        <div
          class="accordion-wrapper"
          v-for="(accordion, i) in accordionMenu"
          :key="i" 
        >
          <div class="accordion-title" @click="accordion.isShow = !accordion.isShow">
            <span>{{ accordion.title }}</span>
            <Icon name="material-symbols:keyboard-arrow-up-rounded" class="icon-up" />
          </div>
          <div v-if="accordion.isShow" class="accordion-submenu-wrapper">
            <label
              class="accordion-submenu"
              v-for="(subAccordion, j) in accordion.submenu"
              :key="`sb-${j}`"
              :for="`sub-${j}`"
              @click="handleClickAccordion(accordion.value, subAccordion.value)"
            >
              <input :id="`sub-${j}`" type="radio" name="acc-submenu" :checked="route.query.storage && (+route.query.storage === +subAccordion.value) || false" />
              <span>{{ subAccordion.title }}</span>
            </label>
          </div>
        </div>
      </div>
      <div class="psw-right-loading-wrapper" v-if="isLoading">
        <div v-for="(_, i) in [1,2,3]" :key="i" class="psw-loading-content"></div>
      </div>
      <div class="psw-right-not-found" v-else-if="!products.length">
        Maaf, hasil tidak ditemukan
      </div>
      <div class="psw-right-wrapper" v-else>
        <div v-for="(pr, i) in products" :key="i" class="psw-content-wrapper">
          <div class="psw-content">
            <div class="psw-img-wrapper">
              <NuxtImg :src="pr.variations[0].images[0]" class="psw-img" />
            </div>
            <div class="psw-desc">
              <h3>{{ pr.title }}</h3>
              <ul>
                <li v-for="(desc, j) in pr.description.split('\n')" :key="`list-${j}`">
                  {{ desc }}
                </li>
              </ul>
            </div>
          </div>
          <div class="psw-detail-btn-wrapper">
            <button class="psw-detail-btn" @click="router.push(`/products/${pr.id}`)">Lihat Detail</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useProductStore } from "~/stores/products.store";
import type { IProductFilter } from "~/types/product.interface";
defineProps({
  isLoading: { type: Boolean, default: false }
})
const route = useRoute();
const router = useRouter();
const notification = useNotif()
const store = useProductStore();
const keyword = ref("");
const products = computed(() => store.getProducts);
const accordionMenu = ref([
  {
    title: "Kapasitas Penyimpanan",
    value: "storage",
    isShow: true,
    submenu: [
      { title: "32GB", value: 32 },
      { title: "64GB", value: 64 },
      { title: "128GB", value: 128 },
      { title: "256GB", value: 256 },
      { title: "512GB", value: 512 },
      { title: "1TB", value: 1000 }
    ]
  }
])
const handleSearch = () => {
  if (!keyword.value) return;
  router.push(`/products?keyword=${keyword.value}`)
}
const handleClickAccordion = (q: string, v: string | number) => {
  const filter = { ...route.query } as { [key:string]: string | number }
  filter[q] = v;
  let newQuery = "?";
  for (const key in filter) {
    newQuery += `${key}=${filter[key]}&`
  }
  newQuery = newQuery.slice(0, newQuery.length - 1)
  router.push(`/products${newQuery}`)
}

// async function handleFetchProduct() {
//   if (isLoading.value) return
//   try {
//     isLoading.value = true
//     let filter: IProductFilter = {}
//     if (route.query) {
//       if (route.query.keyword) filter.keyword = route.query.keyword as string;
//       if (route.query.type) filter.product_type = route.query.type as string;
//       if (route.query.tab) filter.category = route.query.tab as string; 
//       if (route.query.storage) filter.storage = route.query.storage as string;     
//     }
//     const { error } = await store.fetchProducts(filter)    
//     if (error) {
//       const { error: errorApi } = await store.fetchProductsApi(filter);
//       if (errorApi) throw errorApi
//     }
//   } catch(error) {
//     notification({
//       message: "failed to fetch products",
//       type: "failed",
//       time: 5000
//     })
//   } finally {
//     isLoading.value = false
//   }
// }
// watch(() => route.query, () => handleFetchProduct())

// handleFetchProduct()
onMounted(() => keyword.value = route.query.keyword as string || "")
</script>

<style lang="scss" scoped>
@use "~/assets/scss/_animation.scss";
.product-search-section {
  max-width: 1440px;
  margin: auto;
  .product-search-wrapper {
    display: grid;
    grid-template-columns: 1fr 3fr;
    height: 100%;
    min-height: calc(100vh - 280px);
    .psw-left-wrapper {
      padding: 24px 16px;
      position: relative;
      .search-wrapper {
        position: relative;
        width: 100%;
        margin-bottom: 16px;
        .search-icon {
          position: absolute;
          height: 24px;
          width: 24px;
          top: 9px;
          left: 12px;
        }
        input {
          border-radius: 25px;
          padding: 8px 16px 8px 42px;
          height: 20px;
          width: -webkit-fill-available;;
          border: 0.5px solid #bbb;
        }
      }
      .accordion-wrapper {
        font-size: $text-sm;
        .accordion-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 600;
          cursor: pointer;
          .icon-up {
            height: 24px;
            width: 24px;
          }
        }
        .accordion-submenu-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          .accordion-submenu {
            display: flex;
            align-items: center;
            padding: 4px 2px;
            cursor: pointer;
            &:first-child {
              margin-top: 8px;
            }
            &:hover {
              background-color: #F7F7F7;
            }
            input {
              height: 16px;
              width: 16px;
            }
            span {
              padding-left: 4px;
            }
          }
        }
      }
    }
    .psw-right-loading-wrapper {
      background-color: #F7F7F7;
      padding: 24px;
      .psw-loading-content {
        height: 172px;
        background-color: rgb(201, 201, 201);
        margin-bottom: 32px;
        border-radius: 15px;
        width: 100%;
        animation: pulse 1s infinite;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    .psw-right-not-found {
      background-color: #F7F7F7;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      color: #8F8F8F;
      font-size: $text-xl;
    }
    .psw-right-wrapper {
      background-color: #F7F7F7;
      padding: 24px;
      .psw-content-wrapper {
        display: flex;
        justify-content: space-between;
        min-height: 172px;
        background-color: white;
        border-radius: 15px;
        margin-bottom: 16px;
        &:last-child {
          margin-bottom: 0;
        }
        .psw-content {
          display: flex;
          .psw-img-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            .psw-img {
              max-height: 172px;
            }
          }
          .psw-desc {
            padding-top: 16px;
            ul {
              margin: 0;
              padding: 0;
              padding-left: 16px;
              padding-bottom: 16px;
              li {
                font-size: clamp(12px, 1.5vw, $text-sm);
              }
            }
          }
        }
        .psw-detail-btn-wrapper {
          padding: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          .psw-detail-btn {
            border: none;
            outline: none;
            border-radius: 25px;
            padding: 8px 16px;
            background-color: black;
            color: white;
            cursor: pointer;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .product-search-section {
    .product-search-wrapper {
      grid-template-columns: 1fr;
      .psw-right-wrapper {
        .psw-content-wrapper {
          flex-direction: column;
          .psw-content {
            flex-direction: column;
            align-items: center;
          }
        }
      }
    }
  }
}
</style>