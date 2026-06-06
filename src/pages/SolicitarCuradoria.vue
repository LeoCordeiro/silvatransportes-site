<template>
  <div>

    <!-- PAGE HEADER -->
    <section style="padding-top:64px;padding-bottom:36px">
      <div class="wrap">
      <div class="page-anim page-anim-1" style="margin-bottom:20px">
        <span style="font-size:10.5px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#F97316;display:block;margin-bottom:10px">Contato</span>
        <div style="height:1px;background:linear-gradient(to right,rgba(249,115,22,0.35),#E5E5E5,transparent)"></div>
      </div>
      <h1 class="page-anim page-anim-2" style="font-size:clamp(2.2rem,5vw,4.2rem);font-weight:700;letter-spacing:0em;line-height:1.08;color:#1C1C1E">
        Fale com a<br /><span style="color:#F97316">WFM Transportes</span>
      </h1>
      <p class="page-anim page-anim-3" style="margin-top:16px;max-width:460px;font-size:16px;color:#666666;line-height:1.65">
        Conte sobre a sua empresa e indicamos o plano ideal para o seu volume de corridas executivas. Ou cadastre-se como motorista parceiro.
      </p>
      </div>
    </section>

    <!-- FORM + SIDEBAR -->
    <section style="padding-top:8px;padding-bottom:80px">
      <div class="wrap">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-6">

        <!-- FORM -->
        <div class="lg:col-span-3 form-card" v-reveal>

          <!-- Success state -->
          <div v-if="submitted" style="padding:48px;text-align:center">
            <div style="width:60px;height:60px;border-radius:16px;background:#FEF0E7;border:1px solid rgba(249,115,22,0.25);display:flex;align-items:center;justify-content:center;margin:0 auto 20px">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#F97316" stroke-width="2" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h2 style="font-size:22px;font-weight:700;color:#1C1C1E;margin-bottom:8px">Mensagem enviada!</h2>
            <p style="font-size:14px;color:#666666;max-width:340px;margin:0 auto;line-height:1.6">
              A WFM Transportes recebeu sua mensagem e entrará em contato em breve pelo WhatsApp.
            </p>
          </div>

          <!-- Form -->
          <div v-else style="padding:28px 32px">
            <h2 style="font-size:16px;font-weight:600;color:#1C1C1E;margin-bottom:4px">Dados da sua empresa</h2>
            <p style="font-size:13px;color:#666666;margin-bottom:24px">Precisamos entender seu volume, perfil de executivos e necessidades.</p>

            <form @submit.prevent="handleSubmit" style="display:flex;flex-direction:column;gap:18px">

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="field-label">Seu nome <span style="color:#F97316">*</span></label>
                  <input v-model="form.nome" type="text" required placeholder="Nome completo" class="field-input" />
                </div>
                <div>
                  <label class="field-label">WhatsApp <span style="color:#F97316">*</span></label>
                  <input v-model="form.whatsapp" type="tel" required placeholder="(11) 99999-9999" class="field-input" />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="field-label">Empresa <span style="color:#F97316">*</span></label>
                  <input v-model="form.empresa" type="text" required placeholder="Nome da empresa" class="field-input" />
                </div>
                <div>
                  <label class="field-label">E-mail</label>
                  <input v-model="form.email" type="email" placeholder="seu@empresa.com.br" class="field-input" />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="field-label">Plano de interesse <span style="color:#F97316">*</span></label>
                  <select v-model="form.plano" required class="field-input">
                    <option value="" disabled>Selecione...</option>
                    <option>Essencial</option>
                    <option>Corporativo</option>
                    <option>Premium</option>
                    <option>Não sei ainda, preciso de indicação</option>
                  </select>
                </div>
                <div>
                  <label class="field-label">Nº de executivos</label>
                  <select v-model="form.executivos" class="field-input">
                    <option value="">Selecione...</option>
                    <option v-for="e in executivosOpts" :key="e">{{ e }}</option>
                  </select>
                </div>
              </div>

              <div>
                <label class="field-label">Quando gostaria de conversar?</label>
                <input v-model="form.data" type="date" class="field-input" />
              </div>

              <div>
                <label class="field-label">Descreva sua necessidade de transporte</label>
                <textarea v-model="form.descricao" rows="4"
                  placeholder="Volume estimado de corridas, cidades, perfil de executivos atendidos..."
                  class="field-input" style="resize:none"></textarea>
              </div>

              <button type="submit" class="submit-btn">
                Enviar mensagem
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14m0 0-7-7m7 7-7 7"/></svg>
              </button>

            </form>
          </div>
        </div>

        <!-- SIDEBAR -->
        <div class="lg:col-span-2" style="display:flex;flex-direction:column;gap:14px" v-reveal="{ delay: 100 }">

          <!-- Steps -->
          <div class="sidebar-card">
            <h3 style="font-size:14px;font-weight:600;color:#1C1C1E;margin-bottom:18px">O que acontece depois?</h3>
            <div style="display:flex;flex-direction:column;gap:14px">
              <div v-for="(s, i) in nextsteps" :key="i" style="display:flex;align-items:flex-start;gap:10px">
                <span style="min-width:24px;height:24px;border-radius:50%;background:#FEF0E7;border:1px solid rgba(249,115,22,0.2);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#F97316;flex-shrink:0;margin-top:1px">{{ i+1 }}</span>
                <p style="font-size:13px;color:#666666;line-height:1.55">{{ s }}</p>
              </div>
            </div>
          </div>

          <!-- WhatsApp -->
          <!-- TODO: Substituir pelo WhatsApp real do Wiuslei -->
          <a href="https://wa.me/5511999999999" target="_blank" class="wa-card">
            <div style="width:44px;height:44px;border-radius:12px;background:rgba(34,197,94,0.12);border:1px solid rgba(34,197,94,0.2);display:flex;align-items:center;justify-content:center;flex-shrink:0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#4ade80"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374A9.86 9.86 0 012.157 12C2.16 6.55 6.595 2.116 12.047 2.116c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </div>
            <div>
              <p style="font-size:14px;font-weight:600;color:#1C1C1E">WhatsApp direto</p>
              <p style="font-size:12px;color:#666666;margin-top:2px">WFM Transportes · resposta rápida</p>
            </div>
          </a>

          <!-- Note -->
          <div class="note-card">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
              <span style="width:6px;height:6px;border-radius:50%;background:#F97316;display:inline-block"></span>
              <p style="font-size:13px;font-weight:600;color:#1C1C1E">Sem compromisso</p>
            </div>
            <p style="font-size:13px;color:#666666;line-height:1.6">
              Primeira conversa gratuita. Indicamos o plano ideal e só formalizamos quando fizer sentido para sua empresa.
            </p>
          </div>

        </div>
      </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const submitted = ref(false)

const form = reactive({ nome:'', whatsapp:'', empresa:'', email:'', plano:'', executivos:'', data:'', descricao:'' })

const executivosOpts = ['1 executivo', '2 executivos', '3 a 5 executivos', '6 a 10 executivos', 'Mais de 10']

const nextsteps = [
  'A WFM Transportes analisa sua necessidade e responde em até 24h.',
  'Conversa rápida pelo WhatsApp para entender o volume e perfil.',
  'Indicação do plano ideal e proposta personalizada.',
  'Formalização com contrato formal, nota fiscal e início da gestão.',
]

function handleSubmit() {
  // TODO: Substituir pelo WhatsApp real do Wiuslei
  const msg = `Olá! Tenho interesse nos serviços da WFM Transportes.\n\nNome: ${form.nome}\nEmpresa: ${form.empresa}\nPlano de interesse: ${form.plano||'Não definido'}\nNº de executivos: ${form.executivos||'Não informado'}\nData: ${form.data||'Flexível'}\n\n${form.descricao||''}`
  window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(msg)}`, '_blank')
  submitted.value = true
}
</script>

<style scoped>
.form-card {
  border-radius: 18px;
  border: 1px solid #E5E5E5;
  background: #FFFFFF;
  overflow: hidden;
}

.field-label {
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: #888888;
  margin-bottom: 7px;
  letter-spacing: .01em;
}
.field-input {
  display: block;
  width: 100%;
  padding: 11px 14px;
  border-radius: 10px;
  background: #F5F5F5;
  border: 1px solid #E5E5E5;
  color: #1C1C1E;
  font-size: 14px;
  outline: none;
  transition: border-color .2s, background .2s;
  font-family: inherit;
  -webkit-appearance: none;
  appearance: none;
}
.field-input::placeholder { color: #BBBBBB; }
.field-input:focus {
  border-color: rgba(249,115,22,0.5);
  background: #FEF0E7;
}

.submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 14px;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  border: none;
  cursor: pointer;
  background: #F97316;
  box-shadow: 0 0 24px rgba(249,115,22,0.3);
  transition: transform .2s, box-shadow .2s, background .2s;
}
.submit-btn:hover {
  background: #EA580C;
  transform: translateY(-2px);
  box-shadow: 0 0 36px rgba(249,115,22,0.45);
}

.sidebar-card {
  padding: 22px 24px;
  border-radius: 16px;
  border: 1px solid #E5E5E5;
  background: #FFFFFF;
}

.wa-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 20px;
  border-radius: 16px;
  border: 1px solid #E5E5E5;
  background: #FFFFFF;
  text-decoration: none;
  transition: border-color .2s, background .2s;
}
.wa-card:hover {
  border-color: rgba(34,197,94,0.25);
  background: rgba(34,197,94,0.04);
}

.note-card {
  padding: 18px 20px;
  border-radius: 16px;
  border: 1px solid rgba(249,115,22,0.2);
  background: #FEF0E7;
}
</style>
