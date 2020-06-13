import Vue from 'vue';
import VueRouter from 'vue-router'
import Inbox from './components/Inbox';
import App from './components/App';
import './index.html';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
     { path: '', component: Inbox },
  ],
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});