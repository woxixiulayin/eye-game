import Vue from 'vue'
import Router from 'vue-router'
import mheader from '../header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: mheader
    }
  ]
})
