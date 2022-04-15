import Vue from 'vue'
import Router from "vue-router"

import Home from "../pages/home"
import Login from "../pages/login/login"
import ShiJing from "../pages/shijing/shijing"
import Article from "../pages/shijing/content"
import List from "../pages/list/list"
import PageAnimate from "../pageAnimate.vue"

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageAnimate',
      component: PageAnimate,
      children: [
        {
          path: '',
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
        },
        {
          path: '/list',
          component: List
        },
        {
          path: '/firework',
          component: () => import('../pages/firework/index')
        },
        {
          path: '/game/pixi',
          component: () => import('../pages/game/pixi')
        }
      ]
    }
  ]
})
