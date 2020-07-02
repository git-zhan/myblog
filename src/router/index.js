import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/home')
        }
      ]
    },
    {
      path: '/security',
      name: 'security',
      component: Layout,
      children: [
        {
          path: '/security/user',
          name: 'userManage',
          component: () => import('@/views/security/user')
        },
        {
          path: '/security/usergroup',
          name: 'usergroupManage',
          component: () => import('@/views/security/usergroup')
        }
      ]
    }, {
      path: '/history',
      name: 'history',
      component: Layout,
      children: [
        {
          path: '/history/log/visit',
          name: 'visitLog',
          component: () => import('@/views/history/log/visit')
        },
        {
          path: '/history/user',
          name: 'userHistory',
          component: () => import('@/views/history/user')
        }
      ]
    }
  ]
})
