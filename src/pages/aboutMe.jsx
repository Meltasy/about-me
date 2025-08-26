import useLanguage from '../hooks/useLanguage'

function AboutMe() {
  const { trans } = useLanguage()

  return (
    <>
      <header>
          <h1>{trans('pages.aboutMe')}</h1>
      </header>
      <main>

      </main>
    </>
  )
}

export default AboutMe