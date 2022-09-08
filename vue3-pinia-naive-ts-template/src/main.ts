import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { naive } from './utils/demand-import'
import router from './router/index'

const app = createApp(App as any)
app.use(router)
app.use(naive)
app.use(createPinia())
app.mount('#app')


