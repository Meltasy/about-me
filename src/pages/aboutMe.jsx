import useLanguage from '../hooks/useLanguage'
import styles from '../assets/pages/AboutMe.module.css'
import Melissa from '../assets/images/MelissaProfile.jpg'

function AboutMe() {
  const { trans, translations } = useLanguage()

  return (
    <>
      <header>
        <h1>{trans('pages.aboutMe')}</h1>
      </header>
      <main className={styles.mainWrapper}>
        <div className={styles.summaryBox}>
          {translations.aboutMe.summary.map((paragrpah, index) => (
            <p key={index}>{paragrpah}</p>
          ))}
        </div>
        <div className={styles.imageBox}>
          <img src={Melissa} alt='placeholder' className={styles.image}/>
        </div>
      </main>
    </>
  )
}

export default AboutMe