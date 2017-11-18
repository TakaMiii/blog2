import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import AboutMe from '@/pages/AboutMe'
import ArticlePage from '@/pages/ArticlePage'
import AboutProject from '@/pages/AboutProject'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/about-me',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/article',
      name: 'ArticlePage',
      component: ArticlePage
    },
    {
      path: '/about-project',
      name: 'AboutProject',
      component: AboutProject
    }
  ]
})
