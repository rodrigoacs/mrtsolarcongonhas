<template>
  <header
    class="header"
    :class="{ 'header-scrolled': isScrolled }"
     v-motion
    :initial="{ opacity: 0, y: 0 }"
    :visibleOnce="{
      opacity: 1,
      y: 0,
      transition: {
        duration: 400,
        ease: 'easeOut',
      },
    }"
  >
    <nav>
      <ul class="nav-links">
        <li>
          <a
            href="#"
            class="logo-link"
          >
            <img
              class="logo"
              src="/logo-white.webp"
              alt="MRT Energia Solar - Início"
            />
          </a>
        </li>
        <li><a href="#about">QUEM SOMOS</a></li>
        <li><a href="#services">SERVIÇOS</a></li>
        <li><a href="#">CLIENTES | PARCEIROS</a></li>
        <li><button class="btn-contact">CONTATO</button></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  width: 100%;
  box-sizing: border-box;
  background: transparent;
  backdrop-filter: blur(0px);
  transition: background-color 0.4s ease, backdrop-filter 0.4s ease;
}

.header.header-scrolled {
  background: rgba(0, 17, 46, 0.8);
  backdrop-filter: blur(5px);
}

.logo-link {
  display: inline-block;
  padding-bottom: 0;
}

.logo {
  height: 80px;
  cursor: pointer;
  vertical-align: middle;
}

.nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 4rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
  transition: color 0.3s ease;
  position: relative;
}

.nav-links a:not(.logo-link) {
  padding-bottom: 6px;
}

.nav-links a:not(.logo-link)::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--dark-orange);
  transition: width 0.3s ease;
}

.nav-links a:not(.logo-link):hover {
  color: var(--dark-orange);
}

.nav-links a:not(.logo-link):hover::after {
  width: 100%;
}

.btn-contact {
  background-image: linear-gradient(to right, var(--dark-orange), var(--light-orange));
  color: var(--dark-blue);
  border: none;
  padding: 10px 25px;
  border-radius: 25px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.btn-contact:hover {
  background-image: linear-gradient(to left, var(--dark-orange), var(--light-orange));
  transform: scale(1.05);
}
</style>