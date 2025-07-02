<template>
  <div class="main-container mx-auto px-4">
    <Header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
</script>

<style scoped>
.main-container {
  max-width: 1216px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
