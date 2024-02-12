import {createApp}    from 'vue';
import {
    createRouter,
    createWebHashHistory,
}                     from 'vue-router';
import App            from './App.vue';
import Home           from './components/Home.vue';
import ListingProject from './components/ListingProject.vue';
import ListingUser    from './components/ListingUser.vue';
import './style.css';

const routes = [
    {
        path     : '/',
        component: Home,
    },
    {
        path     : '/projects',
        component: ListingProject,
    },
    {
        path     : '/users',
        component: ListingUser,
    },
];

const router = createRouter({
                                history: createWebHashHistory(),
                                routes,
                            });

const app = createApp(App);

app.use(router);

app.mount('#app');
