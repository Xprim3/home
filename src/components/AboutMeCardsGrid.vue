<template>
  <section class="section-padding">
    <div class="max-w-[1184px] mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="n in 8" :key="n" class="bg-white rounded-2xl shadow p-4 md:py-[70px] md:px-[40px] max-w-[558px] w-full mx-auto">
          <h3 class="font-bold text-[24px] md:text-[28px] mb-2">Card {{ n }}</h3>
          <p class="text-gray-700 text-[15px] md:text-[17px]">
            This is placeholder content for card {{ n }}. You can replace this with your own information, images, or actions as needed.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Grid of 8 responsive cards styled like AboutMeCard.
</script> 