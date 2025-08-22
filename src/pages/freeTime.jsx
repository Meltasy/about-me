import useLanguage from '../hooks/useLanguage'

function FreeTime() {
  const { trans, translations } = useLanguage()

  return (
    <>
      <header>
        <h1>{trans('pages.freeTime')}</h1>
      </header>
      <main>
        <ul>
          {translations.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default FreeTime