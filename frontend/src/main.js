import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import wb from "./registerServiceWorker";

const app = createApp(App);
app.provide('$workbox', wb);
app.mount("#app");


