import { Link } from 'react-router-dom'
import useLanguage from '../hooks/useLanguage'
import styles from '../assets/Projects.module.css'
import ProjectsCarousels from '../components/projectsCarousels'

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
                <div className={styles.headWrapper}>
                  <h3>{project.title}</h3>
                  <div>
                    <Link
                      to={project.previewUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={styles.button}
                    >
                      Preview
                    </Link>
                    <Link
                      to={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={styles.button}
                    >
                      Code
                    </Link>
                  </div>
                </div>
                <p>{project.description}</p>
                <h4>{trans('subTitle')}</h4>
                <ul>
                  {project.solutions.map((solution, index) => (
                    <li key={index}>{solution}</li>
                  ))}
                </ul>
                <div className={styles.skillsIcons}>
                  {project.skillsIcons.map((Icon, index) => (
                    <Icon key={index} width='30' height='30'/>
                  ))}
                </div>
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