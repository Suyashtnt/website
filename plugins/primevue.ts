import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Card from 'primevue/card'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true })
  nuxtApp.vueApp.component('btn', Button)
  nuxtApp.vueApp.component('card', Card)
})
