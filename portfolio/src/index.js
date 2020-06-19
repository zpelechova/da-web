import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import Home from './components/Home.vue';
import Blog from './components/Blog.vue';
import Contact from './components/Contact.vue';
import './index.html';

Vue.use(VueRouter);

const myRouter = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/home', component: Home },
    { path: '/blog', component: Blog },
    { path: '/contact', component: Contact },
  ],
});

new Vue({
  el: '#app',
  router: myRouter,
  render: h => h(App),
});