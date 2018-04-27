<template>
  <div class="nheader clearfloat box-s" id="header">
    <a href="javascript:history.go(-1)" class="fl">
      <i class="iconfont icon-fanhui"></i>
    </a>
    <p class="fl">
      行业要闻
    </p>
    <a href="#" class="fr">
      <i class="iconfont icon-fenxiang"></i>
    </a>
  </div>
</template>

<script>
    export default {
        name: "head_new_detail"
    }
</script>

<style scoped>

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
    display: block;
    width: 6%;
  }

  .nheader a i {
    color: #fff;
    font-size: .7rem;
  }

  .nheader a i.icon-fenxiang {
    font-size: .5rem;
  }

  .nheader p {
    width: 88%;
    text-align: center;
    color: #fff;
    font-size: .5rem;
    line-height: 1.5rem;
  }
</style>
