<template>
  <div>

    <!-- ─── HERO ─── -->
    <section class="hero">

      <!-- Fundo animado: vídeo + bokeh CSS como fallback -->
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
            <span class="hero-h1-line">Mobilidade corporativa</span>
            <span class="hero-h1-grad">inteligente</span>
          </h1>
        </div>

        <!-- Subtítulo -->
        <div class="hero-anim hero-anim-3" style="text-align:center;margin-top:2.8rem">
          <p class="hero-sub">
            Intermediamos a locação de veículos com motorista entre empresas que precisam e motoristas que têm.
            <strong style="color:#FFFFFF;font-weight:600">Sem frota própria, sem burocracia,</strong>
            com gestão centralizada.
          </p>
        </div>

        <!-- CTAs -->
        <div class="hero-anim hero-anim-4" style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-top:2.5rem">
          <router-link to="/planos" class="btn-cta-hero">
            <span class="hcb-border" aria-hidden="true"><span class="hcb-spin"></span></span>
            <span class="hcb-particles" aria-hidden="true"><i class="p1"></i><i class="p2"></i><i class="p3"></i><i class="p4"></i><i class="p5"></i></span>
            <span class="hcb-label">Ver planos <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m0 0-7-7m7 7-7 7"/></svg></span>
          </router-link>
          <router-link to="/como-funciona" class="btn-ghost">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" opacity=".3" fill="#F97316"/><path d="m10 8 5 4-5 4V8z" fill="#F97316"/></svg>
            Como funciona
          </router-link>
        </div>

        <!-- Trust items -->
        <div class="hero-anim hero-anim-5" style="display:flex;flex-wrap:wrap;gap:20px;justify-content:center;margin-top:1.75rem">
          <span v-for="t in trusts" :key="t" class="trust-item">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#F97316" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
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
    <section class="ride-section" v-reveal>
      <div class="wrap">

        <!-- Cabeçalho -->
        <div style="margin-bottom:28px">
          <div class="ride-eyebrow-row">
            <span class="ride-eyebrow">Corrida avulsa</span>
            <div class="ride-eyebrow-line"></div>
          </div>
          <h2 class="ride-title">Solicite sua corrida agora</h2>
          <p class="ride-subtitle">Informe os detalhes da viagem e nossa equipe entrará em contato em até 30 minutos para confirmar.</p>
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
          <div class="ride-progress-step" :class="{ 'rps-active': rideStep === 2 }">
            <div class="rps-dot"><span>2</span></div>
            <span class="rps-label">Confirmação</span>
          </div>
        </div>

        <!-- Card principal -->
        <div class="ride-card">

          <!-- ✅ Sucesso -->
          <div v-if="rideSubmitted" class="ride-success">
            <div class="ride-success-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F97316" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h3 style="font-size:20px;font-weight:700;color:#1C1C1E;margin-bottom:8px">Solicitação recebida!</h3>
            <p style="font-size:14px;color:#666666;max-width:400px;margin:0 auto 24px;line-height:1.65">Nossa equipe entrará em contato em até 30 minutos para confirmar sua corrida.</p>
            <button type="button" @click="resetRide" class="ride-btn-reset">Fazer nova solicitação</button>
          </div>

          <!-- PASSO 1 -->
          <div v-else-if="rideStep === 1">
            <h3 class="ride-step-title">Detalhes da viagem</h3>
            <div class="ride-form-grid">
              <div class="ride-field ride-field-full">
                <label class="ride-label">Origem</label>
                <input v-model="rideForm.origem" type="text" placeholder="Ex: Aeroporto de Guarulhos — GRU" class="ride-input" />
              </div>
              <div class="ride-field ride-field-full">
                <label class="ride-label">Destino</label>
                <input v-model="rideForm.destino" type="text" placeholder="Ex: Av. Paulista, 1000 — São Paulo" class="ride-input" />
              </div>
              <div class="ride-field">
                <label class="ride-label">Data</label>
                <input v-model="rideForm.data" type="date" class="ride-input" />
              </div>
              <div class="ride-field">
                <label class="ride-label">Horário</label>
                <input v-model="rideForm.horario" type="time" class="ride-input" />
              </div>
              <div class="ride-field ride-field-full">
                <label class="ride-label">Passageiros</label>
                <div class="pax-row">
                  <button v-for="n in [1,2,3,4,'5+']" :key="n" type="button" class="pax-btn" :class="{ 'pax-btn--active': rideForm.passageiros === n }" @click="rideForm.passageiros = n">{{ n }}</button>
                </div>
              </div>
            </div>
            <div class="ride-actions">
              <button type="button" @click="goStep(2)" class="ride-btn-next" :disabled="!rideForm.origem || !rideForm.destino">
                Próximo
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14m0 0-7-7m7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- PASSO 2 -->
          <div v-else-if="rideStep === 2">
            <h3 class="ride-step-title">Dados de contato</h3>
            <div class="ride-form-grid">
              <div class="ride-field">
                <label class="ride-label">Nome completo <span style="color:#F97316">*</span></label>
                <input v-model="rideForm.nome" type="text" placeholder="Seu nome" class="ride-input" />
              </div>
              <div class="ride-field">
                <label class="ride-label">Empresa</label>
                <input v-model="rideForm.empresa" type="text" placeholder="Nome da empresa" class="ride-input" />
              </div>
              <div class="ride-field">
                <label class="ride-label">WhatsApp <span style="color:#F97316">*</span></label>
                <input :value="rideForm.whatsapp" @input="maskPhone" type="text" placeholder="(11) 9XXXX-XXXX" class="ride-input" maxlength="15" />
              </div>
              <div class="ride-field">
                <label class="ride-label">E-mail corporativo</label>
                <input v-model="rideForm.email" type="email" placeholder="email@empresa.com.br" class="ride-input" />
              </div>
            </div>
            <div class="ride-actions ride-actions--spread" style="margin-top:24px">
              <button type="button" @click="goStep(1)" class="ride-btn-back">← Voltar</button>
              <button type="button" @click="submitRide" class="ride-btn-submit" :disabled="!rideForm.nome || !rideForm.whatsapp">
                SOLICITAR CORRIDA →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ─── PLANOS ─── -->
    <section class="section-gap">
      <div class="wrap">

        <div v-reveal style="margin-bottom:44px">
          <div class="eyebrow-row">
            <span class="section-eyebrow">Planos</span>
            <span style="font-size:10.5px;color:#888888;letter-spacing:0.1em">03</span>
          </div>
          <div class="section-divider"></div>
          <div class="section-title-row">
            <h2 class="section-title">Pacotes de serviço</h2>
            <p class="section-desc">Escolha o plano ideal para o volume e perfil da sua empresa.</p>
          </div>
        </div>

        <div class="plans-grid" v-reveal="{ stagger:true, interval:100 }">
          <div v-for="plan in planCards" :key="plan.name" class="plan-card" :class="{ 'plan-card--featured': plan.featured }">
            <div v-if="plan.featured" class="plan-featured-badge">Mais contratado</div>
            <div class="plan-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F97316" stroke-width="1.5" stroke-linecap="round" v-html="plan.icon"></svg>
            </div>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
              <h3 style="font-size:16px;font-weight:700;letter-spacing:-0.01em;color:#1C1C1E">{{ plan.name }}</h3>
            </div>
            <p style="font-size:13px;color:#666666;line-height:1.6;margin-bottom:18px">{{ plan.desc }}</p>
            <ul style="display:flex;flex-direction:column;gap:8px;margin-bottom:24px">
              <li v-for="item in plan.features" :key="item" style="display:flex;align-items:flex-start;gap:8px;font-size:12.5px;color:#666666">
                <span style="width:16px;height:16px;border-radius:50%;background:#FEF0E7;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#F97316" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                {{ item }}
              </li>
            </ul>
            <router-link to="/contato" class="plan-cta" :class="{ 'plan-cta--featured': plan.featured }">
              {{ plan.cta }}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14m0 0-7-7m7 7-7 7"/></svg>
            </router-link>
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
              Sua empresa merece<br />
              <span style="color:#F97316">mobilidade sem complicação.</span>
            </h2>
            <p class="cta-desc">
              Se você precisa de transporte executivo com gestão profissional, ou se você tem veículo e quer clientes corporativos — a WFM Transportes é a conexão que faltava.
            </p>
            <div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center">
              <router-link to="/contato" class="btn-primary">
                Solicitar proposta
              </router-link>
              <router-link to="/contato" class="btn-ghost btn-ghost--cta">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                Quero me cadastrar como parceiro
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

/* ─── Calculadora de corrida ─── */
const rideStep = ref(1)
const rideSubmitted = ref(false)

const rideForm = reactive({
  origem: '', destino: '', data: '', horario: '', passageiros: 1,
  nome: '', empresa: '', whatsapp: '', email: '',
})

function goStep(n) { rideStep.value = n }

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
  const msg = `Olá! Quero solicitar uma corrida pela WFM Transportes.\n\nOrigem: ${rideForm.origem}\nDestino: ${rideForm.destino}\nData: ${rideForm.data || 'Não informada'}\nHorário: ${rideForm.horario || 'Não informado'}\nPassageiros: ${rideForm.passageiros}\n\nNome: ${rideForm.nome}\nEmpresa: ${rideForm.empresa || 'Não informado'}\nE-mail: ${rideForm.email || 'Não informado'}`
  window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(msg)}`, '_blank')
  rideSubmitted.value = true
}

function resetRide() {
  rideStep.value = 1
  rideSubmitted.value = false
  Object.assign(rideForm, { origem: '', destino: '', data: '', horario: '', passageiros: 1, nome: '', empresa: '', whatsapp: '', email: '' })
}

/* ─── Dados estáticos existentes ─── */
const trusts = ['Motoristas verificados e treinados', 'Contrato formal com nota fiscal', 'Gestão centralizada completa']




const planCards = [
  {
    name: 'Essencial',
    featured: false,
    desc: 'Ideal para empresas com demanda moderada de transporte executivo.',
    features: [
      'Até 20 corridas por mês',
      'Até 2 executivos cobertos',
      'Agendamento via WhatsApp',
      'Motorista padrão executivo',
      'Relatório mensal de uso',
    ],
    cta: 'Solicitar proposta',
    icon: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  },
  {
    name: 'Corporativo',
    featured: true,
    desc: 'Para empresas com equipe executiva ativa e demanda consistente.',
    features: [
      'Até 50 corridas por mês',
      'Até 5 executivos cobertos',
      'Motorista sênior dedicado',
      'Relatório semanal',
      'Atendimento 6h às 23h',
      'Gestão de rotas e agendamentos',
    ],
    cta: 'Solicitar proposta',
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>',
  },
  {
    name: 'Premium',
    featured: false,
    desc: 'Para C-level, diretores e demandas executivas de alto padrão.',
    features: [
      'Corridas ilimitadas',
      'C-level e diretores',
      'Motorista dedicado exclusivo',
      'Veículo premium Corolla ou superior',
      'Atendimento 24h/7 dias',
      'Gestão de agenda integrada',
    ],
    cta: 'Solicitar proposta',
    icon: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  },
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

/* ─── Hero background (vídeo + bokeh) ─── */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  /* Fundo noturno de rodovia — fallback quando sem vídeo */
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

/* ─── Dot grid texture (masked at edges) ─── */
.hero-texture {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px);
  background-size: 28px 28px;
  -webkit-mask-image: radial-gradient(ellipse 90% 80% at 50% 38%, rgba(0,0,0,0.55) 0%, transparent 72%);
  mask-image: radial-gradient(ellipse 90% 80% at 50% 38%, rgba(0,0,0,0.55) 0%, transparent 72%);
  pointer-events: none;
}

/* ─── Film grain overlay ─── */
.hero-noise {
  position: absolute;
  inset: 0;
  opacity: 0.038;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");
  mix-blend-mode: overlay;
  pointer-events: none;
}

/* ─── Ambient orange glow behind headline ─── */
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

/* ─── Overlay: vignette radial + tint escuro ─── */
.hero-bg-overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 85% 55% at 50% 33%, rgba(6,5,12,0.08) 0%, rgba(6,5,12,0.75) 100%),
    linear-gradient(175deg, rgba(249,115,22,0.03) 0%, transparent 45%);
}

/* ─── Fade suave para branco ─── */
.hero-bg-fade {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 10px;
  background: linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.92) 80%, #FFFFFF 100%);
}

/* ─── Eyebrow pill animado ─── */
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
  background: #F97316;
  flex-shrink: 0;
  animation: eyebrow-dot 2s ease-in-out infinite;
}
@keyframes eyebrow-dot {
  0%, 100% { box-shadow: 0 0 0 0 rgba(249,115,22,0.6), 0 0 6px rgba(249,115,22,0.9); }
  50%       { box-shadow: 0 0 0 5px rgba(249,115,22,0), 0 0 1px rgba(249,115,22,0.2); }
}

/* ─── Scroll hint ─── */
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

/* ─── Bokeh: faróis e lanternas de carros na rodovia ─── */
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

/* Faróis brancos/amarelados — pista próxima */
.bk1  { width:28px; height:16px; top:57%; filter:blur(8px);  background:rgba(255,238,190,0.9); animation-duration:3.1s; animation-delay:0s;   }
.bk2  { width:22px; height:14px; top:59%; filter:blur(6px);  background:rgba(255,228,170,0.8); animation-duration:3.4s; animation-delay:1.5s; margin-left:24px; }
/* Faróis — pista distante (menores, mais lentos) */
.bk3  { width:14px; height:9px;  top:51%; filter:blur(5px);  background:rgba(255,242,200,0.65); animation-duration:5.2s; animation-delay:0.4s; }
.bk4  { width:11px; height:7px;  top:52%; filter:blur(4px);  background:rgba(255,232,185,0.55); animation-duration:6.0s; animation-delay:2.3s; }
/* Lanternas traseiras vermelhas — pista próxima */
.bk5  { width:20px; height:11px; top:61%; filter:blur(8px);  background:rgba(255,55,35,0.78);  animation-duration:2.8s; animation-delay:0.7s; }
.bk6  { width:15px; height:9px;  top:62%; filter:blur(7px);  background:rgba(220,38,28,0.65);  animation-duration:3.0s; animation-delay:1.9s; }
/* Rastros de velocidade — carros rápidos */
.bk7  { width:55px; height:4px;  top:55%; filter:blur(3px);  background:rgba(255,215,140,0.45); animation-duration:1.9s; animation-delay:0.3s; border-radius:2px; }
.bk8  { width:75px; height:3px;  top:60%; filter:blur(3px);  background:rgba(255,60,40,0.38);   animation-duration:2.1s; animation-delay:2.8s; border-radius:2px; }
/* Luzes distantes (tracejado) */
.bk9  { width:42px; height:5px;  top:50%; filter:blur(4px);  background:rgba(255,220,150,0.38); animation-duration:7.2s; animation-delay:1.0s; border-radius:3px; }
.bk10 { width:30px; height:4px;  top:53%; filter:blur(4px);  background:rgba(255,200,100,0.3);  animation-duration:8.0s; animation-delay:3.5s; border-radius:3px; }
/* Postes de luz da rodovia (passam lentamente no topo) */
.bk11 { width:9px;  height:9px;  top:32%; filter:blur(10px); background:rgba(255,195,110,0.38); animation-duration:9.5s; animation-delay:0.0s; }
.bk12 { width:7px;  height:7px;  top:27%; filter:blur(9px);  background:rgba(255,185,95,0.3);   animation-duration:8.8s; animation-delay:4.2s; }

.section-gap { padding-top: 32px; padding-bottom: 32px; }
.section-bottom { padding-bottom: 72px; }

/* ─── Hero headline ─── */
.hero-h1 {
  font-family: 'Barlow Condensed', sans-serif;
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

/* ─── Hero subtítulo ─── */
.hero-sub {
  font-size: 0.98rem;
  line-height: 1.75;
  letter-spacing: 0.01em;
  color: rgba(255,255,255,0.55);
  max-width: 460px;
  margin: 0 auto;
  text-align: center;
}

/* ─── Trust ─── */
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
  background: #F97316;
  box-shadow: 0 0 28px rgba(249,115,22,0.35), 0 1px 0 rgba(255,255,255,0.2) inset;
  transition: transform .2s, box-shadow .2s, background .2s;
}
.btn-primary:hover { background: #EA580C; transform: translateY(-2px); box-shadow: 0 0 40px rgba(249,115,22,0.45); }

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
.btn-ghost--cta { color: #F97316; border-color: rgba(249,115,22,0.4); background: transparent; }
.btn-ghost--cta:hover { color: #EA580C; border-color: #F97316; background: rgba(249,115,22,0.08); }

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
  background: #F97316;
  box-shadow: 0 0 32px rgba(249,115,22,0.38), 0 1px 0 rgba(255,255,255,0.2) inset;
  text-decoration: none;
  isolation: isolate;
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
  background: #F97316;
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
  color: #F97316;
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
  color: #1C1C1E; line-height: 1.1;
}
.section-desc { font-size: 13px; color: #666666; max-width: 240px; line-height: 1.6; }

/* ─── Plans ─── */
.plans-grid { display: flex; flex-wrap: wrap; gap: 16px; justify-content: center; }

.plan-card {
  flex: 0 0 calc(33.333% - 11px);
  padding: 28px 24px;
  border-radius: 16px;
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  transition: all .25s;
  position: relative;
  display: flex;
  flex-direction: column;
}
.plan-card:hover { border-color: rgba(249,115,22,0.3); background: #FEF0E7; transform: translateY(-2px); box-shadow: 0 4px 20px rgba(249,115,22,0.1); }
.plan-card--featured {
  border-color: rgba(249,115,22,0.4);
  background: linear-gradient(135deg, #FEF0E7, #FFFFFF);
}
.plan-card--featured:hover { border-color: #F97316; }

.plan-featured-badge {
  position: absolute;
  top: -12px; left: 50%; transform: translateX(-50%);
  padding: 3px 14px;
  border-radius: 9999px;
  font-size: 10.5px; font-weight: 700;
  background: #F97316;
  color: #fff;
  white-space: nowrap;
}

.plan-icon {
  width: 40px; height: 40px; border-radius: 10px;
  background: #FEF0E7; border: 1px solid rgba(249,115,22,0.25);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 14px;
}


.plan-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 11px 18px;
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 600;
  color: #666666;
  border: 1px solid #E5E5E5;
  background: #F5F5F5;
  transition: all .2s;
  margin-top: auto;
}
.plan-cta:hover { color: #1C1C1E; border-color: rgba(249,115,22,0.4); background: #FEF0E7; }
.plan-cta--featured {
  background: #F97316;
  border-color: transparent;
  color: #fff;
  box-shadow: 0 0 22px rgba(249,115,22,0.3);
}
.plan-cta--featured:hover { background: #EA580C; box-shadow: 0 0 32px rgba(249,115,22,0.45); transform: translateY(-1px); }

@media (max-width: 900px) { .plan-card { flex: 0 0 calc(50% - 8px); } }
@media (max-width: 600px) { .plan-card { flex: 0 0 100%; } }

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
  font-weight: 700; letter-spacing: -0.03em; color: #1C1C1E;
  margin-bottom: 14px; line-height: 1.15;
}
.cta-desc { font-size: 15px; color: #666666; max-width: 440px; margin: 0 auto 32px; line-height: 1.65; }

/* ─── Seção Solicitar Corrida ─── */
.ride-section {
  padding-top: 40px;
  padding-bottom: 48px;
}
.ride-eyebrow-row { display:flex;align-items:center;gap:14px;margin-bottom:14px }
.ride-eyebrow { font-size:10.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#F97316;white-space:nowrap }
.ride-eyebrow-line { flex:1;height:1px;background:linear-gradient(to right,rgba(249,115,22,0.35),#E5E5E5,transparent) }
.ride-title { font-size:clamp(1.8rem,3.5vw,2.8rem);font-weight:700;letter-spacing:-0.03em;color:#1C1C1E;line-height:1.1;margin-bottom:8px }
.ride-subtitle { font-size:15px;color:#666666;line-height:1.6;max-width:520px }

/* Progresso */
.ride-progress {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0;
  margin: 0 auto 28px;
  max-width: 420px;
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
  background: #FFFFFF;
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: 700; color: #BBBBBB;
  transition: all .25s;
}
.ride-progress-step.rps-active .rps-dot,
.ride-progress-step.rps-done .rps-dot {
  border-color: #F97316; background: #F97316; color: #FFFFFF;
}
.rps-label { font-size: 11px; color: #AAAAAA; white-space: nowrap; transition: color .25s; }
.ride-progress-step.rps-active .rps-label,
.ride-progress-step.rps-done .rps-label { color: #F97316; font-weight: 600; }
.ride-progress-line {
  flex: 1; height: 2px; background: #E5E5E5;
  margin-top: 15px; transition: background .25s;
}
.ride-progress-line.rpl-active { background: #F97316; }

/* Card */
.ride-card {
  border-radius: 20px;
  border: 1px solid #E5E5E5;
  background: #FFFFFF;
  padding: 32px 36px;
  box-shadow: 0 2px 20px rgba(0,0,0,0.04);
}
@media(max-width:640px){ .ride-card { padding: 22px 18px; } }

.ride-step-title { font-size:16px;font-weight:700;color:#1C1C1E;margin-bottom:22px;letter-spacing:-0.01em }

/* Formulário */
.ride-form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
@media(max-width:640px){ .ride-form-grid { grid-template-columns: 1fr; } }
.ride-field { display: flex; flex-direction: column; gap: 6px; }
.ride-field-full { grid-column: span 2; }
@media(max-width:640px){ .ride-field-full { grid-column: span 1; } }
.ride-label { font-size: 12px; font-weight: 600; color: #1C1C1E; }
.ride-input {
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid #E5E5E5;
  background: #F5F5F5;
  font-size: 13.5px;
  color: #1C1C1E;
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
  background: #F5F5F5;
  font-size: 14px; font-weight: 600; color: #666666;
  cursor: pointer; transition: all .18s;
}
.pax-btn:hover { border-color: rgba(249,115,22,0.4); color: #F97316; }
.pax-btn--active { border-color: #F97316; background: #FEF0E7; color: #F97316; }

/* Ações */
.ride-actions { display: flex; justify-content: flex-end; margin-top: 24px; }
.ride-actions--spread { justify-content: space-between; }
.ride-btn-next {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 11px 24px; border-radius: 9999px;
  font-size: 13.5px; font-weight: 700;
  color: #FFFFFF; background: #F97316;
  border: none; cursor: pointer;
  box-shadow: 0 0 20px rgba(249,115,22,0.3);
  transition: background .2s, transform .2s, box-shadow .2s;
}
.ride-btn-next:hover:not(:disabled) { background: #EA580C; transform: translateY(-1px); }
.ride-btn-next:disabled { opacity: 0.45; cursor: not-allowed; }
.ride-btn-back {
  display: inline-flex; align-items: center;
  padding: 11px 20px; border-radius: 9999px;
  font-size: 13px; font-weight: 500;
  color: #666666; background: transparent;
  border: 1px solid #E5E5E5; cursor: pointer;
  transition: color .18s, border-color .18s;
}
.ride-btn-back:hover { color: #1C1C1E; border-color: #BBBBBB; }
.ride-btn-submit {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 13px 28px; border-radius: 9999px;
  font-size: 13.5px; font-weight: 800; letter-spacing: .04em;
  color: #FFFFFF; background: #F97316;
  border: none; cursor: pointer;
  box-shadow: 0 0 24px rgba(249,115,22,0.35);
  transition: background .2s, transform .2s, box-shadow .2s;
}
.ride-btn-submit:hover:not(:disabled) { background: #EA580C; transform: translateY(-2px); box-shadow: 0 0 36px rgba(249,115,22,0.45); }
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
  color: #666666; background: #F5F5F5;
  border: 1px solid #E5E5E5; cursor: pointer;
  transition: color .18s, border-color .18s;
}
.ride-btn-reset:hover { color: #1C1C1E; border-color: rgba(249,115,22,0.3); }
</style>
