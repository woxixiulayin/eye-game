import Vue from 'vue'
import Router from 'vue-router'
import mheader from '../header'
import RankSection from 'js/maincontent/rank-section'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: mheader,
    children: [{
      path: '/',
      component: RankSection
    }]
  }]
})
