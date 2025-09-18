import { createI18n } from 'vue-i18n'
import es from '@/locales/es.json'
import cat from '@/locales/cat.json'
import en from '@/locales/en.json'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'es',
  fallbackLocale: 'en',
  messages: { es, en, cat }
})

export default i18n