import { useState } from 'react'
import './index.css'

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
]

function App() {
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  function handlePrev() {
    if (step > 1) {
      setStep((curStep) => curStep - 1)
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep((curStep) => curStep + 1)
    }

    //! None correct
    // step = step + 1
    // console.log(step)
    // console.log(step)
  }

  return (
    <>
      <button className='close' onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>
          <p className='message'>
            Step {step}: {messages[step - 1]}
          </p>

          <div className='buttons'>
            <button
              onClick={handlePrev}
              style={{ background: '#7950f2', color: '#fff' }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ background: '#7950f2', color: '#fff' }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default App