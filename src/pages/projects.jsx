import useLanguage from '../hooks/useLanguage'
import styles from '../assets/Projects.module.css'
import ProjectsCarousels from '../components/projectsCarousels'
import { Link } from 'react-router-dom'

function Projects() {
  const { trans, translations } = useLanguage()

  return (
    <>
      <header>
        <h1>{trans('pages.projects')}</h1>
      </header>
      <main>
        <ul className={styles.projectsWrapper}>
          {translations.projects.map((project) => (
            <li key={project.id} className={styles.projectWrapper}>
              <div className={styles.textWrapper}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>This project solves these challenges by:</p>
                <ul>
                  {project.solutions.map((solution, index) => (
                    <li key={index}>{solution}</li>
                  ))}
                </ul>
                <p>Check out my{' '}
                  <Link to={project.url}>
                  {project.title}!
                  </Link>
                </p>
              </div>
              <ProjectsCarousels projectImage={project.imageKey} projectTitle={project.title}/>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default Projects