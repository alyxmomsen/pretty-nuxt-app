// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  css: [
    `~/assets/styles/css/main.css`,
    `~/assets/styles/css/specific.css`, 
    `~/assets/styles/css/grid.css`, 
    `~/assets/styles/css/main-menu.css`, 
    // '~/assets/syles/scss/main.scss'
  ],
  modules: ["@nuxt/image", "@pinia/nuxt", "@nuxt/ui"],
  runtimeConfig:{
    isProduction:process.env.PRODUCTION_MODE ,
    public: {
      isProduction:process.env.PRODUCTION_MODE
    }
  } , 
  // appConfig:{} ,
});