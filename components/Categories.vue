<template>
  <section class="categories-section">
    <div class="title">Categories</div>
    <div class="categories-wrapper">
      <div v-for="(category, i) in categories" :key="i" class="category-content">
        <div class="category-img">
        </div>
        <div class="category-title">{{ category.title }}</div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const categories = [
  { title: "Best Seller", tag: "best-seller" },
  { title: "Electronic", tag: "electronic" },
  { title: "Travel", tag: "travel" },
  { title: "Computer", tag: "computer" },
  { title: "Clothes", tag: "clothes" },
  { title: "Office Supplies", tag: "supplies" },
  { title: "Drinkware", tag: "drinkware" },
  { title: "Home Decoration", tag: "home-decoration" },
  { title: "Bags", tag: "bags" },
  { title: "Gardening", tag: "gardening"}
]
</script>

<style lang="scss" scoped>
.categories-section {
  max-width: 1140px;
  margin: auto;
  margin-bottom: 16px;
  .title {
    font-weight: 600;
    font-size: 1.25rem;
    margin-bottom: 16px;
  }
  .categories-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    .category-content {
      flex: 1 1 17.5%;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      .category-img {
        width: 60px;
        height: 60px;
        background-color: gray;
      }
      .category-title {
        font-weight: 600;
      }
    }
  }
}
</style>
