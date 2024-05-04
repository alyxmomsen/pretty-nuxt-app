// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [`~/assets/styles/css/main.css`],
});


// export default defineNuxtConfig({
//   devtools: { enabled: true },
//   css: [`~/assets/styles/css/main.css`],
//   build: {
//     rollupOptions: {
//       external: ['axios']
//     }
//   } ,
// });
