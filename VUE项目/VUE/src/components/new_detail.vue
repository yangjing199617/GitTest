<template>
  <div id="sign">
    <head_new_detail></head_new_detail>
    <container_new_detail ></container_new_detail>
    <footer_new_detail></footer_new_detail>
  </div>
</template>

<script>
  import head_new_detail from './head_new_detail';
  import container_new_detail from './container_new_detail'
  import footer_new_detail from "./footer_new_detail";

  export default {
    components:{
      head_new_detail,
      container_new_detail,
      footer_new_detail
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
    },

    // data(){
    //   return {
    //     container_new_detail:[]
    //   };
    // },
    //
    // created(){
    //   this.$http({
    //     url:"/satic/data/"
    //   })
    // }
  }
</script>

<style scoped>

</style>
