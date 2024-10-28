import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Counter : {count}</h1>
    <button onClick={() => {
      setCount(count + 1)
    }}>Incremnt</button>
    <button onClick={() => {
      setCount(count - 1)
    }}>Decrement</button>
    </>
  )
}

export default App
