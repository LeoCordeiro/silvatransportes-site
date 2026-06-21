<template>
  <div class="app-root">

    <!-- Background fixo -->
    <div class="site-beam-grid" aria-hidden="true">
      <div class="sbg-col"><span class="sbeam sb1"></span></div>
      <div class="sbg-col"><span class="sbeam sb2"></span></div>
      <div class="sbg-col"><span class="sbeam sb3"></span></div>
      <div class="sbg-col"><span class="sbeam sb4"></span></div>
      <div class="sbg-col"></div>
      <div class="sbg-col"></div>
    </div>

    <!-- Tracos de luz -->
    <div class="site-rain" aria-hidden="true">
      <span></span><span></span><span></span><span></span>
      <span></span><span></span><span></span><span></span>
    </div>

    <div class="site-glow-top" aria-hidden="true"></div>
    <div class="site-glow-bl" aria-hidden="true"></div>
    <div class="site-vignette" aria-hidden="true"></div>

    <Header />

    <main class="app-main">
      <router-view v-slot="{ Component, route }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </router-view>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style>
/* ─── Paleta Silva Transportes ─── */
:root {
  --st-dark: #1C1C1E;
  --st-orange: #F97316;
  --st-orange-dark: #EA580C;
  --st-gray-light: #F5F5F5;
  --st-white: #FFFFFF;
  --st-orange-bg: #FEF0E7;
}

/* ─── Reset global ─── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html, body {
  background: var(--st-white);
  color: var(--st-dark);
  font-family: 'Montserrat', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-optical-sizing: auto;
  overflow-x: hidden;
}

a { text-decoration: none; color: inherit; }

/* ─── App root ─── */
.app-root {
  min-height: 100vh;
  position: relative;
  background:
    radial-gradient(ellipse 100% 55% at 50% 0%, rgba(249,115,22,0.07) 0%, transparent 60%),
    radial-gradient(ellipse 55% 40% at 96% 40%, rgba(249,115,22,0.04) 0%, transparent 55%),
    #FFFFFF;
}

/* ─── Grade de colunas fixa ─── */
.site-beam-grid {
  position: fixed;
  top: 0; bottom: 0;
  left: 50%; transform: translateX(-50%);
  width: 100%; max-width: 1280px;
  display: flex;
  pointer-events: none;
  z-index: 0;
}
.sbg-col {
  flex: 1;
  border-left: 1px solid rgba(0,0,0,0.04);
  height: 100%;
  position: relative;
  overflow: hidden;
}
.sbg-col:last-child { border-right: 1px solid rgba(0,0,0,0.04); }

.sbeam {
  position: absolute; top: 0; left: -0.5px;
  width: 1px; height: 280px;
  background: linear-gradient(to bottom, transparent 0%, rgba(249,115,22,0.5) 50%, transparent 100%);
  animation: site-beam-fall linear infinite; opacity: 0;
}
.sb1 { animation-duration: 7s;   animation-delay: 0s; }
.sb2 { animation-duration: 9.5s; animation-delay: 2.5s; }
.sb3 { animation-duration: 6.5s; animation-delay: 4.2s; }
.sb4 { animation-duration: 8.5s; animation-delay: 1.2s; }
@keyframes site-beam-fall {
  0%   { transform: translateY(-280px); opacity: 0; }
  8%   { opacity: 1; }
  90%  { opacity: 0.85; }
  100% { transform: translateY(110vh); opacity: 0; }
}

/* ─── Traços de luz horizontais ─── */
.site-rain {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}
.site-rain span {
  position: absolute;
  left: -120px;
  height: 1px;
  background: linear-gradient(to right, transparent 0%, rgba(249,115,22,0.18) 50%, transparent 100%);
  animation: rain-fall linear infinite;
  opacity: 0;
}
@keyframes rain-fall {
  0%   { transform: translateX(-120px); opacity: 0; }
  12%  { opacity: 1; }
  88%  { opacity: 0.6; }
  100% { transform: translateX(110vw); opacity: 0; }
}
/* 8 traços esparsas e sutis */
.site-rain span:nth-child(1)  { top: 8%;  width: 60px;  animation-duration: 3.8s; animation-delay: 0s;   }
.site-rain span:nth-child(2)  { top: 21%; width: 45px;  animation-duration: 5.2s; animation-delay: 2.1s; }
.site-rain span:nth-child(3)  { top: 35%; width: 70px;  animation-duration: 4.4s; animation-delay: 0.8s; }
.site-rain span:nth-child(4)  { top: 50%; width: 50px;  animation-duration: 6.0s; animation-delay: 3.4s; }
.site-rain span:nth-child(5)  { top: 63%; width: 65px;  animation-duration: 4.8s; animation-delay: 1.5s; }
.site-rain span:nth-child(6)  { top: 76%; width: 55px;  animation-duration: 3.6s; animation-delay: 4.2s; }
.site-rain span:nth-child(7)  { top: 87%; width: 75px;  animation-duration: 5.5s; animation-delay: 0.4s; }
.site-rain span:nth-child(8)  { top: 94%; width: 48px;  animation-duration: 4.1s; animation-delay: 2.8s; }

/* ─── Glow laranja topo ─── */
.site-glow-top {
  position: fixed;
  top: -220px; left: 50%;
  transform: translateX(-50%);
  width: 1000px; height: 640px;
  background: radial-gradient(ellipse at center top, rgba(249,115,22,0.1) 0%, transparent 60%);
  pointer-events: none; z-index: 0;
}
.site-glow-bl {
  position: fixed;
  bottom: -80px; left: -80px;
  width: 480px; height: 480px;
  background: radial-gradient(circle, rgba(234,88,12,0.06) 0%, transparent 65%);
  pointer-events: none; z-index: 0;
}

/* ─── Vinheta lateral fixa ─── */
.site-vignette {
  position: fixed;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0,0,0,0.03) 0%,
    rgba(0,0,0,0.01) 10%,
    transparent 22%,
    transparent 78%,
    rgba(0,0,0,0.01) 90%,
    rgba(0,0,0,0.03) 100%
  );
  pointer-events: none;
  z-index: 0;
}

/* ─── App main ─── */
.app-main {
  position: relative;
  padding-top: 84px;
}

/* ─── Page transitions ─── */
.page-enter-active { transition: opacity .28s ease, transform .28s cubic-bezier(0.22,1,0.36,1); }
.page-leave-active  { transition: opacity .16s ease; }
.page-enter-from    { opacity: 0; transform: translateY(10px); }
.page-leave-to      { opacity: 0; }

/* ─── Scrollbar ─── */
::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: #F5F5F5; }
::-webkit-scrollbar-thumb { background: rgba(249,115,22,0.3); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: rgba(249,115,22,0.5); }
</style>
