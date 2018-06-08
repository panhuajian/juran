import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index.vue'
import Discover from '@/page/discover.vue'
import Moments from '@/page/moments.vue'
import My from '@/page/my.vue'
import Search from '@/page/search.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  }, {
    path: '/discover',
    name: 'Discover',
    component: Discover
  }, {
    path: '/moments',
    name: 'Moments',
    component: Moments
  }, {
    path: '/my',
    name: 'My',
    component: My
  }, {
    path: '/search',
    name: 'Search',
    component: Search
  }]
})
