import { useState } from 'react'
function App() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)
  const date = new Date('Oct 22 2024')
  date.setDate(date.getDate() + count)

  function handlePrevStep() {
    setStep((curStep) => curStep - 1)
  }

  function handleNextStep() {
    setStep((curStep) => curStep + 1)
  }

  function handlePrevCount() {
    setCount((curCount) => curCount - step)
  }

  function handleNextCount() {
    setCount((curCount) => curCount + step)
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
        <button onClick={handlePrevStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleNextStep}>+</button>
      </div>
      <div>
        <button onClick={handlePrevCount}>-</button>
        <span>Count: {count}</span>
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
    </div>
  )
}

export default App
