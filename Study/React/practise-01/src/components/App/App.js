import style from './App.module.css'
import Card from '../Card/Card'
import { useState } from 'react'

const App = () => {

  const [state, setState] = useState([
    {
      name: 'Yahia',
      age: 27,
      address: 'Cairo',
      phone: '0102702567'
    },
    {
      name: 'Ahmed',
      age: 30,
      address: 'Cairo',
      phone: '0102702567'
    },
    {
      name: 'Sayed',
      age: 33,
      address: 'Cairo',
      phone: '0102702567'
    },
  ])

  const deleteHandler = (e, id) => {
    // const newBoys = state.filter((_, index) => (id !== index))
    // setState(newBoys)
    // console.log(state);
    setState((prevState) => {
      return prevState.filter((_, index) => (index !== id))
    })
    console.log('inside', state);
  }
  console.log('outside', state);

  return (
    <>
      <div className={style.mainContainer}>
        <h1>Boys Data</h1>
        <Card userList={state} type="boys" deleteHandler={deleteHandler} />
      </div>
    </>
  )
}

export default App