import { useEffect, useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import useLanguage from '../hooks/useLanguage'
import SkillsIcons from '../components/skillsIcons'
import styles from '../assets/pages/Welcome.module.css'
import myHeadshotBig from '../assets/images/my-profile/my-headshot-big.jpg'
import myHeadshotSml from '../assets/images/my-profile/my-headshot-sml.jpg'

function Welcome() {
  const { lang } = useParams()
  const { trans } = useLanguage()
  const [currentTitle, setCurrentTitle] = useState('')
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  
  const titles = useMemo(() =>[
    trans('header.title1'),
    trans('header.title2'),
    trans('header.title3')
  ], [trans])

  useEffect(() => {
    if (index === titles.length) return
    const typingSpeed = deleting ? 75 : 150
    const timeout = setTimeout(() => {
      setCurrentTitle(
        titles[index].substring(0, subIndex + (deleting ? -1 : 1))
      )
      setSubIndex(subIndex + (deleting ? -1 : 1))
      if (!deleting && subIndex === titles[index].length) {
        if (index === titles.length - 1) {
          setShowCursor(false)
          return
        }
        setTimeout(() => setDeleting(true), 1000)
      } else if (deleting && subIndex === 0) {
        setDeleting(false)
        setIndex((prev) => prev + 1)
      }
    }, typingSpeed)
    return () => clearTimeout(timeout)
  }, [subIndex, index, deleting, titles])
  
  return (
    <div className='contentWrapper'>
      <header className={styles.header}>
        <h1>{trans('header.name')}</h1>
      </header>
      <main className={styles.mainWrapper}>
        <div className={styles.headingBox}>
          <h2>
            {lang === 'fr' ? trans('header.title') + ' ' : ''}
            {currentTitle}
            {showCursor && <span className={styles.cursor}>|</span>}
            {lang === 'en' ? ' ' + trans('header.title') : ''}
          </h2>
          <SkillsIcons />
        </div>
        <div className={styles.imageBox}>
          <img src={myHeadshotBig} alt='Headshot of Melissa' className={styles.imageBig}/>
          <img src={myHeadshotSml} alt='Headshot of Melissa' className={styles.imageSml}/>
        </div>
        <div className={styles.summaryBox}>
          <p>{trans('welcome.summary')}</p>
        </div>
        <div className={styles.straplineBox}>
          <a href='mailto:melissa.bryant.elt@gmail.com?subject=Contact%20from%20website' title={trans('welcome.emailMe')} className={styles.straplineLink}>
            <p>{trans('welcome.strapline')}<em>{trans('welcome.question')}</em></p>
          </a>
        </div>
      </main>
    </div>
  )
}

export default Welcome