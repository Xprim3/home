import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';
import 'flag-icons/css/flag-icons.min.css';
import { createPinia } from 'pinia';
import router from './router';

const app = createApp(App);
app.use(createPinia());
app.use(PrimeVue);
app.use(router);
app.mount('#app');
