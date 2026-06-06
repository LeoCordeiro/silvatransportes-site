<template>
  <div>

    <section style="padding-top:64px;padding-bottom:40px">
      <div class="wrap">
        <div class="page-anim page-anim-1" style="margin-bottom:18px">
          <span class="sec-label">Como funciona</span>
          <div class="sec-line"></div>
        </div>
        <h1 class="page-anim page-anim-2" style="font-size:clamp(2.2rem,5vw,4.5rem);font-weight:700;letter-spacing:0em;line-height:1.08;color:#1C1C1E">Como <span style="color:#F97316">funciona</span></h1>
      </div>
    </section>

    <section style="padding-top:8px;padding-bottom:48px">
      <div class="wrap">
        <div class="steps-wrapper">
          <div class="h-rule"></div>

          <!-- Steps 1-3 -->
          <div class="steps-row-3">
            <div v-for="step in steps.slice(0,3)" :key="step.n" class="step-card" v-reveal="{ delay: step.n * 70 }">
              <span class="step-badge">PASSO {{ step.n }}</span>
              <div class="step-icon" style="margin-top:10px;margin-bottom:18px">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F97316" stroke-width="1.5" stroke-linecap="round" v-html="step.icon"></svg>
              </div>
              <h3 style="font-size:19px;font-weight:700;letter-spacing:-0.02em;color:#1C1C1E;margin-bottom:8px">{{ step.title }}</h3>
              <p style="font-size:13px;color:#666666;line-height:1.6;margin-bottom:14px;flex:1">{{ step.desc }}</p>
              <span class="actor-badge" :class="step.actor === 'Você faz' ? 'actor-copper' : step.actor === 'Sempre' ? 'actor-green' : 'actor-gray'">{{ step.actor }}</span>
            </div>
          </div>

          <div class="h-rule" style="margin-top:24px;margin-bottom:24px"></div>

          <!-- Steps 4-5 -->
          <div class="steps-row-2">
            <div v-for="step in steps.slice(3)" :key="step.n" class="step-card step-card-wide" v-reveal="{ delay: step.n * 70 }">
              <span class="step-badge">PASSO {{ step.n }}</span>
              <div style="display:flex;gap:18px;align-items:flex-start;padding-top:10px">
                <div class="step-icon" style="flex-shrink:0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F97316" stroke-width="1.5" stroke-linecap="round" v-html="step.icon"></svg>
                </div>
                <div>
                  <h3 style="font-size:19px;font-weight:700;letter-spacing:-0.02em;color:#1C1C1E;margin-bottom:8px">{{ step.title }}</h3>
                  <p style="font-size:13px;color:#666666;line-height:1.6;margin-bottom:14px">{{ step.desc }}</p>
                  <span class="actor-badge" :class="step.actor === 'Você faz' ? 'actor-copper' : step.actor === 'Sempre' ? 'actor-green' : 'actor-gray'">{{ step.actor }}</span>
                </div>
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
            <h2 style="font-size:clamp(1.6rem,3vw,2.4rem);font-weight:700;letter-spacing:0em;color:#1C1C1E;margin-bottom:10px">Pronto para começar?</h2>
            <p style="font-size:14px;color:#666666;max-width:380px;margin:0 auto 24px;line-height:1.65">Solicite uma proposta para sua empresa ou cadastre-se como motorista parceiro da WFM Transportes.</p>
            <router-link to="/contato" class="btn-primary">
              Solicitar proposta
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
    title: 'Você descreve a necessidade',
    desc: 'Informe quantidade de veículos, perfil do executivo, frequência de uso e região de cobertura. A WFM Transportes entende seu volume e monta a proposta ideal.',
    actor: 'Você faz',
    icon: '<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>',
  },
  {
    n: 2,
    title: 'WFM Transportes seleciona',
    desc: 'Selecionamos os motoristas e veículos ideais da nossa rede parceira, todos verificados e treinados para o padrão corporativo exigido.',
    actor: 'A gente faz',
    icon: '<path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
  },
  {
    n: 3,
    title: 'Proposta e contratação',
    desc: 'Você recebe uma proposta com plano mensal ou por demanda — contrato formal, nota fiscal e gestão centralizada inclusos.',
    actor: 'Você faz',
    icon: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
  },
  {
    n: 4,
    title: 'Motoristas acionados',
    desc: 'Motoristas são acionados e acompanhados em cada corrida. Pontualidade e padrão executivo garantidos do embarque ao destino.',
    actor: 'A gente faz',
    icon: '<rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
  },
  {
    n: 5,
    title: 'Relatório e acompanhamento',
    desc: 'Relatório de uso mensal entregue com todas as corridas, executivos atendidos e métricas de operação. Gestão contínua sem burocracia.',
    actor: 'Sempre',
    icon: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
  },
]
</script>

<style scoped>
.sec-label { font-size:10.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#F97316;display:block;margin-bottom:10px }
.sec-line  { height:1px;background:linear-gradient(to right,rgba(249,115,22,0.35),#E5E5E5,transparent) }

.steps-wrapper { border-radius:18px;border:1px solid #E5E5E5;background:#FFFFFF;padding:28px 32px }
.h-rule { height:1px;background:#E5E5E5 }

.steps-row-3 { display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:24px }
@media(max-width:900px){ .steps-row-3 { grid-template-columns:1fr } }

.steps-row-2 { display:grid;grid-template-columns:repeat(2,1fr);gap:16px }
@media(max-width:900px){ .steps-row-2 { grid-template-columns:1fr } }

.step-card {
  position:relative;padding:22px 20px;border-radius:14px;
  background:#FFFFFF;border:1px solid #E5E5E5;
  display:flex;flex-direction:column;transition:border-color .2s;
}
.step-card:hover { border-color:rgba(249,115,22,0.3) }
.step-card-wide { flex-direction:column }

.step-badge {
  position:absolute;top:-12px;left:16px;
  display:inline-flex;align-items:center;padding:3px 12px;
  border-radius:9999px;font-size:10px;font-weight:700;letter-spacing:.08em;
  background:#F5F5F5;border:1px solid #E5E5E5;color:#666666;
}

.step-icon {
  width:42px;height:42px;border-radius:11px;
  background:#FEF0E7;border:1px solid rgba(249,115,22,0.25);
  display:flex;align-items:center;justify-content:center;
}

.actor-badge { display:inline-flex;padding:4px 12px;border-radius:9999px;font-size:11px;font-weight:600;align-self:flex-start }
.actor-copper { background:#FEF0E7;color:#EA580C;border:1px solid rgba(234,88,12,0.25) }
.actor-gray   { background:#F5F5F5;color:#666666;border:1px solid #E5E5E5 }
.actor-green  { background:rgba(34,197,94,0.1);color:#16a34a;border:1px solid rgba(34,197,94,0.2) }

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
  background:#F97316;
  box-shadow:0 0 28px rgba(249,115,22,0.35);
  transition:transform .2s,box-shadow .2s,background .2s;
}
.btn-primary:hover { background:#EA580C;transform:translateY(-2px);box-shadow:0 0 40px rgba(249,115,22,0.45) }
</style>
