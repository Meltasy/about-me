import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  const [user, setUser] = useState('Melissa')

  return (
    <>
      <NavBar />
      <main>
        <Outlet context={{ user }} />
      </main>
    </>
  )
}

export default App
