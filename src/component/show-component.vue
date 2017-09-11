<template>
    <div id="showComponent">
        谢谢捏
        <ul >
            <li v-for="article in articles">
                {{article.title}}
            </li>
        </ul>
    </div>
</template>
<style>
</style>
<script>

    export default{
        data(){
            return{
                msg:'hello vue',
                articles:[]

            }
        },
        mounted:function(){

           $.ajax({
              url:"https://api.douban.com/v2/movie/top250?count=10",
           }).done(function(data){
           console.log(data);
           })

        }

    }
</script>
