<template>
  <nav class="d-flex flex-column justify-content-center align-items-center flex-shrink-0 p-3 bg-light sidebar-fixed">
    <div class="text-center mb-3">
      <img 
        :src="userImage" 
        alt="Foto de perfil" 
        class="img-fluid rounded-circle mb-3"
        style="width:180px; height:180px; object-fit:cover;"
      />
      <h4 class="fw-bold">Raúl Pérez Portolés</h4>
    </div>
      
    <ul class="nav nav-pills flex-column mb-auto">
      <li v-for="menu in menus" :key="menu.path" class="nav-item">
        <router-link 
          :to="menu.path" 
          class="nav-link" 
          :class="{ active: $route.path === menu.path }"
        >
          {{ $t(menu.name) }}
        </router-link>
      </li>
    </ul>

    <div>
      <select v-model="currentLocale" @change="changeLocale">
        <option value="es">ES</option>
        <option value="en">EN</option>
        <option value="cat">CAT</option>
      </select>
    </div>
  </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import userImage from '@/assets/images/profile/raul.jpg'

const { locale } = useI18n()
const currentLocale = locale

const changeLocale = () => {
  locale.value = currentLocale.value
}

const menus = [
  {
    name: 'menu.about', 
    path: '/' 
  },
  { 
    name: 'menu.experience', 
    path: '/experience' 
  },
  { 
    name: 'menu.education', 
    path: '/education' 
  },
]
</script>

<style scoped>
.sidebar-fixed {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 280px;
  overflow-y: auto;
  z-index: 1030;
}
</style>