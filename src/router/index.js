import { createRouter, createWebHistory } from 'vue-router'
import About from '@/pages/About.vue'
import Experience from '@/pages/Experience.vue'
import Education from '@/pages/Education.vue'
import Contact from '@/pages/Contact.vue'

const routes = [
  { path: '/', component: About, name: 'about' },
  { path: '/experience', component: Experience, name: 'experience' },
  { path: '/education', component: Education, name: 'education' },
  { path: '/contact', component: Contact, name: 'contact' },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router