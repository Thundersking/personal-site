import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from '/src/store/index.js'
import { createI18n } from 'vue-i18n'
import { messages } from './lang/locales'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import PrimeVue from 'primevue/config';

const i18n = createI18n({
    locale: store.state.locale ? store.state.locale : 'ru', // set locale
    fallbackLocale: 'us', // set fallback locale
    messages, // set locale messages
})

import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const Theme = () => import('primevue/resources/themes/saga-blue/theme.css');

createApp(App).use(router)
    .use(store)
    .use(Theme)
    .use(router)
    .use(i18n)
    .use(PrimeVue)
    .mount('#app')

