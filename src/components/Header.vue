<template>
  <!-- Header flutuante — pill card centrado, fixo no topo -->
  <header class="floating-header">
    <div class="header-pill" :class="{ 'header-pill--scrolled': scrolled }">

      <!-- Logo -->
      <router-link to="/" class="logo-area">
        <img src="/logo.png" alt="WFM Transportes" class="logo-img" />
      </router-link>

      <!-- Nav pills -->
      <nav class="nav-group" :class="{ 'nav-group--open': open }">
        <router-link
          v-for="link in links" :key="link.to"
          :to="link.to"
          class="nav-link"
          :class="{ 'nav-link--active': $route.path.startsWith(link.to), 'nav-link--light': !scrolled }"
          @click="open = false"
        >{{ link.label }}</router-link>
      </nav>

      <!-- Ações direita -->
      <div class="header-actions">
        <router-link to="/contato" class="cta-pill">
          Solicitar proposta
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m0 0-7-7m7 7-7 7"/></svg>
        </router-link>

        <!-- Hamburger mobile -->
        <button @click="open = !open" class="hamburger" aria-label="Menu">
          <svg v-if="!open" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
    </div>

    <!-- Mobile dropdown -->
    <Transition name="dropdown">
      <div v-if="open" class="mobile-menu">
        <router-link
          v-for="link in allLinks" :key="link.to"
          :to="link.to"
          class="mobile-link"
          @click="open = false"
        >
          <span class="mobile-dot"></span>
          {{ link.label }}
        </router-link>
        <div class="mobile-cta-wrap">
          <router-link to="/contato" class="mobile-cta" @click="open=false">
            Solicitar proposta
          </router-link>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const open = ref(false)
const scrolled = ref(false)

const onScroll = () => { scrolled.value = window.scrollY > 60 }
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const links = [
  { to: '/sobre', label: 'Sobre' },
  { to: '/como-funciona', label: 'Como funciona' },
  { to: '/planos', label: 'Planos' },
]
const allLinks = [{ to: '/', label: 'Início' }, ...links]
</script>

<style scoped>
/* ─── Container fixo ─── */
.floating-header {
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 56px);
  max-width: 1225px;
  z-index: 100;
}

/* ─── Pill principal ─── */
.header-pill {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 7px 7px 7px 20px;
  border-radius: 100px;
  background: rgba(6,5,12,0.25);
  border: 1px solid rgba(255,255,255,0.12);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 2px 16px rgba(0,0,0,0.2);
  transition: background .3s ease, border-color .3s ease, box-shadow .3s ease;
}
.header-pill--scrolled {
  background: rgba(255,255,255,0.94);
  border: 1px solid #E5E5E5;
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-shadow:
    0 4px 24px rgba(0,0,0,0.08),
    0 1px 0 rgba(255,255,255,0.9) inset,
    0 0 0 1px rgba(249,115,22,0.04);
}

/* ─── Logo ─── */
.logo-area {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;
}
.logo-img {
  height: 32px;
  width: auto;
  mix-blend-mode: multiply;
  transition: filter .25s;
}
.header-pill:not(.header-pill--scrolled) .logo-img {
  mix-blend-mode: normal;
  filter: brightness(0) invert(1);
}
.header-pill:not(.header-pill--scrolled) .hamburger {
  background: rgba(255,255,255,0.12);
  border-color: rgba(255,255,255,0.2);
  color: rgba(255,255,255,0.8);
}

/* ─── Grupo nav ─── */
.nav-group {
  display: none;
  align-items: center;
  gap: 4px;
}
@media (min-width: 768px) { .nav-group { display: flex; } }

.nav-link {
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 500;
  color: #888888;
  letter-spacing: .01em;
  transition: color .25s;
  white-space: nowrap;
}
.nav-link:hover { color: #1C1C1E; }
.nav-link--active { color: #1C1C1E; }
.nav-link--light { color: rgba(255,255,255,0.75); }
.nav-link--light:hover { color: #FFFFFF; }
.nav-link--light.nav-link--active { color: #FFFFFF; }

/* ─── Ações ─── */
.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

/* ─── CTA pill — com shimmer animado ─── */
.cta-pill {
  display: none;
  align-items: center;
  gap: 7px;
  padding: 11px 22px;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .01em;
  background: #F97316;
  color: #fff;
  transition: background .18s, transform .18s, box-shadow .18s;
  box-shadow: 0 2px 16px rgba(249,115,22,0.35);
  white-space: nowrap;
  position: relative;
  overflow: hidden;
}
@media (min-width: 540px) { .cta-pill { display: inline-flex; } }
.cta-pill:hover {
  background: #EA580C;
  transform: translateY(-1px);
  box-shadow: 0 4px 20px rgba(249,115,22,0.45);
}
.cta-pill::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.35) 50%, transparent 65%);
  transform: translateX(-120%);
  animation: pill-sweep 3s ease-in-out infinite;
  pointer-events: none;
}
@keyframes pill-sweep {
  0%, 25%  { transform: translateX(-120%); }
  65%, 100% { transform: translateX(120%); }
}

/* ─── Hamburger ─── */
.hamburger {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px; height: 34px;
  border-radius: 50%;
  background: rgba(0,0,0,0.05);
  border: 1px solid #E5E5E5;
  color: #666666;
  transition: background .18s, color .18s;
  cursor: pointer;
}
@media (min-width: 768px) { .hamburger { display: none; } }
.hamburger:hover { background: rgba(0,0,0,0.08); color: #1C1C1E; }

/* ─── Mobile menu ─── */
.mobile-menu {
  margin-top: 8px;
  padding: 12px;
  border-radius: 20px;
  background: rgba(255,255,255,0.98);
  border: 1px solid #E5E5E5;
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}
.mobile-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 14px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  color: #666666;
  transition: background .15s, color .15s;
}
.mobile-link:hover { background: rgba(0,0,0,0.04); color: #1C1C1E; }
.mobile-dot {
  display: inline-block;
  width: 5px; height: 5px;
  border-radius: 50%;
  background: rgba(249,115,22,0.5);
  flex-shrink: 0;
}
.mobile-cta-wrap { padding: 8px 4px 4px; border-top: 1px solid #E5E5E5; margin-top: 8px; }
.mobile-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 700;
  background: #F97316;
  color: #fff;
  box-shadow: 0 2px 12px rgba(249,115,22,0.25);
}

/* ─── Animação dropdown ─── */
.dropdown-enter-active,
.dropdown-leave-active { transition: opacity .2s, transform .2s; }
.dropdown-enter-from,
.dropdown-leave-to { opacity: 0; transform: translateY(-8px) scale(.98); }
</style>
