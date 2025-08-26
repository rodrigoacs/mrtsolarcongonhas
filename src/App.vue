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
</style>