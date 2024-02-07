// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },


  
  router: {
    base: '/nuxt3-github-page/'
  },
  generate: {
    dir: 'dist/nuxt3-github-page'
  }

  
});
