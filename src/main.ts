import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/reset.scss'

import App from './App.vue'
import router from '@/router/index'

const app = createApp(App)

app.use(createPinia())

createApp(App).use(router).mount('#app')
