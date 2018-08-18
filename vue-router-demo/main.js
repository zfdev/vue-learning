// import './style.css';
// document.getElementById('app').innerHTML = 'Hello webpack.';
//Import vue framework
import Vue from 'vue';
//Import vue router
import VueRouter from 'vue-router';
//Import vue component
import App from './app.vue';
//Import vuex
import Vuex from 'vuex';
//Import bus plugin
import VueBus from './plugin/vue-bus'
//Import ajax plugin
import VueAjax from './plugin/vue-ajax';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueBus);
Vue.use(VueAjax);

const Routers = [
    {
        path: '/index',
        meta:{
            title: 'Index'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/about',
        meta:{
            title: 'About me'
        },
        component: (resolve) => require(['./views/about.vue'], resolve)
    },
    {
        path: '/user/:id',
        meta:{
            title: 'User Information'
        },
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

router.beforeEach(function(to, from, next){
    window.document.title = to.meta.title;
    next();
})

router.afterEach(function(to, from, next){
    window.scrollTo(0, 0);
})

const store = new Vuex.Store({
    state: {
        count: 0,
        list: [1,5,8,10,30,50]
    },
    getters:{
        filteredList: state => {
            return state.list.filter( item => item < 10);
        },
        listCount: (state, getters) => {
            return getters.filteredList.length;
        }

    },
    mutations:{
        increment(state, n = 1){
            state.count += n;
        },
        decrease(state){
            state.count--;
        },
        typeAttribute(state, params){
            state.count += params.count
        }
    },
    actions: {
        increment(context){
            context.commit('increment');
        },
        asyncIncrement(context){
            return new Promise(resolve => {
                setTimeout(()=>{
                    context.commit('increment');
                    resolve();
                }, 1000)
            })
        }
    }
});

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: c => c(App)
});
