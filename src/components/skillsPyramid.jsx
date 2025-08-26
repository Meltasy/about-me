import styles from '../assets/SkillsPyramid.module.css'
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

function SkillsPyramid() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.entryOne}>
        <JavaScript />
      </div>
      <div className={styles.entryTwo}>
        <Css />
        <Html />
      </div>
      <div className={styles.entryThree}>
        <React />
        <ViteJS />
        <Webpack />
      </div>
      <div className={styles.entryFour}>
        <Express />
        <NodeJS />
        <PostgreSQL />
        <PrismaORM />
      </div>
    </div>
  )
}

export default SkillsPyramid