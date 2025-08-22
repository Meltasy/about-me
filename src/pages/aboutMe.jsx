import useLanguage from '../hooks/useLanguage'

function AboutMe() {
  const { trans } = useLanguage()
  
  return (
    <>
      <header>
        <h1>{trans('header.name')}</h1>
        <h2>{trans('header.title')}</h2>
      </header>
      <main>
        <p>TBC ...</p>
      </main>
    </>
  )
}

export default AboutMe