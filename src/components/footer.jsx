import styles from '../assets/components/Footer.module.css'
import GitHub from './icons/gitHub'
import LinkedIn from './icons/linkedIn'

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.iconsWrapper}>
        <LinkedIn />
        <GitHub />      
      </div>
      <div className={styles.textWrapper}>
        <p>Copyright &copy; 2025 Melissa Vialaneix.</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer