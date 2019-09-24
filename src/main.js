import Vue from 'vue';
import App from './App.vue';
// install vue-resource - npm install vue-resource
import VueResource from 'vue-resource';
// install vuex - npm install vuex --save
import Vuex from 'vuex';
// install vue-router - npm install vue-router
import VueRouter from 'vue-router';

Vue.use(VueResource);
Vue.use(Vuex);
Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App)
})
