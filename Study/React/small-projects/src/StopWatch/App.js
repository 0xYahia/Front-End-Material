import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [time, setTimer] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    let interval
    if (running) {
      interval = setInterval(() => {
        setTimer((prevState) => {
          return prevState + 10
        })
      }, 10)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [running])

  return (
    <div>
      <h1 className='text-4xl font-bold'>Stop Watch</h1>
      <div>
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className='flex gap-4 ms-2 mt-4'>
        {running ? (
          <button
            className='border p-2 rounded-md'
            onClick={() => setRunning(false)}
          >
            Stop
          </button>
        ) : (
          <button
            className='border p-2 rounded-md'
            onClick={() => setRunning(true)}
          >
            Start
          </button>
        )}
        <button className='border p-2 rounded-md' onClick={() => setTimer(0)}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default App
