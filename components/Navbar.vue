<template>
  <header>
    <nav v-if="!isBurgerNav" class="navbar">
      <div>
        <div class="nav-top">
          <NuxtLink to="/"><NuxtImg src="/logo.png" class="logo" /></NuxtLink>
          <NuxtLink to="/products" class="navbar-right">Products</NuxtLink>
        </div>
      </div>
      <div v-if="route.path.includes('product')">
        <div class="nav-bottom">
          <div class="nav-bot-left">Mobile</div>
          <div class="nav-bot-right">
            <div
              v-for="(cat, i) in categories"
              :key="i"
              :class="{ active: cat.slug === tab }"
              @click="handleClickTab(cat.slug)"
            >
              {{ cat.title }}
            </div>
            <div @click="handleClickTab('all')" :class="{ active: 'all' === tab }">
              All
            </div>
          </div>
        </div>
      </div>
      <div v-if="tab && tab !== 'all'" class="nav-categories-wrapper">
        <div class="nav-categories">
          <div
            v-for="(pr, i) in productTypes"
            :key="i"
            class="nav-category-wrapper"
            @click="handleClickProductType(pr)"
          >
            <NuxtImg :src="pr.image" class="ncw-img" />
            <div class="ncw-content">
              <div class="ncw-title">{{ pr.title }}</div>
              <div class="ncw-short-desc">{{ pr.short_desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nav v-else class="nav-hamburger">
      <NuxtLink to="/"><NuxtImg src="/logo.png" class="logo" /></NuxtLink>
      <div v-if="!route.path.includes('product')" class="nav-product">
        <NuxtLink to="/products" class="navbar-right">Products</NuxtLink>
      </div>
      <div v-else>
        <div @click="toggleNavBurger"><Icon name="gravity-ui:bars" class="icon-menu" /></div>
        <div class="nav-burger-backdrop" v-if="isBurgerShow">
          <div class="nav-burger-wrapper">
            <div class="icon-wrapper">
              <Icon name="gravity-ui:circle-xmark" />
            </div>
            <div
              v-for="(pr, i) in productTypesData"
              :key="i"
              class="nav-accordion-wrapper"
              @click="handleClickProductType(pr)"
            >
              <div>{{ pr.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import type { IProductType } from "~/types/product.interface";
import { useProductStore } from "~/stores/products.store";
import data from "~/db.json";
const route = useRoute();
const router = useRouter();
const store = useProductStore();
const categories = data.categories;
const productTypesData = data["product-types"];
const isBurgerNav = ref(false);
const isBurgerShow = ref(false);

const product = computed(() => store.getProduct);
const tab = computed(() => {
  if (product.value.id) {
    return product.value.category
  }
  return categories.find(el => el.slug === route.query.tab)?.slug || ""
})
const productTypes = computed(() => {
  return productTypesData.filter(el => el.category === tab.value);
})
const handleClickTab = (val: string) => {
  router.push(`/products?tab=${val}`);
  window.scrollTo(0,0);
}
const toggleNavBurger = () => {
  isBurgerShow.value = !isBurgerShow.value
}
const handleClickProductType = (val: IProductType) => {
  isBurgerShow.value = false;
  router.push(`/products?tab=${val.category}&type=${val.slug}`);
  window.scrollTo(0,0);
}
const handleResize = () => {
  if (window.innerWidth <= 768) {
    isBurgerNav.value = true;
    isBurgerShow.value = false;
  } else {
    isBurgerNav.value = false;
  }
}
onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize();
})
onUnmounted(() => window.removeEventListener("resize", handleResize));
</script>

<style lang="scss" scoped>
@use "~/assets/scss/_animation.scss";
header {
  position: fixed;
  top: 0;
  min-height: 68px;
  width: 100vw;
  z-index: 100;
  background-color: white;
}
.navbar {
  & > div:not(:first-child) {
    border-bottom: 1px solid #DDDDDD;
  }
  .nav-top {
    max-width: 1440px;
    margin: auto;
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 36px;
    .logo {
      height: 32px;
      cursor: pointer;
      padding-left: 32px;
    }
    .navbar-right {
      font-weight: 600;
      font-size: $text-sm;
      color: black;
      cursor: pointer;
      text-decoration: none;
      padding-right: 32px;
    }
  }
  .nav-bottom {
    padding: 0 16px;
    display: flex;
    background-color: white;
    justify-content: space-between;
    max-width: 1440px;
    margin: auto;
    .nav-bot-left {
      font-weight: 600;
      padding-left: 16px;
    }
    .nav-bot-right {
      display: flex;
      gap: 16px;
      padding-right: 16px;
      & > div {
        padding: 0 4px 16px;
        cursor: pointer;
        user-select: none;
        font-size: $text-sm;
        &.active {
          border-bottom: 2px solid $primary;
          color: $primary;
          font-weight: 600;
        }
      }
    }
  }
  .nav-categories-wrapper {
    background-color: #f7f7f7;
    padding: 0 16px;
    .nav-categories {
      display: flex;
      justify-content: space-around;
      padding: 16px 0;
      flex-shrink: 0;
      max-width: 1440px;
      margin: auto;
      gap:8px;
      .nav-category-wrapper {
        display: flex;
        gap: 8px;
        cursor: pointer;
        flex: 1 1 0;
        justify-content: center;
        .ncw-img {
          height: 60px;
        }
        .ncw-content {
          .ncw-title {
            font-weight: 600;
            font-size: $text-sm;
          }
          .ncw-short-desc {
            padding: 8px 16px 0 0;
            font-size: $text-xs;
          }
        }
      }
    }
  }
}
.nav-hamburger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  position: relative;
  .logo {
    height: 32px;
    cursor: pointer;
  }
  .icon-menu {
    height: 24px;
    width: 24px;
  }
  .nav-product {
    a {
      font-weight: 600;
      font-size: $text-sm;
      color: black;
      cursor: pointer;
      text-decoration: none;
    }
  }
  .nav-burger-backdrop {
    position: fixed;
    background-color: #000000ef;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    .nav-burger-wrapper {
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: fit-content;
      background-color: white;
      z-index: 30;
      padding: 8px 16px;
      animation: slide-right-left 0.5s ease-in-out forwards;
      .icon-wrapper {
        text-align: right;
        margin-bottom: 16px;
      }
      .nav-accordion-wrapper {
        padding: 8px;
      }
    }
  }
}
</style>
