import { NavLink, useNavigate, useParams, useLocation } from 'react-router-dom'
import useLanguage from '../hooks/useLanguage'
import styles from '../assets/components/NavBar.module.css'
import '/node_modules/flag-icons/css/flag-icons.min.css'

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
    <nav className={styles.wrapper}>
      <div className={styles.navNameFlag}>
        <NavLink
          to={`/${lang}`}
          className={() => {
            const active = isAboutMeActive()
            return active ? `${styles.linkTitle} ${styles.active}` : styles.linkTitle
          }}
        >
          {trans('header.name')}
        </NavLink>
        <button onClick={handleLanguageSwitch} className={styles.button}>
          {language == 'en' ? <span className='fi fi-fr'></span> : <span className='fi fi-gb'></span>}
        </button>
      </div>
      <div className={styles.navMenu}>
        <NavLink
          to={`/${lang}/aboutMe`}
          className={({ isActive }) =>
            isActive ? `${styles.linkTitle} ${styles.active}` : styles.linkTitle
          }
        >
          {trans('pages.aboutMe')}
        </NavLink>
        <NavLink
          to={`/${lang}/projects`}
          className={({ isActive }) =>
            isActive ? `${styles.linkTitle} ${styles.active}` : styles.linkTitle
          }
        >
          {trans('pages.projects')}
        </NavLink>
        <NavLink
          to={`/${lang}/freetime`}
          className={({ isActive }) =>
            isActive ? `${styles.linkTitle} ${styles.active}` : styles.linkTitle
          }
        >
          {trans('pages.freeTime')}
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar