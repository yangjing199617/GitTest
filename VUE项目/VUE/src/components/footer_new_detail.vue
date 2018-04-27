<template>
  <div class="new-footer clearfloat box-s" id="footer">
    <ul>
      <li>
        <i class="iconfont icon-zan1"></i>
        <span>13</span>
      </li>
      <li>
        <i class="iconfont icon-chaping"></i>
        <span>13</span>
      </li>
      <li>
        <a href="review.html">
          <i class="iconfont icon-pinglun"></i>
          <span>13</span>
        </a>
      </li>
      <li>
        <i class="iconfont icon-shoucang"></i>
        <span>13</span>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "footer_new_detail"
    }
</script>

<style scoped>
  .new-footer {
    width: 100%;
    height: 1.5rem;
    background-color: #fff;
    border-top: 1px solid #e2e2e2;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    padding: .4rem 0;
  }

  .new-footer ul li {
    width: 25%;
    text-align: center;
    height: .8rem;
    line-height: .8rem;
    float: left;
    border-right: 1px solid #e2e2e2;
    font-size: .36rem;
    color: #929292;
  }

  .new-footer ul li a {
    color: #929292;
  }

  .new-footer ul li:last-child {
    border-right: none;
  }

  .new-footer ul li i {
    color: #999999;
    font-size: .5rem;
  }

  .new-footer ul li i.icon-zan1,
  .new-footer ul li i.icon-chaping {
    font-size: .6rem;
  }


</style>
