import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Index from '@/page/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/page/index',
      name: 'index',
      component: Index
    }
  ]
})

