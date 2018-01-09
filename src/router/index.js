import Vue from 'vue'
import Router from 'vue-router'
import Introduction from '@/components/Introduction'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'introduction',
      component: Introduction,
      meta: {
        title: 'Introduction - Alec Carpenter'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
