<template>
  <div class="main">
    <div class="side">
      <p class="sdie-list" @click="open({path: '/category/side1', value: 'side1'})">to side1</p>
      <p class="sdie-list" @click="open({path: '/category/side2', value: 'side2'})">to side2</p>
      <p class="sdie-list" @click="open({path: '/category/side3', value: 'side3'})">to side3</p>
    </div>
    <div>
      <div class="top-nav">
        <div class="top-nav-list" v-for="(item, index) in topNav" :key="index" @click="open(item)">
          <span>{{ item.value }}</span>
          <span>X</span>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topNav: []
    }
  },
  created() {
    this.topNav.push({
      value: 'side1',
      path: '/category/side1'
    })
    this.$router.push('/category/side1')
  },
  methods: {
    open(item) {
      let temp = this.topNav.filter(val => val.path === item.path)
      if (!temp.length) {
        this.topNav.push(item)
      }

      this.$router.push(item.path)
    }
  },
}
</script>

<style>
.main {
  display: flex;
  flex-direction: row;
  width: 500px;
  height: 500px;
  margin-top: 100px;
}
.side {
  display: flex;
  flex-direction: column;
  width: 150px;
}
.side-list {
  height: 30px;
  line-height: 30px;
  text-align: center;
}
.top-nav {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
}
.top-nav-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100px;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
}
</style>
