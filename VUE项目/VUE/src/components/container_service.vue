

<template>
  <div class="seaver clearfloat" id="main">
    <div class="top clearfloat box-s">
      <select name="" class="fl box-s">
        <option value="">亳州</option>
      </select>
      <p class="fl">
        不同地区的服务商提供的金融服务不同
      </p>
    </div>
    <div class="bottom clearfloat">
      <div class="list clearfloat box-s">
        <a href="#">
          <div class="left clearfloat fl">
            <p class="tit over2">
              黑龙江省哈尔滨市五常市五味走动不快
            </p>
            <p class="nr over">
              太子参，作为2009年前后的“风云任务快步是点击付款时间
            </p>
          </div>
          <div class="right clearfloat fr">
            <img src="../assets/upload/3.jpg"/>
            <span></span>
          </div>
        </a>
      </div>
      <div class="list clearfloat box-s">
        <a href="#">
          <div class="left clearfloat fl">
            <p class="tit over2">
              黑龙江省哈尔滨市五常市五味走动不快
            </p>
            <p class="nr over">
              太子参，作为2009年前后的“风云任务快步是点击付款时间
            </p>
          </div>
          <div class="right clearfloat fr">
            <img src="../assets/upload/3.jpg"/>
            <span></span>
          </div>
        </a>
      </div>
      <div class="list clearfloat box-s">
        <a href="#">
          <div class="left clearfloat fl">
            <p class="tit over2">
              黑龙江省哈尔滨市五常市五味走动不快
            </p>
            <p class="nr over">
              太子参，作为2009年前后的“风云任务快步是点击付款时间
            </p>
          </div>
          <div class="right clearfloat fr">
            <img src="../assets/upload/3.jpg"/>
            <span></span>
          </div>
        </a>
      </div>
      <div class="list clearfloat box-s">
        <a href="#">
          <div class="left clearfloat fl">
            <p class="tit over2">
              黑龙江省哈尔滨市五常市五味走动不快
            </p>
            <p class="nr over">
              太子参，作为2009年前后的“风云任务快步是点击付款时间
            </p>
          </div>
          <div class="right clearfloat fr">
            <img src="../assets/upload/3.jpg"/>
            <span></span>
          </div>
        </a>
      </div>
      <div class="list clearfloat box-s">
        <a href="#">
          <div class="left clearfloat fl">
            <p class="tit over2">
              黑龙江省哈尔滨市五常市五味走动不快
            </p>
            <p class="nr over">
              太子参，作为2009年前后的“风云任务快步是点击付款时间
            </p>
          </div>
          <div class="right clearfloat fr">
            <img src="../assets/upload/3.jpg"/>
            <span></span>
          </div>
        </a>
      </div>
      <div class="list clearfloat box-s">
        <a href="#">
          <div class="left clearfloat fl">
            <p class="tit over2">
              黑龙江省哈尔滨市五常市五味走动不快
            </p>
            <p class="nr over">
              太子参，作为2009年前后的“风云任务快步是点击付款时间
            </p>
          </div>
          <div class="right clearfloat fr">
            <img src="../assets/upload/3.jpg"/>
            <span></span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .seaver {
    width: 100%;
  }

  .seaver .top {
    width: 100%;
    height: 1.5rem;
    background-color: #fff;
    padding: 0 5%;
  }

  .seaver .top p {
    font-size: .4rem;
    color: #999999;
    line-height: 1.5rem;
    margin-left: .3rem;
  }

  .seaver .top select {
    padding: 0;
    margin-bottom: 0;
    border-radius: 50px;
    height: .8rem;
    width: 24%;
    margin-top: .35rem;
    padding-left: 4%;
    background: url(../assets/img/xiala.png) 85% no-repeat;
    background-size: 15%;
    border: 1px solid #0094de;
    color: #0094de;
    font-size: .45rem;
  }

  .seaver .bottom {
    width: 100%;
    margin-top: .2rem;
    background-color: #fff;
    margin-bottom: .2rem;
  }

  .seaver .bottom .list {
    width: 100%;
    padding: 3% 5%;
    border-bottom: 1px solid #e8e8e8;
  }

  .seaver .bottom .list .left {
    width: 64%;
  }

  .seaver .bottom .list .left .tit {
    width: 100%;
    font-size: .48rem;
    color: #333333;
    font-weight: bold;
    line-height: .7rem;
  }

  .seaver .bottom .list .left .nr {
    width: 100%;
    color: #999999;
    font-size: .4rem;
    margin-top: .3rem;
  }

  .seaver .bottom .list .right {
    width: 33.5%;
    height: 2rem;
    text-align: center;
    font-size: 0;
  }

  .seaver .bottom .list .right span {
    display: inline-block;
    height: 100%;
    line-height: 0;
    vertical-align: middle;
  }

  .seaver .bottom .list .right img {
    max-height: 2rem;
    max-width: 100%;
  }

</style>

<script>
  export default {
    mounted(){
      $(function(){
        //计算内容上下padding
        reContPadding({main:"#main",header:"#header",footer:"#footer"});
        function reContPadding(o){
          var main = o.main || "#main",
            header = o.header || null,
            footer = o.footer || null;
          var cont_pt = $(header).outerHeight(true),
            cont_pb = $(footer).outerHeight(true);
          $(main).css({paddingTop:cont_pt,paddingBottom:cont_pb});
        }
      });


      !(function (doc, win) {
        var el = doc.documentElement;
        //resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
        function setSize() {
          var w = el.clientWidth;
          if (!w) return;
          w=w>480?480:w;
          w=w<320?320:w;
          el.style.fontSize = (100 * (w / 1080)).toFixed(3) + 'px';
        }
        if (!doc.addEventListener) return;
        setSize();
        win.addEventListener('resize', setSize, false);
        win.addEventListener('pageshow', function(e) {
          if (e.persisted) {
            setSize();
          }
        }, false);
      })(document, window);


      jQuery(".header-menu").slide({
        titCell: ".top li",
        mainCell: ".content",
        delayTime: 0
      });
    }
  }
</script>
