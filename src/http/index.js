import axios from 'axios'

const service = axios.create({
  baseURL: 'localhost:3333/v1',
  timeout: 5000
})

service.interceptors.request.use(config => {
  window.console.log(config);
})

export default class Http {
  constructor(options) {
    this.options = options
    window.console.log(this.options)
  }

  install(Vue) {
    let self = this
    Vue.prototype.$http = {
      get(name, data) {
        window.console.log(111)
        self.getUrl(name, data)
        // return Promise((resolve, reject) => {
        //   axios.get(url, data).then(res => {
        //     resolve(res)
        //   }, err => {
        //     reject(err)
        //   })
        // })
      },
      post() {}
    }
  }
  getUrl(name, data) {
    let tempOptions = this.options
    let tempData = data
    window.console.log(name)
    window.console.log(tempOptions)
    window.console.log(tempData)
  }
}