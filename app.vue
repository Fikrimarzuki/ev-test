<template>
  <NuxtLayout />
</template>

<script setup lang="ts">
// definePageMeta({
//   pageTransition: {
//     name: 'slide-right',
//     mode: 'out-in'
//   },
//   middleware (to, from) {
//     if (to.meta.pageTransition && typeof to.meta.pageTransition !== 'boolean')
//       to.meta.pageTransition.name = +to.params.id > +from.params.id ? 'slide-left' : 'slide-right'
//   }
// })
</script>

<!-- <style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
</style> -->
