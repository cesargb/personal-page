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

  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: {
        default: 'github-dark',
        // Theme used if `html.dark`
        dark: 'github-dark',
      },
      preload: ['bash', 'ts', 'js', 'css', 'php', 'sql', 'json'],
    }
  },

  nitro: {
    preset: 'node-server',
  }
})
