<template>
  <div>

    <section style="padding-top:64px;padding-bottom:40px">
      <div class="wrap">
        <div class="page-anim page-anim-1" style="margin-bottom:18px">
          <span class="sec-label">Sobre nós</span>
          <div class="sec-line"></div>
        </div>
        <h1 class="page-anim page-anim-2 page-h1">A WFM <span style="color:#F97316">Transportes</span></h1>
      </div>
    </section>

    <section style="padding-top:16px;padding-bottom:48px;position:relative">
      <div class="wrap">
        <div class="grid-2" v-reveal>

          <!-- Info board -->
          <div class="info-board">
            <div class="info-board-header">
              <span class="dot-pulse"></span>
              <span style="font-size:12px;font-weight:600;color:#F97316;letter-spacing:.04em">WFM Transportes</span>
            </div>
            <div class="metrics-grid">
              <div class="metric-cell"><p class="metric-label">Sede</p><p class="metric-value">São Paulo, SP</p></div>
              <div class="metric-cell"><p class="metric-label">Fundação</p><p class="metric-value">2024</p></div>
              <div class="metric-cell"><p class="metric-label">Planos</p><p class="metric-value">3 ativos</p></div>
              <div class="metric-cell"><p class="metric-label">Modelo</p><p class="metric-value">Gestão executiva</p></div>
            </div>
            <div style="padding:18px 22px;border-top:1px solid #E5E5E5;background:#FEF0E7">
              <p style="font-size:13px;color:#666666;line-height:1.65;font-style:italic">"Sua empresa não precisa se preocupar com transporte. Nós conectamos empresas e motoristas, gerenciamos tudo no meio — do contrato ao relatório."</p>
              <p style="font-size:11.5px;color:#F97316;margin-top:8px;font-weight:500">— WFM Transportes</p>
            </div>
          </div>

          <!-- Text column -->
          <div>
            <p style="font-size:15px;color:#666666;line-height:1.7;margin-bottom:18px">A WFM Transportes atua como intermediária entre empresas que precisam de transporte executivo e motoristas que têm veículo e querem clientes corporativos. Gerenciamos toda a operação — da seleção dos motoristas ao relatório de uso mensal.</p>
            <p style="font-size:14px;color:#666666;line-height:1.7;margin-bottom:28px">Sem frota própria para a empresa contratante. O diferencial é a <strong style="color:#1C1C1E;font-weight:600">intermediação com gestão centralizada</strong>: contrato formal, nota fiscal e um único ponto de contato para toda a demanda de transporte.</p>
            <router-link to="/contato" class="btn-copper">
              Solicitar proposta
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 17L17 7m0 0H7m10 0v10"/></svg>
            </router-link>
            <div class="mini-stats" v-reveal="{ delay: 200 }">
              <div class="mini-stat" v-for="s in miniStats" :key="s.value">
                <p class="mini-stat-value">{{ s.value }}</p>
                <p class="mini-stat-label">{{ s.label }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section style="padding-top:32px;padding-bottom:80px">
      <div class="wrap">
        <div v-reveal style="margin-bottom:36px">
          <div class="eyebrow-row">
            <span class="sec-label">Diferenciais</span>
          </div>
          <div class="sec-line" style="margin-bottom:20px"></div>
          <h2 class="section-h2">Por que escolher a <span style="color:#F97316">WFM Transportes</span></h2>
        </div>
        <div class="diffs-grid" v-reveal="{ stagger:true, interval:80 }">
          <div v-for="d in diffs" :key="d.title" class="diff-card">
            <div class="diff-icon">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#F97316" stroke-width="1.5" stroke-linecap="round" v-html="d.icon"></svg>
            </div>
            <h3 style="font-size:13.5px;font-weight:600;color:#1C1C1E;margin-bottom:7px">{{ d.title }}</h3>
            <p style="font-size:13px;color:#666666;line-height:1.6">{{ d.desc }}</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const miniStats = [
  { value: '1', label: 'Ponto de contato' },
  { value: '24/7', label: 'Plano Premium' },
  { value: '0', label: 'Frota necessária' },
]
const diffs = [
  { title:'Zero frota própria', desc:'A empresa contratante não precisa investir em veículos — sem custo de manutenção ou seguro.', icon:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>' },
  { title:'Motoristas verificados', desc:'Rede de motoristas parceiros verificados e treinados para o padrão corporativo exigido pelas empresas.', icon:'<path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>' },
  { title:'Contrato formal', desc:'CNPJ ativo, emissão de nota fiscal e contrato formal em todos os planos. Sem informalidade.', icon:'<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>' },
  { title:'Um único ponto de contato', desc:'Toda a demanda de transporte da empresa gerenciada por um único interlocutor. Sem fragmentação.', icon:'<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>' },
  { title:'Para motoristas parceiros', desc:'Motoristas com veículo próprio acessam clientes corporativos qualificados sem precisar prospectar.', icon:'<rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>' },
  { title:'Relatórios e transparência', desc:'Relatório semanal ou mensal com todas as corridas, executivos atendidos e métricas de operação.', icon:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>' },
]
</script>

<style scoped>
.sec-label { font-size:10.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#F97316;display:block;margin-bottom:10px }
.sec-line  { height:1px;background:linear-gradient(to right,rgba(249,115,22,0.35),#E5E5E5,transparent) }
.page-h1   { font-size:clamp(2.2rem,5vw,4.5rem);font-weight:700;letter-spacing:0em;line-height:1.08;color:#1C1C1E;margin-top:10px }
.page-subtitle { margin-top:16px;max-width:480px;font-size:16px;color:#666666;line-height:1.65 }
.eyebrow-row { display:flex;justify-content:space-between;margin-bottom:10px }
.section-h2  { font-size:clamp(1.8rem,3.5vw,2.8rem);font-weight:700;letter-spacing:0em;color:#1C1C1E;line-height:1.1 }

.grid-2 { display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start }
@media(max-width:900px){ .grid-2 { grid-template-columns:1fr } }

.info-board { border-radius:16px;border:1px solid #E5E5E5;overflow:hidden;background:#FFFFFF }
.info-board-header { padding:14px 22px;border-bottom:1px solid #E5E5E5;background:#FEF0E7;display:flex;align-items:center;gap:10px }
.dot-pulse { width:7px;height:7px;border-radius:50%;background:#F97316;display:inline-block;animation:blink 2s infinite }
@keyframes blink{0%,100%{opacity:1}50%{opacity:.4}}
.metrics-grid { display:grid;grid-template-columns:1fr 1fr }
.metric-cell { padding:20px 22px;border-right:1px solid #E5E5E5;border-bottom:1px solid #E5E5E5 }
.metric-cell:nth-child(2n){ border-right:none }
.metric-cell:nth-child(3),.metric-cell:nth-child(4){ border-bottom:none }
.metric-label { font-size:10.5px;text-transform:uppercase;letter-spacing:.12em;color:#888888;margin-bottom:6px;font-weight:500 }
.metric-value { font-size:15px;font-weight:600;color:#1C1C1E;letter-spacing:-0.01em }

.btn-copper { display:inline-flex;align-items:center;gap:7px;padding:11px 22px;border-radius:9999px;font-size:13px;font-weight:600;color:#fff;background:#F97316;transition:transform .2s,box-shadow .2s,background .2s }
.btn-copper:hover { transform:translateY(-2px);box-shadow:0 6px 24px rgba(249,115,22,0.35);background:#EA580C }

.mini-stats { display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:24px }
.mini-stat { padding:16px;border-radius:12px;border:1px solid #E5E5E5;background:#F5F5F5;text-align:center }
.mini-stat-value { font-size:1.5rem;font-weight:700;letter-spacing:0em;color:#F97316;line-height:1 }
.mini-stat-label { font-size:11px;color:#888888;margin-top:5px }

.diffs-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:14px }
@media(max-width:900px){ .diffs-grid { grid-template-columns:repeat(2,1fr) } }
@media(max-width:600px){ .diffs-grid { grid-template-columns:1fr } }

.diff-card { padding:20px;border-radius:14px;background:#FFFFFF;border:1px solid #E5E5E5;transition:all .2s }
.diff-card:hover { border-color:rgba(249,115,22,0.3);background:#FEF0E7 }
.diff-icon { width:36px;height:36px;border-radius:9px;background:#FEF0E7;border:1px solid rgba(249,115,22,0.25);display:flex;align-items:center;justify-content:center;margin-bottom:12px }
</style>
