import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Testing from '@/components/ResourceShare/Testing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/testing',
      name: 'Testing',
      component: Testing
    },
  ]
})
