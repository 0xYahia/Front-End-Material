import style from './App.module.css'
import Card from '../Card/Card'
import { useRef, useState } from 'react'

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

  const inputEl = useRef(null)

  const [cardToggle, setCardToggle] = useState(true)

  const deleteHandler = (e, id) => {
    // const newBoys = state.filter((_, index) => (id !== index))
    // setState(newBoys)
    // console.log(state);
    setState((prevState) => {
      return prevState.filter((_, index) => (index !== id))
    })
  }

  const print = () => {
    console.log(inputEl.current.value);
  }

  const focus = () => {
    inputEl.current.focus()
  }

  return (
    <>
      <div className={style.mainContainer}>
        <h1>Boys Data</h1>
        <button style={{marginBottom: '20px'}} onClick={() => setCardToggle(!cardToggle)} >{cardToggle ? 'Hide Named': 'Show Names' }</button>
        <div>
          <input type="text" style={{marginBottom: '20px', marginRight: '20px'}} ref={inputEl} onChange={print} />
          <button onClick={focus} >Click To Focus</button>
        </div>
        {cardToggle ?  <Card userList={state} type="boys" deleteHandler={deleteHandler} /> : '' }
      </div>
    </>
  )
}

export default App