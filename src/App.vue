<template>
  <Header />
  <Home />
  <StatsSection />
  <ServicesSection id="services""/>
</template>

<script setup>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import StatsSection from './components/StatsSection.vue'
import ServicesSection from './components/ServicesSection.vue' // 1. Importe o novo componente
</script>

<style>
/* Seus estilos globais */
body {
  margin: 0;
  background-color: #00112e;
  font-family: sans-serif;
}
</style>