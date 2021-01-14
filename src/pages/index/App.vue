<template>
  <div id="app">
    <router-view></router-view>
    <div class="footer">
      <a href="http://www.beian.gov.cn" target="_blank">皖ICP备18026327</a>
      <span>Copyright 2019 by xizhouhezai</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    // this.init()
  },
  methods: {
    async init() {
      let user = await this.$storage.getItem('user')
      window.console.log(user)
      if (!user) {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style>
#app {
  padding-bottom: 80px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.footer {
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  background-color: #ffffff;
}
.footer span {
  margin-left: 20px;
}
</style>
