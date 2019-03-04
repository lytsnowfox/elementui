import Vue from 'vue'
import Router from 'vue-router'
//import login from '@/components/login'
//import index from '@/components/index'
// 异步加载组件
const login = () => import('@/components/login')
const index = () => import('@/components/index')
const home = () => import('@/components/home')
const userlist = () => import('@/components/userlist')
const rolelist = () => import('@/components/rolelist')
const orglist = () => import('@/components/orglist')
const resourcelist = () => import('@/components/resourcelist')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    }, {
      path: '/',
      name: 'index',
      component: index,
      children: [{
          path: '',
          name: 'home',
          component: home
        },{
          path: '/userlist',
          name: 'userlist',
          component: userlist
        },{
          path: '/rolelist',
          name: 'rolelist',
          component: rolelist
        },{
          path: '/orglist',
          name: 'orglist',
          component: orglist
        },{
          path: '/resourcelist',
          name: 'resourcelist',
          component: resourcelist
        }
      ]
    }
  ]
})
