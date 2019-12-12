<template>
  <div class="shijing">
    <div class="box" v-for="(item, index) in data" :key="index" @click="select(item)">
      <div class="left">
        <p class="title">{{ (index + 1) + "." + item.title }}</p>
        <div>
          <span>{{ item.chapter }} </span>
          <span>{{ item.section }}</span>
        </div>
      </div>
      <div class="right">
        <img src="@/assets/shijing.jpg">
        <span class="mask-title">{{ item.title }}</span>
      </div>
    </div>
    <div class="more" @click="more">查看更多</div>
  </div>
</template>

<script>
import shijing from "@/assets/shijing.json"

export default {
  data() {
    return {
      listData: shijing,
      page: 0,
      count: 10,
      data: []
    }
  },
  mounted() {
    this.more()
    // let temp = this.listData.slice(this.page, (this.page + 1) * this.count)
    // this.data = temp
    window.console.log(shijing)
  },
  methods: {
    more() {
      if ((this.page + 1) * this.count >= this.listData.length) {
        return
      }
      let temp = this.listData.slice(0, (this.page + 1) * this.count)
      this.data = temp
      this.page++
    },
    select(item) {
      this.$router.push(`/shijing/article?title=${item.title}&chapter=${item.chapter}`)
    }
  }
}
</script>

<style scoped>
.shijing {
  position: relative;
  max-width: 720px;
  margin: 0 auto;
  background-color: #ffffff;
}
.box {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 5px 10px;
  border-bottom: 1px solid #eeeeee;
  cursor: pointer;
}
.left {
  flex: 1;
}
.title {
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 5px;
}
.right {
  position: relative;
  width: 80px;
  height: 80px;
}
.right img {
  width: 100%;
}
.mask-title {
  position: absolute;
  top: 10px;
  left: 40px;
  font-size: 16px;
}
.more {
  height: 40px;
  line-height: 40px;
  cursor: pointer;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: left 3s;
}
.slide-fade-enter {
  left: 0%;
}
.slide-fade-enter-to {
  left: 100%;
}
.slide-fade-leave {
  left: 100%;
}
.slide-fade-leave-to {
  left: 0;
}
</style>
