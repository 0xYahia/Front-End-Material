import { useState } from 'react'
function App() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)
  const date = new Date('Oct 22 2024')
  date.setDate(date.getDate() + count)

  function handlePrevCount() {
    setCount((curCount) => curCount - step)
  }

  function handleNextCount() {
    setCount((curCount) => curCount + step)
  }

  function handleReset() {
    setCount(0)
    setStep(1)
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div>
        <input
          type='range'
          value={step}
          onChange={(e) => setStep(+e.target.value)}
          step={1}
          min={0}
          max={20}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={handlePrevCount}>-</button>
        <input
          type='text'
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
        <button onClick={handleNextCount}>+</button>
      </div>

      <div>
        <span>
          {count === 0
            ? 'Today is'
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days ago was`}
        </span>
        <span>Today is {date.toDateString()}</span>
      </div>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  )
}

export default App
