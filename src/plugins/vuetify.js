import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#F97316',
          secondary: '#FDBA74',
          background: '#FAFAFA',
          surface: '#FFFFFF',
        }
      }
    }
  }
})
