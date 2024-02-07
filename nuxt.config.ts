// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  generate: {
    // prerendering 설정
    routes: [
      // prerendering할 라우트 목록
      '/',
      '/page1',
      '/page2',
      // 기타 라우트...
    ],
  },
  
});
