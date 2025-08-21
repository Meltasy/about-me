import { NavLink } from 'react-router-dom'
import styles from '../assets/NavBar.module.css'

function NavBar() {
  return (
    <nav className='wrapper'>
      <div>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? `${styles.linkTitle} ${styles.active}` : styles.linkTitle
          }
        >
          About Me
        </NavLink>
      </div>
      <div>
        <NavLink
          to='/projects'
          className={({ isActive }) =>
            isActive ? `${styles.linkTitle} ${styles.active}` : styles.linkTitle
          }
        >
          Projects
        </NavLink>
      </div>
      <div>
        <NavLink
          to='/freetime'
          className={({ isActive }) =>
            isActive ? `${styles.linkTitle} ${styles.active}` : styles.linkTitle
          }
        >
          Free Time
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar