<template>
  <div>
    <p>这里是登录页面</p>
    <Button type="primary" @click="login">登录</Button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.auth()
    },
    async auth() {
      let res = await this.$http.post('auth', {
        name: 'zhangsan'
      })
      window.console.log(res)
      this.$storage.setItem('user', {
        token: res.data.token
      })
      this.$router.push('/home')
    }
  }
}
</script>
