<template>
  <div style="width: 100%">
    <section ref="qudao" class="qudao" style="width: 100%">
      <div class="subtitle">
        <h2>连接230万家庭</h2>
        <p>您的设备接入零壹平台后，可直接上线零壹各大渠道和商城</p>
      </div>
      <div class="content">
        <div class="earth-wrap">
          <div v-show="qudaoShow" ref="earth" class="earth animated bounceInDown delay-1"></div>
          <div v-show="qudaoShow" class="left-con animated fadeInLeft delay-1">
            <h4>海外渠道</h4>
            <p class="dec">零壹正在大力发展海外渠道，产品套装即将登陆亚马逊、Shopee等海外电商平台，同时布设大量线下经销商，远销美国、欧洲、东南亚等地。</p>
          </div>
          <div v-show="qudaoShow" class="right-con animated fadeInRight delay-1">
            <h4>国内渠道</h4>
            <p class="dec">零壹小区物业系统已实际部署超7000个小区，线上商城覆盖超230万个家庭，线下体验店遍布各大城市。超300个城市和行业合伙人负责大型项目落地，统一从零壹渠道采购设备。</p>
          </div>
        </div>
      </div>
    </section>
    <section ref="time" class="time">
      <div ref="time1" :class="timeAnimated1 ? 'animated rollIn' : ''"><img src="@/assets/images/home/time1.png"></div>
      <div ref="time2" :class="timeAnimated2 ? 'animated rollIn' : ''"><img src="@/assets/images/home/time2.png"></div>
      <div ref="time3" :class="timeAnimated3 ? 'animated rollIn' : ''"><img src="@/assets/images/home/time3.png"></div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      close: true,
      qudaoShow: false,
      deviceShow: false,
      sceneShow: false,
      oemShow: false,
      productShow: false,
      timeShow: false,
      dixianShow: false,
      loading: false,
      timeAnimated1: false,
      timeAnimated2: false,
      timeAnimated3: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, false)
  },
  destroyed() {
    // 页面销毁时注销全局监听事件
    window.removeEventListener('scroll', this.handleScroll, false);
  },
  methods: {
    back() {
      this.$loc.open({
        page: 'index',
        path: '/home',
        params: {
          page: 1,
          id: 54
        }
      });
    },
    handleScroll () { // 实现当滚动到指定位置，触发动画
      let scrollTop =  window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 获取窗口滚动条高度
      // this.gdjz('earth', 'earth animated bounceInDown', 50)
      window.console.log('scrollTop-------------', this.$refs.time1.scrollTop)
      if (scrollTop > this.$refs.time1.offsetTop) {
        this.timeAnimated1 = true;
      }
      if (scrollTop > this.$refs.time2.offsetTop) {
        this.timeAnimated2 = true;
      }
      if (scrollTop > this.$refs.time3.offsetTop) {
        this.timeAnimated3 = true;
      }
    },
    gdjz (div, offset, callback) {
      let dom = this.$refs[div] // 等同于document.querySelector('.earth') true
      if(dom){
        var a,b,c,d;
        d = dom.offsetTop // 元素距离相对父级的高度，这里父级指的是body
        a = eval(d + offset)
        b = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop //  获取窗口滚动条高度
        c = document.documentElement.clientHeight || document.body.clientHeight // 获取浏览器可视区的高度
        if( b + c > a ) {
          callback && callback()
        }
      }
    },
  },
}
</script>

<style lang="css">
.time {
  width: 100%;
}
.time img {
  width: 100%;
}
</style>
