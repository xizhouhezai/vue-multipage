<template>
  <div class="content">
    <div>{{ title }}</div>
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
      content: [],
      listData: shijing,
    }
  },
  mounted () {
    window.console.log(this.$route)
    this.title = this.$route.query.title
    let temp = this.listData.filter(item => (item.title === this.$route.query.title && item.chapter === this.$route.query.chapter))
    this.content = temp[0].content
  },
}
</script>
