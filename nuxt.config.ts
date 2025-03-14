// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { dir: 'rtl', lang: 'fa' },
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover',

    },

  },


  runtimeConfig: {
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: 'https://cms.idehpardazan.co/cms/api/',

    }
  },

  components: {
    global: true,
    dirs: ['~/components']
  },

  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.min.css',
    '~/assets/scss/Styles.scss',
    'aos/dist/aos.css'
  ],

  build: {
     transpile: ['vuetify', 'gsap'],
    
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  plugins: [
    { src: '~/plugins/aos.js', mode: 'client' },
    { src: '~/plugins/gsap.js', mode: 'client' }
  ],
  compatibilityDate: '2024-09-25',
})
