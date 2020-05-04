import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: resolve => require(['@/views/Main'], resolve)
    },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: resolve => require(['@/views/Home'], resolve)
    // },
    // {
    //   path: '/detail',
    //   name: 'detail',
    //   component: resolve => require(['@/views/Main-detail'], resolve)
    // },
    // {
    //   path: '/my',
    //   name: 'my',
    //   component: resolve => require(['@/views/My'], resolve)
    // },
    // {
    //   path: '/question',
    //   name: 'question',
    //   component: resolve => require(['@/views/Question'], resolve)
    // },
    // {
    //   path: '/message',
    //   name: 'message',
    //   component: resolve => require(['@/views/Message'], resolve)
    // },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/views/Login'], resolve)
    },
    // {
    //   path: '/register',
    //   name: 'register',
    //   component: resolve => require(['@/views/Register'], resolve)
    // },
    // {
    //   path: '/history',
    //   name: 'history',
    //   component: resolve => require(['@/views/History'], resolve)
    // },
  ],
  linkActiveClass: 'on',
})


