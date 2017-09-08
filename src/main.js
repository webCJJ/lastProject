import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Vueresourse from 'vue-resource';

//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);//全局使用Router
Vue.use(Vueresourse);


new Vue({
      el: '#app',
      render: h => h(App)
})
