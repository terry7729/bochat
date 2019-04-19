import Vue from 'vue'
import App from './App.vue'
import router from './lib/router'


// 导入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// use一下 插件都需要
Vue.use(ElementUI)

import './assets/css/base.css'

// 导入自己抽取的插件
import myHttp from './lib/myHttp'
// use一下
Vue.use(myHttp)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
