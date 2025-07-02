<template>
  <section class="hero-section flex flex-col-reverse md:flex-row items-center justify-between py-6 gap-8 md:gap-0 px-2 md:py-[70px] md:px-[40px] max-w-[1216px] mx-auto md:h-[629px]">
    <!-- Left: Text Content -->
    <div class="flex-1 text-center md:text-left mt-6 md:mt-0">
      <h1 class="text-4xl md:text-6xl font-heading font-bold mb-4 leading-tight">
        DIGITAL QR MENU
      </h1>
      <p class="text-lg md:text-xl font-body text-charcoal mb-6">
        Website online & ordering system<br>
        Për restorante, bare, kafene, hotele, fastfood, beachbar dhe më shumë!
      </p>
      <div class="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
        <Button label="Krijo Meny" unstyled class="rounded-[8px] h-[40px] px-6 text-[14px] font-cta font-bold bg-primary text-white border-2 border-primary hover:font-semibold hover:opacity-80 transition" />
        <Button label="Testo Menynë" unstyled class="rounded-[8px] h-[40px] px-6 text-[14px] font-cta font-bold bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white transition" />
      </div>
    </div>
    <!-- Right: Image/Visual -->
    <div class="flex-1 flex justify-center md:justify-end mt-0">
      <Splide
        :options="{
          type: 'loop',
          perPage: 1,
          autoplay: true,
          interval: 3500,
          pauseOnHover: true,
          arrows: true,
          pagination: true,
          speed: 700,
          gap: '1rem',
          height: '445px',
          breakpoints: {
            1124: { height: '335px' }
          }
        }"
        class="rounded-xl shadow-lg w-full max-w-full h-[335px] md:w-[445px] md:h-[445px]"
      >
        <SplideSlide v-for="(img, i) in images" :key="i">
          <img :src="img" class="object-cover w-full h-[335px] md:h-[445px] rounded-xl max-w-full" />
        </SplideSlide>
      </Splide>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80',
];
</script> 