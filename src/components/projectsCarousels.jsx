import { useState, useEffect } from 'react'
import styles from '../assets/components/ProjectsCarousels.module.css'
import screenshots from '../data/screenshots'

function ProjectsCarousels({ projectImage, projectTitle }) {
  const images = screenshots[projectImage]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [onAutoPlay, setOnAutoPlay] = useState(true)

  useEffect(() => {
    if (!onAutoPlay || !images || images.length <= 1) return
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [onAutoPlay, images])

  const handleUserInteraction = () => {
    setOnAutoPlay(false)
    setTimeout(() => setOnAutoPlay(true), 5000)
  }

  const goToPrevious = () => {
    handleUserInteraction()
    setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1)
  }

  const goToNext = () => {
    handleUserInteraction()
    setCurrentIndex(prev => (prev + 1) % images.length)
  }

  const goToSlide = (index) => {
    handleUserInteraction()
    setCurrentIndex(index)
  }

  if (!images || images.length === 0) {
    return <p>No screenshots available.</p>
  }

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carousel}>
        <button
          className={styles.carouselBtn + ' ' + styles.prevBtn}
          onClick={goToPrevious}
          aria-label='Previous image'
        >
          ◀
        </button>
        <div className={styles.imgWrapper}>
          <img
            src={images[currentIndex]}
            alt={`${projectTitle} screenshot ${currentIndex + 1}`}
            className={styles.carouselImg}
            loading='lazy'
          />
        </div>
        <button
          className={styles.carouselBtn + ' ' + styles.nextBtn}
          onClick={goToNext}
          aria-label='Next image'
        >
          ▶
        </button>
      </div>
      <div className={styles.indicators}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectsCarousels