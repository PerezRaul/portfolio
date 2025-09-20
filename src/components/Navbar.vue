<template>
  <nav class="sidebar-fixed bg-primary bg-opacity-25">
    <div class="text-center mb-3">
      <img 
        :src="userImage" 
        alt="Foto de perfil" 
        class="rounded-circle mb-3"
        style="width: 180px; height: 180px; object-fit: cover;" 
      />
      <h4 class="fw-bold mb-1">Raúl Pérez Portolés</h4>
      <div class="d-flex justify-content-center gap-3">
        <a href="https://github.com/PerezRaul" target="_blank" rel="noopener noreferrer" class="text-dark fs-5">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a href="tel:+34633053118" class="text-dark fs-5">
          <font-awesome-icon icon="phone" />
        </a>
        <a href="mailto:raul.perez.portoles@gmail.com" class="text-dark fs-5">
          <font-awesome-icon icon="envelope" />
        </a>
        <a :href="cvFile" download class="text-dark fs-5">
          <font-awesome-icon icon="file-pdf" />
        </a>
      </div>
    </div>
    <ul class="nav nav-pills flex-column mb-4">
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

    <div class="d-flex gap-2 justify-content-center">
      <img 
        v-for="language in languages" 
        :key="$t(language.code)" 
        :src="language.logo" 
        :alt="$t(language.label)"
        :title="$t(language.label)" 
        class="flag-img" 
        :class="{ active: currentLocale === $t(language.code) }"
        @click="setLanguage($t(language.code))" 
      />
    </div>
  </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import userImage from '@/assets/images/profile/raul.jpg'
import logoES from '@/assets/images/languages/es.png'
import logoCAT from '@/assets/images/languages/cat.png'
import logoEN from '@/assets/images/languages/en.png'
import cvFile from '@/assets/documents/cv.pdf'

const { locale } = useI18n()
const currentLocale = locale

const setLanguage = (code) => {
  locale.value = code
  currentLocale.value = code
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

const languages = [
  {
    code: 'menu.languages.spanish.code',
    label: 'menu.languages.spanish.label',
    logo: logoES
  },
  {
    code: 'menu.languages.catalan.code',
    label: 'menu.languages.catalan.label',
    logo: logoCAT
  },
  {
    code: 'menu.languages.english.code',
    label: 'menu.languages.english.label',
    logo: logoEN
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.flag-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: 2px solid transparent;
}

.flag-img.active {
  border-color: #0d6efd;
  box-shadow: 0 0 8px rgba(13,110,253,0.4);
  transform: scale(1.1);
}

.flag-img:hover {
  border-color: #0d6efd;
  box-shadow: 0 0 6px rgba(13,110,253,0.3);
}
</style>
