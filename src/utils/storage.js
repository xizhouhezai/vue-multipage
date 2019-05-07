export default class Storage {
  install(Vue) {
    Vue.prototype.$storage = {
      getItem(key) {
        return new Promise((resolve) => {
          let value = localStorage.getItem(key)
          if (value) {
            resolve(JSON.parse(value))
          } else {
            resolve(null)
          }
        })
      },
      setItem(key, value) {
        let temp = localStorage.getItem(key)
        let str = value;
        if (typeof value === 'object') {
          str = JSON.stringify(value)
        }
        if (temp) {
          localStorage.removeItem(key)
          localStorage.setItem(key, str)
          return
        }
        localStorage.setItem(key, str)
      }
    }
  }
}