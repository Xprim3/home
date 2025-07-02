<template>
  <section class="section-padding">
    <div class="max-w-[1184px] mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="n in 8"
          :key="n"
          class="bg-white rounded-2xl shadow p-4 md:py-[70px] md:px-[40px] max-w-[558px] w-full mx-auto"
        >
          <div class="flex flex-col md:flex-row items-center md:items-start gap-6 h-full">
            <!-- Left: Title and bullet list -->
            <div class="flex-1 w-full">
              <h3 class="font-bold text-[24px] md:text-[28px] mb-2">Card Title {{ n }}</h3>
              <ul class="list-disc pl-5 space-y-1 text-gray-700 text-[15px] md:text-[17px]">
                <li v-if="n % 2 === 1">This is a single bullet point for card {{ n }}.</li>
                <li v-else>First point for card {{ n }}</li>
                <li v-else>Second point for card {{ n }}</li>
              </ul>
            </div>
            <!-- Right: Video -->
            <div class="flex-1 w-full flex justify-center md:justify-end">
              <video
                class="rounded-lg object-cover h-[443px] w-auto"
                autoplay
                loop
                muted
                playsinline
                poster="https://www.w3schools.com/html/mov_bbb.jpg"
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Grid of 8 responsive cards with title, bullet list, and video.
</script> 