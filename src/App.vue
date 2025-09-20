<template>
  <div class="d-flex">
    <Navbar />
    <main class="main-content flex-grow-1 p-4">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<style scoped>
.main-content {
  margin-left: 280px;
}
</style>
