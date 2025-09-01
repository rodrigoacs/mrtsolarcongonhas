<template>
  <header
    class="header"
    :class="{ 'header-scrolled': isScrolled }"
  >
    <nav class="navbar">
      <a
        href="/"
        @click.prevent="scrollToSection('home')"
        class="logo-link"
      >
        <img
          class="logo"
          src="/logo-white.webp"
          alt="MRT Energia Solar - Início"
        />
      </a>

      <ul class="nav-links-desktop">
        <li><a
            href="/services"
            @click.prevent="scrollToSection('services')"
          >SERVIÇOS</a></li>
        <li><a
            href="/about"
            @click.prevent="scrollToSection('about')"
          >QUEM SOMOS</a></li>
        <li><a
            href="/clients"
            @click.prevent="scrollToSection('clients')"
          >CLIENTES | PARCEIROS</a></li>
        <li>
          <a
            href="/contact"
            @click.prevent="scrollToSection('contact')"
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
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
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
            href="/services"
            @click.prevent="handleMobileLinkClick('services')"
          >SERVIÇOS</a></li>
        <li><a
            href="/about"
            @click.prevent="handleMobileLinkClick('about')"
          >QUEM SOMOS</a></li>
        <li><a
            href="/clients"
            @click.prevent="handleMobileLinkClick('clients')"
          >CLIENTES | PARCEIROS</a></li>
        <li><a
            href="/contact"
            @click.prevent="handleMobileLinkClick('contact')"
          >CONTATO</a></li>
      </ul>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

const isMobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'instant' })

    const path = sectionId === 'home' ? '/' : `/${sectionId}`
    history.pushState({}, '', path)
  }
}

const handleMobileLinkClick = (sectionId) => {
  closeMobileMenu()
  scrollToSection(sectionId)
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
  z-index: 1001;
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
  background: rgba(0, 17, 46, 0.85);
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
  transition: height 0.3s ease;
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

.btn-contact-link {
  padding-bottom: 0 !important;
}

.btn-contact-link::after {
  display: none !important;
}

.nav-links-desktop a:not(.logo-link):not(.btn-contact-link) {
  padding-bottom: 6px;
}

.nav-links-desktop a:not(.logo-link):not(.btn-contact-link)::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--dark-orange);
  transition: width 0.3s ease;
}

.nav-links-desktop a:not(.logo-link):not(.btn-contact-link):hover {
  color: var(--dark-orange);
}

.nav-links-desktop a:not(.logo-link):not(.btn-contact-link):hover::after {
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

.hamburger-button,
.mobile-menu-overlay {
  display: none;
}

@media (max-width: 992px) {
  .nav-links-desktop {
    display: none;
  }

  .hamburger-button {
    display: inline-block;
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 15px;
    z-index: 1002;
  }

  .hamburger-box {
    width: 30px;
    height: 24px;
    display: inline-block;
    position: relative;
  }

  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 100%;
    height: 3px;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    transition: transform 0.25s ease-in-out;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    transform: translateY(-50%);
  }

  .hamburger-inner::before,
  .hamburger-inner::after {
    content: "";
    display: block;
  }

  .hamburger-inner::before {
    top: -10px;
  }

  .hamburger-inner::after {
    bottom: -10px;
  }

  .hamburger-button.is-active .hamburger-inner {
    transform: rotate(45deg);
  }

  .hamburger-button.is-active .hamburger-inner::before {
    transform: rotate(90deg) translate(-10px, 0px);
    opacity: 0;
  }

  .hamburger-button.is-active .hamburger-inner::after {
    transform: rotate(-90deg) translate(10px, 0px);
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
    margin-bottom: 2.5rem;
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

  .logo {
    height: 50px;
  }
}
</style>