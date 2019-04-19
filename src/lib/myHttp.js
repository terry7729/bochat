// 导入axios
import axios from 'axios'

// 允许axios跨域携带cookie 默认是不携带
axios.defaults.withCredentials = true


var qs = require('qs');
// 设置拦截器 (回调函数)
axios.interceptors.request.use(config => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config
}, error => {
  // Do something with request error
  Promise.reject(error)
})

// 暴露出去
export default {
  install(Vue) {
    // 把axios 设置到Vue构造函数的原型上
    Vue.prototype.$http = axios;
  }
}