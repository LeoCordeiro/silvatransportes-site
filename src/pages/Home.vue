<template>
  <div>

    <!-- ─── HERO ─── -->
    <section class="hero">

      <!-- Fundo animado: video + bokeh CSS como fallback -->
      <div class="hero-bg" aria-hidden="true">
        <video class="hero-bg-video" autoplay muted loop playsinline>
          <source src="/hero-highway.mp4" type="video/mp4">
        </video>
        <div class="hero-bokeh">
          <span class="bk1"></span><span class="bk2"></span>
          <span class="bk3"></span><span class="bk4"></span>
          <span class="bk5"></span><span class="bk6"></span>
          <span class="bk7"></span><span class="bk8"></span>
          <span class="bk9"></span><span class="bk10"></span>
          <span class="bk11"></span><span class="bk12"></span>
        </div>
        <div class="hero-texture"></div>
        <div class="hero-noise"></div>
        <div class="hero-glow-blob"></div>
        <div class="hero-bg-overlay"></div>
        <div class="hero-bg-fade"></div>
      </div>

      <div class="wrap" style="position:relative;z-index:1">

        <!-- Eyebrow -->
        <div class="hero-anim hero-anim-1" style="text-align:center;margin-bottom:1.75rem">
          <div class="hero-eyebrow">
            <span class="hero-eyebrow-dot"></span>
            <span>Transporte Executivo Corporativo</span>
          </div>
        </div>

        <!-- H1 -->
        <div class="hero-anim hero-anim-2" style="text-align:center">
          <h1 class="hero-h1">
            <span class="hero-h1-line">Sua empresa com o transporte</span>
            <span class="hero-h1-grad">que ela merece.</span>
          </h1>
        </div>

        <!-- Subtitulo -->
        <div class="hero-anim hero-anim-3" style="text-align:center;margin-top:2.8rem">
          <p class="hero-sub">
            Intermediamos o transporte executivo da sua equipe --
            <strong style="color:#FFFFFF;font-weight:600">motoristas qualificados, pontualidade garantida</strong>
            e gestao centralizada em um unico contrato.
          </p>
        </div>

        <!-- CTAs -->
        <div class="hero-anim hero-anim-4" style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-top:2.5rem">
          <a href="#solicitar" class="btn-cta-hero" @click.prevent="scrollToForm">
            <span class="hcb-border" aria-hidden="true"><span class="hcb-spin"></span></span>
            <span class="hcb-particles" aria-hidden="true"><i class="p1"></i><i class="p2"></i><i class="p3"></i><i class="p4"></i><i class="p5"></i></span>
            <span class="hcb-label">SOLICITAR CORRIDA <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m0 0-7-7m7 7-7 7"/></svg></span>
          </a>
          <router-link to="/como-funciona" class="btn-ghost">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" opacity=".3" fill="#F97316"/><path d="m10 8 5 4-5 4V8z" fill="#F97316"/></svg>
            Como funciona
          </router-link>
        </div>

        <!-- Trust items -->
        <div class="hero-anim hero-anim-5" style="display:flex;flex-wrap:wrap;gap:20px;justify-content:center;margin-top:1.75rem">
          <span v-for="t in trusts" :key="t" class="trust-item">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--st-orange)" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
            {{ t }}
          </span>
        </div>

      </div>

      <!-- Scroll hint -->
      <div class="hero-scroll" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>
      </div>
    </section>

    <!-- ─── SOLICITAR CORRIDA ─── -->
    <section id="solicitar" class="ride-section" v-reveal>
      <div class="wrap">

        <!-- Cabecalho -->
        <div style="margin-bottom:28px">
          <div class="ride-eyebrow-row">
            <span class="ride-eyebrow">Corrida avulsa</span>
            <div class="ride-eyebrow-line"></div>
          </div>
          <h2 class="ride-title">Solicite sua corrida agora</h2>
          <p class="ride-subtitle">Informe os detalhes da viagem e nossa equipe entrara em contato em ate 30 minutos para confirmar.</p>
        </div>

        <!-- Indicador de progresso -->
        <div class="ride-progress">
          <div class="ride-progress-step" :class="{ 'rps-active': rideStep === 1, 'rps-done': rideStep > 1 }">
            <div class="rps-dot">
              <svg v-if="rideStep > 1" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span v-else>1</span>
            </div>
            <span class="rps-label">Detalhes</span>
          </div>
          <div class="ride-progress-line" :class="{ 'rpl-active': rideStep > 1 }"></div>
          <div class="ride-progress-step" :class="{ 'rps-active': rideStep === 2, 'rps-done': rideStep > 2 }">
            <div class="rps-dot">
              <svg v-if="rideStep > 2" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span v-else>2</span>
            </div>
            <span class="rps-label">Veiculo</span>
          </div>
          <div class="ride-progress-line" :class="{ 'rpl-active': rideStep > 2 }"></div>
          <div class="ride-progress-step" :class="{ 'rps-active': rideStep === 3 }">
            <div class="rps-dot"><span>3</span></div>
            <span class="rps-label">Contato</span>
          </div>
        </div>

        <!-- Card principal -->
        <div class="ride-card">

          <!-- Sucesso -->
          <div v-if="rideSubmitted" class="ride-success">
            <div class="ride-success-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--st-orange)" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h3 style="font-size:20px;font-weight:700;color:var(--st-dark);margin-bottom:8px">Solicitacao recebida!</h3>
            <p style="font-size:14px;color:#666666;max-width:400px;margin:0 auto 24px;line-height:1.65">Nossa equipe entrara em contato em ate 30 minutos para confirmar sua corrida.</p>
            <button type="button" @click="resetRide" class="ride-btn-reset">Fazer nova solicitacao</button>
          </div>

          <!-- PASSO 1 — Detalhes da viagem -->
          <div v-else-if="rideStep === 1">
            <h3 class="ride-step-title">Detalhes da viagem</h3>
            <div class="ride-form-grid">
              <div class="ride-field ride-field-full">
                <label class="ride-label">Origem</label>
                <input v-model="rideForm.origem" type="text" placeholder="Ex: Aeroporto de Guarulhos -- GRU" class="ride-input" />
              </div>
              <div class="ride-field ride-field-full">
                <label class="ride-label">Destino</label>
                <input v-model="rideForm.destino" type="text" placeholder="Ex: Av. Paulista, 1000 -- Sao Paulo" class="ride-input" />
              </div>
              <div class="ride-field">
                <label class="ride-label">Data</label>
                <input v-model="rideForm.data" type="date" class="ride-input" />
              </div>
              <div class="ride-field">
                <label class="ride-label">Horario</label>
                <input v-model="rideForm.horario" type="time" class="ride-input" />
              </div>
              <div class="ride-field ride-field-full">
                <label class="ride-label">Passageiros</label>
                <div class="pax-row">
                  <button v-for="n in [1,2,3,4]" :key="n" type="button" class="pax-btn" :class="{ 'pax-btn--active': rideForm.passageiros === n }" @click="rideForm.passageiros = n">{{ n }}</button>
                </div>
              </div>
            </div>
            <div class="ride-actions">
              <button type="button" @click="goStep(2)" class="ride-btn-next" :disabled="!rideForm.origem || !rideForm.destino">
                Proximo
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14m0 0-7-7m7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- PASSO 2 — Categoria do veiculo -->
          <div v-else-if="rideStep === 2">
            <h3 class="ride-step-title">Categoria do veiculo</h3>
            <div class="cat-grid">
              <button
                v-for="cat in categories"
                :key="cat.name"
                type="button"
                class="cat-card"
                :class="{ 'cat-card--active': rideForm.categoria === cat.name }"
                @click="rideForm.categoria = cat.name"
              >
                <div class="cat-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--st-orange)" stroke-width="1.5" stroke-linecap="round" v-html="cat.icon"></svg>
                </div>
                <h4 class="cat-name">{{ cat.name }}</h4>
                <p class="cat-models">{{ cat.models }}</p>
                <p class="cat-desc">{{ cat.desc }}</p>
              </button>
            </div>
            <div class="ride-actions ride-actions--spread" style="margin-top:24px">
              <button type="button" @click="goStep(1)" class="ride-btn-back">Voltar</button>
              <button type="button" @click="goStep(3)" class="ride-btn-next" :disabled="!rideForm.categoria">
                Proximo
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14m0 0-7-7m7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- PASSO 3 — Dados de contato -->
          <div v-else-if="rideStep === 3">
            <h3 class="ride-step-title">Dados de contato</h3>
            <div class="ride-form-grid">
              <div class="ride-field">
                <label class="ride-label">Nome completo <span style="color:var(--st-orange)">*</span></label>
                <input v-model="rideForm.nome" type="text" placeholder="Seu nome" class="ride-input" />
              </div>
              <div class="ride-field">
                <label class="ride-label">Empresa</label>
                <input v-model="rideForm.empresa" type="text" placeholder="Nome da empresa" class="ride-input" />
              </div>
              <div class="ride-field">
                <label class="ride-label">WhatsApp <span style="color:var(--st-orange)">*</span></label>
                <input :value="rideForm.whatsapp" @input="maskPhone" type="text" placeholder="(11) 9XXXX-XXXX" class="ride-input" maxlength="15" />
              </div>
              <div class="ride-field">
                <label class="ride-label">E-mail corporativo</label>
                <input v-model="rideForm.email" type="email" placeholder="email@empresa.com.br" class="ride-input" />
              </div>
            </div>
            <div class="ride-actions ride-actions--spread" style="margin-top:24px">
              <button type="button" @click="goStep(2)" class="ride-btn-back">Voltar</button>
              <button type="button" @click="submitRide" class="ride-btn-submit" :disabled="!rideForm.nome || !rideForm.whatsapp">
                SOLICITAR CORRIDA
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ─── POR QUE A SILVA TRANSPORTES ─── -->
    <section class="section-gap section-diffs" v-reveal>
      <div class="wrap">
        <div style="margin-bottom:44px">
          <div class="eyebrow-row">
            <span class="section-eyebrow">Diferenciais</span>
            <span class="eyebrow-line-anim"></span>
          </div>
          <div class="section-divider section-divider--anim"></div>
          <div class="section-title-row">
            <h2 class="section-title">Por que a Silva Transportes</h2>
            <p class="section-desc">O que nos diferencia na intermediacao de transporte executivo corporativo.</p>
          </div>
        </div>

        <div class="diffs-grid" v-reveal="{ stagger:true, interval:140 }">
          <div v-for="(d, i) in diffs" :key="d.title" class="diff-card diff-card--animated" :style="'--card-i:' + i">
            <div class="diff-icon diff-icon--animated">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--st-orange)" stroke-width="1.5" stroke-linecap="round" v-html="d.icon"></svg>
              <span class="diff-icon-glow"></span>
            </div>
            <h3 class="diff-card-title">{{ d.title }}</h3>
            <p class="diff-card-desc">{{ d.desc }}</p>
            <span class="diff-card-border"></span>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── COMO FUNCIONA ─── -->
    <section class="section-gap section-steps" v-reveal>
      <div class="wrap">
        <div style="margin-bottom:44px">
          <div class="eyebrow-row">
            <span class="section-eyebrow">Processo</span>
            <span class="eyebrow-line-anim"></span>
          </div>
          <div class="section-divider section-divider--anim"></div>
          <div class="section-title-row">
            <h2 class="section-title">Como funciona</h2>
            <p class="section-desc">Da solicitacao a corrida executada, em 4 passos simples.</p>
          </div>
        </div>

        <div class="steps-track">
          <div class="steps-connector" aria-hidden="true">
            <span class="steps-connector-fill"></span>
          </div>
          <div class="steps-grid" v-reveal="{ stagger:true, interval:180, direction:'right' }">
            <div v-for="(s, i) in steps" :key="s.n" class="step-home-card step-home-card--animated" :style="'--step-i:' + i">
              <span class="step-number step-number--animated">
                <span class="step-number-inner">{{ s.n }}</span>
                <span class="step-number-ring"></span>
              </span>
              <h3 class="step-card-title">{{ s.title }}</h3>
              <p class="step-card-desc">{{ s.desc }}</p>
              <span class="step-card-border"></span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── CTA FINAL ─── -->
    <section class="section-gap section-bottom" v-reveal>
      <div class="wrap">
        <div class="cta-block">
          <div class="cta-bg-grid"></div>
          <div class="cta-glow-dot"></div>
          <div class="cta-content">
            <h2 class="cta-title">
              Sua empresa pronta para contratar<br />
              <span style="color:var(--st-orange)">transporte sem complicacao.</span>
            </h2>
            <p class="cta-desc">
              Fale com a Silva Transportes e descubra como ter transporte executivo de qualidade sem precisar manter frota propria.
            </p>
            <div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-bottom:24px">
              <a href="#solicitar" class="btn-primary" @click.prevent="scrollToForm">
                SOLICITAR CORRIDA AGORA
              </a>
            </div>
            <div class="cta-seals">
              <span v-for="s in seals" :key="s" class="cta-seal">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--st-orange)" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                {{ s }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const rideStep = ref(1)
const rideSubmitted = ref(false)

const rideForm = reactive({
  origem: '', destino: '', data: '', horario: '', passageiros: 1,
  categoria: '',
  nome: '', empresa: '', whatsapp: '', email: '',
})

function goStep(n) { rideStep.value = n }

function scrollToForm() {
  const el = document.getElementById('solicitar')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function maskPhone(e) {
  let v = e.target.value.replace(/\D/g, '')
  if (v.length > 11) v = v.substring(0, 11)
  let m = ''
  if (v.length > 0) m = '(' + v.substring(0, 2)
  if (v.length > 2) m += ') ' + v.substring(2, 7)
  if (v.length > 7) m += '-' + v.substring(7)
  rideForm.whatsapp = m
}

function submitRide() {
  const msg = `Ola! Quero solicitar uma corrida pela Silva Transportes.\n\nOrigem: ${rideForm.origem}\nDestino: ${rideForm.destino}\nData: ${rideForm.data || 'Nao informada'}\nHorario: ${rideForm.horario || 'Nao informado'}\nPassageiros: ${rideForm.passageiros}\nCategoria: ${rideForm.categoria}\n\nNome: ${rideForm.nome}\nEmpresa: ${rideForm.empresa || 'Nao informado'}\nE-mail: ${rideForm.email || 'Nao informado'}`
  window.open(`https://wa.me/5511920158313?text=${encodeURIComponent(msg)}`, '_blank')
  rideSubmitted.value = true
}

function resetRide() {
  rideStep.value = 1
  rideSubmitted.value = false
  Object.assign(rideForm, { origem: '', destino: '', data: '', horario: '', passageiros: 1, categoria: '', nome: '', empresa: '', whatsapp: '', email: '' })
}

const trusts = [
  'Confirmacao em ate 30 minutos',
  'Motoristas verificados',
  'Nota fiscal garantida',
  'Cobertura Sao Paulo e regiao',
]

const categories = [
  {
    name: 'Executivo Standard',
    models: 'HB20, Onix, Polo',
    desc: 'Ate 4 passageiros',
    icon: '<rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
  },
  {
    name: 'Executivo Plus',
    models: 'Corolla, Cruze, Jetta',
    desc: 'Ate 4 passageiros, amenities',
    icon: '<rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/><line x1="6" y1="10" x2="10" y2="10"/>',
  },
  {
    name: 'SUV Premium',
    models: 'SW4, Compass, Tiguan',
    desc: 'Ate 5 passageiros, espaco para bagagem',
    icon: '<rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/><path d="M1 13h22"/>',
  },
  {
    name: 'Van Executiva',
    models: 'Sprinter, Master, Jumper',
    desc: 'Ate 10 passageiros, grupos',
    icon: '<rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/><path d="M6 8v5"/><path d="M10 8v5"/>',
  },
]

const diffs = [
  {
    title: 'Zero frota propria para a empresa',
    desc: 'Sem custo de manutencao ou seguro. A empresa contratante nao precisa investir em veiculos.',
    icon: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  },
  {
    title: 'Motoristas verificados e treinados',
    desc: 'Todos os motoristas sao verificados e treinados para o padrao corporativo exigido.',
    icon: '<path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
  },
  {
    title: 'Contrato formal com nota fiscal',
    desc: 'CNPJ ativo e emissao de nota fiscal em todas as corridas. Sem informalidade.',
    icon: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
  },
  {
    title: 'Um unico ponto de contato',
    desc: 'Toda a demanda de transporte da empresa gerenciada por um unico interlocutor. Sem fragmentacao.',
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>',
  },
]

const steps = [
  { n: 1, title: 'Voce solicita a corrida', desc: 'Informe origem, destino, data, horario e categoria do veiculo desejado.' },
  { n: 2, title: 'Selecionamos o motorista ideal', desc: 'Escolhemos o motorista e veiculo ideal da nossa rede parceira para sua corrida.' },
  { n: 3, title: 'Confirmacao em ate 30 minutos', desc: 'Voce recebe a confirmacao com motorista e horario em ate 30 minutos.' },
  { n: 4, title: 'Corrida executada', desc: 'Corrida executada com pontualidade e padrao corporativo garantido.' },
]

const seals = [
  'Confirmacao em ate 30 minutos',
  'Motoristas verificados',
  'Nota fiscal garantida',
  'Cobertura Sao Paulo e regiao',
]
</script>

<style scoped>
/* ─── Hero ─── */
.hero {
  margin-top: -84px;
  padding-top: 172px;
  padding-bottom: 160px;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  z-index: 1;
}

/* ─── Hero background (video + bokeh) ─── */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  background: linear-gradient(180deg,
    #060509 0%,
    #0c0a14 30%,
    #100c10 60%,
    #0a090c 100%
  );
}

.hero-bg-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.6;
}

.hero-texture {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px);
  background-size: 28px 28px;
  -webkit-mask-image: radial-gradient(ellipse 90% 80% at 50% 38%, rgba(0,0,0,0.55) 0%, transparent 72%);
  mask-image: radial-gradient(ellipse 90% 80% at 50% 38%, rgba(0,0,0,0.55) 0%, transparent 72%);
  pointer-events: none;
}

.hero-noise {
  position: absolute;
  inset: 0;
  opacity: 0.038;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");
  mix-blend-mode: overlay;
  pointer-events: none;
}

.hero-glow-blob {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 780px;
  height: 300px;
  background: radial-gradient(ellipse, rgba(249,115,22,0.11) 0%, transparent 65%);
  filter: blur(52px);
  pointer-events: none;
  animation: blob-pulse 6s ease-in-out infinite;
}
@keyframes blob-pulse {
  0%, 100% { opacity: 0.7; transform: translate(-50%, -50%) scale(1); }
  50%       { opacity: 1;   transform: translate(-50%, -50%) scale(1.15); }
}

.hero-bg-overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 85% 55% at 50% 33%, rgba(6,5,12,0.08) 0%, rgba(6,5,12,0.75) 100%),
    linear-gradient(175deg, rgba(249,115,22,0.03) 0%, transparent 45%);
}

.hero-bg-fade {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 10px;
  background: linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.92) 80%, #FFFFFF 100%);
}

.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 9999px;
  border: 1px solid rgba(249,115,22,0.28);
  background: rgba(249,115,22,0.08);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: rgba(253,186,116,0.88);
}
.hero-eyebrow-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--st-orange);
  flex-shrink: 0;
  animation: eyebrow-dot 2s ease-in-out infinite;
}
@keyframes eyebrow-dot {
  0%, 100% { box-shadow: 0 0 0 0 rgba(249,115,22,0.6), 0 0 6px rgba(249,115,22,0.9); }
  50%       { box-shadow: 0 0 0 5px rgba(249,115,22,0), 0 0 1px rgba(249,115,22,0.2); }
}

.hero-scroll {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255,255,255,0.28);
  animation: scroll-bounce 2.4s ease-in-out infinite;
  pointer-events: none;
  z-index: 2;
}
@keyframes scroll-bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(8px); }
}

.hero-bokeh span {
  position: absolute;
  border-radius: 50%;
  animation: bk-pass linear infinite;
  opacity: 0;
}
@keyframes bk-pass {
  0%   { transform: translateX(110vw); opacity: 0; }
  6%   { opacity: 1; }
  88%  { opacity: 0.85; }
  100% { transform: translateX(-10vw); opacity: 0; }
}

.bk1  { width:28px; height:16px; top:57%; filter:blur(8px);  background:rgba(255,238,190,0.9); animation-duration:3.1s; animation-delay:0s;   }
.bk2  { width:22px; height:14px; top:59%; filter:blur(6px);  background:rgba(255,228,170,0.8); animation-duration:3.4s; animation-delay:1.5s; margin-left:24px; }
.bk3  { width:14px; height:9px;  top:51%; filter:blur(5px);  background:rgba(255,242,200,0.65); animation-duration:5.2s; animation-delay:0.4s; }
.bk4  { width:11px; height:7px;  top:52%; filter:blur(4px);  background:rgba(255,232,185,0.55); animation-duration:6.0s; animation-delay:2.3s; }
.bk5  { width:20px; height:11px; top:61%; filter:blur(8px);  background:rgba(255,55,35,0.78);  animation-duration:2.8s; animation-delay:0.7s; }
.bk6  { width:15px; height:9px;  top:62%; filter:blur(7px);  background:rgba(220,38,28,0.65);  animation-duration:3.0s; animation-delay:1.9s; }
.bk7  { width:55px; height:4px;  top:55%; filter:blur(3px);  background:rgba(255,215,140,0.45); animation-duration:1.9s; animation-delay:0.3s; border-radius:2px; }
.bk8  { width:75px; height:3px;  top:60%; filter:blur(3px);  background:rgba(255,60,40,0.38);   animation-duration:2.1s; animation-delay:2.8s; border-radius:2px; }
.bk9  { width:42px; height:5px;  top:50%; filter:blur(4px);  background:rgba(255,220,150,0.38); animation-duration:7.2s; animation-delay:1.0s; border-radius:3px; }
.bk10 { width:30px; height:4px;  top:53%; filter:blur(4px);  background:rgba(255,200,100,0.3);  animation-duration:8.0s; animation-delay:3.5s; border-radius:3px; }
.bk11 { width:9px;  height:9px;  top:32%; filter:blur(10px); background:rgba(255,195,110,0.38); animation-duration:9.5s; animation-delay:0.0s; }
.bk12 { width:7px;  height:7px;  top:27%; filter:blur(9px);  background:rgba(255,185,95,0.3);   animation-duration:8.8s; animation-delay:4.2s; }

.section-gap { padding-top: 32px; padding-bottom: 32px; }
.section-bottom { padding-bottom: 72px; }

/* ─── Hero headline ─── */
.hero-h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(3.2rem, 6.5vw, 6rem);
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.12;
  margin: 0 auto;
  max-width: 920px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}
.hero-h1-line {
  display: block;
  color: rgba(255, 255, 255, 0.92);
}
.hero-h1-grad {
  display: block;
  background: linear-gradient(
    90deg,
    #FDBA74  0%,
    #F97316 20%,
    #FB923C 42%,
    #EA580C 60%,
    #F97316 78%,
    #FDBA74 100%
  );
  background-size: 200% auto;
  animation: shimmer-text 3.5s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
@keyframes shimmer-text {
  0%   { background-position: 0% center; }
  100% { background-position: 200% center; }
}

.hero-sub {
  font-size: 0.98rem;
  line-height: 1.75;
  letter-spacing: 0.01em;
  color: rgba(255,255,255,0.55);
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
}

.trust-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11.5px;
  color: rgba(255,255,255,0.55);
}

/* ─── Buttons ─── */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 26px;
  border-radius: 9999px;
  font-size: 13.5px;
  font-weight: 700;
  color: #fff;
  background: var(--st-orange);
  box-shadow: 0 0 28px rgba(249,115,22,0.35), 0 1px 0 rgba(255,255,255,0.2) inset;
  transition: transform .2s, box-shadow .2s, background .2s;
  letter-spacing: 0.04em;
}
.btn-primary:hover { background: var(--st-orange-dark); transform: translateY(-2px); box-shadow: 0 0 40px rgba(249,115,22,0.45); }

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 22px;
  border-radius: 9999px;
  font-size: 13.5px;
  font-weight: 500;
  color: rgba(255,255,255,0.78);
  border: 1px solid rgba(255,255,255,0.22);
  background: rgba(255,255,255,0.07);
  transition: color .2s, border-color .2s, background .2s;
}
.btn-ghost:hover { color: #FFFFFF; border-color: rgba(255,255,255,0.4); background: rgba(255,255,255,0.14); }

/* ─── Hero CTA ─── */
.btn-cta-hero {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 26px;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  overflow: hidden;
  cursor: pointer;
  transition: transform .25s, box-shadow .25s;
  background: var(--st-orange);
  box-shadow: 0 0 32px rgba(249,115,22,0.38), 0 1px 0 rgba(255,255,255,0.2) inset;
  text-decoration: none;
  isolation: isolate;
  letter-spacing: 0.04em;
}
.btn-cta-hero:hover {
  transform: scale(1.05);
  box-shadow: 0 0 52px 10px rgba(249,115,22,0.45);
}
.hcb-border {
  position: absolute; inset: -1px;
  border-radius: 9999px; overflow: hidden;
}
.hcb-spin {
  position: absolute;
  inset: -100%; width: 300%; height: 300%;
  animation: hcb-rotate 3s linear infinite;
  background: conic-gradient(from 0deg, transparent 0deg, transparent 85deg, rgba(255,200,100,0.9) 180deg, transparent 275deg, transparent 360deg);
}
@keyframes hcb-rotate { to { transform: rotate(360deg); } }
.btn-cta-hero::before {
  content: '';
  position: absolute; inset: 2px;
  border-radius: 9999px;
  background: var(--st-orange);
  z-index: 0;
}
.hcb-particles {
  position: absolute; inset: 0;
  overflow: hidden; border-radius: 9999px;
  pointer-events: none; z-index: 1;
}
.hcb-particles i {
  position: absolute; bottom: -6px;
  width: 2px; height: 2px; border-radius: 50%;
  background: rgba(255,255,255,0.9);
  animation: hcb-float ease-in-out infinite;
  font-style: normal;
}
.hcb-particles .p1 { left: 12%; animation-duration: 2.4s; animation-delay: 0.2s; }
.hcb-particles .p2 { left: 30%; animation-duration: 2.6s; animation-delay: 0.6s; opacity: 0.7; }
.hcb-particles .p3 { left: 48%; animation-duration: 2.1s; animation-delay: 0.0s; }
.hcb-particles .p4 { left: 65%; animation-duration: 2.8s; animation-delay: 1.0s; opacity: 0.8; }
.hcb-particles .p5 { left: 82%; animation-duration: 1.9s; animation-delay: 1.4s; }
@keyframes hcb-float {
  0%   { transform: translateY(0); opacity: 1; }
  80%  { opacity: 0; }
  100% { transform: translateY(-52px); opacity: 0; }
}
.hcb-label {
  position: relative; z-index: 2;
  display: inline-flex; align-items: center; gap: 8px;
}

/* ─── Section headers ─── */
.eyebrow-row {
  display: flex; justify-content: space-between;
  margin-bottom: 10px;
}
.section-eyebrow {
  font-size: 10.5px; font-weight: 700;
  letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--st-orange);
}
.section-divider {
  height: 1px;
  background: linear-gradient(to right, rgba(249,115,22,0.35), #E5E5E5, transparent);
  margin-bottom: 28px;
}
.section-title-row {
  display: flex; flex-direction: column; gap: 8px;
}
@media (min-width: 768px) {
  .section-title-row { flex-direction: row; align-items: flex-end; justify-content: space-between; }
}
.section-title {
  font-size: clamp(1.8rem, 3.5vw, 3rem);
  font-weight: 700; letter-spacing: -0.03em;
  color: var(--st-dark); line-height: 1.1;
}
.section-desc { font-size: 13px; color: #666666; max-width: 280px; line-height: 1.6; }

/* ─── Eyebrow line anim ─── */
.eyebrow-line-anim {
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, rgba(249,115,22,0.35), transparent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}
.section-diffs.is-visible .eyebrow-line-anim,
.section-steps.is-visible .eyebrow-line-anim {
  transform: scaleX(1);
}

.section-divider--anim {
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 1s cubic-bezier(0.22, 1, 0.36, 1) 0.15s;
}
.section-diffs.is-visible .section-divider--anim,
.section-steps.is-visible .section-divider--anim {
  transform: scaleX(1);
}

/* ─── Diffs grid ─── */
.diffs-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
@media(max-width:900px) { .diffs-grid { grid-template-columns: repeat(2, 1fr); } }
@media(max-width:600px) { .diffs-grid { grid-template-columns: 1fr; } }

.diff-card--animated {
  padding: 24px 20px;
  border-radius: 16px;
  background: var(--st-white);
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 0.35s ease;
}
.diff-card--animated:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(249,115,22,0.12), 0 2px 8px rgba(0,0,0,0.04);
}

/* Borda gradiente animada */
.diff-card-border {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(
    135deg,
    rgba(249,115,22,0) 0%,
    rgba(249,115,22,0.3) 50%,
    rgba(249,115,22,0) 100%
  );
  background-size: 300% 300%;
  animation: border-travel 4s ease-in-out infinite;
  animation-delay: calc(var(--card-i) * 0.5s);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
@keyframes border-travel {
  0%   { background-position: 0% 0%; }
  50%  { background-position: 100% 100%; }
  100% { background-position: 0% 0%; }
}

/* Icone com glow pulsante */
.diff-icon--animated {
  width: 44px; height: 44px; border-radius: 12px;
  background: #FEF0E7; border: 1px solid rgba(249,115,22,0.25);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 14px;
  position: relative;
  transition: transform 0.3s ease, background 0.3s ease;
}
.diff-card--animated:hover .diff-icon--animated {
  transform: scale(1.1) rotate(-3deg);
  background: rgba(249,115,22,0.15);
}
.diff-icon-glow {
  position: absolute;
  inset: -4px;
  border-radius: inherit;
  background: radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}
.diff-card--animated:hover .diff-icon-glow { opacity: 1; }

.diff-card-title {
  font-size: 14px; font-weight: 700;
  color: var(--st-dark);
  margin-bottom: 8px;
  transition: color 0.3s ease;
}
.diff-card--animated:hover .diff-card-title { color: var(--st-orange-dark); }
.diff-card-desc { font-size: 13px; color: #666666; line-height: 1.6; }

/* Shimmer sweep sutil no hover */
.diff-card--animated::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(105deg, transparent 40%, rgba(249,115,22,0.06) 50%, transparent 60%);
  transform: translateX(-120%);
  transition: none;
  pointer-events: none;
}
.diff-card--animated:hover::after {
  animation: card-shimmer 0.8s ease forwards;
}
@keyframes card-shimmer {
  to { transform: translateX(120%); }
}

/* ─── Steps ─── */
.steps-track { position: relative; }

/* Linha conectora horizontal entre os steps */
.steps-connector {
  position: absolute;
  top: 40px;
  left: 40px;
  right: 40px;
  height: 2px;
  background: #E5E5E5;
  border-radius: 2px;
  z-index: 0;
  overflow: hidden;
}
.steps-connector-fill {
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, var(--st-orange), rgba(249,115,22,0.3));
  border-radius: inherit;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.3s;
}
.section-steps.is-visible .steps-connector-fill {
  transform: scaleX(1);
}
@media(max-width:900px) { .steps-connector { display: none; } }

.steps-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px;
  position: relative; z-index: 1;
}
@media(max-width:900px) { .steps-grid { grid-template-columns: repeat(2, 1fr); } }
@media(max-width:600px) { .steps-grid { grid-template-columns: 1fr; } }

.step-home-card--animated {
  padding: 22px 20px;
  border-radius: 16px;
  background: var(--st-white);
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 0.35s ease;
}
.step-home-card--animated:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(249,115,22,0.1), 0 2px 8px rgba(0,0,0,0.04);
}

/* Borda gradiente animada nos steps */
.step-card-border {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(
    135deg,
    rgba(249,115,22,0) 0%,
    rgba(249,115,22,0.25) 50%,
    rgba(249,115,22,0) 100%
  );
  background-size: 300% 300%;
  animation: border-travel 4s ease-in-out infinite;
  animation-delay: calc(var(--step-i) * 0.6s);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

/* Numero do passo com anel animado */
.step-number--animated {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px; height: 36px;
  margin-bottom: 14px;
}
.step-number-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px; height: 32px;
  border-radius: 50%;
  background: #FEF0E7;
  border: 2px solid rgba(249,115,22,0.3);
  font-size: 13px; font-weight: 800;
  color: var(--st-orange);
  position: relative;
  z-index: 1;
  transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
}
.step-home-card--animated:hover .step-number-inner {
  background: var(--st-orange);
  border-color: var(--st-orange);
  color: #fff;
  transform: scale(1.1);
}

/* Anel pulsante ao redor do numero */
.step-number-ring {
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  border: 2px solid rgba(249,115,22,0.2);
  animation: ring-pulse 2.5s ease-in-out infinite;
  animation-delay: calc(var(--step-i) * 0.4s);
}
@keyframes ring-pulse {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50%       { transform: scale(1.25); opacity: 0; }
}

.step-card-title {
  font-size: 14px; font-weight: 700;
  color: var(--st-dark);
  margin-bottom: 6px;
  transition: color 0.3s ease;
}
.step-home-card--animated:hover .step-card-title { color: var(--st-orange-dark); }
.step-card-desc { font-size: 13px; color: #666666; line-height: 1.6; }

/* Shimmer sweep nos steps */
.step-home-card--animated::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(105deg, transparent 40%, rgba(249,115,22,0.05) 50%, transparent 60%);
  transform: translateX(-120%);
  pointer-events: none;
}
.step-home-card--animated:hover::after {
  animation: card-shimmer 0.8s ease forwards;
}

/* ─── CTA Block ─── */
.cta-block {
  position: relative; border-radius: 20px; overflow: hidden;
  padding: 56px 40px; text-align: center;
  background: linear-gradient(135deg, #FEF0E7, #FFF7F0 50%, #FEF0E7);
  border: 1px solid rgba(249,115,22,0.2);
}
.cta-bg-grid {
  position: absolute; inset: 0; opacity: .06;
  background-image: linear-gradient(rgba(249,115,22,0.3) 1px, transparent 1px), linear-gradient(to right, rgba(249,115,22,0.3) 1px, transparent 1px);
  background-size: 48px 48px;
}
.cta-glow-dot {
  position: absolute; top: -40px; right: -40px;
  width: 200px; height: 200px; border-radius: 50%;
  background: radial-gradient(circle, rgba(249,115,22,0.18), transparent 70%);
  pointer-events: none;
}
.cta-content { position: relative; z-index: 1; }
.cta-title {
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 700; letter-spacing: -0.03em; color: var(--st-dark);
  margin-bottom: 14px; line-height: 1.15;
}
.cta-desc { font-size: 15px; color: #666666; max-width: 480px; margin: 0 auto 32px; line-height: 1.65; }
.cta-seals {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}
.cta-seal {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #666666;
}

/* ─── Secao Solicitar Corrida ─── */
.ride-section {
  padding-top: 40px;
  padding-bottom: 48px;
}
.ride-eyebrow-row { display:flex;align-items:center;gap:14px;margin-bottom:14px }
.ride-eyebrow { font-size:10.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--st-orange);white-space:nowrap }
.ride-eyebrow-line { flex:1;height:1px;background:linear-gradient(to right,rgba(249,115,22,0.35),#E5E5E5,transparent) }
.ride-title { font-size:clamp(1.8rem,3.5vw,2.8rem);font-weight:700;letter-spacing:-0.03em;color:var(--st-dark);line-height:1.1;margin-bottom:8px }
.ride-subtitle { font-size:15px;color:#666666;line-height:1.6;max-width:520px }

/* Progresso */
.ride-progress {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0;
  margin: 0 auto 28px;
  max-width: 520px;
}
.ride-progress-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  min-width: 70px;
}
.rps-dot {
  width: 32px; height: 32px;
  border-radius: 50%;
  border: 2px solid #E5E5E5;
  background: var(--st-white);
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: 700; color: #BBBBBB;
  transition: all .25s;
}
.ride-progress-step.rps-active .rps-dot,
.ride-progress-step.rps-done .rps-dot {
  border-color: var(--st-orange); background: var(--st-orange); color: #FFFFFF;
}
.rps-label { font-size: 11px; color: #AAAAAA; white-space: nowrap; transition: color .25s; }
.ride-progress-step.rps-active .rps-label,
.ride-progress-step.rps-done .rps-label { color: var(--st-orange); font-weight: 600; }
.ride-progress-line {
  flex: 1; height: 2px; background: #E5E5E5;
  margin-top: 15px; transition: background .25s;
}
.ride-progress-line.rpl-active { background: var(--st-orange); }

/* Card */
.ride-card {
  border-radius: 20px;
  border: 1px solid #E5E5E5;
  background: var(--st-white);
  padding: 32px 36px;
  box-shadow: 0 2px 20px rgba(0,0,0,0.04);
}
@media(max-width:640px){ .ride-card { padding: 22px 18px; } }

.ride-step-title { font-size:16px;font-weight:700;color:var(--st-dark);margin-bottom:22px;letter-spacing:-0.01em }

/* Formulario */
.ride-form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
@media(max-width:640px){ .ride-form-grid { grid-template-columns: 1fr; } }
.ride-field { display: flex; flex-direction: column; gap: 6px; }
.ride-field-full { grid-column: span 2; }
@media(max-width:640px){ .ride-field-full { grid-column: span 1; } }
.ride-label { font-size: 12px; font-weight: 600; color: var(--st-dark); }
.ride-input {
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid #E5E5E5;
  background: var(--st-gray-light);
  font-size: 13.5px;
  color: var(--st-dark);
  outline: none;
  transition: border-color .18s, background .18s;
  font-family: inherit;
}
.ride-input::placeholder { color: #BBBBBB; }
.ride-input:focus { border-color: rgba(249,115,22,0.5); background: #FEF0E7; }

/* Passageiros */
.pax-row { display: flex; gap: 8px; }
.pax-btn {
  width: 44px; height: 44px;
  border-radius: 10px;
  border: 1px solid #E5E5E5;
  background: var(--st-gray-light);
  font-size: 14px; font-weight: 600; color: #666666;
  cursor: pointer; transition: all .18s;
}
.pax-btn:hover { border-color: rgba(249,115,22,0.4); color: var(--st-orange); }
.pax-btn--active { border-color: var(--st-orange); background: #FEF0E7; color: var(--st-orange); }

/* Categorias de veiculo */
.cat-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}
@media(max-width:640px){ .cat-grid { grid-template-columns: 1fr; } }

.cat-card {
  padding: 18px 16px;
  border-radius: 14px;
  border: 1px solid #E5E5E5;
  background: var(--st-white);
  cursor: pointer;
  transition: all .2s;
  text-align: left;
}
.cat-card:hover { border-color: rgba(249,115,22,0.3); background: #FEF0E7; }
.cat-card--active { border-color: var(--st-orange); background: #FEF0E7; box-shadow: 0 0 0 1px var(--st-orange); }
.cat-icon {
  width: 36px; height: 36px; border-radius: 9px;
  background: #FEF0E7; border: 1px solid rgba(249,115,22,0.25);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 10px;
}
.cat-name { font-size: 14px; font-weight: 700; color: var(--st-dark); margin-bottom: 2px; }
.cat-models { font-size: 12px; color: var(--st-orange); margin-bottom: 4px; font-weight: 500; }
.cat-desc { font-size: 12px; color: #888888; }

/* Acoes */
.ride-actions { display: flex; justify-content: flex-end; margin-top: 24px; }
.ride-actions--spread { justify-content: space-between; }
.ride-btn-next {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 11px 24px; border-radius: 9999px;
  font-size: 13.5px; font-weight: 700;
  color: #FFFFFF; background: var(--st-orange);
  border: none; cursor: pointer;
  box-shadow: 0 0 20px rgba(249,115,22,0.3);
  transition: background .2s, transform .2s, box-shadow .2s;
}
.ride-btn-next:hover:not(:disabled) { background: var(--st-orange-dark); transform: translateY(-1px); }
.ride-btn-next:disabled { opacity: 0.45; cursor: not-allowed; }
.ride-btn-back {
  display: inline-flex; align-items: center;
  padding: 11px 20px; border-radius: 9999px;
  font-size: 13px; font-weight: 500;
  color: #666666; background: transparent;
  border: 1px solid #E5E5E5; cursor: pointer;
  transition: color .18s, border-color .18s;
}
.ride-btn-back:hover { color: var(--st-dark); border-color: #BBBBBB; }
.ride-btn-submit {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 13px 28px; border-radius: 9999px;
  font-size: 13.5px; font-weight: 800; letter-spacing: .04em;
  color: #FFFFFF; background: var(--st-orange);
  border: none; cursor: pointer;
  box-shadow: 0 0 24px rgba(249,115,22,0.35);
  transition: background .2s, transform .2s, box-shadow .2s;
}
.ride-btn-submit:hover:not(:disabled) { background: var(--st-orange-dark); transform: translateY(-2px); box-shadow: 0 0 36px rgba(249,115,22,0.45); }
.ride-btn-submit:disabled { opacity: 0.45; cursor: not-allowed; }

/* Sucesso */
.ride-success { text-align: center; padding: 40px 20px; }
.ride-success-icon {
  width: 64px; height: 64px; border-radius: 18px;
  background: #FEF0E7; border: 1px solid rgba(249,115,22,0.25);
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 20px;
}
.ride-btn-reset {
  display: inline-flex; align-items: center;
  padding: 10px 22px; border-radius: 9999px;
  font-size: 13px; font-weight: 500;
  color: #666666; background: var(--st-gray-light);
  border: 1px solid #E5E5E5; cursor: pointer;
  transition: color .18s, border-color .18s;
}
.ride-btn-reset:hover { color: var(--st-dark); border-color: rgba(249,115,22,0.3); }
</style>
