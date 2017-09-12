
import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import Vueresourse from 'vue-resource';
import showComponent from './component/show-component.vue';
import params from './component/params-component.vue';


//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);//全局使用Router
Vue.use(Vueresourse);

const First = {template:'<div><p>第一个子页面</p></div>'};

const router = new VueRouter({
      mode:'history',//history 模式下 router-link会拦截点击事件，让浏览器不再重新加载页面
      routes:[
            {
                  path:'/first',
                  component:First
            },
            {
                  path:'/show-component',
                  component:showComponent
            },
            {
                  path:"/params-component/:paramsId/:paramsTitle",
                  component:params
            }
      ]

})

const app = new Vue({
          router : router,
          render : h =>h(App)
}).$mount("#app");