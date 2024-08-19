import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import router from './shared/router';
import { createPinia } from 'pinia';
import i18n  from "@shared/constants";


const app =  createApp(App);
app.use(i18n as any);
app.use(router);
app.use(createPinia());
app.mount('#app')
