<template>
  <div>

    <!-- Header -->
    <section style="padding-top:64px;padding-bottom:36px">
      <div class="wrap" style="max-width:900px">
        <div class="page-anim page-anim-1 eyebrow-row">
          <span class="eyebrow-label">Legal</span>
          <div class="eyebrow-line"></div>
        </div>
        <h1 class="page-anim page-anim-2 page-h1">Política de <span style="color:#F97316">Comissão</span></h1>
        <p class="page-anim page-anim-3 page-sub">Última atualização: Junho de 2026 · Aplicável a motoristas parceiros e empresas contratantes</p>
      </div>
    </section>

    <!-- Banner resumo -->
    <section style="padding-bottom:28px">
      <div class="wrap" style="max-width:900px">
        <div class="summary-banner page-anim page-anim-4">
          <div class="summary-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F97316" stroke-width="1.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Repasse transparente ao motorista</span>
          </div>
          <div class="summary-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F97316" stroke-width="1.5" stroke-linecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            <span>Contrato formal em todos os casos</span>
          </div>
          <div class="summary-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F97316" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>Pagamento em até 5 dias úteis</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Cláusulas -->
    <section style="padding-bottom:80px">
      <div class="wrap" style="max-width:900px">
        <div style="display:flex;flex-direction:column;gap:14px">
          <div v-for="(s, i) in sections" :key="s.title" class="pol-card" v-reveal="{ delay: i * 50 }">
            <div class="pol-num">{{ String(i + 1).padStart(2, '0') }}</div>
            <div>
              <h2 class="pol-title">{{ s.title }}</h2>
              <p class="pol-text">{{ s.text }}</p>
            </div>
          </div>
        </div>

        <!-- Rodapé legal -->
        <div class="legal-footer" v-reveal>
          <p>WFM Transportes · CNPJ 56.265.821/0001-04 · São Paulo, SP</p>
          <p>wiuslei@wfmtransportes.com.br</p>
          <p style="margin-top:4px;font-size:12px;color:#404040">Foro competente: Comarca de São Paulo, SP</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const sections = [
  {
    title: 'Modelo de intermediação',
    text: 'A WFM Transportes atua exclusivamente como intermediária entre empresas contratantes e motoristas parceiros. A empresa contratante paga a mensalidade do plano à WFM Transportes; o valor do repasse ao motorista é acordado individualmente no contrato de parceria e não integra o preço do plano.',
  },
  {
    title: 'Comissão da WFM Transportes',
    text: 'A WFM Transportes retém uma comissão de intermediação sobre cada corrida realizada. O percentual exato é definido no contrato de parceria firmado com cada motorista e pode variar conforme o plano da empresa, volume de corridas e perfil do serviço. O percentual é sempre informado antes da assinatura do contrato.',
  },
  {
    title: 'Repasse ao motorista parceiro',
    text: 'O valor líquido de cada corrida — após dedução da comissão de intermediação — é repassado ao motorista parceiro. O repasse é realizado via transferência bancária (TED ou PIX) em até 5 dias úteis após o encerramento do período de apuração acordado em contrato (semanal ou quinzenal).',
  },
  {
    title: 'Apuração e extrato',
    text: 'A WFM Transportes disponibiliza ao motorista parceiro um extrato detalhado de corridas realizadas, valores brutos, comissão retida e valor líquido a receber. O extrato é enviado por WhatsApp ou e-mail antes de cada repasse.',
  },
  {
    title: 'Cobranças à empresa contratante',
    text: 'A empresa contratante paga mensalidade fixa conforme o plano contratado (Essencial, Corporativo ou Premium). Corridas que excedam o limite do plano são cobradas à parte, com valor previamente acordado e comunicado antes da execução. Toda cobrança é acompanhada de nota fiscal.',
  },
  {
    title: 'Inadimplência e suspensão',
    text: 'O não pagamento da mensalidade pela empresa contratante por prazo superior a 10 dias corridos após o vencimento suspende automaticamente a operação. Corridas não realizadas por suspensão motivada por inadimplência não geram obrigação de repasse ao motorista parceiro.',
  },
  {
    title: 'Contestações e ajustes',
    text: 'Qualquer divergência no extrato deve ser contestada pelo motorista parceiro em até 5 dias úteis após o recebimento. Após esse prazo, o extrato é considerado aceito. A WFM Transportes se compromete a analisar e responder contestações em até 3 dias úteis.',
  },
  {
    title: 'Alteração de comissões',
    text: 'Qualquer alteração no percentual de comissão ou nas condições de repasse será comunicada ao motorista parceiro com antecedência mínima de 30 dias, por escrito (WhatsApp ou e-mail). A continuidade da parceria após esse prazo implica aceite das novas condições.',
  },
]
</script>

<style scoped>
.eyebrow-row   { margin-bottom:18px }
.eyebrow-label { font-size:10.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#F97316;display:block;margin-bottom:10px }
.eyebrow-line  { height:1px;background:linear-gradient(to right,rgba(249,115,22,0.35),#E5E5E5,transparent) }
.page-h1       { font-size:clamp(2rem,5vw,3.6rem);font-weight:700;letter-spacing:0em;line-height:1.08;color:#1C1C1E;margin-bottom:12px }
.page-sub      { font-size:15px;color:#666666;line-height:1.65 }

.summary-banner {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 18px 24px;
  border-radius: 14px;
  border: 1px solid #E5E5E5;
  background: #F5F5F5;
}
.summary-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #666666;
}

.pol-card {
  display: flex;
  gap: 24px;
  padding: 24px 28px;
  border-radius: 16px;
  border: 1px solid #E5E5E5;
  background: #FFFFFF;
  transition: border-color .2s, background .2s;
}
.pol-card:hover {
  border-color: rgba(249,115,22,0.3);
  background: #FEF0E7;
}
.pol-num {
  font-size: 11px;
  font-weight: 700;
  color: #F97316;
  letter-spacing: .08em;
  opacity: 0.7;
  flex-shrink: 0;
  padding-top: 3px;
  width: 26px;
}
.pol-title { font-size:14px;font-weight:600;color:#1C1C1E;margin-bottom:8px }
.pol-text  { font-size:13.5px;color:#666666;line-height:1.7 }

.legal-footer {
  margin-top: 40px;
  padding: 20px 24px;
  border-radius: 14px;
  border: 1px solid #E5E5E5;
  background: #F5F5F5;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 13px;
  color: #888888;
}

@media(max-width:640px){
  .pol-card { padding:18px 16px;gap:14px }
  .summary-banner { flex-direction:column;gap:10px }
}
</style>
