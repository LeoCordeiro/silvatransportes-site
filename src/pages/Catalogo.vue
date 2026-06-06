<template>
  <div>

    <section style="padding-top:64px;padding-bottom:36px">
      <div class="wrap">
        <div class="page-anim page-anim-1" style="margin-bottom:18px">
          <span class="sec-label">Planos</span>
          <div class="sec-line"></div>
        </div>
        <h1 class="page-anim page-anim-2" style="font-size:clamp(2.2rem,5vw,4.5rem);font-weight:700;letter-spacing:0em;line-height:1.08;color:#1C1C1E">Pacotes de <span style="color:#F97316">serviço</span></h1>
      </div>
    </section>

    <section style="padding-top:8px;padding-bottom:32px">
      <div class="wrap">
        <div style="display:flex;flex-direction:column;gap:18px">
          <div v-for="(plan, i) in plans" :key="plan.name" class="plan-card" v-reveal="{ delay: i * 80 }">
            <div class="plan-inner">
              <!-- Left -->
              <div style="padding:28px 32px">
                <div style="display:flex;align-items:flex-start;gap:16px;margin-bottom:20px">
                  <div style="width:46px;height:46px;border-radius:12px;background:#FEF0E7;border:1px solid rgba(249,115,22,0.25);display:flex;align-items:center;justify-content:center;flex-shrink:0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F97316" stroke-width="1.5" stroke-linecap="round" v-html="plan.icon"></svg>
                  </div>
                  <div style="flex:1">
                    <div style="display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-bottom:4px">
                      <h2 style="font-size:18px;font-weight:700;letter-spacing:-0.02em;color:#1C1C1E">{{ plan.name }}</h2>
                      <span v-if="plan.featured" class="badge-featured">Mais contratado</span>
                    </div>
                  </div>
                </div>
                <p style="font-size:13.5px;color:#666666;line-height:1.65;margin-bottom:18px">{{ plan.desc }}</p>
                <ul style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:24px">
                  <li v-for="f in plan.features" :key="f" style="display:flex;align-items:flex-start;gap:7px;font-size:13px;color:#666666">
                    <span style="width:16px;height:16px;border-radius:50%;background:#FEF0E7;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#F97316" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>{{ f }}
                  </li>
                </ul>
                <router-link to="/contato" class="plan-btn" :class="{ 'plan-btn--featured': plan.featured }">
                  {{ plan.cta }}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14m0 0-7-7m7 7-7 7"/></svg>
                </router-link>
              </div>
              <!-- Right -->
              <div class="plan-right">
                <h3 style="font-size:10.5px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#888888;margin-bottom:16px">O que está incluso</h3>
                <ul style="display:flex;flex-direction:column;gap:10px;margin-bottom:auto">
                  <li v-for="h in plan.highlights" :key="h" style="display:flex;align-items:center;gap:10px;font-size:13px;color:#666666">
                    <span style="width:22px;height:22px;border-radius:50%;background:#FEF0E7;display:flex;align-items:center;justify-content:center;flex-shrink:0">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#F97316" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>{{ h }}
                  </li>
                </ul>
                <div style="margin-top:20px;padding:13px 16px;border-radius:11px;border:1px solid rgba(249,115,22,0.2);background:#FEF0E7;display:flex;align-items:center;gap:10px">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F97316" stroke-width="1.5" stroke-linecap="round" style="flex-shrink:0"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <span style="font-size:13px;color:#F97316;font-weight:500">{{ plan.availability }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section style="padding-top:24px;padding-bottom:80px" v-reveal>
      <div class="wrap">
        <div class="compare-box">
          <div class="compare-inner">
            <div>
              <span class="sec-label" style="margin-bottom:12px">Comparativo</span>
              <h2 style="font-size:clamp(1.6rem,3vw,2.4rem);font-weight:700;letter-spacing:0em;color:#1C1C1E;line-height:1.15;margin-bottom:12px">
                Plano certo para<br /><span style="color:#F97316">cada empresa</span>
              </h2>
              <p style="font-size:14px;color:#666666;line-height:1.65">Não sabe qual plano escolher? Fale com a WFM Transportes e receba uma indicação personalizada para o perfil da sua empresa.</p>
            </div>
            <div style="display:flex;flex-direction:column;gap:10px">
              <div v-for="r in comparison" :key="r.label" style="display:flex;align-items:center;justify-content:space-between;padding:13px 18px;border-radius:11px;border:1px solid #E5E5E5;background:#F5F5F5">
                <span style="font-size:14px;font-weight:500;color:#1C1C1E">{{ r.label }}</span>
                <span style="font-size:15px;font-weight:700;color:#F97316">{{ r.value }}</span>
              </div>
              <router-link to="/contato" class="btn-primary-full">Solicitar indicação de plano</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const plans = [
  {
    name: 'Essencial',
    featured: false,
    desc: 'Ideal para empresas com demanda moderada de transporte executivo. Agendamento simples e relatório mensal de uso incluso.',
    features: [
      'Até 20 corridas por mês',
      'Até 2 executivos cobertos',
      'Agendamento via WhatsApp',
      'Motorista padrão executivo',
      'Relatório mensal de uso',
      'Contrato formal com nota fiscal',
    ],
    highlights: [
      'Relatório mensal de uso',
      'Motorista padrão executivo',
      'Gestão centralizada WFM Transportes',
      'Histórico de todas as corridas',
    ],
    availability: 'Horário comercial',
    cta: 'Solicitar proposta',
    icon: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  },
  {
    name: 'Corporativo',
    featured: true,
    desc: 'Para empresas com equipe executiva ativa e demanda consistente. Motorista sênior dedicado, relatório semanal e atendimento estendido.',
    features: [
      'Até 50 corridas por mês',
      'Até 5 executivos cobertos',
      'Motorista sênior dedicado',
      'Relatório semanal',
      'Atendimento 6h às 23h',
      'Gestão de rotas e agendamentos',
    ],
    highlights: [
      'Relatório semanal detalhado',
      'Motorista sênior dedicado',
      'Atendimento 6h às 23h',
      'Prioridade na gestão de rotas',
      'Até 5 executivos cobertos',
    ],
    availability: '6h às 23h · todos os dias',
    cta: 'Solicitar proposta',
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>',
  },
  {
    name: 'Premium',
    featured: false,
    desc: 'Para C-level, diretores e demandas executivas de alto padrão. Motorista exclusivo, veículo premium e disponibilidade total.',
    features: [
      'Corridas ilimitadas',
      'C-level e diretores',
      'Motorista dedicado exclusivo',
      'Veículo premium Corolla ou superior',
      'Atendimento 24h/7 dias',
      'Gestão de agenda integrada',
    ],
    highlights: [
      'Motorista dedicado exclusivo',
      'Veículo premium Corolla ou superior',
      'Atendimento 24h/7 dias',
      'Corridas ilimitadas',
      'Gestão de agenda integrada',
    ],
    availability: '24h · 7 dias por semana',
    cta: 'Solicitar proposta',
    icon: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  },
]

const comparison = [
  { label: 'Gestão centralizada', value: 'Todos os planos' },
  { label: 'Contrato formal + NF', value: 'Todos os planos' },
  { label: 'Relatório incluso', value: 'Todos os planos' },
  { label: 'Motoristas verificados', value: 'Todos os planos' },
  { label: 'Preço sob consulta', value: 'Fale conosco' },
]
</script>

<style scoped>
.sec-label { font-size:10.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#F97316;display:block;margin-bottom:10px }
.sec-line  { height:1px;background:linear-gradient(to right,rgba(249,115,22,0.35),#E5E5E5,transparent) }

.badge-featured { padding:3px 10px;border-radius:9999px;font-size:10.5px;font-weight:700;background:#F97316;color:#fff;white-space:nowrap;flex-shrink:0 }


.plan-card { border-radius:16px;border:1px solid #E5E5E5;background:#FFFFFF;overflow:hidden;transition:border-color .25s }
.plan-card:hover { border-color:rgba(249,115,22,0.3) }
.plan-inner { display:grid;grid-template-columns:1fr 1fr }
@media(max-width:900px){ .plan-inner { grid-template-columns:1fr } }

.plan-right { border-left:1px solid #E5E5E5;padding:28px 32px;display:flex;flex-direction:column }
@media(max-width:900px){ .plan-right { border-left:none;border-top:1px solid #E5E5E5 } }

.plan-btn { display:inline-flex;align-items:center;gap:7px;padding:10px 18px;border-radius:9999px;font-size:13px;font-weight:500;color:#666666;border:1px solid #E5E5E5;background:#F5F5F5;transition:all .2s }
.plan-btn:hover { color:#1C1C1E;border-color:rgba(249,115,22,0.3);background:#FEF0E7 }
.plan-btn--featured { background:#F97316;border-color:transparent;color:#fff;box-shadow:0 0 18px rgba(249,115,22,0.3) }
.plan-btn--featured:hover { background:#EA580C;box-shadow:0 0 28px rgba(249,115,22,0.45) }

.compare-box { border-radius:18px;border:1px solid rgba(249,115,22,0.2);overflow:hidden;background:linear-gradient(135deg,#FEF0E7,#FFFFFF);padding:36px 40px }
.compare-inner { display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center }
@media(max-width:900px){ .compare-inner { grid-template-columns:1fr } }

.btn-primary-full { display:flex;align-items:center;justify-content:center;padding:14px;border-radius:9999px;font-size:14px;font-weight:700;color:#fff;background:#F97316;box-shadow:0 0 22px rgba(249,115,22,0.3);transition:transform .2s,box-shadow .2s,background .2s }
.btn-primary-full:hover { background:#EA580C;transform:translateY(-2px);box-shadow:0 0 36px rgba(249,115,22,0.45) }
</style>
