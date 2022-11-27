// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Cesar Garcia',
      meta: [
        { name: 'description', content: 'I´m a enthusiastic developer, I love to learn new things and I´m always looking for new challenges.' }
      ],
    }
  },
  css: [
    '~/assets/css/main.scss',
  ]
})
