<template>
  <header class="header">
    <div class="header-inner">
      <div class="logo">
        <img src="/images/Logo.jpg" alt="Logo" class="logo-image" />
        <span class="logo-text">Wally X-AB</span>
      </div>
      <nav class="nav">
        <a href="#" class="nav-link" :class="{ active: activeView === 'inicio' }" @click.prevent="activeView = 'inicio'; menuOpen = false">Inicio</a>
        <a href="#" class="nav-link" :class="{ active: activeView === 'conocenos' }" @click.prevent="activeView = 'conocenos'; menuOpen = false">Conócenos</a>
        <a href="#" class="nav-link" :class="{ active: activeView === 'contactanos' }" @click.prevent="activeView = 'contactanos'; menuOpen = false">Contáctanos</a>
      </nav>
      <a href="#" class="btn-whatsapp-nav">
        <span class="icon">&#9990;</span>
        Reserve via WhatsApp
      </a>
      <button class="menu-toggle" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Menú">
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- Menú móvil desplegable -->
    <nav class="mobile-nav" :class="{ active: menuOpen }">
      <a href="#" class="mobile-nav-link" :class="{ active: activeView === 'inicio' }" @click.prevent="activeView = 'inicio'; menuOpen = false">Inicio</a>
      <a href="#" class="mobile-nav-link" :class="{ active: activeView === 'conocenos' }" @click.prevent="activeView = 'conocenos'; menuOpen = false">Conócenos</a>
      <a href="#" class="mobile-nav-link" :class="{ active: activeView === 'contactanos' }" @click.prevent="activeView = 'contactanos'; menuOpen = false">Contáctanos</a>
      <a href="#" class="mobile-nav-link btn-whatsapp-mobile">
        <span class="icon">&#9990;</span>
        Reserve via WhatsApp
      </a>
    </nav>
  </header>
</template>

<script setup>
const menuOpen = ref(false)
const activeView = inject('activeView')
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(254, 250, 231, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--outline-variant);
}
.header-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  height: 72px;
  display: flex;
  align-items: center;
  gap: 40px;
}
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}
.logo-image {
  height: 42px;
  width: auto;
  object-fit: contain;
  display: block;
}
.logo-text {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 800;
  font-size: 20px;
  font-style: italic;
  color: #7e163d;
  letter-spacing: 0.75px;
  text-transform: capitalize;
  line-height: 1;
}
.nav {
  display: flex;
  gap: 24px;
  flex: 1;
}
.nav-link {
  font-size: 14px;
  font-weight: 600;
  color: var(--on-surface-variant);
  text-decoration: none;
  padding: 8px 0;
  position: relative;
  transition: color 0.2s;
}
.nav-link:hover,
.nav-link.active {
  color: var(--primary);
}
.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--primary);
  border-radius: 1px;
}
.btn-whatsapp-nav {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--primary);
  color: white;
  padding: 10px 20px;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.25s, box-shadow 0.25s;
}
.btn-whatsapp-nav:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(160, 20, 79, 0.25);
}
.btn-whatsapp-nav .icon {
  font-size: 18px;
}
.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.menu-toggle span {
  width: 24px;
  height: 2px;
  background: var(--on-surface);
  border-radius: 2px;
  transition: 0.3s;
}
/* Menú móvil */
.mobile-nav {
  display: none;
  flex-direction: column;
  background: rgba(254, 250, 231, 0.97);
  border-top: 1px solid var(--outline-variant);
  padding: 12px 24px 20px;
  gap: 4px;
}
.mobile-nav.active {
  display: flex;
}
.mobile-nav-link {
  font-size: 16px;
  font-weight: 600;
  color: var(--on-surface-variant);
  text-decoration: none;
  padding: 14px 0;
  border-bottom: 1px solid var(--outline-variant);
  transition: color 0.2s;
}
.mobile-nav-link:last-child {
  border-bottom: none;
}
.mobile-nav-link:hover,
.mobile-nav-link.active {
  color: var(--primary);
}
.btn-whatsapp-mobile {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  background: var(--primary);
  color: white !important;
  padding: 12px 20px;
  border-radius: 9999px;
  justify-content: center;
  font-weight: 700;
}
.btn-whatsapp-mobile .icon {
  font-size: 18px;
}

@media (max-width: 768px) {
  .nav,
  .btn-whatsapp-nav {
    display: none;
  }
  .menu-toggle {
    display: flex;
    margin-left: auto;
  }
  /* Animación X al abrir */
  .menu-toggle.open span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }
  .menu-toggle.open span:nth-child(2) {
    opacity: 0;
  }
  .menu-toggle.open span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }
}
</style>
