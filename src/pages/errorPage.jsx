import { Link, useRouteError } from 'react-router-dom'

function ErrorPage({ title, message }) {
  const error = useRouteError()

  return (
    <div>
      <header>
        <h1>{title}</h1>
      </header>
      <main>
        <div>
          <p>{message}</p>
          <p>
            <i>{error?.message || 'Unknown error'}</i>
          </p>
        </div>
        <Link to='/'>
          Take me home!
        </Link>
      </main>
    </div>
  )
}

export default ErrorPage