// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Compont from './components/common/index'
 for( var i in Compont){
      Vue.component(i,Compont[i])
 }

import './assets/css/base.css'
import axios from 'axios'

Vue.prototype.$axios=axios;
Vue.config.productionTip = false
Vue.use(ElementUI);

axios.interceptors.response.use(config=>{
  
  // console.log(config)
  if(config.data.code==-1){//未登录
    router.replace("/login")
    return;
  }
  return config;
})

//路由守卫 前置守卫
// router.beforeEach((to,from,next)=>{
//   if(to.path=='/login'){
//     next();
//     return;
//   }

//   if(to.path.includes("index")){
//     if(sessionStorage.getItem("isAdmin")=='0'){
//       next()
//     }else{
//       next("/login")
//     }
//     return;
//   }
 
//   next()
// })

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
