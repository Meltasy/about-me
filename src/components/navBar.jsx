import { NavLink, useNavigate, useParams, useLocation } from 'react-router-dom'
import useLanguage from '../hooks/useLanguage'
import styles from '../assets/NavBar.module.css'
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
    <nav className='wrapper'>
      <div className='miniWrapper'>
        <div>
          <NavLink
            to={`/${lang}`}
            className={() => {
              const active = isAboutMeActive()
              return active ? `${styles.linkTitle} ${styles.active}` : styles.linkTitle
            }}
          >
            {trans('header.name')}
          </NavLink>
        </div>
        <div>
          <button onClick={handleLanguageSwitch} className={styles.button}>
            {language == 'en' ? <span className='fi fi-fr'></span> : <span className='fi fi-gb'></span>}
          </button>
        </div>
      </div>
      <div className='miniWrapper'>
        <div>
          <NavLink
            to={`/${lang}/aboutMe`}
            className={({ isActive }) =>
              isActive ? `${styles.linkTitle} ${styles.active}` : styles.linkTitle
            }
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
      </div>
    </nav>
  )
}

export default NavBar