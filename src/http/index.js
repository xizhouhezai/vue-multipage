import axios from 'axios'

const service = axios.create({
  // baseURL: 'http://localhost:3333/v1',
  baseURL: 'http://rap2api.taobao.org/app/mock/167115/v1',
  timeout: 5000
})

export default class Http {
  constructor(options) {
    this.options = options
  }

  install(Vue) {
    let self = this
    // 请求前统一处理
    service.interceptors.request.use(async config => {
      let storage = Vue.prototype.$storage
      if (config.api.auth === 'required') {
        let user = await storage.getItem('user')
        if (!user) {
          window.location.href = '#/login'
        } else {
          config.headers.authorization = 'Bearer ' + user.token
        }
      }
      return config;
    })
    // 返回统一处理
    service.interceptors.response.use(async config => {
      window.console.log(config)
      return config
    }, (err, data) => {
      window.console.log(err)
      window.console.log(data)
    })
    Vue.prototype.$http = {
      get(name, data) {
        let params = {}
        if (data) {
          params = data
        }
        let {url, api} = self.getUrl(name)
        // window.console.log(api)
        return new Promise((resolve, reject) => {
          try {
            service.get(url, {params: params, api: api}).then(res => {
              resolve(res)
            })
          } catch (error) {
            reject(error)
            window.console.log(error)
          }
        })
      },
      post(name, data) {
        let {url, api} = self.getUrl(name)
        return new Promise((resolve, reject) => {
          service.post(url, data, {api: api}).then(res => {
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
    let url;

    let api = tempOptions.apis.filter(item => item.name === name)
    window.console.log(api)
    url = api[0].path

    return {url, api: api[0]}
  }
}
