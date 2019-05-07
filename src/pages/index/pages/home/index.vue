<template>
  <div>
    home
    <Button type="primary">Button</Button>
  </div>
</template>

<script>
export default {
  mounted() {
    // this.$storage.setItem('user', {name: 'Tom'})
    window.console.log(this.$http)
    this.$http.get('login', {name: 'zhangsan', password: 123456})
  }
}
</script>
