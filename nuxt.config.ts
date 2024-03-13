// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxt/image", "nuxt-icon"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Ev-test"
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" }
  },
  css: ["~/assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use '~/assets/scss/_color.scss' as *;
            @use '~/assets/fonts/_fonts.scss' as *;
          `
        }
      }
    }
  },
  pinia: {
    storesDirs: ["./stores/**"]
  },
  imports: {
    dirs: ["composables"]
  },
  runtimeConfig: {
    BASE_URL: "http://localhost:3000"
  }
})