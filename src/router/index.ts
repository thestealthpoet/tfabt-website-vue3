import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/home-page/HomePage.vue'
import Faqs from '../components/home-page/faqs/Faqs.vue'

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/faqs', name: 'FAQ', component: Faqs }
  ]
  
  export default createRouter({
    history: createWebHistory(),
    routes,
  })
