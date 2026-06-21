<template>
  <footer class="relative mt-16" style="background:var(--st-dark);color:#fff">
    <div class="h-px" style="background:linear-gradient(to right,transparent,rgba(249,115,22,0.4),transparent)"></div>
    <div class="wrap" style="padding-top:40px;padding-bottom:50px">

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-12 mb-12">

        <!-- Brand -->
        <div class="col-span-2 sm:col-span-1">
          <div class="footer-logo mb-5">
            <img src="/logo.png" alt="Silva Transportes" class="footer-logo-img" />
          </div>
          <p class="text-sm leading-relaxed mb-4 max-w-[220px]" style="color:#a3a3a3">
            Intermediacao de transporte executivo corporativo. Motoristas qualificados, pontualidade garantida.
          </p>
          <div class="flex items-center gap-2">
            <span class="h-1.5 w-1.5 rounded-full animate-pulse" style="background:var(--st-orange)"></span>
            <span class="text-xs" style="color:#666666">Transporte Executivo · SP</span>
          </div>
        </div>

        <!-- Nav -->
        <div>
          <p class="text-[11px] font-bold uppercase tracking-[0.15em] mb-4" style="color:#666666">Navegacao</p>
          <ul class="space-y-2.5">
            <li v-for="l in navLinks" :key="l.to">
              <router-link :to="l.to" class="footer-link text-sm transition-colors">{{ l.label }}</router-link>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <p class="text-[11px] font-bold uppercase tracking-[0.15em] mb-4" style="color:#666666">Contato</p>
          <ul class="space-y-3">
            <li>
              <a href="https://wa.me/5511920158313" target="_blank" class="footer-link flex items-center gap-2 text-sm transition-colors">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" class="text-copper-400/70 shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374A9.86 9.86 0 012.157 12C2.16 6.55 6.595 2.116 12.047 2.116c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </li>
            <li>
              <a href="mailto:atendimentosilvatransportes@intermediacoesb2b.com.br" class="footer-link flex items-start gap-2 transition-colors" style="font-size:11.5px;line-height:1.5;word-break:break-all">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" class="text-copper-400/70" style="flex-shrink:0;margin-top:2px"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
                atendimentosilvatransportes@intermediacoesb2b.com.br
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/atendimentosilvatransportes/" target="_blank" class="footer-link flex items-center gap-2 text-sm transition-colors">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" class="text-copper-400/70 shrink-0"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                Instagram
              </a>
            </li>
            <li class="flex items-center gap-2 text-sm" style="color:#666666">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" class="text-copper-400/70 shrink-0"><circle cx="12" cy="11" r="3"/><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
              Sao Paulo, SP
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <p class="text-[11px] font-bold uppercase tracking-[0.15em] mb-4" style="color:#666666">Legal</p>
          <ul class="space-y-2.5">
            <li v-for="l in legalLinks" :key="l.to">
              <router-link :to="l.to" class="footer-link text-sm transition-colors">{{ l.label }}</router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div class="border-t border-white/6" style="margin-top:8px;padding-top:24px;padding-bottom:24px;display:flex;flex-direction:column;gap:6px">
        <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px">
          <p class="text-xs" style="color:#666666">Silva Transportes · silvatransportes.com.br · CNPJ 52.815.411/0001-39</p>
          <p class="text-xs" style="color:#666666">Intermediacao de Transporte Executivo Corporativo · Sao Paulo, SP</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/como-funciona', label: 'Como funciona' },
  { to: '/contato', label: 'Solicitar corrida' },
]
const legalLinks = [
  { to: '/termos', label: 'Termos de Uso' },
  { to: '/privacidade', label: 'Privacidade' },
]
</script>

<style scoped>
.footer-logo {
  display: flex;
  align-items: center;
}
.footer-logo-img {
  height: 46px;
  width: auto;
}
.footer-link { color: #a3a3a3; }
.footer-link:hover { color: #fff; }
</style>
