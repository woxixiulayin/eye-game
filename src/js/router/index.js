import Vue from 'vue'
import Router from 'vue-router'
import liveContent from 'js/main-content/live-content'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/:game',
    component: liveContent
  }]
})
