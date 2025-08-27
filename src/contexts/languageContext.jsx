import { createContext, useState, useEffect } from 'react'
import translations from '../data/translations'

const LanguageContext = createContext()

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en')

  useEffect(() => {
    document.documentElement.lang = language
    const titles = {
      en: 'Melissa Vialaneix',
      fr: 'Mélissa Vialaneix'
    }
    document.title = titles[language]
    localStorage.setItem('language', language)
  }, [language])

  const getTranslation = (key) => {
    const keys = key.split('.')
    return keys.reduce((obj, k) => obj && obj[k], translations[language]) || key
  }

  const value = {
    language,
    setLanguage,
    trans: getTranslation,
    translations: translations[language]
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export { LanguageContext, LanguageProvider }