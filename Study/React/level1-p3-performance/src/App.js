import { useCallback, useMemo, useState } from 'react'

import './App.css'
import ViewCounter from './components/ViewCounter'
import ViewText from './components/ViewText'

const App = () => {
  const [count, setCount] = useState(0)
  // const name = 'yahia'
  const name = useMemo(() => {
    return {name:'yahia'}
  } , [])

  const increment = () => {
    setCount((prev) => prev + 1)
  }

  // const ageHandler = () => {
  //   console.log('age');
  // }
  const ageHandler = useCallback(() => {
    console.log('age');
  }, [])

  return (
    <div className='App'>
      <ViewCounter num={count} increment={increment} />
      <ViewText ageHandler={ageHandler} text={name} />
    </div>
  )
}

export default App
