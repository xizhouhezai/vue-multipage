import Vue from 'vue'
import iView from 'iview'
import App from './App.vue'
import router from './router'

Vue.use(iView)

import 'iview/dist/styles/iview.css'
import Loc from '@/utils/loc'

const { pages } = require('../../../vue.config')

Vue.use(new Loc(pages))

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
