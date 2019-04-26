<template>
  <div>
    <p>sssssss</p>
    <div @click="back">回到首页</div>
  </div>
</template>

<script>
export default {
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
    }
  },
}
</script>
