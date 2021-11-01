import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  buildModules: ['nuxt-windicss'],
  css: [
    'primevue/resources/themes/arya-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css'
  ],
  meta: {
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {
        name: 'description',
        content:
          'Welcome To TNT MAN INC. The place where the most random stuff is mashed together into this monstrocity of a website'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
    ]
  }
})
