import { useState } from 'react'
import NotificationButton from './components/NotificationButton'
import logo from './logo.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Ola mundo</h1>
      <NotificationButton/>
    </>
    
  )
}

export default App
