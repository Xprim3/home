<template>
  <section class="section-padding w-full bg-white overflow-x-hidden">
    <div class="max-w-[1216px] mx-auto px-4 md:px-[40px] relative">
      <h2 class="font-bold mb-8 text-center md:text-left text-[28px] md:text-[36px] lg:text-[40px]">Examples Section</h2>
      <div class="relative">
        <div
          class="flex gap-6 overflow-x-auto pb-2 -mx-4 px-4 hide-scrollbar"
          style="scroll-padding-right: 60px;"
        >
          <div
            v-for="(card, i) in cards"
            :key="i"
            class="w-[201px] min-w-[201px] max-w-[201px] h-[205px] md:w-[261px] md:min-w-[261px] md:max-w-[261px] md:h-[320px] bg-white rounded-2xl shadow p-4 flex flex-col items-center hover:shadow-lg transition-shadow duration-200 flex-shrink-0"
          >
            <img :src="card.img" alt="Example image" class="w-full h-[110px] md:h-[180px] object-cover rounded-xl mb-4" />
            <div class="font-semibold text-center text-base md:text-xl">{{ card.title }}</div>
          </div>
        </div>
      </div>
      <!-- Swipe hint text for mobile only -->
      <div class="text-xs text-gray-400 mt-2 block md:hidden text-center select-none">Swipe to see more</div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    title: 'Example 1',
  },
  {
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    title: 'Example 2',
  },
  {
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    title: 'Example 3',
  },
  {
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    title: 'Example 4',
  },
  {
    img: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80',
    title: 'Example 5',
  },
];
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style> 