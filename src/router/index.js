import { createRouter, createWebHistory } from 'vue-router'
import About from '@/pages/About.vue'
import Experience from '@/pages/Experience.vue'
import Education from '@/pages/Education.vue'

const routes = [
  { path: '/', component: About, name: 'about' },
  { path: '/experience', component: Experience, name: 'experience' },
  { path: '/education', component: Education, name: 'education' },
]

const router = createRouter({
  history: createWebHistory('/portfolio/'),
  routes
})

export default router