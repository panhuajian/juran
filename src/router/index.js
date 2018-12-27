import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/page/index.vue'
// import Discover from '@/page/discover.vue'
// import Moments from '@/page/moments.vue'
// import My from '@/page/my.vue'
// import Search from '@/page/search.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: resolve => require(['../page/index.vue'], resolve)
  }, {
    path: '/discover',
    name: 'Discover',
    component: resolve => require(['../page/discover.vue'], resolve)
  }, {
    path: '/moments',
    name: 'Moments',
    component: resolve => require(['../page/moments.vue'], resolve)
  }, {
    path: '/my',
    name: 'My',
    component: resolve => require(['../page/my.vue'], resolve)
  }, {
    path: '/search',
    name: 'Search',
    component: resolve => require(['../page/search.vue'], resolve)
  }]
})
