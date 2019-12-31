<template>
  <div class="content" :style="{height: height + 'px'}">
    <div class="title">{{ title }}</div>
    <div v-for="(item, index) in content" :key="index">
      <p>{{ item }}</p>
    </div>
  </div>
</template>

<script>
import shijing from "@/assets/shijing.json"

export default {
  data() {
    return {
      title: '',
      chapter: '',
      content: [],
      listData: shijing,
      height: 0,
    }
  },
  mounted () {
    window.console.log(this.$route)
    this.title = this.$route.query.title
    this.chapter = this.$route.query.chapter
    let temp = this.listData.filter(item => (item.title === this.$route.query.title && item.chapter === this.$route.query.chapter))
    this.content = temp[0].content
    this.height = document.documentElement.offsetHeight
  },
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title {
  margin-bottom: 20px;
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
