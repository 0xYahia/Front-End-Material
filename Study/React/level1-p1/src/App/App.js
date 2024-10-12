import '../index.css'
import {  useState } from 'react'
import CardList from '../components/CardList/CardList'
import Modal from '../components/Modal/Modal'
import Button from '../components/Layout/Buttons'
import AddUser from '../components/AddUser/AddUser'
import FilterInput from '../components/FilterInput/FilterInput'

const App = () => {

  const [state, setState] = useState([
    {
      id: 1000,
      name: 'Yahia',
      age: 27,
      address: 'Cairo',
      phone: '0102702567',
      gender: 'male'
    },
    {
      id: 2000,
      name: 'Farah',
      age: 30,
      address: 'Cairo',
      phone: '0102702567',
      gender: 'Female',
    },
    {
      id: 3000,
      name: 'Sayed',
      age: 33,
      address: 'Cairo',
      phone: '0102702567',
      gender: 'male'
    },
    {
      id: 4000,
      name: 'Asmaa',
      age: 33,
      address: 'Cairo',
      phone: '0102702567',
      gender: 'Female'
    },
  ])
  // const inputEl = useRef(null)
  const [cardToggle, setCardToggle] = useState(true)
  const [filter, setFilter] = useState('')
  const [showModal, setShowModal] = useState(false)

  const addUserHandler = (data) => setState((prevState) =>  [...prevState, data])


  const deleteHandler = (e, id) => {
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
    console.log({state});
    if(filter.length !== 0) {
      return state.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()))
    }
    return state
  }

  return (
    <>
      <div className="mainContainer">
        <h1>List of Data</h1>
        <div style={{display: 'flex', marginBottom: '20px'}}>
          <Button style={{marginRight: '20px'}} onClick={() => setCardToggle(!cardToggle)}>
              {cardToggle ? 'Hide Names': 'Show Names' }
          </Button>
          {/* <button className='btn' style={{marginRight: '20px'}} onClick={() => setCardToggle(!cardToggle)} >{cardToggle ? 'Hide Named': 'Show Names' }</button> */}
          <button  className='btn' onClick={() => setShowModal(true)} > Show Modal</button>
        </div>
        {/* <div>
          <input type="text" style={{marginBottom: '20px', marginRight: '20px'}} ref={inputEl} onChange={print} />
          <button onClick={focus} >Click To Focus</button>
        </div> */}
        <FilterInput filtration={filtration} />
        {cardToggle &&  <CardList userList={namesHandler()} deleteHandler={deleteHandler} /> }
      </div>
      <Modal show={showModal} closeModal={() => setShowModal(false)}>
        <AddUser addUserHandler={addUserHandler} closeModal={() => setShowModal(false)} />
      </Modal>
    </>
  )
}

export default App