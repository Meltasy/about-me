import { useState, useEffect } from 'react'
import { useParams, Outlet } from 'react-router-dom'
import useLanguage from './hooks/useLanguage'
import NavBar from './components/navBar'
import Footer from './components/footer'
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
    <div className='wrapperApp'>
      <NavBar />
      <main className='mainApp'>
        <Outlet context={{ user }}/>
      </main>
      <Footer />
    </div>
  )
}

export default App