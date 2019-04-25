export default class Loc {
  constructor(options) {
    this.options = options
  }
  install(Vue) {
    const self = this
    const baseUrl = window.location.origin
    Vue.prototype.$loc = {
      open(config) {
        let url
        let { page, path } = config
        // window.console.log(page, path, params)
        if (!self.options[page]) {
          return
        }
        url = baseUrl + '/' + self.options[page].filename
        if (path) {
          if (window.location.hash) {
            url += url + window.location.hash + path
          }
        }
        window.location.href = url
      }
    }
  }
}
