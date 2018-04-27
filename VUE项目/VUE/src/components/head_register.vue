<template>
  <div class="nheader nheadertwo clearfloat box-s" id="header">
    <a href="javascript:history.go(-1)" class="fl">
      <i class="iconfont icon-fanhui"></i>
    </a>
    <router-link tag="p" to="/register" active-class="fl">注册</router-link>
    <!--<p class="fl">-->
      <!--注册-->
    <!--</p>-->
    <router-link tag="a" to="/sign" active-class="fr">登录</router-link>
    <!--<a href="sign.html" class="fr">-->
      <!--登录-->
    <!--</a>-->
  </div>
</template>

<script>
    export default {
        name: "head_register"
    }
</script>

<style scoped>
  /*body{background-color: #fff;}*/
  .nheader {
    width: 100%;
    height: 1.5rem;
    background-color: #0094de;
    line-height: 1.5rem;
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 3%;
    z-index: 999;
  }

  .nheader a {
    display: inline;
    width: 5%;
  }

  .nheader a i {
    color: #fff;
    font-size: .7rem;
  }

  .nheader a i.icon-fenxiang {
    font-size: .5rem;
  }

  .nheader p {
    width: 86%;
    text-align: center;
    color: #fff;
    font-size: .5rem;
    line-height: 1.5rem;
  }
  .fl{float:left;display:inline;}
  .fr{float:right;display:inline;}
  .clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0}
  .clearfloat{zoom:1}
  .clear{clear:both;zoom:1;}
  .dis_inBlock{display:inline-block;*display:inline;*zoom:1;}
  .dis_block{ display:block;}

  .box-s{
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
</style>
