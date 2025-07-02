<template>
  <nav class="flex items-center px-4 py-4 md:px-[40px] md:py-[30px] sticky top-0 z-50">
    <div class="mr-6 select-none flex items-center w-[87px] h-[25px] md:w-[140px] md:h-[40px] max-w-[140px] max-h-[40px]">
      <svg
        viewBox="0 0 228.02 64.92"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style="width:100%;height:100%;display:block;"
        aria-label="Skanom Logo"
      >
        <title>skanom-logo</title>
        <path d="M333.73,298.61a43.18,43.18,0,0,0-7.34-2.91,1.65,1.65,0,0,0-.32-.06l-.36-.07a1.76,1.76,0,0,0-.4-.18l-.4-.1a47.14,47.14,0,0,1-5.37-1.85,8.63,8.63,0,0,1-3.24-2.37,5.9,5.9,0,0,1-1.29-3.94v-1.85a5.76,5.76,0,0,1,2.15-4.79,9.8,9.8,0,0,1,6.14-1.69,7.28,7.28,0,0,1,4.9,1.81,11.74,11.74,0,0,1,3.26,5.35l8.33-3.86a18.52,18.52,0,0,0-3.26-6.71,13.54,13.54,0,0,0-5.45-4.11,19.4,19.4,0,0,0-7.5-1.36,22.63,22.63,0,0,0-9.55,1.83,13.35,13.35,0,0,0-6.06,5.37,16.5,16.5,0,0,0-2.09,8.52v1.61a15,15,0,0,0,2.13,8.51,13.4,13.4,0,0,0,5.17,4.64,46.84,46.84,0,0,0,7.86,2.82l.49.12.14.08.14.08q3.21,1,5.19,1.77a7.58,7.58,0,0,1,3.15,2.29,5.87,5.87,0,0,1,1.19,3.78v2.57a6,6,0,0,1-2.25,5,10,10,0,0,1-6.32,1.77,9.41,9.41,0,0,1-6-1.93,11.08,11.08,0,0,1-3.56-5.71l-8.72,3.82a16.73,16.73,0,0,0,3.41,7,15,15,0,0,0,6.1,4.28,23.18,23.18,0,0,0,8.5,1.45,23.6,23.6,0,0,0,9.79-1.83,13.46,13.46,0,0,0,6.18-5.37,16.24,16.24,0,0,0,2.13-8.53v-2.61a14.56,14.56,0,0,0-2-8.08A13.21,13.21,0,0,0,333.73,298.61Z" transform="translate(-304.44 -265.68)"></path>
        <polygon points="81.04 4.84 70.14 4.84 53.61 33.66 53.61 4.84 44.4 4.84 44.4 63.32 53.61 63.32 53.61 48.67 60.69 37.35 72.55 63.32 83.21 63.32 66.35 28.31 81.04 4.84"></polygon>
        <path d="M411.46,270.52,393.61,329h9.69l3-11h17.34l3,11h9.69l-17.86-58.47Zm-2.81,38.77L415,286l6.32,23.25Z" transform="translate(-304.44 -265.68)"></path>
        <polygon points="166.11 45.93 147.13 4.84 138.28 4.84 138.28 63.28 147.04 63.28 147.04 23.31 165.91 63.28 174.87 63.28 174.87 4.84 166.11 4.84 166.11 45.93"></polygon>
        <path d="M530.73,287.34a17.21,17.21,0,0,0,0-15,12,12,0,0,0-4.91-4.92,15.51,15.51,0,0,0-7.53-1.74h-19a15.49,15.49,0,0,0-7.51,1.74,12,12,0,0,0-4.93,4.92,17.21,17.21,0,0,0,0,15,12,12,0,0,0,4.93,4.93,15.48,15.48,0,0,0,7.51,1.73h19a15.51,15.51,0,0,0,7.53-1.73A12,12,0,0,0,530.73,287.34Zm-31.32-.8a8.38,8.38,0,0,1-3.77-.8,5.63,5.63,0,0,1-2.45-2.33,7.76,7.76,0,0,1,0-7.14,5.79,5.79,0,0,1,2.45-2.35,8.25,8.25,0,0,1,3.77-.81H518.2a8.16,8.16,0,0,1,3.73.81,5.79,5.79,0,0,1,2.45,2.35,7.76,7.76,0,0,1,0,7.14,5.63,5.63,0,0,1-2.45,2.33,8.29,8.29,0,0,1-3.73.8Z" transform="translate(-304.44 -265.68)"></path>
        <polygon points="214.33 33.08 204.35 53.01 194.46 33.08 186.77 33.08 186.77 64.92 193.6 64.92 193.6 44.04 201.83 60.21 206.87 60.21 215.16 43.5 215.16 64.92 221.93 64.92 221.93 33.08 214.33 33.08"></polygon>
      </svg>
    </div>
    <!-- Desktop Nav Links -->
    <div class="hidden nav-desktop:flex gap-4 flex-1 ml-6">
      <router-link
        v-for="item in navItems"
        :key="item.label"
        :to="item.to"
        class="relative px-2 py-1 font-body text-charcoal text-[17px] transition-colors duration-200 group"
        :class="{
          'text-primary': route.path === item.to,
          'hover:text-primary': route.path !== item.to
        }"
      >
        {{ item.label }}
        <span
          class="absolute left-0 -bottom-0.5 w-full h-0.5 bg-primary transition-transform duration-200 origin-left scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
          :class="{ 'scale-x-100 opacity-100': route.path === item.to }"
        ></span>
      </router-link>
    </div>
    <!-- Spacer to push right section to end on mobile -->
    <div class="flex-1 nav-desktop:hidden"></div>
    <!-- Desktop Language Switcher & Buttons -->
    <div class="hidden nav-desktop:flex items-center gap-4">
      <button
        class="flex items-center gap-1 px-2 py-1 rounded hover:bg-secondary transition text-[13px] min-w-[48px] h-7 font-body text-charcoal"
        @click="(e) => toggleLangPanelDesktop(e)"
        ref="langBtnDesktop"
        style="line-height:1;background:transparent;box-shadow:none;border:none;"
      >
        <span :class="`fi fi-${activeLang === 'en' ? 'gb' : 'al'}`" style="width: 1.1em; height: 1.1em;"></span>
        <span class="font-medium ml-1">{{ activeLang === 'en' ? 'EN' : 'AL' }}</span>
        <i class="pi pi-chevron-down text-xs ml-1"></i>
      </button>
      <OverlayPanel ref="langPanel" :dismissable="true" :showCloseIcon="false" class="lang-overlay-panel">
        <div class="flex flex-col min-w-[48px]">
          <button
            v-for="lang in languages"
            :key="lang.code"
            @click="() => selectLang(lang.code)"
            class="flex items-center gap-1 px-2 py-1 rounded hover:bg-secondary transition text-[13px] text-left h-7 font-body text-charcoal"
            :class="activeLang === lang.code ? 'bg-primary/10 text-primary font-semibold' : ''"
            style="line-height:1;background:transparent;box-shadow:none;border:none;"
          >
            <span :class="`fi fi-${lang.code === 'en' ? 'gb' : 'al'}`" style="width: 1.1em; height: 1.1em;"></span>
            <span class="ml-1">{{ lang.code.toUpperCase() }}</span>
          </button>
        </div>
      </OverlayPanel>
      <Button label="Login" unstyled class="rounded-[8px] h-[40px] px-6 text-[14px] font-cta font-bold bg-white text-black border-2 border-primary hover:text-primary transition" />
      <Button label="Create Menu" unstyled class="rounded-[8px] h-[40px] px-6 text-[14px] font-cta font-bold bg-primary text-white border-2 border-primary hover:font-semibold hover:opacity-80 transition" />
    </div>
    <!-- Mobile Right Section: language switcher + hamburger, right-aligned -->
    <div class="flex items-center nav-desktop:hidden gap-1 flex-row-reverse">
      <button class="flex items-center justify-center w-9 h-9 rounded-full hover:bg-secondary transition ml-2 relative nav-desktop:hidden" @click="mobileOpen = !mobileOpen">
        <span class="sr-only">Toggle menu</span>
        <span :class="['block absolute h-0.5 w-6 bg-charcoal rounded transition-all duration-200', mobileOpen ? 'rotate-45 top-4' : 'top-2']"></span>
        <span :class="['block absolute h-0.5 w-6 bg-charcoal rounded transition-all duration-200', mobileOpen ? 'opacity-0' : 'top-4']"></span>
        <span :class="['block absolute h-0.5 w-6 bg-charcoal rounded transition-all duration-200', mobileOpen ? '-rotate-45 top-4' : 'top-6']"></span>
      </button>
      <button
        class="flex items-center gap-1 px-2 py-1 rounded hover:bg-secondary transition text-[13px] min-w-[48px] h-7 font-body text-charcoal nav-desktop:hidden"
        @click="(e) => toggleLangPanelMobile(e)"
        ref="langBtnMobile"
        style="line-height:1;background:transparent;box-shadow:none;border:none;"
      >
        <span :class="`fi fi-${activeLang === 'en' ? 'gb' : 'al'}`" style="width: 1.1em; height: 1.1em;"></span>
        <span class="font-medium ml-1">{{ activeLang === 'en' ? 'EN' : 'AL' }}</span>
        <i class="pi pi-chevron-down text-xs ml-1"></i>
      </button>
      <OverlayPanel ref="langPanelMobile" :dismissable="true" :showCloseIcon="false" class="lang-overlay-panel">
        <div class="flex flex-col min-w-[48px]">
          <button
            v-for="lang in languages"
            :key="lang.code"
            @click="() => selectLang(lang.code)"
            class="flex items-center gap-1 px-2 py-1 rounded hover:bg-secondary transition text-[13px] text-left h-7 font-body text-charcoal"
            :class="activeLang === lang.code ? 'bg-primary/10 text-primary font-semibold' : ''"
            style="line-height:1;background:transparent;box-shadow:none;border:none;"
          >
            <span :class="`fi fi-${lang.code === 'en' ? 'gb' : 'al'}`" style="width: 1.1em; height: 1.1em;"></span>
            <span class="ml-1">{{ lang.code.toUpperCase() }}</span>
          </button>
        </div>
      </OverlayPanel>
    </div>
    <!-- Hamburger Dropdown with overlay, close button, logo, slide-in, modern nav, and action buttons -->
    <div v-if="mobileOpen" class="fixed inset-0 bg-black/40 z-40" @click="handleBackdropClick"></div>
    <Transition
      enter-active-class="transition duration-300"
      enter-from-class="translate-x-full opacity-0"
      enter-to-class="translate-x-0 opacity-100"
      leave-active-class="transition duration-200"
      leave-from-class="translate-x-0 opacity-100"
      leave-to-class="translate-x-full opacity-0"
    >
      <div v-if="mobileOpen" class="fixed top-0 right-0 h-full w-[270px] max-w-[85vw] bg-white shadow-2xl rounded-l-2xl z-50 flex flex-col p-6 nav-desktop:hidden transform" tabindex="-1">
        <!-- Close button -->
        <button class="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white border border-secondary shadow hover:bg-primary/10 hover:text-primary text-xl text-charcoal focus:outline-none focus:ring-2 focus:ring-primary transition" @click="closeMenu" aria-label="Close menu">&times;</button>
        <!-- Logo -->
        <div class="mb-6 w-[87px] h-[25px]">
          <svg viewBox="0 0 228.02 64.92" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" style="width:100%;height:100%;display:block;" aria-label="Skanom Logo">
            <title>skanom-logo</title>
            <path d="M333.73,298.61a43.18,43.18,0,0,0-7.34-2.91,1.65,1.65,0,0,0-.32-.06l-.36-.07a1.76,1.76,0,0,0-.4-.18l-.4-.1a47.14,47.14,0,0,1-5.37-1.85,8.63,8.63,0,0,1-3.24-2.37,5.9,5.9,0,0,1-1.29-3.94v-1.85a5.76,5.76,0,0,1,2.15-4.79,9.8,9.8,0,0,1,6.14-1.69,7.28,7.28,0,0,1,4.9,1.81,11.74,11.74,0,0,1,3.26,5.35l8.33-3.86a18.52,18.52,0,0,0-3.26-6.71,13.54,13.54,0,0,0-5.45-4.11,19.4,19.4,0,0,0-7.5-1.36,22.63,22.63,0,0,0-9.55,1.83,13.35,13.35,0,0,0-6.06,5.37,16.5,16.5,0,0,0-2.09,8.52v1.61a15,15,0,0,0,2.13,8.51,13.4,13.4,0,0,0,5.17,4.64,46.84,46.84,0,0,0,7.86,2.82l.49.12.14.08.14.08q3.21,1,5.19,1.77a7.58,7.58,0,0,1,3.15,2.29,5.87,5.87,0,0,1,1.19,3.78v2.57a6,6,0,0,1-2.25,5,10,10,0,0,1-6.32,1.77,9.41,9.41,0,0,1-6-1.93,11.08,11.08,0,0,1-3.56-5.71l-8.72,3.82a16.73,16.73,0,0,0,3.41,7,15,15,0,0,0,6.1,4.28,23.18,23.18,0,0,0,8.5,1.45,23.6,23.6,0,0,0,9.79-1.83,13.46,13.46,0,0,0,6.18-5.37,16.24,16.24,0,0,0,2.13-8.53v-2.61a14.56,14.56,0,0,0-2-8.08A13.21,13.21,0,0,0,333.73,298.61Z" transform="translate(-304.44 -265.68)"></path>
            <polygon points="81.04 4.84 70.14 4.84 53.61 33.66 53.61 4.84 44.4 4.84 44.4 63.32 53.61 63.32 53.61 48.67 60.69 37.35 72.55 63.32 83.21 63.32 66.35 28.31 81.04 4.84"></polygon>
            <path d="M411.46,270.52,393.61,329h9.69l3-11h17.34l3,11h9.69l-17.86-58.47Zm-2.81,38.77L415,286l6.32,23.25Z" transform="translate(-304.44 -265.68)"></path>
            <polygon points="166.11 45.93 147.13 4.84 138.28 4.84 138.28 63.28 147.04 63.28 147.04 23.31 165.91 63.28 174.87 63.28 174.87 4.84 166.11 4.84 166.11 45.93"></polygon>
            <path d="M530.73,287.34a17.21,17.21,0,0,0,0-15,12,12,0,0,0-4.91-4.92,15.51,15.51,0,0,0-7.53-1.74h-19a15.49,15.49,0,0,0-7.51,1.74,12,12,0,0,0-4.93,4.92,17.21,17.21,0,0,0,0,15,12,12,0,0,0,4.93,4.93,15.48,15.48,0,0,0,7.51,1.73h19a15.51,15.51,0,0,0,7.53-1.73A12,12,0,0,0,530.73,287.34Zm-31.32-.8a8.38,8.38,0,0,1-3.77-.8,5.63,5.63,0,0,1-2.45-2.33,7.76,7.76,0,0,1,0-7.14,5.79,5.79,0,0,1,2.45-2.35,8.25,8.25,0,0,1,3.77-.81H518.2a8.16,8.16,0,0,1,3.73.81,5.79,5.79,0,0,1,2.45,2.35,7.76,7.76,0,0,1,0,7.14,5.63,5.63,0,0,1-2.45,2.33,8.29,8.29,0,0,1-3.73.8Z" transform="translate(-304.44 -265.68)"></path>
            <polygon points="214.33 33.08 204.35 53.01 194.46 33.08 186.77 33.08 186.77 64.92 193.6 64.92 193.6 44.04 201.83 60.21 206.87 60.21 215.16 43.5 215.16 64.92 221.93 64.92 221.93 33.08 214.33 33.08"></polygon>
          </svg>
        </div>
        <!-- Navigation links -->
        <nav class="flex flex-col gap-2 mt-4">
          <router-link
            v-for="item in navItems"
            :key="item.label"
            :to="item.to"
            class="block w-full text-left text-[16px] font-body text-charcoal px-3 py-2 rounded-lg hover:text-primary hover:bg-primary/5 transition"
            :class="{ 'font-bold border-l-4 border-primary bg-primary/5': route.path === item.to }"
            @click="closeMenu"
          >
            {{ item.label }}
          </router-link>
        </nav>
        <!-- Action buttons, spaced down from links -->
        <div class="w-full flex flex-col gap-2 mt-6">
          <Button label="Login" unstyled class="w-full whitespace-nowrap rounded-[8px] h-[40px] px-6 text-[14px] font-cta font-bold bg-white text-black border-2 border-primary hover:text-primary transition" />
          <Button label="Create Menu" unstyled class="w-full whitespace-nowrap rounded-[8px] h-[40px] px-6 text-[14px] font-cta font-bold bg-primary text-white border-2 border-primary hover:font-semibold hover:opacity-80 transition" />
        </div>
        <div class="flex-grow"></div>
        <div class="w-full text-center text-[13px] text-charcoal/50 mb-2 select-none">by Skanom.com</div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import OverlayPanel from 'primevue/overlaypanel';
import { useRoute } from 'vue-router';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'al', label: 'Albanian' }
];
const activeLang = ref('en');
const langPanel = ref();
const langBtnDesktop = ref();
const langBtnMobile = ref();
const mobileOpen = ref(false);
const route = useRoute();

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Features', to: '/features' },
  { label: 'Partnership', to: '/partnership' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Are you Hungry?', to: '/hungry' },
];

function toggleLangPanelDesktop(event: MouseEvent) {
  langPanel.value.toggle(event, langBtnDesktop.value);
}
function toggleLangPanelMobile(event: MouseEvent) {
  langPanel.value.toggle(event, langBtnMobile.value);
}
function selectLang(code: string) {
  activeLang.value = code;
  langPanel.value.hide();
}
function closeMenu() {
  mobileOpen.value = false;
}
function handleBackdropClick(e: Event) {
  if (e.target === e.currentTarget) closeMenu();
}
</script>

<style scoped>
nav {
  font-size: 1.2rem;
}
.lang-overlay-panel {
  border-radius: 0.25rem;
  box-shadow: none;
  border: none;
  padding: 0.01rem 0.01rem;
  background: #fff !important;
  min-width: 48px;
}
:deep(.p-overlaypanel-content) {
  background: #fff !important;
  border-radius: 0.25rem;
  box-shadow: none;
  border: none;
  padding: 0.01rem 0.01rem;
  min-width: 48px;
  font-size: 13px;
}
@keyframes fade-in {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.2s;
}
@media (min-width: 1125px) {
  .nav-desktop\:flex { display: flex !important; }
  .nav-desktop\:hidden { display: none !important; }
}
</style> 