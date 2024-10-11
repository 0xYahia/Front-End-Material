import '../index.css'
import { useRef, useState } from 'react'
import Filter from '../components/Filter/Filter'
import CardList from '../components/CardList/CardList'
import Modal from '../components/Modal/Modal'

const App = () => {

  const [state, setState] = useState([
    {
      id: 1,
      name: 'Yahia',
      age: 27,
      address: 'Cairo',
      phone: '0102702567',
      type: 'male'
    },
    {
      id: 2,
      name: 'Farah',
      age: 30,
      address: 'Cairo',
      phone: '0102702567',
      type: 'female',
    },
    {
      id: 3,
      name: 'Sayed',
      age: 33,
      address: 'Cairo',
      phone: '0102702567',
      type: 'male'
    },
    {
      id: 4,
      name: 'Asmaa',
      age: 33,
      address: 'Cairo',
      phone: '0102702567',
      type: 'female'
    },
  ])
  const inputEl = useRef(null)
  const [cardToggle, setCardToggle] = useState(true)
  const [filter, setFilter] = useState('')
  const [showModal, setShowModal] = useState(false)

  const deleteHandler = (e, id) => {
    console.log(id);
    // const newBoys = state.filter((_, index) => (id !== index))
    // setState(newBoys)
    // console.log(state);
    setState((prevState) => {
      return prevState.filter(el => (el.id !== id))
    })
  }

  // const print = () => {
  //   console.log(inputEl.current.value);
  // }

  // const focus = () => {
  //   inputEl.current.focus()
  // }

  const filtration = (name) => {
      setFilter(name)
  }

  const namesHandler = () => {
    if(filter.length !== 0) {
      return state.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()))
    }
    return state
  }

  return (
    <>
      <div className="mainContainer">
        <Modal show={showModal} closeModal={() => setShowModal(false)} />
        <h1>Boys List</h1>
        <div style={{display: 'flex', marginBottom: '20px'}}>
          <button className='btn' style={{marginRight: '20px'}} onClick={() => setCardToggle(!cardToggle)} >{cardToggle ? 'Hide Named': 'Show Names' }</button>
          <button  className='btn' onClick={() => setShowModal(true)} > Show Modal</button>
        </div>
        {/* <div>
          <input type="text" style={{marginBottom: '20px', marginRight: '20px'}} ref={inputEl} onChange={print} />
          <button onClick={focus} >Click To Focus</button>
        </div> */}
        <Filter filtration={filtration} />
        {cardToggle &&  <CardList userList={namesHandler()} deleteHandler={deleteHandler} /> }
      </div>
    </>
  )
}

export default App