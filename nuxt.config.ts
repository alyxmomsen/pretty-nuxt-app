// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  css: [
    `~/assets/styles/css/main.css`,
    // '~/assets/syles/scss/main.scss'
  ],
  modules: ["@nuxt/image", "@pinia/nuxt"],
});
