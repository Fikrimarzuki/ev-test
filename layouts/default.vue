<template>
  <main>
    <Navbar />
    <div class="page-wrapper">
      <NuxtPage />
    </div>
    <Footer />
    <Toast />
  </main>
</template>

<script lang="ts" setup>
import data from "~/db.json";
const route = useRoute();
const categories = data.categories;
const paddingTop = computed(() => {
  if (route.path.includes("product")) {
    if (
      route.params.id ||
      categories.find(el => el.slug === route.query.tab)?.slug
    ) {
      return "196px"
    }
    return "101px"
  } 
  return "68px"
})
</script>

<style lang="scss" scoped>
main {
  position: relative;
  font-family: Sarabun, arial, sans-serif;
  .page-wrapper {
    padding-top: v-bind(paddingTop);
  }
}
</style>