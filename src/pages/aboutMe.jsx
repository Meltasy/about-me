import useLanguage from '../hooks/useLanguage'
import styles from '../assets/pages/AboutMe.module.css'
import myGardenBig from '../assets/images/my-profile/my-garden-big.jpg'
import myGardenSml from '../assets/images/my-profile/my-garden-sml.jpg'
import myOfficeBig from '../assets/images/my-profile/my-office-big.jpg'
import myOfficeSml from '../assets/images/my-profile/my-office-sml.jpg'

function AboutMe() {
  const { trans, translations } = useLanguage()

  return (
    <>
      <header>
        <h1>{trans('pages.aboutMe')}</h1>
      </header>
      <main className={styles.mainWrapper}>
        <div className={styles.summaryBoxOne}>
          <p>{translations.aboutMe.summary[0]}</p>
        </div>
        <div className={styles.imageBoxGarden}>
          <img src={myGardenBig} alt='Melissa in her garden' className={styles.imageGardenBig}/>
          <img src={myGardenSml} alt='Melissa in her garden' className={styles.imageGardenSml}/>
        </div>
        <div className={styles.summaryBoxTwo}>
          <p>{translations.aboutMe.summary[1]}</p>
        </div>
        <div className={styles.imageBoxOffice}>
          <img src={myOfficeBig} alt='Melissa in her office' className={styles.imageOfficeBig}/>
          <img src={myOfficeSml} alt='Melissa in her office' className={styles.imageOfficeSml}/>
        </div>
        <div className={styles.summaryBoxThree}>
          <p>{translations.aboutMe.summary[2]}</p>
        </div>
      </main>
    </>
  )
}

export default AboutMe