import Vue from 'vue'
import Router from "vue-router"

import Home from "../pages/home"
import Login from "../pages/login/login"
import ShiJing from "../pages/shijing/shijing"
import Article from "../pages/shijing/content"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/shijing',
      component: ShiJing,
    },
    {
      path: '/shijing/article',
      component: Article,
    }
  ]
})