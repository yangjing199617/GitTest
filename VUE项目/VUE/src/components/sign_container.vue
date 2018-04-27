

<template>
  <div class="sign clearfloat" id="main">
    <div class="sign-top clearfloat">
      <ul>
        <li class="box-s">
          <input type="text" name="" id="" value="" class="mingzi" placeholder="请输入您的用户名" />
        </li>
        <li class="box-s">
          <input type="text" name="" id="" value="" class="mingzi" placeholder="请输入您的密码" />
        </li>
      </ul>
    </div>
    <div class="mima clearfloat box-s">
      <ul>
        <li class="fl">
          <div class="xuan clearfloat fl">
            <div class="radio">
              <label>
                <input type="checkbox" name="sex" value="">
                <div class="option"></div>
                <span class="opt-text">记住密码</span>
              </label>
            </div>
          </div>
        </li>
        <li class="fr wangji">
          <a href="#">忘记密码？</a>
        </li>
      </ul>
    </div>
    <a href="mei-center.html" class="sign-btn">登录</a>
    <div class="bottom clearfloat">
      <div class="shang clearfloat">
        <span class="line"></span>
        <span class="nr">第三方登录</span>
      </div>
      <div class="xia clearfloat">
        <ul>
          <li class="fl">
            <i class="iconfont icon-weixin1"></i>
            <p>微信</p>
          </li>
          <li class="fl">
            <i class="iconfont icon-qq1"></i>
            <p>QQ</p>
          </li>
          <li class="fl">
            <i class="iconfont icon-weibo"></i>
            <p>微博</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /*body{background-color: #fff;}*/
  .sign {
    width: 100%;
    background-color: #fff;
  }

  .sign-top {
    width: 100%;
    background-color: #fff;
  }

  .sign-top ul li {
    width: 100%;
    height: 1.5rem;
    border-bottom: 1px solid #e8e8e8;
    padding: 0 5%;
    float: left;
  }

  .sign-top ul li input.mingzi {
    width: 100%;
    height: 1.4rem;
    line-height: 1.4rem;
    margin: 0;
    padding: 0;
    border-radius: 0;
    border: none;
    font-size: .4rem;
    color: #666;
  }

  .sign .mima {
    height: 1.5rem;
    width: 100%;
    line-height: 1.5rem;
    font-size: .4rem;
    padding: 0 5%;
  }

  label {
    width: 100%;
    display: block;
    position: relative;
    font-weight: normal;
  }

  .sign .radio .option {
    width: .6rem;
    height: .6rem;
    position: absolute;
    top: .45rem;
    left: 0px;
    background: url(../assets/img/que1.png) no-repeat;
    background-size: contain;
  }

  .sign .radio input[type="checkbox"] {
    display: inline-block;
    margin-right: .2rem;
    opacity: 0;
  }

  .sign .radio input[type="checkbox"]:checked+div {
    background: url(../assets/img/que.png) no-repeat;
    background-size: contain;
  }

  .sign .mima .xuan span.opt-text {
    font-size: .4rem;
    color: #666666;
  }

  .sign .mima .wangji a {
    color: #0094de;
  }

  .sign-btn {
    width: 94%;
    display: block;
    margin: .2rem auto;
    height: 1.5rem;
    line-height: 1.5rem;
    background-color: #1dadf4;
    color: #fff;
    text-align: center;
    font-size: .5rem;
    border-radius: 5px;
    -webkit-border-radius: 5px;
  }
  .sign .bottom{
    width: 100%;
    margin-top: .5rem;
  }
  .sign .bottom .shang{
    width: 64%;
    margin: 0 auto;
    position: relative;
    height: 1.5rem;
  }
  .sign .bottom .shang span.line{
    display: block;
    width: 100%;
    border-bottom: 1px solid #d6d6d6;
    position: absolute;
    top: .74rem;
    left: 0;
  }
  .sign .bottom .shang span.nr{
    margin: 0 auto;
    display: block;
    width: 34%;
    text-align: center;
    height: 1.5rem;
    background-color: #fff;
    line-height: 1.5rem;
    position: relative;
    font-size: .4rem;
    color: #bfbfbf;
  }
  .sign .bottom .xia{
    width: 64%;
    margin: 0 auto;
  }
  .sign .bottom .xia ul li{
    width: 33.333%;
    text-align: center;
    font-size: .4rem;
    color: #888888;
  }
  .sign .bottom .xia ul li:nth-child(2){
    margin-top: -.1rem;
  }
  .sign .bottom .xia ul li:nth-child(2) p{
    margin-top: .1rem;
  }

  .sign .bottom .xia ul li i.icon-weixin1{
    color: #aae190;
    font-size: 1.2rem;
  }
  .sign .bottom .xia ul li i.icon-qq1{
    color: #92d8f9;
    font-size: 1.2rem;
  }
  .sign .bottom .xia ul li i.icon-weibo{
    color: #f7a2a2;
    font-size: 1.2rem;
  }

</style>
