import Vue from 'vue'
import Router from 'vue-router'
import Introduction from '@/components/Introduction'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'introduction',
      component: Introduction
    }
  ]
})

export default router
