<template>
  <Navbar />
  <div class="container is-max-desktop px-4">
    <RouterView />
  </div>
</template>

<script setup>
  import Navbar from './components/layout/Navbar.vue';
  import { useAuthStore } from './stores/AuthStore.js';
  import { onMounted } from "vue";

  const authStore = useAuthStore();

  onMounted(() => {
    authStore.init();
  });
</script>

<style>
  @import 'bulma/css/bulma.min.css';
</style>