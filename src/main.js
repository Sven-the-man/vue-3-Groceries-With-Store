import {createApp} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';

import Home from './pages/Home.vue';
import About from './pages/About.vue';

import App from './App.vue';

const routes = [
    {path: '/', component: Home, name: 'Home', meta: {banner: true}},
    {path: '/about', component: About, name: 'About', meta: {banner: false}},
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes,
});

await new Promise(resolve => setTimeout(resolve, 2000));

const app = createApp(App);
app.use(router);
app.mount('#app');
