import { createRouter, createWebHistory } from 'vue-router'
import VBink from '../views/V-binkVue.vue'
import footer from '../views/FooterVue.vue'
import redBox from '../views/Box1Vue.vue'
import blueBox from '../views/Box2Vue.vue'
import props from '../views/PropsVue.vue'
import emit from '../views/EmitVue.vue'
import vShow from '../views/VshowVue.vue'
import routerView from '../views/RouterViewVue.vue'
import homeView from '../views/HomeView.vue'
import modelVue from '../views/modelVue.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/VBink',
      name: 'VBink',
      component: VBink
    },
    {
      path: '/footer',
      name: 'footer', 
      component: footer
    },
    {
      path: '/redBox',
      name: 'redBox',
      component: redBox
    },
    {
      path: '/blueBox',
      name: 'blueBox',
      component: blueBox
    },
    {
      path: '/props',
      name: 'props',
      component: props
    },
    {
      path: '/emit',
      name: 'emit',
      component: emit
    },
    {
      path: '/vShow',
      name: 'vShow',
      component: vShow
    },
    {
      path: '/routerView',
      name: 'routerView',
      component: routerView
    },
    {
      path: '/homeView',
      name: 'homeView',
      component: homeView
    },
    {
      path: '/modelVue',
      name: 'modelVue',
      component: modelVue
    },
    

  ]
})

export default router
