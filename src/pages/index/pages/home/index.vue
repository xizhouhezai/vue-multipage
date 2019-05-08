<template>
  <div>
    home
    <Button type="primary">Button</Button>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$http.get('article')
  }
}
</script>
