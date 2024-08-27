import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import router from './shared/router';
import { createPinia } from 'pinia';
import i18n  from "@shared/constants";
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import { page } from "@shared/ui"

import Button from "primevue/button"
const app =  createApp(App);
app.use(i18n as any);
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.component("page",page)
app.component("Button",Button)
app.use(createPinia());
app.mount('#app')
