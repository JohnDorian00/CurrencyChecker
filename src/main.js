import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import fx from 'money'

window.fx = fx

createApp(App).mount('#app')
