<template>
  <header>
    <nav>
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
      <div v-if="tab && tab !== 'all'">
        <div class="nav-categories">
          <div
            v-for="(pr, i) in productTypes"
            :key="i"
            class="nav-category-wrapper"
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
  </header>
</template>

<script lang="ts" setup>
import data from "~/db.json";
const route = useRoute();
const router = useRouter();
const categories = data.categories;
const productTypesData = data["product-types"];

const tab = computed(() => categories.find(el => el.slug === route.query.tab)?.slug || "all")
const productTypes = computed(() => {
  return productTypesData.filter(el => el.category === tab.value);
})
const handleClickTab = (val: string) => {
  router.push(`/products?tab=${val}`);
  window.scrollTo(0,0);
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  min-height: 68px;
  width: 100vw;
  z-index: 100;
  background-color: white;
}
nav {
  & > div:not(:first-child) {
    border-bottom: 1px solid #DDDDDD;
  }
  .nav-top {
    max-width: 1440px;
    margin: auto;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      height: 32px;
      cursor: pointer;
    }
    .navbar-right {
      font-weight: 600;
      font-size: $text-sm;
      color: black;
      cursor: pointer;
      text-decoration: none;
      font-family: 'Sarabun', sans-serif;;
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
    }
    .nav-bot-right {
      display: flex;
      gap: 16px;
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
  .nav-categories {
    display: flex;
    justify-content: space-around;
    padding: 16px;
    flex-shrink: 0;
    background-color: #f7f7f7;
    max-width: 1440px;
    margin: auto;
    .nav-category-wrapper {
      display: flex;
      gap: 8px;
      .ncw-img {
        height: 60px;
      }
      .ncw-content {
        .ncw-title {
          font-weight: 600;
          font-size: $text-sm;
        }
        .ncw-short-desc {
          font-size: $text-xs;
        }
      }
    }
  }
}
</style>
