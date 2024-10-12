import { useState } from 'react'

import './App.css'
import ViewCounter from './ViewCounter'
import ViewText from './ViewText'

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((prev) => prev + 1)
  }

  return (
    <div className='App'>
      <ViewCounter num={count} increment={increment} />
      <ViewText />
    </div>
  )
}

export default App
