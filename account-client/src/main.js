import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import { createAuthStore } from '../src/store/auth';
import './validators'
import './index.css';

const authStore = createAuthStore({
    onAuthRoute: '/',
    requireAuthRoute: '/authenticate',
});

createApp(App).use(authStore).use(router).mount('#app');
