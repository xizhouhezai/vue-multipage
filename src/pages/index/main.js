import Vue from 'vue'
import iView from 'iview'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/antd.css'

Vue.use(iView)

import 'iview/dist/styles/iview.css'
import Loc from '@/utils/loc'
import Storage from '@/utils/storage'
import Http from '@/http'

const { pages } = require('../../../vue.config')
import apiConfig from '@/config/api'

Vue.use(new Loc(pages))
Vue.use(new Storage())
Vue.use(new Http(apiConfig))

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
