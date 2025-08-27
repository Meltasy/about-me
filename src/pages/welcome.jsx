import { useEffect, useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import useLanguage from '../hooks/useLanguage'
import SkillsIcons from '../components/skillsIcons'
import styles from '../assets/Welcome.module.css'
import Melissa from '../assets/images/MelissaPortrait.jpg'

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
    <>
      <header className={styles.wrapper}>
        <div className={styles.headingBox}>
          <h1>{trans('header.name')}</h1>
          <h2>
            {lang === 'fr' ? trans('header.title') + ' ' : ''}
            {currentTitle}
            {showCursor && <span className={styles.cursor}>|</span>}
            {lang === 'en' ? ' ' + trans('header.title') : ''}
          </h2>
        </div>
        <div className={styles.iconsBox}>
          <SkillsIcons />
        </div>
        <div className={styles.summaryBox}>
          <p>{trans('summary')}</p>
        </div>
        <div className={styles.imageBox}>
          <img src={Melissa} alt='placeholder' className={styles.image}/>
        </div>
      </header>
      <main>
      </main>
    </>
  )
}

export default Welcome