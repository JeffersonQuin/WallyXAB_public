<template>
  <div class="page">
    <AppHeader />
    <main>
      <div v-show="activeView === 'inicio'">
        <HeroSection />
        <WeeklyCalendar />
        <RewardsSection />
        <AboutSection />
      </div>
      <div v-show="activeView === 'conocenos'">
        <ConocenosSection />
      </div>
      <div v-show="activeView === 'contactanos'">
        <ContactanosSection />
      </div>
    </main>
    <WhatsAppButton />
    <AppFooter />
  </div>
</template>

<script setup>
const activeView = ref('inicio')
provide('activeView', activeView)
</script>

<style>
:root {
  --surface: #fefae7;
  --surface-dim: #c2ae93;
  --surface-bright: #ffede2;
  --surface-container-lowest: #ffede2;
  --surface-container-low: #fcf3df;
  --surface-container: #f9edc8;
  --surface-container-high: #f5e6b0;
  --surface-container-highest: #efe0a0;
  --on-surface: #1d1c11;
  --on-surface-variant: #695684;
  --inverse-surface: #323125;
  --inverse-on-surface: #fefae7;
  --outline: #786791;
  --outline-variant: #d4c4b0;
  --surface-tint: #a0144f;
  --primary: #a0144f;
  --on-primary: #ffffff;
  --primary-container: #ffede2;
  --on-primary-container: #3f001b;
  --inverse-primary: #ffb1c2;
  --secondary: #005e64;
  --on-secondary: #ffffff;
  --secondary-container: #695684;
  --on-secondary-container: #ffffff;
  --tertiary: #8b4c11;
  --on-tertiary: #ffffff;
  --tertiary-container: #ebdba8;
  --on-tertiary-container: #2e1500;
  --error: #ba1a1a;
  --on-error: #ffffff;
  --error-container: #ffdad6;
  --on-error-container: #93000a;
  --primary-fixed: #ffd9e2;
  --primary-fixed-dim: #ffb1c2;
  --on-primary-fixed: #3f001b;
  --on-primary-fixed-variant: #79003a;
  --secondary-fixed: #b4eef0;
  --secondary-fixed-dim: #82d4d8;
  --on-secondary-fixed: #001c1e;
  --on-secondary-fixed-variant: #004447;
  --tertiary-fixed: #ffdcc4;
  --tertiary-fixed-dim: #ffb780;
  --on-tertiary-fixed: #2f1400;
  --on-tertiary-fixed-variant: #6f3800;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  background: var(--surface);
  color: var(--on-surface);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 700;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

::selection {
  background: var(--primary);
  color: var(--on-primary);
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
