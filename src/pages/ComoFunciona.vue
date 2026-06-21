<template>
  <div>

    <section style="padding-top:64px;padding-bottom:40px">
      <div class="wrap">
        <div class="page-anim page-anim-1" style="margin-bottom:18px">
          <span class="sec-label">Como funciona</span>
          <div class="sec-line"></div>
        </div>
        <h1 class="page-anim page-anim-2" style="font-size:clamp(2.2rem,5vw,4.5rem);font-weight:700;letter-spacing:0em;line-height:1.08;color:var(--st-dark)">Como <span style="color:var(--st-orange)">funciona</span></h1>
      </div>
    </section>

    <section class="section-steps-page" style="padding-top:8px;padding-bottom:48px" v-reveal>
      <div class="wrap">
        <div class="steps-wrapper">
          <div class="h-rule"></div>

          <div class="steps-track">
            <div class="steps-connector" aria-hidden="true">
              <span class="steps-connector-fill"></span>
            </div>
            <div class="steps-row" v-reveal="{ stagger:true, interval:180, direction:'right' }">
              <div v-for="(step, i) in steps" :key="step.n" class="step-card step-card--animated" :style="'--step-i:' + i">
                <span class="step-badge">PASSO {{ step.n }}</span>
                <div class="step-icon step-icon--animated" style="margin-top:10px;margin-bottom:18px">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--st-orange)" stroke-width="1.5" stroke-linecap="round" v-html="step.icon"></svg>
                  <span class="step-icon-glow"></span>
                </div>
                <h3 class="step-title-anim">{{ step.title }}</h3>
                <p style="font-size:13px;color:#666666;line-height:1.6;margin-bottom:14px;flex:1">{{ step.desc }}</p>
                <span class="actor-badge" :class="step.actor === 'Voce faz' ? 'actor-copper' : 'actor-gray'">{{ step.actor }}</span>
                <span class="step-card-border"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section style="padding-top:16px;padding-bottom:80px" v-reveal>
      <div class="wrap">
        <div class="cta-strip">
          <div class="cta-strip-grid"></div>
          <div style="position:relative;z-index:1;text-align:center">
            <h2 style="font-size:clamp(1.6rem,3vw,2.4rem);font-weight:700;letter-spacing:0em;color:var(--st-dark);margin-bottom:10px">Pronto para solicitar?</h2>
            <p style="font-size:14px;color:#666666;max-width:380px;margin:0 auto 24px;line-height:1.65">Solicite uma corrida executiva para sua empresa. Confirmacao em ate 30 minutos.</p>
            <router-link to="/contato" class="btn-primary">
              Solicitar corrida
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14m0 0-7-7m7 7-7 7"/></svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const steps = [
  {
    n: 1,
    title: 'Voce solicita a corrida',
    desc: 'Informe os detalhes da viagem: origem, destino, data, horario e categoria do veiculo desejado.',
    actor: 'Voce faz',
    icon: '<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>',
  },
  {
    n: 2,
    title: 'Selecionamos o motorista e veiculo',
    desc: 'Escolhemos o motorista e veiculo ideal da nossa rede parceira, todos verificados e treinados para o padrao corporativo.',
    actor: 'A gente faz',
    icon: '<path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
  },
  {
    n: 3,
    title: 'Confirmacao em ate 30 minutos',
    desc: 'Voce recebe a confirmacao com o motorista designado e horario exato em ate 30 minutos.',
    actor: 'A gente faz',
    icon: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  },
  {
    n: 4,
    title: 'Corrida executada',
    desc: 'Corrida executada com pontualidade e padrao corporativo garantido, do embarque ao destino.',
    actor: 'Garantido',
    icon: '<rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
  },
]
</script>

<style scoped>
.sec-label { font-size:10.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--st-orange);display:block;margin-bottom:10px }
.sec-line  { height:1px;background:linear-gradient(to right,rgba(249,115,22,0.35),#E5E5E5,transparent) }

.steps-wrapper { border-radius:18px;border:1px solid #E5E5E5;background:var(--st-white);padding:28px 32px }
.h-rule { height:1px;background:#E5E5E5 }

.steps-track { position: relative; }

/* Linha conectora horizontal */
.steps-connector {
  position: absolute;
  top: 52px;
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
.section-steps-page.is-visible .steps-connector-fill {
  transform: scaleX(1);
}
@media(max-width:900px) { .steps-connector { display: none; } }

.steps-row {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 24px;
  position: relative; z-index: 1;
}
@media(max-width:900px){ .steps-row { grid-template-columns: repeat(2,1fr) } }
@media(max-width:600px){ .steps-row { grid-template-columns: 1fr } }

.step-card--animated {
  position: relative; padding: 22px 20px; border-radius: 16px;
  background: var(--st-white); border: 1px solid transparent;
  display: flex; flex-direction: column;
  overflow: hidden;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 0.35s ease;
}
.step-card--animated:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(249,115,22,0.1), 0 2px 8px rgba(0,0,0,0.04);
}

/* Borda gradiente animada */
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
@keyframes border-travel {
  0%   { background-position: 0% 0%; }
  50%  { background-position: 100% 100%; }
  100% { background-position: 0% 0%; }
}

.step-badge {
  position: absolute; top: -12px; left: 16px;
  display: inline-flex; align-items: center; padding: 3px 12px;
  border-radius: 9999px; font-size: 10px; font-weight: 700; letter-spacing: .08em;
  background: var(--st-gray-light); border: 1px solid #E5E5E5; color: #666666;
}

/* Icone com glow */
.step-icon--animated {
  width: 42px; height: 42px; border-radius: 11px;
  background: #FEF0E7; border: 1px solid rgba(249,115,22,0.25);
  display: flex; align-items: center; justify-content: center;
  position: relative;
  transition: transform 0.3s ease, background 0.3s ease;
}
.step-card--animated:hover .step-icon--animated {
  transform: scale(1.1) rotate(-3deg);
  background: rgba(249,115,22,0.15);
}
.step-icon-glow {
  position: absolute;
  inset: -4px;
  border-radius: inherit;
  background: radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}
.step-card--animated:hover .step-icon-glow { opacity: 1; }

.step-title-anim {
  font-size: 19px; font-weight: 700; letter-spacing: -0.02em;
  color: var(--st-dark); margin-bottom: 8px;
  transition: color 0.3s ease;
}
.step-card--animated:hover .step-title-anim { color: var(--st-orange-dark); }

.actor-badge { display:inline-flex;padding:4px 12px;border-radius:9999px;font-size:11px;font-weight:600;align-self:flex-start }
.actor-copper { background:#FEF0E7;color:var(--st-orange-dark);border:1px solid rgba(234,88,12,0.25) }
.actor-gray   { background:var(--st-gray-light);color:#666666;border:1px solid #E5E5E5 }

/* Shimmer sweep */
.step-card--animated::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(105deg, transparent 40%, rgba(249,115,22,0.05) 50%, transparent 60%);
  transform: translateX(-120%);
  pointer-events: none;
}
.step-card--animated:hover::after {
  animation: card-shimmer 0.8s ease forwards;
}
@keyframes card-shimmer {
  to { transform: translateX(120%); }
}

.cta-strip {
  position:relative;border-radius:18px;overflow:hidden;
  padding:44px 32px;text-align:center;
  background:linear-gradient(135deg,#FEF0E7,#FFF7F0);
  border:1px solid rgba(249,115,22,0.2);
}
.cta-strip-grid {
  position:absolute;inset:0;opacity:.06;
  background-image:linear-gradient(rgba(249,115,22,0.3) 1px,transparent 1px),linear-gradient(to right,rgba(249,115,22,0.3) 1px,transparent 1px);
  background-size:48px 48px;
}

.btn-primary {
  display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:9999px;
  font-size:13.5px;font-weight:700;color:#fff;
  background:var(--st-orange);
  box-shadow:0 0 28px rgba(249,115,22,0.35);
  transition:transform .2s,box-shadow .2s,background .2s;
}
.btn-primary:hover { background:var(--st-orange-dark);transform:translateY(-2px);box-shadow:0 0 40px rgba(249,115,22,0.45) }
</style>
