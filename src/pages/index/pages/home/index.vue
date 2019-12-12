<template>
  <div>
    <Button type="primary" @click="open">诗经</Button>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue'

export default {
  mounted() {
    this.$router.push('/shijing')
  },
  methods: {
    open() {
      this.$router.push('/shijing')
    }
  },
  components: {
    Button
  }
}
</script>
