<template>
  <Header />
  <div class="main-container mx-auto px-4">
    <main>
      <router-view />
    </main>
  </div>
  <AboutMenuSection v-if="route.path === '/'">
    <div class="text-left max-w-[1184px] mx-auto p-4">
      <h2 class="font-bold text-[32px] md:text-[40px] mb-4">Çfarë është Menyja Digjitale?</h2>
      <p class="text-gray-700 text-[16px] md:text-[19.2px]">
        Menyja digjitale është një version elektronik online (webfaqe) i menysë tradicionale, e arritshme përmes QR kodit. Ajo bën shërbimin më të shpejtë dhe më të lehtë, redukton kostot e biznesit dhe është më fleksibële, duke u përditësuar pa mundim. Klientët mund të shikojnë dhe porositin drejtpërdrejt nga telefoni i tyre.
      </p>
    </div>
  </AboutMenuSection>
  <AboutMeCardsGrid v-if="route.path === '/'" class="mt-8 mb-8" />
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import AboutMenuSection from './components/AboutMenuSection.vue';
import AboutMeCardsGrid from './components/AboutMeCardsGrid.vue';
import { useRoute } from 'vue-router';
const route = useRoute();
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
