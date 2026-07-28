import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import Articles from '../pages/Articles.vue'
import ArticlePage from '../pages/HomePage.vue'
import Login from '../pages/Login.vue'
import Signup from '../pages/Signup.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/articles', component: Articles },
  { path: '/post/:id', component: ArticlePage },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router