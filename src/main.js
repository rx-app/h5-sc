// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'
// router.beforeEach((to, from, next)=>{
//   alert(to)
//   // alert(localStorage.href)
//   next(vm => {
//     // 通过 `vm` 访问组件实例
//     vm.deleteScan();
//   })
// })
import 'lib-flexible/flexible.js';

import './assets/font/iconfont.css'
import './assets/font2/iconfont.css'
import './assets/css/style.css'
Vue.config.productionTip = false


import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

import http from './http'
Vue.prototype.$http = http

import {currency,LV} from './tools'
Vue.filter('cy',currency)
Vue.filter('lv',LV)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
