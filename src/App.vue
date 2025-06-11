<script setup lang="ts">

</script>

<template>
  <Navbar />
  <div class="container is-max-desktop px-4">
    <RouterView />
  </div>
</template>

<script setup>
  import Navbar from './components/layout/Navbar.vue';
</script>

<style>
  @import 'bulma/css/bulma.min.css';
</style>