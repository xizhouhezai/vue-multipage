<template>
  <div>
    诗经
    <a-button type="primary">Primary</a-button>
  </div>
</template>

<script>
import { Button } from "ant-design-vue"

import shijing from "@/assets/shijing.json"

export default {
  mounted() {
    window.console.log(shijing)
  },
  components: {
    Button
  }
}
</script>
