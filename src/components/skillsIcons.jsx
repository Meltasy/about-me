import { useEffect, useState } from 'react'
import styles from '../assets/SkillsIcons.module.css'
import JavaScript from '../components/icons/javascript'
import Html from '../components/icons/html'
import Css from '../components/icons/css'
import Express from '../components/icons/express'
import NodeJS from '../components/icons/nodejs'
import PostgreSQL from '../components/icons/postgresql'
import PrismaORM from '../components/icons/prismaorm'
import React from '../components/icons/react'
import ViteJS from '../components/icons/vitejs'
import Webpack from '../components/icons/webpack'

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