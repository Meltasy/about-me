import App from './App'
import ErrorPage from './pages/errorPage'
import AboutMe from './pages/aboutMe'
import Projects from './pages/projects'
import FreeTime from './pages/freeTime'

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement:
      <ErrorPage
        title='Oops!'
        message='Sorry, an unexpected error has occurred.'
      />,
    children: [
      {
        index: true,
        element: <AboutMe />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'freetime',
        element: <FreeTime />
      },
      {
        path: '*',
        element:
          <ErrorPage
            title='404 Not Found'
            message='Sorry, page not found.'
          />
      }
    ]
  }
]

export default routes