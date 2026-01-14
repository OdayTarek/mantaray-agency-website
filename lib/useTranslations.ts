'use client'

import { useI18n } from '@/components/layout/I18nProvider'
import { translations, type Language } from './translations'

// Use a more flexible type that allows both language translations
type TranslationsType = typeof translations.en | typeof translations.ar

export function useTranslations(): TranslationsType {
  const { language } = useI18n()
  return translations[language as Language] || translations.en
}

export function useLanguage(): Language {
  const { language } = useI18n()
  return language as Language
}
