import { useEffect, useState } from 'react'
import styles from '../assets/components/SkillsIcons.module.css'
import { JavaScript, Html, Css, Express, NodeJS, PostgreSQL, PrismaORM, React, ViteJS, Webpack } from './icons/index'

function SkillsIcons() {
  const [visibleIcons, setVisibleIcons] = useState(new Set())
  const icons = [
    <Html key='html' />,
    <Css key='css' />,
    <JavaScript key='js' />,
    <Webpack key='webpack' />,
    <React key='react' />,
    <ViteJS key='vite' />,
    <NodeJS key='node' />,
    <Express key='express' />,
    <PostgreSQL key='postgres' />,
    <PrismaORM key='prisma' />
  ]

  useEffect(() => {
    icons.forEach((_, index) => {
      setTimeout(() => {
        setVisibleIcons(prev => new Set(prev).add(index))
      }, index * 1000)
    })
  }, [])

  return (
    <div className={styles.wrapper}>
      {icons.map((icon, index) => (
        <div
          key={index}
          className={`${styles.iconBox} ${visibleIcons.has(index) ? styles.visible : ''}`}
        >
          {icon}
        </div>
      ))}
    </div>
  )
}

export default SkillsIcons