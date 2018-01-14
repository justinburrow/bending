import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Section from '@/components/Section'
import One from '@/components/One'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/page/:name?',
      name: 'Section',
      component: Section,
      children: [
        {
          path: '/page/one',
          name: 'one',
          component: One,
          meta: { id: 1 }
        }
      ]
    }
  ]
})
