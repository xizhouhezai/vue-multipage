import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:3333/v1',
  timeout: 5000
})

export default class Http {
  constructor(options) {
    this.options = options
  }

  install(Vue) {
    let self = this
    service.interceptors.request.use(async config => {
      window.console.log(config)
      let storage = Vue.prototype.$storage
      if (config.data.auth === 'required') {
        let user = await storage.getItem('user')
        if (!user) {
          window.location.href = '#/login'
        } else {
          config.headers.authorization = 'Bearer ' + user.token
        }
      }
      window.console.log(config)
      return config;
    }, err => {
      window.console.log(err)
    })
    Vue.prototype.$http = {
      get(name, data) {
        window.console.log(data)
        let params = {}
        if (data) {
          params = data
        }
        let {url, api} = self.getUrl(name)
        // window.console.log(api)
        return new Promise((resolve, reject) => {
          service.get(url, {params: params, data: api}).then(res => {
            resolve(res)
          }, err => {
            reject(err)
          })
        })
      },
      post(name, data) {
        let {url, api} = self.getUrl(name)
        return new Promise((resolve, reject) => {
          service.post(url, data, {data: api}).then(res => {
            resolve(res)
          }, err => {
            reject(err)
          })
        })
      }
    }
  }
  getUrl(name) {
    let tempOptions = this.options
    window.console.log(tempOptions)
    let url;

    let api = tempOptions.apis.filter(item => item.name === name)
    window.console.log(api)
    url = api[0].path

    return {url, api: api[0]}
  }
}
