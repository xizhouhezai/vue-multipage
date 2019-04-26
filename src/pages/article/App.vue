<template>
  <div>
    <p>这里是文章页</p>
    <router-link to="/article">to article</router-link>
    <br>
    <router-link to="/category">to category</router-link>
    <br>
    <router-link to="/upload">to upload</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    handle: () => {
      window.console.log(1111)
    }
  },
}
</script>
