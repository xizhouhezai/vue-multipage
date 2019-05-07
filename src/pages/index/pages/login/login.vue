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
      this.$router.push('/home')
    }
  }
}
</script>
