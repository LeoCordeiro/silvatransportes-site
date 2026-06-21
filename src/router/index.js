import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Sobre from '@/pages/Sobre.vue'
import ComoFunciona from '@/pages/ComoFunciona.vue'
import Contato from '@/pages/SolicitarCuradoria.vue'
import PoliticaPrivacidade from '@/pages/PoliticaPrivacidade.vue'
import PoliticaTermos from '@/pages/PoliticaTermos.vue'
import PoliticaComissao from '@/pages/PoliticaComissao.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/sobre', component: Sobre },
  { path: '/como-funciona', component: ComoFunciona },
  { path: '/contato', component: Contato },
  { path: '/privacidade', component: PoliticaPrivacidade },
  { path: '/termos', component: PoliticaTermos },
  { path: '/comissao', component: PoliticaComissao },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() { return { top: 0 } }
})

export default router
