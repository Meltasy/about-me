import { useEffect, useState } from 'react'
import styles from '../assets/FlagsIcons.module.css'
import '/node_modules/flag-icons/css/flag-icons.min.css'
import flagQuebec from '../assets/images/flagQuebec.svg'

function FlagsIcons() {
  const [visibleIcons, setVisibleIcons] = useState(new Set())
  const flags = [
    { type: 'flag-icon', class: 'fi fi-gb-eng' },
    { type: 'flag-icon', class: 'fi fi-gb-sct' },
    { type: 'flag-icon', class: 'fi fi-gb-wls' },
    { type: 'flag-icon', class: 'fi fi-gb' },
    { type: 'flag-icon', class: 'fi fi-tw' },
    { type: 'flag-icon', class: 'fi fi-cn' },
    { type: 'custom', src: flagQuebec, alt: 'Quebec flag' },
    { type: 'flag-icon', class: 'fi fi-ca' },
    { type: 'flag-icon', class: 'fi fi-es-pv' },
    { type: 'flag-icon', class: 'fi fi-fr' },
  ]

  useEffect(() => {
    flags.forEach((_, index) => {
      setTimeout(() => {
        setVisibleIcons(prev => new Set(prev).add(index))
      }, index * 1000)
    })
  }, [])

  return (
    <div className={styles.wrapper}>
      {flags.map((flag, index) => (
        <div
          key={index}
          className={`${styles.iconBox} ${visibleIcons.has(index) ? styles.visible : ''}`}
        >
          {flag.type === 'flag-icon' ? (
            <span className={flag.class}></span>
          ) : (
            <img src={flag.src} alt={flag.alt} className={styles.customFlag} />
          )}
        </div>
      ))}
    </div>
  )
}

export default FlagsIcons
