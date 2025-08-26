import { Navigate } from 'react-router-dom'
import { LanguageProvider } from './contexts/languageContext'
import App from './App'
import ErrorPage from './pages/errorPage'
import Welcome from './pages/welcome'
import AboutMe from './pages/aboutMe'
import Projects from './pages/projects'
import FreeTime from './pages/freeTime'

const routes = [
  {
    path: '/',
    element: <Navigate to='/en' replace />
  },
  {
    path: ':lang',
    element: (
      <LanguageProvider>
        <App />
      </LanguageProvider>
    ),
    errorElement: (
      <ErrorPage type='unexpected' />
    ),
    children: [
      { index: true, element: <Welcome /> },
      { path: 'aboutMe', element: <AboutMe /> },
      { path: 'projects', element: <Projects /> },
      { path: 'freetime', element: <FreeTime /> },
      { path: '*', element: <ErrorPage type='notFound' /> }
    ]
  },
  {
    path: '*',
    element: <ErrorPage type='notFound' />
  }
]

export default routes