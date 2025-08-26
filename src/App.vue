<template>
  <Header />
  <Home />
  <StatsSection />
  <ServicesSection id="services" />
  <AboutSection id="about" />
</template>

<script setup>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import StatsSection from './components/StatsSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import AboutSection from './components/AboutSection.vue'

</script>

<style>
body {
  margin: 0;
  background-color: #00112e;
  font-family: sans-serif;
}

section[id] {
  /* O padding do seu header é 20px (cima/baixo) e a logo tem 80px de altura.
     Total: 20 + 80 + 20 = 120px. Usamos um valor um pouco maior. */
  scroll-margin-top: 120px;
}
</style>