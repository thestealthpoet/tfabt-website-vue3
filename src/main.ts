import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import '@fontsource/cinzel-decorative/700.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
