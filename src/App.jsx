import { useState, useEffect } from 'react'
import { useParams, Outlet } from 'react-router-dom'
import useLanguage from './hooks/useLanguage'
import NavBar from './components/navBar'
import ErrorPage from './pages/errorPage'

function App() {
  const [user, setUser] = useState('Melissa')
  const { lang } = useParams()
  const { language, setLanguage } = useLanguage()

  const validLanguages = ['en', 'fr']
  if (!validLanguages.includes(lang)) {
    return <ErrorPage type='notFound' />
  }

  useEffect(() => {
    if (lang !== language) {
      setLanguage(lang)
    }
  }, [lang, language, setLanguage])

  return (
    <>
      <NavBar />
      <main>
        <Outlet context={{ user }}/>
      </main>
    </>
  )
}

export default App