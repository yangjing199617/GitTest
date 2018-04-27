<template>
  <div id="register">
    <head_register></head_register>
    <container_register></container_register>
  </div>
</template>

<script>
  import head_register from './head_register';
  import container_register from './container_register'

  export default {
    components:{
      head_register,container_register
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


    data(){
      return{
        phone:"",
        user:"",
        pwd:""
      }
    },
    methods:{
      reg(){
        console.log(44444)

        this.$http({
          url: "http://localhost:3000/reg",
          params: {"user": this.user, "pwd": this.pwd,"phone":this.phone}
        }).then(
//          res => console.log(res)
          res =>{
          console.log(res)
        if(res.data.error==0 && res.data.msg=='成功'){
          console.log(22222)
          this.$router.push("/reg")
        }else{
          this.$router.push("/login")

        }
      }
      )
      }
    }
  }
</script>

<style scoped>
  body{background-color: #fff;}
</style>
