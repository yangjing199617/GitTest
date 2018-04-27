<template>
  <div class="register clearfloat" id="main">
    <div class="reg-top clearfloat box-s">
      <div class="top clearfix">
        <samp class="line db"></samp>
        <samp class="curline db"></samp>
        <ul>
          <li class="fl">
            <div class="shu cur clearfix box-s">
								<span class="cur">
									1
								</span>
            </div>
            <p class="cur">注册账号</p>
          </li>
          <li class="fl">
            <div class="shu cur clearfix box-s">
								<span class="cur">
									2
								</span>
            </div>
            <p class="cur">信息填写</p>
          </li>
          <li class="fl">
            <div class="shu clearfix box-s">
								<span>
									3
								</span>
            </div>
            <p>用户登录</p>
          </li>
        </ul>
      </div>
    </div>
    <span class="huibg"></span>
    <div class="sign-top clearfloat">
      <ul>
        <li class="box-s">
          <input type="text" name="" id="" value="" class="mingzi" placeholder="请输入注册的手机号" />
        </li>
        <li class="box-s">
          <input type="text" name="" id="" value="" class="mingzi yzm fl" placeholder="输入验证码" />
          <input type="submit" name="" id="" value="获取验证码" class="huoqu fr" />
        </li>
      </ul>
    </div>
    <a href="infor.html" class="sign-btn sign-btntwo">下一步</a>
  </div>
</template>

<script>
    export default {
        name: "container_register"
    }
</script>

<style scoped>
  .register{
    width: 100%;
  }
  .reg-top{
    width: 100%;
    height: 2rem;
    background-color: #fff;
    padding: 3% 8%;
  }
  .reg-top .top {
    width: 100%;
    position: relative;
  }

  .reg-top .top samp.line {
    width: 100%;
    height: 2px;
    background-color: #dbdbdb;
    position: absolute;
    left: 0;
    top: .35rem;
    z-index: 8;
  }

  .reg-top .top samp.curline {
    width: 25%;
    height: 2px;
    background-color: #21acf2;
    position: absolute;
    left: 0;
    top: .35rem;
    z-index: 9;
  }

  .reg-top .top ul li {
    width: 33.333%;
    text-align: center;
    position: absolute;
    z-index: 10;
  }

  .reg-top .top ul li div.shu {
    width: .8rem;
    height: .8rem;
    background-color: #f1f1f1;
    padding: .1rem;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    margin: 0 auto;
  }

  .reg-top .top ul li span {
    display: inline-block;
    width: .6rem;
    height: .6rem;
    text-align: center;
    line-height: .6rem;
    color: #fff;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    background-color: #c5c5c5;
  }

  .reg-top .top ul li p {
    font-size: .3rem;
    color: #cfcfcf;
    margin-top: 5px;
  }

  .reg-top .top ul li:first-child {
    position: absolute;
    left: -15%;
    z-index: 10;
    top: 0;
  }

  .reg-top .top ul li div.cur {
    background-color: #e5f6fe;
  }

  .reg-top .top ul li span.cur {
    background-color: #21acf2;
  }

  .reg-top .top ul li p.cur {
    color: #21acf2;
  }

  .reg-top .top ul li:last-child {
    position: absolute;
    right: -12.5%;
    top: 0;
    z-index: 10;
  }

  .reg-top .top ul li:nth-child(2) {
    left: 35%;
  }

  .reg-top .top ul li:nth-child(3) {
    left: 80%;
  }
  .sign-top ul li input.yzm{
    width: 50%;
  }
  .sign-top ul li input.huoqu{
    width: 50%;
    text-align: right;
    line-height: 1.5rem;
    border: none;
    background: none;
    font-size: .4rem;
    color: #333333;
  }
  .sign-btntwo{
    margin: 1rem auto;
  }
</style>
