import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import PageUn from '../views/PageUn.vue'
import PageHuit from '../views/PageHuit.vue'
import PageNeuf from '../views/PageNeuf.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/page1',
    name: 'Un',
    component: PageUn
    },
    {
      path: '/page2/:id',
      name: 'Page deux avec param',
      component: import ('../views/PageDeux.vue')
    },
    {
      path: '/page8',
      name: 'Afficher une liste',
      component: PageHuit
    },
    {
      path: '/page9',
      name: 'Fetch un JSON',
      component: PageNeuf
    },
    {
      path: '/page10',
      name: 'Stockage local de la date/heure',
      component: import ('../views/PageDix.vue')
    },
    {
      path: '/page11',
      name: 'Module TS pour la date/heure',
      component: import ('../views/PageOnze.vue')
    },
    {
      path: '/page12',
      name: 'Camera',
      component: import ('../views/PageDouze.vue')
    },
    {
      path: '/page13',
      name: 'Onglets',
      component: import ('../views/PageTreize.vue')
    },


]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
