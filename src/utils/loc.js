export default class Loc {
  constructor(options) {
    this.options = options
  }
  install(Vue) {
    const self = this
    const baseUrl = window.location.origin
    Vue.prototype.$loc = {
      /**
       * @ open 多页面跳转，暂时只支持hash路由
       * @ config Object {page, path, params} page要跳转的页面name，path要跳转页面的路由，params路由参数
       */
      open(config) {
        window.console.log('22222222222222', config)
        let url = ''
        let { page, path, params } = config

        if (!self.options[page]) {
          return
        }

        url = baseUrl + '/' + self.options[page].filename
        window.console.log(window.location.hash)
        if (path) {
          if (window.location.hash) {
            url = url + '#' + path
          }
        }

        let str = '?'
        if (typeof params === 'object') {
          Object.keys(params).forEach(key => {
            str += key + '=' + params[key] + '&'
          })
        }

        str = str.slice(0, str.length - 1)     
        url = url + str

        window.location.href = url
      }
    }
  }
}
