// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Ev-test"
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" }
  },
  modules: [
    "@pinia/nuxt"
  ],
  css: ["~/assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@use '~/assets/scss/_color.scss' as *;"
        }
      }
    }
  },
  pinia: {
    storesDirs: ["./stores/**"]
  },
  imports: {
    dirs: ["composables"]
  }
})
