import Vue from 'vue'
import Router from 'vue-router'

const login = () => import('../pages/login.vue')
const index = () => import('../pages/index.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: index
    },{
      path:'/login',
      component:login
    },{
      path:'*',
      redirect:'index'
    }
  ]
})
