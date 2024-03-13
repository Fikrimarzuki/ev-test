<template>
  <header>
    <nav>
      <NuxtLink to="/"><NuxtImg src="/logo.png" class="logo" /></NuxtLink>
      <NuxtLink to="/products" class="navbar-right">Products</NuxtLink>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  height: 78px;
  width: 100vw;
  z-index: 100;
  background-color: white;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1140px;
    margin: auto;
    padding: 16px 0;
    .logo {
      height: 42px;
      cursor: pointer;
    }
    .navbar-right {
      font-weight: 600;
      font-size: 0.825rem;
      color: $gray;
      cursor: pointer;
      font-family: 'Sarabun', sans-serif;;
    }
  }
}
</style>
