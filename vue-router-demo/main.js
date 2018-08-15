// import './style.css';
// document.getElementById('app').innerHTML = 'Hello webpack.';
//Import vue framework
import Vue from 'vue';
//Import vue router
import VueRouter from 'vue-router';
//Import vue component
import App from './app.vue';

Vue.use(VueRouter);

const Routers = [
    {
        path: '/index',
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/about',
        component: (resolve) => require(['./views/about.vue'], resolve)
    },
    {
        path: '/user/:id',
        component: (resolve) => require(['./views/user.vue'], resolve)
    },
    {
        path: '*',
        redirect: '/index'
    }
];

const RouterConfig = {
    mode: 'history',
    routes: Routers
}

const router = new VueRouter(RouterConfig);

new Vue({
    el: '#app',
    router: router,
    render: c => c(App)
});
