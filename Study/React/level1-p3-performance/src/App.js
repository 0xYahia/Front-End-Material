import { useCallback, useMemo, useState } from 'react'

import './App.css'
import ViewCounter from './components/ViewCounter'
import ViewText from './components/ViewText'

const App = () => {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState({name: 'yahia'})
  // const name = 'yahia'
  const name = useMemo(() => {
    return user
  } , [user])

  const increment = () => {
    setCount((prev) => prev + 1)
  }

  // const ageHandler = () => {
  //   console.log('age');
  // }
  const ageHandler = useCallback(() => {
    console.log('age');
    setUser((prevState=> {
      if(prevState.age) {
        return prevState
      } else {
        return {...prevState, age: 27}
      }
    }))
  }, [])


  return (
    <div className='App'>
      <ViewCounter num={count} increment={increment} />
      <ViewText ageHandler={ageHandler} text={name} />
    </div>
  )
}

export default App
