import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueMatomo from 'vue-matomo'

const app = createApp(App)

app.use(router)

app.use(VueMatomo, {
    host: 'https://analytics.unstaticlabs.com',
    siteId: 1,
    cookieDomain: "*.fuckthevcs.com",
    domains: ["*.fuckthevcs.com"],
    router
})

app.mount('#app')
