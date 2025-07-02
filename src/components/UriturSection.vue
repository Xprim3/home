<template>
  <section class="section-padding">
    <div class="max-w-[1184px] mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center gap-y-10 md:gap-y-0 gap-8 md:gap-12">
        <!-- Left: Video/Image (on desktop, left; on mobile, below text) -->
        <div class="flex-1 flex justify-center items-center mb-6 md:mb-0 order-2 md:order-none">
          <video
            class="rounded-lg object-cover w-[335px] h-[590px] md:w-[400px] md:h-[700px]"
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
        <!-- Right: Title, Paragraph, Button (on desktop, right; on mobile, above video) -->
        <div class="flex-1 flex flex-col items-center md:items-start justify-center gap-4 md:gap-6 order-1 md:order-none">
          <h2 class="font-bold mb-2 uppercase text-primary text-center md:text-left text-[40px] md:text-[48px]">Uritur.com</h2>
          <p class="text-gray-700 mb-2 text-center md:text-left text-[15px]">URITUR është platforma ku të gjithë bizneset që kanë menynë digjitale të Skanom janë të prezantuara publikisht për të gjithë. Ne si Skanom realizojmë marketing kohë pas kohe që sa më shumë t'ju zbulojnë juve në platformën Uritur.</p>
          <Button label="Vizito uritur.com" unstyled class="rounded-[8px] font-cta font-bold bg-primary text-white border-2 border-primary hover:font-semibold hover:opacity-80 transition" style="height:47px;width:268px;font-size:18px;" @click="goToUritur" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from 'primevue/button';

function goToUritur() {
  window.open('https://uritur.co', '_blank');
}
// UriturSection: desktop = video left, text right; mobile = text above video
</script>

<style scoped>
/* No custom styles needed, all handled by Tailwind responsive classes */
</style> 