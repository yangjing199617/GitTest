


<template>
  <div class="header-menu clearfloat" id="main" >
    <div class="top topthree">
      <ul class="tab-nav">
        <li>
          招标采购
        </li>
        <li>
          中标公告
        </li>
      </ul>
    </div>
    <div class="content clearfloat">
      <div class="three box-s">
        <div class="shang clearfloat box-s">
          <ul>
            <li class="over">招标方</li>
            <li>品种名称</li>
            <li>产地要求</li>
            <li>剩余天数</li>
            <li>操作</li>
          </ul>
        </div>
        <div class="list clearfloat box-s" v-for="item in container_tender" :key="item.id">
          <ul>
            <li class="over">{{item.id}}.{{item.one}}</li>
            <li>{{item.two}}</li>
            <li>{{item.three}}</li>
            <li>{{item.four}}</li>
            <router-link tag="li" to="/tender_detail+item.id">
              <a href="javascript:;">{{item.a}}</a>
            </router-link>
          </ul>
        </div>

        <div class="list clearfloat box-s">
          <ul>
            <li class="over">安徽珍宝岛责任有限公司</li>
            <li>白芍</li>
            <li>亳州</li>
            <li>28</li>
            <router-link tag="li" to="/tender_detail">
              <a href="javascript:;">查看详情</a>
            </router-link>
          </ul>
      </div>
        <div class="list clearfloat box-s">
          <ul>
            <li class="over">安徽珍宝岛责任有限公司</li>
            <li>白芍</li>
            <li>亳州</li>
            <li>28</li>
            <router-link tag="li" to="/tender_detail">
              <a href="javascript:;">查看详情</a>
            </router-link>
          </ul>
        </div>
        <div class="list clearfloat box-s">
          <ul>
            <li class="over">安徽珍宝岛责任有限公司</li>
            <li>白芍</li>
            <li>亳州</li>
            <li>28</li>
            <router-link tag="li" to="/tender_detail">
              <a href="javascript:;">查看详情</a>
            </router-link>
          </ul>
        </div>
        <div class="list clearfloat box-s">
          <ul>
            <li class="over">安徽珍宝岛责任有限公司</li>
            <li>白芍</li>
            <li>亳州</li>
            <li>28</li>
            <router-link tag="li" to="/tender_detail">
              <a href="javascript:;">查看详情</a>
            </router-link>
          </ul>
        </div>
        <div class="list clearfloat box-s">
          <ul>
            <li class="over">安徽珍宝岛责任有限公司</li>
            <li>白芍</li>
            <li>亳州</li>
            <li>28</li>
            <router-link tag="li" to="/tender_detail">
              <a href="javascript:;">查看详情</a>
            </router-link>
          </ul>
        </div>
        <div class="list clearfloat box-s">
          <ul>
            <li class="over">安徽珍宝岛责任有限公司</li>
            <li>白芍</li>
            <li>亳州</li>
            <li>28</li>
            <router-link tag="li" to="/tender_detail">
              <a href="javascript:;">查看详情</a>
            </router-link>
          </ul>
        </div>
        <div class="list clearfloat box-s">
          <ul>
            <li class="over">安徽珍宝岛责任有限公司</li>
            <li>白芍</li>
            <li>亳州</li>
            <li>28</li>
            <router-link tag="li" to="/tender_detail">
              <a href="javascript:;">查看详情</a>
            </router-link>
          </ul>
        </div>
        <div class="list clearfloat box-s">
          <ul>
            <li class="over">安徽珍宝岛责任有限公司</li>
            <li>白芍</li>
            <li>亳州</li>
            <li>28</li>
            <router-link tag="li" to="/tender_detail">
              <a href="javascript:;">查看详情</a>
            </router-link>
          </ul>
        </div>
        <div class="list clearfloat box-s">
          <ul>
            <li class="over">安徽珍宝岛责任有限公司</li>
            <li>白芍</li>
            <li>亳州</li>
            <li>28</li>
            <router-link tag="li" to="/tender_detail">
              <a href="javascript:;">查看详情</a>
            </router-link>
          </ul>
        </div>
        <div class="list clearfloat box-s">
          <ul>
            <li class="over">安徽珍宝岛责任有限公司</li>
            <li>白芍</li>
            <li>亳州</li>
            <li>28</li>
            <router-link tag="li" to="/tender_detail">
              <a href="javascript:;">查看详情</a>
            </router-link>
          </ul>
        </div>
        <div class="list clearfloat box-s">
          <ul>
            <li class="over">安徽珍宝岛责任有限公司</li>
            <li>白芍</li>
            <li>亳州</li>
            <li>28</li>
            <router-link tag="li" to="/tender_detail">
              <a href="javascript:;">查看详情</a>
            </router-link>
          </ul>
        </div>
        <div class="list clearfloat box-s">
          <ul>
            <li class="over">安徽珍宝岛责任有限公司</li>
            <li>白芍</li>
            <li>亳州</li>
            <li>28</li>
            <router-link tag="li" to="/tender_detail">
              <a href="javascript:;">查看详情</a>
            </router-link>
          </ul>
        </div>
      </div>

      <div class="bid celarfloat box-s">
        <div class="bid-list clearfloat fl">
          <a href="bid-detail.html">
            <p class="bid-tit over">
              上海上药华宇药业有限公司-2016年度中药材...
            </p>
            <p class="nr">
              期待你创造有一个商业帝国，梦想还是要有的，万一实现了呢！！！
            </p>
            <span class="time">
								2016-11-07 09:35
							</span>
          </a>
        </div>
        <div class="bid-list clearfloat fl">
          <a href="bid-detail.html">
            <p class="bid-tit over">
              上海上药华宇药业有限公司-2016年度中药材...
            </p>
            <p class="nr">
              期待你创造有一个商业帝国，梦想还是要有的，万一实现了呢！！！
            </p>
            <span class="time">
								2016-11-07 09:35
							</span>
          </a>
        </div>
        <div class="bid-list clearfloat fl">
          <a href="bid-detail.html">
            <p class="bid-tit over">
              上海上药华宇药业有限公司-2016年度中药材...
            </p>
            <p class="nr">
              期待你创造有一个商业帝国，梦想还是要有的，万一实现了呢！！！
            </p>
            <span class="time">
								2016-11-07 09:35
							</span>
          </a>
        </div>
        <div class="bid-list clearfloat fl">
          <a href="bid-detail.html">
            <p class="bid-tit over">
              上海上药华宇药业有限公司-2016年度中药材...
            </p>
            <p class="nr">
              期待你创造有一个商业帝国，梦想还是要有的，万一实现了呢！！！
            </p>
            <span class="time">
								2016-11-07 09:35
							</span>
          </a>
        </div>
        <div class="bid-list clearfloat fl">
          <a href="bid-detail.html">
            <p class="bid-tit over">
              上海上药华宇药业有限公司-2016年度中药材...
            </p>
            <p class="nr">
              期待你创造有一个商业帝国，梦想还是要有的，万一实现了呢！！！
            </p>
            <span class="time">
								2016-11-07 09:35
							</span>
          </a>
        </div>
        <div class="bid-list clearfloat fl">
          <a href="bid-detail.html">
            <p class="bid-tit over">
              上海上药华宇药业有限公司-2016年度中药材...
            </p>
            <p class="nr">
              期待你创造有一个商业帝国，梦想还是要有的，万一实现了呢！！！
            </p>
            <span class="time">
								2016-11-07 09:35
							</span>
          </a>
        </div>
        <div class="bid-list clearfloat fl">
          <a href="bid-detail.html">
            <p class="bid-tit over">
              上海上药华宇药业有限公司-2016年度中药材...
            </p>
            <p class="nr">
              期待你创造有一个商业帝国，梦想还是要有的，万一实现了呢！！！
            </p>
            <span class="time">
								2016-11-07 09:35
							</span>
          </a>
        </div>
        <div class="bid-list clearfloat fl">
          <a href="bid-detail.html">
            <p class="bid-tit over">
              上海上药华宇药业有限公司-2016年度中药材...
            </p>
            <p class="nr">
              期待你创造有一个商业帝国，梦想还是要有的，万一实现了呢！！！
            </p>
            <span class="time">
								2016-11-07 09:35
							</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
  .header-menu .content .three {
    width: 100%;
    background-color: #fff;
    padding: 2% 2% 0 2%;
  }

  .header-menu .content .three .shang {
    width: 100%;
    height: 1.5rem;
    line-height: 1.5rem;
    background-color: #eff9fe;
    padding-left: 3%;
  }

  .header-menu .content .three .shang ul li {
    float: left;
    font-size: .4rem;
    color: #929292;
    width: 19%;
    text-align: center;
  }

  .header-menu .content .three .shang ul li:first-child {
    width: 24%;
    text-align: left;
  }

  .header-menu .content .three .list {
    width: 100%;
    height: 1.5rem;
    line-height: 1.5rem;
    border-bottom: 1px solid #e8e8e8;
    padding-left: 3%;
  }

  .header-menu .content .three .list ul li {
    float: left;
    width: 19%;
    text-align: center;
    font-size: .4rem;
    color: #333333;
  }

  .header-menu .content .three .list ul li:first-child {
    width: 24%;
    text-align: left;
  }

  .header-menu .content .three .list:last-child {
    border-bottom: none;
  }

  .header-menu .content .three .list ul li a {
    display: block;
    width: 100%;
    height: .8rem;
    line-height: .85rem;
    background-color: #01aaef;
    color: #fff;
    margin-top: .35rem;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    font-size: .4rem;
  }

</style>

<script>


  import axiox from 'axios'
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

      // this.getGoodList();
    },

    data(){
      return {
        container_tender:[]
      };
    },

    created(){
      this.$http({
        url:"/static/data/data"
      }).then(
        res => this.container_tender=res.data
      )
    },

    // created:function () {
    //   this.getlist()
    // },

    // methods:{
    //   getlist:function () {
    //     this.$http({
    //       url:"../../static/data/data"
    //     }).then(function (response) {
    //       if(response.body.status!=0)
    //       {
    //         alert(response.body.message);
    //         return ;
    //       }
    //       //处理正常的逻辑数据处理
    //       this.data=response.body.message;
    //
    //     });
    //   }
    // }

    // methods:{
    //   getGoodsList(){
    //     axios.get("/data").then((result)=>{
    //       var res = result.data;
    //       this.data = res.result;
    //     })
    //   }
    // }

    // props:['data']
  }
</script>



