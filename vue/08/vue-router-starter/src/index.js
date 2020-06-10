import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './components/App';
import Home from './components/Home';
import Menu from './components/Menu';
import Contact from './components/Contact';
import './index.html';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/home', component: Home },
    { path: '/menu', component: Menu },
    { path: '/contact', component: Contact },
  ],
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});