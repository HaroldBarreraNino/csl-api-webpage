import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ApiShowcasePage from './components/ApiShowcasePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ApiShowcasePage />
    </>
  )
}

export default App
