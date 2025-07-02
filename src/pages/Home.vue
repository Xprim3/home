<template>
  <Hero />
  <BenefitSection
    title="Why Choose Our Digital Menu?"
    image-src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    :benefits="benefits"
  />
</template>

<script setup lang="ts">
import Hero from '../components/Hero.vue';
import BenefitSection from '../components/BenefitSection.vue';

const benefits = [
  'Instant menu updates',
  'Contactless ordering',
  'Easy to use for staff and customers',
  'Supports multiple languages',
  'Add images and descriptions',
  'Highlight specials and promotions',
  'Reduce printing costs',
  'Eco-friendly solution',
  'Analytics and insights',
  'Works on any device',
];
</script> 