import useLanguage from '../hooks/useLanguage'
import styles from '../assets/components/Footer.module.css'
import GitHub from './icons/gitHub'
import LinkedIn from './icons/linkedIn'
import CVDownload from './icons/CVDownload'

const Footer = () => {
const { translations } = useLanguage()

  return (
    <footer className={styles.wrapper}>
      <div className={styles.iconsWrapper}>
        <LinkedIn />
        <GitHub />
        <CVDownload />
      </div>
      <div className={styles.textWrapper}>
        {translations.footer.copyright.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </footer>
  )
}

export default Footer