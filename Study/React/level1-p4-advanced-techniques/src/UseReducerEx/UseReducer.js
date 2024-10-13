import { useReducer, useState } from 'react'
import '../index.css'

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + action.payload }
    case DECREMENT:
      return { count: state.count - action.payload }
    default:
      return state
  }
}

const UseReducer = () => {
  // const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, { count: 1 })
  return (
    <div>
      <button
        className='btn'
        onClick={() => dispatch({ type: INCREMENT, payload: 2 })}
      >
        Increment
      </button>
      <span>{state.count}</span>
      <button
        className='btn'
        onClick={() => dispatch({ type: DECREMENT, payload: 2 })}
      >
        Decrement
      </button>
    </div>
  )
}

export default UseReducer
