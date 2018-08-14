// import './style.css';
// document.getElementById('app').innerHTML = 'Hello webpack.';
//Import vue framework
import Vue from 'vue';
//Import vue component
import App from './app.vue';

new Vue({
    el: '#app',
    render: c => c(App)
});
