import { Link, useRouteError } from 'react-router-dom'
import useLanguage from '../hooks/useLanguage'

function ErrorPage({ type = 'unexpected' }) {
  const error = useRouteError()
  const { trans } = useLanguage()

  const title = trans(`errors.titles.${type}`)
  const message = trans(`errors.messages.${type}`)

  return (
    <div>
      <header>
        <h1>{title}</h1>
      </header>
      <main>
        <p>{message}</p>
        {error && <p><i>{error.message || 'Unknown error'}</i></p>}
        <Link to='/'>{trans('errors.homeLink') || 'Take me home!'}</Link>
      </main>
    </div>
  )
}

export default ErrorPage