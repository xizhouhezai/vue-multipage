<template>
  <div>
    <p>这里是登录页面</p>
    <Button type="primary" @click="login">登录</Button>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue'

export default {
  mounted() {
    this.$http.get('article')
  },
  methods: {
    login() {
      this.$loc.open({
        page: 'article',
        path: '/article',
      });
    },
    async auth() {
      let res = await this.$http.get('auth', {
        name: 'zhangsan'
      })
      window.console.log(res)
      this.$storage.setItem('user', {
        token: res.data.token
      })
      this.$router.push('/')
    }
  },
  components: {
    Button
  }
}
</script>
