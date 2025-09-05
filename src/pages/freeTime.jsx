import useLanguage from '../hooks/useLanguage'
import styles from '../assets/FreeTime.module.css'
import TrailCarousel from '../components/trailCarousel'
import FlagsIcons from '../components/flagsIcons'

function FreeTime() {
  const { trans, translations } = useLanguage()

  return (
    <>
      <header>
        <h1>{trans('pages.freeTime')}</h1>
      </header>
      <main className={styles.hobbiesWrapper}>
        <section className={styles.trailWrapper}>
          <TrailCarousel />
          <div className={styles.textWrapper}>
            <h3>{translations.hobbies[0].title}</h3>
            <p>{translations.hobbies[0].description}</p>
            <p>{translations.hobbies[0].racesIntro}</p>
            <ul>
              {translations.hobbies[0].races.map((race, index) => (
                <li key={index}>{race}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className={styles.exploreWrapper}>
          <h3>{translations.hobbies[1].title}</h3>
          <FlagsIcons />
          <p>{translations.hobbies[1].description}</p>
        </section>
        <section className={styles.growWrapper}>
          <h3>{translations.hobbies[2].title}</h3>
        </section>
      </main>
    </>
  )
}

export default FreeTime