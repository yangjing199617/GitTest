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
        name: "head_tender_detail"
    }
</script>

<style scoped>
  .tender {
    width: 100%;
  }

  .tender .tentop {
    width: 100%;
    margin-top: .5rem;
  }

  .tender .tentop ul li {
    width: 50%;
    float: left;
    text-align: left;
    font-size: .4rem;
    color: #181818;
    line-height: .9rem;
  }

  .tender .tenbottom {
    width: 100%;
    background-color: #eff9fe;
    padding: 5% 0;
    margin-top: .3rem;
  }

  .tender .tenbottom ul li {
    float: left;
    width: 25%;
    text-align: center;
    border-right: 1px solid #e2e3e4;
  }

  .tender .tenbottom ul li:last-child {
    border-right: none;
  }

  .tender .tenbottom ul li p {
    color: #181818;
    font-size: .5rem;
    margin-bottom: .1rem;
  }

  .tender .tenbottom ul li span {
    font-size: .36rem;
    color: #999999;
  }

</style>
