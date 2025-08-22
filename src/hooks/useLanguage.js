import { useContext } from 'react'
import { LanguageContext } from '../contexts/languageContext'

function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage hook must be used within a LanguageProvider')
  }
  return context
}

export default useLanguage