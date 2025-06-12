import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { createPinia } from 'pinia';
import { useAuthStore } from './stores/AuthStore';

const app = createApp(App);

router.beforeEach((to, from) => {
    const authStore = useAuthStore();

    const isAuthenticated = authStore.user.uid ? true : false;

    if (isAuthenticated && to.name === 'login') {
        return { name: 'events' };
    }

    if (!isAuthenticated && to.name !== 'login') {
        return { name: 'login' };
    }
});

const pinia = createPinia();
app.use(router);
app.use(pinia);
app.mount('#app');