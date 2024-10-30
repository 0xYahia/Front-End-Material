import { useState } from "react"

function Form({ handleAddItem }) {
  const [formState, setFormState] = useState({
    description: '',
    quantity: 1,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formState.description === '') return
    const newItem = formState
    handleAddItem(newItem)
  }

  return (
    <>
      <div className='add-form'>
        <h3>What do you need for your 😍 trip?</h3>
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px' }}>
          <select
            value={formState.quantity}
            onChange={(e) =>
              setFormState({ ...formState, quantity: +e.target.value })
            }
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>

          <input
            value={formState.description}
            onChange={(e) =>
              setFormState({ ...formState, description: e.target.value })
            }
            type='text'
            placeholder='item...'
          />
          <button>ADD</button>
        </form>
      </div>
    </>
  )
}

export default Form;