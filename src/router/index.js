import Vue from 'vue'
import Router from 'vue-router'

const login = () => import('../pages/login.vue')
const index = () => import('../pages/index.vue')
const home = () => import('../pages/home.vue')
const banner = () => import('../pages/banner.vue')
const jiazheng = () => import('../pages/jiazheng.vue')
const teacher = () => import('../pages/teacher.vue')
const weixiu = () => import('../pages/weixiu.vue')
const witer = () => import('../pages/witer.vue')
const xiugai = () => import('../pages/xiugai.vue')
const welcom = () => import('../pages/welcom.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: index,
      children: [
        {
          path: 'home',
          name: '管理者管理',
          component: home
        }, {
          path: 'banner',
          name: 'banner管理',
          component: banner
        }, {
          path: 'jiazheng',
          name: '家政管理',
          component: jiazheng,
        }, {
          path: 'teacher',
          name: '家教管理',
          component: teacher,
        }, {
          path: 'witer',
          name: '水站管理',
          component: witer,
        }, {
          path: 'weixiu',
          name: '维修管理',
          component: weixiu,
        }, {
          path: 'xiugai',
          name: '修改密码',
          component: xiugai,
        }, {
          path: 'welcom',
          name: '欢迎',
          component: welcom,
        }, {
          path: '',
          redirect: 'welcom',
        },
      ]
    }, {
      path: '/login',
      component: login
    }, {
      path: '*',
      redirect: 'index'
    }
  ]
})
