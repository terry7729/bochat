import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入组件
// import login from '../components/login.vue'
import index from '../components/index.vue'
import nodeRecruit from '../components/noderecruit.vue'
import aboutbochat from '../components/aboutbochat.vue'
import whitepaper from '../components/whitepaper.vue'
import opensource from '../components/opensource.vue'
import partner from '../components/partner.vue'
import appup from '../components/appup.vue'
import businesshz from '../components/businesshz.vue'
// 规则
let routes = [

  // 首页
  {
    path: '/',
    component: index,

  },
  {
    path: '/index',
    component: index
  }, {
    path: '/Noderecruit',
    component: nodeRecruit
  }, {
    path: '/aboutbochat',
    component: aboutbochat
  }, {
    path: '/whitepaper',
    component: whitepaper
  }, {
    path: '/opensource',
    component: opensource
  }, {
    path: '/partner',
    component: partner
  }, {
    path: '/appup',
    component: appup
  }, {
    path: '/businesshz',
    component: businesshz
  }, {
    path: '/pdf',
    name: 'PDF',
    component: () => import('@/components/PDF.vue')
  }
]

// 路由对象
let router = new VueRouter({
  routes
})

// // 注册(添加)导航守卫 前置守卫
// router.beforeEach((to, from, next) => {
//   // to去哪
//   console.log(to);
//   // from 从哪来
//   // console.log(from);
//   if (to.path == '/login') {
//     // 直接放过去
//     next()
//   } else {
//     // 不是登录页
//     if (window.sessionStorage.getItem('token')) {
//       // 登录了
//       next()
//     } else {
//       // 提示用户 this不是Vue实例 无法访问$message
//       // this.$message.warning('哥们请登录')
//       Vue.prototype.$message.warning('哥们请先登录')
//       // 没有登录
//       next('/login')
//     }
//   }
//   // 必须要next
//   // next();
// })

// 暴露
export default router