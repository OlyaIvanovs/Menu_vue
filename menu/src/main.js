import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
    
});

new Vue({
  el: '#app',
  render: h => h(App)
})
