import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/home-page/HomePage.vue'

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    // { path: '/faq', name: 'FAQ', component: Faq }
  ]
  
  export default createRouter({
    history: createWebHistory(),
    routes,
  })
