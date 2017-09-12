<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{msg}}</h1>
    <listComponent></listComponent>
    <detailComponent></detailComponent>
    <router-link to="/first">first跳转</router-link>
    <router-link to="/show-component">show 跳转</router-link>
      <router-link to="/params-component/34/1994的春天">params</router-link>
    <router-view class="view"></router-view>
  </div>
</template>



<script>
import listComponent from './component/list-component.vue'
import detailComponent from './component/detail-component.vue'
import showComponent from './component/show-component.vue'
import params from './component/params-component.vue'

export default {
  name: 'app',
  data(){
    return {
      msg: 'hello Vue'
    }
  },
    components:{listComponent,detailComponent,showComponent,params}
}
</script>
<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
