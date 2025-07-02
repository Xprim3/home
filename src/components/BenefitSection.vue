<template>
  <div class="benefit-card bg-white rounded-2xl p-4 md:py-[70px] md:px-[40px] flex flex-col gap-8 md:gap-12 md:h-[619px]">
    <!-- Title: Centered above both columns -->
    <h2 class="text-center text-[32px] md:text-[40px] font-bold mb-0">{{ title }}</h2>
    <div class="flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12">
      <!-- Left: Image -->
      <div class="flex-shrink-0 flex justify-center items-center">
        <img 
          :src="imageSrc" 
          alt="Menu Example" 
          class="w-[295px] h-[295px] md:w-[460px] md:h-[460px] object-cover rounded-xl"
        />
      </div>
      <!-- Right: Benefits -->
      <div class="flex-1 flex flex-col justify-center">
        <ul class="space-y-4">
          <li v-for="(benefit, i) in benefits" :key="i" class="flex items-start text-lg md:text-xl">
            <span class="text-green-500 mr-3 mt-1">
              <i class="pi pi-check-circle text-2xl"></i>
            </span>
            <span>{{ benefit }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string,
  imageSrc: string,
  benefits: string[],
}>();
</script>

<style scoped>
.benefit-card {
  box-shadow: 0 8px 32px rgba(60,60,60,0.12);
  height: auto;
  min-height: 0;
}
</style> 