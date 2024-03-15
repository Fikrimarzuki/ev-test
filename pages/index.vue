<template>
  <div>
    <section class="home-section-frst">
      <div class="hsf-desc">
        <h1 class="hsf-title">Galaxy S24 Series</h1>
        <p>
          Get epic cashback up to Rp3 Mio*<br/>and up to Rp3.7 Mio* off when<br/> buy 2 or more Galaxy products
        </p>
      </div>
      <video
        class="video-player"
        src="https://images.samsung.com/is/content/samsung/assets/id/homepage/main-homepage/2024/id-web-HOME_S24_Series_Main-KV_1440x640_pc.mp4"
        autoplay
      />
    </section>
    <section class="home-section-scnd">
      <div class="hss-header">
        <h2>Promo Terbaru</h2>
        <h3>Dapatkan info promo terbaru disini</h3>
      </div>
      <div class="hss-card-wrapper">
        <div class="hss-card">
          <NuxtLink to="/products/a5a55f90-f023-4db8-8673-5877975z1z21">
            <div class="hss-card-header">
              <h2>Galaxy A35 | A55 5G</h2>
              <div>Get awesome deals worth up to Rp1.5 Mio</div>
              <div class="detail-btn anima-show">Lihat Detail</div>
            </div>
            <NuxtImg
              class="hss-card-img-a35"
              src="https://images.samsung.com/is/image/samsung/assets/id/offer/2024/3/a35-a55/COMBO_A35A55_BMT_684x684.jpg?$684_684_JPG$"
            />
          </NuxtLink>
        </div>
        <div class="hss-card">
          <NuxtLink to="/products/42d89674-d02d-4f6a-9e4d-3f69e4c3e446">
            <NuxtImg
              class="hss-card-img"
              src="https://images.samsung.com/is/image/samsung/assets/id/offer/2024/1/eureka/S24-merch-tile.png?$160_160_PNG$"
            />
            <div class="hss-card-body">
              <span>Galaxy S24 Ultra</span>
              <span>Online exclusive</span>
            </div>
          </NuxtLink>
        </div>
        <div class="hss-card">
          <NuxtLink to="/products/446841b1-28e9-4bd7-8c2b-4ed375c3a029">
            <NuxtImg
              class="hss-card-img"
              src="https://images.samsung.com/is/image/samsung/assets/id/2401/home/HOME_Q5_Merchandising_160x160_pc.png?$160_160_PNG$"
            />
            <div class="hss-card-body">
              <span>Galaxy Z Fold5</span>
              <span>Diskon hingga Rp3.5 Juta & Gratis SC + 2 Tahun</span>
            </div>
          </NuxtLink>
        </div>
        <div class="hss-card">
          <NuxtLink to="/products/b949bc1c-34bb-4bfd-8941-0738b469efcb">
            <NuxtImg
              class="hss-card-img-fit"
              src="https://images.samsung.com/is/image/samsung/assets/id/offer/2024/2/fit3/KV_Fit3_SMT_330x330_rev.png?$330_330_PNG$"
            />
            <div class="hss-card-footer">
              <span>Galaxy Fit 3</span>
              <span>Your health and fitness at a glance</span>
            </div>
          </NuxtLink>
        </div>
        <div class="hss-card">
          <NuxtLink to="/products/a5a55f90-f023-4db8-8673-58779756b4de">
            <NuxtImg
              class="hss-card-img"
              src="https://images.samsung.com/is/image/samsung/assets/id/offer/2024/3/home/galaxy-a05s-light-violet.png?$160_160_PNG$"
            />
            <div class="hss-card-body">
              <span>Galaxy A05s Light Violet</span>
              <span>Gratis Travel Adapter 25W</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
    <section class="home-section-thrd">
      <h1>Cari produk Samsung lainnya?</h1>
      <div class="search-wrapper">
        <Icon name="material-symbols:search-rounded" class="search-icon" @click="handleSearch" />
        <input type="text" placeholder="Search Keyword" v-model="keyword" @keyup.enter="handleSearch" />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
const keyword = ref("");
const handleSearch = () => {
  if (!keyword.value) return;
  router.push(`/products?keyword=${keyword.value}`)
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/_animation.scss";
section {
  max-width: 1440px;
  margin: auto;
  position: relative;
}
.home-section-frst {
  .hsf-desc {
    position: absolute;
    left: 88px;
    top: 25%;
    .hsf-title {
      font-size: 32px;
    }
    p {
      line-height: 1.33;
      word-wrap: break-word;
    }
  }
  .video-player {
    width: 100%;
    height: 100%;
  }
}
.home-section-scnd {
  padding: 16px;
  .hss-header {
    text-align: center;
    padding-bottom: 16px;
    h2 {
      font-size: 32px;
    }
    h3 {
      font-size: 16px;
    }
  }
  .hss-card-wrapper {
    display: grid;
    grid-template-columns: 600px 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 16px;
    row-gap: 24px;
    .hss-card {
      position: relative;
      border-radius: 10px;
      overflow: hidden;
      background-color: #f4f4f4;
      &:first-child {
        grid-row: 1 / span 2;
      }
      a {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-decoration: none;
        color: black;
        .hss-card-header {
          position: absolute;
          text-align: center;
          top: 5%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .detail-btn {
          margin-top: 16px;
          padding: 8px 16px;
          border-radius: 25px;
          background-color: black;
          color: white;
          width: fit-content;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
        }
        .hss-card-img-a35 {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .hss-card-img-fit {
          max-width: 100%;
          max-height: 290px;
          object-fit: contain;
        }
        .hss-card-img {
          height: 142px;
          width: 142px;
          padding-bottom: 16px;
        }
        .hss-card-body {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 16px;
          span {
            text-align: center;
            &:first-child {
              font-weight: 600;
              padding-bottom: 8px;
            }
          }
        }
        .hss-card-footer {
          position: absolute;
          text-align: center;
          bottom: 42px;
          display: flex;
          flex-direction: column;
          span:first-child {
            font-weight: 600;
            padding-bottom: 8px;
          }
        }
        p {
          font-size: $text-sm;
        }
      }
      &:hover {
        a {
          .detail-btn {
            opacity: 1;
          }
        }
      }
    }
  }
}
.home-section-thrd {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 0 120px;
  h1 {
    font-size: 32px;
  }
  .search-wrapper {
    position: relative;
    .search-icon {
      position: absolute;
      height: 24px;
      width: 24px;
      top: 14px;
      left: 16px;
    }
    input {
      border-radius: 25px;
      padding: 8px 16px 8px 42px;
      width: 320px;
      height: 28px;
    }
  }
}
</style>
