<template>
  <div class="headers clearfloat" id="header">
    <div class="header clearfloat box-s">
      <div class="search clearfloat fl box-s">
        <i class="iconfont icon-demo01 fl"></i>
        <input type="text" name="" id="" value="" class="fl" placeholder="搜您想要的" />
      </div>
      <div class="right clearfloat fr">
        <i class="iconfont icon-icon07"></i>
        <p>签到</p>
      </div>
    </div>
  </div>
</template>




<script>
    export default{
      mounted(){
        jQuery(".header-menu").slide({
          titCell: ".top li",
          mainCell: ".content",
          delayTime: 0
        });
      }
    }

</script>


<!--<style scoped>-->

<!--</style>-->
