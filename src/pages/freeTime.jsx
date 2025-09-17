import useLanguage from '../hooks/useLanguage'
import styles from '../assets/pages/FreeTime.module.css'
import TrailCarousel from '../components/trailCarousel'
import FlagsIcons from '../components/flagsIcons'

function FreeTime() {
  const { trans, translations } = useLanguage()

  return (
    <div className='contentWrapper'>
      <header>
        <h1>{trans('pages.freeTime')}</h1>
      </header>
      <main className={styles.hobbiesWrapper}>
        <section className={styles.trailWrapper}>
          <TrailCarousel />
          <div>
            <h3>{translations.hobbies[0].title}</h3>
            <p>{translations.hobbies[0].description}</p>
          </div>
        </section>
        <section className={styles.exploreWrapper}>
          <h3>{translations.hobbies[1].title}</h3>
          <FlagsIcons />
          <p>{translations.hobbies[1].description}</p>
        </section>
        <section className={styles.growWrapper}>
          <h3>{translations.hobbies[2].title}</h3>
          <div className={styles.emojiWrapper}>
            <span>🌱</span>
            <span>🍅</span>
            <span>🍆</span>
            <span>🌶️</span>
            <span>🥔</span>
            <span>🥬</span>
            <span>🥒</span>
            <span>🍎</span>
            <span>🍋</span>
            <span>🍓</span>
          </div>
          <p>{translations.hobbies[2].description}</p>
        </section>
      </main>
    </div>
  )
}

export default FreeTime