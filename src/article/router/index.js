import Vue from 'vue'
import Router from "vue-router"

import Article from "../pages/article/article"
import Category from "../pages/category/category"
import Upload from "../pages/upload/upload"

import Side1 from "../pages/category/side1"
import Side2 from "../pages/category/side2"
import Side3 from "../pages/category/side3"

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
    },
    {
      path: '/upload',
      component: Upload,
    }
  ]
})
