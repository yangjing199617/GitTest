


import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false

import './assets/css/pages.css'
import './assets/css/base.css'
import VueResource from 'vue-resource'
Vue.use(VueResource);

import router from './router'
import store from './store'

new Vue({
  el: '#app',
  render: h=> h(App),
  router,store
})


import axios from 'axios';
// Vue.prototype.$http=axios;

axios.interceptors.request.use(function (config) {
  store.dispatch('show_bHead')
  store.dispatch('show_bFoot')
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  store.dispatch('hide_bHead')
  store.dispatch('hide_bFoot')
  return response;
}, function (error) {
  return Promise.reject(error);
});




