import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Loc from '@/utils/loc'

const { pages } = require('../../../vue.config')

Vue.use(new Loc(pages))

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
