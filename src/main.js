import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap-icons/font/bootstrap-icons.css'

import router from './router'

createApp(App).use(router).mount('#app')
