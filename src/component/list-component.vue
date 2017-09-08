<template>
    <div id='listComponent'>
       <ul v-for="(item,index) in items">
             <li>{{item.someWhere}}</li>
       </ul>
    </div>
</template>
<style>

</style>
<script>
    export default{
        data(){
            return{
               items:[
               {msg:"中国",someWhere:"上海"},
               {msg:"中国",someWhere:"北京"},
               {msg:"中国",someWhere:"哈尔滨"}
               ]
            }
        },

    }
</script>
