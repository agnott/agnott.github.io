import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Home from './components/Home.vue';

Vue.use(VueRouter);

// Configure routes
const routes = [
  { path: '/', component: Home }
];

// Configure router
const router = new VueRouter({
  routes
});

// Configure app entrypoint
const app = new Vue({
  el: '#app',
  render: h => h(App),
  router
});
