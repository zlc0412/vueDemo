import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index'
import a1 from '@/components/plane/a1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/plane/a1',
      name: 'a1',
      component: a1
    }
  ]
})
