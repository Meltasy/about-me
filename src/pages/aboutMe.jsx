import { useEffect, useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import styles from '../assets/AboutMe.module.css'
import useLanguage from '../hooks/useLanguage'
import SkillsPyramid from '../components/skillsPyramid'

function AboutMe() {
  const { lang } = useParams()
  const { trans } = useLanguage()
  const [currentTitle, setCurrentTitle] = useState('')
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  
  const titles = useMemo(() =>[
    trans('header.title1'),
    trans('header.title2'),
    trans('header.title3')
  ], [trans])

  useEffect(() => {
    if (index === titles.length) return
    const typingSpeed = deleting ? 50 : 120
    const timeout = setTimeout(() => {
      setCurrentTitle(
        titles[index].substring(0, subIndex + (deleting ? -1 : 1))
      )
      setSubIndex(subIndex + (deleting ? -1 : 1))
      if (!deleting && subIndex === titles[index].length) {
        if (index === titles.length - 1) {
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
      <header>
        <h1>{trans('header.name')}</h1>
        <h2>
          {lang == 'fr' ? trans('header.title') + ' ' : ''}
          {currentTitle}
          <span className={styles.cursor}></span>
          {lang == 'en' ? ' ' + trans('header.title') : ''}
        </h2>
      </header>
      <main>
        <div>
          <SkillsPyramid />
        </div>
      </main>
    </>
  )
}

export default AboutMe