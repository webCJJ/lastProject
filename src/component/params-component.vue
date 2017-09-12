<template>
    <div>
        <p>新闻 ID:{{$route.params.paramsId}}</p>
        <p>新闻 title:{{$route.params.paramsTitle}}</p>
    </div>
</template>
<style>

</style>
<script>
    export default{

        data(){
            return{
                msg:'params page'
            }
        }
    }
</script>
