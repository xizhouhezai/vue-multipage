<template>
  <div>
    <select name="sel" id="select">
      <option v-for="(item, index) in options" :key="index" :value="item.name">{{ item.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          name: 'zhangsan1',
        },
        {
          name: 'zhangsan2',
        },
        {
          name: 'zhangsan3',
        }
      ]
    }
  }
}
</script>

