<template>
  <div>
    <p>sssssss</p>
    <div @click="back">回到首页</div>
  </div>
</template>

<script>
export default {
  created() {
    window.console.log(this.$loc)
  },
  methods: {
    back() {
      this.$loc.open({
        page: 'index',
      });
    }
  },
}
</script>
