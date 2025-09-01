<template>
  <Header />
  <main>
    <Home id="home" />
    <StatsSection />
    <ServicesSection id="services" />
    <AboutSection id="about" />
    <ClientsSection id="clients" />
    <ContactSection id="contact" />
  </main>
  <Footer />
</template>

<script setup>
import { onMounted } from 'vue'
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import StatsSection from './components/StatsSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import AboutSection from './components/AboutSection.vue'
import ClientsSection from './components/ClientsSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'

onMounted(() => {
  const path = window.location.pathname.substring(1)
  if (path) {
    const section = document.getElementById(path)
    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: 'instant' })
      }, 100)
    }
  }
})
</script>

<style>
body {
  margin: 0;
  background-color: var(--dark-blue);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

section[id] {
  scroll-margin-top: 120px;
}
</style>