import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/pages/home.vue'
// import Story from '@/pages/story.vue'

Vue.use(VueRouter)

let routes = [
  {
    path: '/home',
    name: '首页',
    component: resolve => require(['@/pages/home.vue'],resolve)
  },
  {
    path: '/story',
    name: '测试页',
    component: resolve => require(['@/pages/story.vue'],resolve)
  }
]

const router = new VueRouter({
    mode:'history',
    routes
  })
  


let asyncRouter

// 导航守卫，渲染动态路由
router.beforeEach((to, from, next) => {
  console.log(to)
  next()
})

// function go (to, next) {
//   asyncRouter = filterAsyncRouter(asyncRouter)
//   router.addRoutes(asyncRouter)
//   next({...to, replace: true})
// }

// function save (name, data) {
//   localStorage.setItem(name, JSON.stringify(data))
// }

// function get (name) {
//   return JSON.parse(localStorage.getItem(name))
// }
export default router
