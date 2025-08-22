import useLanguage from '../hooks/useLanguage'

function Projects() {
  const { trans, translations } = useLanguage()

  return (
    <>
      <header>
        <h1>{trans('pages.projects')}</h1>
      </header>
      <main>
        <ul>
          {translations.projects.map((project) => (
            <li key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default Projects