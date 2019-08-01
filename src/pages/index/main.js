import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Loc from '@/utils/loc'
import Storage from '@/utils/storage'
import Http from '@/http'

const { pages } = require('../../../vue.config')
import apiConfig from '@/config/api'

import 'ant-design-vue/dist/antd.css'

Vue.use(new Loc(pages))
Vue.use(new Storage())
Vue.use(new Http(apiConfig))

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')