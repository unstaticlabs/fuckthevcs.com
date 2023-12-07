import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ContributorsView from '../views/ContributorsView.vue'
import UsersView from '../views/UsersView.vue'
import InvestorsView from '../views/InvestorsView.vue'
import ManifestoView from '../views/ManifestoView.vue'
import FundView from '../views/FundView.vue'
import JoinView from '../views/JoinView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/manifesto',
      component: ManifestoView
    },
    {
      path: '/contributors',
      component: ContributorsView
    },
    {
      path: '/users',
      component: UsersView
    },
    {
      path: '/investors',
      component: InvestorsView
    },
    {
      path: '/join',
      component: JoinView
    },
    {
      path: '/fund',
      component: FundView
    }
  ]
})

export default router
