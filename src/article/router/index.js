import Vue from 'vue'
import Router from "vue-router"

import Article from "../pages/article/article.vue"
import Category from "../pages/category/category.vue"

import Side1 from "../pages/category/side1.vue"
import Side2 from "../pages/category/side2.vue"
import Side3 from "../pages/category/side3.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/article',
      component: Article
    },
    {
      path: '/category',
      component: Category,
      children: [
        {
          path: '/category/side1',
          component: Side1
        },
        {
          path: '/category/side2',
          component: Side2
        },
        {
          path: '/category/side3',
          component: Side3
        }
      ]
    }
  ]
})
