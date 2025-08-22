import { NavLink, useNavigate, useParams, useLocation } from 'react-router-dom'
import styles from '../assets/NavBar.module.css'
import useLanguage from '../hooks/useLanguage'

function NavBar() {
  const { lang } = useParams()
  const { trans, language } = useLanguage()
  const navigate = useNavigate()
  const location = useLocation()

  const handleLanguageSwitch = () => {
    const newLang = lang === 'en' ? 'fr' : 'en'
    const currentPath = location.pathname.replace(`/${lang}`, '') || ''
    navigate(`/${newLang}${currentPath}`)
  }

  const isAboutMeActive = () => {
    return location.pathname === `/${lang}` || location.pathname === `/${lang}/`
  }

  return (
    <nav className='wrapper'>
      <div>
        <NavLink
          to={`/${lang}`}
          className={() => {
            const active = isAboutMeActive()
            return active ? `${styles.linkTitle} ${styles.active}` : styles.linkTitle
          }}
        >
          {trans('pages.aboutMe')}
        </NavLink>
      </div>
      <div>
        <NavLink
          to={`/${lang}/projects`}
          className={({ isActive }) =>
            isActive ? `${styles.linkTitle} ${styles.active}` : styles.linkTitle
          }
        >
          {trans('pages.projects')}
        </NavLink>
      </div>
      <div>
        <NavLink
          to={`/${lang}/freetime`}
          className={({ isActive }) =>
            isActive ? `${styles.linkTitle} ${styles.active}` : styles.linkTitle
          }
        >
          {trans('pages.freeTime')}
        </NavLink>
      </div>
      <div>
        <button onClick={handleLanguageSwitch} className={styles.button}>
          {language == 'en' ? '🇫🇷' : '🇬🇧'}
        </button>
      </div>
    </nav>
  )
}

export default NavBar