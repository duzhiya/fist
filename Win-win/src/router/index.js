import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import bottom from '@/components/bottom'
import team from '@/components/team'
import homepage from '@/components/homepage'
import Stars from '@/components/Stars'

Vue.use(Router)

export default new Router({
  routes: [{
    // 首页
      path: '/',
      name: 'index',
      component: index
    },
    // 我的团队
    {
      path: '/team',
      name: 'team',
      component: team
    },
    // 众星学院
    {
      path: '/Stars',
      name: 'Stars',
      component: Stars
    },
    // 我的
    {
      path: '/homepage',
      name: 'homepage',
      component: homepage
    },
    // 底部
    {
      path: '/bottom',
      name: 'bottom',
      component: bottom
    },
  ]
})
