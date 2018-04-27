<template>
    <div class="node">
      <h3>跨域</h3>
      <h3>跨域</h3>
      <h3>跨域</h3>
      <input type="button" value="跨域读node数据" @click="get">
    </div>
</template>

<script>
    export default {
        methods:{
          get(){
            this.$http({
              url:'http://localhost:3000/news',
              params:{start:1,count:2}
            }).then(
              res => console.log(res)
            )
          }
        }
    }
</script>

<style scoped>

</style>
