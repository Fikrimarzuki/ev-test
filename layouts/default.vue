<template>
  <main>
    <Navbar />
    <div class="page-wrapper">
      <NuxtPage />
    </div>
    <Footer />
  </main>
</template>

<style lang="scss" scoped>
main {
  position: relative;
  .page-wrapper {
    padding-top: 78px;
    font-family: "Sarabun", "Sans-serif";
  }
}
</style>