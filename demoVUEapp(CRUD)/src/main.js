import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter);
Vue.use(VueResource);


const router=new VueRouter({
routes: routes,
mode : "history" //remove #
});
new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
