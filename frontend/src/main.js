import { createApp } from 'vue'
import App from './App.vue'
import wb from "./registerServiceWorker";

createApp.prototype.$workbox = wb;

createApp(App).mount('#app')
