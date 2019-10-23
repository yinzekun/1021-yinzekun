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
const teatcherlei = () => import('../pages/teatcherlei.vue')
const teatherbanner = () => import('../pages/teatherbanner.vue')
const teatcherpai = () => import('../pages/teatcherpai.vue')
const witerzhan = () => import('../pages/witerzhan.vue')
const witerguan = () => import('../pages/witerguan.vue')
const xiu = () => import('../pages/xiu.vue')
const weixiuping = () => import('../pages/weixiuping.vue')
const jiabanner = () => import('../pages/jiabanner.vue')
const jiaman = () => import('../pages/jiaman.vue')
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
          component: jiazheng,
          children: [
            {
              path: 'jiabanner',
              component: jiabanner,
            }, {
              path: 'jiaman',
              component: jiaman,
            }, {
              path: '',
              redirect: 'jiabanner',
            },
          ]
        }, {
          path: 'teacher',
          component: teacher,
          children: [
            {
              path: 'teatcherlei',
              component: teatcherlei,
            }, {
              path: 'teatherbanner',
              component: teatherbanner,
            }, {
              path: 'teatcherpai',
              component: teatcherpai,
            }, {
              path: '',
              redirect: 'teatherbanner'
            }
          ]
        }, {
          path: 'witer',
          component: witer,
          children: [
            {
              path: 'witerzhan',
              component: witerzhan,
            }, {
              path: 'witerguan',
              component: witerguan,
            },{
              path:'',
              redirect:'witerzhan',
            }
          ]
        }, {
          path: 'weixiu',
          component: weixiu,
          children: [
            {
              path: 'xiu',
              component: xiu,
            }, {
              path: 'weixiuping',
              component: weixiuping,
            },{
              path:'',
              redirect:'xiu',
            }
          ]
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
      redirect: 'login'
    }
  ]
})
