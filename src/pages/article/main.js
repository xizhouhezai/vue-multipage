import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Loc from '@/utils/loc'
import Http from '@/http'

import Api from '@/config/api'

const { pages } = require('../../../vue.config')

import animated from 'animate.css'

Vue.use(animated)

Vue.use(new Loc(pages))
Vue.use(new Http(Api))

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
