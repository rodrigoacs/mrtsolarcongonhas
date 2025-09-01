<template>
  <header
    class="header"
    :class="{ 'header-scrolled': isScrolled }"
  >
    <nav class="navbar">
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

      <ul class="nav-links-desktop">
        <li><a href="#services">SERVIÇOS</a></li>
        <li><a href="#about">QUEM SOMOS</a></li>
        <li><a href="#clients">CLIENTES | PARCEIROS</a></li>
        <li>
          <a
            href="#contact"
            class="btn-contact-link"
          >
            <button class="btn-contact">CONTATO</button>
          </a>
        </li>
      </ul>

      <button
        class="hamburger-button"
        @click="toggleMobileMenu"
        :class="{ 'is-active': isMobileMenuOpen }"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  </header>

  <Transition name="mobile-menu-fade">
    <div
      v-if="isMobileMenuOpen"
      class="mobile-menu-overlay"
    >
      <ul class="mobile-nav-links">
        <li><a
            href="#services"
            @click="closeMobileMenu"
          >SERVIÇOS</a></li>
        <li><a
            href="#about"
            @click="closeMobileMenu"
          >QUEM SOMOS</a></li>
        <li><a
            href="#clients"
            @click="closeMobileMenu"
          >CLIENTES | PARCEIROS</a></li>
        <li><a
            href="#contact"
            @click="closeMobileMenu"
          >CONTATO</a></li>
      </ul>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

const isMobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
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

.navbar {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  height: 80px;
  cursor: pointer;
  vertical-align: middle;
}

.nav-links-desktop {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 3rem;
  margin: 0;
  padding: 0;
}

.nav-links-desktop a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
  transition: color 0.3s ease;
  position: relative;
}

.nav-links-desktop a:not(.btn-contact-link) {
  padding-bottom: 6px;
}

.nav-links-desktop a:not(.btn-contact-link)::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--dark-orange);
  transition: width 0.3s ease;
}

.nav-links-desktop a:not(.btn-contact-link):hover {
  color: var(--dark-orange);
}

.nav-links-desktop a:not(.btn-contact-link):hover::after {
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
  transform: scale(1.05);
}

.hamburger-button {
  display: none;
}

.mobile-menu-overlay {
  display: none;
}

@media (max-width: 992px) {

  .nav-links-desktop {
    display: none;
  }

  .hamburger-button {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 21px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1001;
  }

  .hamburger-button span {
    width: 30px;
    height: 3px;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  .hamburger-button.is-active span:nth-child(1) {
    transform: rotate(45deg);
  }

  .hamburger-button.is-active span:nth-child(2) {
    opacity: 0;
    transform: translateX(20px);
  }

  .hamburger-button.is-active span:nth-child(3) {
    transform: rotate(-45deg);
  }

  .mobile-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 17, 46, 0.98);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .mobile-nav-links {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
  }

  .mobile-nav-links li {
    margin-bottom: 2rem;
  }

  .mobile-nav-links a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 700;
    transition: color 0.3s ease;
  }

  .mobile-nav-links a:hover {
    color: var(--dark-orange);
  }

  .mobile-menu-fade-enter-active,
  .mobile-menu-fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .mobile-menu-fade-enter-from,
  .mobile-menu-fade-leave-to {
    opacity: 0;
  }
}
</style>