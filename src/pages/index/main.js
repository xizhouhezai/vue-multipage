import Vue from 'vue'
import iView from 'iview'
import App from './App.vue'
import router from './router'

Vue.use(iView)

import 'iview/dist/styles/iview.css'
import Loc from '@/utils/loc'
import Storage from '@/utils/storage'
import Http from '@/http'

const { pages } = require('../../../vue.config')
import Api from '@/config/api'

Vue.use(new Loc(pages))
Vue.use(new Storage())
Vue.use(new Http(Api))

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
