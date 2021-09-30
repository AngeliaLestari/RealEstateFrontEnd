import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import realestate from '@/components/realestate'
import Details from '@/components/Details'
import home from '@/components/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: home
    },
    {
      path: '/helloworld',
      name: 'helloworld',
      component: HelloWorld
    },
    {
      path: '/realestate',
      name: 'realestate',
      component: realestate
    },
    {
      path: '/realestate/:projectName',
      name: 'details',
      component: Details,
      props: true,
      children: [{
        path: 'realestate',
        component: realestate
      }]

    }
  ]
})
