<template>
  <div class="d-flex vh-100">
    <Navbar />
    <main class="flex-grow-1 p-4">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<style scoped></style>
