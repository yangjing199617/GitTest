<template>
  <div id="app">
    <headbar v-show="bHead"></headbar>
    <!--<transition enter-active-class="animated fadeIn">-->
      <router-view></router-view>
    <!--</transition>-->
    <footbar v-show="bFoot"></footbar>
  </div>
</template>

<script>

  import {mapGetters} from 'vuex'

  import 'animate.css'

  import headbar from './components/headbar'
  // import container from './components/container'
  import footbar from './components/footbar'

export default {
  name: 'App',
  components: {
    headbar,footbar
  },

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
  },

  computed:mapGetters([
    'bHead','bFoot'
  ]),

  watch:{
    $route:function (newValue,oldValue) {
      let path=newValue.path;
      if(/container|container_price|container_tender|container_service/.test(path)){
        this.$store.dispatch('show_bHead');
        this.$store.dispatch('show_bFoot');
      }
      if(/tender_detail|new_detail|error/.test(path)){
        this.$store.dispatch('hide_bHead');
        this.$store.dispatch('hide_bFoot');
      }
      if(/sign|register/.test(path)){
        this.$store.dispatch('hide_bHead');
        this.$store.dispatch('show_bFoot');
      }
    }
  },
  // created () {
  //    this.$router.push('/components/container'); // 页面加载时跳转
  // }
}
</script>

