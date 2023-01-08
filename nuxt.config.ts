// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'es',
      },
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Cesar Garcia',
      meta: [
        { name: 'description', content: 'Soy un desarrollador entusiasta, me encanta aprender cosas nuevas y siempre estoy buscando nuevos desafíos' }
      ],
    }
  },
  css: [
    '~/assets/css/main.scss',
  ],
  modules: [
    '@nuxt/content'
  ],
})
