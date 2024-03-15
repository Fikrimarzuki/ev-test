<template>
  <footer>
    <div class="footer-section">
      <div class="footer-grid-one">
        <NuxtImg src="/logo-secondary.png" class="logo-img" />
        <div class="title">Ev Test</div>
        <div class="icon-wrapper">
          <Icon name="lucide:instagram" />
          <Icon name="simple-icons:facebook" />
          <Icon name="simple-icons:linkedin" />
          <Icon name="simple-icons:youtube" />
          <Icon name="simple-icons:whatsapp" />
        </div>
      </div>
      <div class="footer-grid-content">
        <div class="title">About Us</div>
        <div>Contact</div>
        <div>Promo</div>
        <div>News & Article</div>
        <div>Career</div>
        <div>Privacy Policy</div>
        <div>Terms & Agreement</div>
      </div>
      <div class="footer-grid-content">
        <div class="title">Other Information</div>
        <div>FAQ</div>
        <div>Site Map</div>
      </div>
      <div class="footer-grid-content">
        <div class="title">Download</div>
        <div>
          <NuxtImg src="/google-play.png" loading="lazy" />
        </div>
        <div>
          <NuxtImg src="/app-store.png" loading="lazy" />
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: $primary;
  color: #DDDDDD;
  padding: 80px 0;
  position: relative;
  z-index: 1;
  .footer-section {
    max-width: 1140px;
    margin: auto;
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
    .footer-grid-one {
      display: flex;
      flex-direction: column;
      row-gap: 8px;
      .logo-img {
        height: 38px;
        width: fit-content;
        margin-bottom: 8px;
      }
      .title {
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 28px;
      }
      .icon-wrapper {
        display: flex;
        align-items: center;
        gap: 8px;
        svg {
          width: 24px;
          height: 24px;
        }
      }
    }
    .footer-grid-content,
    .footer-grid-content,
    .footer-grid-content {
      display: flex;
      flex-direction: column;
      row-gap: 16px;
      font-size: 0.875rem;
      .title {
        color: $secondary;
        font-weight: 700;
        font-size: 1.125rem;
        margin-bottom: 8px;
      }
      img {
        width: 146px;
      }
    }
  }
}
</style>
